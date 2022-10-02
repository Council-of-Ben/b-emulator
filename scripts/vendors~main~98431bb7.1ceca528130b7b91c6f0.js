(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "+NU8": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                    return "undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
                },
                i = function(e) {
                    return r(e, "overflow") + r(e, "overflow-y") + r(e, "overflow-x")
                };
            t.default = function(e) {
                if (!(e instanceof HTMLElement)) return window;
                for (var t = e; t && t !== document.body && t !== document.documentElement && t.parentNode;) {
                    if (/(scroll|auto)/.test(i(t))) return t;
                    t = t.parentNode
                }
                return window
            }
        },
        EDFO: function(e, t, n) {
            "use strict";
            e.exports = n("ih7v")
        },
        HVci: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top + window.pageYOffset,
                    left: t.left + window.pageXOffset
                }
            }
        },
        JeI0: function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = n("q1tI"),
                s = h(o),
                a = h(n("17x9")),
                l = n("i8i4"),
                c = n("UxbX"),
                u = h(n("9/5/")),
                f = h(n("hKI/")),
                d = h(n("+NU8")),
                p = h(n("pxCl"));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var m = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== r(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.lazyLoadHandler = n.lazyLoadHandler.bind(n), e.throttle > 0 && (e.debounce ? n.lazyLoadHandler = (0, u.default)(n.lazyLoadHandler, e.throttle) : n.lazyLoadHandler = (0, f.default)(n.lazyLoadHandler, e.throttle)), n.state = {
                        visible: !1
                    }, n
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + r(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), i(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this._mounted = !0;
                        var e = this.getEventNode();
                        this.lazyLoadHandler(), this.lazyLoadHandler.flush && this.lazyLoadHandler.flush(), (0, c.add)(window, "resize", this.lazyLoadHandler), (0, c.add)(e, "scroll", this.lazyLoadHandler), e !== window && (0, c.add)(window, "scroll", this.lazyLoadHandler)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.state.visible || this.lazyLoadHandler()
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return t.visible
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._mounted = !1, this.lazyLoadHandler.cancel && this.lazyLoadHandler.cancel(), this.detachListeners()
                    }
                }, {
                    key: "getEventNode",
                    value: function() {
                        return (0, d.default)((0, l.findDOMNode)(this))
                    }
                }, {
                    key: "getOffset",
                    value: function() {
                        var e = this.props,
                            t = e.offset,
                            n = e.offsetVertical,
                            r = e.offsetHorizontal,
                            i = e.offsetTop,
                            o = e.offsetBottom,
                            s = e.offsetLeft,
                            a = e.offsetRight,
                            l = e.threshold || t,
                            c = n || l,
                            u = r || l;
                        return {
                            top: i || c,
                            bottom: o || c,
                            left: s || u,
                            right: a || u
                        }
                    }
                }, {
                    key: "lazyLoadHandler",
                    value: function() {
                        if (this._mounted) {
                            var e = this.getOffset(),
                                t = (0, l.findDOMNode)(this),
                                n = this.getEventNode();
                            if ((0, p.default)(t, n, e)) {
                                var r = this.props.onContentVisible;
                                this.setState({
                                    visible: !0
                                }, (function() {
                                    r && r()
                                })), this.detachListeners()
                            }
                        }
                    }
                }, {
                    key: "detachListeners",
                    value: function() {
                        var e = this.getEventNode();
                        (0, c.remove)(window, "resize", this.lazyLoadHandler), (0, c.remove)(e, "scroll", this.lazyLoadHandler), e !== window && (0, c.remove)(window, "scroll", this.lazyLoadHandler)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            r = e.height,
                            i = e.width,
                            a = this.state.visible,
                            l = {
                                height: r,
                                width: i
                            },
                            c = "LazyLoad" + (a ? " is-visible" : "") + (n ? " " + n : "");
                        return s.default.createElement(this.props.elementType, {
                            className: c,
                            style: l
                        }, a && o.Children.only(t))
                    }
                }]), t
            }(o.Component);
            t.default = m, m.propTypes = {
                children: a.default.node.isRequired,
                className: a.default.string,
                debounce: a.default.bool,
                elementType: a.default.string,
                height: a.default.oneOfType([a.default.string, a.default.number]),
                offset: a.default.number,
                offsetBottom: a.default.number,
                offsetHorizontal: a.default.number,
                offsetLeft: a.default.number,
                offsetRight: a.default.number,
                offsetTop: a.default.number,
                offsetVertical: a.default.number,
                threshold: a.default.number,
                throttle: a.default.number,
                width: a.default.oneOfType([a.default.string, a.default.number]),
                onContentVisible: a.default.func
            }, m.defaultProps = {
                elementType: "div",
                debounce: !0,
                offset: 0,
                offsetBottom: 0,
                offsetHorizontal: 0,
                offsetLeft: 0,
                offsetRight: 0,
                offsetTop: 0,
                offsetVertical: 0,
                throttle: 250
            }
        },
        ih7v: function(e, t, n) {
            (function(e, r) {
                var i, o, s, a;

                function l(e) {
                    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                /*! For license information please see react-mathquill.min.js.LICENSE.txt */
                a = function(e) {
                    return function() {
                        var t = {
                                991: function(e, t, n) {
                                    "use strict";
                                    n.d(t, {
                                        Z: function() {
                                            return h
                                        }
                                    });
                                    var r = n(156),
                                        i = n.n(r),
                                        o = n(697),
                                        s = n.n(o),
                                        a = n(703),
                                        l = ["latex", "onChange", "config", "mathquillDidMount"];

                                    function c() {
                                        return (c = Object.assign ? Object.assign.bind() : function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = arguments[t];
                                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                                            }
                                            return e
                                        }).apply(this, arguments)
                                    }

                                    function u(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            t && (r = r.filter((function(t) {
                                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                                            }))), n.push.apply(n, r)
                                        }
                                        return n
                                    }

                                    function f(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? u(Object(n), !0).forEach((function(t) {
                                                d(e, t, n[t])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            }))
                                        }
                                        return e
                                    }

                                    function d(e, t, n) {
                                        return t in e ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = n, e
                                    }
                                    var p = function(e) {
                                        var t = e.latex,
                                            n = e.onChange,
                                            o = e.config,
                                            s = e.mathquillDidMount,
                                            u = function(e, t) {
                                                if (null == e) return {};
                                                var n, r, i = function(e, t) {
                                                    if (null == e) return {};
                                                    var n, r, i = {},
                                                        o = Object.keys(e);
                                                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                    return i
                                                }(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var o = Object.getOwnPropertySymbols(e);
                                                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                                                }
                                                return i
                                            }(e, l),
                                            d = (0, r.useRef)(2),
                                            p = (0, r.useRef)(null),
                                            h = (0, r.useRef)(null),
                                            m = (0, r.useRef)(n);
                                        return (0, r.useEffect)((function() {
                                            m.current = n
                                        }), [n]), (0, r.useEffect)((function() {
                                            if (h.current) {
                                                var e = {
                                                    restrictMismatchedBrackets: !0,
                                                    handlers: {}
                                                };
                                                o && (e = f(f({}, e), o));
                                                var n = e.handlers.edit;
                                                e.handlers.edit = function(e) {
                                                    n && n(), d.current > 0 ? d.current -= 1 : m.current && m.current(e)
                                                }, p.current = a.Z.MathField(h.current, e), p.current.latex(t || ""), s && s(p.current)
                                            }
                                        }), [h]), (0, r.useEffect)((function() {
                                            p.current && p.current.latex() !== t && p.current.latex(t)
                                        }), [t]), i().createElement("span", c({}, u, {
                                            ref: h
                                        }))
                                    };
                                    p.propTypes = {
                                        latex: s().string,
                                        onChange: s().func,
                                        config: s().object,
                                        mathquillDidMount: s().func
                                    };
                                    var h = p
                                },
                                717: function(e, t, n) {
                                    "use strict";
                                    n.d(t, {
                                        Z: function() {
                                            return f
                                        }
                                    });
                                    var r = n(156),
                                        i = n.n(r),
                                        o = n(697),
                                        s = n.n(o),
                                        a = n(703),
                                        l = ["mathquillDidMount", "children"];

                                    function c() {
                                        return (c = Object.assign ? Object.assign.bind() : function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = arguments[t];
                                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                                            }
                                            return e
                                        }).apply(this, arguments)
                                    }
                                    var u = function(e) {
                                        var t = e.mathquillDidMount,
                                            n = e.children,
                                            o = function(e, t) {
                                                if (null == e) return {};
                                                var n, r, i = function(e, t) {
                                                    if (null == e) return {};
                                                    var n, r, i = {},
                                                        o = Object.keys(e);
                                                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                    return i
                                                }(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var o = Object.getOwnPropertySymbols(e);
                                                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                                                }
                                                return i
                                            }(e, l),
                                            s = (0, r.useRef)(null),
                                            u = (0, r.useRef)(null);
                                        return (0, r.useLayoutEffect)((function() {
                                            s && (u.current = a.Z.StaticMath(s.current), t && t(u.current))
                                        }), [s, n]), i().createElement("span", c({}, o, {
                                            ref: s
                                        }), n)
                                    };
                                    u.propTypes = {
                                        children: s().string,
                                        mathquillDidMount: s().func
                                    };
                                    var f = u
                                },
                                703: function(e, t, n) {
                                    "use strict";
                                    n.d(t, {
                                        Z: function() {
                                            return r
                                        }
                                    });
                                    var r = n(338).getInterface(2)
                                },
                                527: function(e, t, n) {
                                    "use strict";
                                    n.d(t, {
                                        Z: function() {
                                            return a
                                        }
                                    });
                                    var r = n(81),
                                        i = n.n(r),
                                        o = n(645),
                                        s = n.n(o)()(i());
                                    s.push([e.id, "/*\n * MathQuill v0.11.0, by Han, Jeanine, and Mary\n * http://mathquill.com | maintainers@mathquill.com\n *\n * This Source Code Form is subject to the terms of the\n * Mozilla Public License, v. 2.0. If a copy of the MPL\n * was not distributed with this file, You can obtain\n * one at http://mozilla.org/MPL/2.0/.\n */\n@font-face {\n  /* Heavy fonts have been removed */\n  font-family: Symbola;\n}\n.mq-editable-field {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor {\n  border-left: 1px solid black;\n  margin-left: -1px;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-editable-field .mq-cursor.mq-blink {\n  visibility: hidden;\n}\n.mq-editable-field,\n.mq-math-mode .mq-editable-field {\n  border: 1px solid gray;\n}\n.mq-editable-field.mq-focused,\n.mq-math-mode .mq-editable-field.mq-focused {\n  -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n  border-color: #709AC0;\n  border-radius: 1px;\n}\n.mq-math-mode .mq-editable-field {\n  margin: 1px;\n}\n.mq-editable-field .mq-latex-command-input {\n  color: inherit;\n  font-family: \"Courier New\", monospace;\n  border: 1px solid gray;\n  padding-right: 1px;\n  margin-right: 1px;\n  margin-left: 2px;\n}\n.mq-editable-field .mq-latex-command-input.mq-empty {\n  background: transparent;\n}\n.mq-editable-field .mq-latex-command-input.mq-hasCursor {\n  border-color: ActiveBorder;\n}\n.mq-editable-field.mq-empty:after,\n.mq-editable-field.mq-text-mode:after,\n.mq-math-mode .mq-empty:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-cursor:only-child:after,\n.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {\n  visibility: hidden;\n  content: 'c';\n}\n.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {\n  content: '';\n}\n.mq-editable-field.mq-text-mode {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.mq-root-block,\n.mq-math-mode .mq-root-block {\n  display: -moz-inline-box;\n  display: inline-block;\n  width: 100%;\n  padding: 2px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: middle;\n}\n.mq-math-mode {\n  font-variant: normal;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 115%;\n  line-height: 1;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-non-leaf,\n.mq-math-mode .mq-scaled {\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode var,\n.mq-math-mode .mq-text-mode,\n.mq-math-mode .mq-nonSymbola {\n  font-family: \"Times New Roman\", Symbola, serif;\n  line-height: 0.9;\n}\n.mq-math-mode * {\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  border-color: black;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.mq-math-mode .mq-empty {\n  background: #ccc;\n}\n.mq-math-mode .mq-empty.mq-root-block {\n  background: transparent;\n}\n.mq-math-mode.mq-empty {\n  background: transparent;\n}\n.mq-math-mode .mq-text-mode {\n  display: inline-block;\n  white-space: pre;\n}\n.mq-math-mode .mq-text-mode.mq-hasCursor {\n  box-shadow: inset darkgray 0 0.1em 0.2em;\n  padding: 0 0.1em;\n  margin: 0 -0.1em;\n  min-width: 1ex;\n}\n.mq-math-mode .mq-font {\n  font: 1em \"Times New Roman\", Symbola, serif;\n}\n.mq-math-mode .mq-font * {\n  font-family: inherit;\n  font-style: inherit;\n}\n.mq-math-mode b,\n.mq-math-mode b.mq-font {\n  font-weight: bolder;\n}\n.mq-math-mode var,\n.mq-math-mode i,\n.mq-math-mode i.mq-font {\n  font-style: italic;\n}\n.mq-math-mode var.mq-f {\n  margin-right: 0.2em;\n  margin-left: 0.1em;\n}\n.mq-math-mode .mq-roman var.mq-f {\n  margin: 0;\n}\n.mq-math-mode big {\n  font-size: 200%;\n}\n.mq-math-mode .mq-int > big {\n  display: inline-block;\n  -webkit-transform: scaleX(0.7);\n  -moz-transform: scaleX(0.7);\n  -ms-transform: scaleX(0.7);\n  -o-transform: scaleX(0.7);\n  transform: scaleX(0.7);\n  vertical-align: -0.16em;\n}\n.mq-math-mode .mq-int > .mq-supsub {\n  font-size: 80%;\n  vertical-align: -1.1em;\n  padding-right: 0.2em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {\n  vertical-align: 1.3em;\n}\n.mq-math-mode .mq-int > .mq-supsub > .mq-sub {\n  margin-left: -0.35em;\n}\n.mq-math-mode .mq-roman {\n  font-style: normal;\n}\n.mq-math-mode .mq-sans-serif {\n  font-family: sans-serif, Symbola, serif;\n}\n.mq-math-mode .mq-monospace {\n  font-family: monospace, Symbola, serif;\n}\n.mq-math-mode .mq-overline {\n  border-top: 1px solid black;\n  margin-top: 1px;\n}\n.mq-math-mode .mq-underline {\n  border-bottom: 1px solid black;\n  margin-bottom: 1px;\n}\n.mq-math-mode .mq-binary-operator {\n  padding: 0 0.2em;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-supsub {\n  text-align: left;\n  font-size: 90%;\n  vertical-align: -0.5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only {\n  vertical-align: 0.5em;\n}\n.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {\n  display: inline-block;\n  vertical-align: text-bottom;\n}\n.mq-math-mode .mq-supsub .mq-sup {\n  display: block;\n}\n.mq-math-mode .mq-supsub .mq-sub {\n  display: block;\n  float: left;\n}\n.mq-math-mode .mq-supsub .mq-binary-operator {\n  padding: 0 0.1em;\n}\n.mq-math-mode .mq-supsub .mq-fraction {\n  font-size: 70%;\n}\n.mq-math-mode sup.mq-nthroot {\n  font-size: 80%;\n  vertical-align: 0.8em;\n  margin-right: -0.6em;\n  margin-left: 0.2em;\n  min-width: 0.5em;\n}\n.mq-math-mode .mq-paren {\n  padding: 0 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: center 0.06em;\n  -moz-transform-origin: center 0.06em;\n  -ms-transform-origin: center 0.06em;\n  -o-transform-origin: center 0.06em;\n  transform-origin: center 0.06em;\n}\n.mq-math-mode .mq-paren.mq-ghost {\n  color: silver;\n}\n.mq-math-mode .mq-paren + span {\n  margin-top: 0.1em;\n  margin-bottom: 0.1em;\n}\n.mq-math-mode .mq-array {\n  vertical-align: middle;\n  text-align: center;\n}\n.mq-math-mode .mq-array > span {\n  display: block;\n}\n.mq-math-mode .mq-operator-name {\n  font-family: Symbola, \"Times New Roman\", serif;\n  line-height: 0.9;\n  font-style: normal;\n}\n.mq-math-mode var.mq-operator-name.mq-first {\n  padding-left: 0.2em;\n}\n.mq-math-mode var.mq-operator-name.mq-last,\n.mq-math-mode .mq-supsub.mq-after-operator-name {\n  padding-right: 0.2em;\n}\n.mq-math-mode .mq-fraction {\n  font-size: 90%;\n  text-align: center;\n  vertical-align: -0.4em;\n  padding: 0 0.2em;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link {\n  display: -moz-groupbox;\n}\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link,\n.mq-math-mode x:default {\n  display: inline-block;\n}\n.mq-math-mode .mq-numerator,\n.mq-math-mode .mq-denominator,\n.mq-math-mode .mq-dot-recurring {\n  display: block;\n}\n.mq-math-mode .mq-numerator {\n  padding: 0 0.1em;\n}\n.mq-math-mode .mq-denominator {\n  border-top: 1px solid;\n  float: right;\n  width: 100%;\n  padding: 0.1em;\n}\n.mq-math-mode .mq-dot-recurring {\n  text-align: center;\n  height: 0.3em;\n}\n.mq-math-mode .mq-sqrt-prefix {\n  padding-top: 0;\n  position: relative;\n  top: 0.1em;\n  vertical-align: top;\n  -webkit-transform-origin: top;\n  -moz-transform-origin: top;\n  -ms-transform-origin: top;\n  -o-transform-origin: top;\n  transform-origin: top;\n}\n.mq-math-mode .mq-sqrt-stem {\n  border-top: 1px solid;\n  margin-top: 1px;\n  padding-left: 0.15em;\n  padding-right: 0.2em;\n  margin-right: 0.1em;\n  padding-top: 1px;\n}\n.mq-math-mode .mq-diacritic-above {\n  display: block;\n  text-align: center;\n  line-height: 0.4em;\n}\n.mq-math-mode .mq-diacritic-stem {\n  display: block;\n  text-align: center;\n}\n.mq-math-mode .mq-hat-prefix {\n  display: block;\n  text-align: center;\n  line-height: 0.95em;\n  margin-bottom: -0.7em;\n  transform: scaleX(1.5);\n  -moz-transform: scaleX(1.5);\n  -o-transform: scaleX(1.5);\n  -webkit-transform: scaleX(1.5);\n}\n.mq-math-mode .mq-hat-stem {\n  display: block;\n}\n.mq-math-mode .mq-large-operator {\n  vertical-align: -0.2em;\n  padding: 0.2em;\n  text-align: center;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator big,\n.mq-math-mode .mq-large-operator .mq-to {\n  display: block;\n}\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator .mq-to {\n  font-size: 80%;\n}\n.mq-math-mode .mq-large-operator .mq-from {\n  float: right;\n  /* take out of normal flow to manipulate baseline */\n  width: 100%;\n}\n.mq-math-mode,\n.mq-math-mode .mq-editable-field {\n  cursor: text;\n  font-family: Symbola, \"Times New Roman\", serif;\n}\n.mq-math-mode .mq-overarc {\n  border-top: 1px solid black;\n  -webkit-border-top-right-radius: 50% 0.3em;\n  -moz-border-radius-topright: 50% 0.3em;\n  border-top-right-radius: 50% 0.3em;\n  -webkit-border-top-left-radius: 50% 0.3em;\n  -moz-border-radius-topleft: 50% 0.3em;\n  border-top-left-radius: 50% 0.3em;\n  margin-top: 1px;\n  padding-top: 0.15em;\n}\n.mq-math-mode .mq-overarrow {\n  min-width: 0.5em;\n  border-top: 1px solid black;\n  margin-top: 1px;\n  padding-top: 0.2em;\n  text-align: center;\n}\n.mq-math-mode .mq-overarrow:before {\n  display: block;\n  position: relative;\n  top: -0.34em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  text-align: right;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-left:before {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both {\n  vertical-align: text-bottom;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty {\n  min-height: 1.23em;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after {\n  top: -0.34em;\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both:before {\n  -moz-transform: scaleX(-1);\n  -o-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  filter: FlipH;\n  -ms-filter: \"FlipH\";\n}\n.mq-math-mode .mq-overarrow.mq-arrow-both:after {\n  display: block;\n  position: relative;\n  top: -2.3em;\n  font-size: 0.5em;\n  line-height: 0em;\n  content: '\\27A4';\n  visibility: visible;\n  text-align: right;\n}\n.mq-math-mode .mq-selection,\n.mq-editable-field .mq-selection,\n.mq-math-mode .mq-selection .mq-non-leaf,\n.mq-editable-field .mq-selection .mq-non-leaf,\n.mq-math-mode .mq-selection .mq-scaled,\n.mq-editable-field .mq-selection .mq-scaled {\n  background: #B4D5FE !important;\n  background: Highlight !important;\n  color: HighlightText;\n  border-color: HighlightText;\n}\n.mq-math-mode .mq-selection .mq-matrixed,\n.mq-editable-field .mq-selection .mq-matrixed {\n  background: #39F !important;\n}\n.mq-math-mode .mq-selection .mq-matrixed-container,\n.mq-editable-field .mq-selection .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;\n}\n.mq-math-mode .mq-selection.mq-blur,\n.mq-editable-field .mq-selection.mq-blur,\n.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,\n.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,\n.mq-math-mode .mq-selection.mq-blur .mq-scaled,\n.mq-editable-field .mq-selection.mq-blur .mq-scaled,\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed {\n  background: #D4D4D4 !important;\n  color: black;\n  border-color: black;\n}\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;\n}\n.mq-editable-field .mq-textarea,\n.mq-math-mode .mq-textarea {\n  position: relative;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n}\n.mq-editable-field .mq-textarea *,\n.mq-math-mode .mq-textarea *,\n.mq-editable-field .mq-selectable,\n.mq-math-mode .mq-selectable {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n  position: absolute;\n  clip: rect(1em 1em 1em 1em);\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  resize: none;\n  width: 1px;\n  height: 1px;\n  box-sizing: content-box;\n}\n.mq-math-mode .mq-matrixed {\n  background: white;\n  display: -moz-inline-box;\n  display: inline-block;\n}\n.mq-math-mode .mq-matrixed-container {\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');\n  margin-top: -0.1em;\n}\n", ""]);
                                    var a = s
                                },
                                645: function(e) {
                                    "use strict";
                                    e.exports = function(e) {
                                        var t = [];
                                        return t.toString = function() {
                                            return this.map((function(t) {
                                                var n = "",
                                                    r = void 0 !== t[5];
                                                return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                                            })).join("")
                                        }, t.i = function(e, n, r, i, o) {
                                            "string" == typeof e && (e = [
                                                [null, e, void 0]
                                            ]);
                                            var s = {};
                                            if (r)
                                                for (var a = 0; a < this.length; a++) {
                                                    var l = this[a][0];
                                                    null != l && (s[l] = !0)
                                                }
                                            for (var c = 0; c < e.length; c++) {
                                                var u = [].concat(e[c]);
                                                r && s[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), i && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = i) : u[4] = "".concat(i)), t.push(u))
                                            }
                                        }, t
                                    }
                                },
                                81: function(e) {
                                    "use strict";
                                    e.exports = function(e) {
                                        return e[1]
                                    }
                                },
                                338: function(e, t, n) {
                                    var r = n(755);
                                    window.jQuery = r,
                                        function() {
                                            var e, t = window.jQuery,
                                                n = "mathquill-command-id",
                                                r = "mathquill-block-id",
                                                i = Math.min,
                                                o = Math.max;
                                            if (!t) throw "MathQuill requires jQuery 1.5.2+ to be loaded first";

                                            function s() {}
                                            var a = [].slice;

                                            function c(e) {
                                                var t = e.length - 1;
                                                return function() {
                                                    var n = a.call(arguments, 0, t),
                                                        r = a.call(arguments, t);
                                                    return e.apply(this, n.concat([r]))
                                                }
                                            }
                                            var u = c((function(e, t) {
                                                return c((function(n, r) {
                                                    if (e in n) return n[e].apply(n, t.concat(r))
                                                }))
                                            }));

                                            function f(e) {
                                                return c((function(t, n) {
                                                    return "function" != typeof t && (t = u(t)), e.call(this, (function(e) {
                                                        return t.apply(e, [e].concat(n))
                                                    }))
                                                }))
                                            }

                                            function d(e) {
                                                var t = a.call(arguments, 1);
                                                return function() {
                                                    return e.apply(this, t)
                                                }
                                            }

                                            function p(e, t) {
                                                if (!t) throw new Error("prayer failed: " + e)
                                            }
                                            var h = function(e, t, n) {
                                                    function r(e) {
                                                        return "object" == l(e)
                                                    }

                                                    function i(e) {
                                                        return "function" == typeof e
                                                    }

                                                    function o() {}
                                                    return function e(n, s) {
                                                        function a() {
                                                            var e = new l;
                                                            return i(e.init) && e.init.apply(e, arguments), e
                                                        }

                                                        function l() {}
                                                        void 0 === s && (s = n, n = Object), a.Bare = l;
                                                        var c, u = o.prototype = n.prototype,
                                                            f = l.prototype = a.prototype = a.p = new o;
                                                        return f.constructor = a, a.extend = function(t) {
                                                            return e(a, t)
                                                        }, (a.open = function(e) {
                                                            if (c = {}, i(e) ? c = e.call(a, f, u, a, n) : r(e) && (c = e), r(c))
                                                                for (var o in c) t.call(c, o) && (f[o] = c[o]);
                                                            return i(f.init) || (f.init = n), a
                                                        })(s)
                                                    }
                                                }(0, {}.hasOwnProperty),
                                                m = -1;

                                            function g(e) {
                                                p("a direction was passed", e === m || 1 === e)
                                            }
                                            var v = h(t, (function(e) {
                                                    e.insDirOf = function(e, t) {
                                                        return e === m ? this.insertBefore(t.first()) : this.insertAfter(t.last())
                                                    }, e.insAtDirEnd = function(e, t) {
                                                        return e === m ? this.prependTo(t) : this.appendTo(t)
                                                    }
                                                })),
                                                b = h((function(e) {
                                                    e.parent = 0, e[m] = 0, e[1] = 0, e.init = function(e, t, n) {
                                                        this.parent = e, this[m] = t, this[1] = n
                                                    }, this.copy = function(e) {
                                                        return b(e.parent, e[m], e[1])
                                                    }
                                                })),
                                                y = h((function(e) {
                                                    e[m] = 0, e[1] = 0, e.parent = 0;
                                                    var t = 0;
                                                    this.byId = {}, e.init = function() {
                                                        this.id = t += 1, y.byId[this.id] = this, this.ends = {}, this.ends[m] = 0, this.ends[1] = 0
                                                    }, e.dispose = function() {
                                                        delete y.byId[this.id]
                                                    }, e.toString = function() {
                                                        return "{{ MathQuill Node #" + this.id + " }}"
                                                    }, e.jQ = v(), e.jQadd = function(e) {
                                                        return this.jQ = this.jQ.add(e)
                                                    }, e.jQize = function(e) {
                                                        function t(e) {
                                                            if (e.getAttribute) {
                                                                var n = e.getAttribute("mathquill-command-id"),
                                                                    r = e.getAttribute("mathquill-block-id");
                                                                n && y.byId[n].jQadd(e), r && y.byId[r].jQadd(e)
                                                            }
                                                            for (e = e.firstChild; e; e = e.nextSibling) t(e)
                                                        }
                                                        e = v(e || this.html());
                                                        for (var n = 0; n < e.length; n += 1) t(e[n]);
                                                        return e
                                                    }, e.createDir = function(e, t) {
                                                        g(e);
                                                        var n = this;
                                                        return n.jQize(), n.jQ.insDirOf(e, t.jQ), t[e] = n.adopt(t.parent, t[m], t[1]), n
                                                    }, e.createLeftOf = function(e) {
                                                        return this.createDir(m, e)
                                                    }, e.selectChildren = function(e, t) {
                                                        return C(e, t)
                                                    }, e.bubble = f((function(e) {
                                                        for (var t = this; t && !1 !== e(t); t = t.parent);
                                                        return this
                                                    })), e.postOrder = f((function(e) {
                                                        return function t(n) {
                                                            n.eachChild(t), e(n)
                                                        }(this), this
                                                    })), e.isEmpty = function() {
                                                        return 0 === this.ends[m] && 0 === this.ends[1]
                                                    }, e.isStyleBlock = function() {
                                                        return !1
                                                    }, e.children = function() {
                                                        return w(this.ends[m], this.ends[1])
                                                    }, e.eachChild = function() {
                                                        var e = this.children();
                                                        return e.each.apply(e, arguments), this
                                                    }, e.foldChildren = function(e, t) {
                                                        return this.children().fold(e, t)
                                                    }, e.withDirAdopt = function(e, t, n, r) {
                                                        return w(this, this).withDirAdopt(e, t, n, r), this
                                                    }, e.adopt = function(e, t, n) {
                                                        return w(this, this).adopt(e, t, n), this
                                                    }, e.disown = function() {
                                                        return w(this, this).disown(), this
                                                    }, e.remove = function() {
                                                        return this.jQ.remove(), this.postOrder("dispose"), this.disown()
                                                    }
                                                }));

                                            function x(e, t, n) {
                                                p("a parent is always present", e), p("leftward is properly set up", t ? t[1] === n && t.parent === e : e.ends[m] === n), p("rightward is properly set up", n ? n[m] === t && n.parent === e : e.ends[1] === t)
                                            }
                                            var w = h((function(t) {
                                                    t.init = function(t, n, r) {
                                                        if (r === e && (r = m), g(r), p("no half-empty fragments", !t == !n), this.ends = {}, t) {
                                                            p("withDir is passed to Fragment", t instanceof y), p("oppDir is passed to Fragment", n instanceof y), p("withDir and oppDir have the same parent", t.parent === n.parent), this.ends[r] = t, this.ends[-r] = n;
                                                            var i = this.fold([], (function(e, t) {
                                                                return e.push.apply(e, t.jQ.get()), e
                                                            }));
                                                            this.jQ = this.jQ.add(i)
                                                        }
                                                    }, t.jQ = v(), t.withDirAdopt = function(e, t, n, r) {
                                                        return e === m ? this.adopt(t, n, r) : this.adopt(t, r, n)
                                                    }, t.adopt = function(e, t, n) {
                                                        x(e, t, n);
                                                        var r = this;
                                                        r.disowned = !1;
                                                        var i = r.ends[m];
                                                        if (!i) return this;
                                                        var o = r.ends[1];
                                                        return t || (e.ends[m] = i), n ? n[m] = o : e.ends[1] = o, r.ends[1][1] = n, r.each((function(n) {
                                                            n[m] = t, n.parent = e, t && (t[1] = n), t = n
                                                        })), r
                                                    }, t.disown = function() {
                                                        var e = this,
                                                            t = e.ends[m];
                                                        if (!t || e.disowned) return e;
                                                        e.disowned = !0;
                                                        var n = e.ends[1],
                                                            r = t.parent;
                                                        return x(r, t[m], t), x(r, n, n[1]), t[m] ? t[m][1] = n[1] : r.ends[m] = n[1], n[1] ? n[1][m] = t[m] : r.ends[1] = t[m], e
                                                    }, t.remove = function() {
                                                        return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown()
                                                    }, t.each = f((function(e) {
                                                        var t = this,
                                                            n = t.ends[m];
                                                        if (!n) return t;
                                                        for (; n !== t.ends[1][1] && !1 !== e(n); n = n[1]);
                                                        return t
                                                    })), t.fold = function(e, t) {
                                                        return this.each((function(n) {
                                                            e = t.call(this, e, n)
                                                        })), e
                                                    }
                                                })),
                                                q = {},
                                                T = {},
                                                k = h(b, (function(t) {
                                                    t.init = function(e, t) {
                                                        this.parent = e, this.options = t;
                                                        var n = this.jQ = this._jQ = v('<span class="mq-cursor">&#8203;</span>');
                                                        this.blink = function() {
                                                            n.toggleClass("mq-blink")
                                                        }, this.upDownCache = {}
                                                    }, t.show = function() {
                                                        return this.jQ = this._jQ.removeClass("mq-blink"), "intervalId" in this ? clearInterval(this.intervalId) : (this[1] ? this.selection && this.selection.ends[m][m] === this[m] ? this.jQ.insertBefore(this.selection.jQ) : this.jQ.insertBefore(this[1].jQ.first()) : this.jQ.appendTo(this.parent.jQ), this.parent.focus()), this.intervalId = setInterval(this.blink, 500), this
                                                    }, t.hide = function() {
                                                        return "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, this.jQ.detach(), this.jQ = v(), this
                                                    }, t.withDirInsertAt = function(e, t, n, r) {
                                                        var i = this.parent;
                                                        this.parent = t, this[e] = n, this[-e] = r, i !== t && i.blur && i.blur(this)
                                                    }, t.insDirOf = function(e, t) {
                                                        return g(e), this.jQ.insDirOf(e, t.jQ), this.withDirInsertAt(e, t.parent, t[e], t), this.parent.jQ.addClass("mq-hasCursor"), this
                                                    }, t.insLeftOf = function(e) {
                                                        return this.insDirOf(m, e)
                                                    }, t.insRightOf = function(e) {
                                                        return this.insDirOf(1, e)
                                                    }, t.insAtDirEnd = function(e, t) {
                                                        return g(e), this.jQ.insAtDirEnd(e, t.jQ), this.withDirInsertAt(e, t, 0, t.ends[e]), t.focus(), this
                                                    }, t.insAtLeftEnd = function(e) {
                                                        return this.insAtDirEnd(m, e)
                                                    }, t.insAtRightEnd = function(e) {
                                                        return this.insAtDirEnd(1, e)
                                                    }, t.jumpUpDown = function(e, t) {
                                                        var n = this;
                                                        n.upDownCache[e.id] = b.copy(n);
                                                        var r = n.upDownCache[t.id];
                                                        if (r) r[1] ? n.insLeftOf(r[1]) : n.insAtRightEnd(r.parent);
                                                        else {
                                                            var i = n.offset().left;
                                                            t.seek(i, n)
                                                        }
                                                    }, t.offset = function() {
                                                        var e = this.jQ.removeClass("mq-cursor").offset();
                                                        return this.jQ.addClass("mq-cursor"), e
                                                    }, t.unwrapGramp = function() {
                                                        var e = this.parent.parent,
                                                            t = e.parent,
                                                            n = e[1],
                                                            r = e[m];
                                                        if (e.disown().eachChild((function(i) {
                                                                i.isEmpty() || (i.children().adopt(t, r, n).each((function(t) {
                                                                    t.jQ.insertBefore(e.jQ.first())
                                                                })), r = i.ends[1])
                                                            })), !this[1])
                                                            if (this[m]) this[1] = this[m][1];
                                                            else
                                                                for (; !this[1];) {
                                                                    if (this.parent = this.parent[1], !this.parent) {
                                                                        this[1] = e[1], this.parent = t;
                                                                        break
                                                                    }
                                                                    this[1] = this.parent.ends[m]
                                                                }
                                                        this[1] ? this.insLeftOf(this[1]) : this.insAtRightEnd(t), e.jQ.remove(), e[m].siblingDeleted && e[m].siblingDeleted(this.options, 1), e[1].siblingDeleted && e[1].siblingDeleted(this.options, m)
                                                    }, t.startSelection = function() {
                                                        for (var e = this.anticursor = b.copy(this), t = e.ancestors = {}, n = e; n.parent; n = n.parent) t[n.parent.id] = n
                                                    }, t.endSelection = function() {
                                                        delete this.anticursor
                                                    }, t.select = function() {
                                                        var e = this.anticursor;
                                                        if (this[m] === e[m] && this.parent === e.parent) return !1;
                                                        for (var t = this; t.parent; t = t.parent)
                                                            if (t.parent.id in e.ancestors) {
                                                                var n = t.parent;
                                                                break
                                                            } p("cursor and anticursor in the same tree", n);
                                                        var r, i, o = e.ancestors[n.id],
                                                            s = 1;
                                                        if (t[m] !== o)
                                                            for (var a = t; a; a = a[1])
                                                                if (a[1] === o[1]) {
                                                                    s = m, r = t, i = o;
                                                                    break
                                                                } return 1 === s && (r = o, i = t), r instanceof b && (r = r[1]), i instanceof b && (i = i[m]), this.hide().selection = n.selectChildren(r, i), this.insDirOf(s, this.selection.ends[s]), this.selectionChanged(), !0
                                                    }, t.clearSelection = function() {
                                                        return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), this
                                                    }, t.deleteSelection = function() {
                                                        this.selection && (this[m] = this.selection.ends[m][m], this[1] = this.selection.ends[1][1], this.selection.remove(), this.selectionChanged(), delete this.selection)
                                                    }, t.replaceSelection = function() {
                                                        var e = this.selection;
                                                        return e && (this[m] = e.ends[m][m], this[1] = e.ends[1][1], delete this.selection), e
                                                    }, t.depth = function() {
                                                        for (var e = this, t = 0; e = e.parent;) t += e instanceof V ? 1 : 0;
                                                        return t
                                                    }, t.isTooDeep = function(t) {
                                                        if (this.options.maxDepth !== e) return this.depth() + (t || 0) > this.options.maxDepth
                                                    }
                                                })),
                                                C = h(w, (function(e, t) {
                                                    e.init = function() {
                                                        t.init.apply(this, arguments), this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent()
                                                    }, e.adopt = function() {
                                                        return this.jQ.replaceWith(this.jQ = this.jQ.children()), t.adopt.apply(this, arguments)
                                                    }, e.clear = function() {
                                                        return this.jQ.replaceWith(this.jQ[0].childNodes), this
                                                    }, e.join = function(e) {
                                                        return this.fold("", (function(t, n) {
                                                            return t + n[e]()
                                                        }))
                                                    }
                                                })),
                                                O = h((function(e) {
                                                    e.init = function(e, t, n) {
                                                        this.id = e.id, this.data = {}, this.root = e, this.container = t, this.options = n, e.controller = this, this.cursor = e.cursor = k(e, n)
                                                    }, e.handle = function(e, t) {
                                                        var n = this.options.handlers;
                                                        if (n && n.fns[e]) {
                                                            var r = n.APIClasses[this.KIND_OF_MQ](this);
                                                            t === m || 1 === t ? n.fns[e](t, r) : n.fns[e](r)
                                                        }
                                                    };
                                                    var t = [];
                                                    this.onNotify = function(e) {
                                                        t.push(e)
                                                    }, e.notify = function() {
                                                        for (var e = 0; e < t.length; e += 1) t[e].apply(this.cursor, arguments);
                                                        return this
                                                    }
                                                })),
                                                j = {},
                                                S = h(),
                                                D = {},
                                                E = h(),
                                                A = {};

                                            function L() {
                                                window.console && console.warn('You are using the MathQuill API without specifying an interface version, which will fail in v1.0.0. Easiest fix is to do the following before doing anything else:\n\n    MathQuill = MathQuill.getInterface(1);\n    // now MathQuill.MathField() works like it used to\n\nSee also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide')
                                            }

                                            function _(e) {
                                                return L(), Re(e)
                                            }
                                            _.prototype = E.p, _.VERSION = "v0.11.0", _.interfaceVersion = function(e) {
                                                if (1 !== e) throw "Only interface version 1 supported. You specified: " + e;
                                                return (L = function() {
                                                    window.console && console.warn('You called MathQuill.interfaceVersion(1); to specify the interface version, which will fail in v1.0.0. You can fix this easily by doing this before doing anything else:\n\n    MathQuill = MathQuill.getInterface(1);\n    // now MathQuill.MathField() works like it used to\n\nSee also the "`dev` branch (2014–2015) → v0.10.0 Migration Guide" at\n  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide')
                                                })(), _
                                            }, _.getInterface = R;
                                            var N = R.MIN = 1,
                                                Q = R.MAX = 2;

                                            function R(e) {
                                                if (!(N <= e && e <= Q)) throw "Only interface versions between " + N + " and " + Q + " supported. You specified: " + e;

                                                function n(e) {
                                                    if (!e || !e.nodeType) return null;
                                                    var t = v(e).children(".mq-root-block").attr(r),
                                                        n = t && y.byId[t].controller;
                                                    return n ? i[n.KIND_OF_MQ](n) : null
                                                }
                                                var i = {};

                                                function o(e, t) {
                                                    for (var n in t && t.handlers && (t.handlers = {
                                                            fns: t.handlers,
                                                            APIClasses: i
                                                        }), t)
                                                        if (t.hasOwnProperty(n)) {
                                                            var r = t[n],
                                                                o = D[n];
                                                            e[n] = o ? o(r) : r
                                                        }
                                                }
                                                n.L = m, n.R = 1, n.saneKeyboardEvents = H, n.config = function(e) {
                                                    return o(S.p, e), this
                                                }, n.registerEmbed = function(e, t) {
                                                    if (!/^[a-z][a-z0-9]*$/i.test(e)) throw "Embed name must start with letter and be only letters and digits";
                                                    A[e] = t
                                                };
                                                var a = i.AbstractMathQuill = h(E, (function(e) {
                                                    e.init = function(e) {
                                                        this.__controller = e, this.__options = e.options, this.id = e.id, this.data = e.data
                                                    }, e.__mathquillify = function(e) {
                                                        var t = this.__controller,
                                                            n = t.root,
                                                            i = t.container;
                                                        t.createTextarea();
                                                        var o = i.addClass(e).contents().detach();
                                                        n.jQ = v('<span class="mq-root-block"/>').attr(r, n.id).appendTo(i), this.latex(o.text()), this.revert = function() {
                                                            return i.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(o)
                                                        }
                                                    }, e.config = function(e) {
                                                        return o(this.__options, e), this
                                                    }, e.el = function() {
                                                        return this.__controller.container[0]
                                                    }, e.text = function() {
                                                        return this.__controller.exportText()
                                                    }, e.latex = function(e) {
                                                        return arguments.length > 0 ? (this.__controller.renderLatexMath(e), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex()
                                                    }, e.html = function() {
                                                        return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "").replace(/ mq-hasCursor|mq-hasCursor ?/, "").replace(/ class=(""|(?= |>))/g, "")
                                                    }, e.reflow = function() {
                                                        return this.__controller.root.postOrder("reflow"), this
                                                    }
                                                }));
                                                for (var l in n.prototype = a.prototype, i.EditableField = h(a, (function(e, n) {
                                                        e.__mathquillify = function() {
                                                            return n.__mathquillify.apply(this, arguments), this.__controller.editable = !0, this.__controller.delegateMouseEvents(), this.__controller.editablesTextareaEvents(), this
                                                        }, e.focus = function() {
                                                            return this.__controller.textarea.focus(), this
                                                        }, e.blur = function() {
                                                            return this.__controller.textarea.blur(), this
                                                        }, e.write = function(e) {
                                                            return this.__controller.writeLatex(e), this.__controller.scrollHoriz(), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this
                                                        }, e.empty = function() {
                                                            var e = this.__controller.root,
                                                                t = this.__controller.cursor;
                                                            return e.eachChild("postOrder", "dispose"), e.ends[m] = e.ends[1] = 0, e.jQ.empty(), delete t.selection, t.insAtRightEnd(e), this
                                                        }, e.cmd = function(e) {
                                                            var t = this.__controller.notify(),
                                                                n = t.cursor;
                                                            if (/^\\[a-z]+$/i.test(e) && !n.isTooDeep()) {
                                                                e = e.slice(1);
                                                                var r = q[e];
                                                                r && (e = r(e), n.selection && e.replaces(n.replaceSelection()), e.createLeftOf(n.show()), this.__controller.scrollHoriz())
                                                            } else n.parent.write(n, e);
                                                            return t.blurred && n.hide().parent.blur(), this
                                                        }, e.select = function() {
                                                            var e = this.__controller;
                                                            for (e.notify("move").cursor.insAtRightEnd(e.root); e.cursor[m];) e.selectLeft();
                                                            return this
                                                        }, e.clearSelection = function() {
                                                            return this.__controller.cursor.clearSelection(), this
                                                        }, e.moveToDirEnd = function(e) {
                                                            return this.__controller.notify("move").cursor.insAtDirEnd(e, this.__controller.root), this
                                                        }, e.moveToLeftEnd = function() {
                                                            return this.moveToDirEnd(m)
                                                        }, e.moveToRightEnd = function() {
                                                            return this.moveToDirEnd(1)
                                                        }, e.keystroke = function(e) {
                                                            e = e.replace(/^\s+|\s+$/g, "").split(/\s+/);
                                                            for (var t = 0; t < e.length; t += 1) this.__controller.keystroke(e[t], {
                                                                preventDefault: s
                                                            });
                                                            return this
                                                        }, e.typedText = function(e) {
                                                            for (var t = 0; t < e.length; t += 1) this.__controller.typedText(e.charAt(t));
                                                            return this
                                                        }, e.dropEmbedded = function(e, t, n) {
                                                            var r = e - v(window).scrollLeft(),
                                                                i = t - v(window).scrollTop(),
                                                                o = document.elementFromPoint(r, i);
                                                            this.__controller.seek(v(o), e, t), xe().setOptions(n).createLeftOf(this.__controller.cursor)
                                                        }, e.clickAt = function(e, n, r) {
                                                            r = r || document.elementFromPoint(e, n);
                                                            var i = this.__controller,
                                                                o = i.root;
                                                            return t.contains(o.jQ[0], r) || (r = o.jQ[0]), i.seek(v(r), e + pageXOffset, n + pageYOffset), i.blurred && this.focus(), this
                                                        }, e.ignoreNextMousedown = function(e) {
                                                            return this.__controller.cursor.options.ignoreNextMousedown = e, this
                                                        }
                                                    })), n.EditableField = function() {
                                                        throw "wtf don't call me, I'm 'abstract'"
                                                    }, n.EditableField.prototype = i.EditableField.prototype, j) ! function(t, r) {
                                                    var o = i[t] = r(i);
                                                    n[t] = function(r, i) {
                                                        var s = n(r);
                                                        if (s instanceof o || !r || !r.nodeType) return s;
                                                        var a = O(o.RootBlock(), v(r), S());
                                                        return a.KIND_OF_MQ = t, o(a).__mathquillify(i, e)
                                                    }, n[t].prototype = o.prototype
                                                }(l, j[l]);
                                                return n
                                            }
                                            _.noConflict = function() {
                                                return window.MathQuill = z, _
                                            };
                                            var z = window.MathQuill;

                                            function M(e) {
                                                for (var t = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" "), n = 0; n < t.length; n += 1) ! function(t) {
                                                    e[t] = function(e) {
                                                        this.controller.handle(t, e)
                                                    }
                                                }(t[n]);
                                                e.reflow = function() {
                                                    this.controller.handle("reflow"), this.controller.handle("edited"), this.controller.handle("edit")
                                                }
                                            }
                                            window.MathQuill = _;
                                            var I, H = (I = {
                                                    8: "Backspace",
                                                    9: "Tab",
                                                    10: "Enter",
                                                    13: "Enter",
                                                    16: "Shift",
                                                    17: "Control",
                                                    18: "Alt",
                                                    20: "CapsLock",
                                                    27: "Esc",
                                                    32: "Spacebar",
                                                    33: "PageUp",
                                                    34: "PageDown",
                                                    35: "End",
                                                    36: "Home",
                                                    37: "Left",
                                                    38: "Up",
                                                    39: "Right",
                                                    40: "Down",
                                                    45: "Insert",
                                                    46: "Del",
                                                    144: "NumLock"
                                                }, function(e, n) {
                                                    var r, i = null,
                                                        o = null,
                                                        a = t(e),
                                                        l = t(n.container || a),
                                                        c = s;

                                                    function u(e) {
                                                        c = e, clearTimeout(r), r = setTimeout(e)
                                                    }

                                                    function f(e) {
                                                        u((function(t) {
                                                            c = s, clearTimeout(r), e(t)
                                                        }))
                                                    }
                                                    l.bind("keydown keypress input keyup focusout paste", (function(e) {
                                                        c(e)
                                                    }));
                                                    var d = !1;

                                                    function p() {
                                                        n.keystroke(function(e) {
                                                            var t, n = e.which || e.keyCode,
                                                                r = I[n],
                                                                i = [];
                                                            return e.ctrlKey && i.push("Ctrl"), e.originalEvent && e.originalEvent.metaKey && i.push("Meta"), e.altKey && i.push("Alt"), e.shiftKey && i.push("Shift"), t = r || String.fromCharCode(n), i.length || r ? (i.push(t), i.join("-")) : t
                                                        }(i), i)
                                                    }

                                                    function h() {
                                                        if (!("selectionStart" in (e = a[0])) || e.selectionStart === e.selectionEnd) {
                                                            var e, t = a.val();
                                                            1 === t.length ? (a.val(""), n.typedText(t)) : t && a[0].select && a[0].select()
                                                        }
                                                    }

                                                    function m() {
                                                        var e = a.val();
                                                        a.val(""), e && n.paste(e)
                                                    }
                                                    return l.bind({
                                                        keydown: function(e) {
                                                            i = e, o = null, d && f((function(e) {
                                                                e && "focusout" === e.type || !a[0].select || a[0].select()
                                                            })), p()
                                                        },
                                                        keypress: function(e) {
                                                            i && o && p(), o = e, u(h)
                                                        },
                                                        keyup: function(e) {
                                                            i && !o && u(h)
                                                        },
                                                        focusout: function() {
                                                            i = o = null
                                                        },
                                                        cut: function() {
                                                            f((function() {
                                                                n.cut()
                                                            }))
                                                        },
                                                        copy: function() {
                                                            f((function() {
                                                                n.copy()
                                                            }))
                                                        },
                                                        paste: function(e) {
                                                            a.focus(), u(m)
                                                        }
                                                    }), {
                                                        select: function(e) {
                                                            c(), c = s, clearTimeout(r), a.val(e), e && a[0].select && a[0].select(), d = !!e
                                                        }
                                                    }
                                                }),
                                                P = h((function(e, t, n) {
                                                    function r(e, t) {
                                                        throw "Parse Error: " + t + " at " + (e ? "'" + e + "'" : "EOF")
                                                    }
                                                    e.init = function(e) {
                                                        this._ = e
                                                    }, e.parse = function(e) {
                                                        return this.skip(s)._("" + e, (function(e, t) {
                                                            return t
                                                        }), r)
                                                    }, e.or = function(e) {
                                                        p("or is passed a parser", e instanceof n);
                                                        var t = this;
                                                        return n((function(n, r, i) {
                                                            return t._(n, r, (function(t) {
                                                                return e._(n, r, i)
                                                            }))
                                                        }))
                                                    }, e.then = function(e) {
                                                        var t = this;
                                                        return n((function(r, i, o) {
                                                            return t._(r, (function(t, r) {
                                                                var s = e instanceof n ? e : e(r);
                                                                return p("a parser is returned", s instanceof n), s._(t, i, o)
                                                            }), o)
                                                        }))
                                                    }, e.many = function() {
                                                        var e = this;
                                                        return n((function(t, n, r) {
                                                            for (var i = []; e._(t, o, s););
                                                            return n(t, i);

                                                            function o(e, n) {
                                                                return t = e, i.push(n), !0
                                                            }

                                                            function s() {
                                                                return !1
                                                            }
                                                        }))
                                                    }, e.times = function(e, t) {
                                                        arguments.length < 2 && (t = e);
                                                        var r = this;
                                                        return n((function(n, i, o) {
                                                            for (var s, a = [], l = !0, c = 0; c < e; c += 1)
                                                                if (!(l = r._(n, u, f))) return o(n, s);
                                                            for (; c < t && l; c += 1) l = r._(n, u, d);
                                                            return i(n, a);

                                                            function u(e, t) {
                                                                return a.push(t), n = e, !0
                                                            }

                                                            function f(e, t) {
                                                                return s = t, n = e, !1
                                                            }

                                                            function d(e, t) {
                                                                return !1
                                                            }
                                                        }))
                                                    }, e.result = function(e) {
                                                        return this.then(o(e))
                                                    }, e.atMost = function(e) {
                                                        return this.times(0, e)
                                                    }, e.atLeast = function(e) {
                                                        var t = this;
                                                        return t.times(e).then((function(e) {
                                                            return t.many().map((function(t) {
                                                                return e.concat(t)
                                                            }))
                                                        }))
                                                    }, e.map = function(e) {
                                                        return this.then((function(t) {
                                                            return o(e(t))
                                                        }))
                                                    }, e.skip = function(e) {
                                                        return this.then((function(t) {
                                                            return e.result(t)
                                                        }))
                                                    }, this.string = function(e) {
                                                        var t = e.length,
                                                            r = "expected '" + e + "'";
                                                        return n((function(n, i, o) {
                                                            var s = n.slice(0, t);
                                                            return s === e ? i(n.slice(t), s) : o(n, r)
                                                        }))
                                                    };
                                                    var i = this.regex = function(e) {
                                                            p("regexp parser is anchored", "^" === e.toString().charAt(1));
                                                            var t = "expected " + e;
                                                            return n((function(n, r, i) {
                                                                var o = e.exec(n);
                                                                if (o) {
                                                                    var s = o[0];
                                                                    return r(n.slice(s.length), s)
                                                                }
                                                                return i(n, t)
                                                            }))
                                                        },
                                                        o = n.succeed = function(e) {
                                                            return n((function(t, n) {
                                                                return n(t, e)
                                                            }))
                                                        },
                                                        s = (n.fail = function(e) {
                                                            return n((function(t, n, r) {
                                                                return r(t, e)
                                                            }))
                                                        }, n.letter = i(/^[a-z]/i), n.letters = i(/^[a-z]*/i), n.digit = i(/^[0-9]/), n.digits = i(/^[0-9]*/), n.whitespace = i(/^\s+/), n.optWhitespace = i(/^\s*/), n.any = n((function(e, t, n) {
                                                            return e ? t(e.slice(1), e.charAt(0)) : n(e, "expected any character")
                                                        })), n.all = n((function(e, t, n) {
                                                            return t("", e)
                                                        })), n.eof = n((function(e, t, n) {
                                                            return e ? n(e, "expected EOF") : t(e, e)
                                                        })))
                                                }));
                                            O.open((function(e) {
                                                e.focusBlurEvents = function() {
                                                    var e, t = this,
                                                        n = t.root,
                                                        r = t.cursor;

                                                    function i() {
                                                        clearTimeout(e), r.selection && r.selection.jQ.addClass("mq-blur"), o()
                                                    }

                                                    function o() {
                                                        r.hide().parent.blur(), t.container.removeClass("mq-focused"), v(window).unbind("blur", i)
                                                    }
                                                    t.textarea.focus((function() {
                                                        t.blurred = !1, clearTimeout(e), t.container.addClass("mq-focused"), r.parent || r.insAtRightEnd(n), r.selection ? (r.selection.jQ.removeClass("mq-blur"), t.selectionChanged()) : r.show()
                                                    })).blur((function() {
                                                        t.blurred = !0, e = setTimeout((function() {
                                                            n.postOrder("intentionalBlur"), r.clearSelection().endSelection(), o()
                                                        })), v(window).bind("blur", i)
                                                    })), t.blurred = !0, r.hide().parent.blur()
                                                }
                                            })), O.open((function(e, t) {
                                                e.exportText = function() {
                                                    return this.root.foldChildren("", (function(e, t) {
                                                        return e + t.text()
                                                    }))
                                                }
                                            })), O.open((function(t) {
                                                S.p.ignoreNextMousedown = s, t.delegateMouseEvents = function() {
                                                    var t = this.root.jQ;
                                                    this.container.bind("mousedown.mathquill", (function(n) {
                                                        var i, o = v(n.target).closest(".mq-root-block"),
                                                            a = y.byId[o.attr(r) || t.attr(r)].controller,
                                                            l = a.cursor,
                                                            c = l.blink,
                                                            u = a.textareaSpan,
                                                            f = a.textarea;

                                                        function d(e) {
                                                            i = v(e.target)
                                                        }

                                                        function p(t) {
                                                            l.anticursor || l.startSelection(), a.seek(i, t.pageX, t.pageY).cursor.select(), i = e
                                                        }
                                                        n.preventDefault(), n.target.unselectable = !0, l.options.ignoreNextMousedown(n) || (l.options.ignoreNextMousedown = s, a.blurred && (a.editable || o.prepend(u), f.focus()), l.blink = s, a.seek(v(n.target), n.pageX, n.pageY).cursor.startSelection(), o.mousemove(d), v(n.target.ownerDocument).mousemove(p).mouseup((function e(t) {
                                                            l.blink = c, l.selection || (a.editable ? l.show() : u.detach()), o.unbind("mousemove", d), v(t.target.ownerDocument).unbind("mousemove", p).unbind("mouseup", e)
                                                        })))
                                                    }))
                                                }
                                            })), O.open((function(e) {
                                                e.seek = function(e, t, i) {
                                                    var o = this.notify("select").cursor;
                                                    if (e) {
                                                        var s = e.attr(r) || e.attr(n);
                                                        if (!s) {
                                                            var a = e.parent();
                                                            s = a.attr(r) || a.attr(n)
                                                        }
                                                    }
                                                    var l = s ? y.byId[s] : this.root;
                                                    return p("nodeId is the id of some Node that exists", l), o.clearSelection().show(), l.seek(t, o), this.scrollHoriz(), this
                                                }
                                            })), O.open((function(e) {
                                                e.keystroke = function(e, t) {
                                                    this.cursor.parent.keystroke(e, t, this)
                                                }
                                            })), y.open((function(e) {
                                                e.keystroke = function(e, t, n) {
                                                    var r = n.cursor;
                                                    switch (e) {
                                                        case "Ctrl-Shift-Backspace":
                                                        case "Ctrl-Backspace":
                                                            n.ctrlDeleteDir(m);
                                                            break;
                                                        case "Shift-Backspace":
                                                        case "Backspace":
                                                            n.backspace();
                                                            break;
                                                        case "Esc":
                                                        case "Tab":
                                                            return void n.escapeDir(1, e, t);
                                                        case "Shift-Tab":
                                                        case "Shift-Esc":
                                                            return void n.escapeDir(m, e, t);
                                                        case "End":
                                                            n.notify("move").cursor.insAtRightEnd(r.parent);
                                                            break;
                                                        case "Ctrl-End":
                                                            n.notify("move").cursor.insAtRightEnd(n.root);
                                                            break;
                                                        case "Shift-End":
                                                            for (; r[1];) n.selectRight();
                                                            break;
                                                        case "Ctrl-Shift-End":
                                                            for (; r[1] || r.parent !== n.root;) n.selectRight();
                                                            break;
                                                        case "Home":
                                                            n.notify("move").cursor.insAtLeftEnd(r.parent);
                                                            break;
                                                        case "Ctrl-Home":
                                                            n.notify("move").cursor.insAtLeftEnd(n.root);
                                                            break;
                                                        case "Shift-Home":
                                                            for (; r[m];) n.selectLeft();
                                                            break;
                                                        case "Ctrl-Shift-Home":
                                                            for (; r[m] || r.parent !== n.root;) n.selectLeft();
                                                            break;
                                                        case "Left":
                                                            n.moveLeft();
                                                            break;
                                                        case "Shift-Left":
                                                            n.selectLeft();
                                                            break;
                                                        case "Ctrl-Left":
                                                            break;
                                                        case "Right":
                                                            n.moveRight();
                                                            break;
                                                        case "Shift-Right":
                                                            n.selectRight();
                                                            break;
                                                        case "Ctrl-Right":
                                                            break;
                                                        case "Up":
                                                            n.moveUp();
                                                            break;
                                                        case "Down":
                                                            n.moveDown();
                                                            break;
                                                        case "Shift-Up":
                                                            if (r[m])
                                                                for (; r[m];) n.selectLeft();
                                                            else n.selectLeft();
                                                        case "Shift-Down":
                                                            if (r[1])
                                                                for (; r[1];) n.selectRight();
                                                            else n.selectRight();
                                                        case "Ctrl-Up":
                                                        case "Ctrl-Down":
                                                            break;
                                                        case "Ctrl-Shift-Del":
                                                        case "Ctrl-Del":
                                                            n.ctrlDeleteDir(1);
                                                            break;
                                                        case "Shift-Del":
                                                        case "Del":
                                                            n.deleteForward();
                                                            break;
                                                        case "Meta-A":
                                                        case "Ctrl-A":
                                                            for (n.notify("move").cursor.insAtRightEnd(n.root); r[m];) n.selectLeft();
                                                            break;
                                                        default:
                                                            return
                                                    }
                                                    t.preventDefault(), n.scrollHoriz()
                                                }, e.moveOutOf = e.moveTowards = e.deleteOutOf = e.deleteTowards = e.unselectInto = e.selectOutOf = e.selectTowards = function() {
                                                    p("overridden or never called on this node")
                                                }
                                            })), O.open((function(e) {
                                                function t(e, t) {
                                                    var n = e.notify("upDown").cursor,
                                                        r = t + "Into",
                                                        i = t + "OutOf";
                                                    return n[1][r] ? n.insAtLeftEnd(n[1][r]) : n[m][r] ? n.insAtRightEnd(n[m][r]) : n.parent.bubble((function(e) {
                                                        var t = e[i];
                                                        if (t && ("function" == typeof t && (t = e[i](n)), t instanceof y && n.jumpUpDown(e, t), !0 !== t)) return !1
                                                    })), e
                                                }
                                                this.onNotify((function(e) {
                                                    "move" !== e && "upDown" !== e || this.show().clearSelection()
                                                })), e.escapeDir = function(e, t, n) {
                                                    g(e);
                                                    var r = this.cursor;
                                                    if (r.parent !== this.root && n.preventDefault(), r.parent !== this.root) return r.parent.moveOutOf(e, r), this.notify("move")
                                                }, D.leftRightIntoCmdGoes = function(e) {
                                                    if (e && "up" !== e && "down" !== e) throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + e + '"';
                                                    return e
                                                }, e.moveDir = function(e) {
                                                    g(e);
                                                    var t = this.cursor,
                                                        n = t.options.leftRightIntoCmdGoes;
                                                    return t.selection ? t.insDirOf(e, t.selection.ends[e]) : t[e] ? t[e].moveTowards(e, t, n) : t.parent.moveOutOf(e, t, n), this.notify("move")
                                                }, e.moveLeft = function() {
                                                    return this.moveDir(m)
                                                }, e.moveRight = function() {
                                                    return this.moveDir(1)
                                                }, e.moveUp = function() {
                                                    return t(this, "up")
                                                }, e.moveDown = function() {
                                                    return t(this, "down")
                                                }, this.onNotify((function(e) {
                                                    "upDown" !== e && (this.upDownCache = {})
                                                })), this.onNotify((function(e) {
                                                    "edit" === e && this.show().deleteSelection()
                                                })), e.deleteDir = function(e) {
                                                    g(e);
                                                    var t = this.cursor,
                                                        n = t.selection;
                                                    return this.notify("edit"), n || (t[e] ? t[e].deleteTowards(e, t) : t.parent.deleteOutOf(e, t)), t[m].siblingDeleted && t[m].siblingDeleted(t.options, 1), t[1].siblingDeleted && t[1].siblingDeleted(t.options, m), t.parent.bubble("reflow"), this
                                                }, e.ctrlDeleteDir = function(e) {
                                                    g(e);
                                                    var t = this.cursor;
                                                    return !t[e] || t.selection ? this.deleteDir(e) : (this.notify("edit"), e === m ? w(t.parent.ends[m], t[m]).remove() : w(t[1], t.parent.ends[1]).remove(), t.insAtDirEnd(e, t.parent), t[m].siblingDeleted && t[m].siblingDeleted(t.options, 1), t[1].siblingDeleted && t[1].siblingDeleted(t.options, m), t.parent.bubble("reflow"), this)
                                                }, e.backspace = function() {
                                                    return this.deleteDir(m)
                                                }, e.deleteForward = function() {
                                                    return this.deleteDir(1)
                                                }, this.onNotify((function(e) {
                                                    "select" !== e && this.endSelection()
                                                })), e.selectDir = function(e) {
                                                    var t = this.notify("select").cursor,
                                                        n = t.selection;
                                                    g(e), t.anticursor || t.startSelection();
                                                    var r = t[e];
                                                    r ? n && n.ends[e] === r && t.anticursor[-e] !== r ? r.unselectInto(e, t) : r.selectTowards(e, t) : t.parent.selectOutOf(e, t), t.clearSelection(), t.select() || t.show()
                                                }, e.selectLeft = function() {
                                                    return this.selectDir(m)
                                                }, e.selectRight = function() {
                                                    return this.selectDir(1)
                                                }
                                            })), O.open((function(n) {
                                                S.p.substituteTextarea = function() {
                                                    return v("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0]
                                                }, n.createTextarea = function() {
                                                    var e = this.textareaSpan = v('<span class="mq-textarea"></span>'),
                                                        t = this.options.substituteTextarea();
                                                    if (!t.nodeType) throw "substituteTextarea() must return a DOM element, got " + t;
                                                    t = this.textarea = v(t).appendTo(e);
                                                    var n = this;
                                                    n.cursor.selectionChanged = function() {
                                                        n.selectionChanged()
                                                    }
                                                }, n.selectionChanged = function() {
                                                    var t = this;
                                                    re(t.container[0]), t.textareaSelectionTimeout === e && (t.textareaSelectionTimeout = setTimeout((function() {
                                                        t.setTextareaSelection()
                                                    })))
                                                }, n.setTextareaSelection = function() {
                                                    this.textareaSelectionTimeout = e;
                                                    var t = "";
                                                    this.cursor.selection && (t = this.cursor.selection.join("latex"), this.options.statelessClipboard && (t = "$" + t + "$")), this.selectFn(t)
                                                }, n.staticMathTextareaEvents = function() {
                                                    var e = this,
                                                        n = (e.root, e.cursor),
                                                        r = e.textarea,
                                                        i = e.textareaSpan;

                                                    function o() {
                                                        i.detach(), e.blurred = !0
                                                    }
                                                    this.container.prepend(t('<span class="mq-selectable">').text("$" + e.exportLatex() + "$")), e.blurred = !0, r.bind("cut paste", !1).bind("copy", (function() {
                                                        e.setTextareaSelection()
                                                    })).focus((function() {
                                                        e.blurred = !1
                                                    })).blur((function() {
                                                        n.selection && n.selection.clear(), setTimeout(o)
                                                    })), e.selectFn = function(e) {
                                                        r.val(e), e && r.select()
                                                    }
                                                }, S.p.substituteKeyboardEvents = H, n.editablesTextareaEvents = function() {
                                                    var e = this.textarea,
                                                        t = this.textareaSpan,
                                                        n = this.options.substituteKeyboardEvents(e, this);
                                                    this.selectFn = function(e) {
                                                        n.select(e)
                                                    }, this.container.prepend(t), this.focusBlurEvents()
                                                }, n.typedText = function(e) {
                                                    if ("\n" === e) return this.handle("enter");
                                                    var t = this.notify().cursor;
                                                    t.parent.write(t, e), this.scrollHoriz()
                                                }, n.cut = function() {
                                                    var e = this,
                                                        t = e.cursor;
                                                    t.selection && setTimeout((function() {
                                                        e.notify("edit"), t.parent.bubble("reflow")
                                                    }))
                                                }, n.copy = function() {
                                                    this.setTextareaSelection()
                                                }, n.paste = function(e) {
                                                    this.options.statelessClipboard && (e = "$" === e.slice(0, 1) && "$" === e.slice(-1) ? e.slice(1, -1) : "\\text{" + e + "}"), this.writeLatex(e).cursor.show()
                                                }
                                            }));
                                            var F = function() {
                                                function e(e) {
                                                    for (var t = e[0] || V(), n = 1; n < e.length; n += 1) e[n].children().adopt(t, t.ends[1], 0);
                                                    return t
                                                }
                                                var t = P.string,
                                                    n = P.regex,
                                                    r = P.letter,
                                                    i = P.any,
                                                    o = P.optWhitespace,
                                                    s = P.succeed,
                                                    a = P.fail,
                                                    l = r.map((function(e) {
                                                        return Te(e)
                                                    })),
                                                    c = n(/^[^${}\\_^]/).map((function(e) {
                                                        return X(e)
                                                    })),
                                                    u = n(/^[^\\a-eg-zA-Z]/).or(t("\\").then(n(/^[a-z]+/i).or(n(/^\s+/).result(" ")).or(i))).then((function(e) {
                                                        var t = q[e];
                                                        return t ? t(e).parser() : a("unknown command: \\" + e)
                                                    })).or(l).or(c),
                                                    f = t("{").then((function() {
                                                        return p
                                                    })).skip(t("}")),
                                                    d = o.then(f.or(u.map((function(e) {
                                                        var t = V();
                                                        return e.adopt(t, 0, 0), t
                                                    })))),
                                                    p = d.many().map(e).skip(o),
                                                    h = t("[").then(d.then((function(e) {
                                                        return "]" !== e.join("latex") ? s(e) : a()
                                                    })).many().map(e).skip(o)).skip(t("]")),
                                                    m = p;
                                                return m.block = d, m.optBlock = h, m
                                            }();
                                            O.open((function(t, n) {
                                                t.exportLatex = function() {
                                                    return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1")
                                                }, D.maxDepth = function(t) {
                                                    return "number" == typeof t ? t : e
                                                }, t.writeLatex = function(e) {
                                                    var t = this.notify("edit").cursor,
                                                        n = P.all,
                                                        r = P.eof,
                                                        i = F.skip(r).or(n.result(!1)).parse(e);
                                                    return i && !i.isEmpty() && i.prepareInsertionAt(t) && (i.children().adopt(t.parent, t[m], t[1]), i.jQize().insertBefore(t.jQ), t[m] = i.ends[1], i.finalizeInsert(t.options, t), i.ends[1][1].siblingCreated && i.ends[1][1].siblingCreated(t.options, m), i.ends[m][m].siblingCreated && i.ends[m][m].siblingCreated(t.options, 1), t.parent.bubble("reflow")), this
                                                }, t.renderLatexMath = function(e) {
                                                    var t = this.root,
                                                        n = this.cursor,
                                                        r = (n.options, t.jQ),
                                                        i = P.all,
                                                        o = P.eof,
                                                        s = F.skip(o).or(i.result(!1)).parse(e);
                                                    if (t.eachChild("postOrder", "dispose"), t.ends[m] = t.ends[1] = 0, s && s.prepareInsertionAt(n)) {
                                                        s.children().adopt(t, 0, 0);
                                                        var a = s.join("html");
                                                        r.html(a), t.jQize(r.children()), t.finalizeInsert(n.options)
                                                    } else r.empty();
                                                    delete n.selection, n.insAtRightEnd(t)
                                                }, t.renderLatexText = function(e) {
                                                    var t = this.root,
                                                        n = this.cursor;
                                                    t.jQ.children().slice(1).remove(), t.eachChild("postOrder", "dispose"), t.ends[m] = t.ends[1] = 0, delete n.selection, n.show().insAtRightEnd(t);
                                                    var r = P.regex,
                                                        i = P.string,
                                                        o = P.eof,
                                                        s = P.all,
                                                        a = i("$").then(F).skip(i("$").or(o)).map((function(e) {
                                                            var t = J(n);
                                                            t.createBlocks();
                                                            var r = t.ends[m];
                                                            return e.children().adopt(r, 0, 0), t
                                                        })),
                                                        l = i("\\$").result("$").or(r(/^[^$]/)).map(X),
                                                        c = a.or(l).many().skip(o).or(s.result(!1)).parse(e);
                                                    if (c) {
                                                        for (var u = 0; u < c.length; u += 1) c[u].adopt(t, t.ends[1], 0);
                                                        t.jQize().appendTo(t.jQ), t.finalizeInsert(n.options)
                                                    }
                                                }
                                            })), O.open((function(e) {
                                                e.scrollHoriz = function() {
                                                    var e = this.cursor,
                                                        t = e.selection,
                                                        n = this.root.jQ[0].getBoundingClientRect();
                                                    if (t) {
                                                        var r = t.jQ[0].getBoundingClientRect(),
                                                            i = r.left - (n.left + 20),
                                                            o = r.right - (n.right - 20);
                                                        if (t.ends[m] === e[1])
                                                            if (i < 0) a = i;
                                                            else {
                                                                if (!(o > 0)) return;
                                                                a = r.left - o < n.left + 20 ? i : o
                                                            }
                                                        else if (o > 0) a = o;
                                                        else {
                                                            if (!(i < 0)) return;
                                                            a = r.right - i > n.right - 20 ? o : i
                                                        }
                                                    } else {
                                                        var s = e.jQ[0].getBoundingClientRect().left;
                                                        if (s > n.right - 20) var a = s - (n.right - 20);
                                                        else {
                                                            if (!(s < n.left + 20)) return;
                                                            a = s - (n.left + 20)
                                                        }
                                                    }
                                                    this.root.jQ.stop().animate({
                                                        scrollLeft: "+=" + a
                                                    }, 100)
                                                }
                                            }));
                                            var B = h(y, (function(t, n) {
                                                    t.finalizeInsert = function(e, t) {
                                                        var n = this;
                                                        n.postOrder("finalizeTree", e), n.postOrder("contactWeld", t), n.postOrder("blur"), n.postOrder("reflow"), n[1].siblingCreated && n[1].siblingCreated(e, m), n[m].siblingCreated && n[m].siblingCreated(e, 1), n.bubble("reflow")
                                                    }, t.prepareInsertionAt = function(t) {
                                                        var n = t.options.maxDepth;
                                                        if (n !== e) {
                                                            var r = t.depth();
                                                            if (r > n) return !1;
                                                            this.removeNodesDeeperThan(n - r)
                                                        }
                                                        return !0
                                                    }, t.removeNodesDeeperThan = function(e) {
                                                        for (var t, n = 0, r = [
                                                                [this, n]
                                                            ]; r.length;)(t = r.shift())[0].children().each((function(i) {
                                                            var o = i instanceof V ? 1 : 0;
                                                            (n = t[1] + o) <= e ? r.push([i, n]) : (o ? i.children() : i).remove()
                                                        }))
                                                    }
                                                })),
                                                $ = h(B, (function(e, t) {
                                                    e.init = function(e, n, r) {
                                                        var i = this;
                                                        t.init.call(i), i.ctrlSeq || (i.ctrlSeq = e), n && (i.htmlTemplate = n), r && (i.textTemplate = r)
                                                    }, e.replaces = function(e) {
                                                        e.disown(), this.replacedFragment = e
                                                    }, e.isEmpty = function() {
                                                        return this.foldChildren(!0, (function(e, t) {
                                                            return e && t.isEmpty()
                                                        }))
                                                    }, e.parser = function() {
                                                        var e = F.block,
                                                            t = this;
                                                        return e.times(t.numBlocks()).map((function(e) {
                                                            t.blocks = e;
                                                            for (var n = 0; n < e.length; n += 1) e[n].adopt(t, t.ends[1], 0);
                                                            return t
                                                        }))
                                                    }, e.createLeftOf = function(e) {
                                                        var n = this,
                                                            r = n.replacedFragment;
                                                        n.createBlocks(), t.createLeftOf.call(n, e), r && (r.adopt(n.ends[m], 0, 0), r.jQ.appendTo(n.ends[m].jQ), n.placeCursor(e), n.prepareInsertionAt(e)), n.finalizeInsert(e.options), n.placeCursor(e)
                                                    }, e.createBlocks = function() {
                                                        for (var e = this, t = e.numBlocks(), n = e.blocks = Array(t), r = 0; r < t; r += 1)(n[r] = V()).adopt(e, e.ends[1], 0)
                                                    }, e.placeCursor = function(e) {
                                                        e.insAtRightEnd(this.foldChildren(this.ends[m], (function(e, t) {
                                                            return e.isEmpty() ? e : t
                                                        })))
                                                    }, e.moveTowards = function(e, t, n) {
                                                        var r = n && this[n + "Into"];
                                                        t.insAtDirEnd(-e, r || this.ends[-e])
                                                    }, e.deleteTowards = function(e, t) {
                                                        this.isEmpty() ? t[e] = this.remove()[e] : this.moveTowards(e, t, null)
                                                    }, e.selectTowards = function(e, t) {
                                                        t[-e] = this, t[e] = this[e]
                                                    }, e.selectChildren = function() {
                                                        return C(this, this)
                                                    }, e.unselectInto = function(e, t) {
                                                        t.insAtDirEnd(-e, t.anticursor.ancestors[this.id])
                                                    }, e.seek = function(e, t) {
                                                        function n(e) {
                                                            var t = {};
                                                            return t[m] = e.jQ.offset().left, t[1] = t[m] + e.jQ.outerWidth(), t
                                                        }
                                                        var r = this,
                                                            i = n(r);
                                                        if (e < i[m]) return t.insLeftOf(r);
                                                        if (e > i[1]) return t.insRightOf(r);
                                                        var o = i[m];
                                                        r.eachChild((function(s) {
                                                            var a = n(s);
                                                            return e < a[m] ? (e - o < a[m] - e ? s[m] ? t.insAtRightEnd(s[m]) : t.insLeftOf(r) : t.insAtLeftEnd(s), !1) : e > a[1] ? void(s[1] ? o = a[1] : i[1] - e < e - a[1] ? t.insRightOf(r) : t.insAtRightEnd(s)) : (s.seek(e, t), !1)
                                                        }))
                                                    }, e.numBlocks = function() {
                                                        var e = this.htmlTemplate.match(/&\d+/g);
                                                        return e ? e.length : 0
                                                    }, e.html = function() {
                                                        var e = this,
                                                            t = e.blocks,
                                                            n = " mathquill-command-id=" + e.id,
                                                            r = e.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
                                                        p("no unmatched angle brackets", r.join("") === this.htmlTemplate);
                                                        for (var i = 0, o = r[0]; o; o = r[i += 1])
                                                            if ("/>" === o.slice(-2)) r[i] = o.slice(0, -2) + n + "/>";
                                                            else if ("<" === o.charAt(0)) {
                                                            p("not an unmatched top-level close tag", "/" !== o.charAt(1)), r[i] = o.slice(0, -1) + n + ">";
                                                            var s = 1;
                                                            do {
                                                                p("no missing close tags", o = r[i += 1]), "</" === o.slice(0, 2) ? s -= 1 : "<" === o.charAt(0) && "/>" !== o.slice(-2) && (s += 1)
                                                            } while (s > 0)
                                                        }
                                                        return r.join("").replace(/>&(\d+)/g, (function(e, n) {
                                                            return " mathquill-block-id=" + t[n].id + ">" + t[n].join("html")
                                                        }))
                                                    }, e.latex = function() {
                                                        return this.foldChildren(this.ctrlSeq, (function(e, t) {
                                                            return e + "{" + (t.latex() || " ") + "}"
                                                        }))
                                                    }, e.textTemplate = [""], e.text = function() {
                                                        var e = this,
                                                            t = 0;
                                                        return e.foldChildren(e.textTemplate[t], (function(n, r) {
                                                            t += 1;
                                                            var i = r.text();
                                                            return n && "(" === e.textTemplate[t] && "(" === i[0] && ")" === i.slice(-1) ? n + i.slice(1, -1) + e.textTemplate[t] : n + i + (e.textTemplate[t] || "")
                                                        }))
                                                    }
                                                })),
                                                W = h($, (function(e, t) {
                                                    e.init = function(e, n, r) {
                                                        r || (r = e && e.length > 1 ? e.slice(1) : e), t.init.call(this, e, n, [r])
                                                    }, e.parser = function() {
                                                        return P.succeed(this)
                                                    }, e.numBlocks = function() {
                                                        return 0
                                                    }, e.replaces = function(e) {
                                                        e.remove()
                                                    }, e.createBlocks = s, e.moveTowards = function(e, t) {
                                                        t.jQ.insDirOf(e, this.jQ), t[-e] = this, t[e] = this[e]
                                                    }, e.deleteTowards = function(e, t) {
                                                        t[e] = this.remove()[e]
                                                    }, e.seek = function(e, t) {
                                                        e - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? t.insLeftOf(this) : t.insRightOf(this)
                                                    }, e.latex = function() {
                                                        return this.ctrlSeq
                                                    }, e.text = function() {
                                                        return this.textTemplate
                                                    }, e.placeCursor = s, e.isEmpty = function() {
                                                        return !0
                                                    }
                                                })),
                                                X = h(W, (function(e, t) {
                                                    e.init = function(e, n) {
                                                        t.init.call(this, e, "<span>" + (n || e) + "</span>")
                                                    }
                                                })),
                                                U = h(W, (function(e, t) {
                                                    e.init = function(e, n, r) {
                                                        t.init.call(this, e, '<span class="mq-binary-operator">' + n + "</span>", r)
                                                    }
                                                })),
                                                V = h(B, (function(e, t) {
                                                    e.join = function(e) {
                                                        return this.foldChildren("", (function(t, n) {
                                                            return t + n[e]()
                                                        }))
                                                    }, e.html = function() {
                                                        return this.join("html")
                                                    }, e.latex = function() {
                                                        return this.join("latex")
                                                    }, e.text = function() {
                                                        return this.ends[m] === this.ends[1] && 0 !== this.ends[m] ? this.ends[m].text() : this.join("text")
                                                    }, e.keystroke = function(e, n, r) {
                                                        return !r.options.spaceBehavesLikeTab || "Spacebar" !== e && "Shift-Spacebar" !== e ? t.keystroke.apply(this, arguments) : (n.preventDefault(), void r.escapeDir("Shift-Spacebar" === e ? m : 1, e, n))
                                                    }, e.moveOutOf = function(e, t, n) {
                                                        n && this.parent[n + "Into"] || !this[e] ? t.insDirOf(e, this.parent) : t.insAtDirEnd(-e, this[e])
                                                    }, e.selectOutOf = function(e, t) {
                                                        t.insDirOf(e, this.parent)
                                                    }, e.deleteOutOf = function(e, t) {
                                                        t.unwrapGramp()
                                                    }, e.seek = function(e, t) {
                                                        var n = this.ends[1];
                                                        if (!n || n.jQ.offset().left + n.jQ.outerWidth() < e) return t.insAtRightEnd(this);
                                                        if (e < this.ends[m].jQ.offset().left) return t.insAtLeftEnd(this);
                                                        for (; e < n.jQ.offset().left;) n = n[m];
                                                        return n.seek(e, t)
                                                    }, e.chToCmd = function(e, t) {
                                                        var n;
                                                        return e.match(/^[a-eg-zA-Z]$/) ? Te(e) : /^\d$/.test(e) ? we(e) : t && t.typingSlashWritesDivisionSymbol && "/" === e ? q["÷"](e) : t && t.typingAsteriskWritesTimesSymbol && "*" === e ? q["×"](e) : (n = T[e] || q[e]) ? n(e) : X(e)
                                                    }, e.write = function(e, t) {
                                                        var n = this.chToCmd(t, e.options);
                                                        e.selection && n.replaces(e.replaceSelection()), e.isTooDeep() || n.createLeftOf(e.show())
                                                    }, e.focus = function() {
                                                        return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this
                                                    }, e.blur = function() {
                                                        return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), this
                                                    }
                                                }));
                                            S.p.mouseEvents = !0, j.StaticMath = function(e) {
                                                return h(e.AbstractMathQuill, (function(t, n) {
                                                    this.RootBlock = V, t.__mathquillify = function(e, t) {
                                                        return this.config(e), n.__mathquillify.call(this, "mq-math-mode"), this.__options.mouseEvents && (this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents()), this
                                                    }, t.init = function() {
                                                        n.init.apply(this, arguments), this.__controller.root.postOrder("registerInnerField", this.innerFields = [], e.MathField)
                                                    }, t.latex = function() {
                                                        var t = n.latex.apply(this, arguments);
                                                        return arguments.length > 0 && this.__controller.root.postOrder("registerInnerField", this.innerFields = [], e.MathField), t
                                                    }
                                                }))
                                            };
                                            var Y = h(V, M);
                                            j.MathField = function(e) {
                                                return h(e.EditableField, (function(e, t) {
                                                    this.RootBlock = Y, e.__mathquillify = function(e, n) {
                                                        return this.config(e), n > 1 && (this.__controller.root.reflow = s), t.__mathquillify.call(this, "mq-editable-field mq-math-mode"), delete this.__controller.root.reflow, this
                                                    }
                                                }))
                                            };
                                            var G = h(y, (function(e, t) {
                                                    function n(e) {
                                                        e.jQ[0].normalize();
                                                        var t = e.jQ[0].firstChild;
                                                        if (t) {
                                                            p("only node in TextBlock span is Text node", 3 === t.nodeType);
                                                            var n = Z(t.data);
                                                            return n.jQadd(t), e.children().disown(), n.adopt(e, 0, 0)
                                                        }
                                                    }
                                                    e.ctrlSeq = "\\text", e.replaces = function(e) {
                                                        e instanceof w ? this.replacedText = e.remove().jQ.text() : "string" == typeof e && (this.replacedText = e)
                                                    }, e.jQadd = function(e) {
                                                        t.jQadd.call(this, e), this.ends[m] && this.ends[m].jQadd(this.jQ[0].firstChild)
                                                    }, e.createLeftOf = function(e) {
                                                        var n = this;
                                                        if (t.createLeftOf.call(this, e), n[1].siblingCreated && n[1].siblingCreated(e.options, m), n[m].siblingCreated && n[m].siblingCreated(e.options, 1), n.bubble("reflow"), e.insAtRightEnd(n), n.replacedText)
                                                            for (var r = 0; r < n.replacedText.length; r += 1) n.write(e, n.replacedText.charAt(r))
                                                    }, e.parser = function() {
                                                        var e = this,
                                                            t = P.string,
                                                            n = P.regex;
                                                        return P.optWhitespace.then(t("{")).then(n(/^[^}]*/)).skip(t("}")).map((function(t) {
                                                            return 0 === t.length ? w() : (Z(t).adopt(e, 0, 0), e)
                                                        }))
                                                    }, e.textContents = function() {
                                                        return this.foldChildren("", (function(e, t) {
                                                            return e + t.text
                                                        }))
                                                    }, e.text = function() {
                                                        return '"' + this.textContents() + '"'
                                                    }, e.latex = function() {
                                                        var e = this.textContents();
                                                        return 0 === e.length ? "" : "\\text{" + e.replace(/\\/g, "\\backslash ").replace(/[{}]/g, "\\$&") + "}"
                                                    }, e.html = function() {
                                                        return '<span class="mq-text-mode" mathquill-command-id=' + this.id + ">" + this.textContents() + "</span>"
                                                    }, e.moveTowards = function(e, t) {
                                                        t.insAtDirEnd(-e, this)
                                                    }, e.moveOutOf = function(e, t) {
                                                        t.insDirOf(e, this)
                                                    }, e.unselectInto = e.moveTowards, e.selectTowards = $.prototype.selectTowards, e.deleteTowards = $.prototype.deleteTowards, e.selectOutOf = function(e, t) {
                                                        t.insDirOf(e, this)
                                                    }, e.deleteOutOf = function(e, t) {
                                                        this.isEmpty() && t.insRightOf(this)
                                                    }, e.write = function(e, n) {
                                                        if (e.show().deleteSelection(), "$" !== n) e[m] ? e[m].appendText(n) : Z(n).createLeftOf(e);
                                                        else if (this.isEmpty()) e.insRightOf(this), X("\\$", "$").createLeftOf(e);
                                                        else if (e[1])
                                                            if (e[m]) {
                                                                var r = G(),
                                                                    i = this.ends[m];
                                                                i.disown().jQ.detach(), i.adopt(r, 0, 0), e.insLeftOf(this), t.createLeftOf.call(r, e)
                                                            } else e.insLeftOf(this);
                                                        else e.insRightOf(this)
                                                    }, e.seek = function(e, t) {
                                                        t.hide();
                                                        var r = n(this),
                                                            i = this.jQ.width() / this.text.length,
                                                            o = Math.round((e - this.jQ.offset().left) / i);
                                                        o <= 0 ? t.insAtLeftEnd(this) : o >= r.text.length ? t.insAtRightEnd(this) : t.insLeftOf(r.splitRight(o));
                                                        for (var s = e - t.show().offset().left, a = s && s < 0 ? m : 1, l = a; t[a] && s * l > 0;) t[a].moveTowards(a, t), l = s, s = e - t.offset().left;
                                                        if (a * s < -a * l && t[-a].moveTowards(-a, t), t.anticursor) {
                                                            if (t.anticursor.parent === this) {
                                                                var c = t[m] && t[m].text.length;
                                                                if (this.anticursorPosition === c) t.anticursor = b.copy(t);
                                                                else {
                                                                    if (this.anticursorPosition < c) {
                                                                        var u = t[m].splitRight(this.anticursorPosition);
                                                                        t[m] = u
                                                                    } else u = t[1].splitRight(this.anticursorPosition - c);
                                                                    t.anticursor = b(this, u[m], u)
                                                                }
                                                            }
                                                        } else this.anticursorPosition = t[m] && t[m].text.length
                                                    }, e.blur = function(e) {
                                                        V.prototype.blur.call(this), e && ("" === this.textContents() ? (this.remove(), e[m] === this ? e[m] = this[m] : e[1] === this && (e[1] = this[1])) : n(this))
                                                    }, e.focus = V.prototype.focus
                                                })),
                                                Z = h(y, (function(e, t) {
                                                    function n(e, t) {
                                                        return t.charAt(e === m ? 0 : -1 + t.length)
                                                    }
                                                    e.init = function(e) {
                                                        t.init.call(this), this.text = e
                                                    }, e.jQadd = function(e) {
                                                        this.dom = e, this.jQ = v(e)
                                                    }, e.jQize = function() {
                                                        return this.jQadd(document.createTextNode(this.text))
                                                    }, e.appendText = function(e) {
                                                        this.text += e, this.dom.appendData(e)
                                                    }, e.prependText = function(e) {
                                                        this.text = e + this.text, this.dom.insertData(0, e)
                                                    }, e.insTextAtDirEnd = function(e, t) {
                                                        g(t), 1 === t ? this.appendText(e) : this.prependText(e)
                                                    }, e.splitRight = function(e) {
                                                        var t = Z(this.text.slice(e)).adopt(this.parent, this, this[1]);
                                                        return t.jQadd(this.dom.splitText(e)), this.text = this.text.slice(0, e), t
                                                    }, e.moveTowards = function(e, t) {
                                                        g(e);
                                                        var r = n(-e, this.text),
                                                            i = this[-e];
                                                        return i ? i.insTextAtDirEnd(r, e) : Z(r).createDir(-e, t), this.deleteTowards(e, t)
                                                    }, e.latex = function() {
                                                        return this.text
                                                    }, e.deleteTowards = function(e, t) {
                                                        this.text.length > 1 ? 1 === e ? (this.dom.deleteData(0, 1), this.text = this.text.slice(1)) : (this.dom.deleteData(-1 + this.text.length, 1), this.text = this.text.slice(0, -1)) : (this.remove(), this.jQ.remove(), t[e] = this[e])
                                                    }, e.selectTowards = function(e, t) {
                                                        g(e);
                                                        var r = t.anticursor,
                                                            i = n(-e, this.text);
                                                        if (r[e] === this) {
                                                            var o = Z(i).createDir(e, t);
                                                            r[e] = o, t.insDirOf(e, o)
                                                        } else {
                                                            var s = this[-e];
                                                            s ? s.insTextAtDirEnd(i, e) : (o = Z(i).createDir(-e, t)).jQ.insDirOf(-e, t.selection.jQ), 1 === this.text.length && r[-e] === this && (r[-e] = this[-e])
                                                        }
                                                        return this.deleteTowards(e, t)
                                                    }
                                                }));

                                            function K(e, t, n) {
                                                return h(G, {
                                                    ctrlSeq: e,
                                                    htmlTemplate: "<" + t + " " + n + ">&0</" + t + ">"
                                                })
                                            }
                                            q.text = q.textnormal = q.textrm = q.textup = q.textmd = G, q.em = q.italic = q.italics = q.emph = q.textit = q.textsl = K("\\textit", "i", 'class="mq-text-mode"'), q.strong = q.bold = q.textbf = K("\\textbf", "b", 'class="mq-text-mode"'), q.sf = q.textsf = K("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"'), q.tt = q.texttt = K("\\texttt", "span", 'class="mq-monospace mq-text-mode"'), q.textsc = K("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"'), q.uppercase = K("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"'), q.lowercase = K("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"');
                                            var J = h($, (function(e, t) {
                                                    e.init = function(e) {
                                                        t.init.call(this, "$"), this.cursor = e
                                                    }, e.htmlTemplate = '<span class="mq-math-mode">&0</span>', e.createBlocks = function() {
                                                        t.createBlocks.call(this), this.ends[m].cursor = this.cursor, this.ends[m].write = function(e, t) {
                                                            "$" !== t ? V.prototype.write.call(this, e, t) : this.isEmpty() ? (e.insRightOf(this.parent), this.parent.deleteTowards(dir, e), X("\\$", "$").createLeftOf(e.show())) : e[1] ? e[m] ? V.prototype.write.call(this, e, t) : e.insLeftOf(this.parent) : e.insRightOf(this.parent)
                                                        }
                                                    }, e.latex = function() {
                                                        return "$" + this.ends[m].latex() + "$"
                                                    }
                                                })),
                                                ee = h(Y, (function(e, t) {
                                                    e.keystroke = function(e) {
                                                        if ("Spacebar" !== e && "Shift-Spacebar" !== e) return t.keystroke.apply(this, arguments)
                                                    }, e.write = function(e, t) {
                                                        var n;
                                                        e.show().deleteSelection(), "$" === t ? J(e).createLeftOf(e) : ("<" === t ? n = "&lt;" : ">" === t && (n = "&gt;"), X(t, n).createLeftOf(e))
                                                    }
                                                }));
                                            j.TextField = function(e) {
                                                return h(e.EditableField, (function(e, t) {
                                                    this.RootBlock = ee, e.__mathquillify = function() {
                                                        return t.__mathquillify.call(this, "mq-editable-field mq-text-mode")
                                                    }, e.latex = function(e) {
                                                        return arguments.length > 0 ? (this.__controller.renderLatexText(e), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex()
                                                    }
                                                }))
                                            }, T["\\"] = h($, (function(e, t) {
                                                e.ctrlSeq = "\\", e.replaces = function(e) {
                                                    this._replacedFragment = e.disown(), this.isEmpty = function() {
                                                        return !1
                                                    }
                                                }, e.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>', e.textTemplate = ["\\"], e.createBlocks = function() {
                                                    t.createBlocks.call(this), this.ends[m].focus = function() {
                                                        return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), this
                                                    }, this.ends[m].blur = function() {
                                                        return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), this
                                                    }, this.ends[m].write = function(e, t) {
                                                        e.show().deleteSelection(), t.match(/[a-z]/i) ? X(t).createLeftOf(e) : (this.parent.renderCommand(e), "\\" === t && this.isEmpty() || e.parent.write(e, t))
                                                    }, this.ends[m].keystroke = function(e, n, r) {
                                                        return "Tab" === e || "Enter" === e || "Spacebar" === e ? (this.parent.renderCommand(r.cursor), void n.preventDefault()) : t.keystroke.apply(this, arguments)
                                                    }
                                                }, e.createLeftOf = function(e) {
                                                    if (t.createLeftOf.call(this, e), this._replacedFragment) {
                                                        var n = this.jQ[0];
                                                        this.jQ = this._replacedFragment.jQ.addClass("mq-blur").bind("mousedown mousemove", (function(e) {
                                                            return v(e.target = n).trigger(e), !1
                                                        })).insertBefore(this.jQ).add(this.jQ)
                                                    }
                                                }, e.latex = function() {
                                                    return "\\" + this.ends[m].latex() + " "
                                                }, e.renderCommand = function(e) {
                                                    this.jQ = this.jQ.last(), this.remove(), this[1] ? e.insLeftOf(this[1]) : e.insAtRightEnd(this.parent);
                                                    var t = this.ends[m].latex();
                                                    t || (t = " ");
                                                    var n = q[t];
                                                    n ? (n = n(t), this._replacedFragment && n.replaces(this._replacedFragment), n.createLeftOf(e)) : ((n = G()).replaces(t), n.createLeftOf(e), e.insRightOf(n), this._replacedFragment && this._replacedFragment.remove())
                                                }
                                            }));
                                            var te, ne, re = s,
                                                ie = document.createElement("div").style;
                                            for (var oe in {
                                                    transform: 1,
                                                    WebkitTransform: 1,
                                                    MozTransform: 1,
                                                    OTransform: 1,
                                                    msTransform: 1
                                                })
                                                if (oe in ie) {
                                                    ne = oe;
                                                    break
                                                } ne ? te = function(e, t, n) {
                                                e.css(ne, "scale(" + t + "," + n + ")")
                                            } : "filter" in ie ? (re = function(e) {
                                                e.className = e.className
                                            }, te = function(e, t, n) {
                                                t /= 1 + (n - 1) / 2, e.css("fontSize", n + "em"), e.hasClass("mq-matrixed-container") || e.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');
                                                var r = e.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + t + ",SizingMethod='auto expand')");

                                                function i() {
                                                    e.css("marginRight", (r.width() - 1) * (t - 1) / t + "px")
                                                }
                                                i();
                                                var o = setInterval(i);
                                                v(window).load((function() {
                                                    clearTimeout(o), i()
                                                }))
                                            }) : te = function(e, t, n) {
                                                e.css("fontSize", n + "em")
                                            };
                                            var se = h($, (function(e, t) {
                                                e.init = function(e, n, r) {
                                                    t.init.call(this, e, "<" + n + " " + r + ">&0</" + n + ">")
                                                }
                                            }));
                                            q.mathrm = d(se, "\\mathrm", "span", 'class="mq-roman mq-font"'), q.mathit = d(se, "\\mathit", "i", 'class="mq-font"'), q.mathbf = d(se, "\\mathbf", "b", 'class="mq-font"'), q.mathsf = d(se, "\\mathsf", "span", 'class="mq-sans-serif mq-font"'), q.mathtt = d(se, "\\mathtt", "span", 'class="mq-monospace mq-font"'), q.underline = d(se, "\\underline", "span", 'class="mq-non-leaf mq-underline"'), q.overline = q.bar = d(se, "\\overline", "span", 'class="mq-non-leaf mq-overline"'), q.overrightarrow = d(se, "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"'), q.overleftarrow = d(se, "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"'), q.overleftrightarrow = d(se, "\\overleftrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-both"'), q.overarc = d(se, "\\overarc", "span", 'class="mq-non-leaf mq-overarc"'), q.dot = h($, (function(e, t) {
                                                e.init = function() {
                                                    t.init.call(this, "\\dot", '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>')
                                                }
                                            })), q.textcolor = h($, (function(e, t) {
                                                e.setColor = function(e) {
                                                    this.color = e, this.htmlTemplate = '<span class="mq-textcolor" style="color:' + e + '">&0</span>'
                                                }, e.latex = function() {
                                                    return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}"
                                                }, e.parser = function() {
                                                    var e = this,
                                                        n = P.optWhitespace,
                                                        r = P.string,
                                                        i = P.regex;
                                                    return n.then(r("{")).then(i(/^[#\w\s.,()%-]*/)).skip(r("}")).then((function(n) {
                                                        return e.setColor(n), t.parser.call(e)
                                                    }))
                                                }, e.isStyleBlock = function() {
                                                    return !0
                                                }
                                            })), q.class = h($, (function(e, t) {
                                                e.parser = function() {
                                                    var e = this,
                                                        n = P.string,
                                                        r = P.regex;
                                                    return P.optWhitespace.then(n("{")).then(r(/^[-\w\s\\\xA0-\xFF]*/)).skip(n("}")).then((function(n) {
                                                        return e.cls = n || "", e.htmlTemplate = '<span class="mq-class ' + n + '">&0</span>', t.parser.call(e)
                                                    }))
                                                }, e.latex = function() {
                                                    return "\\class{" + this.cls + "}{" + this.blocks[0].latex() + "}"
                                                }, e.isStyleBlock = function() {
                                                    return !0
                                                }
                                            }));
                                            var ae = h($, (function(e, t) {
                                                e.ctrlSeq = "_{...}^{...}", e.createLeftOf = function(e) {
                                                    if (this.replacedFragment || e[m] || !e.options.supSubsRequireOperand) return t.createLeftOf.apply(this, arguments)
                                                }, e.contactWeld = function(e) {
                                                    for (var t = m; t; t = t === m && 1)
                                                        if (this[t] instanceof ae) {
                                                            for (var n = "sub"; n; n = "sub" === n && "sup") {
                                                                var r = this[n],
                                                                    i = this[t][n];
                                                                if (r) {
                                                                    if (i)
                                                                        if (r.isEmpty()) s = b(i, 0, i.ends[m]);
                                                                        else {
                                                                            r.jQ.children().insAtDirEnd(-t, i.jQ);
                                                                            var o = r.children().disown(),
                                                                                s = b(i, o.ends[1], i.ends[m]);
                                                                            t === m ? o.adopt(i, i.ends[1], 0) : o.adopt(i, 0, i.ends[m])
                                                                        }
                                                                    else this[t].addBlock(r.disown());
                                                                    this.placeCursor = function(e, n) {
                                                                        return function(r) {
                                                                            r.insAtDirEnd(-t, e || n)
                                                                        }
                                                                    }(i, r)
                                                                }
                                                            }
                                                            this.remove(), e && e[m] === this && (1 === t && s ? s[m] ? e.insRightOf(s[m]) : e.insAtLeftEnd(s.parent) : e.insRightOf(this[t]));
                                                            break
                                                        }
                                                }, S.p.charsThatBreakOutOfSupSub = "", e.finalizeTree = function() {
                                                    this.ends[m].write = function(e, t) {
                                                        if (e.options.autoSubscriptNumerals && this === this.parent.sub) {
                                                            if ("_" === t) return;
                                                            var n = this.chToCmd(t, e.options);
                                                            return n instanceof W ? e.deleteSelection() : e.clearSelection().insRightOf(this.parent), n.createLeftOf(e.show())
                                                        }
                                                        e[m] && !e[1] && !e.selection && e.options.charsThatBreakOutOfSupSub.indexOf(t) > -1 && e.insRightOf(this.parent), V.p.write.apply(this, arguments)
                                                    }
                                                }, e.moveTowards = function(e, n, r) {
                                                    n.options.autoSubscriptNumerals && !this.sup ? n.insDirOf(e, this) : t.moveTowards.apply(this, arguments)
                                                }, e.deleteTowards = function(e, n) {
                                                    if (n.options.autoSubscriptNumerals && this.sub) {
                                                        var r = this.sub.ends[-e];
                                                        r instanceof W ? r.remove() : r && r.deleteTowards(e, n.insAtDirEnd(-e, this.sub)), this.sub.isEmpty() && (this.sub.deleteOutOf(m, n.insAtLeftEnd(this.sub)), this.sup && n.insDirOf(-e, this))
                                                    } else t.deleteTowards.apply(this, arguments)
                                                }, e.latex = function() {
                                                    function e(e, t) {
                                                        var n = t && t.latex();
                                                        return t ? e + (1 === n.length ? n : "{" + (n || " ") + "}") : ""
                                                    }
                                                    return e("_", this.sub) + e("^", this.sup)
                                                }, e.addBlock = function(e) {
                                                    "sub" === this.supsub ? (this.sup = this.upInto = this.sub.upOutOf = e, e.adopt(this, this.sub, 0).downOutOf = this.sub, e.jQ = v('<span class="mq-sup"/>').append(e.jQ.children()).attr(r, e.id).prependTo(this.jQ)) : (this.sub = this.downInto = this.sup.downOutOf = e, e.adopt(this, 0, this.sup).upOutOf = this.sup, e.jQ = v('<span class="mq-sub"></span>').append(e.jQ.children()).attr(r, e.id).appendTo(this.jQ.removeClass("mq-sup-only")), this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>'));
                                                    for (var t = 0; t < 2; t += 1) ! function(e, t, n, r) {
                                                        e[t].deleteOutOf = function(i, o) {
                                                            if (o.insDirOf(this[i] ? -i : i, this.parent), !this.isEmpty()) {
                                                                var s = this.ends[i];
                                                                this.children().disown().withDirAdopt(i, o.parent, o[i], o[-i]).jQ.insDirOf(-i, o.jQ), o[-i] = s
                                                            }
                                                            e.supsub = n, delete e[t], delete e[r + "Into"], e[n][r + "OutOf"] = le, delete e[n].deleteOutOf, "sub" === t && v(e.jQ.addClass("mq-sup-only")[0].lastChild).remove(), this.remove()
                                                        }
                                                    }(this, "sub sup".split(" ")[t], "sup sub".split(" ")[t], "down up".split(" ")[t])
                                                }, e.reflow = function() {
                                                    var e = this.jQ,
                                                        t = e.prev();
                                                    if (t.length) {
                                                        var n = e.children(".mq-sup");
                                                        if (n.length) {
                                                            var r = parseInt(n.css("font-size")),
                                                                i = n.offset().top + n.height() - t.offset().top - .7 * r,
                                                                o = parseInt(n.css("margin-bottom"));
                                                            n.css("margin-bottom", o + i)
                                                        }
                                                    }
                                                }
                                            }));

                                            function le(e) {
                                                var t = this.parent,
                                                    n = e;
                                                do {
                                                    if (n[1]) return e.insLeftOf(t);
                                                    n = n.parent.parent
                                                } while (n !== t);
                                                e.insRightOf(t)
                                            }
                                            q.subscript = q._ = h(ae, (function(e, t) {
                                                e.supsub = "sub", e.htmlTemplate = '<span class="mq-supsub mq-non-leaf"><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203;</span></span>', e.textTemplate = ["_"], e.finalizeTree = function() {
                                                    this.downInto = this.sub = this.ends[m], this.sub.upOutOf = le, t.finalizeTree.call(this)
                                                }
                                            })), q.superscript = q.supscript = q["^"] = h(ae, (function(e, t) {
                                                e.supsub = "sup", e.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">&0</span></span>', e.textTemplate = ["^"], e.finalizeTree = function() {
                                                    this.upInto = this.sup = this.ends[1], this.sup.downOutOf = le, t.finalizeTree.call(this)
                                                }
                                            }));
                                            var ce = h($, (function(e, t) {
                                                e.init = function(e, t) {
                                                    var n = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + t + '</big><span class="mq-from"><span>&0</span></span></span>';
                                                    W.prototype.init.call(this, e, n)
                                                }, e.createLeftOf = function(e) {
                                                    t.createLeftOf.apply(this, arguments), e.options.sumStartsWithNEquals && (Te("n").createLeftOf(e), Qe().createLeftOf(e))
                                                }, e.latex = function() {
                                                    function e(e) {
                                                        return 1 === e.length ? e : "{" + (e || " ") + "}"
                                                    }
                                                    return this.ctrlSeq + "_" + e(this.ends[m].latex()) + "^" + e(this.ends[1].latex())
                                                }, e.parser = function() {
                                                    for (var e = P.string, t = P.optWhitespace, n = P.succeed, r = F.block, i = this, o = i.blocks = [V(), V()], s = 0; s < o.length; s += 1) o[s].adopt(i, i.ends[1], 0);
                                                    return t.then(e("_").or(e("^"))).then((function(e) {
                                                        var t = o["_" === e ? 0 : 1];
                                                        return r.then((function(e) {
                                                            return e.children().adopt(t, t.ends[1], 0), n(i)
                                                        }))
                                                    })).many().result(i)
                                                }, e.finalizeTree = function() {
                                                    this.downInto = this.ends[m], this.upInto = this.ends[1], this.ends[m].upOutOf = this.ends[1], this.ends[1].downOutOf = this.ends[m]
                                                }
                                            }));
                                            q["∑"] = q.sum = q.summation = d(ce, "\\sum ", "&sum;"), q["∏"] = q.prod = q.product = d(ce, "\\prod ", "&prod;"), q.coprod = q.coproduct = d(ce, "\\coprod ", "&#8720;"), q["∫"] = q.int = q.integral = h(ce, (function(e, t) {
                                                e.init = function() {
                                                    W.prototype.init.call(this, "\\int ", '<span class="mq-int mq-non-leaf"><big>&int;</big><span class="mq-supsub mq-non-leaf"><span class="mq-sup"><span class="mq-sup-inner">&1</span></span><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>')
                                                }, e.createLeftOf = $.p.createLeftOf
                                            }));
                                            var ue = q.frac = q.dfrac = q.cfrac = q.fraction = h($, (function(e, t) {
                                                    e.ctrlSeq = "\\frac", e.htmlTemplate = '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator">&0</span><span class="mq-denominator">&1</span><span style="display:inline-block;width:0">&#8203;</span></span>', e.textTemplate = ["(", ")/(", ")"], e.finalizeTree = function() {
                                                        this.upInto = this.ends[1].upOutOf = this.ends[m], this.downInto = this.ends[m].downOutOf = this.ends[1]
                                                    }
                                                })),
                                                fe = q.over = T["/"] = h(ue, (function(e, t) {
                                                    e.createLeftOf = function(e) {
                                                        if (!this.replacedFragment) {
                                                            for (var n = e[m]; n && !(n instanceof U || n instanceof(q.text || s) || n instanceof ce || "\\ " === n.ctrlSeq || /^[,;:]$/.test(n.ctrlSeq));) n = n[m];
                                                            n instanceof ce && n[1] instanceof ae && (n = n[1])[1] instanceof ae && n[1].ctrlSeq != n.ctrlSeq && (n = n[1]), n === e[m] || e.isTooDeep(1) || (this.replaces(w(n[1] || e.parent.ends[m], e[m])), e[m] = n)
                                                        }
                                                        t.createLeftOf.call(this, e)
                                                    }
                                                })),
                                                de = q.sqrt = q["√"] = h($, (function(e, t) {
                                                    e.ctrlSeq = "\\sqrt", e.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem">&0</span></span>', e.textTemplate = ["sqrt(", ")"], e.parser = function() {
                                                        return F.optBlock.then((function(e) {
                                                            return F.block.map((function(t) {
                                                                var n = pe();
                                                                return n.blocks = [e, t], e.adopt(n, 0, 0), t.adopt(n, e, 0), n
                                                            }))
                                                        })).or(t.parser.call(this))
                                                    }, e.reflow = function() {
                                                        var e = this.ends[1].jQ;
                                                        te(e.prev(), 1, e.innerHeight() / +e.css("fontSize").slice(0, -2) - .1)
                                                    }
                                                })),
                                                pe = (q.hat = h($, (function(e, t) {
                                                    e.ctrlSeq = "\\hat", e.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-hat-prefix">^</span><span class="mq-hat-stem">&0</span></span>', e.textTemplate = ["hat(", ")"]
                                                })), q.nthroot = h(de, (function(e, t) {
                                                    e.htmlTemplate = '<sup class="mq-nthroot mq-non-leaf">&0</sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf">&1</span></span>', e.textTemplate = ["sqrt[", "](", ")"], e.latex = function() {
                                                        return "\\sqrt[" + this.ends[m].latex() + "]{" + this.ends[1].latex() + "}"
                                                    }
                                                }))),
                                                he = h($, (function(e, t) {
                                                    e.init = function(e, n, r) {
                                                        var i = '<span class="mq-non-leaf"><span class="mq-diacritic-above">' + n + '</span><span class="mq-diacritic-stem">&0</span></span>';
                                                        t.init.call(this, e, i, r)
                                                    }
                                                }));

                                            function me(e, t) {
                                                e.jQadd = function() {
                                                    t.jQadd.apply(this, arguments), this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last")), this.contentjQ = this.jQ.children(":eq(1)")
                                                }, e.reflow = function() {
                                                    var e = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
                                                    te(this.delimjQs, i(1 + .2 * (e - 1), 1.2), 1.2 * e)
                                                }
                                            }
                                            q.vec = d(he, "\\vec", "&rarr;", ["vec(", ")"]), q.tilde = d(he, "\\tilde", "~", ["tilde(", ")"]);
                                            var ge = h(h($, me), (function(t, n) {
                                                    t.init = function(t, r, i, o, s) {
                                                        n.init.call(this, "\\left" + o, e, [r, i]), this.side = t, this.sides = {}, this.sides[m] = {
                                                            ch: r,
                                                            ctrlSeq: o
                                                        }, this.sides[1] = {
                                                            ch: i,
                                                            ctrlSeq: s
                                                        }
                                                    }, t.numBlocks = function() {
                                                        return 1
                                                    }, t.html = function() {
                                                        return this.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' + (1 === this.side ? " mq-ghost" : "") + '">' + this.sides[m].ch + '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' + (this.side === m ? " mq-ghost" : "") + '">' + this.sides[1].ch + "</span></span>", n.html.call(this)
                                                    }, t.latex = function() {
                                                        return "\\left" + this.sides[m].ctrlSeq + this.ends[m].latex() + "\\right" + this.sides[1].ctrlSeq
                                                    }, t.matchBrack = function(e, t, n) {
                                                        return n instanceof ge && n.side && n.side !== -t && (!e.restrictMismatchedBrackets || ve[this.sides[this.side].ch] === n.sides[n.side].ch || {
                                                            "(": "]",
                                                            "[": ")"
                                                        } [this.sides[m].ch] === n.sides[1].ch) && n
                                                    }, t.closeOpposing = function(e) {
                                                        e.side = 0, e.sides[this.side] = this.sides[this.side], e.delimjQs.eq(this.side === m ? 0 : 1).removeClass("mq-ghost").html(this.sides[this.side].ch)
                                                    }, t.createLeftOf = function(e) {
                                                        if (!this.replacedFragment) {
                                                            var t = e.options;
                                                            if ("|" === this.sides[m].ch) var r = this.matchBrack(t, 1, e[1]) || this.matchBrack(t, m, e[m]) || this.matchBrack(t, 0, e.parent.parent);
                                                            else r = this.matchBrack(t, -this.side, e[-this.side]) || this.matchBrack(t, -this.side, e.parent.parent)
                                                        }
                                                        if (r) {
                                                            var i = this.side = -r.side;
                                                            this.closeOpposing(r), r === e.parent.parent && e[i] && w(e[i], e.parent.ends[i], -i).disown().withDirAdopt(-i, r.parent, r, r[i]).jQ.insDirOf(i, r.jQ), r.bubble("reflow")
                                                        } else i = (r = this).side, r.replacedFragment ? r.side = 0 : e[-i] && (r.replaces(w(e[-i], e.parent.ends[-i], i)), e[-i] = 0), n.createLeftOf.call(r, e);
                                                        i === m ? e.insAtLeftEnd(r.ends[m]) : e.insRightOf(r)
                                                    }, t.placeCursor = s, t.unwrap = function() {
                                                        this.ends[m].children().disown().adopt(this.parent, this, this[1]).jQ.insertAfter(this.jQ), this.remove()
                                                    }, t.deleteSide = function(e, t, n) {
                                                        var r = this.parent,
                                                            i = this[e],
                                                            o = r.ends[e];
                                                        if (e === this.side) return this.unwrap(), void(i ? n.insDirOf(-e, i) : n.insAtDirEnd(e, r));
                                                        var s = n.options,
                                                            a = !this.side;
                                                        if (this.side = -e, this.matchBrack(s, e, this.ends[m].ends[this.side])) {
                                                            this.closeOpposing(this.ends[m].ends[this.side]);
                                                            var l = this.ends[m].ends[e];
                                                            this.unwrap(), l.siblingCreated && l.siblingCreated(n.options, e), i ? n.insDirOf(-e, i) : n.insAtDirEnd(e, r)
                                                        } else {
                                                            if (this.matchBrack(s, e, this.parent.parent)) this.parent.parent.closeOpposing(this), this.parent.parent.unwrap();
                                                            else {
                                                                if (t && a) return this.unwrap(), void(i ? n.insDirOf(-e, i) : n.insAtDirEnd(e, r));
                                                                this.sides[e] = {
                                                                    ch: ve[this.sides[this.side].ch],
                                                                    ctrlSeq: ve[this.sides[this.side].ctrlSeq]
                                                                }, this.delimjQs.removeClass("mq-ghost").eq(e === m ? 0 : 1).addClass("mq-ghost").html(this.sides[e].ch)
                                                            }
                                                            i ? (l = this.ends[m].ends[e], w(i, o, -e).disown().withDirAdopt(-e, this.ends[m], l, 0).jQ.insAtDirEnd(e, this.ends[m].jQ.removeClass("mq-empty")), l.siblingCreated && l.siblingCreated(n.options, e), n.insDirOf(-e, i)) : t ? n.insDirOf(e, this) : n.insAtDirEnd(e, this.ends[m])
                                                        }
                                                    }, t.deleteTowards = function(e, t) {
                                                        this.deleteSide(-e, !1, t)
                                                    }, t.finalizeTree = function() {
                                                        this.ends[m].deleteOutOf = function(e, t) {
                                                            this.parent.deleteSide(e, !0, t)
                                                        }, this.finalizeTree = this.intentionalBlur = function() {
                                                            this.delimjQs.eq(this.side === m ? 1 : 0).removeClass("mq-ghost"), this.side = 0
                                                        }
                                                    }, t.siblingCreated = function(e, t) {
                                                        t === -this.side && this.finalizeTree()
                                                    }
                                                })),
                                                ve = {
                                                    "(": ")",
                                                    ")": "(",
                                                    "[": "]",
                                                    "]": "[",
                                                    "{": "}",
                                                    "}": "{",
                                                    "\\{": "\\}",
                                                    "\\}": "\\{",
                                                    "&lang;": "&rang;",
                                                    "&rang;": "&lang;",
                                                    "\\langle ": "\\rangle ",
                                                    "\\rangle ": "\\langle ",
                                                    "|": "|",
                                                    "\\lVert ": "\\rVert ",
                                                    "\\rVert ": "\\lVert "
                                                };

                                            function be(e, t) {
                                                t = t || e;
                                                var n = ve[e],
                                                    r = ve[t];
                                                T[e] = d(ge, m, e, n, t, r), T[n] = d(ge, 1, e, n, t, r)
                                            }
                                            be("("), be("["), be("{", "\\{"), q.langle = d(ge, m, "&lang;", "&rang;", "\\langle ", "\\rangle "), q.rangle = d(ge, 1, "&lang;", "&rang;", "\\langle ", "\\rangle "), T["|"] = d(ge, m, "|", "|", "|", "|"), q.lVert = d(ge, m, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), q.rVert = d(ge, 1, "&#8741;", "&#8741;", "\\lVert ", "\\rVert "), q.left = h($, (function(e) {
                                                e.parser = function() {
                                                    var e = P.regex,
                                                        t = P.string,
                                                        n = (P.succeed, P.optWhitespace);
                                                    return n.then(e(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/)).then((function(r) {
                                                        var i = "\\" === r.charAt(0) ? r.slice(1) : r;
                                                        return "\\langle" == r && (i = "&lang;", r += " "), "\\lVert" == r && (i = "&#8741;", r += " "), F.then((function(o) {
                                                            return t("\\right").skip(n).then(e(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/)).map((function(e) {
                                                                var t = "\\" === e.charAt(0) ? e.slice(1) : e;
                                                                "\\rangle" == e && (t = "&rang;", e += " "), "\\rVert" == e && (t = "&#8741;", e += " ");
                                                                var n = ge(0, i, t, r, e);
                                                                return n.blocks = [o], o.adopt(n, 0, 0), n
                                                            }))
                                                        }))
                                                    }))
                                                }
                                            })), q.right = h($, (function(e) {
                                                e.parser = function() {
                                                    return P.fail("unmatched \\right")
                                                }
                                            }));
                                            var ye = q.binom = q.binomial = h(h($, me), (function(e, t) {
                                                e.ctrlSeq = "\\binom", e.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>', e.textTemplate = ["choose(", ",", ")"]
                                            }));
                                            q.choose = h(ye, (function(e) {
                                                e.createLeftOf = fe.prototype.createLeftOf
                                            })), q.editable = q.MathQuillMathField = h($, (function(e, t) {
                                                e.ctrlSeq = "\\MathQuillMathField", e.htmlTemplate = '<span class="mq-editable-field"><span class="mq-root-block">&0</span></span>', e.parser = function() {
                                                    var e = this,
                                                        n = P.string,
                                                        r = P.regex,
                                                        i = P.succeed;
                                                    return n("[").then(r(/^[a-z][a-z0-9]*/i)).skip(n("]")).map((function(t) {
                                                        e.name = t
                                                    })).or(i()).then(t.parser.call(e))
                                                }, e.finalizeTree = function(e) {
                                                    var t = O(this.ends[m], this.jQ, e);
                                                    t.KIND_OF_MQ = "MathField", t.editable = !0, t.createTextarea(), t.editablesTextareaEvents(), t.cursor.insAtRightEnd(t.root), M(t.root)
                                                }, e.registerInnerField = function(e, t) {
                                                    e.push(e[this.name] = t(this.ends[m].controller))
                                                }, e.latex = function() {
                                                    return this.ends[m].latex()
                                                }, e.text = function() {
                                                    return this.ends[m].text()
                                                }
                                            }));
                                            var xe = q.embed = h(W, (function(e, t) {
                                                e.setOptions = function(e) {
                                                    function t() {
                                                        return ""
                                                    }
                                                    return this.text = e.text || t, this.htmlTemplate = e.htmlString || "", this.latex = e.latex || t, this
                                                }, e.parser = function() {
                                                    var e = this,
                                                        t = P.string,
                                                        n = P.regex,
                                                        r = P.succeed;
                                                    return t("{").then(n(/^[a-z][a-z0-9]*/i)).skip(t("}")).then((function(i) {
                                                        return t("[").then(n(/^[-\w\s]*/)).skip(t("]")).or(r()).map((function(t) {
                                                            return e.setOptions(A[i](t))
                                                        }))
                                                    }))
                                                }
                                            }));
                                            q.notin = q.cong = q.equiv = q.oplus = q.otimes = h(U, (function(e, t) {
                                                e.init = function(e) {
                                                    t.init.call(this, "\\" + e + " ", "&" + e + ";")
                                                }
                                            })), q["≠"] = q.ne = q.neq = d(U, "\\ne ", "&ne;"), q["∗"] = q.ast = q.star = q.loast = q.lowast = d(U, "\\ast ", "&lowast;"), q.therefor = q.therefore = d(U, "\\therefore ", "&there4;"), q.cuz = q.because = d(U, "\\because ", "&#8757;"), q.prop = q.propto = d(U, "\\propto ", "&prop;"), q["≈"] = q.asymp = q.approx = d(U, "\\approx ", "&asymp;"), q.isin = q.in = d(U, "\\in ", "&isin;"), q.ni = q.contains = d(U, "\\ni ", "&ni;"), q.notni = q.niton = q.notcontains = q.doesnotcontain = d(U, "\\not\\ni ", "&#8716;"), q.sub = q.subset = d(U, "\\subset ", "&sub;"), q.sup = q.supset = q.superset = d(U, "\\supset ", "&sup;"), q.nsub = q.notsub = q.nsubset = q.notsubset = d(U, "\\not\\subset ", "&#8836;"), q.nsup = q.notsup = q.nsupset = q.notsupset = q.nsuperset = q.notsuperset = d(U, "\\not\\supset ", "&#8837;"), q.sube = q.subeq = q.subsete = q.subseteq = d(U, "\\subseteq ", "&sube;"), q.supe = q.supeq = q.supsete = q.supseteq = q.supersete = q.superseteq = d(U, "\\supseteq ", "&supe;"), q.nsube = q.nsubeq = q.notsube = q.notsubeq = q.nsubsete = q.nsubseteq = q.notsubsete = q.notsubseteq = d(U, "\\not\\subseteq ", "&#8840;"), q.nsupe = q.nsupeq = q.notsupe = q.notsupeq = q.nsupsete = q.nsupseteq = q.notsupsete = q.notsupseteq = q.nsupersete = q.nsuperseteq = q.notsupersete = q.notsuperseteq = d(U, "\\not\\supseteq ", "&#8841;"), q.N = q.naturals = q.Naturals = d(X, "\\mathbb{N}", "&#8469;"), q.P = q.primes = q.Primes = q.projective = q.Projective = q.probability = q.Probability = d(X, "\\mathbb{P}", "&#8473;"), q.Z = q.integers = q.Integers = d(X, "\\mathbb{Z}", "&#8484;"), q.Q = q.rationals = q.Rationals = d(X, "\\mathbb{Q}", "&#8474;"), q.R = q.reals = q.Reals = d(X, "\\mathbb{R}", "&#8477;"), q.C = q.complex = q.Complex = q.complexes = q.Complexes = q.complexplane = q.Complexplane = q.ComplexPlane = d(X, "\\mathbb{C}", "&#8450;"), q.H = q.Hamiltonian = q.quaternions = q.Quaternions = d(X, "\\mathbb{H}", "&#8461;"), q.quad = q.emsp = d(X, "\\quad ", "    "), q.qquad = d(X, "\\qquad ", "        "), q.diamond = d(X, "\\diamond ", "&#9671;"), q.bigtriangleup = d(X, "\\bigtriangleup ", "&#9651;"), q.ominus = d(X, "\\ominus ", "&#8854;"), q.uplus = d(X, "\\uplus ", "&#8846;"), q.bigtriangledown = d(X, "\\bigtriangledown ", "&#9661;"), q.sqcap = d(X, "\\sqcap ", "&#8851;"), q.triangleleft = d(X, "\\triangleleft ", "&#8882;"), q.sqcup = d(X, "\\sqcup ", "&#8852;"), q.triangleright = d(X, "\\triangleright ", "&#8883;"), q.odot = q.circledot = d(X, "\\odot ", "&#8857;"), q.bigcirc = d(X, "\\bigcirc ", "&#9711;"), q.dagger = d(X, "\\dagger ", "&#0134;"), q.ddagger = d(X, "\\ddagger ", "&#135;"), q.wr = d(X, "\\wr ", "&#8768;"), q.amalg = d(X, "\\amalg ", "&#8720;"), q.models = d(X, "\\models ", "&#8872;"), q.prec = d(X, "\\prec ", "&#8826;"), q.succ = d(X, "\\succ ", "&#8827;"), q.preceq = d(X, "\\preceq ", "&#8828;"), q.succeq = d(X, "\\succeq ", "&#8829;"), q.simeq = d(X, "\\simeq ", "&#8771;"), q.mid = d(X, "\\mid ", "&#8739;"), q.ll = d(X, "\\ll ", "&#8810;"), q.gg = d(X, "\\gg ", "&#8811;"), q.parallel = d(X, "\\parallel ", "&#8741;"), q.nparallel = d(X, "\\nparallel ", "&#8742;"), q.bowtie = d(X, "\\bowtie ", "&#8904;"), q.sqsubset = d(X, "\\sqsubset ", "&#8847;"), q.sqsupset = d(X, "\\sqsupset ", "&#8848;"), q.smile = d(X, "\\smile ", "&#8995;"), q.sqsubseteq = d(X, "\\sqsubseteq ", "&#8849;"), q.sqsupseteq = d(X, "\\sqsupseteq ", "&#8850;"), q.doteq = d(X, "\\doteq ", "&#8784;"), q.frown = d(X, "\\frown ", "&#8994;"), q.vdash = d(X, "\\vdash ", "&#8870;"), q.dashv = d(X, "\\dashv ", "&#8867;"), q.nless = d(X, "\\nless ", "&#8814;"), q.ngtr = d(X, "\\ngtr ", "&#8815;"), q.longleftarrow = d(X, "\\longleftarrow ", "&#8592;"), q.longrightarrow = d(X, "\\longrightarrow ", "&#8594;"), q.Longleftarrow = d(X, "\\Longleftarrow ", "&#8656;"), q.Longrightarrow = d(X, "\\Longrightarrow ", "&#8658;"), q.longleftrightarrow = d(X, "\\longleftrightarrow ", "&#8596;"), q.updownarrow = d(X, "\\updownarrow ", "&#8597;"), q.Longleftrightarrow = d(X, "\\Longleftrightarrow ", "&#8660;"), q.Updownarrow = d(X, "\\Updownarrow ", "&#8661;"), q.mapsto = d(X, "\\mapsto ", "&#8614;"), q.nearrow = d(X, "\\nearrow ", "&#8599;"), q.hookleftarrow = d(X, "\\hookleftarrow ", "&#8617;"), q.hookrightarrow = d(X, "\\hookrightarrow ", "&#8618;"), q.searrow = d(X, "\\searrow ", "&#8600;"), q.leftharpoonup = d(X, "\\leftharpoonup ", "&#8636;"), q.rightharpoonup = d(X, "\\rightharpoonup ", "&#8640;"), q.swarrow = d(X, "\\swarrow ", "&#8601;"), q.leftharpoondown = d(X, "\\leftharpoondown ", "&#8637;"), q.rightharpoondown = d(X, "\\rightharpoondown ", "&#8641;"), q.nwarrow = d(X, "\\nwarrow ", "&#8598;"), q.ldots = d(X, "\\ldots ", "&#8230;"), q.cdots = d(X, "\\cdots ", "&#8943;"), q.vdots = d(X, "\\vdots ", "&#8942;"), q.ddots = d(X, "\\ddots ", "&#8945;"), q.surd = d(X, "\\surd ", "&#8730;"), q.triangle = d(X, "\\triangle ", "&#9651;"), q.ell = d(X, "\\ell ", "&#8467;"), q.top = d(X, "\\top ", "&#8868;"), q.flat = d(X, "\\flat ", "&#9837;"), q.natural = d(X, "\\natural ", "&#9838;"), q.sharp = d(X, "\\sharp ", "&#9839;"), q.wp = d(X, "\\wp ", "&#8472;"), q.bot = d(X, "\\bot ", "&#8869;"), q.clubsuit = d(X, "\\clubsuit ", "&#9827;"), q.diamondsuit = d(X, "\\diamondsuit ", "&#9826;"), q.heartsuit = d(X, "\\heartsuit ", "&#9825;"), q.spadesuit = d(X, "\\spadesuit ", "&#9824;"), q.parallelogram = d(X, "\\parallelogram ", "&#9649;"), q.square = d(X, "\\square ", "&#11036;"), q.oint = d(X, "\\oint ", "&#8750;"), q.bigcap = d(X, "\\bigcap ", "&#8745;"), q.bigcup = d(X, "\\bigcup ", "&#8746;"), q.bigsqcup = d(X, "\\bigsqcup ", "&#8852;"), q.bigvee = d(X, "\\bigvee ", "&#8744;"), q.bigwedge = d(X, "\\bigwedge ", "&#8743;"), q.bigodot = d(X, "\\bigodot ", "&#8857;"), q.bigotimes = d(X, "\\bigotimes ", "&#8855;"), q.bigoplus = d(X, "\\bigoplus ", "&#8853;"), q.biguplus = d(X, "\\biguplus ", "&#8846;"), q.lfloor = d(X, "\\lfloor ", "&#8970;"), q.rfloor = d(X, "\\rfloor ", "&#8971;"), q.lceil = d(X, "\\lceil ", "&#8968;"), q.rceil = d(X, "\\rceil ", "&#8969;"), q.opencurlybrace = q.lbrace = d(X, "\\lbrace ", "{"), q.closecurlybrace = q.rbrace = d(X, "\\rbrace ", "}"), q.lbrack = d(X, "["), q.rbrack = d(X, "]"), q.slash = d(X, "/"), q.vert = d(X, "|"), q.perp = q.perpendicular = d(X, "\\perp ", "&perp;"), q.nabla = q.del = d(X, "\\nabla ", "&nabla;"), q.hbar = d(X, "\\hbar ", "&#8463;"), q.AA = q.Angstrom = q.angstrom = d(X, "\\text\\AA ", "&#8491;"), q.ring = q.circ = q.circle = d(X, "\\circ ", "&#8728;"), q.bull = q.bullet = d(X, "\\bullet ", "&bull;"), q.setminus = q.smallsetminus = d(X, "\\setminus ", "&#8726;"), q.not = q["¬"] = q.neg = d(X, "\\neg ", "&not;"), q["…"] = q.dots = q.ellip = q.hellip = q.ellipsis = q.hellipsis = d(X, "\\dots ", "&hellip;"), q.converges = q.darr = q.dnarr = q.dnarrow = q.downarrow = d(X, "\\downarrow ", "&darr;"), q.dArr = q.dnArr = q.dnArrow = q.Downarrow = d(X, "\\Downarrow ", "&dArr;"), q.diverges = q.uarr = q.uparrow = d(X, "\\uparrow ", "&uarr;"), q.uArr = q.Uparrow = d(X, "\\Uparrow ", "&uArr;"), q.to = d(U, "\\to ", "&rarr;"), q.rarr = q.rightarrow = d(X, "\\rightarrow ", "&rarr;"), q.implies = d(U, "\\Rightarrow ", "&rArr;"), q.rArr = q.Rightarrow = d(X, "\\Rightarrow ", "&rArr;"), q.gets = d(U, "\\gets ", "&larr;"), q.larr = q.leftarrow = d(X, "\\leftarrow ", "&larr;"), q.impliedby = d(U, "\\Leftarrow ", "&lArr;"), q.lArr = q.Leftarrow = d(X, "\\Leftarrow ", "&lArr;"), q.harr = q.lrarr = q.leftrightarrow = d(X, "\\leftrightarrow ", "&harr;"), q.iff = d(U, "\\Leftrightarrow ", "&hArr;"), q.hArr = q.lrArr = q.Leftrightarrow = d(X, "\\Leftrightarrow ", "&hArr;"), q.Re = q.Real = q.real = d(X, "\\Re ", "&real;"), q.Im = q.imag = q.image = q.imagin = q.imaginary = q.Imaginary = d(X, "\\Im ", "&image;"), q.part = q.partial = d(X, "\\partial ", "&part;"), q.infty = q.infin = q.infinity = d(X, "\\infty ", "&infin;"), q.pounds = d(X, "\\pounds ", "&pound;"), q.alef = q.alefsym = q.aleph = q.alephsym = d(X, "\\aleph ", "&alefsym;"), q.xist = q.xists = q.exist = q.exists = d(X, "\\exists ", "&exist;"), q.nexists = q.nexist = d(X, "\\nexists ", "&#8708;"), q.and = q.land = q.wedge = d(U, "\\wedge ", "&and;"), q.or = q.lor = q.vee = d(U, "\\vee ", "&or;"), q.o = q.O = q.empty = q.emptyset = q.oslash = q.Oslash = q.nothing = q.varnothing = d(U, "\\varnothing ", "&empty;"), q.cup = q.union = d(U, "\\cup ", "&cup;"), q.cap = q.intersect = q.intersection = d(U, "\\cap ", "&cap;"), q.deg = q.degree = d(X, "\\degree ", "&deg;"), q.ang = q.angle = d(X, "\\angle ", "&ang;"), q.measuredangle = d(X, "\\measuredangle ", "&#8737;");
                                            var we = h(X, (function(e, t) {
                                                    e.createLeftOf = function(e) {
                                                        e.options.autoSubscriptNumerals && e.parent !== e.parent.parent.sub && (e[m] instanceof qe && !1 !== e[m].isItalic || e[m] instanceof ae && e[m][m] instanceof qe && !1 !== e[m][m].isItalic) ? (q._().createLeftOf(e), t.createLeftOf.call(this, e), e.insRightOf(e.parent.parent)) : t.createLeftOf.call(this, e)
                                                    }
                                                })),
                                                qe = h(W, (function(e, t) {
                                                    e.init = function(e, n) {
                                                        t.init.call(this, e, "<var>" + (n || e) + "</var>")
                                                    }, e.text = function() {
                                                        var e = this.ctrlSeq;
                                                        return this.isPartOfOperator ? "\\" == e[0] ? e = e.slice(1, e.length) : " " == e[e.length - 1] && (e = e.slice(0, -1)) : (!this[m] || this[m] instanceof qe || this[m] instanceof U || "\\ " === this[m].ctrlSeq || (e = "*" + e), !this[1] || this[1] instanceof U || this[1] instanceof ae || (e += "*")), e
                                                    }
                                                }));
                                            S.p.autoCommands = {
                                                _maxLength: 0
                                            }, D.autoCommands = function(e) {
                                                if (!/^[a-z]+(?: [a-z]+)*$/i.test(e)) throw '"' + e + '" not a space-delimited list of only letters';
                                                for (var t = e.split(" "), n = {}, r = 0, i = 0; i < t.length; i += 1) {
                                                    var s = t[i];
                                                    if (s.length < 2) throw 'autocommand "' + s + '" not minimum length of 2';
                                                    if (q[s] === je) throw '"' + s + '" is a built-in operator name';
                                                    n[s] = 1, r = o(r, s.length)
                                                }
                                                return n._maxLength = r, n
                                            };
                                            var Te = h(qe, (function(e, t) {
                                                    function n(e) {
                                                        return !e || e instanceof U || e instanceof ce
                                                    }
                                                    e.init = function(e) {
                                                        return t.init.call(this, this.letter = e)
                                                    }, e.createLeftOf = function(e) {
                                                        t.createLeftOf.apply(this, arguments);
                                                        var n = e.options.autoCommands,
                                                            r = n._maxLength;
                                                        if (r > 0) {
                                                            for (var i = "", o = this, s = 0; o instanceof Te && o.ctrlSeq === o.letter && s < r;) i = o.letter + i, o = o[m], s += 1;
                                                            for (; i.length;) {
                                                                if (n.hasOwnProperty(i)) {
                                                                    for (s = 1, o = this; s < i.length; s += 1, o = o[m]);
                                                                    return w(o, this).remove(), e[m] = o[m], q[i](i).createLeftOf(e)
                                                                }
                                                                i = i.slice(1)
                                                            }
                                                        }
                                                    }, e.italicize = function(e) {
                                                        return this.isItalic = e, this.isPartOfOperator = !e, this.jQ.toggleClass("mq-operator-name", !e), this
                                                    }, e.finalizeTree = e.siblingDeleted = e.siblingCreated = function(e, t) {
                                                        t !== m && this[1] instanceof Te || this.autoUnItalicize(e)
                                                    }, e.autoUnItalicize = function(e) {
                                                        var t = e.autoOperatorNames;
                                                        if (0 !== t._maxLength) {
                                                            for (var r = this.letter, o = this[m]; o instanceof Te; o = o[m]) r = o.letter + r;
                                                            for (var s = this[1]; s instanceof Te; s = s[1]) r += s.letter;
                                                            w(o[1] || this.parent.ends[m], s[m] || this.parent.ends[1]).each((function(e) {
                                                                e.italicize(!0).jQ.removeClass("mq-first mq-last mq-followed-by-supsub"), e.ctrlSeq = e.letter
                                                            }));
                                                            e: for (var a = 0, l = o[1] || this.parent.ends[m]; a < r.length; a += 1, l = l[1])
                                                                for (var c = i(t._maxLength, r.length - a); c > 0; c -= 1) {
                                                                    var u = r.slice(a, a + c);
                                                                    if (t.hasOwnProperty(u)) {
                                                                        for (var f = 0, d = l; f < c; f += 1, d = d[1]) {
                                                                            d.italicize(!1);
                                                                            var p = d
                                                                        }
                                                                        var h = ke.hasOwnProperty(u);
                                                                        if (l.ctrlSeq = (h ? "\\" : "\\operatorname{") + l.ctrlSeq, p.ctrlSeq += h ? " " : "}", Oe.hasOwnProperty(u) && p[m][m][m].jQ.addClass("mq-last"), n(l[m]) || l.jQ.addClass("mq-first"), !n(p[1]))
                                                                            if (p[1] instanceof ae) {
                                                                                var g = p[1];
                                                                                (g.siblingCreated = g.siblingDeleted = function() {
                                                                                    g.jQ.toggleClass("mq-after-operator-name", !(g[1] instanceof ge))
                                                                                })()
                                                                            } else p.jQ.toggleClass("mq-last", !(p[1] instanceof ge));
                                                                        a += c - 1, l = p;
                                                                        continue e
                                                                    }
                                                                }
                                                        }
                                                    }
                                                })),
                                                ke = {},
                                                Ce = S.p.autoOperatorNames = {
                                                    _maxLength: 9
                                                },
                                                Oe = {
                                                    limsup: 1,
                                                    liminf: 1,
                                                    projlim: 1,
                                                    injlim: 1
                                                };
                                            ! function() {
                                                for (var e = "arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" "), t = 0; t < e.length; t += 1) ke[e[t]] = Ce[e[t]] = 1;
                                                var n = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");
                                                for (t = 0; t < n.length; t += 1) ke[n[t]] = 1;
                                                var r = "sin cos tan sec cosec csc cotan cot ctg".split(" ");
                                                for (t = 0; t < r.length; t += 1) Ce[r[t]] = Ce["arc" + r[t]] = Ce[r[t] + "h"] = Ce["ar" + r[t] + "h"] = Ce["arc" + r[t] + "h"] = 1;
                                                var i = "gcf hcf lcm proj span".split(" ");
                                                for (t = 0; t < i.length; t += 1) Ce[i[t]] = 1
                                            }(), D.autoOperatorNames = function(e) {
                                                if (!/^[a-z]+(?: [a-z]+)*$/i.test(e)) throw '"' + e + '" not a space-delimited list of only letters';
                                                for (var t = e.split(" "), n = {}, r = 0, i = 0; i < t.length; i += 1) {
                                                    var s = t[i];
                                                    if (s.length < 2) throw '"' + s + '" not minimum length of 2';
                                                    n[s] = 1, r = o(r, s.length)
                                                }
                                                return n._maxLength = r, n
                                            };
                                            var je = h(W, (function(e, t) {
                                                e.init = function(e) {
                                                    this.ctrlSeq = e
                                                }, e.createLeftOf = function(e) {
                                                    for (var t = this.ctrlSeq, n = 0; n < t.length; n += 1) Te(t.charAt(n)).createLeftOf(e)
                                                }, e.parser = function() {
                                                    for (var e = this.ctrlSeq, t = V(), n = 0; n < e.length; n += 1) Te(e.charAt(n)).adopt(t, t.ends[1], 0);
                                                    return P.succeed(t.children())
                                                }
                                            }));
                                            for (var Se in Ce) Ce.hasOwnProperty(Se) && (q[Se] = je);
                                            q.operatorname = h($, (function(e) {
                                                e.createLeftOf = s, e.numBlocks = function() {
                                                    return 1
                                                }, e.parser = function() {
                                                    return F.block.map((function(e) {
                                                        return e.children()
                                                    }))
                                                }
                                            })), q.f = h(Te, (function(e, t) {
                                                e.init = function() {
                                                    W.p.init.call(this, this.letter = "f", '<var class="mq-f">f</var>')
                                                }, e.italicize = function(e) {
                                                    return this.jQ.html("f").toggleClass("mq-f", e), t.italicize.apply(this, arguments)
                                                }
                                            })), q[" "] = q.space = d(X, "\\ ", "&nbsp;"), q["'"] = q.prime = d(X, "'", "&prime;"), q["″"] = q.dprime = d(X, "″", "&Prime;"), q.backslash = d(X, "\\backslash ", "\\"), T["\\"] || (T["\\"] = q.backslash), q.$ = d(X, "\\$", "$");
                                            var De = h(W, (function(e, t) {
                                                e.init = function(e, n) {
                                                    t.init.call(this, e, '<span class="mq-nonSymbola">' + (n || e) + "</span>")
                                                }
                                            }));
                                            q["@"] = De, q["&"] = d(De, "\\&", "&amp;"), q["%"] = d(De, "\\%", "%"), q.alpha = q.beta = q.gamma = q.delta = q.zeta = q.eta = q.theta = q.iota = q.kappa = q.mu = q.nu = q.xi = q.rho = q.sigma = q.tau = q.chi = q.psi = q.omega = h(qe, (function(e, t) {
                                                e.init = function(e) {
                                                    t.init.call(this, "\\" + e + " ", "&" + e + ";")
                                                }
                                            })), q.phi = d(qe, "\\phi ", "&#981;"), q.phiv = q.varphi = d(qe, "\\varphi ", "&phi;"), q.epsilon = d(qe, "\\epsilon ", "&#1013;"), q.epsiv = q.varepsilon = d(qe, "\\varepsilon ", "&epsilon;"), q.piv = q.varpi = d(qe, "\\varpi ", "&piv;"), q.sigmaf = q.sigmav = q.varsigma = d(qe, "\\varsigma ", "&sigmaf;"), q.thetav = q.vartheta = q.thetasym = d(qe, "\\vartheta ", "&thetasym;"), q.upsilon = q.upsi = d(qe, "\\upsilon ", "&upsilon;"), q.gammad = q.Gammad = q.digamma = d(qe, "\\digamma ", "&#989;"), q.kappav = q.varkappa = d(qe, "\\varkappa ", "&#1008;"), q.rhov = q.varrho = d(qe, "\\varrho ", "&#1009;"), q.pi = q["π"] = d(De, "\\pi ", "&pi;"), q.lambda = d(De, "\\lambda ", "&lambda;"), q.Upsilon = q.Upsi = q.upsih = q.Upsih = d(W, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>'), q.Gamma = q.Delta = q.Theta = q.Lambda = q.Xi = q.Pi = q.Sigma = q.Phi = q.Psi = q.Omega = q.forall = h(X, (function(e, t) {
                                                e.init = function(e) {
                                                    t.init.call(this, "\\" + e + " ", "&" + e + ";")
                                                }
                                            }));
                                            var Ee = h($, (function(e) {
                                                e.init = function(e) {
                                                    this.latex = e
                                                }, e.createLeftOf = function(e) {
                                                    var t = F.parse(this.latex);
                                                    t.children().adopt(e.parent, e[m], e[1]), e[m] = t.ends[1], t.jQize().insertBefore(e.jQ), t.finalizeInsert(e.options, e), t.ends[1][1].siblingCreated && t.ends[1][1].siblingCreated(e.options, m), t.ends[m][m].siblingCreated && t.ends[m][m].siblingCreated(e.options, 1), e.parent.bubble("reflow")
                                                }, e.parser = function() {
                                                    var e = F.parse(this.latex).children();
                                                    return P.succeed(e)
                                                }
                                            }));
                                            q["¹"] = d(Ee, "^1"), q["²"] = d(Ee, "^2"), q["³"] = d(Ee, "^3"), q["¼"] = d(Ee, "\\frac14"), q["½"] = d(Ee, "\\frac12"), q["¾"] = d(Ee, "\\frac34");
                                            var Ae = h(U, (function(e) {
                                                e.init = X.prototype.init, e.contactWeld = e.siblingCreated = e.siblingDeleted = function(e, t) {
                                                    if (1 !== t) return this.jQ[0].className = function e(t) {
                                                        return t[m] ? t[m] instanceof U || /^[,;:\(\[]$/.test(t[m].ctrlSeq) ? "" : "mq-binary-operator" : t.parent && t.parent.parent && t.parent.parent.isStyleBlock() ? e(t.parent.parent) : ""
                                                    }(this), this
                                                }
                                            }));
                                            q["+"] = d(Ae, "+", "+"), q["–"] = q["-"] = d(Ae, "-", "&minus;"), q["±"] = q.pm = q.plusmn = q.plusminus = d(Ae, "\\pm ", "&plusmn;"), q.mp = q.mnplus = q.minusplus = d(Ae, "\\mp ", "&#8723;"), T["*"] = q.sdot = q.cdot = d(U, "\\cdot ", "&middot;", "*");
                                            var Le = h(U, (function(e, t) {
                                                    e.init = function(e, n) {
                                                        this.data = e, this.strict = n;
                                                        var r = n ? "Strict" : "";
                                                        t.init.call(this, e["ctrlSeq" + r], e["html" + r], e["text" + r])
                                                    }, e.swap = function(e) {
                                                        this.strict = e;
                                                        var t = e ? "Strict" : "";
                                                        this.ctrlSeq = this.data["ctrlSeq" + t], this.jQ.html(this.data["html" + t]), this.textTemplate = [this.data["text" + t]]
                                                    }, e.deleteTowards = function(e, n) {
                                                        if (e === m && !this.strict) return this.swap(!0), void this.bubble("reflow");
                                                        t.deleteTowards.apply(this, arguments)
                                                    }
                                                })),
                                                _e = {
                                                    ctrlSeq: "\\le ",
                                                    html: "&le;",
                                                    text: "≤",
                                                    ctrlSeqStrict: "<",
                                                    htmlStrict: "&lt;",
                                                    textStrict: "<"
                                                },
                                                Ne = {
                                                    ctrlSeq: "\\ge ",
                                                    html: "&ge;",
                                                    text: "≥",
                                                    ctrlSeqStrict: ">",
                                                    htmlStrict: "&gt;",
                                                    textStrict: ">"
                                                };
                                            q["<"] = q.lt = d(Le, _e, !0), q[">"] = q.gt = d(Le, Ne, !0), q["≤"] = q.le = q.leq = d(Le, _e, !1), q["≥"] = q.ge = q.geq = d(Le, Ne, !1);
                                            var Qe = h(U, (function(e, t) {
                                                e.init = function() {
                                                    t.init.call(this, "=", "=")
                                                }, e.createLeftOf = function(e) {
                                                    if (e[m] instanceof Le && e[m].strict) return e[m].swap(!1), void e[m].bubble("reflow");
                                                    t.createLeftOf.apply(this, arguments)
                                                }
                                            }));
                                            q["="] = Qe, q["×"] = q.times = d(U, "\\times ", "&times;", "[x]"), q["÷"] = q.div = q.divide = q.divides = d(U, "\\div ", "&divide;", "[/]"), T["~"] = q.sim = d(U, "\\sim ", "~", "~");
                                            var Re = R(1);
                                            for (var ze in Re) ! function(e, t) {
                                                "function" == typeof t ? (_[e] = function() {
                                                    return L(), t.apply(this, arguments)
                                                }, _[e].prototype = t.prototype) : _[e] = t
                                            }(ze, Re[ze])
                                        }(), e.exports = window.MathQuill
                                },
                                755: function(e, t) {
                                    var n;
                                    ! function(t, n) {
                                        "use strict";
                                        "object" == l(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
                                            if (!e.document) throw new Error("jQuery requires a window with a document");
                                            return n(e)
                                        } : n(t)
                                    }("undefined" != typeof window ? window : this, (function(r, i) {
                                        "use strict";
                                        var o = [],
                                            s = Object.getPrototypeOf,
                                            a = o.slice,
                                            c = o.flat ? function(e) {
                                                return o.flat.call(e)
                                            } : function(e) {
                                                return o.concat.apply([], e)
                                            },
                                            u = o.push,
                                            f = o.indexOf,
                                            d = {},
                                            p = d.toString,
                                            h = d.hasOwnProperty,
                                            m = h.toString,
                                            g = m.call(Object),
                                            v = {},
                                            b = function(e) {
                                                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                                            },
                                            y = function(e) {
                                                return null != e && e === e.window
                                            },
                                            x = r.document,
                                            w = {
                                                type: !0,
                                                src: !0,
                                                nonce: !0,
                                                noModule: !0
                                            };

                                        function q(e, t, n) {
                                            var r, i, o = (n = n || x).createElement("script");
                                            if (o.text = e, t)
                                                for (r in w)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                                            n.head.appendChild(o).parentNode.removeChild(o)
                                        }

                                        function T(e) {
                                            return null == e ? e + "" : "object" == l(e) || "function" == typeof e ? d[p.call(e)] || "object" : l(e)
                                        }
                                        var k = "3.6.1",
                                            C = function e(t, n) {
                                                return new e.fn.init(t, n)
                                            };

                                        function O(e) {
                                            var t = !!e && "length" in e && e.length,
                                                n = T(e);
                                            return !b(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                                        }
                                        C.fn = C.prototype = {
                                            jquery: k,
                                            constructor: C,
                                            length: 0,
                                            toArray: function() {
                                                return a.call(this)
                                            },
                                            get: function(e) {
                                                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                                            },
                                            pushStack: function(e) {
                                                var t = C.merge(this.constructor(), e);
                                                return t.prevObject = this, t
                                            },
                                            each: function(e) {
                                                return C.each(this, e)
                                            },
                                            map: function(e) {
                                                return this.pushStack(C.map(this, (function(t, n) {
                                                    return e.call(t, n, t)
                                                })))
                                            },
                                            slice: function() {
                                                return this.pushStack(a.apply(this, arguments))
                                            },
                                            first: function() {
                                                return this.eq(0)
                                            },
                                            last: function() {
                                                return this.eq(-1)
                                            },
                                            even: function() {
                                                return this.pushStack(C.grep(this, (function(e, t) {
                                                    return (t + 1) % 2
                                                })))
                                            },
                                            odd: function() {
                                                return this.pushStack(C.grep(this, (function(e, t) {
                                                    return t % 2
                                                })))
                                            },
                                            eq: function(e) {
                                                var t = this.length,
                                                    n = +e + (e < 0 ? t : 0);
                                                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                                            },
                                            end: function() {
                                                return this.prevObject || this.constructor()
                                            },
                                            push: u,
                                            sort: o.sort,
                                            splice: o.splice
                                        }, C.extend = C.fn.extend = function() {
                                            var e, t, n, r, i, o, s = arguments[0] || {},
                                                a = 1,
                                                c = arguments.length,
                                                u = !1;
                                            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == l(s) || b(s) || (s = {}), a === c && (s = this, a--); a < c; a++)
                                                if (null != (e = arguments[a]))
                                                    for (t in e) r = e[t], "__proto__" !== t && s !== r && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, s[t] = C.extend(u, o, r)) : void 0 !== r && (s[t] = r));
                                            return s
                                        }, C.extend({
                                            expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
                                            isReady: !0,
                                            error: function(e) {
                                                throw new Error(e)
                                            },
                                            noop: function() {},
                                            isPlainObject: function(e) {
                                                var t, n;
                                                return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof(n = h.call(t, "constructor") && t.constructor) || m.call(n) !== g))
                                            },
                                            isEmptyObject: function(e) {
                                                var t;
                                                for (t in e) return !1;
                                                return !0
                                            },
                                            globalEval: function(e, t, n) {
                                                q(e, {
                                                    nonce: t && t.nonce
                                                }, n)
                                            },
                                            each: function(e, t) {
                                                var n, r = 0;
                                                if (O(e))
                                                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                                                else
                                                    for (r in e)
                                                        if (!1 === t.call(e[r], r, e[r])) break;
                                                return e
                                            },
                                            makeArray: function(e, t) {
                                                var n = t || [];
                                                return null != e && (O(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                                            },
                                            inArray: function(e, t, n) {
                                                return null == t ? -1 : f.call(t, e, n)
                                            },
                                            merge: function(e, t) {
                                                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                                                return e.length = i, e
                                            },
                                            grep: function(e, t, n) {
                                                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
                                                return r
                                            },
                                            map: function(e, t, n) {
                                                var r, i, o = 0,
                                                    s = [];
                                                if (O(e))
                                                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                                                else
                                                    for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                                                return c(s)
                                            },
                                            guid: 1,
                                            support: v
                                        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                                            d["[object " + t + "]"] = t.toLowerCase()
                                        }));
                                        var j = function(e) {
                                            var t, n, r, i, o, s, a, l, c, u, f, d, p, h, m, g, v, b, y, x = "sizzle" + 1 * new Date,
                                                w = e.document,
                                                q = 0,
                                                T = 0,
                                                k = le(),
                                                C = le(),
                                                O = le(),
                                                j = le(),
                                                S = function(e, t) {
                                                    return e === t && (f = !0), 0
                                                },
                                                D = {}.hasOwnProperty,
                                                E = [],
                                                A = E.pop,
                                                L = E.push,
                                                _ = E.push,
                                                N = E.slice,
                                                Q = function(e, t) {
                                                    for (var n = 0, r = e.length; n < r; n++)
                                                        if (e[n] === t) return n;
                                                    return -1
                                                },
                                                R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                                z = "[\\x20\\t\\r\\n\\f]",
                                                M = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                                I = "\\[[\\x20\\t\\r\\n\\f]*(" + M + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + z + "*\\]",
                                                H = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                                                P = new RegExp(z + "+", "g"),
                                                F = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                                                B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                                                $ = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                                                W = new RegExp(z + "|>"),
                                                X = new RegExp(H),
                                                U = new RegExp("^" + M + "$"),
                                                V = {
                                                    ID: new RegExp("^#(" + M + ")"),
                                                    CLASS: new RegExp("^\\.(" + M + ")"),
                                                    TAG: new RegExp("^(" + M + "|[*])"),
                                                    ATTR: new RegExp("^" + I),
                                                    PSEUDO: new RegExp("^" + H),
                                                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                                    bool: new RegExp("^(?:" + R + ")$", "i"),
                                                    needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                                                },
                                                Y = /HTML$/i,
                                                G = /^(?:input|select|textarea|button)$/i,
                                                Z = /^h\d$/i,
                                                K = /^[^{]+\{\s*\[native \w/,
                                                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                                ee = /[+~]/,
                                                te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                                                ne = function(e, t) {
                                                    var n = "0x" + e.slice(1) - 65536;
                                                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                                                },
                                                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                                ie = function(e, t) {
                                                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                                                },
                                                oe = function() {
                                                    d()
                                                },
                                                se = xe((function(e) {
                                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                                                }), {
                                                    dir: "parentNode",
                                                    next: "legend"
                                                });
                                            try {
                                                _.apply(E = N.call(w.childNodes), w.childNodes), E[w.childNodes.length].nodeType
                                            } catch (e) {
                                                _ = {
                                                    apply: E.length ? function(e, t) {
                                                        L.apply(e, N.call(t))
                                                    } : function(e, t) {
                                                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                                                        e.length = n - 1
                                                    }
                                                }
                                            }

                                            function ae(e, t, r, i) {
                                                var o, a, c, u, f, h, v, b = t && t.ownerDocument,
                                                    w = t ? t.nodeType : 9;
                                                if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                                                if (!i && (d(t), t = t || p, m)) {
                                                    if (11 !== w && (f = J.exec(e)))
                                                        if (o = f[1]) {
                                                            if (9 === w) {
                                                                if (!(c = t.getElementById(o))) return r;
                                                                if (c.id === o) return r.push(c), r
                                                            } else if (b && (c = b.getElementById(o)) && y(t, c) && c.id === o) return r.push(c), r
                                                        } else {
                                                            if (f[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                                                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(o)), r
                                                        } if (n.qsa && !j[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                                        if (v = e, b = t, 1 === w && (W.test(e) || $.test(e))) {
                                                            for ((b = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = x)), a = (h = s(e)).length; a--;) h[a] = (u ? "#" + u : ":scope") + " " + ye(h[a]);
                                                            v = h.join(",")
                                                        }
                                                        try {
                                                            return _.apply(r, b.querySelectorAll(v)), r
                                                        } catch (t) {
                                                            j(e, !0)
                                                        } finally {
                                                            u === x && t.removeAttribute("id")
                                                        }
                                                    }
                                                }
                                                return l(e.replace(F, "$1"), t, r, i)
                                            }

                                            function le() {
                                                var e = [];
                                                return function t(n, i) {
                                                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                                                }
                                            }

                                            function ce(e) {
                                                return e[x] = !0, e
                                            }

                                            function ue(e) {
                                                var t = p.createElement("fieldset");
                                                try {
                                                    return !!e(t)
                                                } catch (e) {
                                                    return !1
                                                } finally {
                                                    t.parentNode && t.parentNode.removeChild(t), t = null
                                                }
                                            }

                                            function fe(e, t) {
                                                for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                                            }

                                            function de(e, t) {
                                                var n = t && e,
                                                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                                                if (r) return r;
                                                if (n)
                                                    for (; n = n.nextSibling;)
                                                        if (n === t) return -1;
                                                return e ? 1 : -1
                                            }

                                            function pe(e) {
                                                return function(t) {
                                                    return "input" === t.nodeName.toLowerCase() && t.type === e
                                                }
                                            }

                                            function he(e) {
                                                return function(t) {
                                                    var n = t.nodeName.toLowerCase();
                                                    return ("input" === n || "button" === n) && t.type === e
                                                }
                                            }

                                            function me(e) {
                                                return function(t) {
                                                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                                                }
                                            }

                                            function ge(e) {
                                                return ce((function(t) {
                                                    return t = +t, ce((function(n, r) {
                                                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                                                    }))
                                                }))
                                            }

                                            function ve(e) {
                                                return e && void 0 !== e.getElementsByTagName && e
                                            }
                                            for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                                                    var t = e && e.namespaceURI,
                                                        n = e && (e.ownerDocument || e).documentElement;
                                                    return !Y.test(t || n && n.nodeName || "HTML")
                                                }, d = ae.setDocument = function(e) {
                                                    var t, i, s = e ? e.ownerDocument || e : w;
                                                    return s != p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, m = !o(p), w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ue((function(e) {
                                                        return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                                    })), n.attributes = ue((function(e) {
                                                        return e.className = "i", !e.getAttribute("className")
                                                    })), n.getElementsByTagName = ue((function(e) {
                                                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                                                    })), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ue((function(e) {
                                                        return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                                                    })), n.getById ? (r.filter.ID = function(e) {
                                                        var t = e.replace(te, ne);
                                                        return function(e) {
                                                            return e.getAttribute("id") === t
                                                        }
                                                    }, r.find.ID = function(e, t) {
                                                        if (void 0 !== t.getElementById && m) {
                                                            var n = t.getElementById(e);
                                                            return n ? [n] : []
                                                        }
                                                    }) : (r.filter.ID = function(e) {
                                                        var t = e.replace(te, ne);
                                                        return function(e) {
                                                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                            return n && n.value === t
                                                        }
                                                    }, r.find.ID = function(e, t) {
                                                        if (void 0 !== t.getElementById && m) {
                                                            var n, r, i, o = t.getElementById(e);
                                                            if (o) {
                                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                                            }
                                                            return []
                                                        }
                                                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                                    } : function(e, t) {
                                                        var n, r = [],
                                                            i = 0,
                                                            o = t.getElementsByTagName(e);
                                                        if ("*" === e) {
                                                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                                            return r
                                                        }
                                                        return o
                                                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                                        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                                                    }, v = [], g = [], (n.qsa = K.test(p.querySelectorAll)) && (ue((function(e) {
                                                        var t;
                                                        h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                                                    })), ue((function(e) {
                                                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                        var t = p.createElement("input");
                                                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                                                    }))), (n.matchesSelector = K.test(b = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue((function(e) {
                                                        n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", H)
                                                    })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), y = t || K.test(h.contains) ? function(e, t) {
                                                        var n = 9 === e.nodeType ? e.documentElement : e,
                                                            r = t && t.parentNode;
                                                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                                                    } : function(e, t) {
                                                        if (t)
                                                            for (; t = t.parentNode;)
                                                                if (t === e) return !0;
                                                        return !1
                                                    }, S = t ? function(e, t) {
                                                        if (e === t) return f = !0, 0;
                                                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                                        return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && y(w, e) ? -1 : t == p || t.ownerDocument == w && y(w, t) ? 1 : u ? Q(u, e) - Q(u, t) : 0 : 4 & r ? -1 : 1)
                                                    } : function(e, t) {
                                                        if (e === t) return f = !0, 0;
                                                        var n, r = 0,
                                                            i = e.parentNode,
                                                            o = t.parentNode,
                                                            s = [e],
                                                            a = [t];
                                                        if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : u ? Q(u, e) - Q(u, t) : 0;
                                                        if (i === o) return de(e, t);
                                                        for (n = e; n = n.parentNode;) s.unshift(n);
                                                        for (n = t; n = n.parentNode;) a.unshift(n);
                                                        for (; s[r] === a[r];) r++;
                                                        return r ? de(s[r], a[r]) : s[r] == w ? -1 : a[r] == w ? 1 : 0
                                                    }, p) : p
                                                }, ae.matches = function(e, t) {
                                                    return ae(e, null, null, t)
                                                }, ae.matchesSelector = function(e, t) {
                                                    if (d(e), n.matchesSelector && m && !j[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                                                        var r = b.call(e, t);
                                                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                                                    } catch (e) {
                                                        j(t, !0)
                                                    }
                                                    return ae(t, p, null, [e]).length > 0
                                                }, ae.contains = function(e, t) {
                                                    return (e.ownerDocument || e) != p && d(e), y(e, t)
                                                }, ae.attr = function(e, t) {
                                                    (e.ownerDocument || e) != p && d(e);
                                                    var i = r.attrHandle[t.toLowerCase()],
                                                        o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                                                    return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                                                }, ae.escape = function(e) {
                                                    return (e + "").replace(re, ie)
                                                }, ae.error = function(e) {
                                                    throw new Error("Syntax error, unrecognized expression: " + e)
                                                }, ae.uniqueSort = function(e) {
                                                    var t, r = [],
                                                        i = 0,
                                                        o = 0;
                                                    if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), f) {
                                                        for (; t = e[o++];) t === e[o] && (i = r.push(o));
                                                        for (; i--;) e.splice(r[i], 1)
                                                    }
                                                    return u = null, e
                                                }, i = ae.getText = function(e) {
                                                    var t, n = "",
                                                        r = 0,
                                                        o = e.nodeType;
                                                    if (o) {
                                                        if (1 === o || 9 === o || 11 === o) {
                                                            if ("string" == typeof e.textContent) return e.textContent;
                                                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                                                        } else if (3 === o || 4 === o) return e.nodeValue
                                                    } else
                                                        for (; t = e[r++];) n += i(t);
                                                    return n
                                                }, (r = ae.selectors = {
                                                    cacheLength: 50,
                                                    createPseudo: ce,
                                                    match: V,
                                                    attrHandle: {},
                                                    find: {},
                                                    relative: {
                                                        ">": {
                                                            dir: "parentNode",
                                                            first: !0
                                                        },
                                                        " ": {
                                                            dir: "parentNode"
                                                        },
                                                        "+": {
                                                            dir: "previousSibling",
                                                            first: !0
                                                        },
                                                        "~": {
                                                            dir: "previousSibling"
                                                        }
                                                    },
                                                    preFilter: {
                                                        ATTR: function(e) {
                                                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                                        },
                                                        CHILD: function(e) {
                                                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                                                        },
                                                        PSEUDO: function(e) {
                                                            var t, n = !e[6] && e[2];
                                                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                                        }
                                                    },
                                                    filter: {
                                                        TAG: function(e) {
                                                            var t = e.replace(te, ne).toLowerCase();
                                                            return "*" === e ? function() {
                                                                return !0
                                                            } : function(e) {
                                                                return e.nodeName && e.nodeName.toLowerCase() === t
                                                            }
                                                        },
                                                        CLASS: function(e) {
                                                            var t = k[e + " "];
                                                            return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + z + "|$)")) && k(e, (function(e) {
                                                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                                            }))
                                                        },
                                                        ATTR: function(e, t, n) {
                                                            return function(r) {
                                                                var i = ae.attr(r, e);
                                                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(P, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                                            }
                                                        },
                                                        CHILD: function(e, t, n, r, i) {
                                                            var o = "nth" !== e.slice(0, 3),
                                                                s = "last" !== e.slice(-4),
                                                                a = "of-type" === t;
                                                            return 1 === r && 0 === i ? function(e) {
                                                                return !!e.parentNode
                                                            } : function(t, n, l) {
                                                                var c, u, f, d, p, h, m = o !== s ? "nextSibling" : "previousSibling",
                                                                    g = t.parentNode,
                                                                    v = a && t.nodeName.toLowerCase(),
                                                                    b = !l && !a,
                                                                    y = !1;
                                                                if (g) {
                                                                    if (o) {
                                                                        for (; m;) {
                                                                            for (d = t; d = d[m];)
                                                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                                            h = m = "only" === e && !h && "nextSibling"
                                                                        }
                                                                        return !0
                                                                    }
                                                                    if (h = [s ? g.firstChild : g.lastChild], s && b) {
                                                                        for (y = (p = (c = (u = (f = (d = g)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === q && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (y = p = 0) || h.pop();)
                                                                            if (1 === d.nodeType && ++y && d === t) {
                                                                                u[e] = [q, p, y];
                                                                                break
                                                                            }
                                                                    } else if (b && (y = p = (c = (u = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === q && c[1]), !1 === y)
                                                                        for (;
                                                                            (d = ++p && d && d[m] || (y = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (b && ((u = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [q, y]), d !== t)););
                                                                    return (y -= i) === r || y % r == 0 && y / r >= 0
                                                                }
                                                            }
                                                        },
                                                        PSEUDO: function(e, t) {
                                                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                                            return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                                                for (var r, o = i(e, t), s = o.length; s--;) e[r = Q(e, o[s])] = !(n[r] = o[s])
                                                            })) : function(e) {
                                                                return i(e, 0, n)
                                                            }) : i
                                                        }
                                                    },
                                                    pseudos: {
                                                        not: ce((function(e) {
                                                            var t = [],
                                                                n = [],
                                                                r = a(e.replace(F, "$1"));
                                                            return r[x] ? ce((function(e, t, n, i) {
                                                                for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                                                            })) : function(e, i, o) {
                                                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                                            }
                                                        })),
                                                        has: ce((function(e) {
                                                            return function(t) {
                                                                return ae(e, t).length > 0
                                                            }
                                                        })),
                                                        contains: ce((function(e) {
                                                            return e = e.replace(te, ne),
                                                                function(t) {
                                                                    return (t.textContent || i(t)).indexOf(e) > -1
                                                                }
                                                        })),
                                                        lang: ce((function(e) {
                                                            return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                                                function(t) {
                                                                    var n;
                                                                    do {
                                                                        if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                                                    return !1
                                                                }
                                                        })),
                                                        target: function(t) {
                                                            var n = e.location && e.location.hash;
                                                            return n && n.slice(1) === t.id
                                                        },
                                                        root: function(e) {
                                                            return e === h
                                                        },
                                                        focus: function(e) {
                                                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                                        },
                                                        enabled: me(!1),
                                                        disabled: me(!0),
                                                        checked: function(e) {
                                                            var t = e.nodeName.toLowerCase();
                                                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                                                        },
                                                        selected: function(e) {
                                                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                                        },
                                                        empty: function(e) {
                                                            for (e = e.firstChild; e; e = e.nextSibling)
                                                                if (e.nodeType < 6) return !1;
                                                            return !0
                                                        },
                                                        parent: function(e) {
                                                            return !r.pseudos.empty(e)
                                                        },
                                                        header: function(e) {
                                                            return Z.test(e.nodeName)
                                                        },
                                                        input: function(e) {
                                                            return G.test(e.nodeName)
                                                        },
                                                        button: function(e) {
                                                            var t = e.nodeName.toLowerCase();
                                                            return "input" === t && "button" === e.type || "button" === t
                                                        },
                                                        text: function(e) {
                                                            var t;
                                                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                                        },
                                                        first: ge((function() {
                                                            return [0]
                                                        })),
                                                        last: ge((function(e, t) {
                                                            return [t - 1]
                                                        })),
                                                        eq: ge((function(e, t, n) {
                                                            return [n < 0 ? n + t : n]
                                                        })),
                                                        even: ge((function(e, t) {
                                                            for (var n = 0; n < t; n += 2) e.push(n);
                                                            return e
                                                        })),
                                                        odd: ge((function(e, t) {
                                                            for (var n = 1; n < t; n += 2) e.push(n);
                                                            return e
                                                        })),
                                                        lt: ge((function(e, t, n) {
                                                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                                            return e
                                                        })),
                                                        gt: ge((function(e, t, n) {
                                                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                                            return e
                                                        }))
                                                    }
                                                }).pseudos.nth = r.pseudos.eq, {
                                                    radio: !0,
                                                    checkbox: !0,
                                                    file: !0,
                                                    password: !0,
                                                    image: !0
                                                }) r.pseudos[t] = pe(t);
                                            for (t in {
                                                    submit: !0,
                                                    reset: !0
                                                }) r.pseudos[t] = he(t);

                                            function be() {}

                                            function ye(e) {
                                                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                                                return r
                                            }

                                            function xe(e, t, n) {
                                                var r = t.dir,
                                                    i = t.next,
                                                    o = i || r,
                                                    s = n && "parentNode" === o,
                                                    a = T++;
                                                return t.first ? function(t, n, i) {
                                                    for (; t = t[r];)
                                                        if (1 === t.nodeType || s) return e(t, n, i);
                                                    return !1
                                                } : function(t, n, l) {
                                                    var c, u, f, d = [q, a];
                                                    if (l) {
                                                        for (; t = t[r];)
                                                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                                                    } else
                                                        for (; t = t[r];)
                                                            if (1 === t.nodeType || s)
                                                                if (u = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                                                else {
                                                                    if ((c = u[o]) && c[0] === q && c[1] === a) return d[2] = c[2];
                                                                    if (u[o] = d, d[2] = e(t, n, l)) return !0
                                                                } return !1
                                                }
                                            }

                                            function we(e) {
                                                return e.length > 1 ? function(t, n, r) {
                                                    for (var i = e.length; i--;)
                                                        if (!e[i](t, n, r)) return !1;
                                                    return !0
                                                } : e[0]
                                            }

                                            function qe(e, t, n, r, i) {
                                                for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
                                                return s
                                            }

                                            function Te(e, t, n, r, i, o) {
                                                return r && !r[x] && (r = Te(r)), i && !i[x] && (i = Te(i, o)), ce((function(o, s, a, l) {
                                                    var c, u, f, d = [],
                                                        p = [],
                                                        h = s.length,
                                                        m = o || function(e, t, n) {
                                                            for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                                                            return n
                                                        }(t || "*", a.nodeType ? [a] : a, []),
                                                        g = !e || !o && t ? m : qe(m, d, e, a, l),
                                                        v = n ? i || (o ? e : h || r) ? [] : s : g;
                                                    if (n && n(g, v, a, l), r)
                                                        for (c = qe(v, p), r(c, [], a, l), u = c.length; u--;)(f = c[u]) && (v[p[u]] = !(g[p[u]] = f));
                                                    if (o) {
                                                        if (i || e) {
                                                            if (i) {
                                                                for (c = [], u = v.length; u--;)(f = v[u]) && c.push(g[u] = f);
                                                                i(null, v = [], c, l)
                                                            }
                                                            for (u = v.length; u--;)(f = v[u]) && (c = i ? Q(o, f) : d[u]) > -1 && (o[c] = !(s[c] = f))
                                                        }
                                                    } else v = qe(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, l) : _.apply(s, v)
                                                }))
                                            }

                                            function ke(e) {
                                                for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, u = xe((function(e) {
                                                        return e === t
                                                    }), a, !0), f = xe((function(e) {
                                                        return Q(t, e) > -1
                                                    }), a, !0), d = [function(e, n, r) {
                                                        var i = !s && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
                                                        return t = null, i
                                                    }]; l < o; l++)
                                                    if (n = r.relative[e[l].type]) d = [xe(we(d), n)];
                                                    else {
                                                        if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                                                            for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                                                            return Te(l > 1 && we(d), l > 1 && ye(e.slice(0, l - 1).concat({
                                                                value: " " === e[l - 2].type ? "*" : ""
                                                            })).replace(F, "$1"), n, l < i && ke(e.slice(l, i)), i < o && ke(e = e.slice(i)), i < o && ye(e))
                                                        }
                                                        d.push(n)
                                                    } return we(d)
                                            }
                                            return be.prototype = r.filters = r.pseudos, r.setFilters = new be, s = ae.tokenize = function(e, t) {
                                                var n, i, o, s, a, l, c, u = C[e + " "];
                                                if (u) return t ? 0 : u.slice(0);
                                                for (a = e, l = [], c = r.preFilter; a;) {
                                                    for (s in n && !(i = B.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), o.push({
                                                            value: n,
                                                            type: i[0].replace(F, " ")
                                                        }), a = a.slice(n.length)), r.filter) !(i = V[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
                                                        value: n,
                                                        type: s,
                                                        matches: i
                                                    }), a = a.slice(n.length));
                                                    if (!n) break
                                                }
                                                return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
                                            }, a = ae.compile = function(e, t) {
                                                var n, i = [],
                                                    o = [],
                                                    a = O[e + " "];
                                                if (!a) {
                                                    for (t || (t = s(e)), n = t.length; n--;)(a = ke(t[n]))[x] ? i.push(a) : o.push(a);
                                                    (a = O(e, function(e, t) {
                                                        var n = t.length > 0,
                                                            i = e.length > 0,
                                                            o = function(o, s, a, l, u) {
                                                                var f, h, g, v = 0,
                                                                    b = "0",
                                                                    y = o && [],
                                                                    x = [],
                                                                    w = c,
                                                                    T = o || i && r.find.TAG("*", u),
                                                                    k = q += null == w ? 1 : Math.random() || .1,
                                                                    C = T.length;
                                                                for (u && (c = s == p || s || u); b !== C && null != (f = T[b]); b++) {
                                                                    if (i && f) {
                                                                        for (h = 0, s || f.ownerDocument == p || (d(f), a = !m); g = e[h++];)
                                                                            if (g(f, s || p, a)) {
                                                                                l.push(f);
                                                                                break
                                                                            } u && (q = k)
                                                                    }
                                                                    n && ((f = !g && f) && v--, o && y.push(f))
                                                                }
                                                                if (v += b, n && b !== v) {
                                                                    for (h = 0; g = t[h++];) g(y, x, s, a);
                                                                    if (o) {
                                                                        if (v > 0)
                                                                            for (; b--;) y[b] || x[b] || (x[b] = A.call(l));
                                                                        x = qe(x)
                                                                    }
                                                                    _.apply(l, x), u && !o && x.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                                                }
                                                                return u && (q = k, c = w), y
                                                            };
                                                        return n ? ce(o) : o
                                                    }(o, i))).selector = e
                                                }
                                                return a
                                            }, l = ae.select = function(e, t, n, i) {
                                                var o, l, c, u, f, d = "function" == typeof e && e,
                                                    p = !i && s(e = d.selector || e);
                                                if (n = n || [], 1 === p.length) {
                                                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
                                                        if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                                        d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                                                    }
                                                    for (o = V.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);)
                                                        if ((f = r.find[u]) && (i = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                                            if (l.splice(o, 1), !(e = i.length && ye(l))) return _.apply(n, i), n;
                                                            break
                                                        }
                                                }
                                                return (d || a(e, p))(i, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                                            }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ue((function(e) {
                                                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                                            })), ue((function(e) {
                                                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                                            })) || fe("type|href|height|width", (function(e, t, n) {
                                                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                                            })), n.attributes && ue((function(e) {
                                                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                                            })) || fe("value", (function(e, t, n) {
                                                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                                            })), ue((function(e) {
                                                return null == e.getAttribute("disabled")
                                            })) || fe(R, (function(e, t, n) {
                                                var r;
                                                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                                            })), ae
                                        }(r);
                                        C.find = j, (C.expr = j.selectors)[":"] = C.expr.pseudos, C.uniqueSort = C.unique = j.uniqueSort, C.text = j.getText, C.isXMLDoc = j.isXML, C.contains = j.contains, C.escapeSelector = j.escape;
                                        var S = function(e, t, n) {
                                                for (var r = [], i = void 0 !== n;
                                                    (e = e[t]) && 9 !== e.nodeType;)
                                                    if (1 === e.nodeType) {
                                                        if (i && C(e).is(n)) break;
                                                        r.push(e)
                                                    } return r
                                            },
                                            D = function(e, t) {
                                                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                                                return n
                                            },
                                            E = C.expr.match.needsContext;

                                        function A(e, t) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                                        }
                                        var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                                        function _(e, t, n) {
                                            return b(t) ? C.grep(e, (function(e, r) {
                                                return !!t.call(e, r, e) !== n
                                            })) : t.nodeType ? C.grep(e, (function(e) {
                                                return e === t !== n
                                            })) : "string" != typeof t ? C.grep(e, (function(e) {
                                                return f.call(t, e) > -1 !== n
                                            })) : C.filter(t, e, n)
                                        }
                                        C.filter = function(e, t, n) {
                                            var r = t[0];
                                            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                                                return 1 === e.nodeType
                                            })))
                                        }, C.fn.extend({
                                            find: function(e) {
                                                var t, n, r = this.length,
                                                    i = this;
                                                if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                                                    for (t = 0; t < r; t++)
                                                        if (C.contains(i[t], this)) return !0
                                                })));
                                                for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                                                return r > 1 ? C.uniqueSort(n) : n
                                            },
                                            filter: function(e) {
                                                return this.pushStack(_(this, e || [], !1))
                                            },
                                            not: function(e) {
                                                return this.pushStack(_(this, e || [], !0))
                                            },
                                            is: function(e) {
                                                return !!_(this, "string" == typeof e && E.test(e) ? C(e) : e || [], !1).length
                                            }
                                        });
                                        var N, Q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                                        (C.fn.init = function(e, t, n) {
                                            var r, i;
                                            if (!e) return this;
                                            if (n = n || N, "string" == typeof e) {
                                                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                                                if (r[1]) {
                                                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), L.test(r[1]) && C.isPlainObject(t))
                                                        for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                                    return this
                                                }
                                                return (i = x.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                                            }
                                            return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
                                        }).prototype = C.fn, N = C(x);
                                        var R = /^(?:parents|prev(?:Until|All))/,
                                            z = {
                                                children: !0,
                                                contents: !0,
                                                next: !0,
                                                prev: !0
                                            };

                                        function M(e, t) {
                                            for (;
                                                (e = e[t]) && 1 !== e.nodeType;);
                                            return e
                                        }
                                        C.fn.extend({
                                            has: function(e) {
                                                var t = C(e, this),
                                                    n = t.length;
                                                return this.filter((function() {
                                                    for (var e = 0; e < n; e++)
                                                        if (C.contains(this, t[e])) return !0
                                                }))
                                            },
                                            closest: function(e, t) {
                                                var n, r = 0,
                                                    i = this.length,
                                                    o = [],
                                                    s = "string" != typeof e && C(e);
                                                if (!E.test(e))
                                                    for (; r < i; r++)
                                                        for (n = this[r]; n && n !== t; n = n.parentNode)
                                                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                                                o.push(n);
                                                                break
                                                            } return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                                            },
                                            index: function(e) {
                                                return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                                            },
                                            add: function(e, t) {
                                                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                                            },
                                            addBack: function(e) {
                                                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                                            }
                                        }), C.each({
                                            parent: function(e) {
                                                var t = e.parentNode;
                                                return t && 11 !== t.nodeType ? t : null
                                            },
                                            parents: function(e) {
                                                return S(e, "parentNode")
                                            },
                                            parentsUntil: function(e, t, n) {
                                                return S(e, "parentNode", n)
                                            },
                                            next: function(e) {
                                                return M(e, "nextSibling")
                                            },
                                            prev: function(e) {
                                                return M(e, "previousSibling")
                                            },
                                            nextAll: function(e) {
                                                return S(e, "nextSibling")
                                            },
                                            prevAll: function(e) {
                                                return S(e, "previousSibling")
                                            },
                                            nextUntil: function(e, t, n) {
                                                return S(e, "nextSibling", n)
                                            },
                                            prevUntil: function(e, t, n) {
                                                return S(e, "previousSibling", n)
                                            },
                                            siblings: function(e) {
                                                return D((e.parentNode || {}).firstChild, e)
                                            },
                                            children: function(e) {
                                                return D(e.firstChild)
                                            },
                                            contents: function(e) {
                                                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                                            }
                                        }, (function(e, t) {
                                            C.fn[e] = function(n, r) {
                                                var i = C.map(this, t, n);
                                                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (z[e] || C.uniqueSort(i), R.test(e) && i.reverse()), this.pushStack(i)
                                            }
                                        }));
                                        var I = /[^\x20\t\r\n\f]+/g;

                                        function H(e) {
                                            return e
                                        }

                                        function P(e) {
                                            throw e
                                        }

                                        function F(e, t, n, r) {
                                            var i;
                                            try {
                                                e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                                            } catch (e) {
                                                n.apply(void 0, [e])
                                            }
                                        }
                                        C.Callbacks = function(e) {
                                            e = "string" == typeof e ? function(e) {
                                                var t = {};
                                                return C.each(e.match(I) || [], (function(e, n) {
                                                    t[n] = !0
                                                })), t
                                            }(e) : C.extend({}, e);
                                            var t, n, r, i, o = [],
                                                s = [],
                                                a = -1,
                                                l = function() {
                                                    for (i = i || e.once, r = t = !0; s.length; a = -1)
                                                        for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                                                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                                                },
                                                c = {
                                                    add: function() {
                                                        return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                                                            C.each(n, (function(n, r) {
                                                                b(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                                                            }))
                                                        }(arguments), n && !t && l()), this
                                                    },
                                                    remove: function() {
                                                        return C.each(arguments, (function(e, t) {
                                                            for (var n;
                                                                (n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                                                        })), this
                                                    },
                                                    has: function(e) {
                                                        return e ? C.inArray(e, o) > -1 : o.length > 0
                                                    },
                                                    empty: function() {
                                                        return o && (o = []), this
                                                    },
                                                    disable: function() {
                                                        return i = s = [], o = n = "", this
                                                    },
                                                    disabled: function() {
                                                        return !o
                                                    },
                                                    lock: function() {
                                                        return i = s = [], n || t || (o = n = ""), this
                                                    },
                                                    locked: function() {
                                                        return !!i
                                                    },
                                                    fireWith: function(e, n) {
                                                        return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                                                    },
                                                    fire: function() {
                                                        return c.fireWith(this, arguments), this
                                                    },
                                                    fired: function() {
                                                        return !!r
                                                    }
                                                };
                                            return c
                                        }, C.extend({
                                            Deferred: function(e) {
                                                var t = [
                                                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                                                    ],
                                                    n = "pending",
                                                    i = {
                                                        state: function() {
                                                            return n
                                                        },
                                                        always: function() {
                                                            return o.done(arguments).fail(arguments), this
                                                        },
                                                        catch: function(e) {
                                                            return i.then(null, e)
                                                        },
                                                        pipe: function() {
                                                            var e = arguments;
                                                            return C.Deferred((function(n) {
                                                                C.each(t, (function(t, r) {
                                                                    var i = b(e[r[4]]) && e[r[4]];
                                                                    o[r[1]]((function() {
                                                                        var e = i && i.apply(this, arguments);
                                                                        e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                                                    }))
                                                                })), e = null
                                                            })).promise()
                                                        },
                                                        then: function(e, n, i) {
                                                            var o = 0;

                                                            function s(e, t, n, i) {
                                                                return function() {
                                                                    var a = this,
                                                                        c = arguments,
                                                                        u = function() {
                                                                            var r, u;
                                                                            if (!(e < o)) {
                                                                                if ((r = n.apply(a, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                                                u = r && ("object" == l(r) || "function" == typeof r) && r.then, b(u) ? i ? u.call(r, s(o, t, H, i), s(o, t, P, i)) : (o++, u.call(r, s(o, t, H, i), s(o, t, P, i), s(o, t, H, t.notifyWith))) : (n !== H && (a = void 0, c = [r]), (i || t.resolveWith)(a, c))
                                                                            }
                                                                        },
                                                                        f = i ? u : function() {
                                                                            try {
                                                                                u()
                                                                            } catch (r) {
                                                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(r, f.stackTrace), e + 1 >= o && (n !== P && (a = void 0, c = [r]), t.rejectWith(a, c))
                                                                            }
                                                                        };
                                                                    e ? f() : (C.Deferred.getStackHook && (f.stackTrace = C.Deferred.getStackHook()), r.setTimeout(f))
                                                                }
                                                            }
                                                            return C.Deferred((function(r) {
                                                                t[0][3].add(s(0, r, b(i) ? i : H, r.notifyWith)), t[1][3].add(s(0, r, b(e) ? e : H)), t[2][3].add(s(0, r, b(n) ? n : P))
                                                            })).promise()
                                                        },
                                                        promise: function(e) {
                                                            return null != e ? C.extend(e, i) : i
                                                        }
                                                    },
                                                    o = {};
                                                return C.each(t, (function(e, r) {
                                                    var s = r[2],
                                                        a = r[5];
                                                    i[r[1]] = s.add, a && s.add((function() {
                                                        n = a
                                                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(r[3].fire), o[r[0]] = function() {
                                                        return o[r[0] + "With"](this === o ? void 0 : this, arguments), this
                                                    }, o[r[0] + "With"] = s.fireWith
                                                })), i.promise(o), e && e.call(o, o), o
                                            },
                                            when: function(e) {
                                                var t = arguments.length,
                                                    n = t,
                                                    r = Array(n),
                                                    i = a.call(arguments),
                                                    o = C.Deferred(),
                                                    s = function(e) {
                                                        return function(n) {
                                                            r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i)
                                                        }
                                                    };
                                                if (t <= 1 && (F(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || b(i[n] && i[n].then))) return o.then();
                                                for (; n--;) F(i[n], s(n), o.reject);
                                                return o.promise()
                                            }
                                        });
                                        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                                        C.Deferred.exceptionHook = function(e, t) {
                                            r.console && r.console.warn && e && B.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                                        }, C.readyException = function(e) {
                                            r.setTimeout((function() {
                                                throw e
                                            }))
                                        };
                                        var $ = C.Deferred();

                                        function W() {
                                            x.removeEventListener("DOMContentLoaded", W), r.removeEventListener("load", W), C.ready()
                                        }
                                        C.fn.ready = function(e) {
                                            return $.then(e).catch((function(e) {
                                                C.readyException(e)
                                            })), this
                                        }, C.extend({
                                            isReady: !1,
                                            readyWait: 1,
                                            ready: function(e) {
                                                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || $.resolveWith(x, [C]))
                                            }
                                        }), C.ready.then = $.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? r.setTimeout(C.ready) : (x.addEventListener("DOMContentLoaded", W), r.addEventListener("load", W));
                                        var X = function e(t, n, r, i, o, s, a) {
                                                var l = 0,
                                                    c = t.length,
                                                    u = null == r;
                                                if ("object" === T(r))
                                                    for (l in o = !0, r) e(t, n, l, r[l], !0, s, a);
                                                else if (void 0 !== i && (o = !0, b(i) || (a = !0), u && (a ? (n.call(t, i), n = null) : (u = n, n = function(e, t, n) {
                                                        return u.call(C(e), n)
                                                    })), n))
                                                    for (; l < c; l++) n(t[l], r, a ? i : i.call(t[l], l, n(t[l], r)));
                                                return o ? t : u ? n.call(t) : c ? n(t[0], r) : s
                                            },
                                            U = /^-ms-/,
                                            V = /-([a-z])/g;

                                        function Y(e, t) {
                                            return t.toUpperCase()
                                        }

                                        function G(e) {
                                            return e.replace(U, "ms-").replace(V, Y)
                                        }
                                        var Z = function(e) {
                                            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                                        };

                                        function K() {
                                            this.expando = C.expando + K.uid++
                                        }
                                        K.uid = 1, K.prototype = {
                                            cache: function(e) {
                                                var t = e[this.expando];
                                                return t || (t = {}, Z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                                    value: t,
                                                    configurable: !0
                                                }))), t
                                            },
                                            set: function(e, t, n) {
                                                var r, i = this.cache(e);
                                                if ("string" == typeof t) i[G(t)] = n;
                                                else
                                                    for (r in t) i[G(r)] = t[r];
                                                return i
                                            },
                                            get: function(e, t) {
                                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                                            },
                                            access: function(e, t, n) {
                                                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                                            },
                                            remove: function(e, t) {
                                                var n, r = e[this.expando];
                                                if (void 0 !== r) {
                                                    if (void 0 !== t) {
                                                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(I) || []).length;
                                                        for (; n--;) delete r[t[n]]
                                                    }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                                                }
                                            },
                                            hasData: function(e) {
                                                var t = e[this.expando];
                                                return void 0 !== t && !C.isEmptyObject(t)
                                            }
                                        };
                                        var J = new K,
                                            ee = new K,
                                            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                                            ne = /[A-Z]/g;

                                        function re(e, t, n) {
                                            var r;
                                            if (void 0 === n && 1 === e.nodeType)
                                                if (r = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                                                    try {
                                                        n = function(e) {
                                                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : te.test(e) ? JSON.parse(e) : e)
                                                        }(n)
                                                    } catch (e) {}
                                                    ee.set(e, t, n)
                                                } else n = void 0;
                                            return n
                                        }
                                        C.extend({
                                            hasData: function(e) {
                                                return ee.hasData(e) || J.hasData(e)
                                            },
                                            data: function(e, t, n) {
                                                return ee.access(e, t, n)
                                            },
                                            removeData: function(e, t) {
                                                ee.remove(e, t)
                                            },
                                            _data: function(e, t, n) {
                                                return J.access(e, t, n)
                                            },
                                            _removeData: function(e, t) {
                                                J.remove(e, t)
                                            }
                                        }), C.fn.extend({
                                            data: function(e, t) {
                                                var n, r, i, o = this[0],
                                                    s = o && o.attributes;
                                                if (void 0 === e) {
                                                    if (this.length && (i = ee.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                                                        for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = G(r.slice(5)), re(o, r, i[r]));
                                                        J.set(o, "hasDataAttrs", !0)
                                                    }
                                                    return i
                                                }
                                                return "object" == l(e) ? this.each((function() {
                                                    ee.set(this, e)
                                                })) : X(this, (function(t) {
                                                    var n;
                                                    if (o && void 0 === t) return void 0 !== (n = ee.get(o, e)) || void 0 !== (n = re(o, e)) ? n : void 0;
                                                    this.each((function() {
                                                        ee.set(this, e, t)
                                                    }))
                                                }), null, t, arguments.length > 1, null, !0)
                                            },
                                            removeData: function(e) {
                                                return this.each((function() {
                                                    ee.remove(this, e)
                                                }))
                                            }
                                        }), C.extend({
                                            queue: function(e, t, n) {
                                                var r;
                                                if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || []
                                            },
                                            dequeue: function(e, t) {
                                                var n = C.queue(e, t = t || "fx"),
                                                    r = n.length,
                                                    i = n.shift(),
                                                    o = C._queueHooks(e, t);
                                                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                                                    C.dequeue(e, t)
                                                }), o)), !r && o && o.empty.fire()
                                            },
                                            _queueHooks: function(e, t) {
                                                var n = t + "queueHooks";
                                                return J.get(e, n) || J.access(e, n, {
                                                    empty: C.Callbacks("once memory").add((function() {
                                                        J.remove(e, [t + "queue", n])
                                                    }))
                                                })
                                            }
                                        }), C.fn.extend({
                                            queue: function(e, t) {
                                                var n = 2;
                                                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                                    var n = C.queue(this, e, t);
                                                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                                                }))
                                            },
                                            dequeue: function(e) {
                                                return this.each((function() {
                                                    C.dequeue(this, e)
                                                }))
                                            },
                                            clearQueue: function(e) {
                                                return this.queue(e || "fx", [])
                                            },
                                            promise: function(e, t) {
                                                var n, r = 1,
                                                    i = C.Deferred(),
                                                    o = this,
                                                    s = this.length,
                                                    a = function() {
                                                        --r || i.resolveWith(o, [o])
                                                    };
                                                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = J.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                                                return a(), i.promise(t)
                                            }
                                        });
                                        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                                            oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                                            se = ["Top", "Right", "Bottom", "Left"],
                                            ae = x.documentElement,
                                            le = function(e) {
                                                return C.contains(e.ownerDocument, e)
                                            },
                                            ce = {
                                                composed: !0
                                            };
                                        ae.getRootNode && (le = function(e) {
                                            return C.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument
                                        });
                                        var ue = function(e, t) {
                                            return "none" === (e = t || e).style.display || "" === e.style.display && le(e) && "none" === C.css(e, "display")
                                        };

                                        function fe(e, t, n, r) {
                                            var i, o, s = 20,
                                                a = r ? function() {
                                                    return r.cur()
                                                } : function() {
                                                    return C.css(e, t, "")
                                                },
                                                l = a(),
                                                c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                                                u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && oe.exec(C.css(e, t));
                                            if (u && u[3] !== c) {
                                                for (l /= 2, c = c || u[3], u = +l || 1; s--;) C.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                                                C.style(e, t, (u *= 2) + c), n = n || []
                                            }
                                            return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
                                        }
                                        var de = {};

                                        function pe(e) {
                                            var t, n = e.ownerDocument,
                                                r = e.nodeName,
                                                i = de[r];
                                            return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), de[r] = i, i)
                                        }

                                        function he(e, t) {
                                            for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ue(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
                                            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
                                            return e
                                        }
                                        C.fn.extend({
                                            show: function() {
                                                return he(this, !0)
                                            },
                                            hide: function() {
                                                return he(this)
                                            },
                                            toggle: function(e) {
                                                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                                    ue(this) ? C(this).show() : C(this).hide()
                                                }))
                                            }
                                        });
                                        var me, ge, ve = /^(?:checkbox|radio)$/i,
                                            be = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                                            ye = /^$|^module$|\/(?:java|ecma)script/i;
                                        me = x.createDocumentFragment().appendChild(x.createElement("div")), (ge = x.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), v.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue, me.innerHTML = "<option></option>", v.option = !!me.lastChild;
                                        var xe = {
                                            thead: [1, "<table>", "</table>"],
                                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                                            tr: [2, "<table><tbody>", "</tbody></table>"],
                                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                                            _default: [0, "", ""]
                                        };

                                        function we(e, t) {
                                            var n;
                                            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n
                                        }

                                        function qe(e, t) {
                                            for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
                                        }
                                        xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead, xe.th = xe.td, v.option || (xe.optgroup = xe.option = [1, "<select multiple='multiple'>", "</select>"]);
                                        var Te = /<|&#?\w+;/;

                                        function ke(e, t, n, r, i) {
                                            for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                                                if ((o = e[p]) || 0 === o)
                                                    if ("object" === T(o)) C.merge(d, o.nodeType ? [o] : o);
                                                    else if (Te.test(o)) {
                                                for (s = s || f.appendChild(t.createElement("div")), a = (be.exec(o) || ["", ""])[1].toLowerCase(), l = xe[a] || xe._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                                                C.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
                                            } else d.push(t.createTextNode(o));
                                            for (f.textContent = "", p = 0; o = d[p++];)
                                                if (r && C.inArray(o, r) > -1) i && i.push(o);
                                                else if (c = le(o), s = we(f.appendChild(o), "script"), c && qe(s), n)
                                                for (u = 0; o = s[u++];) ye.test(o.type || "") && n.push(o);
                                            return f
                                        }
                                        var Ce = /^([^.]*)(?:\.(.+)|)/;

                                        function Oe() {
                                            return !0
                                        }

                                        function je() {
                                            return !1
                                        }

                                        function Se(e, t) {
                                            return e === function() {
                                                try {
                                                    return x.activeElement
                                                } catch (e) {}
                                            }() == ("focus" === t)
                                        }

                                        function De(e, t, n, r, i, o) {
                                            var s, a;
                                            if ("object" == l(t)) {
                                                for (a in "string" != typeof n && (r = r || n, n = void 0), t) De(e, a, n, r, t[a], o);
                                                return e
                                            }
                                            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = je;
                                            else if (!i) return e;
                                            return 1 === o && (s = i, (i = function(e) {
                                                return C().off(e), s.apply(this, arguments)
                                            }).guid = s.guid || (s.guid = C.guid++)), e.each((function() {
                                                C.event.add(this, t, i, r, n)
                                            }))
                                        }

                                        function Ee(e, t, n) {
                                            n ? (J.set(e, t, !1), C.event.add(e, t, {
                                                namespace: !1,
                                                handler: function(e) {
                                                    var r, i, o = J.get(this, t);
                                                    if (1 & e.isTrigger && this[t]) {
                                                        if (o.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                                                        else if (o = a.call(arguments), J.set(this, t, o), r = n(this, t), this[t](), o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                                                    } else o.length && (J.set(this, t, {
                                                        value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                                                    }), e.stopImmediatePropagation())
                                                }
                                            })) : void 0 === J.get(e, t) && C.event.add(e, t, Oe)
                                        }
                                        C.event = {
                                            global: {},
                                            add: function(e, t, n, r, i) {
                                                var o, s, a, l, c, u, f, d, p, h, m, g = J.get(e);
                                                if (Z(e))
                                                    for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(ae, i), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function(t) {
                                                            return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                                                        }), c = (t = (t || "").match(I) || [""]).length; c--;) p = m = (a = Ce.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, u = C.extend({
                                                        type: p,
                                                        origType: m,
                                                        data: r,
                                                        handler: n,
                                                        guid: n.guid,
                                                        selector: i,
                                                        needsContext: i && C.expr.match.needsContext.test(i),
                                                        namespace: h.join(".")
                                                    }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, u) : d.push(u), C.event.global[p] = !0)
                                            },
                                            remove: function(e, t, n, r, i) {
                                                var o, s, a, l, c, u, f, d, p, h, m, g = J.hasData(e) && J.get(e);
                                                if (g && (l = g.events)) {
                                                    for (c = (t = (t || "").match(I) || [""]).length; c--;)
                                                        if (p = m = (a = Ce.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                                                            for (f = C.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !i && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                                                            s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete l[p])
                                                        } else
                                                            for (p in l) C.event.remove(e, p + t[c], n, r, !0);
                                                    C.isEmptyObject(l) && J.remove(e, "handle events")
                                                }
                                            },
                                            dispatch: function(e) {
                                                var t, n, r, i, o, s, a = new Array(arguments.length),
                                                    l = C.event.fix(e),
                                                    c = (J.get(this, "events") || Object.create(null))[l.type] || [],
                                                    u = C.event.special[l.type] || {};
                                                for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                                                if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                                                    for (s = C.event.handlers.call(this, l, c), t = 0;
                                                        (i = s[t++]) && !l.isPropagationStopped();)
                                                        for (l.currentTarget = i.elem, n = 0;
                                                            (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                                                    return u.postDispatch && u.postDispatch.call(this, l), l.result
                                                }
                                            },
                                            handlers: function(e, t) {
                                                var n, r, i, o, s, a = [],
                                                    l = t.delegateCount,
                                                    c = e.target;
                                                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                                                    for (; c !== this; c = c.parentNode || this)
                                                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                                            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? C(i, this).index(c) > -1 : C.find(i, this, null, [c]).length), s[i] && o.push(r);
                                                            o.length && a.push({
                                                                elem: c,
                                                                handlers: o
                                                            })
                                                        } return c = this, l < t.length && a.push({
                                                    elem: c,
                                                    handlers: t.slice(l)
                                                }), a
                                            },
                                            addProp: function(e, t) {
                                                Object.defineProperty(C.Event.prototype, e, {
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    get: b(t) ? function() {
                                                        if (this.originalEvent) return t(this.originalEvent)
                                                    } : function() {
                                                        if (this.originalEvent) return this.originalEvent[e]
                                                    },
                                                    set: function(t) {
                                                        Object.defineProperty(this, e, {
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                            value: t
                                                        })
                                                    }
                                                })
                                            },
                                            fix: function(e) {
                                                return e[C.expando] ? e : new C.Event(e)
                                            },
                                            special: {
                                                load: {
                                                    noBubble: !0
                                                },
                                                click: {
                                                    setup: function(e) {
                                                        var t = this || e;
                                                        return ve.test(t.type) && t.click && A(t, "input") && Ee(t, "click", Oe), !1
                                                    },
                                                    trigger: function(e) {
                                                        var t = this || e;
                                                        return ve.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
                                                    },
                                                    _default: function(e) {
                                                        var t = e.target;
                                                        return ve.test(t.type) && t.click && A(t, "input") && J.get(t, "click") || A(t, "a")
                                                    }
                                                },
                                                beforeunload: {
                                                    postDispatch: function(e) {
                                                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                                    }
                                                }
                                            }
                                        }, C.removeEvent = function(e, t, n) {
                                            e.removeEventListener && e.removeEventListener(t, n)
                                        }, (C.Event = function(e, t) {
                                            if (!(this instanceof C.Event)) return new C.Event(e, t);
                                            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Oe : je, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
                                        }).prototype = {
                                            constructor: C.Event,
                                            isDefaultPrevented: je,
                                            isPropagationStopped: je,
                                            isImmediatePropagationStopped: je,
                                            isSimulated: !1,
                                            preventDefault: function() {
                                                var e = this.originalEvent;
                                                this.isDefaultPrevented = Oe, e && !this.isSimulated && e.preventDefault()
                                            },
                                            stopPropagation: function() {
                                                var e = this.originalEvent;
                                                this.isPropagationStopped = Oe, e && !this.isSimulated && e.stopPropagation()
                                            },
                                            stopImmediatePropagation: function() {
                                                var e = this.originalEvent;
                                                this.isImmediatePropagationStopped = Oe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                                            }
                                        }, C.each({
                                            altKey: !0,
                                            bubbles: !0,
                                            cancelable: !0,
                                            changedTouches: !0,
                                            ctrlKey: !0,
                                            detail: !0,
                                            eventPhase: !0,
                                            metaKey: !0,
                                            pageX: !0,
                                            pageY: !0,
                                            shiftKey: !0,
                                            view: !0,
                                            char: !0,
                                            code: !0,
                                            charCode: !0,
                                            key: !0,
                                            keyCode: !0,
                                            button: !0,
                                            buttons: !0,
                                            clientX: !0,
                                            clientY: !0,
                                            offsetX: !0,
                                            offsetY: !0,
                                            pointerId: !0,
                                            pointerType: !0,
                                            screenX: !0,
                                            screenY: !0,
                                            targetTouches: !0,
                                            toElement: !0,
                                            touches: !0,
                                            which: !0
                                        }, C.event.addProp), C.each({
                                            focus: "focusin",
                                            blur: "focusout"
                                        }, (function(e, t) {
                                            C.event.special[e] = {
                                                setup: function() {
                                                    return Ee(this, e, Se), !1
                                                },
                                                trigger: function() {
                                                    return Ee(this, e), !0
                                                },
                                                _default: function(t) {
                                                    return J.get(t.target, e)
                                                },
                                                delegateType: t
                                            }
                                        })), C.each({
                                            mouseenter: "mouseover",
                                            mouseleave: "mouseout",
                                            pointerenter: "pointerover",
                                            pointerleave: "pointerout"
                                        }, (function(e, t) {
                                            C.event.special[e] = {
                                                delegateType: t,
                                                bindType: t,
                                                handle: function(e) {
                                                    var n, r = this,
                                                        i = e.relatedTarget,
                                                        o = e.handleObj;
                                                    return i && (i === r || C.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                                                }
                                            }
                                        })), C.fn.extend({
                                            on: function(e, t, n, r) {
                                                return De(this, e, t, n, r)
                                            },
                                            one: function(e, t, n, r) {
                                                return De(this, e, t, n, r, 1)
                                            },
                                            off: function(e, t, n) {
                                                var r, i;
                                                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                                                if ("object" == l(e)) {
                                                    for (i in e) this.off(i, t, e[i]);
                                                    return this
                                                }
                                                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = je), this.each((function() {
                                                    C.event.remove(this, e, n, t)
                                                }))
                                            }
                                        });
                                        var Ae = /<script|<style|<link/i,
                                            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                                            _e = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                                        function Ne(e, t) {
                                            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
                                        }

                                        function Qe(e) {
                                            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                                        }

                                        function Re(e) {
                                            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                                        }

                                        function ze(e, t) {
                                            var n, r, i, o, s, a;
                                            if (1 === t.nodeType) {
                                                if (J.hasData(e) && (a = J.get(e).events))
                                                    for (i in J.remove(t, "handle events"), a)
                                                        for (n = 0, r = a[i].length; n < r; n++) C.event.add(t, i, a[i][n]);
                                                ee.hasData(e) && (o = ee.access(e), s = C.extend({}, o), ee.set(t, s))
                                            }
                                        }

                                        function Me(e, t) {
                                            var n = t.nodeName.toLowerCase();
                                            "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                                        }

                                        function Ie(e, t, n, r) {
                                            t = c(t);
                                            var i, o, s, a, l, u, f = 0,
                                                d = e.length,
                                                p = d - 1,
                                                h = t[0],
                                                m = b(h);
                                            if (m || d > 1 && "string" == typeof h && !v.checkClone && Le.test(h)) return e.each((function(i) {
                                                var o = e.eq(i);
                                                m && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r)
                                            }));
                                            if (d && (o = (i = ke(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                                                for (a = (s = C.map(we(i, "script"), Qe)).length; f < d; f++) l = i, f !== p && (l = C.clone(l, !0, !0), a && C.merge(s, we(l, "script"))), n.call(e[f], l, f);
                                                if (a)
                                                    for (u = s[s.length - 1].ownerDocument, C.map(s, Re), f = 0; f < a; f++) l = s[f], ye.test(l.type || "") && !J.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                                                        nonce: l.nonce || l.getAttribute("nonce")
                                                    }, u) : q(l.textContent.replace(_e, ""), l, u))
                                            }
                                            return e
                                        }

                                        function He(e, t, n) {
                                            for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(we(r)), r.parentNode && (n && le(r) && qe(we(r, "script")), r.parentNode.removeChild(r));
                                            return e
                                        }
                                        C.extend({
                                            htmlPrefilter: function(e) {
                                                return e
                                            },
                                            clone: function(e, t, n) {
                                                var r, i, o, s, a = e.cloneNode(!0),
                                                    l = le(e);
                                                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                                                    for (s = we(a), r = 0, i = (o = we(e)).length; r < i; r++) Me(o[r], s[r]);
                                                if (t)
                                                    if (n)
                                                        for (o = o || we(e), s = s || we(a), r = 0, i = o.length; r < i; r++) ze(o[r], s[r]);
                                                    else ze(e, a);
                                                return (s = we(a, "script")).length > 0 && qe(s, !l && we(e, "script")), a
                                            },
                                            cleanData: function(e) {
                                                for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                                    if (Z(n)) {
                                                        if (t = n[J.expando]) {
                                                            if (t.events)
                                                                for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                                            n[J.expando] = void 0
                                                        }
                                                        n[ee.expando] && (n[ee.expando] = void 0)
                                                    }
                                            }
                                        }), C.fn.extend({
                                            detach: function(e) {
                                                return He(this, e, !0)
                                            },
                                            remove: function(e) {
                                                return He(this, e)
                                            },
                                            text: function(e) {
                                                return X(this, (function(e) {
                                                    return void 0 === e ? C.text(this) : this.empty().each((function() {
                                                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                                    }))
                                                }), null, e, arguments.length)
                                            },
                                            append: function() {
                                                return Ie(this, arguments, (function(e) {
                                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                                                }))
                                            },
                                            prepend: function() {
                                                return Ie(this, arguments, (function(e) {
                                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                        var t = Ne(this, e);
                                                        t.insertBefore(e, t.firstChild)
                                                    }
                                                }))
                                            },
                                            before: function() {
                                                return Ie(this, arguments, (function(e) {
                                                    this.parentNode && this.parentNode.insertBefore(e, this)
                                                }))
                                            },
                                            after: function() {
                                                return Ie(this, arguments, (function(e) {
                                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                                                }))
                                            },
                                            empty: function() {
                                                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(we(e, !1)), e.textContent = "");
                                                return this
                                            },
                                            clone: function(e, t) {
                                                return e = null != e && e, t = null == t ? e : t, this.map((function() {
                                                    return C.clone(this, e, t)
                                                }))
                                            },
                                            html: function(e) {
                                                return X(this, (function(e) {
                                                    var t = this[0] || {},
                                                        n = 0,
                                                        r = this.length;
                                                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                                    if ("string" == typeof e && !Ae.test(e) && !xe[(be.exec(e) || ["", ""])[1].toLowerCase()]) {
                                                        e = C.htmlPrefilter(e);
                                                        try {
                                                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(we(t, !1)), t.innerHTML = e);
                                                            t = 0
                                                        } catch (e) {}
                                                    }
                                                    t && this.empty().append(e)
                                                }), null, e, arguments.length)
                                            },
                                            replaceWith: function() {
                                                var e = [];
                                                return Ie(this, arguments, (function(t) {
                                                    var n = this.parentNode;
                                                    C.inArray(this, e) < 0 && (C.cleanData(we(this)), n && n.replaceChild(t, this))
                                                }), e)
                                            }
                                        }), C.each({
                                            appendTo: "append",
                                            prependTo: "prepend",
                                            insertBefore: "before",
                                            insertAfter: "after",
                                            replaceAll: "replaceWith"
                                        }, (function(e, t) {
                                            C.fn[e] = function(e) {
                                                for (var n, r = [], i = C(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), C(i[s])[t](n), u.apply(r, n.get());
                                                return this.pushStack(r)
                                            }
                                        }));
                                        var Pe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                                            Fe = /^--/,
                                            Be = function(e) {
                                                var t = e.ownerDocument.defaultView;
                                                return t && t.opener || (t = r), t.getComputedStyle(e)
                                            },
                                            $e = function(e, t, n) {
                                                var r, i, o = {};
                                                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                                                for (i in r = n.call(e), t) e.style[i] = o[i];
                                                return r
                                            },
                                            We = new RegExp(se.join("|"), "i"),
                                            Xe = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");

                                        function Ue(e, t, n) {
                                            var r, i, o, s, a = Fe.test(t),
                                                l = e.style;
                                            return (n = n || Be(e)) && (s = n.getPropertyValue(t) || n[t], a && (s = s.replace(Xe, "$1")), "" !== s || le(e) || (s = C.style(e, t)), !v.pixelBoxStyles() && Pe.test(s) && We.test(t) && (r = l.width, i = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = r, l.minWidth = i, l.maxWidth = o)), void 0 !== s ? s + "" : s
                                        }

                                        function Ve(e, t) {
                                            return {
                                                get: function() {
                                                    if (!e()) return (this.get = t).apply(this, arguments);
                                                    delete this.get
                                                }
                                            }
                                        }! function() {
                                            function e() {
                                                if (u) {
                                                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(c).appendChild(u);
                                                    var e = r.getComputedStyle(u);
                                                    n = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), ae.removeChild(c), u = null
                                                }
                                            }

                                            function t(e) {
                                                return Math.round(parseFloat(e))
                                            }
                                            var n, i, o, s, a, l, c = x.createElement("div"),
                                                u = x.createElement("div");
                                            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(v, {
                                                boxSizingReliable: function() {
                                                    return e(), i
                                                },
                                                pixelBoxStyles: function() {
                                                    return e(), s
                                                },
                                                pixelPosition: function() {
                                                    return e(), n
                                                },
                                                reliableMarginLeft: function() {
                                                    return e(), l
                                                },
                                                scrollboxSize: function() {
                                                    return e(), o
                                                },
                                                reliableTrDimensions: function() {
                                                    var e, t, n, i;
                                                    return null == a && (e = x.createElement("table"), t = x.createElement("tr"), n = x.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ae.appendChild(e).appendChild(t).appendChild(n), i = r.getComputedStyle(t), a = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, ae.removeChild(e)), a
                                                }
                                            }))
                                        }();
                                        var Ye = ["Webkit", "Moz", "ms"],
                                            Ge = x.createElement("div").style,
                                            Ze = {};

                                        function Ke(e) {
                                            return C.cssProps[e] || Ze[e] || (e in Ge ? e : Ze[e] = function(e) {
                                                for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
                                                    if ((e = Ye[n] + t) in Ge) return e
                                            }(e) || e)
                                        }
                                        var Je = /^(none|table(?!-c[ea]).+)/,
                                            et = {
                                                position: "absolute",
                                                visibility: "hidden",
                                                display: "block"
                                            },
                                            tt = {
                                                letterSpacing: "0",
                                                fontWeight: "400"
                                            };

                                        function nt(e, t, n) {
                                            var r = oe.exec(t);
                                            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                                        }

                                        function rt(e, t, n, r, i, o) {
                                            var s = "width" === t ? 1 : 0,
                                                a = 0,
                                                l = 0;
                                            if (n === (r ? "border" : "content")) return 0;
                                            for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + se[s], !0, i)), r ? ("content" === n && (l -= C.css(e, "padding" + se[s], !0, i)), "margin" !== n && (l -= C.css(e, "border" + se[s] + "Width", !0, i))) : (l += C.css(e, "padding" + se[s], !0, i), "padding" !== n ? l += C.css(e, "border" + se[s] + "Width", !0, i) : a += C.css(e, "border" + se[s] + "Width", !0, i));
                                            return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
                                        }

                                        function it(e, t, n) {
                                            var r = Be(e),
                                                i = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                                                o = i,
                                                s = Ue(e, t, r),
                                                a = "offset" + t[0].toUpperCase() + t.slice(1);
                                            if (Pe.test(s)) {
                                                if (!n) return s;
                                                s = "auto"
                                            }
                                            return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + rt(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
                                        }

                                        function ot(e, t, n, r, i) {
                                            return new ot.prototype.init(e, t, n, r, i)
                                        }
                                        C.extend({
                                            cssHooks: {
                                                opacity: {
                                                    get: function(e, t) {
                                                        if (t) {
                                                            var n = Ue(e, "opacity");
                                                            return "" === n ? "1" : n
                                                        }
                                                    }
                                                }
                                            },
                                            cssNumber: {
                                                animationIterationCount: !0,
                                                columnCount: !0,
                                                fillOpacity: !0,
                                                flexGrow: !0,
                                                flexShrink: !0,
                                                fontWeight: !0,
                                                gridArea: !0,
                                                gridColumn: !0,
                                                gridColumnEnd: !0,
                                                gridColumnStart: !0,
                                                gridRow: !0,
                                                gridRowEnd: !0,
                                                gridRowStart: !0,
                                                lineHeight: !0,
                                                opacity: !0,
                                                order: !0,
                                                orphans: !0,
                                                widows: !0,
                                                zIndex: !0,
                                                zoom: !0
                                            },
                                            cssProps: {},
                                            style: function(e, t, n, r) {
                                                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                                    var i, o, s, a = G(t),
                                                        c = Fe.test(t),
                                                        u = e.style;
                                                    if (c || (t = Ke(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                                                    "string" == (o = l(n)) && (i = oe.exec(n)) && i[1] && (n = fe(e, t, i), o = "number"), null != n && n == n && ("number" !== o || c || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n))
                                                }
                                            },
                                            css: function(e, t, n, r) {
                                                var i, o, s, a = G(t);
                                                return Fe.test(t) || (t = Ke(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ue(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                                            }
                                        }), C.each(["height", "width"], (function(e, t) {
                                            C.cssHooks[t] = {
                                                get: function(e, n, r) {
                                                    if (n) return !Je.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : $e(e, et, (function() {
                                                        return it(e, t, r)
                                                    }))
                                                },
                                                set: function(e, n, r) {
                                                    var i, o = Be(e),
                                                        s = !v.scrollboxSize() && "absolute" === o.position,
                                                        a = (s || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                                                        l = r ? rt(e, t, r, a, o) : 0;
                                                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), l && (i = oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), nt(0, n, l)
                                                }
                                            }
                                        })), C.cssHooks.marginLeft = Ve(v.reliableMarginLeft, (function(e, t) {
                                            if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
                                                marginLeft: 0
                                            }, (function() {
                                                return e.getBoundingClientRect().left
                                            }))) + "px"
                                        })), C.each({
                                            margin: "",
                                            padding: "",
                                            border: "Width"
                                        }, (function(e, t) {
                                            C.cssHooks[e + t] = {
                                                expand: function(n) {
                                                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + se[r] + t] = o[r] || o[r - 2] || o[0];
                                                    return i
                                                }
                                            }, "margin" !== e && (C.cssHooks[e + t].set = nt)
                                        })), C.fn.extend({
                                            css: function(e, t) {
                                                return X(this, (function(e, t, n) {
                                                    var r, i, o = {},
                                                        s = 0;
                                                    if (Array.isArray(t)) {
                                                        for (r = Be(e), i = t.length; s < i; s++) o[t[s]] = C.css(e, t[s], !1, r);
                                                        return o
                                                    }
                                                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                                                }), e, t, arguments.length > 1)
                                            }
                                        }), C.Tween = ot, ot.prototype = {
                                            constructor: ot,
                                            init: function(e, t, n, r, i, o) {
                                                this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
                                            },
                                            cur: function() {
                                                var e = ot.propHooks[this.prop];
                                                return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
                                            },
                                            run: function(e) {
                                                var t, n = ot.propHooks[this.prop];
                                                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
                                            }
                                        }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
                                            _default: {
                                                get: function(e) {
                                                    var t;
                                                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                                                },
                                                set: function(e) {
                                                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                                                }
                                            }
                                        }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
                                            set: function(e) {
                                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                                            }
                                        }, C.easing = {
                                            linear: function(e) {
                                                return e
                                            },
                                            swing: function(e) {
                                                return .5 - Math.cos(e * Math.PI) / 2
                                            },
                                            _default: "swing"
                                        }, (C.fx = ot.prototype.init).step = {};
                                        var st, at, lt = /^(?:toggle|show|hide)$/,
                                            ct = /queueHooks$/;

                                        function ut() {
                                            at && (!1 === x.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(ut) : r.setTimeout(ut, C.fx.interval), C.fx.tick())
                                        }

                                        function ft() {
                                            return r.setTimeout((function() {
                                                st = void 0
                                            })), st = Date.now()
                                        }

                                        function dt(e, t) {
                                            var n, r = 0,
                                                i = {
                                                    height: e
                                                };
                                            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = se[r])] = i["padding" + n] = e;
                                            return t && (i.opacity = i.width = e), i
                                        }

                                        function pt(e, t, n) {
                                            for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                                                if (r = i[o].call(n, t, e)) return r
                                        }

                                        function ht(e, t, n) {
                                            var r, i, o = 0,
                                                s = ht.prefilters.length,
                                                a = C.Deferred().always((function() {
                                                    delete l.elem
                                                })),
                                                l = function() {
                                                    if (i) return !1;
                                                    for (var t = st || ft(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
                                                    return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                                                },
                                                c = a.promise({
                                                    elem: e,
                                                    props: C.extend({}, t),
                                                    opts: C.extend(!0, {
                                                        specialEasing: {},
                                                        easing: C.easing._default
                                                    }, n),
                                                    originalProperties: t,
                                                    originalOptions: n,
                                                    startTime: st || ft(),
                                                    duration: n.duration,
                                                    tweens: [],
                                                    createTween: function(t, n) {
                                                        var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                                                        return c.tweens.push(r), r
                                                    },
                                                    stop: function(t) {
                                                        var n = 0,
                                                            r = t ? c.tweens.length : 0;
                                                        if (i) return this;
                                                        for (i = !0; n < r; n++) c.tweens[n].run(1);
                                                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                                                    }
                                                }),
                                                u = c.props;
                                            for (function(e, t) {
                                                    var n, r, i, o, s;
                                                    for (n in e)
                                                        if (i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = C.cssHooks[r]) && "expand" in s)
                                                            for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                                                        else t[r] = i
                                                }(u, c.opts.specialEasing); o < s; o++)
                                                if (r = ht.prefilters[o].call(c, e, u, c.opts)) return b(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                                            return C.map(u, pt, c), b(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                                                elem: e,
                                                anim: c,
                                                queue: c.opts.queue
                                            })), c
                                        }
                                        C.Animation = C.extend(ht, {
                                                tweeners: {
                                                    "*": [function(e, t) {
                                                        var n = this.createTween(e, t);
                                                        return fe(n.elem, e, oe.exec(t), n), n
                                                    }]
                                                },
                                                tweener: function(e, t) {
                                                    b(e) ? (t = e, e = ["*"]) : e = e.match(I);
                                                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
                                                },
                                                prefilters: [function(e, t, n) {
                                                    var r, i, o, s, a, l, c, u, f = "width" in t || "height" in t,
                                                        d = this,
                                                        p = {},
                                                        h = e.style,
                                                        m = e.nodeType && ue(e),
                                                        g = J.get(e, "fxshow");
                                                    for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                                            s.unqueued || a()
                                                        }), s.unqueued++, d.always((function() {
                                                            d.always((function() {
                                                                s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                                                            }))
                                                        }))), t)
                                                        if (i = t[r], lt.test(i)) {
                                                            if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                                                                if ("show" !== i || !g || void 0 === g[r]) continue;
                                                                m = !0
                                                            }
                                                            p[r] = g && g[r] || C.style(e, r)
                                                        } if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                                                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = J.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (he([e], !0), c = e.style.display || c, u = C.css(e, "display"), he([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done((function() {
                                                                h.display = c
                                                            })), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always((function() {
                                                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                                            }))), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = J.access(e, "fxshow", {
                                                            display: c
                                                        }), o && (g.hidden = !m), m && he([e], !0), d.done((function() {
                                                            for (r in m || he([e]), J.remove(e, "fxshow"), p) C.style(e, r, p[r])
                                                        }))), l = pt(m ? g[r] : 0, r, d), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
                                                }],
                                                prefilter: function(e, t) {
                                                    t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
                                                }
                                            }), C.speed = function(e, t, n) {
                                                var r = e && "object" == l(e) ? C.extend({}, e) : {
                                                    complete: n || !n && t || b(e) && e,
                                                    duration: e,
                                                    easing: n && t || t && !b(t) && t
                                                };
                                                return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                                    b(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                                                }, r
                                            }, C.fn.extend({
                                                fadeTo: function(e, t, n, r) {
                                                    return this.filter(ue).css("opacity", 0).show().end().animate({
                                                        opacity: t
                                                    }, e, n, r)
                                                },
                                                animate: function(e, t, n, r) {
                                                    var i = C.isEmptyObject(e),
                                                        o = C.speed(t, n, r),
                                                        s = function() {
                                                            var t = ht(this, C.extend({}, e), o);
                                                            (i || J.get(this, "finish")) && t.stop(!0)
                                                        };
                                                    return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                                                },
                                                stop: function(e, t, n) {
                                                    var r = function(e) {
                                                        var t = e.stop;
                                                        delete e.stop, t(n)
                                                    };
                                                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                                        var t = !0,
                                                            i = null != e && e + "queueHooks",
                                                            o = C.timers,
                                                            s = J.get(this);
                                                        if (i) s[i] && s[i].stop && r(s[i]);
                                                        else
                                                            for (i in s) s[i] && s[i].stop && ct.test(i) && r(s[i]);
                                                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                                        !t && n || C.dequeue(this, e)
                                                    }))
                                                },
                                                finish: function(e) {
                                                    return !1 !== e && (e = e || "fx"), this.each((function() {
                                                        var t, n = J.get(this),
                                                            r = n[e + "queue"],
                                                            i = n[e + "queueHooks"],
                                                            o = C.timers,
                                                            s = r ? r.length : 0;
                                                        for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                                        for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                                        delete n.finish
                                                    }))
                                                }
                                            }), C.each(["toggle", "show", "hide"], (function(e, t) {
                                                var n = C.fn[t];
                                                C.fn[t] = function(e, r, i) {
                                                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, i)
                                                }
                                            })), C.each({
                                                slideDown: dt("show"),
                                                slideUp: dt("hide"),
                                                slideToggle: dt("toggle"),
                                                fadeIn: {
                                                    opacity: "show"
                                                },
                                                fadeOut: {
                                                    opacity: "hide"
                                                },
                                                fadeToggle: {
                                                    opacity: "toggle"
                                                }
                                            }, (function(e, t) {
                                                C.fn[e] = function(e, n, r) {
                                                    return this.animate(t, e, n, r)
                                                }
                                            })), C.timers = [], C.fx.tick = function() {
                                                var e, t = 0,
                                                    n = C.timers;
                                                for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                                                n.length || C.fx.stop(), st = void 0
                                            }, C.fx.timer = function(e) {
                                                C.timers.push(e), C.fx.start()
                                            }, C.fx.interval = 13, C.fx.start = function() {
                                                at || (at = !0, ut())
                                            }, C.fx.stop = function() {
                                                at = null
                                            }, C.fx.speeds = {
                                                slow: 600,
                                                fast: 200,
                                                _default: 400
                                            }, C.fn.delay = function(e, t) {
                                                return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                                                    var i = r.setTimeout(t, e);
                                                    n.stop = function() {
                                                        r.clearTimeout(i)
                                                    }
                                                }))
                                            },
                                            function() {
                                                var e = x.createElement("input"),
                                                    t = x.createElement("select").appendChild(x.createElement("option"));
                                                e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = x.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                                            }();
                                        var mt, gt = C.expr.attrHandle;
                                        C.fn.extend({
                                            attr: function(e, t) {
                                                return X(this, C.attr, e, t, arguments.length > 1)
                                            },
                                            removeAttr: function(e) {
                                                return this.each((function() {
                                                    C.removeAttr(this, e)
                                                }))
                                            }
                                        }), C.extend({
                                            attr: function(e, t, n) {
                                                var r, i, o = e.nodeType;
                                                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                                            },
                                            attrHooks: {
                                                type: {
                                                    set: function(e, t) {
                                                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                                                            var n = e.value;
                                                            return e.setAttribute("type", t), n && (e.value = n), t
                                                        }
                                                    }
                                                }
                                            },
                                            removeAttr: function(e, t) {
                                                var n, r = 0,
                                                    i = t && t.match(I);
                                                if (i && 1 === e.nodeType)
                                                    for (; n = i[r++];) e.removeAttribute(n)
                                            }
                                        }), mt = {
                                            set: function(e, t, n) {
                                                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                                            }
                                        }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                                            var n = gt[t] || C.find.attr;
                                            gt[t] = function(e, t, r) {
                                                var i, o, s = t.toLowerCase();
                                                return r || (o = gt[s], gt[s] = i, i = null != n(e, t, r) ? s : null, gt[s] = o), i
                                            }
                                        }));
                                        var vt = /^(?:input|select|textarea|button)$/i,
                                            bt = /^(?:a|area)$/i;

                                        function yt(e) {
                                            return (e.match(I) || []).join(" ")
                                        }

                                        function xt(e) {
                                            return e.getAttribute && e.getAttribute("class") || ""
                                        }

                                        function wt(e) {
                                            return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
                                        }
                                        C.fn.extend({
                                            prop: function(e, t) {
                                                return X(this, C.prop, e, t, arguments.length > 1)
                                            },
                                            removeProp: function(e) {
                                                return this.each((function() {
                                                    delete this[C.propFix[e] || e]
                                                }))
                                            }
                                        }), C.extend({
                                            prop: function(e, t, n) {
                                                var r, i, o = e.nodeType;
                                                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                                            },
                                            propHooks: {
                                                tabIndex: {
                                                    get: function(e) {
                                                        var t = C.find.attr(e, "tabindex");
                                                        return t ? parseInt(t, 10) : vt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                                                    }
                                                }
                                            },
                                            propFix: {
                                                for: "htmlFor",
                                                class: "className"
                                            }
                                        }), v.optSelected || (C.propHooks.selected = {
                                            get: function(e) {
                                                var t = e.parentNode;
                                                return t && t.parentNode && t.parentNode.selectedIndex, null
                                            },
                                            set: function(e) {
                                                var t = e.parentNode;
                                                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                                            }
                                        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                                            C.propFix[this.toLowerCase()] = this
                                        })), C.fn.extend({
                                            addClass: function(e) {
                                                var t, n, r, i, o, s;
                                                return b(e) ? this.each((function(t) {
                                                    C(this).addClass(e.call(this, t, xt(this)))
                                                })) : (t = wt(e)).length ? this.each((function() {
                                                    if (r = xt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                                                        for (o = 0; o < t.length; o++) i = t[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                                                        s = yt(n), r !== s && this.setAttribute("class", s)
                                                    }
                                                })) : this
                                            },
                                            removeClass: function(e) {
                                                var t, n, r, i, o, s;
                                                return b(e) ? this.each((function(t) {
                                                    C(this).removeClass(e.call(this, t, xt(this)))
                                                })) : arguments.length ? (t = wt(e)).length ? this.each((function() {
                                                    if (r = xt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                                                        for (o = 0; o < t.length; o++)
                                                            for (i = t[o]; n.indexOf(" " + i + " ") > -1;) n = n.replace(" " + i + " ", " ");
                                                        s = yt(n), r !== s && this.setAttribute("class", s)
                                                    }
                                                })) : this : this.attr("class", "")
                                            },
                                            toggleClass: function(e, t) {
                                                var n, r, i, o, s = l(e),
                                                    a = "string" === s || Array.isArray(e);
                                                return b(e) ? this.each((function(n) {
                                                    C(this).toggleClass(e.call(this, n, xt(this), t), t)
                                                })) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = wt(e), this.each((function() {
                                                    if (a)
                                                        for (o = C(this), i = 0; i < n.length; i++) r = n[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                                                    else void 0 !== e && "boolean" !== s || ((r = xt(this)) && J.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : J.get(this, "__className__") || ""))
                                                })))
                                            },
                                            hasClass: function(e) {
                                                var t, n, r = 0;
                                                for (t = " " + e + " "; n = this[r++];)
                                                    if (1 === n.nodeType && (" " + yt(xt(n)) + " ").indexOf(t) > -1) return !0;
                                                return !1
                                            }
                                        });
                                        var qt = /\r/g;
                                        C.fn.extend({
                                            val: function(e) {
                                                var t, n, r, i = this[0];
                                                return arguments.length ? (r = b(e), this.each((function(n) {
                                                    var i;
                                                    1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, (function(e) {
                                                        return null == e ? "" : e + ""
                                                    }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                                                }))) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(qt, "") : null == n ? "" : n : void 0
                                            }
                                        }), C.extend({
                                            valHooks: {
                                                option: {
                                                    get: function(e) {
                                                        var t = C.find.attr(e, "value");
                                                        return null != t ? t : yt(C.text(e))
                                                    }
                                                },
                                                select: {
                                                    get: function(e) {
                                                        var t, n, r, i = e.options,
                                                            o = e.selectedIndex,
                                                            s = "select-one" === e.type,
                                                            a = s ? null : [],
                                                            l = s ? o + 1 : i.length;
                                                        for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                                                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                                                if (t = C(n).val(), s) return t;
                                                                a.push(t)
                                                            } return a
                                                    },
                                                    set: function(e, t) {
                                                        for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--;)((r = i[s]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                                                        return n || (e.selectedIndex = -1), o
                                                    }
                                                }
                                            }
                                        }), C.each(["radio", "checkbox"], (function() {
                                            C.valHooks[this] = {
                                                set: function(e, t) {
                                                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                                                }
                                            }, v.checkOn || (C.valHooks[this].get = function(e) {
                                                return null === e.getAttribute("value") ? "on" : e.value
                                            })
                                        })), v.focusin = "onfocusin" in r;
                                        var Tt = /^(?:focusinfocus|focusoutblur)$/,
                                            kt = function(e) {
                                                e.stopPropagation()
                                            };
                                        C.extend(C.event, {
                                            trigger: function(e, t, n, i) {
                                                var o, s, a, c, u, f, d, p, m = [n || x],
                                                    g = h.call(e, "type") ? e.type : e,
                                                    v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                                                if (s = p = a = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[C.expando] ? e : new C.Event(g, "object" == l(e) && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[g] || {}, i || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                                                    if (!i && !d.noBubble && !y(n)) {
                                                        for (c = d.delegateType || g, Tt.test(c + g) || (s = s.parentNode); s; s = s.parentNode) m.push(s), a = s;
                                                        a === (n.ownerDocument || x) && m.push(a.defaultView || a.parentWindow || r)
                                                    }
                                                    for (o = 0;
                                                        (s = m[o++]) && !e.isPropagationStopped();) p = s, e.type = o > 1 ? c : d.bindType || g, (f = (J.get(s, "events") || Object.create(null))[e.type] && J.get(s, "handle")) && f.apply(s, t), (f = u && s[u]) && f.apply && Z(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
                                                    return e.type = g, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), t) || !Z(n) || u && b(n[g]) && !y(n) && ((a = n[u]) && (n[u] = null), C.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, kt), n[g](), e.isPropagationStopped() && p.removeEventListener(g, kt), C.event.triggered = void 0, a && (n[u] = a)), e.result
                                                }
                                            },
                                            simulate: function(e, t, n) {
                                                var r = C.extend(new C.Event, n, {
                                                    type: e,
                                                    isSimulated: !0
                                                });
                                                C.event.trigger(r, null, t)
                                            }
                                        }), C.fn.extend({
                                            trigger: function(e, t) {
                                                return this.each((function() {
                                                    C.event.trigger(e, t, this)
                                                }))
                                            },
                                            triggerHandler: function(e, t) {
                                                var n = this[0];
                                                if (n) return C.event.trigger(e, t, n, !0)
                                            }
                                        }), v.focusin || C.each({
                                            focus: "focusin",
                                            blur: "focusout"
                                        }, (function(e, t) {
                                            var n = function(e) {
                                                C.event.simulate(t, e.target, C.event.fix(e))
                                            };
                                            C.event.special[t] = {
                                                setup: function() {
                                                    var r = this.ownerDocument || this.document || this,
                                                        i = J.access(r, t);
                                                    i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                                                },
                                                teardown: function() {
                                                    var r = this.ownerDocument || this.document || this,
                                                        i = J.access(r, t) - 1;
                                                    i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                                                }
                                            }
                                        }));
                                        var Ct = r.location,
                                            Ot = {
                                                guid: Date.now()
                                            },
                                            jt = /\?/;
                                        C.parseXML = function(e) {
                                            var t, n;
                                            if (!e || "string" != typeof e) return null;
                                            try {
                                                t = (new r.DOMParser).parseFromString(e, "text/xml")
                                            } catch (e) {}
                                            return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, (function(e) {
                                                return e.textContent
                                            })).join("\n") : e)), t
                                        };
                                        var St = /\[\]$/,
                                            Dt = /\r?\n/g,
                                            Et = /^(?:submit|button|image|reset|file)$/i,
                                            At = /^(?:input|select|textarea|keygen)/i;

                                        function Lt(e, t, n, r) {
                                            var i;
                                            if (Array.isArray(t)) C.each(t, (function(t, i) {
                                                n || St.test(e) ? r(e, i) : Lt(e + "[" + ("object" == l(i) && null != i ? t : "") + "]", i, n, r)
                                            }));
                                            else if (n || "object" !== T(t)) r(e, t);
                                            else
                                                for (i in t) Lt(e + "[" + i + "]", t[i], n, r)
                                        }
                                        C.param = function(e, t) {
                                            var n, r = [],
                                                i = function(e, t) {
                                                    var n = b(t) ? t() : t;
                                                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                                                };
                                            if (null == e) return "";
                                            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                                                i(this.name, this.value)
                                            }));
                                            else
                                                for (n in e) Lt(n, e[n], t, i);
                                            return r.join("&")
                                        }, C.fn.extend({
                                            serialize: function() {
                                                return C.param(this.serializeArray())
                                            },
                                            serializeArray: function() {
                                                return this.map((function() {
                                                    var e = C.prop(this, "elements");
                                                    return e ? C.makeArray(e) : this
                                                })).filter((function() {
                                                    var e = this.type;
                                                    return this.name && !C(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !ve.test(e))
                                                })).map((function(e, t) {
                                                    var n = C(this).val();
                                                    return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                                                        return {
                                                            name: t.name,
                                                            value: e.replace(Dt, "\r\n")
                                                        }
                                                    })) : {
                                                        name: t.name,
                                                        value: n.replace(Dt, "\r\n")
                                                    }
                                                })).get()
                                            }
                                        });
                                        var _t = /%20/g,
                                            Nt = /#.*$/,
                                            Qt = /([?&])_=[^&]*/,
                                            Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                                            zt = /^(?:GET|HEAD)$/,
                                            Mt = /^\/\//,
                                            It = {},
                                            Ht = {},
                                            Pt = "*/".concat("*"),
                                            Ft = x.createElement("a");

                                        function Bt(e) {
                                            return function(t, n) {
                                                "string" != typeof t && (n = t, t = "*");
                                                var r, i = 0,
                                                    o = t.toLowerCase().match(I) || [];
                                                if (b(n))
                                                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                                            }
                                        }

                                        function $t(e, t, n, r) {
                                            var i = {},
                                                o = e === Ht;

                                            function s(a) {
                                                var l;
                                                return i[a] = !0, C.each(e[a] || [], (function(e, a) {
                                                    var c = a(t, n, r);
                                                    return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                                                })), l
                                            }
                                            return s(t.dataTypes[0]) || !i["*"] && s("*")
                                        }

                                        function Wt(e, t) {
                                            var n, r, i = C.ajaxSettings.flatOptions || {};
                                            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                                            return r && C.extend(!0, e, r), e
                                        }
                                        Ft.href = Ct.href, C.extend({
                                            active: 0,
                                            lastModified: {},
                                            etag: {},
                                            ajaxSettings: {
                                                url: Ct.href,
                                                type: "GET",
                                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                                                global: !0,
                                                processData: !0,
                                                async: !0,
                                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                                accepts: {
                                                    "*": Pt,
                                                    text: "text/plain",
                                                    html: "text/html",
                                                    xml: "application/xml, text/xml",
                                                    json: "application/json, text/javascript"
                                                },
                                                contents: {
                                                    xml: /\bxml\b/,
                                                    html: /\bhtml/,
                                                    json: /\bjson\b/
                                                },
                                                responseFields: {
                                                    xml: "responseXML",
                                                    text: "responseText",
                                                    json: "responseJSON"
                                                },
                                                converters: {
                                                    "* text": String,
                                                    "text html": !0,
                                                    "text json": JSON.parse,
                                                    "text xml": C.parseXML
                                                },
                                                flatOptions: {
                                                    url: !0,
                                                    context: !0
                                                }
                                            },
                                            ajaxSetup: function(e, t) {
                                                return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
                                            },
                                            ajaxPrefilter: Bt(It),
                                            ajaxTransport: Bt(Ht),
                                            ajax: function(e, t) {
                                                "object" == l(e) && (t = e, e = void 0);
                                                var n, i, o, s, a, c, u, f, d, p, h = C.ajaxSetup({}, t = t || {}),
                                                    m = h.context || h,
                                                    g = h.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                                                    v = C.Deferred(),
                                                    b = C.Callbacks("once memory"),
                                                    y = h.statusCode || {},
                                                    w = {},
                                                    q = {},
                                                    T = "canceled",
                                                    k = {
                                                        readyState: 0,
                                                        getResponseHeader: function(e) {
                                                            var t;
                                                            if (u) {
                                                                if (!s)
                                                                    for (s = {}; t = Rt.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                                t = s[e.toLowerCase() + " "]
                                                            }
                                                            return null == t ? null : t.join(", ")
                                                        },
                                                        getAllResponseHeaders: function() {
                                                            return u ? o : null
                                                        },
                                                        setRequestHeader: function(e, t) {
                                                            return null == u && (e = q[e.toLowerCase()] = q[e.toLowerCase()] || e, w[e] = t), this
                                                        },
                                                        overrideMimeType: function(e) {
                                                            return null == u && (h.mimeType = e), this
                                                        },
                                                        statusCode: function(e) {
                                                            var t;
                                                            if (e)
                                                                if (u) k.always(e[k.status]);
                                                                else
                                                                    for (t in e) y[t] = [y[t], e[t]];
                                                            return this
                                                        },
                                                        abort: function(e) {
                                                            var t = e || T;
                                                            return n && n.abort(t), O(0, t), this
                                                        }
                                                    };
                                                if (v.promise(k), h.url = ((e || h.url || Ct.href) + "").replace(Mt, Ct.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                                                    c = x.createElement("a");
                                                    try {
                                                        c.href = h.url, c.href = c.href, h.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                                                    } catch (e) {
                                                        h.crossDomain = !0
                                                    }
                                                }
                                                if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), $t(It, h, t, k), u) return k;
                                                for (d in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), i = h.url.replace(Nt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(_t, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (jt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Qt, "$1"), p = (jt.test(i) ? "&" : "?") + "_=" + Ot.guid++ + p), h.url = i + p), h.ifModified && (C.lastModified[i] && k.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && k.setRequestHeader("If-None-Match", C.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(d, h.headers[d]);
                                                if (h.beforeSend && (!1 === h.beforeSend.call(m, k, h) || u)) return k.abort();
                                                if (T = "abort", b.add(h.complete), k.done(h.success), k.fail(h.error), n = $t(Ht, h, t, k)) {
                                                    if (k.readyState = 1, f && g.trigger("ajaxSend", [k, h]), u) return k;
                                                    h.async && h.timeout > 0 && (a = r.setTimeout((function() {
                                                        k.abort("timeout")
                                                    }), h.timeout));
                                                    try {
                                                        u = !1, n.send(w, O)
                                                    } catch (e) {
                                                        if (u) throw e;
                                                        O(-1, e)
                                                    }
                                                } else O(-1, "No Transport");

                                                function O(e, t, s, l) {
                                                    var c, d, p, x, w, q = t;
                                                    u || (u = !0, a && r.clearTimeout(a), n = void 0, o = l || "", k.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (x = function(e, t, n) {
                                                        for (var r, i, o, s, a = e.contents, l = e.dataTypes;
                                                            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                                        if (r)
                                                            for (i in a)
                                                                if (a[i] && a[i].test(r)) {
                                                                    l.unshift(i);
                                                                    break
                                                                } if (l[0] in n) o = l[0];
                                                        else {
                                                            for (i in n) {
                                                                if (!l[0] || e.converters[i + " " + l[0]]) {
                                                                    o = i;
                                                                    break
                                                                }
                                                                s || (s = i)
                                                            }
                                                            o = o || s
                                                        }
                                                        if (o) return o !== l[0] && l.unshift(o), n[o]
                                                    }(h, k, s)), !c && C.inArray("script", h.dataTypes) > -1 && C.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), x = function(e, t, n, r) {
                                                        var i, o, s, a, l, c = {},
                                                            u = e.dataTypes.slice();
                                                        if (u[1])
                                                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                                        for (o = u.shift(); o;)
                                                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                                                                if ("*" === o) o = l;
                                                                else if ("*" !== l && l !== o) {
                                                            if (!(s = c[l + " " + o] || c["* " + o]))
                                                                for (i in c)
                                                                    if ((a = i.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                                        !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], u.unshift(a[1]));
                                                                        break
                                                                    } if (!0 !== s)
                                                                if (s && e.throws) t = s(t);
                                                                else try {
                                                                    t = s(t)
                                                                } catch (e) {
                                                                    return {
                                                                        state: "parsererror",
                                                                        error: s ? e : "No conversion from " + l + " to " + o
                                                                    }
                                                                }
                                                        }
                                                        return {
                                                            state: "success",
                                                            data: t
                                                        }
                                                    }(h, x, k, c), c ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = k.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === h.type ? q = "nocontent" : 304 === e ? q = "notmodified" : (q = x.state, d = x.data, c = !(p = x.error))) : (p = q, !e && q || (q = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || q) + "", c ? v.resolveWith(m, [d, q, k]) : v.rejectWith(m, [k, q, p]), k.statusCode(y), y = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? d : p]), b.fireWith(m, [k, q]), f && (g.trigger("ajaxComplete", [k, h]), --C.active || C.event.trigger("ajaxStop")))
                                                }
                                                return k
                                            },
                                            getJSON: function(e, t, n) {
                                                return C.get(e, t, n, "json")
                                            },
                                            getScript: function(e, t) {
                                                return C.get(e, void 0, t, "script")
                                            }
                                        }), C.each(["get", "post"], (function(e, t) {
                                            C[t] = function(e, n, r, i) {
                                                return b(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                                                    url: e,
                                                    type: t,
                                                    dataType: i,
                                                    data: n,
                                                    success: r
                                                }, C.isPlainObject(e) && e))
                                            }
                                        })), C.ajaxPrefilter((function(e) {
                                            var t;
                                            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                                        })), C._evalUrl = function(e, t, n) {
                                            return C.ajax({
                                                url: e,
                                                type: "GET",
                                                dataType: "script",
                                                cache: !0,
                                                async: !1,
                                                global: !1,
                                                converters: {
                                                    "text script": function() {}
                                                },
                                                dataFilter: function(e) {
                                                    C.globalEval(e, t, n)
                                                }
                                            })
                                        }, C.fn.extend({
                                            wrapAll: function(e) {
                                                var t;
                                                return this[0] && (b(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                                                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                                    return e
                                                })).append(this)), this
                                            },
                                            wrapInner: function(e) {
                                                return b(e) ? this.each((function(t) {
                                                    C(this).wrapInner(e.call(this, t))
                                                })) : this.each((function() {
                                                    var t = C(this),
                                                        n = t.contents();
                                                    n.length ? n.wrapAll(e) : t.append(e)
                                                }))
                                            },
                                            wrap: function(e) {
                                                var t = b(e);
                                                return this.each((function(n) {
                                                    C(this).wrapAll(t ? e.call(this, n) : e)
                                                }))
                                            },
                                            unwrap: function(e) {
                                                return this.parent(e).not("body").each((function() {
                                                    C(this).replaceWith(this.childNodes)
                                                })), this
                                            }
                                        }), C.expr.pseudos.hidden = function(e) {
                                            return !C.expr.pseudos.visible(e)
                                        }, C.expr.pseudos.visible = function(e) {
                                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                                        }, C.ajaxSettings.xhr = function() {
                                            try {
                                                return new r.XMLHttpRequest
                                            } catch (e) {}
                                        };
                                        var Xt = {
                                                0: 200,
                                                1223: 204
                                            },
                                            Ut = C.ajaxSettings.xhr();
                                        v.cors = !!Ut && "withCredentials" in Ut, v.ajax = Ut = !!Ut, C.ajaxTransport((function(e) {
                                            var t, n;
                                            if (v.cors || Ut && !e.crossDomain) return {
                                                send: function(i, o) {
                                                    var s, a = e.xhr();
                                                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
                                                    t = function(e) {
                                                        return function() {
                                                            t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                                                binary: a.response
                                                            } : {
                                                                text: a.responseText
                                                            }, a.getAllResponseHeaders()))
                                                        }
                                                    }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                                        4 === a.readyState && r.setTimeout((function() {
                                                            t && n()
                                                        }))
                                                    }, t = t("abort");
                                                    try {
                                                        a.send(e.hasContent && e.data || null)
                                                    } catch (e) {
                                                        if (t) throw e
                                                    }
                                                },
                                                abort: function() {
                                                    t && t()
                                                }
                                            }
                                        })), C.ajaxPrefilter((function(e) {
                                            e.crossDomain && (e.contents.script = !1)
                                        })), C.ajaxSetup({
                                            accepts: {
                                                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                                            },
                                            contents: {
                                                script: /\b(?:java|ecma)script\b/
                                            },
                                            converters: {
                                                "text script": function(e) {
                                                    return C.globalEval(e), e
                                                }
                                            }
                                        }), C.ajaxPrefilter("script", (function(e) {
                                            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                                        })), C.ajaxTransport("script", (function(e) {
                                            var t, n;
                                            if (e.crossDomain || e.scriptAttrs) return {
                                                send: function(r, i) {
                                                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                                        charset: e.scriptCharset,
                                                        src: e.url
                                                    }).on("load error", n = function(e) {
                                                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                                                    }), x.head.appendChild(t[0])
                                                },
                                                abort: function() {
                                                    n && n()
                                                }
                                            }
                                        }));
                                        var Vt, Yt = [],
                                            Gt = /(=)\?(?=&|$)|\?\?/;
                                        C.ajaxSetup({
                                            jsonp: "callback",
                                            jsonpCallback: function() {
                                                var e = Yt.pop() || C.expando + "_" + Ot.guid++;
                                                return this[e] = !0, e
                                            }
                                        }), C.ajaxPrefilter("json jsonp", (function(e, t, n) {
                                            var i, o, s, a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                                            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                                                return s || C.error(i + " was not called"), s[0]
                                            }, e.dataTypes[0] = "json", o = r[i], r[i] = function() {
                                                s = arguments
                                            }, n.always((function() {
                                                void 0 === o ? C(r).removeProp(i) : r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Yt.push(i)), s && b(o) && o(s[0]), s = o = void 0
                                            })), "script"
                                        })), v.createHTMLDocument = ((Vt = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), C.parseHTML = function(e, t, n) {
                                            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(r)) : t = x), o = !n && [], (i = L.exec(e)) ? [t.createElement(i[1])] : (i = ke([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
                                            var r, i, o
                                        }, C.fn.load = function(e, t, n) {
                                            var r, i, o, s = this,
                                                a = e.indexOf(" ");
                                            return a > -1 && (r = yt(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == l(t) && (i = "POST"), s.length > 0 && C.ajax({
                                                url: e,
                                                type: i || "GET",
                                                dataType: "html",
                                                data: t
                                            }).done((function(e) {
                                                o = arguments, s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                                            })).always(n && function(e, t) {
                                                s.each((function() {
                                                    n.apply(this, o || [e.responseText, t, e])
                                                }))
                                            }), this
                                        }, C.expr.pseudos.animated = function(e) {
                                            return C.grep(C.timers, (function(t) {
                                                return e === t.elem
                                            })).length
                                        }, C.offset = {
                                            setOffset: function(e, t, n) {
                                                var r, i, o, s, a, l, c = C.css(e, "position"),
                                                    u = C(e),
                                                    f = {};
                                                "static" === c && (e.style.position = "relative"), a = u.offset(), o = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (r = u.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), b(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : u.css(f)
                                            }
                                        }, C.fn.extend({
                                            offset: function(e) {
                                                if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                                                    C.offset.setOffset(this, e, t)
                                                }));
                                                var t, n, r = this[0];
                                                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                                                    top: t.top + n.pageYOffset,
                                                    left: t.left + n.pageXOffset
                                                }) : {
                                                    top: 0,
                                                    left: 0
                                                } : void 0
                                            },
                                            position: function() {
                                                if (this[0]) {
                                                    var e, t, n, r = this[0],
                                                        i = {
                                                            top: 0,
                                                            left: 0
                                                        };
                                                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                                                    else {
                                                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                                                        e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                                                    }
                                                    return {
                                                        top: t.top - i.top - C.css(r, "marginTop", !0),
                                                        left: t.left - i.left - C.css(r, "marginLeft", !0)
                                                    }
                                                }
                                            },
                                            offsetParent: function() {
                                                return this.map((function() {
                                                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                                                    return e || ae
                                                }))
                                            }
                                        }), C.each({
                                            scrollLeft: "pageXOffset",
                                            scrollTop: "pageYOffset"
                                        }, (function(e, t) {
                                            var n = "pageYOffset" === t;
                                            C.fn[e] = function(r) {
                                                return X(this, (function(e, r, i) {
                                                    var o;
                                                    if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                                                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                                                }), e, r, arguments.length)
                                            }
                                        })), C.each(["top", "left"], (function(e, t) {
                                            C.cssHooks[t] = Ve(v.pixelPosition, (function(e, n) {
                                                if (n) return n = Ue(e, t), Pe.test(n) ? C(e).position()[t] + "px" : n
                                            }))
                                        })), C.each({
                                            Height: "height",
                                            Width: "width"
                                        }, (function(e, t) {
                                            C.each({
                                                padding: "inner" + e,
                                                content: t,
                                                "": "outer" + e
                                            }, (function(n, r) {
                                                C.fn[r] = function(i, o) {
                                                    var s = arguments.length && (n || "boolean" != typeof i),
                                                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                                                    return X(this, (function(t, n, i) {
                                                        var o;
                                                        return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a)
                                                    }), t, s ? i : void 0, s)
                                                }
                                            }))
                                        })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                                            C.fn[t] = function(e) {
                                                return this.on(t, e)
                                            }
                                        })), C.fn.extend({
                                            bind: function(e, t, n) {
                                                return this.on(e, null, t, n)
                                            },
                                            unbind: function(e, t) {
                                                return this.off(e, null, t)
                                            },
                                            delegate: function(e, t, n, r) {
                                                return this.on(t, e, n, r)
                                            },
                                            undelegate: function(e, t, n) {
                                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                                            },
                                            hover: function(e, t) {
                                                return this.mouseenter(e).mouseleave(t || e)
                                            }
                                        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                                            C.fn[t] = function(e, n) {
                                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                                            }
                                        }));
                                        var Zt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                                        C.proxy = function(e, t) {
                                            var n, r, i;
                                            if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = a.call(arguments, 2), (i = function() {
                                                return e.apply(t || this, r.concat(a.call(arguments)))
                                            }).guid = e.guid = e.guid || C.guid++, i
                                        }, C.holdReady = function(e) {
                                            e ? C.readyWait++ : C.ready(!0)
                                        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = b, C.isWindow = y, C.camelCase = G, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
                                            var t = C.type(e);
                                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                                        }, C.trim = function(e) {
                                            return null == e ? "" : (e + "").replace(Zt, "$1")
                                        }, void 0 === (n = function() {
                                            return C
                                        }.apply(t, [])) || (e.exports = n);
                                        var Kt = r.jQuery,
                                            Jt = r.$;
                                        return C.noConflict = function(e) {
                                            return r.$ === C && (r.$ = Jt), e && r.jQuery === C && (r.jQuery = Kt), C
                                        }, void 0 === i && (r.jQuery = r.$ = C), C
                                    }))
                                },
                                834: function(e, t, n) {
                                    "use strict";
                                    var r = n(414);

                                    function i() {}

                                    function o() {}
                                    o.resetWarningCache = i, e.exports = function() {
                                        function e(e, t, n, i, o, s) {
                                            if (s !== r) {
                                                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                                throw a.name = "Invariant Violation", a
                                            }
                                        }

                                        function t() {
                                            return e
                                        }
                                        e.isRequired = e;
                                        var n = {
                                            array: e,
                                            bigint: e,
                                            bool: e,
                                            func: e,
                                            number: e,
                                            object: e,
                                            string: e,
                                            symbol: e,
                                            any: e,
                                            arrayOf: t,
                                            element: e,
                                            elementType: e,
                                            instanceOf: t,
                                            node: e,
                                            objectOf: t,
                                            oneOf: t,
                                            oneOfType: t,
                                            shape: t,
                                            exact: t,
                                            checkPropTypes: o,
                                            resetWarningCache: i
                                        };
                                        return n.PropTypes = n, n
                                    }
                                },
                                697: function(e, t, n) {
                                    e.exports = n(834)()
                                },
                                414: function(e) {
                                    "use strict";
                                    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                                },
                                156: function(t) {
                                    "use strict";
                                    t.exports = e
                                }
                            },
                            n = {};

                        function r(e) {
                            var i = n[e];
                            if (void 0 !== i) return i.exports;
                            var o = n[e] = {
                                id: e,
                                exports: {}
                            };
                            return t[e].call(o.exports, o, o.exports, r), o.exports
                        }
                        r.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return r.d(t, {
                                a: t
                            }), t
                        }, r.d = function(e, t) {
                            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                                enumerable: !0,
                                get: t[n]
                            })
                        }, r.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, r.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        };
                        var i = {};
                        return function() {
                            "use strict";
                            r.r(i), r.d(i, {
                                EditableMathField: function() {
                                    return n
                                },
                                StaticMathField: function() {
                                    return o
                                },
                                addStyles: function() {
                                    return t
                                },
                                default: function() {
                                    return s
                                }
                            });
                            var e = r(527);

                            function t() {
                                if (null == document.getElementById("react-mathquill-styles")) {
                                    var t = document.createElement("style");
                                    t.setAttribute("id", "react-mathquill-styles"), t.innerHTML = e.Z[0][1], document.getElementsByTagName("head")[0].appendChild(t)
                                }
                            }
                            var n = r(991).Z,
                                o = r(717).Z,
                                s = n
                        }(), i
                    }()
                }, "object" == l(t) && "object" == l(r) ? r.exports = a(n("q1tI")) : (o = [n("q1tI")], void 0 === (s = "function" == typeof(i = a) ? i.apply(t, o) : i) || (r.exports = s))
            }).call(this, n("yLpj"), n("YuTi")(e))
        },
        pxCl: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function e(t, n, r) {
                if (function(e) {
                        return null === e.offsetParent
                    }(t)) return !1;
                var i = void 0,
                    s = void 0,
                    a = void 0,
                    l = void 0;
                if (void 0 === n || n === window) i = window.pageYOffset, a = window.pageXOffset, s = i + window.innerHeight, l = a + window.innerWidth;
                else {
                    if (!e(n, window, r)) return !1;
                    var c = (0, o.default)(n);
                    i = c.top, a = c.left, s = i + n.offsetHeight, l = a + n.offsetWidth
                }
                var u = (0, o.default)(t);
                return i <= u.top + t.offsetHeight + r.top && s >= u.top - r.bottom && a <= u.left + t.offsetWidth + r.left && l >= u.left - r.right
            };
            var r, i = n("HVci"),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                }
        }
    }
]);