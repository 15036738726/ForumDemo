"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1620], {
    62470: function (e, n, t) {
        t.d(n, {
            As: function () {
                return p
            }, q6: function () {
                return y
            }
        });
        var i = t(59056), r = t(19623), o = t(90149), l = t.n(o), s = t(67294), a = t(14173), u = t(47561), c = t.n(u),
            f = t(91481), d = t(55494), m = function (e) {
                return e && e.Math == Math && e
            },
            v = m("object" == (void 0 === l() ? "undefined" : (0, r.Z)(l())) && l()) || m("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || m("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || m("object" == (void 0 === t.g ? "undefined" : (0, r.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();
        v.globalThis = v, v.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var h = {
            exclusive: "搴旂増鏉冩柟瑕佹眰锛岃瑙嗛鏃犳硶鍦ㄥ閮ㄦ挱鏀�",
            vl: "鎶辨瓑锛岃瑙嗛鏆備笉鏀寔澶栭儴鎾斁锛屽幓瑗跨摐瑙嗛瑙傜湅鏇村绮惧僵瑙嗛",
            sandbox: "濡傞渶浣跨敤璇ュ姛鑳斤紝璇峰嬁璁剧疆娌欑洅妯″紡",
            default: "鎶辨瓑锛岃棰戝姞杞藉嚭閿欙紝鍘昏タ鐡滆棰戣鐪嬫洿澶氱簿褰╄棰�",
            host: "鎶辨瓑锛岃瑙嗛鏆備笉鏀寔鍦ㄦ缃戠珯/App鎾斁锛屽幓瑗跨摐瑙嗛瑙傜湅鏇村绮惧僵瑙嗛",
            noReferrer: s.createElement(s.Fragment, null, "涓嶆敮鎸佸湪鏈煡绔欑偣鎾斁锛岀珯鐐瑰紑鍙戣€呭彲鍙傝€�", s.createElement("a", {
                href: globalThis.getFilterXss().filterUrl("https://developers.ixigua.com/iframe.html#%E4%B8%8D%E6%94%AF%E6%8C%81%E5%9C%A8%E6%9C%AA%E7%9F%A5%E7%AB%99%E7%82%B9%E6%92%AD%E6%94%BE", null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), target: "_blank"
            }, "浣跨敤鏂囨。"))
        }, g = function (e) {
            var n = e.mixId, t = e.reason, r = h[void 0 === t ? "default" : t], o = (0, s.useState)("www.ixigua.com"),
                l = (0, i.Z)(o, 2), u = l[0], f = l[1];
            return (0, s.useEffect)((function () {
                c().any ? f(n ? "https://m.ixigua.com/video/".concat(n) : "https://m.ixigua.com") : f(n ? "https://www.ixigua.com/".concat(n) : "https://www.ixigua.com")
            }), [n]), s.createElement("div", {className: "DisallowedPlayer_container"}, s.createElement("img", {
                className: "DisallowedPlayer_logo",
                src: globalThis.getFilterXss().filterUrl(a, null, {logType: "js.href/src", reportOnly: "all"}),
                alt: "xigua_logo"
            }), s.createElement("div", {className: "DisallowedPlayer_text"}, r), s.createElement("a", {
                className: "DisallowedPlayer_button",
                href: globalThis.getFilterXss().filterUrl(u, null, {logType: "js.href/src", reportOnly: "all"}),
                target: "_blank"
            }, "鍘昏タ鐡滆棰戣鐪�"))
        };
        n.ZP = g;
        var p = function (e) {
            var n = e.ShareIFrameInfo, t = void 0 === n ? {} : n, r = e.IsExclusive, o = void 0 !== r && r,
                l = e.IsCopyright, a = e.mixId, u = (0, s.useState)(!1), c = (0, i.Z)(u, 2), m = c[0], v = c[1];
            (0, s.useEffect)((function () {
                var e = (0, f.an)(), n = (0, d.Z)(e);
                v(n)
            }), []);
            var h = !1, p = s.createElement(s.Fragment, null),
                _ = y({ShareIFrameInfo: t, IsExclusive: o, IsCopyright: l}), b = _.shouldIframeShare, w = _.reason;
            return m || !1 === b && (h = !0, p = s.createElement(g, {mixId: a, reason: w})), {
                isDisallowed: h,
                renderDisallowedPlayer: p
            }
        }, y = function (e) {
            var n = e.ShareIFrameInfo, t = void 0 === n ? {} : n, i = e.IsExclusive, r = void 0 !== i && i,
                o = e.IsCopyright, l = void 0 !== o && o, s = t.InBanList, a = t.InAllowList, u = t.BanByVL;
            return s ? {
                shouldIframeShare: !1,
                reason: "default"
            } : a ? {shouldIframeShare: !0} : u || r || l ? {
                shouldIframeShare: !1,
                reason: "vl"
            } : {shouldIframeShare: !0}
        }
    }, 85468: function (e, n, t) {
        t.d(n, {
            Q: function () {
                return ye
            }, Z: function () {
                return Ee
            }
        });
        var i = t(44845), r = t(59056), o = t(19623), l = (t(41539), t(54747), t(74916), t(23123), t(68309), t(90149)),
            s = t.n(l), a = t(54903), u = t.n(a), c = t(77766), f = t.n(c), d = t(86902), m = t.n(d), v = t(14310),
            h = t.n(v), g = t(20116), p = t.n(g), y = t(34074), _ = t.n(y), b = t(39649), w = t.n(b), x = t(67294),
            E = t(47561), Z = t.n(E), P = t(94184), j = t.n(P), S = t(68956), C = t(33552), N = t(91899), I = t(92744),
            T = t(28169), k = function (e) {
                return e && e.Math == Math && e
            },
            F = k("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || k("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || k("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || k("object" == (void 0 === t.g ? "undefined" : (0, o.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();
        F.globalThis = F, F.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var U = function (e, n) {
                var i, r, o = e.video_logo;
                o && o.logo_type !== T.nJ.LogoTypeText && o.logo_type !== T.nJ.LogoTypeUndefined ? i = (0, I.Xn)((null == o || null === (r = o.logo_image) || void 0 === r ? void 0 : r.uri) || "", n) : i = t(14173);
                return {src: globalThis.getFilterXss().filterUrl(i, null, {logType: "js.href/src", reportOnly: "all"})}
            }, L = t(7130), A = t(55969), M = t(20640), R = t.n(M), X = t(44586), D = function (e) {
                return e && e.Math == Math && e
            },
            O = D("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || D("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || D("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || D("object" == (void 0 === t.g ? "undefined" : (0, o.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();
        O.globalThis = O, O.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var B = function (e) {
                var n = function (n) {
                    var t;
                    R()(e.shareUrl), X.Z.configContainer((function () {
                        return document.querySelector(".share-cover") || document.body
                    })), X.Z.success("澶嶅埗鎴愬姛", 1, (function () {
                        return X.Z.destroy()
                    })), null == n || null === (t = n.target) || void 0 === t || t.blur(), e.onCopy && e.onCopy()
                };
                return x.createElement("div", {className: "share-cover"}, x.createElement("i", {
                    className: "icon-close",
                    onClick: function () {
                        e.onClose && e.onClose()
                    }
                }), x.createElement("section", {className: "share-content"}, x.createElement("span", {className: "share-title"}, "鍒嗕韩閾炬帴"), x.createElement("div", {
                    className: "share-url",
                    onDoubleClick: function (e) {
                        var t;
                        e.preventDefault(), null == e || null === (t = e.target) || void 0 === t || t.blur(), setTimeout(n, 0)
                    }
                }, e.shareUrl), x.createElement("button", {className: "share-button", onClick: n, "tab-index": 0}, "澶嶅埗")))
            }, H = t(44999), V = t(44786), W = t(2991), z = t.n(W), G = t(42816), q = function (e) {
                return e && e.Math == Math && e
            },
            J = q("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || q("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || q("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || q("object" == (void 0 === t.g ? "undefined" : (0, o.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();

        function K(e, n) {
            e.timeoutID && window.clearTimeout(e.timeoutID), e.timeoutID = setTimeout(e, n)
        }

        J.globalThis = J, J.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Q = function (e) {
                var n, t, o = e.data, l = e.onClose, s = e.onItemClick, a = e.onSlide, u = (0, x.useRef)(null),
                    c = (0, x.useState)(4), f = (0, r.Z)(c, 2), d = f[0], m = f[1], v = (0, x.useState)(0),
                    h = (0, r.Z)(v, 2), g = h[0], p = h[1], y = (0, x.useState)(!1), _ = (0, r.Z)(y, 2), b = _[0], w = _[1],
                    E = (0, x.useState)(!1), Z = (0, r.Z)(E, 2), P = Z[0], S = Z[1], C = function () {
                        var e, n, t, i,
                            r = null !== (e = null == u || null === (n = u.current) || void 0 === n ? void 0 : n.offsetWidth) && void 0 !== e ? e : 0,
                            o = (null !== (t = null == u || null === (i = u.current) || void 0 === i ? void 0 : i.scrollWidth) && void 0 !== t ? t : 0) - r;
                        p(0), w(!1), S(0 !== o), m(r < 694 ? 3 : r >= 694 && r < 948 ? 4 : 5)
                    };
                (0, x.useLayoutEffect)(C, [o]), (0, x.useEffect)((function () {
                    var e = function () {
                        return K(C, 100)
                    };
                    return window.addEventListener("resize", e), function () {
                        return window.removeEventListener("resize", e)
                    }
                }));
                return x.createElement("div", {className: j()((n = {recommend: !0}, (0, i.Z)(n, "row-".concat(d), !0), (0, i.Z)(n, "show-prev-arrow", b), (0, i.Z)(n, "show-next-arrow", P), n))}, x.createElement("div", {className: "header"}, x.createElement("span", {className: "title"}, "鏇村鎺ㄨ崘"), x.createElement("i", {
                    className: "icon-close",
                    onClick: l
                })), x.createElement("div", {className: "list-container"}, x.createElement("div", {
                    className: "list",
                    ref: u,
                    style: {transform: "translateX(".concat(g, "px)")},
                    onClick: s
                }, Array.isArray(o) && z()(o).call(o, (function (e) {
                    return x.createElement(G.Z, {
                        key: e.gid,
                        title: e.title,
                        coverURL: e.image_url,
                        duration: e.duration,
                        anchorProps: e.anchorProps
                    })
                })))), z()(t = ["prev", "next"]).call(t, (function (e) {
                    return x.createElement("div", {
                        className: e, key: e, onClick: function () {
                            return function (e) {
                                var n, t, i, r,
                                    o = null !== (n = null == u || null === (t = u.current) || void 0 === t ? void 0 : t.offsetWidth) && void 0 !== n ? n : 0,
                                    l = (null !== (i = null == u || null === (r = u.current) || void 0 === r ? void 0 : r.scrollWidth) && void 0 !== i ? i : 0) - o;
                                w(0 !== l), S(0 !== l);
                                var s = g + o * ("next" === e ? -1 : 1);
                                s >= 0 ? (s = 0, w(!1)) : Math.abs(s) >= l && (s = -l, S(!1)), p(s), null == a || a(e)
                            }(e)
                        }
                    }, x.createElement("i", {className: "icon-enter"}))
                })))
            }, $ = t(16441), Y = t(46112), ee = t(91481), ne = (t(24603), t(39714), function (e) {
                return e && e.Math == Math && e
            }),
            te = ne("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || ne("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || ne("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || ne("object" == (void 0 === t.g ? "undefined" : (0, o.Z)(t.g)) && t.g) || function () {
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
        var ie = ["https://study.tanshuiyuan.cn", "https://teamunity-boe._____________"], re = function (e) {
                return ie.some((function (n) {
                    return new RegExp("^" + n).test(e)
                }))
            }, oe = t(4260), le = function (e) {
                return e && e.Math == Math && e
            },
            se = le("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || le("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || le("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || le("object" == (void 0 === t.g ? "undefined" : (0, o.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();
        se.globalThis = se, se.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ae = ["https://www.feishu.cn"], ue = function (e) {
                return ae.some((function (n) {
                    return new RegExp("^" + n).test(e)
                }))
            }, ce = function (e) {
                return e && e.Math == Math && e
            },
            fe = ce("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || ce("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || ce("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || ce("object" == (void 0 === t.g ? "undefined" : (0, o.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();
        fe.globalThis = fe, fe.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var de, me = "xgpc-show-infobar";
        !function (e) {
            e.Add = "addEventListener", e.Remove = "removeEventListener"
        }(de || (de = {}));
        var ve = (0, x.forwardRef)((function (e, n) {
            var t = e.videoId, i = e.title, o = e.authorInfo, l = e.playState, s = e.recommendData, a = e.showRecommend,
                u = e.player, c = e.onShareClick, f = e.onVideoTitleClick, d = e.onAuthorAvatarClick,
                m = e.onAuthorNameClick, v = e.onRecommendClose, h = e.onRecommendItemClick, g = e.onSlideRecommend,
                p = o.name, y = o.user_id, _ = o.avatar_url, b = (0, H.$x)(y), w = Z().any,
                E = (0, x.useContext)($.Z).isInIframe, P = (0, x.useRef)(null), S = function (e) {
                    var n, t, i, r = e ? "add" : "remove", o = P.current;
                    null == o || null === (n = o.classList) || void 0 === n || n[r](me), null == u || null === (t = u.controls) || void 0 === t || null === (i = t.classList) || void 0 === i || i[r]("xgpc-showControls")
                };
            (0, x.useImperativeHandle)(n, (function () {
                return {showInfobarAndControls: S}
            }));
            var C = (0, x.useState)(!0), N = (0, r.Z)(C, 2), I = N[0], T = N[1], k = (0, x.useState)(!1),
                F = (0, r.Z)(k, 2), U = F[0], L = F[1];
            return (0, x.useEffect)((function () {
                var e = [], n = function (n, t, i) {
                    e.push({event: t, fn: i}), n.on(t, i)
                }, t = function () {
                    return S(!0)
                }, i = function () {
                    return S(!1)
                }, r = function (e) {
                    var n, r, o, l;
                    null == u || null === (n = u.controls) || void 0 === n || null === (r = n[e]) || void 0 === r || r.call(n, "mouseover", t), null == u || null === (o = u.controls) || void 0 === o || null === (l = o[e]) || void 0 === l || l.call(o, "mouseout", i)
                };
                return u && (n(u, oe.FU, (function () {
                    l !== ye.Ended && T(!0)
                })), n(u, oe.Z$, (function () {
                    var e;
                    if (l !== ye.Ended) {
                        var n = P.current;
                        null != n && null !== (e = n.classList) && void 0 !== e && e.contains(me) ? setTimeout((function () {
                            var e, t, i,
                                r = null == u || null === (e = u.root) || void 0 === e || null === (t = e.classList) || void 0 === t ? void 0 : t.contains("xgplayer-inactive"),
                                o = null == n || null === (i = n.classList) || void 0 === i ? void 0 : i.contains(me);
                            r && !o && T(!1)
                        }), 80) : T(!1)
                    }
                })), r(de.Add)), function () {
                    !function (n) {
                        e.forEach((function (e) {
                            var t = e.event, i = e.fn;
                            return n.off(t, i)
                        })), e.length = 0
                    }(u), r(de.Remove)
                }
            }), [u, l]), (0, x.useEffect)((function () {
                var e = (0, ee.an)(), n = re(e) || ue(e);
                L(n)
            }), []), x.createElement("div", {
                className: j()({
                    "recommend-cover": !0,
                    mobile: w,
                    inactive: l !== ye.Ended && !I,
                    "show-recommend": a,
                    "play-ended": l === ye.Ended,
                    isHide: U
                })
            }, x.createElement("div", {className: "mask"}), x.createElement("header", {
                className: "cover-header",
                ref: P,
                onMouseEnter: function () {
                    return S(!0)
                },
                onMouseOut: function () {
                    return S(!1)
                }
            }, x.createElement("div", {className: "info"}, x.createElement("a", {
                className: "title",
                target: "_blank",
                href: globalThis.getFilterXss().filterUrl(E ? (0, Y.e)("/".concat(t)) : "/".concat(t), null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }),
                title: i,
                onClick: f
            }, i), x.createElement("div", {className: "author"}, x.createElement(V.Z, {
                className: "author-avatar",
                url: _,
                uid: y,
                size: 24,
                onClick: d,
                homePageExplicitQuery: E ? (0, Y.h)() : void 0
            }), x.createElement("a", {
                className: "author-name",
                target: "_blank",
                href: globalThis.getFilterXss().filterUrl(E ? (0, Y.e)(b) : b, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }),
                title: p,
                onClick: m
            }, p))), x.createElement("div", {
                className: "share",
                onClick: c
            }, x.createElement("i", {className: "icon-share2"}), x.createElement("span", {className: "share-text"}, "鍒嗕韩"))), a && (null == s ? void 0 : s.length) > 0 && x.createElement(Q, {
                data: s,
                onClose: v,
                onItemClick: h,
                onSlide: g
            }))
        })), he = ve;

        function ge(e, n) {
            var t = m()(e);
            if (h()) {
                var i = h()(e);
                n && (i = p()(i).call(i, (function (n) {
                    return _()(e, n).enumerable
                }))), t.push.apply(t, i)
            }
            return t
        }

        function pe(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? ge(Object(t), !0).forEach((function (n) {
                    (0, i.Z)(e, n, t[n])
                })) : w() ? Object.defineProperties(e, w()(t)) : ge(Object(t)).forEach((function (n) {
                    Object.defineProperty(e, n, _()(t, n))
                }))
            }
            return e
        }

        var ye, _e = function (e) {
                return e && e.Math == Math && e
            },
            be = _e("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || _e("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || _e("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || _e("object" == (void 0 === t.g ? "undefined" : (0, o.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();
        be.globalThis = be, be.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, function (e) {
            e[e.Unstart = 0] = "Unstart", e[e.Playing = 1] = "Playing", e[e.Pause = 2] = "Pause", e[e.Ended = 3] = "Ended"
        }(ye || (ye = {}));
        var we = [], xe = function (e, n, t) {
            we.push({event: n, fn: t}), e.on(n, t)
        }, Ee = function (e) {
            var n, t, i, o, l = e.video, s = e.autoplay, a = e.startTime, c = e.endTime, d = e.redirectToMSide,
                m = void 0 === d || d, v = e.isPreview, h = e.recommendData, g = e.isInIframe, p = {
                    page_type: v ? C.GV.Inside : C.GV.Outside,
                    author_id: null == l || null === (n = l.user_info) || void 0 === n ? void 0 : n.user_id,
                    group_id: null == l ? void 0 : l.group_id,
                    group_source: null == l ? void 0 : l.group_source
                };
            !v && document.referrer && (p.parent_referrer = document.referrer, p.parent_referrer_host = null === (i = document.referrer) || void 0 === i || null === (o = i.split("://")[1]) || void 0 === o ? void 0 : o.split("/")[0]);
            var y = (0, N.Z)(), _ = U(l, y.fileDomainList), b = (0, x.useRef)({}), w = (0, x.useRef)(),
                E = (0, x.useRef)(), P = (0, x.useState)(ye.Unstart), I = (0, r.Z)(P, 2), T = I[0], k = I[1],
                F = (0, x.useState)(!1), M = (0, r.Z)(F, 2), R = M[0], X = M[1], D = (0, x.useState)(!1),
                O = (0, r.Z)(D, 2), H = O[0], V = O[1], W = (0, x.useState)(!1), z = (0, r.Z)(W, 2), G = z[0], q = z[1],
                J = (0, x.useState)(!1), Q = (0, r.Z)(J, 2), Y = Q[0], ee = Q[1], ne = (0, x.useRef)(T);
            (0, x.useEffect)((function () {
                ne.current = T
            }), [T]);
            var te = (0, x.useRef)(!0);
            (0, x.useEffect)((function () {
                return te.current = !0, function () {
                    te.current = !1
                }
            })), (0, x.useEffect)((function () {
                setTimeout((function () {
                    X(!0)
                }), 100)
            }), []);
            var ie = Z().any && m, re = l.poster_url, oe = function (e) {
                var n, t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return u()(n = "".concat(e)).call(n, 2, "0") + (t ? ":" : "")
            }, le = function (e) {
                var n, t, i = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), o = Math.floor(e % 60);
                return f()(n = f()(t = "".concat(0 !== i ? oe(i) : "")).call(t, oe(r))).call(n, oe(o, !1))
            }, se = function () {
                switch (ne.current) {
                    case ye.Unstart:
                        S.Z.iframePlayer.videoPlay(p);
                        break;
                    case ye.Pause:
                        S.Z.iframePlayer.videoContinue(p);
                        break;
                    case ye.Ended:
                        S.Z.iframePlayer.videoReplay(p)
                }
                k(ye.Playing), q(!1)
            }, ae = function () {
                te.current && ne.current === ye.Playing && (k(ye.Pause), q(!0), S.Z.iframePlayer.videoPause(p))
            }, ue = function () {
                k(ye.Ended), q(!0)
            }, ce = function () {
                S.Z.iframePlayer.videoOver(p)
            }, fe = function (e, n) {
                S.Z.iframePlayer.playerSetting(pe(pe({}, p), {}, {
                    setting: "video_clarity",
                    definition: e,
                    frames_per_second: n
                }))
            }, de = function (e) {
                S.Z.iframePlayer.playerSetting(pe(pe({}, p), {}, {setting: "video_speed", definition: e}))
            }, me = function (e) {
                S.Z.iframePlayer.playerSetting(pe(pe({}, p), {}, {setting: "volume"}))
            };
            return x.createElement($.Z.Provider, {value: {isInIframe: g}}, x.createElement("div", {
                className: j()({
                    "iframe-player": !0,
                    "iframe-preview": v,
                    iframe: !v,
                    "is-fullscreen": Y,
                    "show-share-cover": H,
                    "play-ended": T === ye.Ended,
                    "iframe-in-mobile": Z().any && !m
                })
            }, ie ? x.createElement("a", {
                className: "poster",
                target: "_blank",
                href: globalThis.getFilterXss().filterUrl("//m.ixigua.com/video/".concat(l.item_id), null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }),
                style: {backgroundImage: "url(".concat(re, ")")}
            }, x.createElement("i", {className: "icon-icon_playing"})) : x.createElement(L.ZP, {
                logo: _,
                preset: "iframe",
                vid: l.vid,
                videoResource: l.videoResource,
                playerId: "iframe-player",
                fluid: !1,
                isLVideo: !1,
                enableGoHome: !0,
                playLoopStatus: "",
                LogInfo_Ref: b,
                endingRender: function () {
                    return null
                },
                setPlayLoopStatus: function () {
                    return null
                },
                ignores: ["extraConfig", "cssfullscreen"],
                fullscreenContainer: "undefined" == typeof window ? void 0 : document.documentElement,
                onPlayerInit: function (n, t) {
                    var i;
                    if (w.current = n, E.current = t, function (e) {
                            we.forEach((function (n) {
                                var t = n.event, i = n.fn;
                                e.off(t, i)
                            })), we = []
                        }(t), null === (i = e.onPlayerInit) || void 0 === i || i.call(e, t), t.once("canplay", (function () {
                            setTimeout((function () {
                                xe(t, "pause", ae), xe(t, "play", se), xe(t, "ended", ue), xe(t, "ended", (function () {
                                    return K(ce, 1e3)
                                })), xe(t, "volumechange", (function () {
                                    return K(me, 300)
                                })), xe(t, "playbackrateChange", (function (e) {
                                    return de(e)
                                })), xe(t, "definitionChangeStart", (function (e) {
                                    fe(e.definition.toUpperCase(), e.fps)
                                }))
                            }), 0)
                        })), t.once("playing", (function () {
                            var e = a || 0;
                            if (0 !== e) {
                                t.currentTime = e;
                                var n = {content: "宸蹭负浣犺烦鍒版寚瀹氬紑濮嬫椂闂� ".concat(le(e)), level: 1};
                                t.emit(A.kI.PUSH, n)
                            }
                        })), c) {
                        var r = !0;
                        t.on("timeupdate", (function e() {
                            if (t.currentTime >= c && r) {
                                r = !1;
                                var n = {content: "鎸囧畾鍐呭鎾斁缁撴潫 ".concat(le(c)), level: 1};
                                t.emit(A.kI.PUSH, n), t.pause(), t.off("timeupdate", e)
                            }
                        }))
                    }
                },
                poster: re,
                onFullscreenModeChange: function (n) {
                    var t;
                    null === (t = e.onFullscreenModeChange) || void 0 === t || t.call(e, n), ee(n), S.Z.iframePlayer.playerSetting(pe(pe({}, p), {}, {
                        setting: "fullscreen",
                        definition: n ? "on" : "off"
                    }))
                },
                onXiguaLogoClick: function () {
                    S.Z.iframePlayer.ixiguaLogoClick(p)
                },
                autoplay: s,
                autoDestroyPlayer: !0,
                isMobile: Z().any
            }), !H && R && x.createElement(he, {
                playState: T,
                videoId: null == l ? void 0 : l.item_id,
                title: null == l ? void 0 : l.title,
                authorInfo: null == l ? void 0 : l.user_info,
                recommendData: h,
                player: E.current,
                showRecommend: G && (null == h ? void 0 : h.length) > 0,
                onShareClick: function () {
                    V(!0);
                    var e = null == E ? void 0 : E.current;
                    e && (null == e || e.pause(), e.config.keyShortcut = "off"), S.Z.iframePlayer.shareButtonClick(p)
                },
                onVideoTitleClick: function () {
                    return S.Z.iframePlayer.videoTitleClick(pe(pe({}, p), {}, {video_title: null == l ? void 0 : l.title}))
                },
                onAuthorAvatarClick: function () {
                    return S.Z.iframePlayer.authorAvatarClick(p)
                },
                onAuthorNameClick: function () {
                    var e;
                    return S.Z.iframePlayer.authorNameClick(pe(pe({}, p), {}, {author_name: null == l || null === (e = l.user_info) || void 0 === e ? void 0 : e.name}))
                },
                onRecommendClose: function () {
                    return q(!1)
                },
                onRecommendItemClick: function () {
                    return S.Z.iframePlayer.recommendCardClick(p)
                },
                onSlideRecommend: function (e) {
                    S.Z.iframePlayer.recommendSideButtonClick(pe(pe({}, p), {}, {setting: "next" === e ? C.s9.Next : C.s9.Prev}))
                }
            }), H && x.createElement(B, {
                shareUrl: f()(t = "".concat(window.location.origin, "/")).call(t, null == l ? void 0 : l.item_id, "?utm_source=iframe_share"),
                onClose: function () {
                    V(!1), (null == E ? void 0 : E.current).config.keyShortcut = "on"
                },
                onCopy: function () {
                    return S.Z.iframePlayer.shareLinkCopy(p)
                }
            })))
        }
    }, 55494: function (e, n, t) {
        var i = t(19623), r = (t(41539), t(74916), t(24603), t(39714), t(90149)), o = t.n(r), l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === t.g ? "undefined" : (0, i.Z)(t.g)) && t.g) || function () {
                return this
            }() || Function("return this")();
        s.globalThis = s, s.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var a = ["https://bytedance.feishu.cn", "https://i.snssdk.com", "https://study.tanshuiyuan.cn", "https://teamunity-boe._____________"];
        n.Z = function (e) {
            return a.some((function (n) {
                return new RegExp("^" + n).test(e)
            }))
        }
    }, 14173: function (e, n, t) {
        e.exports = t.p + "static/media/default.c2cb4d9c.svg"
    }
}]);