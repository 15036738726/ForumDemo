"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5880], {
    10908: function (e, t, n) {
        var r = n(19623), i = (n(41539), n(54747), n(68309), n(90149)), a = n.n(i), o = n(2991), l = n.n(o),
            s = n(67294), c = n(94184), u = n.n(c), d = function (e) {
                return e && e.Math == Math && e
            },
            f = d("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || d("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || d("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || d("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function p(e) {
            var t = {};
            return e.forEach((function (e) {
                return t[e] = (0, s.createRef)()
            })), t
        }

        f.globalThis = f, f.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var h = s.memo((function (e) {
            var t = e.activeKey, n = e.onChange, r = e.config, i = e.className, a = e.height, o = e.appendNode,
                c = void 0 === o ? null : o, d = e.placeholder, f = (0, s.useRef)(p(l()(r).call(r, (function (e) {
                    return e.key
                }))));
            return (0, s.useEffect)((function () {
                f.current = p(l()(r).call(r, (function (e) {
                    return e.key
                })))
            }), [r]), s.createElement("div", {className: u()("component-sortTabs__container", i)}, r.length ? l()(r).call(r, (function (e, r) {
                return e ? s.createElement("button", {
                    key: e.key,
                    className: u()("component-sortTabs__tabItemWrapper", {first: 0 === r}),
                    onClick: function () {
                        var r;
                        (r = e.key) !== t && n(r, {preActiveKey: t})
                    },
                    "aria-pressed": t === e.key,
                    tabIndex: 0,
                    "aria-label": e.name
                }, s.createElement("div", {
                    ref: f.current[e.key],
                    className: u()("component-sortTabs__tabItem", {
                        active: t === e.key,
                        first: 0 === r,
                        "font-h3-bold": t === e.key,
                        "font-h3-regular": t !== e.key
                    })
                }, e.icon && s.createElement("i", {className: e.icon}), e.showOnly_href ? s.createElement("a", {
                    href: globalThis.getFilterXss().filterUrl(e.showOnly_href, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), onClick: function (e) {
                        return e.preventDefault()
                    }
                }, e.name) : s.createElement("span", null, e.name), s.createElement("div", {
                    className: "ink",
                    style: {height: a || void 0}
                })), e.suffix) : s.createElement(s.Fragment, null)
            })) : d && s.createElement("div", {className: u()("component-sortTabs__tabItemWrapper", "first")}, s.createElement("div", {className: "component-sortTabs__tabItem"}, d)), s.createElement("div", {className: "component-sortTabs__appendNode"}, c))
        }), (function (e, t) {
            return e.activeKey === t.activeKey && e.onChange === t.onChange && e.config === t.config
        }));
        t.Z = h
    }, 81226: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return at
            }
        });
        var r, i, a = n(33938), o = n(59056), l = n(19623), s = n(63109), c = n.n(s),
            u = (n(66992), n(41539), n(88674), n(78783), n(33948), n(82526), n(41817), n(90149)), d = n.n(u),
            f = n(20116), p = n.n(f), h = n(93476), m = n.n(h), v = n(2991), g = n.n(v), _ = n(67294), b = n(94184),
            y = n.n(b);

        function w() {
            return w = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, w.apply(this, arguments)
        }

        var x, E = function (e) {
            return _.createElement("svg", w({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = _.createElement("path", {
                stroke: "#0C0D0F",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M11.75 13.75v6.5M14.657 14.828L11.828 12 9 14.828"
            })), i || (i = _.createElement("path", {
                d: "M16.5 17.494h.45a4.05 4.05 0 00.459-8.074V9.39a5.4 5.4 0 10-10.8.018A4.06 4.06 0 003 13.444a4.05 4.05 0 004.05 4.05h.45",
                stroke: "#0C0D0F",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        };

        function j() {
            return j = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, j.apply(this, arguments)
        }

        var Z = function (e) {
                return _.createElement("svg", j({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), x || (x = _.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.25 5c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0120 20.75H4A1.75 1.75 0 012.25 19V5zM4 4.75a.25.25 0 00-.25.25v14c0 .138.112.25.25.25h1.166l7.578-8.437a1.75 1.75 0 012.584-.021l4.922 5.299V5a.25.25 0 00-.25-.25H4zm16 14.5H7.182l6.678-7.434a.25.25 0 01.369-.004l6.021 6.483V19a.25.25 0 01-.25.25zM6.5 8.5a1 1 0 112 0 1 1 0 01-2 0zm1-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z",
                    fill: "#73767A"
                })))
            }, k = n(73126), N = (n(69600), n(68309), n(74916), n(23123), n(77766)), S = n.n(N), P = n(78580), C = n.n(P),
            T = n(20809), U = n(44586), F = n(44845), M = n(41266), O = (n(54747), n(86902)), L = n.n(O), R = n(14310),
            X = n.n(R), z = n(34074), A = n.n(z), D = n(39649), W = n.n(D), I = n(33129), B = n.n(I), H = n(73935),
            K = function (e) {
                return e && e.Math == Math && e
            },
            V = K("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || K("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || K("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || K("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        V.globalThis = V, V.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var q = function (e) {
            var t = e.isReady, n = e.elm, r = e.title, i = e.mode, a = e.cropWidth, o = e.cropHeight, l = e.isLight,
                s = e.isWrapper, c = e.onMouseOver, u = e.onMouseLeave;
            if (!t) return null;
            var d = {display: "", opacity: 1};
            return ("horizontal" === i && o < 136 || "vertical" === i && a < 246) && (d.display = "none"), d.opacity = s && !l ? .5 : 1, (0, H.createPortal)(_.createElement("div", {
                className: "cropper-title",
                onMouseOver: c,
                onMouseLeave: u,
                style: d
            }, _.createElement("span", null, r)), n)
        };

        function Y(e, t) {
            var n = L()(e);
            if (X()) {
                var r = X()(e);
                t && (r = p()(r).call(r, (function (t) {
                    return A()(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Y(Object(n), !0).forEach((function (t) {
                    (0, F.Z)(e, t, n[t])
                })) : W() ? Object.defineProperties(e, W()(n)) : Y(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, A()(n, t))
                }))
            }
            return e
        }

        var J = function (e) {
                return e && e.Math == Math && e
            },
            Q = J("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || J("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || J("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || J("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Q.globalThis = Q, Q.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var $ = function (e) {
                var t = e.isReady, n = e.elm, r = e.isLight, i = e.mode;
                if (!t) return null;
                var a = r ? {opacity: 0} : {}, o = "horizontal" === i ? {} : {display: "none"},
                    l = "vertical" === i ? {} : {display: "none"};
                return (0, H.createPortal)(_.createElement(_.Fragment, null, _.createElement("div", {
                    className: "cropper-opacity cropper-opacity-top",
                    style: G(G({}, a), o)
                }), _.createElement("div", {
                    className: "cropper-opacity cropper-opacity-bottom",
                    style: G(G({}, a), o)
                }), _.createElement("div", {
                    className: "cropper-opacity cropper-opacity-left",
                    style: G(G({}, a), l)
                }), _.createElement("div", {className: "cropper-opacity cropper-opacity-right", style: G(G({}, a), l)})), n)
            }, ee = function (e) {
                return e && e.Math == Math && e
            },
            te = ee("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || ee("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || ee("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || ee("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        te.globalThis = te, te.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ne = function (e) {
            var t = e.isReady, n = e.elm;
            return t ? (0, H.createPortal)(_.createElement(_.Fragment, null, _.createElement("div", {className: "cropper-canvas-opacity"})), n) : null
        }, re = ["src", "style", "className", "ready", "onInitialized", "mode", "isLight"];

        function ie(e, t) {
            var n = L()(e);
            if (X()) {
                var r = X()(e);
                t && (r = p()(r).call(r, (function (t) {
                    return A()(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ie(Object(n), !0).forEach((function (t) {
                    (0, F.Z)(e, t, n[t])
                })) : W() ? Object.defineProperties(e, W()(n)) : ie(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, A()(n, t))
                }))
            }
            return e
        }

        var oe = function (e) {
                return e && e.Math == Math && e
            },
            le = oe("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || oe("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || oe("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || oe("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        le.globalThis = le, le.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var se = _.forwardRef((function (e, t) {
                var n = (0, k.Z)({}, e), r = n.src, i = n.style, a = n.className, l = n.ready, s = n.onInitialized,
                    c = n.mode, u = n.isLight, d = (0, M.Z)(n, re), f = (0, _.useRef)(null), p = function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var r = (0, _.useRef)(null);
                        return _.useEffect((function () {
                            t.forEach((function (e) {
                                e && ("function" == typeof e ? e(r.current) : e.current = r.current)
                            }))
                        }), [t]), r
                    }(t, (0, _.useRef)(null)), h = (0, _.useState)(!1), m = (0, o.Z)(h, 2), v = m[0], g = m[1],
                    b = (0, _.useState)(0), y = (0, o.Z)(b, 2), w = y[0], x = y[1], E = (0, _.useState)(0),
                    j = (0, o.Z)(E, 2), Z = j[0], N = j[1], S = function (e) {
                        return ((null == f ? void 0 : f.current) || document).querySelector(e) || new Image
                    }, P = function (e) {
                        var t = e.getCropBoxData(), n = t.width, r = t.height;
                        x(n), N(r)
                    };
                (0, _.useEffect)((function () {
                    if (null !== p.current) {
                        var e = new (B())(p.current, ae(ae({}, d), {}, {
                            ready: function (t) {
                                var n;
                                g(!0), l && l(t), P(e), null === (n = p.current) || void 0 === n || n.addEventListener("cropmove", (function (t) {
                                    P(e)
                                }))
                            }
                        }));
                        s && s(e)
                    }
                    return function () {
                        var e, t;
                        null === (e = p.current) || void 0 === e || null === (t = e.cropper) || void 0 === t || t.destroy()
                    }
                }), [p]), (0, _.useEffect)((function () {
                    v && ("horizontal" === c ? (S(".dashed-v").style.display = "none", S(".dashed-h").style.display = "block") : (S(".dashed-v").style.display = "block", S(".dashed-h").style.display = "none"))
                }), [c, v]), (0, _.useEffect)((function () {
                    v && ("horizontal" === c ? S(".dashed-h").style.opacity = u ? "0.5" : "1" : S(".dashed-v").style.opacity = u ? "0.5" : "1")
                }), [c, u, v]);
                var C = {isReady: v, mode: c, cropWidth: w, cropHeight: Z, isLight: u};
                return _.createElement("div", {
                    style: i,
                    className: a,
                    ref: f
                }, _.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(r, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), style: {opacity: 0, maxWidth: "100%"}, ref: p, alt: ""
                }), "horizontal" === c ? _.createElement(_.Fragment, null, _.createElement(q, (0, k.Z)({}, C, {
                    elm: S(".dashed-h"),
                    title: "骞虫澘/缃戦〉绔�"
                })), _.createElement(q, (0, k.Z)({}, C, {
                    elm: S(".cropper-crop-box"),
                    title: "鎵嬫満绔�",
                    isWrapper: !0
                }))) : _.createElement(_.Fragment, null, _.createElement(q, (0, k.Z)({}, C, {
                    elm: S(".dashed-v"),
                    title: "鎵嬫満绔�"
                })), _.createElement(q, (0, k.Z)({}, C, {
                    elm: S(".cropper-crop-box"),
                    title: "骞虫澘/缃戦〉绔�",
                    isWrapper: !0
                }))), _.createElement($, {
                    elm: S(".cropper-view-box"),
                    isReady: v,
                    isLight: u,
                    mode: c
                }), _.createElement(ne, {elm: S(".cropper-canvas"), isReady: v}))
            })), ce = se, ue = n(94614), de = n(88764), fe = n(18592), pe = n(15262), he = function (e) {
                return e && e.Math == Math && e
            },
            me = he("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || he("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || he("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || he("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        me.globalThis = me, me.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ve, ge = "UserBanner__preview";
        !function (e) {
            e.pc = "pc", e.pad = "pad", e.mobile = "mobile"
        }(ve || (ve = {}));
        var _e, be = function (e) {
            var t = e.pcRef, n = e.padRef, r = e.mobileRef, i = e.mode, a = void 0 === i ? "horizontal" : i,
                o = e.style, l = e.activeTab, s = e.onChange, c = e.pcUrl, u = e.mobileUrl, d = (0, ue.Z)(),
                f = d.isLogin, p = d.userDetail, h = [{
                    key: ve.pc,
                    title: "缃戦〉绔�",
                    width: 416,
                    height: 239,
                    url: de,
                    ref: t,
                    bannerWrapperStyle: {height: 66.17, top: 0},
                    bannerStyle: {width: 404, height: c ? void 0 : 227.25},
                    avatarStyle: {top: 55, left: 17, width: 29.5, height: 29.5, borderWidth: 1},
                    nickernameStyle: {top: 62, left: 50, transform: "scale(.55)"}
                }, {
                    key: ve.pad,
                    title: "骞虫澘绔�",
                    width: 408,
                    height: 287,
                    url: fe,
                    ref: n,
                    bannerWrapperStyle: {height: 55.71},
                    bannerStyle: {width: 396, height: c ? void 0 : 222.75},
                    avatarStyle: {top: 52, left: 15, width: 33, height: 33, borderWidth: 1},
                    nickernameStyle: {top: 63, left: 53, transform: "scale(.55)"}
                }, {
                    key: ve.mobile,
                    title: "鎵嬫満绔�",
                    width: 224,
                    height: 329,
                    url: pe,
                    ref: r,
                    bannerHeight: 97.16,
                    bannerWrapperStyle: {
                        left: "vertical" === a ? "50%" : 8,
                        height: 97.16,
                        transform: "vertical" === a ? "translateX(-50%)" : "none"
                    },
                    bannerStyle: {width: 208, height: 117, transform: "vertical" !== a || u ? "none" : "scale(4)"},
                    avatarStyle: {top: 83, left: 15, width: 55.5, height: 55.5, borderWidth: 2},
                    nickernameStyle: {top: 148, left: 14, transform: "scale(.65)"}
                }];
            return _.createElement("div", {
                className: "".concat(ge),
                style: o
            }, _.createElement("div", {className: "".concat(ge, "__tabs")}, g()(h).call(h, (function (e) {
                return _.createElement("div", {
                    className: y()("".concat(ge, "__tab"), {active: e.key === l}),
                    onClick: function () {
                        return s(e.key)
                    },
                    key: e.key
                }, e.title)
            }))), g()(h).call(h, (function (e) {
                return _.createElement("div", {
                    className: "".concat(ge, "__body"),
                    key: e.key,
                    style: {width: e.width, height: e.height, visibility: l === e.key ? "visible" : "hidden"}
                }, _.createElement("div", {
                    className: "".concat(ge, "__img__banner__wrapper"),
                    style: e.bannerWrapperStyle
                }, _.createElement("div", {
                    ref: e.ref,
                    className: "".concat(ge, "__img__banner"),
                    style: e.bannerStyle
                }, c || u ? _.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(e.key === ve.mobile ? u : c, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), className: "preview__img", alt: ""
                }) : null)), _.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(e.url, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), className: "".concat(ge, "__img__bg"), alt: ""
                }), f && _.createElement(_.Fragment, null, _.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(null == p ? void 0 : p.avatarUrl, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), className: "".concat(ge, "__img__avatar"), style: e.avatarStyle, alt: ""
                }), _.createElement("div", {
                    className: "".concat(ge, "__nickername"),
                    style: e.nickernameStyle
                }, null == p ? void 0 : p.name)))
            })))
        }, ye = n(68956);

        function we() {
            return we = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, we.apply(this, arguments)
        }

        var xe, Ee, je, Ze = function (e) {
            return _.createElement("svg", we({
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), _e || (_e = _.createElement("g", {
                opacity: .8,
                stroke: "#A3A7AD",
                strokeWidth: 2,
                strokeLinecap: "round"
            }, _.createElement("path", {
                strokeLinejoin: "round",
                d: "M15.7 18.333V27M19.543 19.771L15.77 16 12 19.771"
            }), _.createElement("path", {d: "M22 23.325h.6a5.4 5.4 0 00.612-10.765v-.038a7.2 7.2 0 10-14.4.024A5.412 5.412 0 004 17.926a5.4 5.4 0 005.4 5.4h.6"}))))
        };

        function ke() {
            return ke = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, ke.apply(this, arguments)
        }

        var Ne, Se, Pe, Ce = function (e) {
            return _.createElement("svg", ke({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), xe || (xe = _.createElement("mask", {
                id: "mode_h_svg__a",
                fill: "#fff"
            }, _.createElement("rect", {
                x: 3,
                y: 6,
                width: 18,
                height: 12,
                rx: 1
            }))), Ee || (Ee = _.createElement("rect", {
                x: 3,
                y: 6,
                width: 18,
                height: 12,
                rx: 1,
                stroke: "#0C0D0F",
                strokeWidth: 2.6,
                mask: "url(#mode_h_svg__a)"
            })), je || (je = _.createElement("path", {
                stroke: "#0C0D0F",
                strokeWidth: 1.3,
                d: "M3.65 10.15h16.7v3.7H3.65z"
            })))
        };

        function Te() {
            return Te = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Te.apply(this, arguments)
        }

        var Ue = function (e) {
                return _.createElement("svg", Te({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Ne || (Ne = _.createElement("mask", {
                    id: "mode_v_svg__a",
                    fill: "#fff"
                }, _.createElement("rect", {
                    x: 2,
                    y: 8,
                    width: 20,
                    height: 8,
                    rx: 1
                }))), Se || (Se = _.createElement("rect", {
                    x: 2,
                    y: 8,
                    width: 20,
                    height: 8,
                    rx: 1,
                    stroke: "#A3A7AD",
                    strokeWidth: 2.6,
                    mask: "url(#mode_v_svg__a)"
                })), Pe || (Pe = _.createElement("path", {
                    stroke: "#A3A7AD",
                    strokeWidth: 1.3,
                    d: "M8.65 8.65h6.7v6.7h-6.7z"
                })))
            }, Fe = (n(77940), function (e) {
                return e && e.Math == Math && e
            }),
            Me = Fe("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || Fe("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || Fe("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || Fe("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Me.globalThis = Me, Me.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Oe = T.Z.Dragger, Le = "UserBanner__upload", Re = function (e) {
                var t, n = e.setCropper, r = e.setCropper2, i = e.mode, a = e.setMode, l = e.image, s = e.setImage,
                    c = e.webUrl, u = e.appUrl, d = (0, _.useState)(), f = (0, o.Z)(d, 2), p = f[0], h = f[1],
                    m = (0, _.useState)(!0), v = (0, o.Z)(m, 2), b = v[0], w = v[1], x = (0, _.useState)(!1),
                    E = (0, o.Z)(x, 2), j = E[0], Z = E[1], N = (0, _.useState)(!1), P = (0, o.Z)(N, 2), F = P[0], M = P[1],
                    O = (0, _.useRef)(null), L = (0, _.useRef)(null), R = (0, _.useRef)(null), X = (0, _.useRef)(null),
                    z = (0, _.useRef)(null), A = (0, _.useRef)(null), D = (0, _.useState)(ve.pc), W = (0, o.Z)(D, 2),
                    I = W[0], B = W[1], H = (0, _.useState)(ve.pc), K = (0, o.Z)(H, 2), V = K[0], q = K[1],
                    Y = ["jpg", "jpeg", "png"], G = S()(t = g()(Y).call(Y, (function (e) {
                        return e.toUpperCase()
                    }))).call(t, Y), J = {
                        name: "file", accept: g()(G).call(G, (function (e) {
                            return ".".concat(e)
                        })).join(","), fileList: p ? [p] : [], showUploadList: !1, beforeUpload: function (e) {
                            var t = e.name, n = e.size, r = t.split("."), i = r[r.length - 1];
                            return r.length < 2 || !C()(G).call(G, i) ? (U.Z.error("涓婁紶鍥剧墖浠呮敮鎸�".concat(Y.join("銆�"), "銆�")), !1) : 0 === n ? (U.Z.error("涓婁紶鍥剧墖涓虹┖锛岃閲嶆柊涓婁紶"), !1) : n / 1024 / 1024 > 20 ? (U.Z.error("涓婁紶鍥剧墖澶у皬涓嶅緱瓒呰繃20M"), !1) : (h(e), !1)
                        }
                    }, Q = function (e) {
                        e !== i && a(e)
                    }, $ = {
                        style: {width: 352, height: 352},
                        src: globalThis.getFilterXss().filterUrl(l, null, {logType: "js.href/src", reportOnly: "all"}),
                        background: !1,
                        responsive: !0,
                        autoCropArea: 1,
                        center: !1,
                        checkOrientation: !1,
                        guides: !0,
                        scalable: !1,
                        modal: !1,
                        zoomable: !1
                    }, ee = _.createElement(_.Fragment, null, _.createElement(ce, (0, k.Z)({}, $, {
                        mode: "horizontal",
                        viewMode: 2,
                        aspectRatio: 352 / 198,
                        preview: [R.current, L.current, O.current],
                        minCropBoxWidth: 88,
                        isLight: j,
                        onInitialized: function (e) {
                            n(e)
                        }
                    })), _.createElement(ce, (0, k.Z)({}, $, {
                        mode: "vertical",
                        viewMode: 2,
                        aspectRatio: 352 / 49.514,
                        preview: [A.current, z.current, X.current],
                        minCropBoxWidth: 198,
                        isLight: F,
                        onInitialized: function (e) {
                            r(e)
                        }
                    })));
                return (0, _.useEffect)((function () {
                    if (p) {
                        var e = new FileReader;
                        e.onload = function () {
                            var t = e.result, n = new Image;
                            n.onload = function () {
                                var e = n.width / n.height;
                                e > 8 ? U.Z.error("涓婁紶鍥剧墖瀹介珮姣斾緥涓嶅緱澶т簬8:1") : e < .5 ? U.Z.error("涓婁紶鍥剧墖瀹介珮姣斾緥涓嶅緱灏忎簬1:2") : (s(t), w(!1), requestAnimationFrame((function () {
                                    return w(!0)
                                })))
                            }, n.src = globalThis.getFilterXss().filterUrl(t, null, {
                                logType: "js.href/src",
                                reportOnly: "all"
                            })
                        }, e.readAsDataURL(p)
                    }
                }), [p]), (0, _.useEffect)((function () {
                    "horizontal" === i ? ye.Z.userCenter.pgcPictureCutSwitch({
                        cut_type: "small",
                        terminal_type: V
                    }) : ye.Z.userCenter.pgcPictureCutSwitch({cut_type: "large", terminal_type: I})
                }), [i]), _.createElement("div", {className: "".concat(Le)}, _.createElement("div", {className: "".concat(Le, "__cropper")}, _.createElement("div", {className: "".concat(Le, "__cropper__body")}, l ? _.createElement("div", {
                    className: "".concat(Le, "__cropper__container"),
                    style: {transform: "horizontal" === i ? "" : "translateY(-352px)"}
                }, l && b && R.current && L.current && O.current && A.current && z.current && X.current && ee) : _.createElement("div", {
                    className: "".concat(Le, "__cropper__dragger"),
                    onClick: function () {
                        ye.Z.userCenter.pgcPictureUploadClick()
                    }
                }, _.createElement(Oe, J, _.createElement(Ze, null), _.createElement("div", {className: "".concat(Le, "__cropper__title")}, "鐐瑰嚮涓婁紶鎴栧皢鍥剧墖鎷栧叆姝ゅ尯鍩�"), _.createElement("div", {className: "".concat(Le, "__cropper__subtitle")}, "鏀寔JPG/PNG鏍煎紡锛屾枃浠跺ぇ灏忎笉瓒呰繃20MB")))), l && _.createElement("div", {className: "".concat(Le, "__cropper__footer")}, _.createElement("div", {className: "".concat(Le, "__cropper__footer__mode")}, _.createElement("span", {className: "".concat(Le, "__cropper__footer__text")}, "瑁佸垏鏂瑰紡"), _.createElement("div", {className: "".concat(Le, "__cropper__footer__block")}, _.createElement(Ce, {
                    className: y()({active: "horizontal" === i}),
                    onClick: function () {
                        return Q("horizontal")
                    }
                }), _.createElement("div", {className: "".concat(Le, "__cropper__footer__block__split")}), _.createElement(Ue, {
                    className: y()({active: "vertical" === i}),
                    onClick: function () {
                        return Q("vertical")
                    }
                }))), _.createElement("div", {className: "".concat(Le, "__cropper__footer__reupload")}, _.createElement(T.Z, J, "閲嶆柊涓婁紶")))), _.createElement(be, {
                    key: 0,
                    mobileRef: O,
                    padRef: L,
                    pcRef: R,
                    activeTab: I,
                    onChange: function (e) {
                        e !== I && (B(e), ye.Z.userCenter.pgcPictureTerminalSwitch({
                            page_name: "upload",
                            terminal_type: e
                        }), e === ve.pc || e === ve.pad ? Z(!1) : Z(!0), q(e), e === ve.pc || e === ve.pad ? M(!0) : M(!1))
                    },
                    mode: i,
                    style: {transform: "horizontal" === i ? "" : "translateY(-454px)"},
                    pcUrl: l ? void 0 : c,
                    mobileUrl: l ? void 0 : u
                }), _.createElement(be, {
                    key: 1,
                    mobileRef: X,
                    padRef: z,
                    pcRef: A,
                    activeTab: V,
                    onChange: function (e) {
                        e !== V && (q(e), ye.Z.userCenter.pgcPictureTerminalSwitch({
                            page_name: "upload",
                            terminal_type: e
                        }), e === ve.pc || e === ve.pad ? M(!0) : M(!1), B(e), e === ve.pc || e === ve.pad ? Z(!1) : Z(!0))
                    },
                    mode: i,
                    style: {transform: "vertical" === i ? "translateY(-454px)" : ""},
                    pcUrl: l ? void 0 : c,
                    mobileUrl: l ? void 0 : u
                }))
            }, Xe = function (e) {
                return e && e.Math == Math && e
            },
            ze = Xe("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || Xe("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || Xe("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || Xe("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ze.globalThis = ze, ze.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ae = "UserBanner__recommend", De = function (e) {
                var t = e.activePicKey, n = e.setActivePicKey, r = e.pcImageList, i = e.mobileImageList,
                    a = (0, _.useState)(ve.pc), l = (0, o.Z)(a, 2), s = l[0], c = l[1];
                return _.createElement("div", {className: "".concat(Ae)}, _.createElement("div", {className: "".concat(Ae, "__body")}, _.createElement("div", {className: "".concat(Ae, "__scroll")}, g()(i).call(i, (function (e, r) {
                    return _.createElement("div", {
                        key: r,
                        className: y()("".concat(Ae, "__image"), {active: r === t}),
                        onClick: function () {
                            return n(r)
                        }
                    }, _.createElement("div", {className: "".concat(Ae, "__image__border")}, _.createElement("img", {
                        src: globalThis.getFilterXss().filterUrl(e, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }), alt: ""
                    })))
                })))), _.createElement(be, {
                    pcUrl: r[t], mobileUrl: i[t], activeTab: s, onChange: function (e) {
                        e !== s && (c(e), ye.Z.userCenter.pgcPictureTerminalSwitch({
                            page_name: "gallery",
                            terminal_type: e
                        }))
                    }
                }))
            }, We = function (e) {
                return e && e.Math == Math && e
            },
            Ie = We("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || We("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || We("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || We("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ie.globalThis = Ie, Ie.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Be = function (e) {
                return new (m())((function (t) {
                    e.toBlob((function (e) {
                        if (e) {
                            var n = new File([e], "name", {lastModified: (new Date).getTime(), type: e.type});
                            t(n)
                        }
                    }), "image/png", 1)
                }))
            }, He = function (e, t) {
                var n = .373737 * t, r = .252525 * t, i = e.getContext("2d"),
                    a = null == i ? void 0 : i.getImageData(0, n, 2360, r), o = document.createElement("canvas");
                o.width = 2360, o.height = 332;
                var l = o.getContext("2d");
                return a && (null == l || l.putImageData(a, 0, 0)), o
            }, Ke = function (e, t) {
                var n = .375 * t, r = .25 * t, i = e.getContext("2d"),
                    a = null == i ? void 0 : i.getImageData(n, 0, r, 632), o = document.createElement("canvas");
                o.width = 1125, o.height = 632;
                var l = o.getContext("2d");
                return a && (null == l || l.putImageData(a, 0, 0)), o
            }, Ve = function () {
                var e = (0, a.Z)(c().mark((function e(t, n) {
                    var r, i, a, o, l, s, u, d;
                    return c().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", m().resolve([]));
                            case 2:
                                if ("horizontal" !== t) {
                                    e.next = 18;
                                    break
                                }
                                return r = n.getCroppedCanvas({
                                    width: 1125,
                                    height: 632,
                                    minWidth: 1125
                                }), i = 1327.5, a = n.getCroppedCanvas({
                                    width: 2360,
                                    height: i
                                }), o = He(a, i), e.t0 = m(), e.next = 10, Be(r);
                            case 10:
                                return e.t1 = e.sent, e.next = 13, Be(o);
                            case 13:
                                return e.t2 = e.sent, e.t3 = [e.t1, e.t2], e.abrupt("return", e.t0.resolve.call(e.t0, e.t3));
                            case 18:
                                if ("vertical" !== t) {
                                    e.next = 32;
                                    break
                                }
                                return l = n.getCroppedCanvas({
                                    width: 2360,
                                    height: 332,
                                    minHeight: 332
                                }), s = 632 / 332 * 2360, u = n.getCroppedCanvas({
                                    width: s,
                                    height: 632,
                                    imageSmoothingQuality: "high"
                                }), d = Ke(u, s), e.t4 = m(), e.next = 26, Be(l);
                            case 26:
                                return e.t5 = e.sent, e.next = 29, Be(d);
                            case 29:
                                return e.t6 = e.sent, e.t7 = [e.t5, e.t6], e.abrupt("return", e.t4.resolve.call(e.t4, e.t7));
                            case 32:
                                return e.abrupt("return", m().resolve([]));
                            case 33:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }(), qe = n(59340), Ye = n.n(qe), Ge = n(52862), Je = function (e) {
                return e && e.Math == Math && e
            },
            Qe = Je("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || Je("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || Je("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || Je("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Qe.globalThis = Qe, Qe.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var $e = {
                getDefaultBackgroundImageList: function () {
                    return Ge.ZP.get("/web/user/settings/1768/default_background_image_info/")
                }, uploadPic: function (e) {
                    var t = new FormData;
                    return t.append("pic", e), t.append("aid", "1768"), Ge.ZP.post("/web/user/upload/pic/", t)
                }, updateUserInfo: function (e, t) {
                    var n = new FormData;
                    return n.append("aid", "1768"), n.append("expend_attrs", Ye()({
                        app_background_url: e,
                        web_background_url: t
                    })), Ge.ZP.post("/web/user/update/user_info/?aid=1768", n)
                }
            }, et = n(7922), tt = function (e) {
                return e && e.Math == Math && e
            },
            nt = tt("object" == (void 0 === d() ? "undefined" : (0, l.Z)(d())) && d()) || tt("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || tt("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || tt("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        nt.globalThis = nt, nt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var rt, it = "UserBanner";
        !function (e) {
            e[e.upload = 0] = "upload", e[e.recommend = 1] = "recommend"
        }(rt || (rt = {}));
        var at = function (e) {
            var t = e.appUrl, n = e.webUrl, r = e.onOk, i = e.visible, l = e.setVisible, s = (0, _.useState)(rt.upload),
                u = (0, o.Z)(s, 2), d = u[0], f = u[1], h = (0, _.useState)([]), v = (0, o.Z)(h, 2), b = v[0], w = v[1],
                x = (0, _.useState)([]), j = (0, o.Z)(x, 2), k = j[0], N = j[1], S = (0, _.useState)(),
                P = (0, o.Z)(S, 2), C = P[0], T = P[1], F = (0, _.useState)(), M = (0, o.Z)(F, 2), O = M[0], L = M[1],
                R = (0, _.useState)("horizontal"), X = (0, o.Z)(R, 2), z = X[0], A = X[1], D = (0, _.useState)(0),
                W = (0, o.Z)(D, 2), I = W[0], B = W[1], H = (0, _.useState)(!1), K = (0, o.Z)(H, 2), V = K[0], q = K[1],
                Y = (0, _.useState)(), G = (0, o.Z)(Y, 2), J = G[0], Q = G[1], $ = function (e) {
                    d !== e && f(e)
                }, ee = function () {
                    var e = (0, a.Z)(c().mark((function e() {
                        var t, n, i, a, o, s, u, f, h, v, _, y, w, x, E, j, Z;
                        return c().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!V) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (q(!0), d !== rt.upload) {
                                        e.next = 52;
                                        break
                                    }
                                    if (J) {
                                        e.next = 8;
                                        break
                                    }
                                    return U.Z.error("璇蜂笂浼犲浘鐗�"), q(!1), e.abrupt("return");
                                case 8:
                                    return e.next = 10, Ve(z, "horizontal" === z ? C : O);
                                case 10:
                                    return t = e.sent, n = p()(t).call(t, (function (e) {
                                        return null !== e
                                    })), i = "", a = "", o = "", s = "", e.prev = 16, e.next = 19, m().all(g()(n).call(n, (function (e) {
                                        return $e.uploadPic(e)
                                    })));
                                case 19:
                                    u = e.sent, f = g()(u).call(u, (function (e) {
                                        var t;
                                        return null === (t = e.data) || void 0 === t ? void 0 : t.message
                                    })), h = g()(u).call(u, (function (e) {
                                        var t, n;
                                        return null === (t = e.data) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.web_uri
                                    })), i = f[0], a = f[1], o = "horizontal" === z ? h[0] : h[1], s = "horizontal" === z ? h[1] : h[0], e.next = 33;
                                    break;
                                case 28:
                                    return e.prev = 28, e.t0 = e.catch(16), U.Z.error("涓婁紶鍥剧墖澶辫触"), q(!1), e.abrupt("return");
                                case 33:
                                    if ("success" !== i || "success" !== a) {
                                        e.next = 48;
                                        break
                                    }
                                    return ye.Z.userCenter.pgcPictureUploadSave(), e.prev = 35, e.next = 38, $e.updateUserInfo(o, s);
                                case 38:
                                    _ = e.sent, "success" === (null === (v = _.data) || void 0 === v ? void 0 : v.message) ? (ye.Z.userCenter.pgcPictureSetting({
                                        picture_url: s,
                                        is_upload: 1
                                    }), U.Z.success("淇敼涓婚〉鑳屾櫙鎴愬姛"), q(!1), l(!1), null == r || r()) : (U.Z.error((null == _ || null === (y = _.data) || void 0 === y || null === (w = y.data) || void 0 === w ? void 0 : w.description) || "淇敼涓婚〉鑳屾櫙澶辫触"), q(!1)), e.next = 46;
                                    break;
                                case 42:
                                    e.prev = 42, e.t1 = e.catch(35), U.Z.error("淇敼涓婚〉鑳屾櫙澶辫触"), q(!1);
                                case 46:
                                    e.next = 50;
                                    break;
                                case 48:
                                    U.Z.error("涓婁紶鍥剧墖澶辫触"), q(!1);
                                case 50:
                                    e.next = 63;
                                    break;
                                case 52:
                                    return e.prev = 52, e.next = 55, $e.updateUserInfo(k[I], b[I]);
                                case 55:
                                    E = e.sent, "success" === (null === (x = E.data) || void 0 === x ? void 0 : x.message) ? (ye.Z.userCenter.pgcPictureSetting({
                                        picture_url: b[I],
                                        is_upload: 0
                                    }), U.Z.success("淇敼涓婚〉鑳屾櫙鎴愬姛"), q(!1), l(!1), null == r || r()) : (U.Z.error((null == E || null === (j = E.data) || void 0 === j || null === (Z = j.data) || void 0 === Z ? void 0 : Z.description) || "淇敼涓婚〉鑳屾櫙澶辫触"), q(!1)), e.next = 63;
                                    break;
                                case 59:
                                    e.prev = 59, e.t2 = e.catch(52), U.Z.error("淇敼涓婚〉鑳屾櫙澶辫触"), q(!1);
                                case 63:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[16, 28], [35, 42], [52, 59]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), te = function () {
                    ye.Z.userCenter.pgcPictureCancel({is_upload: 0}), l(!1)
                };
            return (0, _.useEffect)((function () {
                $e.getDefaultBackgroundImageList().then((function (e) {
                    var t, n,
                        r = (null == e || null === (t = e.data) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.default_background_image_info) || [];
                    w(g()(r).call(r, (function (e) {
                        return e.web_bg_url
                    }))), N(g()(r).call(r, (function (e) {
                        return e.app_bg_url
                    })))
                }))
            }), []), (0, _.useEffect)((function () {
                d === rt.upload ? ye.Z.userCenter.pgcPictureWindowShow({page_name: "upload"}) : (ye.Z.userCenter.pgcPictureWindowShow({page_name: "gallery"}), Q(void 0))
            }), [d]), _.createElement(et.u_, {
                title: "璁剧疆涓婚〉鑳屾櫙",
                className: it,
                onCancel: te,
                visible: i
            }, _.createElement("div", {className: "".concat(it, "__tags")}, _.createElement("div", {
                className: y()("".concat(it, "__tag"), {active: d === rt.upload}),
                onClick: function () {
                    return $(rt.upload)
                }
            }, _.createElement(E, {className: "upload__tag"}), _.createElement("span", null, "鏈湴涓婁紶")), _.createElement("div", {
                className: y()("".concat(it, "__tag"), {active: d === rt.recommend}),
                onClick: function () {
                    return $(rt.recommend)
                }
            }, _.createElement(Z, {className: "recommend__tag"}), _.createElement("span", null, "鎺ㄨ崘鍥惧簱"))), _.createElement("div", {className: "".concat(it, "__main")}, _.createElement("div", {className: "".concat(it, "__body")}, _.createElement("div", {className: "".concat(it, "__scroll")}, d === rt.upload ? _.createElement(Re, {
                setCropper: T,
                setCropper2: L,
                mode: z,
                setMode: A,
                image: J,
                setImage: Q,
                webUrl: n,
                appUrl: t
            }) : _.createElement(De, {
                activePicKey: I,
                setActivePicKey: B,
                pcImageList: b,
                mobileImageList: k
            }))), _.createElement("div", {className: "".concat(it, "__footer")}, _.createElement("div", {className: "".concat(it, "__footer__shadow")}), _.createElement(et.zx, {
                className: "".concat(it, "__btn"),
                onClick: ee,
                loading: V
            }, "瀹屾垚"), _.createElement(et.zx, {
                type: "ghost-weak",
                className: "".concat(it, "__btn"),
                onClick: te
            }, "鍙栨秷"))))
        }
    }, 10173: function (e, t, n) {
        var r = n(19623), i = (n(74916), n(64765), n(90149)), a = n.n(i), o = n(51615), l = n(54998), s = n.n(l),
            c = function (e) {
                return e && e.Math == Math && e
            },
            u = c("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || c("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || c("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || c("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        u.globalThis = u, u.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, t.Z = function () {
            return new (s())((0, o.TH)().search).query(!0)
        }
    }, 15262: function (e, t, n) {
        e.exports = n.p + "static/media/preview_mobile.91b79a32.png"
    }, 18592: function (e, t, n) {
        e.exports = n.p + "static/media/preview_pad.29de8913.png"
    }, 88764: function (e, t, n) {
        e.exports = n.p + "static/media/preview_pc.d910999a.png"
    }, 56789: function (e, t, n) {
        e.exports = n.p + "static/media/bg.d14cd729.jpg"
    }, 28524: function (e, t, n) {
        e.exports = n.p + "static/media/bg_app.f54cf2d9.jpg"
    }
}]);
//# sourceMappingURL=https://sourcemap.ixigua.com/obj/xigua-video-web-pc-sourcemap/xgpc/sourcemap/js/5880.981bcede99.chunk.js.map