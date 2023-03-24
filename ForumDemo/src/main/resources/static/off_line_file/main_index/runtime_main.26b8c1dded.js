!function () {
    "use strict";
    var e, t, a, n, r, i, o, c = {}, s = {};

    function f(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var a = s[e] = {id: e, loaded: !1, exports: {}};
        return c[e].call(a.exports, a, a.exports, f), a.loaded = !0, a.exports
    }

    f.m = c, e = [], f.O = function (t, a, n, r) {
        if (!a) {
            var i = 1 / 0;
            for (u = 0; u < e.length; u++) {
                a = e[u][0], n = e[u][1], r = e[u][2];
                for (var o = !0, c = 0; c < a.length; c++) (!1 & r || i >= r) && Object.keys(f.O).every((function (e) {
                    return f.O[e](a[c])
                })) ? a.splice(c--, 1) : (o = !1, r < i && (i = r));
                if (o) {
                    e.splice(u--, 1);
                    var s = n();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
        r = r || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
        e[u] = [a, n, r]
    }, f.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return f.d(t, {a: t}), t
    }, a = Object.getPrototypeOf ? function (e) {
        return Object.getPrototypeOf(e)
    } : function (e) {
        return e.__proto__
    }, f.t = function (e, n) {
        if (1 & n && (e = this(e)), 8 & n) return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule) return e;
            if (16 & n && "function" == typeof e.then) return e
        }
        var r = Object.create(null);
        f.r(r);
        var i = {};
        t = t || [null, a({}), a([]), a(a)];
        for (var o = 2 & n && e; "object" == typeof o && !~t.indexOf(o); o = a(o)) Object.getOwnPropertyNames(o).forEach((function (t) {
            i[t] = function () {
                return e[t]
            }
        }));
        return i.default = function () {
            return e
        }, f.d(r, i), r
    }, f.d = function (e, t) {
        for (var a in t) f.o(t, a) && !f.o(e, a) && Object.defineProperty(e, a, {enumerable: !0, get: t[a]})
    }, f.f = {}, f.e = function (e) {
        return Promise.all(Object.keys(f.f).reduce((function (t, a) {
            return f.f[a](e, t), t
        }), []))
    }, f.u = function (e) {
        return "static/js/" + ({
            11: "@byted/uploader",
            214: "fe-xigua-pc-icons-svgr-sidebar-default-tiyu-svg",
            680: "fe-xigua-pc-icons-svgr-sidebar-default-wenhua-svg",
            728: "byted-xigua_web_message_center-dist-static-js-messageCenter",
            866: "fe-xigua-pc-icons-svgr-sidebar-active-wuzhangai-svg",
            1200: "@fe/byted-search-debug-sdk",
            1236: "Assets-svgr-icon-icon_information_great-svg",
            1380: "AbrAlgo",
            1487: "qrcode",
            1613: "fe-xigua-pc-icons-svgr-sidebar-default-keji-svg",
            1912: "fe-xigua-pc-icons-svgr-sidebar-default-junshi-svg",
            2417: "@byted/sec_sdk_build/captcha",
            2540: "pages-Iframe",
            2815: "pages-MyAttentionV2",
            3069: "ToPlayList",
            3675: "pages-Debug",
            3812: "Assets-svgr-icon-icon_information_systemNotification-svg",
            3943: "pages-UserCenter",
            4067: "pages-SearchV2",
            4086: "fe-xigua-pc-icons-svgr-sidebar-default-wuzhangai-svg",
            4656: "pages-Download",
            4783: "xgloginchunk",
            5191: "fe-xigua-pc-icons-svgr-sidebar-default-dongchedi-svg",
            5348: "pages-ToPlayDetails",
            5625: "main_app",
            5812: "@byted/danmu-mask",
            6042: "Components-BU-FixedButtonGroup",
            6615: "pages-Tort",
            6662: "web-login",
            6778: "ally.js",
            6859: "pages-UserPlayList",
            6907: "pages-MyWatchHistory",
            7099: "pages-ChannelV3",
            7138: "pages-VipCenter",
            7468: "Assets-svgr-icon-icon_information_letter-svg",
            7719: "fe-xigua-pc-icons-svgr-sidebar-default-yule-svg",
            8326: "pages-vipExchange",
            8447: "pages-Embed",
            8711: "pages-LvideoFilter",
            8738: "pages-UserDetailV3",
            8868: "pages-AnyVideo",
            9039: "pages-MyFavorite",
            9456: "lottie-web",
            9712: "fe-xigua-pc-icons-svgr-sidebar-default-shougong-svg",
            9874: "fe-xigua-pc-icons-svgr-sidebar-default-nba-svg"
        }[e] || e) + "." + {
            11: "0418b08439",
            214: "a07df2b1b7",
            668: "7d53349371",
            680: "c9e2272c13",
            728: "7a1cd89007",
            866: "c9b1ba71e4",
            1200: "21afe414d2",
            1236: "d1da6cdd90",
            1380: "de29695586",
            1487: "48f309a4db",
            1613: "bf1d7f0b3e",
            1617: "16ea175520",
            1620: "bac54464d1",
            1681: "a8a05dd9a8",
            1912: "5fed1364fa",
            1941: "efeeba09e8",
            2417: "7bda5d3c45",
            2540: "71823e3cb6",
            2605: "c29e45ae5d",
            2815: "a583e970f6",
            3069: "ece7c884eb",
            3114: "a4dfd5091d",
            3617: "811e9f0e68",
            3675: "6eb6128502",
            3768: "0bcd1fea3b",
            3812: "82a535306d",
            3943: "f37660ea18",
            4023: "94d017888d",
            4067: "19446d3b3c",
            4086: "b4fd052a10",
            4399: "eaada78dd7",
            4656: "10ced7c213",
            4783: "566d0724c3",
            5183: "9999affbc3",
            5191: "cc17660525",
            5348: "bc11798482",
            5625: "98e4a53752",
            5812: "43d9a1c9a9",
            5880: "981bcede99",
            6042: "bfb1ec648d",
            6253: "4e5854d7ae",
            6615: "8c8b2fc7a2",
            6662: "17b4bf4012",
            6778: "a1487fe2b4",
            6781: "8ea6621473",
            6859: "033f26e3d6",
            6907: "44dde4e386",
            7099: "dd87fc63b9",
            7138: "7b5a534122",
            7468: "11b7608de3",
            7719: "9c1713a8f6",
            8216: "249e7dd394",
            8309: "dcaca12f22",
            8326: "ef4188306b",
            8447: "e9c004802b",
            8711: "730fda6d16",
            8738: "4199fa6e27",
            8868: "f27272abdf",
            9039: "55ff5b0bc5",
            9456: "fb123240ef",
            9483: "35122b1f0a",
            9712: "327e738356",
            9846: "5a1362ee66",
            9874: "2c938992e1"
        }[e] + ".chunk.js"
    }, f.miniCssF = function (e) {
        return 179 === e ? "static/css/main.404d36f198.css" : "static/css/" + ({
            2540: "pages-Iframe",
            2815: "pages-MyAttentionV2",
            3069: "ToPlayList",
            3675: "pages-Debug",
            3943: "pages-UserCenter",
            4067: "pages-SearchV2",
            4656: "pages-Download",
            5625: "main_app",
            6042: "Components-BU-FixedButtonGroup",
            6615: "pages-Tort",
            6662: "web-login",
            6907: "pages-MyWatchHistory",
            7099: "pages-ChannelV3",
            7138: "pages-VipCenter",
            8326: "pages-vipExchange",
            8447: "pages-Embed",
            8711: "pages-LvideoFilter",
            8738: "pages-UserDetailV3",
            8868: "pages-AnyVideo",
            9039: "pages-MyFavorite"
        }[e] || e) + "." + {
            668: "251942bd5d",
            1620: "3aa4e7be81",
            2540: "922a582b75",
            2605: "ff4c9eeed4",
            2815: "59cb924150",
            3069: "7116cc3116",
            3114: "49907f4bea",
            3675: "535ffbd29c",
            3943: "faad41e75a",
            4067: "1f9b3a48d9",
            4656: "bdb0d5c38d",
            5625: "6adf8911cf",
            5880: "a9d1ad630b",
            6042: "3c40bd6f09",
            6615: "d29e6df8a5",
            6662: "9dea969f0e",
            6907: "9c4cac2705",
            7099: "0305f0a87a",
            7138: "37f39f1051",
            8326: "17e6922c88",
            8447: "b7a9da8fca",
            8711: "105c635f24",
            8738: "777467262b",
            8868: "fa02bb76cf",
            9039: "764065b474"
        }[e] + ".chunk.css"
    }, f.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), f.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n = {}, r = "xigua-video-pc:", f.l = function (e, t, a, i) {
        if (n[e]) n[e].push(t); else {
            var o, c;
            if (void 0 !== a) for (var s = document.getElementsByTagName("script"), u = 0; u < s.length; u++) {
                var d = s[u];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + a) {
                    o = d;
                    break
                }
            }
            o || (c = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, f.nc && o.setAttribute("nonce", f.nc), o.setAttribute("data-webpack", r + a), o.src = e), n[e] = [t];
            var g = function (t, a) {
                o.onerror = o.onload = null, clearTimeout(l);
                var r = n[e];
                if (delete n[e], o.parentNode && o.parentNode.removeChild(o), r && r.forEach((function (e) {
                    return e(a)
                })), t) return t(a)
            }, l = setTimeout(g.bind(null, void 0, {type: "timeout", target: o}), 12e4);
            o.onerror = g.bind(null, o.onerror), o.onload = g.bind(null, o.onload), c && document.head.appendChild(o)
        }
    }, f.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, f.nmd = function (e) {
        return e.paths = [], e.children || (e.children = []), e
    }, f.p = "https://lf3-cdn-tos.bdxiguastatic.com/obj/ixigua-static/xigua_fe/xigua_video_web_pc/", i = function (e) {
        return new Promise((function (t, a) {
            var n = f.miniCssF(e), r = f.p + n;
            if (function (e, t) {
                for (var a = document.getElementsByTagName("link"), n = 0; n < a.length; n++) {
                    var r = (o = a[n]).getAttribute("data-href") || o.getAttribute("href");
                    if ("stylesheet" === o.rel && (r === e || r === t)) return o
                }
                var i = document.getElementsByTagName("style");
                for (n = 0; n < i.length; n++) {
                    var o;
                    if ((r = (o = i[n]).getAttribute("data-href")) === e || r === t) return o
                }
            }(n, r)) return t();
            !function (e, t, a, n) {
                var r = document.createElement("link");
                r.rel = "stylesheet", r.type = "text/css", r.onerror = r.onload = function (i) {
                    if (r.onerror = r.onload = null, "load" === i.type) a(); else {
                        var o = i && ("load" === i.type ? "missing" : i.type), c = i && i.target && i.target.href || t,
                            s = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                        s.code = "CSS_CHUNK_LOAD_FAILED", s.type = o, s.request = c, r.parentNode.removeChild(r), n(s)
                    }
                }, r.href = t, document.head.appendChild(r)
            }(e, r, t, a)
        }))
    }, o = {8223: 0}, f.f.miniCss = function (e, t) {
        o[e] ? t.push(o[e]) : 0 !== o[e] && {
            668: 1,
            1620: 1,
            2540: 1,
            2605: 1,
            2815: 1,
            3069: 1,
            3114: 1,
            3675: 1,
            3943: 1,
            4067: 1,
            4656: 1,
            5625: 1,
            5880: 1,
            6042: 1,
            6615: 1,
            6662: 1,
            6907: 1,
            7099: 1,
            7138: 1,
            8326: 1,
            8447: 1,
            8711: 1,
            8738: 1,
            8868: 1,
            9039: 1
        }[e] && t.push(o[e] = i(e).then((function () {
            o[e] = 0
        }), (function (t) {
            throw delete o[e], t
        })))
    }, function () {
        var e = {8223: 0};
        f.f.j = function (t, a) {
            var n = f.o(e, t) ? e[t] : void 0;
            if (0 !== n) if (n) a.push(n[2]); else if (8223 != t) {
                var r = new Promise((function (a, r) {
                    n = e[t] = [a, r]
                }));
                a.push(n[2] = r);
                var i = f.p + f.u(t), o = new Error;
                f.l(i, (function (a) {
                    if (f.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                        var r = a && ("load" === a.type ? "missing" : a.type), i = a && a.target && a.target.src;
                        o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")", o.name = "ChunkLoadError", o.type = r, o.request = i, n[1](o)
                    }
                }), "chunk-" + t, t)
            } else e[t] = 0
        }, f.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, a) {
            var n, r, i = a[0], o = a[1], c = a[2], s = 0;
            if (i.some((function (t) {
                return 0 !== e[t]
            }))) {
                for (n in o) f.o(o, n) && (f.m[n] = o[n]);
                if (c) var u = c(f)
            }
            for (t && t(a); s < i.length; s++) r = i[s], f.o(e, r) && e[r] && e[r][0](), e[i[s]] = 0;
            return f.O(u)
        }, a = self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || [];
        a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
    }()
}();
//# sourceMappingURL=https://sourcemap.ixigua.com/obj/xigua-video-web-pc-sourcemap/xgpc/sourcemap/js/runtime_main.26b8c1dded.js.map