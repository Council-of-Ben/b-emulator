(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        "+MB7": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "a", (function() {
                return o
            }));
            var r = window.CafeValues = {
                    Toast: {
                        type: "food",
                        profits: [0, 1, 30, 300, 1e3, 2e3],
                        prices: [0, 300, 5250, 42500, 13e4]
                    },
                    Cereal: {
                        type: "food",
                        profits: [0, 10, 150, 1500, 5e3, 1e4],
                        prices: [5, 1500, 26250, 212500, 65e4]
                    },
                    Yogurt: {
                        type: "food",
                        profits: [0, 30, 450, 4500, 15e3, 3e4],
                        prices: [10, 4500, 78750, 637500, 195e4]
                    },
                    "Breakfast Combo": {
                        type: "food",
                        profits: [0, 60, 900, 9e3, 3e4, 6e4],
                        prices: [50, 9e3, 157500, 1275e3, 39e5]
                    },
                    "Orange Juice": {
                        type: "food",
                        profits: [0, 100, 1500, 15e3, 5e4, 1e5],
                        prices: [200, 15e3, 262500, 2125e3, 65e5]
                    },
                    Milk: {
                        type: "food",
                        profits: [0, 150, 2250, 22500, 75e3, 15e4],
                        prices: [500, 22500, 393750, 3187500, 975e4]
                    },
                    Waffle: {
                        type: "food",
                        profits: [0, 210, 3150, 31500, 105e3, 21e4],
                        prices: [2e3, 31500, 551250, 4462500, 1365e4]
                    },
                    Pancakes: {
                        type: "food",
                        profits: [0, 280, 4200, 42e3, 14e4, 28e4],
                        prices: [5e3, 42e3, 735e3, 595e4, 182e5]
                    },
                    "French Toast": {
                        type: "food",
                        profits: [0, 360, 5400, 54e3, 18e4, 36e4],
                        prices: [7500, 54e3, 945e3, 765e4, 234e5]
                    },
                    level: {
                        name: "Café Level",
                        type: "item",
                        multipliers: [1, 1.5, 2, 2.5, 3],
                        prices: [0, 2500, 25e4, 25e5, 25e6]
                    },
                    time: {
                        name: "Wait Time",
                        type: "item",
                        times: [0, 2, 3.5, 5, 6],
                        prices: [0, 1e3, 15e4, 1e6, 1e7]
                    }
                },
                o = {
                    pay: {
                        name: "Paycheck Bonus",
                        price: 500,
                        percent: .05,
                        color: "#2ca02c",
                        icon: "fas fa-hand-holding-usd",
                        desc: "Give a player +25% of their balance"
                    },
                    crate: {
                        name: "Supply Crate",
                        price: 1e3,
                        percent: .1,
                        color: "#ff7f0f",
                        icon: "fas fa-parachute-box",
                        desc: "+7 stock of all your foods"
                    },
                    happy: {
                        name: "Happy Customers",
                        price: 2500,
                        percent: .125,
                        color: "#b3dc23",
                        icon: "fas fa-grin-alt",
                        desc: "Your next 5 customers pay double"
                    },
                    trash: {
                        name: "Trash the Food",
                        price: 5e3,
                        percent: .15,
                        color: "#7f7f7f",
                        icon: "fas fa-trash-alt",
                        desc: "Lower a player's food stocks by 3 each"
                    },
                    tax: {
                        name: "TAXES!!!",
                        price: 7500,
                        percent: .25,
                        color: "#1f77b4",
                        icon: "fas fa-funnel-dollar",
                        desc: "Reduce a player's balance by 25%"
                    },
                    inspect: {
                        name: "Health Inspection",
                        price: 1e4,
                        percent: .275,
                        color: "#d62728",
                        icon: "fas fa-file-medical",
                        desc: "Force a player to get a 12s health inspection"
                    },
                    back: {
                        name: "Run It Back",
                        price: 15e4,
                        percent: 0,
                        color: "#0bc2cf",
                        icon: "fas fa-sync-alt",
                        desc: "Be able to buy all your abilities again"
                    }
                }
        },
        "/ywV": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return o
            })), a.d(t, "a", (function() {
                return s
            }));
            var r = a("1Xi1");

            function o(e, t, a, o, s, n, i, c, l, u, f, p, h, d, m) {
                return {
                    type: r.b,
                    cafeId: e,
                    setId: t,
                    resultId: a,
                    hwId: o,
                    hwGoal: s,
                    questions: n,
                    cafeCash: i,
                    day: c,
                    foods: l,
                    items: u,
                    corrects: f,
                    incorrects: p,
                    foodServed: h,
                    stage: d,
                    foodStocks: m
                }
            }

            function s() {
                return {
                    type: r.a
                }
            }
        },
        "1Xi1": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            })), a.d(t, "b", (function() {
                return o
            }));
            var r = "DELETE_CAFE",
                o = "SETUP_CAFE"
        },
        "6GJI": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___2ych4-camelCase{height:85%;top:6%;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto;overflow-x:visible}.styles__left___2ych4-camelCase,.styles__standingContainer___2pLtr-camelCase{position:absolute;width:35vw}.styles__standingContainer___2pLtr-camelCase{height:8vh;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);padding:.5vw;border-radius:7px;border-radius:8;display:flex;flex-direction:row;justify-content:space-between;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___2pLtr-camelCase:hover{opacity:.4}.styles__placeText___qzwAf-camelCase{text-align:center;padding:1vh 0 1vh .5vw;min-width:2vw;line-height:6vh;text-align:right}.styles__placeText___qzwAf-camelCase,.styles__superPlaceText___26fA4-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___26fA4-camelCase{text-align:left;width:1vw;font-size:1.3vw;margin-top:4px;margin-left:1px}.styles__blookBox___1gw4X-camelCase{margin-left:1.5vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___1wwmo-camelCase{padding:1vh 1vw;text-align:left;flex-grow:1}.styles__cashText___AyRYZ-camelCase,.styles__nameText___1wwmo-camelCase{font-weight:700;color:#fff;line-height:6vh;font-family:Nunito,sans-serif}.styles__cashText___AyRYZ-camelCase{padding:1vh 1.5vw;width:7vw;text-align:right;overflow:hidden}.styles__chatroom___1Em3I-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;padding:15px 0;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:8px;overflow:hidden}.styles__chatroomInside___1vwt--camelCase{width:100%;height:100%;overflow:hidden;overflow-y:scroll}.styles__invisibleScrollbar___3gLXp-camelCase::-webkit-scrollbar{width:0}.styles__noAlerts___3-5Xs-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___kyFRO-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___fOSAw-camelCase{font-size:3vw}.styles__noAlertsText___fOSAw-camelCase,.styles__totalCashText___3SuJL-camelCase{font-weight:700;font-family:Nunito,sans-serif}.styles__totalCashText___3SuJL-camelCase{color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;text-align:center;position:absolute;left:45vw;top:80%;width:46vw;height:calc(15% - 2vh);padding:1vh 2vw}", ""]), t.locals = {
                left: "styles__left___2ych4-camelCase",
                standingContainer: "styles__standingContainer___2pLtr-camelCase",
                placeText: "styles__placeText___qzwAf-camelCase",
                superPlaceText: "styles__superPlaceText___26fA4-camelCase",
                blookBox: "styles__blookBox___1gw4X-camelCase",
                nameText: "styles__nameText___1wwmo-camelCase",
                cashText: "styles__cashText___AyRYZ-camelCase",
                chatroom: "styles__chatroom___1Em3I-camelCase",
                chatroomInside: "styles__chatroomInside___1vwt--camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___3gLXp-camelCase",
                noAlerts: "styles__noAlerts___3-5Xs-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___kyFRO-camelCase",
                noAlertsText: "styles__noAlertsText___fOSAw-camelCase",
                totalCashText: "styles__totalCashText___3SuJL-camelCase"
            }
        },
        "8u0o": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var r = "LEAVE_CAFE_SHOP"
        },
        "983D": function(e, t, a) {
            "use strict";
            a.d(t, "c", (function() {
                return n
            })), a.d(t, "b", (function() {
                return i
            })), a.d(t, "a", (function() {
                return c
            }));
            var r = a("H1WH"),
                o = a("N+r3"),
                s = a.n(o),
                n = [{
                    elementId: "customer",
                    text: "Your Café has a customer! He wants 2 pieces of Toast.",
                    nextButtonText: "Next",
                    className: s.a.customer
                }, {
                    elementId: "customer",
                    text: "You have until that colored bar is empty to serve the customer. Fail to serve 3 customers in a day and your game is over.",
                    nextButtonText: "Next",
                    className: s.a.customer
                }, {
                    elementId: "plate1",
                    text: "Toast usually goes here, but right now we don't have any.",
                    nextButtonText: "Next",
                    className: s.a.plate
                }, {
                    elementId: "restock",
                    text: "Luckily, we can restock our food by clicking this button".concat(r.isMobile ? "" : " (or by pressing the space key once the tutorial is over)", ". Go ahead and click it now!"),
                    elementClick: !0,
                    functionIndex: 0,
                    className: s.a.restock
                }, {
                    elementId: "restock",
                    text: "Usually you'll have to answer a question correctly to restock your food, but we'll skip that for now. Go ahead and click again to get the 2nd piece of toast.",
                    elementClick: !0,
                    functionIndex: 0,
                    className: s.a.restock
                }, {
                    elementId: "plate1",
                    text: "Now that we have 2 pieces of Toast, we can click once to select them. Click it now!",
                    elementClick: !0,
                    className: s.a.plate
                }, {
                    elementId: "customer",
                    text: "Now that you have the food selected, just click anywhere on the customer to deliver it!",
                    elementClick: !0,
                    className: s.a.customer
                }, {
                    text: "Perfect! You just made $2! After the day is over, you can use this cash to upgrade your Café.",
                    nextButtonText: "Next",
                    className: s.a.centered
                }, {
                    elementId: "customersText",
                    backgroundColor: "#9a49aa",
                    text: "You can tell how many customers are remaining in a day by that number in the top right of the header. Now, it's time to open your Café! Good Luck!",
                    nextButtonText: "Open Café",
                    className: s.a.topRight
                }],
                i = [{
                    elementId: "customer",
                    text: "Your Café has a customer! He wants 2 pieces of Toast.",
                    nextButtonText: "Next",
                    className: s.a.customer
                }, {
                    elementId: "plate1",
                    text: "Toast usually goes here, but right now we don't have any.",
                    nextButtonText: "Next",
                    className: s.a.plate
                }, {
                    elementId: "restock",
                    text: "Luckily, we can restock our food by clicking this button".concat(r.isMobile ? "" : " (or by pressing the space key once the tutorial is over)", ". Go ahead and click it now!"),
                    elementClick: !0,
                    functionIndex: 0,
                    className: s.a.restock
                }, {
                    elementId: "restock",
                    text: "Usually you'll have to answer a question correctly to restock your food, but we'll skip that for now. Go ahead and click again to get the 2nd piece of toast.",
                    elementClick: !0,
                    functionIndex: 0,
                    className: s.a.restock
                }, {
                    elementId: "plate1",
                    text: "Now that we have 2 pieces of Toast, we can click once to select them. Click it now!",
                    elementClick: !0,
                    className: s.a.plate
                }, {
                    elementId: "customer",
                    text: "Now that you have the food selected, just click anywhere on the customer to deliver it!",
                    elementClick: !0,
                    className: s.a.customer
                }, {
                    text: "Perfect! You just made $7!",
                    nextButtonText: "Next",
                    className: s.a.centered
                }, {
                    elementId: "upgrade",
                    text: "You can now use this money to upgrade your Café! Go ahead and click that button to go to the Upgrade Shop!",
                    elementClick: !0,
                    functionIndex: 1,
                    className: s.a.restock
                }],
                c = [{
                    elementId: "upgrade2",
                    text: "Look! The green price indicates that you can afford cereal! Go ahead and click on it to buy it!",
                    elementClick: !0,
                    functionIndex: 0,
                    className: s.a.cereal
                }, {
                    text: "Great work! Buying upgrades helps you make more money! Below the upgrades you'll also find abilities to help you win.",
                    nextButtonText: "Next",
                    className: s.a.centered
                }, {
                    elementId: "shopButton",
                    text: "Now go back to your Café to keep serving customers. Make sure you visit the Upgrade Shop frequently!",
                    elementClick: !0,
                    functionIndex: 1,
                    className: s.a.back
                }]
        },
        AKvB: function(e, t, a) {
            var r = a("MX1h");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        C16J: function(e, t, a) {
            var r = a("fB4R");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        CCJB: function(e, t, a) {
            var r = a("T4uf");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        CXev: function(e, t, a) {
            "use strict";
            var r = a("q1tI"),
                o = a.n(r),
                s = a("ANjH"),
                n = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("Ty5D"),
                f = a("H1WH"),
                p = a("FKJl"),
                h = a("E8Bj"),
                d = a("/ywV"),
                m = a("ZrUs"),
                _ = a("C16J"),
                y = a.n(_),
                v = a("Xst1"),
                b = a.n(v),
                g = a("oQ+7"),
                w = a("XTAU"),
                C = a("2ZNs"),
                x = a("pQbs"),
                k = a("dLfW"),
                S = a("Zyrn"),
                O = a("74sb"),
                j = a("5BnW"),
                E = a("qnYv");

            function N(e) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    s = r.asyncIterator || "@@asyncIterator",
                    n = r.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        s = Object.create(o.prototype),
                        n = new x(r || []);
                    return s._invoke = function(e, t, a) {
                        var r = "suspendedStart";
                        return function(o, s) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw s;
                                return S()
                            }
                            for (a.method = o, a.arg = s;;) {
                                var n = a.delegate;
                                if (n) {
                                    var i = g(n, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === r) throw r = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                r = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (r = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, n), s
                }

                function l(e, t, a) {
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

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(k([])));
                _ && _ !== t && a.call(_, o) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    this._invoke = function(o, s) {
                        function n() {
                            return new t((function(r, n) {
                                ! function r(o, s, n, i) {
                                    var c = l(e[o], e, s);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == N(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, n, i)
                                        }), (function(e) {
                                            r("throw", e, n, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, n(u)
                                        }), (function(e) {
                                            return r("throw", e, n, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, s, r, n)
                            }))
                        }
                        return r = r ? r.then(n, n) : n()
                    }
                }

                function g(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var r = l(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                s = function t() {
                                    for (; ++r < e.length;)
                                        if (a.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return s.next = s
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
                return p.prototype = h, i(y, "constructor", h), i(h, "constructor", p), p.displayName = i(h, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), i(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, r, o, s) {
                    void 0 === s && (s = Promise);
                    var n = new b(c(t, a, r, o), s);
                    return e.isGeneratorFunction(a) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), i(y, n, "Generator"), i(y, o, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return a.value = r, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, x.prototype = {
                    constructor: x,
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

                        function r(a, r) {
                            return n.type = "throw", n.arg = e, t.next = a, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o],
                                n = s.completion;
                            if ("root" === s.tryLoc) return r("end");
                            if (s.tryLoc <= this.prev) {
                                var i = a.call(s, "catchLoc"),
                                    c = a.call(s, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                } else if (i) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var s = o;
                                break
                            }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var n = s ? s.completion : {};
                        return n.type = e, n.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, u) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), C(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var r = a.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    C(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function I(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(a), !0).forEach((function(t) {
                        P(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function P(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function B(e, t, a, r, o, s, n) {
                try {
                    var i = e[s](n),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function A(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function R(e, t) {
                return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function q(e) {
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
                    var a, r = D(e);
                    if (t) {
                        var o = D(this).constructor;
                        a = Reflect.construct(r, arguments, o)
                    } else a = r.apply(this, arguments);
                    return G(this, a)
                }
            }

            function G(e, t) {
                if (t && ("object" === N(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return H(e)
            }

            function H(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D(e) {
                return (D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var M = function(e, t) {
                    return t ? o.a.createElement("div", {
                        className: y.a.stageText
                    }, "$".concat(Object(O.s)(e.cash))) : o.a.createElement("div", {
                        className: y.a.stageText
                    }, "Day ".concat(e.day))
                },
                U = function(e) {
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
                    }(c, e);
                    var t, a, r, s, n, i = q(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            ready: !1,
                            numCorrect: 0,
                            numQuestions: 0,
                            standings: [],
                            plus: !1,
                            foodServed: 0,
                            cafeCash: 0,
                            message: "",
                            name: "",
                            me: {},
                            isBlocked: !1
                        }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(H(t)), t.renderStats = t.renderStats.bind(H(t)), t
                    }
                    return t = c, (a = [{
                        key: "componentDidMount",
                        value: (s = T().mark((function e() {
                            var t, a, r, o, s, n, i, c, l = this;
                            return T().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if ((t = e.sent) || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.cafe && "final" === this.props.cafe.stage) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (this.isSolo = !this.props.cafe.mode, this.isHw = Boolean(this.props.cafe.resultId), this.isSolo || this.isHw || this.props.liveGameController.setVal({
                                                path: "c/".concat(this.props.client.name),
                                                val: {
                                                    c: L({}, this.props.cafe.corrects),
                                                    i: L({}, this.props.cafe.incorrects)
                                                }
                                            }), this.isHw && E.a.put("/api/results", {
                                                id: this.props.cafe.resultId,
                                                data: {
                                                    corrects: this.props.cafe.corrects,
                                                    incorrects: this.props.cafe.incorrects,
                                                    day: Number(this.props.cafe.day),
                                                    alive: !1
                                                }
                                            }).catch((function(e) {
                                                return Object(p.b)(e)
                                            })), a = 0, r = 0, Object.values(this.props.cafe.corrects).forEach((function(e) {
                                                a += e, r += e
                                            })), Object.values(this.props.cafe.incorrects).forEach((function(e) {
                                                r += e
                                            })), o = this.props.client && this.props.client.blook ? this.props.client.blook : Object(O.m)(Object.keys(S.a)), s = this.props.client && this.props.client.name ? this.props.client.name : "You", (n = this.props.client && this.props.client.standing ? JSON.parse(JSON.stringify(this.props.client.standing)) : [{
                                                name: s,
                                                blook: o,
                                                place: 6 - this.props.cafe.items.level,
                                                day: this.props.cafe.day,
                                                cash: this.props.cafe.cafeCash
                                            }]).sort((function(e, t) {
                                                return e.place - t.place
                                            })), -1 !== (i = n.map((function(e) {
                                                return e.name
                                            })).indexOf(s))) {
                                            e.next = 22;
                                            break
                                        }
                                        return this.setState({
                                            isBlocked: !0
                                        }), e.abrupt("return");
                                    case 22:
                                        c = n[i].place, this.stats = {
                                            place: c,
                                            day: this.props.cafe.day,
                                            cafeCash: n[i].cash,
                                            playersDefeated: this.props.cafe.mode ? this.props.client.standing.length - c : 0,
                                            foodServed: this.props.cafe.foodServed,
                                            correctAnswers: a,
                                            blookUsed: o,
                                            nameUsed: s
                                        }, this.props.cafe.mode ? this.readyTimeout = setTimeout((function() {
                                            l.setState({
                                                ready: !0,
                                                numCorrect: a,
                                                numQuestions: r,
                                                foodServed: l.props.cafe.foodServed,
                                                cafeCash: l.props.cafe.cafeCash,
                                                me: n[i]
                                            })
                                        }), 4750) : this.setState({
                                            numCorrect: a,
                                            numQuestions: r,
                                            day: this.props.cafe.day,
                                            foodServed: this.props.cafe.foodServed,
                                            cafeCash: this.props.cafe.cafeCash,
                                            message: Object(k.a)((c - 1) / 5),
                                            ready: !this.props.cafe.cafeId || this.state.ready,
                                            standings: n
                                        }), t && (this.saveStats(t.name, (function() {})), E.a.put("/api/users/plan").then((function(e) {
                                            l.here && l.setState({
                                                ready: !l.props.cafe.mode || l.state.ready,
                                                name: t.name,
                                                plus: "Starter" !== e.data.plan || l.props.client && l.props.client.plus
                                            })
                                        })).catch((function(e) {
                                            Object(p.b)(e)
                                        })), this.props.cafe.cafeId && E.a.delete("/api/cafes", {
                                            params: {
                                                name: t.name,
                                                id: this.props.cafe.cafeId,
                                                setId: this.props.cafe.setId
                                            }
                                        }).catch((function(e) {
                                            Object(p.b)(e)
                                        })));
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, r) {
                                var o = s.apply(e, t);

                                function n(e) {
                                    B(o, a, r, n, i, "next", e)
                                }

                                function i(e) {
                                    B(o, a, r, n, i, "throw", e)
                                }
                                n(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), this.props.deleteCafe(), this.props.deleteClient(), this.here = !1
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            this.isSolo ? E.a.put("/api/users/cafestats/solo", {
                                name: e,
                                place: this.stats.place,
                                day: this.stats.day,
                                cafeCash: this.stats.cafeCash,
                                foodServed: this.stats.foodServed,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers
                            }).then(t).catch((function(e) {
                                return Object(p.b)(e)
                            })) : E.a.put("/api/users/cafestats/live", {
                                name: e,
                                place: this.stats.place,
                                cafeCash: this.stats.cafeCash,
                                foodServed: this.stats.foodServed,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers,
                                playersDefeated: this.stats.playersDefeated
                            }).then(t).catch((function(e) {
                                return Object(p.b)(e)
                            }))
                        }
                    }, {
                        key: "renderStats",
                        value: function() {
                            return o.a.createElement("div", {
                                style: {
                                    width: "100%"
                                }
                            }, o.a.createElement(x.a, {
                                title: "Food Served",
                                stat: Object(O.l)(this.state.foodServed)
                            }), o.a.createElement(x.a, {
                                title: "Final Cash",
                                stat: "$".concat(Object(O.l)(this.state.cafeCash))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (Object(p.b)("FinalPageContainer cannot render if this.state.notLoggedIn"), this.redirect = !0), this.props.cafe || (Object(p.b)("FinalPageContainer cannot render without this.props.cafe"), this.redirect = !0), "final" !== this.props.cafe.stage && (Object(p.b)("FinalPageContainer cannot render if this.props.cafe.stage !== 'final'"), this.redirect = !0), this.redirect) return o.a.createElement(u.a, {
                                to: "/play"
                            });
                            var e = this.props.cafe && this.props.cafe.resultId;
                            return o.a.createElement("div", {
                                className: f.isMobile ? b.a.mBody : b.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(w.a, {
                                title: "Play Café | Blooket",
                                desc: "Serve delicious food to Blooks by answering questions, and make money to upgrade your Café."
                            }), o.a.createElement(g.a, {
                                noRight: !e,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? this.props.cafe.mode ? o.a.createElement(C.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name || "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.props.client.plus,
                                myStat: "$".concat(Object(O.l)(this.state.me.cash)),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return M(e, !0)
                                },
                                renderStats: this.renderStats,
                                corrects: this.props.cafe.corrects,
                                incorrects: this.props.cafe.incorrects,
                                questions: this.props.cafe.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : o.a.createElement(C.a, {
                                standings: this.state.standings,
                                name: this.props.client && this.props.client.name ? this.props.client.name : "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: "Stayed Open for ".concat(this.state.day, " ").concat(1 === this.state.day ? "Day" : "Days"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return M(e, !1)
                                },
                                renderStats: this.renderStats,
                                customMessage: this.state.message,
                                corrects: this.props.cafe.corrects,
                                incorrects: this.props.cafe.incorrects,
                                questions: this.props.cafe.questions,
                                blockAccounts: !this.props.client || !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: b.a.blockedText
                            }, "You were blocked from this game.") : null)
                        }
                    }]) && A(t.prototype, a), r && A(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            U.propTypes = {
                cafe: c.a.object,
                client: c.a.object,
                liveGameController: c.a.object,
                deleteCafe: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(h.c)(Object(l.f)(Object(n.b)((function(e) {
                return {
                    cafe: e.cafes.cafe,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(s.b)({
                    deleteCafe: d.a,
                    deleteClient: m.a
                }, e)
            }))(Object(j.d)(U))))
        },
        FU5n: function(e, t, a) {
            var r = a("kDjR");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        "Kr+K": function(e, t, a) {
            "use strict";
            a.d(t, "c", (function() {
                return U
            })), a.d(t, "b", (function() {
                return F
            }));
            var r = a("q1tI"),
                o = a.n(r),
                s = a("ANjH"),
                n = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("Ty5D"),
                f = a("H1WH"),
                p = a("TSYQ"),
                h = a.n(p),
                d = a("FKJl"),
                m = a("/ywV"),
                _ = a("L1pz"),
                y = a("zUlG"),
                v = a("Xst1"),
                b = a.n(v),
                g = a("AKvB"),
                w = a.n(g),
                C = a("Rnav"),
                x = a("XTAU"),
                k = a("E8Bj"),
                S = a("ca/f"),
                O = a("2ZNs"),
                j = a("dLfW"),
                E = a("pQbs"),
                N = a("Zyrn"),
                T = a("74sb"),
                I = a("qnYv");

            function L(e) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function P() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                P = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    s = r.asyncIterator || "@@asyncIterator",
                    n = r.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        s = Object.create(o.prototype),
                        n = new x(r || []);
                    return s._invoke = function(e, t, a) {
                        var r = "suspendedStart";
                        return function(o, s) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw s;
                                return S()
                            }
                            for (a.method = o, a.arg = s;;) {
                                var n = a.delegate;
                                if (n) {
                                    var i = g(n, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === r) throw r = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                r = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (r = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, n), s
                }

                function l(e, t, a) {
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

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(k([])));
                _ && _ !== t && a.call(_, o) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    this._invoke = function(o, s) {
                        function n() {
                            return new t((function(r, n) {
                                ! function r(o, s, n, i) {
                                    var c = l(e[o], e, s);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == L(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, n, i)
                                        }), (function(e) {
                                            r("throw", e, n, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, n(u)
                                        }), (function(e) {
                                            return r("throw", e, n, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, s, r, n)
                            }))
                        }
                        return r = r ? r.then(n, n) : n()
                    }
                }

                function g(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var r = l(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                s = function t() {
                                    for (; ++r < e.length;)
                                        if (a.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return s.next = s
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
                return p.prototype = h, i(y, "constructor", h), i(h, "constructor", p), p.displayName = i(h, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), i(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, r, o, s) {
                    void 0 === s && (s = Promise);
                    var n = new b(c(t, a, r, o), s);
                    return e.isGeneratorFunction(a) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), i(y, n, "Generator"), i(y, o, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return a.value = r, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, x.prototype = {
                    constructor: x,
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

                        function r(a, r) {
                            return n.type = "throw", n.arg = e, t.next = a, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o],
                                n = s.completion;
                            if ("root" === s.tryLoc) return r("end");
                            if (s.tryLoc <= this.prev) {
                                var i = a.call(s, "catchLoc"),
                                    c = a.call(s, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                } else if (i) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var s = o;
                                break
                            }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var n = s ? s.completion : {};
                        return n.type = e, n.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, u) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), C(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var r = a.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    C(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function B(e, t, a, r, o, s, n) {
                try {
                    var i = e[s](n),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function A(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(r, o) {
                        var s = e.apply(t, a);

                        function n(e) {
                            B(s, r, o, n, i, "next", e)
                        }

                        function i(e) {
                            B(s, r, o, n, i, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function R(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function q(e, t) {
                return (q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function G(e) {
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
                    var a, r = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        a = Reflect.construct(r, arguments, o)
                    } else a = r.apply(this, arguments);
                    return H(this, a)
                }
            }

            function H(e, t) {
                if (t && ("object" === L(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return D(e)
            }

            function D(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function M(e) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var U = {
                    Toast: 1,
                    Cereal: 0,
                    Yogurt: 0,
                    "Breakfast Combo": 0,
                    "Orange Juice": 0,
                    Milk: 0,
                    Waffle: 0,
                    Pancakes: 0,
                    "French Toast": 0
                },
                z = {
                    level: 1,
                    time: 1
                },
                F = {
                    inspect: 1,
                    crate: 1,
                    pay: 1,
                    tax: 1,
                    trash: 1,
                    happy: 1,
                    back: 1
                },
                J = function(e) {
                    return o.a.createElement("div", {
                        className: w.a.stageText
                    }, "Day ".concat(e.day))
                },
                Y = function(e) {
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
                    }(l, e);
                    var t, a, r, s, n, i, c = G(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = c.call(this, e)).state = {
                            questions: [],
                            ready: !1,
                            isSave: !1,
                            warn: !1,
                            loggedIn: !1,
                            savesPhase: !1,
                            savesArray: [],
                            loading: !1,
                            replaceIndex: 0,
                            name: "",
                            nameUsed: "",
                            numCorrect: 0,
                            numQuestions: 0,
                            day: 0,
                            foodServed: 0,
                            cafeCash: 0,
                            message: "",
                            showFinal: !1,
                            standings: [],
                            noId: !1,
                            noIdPopUp: !1,
                            noQuestions: !1
                        }, t.redirect = !1, t.name = "", t.working = !0, t.here = !0, t.loadGame = t.loadGame.bind(D(t)), t.newGame = t.newGame.bind(D(t)), t.endGame = t.endGame.bind(D(t)), t.renderStats = t.renderStats.bind(D(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (i = A(P().mark((function e() {
                            var t, a = this;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.props.deleteCafe(), e.next = 3, this.props.user.getData();
                                    case 3:
                                        (t = e.sent) ? (this.name = t.name, this.setState({
                                            loggedIn: !0
                                        }), I.a.get("/api/cafes/byuser").then((function(e) {
                                            a.here && a.setState({
                                                isSave: e.data.success && !(a.props.client && a.props.client.hwId && a.props.client.questions),
                                                savesArray: e.data.success ? e.data.savesArray : [null, null, null]
                                            }, (function() {
                                                a.working = !1
                                            }))
                                        })).catch((function(e) {
                                            Object(d.b)(e)
                                        }))) : this.setState({
                                            notLoggedIn: !0
                                        }), this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1, this.setState({
                                            questions: this.props.client.questions || [],
                                            ready: !0
                                        })) : this.props.id ? I.a.get("/api/games", {
                                            params: {
                                                gameId: this.props.id
                                            }
                                        }).then((function(e) {
                                            a.here && a.setState({
                                                questions: e.data.questions.map((function(e) {
                                                    return {
                                                        text: e.question,
                                                        answers: e.answers,
                                                        correctAnswers: e.correctAnswers,
                                                        number: e.number,
                                                        random: e.random,
                                                        timeLimit: e.timeLimit,
                                                        image: e.image ? e.image.url : null,
                                                        audio: e.audio ? e.audio.url : null
                                                    }
                                                })),
                                                ready: !0
                                            })
                                        })).catch((function(e) {
                                            Object(d.b)(e)
                                        })) : this.setState({
                                            noId: !0,
                                            ready: !0
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1
                        }
                    }, {
                        key: "loadGame",
                        value: (n = A(P().mark((function e(t) {
                            var a, r, o, s = this;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.state.ready && !this.working) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.working = !0, a = this.state.savesArray[t], r = [], o = !1, !a.setId) {
                                            e.next = 15;
                                            break
                                        }
                                        if (!this.state.noId) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 10, new Promise((function(e) {
                                            I.a.get("/api/games", {
                                                params: {
                                                    gameId: a.setId
                                                }
                                            }).then((function(t) {
                                                t.data ? r = t.data.questions.map((function(e) {
                                                    return {
                                                        text: e.question,
                                                        answers: e.answers,
                                                        correctAnswers: e.correctAnswers,
                                                        number: e.number,
                                                        random: e.random,
                                                        timeLimit: e.timeLimit,
                                                        image: e.image ? e.image.url : null,
                                                        audio: e.audio ? e.audio.url : null
                                                    }
                                                })) : o = !0, e()
                                            })).catch((function(t) {
                                                o = !0, Object(d.b)(t), e()
                                            }))
                                        }));
                                    case 10:
                                        e.next = 13;
                                        break;
                                    case 12:
                                        r = this.state.questions;
                                    case 13:
                                        e.next = 17;
                                        break;
                                    case 15:
                                        return e.next = 17, new Promise((function(e) {
                                            I.a.get("/api/homeworks/byid", {
                                                params: {
                                                    id: a.hwId
                                                }
                                            }).then((function(t) {
                                                t.data ? r = t.data.questions : s.state.noId ? o = !0 : r = s.state.questions, e()
                                            })).catch((function(t) {
                                                s.state.noId ? o = !0 : r = s.state.questions, Object(d.b)(t), e()
                                            }))
                                        }));
                                    case 17:
                                        if (!o) {
                                            e.next = 21;
                                            break
                                        }
                                        return this.setState({
                                            noIdPopUp: !0,
                                            noQuestions: !0
                                        }), this.working = !1, e.abrupt("return");
                                    case 21:
                                        a.hwName && (this.props.addClientName(a.hwName), this.props.addHwClient(a.hwId, "Cafe", 0, a.hwPlus)), this.props.setupCafe(a._id, a.setId, a.resultId, a.hwId, a.hwGoal, r, a.cafeCash, a.day, a.foods, a.items, a.corrects, a.incorrects, a.foodServed, a.stage, a.foodStocks), "cafe" === a.stage ? this.props.history.push("/cafe") : "shop" === a.stage ? this.props.history.push("/cafe/shop") : this.props.history.push("/cafe/final");
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "newGame",
                        value: (s = A(P().mark((function e(t) {
                            var a, r, o = this;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.state.ready && !this.working) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.working = !0, a = "", !this.props.client || !this.props.client.hwId) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 7, new Promise((function(e, t) {
                                            I.a.post("/api/results", {
                                                hwId: o.props.client.hwId,
                                                name: o.props.client.name,
                                                data: {
                                                    corrects: {},
                                                    incorrects: {},
                                                    day: 1,
                                                    alive: !0
                                                }
                                            }).then((function(t) {
                                                a = t.data._id, e()
                                            })).catch((function(e) {
                                                Object(d.b)(e), t()
                                            }))
                                        }));
                                    case 7:
                                        if (r = {}, !this.name) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 11, new Promise((function(e, r) {
                                            I.a.post("/api/cafes", {
                                                setId: o.props.id,
                                                name: o.name,
                                                hwId: o.props.client && o.props.client.hwId ? o.props.client.hwId : null,
                                                hwName: o.props.client && o.props.client.name ? o.props.client.name : null,
                                                hwPlus: !(!o.props.client || !o.props.client.plus) && o.props.client.plus,
                                                hwGoal: o.props.client && o.props.client.amount ? o.props.client.amount : 0,
                                                saveIndex: t,
                                                foods: JSON.parse(JSON.stringify(U)),
                                                items: JSON.parse(JSON.stringify(z)),
                                                resultId: a
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function(e) {
                                                Object(d.b)(e), r()
                                            }))
                                        }));
                                    case 11:
                                        r = e.sent;
                                    case 12:
                                        this.props.setupCafe(r.newSaveId, this.props.id, a, this.props.client && this.props.client.hwId ? this.props.client.hwId : null, this.props.client && this.props.client.amount ? this.props.client.amount : null, this.state.questions, 0, 1, JSON.parse(JSON.stringify(U)), JSON.parse(JSON.stringify(z)), {}, {}, 0, "cafe", {}), r.oldSave && r.oldSave.stage ? this.endGame(r.oldSave) : this.props.history.push("/cafe");
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "endGame",
                        value: function(e) {
                            var t = this;
                            I.a.put("/api/users/plan").then((function(e) {
                                t.here && t.setState({
                                    showFinal: !0,
                                    plus: "Starter" !== e.data.plan
                                })
                            })).catch((function(e) {
                                Object(d.b)(e)
                            }));
                            var a = e.hwName || "You",
                                r = 0,
                                o = 0;
                            Object.values(e.corrects).forEach((function(e) {
                                r += e, o += e
                            })), Object.values(e.incorrects).forEach((function(e) {
                                o += e
                            }));
                            var s = 6 - e.items.level,
                                n = Object(T.m)(Object.keys(N.a));
                            I.a.put("/api/users/cafestats/solo", {
                                name: this.name,
                                place: s,
                                day: e.day,
                                cafeCash: e.cafeCash,
                                foodServed: e.foodServed,
                                blookUsed: n,
                                nameUsed: a,
                                correctAnswers: r
                            }).catch((function(e) {
                                Object(d.b)(e)
                            })), this.setState({
                                warn: !1,
                                name: this.name,
                                nameUsed: a,
                                numCorrect: r,
                                numQuestions: o,
                                day: e.day,
                                cafeCash: e.cafeCash,
                                foodServed: e.foodServed,
                                message: Object(j.a)((s - 1) / 5),
                                ready: !0,
                                standings: [{
                                    name: a,
                                    blook: n,
                                    place: s,
                                    day: e.day
                                }]
                            })
                        }
                    }, {
                        key: "renderStats",
                        value: function() {
                            return o.a.createElement("div", {
                                style: {
                                    width: "100%"
                                }
                            }, o.a.createElement(E.a, {
                                title: "Food Served",
                                stat: Object(T.l)(this.state.foodServed)
                            }), o.a.createElement(E.a, {
                                title: "Final Cash",
                                stat: Object(T.l)(this.state.cafeCash)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? o.a.createElement(u.a, {
                                to: "/login"
                            }) : o.a.createElement("div", {
                                className: h()(f.isMobile ? b.a.mBody : b.a.body, w.a.background)
                            }, o.a.createElement(x.a, {
                                title: "Load Café | Blooket",
                                desc: "Start a new game or load a saved game of Blooket's Café."
                            }), o.a.createElement(C.a, {
                                noRight: !0
                            }), this.state.savesPhase ? o.a.createElement("div", {
                                className: b.a.regularBody
                            }, o.a.createElement("div", {
                                className: w.a.backButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        savesPhase: !1,
                                        loading: !1
                                    })
                                }
                            }, "Back"), o.a.createElement("div", {
                                className: w.a.saveHeaderHolder
                            }, o.a.createElement("div", {
                                className: w.a.savesHeader
                            }, this.state.loading ? "Choose a Save" : "Choose a Save Slot")), o.a.createElement("div", {
                                className: w.a.savesHolder
                            }, this.state.savesArray.map((function(t, a) {
                                return t ? o.a.createElement("div", {
                                    className: w.a.saveContainer,
                                    key: t._id
                                }, o.a.createElement("div", {
                                    className: w.a.saveTitle
                                }, "Day ".concat(t.day)), o.a.createElement("div", {
                                    className: w.a.saveSubTitle
                                }, "Café Level ".concat(t.items.level)), o.a.createElement("div", {
                                    className: w.a.saveRow
                                }, "$".concat(Object(T.l)(t.cafeCash)), o.a.createElement("i", {
                                    className: h()(w.a.saveIcon, "fas fa-coins")
                                })), o.a.createElement("div", {
                                    className: w.a.saveRow
                                }, "shop" === t.stage ? "Shop" : "Café Day", o.a.createElement("i", {
                                    className: h()(w.a.saveIcon, "fas fa-store")
                                })), o.a.createElement("div", {
                                    className: w.a.saveRow
                                }, t.hwName || "Not Homework", o.a.createElement("i", {
                                    className: h()(w.a.saveIcon, "fas fa-file-alt")
                                })), o.a.createElement("div", {
                                    className: w.a.loadButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: e.state.loading ? function() {
                                        return e.loadGame(a)
                                    } : e.state.noId ? function() {
                                        return e.setState({
                                            noIdPopUp: !0
                                        })
                                    } : function() {
                                        return e.setState({
                                            warn: !0,
                                            replaceIndex: a
                                        })
                                    }
                                }, e.state.loading ? "Load Game" : "Replace Game")) : o.a.createElement("div", {
                                    className: w.a.saveContainer,
                                    key: a
                                }, o.a.createElement("div", {
                                    className: w.a.emptySave
                                }, "Empty"), e.state.loading ? null : o.a.createElement("div", {
                                    className: w.a.loadButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: e.state.noId ? function() {
                                        return e.setState({
                                            noIdPopUp: !0
                                        })
                                    } : function() {
                                        return e.newGame(a)
                                    }
                                }, "New Game"))
                            })))) : o.a.createElement("div", {
                                className: b.a.regularBody
                            }, o.a.createElement("div", {
                                className: w.a.contentHolder
                            }, o.a.createElement("div", {
                                className: w.a.header
                            }, "Café"), o.a.createElement("div", {
                                className: w.a.buttonContainer
                            }, this.state.isSave ? o.a.createElement("div", {
                                className: w.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        savesPhase: !0,
                                        loading: !0
                                    })
                                }
                            }, "Load Game") : null, o.a.createElement("div", {
                                className: w.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.loggedIn ? function() {
                                    return e.setState({
                                        savesPhase: !0,
                                        loading: !1
                                    })
                                } : this.newGame
                            }, "New Game"))), this.state.loggedIn ? o.a.createElement("div", {
                                className: w.a.loginText
                            }, "Your progress will automatically be saved") : o.a.createElement("div", {
                                className: w.a.loginText
                            }, o.a.createElement("a", {
                                href: "https://www.blooket.com/login",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#fff"
                                }
                            }, "Login"), " to save your progress")), this.state.warn ? o.a.createElement(S.a, {
                                text: "Starting a new game will delete this save! Don't worry though, we'll give you the tokens for your old save right now!",
                                buttonOne: {
                                    text: "Continue",
                                    click: function() {
                                        return e.newGame(e.state.replaceIndex)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Go Back",
                                    click: function() {
                                        return e.setState({
                                            warn: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.noIdPopUp ? o.a.createElement(S.a, {
                                text: this.state.noQuestions ? "This save doesn't have an associated question set. Go find a set, click 'Solo', and try again!" : "You need a question set to create a new game!",
                                buttonOne: {
                                    text: "Find A Set",
                                    click: function() {
                                        window.location.href = "".concat("https://dashboard.blooket.com", "/discover")
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Go Back",
                                    click: function() {
                                        return e.setState({
                                            noIdPopUp: !1,
                                            noQuestions: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null, this.state.showFinal ? o.a.createElement("div", {
                                className: b.a.modal
                            }, o.a.createElement(O.a, {
                                standings: this.state.standings,
                                name: this.state.nameUsed,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: "Stayed Open for ".concat(this.state.day, " ").concat(1 === this.state.day ? "Day" : "Days"),
                                saveStats: this.saveStats,
                                renderStandingStat: J,
                                renderStats: this.renderStats,
                                customMessage: this.state.message,
                                tokenMultiplier: .3,
                                buttonFunc: function() {
                                    return e.props.history.push("/cafe")
                                },
                                noWait: !0
                            })) : null)
                        }
                    }]) && R(t.prototype, a), r && R(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(o.a.Component);
            Y.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                id: c.a.string,
                setupCafe: c.a.func.isRequired,
                deleteCafe: c.a.func.isRequired,
                addClientName: c.a.func.isRequired,
                addHwClient: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(k.c)(Object(l.f)(Object(n.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(s.b)({
                    setupCafe: m.b,
                    deleteCafe: m.a,
                    addClientName: y.a,
                    addHwClient: _.b
                }, e)
            }))(Y)))
        },
        MX1h: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__background___2CXHJ-camelCase{background-image:linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0),linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);background-size:50px 50px}.styles__contentHolder___3UXqy-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___adopf-camelCase{font-size:10vw;margin:20px 0;padding:1vw 3.1vw 1vw 3vw;background-color:#ac7339;box-shadow:inset 0 0 0 .6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);font-family:Satisfy,sans-serif;border-radius:7px;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__buttonContainer___3jnj3-camelCase{margin:20px 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___hdG5V-camelCase{font-size:3vw;font-family:Satisfy,sans-serif;border-radius:7px;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;padding:.4vw 2vw;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___hdG5V-camelCase:hover{transform:scale(.95)}.styles__loginText___3Gb5K-camelCase{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);text-align:center;font-size:18px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:7px 10px}.styles__saveHeaderHolder___3Phub-camelCase{width:90%;margin:70px auto 50px;display:flex;justify-content:center;align-items:center}.styles__savesHeader___RP8jM-camelCase{font-size:72px;color:#fff;text-shadow:2px 2px 8px grey;background-color:#ac7339;box-shadow:inset 0 0 0 7px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:5px 25px;text-align:center;display:inline-block;font-family:Satisfy,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__savesHolder___KWrHH-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___1w0qz-camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 7px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;display:flex;flex-direction:column;max-width:286px;margin:15px 20px;flex-grow:1;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__saveTitle___2Srwr-camelCase{font-size:42px;line-height:45px;margin:10px 5% 0}.styles__saveSubTitle___oJdN--camelCase,.styles__saveTitle___2Srwr-camelCase{font-weight:700;width:90%}.styles__saveSubTitle___oJdN--camelCase{font-size:32px;margin:0 5%;opacity:.75}.styles__saveRow___3Qdis-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___3FBWX-camelCase{width:38px;text-align:center;margin-left:5px}.styles__loadButton___1cTzP-camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___1cTzP-camelCase:hover{transform:scale(.95)}.styles__emptySave___2cWNY-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___1ttXe-camelCase{position:absolute;top:10px;left:10px;font-size:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:5px 15px;text-shadow:2px 2px 8px grey}.styles__backButton___1ttXe-camelCase,.styles__stageText___DUHKg-camelCase{font-family:Nunito,sans-serif}.styles__stageText___DUHKg-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;text-align:right;overflow:hidden}@media only screen and (max-width:800px){.styles__header___adopf-camelCase{font-size:26vw;padding:3vw 6.6vw 3vw 6vw;box-shadow:inset 0 0 0 1.6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2)}.styles__button___hdG5V-camelCase{font-size:10vw;padding:1.3vw 5vw;box-shadow:inset 0 0 0 1.4vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2)}.styles__loginText___3Gb5K-camelCase{width:80%;font-size:14px}.styles__savesHeader___RP8jM-camelCase{font-size:64px;line-height:70px;padding:10px 25px}.styles__saveHeaderHolder___3Phub-camelCase{margin:70px auto 25px}.styles__savesHolder___KWrHH-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___1w0qz-camelCase{width:300px;margin:15px 20px}}", ""]), t.locals = {
                background: "styles__background___2CXHJ-camelCase",
                contentHolder: "styles__contentHolder___3UXqy-camelCase",
                header: "styles__header___adopf-camelCase",
                buttonContainer: "styles__buttonContainer___3jnj3-camelCase",
                button: "styles__button___hdG5V-camelCase",
                loginText: "styles__loginText___3Gb5K-camelCase",
                saveHeaderHolder: "styles__saveHeaderHolder___3Phub-camelCase",
                savesHeader: "styles__savesHeader___RP8jM-camelCase",
                savesHolder: "styles__savesHolder___KWrHH-camelCase",
                saveContainer: "styles__saveContainer___1w0qz-camelCase",
                saveTitle: "styles__saveTitle___2Srwr-camelCase",
                saveSubTitle: "styles__saveSubTitle___oJdN--camelCase",
                saveRow: "styles__saveRow___3Qdis-camelCase",
                saveIcon: "styles__saveIcon___3FBWX-camelCase",
                loadButton: "styles__loadButton___1cTzP-camelCase",
                emptySave: "styles__emptySave___2cWNY-camelCase",
                backButton: "styles__backButton___1ttXe-camelCase",
                stageText: "styles__stageText___DUHKg-camelCase"
            }
        },
        "N+r3": function(e, t, a) {
            var r = a("RUrN");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        QFW9: function(e, t, a) {
            "use strict";
            var r = a("q1tI"),
                o = a.n(r),
                s = a("ANjH"),
                n = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("TSYQ"),
                f = a.n(u),
                p = a("FKJl"),
                h = a("VgyX"),
                d = a("Xst1"),
                m = a.n(d),
                _ = a("rUkA"),
                y = a.n(_),
                v = a("ZVoO"),
                b = a("74sb"),
                g = a("XTAU"),
                w = a("5BnW"),
                C = a("qnYv");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var r, o, s = [],
                        n = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(n = (r = a.next()).done) && (s.push(r.value), !t || s.length !== t); n = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return s
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function O(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function j(e, t) {
                return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function E(e) {
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
                    var a, r = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        a = Reflect.construct(r, arguments, o)
                    } else a = r.apply(this, arguments);
                    return N(this, a)
                }
            }

            function N(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var I = function(e) {
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
                    }), t && j(e, t)
                }(n, e);
                var t, a, r, s = E(n);

                function n(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), (t = s.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = n, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var a = {};
                                    e.props.liveGameController.getDatabaseVal("c", (function(r) {
                                        var o = r || {};
                                        Object.entries(o).forEach((function(e) {
                                            var t = k(e, 2),
                                                r = t[0],
                                                o = t[1],
                                                s = {};
                                            if (o.i)
                                                if (Array.isArray(o.i))
                                                    for (var n = 0; n < o.i.length; n++) {
                                                        var i = o.i[n];
                                                        i && (s[n] = i)
                                                    } else s = o.i;
                                                else s = {};
                                            var c = {};
                                            if (o.c)
                                                if (Array.isArray(o.c))
                                                    for (var l = 0; l < o.c.length; l++) {
                                                        var u = o.c[l];
                                                        u && (c[l] = u)
                                                    } else c = o.c;
                                                else c = {};
                                            a[r] = {
                                                corrects: c,
                                                incorrects: s
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.liveGameController.removeHostAndDeleteGame(), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && C.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        cash: isNaN(e.cash) ? 0 : Math.round(Number(e.cash)),
                                                        corrects: a[e.name] ? a[e.name].corrects : {},
                                                        incorrects: a[e.name] ? a[e.name].incorrects : {}
                                                    }
                                                })),
                                                settings: t.settings,
                                                set: t.hostName,
                                                setId: t.setId
                                            }).then((function(t) {
                                                e.setState({
                                                    historyId: t.data._id,
                                                    ready: !0
                                                })
                                            })).catch((function(e) {
                                                Object(p.b)(e)
                                            }))
                                        }), 2e3)
                                    }))
                                }), 3500)
                            }))
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return o.a.createElement("div", {
                            className: f()(m.a.hostBody, y.a.cafeBackground),
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(g.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(v.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "$".concat(Object(b.l)(e.cash))
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "cafe"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && O(t.prototype, a), r && O(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), n
            }(o.a.Component);
            I.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(n.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(s.b)({
                    deleteHost: h.d
                }, e)
            }))(Object(w.d)(I)))
        },
        RUrN: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__customer___14X-Q-camelCase{left:35%;top:calc(10% + 55px);width:50%}.tourSteps__plate___3yeRw-camelCase{bottom:calc(12.5% + 22vh);left:calc(12.5% + 10vh)}.tourSteps__restock___9XXwA-camelCase{left:50%;bottom:15%;transform:translateX(-50%)}.tourSteps__centered___1CtxZ-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__topRight___fO_Qi-camelCase{top:65px;right:10px}.tourSteps__cereal___36Uef-camelCase{top:calc(95px + 20.4vw);left:50%;transform:translateX(-50%)}.tourSteps__back___1Hb-D-camelCase{top:calc(7vw + 55px);right:1vw}@media only screen and (max-width:800px){.tourSteps__plate___3yeRw-camelCase{bottom:calc(12.5% + 9.25vh);left:calc(20% - 10vh)}.tourSteps__cereal___36Uef-camelCase{top:calc(109px + 42.8vw)}.tourSteps__back___1Hb-D-camelCase{top:calc(32vw + 55px);right:5%}}", ""]), t.locals = {
                customer: "tourSteps__customer___14X-Q-camelCase",
                plate: "tourSteps__plate___3yeRw-camelCase",
                restock: "tourSteps__restock___9XXwA-camelCase",
                centered: "tourSteps__centered___1CtxZ-camelCase",
                topRight: "tourSteps__topRight___fO_Qi-camelCase",
                cereal: "tourSteps__cereal___36Uef-camelCase",
                back: "tourSteps__back___1Hb-D-camelCase"
            }
        },
        Sn3C: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            })), a.d(t, "b", (function() {
                return o
            }));
            var r = "END_CAFE_DAY",
                o = "END_CAFE_LIVE"
        },
        T4uf: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__counterBelow___3jT0Y-camelCase{bottom:0;height:7.5%;background-color:#737373;background-image:linear-gradient(180deg,#424242,rgba(66,66,66,0) 70%)}.styles__counterBelow___3jT0Y-camelCase,.styles__counterBottom___3lIQU-camelCase{position:absolute;left:0;width:100%}.styles__counterBottom___3lIQU-camelCase{bottom:7.5%;height:5%;background-color:#1f7a1f}.styles__counterTop___1KhpX-camelCase{bottom:12.5%;left:0;width:100%;background-color:#2eb82e}.styles__counterTop___1KhpX-camelCase,.styles__trashBlook___3Pigw-camelCase{position:absolute;height:45vh}.styles__trashBlook___3Pigw-camelCase{bottom:12.75%;left:100vw;width:39.15vh;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__trashSlide___29TuJ-camelCase 2s linear forwards}@keyframes styles__trashSlide___29TuJ-camelCase{0%{transform:translateX(0)}to{transform:translateX(calc(-100vw - 40vh))}}.styles__plate___1-Iik-camelCase{border-bottom:1vh solid #ddd;box-shadow:0 1.6vh 0 rgba(0,0,0,.1);border-radius:50%;height:20vh;width:20vh;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__plate___1-Iik-camelCase,.styles__plate___1-Iik-camelCase:before{background-color:#fff;position:absolute}.styles__plate___1-Iik-camelCase:before{content:"";display:block;left:calc(50% - 6.5vh);top:calc(50% - 6.5vh);height:13vh;width:13vh;border-radius:12vh;border-top:1.2vh solid #ccc;opacity:.4}.styles__plateHover___1RzQy-camelCase:hover,.styles__plateSelected___1B08t-camelCase{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,.4)}.styles__lockedPlate___35ALz-camelCase{position:absolute;border-bottom:1vh solid transparent;width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:5vh;color:#fff;text-shadow:.5vh .5vh 0 grey}.styles__plateLevel2___4GqZe-camelCase{border-radius:50%;border:2vh solid #009ff2;opacity:.4}.styles__plateLevel2___4GqZe-camelCase,.styles__plateLevel3___H-LYm-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh}.styles__plateLevel3___H-LYm-camelCase{border-radius:50%;border:2vh double #093;opacity:.5}.styles__plateColor4___1hUr4-camelCase{border-bottom:1vh solid #004;background-color:#008;box-shadow:0 1.6vh 0 rgba(0,0,0,.1)}.styles__plateColor4___1hUr4-camelCase:before{border-top:1.2vh solid #004;background-color:#008}.styles__plateLevel4___1FRvd-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh;border-radius:50%;border:2vh double #fff;opacity:.9}.styles__plateColor5___1FmqE-camelCase{border-bottom:1vh solid #111;background-color:#333;box-shadow:0 1.6vh 0 rgba(0,0,0,.1)}.styles__plateColor5___1FmqE-camelCase:before{border-top:1.2vh solid #111;background-color:#333}.styles__plateLevel5___qmkZB-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh;border-radius:50%;border:2vh groove #fff;opacity:.7}.styles__foodStock___19LOm-camelCase{right:0;bottom:0;width:4vh;height:4vh;border-radius:.6vh;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.7vh;color:#fff}.styles__food___2v5qJ-camelCase,.styles__foodStock___19LOm-camelCase{position:absolute}.styles__food___2v5qJ-camelCase{width:62.5%;height:71.875%;left:18.75%;top:14.0625%}.styles__plate1___3BXBA-camelCase{bottom:calc(12.5% + 22vh);left:calc(10% - 10vh)}.styles__plate2___1f6Pq-camelCase{bottom:calc(12.5% + 3vh);left:calc(20% - 10vh)}.styles__plate3___1guU2-camelCase{bottom:calc(12.5% + 22vh);left:calc(30% - 10vh)}.styles__plate4___1Zlaf-camelCase{bottom:calc(12.5% + 3vh);left:calc(40% - 10vh)}.styles__plate5___-9d8K-camelCase{bottom:calc(12.5% + 22vh);left:calc(50% - 10vh)}.styles__plate6___3yB90-camelCase{bottom:calc(12.5% + 3vh);left:calc(60% - 10vh)}.styles__plate7___37g8Y-camelCase{bottom:calc(12.5% + 22vh);left:calc(70% - 10vh)}.styles__plate8___3rviq-camelCase{bottom:calc(12.5% + 3vh);left:calc(80% - 10vh)}.styles__plate9___39OgN-camelCase{bottom:calc(12.5% + 22vh);left:calc(90% - 10vh)}.styles__restockButton___2yGGD-camelCase{position:absolute;height:10%;width:25%;bottom:1.5%;left:37.5%;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.75vw;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__restockButton___2yGGD-camelCase:hover{transform:scale(.95)}.styles__restockButtonLive___egLXu-camelCase{position:absolute;height:10%;width:25%;bottom:1.5%;right:52.5%;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.5vw;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__restockButtonLive___egLXu-camelCase:hover{transform:scale(.95)}.styles__upgradeIcon___3-aSU-camelCase{top:-10px;right:-10px;border-radius:50%;height:25px;line-height:23px;width:25px;background-color:#ff462b;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#fff;font-family:Titan One,sans-serif;font-size:20px;text-align:center}.styles__restockKey___3_esi-camelCase,.styles__upgradeIcon___3-aSU-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__restockKey___3_esi-camelCase{right:calc(100% - 5vh);bottom:1.5%;width:8vh;height:3vh;border-radius:.45vh;background-color:#fff;border:1px solid grey;box-shadow:1px 0 1px 0 #eee,0 2px 0 2px #ccc,0 2px 0 3px #444;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.025vh;color:grey;pointer-events:none}.styles__missesContainer___6fbFb-camelCase{position:absolute;right:1%;width:30vh;bottom:1%;height:10vh;display:flex;flex-direction:row}.styles__miss___3YMRz-camelCase{font-size:10vh;width:10vh;text-align:center;color:#c43a35;text-shadow:.2vh .8vh 0 rgba(0,0,0,.2);transition:.4s}.styles__questionContainer___19vFV-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:2;animation:styles__growIn___mKmMd-camelCase .4s linear forwards}@keyframes styles__growIn___mKmMd-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___2jyzn-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f7f7f7}.styles__modalFadeIn___1HtK4-camelCase{opacity:0;animation:styles__fadeIn___27oaf-camelCase .4s linear .5s forwards}.styles__reportContainer___10NiU-camelCase{opacity:0;top:65px;margin:65px auto 15px;width:520px;display:flex;flex-direction:column;align-items:center;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;animation:styles__fadeIn___27oaf-camelCase .4s linear 1s forwards}.styles__reportHeader___1LOZ--camelCase{font-size:74px;font-family:Satisfy,sans-serif;color:#3a3a3a;text-align:center;margin:20px auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__reportRow___3TBFr-camelCase{height:50px;display:flex;flex-direction:row;align-items:center;width:calc(90% - 20px);margin:0 auto;padding:0 10px}.styles__reportFood___3yf3U-camelCase{height:40px;width:35px;margin:auto 10px auto 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__reportAmount___Y2UD5-camelCase{font-size:26px;font-weight:700}.styles__reportTimes___3gqH3-camelCase{font-size:16px;margin-right:6px}.styles__reportProfit___1I2O2-camelCase{font-size:30px;font-weight:700;margin-left:auto}.styles__reportShopButton___2AvJR-camelCase{display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;font-size:26px;padding:5px 10px;margin:25px auto 0;color:#fff;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__reportShopButton___2AvJR-camelCase:hover{transform:scale(.95)}.styles__gameOverContainer___1QKqK-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___1pmq1-camelCase{font-family:Satisfy,sans-serif;font-size:12vw;opacity:0;animation:styles__fadeIn___27oaf-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___3h7lr-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;animation:styles__fadeIn___27oaf-camelCase .4s linear 1.6s forwards}@keyframes styles__fadeIn___27oaf-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__counterTop___1KhpX-camelCase{height:42.5vh}.styles__restockButton___2yGGD-camelCase{height:10%;width:60%;bottom:1.5%;left:50%;transform:translateX(-50%);border-radius:6px;max-width:400px;font-size:7vw}.styles__restockButton___2yGGD-camelCase:hover{transform:scale(1) translateX(-50%)}.styles__restockButtonLive___egLXu-camelCase{height:10%;width:45%;bottom:1.5%;right:52.5%;font-size:5.5vw}.styles__restockButtonLive___egLXu-camelCase:hover{transform:scale(1) translateX(0)}.styles__upgradeIcon___3-aSU-camelCase{top:-10px;right:-5px}.styles__plate___1-Iik-camelCase{transform:scale(.6)}.styles__plate1___3BXBA-camelCase{left:calc(20% - 10vh)}.styles__plate1___3BXBA-camelCase,.styles__plate2___1f6Pq-camelCase{bottom:calc(12.5% + 24.75vh)}.styles__plate2___1f6Pq-camelCase{left:calc(50% - 10vh)}.styles__plate3___1guU2-camelCase{bottom:calc(12.5% + 24.75vh);left:calc(80% - 10vh)}.styles__plate4___1Zlaf-camelCase{left:calc(20% - 10vh)}.styles__plate4___1Zlaf-camelCase,.styles__plate5___-9d8K-camelCase{bottom:calc(12.5% + 11vh)}.styles__plate5___-9d8K-camelCase{left:calc(50% - 10vh)}.styles__plate6___3yB90-camelCase{bottom:calc(12.5% + 11vh);left:calc(80% - 10vh)}.styles__plate7___37g8Y-camelCase{left:calc(20% - 10vh)}.styles__plate7___37g8Y-camelCase,.styles__plate8___3rviq-camelCase{bottom:calc(12.5% - 2.75vh)}.styles__plate8___3rviq-camelCase{left:calc(50% - 10vh)}.styles__plate9___39OgN-camelCase{bottom:calc(12.5% - 2.75vh);left:calc(80% - 10vh)}.styles__plateHover___1RzQy-camelCase:hover{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,0)}.styles__plateSelected___1B08t-camelCase:hover{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,.4)}.styles__restockKey___3_esi-camelCase{display:none;opacity:0}.styles__missesContainer___6fbFb-camelCase{right:0;width:18%;bottom:1.5%;height:10%;flex-flow:row wrap;justify-content:center;align-items:center}.styles__miss___3YMRz-camelCase{font-size:5vh;width:auto;margin:auto;text-shadow:.15vh .6vh 0 rgba(0,0,0,.2)}.styles__reportContainer___10NiU-camelCase{top:45px;left:calc(50vw - 160px);width:320px}.styles__reportHeader___1LOZ--camelCase{font-size:54px}.styles__reportRow___3TBFr-camelCase{height:40px}.styles__reportFood___3yf3U-camelCase{height:30px}.styles__reportAmount___Y2UD5-camelCase{font-size:18px}.styles__reportTimes___3gqH3-camelCase{font-size:12px}.styles__reportProfit___1I2O2-camelCase{font-size:24px}.styles__gameOverText___1pmq1-camelCase{font-size:15vw}.styles__gameOverTextSmall___3h7lr-camelCase{font-size:5vw}}', ""]), t.locals = {
                counterBelow: "styles__counterBelow___3jT0Y-camelCase",
                counterBottom: "styles__counterBottom___3lIQU-camelCase",
                counterTop: "styles__counterTop___1KhpX-camelCase",
                trashBlook: "styles__trashBlook___3Pigw-camelCase",
                trashSlide: "styles__trashSlide___29TuJ-camelCase",
                plate: "styles__plate___1-Iik-camelCase",
                plateHover: "styles__plateHover___1RzQy-camelCase",
                plateSelected: "styles__plateSelected___1B08t-camelCase",
                lockedPlate: "styles__lockedPlate___35ALz-camelCase",
                plateLevel2: "styles__plateLevel2___4GqZe-camelCase",
                plateLevel3: "styles__plateLevel3___H-LYm-camelCase",
                plateColor4: "styles__plateColor4___1hUr4-camelCase",
                plateLevel4: "styles__plateLevel4___1FRvd-camelCase",
                plateColor5: "styles__plateColor5___1FmqE-camelCase",
                plateLevel5: "styles__plateLevel5___qmkZB-camelCase",
                foodStock: "styles__foodStock___19LOm-camelCase",
                food: "styles__food___2v5qJ-camelCase",
                plate1: "styles__plate1___3BXBA-camelCase",
                plate2: "styles__plate2___1f6Pq-camelCase",
                plate3: "styles__plate3___1guU2-camelCase",
                plate4: "styles__plate4___1Zlaf-camelCase",
                plate5: "styles__plate5___-9d8K-camelCase",
                plate6: "styles__plate6___3yB90-camelCase",
                plate7: "styles__plate7___37g8Y-camelCase",
                plate8: "styles__plate8___3rviq-camelCase",
                plate9: "styles__plate9___39OgN-camelCase",
                restockButton: "styles__restockButton___2yGGD-camelCase",
                restockButtonLive: "styles__restockButtonLive___egLXu-camelCase",
                upgradeIcon: "styles__upgradeIcon___3-aSU-camelCase",
                restockKey: "styles__restockKey___3_esi-camelCase",
                missesContainer: "styles__missesContainer___6fbFb-camelCase",
                miss: "styles__miss___3YMRz-camelCase",
                questionContainer: "styles__questionContainer___19vFV-camelCase",
                growIn: "styles__growIn___mKmMd-camelCase",
                feedbackContainer: "styles__feedbackContainer___2jyzn-camelCase",
                modalFadeIn: "styles__modalFadeIn___1HtK4-camelCase",
                fadeIn: "styles__fadeIn___27oaf-camelCase",
                reportContainer: "styles__reportContainer___10NiU-camelCase",
                reportHeader: "styles__reportHeader___1LOZ--camelCase",
                reportRow: "styles__reportRow___3TBFr-camelCase",
                reportFood: "styles__reportFood___3yf3U-camelCase",
                reportAmount: "styles__reportAmount___Y2UD5-camelCase",
                reportTimes: "styles__reportTimes___3gqH3-camelCase",
                reportProfit: "styles__reportProfit___1I2O2-camelCase",
                reportShopButton: "styles__reportShopButton___2AvJR-camelCase",
                gameOverContainer: "styles__gameOverContainer___1QKqK-camelCase",
                gameOverText: "styles__gameOverText___1pmq1-camelCase",
                gameOverTextSmall: "styles__gameOverTextSmall___3h7lr-camelCase"
            }
        },
        "Xz+/": function(e, t, a) {
            "use strict";
            var r = a("q1tI"),
                o = a.n(r),
                s = a("ANjH"),
                n = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("Ty5D"),
                f = a("H1WH"),
                p = a("TSYQ"),
                h = a.n(p),
                d = a("FKJl"),
                m = a("Xst1"),
                _ = a.n(m),
                y = a("FU5n"),
                v = a.n(y),
                b = a("Rnav"),
                g = a("XTAU"),
                w = a("E8Bj"),
                C = a("8u0o");

            function x(e, t, a, r, o, s, n) {
                return {
                    type: C.a,
                    foods: e,
                    items: t,
                    abilities: a,
                    cafeCash: r,
                    stage: o,
                    foodStocks: s,
                    isHappy: n
                }
            }
            var k = a("GC+6"),
                S = a("ZrUs"),
                O = a("+MB7"),
                j = a("Kr+K"),
                E = a("bYay"),
                N = a("x0md"),
                T = a("ca/f"),
                I = a("0oXL"),
                L = a("9TPi"),
                P = a("983D"),
                B = a("74sb"),
                A = a("5BnW"),
                R = a("qnYv");

            function q(e) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function G() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                G = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    s = r.asyncIterator || "@@asyncIterator",
                    n = r.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        s = Object.create(o.prototype),
                        n = new x(r || []);
                    return s._invoke = function(e, t, a) {
                        var r = "suspendedStart";
                        return function(o, s) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw s;
                                return S()
                            }
                            for (a.method = o, a.arg = s;;) {
                                var n = a.delegate;
                                if (n) {
                                    var i = g(n, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === r) throw r = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                r = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (r = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, n), s
                }

                function l(e, t, a) {
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

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(k([])));
                _ && _ !== t && a.call(_, o) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    this._invoke = function(o, s) {
                        function n() {
                            return new t((function(r, n) {
                                ! function r(o, s, n, i) {
                                    var c = l(e[o], e, s);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == q(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, n, i)
                                        }), (function(e) {
                                            r("throw", e, n, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, n(u)
                                        }), (function(e) {
                                            return r("throw", e, n, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, s, r, n)
                            }))
                        }
                        return r = r ? r.then(n, n) : n()
                    }
                }

                function g(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var r = l(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                s = function t() {
                                    for (; ++r < e.length;)
                                        if (a.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return s.next = s
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
                return p.prototype = h, i(y, "constructor", h), i(h, "constructor", p), p.displayName = i(h, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), i(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, r, o, s) {
                    void 0 === s && (s = Promise);
                    var n = new b(c(t, a, r, o), s);
                    return e.isGeneratorFunction(a) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), i(y, n, "Generator"), i(y, o, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return a.value = r, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, x.prototype = {
                    constructor: x,
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

                        function r(a, r) {
                            return n.type = "throw", n.arg = e, t.next = a, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o],
                                n = s.completion;
                            if ("root" === s.tryLoc) return r("end");
                            if (s.tryLoc <= this.prev) {
                                var i = a.call(s, "catchLoc"),
                                    c = a.call(s, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                } else if (i) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var s = o;
                                break
                            }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var n = s ? s.completion : {};
                        return n.type = e, n.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, u) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), C(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var r = a.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    C(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var r, o, s = [],
                        n = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(n = (r = a.next()).done) && (s.push(r.value), !t || s.length !== t); n = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return s
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return D(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function M(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(a), !0).forEach((function(t) {
                        z(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : M(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function z(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function F(e, t, a, r, o, s, n) {
                try {
                    var i = e[s](n),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function J(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function Y(e, t) {
                return (Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, r = W(e);
                    if (t) {
                        var o = W(this).constructor;
                        a = Reflect.construct(r, arguments, o)
                    } else a = r.apply(this, arguments);
                    return X(this, a)
                }
            }

            function X(e, t) {
                if (t && ("object" === q(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return K(e)
            }

            function K(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function W(e) {
                return (W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var V = ["far fa-hourglass", "fas fa-hourglass-start", "fas fa-hourglass-half", "fas fa-hourglass-end", "fas fa-hourglass"],
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
                        }), t && Y(e, t)
                    }(c, e);
                    var t, a, r, s, n, i = Q(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            cafeCash: e.cafe ? e.cafe.cafeCash : 0,
                            items: {},
                            abilities: {},
                            ability: "",
                            showPlayers: !1,
                            players: [],
                            ready: !1,
                            goalCompleted: !1,
                            showTour: !1,
                            cashChange: 0,
                            attackerName: "",
                            attackerBlook: "",
                            attackerAbility: ""
                        }, t.dbRefStage = {}, t.dbRefMe = {}, t.foodStocks = {}, t.isHappy = !1, t.buyItem = t.buyItem.bind(K(t)), t.buyAbility = t.buyAbility.bind(K(t)), t.useAbility = t.useAbility.bind(K(t)), t.nextDay = t.nextDay.bind(K(t)), t.endNow = t.endNow.bind(K(t)), t
                    }
                    return t = c, (a = [{
                        key: "componentDidMount",
                        value: (s = G().mark((function e() {
                            var t = this;
                            return G().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e.sent || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.cafe && "shop" === this.props.cafe.stage && this.props.cafe.questions && this.props.cafe.questions[0]) {
                                            e.next = 7;
                                            break
                                        }
                                        return this.setState({
                                            redirect: !0
                                        }), e.abrupt("return");
                                    case 7:
                                        if (Object(B.a)(), this.foodStocks = U({}, this.props.cafe.foodStocks), this.setState({
                                                items: U(U({}, this.props.cafe.foods), this.props.cafe.items),
                                                abilities: this.props.cafe.abilities ? U({}, this.props.cafe.abilities) : {},
                                                ready: !0,
                                                goalCompleted: this.props.cafe.hwGoal && this.props.cafe.day - 1 === parseInt(this.props.cafe.hwGoal, 10),
                                                showTour: 1 === this.props.cafe.day
                                            }), this.props.cafe && this.props.cafe.resultId && R.a.put("/api/results", {
                                                id: this.props.cafe.resultId,
                                                data: {
                                                    corrects: this.props.cafe.corrects,
                                                    incorrects: this.props.cafe.incorrects,
                                                    day: Number(this.props.cafe.day),
                                                    alive: !0
                                                }
                                            }).catch((function(e) {
                                                return Object(d.b)(e)
                                            })), !(this.props.client && this.props.client.hostId && this.props.cafe.mode)) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 14, this.props.liveGameController.getDatabaseRef("stg");
                                    case 14:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.liveGameController.getDatabaseVal("st", (function(e) {
                                                        var a = e ? e.map((function(e) {
                                                                return {
                                                                    name: e.n,
                                                                    blook: e.b,
                                                                    cash: e.c,
                                                                    place: e.p
                                                                }
                                                            })) : [],
                                                            r = U({}, t.state.items),
                                                            o = {
                                                                level: r.level,
                                                                time: r.time
                                                            };
                                                        delete r.level, delete r.time, t.props.leaveCafeShop(r, o, t.state.abilities, t.state.cafeCash, "final", t.foodStocks, t.isHappy), t.props.setStanding(a), t.props.history.push("/cafe/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.liveGameController.getDatabaseVal("stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 18, this.props.liveGameController.getDatabaseRef("c/".concat(this.props.client.name, "/at"));
                                    case 18:
                                        this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                            if (e.val() && !t.state.attackerAbility) {
                                                var a = e.val().split(":"),
                                                    r = a[2],
                                                    o = t.state.cafeCash,
                                                    s = 0;
                                                "pay" === r ? s = Math.round(.25 * o) : "tax" === r && (s = Math.round(-.25 * o)), o += s, Object.entries(t.foodStocks).forEach((function(e) {
                                                    var a = H(e, 2),
                                                        r = a[0],
                                                        o = a[1];
                                                    t.foodStocks[r] = Math.max(0, o - 3)
                                                })), t.setState({
                                                    cashChange: Math.abs(s),
                                                    attackerName: a[0],
                                                    attackerBlook: a[1],
                                                    attackerAbility: r,
                                                    cafeCash: o
                                                }, (function() {
                                                    "inspect" === r && (t.abilityTimeout = setTimeout((function() {
                                                        t.setState({
                                                            attackerAbility: ""
                                                        })
                                                    }), 12e3))
                                                })), t.props.liveGameController.setVal({
                                                    path: "c/".concat(t.props.client.name),
                                                    val: {
                                                        b: t.props.client.blook,
                                                        ca: o
                                                    }
                                                })
                                            }
                                        }));
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, r) {
                                var o = s.apply(e, t);

                                function n(e) {
                                    F(o, a, r, n, i, "next", e)
                                }

                                function i(e) {
                                    F(o, a, r, n, i, "throw", e)
                                }
                                n(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            Object(B.r)(), clearTimeout(this.abilityTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                        }
                    }, {
                        key: "buyItem",
                        value: function(e) {
                            var t = this;
                            if (!this.buying) {
                                this.buying = !0;
                                var a = O.b[e],
                                    r = this.state.items[e],
                                    o = a.prices[r];
                                if (o > this.state.cafeCash || 5 === r) this.buying = !1;
                                else {
                                    var s = JSON.parse(JSON.stringify(this.state.items));
                                    s[e] += 1;
                                    var n = this.state.cafeCash - o;
                                    this.props.client && this.props.client.hostId && this.props.cafe.mode && this.props.liveGameController.setVal({
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            b: this.props.client.blook,
                                            ca: n,
                                            up: "food" === O.b[e].type ? "".concat(e, ":").concat(s[e]) : null
                                        }
                                    }), this.setState({
                                        items: s,
                                        cafeCash: this.state.cafeCash - o
                                    }, (function() {
                                        t.buying = !1
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "buyAbility",
                        value: function(e) {
                            var t = this;
                            if (!this.buying) {
                                this.buying = !0;
                                var a = O.a[e],
                                    r = this.state.cafeCash,
                                    o = Math.round(a.price + r * a.percent);
                                if (o > r || 0 === this.state.abilities[e]) this.buying = !1;
                                else {
                                    var s = JSON.parse(JSON.stringify(this.state.abilities));
                                    s[e] = 0, r -= o, this.setState({
                                        abilities: s,
                                        ability: e,
                                        cafeCash: r
                                    }, (function() {
                                        t.buying = !1, ["pay", "trash", "tax", "inspect"].includes(t.state.ability) ? t.props.liveGameController.getDatabaseVal("c", (function(e) {
                                            var a = Object.entries(e).map((function(e) {
                                                var t = H(e, 2),
                                                    a = t[0],
                                                    r = t[1];
                                                return {
                                                    name: a,
                                                    blook: r.b,
                                                    cash: r.ca || 0
                                                }
                                            })).filter((function(e) {
                                                return e.name !== t.props.client.name
                                            }));
                                            a.sort((function(e, t) {
                                                return t.cash - e.cash
                                            })), t.setState({
                                                players: a,
                                                showPlayers: !0
                                            })
                                        })) : t.useAbility()
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "useAbility",
                        value: function(e) {
                            var t = this,
                                a = U({}, this.state.abilities);
                            e ? this.props.liveGameController.setVal({
                                path: "c/".concat(this.props.client.name, "/tat"),
                                val: "".concat(e.name, ":").concat(this.state.ability)
                            }) : "back" === this.state.ability ? (a = U({}, j.b)).back = 0 : "crate" === this.state.ability ? Object.entries(this.state.items).forEach((function(e) {
                                var a = H(e, 2),
                                    r = a[0];
                                a[1] > 0 && !["time", "level"].includes(r) && (t.foodStocks[r] ? t.foodStocks[r] = Math.min(t.foodStocks[r] + 7, 99) : t.foodStocks[r] = 7)
                            })) : "happy" === this.state.ability && (this.isHappy = !0), this.setState({
                                abilities: a,
                                showPlayers: !1
                            })
                        }
                    }, {
                        key: "nextDay",
                        value: function() {
                            var e = this,
                                t = U({}, this.state.items),
                                a = {
                                    level: t.level,
                                    time: t.time
                                };
                            delete t.level, delete t.time, this.props.cafe.cafeId ? R.a.put("/api/cafes/save", {
                                id: this.props.cafe.cafeId,
                                foods: t,
                                items: a,
                                cafeCash: this.state.cafeCash,
                                stage: "cafe"
                            }).then((function() {
                                e.props.leaveCafeShop(t, a, e.state.abilities, e.state.cafeCash, "cafe", e.foodStocks, e.isHappy), e.props.history.push("/cafe")
                            })).catch((function(e) {
                                Object(d.b)(e), window.location.href = "".concat("https://id.blooket.com", "/login")
                            })) : (this.props.leaveCafeShop(t, a, this.state.abilities, this.state.cafeCash, "cafe", this.foodStocks, this.isHappy), this.props.history.push("/cafe"))
                        }
                    }, {
                        key: "endNow",
                        value: function() {
                            this.props.leaveCafeShop(this.props.cafe.foods, this.props.cafe.items, this.props.cafe.abilities, this.props.cafe.cafeCash, "final", this.foodStocks, this.isHappy), this.props.history.push("/cafe/final")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.cafe || this.state.redirect ? o.a.createElement(u.a, {
                                to: "/login"
                            }) : o.a.createElement("div", {
                                className: f.isMobile ? _.a.mBody : _.a.body,
                                id: "body"
                            }, o.a.createElement(g.a, {
                                title: "Play Café | Blooket",
                                desc: "Serve delicious food to Blooks by answering questions, and make money to upgrade your Café."
                            }), o.a.createElement(b.a, {
                                cash: this.state.cafeCash
                            }), this.state.ready ? o.a.createElement("div", {
                                className: _.a.regularBody,
                                id: "regularBody"
                            }, this.state.showTour ? o.a.createElement(L.a, {
                                steps: P.a,
                                onExit: function() {},
                                functions: [function() {
                                    return e.buyItem("Cereal")
                                }, this.nextDay]
                            }) : null, o.a.createElement("div", {
                                className: v.a.header
                            }, "Upgrade Shop"), o.a.createElement("div", {
                                className: v.a.nextDayButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.nextDay,
                                id: "shopButton"
                            }, this.props.cafe.mode ? "Back" : "Next Day"), o.a.createElement("div", {
                                className: v.a.shopContainer
                            }, Object.entries(O.b).map((function(t, a) {
                                var r = H(t, 2),
                                    s = r[0],
                                    n = r[1];
                                return "time" === s && e.state.items[s] || "time" !== s ? o.a.createElement("div", {
                                    className: h()(v.a.itemContainer, z({}, v.a.itemContainerHover, e.state.items[s] < 5 && e.state.cafeCash >= n.prices[e.state.items[s]])),
                                    key: s,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.buyItem(s)
                                    },
                                    style: {
                                        cursor: e.state.items[s] < 5 && e.state.cafeCash >= n.prices[e.state.items[s]] ? "pointer" : "not-allowed"
                                    },
                                    id: "upgrade".concat(a + 1)
                                }, "food" === n.type ? o.a.createElement("div", {
                                    className: h()(v.a.plate, z({}, v.a.plate4, 4 === e.state.items[s]), z({}, v.a.plate5, 5 === e.state.items[s]))
                                }, e.state.items[s] > 1 ? o.a.createElement("div", {
                                    className: v.a["plateLevel".concat(e.state.items[s])]
                                }) : null, 0 === e.state.items[s] ? o.a.createElement("div", {
                                    className: v.a.lockedPlate
                                }, o.a.createElement("i", {
                                    className: "fas fa-lock"
                                })) : o.a.createElement(I.a, {
                                    name: s,
                                    className: v.a.food
                                })) : "level" === s ? o.a.createElement("div", {
                                    className: v.a.backgroundContainer
                                }, o.a.createElement(E.a, {
                                    level: e.state.items[s]
                                })) : "time" === s ? o.a.createElement("div", {
                                    className: v.a.iconContainer
                                }, o.a.createElement("i", {
                                    className: h()(V[e.state.items[s] - 1], v.a.upgradeIcon)
                                })) : null, o.a.createElement("div", {
                                    className: v.a.rightContainer
                                }, o.a.createElement("div", {
                                    className: v.a.itemName
                                }, n.name || s), o.a.createElement("div", {
                                    className: v.a.itemLevel
                                }, 0 === e.state.items[s] ? "Locked" : "Level ".concat(e.state.items[s])), o.a.createElement("div", {
                                    className: v.a.itemDesc
                                }, "time" === s ? "".concat(O.b[s].times[e.state.items[s] - 1], "s").concat(5 !== e.state.items[s] ? " -> ".concat(O.b[s].times[e.state.items[s]], "s") : "", " Bonus Time") : "level" === s ? "x".concat(O.b[s].multipliers[e.state.items[s] - 1]).concat(5 !== e.state.items[s] ? " -> x".concat(O.b[s].multipliers[e.state.items[s]]) : "", " Profits") : e.state.items[s] > 0 ? "$".concat(Object(B.l)(Math.round(O.b[s].profits[e.state.items[s]] * O.b.level.multipliers[e.state.items.level - 1] * (e.props.cafe.mode ? 3.25 : 1.75)))).concat(5 !== e.state.items[s] ? " -> $".concat(Object(B.l)(Math.round(O.b[s].profits[e.state.items[s] + 1] * O.b.level.multipliers[e.state.items.level - 1] * (e.props.cafe.mode ? 3.25 : 1.75)))) : "", " Per Sale") : null, o.a.createElement("br", null), 5 === e.state.items[s] ? "Max Level" : ""), 5 !== e.state.items[s] ? o.a.createElement("div", {
                                    className: v.a.itemUpgrade,
                                    style: {
                                        color: e.state.cafeCash >= n.prices[e.state.items[s]] ? "#4bc22e" : "#c43a35"
                                    }
                                }, "$".concat(Object(B.l)(n.prices[e.state.items[s]]))) : null)) : null
                            }))), this.props.cafe.mode && !this.state.showTour ? o.a.createElement("div", {
                                className: v.a.abilityHeader
                            }, "Abilities") : null, this.props.cafe.mode && !this.state.showTour ? o.a.createElement("div", {
                                className: v.a.shopContainer
                            }, Object.entries(O.a).map((function(t, a) {
                                var r = H(t, 2),
                                    s = r[0],
                                    n = r[1];
                                return o.a.createElement("div", {
                                    className: h()(v.a.itemContainer, z({}, v.a.itemContainerHover, 1 === e.state.abilities[s] && e.state.cafeCash >= Math.round(n.price + e.state.cafeCash * n.percent))),
                                    key: s,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.buyAbility(s)
                                    },
                                    style: {
                                        cursor: 1 === e.state.abilities[s] && e.state.cafeCash >= Math.round(n.price + e.state.cafeCash * n.percent) ? "pointer" : "not-allowed"
                                    },
                                    id: "upgrade".concat(a + 1)
                                }, o.a.createElement("div", {
                                    className: v.a.iconContainer,
                                    style: {
                                        backgroundColor: n.color
                                    }
                                }, o.a.createElement("i", {
                                    className: h()(n.icon, v.a.upgradeIcon)
                                })), o.a.createElement("div", {
                                    className: v.a.rightContainer
                                }, o.a.createElement("div", {
                                    className: v.a.itemName
                                }, n.name), o.a.createElement("div", {
                                    className: v.a.itemLevel
                                }, n.desc), o.a.createElement("div", {
                                    className: v.a.itemUpgrade,
                                    style: {
                                        color: 0 === e.state.abilities[s] ? "#3a3a3a" : e.state.cafeCash >= Math.round(n.price + e.state.cafeCash * n.percent) ? "#4bc22e" : "#c43a35"
                                    }
                                }, 0 === e.state.abilities[s] ? "Used" : "$".concat(Object(B.l)(Math.round(n.price + e.state.cafeCash * n.percent))))))
                            }))) : null, this.state.showPlayers ? this.state.players.length > 0 ? o.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, o.a.createElement("div", {
                                className: v.a.playerHeader
                            }, "Choose a Player"), o.a.createElement("div", {
                                className: v.a.playerHolder
                            }, this.state.players.map((function(t) {
                                return o.a.createElement("div", {
                                    className: v.a.playerContainer,
                                    key: t.name,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.useAbility(t)
                                    }
                                }, o.a.createElement(I.a, {
                                    name: t.blook,
                                    className: v.a.playerBlook
                                }), o.a.createElement("div", {
                                    className: v.a.playerColumn
                                }, o.a.createElement("div", {
                                    className: v.a.playerText
                                }, t.name), o.a.createElement("div", {
                                    className: v.a.playerCash
                                }, "$".concat(Object(B.l)(t.cash)))))
                            }))), o.a.createElement("div", {
                                style: {
                                    height: 30
                                }
                            })) : o.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, o.a.createElement("div", {
                                className: v.a.playerHeader
                            }, "No Players to Interact With"), o.a.createElement("div", {
                                className: v.a.noPlayers,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.useAbility(null)
                                }
                            }, "Next")) : null, this.state.goalCompleted ? o.a.createElement(T.a, {
                                text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                                buttonOne: {
                                    text: "Keep Playing",
                                    click: function() {
                                        return e.setState({
                                            goalCompleted: !1
                                        })
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "End Now",
                                    click: this.endNow,
                                    color: "blue"
                                }
                            }) : ["pay", "tax", "trash"].includes(this.state.attackerAbility) ? o.a.createElement(T.a, {
                                text: "pay" === this.state.attackerAbility ? "".concat(this.state.attackerName, " just gave you a $").concat(Object(B.l)(this.state.cashChange), " paycheck bonus!") : "tax" === this.state.attackerAbility ? "".concat(this.state.attackerName, " just forced you to pay $").concat(Object(B.l)(this.state.cashChange), " in taxes.") : "".concat(this.state.attackerName, " just trashed 3 of each of your foods."),
                                blook: this.state.attackerBlook,
                                buttonOne: {
                                    text: "OK",
                                    click: function() {
                                        return e.setState({
                                            attackerAbility: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null) : null, "inspect" === this.state.attackerAbility ? o.a.createElement(N.a, {
                                name: this.state.attackerName,
                                blook: this.state.attackerBlook
                            }) : null)
                        }
                    }]) && J(t.prototype, a), r && J(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            Z.propTypes = {
                client: c.a.object,
                cafe: c.a.object,
                history: c.a.object.isRequired,
                liveGameController: c.a.object,
                leaveCafeShop: c.a.func.isRequired,
                setStanding: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(w.c)(Object(l.f)(Object(n.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    cafe: e.cafes.cafe
                }
            }), (function(e) {
                return Object(s.b)({
                    leaveCafeShop: x,
                    setStanding: k.b,
                    deleteClient: S.a
                }, e)
            }))(Object(A.d)(Z))))
        },
        fB4R: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__stageText___21de9-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                stageText: "styles__stageText___21de9-camelCase"
            }
        },
        hpat: function(e, t, a) {
            var r = a("6GJI");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        kDjR: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__header___WoE64-camelCase{font-size:5.5vw;margin:1vw auto .25vw}.styles__abilityHeader___2fwCU-camelCase,.styles__header___WoE64-camelCase{font-family:Satisfy,sans-serif;color:#3a3a3a;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__abilityHeader___2fwCU-camelCase{font-size:4vw;margin:-1vw auto}.styles__nextDayButton___8lSty-camelCase{display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;width:15vw;height:4vw;font-size:2.2vw;color:#fff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:1vw;right:1vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__nextDayButton___8lSty-camelCase:hover{transform:scale(.95)}.styles__shopContainer___3p5cY-camelCase{display:flex;flex-flow:row wrap;width:95%;margin:20px 2.5%}.styles__itemContainer___34Xyx-camelCase{background-color:#f5f5f5;border:3px solid #a7a7a7;border-radius:6px;box-shadow:4px 4px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;width:calc(21% - 1vw);padding:.5vw;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:10px auto;transition:.2s}.styles__itemContainerHover___1aYfp-camelCase:hover{transform:scale(.95)}.styles__plate___2jdLq-camelCase{border-bottom:.35vw solid #eee;box-shadow:0 .56vw 0 rgba(0,0,0,.1);border-radius:50%;height:7vw;width:7vw;position:relative;margin-bottom:.56vw}.styles__plate___2jdLq-camelCase,.styles__plate___2jdLq-camelCase:before{background-color:#fff}.styles__plate___2jdLq-camelCase:before{content:"";display:block;position:absolute;left:calc(50% - 2.275vw);top:calc(50% - 2.275vw);height:4.55vw;width:4.55vw;border-radius:4.2vw;border-top:.42vw solid #ccc;opacity:.4}.styles__lockedPlate___3T4-n-camelCase{position:absolute;border-bottom:.35vw solid transparent;width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:1.75vw;color:#fff;text-shadow:.175vw .175vw 0 grey}.styles__plateLevel2___2D2SP-camelCase{border-radius:50%;border:.7vw solid #009ff2;opacity:.4}.styles__plateLevel2___2D2SP-camelCase,.styles__plateLevel3___33PVC-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw}.styles__plateLevel3___33PVC-camelCase{border-radius:50%;border:.7vw double #093;opacity:.5}.styles__plate4___274mx-camelCase{border-bottom:.35vw solid #004;background-color:#008;box-shadow:0 .56vw 0 rgba(0,0,0,.1)}.styles__plate4___274mx-camelCase:before{border-top:.42vw solid #004;background-color:#008}.styles__plateLevel4___3oKre-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw;border-radius:50%;border:.7vw double #fff;opacity:.9}.styles__plate5___OC6fL-camelCase{border-bottom:.35vw solid #111;background-color:#333;box-shadow:0 .56vw 0 rgba(0,0,0,.1)}.styles__plate5___OC6fL-camelCase:before{border-top:.42vw solid #111;background-color:#333}.styles__plateLevel5___3ANhx-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw;border-radius:50%;border:.7vw groove #fff;opacity:.7}.styles__food___JwY4w-camelCase{position:absolute;width:62.5%;height:71.875%;left:18.75%;top:14.0625%}.styles__backgroundContainer___24bAc-camelCase{border:3px solid #a7a7a7;border-radius:5px;height:7vw;width:7vw;margin:auto}.styles__iconContainer___1q1cX-camelCase{border-radius:5px;height:7vw;width:7vw;margin:auto;display:flex;align-items:center;justify-content:center;background-color:#9a49aa}.styles__upgradeIcon___1AgI7-camelCase{margin:auto;color:#fff;text-shadow:2px 2px 8px grey;font-size:4vw}.styles__rightContainer___3ADh7-camelCase{display:flex;flex-direction:column;font-family:Nunito,sans-serif;color:#3a3a3a;margin-left:1vw;width:calc(100% - 8vw)}.styles__itemName___3N74M-camelCase{font-weight:700;font-size:1.75vw;line-height:1.75vw}.styles__itemLevel___3M7jh-camelCase{margin-top:.2vw;margin-bottom:.15vw;line-height:1.2vw}.styles__itemDesc___2gsRs-camelCase,.styles__itemLevel___3M7jh-camelCase{font-size:1.05vw;margin-left:.1vw}.styles__itemDesc___2gsRs-camelCase{opacity:.7}.styles__itemUpgrade___2TBMb-camelCase{margin-top:auto;font-size:1.4vw;margin-left:auto;margin-bottom:-.3vw;font-weight:700}.styles__playerWrapper___1hxOh-camelCase{display:flex;flex-flow:column;width:100%;height:100%;position:fixed;top:0;left:0;overflow-x:hidden;background-color:#f7f7f7;animation:styles__growIn___1kI5Z-camelCase .4s}@keyframes styles__growIn___1kI5Z-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__playerHeader___2nY_k-camelCase{font-size:6vw;width:80%;margin:95px auto 0;color:#3a3a3a;text-align:center;font-family:Satisfy,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__playerHolder___dNuWU-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;outline:none}.styles__noPlayers___1HQw2-camelCase{width:200px;height:60px;line-height:60px;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:calc(50% - 30px);left:calc(50% - 100px);transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__noPlayers___1HQw2-camelCase:hover{transform:scale(.95)}.styles__playerContainer___b3cnR-camelCase{background-color:#f5f5f5;border:3px solid #a7a7a7;border-radius:6px;box-shadow:4px 4px 0 rgba(0,0,0,.2);min-height:75px;display:flex;flex-direction:row;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:275px;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__playerContainer___b3cnR-camelCase:focus,.styles__playerContainer___b3cnR-camelCase:hover{transform:scale(1.03)}.styles__playerBlook___3JPeI-camelCase{width:55px;height:63.25px;margin:auto 5px auto 10px}.styles__playerColumn___3pmLE-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px;min-height:70px}.styles__playerText___pirIK-camelCase{font-weight:700;font-size:28px;margin-right:10px;word-break:break-word}.styles__playerCash___1Sm-e-camelCase,.styles__playerText___pirIK-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;line-height:35px}.styles__playerCash___1Sm-e-camelCase{height:35px;font-size:26px}@media only screen and (max-width:800px){.styles__header___WoE64-camelCase{font-size:12vw;margin:3.4vw 5% 9vw;width:80%;text-align:left}.styles__abilityHeader___2fwCU-camelCase{font-size:9vw;margin-bottom:-3vw}.styles__nextDayButton___8lSty-camelCase{box-shadow:4px 4px 0 rgba(0,0,0,.2);width:30vw;height:8vw;font-size:4.4vw;top:20vw;right:5%}.styles__nextDayButton___8lSty-camelCase:hover{transform:scale(1)}.styles__itemContainer___34Xyx-camelCase{width:calc(43% - 2vw);padding:1vw;margin:7px auto}.styles__itemContainerHover___1aYfp-camelCase:hover{transform:scale(1)}.styles__plate___2jdLq-camelCase{border-bottom:.7vw solid #eee;box-shadow:0 1.12vw 0 rgba(0,0,0,.1);height:14vw;width:14vw;margin-bottom:1.12vw}.styles__plate___2jdLq-camelCase:before{left:calc(50% - 4.55vw);top:calc(50% - 4.55vw);height:9.1vw;width:9.1vw;border-radius:8.4vw;border-top:.84vw solid #ccc}.styles__lockedPlate___3T4-n-camelCase{border-bottom:.7vw solid transparent;font-size:3.5vw;text-shadow:.35vw .35vw 0 grey}.styles__plateLevel2___2D2SP-camelCase{border:1.4vw solid #009ff2}.styles__plateLevel2___2D2SP-camelCase,.styles__plateLevel3___33PVC-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw}.styles__plateLevel3___33PVC-camelCase{border:1.4vw double #093}.styles__plate4___274mx-camelCase{border-bottom:.7vw solid #004;box-shadow:0 1.12vw 0 rgba(0,0,0,.1)}.styles__plate4___274mx-camelCase:before{border-top:.84vw solid #004}.styles__plateLevel4___3oKre-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw;border:1.4vw double #fff}.styles__plate5___OC6fL-camelCase{border-bottom:.7vw solid #111;box-shadow:0 1.12vw 0 rgba(0,0,0,.1)}.styles__plate5___OC6fL-camelCase:before{border-top:.84vw solid #111}.styles__plateLevel5___3ANhx-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw;border:1.4vw groove #fff}.styles__backgroundContainer___24bAc-camelCase,.styles__iconContainer___1q1cX-camelCase{height:14vw;width:14vw}.styles__upgradeIcon___1AgI7-camelCase{font-size:8vw}.styles__rightContainer___3ADh7-camelCase{margin-left:1vw;width:calc(100% - 15vw)}.styles__itemName___3N74M-camelCase{font-size:3.5vw;line-height:3.5vw}.styles__itemLevel___3M7jh-camelCase{margin-top:.6vw;margin-bottom:.4vw;line-height:2.5vw}.styles__itemDesc___2gsRs-camelCase,.styles__itemLevel___3M7jh-camelCase{font-size:2.1vw;margin-left:.2vw}.styles__itemUpgrade___2TBMb-camelCase{font-size:2.8vw;margin-bottom:-.3vw}.styles__playerHeader___2nY_k-camelCase{font-size:11vw}.styles__playerHolder___dNuWU-camelCase{width:90%}.styles__playerContainer___b3cnR-camelCase{width:100%}}', ""]), t.locals = {
                header: "styles__header___WoE64-camelCase",
                abilityHeader: "styles__abilityHeader___2fwCU-camelCase",
                nextDayButton: "styles__nextDayButton___8lSty-camelCase",
                shopContainer: "styles__shopContainer___3p5cY-camelCase",
                itemContainer: "styles__itemContainer___34Xyx-camelCase",
                itemContainerHover: "styles__itemContainerHover___1aYfp-camelCase",
                plate: "styles__plate___2jdLq-camelCase",
                lockedPlate: "styles__lockedPlate___3T4-n-camelCase",
                plateLevel2: "styles__plateLevel2___2D2SP-camelCase",
                plateLevel3: "styles__plateLevel3___33PVC-camelCase",
                plate4: "styles__plate4___274mx-camelCase",
                plateLevel4: "styles__plateLevel4___3oKre-camelCase",
                plate5: "styles__plate5___OC6fL-camelCase",
                plateLevel5: "styles__plateLevel5___3ANhx-camelCase",
                food: "styles__food___JwY4w-camelCase",
                backgroundContainer: "styles__backgroundContainer___24bAc-camelCase",
                iconContainer: "styles__iconContainer___1q1cX-camelCase",
                upgradeIcon: "styles__upgradeIcon___1AgI7-camelCase",
                rightContainer: "styles__rightContainer___3ADh7-camelCase",
                itemName: "styles__itemName___3N74M-camelCase",
                itemLevel: "styles__itemLevel___3M7jh-camelCase",
                itemDesc: "styles__itemDesc___2gsRs-camelCase",
                itemUpgrade: "styles__itemUpgrade___2TBMb-camelCase",
                playerWrapper: "styles__playerWrapper___1hxOh-camelCase",
                growIn: "styles__growIn___1kI5Z-camelCase",
                playerHeader: "styles__playerHeader___2nY_k-camelCase",
                playerHolder: "styles__playerHolder___dNuWU-camelCase",
                noPlayers: "styles__noPlayers___1HQw2-camelCase",
                playerContainer: "styles__playerContainer___b3cnR-camelCase",
                playerBlook: "styles__playerBlook___3JPeI-camelCase",
                playerColumn: "styles__playerColumn___3pmLE-camelCase",
                playerText: "styles__playerText___pirIK-camelCase",
                playerCash: "styles__playerCash___1Sm-e-camelCase"
            }
        },
        lt4V: function(e, t, a) {
            "use strict";
            var r = a("q1tI"),
                o = a.n(r),
                s = a("ANjH"),
                n = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("H1WH"),
                f = a("TSYQ"),
                p = a.n(f),
                h = a("FKJl"),
                d = a("Xst1"),
                m = a.n(d),
                _ = a("CCJB"),
                y = a.n(_),
                v = a("Rnav"),
                b = a("XTAU"),
                g = a("FVRk"),
                w = a("4Zpe"),
                C = a("ca/f"),
                x = a("9TPi"),
                k = a("983D"),
                S = a("Sn3C");

            function O(e, t, a, r, o, s, n, i) {
                return {
                    type: S.a,
                    corrects: e,
                    incorrects: t,
                    cafeCash: a,
                    day: r,
                    foodServed: o,
                    freeQuestions: s,
                    stage: n,
                    foodStocks: i
                }
            }

            function j(e, t, a, r, o, s, n, i, c) {
                return {
                    type: S.b,
                    corrects: e,
                    incorrects: t,
                    cafeCash: a,
                    day: r,
                    foodServed: o,
                    freeQuestions: s,
                    stage: n,
                    foodStocks: i,
                    customers: c
                }
            }
            var E = a("GC+6"),
                N = a("ZrUs"),
                T = a("l5tK"),
                I = a("bYay"),
                L = a("x0md"),
                P = a("0oXL"),
                B = a("+MB7"),
                A = a("74sb"),
                R = a("5BnW"),
                q = a("E8Bj"),
                G = a("Y018"),
                H = a("liux"),
                D = a("O+AO"),
                M = a("cQOM"),
                U = a("/9rF"),
                z = a("5Kqo"),
                F = a("xoUC"),
                J = a("sa6r"),
                Y = a("qnYv");

            function Q(e) {
                return (Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function X(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var r, o, s = [],
                        n = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(n = (r = a.next()).done) && (s.push(r.value), !t || s.length !== t); n = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return s
                }(e, t) || ce(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function K() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                K = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    s = r.asyncIterator || "@@asyncIterator",
                    n = r.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        s = Object.create(o.prototype),
                        n = new x(r || []);
                    return s._invoke = function(e, t, a) {
                        var r = "suspendedStart";
                        return function(o, s) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw s;
                                return S()
                            }
                            for (a.method = o, a.arg = s;;) {
                                var n = a.delegate;
                                if (n) {
                                    var i = g(n, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === r) throw r = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                r = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (r = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, n), s
                }

                function l(e, t, a) {
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

                function f() {}

                function p() {}

                function h() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    _ = m && m(m(k([])));
                _ && _ !== t && a.call(_, o) && (d = _);
                var y = h.prototype = f.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var r;
                    this._invoke = function(o, s) {
                        function n() {
                            return new t((function(r, n) {
                                ! function r(o, s, n, i) {
                                    var c = l(e[o], e, s);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == Q(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, n, i)
                                        }), (function(e) {
                                            r("throw", e, n, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, n(u)
                                        }), (function(e) {
                                            return r("throw", e, n, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, s, r, n)
                            }))
                        }
                        return r = r ? r.then(n, n) : n()
                    }
                }

                function g(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var r = l(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                s = function t() {
                                    for (; ++r < e.length;)
                                        if (a.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return s.next = s
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
                return p.prototype = h, i(y, "constructor", h), i(h, "constructor", p), p.displayName = i(h, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(b.prototype), i(b.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, r, o, s) {
                    void 0 === s && (s = Promise);
                    var n = new b(c(t, a, r, o), s);
                    return e.isGeneratorFunction(a) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), i(y, n, "Generator"), i(y, o, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return a.value = r, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, x.prototype = {
                    constructor: x,
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

                        function r(a, r) {
                            return n.type = "throw", n.arg = e, t.next = a, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var s = this.tryEntries[o],
                                n = s.completion;
                            if ("root" === s.tryLoc) return r("end");
                            if (s.tryLoc <= this.prev) {
                                var i = a.call(s, "catchLoc"),
                                    c = a.call(s, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                } else if (i) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && a.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var s = o;
                                break
                            }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var n = s ? s.completion : {};
                        return n.type = e, n.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, u) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), C(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var r = a.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    C(a)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function W(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(a), !0).forEach((function(t) {
                        Z(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function Z(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function $(e, t, a, r, o, s, n) {
                try {
                    var i = e[s](n),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function ee(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(r, o) {
                        var s = e.apply(t, a);

                        function n(e) {
                            $(s, r, o, n, i, "next", e)
                        }

                        function i(e) {
                            $(s, r, o, n, i, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function te(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function ae(e, t) {
                return (ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function re(e) {
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
                    var a, r = ne(e);
                    if (t) {
                        var o = ne(this).constructor;
                        a = Reflect.construct(r, arguments, o)
                    } else a = r.apply(this, arguments);
                    return oe(this, a)
                }
            }

            function oe(e, t) {
                if (t && ("object" === Q(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return se(e)
            }

            function se(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ne(e) {
                return (ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ie(e) {
                return function(e) {
                    if (Array.isArray(e)) return le(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ce(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ce(e, t) {
                if (e) {
                    if ("string" == typeof e) return le(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? le(e, t) : void 0
                }
            }

            function le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }
            var ue = [].concat(ie(Object.keys(G.a)), ie(Object.keys(H.a)), ie(Object.keys(D.a)), ie(Object.keys(M.a)), ie(Object.keys(U.a))),
                fe = [].concat(ie(Object.keys(z.a)), ie(Object.keys(F.a)), ie(Object.keys(J.a))),
                pe = {
                    Toast: 0,
                    Cereal: 0,
                    Yogurt: 0,
                    "Breakfast Combo": 0,
                    "Orange Juice": 0,
                    Milk: 0,
                    Waffle: 0,
                    Pancakes: 0,
                    "French Toast": 0
                },
                he = function(e) {
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
                        }), t && ae(e, t)
                    }(c, e);
                    var t, a, r, s, n, i = re(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            name: "",
                            foods: [],
                            customers: [{}, {}, {}],
                            futureCustomers: [],
                            foodSelected: -1,
                            question: {},
                            phase: "cafe",
                            correct: !0,
                            reportArray: [],
                            totalProfit: -1,
                            day: 1,
                            customersMissed: 0,
                            askTour: !1,
                            showTour: !1,
                            goal: 0,
                            gameOver: !1,
                            cafeCash: 0,
                            canUpgrade: !1,
                            cashChange: 0,
                            attackerName: "",
                            attackerBlook: "",
                            ability: "",
                            redirect: !1,
                            readId: ""
                        }, t.timeouts = [], t.questions = [], t.freeQuestions = [], t.corrects = e.cafe && e.cafe.corrects ? JSON.parse(JSON.stringify(e.cafe.corrects)) : {}, t.incorrects = e.cafe && e.cafe.incorrects ? JSON.parse(JSON.stringify(e.cafe.incorrects)) : {}, t.waiting = !1, t.canGoNext = !0, t.foodServed = 0, t.foodSales = JSON.parse(JSON.stringify(pe)), t.happyCustomers = 0, t.gettingQuestion = !1, t.gameOver = !1, t.dbRefStage = {}, t.dbRefMe = {}, t.here = !0, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(se(t)), t.onSpacePress = t.onSpacePress.bind(se(t)), t.getQuestion = t.getQuestion.bind(se(t)), t.newDay = t.newDay.bind(se(t)), t.newLiveCustomer = t.newLiveCustomer.bind(se(t)), t.addCustomer = t.addCustomer.bind(se(t)), t.removeCustomer = t.removeCustomer.bind(se(t)), t.answerNext = t.answerNext.bind(se(t)), t.selectFood = t.selectFood.bind(se(t)), t.selectCustomer = t.selectCustomer.bind(se(t)), t.answerTour = t.answerTour.bind(se(t)), t.canUpgrade = t.canUpgrade.bind(se(t)), t.goToShop = t.goToShop.bind(se(t)), t.readQuestion = t.readQuestion.bind(se(t)), t
                    }
                    return t = c, (a = [{
                        key: "componentDidMount",
                        value: (n = ee(K().mark((function e() {
                            var t, a = this;
                            return K().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e.sent || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.cafe && "cafe" === this.props.cafe.stage && this.props.cafe.questions && this.props.cafe.questions[0]) {
                                            e.next = 7;
                                            break
                                        }
                                        return this.setState({
                                            redirect: !0
                                        }), e.abrupt("return");
                                    case 7:
                                        if (Object(A.a)(), this.questions = this.props.cafe.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.cafe.freeQuestions)), this.props.cafe.isHappy && (this.happyCustomers = 5), t = [], Object.keys(pe).forEach((function(e) {
                                                t.push({
                                                    name: e,
                                                    level: a.props.cafe.foods && a.props.cafe.foods[e] ? a.props.cafe.foods[e] : 0,
                                                    stock: a.props.cafe.foodStocks && a.props.cafe.foodStocks[e] ? a.props.cafe.foodStocks[e] : 0
                                                })
                                            })), this.setState({
                                                foods: t,
                                                name: this.props.client ? this.props.client.name : "",
                                                cafeCash: this.props.cafe.cafeCash,
                                                day: this.props.cafe.day,
                                                askTour: 1 === this.props.cafe.day && 0 === this.props.cafe.foods.Cereal,
                                                goal: 1 === this.props.cafe.day && (this.props.cafe.hwGoal || this.props.cafe.goal) || 0,
                                                mode: this.props.cafe.mode,
                                                customers: this.props.cafe.customers && 3 === this.props.cafe.customers.length ? this.props.cafe.customers : [{}, {}, {}]
                                            }, (function() {
                                                if (!a.state.askTour && !a.state.goal)
                                                    if (a.state.mode) {
                                                        a.canUpgrade();
                                                        for (var e = 0; e < 3 - a.state.customers.filter((function(e) {
                                                                return e.profit
                                                            })).length; e++) a.newLiveCustomer()
                                                    } else a.newDay()
                                            })), document.addEventListener("keypress", this.onSpacePress), !(this.props.client && this.props.client.hostId && this.props.cafe.mode)) {
                                            e.next = 24;
                                            break
                                        }
                                        return e.next = 18, this.props.liveGameController.getDatabaseRef("stg");
                                    case 18:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    a.props.liveGameController.getDatabaseVal("st", (function(e) {
                                                        var t = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                cash: e.c,
                                                                place: e.p
                                                            }
                                                        })).filter((function(e) {
                                                            return e.cash || 0 === e.cash
                                                        })) : [];
                                                        a.props.endCafeDay(a.corrects, a.incorrects, a.state.cafeCash, a.state.day, a.props.cafe.foodServed + a.foodServed, a.freeQuestions, "final", {}), a.props.setStanding(t), a.props.history.push("/cafe/final")
                                                    }));
                                                    break;
                                                case null:
                                                    a.props.liveGameController.getDatabaseVal("stg", (function(e) {
                                                        e || (a.props.deleteClient(), a.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 22, this.props.liveGameController.getDatabaseRef("c/".concat(this.props.client.name, "/at"));
                                    case 22:
                                        this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                            if (e.val() && !a.state.ability) {
                                                var t = e.val().split(":"),
                                                    r = t[2],
                                                    o = a.state.cafeCash,
                                                    s = 0;
                                                "pay" === r ? s = Math.round(.25 * o) : "tax" === r && (s = Math.round(-.25 * o)), o += s, a.here && (a.setState({
                                                    cashChange: Math.abs(s),
                                                    attackerName: t[0],
                                                    attackerBlook: t[1],
                                                    ability: r,
                                                    cafeCash: o
                                                }, (function() {
                                                    "inspect" === r ? a.abilityTimeout = setTimeout((function() {
                                                        a.setState({
                                                            ability: ""
                                                        })
                                                    }), 12e3) : "trash" === r && (a.abilityTimeout = setTimeout((function() {
                                                        var e = a.state.foods.map((function(e) {
                                                            return V(V({}, e), {}, {
                                                                stock: Math.max(0, e.stock - 3)
                                                            })
                                                        }));
                                                        a.setState({
                                                            foods: e
                                                        }, (function() {
                                                            a.abilityTimeout = setTimeout((function() {
                                                                a.setState({
                                                                    ability: ""
                                                                })
                                                            }), 1050)
                                                        }))
                                                    }), 1050))
                                                })), a.props.liveGameController.setVal({
                                                    path: "c/".concat(a.props.client.name),
                                                    val: {
                                                        b: a.props.client.blook,
                                                        ca: o
                                                    }
                                                }))
                                            }
                                        }));
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(A.r)(), this.timeouts.forEach((function(e) {
                                clearTimeout(e)
                            })), clearTimeout(this.abilityTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.nextTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.doneTimeout), clearTimeout(this.customerTimeout), document.removeEventListener("keypress", this.onSpacePress), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            var t = this;
                            if (!this.waiting) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var a = this.state.question.correctAnswers.includes(e),
                                    r = this.state.question.number;
                                a ? this.corrects[r] ? this.corrects[r] += 1 : this.corrects[r] = 1 : this.incorrects[r] ? this.incorrects[r] += 1 : this.incorrects[r] = 1, this.canGoNext = !1, this.here && this.setState({
                                    correct: a,
                                    phase: "feedback",
                                    readId: ""
                                }, (function() {
                                    document.addEventListener("keypress", t.onSpacePress), t.state.correct ? t.canGoNext = !0 : t.nextTimeout = setTimeout((function() {
                                        t.canGoNext = !0
                                    }), 3e3)
                                }))
                            }
                        }
                    }, {
                        key: "onSpacePress",
                        value: function(e) {
                            var t = e || window.event;
                            if (32 === t.keyCode || "Space" === t.code) {
                                if (this.state.totalProfit >= 0) return;
                                "cafe" === this.state.phase ? (document.removeEventListener("keypress", this.onSpacePress), this.getQuestion(), this.setState({
                                    foodSelected: -1
                                })) : "feedback" === this.state.phase && this.canGoNext && this.answerNext()
                            }
                        }
                    }, {
                        key: "getQuestion",
                        value: function() {
                            var e = this;
                            if (!this.state.showTour && this.here && !this.gettingQuestion) {
                                this.gettingQuestion = !0, 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(A.m)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(A.t)(t.answers)), this.here && this.setState({
                                    question: t,
                                    phase: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1, e.gettingQuestion = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "newDay",
                        value: function() {
                            var e = this,
                                t = this.state.foods.filter((function(e) {
                                    return e.level > 0
                                })).map((function(e) {
                                    return e.name
                                })),
                                a = Math.round(10 * (1 - Math.exp(-.06 * (this.state.day - 1)))) + 5,
                                r = 0;
                            this.questions.forEach((function(e) {
                                r += Number(e.timeLimit)
                            }));
                            for (var o = Math.max(r / this.questions.length / 1.5, 12), s = [], n = 0; n < a; n++) {
                                for (var i = Math.random() > .9, c = Object(A.m)([1, 2, 2, 3, 3, 3]), l = 0, u = {}, f = 0; f < c; f++) {
                                    var p = Object(A.o)(1, Math.min(.35 * this.state.day, i ? 11 : 5) + 2);
                                    u[Object(A.m)(t)] = p, l += p
                                }
                                var h = 0;
                                Object.entries(u).forEach((function(t) {
                                    var a = X(t, 2),
                                        r = a[0],
                                        o = a[1];
                                    h += B.b[r].profits[e.props.cafe.foods[r]] * o
                                })), h *= B.b.level.multipliers[this.props.cafe.items.level - 1], h = Math.round(1.75 * h), s.push({
                                    blook: i ? Object(A.m)(fe) : Object(A.m)(ue),
                                    time: 1e3 * (37 * Math.exp(-.05 * this.state.day) + 1.3 * l + (this.state.day < 15 ? o + 6 : 5)) + 1e3 * B.b.time.times[this.props.cafe.items.level - 1],
                                    enterDelay: 1e3 * (7 * Math.random() * Math.exp(-.035 * this.state.day) + 1.5),
                                    constantOrder: u,
                                    order: u,
                                    profit: h
                                })
                            }
                            this.here && this.setState({
                                futureCustomers: s,
                                showTour: !1
                            }, (function() {
                                e.customerTimeout = setTimeout((function() {
                                    var t = [{}, {}, {}];
                                    t[Object(A.o)(0, 3)] = s[0], s.splice(0, 1), e.setState({
                                        customers: t,
                                        futureCustomers: s
                                    }, (function() {
                                        for (var t = 0; t < 2; t++) e.addCustomer(s[0].enterDelay * (1 + t))
                                    }))
                                }), 3e3)
                            }))
                        }
                    }, {
                        key: "newLiveCustomer",
                        value: function() {
                            for (var e = this, t = this.state.foods.filter((function(e) {
                                    return e.level > 0
                                })).map((function(e) {
                                    return e.name
                                })), a = Math.random() > .9, r = Object(A.m)([1, 2, 2, 3, 3, 3]), o = {}, s = 0; s < r; s++) {
                                var n = Object(A.o)(1, Math.min(.03 * (this.foodServed + this.props.cafe.foodServed), a ? 9 : 5) + 2);
                                o[Object(A.m)(t)] = n
                            }
                            var i = 0;
                            Object.entries(o).forEach((function(t) {
                                var a = X(t, 2),
                                    r = a[0],
                                    o = a[1];
                                i += B.b[r].profits[e.props.cafe.foods[r]] * o
                            })), i *= B.b.level.multipliers[this.props.cafe.items.level - 1], i = Math.round(3.25 * i), this.happyCustomers > 0 && (i = Math.round(2 * i), this.happyCustomers -= 1);
                            var c = {
                                blook: a ? Object(A.m)(fe) : Object(A.m)(ue),
                                time: -1,
                                enterDelay: 5 * Math.random() * 1e3,
                                constantOrder: o,
                                order: o,
                                profit: i
                            };
                            this.addCustomer(c.enterDelay, c)
                        }
                    }, {
                        key: "addCustomer",
                        value: function(e, t) {
                            var a = this; - 1 !== e && this.timeouts.push(setTimeout((function() {
                                var e = JSON.parse(JSON.stringify(a.state.customers)),
                                    r = JSON.parse(JSON.stringify(a.state.futureCustomers)),
                                    o = function(e) {
                                        for (var t = 0; t < e.length; t++)
                                            if (!e[t].blook) return t;
                                        return -1
                                    }(e); - 1 !== o && r.length > 0 ? e[o] = r.splice(0, 1)[0] : t && (e[o] = t), a.here && a.setState({
                                    customers: e,
                                    futureCustomers: r
                                })
                            }), e))
                        }
                    }, {
                        key: "removeCustomer",
                        value: function(e, t) {
                            var a = this;
                            if (t && this.props.client && this.props.client.hostId && this.props.cafe.mode) {
                                var r = this.state.cafeCash + this.state.customers[e].profit;
                                if (this.props.liveGameController.setVal({
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            b: this.props.client.blook,
                                            ca: r
                                        }
                                    }), !this.here) return;
                                this.setState({
                                    cafeCash: r
                                }, this.canUpgrade)
                            }
                            this.doneTimeout = setTimeout((function() {
                                var r = JSON.parse(JSON.stringify(a.state.customers));
                                if (0 !== r[e].time) {
                                    var o = a.state.customersMissed;
                                    t ? Object.entries(r[e].constantOrder).forEach((function(e) {
                                        var t = X(e, 2),
                                            r = t[0],
                                            o = t[1];
                                        a.foodSales[r] += o
                                    })) : o += 1, r[e] = {}, a.here && a.setState({
                                        customers: r,
                                        customersMissed: o
                                    }, (function() {
                                        if (o >= 3) {
                                            if (a.gameOver = !0, !a.here) return;
                                            a.setState({
                                                gameOver: !0
                                            }, (function() {
                                                a.props.cafe.cafeId ? Y.a.put("/api/cafes/save", {
                                                    id: a.props.cafe.cafeId,
                                                    corrects: a.corrects,
                                                    incorrects: a.incorrects,
                                                    cafeCash: a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0),
                                                    foodServed: a.props.cafe.foodServed + a.foodServed,
                                                    day: a.state.day,
                                                    stage: "final"
                                                }).then((function() {
                                                    a.exitTimeout = setTimeout((function() {
                                                        a.props.endCafeDay(a.corrects, a.incorrects, a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0), a.state.day, a.props.cafe.foodServed + a.foodServed, a.freeQuestions, "final", {}), a.props.history.push("/cafe/final")
                                                    }), 5e3)
                                                })).catch((function(e) {
                                                    Object(h.b)(e), window.location.href = "".concat("https://id.blooket.com", "/login")
                                                })) : a.exitTimeout = setTimeout((function() {
                                                    a.props.endCafeDay(a.corrects, a.incorrects, a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0), a.state.day, a.props.cafe.foodServed + a.foodServed, a.freeQuestions, "final", {}), a.props.history.push("/cafe/final")
                                                }), 5e3)
                                            }))
                                        } else if (a.props.cafe.mode) a.newLiveCustomer();
                                        else if (0 === a.state.customers.filter((function(e) {
                                                return e.blook
                                            })).length && 0 === a.state.futureCustomers.length) {
                                            var e = [],
                                                t = 0,
                                                r = B.b.level.multipliers[a.props.cafe.items.level - 1];
                                            if (Object.entries(a.foodSales).forEach((function(o) {
                                                    var s = X(o, 2),
                                                        n = s[0],
                                                        i = s[1];
                                                    if (!(i <= 0)) {
                                                        var c = Math.round(i * B.b[n].profits[a.props.cafe.foods[n]] * r * 1.75);
                                                        t += c, e.push({
                                                            name: n,
                                                            amount: i,
                                                            profit: c
                                                        })
                                                    }
                                                })), a.gameOver || !a.here) return;
                                            a.setState({
                                                reportArray: e,
                                                totalProfit: t
                                            })
                                        } else a.addCustomer(a.state.futureCustomers[0] ? a.state.futureCustomers[0].enterDelay : -1)
                                    }))
                                } else {
                                    if (Object.entries(r[e].constantOrder).forEach((function(e) {
                                            var t = X(e, 2),
                                                r = t[0],
                                                o = t[1];
                                            a.foodSales[r] += o
                                        })), r[e] = {}, !a.here) return;
                                    a.setState({
                                        customers: r
                                    })
                                }
                            }), 2200)
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            if (this.canGoNext) {
                                var e = JSON.parse(JSON.stringify(this.state.foods));
                                this.state.correct && e.forEach((function(t, a) {
                                    t.level > 0 && (e[a].stock = Math.min(e[a].stock + 1, 99))
                                })), this.setState({
                                    phase: "cafe",
                                    foods: e
                                })
                            }
                        }
                    }, {
                        key: "selectFood",
                        value: function(e) {
                            this.state.foods[e].stock <= 0 || this.setState({
                                foodSelected: e === this.state.foodSelected ? -1 : e
                            })
                        }
                    }, {
                        key: "selectCustomer",
                        value: function(e) {
                            var t = this.state.customers[e] ? this.state.customers[e].order : null;
                            if (t) {
                                var a = this.state.foods[this.state.foodSelected];
                                if (a.stock > 0 && t[a.name] > 0) {
                                    var r = JSON.parse(JSON.stringify(this.state.customers)),
                                        o = Math.min(r[e].order[a.name], a.stock);
                                    r[e].order[a.name] -= o;
                                    var s = JSON.parse(JSON.stringify(this.state.foods));
                                    s[this.state.foodSelected].stock -= o, this.foodServed += o, this.setState({
                                        customers: r,
                                        foods: s,
                                        foodSelected: -1
                                    })
                                } else this.setState({
                                    foodSelected: -1
                                })
                            } else this.setState({
                                foodSelected: -1
                            })
                        }
                    }, {
                        key: "answerTour",
                        value: function(e) {
                            var t = this;
                            if (this.here)
                                if (e) {
                                    var a = {
                                            Toast: 2
                                        },
                                        r = [{
                                            blook: Object(A.m)(ue),
                                            time: 0,
                                            enterDelay: 0,
                                            constantOrder: a,
                                            order: a,
                                            profit: this.props.cafe.mode ? 7 : 2
                                        }, {}, {}];
                                    this.setState({
                                        customers: r,
                                        askTour: !1,
                                        showTour: !0
                                    })
                                } else this.setState({
                                    askTour: !1,
                                    showTour: !1
                                }, (function() {
                                    if (!t.state.goal)
                                        if (t.props.cafe.mode) {
                                            t.canUpgrade();
                                            for (var e = 0; e < 3 - t.state.customers.filter((function(e) {
                                                    return e.profit
                                                })).length; e++) t.newLiveCustomer()
                                        } else t.newDay()
                                }))
                        }
                    }, {
                        key: "canUpgrade",
                        value: function() {
                            for (var e = !1, t = Object.entries(this.props.cafe.foods), a = 0; a < Object.keys(this.props.cafe.foods).length; a++)
                                if (B.b[t[a][0]].prices[t[a][1]] <= this.state.cafeCash) {
                                    e = !0;
                                    break
                                } if (!e)
                                for (var r = Object.entries(this.props.cafe.items), o = 0; o < Object.keys(this.props.cafe.items).length; o++)
                                    if (B.b[r[o][0]].prices[r[o][1]] <= this.state.cafeCash) {
                                        e = !0;
                                        break
                                    } this.here && this.setState({
                                canUpgrade: e
                            })
                        }
                    }, {
                        key: "goToShop",
                        value: function() {
                            var e = this;
                            if (!this.gameOver) {
                                var t = {};
                                this.state.foods.forEach((function(e) {
                                    t[e.name] = e.stock
                                })), this.props.cafe.cafeId ? Y.a.put("/api/cafes/save", {
                                    id: this.props.cafe.cafeId,
                                    corrects: this.corrects,
                                    incorrects: this.incorrects,
                                    cafeCash: this.props.cafe.cafeCash + this.state.totalProfit,
                                    foodServed: this.props.cafe.foodServed + this.foodServed,
                                    day: this.state.day + 1,
                                    stage: "shop",
                                    foodStocks: t
                                }).then((function() {
                                    e.props.endCafeDay(e.corrects, e.incorrects, e.props.cafe.cafeCash + e.state.totalProfit, e.state.day + 1, e.props.cafe.foodServed + e.foodServed, e.freeQuestions, "shop", t), e.props.history.push("/cafe/shop")
                                })).catch((function(e) {
                                    Object(h.b)(e), window.location.href = "".concat("https://id.blooket.com", "/login")
                                })) : this.props.cafe.mode ? (this.props.endCafeLive(this.corrects, this.incorrects, this.state.cafeCash, this.state.showTour ? 1 : this.state.day + 1, this.props.cafe.foodServed + this.foodServed, this.freeQuestions, "shop", t, this.state.customers.map((function(e) {
                                    return e.order && 0 === Object.values(e.order).filter((function(e) {
                                        return e
                                    })).length ? {} : e
                                }))), this.props.history.push("/cafe/shop")) : (this.props.endCafeDay(this.corrects, this.incorrects, this.props.cafe.cafeCash + this.state.totalProfit, this.state.day + 1, this.props.cafe.foodServed + this.foodServed, this.freeQuestions, "shop", t), this.props.history.push("/cafe/shop"))
                            }
                        }
                    }, {
                        key: "readQuestion",
                        value: (s = ee(K().mark((function e() {
                            var t, a = this;
                            return K().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, r) {
                                            var o = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return r();
                                            e.includes("`*`") && (o = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(o), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), r()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(a.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(a.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(a.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(a.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(a.state.question.answers[3], "q4", e)
                                        }));
                                    case 16:
                                        this.isReading = !1;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (Object(h.b)("CafePage cannot render if this.state.notLoggedIn"), this.redirect = !0), this.props.cafe || (Object(h.b)("CafePage cannot render without this.props.cafe"), this.redirect = !0), this.props.cafe.questions || (Object(h.b)("CafePage cannot render without this.props.cafe.questions"), this.redirect = !0), this.props.cafe.questions[0] || (Object(h.b)("CafePage cannot render without this.props.cafe.questions[0]"), this.redirect = !0), this.state.redirect && (Object(h.b)("CafePage cannot render if this.state.redirect"), this.redirect = !0), !this.redirect) return o.a.createElement("div", {
                                className: u.isMobile ? m.a.mBody : m.a.body,
                                id: "body"
                            }, o.a.createElement(b.a, {
                                title: "Play Café | Blooket",
                                desc: "Serve delicious food to Blooks by answering questions, and make money to upgrade your Café."
                            }), o.a.createElement(v.a, {
                                cash: this.state.mode ? this.state.cafeCash : null,
                                customers: this.state.mode ? null : this.state.futureCustomers.length,
                                name: this.state.name,
                                color: Object(I.d)(this.props.cafe.items.level),
                                showRead: "question" === this.state.phase,
                                readQuestion: this.readQuestion
                            }), o.a.createElement("div", {
                                className: m.a.regularBody,
                                id: "regularBody"
                            }, this.state.showTour ? o.a.createElement(x.a, {
                                steps: this.props.cafe.mode ? k.b : k.c,
                                onExit: this.props.cafe.goal ? function() {} : this.state.goal ? function() {
                                    return e.answerTour(!1)
                                } : this.newDay,
                                functions: [this.answerNext, this.goToShop]
                            }) : null, o.a.createElement(I.a, {
                                level: this.props.cafe.items.level
                            }), o.a.createElement("div", {
                                className: y.a.counterBelow
                            }), o.a.createElement("div", {
                                className: y.a.counterBottom,
                                style: {
                                    backgroundColor: Object(I.b)(this.props.cafe.items.level)
                                }
                            }), o.a.createElement("div", {
                                className: y.a.counterTop,
                                style: {
                                    backgroundColor: Object(I.c)(this.props.cafe.items.level)
                                }
                            }), this.state.foods.map((function(t, a) {
                                return o.a.createElement("div", {
                                    className: p()(y.a.plate, y.a["plate".concat(a + 1)], Z({}, y.a.plateHover, t.stock > 0), Z({}, y.a.plateSelected, e.state.foodSelected === a && t.stock > 0), Z({}, y.a.plateColor4, 4 === t.level), Z({}, y.a.plateColor5, 5 === t.level)),
                                    key: t.name,
                                    style: {
                                        cursor: t.stock > 0 ? "pointer" : "auto"
                                    },
                                    id: "plate".concat(a + 1),
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.selectFood(a)
                                    }
                                }, t.level > 1 ? o.a.createElement("div", {
                                    className: y.a["plateLevel".concat(t.level)]
                                }) : null, t.stock > 0 ? o.a.createElement(P.a, {
                                    name: t.name,
                                    className: y.a.food
                                }) : null, 0 === t.level ? o.a.createElement("div", {
                                    className: y.a.lockedPlate
                                }, o.a.createElement("i", {
                                    className: "fas fa-lock"
                                })) : o.a.createElement("div", {
                                    className: y.a.foodStock
                                }, t.stock))
                            })), this.state.customers.map((function(t, a) {
                                return t && t.blook ? o.a.createElement(T.a, {
                                    blook: t.blook,
                                    place: a,
                                    key: a,
                                    order: t.order,
                                    profit: t.profit,
                                    canClick: -1 !== e.state.foodSelected && Object.entries(t.order).filter((function(e) {
                                        return X(e, 2)[1] > 0
                                    })).map((function(e) {
                                        return e[0]
                                    })).includes(e.state.foods[e.state.foodSelected].name),
                                    onClick: function() {
                                        return e.selectCustomer(a)
                                    },
                                    time: t.time,
                                    onDone: function(t) {
                                        return e.removeCustomer(a, t)
                                    }
                                }) : null
                            })), o.a.createElement("div", {
                                className: this.state.mode ? y.a.restockButtonLive : y.a.restockButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.getQuestion,
                                id: "restock"
                            }, "Restock Food", u.isMobile ? null : o.a.createElement("div", {
                                className: y.a.restockKey
                            }, "Space")), "trash" === this.state.ability ? o.a.createElement(P.a, {
                                name: this.state.attackerBlook,
                                className: y.a.trashBlook
                            }) : null, this.state.mode ? o.a.createElement("div", {
                                className: y.a.restockButtonLive,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.goToShop,
                                id: "upgrade",
                                style: {
                                    backgroundColor: "#ff7b24",
                                    left: "52.5%",
                                    opacity: this.state.canUpgrade ? 1 : .5
                                }
                            }, "Upgrade Shop", this.state.canUpgrade ? o.a.createElement("div", {
                                className: y.a.upgradeIcon
                            }, "!") : null) : null, o.a.createElement("div", {
                                className: y.a.missesContainer
                            }, o.a.createElement("i", {
                                className: p()("fas fa-times", y.a.miss),
                                style: {
                                    opacity: this.state.customersMissed > 0 ? 1 : 0
                                }
                            }), o.a.createElement("i", {
                                className: p()("fas fa-times", y.a.miss),
                                style: {
                                    opacity: this.state.customersMissed > 1 ? 1 : 0
                                }
                            }), o.a.createElement("i", {
                                className: p()("fas fa-times", y.a.miss),
                                style: {
                                    opacity: this.state.customersMissed > 2 ? 1 : 0
                                }
                            }))), "question" === this.state.phase ? o.a.createElement("div", {
                                className: y.a.questionContainer
                            }, o.a.createElement(g.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            })) : "feedback" === this.state.phase ? o.a.createElement("div", {
                                className: y.a.feedbackContainer
                            }, o.a.createElement(w.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, this.state.totalProfit >= 0 ? o.a.createElement("div", {
                                className: p()(m.a.modal, y.a.modalFadeIn)
                            }, o.a.createElement("div", {
                                className: y.a.reportContainer
                            }, o.a.createElement("div", {
                                className: y.a.reportHeader
                            }, "Day ".concat(this.state.day)), this.state.reportArray.map((function(e, t) {
                                return o.a.createElement("div", {
                                    className: y.a.reportRow,
                                    key: e.name,
                                    style: {
                                        backgroundColor: t % 2 == 0 ? "#e6e6e6" : "#f2f2f2",
                                        borderTopLeftRadius: 0 === t ? 5 : 0,
                                        borderTopRightRadius: 0 === t ? 5 : 0
                                    }
                                }, o.a.createElement(P.a, {
                                    name: e.name,
                                    className: y.a.reportFood
                                }), o.a.createElement("i", {
                                    className: p()("fas fa-times", y.a.reportTimes)
                                }), o.a.createElement("div", {
                                    className: y.a.reportAmount
                                }, "".concat(e.amount, " sold")), o.a.createElement("div", {
                                    className: y.a.reportProfit
                                }, "$".concat(Object(A.s)(e.profit))))
                            })), o.a.createElement("div", {
                                style: {
                                    backgroundColor: "#c43a35",
                                    width: "90%",
                                    height: 3
                                }
                            }), o.a.createElement("div", {
                                className: y.a.reportRow,
                                style: {
                                    backgroundColor: this.state.reportArray.length % 2 == 0 ? "#e6e6e6" : "#f2f2f2",
                                    borderBottomLeftRadius: 5,
                                    borderBottomRightRadius: 5
                                }
                            }, o.a.createElement("div", {
                                className: y.a.reportAmount
                            }, "Total Profit:"), o.a.createElement("div", {
                                className: y.a.reportProfit
                            }, "+ $".concat(Object(A.l)(this.state.totalProfit)))), o.a.createElement("div", {
                                className: y.a.reportShopButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.goToShop
                            }, "To Upgrade Shop"), o.a.createElement("div", {
                                style: {
                                    height: 30
                                }
                            })), o.a.createElement("div", {
                                style: {
                                    height: 50
                                }
                            })) : null, this.state.askTour ? o.a.createElement(C.a, {
                                text: "Would you like a quick tutorial?",
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return e.answerTour(!0)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.answerTour(!1)
                                    },
                                    color: "blue"
                                }
                            }) : this.state.goal && !this.state.showTour ? o.a.createElement(C.a, {
                                text: this.state.mode ? "Time" === this.state.mode ? "Make as much money as you can in ".concat(this.state.goal, " ").concat(1 === parseInt(this.state.goal, 10) ? "minute" : "minutes", "!") : "Be the first to make $".concat(Object(A.l)(this.state.goal), "!") : "Your goal for this homework is to keep your Café open for ".concat(this.state.goal, " ").concat(1 === this.state.goal ? "Day" : "Days", "!"),
                                buttonOne: {
                                    text: "Cool",
                                    click: function() {
                                        return e.setState({
                                            goal: 0
                                        }, (function() {
                                            return e.answerTour(!1)
                                        }))
                                    },
                                    color: "blue"
                                }
                            }) : "pay" === this.state.ability || "tax" === this.state.ability ? o.a.createElement(C.a, {
                                text: "pay" === this.state.ability ? "".concat(this.state.attackerName, " just gave you a $").concat(Object(A.l)(this.state.cashChange), " paycheck bonus!") : "".concat(this.state.attackerName, " just forced you to pay $").concat(Object(A.l)(this.state.cashChange), " in taxes."),
                                blook: this.state.attackerBlook,
                                buttonOne: {
                                    text: "OK",
                                    click: function() {
                                        return e.setState({
                                            ability: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null, "inspect" === this.state.ability ? o.a.createElement(L.a, {
                                name: this.state.attackerName,
                                blook: this.state.attackerBlook
                            }) : null, this.state.gameOver ? o.a.createElement("div", {
                                className: p()(m.a.modal, y.a.modalFadeIn)
                            }, o.a.createElement("div", {
                                className: y.a.gameOverContainer
                            }, o.a.createElement("div", {
                                className: y.a.gameOverText
                            }, "Game Over"), o.a.createElement("div", {
                                className: y.a.gameOverTextSmall
                            }, "You failed to serve 3 customers today"))) : null);
                            window.location.href = "".concat("https://id.blooket.com", "/login")
                        }
                    }]) && te(t.prototype, a), r && te(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            he.propTypes = {
                client: c.a.object,
                cafe: c.a.object,
                history: c.a.object.isRequired,
                endCafeDay: c.a.func.isRequired,
                endCafeLive: c.a.func.isRequired,
                setStanding: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object,
                user: c.a.object
            };
            t.a = Object(q.c)(Object(l.f)(Object(n.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    cafe: e.cafes.cafe
                }
            }), (function(e) {
                return Object(s.b)({
                    endCafeDay: O,
                    endCafeLive: j,
                    setStanding: E.b,
                    deleteClient: N.a
                }, e)
            }))(Object(R.d)(he))))
        },
        "mG+w": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__cafeBackground___2oH12-camelCase{background-color:#fff;background-image:linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0),linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);background-size:50px 50px}", ""]), t.locals = {
                cafeBackground: "styles__cafeBackground___2oH12-camelCase"
            }
        },
        rUkA: function(e, t, a) {
            var r = a("mG+w");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        yYYV: function(e, t, a) {
            "use strict";
            var r = a("q1tI"),
                o = a.n(r),
                s = a("ANjH"),
                n = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("4HzQ"),
                f = a("1F66"),
                p = a.n(f),
                h = a("+3eq"),
                d = a("TSYQ"),
                m = a.n(d),
                _ = a("wd/R"),
                y = a.n(_),
                v = (a("RiPy"), a("FKJl")),
                b = a("+xn+"),
                g = a("HbJ1"),
                w = a("VgyX"),
                C = a("kQZX"),
                x = a("qFIf"),
                k = a("XTAU"),
                S = a("Xst1"),
                O = a.n(S),
                j = a("hpat"),
                E = a.n(j),
                N = a("bYay"),
                T = a("0oXL"),
                I = a("ca/f"),
                L = a("74sb"),
                P = a("FzPT"),
                B = a("5BnW");

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(a), !0).forEach((function(t) {
                        G(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : R(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function G(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return U(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || M(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var r, o, s = [],
                        n = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(n = (r = a.next()).done) && (s.push(r.value), !t || s.length !== t); n = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return s
                }(e, t) || M(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                if (e) {
                    if ("string" == typeof e) return U(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? U(e, t) : void 0
                }
            }

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                return r
            }

            function z(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var r = t[a];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function F(e, t) {
                return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, r = X(e);
                    if (t) {
                        var o = X(this).constructor;
                        a = Reflect.construct(r, arguments, o)
                    } else a = r.apply(this, arguments);
                    return Y(this, a)
                }
            }

            function Y(e, t) {
                if (t && ("object" === A(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(e)
            }

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function X(e) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var K = function(e) {
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
                }(n, e);
                var t, a, r, s = J(n);

                function n(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), (t = s.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalCash: 0,
                        muted: !!e.host && e.host.muted,
                        userToBlock: ""
                    }, t.ok = !1, t.alertContainer = o.a.createRef(), t.getClients = t.getClients.bind(Q(t)), t.changeMuted = t.changeMuted.bind(Q(t)), t.goNext = t.goNext.bind(Q(t)), t.addAlert = t.addAlert.bind(Q(t)), t.scrollToBottom = t.scrollToBottom.bind(Q(t)), t.blockUser = t.blockUser.bind(Q(t)), t.audio = new Audio(P.a), t.audio.muted = t.state.muted, t
                }
                return t = n, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) {
                            if (this.audio.volume = .6, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                    e.audio.currentTime = 0, e.audio.play()
                                }), !1), this.props.liveGameController.setStage({
                                    stage: "cafe"
                                }), this.getClients(!1), "Time" === this.props.host.settings.mode) {
                                var t = 60 * this.props.host.settings.amount,
                                    a = 4;
                                this.setState({
                                    timer: y.a.duration(t, "seconds").format("mm:ss")
                                }), this.timerInterval = setInterval((function() {
                                    t -= 1, e.setState({
                                        timer: y.a.duration(t, "seconds").format("mm:ss")
                                    }), t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === a ? (e.getClients(!1), a = 4) : a -= 1
                                }), 1e3)
                            } else this.clientsInterval = setInterval((function() {
                                e.getClients(!1)
                            }), 4e3);
                            this.alertContainer = document.querySelector("#alerts")
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearInterval(this.timerInterval), clearInterval(this.clientsInterval), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.liveGameController.getDatabaseVal("c", (function(a) {
                            var r = a || {};
                            if (r && 0 !== Object.keys(r).length) {
                                var o = !1,
                                    s = [];
                                Object.entries(r).forEach((function(e) {
                                    var a = D(e, 2),
                                        r = a[0],
                                        o = a[1];
                                    if (s.push({
                                            name: r,
                                            blook: o.b,
                                            cash: o.ca || 0,
                                            toAttack: o.tat
                                        }), o.up) {
                                        var n = o.up.split(":");
                                        2 === n.length && t.addAlert(r, o.b, "upgraded ".concat(n[0], " to Level ").concat(n[1]), n[0])
                                    }
                                }));
                                var n = s.map((function(e) {
                                    return e.name
                                }));
                                s.forEach((function(e) {
                                    if (e.toAttack) {
                                        var a = e.toAttack.split(":"),
                                            r = n.indexOf(a[0]);
                                        if (-1 === r) return;
                                        var o = s[r];
                                        if (a.length < 2) return;
                                        t.props.liveGameController.setVal({
                                            path: "c/".concat(o.name, "/at"),
                                            val: "".concat(e.name, ":").concat(e.blook, ":").concat(a[1])
                                        }), t.props.liveGameController.removeVal("c/".concat(e.name, "/tat"))
                                    }
                                })), s.sort((function(e, t) {
                                    return t.cash - e.cash
                                }));
                                for (var i = 0, c = 0; c < s.length; c++) s[c].place = c + 1, i += s[c].cash, "Cash" === t.props.host.settings.mode && s[c].cash >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext([].concat(s)) : t.setState({
                                    players: s,
                                    totalCash: i
                                })
                            }
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var e = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var a = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                c: e.cash,
                                p: e.place
                            }
                        }));
                        this.props.liveGameController.setVal({
                            path: "st",
                            val: a
                        }, (function() {
                            t.props.liveGameController.setStage({
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/cafe/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, a, r) {
                        var o = [].concat(H(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: a,
                                endBlook: r
                            }]),
                            s = Array.from(new Set(o.map((function(e) {
                                return "".concat(e.name, " ").concat(e.msg)
                            })))).map((function(e) {
                                return o.find((function(t) {
                                    return "".concat(t.name, " ").concat(t.msg) === e
                                }))
                            }));
                        s.length > 15 && s.splice(0, 1), this.setState({
                            alerts: s
                        }, this.scrollToBottom)
                    }
                }, {
                    key: "scrollToBottom",
                    value: function() {
                        this.alertContainer.scrollTop = this.alertContainer.scrollHeight
                    }
                }, {
                    key: "blockUser",
                    value: function() {
                        var e = this.state.userToBlock,
                            t = JSON.parse(JSON.stringify(this.state.players)),
                            a = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            r = t.length; - 1 !== a && (r = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return q(q({}, e), {}, {
                                place: e.place > r ? e.place - 1 : e.place
                            })
                        })), this.setState({
                            players: t,
                            userToBlock: ""
                        }), this.props.liveGameController.blockUser(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.host && this.props.host.settings ? o.a.createElement("div", {
                            className: O.a.body,
                            style: {
                                overflow: "hidden"
                            }
                        }, o.a.createElement(k.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(C.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: $".concat(Object(L.l)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), o.a.createElement("div", {
                            className: O.a.hostRegularBody
                        }, o.a.createElement(N.a, {
                            level: 2
                        }), o.a.createElement(p.a, {
                            data: this.state.players,
                            keyAccessor: function(e) {
                                return e.name
                            },
                            start: function(e) {
                                return {
                                    x: -60,
                                    y: 11 * (e.place - 1)
                                }
                            },
                            enter: function(e) {
                                return {
                                    x: [0],
                                    y: [11 * (e.place - 1)],
                                    timing: {
                                        duration: 1e3,
                                        ease: h.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [11 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: h.a
                                    }
                                }
                            },
                            leave: function() {
                                return {
                                    x: [-60],
                                    timing: 1e3
                                }
                            }
                        }, (function(t) {
                            return o.a.createElement("div", {
                                className: m()(E.a.left, E.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    r = t.data,
                                    s = t.state,
                                    n = s.x,
                                    i = s.y;
                                return o.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === r.name ? .4 : null,
                                        transform: "translate(".concat(n, "vw, ").concat(i, "vh)")
                                    },
                                    className: E.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: r.name
                                        })
                                    }
                                }, o.a.createElement(u.Textfit, {
                                    className: E.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(L.v)("5vw")
                                }, r.place), o.a.createElement("div", {
                                    className: E.a.superPlaceText
                                }, Object(L.e)(r.place)), o.a.createElement(T.a, {
                                    name: r.blook,
                                    className: E.a.blookBox
                                }), o.a.createElement(u.Textfit, {
                                    className: E.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(L.v)("4vw")
                                }, r.name), o.a.createElement(u.Textfit, {
                                    className: E.a.cashText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(L.v)("5vw")
                                }, "$".concat(Object(L.s)(r.cash))))
                            })))
                        })), o.a.createElement("div", {
                            className: E.a.chatroom
                        }, o.a.createElement("div", {
                            className: m()(E.a.chatroomInside, E.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(e, t) {
                            return o.a.createElement(x.a, {
                                key: t,
                                name: e.name,
                                blook: e.blook,
                                message: e.msg,
                                endBlook: e.endBlook,
                                glitchInfo: e.glitchInfo,
                                isWhite: !0
                            })
                        })) : o.a.createElement("div", {
                            className: E.a.noAlerts
                        }, o.a.createElement("i", {
                            className: m()(E.a.noAlertsIcon, "far fa-clock")
                        }), o.a.createElement("div", {
                            className: E.a.noAlertsText
                        }, "Waiting For Action...")))), o.a.createElement(u.Textfit, {
                            className: E.a.totalCashText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(L.v)("7vw")
                        }, "$".concat(Object(L.l)(this.state.totalCash)))), this.state.userToBlock ? o.a.createElement(I.a, {
                            text: "Remove ".concat(this.state.userToBlock, " from the game?"),
                            buttonOne: {
                                text: "Yes",
                                click: this.blockUser,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        userToBlock: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : (Object(v.b)("HostCafePage cannot render without this.props.host"), void(window.location.href = "".concat("https://dashboard.blooket.com", "/")))
                    }
                }]) && z(t.prototype, a), r && z(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), n
            }(o.a.Component);
            K.propTypes = {
                host: c.a.object,
                liveGameController: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(n.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(s.b)({
                    updateStandings: b.b,
                    setMuted: g.a,
                    deleteHost: w.d
                }, e)
            }))(Object(B.d)(K)))
        }
    }
]);