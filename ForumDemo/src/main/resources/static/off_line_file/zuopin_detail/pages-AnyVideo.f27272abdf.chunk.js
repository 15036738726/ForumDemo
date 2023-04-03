(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[8868], {
    16976: function (e, t, n) {
        e.exports = n(1258)
    }, 58317: function (e, t, n) {
        e.exports = n(54408)
    }, 84814: function (e, t, n) {
        "use strict";
        t.ZP = void 0;
        var i = n(67294), o = n(33831);

        function r(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var l, s = e[Symbol.iterator](); !(i = (l = s.next()).done) && (n.push(l.value), !t || n.length !== t); i = !0) ;
                } catch (e) {
                    o = !0, r = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        var s = {
            media: "", matches: !1, onchange: function () {
            }, addListener: function () {
            }, removeListener: function () {
            }, addEventListener: function () {
            }, removeEventListener: function () {
            }, dispatchEvent: function () {
                return !0
            }
        };
        var a = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = (0, i.useState)(t),
                l = r(n, 2), a = l[0], u = l[1], d = (0, o.queryObjectToString)(e);
            return (0, i.useEffect)((function () {
                var e = !0, t = "undefined" == typeof window ? s : window.matchMedia(d), n = function () {
                    e && u(Boolean(t.matches))
                };
                return t.addListener(n), u(t.matches), function () {
                    e = !1, t.removeListener(n)
                }
            }), [d]), a
        };
        t.ZP = a
    }, 45581: function (e, t, n) {
        n(66274), n(77971);
        var i = n(53476);
        e.exports = i
    }, 2046: function (e, t, n) {
        n(66274), n(77971);
        var i = n(80663);
        e.exports = i
    }, 1258: function (e, t, n) {
        var i = n(63698);
        e.exports = i
    }, 54408: function (e, t, n) {
        var i = n(85259);
        e.exports = i
    }, 80663: function (e, t, n) {
        var i = n(21899), o = n(9697), r = n(90953), l = n(99813), s = n(12077), a = l("iterator"), u = i.Object;
        e.exports = function (e) {
            var t = u(e);
            return void 0 !== t[a] || "@@iterator" in t || r(s, o(t))
        }
    }, 63698: function (e, t, n) {
        var i = n(45581);
        n(7634), e.exports = i
    }, 85259: function (e, t, n) {
        var i = n(2046);
        n(7634), e.exports = i
    }, 39654: function (e, t, n) {
        "use strict";
        n.d(t, {
            l: function () {
                return p
            }
        });
        var i = n(33938), o = n(19623), r = n(63109), l = n.n(r), s = n(90149), a = n.n(s), u = n(67209),
            d = function (e) {
                return e && e.Math == Math && e
            },
            c = d("object" == (void 0 === a() ? "undefined" : (0, o.Z)(a())) && a()) || d("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || d("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || d("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        c.globalThis = c, c.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var f = function () {
            var e = (0, i.Z)(l().mark((function e(t) {
                var n, i, o, r, s;
                return l().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.controllers, i = t.ctx, o = t.app, r = t.dispatch, e.prev = 1, !(0, u.E)(i.headers["user-agent"]).result) {
                                e.next = 8;
                                break
                            }
                            return e.next = 6, n.getPresetWord(i, o);
                        case 6:
                            (s = e.sent) && r("SET_SEARCH_PRESET_WORD", s);
                        case 8:
                            e.next = 13;
                            break;
                        case 10:
                            e.prev = 10, e.t0 = e.catch(1), console.log("error", e.t0);
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 10]])
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), p = ["getPresetWord"];
        t.Z = f
    }, 90110: function (e, t, n) {
        "use strict";
        var i = n(19623), o = n(90149), r = n.n(o), l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === r() ? "undefined" : (0, i.Z)(r())) && r()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        }, t.Z = [{icon: n(24694), title: "娴烽噺鐗囧簱", subTitle: "绮鹃€夊奖瑙嗗墽"}, {
            icon: n(4296),
            title: "涓撲韩鎶樻墸",
            subTitle: "浠樿垂鐢靛奖浜崐浠�"
        }, {icon: n(26611), title: "鍏嶅箍鍛婄壒鏉�", subTitle: "璺宠繃鐗囧ご骞垮憡"}]
    }, 28445: function (e, t, n) {
        "use strict";
        var i = n(59056), o = n(19623), r = n(90149), l = n.n(r), s = n(67294), a = function (e) {
                return e && e.Math == Math && e
            },
            u = a("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
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
        };
        t.Z = function () {
            var e = (0, s.useState)(Object.create(null)), t = (0, i.Z)(e, 2)[1];
            return (0, s.useCallback)((function () {
                t(Object.create(null))
            }), [t])
        }
    }, 95830: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            default: function () {
                return Ko
            }
        });
        n(54747);
        var i = n(86902), o = n.n(i), r = n(14310), l = n.n(r), s = n(20116), a = n.n(s), u = n(34074), d = n.n(u),
            c = n(39649), f = n.n(c), p = n(44845), m = n(33938), v = n(79349), g = n(59056), _ = n(19623),
            b = n(63109), h = n.n(b),
            y = (n(41539), n(88674), n(17727), n(74916), n(23123), n(66992), n(78783), n(33948), n(90149)), w = n.n(y),
            I = n(77766), x = n.n(I), Z = n(93476), E = n.n(Z), j = n(2991), P = n.n(j), S = n(67294), N = n(62605),
            T = (n(69600), n(82526), n(41817), n(4723), n(9653), n(78580)), k = n.n(T), F = n(59340), L = n.n(F),
            C = n(51615), M = n(54998), O = n.n(M), R = n(91481), X = n(36154), D = n(73126), V = n(66419), A = n.n(V),
            U = (n(15306), n(92744)), q = n(94184), B = n.n(q), W = n(44999), G = n(41948), H = n(65596), J = n(64239),
            K = function (e) {
                return e && e.Math == Math && e
            },
            Y = K("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || K("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || K("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || K("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Y.globalThis = Y, Y.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var z = function (e) {
            var t = (0, S.useRef)(), n = (0, S.useState)(!0), i = (0, g.Z)(n, 2), o = i[0], r = i[1];
            return (0, S.useLayoutEffect)((function () {
                var n = t.current, i = new IntersectionObserver((function (t) {
                    (0, g.Z)(t, 1)[0].isIntersecting && o && (e && e(), r(!1), i.disconnect())
                }));
                return n && i.observe(n), function () {
                    return i.disconnect()
                }
            }), [t.current]), [t]
        }, $ = n(89654), Q = n(88768), ee = n(75290);

        function te(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : te(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var ie = function (e) {
                return e && e.Math == Math && e
            },
            oe = ie("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || ie("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || ie("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || ie("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        var re = "richPlayCard", le = function (e) {
                var t = e.cover, n = e.title, i = e.duration, o = e.albumId, r = e.episodeId, l = e.groupId,
                    s = e.playCount, a = e.theme, u = e.target, d = e.isActive, c = e.bottomLabel, f = e.topRightStatus,
                    m = e.logPb, v = e.impr_type, _ = e.recommend_type, b = e.onClick, h = e.inView, y = e.parent_impr_type,
                    w = e.parent_group_id, I = e.parent_impr_id, x = e.from_gid, Z = e.isRouterLink, E = {
                        href: globalThis.getFilterXss().filterUrl("", null, {logType: "js.href/src", reportOnly: "all"}),
                        query: {},
                        target: u,
                        isRouterLink: Z
                    }, j = z(h), P = (0, g.Z)(j, 1)[0];
                (0, S.useContext)(ee.Z);
                o ? E = ne(ne({}, E), (0, W.sb)({
                    albumId: o,
                    episodeId: r,
                    gid: l,
                    query: {
                        logPb: m,
                        impr_type: v,
                        recommend_type: _,
                        parent_impr_type: y,
                        parent_group_id: w,
                        parent_impr_id: I,
                        from_gid: x,
                        sourcepage: Q.JG.longvideo
                    }
                })) : E.href = globalThis.getFilterXss().filterUrl((0, W.ZF)({gid: l}).href, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), (0, S.useEffect)((function () {
                    P.current && d && (0, J.Z)(P.current, {
                        block: "center",
                        scrollMode: "if-needed",
                        boundary: function (e) {
                            return !e.classList.contains("ProgramGuide") && "auto" !== getComputedStyle(e)["overflow-y"]
                        }
                    })
                }), [P.current, d]);
                var N = (n || "").replace(/^銆愬畬鏁寸増銆�/, "");
                return S.createElement("div", {
                    className: B()("".concat(re), (0, p.Z)({dark: "dark" === a}, "".concat(re, "--active"), d)),
                    ref: P
                }, S.createElement(H.Z, (0, D.Z)({}, E, {
                    className: "".concat(re, "__left"),
                    title: N,
                    onClick: b
                }), f && S.createElement(G.ZP, {mark: f}), S.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(t, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), alt: N, title: N
                }), S.createElement("div", {className: "".concat(re, "__left__bottomMask")}), !c && !i || d ? null : S.createElement("span", {className: B()("bottomLabel", "color-content-inverse")}, c || (0, U.LU)(i)), d ? S.createElement($.Z, null) : null), S.createElement(H.Z, (0, D.Z)({}, E, {className: "".concat(re, "__right")}), S.createElement("div", {className: "title-container"}, S.createElement("div", {className: "title"}, N)), s && S.createElement("div", {className: "".concat(re, "__playCount")}, (0, U.aD)(s), "鎾斁")))
            }, se = n(45579), ae = n(91899), ue = n(27361), de = n.n(ue), ce = n(16534), fe = n(57119), pe = n(68956),
            me = function (e) {
                return e && e.Math == Math && e
            },
            ve = me("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || me("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || me("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || me("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ve.globalThis = ve, ve.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ge = "richPlaylist", _e = "__lv_detail__", be = function (e) {
                var t = "focus", n = ((0, ae.Z)(), (0, S.useContext)(ee.Z)), i = e.data, o = void 0 === i ? [] : i,
                    r = e.title, l = e.albumId, s = e.episodeId, a = e.className, u = e.isVarietyShow,
                    d = void 0 !== u && u, c = e.isVideoShow, f = void 0 !== c && c, p = e.isDocumentaryShow,
                    m = void 0 !== p && p, v = n.LogInfo_Ref.current, g = v.parent_group_id, _ = v.parent_impr_id,
                    b = v.parent_impr_type;
                v.isFullscreen;
                return S.createElement("div", {className: B()(ge, a)}, r && S.createElement("div", {className: "".concat(ge, "__title")}, r, "(", o.length, ")"), P()(o).call(o, (function (e, i) {
                    var o, a, u, c, p, v, h, y = !1, w = !1;
                    switch (e.episodeType) {
                        case se.Wf.EpisodeTypeXiguaVideoRaw:
                            var I = U.QW.parse(e.rawData || "{}");
                            y = (w = !!I.group_id) && I.group_id === n.groupId, h = {
                                albumId: l,
                                episodeId: s,
                                groupId: I.group_id,
                                title: I.title,
                                duration: I.video_duration,
                                cover: (null === (o = I.large_image_list) || void 0 === o || null === (a = o[0]) || void 0 === a ? void 0 : a.url) || (null === (u = I.middle_image) || void 0 === u ? void 0 : u.url),
                                logPb: I.log_pb || "{}",
                                isActive: y,
                                impr_type: _e,
                                recommend_type: t,
                                parent_group_id: g,
                                parent_impr_id: _,
                                parent_impr_type: b,
                                from_gid: String((null === (c = n.data) || void 0 === c ? void 0 : c.albumInfo.albumId) || ""),
                                onClick: function () {
                                    ce.ZP.clickTidbits({
                                        tidbits_name: r || "",
                                        tidbits_num: i + "",
                                        log_pb: I.log_pb || "{}",
                                        album_id: l,
                                        episode_id: I.group_id
                                    })
                                },
                                bottomLabel: e.bottomLabel
                            };
                            try {
                                h.logPb = L()(I.log_pb)
                            } catch (e) {
                            }
                            break;
                        case se.Wf.EpisodeTypeOfficial:
                            y = !!!n.groupId && String(e.episodeId) === n.episodeId, t = "select", h = {
                                albumId: e.albumId ? String(e.albumId) : "",
                                episodeId: e.episodeId ? String(e.episodeId) : "",
                                groupId: "",
                                title: e.subTitle || e.title,
                                duration: de()(e, "videoInfo.duration", 0),
                                bottomLabel: d || m ? e.bottomLabel : void 0,
                                cover: (0, U.un)({coverList: e.coverList, imageStyle: "horizontal"}),
                                isActive: y,
                                topRightStatus: e.attribute ? String(e.attribute) : void 0,
                                logPb: e.logPb,
                                impr_type: _e,
                                recommend_type: t,
                                parent_group_id: g,
                                parent_impr_id: _,
                                parent_impr_type: b,
                                from_gid: String((null === (p = n.data) || void 0 === p ? void 0 : p.albumInfo.albumId) || ""),
                                onClick: function () {
                                    ce.ZP.clickOfficial({
                                        log_pb: e.logPb,
                                        episode_num: e.seq + "",
                                        album_id: String(e.albumId),
                                        episode_id: String(e.episodeId)
                                    })
                                }
                            };
                            break;
                        case se.Wf.EpisodeTypeTrailer:
                        case se.Wf.EpisodeTypeEdit:
                            t = "edit";
                        case se.Wf.EpisodeTypeFootage:
                            t = "footage";
                        case se.Wf.EpisodeTypeFocus:
                            y = (w = !!e.parentEpisodeId) ? String(e.episodeId) === n.groupId : String(e.episodeId) === n.episodeId;
                            var x = "", Z = "";
                            w ? (x = String(e.parentEpisodeId), Z = String(e.episodeId)) : x = String(e.episodeId), h = {
                                albumId: e.albumId ? String(e.albumId) : "",
                                episodeId: x,
                                groupId: Z,
                                title: e.subTitle || e.title,
                                duration: de()(e, "videoInfo.duration", 0),
                                cover: (0, U.un)({coverList: e.coverList, imageStyle: "horizontal"}),
                                isActive: y,
                                topRightStatus: e.attribute ? String(e.attribute) : void 0,
                                logPb: e.logPb,
                                impr_type: _e,
                                recommend_type: t,
                                parent_group_id: g,
                                parent_impr_id: _,
                                parent_impr_type: b,
                                from_gid: String(null === (v = n.data) || void 0 === v ? void 0 : v.albumInfo.albumId),
                                onClick: function () {
                                    ce.ZP.clickTidbits({
                                        tidbits_name: r || "",
                                        tidbits_num: i + "",
                                        log_pb: e.logPb,
                                        album_id: String(e.albumId),
                                        episode_id: e.episodeId ? String(e.episodeId) : ""
                                    })
                                }
                            };
                            break;
                        default:
                            return null
                    }
                    return h.episodeId ? S.createElement(le, (0, D.Z)({
                        key: i,
                        theme: "dark"
                    }, h, {
                        isRouterLink: (0, fe.Z)(), inView: f ? function () {
                            pe.Z.common.videoShow({log_pb: e.logPb || "{}", rank_in_block: i + 1})
                        } : void 0
                    })) : null
                })), A()({length: 20}))
            }, he = n(56636), ye = n(23647), we = n(15853), Ie = n(54871), xe = n(63952), Ze = n(47157), Ee = n(94614),
            je = function (e) {
                return e && e.Math == Math && e
            },
            Pe = je("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || je("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || je("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || je("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function Se(e) {
            var t = e.preview6min, n = e.className, i = e.loginParams, o = e.episodeProduct, r = (0, Ie._n)(),
                l = (0, Ee.Z)().vipInfo.status === Q._1.VALID, s = t.type === Ze.lx.useTicket,
                a = (0, S.useCallback)((function () {
                    if (r) switch (t.type) {
                        case Ze.lx.bigVip:
                            ye.Z.show();
                            break;
                        case Ze.lx.useTicket:
                            we.Z.show()
                    } else xe.ZP.show(i)
                }), [r, i, t]);
            return s && !o ? null : S.createElement("div", {className: B()("payBtn", n)}, s ? S.createElement(S.Fragment, null, l && o.forVip && S.createElement("i", {className: "payBtn-tag"}, "褰辫浼氬憳鐗规儬"), S.createElement("button", {
                className: "payBtn-common",
                onClick: a
            }, o.price + "鍏冭喘涔版湰鐗�")) : S.createElement("button", {
                className: "payBtn-common",
                onClick: a
            }, "寮€閫氬奖瑙嗕細鍛樺厤璐硅鐪�"))
        }

        Pe.globalThis = Pe, Pe.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ne = n(81497), Te = function (e) {
                return e && e.Math == Math && e
            },
            ke = Te("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Te("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Te("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Te("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        var Fe = "ProgramGuide", Le = {focus: "绮惧僵鐪嬬偣", footage: "鍛ㄨ竟鑺辩诞"}, Ce = function (e) {
                var t = (0, S.useContext)(ee.Z), n = t.data, i = t.albumId, o = t.episodeId, r = t.preview6min,
                    l = t.episodeProduct, s = t.shouldLoadOthers, a = null == n ? void 0 : n.albumInfo,
                    u = null == n ? void 0 : n.blockListOrder, d = null == n ? void 0 : n.playlist, c = (0, S.useRef)(null),
                    f = (0, S.useRef)(null), p = null == a || (0, he.nP)(a.albumTypeList || []);
                return s ? S.createElement("div", {className: B()(Fe, {"playlist-container": p})}, S.createElement("div", {className: B()("".concat(Fe, "__fixHeader"))}, S.createElement("div", {className: "".concat(Fe, "__title")}, S.createElement("span", {className: "".concat(Fe, "__title-span")}, (0, U.V1)(null == a ? void 0 : a.title, null == a ? void 0 : a.languageInfo)), S.createElement("p", {className: "".concat(Fe, "__description font-h4-regular")}, (null == a ? void 0 : a.latestSeq) && (null == a ? void 0 : a.totalEpisodes) && (null == a ? void 0 : a.latestSeq) < (null == a ? void 0 : a.totalEpisodes) && (null == a ? void 0 : a.updateInfo) && S.createElement("span", null, a.updateInfo), (null == a ? void 0 : a.bottomLabel) && S.createElement("span", null, a.bottomLabel)))), S.createElement("div", {
                    className: "".concat(Fe, "__scrollContent"),
                    ref: c
                }, r && S.createElement(Se, {
                    preview6min: r,
                    className: "".concat(Fe, "__payEpisodeBtn"),
                    loginParams: {source: "select_pay_button"},
                    episodeProduct: l
                }), p ? S.createElement(X.ZP, {containerRef: f}) : S.createElement(be, {
                    className: "officialRichPlaylist",
                    isVarietyShow: (0, he.ak)((null == a ? void 0 : a.albumTypeList) || []),
                    isDocumentaryShow: (0, he.vq)((null == a ? void 0 : a.albumTypeList) || []),
                    albumId: i,
                    episodeId: o,
                    data: d || [],
                    isVideoShow: !0
                }), null == u ? void 0 : P()(u).call(u, (function (e) {
                    var n;
                    return S.createElement(be, {
                        key: e,
                        albumId: i,
                        episodeId: o,
                        data: (null === (n = t.data) || void 0 === n ? void 0 : n[e]) || [],
                        title: Le[e],
                        isVideoShow: !0
                    })
                })))) : S.createElement(Ne.F_, {className: B()(Fe, "".concat(Fe, "_skeleton")), count: 12, theme: "dark"})
            }, Me = n(29113), Oe = function (e) {
                return e && e.Math == Math && e
            },
            Re = Oe("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Oe("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Oe("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Oe("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Re.globalThis = Re, Re.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Xe = n(75166), De = function (e) {
                return e && e.Math == Math && e
            },
            Ve = De("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || De("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || De("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || De("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ve.globalThis = Ve, Ve.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ae = "playlist", Ue = 30, qe = function (e) {
            var t = e.total, n = e.currentIndex, i = void 0 === n ? 0 : n, o = function (e) {
                return Math.ceil((e + 1) / Ue) - 1
            }, r = (0, S.useState)(o(i)), l = (0, g.Z)(r, 2), s = (l[0], l[1]);
            return (0, S.useEffect)((function () {
                s(o(i))
            }), [i]), S.createElement("div", {className: "".concat(Ae, "__panel")}, S.createElement(Be, (0, D.Z)({}, e, {
                currentIndex: i,
                startIndex: 0,
                endIndex: t - 1
            })))
        }, Be = function (e) {
            var t, n = e.startIndex, i = e.endIndex, o = e.currentIndex, r = e.onItemClick, l = i - n + 1,
                s = Math.ceil(l / 5);
            return S.createElement("div", {className: "".concat(Ae, "__panel__selectBoard")}, P()(t = A()({length: s})).call(t, (function (e, t) {
                var i;
                return S.createElement("div", {className: "".concat(Ae, "__panel__selectBoard-row")}, P()(i = A()({length: 5})).call(i, (function (e, i) {
                    var s = n + (5 * t + i);
                    return s < l ? S.createElement(We, {
                        onClick: r,
                        active: o === s,
                        key: s,
                        index: s
                    }) : S.createElement("span", {className: "".concat(Ae, "__panel__selectBoard-row-placeholder")})
                })))
            })))
        }, We = function (e) {
            var t, n = (0, S.useContext)(ee.Z), i = n.data, o = n.LogInfo_Ref,
                r = (null == i ? void 0 : i.playlist) || [], l = null == i ? void 0 : i.albumInfo, s = e.active,
                a = e.index, u = r[a], d = a + 1, c = o.current, f = c.parent_group_id, p = c.parent_impr_id,
                m = c.parent_impr_type;
            return u ? S.createElement(H.Z, (0, D.Z)({
                className: B()("".concat(Ae, "__panel__selectItem"), {active: s}),
                title: x()(t = "".concat((null == l ? void 0 : l.title) || "")).call(t, u.bottomLabel || "")
            }, (0, W.sb)({
                albumId: String(u.albumId),
                episodeId: String(u.episodeId),
                query: {
                    logPb: u.logPb,
                    recommend_type: "select",
                    sourcepage: Q.JG.longvideo,
                    impr_type: "__lv_detail__",
                    parent_group_id: f,
                    parent_impr_id: p,
                    parent_impr_type: m,
                    from_gid: String(null == l ? void 0 : l.albumId)
                }
            }), {
                onClick: function () {
                    ce.ZP.clickOfficial({
                        log_pb: u.logPb,
                        episode_num: d + "",
                        album_id: String(u.albumId),
                        episode_id: String(u.episodeId)
                    }), e.onClick && e.onClick()
                }, isRouterLink: (0, fe.Z)(), target: "_self"
            }), u.attribute && S.createElement(G.ZP, {
                mark: String(u.attribute),
                useShortName: !0,
                isForFeed: !0
            }), s ? S.createElement("img", {
                alt: "gif",
                src: globalThis.getFilterXss().filterUrl(Xe, null, {logType: "js.href/src", reportOnly: "all"})
            }) : d) : null
        }, Ge = function (e) {
            var t = (0, S.useContext)(ee.Z).data, n = (null == t ? void 0 : t.playlist) || [], i = (0, Me.Z)();
            return S.createElement("div", {
                className: Ae,
                ref: e.containerRef
            }, n.length > 0 && S.createElement(qe, {total: n.length, currentIndex: i, onItemClick: e.onItemClick}))
        };

        function He(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? He(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : He(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var Ke = function (e) {
                return e && e.Math == Math && e
            },
            Ye = Ke("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Ke("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Ke("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Ke("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ye.globalThis = Ye, Ye.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ze = "richPlayCard", $e = function (e) {
                var t, n = e.cover, i = e.title, o = e.duration, r = e.albumId, l = e.episodeId, s = e.groupId,
                    a = e.playCount, u = e.theme, d = e.target, c = e.isActive, f = e.bottomLabel, m = e.topRightStatus,
                    v = e.logPb, _ = e.impr_type, b = e.recommend_type, h = e.onClick, y = e.inView, w = e.parent_impr_type,
                    I = e.parent_group_id, x = e.parent_impr_id, Z = e.from_gid, E = e.isRouterLink,
                    j = e.showFullScreenList, P = {
                        href: globalThis.getFilterXss().filterUrl("", null, {logType: "js.href/src", reportOnly: "all"}),
                        query: {},
                        target: d,
                        isRouterLink: E
                    }, N = z(y), T = (0, g.Z)(N, 1)[0], k = (0, S.useContext)(ee.Z).isFullscreen;
                r ? P = Je(Je(Je({}, P), (0, W.sb)({
                    albumId: r,
                    episodeId: l,
                    gid: s,
                    query: {
                        logPb: v,
                        impr_type: _,
                        recommend_type: b,
                        parent_impr_type: w,
                        parent_group_id: I,
                        parent_impr_id: x,
                        from_gid: Z,
                        sourcepage: Q.JG.longvideo
                    }
                })), {}, {
                    onClick: function () {
                        h && h()
                    }
                }) : (P.href = globalThis.getFilterXss().filterUrl((0, W.ZF)({gid: s}).href, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), P.onClick = function () {
                    h && h()
                }), (0, S.useEffect)((function () {
                    T.current && c && k && (0, J.Z)(T.current, {
                        block: "center",
                        scrollMode: "if-needed",
                        boundary: function (e) {
                            return !e.classList.contains("ProgramGuide") && "auto" !== getComputedStyle(e)["overflow-y"]
                        }
                    })
                }), [T.current, c, k]);
                var F = (i || "").replace(/^銆愬畬鏁寸増銆�/, "");
                return S.createElement("div", {
                    className: B()("".concat(ze), "fullscreen", (t = {dark: "dark" === u}, (0, p.Z)(t, "".concat(ze, "--active"), c && !j), (0, p.Z)(t, "".concat(ze, "--full--active"), c && j), t)),
                    ref: T
                }, S.createElement(H.Z, (0, D.Z)({}, P, {
                    className: "".concat(ze, "__left"),
                    title: F,
                    onClick: h
                }), m && S.createElement(G.ZP, {mark: m}), S.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(n, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), alt: F, title: F
                }), S.createElement("div", {className: "".concat(ze, "__left__bottomMask")}), !f && !o || j && c ? null : S.createElement("span", {className: B()("bottomLabel")}, f || (0, U.LU)(o)), c ? S.createElement($.Z, null) : null), S.createElement(H.Z, (0, D.Z)({}, P, {className: "".concat(ze, "__right")}), S.createElement("div", {className: "title-container"}, S.createElement("div", {className: "title"}, F)), a && S.createElement("div", {className: "".concat(ze, "__playCount")}, (0, U.aD)(a), "鎾斁")))
            }, Qe = function (e) {
                return e && e.Math == Math && e
            },
            et = Qe("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Qe("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Qe("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Qe("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        et.globalThis = et, et.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var tt = "richPlaylist", nt = "__lv_detail__", it = function (e) {
                var t = "focus", n = ((0, ae.Z)(), (0, S.useContext)(ee.Z)), i = e.data, o = void 0 === i ? [] : i,
                    r = e.title, l = e.albumId, s = e.episodeId, a = e.className, u = e.isVarietyShow,
                    d = void 0 !== u && u, c = e.isVideoShow, f = void 0 !== c && c, p = e.isDocumentaryShow,
                    m = void 0 !== p && p, v = e.showFullScreenList, g = void 0 !== v && v, _ = e.onItemClick,
                    b = n.LogInfo_Ref.current, h = b.parent_group_id, y = b.parent_impr_id, w = b.parent_impr_type;
                return S.createElement("div", {className: B()(tt, a)}, r ? S.createElement("div", {className: "".concat(tt, "__title")}, r, "(", o.length, ")") : null, P()(o).call(o, (function (e, i) {
                    var o, a, u, c, p, v, b, I = !1, x = !1;
                    switch (e.episodeType) {
                        case se.Wf.EpisodeTypeXiguaVideoRaw:
                            var Z = U.QW.parse(e.rawData || "{}");
                            I = (x = !!Z.group_id) && Z.group_id === n.groupId, b = {
                                albumId: l,
                                episodeId: s,
                                groupId: Z.group_id,
                                title: Z.title,
                                duration: Z.video_duration,
                                cover: (null === (o = Z.large_image_list) || void 0 === o || null === (a = o[0]) || void 0 === a ? void 0 : a.url) || (null === (u = Z.middle_image) || void 0 === u ? void 0 : u.url),
                                logPb: Z.log_pb || "{}",
                                isActive: I,
                                impr_type: nt,
                                recommend_type: t,
                                parent_group_id: h,
                                parent_impr_id: y,
                                parent_impr_type: w,
                                from_gid: String((null === (c = n.data) || void 0 === c ? void 0 : c.albumInfo.albumId) || ""),
                                onClick: function () {
                                    ce.ZP.clickTidbits({
                                        tidbits_name: r || "",
                                        tidbits_num: i + "",
                                        log_pb: Z.log_pb || "{}",
                                        album_id: l,
                                        episode_id: Z.group_id
                                    }), _ && _()
                                },
                                bottomLabel: e.bottomLabel,
                                showFullScreenList: g
                            };
                            try {
                                b.logPb = L()(Z.log_pb)
                            } catch (e) {
                            }
                            break;
                        case se.Wf.EpisodeTypeOfficial:
                            I = !!!n.groupId && String(e.episodeId) === n.episodeId, t = "select", b = {
                                albumId: e.albumId ? String(e.albumId) : "",
                                episodeId: e.episodeId ? String(e.episodeId) : "",
                                groupId: "",
                                title: e.subTitle || e.title,
                                duration: de()(e, "videoInfo.duration", 0),
                                bottomLabel: d || m ? e.bottomLabel : void 0,
                                cover: (0, U.un)({coverList: e.coverList, imageStyle: "horizontal"}),
                                isActive: I,
                                topRightStatus: e.attribute ? String(e.attribute) : void 0,
                                logPb: e.logPb,
                                impr_type: nt,
                                recommend_type: t,
                                parent_group_id: h,
                                parent_impr_id: y,
                                parent_impr_type: w,
                                showFullScreenList: g,
                                from_gid: String((null === (p = n.data) || void 0 === p ? void 0 : p.albumInfo.albumId) || ""),
                                onClick: function () {
                                    ce.ZP.clickOfficial({
                                        log_pb: e.logPb,
                                        episode_num: e.seq + "",
                                        album_id: String(e.albumId),
                                        episode_id: String(e.episodeId)
                                    }), _ && _()
                                }
                            };
                            break;
                        case se.Wf.EpisodeTypeTrailer:
                        case se.Wf.EpisodeTypeEdit:
                            t = "edit";
                        case se.Wf.EpisodeTypeFootage:
                            t = "footage";
                        case se.Wf.EpisodeTypeFocus:
                            I = (x = !!e.parentEpisodeId) ? String(e.episodeId) === n.groupId : String(e.episodeId) === n.episodeId;
                            var E = "", j = "";
                            x ? (E = String(e.parentEpisodeId), j = String(e.episodeId)) : E = String(e.episodeId), b = {
                                albumId: e.albumId ? String(e.albumId) : "",
                                episodeId: E,
                                groupId: j,
                                title: e.subTitle || e.title,
                                duration: de()(e, "videoInfo.duration", 0),
                                cover: (0, U.un)({coverList: e.coverList, imageStyle: "horizontal"}),
                                isActive: I,
                                topRightStatus: e.attribute ? String(e.attribute) : void 0,
                                logPb: e.logPb,
                                impr_type: nt,
                                recommend_type: t,
                                parent_group_id: h,
                                parent_impr_id: y,
                                parent_impr_type: w,
                                from_gid: String(null === (v = n.data) || void 0 === v ? void 0 : v.albumInfo.albumId),
                                onClick: function () {
                                    ce.ZP.clickTidbits({
                                        tidbits_name: r || "",
                                        tidbits_num: i + "",
                                        log_pb: e.logPb,
                                        album_id: String(e.albumId),
                                        episode_id: e.episodeId ? String(e.episodeId) : ""
                                    }), _ && _()
                                }
                            };
                            break;
                        default:
                            return null
                    }
                    return b.episodeId ? S.createElement($e, (0, D.Z)({
                        key: i,
                        theme: "dark"
                    }, b, {
                        isRouterLink: (0, fe.Z)(), inView: f ? function () {
                            pe.Z.common.videoShow({log_pb: e.logPb || "{}", rank_in_block: i + 1})
                        } : void 0
                    })) : null
                })), A()({length: 20}))
            }, ot = n(84814), rt = function (e) {
                return e && e.Math == Math && e
            },
            lt = rt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || rt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || rt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || rt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        lt.globalThis = lt, lt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var st = function (e) {
                var t, n, i, o = (0, S.useContext)(ee.Z), r = o.data, l = o.albumId, s = o.LogInfo_Ref,
                    a = null == r ? void 0 : r.albumInfo, u = null == r ? void 0 : r.playlist, d = (0, Me.Z)(),
                    c = Math.floor(d / X._d) * X._d, f = c + X._d - 1, p = u ? u.length - 1 : 0, m = f > p ? p : f,
                    v = s.current, g = v.parent_group_id, _ = v.parent_impr_id, b = v.parent_impr_type,
                    h = (0, ot.ZP)({maxWidth: 1279});
                return S.createElement("ul", {className: "".concat("playlistSkim")}, m - c < 6 ? P()(t = A()({length: m - c + 1})).call(t, (function (e, t) {
                    return S.createElement("li", {key: t, className: B()({active: c + t === d})}, c + t + 1)
                })) : S.createElement(S.Fragment, null, P()(n = A()({length: h ? 3 : 4})).call(n, (function (e, t) {
                    var n, i = c + t, o = null == u ? void 0 : u[i];
                    return S.createElement("li", {
                        key: t,
                        className: B()({active: i === d})
                    }, S.createElement(H.Z, (0, D.Z)({title: x()(n = "".concat((null == a ? void 0 : a.title) || "")).call(n, (null == u ? void 0 : u[t].bottomLabel) || "")}, (0, W.sb)({
                        albumId: l,
                        episodeId: String(null == o ? void 0 : o.episodeId),
                        query: {
                            logPb: (null == o ? void 0 : o.logPb) || "{}",
                            recommend_type: "select",
                            impr_type: "__lv_detail__",
                            sourcepage: Q.JG.longvideo,
                            parent_group_id: g,
                            parent_impr_id: _,
                            parent_impr_type: b,
                            from_gid: String(null == a ? void 0 : a.albumId)
                        }
                    }), {isRouterLink: (0, fe.Z)(), target: "_self"}), i + 1))
                })), S.createElement("li", {onClick: e.onClickMore}, "..."), S.createElement("li", {className: B()({active: m === d})}, S.createElement(H.Z, (0, D.Z)({}, (0, W.sb)({
                    albumId: l,
                    episodeId: String(null == u ? void 0 : u[m].episodeId),
                    query: {
                        logPb: null == u ? void 0 : u[m].logPb,
                        recommend_type: "select",
                        impr_type: "__lv_detail__",
                        sourcepage: Q.JG.longvideo,
                        parent_group_id: g,
                        parent_impr_id: _,
                        parent_impr_type: b,
                        from_gid: String(null == a ? void 0 : a.albumId)
                    }
                }), {
                    isRouterLink: (0, fe.Z)(),
                    title: x()(i = "".concat((null == a ? void 0 : a.title) || "")).call(i, (null == u ? void 0 : u[m].bottomLabel) || "")
                }), m + 1))))
            }, at = n(96453), ut = function (e) {
                return e && e.Math == Math && e
            },
            dt = ut("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || ut("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || ut("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || ut("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        dt.globalThis = dt, dt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ct = "ProgramGuide", ft = function (e) {
                var t = (0, S.useContext)(ee.Z), n = t.data, i = t.albumId, o = t.episodeId, r = t.preview6min,
                    l = t.episodeProduct, s = t.shouldLoadOthers, a = e.handleFullscreenListVisible,
                    u = e.showFullScreenList, d = null == n ? void 0 : n.albumInfo, c = null == n ? void 0 : n.playlist,
                    f = (0, S.useRef)(null), p = (0, S.useRef)(null), m = (0, S.useState)(!1), v = (0, g.Z)(m, 2), _ = v[0],
                    b = (v[1], (0, S.useState)(!1)), h = (0, g.Z)(b, 2),
                    y = (h[0], h[1], null == d || (0, he.nP)(d.albumTypeList || [])), w = y && c && c.length > 1,
                    I = function () {
                        return S.createElement("p", {className: "".concat(ct, "__description font-h4-regular")}, (null == d ? void 0 : d.latestSeq) && (null == d ? void 0 : d.totalEpisodes) && (null == d ? void 0 : d.latestSeq) < (null == d ? void 0 : d.totalEpisodes) && (null == d ? void 0 : d.updateInfo) && S.createElement("span", null, d.updateInfo), (null == d ? void 0 : d.bottomLabel) && S.createElement("span", null, d.bottomLabel))
                    };
                return s ? S.createElement("div", {className: B()(ct, {"playlist-container": y})}, S.createElement("div", {className: B()("".concat(ct, "__fixHeader"))}, S.createElement("div", {className: "".concat(ct, "__title")}, (0, U.V1)(null == d ? void 0 : d.title, null == d ? void 0 : d.languageInfo), !w || u ? I() : null, u ? S.createElement(at.x8P, {
                    className: "".concat(ct, "__close__icon"),
                    height: 22,
                    width: 22,
                    onClick: function () {
                        return a && a(!1)
                    }
                }) : null), w && _ && S.createElement(st, {
                    onClickMore: function () {
                        f.current && f.current.scrollTo({top: 0, behavior: "smooth"})
                    }
                })), S.createElement("div", {
                    className: "".concat(ct, "__scrollContent"),
                    ref: f
                }, r && S.createElement(Se, {
                    preview6min: r,
                    className: "".concat(ct, "__payEpisodeBtn"),
                    loginParams: {source: "select_pay_button"},
                    episodeProduct: l
                }), w && !u ? I() : null, y ? S.createElement(Ge, {
                    containerRef: p, onItemClick: function () {
                        a && a(!1)
                    }
                }) : S.createElement(it, {
                    className: "officialRichPlaylist",
                    isVarietyShow: (0, he.ak)((null == d ? void 0 : d.albumTypeList) || []),
                    isDocumentaryShow: (0, he.vq)((null == d ? void 0 : d.albumTypeList) || []),
                    albumId: i,
                    episodeId: o,
                    data: c || [],
                    isVideoShow: !0,
                    showFullScreenList: u,
                    onItemClick: function () {
                        a && a(!1)
                    }
                }))) : S.createElement(Ne.F_, {className: B()(ct, "".concat(ct, "_skeleton")), count: 12, theme: "dark"})
            }, pt = (n(68309), n(39714), n(56977), n(19742)), mt = n(36265), vt = n(75485), gt = function (e) {
                return e && e.Math == Math && e
            },
            _t = gt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || gt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || gt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || gt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        _t.globalThis = _t, _t.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var bt = function () {
                var e = (0, S.useContext)(ee.Z);
                return e ? {
                    log_pb: e.LogInfo_Ref.current.logPb,
                    episode_id: e.groupId || e.episodeId,
                    album_id: e.albumId
                } : {log_pb: "{}", episode_id: "", album_id: ""}
            }, ht = n(36384), yt = n.n(ht), wt = function (e) {
                return e && e.Math == Math && e
            },
            It = wt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || wt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || wt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || wt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        It.globalThis = It, It.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var xt = function (e) {
                return A()(new (yt())(e)).join(" ")
            }, Zt = function () {
                var e = (0, S.useContext)(ee.Z).data, t = null == e ? void 0 : e.episodeInfo,
                    n = null == e ? void 0 : e.albumInfo,
                    i = (null == t ? void 0 : t.subTitle) || (null == t ? void 0 : t.title) || "",
                    o = (0, S.useMemo)((function () {
                        var e, o, r, l, s = null == t ? void 0 : t.episodeType,
                            a = (null == n ? void 0 : n.albumTypeList) || [], u = (0, U.h2)(null == n ? void 0 : n.seqType),
                            d = (null == t ? void 0 : t.rank) || (null == t ? void 0 : t.seq),
                            c = (0, U.V1)(null == n ? void 0 : n.title, null == n ? void 0 : n.languageInfo),
                            f = (0, he.nP)(a), p = ((0, he.Hi)(a), k()(a).call(a, se.VZ.Movie)), m = (0, he.vq)(a);
                        if (s === se.Wf.EpisodeTypeTrailer) return f ? x()(r = x()(l = "".concat(c, " 绗�")).call(l, d)).call(r, u, "棰勫憡") : xt([c, i]);
                        if (s === se.Wf.EpisodeTypeOfficial) switch (!0) {
                            case f:
                                return x()(e = x()(o = "".concat(c, " 绗�")).call(o, d)).call(e, u);
                            case p:
                                return "".concat(c);
                            case m:
                                return null != n && n.totalEpisodes && n.totalEpisodes <= 1 ? "".concat(c) : c === i ? x()(b = x()(h = "".concat(c, " 绗�")).call(h, d)).call(b, u) : x()(v = x()(g = x()(_ = "".concat(c, " 绗�")).call(_, d)).call(g, u, " ")).call(v, i);
                                var v, g, _, b, h;
                            default:
                                return xt([c, i])
                        }
                        return i
                    }), [n, t, i]);
                return o
            }, Et = function (e) {
                return e && e.Math == Math && e
            },
            jt = Et("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Et("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Et("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Et("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        jt.globalThis = jt, jt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Pt = function (e) {
                var t = e.isFold, n = void 0 === t || t, i = e.text, o = e.onClick;
                return S.createElement("button", {
                    className: "component-detailsEntrance", onClick: function () {
                        o && o(!n)
                    }, tabIndex: 0, "aria-label": "瑙嗛绠€浠�"
                }, S.createElement("span", null, i || "瑙嗛绠€浠�"), S.createElement(at.RkZ, {className: B()({rotate180: !n})}))
            }, St = n(17097), Nt = n(3649), Tt = n.n(Nt), kt = function (e) {
                return e && e.Math == Math && e
            },
            Ft = kt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || kt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || kt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || kt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ft.globalThis = Ft, Ft.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Lt = function () {
                var e, t, n, i, o = (0, S.useContext)(ee.Z).data, r = null == o ? void 0 : o.albumInfo;
                if (null == r) return null;
                var l = r.areaList, s = r.albumTypeList, u = r.year, d = r.tagList,
                    c = P()(e = null != s ? s : []).call(e, (function (e) {
                        return Q.tq[e]
                    }));
                return S.createElement("p", {className: "".concat("teleplayPage__typeDes", "__new__details__item")}, S.createElement("span", null), S.createElement("span", null, Tt()(t = a()(n = x()(i = [(null != d ? d : []).join(" ")]).call(i, (0, v.Z)(c), (0, v.Z)(null != l ? l : []), [u])).call(n, Boolean)).call(t, 0, 6).join(" / ")))
            }, Ct = n(24511), Mt = n(5799), Ot = function (e) {
                return e && e.Math == Math && e
            },
            Rt = Ot("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Ot("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Ot("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Ot("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Rt.globalThis = Rt, Rt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Xt = function () {
            var e, t = (0, S.useContext)(ee.Z), n = t.LogInfo_Ref, i = t.data, o = t.episodeId,
                r = null == i ? void 0 : i.albumInfo;
            return {
                albumtypelist: ((null == r ? void 0 : r.albumTypeList) || []).join(","),
                taglist: ((null == r ? void 0 : r.tagList) || []).join(","),
                author_id: String((null == r || null === (e = r.userInfo) || void 0 === e ? void 0 : e.userId) || ""),
                log_pb: n.current.logPb,
                position: "detail",
                episode_id: o,
                impr_type: n.current.impr_type,
                recommend_type: n.current.recommend_type,
                from_gid: n.current.from_gid
            }
        }, Dt = n(71308), Vt = n(72169);

        function At(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? At(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : At(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var qt = function (e) {
                return e && e.Math == Math && e
            },
            Bt = qt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || qt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || qt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || qt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Bt.globalThis = Bt, Bt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Wt = {
            agree: "icon-thumbup2",
            disagree: "icon-share2",
            tipoff: "icon-report",
            collect: "icon-collection2",
            share: "icon-share2"
        }, Gt = {autoplay: !1, path: n(33597), lastFrame: 25}, Ht = "teleplayPage__interactionZone", Jt = function () {
            var e = (0, S.useContext)(ee.Z), t = e.albumId, n = e.episodeId, i = e.groupId, o = e.data,
                r = null == o ? void 0 : o.albumInfo, l = null == o ? void 0 : o.episodeInfo, s = Zt(),
                a = (0, S.useState)(!1), u = (0, g.Z)(a, 2), d = u[0], c = u[1],
                f = (0, U.r6)(null == r ? void 0 : r.interactionStatus), p = (0, S.useState)(f), m = (0, g.Z)(p, 2),
                v = m[0], _ = m[1], b = Xt(), h = function (e) {
                    ce.ZP.favoriteAction(Ut(Ut({}, b), {}, {action: e ? "rt_favorite" : "rt_unfavorite"}))
                }, y = (0, U.Ye)((function () {
                    return Vt.Z.video.addFavorite({gid: i, album_id: t, episode_id: n}).then((function (e) {
                        var t = e.data;
                        t.data && 0 === t.data.StatusCode && (f || _(!v), h(!v))
                    }))
                }), "favorite"), w = (0, U.Ye)((function () {
                    var e = Dt.zc.LongVideo, n = i || t;
                    Vt.Z.video.deleteFavorite({content_id: n, content_type: e}).then((function (e) {
                        var t = e.data;
                        t.data && 0 === t.data.StatusCode && (f || _(!v), h(!v))
                    }))
                }));
            return S.createElement("div", {className: Ht}, l && S.createElement(S.Fragment, null, S.createElement("div", {className: "".concat(Ht, "__LeftActions")}, S.createElement(Ct.Z, {
                icon: v ? void 0 : S.createElement(at.BYG, {className: "video_action_item-icon video_action_item-icon-with-lottie"}),
                actionIconLookup: Wt,
                type: "collect",
                content: v ? "宸叉敹钘�" : "鏀惰棌",
                isActived: v,
                onClick: v ? w : y,
                className: "video_action_item--collect",
                lottieOptions: Gt,
                role: "radio",
                tabIndex: 0,
                "aria-checked": f
            }), S.createElement(Mt.Z, {
                popupAlign: {points: ["tr", "br"], offset: [0, 5]},
                title: "鎴戞鍦ㄧ湅".concat(s),
                onCopy: function () {
                    ce.ZP.shareToPlatform(Ut(Ut({}, b), {}, {share_platform: "copy"}))
                },
                onQuickShare: function (e) {
                    return ce.ZP.shareToPlatform(Ut(Ut({}, b), {}, {share_platform: e}))
                },
                onPopupVisibleChange: function (e) {
                    c(e)
                },
                getPopupContainer: function () {
                    return document.querySelector("#share-popup-button")
                }
            }, S.createElement(Ct.Z, {
                icon: S.createElement(at.mBz, {className: "video_action_item-icon"}),
                onClick: function () {
                    ce.ZP.clickShareButton(b)
                },
                actionIconLookup: Wt,
                className: "video_action_item--share",
                type: "share",
                content: "鍒嗕韩",
                tabIndex: 0,
                "aria-haspopup": !0,
                "aria-expanded": d,
                id: "share-popup-button"
            })))))
        };

        function Kt(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Yt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Kt(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : Kt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var zt = function (e) {
                return e && e.Math == Math && e
            },
            $t = zt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || zt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || zt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || zt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        $t.globalThis = $t, $t.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Qt = "teleplayPage__Description", en = function (e) {
                var t, n, i, o, r = (0, S.useContext)(ee.Z), l = r.data, s = r.shouldLoadOthers, a = (0, S.useState)(!1),
                    u = (0, g.Z)(a, 2), d = u[0], c = u[1], f = ((0, vt.Z)().globalConfig, (0, Ie.jY)().id), p = bt(),
                    m = Zt(), v = null == l ? void 0 : l.albumInfo,
                    _ = (null == v || null === (t = v.userInfo) || void 0 === t ? void 0 : t.userId) || "", b = (0, pt.O)({
                        defaultValue: de()(v, "userInfo.follow", !1), uid: String(_), onChange: function (e, t) {
                            t || ce.ZP.followAuthorAction(Yt(Yt({}, p), {}, {
                                to_user_id: String(null == v ? void 0 : v.userInfo.userId),
                                action: e ? "follow" : "unfollow"
                            }))
                        }
                    });
                b.isFollow, b.changeFollow;
                if (null == v) return null;
                var h = v.ratingScore, y = v.directorList, w = v.actorList, I = v.intro;
                String(null == v ? void 0 : v.userInfo.userId), (0, S.useMemo)((function () {
                    return v.userInfo ? (0, W.$x)(String(v.userInfo.userId)) : void 0
                }), [null === (n = v.userInfo) || void 0 === n ? void 0 : n.userId]), (0, S.useMemo)((function () {
                    var e;
                    return (0, W.$x)(String(null === (e = v.userInfo) || void 0 === e ? void 0 : e.userId), void 0, {source: "lv_author"})
                }), [null === (i = v.userInfo) || void 0 === i ? void 0 : i.userId]);
                return S.createElement("div", {className: Qt}, S.createElement("div", {className: "".concat(Qt, "__header")}, S.createElement("h1", {className: "title font-h1-bold"}, m), h && h >= 70 && P()(o = (h / 10).toFixed(1).toString().split("")).call(o, (function (e, t) {
                    return "." === e ? S.createElement("span", {
                        key: t,
                        className: "dot"
                    }, ".") : S.createElement("span", {className: "score", key: t}, e)
                }))), S.createElement("div", {className: "".concat(Qt, "_new_tag_wrapper")}, S.createElement("div", {className: "".concat(Qt, "_new_tag_wrapper_left")}, S.createElement(Lt, null), S.createElement(Pt, {
                    isFold: !d,
                    onClick: function () {
                        ce.ZP.clickDesc(Yt({is_fold: !d}, p)), c(!d)
                    }
                })), S.createElement("div", {className: "".concat(Qt, "_new_tag_wrapper_right")}, S.createElement(Jt, null))), s && S.createElement("div", {className: B()("".concat(Qt, "__details"), {hide: !d})}, S.createElement("div", {className: "".concat(Qt, "__details__cover")}, d && S.createElement(mt.Z, {
                    src: globalThis.getFilterXss().filterUrl((0, U.un)({
                        coverList: v.coverList,
                        imageStyle: "vertical"
                    }), null, {logType: "js.href/src", reportOnly: "all"})
                })), S.createElement("div", {className: "".concat(Qt, "__details__text")}, y && y.length && S.createElement("div", {className: "".concat(Qt, "__details__item")}, S.createElement("span", null, "瀵兼紨锛�"), S.createElement("span", null, P()(y).call(y, (function (e) {
                    return e.name
                })).join("銆�"))), w && w.length && S.createElement("div", {className: "".concat(Qt, "__details__item")}, S.createElement("span", null, "涓绘紨锛�"), S.createElement("span", null, P()(w).call(w, (function (e) {
                    return e.name
                })).join("銆�"))), I && S.createElement("div", {
                    className: "".concat(Qt, "__details__item"),
                    tabIndex: 0
                }, S.createElement("span", null, "绠€浠嬶細"), S.createElement("span", null, I)))))
            }, tn = function (e) {
                return e && e.Math == Math && e
            },
            nn = tn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || tn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || tn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || tn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        nn.globalThis = nn, nn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var on = function (e) {
            var t = e.className;
            return S.createElement("div", {className: B()("BU-LvideoPoster", "placeholder", t)})
        }, rn = n(30829);

        function ln(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function sn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ln(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : ln(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var an = function (e) {
                return e && e.Math == Math && e
            },
            un = an("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || an("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || an("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || an("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        un.globalThis = un, un.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var dn = "teleplay__LvideoRecomment", cn = function (e) {
                var t, n = (0, S.useContext)(ee.Z), i = n.data, o = n.LogInfo_Ref, r = n.shouldLoadOthers,
                    l = null == i ? void 0 : i.relatedList, s = rn.Z;
                return S.createElement("div", {className: dn}, S.createElement("div", {className: "".concat(dn, "__title")}, "涓轰綘鎺ㄨ崘"), S.createElement("div", {className: "".concat(dn, "__list")}, r ? l && S.createElement(S.Fragment, null, null == l ? void 0 : P()(l).call(l, (function (e, t) {
                    var n, i = e.albumId, r = e.subTitle, l = e.attribute, a = e.logPb, u = e.languageInfo,
                        d = (e.ratingScore, (0, U.V1)(e.title, u)),
                        c = {isCollected: (0, R.jN)(e.interactionStatus), tagMark: l ? String(l) : void 0};
                    return S.createElement(s, (0, D.Z)({
                        className: "".concat(dn, "__item"),
                        key: String(i),
                        inView: function () {
                            pe.Z.common.videoShow({log_pb: (0, U.ST)(a, "catalog_name", "related"), rank_in_block: t + 1})
                        },
                        title: d,
                        coverURL: (0, U.un)({coverList: e.coverList, imageStyle: "horizontal"}),
                        anchorProps: sn(sn({
                            onClick: function () {
                                ce.ZP.clickLvideoRecommend({album_num: String(t), log_pb: a, album_id: String(i)})
                            }
                        }, (0, W.sb)({
                            albumId: String(e.albumId),
                            query: {
                                logPb: e.logPb,
                                category_name: "related",
                                sourcepage: Q.JG.longvideo,
                                from_gid: o.current.group_id
                            }
                        })), {}, {target: "_self", isRouterLink: (0, fe.Z)()}),
                        videoURL: (null === (n = e.previews) || void 0 === n ? void 0 : n.previewVertical) || void 0,
                        clientShowParams: {log_pb: e.logPb},
                        bottomInfo: S.createElement("div", null, r || "")
                    }, c))
                })), P()(t = A()({length: 20})).call(t, (function (e, t) {
                    return S.createElement(on, {className: "".concat(dn, "__item"), key: t})
                }))) : S.createElement(Ne.F_, {className: "".concat(dn, "__skeleton"), count: 10})))
            }, fn = n(71091), pn = n(81643), mn = n.n(pn), vn = n(98926), gn = n.n(vn), _n = n(7130), bn = n(76523),
            hn = n(62462), yn = n.n(hn), wn = function (e) {
                return e && e.Math == Math && e
            },
            In = wn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || wn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || wn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || wn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        In.globalThis = In, In.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var xn, Zn = n(17032), En = n(28607), jn = function (e) {
                return e && e.Math == Math && e
            },
            Pn = jn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || jn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || jn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || jn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Pn.globalThis = Pn, Pn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Sn = (xn = {}, (0, p.Z)(xn, se.nJ.LogoTypeXiguaDefault, n(14173)), (0, p.Z)(xn, se.nJ.LogoTypeXiguaExclusive, n(92020)), (0, p.Z)(xn, se.nJ.LogoTypeXiguaOrigin, n(43163)), xn),
            Nn = function () {
                var e = (0, S.useContext)(ee.Z).data, t = null == e ? void 0 : e.episodeInfo;
                if (null == t || !t.parentEpisodeId) {
                    var n = (null == t ? void 0 : t.logoType) || se.nJ.LogoTypeXiguaDefault;
                    return Sn[n]
                }
            }, Tn = n(73014), kn = n(68898), Fn = n(29255), Ln = n(12126), Cn = n(17082), Mn = n(32580), On = n(10256),
            Rn = n(41453), Xn = function (e) {
                return e && e.Math == Math && e
            },
            Dn = Xn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Xn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Xn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Xn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Dn.globalThis = Dn, Dn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Vn = function (e) {
                var t, n, i = e.preview6min, o = e.episodeProduct, r = e.afterLogin, l = (0, S.useState)(e.episodeProduct),
                    s = (0, g.Z)(l, 2), a = s[0], u = s[1], d = (0, Ie._n)(), c = (0, S.useState)(""), f = (0, g.Z)(c, 2),
                    p = f[0], m = f[1], v = i.notAllow ? "涓嶆敮鎸佽瘯鐪�" : "璇曠湅缁撴潫",
                    _ = (0, S.useState)(a && 0 !== (null === (t = a.order) || void 0 === t ? void 0 : t.code)),
                    b = (0, g.Z)(_, 2), h = b[0], y = b[1], w = (0, S.useCallback)((function () {
                        m(""), y(!1), Vt.Z.pay.getEpisodeProduct({album_id: i.albumId}).then((function (e) {
                            we.Z._data.product = e, we.Z.update({}), u(e)
                        })).catch((function (e) {
                            return console.log(e)
                        }))
                    }), [i.albumId]);
                return (0, S.useEffect)((function () {
                    we.Z._data.product && u(we.Z._data.product)
                }), [we.Z._data.product]), (0, S.useEffect)((function () {
                    if (null != a && a.order) {
                        var e = 0 !== a.order.code;
                        (0, On.Z)(e ? window.location.href : null == a ? void 0 : a.order.url).then((function (t) {
                            y(e), m(t)
                        })).catch((function (e) {
                            return console.log(e)
                        }))
                    }
                }), [a]), (0, S.useEffect)((function () {
                    var e;
                    if (null != a && null !== (e = a.order) && void 0 !== e && e.id) return (0, Rn.Z)(a.order.id)
                }), [a]), S.createElement("section", {className: B()("playEnding-episodePay", i.notAllow && "playEnding-episodePay-notAllow")}, d ? S.createElement("div", {className: "playEnding-episodePay-content"}, S.createElement("div", {className: "playEnding-episodePay-left"}, S.createElement(Mn.Z, {
                    url: p,
                    error: h,
                    retry: w
                }), S.createElement("span", null, "寰俊/鏀粯瀹濇壂鐮佹敮浠�")), S.createElement("div", {className: "playEnding-episodePay-right"}, S.createElement("p", {className: "playEnding-episodePay-title"}, v), S.createElement("p", {className: "playEnding-episodePay-title"}, "鍥犵増鏉冩柟瑕佹眰锛屾湰鐗囬渶浠樿垂瑙傜湅"), S.createElement("div", {className: "details"}, S.createElement("i", {className: "icon-rmb"}), S.createElement("span", {className: "cost"}, null !== (n = null == a ? void 0 : a.price) && void 0 !== n ? n : "0"), (null == a ? void 0 : a.originPrice) && S.createElement("span", {className: "discount"}, "浼氬憳鐗规儬", S.createElement("del", null, "鍘熶环", a.originPrice, "鍏�"))), S.createElement("p", {className: "tips"}, null == a ? void 0 : a.tips))) : S.createElement("div", {className: "playEnding-episodePay-content unlogin-content"}, S.createElement("p", {className: "playEnding-episodePay-title"}, v, "锛屽洜鐗堟潈鏂硅姹傦紝瀹屾暣鐗堥渶浠樿垂瑙傜湅"), S.createElement(Se, {
                    preview6min: i,
                    loginParams: {source: "screen_pay_button", afterLogin: r},
                    episodeProduct: o
                }), S.createElement("p", {className: "payPlayEnding-loginDiv"}, "浣犲皻鏈櫥褰曪紝璇�", S.createElement("b", {
                    onClick: function () {
                        return xe.ZP.show({source: "screen_login", afterLogin: r})
                    }
                }, "鐧诲綍"))))
            }, An = n(90110), Un = function (e) {
                return e && e.Math == Math && e
            },
            qn = Un("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Un("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Un("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Un("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function Bn(e) {
            var t = e.preview6min, n = e.afterLogin, i = (0, Ie._n)();
            return S.createElement("section", {className: B()("payPlayEnding", t.notAllow && "payPlayEnding-notAllow")}, S.createElement("div", {className: "payPlayEnding-wrapper"}, S.createElement("div", {className: "payPlayEnding-title"}, t.notAllow ? "涓嶆敮鎸佽瘯鐪�" : "璇曠湅缁撴潫", "锛屽紑閫氬奖瑙嗕細鍛樿鐪嬪畬鏁寸増"), S.createElement(Se, {
                preview6min: t,
                loginParams: {source: "screen_pay_button", afterLogin: n}
            }), !i && S.createElement("p", {className: "payPlayEnding-login payPlayEnding-loginDiv"}, "宸叉槸浼氬憳锛岃", S.createElement("b", {
                onClick: function () {
                    return xe.ZP.show({source: "screen_login", afterLogin: n})
                }
            }, "鐧诲綍")), S.createElement("ul", {className: "payPlayEnding-vipRights"}, P()(An.Z).call(An.Z, (function (e) {
                return S.createElement("li", {key: e.title}, S.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(e.icon, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), alt: ""
                }), S.createElement("div", null, S.createElement("div", {className: "title"}, e.title), S.createElement("span", {className: "subtitle"}, e.subTitle)))
            })))))
        }

        qn.globalThis = qn, qn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Wn = n(89972), Gn = n(78606), Hn = function (e) {
                return e && e.Math == Math && e
            },
            Jn = Hn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Hn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Hn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Hn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Jn.globalThis = Jn, Jn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Kn = function (e) {
                return !(null == e || !e.extra) && (Number((0, U.Bz)(e.extra).basicAttr) & se.QS.BasicAttrDrmResource) > 0
            }, Yn = n(67209), zn = n(90057), $n = function (e) {
                return e && e.Math == Math && e
            },
            Qn = $n("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || $n("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || $n("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || $n("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Qn.globalThis = Qn, Qn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ei = function () {
                var e = (0, m.Z)(h().mark((function e() {
                    var t;
                    return h().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, Yn.E)(window.navigator.userAgent).result) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 2:
                                return e.next = 4, (0, zn.A)();
                            case 4:
                                return t = e.sent, e.abrupt("return", !!t);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), ti = n(49378), ni = n(90328), ii = function (e) {
                return e && e.Math == Math && e
            },
            oi = ii("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || ii("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || ii("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || ii("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        oi.globalThis = oi, oi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ri = n(10995), li = n(6639), si = n(10173);

        function ai(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ui(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ai(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : ai(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var di = function (e) {
                return e && e.Math == Math && e
            },
            ci = di("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || di("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || di("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || di("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ci.globalThis = ci, ci.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var fi = n(94529).encryptUtils, pi = function (e) {
            var t;
            return e === se.Wf.EpisodeTypeOfficial ? Zn.Cr.Album : k()(t = [se.Wf.EpisodeTypeFocus, se.Wf.EpisodeTypeEdit, se.Wf.EpisodeTypeFootage]).call(t, e) ? Zn.Cr.Focus : e === se.Wf.EpisodeTypeTrailer ? Zn.Cr.Trailer : Zn.Cr.Video
        }, mi = "teleplay__playerContainer", vi = (0, S.forwardRef)((function (e, t) {
            var n, i, o, r = e.isInputtingComment, l = e.showTheaterDirectTips, s = e.handleFullscreenListVisible,
                a = e.showFullscreenPlugin, u = (0, ae.Z)(), d = (0, S.useContext)(ee.Z), c = d.data, f = d.episodeId,
                p = d.albumId, m = d.groupId, v = d.secondaryId, _ = d.LogInfo_Ref, b = d.setPlayer, h = d.preview6min,
                y = d.episodeProduct, w = d.player, I = d.autoPlay, x = Zt(), Z = (0, si.Z)().from_page,
                E = (0, S.useRef)((function () {
                })), j = null == c ? void 0 : c.episodeInfo.videoInfo, P = Kn(null == c ? void 0 : c.episodeInfo),
                N = (0, Cn.Z)(null != c && null !== (n = c.episodeInfo) && void 0 !== n && n.historyDuration ? Number(null == c || null === (i = c.episodeInfo) || void 0 === i ? void 0 : i.historyDuration) / 1e3 : void 0),
                T = (0, g.Z)(N, 3), k = (T[0], T[1]), F = T[2],
                L = null !== (o = null == j ? void 0 : j.vid) && void 0 !== o ? o : "", C = (0, S.useRef)(L),
                M = (0, S.useState)(), O = (0, g.Z)(M, 2), X = O[0], V = O[1], A = (0, Me.Z)(), U = function () {
                    var e = (0, S.useContext)(ee.Z), t = e.groupId, n = e.data;
                    return (0, S.useMemo)((function () {
                        var e, i;
                        return t && (null == n || n.blockListOrder.some((function (o) {
                            var r;
                            return void 0 !== (i = null === (r = n[o]) || void 0 === r ? void 0 : yn()(r).call(r, (function (e) {
                                return String(e.episodeId) === t
                            }))) && i > -1 && (e = o, !0)
                        }))), {blockListType: e, index: i}
                    }), [t, n])
                }(), q = U.blockListType, W = U.index, G = (0, S.useRef)(null), H = (0, S.useRef)(0),
                J = (0, S.useMemo)((function () {
                    return ce.ZP.createVideoOver()
                }), [C.current]), K = (0, S.useRef)(void 0), Y = (0, Tn.Z)().setTheaterState, z = (0, li.Z)(),
                $ = (0, S.useMemo)((function () {
                    return z && d.isFullscreen
                }), [z, d.isFullscreen]), Q = (0, S.useState)(void 0), te = (0, g.Z)(Q, 2), ne = te[0], ie = te[1];
            (0, S.useEffect)((function () {
                K.current = fi.isEncryptSupported(), ie(!h || !K.current)
            }), [h]), (0, S.useEffect)((function () {
                var e, t;
                j && L && (0, En.SG)({
                    group_id: m || f,
                    remoteProgress: null != c && null !== (e = c.episodeInfo) && void 0 !== e && e.historyDuration ? Number(null == c || null === (t = c.episodeInfo) || void 0 === t ? void 0 : t.historyDuration) : void 0
                }).then((function (e) {
                    C.current = L, k(e || 0)
                }));
                return function () {
                    k(void 0)
                }
            }), [L]), (0, S.useEffect)((function () {
                return V(void 0), function () {
                    H.current = 0
                }
            }), [L]);
            var oe = (0, S.useCallback)((function (e) {
                    var t, n, i, o = "focus";
                    if (e.episodeType) switch (e.episodeType) {
                        case se.Wf.EpisodeTypeFocus:
                            o = "focus";
                            break;
                        case se.Wf.EpisodeTypeEdit:
                            o = "edit";
                            break;
                        case se.Wf.EpisodeTypeFootage:
                            o = "footage";
                            break;
                        case se.Wf.EpisodeTypeOfficial:
                            o = "select"
                    }
                    return {
                        title: String(e.title),
                        subTitle: e.subTitle ? String(e.subTitle) : void 0,
                        cover: null === (t = e.coverList) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.url,
                        episodeId: e.parentEpisodeId ? String(e.parentEpisodeId) : String(e.episodeId),
                        groupId: e.parentEpisodeId ? String(e.episodeId) : void 0,
                        albumId: p,
                        logPb: e.logPb,
                        recommend_type: o,
                        duration: Math.floor((null === (i = e.videoInfo) || void 0 === i ? void 0 : i.duration) || 0)
                    }
                }), [p]), re = (0, S.useCallback)((function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (null != c) {
                        var t, n = c.blockListOrder, i = c.playlist, o = c.relatedList, r = i && A < i.length - 1;
                        if (q && void 0 !== W && null != c && c[q]) {
                            var l = null == c ? void 0 : c[q];
                            if (l && W < l.length - 1) return (t = l[W + 1]) ? ui(ui({}, oe(t)), {}, {isPlayDirectly: !0}) : void 0;
                            var s = mn()(n).call(n, q);
                            if (s < n.length - 1) {
                                var a, u = n[s + 1];
                                return (t = null == c || null === (a = c[u]) || void 0 === a ? void 0 : a[0]) ? ui(ui({}, oe(t)), {}, {isPlayDirectly: !0}) : void 0
                            }
                            if (r) return (t = i && i[A + 1]) ? ui(ui({}, oe(t)), {}, {isPlayDirectly: !0}) : void 0
                        }
                        if (void 0 !== A && !q) {
                            if (!r && n.length > 0 && !d.isFullscreen && z) {
                                var p, m, v;
                                if (t = null == c || null === (p = c[n[0]]) || void 0 === p ? void 0 : p[0], String(null === (m = t) || void 0 === m ? void 0 : m.episodeId) === f) t = null == c || null === (v = c[n[0]]) || void 0 === v ? void 0 : v[1];
                                return t ? ui(ui({}, oe(t)), {}, {
                                    isPlayDirectly: !0,
                                    playNextExplain: "涓轰綘鎺ㄨ崘瑙嗛"
                                }) : void 0
                            }
                            if (!r && n.length > 0 && !z) {
                                var g, _, b;
                                if (t = null == c || null === (g = c[n[0]]) || void 0 === g ? void 0 : g[0], String(null === (_ = t) || void 0 === _ ? void 0 : _.episodeId) === f) t = null == c || null === (b = c[n[0]]) || void 0 === b ? void 0 : b[1];
                                return t ? ui(ui({}, oe(t)), {}, {isPlayDirectly: !0}) : void 0
                            }
                            if (r) return (t = i && i[A + 1]) ? ui(ui({}, oe(t)), {}, {isPlayDirectly: !0}) : void 0
                        }
                        if (e && o) {
                            var h, y, w = o[0];
                            return {
                                title: String(w.title),
                                subTitle: String(w.subTitle),
                                cover: null == w || null === (h = w.coverList) || void 0 === h || null === (y = h[0]) || void 0 === y ? void 0 : y.url,
                                albumId: String(w.albumId),
                                logPb: w.logPb,
                                recommend_type: "recommend_long",
                                duration: w.duration
                            }
                        }
                    }
                }), [q, A, c, oe, W, u.imgDomainList, f, null == c ? void 0 : c.relatedList, null == c ? void 0 : c.playlist, null == c ? void 0 : c.blockListOrder, d.isFullscreen]),
                le = (0, S.useMemo)((function () {
                    return re()
                }), [re]), ue = (0, S.useMemo)((function () {
                    return null == c ? void 0 : c.albumInfo
                }), [null == c ? void 0 : c.albumInfo]), de = e.generatGoNextHanlder, fe = (0, S.useMemo)((function () {
                    return de(le)
                }), [de, le]), pe = (0, S.useMemo)((function () {
                    return re(!1)
                }), [re]), me = ((0, S.useMemo)((function () {
                    return de(pe)
                }), [pe, de]), Nn()), ve = function () {
                    h && (0, R.t_)(Wn.Mh, "1")
                };
            (0, S.useEffect)((function () {
                var e = function () {
                    return (0, R.VV)(Wn.Mh)
                };
                return null == w || w.once("setStartTime", e), function () {
                    null == w || w.off("setStartTime", e)
                }
            }), [w]);
            var ge = (0, S.useCallback)((function (e) {
                    if (h) switch (h.type) {
                        case Ze.lx.useTicket:
                            return S.createElement(Vn, {preview6min: h, episodeProduct: y, afterLogin: ve});
                        case Ze.lx.bigVip:
                            return S.createElement(Bn, {preview6min: h, afterLogin: ve});
                        default:
                            return null
                    }
                    var t = e.diasbleAutoPlay, n = e.isHide, i = t;
                    return i || (i = $), i = i || !I, void 0 !== fe ? S.createElement(bn.Z, (0, D.Z)({}, e, {
                        title: x,
                        onGoNext: fe,
                        nextVideo: le,
                        hasInteraction: !1,
                        diasbleAutoPlay: i,
                        pauseAutoPlay: r,
                        isHide: n,
                        log_pb: _.current.logPb || "{}"
                    })) : null
                }), [x, fe, le, r, h, y]), _e = void 0 !== F.current && L === C.current ? L : "",
                be = (0, Fn.Z)().addPageLeaveTask, he = re(), ye = (0, S.useCallback)((function () {
                    var e = document.querySelector(".teleplayPage__recomment");
                    if (null != e) {
                        var t = e.getBoundingClientRect();
                        return window.innerWidth - (t.x + t.width)
                    }
                    return 310
                }), []), we = (0, S.useMemo)((function () {
                    var e = null == c ? void 0 : c.episodeInfo.rank, t = null == c ? void 0 : c.albumInfo.totalEpisodes;
                    return !e || !t || e < t
                }), [c]), Ie = function (e) {
                    var t = e.episodeInfo, n = e.isFetchFailed, i = e.playErrorInfo, o = (0, Ee.Z)(),
                        r = (0, S.useMemo)((function () {
                            return null != t && 32 == (32 & Number(t.interactionControl))
                        }), [t]), l = (0, S.useMemo)((function () {
                            return !(0, Yn.E)(o.userAgent).result && null != t && r && 1 == (1 & Number(t.playForbiddenReason))
                        }), [r, t, o.userAgent]), s = Kn(t), a = null == t ? void 0 : t.is_ban_mp4_issue,
                        u = (0, S.useState)(!0), d = (0, g.Z)(u, 2), c = d[0], f = d[1], p = (0, S.useState)(!0),
                        m = (0, g.Z)(p, 2), v = m[0], _ = m[1], b = s && !c, h = a && !v, y = r || i || n || b || h,
                        w = (0, ti.Z)();
                    return (0, S.useEffect)((function () {
                        ei().then((function (e) {
                            return f(e)
                        })), _((0, ni.ai)() && (0, ni.qT)())
                    }), [s]), {
                        isRenderFailure: y,
                        playFailure: y ? S.createElement(Gn.Z, {
                            preset: l ? "location" : n ? "fetchFailed" : b || h ? w.isMac ? "mac_drm_unabled" : "win_drm_unabled" : "default",
                            errorInfo: i
                        }) : null
                    }
                }({episodeInfo: null == c ? void 0 : c.episodeInfo, isFetchFailed: d.isFetchFailed, playErrorInfo: X}),
                xe = Ie.isRenderFailure, je = Ie.playFailure;
            return xe ? je : null != h && h.notAllow ? S.createElement("div", {className: "".concat(mi, "__wrapper")}, S.createElement("div", {
                className: "".concat(mi),
                style: {paddingTop: "56.138%", maxWidth: "100%", width: "100%", height: 0, outline: "none"}
            }, ge({
                diasbleAutoPlay: !1, isHide: !1, afterGoNext: function () {
                }, fullscreen: "nofullscreen"
            }))) : S.createElement(Ln.S, {autoRefresh: !0}, S.createElement("div", {
                className: "".concat(mi, "__wrapper"),
                ref: t
            }, void 0 === ne ? S.createElement("div", {className: "empty-player"}) : S.createElement(_n.ZP, {
                className: B()("".concat(mi)),
                fullscreenContainer: "undefined" == typeof window ? void 0 : document.documentElement,
                videoResource: null == c ? void 0 : c.videoResource,
                defaultTheaterMode: d.isTheater,
                onTheaterModeChange: function (e) {
                    d.setIsTheater(e), Y(e)
                },
                defaultFullscreenMode: d.isFullscreen,
                onFullscreenModeChange: function (e) {
                    d.setIsFullscreen(e)
                },
                handleFullscreenListVisible: s,
                showCollectionBtn: a,
                onClickCollectionBtn: function () {
                    var e;
                    ri.Z.fullscreen_collection_btn({
                        author_id: null != c && c.episodeInfo.userInfo ? String(c.episodeInfo.userInfo.userId) : "",
                        is_following: null != c && null !== (e = c.episodeInfo.userInfo) && void 0 !== e && e.follow ? 1 : 0,
                        category_name: "related",
                        group_id: v || p,
                        player_status: d.isFullscreen ? "fullscreen" : "nofullscreen",
                        video_type: "long_select"
                    }), s && s(!0)
                },
                title: x,
                albumInfo: ue,
                showFullscreenAuthor: $,
                showFullscreenTitle: $,
                vid: _e,
                logo: {src: globalThis.getFilterXss().filterUrl(me, null, {logType: "js.href/src", reportOnly: "all"})},
                onBufferIsSufficient: d.onBufferIsSufficient,
                isLVideo: !0,
                isSkipEnd: we,
                extraConfigList: ["skip", "pip"],
                fluid: !0,
                duration: h ? 360 : (null == j ? void 0 : j.duration) || 0,
                onClickNext: fe,
                nextVideoInfo: he,
                onPlayerInit: function (e, t) {
                    G.current = t, b(t)
                },
                lastCurrentTime: F.current,
                showTheaterDirectTips: l,
                onEnded: function () {
                    J.finish(), E.current()
                },
                playLoopList: e.playLoopList,
                playLoopStatus: e.playLoopStatus,
                setPlayLoopStatus: e.setPlayLoopStatus,
                LogInfo_Ref: _,
                onPlay: function () {
                    if (!H.current) {
                        var e = G.current;
                        H.current = Date.now();
                        var t = _.current, n = t.auto, i = t.recommend_type, o = t.impr_type;
                        kn.Z.videoPlay(_.current.logPb || (null == c ? void 0 : c.episodeInfo.logPb));
                        var r = "1" === n ? "" : Z;
                        ce.ZP.videoPlay({
                            album_id: p,
                            auto: "1" === n,
                            episode_id: f,
                            group_id: v || p,
                            group_source: null != c && c.episodeInfo.groupSource ? (null == c ? void 0 : c.episodeInfo.groupSource) + "" : "",
                            log_pb: _.current.logPb || "{}",
                            impr_type: o,
                            recommend_type: i,
                            taglist: ((null == c ? void 0 : c.albumInfo.tagList) || []).join(","),
                            albumtypelist: ((null == c ? void 0 : c.albumInfo.albumTypeList) || []).join(","),
                            author_id: null != c && c.episodeInfo.userInfo ? String(c.episodeInfo.userInfo.userId) : "",
                            player_status: d.isFullscreen ? "fullscreen" : "nofullscreen",
                            from_page: r
                        });
                        var l = "0.0";
                        if (e.duration && !isNaN(e.duration)) {
                            var s = F.current;
                            if (s) {
                                var a = s / e.duration * 100;
                                gn()(a) || (l = a.toFixed(1))
                            }
                        }
                        J.init((function () {
                            var t = "0.0";
                            if (e.duration && !isNaN(e.duration)) {
                                var s = e.currentTime / e.duration * 100;
                                gn()(s) || (t = s.toFixed(1))
                            }
                            return ui(ui({}, null == e ? void 0 : e.xgpcInfo), {}, {
                                album_id: p,
                                auto: "1" === n,
                                duration: Number((1e3 * e.currentTime).toFixed(1)),
                                episode_id: f,
                                from_percent: l,
                                group_id: v || p,
                                group_source: null != c && c.episodeInfo.groupSource ? (null == c ? void 0 : c.episodeInfo.groupSource) + "" : "",
                                percent: t,
                                log_pb: _.current.logPb,
                                impr_type: o,
                                recommend_type: i,
                                taglist: ((null == c ? void 0 : c.albumInfo.tagList) || []).join(","),
                                albumtypelist: ((null == c ? void 0 : c.albumInfo.albumTypeList) || []).join(","),
                                author_id: null != c && c.episodeInfo.userInfo ? String(null == c ? void 0 : c.episodeInfo.userInfo.userId) : "",
                                clarity_choose: e.config.clarityChoose,
                                clarity_actual: e.config.clarityActual,
                                clarity_num: e.config.clarity_num,
                                from_page: r
                            })
                        })), J.start();
                        var u = (0, En.dy)((function () {
                            return m ? {
                                album_id: p,
                                group_id: m,
                                WatchProgress: 1e3 * G.current.currentTime,
                                episode_id: m,
                                rank: (null == c ? void 0 : c.episodeInfo.rank) || 0,
                                subType: pi(null == c ? void 0 : c.episodeInfo.episodeType)
                            } : {
                                album_id: p,
                                group_id: m || f,
                                WatchProgress: 1e3 * G.current.currentTime,
                                episode_id: f,
                                rank: (null == c ? void 0 : c.episodeInfo.rank) || 0,
                                subType: pi(null == c ? void 0 : c.episodeInfo.episodeType)
                            }
                        }), e), g = u.unregisterWathcHistoryHeartBeat, b = u.setWatchProgress;
                        E.current = b, be((function () {
                            g(), J.finish()
                        }))
                    }
                },
                onError: function (e) {
                    return V(e)
                },
                endingRender: ge,
                getPipRight: ye,
                preview6min: h,
                albumId: p,
                episodeId: f,
                isDrm: P,
                preset: ne ? "default" : "mp4Mse",
                playerId: ne ? "player_default" : "mp4-player"
            })))
        })), gi = vi, _i = n(41266), bi = n(60837), hi = n(92133), yi = n(31705), wi = ["isDigg", "info"];

        function Ii(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function xi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ii(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : Ii(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var Zi = function (e) {
                return e && e.Math == Math && e
            },
            Ei = Zi("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Zi("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Zi("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Zi("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ei.globalThis = Ei, Ei.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ji = function (e) {
                var t, n, i, o = e.id, r = e.setIsInputtingComment, l = e.videoAuthorId, s = e.teaParams,
                    a = (0, S.useState)(null), u = (0, g.Z)(a, 2), d = u[0], c = u[1], f = (0, S.useContext)(ee.Z),
                    p = f.LogInfo_Ref, m = f.data, v = function (e) {
                        (0, bi.tm)(e, c)
                    }, _ = Xt();
                return (0, S.useEffect)((function () {
                    o && v({group_id: o, item_id: o})
                }), [o]), S.createElement(hi.ZP.Provider, {
                    value: xi(xi({}, hi.qx), {}, {
                        comment: d,
                        item_id: o,
                        group_id: o,
                        videoAuthorId: l,
                        videoDuration: null !== (t = null == m || null === (n = m.episodeInfo.videoInfo) || void 0 === n ? void 0 : n.duration) && void 0 !== t ? t : 0,
                        log_pb: p.current.logPb,
                        resetLoadComment: v,
                        deleteTopComment: function (e) {
                            (0, bi.Kr)(e, d, c)
                        },
                        changeCommentCount: function (e) {
                            (0, bi.aH)(e, d, c)
                        },
                        onFirstInView: function () {
                            ce.ZP.enter_comment(_)
                        },
                        onInputFocus: function () {
                            r(!0), ce.ZP.focusCommentWrite(_)
                        },
                        onInputBlur: function () {
                            r(!1)
                        },
                        onReply: function (e) {
                            var t = e.info, n = e.imageList, i = n.length || 0, o = 0;
                            n.forEach((function (e) {
                                e.IsGIF && o++
                            })), ce.ZP.commentReply(xi(xi({}, _), {}, {
                                comment_id: String(t.id),
                                comment_user_id: String(t.user_id),
                                with_pic: String(i),
                                with_gif: String(o)
                            }))
                        },
                        onDelete: function (e) {
                            ce.ZP.commentDelete(xi(xi({}, _), e))
                        },
                        onCommentReport: function (e) {
                            var t = e.result, n = e.comment_id, i = e.user_id;
                            ce.ZP.commentReport(xi(xi({}, _), {}, {
                                reason: t.content,
                                comment_id: n,
                                comment_user_id: i + ""
                            }))
                        },
                        onCommentDiggChange: function (e) {
                            var t = e.isDigg, n = e.info, i = (0, _i.Z)(e, wi);
                            ce.ZP.commentDiggAction(xi(xi(xi({}, _), i), {}, {
                                comment_user_id: String(n.user_id),
                                action: t ? "comment_digg" : "comment_undigg"
                            }))
                        },
                        onPostComment: function (e) {
                            ce.ZP.postComment(xi(xi({}, _), e))
                        },
                        teaParams: s
                    })
                }, o && d && S.createElement(yi.Z, {
                    isLVideo: !0,
                    group_source: null !== (i = null == m ? void 0 : m.episodeInfo.groupSource) && void 0 !== i ? i : void 0
                }))
            }, Pi = n(74598), Si = n(86309), Ni = n(52366), Ti = n(85521), ki = n(25047), Fi = n(8306), Li = n(57394),
            Ci = function (e) {
                return e && e.Math == Math && e
            },
            Mi = Ci("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Ci("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Ci("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Ci("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Mi.globalThis = Mi, Mi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Oi = n(58581), Ri = n(42004), Xi = n(27388), Di = n(97052), Vi = n(94399), Ai = n(67225), Ui = n(30973),
            qi = n(59142), Bi = n(19076), Wi = n(65634), Gi = n(39939), Hi = n(78968), Ji = function (e) {
                return e && e.Math == Math && e
            },
            Ki = Ji("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Ji("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Ji("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Ji("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ki.globalThis = Ki, Ki.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Yi = function (e) {
            var t, n, i = (0, S.useContext)(ee.Z), o = i.episodeId, r = i.groupId, l = i.data, s = i.player,
                a = i.LogInfo_Ref, u = e.videoRef, d = null == l ? void 0 : l.albumInfo,
                c = null == l ? void 0 : l.episodeInfo, f = (0, Ie.jY)().id,
                p = String(f) === String((null == l || null === (t = l.albumInfo.userInfo) || void 0 === t ? void 0 : t.userId) || ""),
                m = null == c || 8 == (8 & Number(c.interactionControl)),
                v = ((0, U.r6)(null == d ? void 0 : d.interactionStatus), "string" == typeof a.current.logPb ? JSON.parse(a.current.logPb) : {});
            return S.createElement(S.Fragment, null, S.createElement("div", {className: "".concat("teleplayPage__longVideoDanmubar")}, (null == l ? void 0 : l.key) && S.createElement(Hi.Z, {
                groupId: r || o,
                itemId: r || o,
                player: s,
                log_pb: a.current.logPb || "{}",
                isBan: m,
                isBanSendInCurrentVideo: !1,
                isUserAuthor: p,
                videoRef: u,
                authorId: String((null == l || null === (n = l.albumInfo.userInfo) || void 0 === n ? void 0 : n.userId) || ""),
                categoryName: v.category_name || "related"
            })))
        };

        function zi(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function $i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zi(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : zi(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var Qi = function (e) {
                return e && e.Math == Math && e
            },
            eo = Qi("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Qi("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Qi("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Qi("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        eo.globalThis = eo, eo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var to = function () {
            var e, t, n, i, o, r, l, s, u = (0, S.useContext)(ee.Z), d = u.data, c = u.shouldLoadOthers,
                f = (0, Ie.jY)().id, p = bt(), m = null == d ? void 0 : d.albumInfo,
                v = String((null == m || null === (e = m.userInfo) || void 0 === e ? void 0 : e.userId) || ""),
                g = (0, pt.O)({
                    defaultValue: de()(m, "userInfo.follow", !1), uid: v, onChange: function (e, t) {
                        t || ce.ZP.followAuthorAction($i($i({}, p), {}, {
                            to_user_id: v,
                            action: e ? "follow" : "unfollow"
                        }))
                    }
                }), _ = g.isFollow, b = g.changeFollow;
            if (null == m) return null;
            var h = a()(t = [null != m && null !== (n = m.userInfo) && void 0 !== n && n.followersCount ? S.createElement("span", null, (0, U.aD)(Number(null == m || null === (i = m.userInfo) || void 0 === i ? void 0 : i.followersCount)), "绮変笣") : null]).call(t, Boolean),
                y = f === v, w = function (e) {
                    St.Z.authorInfoClick({
                        log_pb: (0, U.ST)(m.logPb, ["impr_type", "category_name", "page_type", "sourcepage", "author_id"], ["__lv_detail__", "related", "anyVideo", "longvideo", v]),
                        click_position: e,
                        user_status: y ? "author" : "guest",
                        is_following: _ ? 1 : 0,
                        detail_section: "author_detail"
                    })
                }, I = (0, S.useMemo)((function () {
                    return m.userInfo ? (0, W.$x)(v) : void 0
                }), [null === (o = m.userInfo) || void 0 === o ? void 0 : o.userId]), x = (0, S.useMemo)((function () {
                    return (0, W.$x)(v, void 0, {source: "lv_author"})
                }), [null === (r = m.userInfo) || void 0 === r ? void 0 : r.userId]);
            return S.createElement("div", {className: "teleplayPage__author"}, (null == m || null === (l = m.userInfo) || void 0 === l ? void 0 : l.userId) && S.createElement("div", {
                className: "tag author",
                tabIndex: 0,
                "aria-label": m.userInfo.name
            }, S.createElement("a", {
                href: globalThis.getFilterXss().filterUrl(I, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), target: "_blank", onClick: function (e) {
                    e.preventDefault(), window.open(x), ce.ZP.clickAuthor($i({author_id: v}, p)), w("profile")
                }, tabIndex: -1
            }, c ? S.createElement("img", {
                src: globalThis.getFilterXss().filterUrl((0, R.Ph)((null === (s = m.userInfo) || void 0 === s ? void 0 : s.avatarUrl) + ""), null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), alt: ""
            }) : S.createElement(Ne.ZP, {
                circle: !0,
                width: 40,
                height: 40
            })), m.userInfo && S.createElement("div", {className: "name_and_fans"}, S.createElement("a", {
                className: "name",
                href: globalThis.getFilterXss().filterUrl(I, null, {logType: "js.href/src", reportOnly: "all"}),
                target: "_blank",
                onClick: function (e) {
                    e.preventDefault(), window.open(x), ce.ZP.clickAuthor($i({author_id: v}, p)), w("name")
                },
                tabIndex: -1
            }, m.userInfo.name), S.createElement("a", {
                className: "author_statics",
                href: globalThis.getFilterXss().filterUrl(I, null, {logType: "js.href/src", reportOnly: "all"}),
                target: "_blank"
            }, P()(h).call(h, (function (e, t, n) {
                return S.createElement(S.Fragment, {key: t}, e, t !== n.length - 1 && S.createElement("span", null, " 路 "))
            })))), !y && S.createElement(pt.Z, {toUserID: v, isFollow: _, onChange: b})))
        }, no = n(28216), io = n(30589);

        function oo(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ro(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? oo(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : oo(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var lo = function (e) {
                return e && e.Math == Math && e
            },
            so = lo("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || lo("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || lo("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || lo("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        so.globalThis = so, so.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ao = "teleplayPage";

        function uo(e) {
            return co.apply(this, arguments)
        }

        function co() {
            return (co = (0, m.Z)(h().mark((function e(t) {
                var n, i, o, r;
                return h().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.albumId, i = t.episodeId, o = t.episodeOnly, r = {
                                albumId: n,
                                episodeId: i,
                                album: "1",
                                episode: "1"
                            }, o && (r.album = void 0, r.block = "1", r.block_ids = [se.kH.BlockTypeFocus, se.kH.BlockTypeFootage]), e.abrupt("return", fn.ZP.details(r));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function fo(e) {
            return po.apply(this, arguments)
        }

        function po() {
            return (po = (0, m.Z)(h().mark((function e(t) {
                var n, i, o;
                return h().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.albumId, i = t.episodeId, o = t.parentEpisodeId, e.abrupt("return", fn.ZP.details({
                                albumId: n,
                                episodeId: i,
                                parentEpisodeId: o,
                                block: "1"
                            }));
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var mo = function (e) {
            var t, n;
            return (null == e || null === (t = e.albumInfo) || void 0 === t || null === (n = t.albumTypeList) || void 0 === n ? void 0 : k()(n).call(n, se.VZ.Movie)) || !1
        }, vo = function (e, t) {
            return !!e || void 0 !== t && t
        }, go = function (e, t) {
            return {
                side: Fi.MS.Hidden,
                className: B()("teleplay__layout", {"teleplay__layout--fullscreen": t}),
                headerTheme: e && !t ? Fi.it.Dark : Fi.it.Default
            }
        }, _o = function (e) {
            return (null == e ? void 0 : e.key) || ""
        }, bo = [{type: Gi.R.VIDEO_LOOP, name: "鍗曢泦寰幆"}, {type: Gi.R.NO_LOOP, name: "涓嶅惊鐜�"}], ho = function (e) {
            var t, n, i, o, r = e.defaultData, l = e.ids, s = e.setRemindTheater, a = e.seoLinks, u = "";
            l && (u = l.albumId, o = l.secondaryId);
            var d, c, f, v = (0, Ee.Z)().isElectron, _ = (0, si.Z)().from_page, b = (0, no.I0)(), y = (c = (d = {
                albumId: u,
                secondaryId: o
            }).albumId, f = d.secondaryId, [null != c ? c : "", null != f ? f : ""].join("_")), w = (0, S.useRef)(y);
            w.current = y;
            var I = (0, S.useState)((function () {
                    var e = _o(r);
                    return null === r || e !== y ? Xi.k : r
                })), x = (0, g.Z)(I, 2), Z = x[0], j = x[1], P = (0, S.useState)(!1), N = (0, g.Z)(P, 2), T = N[0],
                F = N[1], M = (0, S.useState)(null), X = (0, g.Z)(M, 2), D = X[0], V = X[1], A = (0, S.useState)(!1),
                U = (0, g.Z)(A, 2), q = U[0], G = U[1], H = (0, Tn.Z)().theaterState, J = (0, S.useMemo)((function () {
                    return mo(Z)
                }), [Z]), K = (0, S.useState)(!1), Y = (0, g.Z)(K, 2), z = Y[0], $ = Y[1], te = (0, Di.Z)(),
                ne = (0, S.useState)((function () {
                    return !0 !== te && vo(J, H)
                })), ie = (0, g.Z)(ne, 2), oe = ie[0], re = ie[1], le = (0, S.useState)(!0), ae = (0, g.Z)(le, 2),
                ue = ae[0], pe = ae[1], me = (0, S.useRef)(null);
            (0, S.useEffect)((function () {
                s(oe)
            }), [oe]);
            var ve = (0, S.useState)((0, Ri.uu)()), ge = (0, g.Z)(ve, 2), _e = ge[0], be = ge[1],
                he = (0, S.useState)(!1), Ie = (0, g.Z)(he, 2), xe = Ie[0], je = Ie[1],
                Pe = (0, S.useMemo)((function () {
                    return _o(Z)
                }), [Z]), Se = de()(Z, "episodeInfo.parentEpisodeId"),
                Ne = Se ? de()(Z, "episodeInfo.parentEpisodeId") : de()(Z, "episodeInfo.episodeId"),
                Te = Se ? de()(Z, "episodeInfo.episodeId") : "", ke = go(oe, _e),
                Fe = (0, ki.Z)({defaultConfig: ke, config: ke}), Le = Fe.setLoadingEvent, Me = Fe.globalConfig,
                Oe = Fe.setVideoPlayer, Re = Me.isLogin, Xe = (0, S.useMemo)((function () {
                    return (0, Ai.Z)(null == Z ? void 0 : Z.albumInfo.attribute)
                }), [Z]), De = Xe.isNeedToPay, Ve = Xe.isForVip, Ae = De || Ve,
                Ue = (null == Z || null === (t = Z.episodeInfo) || void 0 === t ? void 0 : t.vipPlayControl) === Vi.JC.Full,
                qe = (0, S.useMemo)((function () {
                    var e, t, n, i, o;
                    if (!Ue && (De || Ve)) {
                        var r, l, s, a, d;
                        if (De && (i = Ze.lx.useTicket), Ve) i = Ze.lx.bigVip, o = (null === (r = Z.episodeInfo) || void 0 === r || null === (l = r.tipList) || void 0 === l || null === (s = l[2].description) || void 0 === s || null === (a = s.schema) || void 0 === a || null === (d = a.match(/[?&]page_id=(\d+)[?&]?/)) || void 0 === d ? void 0 : d[1]) || Ui.G;
                        var c = (null == Z || null === (e = Z.episodeInfo) || void 0 === e ? void 0 : e.vipPlayControl) === Vi.JC.Forbidden,
                            f = c ? 0 : null !== (t = null === (n = Z.videoResource) || void 0 === n ? void 0 : n.normal_6min.official.duration) && void 0 !== t ? t : 0;
                        return {type: i, page_id: o, albumId: u, duration: f, notAllow: c}
                    }
                }), [Z, Ve, De, Ue, u]);
            (0, S.useEffect)((function () {
                var e = (0, Oi.ZP)();
                (0, Oi.ZP)((0, R.RO)((0, R.an)())) === e && kn.Z.videoRecommendClick()
            }), []);
            var Be = (0, S.useState)(!1), We = (0, g.Z)(Be, 2), Ge = We[0], He = We[1],
                Je = (0, S.useRef)((function () {
                })), Ke = (0, S.useCallback)((function () {
                    Je.current()
                }), []), Ye = (0, S.useState)("noLoop"), ze = (0, g.Z)(Ye, 2), $e = ze[0], Qe = ze[1];
            (0, S.useEffect)((function () {
                (0, R.VV)("pSeriesLoop")
            }), []);
            var et = (0, C.k6)();
            (0, S.useEffect)((function () {
                var e = "1" === (0, R.$o)("hasShowTheaterDirectTips");
                J && !e && $(!0)
            }), [J]);
            var tt = function (e) {
                    var t, n, i = (0, Ni.V6)();
                    if (i.logPb) try {
                        n = JSON.parse(i.logPb)
                    } catch (e) {
                        delete i.logPb
                    }
                    n || (i.logPb = e.episodeInfo.logPb, n = JSON.parse(e.episodeInfo.logPb));
                    var o = e.episodeInfo.episodeId,
                        r = null !== (t = e.episodeInfo.userInfo) && void 0 !== t && t.follow ? "1" : "0";
                    if (i = ro(ro({}, i), {}, {episode_id: o}), (n = ro(ro({}, n), {}, {
                            episode_id: o,
                            is_following: r
                        })).detail_type = Q.JG.longvideo, !i.parent_impr_id && !i.parent_impr_type && !i.parent_group_id) {
                        var l = {parent_group_id: n.group_id, parent_impr_type: n.impr_type, parent_impr_id: n.impr_id};
                        i = ro(ro({}, i), l), n = ro(ro({}, n), l)
                    }
                    if (i.from_gid && (n.from_gid = i.from_gid), n.position = "detail", Ae && void 0 === n.is_trial_watch) try {
                        var s = JSON.parse(e.episodeInfo.logPb).is_trial_watch;
                        n.is_trial_watch = s
                    } catch (e) {
                    }
                    return i.logPb = L()(n), i.group_id = n.group_id, i
                }, nt = (0, S.useRef)(""), it = (0, S.useRef)({}), ot = (0, S.useRef)(void 0), rt = (0, li.Z)(),
                lt = (null == Z ? void 0 : Z.playlist) && (null == Z ? void 0 : Z.playlist.length) > 1 && rt && _e;
            (0, S.useEffect)((function () {
                var e = !1;

                function t() {
                    return t = (0, m.Z)(h().mark((function t() {
                        var n, i, r, l, s, a, d, c, f, p, v, g, b, I, x, P, S, N, T, L;
                        return h().wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return i = function () {
                                        return i = (0, m.Z)(h().mark((function t() {
                                            var n, i, r, l;
                                            return h().wrap((function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (i = "", (n = Z) && (i = _o(n)), r = !(!Z || String(Z.albumInfo.albumId) !== u), n && i === y) {
                                                            t.next = 9;
                                                            break
                                                        }
                                                        return l = function () {
                                                            return uo({
                                                                albumId: u,
                                                                episodeId: o,
                                                                episodeOnly: r
                                                            }).then((function (t) {
                                                                if (200 === t.data.code && !e) {
                                                                    var i, o;
                                                                    n = t.data.data;
                                                                    var r = (null === (i = t.data.data.albumInfo) || void 0 === i || null === (o = i.albumTypeList) || void 0 === o ? void 0 : k()(o).call(o, se.VZ.Movie)) || !1;
                                                                    re(!te && vo(r, H))
                                                                }
                                                            }))
                                                        }, F(!1), t.next = 9, Le(l().catch(l).catch((function () {
                                                            F(!0)
                                                        })));
                                                    case 9:
                                                        return t.abrupt("return", ro(ro({}, n), {}, {key: y}));
                                                    case 10:
                                                    case"end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))), i.apply(this, arguments)
                                    }, n = function () {
                                        return i.apply(this, arguments)
                                    }, r = function (e) {
                                        if (e) {
                                            var t = _o(e);
                                            return nt.current !== t ? (nt.current = t, tt(e) || {}) : it.current
                                        }
                                        return {}
                                    }, l = Z, t.next = 6, n();
                                case 6:
                                    s = t.sent, (a = (null == l ? void 0 : l.key) !== s.key && (null == l ? void 0 : l.episodeInfo.albumId) && (null == l ? void 0 : l.episodeInfo.albumId) === (null == s ? void 0 : s.episodeInfo.albumId)) && null != l && l.albumInfo && (s.albumInfo = l.albumInfo), ot.current = ce.ZP.createStayPage(), d = ot.current, s && (c = r(s), f = c.auto, p = c.impr_type, v = c.recommend_type, g = c.parent_group_id, b = c.parent_impr_id, I = c.parent_impr_type, x = Date.now(), P = s.episodeInfo, S = s.albumInfo, N = "1" === f ? "" : _, ce.ZP.goDetail({
                                        album_id: u,
                                        auto: "1" === f,
                                        episode_id: Ne,
                                        group_id: o || u,
                                        group_source: P.groupSource ? P.groupSource + "" : "",
                                        log_pb: c.logPb,
                                        impr_type: p,
                                        recommend_type: v,
                                        taglist: (S.tagList || []).join(","),
                                        albumtypelist: (S.albumTypeList || []).join(","),
                                        author_id: P.userInfo ? String(P.userInfo.userId) : "",
                                        parent_group_id: g,
                                        parent_impr_id: b,
                                        parent_impr_type: I,
                                        from_gid: c.from_gid,
                                        player_status: _e ? "fullscreen" : "nofullscreen",
                                        from_page: N
                                    }), d.init({
                                        album_id: u,
                                        auto: "1" === f,
                                        episode_id: Ne,
                                        group_id: o || u,
                                        group_source: P.groupSource ? P.groupSource + "" : "",
                                        stay_time: Date.now() - x,
                                        log_pb: c.logPb,
                                        impr_type: p,
                                        recommend_type: v,
                                        taglist: (S.tagList || []).join(","),
                                        albumtypelist: (S.albumTypeList || []).join(","),
                                        author_id: P.userInfo ? String(P.userInfo.userId) : "",
                                        parent_group_id: g,
                                        parent_impr_id: b,
                                        parent_impr_type: I,
                                        from_gid: c.from_gid,
                                        category_tag: "",
                                        player_status: _e ? "fullscreen" : "nofullscreen",
                                        from_page: N
                                    }), d.start(), it.current = c, a ? Z && (Z.blockListOrder, Z.footage, Z.focus, T = Z.playlist, L = Z.relatedList, s.playlist = T, s.relatedList = L) : (He(!1), E().race([new (E())((function (e) {
                                        return setTimeout((function () {
                                            e("timeout")
                                        }), 12e3)
                                    })), new (E())((function (e) {
                                        Je.current = e
                                    })), new (E())((function (e) {
                                        32 == (32 & Number(P.interactionControl)) && e()
                                    })), new (E())((function (e) {
                                        null != qe && qe.notAllow && e()
                                    }))]).then((function (e) {
                                        fo({
                                            albumId: u,
                                            episodeId: String(P.episodeId),
                                            parentEpisodeId: P.parentEpisodeId ? String(P.parentEpisodeId) : void 0
                                        }).then((function (e) {
                                            var t;
                                            if (e.data.data.key === w.current || k()(t = e.data.data.key).call(t, w.current)) {
                                                var n = e.data.data, i = n.blockListOrder, o = n.footage, r = n.focus,
                                                    l = n.playlist, a = n.relatedList;
                                                s.blockListOrder = i, s.footage = o, s.focus = r, s.playlist = l, s.relatedList = a, j(ro({}, s)), He(!0)
                                            }
                                        })).catch((function () {
                                            return He(!0)
                                        }))
                                    }))), s !== Z && j(s));
                                case 12:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    }))), t.apply(this, arguments)
                }

                return function () {
                    t.apply(this, arguments)
                }(), function () {
                    var t;
                    e = !0, null === (t = ot.current) || void 0 === t || t.finish()
                }
            }), [y]);
            var st = (0, S.useRef)(null), at = (0, S.useCallback)((function (e) {
                if (e) return function () {
                    var t = Z.albumInfo, n = it.current, i = n.parent_group_id, o = n.parent_impr_id,
                        r = n.parent_impr_type, l = e.albumId === String(t.albumId) ? {
                            parent_group_id: i,
                            parent_impr_id: o,
                            parent_impr_type: r
                        } : {from_gid: e.albumId === String(t.albumId) ? void 0 : String(t.albumId)}, s = (0, W.sb)({
                            albumId: e.albumId,
                            episodeId: e.episodeId,
                            gid: e.groupId,
                            query: ro({logPb: e.logPb, recommend_type: e.recommend_type, sourcepage: Q.JG.longvideo}, l)
                        }), a = s.href, u = s.query, d = (0, Si.G9)({
                            nameSpace: Ni.HB,
                            key: Ni.VD,
                            data: ro(ro({}, u), {}, {auto: "1"}),
                            capacity: 50
                        }), c = new (O())(a).addQuery(d).href();
                    (0, fe.Z)() ? et.push(c) : window.location.href = globalThis.getFilterXss().filterUrl(c, null, {
                        logType: "js.window.location",
                        reportOnly: "all"
                    })
                }
            }), [it.current, Z, et]);
            (0, S.useEffect)((function () {
                document.body.style.overflow = _e ? "Hidden" : ""
            }), [_e]), (0, S.useEffect)((function () {
                !Ge || null != a && a.length || (0, Wi.m)({dispatch: b})
            }), [Ge, a, b]), (0, S.useEffect)((function () {
                return function () {
                    it.current = {}, j(Xi.k)
                }
            }), []);
            var ut = function () {
                var e = (0, S.useState)((function () {
                    return "undefined" != typeof window && window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD
                })), t = (0, g.Z)(e, 2), n = t[0], i = t[1];
                return (0, S.useEffect)((function () {
                    window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD && i(!0)
                }), []), n
            }();
            (0, Li.Z)(st), (0, S.useLayoutEffect)((function () {
                Ve ? ye.Z._data.player = D : De && (we.Z._data.player = D)
            }), [D, Ve, De]);
            var dt = (0, S.useState)(), ct = (0, g.Z)(dt, 2), pt = ct[0], mt = ct[1];
            (0, S.useEffect)((function () {
                Ge && !Ue && (Ve && Re ? Vt.Z.pay.getVipProducts({page_id: qe.page_id}).then((function (e) {
                    var t = e.products;
                    ye.Z._data.products = t, ye.Z.update({})
                })).catch((function (e) {
                    return console.log(e)
                })) : De && Vt.Z.pay.getEpisodeProduct({album_id: u}).then((function (e) {
                    we.Z._data.product = e, we.Z.update({}), mt(e)
                })).catch((function (e) {
                    return console.log(e)
                })))
            }), [Ge, Ue]);
            var vt = function (e) {
                je(e)
            };
            return (0, S.useEffect)((function () {
                D && Oe(D)
            }), [D]), S.createElement("div", {
                className: B()("".concat(ao, "__wrapper"), "new-style new-style-1", {
                    "full-screen": _e,
                    "details-full-screen": lt,
                    "with-top-bar": rt && _e,
                    "with-fullscreen-list": xe
                }), key: ut ? "isNotBackForward" : "isBackForward"
            }, S.createElement(ee.Z.Provider, {
                value: {
                    albumId: u,
                    episodeId: Ne,
                    groupId: Te,
                    secondaryId: null != Z && null !== (n = Z.episodeInfo) && void 0 !== n && n.episodeId ? String(null == Z || null === (i = Z.episodeInfo) || void 0 === i ? void 0 : i.episodeId) : "",
                    isTheater: oe,
                    setIsTheater: re,
                    player: D,
                    setPlayer: V,
                    isFullscreen: _e,
                    setIsFullscreen: be,
                    LogInfo_Ref: it,
                    isFetchFailed: T,
                    shouldLoadOthers: Ge,
                    onBufferIsSufficient: Ke,
                    data: Z,
                    preview6min: qe,
                    episodeProduct: pt,
                    autoPlay: ue,
                    setAutoPlay: pe
                }
            }, S.createElement("div", {className: B()(ao, (0, p.Z)({}, "".concat(ao, "--theater"), oe))}, S.createElement(Pi.Z, null), v && S.createElement(qi.Z, {title: (null == Z ? void 0 : Z.albumInfo.title) || ""}), S.createElement("div", {className: B()("".concat(ao, "__main"))}, S.createElement("div", {
                className: "".concat(ao, "__playerSection"),
                ref: st
            }, S.createElement("div", {className: "".concat(ao, "__playerSection__left")}, S.createElement(gi, {
                isInputtingComment: q,
                showTheaterDirectTips: z,
                generatGoNextHanlder: at,
                playLoopList: bo,
                playLoopStatus: $e,
                ref: me,
                setPlayLoopStatus: function (e) {
                    Qe(e), (0, R.VV)("pSeriesLoop")
                },
                handleFullscreenListVisible: vt,
                showFullscreenPlugin: lt
            })), S.createElement("div", {className: B()("".concat(ao, "__playerSection__right"), {fold: oe})}, S.createElement(Ce, null)), S.createElement("div", {
                className: B()("".concat(ao, "__playerSection__right"), "fullscreen", {
                    fold: oe || xe,
                    "show-detail-full-screen-list": xe,
                    "slide-out": !xe && _e
                })
            }, S.createElement(ft, {
                handleFullscreenListVisible: vt,
                showFullScreenList: xe
            }))), S.createElement("div", {className: "".concat(ao, "_author_and_danmu_wrapper")}, S.createElement("div", {className: "".concat(ao, "_author_and_danmu")}, S.createElement(to, null), S.createElement(Yi, {
                key: Pe,
                videoRef: me
            })))), S.createElement("div", {className: "".concat(ao, "__secondary")}, S.createElement("div", {className: "".concat(ao, "__secondary__left")}, S.createElement(en, null), S.createElement("div", {className: "".concat(ao, "__recomment")}, Ge && S.createElement(ji, {
                id: Te || Ne,
                setIsInputtingComment: G,
                videoAuthorId: de()(Z, "albumInfo.userInfo.userId")
            }))), S.createElement(cn, null)), xe && S.createElement("div", {
                className: "with-fullscreen-list-mask",
                onClick: function () {
                    vt(!1)
                }
            }), null != a && a.length ? S.createElement("div", {className: "".concat(ao, "__footer")}, S.createElement(Bi.Z, {links: a})) : null), S.createElement(Ti.Z, {
                className: "xiguaBuddyPub__Lvideo",
                injectData: {albumId: u, episodeId: Ne}
            })))
        }, yo = function () {
            var e = (0, m.Z)(h().mark((function e(t) {
                var n, i, o, r, l, s, a, u, d, c, f;
                return h().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.ctx, t.app, i = t.dispatch, o = t.params, r = t.videoData, l = o.albumId, s = o.secondaryId, n.query = {
                                    albumId: l,
                                    episodeId: s
                                }, !(a = r)) {
                                e.next = 13;
                                break
                            }
                            return d = mo(a), c = null !== (u = (0, Tn.N)(n.header.cookie)) && void 0 !== u && u, f = vo(d, c), i("SET_LAYOUT_DEFAULT", go(f, !1)), e.abrupt("return", {status: 200});
                        case 13:
                            return (0, io._)(n, {type: "Teleplay"}), e.abrupt("return", {status: 404});
                        case 15:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }();
        ho.SSRPoker = [yo];
        var wo = ho, Io = n(75843), xo = n(21273), Zo = n(15482), Eo = n(7922), jo = function (e) {
                return e && e.Math == Math && e
            },
            Po = jo("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || jo("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || jo("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || jo("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Po.globalThis = Po, Po.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var So = function () {
                return S.createElement("div", {className: "empty-limit"}, S.createElement(Zo.ql, {title: "鏃犳硶瑙傜湅姝よ棰�"}), S.createElement("div", {className: "empty-limit__content"}, S.createElement(at._QO, {
                    width: "88",
                    height: "88",
                    className: "empty-limit__content__svg"
                }), S.createElement("div", {className: "empty-limit__content__txt"}, S.createElement("p", null, "鐢变簬浣滆€呴殣绉佹潈闄愯缃紝鏃犳硶瑙傜湅姝よ棰�"), S.createElement("p", null, "鍙墠寰€棣栭〉鍙戠幇鏇村绮惧僵瑙嗛")), S.createElement(Eo.zx, {
                    className: "empty-limit__content__btn",
                    type: "ghost",
                    onClick: function () {
                        window.open("/", "_self")
                    }
                }, "鍘荤綉绔欓椤�")))
            }, No = n(53263), To = n(39654), ko = n(28445), Fo = n(96251), Lo = function (e) {
                return e && e.Math == Math && e
            },
            Co = Lo("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Lo("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Lo("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Lo("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Co.globalThis = Co, Co.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Mo = function (e) {
                var t, n, i, o = e.remindTheater, r = (0, Tn.Z)(), l = r.theaterState,
                    s = (r.setTheaterState, (0, S.useState)((function () {
                        return void 0 !== l && l
                    }))), a = (0, g.Z)(s, 2), u = a[0], d = (a[1], (0, S.useState)((0, Ri.uu)())), c = (0, g.Z)(d, 2),
                    f = c[0], m = (c[1], (0, S.useMemo)((function () {
                        return function (e) {
                            var t = e.isTheater, n = e.isFullscreen;
                            return {
                                side: Fi.MS.Hidden,
                                headerTheme: t ? Fi.it.Dark : Fi.it.Default,
                                className: B()("projection__layout", {"projection__layout--fullscreen": n})
                            }
                        }({isTheater: u, isFullscreen: f})
                    }), [u, f])),
                    v = null !== (t = null === (n = Fo._o.getMyABInfoV2().LargeRecommendVideoCover) || void 0 === n ? void 0 : n.enable) && void 0 !== t && t,
                    _ = (0, ki.Z)({
                        defaultConfig: m,
                        config: m,
                        sideDefaultShortBorder: m.side === Fi.MS.Hidden ? void 0 : 1440
                    }).globalConfig.isElectron;
                return S.createElement("div", {className: B()("Page_Projection", (i = {}, (0, p.Z)(i, "Page_Projection--theater", o || u), (0, p.Z)(i, "large-recommend-video-cover", v), i))}, _ && S.createElement(qi.Z, null), S.createElement("div", {className: "Page_Projection__layout"}, S.createElement("div", {className: "playerBlock"}, S.createElement("div", {className: "playerSection"}, S.createElement("div", {className: "playerSection__left"}, S.createElement("div", {className: "playerContainer__wrapper"}, S.createElement(_n.ZP, {
                    defaultTheaterMode: o || u,
                    isLVideo: !1,
                    vid: "",
                    duration: 0,
                    endingRender: function () {
                        return null
                    },
                    className: "playerContainer",
                    LogInfo_Ref: {current: void 0},
                    setPlayLoopStatus: function () {
                        return null
                    }
                })))))))
            }, Oo = function (e) {
                return e && e.Math == Math && e
            },
            Ro = Oo("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Oo("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Oo("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Oo("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ro.globalThis = Ro, Ro.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Xo, Do = function (e) {
            if (e && /^\d+$/.test(e)) return e
        }, Vo = function (e) {
            var t, n,
                i = (null == e || null === (t = e.packerData) || void 0 === t || null === (n = t.video) || void 0 === n ? void 0 : n.videoResource) || {},
                o = i.dash, r = i.normal, l = i.vid, s = l,
                a = (null == o ? void 0 : o.subtitle_infos) || (null == r ? void 0 : r.subtitle_infos);
            if (a) {
                for (var u = [], d = 0; d < a.length; d++) {
                    var c = a[d];
                    "webvtt" === c.format && u.push(c.sub_id)
                }
                if (l && s && u.length) return {sub_ids: u.join(), video_id: l, file_id: s}
            }
        }, Ao = n(88973);

        function Uo(e, t) {
            var n = o()(e);
            if (l()) {
                var i = l()(e);
                t && (i = a()(i).call(i, (function (t) {
                    return d()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function qo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Uo(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : Uo(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, d()(n, t))
                }))
            }
            return e
        }

        var Bo = function (e) {
                return e && e.Math == Math && e
            },
            Wo = Bo("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Bo("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Bo("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Bo("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Wo.globalThis = Wo, Wo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Go = function (e) {
            var t, n = e.mixId, i = e.id;
            return x()(t = "".concat(n, "_")).call(t, i)
        }, Ho = {pageType: "EmptyAnyVideo"}, Jo = function () {
            var e, t = (0, no.v9)((function (e) {
                    return e[Io.VD.anyVideo]
                })), n = (0, no.v9)((function (e) {
                    return e[Io.VD.SEOLinks]
                })), i = (0, vt.Z)(), o = (0, S.useState)(t), r = (0, g.Z)(o, 2), l = r[0], s = r[1],
                a = (0, S.useState)(!1), u = (0, g.Z)(a, 2), d = u[0], c = u[1],
                f = null == l ? void 0 : l.gidInformation, p = (0, C.UO)(), m = p.mixId, v = p.id, _ = (0, si.Z)().id,
                b = m || (null == t || null === (e = t.kvideoData) || void 0 === e ? void 0 : e.gid),
                h = Do(_ || v || void 0), y = (0, S.useState)(!t), w = (0, g.Z)(y, 2), I = w[0], x = w[1],
                Z = (0, ko.Z)(), E = (0, S.useMemo)((function () {
                    return "EmptyAnyVideo" === (null == l ? void 0 : l.pageType)
                }), [l]), j = (0, S.useCallback)((function (e) {
                    var t = e.mixId, n = e.id;
                    x(!0), i.setLoading(!0), No.Z.getMixVideo({mixId: t, id: n}).then((function (e) {
                        200 === e.data.code && null != e.data.data.gidInformation && s({
                            gidInformation: e.data.data.gidInformation,
                            queryKey: Go({mixId: t, id: n}),
                            spiderVideo: [],
                            commentForSSR: {}
                        })
                    })).finally((function () {
                        x(!1), i.setLoading(!1)
                    }))
                }), []);
            if ((0, S.useEffect)((function () {
                    if (!b && E) return s(Ho);
                    var e = Go({mixId: b, id: h}),
                        t = !(null != l && l.queryKey) || "undefined_undefined" === (null == l ? void 0 : l.queryKey);
                    if (!l || t && b) return j({mixId: b, id: h});
                    if (l.queryKey !== e && l.gidInformation) {
                        var n = l.queryKey.split("_"), i = (0, g.Z)(n, 1)[0], o = l.gidInformation, r = o.albumId,
                            a = o.pSeriesId, u = o.seriesId;
                        if (b !== i) return x(!0), void s(null);
                        r && (l.gidInformation.episodeId = h, l.queryKey = Go({
                            mixId: b,
                            id: h
                        })), (a || u) && (l.gidInformation.gid = h, l.queryKey = Go({mixId: b, id: h})), s(l), Z()
                    }
                }), [l, b, h, Z, j]), I || E && !b) return S.createElement(Mo, {remindTheater: d});
            if (null != l && l.noLimited) return S.createElement(So, null);
            if (null == f) return S.createElement(xo.Z, null);
            var P = f.gid, T = f.seriesId, k = f.pSeriesId, F = f.albumId, L = f.episodeId;
            return !!F && F ? S.createElement(wo, {
                defaultData: null == l ? void 0 : l.gidInformation.packerData,
                ids: {albumId: F, secondaryId: L},
                setRemindTheater: c,
                seoLinks: n
            }) : S.createElement(N.ZP, {
                ids: {id: P, seriesId: T, pSeriesId: k},
                defaultData: null == l ? void 0 : l.gidInformation.packerData,
                spiderVideo: null == t ? void 0 : t.spiderVideo,
                commentForSSR: null == t ? void 0 : t.commentForSSR,
                subtitleForScrawler: null == t ? void 0 : t.subtitleForScrawler,
                kvideoData: null == t ? void 0 : t.kvideoData,
                seoLinks: n
            })
        };
        Jo.SSRPoker = x()(Xo = [function () {
            var e = (0, m.Z)(h().mark((function e(t, n) {
                var i, o, r, l, s, a, u, d, c, f, p, m, v, _, b, y, w, I, x, Z, j, S, T, k, F, L, C, M, O, R, X, D, V,
                    A, U, q, B, W, G, H, J, K, Y, z;
                return h().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (o = t.ctx, r = t.app, l = t.dispatch, s = (0, To.Z)({
                                    controllers: n,
                                    ctx: o,
                                    app: r,
                                    dispatch: l
                                }), a = n.getMixVideoController, u = n.getCategoryRandomVideo, d = n.getSubtitleForScrawler, c = n.getGidByKeywordController, f = n.GetFeedByChannelIdControllerV2, p = n.getYBanner, m = o.params, v = m.mixId, _ = m.id, b = m.keyword, y = o.query.logTag, w = (0, Oi.ZP)(o.url), I = (0, Yn.E)(o.headers["user-agent"]).result, "kvideo" !== w) {
                                e.next = 19;
                                break
                            }
                            return o.query = qo(qo({}, o.query), {}, {keyword: decodeURIComponent(b)}), e.next = 11, c(o, r);
                        case 11:
                            if (Z = e.sent, !(j = Z.body.data)) {
                                e.next = 17;
                                break
                            }
                            x = j, e.next = 19;
                            break;
                        case 17:
                            return (0, io._)(o, {type: "AnyVideo_kvideo"}), e.abrupt("return", {status: 404});
                        case 19:
                            return S = Do(o.query.id || _ || void 0), T = v || (null === (i = x) || void 0 === i ? void 0 : i.gid), o.query = {
                                mixId: T,
                                logTag: y
                            }, S && (o.query.id = S), e.next = 25, E().all([a(o, r), p(o, r)]);
                        case 25:
                            return k = e.sent, F = (0, g.Z)(k, 2), L = F[0], C = F[1], e.next = 31, s;
                        case 31:
                            if (!L.body.noLimited) {
                                e.next = 35;
                                break
                            }
                            return l("SET_ANYVIDEO", {
                                gidInformation: null,
                                queryKey: Go({mixId: T, id: S}),
                                noLimited: !0
                            }), e.abrupt("return", {status: 200});
                        case 35:
                            if (M = L.body.data.gidInformation, O = L.body.data.commentForSSR, R = (O || {}).data, X = void 0 === R ? [] : R, D = O ? {
                                    comments: null == X ? void 0 : P()(X).call(X, (function (e) {
                                        return e.comment
                                    })),
                                    count: O.total_number,
                                    hasMore: O.has_more,
                                    ban_comment: O.ban_comment,
                                    ban_pic_comment: O.ban_pic_comment > 0
                                } : void 0, !M) {
                                e.next = 87;
                                break
                            }
                            if (null !== (V = L.body.data.gidInformation) && void 0 !== V && V.packerData) {
                                e.next = 44;
                                break
                            }
                            return l("SET_ANYVIDEO", {
                                gidInformation: null,
                                queryKey: Go({mixId: T, id: S})
                            }), (0, io._)(o, {type: "AnyVideo_packerData"}), e.abrupt("return", {status: 404});
                        case 44:
                            if (A = M.albumId, U = M.episodeId, q = M.pSeriesId, B = M.seriesId, W = M.gid, !I) {
                                e.next = 76;
                                break
                            }
                            if ("kvideo" !== w) {
                                e.next = 61;
                                break
                            }
                            return e.next = 49, f(o, r, {
                                query: {
                                    channelId: Ao.Z.RELATED_RECOMMENT,
                                    count: 20,
                                    related_gid: W
                                }
                            });
                        case 49:
                            if (e.t1 = J = e.sent.body.data, e.t0 = null === e.t1, e.t0) {
                                e.next = 53;
                                break
                            }
                            e.t0 = void 0 === J;
                        case 53:
                            if (!e.t0) {
                                e.next = 57;
                                break
                            }
                            e.t2 = void 0, e.next = 58;
                            break;
                        case 57:
                            e.t2 = null === (K = J.channelFeed) || void 0 === K ? void 0 : K.Data;
                        case 58:
                            G = e.t2, e.next = 65;
                            break;
                        case 61:
                            return o.query.gid = W, e.next = 64, u(o, r);
                        case 64:
                            G = e.sent;
                        case 65:
                            if (!(Y = Vo(M))) {
                                e.next = 74;
                                break
                            }
                            return o.query = qo(qo({}, o.query), Y), e.next = 70, d(o, r);
                        case 70:
                            return e.next = 72, e.sent.body.data;
                        case 72:
                            (z = e.sent) && (H = z);
                        case 74:
                            return e.next = 76, (0, Wi.m)({dispatch: l, ctx: o, app: r, controllers: n});
                        case 76:
                            if (l("SET_ANYVIDEO", {
                                    gidInformation: M,
                                    queryKey: Go({mixId: T, id: S}),
                                    spiderVideo: G || [],
                                    commentForSSR: D,
                                    subtitleForScrawler: H,
                                    kvideoData: x,
                                    yBanner: C.body.data
                                }), !A) {
                                e.next = 82;
                                break
                            }
                            return e.next = 80, yo({
                                ctx: o,
                                app: r,
                                dispatch: l,
                                videoData: M.packerData,
                                params: {albumId: A, secondaryId: U}
                            });
                        case 80:
                            e.next = 84;
                            break;
                        case 82:
                            return e.next = 84, (0, N.bv)({
                                ctx: o,
                                app: r,
                                dispatch: l,
                                videoData: M.packerData,
                                params: {id: W, pSeriesId: q, seriesId: B}
                            });
                        case 84:
                            return e.abrupt("return", {status: 200, header: {Vary: "User-Agent"}});
                        case 87:
                            return l("SET_ANYVIDEO", {
                                gidInformation: null,
                                queryKey: Go({mixId: T, id: S}),
                                pageType: w
                            }), (0, io._)(o, {type: "AnyVideo_gidInformation"}), e.abrupt("return", {status: 404});
                        case 90:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }(), "getMixVideoController", "getCategoryRandomVideo", "getSubtitleForScrawler", "getGidByKeywordController", "GetFeedByChannelIdControllerV2", "getHotWords", "getVoteLinks", "getYBanner"]).call(Xo, (0, v.Z)(To.l));
        var Ko = Jo
    }, 30973: function (e, t, n) {
        "use strict";
        n.d(t, {
            G: function () {
                return a
            }
        });
        var i = n(19623), o = n(90149), r = n.n(o), l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === r() ? "undefined" : (0, i.Z)(r())) && r()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        var a = "6858871199737315854"
    }, 33831: function (e, t, n) {
        "use strict";
        var i = n(60530);
        n(41539), n(68309), n(74916), n(15306), n(69600);
        var o = i(n(90149)), r = i(n(3649)), l = i(n(66419)), s = i(n(65420)), a = i(n(58317)), u = i(n(16976)),
            d = i(n(2991)), c = i(n(26295)), f = i(n(77766)), p = i(n(23765)), m = function (e) {
                return e && e.Math == Math && e
            },
            v = m("object" == (void 0 === o.default ? "undefined" : (0, p.default)(o.default)) && o.default) || m("object" == ("undefined" == typeof window ? "undefined" : (0, p.default)(window)) && window) || m("object" == ("undefined" == typeof self ? "undefined" : (0, p.default)(self)) && self) || m("object" == (void 0 === n.g ? "undefined" : (0, p.default)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        v.globalThis = v, v.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, Object.defineProperty(t, "__esModule", {value: !0}), t.queryObjectToString = function (e) {
            var t;
            if ("string" == typeof e) return e;
            return (0, d.default)(t = (0, c.default)(e)).call(t, (function (e) {
                var t, n, i, o = (i = 2, function (e) {
                    if (Array.isArray(e)) return e
                }(n = e) || function (e, t) {
                    if (void 0 !== s.default && (0, a.default)(Object(e))) {
                        var n = [], i = !0, o = !1, r = void 0;
                        try {
                            for (var l, d = (0, u.default)(e); !(i = (l = d.next()).done) && (n.push(l.value), !t || n.length !== t); i = !0) ;
                        } catch (e) {
                            o = !0, r = e
                        } finally {
                            try {
                                i || null == d.return || d.return()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return n
                    }
                }(n, i) || function (e, t) {
                    var n;
                    if (e) {
                        if ("string" == typeof e) return g(e, t);
                        var i = (0, r.default)(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? (0, l.default)(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? g(e, t) : void 0
                    }
                }(n, i) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), d = o[0], c = o[1], p = d.replace(/[A-Z]/g, (function (e) {
                    return "-".concat(e.toLowerCase())
                })).toLowerCase(), m = c;
                return "boolean" == typeof m ? m ? p : "not ".concat(p) : ("number" == typeof m && /[height|width]$/.test(p) && (m = "".concat(m, "px")), (0, f.default)(t = "(".concat(p, ": ")).call(t, m, ")"))
            })).join(" and ")
        }
    }, 92020: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/exclusive.0301c059.svg"
    }, 43163: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/origin.e2a678d4.svg"
    }, 26611: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/ad.4d1d3309.svg"
    }, 4296: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/discount.5d16033d.svg"
    }, 24694: function (e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/movies.cd93d702.svg"
    }
}]);
//# sourceMappingURL=https://sourcemap.ixigua.com/obj/xigua-video-web-pc-sourcemap/xgpc/sourcemap/js/pages-AnyVideo.f27272abdf.chunk.js.map