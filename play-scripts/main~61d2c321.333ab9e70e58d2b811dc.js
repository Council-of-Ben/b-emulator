(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        "1jhB": function(e, t, s) {
            var i = s("jASO");
            "string" == typeof i && (i = [
                [e.i, i, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(i, a);
            i.locals && (e.exports = i.locals)
        },
        "2g0G": function(e, t, s) {
            "use strict";
            var i = s("LHn/"),
                a = {};
            a.meadow = {
                name: "Sunny Meadow",
                img: i.a.defense.basicMap,
                tile: i.a.defense.grassTile,
                particleColor: "#2ecc71",
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                    [2, 0, 1, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 1, 1, 5],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 2],
                    [4, 1, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                    [2, 1, 1, 1, 1, 0, 0, 0, 1, 2],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, a.desert = {
                name: "Lost Desert",
                img: i.a.defense.sandMap,
                tile: i.a.defense.sandTile,
                particleColor: "#daba72",
                tiles: [
                    [0, 2, 0, 0, 2, 0, 0, 0, 0, 0],
                    [4, 1, 1, 1, 0, 0, 1, 1, 1, 2],
                    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
                    [0, 0, 2, 1, 1, 1, 1, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 2, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 2, 0, 0, 0, 0, 0, 2, 0],
                    [2, 1, 0, 1, 1, 1, 1, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 1, 0, 2, 0],
                    [0, 1, 1, 1, 0, 0, 1, 1, 1, 5],
                    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0]
                ]
            }, a.mine = {
                name: "Abandoned Mine",
                img: i.a.defense.mineMap,
                tile: i.a.defense.stoneTile,
                particleColor: "#89a4a6",
                tiles: [
                    [0, 2, 0, 4, 0, 5, 2, 0, 0, 2],
                    [0, 0, 0, 1, 0, 1, 0, 0, 2, 2],
                    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                    [2, 1, 1, 1, 0, 1, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 0, 2, 1, 0, 0],
                    [0, 1, 1, 1, 0, 1, 1, 1, 2, 0],
                    [0, 2, 0, 1, 0, 1, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0, 1, 1, 1, 0, 2],
                    [0, 1, 0, 2, 0, 0, 0, 1, 0, 0],
                    [2, 1, 1, 1, 1, 1, 1, 1, 0, 2],
                    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0]
                ]
            }, t.a = a
        },
        MaNU: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, '.styles__bodyContainer___kRuqX-camelCase{display:flex;flex-direction:row;justify-content:space-between}.styles__sketchHolder___15Fa1-camelCase{flex:1;margin:20px;overflow:hidden;position:relative}.styles__sketchCanvas___K6zVV-camelCase{top:0;right:0;bottom:0;left:0;display:block;margin:auto;position:absolute}.styles__leftSide___2K4Ki-camelCase{width:220px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:6px 0 8px rgba(0,0,0,.2);outline:none;display:flex;flex-direction:column;transition:.3s}.styles__infoRow___3BSi_-camelCase{display:flex;flex-direction:row;align-items:flex-end;width:90%;margin:0 auto 10px}.styles__infoBlook___1lBMO-camelCase{width:30%;margin-right:10px}.styles__infoTitle___15r5O-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:26px;line-height:29px;color:#3a3a3a}.styles__smallInfoRow___iWKIE-camelCase{display:flex;flex-direction:row;align-items:center;margin:5px auto}.styles__descText___2l3O2-camelCase,.styles__smallInfoRow___iWKIE-camelCase{width:90%;font-family:Nunito,sans-serif;font-size:20px;color:#3a3a3a}.styles__descText___2l3O2-camelCase{margin:20px auto}.styles__sellButton___E98jm-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:30px;border-radius:6px;margin:15px auto;background-color:#c43a35;color:#fff;font-size:18px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__sellButton___E98jm-camelCase:hover{transform:scale(.96)}.styles__upgradesText___1JNzl-camelCase{margin:7px auto 12px;font-size:26px;text-align:center;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__upgradeContainer___3GnZ0-camelCase{border:3px solid #a7a7a7;border-radius:6px;width:calc(90% - 16px);padding:3px 8px;margin:14px auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;flex-direction:column;position:relative;font-size:"Nunito",sans-serif;color:#3a3a3a;transition:.2s}.styles__upgradeContainer___3GnZ0-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__upgradeRow___3YkGd-camelCase{display:flex;flex-direction:row;width:100%;margin:4px 0}.styles__upgradeIcon___FvfJf-camelCase{border-radius:6px;display:flex;justify-content:center;align-items:center;text-shadow:2px 2px 8px grey;color:#fff;font-size:28px}.styles__upgradeBlook___8ymUf-camelCase,.styles__upgradeIcon___FvfJf-camelCase{width:45px;height:51.75px;margin-right:10px}.styles__upgradeTitle___1ropY-camelCase{width:calc(100% - 55px);font-size:24px;line-height:26px;font-weight:700}.styles__upgradeDesc___78gJJ-camelCase{font-size:16px;line-height:18.5px;margin:2px 0}.styles__rightSide___8bN9Y-camelCase{width:280px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:-6px 0 8px rgba(0,0,0,.2);flex-direction:column}.styles__buyButton___3IzHu-camelCase,.styles__rightSide___8bN9Y-camelCase{outline:none;display:flex}.styles__buyButton___3IzHu-camelCase{position:absolute;top:10px;right:290px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__buyButton___3IzHu-camelCase:hover{transform:scale(.95)}.styles__healthRow___3z-8e-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;padding:0 5px;margin:5px auto;font-size:22px;height:25px}.styles__healthBarHolder___1OE5V-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__healthBar___3Diky-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left;transition:.2s}.styles__healthText___2LH5z-camelCase{font-size:24px;margin:0 4px 3px 8px;width:55px}.styles__dmgText___M8nxF-camelCase,.styles__healthText___2LH5z-camelCase{font-family:Titan One,sans-serif;color:#3a3a3a;text-align:right}.styles__dmgText___M8nxF-camelCase{font-size:26px;margin-right:7px}.styles__healthIcon___1NESo-camelCase{font-size:18px;color:#3a3a3a;line-height:25px}.styles__roundText___1hxMe-camelCase{width:80%;margin:0 auto;font-size:26px;height:30px;text-align:right;font-family:Titan One,sans-serif;color:#3a3a3a}.styles__shopContainer___MZZd7-camelCase{margin:10px auto;width:95%;display:flex;flex-flow:row wrap;justify-content:space-between}.styles__towerShopContainer___270Ea-camelCase{border:3px solid #a7a7a7;border-radius:6px;margin:7px 3px;width:75px;height:75px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;transform:scale(1);transition:.2s}.styles__towerShopContainer___270Ea-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__towerShopSelected___3NaES-camelCase{border-color:#0bc2cf}.styles__towerShopFaded___3LAz6-camelCase{opacity:.5;cursor:auto}.styles__towerShopFaded___3LAz6-camelCase:hover{transform:scale(1);border-color:#a7a7a7}.styles__shopBlook___3gMB5-camelCase{height:85%;margin:auto}.styles__shopPrice___12vgL-camelCase{right:-5px;bottom:-11px;height:22px;font-size:16px;padding:0 5px;background-color:#0bc2cf;border-radius:4px;font-family:Nunito,sans-serif}.styles__shopLockedContainer___32xCb-camelCase,.styles__shopPrice___12vgL-camelCase{position:absolute;color:#fff;display:flex;align-items:center;justify-content:center}.styles__shopLockedContainer___32xCb-camelCase{width:calc(100% + 6px);height:calc(100% + 6px);border-radius:6px;cursor:auto;background-color:rgba(0,0,0,.8);flex-direction:column;font-size:14px;font-weight:700;text-shadow:2px 2px 8px grey}.styles__shopLockedIcon___Rt7mS-camelCase{margin-bottom:3px;font-size:32px}.styles__mainButton___3lYPo-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:50px;border-radius:6px;margin:auto auto 15px;background-color:#c43a35;color:#fff;font-size:26px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__mainButton___3lYPo-camelCase:hover{transform:scale(.96)}.styles__questionContainer___R0s6G-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:8}.styles__modalContainer___2S2Kx-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__modalText___3hOQB-camelCase{font-family:Titan One,sans-serif;font-size:45px;line-height:48px;margin:20px auto 15px;color:#fff;text-shadow:2px 2px 8px grey}.styles__modalButtonRow___Icy-d-camelCase{display:flex;flex-direction:row}.styles__modalButton___3J0_3-camelCase{padding:5px 12px;margin:15px auto 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:24px;color:#5f5f5f;font-family:Nunito,sans-serif;transition:all .2s}.styles__modalButton___3J0_3-camelCase:hover{transform:scale(.96)}.styles__modalFadeIn___m0Mpv-camelCase{opacity:0;animation:styles__fadeIn___2AbvZ-camelCase .4s linear .5s forwards}.styles__gameOverContainer___3o79S-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___kgMG9-camelCase{font-family:Titan One,sans-serif;font-size:11vw;opacity:0;animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___15a9l-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1.6s forwards}@keyframes styles__fadeIn___2AbvZ-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:600px){.styles__modalContainer___2S2Kx-camelCase{width:310px}}.styles__mBottomContainer___3Mtmc-camelCase,.styles__mBottomSpacer___3sQBr-camelCase,.styles__mBuyButton___2z2V9-camelCase,.styles__mCloseTower___14cDR-camelCase,.styles__mHealthIcon___1QbHT-camelCase,.styles__mHealthRow___Q5Z05-camelCase,.styles__mHealthText___2QjA7-camelCase,.styles__mMainButton___ETJ12-camelCase,.styles__mModal___1XF_X-camelCase,.styles__mNoBuy___2q9Cl-camelCase,.styles__mOpenButton___1jFO2-camelCase,.styles__mRoundText___3uGec-camelCase,.styles__mTopContainer___1W3YD-camelCase,.styles__mTowerSelected___2Qcdh-camelCase{display:none}@media only screen and (max-width:800px){.styles__leftSide___2K4Ki-camelCase,.styles__rightSide___8bN9Y-camelCase{display:none}.styles__bodyContainer___kRuqX-camelCase,.styles__mBottomContainer___3Mtmc-camelCase{flex-direction:column}.styles__mBottomContainer___3Mtmc-camelCase{position:absolute;bottom:0;left:0;background-color:#fff;box-shadow:0 -6px 8px rgba(0,0,0,.2);display:flex;min-height:60px;max-height:calc(100% - 55px);overflow-y:auto;width:100%}.styles__mBottomSpacer___3sQBr-camelCase{display:block;height:60px}.styles__mOpenButton___1jFO2-camelCase{width:100%;height:50px;justify-content:center;color:#3a3a3a;font-size:26px;font-weight:700;font-family:Nunito,sans-serif;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__mHealthRow___Q5Z05-camelCase,.styles__mOpenButton___1jFO2-camelCase{position:relative;display:flex;flex-direction:row;align-items:center}.styles__mHealthRow___Q5Z05-camelCase{margin:auto 8px auto auto}.styles__mHealthText___2QjA7-camelCase{font-size:26px;font-weight:700;display:block}.styles__mHealthIcon___1QbHT-camelCase{font-size:24px;margin-left:7px;display:block;margin-right:2px}.styles__mTopContainer___1W3YD-camelCase{height:50px;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.styles__mRoundText___3uGec-camelCase{font-family:Titan One,sans-serif;font-size:32px;color:#3a3a3a;margin-left:10px;display:block}.styles__mMainButton___ETJ12-camelCase{margin-right:10px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;padding:2px 10px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mMainButton___ETJ12-camelCase:hover{transform:scale(.95)}.styles__mBuyButton___2z2V9-camelCase{background-color:#4bc22e;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mBuyButton___2z2V9-camelCase:hover{transform:scale(.95)}.styles__mNoBuy___2q9Cl-camelCase{display:flex;align-items:center;justify-content:center;height:60px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:26px;width:90%;margin:0 auto}.styles__mModal___1XF_X-camelCase{display:block}.styles__mTowerSelected___2Qcdh-camelCase{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;padding-top:7px;max-width:300px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__infoBlook___1lBMO-camelCase{width:20%}.styles__mCloseTower___14cDR-camelCase{display:flex;align-items:center;justify-content:center;position:absolute;height:40px;width:40px;top:-15px;right:-15px;background-color:#f33;color:#fff;font-size:26px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:50%;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__mCloseTower___14cDR-camelCase:hover{transform:scale(.95)}.styles__descText___2l3O2-camelCase,.styles__upgradeTitle___1ropY-camelCase{text-align:left}.styles__sellContainer___2SCEE-camelCase{display:flex;flex-direction:row;width:90%;margin:0 auto}.styles__sellButton___E98jm-camelCase{width:45%;margin:auto 5% auto 0;font-size:16px}.styles__statInfoContainer___2FLMO-camelCase{display:flex;flex-direction:column;width:50%}.styles__smallInfoRow___iWKIE-camelCase{width:100%;margin:1px auto;font-size:12px}.styles__gameOverText___kgMG9-camelCase{font-size:15vw}.styles__gameOverTextSmall___15a9l-camelCase{font-size:5vw}}', ""]), t.locals = {
                bodyContainer: "styles__bodyContainer___kRuqX-camelCase",
                sketchHolder: "styles__sketchHolder___15Fa1-camelCase",
                sketchCanvas: "styles__sketchCanvas___K6zVV-camelCase",
                leftSide: "styles__leftSide___2K4Ki-camelCase",
                infoRow: "styles__infoRow___3BSi_-camelCase",
                infoBlook: "styles__infoBlook___1lBMO-camelCase",
                infoTitle: "styles__infoTitle___15r5O-camelCase",
                smallInfoRow: "styles__smallInfoRow___iWKIE-camelCase",
                descText: "styles__descText___2l3O2-camelCase",
                sellButton: "styles__sellButton___E98jm-camelCase",
                upgradesText: "styles__upgradesText___1JNzl-camelCase",
                upgradeContainer: "styles__upgradeContainer___3GnZ0-camelCase",
                upgradeRow: "styles__upgradeRow___3YkGd-camelCase",
                upgradeIcon: "styles__upgradeIcon___FvfJf-camelCase",
                upgradeBlook: "styles__upgradeBlook___8ymUf-camelCase",
                upgradeTitle: "styles__upgradeTitle___1ropY-camelCase",
                upgradeDesc: "styles__upgradeDesc___78gJJ-camelCase",
                rightSide: "styles__rightSide___8bN9Y-camelCase",
                buyButton: "styles__buyButton___3IzHu-camelCase",
                healthRow: "styles__healthRow___3z-8e-camelCase",
                healthBarHolder: "styles__healthBarHolder___1OE5V-camelCase",
                healthBar: "styles__healthBar___3Diky-camelCase",
                healthText: "styles__healthText___2LH5z-camelCase",
                dmgText: "styles__dmgText___M8nxF-camelCase",
                healthIcon: "styles__healthIcon___1NESo-camelCase",
                roundText: "styles__roundText___1hxMe-camelCase",
                shopContainer: "styles__shopContainer___MZZd7-camelCase",
                towerShopContainer: "styles__towerShopContainer___270Ea-camelCase",
                towerShopSelected: "styles__towerShopSelected___3NaES-camelCase",
                towerShopFaded: "styles__towerShopFaded___3LAz6-camelCase",
                shopBlook: "styles__shopBlook___3gMB5-camelCase",
                shopPrice: "styles__shopPrice___12vgL-camelCase",
                shopLockedContainer: "styles__shopLockedContainer___32xCb-camelCase",
                shopLockedIcon: "styles__shopLockedIcon___Rt7mS-camelCase",
                mainButton: "styles__mainButton___3lYPo-camelCase",
                questionContainer: "styles__questionContainer___R0s6G-camelCase",
                modalContainer: "styles__modalContainer___2S2Kx-camelCase",
                modalText: "styles__modalText___3hOQB-camelCase",
                modalButtonRow: "styles__modalButtonRow___Icy-d-camelCase",
                modalButton: "styles__modalButton___3J0_3-camelCase",
                modalFadeIn: "styles__modalFadeIn___m0Mpv-camelCase",
                fadeIn: "styles__fadeIn___2AbvZ-camelCase",
                gameOverContainer: "styles__gameOverContainer___3o79S-camelCase",
                gameOverText: "styles__gameOverText___kgMG9-camelCase",
                gameOverTextSmall: "styles__gameOverTextSmall___15a9l-camelCase",
                mBottomContainer: "styles__mBottomContainer___3Mtmc-camelCase",
                mBottomSpacer: "styles__mBottomSpacer___3sQBr-camelCase",
                mBuyButton: "styles__mBuyButton___2z2V9-camelCase",
                mCloseTower: "styles__mCloseTower___14cDR-camelCase",
                mHealthIcon: "styles__mHealthIcon___1QbHT-camelCase",
                mHealthRow: "styles__mHealthRow___Q5Z05-camelCase",
                mHealthText: "styles__mHealthText___2QjA7-camelCase",
                mMainButton: "styles__mMainButton___ETJ12-camelCase",
                mModal: "styles__mModal___1XF_X-camelCase",
                mNoBuy: "styles__mNoBuy___2q9Cl-camelCase",
                mOpenButton: "styles__mOpenButton___1jFO2-camelCase",
                mRoundText: "styles__mRoundText___3uGec-camelCase",
                mTopContainer: "styles__mTopContainer___1W3YD-camelCase",
                mTowerSelected: "styles__mTowerSelected___2Qcdh-camelCase",
                sellContainer: "styles__sellContainer___2SCEE-camelCase",
                statInfoContainer: "styles__statInfoContainer___2FLMO-camelCase"
            }
        },
        OYaq: function(e, t, s) {
            "use strict";
            var i = s("q1tI"),
                a = s.n(i),
                o = s("74sb");

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                r = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    o = i.asyncIterator || "@@asyncIterator",
                    l = i.toStringTag || "@@toStringTag";

                function c(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function h(e, t, s, i) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        n = new S(i || []);
                    return o._invoke = function(e, t, s) {
                        var i = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === i) throw new Error("Generator is already running");
                            if ("completed" === i) {
                                if ("throw" === a) throw o;
                                return T()
                            }
                            for (s.method = a, s.arg = o;;) {
                                var n = s.delegate;
                                if (n) {
                                    var r = x(n, s);
                                    if (r) {
                                        if (r === d) continue;
                                        return r
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === i) throw i = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                i = "executing";
                                var l = u(e, t, s);
                                if ("normal" === l.type) {
                                    if (i = s.done ? "completed" : "suspendedYield", l.arg === d) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (i = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, n), o
                }

                function u(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = h;
                var d = {};

                function p() {}

                function f() {}

                function m() {}
                var g = {};
                c(g, a, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    v = y && y(y(O([])));
                v && v !== t && s.call(v, a) && (g = v);
                var w = m.prototype = p.prototype = Object.create(g);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        c(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var i;
                    this._invoke = function(a, o) {
                        function r() {
                            return new t((function(i, r) {
                                ! function i(a, o, r, l) {
                                    var c = u(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var h = c.arg,
                                            d = h.value;
                                        return d && "object" == n(d) && s.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                            i("next", e, r, l)
                                        }), (function(e) {
                                            i("throw", e, r, l)
                                        })) : t.resolve(d).then((function(e) {
                                            h.value = e, r(h)
                                        }), (function(e) {
                                            return i("throw", e, r, l)
                                        }))
                                    }
                                    l(c.arg)
                                }(a, o, i, r)
                            }))
                        }
                        return i = i ? i.then(r, r) : r()
                    }
                }

                function x(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var i = u(s, e.iterator, t.arg);
                    if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, d;
                    var a = i.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
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

                function S(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                o = function t() {
                                    for (; ++i < e.length;)
                                        if (s.call(e, i)) return t.value = e[i], t.done = !1, t;
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
                return f.prototype = m, c(w, "constructor", m), c(m, "constructor", f), f.displayName = c(m, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, l, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(_.prototype), c(_.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, s, i, a, o) {
                    void 0 === o && (o = Promise);
                    var n = new _(h(t, s, i, a), o);
                    return e.isGeneratorFunction(s) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, b(w), c(w, l, "Generator"), c(w, a, (function() {
                    return this
                })), c(w, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var i = t.pop();
                                if (i in e) return s.value = i, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = O, S.prototype = {
                    constructor: S,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function i(s, i) {
                            return n.type = "throw", n.arg = e, t.next = s, i && (t.method = "next", t.arg = void 0), !!i
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                n = o.completion;
                            if ("root" === o.tryLoc) return i("end");
                            if (o.tryLoc <= this.prev) {
                                var r = s.call(o, "catchLoc"),
                                    l = s.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i];
                            if (a.tryLoc <= this.prev && s.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), C(s), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var i = s.completion;
                                if ("throw" === i.type) {
                                    var a = i.arg;
                                    C(s)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function l(e, t, s, i, a, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, a)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function u(e, t) {
                return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var s, i = f(e);
                    if (t) {
                        var a = f(this).constructor;
                        s = Reflect.construct(i, arguments, a)
                    } else s = i.apply(this, arguments);
                    return p(this, s)
                }
            }

            function p(e, t) {
                if (t && ("object" === n(t) || "function" == typeof t)) return t;
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
            var m = function(e) {
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
                    }), t && u(e, t)
                }(f, e);
                var t, s, i, a, n, p = d(f);

                function f() {
                    return c(this, f), p.apply(this, arguments)
                }
                return t = f, (s = [{
                    key: "componentDidMount",
                    value: (a = r().mark((function e() {
                        var t, s;
                        return r().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = "".concat(window.location.pathname).concat(window.location.search), e.next = 3, Object(o.k)();
                                case 3:
                                    s = "".concat("https://dashboard.blooket.com").concat(t), window.location.href = s;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), n = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(s, i) {
                            var o = a.apply(e, t);

                            function n(e) {
                                l(o, s, i, n, r, "next", e)
                            }

                            function r(e) {
                                l(o, s, i, n, r, "throw", e)
                            }
                            n(void 0)
                        }))
                    }, function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]) && h(t.prototype, s), i && h(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), f
            }(a.a.Component);
            t.a = m
        },
        Rycs: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".styles__stageText___21Ml7-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden;display:flex;flex-direction:row;align-items:center}.styles__stageIcon___3V2ZX-camelCase{font-size:24px;margin-left:7px}", ""]), t.locals = {
                stageText: "styles__stageText___21Ml7-camelCase",
                stageIcon: "styles__stageIcon___3V2ZX-camelCase"
            }
        },
        VmLb: function(e, t, s) {
            "use strict";
            var i = s("q1tI"),
                a = s.n(i),
                o = s("ANjH"),
                n = s("/MKj"),
                r = s("17x9"),
                l = s.n(r),
                c = s("55Ip"),
                h = s("Ty5D"),
                u = s("H1WH"),
                d = s("TSYQ"),
                p = s.n(d),
                f = s("FKJl"),
                m = s("ZrUs"),
                g = s("XvWQ"),
                y = s.n(g),
                v = s("Xst1"),
                w = s.n(v),
                b = s("oQ+7"),
                _ = s("XTAU"),
                x = s("E8Bj"),
                k = s("2ZNs"),
                C = s("pQbs"),
                S = s("dLfW"),
                O = s("sfIM"),
                T = s("74sb"),
                E = s("5BnW"),
                M = s("qnYv");

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    o = i.asyncIterator || "@@asyncIterator",
                    n = i.toStringTag || "@@toStringTag";

                function r(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    r({}, "")
                } catch (e) {
                    r = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, i) {
                    var a = t && t.prototype instanceof u ? t : u,
                        o = Object.create(a.prototype),
                        n = new k(i || []);
                    return o._invoke = function(e, t, s) {
                        var i = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === i) throw new Error("Generator is already running");
                            if ("completed" === i) {
                                if ("throw" === a) throw o;
                                return S()
                            }
                            for (s.method = a, s.arg = o;;) {
                                var n = s.delegate;
                                if (n) {
                                    var r = b(n, s);
                                    if (r) {
                                        if (r === h) continue;
                                        return r
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === i) throw i = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                i = "executing";
                                var l = c(e, t, s);
                                if ("normal" === l.type) {
                                    if (i = s.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (i = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, n), o
                }

                function c(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
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

                function u() {}

                function d() {}

                function p() {}
                var f = {};
                r(f, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(C([])));
                g && g !== t && s.call(g, a) && (f = g);
                var y = p.prototype = u.prototype = Object.create(f);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        r(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var i;
                    this._invoke = function(a, o) {
                        function n() {
                            return new t((function(i, n) {
                                ! function i(a, o, n, r) {
                                    var l = c(e[a], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == R(u) && s.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            i("next", e, n, r)
                                        }), (function(e) {
                                            i("throw", e, n, r)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return i("throw", e, n, r)
                                        }))
                                    }
                                    r(l.arg)
                                }(a, o, i, n)
                            }))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                }

                function b(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var i = c(s, e.iterator, t.arg);
                    if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
                    var a = i.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function _(e) {
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
                    }], e.forEach(_, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                o = function t() {
                                    for (; ++i < e.length;)
                                        if (s.call(e, i)) return t.value = e[i], t.done = !1, t;
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
                return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(w.prototype), r(w.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, s, i, a, o) {
                    void 0 === o && (o = Promise);
                    var n = new w(l(t, s, i, a), o);
                    return e.isGeneratorFunction(s) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), r(y, n, "Generator"), r(y, a, (function() {
                    return this
                })), r(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var i = t.pop();
                                if (i in e) return s.value = i, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function i(s, i) {
                            return n.type = "throw", n.arg = e, t.next = s, i && (t.method = "next", t.arg = void 0), !!i
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                n = o.completion;
                            if ("root" === o.tryLoc) return i("end");
                            if (o.tryLoc <= this.prev) {
                                var r = s.call(o, "catchLoc"),
                                    l = s.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i];
                            if (a.tryLoc <= this.prev && s.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), x(s), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var i = s.completion;
                                if ("throw" === i.type) {
                                    var a = i.arg;
                                    x(s)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function N(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(s), !0).forEach((function(t) {
                        B(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : N(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function B(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function I(e, t, s, i, a, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, a)
            }

            function z(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function D(e, t) {
                return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function L(e) {
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
                    var s, i = q(e);
                    if (t) {
                        var a = q(this).constructor;
                        s = Reflect.construct(i, arguments, a)
                    } else s = i.apply(this, arguments);
                    return F(this, s)
                }
            }

            function F(e, t) {
                if (t && ("object" === R(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return A(e)
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var G = function(e, t) {
                    return t ? a.a.createElement("div", {
                        className: y.a.stageText
                    }, Object(T.s)(e.dmg), a.a.createElement("i", {
                        className: p()(y.a.stageIcon, "fas fa-splotch")
                    })) : a.a.createElement("div", {
                        className: y.a.stageText
                    }, "Round ".concat(e.round))
                },
                H = function(e) {
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
                        }), t && D(e, t)
                    }(l, e);
                    var t, s, i, o, n, r = L(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = r.call(this, e)).state = {
                            ready: !1,
                            numCorrect: 0,
                            numQuestions: 0,
                            standings: [],
                            plus: !1,
                            message: "",
                            name: "",
                            nameUsed: "",
                            round: 0,
                            isLive: !1,
                            dmg: 0,
                            isBlocked: !1
                        }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(A(t)), t.renderStats = t.renderStats.bind(A(t)), t
                    }
                    return t = l, (s = [{
                        key: "componentDidMount",
                        value: (o = j().mark((function e() {
                            var t, s, i, a, o, n, r, l, c = this;
                            return j().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if ((t = e.sent) || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.defense && "final" === this.props.defense.stage) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (this.isSolo = !this.props.defense.isLive, this.isHw = Boolean(this.props.defense.resultId), this.isSolo || this.isHw || this.props.liveGameController.setVal({
                                                path: "c/".concat(this.props.client.name),
                                                val: {
                                                    c: P({}, this.props.defense.corrects),
                                                    i: P({}, this.props.defense.incorrects)
                                                }
                                            }), this.isHw && M.a.put("/api/results", {
                                                id: this.props.defense.resultId,
                                                data: {
                                                    corrects: this.props.defense.corrects,
                                                    incorrects: this.props.defense.incorrects,
                                                    round: Number(this.props.defense.round),
                                                    alive: !1
                                                }
                                            }).catch((function(e) {
                                                return Object(f.b)(e)
                                            })), s = 0, i = 0, Object.values(this.props.defense.corrects).forEach((function(e) {
                                                s += e, i += e
                                            })), Object.values(this.props.defense.incorrects).forEach((function(e) {
                                                i += e
                                            })), a = this.props.client && this.props.client.blook ? this.props.client.blook : Object(T.m)(O.b), o = this.props.client && this.props.client.name ? this.props.client.name : "You", (n = this.props.client && this.props.client.standing ? JSON.parse(JSON.stringify(this.props.client.standing)) : [{
                                                name: o,
                                                blook: a,
                                                place: Math.max(1, 30 - (this.props.defense.round - 1)),
                                                round: this.props.defense.round - 1,
                                                dmg: this.props.defense.dmg
                                            }]).sort((function(e, t) {
                                                return e.place - t.place
                                            })), -1 !== (r = n.map((function(e) {
                                                return e.name
                                            })).indexOf(o))) {
                                            e.next = 22;
                                            break
                                        }
                                        return this.setState({
                                            isBlocked: !0
                                        }), e.abrupt("return");
                                    case 22:
                                        l = n[r].place, this.stats = {
                                            place: l,
                                            round: this.props.defense.round - 1,
                                            dmg: n[r].dmg,
                                            correctAnswers: s,
                                            blookUsed: a,
                                            nameUsed: o,
                                            playersDefeated: this.props.defense.isLive ? this.props.client.standing.length - l : 0
                                        }, this.props.defense.isLive ? this.readyTimeout = setTimeout((function() {
                                            c.setState({
                                                numCorrect: s,
                                                numQuestions: i,
                                                round: c.props.defense.round - 1,
                                                nameUsed: o,
                                                ready: !0,
                                                standings: n,
                                                isLive: !0,
                                                dmg: n[r].dmg
                                            })
                                        }), 4750) : this.setState({
                                            numCorrect: s,
                                            numQuestions: i,
                                            round: this.props.defense.round - 1,
                                            message: Object(S.a)((l - 1) / 30),
                                            nameUsed: o,
                                            ready: !this.props.defense.defenseId || this.state.ready,
                                            standings: n,
                                            dmg: this.props.defense.dmg
                                        }), t && (this.saveStats(t.name, (function() {})), M.a.put("/api/users/plan").then((function(e) {
                                            c.here && c.setState({
                                                ready: !c.props.defense.isLive || c.state.ready,
                                                name: t.name,
                                                plus: "Starter" !== e.data.plan || c.props.client && c.props.client.plus
                                            })
                                        })).catch((function(e) {
                                            Object(f.b)(e)
                                        })), this.props.defense.defenseId && M.a.delete("/api/defenses", {
                                            params: {
                                                name: t.name,
                                                id: this.props.defense.defenseId
                                            }
                                        }).catch((function(e) {
                                            Object(f.b)(e)
                                        })));
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(s, i) {
                                var a = o.apply(e, t);

                                function n(e) {
                                    I(a, s, i, n, r, "next", e)
                                }

                                function r(e) {
                                    I(a, s, i, n, r, "throw", e)
                                }
                                n(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.deleteClient(), clearTimeout(this.readyTimeout), this.here = !1
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            this.isSolo ? M.a.put("/api/users/defensestats/solo", {
                                name: e,
                                place: this.stats.place,
                                round: this.stats.round,
                                dmg: this.stats.dmg,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers
                            }).then(t).catch((function(e) {
                                return Object(f.b)(e)
                            })) : M.a.put("/api/users/defensestats/live", {
                                name: e,
                                place: this.stats.place,
                                round: this.stats.round,
                                dmg: this.stats.dmg,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers,
                                playersDefeated: this.stats.playersDefeated
                            }).then(t).catch((function(e) {
                                return Object(f.b)(e)
                            }))
                        }
                    }, {
                        key: "renderStats",
                        value: function() {
                            return a.a.createElement(C.a, {
                                title: "Damage",
                                stat: Object(T.l)(this.state.dmg)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.defense || "final" !== this.props.defense.stage || !this.props.defense.questions || !this.props.defense.questions[0]) return a.a.createElement(h.a, {
                                to: "/play"
                            });
                            var e = this.props.client && this.props.client.hwId;
                            return a.a.createElement("div", {
                                className: u.isMobile ? w.a.mBody : w.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, a.a.createElement(_.a, {
                                title: "Play Tower Defense | Blooket",
                                desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                            }), a.a.createElement(b.a, {
                                noRight: !e,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? this.state.isLive ? a.a.createElement(k.a, {
                                standings: this.state.standings,
                                name: this.props.client.name || "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.props.client.plus,
                                myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return G(e, !0)
                                },
                                renderStats: this.renderStats,
                                corrects: this.props.defense.corrects,
                                incorrects: this.props.defense.incorrects,
                                questions: this.props.defense.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : a.a.createElement(k.a, {
                                standings: this.state.standings,
                                name: this.state.nameUsed,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return G(e, !1)
                                },
                                renderStats: this.renderStats,
                                customMessage: this.state.message,
                                corrects: this.props.defense.corrects,
                                incorrects: this.props.defense.incorrects,
                                questions: this.props.defense.questions,
                                blockAccounts: !this.props.client || !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : null, this.state.isBlocked ? a.a.createElement("div", {
                                className: w.a.blockedText
                            }, "You were blocked from this game.") : null)
                        }
                    }]) && z(t.prototype, s), i && z(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
            H.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                liveGameController: l.a.object,
                deleteClient: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(x.c)(Object(c.f)(Object(n.b)((function(e) {
                return {
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: m.a
                }, e)
            }))(Object(E.d)(H))))
        },
        XvWQ: function(e, t, s) {
            var i = s("Rycs");
            "string" == typeof i && (i = [
                [e.i, i, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(i, a);
            i.locals && (e.exports = i.locals)
        },
        jASO: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".tourSteps__centered___ROWNy-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__health___13O1S-camelCase{top:125px;right:10px}.tourSteps__topRight___1yQaD-camelCase{top:65px;right:10px}.tourSteps__shop___8RTK7-camelCase{right:300px}.tourSteps__shop___8RTK7-camelCase,.tourSteps__stats___2T4MY-camelCase{top:50%;transform:translateY(-50%)}.tourSteps__stats___2T4MY-camelCase{left:250px}.tourSteps__nextRound___1h4Vb-camelCase{right:300px;bottom:25px}@media only screen and (max-width:800px){.tourSteps__health___13O1S-camelCase{top:auto;bottom:70px}.tourSteps__shop___8RTK7-camelCase{right:50%;top:auto;bottom:80px;transform:translateX(50%)}.tourSteps__stats___2T4MY-camelCase{left:50%;top:50%;transform:translate(-50%,-50%)}.tourSteps__nextRound___1h4Vb-camelCase{bottom:auto;top:130px;right:20px}}", ""]), t.locals = {
                centered: "tourSteps__centered___ROWNy-camelCase",
                health: "tourSteps__health___13O1S-camelCase",
                topRight: "tourSteps__topRight___1yQaD-camelCase",
                shop: "tourSteps__shop___8RTK7-camelCase",
                stats: "tourSteps__stats___2T4MY-camelCase",
                nextRound: "tourSteps__nextRound___1h4Vb-camelCase"
            }
        },
        vkpZ: function(e, t, s) {
            "use strict";
            var i = s("q1tI"),
                a = s.n(i),
                o = s("/MKj"),
                n = s("ANjH"),
                r = s("17x9"),
                l = s.n(r),
                c = s("55Ip"),
                h = s("H1WH"),
                u = s("ixhd"),
                d = s.n(u),
                p = s("TSYQ"),
                f = s.n(p),
                m = s("FKJl"),
                g = s("XTAU"),
                y = s("z826"),
                v = s.n(y),
                w = s("Xst1"),
                b = s.n(w),
                _ = s("Rnav"),
                x = s("5BnW"),
                k = s("FVRk"),
                C = s("4Zpe"),
                S = s("ca/f"),
                O = s("9TPi"),
                T = s("74sb"),
                E = s("E8Bj"),
                M = s("8W+4"),
                R = s("4/w4"),
                j = s("EqiX"),
                N = s("1jhB"),
                P = s.n(N),
                B = s("GC+6"),
                I = s("ZrUs"),
                z = function(e, t, s, i) {
                    return s.createVector(Math.floor(e / i), Math.floor(t / i))
                },
                D = function(e, t, s, i, a, o) {
                    return e < s || t < i || e > s + a || t > i + o
                },
                L = function(e, t) {
                    var s = e.split(",");
                    return t.createVector(parseInt(s[0], 10), parseInt(s[1], 10))
                },
                F = function(e, t) {
                    return "".concat(e, ",").concat(t)
                },
                A = function(e, t, s, i) {
                    var a = [];
                    return 0 !== s && e[s - 1][t] === i && a.push(F(t, s - 1)), 0 !== t && e[s][t - 1] === i && a.push(F(t - 1, s)), s !== e.length - 1 && e[s + 1][t] === i && a.push(F(t, s + 1)), t !== e[s].length - 1 && e[s][t + 1] === i && a.push(F(t + 1, s)), a
                },
                q = function(e, t, s) {
                    if (!e || 0 === e.length) return null;
                    for (var i = 1e4, a = e[0], o = 0; o < e.length; o++) {
                        var n = e[o];
                        if (!s || !s.includes(n)) {
                            var r = t.dist(n.pos);
                            r < i && (i = r, a = n)
                        }
                    }
                    return a
                },
                G = function(e, t, s) {
                    for (var i = [], a = 0; a < e; a++) {
                        i[a] = [];
                        for (var o = 0; o < t; o++) i[a][o] = s
                    }
                    return i
                },
                H = function(e, t, s) {
                    return e > Math.min(t, s) && e < Math.max(t, s)
                },
                U = function(e, t, s, i) {
                    return i.createVector(e * s + s / 2, t * s + s / 2)
                },
                W = function(e, t, s, i, a, o) {
                    var n = U(s, i, a, o),
                        r = Math.max(.175 * a, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
                    return H(e, n.x - r, n.x + r) && H(t, n.y - r, n.y + r)
                },
                Q = function(e, t, s, i, a, o, n) {
                    var r = U(s, i, a, o),
                        l = Math.max(.175 * a, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
                    return "x" === n ? H(e, r.x - 2 * l, r.x + 2 * l) && H(t, r.y - l, r.y + l) : H(e, r.x - l, r.x + l) && H(t, r.y - 2 * l, r.y + 2 * l)
                },
                V = function(e, t, s, i, a) {
                    return Math.pow(e - s, 2) + Math.pow(t - i, 2) < Math.pow(a, 2)
                },
                Y = function(e, t, s, i, a) {
                    for (var o = [], n = 0; n < i.length; n++) {
                        var r = i[n];
                        V(r.pos.x, r.pos.y, e, t, (s + .5) * a) && o.push(r)
                    }
                    return o
                },
                K = function(e, t, s, i, a) {
                    var o = 1e4,
                        n = 1e4,
                        r = e[0];
                    return e.forEach((function(e) {
                        var l = z(e.pos.x, e.pos.y, i, a),
                            c = t[l.y][l.x],
                            h = 1e4,
                            u = s[l.y][l.x];
                        1 === u && (h = e.pos.x - l.x * a), 2 === u && (h = e.pos.y - l.y * a), 3 === u && (h = (l.x + 1) * a - e.pos.x), 4 === u && (h = (l.y + 1) * a - e.pos.y), (c < o || c === o && h < n) && (o = c, n = h, r = e)
                    })), r
                },
                J = function(e, t, s, i, a) {
                    return H(e, 0, s * a) && H(t, 0, i * a)
                },
                X = function(e, t, s) {
                    return Math.abs((e.x * (t.y - s.y) + t.x * (s.y - e.y) + s.x * (e.y - t.y)) / 2)
                },
                Z = function(e, t, s, i) {
                    var a = 0;
                    a += X(t, e, s), a += X(s, e, i), a += X(i, e, t);
                    var o = X(t, s, i);
                    return Math.round(a) === Math.round(o)
                };

            function $(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var ee = function() {
                function e(t, s, i, a, o, n, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.p5 = i, this.images = o, this.updateDmg = r, this.width = .5, this.img = "", this.alive = !0, this.effects = [], this.name = "enemy", this.sound = "pop", this.pos = this.p5.createVector(t * a + a / 2, s * a + a / 2), this.vel = this.p5.createVector(0, 0), this.dir = this.p5.createVector(0, 0), this.danceAngle = 0, this.freezeTime = 0, this.slowLevel = 0, this.blowTime = 0, this.lastTile = [], this.health = n, this.maxHealth = n, this.speed = 1, this.onCreate()
                }
                var t, s, i;
                return t = e, (s = [{
                    key: "getDrawData",
                    value: function() {
                        return this.health > 5e3 ? {
                            img: this.images["Light Slime Monster"],
                            width: 2.3,
                            speed: .5
                        } : this.health > 1e3 ? {
                            img: this.images["Dark Slime Monster"],
                            width: 1.7,
                            speed: .5
                        } : this.health > 300 ? {
                            img: this.images["Red Slime Monster"],
                            width: 1.2,
                            speed: .75
                        } : this.health > 120 ? {
                            img: this.images["Slime Monster"],
                            width: 1,
                            speed: .75
                        } : this.health > 85 ? {
                            img: this.images.Black,
                            width: .3,
                            speed: 1.5
                        } : this.health > 40 ? {
                            img: this.images.Red,
                            width: .7,
                            speed: .75
                        } : this.health > 20 ? {
                            img: this.images.Green,
                            width: .6,
                            speed: 1.5
                        } : this.health > 10 ? {
                            img: this.images.Orange,
                            width: .55,
                            speed: 2.25
                        } : this.health > 5 ? {
                            img: this.images.Lime,
                            width: .5,
                            speed: 2
                        } : this.health > 2 ? {
                            img: this.images.Purple,
                            width: .45,
                            speed: 1.75
                        } : this.health > 1 ? {
                            img: this.images.Pink,
                            width: .4,
                            speed: 1.5
                        } : {
                            img: this.images.Blue,
                            width: .35,
                            speed: 1.25
                        }
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.danceAngle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.freezeTime > 0 ? this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .7, this.width * e * .7) : this.slowLevel > 0 && this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .45, this.width * e * .45), this.p5.pop()
                    }
                }, {
                    key: "dealDamage",
                    value: function(e) {
                        var t = Math.round(e);
                        this.updateDmg(Math.max(0, Math.min(this.health, t))), this.health > 0 && (this.health -= t), this.health <= 0 && this.onKilled()
                    }
                }, {
                    key: "isDead",
                    value: function() {
                        return !this.alive
                    }
                }, {
                    key: "kill",
                    value: function() {
                        this.alive = !1
                    }
                }, {
                    key: "onCreate",
                    value: function() {
                        this.health = this.maxHealth
                    }
                }, {
                    key: "onKilled",
                    value: function() {
                        this.alive && this.kill()
                    }
                }, {
                    key: "dance",
                    value: function() {
                        this.danceAngle = 2 * Math.PI
                    }
                }, {
                    key: "freeze",
                    value: function(e) {
                        this.freezeTime = e
                    }
                }, {
                    key: "blowBack",
                    value: function() {
                        this.blowTime = 15
                    }
                }, {
                    key: "slow",
                    value: function() {
                        this.slowLevel = 3
                    }
                }, {
                    key: "pxSpeed",
                    value: function(e, t) {
                        return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                    }
                }, {
                    key: "steer",
                    value: function(e, t, s, i, a) {
                        var o = z(this.pos.x, this.pos.y, this.p5, e);
                        if (!D(o.x, o.y, 0, 0, t, s)) {
                            var n = i[o.y][o.x];
                            if (0 === n && (o.x !== a.x || o.y !== a.y)) return this.pos.x = this.lastTile[0] * e + e / 2, void(this.pos.y = this.lastTile[1] * e + e / 2);
                            if (Q(this.pos.x, this.pos.y, o.x, o.y, e, this.p5, 0 === this.dir.x ? "x" : "y")) {
                                if (0 !== n && (this.lastTile = [o.x, o.y]), null === n) return;
                                1 === n ? this.dir = this.p5.createVector(-1, 0) : 2 === n ? this.dir = this.p5.createVector(0, -1) : 3 === n ? this.dir = this.p5.createVector(1, 0) : 4 === n && (this.dir = this.p5.createVector(0, 1))
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var s = this.getDrawData();
                        this.width = s.width, this.img = s.img, this.speed = s.speed;
                        var i = t ? 2 : 1;
                        if (this.danceAngle > 0 && (this.danceAngle = Math.max(0, this.danceAngle - 2 * Math.PI / (20 / i))), this.freezeTime > 0 && (this.freezeTime = Math.max(0, this.freezeTime - i)), this.blowTime > 0 && (this.blowTime = Math.max(0, this.blowTime - i)), this.slowLevel > 0 && (this.slowLevel = Math.max(0, this.slowLevel - i)), 0 === this.danceAngle && 0 === this.freezeTime) {
                            var a = this.pxSpeed(e, t);
                            this.vel = this.p5.createVector(this.dir.x * a, this.dir.y * a), this.vel.limit(a * (this.slowLevel > 0 ? .5 : this.speed)), this.blowTime > 0 ? this.pos.sub(this.p5.createVector(.35 * this.vel.x, .35 * this.vel.y)) : this.pos.add(this.vel)
                        }
                    }
                }]) && $(t.prototype, s), i && $(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

            function te(e) {
                return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function se(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && ie(e, t)
            }

            function ie(e, t) {
                return (ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ae(e) {
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
                    var s, i = ne(e);
                    if (t) {
                        var a = ne(this).constructor;
                        s = Reflect.construct(i, arguments, a)
                    } else s = i.apply(this, arguments);
                    return oe(this, s)
                }
            }

            function oe(e, t) {
                if (t && ("object" === te(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function ne(e) {
                return (ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function re(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function le(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function ce(e, t, s) {
                return t && le(e.prototype, t), s && le(e, s), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var he = function() {
                    function e(t, s, i, a) {
                        re(this, e), this.p5 = a, this.tileSize = i, this.pos = t.copy(), this.speed = s, this.vel = this.p5.createVector(Object(T.n)(-1, 1) * this.speed * i / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30), Object(T.n)(-1, 1) * this.speed * i / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)), this.lifespan = 255, this.decay = 2, this.color = [0, 0, 0], this.radius = 4
                    }
                    return ce(e, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.ellipse(this.pos.x, this.pos.y, e, e)
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return this.lifespan < 0
                        }
                    }, {
                        key: "run",
                        value: function(e, t) {
                            this.update(e), t || this.draw()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1)
                        }
                    }]), e
                }(),
                ue = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), n.color = [Object(T.n)(230, 255), Object(T.n)(100, 160), Object(T.n)(200, 240)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                de = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(20, 23), n.color = [Object(T.n)(190, 255), Object(T.n)(0, 40), Object(T.n)(0, 70)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                pe = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), n.color = [Object(T.n)(0, 80), Object(T.n)(150, 200), Object(T.n)(90, 130)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                fe = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), n.color = [Object(T.n)(240, 255), Object(T.n)(215, 245), Object(T.n)(0, 70)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                me = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), n.color = [Object(T.n)(110, 140), Object(T.n)(0, 40), Object(T.n)(110, 160)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                ge = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), n.color = [Object(T.n)(140, 150), Object(T.n)(55, 90), Object(T.n)(170, 205)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                ye = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), n.color = [Math.round(Object(T.n)(0, 255)), 100, 50], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke();
                            var e = this.p5.color("hsla(".concat(this.color[0], ", ").concat(this.color[1], "%, ").concat(this.color[2], "%, ").concat(Math.max(0, this.lifespan / 255), ")"));
                            this.p5.fill(e);
                            var t = this.radius * this.tileSize / 24 * 2;
                            this.p5.ellipse(this.pos.x, this.pos.y, t, t)
                        }
                    }]), s
                }(he),
                ve = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(14, 18), n.color = [Object(T.n)(200, 255), Object(T.n)(0, 127), Object(T.n)(0, 31)], n.radius = Object(T.o)(2, 6), n.angle = Object(T.n)(0, 2 * Math.PI), n.angleVel = Object(T.n)(-.5, .5), n
                    }
                    return ce(s, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.rectMode(this.p5.CENTER), this.p5.rect(0, 0, e, e), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1)
                        }
                    }]), s
                }(he),
                we = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 12), r.speed = Object(T.n)(r.speed / 2.5, r.speed), r.vel = o.createVector(Math.cos(n + Math.PI / 2 + Object(T.n)(-Math.PI / 5, Math.PI / 5)) * r.speed * a / (o.frameRate() > 5 ? o.frameRate() : 30), Math.sin(n + Math.PI / 2 + Object(T.n)(-Math.PI / 5, Math.PI / 5)) * r.speed * a / (o.frameRate() > 5 ? o.frameRate() : 30)), r
                    }
                    return ce(s)
                }(ve),
                be = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, i, a, o, n)).decay = Object(T.n)(8, 11), r.color = [Object(T.n)(180, 220), Object(T.n)(0, 85), Object(T.n)(0, 30)], r
                    }
                    return ce(s)
                }(we),
                _e = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, i, a, o, n)).color = [Object(T.n)(0, 170), Object(T.n)(175, 215), Object(T.n)(220, 250)], r
                    }
                    return ce(s)
                }(we),
                xe = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), r.color = [Object(T.n)(0, 30), Object(T.n)(100, 200), Object(T.n)(210, 255)], r.radius = Object(T.o)(2, 6), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(T.n)(-Math.PI / 6, Math.PI / 6)) * r.speed * a / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(T.n)(-Math.PI / 6, Math.PI / 6)) * r.speed * a / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r
                    }
                    return ce(s)
                }(he),
                ke = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, i, a, o, n)).color = [Object(T.n)(200, 255), Object(T.n)(0, 40), Object(T.n)(0, 65)], r
                    }
                    return ce(s)
                }(xe),
                Ce = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), n.color = [Object(T.n)(0, 30), Object(T.n)(100, 200), Object(T.n)(210, 255)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                Se = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, i, a, o)).decay = Object(T.n)(14, 18), n.color = [Object(T.n)(110, 140), Object(T.n)(0, 40), Object(T.n)(110, 160)], n.radius = Object(T.o)(2, 6), n
                    }
                    return ce(s)
                }(he),
                Oe = function(e) {
                    se(s, e);
                    var t = ae(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, i, a, o)).decay = Object(T.n)(8, 10), r.color = [Object(T.n)(230, 255), Object(T.n)(230, 255), Object(T.n)(230, 255)], r.radius = Object(T.o)(1, 3), r.angle = Object(T.n)(0, 2 * Math.PI), r.angleVel = Object(T.n)(-.3, .3), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(T.n)(-Math.PI / 6, Math.PI / 6)) * r.speed * a / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(T.n)(-Math.PI / 6, Math.PI / 6)) * r.speed * a / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r
                    }
                    return ce(s, [{
                        key: "draw",
                        value: function() {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.triangle(e, -e, -e, -e, 0, e), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1)
                        }
                    }]), s
                }(he);

            function Te(e) {
                return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ee(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && Me(e, t)
            }

            function Me(e, t) {
                return (Me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Re(e) {
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
                    var s, i = Ne(e);
                    if (t) {
                        var a = Ne(this).constructor;
                        s = Reflect.construct(i, arguments, a)
                    } else s = i.apply(this, arguments);
                    return je(this, s)
                }
            }

            function je(e, t) {
                if (t && ("object" === Te(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function Ne(e) {
                return (Ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Pe(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Be(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function Ie(e, t, s) {
                return t && Be(e.prototype, t), s && Be(e, s), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var ze = function() {
                    function e(t, s, i, a) {
                        Pe(this, e), this.p5 = a, this.tileSize = i, this.origin = this.p5.createVector(t, s), this.particles = []
                    }
                    return Ie(e, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new he(this.origin, 1, this.tileSize, this.p5))
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return 0 === this.particles.length
                        }
                    }, {
                        key: "run",
                        value: function(e, t, s) {
                            if (s)
                                for (var i = 0; i < this.particles.length - 3; i++) this.particles.pop();
                            for (var a = this.particles.length - 1; a >= 0; a--) {
                                var o = this.particles[a];
                                o.run(e, t && a > this.particles.length / 2), o.isDead() && this.particles.splice(a, 1)
                            }
                        }
                    }]), e
                }(),
                De = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ue(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Le = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new de(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Fe = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new pe(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Ae = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new fe(this.origin, 1.5, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                qe = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new fe(this.origin, 3, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Ge = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ge(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                He = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ye(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Ue = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ve(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                We = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new we(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Qe = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new be(this.origin, 4.5, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ve = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new _e(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ye = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new xe(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ke = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new ke(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Je = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Ce(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Xe = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Se(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ze = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new me(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                $e = function(e) {
                    Ee(s, e);
                    var t = Re(s);

                    function s() {
                        return Pe(this, s), t.apply(this, arguments)
                    }
                    return Ie(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Oe(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze);

            function et(e) {
                return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function tt(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && st(e, t)
            }

            function st(e, t) {
                return (st = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function it(e) {
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
                    var s, i = ot(e);
                    if (t) {
                        var a = ot(this).constructor;
                        s = Reflect.construct(i, arguments, a)
                    } else s = i.apply(this, arguments);
                    return at(this, s)
                }
            }

            function at(e, t) {
                if (t && ("object" === et(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function ot(e) {
                return (ot = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function nt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function rt(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function lt(e, t, s) {
                return t && rt(e.prototype, t), s && rt(e, s), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var ct = function() {
                    function e(t, s, i, a, o) {
                        nt(this, e), this.p5 = o, this.pos = o.createVector(t, s), this.vel = o.createVector(0, 0), this.width = .2, this.imgName = "", this.alive = !0, this.target = {
                            pos: o.createVector(i.pos.x, i.pos.y),
                            width: i.width
                        }, this.blastRadius = .55, this.damage = a, this.speed = 15, this.onCreate()
                    }
                    return lt(e, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.vel.heading() + Math.PI / 2), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop()
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t) {
                            var s = this;
                            Y(this.pos.x, this.pos.y, this.blastRadius, e, t).forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return !this.alive
                        }
                    }, {
                        key: "kill",
                        value: function() {
                            this.alive = !1
                        }
                    }, {
                        key: "reachedTarget",
                        value: function(e) {
                            var t = this.pos,
                                s = this.target.pos;
                            return V(t.x, t.y, s.x, s.y, Math.max(this.target.width * e * .7, .7 * e) * (30 / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)))
                        }
                    }, {
                        key: "pxSpeed",
                        value: function(e, t) {
                            return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var s = this.pxSpeed(e, t),
                                i = this.vel.normalize();
                            this.vel = this.p5.createVector(i.x * s, i.y * s), this.pos.add(this.vel)
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                            this.vel = e.mult(this.speed)
                        }
                    }]), e
                }(),
                ht = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, i, a, o, n)).width = .2, r.imgName = "Egg", r.blastRadius = .55, r.speed = 15, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ue(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 10; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                ut = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, i, a, o, n)).width = .2, r.imgName = "Nut", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return lt(s)
                }(ct),
                dt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n)).width = .4, l.imgName = r ? "MasterArrow" : "Arrow", l.speed = 20, l.blastRadius = .2, l.onCreate(), l
                    }
                    return lt(s)
                }(ct),
                pt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, i, a, o, n)).width = .4, r.imgName = "Sword", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return lt(s)
                }(ct),
                ft = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, i, a, o, n)).width = .4, r.imgName = "PhantomSword", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return lt(s)
                }(ct),
                mt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, i, a, o, n)).width = .4, r.imgName = "Heart", r.speed = 20, r.blastRadius = .6, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Le(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 7; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                gt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, i, a, o, n)).width = .4, r.imgName = "EnchantedArrow", r.speed = 20, r.blastRadius = .6, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Xe(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                yt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, i, a, o, n)).width = .3, r.imgName = "WitchOrb", r.blastRadius = .6, r.speed = 15, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Fe(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                vt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n)).width = .4, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 13, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new De(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                wt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n)).width = .325, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 5, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius - .3, e, t), o = new De(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 6; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(Math.floor(i.damage / 2))
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                bt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n)).width = .45, l.imgName = "DiscoBall", l.blastRadius = r, l.speed = 13, l.angle = Object(T.n)(0, 2 * Math.PI), l.angleVel = Object(T.n)(-.5, .5), l
                    }
                    return lt(s, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.angle += this.angleVel * (t ? 2 : 1);
                            var s = this.pxSpeed(e, t),
                                i = this.vel.normalize();
                            this.vel = this.p5.createVector(i.x * s, i.y * s), this.pos.add(this.vel)
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new He(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                e.dance(), e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                _t = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n)).width = .5, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 11, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s, i) {
                            for (var a = this, o = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new De(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 12; r++) n.addParticle();
                            s.push(n), o.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            }));
                            for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 6; c++) {
                                var h = {
                                    pos: {
                                        x: this.pos.x + 1.5 * t * Math.cos((5 - c) * (Math.PI / 3) + Math.PI / 2 + l),
                                        y: this.pos.y + 1.5 * t * Math.sin((5 - c) * (Math.PI / 3) + Math.PI / 2 + l)
                                    },
                                    width: .5
                                };
                                i.push(new wt(this.pos.x, this.pos.y, h, this.damage, this.p5, this.blastRadius))
                            }
                            this.kill()
                        }
                    }]), s
                }(ct),
                xt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, {
                            pos: {
                                x: 1,
                                y: 1
                            },
                            width: .2
                        }, o, n)).p5 = n, l.width = .5, l.imgName = "Fish", l.blastRadius = .6, l.speed = 1.5, l.angle = 0, l.flipped = !1, l.paths = r, l.lastTile = [], l
                    }
                    return lt(s, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.flipped && this.p5.scale(-1, 1), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.pop()
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Je(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 13; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "reachedTarget",
                        value: function(e, t) {
                            return Y(this.pos.x, this.pos.y, this.target.width / 2, t, e).filter((function(e) {
                                return e.alive
                            })).length > 0
                        }
                    }, {
                        key: "update",
                        value: function(e, t, s, i, a, o) {
                            var n = z(this.pos.x, this.pos.y, this.p5, e),
                                r = this.paths[n.y][n.x];
                            if (0 === r && (n.x !== o.x || n.y !== o.y)) return this.pos.x = this.lastTile[0] * e + e / 2, void(this.pos.y = this.lastTile[1] * e + e / 2);
                            if (Q(this.pos.x, this.pos.y, n.x, n.y, e, this.p5, 0 === r.x ? "x" : "y")) {
                                if (!r) return void this.kill();
                                this.lastTile = [n.x, n.y];
                                var l = this.pxSpeed(e, t);
                                1 === r ? (this.vel = this.p5.createVector(-l, 0), this.flipped = !0, this.angle = 0) : 2 === r ? (this.vel = this.p5.createVector(0, -l), this.flipped = !1, this.angle = -Math.PI / 2) : 3 === r ? (this.vel = this.p5.createVector(l, 0), this.flipped = !1, this.angle = 0) : 4 === r && (this.vel = this.p5.createVector(0, l), this.flipped = !0, this.angle = -Math.PI / 2)
                            }
                            this.pos.add(this.vel)
                        }
                    }, {
                        key: "onCreate",
                        value: function() {}
                    }]), s
                }(ct),
                kt = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n)).pos = n.createVector(e, i), l.vel = n.createVector(0, 0), l.width = .45, l.imgName = "Missile", l.blastRadius = r, l.range = 5, l.speed = 5, l.target = a, l.lifetime = 300, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ue(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "findTarget",
                        value: function(e, t, s, i) {
                            var a = Y(this.pos.x, this.pos.y, this.range, e, t);
                            if (0 !== a.length) {
                                var o = K(a, s, i, this.p5, t);
                                o && (this.target = o)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t, s, i, a) {
                            this.lifetime <= 0 ? this.kill() : (this.lifetime -= 1, this.target.alive || this.findTarget(s, e, i, a), this.vel = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize().mult(this.speed * (t ? 2 : 1)), this.vel.limit(this.pxSpeed(e, t)), this.pos.add(this.vel))
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                            this.vel = e.mult(this.speed)
                        }
                    }]), s
                }(ct),
                Ct = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n, r)).imgName = "BigMissile", l.width = .55, l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var i = this, a = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ge(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 20; n++) o.addParticle();
                            s.push(o), a.forEach((function(e) {
                                return e.dealDamage(Math.min(Math.round(i.damage + .15 * e.health), 50))
                            })), this.kill()
                        }
                    }]), s
                }(kt),
                St = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n, r)).imgName = "CornKernel", l.width = .2, l.hasReached = !1, l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s, i, a, o) {
                            var n = this;
                            if (!this.hasReached) return this.hasReached = !0, void this.findTarget(e, t, a, o);
                            for (var r = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), l = new Ae(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 4; c++) l.addParticle();
                            s.push(l), r.forEach((function(e) {
                                return e.dealDamage(n.damage)
                            })), this.kill()
                        }
                    }]), s
                }(kt),
                Ot = function(e) {
                    tt(s, e);
                    var t = it(s);

                    function s(e, i, a, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, i, a, o, n, r)).imgName = "Corn", l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s, i) {
                            for (var a = this, o = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new Ae(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 13; r++) n.addParticle();
                            s.push(n), o.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            }));
                            for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 4; c++) {
                                var h = {
                                    pos: {
                                        x: this.pos.x + 1.5 * t * Math.cos((3 - c) * (Math.PI / 2) + Math.PI / 2 + l),
                                        y: this.pos.y + 1.5 * t * Math.sin((3 - c) * (Math.PI / 2) + Math.PI / 2 + l)
                                    },
                                    width: .5,
                                    alive: !0
                                };
                                i.push(new St(this.pos.x, this.pos.y, h, Math.max(.13 * this.damage, 1), this.p5, this.blastRadius / 2))
                            }
                            this.kill()
                        }
                    }]), s
                }(kt),
                Tt = {};
            Tt.chick = {
                lineColor: "#ffcd05",
                width: .5,
                blook: "Chick",
                weight: 5,
                name: "chick",
                title: "Laser Chick",
                desc: "A Chick that shoots lasers, enough said.",
                fullCd: 40,
                cost: 2,
                range: 2,
                damage: 1,
                upgrades: [
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Wise Chick",
                            range: 3,
                            cost: 1,
                            width: .55
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Chick",
                            cdMult: .5,
                            cost: 2,
                            width: .55
                        }
                    }],
                    [{
                        desc: "x3 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Strong Chick",
                            cost: 2,
                            dmgMult: 3,
                            width: .6
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedy Chick",
                            cdMult: .5,
                            cost: 2,
                            width: .6
                        }
                    }],
                    [{
                        desc: "Transform into 3 Chicks, each with a laser (x3 damage)",
                        iconBlook: "Chick",
                        data: {
                            finalUpgrade: 0,
                            title: "Chick Army",
                            cost: 4,
                            width: .35,
                            dmgMult: 3,
                            draw: function(e) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var t = this.width * e;
                                this.p5.image(this.img, 0, -t / 1.8, t, 1.15 * t), this.p5.image(this.img, t / 1.8, t / 1.8, t, 1.15 * t), this.p5.image(this.img, -t / 1.8, t / 1.8, t, 1.15 * t), this.p5.pop()
                            },
                            onAim: function(e, t, s, i) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, i), this.drawLine)) {
                                    this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight);
                                    var a = this.width * t,
                                        o = Math.atan2(e.pos.y - this.pos.y, e.pos.x - this.pos.x);
                                    this.p5.line(this.pos.x - a / 1.8 * Math.cos(o), this.pos.y - a / 1.8 * Math.sin(o), e.pos.x, e.pos.y), this.p5.line(this.pos.x + a / 1.8 * Math.sqrt(2) * Math.cos(o - Math.PI / 4), this.pos.y + a / 1.8 * Math.sqrt(2) * Math.sin(o - Math.PI / 4), e.pos.x, e.pos.y), this.p5.line(this.pos.x + a / 1.8 * Math.sqrt(2) * Math.cos(o + Math.PI / 4), this.pos.y + a / 1.8 * Math.sqrt(2) * Math.sin(o + Math.PI / 4), e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop()
                                }
                            }
                        }
                    }, {
                        desc: "No more lasers, just x1.5 damage explosive eggs",
                        iconBlook: "Chicken",
                        data: {
                            finalUpgrade: 1,
                            title: "Chicken Bomber",
                            blook: "Chicken",
                            cost: 4,
                            dmgMult: 1.5,
                            width: .65,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new ht(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Tt.owl = {
                lineColor: "#594a42",
                width: .55,
                blook: "Owl",
                weight: 3,
                name: "owl",
                title: "Owl Sniper",
                desc: "Shoots high damage bullets from a long range.",
                fullCd: 120,
                cost: 3,
                range: 9,
                damage: 5,
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Buff Owl",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Owl",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Power Owl",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedy Owl",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Each attack also deals 25% of an enemy's current health as damage (max 150)",
                        iconBlook: "Agent Owl",
                        data: {
                            finalUpgrade: 0,
                            title: "Agent Owl",
                            blook: "Agent Owl",
                            cost: 5,
                            lineColor: "#32da4e",
                            weight: 6,
                            attack: function(e, t, s, i) {
                                var a = Math.min(this.getDamage() + .25 * e.health, 150);
                                e.dealDamage(a), this.onHit(e, t, s, i)
                            }
                        }
                    }, {
                        desc: "Transforms into 3 birds that deal damage to all enemies in a line",
                        iconBlook: "Cockatoo",
                        data: {
                            finalUpgrade: 1,
                            title: "BIRDS",
                            cost: 4,
                            width: .32,
                            weight: 1,
                            blook: "Cockatoo",
                            draw: function(e, t) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var s = this.width * e;
                                this.p5.image(t.Parrot, -s, 0, s, 1.15 * s), this.p5.image(t.Cockatoo, 0, 0, s, 1.15 * s), this.p5.image(t.Macaw, s, 0, s, 1.15 * s), this.p5.pop()
                            },
                            onAim: function(e, t, s, i) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, i), this.drawLine)) {
                                    this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle);
                                    var a = this.width * t,
                                        o = (this.range + .5) * t;
                                    this.p5.noStroke(), this.p5.rectMode(this.p5.CORNER), this.p5.fill("#ed1c24"), this.p5.rect(1.5 * -a, 0, a, o), this.p5.fill("#ffffff"), this.p5.rect(-a / 2, 0, a, o), this.p5.fill("#00aeef"), this.p5.rect(a / 2, 0, a, o), this.p5.strokeWeight(1), this.p5.pop()
                                }
                            },
                            attack: function(e, t, s, i) {
                                var a = this,
                                    o = this.getDamage(),
                                    n = [],
                                    r = this.width * t,
                                    l = (this.range + .5) * t,
                                    c = this.pos.x - l * Math.sin(this.angle),
                                    h = this.pos.y + l * Math.cos(this.angle);
                                i.forEach((function(e) {
                                    (function(e, t, s, i, a) {
                                        var o = 0;
                                        o += X(t, e, a), o += X(a, e, i), o += X(i, e, s), o += X(e, s, t);
                                        var n = Math.abs((t.x * s.y - t.y * s.x + (s.x * i.y - s.y * i.x) + (i.x * a.y - i.y * a.x) + (a.x * t.y - a.y * t.x)) / 2);
                                        return Math.round(o) === Math.round(n)
                                    })({
                                        x: e.pos.x,
                                        y: e.pos.y
                                    }, {
                                        x: a.pos.x - r * Math.cos(a.angle),
                                        y: a.pos.y + r * Math.sin(a.angle)
                                    }, {
                                        x: a.pos.x - r * Math.cos(a.angle),
                                        y: a.pos.y - r * Math.sin(a.angle)
                                    }, {
                                        x: c - r * Math.cos(a.angle),
                                        y: h - r * Math.sin(a.angle)
                                    }, {
                                        x: c + r * Math.cos(a.angle),
                                        y: h + r * Math.sin(a.angle)
                                    }) && n.push(e)
                                })), n.forEach((function(e) {
                                    return e.dealDamage(o)
                                })), this.onHit(e, t, s, i)
                            }
                        }
                    }]
                ]
            }, Tt.squirrel = {
                drawLine: !1,
                width: .5,
                blook: "Squirrel",
                name: "squirrel",
                title: "Nutty Squirrel",
                desc: "Throws harmful nuts at enemies.",
                fullCd: 45,
                cost: 3,
                range: 1.5,
                damage: 3,
                onAim: function(e, t, s, i, a) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new ut(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                },
                upgrades: [
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Sharp Squirrel",
                            range: 3,
                            cost: 1,
                            width: .55
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Swift Squirrel",
                            cost: 2,
                            cdMult: .5,
                            width: .55
                        }
                    }],
                    [{
                        desc: "x3 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Strong Squirrel",
                            cost: 3,
                            dmgMult: 3
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedster Squirrel",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Transform into 9 mini squirrels, each with a 1/4 damage acorn",
                        iconBlook: "Squirrel",
                        data: {
                            finalUpgrade: 0,
                            title: "Lots O' Squirrels",
                            cost: 4,
                            width: .3,
                            dmgMult: 9 / 4,
                            draw: function(e) {
                                var t = this,
                                    s = [-1, 0, 1];
                                s.forEach((function(i) {
                                    s.forEach((function(s) {
                                        t.p5.push(), t.p5.translate(t.pos.x + .325 * e * s, t.pos.y + .325 * e * i), t.p5.angleMode(t.p5.RADIANS), t.p5.rotate(t.angle), t.p5.imageMode(t.p5.CENTER);
                                        var a = t.width * e;
                                        t.p5.image(t.img, 0, 0, a, 1.15 * a), t.p5.pop()
                                    }))
                                }))
                            },
                            onAim: function(e, t, s, i, a) {
                                var o = this;
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown();
                                    var n = [-1, 0, 1];
                                    n.forEach((function(s) {
                                        n.forEach((function(i) {
                                            a.push(new ut(o.pos.x + .325 * t * i, o.pos.y + .325 * t * s, e, o.getDamage() / 9, o.p5))
                                        }))
                                    }))
                                }
                            }
                        }
                    }, {
                        desc: "Every 5 attacks, the squirrel goes nuts and throws acorns rapidly",
                        iconBlook: "Nuts Squirrel",
                        data: {
                            finalUpgrade: 1,
                            title: "GO NUTS SQUIRREL",
                            blook: "Nuts Squirrel",
                            img: "Squirrel",
                            cost: 4,
                            width: .6,
                            nutsAttacks: 0,
                            nutsCd: 4,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.nutsCd > 0 ? (this.resetCooldown(), this.nutsCd -= 1) : 0 === this.nutsCd ? (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks = 13, this.img = this.images["Nuts Squirrel"], this.nutsCd = -1) : this.nutsAttacks <= 0 ? (this.resetCooldown(), this.nutsCd = 4, this.img = this.images.Squirrel) : (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks -= 1), a.push(new ut(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Tt.goldfish = {
                drawLine: !1,
                follow: !1,
                width: .6,
                blook: "Goldfish",
                name: "goldfish",
                title: "Splashy Goldfish",
                desc: "Deals damage by splashing enemies around himself.",
                fullCd: 60,
                cost: 4,
                range: 1,
                damage: 2,
                target: function(e, t, s, i, a, o) {
                    var n = this;
                    if (this.canFire()) {
                        var r = this.visible(e, t);
                        if (0 !== r.length) {
                            this.resetCooldown();
                            for (var l = new Ye(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 8; c++)
                                for (var h = 0; h < 8; h++) l.addParticle(Math.PI / 4 * c);
                            s.push(l), r.forEach((function(e) {
                                return e.dealDamage(n.getDamage())
                            }))
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Goldy Goldfish",
                            cost: 2,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Goldfish",
                            cost: 2,
                            cdMult: 2 / 3,
                            width: .65
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Super Goldfish",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Soaker Goldfish",
                            cost: 2,
                            range: 1.5
                        }
                    }],
                    [{
                        desc: "Every 2 attacks, spawn a fish that follows the path and explodes on contact",
                        iconBlook: "Goldfish",
                        data: {
                            finalUpgrade: 0,
                            title: "School of Fish",
                            fishCd: 0,
                            cost: 4,
                            width: .65,
                            target: function(e, t, s, i, a, o, n, r) {
                                var l = this;
                                if (this.canFire()) {
                                    var c = this.visible(e, t);
                                    if (0 !== c.length) {
                                        this.resetCooldown();
                                        for (var h = new Ye(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                            for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                                        s.push(h), c.forEach((function(e) {
                                            return e.dealDamage(l.getDamage())
                                        })), this.fishCd <= 0 ? (o.push(new xt(r.x * t + t / 2, r.y * t + t / 2, null, 2 * this.getDamage(), this.p5, Object(T.m)(n))), this.fishCd = 1) : this.fishCd -= 1
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Every attack, send out an extra wave of half-strength damage",
                        iconBlook: "Red Goldfish",
                        data: {
                            finalUpgrade: 1,
                            title: "Hungry Fish",
                            cost: 4,
                            blook: "Red Goldfish",
                            width: .65,
                            secondAttack: !1,
                            target: function(e, t, s, i, a, o, n, r) {
                                var l = this;
                                if (this.canFire()) {
                                    var c = this.visible(e, t);
                                    if (0 !== c.length || this.secondAttack) {
                                        for (var h = this.secondAttack ? new Ke(this.pos.x, this.pos.y, t, this.p5) : new Ye(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                            for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                                        s.push(h), c.forEach((function(e) {
                                            return e.dealDamage(l.secondAttack ? l.getDamage() / 2 : l.getDamage())
                                        })), this.secondAttack ? (this.resetCooldown(), this.secondAttack = !1) : (this.cd = 10, this.secondAttack = !0)
                                    }
                                }
                            }
                        }
                    }]
                ]
            }, Tt.pig = {
                drawLine: !1,
                width: .6,
                blook: "Pig",
                name: "pig",
                title: "Pig Bomber",
                desc: "Shoots a ball that explodes and deals damage.",
                fullCd: 90,
                cost: 4,
                range: 1.5,
                damage: 5,
                blastRadius: .6,
                onAim: function(e, t, s, i, a) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new vt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Big Pig",
                            cost: 2,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "x1.5 Blast Area",
                        icon: "fas fa-bullseye",
                        iconColor: "#ff3333",
                        data: {
                            title: "Boomer Pig",
                            cost: 2,
                            blastMult: 1.5,
                            width: .65
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Power Pig",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Perceptive Pig",
                            cost: 1,
                            range: 2.5
                        }
                    }],
                    [{
                        desc: "Throw a Disco Ball that forces enemies to dance for 1s",
                        iconBlook: "Party Pig",
                        data: {
                            finalUpgrade: 0,
                            title: "Party Pig",
                            cost: 4,
                            blook: "Party Pig",
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new bt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }, {
                        desc: "After exploding, split into 5 mini exploding balls",
                        iconBlook: "Pig",
                        data: {
                            finalUpgrade: 1,
                            title: "Giant Pig",
                            cost: 4,
                            width: 1,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new _t(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }]
                ]
            }, Tt.elf = {
                drawLine: !1,
                width: .6,
                blook: "Elf",
                name: "elf",
                title: "Archer Elf",
                desc: "Fires arrows to damage enemies.",
                fullCd: 60,
                cost: 4,
                range: 2,
                damage: 2,
                onAim: function(e, t, s, i, a) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new dt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Buff Elf",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Stealth Elf",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Sharpshot Elf",
                            cost: 2,
                            range: 3
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Prodigy Elf",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Deal 75% Damage, but shoot 4 times as fast",
                        iconBlook: "Master Elf",
                        data: {
                            finalUpgrade: 0,
                            title: "Master Elf",
                            cost: 4,
                            blook: "Master Elf",
                            cdMult: 1 / 4,
                            dmgMult: .75,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new dt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !0)))
                            }
                        }
                    }, {
                        desc: "Shoot enchanted arrows that explode and deal x2.5 damage",
                        iconBlook: "Enchanted Elf",
                        data: {
                            finalUpgrade: 1,
                            title: "Enchanted Elf",
                            cost: 4,
                            blook: "Enchanted Elf",
                            dmgMult: 2.5,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new gt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Tt.dragon = {
                drawLine: !1,
                width: .6,
                blook: "Dragon",
                name: "dragon",
                title: "Flame Dragon",
                desc: "Breaths damaging fire in a short-range, cone-like shape.",
                fullCd: 70,
                cost: 4,
                range: 1.4,
                damage: 3,
                onAim: function(e, t, s, i) {
                    if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                        this.resetCooldown(), this.attack(e, t, s, i);
                        for (var a = new We(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++) a.addParticle(this.angle);
                        s.push(a)
                    }
                },
                attack: function(e, t, s, i) {
                    var a = this,
                        o = this.getDamage(),
                        n = [],
                        r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                    i.forEach((function(e) {
                        Z({
                            x: e.pos.x,
                            y: e.pos.y
                        }, {
                            x: a.pos.x,
                            y: a.pos.y
                        }, {
                            x: a.pos.x - r * Math.sin(a.angle - Math.PI / 5),
                            y: a.pos.y + r * Math.cos(a.angle - Math.PI / 5)
                        }, {
                            x: a.pos.x - r * Math.sin(a.angle + Math.PI / 5),
                            y: a.pos.y + r * Math.cos(a.angle + Math.PI / 5)
                        }) && n.push(e)
                    })), n.forEach((function(e) {
                        return e.dealDamage(o)
                    }))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Mighty Dragon",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Swift Dragon",
                            cost: 2,
                            cdMult: .8
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Lethal Dragon",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speed Dragon",
                            cost: 1,
                            cdMult: .8
                        }
                    }],
                    [{
                        desc: "+1 Range and x1.75 Damage; this will hurt",
                        iconBlook: "Fire Dragon",
                        data: {
                            finalUpgrade: 0,
                            title: "Fire Dragon",
                            cost: 4,
                            width: .7,
                            blook: "Fire Dragon",
                            range: 2.4,
                            dmgMult: 1.75,
                            onAim: function(e, t, s, i) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.attack(e, t, s, i);
                                    for (var a = new Qe(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 40; o++) a.addParticle(this.angle);
                                    s.push(a)
                                }
                            }
                        }
                    }, {
                        desc: "Halve the firing rate, but blow back enemies that are hit by your breath",
                        iconBlook: "Wind Dragon",
                        data: {
                            finalUpgrade: 1,
                            title: "Wind Dragon",
                            cost: 4,
                            width: .7,
                            cdMult: 2,
                            blook: "Wind Dragon",
                            onAim: function(e, t, s, i) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.attack(e, t, s, i);
                                    for (var a = new Ve(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++) a.addParticle(this.angle);
                                    s.push(a)
                                }
                            },
                            attack: function(e, t, s, i) {
                                var a = this,
                                    o = this.getDamage(),
                                    n = [],
                                    r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                                i.forEach((function(e) {
                                    Z({
                                        x: e.pos.x,
                                        y: e.pos.y
                                    }, {
                                        x: a.pos.x,
                                        y: a.pos.y
                                    }, {
                                        x: a.pos.x - r * Math.sin(a.angle - Math.PI / 5),
                                        y: a.pos.y + r * Math.cos(a.angle - Math.PI / 5)
                                    }, {
                                        x: a.pos.x - r * Math.sin(a.angle + Math.PI / 5),
                                        y: a.pos.y + r * Math.cos(a.angle + Math.PI / 5)
                                    }) && n.push(e)
                                })), n.forEach((function(e) {
                                    e.dealDamage(o), e.blowBack()
                                }))
                            }
                        }
                    }]
                ]
            }, Tt.wizard = {
                drawLine: !0,
                lineColor: "#ffcd05",
                weight: 10,
                width: .6,
                blook: "Wizard",
                name: "wizard",
                title: "Spark Wizard",
                desc: "Shoots a spark that jumps from enemy to enemy while dealing damage.",
                fullCd: 90,
                cost: 5,
                range: 1.7,
                damage: 2,
                maxTargets: 7,
                weightDec: 1,
                onAim: function(e, t, s, i) {
                    if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                        this.resetCooldown();
                        var a = e,
                            o = [a],
                            n = this.weight;
                        for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(n), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), a.dealDamage(this.getDamage()); o.length < this.maxTargets && 0 !== i.filter((function(e) {
                                return !o.includes(e)
                            })).length;) {
                            var r = q(i, a.pos, o);
                            if (!r) break;
                            n -= this.weightDec, this.p5.strokeWeight(n);
                            var l = Object(T.n)(a.pos.x, r.pos.x),
                                c = Object(T.n)(a.pos.y, r.pos.y);
                            this.p5.line(a.pos.x, a.pos.y, l, c), this.p5.line(l, c, r.pos.x, r.pos.y), r.dealDamage(this.getDamage()), o.push(r), a = r
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "x2.5 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Advanced Wizard",
                            cost: 2,
                            dmgMult: 2.5
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quickcast Wizard",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Elder Wizard",
                            cost: 2,
                            dmgMult: 2,
                            lineColor: "#5a459c",
                            width: .65
                        }
                    }, {
                        desc: "x2 Max Zap Targets",
                        icon: "fas fa-bolt",
                        iconColor: "#5a459c",
                        data: {
                            title: "Crazy Wizard",
                            cost: 2,
                            maxTargetsMult: 2,
                            lineColor: "#5a459c",
                            width: .65,
                            weightDec: .6
                        }
                    }],
                    [{
                        desc: "Every attack, also cast a cursed, exploding orb",
                        iconBlook: "Witch",
                        data: {
                            finalUpgrade: 0,
                            title: "Evil Witch",
                            cost: 4,
                            blook: "Witch",
                            lineColor: "#3a3a3a",
                            onAim: function(e, t, s, i, a) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), a.push(new yt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5));
                                    var o = e,
                                        n = [o],
                                        r = this.weight;
                                    for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(r), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), o.dealDamage(this.getDamage()); n.length < this.maxTargets && 0 !== i.filter((function(e) {
                                            return !n.includes(e)
                                        })).length;) {
                                        var l = q(i, o.pos, n);
                                        if (!l) break;
                                        r -= this.weightDec, this.p5.strokeWeight(r);
                                        var c = Object(T.n)(o.pos.x, l.pos.x),
                                            h = Object(T.n)(o.pos.y, l.pos.y);
                                        this.p5.line(o.pos.x, o.pos.y, c, h), this.p5.line(c, h, l.pos.x, l.pos.y), l.dealDamage(this.getDamage()), n.push(l), o = l
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Harness the power of lightning to double your max zap targets",
                        iconBlook: "Lightning Wizard",
                        data: {
                            finalUpgrade: 1,
                            title: "God of Lightning",
                            cost: 4,
                            blook: "Lightning Wizard",
                            maxTargetsMult: 2,
                            weight: 12,
                            weightDec: .4,
                            lineColor: "#1affff"
                        }
                    }]
                ]
            }, Tt.unicorn = {
                drawLine: !1,
                width: .6,
                blook: "Unicorn",
                name: "unicorn",
                title: "Rocket Unicorn",
                desc: "Fires an auto-tracking missile that explodes on contact.",
                fullCd: 90,
                cost: 6,
                range: 5,
                damage: 5,
                blastRadius: .7,
                onAim: function(e, t, s, i, a) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new kt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                },
                upgrades: [
                    [{
                        desc: "+2 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Swift Unicorn",
                            cost: 1,
                            rangeAdd: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Majestic Unicorn",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Daring Unicorn",
                            cost: 3,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.5 Blast Area",
                        icon: "fas fa-bullseye",
                        iconColor: "#ff3333",
                        data: {
                            title: "Kaboom Unicorn",
                            cost: 2,
                            blastMult: 1.5
                        }
                    }],
                    [{
                        desc: "Fires missiles that deal 15% of an enemy's current health as bonus damage (max 50)",
                        iconBlook: "Crazy Unicorn",
                        data: {
                            finalUpgrade: 0,
                            title: "Crazy Unicorn",
                            blook: "Crazy Unicorn",
                            width: .7,
                            cost: 7,
                            angle: 0,
                            onAim: function(e, t, s, i, a) {
                                this.canFire() && (this.resetCooldown(), a.push(new Ct(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            },
                            update: function(e) {
                                var t = e ? 2 : 1;
                                this.cd > 0 && (this.cd -= t), this.angle <= 2 * -Math.PI ? this.angle = -Math.PI / 34 : this.angle -= Math.PI / (34 / t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}))
                            }
                        }
                    }, {
                        desc: "Fire tracking corn cobs that explode into tracking kernals",
                        iconBlook: "uni-CORN",
                        data: {
                            finalUpgrade: 1,
                            title: "uni-CORN",
                            blook: "uni-CORN",
                            width: .7,
                            cost: 4,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new Ot(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }]
                ]
            }, Tt.penguin = {
                drawLine: !1,
                follow: !1,
                width: .5,
                blook: "Baby Penguin",
                name: "penguin",
                title: "Freeze Penguin",
                desc: "Occasionally freezes all enemies around himself.",
                fullCd: 110,
                freezeTime: 15,
                cost: 3,
                range: 1,
                damage: 0,
                target: function(e, t, s, i, a, o, n, r) {
                    var l = this;
                    if (this.canFire()) {
                        var c = this.visible(e, t);
                        if (0 !== c.length) {
                            this.resetCooldown();
                            for (var h = new $e(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                            s.push(h), c.forEach((function(e) {
                                e.freeze(l.freezeTime), e.dealDamage(l.getDamage())
                            }))
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "+1 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Icicle Penguin",
                            cost: 1,
                            damage: 1,
                            width: .55
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Blizzard Penguin",
                            cost: 2,
                            cdMult: .8,
                            width: .55
                        }
                    }],
                    [{
                        desc: "+2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Frosty Penguin",
                            dmgAdd: 2,
                            cost: 1
                        }
                    }, {
                        desc: "x1.5 Freeze Time",
                        icon: "far fa-snowflake",
                        iconColor: "#5c5c8a",
                        data: {
                            title: "Sub-Zero Penguin",
                            cost: 2,
                            freezeMult: 1.5
                        }
                    }],
                    [{
                        desc: "No more freezing, but greatly slow all enemies within range",
                        iconBlook: "Penguin",
                        data: {
                            finalUpgrade: 0,
                            title: "Emperor Penguin",
                            cost: 4,
                            blook: "Penguin",
                            width: .65,
                            draw: function(e) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.stroke(245, 245, 245, 100), this.p5.strokeWeight(3), this.p5.fill(250, 250, 250, 50);
                                var t = (this.range + .5) * e * 2;
                                this.p5.ellipse(0, 0, t, t), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop()
                            },
                            target: function(e, t, s, i, a, o, n, r) {
                                var l = this,
                                    c = this.visible(e, t);
                                if (0 !== c.length) {
                                    var h = this.canFire();
                                    if (c.forEach((function(e) {
                                            e.slow(), h && e.dealDamage(l.getDamage())
                                        })), h) {
                                        this.resetCooldown();
                                        for (var u = new $e(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 8; d++)
                                            for (var p = 0; p < 8; p++) u.addParticle(Math.PI / 4 * d);
                                        s.push(u)
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Every 5 attacks, execute an enemy (deal 150 damage)",
                        iconBlook: "Arctic Fox",
                        data: {
                            finalUpgrade: 1,
                            title: "Arctic Buddies",
                            cost: 4,
                            executeCd: 4,
                            width: .4,
                            follow: !0,
                            drawLine: !0,
                            draw: function(e, t) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var s = this.width * e;
                                this.p5.image(t["Arctic Fox"], -.25 * e, -.25 * e, s, 1.15 * s), this.p5.image(t["Polar Bear"], .25 * e, -.25 * e, s, 1.15 * s), this.p5.image(t["Arctic Hare"], -.25 * e, .25 * e, s, 1.15 * s), this.p5.image(t.Seal, .25 * e, .25 * e, s, 1.15 * s), this.p5.pop()
                            },
                            target: function(e, t, s, i, a, o) {
                                var n = this.visible(e, t);
                                if (0 !== n.length) {
                                    var r = K(n, i, a, this.p5, t);
                                    r && this.onAim(r, t, s, n, o)
                                }
                            },
                            onAim: function(e, t, s, i) {
                                var a = this;
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.executeCd <= 0 ? (this.p5.push(), this.p5.stroke("#7ca1d5"), this.p5.strokeWeight(10), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop(), e.dealDamage(150), this.executeCd = 4) : this.executeCd -= 1;
                                    for (var o = new $e(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 8; n++)
                                        for (var r = 0; r < 8; r++) o.addParticle(Math.PI / 4 * n);
                                    s.push(o), i.forEach((function(e) {
                                        e.freeze(a.freezeTime), e.dealDamage(a.getDamage())
                                    }))
                                }
                            }
                        }
                    }]
                ]
            }, Tt.king = {
                drawLine: !1,
                width: .6,
                blook: "King",
                name: "king",
                title: "The King",
                desc: "Throws damaging swords at an alarmingly fast pace.",
                fullCd: 6,
                cost: 12,
                range: 2,
                damage: 1,
                onAim: function(e, t, s, i, a) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new pt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                },
                upgrades: [
                    [{
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Noble King",
                            cost: 7,
                            cdMult: 2 / 3
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Wise King",
                            cost: 2,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Mighty King",
                            cost: 7,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Great King",
                            cost: 2,
                            rangeAdd: 1,
                            width: .65
                        }
                    }],
                    [{
                        desc: "Shoot hearts that explode and deal damage in an area",
                        iconBlook: "King of Hearts",
                        data: {
                            finalUpgrade: 0,
                            title: "King of Hearts",
                            blook: "King of Hearts",
                            cost: 7,
                            width: .75,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new mt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                            }
                        }
                    }, {
                        desc: "Throws haunted swords that deal double the damage",
                        iconBlook: "Phantom King",
                        data: {
                            finalUpgrade: 1,
                            title: "Phantom King",
                            blook: "Phantom King",
                            cost: 7,
                            width: .75,
                            dmgMult: 2,
                            onAim: function(e, t, s, i, a) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), a.push(new ft(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                            }
                        }
                    }]
                ]
            }, Tt.jester = {
                drawLine: !1,
                width: .6,
                blook: "Jester",
                name: "jester",
                title: "Helpful Jester",
                desc: "Every 10 seconds gives nearby towers bonus buffs (+50% damage to start).",
                fullCd: 300,
                cost: 4,
                range: 2,
                damage: 0,
                damageBuff: 1.5,
                speedBuff: 1,
                target: function(e, t, s, i, a, o, n, r, l) {
                    var c = this;
                    if (this.canFire()) {
                        var h = this.visible(l, t).filter((function(e) {
                            return e !== c
                        }));
                        this.resetCooldown();
                        for (var u = new qe(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++) u.addParticle();
                        s.push(u), this.angle = 2 * -Math.PI, h.forEach((function(e) {
                            return e.buff({
                                damageBuff: c.damageBuff,
                                speedBuff: c.speedBuff
                            })
                        }))
                    }
                },
                update: function(e) {
                    var t = e ? 2 : 1;
                    this.cd > 0 && (this.cd -= t), this.angle < 0 && (this.angle += Math.PI / (20 / t))
                },
                upgrades: [
                    [{
                        desc: "x2 Firing Rate to Buffed Towers",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Charming Jester",
                            cost: 2,
                            speedBuff: .5
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Friendly Jester",
                            cost: 1,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "From x1.5 to x2 Damage to Buffed Towers",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "General Jester",
                            cost: 2,
                            damageBuff: 1.75
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Good Guy Jester",
                            cost: 1,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "Multiply your attack speed and damage buffs by 1.5",
                        iconBlook: "Mad Hatter",
                        data: {
                            finalUpgrade: 0,
                            title: "Mad Hatter",
                            blook: "Mad Hatter",
                            width: .7,
                            cost: 4,
                            dmgBuffMult: 1.5,
                            speedBuffMult: 2 / 3,
                            target: function(e, t, s, i, a, o, n, r, l) {
                                var c = this;
                                if (this.canFire()) {
                                    var h = this.visible(l, t).filter((function(e) {
                                        return e !== c
                                    }));
                                    this.resetCooldown();
                                    for (var u = new Ze(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++) u.addParticle();
                                    s.push(u), this.angle = 2 * -Math.PI, h.forEach((function(e) {
                                        return e.buff({
                                            damageBuff: c.damageBuff,
                                            speedBuff: c.speedBuff
                                        })
                                    }))
                                }
                            }
                        }
                    }, {
                        desc: "Decrease your size and halve your cooldown",
                        iconBlook: "Jester",
                        data: {
                            finalUpgrade: 1,
                            title: "Mini Jester",
                            width: .3,
                            cost: 4,
                            cdMult: .5
                        }
                    }]
                ]
            };
            var Et = Tt;

            function Mt(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var Rt = function() {
                    function e(t, s, i, a, o, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.p5 = i, this.images = n, this.lineColor = "#ffcd05", this.drawLine = !0, this.follow = !0, this.width = .65, this.img = n.Chick, this.weight = 5, this.blook = "", this.alive = !0, this.name = o, this.sound = null, this.title = "", this.desc = "", this.level = -1, this.finalUpgrade = -1, this.angle = 0, this.gridPos = this.p5.createVector(t, s), this.pos = this.p5.createVector(t * a + a / 2, s * a + a / 2), this.fullCd = 60, this.cd = 0, this.cost = 0, this.damage = 5, this.range = 3, this.blastRadius = .55, this.totalCost = 0, this.upgrades = [], this.upIndexes = [], this.buffTime = 0, this.buffs = {}, this.onCreate(), this.upgrade(Et[o], -1)
                    }
                    var t, s, i;
                    return t = e, (s = [{
                        key: "aim",
                        value: function(e, t) {
                            this.angle = Math.atan2(t - this.pos.y, e - this.pos.x) - Math.PI / 2
                        }
                    }, {
                        key: "attack",
                        value: function(e, t, s, i) {
                            e.dealDamage(this.getDamage()), this.onHit(e, t, s, i)
                        }
                    }, {
                        key: "canFire",
                        value: function() {
                            return this.cd <= 0
                        }
                    }, {
                        key: "draw",
                        value: function(e) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop()
                        }
                    }, {
                        key: "getDamage",
                        value: function() {
                            return Math.round(this.damage * (this.buffs.damageBuff || 1))
                        }
                    }, {
                        key: "getCooldown",
                        value: function() {
                            return Math.round(this.fullCd * (this.buffs.speedBuff || 1))
                        }
                    }, {
                        key: "getSellPrice",
                        value: function() {
                            return Math.round(.8 * this.totalCost)
                        }
                    }, {
                        key: "kill",
                        value: function() {
                            this.alive = !1
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return !this.alive
                        }
                    }, {
                        key: "onAim",
                        value: function(e, t, s, i) {
                            (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, i), this.drawLine && (this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop()))
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            this.cd = 0
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, s, i) {}
                    }, {
                        key: "resetCooldown",
                        value: function() {
                            this.cd = this.getCooldown()
                        }
                    }, {
                        key: "target",
                        value: function(e, t, s, i, a, o) {
                            var n = this.visible(e, t);
                            if (0 !== n.length) {
                                var r = K(n, i, a, this.p5, t);
                                r && this.onAim(r, t, s, e, o)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            var t = e ? 2 : 1;
                            this.cd > 0 && (this.cd -= t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}))
                        }
                    }, {
                        key: "upgrade",
                        value: function(e, t) {
                            var s = this; - 1 !== t && this.upIndexes.push(t);
                            var i = void 0 === e ? {} : e;
                            Object.keys(i).forEach((function(t) {
                                "blook" === t && (s.img = s.images[e.blook], s.blook = e.blook), "img" === t ? s.img = s.images[e.img] : "cdMult" === t ? s.fullCd = Math.floor(s.fullCd * e.cdMult) : "dmgMult" === t ? s.damage = Math.round(s.damage * e.dmgMult) : "dmgAdd" === t ? s.damage += e.dmgAdd : "rangeAdd" === t ? s.range += e.rangeAdd : "blastMult" === t ? s.blastRadius = s.blastRadius * e.blastMult : "freezeMult" === t ? s.freezeTime = Math.round(s.freezeTime * e.freezeMult) : "maxTargetsMult" === t ? s.maxTargets = Math.round(s.maxTargets * e.maxTargetsMult) : "dmgBuffMult" === t ? s.damageBuff = s.damageBuff * e.dmgBuffMult : "speedBuffMult" === t ? s.speedBuff = s.speedBuff * e.speedBuffMult : ["onHit", "draw", "onAim", "attack", "target", "update"].includes(t) ? s[t] = e[t].bind(s) : s[t] = e[t]
                            })), e.cost && (this.totalCost += e.cost), this.level += 1
                        }
                    }, {
                        key: "visible",
                        value: function(e, t) {
                            return Y(this.pos.x, this.pos.y, this.range, e, t)
                        }
                    }, {
                        key: "buff",
                        value: function(e) {
                            "jester" !== this.name && (this.buffTime = 50, this.buffs = e)
                        }
                    }, {
                        key: "move",
                        value: function(e, t, s) {
                            this.gridPos = this.p5.createVector(e, t), this.pos = this.p5.createVector(e * s + s / 2, t * s + s / 2)
                        }
                    }]) && Mt(t.prototype, s), i && Mt(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                jt = s("2g0G"),
                Nt = [
                    [{
                        wait: 0,
                        cd: 65,
                        enemies: {
                            types: [1],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 30,
                        enemies: {
                            types: [1, 2],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 15,
                        enemies: {
                            types: [1, 2, 3],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [1, 2, 2, 4],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [1],
                            count: 53
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 20,
                        enemies: {
                            types: [8],
                            count: 8
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [2, 2, 4, 8],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [1, 2, 4, 2, 5, 2, 9],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 16,
                        enemies: {
                            types: [1, 2, 2, 8, 3, 3, 4, 10],
                            count: 5
                        }
                    }],
                    [{
                        wait: 40,
                        cd: 18,
                        enemies: {
                            types: [2, 3, 6, 2, 7, 6, 4, 15],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [60],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [10, 10, 12],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [15, 16, 12, 20],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [20, 10, 15, 30],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [10, 20, 20, 30],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [20, 20, 10, 20, 20, 75],
                            count: 4
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [30, 45, 25, 50],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [45, 30, 35, 30, 65],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [25],
                            count: 35
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [60, 40, 55, 80],
                            count: 5
                        }
                    }],
                    [{
                        wait: 80,
                        cd: 7,
                        enemies: {
                            types: [20, 30, 40, 50, 60, 70],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 7,
                        enemies: {
                            types: [375],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [70, 80, 70, 120],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [80, 90, 100, 140],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [70, 90, 100, 110, 150],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [100, 60, 75, 90, 90, 65, 60, 170],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 20,
                        enemies: {
                            types: [235],
                            count: 15
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 8,
                        enemies: {
                            types: [120, 130, 150],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [100, 120, 130, 120, 170],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [120, 80, 80, 100, 120, 100, 80, 180, 200],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [120, 80, 100, 110, 140, 170, 220],
                            count: 5
                        }
                    }],
                    [{
                        wait: 60,
                        cd: 6,
                        enemies: {
                            types: [200, 100, 120, 130, 150, 100],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [1700],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 150, 350],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 250, 350, 250, 200, 250],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 300, 400],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [350, 300, 450, 350, 350, 400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [800],
                            count: 12
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [600, 500, 400, 500, 600, 400, 800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [700, 900, 800, 600, 600, 800, 1e3],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [600, 700, 800, 900, 1e3, 1100, 1100],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1e3, 800, 900, 900, 800, 1100, 1100],
                            count: 5
                        }
                    }],
                    [{
                        wait: 90,
                        cd: 4,
                        enemies: {
                            types: [1200, 1100, 1e3, 900, 800],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [4200],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1400, 1100, 900, 1100, 1400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1e3, 1200, 1400, 1600, 1e3, 800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1500, 1200, 1500, 1200, 1400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1500, 1800, 1e3, 1500, 1800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1850],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2e3],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2200],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2400],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2600],
                            count: 30
                        }
                    }],
                    [{
                        wait: 180,
                        cd: 4,
                        enemies: {
                            types: [2200],
                            count: 30
                        }
                    }, {
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [13e3],
                            count: 1
                        }
                    }]
                ],
                Pt = s("qnYv");

            function Bt(e) {
                return (Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function It(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == s) return;
                    var i, a, o = [],
                        n = !0,
                        r = !1;
                    try {
                        for (s = s.call(e); !(n = (i = s.next()).done) && (o.push(i.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        r = !0, a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return zt(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(e);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return zt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function zt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, i = new Array(t); s < t; s++) i[s] = e[s];
                return i
            }

            function Dt() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Dt = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    o = i.asyncIterator || "@@asyncIterator",
                    n = i.toStringTag || "@@toStringTag";

                function r(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    r({}, "")
                } catch (e) {
                    r = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, i) {
                    var a = t && t.prototype instanceof u ? t : u,
                        o = Object.create(a.prototype),
                        n = new k(i || []);
                    return o._invoke = function(e, t, s) {
                        var i = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === i) throw new Error("Generator is already running");
                            if ("completed" === i) {
                                if ("throw" === a) throw o;
                                return S()
                            }
                            for (s.method = a, s.arg = o;;) {
                                var n = s.delegate;
                                if (n) {
                                    var r = b(n, s);
                                    if (r) {
                                        if (r === h) continue;
                                        return r
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === i) throw i = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                i = "executing";
                                var l = c(e, t, s);
                                if ("normal" === l.type) {
                                    if (i = s.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (i = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, n), o
                }

                function c(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
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

                function u() {}

                function d() {}

                function p() {}
                var f = {};
                r(f, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(C([])));
                g && g !== t && s.call(g, a) && (f = g);
                var y = p.prototype = u.prototype = Object.create(f);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        r(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var i;
                    this._invoke = function(a, o) {
                        function n() {
                            return new t((function(i, n) {
                                ! function i(a, o, n, r) {
                                    var l = c(e[a], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == Bt(u) && s.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            i("next", e, n, r)
                                        }), (function(e) {
                                            i("throw", e, n, r)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return i("throw", e, n, r)
                                        }))
                                    }
                                    r(l.arg)
                                }(a, o, i, n)
                            }))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                }

                function b(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var i = c(s, e.iterator, t.arg);
                    if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
                    var a = i.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function _(e) {
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
                    }], e.forEach(_, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                o = function t() {
                                    for (; ++i < e.length;)
                                        if (s.call(e, i)) return t.value = e[i], t.done = !1, t;
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
                return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(w.prototype), r(w.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, s, i, a, o) {
                    void 0 === o && (o = Promise);
                    var n = new w(l(t, s, i, a), o);
                    return e.isGeneratorFunction(s) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), r(y, n, "Generator"), r(y, a, (function() {
                    return this
                })), r(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var i = t.pop();
                                if (i in e) return s.value = i, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function i(s, i) {
                            return n.type = "throw", n.arg = e, t.next = s, i && (t.method = "next", t.arg = void 0), !!i
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                n = o.completion;
                            if ("root" === o.tryLoc) return i("end");
                            if (o.tryLoc <= this.prev) {
                                var r = s.call(o, "catchLoc"),
                                    l = s.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i];
                            if (a.tryLoc <= this.prev && s.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), x(s), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var i = s.completion;
                                if ("throw" === i.type) {
                                    var a = i.arg;
                                    x(s)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function Lt(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function Ft(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Lt(Object(s), !0).forEach((function(t) {
                        At(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Lt(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function At(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function qt(e, t, s, i, a, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, a)
            }

            function Gt(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new Promise((function(i, a) {
                        var o = e.apply(t, s);

                        function n(e) {
                            qt(o, i, a, n, r, "next", e)
                        }

                        function r(e) {
                            qt(o, i, a, n, r, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function Ht(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function Ut(e, t) {
                return (Ut = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Wt(e) {
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
                    var s, i = Yt(e);
                    if (t) {
                        var a = Yt(this).constructor;
                        s = Reflect.construct(i, arguments, a)
                    } else s = i.apply(this, arguments);
                    return Qt(this, s)
                }
            }

            function Qt(e, t) {
                if (t && ("object" === Bt(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Vt(e)
            }

            function Vt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Yt(e) {
                return (Yt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Kt = {
                    Blue: "https://media.blooket.com/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg",
                    Black: "https://media.blooket.com/image/upload/v1593095363/Blooks/colors/blackBlook.svg",
                    Green: "https://media.blooket.com/image/upload/v1593095354/Blooks/colors/greenBlook.svg",
                    Lime: "https://media.blooket.com/image/upload/v1593095356/Blooks/colors/limeBlook.svg",
                    Orange: "https://media.blooket.com/image/upload/v1593095357/Blooks/colors/orangeBlook.svg",
                    Pink: "https://media.blooket.com/image/upload/v1593095358/Blooks/colors/pinkBlook.svg",
                    Purple: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/purpleBlook.svg",
                    Red: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/redBlook.svg",
                    Snowflake: "https://media.blooket.com/image/upload/v1593095360/Media/defense/snowflake.svg",
                    "Slime Monster": "https://media.blooket.com/image/upload/v1566683613/Blooks/slimeMonster.svg",
                    "Red Slime Monster": "https://media.blooket.com/image/upload/v1591739668/Blooks/redSlimeMonster.svg",
                    "Dark Slime Monster": "https://media.blooket.com/image/upload/v1591840817/Blooks/darkSlimeMonster.svg",
                    "Light Slime Monster": "https://media.blooket.com/image/upload/v1591896075/Blooks/lightSlimeMonster.svg"
                },
                Jt = {
                    BronzeTile: "https://media.blooket.com/image/upload/v1593095363/Media/defense/bronzeTile.svg",
                    SilverTile: "https://media.blooket.com/image/upload/v1593095359/Media/defense/silverTile.svg",
                    GoldTile: "https://media.blooket.com/image/upload/v1593095356/Media/defense/goldTile.svg"
                },
                Xt = {
                    Chick: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
                    Chicken: "https://media.blooket.com/image/upload/v1556829562/Blooks/chicken.svg",
                    Owl: "https://media.blooket.com/image/upload/v1556832316/Blooks/owl.svg",
                    Pig: "https://media.blooket.com/image/upload/v1556829564/Blooks/pig.svg",
                    "Agent Owl": "https://media.blooket.com/image/upload/v1638737635/Blooks/agentOwl.svg",
                    Parrot: "https://media.blooket.com/image/upload/v1566681189/Blooks/parrot.svg",
                    Cockatoo: "https://media.blooket.com/image/upload/v1566681188/Blooks/cockatoo.svg",
                    Macaw: "https://media.blooket.com/image/upload/v1566681188/Blooks/macaw.svg",
                    "Party Pig": "https://media.blooket.com/image/upload/v1590862509/Blooks/partyPig.svg",
                    Goldfish: "https://media.blooket.com/image/upload/v1556831934/Blooks/goldfish.svg",
                    "Red Goldfish": "https://media.blooket.com/image/upload/v1591019780/Blooks/redGoldfish.svg",
                    Squirrel: "https://media.blooket.com/image/upload/v1582775344/Blooks/squirrel.svg",
                    "Nuts Squirrel": "https://media.blooket.com/image/upload/v1591027039/Blooks/nutsSquirrel.svg",
                    Elf: "https://media.blooket.com/image/upload/v1566683612/Blooks/elf.svg",
                    "Master Elf": "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
                    "Enchanted Elf": "https://media.blooket.com/image/upload/v1591048522/Blooks/enchantedElf.svg",
                    "Baby Penguin": "https://media.blooket.com/image/upload/v1566679726/Blooks/babyPenguin.svg",
                    Penguin: "https://media.blooket.com/image/upload/v1582775344/Blooks/penguin.svg",
                    "Polar Bear": "https://media.blooket.com/image/upload/v1566679726/Blooks/polarBear.svg",
                    "Arctic Fox": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticFox.svg",
                    "Arctic Hare": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticHare.svg",
                    Seal: "https://media.blooket.com/image/upload/v1566679726/Blooks/seal.svg",
                    Dragon: "https://media.blooket.com/image/upload/v1556832453/Blooks/dragon.svg",
                    "Fire Dragon": "https://media.blooket.com/image/upload/v1591214955/Blooks/fireDragon.svg",
                    "Wind Dragon": "https://media.blooket.com/image/upload/v1591215793/Blooks/windDragon.svg",
                    Wizard: "https://media.blooket.com/image/upload/v1556832453/Blooks/wizard.svg",
                    Witch: "https://media.blooket.com/image/upload/v1566683612/Blooks/witch.svg",
                    "Lightning Wizard": "https://media.blooket.com/image/upload/v1591282332/Blooks/lightningWizard.svg",
                    King: "https://media.blooket.com/image/upload/v1566683612/Blooks/king.svg",
                    "Phantom King": "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
                    "King of Hearts": "https://media.blooket.com/image/upload/v1582080266/Blooks/kingOfHearts.svg",
                    Unicorn: "https://media.blooket.com/image/upload/v1566683614/Blooks/unicorn.svg",
                    "Crazy Unicorn": "https://media.blooket.com/image/upload/v1591381159/Blooks/crazyUnicorn.svg",
                    "uni-CORN": "https://media.blooket.com/image/upload/v1591365760/Blooks/uni-CORN.svg",
                    Jester: "https://media.blooket.com/image/upload/v1566683612/Blooks/jester.svg",
                    "Mad Hatter": "https://media.blooket.com/image/upload/v1582080266/Blooks/madHatter.svg",
                    Duck: "https://media.blooket.com/image/upload/v1556829562/Blooks/duck.svg"
                },
                Zt = {
                    Egg: "https://media.blooket.com/image/upload/v1593095354/Media/defense/egg.svg",
                    PigBomb: "https://media.blooket.com/image/upload/v1593095358/Media/defense/pigBomb.svg",
                    DiscoBall: "https://media.blooket.com/image/upload/v1593095364/Media/defense/discoBall.svg",
                    Fish: "https://media.blooket.com/image/upload/v1593095356/Media/defense/fish.svg",
                    Nut: "https://media.blooket.com/image/upload/v1593095356/Media/defense/nut.svg",
                    Arrow: "https://media.blooket.com/image/upload/v1593095361/Media/defense/arrow.svg",
                    MasterArrow: "https://media.blooket.com/image/upload/v1593095354/Media/defense/masterArrow.svg",
                    EnchantedArrow: "https://media.blooket.com/image/upload/v1593095354/Media/defense/enchantedArrow.svg",
                    WitchOrb: "https://media.blooket.com/image/upload/v1593095361/Media/defense/witchOrb.svg",
                    Sword: "https://media.blooket.com/image/upload/v1593095361/Media/defense/sword.svg",
                    PhantomSword: "https://media.blooket.com/image/upload/v1593095358/Media/defense/phantomSword.svg",
                    Heart: "https://media.blooket.com/image/upload/v1593095354/Media/defense/heart.svg",
                    Missile: "https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg",
                    BigMissile: "https://media.blooket.com/image/upload/v1593095361/Media/defense/bigMissile.svg",
                    Corn: "https://media.blooket.com/image/upload/v1593095363/Media/defense/corn.svg",
                    CornKernel: "https://media.blooket.com/image/upload/v1593095364/Media/defense/cornKernel.svg"
                },
                $t = function(e) {
                    for (var t = [], s = 0; s < e.length; s++)
                        for (var i = 0; i < e[s].length; i++) 0 === e[s][i] && t.push({
                            x: i,
                            y: s
                        });
                    return t
                },
                es = function(e) {
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
                        }), t && Ut(e, t)
                    }(l, e);
                    var t, s, i, o, n, r = Wt(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = r.call(this, e)).state = {
                            ready: !1,
                            towerSelected: {},
                            health: 100,
                            round: 1,
                            tokens: 0,
                            buyTowerName: "",
                            buyTower: {},
                            roundGoing: !0,
                            paused: !1,
                            phase: "tower",
                            question: {},
                            correct: !1,
                            roundCompleted: !1,
                            showShop: !1,
                            isSmall: !1,
                            askTour: !1,
                            showTour: !1,
                            hwGoal: 0,
                            goalCompleted: !1,
                            doubleSpeed: !1,
                            totalDmg: 0,
                            isLive: !1,
                            chanceDesc: "",
                            chanceColor: "",
                            readId: ""
                        }, t.p5 = {}, t.canvasParentRef = {}, t.bgImage = null, t.tiles = [], t.tileSize = 24, t.enemies = [], t.futureEnemies = [], t.waves = [], t.spawnCd = 0, t.waveCd = 0, t.waitingOnWave = !1, t.ticksUntilSpawn = 0, t.ticksUntilWave = 0, t.lastSpawnIndex = 0, t.walkMap = [], t.paths = [], t.backPaths = [], t.dists = [], t.towers = [], t.numRows = 0, t.numColumns = 0, t.spawnpoints = [], t.exit = {}, t.map = {}, t.enemyImages = {}, t.tileImages = {}, t.towerImages = {}, t.projectileImages = {}, t.particleSystems = [], t.projectiles = [], t.questions = [], t.freeQuestions = [], t.corrects = e.defense ? JSON.parse(JSON.stringify(e.defense.corrects)) : {}, t.incorrects = e.defense ? JSON.parse(JSON.stringify(e.defense.incorrects)) : {}, t.questionResults = [], t.here = !0, t.waiting = !1, t.roundGoing = !1, t.gameOver = !1, t.paused = !1, t.dmg = e.defense && e.defense.dmg ? e.defense.dmg : 0, t.notified = !1, t.dbRefStage = {}, t.dbRefEvent = {}, t.msg = {}, t.isReading = !1, t.oldPhase = "", t.questionFrenzy = !1, t.noQuestionFrenzy = !1, t.bonusQuestion = !1, t.freezeCounter = 0, t.isFreeze = !1, t.ducks = [], t.kingReq = !1, t.kingResponses = [], t.doubleDamage = !1, t.spawnFish = !1, t.finalBoss = !1, t.tourRef = a.a.createRef(), t.onAnswer = t.onAnswer.bind(Vt(t)), t.getWalkMap = t.getWalkMap.bind(Vt(t)), t.getTower = t.getTower.bind(Vt(t)), t.getQuestion = t.getQuestion.bind(Vt(t)), t.setup = t.setup.bind(Vt(t)), t.preload = t.preload.bind(Vt(t)), t.draw = t.draw.bind(Vt(t)), t.mouseClicked = t.mouseClicked.bind(Vt(t)), t.answerTour = t.answerTour.bind(Vt(t)), t.answerNext = t.answerNext.bind(Vt(t)), t.updateDmg = t.updateDmg.bind(Vt(t)), t.resizeFit = t.resizeFit.bind(Vt(t)), t.recalculate = t.recalculate.bind(Vt(t)), t.walkable = t.walkable.bind(Vt(t)), t.outsideMap = t.outsideMap.bind(Vt(t)), t.resetGame = t.resetGame.bind(Vt(t)), t.showRange = t.showRange.bind(Vt(t)), t.buyTower = t.buyTower.bind(Vt(t)), t.nextRound = t.nextRound.bind(Vt(t)), t.nextWave = t.nextWave.bind(Vt(t)), t.sellTower = t.sellTower.bind(Vt(t)), t.upgradeTower = t.upgradeTower.bind(Vt(t)), t.chooseChance = t.chooseChance.bind(Vt(t)), t.endNow = t.endNow.bind(Vt(t)), t.readQuestion = t.readQuestion.bind(Vt(t)), t
                    }
                    return t = l, (s = [{
                        key: "componentDidMount",
                        value: (n = Gt(Dt().mark((function e() {
                            var t = this;
                            return Dt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e.sent || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.defense && "defense" === this.props.defense.stage && this.props.defense.questions && this.props.defense.questions[0]) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/play"));
                                    case 6:
                                        Object(T.a)(), this.startTimeout = setTimeout((function() {
                                            t.questions = t.props.defense.questions, t.setState({
                                                ready: !0,
                                                roundCompleted: 1 !== t.props.defense.round,
                                                roundGoing: 1 === t.props.defense.round,
                                                askTour: 1 === t.props.defense.round,
                                                hwGoal: 1 === t.props.defense.round && t.props.defense.hwGoal ? parseInt(t.props.defense.hwGoal, 10) : 0,
                                                isSmall: window.innerWidth <= 800,
                                                health: t.props.defense.health,
                                                round: t.props.defense.round,
                                                tokens: t.props.defense.tokens,
                                                isLive: t.props.defense.isLive,
                                                doubleSpeed: t.props.defense.isLive
                                            }, Gt(Dt().mark((function e() {
                                                var s;
                                                return Dt().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!t.state.isLive) {
                                                                e.next = 11;
                                                                break
                                                            }
                                                            return s = 0, t.dmgInterval = setInterval((function() {
                                                                t.setState({
                                                                    totalDmg: t.dmg
                                                                }), t.notified ? t.notified = !1 : (s += 1) >= 5 && (s = 0, t.props.liveGameController.setVal({
                                                                    path: "c/".concat(t.props.client.name),
                                                                    val: {
                                                                        b: t.props.client.blook,
                                                                        d: t.dmg
                                                                    }
                                                                }))
                                                            }), 1e3), e.next = 5, t.props.liveGameController.getDatabaseRef("stg");
                                                        case 5:
                                                            return t.dbRefStage = e.sent, t.dbRefStage.on("value", (function(e) {
                                                                switch (e.val()) {
                                                                    case "fin":
                                                                        t.props.liveGameController.getDatabaseVal("st", (function(e) {
                                                                            var s = e ? e.map((function(e) {
                                                                                return {
                                                                                    name: e.n,
                                                                                    blook: e.b,
                                                                                    dmg: e.d,
                                                                                    place: e.p
                                                                                }
                                                                            })).filter((function(e) {
                                                                                return e.dmg || 0 === e.dmg
                                                                            })) : [];
                                                                            t.props.setDefense(Ft(Ft({}, t.props.defense), {}, {
                                                                                corrects: t.corrects,
                                                                                incorrects: t.incorrects,
                                                                                dmg: t.dmg,
                                                                                round: t.state.round,
                                                                                stage: "final"
                                                                            })), t.props.setStanding(s), t.props.history.push("/defense/final")
                                                                        }));
                                                                        break;
                                                                    case null:
                                                                        t.props.liveGameController.getDatabaseVal("stg", (function(e) {
                                                                            e || (t.props.deleteClient(), t.props.setDefense(null), t.props.history.push("/play"))
                                                                        }))
                                                                }
                                                            })), e.next = 9, t.props.liveGameController.getDatabaseRef("ev");
                                                        case 9:
                                                            t.dbRefEvent = e.sent, t.dbRefEvent.on("value", (function(e) {
                                                                if (e.val() && !t.state.showTour && !t.state.askTour) {
                                                                    t.oldPhase = t.state.phase;
                                                                    var s = R.b[e.val()],
                                                                        i = R.a[s];
                                                                    if (t.setState({
                                                                            eventName: s,
                                                                            event: i,
                                                                            buyTowerName: "",
                                                                            buyTower: {}
                                                                        }, (function() {
                                                                            "Chance" !== s && (t.eventTimeout = setTimeout((function() {
                                                                                t.setState({
                                                                                    event: {},
                                                                                    eventName: ""
                                                                                })
                                                                            }), 6e3))
                                                                        })), "Question Frenzy" === s) t.questionFrenzy = !0, t.getQuestion(), t.questionFrenzyTimeout = setTimeout((function() {
                                                                        t.noQuestionFrenzy = !0
                                                                    }), 22e3);
                                                                    else if ("Earthquake" === s) {
                                                                        for (var a = $t(t.map.tiles), o = 0; o < t.tiles.length; o++)
                                                                            for (var n = 0; n < t.tiles[o].length; n++) 3 === t.tiles[o][n] && (t.tiles[o][n] = 0);
                                                                        t.towers.forEach((function(e) {
                                                                            var s = Object(T.m)(a);
                                                                            a.splice(a.indexOf(s), 1), e.move(s.x, s.y, t.tileSize), t.tiles[s.y][s.x] = 3
                                                                        }))
                                                                    } else if ("Tax Time" === s) t.setState({
                                                                        tokens: Math.ceil(t.state.tokens / 2)
                                                                    });
                                                                    else if ("Alien Invasion" === s) {
                                                                        var r = Object(T.m)(t.towers),
                                                                            l = t.towers.indexOf(r);
                                                                        t.tiles[r.gridPos.y][r.gridPos.x] = 0, t.towers.splice(l, 1)
                                                                    } else if ("A Little Help" === s) {
                                                                        var c = $t(t.tiles);
                                                                        if (0 === c.length) return;
                                                                        var h = Object(T.m)(c),
                                                                            u = Object(T.m)(Object.keys(Et)),
                                                                            d = new Rt(h.x, h.y, t.p5, t.tileSize, u, t.towerImages);
                                                                        t.towers.push(d), d.fullCd > 100 && (t.towers[t.towers.length - 1].fullCd += t.towers.filter((function(e) {
                                                                            return e.fullCd > 100
                                                                        })).length - 1), t.tiles[h.y][h.x] = 3
                                                                    } else if ("Bonus Question" === s) t.bonusQuestion = !0, t.getQuestion();
                                                                    else if ("Chance" === s) t.setState({
                                                                        chanceDesc: i.desc,
                                                                        chanceColor: ""
                                                                    });
                                                                    else if ("Freeze" === s) t.freezeCounter = 3, t.isFreeze = !0, t.getQuestion();
                                                                    else if ("Annoying Ducks" === s)
                                                                        for (var p = $t(t.tiles), f = 0; f < Math.min(3, p.length); f++) {
                                                                            var m = Object(T.m)(p);
                                                                            p.splice(p.indexOf(m), 1), t.ducks.push(m), t.tiles[m.y][m.x] = 2
                                                                        } else if ("King's Request" === s) t.kingReq = !0, t.kingResponses = [], t.getQuestion();
                                                                        else if ("Boom" === s) {
                                                                        var g = 0;
                                                                        t.enemies.forEach((function(e) {
                                                                            g += e.health
                                                                        })), t.enemies = [], t.futureEnemies.forEach((function(e) {
                                                                            g += e
                                                                        })), t.futureEnemies = [], t.dmg += g, t.setState({
                                                                            totalDmg: t.dmg
                                                                        }), t.waves = []
                                                                    } else "Double Damage" === s ? (t.doubleDamage = !0, t.doubleDamageTimeout = setTimeout((function() {
                                                                        t.doubleDamage = !1
                                                                    }), 25e3)) : "Difficulty Increase" === s ? t.setState({
                                                                        round: t.state.round + 3
                                                                    }) : "Reinforcements" === s ? t.spawnFish = !0 : "Final Boss" === s && (t.finalBoss = !0)
                                                                }
                                                            }));
                                                        case 11:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))))
                                        }), 1e3), window.onfocus = function() {
                                            t.paused = !1
                                        }, window.onblur = function() {
                                            t.paused = !0
                                        };
                                    case 10:
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
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(T.r)(), clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.endTimeout), clearTimeout(this.gameOverTimeout), clearTimeout(this.eventTimeout), clearTimeout(this.questionFrenzyTimeout), clearTimeout(this.doubleDamageTimeout), clearInterval(this.dmgInterval), clearInterval(this.fishInterval), this.here = !1, window.onfocus = function() {}, window.onblur = function() {}, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefEvent).length && this.dbRefEvent.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    s = this.state.question.number;
                                t ? this.corrects[s] ? this.corrects[s] += 1 : this.corrects[s] = 1 : this.incorrects[s] ? this.incorrects[s] += 1 : this.incorrects[s] = 1, this.setState({
                                    correct: t,
                                    phase: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "getWalkMap",
                        value: function() {
                            for (var e = [], t = 0; t < this.numRows; t++) {
                                e[t] = [];
                                for (var s = 0; s < this.numColumns; s++) e[t][s] = this.walkable(s, t)
                            }
                            return e
                        }
                    }, {
                        key: "getTower",
                        value: function(e, t) {
                            for (var s = 0; s < this.towers.length; s++) {
                                var i = this.towers[s];
                                if (i.gridPos.x === e && i.gridPos.y === t) return i
                            }
                            return null
                        }
                    }, {
                        key: "getQuestion",
                        value: function() {
                            var e = this;
                            if (this.here && "question" !== this.state.phase) {
                                0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(T.m)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(T.t)(t.answers)), this.setState({
                                    question: t,
                                    roundCompleted: this.state.roundCompleted && (this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq),
                                    phase: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "setup",
                        value: function(e, t) {
                            this.p5 = e, this.canvasParentRef = t, this.canvasParentRef.className = v.a.sketchHolder;
                            var s = e.createCanvas(t.offsetWidth, t.offsetHeight);
                            s.canvas.className = v.a.sketchCanvas, s.parent(t), this.p5.frameRate(30), this.resetGame()
                        }
                    }, {
                        key: "preload",
                        value: function(e) {
                            var t = this;
                            Object.entries(Kt).forEach((function(s) {
                                var i = It(s, 2),
                                    a = i[0],
                                    o = i[1];
                                t.enemyImages[a] = e.loadImage(Object(T.d)(o))
                            })), Object.entries(Jt).forEach((function(s) {
                                var i = It(s, 2),
                                    a = i[0],
                                    o = i[1];
                                t.tileImages[a] = e.loadImage(Object(T.d)(o))
                            })), Object.entries(Zt).forEach((function(s) {
                                var i = It(s, 2),
                                    a = i[0],
                                    o = i[1];
                                t.projectileImages[a] = e.loadImage(Object(T.d)(o))
                            })), Object.entries(Xt).forEach((function(s) {
                                var i = It(s, 2),
                                    a = i[0],
                                    o = i[1];
                                t.towerImages[a] = e.loadImage(Object(T.d)(o))
                            })), this.bgImage = e.loadImage(jt.a[this.props.defense.map].img)
                        }
                    }, {
                        key: "draw",
                        value: function(e) {
                            var t = this;
                            if (!this.paused) {
                                if (e.imageMode(this.p5.CORNER), e.background(this.bgImage), this.tiles.forEach((function(s, i) {
                                        s.forEach((function(s, a) {
                                            if (3 === s) {
                                                var o = t.getTower(a, i);
                                                o && o.level > 0 && (1 === o.level ? t.p5.image(t.tileImages.BronzeTile, a * t.tileSize, i * t.tileSize, t.tileSize, t.tileSize) : 2 === o.level ? t.p5.image(t.tileImages.SilverTile, a * t.tileSize, i * t.tileSize, t.tileSize, t.tileSize) : 3 === o.level && t.p5.image(t.tileImages.GoldTile, a * t.tileSize, i * t.tileSize, t.tileSize, t.tileSize))
                                            }
                                            e.stroke("#3a3a3a33"), e.noFill(), e.strokeWeight(2), e.rect(a * t.tileSize, i * t.tileSize, t.tileSize, t.tileSize)
                                        }))
                                    })), this.ducks.forEach((function(e) {
                                        t.p5.push(), t.p5.imageMode(t.p5.CENTER), t.p5.image(t.towerImages.Duck, e.x * t.tileSize + t.tileSize / 2, e.y * t.tileSize + t.tileSize / 2, .65 * t.tileSize, .65 * t.tileSize * 1.15), t.p5.pop()
                                    })), !this.state.paused && this.roundGoing && (this.ticksUntilSpawn > 0 && (this.ticksUntilSpawn -= this.state.doubleSpeed ? 2 : 1), this.ticksUntilWave > 0 && (this.ticksUntilWave -= this.state.doubleSpeed ? 2 : 1)), this.futureEnemies.length > 0 && this.ticksUntilSpawn <= 0) {
                                    var s = this.futureEnemies.shift(),
                                        i = this.lastSpawnIndex + 1 >= this.spawnpoints.length ? 0 : this.lastSpawnIndex + 1,
                                        a = this.spawnpoints[i];
                                    this.enemies.push(new ee(a.x, a.y, e, this.tileSize, this.enemyImages, s, this.updateDmg)), this.ticksUntilSpawn = this.spawnCd
                                }
                                for (var o = this.enemies.length - 1; o >= 0; o--) {
                                    var n = this.enemies[o];
                                    !this.state.paused && this.roundGoing && (n.steer(this.tileSize, this.numColumns, this.numRows, this.paths, this.exit), n.update(this.tileSize, this.state.doubleSpeed)), this.outsideMap(n) && n.kill(), !this.state.paused && W(n.pos.x, n.pos.y, this.exit.x, this.exit.y, this.tileSize, this.p5) && (this.state.isLive && (this.dmg = Math.max(this.dmg - n.health, 0)), this.setState({
                                        health: Math.max(this.state.health - n.health, 0)
                                    }, (function() {
                                        0 !== t.state.health || t.state.isLive || (t.gameOver = !0, t.setState({
                                            gameOver: !0
                                        }, (function() {
                                            t.gameOverTimeout = setTimeout((function() {
                                                t.props.setDefense(Ft(Ft({}, t.props.defense), {}, {
                                                    corrects: t.corrects,
                                                    incorrects: t.incorrects,
                                                    towers: t.towers.map((function(e) {
                                                        return {
                                                            name: e.name,
                                                            upIndexes: e.upIndexes,
                                                            col: e.gridPos.x,
                                                            row: e.gridPos.y
                                                        }
                                                    })),
                                                    health: 0,
                                                    dmg: t.dmg,
                                                    round: t.state.round,
                                                    tokens: t.state.tokens,
                                                    stage: "final"
                                                })), t.props.history.push("/defense/final")
                                            }), 5e3)
                                        })))
                                    })), n.kill()), n.isDead() ? this.enemies.splice(o, 1) : n.draw(this.tileSize)
                                }
                                this.state.towerSelected.range && this.showRange(this.state.towerSelected);
                                for (var r = this.towers.length - 1; r >= 0; r--) {
                                    var l = this.towers[r];
                                    this.doubleDamage && l.buff({
                                        damageBuff: 2
                                    }), this.state.paused || (this.roundGoing && l.target(this.enemies, this.tileSize, this.particleSystems, this.dists, this.paths, this.projectiles, this.backPaths, this.exit, this.towers), l.update(this.state.doubleSpeed)), this.outsideMap(l) && l.kill(), l.isDead() ? this.towers.splice(r, 1) : l.draw(this.tileSize, this.towerImages)
                                }
                                for (var c = this.particleSystems.length - 1; c >= 0; c--) {
                                    var h = this.particleSystems[c];
                                    this.state.paused || h.run(this.state.doubleSpeed, this.state.round >= 50, this.state.round >= 200), h.isDead() && this.particleSystems.splice(c, 1)
                                }
                                for (var u = this.projectiles.length - 1; u >= 0; u--) {
                                    var d = this.projectiles[u];
                                    this.state.paused || d.update(this.tileSize, this.state.doubleSpeed, this.enemies, this.dists, this.paths, this.spawnpoints[0]), d.reachedTarget(this.tileSize, this.enemies) && d.onHit(this.enemies, this.tileSize, this.particleSystems, this.projectiles, this.dists, this.paths), this.outsideMap(d) && d.kill(), d.draw(this.tileSize, this.projectileImages), d.isDead() && this.projectiles.splice(u, 1)
                                }
                                var p = J(this.p5.mouseX, this.p5.mouseY, this.numColumns, this.numRows, this.tileSize);
                                if (p) {
                                    var f = z(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize);
                                    3 === this.tiles[f.y][f.x] ? this.p5.cursor("pointer") : this.p5.cursor("auto")
                                }
                                if (p && this.state.buyTowerName) {
                                    this.p5.cursor("pointer");
                                    var m = z(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize),
                                        g = U(m.x, m.y, this.tileSize, this.p5),
                                        y = this.state.buyTower.gridPos && this.state.buyTower.gridPos.x === m.x && this.state.buyTower.gridPos.y === m.y ? this.state.buyTower : new Rt(m.x, m.y, this.p5, this.tileSize, this.state.buyTowerName, this.towerImages);
                                    if (this.setState({
                                            buyTower: y
                                        }), this.showRange(y), 0 !== this.tiles[m.y][m.x]) {
                                        this.p5.push(), this.p5.translate(g.x, g.y), this.p5.rotate(Math.PI / 4), this.p5.noStroke(), this.p5.fill(207, 0, 15);
                                        var v = .1 * this.tileSize,
                                            w = .9 * this.tileSize / 2;
                                        this.p5.rect(-v, w, 2 * v, 2 * -w), this.p5.rotate(Math.PI / 2), this.p5.rect(-v, w, 2 * v, 2 * -w), this.p5.pop()
                                    } else y.draw(this.tileSize)
                                }
                                this.waitingOnWave && this.ticksUntilWave <= 0 && (this.ticksUntilWave = 0, this.nextWave()), 0 === this.futureEnemies.length && !this.waitingOnWave && this.roundGoing && (this.ticksUntilWave = this.waveCd, this.waitingOnWave = !0)
                            }
                        }
                    }, {
                        key: "mouseClicked",
                        value: function(e) {
                            if (J(e.mouseX, e.mouseY, this.numColumns, this.numRows, this.tileSize) && !(this.state.isSmall && this.state.towerSelected && this.state.towerSelected.title || this.state.chanceDesc || this.state.roundCompleted)) {
                                var t = z(e.mouseX, e.mouseY, this.p5, this.tileSize),
                                    s = this.getTower(t.x, t.y);
                                s && "tower" === this.state.phase ? this.state.towerSelected === s ? this.setState({
                                    towerSelected: {}
                                }) : this.setState({
                                    towerSelected: s
                                }) : this.setState({
                                    towerSelected: {}
                                }), this.state.buyTowerName && this.buyTower()
                            }
                        }
                    }, {
                        key: "answerTour",
                        value: function(e) {
                            this.here && (e ? this.setState({
                                askTour: !1,
                                showTour: !0,
                                roundGoing: !0
                            }) : this.setState({
                                askTour: !1,
                                showTour: !1,
                                roundCompleted: !0,
                                roundGoing: !1
                            }))
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq ? this.kingReq && this.kingResponses.push(this.state.correct) : this.questionResults.push(this.state.correct);
                            var e = 0;
                            return this.state.correct && (e += 1, this.bonusQuestion && (e += 2), this.freezeCounter > 0 && this.isFreeze ? (this.freezeCounter -= 1, e -= 1) : this.kingReq && (e -= 1)), this.kingReq && this.kingResponses.length >= 2 ? (this.kingResponses.filter((function(e) {
                                return e
                            })).length >= 2 && (this.dmg *= 2, this.setState({
                                totalDmg: this.dmg
                            })), this.kingReq = !1, this.kingResponses = [], "question" === this.oldPhase && this.getQuestion(), void this.setState({
                                phase: this.oldPhase
                            })) : this.bonusQuestion || this.noQuestionFrenzy || this.freezeCounter <= 0 && this.isFreeze ? (this.bonusQuestion = !1, this.questionFrenzy = !1, this.noQuestionFrenzy = !1, this.isFreeze = !1, "question" === this.oldPhase && this.getQuestion(), void this.setState({
                                tokens: this.state.tokens + e,
                                phase: this.oldPhase
                            })) : (this.questionResults.length >= 3 && !this.questionFrenzy && !this.isFreeze && !this.kingReq ? (this.questionResults.filter((function(e) {
                                return e
                            })).length >= 3 && (e += Math.floor(this.state.round / 10) + 1), 1 === this.state.round && this.state.tokens + e < 2 && (e = 2 - this.state.tokens), this.setState({
                                phase: "tower"
                            })) : this.getQuestion(), void this.setState({
                                tokens: this.state.tokens + e
                            }))
                        }
                    }, {
                        key: "updateDmg",
                        value: function(e) {
                            this.dmg += e
                        }
                    }, {
                        key: "resizeFit",
                        value: function() {
                            var e = Math.floor(this.canvasParentRef.offsetWidth / this.numColumns),
                                t = Math.floor(this.canvasParentRef.offsetHeight / this.numRows);
                            this.tileSize = Math.min(e, t), this.p5.resizeCanvas(this.numColumns * this.tileSize, this.numRows * this.tileSize, !0)
                        }
                    }, {
                        key: "recalculate",
                        value: function() {
                            var e = this;
                            this.walkMap = this.getWalkMap();
                            var t = [],
                                s = "".concat(this.exit.x, ",").concat(this.exit.y);
                            t.push(s);
                            var i = {},
                                a = {};
                            for (i[s] = null, a[s] = 0; 0 !== t.length;)
                                for (var o = t.shift(), n = L(o, this.p5), r = A(this.walkMap, n.x, n.y, !0), l = 0; l < r.length; l++) {
                                    var c = r[l];
                                    c in i && c in a || (t.push(c), i[c] = o, a[c] = a[o] + 1)
                                }
                            this.dists = G(this.numRows, this.numColumns, null);
                            for (var h = G(this.numRows, this.numColumns, 0), u = Object.keys(i), d = 0; d < u.length; d++) {
                                var p = u[d],
                                    f = L(p, this.p5);
                                this.dists[f.y][f.x] = a[p];
                                var m = i[p];
                                if (null !== m) {
                                    var g = L(m, this.p5).sub(f);
                                    g.x < 0 && (h[f.y][f.x] = 1), g.y < 0 && (h[f.y][f.x] = 2), g.x > 0 && (h[f.y][f.x] = 3), g.y > 0 && (h[f.y][f.x] = 4)
                                }
                            }
                            var y = [];
                            this.spawnpoints.forEach((function(t) {
                                for (var s = G(e.numRows, e.numColumns, 0), i = {
                                        x: t.x,
                                        y: t.y
                                    }, a = h[i.y][i.x]; a;) 1 === a ? (i.x -= 1, a = 3) : 2 === a ? (i.y -= 1, a = 4) : 3 === a ? (i.x += 1, a = 1) : 4 === a && (i.y += 1, a = 2), s[i.y][i.x] = a, a = h[i.y][i.x];
                                y.push(s)
                            })), this.backPaths = y, this.paths = h
                        }
                    }, {
                        key: "walkable",
                        value: function(e, t) {
                            return [1, 4, 5].includes(this.tiles[t][e])
                        }
                    }, {
                        key: "outsideMap",
                        value: function(e) {
                            return D(e.pos.x, e.pos.y, 0, 0, this.numColumns * this.tileSize, this.numRows * this.tileSize)
                        }
                    }, {
                        key: "resetGame",
                        value: function() {
                            var e = this;
                            this.map = jt.a[this.props.defense.map], this.numRows = this.map.tiles.length, this.numColumns = this.map.tiles[0].length, this.tiles = G(this.numRows, this.numColumns), this.map.tiles.forEach((function(t, s) {
                                t.forEach((function(t, i) {
                                    e.tiles[s][i] = t, 4 === t ? e.spawnpoints.push({
                                        x: i,
                                        y: s
                                    }) : 5 === t && (e.exit = {
                                        x: i,
                                        y: s
                                    })
                                }))
                            })), this.resizeFit(), this.recalculate(), this.props.defense.towers.forEach((function(t) {
                                var s = new Rt(t.col, t.row, e.p5, e.tileSize, t.name, e.towerImages);
                                e.tiles[t.row][t.col] = 3, t.upIndexes.forEach((function(e, t) {
                                    s.upgrade(s.upgrades[t][e].data, e)
                                })), e.towers.push(s)
                            }))
                        }
                    }, {
                        key: "showRange",
                        value: function(e) {
                            if (!this.outsideMap(e)) {
                                this.p5.push(), this.p5.stroke("#3a3a3a77"), this.p5.strokeWeight(3), this.p5.fill(128, 128, 128, 63);
                                var t = (e.range + .5) * this.tileSize * 2;
                                this.p5.ellipse(e.pos.x, e.pos.y, t, t), this.p5.pop()
                            }
                        }
                    }, {
                        key: "buyTower",
                        value: function(e) {
                            if (this.state.buyTower && this.state.buyTower.gridPos && !this.outsideMap(this.state.buyTower) && (!this.state.isSmall || e)) {
                                var t = this.state.buyTower.cost && this.state.tokens >= this.state.buyTower.cost,
                                    s = this.state.buyTower.gridPos && 0 === this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x];
                                t && s && (this.towers.push(this.state.buyTower), this.state.buyTower.fullCd > 100 && (this.towers[this.towers.length - 1].fullCd += this.towers.filter((function(e) {
                                    return e.fullCd > 100
                                })).length - 1), this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x] = 3, this.setState({
                                    towerSelected: this.state.showTour && this.state.isSmall ? {} : this.state.buyTower,
                                    tokens: this.state.tokens - this.state.buyTower.cost
                                }), this.state.showTour && this.tourRef.current.setStep(7)), this.setState({
                                    buyTowerName: "",
                                    buyTower: {},
                                    showShop: !1
                                })
                            }
                        }
                    }, {
                        key: "nextRound",
                        value: function() {
                            this.roundGoing || (this.state.round <= Nt.length ? this.waves = JSON.parse(JSON.stringify(Nt[this.state.round - 1])) : this.waves = [{
                                wait: 180,
                                cd: 5,
                                enemies: {
                                    types: [2300 + 220 * (this.state.round - 50)],
                                    count: this.state.round - 50 + 40
                                }
                            }, {
                                wait: 0,
                                cd: 4,
                                enemies: {
                                    types: [11e3 + 350 * (this.state.round - 50)],
                                    count: 1
                                }
                            }], this.finalBoss && (this.finalBoss = !1, this.waves.push({
                                wait: 0,
                                cd: 4,
                                enemies: {
                                    types: [500 * this.state.round],
                                    count: 1
                                }
                            })), this.setState({
                                roundGoing: !0,
                                doubleSpeed: this.state.doubleSpeed || this.state.isLive
                            }), this.roundGoing = !0, this.waitingOnWave = !1, this.nextWave())
                        }
                    }, {
                        key: "nextWave",
                        value: function() {
                            var e = this;
                            if (!this.gameOver)
                                if (0 !== this.waves.length) {
                                    if (this.spawnFish) {
                                        this.spawnFish = !1;
                                        var t = 5;
                                        this.fishInterval = setInterval((function() {
                                            e.projectiles.push(new xt(e.exit.x * e.tileSize + e.tileSize / 2, e.exit.y * e.tileSize + e.tileSize / 2, null, 100, e.p5, Object(T.m)(e.backPaths))), (t -= 1) <= 0 && clearInterval(e.fishInterval)
                                        }), 750)
                                    }
                                    this.futureEnemies = [];
                                    var s = this.waves.shift();
                                    this.waveCd = s.wait, this.spawnCd = s.cd;
                                    for (var i = 0; i < s.enemies.count; i++) s.enemies.types.forEach((function(t) {
                                        e.futureEnemies.push(t)
                                    }))
                                } else 0 === this.enemies.length && (this.waitingOnWave = !1, this.roundGoing = !1, this.endTimeout = setTimeout((function() {
                                    e.questionResults = [];
                                    var t = e.state.round + 1;
                                    e.setState({
                                        roundGoing: !1,
                                        roundCompleted: !0,
                                        goalCompleted: !!e.props.defense.hwGoal && parseInt(e.props.defense.hwGoal, 10) === e.state.round,
                                        buyTowerName: "",
                                        buyTower: {},
                                        showShop: !1,
                                        round: t
                                    }), e.props.defense.defenseId && Pt.a.put("/api/defenses/save", {
                                        id: e.props.defense.defenseId,
                                        corrects: e.corrects,
                                        incorrects: e.incorrects,
                                        dmg: e.dmg,
                                        round: t,
                                        health: e.state.health,
                                        tokens: e.state.tokens,
                                        towers: e.towers.map((function(e) {
                                            return {
                                                name: e.name,
                                                upIndexes: e.upIndexes,
                                                col: e.gridPos.x,
                                                row: e.gridPos.y
                                            }
                                        }))
                                    }).catch((function(e) {
                                        Object(m.b)(e), window.location.href = "".concat("https://id.blooket.com", "/login")
                                    })), e.props.defense.resultId && Pt.a.put("/api/results", {
                                        id: e.props.defense.resultId,
                                        data: {
                                            corrects: e.corrects,
                                            incorrects: e.incorrects,
                                            round: t,
                                            alive: !0
                                        }
                                    }).catch((function(e) {
                                        Object(m.b)(e)
                                    }))
                                }), 1e3))
                        }
                    }, {
                        key: "sellTower",
                        value: function() {
                            var e = this.towers.indexOf(this.state.towerSelected); - 1 !== e ? (this.tiles[this.state.towerSelected.gridPos.y][this.state.towerSelected.gridPos.x] = 0, this.towers.splice(e, 1), this.setState({
                                tokens: this.state.tokens + this.state.towerSelected.getSellPrice(),
                                towerSelected: {}
                            })) : this.setState({
                                towerSelected: {}
                            })
                        }
                    }, {
                        key: "upgradeTower",
                        value: function(e, t) {
                            var s = this.state.tokens - e.data.cost;
                            s < 0 || (this.state.towerSelected.upgrade(e.data, t), this.setState({
                                tokens: s
                            }))
                        }
                    }, {
                        key: "chooseChance",
                        value: function(e) {
                            !1 === e ? this.setState({
                                event: {},
                                eventName: "",
                                chanceDesc: "",
                                chanceColor: ""
                            }) : Math.random() > .5 ? (this.dmg *= 2, this.setState({
                                chanceDesc: "Lucky! You just doubled your total damage!",
                                totalDmg: this.dmg,
                                chanceColor: "#4bc22e"
                            })) : (this.dmg = Math.round(this.dmg / 2), this.setState({
                                chanceDesc: "Unlucky! You just lost half your total damage!",
                                totalDmg: this.dmg,
                                chanceColor: "#c43a35"
                            }))
                        }
                    }, {
                        key: "endNow",
                        value: function() {
                            this.here && (this.props.setDefense(Ft(Ft({}, this.props.defense), {}, {
                                corrects: this.corrects,
                                incorrects: this.incorrects,
                                towers: this.towers.map((function(e) {
                                    return {
                                        name: e.name,
                                        upIndexes: e.upIndexes,
                                        col: e.gridPos.x,
                                        row: e.gridPos.y
                                    }
                                })),
                                health: 0,
                                dmg: this.dmg,
                                round: this.state.round,
                                tokens: this.state.tokens,
                                stage: "final"
                            })), this.props.history.push("/defense/final"))
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = Gt(Dt().mark((function e() {
                            var t, s = this;
                            return Dt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, i) {
                                            var a = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return i();
                                            e.includes("`*`") && (a = e.slice(0, e.indexOf("`*`"))), s.msg = new SpeechSynthesisUtterance(a), s.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(s.msg), s.msg.onend = function() {
                                                s.setState({
                                                    readId: ""
                                                }), i()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(s.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(s.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(s.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(s.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(s.state.question.answers[3], "q4", e)
                                        }));
                                    case 16:
                                        this.isReading = !1;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, s = this;
                            return this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.defense && this.props.defense.questions && this.props.defense.questions[0] ? a.a.createElement("div", {
                                className: h.isMobile ? b.a.mBody : b.a.body,
                                id: "body"
                            }, a.a.createElement(g.a, {
                                title: "Play Tower Defense | Blooket",
                                desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                            }), a.a.createElement(_.a, {
                                name: this.props.client && this.props.client.name ? this.props.client.name : "",
                                coins: this.state.tokens,
                                showRead: "question" === this.state.phase,
                                readQuestion: this.readQuestion
                            }), this.state.ready ? a.a.createElement("div", {
                                className: f()(b.a.regularBody, v.a.bodyContainer),
                                id: "regularBody"
                            }, this.state.showTour ? a.a.createElement(O.a, {
                                steps: (e = this.state.isSmall, t = this.state.isLive, [{
                                    elementId: e ? "mBottom" : "health",
                                    text: t ? "In Tower Defense, your goal is to defend against waves of Evil Blooks. You win by dealing the most damage to Evil Blooks, shown here!" : "In Tower Defense, your goal is to defend against waves of Evil Blooks. That means you have to keep this health above 0!",
                                    nextButtonText: "Next",
                                    backgroundColor: "#fff",
                                    className: P.a.health
                                }, {
                                    text: "To defend against these waves, you'll need to buy and upgrade Towers! It will take Upgrade Tokens to do this.",
                                    nextButtonText: "Next",
                                    className: P.a.centered
                                }, {
                                    text: "Before each round of enemies, you'll answer three questions. You get 1 Upgrade Token for each correct answer, and a bonus token for getting all 3 correct!",
                                    nextButtonText: "Next",
                                    className: P.a.centered,
                                    functionIndex: 0
                                }, {
                                    elementId: e ? "header" : "coinsText",
                                    text: "We'll answer those for you right now, and because we got all 3 correct, you can see 4 Upgrade Tokens in the top right!",
                                    nextButtonText: "Next",
                                    backgroundColor: e ? null : "#9a49aa",
                                    className: P.a.topRight
                                }, {
                                    text: "Evil Blooks will spawn at the arrow on the map and follow the path towards the 'X'! Towers will attack them to prevent this.",
                                    nextButtonText: "Next",
                                    className: P.a.centered
                                }, {
                                    text: e ? "Now try buying a Tower! Just tap the 'Open Shop' button, choose a Blook, tap to place it on the map, and then tap 'Confirm Buy'! The price of each Tower is shown in the blue box." : "Now try buying a Tower! Just click a Blook to the right and then place it on the map. The price of each Tower is shown in the blue box.",
                                    nextButtonText: "Got It!",
                                    className: P.a.shop
                                }, {
                                    functionIndex: 1
                                }, {
                                    elementId: "stats",
                                    text: "Great work! You can now click on the tower to see its stats and buy upgrades. Each Blook has 3 stages, you can pick one upgrade per stage and the final upgrade is the most powerful!",
                                    nextButtonText: "Next",
                                    className: P.a.stats
                                }, {
                                    elementId: e ? "mNextRound" : "nextRound",
                                    text: "Make sure you upgrade your Towers and buy new ones. Now you're on your own! Click the 'Next Round' button to begin!",
                                    elementClick: !0,
                                    className: P.a.nextRound
                                }]),
                                onExit: function() {
                                    return s.setState({
                                        showTour: !1
                                    })
                                },
                                functions: [function() {
                                    return s.setState({
                                        tokens: 4
                                    })
                                }, function() {
                                    return s.setState({
                                        roundGoing: !1,
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                }],
                                ref: this.tourRef
                            }) : null, a.a.createElement("div", {
                                className: v.a.mTopContainer
                            }, a.a.createElement("div", {
                                className: v.a.mRoundText
                            }, "Round ".concat(this.state.round)), this.state.buyTowerName || !this.state.roundGoing ? a.a.createElement("div", {
                                className: v.a.mMainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.buyTowerName ? function() {
                                    return s.setState({
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                } : this.nextRound,
                                style: {
                                    backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                                },
                                id: "mNextRound"
                            }, a.a.createElement("i", {
                                className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                                style: {
                                    marginRight: 10,
                                    fontSize: 20
                                }
                            }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing && !this.state.isLive ? a.a.createElement("div", {
                                className: v.a.mMainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        doubleSpeed: !s.state.doubleSpeed
                                    })
                                }
                            }, a.a.createElement("i", {
                                className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                                style: {
                                    marginRight: 10,
                                    fontSize: 20
                                }
                            }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), a.a.createElement("div", {
                                className: v.a.leftSide,
                                style: {
                                    transform: "translateX(".concat(this.state.towerSelected.title || this.state.buyTowerName ? 0 : -110, "%)")
                                },
                                id: "stats"
                            }, this.state.buyTowerName ? a.a.createElement("div", null, a.a.createElement("div", {
                                className: v.a.infoRow
                            }, a.a.createElement("img", {
                                src: Xt[this.state.buyTower.blook],
                                alt: this.state.buyTower.blook,
                                className: v.a.infoBlook,
                                draggable: !1
                            }), a.a.createElement("div", {
                                className: v.a.infoTitle
                            }, this.state.buyTower.title)), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.buyTower.damage)), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.buyTower.fullCd / 30 * 10) / 10, "s")), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.buyTower.range)), a.a.createElement("div", {
                                className: v.a.descText
                            }, a.a.createElement("div", {
                                style: {
                                    fontWeight: "bold"
                                }
                            }, "Description:"), this.state.buyTower.desc)) : null, this.state.towerSelected.title ? a.a.createElement("div", null, a.a.createElement("div", {
                                className: v.a.infoRow
                            }, a.a.createElement("img", {
                                src: Xt[this.state.towerSelected.blook],
                                alt: this.state.towerSelected.blook,
                                className: v.a.infoBlook,
                                draggable: !1
                            }), a.a.createElement("div", {
                                className: v.a.infoTitle
                            }, this.state.towerSelected.title)), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.towerSelected.damage)), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.towerSelected.range)), a.a.createElement("div", {
                                className: v.a.sellButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.sellTower
                            }, a.a.createElement("i", {
                                className: "fas fa-coins",
                                style: {
                                    marginRight: 10
                                }
                            }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), a.a.createElement("div", {
                                className: v.a.upgradesText
                            }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, t) {
                                return a.a.createElement("div", {
                                    className: f()(v.a.upgradeContainer, At({}, v.a.towerShopFaded, s.state.tokens < e.data.cost || 3 === s.state.towerSelected.level)),
                                    style: {
                                        opacity: s.state.towerSelected.finalUpgrade === t ? 1 : null
                                    },
                                    key: e.data.title,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: 3 === s.state.towerSelected.level ? function() {} : function() {
                                        return s.upgradeTower(e, t)
                                    }
                                }, a.a.createElement("div", {
                                    className: v.a.upgradeRow
                                }, e.icon ? a.a.createElement("i", {
                                    className: f()(v.a.upgradeIcon, e.icon),
                                    style: {
                                        backgroundColor: e.iconColor
                                    }
                                }) : a.a.createElement("img", {
                                    src: Xt[e.iconBlook],
                                    alt: e.iconBlook,
                                    className: v.a.upgradeBlook,
                                    draggable: !1
                                }), a.a.createElement("div", {
                                    className: v.a.upgradeTitle
                                }, e.data.title)), a.a.createElement("div", {
                                    className: v.a.upgradeDesc
                                }, e.desc), 3 !== s.state.towerSelected.level ? a.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, e.data.cost) : null)
                            }))) : null), a.a.createElement(d.a, {
                                preload: this.preload,
                                setup: this.setup,
                                draw: this.draw,
                                mouseClicked: this.mouseClicked
                            }), this.state.buyTowerName && (h.isMobile || this.state.isSmall) && !this.outsideMap(this.state.buyTower) ? a.a.createElement("div", {
                                className: v.a.buyButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.buyTower(!0)
                                }
                            }, "Confirm Buy") : null, a.a.createElement("div", {
                                className: v.a.rightSide
                            }, a.a.createElement("div", {
                                className: v.a.healthRow,
                                id: "health"
                            }, this.state.isLive ? null : a.a.createElement("div", {
                                className: v.a.healthBarHolder
                            }, a.a.createElement("div", {
                                className: v.a.healthBar,
                                style: {
                                    transform: "scaleX(".concat(this.state.health / 100, ")")
                                }
                            })), this.state.isLive ? a.a.createElement("div", {
                                className: v.a.dmgText
                            }, Object(T.l)(this.state.totalDmg)) : a.a.createElement("div", {
                                className: v.a.healthText
                            }, this.state.health), a.a.createElement("i", {
                                className: f()(v.a.healthIcon, this.state.isLive ? "fas fa-splotch" : "fas fa-heart")
                            })), a.a.createElement("div", {
                                className: v.a.roundText
                            }, "Round ".concat(this.state.round)), a.a.createElement("div", {
                                className: v.a.shopContainer
                            }, Object.entries(Et).map((function(e) {
                                var t = It(e, 2),
                                    i = t[0],
                                    o = t[1];
                                return a.a.createElement("div", {
                                    className: f()(v.a.towerShopContainer, At({}, v.a.towerShopSelected, s.state.buyTowerName === i), At({}, v.a.towerShopFaded, s.state.tokens < o.cost || s.state.round < 5 && "penguin" === i || s.state.round < 15 && "king" === i || s.state.round < 20 && "jester" === i)),
                                    key: i,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: s.state.tokens < o.cost || s.state.round < 5 && "penguin" === i || s.state.round < 15 && "king" === i || s.state.round < 20 && "jester" === i ? function() {} : s.state.buyTowerName === i ? function() {
                                        return s.setState({
                                            buyTowerName: "",
                                            buyTower: {}
                                        })
                                    } : function() {
                                        return s.setState({
                                            buyTowerName: i,
                                            buyTower: new Rt(-1, -1, s.p5, s.tileSize, i, s.towerImages),
                                            towerSelected: {}
                                        })
                                    }
                                }, a.a.createElement("img", {
                                    src: Xt[o.blook],
                                    alt: o.blook,
                                    className: v.a.shopBlook,
                                    draggable: !1
                                }), s.state.round < 5 && "penguin" === i || s.state.round < 15 && "king" === i || s.state.round < 20 && "jester" === i ? a.a.createElement("div", {
                                    className: v.a.shopLockedContainer
                                }, a.a.createElement("i", {
                                    className: f()(v.a.shopLockedIcon, "fas fa-lock")
                                }), "Round ".concat("penguin" === i ? 5 : "king" === i ? 15 : 20)) : a.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, o.cost))
                            }))), this.state.buyTowerName || !this.state.roundGoing ? a.a.createElement("div", {
                                className: v.a.mainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.buyTowerName ? function() {
                                    return s.setState({
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                } : this.nextRound,
                                style: {
                                    backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                                },
                                id: "nextRound"
                            }, a.a.createElement("i", {
                                className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                                style: {
                                    marginRight: 10
                                }
                            }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing && !this.state.isLive ? a.a.createElement("div", {
                                className: v.a.mainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        doubleSpeed: !s.state.doubleSpeed
                                    })
                                },
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, a.a.createElement("i", {
                                className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                                style: {
                                    marginRight: 10
                                }
                            }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), a.a.createElement("div", {
                                className: v.a.mBottomSpacer
                            }), a.a.createElement("div", {
                                className: v.a.mBottomContainer,
                                id: "mBottom"
                            }, this.state.buyTowerName && this.state.isSmall ? this.outsideMap(this.state.buyTower) ? a.a.createElement("div", {
                                className: v.a.mNoBuy
                            }, "Select Grid to Place Tower") : a.a.createElement("div", {
                                className: v.a.mBuyButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.buyTower(!0)
                                }
                            }, "Confirm Buy") : a.a.createElement("div", {
                                className: v.a.mOpenButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        showShop: !s.state.showShop
                                    })
                                }
                            }, a.a.createElement("i", {
                                className: this.state.showShop ? "fas fa-angle-down" : "fas fa-angle-up",
                                style: {
                                    marginLeft: 10,
                                    marginRight: 7,
                                    fontSize: 32
                                }
                            }), this.state.showShop ? "Close Shop" : "Open Shop", a.a.createElement("div", {
                                className: v.a.mHealthRow
                            }, a.a.createElement("div", {
                                className: v.a.mHealthText
                            }, this.state.isLive ? Object(T.s)(this.state.totalDmg) : this.state.health), a.a.createElement("i", {
                                className: f()(v.a.mHealthIcon, this.state.isLive ? "fas fa-splotch" : "fas fa-heart")
                            }))), this.state.showShop && !this.state.buyTowerName ? a.a.createElement("div", {
                                className: v.a.shopContainer
                            }, Object.entries(Et).map((function(e) {
                                var t = It(e, 2),
                                    i = t[0],
                                    o = t[1];
                                return a.a.createElement("div", {
                                    className: f()(v.a.towerShopContainer, At({}, v.a.towerShopSelected, s.state.buyTowerName === i), At({}, v.a.towerShopFaded, s.state.tokens < o.cost || s.state.round < 5 && "penguin" === i || s.state.round < 15 && "king" === i || s.state.round < 20 && "jester" === i)),
                                    key: i,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: s.state.tokens < o.cost || s.state.round < 5 && "penguin" === i || s.state.round < 15 && "king" === i || s.state.round < 20 && "jester" === i ? function() {} : s.state.buyTowerName === i ? function() {
                                        return s.setState({
                                            buyTowerName: "",
                                            buyTower: {}
                                        })
                                    } : function() {
                                        return s.setState({
                                            buyTowerName: i,
                                            buyTower: new Rt(-1, -1, s.p5, s.tileSize, i, s.towerImages),
                                            towerSelected: {}
                                        })
                                    }
                                }, a.a.createElement("img", {
                                    src: Xt[o.blook],
                                    alt: o.blook,
                                    className: v.a.shopBlook,
                                    draggable: !1
                                }), s.state.round < 5 && "penguin" === i || s.state.round < 15 && "king" === i || s.state.round < 20 && "jester" === i ? a.a.createElement("div", {
                                    className: v.a.shopLockedContainer
                                }, a.a.createElement("i", {
                                    className: f()(v.a.shopLockedIcon, "fas fa-lock")
                                }), "Round ".concat("penguin" === i ? 5 : "king" === i ? 15 : 20)) : a.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, o.cost))
                            }))) : null)) : null, "question" === this.state.phase ? a.a.createElement("div", {
                                className: v.a.questionContainer
                            }, a.a.createElement(k.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                theme: this.isFreeze ? "freeze" : this.bonusQuestion ? "orange" : this.questionFrenzy ? "purple" : this.kingReq ? "red" : ""
                            })) : "feedback" === this.state.phase ? a.a.createElement("div", {
                                className: v.a.questionContainer
                            }, a.a.createElement(C.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, this.state.roundCompleted ? a.a.createElement("div", {
                                className: b.a.modal,
                                style: {
                                    zIndex: 7
                                }
                            }, a.a.createElement("div", {
                                className: v.a.modalContainer
                            }, a.a.createElement("div", {
                                className: v.a.modalText
                            }, 1 === this.state.round ? "Ready to Start?" : "Round ".concat(this.state.round - 1, " Complete!")), a.a.createElement("div", {
                                className: v.a.modalButtonRow
                            }, a.a.createElement("div", {
                                className: v.a.modalButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.getQuestion
                            }, "Get Questions")))) : null, this.state.towerSelected && this.state.towerSelected.title ? a.a.createElement("div", {
                                className: f()(b.a.modal, v.a.mModal),
                                style: {
                                    zIndex: 6
                                }
                            }, a.a.createElement("div", {
                                className: v.a.mTowerSelected
                            }, a.a.createElement("div", {
                                className: v.a.infoRow
                            }, a.a.createElement("img", {
                                src: Xt[this.state.towerSelected.blook],
                                alt: this.state.towerSelected.blook,
                                className: v.a.infoBlook,
                                draggable: !1
                            }), a.a.createElement("div", {
                                className: v.a.infoTitle
                            }, this.state.towerSelected.title)), a.a.createElement("div", {
                                className: v.a.sellContainer
                            }, a.a.createElement("div", {
                                className: v.a.sellButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.sellTower
                            }, a.a.createElement("i", {
                                className: "fas fa-coins",
                                style: {
                                    marginRight: 10
                                }
                            }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), a.a.createElement("div", {
                                className: v.a.statInfoContainer
                            }, a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.towerSelected.damage)), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), a.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, a.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.towerSelected.range)))), a.a.createElement("div", {
                                className: v.a.upgradesText
                            }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, t) {
                                return a.a.createElement("div", {
                                    className: f()(v.a.upgradeContainer, At({}, v.a.towerShopFaded, s.state.tokens < e.data.cost || 3 === s.state.towerSelected.level)),
                                    style: {
                                        opacity: s.state.towerSelected.finalUpgrade === t ? 1 : null
                                    },
                                    key: e.data.title,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: 3 === s.state.towerSelected.level ? function() {} : function() {
                                        return s.upgradeTower(e, t)
                                    }
                                }, a.a.createElement("div", {
                                    className: v.a.upgradeRow
                                }, e.icon ? a.a.createElement("i", {
                                    className: f()(v.a.upgradeIcon, e.icon),
                                    style: {
                                        backgroundColor: e.iconColor
                                    }
                                }) : a.a.createElement("img", {
                                    src: Xt[e.iconBlook],
                                    alt: e.iconBlook,
                                    className: v.a.upgradeBlook,
                                    draggable: !1
                                }), a.a.createElement("div", {
                                    className: v.a.upgradeTitle
                                }, e.data.title, a.a.createElement("div", {
                                    className: v.a.upgradeDesc
                                }, e.desc))), 3 !== s.state.towerSelected.level ? a.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, e.data.cost) : null)
                            })), a.a.createElement("div", {
                                className: v.a.mCloseTower,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        towerSelected: {}
                                    })
                                }
                            }, a.a.createElement("i", {
                                className: "fas fa-times"
                            })))) : null, this.state.askTour ? a.a.createElement(S.a, {
                                text: "Would you like a quick tutorial?",
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return s.answerTour(!0)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return s.answerTour(!1)
                                    },
                                    color: "blue"
                                }
                            }) : this.state.hwGoal && !this.state.showTour ? a.a.createElement(S.a, {
                                text: "Your goal for this homework is to survive for ".concat(this.state.hwGoal, " ").concat(1 === this.state.hwGoal ? "Round" : "Rounds", "!"),
                                buttonOne: {
                                    text: "Cool",
                                    click: function() {
                                        return s.setState({
                                            hwGoal: 0
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.goalCompleted ? a.a.createElement(S.a, {
                                text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                                buttonOne: {
                                    text: "Keep Playing",
                                    click: function() {
                                        return s.setState({
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
                            }) : null, this.state.gameOver ? a.a.createElement("div", {
                                className: f()(b.a.modal, v.a.modalFadeIn)
                            }, a.a.createElement("div", {
                                className: v.a.gameOverContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameOverText
                            }, "Game Over"), a.a.createElement("div", {
                                className: v.a.gameOverTextSmall
                            }, "You ran out of health"))) : null, this.state.eventName ? a.a.createElement(j.a, {
                                icon: this.state.event.icon,
                                blook: this.state.event.blook,
                                color: this.state.chanceColor || this.state.event.color,
                                name: this.state.eventName,
                                desc: this.state.chanceDesc || this.state.event.desc,
                                onYes: this.state.chanceDesc ? function() {
                                    return s.chooseChance(!s.state.chanceColor)
                                } : null,
                                yesText: this.state.chanceColor ? "Ok" : "Yes",
                                onNo: this.state.chanceDesc && !this.state.chanceColor ? function() {
                                    return s.chooseChance(!1)
                                } : null,
                                noLeave: !!this.state.chanceDesc
                            }) : null) : a.a.createElement(c.c, {
                                to: "/login"
                            })
                        }
                    }]) && Ht(t.prototype, s), i && Ht(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
            es.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                history: l.a.object.isRequired,
                setDefense: l.a.func.isRequired,
                setStanding: l.a.func.isRequired,
                deleteClient: l.a.func.isRequired,
                liveGameController: l.a.object,
                user: l.a.object
            };
            t.a = Object(E.c)(Object(c.f)(Object(o.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(n.b)({
                    setDefense: M.a,
                    setStanding: B.b,
                    deleteClient: I.a
                }, e)
            }))(Object(x.d)(es))))
        },
        z826: function(e, t, s) {
            var i = s("MaNU");
            "string" == typeof i && (i = [
                [e.i, i, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(i, a);
            i.locals && (e.exports = i.locals)
        }
    }
]);