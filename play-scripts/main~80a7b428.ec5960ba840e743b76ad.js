(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        "+3yP": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("4HzQ"),
                i = a("5gzV"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(e, t) {
                if (t && ("object" === d(t) || "function" == typeof t)) return t;
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
                    }), t && y(e, t)
                }(r, e);
                var t, a, s, n = p(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = n.call(this, e)).state = {
                        me: {},
                        opp: {},
                        myEnergyArray: [],
                        oppEnergyArray: []
                    }, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.name && this.props.match && this.props.match[0] && this.setState({
                            me: this.props.match[0].name === this.props.name ? this.props.match[0] : this.props.match[1],
                            opp: this.props.match[0].name === this.props.name ? this.props.match[1] : this.props.match[0]
                        }, (function() {
                            for (var t = [], a = [], s = 0; s < e.props.maxEnergy; s++) e.state.me.energy > s ? t.push(!0) : t.push(!1), e.state.opp.energy > s ? a.push(!0) : a.push(!1);
                            a.reverse(), e.setState({
                                myEnergyArray: t,
                                oppEnergyArray: a
                            })
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: c.a.background
                        }, o.a.createElement("div", {
                            className: c.a.rightBackground
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662148586/Media/br/BG_Overlay2.svg",
                            alt: "Background",
                            className: c.a.backgroundOverlay
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Top.svg",
                            alt: "Lightning Top",
                            className: c.a.lightningTop
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg",
                            alt: "Lightning Bottom",
                            className: c.a.lightningBottom
                        }), o.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlookShadow3
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752040/Media/br/Resized_Orange_Nameplate_No_Tilt.svg",
                            alt: "Nameplate",
                            className: c.a.leftNameplate
                        }), o.a.createElement(l.Textfit, {
                            className: c.a.leftName,
                            mode: "single",
                            min: 1,
                            max: Object(m.v)("8vw"),
                            forceSingleModeWidth: !1
                        }, this.state.me.name), o.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlookShadow2
                        }), o.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlookShadow1
                        }), o.a.createElement(_.a, {
                            name: this.state.me.blook,
                            className: c.a.leftBlook
                        }), o.a.createElement("div", {
                            className: c.a.leftEnergyContainer
                        }, o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_BG_No_Tilt.svg",
                            alt: "Energy Bar",
                            className: c.a.leftEnergyBar
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Blue.svg",
                            alt: "Energy Bolt",
                            className: c.a.leftEnergyBolt
                        }), this.state.myEnergyArray.map((function(t, a) {
                            return o.a.createElement("img", {
                                key: a,
                                src: t ? "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Blue.svg" : "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Empty.svg",
                                alt: "Energy",
                                className: c.a.leftEnergy,
                                style: {
                                    marginRight: a === e.state.myEnergyArray.length - 1 ? "17%" : null
                                }
                            })
                        }))), o.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlookShadow3
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752040/Media/br/Resized_Blue_Nameplate_No_Tilt.svg",
                            alt: "Nameplate",
                            className: c.a.rightNameplate
                        }), o.a.createElement(l.Textfit, {
                            className: c.a.rightName,
                            mode: "single",
                            min: 1,
                            max: Object(m.v)("8vw"),
                            forceSingleModeWidth: !1
                        }, this.state.opp.name), o.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlookShadow2
                        }), o.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlookShadow1
                        }), o.a.createElement(_.a, {
                            name: this.state.opp.blook,
                            className: c.a.rightBlook
                        }), o.a.createElement("div", {
                            className: c.a.rightEnergyContainer
                        }, o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_BG_No_Tilt.svg",
                            alt: "Energy Bar",
                            className: c.a.rightEnergyBar
                        }), this.state.oppEnergyArray.map((function(e, t) {
                            return o.a.createElement("img", {
                                key: t,
                                src: e ? "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Orange.svg" : "https://media.blooket.com/image/upload/v1662148586/Media/br/Energy_Bar_No_Tilt_Empty.svg",
                                alt: "Energy",
                                className: c.a.rightEnergy,
                                style: {
                                    marginLeft: 0 === t ? "17%" : null
                                }
                            })
                        })), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Orange.svg",
                            alt: "Energy Bolt",
                            className: c.a.rightEnergyBolt
                        })), 3 === this.props.timer ? o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752328/Media/br/Countdown_3.png",
                            alt: "VS",
                            className: c.a.numText
                        }) : 2 === this.props.timer ? o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752328/Media/br/Countdown_2.png",
                            alt: "VS",
                            className: c.a.numText
                        }) : this.props.timer <= 1 ? o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1662752328/Media/br/Countdown_1.png",
                            alt: "VS",
                            className: c.a.numText
                        }) : o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1655936179/Media/br/VS.png",
                            alt: "VS",
                            className: c.a.vs
                        }))
                    }
                }]) && f(t.prototype, a), s && f(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(o.a.Component);
            g.propTypes = {
                name: r.a.string,
                match: r.a.array,
                maxEnergy: r.a.number,
                timer: r.a.number
            }, t.a = g
        },
        "+hd2": function(e, t, a) {
            var s = a("dudT");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "/QI/": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__button___1Agls-camelCase{border-radius:5px;background-color:#0bc2cf;opacity:.6;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);cursor:pointer;display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__button___1Agls-camelCase:hover{transform:scale(.95)}.styles__selected___1NZMh-camelCase{opacity:1}.styles__icon___1fz_e-camelCase{font-size:70px;color:#fff;text-align:center}.styles__icon___1fz_e-camelCase,.styles__image___hyqnu-camelCase{margin:20px auto 5px}.styles__image___hyqnu-camelCase{height:74px}.styles__title___3G0Zs-camelCase{font-size:32px;font-weight:700;margin:5px}.styles__desc___UP2id-camelCase,.styles__title___3G0Zs-camelCase{font-family:Nunito,sans-serif;color:#fff;text-align:center}.styles__desc___UP2id-camelCase{font-size:20px;margin:5px 15px 15px}", ""]), t.locals = {
                button: "styles__button___1Agls-camelCase",
                selected: "styles__selected___1NZMh-camelCase",
                icon: "styles__icon___1fz_e-camelCase",
                image: "styles__image___hyqnu-camelCase",
                title: "styles__title___3G0Zs-camelCase",
                desc: "styles__desc___UP2id-camelCase"
            }
        },
        "0LBQ": function(e, t, a) {
            var s = a("PmgH");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "0Q62": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__wrapper___1I06R-camelCase{width:22.5%;height:45%;border-radius:1.5vw;overflow:hidden;position:relative;background-color:#af705a;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__bigBox___3VP4c-camelCase{width:27vw;height:25vw}.styles__boxButton___FnHsN-camelCase{outline:none;cursor:pointer}.styles__hoverButton___DaVLa-camelCase{transition:.2s}.styles__hoverButton___DaVLa-camelCase:hover{transform:scale(.95)}.styles__fenceContainer___RgmdQ-camelCase{position:absolute;top:0;left:0;width:100%;height:calc(100% - 3vw);border-radius:1.5vw;box-sizing:border-box;background-color:#c9987a}.styles__bigBox___3VP4c-camelCase>.styles__fenceContainer___RgmdQ-camelCase{height:calc(100% - 4vw)}.styles__topWall___2ZUYz-camelCase{position:absolute;top:.6vw;left:.6vw;height:calc(100% - 1.2vw);width:calc(100% - 1.2vw);background-color:#ac6b53;border-radius:1vw}.styles__bigTopWall___P9C6G-camelCase{top:.9vw;left:.9vw;height:calc(100% - 1.8vw);width:calc(100% - 1.8vw)}.styles__container___2H3zn-camelCase{width:calc(100% - 1.2vw);height:calc(100% - 3.7vw);position:absolute;top:3.1vw;left:.6vw;border-radius:1vw;background-color:#bc815c}.styles__bigContainer___15l5Q-camelCase{width:calc(100% - 1.8vw);height:calc(100% - 5.1vw);top:4.4vw;left:.9vw}.styles__sketchWrapper___1jt8Q-camelCase{position:absolute;top:-2.5vw;left:0;width:100%;height:calc(100% + 2.5vw);border-radius:1vw;overflow:hidden}.styles__sketchHolder___2YlmT-camelCase{height:calc(100% + 1.5vw)}.styles__sketchCanvas___mMig6-camelCase,.styles__sketchHolder___2YlmT-camelCase{position:absolute;top:0;left:0;width:100%}.styles__sketchCanvas___mMig6-camelCase{height:100%}.styles__textRow___331zo-camelCase{position:absolute;bottom:.25vw;left:6%;height:2.5vw;width:88%;flex-direction:row;justify-content:space-between;font-size:1.3vw}.styles__text___3vanS-camelCase,.styles__textRow___331zo-camelCase{display:flex;align-items:center}.styles__text___3vanS-camelCase{height:100%;padding:0 .5vw;white-space:nowrap;overflow:hidden;text-align:center;color:#fff;font-weight:700;justify-content:center;border:.3vw solid #8a5542;border-radius:.3vw;box-sizing:border-box}.styles__bigBox___3VP4c-camelCase>.styles__textRow___331zo-camelCase{height:3vw;bottom:.5vw;font-size:1.8vw}.styles__shieldContainer___1_J5q-camelCase{width:3.5vw;height:3.5vw;position:absolute;top:.25vw;right:.1vw;font-size:2.1vw}.styles__shieldImg___39zX_-camelCase{width:95%;height:95%;position:absolute;left:2.5%;top:7%}.styles__shieldText___3mCeC-camelCase{width:100%;height:100%;position:absolute;font-family:Titan One,sans-serif;display:flex;justify-content:center;align-items:center;color:#fff;letter-spacing:.5px;text-shadow:-1px -1px 0 #646464,1px -1px 0 #646464,-1px 1px 0 #646464,2px 2px 0 #646464}.styles__bigBox___3VP4c-camelCase>.styles__shieldContainer___1_J5q-camelCase{width:5vw;height:5vw;font-size:2.9vw}@media only screen and (max-width:700px){.styles__wrapper___1I06R-camelCase{width:45%;height:22.5%;border-radius:3vw}.styles__fenceContainer___RgmdQ-camelCase{height:calc(100% - 5vw);border-radius:3vw}.styles__topWall___2ZUYz-camelCase{top:1.5vw;height:calc(100% - 3vw)}.styles__container___2H3zn-camelCase,.styles__topWall___2ZUYz-camelCase{left:1.5vw;width:calc(100% - 3vw);border-radius:2vw}.styles__container___2H3zn-camelCase{height:calc(100% - 6.5vw);top:5vw}.styles__textRow___331zo-camelCase{height:4vw;bottom:.5vw;font-size:2.5vw}.styles__text___3vanS-camelCase{border:.5vw solid #8a5542;padding:0 1vw;border-radius:1vw}.styles__shieldContainer___1_J5q-camelCase{width:8vw;height:8vw;font-size:5vw}.styles__bigBox___3VP4c-camelCase{width:75vw;height:30vh;border-radius:4vw}.styles__bigBox___3VP4c-camelCase>.styles__fenceContainer___RgmdQ-camelCase{height:calc(100% - 8vw);border-radius:4vw}.styles__bigTopWall___P9C6G-camelCase{top:2.5vw;height:calc(100% - 5vw)}.styles__bigContainer___15l5Q-camelCase,.styles__bigTopWall___P9C6G-camelCase{left:2.5vw;width:calc(100% - 5vw);border-radius:3vw}.styles__bigContainer___15l5Q-camelCase{height:calc(100% - 11vw);top:8.5vw}.styles__bigBox___3VP4c-camelCase>.styles__textRow___331zo-camelCase{height:6vw;bottom:1.25vw;font-size:4vw}.styles__bigBox___3VP4c-camelCase>.styles__shieldContainer___1_J5q-camelCase{width:12vw;height:12vw;font-size:7vw}.styles__bigText___2QcLS-camelCase{border:1vw solid #8a5542;padding:0 1.5vw;border-radius:1vw}}", ""]), t.locals = {
                wrapper: "styles__wrapper___1I06R-camelCase",
                bigBox: "styles__bigBox___3VP4c-camelCase",
                boxButton: "styles__boxButton___FnHsN-camelCase",
                hoverButton: "styles__hoverButton___DaVLa-camelCase",
                fenceContainer: "styles__fenceContainer___RgmdQ-camelCase",
                topWall: "styles__topWall___2ZUYz-camelCase",
                bigTopWall: "styles__bigTopWall___P9C6G-camelCase",
                container: "styles__container___2H3zn-camelCase",
                bigContainer: "styles__bigContainer___15l5Q-camelCase",
                sketchWrapper: "styles__sketchWrapper___1jt8Q-camelCase",
                sketchHolder: "styles__sketchHolder___2YlmT-camelCase",
                sketchCanvas: "styles__sketchCanvas___mMig6-camelCase",
                textRow: "styles__textRow___331zo-camelCase",
                text: "styles__text___3vanS-camelCase",
                shieldContainer: "styles__shieldContainer___1_J5q-camelCase",
                shieldImg: "styles__shieldImg___39zX_-camelCase",
                shieldText: "styles__shieldText___3mCeC-camelCase",
                bigText: "styles__bigText___2QcLS-camelCase"
            }
        },
        "0mtw": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___2YUzp-camelCase{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:15px;margin-bottom:10px;width:calc(100% - 100px);height:50px}.styles__text___3eAOm-camelCase{font-size:35px}.styles__desc___ADK01-camelCase{font-size:14px}.styles__checkBox___33HG3-camelCase{justify-self:flex-end;margin-top:.5px;width:45px;height:45px;display:flex;justify-content:center;align-items:center;border:2px solid #3a3a3a;border-radius:6px;outline:none;cursor:pointer;color:#3a3a3a;background-color:#fff;transition:.2s}.styles__checkIcon___1k9Ow-camelCase{font-size:30px;line-height:45px;margin:auto;width:45px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__checkYes___2M6GY-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___htclD-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}", ""]), t.locals = {
                container: "styles__container___2YUzp-camelCase",
                text: "styles__text___3eAOm-camelCase",
                desc: "styles__desc___ADK01-camelCase",
                checkBox: "styles__checkBox___33HG3-camelCase",
                checkIcon: "styles__checkIcon___1k9Ow-camelCase",
                checkYes: "styles__checkYes___2M6GY-camelCase",
                checkNo: "styles__checkNo___htclD-camelCase"
            }
        },
        "0n6o": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("4HzQ"),
                _ = a("y18I"),
                m = a.n(_),
                d = a("0oXL"),
                f = a("74sb");
            var y = function(e) {
                var t = e.team,
                    a = e.noEnergy,
                    s = e.selected,
                    n = e.onSelect,
                    r = e.canClick;
                return o.a.createElement("div", {
                    className: m.a.teamHolder
                }, o.a.createElement("div", {
                    className: m.a.teamContainer
                }, a ? null : o.a.createElement("div", {
                    className: m.a.energyContainer
                }, o.a.createElement("div", {
                    className: m.a.energyText,
                    style: {
                        letterSpacing: t.energy >= 10 ? "-4px" : "normal"
                    }
                }, t.energy), o.a.createElement("i", {
                    className: i()(m.a.energyIcon, "fas fa-bolt")
                })), o.a.createElement(d.a, {
                    name: t.blook,
                    className: m.a.teamBlook
                }), o.a.createElement("div", {
                    className: m.a.teamText
                }, t.name)), o.a.createElement("div", {
                    className: m.a.teamPlayersContainer
                }, t.players.map((function(e) {
                    return o.a.createElement("div", {
                        className: i()(r ? m.a.playerContainer : m.a.playerContainerNo, (t = {}, a = m.a.selected, l = s === e.name, a in t ? Object.defineProperty(t, a, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[a] = l, t)),
                        key: e.name,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return n(e.name)
                        }
                    }, o.a.createElement(d.a, {
                        name: e.blook,
                        className: m.a.playerBlook
                    }), o.a.createElement(c.Textfit, {
                        className: m.a.playerText,
                        mode: "single",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(f.v)("5vw")
                    }, e.name));
                    var t, a, l
                }))))
            };
            y.propTypes = {
                team: r.a.object,
                noEnergy: r.a.bool,
                selected: r.a.string,
                onSelect: r.a.func,
                canClick: r.a.bool
            }, t.a = y
        },
        "2hgL": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("SHTr"),
                i = a.n(l),
                c = a("0oXL"),
                _ = a("74sb");

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return p(this, a)
                }
            }

            function p(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var h = function(e) {
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
                }(r, e);
                var t, a, s, n = y(r);

                function r(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), t = n.call(this, e);
                    for (var a = [], s = 0; s < Object(_.o)(5, 7); s++) a.push({
                        top: "".concat(Object(_.o)(10, 90), "%"),
                        left: "".concat(Object(_.o)(10, 90), "%"),
                        width: "".concat(Object(_.o)(26, 36), "vh"),
                        animationDuration: "".concat(Object(_.o)(2500, 6e3), "ms"),
                        animationDelay: "".concat(Object(_.o)(1e3, 3e3), "ms"),
                        transform: "translate(-50%, -50%) rotate(".concat(Object(_.o)(-90, 90), "deg)")
                    });
                    return t.state = {
                        blookStylings: a
                    }, t
                }
                return t = r, (a = [{
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: i.a.container
                        }, this.state.blookStylings.map((function(t, a) {
                            return o.a.createElement(c.a, {
                                name: e.props.blook,
                                className: i.a.blook,
                                style: t,
                                key: a
                            })
                        })))
                    }
                }]) && d(t.prototype, a), s && d(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(o.a.Component);
            h.propTypes = {
                blook: r.a.string
            }, t.a = h
        },
        "2qfb": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("OA+j"),
                _ = a.n(c),
                m = a("gvfT"),
                d = a("lWrb");

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return p(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function u(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
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
                    var a, s = C(e);
                    if (t) {
                        var o = C(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return w(this, a)
                }
            }

            function w(e, t) {
                if (t && ("object" === f(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return b(e)
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(a), !0).forEach((function(t) {
                        k(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : v(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function k(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var E = [x({
                    blook: "Chick"
                }, m.c.Chick), "Piggy Bank", x({
                    blook: "Capuchin"
                }, m.c.Capuchin)],
                T = function(e) {
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
                        }), t && h(e, t)
                    }(r, e);
                    var t, a, s, n = g(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = n.call(this, e)).state = {
                            cards: e.isTutorial ? E : Object(m.d)(e.type, 3, e.noArtifacts),
                            flippedArray: [!0, !0, !0],
                            showDeck: !1
                        }, t.hasSelected = !1, t.select = t.select.bind(b(t)), t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = 0;
                            this.flipInterval = setInterval((function() {
                                var a = y(e.state.flippedArray);
                                a[t] = !1, e.setState({
                                    flippedArray: a
                                }), t += 1
                            }), 300)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this.flipInterval)
                        }
                    }, {
                        key: "select",
                        value: function(e) {
                            this.state.flippedArray[2] || this.hasSelected || (this.hasSelected = !0, this.props.onClick(this.state.cards[e]))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                className: _.a.container
                            }, o.a.createElement("div", {
                                className: _.a.header
                            }, "Choose a Card!"), o.a.createElement("div", {
                                className: i()(_.a.cardContainer, this.props.noThird ? _.a.card1Only : _.a.card1),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.select(0)
                                },
                                id: "card1"
                            }, o.a.createElement(d.a, {
                                card: this.state.cards[0],
                                flipped: this.state.flippedArray[0],
                                isArtifact: !this.state.cards[0].blook
                            })), o.a.createElement("div", {
                                className: i()(_.a.cardContainer, this.props.noThird ? _.a.card2Only : _.a.card2),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.select(1)
                                },
                                id: "card2"
                            }, o.a.createElement(d.a, {
                                card: this.state.cards[1],
                                flipped: this.state.flippedArray[1],
                                isArtifact: !this.state.cards[1].blook
                            })), this.props.noThird ? null : o.a.createElement("div", {
                                className: i()(_.a.cardContainer, _.a.card3),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.select(2)
                                },
                                id: "card3"
                            }, o.a.createElement(d.a, {
                                card: this.state.cards[2],
                                flipped: this.state.flippedArray[2],
                                isArtifact: !this.state.cards[2].blook
                            })), this.props.coins ? o.a.createElement("div", {
                                className: _.a.coinsText
                            }, "+".concat(this.props.coins, " Coins")) : null, o.a.createElement("div", {
                                className: _.a.deckButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showDeck: !0
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: i()("fas fa-layer-group", _.a.deckIcon)
                            }), o.a.createElement("div", {
                                className: _.a.deckText
                            }, "View Deck")), this.state.showDeck ? o.a.createElement("div", {
                                className: _.a.deckContainer
                            }, this.props.cards.map((function(e, t) {
                                return o.a.createElement("div", {
                                    className: _.a.deckCardContainer,
                                    key: t
                                }, o.a.createElement(d.a, {
                                    card: e,
                                    flipped: !1,
                                    isArtifact: !e.blook
                                }))
                            })), o.a.createElement("i", {
                                className: i()("fas fa-times", _.a.closeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showDeck: !1
                                    })
                                }
                            })) : null)
                        }
                    }]) && u(t.prototype, a), s && u(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(o.a.Component);
            T.propTypes = {
                type: r.a.string.isRequired,
                onClick: r.a.func,
                coins: r.a.number,
                cards: r.a.array,
                noArtifacts: r.a.bool,
                noThird: r.a.bool,
                isTutorial: r.a.bool
            }, t.a = T
        },
        "3VbC": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("0LBQ"),
                _ = a.n(c),
                m = a("74sb"),
                d = function(e) {
                    var t = e.amount;
                    return o.a.createElement("div", {
                        className: _.a.container
                    }, o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n1)
                    }, o.a.createElement("div", {
                        className: _.a.textInside
                    }, "The goal is to collect as many Blooks as you can")), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n2)
                    }, o.a.createElement("div", {
                        className: _.a.textInside
                    }, "After answering correctly, you can either Attack or Defend")), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n3)
                    }, o.a.createElement("div", {
                        className: _.a.textInside
                    }, "Defending will increase your shields by 1")), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n4)
                    }, o.a.createElement("div", {
                        className: _.a.textInside
                    }, "Attacking will reduce enemy shields by 1")), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n5)
                    }, o.a.createElement("div", {
                        className: _.a.textInside
                    }, "If they have no shields, you'll take one of their Blooks")), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n6)
                    }, o.a.createElement("div", {
                        className: _.a.textInside
                    }, "Most Blooks after ".concat(Object(m.l)(t), " ").concat("1" === t ? "minute" : "minutes", " wins!"))), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n7)
                    }, o.a.createElement("div", {
                        className: _.a.textInside
                    }, "Good Luck!")))
                };
            d.propTypes = {
                amount: r.a.any
            }, t.a = d
        },
        "3lxn": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__containerBig___48wq9-camelCase{width:460px}.styles__container___3SqSB-camelCase,.styles__containerBig___48wq9-camelCase{opacity:1;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:all .25s linear;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__container___3SqSB-camelCase{width:400px}.styles__header___3rdHC-camelCase{font-size:44px;margin:15px 10px 20px}.styles__footer___2XG1Y-camelCase,.styles__header___3rdHC-camelCase{color:#0bc2cf;text-align:center;font-family:Titan One,sans-serif}.styles__footer___2XG1Y-camelCase{font-size:26px;width:90%;margin:0 auto;padding:15px 0 10px}.styles__invisible___1qPEn-camelCase{opacity:0;transition:all .5s linear}@media only screen and (max-width:600px){.styles__container___3SqSB-camelCase,.styles__containerBig___48wq9-camelCase{width:280px}.styles__header___3rdHC-camelCase{font-size:36px}.styles__footer___2XG1Y-camelCase{font-size:24px}}", ""]), t.locals = {
                containerBig: "styles__containerBig___48wq9-camelCase",
                container: "styles__container___3SqSB-camelCase",
                header: "styles__header___3rdHC-camelCase",
                footer: "styles__footer___2XG1Y-camelCase",
                invisible: "styles__invisible___1qPEn-camelCase"
            }
        },
        "4Zpe": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("4HzQ"),
                _ = a("j0Ua"),
                m = a.n(_),
                d = a("Xst1"),
                f = a.n(d),
                y = a("74sb");

            function p(e) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function h(e, t) {
                return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
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
                    var a, s = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return w(this, a)
                }
            }

            function w(e, t) {
                if (t && ("object" === p(t) || "function" == typeof t)) return t;
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
                    }), t && h(e, t)
                }(r, e);
                var t, a, s, n = g(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = n.call(this, e)).state = {
                        time: e.incorrectTime,
                        next: !1
                    }, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.correct ? this.setState({
                            next: !0
                        }) : this.nextInterval = setInterval((function() {
                            var t = e.state.time - 1;
                            t <= 0 ? (e.setState({
                                next: !0
                            }), clearInterval(e.nextInterval)) : e.setState({
                                time: t
                            })
                        }), 1e3)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.nextTimeout), clearInterval(this.nextInterval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: i()(f.a.regularBody, m.a.background),
                            id: "feedbackButton",
                            style: {
                                backgroundColor: this.props.correct ? "#4bc22e" : "#c43a35",
                                cursor: this.state.next ? "pointer" : null
                            },
                            role: "button",
                            tabIndex: 0,
                            onClick: this.state.next ? this.props.onNext : null
                        }, "hacker" === this.props.theme ? o.a.createElement("div", {
                            className: m.a.overlay
                        }) : null, this.props.reward ? o.a.createElement(c.Textfit, {
                            className: m.a.rewardHeader,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: 250
                        }, this.props.reward) : o.a.createElement("div", {
                            className: m.a.header
                        }, this.props.correct ? "CORRECT" : "INCORRECT"), o.a.createElement("div", {
                            className: m.a.container
                        }, o.a.createElement("i", {
                            className: this.props.correct ? "fas fa-check" : "fas fa-times"
                        })), this.props.correct ? null : o.a.createElement("div", {
                            className: m.a.correctAnswers
                        }, "Correct ".concat(this.props.correctAnswers.length > 1 ? "Answers" : "Answer", ": "), Object(y.c)(this.props.correctAnswers, "#fff", 28)), this.state.next || this.state.time && !this.props.correct ? o.a.createElement("div", {
                            className: m.a.nextText,
                            style: {
                                textDecoration: this.state.next ? "underline" : "none"
                            }
                        }, this.state.next ? "Click Anywhere to Go Next" : this.state.time) : null)
                    }
                }]) && u(t.prototype, a), s && u(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(o.a.Component);
            C.propTypes = {
                incorrectTime: r.a.number,
                correctAnswers: r.a.array,
                correct: r.a.bool,
                onNext: r.a.func,
                reward: r.a.string,
                theme: r.a.string
            }, t.a = C
        },
        "5gzV": function(e, t, a) {
            var s = a("Lx4A");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "60T2": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___3e1g7-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;z-index:12}.styles__blook___3tdqO-camelCase{position:absolute;transform:translate(-50%,-50%);animation:styles__fadeOut___3vaSu-camelCase 2s linear 2s forwards}@keyframes styles__fadeOut___3vaSu-camelCase{0%{opacity:1}to{opacity:0}}", ""]), t.locals = {
                container: "styles__container___3e1g7-camelCase",
                blook: "styles__blook___3tdqO-camelCase",
                fadeOut: "styles__fadeOut___3vaSu-camelCase"
            }
        },
        "7t86": function(e, t, a) {
            var s = a("u++o");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "7uOW": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("Ruj+"),
                i = a.n(l),
                c = a("XOuL"),
                _ = function(e) {
                    var t = e.header,
                        a = e.footer,
                        s = e.blook,
                        n = e.transition;
                    return o.a.createElement("div", {
                        className: n ? i.a.invisible : null
                    }, o.a.createElement("div", {
                        className: a ? i.a.containerBig : i.a.container
                    }, o.a.createElement("div", {
                        className: i.a.header
                    }, t), o.a.createElement(c.a, {
                        blook: s
                    }), a ? o.a.createElement("div", {
                        className: i.a.footer
                    }, a) : null))
                };
            _.propTypes = {
                header: r.a.string,
                footer: r.a.string,
                blook: r.a.string,
                transition: r.a.bool
            }, t.a = _
        },
        "9BmH": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___2Gxlh-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.styles__container___2Gxlh-camelCase,.styles__text___1a41k-camelCase{position:absolute}.styles__text___1a41k-camelCase{width:80%;top:50%;left:10%;transform:translateY(-50%);text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:6vw;opacity:0}.styles__n1___2zMcs-camelCase{animation:styles__fadeIn___2_sut-camelCase .15s linear 0ms forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 2.5s forwards}.styles__n2___psMc4-camelCase{animation:styles__fadeIn___2_sut-camelCase .15s linear 2.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 4.5s forwards}.styles__n3___3sfdG-camelCase{animation:styles__fadeIn___2_sut-camelCase .15s linear 4.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 6.5s forwards}.styles__n4___3OOEn-camelCase{animation:styles__fadeIn___2_sut-camelCase .15s linear 6.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 9s forwards}.styles__n5___3aLc8-camelCase{animation:styles__fadeIn___2_sut-camelCase .15s linear 9s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 11.5s forwards}.styles__n6___39Nu0-camelCase{animation:styles__fadeIn___2_sut-camelCase .15s linear 11.5s forwards,styles__fadeOut___2Ni2R-camelCase .15s linear 14s forwards}@keyframes styles__fadeIn___2_sut-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@keyframes styles__fadeOut___2Ni2R-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}", ""]), t.locals = {
                container: "styles__container___2Gxlh-camelCase",
                text: "styles__text___1a41k-camelCase",
                n1: "styles__n1___2zMcs-camelCase",
                fadeIn: "styles__fadeIn___2_sut-camelCase",
                fadeOut: "styles__fadeOut___2Ni2R-camelCase",
                n2: "styles__n2___psMc4-camelCase",
                n3: "styles__n3___3sfdG-camelCase",
                n4: "styles__n4___3OOEn-camelCase",
                n5: "styles__n5___3aLc8-camelCase",
                n6: "styles__n6___39Nu0-camelCase"
            }
        },
        "9TPi": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("L4GU"),
                _ = a.n(c),
                m = a("lmLo");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return u(this, a)
                }
            }

            function u(e, t) {
                if (t && ("object" === d(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return h(e)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var w = function(e) {
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
                }(r, e);
                var t, a, s, n = p(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = n.call(this, e)).state = {
                        step: {},
                        stepNum: 0
                    }, t.waiting = !1, t.lastElement = null, t.lastZIndex = 1, t.lastOnClick = null, t.lastColor = "", t.lastBorderRadius = 0, t.tourModalRef = o.a.createRef(), t.setStep = t.setStep.bind(h(t)), t.endTour = t.endTour.bind(h(t)), t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        this.parentNode = this.tourModalRef.current.parentNode.id, this.setStep(0)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.waitTimeout)
                    }
                }, {
                    key: "setStep",
                    value: function(e) {
                        var t = this;
                        if (!this.waiting || 0 !== e && this.props.steps[e - 1].elementClick)
                            if (this.lastElement && (this.lastElement.style.zIndex = this.lastZIndex, this.lastOnClick && (this.lastElement.onclick = this.lastOnClick, this.lastOnClick = null), this.lastColor && (this.lastElement.style.backgroundColor = this.lastColor, this.lastColor = "", this.lastElement.style.borderRadius = this.lastBorderRadius, this.lastBorderRadius = "")), e >= this.props.steps.length) this.endTour();
                            else {
                                var a = this.props.steps[e];
                                e - 1 >= 0 && void 0 !== this.props.steps[e - 1].functionIndex && (document.getElementById("body").appendChild(document.getElementById("tourModal")), this.props.functions[this.props.steps[e - 1].functionIndex]()), a.elementId ? (this.lastElement = document.getElementById(a.elementId), this.lastZIndex = this.lastElement.style.zIndex, this.lastElement.style.zIndex = 100, this.lastElement.parentNode.appendChild(document.getElementById("tourModal")), a.elementClick && (this.lastOnClick = this.lastElement.onclick, this.lastElement.onclick = function() {
                                    return t.setStep(e + 1)
                                }), a.backgroundColor && (this.lastColor = this.lastElement.style.backgroundColor, this.lastElement.style.backgroundColor = a.backgroundColor, this.lastBorderRadius = this.lastElement.style.borderRadius, this.lastElement.style.borderRadius = "5px")) : document.getElementById("body").appendChild(document.getElementById("tourModal")), this.setState({
                                    step: a,
                                    stepNum: e
                                }, (function() {
                                    t.waiting = !0, t.waitTimeout = setTimeout((function() {
                                        t.waiting = !1
                                    }), 400)
                                }))
                            }
                    }
                }, {
                    key: "endTour",
                    value: function() {
                        document.getElementById(this.parentNode) && document.getElementById(this.parentNode).appendChild(document.getElementById("tourModal")), this.props.onExit()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            id: "tourModal",
                            ref: this.tourModalRef,
                            className: _.a.modal,
                            hidden: !(this.state.step && this.state.step.text)
                        }, this.state.step && this.state.step.text ? o.a.createElement("div", {
                            className: i()(_.a.messageContainer, this.state.step.className)
                        }, o.a.createElement("div", {
                            className: _.a.textRow
                        }, this.state.step.img ? o.a.createElement("img", {
                            src: this.state.step.img,
                            alt: "Step",
                            className: _.a.messageImg,
                            draggable: !1
                        }) : null, this.state.step.text), this.state.step.nextButtonText ? o.a.createElement(m.a, {
                            color: "#0bc2cf",
                            outsideClass: _.a.nextButton,
                            insideClass: _.a.nextButtonInside,
                            onClick: function() {
                                return e.setStep(e.state.stepNum + 1)
                            }
                        }, this.state.step.nextButtonText) : null) : null)
                    }
                }]) && f(t.prototype, a), s && f(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(o.a.Component);
            w.propTypes = {
                steps: r.a.array,
                onExit: r.a.func,
                functions: r.a.array
            }, t.a = w
        },
        "9WQd": function(e, t, a) {
            var s = a("ROpq");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        AYCC: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___1D9RE-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__one___UQTF4-camelCase 7s linear}@keyframes styles__one___UQTF4-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___1-pa4-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__two___3N_St-camelCase 7s linear}@keyframes styles__two___3N_St-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__leftBlook___qQ1hk-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);right:100vw;animation:styles__leftBlook___qQ1hk-camelCase 7s linear}@keyframes styles__leftBlook___qQ1hk-camelCase{0%{right:100vw}25%{right:100vw}30%{right:60vw}92.5%{right:60vw}97.5%{right:140vw}to{right:140vw}}.styles__vsText___2I8md-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:7vw;text-align:center;position:absolute;opacity:0;top:57.5%;left:-50%;transform:translate(-50%,-50%);animation:styles__vsText___2I8md-camelCase 7s linear}@keyframes styles__vsText___2I8md-camelCase{0%{opacity:0;left:50%}25%{opacity:0}30%{opacity:1}92.5%{left:50%}97.5%{left:-50%}to{opacity:1;left:-50%}}.styles__rightBlook___2L1J5-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);left:100vw;animation:styles__rightBlook___2L1J5-camelCase 7s linear}@keyframes styles__rightBlook___2L1J5-camelCase{0%{left:100vw}25%{left:100vw}30%{left:60vw}92.5%{left:60vw}97.5%{left:-40vw}to{left:-40vw}}.styles__headerThree___1S9Iw-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__six___5-YZP-camelCase 7s linear}@keyframes styles__six___5-YZP-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___u_azo-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                headerOne: "styles__headerOne___1D9RE-camelCase",
                one: "styles__one___UQTF4-camelCase",
                headerTwo: "styles__headerTwo___1-pa4-camelCase",
                two: "styles__two___3N_St-camelCase",
                leftBlook: "styles__leftBlook___qQ1hk-camelCase",
                vsText: "styles__vsText___2I8md-camelCase",
                rightBlook: "styles__rightBlook___2L1J5-camelCase",
                headerThree: "styles__headerThree___1S9Iw-camelCase",
                six: "styles__six___5-YZP-camelCase",
                container: "styles__container___u_azo-camelCase"
            }
        },
        CTLQ: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__modal___2Ixqm-camelCase{position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:hidden;background-color:rgba(0,0,0,.6)}.styles__messageContainer___2feZC-camelCase{position:absolute;max-width:280px;width:80%;padding:10px 10px 17px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);display:flex;flex-direction:column;background-color:#fff;border-radius:7px;font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;z-index:110}.styles__messageImg___2c8tp-camelCase{width:15%;margin:auto 4%}.styles__textRow___2FKnb-camelCase{display:flex;flex-direction:row;align-items:center;width:100%}.styles__nextButton___18VHO-camelCase{margin-top:10px;margin-left:auto}.styles__nextButtonInside___1_Tcv-camelCase{height:20px;padding:5px 15px}", ""]), t.locals = {
                modal: "styles__modal___2Ixqm-camelCase",
                messageContainer: "styles__messageContainer___2feZC-camelCase",
                messageImg: "styles__messageImg___2c8tp-camelCase",
                textRow: "styles__textRow___2FKnb-camelCase",
                nextButton: "styles__nextButton___18VHO-camelCase",
                nextButtonInside: "styles__nextButtonInside___1_Tcv-camelCase"
            }
        },
        D5Nu: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("4HzQ"),
                i = a("TSYQ"),
                c = a.n(i),
                _ = a("fSAT"),
                m = a.n(_),
                d = a("74sb"),
                f = function(e) {
                    var t = e.mode;
                    return o.a.createElement("div", {
                        className: m.a.container
                    }, o.a.createElement(l.Textfit, {
                        className: m.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(d.v)("12vw")
                    }, "Royale" === t || "Royale Teams" === t ? "Step Two:" : "Step One:"), o.a.createElement(l.Textfit, {
                        className: m.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(d.v)("10vw")
                    }, "Answer Questions Correctly"), o.a.createElement("div", {
                        className: m.a.answerBox
                    }, o.a.createElement("div", {
                        className: m.a.answerHeader
                    }), o.a.createElement("div", {
                        className: m.a.answerOne
                    }), o.a.createElement("div", {
                        className: m.a.answerTwo
                    }), o.a.createElement("div", {
                        className: m.a.answerThree
                    }), o.a.createElement("div", {
                        className: m.a.answerFour
                    })), o.a.createElement("div", {
                        className: m.a.arrowContainer
                    }, o.a.createElement("i", {
                        className: c()(m.a.arrow, "fas fa-arrow-right")
                    })), o.a.createElement("div", {
                        className: m.a.checkBoxBorder
                    }, o.a.createElement("div", {
                        className: m.a.checkBox
                    }, o.a.createElement("i", {
                        className: c()(m.a.check, "fas fa-check")
                    }))), o.a.createElement(l.Textfit, {
                        className: m.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(d.v)("8vw")
                    }, "Royale" === t ? "Answer Quickly to Beat Your Opponent" : "Royale Teams" === t ? "Incorrect Answers Count For The Maximum Time" : "Random" === t ? "There's No Bonus For Answering Quickly" : "Flex" === t ? "Answer Quickly For Better Point Prizes" : "You Get More Points For Answering Quickly"))
                };
            f.propTypes = {
                mode: r.a.string
            }, t.a = f
        },
        Ec9F: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("4HzQ"),
                i = a("X/4e"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                d = function(e) {
                    var t = e.team;
                    return o.a.createElement("div", {
                        className: c.a.container
                    }, o.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("12vw")
                    }, "Step One:"), o.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("10vw")
                    }, "Prepare"), o.a.createElement(_.a, {
                        name: "Dog",
                        className: c.a.leftBlook
                    }), o.a.createElement("div", {
                        className: c.a.vsText
                    }, "VS"), o.a.createElement(_.a, {
                        name: "Cat",
                        className: c.a.rightBlook
                    }), o.a.createElement(l.Textfit, {
                        className: c.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("8vw")
                    }, "Each Round You'll Be Randomly Matched Up Against ".concat(t ? "A Team" : "Someone")))
                };
            d.propTypes = {
                team: r.a.bool
            }, t.a = d
        },
        Ek9E: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("b69p"),
                i = a("XYmZ"),
                c = a.n(i),
                _ = function(e) {
                    var t = e.title,
                        a = e.val,
                        s = e.max,
                        n = e.onSet;
                    return o.a.createElement("div", {
                        className: c.a.container
                    }, o.a.createElement("div", {
                        className: c.a.text
                    }, t), o.a.createElement("div", {
                        className: c.a.sliderInputContainer
                    }, o.a.createElement(l.a, {
                        axis: "x",
                        x: a,
                        onChange: function(e) {
                            var t = e.x;
                            return n(t)
                        },
                        xmin: 1,
                        xmax: s,
                        styles: {
                            track: {
                                height: 20,
                                width: "75%",
                                borderRadius: 10,
                                marginLeft: 10
                            },
                            active: {
                                backgroundColor: "#0bc2cf",
                                borderRadius: 10
                            },
                            thumb: {
                                height: 35,
                                width: 35,
                                boxShadow: "0 0 8px rgba(0,0,0,.4)",
                                cursor: "pointer"
                            }
                        }
                    }), o.a.createElement("input", {
                        className: c.a.qInput,
                        onChange: function(e) {
                            return n(e.target.value)
                        },
                        value: a,
                        type: "number",
                        min: "1"
                    })))
                };
            _.propTypes = {
                title: r.a.string,
                val: r.a.number,
                max: r.a.number,
                onSet: r.a.func
            }, t.a = _
        },
        Eogo: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("+hd2"),
                _ = a.n(c),
                m = function(e) {
                    var t = e.title,
                        a = e.choices,
                        s = e.selected,
                        n = e.onSelect;
                    return o.a.createElement("div", {
                        className: _.a.container
                    }, o.a.createElement("div", {
                        className: _.a.text
                    }, t), o.a.createElement("div", {
                        className: _.a.choices
                    }, a.map((function(e) {
                        return o.a.createElement("div", {
                            className: i()(_.a.choice, e === s ? _.a.checkYes : _.a.checkNo),
                            role: "button",
                            tabIndex: 0,
                            key: e,
                            onClick: function() {
                                return n(e)
                            }
                        }, o.a.createElement("div", {
                            className: _.a.choiceText
                        }, e))
                    }))))
                };
            m.propTypes = {
                title: r.a.string,
                choices: r.a.array,
                selected: r.a.any,
                onSelect: r.a.func
            }, t.a = m
        },
        EqiX: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("ZtAu"),
                _ = a.n(c),
                m = a("0oXL");
            var d = function(e) {
                var t, a, s, n = e.icon,
                    r = e.blook,
                    l = e.color,
                    c = e.name,
                    d = e.desc,
                    f = e.onYes,
                    y = e.yesText,
                    p = e.onNo,
                    u = e.noLeave;
                return o.a.createElement("div", {
                    className: i()(_.a.container, (t = {}, a = _.a.noLeave, s = u, a in t ? Object.defineProperty(t, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[a] = s, t)),
                    style: {
                        backgroundColor: l
                    }
                }, r ? o.a.createElement(m.a, {
                    name: r,
                    className: _.a.blook
                }) : o.a.createElement("i", {
                    className: i()(n, _.a.icon),
                    style: {
                        color: l
                    }
                }), o.a.createElement("div", {
                    className: _.a.name
                }, c), o.a.createElement("div", {
                    className: _.a.desc
                }, d), f || p ? o.a.createElement("div", {
                    className: _.a.buttonContainer
                }, f ? o.a.createElement("div", {
                    className: _.a.button,
                    role: "button",
                    tabIndex: 0,
                    onClick: f
                }, y || "Yes") : null, p ? o.a.createElement("div", {
                    className: _.a.button,
                    role: "button",
                    tabIndex: 0,
                    onClick: p
                }, "No") : null) : null)
            };
            d.propTypes = {
                icon: r.a.string,
                blook: r.a.string,
                color: r.a.string,
                name: r.a.string,
                desc: r.a.string,
                onYes: r.a.func,
                yesText: r.a.string,
                onNo: r.a.func,
                noLeave: r.a.bool
            }, t.a = d
        },
        GmZ3: function(e, t, a) {
            var s = a("eTNz");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        GxJ0: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("ixhd"),
                i = a.n(l),
                c = a("TSYQ"),
                _ = a.n(c),
                m = a("LHn/"),
                d = a("Y018"),
                f = a("xoUC"),
                y = a("Zyrn"),
                p = a("Nmn4"),
                u = a("CX7I"),
                h = a("iTU4"),
                g = a("5Kqo"),
                w = a("sa6r"),
                b = a("sqp7"),
                C = a("O+AO"),
                v = a("cQOM"),
                x = a("/9rF"),
                k = a("B9yS"),
                E = a("iQGx"),
                T = a("19Ak");

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return B(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return B(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }
            var O = {
                    Classic: {
                        base: "#af705a",
                        top: "#ac6b53",
                        fence: "#c9987a",
                        border: "#8a5542",
                        inside: "#bc815c"
                    },
                    Arctic: {
                        base: "#21a2de",
                        top: "#1e92c8",
                        fence: "#64bee8",
                        border: "#1b82b1",
                        inside: "#37abe1",
                        insideImg: "linear-gradient(#1fa3e0, #7ac7eb)"
                    },
                    Breakfast: {
                        base: "#af705a",
                        top: "#ac6b53",
                        fence: "#c9987a",
                        border: "#8a5542",
                        inside: "#fff",
                        insideImg: "linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%), linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%)",
                        imgSize: "50px 50px"
                    },
                    Space: {
                        base: "#3a3a3a",
                        top: "#333333",
                        fence: "#4d4d4d",
                        border: "#262626",
                        inside: "#404040"
                    },
                    Spooky: {
                        base: "#3a3a3a",
                        top: "#333333",
                        fence: "#e57e25",
                        border: "#e57e25",
                        inside: "#404040"
                    },
                    Aquatic: {
                        base: "#2179ea",
                        top: "#1466d2",
                        fence: "#2a9eea",
                        border: "#1466d2",
                        inside: "#1d86ea"
                    },
                    Medieval: {
                        base: "#99b1b2",
                        top: "#8ba6a7",
                        fence: "#c5d3d3",
                        border: "#8ba7a7",
                        inside: "#99b1b2",
                        insideImg: "url(".concat(m.a.basic.castleTile, ")"),
                        imgSize: "74.5px"
                    },
                    Wonderland: {
                        base: "#7b36b0",
                        top: "#6d309c",
                        fence: "#944fc9",
                        border: "#6d309c",
                        inside: "#9048c6",
                        insideImg: "repeating-linear-gradient(45deg, #9b5acb 25%, transparent 25%, transparent 75%, #9b5acb 75%, #9b5acb), repeating-linear-gradient(45deg, #9b5acb 25%, #9048c6 25%, #9048c6 75%, #9b5acb 75%, #9b5acb)",
                        imgSize: "40px 40px",
                        imgPosition: "0 0, 20px 20px"
                    },
                    Bots: {
                        base: "#999999",
                        top: "#8c8c8c",
                        fence: "#bfbfbf",
                        border: "#808080",
                        inside: "#b3b3b3",
                        insideImg: "linear-gradient(#808080 1px, transparent 1px), linear-gradient(to right, #808080 1px, #b3b3b3 1px)",
                        imgSize: "20px 20px"
                    },
                    Forest: {
                        base: "#2d8659",
                        top: "#26734d",
                        fence: "#39ac73",
                        border: "#26734d",
                        inside: "#339966"
                    },
                    Pets: {
                        base: "#cc0000",
                        top: "#b30000",
                        fence: "#ff0000",
                        border: "#b30000",
                        inside: "#ffdd99"
                    },
                    Tropical: {
                        base: "#228062",
                        top: "#02745e",
                        fence: "#46925a",
                        border: "#02745e",
                        inside: "#195d84"
                    },
                    Safari: {
                        base: "#b89261",
                        top: "#b0864f",
                        fence: "#7b5e37",
                        border: "#9e7947",
                        inside: "#c6a880"
                    },
                    Dinos: {
                        base: "#947438",
                        top: "#816531",
                        fence: "#af8942",
                        border: "#816531",
                        inside: "#ead49a",
                        insideImg: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.2)), url(".concat(m.a.dino.paperTexture, ")")
                    },
                    "Ice Monster": {
                        base: "#1a4c5e",
                        top: "#10303c",
                        fence: "#216178",
                        border: "#10303c",
                        inside: "#1a4c5e",
                        insideImg: "url(".concat(m.a.basic.snowTile, ")"),
                        imgSize: "300px"
                    }
                },
                I = a("Skqv"),
                S = a.n(I),
                j = a("74sb"),
                z = a("mkC0");

            function P(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            var R = function() {
                function e(t, a, s, o) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.p5 = o, this.pos = o.createVector(Object(j.n)(.22 * t, .75 * t), Object(j.n)(.25 * a, .75 * a)), this.vel = o.createVector(0, 0), this.img = o.loadImage(z.a[s]), this.speed = Object(j.n)(1, 3), this.onCreate(t, a)
                }
                var t, a, s;
                return t = e, (a = [{
                    key: "draw",
                    value: function(e) {
                        this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, e, 1.15 * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop()
                    }
                }, {
                    key: "pxSpeed",
                    value: function(e) {
                        return this.speed * e / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var a = Math.max(e / 5, 30),
                            s = a / 2,
                            o = 1.15 * a / 2;
                        this.pos.x - s < 0 && (this.vel.x = Math.abs(this.vel.x)), this.pos.x + s > e && (this.vel.x = -Math.abs(this.vel.x)), this.pos.y - o < 0 && (this.vel.y = Math.abs(this.vel.y)), this.pos.y + o > t && (this.vel.y = -Math.abs(this.vel.y));
                        var n = this.pxSpeed(a),
                            r = this.vel.normalize();
                        this.vel = this.p5.createVector(r.x * n, r.y * n), this.pos.add(this.vel), this.draw(a)
                    }
                }, {
                    key: "onCreate",
                    value: function(e, t) {
                        var a = 0,
                            s = Object(j.n)(0, t);
                        0 === Object(j.o)(0, 2) && (a = Object(j.n)(0, e), s = 0);
                        var o = this.p5.createVector(a, s).sub(this.pos).normalize();
                        this.vel = o.mult(this.speed)
                    }
                }]) && P(t.prototype, a), s && P(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

            function M(e) {
                return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function A(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function H(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function F(e, t) {
                return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Q(e) {
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
                    var a, s = W(e);
                    if (t) {
                        var o = W(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return L(this, a)
                }
            }

            function L(e, t) {
                if (t && ("object" === M(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Y(e)
            }

            function Y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function W(e) {
                return (W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var D = function(e) {
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
                    }), t && F(e, t)
                }(r, e);
                var t, a, s, n = Q(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = n.call(this, e)).state = {}, t.p5 = null, t.canvasParentRef = null, t.blooks = [], t.setup = t.setup.bind(Y(t)), t.draw = t.draw.bind(Y(t)), t
                }
                return t = r, (a = [{
                    key: "setup",
                    value: function(e, t) {
                        if (t) {
                            this.p5 = e, this.canvasParentRef = t, this.canvasParentRef.className = S.a.sketchHolder;
                            var a = e.createCanvas(t.offsetWidth, t.offsetHeight);
                            a.canvas.className = S.a.sketchCanvas, a.parent(t), this.p5.frameRate(40)
                        }
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        for (e.clear(); this.blooks.length < this.props.numBlooks;) this.blooks.push(new R(this.canvasParentRef.offsetWidth, this.canvasParentRef.offsetHeight, this.props.blook, e));
                        for (; this.blooks.length > this.props.numBlooks;) this.blooks.pop();
                        for (var t = this.blooks.length - 1; t >= 0; t--) this.blooks[t].update(this.canvasParentRef.offsetWidth, this.canvasParentRef.offsetHeight)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, a = (t = this.props.blook, [].concat(N(Object.keys(d.a)), N(Object.keys(f.a))).includes(t) ? "Arctic" : Object.keys(y.a).includes(t) ? "Breakfast" : Object.keys(p.a).includes(t) ? "Space" : Object.keys(u.a).includes(t) ? "Spooky" : Object.keys(h.a).includes(t) ? "Aquatic" : Object.keys(g.a).includes(t) ? "Medieval" : Object.keys(w.a).includes(t) ? "Wonderland" : Object.keys(b.a).includes(t) ? "Bots" : Object.keys(C.a).includes(t) ? "Forest" : Object.keys(v.a).includes(t) ? "Pets" : Object.keys(x.a).includes(t) ? "Tropical" : Object.keys(k.a).includes(t) ? "Safari" : Object.keys(E.a).includes(t) ? "Dinos" : Object.keys(T.a).includes(t) ? "Ice Monster" : "Classic");
                        return o.a.createElement("div", {
                            className: _()(S.a.wrapper, (e = {}, A(e, S.a.bigBox, this.props.bigBox), A(e, S.a.boxButton, this.props.onClick), A(e, S.a.hoverButton, !this.props.letMove && this.props.onClick), e)),
                            style: {
                                backgroundColor: O[a].base
                            },
                            role: "button",
                            tabIndex: 0,
                            onClick: this.props.onClick
                        }, o.a.createElement("div", {
                            className: S.a.fenceContainer,
                            style: {
                                backgroundColor: O[a].fence
                            }
                        }, o.a.createElement("div", {
                            className: _()(S.a.topWall, A({}, S.a.bigTopWall, this.props.bigBox)),
                            style: {
                                backgroundColor: O[a].top
                            }
                        }), o.a.createElement("div", {
                            className: _()(S.a.container, A({}, S.a.bigContainer, this.props.bigBox)),
                            style: {
                                backgroundColor: O[a].inside,
                                backgroundImage: O[a].insideImg,
                                backgroundSize: O[a].imgSize,
                                backgroundPosition: O[a].imgPosition
                            }
                        }, o.a.createElement("div", {
                            className: S.a.sketchWrapper
                        }, o.a.createElement(i.a, {
                            setup: this.setup,
                            draw: this.draw
                        })))), o.a.createElement("div", {
                            className: S.a.textRow
                        }, o.a.createElement("div", {
                            className: _()(S.a.text, A({}, S.a.bigText, this.props.bigBox)),
                            style: {
                                borderColor: O[a].border
                            }
                        }, this.props.name), o.a.createElement("div", {
                            className: _()(S.a.text, A({}, S.a.bigText, this.props.bigBox)),
                            style: {
                                borderColor: O[a].border
                            }
                        }, this.props.numBlooks)), void 0 !== this.props.numDefense ? o.a.createElement("div", {
                            className: S.a.shieldContainer
                        }, o.a.createElement("img", {
                            src: m.a.basic.shield,
                            alt: "Shield",
                            className: S.a.shieldImg,
                            draggable: !1
                        }), o.a.createElement("div", {
                            className: S.a.shieldText
                        }, this.props.numDefense)) : null)
                    }
                }]) && H(t.prototype, a), s && H(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(o.a.Component);
            D.propTypes = {
                name: r.a.string,
                blook: r.a.string,
                numBlooks: r.a.number,
                numDefense: r.a.number,
                bigBox: r.a.bool,
                letMove: r.a.bool,
                onClick: r.a.func
            };
            t.a = D
        },
        Hq7Z: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___2_kIV-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__one___1SLJK-camelCase 8s linear}@keyframes styles__one___1SLJK-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___1sGw1-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__two___375r6-camelCase 8s linear}@keyframes styles__two___375r6-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__blookOne___2tbGF-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;animation:styles__blookOne___2tbGF-camelCase 8s linear}@keyframes styles__blookOne___2tbGF-camelCase{0%{left:100vw}25%{left:100vw}40%{left:4.5vw}55%{opacity:1}60%{opacity:0}to{left:4.5vw;opacity:0}}.styles__blookTwo___39B3h-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;animation:styles__blookTwo___39B3h-camelCase 8s linear}@keyframes styles__blookTwo___39B3h-camelCase{0%{left:100vw}25%{left:100vw}37.5%{left:23.5vw}92.5%{left:23.5vw}97.5%{left:-15vw}to{left:-15vw}}.styles__blookThree___1FsiH-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;animation:styles__blookThree___1FsiH-camelCase 8s linear}@keyframes styles__blookThree___1FsiH-camelCase{0%{left:100vw}25%{left:100vw}35%{left:42.5vw}65%{opacity:1}70%{opacity:0}to{left:42.5vw;opacity:0}}.styles__blookFour___FJrBH-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;animation:styles__blookFour___FJrBH-camelCase 8s linear}@keyframes styles__blookFour___FJrBH-camelCase{0%{left:100vw}25%{left:100vw}32.5%{left:61.5vw}60%{opacity:1}65%{opacity:0}to{left:61.5vw;opacity:0}}.styles__blookFive___29u6I-camelCase{width:15vw;height:17.25vw;position:absolute;top:calc(60% - 8.625vw);left:100vw;animation:styles__blookFive___29u6I-camelCase 8s linear}@keyframes styles__blookFive___29u6I-camelCase{0%{left:100vw}25%{left:100vw}30%{left:80.5vw}70%{opacity:1}75%{opacity:0}to{left:80.5vw;opacity:0}}.styles__headerThree___3MhE8-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__six___1vXn7-camelCase 8s linear}@keyframes styles__six___1vXn7-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___1l_Bo-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                headerOne: "styles__headerOne___2_kIV-camelCase",
                one: "styles__one___1SLJK-camelCase",
                headerTwo: "styles__headerTwo___1sGw1-camelCase",
                two: "styles__two___375r6-camelCase",
                blookOne: "styles__blookOne___2tbGF-camelCase",
                blookTwo: "styles__blookTwo___39B3h-camelCase",
                blookThree: "styles__blookThree___1FsiH-camelCase",
                blookFour: "styles__blookFour___FJrBH-camelCase",
                blookFive: "styles__blookFive___29u6I-camelCase",
                headerThree: "styles__headerThree___3MhE8-camelCase",
                six: "styles__six___1vXn7-camelCase",
                container: "styles__container___1l_Bo-camelCase"
            }
        },
        IGEA: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___2daxi-camelCase{font-size:44px;top:12.5%;left:50%;transform:translateX(-50%)}.styles__header___2daxi-camelCase,.styles__rewardHeader___B9UyO-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;font-family:Titan One,sans-serif;opacity:0;animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards}.styles__rewardHeader___B9UyO-camelCase{top:7.5%;left:5%;width:90%;height:30%;display:flex;justify-content:center;align-items:center}.styles__container___1-bHf-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px;animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards}.styles__container___1-bHf-camelCase,.styles__correctAnswers___2G7Wf-camelCase{text-align:center;position:absolute;color:#fff;opacity:0}.styles__correctAnswers___2G7Wf-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;bottom:20%;left:15%;width:70%;font-family:Nunito,sans-serif;display:flex;flex-flow:row wrap;align-items:center;justify-content:center;animation:styles__fadeIn___q5EEU-camelCase .3s linear 1.3s forwards}.styles__background___2GulD-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;animation:styles__fadeIn___q5EEU-camelCase .3s linear 0s forwards}.styles__nextText___2QnHA-camelCase{font-size:26px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;bottom:5%;left:7.5%;width:85%;font-family:Nunito,sans-serif;font-weight:700;opacity:0;animation:styles__fadeIn___q5EEU-camelCase .3s linear .3s forwards}.styles__overlay___19SSf-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}@keyframes styles__fadeIn___q5EEU-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__nextText___2QnHA-camelCase{font-size:22px}}", ""]), t.locals = {
                header: "styles__header___2daxi-camelCase",
                rewardHeader: "styles__rewardHeader___B9UyO-camelCase",
                fadeIn: "styles__fadeIn___q5EEU-camelCase",
                container: "styles__container___1-bHf-camelCase",
                correctAnswers: "styles__correctAnswers___2G7Wf-camelCase",
                background: "styles__background___2GulD-camelCase",
                nextText: "styles__nextText___2QnHA-camelCase",
                overlay: "styles__overlay___19SSf-camelCase"
            }
        },
        JP1n: function(e, t, a) {
            var s = a("0mtw");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        JyFv: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("jIL8"),
                i = a.n(l);

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(e, t) {
                if (t && ("object" === c(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var p = function() {
                    var e, t = 0;

                    function a(e, t, a, s, o) {
                        this.size = e, this.x = t, this.y = a, this.vx = s, this.vy = o, this.div = document.createElement("div"), this.div.classList.add(i.a.snowflake), this.div.style.width = "".concat(this.size, "px"), this.div.style.height = "".concat(this.size, "px")
                    }

                    function s() {
                        for (var t = e.length; t--;) {
                            var a = e[t];
                            a.move(), a.draw()
                        }
                        window.requestAnimationFrame(s)
                    }
                    return a.prototype.move = function() {
                        this.x += this.vx + Math.min(Math.max(t, -10), 10), this.y += this.vy, this.x > window.innerWidth + this.size && (this.x -= window.innerWidth + this.size), this.x < -this.size && (this.x += window.innerWidth + this.size), this.y > window.innerHeight + this.size && (this.x = Math.random() * window.innerWidth, this.y -= window.innerHeight + 2 * this.size)
                    }, a.prototype.draw = function() {
                        var e = "translate3d(".concat(this.x, "px, ").concat(this.y, "px, 0)");
                        this.div.style.transform = e, this.div.style.MozTransform = e, this.div.style.webkitTransform = e
                    }, a.init = function(o, n) {
                        e = [];
                        for (var r = n; r--;) {
                            var l = 12 * (Math.random() + .2) + 1,
                                i = new a(l, Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() - .5, .3 * l);
                            o.appendChild(i.div), e.push(i)
                        }
                        window.ondeviceorientation = function(e) {
                            e && (t = e.gamma / 10)
                        }, s()
                    }, a
                }(),
                u = function(e) {
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
                    var t, a, s, n = d(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = n.call(this, e)).state = {}, t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.startTimeout = setTimeout((function() {
                                p.init(document.getElementById("snow"), e.props.count)
                            }), 500)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.startTimeout)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.a.createElement("div", {
                                id: "snow",
                                className: i.a.snow,
                                style: {
                                    zIndex: this.props.zIndex
                                }
                            })
                        }
                    }]) && _(t.prototype, a), s && _(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(o.a.Component);
            u.propTypes = {
                zIndex: r.a.number,
                count: r.a.number
            }, t.a = u
        },
        L4GU: function(e, t, a) {
            var s = a("CTLQ");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        Lx4A: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___iJHm8-camelCase{width:100%;background-color:#2705ab;overflow:hidden}.styles__background___iJHm8-camelCase,.styles__rightBackground___1MlHs-camelCase{position:absolute;height:100%}.styles__rightBackground___1MlHs-camelCase{width:57%;right:0;background-color:#fe6f45;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 76%,27% 59%,12% 40%,12% 37%,16% 37%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 76%,27% 59%,12% 40%,12% 37%,16% 37%);opacity:0;animation:styles__vs___2UQ3M-camelCase .5s 1.5s forwards}.styles__backgroundOverlay___30oLa-camelCase{width:130%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:1;mix-blend-mode:overlay}.styles__lightningTop___2HGFQ-camelCase{height:40%;position:absolute;top:-101%;left:47%;transform:translateX(-50%);animation:styles__lightDown___28I2j-camelCase 1s ease .75s forwards}@keyframes styles__lightDown___28I2j-camelCase{0%{top:-101%}to{top:-1%}}.styles__lightningBottom___1BQHj-camelCase{height:82%;position:absolute;bottom:-107%;left:50%;transform:translateX(-50%);animation:styles__lightUp___2AohX-camelCase 1s ease .75s forwards}@keyframes styles__lightUp___2AohX-camelCase{0%{bottom:-107%}to{bottom:-7%}}.styles__vs___2UQ3M-camelCase{position:absolute;top:50%;left:51%;transform:translate(-50%,-50%);width:14%;opacity:0;animation:styles__vs___2UQ3M-camelCase .5s 1.5s forwards}@keyframes styles__vs___2UQ3M-camelCase{0%{opacity:0}to{opacity:1}}.styles__numText___Jq-cI-camelCase{position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);width:14%}.styles__leftBlook___3dmVL-camelCase,.styles__leftBlookShadow1___z5rQ0-camelCase,.styles__leftBlookShadow2___2DRl_-camelCase,.styles__leftBlookShadow3___o4trU-camelCase{width:17%;position:absolute;top:55%;left:-80%;animation:styles__slideInLeft___3ZQsq-camelCase 1s ease .25s forwards}.styles__leftBlook___3dmVL-camelCase{transform:translate(-50%,-50%) rotate(-10deg)}.styles__leftBlookShadow1___z5rQ0-camelCase{transform:translate(-50%,-50%) translate(-7px,-7px) rotate(-10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__leftBlookShadow2___2DRl_-camelCase{transform:translate(-50%,-50%) translate(-35px,-35px) rotate(-10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__leftBlookShadow3___o4trU-camelCase{transform:translate(-55%,-60%) rotate(-10deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%);animation:styles__slideInLeft___3ZQsq-camelCase 1s ease .5s forwards}@keyframes styles__slideInLeft___3ZQsq-camelCase{0%{left:-80%}to{left:20%}}.styles__leftEnergyContainer___3o_YW-camelCase{position:absolute;bottom:-100%;left:0;width:30%;height:25%;display:flex;flex-direction:row;align-items:center;justify-content:flex-end;transform:rotate(5deg);animation:styles__slideUp___2FVnm-camelCase 1s ease .5s forwards}@keyframes styles__slideUp___2FVnm-camelCase{0%{bottom:-100%}to{bottom:0}}.styles__leftEnergyBar___3HQ8Z-camelCase{position:absolute;transform:rotateY(180deg) translateX(2%);width:100%;z-index:-1}.styles__leftEnergyBolt___2zRoz-camelCase{width:18%;margin-right:1vw}.styles__leftEnergy___1XTrK-camelCase{width:13%;margin:0 -.5vw;transform:rotateY(180deg) translateY(-7%)}.styles__leftNameplate___2pIMB-camelCase{width:30%;position:absolute;top:-85%;left:-2%;transform:rotate(5deg) translateY(-50%);animation:styles__slideDown___1BhYU-camelCase 1s ease .5s forwards}@keyframes styles__slideDown___1BhYU-camelCase{0%{top:-85%}to{top:15%}}.styles__leftName___1yVwZ-camelCase{position:absolute;top:-86%;left:1.5%;width:21vw;height:10vh;transform:rotate(5deg) translateY(-50%);color:#fff;font-family:Titan One,sans-serif;display:flex;justify-content:center;align-items:center;text-shadow:5px 5px rgba(0,0,0,.25);animation:styles__slideDown2___3A8QH-camelCase 1s ease .5s forwards}@keyframes styles__slideDown2___3A8QH-camelCase{0%{top:-86%}to{top:14%}}.styles__rightBlook___3wMbl-camelCase,.styles__rightBlookShadow1___3EuAf-camelCase,.styles__rightBlookShadow2___2_SxU-camelCase,.styles__rightBlookShadow3___2zMg0-camelCase{width:17%;position:absolute;top:55%;right:-80%;animation:styles__slideInRight___1KE7c-camelCase 1s ease .25s forwards}.styles__rightBlook___3wMbl-camelCase{transform:translate(50%,-50%) rotate(10deg)}.styles__rightBlookShadow1___3EuAf-camelCase{transform:translate(50%,-50%) translate(7px,-7px) rotate(10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__rightBlookShadow2___2_SxU-camelCase{transform:translate(50%,-50%) translate(35px,-35px) rotate(10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__rightBlookShadow3___2zMg0-camelCase{transform:translate(55%,-60%) rotate(10deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%);animation:styles__slideInRight___1KE7c-camelCase 1s ease .5s forwards}@keyframes styles__slideInRight___1KE7c-camelCase{0%{right:-80%}to{right:20%}}.styles__rightNameplate___35gSa-camelCase{width:30%;position:absolute;top:-85%;right:-2%;transform:rotate(-5deg) translateY(-50%);animation:styles__slideDown___1BhYU-camelCase 1s ease .5s forwards}.styles__rightName___K8CAu-camelCase{top:-86%;right:1.5%;width:21vw;height:10vh;transform:rotate(-5deg) translateY(-50%);color:#fff;font-family:Titan One,sans-serif;justify-content:center;text-shadow:5px 5px rgba(0,0,0,.25);animation:styles__slideDown2___3A8QH-camelCase 1s ease .5s forwards}.styles__rightEnergyContainer___ZrFU2-camelCase,.styles__rightName___K8CAu-camelCase{position:absolute;display:flex;align-items:center}.styles__rightEnergyContainer___ZrFU2-camelCase{bottom:-100%;right:0;width:30%;height:25%;flex-direction:row;justify-content:flex-start;transform:rotate(-5deg);animation:styles__slideUp___2FVnm-camelCase 1s ease .5s forwards}.styles__rightEnergyBar___1-o1j-camelCase{position:absolute;transform:translateX(2%);width:100%;z-index:-1}.styles__rightEnergyBolt___GsfCS-camelCase{width:18%;margin-left:1vw}.styles__rightEnergy___euKt3-camelCase{width:13%;margin:0 -.5vw;transform:translateY(-7%)}@media only screen and (max-width:1050px){.styles__rightBackground___1MlHs-camelCase{width:100%;height:50%;bottom:0;-webkit-clip-path:none;clip-path:none;opacity:1;animation:none}.styles__backgroundOverlay___30oLa-camelCase{width:unset;height:130%}.styles__lightningBottom___1BQHj-camelCase,.styles__lightningTop___2HGFQ-camelCase{opacity:0}.styles__vs___2UQ3M-camelCase{position:absolute;top:50%;left:51%;transform:translate(-50%,-50%) scale(0);width:34%;max-width:200px;opacity:1;animation:styles__vs___2UQ3M-camelCase .5s 1s forwards}@keyframes styles__vs___2UQ3M-camelCase{0%{transform:translate(-50%,-50%) scale(0)}to{transform:translate(-50%,-50%) scale(1)}}.styles__numText___Jq-cI-camelCase{top:50%;width:30%;max-width:140px}.styles__leftNameplate___2pIMB-camelCase{width:60%;top:10%;left:-102%;transform:rotate(5deg) translateY(-50%)}@keyframes styles__slideDown___1BhYU-camelCase{0%{left:-102%}to{left:-2%}}.styles__leftName___1yVwZ-camelCase{top:10%;left:-101.5%;width:51vw;height:5vh;transform:rotate(5deg) translateY(-50%)}@keyframes styles__slideDown2___3A8QH-camelCase{0%{left:-101.5%}to{left:1.5%}}.styles__leftBlook___3dmVL-camelCase,.styles__leftBlookShadow1___z5rQ0-camelCase,.styles__leftBlookShadow2___2DRl_-camelCase,.styles__leftBlookShadow3___o4trU-camelCase{width:30%;top:27%;left:-30%}.styles__leftBlookShadow1___z5rQ0-camelCase{transform:translate(-50%,-50%) translate(-3px,-3px) rotate(-10deg)}.styles__leftBlookShadow2___2DRl_-camelCase{transform:translate(-50%,-50%) translate(-10px,-10px) rotate(-10deg)}.styles__leftBlookShadow3___o4trU-camelCase{transform:translate(-55%,-65%) rotate(-10deg) scale(1.6)}@keyframes styles__slideInLeft___3ZQsq-camelCase{0%{left:-30%}to{left:70%}}.styles__leftEnergyContainer___3o_YW-camelCase{bottom:60%;left:-100%;width:40%;height:10%}@keyframes styles__slideUp___2FVnm-camelCase{0%{left:-100%}to{left:0}}.styles__leftEnergy___1XTrK-camelCase{width:11%;margin:0 -.6vw;transform:rotateY(180deg) translateY(-9%)}.styles__rightBlook___3wMbl-camelCase,.styles__rightBlookShadow1___3EuAf-camelCase,.styles__rightBlookShadow2___2_SxU-camelCase,.styles__rightBlookShadow3___2zMg0-camelCase{width:30%;top:73%;right:-30%}.styles__rightBlookShadow1___3EuAf-camelCase{transform:translate(50%,-50%) translate(3px,-3px) rotate(10deg)}.styles__rightBlookShadow2___2_SxU-camelCase{transform:translate(50%,-50%) translate(10px,-10px) rotate(10deg)}.styles__rightBlookShadow3___2zMg0-camelCase{transform:translate(55%,-60%) rotate(10deg) scale(1.6)}@keyframes styles__slideInRight___1KE7c-camelCase{0%{right:-30%}to{right:70%}}.styles__rightNameplate___35gSa-camelCase{width:60%;top:90%;right:-102%;transform:rotate(-5deg) translateY(-50%);animation:styles__slideDown-2___3eg5l-camelCase 1s ease .5s forwards}@keyframes styles__slideDown-2___3eg5l-camelCase{0%{right:-102%}to{right:-2%}}.styles__rightName___K8CAu-camelCase{top:90%;right:-101.5%;width:51vw;height:5vh;animation:styles__slideDown2-2___2Sd9X-camelCase 1s ease .5s forwards}@keyframes styles__slideDown2-2___2Sd9X-camelCase{0%{right:-101.5%}to{right:1.5%}}.styles__rightEnergyContainer___ZrFU2-camelCase{bottom:30%;right:-100%;width:40%;height:10%;animation:styles__slideUp-2___3Xyfb-camelCase 1s ease .5s forwards}@keyframes styles__slideUp-2___3Xyfb-camelCase{0%{right:-100%}to{right:0}}.styles__rightEnergy___euKt3-camelCase{width:11%;margin:0 -.6vw;transform:translateY(-9%)}}", ""]), t.locals = {
                background: "styles__background___iJHm8-camelCase",
                rightBackground: "styles__rightBackground___1MlHs-camelCase",
                vs: "styles__vs___2UQ3M-camelCase",
                backgroundOverlay: "styles__backgroundOverlay___30oLa-camelCase",
                lightningTop: "styles__lightningTop___2HGFQ-camelCase",
                lightDown: "styles__lightDown___28I2j-camelCase",
                lightningBottom: "styles__lightningBottom___1BQHj-camelCase",
                lightUp: "styles__lightUp___2AohX-camelCase",
                numText: "styles__numText___Jq-cI-camelCase",
                leftBlook: "styles__leftBlook___3dmVL-camelCase",
                leftBlookShadow1: "styles__leftBlookShadow1___z5rQ0-camelCase",
                leftBlookShadow2: "styles__leftBlookShadow2___2DRl_-camelCase",
                leftBlookShadow3: "styles__leftBlookShadow3___o4trU-camelCase",
                slideInLeft: "styles__slideInLeft___3ZQsq-camelCase",
                leftEnergyContainer: "styles__leftEnergyContainer___3o_YW-camelCase",
                slideUp: "styles__slideUp___2FVnm-camelCase",
                leftEnergyBar: "styles__leftEnergyBar___3HQ8Z-camelCase",
                leftEnergyBolt: "styles__leftEnergyBolt___2zRoz-camelCase",
                leftEnergy: "styles__leftEnergy___1XTrK-camelCase",
                leftNameplate: "styles__leftNameplate___2pIMB-camelCase",
                slideDown: "styles__slideDown___1BhYU-camelCase",
                leftName: "styles__leftName___1yVwZ-camelCase",
                slideDown2: "styles__slideDown2___3A8QH-camelCase",
                rightBlook: "styles__rightBlook___3wMbl-camelCase",
                rightBlookShadow1: "styles__rightBlookShadow1___3EuAf-camelCase",
                rightBlookShadow2: "styles__rightBlookShadow2___2_SxU-camelCase",
                rightBlookShadow3: "styles__rightBlookShadow3___2zMg0-camelCase",
                slideInRight: "styles__slideInRight___1KE7c-camelCase",
                rightNameplate: "styles__rightNameplate___35gSa-camelCase",
                rightName: "styles__rightName___K8CAu-camelCase",
                rightEnergyContainer: "styles__rightEnergyContainer___ZrFU2-camelCase",
                rightEnergyBar: "styles__rightEnergyBar___1-o1j-camelCase",
                rightEnergyBolt: "styles__rightEnergyBolt___GsfCS-camelCase",
                rightEnergy: "styles__rightEnergy___euKt3-camelCase",
                "slideDown-2": "styles__slideDown-2___3eg5l-camelCase",
                "slideDown2-2": "styles__slideDown2-2___2Sd9X-camelCase",
                "slideUp-2": "styles__slideUp-2___3Xyfb-camelCase"
            }
        },
        NZV8: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__snowflake___2ZPyL-camelCase{display:block;position:absolute;border-radius:50%;transform:translateZ(0);-webkit-user-select:none;-moz-user-select:none;user-select:none;background:radial-gradient(circle farthest-corner,#fff 40%,hsla(0,0%,100%,0) 100%);opacity:0;animation:styles__fadeIn___2UF_k-camelCase .2s linear 0ms forwards}@keyframes styles__fadeIn___2UF_k-camelCase{0%{opacity:0}to{opacity:1}}.styles__snow___2FzYe-camelCase{position:absolute;height:100%;width:100%;top:0;left:0;overflow:hidden;pointer-events:none}", ""]), t.locals = {
                snowflake: "styles__snowflake___2ZPyL-camelCase",
                fadeIn: "styles__fadeIn___2UF_k-camelCase",
                snow: "styles__snow___2FzYe-camelCase"
            }
        },
        NieF: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___zdR87-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:10;animation:styles__inAndOut___tutcD-camelCase 5.9s forwards}@keyframes styles__inAndOut___tutcD-camelCase{0%{transform:scale(0)}6%{transform:scale(1)}94%{transform:scale(1)}to{transform:scale(0)}}.styles__noLeave___9CGEe-camelCase{animation:styles__justIn___mJRJm-camelCase 354ms forwards}@keyframes styles__justIn___mJRJm-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__blook___1fFTe-camelCase,.styles__icon___3P4Br-camelCase{width:20vw;margin-bottom:5vh}.styles__icon___3P4Br-camelCase{height:20vw;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-size:11vw}.styles__name___3VGbA-camelCase{font-family:Titan One,sans-serif;font-size:5vw;margin:0 auto}.styles__desc___Zd8LL-camelCase,.styles__name___3VGbA-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;width:90%}.styles__desc___Zd8LL-camelCase{font-family:Nunito,sans-serif;font-size:2.5vw;margin:2px auto}.styles__buttonContainer___3gKiQ-camelCase{width:90%;max-width:500px;flex-flow:row wrap;justify-content:space-evenly;margin:15px auto}.styles__button___Xdeg4-camelCase,.styles__buttonContainer___3gKiQ-camelCase{display:flex;align-items:center}.styles__button___Xdeg4-camelCase{width:180px;height:60px;background-color:#fff;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-size:32px;color:#3a3a3a;font-family:Nunito,sans-serif;justify-content:center;margin:10px;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__button___Xdeg4-camelCase:hover{transform:scale(.95)}@media only screen and (max-width:800px){.styles__blook___1fFTe-camelCase,.styles__icon___3P4Br-camelCase{width:40vw}.styles__icon___3P4Br-camelCase{height:40vw;font-size:22vw}.styles__name___3VGbA-camelCase{font-size:10vw}.styles__desc___Zd8LL-camelCase{font-size:5vw}.styles__button___Xdeg4-camelCase{width:120px;height:40px;font-size:24px}}", ""]), t.locals = {
                container: "styles__container___zdR87-camelCase",
                inAndOut: "styles__inAndOut___tutcD-camelCase",
                noLeave: "styles__noLeave___9CGEe-camelCase",
                justIn: "styles__justIn___mJRJm-camelCase",
                blook: "styles__blook___1fFTe-camelCase",
                icon: "styles__icon___3P4Br-camelCase",
                name: "styles__name___3VGbA-camelCase",
                desc: "styles__desc___Zd8LL-camelCase",
                buttonContainer: "styles__buttonContainer___3gKiQ-camelCase",
                button: "styles__button___Xdeg4-camelCase"
            }
        },
        "O/BK": function(e, t, a) {
            var s = a("qRUB");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "OA+j": function(e, t, a) {
            var s = a("QoYg");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        PmgH: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___1EwST-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;background:repeating-linear-gradient(45deg,transparent,transparent 12vw,#e6e6e6 0,#e6e6e6 24vw)}.styles__container___1EwST-camelCase,.styles__text___1GXXO-camelCase{position:absolute}.styles__text___1GXXO-camelCase{width:80%;top:50%;left:10%;text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:5.5vw;border-radius:10px;opacity:0}.styles__text___1GXXO-camelCase,.styles__textInside___1iRa8-camelCase{background-color:#36c}.styles__textInside___1iRa8-camelCase{border:5px solid #fff;margin:10px;width:calc(100% - 20px);height:calc(100% - 20px);padding:1vw;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:7px}.styles__n1___cnEjB-camelCase{animation:styles__fadeIn___3oAq7-camelCase .15s linear 0ms forwards,styles__fadeOut___3SmIL-camelCase .15s linear 3s forwards}.styles__n2___3zrB4-camelCase{animation:styles__fadeIn___3oAq7-camelCase .15s linear 3s forwards,styles__fadeOut___3SmIL-camelCase .15s linear 6.5s forwards}.styles__n3___2m7I5-camelCase{animation:styles__fadeIn___3oAq7-camelCase .15s linear 6.5s forwards,styles__fadeOut___3SmIL-camelCase .15s linear 10s forwards}.styles__n4___Y5KVh-camelCase{animation:styles__fadeIn___3oAq7-camelCase .15s linear 10s forwards,styles__fadeOut___3SmIL-camelCase .15s linear 13.5s forwards}.styles__n5___E9peR-camelCase{animation:styles__fadeIn___3oAq7-camelCase .15s linear 13.5s forwards,styles__fadeOut___3SmIL-camelCase .15s linear 17s forwards}.styles__n6___2vvg7-camelCase{animation:styles__fadeIn___3oAq7-camelCase .15s linear 17s forwards,styles__fadeOut___3SmIL-camelCase .15s linear 20s forwards}.styles__n7___1U4L4-camelCase{animation:styles__fadeIn___3oAq7-camelCase .15s linear 20s forwards,styles__fadeOut___3SmIL-camelCase .15s linear 22s forwards}@keyframes styles__fadeIn___3oAq7-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@keyframes styles__fadeOut___3SmIL-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}", ""]), t.locals = {
                container: "styles__container___1EwST-camelCase",
                text: "styles__text___1GXXO-camelCase",
                textInside: "styles__textInside___1iRa8-camelCase",
                n1: "styles__n1___cnEjB-camelCase",
                fadeIn: "styles__fadeIn___3oAq7-camelCase",
                fadeOut: "styles__fadeOut___3SmIL-camelCase",
                n2: "styles__n2___3zrB4-camelCase",
                n3: "styles__n3___2m7I5-camelCase",
                n4: "styles__n4___Y5KVh-camelCase",
                n5: "styles__n5___E9peR-camelCase",
                n6: "styles__n6___2vvg7-camelCase",
                n7: "styles__n7___1U4L4-camelCase"
            }
        },
        QoYg: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___Tz59A-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#292929;opacity:0;animation:styles__fadeIn___2pMT4-camelCase .3s linear forwards}.styles__header___2YFfE-camelCase{font-size:68px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;top:7.5%;left:15%;width:70%;font-family:Creepster,sans-serif}.styles__cardContainer___1Fc_j-camelCase,.styles__header___2YFfE-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__cardContainer___1Fc_j-camelCase{width:25vw;height:32.5vw;top:calc(60% - 18vw);left:calc(50% - 12.5vw);transform:scale(.8);outline:none;cursor:pointer;transition:.2s}.styles__cardContainer___1Fc_j-camelCase:hover{transform:scale(.85)}.styles__card1___2MXAw-camelCase{left:calc(50% - 42.5vw)}.styles__card1Only___38uD9-camelCase{left:calc(50% - 30vw)}.styles__card2___3MS9N-camelCase{left:calc(50% - 12.5vw)}.styles__card2Only___1JQr7-camelCase{left:calc(50% + 5vw)}.styles__card3___5W141-camelCase{left:calc(50% + 17.5vw)}.styles__coinsText___zfgEX-camelCase{position:absolute;width:80%;bottom:1%;left:10%;text-align:center;font-size:35px;font-weight:700;color:#fff;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-shadow:2px 2px 8px grey;opacity:0;animation:styles__fadeIn___2pMT4-camelCase .3s linear .5s forwards}@keyframes styles__fadeIn___2pMT4-camelCase{0%{opacity:0}to{opacity:1}}.styles__deckButton___2aT9K-camelCase{display:flex;flex-direction:row;align-items:center;position:absolute;top:1vw;right:1vw;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__deckButton___2aT9K-camelCase:hover{transform:scale(1.05)}.styles__deckIcon___3UUxu-camelCase{font-size:27px;margin-right:10px}.styles__deckIcon___3UUxu-camelCase,.styles__deckText___2YTlR-camelCase{text-shadow:2px 2px 8px grey}.styles__deckText___2YTlR-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___1EBm2-camelCase{position:absolute;top:0;left:0;width:calc(100% - 10vw);padding:5vh 5vw;min-height:calc(100% - 10vh);background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap;align-content:flex-start}.styles__deckCardContainer___YkFFx-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___2PBHu-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.2s}.styles__closeIcon___2PBHu-camelCase:focus,.styles__closeIcon___2PBHu-camelCase:hover{transform:scale(1.05)}@media only screen and (max-width:800px){.styles__header___2YFfE-camelCase{font-size:10vw;top:6%;left:5%;width:90%}.styles__cardContainer___1Fc_j-camelCase,.styles__cardContainer___1Fc_j-camelCase:hover{transform:scale(1.3)}.styles__card1___2MXAw-camelCase{top:calc(50% - 30vw)}.styles__card1___2MXAw-camelCase,.styles__card1Only___38uD9-camelCase{left:calc(50% - 35vw)}.styles__card1Only___38uD9-camelCase{top:calc(50% - 15vw)}.styles__card2___3MS9N-camelCase{top:calc(50% - 30vw)}.styles__card2___3MS9N-camelCase,.styles__card2Only___1JQr7-camelCase{left:calc(50% + 10vw)}.styles__card2Only___1JQr7-camelCase{top:calc(50% - 15vw)}.styles__card3___5W141-camelCase{top:calc(50% + 15.5vw);left:calc(50% - 12.5vw)}.styles__coinsText___zfgEX-camelCase{font-size:25px}.styles__deckButton___2aT9K-camelCase{right:0}.styles__deckButton___2aT9K-camelCase,.styles__deckButton___2aT9K-camelCase:hover{transform:scale(.8)}.styles__deckContainer___1EBm2-camelCase{height:100%;overflow-y:auto}.styles__deckCardContainer___YkFFx-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___2PBHu-camelCase{top:2vw;right:2vw}}@media only screen and (max-width:600px){.styles__header___2YFfE-camelCase{font-size:12.5vw;line-height:13vw;top:10%}.styles__card1___2MXAw-camelCase{left:calc(50% - 35vw)}.styles__card1___2MXAw-camelCase,.styles__card2___3MS9N-camelCase{top:calc(50% - 25vw)}.styles__card2___3MS9N-camelCase{left:calc(50% + 10vw)}.styles__card3___5W141-camelCase{top:calc(50% + 20.5vw);left:calc(50% - 12.5vw)}}", ""]), t.locals = {
                container: "styles__container___Tz59A-camelCase",
                fadeIn: "styles__fadeIn___2pMT4-camelCase",
                header: "styles__header___2YFfE-camelCase",
                cardContainer: "styles__cardContainer___1Fc_j-camelCase",
                card1: "styles__card1___2MXAw-camelCase",
                card1Only: "styles__card1Only___38uD9-camelCase",
                card2: "styles__card2___3MS9N-camelCase",
                card2Only: "styles__card2Only___1JQr7-camelCase",
                card3: "styles__card3___5W141-camelCase",
                coinsText: "styles__coinsText___zfgEX-camelCase",
                deckButton: "styles__deckButton___2aT9K-camelCase",
                deckIcon: "styles__deckIcon___3UUxu-camelCase",
                deckText: "styles__deckText___2YTlR-camelCase",
                deckContainer: "styles__deckContainer___1EBm2-camelCase",
                deckCardContainer: "styles__deckCardContainer___YkFFx-camelCase",
                closeIcon: "styles__closeIcon___2PBHu-camelCase"
            }
        },
        "RIy+": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___3Kd2e-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:30%;top:17.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__one___2DH-Z-camelCase 2.5s linear}@keyframes styles__one___2DH-Z-camelCase{0%{left:100%}17.5%{left:15%}65%{left:15%}82.5%{left:-70%}to{left:-70%}}.styles__headerTwo___2UcxZ-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:30%;top:52.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__two___Q5WZ9-camelCase 2.5s linear}@keyframes styles__two___Q5WZ9-camelCase{0%{left:100%}22.5%{left:100%}40%{left:15%}72.5%{left:15%}90%{left:-70%}to{left:-70%}}.styles__expandBackground___3ngJx-camelCase{width:100%;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#e4e4e4;animation:styles__three___102bG-camelCase 2.5s linear}@keyframes styles__three___102bG-camelCase{0%{width:0;height:0%}90%{width:0;height:0%}to{width:100%;height:100%}}.styles__container___3GMVw-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0}", ""]), t.locals = {
                headerOne: "styles__headerOne___3Kd2e-camelCase",
                one: "styles__one___2DH-Z-camelCase",
                headerTwo: "styles__headerTwo___2UcxZ-camelCase",
                two: "styles__two___Q5WZ9-camelCase",
                expandBackground: "styles__expandBackground___3ngJx-camelCase",
                three: "styles__three___102bG-camelCase",
                container: "styles__container___3GMVw-camelCase"
            }
        },
        ROpq: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__container___3Jgsy-camelCase{height:100%;width:100%;top:0;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:17;background-color:#000}.styles__container___3Jgsy-camelCase,.styles__starWars___2u8bX-camelCase{position:absolute;overflow:hidden}.styles__starWars___2u8bX-camelCase{width:80vw;height:160vw;bottom:0;left:50%;margin-left:-40vw;font-size:4.5vw;color:#feda4a;font-family:Arial,sans-serif;font-weight:700;text-align:justify;transform-origin:50% 100%;transform:perspective(300px) rotateX(25deg)}.styles__starWars___2u8bX-camelCase:after{position:absolute;content:" ";left:0;right:0;top:0;bottom:60%}.styles__crawl___2OSAd-camelCase{position:absolute;top:100%;animation:styles__scroll___1WC1u-camelCase 16s linear 2s forwards}@keyframes styles__scroll___1WC1u-camelCase{0%{top:100%}to{top:0}}.styles__titleOne___33mpL-camelCase{font-size:4vw}.styles__titleOne___33mpL-camelCase,.styles__titleTwo___pcojn-camelCase{text-align:center;font-weight:700}.styles__titleTwo___pcojn-camelCase{margin:0 0 100px;font-size:8vw;text-transform:uppercase}', ""]), t.locals = {
                container: "styles__container___3Jgsy-camelCase",
                starWars: "styles__starWars___2u8bX-camelCase",
                crawl: "styles__crawl___2OSAd-camelCase",
                scroll: "styles__scroll___1WC1u-camelCase",
                titleOne: "styles__titleOne___33mpL-camelCase",
                titleTwo: "styles__titleTwo___pcojn-camelCase"
            }
        },
        "Ruj+": function(e, t, a) {
            var s = a("3lxn");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        SHTr: function(e, t, a) {
            var s = a("60T2");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        Skqv: function(e, t, a) {
            var s = a("0Q62");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        T7Yb: function(e, t, a) {
            var s = a("Veel");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        Truy: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("ySNN"),
                i = a.n(l),
                c = a("74sb"),
                _ = function(e) {
                    var t = e.currentLife,
                        a = e.maxLife,
                        s = e.top,
                        n = e.left,
                        r = e.scale,
                        l = Object(c.v)("15vw"),
                        _ = Object(c.v)("1.5vw"),
                        m = .5 * l,
                        d = m - .5 * _,
                        f = 2 * Math.PI * d,
                        y = "".concat(t / a * 100 * f / 100, "px ").concat(f, "px");
                    return o.a.createElement("div", {
                        className: i.a.container,
                        style: {
                            top: s,
                            left: n,
                            width: "".concat(l, "px"),
                            height: "".concat(l, "px"),
                            transform: "scale(".concat(r || 1, ")")
                        }
                    }, o.a.createElement("svg", {
                        width: "".concat(l, "px"),
                        height: "".concat(l, "px"),
                        className: i.a.donut
                    }, o.a.createElement("circle", {
                        r: "".concat(d, "px"),
                        cx: "".concat(m, "px"),
                        cy: "".concat(m, "px"),
                        strokeWidth: "".concat(_, "px"),
                        className: i.a.track
                    }), o.a.createElement("circle", {
                        r: "".concat(d, "px"),
                        cx: "".concat(m, "px"),
                        cy: "".concat(m, "px"),
                        strokeWidth: "".concat(_, "px"),
                        strokeDasharray: y,
                        className: i.a.indicator
                    }), o.a.createElement("text", {
                        className: i.a.text,
                        x: "50%",
                        y: "50%",
                        textAnchor: "middle",
                        alignmentBaseline: "middle"
                    }, t, o.a.createElement("tspan", {
                        style: {
                            fontSize: "1vw"
                        }
                    }, " "), "/", o.a.createElement("tspan", {
                        style: {
                            fontSize: "1vw"
                        }
                    }, " "), a)))
                };
            _.propTypes = {
                currentLife: r.a.number,
                maxLife: r.a.number,
                top: r.a.string,
                left: r.a.string,
                scale: r.a.number
            }, t.a = _
        },
        VLs0: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("YMzV"),
                _ = a.n(c),
                m = function(e) {
                    var t = e.icon,
                        a = e.title,
                        s = e.value,
                        n = e.onChange;
                    return o.a.createElement("div", {
                        className: _.a.amountContainer
                    }, o.a.createElement("i", {
                        className: i()(_.a.amountIcon, t)
                    }), o.a.createElement("div", {
                        className: _.a.amountHeader
                    }, a), o.a.createElement("input", {
                        className: _.a.amountInput,
                        onChange: n,
                        value: s,
                        type: "number",
                        min: "1"
                    }))
                };
            m.propTypes = {
                icon: r.a.string,
                title: r.a.string,
                value: r.a.any,
                onChange: r.a.func
            }, t.a = m
        },
        Veel: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___2doOd-camelCase{position:absolute;width:100%;height:100%;background-color:#2705ab;overflow:hidden}.styles__resultsOverlay___3ARXU-camelCase,.styles__winnerOverlay___2R4HG-camelCase{width:130%;position:absolute;top:50%;left:50%;mix-blend-mode:overlay;transform:translate(-50%,-50%)}.styles__winnerBackground___2jJ6Q-camelCase,.styles__winnerOverlay___2R4HG-camelCase{opacity:0;animation:styles__fadeIn___3PNPp-camelCase .5s linear 4.5s forwards}.styles__winnerBackground___2jJ6Q-camelCase{position:absolute;width:100%;height:100%;top:0;left:0;background-color:#fe6f45}.styles__resultsOverlay___3ARXU-camelCase{opacity:0;animation:styles__fadeInFadeOut___3pl9--camelCase 2.3s linear forwards}.styles__loserOverlay___IiaoT-camelCase{position:absolute;top:-5%;width:100%;transform:translateY(-100%);mix-blend-mode:multiply;animation:styles__slideIn___2GCai-camelCase 1s linear 4.5s forwards}@keyframes styles__slideIn___2GCai-camelCase{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.styles__loserOverlay2___1pUAf-camelCase{position:absolute;bottom:0;width:100%;opacity:0;mix-blend-mode:overlay;animation:styles__fadeIn___3PNPp-camelCase .5s linear 5s forwards}.styles__resultsText___3W8kq-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:8vw;width:40vw;position:absolute;left:30vw;top:50%;transform:translateY(-50%);text-align:center;opacity:0;animation:styles__fadeInFadeOut___3pl9--camelCase 2.3s linear forwards}@keyframes styles__fadeInFadeOut___3pl9--camelCase{0%{opacity:0}20%{opacity:1}80%{opacity:1}to{opacity:0}}.styles__victoryTextBg___1u4Xy-camelCase{width:60%}.styles__victoryText___yCjyX-camelCase,.styles__victoryTextBg___1u4Xy-camelCase{position:absolute;top:20%;left:28%;transform:translate(-50%,-50%) rotate(-5deg);opacity:0;animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards}.styles__victoryText___yCjyX-camelCase{width:34%}.styles__winnerBlookContainer___GpQg7-camelCase,.styles__winnerBlookShadow3___gza0m-camelCase{width:22%;position:absolute;top:50%;left:30%;opacity:0;animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards}.styles__winnerBlook___2oTx7-camelCase,.styles__winnerBlookShadow1___3Yc41-camelCase,.styles__winnerBlookShadow2___2CFEk-camelCase{position:absolute;width:100%}.styles__winnerBlook___2oTx7-camelCase{transform:translate(-50%,-50%) rotate(-10deg)}.styles__winnerBlookShadow1___3Yc41-camelCase{transform:translate(-50%,-50%) translateY(7px) rotate(-10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__winnerBlookShadow2___2CFEk-camelCase{transform:translate(-50%,-50%) translateY(35px) rotate(-10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__winnerBlookShadow3___gza0m-camelCase{transform:translate(-55%,-60%) rotate(5deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%)}.styles__winnerNameplate___2eL5d-camelCase{width:22%;left:30%}.styles__winnerName___2C6ZT-camelCase,.styles__winnerNameplate___2eL5d-camelCase{position:absolute;bottom:9%;transform:translate(-50%,50%);opacity:0;animation:styles__fadeIn___3PNPp-camelCase .25s linear 4.5s forwards}.styles__winnerName___2C6ZT-camelCase{left:29%;width:18%;height:7vh;color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px rgba(0,0,0,.25)}.styles__winnerCorrectContainer___29dKA-camelCase,.styles__winnerName___2C6ZT-camelCase{display:flex;justify-content:center;align-items:center}.styles__winnerCorrectContainer___29dKA-camelCase{flex-direction:row;position:absolute;right:145%;width:70%;top:1vw;transform:rotate(-10deg)}.styles__winnerCorrectBg___2dlJ_-camelCase{position:absolute;width:100%;z-index:-1}.styles__winnerCheck___2yjvC-camelCase{width:30%;margin-right:5%;padding-bottom:.5vw}.styles__winnerTime___3nbp1-camelCase{font-family:Titan One,sans-serif;font-size:1.8vw;text-shadow:2px 2px rgba(0,0,0,.2);padding-bottom:.5vw}.styles__winnerEnergyContainer___28lLt-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;right:120%;width:70%;top:5vw;transform:rotate(-10deg)}.styles__winnerEnergy___3xBsk-camelCase{font-family:Titan One,sans-serif;font-size:2.2vw;text-shadow:2px 2px rgba(0,0,0,.2);color:#ff490f;padding-bottom:.5vw}.styles__winnerEnergyIcon___27N-T-camelCase{width:14%;margin-right:17%;margin-left:5%;padding-bottom:.5vw}.styles__defeatTextBg___kd38G-camelCase{width:30%}.styles__defeatText___3VwUK-camelCase,.styles__defeatTextBg___kd38G-camelCase{position:absolute;top:45%;right:20%;transform:translate(50%,-50%) rotate(5deg);opacity:0;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards}.styles__defeatText___3VwUK-camelCase{width:22%}.styles__loserBlookContainer___3rpaH-camelCase,.styles__loserBlookShadow3___2jhmn-camelCase{width:12%;position:absolute;top:65%;right:22%;opacity:0;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards}.styles__loserBlook___3K4Yz-camelCase,.styles__loserBlookShadow1___3FQLc-camelCase,.styles__loserBlookShadow2___2FbUp-camelCase{position:absolute;width:100%}.styles__loserBlook___3K4Yz-camelCase{transform:translate(50%,-50%) rotate(-10deg);filter:grayscale(1)}.styles__loserBlookShadow1___3FQLc-camelCase{transform:translate(50%,-50%) translateY(5px) rotate(-10deg);filter:brightness(0) invert(17%) sepia(54%) saturate(7152%) hue-rotate(313deg) brightness(101%) contrast(111%)}.styles__loserBlookShadow2___2FbUp-camelCase{transform:translate(50%,-50%) translateY(25px) rotate(-10deg);filter:brightness(0) invert(8%) sepia(26%) saturate(6422%) hue-rotate(248deg) brightness(85%) contrast(115%)}.styles__loserBlookShadow3___2jhmn-camelCase{transform:translate(55%,-60%) rotate(5deg) scale(1.4);filter:brightness(0) invert(63%) sepia(97%) saturate(1894%) hue-rotate(134deg) brightness(107%) contrast(92%)}.styles__loserNameplate___OBayt-camelCase{width:16%}.styles__loserName___3x34A-camelCase,.styles__loserNameplate___OBayt-camelCase{position:absolute;bottom:9%;right:22%;transform:translate(50%,50%);opacity:0;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5s forwards}.styles__loserName___3x34A-camelCase{width:12%;height:4vh;color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px rgba(0,0,0,.25)}.styles__loserCorrectContainer___2guae-camelCase,.styles__loserName___3x34A-camelCase{display:flex;justify-content:center;align-items:center}.styles__loserCorrectContainer___2guae-camelCase{flex-direction:row;position:absolute;right:45%;width:100%;top:0;transform:rotate(-10deg)}.styles__loserCorrectBg___261VT-camelCase{position:absolute;width:100%;z-index:-1}.styles__loserCheck___1MS9e-camelCase{width:25%;margin-right:5%;padding-bottom:.5vw}.styles__loserTime___LNWNT-camelCase{font-family:Titan One,sans-serif;font-size:1.3vw;text-shadow:2px 2px rgba(0,0,0,.2);padding-bottom:.5vw}.styles__loserEnergyContainer___3GzYk-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;right:10%;width:90%;top:3vw;transform:rotate(-10deg)}.styles__loserEnergy___Ol4FK-camelCase{font-family:Titan One,sans-serif;font-size:1.6vw;text-shadow:2px 2px rgba(0,0,0,.2);color:#324cff;padding-bottom:.5vw}.styles__loserEnergyIcon___3bVUA-camelCase{width:14%;margin-right:12%;margin-left:5%;padding-bottom:.5vw}.styles__rightText___1wBm5-camelCase{position:absolute;top:5%;right:5%;width:25%;font-family:Titan One,sans-serif;font-size:3.5vw;text-shadow:2px 2px rgba(0,0,0,.2);color:#fff;text-align:center;opacity:0;animation:styles__fadeIn___3PNPp-camelCase .25s linear 5.5s forwards}@keyframes styles__fadeIn___3PNPp-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:900px){.styles__resultsOverlay___3ARXU-camelCase,.styles__winnerOverlay___2R4HG-camelCase{height:130%;width:unset}.styles__resultsText___3W8kq-camelCase{font-size:12vw;width:60vw;left:20vw}.styles__rightText___1wBm5-camelCase{top:unset;bottom:2%;right:5%;width:90%;font-size:6vw}.styles__victoryTextBg___1u4Xy-camelCase{width:80%}.styles__victoryText___yCjyX-camelCase,.styles__victoryTextBg___1u4Xy-camelCase{top:9%;left:50%;transform:translate(-50%,-50%) rotate(-5deg)}.styles__victoryText___yCjyX-camelCase{width:54%}.styles__winnerBlookContainer___GpQg7-camelCase,.styles__winnerBlookShadow3___gza0m-camelCase{width:35%;top:22%;left:50%}.styles__winnerBlookShadow1___3Yc41-camelCase{transform:translate(-50%,-50%) translateY(3px) rotate(-10deg)}.styles__winnerBlookShadow2___2CFEk-camelCase{transform:translate(-50%,-50%) translateY(10px) rotate(-10deg)}.styles__winnerBlookShadow3___gza0m-camelCase{transform:translate(-55%,-60%) rotate(5deg) scale(1.4)}.styles__winnerNameplate___2eL5d-camelCase{width:50%;left:50%}.styles__winnerName___2C6ZT-camelCase,.styles__winnerNameplate___2eL5d-camelCase{bottom:unset;top:42%;transform:translate(-50%,-50%)}.styles__winnerName___2C6ZT-camelCase{left:48%;width:38%;height:5vh}.styles__winnerCorrectContainer___29dKA-camelCase{right:145%;width:90%;top:2vw}.styles__winnerCheck___2yjvC-camelCase{width:30%;margin-right:5%;padding-bottom:1.5vw}.styles__winnerTime___3nbp1-camelCase{font-size:4vw;padding-bottom:1.5vw}.styles__winnerEnergyContainer___28lLt-camelCase{right:120%;width:80%;top:9vw}.styles__winnerEnergy___3xBsk-camelCase{font-size:5vw;padding-bottom:1.5vw}.styles__winnerEnergyIcon___27N-T-camelCase{width:18%;margin-right:15%;margin-left:5%;padding-bottom:1.5vw}.styles__defeatTextBg___kd38G-camelCase{width:50%;top:62%;right:50%}.styles__defeatText___3VwUK-camelCase{width:32%;top:62%;right:50%}.styles__loserBlookContainer___3rpaH-camelCase,.styles__loserBlookShadow3___2jhmn-camelCase{width:25%;top:73%;right:50%}.styles__loserBlookShadow1___3FQLc-camelCase{transform:translate(50%,-50%) translateY(2px) rotate(-10deg)}.styles__loserBlookShadow2___2FbUp-camelCase{transform:translate(50%,-50%) translateY(7px) rotate(-10deg)}.styles__loserBlookShadow3___2jhmn-camelCase{transform:translate(55%,-60%) rotate(5deg) scale(1.4)}.styles__loserNameplate___OBayt-camelCase{width:40%;bottom:12%;right:50%}.styles__loserName___3x34A-camelCase{bottom:12%;right:52%;width:32%;height:3.5vh}.styles__loserCorrectContainer___2guae-camelCase{right:45%;width:110%;top:0}.styles__loserCheck___1MS9e-camelCase{width:25%;margin-right:5%;padding-bottom:1.5vw}.styles__loserTime___LNWNT-camelCase{font-size:3vw;padding-bottom:1.5vw}.styles__loserEnergyContainer___3GzYk-camelCase{right:10%;width:90%;top:6vw}.styles__loserEnergy___Ol4FK-camelCase{font-size:4vw;padding-bottom:1.5vw}.styles__loserEnergyIcon___3bVUA-camelCase{width:18%;margin-right:12%;margin-left:5%;padding-bottom:1.5vw}}", ""]), t.locals = {
                background: "styles__background___2doOd-camelCase",
                resultsOverlay: "styles__resultsOverlay___3ARXU-camelCase",
                winnerOverlay: "styles__winnerOverlay___2R4HG-camelCase",
                winnerBackground: "styles__winnerBackground___2jJ6Q-camelCase",
                fadeIn: "styles__fadeIn___3PNPp-camelCase",
                fadeInFadeOut: "styles__fadeInFadeOut___3pl9--camelCase",
                loserOverlay: "styles__loserOverlay___IiaoT-camelCase",
                slideIn: "styles__slideIn___2GCai-camelCase",
                loserOverlay2: "styles__loserOverlay2___1pUAf-camelCase",
                resultsText: "styles__resultsText___3W8kq-camelCase",
                victoryTextBg: "styles__victoryTextBg___1u4Xy-camelCase",
                victoryText: "styles__victoryText___yCjyX-camelCase",
                winnerBlookContainer: "styles__winnerBlookContainer___GpQg7-camelCase",
                winnerBlookShadow3: "styles__winnerBlookShadow3___gza0m-camelCase",
                winnerBlook: "styles__winnerBlook___2oTx7-camelCase",
                winnerBlookShadow1: "styles__winnerBlookShadow1___3Yc41-camelCase",
                winnerBlookShadow2: "styles__winnerBlookShadow2___2CFEk-camelCase",
                winnerNameplate: "styles__winnerNameplate___2eL5d-camelCase",
                winnerName: "styles__winnerName___2C6ZT-camelCase",
                winnerCorrectContainer: "styles__winnerCorrectContainer___29dKA-camelCase",
                winnerCorrectBg: "styles__winnerCorrectBg___2dlJ_-camelCase",
                winnerCheck: "styles__winnerCheck___2yjvC-camelCase",
                winnerTime: "styles__winnerTime___3nbp1-camelCase",
                winnerEnergyContainer: "styles__winnerEnergyContainer___28lLt-camelCase",
                winnerEnergy: "styles__winnerEnergy___3xBsk-camelCase",
                winnerEnergyIcon: "styles__winnerEnergyIcon___27N-T-camelCase",
                defeatTextBg: "styles__defeatTextBg___kd38G-camelCase",
                defeatText: "styles__defeatText___3VwUK-camelCase",
                loserBlookContainer: "styles__loserBlookContainer___3rpaH-camelCase",
                loserBlookShadow3: "styles__loserBlookShadow3___2jhmn-camelCase",
                loserBlook: "styles__loserBlook___3K4Yz-camelCase",
                loserBlookShadow1: "styles__loserBlookShadow1___3FQLc-camelCase",
                loserBlookShadow2: "styles__loserBlookShadow2___2FbUp-camelCase",
                loserNameplate: "styles__loserNameplate___OBayt-camelCase",
                loserName: "styles__loserName___3x34A-camelCase",
                loserCorrectContainer: "styles__loserCorrectContainer___2guae-camelCase",
                loserCorrectBg: "styles__loserCorrectBg___261VT-camelCase",
                loserCheck: "styles__loserCheck___1MS9e-camelCase",
                loserTime: "styles__loserTime___LNWNT-camelCase",
                loserEnergyContainer: "styles__loserEnergyContainer___3GzYk-camelCase",
                loserEnergy: "styles__loserEnergy___Ol4FK-camelCase",
                loserEnergyIcon: "styles__loserEnergyIcon___3bVUA-camelCase",
                rightText: "styles__rightText___1wBm5-camelCase"
            }
        },
        "X/4e": function(e, t, a) {
            var s = a("AYCC");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        XYmZ: function(e, t, a) {
            var s = a("d8xC");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        YHq4: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("eMKS"),
                i = a.n(l),
                c = a("TSYQ"),
                _ = a.n(c),
                m = a("4HzQ"),
                d = a("ahDL"),
                f = a.n(d),
                y = a("0oXL"),
                p = a("74sb");

            function u(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var h = function(e) {
                var t, a = e.energy,
                    s = e.name,
                    n = e.blook,
                    r = e.done,
                    l = e.win,
                    i = e.left,
                    c = e.ready,
                    d = e.safe;
                return o.a.createElement("div", {
                    className: _()(f.a.row, (t = {}, u(t, f.a.rowLose, !l && r), u(t, f.a.rowRight, !i), t))
                }, o.a.createElement("img", {
                    src: "https://media.blooket.com/image/upload/v1662596209/Media/br/Resize_Host_Lobby_Nameplate_Left.svg",
                    alt: "background",
                    className: _()(f.a.background, u({}, f.a.backgroundRight, !i))
                }), o.a.createElement(y.a, {
                    name: n,
                    className: _()(f.a.blook, u({}, f.a.blookRight, !i))
                }), o.a.createElement(m.Textfit, {
                    className: f.a.name,
                    mode: "single",
                    forceSingleModeWidth: !1,
                    min: 1,
                    max: Object(p.v)("5vw")
                }, s), o.a.createElement("div", {
                    className: f.a.energyContainer
                }, o.a.createElement("div", {
                    className: f.a.energyText,
                    style: {
                        color: i ? "#ff490f" : "#324cff"
                    }
                }, r && c && !l && !d ? a - 1 : a), o.a.createElement("img", {
                    src: i ? "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Orange.svg" : "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Blue.svg",
                    alt: "Energy",
                    className: f.a.energyIcon
                })))
            };
            h.propTypes = {
                energy: r.a.number,
                name: r.a.string,
                blook: r.a.string,
                done: r.a.bool,
                win: r.a.bool,
                left: r.a.bool,
                ready: r.a.bool,
                safe: r.a.bool
            };
            var g = h,
                w = function(e) {
                    var t = e.match,
                        a = e.ready,
                        s = e.safe,
                        n = Boolean(t[0].time || t[1].time);
                    return o.a.createElement("div", {
                        className: i.a.container
                    }, o.a.createElement(g, {
                        energy: t[0].energy,
                        name: t[0].name,
                        blook: t[0].blook,
                        done: n,
                        win: t[0].correct && !t[1].correct || t[0].correct && t[0].time < t[1].time,
                        ready: a,
                        safe: s,
                        left: !0
                    }), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662503029/Media/br/Host_Lobby_VS.png",
                        alt: "VS",
                        className: i.a.vsImg
                    }), o.a.createElement(g, {
                        energy: t[1].energy,
                        name: t[1].clone ? "".concat(t[1].name, " 👾") : t[1].name,
                        blook: t[1].blook,
                        done: n,
                        win: t[1].correct && !t[0].correct || t[1].correct && t[1].time < t[0].time,
                        safe: s,
                        ready: a
                    }))
                };
            w.propTypes = {
                match: r.a.array,
                ready: r.a.bool,
                safe: r.a.bool
            };
            t.a = w
        },
        YMzV: function(e, t, a) {
            var s = a("zogk");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        ZtAu: function(e, t, a) {
            var s = a("NieF");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        a7Lo: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("wcqC"),
                _ = a.n(c);
            var m = function(e) {
                var t, a, s, n = e.title,
                    r = e.icon,
                    l = e.image,
                    c = e.desc,
                    m = e.onSelect,
                    d = e.selected;
                return o.a.createElement("div", {
                    className: i()(_.a.button, (t = {}, a = _.a.selected, s = d, a in t ? Object.defineProperty(t, a, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[a] = s, t)),
                    role: "button",
                    tabIndex: 0,
                    onClick: function() {
                        return m()
                    }
                }, l ? o.a.createElement("img", {
                    src: l,
                    alt: "Setting",
                    className: _.a.image,
                    draggable: !1
                }) : o.a.createElement("i", {
                    className: i()(_.a.icon, r)
                }), o.a.createElement("div", {
                    className: _.a.title
                }, n), o.a.createElement("div", {
                    className: _.a.desc
                }, c))
            };
            m.propTypes = {
                title: r.a.string,
                icon: r.a.string,
                image: r.a.string,
                desc: r.a.string,
                onSelect: r.a.func,
                selected: r.a.bool
            }, t.a = m
        },
        aKVx: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("4HzQ"),
                i = a("rtQy"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                d = function(e) {
                    var t = e.team;
                    return o.a.createElement("div", {
                        className: c.a.container
                    }, o.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("12vw")
                    }, "Step Three:"), o.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("10vw")
                    }, "Showdown"), o.a.createElement(_.a, {
                        name: "Dog",
                        className: c.a.leftBlook
                    }), o.a.createElement("div", {
                        className: c.a.vsText
                    }, "VS"), o.a.createElement(_.a, {
                        name: "Cat",
                        className: c.a.rightBlook
                    }), o.a.createElement(l.Textfit, {
                        className: c.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("8vw")
                    }, t ? "The Team With The Lowest Average Time Will Keep Their Energy" : "Answer Correctly and More Quickly To Keep Your Energy"))
                };
            d.propTypes = {
                team: r.a.bool
            }, t.a = d
        },
        ahDL: function(e, t, a) {
            var s = a("eBQA");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        b3Ff: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("JP1n"),
                _ = a.n(c),
                m = function(e) {
                    var t = e.title,
                        a = e.desc,
                        s = e.checked,
                        n = e.onCheck;
                    return o.a.createElement("div", {
                        className: _.a.container
                    }, o.a.createElement("div", null, o.a.createElement("div", {
                        className: _.a.text
                    }, t), o.a.createElement("div", {
                        className: _.a.desc
                    }, a)), o.a.createElement("div", {
                        className: i()(_.a.checkBox, s ? _.a.checkYes : _.a.checkNo),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return n()
                        }
                    }, o.a.createElement("i", {
                        className: i()(_.a.checkIcon, "fas fa-check")
                    })))
                };
            m.propTypes = {
                title: r.a.string,
                desc: r.a.string,
                checked: r.a.bool,
                onCheck: r.a.func
            }, t.a = m
        },
        "ca/f": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("H1WH"),
                i = a("TSYQ"),
                c = a.n(i),
                _ = a("O/BK"),
                m = a.n(_),
                d = a("Xst1"),
                f = a.n(d),
                y = a("lmLo"),
                p = a("XOuL"),
                u = a("LHn/"),
                h = a("0oXL"),
                g = a("74sb");

            function w(e, t, a) {
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
                        s = e.buttonOne,
                        n = e.buttonTwo,
                        r = e.loading,
                        i = e.numValue,
                        _ = e.numChange,
                        d = e.numTotal,
                        C = e.priceValue,
                        v = e.priceChange,
                        x = e.timeValue,
                        k = e.timeChange,
                        E = e.stringValue,
                        T = e.stringChange,
                        N = e.stringPlaceholder,
                        B = e.stringValue2,
                        O = e.stringChange2,
                        I = e.stringPlaceholder2,
                        S = e.colorValue,
                        j = e.colorChange,
                        z = e.error,
                        P = e.onSubmit,
                        R = e.isDark,
                        M = e.blook;
                    return o.a.createElement("div", {
                        className: f.a.modal
                    }, o.a.createElement("form", {
                        onSubmit: P ? function(e) {
                            return P(e)
                        } : function(e) {
                            return e.preventDefault()
                        },
                        className: m.a.container,
                        style: {
                            backgroundColor: R ? "#1a1a1a" : null
                        }
                    }, o.a.createElement("div", {
                        className: m.a.text,
                        style: {
                            color: R ? "#fff" : null
                        }
                    }, M ? o.a.createElement(h.a, {
                        name: M,
                        className: m.a.blook
                    }) : null, t || a), r ? o.a.createElement(p.a, null) : o.a.createElement("div", {
                        className: m.a.holder
                    }, void 0 !== i ? o.a.createElement("div", {
                        className: m.a.numRow
                    }, o.a.createElement("div", {
                        className: c()(m.a.inputContainer, w({}, m.a.inputFilled, i)),
                        style: {
                            width: 80,
                            margin: 0
                        }
                    }, o.a.createElement("input", {
                        className: m.a.input,
                        style: {
                            width: 60
                        },
                        placeholder: "",
                        onChange: _,
                        value: i,
                        type: "tel",
                        autoFocus: l.isMobile ? "" : "autofocus"
                    })), o.a.createElement("div", {
                        className: m.a.numTotal
                    }, "/ ".concat(Object(g.l)(d)))) : null, void 0 !== C ? o.a.createElement("div", {
                        className: c()(m.a.inputContainer, w({}, m.a.inputFilled, C))
                    }, o.a.createElement("input", {
                        className: m.a.input,
                        placeholder: "Price",
                        onChange: v,
                        value: C,
                        type: "number",
                        autoFocus: l.isMobile ? "" : "autofocus"
                    }), o.a.createElement("img", {
                        src: u.a.basic.token,
                        alt: "Token",
                        className: m.a.token,
                        draggable: !1
                    })) : null, void 0 !== x ? o.a.createElement("div", {
                        className: c()(m.a.inputContainer, w({}, m.a.inputFilled, x))
                    }, o.a.createElement("input", {
                        className: m.a.input,
                        placeholder: "Time",
                        onChange: k,
                        value: x,
                        type: "number",
                        autoFocus: l.isMobile || void 0 !== C ? "" : "autofocus"
                    }), o.a.createElement("i", {
                        className: c()(m.a.icon, "far fa-clock")
                    })) : null, void 0 !== E ? o.a.createElement("div", {
                        className: c()(m.a.inputContainer, w({}, m.a.inputFilled, E)),
                        style: {
                            width: "80%"
                        }
                    }, o.a.createElement("input", {
                        className: m.a.longInput,
                        placeholder: N || "Name",
                        onChange: T,
                        value: E,
                        type: "text",
                        autoFocus: l.isMobile || void 0 !== E ? "" : "autofocus"
                    })) : null, void 0 !== B ? o.a.createElement("div", {
                        className: c()(m.a.inputContainer, w({}, m.a.inputFilled, B)),
                        style: {
                            width: "80%"
                        }
                    }, o.a.createElement("input", {
                        className: m.a.longInput,
                        placeholder: I || "Name",
                        onChange: O,
                        value: B,
                        type: "text",
                        autoFocus: l.isMobile || void 0 !== B ? "" : "autofocus"
                    })) : null, void 0 !== S ? o.a.createElement("div", {
                        className: m.a.colorsHolder
                    }, b.map((function(e) {
                        return o.a.createElement("div", {
                            className: m.a.colorContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return j(e)
                            },
                            key: e,
                            style: {
                                backgroundColor: e
                            }
                        }, e === S ? o.a.createElement("i", {
                            className: "fas fa-check"
                        }) : null)
                    }))) : null, z ? o.a.createElement("div", {
                        className: m.a.errorContainer
                    }, o.a.createElement("i", {
                        className: c()(m.a.errorIcon, "fas fa-times-circle")
                    }), o.a.createElement("div", {
                        className: m.a.errorText
                    }, z)) : null, o.a.createElement("div", {
                        className: m.a.buttonContainer
                    }, s ? o.a.createElement(y.a, {
                        onClick: s.click,
                        outsideClass: m.a.button,
                        insideClass: m.a.buttonInside,
                        color: "orange" === s.color ? "#ff7b24" : "red" === s.color ? "#ce1313" : "green" === s.color ? "#4bc22e" : "black" === s.color ? "#3a3a3a" : "#0bc2cf"
                    }, s.text) : null, n ? o.a.createElement(y.a, {
                        onClick: n.click,
                        outsideClass: m.a.button,
                        insideClass: m.a.buttonInside,
                        color: "orange" === n.color ? "#ff7b24" : "red" === n.color ? "#ce1313" : "green" === n.color ? "#4bc22e" : "black" === n.color ? "#3a3a3a" : "#0bc2cf"
                    }, n.text) : null)), o.a.createElement("input", {
                        type: "submit",
                        style: {
                            opacity: 0,
                            display: "none"
                        }
                    })))
                };
            C.propTypes = {
                text: r.a.string,
                content: r.a.element,
                buttonOne: r.a.shape({
                    text: r.a.string,
                    click: r.a.func,
                    color: r.a.string
                }),
                buttonTwo: r.a.shape({
                    text: r.a.string,
                    click: r.a.func,
                    color: r.a.string
                }),
                loading: r.a.bool,
                numValue: r.a.number,
                numChange: r.a.func,
                numTotal: r.a.number,
                priceValue: r.a.any,
                priceChange: r.a.func,
                timeValue: r.a.any,
                timeChange: r.a.func,
                stringValue: r.a.string,
                stringChange: r.a.func,
                stringPlaceholder: r.a.string,
                stringValue2: r.a.string,
                stringChange2: r.a.func,
                stringPlaceholder2: r.a.string,
                colorValue: r.a.string,
                colorChange: r.a.func,
                error: r.a.string,
                onSubmit: r.a.func,
                isDark: r.a.bool,
                blook: r.a.string
            }, t.a = C
        },
        ctjG: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("4HzQ"),
                i = a("cyLU"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                d = function(e) {
                    var t = e.team;
                    return o.a.createElement("div", {
                        className: c.a.container
                    }, o.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("12vw")
                    }, "Step Four:"), o.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("10vw")
                    }, "Survive"), o.a.createElement(_.a, {
                        name: "Chicken",
                        className: c.a.blookOne
                    }), o.a.createElement(_.a, {
                        name: "Dog",
                        className: c.a.blookTwo
                    }), o.a.createElement(_.a, {
                        name: "Fox",
                        className: c.a.blookThree
                    }), o.a.createElement(_.a, {
                        name: "Pig",
                        className: c.a.blookFour
                    }), o.a.createElement(_.a, {
                        name: "Sheep",
                        className: c.a.blookFive
                    }), o.a.createElement(l.Textfit, {
                        className: c.a.headerThree,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(m.v)("8vw")
                    }, "The Last ".concat(t ? "Team" : "Player", " With Energy Remaining Wins")))
                };
            d.propTypes = {
                team: r.a.bool
            }, t.a = d
        },
        cyLU: function(e, t, a) {
            var s = a("Hq7Z");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        d8xC: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___2SXig-camelCase{width:calc(100% - 100px);display:flex;flex-direction:column}.styles__text___2a69l-camelCase{color:#3a3a3a;text-align:left;font-size:35px;line-height:50px;font-family:Nunito,sans-serif;justify-self:flex-start}.styles__sliderInputContainer___5HX4z-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:25px}.styles__qInput___24X40-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:auto 20px;padding:5px 10px;width:80px;height:40px;line-height:40px;font-size:30px;font-weight:700;text-align:center;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__qInput___24X40-camelCase:focus{border-color:#0bc2cf}", ""]), t.locals = {
                container: "styles__container___2SXig-camelCase",
                text: "styles__text___2a69l-camelCase",
                sliderInputContainer: "styles__sliderInputContainer___5HX4z-camelCase",
                qInput: "styles__qInput___24X40-camelCase"
            }
        },
        dudT: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container____P2p6-camelCase{width:calc(100% - 100px);display:flex;flex-direction:column}.styles__text___2d50O-camelCase{color:#3a3a3a;text-align:left;font-size:35px;line-height:50px;font-family:Nunito,sans-serif;justify-self:flex-start}.styles__choices___1GrJw-camelCase{width:100%;display:flex;flex-direction:row;justify-content:space-around;margin-top:10px;margin-bottom:10px}.styles__choice___7JmSn-camelCase{width:45px;height:45px;border:2px solid #3a3a3a;border-radius:6px;outline:none;cursor:pointer;color:#3a3a3a;background-color:#fff;transition:.2s}.styles__choiceText___3vs_5-camelCase{text-align:center;font-size:32px;width:45px;line-height:45px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__checkYes___2b9jV-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___3KZtE-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}", ""]), t.locals = {
                container: "styles__container____P2p6-camelCase",
                text: "styles__text___2d50O-camelCase",
                choices: "styles__choices___1GrJw-camelCase",
                choice: "styles__choice___7JmSn-camelCase",
                choiceText: "styles__choiceText___3vs_5-camelCase",
                checkYes: "styles__checkYes___2b9jV-camelCase",
                checkNo: "styles__checkNo___3KZtE-camelCase"
            }
        },
        eBQA: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__row___103Xq-camelCase{align-items:center;height:10vh;width:25vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative}.styles__row___103Xq-camelCase,.styles__rowLose___1nWj9-camelCase{display:flex;flex-direction:row}.styles__rowLose___1nWj9-camelCase{animation:styles__fadeOut___Wd_fa-camelCase .5s linear 4.5s forwards}@keyframes styles__fadeOut___Wd_fa-camelCase{0%{opacity:1}to{opacity:.6}}.styles__rowRight___1Q_hn-camelCase{flex-direction:row-reverse}.styles__background___-bpq4-camelCase{position:absolute;width:95%;z-index:-1;right:0}.styles__backgroundRight___25c1e-camelCase{right:unset;left:0;transform:rotateY(180deg)}.styles__energyContainer___v4ZTK-camelCase{width:5vw;margin:0 .5vw;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__energyText___3nF_X-camelCase{font-family:Titan One,sans-serif;font-size:2.6vw;text-shadow:2px 2px rgba(0,0,0,.2)}.styles__energyIcon___3Ip1T-camelCase{width:1.5vw;margin-left:.5vw}.styles__blook___3T0YC-camelCase{margin:0 1vw 0 .5vw;width:5vw;filter:drop-shadow(2px 2px #e8269c);transform:rotate(-5deg)}.styles__blookRight___1uTpx-camelCase{filter:drop-shadow(-2px 2px #e8269c);transform:rotate(5deg)}.styles__name___rQTuH-camelCase{color:#3a3a3a;text-align:center;height:80%;width:calc(17.5vw - 7vh);margin:10% 1vw 10% 0;font-family:Nunito,sans-serif;font-weight:700;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}", ""]), t.locals = {
                row: "styles__row___103Xq-camelCase",
                rowLose: "styles__rowLose___1nWj9-camelCase",
                fadeOut: "styles__fadeOut___Wd_fa-camelCase",
                rowRight: "styles__rowRight___1Q_hn-camelCase",
                background: "styles__background___-bpq4-camelCase",
                backgroundRight: "styles__backgroundRight___25c1e-camelCase",
                energyContainer: "styles__energyContainer___v4ZTK-camelCase",
                energyText: "styles__energyText___3nF_X-camelCase",
                energyIcon: "styles__energyIcon___3Ip1T-camelCase",
                blook: "styles__blook___3T0YC-camelCase",
                blookRight: "styles__blookRight___1uTpx-camelCase",
                name: "styles__name___rQTuH-camelCase"
            }
        },
        eMKS: function(e, t, a) {
            var s = a("y0MH");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        eTNz: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__card___2x7h1-camelCase{background-color:transparent;width:25vw;height:32.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__card___2x7h1-camelCase,.styles__innerCard___3mqgd-camelCase{position:relative}.styles__innerCard___3mqgd-camelCase{width:100%;height:100%;text-align:center;transition:.8s;transform-style:preserve-3d;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px}.styles__flipped___29kGa-camelCase{transform:rotateY(180deg)}.styles__cardBack___1wCzl-camelCase,.styles__cardFront___XIiT8-camelCase{position:absolute;width:calc(100% - 2vw);height:calc(100% - 2vw);background-color:#404040;border:1vw solid #333;border-radius:6px;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column}.styles__cardBack___1wCzl-camelCase{align-items:center;justify-content:center;font-size:12vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;transform:rotateY(180deg);pointer-events:none}.styles__headerContainer___1SQez-camelCase{position:absolute;width:95%;top:1vw;left:2.5%;text-align:left;font-family:Nunito,sans-serif;color:#fff}.styles__nameText___yhmIT-camelCase{font-size:2.7vw;line-height:2.8vw;text-shadow:2px 2px 8px #333;font-weight:700}.styles__rarityText___CemE2-camelCase{font-size:1.4vw;letter-spacing:.5px;font-weight:700;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.styles__classText___3-DKX-camelCase{font-size:2vw}.styles__artifactIcon___27XqN-camelCase{position:absolute;top:42.5%;left:50%;transform:translate(-50%,-50%);font-size:11vw;text-shadow:2px 2px 8px #333}.styles__artifactDesc___1iB8m-camelCase{position:absolute;top:67.5%;left:5%;width:calc(90% - 20px);height:30%;padding:0 10px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-size:2vw;line-height:2.13vw;color:#fff;background-color:#333}.styles__blookHolder___1-TmR-camelCase{position:absolute;top:1%;left:0;width:100%;height:56.5%}.styles__blook___BsMGw-camelCase{height:18.5vw;margin:0 0 2.5% 20%;transform:rotate(10deg)}.styles__powerContainer___2YeJJ-camelCase{position:absolute;top:57.5%;left:0;width:100%;display:flex;flex-direction:column}.styles__powerRow___2hG1K-camelCase{display:flex;flex-direction:row;align-items:center;width:95%;padding:.2vw 1.5%;height:3.5vw;margin:calc(.2vw - 3px) auto;border:3px solid transparent;border-radius:4px;outline:none;z-index:10}.styles__powerSelect___399o6-camelCase:hover{cursor:pointer}.styles__powerSelect___399o6-camelCase:hover,.styles__powerSelected___2cp-x-camelCase,.styles__selected___c5HWX-camelCase{border:3px solid #0bc2cf}.styles__outerPower___1zNJV-camelCase{flex-grow:1;height:82.5%;margin:0 auto;background-color:#595959;color:#fff;display:flex;flex-direction:column;overflow:hidden}.styles__innerPower___3tJ6M-camelCase,.styles__outerPower___1zNJV-camelCase{border-bottom-left-radius:4px;border-top-left-radius:4px}.styles__innerPower___3tJ6M-camelCase{height:100%;width:5%}.styles__powerInfo___1Pm7f-camelCase{height:2.8875vw;margin-top:-2.8875vw;margin-left:.5vw;display:flex;flex-direction:row;align-items:center}.styles__powerIcon___aFs8v-camelCase{font-size:1.6vw;margin-right:.75vw;width:2vw;text-align:center}.styles__powerText___kebq4-camelCase{font-size:1.7vw}.styles__powerBox___2sDuh-camelCase,.styles__powerText___kebq4-camelCase{font-family:Nunito,sans-serif}.styles__powerBox___2sDuh-camelCase{width:3.5vw;height:3.5vw;font-size:2.4vw;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;border-radius:7%;box-shadow:inset 0 0 0 .2vw hsla(0,0%,39.2%,.6)}@media only screen and (max-width:800px){.styles__powerRow___2hG1K-camelCase{margin:calc(.2vw - 1px) auto;border:1px solid transparent}.styles__powerSelect___399o6-camelCase:hover,.styles__powerSelected___2cp-x-camelCase,.styles__selected___c5HWX-camelCase{border:1px solid #0bc2cf}}", ""]), t.locals = {
                card: "styles__card___2x7h1-camelCase",
                innerCard: "styles__innerCard___3mqgd-camelCase",
                flipped: "styles__flipped___29kGa-camelCase",
                cardBack: "styles__cardBack___1wCzl-camelCase",
                cardFront: "styles__cardFront___XIiT8-camelCase",
                headerContainer: "styles__headerContainer___1SQez-camelCase",
                nameText: "styles__nameText___yhmIT-camelCase",
                rarityText: "styles__rarityText___CemE2-camelCase",
                classText: "styles__classText___3-DKX-camelCase",
                artifactIcon: "styles__artifactIcon___27XqN-camelCase",
                artifactDesc: "styles__artifactDesc___1iB8m-camelCase",
                blookHolder: "styles__blookHolder___1-TmR-camelCase",
                blook: "styles__blook___BsMGw-camelCase",
                powerContainer: "styles__powerContainer___2YeJJ-camelCase",
                powerRow: "styles__powerRow___2hG1K-camelCase",
                powerSelect: "styles__powerSelect___399o6-camelCase",
                powerSelected: "styles__powerSelected___2cp-x-camelCase",
                selected: "styles__selected___c5HWX-camelCase",
                outerPower: "styles__outerPower___1zNJV-camelCase",
                innerPower: "styles__innerPower___3tJ6M-camelCase",
                powerInfo: "styles__powerInfo___1Pm7f-camelCase",
                powerIcon: "styles__powerIcon___aFs8v-camelCase",
                powerText: "styles__powerText___kebq4-camelCase",
                powerBox: "styles__powerBox___2sDuh-camelCase"
            }
        },
        fSAT: function(e, t, a) {
            var s = a("kIZ0");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        gvfT: function(e, t, a) {
            "use strict";
            a.d(t, "c", (function() {
                return l
            })), a.d(t, "b", (function() {
                return i
            })), a.d(t, "a", (function() {
                return c
            })), a.d(t, "e", (function() {
                return f
            })), a.d(t, "d", (function() {
                return y
            }));
            var s = a("74sb");

            function o(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(a), !0).forEach((function(t) {
                        r(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function r(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var l = {
                    Chick: {
                        strength: 1,
                        charisma: 16,
                        wisdom: 5,
                        class: "🌽"
                    },
                    Chicken: {
                        strength: 4,
                        charisma: 10,
                        wisdom: 10,
                        class: "🌽"
                    },
                    Cow: {
                        strength: 12,
                        charisma: 6,
                        wisdom: 6,
                        class: "🌽"
                    },
                    Goat: {
                        strength: 10,
                        charisma: 6,
                        wisdom: 6,
                        class: "🌽"
                    },
                    Horse: {
                        strength: 9,
                        charisma: 6,
                        wisdom: 12,
                        class: "🌽"
                    },
                    Pig: {
                        strength: 12,
                        charisma: 8,
                        wisdom: 5,
                        class: "🌽"
                    },
                    Sheep: {
                        strength: 7,
                        charisma: 11,
                        wisdom: 7,
                        class: "🌽"
                    },
                    Duck: {
                        strength: 4,
                        charisma: 8,
                        wisdom: 12,
                        class: "🌽"
                    },
                    Dog: {
                        strength: 9,
                        charisma: 8,
                        wisdom: 9,
                        class: "🌽"
                    },
                    Cat: {
                        strength: 7,
                        charisma: 7,
                        wisdom: 9,
                        class: "🐾"
                    },
                    Rabbit: {
                        strength: 6,
                        charisma: 9,
                        wisdom: 8,
                        class: "🐾"
                    },
                    Goldfish: {
                        strength: 4,
                        charisma: 15,
                        wisdom: 3,
                        class: "🐾"
                    },
                    Hamster: {
                        strength: 5,
                        charisma: 11,
                        wisdom: 7,
                        class: "🐾"
                    },
                    Turtle: {
                        strength: 5,
                        charisma: 7,
                        wisdom: 12,
                        class: "🐾"
                    },
                    Kitten: {
                        strength: 5,
                        charisma: 14,
                        wisdom: 4,
                        class: "🐾"
                    },
                    Puppy: {
                        strength: 5,
                        charisma: 15,
                        wisdom: 3,
                        class: "🐾"
                    },
                    Bear: {
                        strength: 13,
                        charisma: 6,
                        wisdom: 9,
                        class: "🌲"
                    },
                    Moose: {
                        strength: 11,
                        charisma: 7,
                        wisdom: 9,
                        class: "🌲"
                    },
                    Fox: {
                        strength: 10,
                        charisma: 8,
                        wisdom: 8,
                        class: "🌲"
                    },
                    Raccoon: {
                        strength: 6,
                        charisma: 4,
                        wisdom: 12,
                        class: "🌲"
                    },
                    Squirrel: {
                        strength: 4,
                        charisma: 15,
                        wisdom: 6,
                        class: "🌲"
                    },
                    Owl: {
                        strength: 6,
                        charisma: 2,
                        wisdom: 15,
                        class: "🌲"
                    },
                    Hedgehog: {
                        strength: 11,
                        charisma: 6,
                        wisdom: 7,
                        class: "🌲"
                    },
                    "Baby Penguin": {
                        strength: 4,
                        charisma: 14,
                        wisdom: 6,
                        class: "❄️"
                    },
                    Penguin: {
                        strength: 14,
                        charisma: 6,
                        wisdom: 6,
                        class: "❄️"
                    },
                    "Arctic Fox": {
                        strength: 9,
                        charisma: 7,
                        wisdom: 9,
                        class: "❄️"
                    },
                    "Snowy Owl": {
                        strength: 7,
                        charisma: 4,
                        wisdom: 13,
                        class: "❄️"
                    },
                    "Polar Bear": {
                        strength: 12,
                        charisma: 7,
                        wisdom: 9,
                        class: "❄️"
                    },
                    "Arctic Hare": {
                        strength: 8,
                        charisma: 7,
                        wisdom: 7,
                        class: "❄️"
                    },
                    Seal: {
                        strength: 7,
                        charisma: 11,
                        wisdom: 8,
                        class: "❄️"
                    },
                    Walrus: {
                        strength: 15,
                        charisma: 6,
                        wisdom: 5,
                        class: "❄️"
                    },
                    Tiger: {
                        strength: 15,
                        charisma: 7,
                        wisdom: 8,
                        class: "🌴"
                    },
                    Panther: {
                        strength: 14,
                        charisma: 9,
                        wisdom: 6,
                        class: "🌴"
                    },
                    Cockatoo: {
                        strength: 4,
                        charisma: 10,
                        wisdom: 10,
                        class: "🌴"
                    },
                    Orangutan: {
                        strength: 12,
                        charisma: 8,
                        wisdom: 9,
                        class: "🌴"
                    },
                    Anaconda: {
                        strength: 11,
                        charisma: 5,
                        wisdom: 8,
                        class: "🌴"
                    },
                    Macaw: {
                        strength: 5,
                        charisma: 12,
                        wisdom: 8,
                        class: "🌴"
                    },
                    Jaguar: {
                        strength: 13,
                        charisma: 7,
                        wisdom: 7,
                        class: "🌴"
                    },
                    Capuchin: {
                        strength: 7,
                        charisma: 7,
                        wisdom: 7,
                        class: "🌴"
                    },
                    Toucan: {
                        strength: 6,
                        charisma: 10,
                        wisdom: 9,
                        class: "🌴"
                    },
                    Parrot: {
                        strength: 5,
                        charisma: 14,
                        wisdom: 9,
                        class: "🌴"
                    },
                    Elf: {
                        strength: 10,
                        charisma: 12,
                        wisdom: 14,
                        class: "⚔️"
                    },
                    Witch: {
                        strength: 9,
                        charisma: 8,
                        wisdom: 15,
                        class: "⚔️"
                    },
                    Wizard: {
                        strength: 9,
                        charisma: 10,
                        wisdom: 17,
                        class: "⚔️"
                    },
                    Fairy: {
                        strength: 8,
                        charisma: 11,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    "Slime Monster": {
                        strength: 14,
                        charisma: 10,
                        wisdom: 10,
                        class: "⚔️"
                    },
                    Jester: {
                        strength: 12,
                        charisma: 18,
                        wisdom: 12,
                        class: "⚔️"
                    },
                    Dragon: {
                        strength: 18,
                        charisma: 10,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    Unicorn: {
                        strength: 16,
                        charisma: 17,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    Queen: {
                        strength: 10,
                        charisma: 16,
                        wisdom: 16,
                        class: "⚔️"
                    },
                    King: {
                        strength: 18,
                        charisma: 16,
                        wisdom: 18,
                        class: "⚔️"
                    },
                    "Snow Globe": {
                        strength: 8,
                        charisma: 15,
                        wisdom: 11,
                        class: "☃️"
                    },
                    "Holiday Gift": {
                        strength: 7,
                        charisma: 16,
                        wisdom: 8,
                        class: "☃️"
                    },
                    "Hot Chocolate": {
                        strength: 10,
                        charisma: 10,
                        wisdom: 13,
                        class: "☃️"
                    },
                    "Gingerbread Man": {
                        strength: 10,
                        charisma: 18,
                        wisdom: 13,
                        class: "☃️"
                    },
                    "Gingerbread House": {
                        strength: 11,
                        charisma: 17,
                        wisdom: 12,
                        class: "☃️"
                    },
                    "Holiday Wreath": {
                        strength: 7,
                        charisma: 13,
                        wisdom: 12,
                        class: "☃️"
                    },
                    Snowman: {
                        strength: 14,
                        charisma: 18,
                        wisdom: 16,
                        class: "☃️"
                    },
                    "Santa Claus": {
                        strength: 16,
                        charisma: 19,
                        wisdom: 17,
                        class: "☃️"
                    },
                    "Two of Spades": {
                        strength: 7,
                        charisma: 10,
                        wisdom: 16,
                        class: "🏰"
                    },
                    "Eat Me": {
                        strength: 12,
                        charisma: 12,
                        wisdom: 12,
                        class: "🏰"
                    },
                    "Drink Me": {
                        strength: 10,
                        charisma: 13,
                        wisdom: 11,
                        class: "🏰"
                    },
                    Alice: {
                        strength: 8,
                        charisma: 16,
                        wisdom: 8,
                        class: "🏰"
                    },
                    "Queen of Hearts": {
                        strength: 14,
                        charisma: 6,
                        wisdom: 12,
                        class: "🏰"
                    },
                    Dormouse: {
                        strength: 16,
                        charisma: 10,
                        wisdom: 14,
                        class: "🏰"
                    },
                    "White Rabbit": {
                        strength: 11,
                        charisma: 14,
                        wisdom: 17,
                        class: "🏰"
                    },
                    "Cheshire Cat": {
                        strength: 10,
                        charisma: 17,
                        wisdom: 15,
                        class: "🏰"
                    },
                    Caterpillar: {
                        strength: 13,
                        charisma: 14,
                        wisdom: 18,
                        class: "🏰"
                    },
                    "Mad Hatter": {
                        strength: 12,
                        charisma: 18,
                        wisdom: 15,
                        class: "🏰"
                    },
                    "King of Hearts": {
                        strength: 17,
                        charisma: 19,
                        wisdom: 16,
                        class: "🏰"
                    }
                },
                i = {
                    common: ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Baby Penguin", "Penguin", "Arctic Fox", "Snowy Owl", "Polar Bear", "Arctic Hare", "Seal", "Walrus", "Tiger", "Panther", "Cockatoo", "Orangutan", "Anaconda", "Macaw", "Jaguar", "Capuchin", "Toucan", "Parrot"],
                    uncommon: ["Elf", "Witch", "Wizard", "Fairy", "Slime Monster", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts"],
                    rare: ["Jester", "Dragon", "Queen", "Gingerbread Man", "Gingerbread House", "Dormouse", "White Rabbit", "Cheshire Cat"],
                    epic: ["Unicorn", "Snowman", "Caterpillar", "Mad Hatter"],
                    legendary: ["King", "Santa Claus", "King of Hearts"]
                },
                c = {
                    "Medical Kit": {
                        desc: "Heal for +3 health after combat",
                        icon: "fas fa-medkit",
                        color: "#33cc33",
                        rarity: "Rare"
                    },
                    "Fury Relic": {
                        desc: "x2 ALL damage in combat turn 1",
                        icon: "fas fa-angry",
                        color: "#b30000",
                        rarity: "Common"
                    },
                    "Survival Guide": {
                        desc: "Heal for +3 health at the start of combat",
                        icon: "fas fa-book-medical",
                        color: "#66ff99",
                        rarity: "Rare"
                    },
                    "Steel Socks": {
                        desc: "Attack for 2 damage each time you take damage",
                        icon: "fas fa-socks",
                        color: "#8ea0a4",
                        rarity: "Common"
                    },
                    "Piggy Bank": {
                        desc: "+6 coins each time you gain coins",
                        icon: "fas fa-piggy-bank",
                        color: "#f6a9cb",
                        rarity: "Common"
                    },
                    "Lucky Feather": {
                        desc: "Increase your odds to get lucky in ? stages",
                        icon: "fas fa-feather",
                        color: "#ffe6cc",
                        rarity: "Uncommon"
                    },
                    Coupon: {
                        desc: "+10% off items in the shop",
                        icon: "fas fa-ticket-alt",
                        color: "#4dc3ff",
                        rarity: "Uncommon"
                    },
                    Cheese: {
                        desc: "Heal for +5 health after visiting a shop",
                        icon: "fas fa-cheese",
                        color: "#ffcd05",
                        rarity: "Rare"
                    },
                    "Tasty Egg": {
                        desc: "Heal for +7 when recovering in a Rest stage",
                        icon: "fas fa-egg",
                        color: "#f2f2f2",
                        rarity: "Common"
                    },
                    "Training Weights": {
                        desc: "+2 stats when upgrading a card in a Rest stage",
                        icon: "fas fa-dumbbell",
                        color: "#999999",
                        rarity: "Common"
                    },
                    "Mighty Shield": {
                        desc: "Block the first damage you would take every combat",
                        icon: "fas fa-shield-alt",
                        color: "#3366ff",
                        rarity: "Epic"
                    },
                    "Toxic Waste": {
                        desc: "x2 ALL damage in combat",
                        icon: "fas fa-skull-crossbones",
                        color: "#33ff33",
                        rarity: "Epic"
                    },
                    "Lifeline Totem": {
                        desc: "Attack with x2 damage when you're below 20 health",
                        icon: "fas fa-heartbeat",
                        color: "#ff3333",
                        rarity: "Uncommon"
                    },
                    "Cursed Hourglass": {
                        desc: "At the start of combat, take 3 and deal 10 damage",
                        icon: "fas fa-hourglass-half",
                        color: "#730099",
                        rarity: "Common"
                    },
                    "Band-Aid": {
                        desc: "Heal for +15 health before boss battles",
                        icon: "fas fa-band-aid",
                        color: "#f5b575",
                        rarity: "Uncommon"
                    },
                    "Elder Coins": {
                        desc: "On pick up, gain 100 coins",
                        icon: "fas fa-coins",
                        color: "#e6c97e",
                        rarity: "Epic"
                    },
                    "Captain's Anchor": {
                        desc: "When you take damage, take 1 less",
                        icon: "fas fa-anchor",
                        color: "#7575a3",
                        rarity: "Epic"
                    },
                    "Chess Pieces": {
                        desc: "Deal 4 damage to the enemy when you tie",
                        icon: "fas fa-chess",
                        color: "#e0e0eb",
                        rarity: "Uncommon"
                    },
                    "Pink Hippo": {
                        desc: "+2 Strength for your cards, but card select only has 2 options",
                        icon: "fas fa-hippo",
                        color: "#ffb3ff",
                        rarity: "Legendary"
                    },
                    "Anorak's Wizard Cap": {
                        desc: "+2 Wisdom for your cards, but you skip over rest stages",
                        icon: "fas fa-hat-wizard",
                        color: "#5c85d6",
                        rarity: "Legendary"
                    },
                    "Dave's Doggo": {
                        desc: "+2 Charisma for your cards, but ? stages are always bad",
                        icon: "fas fa-dog",
                        color: "#994d00",
                        rarity: "Legendary"
                    },
                    "Anubis' Obelisk": {
                        desc: "-1 to ALL enemy attributes, but no more gaining gold",
                        icon: "fas fa-monument",
                        color: "#d8b470",
                        rarity: "Legendary"
                    },
                    "Farm Tractor": {
                        desc: "For your attributes, +1 to 🌽, but -1 to 🌴 Blooks",
                        icon: "fas fa-tractor",
                        color: "#367c2b",
                        rarity: "Common"
                    },
                    "Magic Seedling": {
                        desc: "For your attributes, +1 to 🌲 & 🌴, but -1 to 🌽 & 🐾 Blooks",
                        icon: "fas fa-seedling",
                        color: "#60b649",
                        rarity: "Rare"
                    },
                    "Just A Bone": {
                        desc: "For your attributes, +1 to 🐾, but -1 to 🌲 Blooks",
                        icon: "fas fa-bone",
                        color: "#f2f2f2",
                        rarity: "Common"
                    },
                    "Cozy Igloo": {
                        desc: "For your attributes, +1 to ❄️ & ☃️, but -1 to ⚔️ & 🏰 Blooks",
                        icon: "fas fa-igloo",
                        color: "#d6ecef",
                        rarity: "Rare"
                    },
                    "King's Crown": {
                        desc: "For your attributes, +1 to ⚔️, but -1 to 🏰 Blooks",
                        icon: "fas fa-crown",
                        color: "#ffd700",
                        rarity: "Common"
                    },
                    "Sacred Scroll": {
                        desc: "For your attributes, +1 to 🏰, but -1 to ⚔️ Blooks",
                        icon: "fas fa-scroll",
                        color: "#d7bb93",
                        rarity: "Common"
                    }
                },
                _ = {
                    common: ["Fury Relic", "Steel Socks", "Piggy Bank", "Tasty Egg", "Training Weights", "Cursed Hourglass", "Farm Tractor", "Just A Bone", "King's Crown", "Sacred Scroll"],
                    uncommon: ["Lucky Feather", "Coupon", "Lifeline Totem", "Band-Aid", "Chess Pieces"],
                    rare: ["Medical Kit", "Survival Guide", "Cheese", "Magic Seedling", "Cozy Igloo"],
                    epic: ["Mighty Shield", "Toxic Waste", "Elder Coins", "Captain's Anchor"],
                    legendary: ["Pink Hippo", "Anorak's Wizard Cap", "Dave's Doggo", "Anubis' Obelisk"]
                },
                m = {
                    small: [
                        ["legendary", 1],
                        ["epic", 5],
                        ["rare", 15],
                        ["uncommon", 20],
                        ["common", 59]
                    ],
                    big: [
                        ["legendary", 5],
                        ["epic", 10],
                        ["rare", 25],
                        ["uncommon", 30],
                        ["common", 30]
                    ],
                    boss: [
                        ["legendary", 20],
                        ["epic", 20],
                        ["rare", 20],
                        ["uncommon", 20],
                        ["common", 20]
                    ]
                },
                d = {
                    small: [
                        ["legendary", .001],
                        ["epic", .099],
                        ["rare", 2],
                        ["uncommon", 7],
                        ["common", 90]
                    ],
                    big: [
                        ["legendary", 1],
                        ["epic", 5],
                        ["rare", 12],
                        ["uncommon", 50],
                        ["common", 32]
                    ],
                    boss: [
                        ["legendary", 2],
                        ["epic", 7],
                        ["rare", 17],
                        ["uncommon", 55],
                        ["common", 19]
                    ]
                },
                f = n({
                    blook: "Chick"
                }, l.Chick),
                y = function(e, t, a) {
                    for (var o = [], r = [], c = [], f = d[e], y = m[e]; o.length < (t || 3);) {
                        var p = 100 * Math.random(),
                            u = 0;
                        if (Math.random() <= ("boss" === e ? .2 : .05) && !a) {
                            for (var h = 0; h < y.length; h++)
                                if ((u += y[h][1]) >= p) {
                                    var g = Object(s.m)(_[y[h][0]]);
                                    c.includes(g) || (o.push(g), c.push(g));
                                    break
                                }
                        } else
                            for (var w = 0; w < f.length; w++)
                                if ((u += f[w][1]) >= p) {
                                    var b = Object(s.m)(i[f[w][0]]);
                                    r.includes(b) || (o.push(n({
                                        blook: b
                                    }, l[b])), r.push(b));
                                    break
                                }
                    }
                    return o
                }
        },
        ipU3: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___3AqHR-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__one___1re73-camelCase 8s linear}@keyframes styles__one___1re73-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___fE1pk-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__two___3rMIq-camelCase 8s linear}@keyframes styles__two___3rMIq-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__leftBlook___2HRpk-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);right:100vw;animation:styles__leftBlook___2HRpk-camelCase 8s linear}@keyframes styles__leftBlook___2HRpk-camelCase{0%{right:100vw}25%{right:100vw}30%{right:60vw}55%{right:60vw}60%{right:calc(50vw - 17.5vh)}92.5%{right:calc(50vw - 17.5vh)}97.5%{right:100vw}to{right:100vw}}.styles__vsText___516Yx-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:7vw;text-align:center;position:absolute;opacity:0;top:57.5%;left:50%;transform:translate(-50%,-50%);animation:styles__vsText___516Yx-camelCase 8s linear}@keyframes styles__vsText___516Yx-camelCase{0%{opacity:0}25%{opacity:0}30%{opacity:1}55%{opacity:1}57.5%{opacity:0}to{opacity:0}}.styles__rightBlook___PsIhT-camelCase{width:35vh;height:40.25vh;position:absolute;top:calc(57.5% - 20.125vh);left:100vw;animation:styles__rightBlook___PsIhT-camelCase 8s linear}@keyframes styles__rightBlook___PsIhT-camelCase{0%{left:100vw}25%{left:100vw}30%{left:60vw}55%{opacity:1}57.5%{opacity:0}to{left:60vw;opacity:0}}.styles__headerThree___1qsKi-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;animation:styles__six___38mzy-camelCase 8s linear}@keyframes styles__six___38mzy-camelCase{0%{left:10%;top:100%}40%{top:100%}45%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___2Yga6-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                headerOne: "styles__headerOne___3AqHR-camelCase",
                one: "styles__one___1re73-camelCase",
                headerTwo: "styles__headerTwo___fE1pk-camelCase",
                two: "styles__two___3rMIq-camelCase",
                leftBlook: "styles__leftBlook___2HRpk-camelCase",
                vsText: "styles__vsText___516Yx-camelCase",
                rightBlook: "styles__rightBlook___PsIhT-camelCase",
                headerThree: "styles__headerThree___1qsKi-camelCase",
                six: "styles__six___38mzy-camelCase",
                container: "styles__container___2Yga6-camelCase"
            }
        },
        j0Ua: function(e, t, a) {
            var s = a("IGEA");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        jIL8: function(e, t, a) {
            var s = a("NZV8");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        kIZ0: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__headerOne___11U29-camelCase{color:#fff;position:absolute;text-align:center;width:40%;height:15%;top:5%;left:-40%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__one___1bk8b-camelCase 8s linear}@keyframes styles__one___1bk8b-camelCase{0%{left:30%;opacity:0;transform:scale(.5)}6%{opacity:0;transform:scale(.5)}8%{opacity:1;transform:scale(1)}9%{transform:scale(1.2)}10.5%{transform:scale(1)}85%{left:30%}90%{left:-40%}to{left:-40%}}.styles__headerTwo___2f98D-camelCase{color:#fff;position:absolute;text-align:center;width:70%;height:12%;top:21.5%;left:-70%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__two___HYG8w-camelCase 8s linear}@keyframes styles__two___HYG8w-camelCase{0%{left:15%;opacity:0;transform:scale(.5)}15%{opacity:0;transform:scale(.5)}17%{opacity:1;transform:scale(1)}18%{transform:scale(1.2)}18.5%{transform:scale(1)}90%{left:15%}95%{left:-70%}to{left:-70%}}.styles__answerBox___2sasI-camelCase{position:absolute;height:40%;width:30%;top:40%;left:-70%;background-color:#fff;overflow:hidden;border-radius:15px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);animation:styles__three___5V96E-camelCase 8s linear}@keyframes styles__three___5V96E-camelCase{0%{left:-30%}20%{left:-30%}25%{left:15%}92.5%{left:15%}97.5%{left:-70%}to{left:-70%}}.styles__answerHeader___1JZtY-camelCase{position:absolute;height:10%;width:100%;top:0;left:0;background-color:#9a49aa}.styles__answerOne___2el-R-camelCase{left:1%;background-color:#ffa31e}.styles__answerOne___2el-R-camelCase,.styles__answerTwo___b-Vh7-camelCase{position:absolute;height:29%;width:48.5%;top:40%;border-radius:8px}.styles__answerTwo___b-Vh7-camelCase{left:50.5%;background-color:#3378ff}.styles__answerThree___1Fii5-camelCase{left:1%;background-color:#00cf77}.styles__answerFour___aWiQd-camelCase,.styles__answerThree___1Fii5-camelCase{position:absolute;height:29%;width:48.5%;top:70%;border-radius:8px}.styles__answerFour___aWiQd-camelCase{left:50.5%;background-color:#ff462b}.styles__arrow___1Mfqh-camelCase{font-size:10vw;color:#fff;position:absolute;top:60%;left:57.5%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;text-shadow:2px 2px 8px grey}.styles__arrowContainer___31fax-camelCase{position:absolute;top:0;left:-100%;height:100%;width:100%;animation:styles__four___1p2PQ-camelCase 8s linear}@keyframes styles__four___1p2PQ-camelCase{0%{left:0;opacity:0;transform:scale(.5)}27%{opacity:0;transform:scale(.5)}29%{opacity:1;transform:scale(1)}30%{transform:scale(1.2)}31.5%{transform:scale(1)}92.5%{left:0}97.5%{left:-100%}to{left:-100%}}.styles__check___2E2G3-camelCase{font-size:8.5vw;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;text-shadow:2px 2px 8px grey}.styles__checkBox___27ZDp-camelCase{height:80%;width:80%;top:10%;left:10%;background-color:#0bc2cf}.styles__checkBox___27ZDp-camelCase,.styles__checkBoxBorder___2dRtG-camelCase{position:absolute;border-radius:10%}.styles__checkBoxBorder___2dRtG-camelCase{height:15vw;width:15vw;top:60%;left:-15vw;transform:translateY(-50%);background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);animation:styles__five___34gNr-camelCase 8s linear}@keyframes styles__five___34gNr-camelCase{0%{left:100%}35%{left:100%}40%{left:70%}92.5%{left:70%}97.5%{left:-15vw}to{left:-15vw}}.styles__headerThree___JnHIz-camelCase{color:#fff;position:absolute;text-align:center;width:80%;height:12%;top:84%;left:-80%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__six___2yD4_-camelCase 8s linear}@keyframes styles__six___2yD4_-camelCase{0%{left:10%;top:100%}45%{top:100%}50%{top:84%}95%{left:10%}to{left:-80%}}.styles__container___1RRMm-camelCase{width:100vw;height:calc(100vh - 65px);position:absolute;top:65px;left:0}", ""]), t.locals = {
                headerOne: "styles__headerOne___11U29-camelCase",
                one: "styles__one___1bk8b-camelCase",
                headerTwo: "styles__headerTwo___2f98D-camelCase",
                two: "styles__two___HYG8w-camelCase",
                answerBox: "styles__answerBox___2sasI-camelCase",
                three: "styles__three___5V96E-camelCase",
                answerHeader: "styles__answerHeader___1JZtY-camelCase",
                answerOne: "styles__answerOne___2el-R-camelCase",
                answerTwo: "styles__answerTwo___b-Vh7-camelCase",
                answerThree: "styles__answerThree___1Fii5-camelCase",
                answerFour: "styles__answerFour___aWiQd-camelCase",
                arrow: "styles__arrow___1Mfqh-camelCase",
                arrowContainer: "styles__arrowContainer___31fax-camelCase",
                four: "styles__four___1p2PQ-camelCase",
                check: "styles__check___2E2G3-camelCase",
                checkBox: "styles__checkBox___27ZDp-camelCase",
                checkBoxBorder: "styles__checkBoxBorder___2dRtG-camelCase",
                five: "styles__five___34gNr-camelCase",
                headerThree: "styles__headerThree___JnHIz-camelCase",
                six: "styles__six___2yD4_-camelCase",
                container: "styles__container___1RRMm-camelCase"
            }
        },
        kOqK: function(e, t, a) {
            var s = a("9BmH");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        lWrb: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("GmZ3"),
                _ = a.n(c),
                m = a("0oXL"),
                d = a("pMTK"),
                f = a("74sb"),
                y = a("gvfT");

            function p(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            var u = function(e) {
                var t = e.card,
                    a = e.flipped,
                    s = e.onClick,
                    n = e.attribute,
                    r = e.content,
                    l = e.isArtifact;
                return o.a.createElement("div", {
                    className: _.a.card
                }, o.a.createElement("div", {
                    className: i()(_.a.innerCard, p({}, _.a.flipped, a))
                }, o.a.createElement("div", {
                    className: _.a.cardBack
                }, "B"), r ? o.a.createElement("div", {
                    className: _.a.cardFront
                }, r) : l ? o.a.createElement("div", {
                    className: _.a.cardFront
                }, o.a.createElement("div", {
                    className: _.a.headerContainer
                }, o.a.createElement("div", {
                    className: _.a.nameText
                }, t), o.a.createElement("div", {
                    className: _.a.rarityText,
                    style: {
                        color: f.q[y.a[t].rarity]
                    }
                }, y.a[t].rarity)), o.a.createElement("i", {
                    className: i()(y.a[t].icon, _.a.artifactIcon),
                    style: {
                        color: y.a[t].color
                    }
                }), o.a.createElement("div", {
                    className: _.a.artifactDesc
                }, y.a[t].desc)) : o.a.createElement("div", {
                    className: _.a.cardFront
                }, t.blook ? o.a.createElement("div", {
                    className: _.a.blookHolder
                }, o.a.createElement(m.a, {
                    name: t.blook,
                    className: _.a.blook
                })) : null, o.a.createElement("div", {
                    className: _.a.headerContainer
                }, o.a.createElement("div", {
                    className: _.a.nameText
                }, t.blook), o.a.createElement("div", {
                    className: _.a.rarityText,
                    style: {
                        color: f.q[Object(d.a)(t.blook)]
                    }
                }, Object(d.a)(t.blook)), o.a.createElement("div", {
                    className: _.a.classText
                }, t.class || "")), o.a.createElement("div", {
                    className: _.a.powerContainer
                }, o.a.createElement("div", {
                    className: i()(_.a.powerRow, p({}, _.a.powerSelect, s), p({}, _.a.powerSelected, "strength" === n)),
                    role: "button",
                    tabIndex: 0,
                    onClick: void 0 !== s ? function() {
                        return s("strength")
                    } : function() {}
                }, o.a.createElement("div", {
                    className: _.a.outerPower
                }, o.a.createElement("div", {
                    className: _.a.innerPower,
                    style: {
                        width: "".concat(t.strength / 20 * 100, "%"),
                        backgroundColor: "rgb(151, 15, 5)"
                    }
                }), o.a.createElement("div", {
                    className: _.a.powerInfo
                }, o.a.createElement("i", {
                    className: i()("fas fa-fist-raised", _.a.powerIcon)
                }), o.a.createElement("div", {
                    className: _.a.powerText
                }, "Strength"))), o.a.createElement("div", {
                    className: _.a.powerBox,
                    style: {
                        backgroundColor: "rgb(151, 15, 5)"
                    }
                }, t.strength)), o.a.createElement("div", {
                    className: i()(_.a.powerRow, p({}, _.a.powerSelect, s), p({}, _.a.powerSelected, "charisma" === n)),
                    role: "button",
                    tabIndex: 0,
                    onClick: void 0 !== s ? function() {
                        return s("charisma")
                    } : function() {}
                }, o.a.createElement("div", {
                    className: _.a.outerPower
                }, o.a.createElement("div", {
                    className: _.a.innerPower,
                    style: {
                        width: "".concat(t.charisma / 20 * 100, "%"),
                        backgroundColor: "rgb(7, 21, 93)"
                    }
                }), o.a.createElement("div", {
                    className: _.a.powerInfo
                }, o.a.createElement("i", {
                    className: i()("fas fa-heart", _.a.powerIcon)
                }), o.a.createElement("div", {
                    className: _.a.powerText
                }, "Charisma"))), o.a.createElement("div", {
                    className: _.a.powerBox,
                    style: {
                        backgroundColor: "rgb(7, 21, 93)"
                    }
                }, t.charisma)), o.a.createElement("div", {
                    className: i()(_.a.powerRow, p({}, _.a.powerSelect, s), p({}, _.a.powerSelected, "wisdom" === n)),
                    role: "button",
                    tabIndex: 0,
                    onClick: void 0 !== s ? function() {
                        return s("wisdom")
                    } : function() {}
                }, o.a.createElement("div", {
                    className: _.a.outerPower
                }, o.a.createElement("div", {
                    className: _.a.innerPower,
                    style: {
                        width: "".concat(t.wisdom / 20 * 100, "%"),
                        backgroundColor: "rgb(148, 12, 128)"
                    }
                }), o.a.createElement("div", {
                    className: _.a.powerInfo
                }, o.a.createElement("i", {
                    className: i()("fas fa-question", _.a.powerIcon)
                }), o.a.createElement("div", {
                    className: _.a.powerText
                }, "Wisdom"))), o.a.createElement("div", {
                    className: _.a.powerBox,
                    style: {
                        backgroundColor: "rgb(148, 12, 128)"
                    }
                }, t.wisdom))))))
            };
            u.propTypes = {
                card: r.a.oneOfType([r.a.shape({
                    blook: r.a.string,
                    strength: r.a.number,
                    charisma: r.a.number,
                    wisdom: r.a.number
                }), r.a.string]),
                flipped: r.a.bool,
                onClick: r.a.func,
                attribute: r.a.string,
                content: r.a.element,
                isArtifact: r.a.bool
            }, t.a = u
        },
        ozTy: function(e, t, a) {
            "use strict";
            var s = a("74sb"),
                o = ["Unlock new Blooks in the Market!", "Tokens can be used to unlock Blooks in the Market!", "In Factory, match Blooks of the same class for bonuses!", "Check your lifetime Stats on the Stats page!", "Anyone can create a Question Set on the Create page!", "You can sell duplicate Blooks on the Blooks page!", "Follow us on social media @PlayBlooket for updates!", "In Factory, make sure to keep upgrading your Blooks!", "Use the Discover page to find new question sets!", "Create or login to an account to unlock more Blooks!", "Create or login to an account to participate in events!", "Create or login to an account to track your stats!", "Yes, we are always working on new game modes and Blooks!", "Having fun while you learn can help you remember information!", "Never give up in a game, comebacks happen all the time!"];
            t.a = function() {
                return Object(s.m)(o)
            }
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
        "r+wn": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___Dnq5V-camelCase{width:15vw;left:15vw;display:flex;align-items:center;justify-content:center;resize:both;position:absolute;top:0;left:0}.styles__donut___23PPs-camelCase{border-radius:50%}.styles__track___24e9b-camelCase{fill:transparent;stroke:#c43a35}.styles__indicator___zXS36-camelCase{fill:transparent;stroke:#4bc22e;transform:rotate(-90deg);transform-origin:center;transition:stroke-dasharray .4s ease}.styles__text___2HaZR-camelCase{font-family:Nunito,sans-serif;fill:#fff;font-weight:700;font-size:2.8vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                container: "styles__container___Dnq5V-camelCase",
                donut: "styles__donut___23PPs-camelCase",
                track: "styles__track___24e9b-camelCase",
                indicator: "styles__indicator___zXS36-camelCase",
                text: "styles__text___2HaZR-camelCase"
            }
        },
        r9Y0: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("7t86"),
                i = a.n(l);

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function m(e, t) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        a = Reflect.construct(s, arguments, o)
                    } else a = s.apply(this, arguments);
                    return f(this, a)
                }
            }

            function f(e, t) {
                if (t && ("object" === c(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var p = function() {
                    var e, t = 0;

                    function a(e, t, a, s, o) {
                        this.size = e, this.x = t, this.y = a, this.vx = s, this.vy = o, this.div = document.createElement("div"), this.div.classList.add(i.a.snowflake), this.div.style.width = "".concat(this.size, "px"), this.div.style.height = "".concat(this.size, "px")
                    }

                    function s() {
                        for (var t = e.length; t--;) {
                            var a = e[t];
                            a.move(), a.draw()
                        }
                        window.requestAnimationFrame(s)
                    }
                    return a.prototype.move = function() {
                        this.x += this.vx + Math.min(Math.max(t, -10), 10), this.y += this.vy, this.x > window.innerWidth + this.size && (this.x -= window.innerWidth + this.size), this.x < -this.size && (this.x += window.innerWidth + this.size), this.y > window.innerHeight + this.size && (this.x = Math.random() * window.innerWidth, this.y -= window.innerHeight + 2 * this.size)
                    }, a.prototype.draw = function() {
                        var e = "translate3d(".concat(this.x, "px, ").concat(this.y, "px, 0)");
                        this.div.style.transform = e, this.div.style.MozTransform = e, this.div.style.webkitTransform = e
                    }, a.init = function(o, n) {
                        e = [];
                        for (var r = n; r--;) {
                            var l = 12 * (Math.random() + .2) + 1,
                                i = new a(l, Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() - .5, .3 * l);
                            o.appendChild(i.div), e.push(i)
                        }
                        window.ondeviceorientation = function(e) {
                            e && (t = e.gamma / 10)
                        }, s()
                    }, a
                }(),
                u = function(e) {
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
                    var t, a, s, n = d(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = n.call(this, e)).state = {}, t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.startTimeout = setTimeout((function() {
                                p.init(document.getElementById("snow"), e.props.count)
                            }), 500)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.startTimeout)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.a.createElement("div", {
                                id: "snow",
                                className: i.a.snow,
                                style: {
                                    zIndex: this.props.zIndex
                                }
                            })
                        }
                    }]) && _(t.prototype, a), s && _(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(o.a.Component);
            u.propTypes = {
                zIndex: r.a.number,
                count: r.a.number
            }, t.a = u
        },
        rtQy: function(e, t, a) {
            var s = a("ipU3");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        t4Pf: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("4HzQ"),
                i = a("yUSY"),
                c = a.n(i),
                _ = a("74sb"),
                m = function(e) {
                    var t = e.noExpand;
                    return o.a.createElement("div", {
                        className: c.a.container
                    }, t ? null : o.a.createElement("div", {
                        className: c.a.expandBackground
                    }), o.a.createElement(l.Textfit, {
                        className: c.a.headerOne,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(_.v)("15vw")
                    }, "Good Luck"), o.a.createElement(l.Textfit, {
                        className: c.a.headerTwo,
                        mode: "multi",
                        forceSingleModeWidth: !1,
                        min: 1,
                        max: Object(_.v)("15vw")
                    }, "& Let's Go!"))
                };
            m.propTypes = {
                noExpand: r.a.bool
            }, t.a = m
        },
        t5EX: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__teamHolder___11xsi-camelCase{display:flex;flex-direction:column;width:30vw;margin:0 auto 6vh}.styles__teamContainer___3dT3x-camelCase{height:11vh;width:100%;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);z-index:2}.styles__energyContainer___rR31w-camelCase,.styles__teamContainer___3dT3x-camelCase{display:flex;flex-direction:row;align-items:center}.styles__energyContainer___rR31w-camelCase{height:9vh;width:4vw;margin:1vh 0 1vh .5vw;justify-content:center}.styles__energyText___1uwus-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;font-size:3vw;text-align:right}.styles__energyIcon___1HRmW-camelCase{color:#9a49aa;font-size:2.25vw;padding-left:.5vw}.styles__teamBlook___4BQGU-camelCase{margin:auto .75vw auto 1vw;height:8.05vh;width:7vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__teamText___dAm74-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;font-weight:700;font-size:2.5vw;text-align:left;white-space:nowrap}.styles__teamPlayersContainer___2wAXK-camelCase{margin:-2vh auto 0;padding-top:2.5vh;min-height:8vh;width:90%;background-color:#fff;border-radius:7px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);align-content:flex-start;flex-flow:row wrap;z-index:1}.styles__playerContainer___1E6kQ-camelCase,.styles__teamPlayersContainer___2wAXK-camelCase{justify-content:flex-start;display:flex}.styles__playerContainer___1E6kQ-camelCase{flex-direction:row;align-items:center;height:8vh;width:50%;color:#3a3a3a;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .3s cubic-bezier(.39,.5,.15,1.36)}.styles__playerContainer___1E6kQ-camelCase:hover{transform:scale(.9);color:#0bc2cf}.styles__playerContainerNo___ypbiN-camelCase{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;height:8vh;width:50%;color:#3a3a3a;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__selected___30Icr-camelCase{color:#0bc2cf}.styles__playerBlook___2EcNf-camelCase{margin:auto .7vw auto 1vw;height:6.325vh;width:5.5vh}.styles__playerText___26TNI-camelCase{font-family:Nunito,sans-serif;height:6vh;margin-top:auto;margin-bottom:auto;width:calc(100% - 5.5vh - 2.2vw);text-align:left;display:flex;justify-content:center;align-content:center;flex-direction:column}", ""]), t.locals = {
                teamHolder: "styles__teamHolder___11xsi-camelCase",
                teamContainer: "styles__teamContainer___3dT3x-camelCase",
                energyContainer: "styles__energyContainer___rR31w-camelCase",
                energyText: "styles__energyText___1uwus-camelCase",
                energyIcon: "styles__energyIcon___1HRmW-camelCase",
                teamBlook: "styles__teamBlook___4BQGU-camelCase",
                teamText: "styles__teamText___dAm74-camelCase",
                teamPlayersContainer: "styles__teamPlayersContainer___2wAXK-camelCase",
                playerContainer: "styles__playerContainer___1E6kQ-camelCase",
                playerContainerNo: "styles__playerContainerNo___ypbiN-camelCase",
                selected: "styles__selected___30Icr-camelCase",
                playerBlook: "styles__playerBlook___2EcNf-camelCase",
                playerText: "styles__playerText___26TNI-camelCase"
            }
        },
        "u++o": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__snowflake___26V8F-camelCase{display:block;border-radius:50%;transform:translateZ(0);-webkit-user-select:none;-moz-user-select:none;user-select:none;background:radial-gradient(circle farthest-corner,#fff 40%,hsla(0,0%,100%,0) 100%)}.styles__snow___1rkMP-camelCase,.styles__snowflake___26V8F-camelCase{position:absolute}.styles__snow___1rkMP-camelCase{height:100%;width:100%;top:0;left:0;overflow:hidden;pointer-events:none;z-index:-1}", ""]), t.locals = {
                snowflake: "styles__snowflake___26V8F-camelCase",
                snow: "styles__snow___1rkMP-camelCase"
            }
        },
        u6qL: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("TSYQ"),
                i = a.n(l),
                c = a("kOqK"),
                _ = a.n(c),
                m = a("LHn/"),
                d = a("74sb"),
                f = function(e) {
                    var t = e.mode,
                        a = e.amount;
                    return o.a.createElement("div", {
                        className: _.a.container,
                        style: {
                            backgroundImage: "linear-gradient(#31aae0, #bdf)"
                        }
                    }, o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n1)
                    }, "Answer Questions"), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n2)
                    }, "Build Toys (", o.a.createElement("img", {
                        src: m.a.basic.toy,
                        alt: "Toy",
                        style: {
                            width: "5vw"
                        },
                        draggable: !1
                    }), ")"), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n3)
                    }, "Choose Helpers"), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n4)
                    }, "Sabotage, Steal, and Multiply Toys"), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n5)
                    }, "Time" === t ? "Most toys after ".concat(Object(d.l)(a), " ").concat("1" === a ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(d.l)(a), " Toys wins!")), o.a.createElement("div", {
                        className: i()(_.a.text, _.a.n6)
                    }, "Good Luck & Happy Holidays!"))
                };
            f.propTypes = {
                mode: r.a.string,
                amount: r.a.any
            }, t.a = f
        },
        wcqC: function(e, t, a) {
            var s = a("/QI/");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        y0MH: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__container___2QX49-camelCase{height:10vh;width:90vw;margin:3vh auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__vsImg___3jvmf-camelCase{width:5vw;margin:0 3vw}", ""]), t.locals = {
                container: "styles__container___2QX49-camelCase",
                vsImg: "styles__vsImg___3jvmf-camelCase"
            }
        },
        y18I: function(e, t, a) {
            var s = a("t5EX");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        yCIc: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("9WQd"),
                r = a.n(n),
                l = function() {
                    return o.a.createElement("div", {
                        className: r.a.container
                    }, o.a.createElement("div", {
                        className: r.a.starWars
                    }, o.a.createElement("div", {
                        className: r.a.crawl
                    }, o.a.createElement("div", {
                        className: r.a.titleOne
                    }, "Episode VIII.2"), o.a.createElement("div", {
                        className: r.a.titleTwo
                    }, "The Last Blook"), o.a.createElement("div", null, "\n              The FIRST ORDER reigns. Having decimated the peaceful Republic of Blooks,\n              Supreme Leader King Blook now deploys the merciless Unicorns to seize the\n              remaining Medieval boxes in the galaxy.\n            ", o.a.createElement("br", null), o.a.createElement("br", null), "\n              Only General Panther Blook’s band of RESISTANCE fighters stand against the\n              rising tyranny, certain that Jedi Master Tiger Blook will return and restore\n              a spark of hope to the fight.\n            ", o.a.createElement("br", null), o.a.createElement("br", null), "\n              Howdy folks, it’s Ben from Blooket! Sorry about this little interruption. You’ll\n              get back to learning in just a second. Thanks for playing and Happy Holidays!\n            "))))
                };
            l.propTypes = {}, t.a = l
        },
        ySNN: function(e, t, a) {
            var s = a("r+wn");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        yUSY: function(e, t, a) {
            var s = a("RIy+");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        zYB6: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                o = a.n(s),
                n = a("17x9"),
                r = a.n(n),
                l = a("4HzQ"),
                i = a("T7Yb"),
                c = a.n(i),
                _ = a("0oXL"),
                m = a("74sb"),
                d = function(e) {
                    var t = e.winner,
                        a = e.loser,
                        s = e.bothWin,
                        n = e.bothLose,
                        r = e.win,
                        i = e.safe;
                    return o.a.createElement("div", {
                        className: c.a.background
                    }, r ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: c.a.winnerBackground
                    }), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662148586/Media/br/BG_Overlay2.svg",
                        alt: "Background",
                        className: c.a.winnerOverlay
                    })) : o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662759696/Media/br/Defeat_BG_Line_Overlay_V2.svg",
                        alt: "Sadness",
                        className: c.a.loserOverlay
                    }), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662764457/Media/br/Wavy_BG_Overlay_V2.svg",
                        alt: "Waves",
                        className: c.a.loserOverlay2
                    })), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662148586/Media/br/BG_Overlay2.svg",
                        alt: "Background",
                        className: c.a.resultsOverlay
                    }), o.a.createElement("div", {
                        className: c.a.resultsText
                    }, "Match Results"), o.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlookShadow3
                    }), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400412/Media/br/Main_Victor_or_Defeat_Title_BG.svg",
                        alt: "Nameplate",
                        className: c.a.victoryTextBg
                    }), o.a.createElement("img", {
                        src: r ? "https://media.blooket.com/image/upload/v1663059931/Media/br/Victory_Text.png" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Defeated_Text.svg",
                        alt: r ? "Victory" : "Defeat",
                        className: c.a.victoryText
                    }), o.a.createElement("div", {
                        className: c.a.winnerBlookContainer
                    }, o.a.createElement("div", {
                        className: c.a.winnerCorrectContainer
                    }, o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.winnerCorrectBg
                    }), o.a.createElement("img", {
                        src: t.correct ? "https://media.blooket.com/image/upload/v1662400414/Media/br/Green_Check.svg" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Red_X.svg",
                        alt: t.correct ? "Correct" : "Incorrect",
                        className: c.a.winnerCheck
                    }), o.a.createElement("div", {
                        className: c.a.winnerTime,
                        style: {
                            color: t.correct ? "#4fcb11" : "#ff1700"
                        }
                    }, "".concat((t.time / 1e3 || 0).toFixed(3), "s"))), o.a.createElement("div", {
                        className: c.a.winnerEnergyContainer
                    }, o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.winnerCorrectBg
                    }), o.a.createElement("div", {
                        className: c.a.winnerEnergy
                    }, t.energy), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Orange.svg",
                        alt: "Energy",
                        className: c.a.winnerEnergyIcon
                    })), o.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlookShadow2
                    }), o.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlookShadow1
                    }), o.a.createElement(_.a, {
                        name: t.blook,
                        className: c.a.winnerBlook
                    })), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662148586/Media/br/Orange_Nameplate_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.winnerNameplate
                    }), o.a.createElement(l.Textfit, {
                        className: c.a.winnerName,
                        mode: "single",
                        min: 1,
                        max: Object(m.v)("8vw"),
                        forceSingleModeWidth: !1
                    }, t.clone ? "".concat(t.name, " 👾") : t.name), o.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlookShadow3
                    }), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400412/Media/br/Side_Victor_or_Defeat_Title_BG.svg",
                        alt: "Nameplate",
                        className: c.a.defeatTextBg
                    }), o.a.createElement("img", {
                        src: s ? "https://media.blooket.com/image/upload/v1663059931/Media/br/Victory_Text.png" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Defeated_Text.svg",
                        alt: s ? "Victory" : "Defeat",
                        className: c.a.defeatText
                    }), o.a.createElement("div", {
                        className: c.a.loserBlookContainer
                    }, o.a.createElement("div", {
                        className: c.a.loserCorrectContainer
                    }, o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.loserCorrectBg
                    }), o.a.createElement("img", {
                        src: a.correct ? "https://media.blooket.com/image/upload/v1662400414/Media/br/Green_Check.svg" : "https://media.blooket.com/image/upload/v1662400412/Media/br/Red_X.svg",
                        alt: a.correct ? "Correct" : "Incorrect",
                        className: c.a.loserCheck
                    }), o.a.createElement("div", {
                        className: c.a.loserTime,
                        style: {
                            color: a.correct ? "#4fcb11" : "#ff1700"
                        }
                    }, "".concat((a.time / 1e3 || 0).toFixed(3), "s"))), o.a.createElement("div", {
                        className: c.a.loserEnergyContainer
                    }, o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1662400414/Media/br/Energy-Time_BG_No_Tilt.svg",
                        alt: "Nameplate",
                        className: c.a.loserCorrectBg
                    }), o.a.createElement("div", {
                        className: c.a.loserEnergy
                    }, a.energy), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1655936179/Media/br/Energy_Bolt_Blue.svg",
                        alt: "Energy",
                        className: c.a.loserEnergyIcon
                    })), o.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlookShadow2
                    }), o.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlookShadow1
                    }), o.a.createElement(_.a, {
                        name: a.blook,
                        className: c.a.loserBlook
                    })), o.a.createElement("img", {
                        src: "https://media.blooket.com/image/upload/v1655936180/Media/br/Blue_Nameplate.svg",
                        alt: "Nameplate",
                        className: c.a.loserNameplate
                    }), o.a.createElement(l.Textfit, {
                        className: c.a.loserName,
                        mode: "single",
                        min: 1,
                        max: Object(m.v)("8vw"),
                        forceSingleModeWidth: !1
                    }, a.clone ? "".concat(a.name, " 👾") : a.name), n || s ? o.a.createElement("div", {
                        className: c.a.rightText
                    }, i ? "You Can't All Lose" : n ? "You Both Lose" : s ? "You Both Win" : "") : null)
                };
            d.propTypes = {
                winner: r.a.object,
                loser: r.a.object,
                bothWin: r.a.bool,
                bothLose: r.a.bool,
                win: r.a.bool,
                safe: r.a.bool
            }, t.a = d
        },
        zogk: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__amountContainer___3IhWu-camelCase{width:80%;height:70px;display:flex;flex-direction:row;align-items:center;background-color:rgba(0,0,0,.05);border-radius:6px;margin:35px auto 10px}.styles__amountIcon___14sEA-camelCase{font-size:32px;line-height:70px;color:#3a3a3a;margin:0 5px 0 20px}.styles__amountHeader___3leCN-camelCase{font-size:28px;line-height:70px;margin:0 5px 0 10px;flex-grow:1;text-align:left}.styles__amountHeader___3leCN-camelCase,.styles__amountInput___3nmO--camelCase{font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__amountInput___3nmO--camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:auto 20px;padding:5px 15px;width:200px;height:35px;line-height:35px;font-size:26px;text-align:center;outline:none}.styles__amountInput___3nmO--camelCase:focus{border-color:#0bc2cf}", ""]), t.locals = {
                amountContainer: "styles__amountContainer___3IhWu-camelCase",
                amountIcon: "styles__amountIcon___14sEA-camelCase",
                amountHeader: "styles__amountHeader___3leCN-camelCase",
                amountInput: "styles__amountInput___3nmO--camelCase"
            }
        }
    }
]);