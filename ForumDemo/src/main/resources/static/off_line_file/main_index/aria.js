/*!
 * aria v3.2.9
 * (c) Licensed under the MIT license.
 * Copyright 2022 All Rights Reserved
 * http://license.cnwza.cn
 */
!function () {
    var o = {
        9898: function (e, t, o) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            var r = o(3969), i = o(1643), a = o(1166);
            i.keys().status;

            function s(e, t) {
                if (!e || !t) return !1;
                if (void 0 === (t = !t.keyCode ? {keyCode: t} : t).status && (t.status = !0), t.status && !r.status) return !1;
                var o = e.keyCode || e.which || e.charCode;
                if (o) {
                    var i = a.getDisableShortKeys();
                    if (!(0 < i.length && -1 < [].indexOf.call(i, o) || "number" == typeof t.keyCode && t.keyCode != o || "object" == n(t.keyCode) && [].indexOf.call(t.keyCode, o) < 0)) {
                        i = e.ctrlKey, o = e.shfitKey, e = e.altKey;
                        return !(t.ctrlKey && !i) && (!(t.shfitKey && !o) && !(t.altKey && !e))
                    }
                }
            }

            var l = {
                wakeup: {shiftKey: !1, ctrlKey: !0, altKey: !1, status: !1, keyCode: 192},
                wakupConfig: {shiftKey: !1, ctrlKey: !0, altKey: !0, status: !0, keyCode: 76},
                dialogClose: {shiftKey: !1, ctrlKey: !1, altKey: !1, keyCode: 27},
                changeRegion: {
                    next: {shiftKey: !1, ctrlKey: !0, altKey: !0, status: !0, keyCode: [34, 40]},
                    pre: {shiftKey: !1, ctrlKey: !0, altKey: !0, status: !0, keyCode: [33, 38]}
                },
                opVoice: {shiftKey: !1, ctrlKey: !0, altKey: !0, status: !0, keyCode: 86},
                vocierate: {shiftKey: !1, ctrlKey: !0, altKey: !0, status: !0, keyCode: 75},
                mouseb: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 77},
                mouseten: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 78},
                reset: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 67},
                readsrc: {shiftKey: !1, ctrlKey: !0, altKey: !0, status: !1, keyCode: 82},
                bigsrc: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 66},
                readtype: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 70},
                exitservice: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 69},
                changeTheme: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 84},
                fontTob: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: [187, 107]},
                fontTos: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: [189, 109]},
                help: {shiftKey: !1, ctrlKey: !0, altKey: !0, keyCode: 191},
                showImg: {shiftKey: !1, ctrlKey: !1, altKey: !0, keyCode: [57, 105]},
                showQrcode: {shiftKey: !1, ctrlKey: !1, altKey: !0, keyCode: [48, 96]}
            };
            e.exports = {
                eventKeyCode: function (e) {
                    return e.keyCode || e.which || e.charCode
                }, checkKeyCode: s, keyCodeSettings: l, toWakeUpRead: function (e) {
                    var t = e.altKey, o = e.ctrlKey, i = (e.shfitKey, e.keyCode || e.which || e.charCode),
                        n = a.getDisableShortKeys();
                    if (!(0 < n.length && -1 < [].indexOf.call(n, i))) return t && (48 <= i && i <= 57 || 96 <= i && i <= 105) ? !o && !shiftKey || void 0 : !!s(e, l.readsrc)
                }
            }
        }, 1643: function (e) {
            var i = {
                val: function (e, t) {
                    return t = t || location.search.substring(1), new RegExp("(^|/?|&)" + e + "=([^&]*)(/s|&|$)", "i").test(t) ? RegExp.$2 : ""
                }
            };

            function a(e, t) {
                var o = {success: !1};
                o.road = e.substr(0, t + 1), o.appid = i.val("appid", e);
                t = i.val("callback", e);
                t && 0 < t.length && (o.callback = t);
                e = i.val("initcallback", e);
                return e && 0 < e.length && (o.initcallback = e), o.success = !0, o
            }

            function s() {
                var e = document.scripts, t = "";
                if (window.isAriaDev) t = "ariaDev."; else {
                    var t = "aria.", o = document.getElementById("ariascripts");
                    if (null != o) return (n = o.src.indexOf("/" + t)) <= 0 && (n = o.src.indexOf("/_" + t)), a(o.src, n)
                }
                for (var i = 0; i < e.length; i++) try {
                    var n, r = e[i];
                    if ((n = r.src.indexOf("/" + t)) <= 0 && (n = r.src.indexOf("/_" + t)), null !== r.src && -1 < n) return r.id = "ariascripts", a(r.src, n)
                } catch (e) {
                }
                return {success: !1}
            }

            var l = "aria";
            window.isAriaDev && (l = "ariaDev");
            var t = null;
            var o = {
                en: "welcome {0},When a blind user enters the intelligent blind lane, press the shortcut key Ctrl + Alt + R; To read the detailed operation instructions, press the shortcut key Ctrl + Alt + question mark",
                "zh-CN": "娆㈣繋杩涘叆 {0},鐩蹭汉鐢ㄦ埛杩涘叆鏅鸿兘鐩查亾璇锋寜蹇嵎閿瓹trl+Alt+R锛涢槄璇昏缁嗘搷浣滆鏄庤鎸夊揩鎹烽敭Ctrl+Alt+闂彿閿€�"
            };
            e.exports = {
                keys: function () {
                    var e = s().appid;
                    window.ariaAppId = e;

                    function t() {
                        return l + "/" + e
                    }

                    function o() {
                        return t() + "/runtime/settings"
                    }

                    function i() {
                        return t() + "/data/settings"
                    }

                    function n() {
                        return t() + "/runtime"
                    }

                    function r() {
                        return t() + "/data"
                    }

                    var a = l + "/userSettings";
                    return {
                        base: l,
                        status: l + "/status",
                        userSettings: {
                            root: a,
                            defaultTheme: a + "/defaultTheme",
                            scale: a + "/scale",
                            ariaPointerRead: a + "/ariaPointerRead",
                            bigpoint: a + "/bigpoint",
                            leftfixed: a + "/leftfixed",
                            topfixed: a + "/fixed",
                            readtype: a + "/readtype",
                            readsrc: a + "/readsrc",
                            voice: {root: a + "/voice", enable: a + "/voice/enable", rate: a + "/voice/rate"},
                            mousemode: a + "/mousemode",
                            mouseten: a + "/mouseten",
                            py: a + "/py",
                            big5: a + "/big5",
                            bigsrc: a + "/bigsrc",
                            canRead: a + "/canRead"
                        },
                        road: t() + "/road",
                        root: t(),
                        runtime: {
                            root: n(),
                            serviceUrl: n() + "/serviceUrl",
                            security: n() + "/security",
                            appid: n() + "/appid",
                            callback: n() + "/callback",
                            settings: {
                                root: o(),
                                highlight: {
                                    root: o() + "/highlight",
                                    enable: o() + "/highlight/enable",
                                    rate: o() + "/highlight/rate",
                                    mode: o() + "/highlight/mode"
                                },
                                voice: {
                                    root: o() + "/voice",
                                    enable: o() + "/voice/enable",
                                    maxRate: o() + "/voice/maxRate",
                                    minRate: o() + "/voice/minRate",
                                    rate: o() + "/voice/rate"
                                },
                                curregion: {id: o() + "/curregion/id"},
                                golabSkipScale: o() + "/golabSkipScale",
                                golabSkipAll: o() + "/golabSkipAll",
                                golabSkipTheme: o() + "/golabSkipTheme",
                                golabFocus: o() + "/golabFocus",
                                golabRegion1: o() + "/golabRegion1",
                                golabRegion2: o() + "/golabRegion2",
                                golabRegion3: o() + "/golabRegion3",
                                golabRegion4: o() + "/golabRegion4",
                                golabReplaceBg: o() + "/golabReplaceBg",
                                tellerMode: o() + "/tellerMode",
                                defaultLanguage: o() + "/defaultLanguage",
                                shortCutIcon: o() + "/shortCutIcon",
                                css: o() + "/css",
                                closeShortIcon: o() + "/closeShortIcon",
                                bodyfont: o() + "/bodyfont",
                                reticle: o() + "/reticle",
                                spacing: o() + "/spacing",
                                padding: o() + "/padding",
                                maxZoom: o() + "/maxZoom",
                                minZoom: o() + "/minZoom",
                                focusTheme: o() + "/focusTheme",
                                useOldFixed: o() + "/useOldFixed",
                                oldFixedCss: o() + "/oldFixedCss",
                                defaultTheme: o() + "/defaultTheme",
                                scale: o() + "/scale",
                                golabFixedCss: o() + "/golabFixedCss",
                                golabCss: o() + "/golabCss",
                                iconType: o() + "/iconType"
                            }
                        },
                        data: {
                            root: r(),
                            version: l + "/version",
                            languages: r() + "/languages",
                            themes: r() + "/theme",
                            golbalElems: r() + "/golbalElems",
                            roles: r() + "/roles",
                            conf: {root: r() + "/conf", region: r() + "/conf/region"},
                            settings: {
                                root: i(),
                                enable: i() + "/enable",
                                topfixed: i() + "/fixed",
                                highlight: {
                                    root: i() + "/highlight",
                                    enable: i() + "/highlight/enable",
                                    rate: i() + "/highlight/rate",
                                    mode: i() + "/highlight/mode"
                                },
                                voice: {root: i() + "/voice", enable: i() + "/voice/enable", rate: i() + "/voice/rate"},
                                tellerMode: i() + "/tellerMode",
                                defaultTheme: i() + "/defaultTheme",
                                defaultLanguage: i() + "/defaultLanguage",
                                shortCutIcon: i() + "/shortCutIcon",
                                scale: i() + "/scale",
                                golabFixedCss: i() + "/golabFixedCss",
                                golabCss: i() + "/golabCss",
                                iconType: i() + "/iconType",
                                spacing: i() + "/spacing",
                                padding: i() + "/padding"
                            }
                        }
                    }
                }, getAppid: s, queryString: i, AppIdChangeAddListen: function (e) {
                    t = setInterval(function () {
                        appid = s().appid, window.ariaAppId != appid && e && "function" == typeof e && (window.ariaAppId = appid, e())
                    }, 1500)
                }, AppIdChangeRemoveListen: function () {
                    clearInterval(t), t = null
                }, addWelcomeContent: function () {
                    var e = document.querySelector("html").getAttribute("lang") || "zh-CN", t = o[e];
                    t && (t = t.replace("{0}", document.title), (e = document.querySelector("#ariaTipText")) || ((e = document.createElement("a")).id = "ariaTipText", e.setAttribute("role", "pagedescription"), e.setAttribute("aria-label", t), e.setAttribute("href", "javascript:void(0)"), document.body.insertBefore(e, document.body.firstElementChild)))
                }, welcomeContent: o
            }
        }, 3969: function (e, t, o) {
            var i = o(3334), n = "aria";
            window.isAriaDev && (n = "ariaDev"), e.exports = {
                get status() {
                    var e = i.getCookie(n + "Status");
                    if (void 0 !== e) return JSON.parse(e)
                }, set status(e) {
                    i.setCookie(n + "Status", e)
                }, get bigsrc() {
                    var e = i.getCookie(n + "Bigsrc");
                    if (void 0 !== e) return JSON.parse(e)
                }, set bigsrc(e) {
                    i.setCookie(n + "Bigsrc", e)
                }, get defaultTheme() {
                    return i.getCookie(n + "DefaultTheme")
                }, set defaultTheme(e) {
                    i.setCookie(n + "DefaultTheme", e)
                }, get fixed() {
                    var e = i.getCookie(n + "Fixed");
                    if (void 0 !== e) return JSON.parse(e)
                }, set fixed(e) {
                    i.setCookie(n + "Fixed", e)
                }, get mousemode() {
                    var e = i.getCookie(n + "Mousemode");
                    if (void 0 !== e) return JSON.parse(e)
                }, set mousemode(e) {
                    i.setCookie(n + "Mousemode", e)
                }, get mouseten() {
                    var e = i.getCookie(n + "Mouseten");
                    if (void 0 !== e && "undefined" != e) return JSON.parse(e)
                }, set mouseten(e) {
                    i.setCookie(n + "Mouseten", e)
                }, get oldFixedStatus() {
                    var e = i.getCookie(n + "oldFixedStatus");
                    if (void 0 !== e && "undefined" != e) return JSON.parse(e)
                }, set oldFixedStatus(e) {
                    i.setCookie(n + "oldFixedStatus", e)
                }, get scale() {
                    var e = i.getCookie(n + "Scale");
                    return void 0 !== e && "undefined" != e ? JSON.parse(e) : 1
                }, set scale(e) {
                    i.setCookie(n + "Scale", e)
                }, get readtype() {
                    var e = i.getCookie(n + "Readtype");
                    if (void 0 !== e && "undefined" != e) return JSON.parse(e)
                }, set readtype(e) {
                    i.setCookie(n + "Readtype", e)
                }, clearAll: function () {
                    i.devareCookie(n + "Bigsrc"), i.devareCookie(n + "Readtype"), i.devareCookie(n + "Fixed"), i.devareCookie(n + "Mouseten"), i.devareCookie(n + "Scale"), i.devareCookie(n + "Mousemode"), i.devareCookie(n + "DefaultTheme")
                }
            }
        }, 1166: function (e) {
            e.exports = {
                disableShortKeys: function (e) {
                    window.disablShortKeys = e
                }, getDisableShortKeys: function () {
                    return window.disablShortKeys || []
                }
            }
        }, 1266: function (e, t, o) {
            var i = o(3969), n = !1;

            function r(e, t) {
                a(".cnwza", e), a("#cnwza", e), a("#cniil_wza", e), e ? (a("[onclick='aria.start();']", e), a("[onclick='aria.start()']", e)) : (a("[onclick='aria.end();']", e), a("[onclick='aria.end()']", e)), t && a(t, e)
            }

            function a(e, t) {
                var o = "string" == typeof e ? document.querySelectorAll(e) : [e];
                if (o && void 0 !== o && 0 != o.length) for (var i = 0; i < o.length; i++) {
                    var n = o[i], r = n.getAttribute("clickhide"), a = n.getAttribute("closeText"),
                        s = (s = n.getAttribute("openText")) || n.innerText;
                    t ? "false" != r ? n.classList.add("ariaHide") : a && (n.innerText = a) : "false" != r ? n.classList.remove("ariaHide") : s && (n.innerText = s), "string" == typeof e && (-1 < e.indexOf("end") && n.setAttribute("onclick", "aria.start()"), -1 < e.indexOf("start") && n.setAttribute("onclick", "aria.end()"))
                }
            }

            function s(e) {
                null != (e.target.closestReplenish("#cniil_wza") || e.target.closestReplenish("#cnwza") || e.target.closestReplenish(".cnwza")) && (i.status ? aria && "function" == typeof aria.end && (r(!1), aria.end()) : aria && "function" == typeof aria.start && (r(!0), aria.start()))
            }

            Element.prototype.closestReplenish = function (t) {
                var e = this, o = function () {
                    if (t instanceof HTMLElement) return [t];
                    try {
                        t = document.querySelectorAll(t)
                    } catch (e) {
                    } finally {
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        if (-1 < ["NodeList", "HTMLCollection", "Array"].indexOf(e)) return [].slice.call(t)
                    }
                }();
                do {
                    if (-1 < o.indexOf(e)) return e
                } while (null !== (e = e.parentElement));
                return null
            }, e.exports = {
                setBtn: r, addListenBtn: function () {
                    n || (window.addEventListener("click", s), n = !0)
                }, removeListenBtn: function () {
                    n = !1, window.removeEventListener("click", s)
                }, mobileHide: function () {
                    for (var e = document.querySelectorAll("[mobilehide]"), t = 0; t < e.length; t++) {
                        var o = e[t];
                        try {
                            var i = o.getAttribute("mobilehide");
                            "none" == i && (o.style.display = "none"), "hidden" == i && (o.style.visibility = "hidden")
                        } catch (e) {
                        }
                    }
                }, isMobile: function () {
                    for (var e = navigator.userAgent, t = ["2.0 MMP", "240320", "AvantGo", "BlackBerry", "Blazer", "Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990", "MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia", "Opera Mini", "Opera Mobi", "Miui", "Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet", "SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link", "Windows CE", "WinWAP", "Android", "iPhone", "iPod", "iPad", "Windows Phone", "HTC"], o = !1, i = 0; i < t.length; i++) if (0 < e.indexOf(t[i])) {
                        o = !0;
                        break
                    }
                    var n = window.screen.width, r = window.screen.height;
                    return o = n < 500 && r < 800 ? !0 : o
                }
            }
        }, 7744: function (e) {
            e.exports = {
                getContainerDom: function (e) {
                    var t = document.querySelector("#aging-tools-pc");
                    return null != t ? t : (void 0 !== e && e.body ? e : document).body
                }
            }
        }, 3334: function (e) {
            function t() {
            }

            function n() {
                var e = document.domain.split("."), t = e.length;
                if (1 == t) return document.domain;
                var o = e[t - 2] + "." + e[t - 1];
                return "." + (o = 2 < o.length && -1 < [].indexOf.call(["com", "gov", "org", "net"], e[t - 2]) ? e[t - 3] + "." + o : o)
            }

            t.prototype.devareCookie = function (e) {
                var t = new Date;
                t.setTime(t.getTime() - 1e4), document.cookie = e + "=v; expires=" + t.toGMTString() + ";path=/;domain=" + n()
            }, t.prototype.setCookie = function (e, t) {
                this.devareCookie(e);
                var o, i = new Date;
                i.setTime(i.getTime() + 864e6), o = document.domain, /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(o) ? document.cookie = e + "=" + t + "; expires=" + i.toGMTString() + ";path=/;" : document.cookie = e + "=" + t + "; expires=" + i.toGMTString() + ";path=/;domain=" + n()
            }, t.prototype.getCookie = function (e) {
                for (var t = document.cookie.split("; "), o = 0; o < t.length; o++) {
                    var i = t[o].split("=");
                    if (i[0] == e) return i[1]
                }
            }, t.prototype.getCookies = function (e) {
                for (var t = document.cookie.split("; "), o = 0; o < t.length; o++) if (t[o].split("=")[0] == e) return t[o].substring(t[o].indexOf("=") + 1)
            }, t.prototype.getAllCookie = function () {
                var e = document.cookie.split("; ");
                return 0 < arrcookie.length ? e : ""
            };
            var o = new t;
            e.exports = o
        }, 9724: function (e) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r(e) {
                if (null === e) return "null";
                if (e != e) return "nan";
                if ("function" == typeof Array.isArray) {
                    if (Array.isArray(e)) return "array"
                } else if ("[object Array]" === Object.prototype.toString.call(e)) return "array";
                return n(e).toLowerCase()
            }

            function t() {
                this.name = "Store"
            }

            t.prototype = {
                init: function (e) {
                    return this.store = window[e], this
                }, set: function (e, t) {
                    if (null != (e = "object" === n(e) ? e.root : e)) {
                        var o = e.split("/"), i = (i = this.get(o[0])) || {};
                        switch (r(i = 1 < o.length ? function e(t, o, i, n) {
                            return (t = t || {})[o[n]] || (t[o[n]] = {}), n >= o.length - 1 ? void 0 === i ? delete t[o[n]] : t[o[n]] = i : e(t[o[n]], o, i, n + 1), t
                        }(i, o, t, 1) : i)) {
                            case"object":
                            case"array":
                                this.store.setItem(o[0], JSON.stringify(i));
                                break;
                            default:
                                this.store.setItem(o[0], i)
                        }
                    }
                }, get: function (e) {
                    if (e) {
                        e = e.split("/");
                        return function e(t, o, i) {
                            if (null === t) return null;
                            try {
                                t = "number" === r(+t) ? t : JSON.parse(t)
                            } catch (e) {
                            }
                            return 1 === o.length ? t : ("object" === n(t) && (t = t[o[i]]), (i += 1) > o.length - 1 ? t : e(t, o, i))
                        }(this.store.getItem(e[0]), e, 1)
                    }
                }, getAll: function () {
                    var e, t = JSON.parse(JSON.stringify(this.store)), o = {}, i = "";
                    for (e in t) {
                        try {
                            i = "number" === r(+(i = t[e])) ? i : JSON.parse(i)
                        } catch (e) {
                        }
                        o[e] = i
                    }
                    return o
                }, remove: function (e) {
                    this.set(e, void 0)
                }, clear: function () {
                    this.store.clear()
                }
            };
            var o = (new t).init("localStorage");
            (new t).init("sessionStorage");
            e.exports = o
        }
    }, i = {};

    function n(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        t = i[e] = {exports: {}};
        return o[e](t, t.exports, n), t.exports
    }

    var a, s, l, c, d, r, u, f;

    function y() {
        var e = s.getAppid();
        if (e.success && (a.set(s.keys().runtime.appid, e.appid), a.set(s.keys().road, e.road), e.initcallback)) try {
            window[e.initcallback](aria)
        } catch (e) {
        }
        return e.success
    }

    function g() {
        var e = document.createElement("script"), t = s.getAppid(),
            o = a.get(f.road) + "_aria.js?appid=" + a.get(f.runtime.appid);
        t.callback && (o += "&callback=" + t.callback), t.initcallback && (o += "&initcallback=" + t.initcallback), e.src = o, e.setAttribute("charset", "utf-8"), r.getContainerDom().appendChild(e)
    }

    function e() {
        var t = {};
        window.isAriaDev ? window.ariaDev = t : window.aria = t, t.status = function () {
            return c.status
        };
        var o = t.status(), e = null;

        function i() {
            e = setInterval(function () {
                var e = t.status();
                o != e && (o = e) && t.start()
            }, 2e3), document.addEventListener("keydown", n), d.addListenBtn()
        }

        function n(e) {
            l.checkKeyCode(e, l.keyCodeSettings.wakeup) ? t.start() : l.toWakeUpRead(e) && (c.bigsrc = !0, a.set(f.userSettings.readsrc, !0), a.set(f.userSettings.voice.enable, !1), d.setBtn(!0), t.start())
        }

        t.start = function () {
            clearInterval(e), e = null, d.removeListenBtn(), document.removeEventListener("keydown", n), c.status = !0, g()
        }, t.end = function () {
            c.status = !1
        }, t.initcallback = u, s.addWelcomeContent(), y();
        var r = s.queryString.val("aria");
        "1" == r && (c.status = !0), "0" == r && (c.status = !1), t.status() ? t.start() : i()
    }

    a = n(9724), s = n(1643), l = n(9898), c = n(3969), d = n(1266), r = n(7744), u = n(1166), f = s.keys(), d.isMobile() ? (y(), g()) : e()
}();