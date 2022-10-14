! function(t) {
    function e(e) {
        for (var r, s, i = e[0], l = e[1], c = e[2], p = 0, f = []; p < i.length; p++) s = i[p], Object.prototype.hasOwnProperty.call(a, s) && a[s] && f.push(a[s][0]), a[s] = 0;
        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
        for (u && u(e); f.length;) f.shift()();
        return n.push.apply(n, c || []), o()
    }

    function o() {
        for (var t, e = 0; e < n.length; e++) {
            for (var o = n[e], r = !0, i = 1; i < o.length; i++) {
                var l = o[i];
                0 !== a[l] && (r = !1)
            }
            r && (n.splice(e--, 1), t = s(s.s = o[0]))
        }
        return t
    }
    var r = {},
        a = {
            0: 0
        },
        n = [];

    function s(e) {
        if (r[e]) return r[e].exports;
        var o = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, s), o.l = !0, o.exports
    }
    s.e = function(t) {
        var e = [],
            o = a[t];
        if (0 !== o)
            if (o) e.push(o[2]);
            else {
                var r = new Promise((function(e, r) {
                    o = a[t] = [e, r]
                }));
                e.push(o[2] = r);
                var n, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.src = function(t) {
                    return s.p + "" + ({} [t] || t) + "." + {
                        15: "c113a7c8d87c694c0e01"
                    } [t] + ".js"
                }(t);
                var l = new Error;
                n = function(e) {
                    i.onerror = i.onload = null, clearTimeout(c);
                    var o = a[t];
                    if (0 !== o) {
                        if (o) {
                            var r = e && ("load" === e.type ? "missing" : e.type),
                                n = e && e.target && e.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + r + ": " + n + ")", l.name = "ChunkLoadError", l.type = r, l.request = n, o[1](l)
                        }
                        a[t] = void 0
                    }
                };
                var c = setTimeout((function() {
                    n({
                        type: "timeout",
                        target: i
                    })
                }), 12e4);
                i.onerror = i.onload = n, document.head.appendChild(i)
            } return Promise.all(e)
    }, s.m = t, s.c = r, s.d = function(t, e, o) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (s.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) s.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    }, s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "/", s.oe = function(t) {
        throw console.error(t), t
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        l = i.push.bind(i);
    i.push = e, i = i.slice();
    for (var c = 0; c < i.length; c++) e(i[c]);
    var u = l;
    n.push([0, 2, 10, 11, 13, 12, 9, 4, 8, 1, 5, 6, 7, 14, 3]), o()
}({
    "+C1j": function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__header___22Ne2-camelCase{background-color:#9a49aa;width:100%;height:55px;padding-bottom:6px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;z-index:10;overflow:hidden;position:absolute;top:0;left:0}.styles__blooketText___1pMBG-camelCase{font-size:40px;text-align:left;margin-left:40px;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none}.styles__blooketText___1pMBG-camelCase,.styles__headerRight___nPb83-camelCase{color:#fff;line-height:49px;outline:none;cursor:pointer}.styles__headerRight___nPb83-camelCase{font-size:24px;font-weight:700;font-family:Nunito,sans-serif;text-align:right;text-decoration:underline;padding-right:40px}.styles__expandIcon___ipwig-camelCase{font-size:22px;line-height:49px;margin-right:15px;cursor:pointer;outline:none}.styles__headerLeft___JPD7G-camelCase{font-size:28px;color:#fff;text-align:left;line-height:49px;padding-left:20px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), e.locals = {
            header: "styles__header___22Ne2-camelCase",
            blooketText: "styles__blooketText___1pMBG-camelCase",
            headerRight: "styles__headerRight___nPb83-camelCase",
            expandIcon: "styles__expandIcon___ipwig-camelCase",
            headerLeft: "styles__headerLeft___JPD7G-camelCase"
        }
    },
    "+ipE": function(t, e, o) {
        var r = o("+C1j");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    0: function(t, e, o) {
        o("55Il"), t.exports = o("tjUo")
    },
    "1yPM": function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__container___LMvLC-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;border-radius:7px;text-align:center;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__containerHeader____HXKQ-camelCase{text-align:center;font-size:40px;line-height:40px;margin:20px;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__inputContainer___1hUBD-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1hUBD-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1hUBD-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1hUBD-camelCase[focus-within]>.styles__icon___20PFF-camelCase{color:#0bc2cf}.styles__inputContainer___1hUBD-camelCase:focus-within>.styles__icon___20PFF-camelCase{color:#0bc2cf}.styles__inputFilled___15qYm-camelCase{border-color:#3a3a3a}.styles__inputError___Ghico-camelCase{border-color:#ce1313}.styles__icon___20PFF-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___33tky-camelCase{color:#3a3a3a}.styles__iconError___3M-Oo-camelCase{color:#ce1313}.styles__input___1kMkR-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___1kMkR-camelCase:-moz-placeholder,.styles__input___1kMkR-camelCase:-ms-input-placeholder,.styles__input___1kMkR-camelCase::-moz-placeholder,.styles__input___1kMkR-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___rWDgh-camelCase:-moz-placeholder,.styles__mInput___rWDgh-camelCase:-ms-input-placeholder,.styles__mInput___rWDgh-camelCase::-moz-placeholder,.styles__mInput___rWDgh-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___Ghico-camelCase,.styles__inputError___Ghico-camelCase:-moz-placeholder,.styles__inputError___Ghico-camelCase:-ms-input-placeholder,.styles__inputError___Ghico-camelCase::-moz-placeholder,.styles__inputError___Ghico-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___1kMkR-camelCase:focus,.styles__input___1kMkR-camelCase:focus:-moz-placeholder,.styles__input___1kMkR-camelCase:focus:-ms-input-placeholder,.styles__input___1kMkR-camelCase:focus::-moz-placeholder,.styles__input___1kMkR-camelCase:focus::-webkit-input-placeholder,.styles__mInput___rWDgh-camelCase:focus,.styles__mInput___rWDgh-camelCase:focus:-moz-placeholder,.styles__mInput___rWDgh-camelCase:focus:-ms-input-placeholder,.styles__mInput___rWDgh-camelCase:focus::-moz-placeholder,.styles__mInput___rWDgh-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___LMvLC-camelCase{width:320px}.styles__inputContainer___1hUBD-camelCase{width:280px}.styles__input___1kMkR-camelCase{width:210px}}.styles__button___ETp3K-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___ETp3K-camelCase:focus,.styles__button___ETp3K-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___aEkp5-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___1rh-5-camelCase,.styles__buttonError___1rh-5-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___1rh-5-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___2Kiui-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___258RL-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___3KNUW-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}", ""]), e.locals = {
            container: "styles__container___LMvLC-camelCase",
            containerHeader: "styles__containerHeader____HXKQ-camelCase",
            inputContainer: "styles__inputContainer___1hUBD-camelCase",
            icon: "styles__icon___20PFF-camelCase",
            inputFilled: "styles__inputFilled___15qYm-camelCase",
            inputError: "styles__inputError___Ghico-camelCase",
            iconFilled: "styles__iconFilled___33tky-camelCase",
            iconError: "styles__iconError___3M-Oo-camelCase",
            input: "styles__input___1kMkR-camelCase",
            mInput: "styles__mInput___rWDgh-camelCase",
            button: "styles__button___ETp3K-camelCase",
            buttonFilled: "styles__buttonFilled___aEkp5-camelCase",
            buttonError: "styles__buttonError___1rh-5-camelCase",
            errorContainer: "styles__errorContainer___2Kiui-camelCase",
            errorIcon: "styles__errorIcon___258RL-camelCase",
            errorText: "styles__errorText___3KNUW-camelCase"
        }
    },
    "48wA": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJ+SURBVFiFxZbNS1RhFMZ/596ZcfSmk6YlpkbZB5Sa1CqyiBa1CLdFUDtBgxZtolWbiIj+gWlRqz4RWvQHhCAukoKUBgxMotLMjPycGce5c0+LsUXUfUcZr/NsZvEezvPjnvd5zwgAfX12RcP+bvH0CughkBCBSF1EEorEU52HHyDiCX19tlO/9wnIhWBMfSQ8S3Z2XJKKweEe8fT+ppqvSlV6rPxnL41EtNfKz7xkag0VunCWQFNZhF3RCHXhEFW2TdSyCIsgAjlVlj1l1nWZyGT5kFpm3s2tFSBkND9fV82dPQ3UR8JrbUhOldcLSe5+maZ/brFgvWU6PFtTtS5zAFuE47EtvGxr4Vrj9uIAipEF3NrdQLtTHhzAeDrD1ErW2LyrNhYcwNWxr7S/GWU8nfGtaSyLBAcAkPY8hhaTvueqGiwAQK0hTBMZ/xEBFLV0Tm2t5FjM4XR1pW/NqwJRLArgRvMO4/nzH7MMLfiPBwKMYSKZ5uanbwXrAgNodcoZOnKAo5UVpQEAqAmHiO9rRoIC6Ho/TsfbUWayrm/NQSfKrqj/W1AUgKvKx3SG/lnzTW8yPEYbMoKobW5ji/8Qiophm1NOczTCGcM7APDdsC+KArjXsrNgzWQmy5hhVwSaAoDbn6fIGfZBYADJnMf18UkeTf8y1hlHMLKU5ty2GI5t+WZZyachlfOYXskymlpmYH6JFzNz/DTE84/EGXhn3JeWCDb8DSCrzqs/CniqeAXt/uUPgbqmf8b/bWxe8euRayGS2LB265WSsBSJl8xfiAuqljM4/Bjl4ua68zR5suNy/m6pWhUDI90i2gu0UuQDZZCLklAhnjrR8RAR7zd5qtbVrkXQPwAAAABJRU5ErkJggg=="
    },
    "5squ": function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__container___3fN8D-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;border-radius:7px;text-align:center;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__containerHeader___14yv--camelCase{text-align:center;font-size:40px;line-height:40px;margin:20px;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__inputContainer___7L0w8-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___7L0w8-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___7L0w8-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___7L0w8-camelCase[focus-within]>.styles__icon___23cAU-camelCase{color:#0bc2cf}.styles__inputContainer___7L0w8-camelCase:focus-within>.styles__icon___23cAU-camelCase{color:#0bc2cf}.styles__inputFilled___1emJx-camelCase{border-color:#3a3a3a}.styles__inputError___zWN3Q-camelCase{border-color:#ce1313}.styles__icon___23cAU-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__iconFilled___2cKkT-camelCase{color:#3a3a3a}.styles__iconError___39ZHw-camelCase{color:#ce1313}.styles__input___3WHHJ-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___3WHHJ-camelCase:-moz-placeholder,.styles__input___3WHHJ-camelCase:-ms-input-placeholder,.styles__input___3WHHJ-camelCase::-moz-placeholder,.styles__input___3WHHJ-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___3bOaG-camelCase:-moz-placeholder,.styles__mInput___3bOaG-camelCase:-ms-input-placeholder,.styles__mInput___3bOaG-camelCase::-moz-placeholder,.styles__mInput___3bOaG-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___zWN3Q-camelCase,.styles__inputError___zWN3Q-camelCase:-moz-placeholder,.styles__inputError___zWN3Q-camelCase:-ms-input-placeholder,.styles__inputError___zWN3Q-camelCase::-moz-placeholder,.styles__inputError___zWN3Q-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___3WHHJ-camelCase:focus,.styles__input___3WHHJ-camelCase:focus:-moz-placeholder,.styles__input___3WHHJ-camelCase:focus:-ms-input-placeholder,.styles__input___3WHHJ-camelCase:focus::-moz-placeholder,.styles__input___3WHHJ-camelCase:focus::-webkit-input-placeholder,.styles__mInput___3bOaG-camelCase:focus,.styles__mInput___3bOaG-camelCase:focus:-moz-placeholder,.styles__mInput___3bOaG-camelCase:focus:-ms-input-placeholder,.styles__mInput___3bOaG-camelCase:focus::-moz-placeholder,.styles__mInput___3bOaG-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___3fN8D-camelCase{width:320px}.styles__inputContainer___7L0w8-camelCase{width:280px}.styles__input___3WHHJ-camelCase{width:210px}}.styles__button___1idCu-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___1idCu-camelCase:focus,.styles__button___1idCu-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___2WGQb-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___xKqIr-camelCase,.styles__buttonError___xKqIr-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___xKqIr-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___2i1CD-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___3uNoa-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___2wspg-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;color:#3a3a3a}.styles__errorText___2wspg-camelCase,.styles__link___3Bv4G-camelCase{font-family:Nunito,sans-serif}.styles__link___3Bv4G-camelCase{font-size:35px;color:#0bc2cf;text-align:center;line-height:55px;margin:25px auto;text-decoration:underline;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}", ""]), e.locals = {
            container: "styles__container___3fN8D-camelCase",
            containerHeader: "styles__containerHeader___14yv--camelCase",
            inputContainer: "styles__inputContainer___7L0w8-camelCase",
            icon: "styles__icon___23cAU-camelCase",
            inputFilled: "styles__inputFilled___1emJx-camelCase",
            inputError: "styles__inputError___zWN3Q-camelCase",
            iconFilled: "styles__iconFilled___2cKkT-camelCase",
            iconError: "styles__iconError___39ZHw-camelCase",
            input: "styles__input___3WHHJ-camelCase",
            mInput: "styles__mInput___3bOaG-camelCase",
            button: "styles__button___1idCu-camelCase",
            buttonFilled: "styles__buttonFilled___2WGQb-camelCase",
            buttonError: "styles__buttonError___xKqIr-camelCase",
            errorContainer: "styles__errorContainer___2i1CD-camelCase",
            errorIcon: "styles__errorIcon___3uNoa-camelCase",
            errorText: "styles__errorText___2wspg-camelCase",
            link: "styles__link___3Bv4G-camelCase"
        }
    },
    "9hp4": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABAZSURBVHic7d17bFRXfgfw7+/eO28/xjZ+gMFAirMNBAKEoKpqoqK02bbaNMquhEq2VbdNxW5XfSjb3TY0JV1pQxKt0rTbrfqgTRp120VltdsmUVLtdom1pI8IwiOAIVmyCxgcbIM9HttzZ+bOvffXP2ZMMfbY4xf3nPHvI1lG4zvjn60vx2fOPQ/CAkoc6W6jrLueyd8Eoo0AOpl5NYBGIsTBMBby+wlNEHxm2ACGiOgSgPNgPk1snOKYdTazfUPfwn2r+WCmxKEzLQh7mwHeBeA+AG0AGub92qLaMYAUgD4ARwE6AMc8mXnw7gEQ8VxfdO6he/3deKLe3E3ATgZtBTgy59cSApQn8HEGDmbS3n48vM2e06vM9gnJrhNJx6KdxPwUgI65fFMhZtDDRPvCLh8c3rFleDZPrDzQXV1W3Kq7h5j2AXgAoNhsqxSicpwFcJiJn7LdkfewY4dbybMqfpOWsOp3EYxXAfq4hFksPooB9HGC8WrCqt9V8bNmvKKruyZuOc8T0+MAR+dVoxBzQjkmfsl2w09ix4axaa+c7ouJriNtZIa+wuDPAGQtaI1CzAq7BHqFvcLezI7tZYf5yge6q7umxnT+nIHfxCy6JkIsIp+Al8e88BPlWuqyQY1bzvPFllnCLJRhMPgzcct5vtwFk1vori4rYdXvAhv7pc8s1EQ5kL8746YP3Dr6Man1jVt19wD0nIRZqIujAD1XzOpEEwKd7DqRJKZ9YLTfvuKEmANGOzHtS3adSN788IRAOxbtBPDAbS1MiLl7oJTZG/6/D12cm3EOcjtb6KUnk/buGp/7UWyhmSlRb+6GhFnopyNRb+4GMwGlQCcOnWkhYOf0zxNCTQTsTBw60wKMt9Bhb3NxCqgQ+mHQ1uKc/BtvCnmXzGcW+uJIaYEJjMSR7jYUV5oIobP7Eke62wzKuutRXDYlhM7aKOuuN5j8TSiuARRCZw1M/iajtDpbFrQK3RGINhoAOoOuRIgF0mmU9s0QQnvMvNoA0Bh0IUIskEaDCPGgqxBiIRAhbsj2XKJqMAwJs6gqEmhRVSTQoqosmb02DABRw0DUIEQMAxGDEDEIISJEiFBvmag1TdSYBuosE3HDQNw0EDcMREvXRw1CmAyEDEKIgBARTCJYpc8GineoiEqfQfDBYAZ8MFwGCswo+Iw8M3K+j6zvw/Z8jHk+RlwPI56HYdfDYMFFyvWQ88evK37OeD4cnvPmnFWvKgNNADoiIayJRrA6GsbqaBht4RAaLBNJy0RdKbx1poGEaSJmGkreKvWYkfF8DLseUm4x4AOOi6tOAT/O5nHOzuGHdg7XXS/oUpWhfaDbwyHcGY+gMxbFvTUxbEjE0BmPIGGaQZc2byYR6kr/ATsQnvIanxn9TgHHRm0cG7PRncnhTCaHXseBtwQbckocPqHVj20RYXUkjJ+qS+AXG2uxsSaOppCFOtOEoWIzexsxANvzMeAU8MNsDodSoziUGsUVp4CM5wdd3m2hVaBXRkL47PJl+FRzA1ZGw/KOtgIDTgH/nc7g29dSeG0wjWqPtTaBfqylAV9ZuwKt4VDQpWireyyLr/UO4LXBNMaqtMXWItCbEzG8sWkd6i39+8VBy3g+jo5msO9SH46N2lU3YqLFX+1PNiclzAskYRr42WQt/nX9WnxxVQtqTS0iUDEtfpqGkPaDMcppDFn449XL8f17OrEpEVVy2HIutAi0WDwbEjH8y11r8allSYRI/1hLoAXWxiJ4cd1KPNai/9JSCbQAUOyCfL1zFX6rrUnrlloCLW4wiPD0muX45aY6bYOha91ikTSGLHx5zQpsSOi5370EWkyyNhbBX65bhZiGcwkk0GJK2+oS+HRLo3bzYyTQYkoEYPeKZVih2VQDCbQoa30ihkeXJWe+UCESaDGtR5clUafR7XF9KhWBuCMWwcZELOgyKiaBFtNqClnYXqfPXkQSaDEtAvAz9bVBl1ExCbSY0SaNbrJIoMWMlkfCaNVkCq8eVWrmAzuHxz+4NOnxetPEvbVxPNbagHWxKCyNJgH9RCyC/oI784UBk0AvgqzPODmWnfJrP0iP4VvXUti7ejl2tTZqM7F+uSY3WKTLEYDL+QKe+NEV/PWVgaBLqVh7RAItppHxfDzb04czmalbctXosqZTAh2gtOfjb3qvIe+rv6VAVJOdl/Wosor9x9AILuacoMuYUVSTaXcS6IBdK7jo1qDboeZ2lpNJoAPGAE5pEOiCJhvSSKAVcN7OB13CjHTZYUkCrYAhDW5YZD099qCWQCvA1mCUY9hVv0ZAAq0EQ4Nb4IOu+n9FAAm0EmIajPH2O4WgS6iI+r/JJWCZBjPZejQYKwck0EpYF4sEXcK0Csy4nJcWWlSAAGyqUXvN3od2XobtRGVaQhbWx9VeEaLLBCpAAh24n2+oRUd06iPbVOAx452RTNBlVEwCHaAa08Dn2puVnsmWcj2clhZazCRqEJ5ob8HmGrW3CLiaL6DbzgVdRsXUHy+qQp2xCL64sgW7WhuDLmVGbwymkdbo6GUJ9CKIG4Qtt7S8MYPQUToB96HGOrRHQsrfIRx2Xbw5lA66jFmRQC+CO+NRvL3lzqDLmLe3UqN4X4OZgDeTPrSYUt738eLlAS0mTt1MAi0m8Zjxzf4hvKfR6MY4CbSY5H07hxcuD0CPe4MTSaDFBP1OAX/w4RVcyusxGelWEmhxg+35ePrCR3hn1A66lDmTUQ4BoBjmFy734ZsDKS27GuMk0AIf5QvYe6EXB68Nax1mQAK9pI16Ht4dsfEnFz5Ct53TPsyABHrJYQCDjovvp0bw2mAabw2PYszTa6x5OvKmcAnyS21xjWmgRYPlX7NRXT+NmBEBaAmH8CutjXi0OYk+x8Ubg2kcGBhCt52D4+vd8ZAWegmLGAZWR8P4fHszvr3hDjy7dgWSmmybW44EWgAottqfW9GM/9p8Jz65LKnVcRk3k0CLCdbEIviLdSuxZ1Ur4gqvpClHv4rFomsMWfhSRyv+aFUrEhodiwxIoEUZBhG+0NGKZ9Ys1yrU+lQqbjsC8KttTfjdFc2abHcugRYziBkGvrCqFdtq1V7MO04CLWYUNw08s2Y5mjS4CSOBFhXZXl+DX2hQ/xB7CbSoSIgIn25pVP40LAm0qNim2jh+ui4RdBnTkkCLitVbJh5Iqt3tUL+Xr6HLeQdf7emf8BgBqDMNbK2N4xNNSYQV/9M9FQLwUEMtvnzxatCllCWBXgSDBQ//2DdY9usfi/Xh2Tva8VBjnTbju+M21cTRHLJwTdGTu6TLEYAPsnn83oeX8Z2BVNClzMlmhTdol0AHpDdfwB9e6MUVDbcLuEcCLabS77h49lIf8pptt7UuGoGpaF9JAh2wt4ZHtTmQZ1xLOKTs1FI1q1pCruQLOKvZHnJNIQtxRWfgqVnVEnNkRK+diuosAxFSMzpqVrXEXMzptQdzjWkqO44ugVbAdUXHdMtJGAZCiq45lEArIKvZKEeISEY5RHmqn7VyK4sAQ9F7nBJoBSQUHQIrxySCqv8H9fpNVqm2cCjoEmbFZYaqGyxJoBXQGY8EXcKsOMzwFD3MXgIdMAKwReG5EVNxfIan6Oa7EuiA/WQ8ivUJvQKd8xmumnmWQAftE0112vWhU66LnKJDjRLoALWHQ/j8ihbtNka8XnBhK7pJugQ6IOvjUXzjrtVoDuu3aGjAcZFRNND6/TY1ZRIQNww0hiz8XLIWv93ejI/Fo0GXNScXcnk4io5ySKAXwapICF/vXDXhsRABTZaFzngU62J6DdPd6pjC5xhKoBdBU8jCb7Q1BV3GovCY8T/pTNBllCV9aDEr79s5pDwv6DLKkkCLijGANwbTQZcxLQm0qNj1gov/TI0GXca0JNCiYh9ksnhvTO31jxJoURGfGf/UPwRb0TuE4yTQoiLvjGTwPcW7G4AEWlTAY8Y/XL2OQQ3WPkqgxYx+MDyK71wfVnTC6EQSaDGtC9k89vz4I2Wni95KAi3KSrsunrnUh3N2LuhSKiaBFmX9WU8//n1wGGqPa0wkcznEJLbv4297r+HF3mtBlzJrEmgxQdp18dWefvz91fInEKhMAi1uGHZd/P75K3h9MK3sfOeZSKAFCsx48/ownr54FT/K6XeiwM0k0EuYy4zzdg4vXO7H91KjSLnqTgutlAR6ibqSc/BS33UcGEjhimYnCExHi0D7mvbnVJPxPBwdsfFv14fxz/1DyFfh71WLQF+tohbkdmIAQwUXvfkCDqdH8a2BFC7kHKRcVfc9mj8tAv3q9WF8qaMVEc126QxKxvNwbDSLrtQI/nc0g+5Mrir6x5XQItDnsnn8+rmL+NM1y3GXZttmLaas5+OqU0Bv3sHFnIMzmSyOjto4MZZFoQq7E5XQItAA8ObQCLrtHHYka/BLjfXoiIZRY5qImwYiBsGi4ocJgIiU3I6bAYAZfunfzIAPhlf67HJxqqbLjML4h89wmJHxPPQ5Li7m8ricK+By3kFP3sGI52PU9TDi+XCXaIhvRonDJ7T8LSQtE60hC00hC7WmUQp28eyP8VCrhsFgBjwU3+h6jAnhdXxGnn3kfIbt+cj6PmzPx6jnIetz1fZ7F5I2LfSthl0Pw64HZPU6QUosLnmXJaqKBFpUFQm0qCoSaFFVJNCiqhggrVbYCFEewTeYoe5mv0LMAjNsA8BQ0IUIsUCGDCK6FHQVQiwEIrpkADgfdCFCLJDzBphPAzJNQGiPwXzaIDZOAUgFXY0Q85QiNk4ZHLPOAugLuhoh5qmPY9ZZI7N9Qx+Ao0FXI8Q8Hc1s39BXulNIBwCSeZhCU5QvZnj81rdjniTw8UBrEmKOCHwcjnkSKAU68+DdAwwcDLYsIeaGgYOZB+8eAMZbaCLOpL39AHqCLEyIOejJpL39IGLg5tl2D2+zmWgfwGqf2yXEDZxlon14eNuN+UgTpo+GXT4I4PBtr0uIuTlcyuwNk5ZGx98+di/BeBWM9ttXlxCzROhl+I/Y99977OaHJ03wt92R9wDeA5A+B2uIJYZyAO8pZvWWr5R7SvztE39FzJ8FSNutDkQ1YpeJ/s6+f8vvTPXVskuwbDf8JIFeAWRFi1CGT6BXbDf8ZLkLyq8p3LFhjL3CXgJeBlj9I0RFlWOXgJfZK+zFjg1j5a6aeb+sru6auOU8T0yPAxxd0BqFqAjlmPgl2w0/OV2YgUoCXZJ4+/ivAfScjH6I24rQC/CezP1bv1HJ5RVvY5Bx0wcY/iMAf1duvojFx1mAv8vwH8m46QOVPmvWW3Qmu04kHYt2EvNTADpm+3whKtDDRPvCLh8c3rFleDZPnPues6+/G0/Um7sJ2MmgrQBH5vxaQoDyBD7OwMFM2tt/8+3sWb3KvGpgpsShMy0Ie5sB3gXgPgBtABrm/dqi2jGKS/9KC0zoABzzZObBuwfGJxrNxYKGLnGku42y7nomfxOINgLoZObVABqJEAfL1mNLEsEvbWg0VNo24zyYTxMbpzhmnS2tmloQ/wcEy2thSwEiBAAAAABJRU5ErkJggg=="
    },
    GEXq: function(t, e, o) {
        var r = o("gdCz");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    "J+dS": function(t, e, o) {
        var r = o("lPxx");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    LsG3: function(t, e, o) {
        var r = o("slxR");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    OI9K: function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__blookContainer___36LK2-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;position:relative;display:flex;justify-content:flex-end}.styles__spookyGhost___1VxWJ-camelCase{animation:styles__ghostShake___18dP5-camelCase 2s linear 0s infinite alternate}@keyframes styles__ghostShake___18dP5-camelCase{0%{transform:translateY(0)}to{transform:translateY(-7.5%)}}.styles__blook___1R6So-camelCase{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__santaHat___RZX9l-camelCase{position:absolute;bottom:75.5%;left:55%;width:50%;transform:translate(-50%) rotate(-5deg)}.styles__timsCow___r9aN7-camelCase{position:absolute;bottom:37.5%;left:50.25%;width:20%;transform:translate(-50%,50%);transform-origin:50% 55%;animation:styles__timsCowSpin___16EM--camelCase 3s linear 0s infinite}@keyframes styles__timsCowSpin___16EM--camelCase{0%{transform:translate(-50%,50%) rotate(0deg)}50%{transform:translate(-50%,50%) rotate(180deg)}to{transform:translate(-50%,50%) rotate(1turn)}}.styles__phantomSword___3gNaG-camelCase{position:absolute;bottom:0;right:-10%;width:42.5%;transform:rotate(25deg);animation:styles__phantomSwordMove___2b5y5-camelCase 1.5s linear 0s infinite}@keyframes styles__phantomSwordMove___2b5y5-camelCase{0%{transform:rotate(25deg) translateY(0)}50%{transform:rotate(25deg) translateY(-15%)}to{transform:rotate(25deg) translateY(0)}}.styles__astro1___3f5Wp-camelCase,.styles__astro2___2s1LW-camelCase,.styles__astro3___2LcHF-camelCase,.styles__astro4___LJ9b1-camelCase,.styles__astro5___3aaY7-camelCase,.styles__astro6___1kB-r-camelCase{position:absolute}.styles__astro1___3f5Wp-camelCase{animation:styles__astro1___3f5Wp-camelCase 4s linear infinite}@keyframes styles__astro1___3f5Wp-camelCase{0%{opacity:1}8.33%{opacity:0}16.67%{opacity:0}25%{opacity:0}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:0}83.33%{opacity:0}91.67%{opacity:0}to{opacity:1}}.styles__astro2___2s1LW-camelCase{animation:styles__astro2___2s1LW-camelCase 4s linear infinite}@keyframes styles__astro2___2s1LW-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:0}25%{opacity:0}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:0}83.33%{opacity:0}91.67%{opacity:1}to{opacity:1}}.styles__astro3___2LcHF-camelCase{animation:styles__astro3___2LcHF-camelCase 4s linear infinite}@keyframes styles__astro3___2LcHF-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:0}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:0}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}.styles__astro4___LJ9b1-camelCase{animation:styles__astro4___LJ9b1-camelCase 4s linear infinite}@keyframes styles__astro4___LJ9b1-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:1}33.33%{opacity:0}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:0}75%{opacity:1}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}.styles__astro5___3aaY7-camelCase{animation:styles__astro5___3aaY7-camelCase 4s linear infinite}@keyframes styles__astro5___3aaY7-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:1}33.33%{opacity:1}41.67%{opacity:0}50%{opacity:0}58.33%{opacity:0}66.67%{opacity:1}75%{opacity:1}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}.styles__astro6___1kB-r-camelCase{animation:styles__astro6___1kB-r-camelCase 4s linear infinite}@keyframes styles__astro6___1kB-r-camelCase{0%{opacity:1}8.33%{opacity:1}16.67%{opacity:1}25%{opacity:1}33.33%{opacity:1}41.67%{opacity:1}50%{opacity:0}58.33%{opacity:1}66.67%{opacity:1}75%{opacity:1}83.33%{opacity:1}91.67%{opacity:1}to{opacity:1}}", ""]), e.locals = {
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
    RnhZ: function(t, e, o) {
        var r = {
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

        function a(t) {
            var e = n(t);
            return o(e)
        }

        function n(t) {
            if (!o.o(r, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return r[t]
        }
        a.keys = function() {
            return Object.keys(r)
        }, a.resolve = n, t.exports = a, a.id = "RnhZ"
    },
    ShuG: function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, "div,i{font-weight:400}.styles__input-checkbox___bYaPK-camelCase,button,div,i,input.styles__text___JD7fS-camelCase,input[type=button],input[type=number],input[type=submit],input[type=text],textarea{-webkit-appearance:none;-moz-appearance:none}.styles__container___2VzTy-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:420px;width:90%;background-color:#fff;border-radius:7px;text-align:center;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__containerHeader___19fyc-camelCase{text-align:center;font-size:55px;margin:10px 20px 20px;font-family:Titan One,sans-serif;color:#3a3a3a}.styles__inputContainer___t9pz0-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;max-width:330px;width:80%;height:45px;margin:auto auto 15px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___t9pz0-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___t9pz0-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___t9pz0-camelCase[focus-within]>.styles__icon___358UQ-camelCase{color:#0bc2cf}.styles__inputContainer___t9pz0-camelCase:focus-within>.styles__icon___358UQ-camelCase{color:#0bc2cf}.styles__inputFilled___3FO6M-camelCase{border-color:#3a3a3a}.styles__inputError___A-kC4-camelCase{border-color:#ce1313}.styles__icon___358UQ-camelCase{font-size:25px;color:#5f5f5f;padding-left:10px;width:28px;height:45px;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center}.styles__iconFilled___1uSeW-camelCase{color:#3a3a3a}.styles__iconError___1X90M-camelCase{color:#ce1313}.styles__input___2XTSp-camelCase{border:none;margin:5px 2px 5px 11px;max-width:260px;width:calc(100% - 35px);height:35px;font-size:17px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;display:flex;flex-direction:row;align-items:center}.styles__input___2XTSp-camelCase:-moz-placeholder,.styles__input___2XTSp-camelCase:-ms-input-placeholder,.styles__input___2XTSp-camelCase::-moz-placeholder,.styles__input___2XTSp-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___A-kC4-camelCase,.styles__inputError___A-kC4-camelCase:-moz-placeholder,.styles__inputError___A-kC4-camelCase:-ms-input-placeholder,.styles__inputError___A-kC4-camelCase::-moz-placeholder,.styles__inputError___A-kC4-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___2XTSp-camelCase:focus,.styles__input___2XTSp-camelCase:focus:-moz-placeholder,.styles__input___2XTSp-camelCase:focus:-ms-input-placeholder,.styles__input___2XTSp-camelCase:focus::-moz-placeholder,.styles__input___2XTSp-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}.styles__button___2hNZo-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto auto 20px;color:#999;font-size:22px;padding:0;text-align:center;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___2hNZo-camelCase:focus,.styles__button___2hNZo-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___23Dcn-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___3TA7d-camelCase,.styles__buttonError___3TA7d-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___3TA7d-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___1LbDZ-camelCase{border:2px solid #ce1313;border-radius:6px;max-width:330px;width:80%;display:flex;flex-direction:row;align-items:center;margin:auto auto 20px}.styles__errorIcon___3JrS4-camelCase{font-size:22px;color:#ce1313;padding-left:14px;padding-right:4px;margin:auto 2px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___3OuU1-camelCase{margin:8px 5px 5px 11px;font-size:16px;text-align:left;color:#3a3a3a}.styles__errorText___3OuU1-camelCase,.styles__forgotLink___KkpPa-camelCase{font-family:Nunito,sans-serif}.styles__forgotLink___KkpPa-camelCase{margin:0 auto 15px;font-size:19px;color:#0bc2cf;text-align:center;text-decoration:underline;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__orRow___10Upp-camelCase{max-width:330px;width:80%;display:flex;flex-direction:row;align-items:center;margin:0 auto 10px;font-family:Nunito,sans-serif;font-size:14px;color:#999}.styles__orBar___2WWCC-camelCase{height:1px;flex-grow:1;background-color:#999}@media only screen and (max-width:450px){.styles__containerHeader___19fyc-camelCase{font-size:40px;margin:10px 15px}}", ""]), e.locals = {
            "input-checkbox": "styles__input-checkbox___bYaPK-camelCase",
            text: "styles__text___JD7fS-camelCase",
            container: "styles__container___2VzTy-camelCase",
            containerHeader: "styles__containerHeader___19fyc-camelCase",
            inputContainer: "styles__inputContainer___t9pz0-camelCase",
            icon: "styles__icon___358UQ-camelCase",
            inputFilled: "styles__inputFilled___3FO6M-camelCase",
            inputError: "styles__inputError___A-kC4-camelCase",
            iconFilled: "styles__iconFilled___1uSeW-camelCase",
            iconError: "styles__iconError___1X90M-camelCase",
            input: "styles__input___2XTSp-camelCase",
            button: "styles__button___2hNZo-camelCase",
            buttonFilled: "styles__buttonFilled___23Dcn-camelCase",
            buttonError: "styles__buttonError___3TA7d-camelCase",
            errorContainer: "styles__errorContainer___1LbDZ-camelCase",
            errorIcon: "styles__errorIcon___3JrS4-camelCase",
            errorText: "styles__errorText___3OuU1-camelCase",
            forgotLink: "styles__forgotLink___KkpPa-camelCase",
            orRow: "styles__orRow___10Upp-camelCase",
            orBar: "styles__orBar___2WWCC-camelCase"
        }
    },
    VXYz: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAErSURBVDiNpZGxSsNQGIXPf+9NjAaa0Ea6OIimi4urPkGXLp3FxdVH8BHE2RdwEgc3FTd9AMFFIVWRolANrQhibNP7u0jpDanEeqZ7zr3n4+e/5FxeLwkenhEQ4g9ioKUprYtpygBAQChZnapsmQDMWwq+krCFQMqMeJAiHqR5nJoad2slF+erNVDOyz4zdu6fsP8cG7kYN56SRlkzwD9nmwi7ywtYdOzJgKyOXnvYun00snB2pjhgTgqsuI6R3X1+Gd7YQVaNiodGxRv5g04XD0m/+ARZbVTLWC+5xQGHLz1sR+2RJwCb1XJxgCUIgSWNTJL5yb/uoBn4aAa+kR3Hb5MBida5IA3g5iPBXruDk+67cUfuxRXntgpKMND6Rz8SmtI6gGia8pBF/Rte7FLvQQrmLAAAAABJRU5ErkJggg=="
    },
    Xst1: function(t, e, o) {
        var r = o("sLLB");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    dlDy: function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__blookContainer___3YrVw-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;position:relative;display:flex;justify-content:flex-end}.styles__blook___2VL-Z-camelCase,.styles__part___39fOM-camelCase{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.styles__part___39fOM-camelCase{position:absolute;bottom:0;left:0}", ""]), e.locals = {
            blookContainer: "styles__blookContainer___3YrVw-camelCase",
            blook: "styles__blook___2VL-Z-camelCase",
            part: "styles__part___39fOM-camelCase"
        }
    },
    fv3p: function(t, e, o) {
        var r = o("1yPM");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    gdCz: function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__container___3qYKT-camelCase{height:50px;width:100%;margin-bottom:30px;position:relative}.styles__loader___WKA0s-camelCase{position:absolute;top:calc(50% - 20.125px);left:calc(50% - 17.5px)}.styles__loaderBox___9moZZ-camelCase{width:35px;height:40.25px;animation:styles__animate___3EY3J-camelCase 2s linear infinite;position:absolute;top:0;left:0;border-radius:4px;z-index:3;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}@keyframes styles__animate___3EY3J-camelCase{4.25%{border-bottom-left-radius:4px;border-bottom-right-radius:4px}6.25%{transform:translateY(9px) rotate(22.5deg)}12.5%{transform:translateY(18px) scaleY(.9) rotate(45deg);border-bottom-right-radius:37.5px}18.75%{transform:translateY(9px) rotate(67.5deg)}25%{transform:translateY(0) rotate(90deg)}29.25%{border-bottom-right-radius:4px;border-top-right-radius:4px}31.25%{transform:translateY(9px) rotate(112.5deg)}37.5%{transform:translateY(18px) scaleY(.9) rotate(135deg);border-top-right-radius:37.5px}43.75%{transform:translateY(9px) rotate(157.5deg)}50%{transform:translateY(0) rotate(180deg)}54.25%{border-top-right-radius:4px;border-top-left-radius:4px}56.25%{transform:translateY(9px) rotate(202.5deg)}62.5%{transform:translateY(18px) scaleY(.9) rotate(225deg);border-top-left-radius:37.5px}68.75%{transform:translateY(9px) rotate(247.5deg)}75%{border-top-left-radius:4px;transform:translateY(0) rotate(270deg)}79.25%{border-bottom-left-radius:4px}81.25%{transform:translateY(9px) rotate(292.5deg)}87.5%{transform:translateY(18px) scaleY(.9) rotate(315deg);border-bottom-left-radius:37.5px}93.75%{transform:translateY(9px) rotate(337.5deg)}to{transform:translateY(0) rotate(1turn)}}.styles__shadow___2Vr7S-camelCase{width:40px;height:4px;background:#000;opacity:.2;position:absolute;top:49px;left:0;border-radius:50%;z-index:2;animation:styles__shadow___2Vr7S-camelCase .5s linear infinite}@keyframes styles__shadow___2Vr7S-camelCase{50%{transform:scaleX(1.2)}}", ""]), e.locals = {
            container: "styles__container___3qYKT-camelCase",
            loader: "styles__loader___WKA0s-camelCase",
            loaderBox: "styles__loaderBox___9moZZ-camelCase",
            animate: "styles__animate___3EY3J-camelCase",
            shadow: "styles__shadow___2Vr7S-camelCase"
        }
    },
    kYN1: function(t, e, o) {
        var r = o("ShuG");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    lPxx: function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__container___1AWco-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:520px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__containerHeader___246oi-camelCase{text-align:center;font-size:200px;margin:0 20px;font-family:Titan One,sans-serif;color:#3a3a3a;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__blook___2NK26-camelCase{height:160px;margin:auto 10px}@media only screen and (max-width:600px){.styles__container___1AWco-camelCase{width:320px}.styles__containerHeader___246oi-camelCase{font-size:130px}.styles__blook___2NK26-camelCase{height:100px}}.styles__containerText___2l6Nk-camelCase{text-align:center;font-size:24px;margin:10px 30px 20px;font-family:Nunito,sans-serif;color:#3a3a3a}", ""]), e.locals = {
            container: "styles__container___1AWco-camelCase",
            containerHeader: "styles__containerHeader___246oi-camelCase",
            blook: "styles__blook___2NK26-camelCase",
            containerText: "styles__containerText___2l6Nk-camelCase"
        }
    },
    mXOY: function(t, e, o) {
        var r = o("OI9K");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    mZRi: function(t, e, o) {
        var r = o("5squ");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    rPUr: function(t, e, o) {
        var r = o("dlDy");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]);
        var a = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        o("aET+")(r, a);
        r.locals && (t.exports = r.locals)
    },
    sLLB: function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".arts__modal___VpEAD-camelCase{display:block;position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6)}.arts__mBody___2KdVv-camelCase{top:0;min-height:100%;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;background-color:#f7f7f7}.arts__mBody___2KdVv-camelCase,.arts__regularBody___1TM6E-camelCase{margin:0;padding:0;position:absolute;left:0;width:100%;z-index:-1}.arts__regularBody___1TM6E-camelCase{height:calc(100% - 55px);top:55px}.arts__profileRegularBody___2fvy5-camelCase{height:calc(100% - 55px);width:100%;margin:0 auto;padding-top:55px;position:relative;z-index:-1}.arts__hostRegularBody___Yp72x-camelCase{width:100%;height:calc(100% - 65px);margin:0;padding:0;position:absolute;top:65px;left:0;z-index:-1}.arts__regularBodyMax___1IzZX-camelCase{height:calc(100% - 55px);width:100%;max-width:1366px;margin:0 auto;padding-top:55px;position:relative;z-index:-1}.arts__body___3acI_-camelCase{width:100%;min-height:100vh;overflow-x:hidden;background-color:#f7f7f7}.arts__body___3acI_-camelCase,.arts__hostBody___1Z9ui-camelCase{margin:0;padding:0;position:absolute;top:0;left:0;z-index:-1}.arts__hostBody___1Z9ui-camelCase{width:100vw;height:100vh;overflow:hidden;background-color:#0bc2cf}.arts__royaleHeaderContainer___c23M6-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center;margin:7vh auto 4vh;height:12vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.arts__royaleHeaderText___2CGb9-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:5vw;opacity:0;animation:arts__fadeInPop___2oDEV-camelCase .3s linear .5s forwards}@keyframes arts__fadeInPop___2oDEV-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.arts__leftSlantLine___2RNzk-camelCase{width:10vh;top:3.1vh;left:0;transform:rotate(60deg)}.arts__leftBottomLine___MwYEr-camelCase,.arts__leftSlantLine___2RNzk-camelCase{height:1vh;border-radius:7px;background-color:#3a3a3a;position:absolute}.arts__leftBottomLine___MwYEr-camelCase{width:20vw;top:7.071vh;left:7.071vh}.arts__leftName___11lEC-camelCase{color:#3a3a3a;text-align:left;position:absolute;left:7.5vh;top:-2.5vh;height:9.5vh;width:20vw;font-family:Nunito,sans-serif;font-weight:700;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.arts__leftEnergyIcon___1rm7a-camelCase{color:#9a49aa;font-size:2.25vw;position:absolute;top:7.8vh;left:1.2vw}.arts__leftEnergyContainer___EuHQi-camelCase{position:absolute;top:9vh;left:7.5vh;display:flex;flex-direction:row;justify-content:flex-start;width:20vw}.arts__energy___1CSfe-camelCase{background-color:#9a49aa;height:2vh;border-radius:5px}.arts__rightSlantLine___25aUV-camelCase{width:10vh;top:3.1vh;right:0;transform:rotate(-60deg)}.arts__rightBottomLine___Y14OT-camelCase,.arts__rightSlantLine___25aUV-camelCase{height:1vh;border-radius:7px;background-color:#3a3a3a;position:absolute}.arts__rightBottomLine___Y14OT-camelCase{width:20vw;top:7.071vh;right:7.071vh}.arts__rightName____zdk3-camelCase{color:#3a3a3a;text-align:right;position:absolute;right:7.5vh;top:-2.5vh;height:9.5vh;width:20vw;font-family:Nunito,sans-serif;font-weight:700;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.arts__rightEnergyIcon___ScBAQ-camelCase{color:#9a49aa;font-size:2.25vw;position:absolute;top:7.8vh;right:1.2vw}.arts__rightEnergyContainer___2VthH-camelCase{position:absolute;top:9vh;right:7.5vh;display:flex;flex-direction:row;justify-content:flex-end;width:20vw}.arts__skipButton___dKgaS-camelCase{position:absolute;top:75px;right:1vw;font-size:3vw;color:#fff;text-align:right;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.arts__skipButton___dKgaS-camelCase:hover{transform:scale(1.05)}.arts__moreButton___3UUpF-camelCase{width:200px;height:60px;line-height:60px;background-color:#0bc2cf;border-radius:7px;margin:45px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-align:center;outline:none;font-family:Nunito,sans-serif;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.arts__moreButton___3UUpF-camelCase:hover{transform:scale(1.05)}.arts__factorySpin___1sK4R-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;animation:arts__vortex___30Y8V-camelCase 4s linear 0s 2}@keyframes arts__vortex___30Y8V-camelCase{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.arts__factoryReverse___1obff-camelCase{transform:rotateY(180deg)}.arts__factoryFlip___3lusY-camelCase,.arts__factoryReverse___1obff-camelCase{position:absolute;top:0;left:0;height:100%;width:100%}.arts__factoryFlip___3lusY-camelCase{transform:rotateX(180deg) rotateY(180deg)}.arts__factoryMicro___1v9fV-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;transform:scale(.4)}.arts__bottomTipText___3rLy_-camelCase{position:absolute;bottom:.5%;left:5%;width:90%;font-size:20px;text-align:center;color:#fff;text-shadow:2px 2px 8px grey}.arts__bottomTipText___3rLy_-camelCase,.arts__googleButton___1rop5-camelCase{font-family:Nunito,sans-serif}.arts__googleButton___1rop5-camelCase{padding:5px 20px;display:flex;flex-direction:row;justify-content:center;align-items:center;box-shadow:0 0 2px 2px rgba(0,0,0,.24);background-color:#fff;border-radius:5px;margin:0 auto 10px;color:#999;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.arts__googleButton___1rop5-camelCase:hover{transform:scale(.95)}.arts__googleLogo___kJrfb-camelCase{width:25px;margin-right:10px}.arts__slantBackground___1yw2G-camelCase{height:80vh;width:150vw;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:calc(-30vh + 55px);left:-25vw;transform:rotate(-10deg);z-index:-1}.arts__tooltip___OAwzR-camelCase{font-family:Nunito,sans-serif!important;font-size:15px!important;line-height:17px!important;padding:6px 13px!important;max-width:185px;text-align:center}.arts__modalButton___1y_HF-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;top:0;height:100%}.arts__bigImage___1UJT0-camelCase{width:80%;height:80%;-o-object-fit:contain;object-fit:contain;position:absolute;top:calc(50% + 27.5px);left:50%;transform:translate(-50%,-50%)}.arts__underline___1nwbn-camelCase{text-decoration:underline}.arts__blockedText___390eB-camelCase{font-size:20px;color:#fff;font-weight:700;text-align:center;position:absolute;top:50%;left:5%;width:90%;transform:translateY(-50%)}", ""]), e.locals = {
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
            blockedText: "arts__blockedText___390eB-camelCase"
        }
    },
    slxR: function(t, e, o) {
        (e = t.exports = o("JPst")(!1)).push([t.i, ".styles__container___1ggKT-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:420px;width:90%;background-color:#fff;border-radius:7px;text-align:center;display:flex;flex-direction:column;box-sizing:border-box;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__containerHeader___3ENzo-camelCase{text-align:center;font-size:55px;margin:10px 20px 20px;font-family:Titan One,sans-serif;color:#3a3a3a}.styles__inputContainer___1Capl-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;max-width:330px;width:80%;height:45px;margin:auto auto 15px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___1Capl-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___1Capl-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___1Capl-camelCase[focus-within]>.styles__icon___2z-Ur-camelCase{color:#0bc2cf}.styles__inputContainer___1Capl-camelCase:focus-within>.styles__icon___2z-Ur-camelCase{color:#0bc2cf}.styles__inputFilled___3ULTX-camelCase{border-color:#3a3a3a}.styles__inputError___zoXs--camelCase{border-color:#ce1313}.styles__icon___2z-Ur-camelCase{font-size:25px;color:#5f5f5f;padding-left:10px;width:28px;height:45px;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center}.styles__iconFilled___1IjQL-camelCase{color:#3a3a3a}.styles__iconError___Ft0vE-camelCase{color:#ce1313}.styles__input___FWky--camelCase{border:none;margin:5px 2px 5px 11px;max-width:260px;width:calc(100% - 35px);height:35px;font-size:17px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;display:flex;flex-direction:row;align-items:center}.styles__input___FWky--camelCase:-moz-placeholder,.styles__input___FWky--camelCase:-ms-input-placeholder,.styles__input___FWky--camelCase::-moz-placeholder,.styles__input___FWky--camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___zoXs--camelCase,.styles__inputError___zoXs--camelCase:-moz-placeholder,.styles__inputError___zoXs--camelCase:-ms-input-placeholder,.styles__inputError___zoXs--camelCase::-moz-placeholder,.styles__inputError___zoXs--camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___FWky--camelCase:focus,.styles__input___FWky--camelCase:focus:-moz-placeholder,.styles__input___FWky--camelCase:focus:-ms-input-placeholder,.styles__input___FWky--camelCase:focus::-moz-placeholder,.styles__input___FWky--camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}.styles__button___1kmFB-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto auto 20px;color:#999;font-size:22px;padding:0;text-align:center;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___1kmFB-camelCase:focus,.styles__button___1kmFB-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___bdriL-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___2cG2w-camelCase,.styles__buttonError___2cG2w-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___2cG2w-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___1kKMc-camelCase{border:2px solid #ce1313;border-radius:6px;max-width:330px;width:80%;display:flex;flex-direction:row;align-items:center;margin:auto auto 20px}.styles__errorIcon___2PoAs-camelCase{font-size:22px;color:#ce1313;padding-left:14px;padding-right:4px;margin:auto 2px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__errorText___jknhI-camelCase{margin:8px 5px 5px 11px;font-size:16px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__agreeHolder___VVRap-camelCase{max-width:330px;width:80%;margin:auto auto 15px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.styles__agreeText___3KXMr-camelCase{font-size:14px;line-height:16px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;margin-left:15px}.styles__link___25Vh2-camelCase{color:#0bc2cf}.styles__checkBox___37FyL-camelCase{width:24px;height:24px;border:2px solid #3a3a3a;border-radius:6px;outline:none;cursor:pointer;color:#3a3a3a;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;font-size:16px;transition:.2s}.styles__checkYes___3mYRu-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___1cAXu-camelCase{border-color:rgba(0,0,0,.25);color:rgba(0,0,0,.25)}.styles__checkError___3aSUR-camelCase,.styles__checkNo___1cAXu-camelCase{background-color:#fff}.styles__checkError___3aSUR-camelCase{border-color:#ce1313;color:#ce1313}.styles__checkIcon___NlTsj-camelCase{width:24px;text-align:center}.styles__buttonIcon___1v-y2-camelCase{width:25px;text-align:center;margin-right:10px;font-size:24px;color:#5f5f5f}@media only screen and (max-width:450px){.styles__containerHeader___3ENzo-camelCase{font-size:40px;margin:10px 15px}.styles__agreeText___3KXMr-camelCase{font-size:12px;line-height:14px}}", ""]), e.locals = {
            container: "styles__container___1ggKT-camelCase",
            containerHeader: "styles__containerHeader___3ENzo-camelCase",
            inputContainer: "styles__inputContainer___1Capl-camelCase",
            icon: "styles__icon___2z-Ur-camelCase",
            inputFilled: "styles__inputFilled___3ULTX-camelCase",
            inputError: "styles__inputError___zoXs--camelCase",
            iconFilled: "styles__iconFilled___1IjQL-camelCase",
            iconError: "styles__iconError___Ft0vE-camelCase",
            input: "styles__input___FWky--camelCase",
            button: "styles__button___1kmFB-camelCase",
            buttonFilled: "styles__buttonFilled___bdriL-camelCase",
            buttonError: "styles__buttonError___2cG2w-camelCase",
            errorContainer: "styles__errorContainer___1kKMc-camelCase",
            errorIcon: "styles__errorIcon___2PoAs-camelCase",
            errorText: "styles__errorText___jknhI-camelCase",
            agreeHolder: "styles__agreeHolder___VVRap-camelCase",
            agreeText: "styles__agreeText___3KXMr-camelCase",
            link: "styles__link___25Vh2-camelCase",
            checkBox: "styles__checkBox___37FyL-camelCase",
            checkYes: "styles__checkYes___3mYRu-camelCase",
            checkNo: "styles__checkNo___1cAXu-camelCase",
            checkError: "styles__checkError___3aSUR-camelCase",
            checkIcon: "styles__checkIcon___NlTsj-camelCase",
            buttonIcon: "styles__buttonIcon___1v-y2-camelCase"
        }
    },
    tjUo: function(t, e, o) {
        "use strict";
        o.r(e);
        var r = o("q1tI"),
            a = o.n(r),
            n = o("i8i4"),
            s = o.n(n),
            i = o("/MKj"),
            l = o("55Ip"),
            c = o("Ty5D"),
            u = o("y++v"),
            p = o("FKJl"),
            f = o("ANjH"),
            h = o("BQ0V"),
            m = o.n(h),
            d = o("rRWa"),
            _ = o("Mpt7"),
            g = Object(_.a)({});
        var y = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return e.type, t
            },
            b = Object(_.a)({});
        var v = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return e.type, t
            },
            w = Object(_.a)({});
        var k = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return e.type, t
            },
            x = Object(_.a)({});
        var E = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return e.type, t
            },
            C = Object(_.a)({});
        var j = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return e.type, t
            },
            O = Object(f.c)({
                hosts: y,
                clients: v,
                games: k,
                towers: E,
                cafes: j
            }),
            L = o("5rFJ");

        function A(t) {
            return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function z() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            z = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == A(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }
        var P = z().mark(S);

        function S() {
            return z().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, Object(L.a)([]);
                    case 2:
                    case "end":
                        return t.stop()
                }
            }), P)
        }
        var N = Object(d.a)(),
            B = window.__REDUX_DEVTOOLS_EXTENSION__ || function() {
                return function(t) {
                    return t
                }
            };
        var T = o("17x9"),
            I = o.n(T),
            M = o("H1WH"),
            R = o("Xst1"),
            D = o.n(R),
            F = o("TSYQ"),
            G = o.n(F),
            U = o("+ipE"),
            Y = o.n(U),
            H = o("N8Vf"),
            W = o("vDqi"),
            Q = o.n(W),
            K = (Q.a.create({}), Q.a.create({
                baseURL: "",
                withCredentials: !0
            }));

        function X(t) {
            return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Z() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            Z = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == X(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function J(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function q(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        J(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        J(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }
        var V = function() {
                var t = window.document;
                return !!(t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement || window.screen.width === window.innerWidth && window.screen.height === window.innerHeight)
            },
            $ = function(t) {
                var e = t || window.event;
                return e && (e.returnValue = "Are you sure you want to leave?"), "Are you sure you want to leave?"
            },
            tt = function(t) {
                return t ? t.indexOf('"') >= 0 ? "Emails can't have quotations." : function(t) {
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t).toLowerCase())
                }(t) ? t.length > 50 ? "Ok, that email is a little too long." : null : "That's not a real email, silly." : "Where's the email?"
            },
            et = function() {
                var t = function(t) {
                    for (var e = window.location.search.substring(1).split("&"), o = 0; o < e.length; o++) {
                        var r = e[o].split("=");
                        if (r[0] === t) return r[1]
                    }
                    return !1
                }("n");
                if (t) {
                    var e = decodeURIComponent(t);
                    localStorage.setItem("blooketRedirectURL", e)
                }
            },
            ot = function() {
                var t = q(Z().mark((function t() {
                    var e, o, r, a;
                    return Z().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(e = localStorage.getItem("blooketRedirectURL"))) {
                                    t.next = 4;
                                    break
                                }
                                return localStorage.removeItem("blooketRedirectURL"), t.abrupt("return", e);
                            case 4:
                                return t.next = 6, K.get("/api/config");
                            case 6:
                                if (o = t.sent, !(r = o.data).isDev) {
                                    t.next = 10;
                                    break
                                }
                                return t.abrupt("return", "/dev");
                            case 10:
                                if ("Student" !== r.userRole) {
                                    t.next = 13;
                                    break
                                }
                                return a = "".concat(r.dashboardBase, "/stats"), t.abrupt("return", a);
                            case 13:
                                return t.abrupt("return", r.dashboardBase);
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            rt = function() {
                var t = new URLSearchParams(window.location.search).get("w");
                if (t) {
                    var e = decodeURIComponent(t);
                    localStorage.setItem("blooketAuthInWindow", e)
                }
            },
            at = function() {
                var t = localStorage.getItem("blooketAuthInWindow");
                if (!t) return !1;
                localStorage.removeItem("blooketAuthInWindow");
                var e = t;
                return window.opener.postMessage("blooketauthcomplete", e), !0
            };

        function nt(t) {
            return (nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function st(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function it(t, e) {
            return (it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function lt(t) {
            var e = function() {
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
                var o, r = pt(t);
                if (e) {
                    var a = pt(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return ct(this, o)
            }
        }

        function ct(t, e) {
            if (e && ("object" === nt(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return ut(t)
        }

        function ut(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function pt(t) {
            return (pt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var ft = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && it(t, e)
            }(s, t);
            var e, o, r, n = lt(s);

            function s(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, s), (e = n.call(this, t)).state = {
                    leftText: t.leftText,
                    rightText: t.rightText,
                    rightLink: t.rightLink,
                    full: V(),
                    wwwBase: null
                }, K.get("/api/config").then((function(t) {
                    e.setState({
                        wwwBase: t.data.wwwBase
                    })
                })), e.checkResize = e.checkResize.bind(ut(e)), e
            }
            return e = s, (o = [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("resize", this.checkResize)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.checkResize)
                }
            }, {
                key: "checkResize",
                value: function() {
                    this.setState({
                        full: V()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return a.a.createElement("div", {
                        className: Y.a.header
                    }, this.state.leftText ? a.a.createElement("div", {
                        className: Y.a.headerLeft
                    }, M.isMobile ? null : a.a.createElement("i", {
                        className: G()(Y.a.expandIcon, this.state.full ? "fas fa-compress" : "fas fa-expand"),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return t.setState({
                                full: (e = window.document, o = e.documentElement, r = o.requestFullscreen || o.mozRequestFullScreen || o.webkitRequestFullScreen || o.msRequestFullscreen, a = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen, e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement ? (a && a.call(e), !1) : (r && r.call(o), !0))
                            });
                            var e, o, r, a
                        }
                    }), this.state.leftText) : this.state.wwwBase && a.a.createElement("a", {
                        className: Y.a.blooketText,
                        href: this.state.wwwBase
                    }, "Blooket"), this.state.rightText ? a.a.createElement(l.b, {
                        className: Y.a.headerRight,
                        to: this.state.rightLink
                    }, this.state.rightText) : null)
                }
            }]) && st(e.prototype, o), r && st(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), s
        }(a.a.Component);
        ft.propTypes = {
            leftText: I.a.string,
            rightText: I.a.string,
            rightLink: I.a.string,
            wwwBase: I.a.string
        };
        var ht = ft,
            mt = o("qhky"),
            dt = o("VXYz"),
            _t = o.n(dt),
            gt = o("48wA"),
            yt = o.n(gt),
            bt = o("9hp4"),
            vt = o.n(bt),
            wt = function(t) {
                var e = t.title,
                    o = t.desc;
                return a.a.createElement(mt.a, null, a.a.createElement("title", null, e), a.a.createElement("meta", {
                    name: "description",
                    content: o
                }), a.a.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                }), a.a.createElement("link", {
                    rel: "apple-touch-icon",
                    href: vt.a,
                    sizes: "180x180"
                }), a.a.createElement("link", {
                    rel: "icon",
                    type: "image/png",
                    href: yt.a,
                    sizes: "32x32"
                }), a.a.createElement("link", {
                    rel: "icon",
                    type: "image/png",
                    href: _t.a,
                    sizes: "16x16"
                }))
            };
        wt.propTypes = {
            title: I.a.string,
            desc: I.a.string
        };
        var kt = wt,
            xt = o("3HZZ");

        function Et(t) {
            return (Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ct() {
            return (Ct = Object.assign ? Object.assign.bind() : function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r])
                }
                return t
            }).apply(this, arguments)
        }

        function jt() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            jt = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == Et(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function Ot(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function Lt(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        Ot(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        Ot(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }

        function At(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var zt = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.data = null, this.loading = !0, this.getLoggedIn()
                }
                var e, o, r, a, n;
                return e = t, (o = [{
                    key: "getData",
                    value: (n = Lt(jt().mark((function t() {
                        return jt().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.loading) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, this.getLoggedIn();
                                case 3:
                                    return t.abrupt("return", this.data);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "getLoggedIn",
                    value: (a = Lt(jt().mark((function t() {
                        var e = this;
                        return jt().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.loading = !0, "undefined" == typeof window) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", K.get("/api/users/verify-session").then((function(t) {
                                        e.data = t.data, e.loading = !1
                                    })).catch((function(t) {
                                        Object(p.b)(t), e.data = null, e.loading = !1
                                    })));
                                case 3:
                                    this.data = null, this.loading = !1;
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }]) && At(e.prototype, o), r && At(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }(),
            Pt = Object(r.createContext)(null),
            St = function(t) {
                return function(e) {
                    return a.a.createElement(Pt.Consumer, null, (function(o) {
                        return a.a.createElement(t, Ct({}, e, {
                            user: o
                        }))
                    }))
                }
            },
            Nt = zt,
            Bt = o("LsG3"),
            Tt = o.n(Bt),
            It = {
                Dog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg",
                Cat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg",
                Rabbit: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg",
                Goldfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg",
                Hamster: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg",
                Turtle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg",
                Kitten: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg",
                Puppy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg"
            },
            Mt = {
                Bear: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg",
                Moose: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg",
                Fox: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg",
                Raccoon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg",
                Squirrel: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg",
                Owl: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg",
                Hedgehog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg"
            },
            Rt = {
                Tiger: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg",
                Orangutan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg",
                Cockatoo: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg",
                Parrot: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg",
                Anaconda: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg",
                Jaguar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg",
                Macaw: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg",
                Toucan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg",
                Panther: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg",
                Capuchin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg"
            },
            Dt = {
                "Snowy Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg",
                "Polar Bear": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg",
                "Arctic Fox": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg",
                "Baby Penguin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg",
                Penguin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg",
                "Arctic Hare": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg",
                Seal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg",
                Walrus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg"
            },
            Ft = {
                Witch: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg",
                Wizard: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg",
                Elf: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg",
                Fairy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg",
                "Slime Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg",
                Jester: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg",
                Dragon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg",
                Queen: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg",
                Unicorn: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg",
                King: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg"
            },
            Gt = {
                "Snow Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg",
                "Holiday Gift": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayGift.svg",
                "Hot Chocolate": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/hotChocolate.svg",
                "Holiday Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg",
                "Gingerbread Man": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadMan.svg",
                "Gingerbread House": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadHouse.svg",
                Snowman: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg",
                "Santa Claus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg"
            },
            Ut = {
                "Two of Spades": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg",
                "Eat Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg",
                "Drink Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg",
                Alice: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg",
                "Queen of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg",
                Dormouse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg",
                "White Rabbit": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg",
                "Cheshire Cat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg",
                Caterpillar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg",
                "Mad Hatter": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg",
                "King of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg"
            },
            Yt = {
                Toast: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg",
                Cereal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg",
                Yogurt: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg",
                "Breakfast Combo": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg",
                "Orange Juice": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg",
                Milk: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg",
                Waffle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg",
                Pancakes: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg",
                "French Toast": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg"
            },
            Ht = {
                Pizza: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg",
                Sandwich: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/sandwich.svg"
            },
            Wt = {
                Earth: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg",
                Meteor: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg",
                Stars: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg",
                Alien: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg",
                Planet: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg",
                UFO: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg",
                Spaceship: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg",
                Astronaut: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg"
            },
            Qt = {
                "Lil Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg",
                "Lovely Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg",
                "Angry Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg",
                "Happy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg",
                Watson: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg",
                "Buddy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg",
                "Brainy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg",
                "Mega Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg"
            },
            Kt = {
                "Old Boot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg",
                Jellyfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg",
                Clownfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg",
                Frog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg",
                Crab: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg",
                Pufferfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg",
                Blobfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg",
                Octopus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg",
                Narwhal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg",
                "Baby Shark": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg",
                Megalodon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/megalodon.svg"
            },
            Xt = {
                Panda: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/panda.svg",
                Sloth: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/sloth.svg",
                Tenrec: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/tenrec.svg",
                Flamingo: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/flamingo.svg",
                Zebra: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/zebra.svg",
                Elephant: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/elephant.svg",
                Lemur: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lemur.svg",
                Peacock: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/peacock.svg",
                Chameleon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/chameleon.svg",
                Lion: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lion.svg",
                "Rainbow Panda": "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/rainbowPanda.svg"
            },
            Zt = {
                Amber: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/amber.svg",
                "Dino Egg": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoEgg.svg",
                "Dino Fossil": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoFossil.svg",
                Stegosaurus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/stegosaurus.svg",
                Velociraptor: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/velociraptor.svg",
                Brontosaurus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/brontosaurus.svg",
                Triceratops: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/triceratops.svg",
                "Tyrannosaurus Rex": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/tyrannosaurusRex.svg"
            },
            Jt = {
                "Light Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
                Black: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blackBlook.svg",
                Red: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/redBlook.svg",
                Purple: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/purpleBlook.svg",
                Pink: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/pinkBlook.svg",
                Orange: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/orangeBlook.svg",
                Lime: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/limeBlook.svg",
                Green: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/greenBlook.svg",
                Teal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tealBlook.svg",
                Tan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tanBlook.svg",
                Maroon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/maroonBlook.svg",
                Gray: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/grayBlook.svg",
                Mint: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/mintBlook.svg",
                Salmon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/salmonColorBlook.svg",
                Burgandy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/burgandyBlook.svg",
                "Baby Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/babyBlueBlook.svg",
                Dust: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dustBlook.svg",
                Brown: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/brownBlook.svg",
                "Dull Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dullBlueBlook.svg",
                Yellow: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/yellowBlook.svg",
                Blue: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blueBlook.svg"
            },
            qt = {
                Pumpkin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg",
                "Swamp Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/swampMonster.svg",
                Frankenstein: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/frankenstein.svg",
                Vampire: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/vampire.svg",
                Zombie: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/zombie.svg",
                Mummy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/mummy.svg",
                Werewolf: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg",
                Ghost: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/ghost.svg"
            },
            Vt = {
                "Red Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/redAstronaut.svg",
                "Blue Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg",
                "Green Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/greenAstronaut.svg",
                "Pink Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/pinkAstronaut.svg",
                "Orange Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/orangeAstronaut.svg",
                "Yellow Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/yellowAstronaut.svg",
                "Black Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blackAstronaut.svg",
                "Purple Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
                "Brown Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/brownAstronaut.svg",
                "Cyan Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/cyanAstronaut.svg",
                "Lime Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/limeAstronaut.svg",
                "Rainbow Jellyfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowJellyfish.svg",
                "Blizzard Clownfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/blizzardClownfish.svg",
                "Lovely Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lovelyFrog.svg",
                "Lucky Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/luckyFrog.svg",
                "Spring Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/springFrog.svg",
                "Poison Dart Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/poisonDartFrog.svg",
                "Lemon Crab": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lemonCrab.svg",
                "Pirate Pufferfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/piratePufferfish.svg",
                "Donut Blobfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/donutBlobfish.svg",
                "Crimson Octopus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/crimsonOctopus.svg",
                "Rainbow Narwhal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowNarwhal.svg",
                "Haunted Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg",
                "Spooky Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg",
                "Spooky Mummy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg",
                "Frost Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg",
                "Tropical Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg",
                "White Peacock": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/whitePeacock.svg",
                "Tiger Zebra": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/tigerZebra.svg",
                "Agent Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/agentOwl.svg",
                "Master Elf": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/masterElf.svg",
                "Spooky Ghost": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyGhost.svg",
                "Tim the Alien": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/timTheAlien.svg",
                "Phantom King": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/phantomKing.svg",
                "Rainbow Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg"
            };

        function $t(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), o.push.apply(o, r)
            }
            return o
        }

        function te(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? $t(Object(o), !0).forEach((function(e) {
                    ee(t, e, o[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : $t(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }))
            }
            return t
        }

        function ee(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t
        }
        var oe = te(te(te(te(te(te(te(te(te(te(te(te(te(te(te(te(te(te({}, {
                Chick: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg",
                Chicken: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg",
                Cow: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg",
                Goat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg",
                Horse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg",
                Pig: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg",
                Sheep: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg",
                Duck: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg"
            }), It), Mt), Rt), Dt), Ft), Ut), Yt), Ht), Wt), Qt), Kt), Xt), Zt), Gt), Jt), qt), Vt),
            re = o("AwEm"),
            ae = o("rPUr"),
            ne = o.n(ae),
            se = {
                base: [{
                    url: "https://media.blooket.com/image/upload/v1634087683/BlookParts/base0.svg",
                    tones: ["#ffcc05", "#fabc2e", "#cd8e2a"]
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
                }],
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
                }],
                eyes: [{
                    url: "https://media.blooket.com/image/upload/v1634087707/BlookParts/eyes0.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087719/BlookParts/eyes1.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087721/BlookParts/eyes2.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087723/BlookParts/eyes3.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087740/BlookParts/eyes4.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087742/BlookParts/eyes5.svg",
                    changes: {
                        "#fabc2e": 1
                    }
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
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087782/BlookParts/eyes11.svg",
                    changes: {
                        "#fabc2e": 1,
                        "#ffcc05": 0
                    }
                }],
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
                }],
                hair: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087810/BlookParts/hair1.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087827/BlookParts/hair2.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087829/BlookParts/hair3.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087830/BlookParts/hair4.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087835/BlookParts/hair5.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087836/BlookParts/hair6.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087837/BlookParts/hair7.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087847/BlookParts/hair8.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087849/BlookParts/hair9.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087851/BlookParts/hair10.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087852/BlookParts/hair11.svg",
                    changes: {
                        "#fabc2e": 1
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087855/BlookParts/hair12.svg",
                    changes: {
                        "#fabc2e": 1
                    },
                    hasHighlight: !0
                }],
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
                }],
                nose: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087975/BlookParts/nose1.svg",
                    changes: {
                        "#ffcc05": 0,
                        "#cd8e2a": 2
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087979/BlookParts/nose2.svg",
                    changes: {
                        "#ffcc05": 0,
                        "#cd8e2a": 2
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087989/BlookParts/nose3.svg",
                    changes: {
                        "#ffcc05": 0,
                        "#cd8e2a": 2
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087992/BlookParts/nose4.svg",
                    changes: {
                        "#ffcc05": 0,
                        "#cd8e2a": 2
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087993/BlookParts/nose5.svg",
                    changes: {
                        "#ffcc05": 0,
                        "#cd8e2a": 2
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087993/BlookParts/nose6.svg"
                }],
                cheeks: [{
                    url: ""
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087705/BlookParts/cheeks1.svg",
                    changes: {
                        "#cd8e2a": 2
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087706/BlookParts/cheeks2.svg",
                    changes: {
                        "#cd8e2a": 2
                    }
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087696/BlookParts/cheeks3.svg"
                }, {
                    url: "https://media.blooket.com/image/upload/v1634087718/BlookParts/cheeks4.svg"
                }],
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
                }]
            };

        function ie(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null == o) return;
                var r, a, n = [],
                    s = !0,
                    i = !1;
                try {
                    for (o = o.call(t); !(s = (r = o.next()).done) && (n.push(r.value), !e || n.length !== e); s = !0);
                } catch (t) {
                    i = !0, a = t
                } finally {
                    try {
                        s || null == o.return || o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }(t, e) || function(t, e) {
                if (!t) return;
                if ("string" == typeof t) return le(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === o && t.constructor && (o = t.constructor.name);
                if ("Map" === o || "Set" === o) return Array.from(t);
                if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return le(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function le(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var o = 0, r = new Array(e); o < e; o++) r[o] = t[o];
            return r
        }
        var ce = [
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
            ue = function(t) {
                var e = t.code,
                    o = t.className,
                    r = t.blookClassName,
                    n = t.style,
                    s = t.tip,
                    i = e.split("#");
                if (! function(t) {
                        var e = t.split("#");
                        if (11 !== e.length) return !1;
                        if (!se.base[e[0]]) return !1;
                        if (!se.clothing[e[1]]) return !1;
                        if (!se.eyes[e[2]]) return !1;
                        if (!se.glasses[e[3]]) return !1;
                        var o = e[4].split("$");
                        if (2 !== o.length) return !1;
                        if (!se.hair[o[0]]) return !1;
                        if (!ce[o[1]]) return !1;
                        if (!se.hat[e[5]]) return !1;
                        if (!se.item[e[6]]) return !1;
                        if (!se.mouth[e[7]]) return !1;
                        if (!se.nose[e[8]]) return !1;
                        if (!se.cheeks[e[9]]) return !1;
                        var r = e[10].split("$");
                        return 2 === r.length && (!!se.eyebrows[r[0]] && !!ce[r[1]])
                    }(e)) return a.a.createElement("div", {
                    className: G()(ne.a.blookContainer, o),
                    style: n,
                    "data-tip": s || null
                }, a.a.createElement("img", {
                    src: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
                    alt: "Blook",
                    draggable: !1,
                    className: G()(ne.a.blook, r)
                }));
                var l = se.base[i[0]],
                    c = l.tones,
                    u = se.eyes[i[2]],
                    p = i[4].split("$"),
                    f = se.hair[p[0]],
                    h = ce[p[1]][0],
                    m = ce[p[1]][1],
                    d = se.nose[i[8]],
                    _ = se.cheeks[i[9]],
                    g = i[10].split("$"),
                    y = se.eyebrows[g[0]],
                    b = ce[g[1]][0];
                return a.a.createElement("div", {
                    className: G()(ne.a.blookContainer, o),
                    style: n,
                    "data-tip": s || null
                }, a.a.createElement("img", {
                    src: l.url,
                    alt: "Custom Blook",
                    draggable: !1,
                    className: G()(ne.a.blook, r)
                }), f.url ? a.a.createElement(re.a, {
                    src: f.url,
                    title: "Blook Hair",
                    className: ne.a.part,
                    preProcessor: function(t) {
                        var e = t;
                        return f.changes && Object.entries(f.changes).forEach((function(t) {
                            var o = ie(t, 2),
                                r = o[0],
                                a = o[1];
                            e = e.replaceAll(r, c[a])
                        })), e = e.replaceAll("#3f1c12", h), f.hasHighlight && (e = e.replaceAll("#592a1e", m)), e
                    }
                }) : null, a.a.createElement("img", {
                    src: se.mouth[i[7]].url,
                    alt: "Blook Mouth",
                    draggable: !1,
                    className: ne.a.part
                }), d.url ? a.a.createElement(re.a, {
                    src: d.url,
                    title: "Blook Nose",
                    className: ne.a.part,
                    preProcessor: function(t) {
                        var e = t;
                        return d.changes && Object.entries(d.changes).forEach((function(t) {
                            var o = ie(t, 2),
                                r = o[0],
                                a = o[1];
                            e = e.replaceAll(r, c[a])
                        })), e
                    }
                }) : null, _.url ? a.a.createElement(re.a, {
                    src: _.url,
                    title: "Blook Cheeks",
                    className: ne.a.part,
                    preProcessor: function(t) {
                        var e = t;
                        return _.changes && Object.entries(_.changes).forEach((function(t) {
                            var o = ie(t, 2),
                                r = o[0],
                                a = o[1];
                            e = e.replaceAll(r, c[a])
                        })), e
                    }
                }) : null, a.a.createElement(re.a, {
                    src: u.url,
                    title: "Blook Eyes",
                    className: ne.a.part,
                    preProcessor: function(t) {
                        var e = t;
                        return u.changes && Object.entries(u.changes).forEach((function(t) {
                            var o = ie(t, 2),
                                r = o[0],
                                a = o[1];
                            e = e.replaceAll(r, c[a])
                        })), e
                    }
                }), y.url ? a.a.createElement(re.a, {
                    src: y.url,
                    title: "Blook Eyebrows",
                    className: ne.a.part,
                    preProcessor: function(t) {
                        var e = t;
                        return e = e.replaceAll("#3f1c12", b)
                    }
                }) : null, se.clothing[i[1]].url ? a.a.createElement("img", {
                    src: se.clothing[i[1]].url,
                    alt: "Blook Clothing",
                    draggable: !1,
                    className: ne.a.part
                }) : null, se.glasses[i[3]].url ? a.a.createElement("img", {
                    src: se.glasses[i[3]].url,
                    alt: "Blook Glasses",
                    draggable: !1,
                    className: ne.a.part
                }) : null, se.hat[i[5]].url ? a.a.createElement("img", {
                    src: se.hat[i[5]].url,
                    alt: "Blook Hat",
                    draggable: !1,
                    className: ne.a.part
                }) : null, se.item[i[6]].url ? a.a.createElement("img", {
                    src: se.item[i[6]].url,
                    alt: "Blook Item",
                    draggable: !1,
                    className: ne.a.part
                }) : null)
            };
        ue.propTypes = {
            code: I.a.string,
            className: I.a.string,
            blookClassName: I.a.string,
            style: I.a.object,
            tip: I.a.string
        };
        var pe = ue,
            fe = o("mXOY"),
            he = o.n(fe);
        var me = function(t) {
            var e, o, r, n = t.name,
                s = t.className,
                i = t.blookClassName,
                l = t.style,
                c = t.tip;
            return n && ("string" == typeof n || n instanceof String) && n.includes("#") ? a.a.createElement(pe, {
                code: n,
                className: s,
                blookClassName: i,
                style: l,
                tip: c
            }) : a.a.createElement("div", {
                className: G()(he.a.blookContainer, s, (e = {}, o = he.a.spookyGhost, r = "Spooky Ghost" === n, o in e ? Object.defineProperty(e, o, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = r, e)),
                style: l,
                "data-tip": c || null
            }, "Rainbow Astronaut" === n ? a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
                src: oe["Pink Astronaut"],
                alt: "Pink Astronaut Blook",
                draggable: !1,
                className: G()(he.a.blook, i)
            }), a.a.createElement("img", {
                src: oe["Purple Astronaut"],
                alt: "Purple Astronaut Blook",
                draggable: !1,
                className: G()(he.a.blook, he.a.astro6, i)
            }), a.a.createElement("img", {
                src: oe["Blue Astronaut"],
                alt: "Blue Astronaut Blook",
                draggable: !1,
                className: G()(he.a.blook, he.a.astro5, i)
            }), a.a.createElement("img", {
                src: oe["Green Astronaut"],
                alt: "Green Astronaut Blook",
                draggable: !1,
                className: G()(he.a.blook, he.a.astro4, i)
            }), a.a.createElement("img", {
                src: oe["Yellow Astronaut"],
                alt: "Yellow Astronaut Blook",
                draggable: !1,
                className: G()(he.a.blook, he.a.astro3, i)
            }), a.a.createElement("img", {
                src: oe["Orange Astronaut"],
                alt: "Orange Astronaut Blook",
                draggable: !1,
                className: G()(he.a.blook, he.a.astro2, i)
            }), a.a.createElement("img", {
                src: oe["Red Astronaut"],
                alt: "Red Astronaut Blook",
                draggable: !1,
                className: G()(he.a.blook, he.a.astro1, i)
            })) : a.a.createElement("img", {
                src: oe[n],
                alt: "".concat(n, " Blook"),
                draggable: !1,
                className: G()(he.a.blook, i)
            }), null, "Tim the Alien" === n ? a.a.createElement("img", {
                src: oe.Cow,
                alt: "Cow Blook",
                draggable: !1,
                className: he.a.timsCow
            }) : "Phantom King" === n ? a.a.createElement("img", {
                src: "https://media.blooket.com/image/upload/v1593095358/Media/defense/phantomSword.svg",
                alt: "Phantom Sword",
                draggable: !1,
                className: he.a.phantomSword
            }) : null)
        };
        me.propTypes = {
            name: I.a.string,
            className: I.a.string,
            blookClassName: I.a.string,
            style: I.a.object,
            tip: I.a.string
        };
        var de = me,
            _e = o("GEXq"),
            ge = o.n(_e),
            ye = function(t) {
                var e = t.blook;
                return a.a.createElement("div", {
                    className: ge.a.container
                }, a.a.createElement("div", {
                    className: ge.a.loader
                }, a.a.createElement(de, {
                    name: e && !e.includes("#") ? e : "Light Blue",
                    className: ge.a.loaderBox
                }), a.a.createElement("div", {
                    className: ge.a.shadow
                })))
            };
        ye.propTypes = {
            blook: I.a.string
        };
        var be = ye;
        var ve = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaGVpZ2h0PSIyNSIKICAgd2lkdGg9IjI1IgogICBpZD0ic3ZnODM5IgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAyNSAyNS4wMDAwMDEiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTg0NSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczg0MyIgLz4KICA8ZwogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMjI1MjcxMSwwLDAsMS4yMjUyNzExLDAuMzA4NTUyNTYsLTY0MS45MTUwNikiCiAgICAgaWQ9Imc4NTEiPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMTkuOTUsNTM0LjMzMjggYyAwLC0wLjY5MzQ3IC0wLjA1NjIzLC0xLjM5MDY5IC0wLjE3NjE3OCwtMi4wNzI5MSBoIC05LjYyMjM0MSB2IDMuOTI4NDEgaCA1LjUxMDI2MSBjIC0wLjIyODY1NywxLjI2Njk4IC0wLjk2MzM1OSwyLjM4Nzc4IC0yLjAzOTE3MSwzLjA5OTk5IHYgMi41NDg5NiBoIDMuMjg3NDE0IEMgMTguODQwNDUxLDU0MC4wNjA0NyAxOS45NSw1MzcuNDM2NTQgMTkuOTUsNTM0LjMzMjggWiIKICAgICAgIGlkPSJwYXRoODMxIgogICAgICAgc3R5bGU9ImZpbGw6IzQyODVmNDtzdHJva2Utd2lkdGg6MC4wMzc0ODQ3NyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEwLjE1MTQ4MSw1NDQuMyBjIDIuNzUxMzgyLDAgNS4wNzE2ODksLTAuOTAzMzggNi43NjIyNTIsLTIuNDYyNzUgbCAtMy4yODc0MTQsLTIuNTQ4OTYgYyAtMC45MTQ2MjgsMC42MjIyNCAtMi4wOTUzOTksMC45NzQ2IC0zLjQ3MTA5LDAuOTc0NiAtMi42NjE0MTg3LDAgLTQuOTE4MDAxOSwtMS43OTU1MiAtNS43Mjc2NzMsLTQuMjA5NTQgSCAxLjAzNTE4NDEgdiAyLjYyNzY4IEMgMi43NjY5ODA2LDU0Mi4xMjU4OCA2LjI5NDI5NzYsNTQ0LjMgMTAuMTUxNDgxLDU0NC4zIFoiCiAgICAgICBpZD0icGF0aDgzMyIKICAgICAgIHN0eWxlPSJmaWxsOiMzNGE4NTM7c3Ryb2tlLXdpZHRoOjAuMDM3NDg0NzciIC8+CiAgICA8cGF0aAogICAgICAgZD0ibSA0LjQyMzgwNzUsNTM2LjA1MzM1IGMgLTAuNDI3MzI2NCwtMS4yNjY5OSAtMC40MjczMjY0LC0yLjYzODkzIDAsLTMuOTA1OTEgdiAtMi42Mjc2OSBIIDEuMDM1MTg0MSBjIC0xLjQ0NjkxMjE1LDIuODgyNTggLTEuNDQ2OTEyMTUsNi4yNzg3IDAsOS4xNjEyOCB6IgogICAgICAgaWQ9InBhdGg4MzUiCiAgICAgICBzdHlsZT0iZmlsbDojZmJiYzA0O3N0cm9rZS13aWR0aDowLjAzNzQ4NDc3IiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMTAuMTUxNDgxLDUyNy45MzQxNSBjIDEuNDU0NDA5LC0wLjAyMjUgMi44NjAwODgsMC41MjQ3OSAzLjkxMzQxLDEuNTI5MzggbCAyLjkxMjU2NywtMi45MTI1NyBjIC0xLjg0NDI1MSwtMS43MzE4IC00LjI5MjAwNywtMi42ODM5MSAtNi44MjU5NzcsLTIuNjUzOTIgLTMuODU3MTgzNCwwIC03LjM4NDUwMDQsMi4xNzQxMiAtOS4xMTYyOTY5LDUuNjIyNzEgbCAzLjM4ODYyMzQsMi42Mjc2OSBjIDAuODA1OTIyNiwtMi40MTc3NyAzLjA2NjI1NDMsLTQuMjEzMjkgNS43Mjc2NzM1LC00LjIxMzI5IHoiCiAgICAgICBpZD0icGF0aDgzNyIKICAgICAgIHN0eWxlPSJmaWxsOiNlYTQzMzU7c3Ryb2tlLXdpZHRoOjAuMDM3NDg0NzciIC8+CiAgPC9nPgo8L3N2Zz4K";

        function we(t) {
            return (we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ke() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            ke = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == we(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function xe(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }
        var Ee = function() {
            var t, e = (t = ke().mark((function t(e, o) {
                var r;
                return ke().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = new Promise((function(t, r) {
                                var a, n;
                                e || r(new Error("siteKey is required for executing recaptcha")), o || r(new Error("action is required for executing recaptcha")), (a = 5e3, n = Date.now(), new Promise((function t(e, o) {
                                    window.grecaptcha && window.grecaptcha.enterprise ? e(!0) : a && Date.now() - n >= a ? o(new Error("timeout")) : setTimeout(t.bind(this, e, o), 30)
                                }))).then((function() {
                                    window.grecaptcha.enterprise.ready((function() {
                                        window.grecaptcha.enterprise.execute(e, {
                                            action: o
                                        }).then((function(e) {
                                            t(e)
                                        }))
                                    }))
                                }))
                            })), t.abrupt("return", r);
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })), function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        xe(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        xe(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            });
            return function(t, o) {
                return e.apply(this, arguments)
            }
        }();

        function Ce(t) {
            return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function je() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            je = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == Ce(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function Oe(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), o.push.apply(o, r)
            }
            return o
        }

        function Le(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Oe(Object(o), !0).forEach((function(e) {
                    Ae(t, e, o[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Oe(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }))
            }
            return t
        }

        function Ae(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t
        }

        function ze(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function Pe(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        ze(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        ze(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }

        function Se(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Ne(t, e) {
            return (Ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Be(t) {
            var e = function() {
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
                var o, r = Me(t);
                if (e) {
                    var a = Me(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return Te(this, o)
            }
        }

        function Te(t, e) {
            if (e && ("object" === Ce(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return Ie(t)
        }

        function Ie(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function Me(t) {
            return (Me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var Re = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && Ne(t, e)
            }(i, t);
            var e, o, r, n, s = Be(i);

            function i(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, i), (e = s.call(this, t)).state = {
                    name: "",
                    email: "",
                    password: "",
                    password2: "",
                    check: !1,
                    nameError: "",
                    emailError: "",
                    passwordError: "",
                    password2Error: "",
                    checkError: "",
                    loading: !1,
                    recaptchaToken: null,
                    phase: "choose",
                    googleClientId: "",
                    recaptchaSiteKey: "",
                    isDev: !1,
                    wwwBase: ""
                }, e.here = !0, e.googleAccessToken = "", e.googleEmail = "", e.onSignUp = e.onSignUp.bind(Ie(e)), e.onNameTextUpdate = e.onNameTextUpdate.bind(Ie(e)), e.onEmailTextUpdate = e.onEmailTextUpdate.bind(Ie(e)), e.onPasswordTextUpdate = e.onPasswordTextUpdate.bind(Ie(e)), e.onPassword2TextUpdate = e.onPassword2TextUpdate.bind(Ie(e)), e.googleSuccess = e.googleSuccess.bind(Ie(e)), e.googleFailure = e.googleFailure.bind(Ie(e)), e
            }
            return e = i, (o = [{
                key: "componentDidMount",
                value: function() {
                    var t = this;
                    K.get("/api/users/check-auth").then((function() {
                        K.get("/api/config").then(function() {
                            var e = Pe(je().mark((function e(o) {
                                var r;
                                return je().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            o.data && o.data.googleClientId ? (r = {
                                                googleClientId: o.data.googleClientId,
                                                recaptchaSiteKey: o.data.recaptchaSiteKey,
                                                isDev: o.data.isDev,
                                                wwwBase: o.data.wwwBase
                                            }, r = Le(Le({}, t.state), r), t.setState(r)) : Object(p.b)(new Error("could not get googleClientId from backend, sign up with google disabled"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.here = !1
                }
            }, {
                key: "onSignUp",
                value: (n = Pe(je().mark((function t(e) {
                    var o, r, a, n, s, i, l = this;
                    return je().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e.preventDefault(), !this.state.loading && "choose" !== this.state.phase) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return this.setState({
                                    loading: !0
                                }), o = "", r = "", a = "", n = "", s = "", c = this.state.name, o = c ? c.indexOf(" ") >= 0 ? "Usernames can't have spaces." : c.indexOf("\t") >= 0 ? "Usernames can't have tabs." : c.indexOf('"') >= 0 ? "Usernames can't have quotations." : function(t) {
                                    return /[^-\]_.~!*'();:@&+$,/%#[A-z0-9]/.test(t)
                                }(c) ? "Usernames can't have extra special characters." : Object(H.a)().test(c) ? "Sorry, no emojis allowed." : c.length > 15 ? "Sorry, that name is too long." : null : "Where's The Name?", "email" === this.state.phase && (r = tt(this.state.email), this.state.password ? this.state.password.length < 8 ? a = "Password must have at least 8 characters." : this.state.password.length > 72 ? a = "Password is too long (trouble encrypting)." : /(?=.*[A-Z])/.test(this.state.password) ? /(?=.*[a-z])/.test(this.state.password) ? /(?=.*[0-9])/.test(this.state.password) || (a = "Password must have at least 1 number digit.") : a = "Password must have at least 1 lowercase letter." : a = "Password must have at least 1 uppercase letter." : a = "Where's The Password?", this.state.password !== this.state.password2 && (n = "The passwords don't match."), this.state.password2 || (n = "Where's The Confirming Password?")), this.state.check || (s = "You must agree to get an account."), i = null, t.prev = 13, t.next = 16, Ee(this.state.recaptchaSiteKey, "signup");
                            case 16:
                                (i = t.sent) || (o = "Your sessions failed the reCAPTCHA. Please try again or contact us."), t.next = 24;
                                break;
                            case 20:
                                t.prev = 20, t.t0 = t.catch(13), Object(p.b)(t.t0), o = "Your sessions failed the reCAPTCHA with an error. Please try again or contact us.";
                            case 24:
                                this.setState({
                                    nameError: o,
                                    emailError: r,
                                    passwordError: a,
                                    password2Error: n,
                                    checkError: s,
                                    recaptchaToken: i
                                }, (function() {
                                    if (l.state.nameError || l.state.emailError || l.state.passwordError || l.state.password2Error || l.state.checkError) l.setState({
                                        loading: !1
                                    });
                                    else if ("google" === l.state.phase) {
                                        var t = {};
                                        if (!l.state.recaptchaToken) throw new Error("cannot check recaptcha without token");
                                        t["X-Recaptcha-Token"] = l.state.recaptchaToken, K.post("/api/users/signup/google", {
                                            name: l.state.name,
                                            email: l.googleEmail,
                                            access_token: l.googleAccessToken
                                        }, {
                                            headers: t
                                        }).then(function() {
                                            var t = Pe(je().mark((function t(e) {
                                                return je().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (l.here) {
                                                                t.next = 2;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 2:
                                                            if (!1 !== e.data.success) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            "username" === e.data.errType ? l.setState({
                                                                loading: !1,
                                                                nameError: e.data.msg
                                                            }) : l.setState({
                                                                loading: !1,
                                                                emailError: e.data.msg
                                                            }), t.next = 9;
                                                            break;
                                                        case 6:
                                                            return t.next = 8, l.props.user.getLoggedIn();
                                                        case 8:
                                                            l.props.done(e.data);
                                                        case 9:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()).catch(function() {
                                            var t = Pe(je().mark((function t(e) {
                                                var o, r, a;
                                                return je().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (!(e && e.response && 400 === e.response.status && e.response.data && e.response.data.msg)) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            l.setState({
                                                                loading: !1,
                                                                emailError: e.response.data.msg
                                                            }), t.next = 15;
                                                            break;
                                                        case 4:
                                                            if (!e || !e.response || 403 !== e.response.status) {
                                                                t.next = 9;
                                                                break
                                                            }
                                                            l.setState({
                                                                loading: !1,
                                                                emailError: "Your request was denied.  This is usually because your browser failed the reCAPTCHA check.  Please contact support for more information."
                                                            }), t.next = 15;
                                                            break;
                                                        case 9:
                                                            return t.next = 11, Object(p.b)(e);
                                                        case 11:
                                                            o = t.sent, r = o ? "Error ID ".concat(o) : "", a = "Something went wrong. ".concat(r, ". Please contact support for more information."), l.setState({
                                                                loading: !1,
                                                                emailError: a
                                                            });
                                                        case 15:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }())
                                    } else {
                                        var e = {};
                                        if (!l.state.recaptchaToken) throw new Error("cannot check recaptcha without token");
                                        e["X-Recaptcha-Token"] = l.state.recaptchaToken, K.post("/api/users/signup", {
                                            name: l.state.name,
                                            email: l.state.email,
                                            password: l.state.password
                                        }, {
                                            headers: e
                                        }).then(function() {
                                            var t = Pe(je().mark((function t(e) {
                                                return je().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (l.here) {
                                                                t.next = 2;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 2:
                                                            if (!1 !== e.data.success) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            "email" === e.data.errType ? l.setState({
                                                                loading: !1,
                                                                emailError: e.data.msg
                                                            }) : "username" === e.data.errType ? l.setState({
                                                                loading: !1,
                                                                nameError: e.data.msg
                                                            }) : l.setState({
                                                                loading: !1,
                                                                passwordError: e.data.msg
                                                            }), t.next = 9;
                                                            break;
                                                        case 6:
                                                            return t.next = 8, l.props.user.getLoggedIn();
                                                        case 8:
                                                            l.props.done(e.data);
                                                        case 9:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()).catch(function() {
                                            var t = Pe(je().mark((function t(e) {
                                                var o, r, a;
                                                return je().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (!(e && e.response && 400 === e.response.status && e.response.data && e.response.data.msg)) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            l.setState({
                                                                loading: !1,
                                                                emailError: e.response.data.msg
                                                            }), t.next = 15;
                                                            break;
                                                        case 4:
                                                            if (!e || !e.response || 403 !== e.response.status) {
                                                                t.next = 9;
                                                                break
                                                            }
                                                            l.setState({
                                                                loading: !1,
                                                                emailError: "Your request was denied.  This is usually because your browser failed the reCAPTCHA check.  Please contact support for more information."
                                                            }), t.next = 15;
                                                            break;
                                                        case 9:
                                                            return t.next = 11, Object(p.b)(e);
                                                        case 11:
                                                            o = t.sent, r = o ? "Error ID ".concat(o) : "", a = "Something went wrong. ".concat(r, ". Please contact support for more information."), l.setState({
                                                                loading: !1,
                                                                emailError: a
                                                            });
                                                        case 15:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }())
                                    }
                                }));
                            case 25:
                            case "end":
                                return t.stop()
                        }
                        var c
                    }), t, this, [
                        [13, 20]
                    ])
                }))), function(t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "onNameTextUpdate",
                value: function(t) {
                    this.setState({
                        name: t.target.value.trim().slice(0, 15),
                        nameError: ""
                    })
                }
            }, {
                key: "onEmailTextUpdate",
                value: function(t) {
                    this.setState({
                        email: t.target.value.trim().slice(0, 50),
                        emailError: ""
                    })
                }
            }, {
                key: "onPasswordTextUpdate",
                value: function(t) {
                    this.setState({
                        password: t.target.value
                    }), (t.target.value.length >= 6 || "Where's The Password?" === this.state.passwordError) && this.setState({
                        passwordError: ""
                    })
                }
            }, {
                key: "onPassword2TextUpdate",
                value: function(t) {
                    this.setState({
                        password2: t.target.value
                    }), "The passwords don't match." === this.state.password2Error ? this.state.password === t.target.value && this.setState({
                        password2Error: ""
                    }) : this.setState({
                        password2Error: ""
                    })
                }
            }, {
                key: "googleSuccess",
                value: function(t) {
                    var e = this;
                    K.get("/api/users/byemail", {
                        params: {
                            email: t.profileObj.email
                        }
                    }).then((function(o) {
                        o.data ? e.setState({
                            emailError: "There's already a Blooket account for this Google email."
                        }) : (e.googleAccessToken = t.accessToken, e.googleEmail = t.profileObj.email, e.setState({
                            phase: "google",
                            emailError: ""
                        }))
                    })).catch((function(t) {
                        Object(p.b)(t), e.here && e.setState({
                            emailError: "An unexpected problem occurred, please refresh."
                        })
                    }))
                }
            }, {
                key: "googleFailure",
                value: function(t) {
                    t && "Cookies are not enabled in current environment." === t.details || this.setState({
                        emailError: "Google Login is not working here. Please try a different browser or device."
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t, e, o, r, n, s, i, l, c, u, p = this;
                    return a.a.createElement("form", {
                        onSubmit: this.onSignUp,
                        className: Tt.a.container
                    }, a.a.createElement("div", {
                        className: Tt.a.containerHeader
                    }, "Sign Up"), "choose" === this.state.phase ? a.a.createElement(a.a.Fragment, null, this.state.googleClientId && a.a.createElement(xt.GoogleLogin, {
                        clientId: this.state.googleClientId,
                        onSuccess: this.googleSuccess,
                        onFailure: this.googleFailure,
                        render: function(t) {
                            return a.a.createElement("div", {
                                className: D.a.googleButton,
                                disabled: t.disabled,
                                role: "button",
                                tabIndex: 0,
                                onClick: t.onClick,
                                style: {
                                    width: 240,
                                    height: 30,
                                    margin: "15px auto 12px auto"
                                }
                            }, a.a.createElement("img", {
                                src: ve,
                                alt: "Google Logo",
                                className: D.a.googleLogo,
                                draggable: !1
                            }), "Sign Up with Google")
                        }
                    }), a.a.createElement("div", {
                        className: D.a.googleButton,
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return p.setState({
                                phase: "email",
                                emailError: ""
                            })
                        },
                        style: {
                            width: 240,
                            height: 30,
                            margin: "12px auto 35px auto"
                        }
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.buttonIcon, "fas fa-envelope")
                    }), "Sign Up with Email")) : "google" === this.state.phase ? a.a.createElement("div", {
                        className: G()(Tt.a.inputContainer, (t = {}, Ae(t, Tt.a.inputFilled, this.state.name), Ae(t, Tt.a.inputError, this.state.nameError), t))
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.icon, "fas fa-user", (e = {}, Ae(e, Tt.a.iconFilled, this.state.name), Ae(e, Tt.a.iconError, this.state.nameError), e))
                    }), a.a.createElement("input", {
                        className: G()(Tt.a.input, Ae({}, Tt.a.inputError, this.state.nameError)),
                        placeholder: "Username",
                        value: this.state.name,
                        onChange: this.onNameTextUpdate,
                        type: "text",
                        autoFocus: M.isMobile ? "" : "autofocus",
                        maxLength: "15"
                    })) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                        className: G()(Tt.a.inputContainer, (o = {}, Ae(o, Tt.a.inputFilled, this.state.name), Ae(o, Tt.a.inputError, this.state.nameError), o))
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.icon, "fas fa-user", (r = {}, Ae(r, Tt.a.iconFilled, this.state.name), Ae(r, Tt.a.iconError, this.state.nameError), r))
                    }), a.a.createElement("input", {
                        className: G()(Tt.a.input, Ae({}, Tt.a.inputError, this.state.nameError)),
                        placeholder: "Username",
                        value: this.state.name,
                        onChange: this.onNameTextUpdate,
                        type: "text",
                        autoFocus: M.isMobile ? "" : "autofocus",
                        maxLength: "15"
                    })), a.a.createElement("div", {
                        className: G()(Tt.a.inputContainer, (n = {}, Ae(n, Tt.a.inputFilled, this.state.email), Ae(n, Tt.a.inputError, this.state.emailError), n))
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.icon, "fas fa-envelope", (s = {}, Ae(s, Tt.a.iconFilled, this.state.email), Ae(s, Tt.a.iconError, this.state.emailError), s))
                    }), a.a.createElement("input", {
                        className: G()(Tt.a.input, Ae({}, Tt.a.inputError, this.state.emailError)),
                        placeholder: "Email",
                        value: this.state.email,
                        onChange: this.onEmailTextUpdate,
                        type: "text"
                    })), a.a.createElement("div", {
                        className: G()(Tt.a.inputContainer, (i = {}, Ae(i, Tt.a.inputFilled, this.state.password), Ae(i, Tt.a.inputError, this.state.passwordError), i))
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.icon, "fas fa-lock", (l = {}, Ae(l, Tt.a.iconFilled, this.state.password), Ae(l, Tt.a.iconError, this.state.passwordError), l)),
                        style: {
                            fontSize: 23
                        }
                    }), a.a.createElement("input", {
                        className: G()(Tt.a.input, Ae({}, Tt.a.inputError, this.state.passwordError)),
                        placeholder: "Password",
                        value: this.state.password,
                        onChange: this.onPasswordTextUpdate,
                        type: "password"
                    })), a.a.createElement("div", {
                        className: G()(Tt.a.inputContainer, (c = {}, Ae(c, Tt.a.inputFilled, this.state.password2), Ae(c, Tt.a.inputError, this.state.password2Error), c))
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.icon, "fas fa-lock", (u = {}, Ae(u, Tt.a.iconFilled, this.state.password2), Ae(u, Tt.a.iconError, this.state.password2Error), u)),
                        style: {
                            fontSize: 23
                        }
                    }), a.a.createElement("input", {
                        className: G()(Tt.a.input, Ae({}, Tt.a.inputError, this.state.password2Error)),
                        placeholder: "Confirm Password",
                        value: this.state.password2,
                        onChange: this.onPassword2TextUpdate,
                        type: "password"
                    }))), "choose" !== this.state.phase ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                        className: Tt.a.agreeHolder
                    }, a.a.createElement("div", {
                        className: G()(Tt.a.checkBox, this.state.checkError ? Tt.a.checkError : this.state.check ? Tt.a.checkYes : Tt.a.checkNo),
                        role: "button",
                        tabIndex: 0,
                        onClick: function() {
                            return p.setState({
                                check: !p.state.check,
                                checkError: ""
                            })
                        }
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.checkIcon, "fas fa-check")
                    })), a.a.createElement("div", {
                        className: Tt.a.agreeText
                    }, "I am at least 13 years old (or at least 16 outside of the U.S.) and I agree to the ", a.a.createElement("a", {
                        href: "".concat(this.state.wwwBase, "/privacy"),
                        className: Tt.a.link,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Privacy Policy"), " & ", a.a.createElement("a", {
                        href: "".concat(this.state.wwwBase, "/terms"),
                        className: Tt.a.link,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Terms of Service."))), this.state.loading ? a.a.createElement(be, null) : a.a.createElement("input", {
                        type: "submit",
                        value: "Sign Up",
                        className: G()(Tt.a.button, Ae({}, Tt.a.buttonFilled, this.state.name && this.state.email && this.state.password && this.state.password2 && this.state.check), Ae({}, Tt.a.buttonError, this.state.nameError || this.state.emailError || this.state.passwordError || this.state.password2Error || this.state.checkError)),
                        tabIndex: 0
                    })) : null, this.state.nameError || this.state.emailError || this.state.passwordError || this.state.password2Error || this.state.checkError ? a.a.createElement("div", {
                        className: Tt.a.errorContainer
                    }, a.a.createElement("i", {
                        className: G()(Tt.a.errorIcon, "fas fa-times-circle")
                    }), a.a.createElement("div", {
                        className: Tt.a.errorText
                    }, this.state.nameError || this.state.emailError || this.state.passwordError || this.state.password2Error || this.state.checkError)) : null)
                }
            }]) && Se(e.prototype, o), r && Se(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), i
        }(a.a.Component);
        Re.propTypes = {
            done: I.a.func.isRequired,
            user: I.a.object
        };
        var De = St(Re);

        function Fe(t) {
            return (Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ge() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            Ge = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == Fe(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function Ue(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function Ye(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        Ue(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        Ue(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }

        function He(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function We(t, e) {
            return (We = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Qe(t) {
            var e = function() {
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
                var o, r = Ze(t);
                if (e) {
                    var a = Ze(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return Ke(this, o)
            }
        }

        function Ke(t, e) {
            if (e && ("object" === Fe(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return Xe(t)
        }

        function Xe(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function Ze(t) {
            return (Ze = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var Je = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && We(t, e)
            }(l, t);
            var e, o, r, n, s, i = Qe(l);

            function l(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l), (e = i.call(this, t)).state = {}, e.done = e.done.bind(Xe(e)), e
            }
            return e = l, (o = [{
                key: "componentDidMount",
                value: (s = Ye(Ge().mark((function t() {
                    return Ge().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return et(), t.next = 3, this.props.user.getData();
                            case 3:
                                if (!t.sent) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 7, ot();
                            case 7:
                                window.location.href = t.sent;
                            case 8:
                                rt();
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function() {
                    return s.apply(this, arguments)
                })
            }, {
                key: "done",
                value: (n = Ye(Ge().mark((function t() {
                    var e;
                    return Ge().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!at()) {
                                    t.next = 3;
                                    break
                                }
                                return window.close(), t.abrupt("return");
                            case 3:
                                return t.next = 5, ot();
                            case 5:
                                e = t.sent, window.location.href = e;
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "render",
                value: function() {
                    return a.a.createElement("div", {
                        className: M.isMobile ? D.a.mBody : D.a.body,
                        style: {
                            backgroundColor: "#0bc2cf"
                        }
                    }, a.a.createElement(kt, {
                        title: "Sign Up | Blooket",
                        desc: "Sign Up for a Blooket account to create sets, host games, discover new sets, unlock Blooks, view stats, update your account, and manage your Blooks."
                    }), a.a.createElement(ht, {
                        rightLink: "/login",
                        rightText: "Login"
                    }), a.a.createElement("div", {
                        className: D.a.regularBody
                    }, a.a.createElement(De, {
                        done: this.done
                    })))
                }
            }]) && He(e.prototype, o), r && He(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), l
        }(a.a.Component);
        Je.propTypes = {
            user: I.a.object
        };
        var qe = St(Object(c.g)(Object(i.b)((function(t) {
                return {}
            }), (function(t) {
                return Object(f.b)({}, t)
            }))(Je))),
            Ve = o("wd/R"),
            $e = o.n(Ve),
            to = o("kYN1"),
            eo = o.n(to);

        function oo(t) {
            return (oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ro() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            ro = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == oo(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function ao(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), o.push.apply(o, r)
            }
            return o
        }

        function no(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ao(Object(o), !0).forEach((function(e) {
                    so(t, e, o[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : ao(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }))
            }
            return t
        }

        function so(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t
        }

        function io(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function lo(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        io(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        io(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }

        function co(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function uo(t, e) {
            return (uo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function po(t) {
            var e = function() {
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
                var o, r = mo(t);
                if (e) {
                    var a = mo(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return fo(this, o)
            }
        }

        function fo(t, e) {
            if (e && ("object" === oo(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return ho(t)
        }

        function ho(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function mo(t) {
            return (mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var _o = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && uo(t, e)
            }(i, t);
            var e, o, r, n, s = po(i);

            function i(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, i), (e = s.call(this, t)).state = {
                    name: "",
                    password: "",
                    nameError: "",
                    passwordError: "",
                    googleError: "",
                    loading: !1,
                    googleClientId: "",
                    isDev: !1,
                    recaptchaSiteKey: null,
                    recaptchaRequired: null,
                    recaptchaToken: null
                }, e.here = !0, e.onLogin = e.onLogin.bind(ho(e)), e.onNameTextUpdate = e.onNameTextUpdate.bind(ho(e)), e.onPasswordTextUpdate = e.onPasswordTextUpdate.bind(ho(e)), e.googleSuccess = e.googleSuccess.bind(ho(e)), e.googleFailure = e.googleFailure.bind(ho(e)), e
            }
            return e = i, (o = [{
                key: "componentDidMount",
                value: function() {
                    var t = this;
                    K.get("/api/users/check-auth").then((function() {
                        K.get("/api/config").then(function() {
                            var e = lo(ro().mark((function e(o) {
                                var r;
                                return ro().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            o.data && o.data.googleClientId ? (r = {
                                                googleClientId: o.data.googleClientId,
                                                recaptchaRequired: o.data.recaptchaRequired,
                                                recaptchaSiteKey: o.data.recaptchaSiteKey,
                                                isDev: o.data.isDev
                                            }, r = no(no({}, t.state), r), t.setState(r)) : Object(p.b)(new Error("could not get googleClientId from backend, login with google will be disabled"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.here = !1
                }
            }, {
                key: "onLogin",
                value: (n = lo(ro().mark((function t(e) {
                    var o, r, a, n = this;
                    return ro().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e.preventDefault(), this.setState({
                                        loading: !0
                                    }), o = "", r = "", this.state.name || (o = "Where's The name?"), this.state.password || (r = "Where's The Password?"), a = null, !this.state.recaptchaRequired) {
                                    t.next = 19;
                                    break
                                }
                                return t.prev = 8, t.next = 11, Ee(this.state.recaptchaSiteKey, "login");
                            case 11:
                                (a = t.sent) || (o = "Your sessions failed the reCAPTCHA. Please try again or contact us."), t.next = 19;
                                break;
                            case 15:
                                t.prev = 15, t.t0 = t.catch(8), o = "Your sessions failed the reCAPTCHA with an error. Please try again or contact us.", Object(p.b)(t.t0);
                            case 19:
                                this.setState({
                                    nameError: o,
                                    passwordError: r,
                                    recaptchaToken: a
                                }, (function() {
                                    if (n.state.nameError || n.state.passwordError) n.setState({
                                        loading: !1
                                    });
                                    else {
                                        var t = {
                                                name: n.state.name,
                                                password: n.state.password
                                            },
                                            e = {};
                                        if (n.state.recaptchaRequired) {
                                            if (!n.state.recaptchaToken) throw new Error("cannot check recaptcha without token");
                                            e["X-Recaptcha-Token"] = n.state.recaptchaToken
                                        }
                                        K.post("/api/users/login", t, {
                                            headers: e
                                        }).then(function() {
                                            var t = lo(ro().mark((function t(e) {
                                                var o;
                                                return ro().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (n.here) {
                                                                t.next = 2;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 2:
                                                            if (!1 !== e.data.success) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            "name" === e.data.errType ? (o = e.data.msg, e.data.suspensionEnd && (o = "".concat(o, " Suspension ends: ").concat($e()(e.data.suspensionEnd).format("MM-DD-YYYY hh:mm:ss"), " UTC")), e.data.suspendedReason && e.data.suspendedReason.includes("District") && (o = "".concat(o, " Reason: ").concat(e.data.suspendedReason, " ")), n.setState({
                                                                loading: !1,
                                                                nameError: o
                                                            })) : n.setState({
                                                                loading: !1,
                                                                passwordError: e.data.msg
                                                            }), t.next = 9;
                                                            break;
                                                        case 6:
                                                            return t.next = 8, n.props.user.getLoggedIn();
                                                        case 8:
                                                            n.props.done(e.data);
                                                        case 9:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()).catch((function(t) {
                                            Object(p.b)(t), n.here && n.setState({
                                                loading: !1,
                                                passwordError: "Something went wrong."
                                            })
                                        }))
                                    }
                                }));
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [8, 15]
                    ])
                }))), function(t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "onNameTextUpdate",
                value: function(t) {
                    this.setState({
                        name: t.target.value.trim(),
                        nameError: "",
                        googleError: ""
                    })
                }
            }, {
                key: "onPasswordTextUpdate",
                value: function(t) {
                    return this.setState({
                        password: t.target.value,
                        passwordError: "",
                        googleError: ""
                    })
                }
            }, {
                key: "googleSuccess",
                value: function(t) {
                    var e = this;
                    this.setState({
                        loading: !0
                    });
                    var o = {};
                    if (this.state.recaptchaEnabled) {
                        if (!this.state.recaptchaToken) throw new Error("cannot check recaptcha without token");
                        o["X-Recaptcha-Token"] = this.state.recaptchaToken
                    }
                    K.post("/api/users/login/google", {
                        access_token: t.accessToken
                    }, {
                        headers: o
                    }).then(function() {
                        var t = lo(ro().mark((function t(o) {
                            var r;
                            return ro().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.here) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        if (!o.data.success) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 5, e.props.user.getLoggedIn();
                                    case 5:
                                        e.props.done(o.data), t.next = 11;
                                        break;
                                    case 8:
                                        r = "", o.data.msg ? (r = o.data.msg, o.data.suspensionEnd && (r = "".concat(r, " Suspension ends: ").concat($e()(o.data.suspensionEnd).format("MM-DD-YYYY hh:mm:ss"), " UTC")), o.data.suspendedReason && o.data.suspendedReason.includes("District") && (r = "".concat(r, " Reason: ").concat(o.data.suspendedReason, " "))) : r = "There isn't a Blooket account for that Google email.", e.setState({
                                            googleError: r,
                                            loading: !1
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()).catch((function(t) {
                        Object(p.b)(t), e.setState({
                            googleError: t.response ? t.response.data : "There isn't a Blooket account for that Google email.",
                            loading: !1
                        })
                    }))
                }
            }, {
                key: "googleFailure",
                value: function(t) {
                    t && "Cookies are not enabled in current environment." === t.details ? this.setState({
                        googleError: "Cookies are not enabled in current environment."
                    }) : this.setState({
                        googleError: "Google Login does not work in this environment. ".concat(t.details)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t, e, o, r, n, s = this;
                    return a.a.createElement("form", {
                        onSubmit: this.onLogin,
                        className: eo.a.container
                    }, a.a.createElement("div", {
                        className: eo.a.containerHeader
                    }, "Login"), this.state.googleClientId ? a.a.createElement(a.a.Fragment, null, a.a.createElement(xt.GoogleLogin, {
                        clientId: this.state.googleClientId,
                        onSuccess: this.googleSuccess,
                        onFailure: this.googleFailure,
                        render: function(t) {
                            return a.a.createElement("div", {
                                className: D.a.googleButton,
                                disabled: t.disabled,
                                role: "button",
                                tabIndex: 0,
                                onClick: t.onClick
                            }, a.a.createElement("img", {
                                src: ve,
                                alt: "Google Logo",
                                className: D.a.googleLogo,
                                draggable: !1
                            }), "Login with Google")
                        }
                    }), a.a.createElement("div", {
                        className: eo.a.orRow
                    }, a.a.createElement("div", {
                        className: eo.a.orBar,
                        style: {
                            marginRight: 7
                        }
                    }), "or", a.a.createElement("div", {
                        className: eo.a.orBar,
                        style: {
                            marginLeft: 7
                        }
                    }))) : a.a.createElement(be, null), a.a.createElement("div", {
                        className: G()(eo.a.inputContainer, (t = {}, so(t, eo.a.inputFilled, this.state.name), so(t, eo.a.inputError, this.state.nameError), t))
                    }, a.a.createElement("i", {
                        className: G()(eo.a.icon, "fas fa-user", (e = {}, so(e, eo.a.iconFilled, this.state.name), so(e, eo.a.iconError, this.state.nameError), e))
                    }), a.a.createElement("input", {
                        className: G()(eo.a.input, so({}, eo.a.inputError, this.state.nameError)),
                        placeholder: "Username/Email",
                        onChange: this.onNameTextUpdate,
                        value: this.state.name,
                        type: "text",
                        autoComplete: "username",
                        autoFocus: M.isMobile ? "" : "autofocus"
                    })), a.a.createElement("div", {
                        className: G()(eo.a.inputContainer, (o = {}, so(o, eo.a.inputFilled, this.state.password), so(o, eo.a.inputError, this.state.passwordError), o))
                    }, a.a.createElement("i", {
                        className: G()(eo.a.icon, "fas fa-lock", (r = {}, so(r, eo.a.iconFilled, this.state.password), so(r, eo.a.iconError, this.state.passwordError), r)),
                        style: {
                            fontSize: 23
                        }
                    }), a.a.createElement("input", {
                        className: G()(eo.a.input, so({}, eo.a.inputError, this.state.passwordError)),
                        placeholder: "Password",
                        onChange: this.onPasswordTextUpdate,
                        value: this.state.password,
                        type: "password",
                        autoComplete: "current-password"
                    })), this.state.loading ? a.a.createElement(be, null) : a.a.createElement("input", {
                        type: "submit",
                        value: "Let's Go!",
                        className: G()(eo.a.button, (n = {}, so(n, eo.a.buttonFilled, this.state.password && this.state.name), so(n, eo.a.buttonError, this.state.passwordError || this.state.nameError || this.state.googleError), n)),
                        tabIndex: 0
                    }), this.state.nameError || this.state.passwordError || this.state.googleError ? a.a.createElement("div", {
                        className: eo.a.errorContainer
                    }, a.a.createElement("i", {
                        className: G()(eo.a.errorIcon, "fas fa-times-circle")
                    }), a.a.createElement("div", {
                        className: eo.a.errorText
                    }, this.state.nameError || this.state.passwordError || this.state.googleError)) : null, void 0 !== this.props.onLink ? a.a.createElement("div", {
                        className: eo.a.forgotLink,
                        role: "button",
                        tabIndex: 0,
                        onClick: function(t) {
                            return s.props.onLink(t, "/forgot")
                        }
                    }, "Forgot Password?") : a.a.createElement(l.b, {
                        className: eo.a.forgotLink,
                        to: "/forgot"
                    }, "Forgot Password?"))
                }
            }]) && co(e.prototype, o), r && co(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), i
        }(a.a.Component);
        _o.propTypes = {
            done: I.a.func.isRequired,
            onLink: I.a.func,
            user: I.a.object
        };
        var go = St(_o);

        function yo(t) {
            return (yo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function bo() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            bo = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == yo(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function vo(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function wo(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        vo(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        vo(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }

        function ko(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function xo(t, e) {
            return (xo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Eo(t) {
            var e = function() {
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
                var o, r = Oo(t);
                if (e) {
                    var a = Oo(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return Co(this, o)
            }
        }

        function Co(t, e) {
            if (e && ("object" === yo(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return jo(t)
        }

        function jo(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function Oo(t) {
            return (Oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var Lo = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && xo(t, e)
            }(l, t);
            var e, o, r, n, s, i = Eo(l);

            function l(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l), (e = i.call(this, t)).state = {}, e.done = e.done.bind(jo(e)), e
            }
            return e = l, (o = [{
                key: "componentDidMount",
                value: (s = wo(bo().mark((function t() {
                    return bo().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return et(), t.next = 3, this.props.user.getData();
                            case 3:
                                if (!t.sent) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 7, ot();
                            case 7:
                                window.location.href = t.sent;
                            case 8:
                                rt();
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function() {
                    return s.apply(this, arguments)
                })
            }, {
                key: "done",
                value: (n = wo(bo().mark((function t(e) {
                    var o;
                    return bo().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!at()) {
                                    t.next = 3;
                                    break
                                }
                                return window.close(), t.abrupt("return");
                            case 3:
                                return t.next = 5, ot();
                            case 5:
                                o = t.sent, window.location.href = o;
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), function(t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "render",
                value: function() {
                    return a.a.createElement("div", {
                        className: M.isMobile ? D.a.mBody : D.a.body,
                        style: {
                            backgroundColor: "#0bc2cf"
                        }
                    }, a.a.createElement(kt, {
                        title: "Login | Blooket",
                        desc: "Login to your Blooket account to create sets, host games, discover new sets, unlock Blooks, view stats, update your account, and manage your Blooks."
                    }), a.a.createElement(ht, {
                        rightLink: "/signup",
                        rightText: "Sign Up"
                    }), a.a.createElement("div", {
                        className: D.a.regularBody
                    }, a.a.createElement(go, {
                        done: this.done
                    })))
                }
            }]) && ko(e.prototype, o), r && ko(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), l
        }(a.a.Component);
        Lo.propTypes = {
            user: I.a.object
        };
        var Ao = St(Object(c.g)(Object(i.b)((function(t) {
            return {}
        }), (function(t) {
            return Object(f.b)({}, t)
        }))(Lo)));

        function zo(t) {
            return (zo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Po(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function So(t, e) {
            return (So = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function No(t) {
            var e = function() {
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
                var o, r = To(t);
                if (e) {
                    var a = To(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return Bo(this, o)
            }
        }

        function Bo(t, e) {
            if (e && ("object" === zo(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }

        function To(t) {
            return (To = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Io() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            Io = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == zo(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function Mo(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function Ro(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        Mo(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        Mo(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }
        var Do = function() {
                var t = Ro(Io().mark((function t(e) {
                    return Io().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, K.post("/api/users/logout", {});
                            case 3:
                                t.next = 8;
                                break;
                            case 5:
                                t.prev = 5, t.t0 = t.catch(0), Object(p.b)(t.t0);
                            case 8:
                                if (!e) {
                                    t.next = 11;
                                    break
                                }
                                return t.next = 11, e.getLoggedIn();
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 5]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            Fo = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && So(t, e)
                }(i, t);
                var e, o, r, n, s = No(i);

                function i(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (e = s.call(this, t)).state = {
                        loggedOut: !1
                    }, e
                }
                return e = i, (o = [{
                    key: "componentDidMount",
                    value: (n = Ro(Io().mark((function t() {
                        return Io().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Do(this.props.user);
                                case 2:
                                    this.setState({
                                        loggedOut: !0
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return this.state.loggedOut ? a.a.createElement(c.a, {
                            to: "/login"
                        }) : null
                    }
                }]) && Po(e.prototype, o), r && Po(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), i
            }(a.a.Component);
        Fo.propTypes = {
            user: I.a.object
        };
        var Go = St(Object(c.g)(Fo)),
            Uo = o("fv3p"),
            Yo = o.n(Uo);

        function Ho(t) {
            return (Ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Wo() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            Wo = function() {
                return t
            };
            var t = {},
                e = Object.prototype,
                o = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                n = r.asyncIterator || "@@asyncIterator",
                s = r.toStringTag || "@@toStringTag";

            function i(t, e, o) {
                return Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                i({}, "")
            } catch (t) {
                i = function(t, e, o) {
                    return t[e] = o
                }
            }

            function l(t, e, o, r) {
                var a = e && e.prototype instanceof p ? e : p,
                    n = Object.create(a.prototype),
                    s = new x(r || []);
                return n._invoke = function(t, e, o) {
                    var r = "suspendedStart";
                    return function(a, n) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === a) throw n;
                            return C()
                        }
                        for (o.method = a, o.arg = n;;) {
                            var s = o.delegate;
                            if (s) {
                                var i = v(s, o);
                                if (i) {
                                    if (i === u) continue;
                                    return i
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if ("suspendedStart" === r) throw r = "completed", o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            r = "executing";
                            var l = c(t, e, o);
                            if ("normal" === l.type) {
                                if (r = o.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: o.done
                                }
                            }
                            "throw" === l.type && (r = "completed", o.method = "throw", o.arg = l.arg)
                        }
                    }
                }(t, o, s), n
            }

            function c(t, e, o) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, o)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var u = {};

            function p() {}

            function f() {}

            function h() {}
            var m = {};
            i(m, a, (function() {
                return this
            }));
            var d = Object.getPrototypeOf,
                _ = d && d(d(E([])));
            _ && _ !== e && o.call(_, a) && (m = _);
            var g = h.prototype = p.prototype = Object.create(m);

            function y(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    i(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function(a, n) {
                    function s() {
                        return new e((function(r, s) {
                            ! function r(a, n, s, i) {
                                var l = c(t[a], t, n);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        p = u.value;
                                    return p && "object" == Ho(p) && o.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                        r("next", t, s, i)
                                    }), (function(t) {
                                        r("throw", t, s, i)
                                    })) : e.resolve(p).then((function(t) {
                                        u.value = t, s(u)
                                    }), (function(t) {
                                        return r("throw", t, s, i)
                                    }))
                                }
                                i(l.arg)
                            }(a, n, r, s)
                        }))
                    }
                    return r = r ? r.then(s, s) : s()
                }
            }

            function v(t, e) {
                var o = t.iterator[e.method];
                if (void 0 === o) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, v(t, e), "throw" === e.method)) return u;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return u
                }
                var r = c(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
                var a = r.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
            }

            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(w, this), this.reset(!0)
            }

            function E(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            n = function e() {
                                for (; ++r < t.length;)
                                    if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: C
                }
            }

            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = h, i(g, "constructor", h), i(h, "constructor", f), f.displayName = i(h, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, i(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(b.prototype), i(b.prototype, n, (function() {
                return this
            })), t.AsyncIterator = b, t.async = function(e, o, r, a, n) {
                void 0 === n && (n = Promise);
                var s = new b(l(e, o, r, a), n);
                return t.isGeneratorFunction(o) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(g), i(g, s, "Generator"), i(g, a, (function() {
                return this
            })), i(g, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var e = [];
                for (var o in t) e.push(o);
                return e.reverse(),
                    function o() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return o.value = r, o.done = !1, o
                        }
                        return o.done = !0, o
                    }
            }, t.values = E, x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t)
                        for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                    function r(o, r) {
                        return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var n = this.tryEntries[a],
                            s = n.completion;
                        if ("root" === n.tryLoc) return r("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc"),
                                l = o.call(n, "finallyLoc");
                            if (i && l) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc) return r(n.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc) return r(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r];
                        if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var n = a;
                            break
                        }
                    }
                    n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = t, s.arg = e, n ? (this.method = "next", this.next = n.finallyLoc, u) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.finallyLoc === t) return this.complete(o.completion, o.afterLoc), k(o), u
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var o = this.tryEntries[e];
                        if (o.tryLoc === t) {
                            var r = o.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                k(o)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, o) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: o
                    }, "next" === this.method && (this.arg = void 0), u
                }
            }, t
        }

        function Qo(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), o.push.apply(o, r)
            }
            return o
        }

        function Ko(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Qo(Object(o), !0).forEach((function(e) {
                    Xo(t, e, o[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Qo(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }))
            }
            return t
        }

        function Xo(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t
        }

        function Zo(t, e, o, r, a, n, s) {
            try {
                var i = t[n](s),
                    l = i.value
            } catch (t) {
                return void o(t)
            }
            i.done ? e(l) : Promise.resolve(l).then(r, a)
        }

        function Jo(t) {
            return function() {
                var e = this,
                    o = arguments;
                return new Promise((function(r, a) {
                    var n = t.apply(e, o);

                    function s(t) {
                        Zo(n, r, a, s, i, "next", t)
                    }

                    function i(t) {
                        Zo(n, r, a, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }

        function qo(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Vo(t, e) {
            return (Vo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function $o(t) {
            var e = function() {
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
                var o, r = or(t);
                if (e) {
                    var a = or(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return tr(this, o)
            }
        }

        function tr(t, e) {
            if (e && ("object" === Ho(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return er(t)
        }

        function er(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function or(t) {
            return (or = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var rr = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && Vo(t, e)
            }(i, t);
            var e, o, r, n, s = $o(i);

            function i(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, i), (e = s.call(this, t)).state = {
                    email: "",
                    emailError: "",
                    success: !1,
                    loading: !1,
                    recaptchaToken: "",
                    recaptchaSiteKey: "",
                    isDev: !1
                }, e.loading = !1, e.onForget = e.onForget.bind(er(e)), e.onEmailTextUpdate = e.onEmailTextUpdate.bind(er(e)), e
            }
            return e = i, (o = [{
                key: "componentDidMount",
                value: function() {
                    var t = this;
                    K.get("/api/users/check-auth").then((function() {
                        K.get("/api/config").then(function() {
                            var e = Jo(Wo().mark((function e(o) {
                                var r;
                                return Wo().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            o.data && o.data.googleClientId ? (r = {
                                                isDev: o.data.isDev,
                                                recaptchaSiteKey: o.data.recaptchaSiteKey
                                            }, r = Ko(Ko({}, t.state), r), t.setState(r)) : Object(p.b)(new Error("could not get googleClientId from backend, sign up with google disabled"));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }))
                }
            }, {
                key: "onForget",
                value: (n = Jo(Wo().mark((function t(e) {
                    var o, r, a = this;
                    return Wo().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e.preventDefault(), !this.loading) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                if (this.loading = !0, this.setState({
                                        loading: !0
                                    }), o = "", !this.state.success) {
                                    t.next = 8;
                                    break
                                }
                                return t.abrupt("return");
                            case 8:
                                return this.state.email || (o = "Where's The Email?"), r = null, t.prev = 10, t.next = 13, Ee(this.state.recaptchaSiteKey, "forgot");
                            case 13:
                                (r = t.sent) || (o = "Your sessions failed the reCAPTCHA. Please try again or contact us."), t.next = 21;
                                break;
                            case 17:
                                t.prev = 17, t.t0 = t.catch(10), o = "Your sessions failed the reCAPTCHA with an error. Please try again or contact us.", Object(p.b)(t.t0);
                            case 21:
                                this.setState({
                                    emailError: o,
                                    recaptchaToken: r
                                }, (function() {
                                    if (a.state.emailError) a.loading = !1, a.setState({
                                        loading: !1
                                    });
                                    else {
                                        var t = {};
                                        if (!a.state.recaptchaToken) throw new Error("cannot check recaptcha without token");
                                        t["X-Recaptcha-Token"] = a.state.recaptchaToken, K.post("/api/users/forgot", {
                                            email: a.state.email.toLowerCase()
                                        }, {
                                            headers: t
                                        }).then((function(t) {
                                            a.loading = !1, !0 === t.data.success ? a.setState({
                                                loading: !1,
                                                success: !0
                                            }) : a.setState({
                                                loading: !1,
                                                emailError: t.data.msg
                                            })
                                        })).catch(function() {
                                            var t = Jo(Wo().mark((function t(e) {
                                                var o, r, n;
                                                return Wo().wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (!(e && e.response && 400 === e.response.status && e.response.data && e.response.data.msg)) {
                                                                t.next = 4;
                                                                break
                                                            }
                                                            a.setState({
                                                                loading: !1,
                                                                emailError: e.response.data.msg
                                                            }), t.next = 15;
                                                            break;
                                                        case 4:
                                                            if (!e || !e.response || 403 !== e.response.status) {
                                                                t.next = 9;
                                                                break
                                                            }
                                                            a.setState({
                                                                loading: !1,
                                                                emailError: "Your request was denied.  This is usually because your browser failed the reCAPTCHA check.  Please contact support for more information."
                                                            }), t.next = 15;
                                                            break;
                                                        case 9:
                                                            return t.next = 11, Object(p.b)(e);
                                                        case 11:
                                                            o = t.sent, r = o ? "Error ID ".concat(o) : "", n = "Something went wrong. ".concat(r, ". Please contact support for more information."), a.setState({
                                                                loading: !1,
                                                                emailError: n
                                                            });
                                                        case 15:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }())
                                    }
                                }));
                            case 22:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [10, 17]
                    ])
                }))), function(t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "onEmailTextUpdate",
                value: function(t) {
                    this.setState({
                        email: t.target.value,
                        emailError: ""
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return a.a.createElement("div", {
                        className: M.isMobile ? D.a.mBody : D.a.body
                    }, a.a.createElement(kt, {
                        title: "Request a Password Reset | Blooket",
                        desc: "Request an email to reset your password if you have lost or forgotten it. An email will then be sent with instructions on how to reset your password."
                    }), a.a.createElement(ht, {
                        rightText: "Login",
                        rightLink: "/login"
                    }), a.a.createElement("div", {
                        className: D.a.slantBackground
                    }), a.a.createElement("div", {
                        className: D.a.regularBody
                    }, a.a.createElement("form", {
                        onSubmit: this.onForget,
                        className: Yo.a.container
                    }, a.a.createElement("div", {
                        className: Yo.a.containerHeader
                    }, this.state.success ? "Reset Email Sent!" : "Request Password Reset"), this.state.success ? null : a.a.createElement("div", null, a.a.createElement("div", {
                        className: G()(M.isMobile ? Yo.a.mInputContainer : Yo.a.inputContainer, Xo({}, Yo.a.inputFilled, this.state.email), Xo({}, Yo.a.inputError, this.state.emailError))
                    }, a.a.createElement("i", {
                        className: G()(Yo.a.icon, "fas fa-envelope", Xo({}, Yo.a.iconFilled, this.state.email), Xo({}, Yo.a.iconError, this.state.emailError))
                    }), a.a.createElement("input", {
                        className: G()(M.isMobile ? Yo.a.mInput : Yo.a.input, Xo({}, Yo.a.inputError, this.state.emailError)),
                        placeholder: "Email",
                        onChange: this.onEmailTextUpdate,
                        type: "text",
                        autoFocus: M.isMobile ? "" : "autofocus"
                    })), this.state.loading ? a.a.createElement(be, null) : a.a.createElement("input", {
                        type: "submit",
                        value: "Send Email",
                        className: G()(Yo.a.button, Xo({}, Yo.a.buttonFilled, this.state.email), Xo({}, Yo.a.buttonError, this.state.emailError)),
                        tabIndex: 0
                    })), this.state.emailError ? a.a.createElement("div", {
                        className: Yo.a.errorContainer
                    }, a.a.createElement("i", {
                        className: G()(Yo.a.errorIcon, "fas fa-times-circle")
                    }), a.a.createElement("div", {
                        className: Yo.a.errorText
                    }, this.state.emailError)) : null)))
                }
            }]) && qo(e.prototype, o), r && qo(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), i
        }(a.a.Component);
        rr.propTypes = {};
        var ar = Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(f.b)({}, t)
            }))(rr)),
            nr = o("mZRi"),
            sr = o.n(nr);

        function ir(t) {
            return (ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function lr(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o, t
        }

        function cr(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function ur(t, e) {
            return (ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function pr(t) {
            var e = function() {
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
                var o, r = mr(t);
                if (e) {
                    var a = mr(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return fr(this, o)
            }
        }

        function fr(t, e) {
            if (e && ("object" === ir(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return hr(t)
        }

        function hr(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function mr(t) {
            return (mr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var dr = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && ur(t, e)
            }(s, t);
            var e, o, r, n = pr(s);

            function s(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, s), (e = n.call(this, t)).state = {
                    email: "",
                    emailError: "",
                    password: "",
                    password2: "",
                    passwordError: "",
                    password2Error: "",
                    token: "",
                    success: !1,
                    loading: !1
                }, e.onReset = e.onReset.bind(hr(e)), e.onPasswordTextUpdate = e.onPasswordTextUpdate.bind(hr(e)), e.onPassword2TextUpdate = e.onPassword2TextUpdate.bind(hr(e)), e
            }
            return e = s, (o = [{
                key: "componentDidMount",
                value: function() {
                    this.props.match.params && this.setState({
                        token: this.props.match.params.token
                    })
                }
            }, {
                key: "onReset",
                value: function(t) {
                    var e = this;
                    t.preventDefault(), this.setState({
                        loading: !0
                    });
                    var o = "",
                        r = "",
                        a = "";
                    this.state.success || (this.state.email || (o = "Where's The Email?"), this.state.password.length < 6 && (r = "Password must have at least 6 characters."), this.state.password || (r = "Where's The Password?"), this.state.password !== this.state.password2 && (a = "The passwords don't match."), this.state.password2 || (a = "Where's The Confirming Password?"), this.setState({
                        emailError: o,
                        passwordError: r,
                        password2Error: a
                    }, (function() {
                        e.state.emailError || e.state.passwordError || e.state.password2Error ? e.setState({
                            loading: !1
                        }) : K.put("/api/users/resetpass", {
                            email: e.state.email.toLowerCase(),
                            token: e.state.token,
                            password: e.state.password
                        }).then((function(t) {
                            !0 === t.data.success ? e.setState({
                                loading: !1,
                                success: !0
                            }) : e.setState({
                                loading: !1,
                                emailError: t.data.msg
                            })
                        })).catch((function(t) {
                            Object(p.b)(t)
                        }))
                    })))
                }
            }, {
                key: "onPasswordTextUpdate",
                value: function(t) {
                    this.setState({
                        password: t.target.value
                    }), (t.target.value.length >= 6 || "Where's The Password?" === this.state.passwordError) && this.setState({
                        passwordError: ""
                    })
                }
            }, {
                key: "onPassword2TextUpdate",
                value: function(t) {
                    this.setState({
                        password2: t.target.value
                    }), "The passwords don't match." === this.state.password2Error ? this.state.password === t.target.value && this.setState({
                        password2Error: ""
                    }) : this.setState({
                        password2Error: ""
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return this.props.match.params ? a.a.createElement("div", {
                        className: M.isMobile ? D.a.mBody : D.a.body
                    }, a.a.createElement(kt, {
                        title: "Reset Password | Blooket",
                        desc: "Reset your Blooket password. You must have a valid token received from an email to access this page."
                    }), a.a.createElement(ht, null), a.a.createElement("div", {
                        className: D.a.slantBackground
                    }), a.a.createElement("div", {
                        className: D.a.regularBody
                    }, a.a.createElement("form", {
                        onSubmit: this.onReset,
                        className: sr.a.container
                    }, a.a.createElement("div", {
                        className: sr.a.containerHeader
                    }, this.state.success ? "Password Successfully Reset!" : "Reset Password"), this.state.success ? a.a.createElement(l.b, {
                        className: sr.a.link,
                        to: "/login"
                    }, "Login") : a.a.createElement("div", null, a.a.createElement("div", {
                        className: G()(sr.a.inputContainer, lr({}, sr.a.inputFilled, this.state.email), lr({}, sr.a.inputError, this.state.emailError))
                    }, a.a.createElement("i", {
                        className: G()(sr.a.icon, "fas fa-envelope", lr({}, sr.a.iconFilled, this.state.email), lr({}, sr.a.iconError, this.state.emailError))
                    }), a.a.createElement("input", {
                        className: G()(sr.a.input, lr({}, sr.a.inputError, this.state.emailError)),
                        placeholder: "Email",
                        onChange: function(e) {
                            return t.setState({
                                email: e.target.value,
                                emailError: ""
                            })
                        },
                        type: "text",
                        autoFocus: M.isMobile ? "" : "autofocus"
                    })), a.a.createElement("div", {
                        className: G()(sr.a.inputContainer, lr({}, sr.a.inputFilled, this.state.password), lr({}, sr.a.inputError, this.state.passwordError))
                    }, a.a.createElement("i", {
                        className: G()(sr.a.icon, "fas fa-lock", lr({}, sr.a.iconFilled, this.state.password), lr({}, sr.a.iconError, this.state.passwordError))
                    }), a.a.createElement("input", {
                        className: G()(sr.a.input, lr({}, sr.a.inputError, this.state.passwordError)),
                        placeholder: "Password",
                        onChange: this.onPasswordTextUpdate,
                        type: "password"
                    })), a.a.createElement("div", {
                        className: G()(sr.a.inputContainer, lr({}, sr.a.inputFilled, this.state.password2), lr({}, sr.a.inputError, this.state.password2Error))
                    }, a.a.createElement("i", {
                        className: G()(sr.a.icon, "fas fa-lock", lr({}, sr.a.iconFilled, this.state.password2), lr({}, sr.a.iconError, this.state.password2Error))
                    }), a.a.createElement("input", {
                        className: G()(sr.a.input, lr({}, sr.a.inputError, this.state.password2Error)),
                        placeholder: "Confirm Password",
                        onChange: this.onPassword2TextUpdate,
                        type: "password"
                    })), this.state.loading ? a.a.createElement(be, null) : a.a.createElement("input", {
                        type: "submit",
                        value: "Reset",
                        className: G()(sr.a.button, lr({}, sr.a.buttonFilled, this.state.password && this.state.password2 && this.state.email), lr({}, sr.a.buttonError, this.state.passwordError || this.state.password2Error || this.state.emailError)),
                        tabIndex: 0
                    })), this.state.passwordError || this.state.password2Error || this.state.emailError ? a.a.createElement("div", {
                        className: sr.a.errorContainer
                    }, a.a.createElement("i", {
                        className: G()(sr.a.errorIcon, "fas fa-times-circle")
                    }), a.a.createElement("div", {
                        className: sr.a.errorText
                    }, this.state.emailError || this.state.passwordError || this.state.password2Error)) : null))) : a.a.createElement(c.a, {
                        to: "/forgot"
                    })
                }
            }]) && cr(e.prototype, o), r && cr(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), s
        }(a.a.Component);
        dr.propTypes = {
            match: I.a.object
        };
        var _r = Object(c.g)(Object(i.b)((function() {
            return {}
        }), (function(t) {
            return Object(f.b)({}, t)
        }))(dr));

        function gr(t) {
            return (gr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function yr(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function br(t, e) {
            return (br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function vr(t) {
            var e = function() {
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
                var o, r = kr(t);
                if (e) {
                    var a = kr(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return wr(this, o)
            }
        }

        function wr(t, e) {
            if (e && ("object" === gr(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }

        function kr(t) {
            return (kr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var xr = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && br(t, e)
            }(s, t);
            var e, o, r, n = vr(s);

            function s(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, s), (e = n.call(this, t)).state = {}, e
            }
            return e = s, (o = [{
                key: "componentDidMount",
                value: function() {
                    var t = this;
                    K.get("/api/users/dev").then((function(e) {
                        t.setState({
                            user: e.data
                        })
                    })).catch((function(t) {
                        Object(p.b)(new Error(t)), window.location.href = "/login"
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    return a.a.createElement("div", null, a.a.createElement("h1", null, "Dev Landing Page"), a.a.createElement("div", null, a.a.createElement("pre", null, JSON.stringify(this.state.user, void 0, 2))), a.a.createElement(l.b, {
                        to: "/logout"
                    }, "Sign Out"))
                }
            }]) && yr(e.prototype, o), r && yr(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), s
        }(a.a.Component);
        xr.propTypes = {};
        St(Object(c.g)(Object(i.b)((function() {
            return {
                user: I.a.object
            }
        }), (function(t) {
            return Object(f.b)({}, t)
        }))(xr)));
        var Er = o("tMKq"),
            Cr = o.n(Er),
            jr = o("J+dS"),
            Or = o.n(jr);

        function Lr(t) {
            return (Lr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ar(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function zr(t, e) {
            return (zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function Pr(t) {
            var e = function() {
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
                var o, r = Nr(t);
                if (e) {
                    var a = Nr(this).constructor;
                    o = Reflect.construct(r, arguments, a)
                } else o = r.apply(this, arguments);
                return Sr(this, o)
            }
        }

        function Sr(t, e) {
            if (e && ("object" === Lr(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }

        function Nr(t) {
            return (Nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        var Br = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && zr(t, e)
            }(s, t);
            var e, o, r, n = Pr(s);

            function s(t) {
                var e;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, s), (e = n.call(this, t)).state = {}, e
            }
            return e = s, (o = [{
                key: "render",
                value: function() {
                    return "/" !== window.location.pathname && this.props.match.params ? a.a.createElement("div", {
                        className: M.isMobile ? D.a.mBody : D.a.body,
                        style: {
                            backgroundColor: "#0bc2cf"
                        }
                    }, a.a.createElement(kt, {
                        title: "404 | Blooket",
                        desc: "I don't know what is, but this ain't it chief."
                    }), a.a.createElement(ht, null), a.a.createElement("div", {
                        className: D.a.regularBody
                    }, a.a.createElement(Cr.a, {
                        height: "calc(100vh - 61px)",
                        width: "100vw",
                        style: {
                            padding: 0,
                            margin: 0
                        },
                        className: Or.a.particles,
                        params: {
                            particles: {
                                number: {
                                    value: M.isMobile ? 19 : 65,
                                    density: {
                                        enable: !1,
                                        value_area: M.isMobile ? 900 : 350
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
                    }), a.a.createElement("div", {
                        className: Or.a.container
                    }, a.a.createElement("div", {
                        className: Or.a.containerHeader
                    }, "4", a.a.createElement(de, {
                        name: "Blobfish",
                        className: Or.a.blook
                    }), "4"), a.a.createElement("div", {
                        className: Or.a.containerText
                    }, "I don't know what you were looking for,", a.a.createElement("br", null), "but it's not this.")))) : a.a.createElement(c.a, {
                        to: "/login"
                    })
                }
            }]) && Ar(e.prototype, o), r && Ar(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), s
        }(a.a.Component);
        Br.propTypes = {
            match: I.a.object
        };
        var Tr, Ir, Mr = Object(c.g)(Object(i.b)((function() {
                return {}
            }), (function(t) {
                return Object(f.b)({}, t)
            }))(Br)),
            Rr = (o("35eG"), ["basil", "gold", "crypto"]),
            Dr = function(t) {
                var e = !1;
                Rr.forEach((function(o) {
                    t.toLowerCase().includes(o) && (e = !0)
                })), e && (window.removeEventListener("beforeunload", $), window.location.href = "https://www.blooket.com/")
            };
        window.alert = Dr, window.prompt = Dr, window.confirm = Dr, Tr = new URL(window.location.href).hostname, Ir = !1, ["blooket.com", "packcomputing.com", "localhost", "127.0.0.1"].forEach((function(t) {
                Tr.endsWith(t) && (Ir = !0)
            })), Ir || (window.location.href = "https://www.blooket.com/terms"),
            function() {
                var t = !1;
                window.blooketUtility && (t = !0), localStorage.getItem("blooket-utility") && (t = !0), localStorage.removeItem("blooket-utility"), t && (window.location.href = "https://www.blooket.com/terms"), delete window.blooketUtility, delete window._fetch;
                var e = document.createElement("iframe");
                e.style.display = "none", document.body.appendChild(e);
                var o = e.contentWindow;
                window.fetch = o.fetch, XMLHttpRequest.prototype.open = o.XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.send = o.XMLHttpRequest.prototype.send, String.prototype.concat = o.String.prototype.concat, window.ontouchstart = null, window.onkeydown = null
            }();
        K.get("/api/config").then((function(t) {
            var e = t.data.securityBase;
            if (u.a.securityBaseURL = e, t.data.recaptchaSiteKey) {
                var o = document.createElement("script");
                o.src = "https://www.google.com/recaptcha/enterprise.js?render=".concat(t.data.recaptchaSiteKey);
                var r = document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(o, r)
            }
        }));
        var Fr, Gr, Ur, Yr, Hr = (Gr = [N, m()()], Ur = [f.a.apply(void 0, Gr), B()], (Yr = Object(f.e)(O, Fr, f.d.apply(void 0, Ur))).runSaga = N.run(S), Yr);
        s.a.render(a.a.createElement(p.a, null, a.a.createElement(i.a, {
            store: Hr
        }, a.a.createElement(Pt.Provider, {
            value: new Nt
        }, a.a.createElement(l.a, null, a.a.createElement("div", null, a.a.createElement(c.d, null, a.a.createElement(c.b, {
            exact: !0,
            path: "/signup",
            component: qe
        }), a.a.createElement(c.b, {
            exact: !0,
            path: "/login",
            component: Ao
        }), a.a.createElement(c.b, {
            exact: !0,
            path: "/logout",
            component: Go
        }), a.a.createElement(c.b, {
            exact: !0,
            path: "/forgot",
            component: ar
        }), a.a.createElement(c.b, {
            exact: !0,
            path: "/reset/:token",
            component: _r
        }), !1, a.a.createElement(c.b, {
            component: Mr
        }))))))), document.getElementById("app"))
    }
});