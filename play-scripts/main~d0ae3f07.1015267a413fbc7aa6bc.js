(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        "+GaT": function(e, a, t) {
            var s = t("v9+r");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "+MJO": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("+GaT"),
                c = t.n(_),
                m = t("0oXL"),
                p = function(e) {
                    var a = e.top,
                        t = e.left,
                        s = e.blook,
                        r = e.msg,
                        l = e.onClick,
                        n = e.night,
                        _ = e.hazard;
                    return o.a.createElement("div", {
                        className: c.a.container,
                        style: {
                            top: a,
                            left: t,
                            backgroundColor: n ? "#000" : _[0] ? _[1] : null,
                            color: n ? "#fff" : null
                        },
                        role: "button",
                        tabIndex: 0,
                        onClick: l
                    }, o.a.createElement("i", {
                        className: i()(c.a.close, "fas fa-times")
                    }), o.a.createElement(m.a, {
                        name: s,
                        className: c.a.blook
                    }), o.a.createElement("div", {
                        className: c.a.msg
                    }, r))
                };
            p.propTypes = {
                top: l.a.string,
                left: l.a.string,
                blook: l.a.string,
                msg: l.a.string,
                onClick: l.a.func,
                night: l.a.bool,
                hazard: l.a.array
            };
            var d = p,
                u = function(e) {
                    var a = e.ads,
                        t = e.onClick,
                        s = e.night,
                        r = e.hazards;
                    return o.a.createElement("div", null, a[0] ? o.a.createElement(d, {
                        top: "30%",
                        left: "20%",
                        onClick: function() {
                            return t(0)
                        },
                        blook: "Chicken",
                        msg: "$0.99 Scrambled Eggs",
                        night: s,
                        hazard: [r[0], r[1]]
                    }) : null, a[1] ? o.a.createElement(d, {
                        top: "60%",
                        left: "80%",
                        onClick: function() {
                            return t(1)
                        },
                        blook: "Cow",
                        msg: "50% Off Soy Milk",
                        night: s,
                        hazard: [r[0], r[2]]
                    }) : null, a[2] ? o.a.createElement(d, {
                        top: "30%",
                        left: "80%",
                        onClick: function() {
                            return t(2)
                        },
                        blook: "Goat",
                        msg: "Red Goat Gives You Wings",
                        night: s,
                        hazard: [r[0], r[3]]
                    }) : null, a[3] ? o.a.createElement(d, {
                        top: "80%",
                        left: "50%",
                        onClick: function() {
                            return t(3)
                        },
                        blook: "Duck",
                        msg: "QUACK AH DOODLE DO",
                        night: s,
                        hazard: [r[0], r[4]]
                    }) : null, a[4] ? o.a.createElement(d, {
                        top: "25%",
                        left: "40%",
                        onClick: function() {
                            return t(4)
                        },
                        blook: "Baby Penguin",
                        msg: "$89 Hanglider Rides",
                        night: s,
                        hazard: [r[0], r[5]]
                    }) : null, a[5] ? o.a.createElement(d, {
                        top: "50%",
                        left: "50%",
                        onClick: function() {
                            return t(5)
                        },
                        blook: "Toucan",
                        msg: "Toucan Play At This Game",
                        night: s,
                        hazard: [r[0], r[1]]
                    }) : null, a[6] ? o.a.createElement(d, {
                        top: "60%",
                        left: "20%",
                        onClick: function() {
                            return t(6)
                        },
                        blook: "Owl",
                        msg: "Mixtape Dropping Next Week",
                        night: s,
                        hazard: [r[0], r[2]]
                    }) : null, a[7] ? o.a.createElement(d, {
                        top: "80%",
                        left: "80%",
                        onClick: function() {
                            return t(7)
                        },
                        blook: "Dragon",
                        msg: "Marty's Fireplace SALE",
                        night: s,
                        hazard: [r[0], r[3]]
                    }) : null, a[8] ? o.a.createElement(d, {
                        top: "40%",
                        left: "40%",
                        onClick: function() {
                            return t(8)
                        },
                        blook: "Rabbit",
                        msg: "$799 - Max Hops Series 9",
                        night: s,
                        hazard: [r[0], r[4]]
                    }) : null, a[9] ? o.a.createElement(d, {
                        top: "80%",
                        left: "20%",
                        onClick: function() {
                            return t(9)
                        },
                        blook: "Witch",
                        msg: "Spells & Potions Galore",
                        night: s,
                        hazard: [r[0], r[5]]
                    }) : null)
                };
            u.propTypes = {
                ads: l.a.array,
                onClick: l.a.func,
                night: l.a.bool,
                hazards: l.a.array
            };
            a.a = u
        },
        "//Pr": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__glitch1___3XigL-camelCase{font-size:18vw;color:#f0f;text-shadow:2px 2px 8px #f0f;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:30vh;left:25vw;transform:translate(-50%,-50%) rotate(-20deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;animation:styles__glitchFade___2XP-u-camelCase 3s linear}.styles__glitch2___2Xsz3-camelCase{color:#f60;text-shadow:2px 2px 8px #f60;top:60vh;left:60vw;transform:translate(-50%,-50%) rotate(20deg);animation:styles__glitchFade___2XP-u-camelCase 3s linear .5s}.styles__glitch2___2Xsz3-camelCase,.styles__glitch3___1LtkF-camelCase{font-size:10vw;font-family:Nunito,sans-serif;font-weight:700;position:absolute;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__glitch3___1LtkF-camelCase{color:#ff0;text-shadow:2px 2px 8px #ff0;top:25vh;left:75vw;transform:translate(-50%,-50%) rotate(5deg);animation:styles__glitchFade___2XP-u-camelCase 3s linear 1s}.styles__glitch4___2DAcM-camelCase{font-size:8vw;color:#0ff;text-shadow:2px 2px 8px #0ff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:70vh;left:35vw;transform:translate(-50%,-50%) rotate(10deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;animation:styles__glitchFade___2XP-u-camelCase 3s linear 1.5s}.styles__glitch5___3-i36-camelCase{font-size:12vw;color:red;text-shadow:2px 2px 8px red;top:50vh;transform:translate(-50%,-50%) rotate(-5deg);animation:styles__glitchFade___2XP-u-camelCase 3s linear 2s}.styles__glitch5___3-i36-camelCase,.styles__glitch6___dzy0O-camelCase{font-family:Nunito,sans-serif;font-weight:700;position:absolute;left:50vw;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__glitch6___dzy0O-camelCase{font-size:7.5vw;color:#0f0;text-shadow:2px 2px 8px #0f0;top:90vh;transform:translate(-50%,-50%);animation:styles__glitchFade___2XP-u-camelCase 4s linear 2.5s}.styles__glitch7___3bJjt-camelCase{font-size:8vw;color:#f0f;text-shadow:2px 2px 8px #f0f;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:25vh;left:50vw;transform:translate(-50%,-50%) rotate(5deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;animation:styles__glitchFade___2XP-u-camelCase 3s linear 4s}.styles__glitch8___YPf3L-camelCase{color:#ff0;text-shadow:2px 2px 8px #ff0;top:70vh;left:45vw;transform:translate(-50%,-50%) rotate(-10deg);animation:styles__glitchFade___2XP-u-camelCase 3s linear 5s}.styles__glitch8___YPf3L-camelCase,.styles__glitch9___36VfB-camelCase{font-size:12vw;font-family:Nunito,sans-serif;font-weight:700;position:absolute;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__glitch9___36VfB-camelCase{color:red;text-shadow:2px 2px 8px red;top:50vh;left:50vw;transform:translate(-50%,-50%);animation:styles__glitchFade___2XP-u-camelCase 3s linear 5.5s}.styles__glitch10___-FqMz-camelCase{font-size:7vw;color:#9d00ff;text-shadow:2px 2px 8px #9d00ff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:80vh;left:75vw;transform:translate(-50%,-50%) rotate(-10deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;animation:styles__glitchFade___2XP-u-camelCase 1s linear 6s}@keyframes styles__glitchFade___2XP-u-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}", ""]), a.locals = {
                glitch1: "styles__glitch1___3XigL-camelCase",
                glitchFade: "styles__glitchFade___2XP-u-camelCase",
                glitch2: "styles__glitch2___2Xsz3-camelCase",
                glitch3: "styles__glitch3___1LtkF-camelCase",
                glitch4: "styles__glitch4___2DAcM-camelCase",
                glitch5: "styles__glitch5___3-i36-camelCase",
                glitch6: "styles__glitch6___dzy0O-camelCase",
                glitch7: "styles__glitch7___3bJjt-camelCase",
                glitch8: "styles__glitch8___YPf3L-camelCase",
                glitch9: "styles__glitch9___36VfB-camelCase",
                glitch10: "styles__glitch10___-FqMz-camelCase"
            }
        },
        0: function(e, a, t) {
            t("55Il"), e.exports = t("tjUo")
        },
        "09G1": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__background1___2XMIo-camelCase{background-color:#f7f7f7}.styles__background2___AucNm-camelCase{background-color:#fff;background-image:linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0),linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);background-size:50px 50px}.styles__background3___2HcT0-camelCase{background-color:#e9d4b9;background-image:repeating-linear-gradient(45deg,transparent 5px,rgba(11,36,45,.5) 0,rgba(11,36,45,.5) 10px,hsla(5,53%,63%,0) 0,hsla(5,53%,63%,0) 35px,hsla(5,53%,63%,.5) 0,hsla(5,53%,63%,.5) 40px,rgba(11,36,45,.5) 0,rgba(11,36,45,.5) 50px,rgba(11,36,45,0) 0,rgba(11,36,45,0) 60px,hsla(5,53%,63%,.5) 0,hsla(5,53%,63%,.5) 70px,rgba(247,179,85,.5) 0,rgba(247,179,85,.5) 80px,rgba(247,179,85,0) 0,rgba(247,179,85,0) 90px,hsla(5,53%,63%,.5) 0,hsla(5,53%,63%,.5) 110px,hsla(5,53%,63%,0) 0,hsla(5,53%,63%,0) 120px,rgba(11,36,45,.5) 0,rgba(11,36,45,.5) 140px),repeating-linear-gradient(135deg,transparent 5px,rgba(11,36,45,.5) 0,rgba(11,36,45,.5) 10px,hsla(5,53%,63%,0) 0,hsla(5,53%,63%,0) 35px,hsla(5,53%,63%,.5) 0,hsla(5,53%,63%,.5) 40px,rgba(11,36,45,.5) 0,rgba(11,36,45,.5) 50px,rgba(11,36,45,0) 0,rgba(11,36,45,0) 60px,hsla(5,53%,63%,.5) 0,hsla(5,53%,63%,.5) 70px,rgba(247,179,85,.5) 0,rgba(247,179,85,.5) 80px,rgba(247,179,85,0) 0,rgba(247,179,85,0) 90px,hsla(5,53%,63%,.5) 0,hsla(5,53%,63%,.5) 110px,hsla(5,53%,63%,0) 0,hsla(5,53%,63%,0) 140px,rgba(11,36,45,.5) 0,rgba(11,36,45,.5) 160px)}.styles__background4___1IG4e-camelCase{background-image:radial-gradient(closest-side,transparent 0,transparent 75%,#b6cc66 76%,#b6cc66 85%,#edffdb 86%,#edffdb 94%,#fff 95%,#fff 103%,#d9e6a7 104%,#d9e6a7 112%,#798b3c 113%,#798b3c 121%,#fff 122%,#fff 130%,#e0ead7 131%,#e0ead7 140%),radial-gradient(closest-side,transparent 0,transparent 75%,#b6cc66 76%,#b6cc66 85%,#edffdb 86%,#edffdb 94%,#fff 95%,#fff 103%,#d9e6a7 104%,#d9e6a7 112%,#798b3c 113%,#798b3c 121%,#fff 122%,#fff 130%,#e0ead7 131%,#e0ead7 140%);background-size:110px 110px;background-color:#c8d3a7;background-position:0 0,55px 55px}.styles__background5___2wT7G-camelCase{background:radial-gradient(circle at 50%,at 59%,#d2caab 0,#364e27 4%,#364e27 11%,rgba(54,78,39,0) 12%,rgba(54,78,39,0)) 50px 0,radial-gradient(circle at 50%,at 41%,#364e27 0,#d2caab 4%,#d2caab 11%,rgba(210,202,171,0) 12%,rgba(210,202,171,0)) 50px 0,radial-gradient(circle at 50%,at 59%,#d2caab 0,#364e27 4%,#364e27 11%,rgba(54,78,39,0) 12%,rgba(54,78,39,0)) 0 50px,radial-gradient(circle at 50%,at 41%,#364e27 0,#d2caab 4%,#d2caab 11%,rgba(210,202,171,0) 12%,rgba(210,202,171,0)) 0 50px,radial-gradient(circle at 100%,at 50%,#d2caab 0,rgba(210,202,171,0) 17%),radial-gradient(circle at 0,at 50%,#364e27 0,rgba(54,78,39,0) 17%),radial-gradient(circle at 100%,at 50%,#d2caab 0,rgba(210,202,171,0) 17%) 50px 50px,radial-gradient(circle at 0,at 50%,#364e27 0,rgba(54,78,39,0) 17%) 50px 50px;background:radial-gradient(circle at 50% 59%,#d2caab 3%,#364e27 4%,#364e27 11%,rgba(54,78,39,0) 12%,rgba(54,78,39,0)) 50px 0,radial-gradient(circle at 50% 41%,#364e27 3%,#d2caab 4%,#d2caab 11%,rgba(210,202,171,0) 12%,rgba(210,202,171,0)) 50px 0,radial-gradient(circle at 50% 59%,#d2caab 3%,#364e27 4%,#364e27 11%,rgba(54,78,39,0) 12%,rgba(54,78,39,0)) 0 50px,radial-gradient(circle at 50% 41%,#364e27 3%,#d2caab 4%,#d2caab 11%,rgba(210,202,171,0) 12%,rgba(210,202,171,0)) 0 50px,radial-gradient(circle at 100% 50%,#d2caab 16%,rgba(210,202,171,0) 17%),radial-gradient(circle at 0 50%,#364e27 16%,rgba(54,78,39,0) 17%),radial-gradient(circle at 100% 50%,#d2caab 16%,rgba(210,202,171,0) 17%) 50px 50px,radial-gradient(circle at 0 50%,#364e27 16%,rgba(54,78,39,0) 17%) 50px 50px;background-color:#63773f;background-size:100px 100px}", ""]), a.locals = {
                background1: "styles__background1___2XMIo-camelCase",
                background2: "styles__background2___AucNm-camelCase",
                background3: "styles__background3___2HcT0-camelCase",
                background4: "styles__background4___1IG4e-camelCase",
                background5: "styles__background5___2wT7G-camelCase"
            }
        },
        "0oXL": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("MDrD"),
                c = t("AwEm"),
                m = t("rPUr"),
                p = t.n(m),
                d = t("ZbWA");

            function u(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, a) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var s, o, r = [],
                        l = !0,
                        n = !1;
                    try {
                        for (t = t.call(e); !(l = (s = t.next()).done) && (r.push(s.value), !a || r.length !== a); l = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                }(e, a) || function(e, a) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(e, a)
                }(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
                return s
            }
            var h = [
                    ["#3f1c12", "#592a1e"],
                    ["#fff0a3", "#fff5cc"],
                    ["#ce1f3d", "#e24466"],
                    ["#141319", "#252330"],
                    ["#cc488a", "#e065a9"],
                    ["#a6cf54", "#bbe25d"],
                    ["#4cc8f4", "#7ddff9"],
                    ["#8c68a2", "#a185b5"],
                    ["#b16a28", "#cd8029"]
                ],
                y = function(e) {
                    var a = e.code,
                        t = e.className,
                        s = e.blookClassName,
                        r = e.style,
                        l = e.tip,
                        n = a.split("#");
                    if (! function(e) {
                            var a = e.split("#");
                            if (11 !== a.length) return !1;
                            if (!d.a.base[a[0]]) return !1;
                            if (!d.a.clothing[a[1]]) return !1;
                            if (!d.a.eyes[a[2]]) return !1;
                            if (!d.a.glasses[a[3]]) return !1;
                            var t = a[4].split("$");
                            if (2 !== t.length) return !1;
                            if (!d.a.hair[t[0]]) return !1;
                            if (!h[t[1]]) return !1;
                            if (!d.a.hat[a[5]]) return !1;
                            if (!d.a.item[a[6]]) return !1;
                            if (!d.a.mouth[a[7]]) return !1;
                            if (!d.a.nose[a[8]]) return !1;
                            if (!d.a.cheeks[a[9]]) return !1;
                            var s = a[10].split("$");
                            return 2 === s.length && (!!d.a.eyebrows[s[0]] && !!h[s[1]])
                        }(a)) return o.a.createElement("div", {
                        className: i()(p.a.blookContainer, t),
                        style: r,
                        "data-tip": l || null
                    }, o.a.createElement("img", {
                        src: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
                        alt: "Blook",
                        draggable: !1,
                        className: i()(p.a.blook, s)
                    }));
                    var _ = d.a.base[n[0]],
                        m = _.tones,
                        f = d.a.eyes[n[2]],
                        y = n[4].split("$"),
                        g = d.a.hair[y[0]],
                        b = h[y[1]][0],
                        v = h[y[1]][1],
                        x = d.a.nose[n[8]],
                        C = d.a.cheeks[n[9]],
                        w = n[10].split("$"),
                        k = d.a.eyebrows[w[0]],
                        T = h[w[1]][0];
                    return o.a.createElement("div", {
                        className: i()(p.a.blookContainer, t),
                        style: r,
                        "data-tip": l || null
                    }, o.a.createElement("img", {
                        src: _.url,
                        alt: "Custom Blook",
                        draggable: !1,
                        className: i()(p.a.blook, s)
                    }), g.url ? o.a.createElement(c.a, {
                        src: g.url,
                        title: "Blook Hair",
                        className: p.a.part,
                        preProcessor: function(e) {
                            var a = e;
                            return g.changes && Object.entries(g.changes).forEach((function(e) {
                                var t = u(e, 2),
                                    s = t[0],
                                    o = t[1];
                                a = a.replaceAll(s, m[o])
                            })), a = a.replaceAll("#3f1c12", b), g.hasHighlight && (a = a.replaceAll("#592a1e", v)), a
                        }
                    }) : null, o.a.createElement("img", {
                        src: d.a.mouth[n[7]].url,
                        alt: "Blook Mouth",
                        draggable: !1,
                        className: p.a.part
                    }), x.url ? o.a.createElement(c.a, {
                        src: x.url,
                        title: "Blook Nose",
                        className: p.a.part,
                        preProcessor: function(e) {
                            var a = e;
                            return x.changes && Object.entries(x.changes).forEach((function(e) {
                                var t = u(e, 2),
                                    s = t[0],
                                    o = t[1];
                                a = a.replaceAll(s, m[o])
                            })), a
                        }
                    }) : null, C.url ? o.a.createElement(c.a, {
                        src: C.url,
                        title: "Blook Cheeks",
                        className: p.a.part,
                        preProcessor: function(e) {
                            var a = e;
                            return C.changes && Object.entries(C.changes).forEach((function(e) {
                                var t = u(e, 2),
                                    s = t[0],
                                    o = t[1];
                                a = a.replaceAll(s, m[o])
                            })), a
                        }
                    }) : null, o.a.createElement(c.a, {
                        src: f.url,
                        title: "Blook Eyes",
                        className: p.a.part,
                        preProcessor: function(e) {
                            var a = e;
                            return f.changes && Object.entries(f.changes).forEach((function(e) {
                                var t = u(e, 2),
                                    s = t[0],
                                    o = t[1];
                                a = a.replaceAll(s, m[o])
                            })), a
                        }
                    }), k.url ? o.a.createElement(c.a, {
                        src: k.url,
                        title: "Blook Eyebrows",
                        className: p.a.part,
                        preProcessor: function(e) {
                            var a = e;
                            return a = a.replaceAll("#3f1c12", T)
                        }
                    }) : null, d.a.clothing[n[1]].url ? o.a.createElement("img", {
                        src: d.a.clothing[n[1]].url,
                        alt: "Blook Clothing",
                        draggable: !1,
                        className: p.a.part
                    }) : null, d.a.glasses[n[3]].url ? o.a.createElement("img", {
                        src: d.a.glasses[n[3]].url,
                        alt: "Blook Glasses",
                        draggable: !1,
                        className: p.a.part
                    }) : null, d.a.hat[n[5]].url ? o.a.createElement("img", {
                        src: d.a.hat[n[5]].url,
                        alt: "Blook Hat",
                        draggable: !1,
                        className: p.a.part
                    }) : null, d.a.item[n[6]].url ? o.a.createElement("img", {
                        src: d.a.item[n[6]].url,
                        alt: "Blook Item",
                        draggable: !1,
                        className: p.a.part
                    }) : null)
                };
            y.propTypes = {
                code: l.a.string,
                className: l.a.string,
                blookClassName: l.a.string,
                style: l.a.object,
                tip: l.a.string
            };
            var g = y,
                b = t("mXOY"),
                v = t.n(b);
            t("LHn/");
            var x = function(e) {
                var a, t, s, r = e.name,
                    l = e.className,
                    n = e.blookClassName,
                    c = e.style,
                    m = e.tip;
                return r && ("string" == typeof r || r instanceof String) && r.includes("#") ? o.a.createElement(g, {
                    code: r,
                    className: l,
                    blookClassName: n,
                    style: c,
                    tip: m
                }) : o.a.createElement("div", {
                    className: i()(v.a.blookContainer, l),
                    style: c,
                    "data-tip": m || null
                }, "Rainbow Astronaut" === r ? o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                    src: _.a["Pink Astronaut"].url,
                    alt: "Pink Astronaut Blook",
                    draggable: !1,
                    className: i()(v.a.blook, n)
                }), o.a.createElement("img", {
                    src: _.a["Purple Astronaut"].url,
                    alt: "Purple Astronaut Blook",
                    draggable: !1,
                    className: i()(v.a.blook, v.a.astro6, n)
                }), o.a.createElement("img", {
                    src: _.a["Blue Astronaut"].url,
                    alt: "Blue Astronaut Blook",
                    draggable: !1,
                    className: i()(v.a.blook, v.a.astro5, n)
                }), o.a.createElement("img", {
                    src: _.a["Green Astronaut"].url,
                    alt: "Green Astronaut Blook",
                    draggable: !1,
                    className: i()(v.a.blook, v.a.astro4, n)
                }), o.a.createElement("img", {
                    src: _.a["Yellow Astronaut"].url,
                    alt: "Yellow Astronaut Blook",
                    draggable: !1,
                    className: i()(v.a.blook, v.a.astro3, n)
                }), o.a.createElement("img", {
                    src: _.a["Orange Astronaut"].url,
                    alt: "Orange Astronaut Blook",
                    draggable: !1,
                    className: i()(v.a.blook, v.a.astro2, n)
                }), o.a.createElement("img", {
                    src: _.a["Red Astronaut"].url,
                    alt: "Red Astronaut Blook",
                    draggable: !1,
                    className: i()(v.a.blook, v.a.astro1, n)
                })) : o.a.createElement("img", {
                    src: _.a[r] ? _.a[r].url : null,
                    alt: "".concat(r, " Blook"),
                    draggable: !1,
                    className: i()(v.a.blook, n, (a = {}, t = v.a.spookyGhost, s = "Spooky Ghost" === r, t in a ? Object.defineProperty(a, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : a[t] = s, a))
                }), null, "Tim the Alien" === r ? o.a.createElement("img", {
                    src: _.a.Cow.url,
                    alt: "Cow Blook",
                    draggable: !1,
                    className: v.a.timsCow
                }) : "Phantom King" === r ? o.a.createElement("img", {
                    src: "https://media.blooket.com/image/upload/v1593095358/Media/defense/phantomSword.svg",
                    alt: "Phantom Sword",
                    draggable: !1,
                    className: v.a.phantomSword
                }) : null)
            };
            x.propTypes = {
                name: l.a.string,
                className: l.a.string,
                blookClassName: l.a.string,
                style: l.a.object,
                tip: l.a.string
            };
            a.a = x
        },
        "1bcp": function(e, a, t) {
            var s = t("wYzb");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "1xYp": function(e, a, t) {
            var s = t("Ce2M");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "2Euj": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("1bcp"),
                c = t.n(_),
                m = t("LHn/"),
                p = {
                    backgroundImage: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.2)), url(".concat(m.a.dino.paperTexture, ")")
                },
                d = function(e) {
                    var a = e.content,
                        t = e.onClick,
                        s = e.className,
                        r = e.style;
                    return t ? o.a.createElement("div", {
                        className: i()(c.a.wrapper, c.a.button, s),
                        style: r,
                        role: "button",
                        tabIndex: 0,
                        onClick: t
                    }, o.a.createElement("div", {
                        className: c.a.inside
                    }, o.a.createElement("div", {
                        className: c.a.corner1,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner2,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner3,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner4,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.center
                    }, o.a.createElement("div", {
                        className: c.a.corner5,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner6,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner7,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner8,
                        style: p
                    }), a))) : o.a.createElement("div", {
                        className: i()(c.a.wrapper, s),
                        style: r
                    }, o.a.createElement("div", {
                        className: c.a.inside
                    }, o.a.createElement("div", {
                        className: c.a.corner1,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner2,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner3,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner4,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.center
                    }, o.a.createElement("div", {
                        className: c.a.corner5,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner6,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner7,
                        style: p
                    }), o.a.createElement("div", {
                        className: c.a.corner8,
                        style: p
                    }), a)))
                };
            d.propTypes = {
                content: l.a.element,
                onClick: l.a.func,
                className: l.a.string,
                style: l.a.object
            }, a.a = d
        },
        "4/Tn": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__wrapper___39hph-camelCase{top:0;width:100%;height:100%;z-index:50;overflow:hidden;pointer-events:none}.styles__crab___3fp_l-camelCase,.styles__wrapper___39hph-camelCase{position:absolute;left:0}.styles__crab___3fp_l-camelCase{bottom:0;height:28.75%}.styles__crabDance1___3RFom-camelCase{animation:styles__crabDance___2HjXR-camelCase 1s linear -.25s infinite}.styles__crabDance2___1Fsop-camelCase{animation:styles__crabDance___2HjXR-camelCase 1s linear -.75s infinite}.styles__crabDance3___1PlvL-camelCase{animation:styles__crabDance___2HjXR-camelCase 1s linear 0ms infinite}.styles__crabDance4___39lqN-camelCase{animation:styles__crabDance___2HjXR-camelCase 1s linear -.5s infinite}@keyframes styles__crabDance___2HjXR-camelCase{0%{transform:rotate(0deg)}25%{transform:rotate(7deg)}75%{transform:rotate(-7deg)}to{transform:rotate(0deg)}}.styles__crab1___3DRZ6-camelCase{bottom:75%;animation:styles__crab1___3DRZ6-camelCase 6.25s ease-in-out forwards}@keyframes styles__crab1___3DRZ6-camelCase{0%{transform:translateX(-100%)}20%{transform:translateX(30vw)}40%{transform:translateX(70vw)}60%{transform:translateX(5vw)}80%{transform:translateX(65vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__crab2___2KQur-camelCase{bottom:50%;animation:styles__crab2___2KQur-camelCase 6.75s ease-in-out forwards}@keyframes styles__crab2___2KQur-camelCase{0%{transform:translateX(-100%)}25%{transform:translateX(80vw)}35%{transform:translateX(40vw)}55%{transform:translateX(60vw)}80%{transform:translateX(25vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__crab3___4pUCp-camelCase{bottom:25%;animation:styles__crab3___4pUCp-camelCase 7s ease-in-out forwards}@keyframes styles__crab3___4pUCp-camelCase{0%{transform:translateX(-100%)}25%{transform:translateX(10vw)}45%{transform:translateX(60vw)}70%{transform:translateX(15vw)}90%{transform:translateX(50vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__crab4___2smxC-camelCase{bottom:0;animation:styles__crab4___2smxC-camelCase 6.5s ease-in-out forwards}@keyframes styles__crab4___2smxC-camelCase{0%{transform:translateX(-100%)}10%{transform:translateX(40vw)}35%{transform:translateX(5vw)}55%{transform:translateX(75vw)}80%{transform:translateX(35vw)}to{transform:translateX(calc(100vw + 100%))}}.styles__jellyfish___2ZRz9-camelCase{position:absolute;top:0;left:0;width:25%}.styles__jellyfish1___2YxZS-camelCase{left:0;animation:styles__jellyfish1___2YxZS-camelCase 6.5s ease-in-out forwards}@keyframes styles__jellyfish1___2YxZS-camelCase{0%{transform:translateY(-100%)}15%{transform:translateY(5vh)}35%{transform:translateY(55vh)}60%{transform:translateY(35vh)}75%{transform:translateY(0)}to{transform:translateY(calc(100vh + 100%))}}.styles__jellyfish2___1qtsU-camelCase{left:25%;animation:styles__jellyfish2___1qtsU-camelCase 6.25s ease-in-out forwards}@keyframes styles__jellyfish2___1qtsU-camelCase{0%{transform:translateY(-100%)}20%{transform:translateY(35vh)}45%{transform:translateY(-5vh)}65%{transform:translateY(45vh)}85%{transform:translateY(10vh)}to{transform:translateY(calc(100vh + 100%))}}.styles__jellyfish3___3Zg85-camelCase{left:50%;animation:styles__jellyfish3___3Zg85-camelCase 7s ease-in-out forwards}@keyframes styles__jellyfish3___3Zg85-camelCase{0%{transform:translateY(-100%)}25%{transform:translateY(65vh)}40%{transform:translateY(35vh)}55%{transform:translateY(0)}80%{transform:translateY(30vh)}to{transform:translateY(calc(100vh + 100%))}}.styles__jellyfish4___3lkjU-camelCase{left:75%;animation:styles__jellyfish4___3lkjU-camelCase 6.75s ease-in-out forwards}@keyframes styles__jellyfish4___3lkjU-camelCase{0%{transform:translateY(-100%)}25%{transform:translateY(40vh)}45%{transform:translateY(25vh)}65%{transform:translateY(-5vh)}80%{transform:translateY(45vh)}to{transform:translateY(calc(100vh + 100%))}}.styles__frog___2KI_F-camelCase{position:absolute;bottom:0;left:0;width:17.5vw}.styles__frog1___3t81c-camelCase{bottom:0;left:-30vw;animation:styles__frog___2KI_F-camelCase 6.75s linear forwards}.styles__frog2___1i0Yg-camelCase{bottom:15%;left:-50vw;animation:styles__frog___2KI_F-camelCase 7s linear forwards}.styles__frog3___2_MLI-camelCase{bottom:35%;left:-20vw;animation:styles__frog___2KI_F-camelCase 6.25s linear forwards}.styles__frog4___2QmX6-camelCase{bottom:55%;left:-40vw;animation:styles__frog___2KI_F-camelCase 6.5s linear forwards}@keyframes styles__frog___2KI_F-camelCase{0%{transform:translate(0)}5%{transform:translate(7.5vw,-7.5vw)}10%{transform:translate(15vw,-15vw)}15%{transform:translate(22.5vw,-7.5vw)}20%{transform:translate(30vw)}25%{transform:translate(37.5vw,-7.5vw)}30%{transform:translate(45vw,-15vw)}35%{transform:translate(52.5vw,-7.5vw)}40%{transform:translate(60vw)}45%{transform:translate(67.5vw,-7.5vw)}50%{transform:translate(75vw,-15vw)}55%{transform:translate(82.5vw,-7.5vw)}60%{transform:translate(90vw)}65%{transform:translate(97.5vw,-7.5vw)}70%{transform:translate(105vw,-15vw)}75%{transform:translate(112.5vw,-7.5vw)}80%{transform:translate(120vw)}85%{transform:translate(127.5vw,-7.5vw)}90%{transform:translate(135vw,-15vw)}95%{transform:translate(142.5vw,-7.5vw)}to{transform:translate(150vw)}}.styles__pufferfish___2EHoW-camelCase{position:absolute;top:0;left:0;transform:translate(-50%,-50%);width:12.5vw;opacity:0}.styles__pufferfish1___2s16n-camelCase{top:25%;left:20%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 0s}.styles__pufferfish2___2ahe_-camelCase{top:50%;left:80%;animation:styles__pufferfish___2EHoW-camelCase 3s linear .5s}.styles__pufferfish3___34N9w-camelCase{top:35%;left:40%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 1s}.styles__pufferfish4___T3Jmv-camelCase{top:65%;left:60%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 1.5s}.styles__pufferfish5___2GdHj-camelCase{top:10%;left:85%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 2s}.styles__pufferfish6___1nuSb-camelCase{top:70%;left:15%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 2.5s}.styles__pufferfish7___MXy_b-camelCase{top:60%;left:75%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 3s}.styles__pufferfish8___2fpMJ-camelCase{top:15%;left:15%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 3.5s}.styles__pufferfish9___gd5ew-camelCase{top:50%;left:50%;animation:styles__pufferfish___2EHoW-camelCase 3s linear 4s}@keyframes styles__pufferfish___2EHoW-camelCase{0%{transform:translate(-50%,-50%) scale(.1);opacity:1}to{transform:translate(-50%,-50%) scale(5);opacity:1}}.styles__octopus___3z5IQ-camelCase{position:absolute;top:0;left:0;transform:translate(-50%,-50%);width:12.5vw;opacity:0}.styles__octopus1___qroqd-camelCase{top:30%;left:20%;animation:styles__octopus___3z5IQ-camelCase 4s linear 0s}.styles__octopus2___2DqYp-camelCase{top:10%;left:60%;animation:styles__octopus___3z5IQ-camelCase 4s linear .5s}.styles__octopus3___2_emh-camelCase{top:65%;left:30%;animation:styles__octopus___3z5IQ-camelCase 4s linear 1s}.styles__octopus4___2Hh0m-camelCase{top:70%;left:80%;animation:styles__octopus___3z5IQ-camelCase 4s linear 1.5s}.styles__octopus5___372Br-camelCase{top:65%;left:15%;animation:styles__octopus___3z5IQ-camelCase 4s linear 2s}.styles__octopus6___24Wyi-camelCase{top:30%;left:85%;animation:styles__octopus___3z5IQ-camelCase 4s linear 2.5s}.styles__octopus7___WEmEw-camelCase{top:50%;left:50%;animation:styles__octopus___3z5IQ-camelCase 4s linear 3s}@keyframes styles__octopus___3z5IQ-camelCase{0%{transform:translate(-50%,-50%) scale(.1) rotate(0deg);opacity:1}17%{transform:translate(-50%,-50%) scale(3) rotate(120deg)}34%{transform:translate(-50%,-50%) scale(1) rotate(240deg)}51%{transform:translate(-50%,-50%) scale(3.5) rotate(1turn)}68%{transform:translate(-50%,-50%) scale(.5) rotate(480deg)}85%{transform:translate(-50%,-50%) scale(3) rotate(600deg)}to{transform:translate(-50%,-50%) scale(.1) rotate(2turn);opacity:1}}.styles__narwhal___3jwIO-camelCase{position:absolute;bottom:0;left:0;height:32.5%;transform:translateX(-100%)}.styles__narwhalDance___d84PX-camelCase{animation:styles__narwhalDance___d84PX-camelCase 1s linear infinite}@keyframes styles__narwhalDance___d84PX-camelCase{0%{transform:rotate(0deg)}17.5%{transform:rotate(9deg) translateY(0)}25%{transform:rotate(9deg) translateY(10%)}32.5%{transform:rotate(9deg) translateY(0)}67.5%{transform:rotate(-9deg) translateY(0)}75%{transform:rotate(-9deg) translateY(10%)}82.5%{transform:rotate(-9deg) translateY(0)}to{transform:rotate(0deg)}}.styles__narwhal1___4tFTI-camelCase{left:0}.styles__narwhal1___4tFTI-camelCase,.styles__narwhal2___1lu6V-camelCase{bottom:65%;animation:styles__narwhal___3jwIO-camelCase 6.2s linear forwards}.styles__narwhal2___1lu6V-camelCase{left:-30%}.styles__narwhal3___3U2fW-camelCase{bottom:65%;left:-60%;animation:styles__narwhal___3jwIO-camelCase 6.2s linear forwards}.styles__narwhal4___33coZ-camelCase{left:0}.styles__narwhal4___33coZ-camelCase,.styles__narwhal5___2v5w8-camelCase{bottom:32.5%;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .4s forwards}.styles__narwhal5___2v5w8-camelCase{left:-30%}.styles__narwhal6___3F75l-camelCase{bottom:32.5%;left:-60%;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .4s forwards}.styles__narwhal7___DuG-W-camelCase{left:0}.styles__narwhal7___DuG-W-camelCase,.styles__narwhal8___11bPt-camelCase{bottom:2.5%;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .8s forwards}.styles__narwhal8___11bPt-camelCase{left:-30%}.styles__narwhal9___2f6bZ-camelCase{bottom:2.5%;left:-60%;animation:styles__narwhal___3jwIO-camelCase 6.2s linear .8s forwards}@keyframes styles__narwhal___3jwIO-camelCase{0%{transform:translateX(-100%)}to{transform:translateX(calc(160vw + 100%))}}.styles__megalodon___2vS4S-camelCase{position:absolute;top:0;left:0;width:15vw;opacity:0}.styles__megalodon1___PjDrP-camelCase{top:70%;left:-20%;animation:styles__megalodon1___PjDrP-camelCase 2s linear}@keyframes styles__megalodon1___PjDrP-camelCase{0%{transform:rotate(60deg) translateY(0);opacity:1}to{transform:rotate(60deg) translateY(-250vh);opacity:1}}.styles__megalodon2___1WVIf-camelCase{top:-35%;left:30%;animation:styles__megalodon2___1WVIf-camelCase 2s linear .5s}@keyframes styles__megalodon2___1WVIf-camelCase{0%{transform:rotate(150deg) translateY(0);opacity:1}to{transform:rotate(150deg) translateY(-250vh);opacity:1}}.styles__megalodon3___2n9EP-camelCase{top:75%;left:110%;animation:styles__megalodon3___2n9EP-camelCase 2s linear 1s}@keyframes styles__megalodon3___2n9EP-camelCase{0%{transform:rotate(-80deg) translateY(0);opacity:1}to{transform:rotate(-80deg) translateY(-250vw);opacity:1}}.styles__megalodon4___12Wuj-camelCase{top:-35%;left:85%;animation:styles__megalodon4___12Wuj-camelCase 2s linear 1.5s}@keyframes styles__megalodon4___12Wuj-camelCase{0%{transform:rotate(-160deg) translateY(0);opacity:1}to{transform:rotate(-160deg) translateY(-250vh);opacity:1}}.styles__megalodon5___1PF_y-camelCase{top:110%;left:30%;animation:styles__megalodon5___1PF_y-camelCase 2s linear 2s}@keyframes styles__megalodon5___1PF_y-camelCase{0%{transform:rotate(-10deg) translateY(0);opacity:1}to{transform:rotate(-10deg) translateY(-250vh);opacity:1}}.styles__megalodon6___2S8ej-camelCase{top:35%;left:-20%;animation:styles__megalodon6___2S8ej-camelCase 2s linear 2.5s}@keyframes styles__megalodon6___2S8ej-camelCase{0%{transform:rotate(95deg) translateY(0);opacity:1}to{transform:rotate(95deg) translateY(-250vw);opacity:1}}.styles__megalodon7___1B0bO-camelCase{top:110%;left:80%;animation:styles__megalodon7___1B0bO-camelCase 2s linear 3s}@keyframes styles__megalodon7___1B0bO-camelCase{0%{transform:rotate(-25deg) translateY(0);opacity:1}to{transform:rotate(-25deg) translateY(-250vh);opacity:1}}.styles__megalodon8___N7GMc-camelCase{top:-35%;left:90%;animation:styles__megalodon8___N7GMc-camelCase 2s linear 3.5s}@keyframes styles__megalodon8___N7GMc-camelCase{0%{transform:rotate(-105deg) translateY(0);opacity:1}to{transform:rotate(-105deg) translateY(-250vw);opacity:1}}.styles__megalodon9___2VMHf-camelCase{top:110%;left:10%;animation:styles__megalodon9___2VMHf-camelCase 2s linear 4s}@keyframes styles__megalodon9___2VMHf-camelCase{0%{transform:rotate(30deg) translateY(0);opacity:1}to{transform:rotate(30deg) translateY(-250vh);opacity:1}}.styles__megalodon10___2SQrf-camelCase{top:70%;left:110%;animation:styles__megalodon10___2SQrf-camelCase 2s linear 4.5s}@keyframes styles__megalodon10___2SQrf-camelCase{0%{transform:rotate(-80deg) translateY(0);opacity:1}to{transform:rotate(-80deg) translateY(-250vw);opacity:1}}.styles__megalodon11___3Zl78-camelCase{top:170%;left:42.5%;animation:styles__megalodon11___3Zl78-camelCase 2s linear 5s}@keyframes styles__megalodon11___3Zl78-camelCase{0%{transform:rotate(0deg) translateY(0) scale(3);opacity:1}to{transform:rotate(0deg) translateY(-450vh) scale(3);opacity:1}}.styles__blobfish___2jRam-camelCase{position:absolute;bottom:0;left:0;height:115%;animation:styles__blobfish___2jRam-camelCase 7s linear forwards}@keyframes styles__blobfish___2jRam-camelCase{0%{transform:translateX(-100%)}20%{transform:translateX(calc(25vw - 50%))}25%{transform:translateX(calc(25vw - 50%))}45%{transform:translateX(calc(50vw - 50%))}55%{transform:translateX(calc(50vw - 50%))}75%{transform:translateX(calc(75vw - 50%))}80%{transform:translateX(calc(75vw - 50%))}to{transform:translateX(calc(100vw + 100%))}}.styles__babyShark___tjAz5-camelCase{position:absolute;top:100%;left:0;width:20vw}.styles__babyShark1___1yiPk-camelCase{top:115%;left:5%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out}.styles__babyShark2___2AEsS-camelCase{top:135%;left:70%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out .5s}.styles__babyShark3___25-Us-camelCase{top:100%;left:35%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 1s}.styles__babyShark4___x123p-camelCase{top:125%;left:60%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 1.5s}.styles__babyShark5___17dWV-camelCase{top:105%;left:20%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 2s}.styles__babyShark6___1vbYO-camelCase{top:115%;left:50%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 2.5s}.styles__babyShark7___2VKnR-camelCase{top:120%;left:80%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 3s}.styles__babyShark8___29u-D-camelCase{top:125%;left:0;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 3.5s}.styles__babyShark9___2yAIC-camelCase{top:100%;left:40%;animation:styles__babyShark___tjAz5-camelCase 3s ease-in-out 4s}@keyframes styles__babyShark___tjAz5-camelCase{0%{transform:translateY(0)}50%{transform:translateY(-105vh)}to{transform:translateY(0)}}@media only screen and (max-width:950px){.styles__jellyfish___2ZRz9-camelCase{width:35%}.styles__jellyfish1___2YxZS-camelCase{left:0}.styles__jellyfish2___1qtsU-camelCase{left:21.6%}.styles__jellyfish3___3Zg85-camelCase{left:43.3%}.styles__jellyfish4___3lkjU-camelCase{left:65%}.styles__frog___2KI_F-camelCase{width:35vw}.styles__frog1___3t81c-camelCase{left:-40vw}.styles__frog2___1i0Yg-camelCase{left:-50vw}.styles__frog3___2_MLI-camelCase{left:-35vw}.styles__frog4___2QmX6-camelCase{left:-45vw}@keyframes styles__frog___2KI_F-camelCase{0%{transform:translate(0)}5%{transform:translate(7.5vw,-10vw)}10%{transform:translate(15vw,-20vw)}15%{transform:translate(22.5vw,-10vw)}20%{transform:translate(30vw)}25%{transform:translate(37.5vw,-10vw)}30%{transform:translate(45vw,-20vw)}35%{transform:translate(52.5vw,-10vw)}40%{transform:translate(60vw)}45%{transform:translate(67.5vw,-10vw)}50%{transform:translate(75vw,-20vw)}55%{transform:translate(82.5vw,-10vw)}60%{transform:translate(90vw)}65%{transform:translate(97.5vw,-10vw)}70%{transform:translate(105vw,-20vw)}75%{transform:translate(112.5vw,-10vw)}80%{transform:translate(120vw)}85%{transform:translate(127.5vw,-10vw)}90%{transform:translate(135vw,-20vw)}95%{transform:translate(142.5vw,-10vw)}to{transform:translate(150vw)}}.styles__pufferfish___2EHoW-camelCase{width:20vw}.styles__octopus___3z5IQ-camelCase{width:22.5vw}.styles__narwhal___3jwIO-camelCase{height:27.5%}.styles__megalodon___2vS4S-camelCase{width:32.5vw}.styles__megalodon1___PjDrP-camelCase,.styles__megalodon6___2S8ej-camelCase{left:-35%}.styles__megalodon11___3Zl78-camelCase{left:33.75%}.styles__babyShark___tjAz5-camelCase{width:33vw}.styles__babyShark2___2AEsS-camelCase{left:60%}.styles__babyShark3___25-Us-camelCase{left:25%}.styles__babyShark4___x123p-camelCase{left:50%}.styles__babyShark5___17dWV-camelCase{left:10%}.styles__babyShark6___1vbYO-camelCase{left:40%}.styles__babyShark7___2VKnR-camelCase{left:67%}.styles__babyShark9___2yAIC-camelCase{left:33.5%}}", ""]), a.locals = {
                wrapper: "styles__wrapper___39hph-camelCase",
                crab: "styles__crab___3fp_l-camelCase",
                crabDance1: "styles__crabDance1___3RFom-camelCase",
                crabDance: "styles__crabDance___2HjXR-camelCase",
                crabDance2: "styles__crabDance2___1Fsop-camelCase",
                crabDance3: "styles__crabDance3___1PlvL-camelCase",
                crabDance4: "styles__crabDance4___39lqN-camelCase",
                crab1: "styles__crab1___3DRZ6-camelCase",
                crab2: "styles__crab2___2KQur-camelCase",
                crab3: "styles__crab3___4pUCp-camelCase",
                crab4: "styles__crab4___2smxC-camelCase",
                jellyfish: "styles__jellyfish___2ZRz9-camelCase",
                jellyfish1: "styles__jellyfish1___2YxZS-camelCase",
                jellyfish2: "styles__jellyfish2___1qtsU-camelCase",
                jellyfish3: "styles__jellyfish3___3Zg85-camelCase",
                jellyfish4: "styles__jellyfish4___3lkjU-camelCase",
                frog: "styles__frog___2KI_F-camelCase",
                frog1: "styles__frog1___3t81c-camelCase",
                frog2: "styles__frog2___1i0Yg-camelCase",
                frog3: "styles__frog3___2_MLI-camelCase",
                frog4: "styles__frog4___2QmX6-camelCase",
                pufferfish: "styles__pufferfish___2EHoW-camelCase",
                pufferfish1: "styles__pufferfish1___2s16n-camelCase",
                pufferfish2: "styles__pufferfish2___2ahe_-camelCase",
                pufferfish3: "styles__pufferfish3___34N9w-camelCase",
                pufferfish4: "styles__pufferfish4___T3Jmv-camelCase",
                pufferfish5: "styles__pufferfish5___2GdHj-camelCase",
                pufferfish6: "styles__pufferfish6___1nuSb-camelCase",
                pufferfish7: "styles__pufferfish7___MXy_b-camelCase",
                pufferfish8: "styles__pufferfish8___2fpMJ-camelCase",
                pufferfish9: "styles__pufferfish9___gd5ew-camelCase",
                octopus: "styles__octopus___3z5IQ-camelCase",
                octopus1: "styles__octopus1___qroqd-camelCase",
                octopus2: "styles__octopus2___2DqYp-camelCase",
                octopus3: "styles__octopus3___2_emh-camelCase",
                octopus4: "styles__octopus4___2Hh0m-camelCase",
                octopus5: "styles__octopus5___372Br-camelCase",
                octopus6: "styles__octopus6___24Wyi-camelCase",
                octopus7: "styles__octopus7___WEmEw-camelCase",
                narwhal: "styles__narwhal___3jwIO-camelCase",
                narwhalDance: "styles__narwhalDance___d84PX-camelCase",
                narwhal1: "styles__narwhal1___4tFTI-camelCase",
                narwhal2: "styles__narwhal2___1lu6V-camelCase",
                narwhal3: "styles__narwhal3___3U2fW-camelCase",
                narwhal4: "styles__narwhal4___33coZ-camelCase",
                narwhal5: "styles__narwhal5___2v5w8-camelCase",
                narwhal6: "styles__narwhal6___3F75l-camelCase",
                narwhal7: "styles__narwhal7___DuG-W-camelCase",
                narwhal8: "styles__narwhal8___11bPt-camelCase",
                narwhal9: "styles__narwhal9___2f6bZ-camelCase",
                megalodon: "styles__megalodon___2vS4S-camelCase",
                megalodon1: "styles__megalodon1___PjDrP-camelCase",
                megalodon2: "styles__megalodon2___1WVIf-camelCase",
                megalodon3: "styles__megalodon3___2n9EP-camelCase",
                megalodon4: "styles__megalodon4___12Wuj-camelCase",
                megalodon5: "styles__megalodon5___1PF_y-camelCase",
                megalodon6: "styles__megalodon6___2S8ej-camelCase",
                megalodon7: "styles__megalodon7___1B0bO-camelCase",
                megalodon8: "styles__megalodon8___N7GMc-camelCase",
                megalodon9: "styles__megalodon9___2VMHf-camelCase",
                megalodon10: "styles__megalodon10___2SQrf-camelCase",
                megalodon11: "styles__megalodon11___3Zl78-camelCase",
                blobfish: "styles__blobfish___2jRam-camelCase",
                babyShark: "styles__babyShark___tjAz5-camelCase",
                babyShark1: "styles__babyShark1___1yiPk-camelCase",
                babyShark2: "styles__babyShark2___2AEsS-camelCase",
                babyShark3: "styles__babyShark3___25-Us-camelCase",
                babyShark4: "styles__babyShark4___x123p-camelCase",
                babyShark5: "styles__babyShark5___17dWV-camelCase",
                babyShark6: "styles__babyShark6___1vbYO-camelCase",
                babyShark7: "styles__babyShark7___2VKnR-camelCase",
                babyShark8: "styles__babyShark8___29u-D-camelCase",
                babyShark9: "styles__babyShark9___2yAIC-camelCase"
            }
        },
        "4f5i": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("0oXL"),
                i = t("fAPQ"),
                _ = t.n(i),
                c = function(e) {
                    var a = e.name,
                        t = e.blook;
                    return o.a.createElement("div", {
                        className: _.a.background
                    }, o.a.createElement("div", {
                        className: _.a.text
                    }, "".concat(a, "'s"), o.a.createElement("br", null), "Dance Party!!!"), o.a.createElement("div", {
                        className: _.a.dancing
                    }, o.a.createElement(n.a, {
                        name: t,
                        className: _.a.blook
                    }), o.a.createElement("div", {
                        className: _.a.shadow
                    })))
                };
            c.propTypes = {
                name: l.a.string,
                blook: l.a.string
            }, a.a = c
        },
        "4kUR": function(e, a, t) {
            var s = t("PL6v");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "6D46": function(e, a, t) {
            var s = t("CL23");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "7No7": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("jaO2"),
                i = t.n(n),
                _ = t("Xst1"),
                c = t.n(_),
                m = t("0oXL"),
                p = t("8qja"),
                d = function(e) {
                    var a = e.blook,
                        t = e.text,
                        s = e.onClick,
                        r = e.isMerry;
                    return o.a.createElement("div", {
                        className: c.a.modal
                    }, o.a.createElement("div", {
                        className: i.a.container,
                        style: {
                            backgroundColor: r ? "#eb2d37" : p.a ? "#8d7995" : null
                        }
                    }, o.a.createElement("div", {
                        className: i.a.containerInside,
                        style: {
                            backgroundColor: r ? "#eb2d37" : p.a ? "#625569" : null,
                            borderColor: r ? "#fff" : p.a ? "#504a56" : null
                        }
                    }, o.a.createElement("div", {
                        className: i.a.text
                    }, o.a.createElement(m.a, {
                        name: a,
                        className: i.a.blook
                    }), t), o.a.createElement("div", {
                        className: i.a.button,
                        role: "button",
                        tabIndex: 0,
                        onClick: s,
                        id: "modalOk"
                    }, "OK"))))
                };
            d.propTypes = {
                blook: l.a.string,
                text: l.a.string,
                onClick: l.a.func,
                isMerry: l.a.bool
            }, a.a = d
        },
        "9WNt": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__extraStatLong___j--T3-camelCase{height:50px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:10px 35px}.styles__extraShortStats___2T80z-camelCase,.styles__extraStatLong___j--T3-camelCase{width:90%;display:flex;flex-direction:row}.styles__extraShortStats___2T80z-camelCase{justify-content:space-between;margin:10px 35px 25px}.styles__extraStatShort___TbqTT-camelCase{height:50px;width:47.5%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row}.styles__extraLeftText___jFLFe-camelCase{text-align:left;margin-left:10px;flex-grow:1}.styles__extraLeftText___jFLFe-camelCase,.styles__extraRightText___3oeEn-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif}.styles__extraRightText___3oeEn-camelCase{text-align:right;margin-right:10px}.styles__extraMsg___PcPor-camelCase{width:90%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;margin:10px 35px}.styles__extraText___2wrwS-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:center;margin:10px 25px;flex-grow:1}@media only screen and (max-width:800px){.styles__extraShortStats___2T80z-camelCase{flex-direction:column;justify-content:normal}.styles__extraStatShort___TbqTT-camelCase{width:100%}.styles__extraStatLong___j--T3-camelCase{margin:10px 15px}.styles__extraLeftText___jFLFe-camelCase,.styles__extraText___2wrwS-camelCase{font-size:22px}.styles__extraMsg___PcPor-camelCase{width:280px;margin:10px 20px}}", ""]), a.locals = {
                extraStatLong: "styles__extraStatLong___j--T3-camelCase",
                extraShortStats: "styles__extraShortStats___2T80z-camelCase",
                extraStatShort: "styles__extraStatShort___TbqTT-camelCase",
                extraLeftText: "styles__extraLeftText___jFLFe-camelCase",
                extraRightText: "styles__extraRightText___3oeEn-camelCase",
                extraMsg: "styles__extraMsg___PcPor-camelCase",
                extraText: "styles__extraText___2wrwS-camelCase"
            }
        },
        "9coQ": function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return o
            }));
            var s = t("vDqi"),
                o = t.n(s).a.create({
                    baseURL: "https://fb.blooket.com",
                    withCredentials: !0
                })
        },
        A3cw: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__button___1_E-G-camelCase{position:relative;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;-webkit-tap-highlight-color:transparent;transition:filter .25s}.styles__shadow___3GMdH-camelCase{background:rgba(0,0,0,.25);transform:translateY(2px);transition:transform .6s cubic-bezier(.3,.7,.4,1)}.styles__edge___3eWfq-camelCase,.styles__shadow___3GMdH-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:5px}.styles__edge___3eWfq-camelCase{filter:brightness(.7)}.styles__front___vcvuy-camelCase{color:#fff;display:flex;flex-direction:row;align-items:center;justify-content:center;text-align:center;padding:5px;border-radius:5px;transform:translateY(-4px);transition:transform .6s cubic-bezier(.3,.7,.4,1)}.styles__button___1_E-G-camelCase:hover{filter:brightness(110%)}.styles__button___1_E-G-camelCase:hover .styles__front___vcvuy-camelCase{transform:translateY(-6px);transition:transform .25s cubic-bezier(.3,.7,.4,1.5)}.styles__button___1_E-G-camelCase:active .styles__front___vcvuy-camelCase{transform:translateY(-2px);transition:transform 34ms}.styles__button___1_E-G-camelCase:hover .styles__shadow___3GMdH-camelCase{transform:translateY(4px);transition:transform .25s cubic-bezier(.3,.7,.4,1.5)}.styles__button___1_E-G-camelCase:active .styles__shadow___3GMdH-camelCase{transform:translateY(1px);transition:transform 34ms}", ""]), a.locals = {
                button: "styles__button___1_E-G-camelCase",
                shadow: "styles__shadow___3GMdH-camelCase",
                edge: "styles__edge___3eWfq-camelCase",
                front: "styles__front___vcvuy-camelCase"
            }
        },
        AFGJ: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___1sA08-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;background:linear-gradient(180deg,#9be2fe 0,#67d1fb)}.styles__container___1sA08-camelCase,.styles__text___3rWvw-camelCase{position:absolute}.styles__text___3rWvw-camelCase{width:80%;top:100%;left:10%;text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:6vw}.styles__n1___d2BBc-camelCase{animation:styles__jump___2dFef-camelCase 4s ease-in-out forwards}.styles__n2___3-126-camelCase{animation:styles__jump___2dFef-camelCase 4s ease-in-out 4s forwards}.styles__n3___38OXb-camelCase{animation:styles__jump___2dFef-camelCase 4s ease-in-out 8s forwards}.styles__n4___1PYu0-camelCase{animation:styles__jump___2dFef-camelCase 4s ease-in-out 12s forwards}.styles__n5___UeiVz-camelCase{animation:styles__jump___2dFef-camelCase 4s ease-in-out 16s forwards}.styles__n6___330zC-camelCase{animation:styles__jump___2dFef-camelCase 4s ease-in-out 20s forwards}@keyframes styles__jump___2dFef-camelCase{0%{transform:translateY(0)}20%{transform:translateY(calc(-50% - 65vh))}25%{transform:translateY(calc(-50% - 55vh))}80%{transform:translateY(calc(-50% - 55vh))}to{transform:translateY(0)}}.styles__wave1___vDGOB-camelCase,.styles__wave2___13Aeh-camelCase,.styles__wave3___2oPbx-camelCase,.styles__wave4___yphBv-camelCase{position:absolute;width:calc(100% + 100px);bottom:0;left:-100px;pointer-events:none}.styles__wave1___vDGOB-camelCase{height:210px;background:radial-gradient(circle,transparent 40%,#2179ea 0);background-position:center -140px;animation:styles__anim-h-wave___KptaO-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.75s infinite alternate}.styles__wave2___13Aeh-camelCase{height:180px;background:radial-gradient(circle,transparent 40%,#1d86ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___KptaO-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.5s infinite alternate}.styles__wave3___2oPbx-camelCase{height:150px;background:radial-gradient(circle,transparent 40%,#2a9eea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___KptaO-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___3r64M-camelCase 2s -.25s infinite alternate}.styles__wave4___yphBv-camelCase{height:120px;background:radial-gradient(circle,transparent 40%,#02b0ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___KptaO-camelCase 3s linear infinite,styles__anim-v-wave___3r64M-camelCase 2s infinite alternate}@keyframes styles__anim-h-wave___KptaO-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@keyframes styles__anim-v-wave___3r64M-camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}", ""]), a.locals = {
                container: "styles__container___1sA08-camelCase",
                text: "styles__text___3rWvw-camelCase",
                n1: "styles__n1___d2BBc-camelCase",
                jump: "styles__jump___2dFef-camelCase",
                n2: "styles__n2___3-126-camelCase",
                n3: "styles__n3___38OXb-camelCase",
                n4: "styles__n4___1PYu0-camelCase",
                n5: "styles__n5___UeiVz-camelCase",
                n6: "styles__n6___330zC-camelCase",
                wave1: "styles__wave1___vDGOB-camelCase",
                wave2: "styles__wave2___13Aeh-camelCase",
                wave3: "styles__wave3___2oPbx-camelCase",
                wave4: "styles__wave4___yphBv-camelCase",
                "anim-h-wave": "styles__anim-h-wave___KptaO-camelCase",
                "anim-v-wave": "styles__anim-v-wave___3r64M-camelCase"
            }
        },
        CL23: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___3Z55C-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;background-color:#ead49a;font-family:Macondo,sans-serif}.styles__text___2Kw-i-camelCase{position:absolute!important;top:50%;left:50%;transform:translate(-50%,calc(-100% - 50vh))}.styles__textInside___2XfJm-camelCase{text-align:center;font-size:6vw;line-height:6.25vw;padding:1.5vw 2.5vw}.styles__n1___3zxDU-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 0ms forwards,styles__slideOut___3vV1q-camelCase .3s linear 2.5s forwards}.styles__n2___1Ufpg-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 2.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 5.5s forwards}.styles__n3___1aN9d-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 5.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 9.5s forwards}.styles__n4___3esVX-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 9.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 13.5s forwards}.styles__n5___1QdJn-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 13.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 17.5s forwards}.styles__n6___1_wdS-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 17.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 21.5s forwards}.styles__n7___13lT7-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 21.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 25.5s forwards}.styles__n8___391fY-camelCase{animation:styles__slideIn___150p7-camelCase .3s linear 25.5s forwards,styles__slideOut___3vV1q-camelCase .3s linear 27.5s forwards}@keyframes styles__slideIn___150p7-camelCase{0%{transform:translate(-50%,calc(-100% - 50vh))}to{transform:translate(-50%,-50%)}}@keyframes styles__slideOut___3vV1q-camelCase{0%{transform:translate(-50%,-50%)}to{transform:translate(-50%,calc(100% + 50vh))}}", ""]), a.locals = {
                container: "styles__container___3Z55C-camelCase",
                text: "styles__text___2Kw-i-camelCase",
                textInside: "styles__textInside___2XfJm-camelCase",
                n1: "styles__n1___3zxDU-camelCase",
                slideIn: "styles__slideIn___150p7-camelCase",
                slideOut: "styles__slideOut___3vV1q-camelCase",
                n2: "styles__n2___1Ufpg-camelCase",
                n3: "styles__n3___1aN9d-camelCase",
                n4: "styles__n4___3esVX-camelCase",
                n5: "styles__n5___1QdJn-camelCase",
                n6: "styles__n6___1_wdS-camelCase",
                n7: "styles__n7___13lT7-camelCase",
                n8: "styles__n8___391fY-camelCase"
            }
        },
        CPuq: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___DGHB6-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:0;left:0;height:100%;width:100%;z-index:10;pointer-events:none}.styles__text___2Ab5w-camelCase{font-size:4vw;padding:1vw 3vw;text-align:center;color:#fff;font-family:Nunito,sans-serif;font-weight:700;max-width:70%;background-color:rgba(0,0,0,.6);border-radius:6px}@media only screen and (max-width:600px){.styles__text___2Ab5w-camelCase{font-size:3.5vh;padding:1vh 5vw}}", ""]), a.locals = {
                container: "styles__container___DGHB6-camelCase",
                text: "styles__text___2Ab5w-camelCase"
            }
        },
        Cc5n: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("HRwi"),
                c = t("dOCC"),
                m = t.n(c),
                p = t("ZbWA");

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function f(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function h(e, a) {
                return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function y(e) {
                var a = function() {
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
                    var t, s = b(e);
                    if (a) {
                        var o = b(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return g(this, t)
                }
            }

            function g(e, a) {
                if (a && ("object" === d(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
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
            var v = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && h(e, a)
                }(l, e);
                var a, t, s, r = y(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {}, a
                }
                return a = l, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = document.getElementById("pass"),
                            a = (100 === this.props.level ? 100 * this.props.level : 100 * (this.props.level + this.props.xp / _.a[this.props.level].xp)) - e.offsetWidth / 2;
                        e.scrollLeft = a;
                        var t, s, o = !1;
                        e.addEventListener("mousedown", (function(a) {
                            o = !0, t = a.pageX - e.offsetLeft, s = e.scrollLeft, e.style.cursor = "grabbing"
                        })), e.addEventListener("mouseleave", (function() {
                            o = !1, e.style.cursor = "grab"
                        })), e.addEventListener("mouseup", (function() {
                            o = !1, e.style.cursor = "grab"
                        })), e.addEventListener("mousemove", (function(a) {
                            if (o) {
                                a.preventDefault();
                                var r = 2 * (a.pageX - e.offsetLeft - t);
                                e.scrollLeft = s - r
                            }
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            className: m.a.passContainer,
                            style: {
                                width: this.props.isSmall ? "90%" : null
                            }
                        }, o.a.createElement("div", {
                            className: m.a.passInside,
                            id: "pass"
                        }, o.a.createElement("div", {
                            className: m.a.passBarWrapper,
                            style: {
                                width: "".concat(100 * _.a.length, "px")
                            }
                        }, o.a.createElement("div", {
                            className: m.a.passBar,
                            style: {
                                width: 100 === this.props.level ? "100%" : "".concat(100 * (this.props.level + this.props.xp / _.a[this.props.level].xp), "px")
                            }
                        }, o.a.createElement("div", {
                            className: m.a.passBarInside
                        }))), _.a.map((function(a, t) {
                            return o.a.createElement("div", {
                                key: t,
                                className: i()(m.a.passBarLevel, u({}, m.a.passBarLevelLocked, e.props.level <= t)),
                                style: {
                                    left: "".concat(100 * (t + 1), "px")
                                }
                            }, t + 1)
                        })), _.a.map((function(a, t) {
                            return a.partType ? o.a.createElement("div", {
                                key: t,
                                className: i()(m.a.passPrize, u({}, m.a.passPrizeLocked, e.props.level <= t)),
                                style: {
                                    left: "".concat(100 * (t + 1), "px")
                                }
                            }, o.a.createElement("img", {
                                src: p.a[a.partType][a.part].url,
                                alt: a.partType,
                                className: m.a.passPart,
                                draggable: !1
                            }), o.a.createElement("div", {
                                className: m.a.passPrizeText
                            }, a.partType.charAt(0).toUpperCase() + a.partType.slice(1))) : null
                        }))), o.a.createElement("div", {
                            className: i()(m.a.passHeader, u({}, m.a.smallPassHeader, this.props.isSmall))
                        }, o.a.createElement("div", {
                            className: m.a.passHeaderInside
                        }, "Class Pass")), 100 !== this.props.level ? o.a.createElement("div", {
                            className: i()(m.a.passHeaderRight, u({}, m.a.smallPassHeaderRight, this.props.isSmall))
                        }, o.a.createElement("div", {
                            className: m.a.passHeaderInside
                        }, "".concat(this.props.xp, " / ").concat(_.a[this.props.level].xp, " XP"))) : null)
                    }
                }]) && f(a.prototype, t), s && f(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            v.propTypes = {
                xp: l.a.number,
                level: l.a.number,
                isSmall: l.a.bool
            }, a.a = v
        },
        Ce2M: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___1yyxu-camelCase{display:flex;flex-flow:column;justify-content:center;align-items:center;width:100%;height:100%;position:fixed;top:0;left:0;z-index:25;background-color:#f7f7f7;animation:styles__growIn___1AWRT-camelCase .4s}@keyframes styles__growIn___1AWRT-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__header___K-4Fg-camelCase{font-size:9vw;margin:10px auto;font-family:Satisfy,sans-serif}.styles__header___K-4Fg-camelCase,.styles__sponsor___2PQqr-camelCase{width:80%;color:#3a3a3a;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__sponsor___2PQqr-camelCase{font-size:3vw;margin:20px auto;font-family:Nunito,sans-serif;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__blook___1E6OI-camelCase{height:3.5vw;margin:auto .75vw}.styles__barHolder___11smF-camelCase{width:70%;margin:10px auto;background-color:#ccc;height:3vw;border-radius:1.5vw;overflow:hidden}.styles__bar___LOkdQ-camelCase{width:100%;height:100%;background-color:#ce1313;animation:styles__barSlide___2GHyX-camelCase 11.7s linear forwards}@keyframes styles__barSlide___2GHyX-camelCase{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@media only screen and (max-width:800px){.styles__header___K-4Fg-camelCase{font-size:16vw}.styles__sponsor___2PQqr-camelCase{font-size:6vw}.styles__blook___1E6OI-camelCase{height:7vw;margin:auto 2.5vw}.styles__barHolder___11smF-camelCase{height:5vw;border-radius:2.5vw}}", ""]), a.locals = {
                container: "styles__container___1yyxu-camelCase",
                growIn: "styles__growIn___1AWRT-camelCase",
                header: "styles__header___K-4Fg-camelCase",
                sponsor: "styles__sponsor___2PQqr-camelCase",
                blook: "styles__blook___1E6OI-camelCase",
                barHolder: "styles__barHolder___11smF-camelCase",
                bar: "styles__bar___LOkdQ-camelCase",
                barSlide: "styles__barSlide___2GHyX-camelCase"
            }
        },
        ENNI: function(e, a, t) {
            var s = t("hWHY");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        F5yN: function(e, a, t) {
            var s = t("sevs");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "FD/C": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("KkQ+"),
                i = t.n(n),
                _ = function(e) {
                    var a = e.night;
                    return o.a.createElement("div", {
                        className: i.a.slow,
                        style: {
                            color: a ? "#fff" : null,
                            textShadow: a ? "2px 2px 8px #fff" : null
                        }
                    }, "Slow Mo")
                };
            _.propTypes = {
                night: l.a.bool
            }, a.a = _
        },
        FYI0: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__button___22rMT-camelCase{border-radius:6px;border:3px solid #3a3a3a;min-width:100px;height:45px;margin:auto;padding:0 15px;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___22rMT-camelCase:hover,.styles__upgradeButton___2X8Io-camelCase{font-weight:700}.styles__upgradeButton___2X8Io-camelCase{border-radius:6px;background-color:#ff7b24;min-width:100px;height:45px;margin:auto;padding:3px 18px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#fff;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__upgradeButton___2X8Io-camelCase:hover{transform:scale(1.05)}@media only screen and (max-width:600px){.styles__button___22rMT-camelCase{min-width:80px}}.styles__hoverGreen___3q49n-camelCase:hover{border-color:#4bc22e;color:#4bc22e}.styles__hoverRed___243tA-camelCase:hover{border-color:#ce1313;color:#ce1313}.styles__hoverBlue___2zYb_-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__hoverWhite___1LmPq-camelCase{color:#fff;border-color:#fff;opacity:.8}.styles__hoverWhite___1LmPq-camelCase:hover{opacity:1}", ""]), a.locals = {
                button: "styles__button___22rMT-camelCase",
                upgradeButton: "styles__upgradeButton___2X8Io-camelCase",
                hoverGreen: "styles__hoverGreen___3q49n-camelCase",
                hoverRed: "styles__hoverRed___243tA-camelCase",
                hoverBlue: "styles__hoverBlue___2zYb_-camelCase",
                hoverWhite: "styles__hoverWhite___1LmPq-camelCase"
            }
        },
        HRwi: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return s
            })), t.d(a, "b", (function() {
                return o
            }));
            var s = window.ClassPassItems = [{
                    xp: 5,
                    partType: "glasses",
                    part: 9
                }, {
                    xp: 5,
                    partType: "item",
                    part: 14
                }, {
                    xp: 5,
                    partType: "clothing",
                    part: 13
                }, {
                    xp: 5,
                    partType: "clothing",
                    part: 14
                }, {
                    xp: 5,
                    partType: "hat",
                    part: 14
                }, {
                    xp: 5,
                    partType: "clothing",
                    part: 15
                }, {
                    xp: 5,
                    partType: "item",
                    part: 15
                }, {
                    xp: 5,
                    partType: "hat",
                    part: 15
                }, {
                    xp: 5,
                    partType: "hat",
                    part: 16
                }, {
                    xp: 10,
                    partType: "clothing",
                    part: 16
                }, {
                    xp: 10,
                    partType: "item",
                    part: 16
                }, {
                    xp: 10,
                    partType: "clothing",
                    part: 17
                }, {
                    xp: 10,
                    partType: "clothing",
                    part: 18
                }, {
                    xp: 10,
                    partType: "clothing",
                    part: 19
                }, {
                    xp: 10,
                    partType: "hat",
                    part: 17
                }, {
                    xp: 10,
                    partType: "clothing",
                    part: 20
                }, {
                    xp: 10,
                    partType: "hat",
                    part: 18
                }, {
                    xp: 10,
                    partType: "hat",
                    part: 19
                }, {
                    xp: 10,
                    partType: "clothing",
                    part: 21
                }, {
                    xp: 20,
                    partType: "clothing",
                    part: 22
                }, {
                    xp: 20,
                    partType: "hat",
                    part: 20
                }, {
                    xp: 20,
                    partType: "item",
                    part: 17
                }, {
                    xp: 20,
                    partType: "clothing",
                    part: 23
                }, {
                    xp: 20,
                    partType: "hat",
                    part: 21
                }, {
                    xp: 20,
                    partType: "clothing",
                    part: 24
                }, {
                    xp: 20,
                    partType: "glasses",
                    part: 10
                }, {
                    xp: 20,
                    partType: "clothing",
                    part: 25
                }, {
                    xp: 20,
                    partType: "glasses",
                    part: 11
                }, {
                    xp: 20,
                    partType: "glasses",
                    part: 12
                }, {
                    xp: 25,
                    partType: "clothing",
                    part: 26
                }, {
                    xp: 25,
                    partType: "item",
                    part: 18
                }, {
                    xp: 25,
                    partType: "hat",
                    part: 22
                }, {
                    xp: 25,
                    partType: "glasses",
                    part: 13
                }, {
                    xp: 25,
                    partType: "clothing",
                    part: 27
                }, {
                    xp: 25,
                    partType: "hat",
                    part: 23
                }, {
                    xp: 25,
                    partType: "glasses",
                    part: 14
                }, {
                    xp: 25,
                    partType: "hat",
                    part: 24
                }, {
                    xp: 25,
                    partType: "item",
                    part: 19
                }, {
                    xp: 25,
                    partType: "clothing",
                    part: 28
                }, {
                    xp: 40,
                    partType: "hat",
                    part: 25
                }, {
                    xp: 40,
                    partType: "clothing",
                    part: 29
                }, {
                    xp: 40,
                    partType: "clothing",
                    part: 30
                }, {
                    xp: 40,
                    partType: "hat",
                    part: 26
                }, {
                    xp: 40,
                    partType: "clothing",
                    part: 31
                }, {
                    xp: 40,
                    partType: "hat",
                    part: 27
                }, {
                    xp: 40,
                    partType: "item",
                    part: 20
                }, {
                    xp: 40,
                    partType: "clothing",
                    part: 32
                }, {
                    xp: 40,
                    partType: "hat",
                    part: 28
                }, {
                    xp: 40,
                    partType: "item",
                    part: 21
                }, {
                    xp: 50,
                    partType: "item",
                    part: 22
                }, {
                    xp: 50,
                    partType: "hat",
                    part: 29
                }, {
                    xp: 50,
                    partType: "clothing",
                    part: 33
                }, {
                    xp: 50,
                    partType: "cheeks",
                    part: 5
                }, {
                    xp: 50,
                    partType: "item",
                    part: 23
                }, {
                    xp: 50,
                    partType: "item",
                    part: 24
                }, {
                    xp: 50,
                    partType: "clothing",
                    part: 34
                }, {
                    xp: 50,
                    partType: "hat",
                    part: 30
                }, {
                    xp: 50,
                    partType: "item",
                    part: 25
                }, {
                    xp: 50,
                    partType: "item",
                    part: 26
                }, {
                    xp: 60,
                    partType: "eyes",
                    part: 12
                }, {
                    xp: 60,
                    partType: "eyebrows",
                    part: 6
                }, {
                    xp: 60,
                    partType: "clothing",
                    part: 35
                }, {
                    xp: 60,
                    partType: "mouth",
                    part: 12
                }, {
                    xp: 60,
                    partType: "item",
                    part: 27
                }, {
                    xp: 60,
                    partType: "eyebrows",
                    part: 7
                }, {
                    xp: 60,
                    partType: "hair",
                    part: 13
                }, {
                    xp: 60,
                    partType: "clothing",
                    part: 36
                }, {
                    xp: 60,
                    partType: "mouth",
                    part: 13
                }, {
                    xp: 60,
                    partType: "hair",
                    part: 14
                }, {
                    xp: 65,
                    partType: "hat",
                    part: 31
                }, {
                    xp: 65,
                    partType: "mouth",
                    part: 14
                }, {
                    xp: 65,
                    partType: "nose",
                    part: 7
                }, {
                    xp: 65,
                    partType: "cheeks",
                    part: 6
                }, {
                    xp: 65,
                    partType: "clothing",
                    part: 37
                }, {
                    xp: 65,
                    partType: "hair",
                    part: 15
                }, {
                    xp: 65,
                    partType: "eyebrows",
                    part: 8
                }, {
                    xp: 65,
                    partType: "item",
                    part: 28
                }, {
                    xp: 65,
                    partType: "hair",
                    part: 16
                }, {
                    xp: 65,
                    partType: "mouth",
                    part: 15
                }, {
                    xp: 75,
                    partType: "clothing",
                    part: 38
                }, {
                    xp: 75,
                    partType: "glasses",
                    part: 15
                }, {
                    xp: 75,
                    partType: "eyes",
                    part: 13
                }, {
                    xp: 75,
                    partType: "eyebrows",
                    part: 9
                }, {
                    xp: 75,
                    partType: "hair",
                    part: 17
                }, {
                    xp: 75,
                    partType: "mouth",
                    part: 16
                }, {
                    xp: 75,
                    partType: "item",
                    part: 29
                }, {
                    xp: 75,
                    partType: "clothing",
                    part: 39
                }, {
                    xp: 75,
                    partType: "hat",
                    part: 32
                }, {
                    xp: 75,
                    partType: "clothing",
                    part: 40
                }, {
                    xp: 100,
                    partType: "hat",
                    part: 33
                }, {
                    xp: 100,
                    partType: "hat",
                    part: 34
                }, {
                    xp: 100,
                    partType: "mouth",
                    part: 17
                }, {
                    xp: 100,
                    partType: "item",
                    part: 30
                }, {
                    xp: 100,
                    partType: "clothing",
                    part: 41
                }, {
                    xp: 100,
                    partType: "clothing",
                    part: 42
                }, {
                    xp: 100,
                    partType: "hat",
                    part: 35
                }, {
                    xp: 100,
                    partType: "item",
                    part: 31
                }, {
                    xp: 100,
                    partType: "clothing",
                    part: 43
                }, {
                    xp: 100,
                    partType: "hat",
                    part: 36
                }, {
                    xp: 100,
                    partType: "glasses",
                    part: 16
                }],
                o = function(e) {
                    var a = Math.min(e, 4595),
                        t = 0;
                    return s.forEach((function(e) {
                        a - e.xp >= 0 && (t += 1, a -= e.xp)
                    })), {
                        level: t,
                        xp: a
                    }
                }
        },
        "KkQ+": function(e, a, t) {
            var s = t("QB78");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        KpTr: function(e, a, t) {
            var s = t("//Pr");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        McVc: function(e, a, t) {
            var s = t("CPuq");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        NTuM: function(e, a, t) {
            var s = t("4/Tn");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        NoTM: function(e, a, t) {
            var s = t("Q8Bf");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        OI9K: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__blookContainer___36LK2-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;position:relative;display:flex;justify-content:flex-end}.styles__spookyGhost___1VxWJ-camelCase{animation:styles__ghostShake___18dP5-camelCase 2s linear 0s infinite alternate}@keyframes styles__ghostShake___18dP5-camelCase{0%{transform:translateY(0)}to{transform:translateY(-7.5%)}}.styles__blook___1R6So-camelCase{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__santaHat___RZX9l-camelCase{position:absolute;bottom:75.5%;left:55%;width:50%;transform:translate(-50%) rotate(-5deg)}.styles__timsCow___r9aN7-camelCase{position:absolute;bottom:37.5%;left:50.25%;width:20%;transform:translate(-50%,50%);transform-origin:50% 55%;animation:styles__timsCowSpin___16EM--camelCase 3s linear 0s infinite}@keyframes styles__timsCowSpin___16EM--camelCase{0%{transform:translate(-50%,50%) rotate(0deg)}50%{transform:translate(-50%,50%) rotate(180deg)}to{transform:translate(-50%,50%) rotate(1turn)}}.styles__phantomSword___3gNaG-camelCase{position:absolute;bottom:0;right:-10%;width:42.5%;transform:rotate(25deg);animation:styles__phantomSwordMove___2b5y5-camelCase 1.5s linear 0s infinite}@keyframes styles__phantomSwordMove___2b5y5-camelCase{0%{transform:rotate(25deg) translateY(0)}50%{transform:rotate(25deg) translateY(-15%)}to{transform:rotate(25deg) translateY(0)}}.styles__astro1___3f5Wp-camelCase,.styles__astro2___2s1LW-camelCase,.styles__astro3___2LcHF-camelCase,.styles__astro4___LJ9b1-camelCase,.styles__astro5___3aaY7-camelCase,.styles__astro6___1kB-r-camelCase{position:absolute}.styles__astro1___3f5Wp-camelCase{animation:styles__astro1___3f5Wp-camelCase 4s linear infinite}@keyframes styles__astro1___3f5Wp-camelCase{0%{opacity:1}8.33%{opacity:0}16.67%{opacity:0}25%{opacity:0}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:0}83.33%{opacity:0}91.67%{opacity:0}to{opacity:1}}.styles__astro2___2s1LW-camelCase{animation:styles__astro2___2s1LW-camelCase 4s linear infinite}@keyframes styles__astro2___2s1LW-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:0}25%{opacity:0}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:0}83.33%{opacity:0}91.67%{opacity:1}to{opacity:1}}.styles__astro3___2LcHF-camelCase{animation:styles__astro3___2LcHF-camelCase 4s linear infinite}@keyframes styles__astro3___2LcHF-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:0}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:0}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}.styles__astro4___LJ9b1-camelCase{animation:styles__astro4___LJ9b1-camelCase 4s linear infinite}@keyframes styles__astro4___LJ9b1-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:1}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:1}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}.styles__astro5___3aaY7-camelCase{animation:styles__astro5___3aaY7-camelCase 4s linear infinite}@keyframes styles__astro5___3aaY7-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:1}33.33%{opacity:1}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:1}75%{opacity:1}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}.styles__astro6___1kB-r-camelCase{animation:styles__astro6___1kB-r-camelCase 4s linear infinite}@keyframes styles__astro6___1kB-r-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:1}33.33%{opacity:1}41.67%{opacity:1}50%{opacity:0}58.33%{opacity:1}66.67%{opacity:1}75%{opacity:1}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}", ""]), a.locals = {
                blookContainer: "styles__blookContainer___36LK2-camelCase",
                spookyGhost: "styles__spookyGhost___1VxWJ-camelCase",
                ghostShake: "styles__ghostShake___18dP5-camelCase",
                blook: "styles__blook___1R6So-camelCase",
                santaHat: "styles__santaHat___RZX9l-camelCase",
                timsCow: "styles__timsCow___r9aN7-camelCase",
                timsCowSpin: "styles__timsCowSpin___16EM--camelCase",
                phantomSword: "styles__phantomSword___3gNaG-camelCase",
                phantomSwordMove: "styles__phantomSwordMove___2b5y5-camelCase",
                astro1: "styles__astro1___3f5Wp-camelCase",
                astro2: "styles__astro2___2s1LW-camelCase",
                astro3: "styles__astro3___2LcHF-camelCase",
                astro4: "styles__astro4___LJ9b1-camelCase",
                astro5: "styles__astro5___3aaY7-camelCase",
                astro6: "styles__astro6___1kB-r-camelCase"
            }
        },
        PL6v: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, '.styles__header___2fYsr-camelCase{background-color:#9a49aa;width:100vw;height:65px;margin:0;padding:auto;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;justify-content:flex-end;z-index:10;overflow:hidden;position:absolute;top:0;left:0}.styles__expandIcon___2-Oui-camelCase{font-size:28px;color:#fff;text-align:left;line-height:65px;position:absolute;left:20px;cursor:pointer;outline:none}.styles__headerTextCenter___2Vw2--camelCase{font-size:38px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Titan One,sans-serif}.styles__headerRight___28epw-camelCase,.styles__headerTextCenter___2Vw2--camelCase{color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerRight___28epw-camelCase{font-size:24px;font-weight:700;font-family:Nunito,sans-serif;text-align:right;text-decoration:underline;line-height:65px;padding-right:40px;cursor:pointer;outline:none;transition:all .4s cubic-bezier(.39,.5,.15,1.36)}.styles__headerRight___28epw-camelCase:hover{transform:scale(1.05)}.styles__again___3tJQu-camelCase{font-size:32px;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;text-decoration:none;position:absolute;top:20px;right:25px;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:0;transition:transform .4s cubic-bezier(.39,.5,.15,1.36);animation:styles__fadeIn___3NOll-camelCase .5s linear 5.5s forwards}.styles__again___3tJQu-camelCase:hover{transform:scale(1.05)}@keyframes styles__fadeIn___3NOll-camelCase{0%{opacity:0}to{opacity:1}}.styles__placeText___1iW_M-camelCase{text-align:right;width:2.6vw;height:5vw;top:.5vw;left:.75vw}.styles__placeText___1iW_M-camelCase,.styles__superPlaceText___ib8cq-camelCase{position:absolute;font-family:Titan One,sans-serif;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;float:left}.styles__superPlaceText___ib8cq-camelCase{text-align:center;top:.75vw;left:3.45vw;height:1.7vw;width:1.85vw;text-align:left}.styles__containerOne___6IQSF-camelCase{position:absolute;height:calc(85vh - 65px);width:25vw;top:105vh;left:37.5vw;border-radius:10px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__slideUp___2Bror-camelCase .35s linear 4.75s forwards}@keyframes styles__slideUp___2Bror-camelCase{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - 12vh - 3vw))}}.styles__nameTextOne___1BI1W-camelCase{height:12.5vh;top:2vh;font-family:Titan One,sans-serif}.styles__nameTextOne___1BI1W-camelCase,.styles__scoreTextOne___1gq0L-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextOne___1gq0L-camelCase{height:7.5vh;top:17vh;font-family:Nunito,sans-serif;font-weight:700}.styles__firstBlook___nxabn-camelCase{position:absolute;top:calc(100% - 22vw);left:50%;transform:translateX(-50%);height:20.7vw;width:18vw}.styles__placeOne___IH_So-camelCase{opacity:0;height:6vw;width:6vw;top:-3vw;right:-4.5vw;color:#fff;background-color:#ffe900;animation:styles__fadeIn___3NOll-camelCase .25s linear 5.1s forwards}.styles__containerTwo___20f21-camelCase,.styles__placeOne___IH_So-camelCase{position:absolute;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__containerTwo___20f21-camelCase{height:calc(67.5vh - 65px);width:25vw;top:105vh;left:7.5vw;background-color:#fff;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__slideUp___2Bror-camelCase .35s linear 2.75s forwards}.styles__nameTextTwo___sO639-camelCase{height:10vh;top:2vh;font-family:Titan One,sans-serif}.styles__nameTextTwo___sO639-camelCase,.styles__scoreTextTwo___3RnL0-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextTwo___3RnL0-camelCase{height:6vh;top:13.5vh;font-family:Nunito,sans-serif;font-weight:700}.styles__secondBlook___1Is9n-camelCase{position:absolute;top:calc(100% - 16.94vw);left:50%;transform:translateX(-50%);height:15.64vw;width:13.6vw}.styles__placeTwo___3tpD8-camelCase{opacity:0;height:6vw;width:6vw;top:-3vw;right:-4.5vw;color:#fff;background-color:#818181;animation:styles__fadeIn___3NOll-camelCase .25s linear 3.1s forwards}.styles__containerThree___2KgAT-camelCase,.styles__placeTwo___3tpD8-camelCase{position:absolute;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__containerThree___2KgAT-camelCase{height:calc(55vh - 65px);width:25vw;top:105vh;left:67.5vw;background-color:#fff;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__slideUp___2Bror-camelCase .35s linear 1.5s forwards}.styles__nameTextThree___3unIe-camelCase{height:8.5vh;top:2vh;font-family:Titan One,sans-serif}.styles__nameTextThree___3unIe-camelCase,.styles__scoreTextThree___5Qlk8-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextThree___5Qlk8-camelCase{height:5vh;top:11.75vh;font-family:Nunito,sans-serif;font-weight:700}.styles__thirdBlook___3qZV6-camelCase{position:absolute;top:calc(100% - 11.995vw);left:50%;transform:translateX(-50%);height:10.695vw;width:9.3vw}.styles__placeThree___3ao7I-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#cd7f32;box-shadow:0 0 8px 3px rgba(0,0,0,.2);animation:styles__fadeIn___3NOll-camelCase .25s linear 1.9s forwards}.styles__standingsArray___5sYnN-camelCase{position:absolute;top:96vh;left:10vw;width:80vw;padding:1vh 0 4vh;justify-content:center;opacity:0;animation:styles__fadeIn___3NOll-camelCase .4s linear 5.5s forwards}.styles__standingHolder___2FRKC-camelCase,.styles__standingsArray___5sYnN-camelCase{display:flex;flex-direction:column}.styles__standingHolder___2FRKC-camelCase{width:100%;margin:12.5px auto}.styles__standingContainer___2jBqj-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#3a3a3a;display:flex;flex-direction:row;height:70px;width:100%}.styles__standingPlaceText___3ZrA7-camelCase{padding-left:10px;min-width:60px;line-height:70px;font-size:45px;text-align:right}.styles__standingPlaceText___3ZrA7-camelCase,.styles__standingSuperPlaceText___zLwPT-camelCase{font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingSuperPlaceText___zLwPT-camelCase{text-align:left;width:22px;font-size:22px;margin-top:8px;margin-left:2px;margin-right:10px}.styles__standingBlook___1w5m9-camelCase{height:57.5px;width:50px;margin:6.25px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingNameText___10lKu-camelCase{margin-left:12px;font-size:36px;text-align:left;flex-grow:1}.styles__standingNameText___10lKu-camelCase,.styles__standingStatText___2Sr7c-camelCase{font-weight:700;line-height:70px;font-family:Nunito,sans-serif}.styles__standingStatText___2Sr7c-camelCase{font-size:32px;text-align:right;margin-right:20px}.styles__standingPlayerContainer___1vrDb-camelCase{margin:-2vh auto 0;padding-top:3vh;min-height:8vh;width:90%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;z-index:-1}.styles__playerText___SmxK2-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;font-weight:700;font-size:2vw;margin:auto 20px;text-align:left}.styles__containerInside___315sX-camelCase{position:absolute;width:calc(100% - 20px);height:calc(100% - 20px);top:10px;left:10px;box-sizing:border-box}.styles__spookyContainer___2hJWg-camelCase{background-color:#73657b;color:#fff}.styles__spookyInside___aJnTn-camelCase{border:5px solid #a299ac;background-color:#8d7995}.styles__winterContainer1___1vRnZ-camelCase{background-color:#f23941;color:#fff}.styles__winterInside1___2r_eh-camelCase{border:5px solid #fff;background-color:#f23941}.styles__winterContainer2___1BIC7-camelCase{background-color:#0cb04a;color:#fff}.styles__winterInside2___3daA2-camelCase{border:5px solid #fff;background-color:#0cb04a}.styles__royalBackground___1STe6-camelCase{background-size:74.5px}.styles__royalContainer___3nNWd-camelCase{background-color:#d52423;color:#fff}.styles__royalInside___3NKGa-camelCase{border:5px solid #ffd329;background-color:#d52423}.styles__cafeContainer___1AX7c-camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 .6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);color:#fff}.styles__fishContainer___26qev-camelCase{background-color:#ff751a;color:#fff}.styles__fishInside___3EX6V-camelCase{border:5px solid #fff;background-color:#ff751a;border-radius:5px}.styles__rushContainer___3Up3E-camelCase{background-color:#36c;color:#fff}.styles__rushInside___IC-YE-camelCase{border:5px solid #fff;background-color:#36c;border-radius:5px}.styles__brawlContainer___yveeP-camelCase{background-color:#374154;color:#fff}.styles__hackContainer___3IVg6-camelCase{border:5px solid rgba(128,255,128,.8);background-color:#000;color:rgba(128,255,128,.8);text-shadow:0 0 1px rgba(51,255,51,.4),0 0 2px hsla(0,0%,100%,.8)}.styles__noise___29VJC-camelCase{background-image:url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;z-index:-1;opacity:.02}.styles__noise___29VJC-camelCase,.styles__overlay___37SHX-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.styles__overlay___37SHX-camelCase{background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}.styles__overlay___37SHX-camelCase:before{content:"";pointer-events:none;position:absolute;display:block;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient(0deg,transparent,rgba(32,128,32,.2) 2%,rgba(32,128,32,.8) 3%,rgba(32,128,32,.2) 0,transparent);background-repeat:no-repeat;background-position:0 -100vh;animation:styles__scan___e3OXW-camelCase 7.5s linear 12.5s infinite}@keyframes styles__scan___e3OXW-camelCase{0%{background-position:0 -100vh}35%,to{background-position:0 100vh}}', ""]), a.locals = {
                header: "styles__header___2fYsr-camelCase",
                expandIcon: "styles__expandIcon___2-Oui-camelCase",
                headerTextCenter: "styles__headerTextCenter___2Vw2--camelCase",
                headerRight: "styles__headerRight___28epw-camelCase",
                again: "styles__again___3tJQu-camelCase",
                fadeIn: "styles__fadeIn___3NOll-camelCase",
                placeText: "styles__placeText___1iW_M-camelCase",
                superPlaceText: "styles__superPlaceText___ib8cq-camelCase",
                containerOne: "styles__containerOne___6IQSF-camelCase",
                slideUp: "styles__slideUp___2Bror-camelCase",
                nameTextOne: "styles__nameTextOne___1BI1W-camelCase",
                scoreTextOne: "styles__scoreTextOne___1gq0L-camelCase",
                firstBlook: "styles__firstBlook___nxabn-camelCase",
                placeOne: "styles__placeOne___IH_So-camelCase",
                containerTwo: "styles__containerTwo___20f21-camelCase",
                nameTextTwo: "styles__nameTextTwo___sO639-camelCase",
                scoreTextTwo: "styles__scoreTextTwo___3RnL0-camelCase",
                secondBlook: "styles__secondBlook___1Is9n-camelCase",
                placeTwo: "styles__placeTwo___3tpD8-camelCase",
                containerThree: "styles__containerThree___2KgAT-camelCase",
                nameTextThree: "styles__nameTextThree___3unIe-camelCase",
                scoreTextThree: "styles__scoreTextThree___5Qlk8-camelCase",
                thirdBlook: "styles__thirdBlook___3qZV6-camelCase",
                placeThree: "styles__placeThree___3ao7I-camelCase",
                standingsArray: "styles__standingsArray___5sYnN-camelCase",
                standingHolder: "styles__standingHolder___2FRKC-camelCase",
                standingContainer: "styles__standingContainer___2jBqj-camelCase",
                standingPlaceText: "styles__standingPlaceText___3ZrA7-camelCase",
                standingSuperPlaceText: "styles__standingSuperPlaceText___zLwPT-camelCase",
                standingBlook: "styles__standingBlook___1w5m9-camelCase",
                standingNameText: "styles__standingNameText___10lKu-camelCase",
                standingStatText: "styles__standingStatText___2Sr7c-camelCase",
                standingPlayerContainer: "styles__standingPlayerContainer___1vrDb-camelCase",
                playerText: "styles__playerText___SmxK2-camelCase",
                containerInside: "styles__containerInside___315sX-camelCase",
                spookyContainer: "styles__spookyContainer___2hJWg-camelCase",
                spookyInside: "styles__spookyInside___aJnTn-camelCase",
                winterContainer1: "styles__winterContainer1___1vRnZ-camelCase",
                winterInside1: "styles__winterInside1___2r_eh-camelCase",
                winterContainer2: "styles__winterContainer2___1BIC7-camelCase",
                winterInside2: "styles__winterInside2___3daA2-camelCase",
                royalBackground: "styles__royalBackground___1STe6-camelCase",
                royalContainer: "styles__royalContainer___3nNWd-camelCase",
                royalInside: "styles__royalInside___3NKGa-camelCase",
                cafeContainer: "styles__cafeContainer___1AX7c-camelCase",
                fishContainer: "styles__fishContainer___26qev-camelCase",
                fishInside: "styles__fishInside___3EX6V-camelCase",
                rushContainer: "styles__rushContainer___3Up3E-camelCase",
                rushInside: "styles__rushInside___IC-YE-camelCase",
                brawlContainer: "styles__brawlContainer___yveeP-camelCase",
                hackContainer: "styles__hackContainer___3IVg6-camelCase",
                noise: "styles__noise___29VJC-camelCase",
                overlay: "styles__overlay___37SHX-camelCase",
                scan: "styles__scan___e3OXW-camelCase"
            }
        },
        POi4: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("6D46"),
                c = t.n(_),
                m = t("LHn/"),
                p = t("2Euj"),
                d = t("74sb"),
                u = function(e) {
                    var a = e.mode,
                        t = e.amount;
                    return o.a.createElement("div", {
                        className: c.a.container,
                        style: {
                            backgroundImage: "radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url(".concat(m.a.dino.paperTexture, ")")
                        }
                    }, o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n1),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, "Answer Questions")
                    }), o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n2),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, "Excavate or Investigate")
                    }), o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n3),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, "Excavate: Choose rocks to collect fossils")
                    }), o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n4),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, 'You can also "Cheat" to see inside the rocks')
                    }), o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n5),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, "Investigate: Check if a player is cheating")
                    }), o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n6),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, "If you catch a cheater, you'll take some of their fossils")
                    }), o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n7),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, "Time" === a ? "Most fossils after ".concat(Object(d.l)(t), " ").concat("1" === t ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(d.l)(t), " Fossils wins!"))
                    }), o.a.createElement(p.a, {
                        className: i()(c.a.text, c.a.n8),
                        content: o.a.createElement("div", {
                            className: c.a.textInside
                        }, "Good Luck!")
                    }))
                };
            u.propTypes = {
                mode: l.a.string,
                amount: l.a.any
            }, a.a = u
        },
        Q8Bf: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__header___18Vr4-camelCase{background-color:#9a49aa;width:100vw;height:65px;margin:0;padding:auto;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;justify-content:flex-end;z-index:10;overflow:hidden;position:absolute;top:0;left:0}.styles__expandIcon___3jWD8-camelCase{font-size:28px;color:#fff;text-align:left;line-height:65px;position:absolute;left:20px;cursor:pointer;outline:none}.styles__headerTextCenter___1_g2X-camelCase{font-size:38px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Titan One,sans-serif}.styles__headerRight___1NyBY-camelCase,.styles__headerTextCenter___1_g2X-camelCase{color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerRight___1NyBY-camelCase{font-size:24px;font-weight:700;text-align:right;text-decoration:underline;line-height:65px;padding-right:40px;font-family:Nunito,sans-serif;cursor:pointer;outline:none;transition:all .4s cubic-bezier(.39,.5,.15,1.36)}.styles__headerRight___1NyBY-camelCase:hover{transform:scale(1.05)}.styles__again___3RPk--camelCase{font-size:32px;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;text-decoration:none;position:absolute;top:20px;right:25px;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:0;transition:transform .4s cubic-bezier(.39,.5,.15,1.36);animation:styles__fadeIn___1dl0p-camelCase .5s linear 5.5s forwards}.styles__again___3RPk--camelCase:hover{transform:scale(1.05)}@keyframes styles__fadeIn___1dl0p-camelCase{0%{opacity:0}to{opacity:1}}.styles__placeText___3J_SM-camelCase{text-align:right;width:2.6vw;height:5vw;top:.5vw;left:.75vw}.styles__placeText___3J_SM-camelCase,.styles__superPlaceText___x5xZF-camelCase{position:absolute;font-family:Titan One,sans-serif;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;float:left}.styles__superPlaceText___x5xZF-camelCase{text-align:center;top:.75vw;left:3.45vw;height:1.7vw;width:1.85vw;text-align:left}.styles__containerOne___2Og1Z-camelCase{position:absolute!important;height:calc(85vh - 65px);width:25vw;top:105vh;left:37.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__slideUp___3M3uk-camelCase .35s linear 4.75s forwards}@keyframes styles__slideUp___3M3uk-camelCase{0%{transform:translateY(0)}to{transform:translateY(calc(-100% - 12vh - 3vw))}}.styles__dino___2_v3j-camelCase{width:100%;height:100%}.styles__nameTextOne___39tjM-camelCase{height:12.5vh;top:2vh;font-weight:700}.styles__nameTextOne___39tjM-camelCase,.styles__scoreTextOne___1Eejl-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextOne___1Eejl-camelCase{height:7.5vh;top:17vh}.styles__firstBlook___NAvyb-camelCase{position:absolute;top:calc(100% - 22vw);left:50%;transform:translateX(-50%);height:20.7vw;width:18vw}.styles__placeOne___1YPAe-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#ffe900;box-shadow:0 0 8px 3px rgba(0,0,0,.2);animation:styles__fadeIn___1dl0p-camelCase .25s linear 5.1s forwards}.styles__containerTwo___ZwdST-camelCase{position:absolute!important;height:calc(67.5vh - 65px);width:25vw;top:105vh;left:7.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__slideUp___3M3uk-camelCase .35s linear 2.75s forwards}.styles__nameTextTwo___HL-t--camelCase{height:10vh;top:2vh;font-weight:700}.styles__nameTextTwo___HL-t--camelCase,.styles__scoreTextTwo___c3cXr-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextTwo___c3cXr-camelCase{height:6vh;top:13.5vh}.styles__secondBlook___3GCEF-camelCase{position:absolute;top:calc(100% - 16.94vw);left:50%;transform:translateX(-50%);height:15.64vw;width:13.6vw}.styles__placeTwo___3nwWM-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#818181;box-shadow:0 0 8px 3px rgba(0,0,0,.2);animation:styles__fadeIn___1dl0p-camelCase .25s linear 3.1s forwards}.styles__containerThree___2XocF-camelCase{position:absolute!important;height:calc(55vh - 65px);width:25vw;top:105vh;left:67.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__slideUp___3M3uk-camelCase .35s linear 1.5s forwards}.styles__nameTextThree___Ry7xl-camelCase{height:8.5vh;top:2vh;font-weight:700}.styles__nameTextThree___Ry7xl-camelCase,.styles__scoreTextThree___3WuQ2-camelCase{position:absolute;text-align:center;width:20vw;left:50%;transform:translateX(-50%);overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__scoreTextThree___3WuQ2-camelCase{height:5vh;top:11.75vh}.styles__thirdBlook___21CDM-camelCase{position:absolute;top:calc(100% - 11.995vw);left:50%;transform:translateX(-50%);height:10.695vw;width:9.3vw}.styles__placeThree___vtIfj-camelCase{opacity:0;position:absolute;height:6vw;width:6vw;top:-3vw;right:-4.5vw;border-radius:10px;color:#fff;background-color:#cd7f32;box-shadow:0 0 8px 3px rgba(0,0,0,.2);animation:styles__fadeIn___1dl0p-camelCase .25s linear 1.9s forwards}.styles__standingsArray___3qw_H-camelCase{position:absolute;top:96vh;left:10vw;width:80vw;padding:1vh 0 4vh;justify-content:center;opacity:0;animation:styles__fadeIn___1dl0p-camelCase .4s linear 5.5s forwards}.styles__standingHolder___3pwph-camelCase,.styles__standingsArray___3qw_H-camelCase{display:flex;flex-direction:column}.styles__standingHolder___3pwph-camelCase{width:100%;margin:12.5px auto}.styles__standingContainer___1Xld--camelCase{display:flex;flex-direction:row;height:70px;width:100%}.styles__standingPlaceText___2JGMQ-camelCase{padding-left:10px;min-width:60px;line-height:70px;font-size:45px;text-align:right}.styles__standingPlaceText___2JGMQ-camelCase,.styles__standingSuperPlaceText___Wk4Ox-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingSuperPlaceText___Wk4Ox-camelCase{text-align:left;width:22px;font-size:22px;margin-top:8px;margin-left:2px;margin-right:10px}.styles__standingBlook___SfoyH-camelCase{height:57.5px;width:50px;margin:6.25px 10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__standingNameText___1c4eO-camelCase{font-weight:700;margin-left:12px;line-height:70px;font-size:36px;text-align:left;flex-grow:1}.styles__standingStatText___2U7ds-camelCase{font-size:32px;font-weight:700;line-height:70px;text-align:right;margin-right:20px}", ""]), a.locals = {
                header: "styles__header___18Vr4-camelCase",
                expandIcon: "styles__expandIcon___3jWD8-camelCase",
                headerTextCenter: "styles__headerTextCenter___1_g2X-camelCase",
                headerRight: "styles__headerRight___1NyBY-camelCase",
                again: "styles__again___3RPk--camelCase",
                fadeIn: "styles__fadeIn___1dl0p-camelCase",
                placeText: "styles__placeText___3J_SM-camelCase",
                superPlaceText: "styles__superPlaceText___x5xZF-camelCase",
                containerOne: "styles__containerOne___2Og1Z-camelCase",
                slideUp: "styles__slideUp___3M3uk-camelCase",
                dino: "styles__dino___2_v3j-camelCase",
                nameTextOne: "styles__nameTextOne___39tjM-camelCase",
                scoreTextOne: "styles__scoreTextOne___1Eejl-camelCase",
                firstBlook: "styles__firstBlook___NAvyb-camelCase",
                placeOne: "styles__placeOne___1YPAe-camelCase",
                containerTwo: "styles__containerTwo___ZwdST-camelCase",
                nameTextTwo: "styles__nameTextTwo___HL-t--camelCase",
                scoreTextTwo: "styles__scoreTextTwo___c3cXr-camelCase",
                secondBlook: "styles__secondBlook___3GCEF-camelCase",
                placeTwo: "styles__placeTwo___3nwWM-camelCase",
                containerThree: "styles__containerThree___2XocF-camelCase",
                nameTextThree: "styles__nameTextThree___Ry7xl-camelCase",
                scoreTextThree: "styles__scoreTextThree___3WuQ2-camelCase",
                thirdBlook: "styles__thirdBlook___21CDM-camelCase",
                placeThree: "styles__placeThree___vtIfj-camelCase",
                standingsArray: "styles__standingsArray___3qw_H-camelCase",
                standingHolder: "styles__standingHolder___3pwph-camelCase",
                standingContainer: "styles__standingContainer___1Xld--camelCase",
                standingPlaceText: "styles__standingPlaceText___2JGMQ-camelCase",
                standingSuperPlaceText: "styles__standingSuperPlaceText___Wk4Ox-camelCase",
                standingBlook: "styles__standingBlook___SfoyH-camelCase",
                standingNameText: "styles__standingNameText___1c4eO-camelCase",
                standingStatText: "styles__standingStatText___2U7ds-camelCase"
            }
        },
        QB78: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__slow___ZjmVE-camelCase{font-size:7vw;text-align:center;color:#3a3a3a;text-shadow:2px 2px 8px #3a3a3a;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;z-index:11;animation:styles__slowMo___lWOT8-camelCase 3s linear}@keyframes styles__slowMo___lWOT8-camelCase{0%{opacity:0;transform:translate(-50%,-50%)}25%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}45%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}55%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}75%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}to{opacity:0;transform:translate(-50%,-50%)}}@media only screen and (max-width:600px){.styles__slow___ZjmVE-camelCase{font-size:6vh}}", ""]), a.locals = {
                slow: "styles__slow___ZjmVE-camelCase",
                slowMo: "styles__slowMo___lWOT8-camelCase"
            }
        },
        QjaI: function(e, a, t) {
            var s = t("9WNt");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        RnhZ: function(e, a, t) {
            var s = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bm": "p/rL",
                "./bm.js": "p/rL",
                "./bn": "kEOa",
                "./bn-bd": "loYQ",
                "./bn-bd.js": "loYQ",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-il": "czMo",
                "./en-il.js": "czMo",
                "./en-in": "7C5Q",
                "./en-in.js": "7C5Q",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./en-sg": "t+mt",
                "./en-sg.js": "t+mt",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es-mx": "tbfe",
                "./es-mx.js": "tbfe",
                "./es-us": "Vclq",
                "./es-us.js": "Vclq",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fil": "1ppg",
                "./fil.js": "1ppg",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./ga": "USCx",
                "./ga.js": "USCx",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-deva": "qvJo",
                "./gom-deva.js": "qvJo",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./gu": "4MV3",
                "./gu.js": "4MV3",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it-ch": "bxKX",
                "./it-ch.js": "bxKX",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ku": "JCF/",
                "./ku.js": "JCF/",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mn": "lYtQ",
                "./mn.js": "lYtQ",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./mt": "G0Uy",
                "./mt.js": "G0Uy",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./oc-lnc": "Fnuy",
                "./oc-lnc.js": "Fnuy",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./tg": "Oxv6",
                "./tg.js": "Oxv6",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tk": "Wv91",
                "./tk.js": "Wv91",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./ug-cn": "YRex",
                "./ug-cn.js": "YRex",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-mo": "OmwH",
                "./zh-mo.js": "OmwH",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function o(e) {
                var a = r(e);
                return t(a)
            }

            function r(e) {
                if (!t.o(s, e)) {
                    var a = new Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                return s[e]
            }
            o.keys = function() {
                return Object.keys(s)
            }, o.resolve = r, e.exports = o, o.id = "RnhZ"
        },
        TuVA: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___3L0cd-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.styles__container___3L0cd-camelCase,.styles__text___3IxTy-camelCase{position:absolute}.styles__text___3IxTy-camelCase{width:80%;top:50%;left:10%;transform:translateY(-50%);text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:6vw;opacity:0}.styles__n1___UQ6tb-camelCase{animation:styles__fadeIn___3Ac_P-camelCase .15s linear 0ms forwards,styles__fadeOut___202mX-camelCase .15s linear 2.5s forwards}.styles__n2___2i0YB-camelCase{animation:styles__fadeIn___3Ac_P-camelCase .15s linear 2.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 4.5s forwards}.styles__n3___Murts-camelCase{animation:styles__fadeIn___3Ac_P-camelCase .15s linear 4.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 6.5s forwards}.styles__n4___13Ojp-camelCase{animation:styles__fadeIn___3Ac_P-camelCase .15s linear 6.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 9s forwards}.styles__n5___e627H-camelCase{animation:styles__fadeIn___3Ac_P-camelCase .15s linear 9s forwards,styles__fadeOut___202mX-camelCase .15s linear 11.5s forwards}.styles__n6___dz2uu-camelCase{animation:styles__fadeIn___3Ac_P-camelCase .15s linear 11.5s forwards,styles__fadeOut___202mX-camelCase .15s linear 14s forwards}@keyframes styles__fadeIn___3Ac_P-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@keyframes styles__fadeOut___202mX-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}", ""]), a.locals = {
                container: "styles__container___3L0cd-camelCase",
                text: "styles__text___3IxTy-camelCase",
                n1: "styles__n1___UQ6tb-camelCase",
                fadeIn: "styles__fadeIn___3Ac_P-camelCase",
                fadeOut: "styles__fadeOut___202mX-camelCase",
                n2: "styles__n2___2i0YB-camelCase",
                n3: "styles__n3___Murts-camelCase",
                n4: "styles__n4___13Ojp-camelCase",
                n5: "styles__n5___e627H-camelCase",
                n6: "styles__n6___dz2uu-camelCase"
            }
        },
        W0Af: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("McVc"),
                l = t.n(r),
                n = t("74sb"),
                i = [
                    ["What do you call a fake noodle?", "An Im-pasta!"],
                    ["Why can't your nose be 12 inches long?", "Because then it would be a foot!"],
                    ["What kind of cheese isn't yours?", "Nacho cheese!"],
                    ["What do you call a mountain full of cats?", "A meowtain!"],
                    ["How many tickles does it take to make an octopus laugh?", "Ten-tickles!"],
                    ["What kind of room can't you enter?", "A mushroom!"],
                    ["What do you call an alligator in a vest?", "An investigator!"],
                    ["Why did the fish get bad grades?", "Because it was below sea level!"],
                    ["How do you put an alien baby to sleep?", "You rocket!"],
                    ["How do you organize a space party?", "You planet!"],
                    ["Where did the cow take his date?", "The MOOvies!"],
                    ["Why don't seagulls live by the bay?", "Because then they'd be bagels!"],
                    ["What do you call a group of unorganized cats?", "A cat-astrophe!"],
                    ["Have you heard the joke about pizza?", "Never mind, it's too cheesy!"],
                    ["What did the evil chicken lay?", "Deviled eggs!"],
                    ["Why wouldn't the shrimp share his treasure?", "He was a little shellfish!"],
                    ["How do you make a tissue dance?", "You put a little boogie in it!"],
                    ["When does a duck wake up?", "At the quack of dawn!"],
                    ["Why did the chicken cross the road?", "To get to the other side!"],
                    ["Why did the cow cross the road?", "To get to the udder side!"],
                    ["What do you call a cow with no legs?", "Ground Beef!"]
                ];

            function _(e) {
                return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function m(e, a) {
                return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function p(e) {
                var a = function() {
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
                    var t, s = u(e);
                    if (a) {
                        var o = u(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return d(this, t)
                }
            }

            function d(e, a) {
                if (a && ("object" === _(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
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
            var f = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && m(e, a)
                }(_, e);
                var a, t, s, r = p(_);

                function _(e) {
                    var a;
                    ! function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, _), (a = r.call(this, e)).state = {
                        topProgress: "",
                        bottomProgress: ""
                    };
                    var t = Object(n.m)(i);
                    return a.topText = t[0], a.bottomText = t[1], a
                }
                return a = _, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this,
                            a = 0;
                        this.interval = setInterval((function() {
                            a += 1, e.setState({
                                topProgress: e.topText.substring(0, a)
                            }), a === e.topText.length && (clearInterval(e.interval), e.timeout = setTimeout((function() {
                                a = 0, e.interval = setInterval((function() {
                                    a += 1, e.setState({
                                        bottomProgress: e.bottomText.substring(0, a)
                                    }), a === e.bottomText.length && clearInterval(e.interval)
                                }), 1e3 / e.bottomText.length)
                            }), 2e3))
                        }), 2e3 / this.topText.length)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.interval), clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: l.a.container
                        }, this.state.topProgress ? o.a.createElement("div", {
                            className: l.a.text
                        }, this.state.topProgress) : null, this.state.bottomProgress ? o.a.createElement("div", {
                            className: l.a.text,
                            style: {
                                marginTop: 70
                            }
                        }, this.state.bottomProgress) : null)
                    }
                }]) && c(a.prototype, t), s && c(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), _
            }(o.a.Component);
            f.propTypes = {};
            a.a = f
        },
        WTww: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("NTuM"),
                c = t.n(_),
                m = t("0oXL"),
                p = function(e) {
                    var a = e.fish;
                    return o.a.createElement("div", {
                        className: c.a.wrapper
                    }, "Crab" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Crab",
                        className: i()(c.a.crab, c.a.crab1),
                        blookClassName: c.a.crabDance1
                    }), o.a.createElement(m.a, {
                        name: "Crab",
                        className: i()(c.a.crab, c.a.crab2),
                        blookClassName: c.a.crabDance2
                    }), o.a.createElement(m.a, {
                        name: "Crab",
                        className: i()(c.a.crab, c.a.crab3),
                        blookClassName: c.a.crabDance3
                    }), o.a.createElement(m.a, {
                        name: "Crab",
                        className: i()(c.a.crab, c.a.crab4),
                        blookClassName: c.a.crabDance4
                    })) : "Jellyfish" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: i()(c.a.jellyfish, c.a.jellyfish1),
                        blookClassName: c.a.crabDance1
                    }), o.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: i()(c.a.jellyfish, c.a.jellyfish2),
                        blookClassName: c.a.crabDance2
                    }), o.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: i()(c.a.jellyfish, c.a.jellyfish3),
                        blookClassName: c.a.crabDance3
                    }), o.a.createElement(m.a, {
                        name: "Jellyfish",
                        className: i()(c.a.jellyfish, c.a.jellyfish4),
                        blookClassName: c.a.crabDance4
                    })) : "Frog" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Frog",
                        className: i()(c.a.frog, c.a.frog1)
                    }), o.a.createElement(m.a, {
                        name: "Frog",
                        className: i()(c.a.frog, c.a.frog2)
                    }), o.a.createElement(m.a, {
                        name: "Frog",
                        className: i()(c.a.frog, c.a.frog3)
                    }), o.a.createElement(m.a, {
                        name: "Frog",
                        className: i()(c.a.frog, c.a.frog4)
                    })) : "Pufferfish" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish1),
                        blookClassName: c.a.crabDance1
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish2),
                        blookClassName: c.a.crabDance2
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish3),
                        blookClassName: c.a.crabDance3
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish4),
                        blookClassName: c.a.crabDance4
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish5),
                        blookClassName: c.a.crabDance1
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish6),
                        blookClassName: c.a.crabDance2
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish7),
                        blookClassName: c.a.crabDance3
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish8),
                        blookClassName: c.a.crabDance4
                    }), o.a.createElement(m.a, {
                        name: "Pufferfish",
                        className: i()(c.a.pufferfish, c.a.pufferfish9),
                        blookClassName: c.a.crabDance1
                    })) : "Octopus" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Octopus",
                        className: i()(c.a.octopus, c.a.octopus1)
                    }), o.a.createElement(m.a, {
                        name: "Octopus",
                        className: i()(c.a.octopus, c.a.octopus2)
                    }), o.a.createElement(m.a, {
                        name: "Octopus",
                        className: i()(c.a.octopus, c.a.octopus3)
                    }), o.a.createElement(m.a, {
                        name: "Octopus",
                        className: i()(c.a.octopus, c.a.octopus4)
                    }), o.a.createElement(m.a, {
                        name: "Octopus",
                        className: i()(c.a.octopus, c.a.octopus5)
                    }), o.a.createElement(m.a, {
                        name: "Octopus",
                        className: i()(c.a.octopus, c.a.octopus6)
                    }), o.a.createElement(m.a, {
                        name: "Octopus",
                        className: i()(c.a.octopus, c.a.octopus7)
                    })) : "Narwhal" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal1),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal2),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal3),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal4),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal5),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal6),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal7),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal8),
                        blookClassName: c.a.narwhalDance
                    }), o.a.createElement(m.a, {
                        name: "Narwhal",
                        className: i()(c.a.narwhal, c.a.narwhal9),
                        blookClassName: c.a.narwhalDance
                    })) : "Megalodon" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon1)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon2)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon3)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon4)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon5)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon6)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon7)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon8)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon9)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon10)
                    }), o.a.createElement(m.a, {
                        name: "Megalodon",
                        className: i()(c.a.megalodon, c.a.megalodon11)
                    })) : "Blobfish" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Blobfish",
                        className: c.a.blobfish
                    })) : "Baby Shark" === a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark1)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark2)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark3)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark4)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark5)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark6)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark7)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark8)
                    }), o.a.createElement(m.a, {
                        name: "Baby Shark",
                        className: i()(c.a.babyShark, c.a.babyShark9)
                    })) : null)
                };
            p.propTypes = {
                fish: l.a.string
            }, a.a = p
        },
        WWaO: function(e, a, t) {
            "use strict";
            for (var s = t("q1tI"), o = t.n(s), r = t("dqw3"), l = t.n(r), n = t("74sb"), i = t("0oXL"), _ = t("8qja").a ? ["Ghost"] : ["Chick", "Horse", "Chicken", "Dragon", "Cow", "Lil Bot", "Rabbit", "Parrot", "Puppy"], c = [], m = Object(n.o)(-1, 2), p = 0; p < 30; p++)(m += 1) >= 3 && (m = 0), c.push({
                blook: Object(n.m)(_),
                delay: 200 * p - 5e3,
                duration: Object(n.o)(15e3, 2e4),
                left: 2 + Object(n.n)(0, 32) + 30 * m,
                top: 100 + 5 * p,
                scale: Object(n.n)(.5, 1),
                opacity: Object(n.n)(.2, .6)
            });
            var d = function() {
                return o.a.createElement("div", {
                    className: l.a.container
                }, c.map((function(e, a) {
                    return o.a.createElement("div", {
                        key: a,
                        className: l.a.blookContainer,
                        style: {
                            top: "".concat(e.top, "vh"),
                            left: "".concat(e.left, "vw"),
                            animationDuration: "".concat(e.duration, "ms"),
                            animationDelay: "".concat(e.delay, "ms"),
                            opacity: e.opacity
                        }
                    }, o.a.createElement(i.a, {
                        key: a,
                        name: e.blook,
                        className: l.a.blook,
                        style: {
                            transform: "scale(".concat(e.scale, ")")
                        }
                    }))
                })))
            };
            d.propTypes = {}, a.a = d
        },
        Xst1: function(e, a, t) {
            var s = t("sLLB");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        YrOF: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___30JBD-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:7px;border-radius:7px;text-align:center}.styles__container___30JBD-camelCase,.styles__containerInside___25hGm-camelCase{background-color:#d52423;box-sizing:border-box}.styles__containerInside___25hGm-camelCase{border:5px solid #ffd329;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media only screen and (max-width:600px){.styles__container___30JBD-camelCase{width:310px}}.styles__text___1mBM2-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px 15px;color:#fff}.styles__blook___2VOum-camelCase{height:34.5px;width:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 9px -5px 0;display:inline-block}.styles__button___1LCQN-camelCase{border-radius:6px;border:3px solid #fff;background-color:transparent;width:100px;height:45px;padding:0 15px;color:#fff;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;margin:20px auto;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___1LCQN-camelCase:focus,.styles__button___1LCQN-camelCase:hover{font-weight:700}", ""]), a.locals = {
                container: "styles__container___30JBD-camelCase",
                containerInside: "styles__containerInside___25hGm-camelCase",
                text: "styles__text___1mBM2-camelCase",
                blook: "styles__blook___2VOum-camelCase",
                button: "styles__button___1LCQN-camelCase"
            }
        },
        ZNWz: function(e, a, t) {
            var s = {
                "./ion-phaser.entry.js": ["r02Z", 50]
            };

            function o(e) {
                if (!t.o(s, e)) return Promise.resolve().then((function() {
                    var a = new Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }));
                var a = s[e],
                    o = a[0];
                return t.e(a[1]).then((function() {
                    return t(o)
                }))
            }
            o.keys = function() {
                return Object.keys(s)
            }, o.id = "ZNWz", e.exports = o
        },
        ZVoO: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("4HzQ"),
                i = (t("55Ip"), t("TSYQ")),
                _ = t.n(i),
                c = t("Zu/c"),
                m = t("Xst1"),
                p = t.n(m),
                d = t("4kUR"),
                u = t.n(d),
                f = t("0oXL"),
                h = t("74sb");

            function y(e) {
                return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function b(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function v(e, a) {
                return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function x(e) {
                var a = function() {
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
                    var t, s = k(e);
                    if (a) {
                        var o = k(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return C(this, t)
                }
            }

            function C(e, a) {
                if (a && ("object" === y(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
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
            var T = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && v(e, a)
                }(l, e);
                var a, t, s, r = x(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {
                        full: Object(h.i)()
                    }, a.checkResize = a.checkResize.bind(w(a)), a.audio = new Audio(c.a), a
                }
                return a = l, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        window.addEventListener("resize", this.checkResize), this.audio.volume = .7, this.props.muted && (this.audio.muted = !0), this.audioTimeout = setTimeout((function() {
                            e.audio.play()
                        }), 3500)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.checkResize), clearTimeout(this.audioTimeout)
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        this.setState({
                            full: Object(h.i)()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, a, t, s, r, l, i, c, m, d = this,
                            y = "spooky" === this.props.theme,
                            b = "winter" === this.props.theme,
                            v = "royal" === this.props.theme,
                            x = "cafe" === this.props.theme,
                            C = "hack" === this.props.theme,
                            w = "fish" === this.props.theme,
                            k = "rush" === this.props.theme,
                            T = "brawl" === this.props.theme;
                        return o.a.createElement("div", null, o.a.createElement("div", {
                            className: u.a.header
                        }, o.a.createElement("i", {
                            className: _()(u.a.expandIcon, this.state.full ? "fas fa-compress" : "fas fa-expand"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return d.setState({
                                    full: Object(h.u)()
                                })
                            }
                        }), o.a.createElement("div", {
                            className: u.a.headerTextCenter
                        }, "Final Standings"), this.props.historyId ? o.a.createElement("a", {
                            className: u.a.headerRight,
                            href: "".concat("https://dashboard.blooket.com", "/history/game/").concat(this.props.historyId)
                        }, "View Report") : null), o.a.createElement("div", {
                            className: p.a.hostRegularBody
                        }, o.a.createElement("a", {
                            href: "/host?id=".concat(this.props.gameId),
                            className: u.a.again
                        }, "Play Again"), this.props.standings[0] ? o.a.createElement("div", {
                            className: _()(u.a.containerOne, (e = {}, g(e, u.a.spookyContainer, y), g(e, u.a.winterContainer1, b), g(e, u.a.royalContainer, v), g(e, u.a.cafeContainer, x), g(e, u.a.hackContainer, C), g(e, u.a.fishContainer, w), g(e, u.a.rushContainer, k), g(e, u.a.brawlContainer, T), e))
                        }, o.a.createElement("div", {
                            className: _()(u.a.containerInside, (a = {}, g(a, u.a.spookyInside, y), g(a, u.a.winterInside1, b), g(a, u.a.royalInside, v), g(a, u.a.fishInside, w), g(a, u.a.rushInside, k), a))
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.nameTextOne,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("10vw")
                        }, this.props.standings[0].name), o.a.createElement(n.Textfit, {
                            className: u.a.scoreTextOne,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("10vw")
                        }, this.props.stats[0]), o.a.createElement("div", {
                            className: _()(u.a.placeOne, (t = {}, g(t, u.a.spookyContainer, y), g(t, u.a.hackContainer, C), t))
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("5.5vw")
                        }, "1"), o.a.createElement(n.Textfit, {
                            className: u.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("2.5vw")
                        }, "st")), o.a.createElement(f.a, {
                            name: this.props.standings[0].blook,
                            className: u.a.firstBlook
                        }))) : null, this.props.standings[1] ? o.a.createElement("div", {
                            className: _()(u.a.containerTwo, (s = {}, g(s, u.a.spookyContainer, y), g(s, u.a.winterContainer2, b), g(s, u.a.royalContainer, v), g(s, u.a.cafeContainer, x), g(s, u.a.hackContainer, C), g(s, u.a.fishContainer, w), g(s, u.a.rushContainer, k), g(s, u.a.brawlContainer, T), s))
                        }, o.a.createElement("div", {
                            className: _()(u.a.containerInside, (r = {}, g(r, u.a.spookyInside, y), g(r, u.a.winterInside2, b), g(r, u.a.royalInside, v), g(r, u.a.fishInside, w), g(r, u.a.rushInside, k), r))
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.nameTextTwo,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("10vw")
                        }, this.props.standings[1].name), o.a.createElement(n.Textfit, {
                            className: u.a.scoreTextTwo,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("10vw")
                        }, this.props.stats[1]), o.a.createElement("div", {
                            className: _()(u.a.placeTwo, (l = {}, g(l, u.a.spookyContainer, y), g(l, u.a.hackContainer, C), l))
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("5.5vw")
                        }, this.props.standings[1].place), o.a.createElement(n.Textfit, {
                            className: u.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("2.5vw")
                        }, Object(h.e)(this.props.standings[1].place))), o.a.createElement(f.a, {
                            name: this.props.standings[1].blook,
                            className: u.a.secondBlook
                        }))) : null, this.props.standings[2] ? o.a.createElement("div", {
                            className: _()(u.a.containerThree, (i = {}, g(i, u.a.spookyContainer, y), g(i, u.a.winterContainer2, b), g(i, u.a.royalContainer, v), g(i, u.a.cafeContainer, x), g(i, u.a.hackContainer, C), g(i, u.a.fishContainer, w), g(i, u.a.rushContainer, k), g(i, u.a.brawlContainer, T), i))
                        }, o.a.createElement("div", {
                            className: _()(u.a.containerInside, (c = {}, g(c, u.a.spookyInside, y), g(c, u.a.winterInside2, b), g(c, u.a.royalInside, v), g(c, u.a.fishInside, w), g(c, u.a.rushInside, k), c))
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.nameTextThree,
                            mode: "multi",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("10vw")
                        }, this.props.standings[2].name), o.a.createElement(n.Textfit, {
                            className: u.a.scoreTextThree,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("10vw")
                        }, this.props.stats[2]), o.a.createElement("div", {
                            className: _()(u.a.placeThree, (m = {}, g(m, u.a.spookyContainer, y), g(m, u.a.hackContainer, C), m))
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("5.5vw")
                        }, this.props.standings[2].place), o.a.createElement(n.Textfit, {
                            className: u.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(h.v)("2.5vw")
                        }, Object(h.e)(this.props.standings[2].place))), o.a.createElement(f.a, {
                            name: this.props.standings[2].blook,
                            className: u.a.thirdBlook
                        }))) : null, this.props.standings[3] || this.props.team ? o.a.createElement("div", {
                            className: u.a.standingsArray
                        }, this.props.standings.slice(this.props.team ? 0 : 3, this.props.standings.length).map((function(e) {
                            var a;
                            return o.a.createElement("div", {
                                key: e.name,
                                className: u.a.standingHolder
                            }, o.a.createElement("div", {
                                className: _()(u.a.standingContainer, (a = {}, g(a, u.a.spookyContainer, y), g(a, u.a.hackContainer, C), g(a, u.a.fishContainer, w), g(a, u.a.rushContainer, k), g(a, u.a.brawlContainer, T), a))
                            }, o.a.createElement("div", {
                                className: u.a.standingPlaceText
                            }, e.place), o.a.createElement("div", {
                                className: u.a.standingSuperPlaceText
                            }, Object(h.e)(e.place)), o.a.createElement(f.a, {
                                name: e.blook,
                                className: u.a.standingBlook
                            }), o.a.createElement("div", {
                                className: u.a.standingNameText
                            }, e.name), o.a.createElement("div", {
                                className: u.a.standingStatText
                            }, d.props.stats[d.props.standings.indexOf(e)])), e.players ? o.a.createElement("div", {
                                className: u.a.standingPlayerContainer
                            }, o.a.createElement("div", {
                                className: u.a.playerText
                            }, Object(h.f)(e.players))) : null)
                        }))) : null, C ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: u.a.noise
                        }), o.a.createElement("div", {
                            className: u.a.overlay
                        })) : null))
                    }
                }]) && b(a.prototype, t), s && b(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            T.propTypes = {
                standings: l.a.array,
                stats: l.a.array,
                historyId: l.a.string,
                gameId: l.a.string,
                team: l.a.bool,
                muted: l.a.bool,
                theme: l.a.string
            }, a.a = T
        },
        ZbWA: function(e, a, t) {
            "use strict";
            var s, o, r = "#fabc2e",
                l = [{
                    url: "https://media.blooket.com/image/upload/v1634087683/BlookParts/base0.svg",
                    tones: ["#ffcc05", r, "#cd8e2a"]
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087683/BlookParts/base1.svg",
                    tones: ["#fbe2cd", "#ecc4a9", "#d19e82"]
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087683/BlookParts/base2.svg",
                    tones: ["#d8b094", "#c49270", "#a87654"]
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087683/BlookParts/base3.svg",
                    tones: ["#bb9167", "#aa7c52", "#8e613c"]
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087694/BlookParts/base4.svg",
                    tones: ["#8e562e", "#7c4621", "#68310d"]
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087683/BlookParts/base5.svg",
                    tones: ["#613d30", "#512c21", "#3d1911"]
                }];

            function n(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }
            var i = [{
                url: "https://media.blooket.com/image/upload/v1634087707/BlookParts/eyes0.svg",
                changes: n({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087719/BlookParts/eyes1.svg",
                changes: n({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087721/BlookParts/eyes2.svg",
                changes: n({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087723/BlookParts/eyes3.svg",
                changes: n({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087740/BlookParts/eyes4.svg",
                changes: n({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087742/BlookParts/eyes5.svg",
                changes: n({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087747/BlookParts/eyes6.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1634087759/BlookParts/eyes7.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1634087764/BlookParts/eyes8.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1634087770/BlookParts/eyes9.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1634087780/BlookParts/eyes10.svg",
                changes: n({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087782/BlookParts/eyes11.svg",
                changes: (s = {}, n(s, r, 1), n(s, "#ffcc05", 0), s)
            }, {
                url: "https://media.blooket.com/image/upload/v1664326436/BlookParts/eyes12.svg",
                changes: n({}, r, 0)
            }, {
                url: "https://media.blooket.com/image/upload/v1664334112/BlookParts/eyes13.svg",
                changes: (o = {}, n(o, "#cd8e2a", 2), n(o, r, 1), o)
            }];

            function _(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }
            var c, m, p, d, u, f = [{
                url: ""
            }, {
                url: "https://media.blooket.com/image/upload/v1634087810/BlookParts/hair1.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1634087827/BlookParts/hair2.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087829/BlookParts/hair3.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087830/BlookParts/hair4.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087835/BlookParts/hair5.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087836/BlookParts/hair6.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087837/BlookParts/hair7.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087847/BlookParts/hair8.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087849/BlookParts/hair9.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087851/BlookParts/hair10.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087852/BlookParts/hair11.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087855/BlookParts/hair12.svg",
                changes: _({}, r, 1),
                hasHighlight: !0
            }, {
                url: "https://media.blooket.com/image/upload/v1664326436/BlookParts/hair13.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1664326436/BlookParts/hair14.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1664334307/BlookParts/hair15.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1664334307/BlookParts/hair16.svg",
                changes: _({}, r, 1)
            }, {
                url: "https://media.blooket.com/image/upload/v1664334307/BlookParts/hair17.svg",
                changes: _({}, r, 1)
            }];

            function h(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }
            var y = [{
                url: ""
            }, {
                url: "https://media.blooket.com/image/upload/v1634087975/BlookParts/nose1.svg",
                changes: (c = {}, h(c, "#ffcc05", 0), h(c, "#cd8e2a", 2), c)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087979/BlookParts/nose2.svg",
                changes: (m = {}, h(m, "#ffcc05", 0), h(m, "#cd8e2a", 2), m)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087989/BlookParts/nose3.svg",
                changes: (p = {}, h(p, "#ffcc05", 0), h(p, "#cd8e2a", 2), p)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087992/BlookParts/nose4.svg",
                changes: (d = {}, h(d, "#ffcc05", 0), h(d, "#cd8e2a", 2), d)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087993/BlookParts/nose5.svg",
                changes: (u = {}, h(u, "#ffcc05", 0), h(u, "#cd8e2a", 2), u)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087993/BlookParts/nose6.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1664334110/BlookParts/nose7.svg"
            }];

            function g(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }
            var b = [{
                url: ""
            }, {
                url: "https://media.blooket.com/image/upload/v1634087705/BlookParts/cheeks1.svg",
                changes: g({}, "#cd8e2a", 2)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087706/BlookParts/cheeks2.svg",
                changes: g({}, "#cd8e2a", 2)
            }, {
                url: "https://media.blooket.com/image/upload/v1634087696/BlookParts/cheeks3.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1634087718/BlookParts/cheeks4.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1664342241/BlookParts/cheeks5.svg"
            }, {
                url: "https://media.blooket.com/image/upload/v1664325848/BlookParts/cheeks6.svg"
            }];
            a.a = {
                base: l,
                clothing: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087712/BlookParts/clothing1.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087707/BlookParts/clothing2.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087720/BlookParts/clothing3.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087741/BlookParts/clothing4.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087741/BlookParts/clothing5.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087744/BlookParts/clothing6.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087725/BlookParts/clothing7.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087758/BlookParts/clothing8.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087769/BlookParts/clothing9.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087763/BlookParts/clothing10.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087807/BlookParts/clothing11.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087683/BlookParts/clothing12.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323225/BlookParts/clothing13.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323226/BlookParts/clothing14.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323225/BlookParts/clothing15.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing16.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323226/BlookParts/clothing17.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing18.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing19.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323227/BlookParts/clothing20.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323229/BlookParts/clothing21.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323228/BlookParts/clothing22.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324850/BlookParts/clothing23.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324850/BlookParts/clothing24.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324851/BlookParts/clothing25.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324851/BlookParts/clothing26.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324845/BlookParts/clothing27.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324845/BlookParts/clothing28.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing29.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing30.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing31.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing32.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325719/BlookParts/clothing33.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325720/BlookParts/clothing34.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664326438/BlookParts/clothing35.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664326438/BlookParts/clothing36.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing37.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing38.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing39.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334110/BlookParts/clothing40.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334112/BlookParts/clothing41.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334112/BlookParts/clothing42.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334112/BlookParts/clothing43.svg"
                }],
                eyes: i,
                glasses: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087784/BlookParts/glasses1.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087786/BlookParts/glasses2.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087791/BlookParts/glasses3.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087792/BlookParts/glasses4.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087804/BlookParts/glasses5.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087805/BlookParts/glasses6.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087806/BlookParts/glasses7.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087809/BlookParts/glasses8.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323228/BlookParts/glasses9.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses10.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses11.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses12.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324845/BlookParts/glasses13.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324847/BlookParts/glasses14.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334114/BlookParts/glasses15.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334114/BlookParts/glasses16.svg"
                }],
                hair: f,
                hat: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087855/BlookParts/hat1.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087861/BlookParts/hat2.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087869/BlookParts/hat3.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087870/BlookParts/hat4.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087877/BlookParts/hat5.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087878/BlookParts/hat6.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087880/BlookParts/hat7.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087887/BlookParts/hat8.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087891/BlookParts/hat9.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087891/BlookParts/hat10.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087899/BlookParts/hat11.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087901/BlookParts/hat12.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087902/BlookParts/hat13.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323229/BlookParts/hat14.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323229/BlookParts/hat15.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323229/BlookParts/hat16.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323230/BlookParts/hat17.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323230/BlookParts/hat18.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323230/BlookParts/hat19.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat20.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat21.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat22.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324847/BlookParts/hat23.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324848/BlookParts/hat24.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324849/BlookParts/hat25.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325721/BlookParts/hat26.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat27.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat28.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat29.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325715/BlookParts/hat30.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334114/BlookParts/hat31.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat32.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat33.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat34.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat35.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334335/BlookParts/hat36.svg"
                }],
                item: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087902/BlookParts/item1.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087903/BlookParts/item2.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087903/BlookParts/item3.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087915/BlookParts/item4.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087920/BlookParts/item5.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087921/BlookParts/item6.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087922/BlookParts/item7.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087922/BlookParts/item8.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087927/BlookParts/item9.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087939/BlookParts/item10.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087942/BlookParts/item11.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087942/BlookParts/item12.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087944/BlookParts/item13.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323225/BlookParts/item14.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323225/BlookParts/item15.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664323225/BlookParts/item16.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324849/BlookParts/item17.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324849/BlookParts/item18.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664324849/BlookParts/item19.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325715/BlookParts/item20.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325715/BlookParts/item21.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664342232/BlookParts/item22.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325717/BlookParts/item23.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325717/BlookParts/item24.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325717/BlookParts/item25.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664325717/BlookParts/item26.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664326436/BlookParts/item27.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334116/BlookParts/item28.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334117/BlookParts/item29.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334118/BlookParts/item30.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334118/BlookParts/item31.svg"
                }],
                mouth: [{
                    url: "https://media.blooket.com/image/upload/v1634087948/BlookParts/mouth0.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087948/BlookParts/mouth1.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087957/BlookParts/mouth2.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087958/BlookParts/mouth3.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087959/BlookParts/mouth4.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087959/BlookParts/mouth5.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087960/BlookParts/mouth6.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087963/BlookParts/mouth7.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087967/BlookParts/mouth8.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087968/BlookParts/mouth9.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087974/BlookParts/mouth10.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087975/BlookParts/mouth11.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664326436/BlookParts/mouth12.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664326436/BlookParts/mouth13.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334118/BlookParts/mouth14.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334118/BlookParts/mouth15.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334119/BlookParts/mouth16.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334110/BlookParts/mouth17.svg"
                }],
                nose: y,
                cheeks: b,
                eyebrows: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087694/BlookParts/eyebrows1.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087695/BlookParts/eyebrows2.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087695/BlookParts/eyebrows3.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087695/BlookParts/eyebrows4.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087706/BlookParts/eyebrows5.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664326438/BlookParts/eyebrows6.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664326438/BlookParts/eyebrows7.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334112/BlookParts/eyebrows8.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1664334112/BlookParts/eyebrows9.svg"
                }]
            }
        },
        bYay: function(e, a, t) {
            "use strict";
            t.d(a, "c", (function() {
                return c
            })), t.d(a, "b", (function() {
                return m
            })), t.d(a, "d", (function() {
                return p
            }));
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("ii54"),
                i = t.n(n),
                _ = function(e) {
                    var a = e.level;
                    return o.a.createElement("div", {
                        className: i.a["background".concat(a)],
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                };
            _.propTypes = {
                level: l.a.number
            }, a.a = _;
            var c = function(e) {
                    switch (e) {
                        case 1:
                            return "#2eb82e";
                        case 2:
                            return "#ac7339";
                        case 3:
                            return "#764e7e";
                        case 4:
                            return "#8ba145";
                        default:
                            return "#404040"
                    }
                },
                m = function(e) {
                    switch (e) {
                        case 1:
                            return "#1f7a1f";
                        case 2:
                            return "#996633";
                        case 3:
                            return "#68446f";
                        case 4:
                            return "#7c8f3d";
                        default:
                            return "#333333"
                    }
                },
                p = function(e) {
                    switch (e) {
                        case 1:
                        case 2:
                            return "#9a49aa";
                        case 3:
                            return "#d88e81";
                        case 4:
                            return "#465353";
                        default:
                            return "#333333"
                    }
                }
        },
        bZbD: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return o
            }));
            var s = t("vDqi"),
                o = t.n(s).a.create({
                    baseURL: "https://s.blooket.com"
                })
        },
        c7h1: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, "*{touch-action:manipulation}.styles__audioButton___1U3wR-camelCase{background-color:#0bc2cf;border-radius:7px;width:45%;max-width:150px;aspect-ratio:1;display:flex;justify-content:center;align-items:center;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;overflow:hidden;box-shadow:3px 3px 0 0 #088891;margin-bottom:5px;transition:.2s}.styles__audioButton___1U3wR-camelCase:hover{transform:scale(.96)}.styles__audioIcon___1LJw3-camelCase{font-size:40px;color:#fff;position:absolute;width:80%;height:80%;display:flex;justify-content:center;align-items:center;text-shadow:2px 2px 8px grey;z-index:4}.styles__spinnerContainer___VY7qi-camelCase,.styles__spinnerContainerDone___12pSM-camelCase{width:175%;height:175%;position:absolute;left:-37.5%;top:-37.5%;background:inherit}.styles__spinnerContainerDone___12pSM-camelCase{opacity:0}.styles__spinner___12-q--camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:175px 0 0 175px;z-index:2;animation:styles__rota___2z5bC-camelCase 1s linear}@keyframes styles__rota___2z5bC-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.styles__filler___2liRt-camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:0 175px 175px 0;z-index:1;left:50%;opacity:0;animation:styles__fill___vLeKn-camelCase 1s steps(1)}@keyframes styles__fill___vLeKn-camelCase{0%{opacity:0}50%,to{opacity:1}}.styles__mask___TLKtA-camelCase{width:50%;height:100%;position:absolute;z-index:3;opacity:1;background:inherit;animation:styles__mask___TLKtA-camelCase 1s steps(1)}@keyframes styles__mask___TLKtA-camelCase{0%{opacity:1}50%,to{opacity:0}}", ""]), a.locals = {
                audioButton: "styles__audioButton___1U3wR-camelCase",
                audioIcon: "styles__audioIcon___1LJw3-camelCase",
                spinnerContainer: "styles__spinnerContainer___VY7qi-camelCase",
                spinnerContainerDone: "styles__spinnerContainerDone___12pSM-camelCase",
                spinner: "styles__spinner___12-q--camelCase",
                rota: "styles__rota___2z5bC-camelCase",
                filler: "styles__filler___2liRt-camelCase",
                fill: "styles__fill___vLeKn-camelCase",
                mask: "styles__mask___TLKtA-camelCase"
            }
        },
        dOCC: function(e, a, t) {
            var s = t("pSbO");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        dOT4: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return o
            }));
            var s = t("vDqi"),
                o = t.n(s).a.create({})
        },
        dlDy: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__blookContainer___3YrVw-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;position:relative;display:flex;justify-content:flex-end}.styles__blook___2VL-Z-camelCase,.styles__part___39fOM-camelCase{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__part___39fOM-camelCase{position:absolute;bottom:0;left:0}", ""]), a.locals = {
                blookContainer: "styles__blookContainer___3YrVw-camelCase",
                blook: "styles__blook___2VL-Z-camelCase",
                part: "styles__part___39fOM-camelCase"
            }
        },
        dqw3: function(e, a, t) {
            var s = t("srL4");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        fAPQ: function(e, a, t) {
            var s = t("nDuC");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        gMLK: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, '.styles__container___3uQN5-camelCase{position:absolute;height:calc(87.5% - 45vh);width:25%;top:0;left:6.25%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__timeBarHolder___SlR7Z-camelCase{width:40%;left:calc(5% - 3px);height:6%;bottom:calc(10% + 11.5vw);background:#fff;border:3px solid #a7a7a7;border-radius:4px;box-shadow:4px 4px 0 rgba(0,0,0,.2);animation:styles__fadeIn___8eiwd-camelCase .3s linear .7s forwards}.styles__timeBarContainer___3A2kD-camelCase,.styles__timeBarHolder___SlR7Z-camelCase{position:absolute;overflow:hidden;opacity:0}.styles__timeBarContainer___3A2kD-camelCase{width:90%;left:5%;height:50%;top:25%;border-radius:4px;background-color:#dfdfdf;animation:styles__fadeIn___8eiwd-camelCase .3s linear .9s forwards}.styles__timeBar___2AR5_-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;animation-name:styles__barMove___2-rYn-camelCase;animation-timing-function:linear;animation-delay:.9s;transform-origin:left center}@keyframes styles__barMove___2-rYn-camelCase{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.styles__barOut___32As8-camelCase{animation:styles__fadeOut___1h7Ax-camelCase .3s forwards}@keyframes styles__fadeout___1Vay5-camelCase{0%{opacity:1}to{opacity:0}}.styles__blook___F8Xv7-camelCase{position:absolute;width:40%;bottom:5%;left:5%;transform:translateY(-50vh);animation:styles__blookDown___2Dlyy-camelCase .6s forwards}@keyframes styles__blookDown___2Dlyy-camelCase{0%{transform:translateY(-50vh)}to{transform:translateY(0)}}.styles__blookOut___5qCxq-camelCase{transform:translateY(0);animation:styles__blookUp___3Hp5_-camelCase .6s 1.5s forwards}@keyframes styles__blookUp___3Hp5_-camelCase{0%{transform:translateY(0)}to{transform:translateY(-50vh)}}.styles__speechBubble___2cLX8-camelCase{background:#fff;border:3px solid #a7a7a7;border-radius:4px;box-shadow:4px 4px 0 rgba(0,0,0,.2);width:40%;height:80%;position:absolute;left:55%;bottom:10%;display:flex;flex-direction:column;transform-origin:bottom left;transform:scale(0);animation:styles__bubbleGrow___3zkSk-camelCase .5s .6s forwards}@keyframes styles__bubbleGrow___3zkSk-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__speechBubbleOut___1TM5m-camelCase{transform:scale(1);animation:styles__bubbleShrink___l-BqD-camelCase .5s 1s forwards}@keyframes styles__bubbleShrink___l-BqD-camelCase{0%{transform:scale(1)}to{transform:scale(0)}}.styles__speechArrow___1ScDC-camelCase{border-left:21px solid transparent;bottom:15px;position:absolute;left:-15px}.styles__speechArrow___1ScDC-camelCase:before{border-left:25px solid transparent;border-top:25px solid #a7a7a7;bottom:2px;content:"";position:absolute;right:8px}.styles__speechArrow___1ScDC-camelCase:after{border-left:21px solid transparent;border-top:21px solid #fff;bottom:4px;content:"";position:absolute;right:6px}.styles__foodRow___jMXdF-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:90%;height:33.33%;margin:0 5%;color:#3a3a3a;opacity:0;animation:styles__fadeIn___8eiwd-camelCase .2s 1.1s forwards}.styles__food___2T6To-camelCase{height:70%;width:30%}.styles__foodTimes___1Ox3C-camelCase{font-size:3vh}.styles__foodAmount___scHDx-camelCase{font-size:5vh}.styles__foodAmount___scHDx-camelCase,.styles__thanksText___1OOBa-camelCase{font-family:Nunito,sans-serif;font-weight:700}.styles__thanksText___1OOBa-camelCase{font-size:2.5vw;text-align:center;color:#3a3a3a;margin:auto;opacity:0;animation:styles__fadeIn___8eiwd-camelCase .2s .3s forwards}.styles__profitText___1aB3W-camelCase{font-size:2vw}@keyframes styles__fadeIn___8eiwd-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__container___3uQN5-camelCase{position:absolute;height:calc(87.5% - 42.5vh);width:25%;top:0;left:6.25%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__speechBubble___2cLX8-camelCase{width:calc(100% - 6px);height:60%;left:0;bottom:35%;transform-origin:bottom left}.styles__speechArrow___1ScDC-camelCase{border-right:21px solid transparent;border-left:0;bottom:-27px;left:70%}.styles__speechArrow___1ScDC-camelCase:before{border-right:25px solid transparent;border-left:0;border-top:25px solid #a7a7a7;bottom:2px;right:6px}.styles__speechArrow___1ScDC-camelCase:after{border-right:21px solid transparent;border-left:0;border-top:21px solid #fff;bottom:8px;right:8px}.styles__blook___F8Xv7-camelCase{position:absolute;width:45%;bottom:2.5%;left:5%}.styles__timeBarHolder___SlR7Z-camelCase{width:14.5%;left:67.5%;height:12.9375vw;bottom:2.5%;border:2px solid #a7a7a7;box-shadow:3px 3px 0 rgba(0,0,0,.2)}.styles__timeBarContainer___3A2kD-camelCase{width:50%;left:25%;height:90%;top:5%}.styles__timeBar___2AR5_-camelCase{bottom:0;left:0;animation-name:styles__barMove___2-rYn-camelCase;animation-timing-function:linear;animation-delay:.7s;transform-origin:bottom center}@keyframes styles__barMove___2-rYn-camelCase{0%{transform:scaleY(1)}to{transform:scaleY(0)}}.styles__foodTimes___1Ox3C-camelCase{font-size:2.5vh}.styles__foodAmount___scHDx-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:4vh}.styles__thanksText___1OOBa-camelCase{font-size:5vw}.styles__profitText___1aB3W-camelCase{font-size:4.5vw}}', ""]), a.locals = {
                container: "styles__container___3uQN5-camelCase",
                timeBarHolder: "styles__timeBarHolder___SlR7Z-camelCase",
                fadeIn: "styles__fadeIn___8eiwd-camelCase",
                timeBarContainer: "styles__timeBarContainer___3A2kD-camelCase",
                timeBar: "styles__timeBar___2AR5_-camelCase",
                barMove: "styles__barMove___2-rYn-camelCase",
                barOut: "styles__barOut___32As8-camelCase",
                fadeOut: "styles__fadeOut___1h7Ax-camelCase",
                blook: "styles__blook___F8Xv7-camelCase",
                blookDown: "styles__blookDown___2Dlyy-camelCase",
                blookOut: "styles__blookOut___5qCxq-camelCase",
                blookUp: "styles__blookUp___3Hp5_-camelCase",
                speechBubble: "styles__speechBubble___2cLX8-camelCase",
                bubbleGrow: "styles__bubbleGrow___3zkSk-camelCase",
                speechBubbleOut: "styles__speechBubbleOut___1TM5m-camelCase",
                bubbleShrink: "styles__bubbleShrink___l-BqD-camelCase",
                speechArrow: "styles__speechArrow___1ScDC-camelCase",
                foodRow: "styles__foodRow___jMXdF-camelCase",
                food: "styles__food___2T6To-camelCase",
                foodTimes: "styles__foodTimes___1Ox3C-camelCase",
                foodAmount: "styles__foodAmount___scHDx-camelCase",
                thanksText: "styles__thanksText___1OOBa-camelCase",
                profitText: "styles__profitText___1aB3W-camelCase",
                fadeout: "styles__fadeout___1Vay5-camelCase"
            }
        },
        gn96: function(e, a, t) {
            var s = t("AFGJ");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        "h/RO": function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("KpTr"),
                l = t.n(r),
                n = function() {
                    return o.a.createElement("div", null, o.a.createElement("div", {
                        className: l.a.glitch1
                    }, "#LOL"), o.a.createElement("div", {
                        className: l.a.glitch2
                    }, "#TacoTuesday"), o.a.createElement("div", {
                        className: l.a.glitch3
                    }, "#SELFIE"), o.a.createElement("div", {
                        className: l.a.glitch4
                    }, "#StudiousSeason"), o.a.createElement("div", {
                        className: l.a.glitch5
                    }, "#NobodyCares"), o.a.createElement("div", {
                        className: l.a.glitch6
                    }, "#HashtagsAreFakeWaffles"), o.a.createElement("div", {
                        className: l.a.glitch7
                    }, "#NotTheNumberSymbol"), o.a.createElement("div", {
                        className: l.a.glitch8
                    }, "#TGIF...Maybe"), o.a.createElement("div", {
                        className: l.a.glitch9
                    }, "#STOPPPPPPPP"), o.a.createElement("div", {
                        className: l.a.glitch10
                    }, "#WhoDidThis?"))
                };
            n.propTypes = {}, a.a = n
        },
        hWHY: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___1_fIx-camelCase{position:relative;margin:3px 1.5vw;padding:0;width:calc(100% - 3vw);line-height:2.45vw;font-size:1.8vw;font-family:Nunito,sans-serif;display:flex;flex-direction:row}.styles__right___mxhuP-camelCase{width:calc(100% - 4vw)}.styles__image___29s-U-camelCase{margin-right:.5vw;height:2.415vw;width:2.1vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:inline-block}.styles__glitchIcon___jqb7B-camelCase{line-height:2.45vw;font-size:1.8vw}", ""]), a.locals = {
                container: "styles__container___1_fIx-camelCase",
                right: "styles__right___mxhuP-camelCase",
                image: "styles__image___29s-U-camelCase",
                glitchIcon: "styles__glitchIcon___jqb7B-camelCase"
            }
        },
        hpu6: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("wto1"),
                c = t.n(_),
                m = t("LHn/"),
                p = t("74sb"),
                d = t("8qja"),
                u = function(e) {
                    var a = e.mode,
                        t = e.amount;
                    return o.a.createElement("div", {
                        className: c.a.container,
                        style: {
                            backgroundImage: d.a ? null : "url(".concat(m.a.basic.castleTile, ")"),
                            backgroundColor: d.a ? "#292929" : null,
                            backgroundSize: 74.5
                        }
                    }, o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n1)
                    }, "Answer Questions"), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n2)
                    }, "Select Chests"), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n3)
                    }, "Collect ".concat(d.a ? "Candy" : "Gold")), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n4)
                    }, "\\", "Take ".concat(d.a ? "Candy" : "Gold", " From Others")), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n5)
                    }, "Time" === a ? "Most ".concat(d.a ? "candy" : "gold", " after ").concat(Object(p.l)(t), " ").concat("1" === t ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(p.l)(t), " ").concat(d.a ? "Candy" : "Gold", " wins!")), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n6)
                    }, "Good Luck!"))
                };
            u.propTypes = {
                mode: l.a.string,
                amount: l.a.any
            }, a.a = u
        },
        ii54: function(e, a, t) {
            var s = t("09G1");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        jTyc: function(e, a, t) {
            var s = t("c7h1");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        jaO2: function(e, a, t) {
            var s = t("YrOF");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        k1fK: function(e, a, t) {
            var s = t("A3cw");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        l5tK: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("nhtp"),
                c = t.n(_),
                m = t("0oXL"),
                p = t("LAIx"),
                d = t("74sb");

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, a) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var s, o, r = [],
                        l = !0,
                        n = !1;
                    try {
                        for (t = t.call(e); !(l = (s = t.next()).done) && (r.push(s.value), !a || r.length !== a); l = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                }(e, a) || function(e, a) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, a)
                }(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
                return s
            }

            function y(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }

            function g(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function b(e, a) {
                return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function v(e) {
                var a = function() {
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
                    var t, s = w(e);
                    if (a) {
                        var o = w(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return x(this, t)
                }
            }

            function x(e, a) {
                if (a && ("object" === u(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return C(e)
            }

            function C(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function w(e) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var k = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && b(e, a)
                }(l, e);
                var a, t, s, r = v(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {
                        done: !1,
                        success: !1,
                        order: e.order
                    }, a.customerClicked = a.customerClicked.bind(C(a)), a
                }
                return a = l, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.time <= 0 || (this.timerTimeout = setTimeout((function() {
                            e.setState({
                                done: !0,
                                success: !1
                            }, (function() {
                                e.props.onDone(!1)
                            }))
                        }), this.props.time + 700))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this;
                        Object.values(this.state.order).reduce((function(e, a) {
                            return e + a
                        }), 0) === Object.values(this.props.order).reduce((function(e, a) {
                            return e + a
                        }), 0) || this.state.done || (this.props.order && 0 === Object.values(this.props.order).filter((function(e) {
                            return e > 0
                        })).length && (clearTimeout(this.timerTimeout), this.setState({
                            done: !0,
                            success: !0
                        }, (function() {
                            e.props.onDone(!0)
                        }))), this.setState({
                            order: this.props.order
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.timerTimeout), clearTimeout(this.doneTimeout)
                    }
                }, {
                    key: "customerClicked",
                    value: function() {
                        this.state.done || this.props.canClick && this.props.onClick()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: c.a.container,
                            style: {
                                left: "".concat(6.25 + 31.25 * this.props.place, "%"),
                                cursor: this.state.done ? "auto" : "pointer"
                            },
                            role: "button",
                            tabIndex: 0,
                            id: "customer",
                            onClick: this.customerClicked
                        }, -1 !== this.props.time ? o.a.createElement("div", {
                            className: i()(c.a.timeBarHolder, y({}, c.a.barOut, this.state.done))
                        }, o.a.createElement("div", {
                            className: c.a.timeBarContainer
                        }, o.a.createElement("div", {
                            className: c.a.timeBar,
                            style: {
                                backgroundColor: Object(p.a)(this.props.blook),
                                animationDuration: "".concat(this.props.time, "ms"),
                                animationName: 0 === this.props.time ? "none" : null
                            }
                        }))) : null, o.a.createElement(m.a, {
                            name: this.props.blook,
                            className: i()(c.a.blook, y({}, c.a.blookOut, this.state.done))
                        }), o.a.createElement("div", {
                            className: i()(c.a.speechBubble, y({}, c.a.speechBubbleOut, this.state.done))
                        }, o.a.createElement("div", {
                            className: c.a.speechArrow
                        }), this.state.done ? o.a.createElement("div", {
                            className: c.a.thanksText
                        }, this.state.success ? "Thanks!" : "Boo!", o.a.createElement("div", {
                            className: c.a.profitText
                        }, this.state.success ? "$".concat(Object(d.s)(this.props.profit)) : "")) : Object.entries(this.state.order).map((function(e, a) {
                            var t = f(e, 2),
                                s = t[0],
                                r = t[1];
                            return r > 0 ? o.a.createElement("div", {
                                className: c.a.foodRow,
                                key: s,
                                style: {
                                    animationDelay: "".concat(1200 + 150 * a, "ms")
                                }
                            }, o.a.createElement(m.a, {
                                name: s,
                                className: c.a.food
                            }), o.a.createElement("i", {
                                className: i()("fas fa-times", c.a.foodTimes)
                            }), o.a.createElement("div", {
                                className: c.a.foodAmount
                            }, r)) : null
                        }))))
                    }
                }]) && g(a.prototype, t), s && g(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            k.propTypes = {
                blook: l.a.string,
                place: l.a.number,
                order: l.a.object,
                profit: l.a.number,
                canClick: l.a.bool,
                onClick: l.a.func,
                time: l.a.number,
                onDone: l.a.func
            }, a.a = k
        },
        lCBo: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("lNlg"),
                l = t("17x9"),
                n = t.n(l),
                i = t("F5yN"),
                _ = t.n(i),
                c = t("1O+K"),
                m = t.n(c),
                p = t("74sb"),
                d = t("mkC0"),
                u = {
                    bird: {
                        url: d.a.Chick,
                        width: 40,
                        height: 46
                    },
                    pipe: {
                        url: "https://media.blooket.com/image/upload/v1660262197/Media/uiTest/Pipe_3.svg",
                        width: 70,
                        height: 450
                    },
                    background: {
                        url: "https://media.blooket.com/image/upload/v1661226022/Media/uiTest/B7.png",
                        width: 320,
                        height: 480,
                        nonVector: !0
                    },
                    ground: {
                        url: "https://media.blooket.com/image/upload/v1661226021/Media/uiTest/Ground_1B.svg",
                        width: 320,
                        height: 26
                    }
                };

            function f(e) {
                return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function h(e, a) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, a) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var s, o, r = [],
                        l = !0,
                        n = !1;
                    try {
                        for (t = t.call(e); !(l = (s = t.next()).done) && (r.push(s.value), !a || r.length !== a); l = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return r
                }(e, a) || function(e, a) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return y(e, a)
                }(e, a) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
                return s
            }

            function g(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function b(e, a) {
                return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function v(e) {
                var a = function() {
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
                    var t, s = C(e);
                    if (a) {
                        var o = C(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return x(this, t)
                }
            }

            function x(e, a) {
                if (a && ("object" === f(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var w = 800,
                k = 125,
                T = 300,
                E = 50,
                P = [220, 280],
                j = [120, 150],
                B = 0,
                N = function(e) {
                    ! function(e, a) {
                        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(a && a.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), a && b(e, a)
                    }(r, e);
                    var a, t, s, o = v(r);

                    function r(e) {
                        var a;
                        return function(e, a) {
                            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (a = o.call(this, "PlayGame")).blook = e, a
                    }
                    return a = r, (t = [{
                        key: "preload",
                        value: function() {
                            var e = this;
                            Object.entries(u).forEach((function(a) {
                                var t = h(a, 2),
                                    s = t[0],
                                    o = t[1];
                                o.nonVector ? e.load.image(s, o.url, o.width) : "bird" === s ? (B += 1, e.load.svg("blook-".concat(B), d.a[e.blook] || d.a["Light Blue"], {
                                    width: u.bird.width,
                                    height: u.bird.height
                                })) : e.load.svg(s, o.url, {
                                    width: o.width,
                                    height: o.height
                                })
                            }))
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = this;
                            this.isStarted = !1, this.input.setDefaultCursor("pointer"), this.add.image(this.game.config.width / 2, this.game.config.height / 2, "background"), this.pipeGroup = this.physics.add.group({
                                immovable: !0
                            }), this.groundGroup = this.physics.add.group(), this.groundGroup.create(.5 * this.game.config.width, this.game.config.height - u.ground.height / 2, "ground").setScale(1.05), this.groundGroup.create(1.5 * this.game.config.width, this.game.config.height - u.ground.height / 2, "ground").setScale(1.05), this.pipePool = [];
                            for (var a = 0; a < 4; a++) this.pipePool.push(this.pipeGroup.create(0, 0, "pipe")), this.pipePool.push(this.pipeGroup.create(0, 0, "pipe")), this.placePipes(!1);
                            this.bird = this.physics.add.image(80, this.game.config.height / 2, "blook-".concat(B)), this.bird.body.setSize(u.bird.width, u.bird.width), this.bird.body.setOffset(0, u.bird.height - u.bird.width), this.input.on("pointerdown", this.flap, this), this.game.events.on("set-blook", (function(a) {
                                B += 1, e.blook = a, e.load.svg("blook-".concat(B), d.a[a] || d.a["Light Blue"], {
                                    width: u.bird.width,
                                    height: u.bird.height
                                }), e.load.once(m.a.Loader.Events.COMPLETE, (function() {
                                    e.bird.setTexture("blook-".concat(B))
                                })), e.load.start()
                            })), this.game.events.on("restart-game", (function() {
                                e.restartGame()
                            }))
                        }
                    }, {
                        key: "restartGame",
                        value: function() {
                            this.groundGroup.clear(!0), this.groundGroup.create(.5 * this.game.config.width, this.game.config.height - u.ground.height / 2, "ground").setScale(1.05), this.groundGroup.create(1.5 * this.game.config.width, this.game.config.height - u.ground.height / 2, "ground").setScale(1.05), this.pipeGroup.clear(!0), this.pipePool = [];
                            for (var e = 0; e < 4; e++) this.pipePool.push(this.pipeGroup.create(0, 0, "pipe")), this.pipePool.push(this.pipeGroup.create(0, 0, "pipe")), this.placePipes(!1);
                            this.bird.setPosition(80, this.game.config.height / 2), this.bird.body.gravity.y = 0, this.isStarted = !1
                        }
                    }, {
                        key: "placePipes",
                        value: function() {
                            var e = this.getRightmostPipe(),
                                a = Object(p.o)(j[0], j[1]),
                                t = Object(p.o)(E + a / 2, this.game.config.height - E - a / 2);
                            this.pipePool[0].x = e + this.pipePool[0].getBounds().width + Object(p.o)(P[0], P[1]), this.pipePool[0].y = t - a / 2 - u.pipe.height, this.pipePool[0].setOrigin(1, 1), this.pipePool[0].setRotation(Math.PI), this.pipePool[0].setOffset(u.pipe.width, u.pipe.height), this.pipePool[0].flipX = !0, this.pipePool[1].x = this.pipePool[0].x, this.pipePool[1].y = t + a / 2, this.pipePool[1].setOrigin(0, 0), this.pipePool[1].setRotation(0), this.pipePool[1].setOffset(0, 0), this.pipePool[1].scored = !1, this.pipePool = []
                        }
                    }, {
                        key: "flap",
                        value: function() {
                            this.isStarted || (this.bird.body.gravity.y = w, this.pipeGroup.setVelocityX(-k), this.groundGroup.setVelocityX(-k), this.isStarted = !0), this.bird.body.velocity.y = -T
                        }
                    }, {
                        key: "getRightmostPipe",
                        value: function() {
                            var e = 0;
                            return this.pipeGroup.getChildren().forEach((function(a) {
                                e = Math.max(e, a.x)
                            })), e
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this;
                            this.physics.world.collide(this.bird, this.pipeGroup, this.die, null, this), (this.bird.y > this.game.config.height - 18 - u.bird.height / 2 || this.bird.y < 0) && this.die(), this.pipeGroup.getChildren().forEach((function(a) {
                                a.getBounds().right < 0 ? (e.pipePool.push(a), 2 === e.pipePool.length && e.placePipes(!0)) : 0 === a.originX && a.getBounds().left < 0 && !a.scored && (e.game.events.emit("add-score"), a.scored = !0)
                            })), this.groundGroup.getChildren().forEach((function(a) {
                                a.getBounds().right < 0 && a.setPosition(1.5 * e.game.config.width, e.game.config.height - u.ground.height / 2)
                            }))
                        }
                    }, {
                        key: "die",
                        value: function() {
                            this.bird.body.setVelocity(0, 0), this.pipeGroup.setVelocityX(0), this.groundGroup.setVelocityX(0), this.game.events.emit("game-over")
                        }
                    }]) && g(a.prototype, t), s && g(a, s), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), r
                }(m.a.Scene),
                O = function(e) {
                    return {
                        type: m.a.WEBGL,
                        parent: "phaser-bouncy",
                        backgroundColor: 8900331,
                        width: 320,
                        height: 480,
                        scale: {
                            mode: m.a.Scale.NONE,
                            autoCenter: m.a.Scale.CENTER_BOTH
                        },
                        physics: {
                            default: "arcade"
                        },
                        scene: new N(e)
                    }
                };

            function S(e) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function I() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                I = function() {
                    return e
                };
                var e = {},
                    a = Object.prototype,
                    t = a.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    o = s.iterator || "@@iterator",
                    r = s.asyncIterator || "@@asyncIterator",
                    l = s.toStringTag || "@@toStringTag";

                function n(e, a, t) {
                    return Object.defineProperty(e, a, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[a]
                }
                try {
                    n({}, "")
                } catch (e) {
                    n = function(e, a, t) {
                        return e[a] = t
                    }
                }

                function i(e, a, t, s) {
                    var o = a && a.prototype instanceof m ? a : m,
                        r = Object.create(o.prototype),
                        l = new w(s || []);
                    return r._invoke = function(e, a, t) {
                        var s = "suspendedStart";
                        return function(o, r) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === o) throw r;
                                return T()
                            }
                            for (t.method = o, t.arg = r;;) {
                                var l = t.delegate;
                                if (l) {
                                    var n = v(l, t);
                                    if (n) {
                                        if (n === c) continue;
                                        return n
                                    }
                                }
                                if ("next" === t.method) t.sent = t._sent = t.arg;
                                else if ("throw" === t.method) {
                                    if ("suspendedStart" === s) throw s = "completed", t.arg;
                                    t.dispatchException(t.arg)
                                } else "return" === t.method && t.abrupt("return", t.arg);
                                s = "executing";
                                var i = _(e, a, t);
                                if ("normal" === i.type) {
                                    if (s = t.done ? "completed" : "suspendedYield", i.arg === c) continue;
                                    return {
                                        value: i.arg,
                                        done: t.done
                                    }
                                }
                                "throw" === i.type && (s = "completed", t.method = "throw", t.arg = i.arg)
                            }
                        }
                    }(e, t, l), r
                }

                function _(e, a, t) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(a, t)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = i;
                var c = {};

                function m() {}

                function p() {}

                function d() {}
                var u = {};
                n(u, o, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    h = f && f(f(k([])));
                h && h !== a && t.call(h, o) && (u = h);
                var y = d.prototype = m.prototype = Object.create(u);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(a) {
                        n(e, a, (function(e) {
                            return this._invoke(a, e)
                        }))
                    }))
                }

                function b(e, a) {
                    var s;
                    this._invoke = function(o, r) {
                        function l() {
                            return new a((function(s, l) {
                                ! function s(o, r, l, n) {
                                    var i = _(e[o], e, r);
                                    if ("throw" !== i.type) {
                                        var c = i.arg,
                                            m = c.value;
                                        return m && "object" == S(m) && t.call(m, "__await") ? a.resolve(m.__await).then((function(e) {
                                            s("next", e, l, n)
                                        }), (function(e) {
                                            s("throw", e, l, n)
                                        })) : a.resolve(m).then((function(e) {
                                            c.value = e, l(c)
                                        }), (function(e) {
                                            return s("throw", e, l, n)
                                        }))
                                    }
                                    n(i.arg)
                                }(o, r, s, l)
                            }))
                        }
                        return s = s ? s.then(l, l) : l()
                    }
                }

                function v(e, a) {
                    var t = e.iterator[a.method];
                    if (void 0 === t) {
                        if (a.delegate = null, "throw" === a.method) {
                            if (e.iterator.return && (a.method = "return", a.arg = void 0, v(e, a), "throw" === a.method)) return c;
                            a.method = "throw", a.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return c
                    }
                    var s = _(t, e.iterator, a.arg);
                    if ("throw" === s.type) return a.method = "throw", a.arg = s.arg, a.delegate = null, c;
                    var o = s.arg;
                    return o ? o.done ? (a[e.resultName] = o.value, a.next = e.nextLoc, "return" !== a.method && (a.method = "next", a.arg = void 0), a.delegate = null, c) : o : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), a.delegate = null, c)
                }

                function x(e) {
                    var a = {
                        tryLoc: e[0]
                    };
                    1 in e && (a.catchLoc = e[1]), 2 in e && (a.finallyLoc = e[2], a.afterLoc = e[3]), this.tryEntries.push(a)
                }

                function C(e) {
                    var a = e.completion || {};
                    a.type = "normal", delete a.arg, e.completion = a
                }

                function w(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var a = e[o];
                        if (a) return a.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                r = function a() {
                                    for (; ++s < e.length;)
                                        if (t.call(e, s)) return a.value = e[s], a.done = !1, a;
                                    return a.value = void 0, a.done = !0, a
                                };
                            return r.next = r
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
                return p.prototype = d, n(y, "constructor", d), n(d, "constructor", p), p.displayName = n(d, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var a = "function" == typeof e && e.constructor;
                    return !!a && (a === p || "GeneratorFunction" === (a.displayName || a.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, n(e, l, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), n(b.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(a, t, s, o, r) {
                    void 0 === r && (r = Promise);
                    var l = new b(i(a, t, s, o), r);
                    return e.isGeneratorFunction(t) ? l : l.next().then((function(e) {
                        return e.done ? e.value : l.next()
                    }))
                }, g(y), n(y, l, "Generator"), n(y, o, (function() {
                    return this
                })), n(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var a = [];
                    for (var t in e) a.push(t);
                    return a.reverse(),
                        function t() {
                            for (; a.length;) {
                                var s = a.pop();
                                if (s in e) return t.value = s, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, w.prototype = {
                    constructor: w,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
                            for (var a in this) "t" === a.charAt(0) && t.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var a = this;

                        function s(t, s) {
                            return l.type = "throw", l.arg = e, a.next = t, s && (a.method = "next", a.arg = void 0), !!s
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                l = r.completion;
                            if ("root" === r.tryLoc) return s("end");
                            if (r.tryLoc <= this.prev) {
                                var n = t.call(r, "catchLoc"),
                                    i = t.call(r, "finallyLoc");
                                if (n && i) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                } else if (n) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0)
                                } else {
                                    if (!i) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, a) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var o = this.tryEntries[s];
                            if (o.tryLoc <= this.prev && t.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= a && a <= r.finallyLoc && (r = null);
                        var l = r ? r.completion : {};
                        return l.type = e, l.arg = a, r ? (this.method = "next", this.next = r.finallyLoc, c) : this.complete(l)
                    },
                    complete: function(e, a) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && a && (this.next = a), c
                    },
                    finish: function(e) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var t = this.tryEntries[a];
                            if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), C(t), c
                        }
                    },
                    catch: function(e) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var t = this.tryEntries[a];
                            if (t.tryLoc === e) {
                                var s = t.completion;
                                if ("throw" === s.type) {
                                    var o = s.arg;
                                    C(t)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, a, t) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: a,
                            nextLoc: t
                        }, "next" === this.method && (this.arg = void 0), c
                    }
                }, e
            }

            function z(e, a, t, s, o, r, l) {
                try {
                    var n = e[r](l),
                        i = n.value
                } catch (e) {
                    return void t(e)
                }
                n.done ? a(i) : Promise.resolve(i).then(s, o)
            }

            function L(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function D(e, a) {
                return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function Y(e) {
                var a = function() {
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
                    var t, s = R(e);
                    if (a) {
                        var o = R(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return M(this, t)
                }
            }

            function M(e, a) {
                if (a && ("object" === S(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
                return A(e)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function R(e) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var X = [{
                    url: "https://media.blooket.com/image/upload/v1661730126/Media/uiTest/New_Coin-01.svg",
                    score: 0
                }, {
                    url: "https://media.blooket.com/image/upload/v1661730126/Media/uiTest/New_Coin-02.svg",
                    score: 10
                }, {
                    url: "https://media.blooket.com/image/upload/v1661730126/Media/uiTest/New_Coin-03.svg",
                    score: 25
                }, {
                    url: "https://media.blooket.com/image/upload/v1661730126/Media/uiTest/New_Coin-04.svg",
                    score: 50
                }],
                H = function(e) {
                    ! function(e, a) {
                        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(a && a.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), a && D(e, a)
                    }(c, e);
                    var a, t, s, l, n, i = Y(c);

                    function c(e) {
                        var a;
                        return function(e, a) {
                            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (a = i.call(this, e)).state = {
                            game: O(a.props.blook),
                            score: 0,
                            gameOver: !1,
                            canRestart: !1
                        }, a.restartGame = a.restartGame.bind(A(a)), a
                    }
                    return a = c, (t = [{
                        key: "componentDidMount",
                        value: (l = I().mark((function e() {
                            var a = this;
                            return I().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.state.game.instance) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, new Promise((function(e) {
                                            return setTimeout(e, 500)
                                        }));
                                    case 3:
                                        e.next = 0;
                                        break;
                                    case 5:
                                        this.state.game.instance.events.on("add-score", (function() {
                                            a.setState({
                                                score: a.state.score + 1
                                            })
                                        })), this.state.game.instance.events.on("game-over", (function() {
                                            a.setState({
                                                gameOver: !0,
                                                canRestart: !1
                                            }, (function() {
                                                a.restartTimeout = setTimeout((function() {
                                                    a.setState({
                                                        canRestart: !0
                                                    })
                                                }), 200)
                                            }))
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                a = arguments;
                            return new Promise((function(t, s) {
                                var o = l.apply(e, a);

                                function r(e) {
                                    z(o, t, s, r, n, "next", e)
                                }

                                function n(e) {
                                    z(o, t, s, r, n, "throw", e)
                                }
                                r(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.blook !== this.props.blook && this.state.game.instance.events.emit("set-blook", this.props.blook)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.restartTimeout)
                        }
                    }, {
                        key: "restartGame",
                        value: function() {
                            this.state.canRestart && (this.state.game.instance.events.emit("restart-game"), this.setState({
                                gameOver: !1,
                                score: 0
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.a.createElement("div", {
                                className: _.a.container,
                                id: "phaser-bouncy"
                            }, o.a.createElement(r.a, {
                                game: this.state.game
                            }), this.state.gameOver ? o.a.createElement("div", {
                                className: _.a.gameOverContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.restartGame
                            }, o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1662496894/Media/uiTest/Final_Ui_Titan_One_No_Outline.svg",
                                alt: "UI",
                                className: _.a.gameOverUI,
                                draggable: !1
                            }), o.a.createElement("img", {
                                src: (e = this.state.score, a = "", X.forEach((function(t) {
                                    e >= t.score && (a = t.url)
                                })), a),
                                alt: "Medal",
                                className: _.a.medalImg,
                                draggable: !1
                            }), o.a.createElement("div", {
                                className: _.a.gameOverScore
                            }, o.a.createElement("div", {
                                className: _.a.gameOverScoreHeader
                            }, "Score"), this.state.score)) : o.a.createElement("div", {
                                className: _.a.scoreText
                            }, this.state.score));
                            var e, a
                        }
                    }]) && L(a.prototype, t), s && L(a, s), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            H.propTypes = {
                blook: n.a.string
            };
            a.a = H
        },
        lmLo: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("55Ip"),
                i = t("TSYQ"),
                _ = t.n(i),
                c = t("k1fK"),
                m = t.n(c),
                p = function(e) {
                    var a = e.onClick,
                        t = e.color,
                        s = e.outsideClass,
                        r = e.insideClass,
                        l = e.style,
                        i = e.children,
                        c = e.linkTo,
                        p = l || {};
                    return c ? o.a.createElement(n.b, {
                        className: _()(m.a.button, s),
                        style: p,
                        to: c
                    }, o.a.createElement("div", {
                        className: m.a.shadow
                    }), o.a.createElement("div", {
                        className: m.a.edge,
                        style: {
                            backgroundColor: t
                        }
                    }), o.a.createElement("div", {
                        className: _()(m.a.front, r),
                        style: {
                            backgroundColor: t
                        }
                    }, i)) : o.a.createElement("div", {
                        className: _()(m.a.button, s),
                        style: p,
                        role: "button",
                        tabIndex: 0,
                        onClick: a
                    }, o.a.createElement("div", {
                        className: m.a.shadow
                    }), o.a.createElement("div", {
                        className: m.a.edge,
                        style: {
                            backgroundColor: t
                        }
                    }), o.a.createElement("div", {
                        className: _()(m.a.front, r),
                        style: {
                            backgroundColor: t
                        }
                    }, i))
                };
            p.propTypes = {
                onClick: l.a.func,
                color: l.a.string,
                outsideClass: l.a.string,
                insideClass: l.a.string,
                style: l.a.object,
                children: l.a.oneOfType([l.a.string, l.a.element]),
                linkTo: l.a.string
            }, a.a = p
        },
        mXOY: function(e, a, t) {
            var s = t("OI9K");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        nDuC: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__background___mq13L-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#333;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__text___y0CeE-camelCase{color:#fff;font-size:6vw;font-family:Titan One,sans-serif;text-align:center;margin-top:75px}.styles__blook___HviQ7-camelCase{height:129.375px;width:112.5px;transform:rotate(-45deg);transition:all .3s ease-in-out;animation-name:styles__blook___HviQ7-camelCase;bottom:0}.styles__blook___HviQ7-camelCase,.styles__shadow___gcYJJ-camelCase{animation-duration:1.2s;animation-timing-function:ease;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal;animation-play-state:running;position:absolute;left:0;top:133.875px;z-index:1}.styles__dancing___2yjv6-camelCase{width:112.5px;height:133.875px;margin:150px auto;position:relative}.styles__shadow___gcYJJ-camelCase{animation-name:styles__shadow___gcYJJ-camelCase;width:97.5px;height:10px;left:7.5px;position:absolute;bottom:0;display:inline-block;background:rgba(0,0,0,.2);border-radius:100px;z-index:0}@keyframes styles__blook___HviQ7-camelCase{0%{top:0;transform:rotate(-15deg)}10%{top:-37.5px;transform:rotate(0deg)}50%{top:0;transform:rotate(15deg)}60%{top:-37.5px;transform:rotate(0deg)}to{top:0;transform:rotate(-15deg)}}@keyframes styles__shadow___gcYJJ-camelCase{0%{transform:scale(1)}10%{transform:scaleX(1.3)}50%{transform:scale(1)}60%{transform:scaleX(1.3)}to{transform:scale(1)}}@media only screen and (max-width:600px){.styles__text___y0CeE-camelCase{font-size:5vh}}", ""]), a.locals = {
                background: "styles__background___mq13L-camelCase",
                text: "styles__text___y0CeE-camelCase",
                blook: "styles__blook___HviQ7-camelCase",
                shadow: "styles__shadow___gcYJJ-camelCase",
                dancing: "styles__dancing___2yjv6-camelCase"
            }
        },
        nTIR: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("gn96"),
                c = t.n(_),
                m = t("74sb"),
                p = function(e) {
                    var a = e.mode,
                        t = e.amount;
                    return o.a.createElement("div", {
                        className: c.a.container
                    }, o.a.createElement("div", {
                        className: c.a.wave1,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n1)
                    }, "Click to Cast Your Line"), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n2)
                    }, "Click to Reel Once You Hook a Fish"), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n3)
                    }, "Answer Questions to Reel In The Fish"), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n4)
                    }, "Watch Out For Catching Some Crazy Things!"), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n5)
                    }, "Time" === a ? "Most total fish weight after ".concat(Object(m.l)(t), " ").concat("1" === t ? "minute" : "minutes", " wins!") : "First player to have ".concat(Object(m.l)(t), " lbs of fish wins!")), o.a.createElement("div", {
                        className: i()(c.a.text, c.a.n6)
                    }, "Good Luck!"), o.a.createElement("div", {
                        className: c.a.wave2,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }), o.a.createElement("div", {
                        className: c.a.wave3,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }), o.a.createElement("div", {
                        className: c.a.wave4,
                        style: {
                            backgroundSize: "100px 320px"
                        }
                    }))
                };
            p.propTypes = {
                mode: l.a.string,
                amount: l.a.any
            }, a.a = p
        },
        nhtp: function(e, a, t) {
            var s = t("gMLK");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        oBEL: function(e, a, t) {
            var s = t("FYI0");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        p4Pv: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("4HzQ"),
                i = (t("55Ip"), t("TSYQ")),
                _ = t.n(i),
                c = t("Zu/c"),
                m = t("Xst1"),
                p = t.n(m),
                d = t("NoTM"),
                u = t.n(d),
                f = t("2Euj"),
                h = t("0oXL"),
                y = t("74sb");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function v(e, a) {
                return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function x(e) {
                var a = function() {
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
                    var t, s = k(e);
                    if (a) {
                        var o = k(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return C(this, t)
                }
            }

            function C(e, a) {
                if (a && ("object" === g(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
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
            var T = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && v(e, a)
                }(l, e);
                var a, t, s, r = x(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {
                        full: Object(y.i)()
                    }, a.checkResize = a.checkResize.bind(w(a)), a.audio = new Audio(c.a), a
                }
                return a = l, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        window.addEventListener("resize", this.checkResize), this.audio.volume = .7, this.props.muted && (this.audio.muted = !0), this.audioTimeout = setTimeout((function() {
                            e.audio.play()
                        }), 3500)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.checkResize), clearTimeout(this.audioTimeout)
                    }
                }, {
                    key: "checkResize",
                    value: function() {
                        this.setState({
                            full: Object(y.i)()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return o.a.createElement("div", {
                            style: {
                                fontFamily: '"Macondo", sans-serif'
                            }
                        }, o.a.createElement("div", {
                            className: u.a.header
                        }, o.a.createElement("i", {
                            className: _()(u.a.expandIcon, this.state.full ? "fas fa-compress" : "fas fa-expand"),
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    full: Object(y.u)()
                                })
                            }
                        }), o.a.createElement("div", {
                            className: u.a.headerTextCenter
                        }, "Final Standings"), this.props.historyId ? o.a.createElement("a", {
                            className: u.a.headerRight,
                            href: "".concat("https://dashboard.blooket.com", "/history/game/").concat(this.props.historyId)
                        }, "View Report") : null), o.a.createElement("div", {
                            className: p.a.hostRegularBody
                        }, o.a.createElement("a", {
                            href: "/host?id=".concat(this.props.gameId),
                            className: u.a.again
                        }, "Play Again"), this.props.standings[0] ? o.a.createElement("div", {
                            className: u.a.containerOne
                        }, o.a.createElement(f.a, {
                            className: u.a.dino,
                            content: o.a.createElement(o.a.Fragment, null, o.a.createElement(n.Textfit, {
                                className: u.a.nameTextOne,
                                mode: "multi",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(y.v)("10vw")
                            }, this.props.standings[0].name), o.a.createElement(n.Textfit, {
                                className: u.a.scoreTextOne,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(y.v)("10vw")
                            }, this.props.stats[0]), o.a.createElement(h.a, {
                                name: this.props.standings[0].blook,
                                className: u.a.firstBlook
                            }))
                        }), o.a.createElement("div", {
                            className: u.a.placeOne
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(y.v)("5.5vw")
                        }, "1"), o.a.createElement(n.Textfit, {
                            className: u.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(y.v)("2.5vw")
                        }, "st"))) : null, this.props.standings[1] ? o.a.createElement("div", {
                            className: u.a.containerTwo
                        }, o.a.createElement(f.a, {
                            className: u.a.dino,
                            content: o.a.createElement(o.a.Fragment, null, o.a.createElement(n.Textfit, {
                                className: u.a.nameTextTwo,
                                mode: "multi",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(y.v)("10vw")
                            }, this.props.standings[1].name), o.a.createElement(n.Textfit, {
                                className: u.a.scoreTextTwo,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(y.v)("10vw")
                            }, this.props.stats[1]), o.a.createElement(h.a, {
                                name: this.props.standings[1].blook,
                                className: u.a.secondBlook
                            }))
                        }), o.a.createElement("div", {
                            className: u.a.placeTwo
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(y.v)("5.5vw")
                        }, this.props.standings[1].place), o.a.createElement(n.Textfit, {
                            className: u.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(y.v)("2.5vw")
                        }, Object(y.e)(this.props.standings[1].place)))) : null, this.props.standings[2] ? o.a.createElement("div", {
                            className: u.a.containerThree
                        }, o.a.createElement(f.a, {
                            className: u.a.dino,
                            content: o.a.createElement(o.a.Fragment, null, o.a.createElement(n.Textfit, {
                                className: u.a.nameTextThree,
                                mode: "multi",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(y.v)("10vw")
                            }, this.props.standings[2].name), o.a.createElement(n.Textfit, {
                                className: u.a.scoreTextThree,
                                mode: "single",
                                forceSingleModeWidth: !1,
                                min: 1,
                                max: Object(y.v)("10vw")
                            }, this.props.stats[2]), o.a.createElement(h.a, {
                                name: this.props.standings[2].blook,
                                className: u.a.thirdBlook
                            }))
                        }), o.a.createElement("div", {
                            className: u.a.placeThree
                        }, o.a.createElement(n.Textfit, {
                            className: u.a.placeText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(y.v)("5.5vw")
                        }, this.props.standings[2].place), o.a.createElement(n.Textfit, {
                            className: u.a.superPlaceText,
                            mode: "single",
                            forceSingleModeWidth: !1,
                            min: 1,
                            max: Object(y.v)("2.5vw")
                        }, Object(y.e)(this.props.standings[2].place)))) : null, this.props.standings[3] ? o.a.createElement("div", {
                            className: u.a.standingsArray
                        }, this.props.standings.slice(3, this.props.standings.length).map((function(a) {
                            return o.a.createElement(f.a, {
                                key: a.name,
                                className: u.a.standingHolder,
                                content: o.a.createElement("div", {
                                    className: u.a.standingContainer
                                }, o.a.createElement("div", {
                                    className: u.a.standingPlaceText
                                }, a.place), o.a.createElement("div", {
                                    className: u.a.standingSuperPlaceText
                                }, Object(y.e)(a.place)), o.a.createElement(h.a, {
                                    name: a.blook,
                                    className: u.a.standingBlook
                                }), o.a.createElement("div", {
                                    className: u.a.standingNameText
                                }, a.name), o.a.createElement("div", {
                                    className: u.a.standingStatText
                                }, e.props.stats[e.props.standings.indexOf(a)]))
                            })
                        }))) : null))
                    }
                }]) && b(a.prototype, t), s && b(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            T.propTypes = {
                standings: l.a.array,
                stats: l.a.array,
                historyId: l.a.string,
                gameId: l.a.string,
                muted: l.a.bool
            }, a.a = T
        },
        pQbs: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("QjaI"),
                i = t.n(n),
                _ = function(e) {
                    var a = e.title,
                        t = e.stat,
                        s = e.titleTwo,
                        r = e.statTwo,
                        l = e.message;
                    return l ? o.a.createElement("div", {
                        className: i.a.extraMsg
                    }, o.a.createElement("div", {
                        className: i.a.extraText
                    }, l)) : s ? o.a.createElement("div", {
                        className: i.a.extraShortStats
                    }, o.a.createElement("div", {
                        className: i.a.extraStatShort
                    }, o.a.createElement("div", {
                        className: i.a.extraLeftText
                    }, a), o.a.createElement("div", {
                        className: i.a.extraRightText
                    }, t)), o.a.createElement("div", {
                        className: i.a.extraStatShort
                    }, o.a.createElement("div", {
                        className: i.a.extraLeftText
                    }, s), o.a.createElement("div", {
                        className: i.a.extraRightText
                    }, r))) : o.a.createElement("div", {
                        className: i.a.extraStatLong
                    }, o.a.createElement("div", {
                        className: i.a.extraLeftText
                    }, a), o.a.createElement("div", {
                        className: i.a.extraRightText
                    }, t))
                };
            _.propTypes = {
                title: l.a.string,
                stat: l.a.any,
                titleTwo: l.a.string,
                statTwo: l.a.any,
                message: l.a.string
            }, a.a = _
        },
        pSbO: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__passContainer___2Fj2w-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);width:100%;height:185px;padding:10px 25px;margin:30px auto 10px;box-sizing:border-box;position:relative;background-color:#9048c6;background-image:repeating-linear-gradient(45deg,#9b5acb 25%,transparent 0,transparent 75%,#9b5acb 0,#9b5acb),repeating-linear-gradient(45deg,#9b5acb 25%,#9048c6 0,#9048c6 75%,#9b5acb 0,#9b5acb);background-position:0 0,20px 20px;background-size:40px 40px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__passInside___CQ8Dw-camelCase{width:calc(100% - 50px);height:calc(100% - 20px);position:absolute;top:10px;left:25px;overflow-x:auto;scrollbar-width:none}.styles__passInside___CQ8Dw-camelCase::-webkit-scrollbar{height:0}.styles__passBarWrapper___1Sitr-camelCase{width:100%;bottom:20px;border-radius:10px;background-color:rgba(0,0,0,.4);box-shadow:0 0 8px 3px rgba(0,0,0,.2);overflow:hidden}.styles__passBar___39eRe-camelCase,.styles__passBarWrapper___1Sitr-camelCase{height:10px;position:absolute;left:0}.styles__passBar___39eRe-camelCase{background-color:#ef7426;min-width:40px;top:0;box-sizing:border-box}.styles__passBarInside___26zPM-camelCase{width:100%;height:5px;background-color:#fcd843}.styles__passBarLevel___D6OmO-camelCase{width:40px;height:40px;border-radius:50%;position:absolute;bottom:5px;background-color:#fcd843;border:3.5px solid #ef7426;box-sizing:border-box;font-size:24px;font-family:Titan One,sans-serif;text-shadow:-1px -1px 0 #646464,1px -1px 0 #646464,-1px 1px 0 #646464,2px 2px 0 #646464;box-shadow:0 0 8px 3px rgba(0,0,0,.2);padding-bottom:2px;padding-right:.5px;transform:translateX(-50%);color:#fff;display:flex;justify-content:center;align-items:center}.styles__passBarLevelLocked___35DJo-camelCase{background-color:#404040;border:3.5px solid #333;opacity:.8}.styles__passPrize___31Siw-camelCase{width:70px;height:90px;border-radius:5px;position:absolute;bottom:52.5px;background-color:#fcd843;border:4px solid #ef7426;box-sizing:border-box;transform:translateX(-50%);display:flex;flex-direction:column;justify-content:center;align-items:center;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__passPart___3A_ls-camelCase{width:50px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__passPrizeText___1DDcE-camelCase{text-shadow:-1px -1px 0 #646464,1px -1px 0 #646464,-1px 1px 0 #646464,1px 1px 0 #646464;font-size:12px;line-height:12px;color:#fff;font-weight:700;margin-top:4px}.styles__passPrizeLocked___2BOfw-camelCase{background-color:#404040;border:4px solid #333;opacity:.8}.styles__passHeader___2qLTt-camelCase,.styles__passHeaderRight___1idaX-camelCase{position:absolute;top:-28px;left:-10px;height:45px;background-color:#ef7426;box-sizing:border-box;border-radius:7px;padding:4px 4px 8px;box-shadow:0 4px rgba(0,0,0,.2),inset 0 -4px rgba(0,0,0,.2)}.styles__passHeaderRight___1idaX-camelCase{right:-10px;left:unset}.styles__passHeaderInside___3LQOs-camelCase{height:100%;width:100%;box-sizing:border-box;background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);display:flex;justify-content:center;align-items:center;padding:0 15px;border-radius:5px;text-shadow:-1px -1px 0 #646464,1px -1px 0 #646464,-1px 1px 0 #646464,2px 2px 0 #646464;font-family:Titan One,sans-serif;color:#fff;font-size:26px}@media only screen and (max-width:800px){.styles__smallPassHeader___35o4E-camelCase{display:none}.styles__smallPassHeaderRight___3wp3o-camelCase{right:50%;transform:translateX(50%);width:200px}}@media only screen and (max-width:600px){.styles__passHeader___2qLTt-camelCase{display:none}.styles__passHeaderRight___1idaX-camelCase{right:50%;transform:translateX(50%);width:200px}}", ""]), a.locals = {
                passContainer: "styles__passContainer___2Fj2w-camelCase",
                passInside: "styles__passInside___CQ8Dw-camelCase",
                passBarWrapper: "styles__passBarWrapper___1Sitr-camelCase",
                passBar: "styles__passBar___39eRe-camelCase",
                passBarInside: "styles__passBarInside___26zPM-camelCase",
                passBarLevel: "styles__passBarLevel___D6OmO-camelCase",
                passBarLevelLocked: "styles__passBarLevelLocked___35DJo-camelCase",
                passPrize: "styles__passPrize___31Siw-camelCase",
                passPart: "styles__passPart___3A_ls-camelCase",
                passPrizeText: "styles__passPrizeText___1DDcE-camelCase",
                passPrizeLocked: "styles__passPrizeLocked___2BOfw-camelCase",
                passHeader: "styles__passHeader___2qLTt-camelCase",
                passHeaderRight: "styles__passHeaderRight___1idaX-camelCase",
                passHeaderInside: "styles__passHeaderInside___3LQOs-camelCase",
                smallPassHeader: "styles__smallPassHeader___35o4E-camelCase",
                smallPassHeaderRight: "styles__smallPassHeaderRight___3wp3o-camelCase"
            }
        },
        qFIf: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("0oXL"),
                c = t("LAIx"),
                m = t("ENNI"),
                p = t.n(m),
                d = function(e) {
                    var a = e.name,
                        t = e.blook,
                        s = e.message,
                        r = e.night,
                        l = e.glitchInfo,
                        n = e.isWhite;
                    return o.a.createElement("div", {
                        className: p.a.container,
                        style: {
                            color: r || n ? "#fff" : null
                        }
                    }, o.a.createElement(_.a, {
                        name: t,
                        className: p.a.image
                    }), o.a.createElement("div", {
                        className: p.a.right
                    }, o.a.createElement("span", {
                        style: {
                            fontWeight: "bold",
                            color: r || n ? "#fff" : Object(c.a)(t)
                        }
                    }, a), " ", s, " ", l && l[0] ? o.a.createElement("i", {
                        className: i()(p.a.glitchIcon, l[0]),
                        style: {
                            color: r || n ? "#fff" : l[1]
                        }
                    }) : null))
                };
            d.propTypes = {
                name: l.a.string,
                blook: l.a.string,
                message: l.a.string,
                night: l.a.bool,
                glitchInfo: l.a.array,
                isWhite: l.a.bool
            }, a.a = d
        },
        qnYv: function(e, a, t) {
            "use strict";
            t.d(a, "a", (function() {
                return o
            }));
            var s = t("vDqi"),
                o = t.n(s).a.create({
                    baseURL: "https://play.blooket.com",
                    withCredentials: !0
                })
        },
        rPUr: function(e, a, t) {
            var s = t("dlDy");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        sLLB: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".arts__modal___VpEAD-camelCase{display:block;position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6)}.arts__mBody___2KdVv-camelCase{top:0;min-height:100%;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;background-color:#f7f7f7}.arts__mBody___2KdVv-camelCase,.arts__regularBody___1TM6E-camelCase{margin:0;padding:0;position:absolute;left:0;width:100%;z-index:-1}.arts__regularBody___1TM6E-camelCase{height:calc(100% - 55px);top:55px}.arts__profileRegularBody___2fvy5-camelCase{height:calc(100% - 55px);width:100%;margin:0 auto;padding-top:55px;position:relative;z-index:-1}.arts__hostRegularBody___Yp72x-camelCase{width:100%;height:calc(100% - 65px);margin:0;padding:0;position:absolute;top:65px;left:0;z-index:-1}.arts__regularBodyMax___1IzZX-camelCase{height:calc(100% - 55px);width:100%;max-width:1366px;margin:0 auto;padding-top:55px;position:relative;z-index:-1}.arts__body___3acI_-camelCase{width:100%;min-height:100vh;overflow-x:hidden;background-color:#f7f7f7}.arts__body___3acI_-camelCase,.arts__hostBody___1Z9ui-camelCase{margin:0;padding:0;position:absolute;top:0;left:0;z-index:-1}.arts__hostBody___1Z9ui-camelCase{width:100vw;height:100vh;overflow:hidden;background-color:#0bc2cf}.arts__royaleHeaderContainer___c23M6-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center;margin:7vh auto 4vh;height:12vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.arts__royaleHeaderText___2CGb9-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:5vw;opacity:0;animation:arts__fadeInPop___2oDEV-camelCase .3s linear .5s forwards}@keyframes arts__fadeInPop___2oDEV-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.arts__leftSlantLine___2RNzk-camelCase{width:10vh;top:3.1vh;left:0;transform:rotate(60deg)}.arts__leftBottomLine___MwYEr-camelCase,.arts__leftSlantLine___2RNzk-camelCase{height:1vh;border-radius:7px;background-color:#3a3a3a;position:absolute}.arts__leftBottomLine___MwYEr-camelCase{width:20vw;top:7.071vh;left:7.071vh}.arts__leftName___11lEC-camelCase{color:#3a3a3a;text-align:left;position:absolute;left:7.5vh;top:-2.5vh;height:9.5vh;width:20vw;font-family:Nunito,sans-serif;font-weight:700;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.arts__leftEnergyIcon___1rm7a-camelCase{color:#9a49aa;font-size:2.25vw;position:absolute;top:7.8vh;left:1.2vw}.arts__leftEnergyContainer___EuHQi-camelCase{position:absolute;top:9vh;left:7.5vh;display:flex;flex-direction:row;justify-content:flex-start;width:20vw}.arts__energy___1CSfe-camelCase{background-color:#9a49aa;height:2vh;border-radius:5px}.arts__rightSlantLine___25aUV-camelCase{width:10vh;top:3.1vh;right:0;transform:rotate(-60deg)}.arts__rightBottomLine___Y14OT-camelCase,.arts__rightSlantLine___25aUV-camelCase{height:1vh;border-radius:7px;background-color:#3a3a3a;position:absolute}.arts__rightBottomLine___Y14OT-camelCase{width:20vw;top:7.071vh;right:7.071vh}.arts__rightName____zdk3-camelCase{color:#3a3a3a;text-align:right;position:absolute;right:7.5vh;top:-2.5vh;height:9.5vh;width:20vw;font-family:Nunito,sans-serif;font-weight:700;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.arts__rightEnergyIcon___ScBAQ-camelCase{color:#9a49aa;font-size:2.25vw;position:absolute;top:7.8vh;right:1.2vw}.arts__rightEnergyContainer___2VthH-camelCase{position:absolute;top:9vh;right:7.5vh;display:flex;flex-direction:row;justify-content:flex-end;width:20vw}.arts__skipButton___dKgaS-camelCase{position:absolute;top:75px;right:1vw;font-size:3vw;color:#fff;text-align:right;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.arts__skipButton___dKgaS-camelCase:hover{transform:scale(1.05)}.arts__moreButton___3UUpF-camelCase{width:200px;height:60px;line-height:60px;background-color:#0bc2cf;border-radius:7px;margin:45px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-align:center;outline:none;font-family:Nunito,sans-serif;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.arts__moreButton___3UUpF-camelCase:hover{transform:scale(1.05)}.arts__factorySpin___1sK4R-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;animation:arts__vortex___30Y8V-camelCase 4s linear 0s 2}@keyframes arts__vortex___30Y8V-camelCase{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.arts__factoryReverse___1obff-camelCase{transform:rotateY(180deg)}.arts__factoryFlip___3lusY-camelCase,.arts__factoryReverse___1obff-camelCase{position:absolute;top:0;left:0;height:100%;width:100%}.arts__factoryFlip___3lusY-camelCase{transform:rotateX(180deg) rotateY(180deg)}.arts__factoryMicro___1v9fV-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;transform:scale(.4)}.arts__bottomTipText___3rLy_-camelCase{position:absolute;bottom:.5%;left:5%;width:90%;font-size:20px;text-align:center;color:#fff;text-shadow:2px 2px 8px grey}.arts__bottomTipText___3rLy_-camelCase,.arts__googleButton___1rop5-camelCase{font-family:Nunito,sans-serif}.arts__googleButton___1rop5-camelCase{padding:5px 20px;display:flex;flex-direction:row;justify-content:center;align-items:center;box-shadow:0 0 2px 2px rgba(0,0,0,.24);background-color:#fff;border-radius:5px;margin:0 auto 10px;color:#999;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.arts__googleButton___1rop5-camelCase:hover{transform:scale(.95)}.arts__googleLogo___kJrfb-camelCase{width:25px;margin-right:10px}.arts__slantBackground___1yw2G-camelCase{height:80vh;width:150vw;background-color:#0bc2cf;box-shadow:inset 0 -7px rgba(0,0,0,.2);position:absolute;top:calc(-30vh + 55px);left:-25vw;transform:rotate(-10deg);z-index:-1}.arts__tooltip___OAwzR-camelCase{font-family:Nunito,sans-serif!important;font-size:15px!important;line-height:17px!important;padding:6px 13px!important;max-width:185px;text-align:center}.arts__modalButton___1y_HF-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;top:0;height:100%}.arts__bigImage___1UJT0-camelCase{width:80%;height:80%;-o-object-fit:contain;object-fit:contain;position:absolute;top:calc(50% + 27.5px);left:50%;transform:translate(-50%,-50%)}.arts__underline___1nwbn-camelCase{text-decoration:underline}.arts__blockedText___390eB-camelCase{font-size:20px;color:#fff;font-weight:700;text-align:center;position:absolute;top:50%;left:5%;width:90%;transform:translateY(-50%)}.arts__profileBody___eNPbH-camelCase{left:220px;margin:0;padding:0}.arts__profileBody___eNPbH-camelCase,.arts__profileBodyMax___3SXtp-camelCase{position:absolute;top:0;height:100%;width:calc(100% - 220px)}.arts__profileBodyMax___3SXtp-camelCase{left:calc(50% + 110px);transform:translateX(-50%);max-width:1366px}@media only screen and (max-width:850px){.arts__profileBody___eNPbH-camelCase{left:0;width:100%;top:55px;height:calc(100% - 55px)}.arts__profileBodyMax___3SXtp-camelCase{top:55px;left:50%;transform:translateX(-50%);width:100%}}", ""]), a.locals = {
                modal: "arts__modal___VpEAD-camelCase",
                mBody: "arts__mBody___2KdVv-camelCase",
                regularBody: "arts__regularBody___1TM6E-camelCase",
                profileRegularBody: "arts__profileRegularBody___2fvy5-camelCase",
                hostRegularBody: "arts__hostRegularBody___Yp72x-camelCase",
                regularBodyMax: "arts__regularBodyMax___1IzZX-camelCase",
                body: "arts__body___3acI_-camelCase",
                hostBody: "arts__hostBody___1Z9ui-camelCase",
                royaleHeaderContainer: "arts__royaleHeaderContainer___c23M6-camelCase",
                royaleHeaderText: "arts__royaleHeaderText___2CGb9-camelCase",
                fadeInPop: "arts__fadeInPop___2oDEV-camelCase",
                leftSlantLine: "arts__leftSlantLine___2RNzk-camelCase",
                leftBottomLine: "arts__leftBottomLine___MwYEr-camelCase",
                leftName: "arts__leftName___11lEC-camelCase",
                leftEnergyIcon: "arts__leftEnergyIcon___1rm7a-camelCase",
                leftEnergyContainer: "arts__leftEnergyContainer___EuHQi-camelCase",
                energy: "arts__energy___1CSfe-camelCase",
                rightSlantLine: "arts__rightSlantLine___25aUV-camelCase",
                rightBottomLine: "arts__rightBottomLine___Y14OT-camelCase",
                rightName: "arts__rightName____zdk3-camelCase",
                rightEnergyIcon: "arts__rightEnergyIcon___ScBAQ-camelCase",
                rightEnergyContainer: "arts__rightEnergyContainer___2VthH-camelCase",
                skipButton: "arts__skipButton___dKgaS-camelCase",
                moreButton: "arts__moreButton___3UUpF-camelCase",
                factorySpin: "arts__factorySpin___1sK4R-camelCase",
                vortex: "arts__vortex___30Y8V-camelCase",
                factoryReverse: "arts__factoryReverse___1obff-camelCase",
                factoryFlip: "arts__factoryFlip___3lusY-camelCase",
                factoryMicro: "arts__factoryMicro___1v9fV-camelCase",
                bottomTipText: "arts__bottomTipText___3rLy_-camelCase",
                googleButton: "arts__googleButton___1rop5-camelCase",
                googleLogo: "arts__googleLogo___kJrfb-camelCase",
                slantBackground: "arts__slantBackground___1yw2G-camelCase",
                tooltip: "arts__tooltip___OAwzR-camelCase",
                modalButton: "arts__modalButton___1y_HF-camelCase",
                bigImage: "arts__bigImage___1UJT0-camelCase",
                underline: "arts__underline___1nwbn-camelCase",
                blockedText: "arts__blockedText___390eB-camelCase",
                profileBody: "arts__profileBody___eNPbH-camelCase",
                profileBodyMax: "arts__profileBodyMax___3SXtp-camelCase"
            }
        },
        sevs: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___1flOO-camelCase{width:320px;height:480px;position:relative}.styles__scoreText___3AKG3-camelCase{text-align:center;top:30px;font-family:Titan One,sans-serif;color:#fff;font-size:36px;text-shadow:3px 3px rgba(0,0,0,.2)}.styles__gameOverContainer___1snne-camelCase,.styles__scoreText___3AKG3-camelCase{width:100%;position:absolute;left:0}.styles__gameOverContainer___1snne-camelCase{top:0;height:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__gameOverUI___VT21V-camelCase{width:80%;position:absolute;top:70px;left:10%}.styles__medalImg___2km6l-camelCase{position:absolute;top:190px;left:95px;transform:translate(-50%,-50%);width:70px}.styles__gameOverScore___2m205-camelCase{position:absolute;top:185px;right:100px;transform:translate(50%,-50%);width:100px;font-family:Titan One,sans-serif;font-size:30px;color:#546568;text-align:center}.styles__gameOverScoreHeader___GjBXO-camelCase{font-size:22px}", ""]), a.locals = {
                container: "styles__container___1flOO-camelCase",
                scoreText: "styles__scoreText___3AKG3-camelCase",
                gameOverContainer: "styles__gameOverContainer___1snne-camelCase",
                gameOverUI: "styles__gameOverUI___VT21V-camelCase",
                medalImg: "styles__medalImg___2km6l-camelCase",
                gameOverScore: "styles__gameOverScore___2m205-camelCase",
                gameOverScoreHeader: "styles__gameOverScoreHeader___GjBXO-camelCase"
            }
        },
        srL4: function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___Ym2ej-camelCase{position:absolute;width:100%;height:100%;overflow:hidden}.styles__blookContainer___11r7f-camelCase{position:absolute;width:14vw;animation-name:styles__rollUp___1ZydU-camelCase;animation-timing-function:linear;animation-iteration-count:infinite}@keyframes styles__rollUp___1ZydU-camelCase{0%{transform:translate(-50%,-50%) rotate(0deg)}10%{transform:translate(-50%,calc(-50% - 30vh)) rotate(100deg)}20%{transform:translate(-50%,calc(-50% - 60vh)) rotate(200deg)}30%{transform:translate(-50%,calc(-50% - 90vh)) rotate(300deg)}40%{transform:translate(-50%,calc(-50% - 120vh)) rotate(400deg)}50%{transform:translate(-50%,calc(-50% - 150vh)) rotate(500deg)}60%{transform:translate(-50%,calc(-50% - 180vh)) rotate(600deg)}70%{transform:translate(-50%,calc(-50% - 210vh)) rotate(700deg)}80%{transform:translate(-50%,calc(-50% - 240vh)) rotate(800deg)}90%{transform:translate(-50%,calc(-50% - 270vh)) rotate(900deg)}to{transform:translate(-50%,calc(-50% - 300vh)) rotate(1000deg)}}.styles__blook___2dMnT-camelCase{width:100%;filter:brightness(0) saturate(100%) invert(89%) sepia(51%) saturate(0) hue-rotate(46deg) brightness(112%) contrast(104%)}", ""]), a.locals = {
                container: "styles__container___Ym2ej-camelCase",
                blookContainer: "styles__blookContainer___11r7f-camelCase",
                rollUp: "styles__rollUp___1ZydU-camelCase",
                blook: "styles__blook___2dMnT-camelCase"
            }
        },
        "v9+r": function(e, a, t) {
            (a = e.exports = t("JPst")(!1)).push([e.i, ".styles__container___1Q9ss-camelCase{position:absolute;background-color:#fff;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);width:35vw;min-width:250px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;color:#3a3a3a;display:flex;flex-direction:row;align-items:center;transform:translate(-50%,-50%)}.styles__close___2jdDE-camelCase{font-size:14px;position:absolute;top:10px;right:10px}.styles__blook___3kMhk-camelCase{width:40%;margin:3vh 5%}.styles__msg___2cUVm-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;text-align:center;width:40%;margin:4vh 5% 4vh 0}@media only screen and (max-width:600px){.styles__msg___2cUVm-camelCase{font-size:3vh}.styles__container___1Q9ss-camelCase{width:25vw}}", ""]), a.locals = {
                container: "styles__container___1Q9ss-camelCase",
                close: "styles__close___2jdDE-camelCase",
                blook: "styles__blook___3kMhk-camelCase",
                msg: "styles__msg___2cUVm-camelCase"
            }
        },
        vCpj: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("4HzQ"),
                i = t("H1WH"),
                _ = t("jTyc"),
                c = t.n(_);

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function d(e, a) {
                return (d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
                    return e.__proto__ = a, e
                })(e, a)
            }

            function u(e) {
                var a = function() {
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
                    var t, s = y(e);
                    if (a) {
                        var o = y(this).constructor;
                        t = Reflect.construct(s, arguments, o)
                    } else t = s.apply(this, arguments);
                    return f(this, t)
                }
            }

            function f(e, a) {
                if (a && ("object" === m(a) || "function" == typeof a)) return a;
                if (void 0 !== a) throw new TypeError("Derived constructors may only return object or undefined");
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
            var g = function(e) {
                ! function(e, a) {
                    if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(a && a.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a && d(e, a)
                }(l, e);
                var a, t, s, r = u(l);

                function l(e) {
                    var a;
                    return function(e, a) {
                        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (a = r.call(this, e)).state = {
                        audioDuration: 0,
                        isPlayingAudio: !1
                    }, a.audio = null, a.audioDuration = 0, a.triedAgain = !1, a.playAudio = a.playAudio.bind(h(a)), a
                }
                return a = l, (t = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.autoplay && !i.isMobile && (this.delayTimeout = setTimeout((function() {
                            e.state.isPlayingAudio || e.playAudio()
                        }), 500))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.audio && this.audio.pause(), clearTimeout(this.delayTimeout)
                    }
                }, {
                    key: "playAudio",
                    value: function() {
                        var e = this;
                        this.state.isPlayingAudio ? (this.audio.pause(), this.props.onEnd && this.props.onEnd(), this.setState({
                            isPlayingAudio: !1
                        })) : this.state.audioDuration ? this.setState({
                            isPlayingAudio: !0
                        }, (function() {
                            e.props.onStart && e.props.onStart(), e.audio.play()
                        })) : this.audioDuration ? this.setState({
                            isPlayingAudio: !0,
                            audioDuration: this.audioDuration
                        }, (function() {
                            e.audio.currentTime = 0, e.props.onStart && e.props.onStart(), e.audio.play()
                        })) : (this.audio = new Audio(function(e) {
                            if (!e) return e;
                            var a = e.indexOf("upload/");
                            return -1 === a ? e : (a += 7, "".concat(e.slice(0, a)).concat("af_22050,br_48k").concat(e.slice(a - 1, e.length)))
                        }(this.props.audioUrl)), this.audio.addEventListener("loadedmetadata", (function() {
                            if (e.audio.duration === 1 / 0 && !e.triedAgain) return e.triedAgain = !0, e.playAudio();
                            e.audioDuration = e.audio.duration, e.setState({
                                audioDuration: e.audio.duration,
                                isPlayingAudio: !0
                            }, (function() {
                                e.props.onStart && e.props.onStart(), e.audio.play()
                            }))
                        })), this.audio.addEventListener("ended", (function() {
                            e.props.onEnd && e.props.onEnd(), e.setState({
                                isPlayingAudio: !1,
                                audioDuration: 0
                            })
                        }), !1))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: c.a.audioButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.playAudio,
                            style: {
                                width: this.props.width || null
                            }
                        }, o.a.createElement(n.Textfit, {
                            className: c.a.audioIcon,
                            mode: "multi",
                            min: 1,
                            max: 40
                        }, o.a.createElement("i", {
                            className: this.state.isPlayingAudio ? "fas fa-pause" : "fas fa-play"
                        })), this.state.audioDuration ? o.a.createElement("div", {
                            className: c.a.spinnerContainer
                        }, o.a.createElement("div", {
                            className: c.a.spinner,
                            style: {
                                animationDuration: "".concat(this.state.audioDuration, "s"),
                                animationPlayState: this.state.isPlayingAudio ? "running" : "paused"
                            }
                        }), o.a.createElement("div", {
                            className: c.a.filler,
                            style: {
                                animationDuration: "".concat(this.state.audioDuration, "s"),
                                animationPlayState: this.state.isPlayingAudio ? "running" : "paused"
                            }
                        }), o.a.createElement("div", {
                            className: c.a.mask,
                            style: {
                                animationDuration: "".concat(this.state.audioDuration, "s"),
                                animationPlayState: this.state.isPlayingAudio ? "running" : "paused"
                            }
                        })) : null)
                    }
                }]) && p(a.prototype, t), s && p(a, s), Object.defineProperty(a, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            g.propTypes = {
                audioUrl: l.a.string.isRequired,
                autoplay: l.a.bool,
                width: l.a.string,
                onStart: l.a.func,
                onEnd: l.a.func
            }, a.a = g
        },
        wYzb: function(e, a, t) {
            a = e.exports = t("JPst")(!1);
            var s = t("tgXZ")(t("IfDm"));
            a.push([e.i, ".styles__wrapper___1GQZ--camelCase{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;text-align:center;font-size:22px;color:#f4e1a4}.styles__button___2VTXx-camelCase{outline:none;cursor:pointer;transition:.2s}.styles__button___2VTXx-camelCase:hover{transform:scale(.95)}.styles__inside___1lFcD-camelCase{border:4px solid #af8942;padding:4px;box-sizing:border-box;width:100%;height:100%}.styles__corner1___2LAe6-camelCase,.styles__corner2___2T4sf-camelCase,.styles__corner3___ftZwC-camelCase,.styles__corner4___2Cc1e-camelCase,.styles__corner5___3QV10-camelCase,.styles__corner6___1or_5-camelCase,.styles__corner7___Vamu8-camelCase,.styles__corner8___2rMjB-camelCase{border:4px solid #af8942;background-color:#ead49a;background-image:radial-gradient(rgba(220,184,86,0),rgba(220,184,86,.2)),url(" + s + ");width:24px;height:24px;border-radius:50%;box-sizing:border-box;position:absolute;top:-12px;left:-12px}.styles__corner2___2T4sf-camelCase,.styles__corner3___ftZwC-camelCase{left:calc(100% - 12px)}.styles__corner3___ftZwC-camelCase,.styles__corner4___2Cc1e-camelCase{top:calc(100% - 12px)}.styles__corner5___3QV10-camelCase{top:-14px;left:-14px}.styles__corner6___1or_5-camelCase{top:-14px}.styles__corner6___1or_5-camelCase,.styles__corner7___Vamu8-camelCase{left:calc(100% - 10px)}.styles__corner7___Vamu8-camelCase,.styles__corner8___2rMjB-camelCase{top:calc(100% - 10px)}.styles__corner8___2rMjB-camelCase{left:-14px}.styles__center___RkEYP-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;overflow:hidden;width:100%;height:100%;background-color:#af8942}", ""]), a.locals = {
                wrapper: "styles__wrapper___1GQZ--camelCase",
                button: "styles__button___2VTXx-camelCase",
                inside: "styles__inside___1lFcD-camelCase",
                corner1: "styles__corner1___2LAe6-camelCase",
                corner2: "styles__corner2___2T4sf-camelCase",
                corner3: "styles__corner3___ftZwC-camelCase",
                corner4: "styles__corner4___2Cc1e-camelCase",
                corner5: "styles__corner5___3QV10-camelCase",
                corner6: "styles__corner6___1or_5-camelCase",
                corner7: "styles__corner7___Vamu8-camelCase",
                corner8: "styles__corner8___2rMjB-camelCase",
                center: "styles__center___RkEYP-camelCase"
            }
        },
        waYB: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("TSYQ"),
                i = t.n(n),
                _ = t("oBEL"),
                c = t.n(_),
                m = function(e) {
                    var a = e.text,
                        t = e.click,
                        s = e.color;
                    return o.a.createElement("div", {
                        className: "orange" === s ? c.a.upgradeButton : i()(c.a.button, "red" === s ? c.a.hoverRed : "green" === s ? c.a.hoverGreen : "white" === s ? c.a.hoverWhite : c.a.hoverBlue),
                        role: "button",
                        tabIndex: 0,
                        onClick: t
                    }, a)
                };
            m.propTypes = {
                text: l.a.string,
                click: l.a.func,
                color: l.a.string
            }, a.a = m
        },
        wto1: function(e, a, t) {
            var s = t("TuVA");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            t("aET+")(s, o);
            s.locals && (e.exports = s.locals)
        },
        x0md: function(e, a, t) {
            "use strict";
            var s = t("q1tI"),
                o = t.n(s),
                r = t("17x9"),
                l = t.n(r),
                n = t("1xYp"),
                i = t.n(n),
                _ = t("0oXL"),
                c = function(e) {
                    var a = e.name,
                        t = e.blook;
                    return o.a.createElement("div", {
                        className: i.a.container
                    }, o.a.createElement("div", {
                        className: i.a.header
                    }, "Health Inspection"), o.a.createElement("div", {
                        className: i.a.sponsor
                    }, "Sponsored By:", o.a.createElement(_.a, {
                        name: t,
                        className: i.a.blook
                    }), a), o.a.createElement("div", {
                        className: i.a.barHolder
                    }, o.a.createElement("div", {
                        className: i.a.bar
                    })))
                };
            c.propTypes = {
                name: l.a.string,
                blook: l.a.string
            }, a.a = c
        }
    }
]);