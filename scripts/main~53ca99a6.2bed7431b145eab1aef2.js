! function (o) {
    function e(e) {
        for (var t, l, n = e[0], i = e[1], m = e[2], u = 0, d = []; u < n.length; u++) l = n[u], Object.prototype.hasOwnProperty.call(s, l) && s[l] && d.push(s[l][0]), s[l] = 0;
        for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (o[t] = i[t]);
        for (c && c(e); d.length;) d.shift()();
        return r.push.apply(r, m || []), a()
    }

    function a() {
        for (var o, e = 0; e < r.length; e++) {
            for (var a = r[e], t = !0, n = 1; n < a.length; n++) {
                var i = a[n];
                0 !== s[i] && (t = !1)
            }
            t && (r.splice(e--, 1), o = l(l.s = a[0]))
        }
        return o
    }
    var t = {},
        s = {
            3: 0
        },
        r = [];

    function l(e) {
        if (t[e]) return t[e].exports;
        var a = t[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }
    l.e = function (o) {
        var e = [],
            a = s[o];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var t = new Promise((function (e, t) {
                    a = s[o] = [e, t]
                }));
                e.push(a[2] = t);
                var r, n = document.createElement("script");
                n.charset = "utf-8", n.timeout = 120, l.nc && n.setAttribute("nonce", l.nc), n.src = function (o) {
                    return l.p + "" + ({
                        11: "polyfills-dom~9aedfade",
                        36: "vendors~polyfills-core-js~34a2b07d"
                    } [o] || o) + "." + {
                        11: "df62f4a760d69ed22cba",
                        36: "d778190cc49cb0b86119",
                        37: "7d5bc800b6891fb7c25e",
                        38: "37cb71e2d23f80acecbe"
                    } [o] + ".js"
                }(o);
                var i = new Error;
                r = function (e) {
                    n.onerror = n.onload = null, clearTimeout(m);
                    var a = s[o];
                    if (0 !== a) {
                        if (a) {
                            var t = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            i.message = "Loading chunk " + o + " failed.\n(" + t + ": " + r + ")", i.name = "ChunkLoadError", i.type = t, i.request = r, a[1](i)
                        }
                        s[o] = void 0
                    }
                };
                var m = setTimeout((function () {
                    r({
                        type: "timeout",
                        target: n
                    })
                }), 12e4);
                n.onerror = n.onload = r, document.head.appendChild(n)
            } return Promise.all(e)
    }, l.m = o, l.c = t, l.d = function (o, e, a) {
        l.o(o, e) || Object.defineProperty(o, e, {
            enumerable: !0,
            get: a
        })
    }, l.r = function (o) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(o, "__esModule", {
            value: !0
        })
    }, l.t = function (o, e) {
        if (1 & e && (o = l(o)), 8 & e) return o;
        if (4 & e && "object" == typeof o && o && o.__esModule) return o;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: o
            }), 2 & e && "string" != typeof o)
            for (var t in o) l.d(a, t, function (e) {
                return o[e]
            }.bind(null, t));
        return a
    }, l.n = function (o) {
        var e = o && o.__esModule ? function () {
            return o.default
        } : function () {
            return o
        };
        return l.d(e, "a", e), e
    }, l.o = function (o, e) {
        return Object.prototype.hasOwnProperty.call(o, e)
    }, l.p = "/", l.oe = function (o) {
        throw console.error(o), o
    };
    var n = window.webpackJsonp = window.webpackJsonp || [],
        i = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var m = 0; m < n.length; m++) e(n[m]);
    var c = i;
    r.push([2, 15, 16, 27, 12, 28, 24, 33, 14, 25, 23, 29, 26, 31, 32, 22, 18, 34, 30, 13, 19, 20, 21, 35, 17, 4, 1, 5, 10, 6, 9, 0, 8, 7, 2]), a()
}({
    "/9rF": function (o, e, a) {
        "use strict";
        e.a = {
            Tiger: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681190/Blooks/tiger.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Brave Bengals",
                color: "#f18221"
            },
            Orangutan: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/orangutan.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Hairy Hipsters",
                color: "#bc6234"
            },
            Cockatoo: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/cockatoo.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Not Chickens",
                color: "#7ca1d5"
            },
            Parrot: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681189/Blooks/parrot.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Polly's People",
                color: "#ed1c24"
            },
            Anaconda: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681187/Blooks/anaconda.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Sneaky Snakes",
                color: "#8a9143"
            },
            Jaguar: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/jaguar.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Super Spotters",
                color: "#fbb040"
            },
            Macaw: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681188/Blooks/macaw.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "CA CAWWWW",
                color: "#00aeef"
            },
            Toucan: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681191/Blooks/toucan.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Toucan't Beat Us",
                color: "#ffca34"
            },
            Panther: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681189/Blooks/panther.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Wakanda Forever",
                color: "#2f2c38"
            },
            Capuchin: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566681187/Blooks/capuchinMonkey.svg",
                set: "Tropical Animal",
                rarity: "Common",
                teamName: "Monkey Madness",
                color: "#e0b0a6"
            }
        }
    },
    "1u4q": function (o, e, a) {
        "use strict";
        e.a = function (o) {
            switch (o) {
                case "Elf":
                case "Witch":
                case "Wizard":
                case "Fairy":
                case "Slime Monster":
                    return 5;
                case "Jester":
                case "Dragon":
                    return 20;
                case "Unicorn":
                    return 75;
                case "Queen":
                    return 20;
                case "King":
                    return 200;
                case "Agent Owl":
                    return 300;
                case "Master Elf":
                    return 350;
                case "Phantom King":
                    return 1e3;
                case "Snow Globe":
                case "Holiday Gift":
                case "Hot Chocolate":
                case "Holiday Wreath":
                    return 5;
                case "Gingerbread Man":
                case "Gingerbread House":
                    return 20;
                case "Snowman":
                    return 75;
                case "Santa Claus":
                    return 200;
                case "Frost Wreath":
                case "Tropical Globe":
                    return 300;
                case "Two of Spades":
                case "Eat Me":
                case "Drink Me":
                case "Alice":
                case "Queen of Hearts":
                    return 5;
                case "Dormouse":
                case "White Rabbit":
                case "Cheshire Cat":
                    return 20;
                case "Caterpillar":
                case "Mad Hatter":
                    return 75;
                case "King of Hearts":
                    return 200;
                case "Toast":
                case "Cereal":
                case "Yogurt":
                case "Breakfast Combo":
                case "Orange Juice":
                case "Milk":
                    return 5;
                case "Waffle":
                case "Pancakes":
                    return 20;
                case "French Toast":
                case "Pizza":
                case "Sandwich":
                    return 75;
                case "Pumpkin":
                case "Swamp Monster":
                case "Frankenstein":
                case "Vampire":
                    return 5;
                case "Zombie":
                case "Mummy":
                    return 20;
                case "Werewolf":
                    return 75;
                case "Ghost":
                    return 200;
                case "Haunted Pumpkin":
                case "Spooky Pumpkin":
                    return 300;
                case "Spooky Mummy":
                    return 350;
                case "Spooky Ghost":
                    return 1e3;
                case "Earth":
                case "Meteor":
                case "Stars":
                case "Alien":
                    return 5;
                case "Planet":
                case "UFO":
                    return 20;
                case "Spaceship":
                    return 75;
                case "Astronaut":
                    return 200;
                case "Red Astronaut":
                case "Blue Astronaut":
                case "Green Astronaut":
                case "Pink Astronaut":
                case "Orange Astronaut":
                case "Yellow Astronaut":
                case "Black Astronaut":
                case "Purple Astronaut":
                case "Brown Astronaut":
                case "Cyan Astronaut":
                case "Lime Astronaut":
                    return 300;
                case "Tim the Alien":
                case "Rainbow Astronaut":
                    return 1e3;
                case "Lil Bot":
                case "Lovely Bot":
                case "Angry Bot":
                case "Happy Bot":
                    return 5;
                case "Watson":
                case "Buddy Bot":
                    return 20;
                case "Brainy Bot":
                    return 75;
                case "Mega Bot":
                    return 200;
                case "Old Boot":
                case "Jellyfish":
                case "Clownfish":
                case "Frog":
                case "Crab":
                    return 5;
                case "Pufferfish":
                case "Blobfish":
                case "Octopus":
                    return 20;
                case "Narwhal":
                    return 75;
                case "Baby Shark":
                    return 200;
                case "Megalodon":
                    return 250;
                case "Rainbow Jellyfish":
                case "Blizzard Clownfish":
                case "Lovely Frog":
                case "Lucky Frog":
                case "Spring Frog":
                case "Poison Dart Frog":
                case "Lemon Crab":
                case "Pirate Pufferfish":
                case "Donut Blobfish":
                case "Crimson Octopus":
                case "Rainbow Narwhal":
                    return 300;
                case "Panda":
                case "Sloth":
                case "Tenrec":
                case "Flamingo":
                case "Zebra":
                    return 5;
                case "Elephant":
                case "Lemur":
                case "Peacock":
                    return 20;
                case "Chameleon":
                    return 75;
                case "Lion":
                    return 200;
                case "Rainbow Panda":
                case "White Peacock":
                case "Tiger Zebra":
                    return 300;
                case "Amber":
                case "Dino Egg":
                case "Dino Fossil":
                case "Stegosaurus":
                    return 5;
                case "Velociraptor":
                case "Brontosaurus":
                    return 20;
                case "Triceratops":
                    return 75;
                case "Tyrannosaurus Rex":
                    return 200;
                case "Ice Bat":
                case "Ice Bug":
                case "Ice Elemental":
                case "Rock Monster":
                    return 5;
                case "Dink":
                case "Donk":
                    return 20;
                case "Bush Monster":
                    return 75;
                case "Yeti":
                    return 200;
                case "Ice Slime":
                case "Frozen Fossil":
                case "Ice Crab":
                    return 300;
                default:
                    return 0
            }
        }
    },
    "4otK": function (o, e, a) {
        "use strict";
        e.a = ["Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread Man", "Gingerbread House", "Snowman", "Santa Claus", "Frost Wreath", "Tropical Globe", "Sandwich", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Werewolf", "Ghost", "Haunted Pumpkin", "Spooky Pumpkin", "Spooky Mummy", "Spooky Ghost", "Red Astronaut", "Blue Astronaut", "Green Astronaut", "Pink Astronaut", "Orange Astronaut", "Yellow Astronaut", "Black Astronaut", "Purple Astronaut", "Brown Astronaut", "Cyan Astronaut", "Lime Astronaut", "Tim the Alien", "Rainbow Astronaut", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Agent Owl", "Master Elf", "Phantom King", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Ice Slime", "Frozen Fossil", "Ice Crab"]
    },
    "5Kqo": function (o, e, a) {
        "use strict";
        e.a = {
            Witch: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/witch.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Cauldron City",
                color: "#4ab96d"
            },
            Wizard: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832453/Blooks/wizard.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Wiz Kids",
                color: "#5a459c"
            },
            Elf: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/elf.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Agile Archers",
                color: "#a7d054"
            },
            Fairy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/fairy.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Mighty Myths",
                color: "#df6d9c"
            },
            "Slime Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683613/Blooks/slimeMonster.svg",
                set: "Medieval",
                rarity: "Uncommon",
                teamName: "Slimy McSlimes",
                color: "#2fa04a"
            },
            Jester: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/jester.svg",
                set: "Medieval",
                rarity: "Rare",
                teamName: "Jolly Jokesters",
                color: "#be1e2d"
            },
            Dragon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832453/Blooks/dragon.svg",
                set: "Medieval",
                rarity: "Rare",
                teamName: "Fire Hazards",
                color: "#2fa04a"
            },
            Queen: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/queen.svg",
                set: "Medieval",
                rarity: "Rare",
                teamName: "Royal Rebels",
                color: "#9e1f63"
            },
            Unicorn: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683614/Blooks/unicorn.svg",
                set: "Medieval",
                rarity: "Epic",
                teamName: "Land Narwhals",
                color: "#f6afce"
            },
            King: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566683612/Blooks/king.svg",
                set: "Medieval",
                rarity: "Legendary",
                teamName: "THE SQUAD",
                color: "#ee2640"
            },
            "Agent Owl": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/agentOwl.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1638737635/Blooks/agentOwl.svg",
                set: "Medieval",
                rarity: "Chroma",
                teamName: "Secret Agents",
                color: "#32da4e"
            },
            "Master Elf": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/masterElf.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
                set: "Medieval",
                rarity: "Chroma",
                teamName: "The Masters",
                color: "#3a3a3a"
            },
            "Phantom King": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/phantomKing.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
                set: "Medieval",
                rarity: "Mystical",
                teamName: "The True Kings",
                color: "#2cf4e1"
            }
        }
    },
    "74sb": function (o, e, a) {
        "use strict";
        a.d(e, "k", (function () {
            return p
        })), a.d(e, "g", (function () {
            return k
        })), a.d(e, "q", (function () {
            return b
        })), a.d(e, "h", (function () {
            return v
        })), a.d(e, "w", (function () {
            return f
        })), a.d(e, "i", (function () {
            return y
        })), a.d(e, "n", (function () {
            return w
        })), a.d(e, "m", (function () {
            return B
        })), a.d(e, "l", (function () {
            return U
        })), a.d(e, "o", (function () {
            return C
        })), a.d(e, "f", (function () {
            return z
        })), a.d(e, "d", (function () {
            return A
        })), a.d(e, "e", (function () {
            return S
        })), a.d(e, "p", (function () {
            return M
        })), a.d(e, "r", (function () {
            return P
        })), a.d(e, "u", (function () {
            return E
        })), a.d(e, "v", (function () {
            return F
        })), a.d(e, "b", (function () {
            return L
        })), a.d(e, "t", (function () {
            return O
        })), a.d(e, "a", (function () {
            return T
        })), a.d(e, "s", (function () {
            return R
        })), a.d(e, "c", (function () {
            return x
        })), a.d(e, "j", (function () {
            return H
        }));
        var t = a("uFVl"),
            s = a.n(t),
            r = a("q1tI"),
            l = a.n(r),
            n = a("EDFO"),
            i = (a("dOT4"), a("bZbD"));

        function m(o) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
                return typeof o
            } : function (o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
            })(o)
        }

        function c() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            c = function () {
                return o
            };
            var o = {},
                e = Object.prototype,
                a = e.hasOwnProperty,
                t = "function" == typeof Symbol ? Symbol : {},
                s = t.iterator || "@@iterator",
                r = t.asyncIterator || "@@asyncIterator",
                l = t.toStringTag || "@@toStringTag";

            function n(o, e, a) {
                return Object.defineProperty(o, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), o[e]
            }
            try {
                n({}, "")
            } catch (o) {
                n = function (o, e, a) {
                    return o[e] = a
                }
            }

            function i(o, e, a, t) {
                var s = e && e.prototype instanceof p ? e : p,
                    r = Object.create(s.prototype),
                    l = new z(t || []);
                return r._invoke = function (o, e, a) {
                    var t = "suspendedStart";
                    return function (s, r) {
                        if ("executing" === t) throw new Error("Generator is already running");
                        if ("completed" === t) {
                            if ("throw" === s) throw r;
                            return S()
                        }
                        for (a.method = s, a.arg = r;;) {
                            var l = a.delegate;
                            if (l) {
                                var n = B(l, a);
                                if (n) {
                                    if (n === d) continue;
                                    return n
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === t) throw t = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            t = "executing";
                            var i = u(o, e, a);
                            if ("normal" === i.type) {
                                if (t = a.done ? "completed" : "suspendedYield", i.arg === d) continue;
                                return {
                                    value: i.arg,
                                    done: a.done
                                }
                            }
                            "throw" === i.type && (t = "completed", a.method = "throw", a.arg = i.arg)
                        }
                    }
                }(o, a, l), r
            }

            function u(o, e, a) {
                try {
                    return {
                        type: "normal",
                        arg: o.call(e, a)
                    }
                } catch (o) {
                    return {
                        type: "throw",
                        arg: o
                    }
                }
            }
            o.wrap = i;
            var d = {};

            function p() {}

            function h() {}

            function k() {}
            var g = {};
            n(g, s, (function () {
                return this
            }));
            var b = Object.getPrototypeOf,
                v = b && b(b(A([])));
            v && v !== e && a.call(v, s) && (g = v);
            var f = k.prototype = p.prototype = Object.create(g);

            function y(o) {
                ["next", "throw", "return"].forEach((function (e) {
                    n(o, e, (function (o) {
                        return this._invoke(e, o)
                    }))
                }))
            }

            function w(o, e) {
                var t;
                this._invoke = function (s, r) {
                    function l() {
                        return new e((function (t, l) {
                            ! function t(s, r, l, n) {
                                var i = u(o[s], o, r);
                                if ("throw" !== i.type) {
                                    var c = i.arg,
                                        d = c.value;
                                    return d && "object" == m(d) && a.call(d, "__await") ? e.resolve(d.__await).then((function (o) {
                                        t("next", o, l, n)
                                    }), (function (o) {
                                        t("throw", o, l, n)
                                    })) : e.resolve(d).then((function (o) {
                                        c.value = o, l(c)
                                    }), (function (o) {
                                        return t("throw", o, l, n)
                                    }))
                                }
                                n(i.arg)
                            }(s, r, t, l)
                        }))
                    }
                    return t = t ? t.then(l, l) : l()
                }
            }

            function B(o, e) {
                var a = o.iterator[e.method];
                if (void 0 === a) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (o.iterator.return && (e.method = "return", e.arg = void 0, B(o, e), "throw" === e.method)) return d;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var t = u(a, o.iterator, e.arg);
                if ("throw" === t.type) return e.method = "throw", e.arg = t.arg, e.delegate = null, d;
                var s = t.arg;
                return s ? s.done ? (e[o.resultName] = s.value, e.next = o.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
            }

            function U(o) {
                var e = {
                    tryLoc: o[0]
                };
                1 in o && (e.catchLoc = o[1]), 2 in o && (e.finallyLoc = o[2], e.afterLoc = o[3]), this.tryEntries.push(e)
            }

            function C(o) {
                var e = o.completion || {};
                e.type = "normal", delete e.arg, o.completion = e
            }

            function z(o) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], o.forEach(U, this), this.reset(!0)
            }

            function A(o) {
                if (o) {
                    var e = o[s];
                    if (e) return e.call(o);
                    if ("function" == typeof o.next) return o;
                    if (!isNaN(o.length)) {
                        var t = -1,
                            r = function e() {
                                for (; ++t < o.length;)
                                    if (a.call(o, t)) return e.value = o[t], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return r.next = r
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
            return h.prototype = k, n(f, "constructor", k), n(k, "constructor", h), h.displayName = n(k, l, "GeneratorFunction"), o.isGeneratorFunction = function (o) {
                var e = "function" == typeof o && o.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }, o.mark = function (o) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(o, k) : (o.__proto__ = k, n(o, l, "GeneratorFunction")), o.prototype = Object.create(f), o
            }, o.awrap = function (o) {
                return {
                    __await: o
                }
            }, y(w.prototype), n(w.prototype, r, (function () {
                return this
            })), o.AsyncIterator = w, o.async = function (e, a, t, s, r) {
                void 0 === r && (r = Promise);
                var l = new w(i(e, a, t, s), r);
                return o.isGeneratorFunction(a) ? l : l.next().then((function (o) {
                    return o.done ? o.value : l.next()
                }))
            }, y(f), n(f, l, "Generator"), n(f, s, (function () {
                return this
            })), n(f, "toString", (function () {
                return "[object Generator]"
            })), o.keys = function (o) {
                var e = [];
                for (var a in o) e.push(a);
                return e.reverse(),
                    function a() {
                        for (; e.length;) {
                            var t = e.pop();
                            if (t in o) return a.value = t, a.done = !1, a
                        }
                        return a.done = !0, a
                    }
            }, o.values = A, z.prototype = {
                constructor: z,
                reset: function (o) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !o)
                        for (var e in this) "t" === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function () {
                    this.done = !0;
                    var o = this.tryEntries[0].completion;
                    if ("throw" === o.type) throw o.arg;
                    return this.rval
                },
                dispatchException: function (o) {
                    if (this.done) throw o;
                    var e = this;

                    function t(a, t) {
                        return l.type = "throw", l.arg = o, e.next = a, t && (e.method = "next", e.arg = void 0), !!t
                    }
                    for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                        var r = this.tryEntries[s],
                            l = r.completion;
                        if ("root" === r.tryLoc) return t("end");
                        if (r.tryLoc <= this.prev) {
                            var n = a.call(r, "catchLoc"),
                                i = a.call(r, "finallyLoc");
                            if (n && i) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            } else if (n) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                            } else {
                                if (!i) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (o, e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var s = this.tryEntries[t];
                        if (s.tryLoc <= this.prev && a.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                            var r = s;
                            break
                        }
                    }
                    r && ("break" === o || "continue" === o) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                    var l = r ? r.completion : {};
                    return l.type = o, l.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(l)
                },
                complete: function (o, e) {
                    if ("throw" === o.type) throw o.arg;
                    return "break" === o.type || "continue" === o.type ? this.next = o.arg : "return" === o.type ? (this.rval = this.arg = o.arg, this.method = "return", this.next = "end") : "normal" === o.type && e && (this.next = e), d
                },
                finish: function (o) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var a = this.tryEntries[e];
                        if (a.finallyLoc === o) return this.complete(a.completion, a.afterLoc), C(a), d
                    }
                },
                catch: function (o) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var a = this.tryEntries[e];
                        if (a.tryLoc === o) {
                            var t = a.completion;
                            if ("throw" === t.type) {
                                var s = t.arg;
                                C(a)
                            }
                            return s
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (o, e, a) {
                    return this.delegate = {
                        iterator: A(o),
                        resultName: e,
                        nextLoc: a
                    }, "next" === this.method && (this.arg = void 0), d
                }
            }, o
        }

        function u(o, e, a, t, s, r, l) {
            try {
                var n = o[r](l),
                    i = n.value
            } catch (o) {
                return void a(o)
            }
            n.done ? e(i) : Promise.resolve(i).then(t, s)
        }

        function d(o) {
            return function () {
                var e = this,
                    a = arguments;
                return new Promise((function (t, s) {
                    var r = o.apply(e, a);

                    function l(o) {
                        u(r, t, s, l, n, "next", o)
                    }

                    function n(o) {
                        u(r, t, s, l, n, "throw", o)
                    }
                    l(void 0)
                }))
            }
        }
        Object(n.addStyles)();
        var p = function (o) {
                return o || 0 === o ? o.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
            },
            h = ["st", "nd", "rd", "th"],
            k = function (o) {
                return o % 100 < 11 || o % 100 > 13 ? o % 10 == 1 ? h[0] : o % 10 == 2 ? h[1] : o % 10 == 3 ? h[2] : h[3] : h[3]
            },
            g = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
            b = function (o) {
                var e = o;
                if (o >= 1e3) {
                    var a = ["", "K", "M", "B", "T"],
                        t = Math.floor((o.toString().length - 1) / 3);
                    if (t < a.length) {
                        for (var s = "", r = 3; r >= 1; r--) {
                            if ((s = parseFloat((0 !== t ? o / Math.pow(1e3, t) : o).toPrecision(r))).toString().replace(/[^a-zA-Z 0-9]+/g, "").length <= 3) break
                        }
                        s % 1 != 0 && (s = s.toFixed(1)), e = s + a[t]
                    } else {
                        for (var l = o, n = 0; l >= 100;) l = Math.floor(l / 10), n += 1;
                        e = "".concat(l / 10, " × 10").concat(function (o) {
                            var e = "";
                            return o.toString().split("").forEach((function (o) {
                                e += g[Number(o)]
                            })), e
                        }(n + 1))
                    }
                }
                return e
            },
            v = function (o) {
                for (var e = window.location.search.substring(1).split("&"), a = 0; a < e.length; a++) {
                    var t = e[a].split("=");
                    if (t[0] === o) return t[1]
                }
                return !1
            },
            f = function () {
                var o = window.document,
                    e = o.documentElement,
                    a = e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullScreen || e.msRequestFullscreen,
                    t = o.exitFullscreen || o.mozCancelFullScreen || o.webkitExitFullscreen || o.msExitFullscreen;
                return o.fullscreenElement || o.mozFullScreenElement || o.webkitFullscreenElement || o.msFullscreenElement ? (t && t.call(o), !1) : (a && a.call(e), !0)
            },
            y = function () {
                var o = window.document;
                return !!(o.fullscreenElement || o.mozFullScreenElement || o.webkitFullscreenElement || o.msFullscreenElement || window.screen.width === window.innerWidth && window.screen.height === window.innerHeight)
            },
            w = function (o, e) {
                return Math.floor(Math.random() * (e - o)) + o
            },
            B = function (o, e) {
                return Math.random() * (e - o) + o
            },
            U = function (o) {
                return o[Math.floor(Math.random() * o.length)]
            },
            C = {
                Common: "#ffffff",
                Uncommon: "#4bc22e",
                Rare: "#0a14fa",
                Epic: "#be0000",
                Legendary: "#ff910f",
                Chroma: "#00ccff",
                Mystical: "#a335ee"
            },
            z = function (o, e) {
                if (!o) return o;
                var a = o.indexOf("upload/");
                if (-1 === a || o.includes("images.unsplash.com")) return o;
                a += 7;
                var t = e ? "f_auto" : "c_limit,f_auto,h_250,fl_lossy,q_auto:low";
                return "".concat(o.slice(0, a)).concat(t).concat(o.slice(a - 1, o.length))
            },
            A = function (o) {
                if (!o) return o;
                var e = o.indexOf("upload/");
                if (-1 === e) return o;
                e += 7;
                return "".concat(o.slice(0, e)).concat("f_auto,q_auto:best").concat(o.slice(e - 1, o.length))
            },
            S = function (o, e, a) {
                return o.map((function (o, t) {
                    return l.a.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            margin: "0 5px"
                        },
                        key: t
                    }, 0 !== t ? l.a.createElement("span", {
                        style: {
                            marginLeft: "-5px"
                        }
                    }, "& ") : null, 2 === o.split("`~`").length ? l.a.createElement("img", {
                        src: z(o.split("`~`")[1]),
                        alt: "Answer",
                        draggable: !1,
                        style: {
                            maxWidth: 1.5 * (a || 20),
                            maxHeight: 1.5 * (a || 20),
                            objectFit: "contain",
                            userSelect: "none"
                        }
                    }) : "`*`" === o.slice(0, 3) ? l.a.createElement(n.StaticMathField, {
                        style: {
                            color: e || "#3a3a3a",
                            borderColor: e || "#3a3a3a",
                            fontSize: "".concat(a || 20, "px"),
                            cursor: "default"
                        }
                    }, o.slice(3, o.length - 3)) : l.a.createElement("span", null, o))
                }))
            },
            N = function (o) {
                var e = o || window.event;
                return e && (e.returnValue = "Are you sure you want to leave?"), "Are you sure you want to leave?"
            },
            M = function () {
                window.removeEventListener("beforeunload", N)
            },
            P = function (o) {
                return o ? o.indexOf('"') >= 0 ? "Emails can't have quotations." : function (o) {
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(o).toLowerCase())
                }(o) ? o.length > 50 ? "Ok, that email is a little too long." : null : "That's not a real email, silly." : "Where's the email?"
            },
            E = function (o) {
                return o ? o.indexOf(" ") >= 0 ? "Usernames can't have spaces." : o.indexOf("\t") >= 0 ? "Usernames can't have tabs." : o.indexOf('"') >= 0 ? "Usernames can't have quotations." : function (o) {
                    return /[^-\]_.~!*'();:@&+$,/%#[A-z0-9]/.test(o)
                }(o) ? "Usernames can't have extra special characters." : s()().test(o) ? "Sorry, no emojis allowed." : o.length > 15 ? "Sorry, that name is too long." : null : "Where's The Name?"
            },
            F = function (o) {
                return o ? o.indexOf("\t") >= 0 ? "Usernames can't have tabs." : o.indexOf('"') >= 0 ? "Usernames can't have quotations." : o.length > 35 ? "Sorry, that name is too long." : null : "Where's The Name?"
            },
            L = 75,
            O = function (o) {
                return o ? o.length > L ? "Sorry, that title is too long." : null : "Where's The Title?"
            },
            T = 300,
            R = function (o) {
                return o.length > T ? "Sorry, that description is too long." : null
            },
            x = function (o) {
                var e = document.createElement("textarea");
                e.value = o, e.setAttribute("readonly", ""), e.style.position = "absolute", e.style.left = "-9999px", document.body.appendChild(e);
                var a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                e.select(), document.execCommand("copy"), document.body.removeChild(e), a && (document.getSelection().removeAllRanges(), document.getSelection().addRange(a))
            },
            H = function () {
                var o = d(c().mark((function o() {
                    return c().wrap((function (o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return o.abrupt("return", i.a.post("/dep", {
                                    href: window.location.href
                                }));
                            case 1:
                            case "end":
                                return o.stop()
                        }
                    }), o)
                })));
                return function () {
                    return o.apply(this, arguments)
                }
            }()
    },
    E8Bj: function (o, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return p
        })), a.d(e, "c", (function () {
            return h
        }));
        var t = a("q1tI"),
            s = a.n(t),
            r = a("qnYv");

        function l(o) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
                return typeof o
            } : function (o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
            })(o)
        }

        function n() {
            return (n = Object.assign ? Object.assign.bind() : function (o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = arguments[e];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (o[t] = a[t])
                }
                return o
            }).apply(this, arguments)
        }

        function i() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            i = function () {
                return o
            };
            var o = {},
                e = Object.prototype,
                a = e.hasOwnProperty,
                t = "function" == typeof Symbol ? Symbol : {},
                s = t.iterator || "@@iterator",
                r = t.asyncIterator || "@@asyncIterator",
                n = t.toStringTag || "@@toStringTag";

            function m(o, e, a) {
                return Object.defineProperty(o, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), o[e]
            }
            try {
                m({}, "")
            } catch (o) {
                m = function (o, e, a) {
                    return o[e] = a
                }
            }

            function c(o, e, a, t) {
                var s = e && e.prototype instanceof p ? e : p,
                    r = Object.create(s.prototype),
                    l = new z(t || []);
                return r._invoke = function (o, e, a) {
                    var t = "suspendedStart";
                    return function (s, r) {
                        if ("executing" === t) throw new Error("Generator is already running");
                        if ("completed" === t) {
                            if ("throw" === s) throw r;
                            return S()
                        }
                        for (a.method = s, a.arg = r;;) {
                            var l = a.delegate;
                            if (l) {
                                var n = B(l, a);
                                if (n) {
                                    if (n === d) continue;
                                    return n
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === t) throw t = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            t = "executing";
                            var i = u(o, e, a);
                            if ("normal" === i.type) {
                                if (t = a.done ? "completed" : "suspendedYield", i.arg === d) continue;
                                return {
                                    value: i.arg,
                                    done: a.done
                                }
                            }
                            "throw" === i.type && (t = "completed", a.method = "throw", a.arg = i.arg)
                        }
                    }
                }(o, a, l), r
            }

            function u(o, e, a) {
                try {
                    return {
                        type: "normal",
                        arg: o.call(e, a)
                    }
                } catch (o) {
                    return {
                        type: "throw",
                        arg: o
                    }
                }
            }
            o.wrap = c;
            var d = {};

            function p() {}

            function h() {}

            function k() {}
            var g = {};
            m(g, s, (function () {
                return this
            }));
            var b = Object.getPrototypeOf,
                v = b && b(b(A([])));
            v && v !== e && a.call(v, s) && (g = v);
            var f = k.prototype = p.prototype = Object.create(g);

            function y(o) {
                ["next", "throw", "return"].forEach((function (e) {
                    m(o, e, (function (o) {
                        return this._invoke(e, o)
                    }))
                }))
            }

            function w(o, e) {
                var t;
                this._invoke = function (s, r) {
                    function n() {
                        return new e((function (t, n) {
                            ! function t(s, r, n, i) {
                                var m = u(o[s], o, r);
                                if ("throw" !== m.type) {
                                    var c = m.arg,
                                        d = c.value;
                                    return d && "object" == l(d) && a.call(d, "__await") ? e.resolve(d.__await).then((function (o) {
                                        t("next", o, n, i)
                                    }), (function (o) {
                                        t("throw", o, n, i)
                                    })) : e.resolve(d).then((function (o) {
                                        c.value = o, n(c)
                                    }), (function (o) {
                                        return t("throw", o, n, i)
                                    }))
                                }
                                i(m.arg)
                            }(s, r, t, n)
                        }))
                    }
                    return t = t ? t.then(n, n) : n()
                }
            }

            function B(o, e) {
                var a = o.iterator[e.method];
                if (void 0 === a) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (o.iterator.return && (e.method = "return", e.arg = void 0, B(o, e), "throw" === e.method)) return d;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var t = u(a, o.iterator, e.arg);
                if ("throw" === t.type) return e.method = "throw", e.arg = t.arg, e.delegate = null, d;
                var s = t.arg;
                return s ? s.done ? (e[o.resultName] = s.value, e.next = o.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, d) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
            }

            function U(o) {
                var e = {
                    tryLoc: o[0]
                };
                1 in o && (e.catchLoc = o[1]), 2 in o && (e.finallyLoc = o[2], e.afterLoc = o[3]), this.tryEntries.push(e)
            }

            function C(o) {
                var e = o.completion || {};
                e.type = "normal", delete e.arg, o.completion = e
            }

            function z(o) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], o.forEach(U, this), this.reset(!0)
            }

            function A(o) {
                if (o) {
                    var e = o[s];
                    if (e) return e.call(o);
                    if ("function" == typeof o.next) return o;
                    if (!isNaN(o.length)) {
                        var t = -1,
                            r = function e() {
                                for (; ++t < o.length;)
                                    if (a.call(o, t)) return e.value = o[t], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return r.next = r
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
            return h.prototype = k, m(f, "constructor", k), m(k, "constructor", h), h.displayName = m(k, n, "GeneratorFunction"), o.isGeneratorFunction = function (o) {
                var e = "function" == typeof o && o.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }, o.mark = function (o) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(o, k) : (o.__proto__ = k, m(o, n, "GeneratorFunction")), o.prototype = Object.create(f), o
            }, o.awrap = function (o) {
                return {
                    __await: o
                }
            }, y(w.prototype), m(w.prototype, r, (function () {
                return this
            })), o.AsyncIterator = w, o.async = function (e, a, t, s, r) {
                void 0 === r && (r = Promise);
                var l = new w(c(e, a, t, s), r);
                return o.isGeneratorFunction(a) ? l : l.next().then((function (o) {
                    return o.done ? o.value : l.next()
                }))
            }, y(f), m(f, n, "Generator"), m(f, s, (function () {
                return this
            })), m(f, "toString", (function () {
                return "[object Generator]"
            })), o.keys = function (o) {
                var e = [];
                for (var a in o) e.push(a);
                return e.reverse(),
                    function a() {
                        for (; e.length;) {
                            var t = e.pop();
                            if (t in o) return a.value = t, a.done = !1, a
                        }
                        return a.done = !0, a
                    }
            }, o.values = A, z.prototype = {
                constructor: z,
                reset: function (o) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !o)
                        for (var e in this) "t" === e.charAt(0) && a.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function () {
                    this.done = !0;
                    var o = this.tryEntries[0].completion;
                    if ("throw" === o.type) throw o.arg;
                    return this.rval
                },
                dispatchException: function (o) {
                    if (this.done) throw o;
                    var e = this;

                    function t(a, t) {
                        return l.type = "throw", l.arg = o, e.next = a, t && (e.method = "next", e.arg = void 0), !!t
                    }
                    for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                        var r = this.tryEntries[s],
                            l = r.completion;
                        if ("root" === r.tryLoc) return t("end");
                        if (r.tryLoc <= this.prev) {
                            var n = a.call(r, "catchLoc"),
                                i = a.call(r, "finallyLoc");
                            if (n && i) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            } else if (n) {
                                if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                            } else {
                                if (!i) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (o, e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var s = this.tryEntries[t];
                        if (s.tryLoc <= this.prev && a.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                            var r = s;
                            break
                        }
                    }
                    r && ("break" === o || "continue" === o) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                    var l = r ? r.completion : {};
                    return l.type = o, l.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, d) : this.complete(l)
                },
                complete: function (o, e) {
                    if ("throw" === o.type) throw o.arg;
                    return "break" === o.type || "continue" === o.type ? this.next = o.arg : "return" === o.type ? (this.rval = this.arg = o.arg, this.method = "return", this.next = "end") : "normal" === o.type && e && (this.next = e), d
                },
                finish: function (o) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var a = this.tryEntries[e];
                        if (a.finallyLoc === o) return this.complete(a.completion, a.afterLoc), C(a), d
                    }
                },
                catch: function (o) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var a = this.tryEntries[e];
                        if (a.tryLoc === o) {
                            var t = a.completion;
                            if ("throw" === t.type) {
                                var s = t.arg;
                                C(a)
                            }
                            return s
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (o, e, a) {
                    return this.delegate = {
                        iterator: A(o),
                        resultName: e,
                        nextLoc: a
                    }, "next" === this.method && (this.arg = void 0), d
                }
            }, o
        }

        function m(o, e, a, t, s, r, l) {
            try {
                var n = o[r](l),
                    i = n.value
            } catch (o) {
                return void a(o)
            }
            n.done ? e(i) : Promise.resolve(i).then(t, s)
        }

        function c(o) {
            return function () {
                var e = this,
                    a = arguments;
                return new Promise((function (t, s) {
                    var r = o.apply(e, a);

                    function l(o) {
                        m(r, t, s, l, n, "next", o)
                    }

                    function n(o) {
                        m(r, t, s, l, n, "throw", o)
                    }
                    l(void 0)
                }))
            }
        }

        function u(o, e) {
            for (var a = 0; a < e.length; a++) {
                var t = e[a];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(o, t.key, t)
            }
        }
        var d = function () {
                function o() {
                    ! function (o, e) {
                        if (!(o instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), this.data = null, this.loading = !0, this.getLoggedIn()
                }
                var e, a, t, s, l;
                return e = o, (a = [{
                    key: "getData",
                    value: (l = c(i().mark((function o() {
                        return i().wrap((function (o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (!this.loading) {
                                        o.next = 3;
                                        break
                                    }
                                    return o.next = 3, this.getLoggedIn();
                                case 3:
                                    return o.abrupt("return", this.data);
                                case 4:
                                case "end":
                                    return o.stop()
                            }
                        }), o, this)
                    }))), function () {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "getLoggedIn",
                    value: (s = c(i().mark((function o() {
                        var e = this;
                        return i().wrap((function (o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    if (this.loading = !0, "undefined" == typeof window) {
                                        o.next = 3;
                                        break
                                    }
                                    return o.abrupt("return", r.a.get("/api/users/verify-session").then((function (o) {
                                        e.data = o.data, e.loading = !1
                                    })).catch((function () {
                                        e.data = null, e.loading = !1
                                    })));
                                case 3:
                                    this.data = null, this.loading = !1;
                                case 5:
                                case "end":
                                    return o.stop()
                            }
                        }), o, this)
                    }))), function () {
                        return s.apply(this, arguments)
                    })
                }]) && u(e.prototype, a), t && u(e, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), o
            }(),
            p = Object(t.createContext)(null),
            h = function (o) {
                return function (e) {
                    return s.a.createElement(p.Consumer, null, (function (a) {
                        return s.a.createElement(o, n({}, e, {
                            user: a
                        }))
                    }))
                }
            };
        e.b = d
    },
    LAIx: function (o, e, a) {
        "use strict";
        var t = a("MDrD");
        e.a = function (o) {
            return o.includes("#") ? "#0bc2cf" : t.a[o].color
        }
    },
    MDrD: function (o, e, a) {
        "use strict";
        var t = a("Y018"),
            s = a("liux"),
            r = a("O+AO"),
            l = a("5Kqo"),
            n = a("cQOM"),
            i = a("/9rF");

        function m(o, e) {
            var a = Object.keys(o);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(o);
                e && (t = t.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable
                }))), a.push.apply(a, t)
            }
            return a
        }

        function c(o) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(a), !0).forEach((function (e) {
                    u(o, e, a[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function (e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
                }))
            }
            return o
        }

        function u(o, e, a) {
            return e in o ? Object.defineProperty(o, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[e] = a, o
        }
        var d = c(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c({}, s.a), n.a), r.a), i.a), t.a), l.a), {
            "Two of Spades": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/twoOfSpades.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Dueling Deuces",
                color: "#414042"
            },
            "Eat Me": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620676285/Blooks/eat.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Hungry Heroes",
                color: "#d58c55"
            },
            "Drink Me": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620676285/Blooks/drink.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Potion Power",
                color: "#dd7399"
            },
            Alice: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/alice.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "Wonderland",
                color: "#4cc9f5"
            },
            "Queen of Hearts": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/queenOfHearts.svg",
                set: "Wonderland",
                rarity: "Uncommon",
                teamName: "❤️❤️❤️",
                color: "#d62027"
            },
            Dormouse: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/dormouse.svg",
                set: "Wonderland",
                rarity: "Rare",
                teamName: "Short and Stout",
                color: "#89d6f8"
            },
            "White Rabbit": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/whiteRabbit.svg",
                set: "Wonderland",
                rarity: "Rare",
                teamName: "Classy Classmates",
                color: "#ffcd05"
            },
            "Cheshire Cat": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080264/Blooks/cheshireCat.svg",
                set: "Wonderland",
                rarity: "Rare",
                teamName: "Cool Cats",
                color: "#dd7399"
            },
            Caterpillar: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1581831553/Blooks/caterpillar.svg",
                set: "Wonderland",
                rarity: "Epic",
                teamName: "Caterpillar Cuties",
                color: "#00c0f3"
            },
            "Mad Hatter": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/madHatter.svg",
                set: "Wonderland",
                rarity: "Epic",
                teamName: "Goofy Gurus",
                color: "#914f93"
            },
            "King of Hearts": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582080266/Blooks/kingOfHearts.svg",
                set: "Wonderland",
                rarity: "Legendary",
                teamName: "The Royals",
                color: "#c62127"
            }
        }), {
            Toast: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/toast.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Toasty Teammates",
                color: "#e9a058"
            },
            Cereal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/cereal.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Fruity Friends",
                color: "#2fa04a"
            },
            Yogurt: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/yogurt.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Yogurt Youngins",
                color: "#00aeef"
            },
            "Breakfast Combo": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/breakfastCombo.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Combo Cooks",
                color: "#c3d8ea"
            },
            "Orange Juice": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483099/Blooks/orangeJuice.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "OJ OG's",
                color: "#f7941d"
            },
            Milk: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/milk.svg",
                set: "Breakfast",
                rarity: "Uncommon",
                teamName: "Got Milk?",
                color: "#77c6e2"
            },
            Waffle: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483099/Blooks/waffle.svg",
                set: "Breakfast",
                rarity: "Rare",
                teamName: "Holey Pancakes",
                color: "#f9a241"
            },
            Pancakes: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483099/Blooks/pancakes.svg",
                set: "Breakfast",
                rarity: "Rare",
                teamName: "Flat Waffles",
                color: "#f9a241"
            },
            "French Toast": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1584483097/Blooks/frenchToast.svg",
                set: "Breakfast",
                rarity: "Epic",
                teamName: "Bonjour Boomers",
                color: "#f9a241"
            },
            Pizza: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1599952272/Blooks/pizza.svg",
                set: "Breakfast",
                rarity: "Epic",
                teamName: "Pizza Popstars",
                color: "#fdb913"
            },
            Sandwich: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/sandwich.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1599952272/Blooks/sandwich.svg",
                set: "Breakfast",
                rarity: "Epic",
                teamName: "Super Sandwiches",
                color: "#8cbd40"
            }
        }), {
            Earth: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/earth.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Earthlings",
                color: "#416eb5"
            },
            Meteor: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/meteor.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Meteorites",
                color: "#c68c3c"
            },
            Stars: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003833/Blooks/stars.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Shooting Stars",
                color: "#19184d"
            },
            Alien: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613004231/Blooks/alien.svg",
                set: "Space",
                rarity: "Uncommon",
                teamName: "Awesome Aliens",
                color: "#8dc63f"
            },
            Planet: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003832/Blooks/planet.svg",
                set: "Space",
                rarity: "Rare",
                teamName: "Galactic Warriors",
                color: "#9dc6ea"
            },
            UFO: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613004088/Blooks/UFO.svg",
                set: "Space",
                rarity: "Rare",
                teamName: "Unidentified Students",
                color: "#a15095"
            },
            Spaceship: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003833/Blooks/spaceship.svg",
                set: "Space",
                rarity: "Epic",
                teamName: "We Have a Problem",
                color: "#ffcb29"
            },
            Astronaut: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/astronaut.svg",
                set: "Space",
                rarity: "Legendary",
                teamName: "Astro Aviators",
                color: "#9bd4ee"
            },
            "Red Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/redAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003832/Blooks/redAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Red Crewmates",
                color: "#ee2324"
            },
            "Blue Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/blueAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Blue Crewmates",
                color: "#2867b1"
            },
            "Green Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/greenAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003832/Blooks/greenAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Green Crewmates",
                color: "#197b42"
            },
            "Pink Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/pinkAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/pinkAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Pink Crewmates",
                color: "#e573ac"
            },
            "Orange Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/orangeAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/orangeAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Orange Crewmates",
                color: "#f79320"
            },
            "Yellow Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/yellowAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003833/Blooks/yellowAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Yellow Crewmates",
                color: "#edcb1f"
            },
            "Black Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blackAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003835/Blooks/blackAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Black Crewmates",
                color: "#413f56"
            },
            "Purple Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/purpleAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Purple Crewmates",
                color: "#9068ad"
            },
            "Brown Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/brownAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/brownAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Brown Crewmates",
                color: "#9e5a3a"
            },
            "Cyan Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/cyanAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/cyanAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Cyan Crewmates",
                color: "#74cbcb"
            },
            "Lime Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/limeAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003834/Blooks/limeAstronaut.svg",
                set: "Space",
                rarity: "Chroma",
                teamName: "Lime Crewmates",
                color: "#61b446"
            },
            "Tim the Alien": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/timTheAlien.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1627827707/Blooks/timTheAlien.svg",
                set: "Space",
                rarity: "Mystical",
                teamName: "Tim's Friends",
                color: "#8dc63f"
            },
            "Rainbow Astronaut": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1613003831/Blooks/purpleAstronaut.svg",
                set: "Space",
                rarity: "Mystical",
                teamName: "RAINBOW",
                color: "#9068ad"
            }
        }), {
            "Lil Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/lilBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "Lil Bots",
                color: "#3e564a"
            },
            "Lovely Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/lovelyBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "Lovely Leaders",
                color: "#f179af"
            },
            "Angry Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/angryBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "Evil Geniuses",
                color: "#f1613a"
            },
            "Happy Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/happyBot.svg",
                set: "Bot",
                rarity: "Uncommon",
                teamName: "The Calculators",
                color: "#51ba6b"
            },
            Watson: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677388/Blooks/watson.svg",
                set: "Bot",
                rarity: "Rare",
                teamName: "Sophistication",
                color: "#d69b5a"
            },
            "Buddy Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/buddyBot.svg",
                set: "Bot",
                rarity: "Rare",
                teamName: "Best Buddies",
                color: "#9dc6ea"
            },
            "Brainy Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677386/Blooks/brainyBot.svg",
                set: "Bot",
                rarity: "Epic",
                teamName: "Big Brain Bots",
                color: "#9ecf7a"
            },
            "Mega Bot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1620677388/Blooks/megaBot.svg",
                set: "Bot",
                rarity: "Legendary",
                teamName: "THE MEGA BOTS",
                color: "#d71f27"
            }
        }), {
            "Old Boot": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/oldBoot.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Da Boots",
                color: "#995b3c"
            },
            Jellyfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/jellyfish.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Jelly Jumpers",
                color: "#c385b9"
            },
            Clownfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/clownfish.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Nemo Extras",
                color: "#f7941d"
            },
            Frog: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/frog.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Hippity Hoppers",
                color: "#a7d054"
            },
            Crab: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/crab.svg",
                set: "Aquatic",
                rarity: "Uncommon",
                teamName: "Cool Claws",
                color: "#cf1f3d"
            },
            Pufferfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/pufferFish.svg",
                set: "Aquatic",
                rarity: "Rare",
                teamName: "TEAM BIG",
                color: "#ddc4a6"
            },
            Blobfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/blobfish.svg",
                set: "Aquatic",
                rarity: "Rare",
                teamName: "blob blob blob",
                color: "#f3c1da"
            },
            Octopus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/octopus.svg",
                set: "Aquatic",
                rarity: "Rare",
                teamName: "Team 8",
                color: "#a15095"
            },
            Narwhal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/narwhal.svg",
                set: "Aquatic",
                rarity: "Epic",
                teamName: "NARWHALLLLL",
                color: "#dae6f5"
            },
            "Baby Shark": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/babyShark.svg",
                set: "Aquatic",
                rarity: "Legendary",
                teamName: "BABY SHARK",
                color: "#5588b7"
            },
            Megalodon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/megalodon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/megalodon.svg",
                set: "Aquatic",
                rarity: "Legendary",
                teamName: "Megan's the Name",
                color: "#3d5d80"
            },
            "Rainbow Jellyfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowJellyfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowJellyfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Underwater Disco",
                color: "#c9d6ed"
            },
            "Blizzard Clownfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/blizzardClownfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/blizzardClownfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Winter Circus",
                color: "#dae6f5"
            },
            "Lovely Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lovelyFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/lovelyFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Cute Companions",
                color: "#f38db6"
            },
            "Lucky Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/luckyFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1647451022/Blooks/luckyFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Lucky Leapers",
                color: "#4eb151"
            },
            "Spring Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/springFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1649909367/Blooks/springFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Spring Spirit",
                color: "#f2bd8c"
            },
            "Poison Dart Frog": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/poisonDartFrog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956580/Blooks/poisonDartFrog.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "TOXIC HAZARD",
                color: "#ffcb29"
            },
            "Lemon Crab": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lemonCrab.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956576/Blooks/lemonCrab.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Citrus Claws",
                color: "#f7d959"
            },
            "Pirate Pufferfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/piratePufferfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1641935517/Blooks/piratePufferfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Perfect Pirates",
                color: "#8b5aa5"
            },
            "Donut Blobfish": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/donutBlobfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1641935517/Blooks/donutBlobfish.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Donut Mess Up",
                color: "#f3c1da"
            },
            "Crimson Octopus": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/crimsonOctopus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956578/Blooks/crimsonOctopus.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Red Team 8",
                color: "#b3303b"
            },
            "Rainbow Narwhal": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowNarwhal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1628956581/Blooks/rainbowNarwhal.svg",
                set: "Aquatic",
                rarity: "Chroma",
                teamName: "Sea Unicorns",
                color: "#cfe8e9"
            }
        }), {
            Panda: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/panda.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835595/Blooks/panda.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Prime Pandas",
                color: "#2f2c38"
            },
            Sloth: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/sloth.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/sloth.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Silly Sloths",
                color: "#765b46"
            },
            Tenrec: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/tenrec.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/tenrec.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Troubling Tenrecs",
                color: "#ffcb29"
            },
            Flamingo: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/flamingo.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/flamingo.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Pink And Proud",
                color: "#f38db6"
            },
            Zebra: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/zebra.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/zebra.svg",
                set: "Safari",
                rarity: "Uncommon",
                teamName: "Super Stripes",
                color: "#2f2c38"
            },
            Elephant: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/elephant.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/elephant.svg",
                set: "Safari",
                rarity: "Rare",
                teamName: "Erudite Elephants",
                color: "#bac4e4"
            },
            Lemur: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lemur.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/lemur.svg",
                set: "Safari",
                rarity: "Rare",
                teamName: "Leaping Lemurs",
                color: "#aeaba7"
            },
            Peacock: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/peacock.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/peacock.svg",
                set: "Safari",
                rarity: "Rare",
                teamName: "Fearless Feathers",
                color: "#2b3990"
            },
            Chameleon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/chameleon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/chameleon.svg",
                set: "Safari",
                rarity: "Epic",
                teamName: "Cool Chameleons",
                color: "#8dc63f"
            },
            Lion: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lion.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/lion.svg",
                set: "Safari",
                rarity: "Legendary",
                teamName: "The Pride",
                color: "#f47e20"
            },
            "Rainbow Panda": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/rainbowPanda.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835594/Blooks/rainbowPanda.svg",
                set: "Safari",
                rarity: "Chroma",
                teamName: "The Rainbows",
                color: "#2f2c38"
            },
            "White Peacock": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/whitePeacock.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835592/Blooks/whitePeacock.svg",
                set: "Safari",
                rarity: "Chroma",
                teamName: "Fast Feathers",
                color: "#69c1d3"
            },
            "Tiger Zebra": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/tigerZebra.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1643835596/Blooks/tigerZebra.svg",
                set: "Safari",
                rarity: "Chroma",
                teamName: "Agent Zs",
                color: "#f18221"
            }
        }), {
            Amber: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/amber.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/amber.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Ambitious Ambers",
                color: "#f7913f"
            },
            "Dino Egg": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoEgg.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/dinoEgg.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Eggcellence",
                color: "#d69b5a"
            },
            "Dino Fossil": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoFossil.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/dinoFossil.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Fighting Fossils",
                color: "#a46735"
            },
            Stegosaurus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/stegosaurus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/stegosaurus.svg",
                set: "Dino",
                rarity: "Uncommon",
                teamName: "Hearty Herbivores",
                color: "#6c9355"
            },
            Velociraptor: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/velociraptor.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433848/Blooks/velociraptor.svg",
                set: "Dino",
                rarity: "Rare",
                teamName: "Prehistorics",
                color: "#cf1f3d"
            },
            Brontosaurus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/brontosaurus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433846/Blooks/brontosaurus.svg",
                set: "Dino",
                rarity: "Rare",
                teamName: "Big Giraffes",
                color: "#416eb5"
            },
            Triceratops: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/triceratops.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433848/Blooks/triceratops.svg",
                set: "Dino",
                rarity: "Epic",
                teamName: "Daring Dinos",
                color: "#f1613a"
            },
            "Tyrannosaurus Rex": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/tyrannosaurusRex.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1650433848/Blooks/tyrannosaurusRex.svg",
                set: "Dino",
                rarity: "Legendary",
                teamName: "The Terror",
                color: "#6c9355"
            }
        }), {
            "Ice Bat": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/iceBat.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "Frozen Wings",
                color: "#295eb6"
            },
            "Ice Bug": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceBug.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061339/Blooks/iceBug.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "Bold Bugs",
                color: "#337ae2"
            },
            "Ice Elemental": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceElemental.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/iceElemental.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "ICED",
                color: "#58c7f0"
            },
            "Rock Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/rockMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061337/Blooks/rockMonster.svg",
                set: "Ice Monster",
                rarity: "Uncommon",
                teamName: "Ready Rocks",
                color: "#5a617f"
            },
            Dink: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/dink.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/dink.svg",
                set: "Ice Monster",
                rarity: "Rare",
                teamName: "Dink Donk 1",
                color: "#8f78a5"
            },
            Donk: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/donk.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/donk.svg",
                set: "Ice Monster",
                rarity: "Rare",
                teamName: "Dink Donk 2",
                color: "#677c9e"
            },
            "Bush Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/bushMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/bushMonster.svg",
                set: "Ice Monster",
                rarity: "Epic",
                teamName: "Brave Bushes",
                color: "#44c649"
            },
            Yeti: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/yeti.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/yeti.svg",
                set: "Ice Monster",
                rarity: "Legendary",
                teamName: "Everest",
                color: "#5a81c5"
            },
            "Ice Slime": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceSlime.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/iceSlime.svg",
                set: "Ice Monster",
                rarity: "Chroma",
                teamName: "Slip n Slide",
                color: "#42b7ea"
            },
            "Frozen Fossil": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/frozenFossil.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061338/Blooks/frozenFossil.svg",
                set: "Ice Monster",
                rarity: "Chroma",
                teamName: "Ice Age",
                color: "#9ed2ef"
            },
            "Ice Crab": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/iceMonsters/iceCrab.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1663061336/Blooks/iceCrab.svg",
                set: "Ice Monster",
                rarity: "Chroma",
                teamName: "ICE ICE BABY",
                color: "#3ea8cf"
            }
        }), {
            "Snow Globe": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/snowGlobe.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Globetrotters",
                color: "#10afd1"
            },
            "Holiday Gift": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayGift.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/holidayGift.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Generous Givers",
                color: "#4ab96d"
            },
            "Hot Chocolate": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/hotChocolate.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/hotChocolate.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Cocoa Coziness",
                color: "#663723"
            },
            "Holiday Wreath": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575848338/Blooks/holidayWreath.svg",
                set: "Blizzard",
                rarity: "Uncommon",
                teamName: "Wreath Wreckers",
                color: "#6c9355"
            },
            "Gingerbread Man": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadMan.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575604963/Blooks/gingerbreadMan.svg",
                set: "Blizzard",
                rarity: "Rare",
                teamName: "Cookie Crunchers",
                color: "#995b3c"
            },
            "Gingerbread House": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadHouse.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575605860/Blooks/gingerbreadHouse.svg",
                set: "Blizzard",
                rarity: "Rare",
                teamName: "Healthy Houses",
                color: "#995b3c"
            },
            Snowman: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575604963/Blooks/snowman.svg",
                set: "Blizzard",
                rarity: "Epic",
                teamName: "Summer Puddles",
                color: "#7ca1d5"
            },
            "Santa Claus": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1575606016/Blooks/santaClaus.svg",
                set: "Blizzard",
                rarity: "Legendary",
                teamName: "Santa's Squad",
                color: "#d62027"
            },
            "Frost Wreath": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1607304954/Blooks/frostWreath.svg",
                set: "Blizzard",
                rarity: "Chroma",
                teamName: "TEAM FREEZE",
                color: "#2086df"
            },
            "Tropical Globe": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1607304954/Blooks/tropicalGlobe.svg",
                set: "Blizzard",
                rarity: "Chroma",
                teamName: "WARM HUGS",
                color: "#fb7c2f"
            }
        }), {
            Pumpkin: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/pumpkin.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "Pumpkin Smashers",
                color: "#f7941d"
            },
            "Swamp Monster": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/swampMonster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/swampMonster.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "Swamp Things",
                color: "#2fa04a"
            },
            Frankenstein: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/frankenstein.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/frankenstein.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "The Monsters",
                color: "#56884b"
            },
            Vampire: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/vampire.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/vampire.svg",
                set: "Spooky",
                rarity: "Uncommon",
                teamName: "Valiant Vampires",
                color: "#a15095"
            },
            Zombie: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/zombie.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168912/Blooks/zombie.svg",
                set: "Spooky",
                rarity: "Rare",
                teamName: "Walking Dead",
                color: "#80a55d"
            },
            Mummy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/mummy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/mummy.svg",
                set: "Spooky",
                rarity: "Rare",
                teamName: "Motivated Mummies",
                color: "#e8d8c7"
            },
            Werewolf: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168912/Blooks/werewolf.svg",
                set: "Spooky",
                rarity: "Epic",
                teamName: "Werewolf Warriors",
                color: "#594a42"
            },
            Ghost: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/ghost.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1601168910/Blooks/ghost.svg",
                set: "Spooky",
                rarity: "Legendary",
                teamName: "BOO!",
                color: "#c2def4"
            },
            "Haunted Pumpkin": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1641935071/Blooks/hauntedPumpkin.svg",
                set: "Spooky",
                rarity: "Chroma",
                teamName: "Haunted Helpers",
                color: "#939385"
            },
            "Spooky Pumpkin": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1603679635/Blooks/spookyPumpkin.svg",
                set: "Spooky",
                rarity: "Chroma",
                teamName: "Ghostly Geniuses",
                color: "#66f59b"
            },
            "Spooky Mummy": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1603679635/Blooks/spookyMummy.svg",
                set: "Spooky",
                rarity: "Chroma",
                teamName: "Spooky 'n' Scary",
                color: "#66f59b"
            },
            "Spooky Ghost": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyGhost.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1603684063/Blooks/spookyGhost.svg",
                set: "Spooky",
                rarity: "Mystical",
                teamName: "Spooksters",
                color: "#66f59b"
            }
        }), {
            "Light Blue": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Blooket Buds",
                color: "#0bc2cf"
            },
            Black: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blackBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095363/Blooks/colors/blackBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Black Team",
                color: "#3a3a3a"
            },
            Red: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/redBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/redBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Red Team",
                color: "#d62728"
            },
            Purple: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/purpleBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/purpleBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Purple Team",
                color: "#9a49aa"
            },
            Pink: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/pinkBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095358/Blooks/colors/pinkBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Pink Team",
                color: "#e377c2"
            },
            Orange: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/orangeBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095357/Blooks/colors/orangeBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Orange Team",
                color: "#ff7f0f"
            },
            Lime: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/limeBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095356/Blooks/colors/limeBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Lime Team",
                color: "#b3dc23"
            },
            Green: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/greenBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1593095354/Blooks/colors/greenBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Green Team",
                color: "#2ca02c"
            },
            Teal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tealBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135104/Blooks/colors/tealBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Teal Team",
                color: "#007788"
            },
            Tan: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tanBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/tanBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Tan Team",
                color: "#d2b48c"
            },
            Maroon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/maroonBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/maroonBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Maroon Team",
                color: "#800000"
            },
            Gray: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/grayBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/grayBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Gray Team",
                color: "#999999"
            },
            Mint: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/mintBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/mintBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Mint Team",
                color: "#aaf0d1"
            },
            Salmon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/salmonColorBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135102/Blooks/colors/salmonColorBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Salmon Team",
                color: "#fa8072"
            },
            Burgandy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/burgandyBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135101/Blooks/colors/burgandyBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Burgandy Team",
                color: "#99254d"
            },
            "Baby Blue": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/babyBlueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/babyBlueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Baby Blue Team",
                color: "#99ccff"
            },
            Dust: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dustBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dustBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Dust Team",
                color: "#999966"
            },
            Brown: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/brownBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/brownBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Brown Team",
                color: "#86592d"
            },
            "Dull Blue": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dullBlueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/dullBlueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Dim Blue Team",
                color: "#666699"
            },
            Yellow: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/yellowBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/yellowBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Yellow Team",
                color: "#ffff4d"
            },
            Blue: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blueBlook.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1594135100/Blooks/colors/blueBlook.svg",
                set: "Color",
                rarity: "Common",
                teamName: "Blue Team",
                color: "#005ce6"
            }
        });
        e.a = d
    },
    "O+AO": function (o, e, a) {
        "use strict";
        e.a = {
            Bear: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/bear.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Bear Necessities",
                color: "#995b3c"
            },
            Moose: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/moose.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Moose Caboose",
                color: "#995b3c"
            },
            Fox: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/fox.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Swifty Swipers",
                color: "#f49849"
            },
            Raccoon: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/raccoon.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Trash Pandas",
                color: "#6d6e71"
            },
            Squirrel: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582775344/Blooks/squirrel.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Nutty Buddies",
                color: "#d25927"
            },
            Owl: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/owl.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Hooooooooo",
                color: "#594a42"
            },
            Hedgehog: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556832316/Blooks/hedgehog.svg",
                set: "Forest Animal",
                rarity: "Common",
                teamName: "Spikey Friends",
                color: "#3f312b"
            }
        }
    },
    Y018: function (o, e, a) {
        "use strict";
        e.a = {
            "Snowy Owl": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/snowyOwl.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Kool Kids",
                color: "#feda3f"
            },
            "Polar Bear": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/polarBear.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Snowy Students",
                color: "#7ca1d5"
            },
            "Arctic Fox": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticFox.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Chilly Chosen",
                color: "#7ca1d5"
            },
            "Baby Penguin": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/babyPenguin.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Party Penguins",
                color: "#414042"
            },
            Penguin: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582775344/Blooks/penguin.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Better Birds",
                color: "#fb8640"
            },
            "Arctic Hare": {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticHare.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Arctic Achievers",
                color: "#7ca1d5"
            },
            Seal: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1566679726/Blooks/seal.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Super Seals",
                color: "#7ca1d5"
            },
            Walrus: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1582775344/Blooks/walrus.svg",
                set: "Arctic Animal",
                rarity: "Common",
                teamName: "Wordy Walruses",
                color: "#7d4f33"
            }
        }
    },
    cQOM: function (o, e, a) {
        "use strict";
        e.a = {
            Dog: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/dog.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Diligent Doggos",
                color: "#995b3c"
            },
            Cat: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/cat.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Meow Mates",
                color: "#f49849"
            },
            Rabbit: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831935/Blooks/rabbit.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Fluffy Bunnies",
                color: "#e7bf9a"
            },
            Goldfish: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/goldfish.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Pretty Fishies",
                color: "#f18221"
            },
            Hamster: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/hamster.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "HAMSTA TIME",
                color: "#ce9176"
            },
            Turtle: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831935/Blooks/turtle.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Shell Shocked",
                color: "#619a3c"
            },
            Kitten: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/kitten.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Purrfect People",
                color: "#58595b"
            },
            Puppy: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556831934/Blooks/puppy.svg",
                set: "Pet",
                rarity: "Common",
                teamName: "Super Puppers",
                color: "#414042"
            }
        }
    },
    fGzD: function (o, e, a) {
        "use strict";
        a.d(e, "b", (function () {
            return l
        })), a.d(e, "a", (function () {
            return n
        }));
        var t = a("wd/R"),
            s = a.n(t),
            r = {
                Monday: "Pink Astronaut",
                Tuesday: "Yellow Astronaut",
                Wednesday: "Black Astronaut",
                Thursday: "Orange Astronaut",
                Friday: "Red Astronaut",
                Saturday: "Brown Astronaut",
                Sunday: "Green Astronaut"
            },
            l = function (o) {
                return "Medieval" === o ? [
                    ["Elf", 13.4],
                    ["Witch", 13.4],
                    ["Wizard", 13.4],
                    ["Fairy", 13.4],
                    ["Slime Monster", 13.4],
                    ["Jester", 9],
                    ["Dragon", 9],
                    ["Queen", 9],
                    ["Unicorn", 5],
                    ["King", 1]
                ] : "Blizzard" === o ? [
                    ["Snow Globe", 17.75],
                    ["Holiday Gift", 17.75],
                    ["Hot Chocolate", 17.75],
                    ["Holiday Wreath", 17.75],
                    ["Gingerbread Man", 11.45],
                    ["Gingerbread House", 11.45],
                    ["Snowman", 5.05],
                    ["Santa Claus", 1],
                    ["Frost Wreath", .03],
                    ["Tropical Globe", .02]
                ] : "Wonderland" === o ? [
                    ["Two of Spades", 15.2],
                    ["Eat Me", 15],
                    ["Drink Me", 15],
                    ["Alice", 15],
                    ["Queen of Hearts", 15],
                    ["Dormouse", 6.5],
                    ["White Rabbit", 6.5],
                    ["Cheshire Cat", 6.5],
                    ["Caterpillar", 2.5],
                    ["Mad Hatter", 2.5],
                    ["King of Hearts", .3]
                ] : "Breakfast" === o ? [
                    ["Toast", 12.5],
                    ["Cereal", 12.5],
                    ["Yogurt", 12.5],
                    ["Breakfast Combo", 12.5],
                    ["Orange Juice", 12.5],
                    ["Milk", 12.5],
                    ["Waffle", 9],
                    ["Pancakes", 9],
                    ["French Toast", 5],
                    ["Pizza", 2]
                ] : "Spooky" === o ? [
                    ["Pumpkin", 18.5],
                    ["Swamp Monster", 18.5],
                    ["Frankenstein", 18.5],
                    ["Vampire", 18.5],
                    ["Zombie", 10.15],
                    ["Mummy", 10.15],
                    ["Werewolf", 5],
                    ["Ghost", .65],
                    ["Haunted Pumpkin", .05]
                ] : "Space" === o ? [
                    ["Earth", 18.75],
                    ["Meteor", 18.75],
                    ["Stars", 18.75],
                    ["Alien", 18.75],
                    ["Planet", 10],
                    ["UFO", 10],
                    ["Spaceship", 4.5],
                    ["Astronaut", .45],
                    [r[s.a.utc().subtract(5, "hours").format("dddd")], .05]
                ] : "Bot" === o ? [
                    ["Lil Bot", 19.5],
                    ["Lovely Bot", 19.5],
                    ["Angry Bot", 19.5],
                    ["Happy Bot", 19.5],
                    ["Watson", 9],
                    ["Buddy Bot", 9],
                    ["Brainy Bot", 3.7],
                    ["Mega Bot", .3]
                ] : "Aquatic" === o ? [
                    ["Old Boot", 15],
                    ["Jellyfish", 15],
                    ["Clownfish", 15],
                    ["Frog", 15],
                    ["Crab", 15],
                    ["Pufferfish", 6.8],
                    ["Blobfish", 6.8],
                    ["Octopus", 6.8],
                    ["Narwhal", 3.9],
                    ["Baby Shark", .5],
                    ["Megalodon", .2]
                ] : "Safari" === o ? [
                    ["Panda", 15],
                    ["Sloth", 15],
                    ["Tenrec", 15],
                    ["Flamingo", 15],
                    ["Zebra", 15],
                    ["Elephant", 7],
                    ["Lemur", 7],
                    ["Peacock", 7],
                    ["Chameleon", 3.48],
                    ["Lion", .5],
                    ["Rainbow Panda", .02]
                ] : "Dino" === o ? [
                    ["Amber", 19.5],
                    ["Dino Egg", 19.5],
                    ["Dino Fossil", 19.5],
                    ["Stegosaurus", 19.5],
                    ["Velociraptor", 9],
                    ["Brontosaurus", 9],
                    ["Triceratops", 3.7],
                    ["Tyrannosaurus Rex", .3]
                ] : "Ice Monster" === o ? [
                    ["Ice Bat", 19.5],
                    ["Ice Bug", 19.5],
                    ["Ice Elemental", 19.5],
                    ["Rock Monster", 19.5],
                    ["Dink", 8.5],
                    ["Donk", 8.5],
                    ["Bush Monster", 4.5],
                    ["Yeti", .35],
                    ["Ice Slime", .08],
                    ["Frozen Fossil", .05],
                    ["Ice Crab", .02]
                ] : []
            },
            n = {
                Medieval: 15,
                Breakfast: 15,
                Wonderland: 15,
                Space: 20,
                Bot: 20,
                Aquatic: 20,
                Safari: 20,
                Dino: 25,
                "Ice Monster": 25
            }
    },
    liux: function (o, e, a) {
        "use strict";
        e.a = {
            Chick: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Happy Hatchers",
                color: "#ffcd05"
            },
            Chicken: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/chicken.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Early Birds",
                color: "#ed1c24"
            },
            Cow: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/cow.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Udder Chaos",
                color: "#58595b"
            },
            Goat: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/goat.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Goatee OG's",
                color: "#c59a74"
            },
            Horse: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/horse.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Radical Racers",
                color: "#995b3c"
            },
            Pig: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829564/Blooks/pig.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Orderly Oinkers",
                color: "#f6a9cb"
            },
            Sheep: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829564/Blooks/sheep.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Wool Winners",
                color: "#414042"
            },
            Duck: {
                url: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg",
                mediaUrl: "https://media.blooket.com/image/upload/v1556829562/Blooks/duck.svg",
                set: "Farm Animal",
                rarity: "Common",
                teamName: "Quirky Quackers",
                color: "#4ab96d"
            }
        }
    },
    pMTK: function (o, e, a) {
        "use strict";
        e.a = function (o) {
            switch (o) {
                case "Elf":
                case "Witch":
                case "Wizard":
                case "Fairy":
                case "Slime Monster":
                    return "Uncommon";
                case "Jester":
                case "Dragon":
                    return "Rare";
                case "Unicorn":
                    return "Epic";
                case "Queen":
                    return "Rare";
                case "King":
                    return "Legendary";
                case "Agent Owl":
                case "Master Elf":
                    return "Chroma";
                case "Phantom King":
                    return "Mystical";
                case "Snow Globe":
                case "Holiday Gift":
                case "Hot Chocolate":
                case "Holiday Wreath":
                    return "Uncommon";
                case "Gingerbread Man":
                case "Gingerbread House":
                    return "Rare";
                case "Snowman":
                    return "Epic";
                case "Santa Claus":
                    return "Legendary";
                case "Frost Wreath":
                case "Tropical Globe":
                    return "Chroma";
                case "Two of Spades":
                case "Eat Me":
                case "Drink Me":
                case "Alice":
                case "Queen of Hearts":
                    return "Uncommon";
                case "Dormouse":
                case "White Rabbit":
                case "Cheshire Cat":
                    return "Rare";
                case "Caterpillar":
                case "Mad Hatter":
                    return "Epic";
                case "King of Hearts":
                    return "Legendary";
                case "Toast":
                case "Cereal":
                case "Yogurt":
                case "Breakfast Combo":
                case "Orange Juice":
                case "Milk":
                    return "Uncommon";
                case "Waffle":
                case "Pancakes":
                    return "Rare";
                case "French Toast":
                case "Pizza":
                case "Sandwich":
                    return "Epic";
                case "Pumpkin":
                case "Swamp Monster":
                case "Frankenstein":
                case "Vampire":
                    return "Uncommon";
                case "Zombie":
                case "Mummy":
                    return "Rare";
                case "Werewolf":
                    return "Epic";
                case "Ghost":
                    return "Legendary";
                case "Haunted Pumpkin":
                case "Spooky Pumpkin":
                case "Spooky Mummy":
                    return "Chroma";
                case "Spooky Ghost":
                    return "Mystical";
                case "Earth":
                case "Meteor":
                case "Stars":
                case "Alien":
                    return "Uncommon";
                case "Planet":
                case "UFO":
                    return "Rare";
                case "Spaceship":
                    return "Epic";
                case "Astronaut":
                    return "Legendary";
                case "Red Astronaut":
                case "Blue Astronaut":
                case "Green Astronaut":
                case "Pink Astronaut":
                case "Orange Astronaut":
                case "Yellow Astronaut":
                case "Black Astronaut":
                case "Purple Astronaut":
                case "Brown Astronaut":
                case "Cyan Astronaut":
                case "Lime Astronaut":
                    return "Chroma";
                case "Tim the Alien":
                case "Rainbow Astronaut":
                    return "Mystical";
                case "Lil Bot":
                case "Lovely Bot":
                case "Angry Bot":
                case "Happy Bot":
                    return "Uncommon";
                case "Watson":
                case "Buddy Bot":
                    return "Rare";
                case "Brainy Bot":
                    return "Epic";
                case "Mega Bot":
                    return "Legendary";
                case "Old Boot":
                case "Jellyfish":
                case "Clownfish":
                case "Frog":
                case "Crab":
                    return "Uncommon";
                case "Pufferfish":
                case "Blobfish":
                case "Octopus":
                    return "Rare";
                case "Narwhal":
                    return "Epic";
                case "Baby Shark":
                case "Megalodon":
                    return "Legendary";
                case "Rainbow Jellyfish":
                case "Blizzard Clownfish":
                case "Lovely Frog":
                case "Lucky Frog":
                case "Spring Frog":
                case "Poison Dart Frog":
                case "Lemon Crab":
                case "Pirate Pufferfish":
                case "Donut Blobfish":
                case "Crimson Octopus":
                case "Rainbow Narwhal":
                    return "Chroma";
                case "Panda":
                case "Sloth":
                case "Tenrec":
                case "Flamingo":
                case "Zebra":
                    return "Uncommon";
                case "Elephant":
                case "Lemur":
                case "Peacock":
                    return "Rare";
                case "Chameleon":
                    return "Epic";
                case "Lion":
                    return "Legendary";
                case "Rainbow Panda":
                case "White Peacock":
                case "Tiger Zebra":
                    return "Chroma";
                case "Amber":
                case "Dino Egg":
                case "Dino Fossil":
                case "Stegosaurus":
                    return "Uncommon";
                case "Velociraptor":
                case "Brontosaurus":
                    return "Rare";
                case "Triceratops":
                    return "Epic";
                case "Tyrannosaurus Rex":
                    return "Legendary";
                case "Ice Bat":
                case "Ice Bug":
                case "Ice Elemental":
                case "Rock Monster":
                    return "Uncommon";
                case "Dink":
                case "Donk":
                    return "Rare";
                case "Bush Monster":
                    return "Epic";
                case "Yeti":
                    return "Legendary";
                case "Ice Slime":
                case "Frozen Fossil":
                case "Ice Crab":
                    return "Chroma";
                default:
                    return "Common"
            }
        }
    },
    qspi: function (o, e, a) {
        "use strict";
        var t, s, r = a("74sb"),
            l = ["basil", "gold", "crypto"],
            n = function (o) {
                var e = !1;
                l.forEach((function (a) {
                    o.toLowerCase().includes(a) && (e = !0)
                })), e && (Object(r.p)(), window.location.href = "https://www.blooket.com")
            };
        window.alert = n, window.prompt = n, window.confirm = n, t = new URL(window.location.href).hostname, s = !1, ["blooket.com", "packcomputing.com", "localhost", "127.0.0.1"].forEach((function (o) {
                t.endsWith(o) && (s = !0)
            })), s || (window.location.href = "".concat("https://www.blooket.com", "/terms")),
            function () {
                var o = !1;
                window.blooketUtility && (o = !0), localStorage.getItem("blooket-utility") && (o = !0), localStorage.removeItem("blooket-utility"), o && (window.location.href = "".concat("https://www.blooket.com", "/terms")), delete window.blooketUtility, delete window._fetch;
                var e = document.createElement("iframe");
                e.style.display = "none", document.body.appendChild(e);
                var a = e.contentWindow;
                window.fetch = a.fetch, XMLHttpRequest.prototype.open = a.XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.send = a.XMLHttpRequest.prototype.send, String.prototype.concat = a.String.prototype.concat, window.ontouchstart = null, window.onkeydown = null
            }()
    },
    sfIM: function (o, e, a) {
        "use strict";
        e.a = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus"]
    }
});