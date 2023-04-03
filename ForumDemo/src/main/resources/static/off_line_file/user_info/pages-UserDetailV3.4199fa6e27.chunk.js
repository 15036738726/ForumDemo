(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8738], {
    29254: function (e, t, n) {
        "use strict";
        var i = n(82109), o = n(14230);
        i({target: "String", proto: !0, forced: n(43429)("link")}, {
            link: function (e) {
                return o(this, "a", "href", e)
            }
        })
    }, 56029: function (e, t, n) {
        var i = n(33448);
        e.exports = function (e, t, n) {
            for (var o = -1, r = e.length; ++o < r;) {
                var s = e[o], a = t(s);
                if (null != a && (void 0 === l ? a == a && !i(a) : n(a, l))) var l = a, u = s
            }
            return u
        }
    }, 53325: function (e) {
        e.exports = function (e, t) {
            return e > t
        }
    }, 6162: function (e, t, n) {
        var i = n(56029), o = n(53325), r = n(6557);
        e.exports = function (e) {
            return e && e.length ? i(e, r, o) : void 0
        }
    }, 19076: function (e, t, n) {
        "use strict";
        var i = n(19623), o = (n(29254), n(90149)), r = n.n(o), s = n(20116), a = n.n(s), l = n(78580), u = n.n(l),
            c = n(2991), d = n.n(c), f = n(67294), h = n(67209), _ = n(94184), m = n.n(_), v = function (e) {
                return e && e.Math == Math && e
            },
            p = v("object" == (void 0 === r() ? "undefined" : (0, i.Z)(r())) && r()) || v("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || v("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || v("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        p.globalThis = p, p.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        t.Z = function (e) {
            var t = e.className, n = void 0 === t ? "" : t, i = e.links, o = void 0 === i ? [] : i;
            (0, f.useEffect)((function () {
                var e = o.length;
                if (e) {
                    var t, n = a()(o).call(o, (function (e) {
                        var t, n;
                        return u()(t = e.link).call(t, "www.ixigua.com") || u()(n = e.link).call(n, "m.ixigua.com")
                    })).length;
                    window.Tea("seo_link_show", {
                        isSpider: (0, h.E)(null === (t = window) || void 0 === t ? void 0 : t.navigator.userAgent).result,
                        total_num: e,
                        xigua_link_num: n,
                        other_link_num: e - n
                    })
                }
            }), [o]);
            return null != o && o.length ? f.createElement("div", {className: m()("seo-links", n)}, f.createElement("span", null, "鐑棬锛�"), d()(o).call(o, (function (e) {
                return f.createElement("a", {
                    key: e.text,
                    className: "seo-links__link-item",
                    href: globalThis.getFilterXss().filterUrl(e.link, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }),
                    title: e.text,
                    target: "_blank",
                    onClick: function () {
                        return function (e) {
                            var t;
                            window.Tea("seo_link_click", {
                                isSpider: (0, h.E)(null === (t = window) || void 0 === t ? void 0 : t.navigator.userAgent).result,
                                click_text: e.text,
                                click_link: e.link
                            })
                        }(e)
                    }
                }, e.text)
            }))) : f.createElement(f.Fragment, null)
        }
    }, 30447: function (e, t, n) {
        "use strict";
        var i = n(59056), o = n(19623), r = n(90149), s = n.n(r), a = n(25843), l = n.n(a), u = n(67294), c = n(94184),
            d = n.n(c), f = n(96453), h = function (e) {
                return e && e.Math == Math && e
            },
            _ = h("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || h("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || h("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || h("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        _.globalThis = _, _.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        t.Z = function (e) {
            var t = (0, u.useState)(e.keyword), n = (0, i.Z)(t, 2), o = n[0], r = n[1], s = (0, u.useState)(!1),
                a = (0, i.Z)(s, 2), c = a[0], h = a[1], _ = (0, u.useState)(!1), m = (0, i.Z)(_, 2), v = m[0], p = m[1],
                g = (0, u.useRef)(null), b = function () {
                    var t;
                    o && (null === (t = g.current) || void 0 === t || t.blur(), "function" == typeof e.onSearch && e.onSearch(l()(o).call(o)))
                }, w = d()("bu-search-input", e.className, {focused: c, expanded: v});
            return (0, u.useEffect)((function () {
                var e = function (e) {
                    v && "" === o && p(!1)
                };
                return document.addEventListener("click", e, !0), function () {
                    document.removeEventListener("click", e, !0)
                }
            }), [v, o]), (0, u.useEffect)((function () {
                r(e.keyword)
            }), [e.keyword]), u.createElement("div", {
                className: w, onClick: function (e) {
                    var t;
                    (e.stopPropagation(), v) || (p(!0), null === (t = g.current) || void 0 === t || t.focus())
                }, style: {cursor: v ? "" : "pointer"}
            }, u.createElement(f.olm, {
                width: "20", height: "20", onClick: function (e) {
                    var t;
                    (e.stopPropagation(), v) ? b() : (p(!0), null === (t = g.current) || void 0 === t || t.focus())
                }
            }), u.createElement("input", {
                ref: g,
                style: {width: v ? 88 : 28},
                type: "text",
                placeholder: e.placeholder,
                value: o,
                onChange: function (e) {
                    r(e.target.value)
                },
                onKeyUp: function (e) {
                    13 === e.keyCode && b()
                },
                onFocus: function () {
                    h(!0)
                },
                onBlur: function () {
                    h(!1)
                }
            }))
        }
    }, 30780: function (e, t, n) {
        "use strict";
        var i = n(59056), o = n(19623), r = (n(41539), n(54747), n(90149)), s = n.n(r), a = n(22533), l = n(67294),
            u = n(40030), c = function (e) {
                return e && e.Math == Math && e
            },
            d = c("object" == (void 0 === s() ? "undefined" : (0, o.Z)(s())) && s()) || c("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || c("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || c("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        d.globalThis = d, d.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        t.Z = function (e) {
            var t = e.top, n = e.innerZ, o = void 0 === n ? 999 : n, r = e.onStateChange, s = e.children,
                c = (0, l.useState)(!1), d = (0, i.Z)(c, 2), f = d[0], h = d[1], _ = (0, l.useState)(0),
                m = (0, i.Z)(_, 2), v = m[0], p = m[1], g = (0, l.useState)(0), b = (0, i.Z)(g, 2), w = b[0], E = b[1],
                y = (0, l.useState)(0), S = (0, i.Z)(y, 2), x = S[0], T = S[1], A = (0, l.useRef)(null),
                L = (0, l.useRef)(null), Z = (0, l.useRef)(!0), N = (0, l.useCallback)((function () {
                    requestAnimationFrame((function () {
                        if (Z.current) {
                            var e, n = null === (e = A.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                                i = (null == n ? void 0 : n.y) || (null == n ? void 0 : n.top) || 0;
                            Math.floor(i) <= t ? h(!0) : h(!1), N()
                        }
                    }))
                }), [t]), j = (0, l.useCallback)((function () {
                    Z.current = !0, N()
                }), [N]), P = (0, l.useCallback)((function (e, t) {
                    t.scroll.top < x && h(!1)
                }), [x]), I = function (e) {
                    Z.current = !1
                };
            (0, l.useEffect)((function () {
                var e = [(0, u.Ld)("scrollStart", j), (0, u.Ld)("scroll", P, {enableScrollInfo: !0}), (0, u.Ld)("scrollEnd", I)];
                return function () {
                    e.forEach((function (e) {
                        e.unsubscribe()
                    }))
                }
            }), [P, j]), (0, l.useEffect)((function () {
                null == r || r(f)
            }), [f, r]);
            var k = function () {
                var e, t = null === (e = A.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                return [(null == t ? void 0 : t.width) || 0, (null == t ? void 0 : t.height) || 0, (null == t ? void 0 : t.y) || (null == t ? void 0 : t.top) || 0]
            };
            return (0, l.useEffect)((function () {
                var e = k(), t = (0, i.Z)(e, 3), n = t[0], o = t[1], r = t[2];
                p(n), E(o), T(r)
            }), []), (0, a.Z)((function () {
                var e, t, n = k(), o = (0, i.Z)(n, 3), r = o[0], s = o[1], a = o[2];
                p(r), E(s), T(a), p((null === (e = L.current) || void 0 === e || null === (t = e.getBoundingClientRect()) || void 0 === t ? void 0 : t.width) || r)
            }), 200), l.createElement(l.Fragment, null, l.createElement("div", {
                ref: A,
                className: "sticky__wrapper",
                style: f ? {
                    position: "fixed",
                    transform: "translate3d(0px, ".concat(t, "px, 0px)"),
                    zIndex: o,
                    width: v,
                    top: 0
                } : {}
            }, s), l.createElement("div", {
                ref: L,
                className: "sticky__wrapper",
                style: {display: f ? "block" : "none", height: w}
            }))
        }
    }, 60849: function (e, t, n) {
        "use strict";
        n.d(t, {
            Z: function () {
                return c
            }
        });
        var i = n(19623), o = n(90149), r = n.n(o), s = n(67294), a = n(96453), l = function (e) {
                return e && e.Math == Math && e
            },
            u = l("object" == (void 0 === r() ? "undefined" : (0, i.Z)(r())) && r()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function c(e) {
            var t = e.keyword, n = e.text;
            return s.createElement("div", {className: "Search-no-result"}, s.createElement(a.HYy, {
                width: "88",
                height: "88"
            }), s.createElement("p", {className: "Search-no-result__desc"}, "鎶辨瓑锛屾病鏈夋壘鍒颁笌鈥�", s.createElement("i", null, t), "鈥濈浉鍏崇殑", n || "鍐呭"), s.createElement("p", {className: "Search-no-result__tips"}, "璇锋鏌ユ偍鐨勮緭鍏ユ槸鍚︽纭紝鎴栫缉鐭€佹洿鎹㈠叧閿瘝"))
        }

        u.globalThis = u, u.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }
    }, 27880: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            default: function () {
                return Ai
            }
        });
        var i = n(33938), o = n(59056), r = n(19623), s = n(63109), a = n.n(s),
            l = (n(68309), n(9653), n(82526), n(41817), n(41539), n(39714), n(74916), n(4723), n(64765), n(66992), n(88674), n(78783), n(33948), n(90149)),
            u = n.n(l), c = n(77766), d = n.n(c), f = n(93476), h = n.n(f), _ = n(2991), m = n.n(_), v = n(67294),
            p = n(15482), g = n(25047), b = n(75843), w = n(20116), E = n.n(w), y = n(10908), S = function (e) {
                return e && e.Math == Math && e
            },
            x = S("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || S("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || S("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || S("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        x.globalThis = x, x.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var T = "userDetailV3", A = n(51615), L = function (e) {
                return e && e.Math == Math && e
            },
            Z = L("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || L("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || L("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || L("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Z.globalThis = Z, Z.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var N = {
                home: "pgc_home",
                video: "pgc_video",
                lvideo: "pgc_long",
                pseries: "pgc_album",
                series: "pgc_broadcast",
                hotsoon: "pgc_hotsoon",
                follow: "pgc_follow",
                fans: "pgc_fans"
            }, j = (0, b.bZ)([b.VD.AuthorTabsCount, b.VD.AuthorTabsShow])((function (e) {
                var t, n, i = e.AuthorTabsCount, o = (e.isUserAuthor, e.AuthorTabsShow), r = e.isSticky,
                    s = (i.pSeriesCnt, i.seriesCnt), a = (i.shortVideoCnt, i.videoCnt, i.lVideoCnt), l = o.pSeriesShow,
                    u = o.seriesShow, c = o.shortVideoShow, f = (o.videoShow, (0, A.UO)()), h = f.tab,
                    _ = (f.to_user_id, 0 !== s), m = h || "video";
                return v.createElement("div", {className: d()(t = "".concat(T, "__discovery ")).call(t, r ? "is_sticky" : "")}, v.createElement(y.Z, {
                    config: E()(n = [{
                        name: "瑙嗛",
                        key: "video"
                    }, l ? {name: "鍚堥泦", key: "pseries"} : null, u && _ ? {
                        name: "鎾崟",
                        key: "series"
                    } : null, c ? {name: "灏忚棰�", key: "hotsoon"} : null, a ? {
                        name: "鏀炬槧鍘�",
                        key: "lvideo"
                    } : null]).call(n, (function (e) {
                        return Boolean(e)
                    })), activeKey: m, onChange: e.changeTab, height: 3
                }))
            })), P = n(3649), I = n.n(P), k = n(80129), O = n.n(k), U = n(94184), D = n.n(U), F = (n(54747), n(86902)),
            V = n.n(F), M = n(14310), C = n.n(M), R = n(34074), H = n.n(R), X = n(39649), B = n.n(X), K = n(73126),
            q = n(44845), G = n(59340), W = n.n(G), z = (n(17727), n(66419)), Y = n.n(z), J = n(72169), Q = n(74391),
            $ = n(65050), ee = n(79112), te = n(63050), ne = n(14801), ie = function (e) {
                return e && e.Math == Math && e
            },
            oe = ie("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || ie("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || ie("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || ie("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        oe.globalThis = oe, oe.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var re = "userDetailV3__noResults", se = function (e) {
                var t = e.desc, n = e.imgUrl, i = void 0 === n ? te : n;
                return v.createElement("div", {className: re}, v.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(i, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), alt: "鎼滅储鏃犵粨鏋�"
                }), v.createElement("p", {className: "".concat(re, "__tips")}, t))
            }, ae = function (e) {
                var t = e.desc;
                return v.createElement(se, {imgUrl: te, desc: t})
            }, le = function (e) {
                var t = e.type, n = e.isUserAuthor ? "浣�" : "TA";
                return v.createElement(se, {
                    imgUrl: ne,
                    desc: "".concat(n, "fans" === t ? "杩樻病鏈変换浣曠矇涓濆櫌锝�" : "杩樻病鏈夊叧娉ㄤ换浣曚汉鍣綖")
                })
            }, ue = n(30829), ce = n(48050), de = n(92744), fe = n(44999), he = n(25392), _e = function (e) {
                return e && e.Math == Math && e
            },
            me = _e("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || _e("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || _e("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || _e("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function ve(e) {
            return "string" == typeof e ? e : e ? (0, de.wl)(e) : void 0
        }

        me.globalThis = me, me.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var pe = function (e) {
                var t, n, i = e.authorName, o = e.video_watch_count, r = e.publish_time, s = e.limit,
                    a = void 0 === s ? 3 : s, l = I()(t = E()(n = [i, ve(r)]).call(n, Boolean)).call(t, 0, a);
                return v.createElement(he.Z, {video_watch_count: o, pieces: l})
            }, ge = n(96453), be = function (e) {
                return e && e.Math == Math && e
            },
            we = be("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || be("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || be("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || be("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        we.globalThis = we, we.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ee = function (e) {
                var t = e.hideType;
                return 1 === t ? v.createElement("div", {className: "hidetype__tag"}, v.createElement(ge.nl, {
                    width: "12",
                    height: "12"
                }), v.createElement("span", null, "浠呮垜鍙")) : 2 === t ? v.createElement("div", {className: "hidetype__tag"}, v.createElement(ge.PCc, {
                    width: "12",
                    height: "12"
                }), v.createElement("span", null, "绮変笣鍙")) : null
            }, ye = n(51942), Se = n.n(ye), xe = n(39081), Te = n(91481), Ae = function (e) {
                return e && e.Math == Math && e
            },
            Le = Ae("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Ae("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ae("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ae("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function Ze(e, t, n, i) {
            return W()(Se()({is_following: n ? "1" : "0"}, e, {
                category_name: t ? "profile" : "pgc",
                recommend_type: i || ""
            }))
        }

        function Ne(e, t, n, i) {
            return W()(Se()({}, e, {
                category_name: t ? "profile" : "pgc",
                recommend_type: i || "",
                list_name: N[n || "home"],
                enter_from: "click_pgc",
                impr_type: "__pgc__"
            }))
        }

        function je(e) {
            var t = e.log_pb, n = e.isAuthor, i = e.inx, o = e.type, r = e.isFollow;
            xe.Z.common.videoShow({log_pb: Ze(t, n, r, o), rank_in_block: i + 1, category_name: n ? "profile" : "pgc"})
        }

        function Pe(e) {
            var t = e.has_more, n = e.count, i = e.data;
            return {
                has_more: t, offset: n, data: Array.isArray(i) ? m()(i).call(i, (function (e) {
                    var t = e.display;
                    return {
                        groupId: t.group_id,
                        title: t.title,
                        coverUrl: t.video_detail_info.detail_video_large_image.url,
                        playNum: t.video_detail_info.video_watch_count,
                        publishTime: t.publish_time,
                        duration: t.video_duration,
                        logPb: t.log_pb,
                        preview_url: (0, Te.Ph)(t.preview_url)
                    }
                })) : []
            }
        }

        Le.globalThis = Le, Le.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ie = function (e) {
                return e && e.Math == Math && e
            },
            ke = Ie("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Ie("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ie("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ie("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ke.globalThis = ke, ke.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Oe = function (e, t) {
            return t = t || "recent", "video" === e && "recent" === t ? "new" : "video" === e && "played" === t ? "hot" : "pgc"
        }, Ue = v.memo((function (e) {
            var t = e.type, n = e.videos, i = e.activeKey, o = e.isUserAuthor, r = e.subtype, s = e.keyword,
                a = e.authorId, l = (e.filterTS, e.onIsCollectedChanged);
            if (!t) return null;
            var u = n, c = null;
            return "video" === t ? c = m()(u).call(u, (function (e, n) {
                var u, c, d, f, h = e.groupId, _ = e.title, m = e.coverUrl, p = e.playNum, g = e.publishTime,
                    b = e.duration, w = e.logPb, E = e.preview_url, y = e.isTop,
                    S = (e.rank, e.offset, e.videoUserLike), x = e.userInfo, T = e.hideType,
                    A = e.co_creators_video_info, L = e.isVr;
                return v.createElement(ue.Z, {
                    inView: function () {
                        je({
                            log_pb: JSON.parse((0, de.ST)(w, "impr_type", "__pgc__")),
                            isAuthor: o,
                            inx: n,
                            type: y ? "top" : Oe(t, r)
                        })
                    },
                    anchorProps: (0, fe.ZF)({gid: h, query: {logPb: Ne(w, o, i, y ? "top" : Oe(t, r))}}),
                    key: h,
                    title: _,
                    titleNode: s ? (0, Te.LA)(s, _) : _,
                    tagMark: y ? "stick" : void 0,
                    RBTag: b ? (0, de.LU)(b) : void 0,
                    coverURL: m,
                    bottomInfo: v.createElement(pe, {video_watch_count: p, publish_time: g}),
                    isCoCreate: null == A ? void 0 : A.is_co_creators_video,
                    videoURL: (0, Te.Ph)(E),
                    gid: h,
                    authorInfo: {
                        name: null !== (u = null == x ? void 0 : x.name) && void 0 !== u ? u : "",
                        avatar_url: null !== (c = null == x ? void 0 : x.avatar_url) && void 0 !== c ? c : "",
                        user_id: null !== (d = null == x ? void 0 : x.user_id) && void 0 !== d ? d : a,
                        user_auth_info: null !== (f = null == x ? void 0 : x.user_auth_info) && void 0 !== f ? f : "{}"
                    },
                    disableDefaultAuthorInfo: !0,
                    authorUserId: a,
                    defaultIsCollected: null != S ? !!S : void 0,
                    onIsCollectedChanged: function (e) {
                        return l(h, e)
                    },
                    coverExtra: v.createElement(Ee, {hideType: T}),
                    isVr: L
                })
            })) : "hotsoon" === t && (c = m()(u).call(u, (function (e, t) {
                var n = e.groupId, r = e.title, s = e.coverUrl, l = e.playNum, u = e.publishTime, c = e.logPb;
                return v.createElement(ce.Z, {
                    inView: function () {
                        je({
                            log_pb: JSON.parse((0, de.ST)(c, "impr_type", "__pgc__")),
                            isAuthor: o,
                            inx: t,
                            type: "pgc"
                        })
                    },
                    anchorProps: (0, fe.ZF)({gid: n, query: {logPb: Ne(c, o, i, "pgc")}}),
                    key: n,
                    title: r,
                    coverURL: s,
                    subTitle: v.createElement(pe, {video_watch_count: l, publish_time: u}),
                    userInfo: {userId: a}
                })
            }))), v.createElement(v.Fragment, null, c)
        }));

        function De(e, t) {
            var n = V()(e);
            if (C()) {
                var i = C()(e);
                t && (i = E()(i).call(i, (function (t) {
                    return H()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Fe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? De(Object(n), !0).forEach((function (t) {
                    (0, q.Z)(e, t, n[t])
                })) : B() ? Object.defineProperties(e, B()(n)) : De(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, H()(n, t))
                }))
            }
            return e
        }

        var Ve = function (e) {
                return e && e.Math == Math && e
            },
            Me = Ve("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Ve("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ve("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ve("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var Ce = (0, A.EN)((0, b.bZ)([b.VD.AuthorVideoList, b.VD.AuthorPlayedVideoList, b.VD.AuthorHotsoonList, b.VD.AuthorPlayedHotsoonList], {
                updateAuthorVideoList: "UPDATE_AUTHOR_VIDEO_LIST",
                appendAuthorVideoList: "APPEND_AUTHOR_VIDEO_LIST",
                appendAuthorHotsoonList: "APPEND_AUTHOR_HOTSOON_LIST",
                updateAuthorPlayedVideoList: "UPDATE_AUTHOR_PLAYED_VIDEO_LIST",
                appendAuthorPlayedVideoList: "APPEND_AUTHOR_PLAYED_VIDEO_LIST",
                appendAuthorPlayedHotsoonList: "APPEND_AUTHOR_PLAYED_HOTSOON_LIST"
            })((function (e) {
                var t = e.isUserAuthor, n = e.AuthorVideoList, i = e.AuthorHotsoonList, r = e.AuthorPlayedVideoList,
                    s = e.updateAuthorVideoList, a = e.appendAuthorVideoList, l = e.appendAuthorHotsoonList,
                    u = e.appendAuthorPlayedVideoList, c = e.updateAuthorPlayedVideoList, d = e.activeKey, f = e.subtype,
                    h = e.match, _ = e.noMore, p = e.filterTS,
                    g = (0, v.useState)({videoRecent: !1, videoPlayed: !1, hotsoon: !1}), b = (0, o.Z)(g, 2), w = b[0],
                    E = b[1], y = h.params.to_user_id, S = d, x = "video" === S ? "played" === f ? r : n : i;
                _ && (x.hasMore = !1);
                var T = x.hasMore && 0 === x.videoList.length, A = function (e, t, n) {
                    t = t || "recent", "video" === e && "recent" === t ? E(Fe(Fe({}, w), {}, {videoRecent: n})) : "video" === e && "played" === t ? E(Fe(Fe({}, w), {}, {videoPlayed: n})) : "hotsoon" === e && E(Fe(Fe({}, w), {}, {hotsoon: n}))
                }, L = function (e, t) {
                    return t = t || "recent", "video" === e && "recent" === t ? w.videoRecent : "video" === e && "played" === t ? w.videoPlayed : "hotsoon" === e && w.hotsoon
                }, Z = function () {
                    if (!L(S, f)) if (A(S, f, !0), "hotsoon" === d) J.Z.video.getHotsoonVideoList({
                        to_user_id: y,
                        max_behot_time: x.maxTime || 0
                    }).then((function (e) {
                        if (200 === e.status) {
                            var t, n = (null === (t = e.data) || void 0 === t ? void 0 : t.data) || {}, i = n.has_more,
                                o = void 0 !== i && i, r = n.data;
                            l({data: void 0 === r ? [] : r, has_more: o})
                        }
                    })).finally((function () {
                        A(S, f, !1)
                    })); else if ("played" === f) {
                        var e;
                        J.Z.video.getAuthorVideoList({
                            to_user_id: y,
                            offset: x.offset,
                            limit: 30,
                            maxBehotTime: null === (e = x.videoList[x.videoList.length - 1]) || void 0 === e ? void 0 : e.publishTime,
                            order: "hot"
                        }).then((function (e) {
                            var t = e.data;
                            if (200 === t.code && t.data) {
                                var n, i = (null === (n = t.data) || void 0 === n ? void 0 : n.videoList) || [];
                                u({data: i, expectedVideos: 30, has_more: i.length, offset: 30 + ~~x.offset})
                            }
                        })).catch((function (e) {
                            console.log(e)
                        })).finally((function () {
                            A(S, f, !1)
                        }))
                    } else {
                        var t;
                        J.Z.video.getAuthorVideoList({
                            to_user_id: y,
                            offset: x.offset,
                            limit: 30,
                            maxBehotTime: null === (t = x.videoList[x.videoList.length - 1]) || void 0 === t ? void 0 : t.publishTime,
                            order: "new"
                        }).then((function (e) {
                            var t = e.data;
                            if (200 === t.code && t.data) {
                                var n, i = (null === (n = t.data) || void 0 === n ? void 0 : n.videoList) || [];
                                a({data: i, has_more: i.length, offset: 30 + ~~x.offset})
                            }
                        })).catch((function (e) {
                            console.log(e)
                        })).finally((function () {
                            A(S, f, !1)
                        }))
                    }
                }, N = (0, Q.M)({loading: L(S, f), hasNextPage: x.hasMore, onLoadMore: Z}).ref;
                (0, v.useEffect)((function () {
                    x.hasMore && 0 === x.videoList.length && Z()
                }), [x]);
                if (T) return v.createElement(ee.yg, null);
                var j = t ? "浣�" : "TA", P = x.videoList;
                return 0 === P.length ? "video" === S ? v.createElement(ae, {desc: "".concat(j, "杩樻病鏈夊彂甯冭繃浠讳綍瑙嗛")}) : v.createElement(ae, {desc: "".concat(j, "杩樻病鏈夊彂甯冭繃浠讳綍灏忚棰�")}) : v.createElement("div", {ref: N}, v.createElement("div", {className: "".concat("userDetailV3__main", "__list")}, v.createElement(Ue, {
                    videos: P,
                    type: S,
                    isUserAuthor: t,
                    activeKey: d,
                    subtype: f,
                    authorId: y,
                    filterTS: p,
                    onIsCollectedChanged: function (e, t) {
                        var n, i = m()(n = x.videoList).call(n, (function (n) {
                            return n.groupId === e ? Fe(Fe({}, n), {}, {videoUserLike: t ? 1 : 0}) : n
                        }));
                        "video" === S && ("played" === f ? c({data: i, has_more: x.hasMore, offset: x.offset}) : s({
                            data: i,
                            has_more: x.hasMore,
                            offset: x.offset
                        }))
                    }
                }), Y()({length: 5}, (function (e, t) {
                    return v.createElement("div", {className: D()("empty_placeholder", S), key: t})
                }))), v.createElement($.Z, {
                    text: {more: x.hasMore ? "鍔犺浇鏇村瑙嗛..." : "", end: "宸茬粡鍒板簳閮紝娌℃湁鏇村鍐呭浜�"},
                    hasMore: x.hasMore
                }))
            }))), Re = n(94473), He = n.n(Re), Xe = function (e) {
                return e && e.Math == Math && e
            },
            Be = Xe("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Xe("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Xe("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Xe("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Be.globalThis = Be, Be.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ke = function (e) {
                var t = e.types, n = e.activeKey, i = e.onChange, r = He()(t).call(t, (function (e) {
                    return e.key === n
                }));
                if (!r) return null;
                return v.createElement("div", {
                    className: "userDetailV3__filterBtns color-content-primary",
                    onClick: function () {
                        var e = E()(t).call(t, (function (e) {
                            return e.key !== n
                        })), r = (0, o.Z)(e, 1)[0];
                        i(r.key)
                    }
                }, v.createElement(ge.PEF, {width: "20", height: "20"}), v.createElement("span", null, r.title))
            }, qe = n(32789), Ge = n(30447), We = n(52e3), ze = n(60849), Ye = function (e) {
                return e && e.Math == Math && e
            },
            Je = Ye("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Ye("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ye("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ye("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Je.globalThis = Je, Je.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Qe = (0, A.EN)((0, b.bZ)([b.VD.AuthorVideoSearchList], {
                appendAuthorVideoSearchList: "APPEND_AUTHOR_VIDEO_SEARCH_LIST",
                setAuthorVideoSearchList: "SET_AUTHOR_VIDEO_SEARCH_LIST"
            })((function (e) {
                var t = e.keyword, n = e.authorId, r = e.isUserAuthor, s = e.activeKey, l = e.AuthorVideoSearchList,
                    u = e.appendAuthorVideoSearchList, c = e.setAuthorVideoSearchList, d = (0, v.useRef)(!1),
                    f = (0, v.useState)(!1), h = (0, o.Z)(f, 2), _ = h[0], m = h[1], p = (0, v.useRef)(!1),
                    g = (0, v.useState)(l.videoList.length > 0 || !l.hasMore), b = (0, o.Z)(g, 2), w = b[0], E = b[1],
                    y = (0, v.useRef)(0), S = function () {
                        var e = (0, i.Z)(a().mark((function e(t, n, i) {
                            var o;
                            return a().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, We.Z.searchAuthorVideos({
                                            keyword: n,
                                            authorId: t,
                                            count: 10,
                                            offset: i
                                        });
                                    case 2:
                                        return o = e.sent, e.abrupt("return", Pe(o.data.data));
                                    case 4:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t, n, i) {
                            return e.apply(this, arguments)
                        }
                    }(), x = function () {
                        var e = (0, i.Z)(a().mark((function e() {
                            var i, o, c, d, f;
                            return a().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return i = ++y.current, E(!0), m(!0), p.current = !0, e.next = 8, S(n, t, l.offset);
                                    case 8:
                                        if (o = e.sent, !(i < y.current)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 11:
                                        c = o.has_more, d = o.data, f = o.offset, l.videoList.length || qe.Z.pgcSearchResult({
                                            result: d.length ? "success" : "fail",
                                            category_name: r ? "profile" : "pgc",
                                            list_name: N[s],
                                            search_keyword: t
                                        }), m(!1), p.current = !1, u({data: d, offset: l.offset + f, has_more: c});
                                    case 16:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(), T = function () {
                        var e = l.hasMore, t = document.scrollingElement || document.documentElement || document.body,
                            n = t.scrollTop, i = t.clientHeight;
                        t.scrollHeight - i - n < 300 && !p.current && e && x()
                    };
                if ((0, v.useEffect)((function () {
                        return window.addEventListener("scroll", T, !1), function () {
                            window.removeEventListener("scroll", T, !1)
                        }
                    }), [T]), (0, v.useEffect)((function () {
                        d.current && (m(!1), p.current = !1, E(!1), c({data: [], offset: 0, has_more: !0})), d.current = !0
                    }), [t]), (0, v.useEffect)((function () {
                        return w || x(), function () {
                            c({data: [], offset: 0, has_more: !0})
                        }
                    }), [w]), !w || _ && !l.videoList.length && l.hasMore) return v.createElement(ee.yg, null);
                if (0 === l.videoList.length) return v.createElement(ze.Z, {keyword: t});
                var A = "video";
                return v.createElement("div", null, v.createElement("div", {className: "".concat("userDetailV3__main", "__list")}, v.createElement(Ue, {
                    videos: l.videoList,
                    type: A,
                    isUserAuthor: r,
                    activeKey: s,
                    subtype: "search",
                    keyword: t,
                    authorId: n
                }), Y()({length: 5}, (function (e, t) {
                    return v.createElement("div", {className: D()("empty_placeholder", A), key: t})
                }))), v.createElement($.Z, {
                    text: {
                        more: l.hasMore ? "鍔犺浇鏇村瑙嗛..." : "宸茬粡鍒板簳閮紝娌℃湁鏇村鍐呭浜�",
                        end: "宸茬粡鍒板簳閮紝娌℃湁鏇村鍐呭浜�"
                    }, hasMore: l.hasMore
                }))
            }))), $e = n(91899), et = n(64595), tt = function (e) {
                return e && e.Math == Math && e
            },
            nt = tt("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || tt("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || tt("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || tt("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var it = v.createContext({
            authorInfo: {
                user_id: 0,
                name: "",
                introduce: "string",
                avatar: "string",
                user_auth_info: "string"
            }, enableTabs: [], changeTab: function () {
            }, setAuthorInfo: function () {
            }
        }), ot = function () {
            return (0, v.useContext)(it)
        }, rt = it, st = n(65596);

        function at(e, t) {
            var n = V()(e);
            if (C()) {
                var i = C()(e);
                t && (i = E()(i).call(i, (function (t) {
                    return H()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function lt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? at(Object(n), !0).forEach((function (t) {
                    (0, q.Z)(e, t, n[t])
                })) : B() ? Object.defineProperties(e, B()(n)) : at(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, H()(n, t))
                }))
            }
            return e
        }

        var ut = function (e) {
                return e && e.Math == Math && e
            },
            ct = ut("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || ut("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || ut("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || ut("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ct.globalThis = ct, ct.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var dt = "userDetailV3__filters",
            ft = (0, A.EN)((0, b.bZ)([b.VD.AuthorVideoList, b.VD.AuthorPlayedVideoList])((function (e) {
                var t = e.activeKey, n = e.subtype, i = e.changeTab, o = e.isUserAuthor, r = e.videoCnt, s = e.keyword,
                    a = e.authorId, l = e.AuthorPlayedVideoList, u = e.AuthorVideoList, c = e.filterTS, d = (0, $e.Z)(),
                    f = ot().authorInfo, h = function (e) {
                        var t = {};
                        return E()(e).call(e, (function (e) {
                            var n = t[e.groupId];
                            return n || (t[e.groupId] = !0), !n
                        }))
                    }(("played" === n ? l : u).videoList), _ = h[0] || {}, m = lt(lt({}, (0, fe.ZF)({
                        gid: _.groupId,
                        query: {
                            logPb: W()(lt(lt({}, JSON.parse(Ne(_.logPb, o, t, "playlist"))), {}, {
                                sourcepage: "userdetail",
                                list_entrance: "userdetail",
                                recommend_type: "playlist",
                                page_type: "userdetail",
                                impr_type: "__pgc__",
                                category_name: "pgc"
                            }))
                        }
                    })), {}, {
                        href: globalThis.getFilterXss().filterUrl((0, de.S4)({
                            authorId: a,
                            order: "played" === n ? "hot" : void 0,
                            filterTS: c
                        }), null, {logType: "js.href/src", reportOnly: "all"})
                    });
                return v.createElement("div", null, Boolean(r) && v.createElement("div", {className: "".concat(dt)}, s ? v.createElement("div", {className: "".concat(dt, "_all_videos")}, v.createElement("span", {
                    onClick: function () {
                        i(encodeURIComponent("video"))
                    }
                }, "杩斿洖鍏ㄩ儴"), v.createElement("span", {className: "icon-arrow"}), v.createElement("span", null, "鎼滅储鈥�"), v.createElement("span", {className: "".concat(dt, "_keyword")}, s), v.createElement("span", null, "鈥�")) : v.createElement(st.M, (0, K.Z)({}, m, {
                    className: "".concat(dt, "_playlist color-content-primary"),
                    title: "鎾斁鍏ㄩ儴",
                    target: "_blank",
                    onClick: function () {
                        et.Z.allplayBtnClick({
                            play_order: "played" === n ? "hot" : "new",
                            author_id: a,
                            is_following: f.follow ? 1 : 0
                        })
                    },
                    rel: "nofollow"
                }), v.createElement(ge.lfS, {
                    width: "22",
                    height: "22"
                }), v.createElement("span", null, "鎾斁鍏ㄩ儴")), v.createElement("div", {className: "".concat(dt, "_fill")}), v.createElement(Ke, {
                    types: [{
                        key: "recent",
                        title: "鏈€鏂板彂甯�"
                    }, {key: "played", title: "鏈€澶氭挱鏀�"}], activeKey: n || "recent", onChange: function (e) {
                        qe.Z.videoOrder({list_name: N[t], order: "recent" === e ? "new" : "hot"}), i(t, {
                            subtype: e,
                            notea: !0
                        })
                    }
                }), v.createElement(Ge.Z, {
                    keyword: s,
                    placeholder: "鎼滅储".concat(o ? "鎴�" : "TA", "鐨勮棰�"),
                    onSearch: function (e) {
                        qe.Z.localSearchClick({
                            list_name: N[t],
                            category_name: o ? "profile" : "pgc"
                        }), i(encodeURIComponent("video"), {keyword: e})
                    }
                })), s ? v.createElement(Qe, {
                    keyword: s,
                    authorId: a,
                    isUserAuthor: o,
                    activeKey: t,
                    cdnConfig: d
                }) : v.createElement(Ce, {
                    isUserAuthor: o,
                    key: t,
                    activeKey: t,
                    subtype: n,
                    changeTab: i,
                    noMore: void 0 !== r && !Boolean(r),
                    filterTS: c,
                    videoCnt: r
                }))
            }))), ht = n(68956);

        function _t(e, t) {
            var n = V()(e);
            if (C()) {
                var i = C()(e);
                t && (i = E()(i).call(i, (function (t) {
                    return H()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function mt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _t(Object(n), !0).forEach((function (t) {
                    (0, q.Z)(e, t, n[t])
                })) : B() ? Object.defineProperties(e, B()(n)) : _t(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, H()(n, t))
                }))
            }
            return e
        }

        var vt = function (e) {
                return e && e.Math == Math && e
            },
            pt = vt("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || vt("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || vt("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || vt("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        pt.globalThis = pt, pt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var gt = (0, A.EN)((0, b.bZ)([b.VD.AuthorLVideoList], {
                setAuthorLVideoList: "SET_AUTHOR_LVIDEO_LIST",
                appendAuthorLVideoList: "APPEND_AUTHOR_LVIDEO_LIST"
            })((function (e) {
                var t = e.activeKey, n = e.isUserAuthor, i = e.AuthorLVideoList, r = e.appendAuthorLVideoList,
                    s = e.setAuthorLVideoList, a = e.match, l = (0, v.useState)(!1), u = (0, o.Z)(l, 2), c = u[0], d = u[1],
                    f = a.params.to_user_id, h = i.hasMore && 0 === i.videoList.length, _ = function () {
                        d(!0), J.Z.video.getAuthorLVideoList({
                            author_id: f,
                            type: "lvideo",
                            offset: i.offset
                        }).then((function (e) {
                            var t = e.data;
                            200 === t.code && t.data && r(t.data)
                        })).finally((function () {
                            d(!1)
                        }))
                    }, p = (0, Q.M)({loading: c, hasNextPage: i.hasMore, onLoadMore: _}).ref;
                (0, v.useEffect)((function () {
                    i.hasMore && 0 === i.videoList.length && _()
                }), []);
                var g;
                return h ? v.createElement(ee.yg, null) : v.createElement("div", {ref: p}, v.createElement("div", {className: "".concat("userDetailV3__lvideo", "__list")}, (g = i.videoList, m()(g).call(g, (function (e, o) {
                    var r = e.ratingScore ? e.ratingScore / 10 : void 0, a = JSON.parse(e.logPb);
                    return v.createElement(ce.Z, {
                        key: e.albumId,
                        anchorProps: (0, fe.sb)({albumId: e.albumId, query: {logPb: Ne(a, n, t)}}),
                        inView: function () {
                            je({
                                log_pb: JSON.parse((0, de.ST)(a, ["impr_type", "recommend_type"], ["__pgc__", "pgc"])),
                                isAuthor: n,
                                inx: o,
                                isFollow: !0,
                                type: "pgc"
                            })
                        },
                        RBTag: e.bottomLabel,
                        title: e.title,
                        subTitle: e.subTitle,
                        tagMark: e.attribute ? Number(e.attribute) : void 0,
                        score: r,
                        coverURL: (0, de.un)({coverList: e.coverList, imageStyle: "vertical"}),
                        clientShowParams: {log_pb: a},
                        videoURL: e.previewVertical || void 0,
                        richPreviewProps: e.albumTypeList ? {
                            title: e.title,
                            coverURL: (0, de.un)({coverList: e.coverList, imageStyle: "horizontal"}),
                            score: r,
                            albumTypeValueList: e.albumTypeList,
                            actorList: e.actorList,
                            areaList: e.areaList,
                            intro: e.intro,
                            year: e.year,
                            tagList: e.tagList,
                            isCollect: e.isCollect,
                            albumId: e.albumId,
                            videoURL: e.previewHorizontal,
                            onCollectChange: function (t) {
                                return function (e, t) {
                                    var n, o = m()(n = i.videoList).call(n, (function (n) {
                                        return n.albumId === e ? mt(mt({}, n), {}, {isCollect: t}) : n
                                    }));
                                    s({list: o, hasMore: i.hasMore, offset: i.offset})
                                }(e.albumId, t)
                            },
                            onClickAnchor: function (e) {
                                ht.Z.verticalCard.lvideo_album_click({click_position: e, log_pb: a})
                            },
                            refreshPreviewGid: e.episodeId
                        } : void 0,
                        userInfo: {userId: f}
                    })
                })))), v.createElement($.Z, {
                    text: {more: i.hasMore ? "鍔犺浇鏇村瑙嗛..." : "", end: "宸茬粡鍒板簳閮紝娌℃湁鏇村鍐呭浜�"},
                    hasMore: i.hasMore
                }))
            }))), bt = n(44984), wt = n(19742), Et = n(17097), yt = n(44786), St = n(75485), xt = n(88768), Tt = n(54871),
            At = n(52030), Lt = n(89138);

        function Zt(e, t) {
            var n = V()(e);
            if (C()) {
                var i = C()(e);
                t && (i = E()(i).call(i, (function (t) {
                    return H()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Nt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zt(Object(n), !0).forEach((function (t) {
                    (0, q.Z)(e, t, n[t])
                })) : B() ? Object.defineProperties(e, B()(n)) : Zt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, H()(n, t))
                }))
            }
            return e
        }

        var jt = function (e) {
                return e && e.Math == Math && e
            },
            Pt = jt("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || jt("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || jt("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || jt("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Pt.globalThis = Pt, Pt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var It = (0, A.EN)((0, b.bZ)([b.VD.AuthorFansData, b.VD.AuthorFollowData, b.VD.AuthorFollowAscData, b.VD.AuthorFollowSearchData], {
                appendAuthorFansList: "APPEND_AUTHOR_FANS_LIST",
                appendAuthorFollowList: "APPEND_AUTHOR_FOLLOW_LIST",
                appendAuthorFollowAscList: "APPEND_AUTHOR_FOLLOW_ASC_LIST",
                appendAuthorFollowSearchList: "APPEND_AUTHOR_FOLLOW_SEARCH_LIST",
                resetAuthorFollowSearchList: "RESET_AUTHOR_FOLLOW_SEARCH_LIST"
            })((function (e) {
                var t = e.isUserAuthor, n = e.AuthorFansData, i = e.AuthorFollowData, r = e.AuthorFollowAscData,
                    s = e.AuthorFollowSearchData, a = e.appendAuthorFansList, l = e.appendAuthorFollowList,
                    u = e.appendAuthorFollowAscList, c = e.appendAuthorFollowSearchList, f = e.resetAuthorFollowSearchList,
                    h = e.activeKey, _ = e.match, p = e.showTitle, g = void 0 === p || p, b = e.v3Modify,
                    w = void 0 !== b && b, E = e.subtype, y = e.changeTab, S = e.keyword, x = t ? "鎴�" : "TA",
                    T = {fans: "".concat(x, "鐨勭矇涓�"), follow: "".concat(x, "鐨勫叧娉�")}, A = _.params.to_user_id,
                    L = (0, Tt.jY)(), Z = (0, St.Z)().globalConfig, j = (0, v.useMemo)((function () {
                        return "asc" === E && t ? "asc" : "desc"
                    }), [E]), P = "fans" === h ? n : "desc" === j ? i : r;
                "follow" === h && S && t && (P = s);
                var I = (0, v.useState)({followDesc: !1, followAsc: !1, followSearch: !1, fans: !1}), k = (0, o.Z)(I, 2),
                    O = k[0], U = k[1], D = function (e, t) {
                        for (var n = {
                            xigua: "0",
                            toutiao: "0",
                            douyin: "0",
                            huoshan: "0"
                        }, i = 0; i < e.length; i++) "瑗跨摐" === e[i].name ? n.xigua = e[i].fans_count : "澶存潯" === e[i].name ? n.toutiao = e[i].fans_count : "鎶栭煶" === e[i].name ? n.douyin = e[i].fans_count : "鐏北" === e[i].name && (n.huoshan = e[i].fans_count);
                        return Nt(Nt({}, n), {}, {xiguaAnonymous: t, fetched: !0})
                    }, F = (0, v.useState)((function () {
                        var e, t;
                        return D(null !== (e = n.fan_nums) && void 0 !== e ? e : [], null !== (t = n.xigua_anonymous_fans_count_desc) && void 0 !== t ? t : "")
                    })), V = (0, o.Z)(F, 2), M = V[0], C = V[1], R = function (e, t, n, i) {
                        "fans" === e ? U(Nt(Nt({}, O), {}, {fans: i})) : "follow" === e && ("desc" === t ? U(Nt(Nt({}, O), {}, {followDesc: i})) : "asc" === t ? U(Nt(Nt({}, O), {}, {followAsc: i})) : n && U(Nt(Nt({}, O), {}, {followSearch: i})))
                    }, H = function (e, t, n) {
                        if ("fans" === e) return O.fans;
                        if ("follow" === e) {
                            if ("desc" === t) return O.followDesc;
                            if ("asc" === t) return O.followAsc;
                            if (n) return O.followSearch
                        }
                        return !1
                    }, X = function () {
                        H(h, j, !!S) || (R(h, j, !!S, !0), "fans" === h ? K() : S && t ? W() : q())
                    }, B = (0, Q.M)({loading: H(h, j, !!S), hasNextPage: P.hasMore, onLoadMore: X}).ref, K = function () {
                        J.Z.user.getFansData({authorId: A, cursor: n.cursor}).then((function (e) {
                            C(D(e.data.data.fan_nums, e.data.data.xigua_anonymous_fans_count_desc)), a(e.data.data)
                        })).finally((function () {
                            R(h, j, !!S, !1)
                        }))
                    }, q = function () {
                        J.Z.user.getFollowData({authorId: A, sortType: j, cursor: P.cursor}).then((function (e) {
                            "desc" === j ? l(e.data.data) : u(e.data.data)
                        })).finally((function () {
                            R(h, j, !!S, !1)
                        }))
                    }, G = (0, v.useRef)(0), W = function () {
                        var e = ++G.current;
                        J.Z.user.getFollowSearchData({authorId: A, keyword: S, cursor: P.cursor}).then((function (n) {
                            e === G.current && (0 === s.userList.length && qe.Z.pgcSearchResult({
                                result: n.data.data.data.length ? "success" : "fail",
                                category_name: t ? "profile" : "pgc",
                                list_name: N[h],
                                search_keyword: S
                            }), c(n.data.data))
                        })).finally((function () {
                            R(h, j, !!S, !1)
                        }))
                    };
                (0, v.useEffect)((function () {
                    P.hasMore && 0 === P.userList.length && X()
                }), [P, S]);
                var z, Y, te, ne, ie, oe = function () {
                    e.changeTab(encodeURIComponent(h))
                }, re = function (e, n) {
                    Et.Z.authorInfoClick({
                        log_pb: (0, de.ST)("{}", ["impr_type", "category_name", "page_type", "sourcepage", "author_id"], ["__pgc__", t ? "profile" : "pgc", "userdetail", "userdetail", String(e.user_id)]),
                        click_position: n,
                        user_status: L.id === String(e.user_id) ? "author" : "guest",
                        is_following: e.follow ? 1 : 0,
                        pgc_section: "fans" === h ? "fans" : "follow"
                    })
                }, se = w ? "UserDetail__user-list v3modify" : "UserDetail__user-list";
                return v.createElement(Lt.Z, {
                    className: se,
                    ref: B
                }, g ? v.createElement("h2", null, T[h]) : null, (te = "userDetailV3__filters", ne = "userDetailV3__fans_count", ie = [{
                    key: "xigua",
                    name: "瑗跨摐"
                }, {key: "toutiao", name: "澶存潯"}, {key: "douyin", name: "鎶栭煶"}, {
                    key: "huoshan",
                    name: "鎶栭煶鐏北鐗�"
                }], "fans" === h ? v.createElement("div", {className: "".concat(ne)}, v.createElement("span", {className: "".concat(ne, "__title")}, t ? "鎴�" : "TA", "鐨勭矇涓�"), M.fetched && v.createElement(v.Fragment, null, m()(ie).call(ie, (function (e, t) {
                    return "0" !== M[e.key] && v.createElement("div", {
                        className: "".concat(ne, "__data"),
                        key: e.key
                    }, v.createElement("i", {className: "".concat(ne, "__data_icon icon_").concat(e.key)}), v.createElement("span", {className: "".concat(ne, "__data_num")}, e.name, " ", M[e.key]))
                })), v.createElement("span", {className: "".concat(ne, "__tips")}, "浠ヤ笅灞曠ず鏉ヨ嚜瑗跨摐瑙嗛鐨勫疄鍚嶇矇涓�", M.xiguaAnonymous ? "锛屾澶�".concat(M.xiguaAnonymous) : ""))) : t ? v.createElement("div", {className: "".concat(te)}, S ? v.createElement("div", {className: "userDetailV3__filters_all_videos"}, v.createElement("span", {onClick: oe}, "杩斿洖鍏ㄩ儴鍏虫敞"), v.createElement("span", {className: "icon-arrow"}), v.createElement("span", null, "鎼滅储鈥�"), v.createElement("span", {className: "userDetailV3__filters_keyword"}, S), v.createElement("span", null, "鈥�")) : v.createElement(v.Fragment, null, v.createElement("span", {className: "".concat(te, "_title")}, "鎴戠殑鍏虫敞"), v.createElement(Ke, {
                    types: [{
                        key: "desc",
                        title: "鍏虫敞鏃堕棿浠庢柊鍒版棫"
                    }, {key: "asc", title: "鍏虫敞鏃堕棿浠庢棫鍒版柊"}], activeKey: j, onChange: function (e) {
                        qe.Z.pgcFollowRankClick({
                            rank_type: "desc" === e ? "recent_to_previous" : "previous_to_recent",
                            category_name: "profile"
                        }), y(h, {subtype: e})
                    }
                })), v.createElement("div", {className: "".concat(te, "_fill")}), v.createElement(Ge.Z, {
                    keyword: S,
                    placeholder: "鎼滅储鍏虫敞鐨勪汉",
                    onSearch: function (e) {
                        f(), R(h, j, !0, !1), qe.Z.localSearchClick({
                            list_name: N[h],
                            category_name: t ? "profile" : "pgc"
                        }), y(h, {keyword: e})
                    }
                })) : v.createElement("div", {className: "".concat(te)}, v.createElement("span", {className: "".concat(te, "_title")}, "TA鐨勫叧娉�"))), 0 === P.userList.length && P.hasMore ? v.createElement(ee.yg, null) : P.userList.length > 0 ? v.createElement(v.Fragment, null, v.createElement("ul", null, (Y = w ? "UserDetail-follow" : "BU-Follow-white UserDetail-follow", m()(z = P.userList).call(z, (function (e, n) {
                    var i;
                    return "follow" === h && S ? (0, Te.LA)(S, e.name) : e.name, v.createElement("li", {
                        key: d()(i = "".concat(S ? "search" : j, "_")).call(i, n),
                        onClick: function () {
                            return t = e.user_id, i = d()(n = "/home/".concat(t, "/?list_entrance=userdetail&source=")).call(n, "fans" === h ? "fans" : "follow"), void((0, At.gQ)() ? window.open(i, "_self") : window.open(i));
                            var t, n, i
                        }
                    }, v.createElement("div", {
                        className: "avatar-container", onClick: function () {
                            return re(e, "profile")
                        }
                    }, v.createElement(yt.Z, {
                        isLiving: e.is_living,
                        url: e.avatar,
                        size: 72
                    })), v.createElement("div", {className: "u-content"}, v.createElement("p", {
                        className: "u-name",
                        onClick: function () {
                            return re(e, "name")
                        }
                    }, v.createElement(bt.Z, {
                        name: e.name,
                        authInfo: e.user_auth_info
                    })), w ? v.createElement("div", {className: "u-intro"}, v.createElement("span", null, "绮変笣 ", (0, de.aD)(e.fansNum || 0), v.createElement("span", {className: "divide"}, "聽路聽"), e.videoCount ? Math.max(e.videoCount, 0) : 0, "涓棰�"), v.createElement("p", {className: "divided-introduction"}, e.introduce || "鏆傛棤绠€浠�")) : v.createElement("div", {className: "u-intro"}, v.createElement("span", null, v.createElement("span", null, "绮変笣 ", (0, de.aD)(e.fansNum || 0)), v.createElement("span", {className: "divide"}, "聽路聽")), v.createElement("p", null, e.introduce || "鏆傛棤绠€浠�"))), Z.isLogin && Z.identity.id === e.user_id + "" ? v.createElement(v.Fragment, null) : v.createElement(wt.Z, {
                        className: Y,
                        defaultIsFollow: e.follow || !1,
                        toUserID: e.user_id + "",
                        onChange: function (t, n) {
                            !function (e, t, n) {
                                if (!n) {
                                    e.follow = t;
                                    var i = "rtUnFollow";
                                    t && (i = "rtFollow"), qe.Z[i]({
                                        to_user_id: e.user_id.toString(),
                                        media_id: (e.media_id || 0).toString(),
                                        category_name: "fans"
                                    })
                                }
                            }(e, t, n)
                        },
                        source: t ? "fans" === h ? xt.w6.MyFanList : xt.w6.MyFollowList : "fans" === h ? xt.w6.OtherFanList : xt.w6.OtherFollowList
                    }))
                })))), v.createElement($.Z, {
                    text: {more: P.hasMore ? "姝ｅ湪鍔犺浇鏇村..." : "", end: "宸茬粡鍒板簳閮ㄥ暒"},
                    hasMore: P.hasMore
                })) : S ? v.createElement(ze.Z, {keyword: S, text: "鐢ㄦ埛"}) : v.createElement(le, {
                    type: h,
                    isUserAuthor: t
                }))
            }))), kt = n(79349), Ot = n(49195), Ut = function (e) {
                return e && e.Math == Math && e
            },
            Dt = Ut("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Ut("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ut("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ut("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Dt.globalThis = Dt, Dt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ft = "BlockContainer", Vt = function (e) {
                var t = e.className, n = e.customHeader, i = e.title, o = e.headerAppend, r = e.toMoreConfig, s = e.content;
                return v.createElement("div", {className: D()(Ft, t)}, void 0 !== n ? n : v.createElement(Ot.Z, {
                    className: "".concat(Ft, "__header"),
                    toMoreConfig: r,
                    title: i,
                    headerAppend: o
                }), v.createElement("div", {className: "".concat(Ft, "__content")}, s))
            }, Mt = n(53311), Ct = n(91296), Rt = n.n(Ct), Ht = function (e) {
                return e && e.Math == Math && e
            },
            Xt = Ht("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Ht("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ht("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ht("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Xt.globalThis = Xt, Xt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Bt = function (e, t) {
                var n = (0, v.useRef)({isFetching: !1, hasMore: !0}), r = (0, v.useState)(!1), s = (0, o.Z)(r, 2), l = s[0],
                    u = s[1], c = (0, v.useState)(!0), f = (0, o.Z)(c, 2), h = f[0], _ = f[1], m = (0, v.useState)(t || []),
                    p = (0, o.Z)(m, 2), g = p[0], b = p[1], w = (0, v.useState)([]), E = (0, o.Z)(w, 2), y = E[0], S = E[1],
                    x = (0, v.useCallback)(Rt()((0, i.Z)(a().mark((function t() {
                        var i;
                        return a().wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!n.current.isFetching && n.current.hasMore) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return u(!0), n.current.isFetching = !0, t.next = 6, e();
                                case 6:
                                    i = t.sent, u(!1), _(i.hasMore), n.current = {
                                        isFetching: !1,
                                        hasMore: i.hasMore
                                    }, b((function (e) {
                                        return d()(e).call(e, i.data)
                                    })), S(i.data);
                                case 12:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), 100), [e]);
                return [l, h, g, y, x]
            }, Kt = function (e) {
                return e && e.Math == Math && e
            },
            qt = Kt("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Kt("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Kt("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Kt("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        qt.globalThis = qt, qt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Gt = function (e) {
                var t = e.parentClassName, n = e.className, r = e.fetchData, s = e.defaultData, l = e.defaultDataCount,
                    u = e.limitCount, c = e.EmptyComponent, d = e.loadTip, f = e.endTip, h = e.showFooter,
                    _ = void 0 === h || h, m = e.children, p = (0, Mt.Z)(), g = (0, o.Z)(p, 2), b = g[0], w = g[1],
                    E = (0, Mt.Z)(), y = (0, o.Z)(E, 2), S = y[0], x = y[1], T = function () {
                        var e = (0, i.Z)(a().mark((function e() {
                            var t;
                            return a().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r();
                                    case 2:
                                        return t = e.sent, e.abrupt("return", {data: t.list, hasMore: t.list.length > 0});
                                    case 4:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(), A = Bt(T, s), L = (0, o.Z)(A, 5), Z = L[0], N = L[1], j = L[2], P = L[3], I = L[4], k = j.length;
                return (0, v.useEffect)((function () {
                    w && (0 === k && l || u && u > 0 && P.length % u != 0 || x) && I()
                }), [w, x, P]), 0 !== j.length || Z || N || !c ? v.createElement("div", {className: t}, v.createElement("div", {
                    className: n,
                    ref: b
                }, m), _ && v.createElement(v.Fragment, null, v.createElement("div", {
                    ref: S,
                    className: "".concat("LoadMoreContainer", "__empty")
                }), v.createElement($.Z, {
                    text: {more: N && (d || "鍔犺浇鏇村瑙嗛...") || "", end: f || "宸茬粡鍒板簳閮紝娌℃湁鏂扮殑鍐呭鍟�"},
                    hasMore: N
                }))) : v.createElement(c, null)
            }, Wt = function (e) {
                return e && e.Math == Math && e
            },
            zt = Wt("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Wt("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Wt("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Wt("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        zt.globalThis = zt, zt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Yt = function (e) {
            var t = e.tag, n = e.maxPerLine, i = e.count;
            return v.createElement(v.Fragment, null, Y()({length: Math.max(0, n - i)}, (function (e, n) {
                return v.createElement("div", {className: D()("empty_placeholder", t), key: n})
            })))
        };

        function Jt(e, t) {
            var n = V()(e);
            if (C()) {
                var i = C()(e);
                t && (i = E()(i).call(i, (function (t) {
                    return H()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Qt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Jt(Object(n), !0).forEach((function (t) {
                    (0, q.Z)(e, t, n[t])
                })) : B() ? Object.defineProperties(e, B()(n)) : Jt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, H()(n, t))
                }))
            }
            return e
        }

        var $t = function (e) {
                return e && e.Math == Math && e
            },
            en = $t("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || $t("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || $t("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || $t("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        en.globalThis = en, en.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var tn = (0, A.EN)((0, b.bZ)([b.VD.AuthorPreviewSeries], {
            appendAuthorPreviewSeries: "APPEND_AUTHOR_PREVIEW_SERIES",
            setAuthorPreviewSeries: "SET_AUTHOR_PREVIEW_SERIES"
        })((function (e) {
            var t = e.AuthorPreviewSeries, n = e.isUserAuthor, i = e.activeKey, o = e.match,
                r = e.appendAuthorPreviewSeries, s = e.showFooterLoading, a = e.setAuthorPreviewSeries, l = t.list,
                u = t.offset, c = o.params.to_user_id, d = (0, v.useCallback)((function () {
                    return J.Z.video.getAuthorPSeries({authorId: c, offset: u, limit: 4, subCnt: 4}).then((function (e) {
                        return r(e.data.data), e.data.data
                    }))
                }), [u]);
            return v.createElement(v.Fragment, null, v.createElement(Gt, {
                className: s ? "userDetailV3__series-tab" : "",
                fetchData: d,
                defaultData: l,
                defaultDataCount: 4,
                showFooter: s,
                EmptyComponent: function () {
                    return v.createElement(ae, {desc: "".concat(n ? "浣�" : "TA", "杩樻病鏈夊彂琛ㄨ繃鍚堥泦鍣綖")})
                },
                endTip: "宸茬粡鍒板簳閮紝娌℃湁鏇村鍐呭浜�"
            }, m()(l).call(l, (function (e, o) {
                var r = e.PseriesId, s = e.InfoList;
                if (!Array.isArray(s) || 0 === s.length) return null;
                var u = s[0].pseries, c = u ? u.title : s[0].title;
                return v.createElement(Vt, {
                    key: r,
                    title: c,
                    toMoreConfig: s.length > 0 ? Qt(Qt({}, (0, fe.ZF)({
                        pSeriresId: r,
                        gid: s[0].group_id,
                        query: {logPb: Ne({}, n, i, "pgc")}
                    })), {}, {target: "_blank"}) : void 0,
                    content: v.createElement("div", {className: "userDetailV3__main__list"}, m()(s).call(s, (function (e, s) {
                        var u, c = e.video_duration, d = e.group_id, f = e.middle_image, h = e.large_image_list,
                            _ = e.video_detail_info, m = e.publish_time, p = e.log_pb, g = e.preview_url, b = e.gid,
                            w = e.user_info, E = e.video_user_like, y = e.co_creators_video_info;
                        return v.createElement(ue.Z, {
                            inView: function () {
                                je({
                                    log_pb: JSON.parse((0, de.ST)(p, "impr_type", "__pgc__")),
                                    isAuthor: n,
                                    inx: s,
                                    type: "pgc"
                                })
                            },
                            anchorProps: Qt({}, (0, fe.ZF)({
                                gid: d,
                                pSeriresId: r,
                                withSeoHref: !0,
                                query: {logPb: Ne(p, n, i, "pgc")}
                            })),
                            key: d,
                            title: e.title,
                            RBTag: c ? (0, de.LU)(c) : void 0,
                            coverURL: (null == h || null === (u = h[0]) || void 0 === u ? void 0 : u.url) || (null == f ? void 0 : f.url),
                            bottomInfo: v.createElement(pe, {
                                video_watch_count: null == _ ? void 0 : _.video_watch_count,
                                publish_time: m
                            }),
                            videoURL: (0, Te.Ph)(g),
                            gid: b,
                            authorUserId: null == w ? void 0 : w.user_id,
                            isCollected: null != E ? !!E : void 0,
                            onIsCollectedChanged: function (e) {
                                return function (e, n, i) {
                                    var o = (0, kt.Z)(l);
                                    o[e] = Qt(Qt({}, l[e]), {}, {InfoList: (0, kt.Z)(l[e].InfoList)}), o[e].InfoList[n] = Qt(Qt({}, o[e].InfoList[n]), {}, {video_user_like: i ? 1 : 0}), a({
                                        list: o,
                                        hasMore: t.hasMore,
                                        offset: t.offset
                                    })
                                }(o, s, e)
                            },
                            isCoCreate: null == y ? void 0 : y.is_co_creators_video,
                            coCreatorList: null == y ? void 0 : y.creator_list
                        })
                    })), v.createElement(Yt, {tag: "video", maxPerLine: 4, count: s.length % 5}))
                })
            }))))
        })));

        function nn(e, t) {
            var n = V()(e);
            if (C()) {
                var i = C()(e);
                t && (i = E()(i).call(i, (function (t) {
                    return H()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function on(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nn(Object(n), !0).forEach((function (t) {
                    (0, q.Z)(e, t, n[t])
                })) : B() ? Object.defineProperties(e, B()(n)) : nn(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, H()(n, t))
                }))
            }
            return e
        }

        var rn = function (e) {
                return e && e.Math == Math && e
            },
            sn = rn("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || rn("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || rn("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || rn("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        sn.globalThis = sn, sn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var an = (0, A.EN)((0, b.bZ)([b.VD.AuthorSeriesDataList], {appendAuthorSeriesList: "APPEND_AUTHOR_SERIES_LIST"})((function (e) {
                var t = e.showFooterLoading, n = e.AuthorSeriesDataList, i = e.appendAuthorSeriesList, o = e.match,
                    r = e.isUserAuthor, s = e.activeKey, a = n.list, l = n.offset, u = o.params.to_user_id,
                    c = (0, v.useCallback)((function () {
                        return J.Z.video.getAuthorSeries({
                            author_id: u,
                            offset: l,
                            limit: 4,
                            subCnt: 4
                        }).then((function (e) {
                            return i(e.data.data), e.data.data
                        }))
                    }), [l]);
                return v.createElement(v.Fragment, null, v.createElement(Gt, {
                    className: t ? "userDetailV3__series-tab" : "",
                    fetchData: c,
                    defaultData: a,
                    defaultDataCount: 4,
                    showFooter: t,
                    EmptyComponent: function () {
                        return v.createElement(ae, {desc: "".concat(r ? "浣�" : "TA", "杩樻病鏈夊彂琛ㄨ繃鎾崟鍣綖")})
                    },
                    endTip: "宸茬粡鍒板簳閮紝娌℃湁鏇村鍐呭浜�"
                }, m()(a).call(a, (function (e, t) {
                    var n = e.Id, i = e.SeriesInfo, o = e.videoList, a = i.Title;
                    return Array.isArray(o) && 0 !== o.length ? v.createElement(Vt, {
                        key: n,
                        title: a,
                        toMoreConfig: o.length > 0 ? on(on({}, (0, fe.ZF)({
                            seriresId: n,
                            gid: o[0].GroupID,
                            query: {logPb: Ne({}, r, s, "pgc")}
                        })), {}, {target: "_blank"}) : void 0,
                        content: v.createElement("div", {className: "userDetailV3__main__list"}, m()(o).call(o, (function (e) {
                            var i, o = e.GroupID, a = e.data, l = a.video_duration, u = a.middle_image,
                                c = a.large_image_list, d = a.video_detail_info, f = a.publish_time, h = a.title,
                                _ = a.log_pb, m = a.preview_url;
                            return v.createElement(ue.Z, {
                                inView: function () {
                                    je({
                                        log_pb: JSON.parse((0, de.ST)(_, "impr_type", "__pgc__")),
                                        isAuthor: r,
                                        inx: t,
                                        type: "pgc"
                                    })
                                },
                                anchorProps: on({}, (0, fe.ZF)({gid: o, seriresId: n, query: {logPb: Ne(_, r, s, "pgc")}})),
                                key: o,
                                title: h,
                                RBTag: l ? (0, de.LU)(l) : void 0,
                                coverURL: (null == c || null === (i = c[0]) || void 0 === i ? void 0 : i.url) || (null == u ? void 0 : u.url),
                                bottomInfo: v.createElement(pe, {
                                    video_watch_count: null == d ? void 0 : d.video_watch_count,
                                    publish_time: f
                                }),
                                videoURL: (0, Te.Ph)(m)
                            })
                        })), v.createElement(Yt, {tag: "video", maxPerLine: 4, count: o.length % 5}))
                    }) : null
                }))))
            }))), ln = n(19076), un = n(65634), cn = n(85370), dn = n(28216), fn = function (e) {
                return e && e.Math == Math && e
            },
            hn = fn("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || fn("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || fn("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || fn("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function _n(e, t) {
            return "string" != typeof t ? "" : "?" === t[0] ? O().parse(I()(t).call(t, 1))[e] || "" : O().parse(t)[e] || ""
        }

        hn.globalThis = hn, hn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var mn = (0, A.EN)((0, b.bZ)([b.VD.AuthorPreviewSeries, b.VD.AuthorSeriesDataList, b.VD.AuthorTabsCount, b.VD.SEOLinks])((function (e) {
                var t = e.isUserAuthor, n = e.AuthorPreviewSeries, i = e.AuthorSeriesDataList, r = e.AuthorTabsCount,
                    s = e.scrollHeightMap_Ref, a = e.changeTab, l = e.SEOLinks, u = (0, v.useState)(), c = (0, o.Z)(u, 2),
                    d = c[0], f = c[1], h = (0, A.UO)(), _ = h.to_user_id, m = (0, A.TH)(), p = _n("keyword", m.search),
                    g = _n("subtype", m.search), b = n.list, w = n.hasMore, E = i.list, y = i.hasMore, S = r.videoCnt,
                    x = (0, dn.I0)(), T = h.tab, L = void 0 === T ? "video" : T;
                (0, v.useLayoutEffect)((function () {
                    window.scrollTo(0, 0), window.scrollTo(0, ~~s.current[L])
                }), [L]), (0, v.useEffect)((function () {
                    f(Math.ceil((new Date).getTime() / 1e3))
                }), []), (0, v.useEffect)((function () {
                    (0, cn.f)((function () {
                        null != l && l.length || (0, un.m)({dispatch: x})
                    }), 1e3)
                }), [x, l]);
                return v.createElement("div", {className: D()({userDetailV3__content: !0})}, "video" === L ? v.createElement(ft, {
                    keyword: p,
                    isUserAuthor: t,
                    activeKey: L,
                    subtype: g,
                    changeTab: a,
                    videoCnt: S,
                    authorId: _,
                    filterTS: d
                }) : "hotsoon" === L ? v.createElement(Ce, {
                    isUserAuthor: t,
                    activeKey: L,
                    subtype: g,
                    changeTab: a,
                    videoCnt: S
                }) : "series" === L ? E.length > 0 || 0 === E.length && !y ? v.createElement(an, {
                    isUserAuthor: t,
                    activeKey: L,
                    showFooterLoading: !0
                }) : null : "pseries" === L ? b.length > 0 || 0 === b.length && !w ? v.createElement(tn, {
                    isUserAuthor: t,
                    activeKey: L,
                    showFooterLoading: !0
                }) : null : "lvideo" === L ? v.createElement(gt, {
                    isUserAuthor: t,
                    activeKey: L
                }) : "fans" === L || "follow" === L ? v.createElement(It, {
                    isUserAuthor: t,
                    activeKey: L,
                    showTitle: !1,
                    v3Modify: !0,
                    subtype: g,
                    changeTab: a,
                    keyword: p
                }) : null, null != l && l.length ? v.createElement("div", {className: "userDetailV3__footer"}, v.createElement(ln.Z, {links: l})) : null)
            }))), vn = n(21273), pn = n(68898), gn = n(36384), bn = n.n(gn), wn = n(20455), En = n.n(wn), yn = n(78580),
            Sn = n.n(yn), xn = n(14719), Tn = function (e) {
                return e && e.Math == Math && e
            },
            An = Tn("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Tn("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Tn("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Tn("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        An.globalThis = An, An.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ln, Zn, Nn = "BlockDialog", jn = (0, xn.Z)((function (e) {
            var t = e.onConfirm, n = function () {
                jn.hide()
            };
            return v.createElement("div", {className: D()("".concat(Nn))}, v.createElement("i", {
                className: D()("".concat(Nn, "__close")),
                onClick: n
            }), v.createElement("h4", null, "纭鎷夐粦姝ょ敤鎴凤紵"), v.createElement("span", null, "鎷夐粦鍚庯紝灏嗚嚜鍔ㄨВ闄ゅ叧娉紝骞剁姝㈠鏂瑰叧娉ㄤ綘鎴栦笌浣犱簰鍔�"), v.createElement("div", {className: D()("".concat(Nn, "__btn_wrapper"))}, v.createElement("button", {onClick: n}, "鍙栨秷"), v.createElement("button", {onClick: t}, "纭畾")))
        })), Pn = (n(44586), n(63952)), In = n(27105), kn = n(81226), On = n(19193), Un = n(7922), Dn = n(56789);

        function Fn() {
            return Fn = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, Fn.apply(this, arguments)
        }

        var Vn, Mn = function (e) {
                return v.createElement("svg", Fn({
                    width: 14,
                    height: 14,
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Ln || (Ln = v.createElement("g", {clipPath: "url(#punish_svg__clip0_6601_10950)"}, v.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7 0a7 7 0 100 14A7 7 0 007 0zm0 8.548c.414 0 .75-.316.75-.706v-4.34c0-.39-.336-.706-.75-.706s-.75.316-.75.705v4.341c0 .39.336.706.75.706zm.75 1.95c0 .39-.336.706-.75.706s-.75-.316-.75-.705v-.507c0-.39.336-.705.75-.705s.75.315.75.705v.507z",
                    fill: "#FE3355"
                }))), Zn || (Zn = v.createElement("defs", null, v.createElement("clipPath", {id: "punish_svg__clip0_6601_10950"}, v.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h14v14H0z"
                })))))
            }, Cn = function (e) {
                return e && e.Math == Math && e
            },
            Rn = Cn("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Cn("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Cn("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Cn("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function Hn(e, t) {
            var n = V()(e);
            if (C()) {
                var i = C()(e);
                t && (i = E()(i).call(i, (function (t) {
                    return H()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Xn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hn(Object(n), !0).forEach((function (t) {
                    (0, q.Z)(e, t, n[t])
                })) : B() ? Object.defineProperties(e, B()(n)) : Hn(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, H()(n, t))
                }))
            }
            return e
        }

        Rn.globalThis = Rn, Rn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, function (e) {
            e.PUNISH_SPEAK = "600", e.PUNISH_COMMENT = "400", e.PUNISH_SELF_DEFINED = "500", e.GLOBAL_BAN = "200"
        }(Vn || (Vn = {}));
        var Bn = function (e) {
                return e && e.Math == Math && e
            },
            Kn = Bn("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Bn("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Bn("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Bn("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function qn(e) {
            var t, i, r, s, a = e.isUserAuthor, l = e.info_REF, u = e.updateTime, c = ot().authorInfo,
                f = (0, v.useState)(), h = (0, o.Z)(f, 2), _ = h[0], m = h[1], p = (0, v.useState)(),
                g = (0, o.Z)(p, 2), b = (g[0], g[1]), w = (0, A.UO)().tab, y = (0, Tt._n)(), S = (0, Tt.jY)(),
                x = (0, v.useState)(!1), L = (0, o.Z)(x, 2), Z = L[0], N = L[1], j = (0, v.useState)(!1),
                P = (0, o.Z)(j, 2), I = P[0], k = P[1], O = (0, v.useContext)(rt), U = O.changeTab;
            O.setAuthorInfo;
            try {
                var F = new (bn())([]), V = c.user_auth_info && JSON.parse(c.user_auth_info) || {};
                null != V && V.auth_info && F.add(null == V ? void 0 : V.auth_info), V.other_auth && En()(V.other_auth).forEach((function (e) {
                    return F.add(e)
                })), Y()(F)
            } catch (e) {
                console.log(e)
            }
            (0, v.useEffect)((function () {
                "1" !== localStorage.getItem("show_banner_setting_btn") && k(!0)
            }), []);
            var M = Sn()(t = [Vn.PUNISH_COMMENT, Vn.PUNISH_SELF_DEFINED, Vn.PUNISH_SPEAK]).call(t, null == c || null === (i = c.punish_info) || void 0 === i ? void 0 : i.PunishStatus);
            return v.createElement(Lt.Z, {className: "".concat(T, "__header")}, v.createElement("div", {className: "".concat(T, "__header__bg")}, v.createElement("img", {
                src: globalThis.getFilterXss().filterUrl(_ || c.web_url || Dn, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), alt: ""
            }), a && v.createElement("div", {
                className: D()("".concat(T, "__header__bg-setting"), {stableDisplay: I}),
                onClick: function () {
                    ht.Z.userCenter.pgcPictureClick({
                        picture_url: _ || c.web_url || Dn,
                        page_from: "pgc"
                    }), N(!0), k(!1), localStorage.setItem("show_banner_setting_btn", "1")
                }
            }, I ? "鐐瑰嚮璁剧疆鑷繁鍠滄鐨勮儗鏅浘 鉁�" : "璁剧疆鑳屾櫙")), v.createElement("div", {
                className: "".concat(T, "__header__info"),
                ref: l
            }, v.createElement(yt.Z, {
                size: 120,
                url: c.avatar,
                userName: c.name,
                className: "".concat(T, "__header-avatar")
            }), v.createElement("div", {className: "".concat(T, "__header__detail")}, v.createElement("h1", null, v.createElement(bt.Z, {
                name: c.name,
                authInfo: c.user_auth_info
            })), v.createElement("div", {className: "".concat(T, "__header__textInfo")}, c.verified_content && v.createElement("p", null, v.createElement("span", null, "璁よ瘉锛�"), v.createElement("span", null, c.verified_content)), c.introduce && v.createElement("p", null, v.createElement("span", null, "绠€浠嬶細"), v.createElement("span", {className: "".concat(T, "__header__desc")}, c.introduce)), u ? v.createElement("p", null, "鏈€鏂颁綔鍝佸彂甯冩椂闂达細", u) : null), function () {
                var e = [null != c && c.address ? v.createElement("span", {className: "".concat(T, "__header__extra-info-item")}, "IP灞炲湴锛� ", null == c ? void 0 : c.address) : null, null != c && c.mcn ? v.createElement("span", {className: "".concat(T, "__header__extra-info-item")}, "鎵€灞濵CN锛� ", null == c ? void 0 : c.mcn) : null];
                if (0 === E()(e).call(e, (function (e) {
                        return !!e
                    })).length) return null;
                var t = [];
                return e.forEach((function (n, i) {
                    n && t.push(n), n && e[i + 1] && t.push(v.createElement("span", {className: "".concat(T, "__header__extra-info-line")}))
                })), v.createElement("div", {className: "".concat(T, "__header__extra-info")}, t)
            }(), M ? v.createElement("div", {className: "".concat(T, "__header__punishInfo")}, v.createElement(Mn, null), v.createElement("span", null, null == c || null === (r = c.punish_info) || void 0 === r ? void 0 : r.PunishDescription)) : null), v.createElement("div", {className: "".concat(T, "__header__detail2")}, v.createElement("div", {
                className: "".concat(T, "__header__data"),
                onClick: function () {
                    U("follow", {preActiveKey: w})
                }
            }, v.createElement("span", null, c.followNum ? (0, de.aD)(c.followNum) : c.followNum), v.createElement("span", null, "鍏虫敞")), v.createElement("div", {
                className: "".concat(T, "__header__data"),
                onClick: function () {
                    U("fans", {preActiveKey: w})
                }
            }, v.createElement("span", null, c.fansNum ? c.fansNum : 0), v.createElement("span", null, "绮変笣")), v.createElement("div", {
                className: d()(s = "".concat(T, "__header__data ")).call(s, T, "__header__liked_total"),
                onMouseEnter: function () {
                    qe.Z.pgcLikeShow({category_name: a ? "profile" : "pgc"})
                }
            }, v.createElement("span", null, c.diggNum ? (0, de.aD)(c.diggNum) : 0), v.createElement("span", null, "鑾疯禐"), v.createElement("div", {className: "".concat(T, "__header__liked")}, v.createElement("img", {
                src: globalThis.getFilterXss().filterUrl(n(84790), null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), alt: ""
            }), v.createElement("span", null, c.name, "鐨勮幏璧�"), v.createElement("div", {className: "".concat(T, "__header__liked_detail")}, v.createElement("div", {className: "".concat(T, "__header__data")}, v.createElement("span", null, (0, de.aD)(c.articleDiggNum)), v.createElement("span", null, "浣滃搧鑾疯禐")), v.createElement("div", {className: "".concat(T, "__header__data")}, v.createElement("span", null, (0, de.aD)(c.commentDiggNum)), v.createElement("span", null, "璇勮鑾疯禐")), v.createElement("div", {className: "".concat(T, "__header__data")}, v.createElement("span", null, (0, de.aD)(c.danmakuDiggNum)), v.createElement("span", null, "寮瑰箷鑾疯禐"))))), v.createElement("div", {className: "".concat(T, "__header__line")}), a ? v.createElement(v.Fragment, null, v.createElement(Un.zx, {
                onClick: function () {
                    window.open("/user-center")
                }, width: 120, marginRight: 20, type: "ghost-weak"
            }, "淇敼璧勬枡"), v.createElement(Un.zx, {
                onClick: function () {
                    window.open("https://studio.ixigua.com/")
                }, width: 120
            }, "鍒涗綔骞冲彴")) : v.createElement(v.Fragment, null, (c.is_blocking, v.createElement(wt.Z, {
                toUserID: String(c.user_id),
                defaultIsFollow: c.follow || !1,
                onChange: function (e, t) {
                    if (!t) {
                        c.follow = e;
                        var n = "rtUnFollow";
                        e && (n = "rtFollow"), qe.Z[n]({
                            to_user_id: c.user_id.toString(),
                            media_id: (c.media_id || 0).toString(),
                            category_name: "pgc"
                        })
                    }
                },
                source: xt.w6.UserDetails
            })), c.user_report && v.createElement("div", {className: "".concat(T, "__header__more_main")}, v.createElement(ge.Tkc, null), v.createElement("div", {className: "".concat(T, "__header__more_btn_wrapper")}, v.createElement("button", {
                className: "".concat(T, "__header__more_btn"),
                onClick: function () {
                    var e = {author_user_id: c.user_id.toString() + "", user_id: S.id};
                    ht.Z.common.clickTipOff(Xn(Xn({}, e), {}, {
                        tip_off_type: "user",
                        is_login: y ? 1 : 0
                    })), y ? In.Z.reuse({
                        type: "user",
                        params: {reported_user_id: c.user_id.toString()},
                        eventParams: e
                    }) : Pn.ZP.show({source: "login"})
                }
            }, "涓炬姤璇ョ敤鎴�")))))), v.createElement(kn.Z, {
                visible: Z,
                setVisible: N,
                webUrl: c.web_url || Dn,
                appUrl: c.web_url || n(28524),
                onOk: function () {
                    On.Z.getAuthorWebUrl({authorId: S.id}).then((function (e) {
                        var t, i, o, r;
                        m((null === (t = e.data) || void 0 === t || null === (i = t.data) || void 0 === i ? void 0 : i.web_url) || Dn), b((null === (o = e.data) || void 0 === o || null === (r = o.data) || void 0 === r ? void 0 : r.app_url) || n(28524))
                    }))
                }
            }))
        }

        Kn.globalThis = Kn, Kn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Gn = n(30780), Wn = function (e) {
                return e && e.Math == Math && e
            },
            zn = Wn("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || Wn("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Wn("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Wn("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        zn.globalThis = zn, zn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Yn = function (e) {
                var t = e.isUserAuthor, n = e.changeTab, i = e.headerWrap_Ref, r = e.info_REF, s = e.updateTime,
                    a = (0, v.useState)(!1), l = (0, o.Z)(a, 2), u = l[0], c = l[1];
                return v.createElement("div", {
                    className: "".concat(T, "__header-wrap"),
                    ref: i
                }, v.createElement(qn, {isUserAuthor: t, info_REF: r, updateTime: s}), v.createElement(Gn.Z, {
                    top: 64,
                    innerZ: 999,
                    onStateChange: function (e) {
                        c(e)
                    }
                }, v.createElement(j, {isUserAuthor: t, changeTab: n, isSticky: u})))
            }, Jn = n(10173), Qn = n(8306), $n = n(22533), ei = n(67209), ti = n(6162), ni = n.n(ti), ii = n(27484),
            oi = n.n(ii), ri = function (e) {
                return e && e.Math == Math && e
            },
            si = ri("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || ri("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || ri("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || ri("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        si.globalThis = si, si.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ai, li = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss", n = ni()(e);
            return n ? oi()(1e3 * n).format(t) : null
        };

        function ui() {
            return ui = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, ui.apply(this, arguments)
        }

        var ci, di = function (e) {
            return v.createElement("svg", ui({
                width: 58,
                height: 58,
                viewBox: "0 0 58 58",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ai || (ai = v.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 29C0 12.984 12.984 0 29 0s29 12.984 29 29-12.984 29-29 29S0 45.016 0 29zm29 3.308c1.502 0 2.719-1.138 2.719-2.543V17.043c0-1.404-1.218-2.543-2.719-2.543-1.502 0-2.719 1.139-2.719 2.543V29.765c0 1.405 1.218 2.543 2.719 2.543zm2.719 7.975c0 1.404-1.218 2.543-2.719 2.543-1.502 0-2.719-1.139-2.719-2.543v-2.041c0-1.405 1.218-2.543 2.719-2.543 1.502 0 2.719 1.138 2.719 2.543v2.041z",
                fill: "#000",
                fillOpacity: .08
            })))
        };

        function fi() {
            return fi = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, fi.apply(this, arguments)
        }

        var hi = function (e) {
                return v.createElement("svg", fi({
                    width: 7,
                    height: 3,
                    viewBox: "0 0 7 3",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), ci || (ci = v.createElement("path", {d: "M.22.384h6.696v1.71H.22V.384z", fill: "#1D1D1D"})))
            }, _i = function (e) {
                return e && e.Math == Math && e
            },
            mi = _i("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || _i("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || _i("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || _i("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        mi.globalThis = mi, mi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var vi = "userDetailV3__punish", pi = function (e) {
                var t, n, i = e.info_REF, o = ot().authorInfo;
                return v.createElement("div", {className: "".concat(T)}, v.createElement("div", {className: "".concat(T, "__header-wrap")}, v.createElement(Lt.Z, {className: "".concat(T, "__header")}, v.createElement("div", {className: "".concat(T, "__header__bg")}, v.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(o.web_url || Dn, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), alt: ""
                })), v.createElement("div", {
                    className: "".concat(T, "__header__info"),
                    ref: i
                }, v.createElement(yt.Z, {
                    size: 120,
                    url: o.avatar,
                    userName: o.name,
                    className: "".concat(T, "__header-avatar")
                }), v.createElement("div", {className: "".concat(T, "__header__detail")}, v.createElement("h1", null, v.createElement(bt.Z, {name: o.name}))), v.createElement("div", {className: "".concat(T, "__header__detail2")}, v.createElement("div", {className: "".concat(T, "__header__data")}, v.createElement("span", null, v.createElement(hi, null)), v.createElement("span", null, "鍏虫敞")), v.createElement("div", {className: "".concat(T, "__header__data")}, v.createElement("span", null, v.createElement(hi, null)), v.createElement("span", null, "绮変笣")), v.createElement("div", {className: "".concat(T, "__header__data")}, v.createElement("span", null, v.createElement(hi, null)), v.createElement("span", null, "鑾疯禐")))))), v.createElement("div", {className: vi}, v.createElement(di, null), v.createElement("h2", {className: "".concat(vi, "__title")}, null == o || null === (t = o.punish_info) || void 0 === t ? void 0 : t.PunishTitle), v.createElement("p", {className: "".concat(vi, "__desc")}, null == o || null === (n = o.punish_info) || void 0 === n ? void 0 : n.PunishDescription)))
            }, gi = function (e) {
                return e && e.Math == Math && e
            },
            bi = gi("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || gi("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || gi("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || gi("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        bi.globalThis = bi, bi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var wi = rt.Provider;

        function Ei(e) {
            var t, n, i, o, r, s, a, l, u, c,
                d = Number(null !== (t = null === (n = e.user_digg_count) || void 0 === n ? void 0 : n.article_digg_count) && void 0 !== t ? t : "0"),
                f = Number(null !== (i = null === (o = e.user_digg_count) || void 0 === o ? void 0 : o.comment_digg_count) && void 0 !== i ? i : "0"),
                h = Number(null !== (r = null === (s = e.user_digg_count) || void 0 === s ? void 0 : s.danmaku_digg_count) && void 0 !== r ? r : "0"),
                _ = d + f + h;
            return {
                user_id: e.user_id,
                media_id: e.media_id && (0, de.Bz)(e.media_id) || 0,
                name: e.name,
                introduce: e.description,
                avatar: e.avatar_url,
                user_auth_info: e.user_auth_info,
                follow: e.follow,
                fansNum: e.followers_count_str,
                followNum: e.following_count,
                diggNum: _,
                articleDiggNum: d,
                commentDiggNum: f,
                danmakuDiggNum: h,
                is_living: e.is_living,
                verified_content: e.verified_content,
                is_blocking: e.is_blocking,
                is_blocked: e.is_blocked,
                user_report: e.user_report,
                is_fetched: !0,
                web_url: null === (a = e.author_info) || void 0 === a ? void 0 : a.web_url,
                app_url: null === (l = e.author_info) || void 0 === l ? void 0 : l.app_url,
                address: null == e || null === (u = e.ip_info) || void 0 === u ? void 0 : u.address,
                mcn: null == e || null === (c = e.mcn_info) || void 0 === c ? void 0 : c.name,
                punish_info: null == e ? void 0 : e.punish_info
            }
        }

        function yi(e) {
            return {
                pSeriesCnt: e.PSeriesCnt,
                seriesCnt: e.SeriesCnt,
                shortVideoCnt: e.ShortVideoCnt,
                videoCnt: e.VideoCnt,
                lVideoCnt: e.LVideoCnt
            }
        }

        function Si(e) {
            return {
                pSeriesShow: e.pseriesList.list && e.pseriesList.list.length > 0 || !1,
                seriesShow: e.seriesVideos && e.seriesVideos.length > 0 || !1,
                shortVideoShow: e.hotsoonVideos && e.hotsoonVideos.length > 0 || !1,
                videoShow: e.videos && e.videos.length > 0 || e.hotVideos && e.hotVideos.length > 0 || !1
            }
        }

        function xi(e) {
            return e && "0" !== e.ItemID.toString() ? (0, Te.wL)(e) : null
        }

        var Ti = function (e) {
            var t, n = (0, g.Z)({
                    defaultConfig: {
                        className: "userDetail__layout",
                        headerTheme: Qn.it.Transition,
                        withShadow: !1
                    }
                }), i = n.setTransitionRange, r = n.setHeaderTheme, s = e.AuthorEnableTabs, a = e.AuthorHomeVideoList,
                l = e.SEOUpdateTime, u = e.setAuthorInfo, c = e.resetAuthorInfo, f = e.setAuthorPreviewSeries,
                h = e.setAuthorSeriesList, _ = e.setHomeVideoList, m = e.resetHomeVideoList, b = e.resetAuthorVideoList,
                w = e.resetPlayedVideoList, E = e.resetLVideoList, y = e.resetHotsoonList, S = e.resetPlayedHotsoonList,
                x = e.setAuthorTabsShow, A = e.setAuthorTabsCount, L = e.location, Z = e.match, j = e.history,
                P = e.AuthorDetailInfo, I = (0, St.Z)().globalConfig, k = I.identity, O = I.isLogin, U = k.id,
                D = (0, v.useState)(P.is_fetched && !P.user_id), F = (0, o.Z)(D, 2), V = F[0], M = F[1], C = Z.params,
                R = C.to_user_id, H = C.tab, X = void 0 === H ? "video" : H, B = O && U === R || !1, K = (0, Jn.Z)(),
                q = function (e, t) {
                    if (!t || !t.notea) {
                        var n = "", i = "", o = "", r = N[e];
                        t && (t.source ? n = t.source : t.preActiveKey && (n = N[t.preActiveKey]), t.list_entrance && (i = t.list_entrance), t.video_card_type && (o = t.video_card_type), "follow_recommend" === t.source && ("homepage" === t.list_entrance ? r = "pgc_home" : "attention" === t.list_entrance && (r = "pgc_follow"))), qe.Z.enterList({
                            category_name: B ? "profile" : "pgc",
                            list_name: r,
                            source: n,
                            list_entrance: i,
                            video_card_type: o
                        })
                    }
                }, G = (0, v.useRef)(null), W = (0, v.useRef)({}), z = (0, v.useRef)(null), Y = function (e, t) {
                    W.current[X] = document.documentElement.scrollTop || document.body.scrollTop, q(e, t), j.push((0, fe.$x)(R, {tab: e}, t))
                };
            (0, v.useEffect)((function () {
                pn.Z.page_user_detail(R), q(X, (0, Te.DP)(L.search)), a.inited || J.Z.video.getAuthorHomeVideoList({author_id: R}).then((function (e) {
                    var t = e.data, n = t.code, i = t.data;
                    200 === n && (_(i), x(Si(i)), f(i.pseriesList), h(i.seriesVideos))
                }))
            }), []), (0, v.useEffect)((function () {
                return function () {
                    null == c || c(), null == m || m(), null == b || b(), null == w || w(), null == E || E(), null == y || y(), null == S || S()
                }
            }), []), (0, v.useEffect)((function () {
                P.user_id && String(P.user_id) === R || J.Z.user.getAuthorRichInfo({authorId: R}).then((function (e) {
                    var t;
                    if (e.data) if (null !== (t = e.data.data.UserInfo) && void 0 !== t && t.user_id) {
                        var n = e.data.data, i = n.UserInfo, o = n.VideoStat, r = Ei(i), s = yi(o);
                        u(r), A(s)
                    } else M(!0)
                }))
            }), []), (0, v.useEffect)((function () {
                var e, t;
                qe.Z.enterPGC({
                    category_name: B ? "profile" : "pgc",
                    list_entrance: K.list_entrance || "",
                    is_following: P.follow ? "1" : "0",
                    at_position: K.at_position,
                    player_status: null !== (e = K.player_status) && void 0 !== e ? e : "noFullscreen",
                    is_co_publish: K.is_co_publish,
                    from_section: null !== (t = K.from_section) && void 0 !== t ? t : "button"
                })
            }), []), (0, v.useEffect)((function () {
                var e, t = ((null === (e = z.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {}).y;
                i({min: 1, max: (void 0 === t ? 96 : t) - 18 - 64 - 10})
            }), []), (0, $n.Z)((function () {
                var e, t = document.documentElement.scrollTop || document.body.scrollTop,
                    n = ((null === (e = z.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {}).y;
                i({min: 1, max: (void 0 === n ? 96 : n) - 18 - 64 - 10 + t})
            }), 200);
            var Q = (null == P || null === (t = P.punish_info) || void 0 === t ? void 0 : t.PunishStatus) === Vn.GLOBAL_BAN;
            return V && !Q ? (r(Qn.it.Default), v.createElement(vn.Z, null)) : P ? v.createElement(wi, {
                value: {
                    authorInfo: P,
                    enableTabs: s,
                    changeTab: Y,
                    setAuthorInfo: u
                }
            }, function (e) {
                var t, n, i;
                if (!e) return null;
                var o = e.user_id, r = e.name, s = e.introduce;
                return v.createElement(p.ZP, {
                    title: "".concat(r ? "".concat(r, "鐨�") : "", "涓汉涓婚〉 - 瑗跨摐瑙嗛"),
                    meta: [{
                        name: "description",
                        content: d()(t = d()(n = "".concat(s, "銆傛杩庤鐪�")).call(n, r, "杩戞湡鍙戝竷鐨勮棰戯紝")).call(t, r, "鍦ㄨタ鐡滆棰戜笂鍙戝竷鐨勬墍鏈夎棰戙€傚揩鏉ュ叧娉ㄦ洿澶氭湁鍒涙剰鐨勫師鍒涗綔鑰呭惂锛�")
                    }, {
                        name: "keywords",
                        content: d()(i = "".concat(r, "瑙嗛,")).call(i, r, "鍙戝竷鐨勮棰�,瑗跨摐瑙嗛,鐢靛奖,鐢佃鍓�,娓告垙,缁艰壓,鏂伴椈,缇庨,鎼炵瑧,鍔ㄦ极,NBA,闊充箰,MV,楂樻竻,vlog,灏戝効,鍐涗簨,浣撹偛,鏃呮父")
                    }, {name: "applicable-device", content: "pc"}],
                    link: [{
                        rel: "canonical",
                        href: globalThis.getFilterXss().filterUrl("https://www.ixigua.com/home/".concat(o, "/"), null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        })
                    }]
                })
            }(P), Q ? v.createElement(pi, {info_REF: z}) : P.user_id ? v.createElement("div", {className: "".concat(T)}, v.createElement(Yn, {
                isUserAuthor: B,
                changeTab: Y,
                headerWrap_Ref: G,
                info_REF: z,
                updateTime: l
            }), v.createElement(mn, {isUserAuthor: B, changeTab: Y, scrollHeightMap_Ref: W})) : null) : null
        };
        Ti.SSRPoker = [function () {
            var e = (0, i.Z)(a().mark((function e(t, n) {
                var i, r, s, l, u, c, d, f, _, v, p, g, b, w, E, y, S, x, T, A, L, Z, N, j, P, I, k, O, U, D, F, V, M,
                    C, R, H, X, B, K, q, G;
                return a().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.ctx, s = t.app, l = t.dispatch, u = n.GetUserRichInfo, c = n.GetAuthorHomeVideoList, d = n.GetAuthorLVideoList, f = n.GetAuthorVideoList, _ = n.GetHotsoonVideoList, v = n.GetFansList, p = n.GetFollowList, g = n.GetFollowSearchList, b = n.searchAuthorShortVideos, w = n.getHotWords, E = n.getVoteLinks, y = [], S = r.params.to_user_id, x = Date.now(), e.next = 7, h().all([u(r, s, {query: {authorId: S}}), r.servicesV2.globalConfig.get()]);
                        case 7:
                            if (T = e.sent, A = (0, o.Z)(T, 2), L = A[0], Z = A[1], r.servicesV2.tea.common.apiDuration({
                                    name: "userDetail.userDetailInfo",
                                    time: Date.now() - x
                                }), N = Z.identity, j = Z.isLogin, P = r.params.tab || "video", I = r.query.keyword, k = j && N.id === String(S) || !1, O = 30, U = "", D = (0, ei.E)(r.headers["user-agent"]).result, "video" === P ? U = "played" === r.query.subtype ? "played" : "recent" : "follow" === P && (U = "asc" === r.query.subtype ? "asc" : "desc", k || (I = "", U = "desc")), y.push(c(r, s, {query: {author_id: S}}).then((function (e) {
                                    var t = e.body.data, n = t.pseriesList, i = t.seriesVideos, o = t.videos;
                                    if (l("SET_HOME_VIDEO_LIST", e.body.data), l("SET_AUTHOR_TABS_SHOW", Si(e.body.data)), l("SET_AUTHOR_PREVIEW_SERIES", n), l("SET_AUTHOR_SERIES_LIST", i), D) {
                                        var r = li(null == o ? void 0 : m()(o).call(o, (function (e) {
                                            return e.publish_time
                                        })));
                                        r && l("SET_SEO_UPDATE_TIME", r)
                                    }
                                }))), F = L.body.data, V = F.UserInfo, M = F.VideoStat, C = F.StickInfo, R = !1, H = Ei(V), R = !H.user_id, X = yi(M), B = X.videoCnt, K = X.lVideoCnt, q = X.shortVideoCnt, G = (null == V || null === (i = V.punish_info) || void 0 === i ? void 0 : i.PunishStatus) === Vn.GLOBAL_BAN, !D) {
                                e.next = 31;
                                break
                            }
                            return e.next = 31, (0, un.m)({
                                dispatch: l,
                                ctx: r,
                                app: s,
                                controllers: {getHotWords: w, getVoteLinks: E}
                            });
                        case 31:
                            return l("SET_AUTHOR_INFO", H), l("SET_AUTHOR_TABS_COUNT", X), l("SET_AUTHOR_STICK_VIDEO", xi(C)), R || G || ("video" === P && B ? I ? y.push(b(r, s, {
                                query: {
                                    keyword: I,
                                    offset: 0,
                                    count: 10,
                                    authorId: S
                                }
                            }).then((function (e) {
                                l("APPEND_AUTHOR_VIDEO_SEARCH_LIST", Pe(e))
                            }))) : "recent" === U ? y.push(f(r, s, {
                                query: {
                                    to_user_id: S,
                                    offset: "0"
                                }
                            }).then((function (e) {
                                var t = e.body.data.videoList;
                                l("SET_AUTHOR_VIDEO_LIST", {data: t, has_more: t.length, offset: O})
                            }))) : "played" === U && y.push(f(r, s, {
                                query: {
                                    to_user_id: S,
                                    offset: "0",
                                    order: "hot"
                                }
                            }).then((function (e) {
                                var t = e.body.data.videoList;
                                l("SET_AUTHOR_PLAYED_VIDEO_LIST", t)
                            }))) : "lvideo" === P && K ? y.push(d(r, s, {
                                query: {
                                    to_user_id: S,
                                    offset: "0"
                                }
                            }).then((function (e) {
                                return l("APPEND_AUTHOR_LVIDEO_LIST", e.body.data)
                            }))) : "hotsoon" === P && q ? y.push(_(r, s, {query: {to_user_id: S}}).then((function (e) {
                                var t = e, n = t.data, i = void 0 === n ? [] : n, o = t.has_more;
                                l("SET_AUTHOR_HOTSOON_LIST", {data: i, has_more: void 0 !== o && o})
                            }))) : "follow" === P ? I ? y.push(g(r, s, {
                                query: {
                                    authorId: S,
                                    keyword: I,
                                    cursor: "0"
                                }
                            }).then((function (e) {
                                return l("APPEND_AUTHOR_FOLLOW_SEARCH_LIST", e)
                            }))) : y.push(p(r, s, {query: {authorId: S, cursor: "0", sortType: U}}).then((function (e) {
                                return l("desc" === U ? "APPEND_AUTHOR_FOLLOW_LIST" : "APPEND_AUTHOR_FOLLOW_ASC_LIST", e)
                            }))) : "fans" === P && y.push(v(r, s, {
                                query: {
                                    authorId: S,
                                    cursor: "0"
                                }
                            }).then((function (e) {
                                return l("APPEND_AUTHOR_FANS_LIST", e)
                            })))), e.next = 37, h().all(y);
                        case 37:
                            return e.abrupt("return", {status: R ? 404 : 200, header: {Vary: "User-Agent"}});
                        case 38:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }(), "GetUserRichInfo", "GetAuthorHomeVideoList", "GetAuthorLVideoList", "GetAuthorVideoList", "GetHotsoonVideoList", "GetFansList", "GetFollowList", "GetFollowSearchList", "searchAuthorShortVideos", "getHotWords", "getVoteLinks"];
        var Ai = (0, b.bZ)([b.VD.AuthorDetailInfo, b.VD.AuthorEnableTabs, b.VD.AuthorHomeVideoList, b.VD.AuthorTabsShow, b.VD.AuthorTabsCount, b.VD.SEOUpdateTime], {
            setAuthorInfo: "SET_AUTHOR_INFO",
            resetAuthorInfo: "RESET_AUTHOR_INFO",
            setAuthorTabsCount: "SET_AUTHOR_TABS_COUNT",
            setAuthorTabsShow: "SET_AUTHOR_TABS_SHOW",
            setAuthorPreviewSeries: "SET_AUTHOR_PREVIEW_SERIES",
            setAuthorSeriesList: "SET_AUTHOR_SERIES_LIST",
            setHomeVideoList: "SET_HOME_VIDEO_LIST",
            setSEOUpdateTime: "SET_SEO_UPDATE_TIME",
            resetHomeVideoList: "RESET_HOME_VIDEO_LIST",
            resetAuthorVideoList: "RESET_AUTHOR_VIDEO_LIST",
            resetPlayedVideoList: "RESET_AUTHOR_PLAYED_VIDEO_LIST",
            resetLVideoList: "RESET_AUTHOR_LVIDEO_LIST",
            resetHotsoonList: "RESET_AUTHOR_HOTSOON_LIST",
            resetPlayedHotsoonList: "RESET_AUTHOR_PLAYED_HOTSOON_LIST"
        })(Ti)
    }, 65634: function (e, t, n) {
        "use strict";
        n.d(t, {
            m: function () {
                return S
            }
        });
        var i = n(59056), o = n(33938), r = n(19623), s = n(63109), a = n.n(s),
            l = (n(66992), n(41539), n(88674), n(78783), n(33948), n(90149)), u = n.n(l), c = n(93476), d = n.n(c),
            f = n(2991), h = n.n(f), _ = n(3649), m = n.n(_), v = n(77766), p = n.n(v), g = n(52726), b = n(38834),
            w = n(68956), E = function (e) {
                return e && e.Math == Math && e
            },
            y = E("object" == (void 0 === u() ? "undefined" : (0, r.Z)(u())) && u()) || E("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || E("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || E("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        y.globalThis = y, y.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var S = function () {
            var e = (0, o.Z)(a().mark((function e(t) {
                var n, o, r, s, l, u, c, f, _, v, E, y, S, x, T, A, L, Z, N, j, P, I, k, O, U, D;
                return a().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return o = (n = t || {}).dispatch, r = n.ctx, s = n.app, l = n.controllers, e.prev = 1, x = "undefined" == typeof window, T = Date.now(), A = x ? [null == l ? void 0 : l.getHotWords(r, s), null == l ? void 0 : l.getVoteLinks(r, s, {
                                query: {
                                    count: 5,
                                    type: "",
                                    url: r && r.hostname + r.path
                                }
                            }), null == r ? void 0 : r.servicesV2.datarocks.getHotspotList()] : [b.Z.getHotWords(), g.Z.getVoteLinks({
                                count: 5,
                                type: "",
                                url: window.location.hostname + window.location.pathname
                            }), g.Z.getHotspots()], e.next = 7, d().all(A);
                        case 7:
                            L = e.sent, Z = (0, i.Z)(L, 3), N = Z[0], j = Z[1], P = Z[2], x ? null == r || r.servicesV2.tea.common.apiDuration({
                                name: "SSR.fetchSEOLinkData",
                                time: Date.now() - T
                            }) : w.Z.common.apiDuration({
                                name: "CSR.fetchSEOLinkData",
                                time: Date.now() - T
                            }), I = x ? null === (u = N.body) || void 0 === u ? void 0 : u.data : null === (c = N.data) || void 0 === c ? void 0 : c.data, k = null == I ? void 0 : h()(I).call(I, (function (e) {
                                return {text: e, link: "https://www.ixigua.com/search/".concat(encodeURIComponent(e))}
                            })), O = x ? null == j || null === (f = j.body) || void 0 === f ? void 0 : f.data : null === (_ = j.data) || void 0 === _ ? void 0 : _.data, U = Math.floor(48 * Math.random()), D = x ? m()(P).call(P, U, U + 2) : null === (v = P.data) || void 0 === v ? void 0 : m()(E = v.data).call(E, U, U + 2), x ? o("SET_SEO_LINKS", m()(y = p()(k).call(k, D, O)).call(y, 0, 10)) : o({
                                type: "SET_SEO_LINKS",
                                payload: m()(S = p()(k).call(k, D, O)).call(S, 0, 10)
                            }), e.next = 24;
                            break;
                        case 21:
                            e.prev = 21, e.t0 = e.catch(1), console.error("request seo links error", e.t0);
                        case 24:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 21]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }()
    }, 63050: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/userdetail_noresult.2076ba45.png"
    }, 14801: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/userdetail_nouser.15949584.png"
    }, 84790: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/liked_bg.fb3eb038.png"
    }
}]);
//# sourceMappingURL=https://sourcemap.ixigua.com/obj/xigua-video-web-pc-sourcemap/xgpc/sourcemap/js/pages-UserDetailV3.4199fa6e27.chunk.js.map