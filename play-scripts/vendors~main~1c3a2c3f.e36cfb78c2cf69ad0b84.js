(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        "4USb": function(t, e, r) {
            "use strict";
            var n;
            r.d(e, "a", (function() {
                return g
            }));
            var i = new Uint8Array(16);

            function o() {
                if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(i)
            }
            var a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            for (var u = function(t) {
                    return "string" == typeof t && a.test(t)
                }, c = [], s = 0; s < 256; ++s) c.push((s + 256).toString(16).substr(1));
            var f = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = (c[t[e + 0]] + c[t[e + 1]] + c[t[e + 2]] + c[t[e + 3]] + "-" + c[t[e + 4]] + c[t[e + 5]] + "-" + c[t[e + 6]] + c[t[e + 7]] + "-" + c[t[e + 8]] + c[t[e + 9]] + "-" + c[t[e + 10]] + c[t[e + 11]] + c[t[e + 12]] + c[t[e + 13]] + c[t[e + 14]] + c[t[e + 15]]).toLowerCase();
                if (!u(r)) throw TypeError("Stringified UUID is invalid");
                return r
            };
            var l = function(t) {
                if (!u(t)) throw TypeError("Invalid UUID");
                var e, r = new Uint8Array(16);
                return r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, r[1] = e >>> 16 & 255, r[2] = e >>> 8 & 255, r[3] = 255 & e, r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, r[5] = 255 & e, r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, r[7] = 255 & e, r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, r[9] = 255 & e, r[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = e / 4294967296 & 255, r[12] = e >>> 24 & 255, r[13] = e >>> 16 & 255, r[14] = e >>> 8 & 255, r[15] = 255 & e, r
            };
            var d = function(t, e, r) {
                function n(t, n, i, o) {
                    if ("string" == typeof t && (t = function(t) {
                            t = unescape(encodeURIComponent(t));
                            for (var e = [], r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
                            return e
                        }(t)), "string" == typeof n && (n = l(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var a = new Uint8Array(16 + t.length);
                    if (a.set(n), a.set(t, n.length), (a = r(a))[6] = 15 & a[6] | e, a[8] = 63 & a[8] | 128, i) {
                        o = o || 0;
                        for (var u = 0; u < 16; ++u) i[o + u] = a[u];
                        return i
                    }
                    return f(a)
                }
                try {
                    n.name = t
                } catch (t) {}
                return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n
            };

            function h(t) {
                return 14 + (t + 64 >>> 9 << 4) + 1
            }

            function p(t, e) {
                var r = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function v(t, e, r, n, i, o) {
                return p((a = p(p(e, t), p(n, o))) << (u = i) | a >>> 32 - u, r);
                var a, u
            }

            function b(t, e, r, n, i, o, a) {
                return v(e & r | ~e & n, t, e, i, o, a)
            }

            function w(t, e, r, n, i, o, a) {
                return v(e & n | r & ~n, t, e, i, o, a)
            }

            function y(t, e, r, n, i, o, a) {
                return v(e ^ r ^ n, t, e, i, o, a)
            }

            function m(t, e, r, n, i, o, a) {
                return v(r ^ (e | ~n), t, e, i, o, a)
            }
            d("v3", 48, (function(t) {
                if ("string" == typeof t) {
                    var e = unescape(encodeURIComponent(t));
                    t = new Uint8Array(e.length);
                    for (var r = 0; r < e.length; ++r) t[r] = e.charCodeAt(r)
                }
                return function(t) {
                    for (var e = [], r = 32 * t.length, n = 0; n < r; n += 8) {
                        var i = t[n >> 5] >>> n % 32 & 255,
                            o = parseInt("0123456789abcdef".charAt(i >>> 4 & 15) + "0123456789abcdef".charAt(15 & i), 16);
                        e.push(o)
                    }
                    return e
                }(function(t, e) {
                    t[e >> 5] |= 128 << e % 32, t[h(e) - 1] = e;
                    for (var r = 1732584193, n = -271733879, i = -1732584194, o = 271733878, a = 0; a < t.length; a += 16) {
                        var u = r,
                            c = n,
                            s = i,
                            f = o;
                        r = b(r, n, i, o, t[a], 7, -680876936), o = b(o, r, n, i, t[a + 1], 12, -389564586), i = b(i, o, r, n, t[a + 2], 17, 606105819), n = b(n, i, o, r, t[a + 3], 22, -1044525330), r = b(r, n, i, o, t[a + 4], 7, -176418897), o = b(o, r, n, i, t[a + 5], 12, 1200080426), i = b(i, o, r, n, t[a + 6], 17, -1473231341), n = b(n, i, o, r, t[a + 7], 22, -45705983), r = b(r, n, i, o, t[a + 8], 7, 1770035416), o = b(o, r, n, i, t[a + 9], 12, -1958414417), i = b(i, o, r, n, t[a + 10], 17, -42063), n = b(n, i, o, r, t[a + 11], 22, -1990404162), r = b(r, n, i, o, t[a + 12], 7, 1804603682), o = b(o, r, n, i, t[a + 13], 12, -40341101), i = b(i, o, r, n, t[a + 14], 17, -1502002290), n = b(n, i, o, r, t[a + 15], 22, 1236535329), r = w(r, n, i, o, t[a + 1], 5, -165796510), o = w(o, r, n, i, t[a + 6], 9, -1069501632), i = w(i, o, r, n, t[a + 11], 14, 643717713), n = w(n, i, o, r, t[a], 20, -373897302), r = w(r, n, i, o, t[a + 5], 5, -701558691), o = w(o, r, n, i, t[a + 10], 9, 38016083), i = w(i, o, r, n, t[a + 15], 14, -660478335), n = w(n, i, o, r, t[a + 4], 20, -405537848), r = w(r, n, i, o, t[a + 9], 5, 568446438), o = w(o, r, n, i, t[a + 14], 9, -1019803690), i = w(i, o, r, n, t[a + 3], 14, -187363961), n = w(n, i, o, r, t[a + 8], 20, 1163531501), r = w(r, n, i, o, t[a + 13], 5, -1444681467), o = w(o, r, n, i, t[a + 2], 9, -51403784), i = w(i, o, r, n, t[a + 7], 14, 1735328473), n = w(n, i, o, r, t[a + 12], 20, -1926607734), r = y(r, n, i, o, t[a + 5], 4, -378558), o = y(o, r, n, i, t[a + 8], 11, -2022574463), i = y(i, o, r, n, t[a + 11], 16, 1839030562), n = y(n, i, o, r, t[a + 14], 23, -35309556), r = y(r, n, i, o, t[a + 1], 4, -1530992060), o = y(o, r, n, i, t[a + 4], 11, 1272893353), i = y(i, o, r, n, t[a + 7], 16, -155497632), n = y(n, i, o, r, t[a + 10], 23, -1094730640), r = y(r, n, i, o, t[a + 13], 4, 681279174), o = y(o, r, n, i, t[a], 11, -358537222), i = y(i, o, r, n, t[a + 3], 16, -722521979), n = y(n, i, o, r, t[a + 6], 23, 76029189), r = y(r, n, i, o, t[a + 9], 4, -640364487), o = y(o, r, n, i, t[a + 12], 11, -421815835), i = y(i, o, r, n, t[a + 15], 16, 530742520), n = y(n, i, o, r, t[a + 2], 23, -995338651), r = m(r, n, i, o, t[a], 6, -198630844), o = m(o, r, n, i, t[a + 7], 10, 1126891415), i = m(i, o, r, n, t[a + 14], 15, -1416354905), n = m(n, i, o, r, t[a + 5], 21, -57434055), r = m(r, n, i, o, t[a + 12], 6, 1700485571), o = m(o, r, n, i, t[a + 3], 10, -1894986606), i = m(i, o, r, n, t[a + 10], 15, -1051523), n = m(n, i, o, r, t[a + 1], 21, -2054922799), r = m(r, n, i, o, t[a + 8], 6, 1873313359), o = m(o, r, n, i, t[a + 15], 10, -30611744), i = m(i, o, r, n, t[a + 6], 15, -1560198380), n = m(n, i, o, r, t[a + 13], 21, 1309151649), r = m(r, n, i, o, t[a + 4], 6, -145523070), o = m(o, r, n, i, t[a + 11], 10, -1120210379), i = m(i, o, r, n, t[a + 2], 15, 718787259), n = m(n, i, o, r, t[a + 9], 21, -343485551), r = p(r, u), n = p(n, c), i = p(i, s), o = p(o, f)
                    }
                    return [r, n, i, o]
                }(function(t) {
                    if (0 === t.length) return [];
                    for (var e = 8 * t.length, r = new Uint32Array(h(e)), n = 0; n < e; n += 8) r[n >> 5] |= (255 & t[n / 8]) << n % 32;
                    return r
                }(t), 8 * t.length))
            }));
            var g = function(t, e, r) {
                var n = (t = t || {}).random || (t.rng || o)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                    r = r || 0;
                    for (var i = 0; i < 16; ++i) e[r + i] = n[i];
                    return e
                }
                return f(n)
            };

            function x(t, e, r, n) {
                switch (t) {
                    case 0:
                        return e & r ^ ~e & n;
                    case 1:
                        return e ^ r ^ n;
                    case 2:
                        return e & r ^ e & n ^ r & n;
                    case 3:
                        return e ^ r ^ n
                }
            }

            function k(t, e) {
                return t << e | t >>> 32 - e
            }
            d("v5", 80, (function(t) {
                var e = [1518500249, 1859775393, 2400959708, 3395469782],
                    r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                if ("string" == typeof t) {
                    var n = unescape(encodeURIComponent(t));
                    t = [];
                    for (var i = 0; i < n.length; ++i) t.push(n.charCodeAt(i))
                } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
                t.push(128);
                for (var o = t.length / 4 + 2, a = Math.ceil(o / 16), u = new Array(a), c = 0; c < a; ++c) {
                    for (var s = new Uint32Array(16), f = 0; f < 16; ++f) s[f] = t[64 * c + 4 * f] << 24 | t[64 * c + 4 * f + 1] << 16 | t[64 * c + 4 * f + 2] << 8 | t[64 * c + 4 * f + 3];
                    u[c] = s
                }
                u[a - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), u[a - 1][14] = Math.floor(u[a - 1][14]), u[a - 1][15] = 8 * (t.length - 1) & 4294967295;
                for (var l = 0; l < a; ++l) {
                    for (var d = new Uint32Array(80), h = 0; h < 16; ++h) d[h] = u[l][h];
                    for (var p = 16; p < 80; ++p) d[p] = k(d[p - 3] ^ d[p - 8] ^ d[p - 14] ^ d[p - 16], 1);
                    for (var v = r[0], b = r[1], w = r[2], y = r[3], m = r[4], g = 0; g < 80; ++g) {
                        var S = Math.floor(g / 20),
                            O = k(v, 5) + x(S, b, w, y) + m + e[S] + d[g] >>> 0;
                        m = y, y = w, w = k(b, 30) >>> 0, b = v, v = O
                    }
                    r[0] = r[0] + v >>> 0, r[1] = r[1] + b >>> 0, r[2] = r[2] + w >>> 0, r[3] = r[3] + y >>> 0, r[4] = r[4] + m >>> 0
                }
                return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]]
            }))
        },
        Acg6: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "Circle", (function() {
                return ft.a
            })), r.d(e, "CircleWarp", (function() {
                return lt.a
            })), r.d(e, "Constants", (function() {
                return dt.a
            })), r.d(e, "EventListeners", (function() {
                return ht.a
            })), r.d(e, "ExternalInteractorBase", (function() {
                return pt.a
            })), r.d(e, "FrameManager", (function() {
                return vt.a
            })), r.d(e, "InteractionManager", (function() {
                return bt.a
            })), r.d(e, "ParticlesInteractorBase", (function() {
                return wt.a
            })), r.d(e, "Plugins", (function() {
                return i.a
            })), r.d(e, "Point", (function() {
                return yt.a
            })), r.d(e, "QuadTree", (function() {
                return mt.a
            })), r.d(e, "Range", (function() {
                return gt.a
            })), r.d(e, "Rectangle", (function() {
                return xt.a
            })), r.d(e, "Vector", (function() {
                return kt.a
            })), r.d(e, "Vector3d", (function() {
                return St.a
            })), r.d(e, "Canvas", (function() {
                return Ot.a
            })), r.d(e, "Container", (function() {
                return jt.a
            })), r.d(e, "Loader", (function() {
                return n.a
            })), r.d(e, "Particle", (function() {
                return Et.a
            })), r.d(e, "Particles", (function() {
                return Lt.a
            })), r.d(e, "Retina", (function() {
                return Pt.a
            })), r.d(e, "Engine", (function() {
                return b
            })), r.d(e, "Main", (function() {
                return b
            })), r.d(e, "Options", (function() {
                return _t.a
            })), r.d(e, "OptionsColor", (function() {
                return Tt.a
            })), r.d(e, "paintBase", (function() {
                return At.n
            })), r.d(e, "clear", (function() {
                return At.b
            })), r.d(e, "drawLinkLine", (function() {
                return At.f
            })), r.d(e, "drawLinkTriangle", (function() {
                return At.g
            })), r.d(e, "drawConnectLine", (function() {
                return At.c
            })), r.d(e, "gradient", (function() {
                return At.m
            })), r.d(e, "drawGrabLine", (function() {
                return At.e
            })), r.d(e, "drawParticle", (function() {
                return At.h
            })), r.d(e, "drawShape", (function() {
                return At.k
            })), r.d(e, "drawShapeAfterEffect", (function() {
                return At.l
            })), r.d(e, "drawPlugin", (function() {
                return At.j
            })), r.d(e, "drawParticlePlugin", (function() {
                return At.i
            })), r.d(e, "drawEllipse", (function() {
                return At.d
            })), r.d(e, "alterHsl", (function() {
                return At.a
            })), r.d(e, "colorToRgb", (function() {
                return Nt.c
            })), r.d(e, "colorToHsl", (function() {
                return Nt.b
            })), r.d(e, "rgbToHsl", (function() {
                return Nt.t
            })), r.d(e, "stringToAlpha", (function() {
                return Nt.w
            })), r.d(e, "stringToRgb", (function() {
                return Nt.x
            })), r.d(e, "hslToRgb", (function() {
                return Nt.m
            })), r.d(e, "hslaToRgba", (function() {
                return Nt.o
            })), r.d(e, "hslToHsv", (function() {
                return Nt.l
            })), r.d(e, "hslaToHsva", (function() {
                return Nt.n
            })), r.d(e, "hsvToHsl", (function() {
                return Nt.p
            })), r.d(e, "hsvaToHsla", (function() {
                return Nt.r
            })), r.d(e, "hsvToRgb", (function() {
                return Nt.q
            })), r.d(e, "hsvaToRgba", (function() {
                return Nt.s
            })), r.d(e, "rgbToHsv", (function() {
                return Nt.u
            })), r.d(e, "rgbaToHsva", (function() {
                return Nt.v
            })), r.d(e, "getRandomRgbColor", (function() {
                return Nt.h
            })), r.d(e, "getStyleFromRgb", (function() {
                return Nt.k
            })), r.d(e, "getStyleFromHsl", (function() {
                return Nt.i
            })), r.d(e, "getStyleFromHsv", (function() {
                return Nt.j
            })), r.d(e, "colorMix", (function() {
                return Nt.a
            })), r.d(e, "getLinkColor", (function() {
                return Nt.f
            })), r.d(e, "getLinkRandomColor", (function() {
                return Nt.g
            })), r.d(e, "getHslFromAnimation", (function() {
                return Nt.e
            })), r.d(e, "getHslAnimationFromHsl", (function() {
                return Nt.d
            })), r.d(e, "clamp", (function() {
                return Ct.g
            })), r.d(e, "mix", (function() {
                return Ct.q
            })), r.d(e, "randomInRange", (function() {
                return Ct.r
            })), r.d(e, "getRangeValue", (function() {
                return Ct.o
            })), r.d(e, "getRangeMin", (function() {
                return Ct.n
            })), r.d(e, "getRangeMax", (function() {
                return Ct.m
            })), r.d(e, "setRangeValue", (function() {
                return Ct.s
            })), r.d(e, "getValue", (function() {
                return Ct.p
            })), r.d(e, "getDistances", (function() {
                return Ct.j
            })), r.d(e, "getDistance", (function() {
                return Ct.i
            })), r.d(e, "getParticleDirectionAngle", (function() {
                return Ct.l
            })), r.d(e, "getParticleBaseVelocity", (function() {
                return Ct.k
            })), r.d(e, "collisionVelocity", (function() {
                return Ct.h
            })), r.d(e, "calcEasing", (function() {
                return Ct.a
            })), r.d(e, "calcPositionFromSize", (function() {
                return Ct.d
            })), r.d(e, "calcPositionOrRandomFromSize", (function() {
                return Ct.e
            })), r.d(e, "calcPositionOrRandomFromSizeRanged", (function() {
                return Ct.f
            })), r.d(e, "calcExactPositionOrRandomFromSize", (function() {
                return Ct.b
            })), r.d(e, "calcExactPositionOrRandomFromSizeRanged", (function() {
                return Ct.c
            })), r.d(e, "isSsr", (function() {
                return It.n
            })), r.d(e, "animate", (function() {
                return It.a
            })), r.d(e, "cancelAnimation", (function() {
                return It.e
            })), r.d(e, "isInArray", (function() {
                return It.l
            })), r.d(e, "loadFont", (function() {
                return It.p
            })), r.d(e, "arrayRandomIndex", (function() {
                return It.c
            })), r.d(e, "itemFromArray", (function() {
                return It.o
            })), r.d(e, "isPointInside", (function() {
                return It.m
            })), r.d(e, "areBoundsInside", (function() {
                return It.b
            })), r.d(e, "calculateBounds", (function() {
                return It.d
            })), r.d(e, "deepExtend", (function() {
                return It.h
            })), r.d(e, "isDivModeEnabled", (function() {
                return It.k
            })), r.d(e, "divModeExecute", (function() {
                return It.j
            })), r.d(e, "singleDivModeExecute", (function() {
                return It.r
            })), r.d(e, "divMode", (function() {
                return It.i
            })), r.d(e, "circleBounceDataFromParticle", (function() {
                return It.g
            })), r.d(e, "circleBounce", (function() {
                return It.f
            })), r.d(e, "rectBounce", (function() {
                return It.q
            })), r.d(e, "loadAbsorbersPlugin", (function() {
                return w.a
            })), r.d(e, "loadEmittersPlugin", (function() {
                return y.a
            })), r.d(e, "loadPolygonMaskPlugin", (function() {
                return g.a
            })), r.d(e, "particlesJS", (function() {
                return Ut
            })), r.d(e, "pJSDom", (function() {
                return Gt
            })), r.d(e, "tsParticles", (function() {
                return Rt
            }));
            var n = r("FDSO"),
                i = r("0Ywm");

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function a(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return u(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
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
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
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
                        c = !0, o = t
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    u = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function f(t, e, r, n) {
                    var i = e && e.prototype instanceof h ? e : h,
                        o = Object.create(i.prototype),
                        a = new j(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return L()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = k(a, r);
                                    if (u) {
                                        if (u === d) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === d) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), o
                }

                function l(t, e, r) {
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
                t.wrap = f;
                var d = {};

                function h() {}

                function p() {}

                function v() {}
                var b = {};
                s(b, i, (function() {
                    return this
                }));
                var w = Object.getPrototypeOf,
                    y = w && w(w(E([])));
                y && y !== e && r.call(y, i) && (b = y);
                var m = v.prototype = h.prototype = Object.create(b);

                function g(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function x(t, e) {
                    var n;
                    this._invoke = function(i, a) {
                        function u() {
                            return new e((function(n, u) {
                                ! function n(i, a, u, c) {
                                    var s = l(t[i], t, a);
                                    if ("throw" !== s.type) {
                                        var f = s.arg,
                                            d = f.value;
                                        return d && "object" == o(d) && r.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                            n("next", t, u, c)
                                        }), (function(t) {
                                            n("throw", t, u, c)
                                        })) : e.resolve(d).then((function(t) {
                                            f.value = t, u(f)
                                        }), (function(t) {
                                            return n("throw", t, u, c)
                                        }))
                                    }
                                    c(s.arg)
                                }(i, a, n, u)
                            }))
                        }
                        return n = n ? n.then(u, u) : u()
                    }
                }

                function k(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return d;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, d;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
                }

                function S(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(S, this), this.reset(!0)
                }

                function E(t) {
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
                        next: L
                    }
                }

                function L() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = v, s(m, "constructor", v), s(v, "constructor", p), p.displayName = s(v, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, s(t, u, "GeneratorFunction")), t.prototype = Object.create(m), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, g(x.prototype), s(x.prototype, a, (function() {
                    return this
                })), t.AsyncIterator = x, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new x(f(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, g(m), s(m, u, "Generator"), s(m, i, (function() {
                    return this
                })), s(m, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = E, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var u = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), d
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    O(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, t
            }

            function s(t, e, r, n, i, o, a) {
                try {
                    var u = t[o](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function f(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = t.apply(e, r);

                        function a(t) {
                            s(o, n, i, a, u, "next", t)
                        }

                        function u(t) {
                            s(o, n, i, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function l(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            var d, h, p = function(t, e, r, n, i) {
                    if ("m" === n) throw new TypeError("Private method is not writable");
                    if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
                },
                v = function(t, e, r, n) {
                    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t)
                },
                b = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), d.set(this, void 0), h.set(this, void 0), p(this, d, !1, "f"), this.domArray = [], p(this, h, new n.a(this), "f"), this.plugins = new i.a(this)
                    }
                    var e, r, o, u, s, b, w, y, m, g, x, k, S, O, j, E;
                    return e = t, (r = [{
                        key: "init",
                        value: function() {
                            v(this, d, "f") || p(this, d, !0, "f")
                        }
                    }, {
                        key: "loadFromArray",
                        value: (E = f(c().mark((function t(e, r, n) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").load(e, r, n));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r) {
                            return E.apply(this, arguments)
                        })
                    }, {
                        key: "load",
                        value: (j = f(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").load(e, r));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return j.apply(this, arguments)
                        })
                    }, {
                        key: "set",
                        value: (O = f(c().mark((function t(e, r, n) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").set(e, r, n));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r) {
                            return O.apply(this, arguments)
                        })
                    }, {
                        key: "loadJSON",
                        value: (S = f(c().mark((function t(e, r, n) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").loadJSON(e, r, n));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r) {
                            return S.apply(this, arguments)
                        })
                    }, {
                        key: "setJSON",
                        value: (k = f(c().mark((function t(e, r, n, i) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", v(this, h, "f").setJSON(e, r, n, i));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r, n) {
                            return k.apply(this, arguments)
                        })
                    }, {
                        key: "setOnClickHandler",
                        value: function(t) {
                            v(this, h, "f").setOnClickHandler(t)
                        }
                    }, {
                        key: "dom",
                        value: function() {
                            return v(this, h, "f").dom()
                        }
                    }, {
                        key: "domItem",
                        value: function(t) {
                            return v(this, h, "f").domItem(t)
                        }
                    }, {
                        key: "refresh",
                        value: (x = f(c().mark((function t() {
                            var e, r, n;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e = a(this.dom()), t.prev = 1, e.s();
                                    case 3:
                                        if ((r = e.n()).done) {
                                            t.next = 9;
                                            break
                                        }
                                        return n = r.value, t.next = 7, n.refresh();
                                    case 7:
                                        t.next = 3;
                                        break;
                                    case 9:
                                        t.next = 14;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
                                    case 14:
                                        return t.prev = 14, e.f(), t.finish(14);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [1, 11, 14, 17]
                            ])
                        }))), function() {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "addShape",
                        value: (g = f(c().mark((function t(e, r, n, i, o) {
                            var a;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return a = "function" == typeof r ? {
                                            afterEffect: i,
                                            destroy: o,
                                            draw: r,
                                            init: n
                                        } : r, this.plugins.addShapeDrawer(e, a), t.next = 4, this.refresh();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e, r, n, i) {
                            return g.apply(this, arguments)
                        })
                    }, {
                        key: "addPreset",
                        value: (m = f(c().mark((function t(e, r) {
                            var n, i = arguments;
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = i.length > 2 && void 0 !== i[2] && i[2], this.plugins.addPreset(e, r, n), t.next = 4, this.refresh();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "addPlugin",
                        value: (y = f(c().mark((function t(e) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addPlugin(e), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t) {
                            return y.apply(this, arguments)
                        })
                    }, {
                        key: "addPathGenerator",
                        value: (w = f(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addPathGenerator(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "addInteractor",
                        value: (b = f(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addInteractor(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return b.apply(this, arguments)
                        })
                    }, {
                        key: "addMover",
                        value: (s = f(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addParticleMover(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "addParticleUpdater",
                        value: (u = f(c().mark((function t(e, r) {
                            return c().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.plugins.addParticleUpdater(e, r), t.next = 3, this.refresh();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, e) {
                            return u.apply(this, arguments)
                        })
                    }]) && l(e.prototype, r), o && l(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();
            d = new WeakMap, h = new WeakMap;
            var w = r("t3th"),
                y = r("FpRS"),
                m = r("s2Bo"),
                g = r("11FU"),
                x = r("UM4E"),
                k = r("XXxQ"),
                S = r("qqie"),
                O = r("8AKg"),
                j = r("473K"),
                E = r("DMJt"),
                L = r("paPv"),
                P = r("crxL"),
                _ = r("TKDX"),
                T = r("vmSj"),
                A = r("iNQC"),
                N = r("CY4r"),
                C = r("HxXU"),
                I = r("Dotv"),
                R = r("KzlG"),
                F = r("ve9a"),
                U = r("eNv/"),
                G = r("+t9f"),
                q = r("+DqO"),
                z = r("HTT4"),
                M = r("yb31"),
                B = r("bLJs"),
                D = r("2okq"),
                H = r("K6ZH"),
                V = r("GHz4"),
                X = r("z9Ic"),
                Y = r("jz3o"),
                J = r("KmHF"),
                W = r("bYpf");

            function Z(t) {
                return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Q() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Q = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

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

                function c(t, e, r, n) {
                    var i = e && e.prototype instanceof l ? e : l,
                        o = Object.create(i.prototype),
                        a = new S(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return j()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = g(a, r);
                                    if (u) {
                                        if (u === f) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = s(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), o
                }

                function s(t, e, r) {
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
                t.wrap = c;
                var f = {};

                function l() {}

                function d() {}

                function h() {}
                var p = {};
                u(p, i, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    b = v && v(v(O([])));
                b && b !== e && r.call(b, i) && (p = b);
                var w = h.prototype = l.prototype = Object.create(p);

                function y(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function m(t, e) {
                    var n;
                    this._invoke = function(i, o) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(i, o, a, u) {
                                    var c = s(t[i], t, o);
                                    if ("throw" !== c.type) {
                                        var f = c.arg,
                                            l = f.value;
                                        return l && "object" == Z(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                            n("next", t, a, u)
                                        }), (function(t) {
                                            n("throw", t, a, u)
                                        })) : e.resolve(l).then((function(t) {
                                            f.value = t, a(f)
                                        }), (function(t) {
                                            return n("throw", t, a, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(i, o, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, f;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function O(t) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = h, u(w, "constructor", h), u(h, "constructor", d), d.displayName = u(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, y(m.prototype), u(m.prototype, o, (function() {
                    return this
                })), t.AsyncIterator = m, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new m(c(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, y(w), u(w, a, "Generator"), u(w, i, (function() {
                    return this
                })), u(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, S.prototype = {
                    constructor: S,
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var u = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    k(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function K(t, e, r, n, i, o, a) {
                try {
                    var u = t[o](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function $(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = t.apply(e, r);

                        function a(t) {
                            K(o, n, i, a, u, "next", t)
                        }

                        function u(t) {
                            K(o, n, i, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function tt(t) {
                return et.apply(this, arguments)
            }

            function et() {
                return (et = $(Q().mark((function t(e) {
                    return Q().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Object(S.a)(e);
                            case 2:
                                return t.next = 4, Object(z.a)(e);
                            case 4:
                                return t.next = 6, Object(E.a)(e);
                            case 6:
                                return t.next = 8, Object(L.a)(e);
                            case 8:
                                return t.next = 10, Object(P.a)(e);
                            case 10:
                                return t.next = 12, Object(_.a)(e);
                            case 12:
                                return t.next = 14, Object(T.a)(e);
                            case 14:
                                return t.next = 16, Object(A.a)(e);
                            case 16:
                                return t.next = 18, Object(N.a)(e);
                            case 18:
                                return t.next = 20, Object(C.a)(e);
                            case 20:
                                return t.next = 22, Object(I.a)(e);
                            case 22:
                                return t.next = 24, Object(M.a)(e);
                            case 24:
                                return t.next = 26, Object(B.a)(e);
                            case 26:
                                return t.next = 28, Object(D.a)(e);
                            case 28:
                                return t.next = 30, Object(O.a)(e);
                            case 30:
                                return t.next = 32, Object(R.a)(e);
                            case 32:
                                return t.next = 34, Object(U.a)(e);
                            case 34:
                                return t.next = 36, Object(H.a)(e);
                            case 36:
                                return t.next = 38, Object(X.a)(e);
                            case 38:
                                return t.next = 40, Object(Y.a)(e);
                            case 40:
                                return t.next = 42, Object(W.a)(e);
                            case 42:
                                return t.next = 44, Object(F.a)(e);
                            case 44:
                                return t.next = 46, Object(G.a)(e);
                            case 46:
                                return t.next = 48, Object(V.a)(e);
                            case 48:
                                return t.next = 50, Object(k.a)(e);
                            case 50:
                                return t.next = 52, Object(j.a)(e);
                            case 52:
                                return t.next = 54, Object(J.a)(e);
                            case 54:
                                return t.next = 56, Object(q.a)(e);
                            case 56:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var rt = r("wPbT"),
                nt = r("ilkc"),
                it = r("GNcM");

            function ot(t) {
                return (ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function at() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                at = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    i = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

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

                function c(t, e, r, n) {
                    var i = e && e.prototype instanceof l ? e : l,
                        o = Object.create(i.prototype),
                        a = new S(n || []);
                    return o._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === i) throw o;
                                return j()
                            }
                            for (r.method = i, r.arg = o;;) {
                                var a = r.delegate;
                                if (a) {
                                    var u = g(a, r);
                                    if (u) {
                                        if (u === f) continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = s(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(t, r, a), o
                }

                function s(t, e, r) {
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
                t.wrap = c;
                var f = {};

                function l() {}

                function d() {}

                function h() {}
                var p = {};
                u(p, i, (function() {
                    return this
                }));
                var v = Object.getPrototypeOf,
                    b = v && v(v(O([])));
                b && b !== e && r.call(b, i) && (p = b);
                var w = h.prototype = l.prototype = Object.create(p);

                function y(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function m(t, e) {
                    var n;
                    this._invoke = function(i, o) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(i, o, a, u) {
                                    var c = s(t[i], t, o);
                                    if ("throw" !== c.type) {
                                        var f = c.arg,
                                            l = f.value;
                                        return l && "object" == ot(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                            n("next", t, a, u)
                                        }), (function(t) {
                                            n("throw", t, a, u)
                                        })) : e.resolve(l).then((function(t) {
                                            f.value = t, a(f)
                                        }), (function(t) {
                                            return n("throw", t, a, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(i, o, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function g(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return f;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var n = s(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, f;
                    var i = n.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, f) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function O(t) {
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
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = h, u(w, "constructor", h), u(h, "constructor", d), d.displayName = u(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, a, "GeneratorFunction")), t.prototype = Object.create(w), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, y(m.prototype), u(m.prototype, o, (function() {
                    return this
                })), t.AsyncIterator = m, t.async = function(e, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new m(c(e, r, n, i), o);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, y(w), u(w, a, "Generator"), u(w, i, (function() {
                    return this
                })), u(w, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, S.prototype = {
                    constructor: S,
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
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var u = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), f
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), f
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    k(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, t
            }

            function ut(t, e, r, n, i, o, a) {
                try {
                    var u = t[o](a),
                        c = u.value
                } catch (t) {
                    return void r(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function ct(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = t.apply(e, r);

                        function a(t) {
                            ut(o, n, i, a, u, "next", t)
                        }

                        function u(t) {
                            ut(o, n, i, a, u, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function st() {
                return (st = ct(at().mark((function t(e) {
                    return at().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, tt(e);
                            case 2:
                                return t.next = 4, Object(x.a)(e);
                            case 4:
                                return t.next = 6, Object(rt.a)(e);
                            case 6:
                                return t.next = 8, Object(nt.a)(e);
                            case 8:
                                return t.next = 10, Object(it.a)(e);
                            case 10:
                                return t.next = 12, Object(m.a)(e);
                            case 12:
                                return t.next = 14, Object(w.a)(e);
                            case 14:
                                return t.next = 16, Object(y.a)(e);
                            case 16:
                                return t.next = 18, Object(g.a)(e);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            r("FUqr"), r("FmQT"), r("58nm"), r("X/z7"), r("DYpB"), r("UYB9"), r("iPyE"), r("SW61"), r("BrDg"), r("WQEa"), r("+L1+"), r("DxMr"), r("B/N6"), r("fXI0"), r("X6GZ"), r("jCHr"), r("uiRQ"), r("Buzl"), r("PPMk"), r("YbVy"), r("PgXR"), r("0jlI"), r("mFZ6"), r("U4YG"), r("0PbJ"), r("z2VP"), r("nt9P"), r("Ib91"), r("r1vc"), r("qW+D"), r("TzSi"), r("yUxw"), r("a1/f"), r("LFcJ");
            var ft = r("mZtP"),
                lt = r("Avkg"),
                dt = r("j5nf"),
                ht = r("D2zs"),
                pt = r("fcVS"),
                vt = r("jPhR"),
                bt = r("jiOm"),
                wt = r("Psfb"),
                yt = r("ClS3"),
                mt = r("ibU6"),
                gt = r("mfN2"),
                xt = r("cfMx"),
                kt = r("U1gX"),
                St = r("hs3Q"),
                Ot = r("inmb"),
                jt = r("c8kP"),
                Et = r("FBI6"),
                Lt = r("hZ54"),
                Pt = r("dStz"),
                _t = (r("n983"), r("oZPS"), r("Jr57"), r("Q0/g"), r("4q0i"), r("b+oQ"), r("qAsa"), r("3Doj"), r("m58t"), r("aVqd"), r("sXWi"), r("i8T/"), r("0rCv"), r("rOrm"), r("pNKG"), r("XVaJ"), r("md8Y"), r("31nC"), r("rRRg"), r("/4Wm"), r("uuAh"), r("PB/L"), r("Iuiz"), r("5aBa"), r("NWCE")),
                Tt = r("xhEd"),
                At = (r("ZfSB"), r("w66q"), r("p77+"), r("hqX8"), r("Aadh"), r("6I6a"), r("I5g1"), r("hcMC")),
                Nt = r("0qtW"),
                Ct = r("Bvs5"),
                It = r("3wFu"),
                Rt = (r("LY7n"), r("zxvr"), r("pntI"), r("puOj"), r("hI5k"), r("kcuX"), new b);
            Rt.init();
            var Ft = function(t) {
                    var e = function(e, r) {
                        return t.load(e, r)
                    };
                    return e.load = function(e, r, n) {
                        t.loadJSON(e, r).then((function(t) {
                            t && n(t)
                        })).catch((function() {
                            n(void 0)
                        }))
                    }, e.setOnClickHandler = function(e) {
                        t.setOnClickHandler(e)
                    }, {
                        particlesJS: e,
                        pJSDom: t.dom()
                    }
                }(Rt),
                Ut = Ft.particlesJS,
                Gt = Ft.pJSDom;
            ! function(t) {
                st.apply(this, arguments)
            }(Rt)
        },
        B9Yq: function(t, e) {
            t.exports = function() {
                throw new Error("define cannot be used indirect")
            }
        },
        PDX0: function(t, e) {
            (function(e) {
                t.exports = e
            }).call(this, {})
        },
        YuTi: function(t, e) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i
                    }
                }), t.webpackPolyfill = 1), t
            }
        },
        peHP: function(t, e, r) {
            (function(t) {
                var n;

                function i(t) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }! function(o, a) {
                    "use strict";
                    var u = "model",
                        c = "name",
                        s = "type",
                        f = "vendor",
                        l = "version",
                        d = "mobile",
                        h = "tablet",
                        p = "smarttv",
                        v = function(t) {
                            for (var e = {}, r = 0; r < t.length; r++) e[t[r].toUpperCase()] = t[r];
                            return e
                        },
                        b = function(t, e) {
                            return "string" === i(t) && -1 !== w(e).indexOf(w(t))
                        },
                        w = function(t) {
                            return t.toLowerCase()
                        },
                        y = function(t, e) {
                            if ("string" === i(t)) return t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), "undefined" === i(e) ? t : t.substring(0, 350)
                        },
                        m = function(t, e) {
                            for (var r, n, o, a, u, c, s = 0; s < e.length && !u;) {
                                var f = e[s],
                                    l = e[s + 1];
                                for (r = n = 0; r < f.length && !u;)
                                    if (u = f[r++].exec(t))
                                        for (o = 0; o < l.length; o++) c = u[++n], "object" === i(a = l[o]) && a.length > 0 ? 2 === a.length ? "function" == i(a[1]) ? this[a[0]] = a[1].call(this, c) : this[a[0]] = a[1] : 3 === a.length ? "function" !== i(a[1]) || a[1].exec && a[1].test ? this[a[0]] = c ? c.replace(a[1], a[2]) : void 0 : this[a[0]] = c ? a[1].call(this, c, a[2]) : void 0 : 4 === a.length && (this[a[0]] = c ? a[3].call(this, c.replace(a[1], a[2])) : void 0) : this[a] = c || void 0;
                                s += 2
                            }
                        },
                        g = function(t, e) {
                            for (var r in e)
                                if ("object" === i(e[r]) && e[r].length > 0) {
                                    for (var n = 0; n < e[r].length; n++)
                                        if (b(e[r][n], t)) return "?" === r ? void 0 : r
                                } else if (b(e[r], t)) return "?" === r ? void 0 : r;
                            return t
                        },
                        x = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        k = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [l, [c, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [l, [c, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [c, l],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [l, [c, "Opera Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [l, [c, "Opera"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [c, l],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [l, [c, "UCBrowser"]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [l, [c, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [l, [c, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [l, [c, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [l, [c, "IE"]],
                                [/yabrowser\/([\w\.]+)/i],
                                [l, [c, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [c, /(.+)/, "$1 Secure Browser"], l
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [l, [c, "Firefox Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [l, [c, "Opera Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [l, [c, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [l, [c, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [l, [c, "Opera Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [l, [c, "MIUI Browser"]],
                                [/fxios\/([-\w\.]+)/i],
                                [l, [c, "Firefox"]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [c, "360 Browser"]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [c, /(.+)/, "$1 Browser"], l
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [c, /_/g, " "], l
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [c, l],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [c],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [c, "Facebook"], l
                                ],
                                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                [c, l],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [l, [c, "GSA"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [l, [c, "Chrome Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [c, "Chrome WebView"], l
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [l, [c, "Android Browser"]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [c, l],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [l, [c, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [l, c],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [c, [l, g, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [c, l],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [c, "Netscape"], l
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [l, [c, "Firefox Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                [c, l]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    ["architecture", "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    ["architecture", w]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    ["architecture", "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    ["architecture", "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    ["architecture", "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    ["architecture", "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    ["architecture", /ower/, "", w]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    ["architecture", "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    ["architecture", w]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [u, [f, "Samsung"],
                                    [s, h]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [u, [f, "Samsung"],
                                    [s, d]
                                ],
                                [/\((ip(?:hone|od)[\w ]*);/i],
                                [u, [f, "Apple"],
                                    [s, d]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [u, [f, "Apple"],
                                    [s, h]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [u, [f, "Huawei"],
                                    [s, h]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [u, [f, "Huawei"],
                                    [s, d]
                                ],
                                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [f, "Xiaomi"],
                                    [s, d]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [u, /_/g, " "],
                                    [f, "Xiaomi"],
                                    [s, h]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [u, [f, "OPPO"],
                                    [s, d]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [u, [f, "Vivo"],
                                    [s, d]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [u, [f, "Realme"],
                                    [s, d]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [u, [f, "Motorola"],
                                    [s, d]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [u, [f, "Motorola"],
                                    [s, h]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [u, [f, "LG"],
                                    [s, h]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [u, [f, "LG"],
                                    [s, d]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [u, [f, "Lenovo"],
                                    [s, h]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [u, /_/g, " "],
                                    [f, "Nokia"],
                                    [s, d]
                                ],
                                [/(pixel c)\b/i],
                                [u, [f, "Google"],
                                    [s, h]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [u, [f, "Google"],
                                    [s, d]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [u, [f, "Sony"],
                                    [s, d]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [u, "Xperia Tablet"],
                                    [f, "Sony"],
                                    [s, h]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [u, [f, "OnePlus"],
                                    [s, d]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [u, [f, "Amazon"],
                                    [s, h]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [u, /(.+)/g, "Fire Phone $1"],
                                    [f, "Amazon"],
                                    [s, d]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [u, f, [s, h]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [u, [f, "BlackBerry"],
                                    [s, d]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [u, [f, "ASUS"],
                                    [s, h]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [u, [f, "ASUS"],
                                    [s, d]
                                ],
                                [/(nexus 9)/i],
                                [u, [f, "HTC"],
                                    [s, h]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [f, [u, /_/g, " "],
                                    [s, d]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [u, [f, "Acer"],
                                    [s, h]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [u, [f, "Meizu"],
                                    [s, d]
                                ],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [u, [f, "Sharp"],
                                    [s, d]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [f, u, [s, d]],
                                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [f, u, [s, h]],
                                [/(surface duo)/i],
                                [u, [f, "Microsoft"],
                                    [s, h]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [u, [f, "Fairphone"],
                                    [s, d]
                                ],
                                [/(u304aa)/i],
                                [u, [f, "AT&T"],
                                    [s, d]
                                ],
                                [/\bsie-(\w*)/i],
                                [u, [f, "Siemens"],
                                    [s, d]
                                ],
                                [/\b(rct\w+) b/i],
                                [u, [f, "RCA"],
                                    [s, h]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [u, [f, "Dell"],
                                    [s, h]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [u, [f, "Verizon"],
                                    [s, h]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [u, [f, "Barnes & Noble"],
                                    [s, h]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [u, [f, "NuVision"],
                                    [s, h]
                                ],
                                [/\b(k88) b/i],
                                [u, [f, "ZTE"],
                                    [s, h]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [u, [f, "ZTE"],
                                    [s, d]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [u, [f, "Swiss"],
                                    [s, d]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [u, [f, "Swiss"],
                                    [s, h]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [u, [f, "Zeki"],
                                    [s, h]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [f, "Dragon Touch"], u, [s, h]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [u, [f, "Insignia"],
                                    [s, h]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [u, [f, "NextBook"],
                                    [s, h]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [f, "Voice"], u, [s, d]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [f, "LvTel"], u, [s, d]
                                ],
                                [/\b(ph-1) /i],
                                [u, [f, "Essential"],
                                    [s, d]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [u, [f, "Envizen"],
                                    [s, h]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [u, [f, "MachSpeed"],
                                    [s, h]
                                ],
                                [/\btu_(1491) b/i],
                                [u, [f, "Rotor"],
                                    [s, h]
                                ],
                                [/(shield[\w ]+) b/i],
                                [u, [f, "Nvidia"],
                                    [s, h]
                                ],
                                [/(sprint) (\w+)/i],
                                [f, u, [s, d]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [u, /\./g, " "],
                                    [f, "Microsoft"],
                                    [s, d]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [u, [f, "Zebra"],
                                    [s, h]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [u, [f, "Zebra"],
                                    [s, d]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [f, u, [s, "console"]],
                                [/droid.+; (shield) bui/i],
                                [u, [f, "Nvidia"],
                                    [s, "console"]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [u, [f, "Sony"],
                                    [s, "console"]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [u, [f, "Microsoft"],
                                    [s, "console"]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [f, [s, p]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [u, /^/, "SmartTV"],
                                    [f, "Samsung"],
                                    [s, p]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [f, "LG"],
                                    [s, p]
                                ],
                                [/(apple) ?tv/i],
                                [f, [u, "Apple TV"],
                                    [s, p]
                                ],
                                [/crkey/i],
                                [
                                    [u, "Chromecast"],
                                    [f, "Google"],
                                    [s, p]
                                ],
                                [/droid.+aft(\w)( bui|\))/i],
                                [u, [f, "Amazon"],
                                    [s, p]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [u, [f, "Sharp"],
                                    [s, p]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [u, [f, "Sony"],
                                    [s, p]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [u, [f, "Xiaomi"],
                                    [s, p]
                                ],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                [
                                    [f, y],
                                    [u, y],
                                    [s, p]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [s, p]
                                ],
                                [/((pebble))app/i],
                                [f, u, [s, "wearable"]],
                                [/droid.+; (glass) \d/i],
                                [u, [f, "Google"],
                                    [s, "wearable"]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [u, [f, "Zebra"],
                                    [s, "wearable"]
                                ],
                                [/(quest( 2)?)/i],
                                [u, [f, "Facebook"],
                                    [s, "wearable"]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [f, [s, "embedded"]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [u, [s, d]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [u, [s, h]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [s, h]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [s, d]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [u, [f, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [l, [c, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [l, [c, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                [c, l],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [l, c]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [c, l],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [c, [l, g, x]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [c, "Windows"],
                                    [l, g, x]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [l, /_/g, "."],
                                    [c, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [c, "Mac OS"],
                                    [l, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [l, c],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [c, l],
                                [/\(bb(10);/i],
                                [l, [c, "BlackBerry"]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [l, [c, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [l, [c, "Firefox OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [l, [c, "webOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [l, [c, "Chromecast"]],
                                [/(cros) [\w]+ ([\w\.]+\w)/i],
                                [
                                    [c, "Chromium OS"], l
                                ],
                                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [c, l],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [c, "Solaris"], l
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                [c, l]
                            ]
                        },
                        S = function t(e, r) {
                            if ("object" === i(e) && (r = e, e = void 0), !(this instanceof t)) return new t(e, r).getResult();
                            var n = e || ("undefined" !== i(o) && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                                a = r ? function(t, e) {
                                    var r = {};
                                    for (var n in t) e[n] && e[n].length % 2 == 0 ? r[n] = e[n].concat(t[n]) : r[n] = t[n];
                                    return r
                                }(k, r) : k;
                            return this.getBrowser = function() {
                                var t, e = {};
                                return e[c] = void 0, e[l] = void 0, m.call(e, n, a.browser), e.major = "string" === i(t = e.version) ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0, e
                            }, this.getCPU = function() {
                                var t = {
                                    architecture: void 0
                                };
                                return m.call(t, n, a.cpu), t
                            }, this.getDevice = function() {
                                var t = {
                                    vendor: void 0,
                                    model: void 0,
                                    type: void 0
                                };
                                return m.call(t, n, a.device), t
                            }, this.getEngine = function() {
                                var t = {
                                    name: void 0,
                                    version: void 0
                                };
                                return m.call(t, n, a.engine), t
                            }, this.getOS = function() {
                                var t = {
                                    name: void 0,
                                    version: void 0
                                };
                                return m.call(t, n, a.os), t
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return n
                            }, this.setUA = function(t) {
                                return n = "string" === i(t) && t.length > 350 ? y(t, 350) : t, this
                            }, this.setUA(n), this
                        };
                    S.VERSION = "1.0.32", S.BROWSER = v([c, l, "major"]), S.CPU = v(["architecture"]), S.DEVICE = v([u, f, s, "console", d, p, h, "wearable", "embedded"]), S.ENGINE = S.OS = v([c, l]), "undefined" !== i(e) ? ("undefined" !== i(t) && t.exports && (e = t.exports = S), e.UAParser = S) : "function" === i(r("B9Yq")) && r("PDX0") ? void 0 === (n = function() {
                        return S
                    }.call(e, r, e, t)) || (t.exports = n) : "undefined" !== i(o) && (o.UAParser = S);
                    var O = "undefined" !== i(o) && (o.jQuery || o.Zepto);
                    if (O && !O.ua) {
                        var j = new S;
                        O.ua = j.getResult(), O.ua.get = function() {
                            return j.getUA()
                        }, O.ua.set = function(t) {
                            j.setUA(t);
                            var e = j.getResult();
                            for (var r in e) O.ua[r] = e[r]
                        }
                    }
                }("object" === ("undefined" == typeof window ? "undefined" : i(window)) ? window : this)
            }).call(this, r("YuTi")(t))
        },
        xhmd: function(t, e, r) {
            "use strict";

            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t) {
                return t.valueOf ? t.valueOf() : Object.prototype.valueOf.call(t)
            }
            e.a = function t(e, r) {
                if (e === r) return !0;
                if (null == e || null == r) return !1;
                if (Array.isArray(e)) return Array.isArray(r) && e.length === r.length && e.every((function(e, n) {
                    return t(e, r[n])
                }));
                if ("object" === n(e) || "object" === n(r)) {
                    var o = i(e),
                        a = i(r);
                    return o !== e || a !== r ? t(o, a) : Object.keys(Object.assign({}, e, r)).every((function(n) {
                        return t(e[n], r[n])
                    }))
                }
                return !1
            }
        },
        yLpj: function(t, e) {
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window)
            }
            t.exports = n
        }
    }
]);