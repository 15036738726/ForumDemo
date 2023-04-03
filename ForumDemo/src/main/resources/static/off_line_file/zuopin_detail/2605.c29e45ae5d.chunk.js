"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[2605], {
    16534: function (e, t, n) {
        n.d(t, {
            ZP: function () {
                return G
            }
        });
        var i = {};
        n.r(i), n.d(i, {
            clickAuthor: function () {
                return R
            }, clickDesc: function () {
                return L
            }, clickFeedback: function () {
                return D
            }, clickLvideoRecommend: function () {
                return M
            }, clickOfficial: function () {
                return C
            }, clickPlayGuideFold: function () {
                return T
            }, clickShortVideoRecommend: function () {
                return F
            }, clickTidbits: function () {
                return I
            }, followAuthorAction: function () {
                return O
            }
        });
        n(41539), n(54747);
        var r = n(44845), o = n(41266), a = n(19623), l = n(90149), s = n.n(l), u = n(86902), c = n.n(u), d = n(14310),
            f = n.n(d), m = n(20116), p = n.n(m), v = n(34074), h = n.n(v), _ = n(39649), g = n.n(_), b = n(42057),
            y = n(65783), w = n(58581), x = ["action"], Z = ["if_fold"], E = ["action"];

        function j(e, t) {
            var n = c()(e);
            if (f()) {
                var i = f()(e);
                t && (i = p()(i).call(i, (function (t) {
                    return h()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? j(Object(n), !0).forEach((function (t) {
                    (0, r.Z)(e, t, n[t])
                })) : g() ? Object.defineProperties(e, g()(n)) : j(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, h()(n, t))
                }))
            }
            return e
        }

        var k = function (e) {
                return e && e.Math == Math && e
            },
            P = k("object" == (void 0 === s() ? "undefined" : (0, a.Z)(s())) && s()) || k("object" == ("undefined" == typeof window ? "undefined" : (0, a.Z)(window)) && window) || k("object" == ("undefined" == typeof self ? "undefined" : (0, a.Z)(self)) && self) || k("object" == (void 0 === n.g ? "undefined" : (0, a.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        P.globalThis = P, P.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var N = function (e) {
            var t = e.action, n = (0, o.Z)(e, x);
            (0, b.mT)("".concat(t), S(S({}, n), {}, {
                url: window.location.href,
                page_type: (0, w.ZP)(window.location.pathname)
            }))
        }, T = function (e) {
            var t = e.if_fold, n = (0, o.Z)(e, Z);
            N(S({action: "lvideo_detail_fold", if_fold: t ? "1" : "0"}, n))
        }, C = function (e) {
            N(S({action: "lvideo_detail_episode"}, e))
        }, I = function (e) {
            N(S({action: "lvideo_detail_tidbits"}, e))
        }, M = function (e) {
            (0, b.mT)("lvideo_detail_guessyoulike", S(S({}, e), {}, {url: window.location.href}))
        }, F = function (e) {
            (0, b.mT)("lvideo_detail_related", S({}, e))
        }, L = function (e) {
            var t = "0";
            e.is_fold && (t = "1"), N(S(S({action: "lvideo_detail_detailsentrance"}, e), {}, {is_fold: t}))
        }, R = function (e) {
            N(S({action: "lvideo_detail_author_click"}, e))
        }, O = function (e) {
            var t = e.action, n = (0, o.Z)(e, E);
            N(S({action: "rt_".concat(t)}, n))
        }, D = function (e) {
            N(S(S({action: "feedback_click"}, e), {}, {url: window.location.href}))
        }, A = ["auto"], U = ["action"];

        function X(e, t) {
            var n = c()(e);
            if (f()) {
                var i = f()(e);
                t && (i = p()(i).call(i, (function (t) {
                    return h()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? X(Object(n), !0).forEach((function (t) {
                    (0, r.Z)(e, t, n[t])
                })) : g() ? Object.defineProperties(e, g()(n)) : X(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, h()(n, t))
                }))
            }
            return e
        }

        var H = function (e) {
                return e && e.Math == Math && e
            },
            z = H("object" == (void 0 === s() ? "undefined" : (0, a.Z)(s())) && s()) || H("object" == ("undefined" == typeof window ? "undefined" : (0, a.Z)(window)) && window) || H("object" == ("undefined" == typeof self ? "undefined" : (0, a.Z)(self)) && self) || H("object" == (void 0 === n.g ? "undefined" : (0, a.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        z.globalThis = z, z.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var B = function (e) {
            var t = e.action, n = (0, o.Z)(e, U);
            (0, b.mT)("".concat(t), V(V({}, n), {}, {
                url: window.location.href,
                page_type: (0, w.ZP)(window.location.pathname)
            }))
        }, G = V({
            videoPlay: function (e) {
                return y.ZP.videoPlay(e)
            }, createVideoOver: function () {
                return y.ZP.createVideoOver()
            }, goDetail: function (e) {
                return y.ZP.goDetail(e)
            }, createStayPage: function () {
                return y.ZP.createStayPage()
            }, stayPage: function (e) {
                var t = e.auto, n = (0, o.Z)(e, A);
                (0, b.mT)(t ? "stay_page_auto" : "stay_page", V({url: window.location.href}, n))
            }, favoriteAction: function (e) {
                B(e)
            }, clickShareButton: function (e) {
                B(V({action: "click_share_button"}, e))
            }, shareToPlatform: function (e) {
                B(V({action: "rt_share_to_platform"}, e))
            }, report: function (e) {
                B(V({action: "rt_report"}, e))
            }, focusCommentWrite: function (e) {
                B(V({action: "comment_write_button"}, e))
            }, enter_comment: function (e) {
                B(V({action: "enter_comment", enter_type: "click"}, e))
            }, commentReply: function (e) {
                B(V({action: "comment_reply"}, e))
            }, commentDelete: function (e) {
                B(V({action: "comment_delete"}, e))
            }, commentReport: function (e) {
                B(V({action: "comment_report"}, e))
            }, commentDiggAction: function (e) {
                B(e)
            }, postComment: function (e) {
                B(V({action: "rt_post_comment"}, e))
            }
        }, i)
    }, 31705: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return sn
            }
        });
        var i = n(1068), r = n.n(i), o = n(79349), a = n(33938), l = n(68420), s = n(27344), u = n(5281), c = n(90306),
            d = n(3020), f = n(3362), m = n(44845), p = n(19623), v = (n(41539), n(54747), n(63109)), h = n.n(v),
            _ = n(90149), g = n.n(_), b = n(77766), y = n.n(b), w = n(47302), x = n.n(w), Z = n(2991), E = n.n(Z),
            j = n(20116), S = n.n(j), k = n(67294), P = n(23279), N = n.n(P), T = n(54998), C = n.n(T), I = n(44586),
            M = n(92744), F = n(68956), L = n(92133), R = n(59056), O = n(73126), D = n(41266), A = n(94473),
            U = n.n(A), X = n(59340), V = n.n(X), H = n(20455), z = n.n(H), B = n(86902), G = n.n(B), W = n(14310),
            Y = n.n(W), q = n(34074), K = n.n(q), J = n(39649), Q = n.n(J), $ = n(27361), ee = n.n($), te = n(72169),
            ne = n(17097), ie = n(54871), re = n(16289), oe = (n(9653), n(94184)), ae = n.n(oe), le = n(44786),
            se = n(44984), ue = n(51942), ce = n.n(ue), de = n(45697), fe = function (e) {
                return e && e.Math == Math && e
            },
            me = fe("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || fe("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || fe("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || fe("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
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
        var pe = {
                errors: {
                    controlled: "A component is changing a react-medium-image-zoom component from a controlled component to an uncontrolled one. ImageZoom elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component.",
                    uncontrolled: "A component is changing a react-medium-image-zoom component from an uncontrolled component to a controlled one. ImageZoom elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component."
                },
                styles: {
                    image: {cursor: "zoom-in"},
                    zoomImage: {
                        cursor: "zoom-out",
                        position: "absolute",
                        transition: "transform ".concat(300, "ms"),
                        transform: "translate3d(0, 0, 0) scale(1)",
                        transformOrigin: "center center",
                        willChange: "transform, top, left"
                    },
                    zoomContainer: {position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1302},
                    overlay: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: "#fff",
                        opacity: 0,
                        transition: "opacity ".concat(300, "ms"),
                        overflowY: "auto"
                    }
                },
                transitionDuration: 300
            }, ve = function (e) {
                return e && e.Math == Math && e
            },
            he = ve("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || ve("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || ve("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || ve("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        he.globalThis = he, he.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var _e = function (e) {
            var t = e.width, n = e.height, i = e.naturalWidth, r = e.naturalHeight, o = function (e) {
                var t = e.width, n = (e.height, e.zoomMargin);
                return window.innerWidth / (t + n)
            }({width: i, height: r, zoomMargin: e.zoomMargin}), a = i > r ? i / t : r / n;
            return o > 1 ? a : o * a
        }, ge = n(88129), be = n(73935);

        function ye(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !r()) return !1;
                if (r().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(r()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, f.Z)(e);
                if (t) {
                    var o = (0, f.Z)(this).constructor;
                    n = r()(i, arguments, o)
                } else n = i.apply(this, arguments);
                return (0, d.Z)(this, n)
            }
        }

        var we = function (e) {
                return e && e.Math == Math && e
            },
            xe = we("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || we("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || we("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || we("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        xe.globalThis = xe, xe.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ze = function (e) {
            (0, c.Z)(n, e);
            var t = ye(n);

            function n() {
                var e, i, r;
                return (0, l.Z)(this, n), (e = t.call(this)).portal = (i = "div", r = document.createElement(i), document.body.appendChild(r), r), e.unzoom = e.unzoom.bind((0, u.Z)(e)), e._handleScroll = e._handleScroll.bind((0, u.Z)(e)), e._handleKeyDown = e._handleKeyDown.bind((0, u.Z)(e)), e._handleResize = e._handleResize.bind((0, u.Z)(e)), e._handleTouchStart = e._handleTouchStart.bind((0, u.Z)(e)), e._handleTouchMove = e._handleTouchMove.bind((0, u.Z)(e)), e._handleTouchEnd = e._handleTouchEnd.bind((0, u.Z)(e)), e
            }

            return (0, s.Z)(n, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.pageYOffset = window.pageYOffset, this.loadTimeout = setTimeout((function () {
                        window.addEventListener("keydown", e._handleKeyDown), window.addEventListener("ontouchstart", e._handleTouchStart), window.addEventListener("ontouchmove", e._handleTouchMove), window.addEventListener("ontouchend", e._handleTouchEnd), window.addEventListener("ontouchcancel", e._handleTouchEnd), window.addEventListener("resize", e._handleResize)
                    }), pe.transitionDuration)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    var e;
                    clearTimeout(this.loadTimeout), window.removeEventListener("keydown", this._handleKeyDown), window.removeEventListener("ontouchstart", this._handleTouchStart), window.removeEventListener("ontouchmove", this._handleTouchMove), window.removeEventListener("ontouchend", this._handleTouchEnd), window.removeEventListener("ontouchcancel", this._handleTouchEnd), window.removeEventListener("resize", this._handleResize), e = this.portal, document.body.removeChild(e)
                }
            }, {
                key: "render", value: function () {
                    return this.portal ? (0, be.createPortal)(k.createElement("div", {onClick: this.unzoom}, this._cloneChild()), this.portal) : null
                }
            }, {
                key: "unzoom", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.force,
                        n = e.allowRefocus;
                    return this.props.controlledEventFn && !t ? this.props.controlledEventFn() : this.child.unzoom(n)
                }
            }, {
                key: "_cloneChild", value: function () {
                    var e = this;
                    return k.cloneElement(k.Children.only(this.props.children), {
                        ref: function (t) {
                            e.child = t
                        }
                    })
                }
            }, {
                key: "_handleKeyDown", value: function (e) {
                    if ((0, ge.id)(e)) e.preventDefault(); else {
                        var t = this.props.allowAccessibilityClose && (0, ge.Uf)(e), n = (0, ge.$o)(e);
                        t && e.preventDefault(), (t || n) && this.unzoom({allowRefocus: !0})
                    }
                }
            }, {
                key: "_handleResize", value: function () {
                    this.forceUpdate()
                }
            }, {
                key: "_handleScroll", value: function () {
                    this.forceUpdate(), Math.abs(window.pageYOffset - this.pageYOffset) > 10 && this.unzoom()
                }
            }, {
                key: "_handleTouchStart", value: function (e) {
                    this.yTouchPosition = e.touches[0].clientY
                }
            }, {
                key: "_handleTouchMove", value: function (e) {
                    this.forceUpdate(), Math.abs(e.touches[0].clientY - this.yTouchPosition) > 10 && this.unzoom()
                }
            }, {
                key: "_handleTouchEnd", value: function () {
                    delete this.yTouchPosition
                }
            }]), n
        }(k.Component);

        function Ee(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !r()) return !1;
                if (r().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(r()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, f.Z)(e);
                if (t) {
                    var o = (0, f.Z)(this).constructor;
                    n = r()(i, arguments, o)
                } else n = i.apply(this, arguments);
                return (0, d.Z)(this, n)
            }
        }

        Ze.propTypes = {children: de.element.isRequired, getControlledEventFn: de.func};
        var je = function (e) {
                return e && e.Math == Math && e
            },
            Se = je("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || je("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || je("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || je("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Se.globalThis = Se, Se.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ke = function (e) {
            (0, c.Z)(n, e);
            var t = Ee(n);

            function n(e) {
                var i;
                return (0, l.Z)(this, n), (i = t.call(this, e)).state = {isMounted: !1}, i
            }

            return (0, s.Z)(n, [{
                key: "componentDidMount", value: function () {
                    this.setState({isMounted: !0})
                }
            }, {
                key: "render", value: function () {
                    return k.createElement("div", {style: this._getStyle()}, this.props.children)
                }
            }, {
                key: "_getStyle", value: function () {
                    var e = 1 & (this.state.isMounted && this.props.isVisible);
                    return ce()({}, pe.styles.overlay, {
                        opacity: e,
                        backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }, this.props.defaultStyles.overlay)
                }
            }]), n
        }(k.PureComponent);
        ke.propTypes = {isVisible: de.bool.isRequired, defaultStyles: de.object.isRequired};
        var Pe = ["src", "style"];

        function Ne(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !r()) return !1;
                if (r().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(r()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, f.Z)(e);
                if (t) {
                    var o = (0, f.Z)(this).constructor;
                    n = r()(i, arguments, o)
                } else n = i.apply(this, arguments);
                return (0, d.Z)(this, n)
            }
        }

        var Te = function (e) {
                return e && e.Math == Math && e
            },
            Ce = Te("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || Te("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || Te("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || Te("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ce.globalThis = Ce, Ce.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ie = function (e) {
            (0, c.Z)(n, e);
            var t = Ne(n);

            function n(e) {
                var i;
                return (0, l.Z)(this, n), (i = t.call(this, e)).state = {
                    hasLoaded: !1,
                    isZoomed: !0,
                    src: globalThis.getFilterXss().filterUrl(e.image.currentSrc || e.image.src, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }),
                    tmpSrc: null
                }, i.unzoom = i.unzoom.bind((0, u.Z)(i)), i._handleImageLoad = i._handleImageLoad.bind((0, u.Z)(i)), i
            }

            return (0, s.Z)(n, [{
                key: "componentDidMount", value: function () {
                    var e = this.props.zoomImage, t = e.src, n = e.srcSet;
                    this.setState({hasLoaded: !0}), (t || n) && function (e, t) {
                        var n = e.src, i = e.srcSet, r = e.sizes, o = new Image;
                        o.addEventListener("load", (function e() {
                            t(o), o.removeEventListener("load", e)
                        })), o.src = globalThis.getFilterXss().filterUrl(n, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }), i && (o.srcset = i), r && (o.sizes = r)
                    }(this.props.zoomImage, this._handleImageLoad)
                }
            }, {
                key: "componentDidUpdate", value: function (e, t) {
                    var n = this;
                    !t.tmpSrc && this.state.tmpSrc && setTimeout((function () {
                        n.setState({
                            src: globalThis.getFilterXss().filterUrl(n.state.tmpSrc, null, {
                                logType: "js.href/src",
                                reportOnly: "all"
                            }), tmpSrc: null
                        })
                    }), 100)
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.defaultStyles, n = e.zoomImage, i = this.state, r = i.tmpSrc,
                        o = i.isZoomed, a = i.src, l = this._getZoomImageStyle();
                    return k.createElement("div", {style: this._getZoomContainerStyle()}, k.createElement(ke, {
                        isVisible: o,
                        defaultStyles: t
                    }, k.createElement("img", (0, O.Z)({}, n, {
                        src: globalThis.getFilterXss().filterUrl(a, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }), style: l
                    })), k.createElement(Me, (0, O.Z)({}, n, {
                        src: globalThis.getFilterXss().filterUrl(r, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }), style: l
                    }))))
                }
            }, {
                key: "unzoom", value: function (e) {
                    var t = this.props.onUnzoom(this.state.src, e);
                    this.setState({isZoomed: !1}, (function () {
                        return setTimeout(t, pe.transitionDuration)
                    }))
                }
            }, {
                key: "_handleImageLoad", value: function (e) {
                    this.state.isZoomed && this.setState({tmpSrc: e.currentSrc || e.src})
                }
            }, {
                key: "_getZoomContainerStyle", value: function () {
                    return ce()({}, pe.styles.zoomContainer, this.props.defaultStyles.zoomContainer)
                }
            }, {
                key: "_getZoomImageStyle", value: function () {
                    var e, t, n = this.props, i = n.image, r = (n.shouldRespectMaxDimension, n.src, n.zoomMargin),
                        o = i.getBoundingClientRect(), a = o.top, l = o.left, s = i.width, u = i.height,
                        c = i.naturalWidth, d = i.naturalHeight;
                    d > c ? s = u * c / d : u = s * d / c;
                    var f = {top: a, left: l, width: s, height: u};
                    if (!this.state.hasLoaded || !this.state.isZoomed) return ce()({}, pe.styles.zoomImage, this.props.style, f, this.props.defaultStyles.zoomImage);
                    var m = document.body.clientWidth / 2, p = window.innerHeight / 2, v = m - (o.left + s / 2),
                        h = p - (o.top + u / 2),
                        _ = _e({width: s, height: u, naturalWidth: c, naturalHeight: d, zoomMargin: r});
                    u * _ > window.innerHeight && (h = u * (_ - 1) / 2 - a);
                    var g = {transform: y()(e = y()(t = "translate3d(".concat(v, "px, ")).call(t, h, "px, 0) scale(")).call(e, _, ")")};
                    return ce()({}, pe.styles.zoomImage, this.props.style, f, g, this.props.defaultStyles.zoomImage)
                }
            }], [{
                key: "defaultProps", get: function () {
                    return {zoomImage: {}}
                }
            }]), n
        }(k.Component);
        Ie.propTypes = {
            defaultStyles: de.object.isRequired,
            image: de.object.isRequired,
            shouldRespectMaxDimension: de.bool,
            zoomImage: (0, de.shape)({
                src: globalThis.getFilterXss().filterUrl(de.string, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), alt: de.string, className: de.string, style: de.object
            }).isRequired,
            zoomMargin: de.number.isRequired,
            onUnzoom: de.func.isRequired
        };
        var Me = function (e) {
            var t = e.src, n = e.style, i = (0, D.Z)(e, Pe);
            return t ? k.createElement("img", (0, O.Z)({}, i, {
                src: globalThis.getFilterXss().filterUrl(t, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), style: Le(n)
            })) : null
        }, Fe = {position: "fixed", visibility: "hidden"}, Le = function (e) {
            return ce()({}, e, Fe)
        };

        function Re(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !r()) return !1;
                if (r().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(r()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, f.Z)(e);
                if (t) {
                    var o = (0, f.Z)(this).constructor;
                    n = r()(i, arguments, o)
                } else n = i.apply(this, arguments);
                return (0, d.Z)(this, n)
            }
        }

        var Oe = function (e) {
                return e && e.Math == Math && e
            },
            De = Oe("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || Oe("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || Oe("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || Oe("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        De.globalThis = De, De.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ae = function (e) {
            return null != e
        }, Ue = function (e) {
            (0, c.Z)(n, e);
            var t = Re(n);

            function n(e) {
                var i;
                return (0, l.Z)(this, n), (i = t.call(this, e)).state = {
                    isDisabled: !1,
                    isZoomed: !1,
                    wasZoomed: !1,
                    src: globalThis.getFilterXss().filterUrl(e.image.src, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }),
                    prevSrc: e.image.src,
                    isClosing: !1
                }, i._handleKeyDown = i._handleKeyDown.bind((0, u.Z)(i)), i._handleLoad = i._handleLoad.bind((0, u.Z)(i)), i._handleLoadError = i._handleLoadError.bind((0, u.Z)(i)), i._handleUnzoom = i._handleUnzoom.bind((0, u.Z)(i)), i._handleZoom = i._handleZoom.bind((0, u.Z)(i)), i
            }

            return (0, s.Z)(n, [{
                key: "componentDidUpdate", value: function (e, t) {
                    if (!Ae(e.isZoomed) && Ae(this.props.isZoomed)) throw new Error(pe.errors.uncontrolled);
                    if (Ae(e.isZoomed) && !Ae(this.props.isZoomed)) throw new Error(pe.errors.controlled);
                    var n = Ae(e.isZoomed) ? e.isZoomed : t.isZoomed,
                        i = Ae(this.props.isZoomed) ? this.props.isZoomed : this.state.isZoomed;
                    n !== i && !i && this.portalInstance && this.portalInstance.unzoom({force: !0})
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.props, n = t.defaultStyles, i = t.image, r = t.isZoomed,
                        o = t.shouldRespectMaxDimension, a = t.zoomImage, l = t.zoomMargin, s = this.state,
                        u = s.isDisabled, c = s.isZoomed, d = s.src, f = s.isClosing,
                        m = ce()({}, !u && {tabIndex: 0}, i, {
                            src: globalThis.getFilterXss().filterUrl(d, null, {
                                logType: "js.href/src",
                                reportOnly: "all"
                            }), style: this._getImageStyle()
                        }, !u && {
                            onMouseDown: this._preventFocus,
                            onClick: this._handleZoom,
                            onKeyDown: this._handleKeyDown
                        }), p = Ae(r) ? r : c;
                    return k.createElement(k.Fragment, null, k.createElement("img", (0, O.Z)({}, m, {
                        key: "image",
                        ref: function (t) {
                            e.image = t
                        },
                        onLoad: this._handleLoad,
                        onError: this._handleLoadError
                    })), this.image && (p || f) ? k.createElement(Ze, {
                        key: "portal",
                        ref: function (t) {
                            e.portalInstance = t
                        },
                        controlledEventFn: this._getControlledEventFn(),
                        allowAccessibilityClose: this._allowTabNavigation()
                    }, k.createElement(Ie, {
                        defaultStyles: n,
                        image: this.image,
                        shouldRespectMaxDimension: o,
                        zoomImage: a,
                        zoomMargin: Number(l),
                        onUnzoom: this._handleUnzoom
                    })) : null)
                }
            }, {
                key: "_checkShouldDisableComponent", value: function () {
                    var e, t = this.props, n = t.shouldRespectMaxDimension, i = t.zoomImage,
                        r = n && !i && ((e = this.image).clientWidth >= e.naturalWidth || e.clientHeight >= e.naturalHeight);
                    this.setState({isDisabled: r})
                }
            }, {
                key: "_getImageStyle", value: function () {
                    var e = this.props, t = e.defaultStyles, n = e.image, i = (e.isZoomed, this.state),
                        r = i.isDisabled;
                    i.isZoomed, i.isClosing;
                    return ce()({}, pe.styles.image, n.style, t.image, r && {cursor: "inherit"})
                }
            }, {
                key: "_handleLoad", value: function (e) {
                    this._checkShouldDisableComponent(), (this.props.image.onLoad || Function.prototype)(e)
                }
            }, {
                key: "_handleLoadError", value: function (e) {
                    this.setState({isDisabled: !0}), (this.props.image.onError || Function.prototype)(e)
                }
            }, {
                key: "_handleKeyDown", value: function (e) {
                    (0, ge.Uf)(e) && (e.preventDefault(), this._handleZoom(e))
                }
            }, {
                key: "_preventFocus", value: function (e) {
                    e.preventDefault()
                }
            }, {
                key: "_handleZoom", value: function (e) {
                    !Ae(this.props.isZoomed) && this.props.shouldHandleZoom(e) ? this.setState({isZoomed: !0}, this.props.onZoom) : this.props.onZoom()
                }
            }, {
                key: "_handleUnzoom", value: function (e, t) {
                    var n = this;
                    return function () {
                        var i = ce()({
                            isZoomed: !1,
                            isClosing: !1
                        }, n.props.shouldReplaceImage && {
                            src: globalThis.getFilterXss().filterUrl(e, null, {
                                logType: "js.href/src",
                                reportOnly: "all"
                            })
                        });
                        n.setState(i, n.props.onUnzoom), t && n._allowTabNavigation() && n.image.focus()
                    }
                }
            }, {
                key: "_getControlledEventFn", value: function () {
                    return Ae(this.props.isZoomed) ? this.props.onUnzoom : null
                }
            }, {
                key: "_allowTabNavigation", value: function () {
                    return this.image && -1 !== this.image.tabIndex
                }
            }], [{
                key: "defaultProps", get: function () {
                    return {
                        shouldReplaceImage: !0,
                        shouldRespectMaxDimension: !1,
                        zoomMargin: 40,
                        defaultStyles: {zoomContainer: {}, overlay: {}, image: {}, zoomImage: {}},
                        shouldHandleZoom: function () {
                            return !0
                        },
                        onZoom: function () {
                        },
                        onUnzoom: function () {
                        }
                    }
                }
            }, {
                key: "getDerivedStateFromProps", value: function (e, t) {
                    var n = t.wasZoomed && !e.isZoomed || t.isClosing,
                        i = e.image.src !== t.prevSrc ? e.image.src : t.src;
                    return {
                        src: globalThis.getFilterXss().filterUrl(i, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }), isClosing: n, wasZoomed: e.isZoomed, prevSrc: e.image.src
                    }
                }
            }]), n
        }(k.Component);
        Ue.propTypes = {
            image: (0, de.shape)({
                src: globalThis.getFilterXss().filterUrl(de.string.isRequired, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), alt: de.string, className: de.string, style: de.object
            }).isRequired,
            zoomImage: (0, de.shape)({
                src: globalThis.getFilterXss().filterUrl(de.string, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), alt: de.string, className: de.string, style: de.object
            }),
            defaultStyles: de.object,
            isZoomed: de.bool,
            shouldHandleZoom: de.func,
            shouldReplaceImage: de.bool,
            shouldRespectMaxDimension: de.bool,
            onZoom: de.func,
            onUnzoom: de.func
        };
        var Xe = function (e) {
                return e && e.Math == Math && e
            },
            Ve = Xe("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || Xe("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || Xe("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || Xe("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
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
        var He = Ue, ze = n(94614), Be = n(27513), Ge = n(44999), We = n(53395), Ye = n(63952), qe = n(88204),
            Ke = n(3649), Je = n.n(Ke), Qe = n(52725), $e = n(7922), et = n(96453), tt = function (e) {
                return e && e.Math == Math && e
            },
            nt = tt("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || tt("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || tt("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || tt("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
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
        var it = function (e) {
                e.isSubComment;
                var t = e.inputRef, n = e.text, i = e.uploadedFiles, r = e.resetContent, o = e.handleInsertText,
                    a = e.handleImgClick, l = e.onSubmit, s = e.uploadFiles, u = (0, L.fq)(), c = u.group_id, d = u.comment,
                    f = (0, k.useState)(!1), m = (0, R.Z)(f, 2), p = m[0], v = m[1], h = (0, k.useState)(!1),
                    _ = (0, R.Z)(h, 2), g = _[0], b = _[1];
                (0, k.useEffect)((function () {
                    if (g) {
                        var e = function () {
                            b(!1)
                        };
                        return window.addEventListener("resize", e), document.addEventListener("click", e), function () {
                            window.removeEventListener("resize", e), document.removeEventListener("click", e)
                        }
                    }
                }), [g]);
                var y = (0, M.Ye)((function (e) {
                    if (!p) {
                        v(!0);
                        var t = l(n, e);
                        if (t && "function" == typeof t.then) {
                            var i = function (e) {
                                v(!1), r(e)
                            };
                            return t.then(i).catch(i)
                        }
                        return v(!1), void r()
                    }
                }), "comment"), w = function () {
                    g ? b(!1) : (b(!0), t.current && t.current.focus())
                }, x = n.length;
                return k.createElement("div", {className: "input-opt"}, k.createElement("div", {className: "input-opt-left"}, k.createElement(Qe.ZP, {
                    onEmojiClick: function (e, t) {
                        b(!1), o(e), F.Z.comment.commentEmoji({
                            group_id: c,
                            item_number: String(t),
                            emoji_chinese: Je()(e).call(e, 1, -1)
                        })
                    }, popupVisible: g, inputRef: t, points: ["tl", "bl"], offset: [5, 20]
                }, k.createElement("div", {
                    className: "input-opt-item", onClick: w, onKeyDown: function (e) {
                        (0, M.vx)(e.keyCode) && w()
                    }, tabIndex: 0, role: "button", title: "琛ㄦ儏"
                }, k.createElement(et.dyV, null), k.createElement("span", null, "琛ㄦ儏"))), !d.ban_pic_comment && k.createElement("div", {
                    className: "input-opt-item",
                    onClick: a,
                    onKeyDown: function (e) {
                        (0, M.vx)(e.keyCode) && a()
                    },
                    tabIndex: 0,
                    role: "button",
                    title: "鍥剧墖"
                }, k.createElement(et.PzI, null), k.createElement("span", null, "鍥剧墖"))), k.createElement("div", {className: "input-opt-right"}, x >= 2e3 && k.createElement("span", {className: "lengthCount"}, "瀛楁暟宸茶揪涓婇檺锛屼笉鍙啀杈撳叆"), k.createElement($e.zx, {
                    onClick: y,
                    loading: p,
                    disabled: x > 2e3 || 0 === x && 0 === i.length || s.length > i.length
                }, "鍙戦€�")))
            }, rt = n(75485),
            ot = ["isSubComment", "onSubmit", "onClickOutside", "autoFocus", "className", "style", "inputRef", "clearMsgCount", "placeholder"],
            at = function (e) {
                return e && e.Math == Math && e
            },
            lt = at("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || at("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || at("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || at("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
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
        var st, ut = function (e) {
            var t, n, i = e.isSubComment, r = void 0 !== i && i, o = e.onSubmit, a = e.onClickOutside, l = e.autoFocus,
                s = void 0 !== l && l, u = e.className, c = e.style, d = e.inputRef,
                f = (e.clearMsgCount, e.placeholder), m = (0, D.Z)(e, ot),
                p = null !== (t = null === (n = (0, ie._0)()) || void 0 === n ? void 0 : n.isBanCommentSend) && void 0 !== t && t,
                v = (0, L.fq)(), h = v.group_id, _ = v.onInputFocus, g = v.comment, b = v.onInputBlur,
                y = (0, k.useRef)(null), w = (0, k.useRef)(null), x = (0, k.useState)(""), Z = (0, R.Z)(x, 2), j = Z[0],
                S = Z[1], P = (0, k.useState)(!1), N = (0, R.Z)(P, 2), T = N[0], A = N[1], U = (0, k.useState)(!1),
                X = (0, R.Z)(U, 2), V = X[0], H = X[1], z = (0, k.useState)([]), B = (0, R.Z)(z, 2), G = B[0], W = B[1],
                Y = (0, k.useState)([]), q = (0, R.Z)(Y, 2), K = q[0], J = q[1], Q = (0, rt.Z)().globalConfig,
                $ = Q.userDetail, ee = Q.isLogin, te = Q.identity;
            (0, k.useEffect)((function () {
                return a && document.addEventListener("click", ne), function () {
                    document.removeEventListener("click", ne)
                }
            }), [a]);
            var ne = function (e) {
                var t = y.current;
                null !== y.current && t && !t.contains(e.target) && a && a()
            };
            return (0, k.useEffect)((function () {
                if ("1" === C()().query(!0).comment_focus) {
                    var e, t, n = null === (e = y.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                        i = (null == n ? void 0 : n.y) || (null == n ? void 0 : n.top) || 0;
                    if (i) window.scrollTo(0, i - 80), null === (t = d.current) || void 0 === t || t.focus()
                }
            }), []), k.createElement("div", {
                ref: y,
                className: ae()("commentWriter", u),
                style: c
            }, k.createElement(le.Z, {
                className: "headImg",
                size: 40,
                url: null == $ ? void 0 : $.avatarUrl,
                uid: ee ? te.id : void 0
            }), k.createElement("div", {
                className: ae()("writer-wrapper", {inputting: T}), onClick: function (e) {
                    return e.nativeEvent.stopImmediatePropagation()
                }
            }, k.createElement("div", {
                className: "input-wrapper",
                style: {paddingBottom: V ? 10 : void 0}
            }, k.createElement(We.Z.TextArea, (0, O.Z)({
                ref: d,
                placeholder: f,
                value: j,
                maxLength: 2e3,
                onClick: function (e) {
                    (0, M.Xx)() || Ye.ZP.show({source: "comment"}), p && I.Z.error("浣犲凡琚瑷€锛岀瑷€鏈熼棿鏃犳硶鍙戦€佽瘎璁�"), F.Z.comment.commentInputClick({group_id: h})
                },
                autosize: {minRows: 3, maxRows: 6},
                autoFocus: s,
                onChange: function (e) {
                    if (ee) if (p) I.Z.error("浣犲凡琚瑷€锛岀瑷€鏈熼棿鏃犳硶鍙戦€佽瘎璁�"); else {
                        var t = e.target.value;
                        S(t)
                    }
                },
                onFocus: function (e) {
                    A(!0), _(e), re.Z.emit(re.o.commentFocus)
                },
                onBlur: function (e) {
                    A(!1), b(e), re.Z.emit(re.o.commentBlur)
                },
                readOnly: p
            }, m))), !g.ban_pic_comment && k.createElement(qe.Z, {
                visible: V,
                dropzoneRef: w,
                uploadedFiles: G,
                setUploadedFiles: W,
                uploadFiles: K,
                setUploadFiles: J
            }), k.createElement(it, {
                isSubComment: r,
                inputRef: d,
                text: j,
                uploadedFiles: G,
                uploadFiles: K,
                resetContent: function (e) {
                    0 === (null == e ? void 0 : e.errno) && (S(""), H(!1), W([]), J([]))
                },
                handleInsertText: function (e) {
                    d.current && S((0, Qe.YN)(e, d.current))
                },
                handleImgClick: function () {
                    H(!0), w.current && w.current.open(), F.Z.comment.commentPictures({group_id: h})
                },
                onSubmit: function (e, t) {
                    var n = E()(G).call(G, (function (e) {
                        return {u: e.image_uri, w: e.image_width, h: e.image_height, f: e.image_format}
                    }));
                    return o(e, n, t)
                }
            })))
        }, ct = n(82955), dt = n(27105);

        function ft() {
            return ft = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, ft.apply(this, arguments)
        }

        var mt, pt = function (e) {
            return k.createElement("svg", ft({
                width: 12,
                height: 13,
                viewBox: "0 0 12 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), st || (st = k.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.854 5.868a.5.5 0 01.353-.853h5.586a.5.5 0 01.353.853L6.354 8.661a.5.5 0 01-.708 0L2.854 5.868z",
                fill: "#A3A7AD"
            })))
        };

        function vt() {
            return vt = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, vt.apply(this, arguments)
        }

        var ht = function (e) {
            return k.createElement("svg", vt({
                width: 12,
                height: 13,
                viewBox: "0 0 12 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), mt || (mt = k.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.146 6.674a.5.5 0 01-.353.853H3.207a.5.5 0 01-.353-.853L5.646 3.88a.5.5 0 01.708 0l2.792 2.793z",
                fill: "#A3A7AD"
            })))
        }, _t = n(75843), gt = n(28216), bt = n(68892), yt = n.n(bt);

        function wt(e, t) {
            var n = G()(e);
            if (Y()) {
                var i = Y()(e);
                t && (i = S()(i).call(i, (function (t) {
                    return K()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function xt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? wt(Object(n), !0).forEach((function (t) {
                    (0, m.Z)(e, t, n[t])
                })) : Q() ? Object.defineProperties(e, Q()(n)) : wt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, K()(n, t))
                }))
            }
            return e
        }

        var Zt = function (e) {
                return e && e.Math == Math && e
            },
            Et = Zt("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || Zt("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || Zt("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || Zt("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Et.globalThis = Et, Et.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var jt = function (e) {
            var t = e.id, n = e.duration, i = e.teaParams, r = void 0 === i ? {} : i, o = e.list,
                a = void 0 === o ? [] : o, l = (0, gt.I0)(), s = (0, gt.v9)((function (e) {
                    return e[_t.VD.commentPlayProgress]
                })), u = (0, gt.v9)((function (e) {
                    return e[_t.VD.curPlayCommentId]
                })), c = (0, gt.v9)((function (e) {
                    return e[_t.VD.commentIsPlaying]
                })), d = "true" === document.documentElement.getAttribute("dark");
            return k.createElement(yt(), (0, O.Z)({}, e, {
                curPlayTime: s[t],
                isPlaying: c[t],
                iconColor: d ? "#E1E3E6" : "#0C0D0F",
                onSeek: function (e) {
                    l({type: "SET_COMMENT_PLAY_PROGRESS", payload: (0, m.Z)({}, t, e || 0)})
                },
                onTogglePlay: function () {
                    if (l({type: "SET_CUR_PLAY_COMMENT", payload: t}), u && u !== t && c[u]) {
                        var e = U()(a).call(a, (function (e) {
                                return e.id_str === u
                            })) || {}, n = e.multi_media, i = e.user_id, o = e.is_following, d = e.reply_count,
                            f = (null == n ? void 0 : n.video_duration) || 0, m = Math.min(s[u], f);
                        F.Z.comment.audioCommentPlayOver(xt(xt({}, r), {}, {
                            author_id: i,
                            content_id: u,
                            is_following: o,
                            scene: void 0 === d ? "reply" : "comment",
                            audio_duration: 1e3 * f,
                            audio_play_duration: 1e3 * m,
                            audio_play_percent: f ? m / f * 100 : 0
                        }))
                    }
                },
                onStoped: function () {
                    l({
                        type: "SET_COMMENT_IS_PLAYING",
                        payload: (0, m.Z)({}, t, !1)
                    }), re.Z.emit(re.o.audioCommentPause);
                    var e = s[t];
                    F.Z.comment.audioCommentPlayOver(xt(xt({}, r), {}, {
                        audio_play_duration: 1e3 * e,
                        audio_play_percent: n ? e / n * 100 : 0
                    }))
                },
                onPlaying: function () {
                    l({
                        type: "SET_COMMENT_IS_PLAYING",
                        payload: (0, m.Z)({}, t, !0)
                    }), re.Z.emit(re.o.commentPlay), F.Z.comment.audioCommentPlay(r)
                }
            }))
        };

        function St(e, t) {
            var n = G()(e);
            if (Y()) {
                var i = Y()(e);
                t && (i = S()(i).call(i, (function (t) {
                    return K()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function kt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? St(Object(n), !0).forEach((function (t) {
                    (0, m.Z)(e, t, n[t])
                })) : Q() ? Object.defineProperties(e, Q()(n)) : St(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, K()(n, t))
                }))
            }
            return e
        }

        function Pt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !r()) return !1;
                if (r().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(r()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, f.Z)(e);
                if (t) {
                    var o = (0, f.Z)(this).constructor;
                    n = r()(i, arguments, o)
                } else n = i.apply(this, arguments);
                return (0, d.Z)(this, n)
            }
        }

        var Nt = function (e) {
                return e && e.Math == Math && e
            },
            Tt = Nt("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || Nt("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || Nt("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || Nt("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Tt.globalThis = Tt, Tt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ct = function (e) {
            (0, c.Z)(n, e);
            var t = Pt(n);

            function n(e) {
                var i, r;
                return (0, l.Z)(this, n), i = t.call(this, e), (0, m.Z)((0, u.Z)(i), "context", void 0), (0, m.Z)((0, u.Z)(i), "writerInputRef", k.createRef()), (0, m.Z)((0, u.Z)(i), "container", k.createRef()), (0, m.Z)((0, u.Z)(i), "toggleShowMoreReply", (function () {
                    i.setState((function (e) {
                        return {showMoreReply: !e.showMoreReply, localComment: []}
                    }))
                })), (0, m.Z)((0, u.Z)(i), "enableWriterHandler", (function () {
                    i.toggleShowWriter(), i.setState({enableWrite: !0}, (function () {
                        i.writerInputRef.current && i.writerInputRef.current.focus()
                    }))
                })), (0, m.Z)((0, u.Z)(i), "onClickOutsideHandler", (function (e) {
                    var t = i.container.current;
                    null !== t && t && !t.contains(e.target) && i.state.showWriter && i.toggleShowWriter(!1)
                })), (0, m.Z)((0, u.Z)(i), "toggleShowWriter", (r = !1, function (e) {
                    r || (r = !0, e = void 0 === e ? !i.state.showWriter : e, i.setState({showWriter: e}), setTimeout((function () {
                        r = !1
                    }), 200))
                })), (0, m.Z)((0, u.Z)(i), "diggHandler", (0, M.Ye)((function (e) {
                    var t = i.getUserDigg(), n = i.getDiggCount(), r = {CommentId: i.props.id};
                    return ("digg" === (t ? "cancelDigg" : "digg") ? te.Z.comment.digg : te.Z.comment.cancelDigg)(r).then((function (e) {
                        var r = e.data.data, o = (0, M.IT)(r);
                        o || i.context.onCommentDiggChange({
                            isDigg: !t,
                            comment_id: i.props.id,
                            info: i.props.info
                        }), (r.Success || o) && i.setState({user_digg: !t, digg_count: t ? n - 1 : n + 1})
                    }))
                }), "like")), (0, m.Z)((0, u.Z)(i), "getUserDigg", (function () {
                    var e = Boolean(i.props.info.user_digg);
                    return void 0 === i.state.user_digg ? e : i.state.user_digg
                })), (0, m.Z)((0, u.Z)(i), "getDiggCount", (function () {
                    var e = i.props.info.digg_count;
                    return Math.max(0, null == i.state.digg_count ? e : i.state.digg_count)
                })), (0, m.Z)((0, u.Z)(i), "replySubmitHandler", (function (e, t, n) {
                    var r = i.props.parentCommentID ? {
                        content: e,
                        image_info: t,
                        id: i.props.parentCommentID,
                        group_id: String(i.context.group_id),
                        reply_comment_id: String(i.props.info.id),
                        reply_user_id: i.props.info.user_id
                    } : {content: e, image_info: t, group_id: String(i.context.group_id), id: i.props.id};
                    return te.Z.comment.postReply(r).then((function (e) {
                        if ("success" === e.message) {
                            var n = i.props.parentCommentID ? i.props.addLocalComment : i.addLocalComment;
                            n && n(e), i.context.onReply({
                                info: i.props.info,
                                imageList: t
                            }), i.toggleShowWriter(!1), i.setState({
                                showMoreReply: !0,
                                enableWrite: !1
                            }), I.Z.success("璇勮鎴愬姛")
                        } else 102 === e.errno ? I.Z.error("璇ヨ棰戞殏涓嶆敮鎸佽瘎璁�") : e.err_alert ? I.Z.error(e.err_alert.err_content) : I.Z.error("璇勮澶辫触")
                    }))
                })), (0, m.Z)((0, u.Z)(i), "reply_count_delegate", (function () {
                    return void 0 === i.state.reply_count ? Number(i.props.info.reply_count || 0) : i.state.reply_count
                })), (0, m.Z)((0, u.Z)(i), "addLocalComment", (function (e) {
                    i.setState((function (t) {
                        var n, r, a = t.localComment, l = t.selectedReply, s = kt(kt({}, e.data.comment), {}, {
                            user_name: ee()(e, "data.comment.user.name"),
                            user_profile_image_url: ee()(e, "data.comment.user.avatar_url"),
                            user_id: ee()(e, "data.comment.user.user_id"),
                            digg_count: 0,
                            user_digg: !1
                        });
                        return {
                            localComment: y()(n = [s]).call(n, (0, o.Z)(a)),
                            selectedReply: y()(r = [s]).call(r, (0, o.Z)(l)),
                            reply_count: i.reply_count_delegate() + 1
                        }
                    }))
                })), (0, m.Z)((0, u.Z)(i), "deleteSubComment", (function (e) {
                    var t = i.state, n = t.localComment, r = t.selectedReply, o = t.showMoreReply,
                        a = i.reply_count_delegate();
                    n = S()(n).call(n, (function (t) {
                        return t.id !== e
                    })), r = S()(r).call(r, (function (t) {
                        return t.id !== e
                    })), 0 === (a -= 1) && (o = !1), i.setState({
                        localComment: n,
                        selectedReply: r,
                        reply_count: a,
                        showMoreReply: o
                    })
                })), (0, m.Z)((0, u.Z)(i), "deleteCommentHandler", (function (e) {
                    i.props.deleteComment && i.props.deleteComment(e)
                })), (0, m.Z)((0, u.Z)(i), "renderSubCommentList", (function () {
                    if (i.props.parentCommentID) return null;
                    var e = i.state, t = e.showMoreReply, n = e.localComment,
                        r = (e.selectedReply, i.props.info.id_str || String(i.props.info.id));
                    return t ? k.createElement(Jt, {
                        prependData: n,
                        deleteComment: i.deleteSubComment,
                        addLocalComment: i.addLocalComment,
                        parentCommentID: r
                    }) : null
                })), (0, m.Z)((0, u.Z)(i), "renderInteraction", (function () {
                    var e = i.props, t = e.info, n = e.globalConfig, r = t.user_id, o = i.getUserDigg(),
                        a = i.getDiggCount(), l = n.identity.id === String(r);
                    return k.createElement("div", {className: "commentItem__interaction_contaniner"}, k.createElement("div", {className: "commentItem__interaction"}, k.createElement("button", {
                        "aria-label": a + "涓偣璧�",
                        className: ae()("commentItem__interaction__agree", {actived: o}),
                        onClick: i.diggHandler
                    }, o ? k.createElement(et.Mgn, null) : k.createElement(et.mNV, null), k.createElement("span", null, 0 === a ? "璧�" : a)), l || k.createElement("button", {
                        onClick: i.enableWriterHandler,
                        className: "commentItem__interaction__reply"
                    }, i.state.showWriter ? "鍙栨秷" : "", "鍥炲")), k.createElement(Be.Z, {
                        popupPlacement: "bottomRight",
                        className: "commentItem__moreOptions",
                        action: [l ? k.createElement(It, {
                            id: i.props.id,
                            deleteFn: i.deleteCommentHandler
                        }) : k.createElement("div", {key: "1", onClick: i.showReportDialog}, "涓炬姤")],
                        getPopupContainer: function () {
                            return i.container.current
                        }
                    }))
                })), (0, m.Z)((0, u.Z)(i), "renderMoreReply", (function () {
                    var e = i.state.showMoreReply, t = i.reply_count_delegate();
                    return t && 0 !== t ? k.createElement("button", {
                        className: "commentItem__interaction__moreReply",
                        onClick: i.toggleShowMoreReply
                    }, k.createElement("span", null, e ? "鏀惰捣" : "灞曞紑 ".concat(t, " 鏉�"), "鍥炲"), k.createElement("i", {className: ae()("newFoldIcon", {actived: e})}, " ", e ? k.createElement(ht, null) : k.createElement(pt, null))) : null
                })), (0, m.Z)((0, u.Z)(i), "handleImageZoom", (function (e) {
                    var t = i.props.id, n = i.context.group_id;
                    F.Z.comment.commentViewPicture({group_id: n, item_number: String(e), comment_id: t})
                })), (0, m.Z)((0, u.Z)(i), "showReportDialog", (function () {
                    var e = {
                        author_user_id: String(i.props.info.user_id),
                        user_id: i.props.globalConfig.identity.id,
                        group_id: i.context.group_id,
                        comment_id: i.props.id,
                        log_pb: i.context.log_pb
                    };
                    F.Z.common.clickTipOff(kt(kt({}, e), {}, {
                        tip_off_type: "comment",
                        is_login: i.props.globalConfig.isLogin ? 1 : 0
                    })), i.props.globalConfig.isLogin ? dt.Z.reuse({
                        type: "comment",
                        params: {
                            group_id: i.context.group_id,
                            user_id: String(i.props.info.user_id),
                            comment_id: i.props.id
                        },
                        eventParams: e
                    }) : Ye.ZP.show({source: "login"})
                })), (0, m.Z)((0, u.Z)(i), "getEnhanceTextHanlder", (function () {
                    var e, t = (0, ct.jH)({
                        prefix: null,
                        section: "click_comment_time",
                        videoDuration: i.context.videoDuration
                    });
                    return [(0, ct.RG)(JSON.parse((null === (e = i.props.info) || void 0 === e ? void 0 : e.content_rich_span) || "{}")), ct.yo, t]
                })), i.state = {
                    showMoreReply: !1,
                    enableWrite: !1,
                    showWriter: !1,
                    user_digg: void 0,
                    digg_count: void 0,
                    localComment: [],
                    selectedReply: e.info.reply_list ? e.info.reply_list : [],
                    reply_count: void 0,
                    commentEmojiIsLoaded: !1
                }, i
            }

            return (0, s.Z)(n, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    document.addEventListener("click", this.onClickOutsideHandler), this.props.id === C()().query(!0).comment_focus && setTimeout((function () {
                        var t,
                            n = null === (t = e.container.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                            i = (null == n ? void 0 : n.y) || (null == n ? void 0 : n.top) || 0;
                        i && (window.scrollTo(0, i - 80), e.enableWriterHandler())
                    }), 1e3);
                    var t = this.props, n = t.info, i = t.parentCommentID, r = this.context, o = r.group_id,
                        a = r.log_pb, l = r.teaParams, s = a.category_name, u = a.group_source, c = a.position,
                        d = n.is_following, f = n.user_id, m = n.id_str, p = n.has_multi_media, v = {
                            group_id: o,
                            author_id: f,
                            is_following: d,
                            category_name: s,
                            group_source: u,
                            position: c,
                            player_status: (null == l ? void 0 : l.playerStatus) || "",
                            impr_id: m,
                            impr_type: s,
                            with_real_audio: p ? 1 : 0
                        };
                    i ? F.Z.comment.replyCommentImpression(v) : F.Z.comment.commentImpression(v)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    document.removeEventListener("click", this.onClickOutsideHandler)
                }
            }, {
                key: "renderAiteUser", value: function () {
                    var e = this.props.info.reply_to_comment;
                    return !!e ? k.createElement("a", {
                        target: "user_".concat(e.user_id),
                        className: "replyTo",
                        href: globalThis.getFilterXss().filterUrl((0, Ge.$x)(e.user_id), null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }),
                        title: e.user_name
                    }, "@", e.user_name) : null
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state, n = t.showWriter, i = t.enableWrite, r = t.commentEmojiIsLoaded,
                        o = this.props, a = o.info, l = o.id, s = o.isLast, u = o.onAuthorProfileClick,
                        c = o.onAuthorNameClick, d = o.parentCommentID, f = (o.globalConfig, o.playerInstance),
                        m = o.list, p = void 0 === m ? [] : m, v = a.create_time, h = a.user_id, _ = a.large_image_list,
                        g = a.user_profile_image_url, b = a.user_name, y = a.user_auth_info, w = a.publish_loc_info,
                        x = a.has_multi_media, Z = a.multi_media, j = a.id_str, S = a.is_following, P = Z || {},
                        N = P.main_url, T = P.video_duration, C = void 0 === T ? 0 : T, I = _ && _.length > 0,
                        L = a.text || "", R = !!d, O = this.context, D = O.group_id, A = O.log_pb, U = O.teaParams,
                        X = A.category_name, V = A.group_source, H = A.position, z = x && "[璇煶璇勮锛屾殏涓嶆敮鎸佹挱鏀綸" !== L;
                    return k.createElement("div", {
                        ref: this.container,
                        className: ae()("commentItem", {"sub-comment-item": R}),
                        "data-id": l
                    }, k.createElement("div", {className: "commentItem__info"}, k.createElement(le.Z, {
                        className: "commentItem__headImg",
                        size: R ? 24 : 40,
                        url: g,
                        uid: String(h),
                        distance: 0,
                        onClick: function () {
                            F.Z.comment.comment_profile_click(), u && u()
                        },
                        userName: b
                    }), k.createElement("div", {
                        className: "commentItem__userName", onClick: function () {
                            c && c(), window.open("/home/".concat(h, "/"))
                        }
                    }, k.createElement(se.Z, {
                        name: b,
                        authInfo: y
                    })), k.createElement("div", {className: "commentItem__publishTime"}, v && (0, M.Ug)(Number(v))), w ? k.createElement("div", {className: "commentItem__ipAddress"}, w) : null), k.createElement("div", {className: "commentItem__details"}, k.createElement("div", {className: "commentItem__details__main"}, L && k.createElement("div", {className: ae()("commentItem__text", r ? "" : "hide")}, this.renderAiteUser(), k.createElement("pre", null, k.createElement(ct.ZP, {
                        text: L,
                        handlers: this.getEnhanceTextHanlder(),
                        handleCommentEmojiLoaded: function () {
                            r || e.setState({commentEmojiIsLoaded: !0})
                        }
                    }))), z && k.createElement(jt, {
                        className: "commentItem__audio",
                        id: j,
                        playUrl: N,
                        player: f,
                        duration: C,
                        teaParams: {
                            group_id: D,
                            author_id: h,
                            content_id: l,
                            is_following: S,
                            category_name: X,
                            group_source: V,
                            position: H,
                            player_status: (null == U ? void 0 : U.playerStatus) || "",
                            scene: R ? "reply" : "comment",
                            audio_duration: 1e3 * C
                        },
                        list: p
                    }), I && k.createElement("div", {className: "commentItem__image"}, E()(_).call(_, (function (t, n) {
                        return k.createElement(He, {
                            key: t.uri,
                            image: {
                                src: globalThis.getFilterXss().filterUrl(t.url, null, {
                                    logType: "js.href/src",
                                    reportOnly: "all"
                                }), alt: "璇勮鍥剧墖"
                            },
                            zoomImage: {
                                src: globalThis.getFilterXss().filterUrl(t.url, null, {
                                    logType: "js.href/src",
                                    reportOnly: "all"
                                })
                            },
                            onZoom: function () {
                                return e.handleImageZoom(n)
                            }
                        })
                    }))), this.renderInteraction()), i && k.createElement(ut, {
                        isSubComment: !0,
                        inputRef: this.writerInputRef,
                        style: n ? {} : {display: "none"},
                        onSubmit: this.replySubmitHandler,
                        placeholder: "鍥炲".concat(b, "锛�")
                    }), this.renderSubCommentList(), this.renderMoreReply(), s || R ? null : k.createElement("div", {className: "hr"})))
                }
            }]), n
        }(k.PureComponent);
        (0, m.Z)(Ct, "contextType", L.ZP);
        var It = function (e) {
                var t = (0, k.useContext)(L.ZP), n = e.deleteFn, i = e.id, r = (0, M.Ye)((function () {
                    te.Z.comment.deleteComment({id: i}).then((function (e) {
                        0 === ee()(e.data.data, "BaseResp.StatusCode") && (n && n(i), t.onDelete({comment_id: i}))
                    }))
                }));
                return k.createElement("div", {key: "delete", className: e.className, onClick: r}, "鍒犻櫎")
            }, Mt = (0, ze.X)(Ct), Ft = n(79112), Lt = n(76264), Rt = n.n(Lt), Ot = n(7071), Dt = n(75290),
            At = function (e) {
                return e && e.Math == Math && e
            },
            Ut = At("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || At("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || At("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || At("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ut.globalThis = Ut, Ut.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Xt = function (e) {
                var t = e.audioPlayer, n = e.isLVideo, i = e.curPlayCommentId, r = (0, Ot.f)(), o = r.playerInstanceRef,
                    a = r.autoPlay, l = r.setAutoPlay, s = (0, k.useContext)(Dt.Z),
                    u = n ? null == s ? void 0 : s.player : o.current, c = n ? null == s ? void 0 : s.autoPlay : a,
                    d = n ? null == s ? void 0 : s.setAutoPlay : l, f = (0, gt.I0)();
                (0, k.useEffect)((function () {
                    if (u && t) return u.on("play", p), re.Z.on(re.o.commentPlay, h), function () {
                        u.off("play", p), re.Z.off(re.o.commentPlay, h)
                    }
                }), [u, t]);
                var p = function () {
                    t.paused || (t.pause(), f({
                        type: "SET_COMMENT_IS_PLAYING",
                        payload: (0, m.Z)({}, i, !1)
                    })), re.Z.off(re.o.audioCommentPause, _)
                }, v = function () {
                    d && d(!0)
                }, h = function () {
                    u.paused || (u.pause(), re.Z.on(re.o.audioCommentPause, _)), u.ended && c && (d && d(!1), re.Z.on(re.o.audioCommentPause, v))
                }, _ = function () {
                    u.paused && u.play(), re.Z.off(re.o.audioCommentPause, v)
                }
            }, Vt = n(45601),
            Ht = ["data", "loading", "loadingText", "apend", "parentCommentID", "addLocalComment", "isLVideo"],
            zt = ["parentCommentID", "prependData", "addLocalComment", "deleteComment"];

        function Bt(e, t) {
            var n = G()(e);
            if (Y()) {
                var i = Y()(e);
                t && (i = S()(i).call(i, (function (t) {
                    return K()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Gt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Bt(Object(n), !0).forEach((function (t) {
                    (0, m.Z)(e, t, n[t])
                })) : Q() ? Object.defineProperties(e, Q()(n)) : Bt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, K()(n, t))
                }))
            }
            return e
        }

        var Wt = function (e) {
                return e && e.Math == Math && e
            },
            Yt = Wt("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || Wt("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || Wt("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || Wt("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Yt.globalThis = Yt, Yt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var qt, Kt = function (e) {
            var t, n = e.data, i = void 0 === n ? [] : n, r = e.loading, o = (e.loadingText, e.apend),
                a = e.parentCommentID, l = e.addLocalComment, s = e.isLVideo, u = (0, D.Z)(e, Ht), c = (0, ie.jY)(),
                d = (0, k.useRef)(null), f = (0, gt.I0)(), p = (0, gt.v9)((function (e) {
                    return e[_t.VD.curPlayCommentId]
                })), v = (0, k.useMemo)((function () {
                    return U()(i).call(i, (function (e) {
                        return e.id_str === p
                    }))
                }), [p, i]), h = (0, L.fq)(), _ = h.group_id, g = h.log_pb, b = void 0 === g ? {} : g, y = h.teaParams,
                w = b.group_source, x = b.category_name, Z = b.position, j = (0, gt.v9)((function (e) {
                    return e[_t.VD.commentPlayProgress]
                }));
            Xt({
                audioPlayer: null === (t = d.current) || void 0 === t ? void 0 : t.player,
                isLVideo: s,
                curPlayCommentId: p
            });
            var S = function (e, t) {
                ne.Z.authorInfoClick({
                    log_pb: V()({
                        impr_type: s ? "__lv_detail__" : "__pc_detail__",
                        category_name: s ? "related" : "xg_pc_related_channel_new",
                        page_type: "anyVideo",
                        sourcepage: s ? "longvideo" : "shortvideo",
                        author_id: String(e.user_id)
                    }),
                    click_position: t,
                    user_status: c.id === String(e.user_id) ? "author" : "guest",
                    is_following: e.is_following,
                    detail_section: "comment_area"
                })
            }, P = r ? k.createElement(Ft.W_, null) : o, N = function () {
                var e;
                if (p) {
                    var t = null === (e = d.current) || void 0 === e ? void 0 : e.player;
                    f({
                        type: "SET_COMMENT_PLAY_PROGRESS",
                        payload: (0, m.Z)({}, p, (null == t ? void 0 : t.currentTime) || 0)
                    })
                }
            };
            (0, k.useEffect)((function () {
                var e = d.current;
                return null == e || e.on("timeupdate", N), function () {
                    null == e || e.off("timeupdate", N)
                }
            }), [p]);
            var T = (0, k.useCallback)((function () {
                f({type: "SET_COMMENT_IS_PLAYING", payload: {}}), f({
                    type: "SET_COMMENT_PLAY_PROGRESS",
                    payload: (0, m.Z)({}, p, 0)
                }), re.Z.emit(re.o.audioCommentPause);
                var e = v || {}, t = e.multi_media, n = void 0 === t ? {} : t, i = e.user_id, r = e.is_following,
                    o = (n || {}).video_duration, l = Math.min(j[p], o);
                F.Z.comment.audioCommentPlayOver({
                    group_id: _,
                    author_id: i,
                    content_id: p,
                    is_following: r,
                    category_name: x,
                    group_source: w,
                    position: Z,
                    player_status: (null == y ? void 0 : y.playerStatus) || "",
                    scene: a ? "reply" : "comment",
                    audio_duration: 1e3 * o,
                    audio_play_duration: 1e3 * l,
                    audio_play_percent: o ? l / o * 100 : 0
                })
            }), [j, p]), C = function (e) {
                var t;
                I.Z.error("鎾斁澶辫触锛岃閲嶈瘯"), f({
                    type: "SET_COMMENT_IS_PLAYING",
                    payload: {}
                }), re.Z.emit(re.o.audioCommentPause), (0, Vt.h)({
                    name: "COMMENT_PLAY_ERROR",
                    tags: {gid: _, commentId: p, error: null === (t = e.target) || void 0 === t ? void 0 : t.error}
                })
            };
            return (0, k.useEffect)((function () {
                var e = d.current;
                return null == e || e.on("ended", T), null == e || e.on("error", C), function () {
                    null == e || e.off("ended", T), null == e || e.off("error", C)
                }
            }), [j]), (0, k.useEffect)((function () {
                var e;
                f({type: "SET_CUR_PLAY_COMMENT", payload: ""}), f({
                    type: "SET_COMMENT_IS_PLAYING",
                    payload: {}
                }), f({type: "SET_COMMENT_PLAY_PROGRESS", payload: {}});
                var t = null === (e = d.current) || void 0 === e ? void 0 : e.player;
                t && (t.currentTime = 0)
            }), [_, f]), k.createElement("div", {className: "commentList"}, E()(i).call(i, (function (e, t) {
                var n;
                return k.createElement(Mt, (0, O.Z)({
                    playerInstance: null === (n = d.current) || void 0 === n ? void 0 : n.player,
                    parentCommentID: a,
                    addLocalComment: l,
                    key: e.id_str || e.id,
                    id: e.id_str || e.id,
                    info: e,
                    isLast: i.length - 1 === t,
                    onAuthorProfileClick: function () {
                        return S(e, "profile")
                    },
                    onAuthorNameClick: function () {
                        return S(e, "name")
                    }
                }, u, {list: i}))
            })), k.createElement(Rt(), {ref: d}), P ? k.createElement("div", {className: "commentList__footer"}, P) : null)
        }, Jt = function (e) {
            var t, n = e.parentCommentID, i = e.prependData, r = e.addLocalComment, a = e.deleteComment,
                l = (0, D.Z)(e, zt), s = (0, k.useState)([]), u = (0, R.Z)(s, 2), c = u[0], d = u[1],
                f = (0, k.useState)(!1), m = (0, R.Z)(f, 2), p = m[0], v = m[1], h = (0, k.useState)(0),
                _ = (0, R.Z)(h, 2), g = _[0], b = _[1], w = (0, k.useState)(void 0), x = (0, R.Z)(w, 2), Z = x[0],
                j = x[1], P = function () {
                    p || !1 === Z || (v(!0), te.Z.comment.getCommentReply({id: n, offset: g}).then((function (e) {
                        if ("success" === e.message) {
                            var t, n = e.data;
                            b(n.offset), j(n.has_more), d(y()(t = []).call(t, (0, o.Z)(c), (0, o.Z)(T(n.data))))
                        }
                        v(!1)
                    })).catch((function () {
                        return v(!1)
                    })))
                };
            (0, k.useEffect)((function () {
                P()
            }), []);
            var N = function () {
                return k.createElement("div", {onClick: P, style: {cursor: "pointer"}}, "鏄剧ず鏇村鍥炲")
            }, T = function (e) {
                return E()(e).call(e, (function (e) {
                    var t = e.large_image_list.length > 0 ? e.large_image_list : z()(ee()(JSON.parse(e.content_rich_span), "image_list", {}));
                    return Gt(Gt({}, e), {}, {
                        text: e.text,
                        user_name: ee()(e, "user.name"),
                        user_profile_image_url: ee()(e, "user.avatar_url"),
                        user_id: ee()(e, "user.user_id"),
                        id_str: e.id_str || e.id,
                        digg_count: e.digg_count,
                        user_digg: e.user_digg,
                        create_time: e.create_time,
                        large_image_list: t
                    })
                }))
            }, C = y()(t = []).call(t, (0, o.Z)(i), (0, o.Z)(S()(c).call(c, (function (e) {
                return !i.some((function (t) {
                    return t.id === e.id
                }))
            }))));
            return k.createElement(Kt, (0, O.Z)({
                addLocalComment: r,
                parentCommentID: n,
                data: C,
                loading: p,
                deleteComment: function (e) {
                    d(S()(c).call(c, (function (t) {
                        return t.id !== e
                    }))), a(e)
                },
                apend: Z ? k.createElement(N, null) : null
            }, l))
        }, Qt = Kt, $t = n(51808), en = n(76449);

        function tn() {
            return tn = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, tn.apply(this, arguments)
        }

        var nn = function (e) {
            return k.createElement("svg", tn({
                width: 18,
                height: 19,
                viewBox: "0 0 18 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), qt || (qt = k.createElement("path", {
                d: "M11.06 15.208a.562.562 0 00.892.455l3-2.379a.562.562 0 10-.66-.91l-2.107 1.732V2.836a.562.562 0 00-1.125 0v12.372zM6.936 2.836a.562.562 0 00-.892-.456l-3 2.38a.562.562 0 00.66.91l2.107-1.733v11.27a.562.562 0 101.125 0V2.837z",
                fill: "#0C0D0F"
            })))
        };

        function rn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !r()) return !1;
                if (r().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(r()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, f.Z)(e);
                if (t) {
                    var o = (0, f.Z)(this).constructor;
                    n = r()(i, arguments, o)
                } else n = i.apply(this, arguments);
                return (0, d.Z)(this, n)
            }
        }

        var on = function (e) {
                return e && e.Math == Math && e
            },
            an = on("object" == (void 0 === g() ? "undefined" : (0, p.Z)(g())) && g()) || on("object" == ("undefined" == typeof window ? "undefined" : (0, p.Z)(window)) && window) || on("object" == ("undefined" == typeof self ? "undefined" : (0, p.Z)(self)) && self) || on("object" == (void 0 === n.g ? "undefined" : (0, p.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        an.globalThis = an, an.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ln = function (e) {
            (0, c.Z)(n, e);
            var t = rn(n);

            function n() {
                var e, i;
                (0, l.Z)(this, n);
                for (var r = arguments.length, s = new Array(r), c = 0; c < r; c++) s[c] = arguments[c];
                return i = t.call.apply(t, y()(e = [this]).call(e, s)), (0, m.Z)((0, u.Z)(i), "writerInputRef", k.createRef()), (0, m.Z)((0, u.Z)(i), "containerRef", k.createRef()), (0, m.Z)((0, u.Z)(i), "context", void 0), (0, m.Z)((0, u.Z)(i), "lastScrollTop", 0), (0, m.Z)((0, u.Z)(i), "loading", !1), (0, m.Z)((0, u.Z)(i), "offset", {}), (0, m.Z)((0, u.Z)(i), "count", 10), (0, m.Z)((0, u.Z)(i), "firstLoad", !0), (0, m.Z)((0, u.Z)(i), "state", {
                    hasMore: void 0,
                    loading: !1,
                    isLoadError: !1,
                    sort: en.U.HOT,
                    userComment: [],
                    moreData: []
                }), (0, m.Z)((0, u.Z)(i), "loadMoreHandler", N()((function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        t = document.scrollingElement || document.documentElement, n = t.scrollTop;
                    i.lastScrollTop = n;
                    var r = i.getHasMore();
                    if (r && !i.state.loading && !(n < i.lastScrollTop) && i.containerRef.current) {
                        var o = i.containerRef.current.getBoundingClientRect(), a = "number" == typeof e ? e : 1;
                        if (i.firstLoad) {
                            var l = C()().query(!0).comment_focus;
                            l && "1" !== l && (a = 4), i.firstLoad = !1
                        }
                        (o.bottom < 90 + (window.innerHeight || document.documentElement.clientHeight) || a > 1) && i.getVideoComment().then((function () {
                            return i.loadMoreHandler(a - 1)
                        }))
                    }
                }), 100)), (0, m.Z)((0, u.Z)(i), "getVideoComment", (0, a.Z)(h().mark((function e() {
                    var t, n, r, a, l, s, u;
                    return h().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (n = i.context, r = n.item_id, a = n.group_id, n.comment, l = i.props.group_source, s = x()(i.state), u = (null !== (t = i.offset[s]) && void 0 !== t ? t : 0) + i.count, i.state.loading) {
                                    e.next = 7;
                                    break
                                }
                                return i.setState({loading: !0}), e.abrupt("return", te.Z.comment.getComment({
                                    item_id: r,
                                    group_id: a,
                                    offset: u,
                                    group_source: l,
                                    sort: s
                                }).then((function (e) {
                                    0 === e.err_no && (i.setState((function (t) {
                                        var n, i;
                                        return {
                                            moreData: y()(n = []).call(n, (0, o.Z)(t.moreData), (0, o.Z)(E()(i = e.data).call(i, (function (e) {
                                                return e.comment
                                            })))), hasMore: e.has_more
                                        }
                                    })), i.offset[s] = u), i.setState({loading: !1})
                                })).catch((function () {
                                    i.setState({loading: !1, hasMore: !1, isLoadError: !0})
                                })));
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))), (0, m.Z)((0, u.Z)(i), "VideoCommentSubmitHandler", (function (e, t) {
                    return F.Z.comment.commentSend({
                        content: e,
                        img_count: String(t.length),
                        group_id: i.context.group_id
                    }), te.Z.comment.postVideoComment({
                        text: e,
                        image_info: t,
                        item_id: i.context.item_id,
                        group_id: i.context.group_id
                    }).then((function (e) {
                        if (!(0, M.IT)(e)) {
                            if (0 === e.errno) {
                                var n = t.length || 0, r = 0;
                                t.forEach((function (e) {
                                    "gif" === e.f && r++
                                })), i.context.onPostComment({
                                    comment_id: String(e.data.id),
                                    with_pic: String(n),
                                    with_gif: String(r)
                                }), i.setState((function (t) {
                                    var n, i = t.userComment;
                                    return {userComment: y()(n = [e.data]).call(n, (0, o.Z)(i))}
                                })), i.context.changeCommentCount(1), I.Z.success("璇勮鎴愬姛")
                            } else 102 === e.errno ? I.Z.error("璇ヨ棰戞殏涓嶆敮鎸佽瘎璁�") : e.err_alert ? I.Z.error(e.err_alert.err_content) : I.Z.error("璇勮澶辫触");
                            return e
                        }
                    })).catch((function (e) {
                        (0, M.wK)(e) && Ye.ZP.show({source: "comment"})
                    }))
                })), (0, m.Z)((0, u.Z)(i), "delteVideoComment", (function (e) {
                    var t = i.state, n = t.userComment, r = t.moreData;
                    i.setState({
                        userComment: S()(n).call(n, (function (t) {
                            return t.id !== e
                        })), moreData: S()(r).call(r, (function (t) {
                            return t.id !== e
                        }))
                    }), i.context.deleteTopComment(e), i.context.changeCommentCount(-1)
                })), (0, m.Z)((0, u.Z)(i), "handleSortChange", function () {
                    var e = (0, a.Z)(h().mark((function e(t) {
                        var n, r, o, a, l;
                        return h().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = i.context, r = n.item_id, o = n.group_id, a = n.resetLoadComment, l = i.props.group_source, i.setState({
                                        hasMore: void 0,
                                        loading: !0,
                                        sort: t,
                                        userComment: [],
                                        moreData: []
                                    }), i.offset[t] = 0, e.next = 6, a({
                                        item_id: r,
                                        group_id: o,
                                        sort: t,
                                        group_source: l
                                    });
                                case 6:
                                    i.setState({loading: !1}), F.Z.comment.commentOrder({
                                        group_id: o,
                                        order: t === en.U.HOT ? "hot" : "time"
                                    });
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()), (0, m.Z)((0, u.Z)(i), "getHasMore", (function () {
                    var e, t;
                    return null !== (e = null !== (t = i.state.hasMore) && void 0 !== t ? t : i.context.comment.hasMore) && void 0 !== e && e
                })), i
            }

            return (0, s.Z)(n, [{
                key: "componentDidMount", value: function () {
                    this.loadMoreHandler(), window.addEventListener("scroll", this.loadMoreHandler)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    window.removeEventListener("scroll", this.loadMoreHandler)
                }
            }, {
                key: "render", value: function () {
                    var e, t = this, n = this.props.isLVideo, i = this.context, r = i.comment, a = i.onFirstInView,
                        l = this.state, s = l.userComment, u = l.moreData, c = l.loading, d = x()(l), f = l.isLoadError,
                        m = r.count, p = void 0 === m ? 0 : m, v = r.comments, h = void 0 === v ? [] : v,
                        _ = this.getHasMore(), g = y()(e = []).call(e, (0, o.Z)(s), (0, o.Z)(h), (0, o.Z)(u));
                    return k.createElement($t.Z, {
                        onViewableChange: function (e) {
                            return e && a && a()
                        }, justOnce: !0
                    }, k.createElement("div", {
                        className: "".concat("Page_Projection", "__comment"),
                        ref: this.containerRef
                    }, k.createElement("div", {className: "comment-new-style"}, k.createElement("div", {className: "new-comment-count"}, p, " 鏉¤瘎璁�"), k.createElement("div", {
                        className: "comment-tab",
                        onClick: function () {
                            d === en.U.HOT ? t.handleSortChange(en.U.TIME) : t.handleSortChange(en.U.HOT)
                        }
                    }, k.createElement(nn, null), " ", k.createElement("span", null, d === en.U.HOT ? "鏈€鐑帓搴�" : "鏈€鏂板彂甯�"))), k.createElement(ut, {
                        inputRef: this.writerInputRef,
                        onSubmit: this.VideoCommentSubmitHandler,
                        placeholder: "鍙戜竴鏉″弸鍠勭殑璇勮鍚э綖"
                    }), k.createElement("div", {className: "hr before-comment-list"}), k.createElement(Qt, {
                        deleteComment: this.delteVideoComment,
                        data: g,
                        loading: c,
                        isLVideo: n,
                        apend: !1 === _ ? f ? k.createElement("div", null, "鍔犺浇澶辫触") : k.createElement("div", null, g.length > 0 ? "娌℃湁鏇村璇勮浜�" : "鏆傛棤璇勮锛屽揩鏉ュ彂鏉¤瘎璁哄惂") : null
                    })))
                }
            }]), n
        }(k.PureComponent);
        (0, m.Z)(ln, "contextType", L.ZP);
        var sn = ln
    }, 60837: function (e, t, n) {
        n.d(t, {
            Kr: function () {
                return P
            }, aH: function () {
                return N
            }, tm: function () {
                return T
            }
        });
        n(41539), n(54747);
        var i = n(86902), r = n.n(i), o = n(14310), a = n.n(o), l = n(34074), s = n.n(l), u = n(39649), c = n.n(u),
            d = n(33938), f = n(44845), m = n(19623), p = n(63109), v = n.n(p), h = (n(9653), n(90149)), _ = n.n(h),
            g = n(20116), b = n.n(g), y = n(2991), w = n.n(y), x = n(72169), Z = n(92133);

        function E(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = b()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function (t) {
                    (0, f.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : E(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var S = function (e) {
                return e && e.Math == Math && e
            },
            k = S("object" == (void 0 === _() ? "undefined" : (0, m.Z)(_())) && _()) || S("object" == ("undefined" == typeof window ? "undefined" : (0, m.Z)(window)) && window) || S("object" == ("undefined" == typeof self ? "undefined" : (0, m.Z)(self)) && self) || S("object" == (void 0 === n.g ? "undefined" : (0, m.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        k.globalThis = k, k.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var P = function (e, t, n) {
            var i = t.comments;
            n(j(j({}, t), {}, {
                comments: b()(i).call(i, (function (t) {
                    return t.id !== e
                }))
            }))
        }, N = function (e, t, n) {
            var i = Number(t.count) || 0;
            (i += e) < 0 && (i = 0), n(j(j({}, t), {}, {count: i}))
        }, T = function () {
            var e = (0, d.Z)(v().mark((function e(t, n) {
                var i, r;
                return v().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, x.Z.comment.getComment(t);
                        case 2:
                            return i = e.sent, n(Z.Sy), 0 === i.err_no && n({
                                comments: w()(r = i.data).call(r, (function (e) {
                                    return e.comment
                                })),
                                count: i.total_number,
                                hasMore: i.has_more,
                                ban_comment: Boolean(i.ban_comment),
                                ban_pic_comment: Boolean(i.ban_pic_comment)
                            }), e.abrupt("return", i);
                        case 6:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }()
    }, 70326: function (e, t, n) {
        n.d(t, {
            ZP: function () {
                return Oe
            }, MR: function () {
                return Ie
            }, WF: function () {
                return Re
            }, iQ: function () {
                return Le
            }, gk: function () {
                return Fe
            }, D1: function () {
                return Me
            }
        });
        var i, r, o, a = n(59056), l = n(19623), s = n(90149), u = n.n(s), c = n(67294), d = n(1028), f = n(42004),
            m = n(8447), p = n(34880), v = n(63356), h = n(50239);

        function _() {
            return _ = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, _.apply(this, arguments)
        }

        var g = function (e) {
                return c.createElement("svg", _({
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), i || (i = c.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.707 8.2a.91.91 0 00-1.137.504c-.259.607-.627 1.442-.898 1.941h-1.08l-1.009-1.97a.817.817 0 00-.988-.401.839.839 0 00-.434 1.24c.23.367.483.79.657 1.131H14.45a.588.588 0 00-.588.589v5.904c0 .325.263.588.588.588h2.758v1.17h-3.077a.865.865 0 100 1.73h3.077v2.066a.898.898 0 001.436.72l.033-.024-.015-.038a7.552 7.552 0 01-.52-2.763c0-1.609.5-3.1 1.352-4.325l.059-.084h-.548v-1.185h1.602l.015-.014a7.487 7.487 0 011.765-1.192l.03-.015v-2.538a.588.588 0 00-.588-.589h-1.29c.202-.32.456-.804.666-1.22a.88.88 0 00-.5-1.225zm-5.197 5.261V12.21h1.699v1.251H15.51zm3.496 0V12.21h1.781v1.251h-1.781zm-3.496 2.717v-1.185h1.699v1.185H15.51z",
                    fill: "#fff",
                    fillOpacity: .9
                })), r || (r = c.createElement("path", {
                    d: "M8.74 8.674a.79.79 0 000 1.581h2.323v2.047H8.806a.588.588 0 00-.586.536l-.368 4.132c-.031.344.24.64.585.64h2.792c-.002 1.727-.068 2.846-.181 3.365a.815.815 0 01-.411.56c-.223.127-.536.193-.945.193-.16 0-.372-.01-.582-.023a.6.6 0 00-.62.755l.138.497c.067.24.276.411.524.427.297.019.703.041.954.041h.003c.759-.05 1.357-.209 1.792-.48.436-.273.706-.658.808-1.153v-.002c.067-.384.122-1.362.165-2.399.043-1.038.073-2.142.089-2.78a.585.585 0 00-.587-.598H9.668l.221-2.13h2.399a.588.588 0 00.588-.588V8.787a.113.113 0 00-.113-.113H8.74z",
                    fill: "#fff",
                    fillOpacity: .9
                })), o || (o = c.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23.678 16.262a.98.98 0 00-1.34-.36l-.38.22a.981.981 0 00-.36 1.341l.093.16c.146.252.116.564-.029.815-.145.252-.4.433-.69.433h-.185a.98.98 0 00-.981.98v.443c0 .541.439.98.98.98h.185c.291 0 .545.18.69.431.146.253.177.566.031.818l-.093.16a.981.981 0 00.359 1.341l.377.218a.98.98 0 001.34-.36l.093-.16c.146-.252.433-.382.724-.382s.575.13.72.382l.092.16a.98.98 0 001.34.359l.382-.221a.98.98 0 00.358-1.34l-.092-.16c-.146-.251-.116-.563.029-.814.145-.252.4-.433.69-.432h.186c.543 0 .982-.44.982-.982v-.44a.981.981 0 00-.981-.982h-.186c-.29 0-.545-.18-.69-.432-.146-.252-.177-.565-.03-.817l.09-.159a.978.978 0 00-.357-1.336l-.383-.221a.978.978 0 00-1.336.358l-.092.159c-.145.252-.432.382-.723.382s-.575-.13-.72-.382l-.093-.16zm1.513 2.597a1.4 1.4 0 11-1.4 2.426 1.4 1.4 0 011.4-2.426z",
                    fill: "#fff",
                    fillOpacity: .9
                })))
            }, b = n(11564), y = (n(41539), n(54747), n(68309), n(74916), n(86902)), w = n.n(y), x = n(14310), Z = n.n(x),
            E = n(20116), j = n.n(E), S = n(34074), k = n.n(S), P = n(39649), N = n.n(P), T = n(3649), C = n.n(T),
            I = n(66419), M = n.n(I), F = n(65420), L = n.n(F), R = n(19996), O = n.n(R), D = n(79349), A = n(33938),
            U = n(44845), X = n(63109), V = n.n(X), H = (n(9653), n(62462)), z = n.n(H), B = n(25843), G = n.n(B),
            W = n(78580), Y = n.n(W), q = n(77766), K = n.n(q), J = n(2991), Q = n.n(J), $ = n(94184), ee = n.n($),
            te = n(30323), ne = n.n(te), ie = n(89680), re = (n(56977), function (e) {
                return e && e.Math == Math && e
            }),
            oe = re("object" == (void 0 === u() ? "undefined" : (0, l.Z)(u())) && u()) || re("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || re("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || re("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
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
        var ae, le = "range-slider", se = function (e) {
                var t, n, i = (0, c.useRef)(null), r = (0, c.useRef)(null), o = e.max, l = e.min, s = e.step,
                    u = void 0 === s ? 1 : s, d = e.hasScale, f = void 0 !== d && d, m = e.scaleMarks, p = e.slugMark,
                    v = e.onChange, h = e.fixedOnScale, _ = e.defaultValue;
                _ && (_ = Number(_));
                var g = o - l, b = (0, c.useState)(_), y = (0, a.Z)(b, 2), w = y[0], x = y[1], Z = (0, c.useState)(!1),
                    E = (0, a.Z)(Z, 2), j = E[0], S = E[1], k = (0, c.useState)(""), P = (0, a.Z)(k, 2), N = P[0], T = P[1],
                    C = (100 * ((w - l) / g)).toFixed(2) + "%", I = (0, c.useCallback)((function (e) {
                        e < l && (e = l), e > o && (e = o), h && (e = Math.round(e / u) * u), x(e)
                    }), [x, o, l, h, u]), F = (0, c.useCallback)((function (e) {
                        var t = Math.round(e / u) * u;
                        I(t), null == v || v(t)
                    }), [v, I, u]), L = (0, c.useCallback)((function (e) {
                        if (r.current && i.current) {
                            var t = i.current.getBoundingClientRect().width, n = r.current.getBoundingClientRect().width,
                                o = n / 2, a = (e - l) / g * t;
                            a >= 0 && a <= t && T(a < o ? "translateX(".concat(-a, "px)") : a > t - o ? "translateX(".concat(t - a - n, "px)") : "")
                        }
                    }), [r.current, i.current]), R = (0, c.useCallback)((function (e) {
                        if (j) {
                            var t = i.current;
                            if (t) {
                                var n = t.getBoundingClientRect(), r = e.clientX - n.left, o = l + r / n.width * g;
                                I(o), L(o)
                            }
                        }
                    }), [g, j, I, l]);
                (0, c.useLayoutEffect)((function () {
                    L(w)
                }), []);
                var O = (0, c.useCallback)((function (e) {
                    S(!0);
                    var t = i.current;
                    if (t) {
                        var n = t.getBoundingClientRect(), r = e.clientX - n.left, o = l + r / n.width * g;
                        I(o)
                    }
                }), [g, I, l]), D = (0, c.useCallback)((function (e) {
                    j && (F(w), S(!1))
                }), [j, F, w]);
                return (0, c.useLayoutEffect)((function () {
                    var e = Math.round(w / u) * u;
                    w !== e && F(w)
                }), []), (0, c.useEffect)((function () {
                    return window.addEventListener("mouseup", D), function () {
                        return window.removeEventListener("mouseup", D)
                    }
                }), [D]), (0, c.useEffect)((function () {
                    return window.addEventListener("mousemove", R), function () {
                        return window.removeEventListener("mousemove", R)
                    }
                }), [R]), c.createElement("div", {className: "".concat(le)}, c.createElement("div", {
                    className: "".concat(le, "__lineWrapper"),
                    onMouseDown: function (e) {
                        return O(e.nativeEvent)
                    }
                }, c.createElement("div", {
                    className: "".concat(le, "__backgroundLine"),
                    ref: i
                }), c.createElement("div", {
                    className: "".concat(le, "__fullLine"),
                    style: {width: C}
                }, c.createElement("div", {className: "".concat(le, "__slug")}, p && c.createElement("div", {
                    className: "".concat(le, "__slugMark"),
                    ref: r,
                    style: {transform: N}
                }, p(w))))), f && c.createElement("ul", {className: "".concat(le, "__scaleLineList")}, Q()(t = M()({length: g / u + 1})).call(t, (function (e, t, n) {
                    return c.createElement("li", {
                        key: t,
                        className: ee()("".concat(le, "__scaleLineItem"), {filled: t / (n.length - 1) <= (w - l) / g}),
                        style: {left: (t / (n.length - 1) * 100).toFixed(2) + "%"}
                    })
                }))), void 0 !== m && c.createElement("ul", {className: "".concat(le, "__scaleMarkList")}, Q()(n = M()({length: g / u + 1})).call(n, (function (e, t, n) {
                    var i = t / (n.length - 1);
                    return void 0 !== m && null != m(l + t * u) && c.createElement("li", {
                        key: t,
                        className: ee()("".concat(le, "__scaleMark"), {end: 1 === i}),
                        style: {left: (100 * i).toFixed(2) + "%"}
                    }, m(l + t * u))
                }))))
            }, ue = n(45085), ce = n(88129), de = n(96453), fe = n(82955), me = n(16696), pe = n(16289), ve = n(79112),
            he = n(44586), _e = n(63952), ge = n(54871);

        function be(e, t) {
            var n = void 0 !== L() && O()(e) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                        var n;
                        if (!e) return;
                        if ("string" == typeof e) return ye(e, t);
                        var i = C()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return M()(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ye(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0, r = function () {
                    };
                    return {
                        s: r, n: function () {
                            return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                        }, e: function (e) {
                            throw e
                        }, f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, l = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    l = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function ye(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function we(e, t) {
            var n = w()(e);
            if (Z()) {
                var i = Z()(e);
                t && (i = j()(i).call(i, (function (t) {
                    return k()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? we(Object(n), !0).forEach((function (t) {
                    (0, U.Z)(e, t, n[t])
                })) : N() ? Object.defineProperties(e, N()(n)) : we(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, k()(n, t))
                }))
            }
            return e
        }

        var Ze, Ee = function (e) {
                return e && e.Math == Math && e
            },
            je = Ee("object" == (void 0 === u() ? "undefined" : (0, l.Z)(u())) && u()) || Ee("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || Ee("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || Ee("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        je.globalThis = je, je.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, function (e) {
            e.Opacity = "opacity", e.FontLevel = "fontLevel"
        }(Ze || (Ze = {}));
        var Se = (ae = {}, (0, U.Z)(ae, Ze.Opacity, [10, 100]), (0, U.Z)(ae, Ze.FontLevel, [1, 4]), ae),
            ke = "danmakuBarSetting", Pe = new (ne()), Ne = function (e) {
                var t = e.text, n = e.setText, i = e.showFilter, r = e.setShowFilter, o = (0, h.uU)(), l = o.settings,
                    s = o.updateSettings, u = o.getParams, d = o.isSupportMask, f = o.isBrowserSupportMask,
                    m = o.filterKeywords, p = o.updateFilterKeywords, v = o.groupId, _ = o.authorId, g = o.categoryName,
                    b = l.opacity, y = l.fontSizeLevel, w = l.speedLevel, x = l.displayArea, Z = l.enableMask, E = !f || !d,
                    j = (0, c.useRef)(null), S = (0, c.useRef)(null), k = (0, c.useState)(0), P = (0, a.Z)(k, 2), N = P[0],
                    T = P[1], C = (0, c.useState)(!1), I = (0, a.Z)(C, 2), M = I[0], F = I[1], L = (0, c.useState)(!1),
                    R = (0, a.Z)(L, 2), O = R[0], U = R[1], X = (0, c.useState)(!1), H = (0, a.Z)(X, 2), B = H[0], W = H[1],
                    q = (0, c.useState)(!1), J = (0, a.Z)(q, 2), $ = J[0], te = J[1], ne = (0, c.useState)([]),
                    re = (0, a.Z)(ne, 2), oe = re[0], ae = re[1], le = (0, c.useRef)(), ye = (0, ge._n)(),
                    we = (0, a.Z)(Se.opacity, 2), Ee = we[0], je = we[1], Ne = (0, a.Z)(Se.fontLevel, 2), Te = Ne[0],
                    Ce = Ne[1], Ie = function (e) {
                        ue.Z.danmaku_setting(xe({
                            section: "opacity",
                            defination: e + "%",
                            current_setting: b + "%"
                        }, u())), s({opacity: e})
                    }, Me = (0, c.useCallback)((function (e, t, n) {
                        var i = function (e) {
                            var n = (0, a.Z)(Se[t], 2), i = n[0], r = n[1];
                            return e < i ? i : e > r ? r : e
                        };
                        (0, ce.aV)(e) ? (e.preventDefault(), Ie(i(b - n))) : (0, ce.zO)(e) && (e.preventDefault(), Ie(i(b + n)))
                    }), []), Oe = function () {
                        var e = (0, A.Z)(V().mark((function e(t) {
                            var n, i, r, o, a, l;
                            return V().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, fe.yo)(t);
                                    case 2:
                                        n = e.sent, i = 0, r = be(n);
                                        try {
                                            for (r.s(); !(o = r.n()).done;) "string" == typeof(a = o.value) ? (l = Pe.splitGraphemes(a), i += l.length) : i += 1
                                        } catch (e) {
                                            r.e(e)
                                        } finally {
                                            r.f()
                                        }
                                        T(i);
                                    case 7:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), De = function () {
                        $ || N > 5 || (0 !== N ? 50 !== m.length ? z()(m).call(m, (function (e) {
                            return e.text.toLocaleLowerCase() === G()(t).call(t).toLocaleLowerCase()
                        })) > -1 ? U(!0) : (te(!0), me.Z.addCommentFilter(G()(t).call(t)).then((function (e) {
                            e.data && 0 === e.data.code ? p((function (e) {
                                te(!1), n(""), ue.Z.user_danmaku_shield_setting_done({
                                    action: "add",
                                    num: e.length,
                                    word: G()(t).call(t)
                                }), pe.Z.emit(pe.o.changeDanmakuFilter, e)
                            })) : he.Z.success("娣诲姞澶辫触")
                        })).catch((function (e) {
                            he.Z.error("鏈嶅姟寮傚父锛岃绋嶅悗閲嶈瘯"), te(!1)
                        }))) : F(!0) : W(!0))
                    };
                return (0, c.useEffect)((function () {
                    Oe(G()(t).call(t)), U(!1), W(!1)
                }), [t]), (0, c.useEffect)((function () {
                    m.length < 50 && F(!1)
                }), [m]), (0, c.useEffect)((function () {
                    return function () {
                        r(!1)
                    }
                }), [r]), (0, c.useEffect)((function () {
                    i && le.current && (ue.Z.user_danmaku_shield_panel_show({num: m.length}), le.current.focus())
                }), [i, le]), c.createElement("div", {className: "".concat(ke, "__wrapper")}, c.createElement("div", {
                    className: "".concat(ke, "__container"),
                    style: {left: i ? -352 : 0}
                }, c.createElement("div", {
                    className: "".concat(ke, "__panel"),
                    ref: j
                }, c.createElement("div", {
                    className: "".concat(ke, "__options"), ref: S, onKeyDown: function (e) {
                        return Me(e, Ze.Opacity, 10)
                    }, tabIndex: 0, role: "slider", "aria-valuemin": Ee, "aria-valuemax": je, "aria-valuenow": b
                }, c.createElement("div", {className: "".concat(ke, "__options__label")}, "涓嶉€忔槑搴�"), c.createElement("div", {className: "".concat(ke, "__options__slider")}, c.createElement(se, {
                    hasScale: !1,
                    min: Ee,
                    max: je,
                    defaultValue: b,
                    slugMark: function (e) {
                        return Math.round(e) + "%"
                    },
                    onChange: Ie
                }))), c.createElement("div", {
                    className: "".concat(ke, "__options"), onKeyDown: function (e) {
                        return Me(e, Ze.FontLevel, 1)
                    }, tabIndex: 0, role: "slider", "aria-valuemin": Te, "aria-valuemax": Ce, "aria-valuenow": Number(y)
                }, c.createElement("div", {className: "".concat(ke, "__options__label")}, "瀛楀彿澶у皬"), c.createElement("div", {className: "".concat(ke, "__options__slider")}, c.createElement(se, {
                    hasScale: !0,
                    fixedOnScale: !0,
                    min: Te,
                    max: Ce,
                    defaultValue: y,
                    scaleMarks: Le,
                    onChange: function (e) {
                        ue.Z.danmaku_setting(xe({
                            section: "fontsize",
                            defination: Le(e),
                            current_setting: Le(Number(y))
                        }, u())), s({fontSizeLevel: String(e)})
                    }
                }))), c.createElement("div", {
                    className: "".concat(ke, "__options"),
                    tabIndex: 0,
                    role: "slider",
                    "aria-valuemin": 1,
                    "aria-valuemax": 3,
                    "aria-valuenow": Number(w)
                }, c.createElement("div", {className: "".concat(ke, "__options__label")}, "寮瑰箷閫熷害"), c.createElement("div", {className: "".concat(ke, "__options__slider")}, c.createElement(se, {
                    hasScale: !0,
                    fixedOnScale: !0,
                    min: 1,
                    max: 3,
                    defaultValue: w,
                    scaleMarks: Fe,
                    onChange: function (e) {
                        ue.Z.danmaku_setting(xe({
                            section: "danmaku_speed",
                            defination: Fe(e),
                            current_setting: Fe(Number(w))
                        }, u())), s({speedLevel: String(e)})
                    }
                }))), c.createElement("div", {
                    className: "".concat(ke, "__options"),
                    tabIndex: 0,
                    role: "slider",
                    "aria-valuemin": .25,
                    "aria-valuemax": 1,
                    "aria-valuenow": Number(x)
                }, c.createElement("div", {className: "".concat(ke, "__options__label")}, "鏄剧ず鍖哄煙"), c.createElement("div", {className: "".concat(ke, "__options__slider")}, c.createElement(se, {
                    hasScale: !0,
                    fixedOnScale: !0,
                    min: .25,
                    max: 1,
                    step: .25,
                    defaultValue: x,
                    scaleMarks: Re,
                    onChange: function (e) {
                        ue.Z.danmaku_setting(xe({
                            section: "danmaku_area",
                            defination: Re(e),
                            current_setting: Re(Number(x))
                        }, u())), s({displayArea: e})
                    }
                }))), c.createElement("div", {className: ee()("".concat(ke, "__options"), {maskForbidon: E})}, c.createElement("div", {className: "".concat(ke, "__options__label")}, "寮瑰箷闃查伄鎸′汉鍍�", f ? d ? null : c.createElement("span", {className: "".concat(ke, "__danmaku__disable")}, "锛堟湰瑙嗛鏆備笉鏀寔姝ゅ姛鑳斤級") : c.createElement("span", {className: "".concat(ke, "__danmaku__disable")}, "锛堝綋鍓嶆祻瑙堝櫒涓嶆敮鎸佹鍔熻兘锛�")), c.createElement("div", {className: "".concat(ke, "__options__switch")}, c.createElement(ie.Z, {
                    disabled: E,
                    defaultChecked: !!f && Z,
                    onChange: function (e) {
                        ue.Z.danmaku_setting(xe({
                            section: "no_cover",
                            defination: e ? "on" : "off",
                            current_setting: e ? "off" : "on"
                        }, u())), s({enableMask: e})
                    },
                    "aria-label": "寮瑰箷闃查伄鎸′汉鍍忓紑鍏�"
                }))), c.createElement("div", {className: ee()("".concat(ke, "__options"))}, c.createElement("div", {
                    className: "".concat(ke, "__options__link"),
                    onClick: function () {
                        var e = {category_name: g, group_id: v, author_id: _};
                        if (!ye) return ue.Z.user_danmaku_shield_entrance_click(xe(xe({}, e), {}, {is_login: 0})), _e.ZP.show({source: "danmaku_shield"});
                        ue.Z.user_danmaku_shield_entrance_click(xe(xe({}, e), {}, {is_login: 1})), r(!0)
                    }
                }, c.createElement("span", null, "鑷畾涔夊睆钄借瘝"), c.createElement(de.OU8, {
                    width: "16",
                    height: "16"
                })))), c.createElement("div", {className: "".concat(ke, "__filter")}, c.createElement("div", {className: "".concat(ke, "__filter__header")}, c.createElement(de.eJh, {
                    width: "24",
                    height: "24",
                    onClick: function () {
                        return r(!1)
                    }
                }), c.createElement("span", null, "鑷畾涔夊睆钄借瘝")), c.createElement("div", {className: "".concat(ke, "__filter__content")}, c.createElement("div", {className: "".concat(ke, "__filter__input")}, c.createElement("input", {
                    value: t,
                    placeholder: "杈撳叆鎯宠灞忚斀鐨勮瘝锛屾渶澶�5涓瓧",
                    onChange: function (e) {
                        return n(e.target.value)
                    },
                    onKeyDown: function (e) {
                        !function (e) {
                            13 === e.keyCode && De()
                        }(e)
                    },
                    ref: le
                }), c.createElement("span", {
                    className: ee()({disabled: "" === G()(t).call(t) || N > 5}),
                    onClick: De
                }, $ ? c.createElement(ve.yg, null) : "娣诲姞")), M && c.createElement("div", {className: "".concat(ke, "__filter__error")}, "灞忚斀璇嶄釜鏁板凡杈句笂闄愶紝璇峰垹闄ゅ悗鍐嶆坊鍔�"), !M && N > 5 && c.createElement("div", {className: "".concat(ke, "__filter__error")}, "鏈€澶氬彲杈撳叆5涓瓧"), !M && O && c.createElement("div", {className: "".concat(ke, "__filter__error")}, "璇ュ睆钄借瘝宸插瓨鍦�"), !M && B && c.createElement("div", {className: "".concat(ke, "__filter__error")}, "灞忚斀璇嶅唴瀹逛笉鑳戒负绌�"), m.length > 0 && c.createElement("div", {className: "".concat(ke, "__filter__count")}, "宸叉坊鍔犲睆钄借瘝锛�", m.length, "/50锛�"), c.createElement("div", {className: ee()("".concat(ke, "__filter__keywords"), {hasError: M || N > 5})}, Q()(m).call(m, (function (e) {
                    return c.createElement("div", {
                        className: "".concat(ke, "__filter__keyword"),
                        key: e.id
                    }, c.createElement("span", null, c.createElement(fe.Vy, {text: e.text})), Y()(oe).call(oe, e.id) ? c.createElement(ve.yg, null) : c.createElement(de.x8P, {
                        width: "16",
                        height: "16",
                        onClick: function () {
                            return function (e) {
                                var t = e.id, n = e.text;
                                if (!Y()(oe).call(oe, t)) {
                                    var i = (0, D.Z)(oe);
                                    ae((function () {
                                        return K()(i).call(i, [t])
                                    })), me.Z.deleteCommentFilter(t).then((function (e) {
                                        e.data && 0 === e.data.code ? p((function (e) {
                                            ue.Z.user_danmaku_shield_setting_done({
                                                action: "delete",
                                                num: e.length,
                                                word: n
                                            }), pe.Z.emit(pe.o.changeDanmakuFilter, e)
                                        })) : he.Z.error("鍒犻櫎澶辫触")
                                    })).catch((function (e) {
                                        he.Z.error("鏈嶅姟寮傚父锛岃绋嶅悗閲嶈瘯"), ae(i)
                                    }))
                                }
                            }(e)
                        }
                    }))
                })))))))
            }, Te = function (e) {
                return e && e.Math == Math && e
            },
            Ce = Te("object" == (void 0 === u() ? "undefined" : (0, l.Z)(u())) && u()) || Te("object" == ("undefined" == typeof window ? "undefined" : (0, l.Z)(window)) && window) || Te("object" == ("undefined" == typeof self ? "undefined" : (0, l.Z)(self)) && self) || Te("object" == (void 0 === n.g ? "undefined" : (0, l.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ce.globalThis = Ce, Ce.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ie = {1: 20, 2: 25, 3: 28, 4: 30}, Me = {1: .5, 2: 1, 3: 2}, Fe = function (e) {
            switch (e) {
                case 1:
                    return "鎱㈤€�";
                case 2:
                    return "鏍囧噯";
                case 3:
                    return "蹇€�";
                default:
                    return null
            }
        }, Le = function (e) {
            switch (e) {
                case 1:
                    return "灏�";
                case 2:
                    return "鏍囧噯";
                case 3:
                    return "澶�";
                case 4:
                    return "瓒呭ぇ";
                default:
                    return null
            }
        }, Re = function (e) {
            switch (e) {
                case.25:
                    return "1/4灞�";
                case.5:
                    return "鍗婂睆";
                case.75:
                    return "3/4灞�";
                case 1:
                    return "涓嶉檺";
                default:
                    return null
            }
        }, Oe = function () {
            var e = (0, h.Wp)().setHideEmojiPanel, t = (0, c.useRef)(null), n = (0, c.useState)((function () {
                return !!(0, f.W7)()
            })), i = (0, a.Z)(n, 2), r = i[0], o = i[1];
            (0, c.useEffect)((function () {
                var e = function () {
                    null != (0, f.W7)() ? o(!0) : o(!1)
                };
                return (0, f.Df)(e), function () {
                    return (0, f.JM)(e)
                }
            }), []);
            var l = (0, m.Z)();
            (0, c.useEffect)((function () {
                var e;

                function n() {
                    e.play()
                }

                function i() {
                    e.stop()
                }

                return t.current && l && (e = l.loadAnimation({
                    container: t.current,
                    autoplay: !1,
                    path: r ? v : p
                }), t.current.addEventListener("mouseenter", n), t.current.addEventListener("mouseleave", i)), function () {
                    var r, o, a;
                    null === (r = e) || void 0 === r || r.destroy(), null === (o = t.current) || void 0 === o || o.removeEventListener("mouseenter", n), null === (a = t.current) || void 0 === a || a.removeEventListener("mouseleave", i)
                }
            }), [t.current, r, l]);
            var s = (0, c.useState)(""), u = (0, a.Z)(s, 2), _ = u[0], y = u[1], w = (0, c.useState)(!1),
                x = (0, a.Z)(w, 2), Z = x[0], E = x[1], j = (0, c.useMemo)((function () {
                    return r ? c.createElement("img", {
                        className: "full-screen-danmaku-setting",
                        src: globalThis.getFilterXss().filterUrl(b, null, {logType: "js.href/src", reportOnly: "all"})
                    }) : c.createElement(g, {className: "new-danmaku-setting"})
                }), [r]);
            return c.createElement(d.Z, {
                key: r ? "isFullScreen" : "isNotFullScreen",
                action: Z ? ["click"] : ["hover", "click"],
                popupClassName: ee()("".concat("danmakuBarSetting", "__popup"), {fullscreen: r}),
                getPopupContainer: function () {
                    return document.body
                },
                popup: c.createElement(Ne, {text: _, setText: y, showFilter: Z, setShowFilter: E}),
                popupAlign: {points: ["bl", "tl"], offset: [-168.5, r ? -19 : -28]},
                onPopupVisibleChange: function (n) {
                    var i;
                    n && e(!0), null === (i = t.current) || void 0 === i || i.setAttribute("aria-expanded", n)
                },
                destroyPopupOnHide: !0
            }, j)
        }
    }, 50239: function (e, t, n) {
        n.d(t, {
            dQ: function () {
                return u
            }, Gp: function () {
                return d
            }, uU: function () {
                return f
            }, Wp: function () {
                return m
            }
        });
        var i = n(19623), r = n(90149), o = n.n(r), a = n(67294), l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        var u = {opacity: 100, fontSizeLevel: "2", speedLevel: "2", displayArea: 1, enableMask: !1},
            c = a.createContext({
                getParams: function () {
                    return {log_pb: "{}", player_status: "player", duration: 0, percent: "0.0"}
                }, enableDanmakuDisplay: !1, player: void 0, danmu: void 0, setDanmu: function () {
                }, settings: u, groupId: "", itemId: "", authorId: "", categoryName: "", updateSettings: function (e) {
                }, filterKeywords: [], updateFilterKeywords: function () {
                }
            }), d = a.createContext({
                hideEmojiPanel: !1, setHideEmojiPanel: function (e) {
                    return null
                }
            });
        t.ZP = c;
        var f = function () {
            return (0, a.useContext)(c)
        }, m = function () {
            return (0, a.useContext)(d)
        }
    }, 78968: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return wn
            }
        });
        var i = n(86902), r = n.n(i), o = n(14310), a = n.n(o), l = n(20116), s = n.n(l), u = n(34074), c = n.n(u),
            d = n(39649), f = n.n(d), m = n(33938), p = n(44624), v = n(44845), h = n(59056), _ = n(19623),
            g = n(63109), b = n.n(g), y = (n(74916), n(56977), n(9653), n(41539), n(54747), n(15306), n(90149)),
            w = n.n(y), x = n(59340), Z = n.n(x), E = n(98926), j = n.n(E), S = n(2991), k = n.n(S), P = n(66419),
            N = n.n(P), T = n(67294), C = n(73935), I = (n(68309), n(3649)), M = n.n(I), F = n(65420), L = n.n(F),
            R = n(19996), O = n.n(R), D = (n(88674), n(17727), n(25843)), A = n.n(D), U = n(81643), X = n.n(U),
            V = n(54871), H = n(63952), z = n(94184), B = n.n(z), G = n(44586), W = n(72169), Y = n(79112),
            q = n(50239), K = n(39081), J = n(94614), Q = n(92744), $ = n(16289), ee = n(52725), te = n(82955),
            ne = n(96453), ie = n(7922);

        function re(e, t) {
            var n = void 0 !== L() && O()(e) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                        var n;
                        if (!e) return;
                        if ("string" == typeof e) return oe(e, t);
                        var i = M()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return N()(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return oe(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0, r = function () {
                    };
                    return {
                        s: r, n: function () {
                            return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                        }, e: function (e) {
                            throw e
                        }, f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, l = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    l = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function oe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function ae(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = s()(i).call(i, (function (t) {
                    return c()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ae(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : ae(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, c()(n, t))
                }))
            }
            return e
        }

        var se, ue = function (e) {
                return e && e.Math == Math && e
            },
            ce = ue("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || ue("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || ue("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || ue("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ce.globalThis = ce, ce.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, function (e) {
            e[e.Ordinary = 0] = "Ordinary", e[e.Operating = 1] = "Operating", e[e.FanGroup = 5] = "FanGroup", e[e.Author = 6] = "Author", e[e.HeadAuthor = 7] = "HeadAuthor", e[e.Star = 8] = "Star"
        }(se || (se = {}));
        var de, fe, me, pe = "xgpc-showControls", ve = function (e) {
            var t, n = e.groupId, i = e.itemId, r = e.player, o = e.onSend, a = e.beforeSend, l = e.isUserAuthor,
                s = (0, T.useState)(!1), u = (0, h.Z)(s, 2), c = u[0], d = u[1], f = (0, T.useState)(!1),
                p = (0, h.Z)(f, 2), v = p[0], _ = p[1], g = (0, q.uU)(), y = g.getParams, w = g.isFullscreen,
                x = g.categoryName, Z = (0, V._0)(), E = (0, V.jY)().id,
                j = null !== (t = null == Z ? void 0 : Z.isBanDanmuSend) && void 0 !== t && t, S = (0, V._n)(),
                k = (0, T.useState)(""), P = (0, h.Z)(k, 2), N = P[0], C = P[1], I = (0, T.useState)(!1),
                M = (0, h.Z)(I, 2), F = M[0], L = M[1], R = (0, T.useState)(0), O = (0, h.Z)(R, 2), D = O[0], U = O[1],
                z = (0, T.useState)(!1), oe = (0, h.Z)(z, 2), ae = oe[0], ue = oe[1], ce = 0 === A()(N).call(N).length,
                de = T.createRef(), fe = (0, T.useState)(null), me = (0, h.Z)(fe, 2), ve = me[0], he = me[1],
                _e = (0, q.Wp)(), ge = _e.hideEmojiPanel, be = _e.setHideEmojiPanel, ye = T.createRef(),
                we = (0, T.useState)(0), xe = (0, h.Z)(we, 2), Ze = xe[0], Ee = xe[1], je = (0, T.useState)(0),
                Se = (0, h.Z)(je, 2), ke = Se[0], Pe = Se[1], Ne = (0, T.useState)(!1), Te = (0, h.Z)(Ne, 2),
                Ce = Te[0], Ie = Te[1], Me = (0, T.useRef)(!1), Fe = (0, J.Z)().isElectron;
            (0, T.useEffect)((function () {
                ge && (L(!1), be(!1))
            }), [ge]), (0, T.useEffect)((function () {
                if (F && ve) {
                    var e = function () {
                        L(!1)
                    };
                    return window.addEventListener("resize", e), function () {
                        window.removeEventListener("resize", e)
                    }
                }
            }), [F]), (0, T.useEffect)((function () {
                var e = function (e) {
                    var t = e.clientX, n = e.clientY;
                    if (ve && ye.current) {
                        var i = ve.getBoundingClientRect(), r = i.left, o = i.top, a = i.width, l = i.height;
                        if (!(t > r && t < r + a && n > o && n < o + l + 35)) {
                            var s = ye.current;
                            if (s) {
                                var u = s.getBoundingClientRect();
                                t > u.left && t < u.left + u.width && n > u.top && n < u.top + u.height || L(!1)
                            }
                        }
                    }
                };
                return window.addEventListener("mousemove", e, !0), function () {
                    window.removeEventListener("mousemove", e, !0)
                }
            }), [ye, ve]), (0, T.useEffect)((function () {
                var e = function () {
                    var e, t = r.root.getBoundingClientRect(),
                        n = null === (e = ye.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (t && n) {
                        var i = t.left + t.width - (n.left + n.width);
                        i < 276 ? (Ee(428), Pe(414 - i)) : (Ee(560), Pe(280))
                    }
                };
                if (r && ye) return e(), window.addEventListener("resize", e), function () {
                    window.removeEventListener("resize", e)
                }
            }), [r, ye]), (0, T.useEffect)((function () {
                Me.current || 0 === N.length || (Me.current = !0, K.Z.danmaku.danmaku_edit(le({
                    level: 1,
                    section: "player",
                    fullscreen: w ? "fullscreen" : "nofullscreen"
                }, y())))
            }), [y, N, w]);
            var Le = function () {
                var e = (0, m.Z)(b().mark((function e() {
                    var t, s, u, f;
                    return b().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (null == o || o(), K.Z.danmaku.danmaku_pub_confirm(le({
                                        level: 1,
                                        section: "player",
                                        fullscreen: w ? "fullscreen" : "nofullscreen"
                                    }, y())), !c && !j) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                if (!1 !== (null == a ? void 0 : a())) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                if (!ce) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", G.Z.error("寮瑰箷鍐呭涓嶈兘涓虹┖"));
                            case 8:
                                if (!ae) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", G.Z.error("寮瑰箷瓒呭嚭40瀛�"));
                            case 10:
                                return t = Math.round(1e3 * r.currentTime), s = function () {
                                    G.Z.error("璐﹀彿鎺堟潈杩囨湡锛岃閲嶆柊鐧诲綍"), H.ZP.show({source: "danmaku"})
                                }, e.next = 14, (0, te.JB)(N);
                            case 14:
                                u = e.sent, f = (0, te.w4)(N), t && !isNaN(t) && (d(!0), W.Z.danmaku.sendDanmaku({
                                    group_id: n,
                                    item_id: i,
                                    offset_time: t,
                                    text: N
                                }).then((function (e) {
                                    var t, n, i, r = e.data;
                                    if (1 === (null === (t = r.base_resp) || void 0 === t ? void 0 : t.status_code) && (null === (n = r.base_resp) || void 0 === n || null === (i = n.status_message) || void 0 === i ? void 0 : X()(i).call(i, "unlogin")) > -1) s(); else {
                                        var o = "fakeId" + Date.now();
                                        "shark" === r.debug_info || 400 === r.base_resp.status_code && "hit shark" === r.base_resp.status_message ? o = "shark" + Date.now() : 0 === r.base_resp.status_code && (o = r.danmaku_id);
                                        var a = {isAuthor: !0, user_id: E, id: o, text: N};
                                        $.Z.emit($.o.pushDanmaku, a);
                                        var c = l ? se.Author : se.Ordinary;
                                        K.Z.danmaku.danmaku_pub_done(le(le({}, y()), {}, {
                                            danmaku_id: o,
                                            with_emoticon: u,
                                            with_timestamp: f,
                                            danmaku_type: c,
                                            category_name: x,
                                            level: 1,
                                            section: "player",
                                            fullscreen: w ? "fullscreen" : "nofullscreen"
                                        }))
                                    }
                                })).then((function () {
                                    C("")
                                })).catch((function (e) {
                                    (0, Q.wK)(e) ? s() : G.Z.error("鍙戦€佸け璐ワ紝璇烽噸璇�")
                                })).finally((function () {
                                    return d(!1)
                                })));
                            case 17:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), Re = function (e) {
                var t, n, i, o, a = e ? "add" : "remove";
                null == r || null === (t = r.root) || void 0 === t || null === (n = t.classList) || void 0 === n || n[a](pe), null == r || null === (i = r.controls) || void 0 === i || null === (o = i.classList) || void 0 === o || o[a](pe)
            }, Oe = function () {
                var e = (0, m.Z)(b().mark((function e(t) {
                    var n, i, r, o, a;
                    return b().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, te.yo)(t);
                            case 2:
                                n = e.sent, i = 0, r = re(n);
                                try {
                                    for (r.s(); !(o = r.n()).done;) a = o.value, i += "string" == typeof a ? a.length : 2
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                U(i), ue(i > 40);
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), De = (0, T.useMemo)((function () {
                return S ? "鍙戜釜寮瑰箷".concat(Fe ? "" : "锛屽拰澶у涓€璧疯亰鍛楋綖") : T.createElement(T.Fragment, null, " ", T.createElement("span", {className: "login"}, "鐧诲綍"), "鍚庡彲鍙戦€佸脊骞曞櫌锝�")
            }), [Fe, S]);
            return T.createElement("div", {
                className: B()("danmakuBar__input", {unlogin: !S, inputting: v}),
                onClick: function () {
                    if (!S) return H.ZP.show({source: "danmaku"});
                    j && G.Z.error("浣犲凡琚瑷€锛岀瑷€鏈熼棿鏃犳硶鍙戦€佸脊骞�")
                }
            }, T.createElement("div", {className: "danmakuBar__input__wrapper"}, T.createElement(ee.ZP, {
                onEmojiClick: function (e, t) {
                    if (de.current) {
                        de.current.focus(), C((0, ee.YN)(e, de.current)), Oe(de.current.value);
                        K.Z.danmaku.danmaku_emoticon_select(le(le({}, y()), {}, {
                            emoticon_id: t,
                            emoticon_section: "all",
                            category_name: x
                        }))
                    }
                },
                popupVisible: F,
                inputRef: de,
                points: ["tl", "tl"],
                offset: [-ke, -313],
                subClassName: "danmaku-emoji-popup",
                onMouseEnterEmojiPanel: function () {
                    Re(!0)
                },
                onMouseLeaveEmojiPanel: function () {
                    Re(!1)
                },
                getEmojiPanelRef: function (e) {
                    he(e)
                },
                emojiPanelWidth: Ze
            }, T.createElement("div", {
                className: B()("danmaku_emoji_entry", Ce && "active"),
                onMouseLeave: function () {
                    Ie(!1)
                },
                onMouseEnter: function () {
                    S && ye.current && (Ie(!0), L(!0), K.Z.danmaku.danmaku_emoticon_click(le(le({}, y()), {}, {category_name: x})))
                },
                ref: ye
            }, T.createElement(ne.dyV, null))), T.createElement("div", {className: "danmakuBar__input__wrapper__new_sep"}), T.createElement("input", {
                className: "font-h4-regular",
                type: "text",
                value: N,
                onChange: function (e) {
                    Oe(e.target.value), C(e.target.value)
                },
                onKeyDown: function (e) {
                    13 === e.keyCode && Le()
                },
                readOnly: j || !S,
                onFocus: function () {
                    _(!0), $.Z.emit($.o.danmakuFocus), K.Z.danmaku.danmaku_input_click(le({
                        level: 1,
                        section: "player",
                        fullscreen: w ? "fullscreen" : "nofullscreen"
                    }, y())), r && (document.removeEventListener("keydown", null == r ? void 0 : r.onBodyKeydown), r.root.removeEventListener("keydown", null == r ? void 0 : r.onKeydown))
                },
                onBlur: function () {
                    _(!1), $.Z.emit($.o.danmakuBlur), r && (document.addEventListener("keydown", r.onBodyKeydown), r.root.addEventListener("keydown", r.onKeydown))
                },
                tabIndex: 0,
                "aria-labelledby": "danmakuBar__input__placeholder",
                ref: de
            }), "" === N && T.createElement("div", {
                className: "danmakuBar__input__placeholder font-h4-regular newInputStyle",
                id: "danmakuBar__input__placeholder"
            }, De), T.createElement("span", {className: B()("count", {warn: ae})}, " ", D, "/", 40)), T.createElement(ie.zx, {
                tabIndex: 0,
                "aria-label": "鍙戦€佸脊骞�",
                className: B()("danmakuBar__input__send", {disabled: j || ae, isEmpty: ce}),
                onClick: Le
            }, c ? T.createElement(Y.yg, null) : "鍙戦€�"))
        }, he = n(45804), _e = n(8447), ge = n(42004);

        function be() {
            return be = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, be.apply(this, arguments)
        }

        var ye, we, xe, Ze = function (e) {
            return T.createElement("svg", be({
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), de || (de = T.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.69 8.186a.91.91 0 00-1.136.504c-.259.607-.627 1.442-.898 1.942h-1.08l-1.009-1.97a.817.817 0 00-.988-.402.839.839 0 00-.434 1.24c.23.367.483.79.657 1.132h-1.367a.588.588 0 00-.588.588v5.905c0 .325.263.588.588.588h2.758v1.168h-3.077a.865.865 0 100 1.73h3.077v2.068a.898.898 0 001.436.72l.033-.025-.015-.038a7.552 7.552 0 01-.52-2.763c0-1.608.5-3.1 1.353-4.325l.058-.084h-.548V14.98h1.602l.015-.014a7.484 7.484 0 011.765-1.192l.03-.015V11.22a.588.588 0 00-.588-.588h-1.29c.202-.322.456-.805.666-1.22a.88.88 0 00-.5-1.226zm-5.196 5.262v-1.252h1.699v1.252h-1.699zm3.496 0v-1.252h1.781v1.252H18.99zm-3.496 2.716V14.98h1.699v1.185h-1.699z",
                fill: "#fff",
                fillOpacity: .9
            })), fe || (fe = T.createElement("path", {
                d: "M8.723 8.66a.79.79 0 100 1.582h2.324v2.046H8.79a.588.588 0 00-.586.536l-.368 4.132c-.031.344.24.64.585.64h2.792c-.002 1.727-.068 2.847-.181 3.365a.815.815 0 01-.411.561c-.223.126-.536.192-.945.192-.16 0-.372-.01-.582-.023a.6.6 0 00-.62.755l.138.498c.067.239.276.41.524.426.297.019.703.041.954.041h.003c.759-.05 1.357-.208 1.792-.48.436-.273.706-.658.808-1.153v-.001c.067-.385.122-1.363.165-2.4.043-1.038.073-2.141.089-2.78A.585.585 0 0012.36 16H9.652l.221-2.13h2.399a.588.588 0 00.588-.588V8.773a.113.113 0 00-.113-.113H8.723z",
                fill: "#fff",
                fillOpacity: .9
            })), me || (me = T.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.516 24.438c2.479 0 4.53-2.016 4.53-4.493 0-2.48-2.052-4.505-4.53-4.505-2.47 0-4.47 2.018-4.47 4.505 0 2.485 1.998 4.493 4.47 4.493zm2.663-6.168a.75.75 0 010 1.06l-2.52 2.52a.75.75 0 01-1.061 0l-1.427-1.426a.75.75 0 011.061-1.06l.896.895 1.99-1.99a.75.75 0 011.06 0z",
                fill: "#499DF2"
            })))
        };

        function Ee() {
            return Ee = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, Ee.apply(this, arguments)
        }

        var je = function (e) {
                return T.createElement("svg", Ee({
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), ye || (ye = T.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.707 8.2a.91.91 0 00-1.137.504c-.259.607-.627 1.442-.898 1.941h-1.08l-1.009-1.97a.817.817 0 00-.988-.401.839.839 0 00-.434 1.24c.23.367.483.79.657 1.131H14.45a.588.588 0 00-.588.589v5.904c0 .325.263.588.588.588h2.758v1.17h-3.077a.865.865 0 100 1.73h3.077v2.066a.898.898 0 001.436.72l.033-.024-.015-.038a7.552 7.552 0 01-.52-2.763c0-1.609.5-3.1 1.352-4.325l.059-.084h-.548v-1.185h1.602l.015-.014a7.487 7.487 0 011.765-1.192l.03-.015v-2.538a.588.588 0 00-.588-.589h-1.29c.202-.32.456-.804.666-1.22a.88.88 0 00-.5-1.225zm-5.197 5.261V12.21h1.699v1.251H15.51zm3.496 0V12.21h1.781v1.251h-1.781zm-3.496 2.717v-1.185h1.699v1.185H15.51z",
                    fill: "#fff",
                    fillOpacity: .9
                })), we || (we = T.createElement("path", {
                    d: "M8.74 8.674a.79.79 0 000 1.581h2.323v2.047H8.806a.588.588 0 00-.586.536l-.368 4.132c-.031.344.24.64.585.64h2.792c-.002 1.727-.068 2.846-.181 3.365a.815.815 0 01-.411.56c-.223.127-.536.193-.945.193-.16 0-.372-.01-.582-.023a.6.6 0 00-.62.755l.138.497c.067.24.276.411.524.427.297.019.703.041.954.041h.003c.759-.05 1.357-.209 1.792-.48.436-.273.706-.658.808-1.153v-.002c.067-.384.122-1.362.165-2.399.043-1.038.073-2.142.089-2.78a.585.585 0 00-.587-.598H9.668l.221-2.13h2.399a.588.588 0 00.588-.588V8.787a.113.113 0 00-.113-.113H8.74z",
                    fill: "#fff",
                    fillOpacity: .9
                })), xe || (xe = T.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M29.055 19.949c0 2.48-2.052 4.496-4.533 4.496-2.473 0-4.472-2.01-4.472-4.496 0-2.488 2-4.509 4.472-4.509 2.48 0 4.533 2.028 4.533 4.509zm-6.255-.707a.75.75 0 100 1.5h3.5a.75.75 0 000-1.5h-3.5z",
                    fill: "#fff",
                    fillOpacity: .9
                })))
            }, Se = function (e) {
                return e && e.Math == Math && e
            },
            ke = Se("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Se("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Se("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Se("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        var Pe = function (e) {
                var t = e.on, i = e.onClick, r = (e.isFullscreen, (0, he.Z)({type: "enter"})), o = r.ref, a = r.isHover,
                    l = (0, T.useRef)(), s = (0, _e.Z)(), u = (0, T.useCallback)((function (e) {
                        if (o.current && s) {
                            var i = n(e ? t ? 56513 : 11110 : t ? 63903 : 92535),
                                r = o.current.querySelector(".danmaku-setting-lottie");
                            r && o.current.removeChild(r), l.current = s.loadAnimation({
                                path: i,
                                container: o.current,
                                autoplay: !1,
                                rendererSettings: {className: "danmaku-setting-lottie"}
                            })
                        }
                        return function () {
                            var e;
                            null === (e = l.current) || void 0 === e || e.destroy()
                        }
                    }), [s, t, o]);
                (0, T.useEffect)((function () {
                    var e;
                    return o.current && (e = u((0, ge.uu)())), e
                }), [o, u]), (0, T.useEffect)((function () {
                    var e;
                    null === (e = l.current) || void 0 === e || e[a ? "play" : "stop"]()
                }), [l.current, a]), (0, T.useEffect)((function () {
                    var e = function () {
                        return u((0, ge.uu)())
                    };
                    return (0, ge.Df)(e), function () {
                        (0, ge.JM)(e)
                    }
                }), []);
                var c = (0, T.useMemo)((function () {
                    return t ? Ze : je
                }), [t]), d = (0, T.useMemo)((function () {
                    return T.createElement(c, {
                        className: B()("new-danmaku-switch", {"new-danmaku-switch-on": t}),
                        onClick: i
                    })
                }), [c, t, i]);
                return T.createElement(T.Fragment, null, d)
            }, Ne = n(91481), Te = n(41266), Ce = n(94473), Ie = n.n(Ce), Me = n(77766), Fe = n.n(Me), Le = n(73494),
            Re = n.n(Le), Oe = ["style"];

        function De(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = s()(i).call(i, (function (t) {
                    return c()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? De(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : De(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, c()(n, t))
                }))
            }
            return e
        }

        var Ue = function (e) {
                return e && e.Math == Math && e
            },
            Xe = Ue("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Ue("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Ue("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Ue("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Xe.globalThis = Xe, Xe.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        Re()("danmu");
        var Ve = n(16696), He = n(23493), ze = n.n(He), Be = n(52350), Ge = n(5101), We = function (e) {
                return e && e.Math == Math && e
            },
            Ye = We("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || We("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || We("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || We("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        var qe = function () {
                var e = (0, q.uU)(), t = e.player, n = e.enableDanmakuDisplay, i = e.groupId, r = e.itemId, o = !n,
                    a = (0, T.useState)([]), l = (0, h.Z)(a, 2), s = l[0], u = l[1], c = (0, V.jY)(),
                    d = (0, Be.Z)({player: t}).duration_Ref, f = (0, Ge.Z)().fontSize_Ref;
                (0, T.useEffect)((function () {
                    if (t) {
                        u([]);
                        var e = function () {
                            var e = function (e, t) {
                                for (var n = 0, i = []; n < e;) {
                                    var r = n + t;
                                    r > e && (r = e), i.push({start: n, end: r, hasUsed: !1, fetchTimes: 0}), n = r
                                }
                                return i
                            }(t.duration || 0, 32);
                            u(e)
                        };
                        return t.isInited && t.duration && e(), t.once("canplay", e), function () {
                            null == t || t.off("canplay", e)
                        }
                    }
                }), [t, i, r]), (0, T.useEffect)((function () {
                    var e = ze()((function () {
                        if (t) {
                            var e = t.currentTime;
                            if (!t.paused) {
                                var n = function (e, t) {
                                    return Ie()(e).call(e, (function (e) {
                                        return t >= e.start && t <= e.end
                                    }))
                                }(s, e);
                                !n || n.hasUsed || n.isLoading || n.fetchTimes > 3 || (n.fetchTimes ? n.fetchTimes++ : n.fetchTimes = 1, n.isLoading = !0, Ve.Z.getDanmakuList({
                                    item_id: r,
                                    group_id: i,
                                    start_time: String(Math.round(1e3 * n.start)),
                                    end_time: String(Math.round(1e3 * n.end))
                                }).then((function (e) {
                                    var t, i = e.data;
                                    0 === (null == i || null === (t = i.base_resp) || void 0 === t ? void 0 : t.status_code) && (n.hasUsed = !0, i.data.forEach(function () {
                                        var e = (0, m.Z)(b().mark((function e(t) {
                                            var n;
                                            return b().wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        n = {
                                                            isAuthor: c.id === String(t.user_info.user_id),
                                                            user_id: t.user_info.user_id,
                                                            id: t.danmaku_id,
                                                            text: t.text,
                                                            start: Number(t.offset_time),
                                                            offset_time: t.offset_time,
                                                            digg_count: Number(t.digg_count),
                                                            like: t.action_status === Ve.M.Digg,
                                                            parent_danmaku_id: t.parent_danmaku_id
                                                        }, $.Z.emit($.o.pushDanmaku, n);
                                                    case 2:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()))
                                })).finally((function () {
                                    n.isLoading = !1
                                })))
                            }
                        }
                    }), 2e3);
                    return t && !o && t.on("timeupdate", e), function () {
                        null == t || t.off("timeupdate", e)
                    }
                }), [t, s, o, i, r, c, d, f])
            }, Ke = (n(66992), n(78783), n(33948), n(11389)), Je = n(90328), Qe = function (e) {
                return e && e.Math == Math && e
            },
            $e = Qe("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Qe("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Qe("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Qe("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        $e.globalThis = $e, $e.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var et, tt, nt = !1, it = function () {
            var e = (0, q.uU)(), t = e.player, i = e.enableDanmakuDisplay, r = e.settings, o = e.barrageMask,
                a = e.size, l = e.isBrowserSupportMask, s = r.enableMask, u = l && i && s,
                c = (0, T.useMemo)((function () {
                    var e;
                    return JSON.parse(null !== (e = null == o ? void 0 : o.offset) && void 0 !== e ? e : "{}")
                }), [null == o ? void 0 : o.offset]);
            (0, T.useEffect)((function () {
                function e() {
                    return i.apply(this, arguments)
                }

                function i() {
                    return (i = (0, m.Z)(b().mark((function e() {
                        var i, r, a, l;
                        return b().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (i = null == o ? void 0 : o.url, !(u && t && i)) {
                                        e.next = 9;
                                        break
                                    }
                                    if (nt) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 5, n.e(5812).then(n.t.bind(n, 50838, 23));
                                case 5:
                                    r = e.sent, nt = !0, et = r.default;
                                case 8:
                                    et && (null === (a = tt) || void 0 === a || a.destroy(), (tt = new et({
                                        url: Ke.Z.base64decode(i).replace(/^https?:/, ""),
                                        originStart: null !== (l = c.origin_start) && void 0 !== l ? l : 0,
                                        player: t,
                                        interval: 10
                                    })).init());
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                var r = function () {
                    var e;
                    null === (e = tt) || void 0 === e || e.destroy(), tt = void 0
                };
                t.once("next", (function () {
                    r(), e()
                }));
                var a = (0, Je.s9)({player: t, callback: e});
                return function () {
                    a(), r()
                }
            }), [null == o ? void 0 : o.url, c.origin_start, u, t]), (0, T.useEffect)((function () {
                var e;
                null === (e = tt) || void 0 === e || e.setContainerSize(null == a ? void 0 : a.width, null == a ? void 0 : a.height)
            }), [a])
        };

        function rt(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = s()(i).call(i, (function (t) {
                    return c()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ot(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? rt(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : rt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, c()(n, t))
                }))
            }
            return e
        }

        var at = function (e) {
                return e && e.Math == Math && e
            },
            lt = at("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || at("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || at("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || at("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        var st, ut = Re()("danmu"), ct = function () {
                var e = (0, q.uU)(), t = e.player, n = e.getParams, i = e.enableDanmakuDisplay, r = e.settings,
                    o = e.setDanmu, a = e.itemId, l = e.groupId, s = e.size, u = e.updateSettings, c = e.isSupportMask,
                    d = r.opacity, f = r.displayArea, m = !i, p = (0, T.useRef)(!1), v = (0, T.useState)(!1),
                    _ = (0, h.Z)(v, 2), g = _[0], b = _[1], y = (0, T.useRef)(0), w = (0, T.useCallback)((function () {
                        y.current++, t && (t.xgpcInfo = ot(ot({}, t.xgpcInfo), {}, {danmaku_play_count: y.current}))
                    }), [t]), x = (0, T.useMemo)((function () {
                        return "undefined" != typeof window && /Edge\//i.test(window.navigator.userAgent)
                    }), []);
                (0, T.useEffect)((function () {
                    u({enableMask: c})
                }), [c, u]), (0, T.useEffect)((function () {
                    t && (t.xgpcInfo = ot(ot({}, t.xgpcInfo), {}, {danmaku_play_count: y.current}))
                }), [t]), (0, T.useEffect)((function () {
                    var e;
                    g && (null == t || null === (e = t.danmu) || void 0 === e || e.resize())
                }), [g, f, s]);
                var Z = (0, T.useCallback)((function () {
                    var e, n, i, r, a;
                    t && (null != t && null !== (e = t.danmu) && void 0 !== e && e.start && !1 === p.current ? (null == t || null === (n = t.danmu) || void 0 === n || n.start(), null == t || null === (i = t.danmu) || void 0 === i || i.resize(), p.current = !0, b(!0), ut("start"), o(t.danmu), t.paused ? null == t || null === (r = t.danmu) || void 0 === r || r.pause() : null == t || null === (a = t.danmu) || void 0 === a || a.play()) : ut("start failed"))
                }), [t, o]), E = (0, T.useCallback)((function () {
                    var e;
                    ut("stop"), null == t || null === (e = t.danmu) || void 0 === e || e.stop(), p.current = !1
                }), [t]), j = (0, T.useCallback)((function () {
                    var e;
                    !0 === p.current ? null == t || null === (e = t.danmu) || void 0 === e || e.play() : Z()
                }), [t, Z]), S = (0, T.useCallback)((function () {
                    var e;
                    null == t || null === (e = t.danmu) || void 0 === e || e.pause()
                }), [t]), k = (0, T.useCallback)((function () {
                    var e;
                    return null == t || null === (e = t.danmu) || void 0 === e ? void 0 : e.hide()
                }), [t]), P = (0, T.useCallback)((function () {
                    var e;
                    return null == t || null === (e = t.danmu) || void 0 === e ? void 0 : e.start()
                }), [t]), N = (0, T.useCallback)((function () {
                    var e, n;
                    t.paused ? null == t || null === (e = t.danmu) || void 0 === e || e.pause() : null == t || null === (n = t.danmu) || void 0 === n || n.play()
                }), [t]), C = (0, T.useRef)((function () {
                })), I = (0, T.useCallback)((function () {
                    S(), x && (C.current(), t.once("timeupdate", j), C.current = function () {
                        return t.off("timeupdate", j)
                    })
                }), [t, x]), M = (0, Be.Z)({player: t}).duration;
                (0, T.useEffect)((function () {
                    return function () {
                        E(), C.current()
                    }
                }), []), (0, T.useEffect)((function () {
                    var e;
                    t && g && (ut("setAllDuration", M), null == t || null === (e = t.danmu) || void 0 === e || e.setAllDuration("scroll", M, !0))
                }), [M, t, g]), (0, T.useEffect)((function () {
                    var e;
                    t && g && p && (null == t || null === (e = t.danmu) || void 0 === e || e.setOpacity(d / 100))
                }), [d, t, g, p]);
                var F = (0, Ge.Z)().fontSize;
                (0, T.useEffect)((function () {
                    var e, n, i, r, o, a = Math.round(F / .93), l = Math.round(F / 1.1);
                    (t.root.style.setProperty("--danmaku-font-size", "".concat(F, "px")), null === (e = t.root.parentElement) || void 0 === e || e.style.setProperty("--danmaku-font-size", "".concat(F, "px")), null === (n = t.root.parentElement) || void 0 === n || n.style.setProperty("--danmaku-img-height", "".concat(a, "px")), null === (i = t.root.parentElement) || void 0 === i || i.style.setProperty("--danmaku-icon-size", "".concat(l, "px")), t.root.style.setProperty("--danmaku-img-height", "".concat(a, "px")), t && g) && (null == t || null === (r = t.danmu) || void 0 === r || r.setFontSize(F, 41 * F / 25), null == t || null === (o = t.danmu) || void 0 === o || o.resize())
                }), [F, t, g]), (0, T.useEffect)((function () {
                    if (t && g) {
                        var e, n = .94 * f + .01;
                        null === (e = t.danmu) || void 0 === e || e.setArea(ot(ot({}, t.danmu.config.area), {}, {
                            start: .01,
                            end: n
                        }))
                    }
                }), [f, t, g]), (0, T.useEffect)((function () {
                    return !m && t && (!1 === t.paused && Z(), t.once("playing", Z), t.on("play", j), t.on("playing", j), t.on("pause", S), t.on("seeking", k), t.on("seeked", P), t.on("canplay", N), t.on("waiting", I)), function () {
                        t && (m || E(), t.off("playing", Z), t.off("play", j), t.off("playing", j), t.off("pause", S), t.off("seeking", k), t.off("seeked", P), t.off("canplay", N), t.off("waiting", I))
                    }
                }), [l, a, t, m, j, S, k, P, Z, E, N, I]);
                var L = (0, T.useRef)(!1);
                return (0, T.useEffect)((function () {
                    if (g && !1 === L.current) {
                        var e;
                        null === (e = t.danmu) || void 0 === e || e.once("bullet_start", (function (e) {
                            L.current = !0, K.Z.danmaku.first_danmaku(n())
                        }))
                    }
                }), [g, t, n]), (0, T.useEffect)((function () {
                    var e;
                    if (g) return null === (e = t.danmu) || void 0 === e || e.on("bullet_start", w), function () {
                        var e;
                        null == t || null === (e = t.danmu) || void 0 === e || e.off("bullet_start", w)
                    }
                }), [g, t, w]), it(), {startDanmaku: Z, playDanmaku: j, pauseDanmaku: S, hideDanmaku: k, showDanmaku: P}
            }, dt = n(70326), ft = (n(64765), n(39714), n(23123), n(4723), n(78580)), mt = n.n(ft), pt = n(68956),
            vt = n(17082), ht = n(64138), _t = n(14719);

        function gt() {
            return gt = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, gt.apply(this, arguments)
        }

        var bt = function (e) {
                return T.createElement("svg", gt({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), st || (st = T.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.41 4.41a.833.833 0 011.18 0L10 8.823l4.41-4.411a.833.833 0 111.18 1.178L11.178 10l4.41 4.41a.833.833 0 11-1.178 1.18L10 11.178l-4.412 4.41a.833.833 0 11-1.178-1.178L8.82 10l-4.41-4.412a.833.833 0 010-1.178z",
                    fill: "#606266"
                })))
            }, yt = function (e) {
                return e && e.Math == Math && e
            },
            wt = yt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || yt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || yt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || yt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        wt.globalThis = wt, wt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var xt, Zt = "ConfirmDialog", Et = (0, _t.Z)((function (e) {
            var t = e.text, n = e.onConfirm, i = e.onCancel, r = e.destroyDialog;
            return T.createElement("div", {className: "".concat(Zt)}, T.createElement("div", {className: "".concat(Zt, "-text")}, t), T.createElement(bt, {
                className: "".concat(Zt, "-close"),
                onClick: function () {
                    null == i || i(), r()
                }
            }), T.createElement("div", {className: "".concat(Zt, "-button-wrapper")}, T.createElement("div", {
                className: "".concat(Zt, "-button"),
                onClick: function () {
                    null == i || i(), r()
                }
            }, "鍙栨秷"), T.createElement("div", {
                className: "".concat(Zt, "-button ").concat(Zt, "-button-active"),
                onClick: function () {
                    n(), r()
                }
            }, "纭畾")))
        })), jt = n(27105);

        function St() {
            return St = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, St.apply(this, arguments)
        }

        var kt, Pt = function (e) {
            return T.createElement("svg", St({
                width: 24,
                height: 25,
                viewBox: "0 0 24 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), xt || (xt = T.createElement("g", {
                stroke: "#fff",
                strokeWidth: 2
            }, T.createElement("path", {d: "M6.164 9.255v8.114a2.376 2.376 0 002.376 2.376h7.363a2.376 2.376 0 002.376-2.376V9.255M16.895 8.275V5.797a1 1 0 00-1-1H8.549a1 1 0 00-1 1v2.478"}), T.createElement("path", {
                d: "M4.3 8.275h15.843M10.223 12.45v2.795M14.22 12.45v2.795",
                strokeLinecap: "round"
            }))))
        };

        function Nt() {
            return Nt = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, Nt.apply(this, arguments)
        }

        var Tt, Ct, It, Mt = function (e) {
            return T.createElement("svg", Nt({
                width: 24,
                height: 25,
                viewBox: "0 0 24 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), kt || (kt = T.createElement("path", {
                d: "M6 8.272a2 2 0 012-2h10a2 2 0 012 2v6.77a2 2 0 01-2 2h-7.35a2 2 0 00-1.497.673l-1.405 1.584c-.61.69-1.748.257-1.748-.663V8.272z",
                stroke: "#fff",
                strokeWidth: 2
            })))
        };

        function Ft() {
            return Ft = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, Ft.apply(this, arguments)
        }

        var Lt = function (e) {
            return T.createElement("svg", Ft({
                width: 24,
                height: 25,
                viewBox: "0 0 24 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Tt || (Tt = T.createElement("path", {
                clipRule: "evenodd",
                d: "M10.001 6.434c.928-1.532 3.152-1.526 4.071.01l5.525 9.232c.947 1.584-.194 3.597-2.04 3.597H6.444c-1.851 0-2.992-2.024-2.033-3.607l5.591-9.232z",
                stroke: "#fff",
                strokeWidth: 2
            })), Ct || (Ct = T.createElement("circle", {
                cx: 12,
                cy: 15.285,
                r: 1,
                fill: "#fff"
            })), It || (It = T.createElement("path", {
                d: "M12 10.273v2",
                stroke: "#fff",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }, Rt = n(24511);

        function Ot(e, t) {
            var n = void 0 !== L() && O()(e) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                        var n;
                        if (!e) return;
                        if ("string" == typeof e) return Dt(e, t);
                        var i = M()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return N()(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Dt(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0, r = function () {
                    };
                    return {
                        s: r, n: function () {
                            return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                        }, e: function (e) {
                            throw e
                        }, f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, l = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    l = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function Dt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function At(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = s()(i).call(i, (function (t) {
                    return c()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? At(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : At(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, c()(n, t))
                }))
            }
            return e
        }

        var Xt = function (e) {
                return e && e.Math == Math && e
            },
            Vt = Xt("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Xt("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Xt("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Xt("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Vt.globalThis = Vt, Vt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ht, zt, Bt, Gt = function (e) {
            var t = (0, q.uU)(), i = t.danmu, r = t.itemId, o = t.groupId, a = t.getParams, l = t.isFullscreen,
                s = t.videoRef, u = t.updateHoverDanmuId, c = t.categoryName, d = e.danmuInfo, f = e.hideTooltip,
                p = e.container, _ = e.onActiveChange, g = e.hoverMouseEvent_Ref, y = e.isUserAuthor,
                w = e.setCanBulletHover, x = e.beforeSend, Z = (0, T.useState)(!1), E = (0, h.Z)(Z, 2), j = E[0],
                S = E[1], k = (0, he.Z)({type: "enter"}), P = k.ref, N = k.isHover, C = (0, T.useState)(!1),
                I = (0, h.Z)(C, 2), M = I[0], F = I[1], L = (0, T.useCallback)((function () {
                    _(!1), F(!1)
                }), [_]), R = (0, T.useState)({left: 0, top: 0}), O = (0, h.Z)(R, 2), D = O[0], U = O[1],
                z = (0, T.useState)(!1), K = (0, h.Z)(z, 2), J = K[0], ne = K[1], re = (0, V.jY)(), oe = (0, V._n)(),
                ae = (0, T.useState)(!1), le = (0, h.Z)(ae, 2), ue = le[0], ce = le[1], de = (0, T.useState)(""),
                fe = (0, h.Z)(de, 2), me = fe[0], pe = fe[1], ve = (0, T.useState)(!1), _e = (0, h.Z)(ve, 2),
                ge = _e[0], be = _e[1], ye = T.createRef(), we = (0, T.useState)(null), xe = (0, h.Z)(we, 2),
                Ze = xe[0], Ee = xe[1], je = (0, T.useState)(0), Se = (0, h.Z)(je, 2), ke = Se[0], Pe = Se[1],
                Ne = (0, T.useState)(!1), Te = (0, h.Z)(Ne, 2), Ce = Te[0], Ie = Te[1], Me = (0, T.useState)(1),
                Fe = (0, h.Z)(Me, 2), Le = Fe[0], Re = Fe[1], Oe = (0, T.useState)(!0), De = (0, h.Z)(Oe, 2),
                Ae = De[0], Ue = De[1], Xe = T.createRef(), He = (0, T.useState)(!1), ze = (0, h.Z)(He, 2), Be = ze[0],
                Ge = ze[1], We = (0, T.useState)(0), Ye = (0, h.Z)(We, 2), qe = Ye[0], Ke = Ye[1],
                Je = (0, T.useState)(!1), Qe = (0, h.Z)(Je, 2), $e = Qe[0], et = Qe[1], tt = (0, T.useState)(!1),
                nt = (0, h.Z)(tt, 2), it = nt[0], rt = nt[1], ot = (0, T.useState)(0), at = (0, h.Z)(ot, 2), lt = at[0],
                st = at[1], ut = (0, T.useState)(!1), ct = (0, h.Z)(ut, 2), dt = ct[0], ft = ct[1],
                vt = (0, T.useState)(!1), _t = (0, h.Z)(vt, 2), gt = _t[0], bt = _t[1], yt = (0, T.useState)({}),
                wt = (0, h.Z)(yt, 2), xt = wt[0], Zt = wt[1], St = (0, T.useState)(""), kt = (0, h.Z)(St, 2),
                Nt = kt[0], Tt = kt[1], Ct = (0, T.useRef)(""), It = (0, T.useRef)(!1), Ft = (0, T.useRef)(!1),
                Dt = (0, T.useCallback)((0, m.Z)(b().mark((function e() {
                    var t, n, i;
                    return b().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (F(!0), null != (null == d ? void 0 : d.id)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (n = a(), i = {
                                        author_user_id: null == d || null === (t = d.options) || void 0 === t ? void 0 : t.user_id,
                                        user_id: re.id,
                                        group_id: o,
                                        danmaku_id: d.id,
                                        fullscreen: l ? "yes" : "no",
                                        log_pb: n.log_pb
                                    }, pt.Z.common.clickTipOff(Ut(Ut({}, i), {}, {
                                        tip_off_type: "danmaku",
                                        is_login: oe ? 1 : 0
                                    })), oe) {
                                    e.next = 9;
                                    break
                                }
                                return H.ZP.show({source: "login", onCancel: L}), e.abrupt("return");
                            case 9:
                                return e.next = 11, W.Z.user.isLogout();
                            case 11:
                                if (!e.sent) {
                                    e.next = 16;
                                    break
                                }
                                return G.Z.error("璐﹀彿鎺堟潈杩囨湡锛岃閲嶆柊鐧诲綍"), H.ZP.show({
                                    source: "login",
                                    onCancel: L
                                }), e.abrupt("return");
                            case 16:
                                jt.Z.reuse({
                                    type: "danmaku",
                                    params: {danmaku_id: null == d ? void 0 : d.id},
                                    eventParams: i,
                                    onCancel: L,
                                    onConfirm: L
                                });
                            case 17:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), [d, a, L]), At = (0, T.useRef)(!1), Xt = (0, T.useRef)(!1);
            (0, T.useEffect)((function () {
                if (be(!1), ce(!1), null != d && d.id) {
                    pt.Z.danmaku.hover_show(Ut({danmaku_id: d.id}, a()));
                    var e = d.options.isAuthor;
                    S(e), At.current = !1, rt(d.options.like), st(d.options.digg_count || 0), null == u || u(d.id), ft(!0), Ct.current = d.id
                } else Ge(!1), null == u || u(void 0), ft(!1), Ct.current = "", Ft.current = !1, setTimeout((function () {
                    rt(!1), st(0)
                }), 150)
            }), [d, a]), (0, T.useEffect)((function () {
                Be || be(!1), It.current = Be
            }), [Be]);
            var Vt = (0, T.useCallback)((function (e) {
                var t;
                if (!oe) return H.ZP.show({source: "like"});
                if (null != d && d.id && !At.current) {
                    var n = it;
                    if (n) {
                        var i = (d.options.digg_count || 1) - 1;
                        d.options.digg_count = i, d.options.like = !1, st(i)
                    } else {
                        var l = (d.options.digg_count || 0) + 1;
                        d.options.digg_count = l, d.options.like = !0, st(l)
                    }
                    setTimeout((function () {
                        d.id === Ct.current && f()
                    }), n ? 500 : 900);
                    var s = d.id;
                    X()(s).call(s, "temp_") > -1 && xt[s] && (s = xt[s]), pt.Z.danmaku.danmaku_digg(Ut({
                        level: "0" === d.options.parent_danmaku_id ? 1 : 2,
                        danmaku_id: s,
                        author_id: d.options.user_id,
                        group_id: o
                    }, a())), At.current = !0, rt(!n);
                    var u = function () {
                        G.Z.error("璐﹀彿鎺堟潈杩囨湡锛岃閲嶆柊鐧诲綍"), H.ZP.show({source: "danmaku"})
                    };
                    Ve.Z.danmakuDigg({
                        item_id: r,
                        group_id: o,
                        to_user_id: null == d || null === (t = d.options) || void 0 === t ? void 0 : t.user_id,
                        danmaku_id: s,
                        action_type: n ? 0 : 1
                    }).then((function (e) {
                        var t, n, i, r, o;
                        1 === (null === (t = e.data) || void 0 === t || null === (n = t.base_resp) || void 0 === n ? void 0 : n.status_code) && null !== (i = e.data) && void 0 !== i && null !== (r = i.base_resp) && void 0 !== r && null !== (o = r.status_message) && void 0 !== o && mt()(o).call(o, "unlogin") && u()
                    })).catch((function (e) {
                        (0, Q.wK)(e) && u()
                    }))
                }
            }), [oe, d, it, a, r, o, f, xt]), Ht = (0, T.useCallback)((function () {
                if (!oe) return H.ZP.show({source: "danmaku_reply"});
                if (null != s && s.current && D.left) {
                    var e = (l ? s.current.children[0] : s.current).getBoundingClientRect().width;
                    D.left + 320 > e - 16 && U({left: e - 16 - 320, top: D.top})
                }
                ce(!0)
            }), [l, oe, D, s]), zt = (0, T.useCallback)((function () {
                var e;
                (null == d ? void 0 : d.id) && pt.Z.danmaku.danmaku_delete(Ut({
                    danmaku_id: null == d ? void 0 : d.id,
                    level: "0" === (null === (e = d.options) || void 0 === e ? void 0 : e.parent_danmaku_id) ? 1 : 2,
                    section: "player",
                    user_type: j ? "author" : "publisher",
                    fullscreen: l ? "fullscreen" : "nofullscreen"
                }, a())), null != d && d.id && (F(!0), Et.show({
                    text: "纭鍒犻櫎璇ユ潯寮瑰箷锛�", onConfirm: function () {
                        if (-1 !== d.id.toString().search("stickerFakeDanmaku")) return i.removeComment(d.id), G.Z.success("鍒犻櫎鎴愬姛锛�"), $.Z.emit($.o.deleteDanmaku, null == d ? void 0 : d.id), void L();
                        var e = d.id;
                        if (X()(e).call(e, "temp_") > -1) {
                            if (!xt[e]) return i.removeComment(d.id), G.Z.success("鍒犻櫎鎴愬姛锛�"), $.Z.emit($.o.deleteDanmaku, null == d ? void 0 : d.id), void L();
                            e = xt[e]
                        }
                        Ve.Z.deleteDanmaku({danmaku_id: e}).then((function (e) {
                            var t = e.data;
                            if (0 !== t.base_resp.status_code) throw new Error(t.base_resp.status_message);
                            i.removeComment(d.id), $.Z.emit($.o.deleteDanmaku, null == d ? void 0 : d.id), G.Z.success("鍒犻櫎鎴愬姛锛�")
                        })).catch((function (e) {
                            (0, Q.wK)(e) ? (G.Z.error("璐﹀彿鎺堟潈杩囨湡锛岃閲嶆柊鐧诲綍"), H.ZP.show({
                                source: "danmaku",
                                onCancel: L
                            })) : G.Z.error("鏈嶅姟寮傚父锛岃閲嶈瘯锛�")
                        })).finally(L)
                    }, onCancel: L
                }))
            }), [d, j, l, a, L, i, xt]);
            (0, ht.i)((function () {
                !0 === N && (null == _ || _(!0), Xt.current = !0)
            }), [N]), (0, ht.i)((function () {
                !Xt.current || N || M || Be || ue || (_(!1), Xt.current = !1)
            }), [N, Be, ue]);
            var Bt = (0, T.useRef)(0);
            (0, T.useLayoutEffect)((function () {
                var e = P.current;
                if (d && e && g.current && !document.querySelector(".xgplayer").classList.contains("xgplayer-inactive") && null != s && s.current) {
                    var t = "", n = g.current.clientX, i = e.offsetWidth, r = !1, o = d.el;
                    o.offsetTop < 96 && (r = !0);
                    var a = Number(getComputedStyle(o).transform.split(",")[4]), u = o.getBoundingClientRect();
                    Bt.current = n - u.left;
                    var c = o.offsetLeft + a + (Bt.current - i / 2);
                    c < 16 && (c = 16, t = "left"), c + i + 5 > p.offsetWidth && (c = p.offsetWidth - 5 - i);
                    var f = (l ? s.current.children[0] : s.current).getBoundingClientRect().width;
                    lt > 0 && (i += 11), c + i > f - 16 && (c = f - i - 16, t = "right");
                    var m = 0;
                    m = r ? o.offsetTop + o.offsetHeight - 5 : o.offsetTop - 50 + 5, ne(r), Tt(t), U({left: c, top: m})
                }
            }), [d, P, p, g, s, l, lt]), (0, T.useEffect)((function () {
                ue ? w(!1) : (pe(""), et(!1), w(!0))
            }), [w, ue]), (0, T.useEffect)((function () {
                if (ge && Ze) {
                    var e = function () {
                        be(!1)
                    };
                    return window.addEventListener("resize", e), function () {
                        window.removeEventListener("resize", e)
                    }
                }
            }), [Ze, ge]);
            var Gt = {autoplay: !1, path: n(74556), lastFrame: 25, loop: !1}, Wt = function () {
                _(!1), Xt.current = !1
            }, Yt = function () {
                var e = (0, m.Z)(b().mark((function e() {
                    var t, n, i, s, u;
                    return b().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (pt.Z.danmaku.danmaku_pub_confirm(Ut({
                                        level: 2,
                                        reply_danmaku_id: null == d ? void 0 : d.id,
                                        reply_danmaku_user_id: null == d ? void 0 : d.options.user_id,
                                        section: "player",
                                        fullscreen: l ? "fullscreen" : "nofullscreen"
                                    }, a())), !gt) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (!1 !== (null == x ? void 0 : x())) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                if (0 !== A()(me).call(me).length) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", G.Z.error("寮瑰箷鍐呭涓嶈兘涓虹┖"));
                            case 7:
                                if (!$e) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", G.Z.error("寮瑰箷瓒呰繃40瀛�"));
                            case 9:
                                if (t = d.id, !(X()(t).call(t, "temp_") > -1)) {
                                    e.next = 16;
                                    break
                                }
                                if (!xt[t]) {
                                    e.next = 15;
                                    break
                                }
                                t = xt[t], e.next = 16;
                                break;
                            case 15:
                                return e.abrupt("return", G.Z.error("鏈嶅姟寮傚父锛岃绋嶅悗閲嶈瘯"));
                            case 16:
                                return n = String(d.start + 1), i = {
                                    isAuthor: !0,
                                    user_id: re.id,
                                    id: "temp_".concat(n),
                                    text: me,
                                    offset_time: n,
                                    parent_danmaku_id: t
                                }, $.Z.emit($.o.pushDanmaku, i), e.next = 21, (0, te.JB)(me);
                            case 21:
                                s = e.sent, u = (0, te.w4)(me), bt(!0), W.Z.danmaku.reply({
                                    item_id: r,
                                    group_id: o,
                                    offset_time: Math.floor(d.start) + 1,
                                    text: me,
                                    parent_danmaku_id: t
                                }).then((function (e) {
                                    var i, r;
                                    if (bt(!1), 1 === (null === (i = e.data.base_resp) || void 0 === i ? void 0 : i.status_code) && null !== (r = e.data.base_resp) && void 0 !== r && r.toast_message) {
                                        var o;
                                        G.Z.error(null === (o = e.data.base_resp) || void 0 === o ? void 0 : o.toast_message)
                                    } else {
                                        var f = e.data.danmaku_id;
                                        if (f) {
                                            Zt(Ut(Ut({}, xt), {}, (0, v.Z)({}, "temp_".concat(n), f)));
                                            var m = j ? se.Author : se.Ordinary;
                                            pt.Z.danmaku.danmaku_pub_done(Ut(Ut({}, a()), {}, {
                                                danmaku_id: f,
                                                with_emoticon: s,
                                                with_timestamp: u,
                                                danmaku_type: m,
                                                category_name: c,
                                                level: 2,
                                                section: "player",
                                                reply_danmaku_id: t,
                                                reply_danmaku_user_id: null == d ? void 0 : d.options.user_id,
                                                fullscreen: l ? "fullscreen" : "nofullscreen"
                                            }))
                                        }
                                        Wt()
                                    }
                                })).catch((function (e) {
                                    G.Z.error("鏈嶅姟寮傚父锛岃绋嶅悗閲嶈瘯"), bt(!1)
                                }));
                            case 25:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), qt = function () {
                var e = (0, m.Z)(b().mark((function e(t) {
                    var n, i, r, o, a;
                    return b().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, te.yo)(t);
                            case 2:
                                n = e.sent, i = 0, r = Ot(n);
                                try {
                                    for (r.s(); !(o = r.n()).done;) a = o.value, i += "string" == typeof a ? a.length : 2
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                Ke(i), et(i > 40);
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();
            (0, T.useEffect)((function () {
                if (ge && null != s && s.current) {
                    var e = P.current, t = l ? s.current.children[0] : s.current;
                    if (e && t) {
                        var n = t.getBoundingClientRect().width - D.left - 336;
                        Pe(0 === n ? 320 : n > 240 ? 560 : 320 + n);
                        var i = t.getBoundingClientRect().height, r = e.offsetTop;
                        i - e.offsetHeight - r > 260 || r < 96 ? (Ie(!1), Ue(!1)) : r < 280 ? (Ie(!0), Ue(!0), Re(r < 140 ? 2 : r < 184 ? 3 : 4)) : (Ie(!1), Ue(!0), Re(1))
                    }
                } else Pe(0), Ie(!1), Ue(!0)
            }), [ge, P, s, l, D.left]);
            return (0, ht.i)((function () {
                Be && (_(!0), Xt.current = !0)
            }), [Be]), (0, T.useEffect)((function () {
                Ft.current || 0 === me.length || (Ft.current = !0, pt.Z.danmaku.danmaku_edit(Ut({
                    level: 2,
                    section: "player",
                    reply_danmaku_id: null == d ? void 0 : d.id,
                    reply_danmaku_user_id: null == d ? void 0 : d.options.user_id,
                    fullscreen: l ? "fullscreen" : "nofullscreen"
                }, a())))
            }), [a, me, d, l]), (0, T.useEffect)((function () {
                N || setTimeout((function () {
                    It.current || be(!1)
                }), 50)
            }), [N, Be]), (0, T.useEffect)((function () {
                var e, t = function () {
                    f()
                }, n = null == s || null === (e = s.current) || void 0 === e ? void 0 : e.querySelector("video");
                return document.addEventListener("click", t), null == n || n.addEventListener("click", t), function () {
                    document.removeEventListener("click", t), null == n || n.removeEventListener("click", t)
                }
            }), [f, s]), (0, T.useEffect)((function () {
                var e = null == s ? void 0 : s.current;
                e && (ue && null != d && d.id ? e.className += " xgplayer-reply" : e.className = e.className.replace(/ xgplayer-reply/g, ""))
            }), [ue, d, s]), T.createElement("div", {
                className: B()({
                    danmuEnter: dt,
                    danmuOut: !dt,
                    upsideDown: J,
                    danmuInteractionTooltip: !ue,
                    danmuInteractionReply: ue,
                    hasDiggNum: lt > 0,
                    fourAction: y && !j,
                    boundaryLeft: "left" === Nt,
                    boundaryRight: "right" === Nt
                }), ref: P, style: D, onClick: function (e) {
                    e.nativeEvent.stopImmediatePropagation()
                }
            }, T.createElement(T.Fragment, null, T.createElement("div", {className: B()("danmuInteractionTooltip__inner", {isHide: ue})}, T.createElement("div", {className: "danmuInteractionTooltip__triangle"}), T.createElement("div", {className: "danmuInteractionTooltip__actions"}, T.createElement("div", {
                className: "danmuInteractionTooltip__action",
                onClick: Vt
            }, (null == d ? void 0 : d.id) === Ct.current && T.createElement(Rt.Z, {
                type: "agree",
                content: lt > 0 ? lt : "鐐硅禐",
                className: "video_action_item--like",
                lottieOptions: Gt,
                tabIndex: 0,
                "aria-label": lt ? "".concat(lt, "涓偣璧�") : "鐐硅禐",
                role: "radio",
                "aria-checked": it,
                isActived: it
            })), T.createElement("div", {
                className: "danmuInteractionTooltip__action",
                onClick: Ht
            }, T.createElement(Mt, null), T.createElement("span", null, "鍥炲")), (j || y) && T.createElement("div", {
                className: "danmuInteractionTooltip__action",
                onClick: zt
            }, T.createElement(Pt, null), T.createElement("span", null, "鍒犻櫎")), !j && T.createElement("div", {
                className: "danmuInteractionTooltip__action",
                onClick: Dt
            }, T.createElement(Lt, null), T.createElement("span", null, "涓炬姤")))), T.createElement("div", {className: B()("danmuInteractionReply__inner", {isHide: !ue})}, T.createElement("input", {
                ref: ye,
                className: "danmuInteractionReply__input",
                placeholder: "鍥炲杩欎綅鍙嬪弸锛宼a浼氭敹鍒版秷鎭摝锝�",
                value: me,
                onChange: function (e) {
                    pe(e.target.value), qt(e.target.value)
                },
                style: {paddingRight: $e ? 60 : 12},
                onKeyDown: function (e) {
                    13 === e.keyCode && Yt()
                },
                onFocus: function () {
                    $.Z.emit($.o.danmakuReplyFocus), pt.Z.danmaku.danmaku_input_click(Ut({
                        level: 2,
                        reply_danmaku_id: null == d ? void 0 : d.id,
                        reply_danmaku_user_id: null == d ? void 0 : d.options.user_id,
                        section: "player",
                        fullscreen: l ? "fullscreen" : "nofullscreen"
                    }, a()))
                },
                onBlur: function () {
                    $.Z.emit($.o.danmakuReplyBlur)
                }
            }), T.createElement("span", {className: B()("count", {warn: $e})}, " ", qe, "/", 40), T.createElement("div", {className: "danmuInteractionReply__footer"}, T.createElement(ee.ZP, {
                onEmojiClick: function (e, t) {
                    ye.current && (ye.current.focus(), pe((0, ee.YN)(e, ye.current)), qt(ye.current.value))
                },
                popupVisible: ge,
                inputRef: ye,
                onEmojiHover: Ge,
                points: ["tl", "tl"],
                offset: [-12, Ae ? Ce ? -128 - 44 * (Le - 1) : -312 : J ? 33 : 38],
                subClassName: B()("danmaku-emoji-popup", "danmuInteraction-emoji-popup", {
                    "danmuInteraction-emoji-tiny": Ae && Ce,
                    line2: Ae && Ce && 2 === Le,
                    line3: Ae && Ce && 3 === Le,
                    line4: Ae && Ce && 4 === Le
                }),
                getEmojiPanelRef: function (e) {
                    Ee(e)
                },
                emojiPanelWidth: ke
            }, T.createElement("div", {
                className: "danmuInteractionReply__emoji__entry",
                ref: Xe,
                onMouseEnter: function () {
                    be(!0), ye && ye.current && ye.current.focus()
                }
            })), T.createElement(ie.zx, {
                type: "ghost-weak",
                className: "danmuInteractionReply__cancelbtn",
                onClick: Wt
            }, "鍙栨秷"), T.createElement(ie.zx, {
                className: B()("danmuInteractionReply__replybtn", {
                    active: A()(me).call(me).length > 0 && !$e,
                    loading: gt
                }), onClick: Yt
            }, gt ? T.createElement(Y.yg, null) : T.createElement("span", null, "鍥炲"))))))
        }, Wt = function (e) {
            var t = e.danmuInfo, n = (0, T.useState)({danmuContent: "", left: "0", top: "0"}), i = (0, h.Z)(n, 2),
                r = i[0], o = i[1];
            return (0, T.useEffect)((function () {
                if (!t) return function () {
                };
                var e = !1;
                return function n() {
                    var i = t.el.style.transform.match(/translateX\((.*?)\)/);
                    if (i && ("0px" === i[1] || "-0px" === i[1])) {
                        var r = t.el.outerHTML.replace(/transform:.+?;/, "").replace(/transition:.+?;/, "").replace(/opacity:.+?;/, "");
                        o({danmuContent: r, left: t.el.style.left, top: t.el.style.top}), e = !0
                    }
                    !1 === e && requestAnimationFrame(n)
                }(), function () {
                    e = !0
                }
            }), [t]), r.danmuContent ? T.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: globalThis.getFilterXss()._filterXSS(r.danmuContent, null, {
                        logType: "react.dangerouslySetInnerHTML",
                        reportOnly: "all",
                        block: !0
                    })
                }, className: "danmuInteractionTooltip__float"
            }) : null
        }, Yt = function (e) {
            var t = e.isUserAuthor, n = e.beforeSend, i = (0, q.uU)(), r = i.danmu, o = i.player, a = i.settings,
                l = (0, T.useRef)(null), s = a.enableMask, u = (0, vt.Z)(void 0), c = (0, h.Z)(u, 3), d = c[0],
                f = c[1], m = c[2];
            (0, T.useEffect)((function () {
                if (null != o && o.root) {
                    var e = o.root.parentNode.querySelector(".danmakuToolTipContainer");
                    e || ((e = document.createElement("div")).classList.add("danmakuToolTipContainer"), o.root.parentNode.appendChild(e)), l.current = e
                }
                null == o || o.on("ended", (function () {
                }))
            }), [o, f]);
            var p = (0, T.useRef)(null), v = (0, T.useRef)(0), _ = (0, T.useRef)(null), g = (0, T.useRef)(null),
                b = (0, T.useState)(!0), y = (0, h.Z)(b, 2), w = y[0], x = y[1],
                Z = (0, T.useCallback)((function (e, t) {
                    var n;
                    if (e) {
                        var i = function () {
                            r.restartComment(e.id), null == t || t()
                        };
                        (null === (n = m.current) || void 0 === n ? void 0 : n.id) !== e.id && e.el && i(), e !== m.current || p.current || g.current || (i(), f(void 0))
                    }
                }), [m, r, f]), E = (0, T.useCallback)((function (e) {
                    null != d && (!1 === e ? (g.current = null, setTimeout((function () {
                        p.current !== d && Z(d)
                    }), 100)) : g.current = d)
                }), [d, Z]);
            return (0, T.useEffect)((function () {
                if (r) {
                    var e = function (e) {
                        var t = e.bullet, n = e.event;
                        if (t !== p.current && null != t.el && w) {
                            p.current = t, g.current = null, _.current = n, f(t), r.freezeComment(t.id), v.current = Date.now();
                            var i = function e() {
                                p.current = null, t.el && (t.el.removeEventListener("mouseleave", e), t.el.removeEventListener("click_timestamp", e)), setTimeout((function () {
                                    Z(t)
                                }), 100)
                            };
                            t.el.addEventListener("mouseleave", i), t.el.addEventListener("click_timestamp", i)
                        }
                    };
                    return r.on("bullet_hover", e), function () {
                        return r.off("bullet_hover", e)
                    }
                }
            }), [o, r, Z, s, m, f, w]), (0, T.useEffect)((function () {
                if (s && void 0 !== d && d.el) {
                    var e = d.el;
                    e.style.opacity = "0";
                    var t = e.style.zIndex;
                    return e.style.zIndex = "20", function () {
                        e.style.opacity = "1", e.style.zIndex = t
                    }
                }
                return function () {
                    return null
                }
            }), [d]), o.root && l.current ? C.createPortal(T.createElement(T.Fragment, null, T.createElement(Gt, {
                onActiveChange: E,
                container: l.current,
                danmuInfo: d,
                hideTooltip: function () {
                    p.current = null, setTimeout((function () {
                        Z(d)
                    }), 100), f(void 0)
                },
                hoverMouseEvent_Ref: _,
                setCanBulletHover: x,
                isUserAuthor: t,
                beforeSend: n
            }), s && void 0 !== d && T.createElement(Wt, {danmuInfo: d})), l.current) : null
        }, qt = n(7071), Kt = n(79349), Jt = n(62462), Qt = n.n(Jt);

        function $t() {
            return $t = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, $t.apply(this, arguments)
        }

        var en = function (e) {
                return T.createElement("svg", $t({
                    width: 28,
                    height: 28,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 28 28"
                }, e), Ht || (Ht = T.createElement("mask", {
                    id: "danmakuTimePlay_svg__a",
                    maskUnits: "userSpaceOnUse",
                    x: 4.729,
                    y: 2.023,
                    width: 21,
                    height: 24,
                    fill: "#000"
                }, T.createElement("path", {
                    fill: "#fff",
                    d: "M4.729 2.023h21v24h-21z"
                }), T.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23.622 11.938c1.555.935 1.555 3.19 0 4.124L9.375 24.63c-1.604.964-3.646-.191-3.646-2.063V5.434c0-1.871 2.042-3.026 3.646-2.062l14.247 8.567zM21.11 14L8.79 6.594v14.812L21.11 14z"
                }))), zt || (zt = T.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23.622 11.938c1.555.935 1.555 3.19 0 4.124L9.375 24.63c-1.604.964-3.646-.191-3.646-2.063V5.434c0-1.871 2.042-3.026 3.646-2.062l14.247 8.567zM21.11 14L8.79 6.594v14.812L21.11 14z",
                    fill: "#499DF2"
                })), Bt || (Bt = T.createElement("path", {
                    d: "M23.622 16.062l.451.75-.45-.75zm0-4.124l-.45.75.45-.75zM9.375 24.628l.451.75-.45-.75zm-3.645-2.06h.875-.875zm0-17.134h-.875.875zm3.646-2.062l.451-.75-.45.75zm-.584 3.223l.451-.75-1.326-.797v1.547h.875zM21.11 14l.45.75 1.248-.75-1.247-.75-.451.75zM8.79 21.406h-.875v1.547l1.326-.797-.45-.75zm15.282-4.594c2.12-1.275 2.12-4.349 0-5.624l-.902 1.5c.99.595.99 2.03 0 2.624l.902 1.5zM9.826 25.379l14.247-8.567-.902-1.5L8.924 23.88l.902 1.5zm-4.972-2.813c0 2.552 2.785 4.128 4.972 2.813l-.902-1.5a1.531 1.531 0 01-2.32-1.313h-1.75zm0-17.133v17.134h1.75V5.433h-1.75zm4.972-2.812c-2.187-1.315-4.972.26-4.972 2.812h1.75c0-1.19 1.3-1.926 2.32-1.312l.902-1.5zm14.247 8.567L9.826 2.62l-.902 1.5 14.247 8.567.902-1.5zM8.341 7.344l12.317 7.406.902-1.5L9.242 5.844l-.901 1.5zm1.325 14.062V6.594h-1.75v14.812h1.75zm10.992-8.156L8.34 20.656l.901 1.5L21.56 14.75l-.902-1.5z",
                    fill: "#000",
                    fillOpacity: .7,
                    mask: "url(#danmakuTimePlay_svg__a)"
                })))
            }, tn = n(45085), nn = function (e) {
                return e && e.Math == Math && e
            },
            rn = nn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || nn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || nn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || nn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        rn.globalThis = rn, rn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var on = function (e) {
            var t = (0, q.uU)(), n = t.filterKeywords, i = t.player, r = (0, T.useRef)(!0), o = (0, T.useRef)(0),
                a = (0, T.useRef)(0), l = function (e) {
                    o.current -= 1, a.current -= 1
                }, s = (0, T.useCallback)((function (e, t) {
                    return (t || n).some((function (t) {
                        return (0, te.q5)(e.toLocaleLowerCase(), t.text.toLocaleLowerCase())
                    }))
                }), [n]), u = (0, T.useCallback)((function (e, t, n) {
                    var r, o, a,
                        l = null == i || null === (r = i.danmu) || void 0 === r || null === (o = r.bulletBtn) || void 0 === o ? void 0 : o.main;
                    l && (M()(a = l.data).call(a, e, t).forEach((function (e) {
                        e.style.visibility = s(e.text, n) ? "hidden" : ""
                    })), l.queue.forEach((function (e) {
                        e.options.style || (e.options.style = {}), e.options.style.visibility = s(e.options.text, n) ? "hidden" : "", e.options.el.style.visibility = s(e.options.text, n) ? "hidden" : ""
                    })))
                }), [s, i]), c = (0, T.useCallback)((function (e) {
                    u(0, a.current, e)
                }), [u]);
            (0, T.useEffect)((function () {
                return $.Z.on($.o.deleteDanmaku, l), $.Z.on($.o.changeDanmakuFilter, c), function () {
                    $.Z.off($.o.deleteDanmaku, l), $.Z.off($.o.changeDanmakuFilter, c)
                }
            }), [c]), (0, T.useEffect)((function () {
                a.current = e.length, n.length > 0 && r.current && (r.current = !1, setTimeout((function () {
                    u(o.current, a.current), o.current = a.current, r.current = !0
                }), 500))
            }), [e.length, u, n])
        };

        function an(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = s()(i).call(i, (function (t) {
                    return c()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ln(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? an(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : an(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, c()(n, t))
                }))
            }
            return e
        }

        var sn = function (e) {
                return e && e.Math == Math && e
            },
            un = sn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || sn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || sn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || sn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        var cn = [], dn = function (e, t) {
            switch (t.type) {
                case"add":
                    if (t.item_id) {
                        var n, i, r = -1 !== Qt()(e).call(e, (function (e) {
                            return t.item_id === e.id
                        }));
                        if (r) return e;
                        var o = null === (n = t.getItem) || void 0 === n ? void 0 : n.call(t);
                        return Fe()(i = []).call(i, (0, Kt.Z)(e), [o])
                    }
                    return e;
                case"delete":
                    var a, l = Qt()(e).call(e, (function (e) {
                        return t.deleteKey = e.id
                    }));
                    return -1 !== l ? Fe()(a = []).call(a, (0, Kt.Z)(M()(e).call(e, 0, l)), (0, Kt.Z)(M()(e).call(e, l))) : e;
                default:
                    throw new Error
            }
        }, fn = function () {
            var e = (0, T.useReducer)(dn, cn), t = (0, h.Z)(e, 2), n = t[0], i = t[1], r = (0, q.uU)(), o = r.player,
                a = r.getParams, l = r.filterKeywords, s = (0, Be.Z)({player: o}).duration;
            return on(n), (0, T.useEffect)((function () {
                var e = function (e) {
                    var t = e.isAuthor, n = e.id, r = e.text, l = e.start, u = e.like, c = e.user_id, d = e.digg_count,
                        f = e.parent_danmaku_id;
                    i({
                        type: "add", item_id: n, getItem: function () {
                            var i = (0, te.jH)({
                                prefix: T.createElement(en, null), onClick: function () {
                                    p.dispatchEvent(new Event("click_timestamp")), tn.Z.timestamp_danmaku_click(ln({danmaku_id: e.id}, a()))
                                }, onFirstInView: function () {
                                    return tn.Z.timestamp_danmaku_show(ln({danmaku_id: e.id}, a()))
                                }, section: "click_timestamp_danmaku", videoDuration: o.duration
                            }), m = [te.yo, i], p = document.createElement("div"), v = document.createElement("div");
                            v.dataset.id = n, p.appendChild(v), v.className = t ? "normalDanmaku selfDanmaku" : "normalDanmaku";
                            var h = T.memo((function () {
                                return T.createElement(te.ZP, {text: r, handlers: m})
                            }));
                            return function (e) {
                                var t = e.isAuthor, n = e.player, i = e.danmakuInfo, r = e.duration, o = e.like,
                                    a = e.digg_count, l = e.parent_danmaku_id, s = (i.style, (0, Te.Z)(i, Oe));
                                if (n && null != n && n.danmu) {
                                    var u = Math.round(1e3 * n.currentTime);
                                    u && !isNaN(u) && n.danmu.sendComment(Ae({
                                        duration: r,
                                        like: o,
                                        start: u,
                                        digg_count: a,
                                        parent_danmaku_id: l,
                                        isAuthor: t,
                                        prior: null != t && t,
                                        realTime: !1,
                                        style: Ae({}, t ? {border: "solid 1px #ffffff"} : void 0)
                                    }, s))
                                }
                            }({
                                isAuthor: t,
                                player: o,
                                duration: s,
                                like: u || !1,
                                parent_danmaku_id: f,
                                digg_count: d,
                                danmakuInfo: {id: n, user_id: c, start: l, el: p, text: r}
                            }), {domNode: v, Component: h, id: n, text: r}
                        }
                    })
                }, t = function (e) {
                    i({type: "delete", deleteKey: e})
                };
                return $.Z.on($.o.pushDanmaku, e), $.Z.on($.o.deleteDanmaku, t), function () {
                    $.Z.off($.o.pushDanmaku, e), $.Z.off($.o.deleteDanmaku, t)
                }
            }), [l]), T.createElement(T.Fragment, null, k()(n).call(n, (function (e) {
                return C.createPortal(T.createElement(e.Component, null), e.domNode, e.id)
            })))
        }, mn = n(4260);

        function pn(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = s()(i).call(i, (function (t) {
                    return c()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function vn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pn(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : f() ? Object.defineProperties(e, f()(n)) : pn(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, c()(n, t))
                }))
            }
            return e
        }

        var hn = function (e) {
                return e && e.Math == Math && e
            },
            _n = hn("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || hn("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || hn("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || hn("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        _n.globalThis = _n, _n.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var gn = q.ZP.Provider, bn = q.Gp.Provider, yn = function () {
            return ct(), qe(), T.createElement(fn, null)
        }, wn = function (e) {
            var t, n = e.groupId, i = e.itemId, r = e.player, o = e.isBanSendInCurrentVideo, a = e.log_pb,
                l = e.isAutoContainer, s = void 0 === l || l, u = e.barrageMask, c = (e.onSwitch, e.isUserAuthor),
                d = e.videoRef, f = e.authorId, v = e.categoryName, _ = (0, qt.f)(),
                g = (_.isShowDanmaku, _.setIsShowDanmu), y = _.isShowDanmakuAfterInteractive,
                w = _.setIsShowDanmakuAfterInteractive, x = (0, T.useState)(null), E = (0, h.Z)(x, 2), S = E[0],
                P = E[1], I = (0, Ne.$o)("video-st-danmakuUserEnableStatus"),
                M = (0, T.useState)(null == I || "1" === I), F = (0, h.Z)(M, 2), L = F[0], R = F[1],
                O = (0, vt.Z)(null !== (t = null == r ? void 0 : r.isInited) && void 0 !== t && t), D = (0, h.Z)(O, 3),
                A = D[0], U = D[1], X = D[2], V = (0, T.useState)((function () {
                    return (0, ge.uu)() || (0, ge.Gu)()
                })), H = (0, h.Z)(V, 2), z = H[0], W = H[1], Y = (0, T.useState)(void 0), J = (0, h.Z)(Y, 2), Q = J[0],
                ee = J[1], te = (0, T.useState)(!1), ne = (0, h.Z)(te, 2), ie = ne[0], re = ne[1],
                oe = (0, T.useState)(), ae = (0, h.Z)(oe, 2), le = ae[0], se = ae[1], ue = (0, T.useState)([]),
                ce = (0, h.Z)(ue, 2), de = ce[0], fe = ce[1], me = Boolean(null == u ? void 0 : u.enable),
                pe = (0, T.useMemo)((function () {
                    if ("undefined" == typeof window) return !1;
                    var e = window.navigator.userAgent, t = /Safari/.test(e) && !/Chrome/.test(e),
                        n = /QQBrowserLite/.test(e), i = /Edge?/.test(e), r = /Firefox/.test(e);
                    return !(t || i || n || r)
                }), []), he = (0, T.useMemo)((function () {
                    var e = (0, Ne.$o)("video-st-danmakuSettings"), t = vn({}, q.dQ);
                    if (null != e) try {
                        var n = JSON.parse(e);
                        t = vn(vn({}, t), n)
                    } catch (e) {
                    }
                    return t
                }), []), _e = (0, vt.Z)(he), be = (0, h.Z)(_e, 3), ye = be[0], we = be[1], xe = be[2],
                Ze = (0, p.Z)((function () {
                    return r && (null == r ? void 0 : r.video)
                }), void 0, [r]), Ee = (0, h.Z)(Ze, 2)[1], je = (0, T.useCallback)((function (e) {
                    var t = (0, Ne.$o)("video-st-danmakuSettings"), n = vn({}, e);
                    if (null != t) try {
                        n = vn(vn({}, JSON.parse(t)), n)
                    } catch (e) {
                    }
                    (0, Ne.qQ)("video-st-danmakuSettings", Z()(n))
                }), []), Se = (0, T.useCallback)((function (e) {
                    var t = vn(vn({}, xe.current), e);
                    we(t), je(e)
                }), [je]), ke = e.isBan || !1, Te = L, Ce = Te && !ke, Ie = (0, T.useCallback)((function () {
                    var e, t = "player", n = "0.0", i = 0;
                    if (r && r.duration && !isNaN(r.duration)) {
                        var o = r.currentTime / r.duration * 100;
                        j()(o) || (n = o.toFixed(1))
                    }
                    r && (i = Number((1e3 * r.currentTime).toFixed(1)), t = null == r || null === (e = r.xgpcInfo) || void 0 === e ? void 0 : e.player_status);
                    return {log_pb: a, player_status: t, duration: i, percent: n}
                }), [a, r]), Me = function () {
                    var e = !L;
                    (0, Ne.qQ)("video-st-danmakuUserEnableStatus", e ? "1" : "0"), R(e), K.Z.danmaku.danmaku_switch(vn({danmaku_status: e ? "on" : "off"}, Ie()))
                }, Fe = function () {
                    !L && Me()
                }, Le = function () {
                    return !o || (G.Z.error("鏍规嵁瀵规柟璁剧疆锛屼綘鏃犳硶杩涜姝ゆ搷浣�"), !1)
                }, Re = function () {
                    var e = (0, m.Z)(b().mark((function e(t) {
                        var n, i, r;
                        return b().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ve.Z.getCommentFilterList();
                                case 2:
                                    (n = e.sent).data && 0 === n.data.code && (r = k()(i = n.data.data).call(i, (function (e) {
                                        return {id: e.id, text: e.content}
                                    })), fe(r), null == t || t(r));
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }();
            (0, T.useEffect)((function () {
                Re()
            }), []), (0, T.useEffect)((function () {
                g(Te)
            }), [Te]), (0, T.useEffect)((function () {
                y && (Fe(), w(!1))
            }), [y]), (0, T.useEffect)((function () {
                var e = function () {
                    U(!0)
                }, t = function () {
                    U(!1)
                };
                return null != r && r.isInited && e(), $.Z.on($.o.playerInited, e), $.Z.on($.o.playerInitStart, t), function () {
                    var n, i, o, a, l;
                    U(!1), null != r && null !== (n = r.danmu) && void 0 !== n && null !== (i = n.config) && void 0 !== i && i.comments && (r.danmu.config.comments = []), null != r && null !== (o = r.danmu) && void 0 !== o && null !== (a = o.bulletBtn) && void 0 !== a && null !== (l = a.main) && void 0 !== l && l.data && (r.danmu.bulletBtn.main.data = []), $.Z.off($.o.playerInited, e), $.Z.off($.o.playerInitStart, t)
                }
            }), [r, n, i]), (0, T.useEffect)((function () {
                var e = function (e) {
                    return W(e)
                };
                if (s && r) return r.on(mn.HW, e), r.on(mn.GS, e), function () {
                    r.off(mn.HW, e), r.off(mn.GS, e)
                }
            }), [s, r]), (0, T.useEffect)((function () {
                if (s && A && r) if (z) {
                    var e = null == r ? void 0 : r.root, t = null == e ? void 0 : e.querySelector(".xg-center-grid");
                    if (e && t) {
                        var n, i = e.querySelector(".danmakuBarPlaceholder");
                        if (!i) (i = document.createElement("div")).setAttribute("class", "danmakuBarPlaceholder"), null === (n = t.parentElement) || void 0 === n || n.insertBefore(i, t);
                        P(i)
                    }
                } else P(null)
            }), [s, z, r, A]), (0, T.useEffect)((function () {
                if (r) {
                    var e = Te ? "on" : "off", t = ye.enableMask ? "on" : "off", n = ye.opacity + "%",
                        i = (0, dt.gk)(Number(ye.speedLevel)), o = (0, dt.WF)(Number(ye.displayArea)),
                        a = (0, dt.iQ)(Number(ye.fontSizeLevel));
                    r.xgpcInfo = vn(vn({}, r.xgpcInfo), {}, {
                        danmaku_opacity: n,
                        danmaku_speed: i,
                        danmaku_area: o,
                        danmaku_fontsize: a,
                        no_cover_status: t,
                        danmaku_status: e
                    })
                }
            }), [r, ye, Te]), (0, T.useEffect)((function () {
                var e, t = null == r || null === (e = r.danmu) || void 0 === e ? void 0 : e.container;
                if (t) if (le) {
                    var n, i,
                        o = null === (n = t.querySelector('[data-id="'.concat(le, '"]'))) || void 0 === n ? void 0 : n.parentNode;
                    null != o && null !== (i = o.parentNode) && void 0 !== i && i.children && (r.danmu.setOpacity(1), t.className += " opacity-6", N()(o.parentNode.children).forEach((function (e) {
                        e.style.opacity = e === o ? "1" : ""
                    })))
                } else {
                    var a;
                    t.className = t.className.replace(/ opacity-6/g, ""), r.danmu.setOpacity(ye.opacity / 100), null === (a = N()(t.children)) || void 0 === a || a.forEach((function (e) {
                        return e.style.opacity = ""
                    }))
                }
            }), [r, le, ye]);
            var Oe = n + i, De = (0, T.useState)(null), Ae = (0, h.Z)(De, 2), Ue = Ae[0], Xe = Ae[1];
            if (Ue !== Oe && (Xe(Oe), U(!1)), ke || !r || !X.current) return null;
            var He = S,
                ze = T.createElement("div", {className: B()("danmakuBar", {hideInput: o})}, T.createElement(bn, {
                    value: {
                        hideEmojiPanel: ie,
                        setHideEmojiPanel: re
                    }
                }, T.createElement("div", {className: "danmakuBar__controls"}, T.createElement(Pe, {
                    on: Te,
                    onClick: Me,
                    isFullscreen: z
                }), T.createElement(dt.ZP, null)), T.createElement(Yt, {
                    isUserAuthor: c,
                    beforeSend: Le
                }), T.createElement(ve, {
                    player: r,
                    groupId: n,
                    itemId: i,
                    onSend: Fe,
                    beforeSend: Le,
                    isUserAuthor: c
                })));
            return T.createElement(gn, {
                value: {
                    getParams: Ie,
                    enableDanmakuDisplay: Ce,
                    player: r,
                    settings: ye,
                    updateSettings: Se,
                    groupId: n,
                    itemId: i,
                    danmu: Q,
                    setDanmu: ee,
                    barrageMask: u,
                    size: Ee,
                    isSupportMask: me,
                    isBrowserSupportMask: pe,
                    isFullscreen: z,
                    tabIndexs: {on: 16, settings: 17, input: 18, sendBtn: 19},
                    videoRef: d,
                    hoverDanmuId: le,
                    updateHoverDanmuId: function (e) {
                        return se(e)
                    },
                    filterKeywords: de,
                    updateFilterKeywords: Re,
                    authorId: f,
                    categoryName: v
                }
            }, A && T.createElement(T.Fragment, null, T.createElement(yn, null), He ? C.createPortal(ze, He) : ze))
        }
    }, 52350: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return v
            }
        });
        var i = n(44624), r = n(59056), o = n(19623), a = n(90149), l = n.n(a), s = n(67294), u = function (e) {
                return e && e.Math == Math && e
            },
            c = u("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || u("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || u("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || u("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
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
        var d = n(50239), f = n(70326), m = function (e) {
                return e && e.Math == Math && e
            },
            p = m("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || m("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || m("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || m("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
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
        var v = function (e) {
            var t = e.player, n = (0, d.uU)().settings, o = f.D1[n.speedLevel], a = (0, s.useState)(1),
                l = (0, r.Z)(a, 2), u = l[0], c = l[1], m = (0, s.useState)(1e4), p = (0, r.Z)(m, 2), v = p[0],
                h = p[1], _ = (0, s.useState)(v), g = (0, r.Z)(_, 2), b = g[0], y = g[1], w = (0, i.Z)((function () {
                    return t && (null == t ? void 0 : t.video)
                }), void 0, [t]), x = function (e, t) {
                    var n = (0, s.useState)(e), i = (0, r.Z)(n, 2), o = i[0], a = i[1];
                    return (0, s.useEffect)((function () {
                        var n = window.setTimeout((function () {
                            a(e)
                        }), t);
                        return function () {
                            clearTimeout(n)
                        }
                    }), [e, t]), o
                }((0, r.Z)(w, 2)[1], 200);
            (0, s.useEffect)((function () {
                var e;
                x.width && h((e = x.width) ? e / 120 * 1e3 : 1e4)
            }), [b, t, x.width, x.height]);
            var Z = (0, s.useRef)(b);
            return (0, s.useEffect)((function () {
                var e = function (e) {
                    c(e)
                }, n = function () {
                    return e(t.video.playbackRate)
                };
                return t && (t.on("playbackrateChange", e), t.once("timeupdate", n)), function () {
                    t && (t.off("playbackrateChange", e), t.off("timeupdate", n))
                }
            }), [t]), (0, s.useEffect)((function () {
                var e = v / u / o;
                y(e), Z.current = e
            }), [u, v, o]), {duration: b, duration_Ref: Z}
        }
    }, 5101: function (e, t, n) {
        var i = n(19623), r = n(90149), o = n.n(r), a = n(50239), l = n(70326), s = n(67294), u = function (e) {
                return e && e.Math == Math && e
            },
            c = u("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || u("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || u("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || u("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        t.Z = function () {
            var e = (0, a.uU)().settings.fontSizeLevel, t = l.MR[e], n = (0, s.useRef)(t);
            return (0, s.useEffect)((function () {
                n.current = t
            }), [t]), {fontSize: t, fontSize_Ref: n}
        }
    }, 52725: function (e, t, n) {
        n.d(t, {
            _K: function () {
                return y
            }, YN: function () {
                return w
            }
        });
        var i = n(19623), r = (n(9653), n(90149)), o = n.n(r), a = n(2991), l = n.n(a), s = n(3649), u = n.n(s),
            c = n(67294), d = n(1028), f = n(92744), m = n(34061), p = n(13517), v = n(94184), h = n.n(v),
            _ = function (e) {
                return e && e.Math == Math && e
            },
            g = _("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || _("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || _("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || _("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        g.globalThis = g, g.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var b = function (e) {
            var t = e.children, n = e.tip, i = e.subClassName;
            return c.createElement(d.Z, {
                action: ["hover"],
                popupClassName: h()("comment-input-popup", i || ""),
                popup: c.createElement("span", null, n),
                popupAlign: {points: ["bc", "tc"], offset: [0, -4]},
                destroyPopupOnHide: !0
            }, t)
        }, y = function (e) {
            var t = e.onEmojiClick, n = e.onMouseEnterEmojiPanel, i = e.onMouseLeaveEmojiPanel, r = e.onEmojiHover,
                o = e.popupVisible, a = e.getEmojiPanelRef, s = e.subClassName, d = (0, p.Z)().emoji_sort;
            return (0, c.useEffect)((function () {
                var e = document.querySelector(".emoji-panel"), t = function (t) {
                    var n = e && e.parentElement;
                    if (n) {
                        if (t.wheelDelta < 0 && n.scrollTop < n.scrollHeight - n.offsetHeight) return;
                        if (t.wheelDelta > 0 && n.scrollTop > 0) return;
                        (t = t || window.event).stopPropagation(), t.preventDefault()
                    }
                };
                e && e.addEventListener("mousewheel", t);
                var n = document.querySelector(".emoji-panel>div");
                return null !== n && n.focus(), function () {
                    e && e.removeEventListener("mousewheel", t)
                }
            }), []), (0, c.useEffect)((function () {
                var e = document.querySelector(".comment-emoji-popup");
                if (e) return a && a(e), n && e.addEventListener("mouseover", (function () {
                    n()
                })), i && e.addEventListener("mouseleave", (function () {
                    i()
                })), function () {
                    n && e.removeEventListener("mouseover", (function () {
                        n()
                    })), i && e.removeEventListener("mouseleave", (function () {
                        i()
                    }))
                }
            }), [o]), (0, c.useLayoutEffect)((function () {
                var e = document.querySelector(".comment-emoji-popup");
                if (r && e) {
                    var t = function () {
                        return r(!0)
                    }, n = function () {
                        return r(!1)
                    };
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), function () {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
                    }
                }
            }), [r, o]), c.createElement("div", {
                className: "emoji-panel", onClick: function (e) {
                    e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                }
            }, l()(d).call(d, (function (e, n) {
                var i = e.code, r = e.value, o = u()(r).call(r, 1, -1);
                return c.createElement(b, {key: i, tip: o, subClassName: s}, c.createElement("div", {
                    tabIndex: 0,
                    role: "button",
                    onClick: function () {
                        return t(r, n)
                    },
                    onKeyDown: function (e) {
                        (0, f.vx)(e.keyCode) && t(r, n)
                    }
                }, c.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl((0, m.t)(i), null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), alt: r
                })))
            })))
        }, w = function (e, t) {
            if (t.textAreaRef && (t = t.textAreaRef), t.focus(), document.selection) document.selection.createRange().text = e; else if (t.selectionStart || 0 === Number(t.selectionStart)) {
                var n = t.selectionStart, i = t.selectionEnd;
                t.value = t.value.substring(0, n) + e + t.value.substring(i, t.value.length), t.selectionEnd = n + e.length
            } else t.value += e;
            return t.value
        };
        t.ZP = function (e) {
            var t = e.children, n = e.popupVisible, i = e.inputRef, r = e.points, o = e.offset, a = e.onEmojiClick,
                l = e.subClassName, s = e.onMouseEnterEmojiPanel, u = e.onMouseLeaveEmojiPanel, f = e.onEmojiHover,
                m = e.getEmojiPanelRef, p = e.emojiPanelWidth, v = (0, c.useMemo)((function () {
                    return void 0 !== p ? p : n && i.current ? i.current.textAreaRef.offsetWidth - 28 : void 0
                }), [n, p]);
            return c.createElement(d.Z, {
                action: [],
                popupClassName: h()("comment-emoji-popup", l || ""),
                popupStyle: {width: v},
                popup: [c.createElement(y, {
                    key: "emoji",
                    onEmojiClick: a,
                    onMouseEnterEmojiPanel: s,
                    onMouseLeaveEmojiPanel: u,
                    onEmojiHover: f,
                    popupVisible: n,
                    getEmojiPanelRef: m,
                    subClassName: l
                }), c.createElement("div", {key: "scrollbar-mask", className: "scrollbar-mask"})],
                popupAlign: {points: r, offset: o},
                destroyPopupOnHide: !0,
                popupVisible: n
            }, t)
        }
    }, 13517: function (e, t, n) {
        var i = n(59056), r = n(19623), o = n(90149), a = n.n(o), l = n(67294), s = n(34061), u = function (e) {
                return e && e.Math == Math && e
            },
            c = u("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || u("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || u("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || u("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var d = {emoji_mapping: {}, emoji_sort: []};
        t.Z = function () {
            var e = (0, l.useState)(d), t = (0, i.Z)(e, 2), n = t[0], r = t[1];
            return (0, l.useEffect)((function () {
                (0, s.g)().then((function (e) {
                    e && r(e)
                })).catch((function () {
                    r(d)
                }))
            }), []), n
        }
    }, 34061: function (e, t, n) {
        n.d(t, {
            g: function () {
                return S
            }, t: function () {
                return k
            }
        });
        n(41539), n(54747);
        var i = n(44845), r = n(33938), o = n(19623), a = n(63109), l = n.n(a), s = n(90149), u = n.n(s), c = n(86902),
            d = n.n(c), f = n(14310), m = n.n(f), p = n(20116), v = n.n(p), h = n(34074), _ = n.n(h), g = n(39649),
            b = n.n(g), y = n(38834);

        function w(e, t) {
            var n = d()(e);
            if (m()) {
                var i = m()(e);
                t && (i = v()(i).call(i, (function (t) {
                    return _()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach((function (t) {
                    (0, i.Z)(e, t, n[t])
                })) : b() ? Object.defineProperties(e, b()(n)) : w(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, _()(n, t))
                }))
            }
            return e
        }

        var Z, E = function (e) {
                return e && e.Math == Math && e
            },
            j = E("object" == (void 0 === u() ? "undefined" : (0, o.Z)(u())) && u()) || E("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || E("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || E("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        j.globalThis = j, j.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var S = function () {
            var e = (0, r.Z)(l().mark((function e() {
                return l().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Z || (Z = y.Z.getEmojiData().then((function (e) {
                                return x({}, e.data.data)
                            })).catch((function () {
                                return Z = void 0, {emoji_mapping: {}, createTime: Date.now(), emoji_sort: []}
                            }))));
                        case 1:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }(), k = function (e) {
            return "https://lf3-static.bytednsdoc.com/obj/eden-cn/hbnpe_lm_wpn/ljhwZthlaukjlkulzlp/xigua_pc/emoji/emoji_".concat(e, ".png")
        }
    }, 82955: function (e, t, n) {
        n.d(t, {
            Vy: function () {
                return le
            }, RG: function () {
                return se
            }, lB: function () {
                return ue
            }, ZP: function () {
                return _e
            }, yo: function () {
                return de
            }, jH: function () {
                return he
            }, JB: function () {
                return me
            }, w4: function () {
                return ve
            }, q5: function () {
                return fe
            }
        });
        var i, r, o, a, l, s = n(66419), u = n.n(s), c = n(65420), d = n.n(c), f = n(19996), m = n.n(f),
            p = (n(68309), n(79349)), v = n(33938), h = n(59056), _ = n(19623),
            g = (n(41539), n(54747), n(74916), n(23123), n(69600), n(4723), n(24603), n(39714), n(9653), n(63109)),
            b = n.n(g), y = n(90149), w = n.n(y), x = n(77766), Z = n.n(x), E = n(20116), j = n.n(E), S = n(3649),
            k = n.n(S), P = n(86902), N = n.n(P), T = n(2991), C = n.n(T), I = n(78580), M = n.n(I), F = n(29828),
            L = n.n(F), R = n(54804), O = n.n(R), D = n(81643), A = n.n(D), U = n(67294), X = n(85564), V = n.n(X),
            H = n(16289), z = n(34061), B = n(23493), G = n.n(B), W = function (e) {
                return e && e.Math == Math && e
            },
            Y = W("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || W("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || W("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || W("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        }, function (e) {
            e[e.Default = 0] = "Default", e[e.Hide = 1] = "Hide", e[e.HideIcon = 2] = "HideIcon", e[e.Delete = 4] = "Delete", e[e.HideLink = 8] = "HideLink"
        }(i || (i = {})), function (e) {
            e[e.CONTENT_RICH_SPAN_TYPE_UNKNOW = 0] = "CONTENT_RICH_SPAN_TYPE_UNKNOW", e[e.CONTENT_RICH_SPAN_TYPE_MENTION = 1] = "CONTENT_RICH_SPAN_TYPE_MENTION", e[e.CONTENT_RICH_SPAN_TYPE_FORUM = 2] = "CONTENT_RICH_SPAN_TYPE_FORUM", e[e.CONTENT_RICH_SPAN_TYPE_LINK = 3] = "CONTENT_RICH_SPAN_TYPE_LINK", e[e.CONTENT_RICH_SPAN_TYPE_WEBVIEW = 4] = "CONTENT_RICH_SPAN_TYPE_WEBVIEW", e[e.CONTENT_RICH_SPAN_TYPE_IMAGE = 5] = "CONTENT_RICH_SPAN_TYPE_IMAGE", e[e.CONTENT_RICH_SPAN_TYPE_MICRO_APP = 6] = "CONTENT_RICH_SPAN_TYPE_MICRO_APP", e[e.CONTENT_RICH_SPAN_TYPE_MICRO_GAME = 7] = "CONTENT_RICH_SPAN_TYPE_MICRO_GAME", e[e.CONTENT_RICH_SPAN_TYPE_RESERVE = 8] = "CONTENT_RICH_SPAN_TYPE_RESERVE", e[e.CONTENT_RICH_SPAN_TYPE_VIDEO = 9] = "CONTENT_RICH_SPAN_TYPE_VIDEO", e[e.CONTENT_RICH_SPAN_TYPE_CELLPHONE = 10] = "CONTENT_RICH_SPAN_TYPE_CELLPHONE", e[e.CONTENT_RICH_SPAN_TYPE_COMMUNITY = 11] = "CONTENT_RICH_SPAN_TYPE_COMMUNITY", e[e.CONTENT_RICH_SPAN_TYPE_LOTTERY = 12] = "CONTENT_RICH_SPAN_TYPE_LOTTERY", e[e.CONTENT_RICH_SPAN_TYPE_ENTITY = 13] = "CONTENT_RICH_SPAN_TYPE_ENTITY", e[e.CONTENT_RICH_SPAN_TYPE_THEME = 14] = "CONTENT_RICH_SPAN_TYPE_THEME", e[e.CONTENT_RICH_SPAN_TYPE_COMMENT_ENTITY = 15] = "CONTENT_RICH_SPAN_TYPE_COMMENT_ENTITY", e[e.CONTENT_RICH_SPAN_TYPE_ICON = 16] = "CONTENT_RICH_SPAN_TYPE_ICON", e[e.CONTENT_RICH_SPAN_TYPE_TEXT = 17] = "CONTENT_RICH_SPAN_TYPE_TEXT", e[e.CONTENT_RICH_SPAN_TYPE_CONTACT = 18] = "CONTENT_RICH_SPAN_TYPE_CONTACT", e[e.CONTENT_RICH_SPAN_TYPE_TITLE_ENTITY = 19] = "CONTENT_RICH_SPAN_TYPE_TITLE_ENTITY"
        }(r || (r = {})), function (e) {
            e[e.FEED = 1] = "FEED", e[e.FAVOR = 2] = "FAVOR", e[e.HISTORY = 3] = "HISTORY", e[e.PUBLISH = 4] = "PUBLISH", e[e.PROFILE = 5] = "PROFILE", e[e.SHARE = 6] = "SHARE", e[e.DETAIL = 7] = "DETAIL", e[e.MOVIE = 8] = "MOVIE", e[e.SEARCH = 9] = "SEARCH", e[e.CONCERN = 10] = "CONCERN", e[e.REFRESH_TIP = 11] = "REFRESH_TIP", e[e.ADMIN = 12] = "ADMIN", e[e.PGC = 13] = "PGC", e[e.MSG = 14] = "MSG", e[e.COMMENT = 15] = "COMMENT", e[e.PC = 16] = "PC", e[e.XIGUA_FEED = 17] = "XIGUA_FEED", e[e.REPOST_LIST = 18] = "REPOST_LIST", e[e.STORY = 19] = "STORY", e[e.LOTTEYR = 20] = "LOTTEYR", e[e.TAB_COMMENTS = 21] = "TAB_COMMENTS", e[e.SUBJECT = 22] = "SUBJECT", e[e.DETAIL_RELATED = 23] = "DETAIL_RELATED", e[e.SATURN = 24] = "SATURN", e[e.CREATION_CENTER = 25] = "CREATION_CENTER"
        }(o || (o = {})), function (e) {
            e[e.Front = 1] = "Front", e[e.Tail = 2] = "Tail"
        }(a || (a = {})), function (e) {
            e[e.DEFAULT = 0] = "DEFAULT", e[e.HOT_BOARD_WORD = 1] = "HOT_BOARD_WORD"
        }(l || (l = {}));
        var q = n(65596), K = n(44999), J = n(51808), Q = function (e) {
                return e && e.Math == Math && e
            },
            $ = Q("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || Q("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || Q("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || Q("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        $.globalThis = $, $.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ee = function (e) {
            var t = e.uid, n = e.text, i = e.query, r = e.inView;
            return U.createElement(J.Z, {inView: r, justOnce: !0}, U.createElement(q.Z, {
                className: "mentionedUser",
                title: n,
                target: "user_".concat(t),
                href: globalThis.getFilterXss().filterUrl((0, K.$x)(String(t), void 0, i), null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                })
            }, "聽", n, "聽"))
        }, te = n(56118);

        function ne(e, t) {
            var n = void 0 !== d() && m()(e) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                        var n;
                        if (!e) return;
                        if ("string" == typeof e) return ie(e, t);
                        var i = k()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return u()(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ie(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0, r = function () {
                    };
                    return {
                        s: r, n: function () {
                            return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                        }, e: function (e) {
                            throw e
                        }, f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, l = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    l = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function ie(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        var re = function (e) {
                return e && e.Math == Math && e
            },
            oe = re("object" == (void 0 === w() ? "undefined" : (0, _.Z)(w())) && w()) || re("object" == ("undefined" == typeof window ? "undefined" : (0, _.Z)(window)) && window) || re("object" == ("undefined" == typeof self ? "undefined" : (0, _.Z)(self)) && self) || re("object" == (void 0 === n.g ? "undefined" : (0, _.Z)(n.g)) && n.g) || function () {
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
        var ae = U.memo((function (e) {
                var t = e.text, n = e.handleCommentEmojiLoaded, i = (0, U.useMemo)((function () {
                        return [de]
                    }), []), r = (0, U.useState)([t]), o = (0, h.Z)(r, 2), a = o[0], l = o[1], s = (0, U.useState)(!1),
                    u = (0, h.Z)(s, 2), c = u[0], d = u[1], f = (0, U.useMemo)((function () {
                        var t;
                        return null !== (t = e.handlers) && void 0 !== t ? t : i
                    }), [i, e.handlers]);
                return (0, U.useEffect)((function () {
                    var e = function () {
                        var e = (0, v.Z)(b().mark((function e() {
                            var n, i, r, o, a, s, u, c, m, v;
                            return b().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        n = [t], i = ne(f), e.prev = 2, i.s();
                                    case 4:
                                        if ((r = i.n()).done) {
                                            e.next = 40;
                                            break
                                        }
                                        o = r.value, a = [], s = ne(n), e.prev = 8, s.s();
                                    case 10:
                                        if ((u = s.n()).done) {
                                            e.next = 29;
                                            break
                                        }
                                        if ("string" != typeof(c = u.value)) {
                                            e.next = 26;
                                            break
                                        }
                                        return e.t0 = Z()(m = []), e.t1 = m, e.t2 = (0, p.Z)(a), e.t3 = p.Z, e.t4 = V(), e.next = 20, o(c);
                                    case 20:
                                        e.t5 = e.sent, e.t6 = (0, e.t4)(e.t5), e.t7 = (0, e.t3)(e.t6), a = e.t0.call.call(e.t0, e.t1, e.t2, e.t7), e.next = 27;
                                        break;
                                    case 26:
                                        a = Z()(v = []).call(v, (0, p.Z)(a), [c]);
                                    case 27:
                                        e.next = 10;
                                        break;
                                    case 29:
                                        e.next = 34;
                                        break;
                                    case 31:
                                        e.prev = 31, e.t8 = e.catch(8), s.e(e.t8);
                                    case 34:
                                        return e.prev = 34, s.f(), e.finish(34);
                                    case 37:
                                        n = a;
                                    case 38:
                                        e.next = 4;
                                        break;
                                    case 40:
                                        e.next = 45;
                                        break;
                                    case 42:
                                        e.prev = 42, e.t9 = e.catch(2), i.e(e.t9);
                                    case 45:
                                        return e.prev = 45, i.f(), e.finish(45);
                                    case 48:
                                        l(n), d(!0);
                                    case 50:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[2, 42, 45, 48], [8, 31, 34, 37]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [t]), (0, U.useEffect)((function () {
                    c && n && n()
                }), [c]), U.createElement(U.Fragment, null, a)
            })), le = function (e) {
                var t = e.text;
                return U.createElement(ae, {text: t, handlers: [de]})
            }, se = function (e) {
                return function () {
                    var t = (0, v.Z)(b().mark((function t(n) {
                        var i, o, a, l, s, u;
                        return b().wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (null === (i = e.links) || void 0 === i || !i.length) {
                                        t.next = 9;
                                        break
                                    }
                                    if (a = j()(o = e.links).call(o, (function (e) {
                                            return e.type === r.CONTENT_RICH_SPAN_TYPE_MENTION
                                        })), l = 0, s = [], u = n, a.forEach((function (e) {
                                            var t = e.start + l, n = k()(u).call(u, t, t + e.length);
                                            s.push(k()(u).call(u, 0, t)), s.push(U.createElement(ee, {
                                                uid: e.id,
                                                text: n
                                            })), u = k()(u).call(u, t + e.length), l -= t + e.length
                                        })), u && s.push(u), !(s.length > 0)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return", s);
                                case 9:
                                    return t.abrupt("return", [n]);
                                case 10:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, ue = function (e) {
                var t = e.xg_title_rich_text, n = e.at_position, i = e.category_name, r = e.isUserCardInViewed,
                    o = e.userCardInView;
                return function () {
                    var e = (0, v.Z)(b().mark((function e(a) {
                        var l, s, u;
                        return b().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t && t.length > 0)) {
                                        e.next = 8;
                                        break
                                    }
                                    if (l = 0, s = [], u = a, t.forEach((function (e) {
                                            var t = e.start + l, a = k()(u).call(u, t, t + e.length);
                                            s.push(k()(u).call(u, 0, t)), s.push(U.createElement(ee, {
                                                uid: e.user_id,
                                                text: a,
                                                query: {at_position: n},
                                                inView: r ? void 0 : function () {
                                                    null == o || o(), te.Z.consume_at_icon_show({
                                                        category_name: i,
                                                        at_position: n
                                                    })
                                                }
                                            })), u = k()(u).call(u, t + e.length), l -= t + e.length
                                        })), u && s.push(u), !(s.length > 0)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", s);
                                case 8:
                                    return e.abrupt("return", [a]);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, ce = /(\[\S+?\])/g, de = function () {
                var e = (0, v.Z)(b().mark((function e(t) {
                    var n, i, r, o, a, l, s;
                    return b().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, z.g)();
                            case 2:
                                if (r = e.sent, o = r.emoji_mapping, a = r.emoji_sort, o && 0 !== a.length) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", [t]);
                            case 7:
                                return l = N()(o), s = j()(n = C()(i = t.split(ce)).call(i, (function (e, t) {
                                    if (M()(l).call(l, e)) {
                                        var n = function () {
                                            return U.createElement("img", {
                                                className: "emoji_icon",
                                                src: globalThis.getFilterXss().filterUrl((0, z.t)(o[e].code), null, {
                                                    logType: "js.href/src",
                                                    reportOnly: "all"
                                                }),
                                                alt: e,
                                                key: t
                                            })
                                        };
                                        return U.createElement(n, null)
                                    }
                                    return e
                                }))).call(n, (function (e) {
                                    return "" !== e
                                })), e.abrupt("return", s);
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), fe = function (e, t) {
                var n, i, r = j()(n = e.split(ce)).call(n, (function (e) {
                    return "" !== e
                }));
                if (!(1 !== r.length || L()(e).call(e, "[") && O()(e).call(e, "]"))) return A()(e).call(e, t) > -1;
                for (var o = j()(i = t.split(ce)).call(i, (function (e) {
                    return "" !== e
                })).length, a = !1, l = 0; l < r.length - o + 1; l++) if (k()(r).call(r, l, l + o).join("") === t) {
                    a = !0;
                    break
                }
                return a
            }, me = function () {
                var e = (0, v.Z)(b().mark((function e(t) {
                    var n, i, r, o, a;
                    return b().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, z.g)();
                            case 2:
                                if (n = e.sent, i = n.emoji_mapping, r = n.emoji_sort, o = 0, i && 0 !== r.length) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", o);
                            case 8:
                                return a = N()(i), t.split(ce).forEach((function (e) {
                                    return M()(a).call(a, e) && o++, e
                                })), e.abrupt("return", o);
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), pe = /((?:\d{1,2}(?:(:|锛�)\d{1,2}){1,2})|(?:(?:\d{1,2}灏忔椂)?(?:\d{1,2}鍒�)?(?:\d{1,2}绉�)))/,
            ve = function (e) {
                var t, n = e.match(new RegExp(pe, "g"));
                return null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0
            }, he = function (e) {
                var t = e.prefix, n = e.onClick, i = e.onFirstInView, r = e.section, o = e.videoDuration, a = function () {
                    var e = (0, v.Z)(b().mark((function e(a) {
                        var l, s, u;
                        return b().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return u = j()(l = C()(s = a.split(pe)).call(s, (function (e, a) {
                                        if (pe.test(e)) {
                                            var l = function () {
                                                var t = 0, n = new RegExp(":|锛�");
                                                if (n.test(e)) e.split(n).reverse().forEach((function (e, n) {
                                                    t += Number(e) * Math.pow(60, n)
                                                })); else {
                                                    var i = e.match(/(?:(\d{1,2})灏忔椂)?(?:(\d{1,2})鍒�)?(?:(\d{1,2})绉�)?/);
                                                    if (i) {
                                                        var r = (0, h.Z)(i, 4), o = (r[0], r[1]), a = void 0 === o ? 0 : o,
                                                            l = r[2], s = void 0 === l ? 0 : l, u = r[3],
                                                            c = void 0 === u ? 0 : u;
                                                        t = 60 * (60 * Number(a) + Number(s)) + Number(c)
                                                    }
                                                }
                                                return t
                                            }(), s = function () {
                                                var o = G()((function () {
                                                    null == n || n(), H.Z.emit(H.o.requesetPlayerSeek, l, r)
                                                }), 200);
                                                return U.createElement(J.Z, {
                                                    onViewableChange: function (e) {
                                                        return e && i && i()
                                                    }, justOnce: !0
                                                }, U.createElement("div", {
                                                    className: "timeAnchorJump",
                                                    onClick: o
                                                }, t, U.createElement("span", null, e)))
                                            };
                                            return void 0 !== o && l > o ? e : U.createElement(s, {key: a})
                                        }
                                        return e
                                    }))).call(l, (function (e) {
                                        return "" !== e
                                    })), e.abrupt("return", u);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }();
                return a
            }, _e = ae
    }, 12126: function (e, t, n) {
        n.d(t, {
            S: function () {
                return w
            }
        });
        n(41539);
        var i = n(68420), r = n(27344), o = n(5281), a = n(90306), l = n(3020), s = n(3362), u = n(44845), c = n(19623),
            d = (n(9653), n(90149)), f = n.n(d), m = n(1068), p = n.n(m), v = n(67294), h = n(35128), _ = n(91481);

        function g(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !p()) return !1;
                if (p().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(p()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, s.Z)(e);
                if (t) {
                    var r = (0, s.Z)(this).constructor;
                    n = p()(i, arguments, r)
                } else n = i.apply(this, arguments);
                return (0, l.Z)(this, n)
            }
        }

        var b = function (e) {
                return e && e.Math == Math && e
            },
            y = b("object" == (void 0 === f() ? "undefined" : (0, c.Z)(f())) && f()) || b("object" == ("undefined" == typeof window ? "undefined" : (0, c.Z)(window)) && window) || b("object" == ("undefined" == typeof self ? "undefined" : (0, c.Z)(self)) && self) || b("object" == (void 0 === n.g ? "undefined" : (0, c.Z)(n.g)) && n.g) || function () {
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
        var w = function (e) {
            (0, a.Z)(n, e);
            var t = g(n);

            function n(e) {
                var r;
                return (0, i.Z)(this, n), r = t.call(this, e), (0, u.Z)((0, o.Z)(r), "getStoreKey", (function () {
                    return "ErrorBoundaryReload" + window.location.href
                })), r.state = {hasError: !1}, r
            }

            return (0, r.Z)(n, [{
                key: "getRetryTimes", value: function () {
                    var e = (0, _.G)(this.getStoreKey());
                    return e ? Number(e) : 0
                }
            }, {
                key: "addRetryTimes", value: function () {
                    (0, _.t_)(this.getStoreKey(), String(this.getRetryTimes() + 1))
                }
            }, {
                key: "componentDidCatch", value: function (e, t) {
                    var n, i = this;
                    "undefined" != typeof window && (this.getRetryTimes() >= (null !== (n = this.props.maxReFreshTime) && void 0 !== n ? n : 1) || (setTimeout((function () {
                        throw i.props.autoRefresh && (i.addRetryTimes(), window.location.reload()), e
                    }), 0), h.Z.errorBoundaryOccur({isRefresh: !!this.props.autoRefresh}), console.log("ErrorBoundary getError")))
                }
            }, {
                key: "render", value: function () {
                    return this.state.hasError ? this.props.Fallback || null : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError", value: function (e) {
                    return {hasError: !0}
                }
            }]), n
        }(v.Component);
        (0, u.Z)(w, "defaultProps", {maxReFreshTime: 1})
    }, 99713: function (e, t, n) {
        var i = n(73126), r = n(59056), o = n(41266), a = n(19623), l = n(90149), s = n.n(l), u = n(67294),
            c = ["onLongPress", "onClick", "onLeave", "options", "children", "className"], d = function (e) {
                return e && e.Math == Math && e
            },
            f = d("object" == (void 0 === s() ? "undefined" : (0, a.Z)(s())) && s()) || d("object" == ("undefined" == typeof window ? "undefined" : (0, a.Z)(window)) && window) || d("object" == ("undefined" == typeof self ? "undefined" : (0, a.Z)(self)) && self) || d("object" == (void 0 === n.g ? "undefined" : (0, a.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        f.globalThis = f, f.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var m = (0, u.forwardRef)((function (e, t) {
            var n = e.onLongPress, a = e.onClick, l = e.onLeave, s = e.options,
                d = void 0 === s ? {delay: 300, shouldPreventDefault: !1} : s, f = e.children, m = e.className,
                p = (0, o.Z)(e, c), v = d.delay, h = d.shouldPreventDefault, _ = (0, u.useState)(!1),
                g = (0, r.Z)(_, 2), b = g[0], y = g[1], w = (0, u.useRef)(), x = (0, u.useRef)(), Z = function (e) {
                    (function (e) {
                        return "touches" in e
                    })(e) && e.touches.length < 2 && e.preventDefault && e.preventDefault()
                }, E = (0, u.useCallback)((function (e) {
                    h && e.target && (e.target.addEventListener("touchend", Z, {passive: !1}), w.current = e.target), x.current = setTimeout((function () {
                        null == n || n(e), y(!0)
                    }), v)
                }), [n, v, h]), j = (0, u.useCallback)((function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    x.current && clearTimeout(x.current), t && !b && (null == a || a(e)), y(!1), h && w.current && w.current.removeEventListener("touchend", Z), null == l || l()
                }), [h, a, b]), S = {
                    onMouseDown: function (e) {
                        return E(e)
                    }, onTouchStart: function (e) {
                        return E(e)
                    }, onMouseUp: function (e) {
                        return j(e)
                    }, onMouseLeave: function (e) {
                        return j(e, !1)
                    }, onTouchEnd: function (e) {
                        return j(e)
                    }
                };
            return u.createElement("button", (0, i.Z)({}, S, p, {
                onKeyDown: function (e) {
                    13 === e.keyCode && (null == a || a(e))
                }, className: m, ref: t
            }), f)
        }));
        t.Z = m
    }, 76523: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return M
            }
        });
        var i = n(73126), r = n(59056), o = n(19623), a = (n(68309), n(90149)), l = n.n(a), s = n(67294), u = n(44786),
            c = n(19742), d = n(44984), f = n(5799), m = n(94184), p = n.n(m), v = n(63952), h = n(9795), _ = n(23493),
            g = n.n(_), b = n(54871), y = function (e) {
                return e && e.Math == Math && e
            },
            w = y("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || y("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || y("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || y("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        w.globalThis = w, w.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var x = function () {
                var e = (0, s.useState)((function () {
                    return "undefined" != typeof document ? document.visibilityState : "visible"
                })), t = (0, r.Z)(e, 2), n = t[0], i = t[1];
                return (0, s.useEffect)((function () {
                    var e = function () {
                        i(document.visibilityState)
                    };
                    return e(), document.addEventListener("visibilitychange", e), function () {
                        return document.removeEventListener("visibilitychange", e)
                    }
                }), []), n
            }, Z = n(42057), E = function (e) {
                return e && e.Math == Math && e
            },
            j = E("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || E("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || E("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || E("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function S(e) {
            (0, Z.mT)("video_finish_page_auto_next", e)
        }

        j.globalThis = j, j.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var k = n(96251), P = function (e) {
                return e && e.Math == Math && e
            },
            N = P("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || P("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || P("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || P("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        N.globalThis = N, N.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var T = {
            digg: {icon: "icon-thumbsup", title: "璧�"},
            collect: {icon: "icon-collect", title: "鏀惰棌"},
            share: {icon: "icon-share", title: "鍒嗕韩"}
        }, C = function (e) {
            var t = e.changeFollow, n = e.author_user_info, i = void 0 === n ? {} : n, o = e.onGoNext,
                a = e.hasInteraction, l = void 0 === a || a, m = e.title, _ = e.nextVideo, g = e.diasbleAutoPlay,
                y = e.pauseAutoPlay, w = e.afterGoNext, E = e.log_pb, j = e.fullscreen, P = e.isFullInView,
                N = e.containerElm, T = (_ || {}).playNextExplain, C = void 0 === T ? "鎺ヤ笅鏉ユ挱鏀�" : T, M = (0, h.Z)(),
                F = (0, s.useState)(!1), L = (0, r.Z)(F, 2), R = L[0], O = L[1], D = (0, s.useState)(5),
                A = (0, r.Z)(D, 2), U = A[0], X = A[1], V = (0, s.useState)(!1), H = (0, r.Z)(V, 2), z = H[0], B = H[1],
                G = i.avatar_url, W = i.user_auth_info, Y = void 0 === W ? {} : W, q = i.user_id, K = i.follow,
                J = i.name, Q = (0, b.jY)(), $ = (0, s.useCallback)((function () {
                    o && o(), null == w || w()
                }), [w, o]), ee = function () {
                    var e;
                    e = {log_pb: E, fullscreen: j}, (0, Z.mT)("video_finish_page_click_next", e), $()
                }, te = (0, s.useRef)(void 0), ne = (0, s.useRef)(void 0), ie = (0, s.useCallback)((function () {
                    clearTimeout(te.current), clearInterval(ne.current), O(!1), X(5)
                }), []);
            (0, s.useEffect)((function () {
                return (0, v.L8)(document.querySelector("#vs")), function () {
                    return (0, v.L8)()
                }
            }), []);
            var re, oe, ae, le = x(), se = M || y || !P, ue = "visible" !== le,
                ce = (ae = null !== (re = null === (oe = k._o.getMyABInfoV2().playDirectlyVideoOnBackend) || void 0 === oe ? void 0 : oe.enable) && void 0 !== re && re, null != _ && _.isPlayDirectly && ae ? se : se || ue),
                de = (0, s.useRef)(ce);
            (0, s.useLayoutEffect)((function () {
                var e = function () {
                    !_ || g || z || ce ? ie() : (te.current = window.setTimeout((function () {
                        S({log_pb: E, fullscreen: j}), $()
                    }), 5e3), X(5), ne.current = window.setInterval((function () {
                        X((function (e) {
                            return --e <= 0 && clearInterval(ne.current), e
                        }))
                    }), 1e3), O(!0))
                };
                e();
                var t = function () {
                    "hidden" === document.visibilityState ? ie() : e()
                };
                return document.addEventListener("visibilitychange", t), function () {
                    clearTimeout(te.current), clearInterval(ne.current), document.removeEventListener("visibilitychange", t)
                }
            }), [ie, g, z, ce, null == _ ? void 0 : _.title, $, _]);
            var fe = !1 === de.current && (null == _ ? void 0 : _.isPlayDirectly);
            return (0, s.useEffect)((function () {
                var e, t;
                if (fe) return null === (e = document.querySelector(".xgplayer")) || void 0 === e || e.classList.add("xgplayer-play-directly"), S({
                    log_pb: E,
                    fullscreen: j
                }), $(), function () {
                    var e;
                    null === (e = document.querySelector(".xgplayer")) || void 0 === e || e.classList.remove("xgplayer-play-directly")
                };
                t = {log_pb: E, fullscreen: j}, (0, Z.mT)("video_finish_page_show", t)
            }), []), fe ? null : s.createElement(s.Fragment, null, l && s.createElement("div", {className: "PlayEnding__interaction"}, s.createElement(u.Z, {
                size: 56,
                url: G,
                uid: q
            }), s.createElement("div", {className: "PlayEnding__author"}, s.createElement("div", {
                onClick: function () {
                    window.open("/home/".concat(q, "/"))
                }
            }, s.createElement(d.Z, {
                name: J,
                authInfo: Y
            })), q !== Q.id && s.createElement(c.Z, {
                className: "PlayEnding__follow",
                defaultIsFollow: K,
                key: K,
                toUserID: q,
                onChange: t
            })), s.createElement("div", {className: "vl"}), s.createElement(I, {
                type: "digg",
                actived: e.isDigg,
                onClick: e.onDigg
            }), s.createElement(I, {
                type: "collect",
                actived: e.isCollect,
                onClick: e.onCollect
            }), s.createElement(f.Z, {
                popupAlign: {points: ["tc", "bc"]},
                getPopupContainer: function () {
                    return N
                },
                onCopy: e.onShareCopy,
                onPopupVisibleChange: e.onShareVisibleChange,
                onQuickShare: e.onQuickShare,
                title: m
            }, s.createElement(I, {type: "share"}))), _ && s.createElement("div", {className: "PlayEnding__nextVideo"}, s.createElement("div", {className: "PlayEnding__nextVideo__explain"}, C), s.createElement("div", {
                className: "PlayEnding__nextVideo__preview",
                style: {backgroundImage: "url(".concat(_.cover, ")")},
                onClick: function (e) {
                    return e.target === e.currentTarget && ee()
                }
            }, s.createElement("div", {className: "PlayEnding__nextVideo__btns"}, s.createElement("div", {
                className: "PlayEnding__nextVideo__btns__next",
                onClick: ee
            }, s.createElement("svg", {
                key: te.current,
                className: p()("circleProcess", {stopAnimation: !R}),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 100",
                strokeLinecap: "round"
            }, s.createElement("circle", {
                id: "circle",
                cx: "50",
                cy: "50",
                r: "46",
                strokeWidth: "5",
                style: {animationDuration: "5s"}
            }), s.createElement("circle", {
                id: "circle",
                cx: "50",
                cy: "50",
                r: "46",
                fill: "rgba(255, 255, 255, 0.3)",
                style: {animationDuration: "5s"}
            }), !R && s.createElement("g", {transform: "translate(20,20)"}, s.createElement("svg", {
                className: "PlayEnding__nextVideo__iconNext",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                width: "60",
                height: "60",
                viewBox: "0 0 20 20"
            }, s.createElement("path", {
                fill: "#fff",
                d: "M12.7 10.7l-7.4 4.9c-0.4 0.2-0.9 0.1-1.1-0.2-0.2-0.2-0.2-0.3-0.2-0.5v-9.8c0-0.4 0.4-0.8 0.8-0.8 0.2 0 0.3 0 0.4 0.1l7.4 4.9c0.4 0.2 0.5 0.7 0.2 1.1 0.1 0.1 0 0.2-0.1 0.3zM14.9 4c0.6 0 1.1 0.5 1.1 1.1v9.8c0 0.6-0.5 1.1-1.1 1.1s-1.1-0.5-1.1-1.1v-9.8c0-0.6 0.5-1.1 1.1-1.1z"
            })))), R && s.createElement("span", {className: "PlayEnding__nextVideo__countDown"}, U)), R ? s.createElement("div", {
                className: "PlayEnding__nextVideo__cancel",
                onClick: function () {
                    var e;
                    e = {log_pb: E, fullscreen: j}, (0, Z.mT)("video_finish_page_click_cancel", e), B(!0), ie()
                }
            }, "鍙栨秷") : s.createElement("div", {
                className: "PlayEnding__nextVideo__next",
                onClick: ee
            }, "涓嬩竴闆�")), ce && s.createElement("div", {
                className: "PlayEnding__stopAutoPlay",
                onClick: ee
            }, "鑷姩鎾斁鍔熻兘宸叉殏鍋�")), s.createElement("div", {
                className: "PlayEnding__nextVideo__title",
                onClick: ee
            }, _.title), _.subTitle && s.createElement("div", {className: "PlayEnding__nextVideo__subTitle"}, _.subTitle)))
        }, I = function (e) {
            var t = e.type, n = e.actived, i = T[t];
            return s.createElement("div", {
                key: t, onClick: function () {
                    return e.onClick && e.onClick()
                }, className: p()("PlayEnding__interaction__action", {actived: n})
            }, s.createElement("div", null, s.createElement("i", {className: i.icon})), s.createElement("div", null, i.title))
        }, M = function (e) {
            var t = e.isHide, n = (0, s.useRef)(null), o = function (e) {
                var t = e.ref, n = (0, s.useState)(!0), i = (0, r.Z)(n, 2), o = i[0], a = i[1], l = (0, s.useState)(!1),
                    u = (0, r.Z)(l, 2), c = u[0], d = u[1], f = (0, s.useCallback)(g()((function () {
                        if (t.current) {
                            var e = t.current.getBoundingClientRect(), n = function (e) {
                                var n = document.elementFromPoint(1, 1);
                                return n === t.current || e >= ((null == n ? void 0 : n.clientHeight) || 72) && e <= (window.innerHeight || document.documentElement.clientHeight)
                            }, i = n(e.bottom) && n(e.top);
                            a(i)
                        }
                    }), 500), []);
                return (0, s.useEffect)((function () {
                    return f(), d(!0), window.addEventListener("scroll", f), function () {
                        window.removeEventListener("scroll", f)
                    }
                }), []), {isFullInView: o, isInited: c}
            }({ref: n}), a = o.isInited, l = o.isFullInView;
            return s.createElement("div", {
                className: "PlayEnding",
                ref: n,
                style: t ? {display: "none"} : {}
            }, a && n.current && s.createElement(C, (0, i.Z)({}, e, {isFullInView: l, containerElm: n.current})))
        }
    }, 78606: function (e, t, n) {
        var i = n(44845), r = n(33938), o = n(59056), a = n(19623), l = n(63109), s = n.n(l),
            u = (n(69600), n(41539), n(54747), n(90149)), c = n.n(u), d = n(81643), f = n.n(d), m = n(2991), p = n.n(m),
            v = n(20116), h = n.n(v), _ = n(77766), g = n.n(_), b = n(86902), y = n.n(b), w = n(14310), x = n.n(w),
            Z = n(34074), E = n.n(Z), j = n(39649), S = n.n(j), k = n(67294), P = n(72169), N = n(68956), T = n(54871),
            C = n(94614), I = n(11482), M = n(49378);

        function F(e, t) {
            var n = y()(e);
            if (x()) {
                var i = x()(e);
                t && (i = h()(i).call(i, (function (t) {
                    return E()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function L(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(n), !0).forEach((function (t) {
                    (0, i.Z)(e, t, n[t])
                })) : S() ? Object.defineProperties(e, S()(n)) : F(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, E()(n, t))
                }))
            }
            return e
        }

        var R = function (e) {
                return e && e.Math == Math && e
            },
            O = R("object" == (void 0 === c() ? "undefined" : (0, a.Z)(c())) && c()) || R("object" == ("undefined" == typeof window ? "undefined" : (0, a.Z)(window)) && window) || R("object" == ("undefined" == typeof self ? "undefined" : (0, a.Z)(self)) && self) || R("object" == (void 0 === n.g ? "undefined" : (0, a.Z)(n.g)) && n.g) || function () {
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
        var D = {
            location: {
                text: "鎶辨瓑锛岀敱浜庣増鏉冮檺鍒讹紝浣犳墍鍦ㄧ殑鍦板尯鏆傛椂鏃犳硶鎾斁璇ヨ棰戯紝蹇幓鐪嬬湅鍏朵粬鐨勮棰戝惂锝�",
                hasRetry: !1,
                disableFeedback: !0
            },
            disable: {text: "鎶辨瓑锛屾挱鏀惧櫒鍑洪敊浜�", feedbackText: "濡備粛鏈В鍐筹紝浣犲彲浠�"},
            nosupport: {
                text: "浣犵殑娴忚娴忚鍣ㄦ棤娉曟敮鎸佸綋鍓嶆牸寮忕殑鎾斁锛岃灏濊瘯鎹竴涓祻瑙堝櫒璇曡瘯锝�",
                feedbackText: "濡備粛鏈В鍐筹紝浣犲彲浠�",
                hasRetry: !1
            },
            fetchFailed: {text: "鏁版嵁鑾峰彇寮傚父", disableFeedback: !0},
            mac_drm_unabled: {
                text: "褰撳墠鐗堟湰娴忚鍣ㄦ殏涓嶆敮鎸佽鐪嬫瑙嗛锛岃浣跨敤鏈€鏂扮増鏈� Chrome 娴忚鍣ㄨ鐪�",
                disableFeedback: !0,
                hasRetry: !1
            },
            win_drm_unabled: {
                text: "褰撳墠鐗堟湰娴忚鍣ㄦ殏涓嶆敮鎸佽鐪嬫瑙嗛锛岃浣跨敤鏈€鏂扮増鏈� Chrome 鎴� edge 娴忚鍣ㄨ鐪�",
                disableFeedback: !0,
                hasRetry: !1
            },
            default: {text: "鎶辨瓑锛屾挱鏀惧櫒鍑洪敊浜�", feedbackText: "濡備粛鏈В鍐筹紝浣犲彲浠�"}
        };
        t.Z = function (e) {
            var t, i, a = e.preset, l = void 0 === a ? "default" : a, u = e.errorInfo, c = void 0 === u ? {} : u,
                d = (0, M.Z)(),
                m = "default" !== l ? l : -499995 === (null == c ? void 0 : c.errorCode) ? "nosupport" : -499901 === (null == c ? void 0 : c.errorCode) ? d.isMac ? "mac_drm_unabled" : "win_drm_unabled" : l,
                v = e.imgSrc, _ = void 0 === v ? D[m].img || n(29292) : v, b = e.text, y = void 0 === b ? D[m].text : b,
                w = e.feedbackText, x = void 0 === w ? D[m].feedbackText : w, Z = e.hasRetry,
                E = void 0 === Z ? void 0 === D[m].hasRetry || D[m].hasRetry : Z,
                j = null === (t = D[m]) || void 0 === t ? void 0 : t.disableFeedback, S = (0, k.useState)(!1),
                F = (0, o.Z)(S, 2), R = F[0], O = F[1], A = (0, T.jY)(), U = A.webid,
                X = null !== (i = A.uniqueId) && void 0 !== i ? i : "", V = (0, C.Z)().userAgent,
                H = f()(V).call(V, "HeadlessChrome") > -1, z = (0, k.useMemo)((function () {
                    return [{label: "error_code", value: c.errorCode || c.code}, {
                        label: "error_type",
                        value: c.type
                    }, {label: "error_msg", value: c.message || c.msg}, {
                        label: "url",
                        value: "undefined" != typeof window ? window.location.href : ""
                    }, {label: "vid", value: c.vid}, {label: "vtype", value: c.vtype}, {
                        label: "cdn_url",
                        value: c.cdnUrl
                    }, {label: "duration", value: c.duration}, {label: "current_time", value: c.currenTime}, {
                        label: "ua",
                        value: "undefined" != typeof window ? window.navigator.userAgent : ""
                    }, {label: "sdk_version", value: c.sdk_version || c.playerVersion}, {
                        label: "uniqueId",
                        uniqueId: X
                    }, {label: "log", value: c.log}]
                }), [c, X]), B = (0, k.useRef)({}), G = (0, k.useMemo)((function () {
                    var e;
                    return p()(e = h()(z).call(z, (function (e) {
                        return null != e.value
                    }))).call(e, (function (e) {
                        var t;
                        return B.current[e.label] = e.value, g()(t = "".concat(e.label, ":")).call(t, e.value)
                    })).join(", ")
                }), [z]), W = function () {
                    var e = (0, r.Z)(s().mark((function e() {
                        return s().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return N.Z.player.playerFastFeedback(L(L({}, B.current), {}, {sessionid: c && c.sessionid})), e.next = 3, P.Z.other.postFeedback({
                                        content: G,
                                        contact: "鎾斁鍣ㄥ揩閫熷弽棣�",
                                        error_code: c && c.code,
                                        uniqueId: X,
                                        sessionid: c && c.sessionid
                                    });
                                case 3:
                                    O(!0);
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }();
            return (0, k.useEffect)((function () {
                !j && N.Z.player.playerAutoFeedback(L(L({}, B.current), {}, {sessionid: c && c.sessionid}))
            }), [c, j]), k.createElement("div", {className: "PlayFailure"}, k.createElement("div", {className: "content"}, _ && !H && k.createElement(I.Z, {
                src: globalThis.getFilterXss().filterUrl(_, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }), alt: ""
            }), k.createElement("div", {className: "promptText"}, y, E && k.createElement(k.Fragment, null, "锛屼綘鍙互灏濊瘯", " ", k.createElement("span", {
                className: "retry",
                onClick: function () {
                    return window.location.reload()
                }
            }, "鐐规鍒锋柊"))), !j && k.createElement("div", {className: "feedbackText"}, R ? k.createElement(k.Fragment, null, "鍙嶉鍙戦€佹垚鍔�") : k.createElement(k.Fragment, null, x, k.createElement("span", {onClick: W}, "绔嬪嵆鍙嶉"))), R && k.createElement("div", {className: "errorInfo"}, c && c.code && k.createElement(k.Fragment, null, "閿欒浠ｇ爜锛�", c.code || c.errorCode, "锛�"), "webid锛�", U, c && c.sessionid && k.createElement(k.Fragment, null, "锛宻essionid锛�", c.sessionid))))
        }
    }, 19076: function (e, t, n) {
        var i = n(19623), r = (n(29254), n(90149)), o = n.n(r), a = n(20116), l = n.n(a), s = n(78580), u = n.n(s),
            c = n(2991), d = n.n(c), f = n(67294), m = n(67209), p = n(94184), v = n.n(p), h = function (e) {
                return e && e.Math == Math && e
            },
            _ = h("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || h("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || h("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || h("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
            var t = e.className, n = void 0 === t ? "" : t, i = e.links, r = void 0 === i ? [] : i;
            (0, f.useEffect)((function () {
                var e = r.length;
                if (e) {
                    var t, n = l()(r).call(r, (function (e) {
                        var t, n;
                        return u()(t = e.link).call(t, "www.ixigua.com") || u()(n = e.link).call(n, "m.ixigua.com")
                    })).length;
                    window.Tea("seo_link_show", {
                        isSpider: (0, m.E)(null === (t = window) || void 0 === t ? void 0 : t.navigator.userAgent).result,
                        total_num: e,
                        xigua_link_num: n,
                        other_link_num: e - n
                    })
                }
            }), [r]);
            return null != r && r.length ? f.createElement("div", {className: v()("seo-links", n)}, f.createElement("span", null, "鐑棬锛�"), d()(r).call(r, (function (e) {
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
                                isSpider: (0, m.E)(null === (t = window) || void 0 === t ? void 0 : t.navigator.userAgent).result,
                                click_text: e.text,
                                click_link: e.link
                            })
                        }(e)
                    }
                }, e.text)
            }))) : f.createElement(f.Fragment, null)
        }
    }, 5799: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return q
            }
        });
        var i, r, o = n(86902), a = n.n(o), l = n(14310), s = n.n(l), u = n(20116), c = n.n(u), d = n(34074),
            f = n.n(d), m = n(39649), p = n.n(m), v = n(44845), h = n(19623),
            _ = (n(29254), n(41539), n(54747), n(74916), n(64765), n(90149)), g = n.n(_), b = n(2991), y = n.n(b),
            w = n(67294), x = n(20640), Z = n.n(x), E = n(7071), j = n(27361), S = n.n(j);

        function k() {
            return k = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, k.apply(this, arguments)
        }

        var P = function (e) {
                return w.createElement("svg", k({
                    width: 44,
                    height: 44,
                    viewBox: "0 0 44 44",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), i || (i = w.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22z",
                    fill: "#557BFF"
                })), r || (r = w.createElement("path", {
                    d: "M30.25 12.834h-16.5a1.833 1.833 0 00-1.833 1.833v14.667a1.834 1.834 0 001.833 1.833h16.5a1.834 1.834 0 001.834-1.834V14.668a1.835 1.835 0 00-1.834-1.833zm-10.954 13.52a.972.972 0 11-1.375 1.375L15.191 25a1 1 0 010-1.414l2.73-2.73a.972.972 0 111.375 1.374l-2.062 2.063 2.062 2.062zm6.784 1.375a.972.972 0 11-1.375-1.375l2.062-2.062-2.063-2.063a.972.972 0 111.375-1.375l2.73 2.73a1 1 0 010 1.415l-2.73 2.73zm3.07-11.312a1 1 0 01-1 1h-12.3a1 1 0 01-1-1v-.237a1 1 0 011-1h12.3a1 1 0 011 1v.237z",
                    fill: "#fff"
                })))
            }, N = n(44586), T = n(73126), C = n(59056), I = n(41266), M = n(1028), F = n(64138), L = n(92744),
            R = ["onPopupVisibleChange"];

        function O(e, t) {
            var n = a()(e);
            if (s()) {
                var i = s()(e);
                t && (i = c()(i).call(i, (function (t) {
                    return f()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? O(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : p() ? Object.defineProperties(e, p()(n)) : O(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, f()(n, t))
                }))
            }
            return e
        }

        var A = function (e) {
                return e && e.Math == Math && e
            },
            U = A("object" == (void 0 === g() ? "undefined" : (0, h.Z)(g())) && g()) || A("object" == ("undefined" == typeof window ? "undefined" : (0, h.Z)(window)) && window) || A("object" == ("undefined" == typeof self ? "undefined" : (0, h.Z)(self)) && self) || A("object" == (void 0 === n.g ? "undefined" : (0, h.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        U.globalThis = U, U.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var X = function (e) {
            var t, n = e.onPopupVisibleChange, i = (0, I.Z)(e, R), r = (0, w.useState)(!1), o = (0, C.Z)(r, 2),
                a = o[0], l = o[1], s = (0, w.useRef)(n);
            (0, w.useEffect)((function () {
                s.current = n
            }), [n]), (0, F.Z)((function () {
                var e;
                null === (e = s.current) || void 0 === e || e.call(s, a)
            }), [a]);
            var u = (0, w.useCallback)((function (t) {
                    var n, i;
                    (0, L.vx)(t.keyCode) && l(!0), null === (n = e.children.props) || void 0 === n || null === (i = n.onKeyDown) || void 0 === i || i.call(n, t)
                }), [null === (t = e.children.props) || void 0 === t ? void 0 : t.onKeyDown]),
                c = w.Children.only(e.children), d = w.cloneElement(c, D(D({}, e.children.props), {}, {onKeyDown: u}));
            return w.createElement(M.Z, (0, T.Z)({}, i, {
                popupVisible: a, onPopupVisibleChange: function (e) {
                    l(e)
                }
            }), d)
        }, V = n(16289), H = n(54998), z = n.n(H);

        function B(e, t) {
            var n = a()(e);
            if (s()) {
                var i = s()(e);
                t && (i = c()(i).call(i, (function (t) {
                    return f()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? B(Object(n), !0).forEach((function (t) {
                    (0, v.Z)(e, t, n[t])
                })) : p() ? Object.defineProperties(e, p()(n)) : B(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, f()(n, t))
                }))
            }
            return e
        }

        var W = function (e) {
                return e && e.Math == Math && e
            },
            Y = W("object" == (void 0 === g() ? "undefined" : (0, h.Z)(g())) && g()) || W("object" == ("undefined" == typeof window ? "undefined" : (0, h.Z)(window)) && window) || W("object" == ("undefined" == typeof self ? "undefined" : (0, h.Z)(self)) && self) || W("object" == (void 0 === n.g ? "undefined" : (0, h.Z)(n.g)) && n.g) || function () {
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
        var q = function (e) {
            var t = e.popupAlign, n = e.title, i = e.showIframeShare, r = e.onCopy, o = e.onPopupVisibleChange,
                a = e.onQuickShare;
            return w.createElement(X, {
                action: ["hover", "click"],
                popup: w.createElement(K, {title: n, showIframeShare: i, onCopy: r, onQuickShare: a}),
                popupClassName: "share__popupContainer",
                popupAlign: G({points: ["tr", "br"], offset: [0, 6]}, t),
                getPopupContainer: e.getPopupContainer,
                destroyPopupOnHide: !0,
                onPopupVisibleChange: o
            }, e.children)
        }, K = function (e) {
            var t, n, i, r = e.title, o = e.showIframeShare, a = e.onQuickShare, l = e.allowedQueryKey,
                s = void 0 === l ? ["id"] : l, u = e.tabIndex,
                c = e.link || (t = new (z()), n = t.query(!0), i = {}, s.forEach((function (e) {
                    n[e] && (i[e] = n[e])
                })), t.search("").setQuery(i), t.href());
            (0, w.useEffect)((function () {
                return V.Z.emit(V.o.shareShow), function () {
                    V.Z.emit(V.o.shareHide)
                }
            }));
            var d = ["qq", "qzone", "weibo"];
            return o && d.unshift("iframe"), w.createElement("div", {
                className: "share__content".concat(o ? " show-iframe-share" : ""),
                tabIndex: u,
                role: "button",
                "aria-label": "鍒嗕韩",
                id: "share-popup-button"
            }, w.createElement("div", {className: "share__quickshare__container"}, y()(d).call(d, (function (e) {
                return w.createElement(Q, {title: r, key: e, type: e, link: window.location.href, onQuickShare: a})
            }))), w.createElement($, {title: "瑙嗛鍦板潃", url: c, onCopy: e.onCopy}))
        }, J = {
            qzone: {
                title: "QQ绌洪棿", icon: "qqzone", rule: function (e, t, n) {
                    return "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + e + "&title=" + t + "&pics=" + n
                }
            }, weibo: {
                title: "寰崥", icon: "weibo", rule: function (e, t, n) {
                    return "https://service.weibo.com/share/share.php?url=" + e + "&title=" + t + "&pic=" + n
                }
            }, qq: {
                title: "QQ", icon: "qq", rule: function (e, t, n) {
                    return "https://connect.qq.com/widget/shareqq/index.html?url=" + e + "&title=" + t + "&pics=" + n + "&summary=" + t
                }
            }, iframe: {title: "宓屽叆浠ｇ爜", icon: "iframe"}
        }, Q = function (e) {
            var t = e.type, n = e.link, i = e.title, r = e.onQuickShare, o = J[t], a = o.rule, l = o.icon, s = o.title,
                u = (0, w.useContext)(E.Z), c = u.video, d = u.group_id;
            return w.createElement("div", {
                onClick: function () {
                    window.Tea("share", {
                        group_id: d + "",
                        category_name: c.tag,
                        share_type: t,
                        author_id: S()(c, "user_info.user_id") + ""
                    }), "iframe" !== t && window.open(a(n, i, "")), r(t)
                }, className: "share__quickshare"
            }, w.createElement("div", {className: "share__quickshare__icon"}, "iframe" === l ? w.createElement(P, null) : w.createElement("i", {className: "icon-".concat(l)})), w.createElement("div", {className: "share__quickshare__title"}, s))
        }, $ = function (e) {
            var t = e.title, n = e.url, i = e.onCopy, r = (0, w.useRef)(null), o = function () {
                Z()(n), i && i(), N.Z.success("澶嶅埗鎴愬姛")
            };
            return w.createElement("div", {className: "share__URLShare"}, w.createElement("label", {className: "label"}, t), w.createElement("div", {className: "share__URLShare__inputWrapper"}, w.createElement("div", {
                className: "url",
                onDoubleClick: function (e) {
                    e.preventDefault(), setTimeout(o, 0)
                }
            }, n), w.createElement("button", {onClick: o, ref: r, "aria-label": "澶嶅埗鍒嗕韩閾炬帴"}, "澶嶅埗")))
        }
    }, 24511: function (e, t, n) {
        var i = n(73126), r = n(41266), o = n(19623), a = n(90149), l = n.n(a), s = n(67294), u = n(94184), c = n.n(u),
            d = n(42271), f = n(99713),
            m = ["isActived", "onClick", "onLeave", "onLongPress", "lottieOptions", "className", "type", "triggerAnyWhere", "content", "actionIconLookup", "icon"],
            p = function (e) {
                return e && e.Math == Math && e
            },
            v = p("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || p("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || p("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || p("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
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
            agree: "icon-thumbsup",
            disagree: "icon-thumbsdown",
            collect: "icon-collect",
            share: "icon-share",
            superdigg: "icon-superdigg"
        };
        t.Z = function (e) {
            var t = e.isActived, n = e.onClick, o = e.onLeave, a = e.onLongPress, l = e.lottieOptions, u = e.className,
                p = e.type, v = e.triggerAnyWhere, _ = void 0 === v || v, g = e.content, b = e.actionIconLookup,
                y = void 0 === b ? h : b, w = e.icon, x = (0, r.Z)(e, m), Z = (0, s.useRef)(null),
                E = (0, s.useRef)(!1);
            return (0, s.useEffect)((function () {
                !function (e) {
                    var t, n, i = e.lottieOptions, r = e.isActived;
                    i && null != (null === (t = Z.current) || void 0 === t ? void 0 : t.anim) && (null === (n = Z.current) || void 0 === n || n.anim[r ? "play" : "stop"]())
                }(e)
            }), [e]), s.createElement(f.Z, (0, i.Z)({
                onClick: function (e) {
                    null == n || n(), e.stopPropagation()
                },
                onLongPress: a,
                onLeave: o,
                className: c()("video_action_item", u, {"video_action_item--triggerAnyWhere": _, actived: t}),
                "aria-label": e["aria-label"] || g
            }, x), s.createElement("span", null, w, l ? s.createElement(d.Z, {
                ref: Z,
                className: c()("video_action_item--lottie", {hidden: !!w}),
                options: l,
                afterInited: function (e) {
                    l && !E.current && t && (E.current = !0, null == e || e.goToAndStop(l.lastFrame, !0))
                }
            }) : w ? void 0 : s.createElement("i", {className: c()(null == y ? void 0 : y[p], {actived: t})}), g && s.createElement("span", {className: "font-h4-bold"}, g)))
        }
    }, 85521: function (e, t, n) {
        var i = n(73126), r = n(19623), o = (n(74916), n(15306), n(41539), n(54747), n(90149)), a = n.n(o),
            l = n(86902), s = n.n(l), u = n(67294), c = n(94184), d = n.n(c), f = function (e) {
                return e && e.Math == Math && e
            },
            m = f("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || f("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || f("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || f("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        m.globalThis = m, m.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        t.Z = function (e) {
            var t = e.injectData, n = e.className, r = {};
            return s()(t).forEach((function (e) {
                var n;
                null != t[e] && (r["data-".concat((n = e, n.replace(/([A-Z])/g, "-$1").toLowerCase()))] = t[e])
            })), u.createElement("div", (0, i.Z)({className: d()("xiguaBuddyPub", n)}, r))
        }
    }, 42271: function (e, t, n) {
        n(41539), n(54747);
        var i = n(86902), r = n.n(i), o = n(14310), a = n.n(o), l = n(20116), s = n.n(l), u = n(34074), c = n.n(u),
            d = n(39649), f = n.n(d), m = (n(73126), n(79349)), p = n(44845), v = n(59056), h = n(19623), _ = n(90149),
            g = n.n(_), b = n(77766), y = n.n(b), w = n(20455), x = n.n(w), Z = n(67294), E = n(94184), j = n.n(E),
            S = n(8447);

        function k(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = s()(i).call(i, (function (t) {
                    return c()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        var P = function (e) {
                return e && e.Math == Math && e
            },
            N = P("object" == (void 0 === g() ? "undefined" : (0, h.Z)(g())) && g()) || P("object" == ("undefined" == typeof window ? "undefined" : (0, h.Z)(window)) && window) || P("object" == ("undefined" == typeof self ? "undefined" : (0, h.Z)(self)) && self) || P("object" == (void 0 === n.g ? "undefined" : (0, h.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        N.globalThis = N, N.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var T = (0, Z.forwardRef)((function (e, t) {
            var n, i = e.className, r = e.hideOnInit, o = void 0 !== r && r, a = e.options, l = e.onComplete,
                s = e.afterInited, u = (0, Z.useRef)(null), d = (0, Z.useRef)(null), h = (0, Z.useState)(!1),
                _ = (0, v.Z)(h, 2), g = _[0], b = _[1], w = (0, S.Z)();
            return (0, Z.useLayoutEffect)((function () {
                if (w) return null != u.current && (b(!!o), d.current = w.loadAnimation(function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? k(Object(n), !0).forEach((function (t) {
                            (0, p.Z)(e, t, n[t])
                        })) : f() ? Object.defineProperties(e, f()(n)) : k(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, c()(n, t))
                        }))
                    }
                    return e
                }({container: u.current}, a)), null == s || s(d.current), l && d.current.addEventListener("complete", l)), function () {
                    if (d.current) {
                        var e = d.current;
                        l && e.removeEventListener("complete", l), e.destroy()
                    }
                }
            }), y()(n = [w]).call(n, (0, m.Z)(x()(a)))), (0, Z.useImperativeHandle)(t, (function () {
                return {anim: d.current, setIsHide: b}
            })), Z.createElement("div", {ref: u, className: j()("lottie-animation", i, {isHide: g})})
        }));
        t.Z = T
    }, 81497: function (e, t, n) {
        n.d(t, {
            ZP: function () {
                return h
            }, F_: function () {
                return _
            }
        });
        var i = n(19623), r = n(90149), o = n.n(r), a = n(44494), l = n.n(a), s = n(2991), u = n.n(s), c = n(67294),
            d = n(94184), f = n.n(d), m = n(96251), p = function (e) {
                return e && e.Math == Math && e
            },
            v = p("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || p("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || p("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || p("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function h(e) {
            var t = e.width, n = e.height, i = e.circle, r = e.className, o = e.paddingTop;
            return c.createElement("span", {
                style: {width: t, height: n, paddingTop: o || void 0},
                className: f()("xgSkeleton", {circle: i}, r)
            })
        }

        v.globalThis = v, v.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var _ = function (e) {
            var t, n, i = e.count, r = e.theme, o = void 0 === r ? "" : r, a = e.className,
                s = (0, c.useMemo)((function () {
                    var e;
                    return l()(e = new Array(i)).call(e, "")
                }), [i]),
                d = null !== (t = null === (n = m._o.getMyABInfoV2().LargeRecommendVideoCover) || void 0 === n ? void 0 : n.enable) && void 0 !== t && t;
            return c.createElement("div", {className: f()("SkeletonHorizontalFeed-wrapper", a)}, u()(s).call(s, (function (e, t) {
                return c.createElement("div", {
                    className: f()("SkeletonHorizontalFeed", o),
                    key: "skeletonH_" + t
                }, c.createElement(h, {
                    width: d ? 184 : 168,
                    height: d ? 103 : 94
                }), c.createElement("div", {className: "SkeletonHorizontalFeed-right"}, c.createElement(h, null), c.createElement(h, null), c.createElement(h, {width: 70})))
            })))
        }
    }, 31448: function (e, t, n) {
        var i = n(19623), r = (n(66992), n(41539), n(88674), n(78783), n(33948), n(90149)), o = n.n(r), a = n(67294),
            l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        }, t.Z = function () {
            return (0, a.useMemo)((function () {
                return n.e(8309).then(n.bind(n, 48309)).then((function (e) {
                    return e.default
                }))
            }), [])
        }
    }, 57394: function (e, t, n) {
        n.d(t, {
            G: function () {
                return m
            }
        });
        var i = n(19623), r = n(90149), o = n.n(r), a = n(67294), l = n(75485), s = n(23279), u = n.n(s),
            c = function (e) {
                return e && e.Math == Math && e
            },
            d = c("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || c("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || c("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || c("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        var f = function (e) {
            var t = (0, l.Z)().setFixedButton, n = (0, a.useCallback)((function () {
                if ("undefined" != typeof document) {
                    var t = document.querySelector(".BU-FixedGroup"), n = e.current;
                    if (n && t) {
                        var i = t.getBoundingClientRect(), r = n.getBoundingClientRect();
                        return !(i.left > r.right || i.top > r.bottom || i.right < r.left || i.bottom < r.top)
                    }
                    return !1
                }
            }), [e]);
            (0, a.useLayoutEffect)((function () {
                var e = u()((function () {
                    n() ? t(!1) : t(!0)
                }), 200);
                return e(), window.addEventListener("scroll", e), window.addEventListener("resize", e), function () {
                    window.removeEventListener("scroll", e), window.removeEventListener("resize", e)
                }
            }), [n, t]), (0, a.useEffect)((function () {
                return function () {
                    return t(!0)
                }
            }), [])
        }, m = function (e) {
            var t = e.targetElement_Ref;
            return f(t), null
        };
        t.Z = f
    }, 97052: function (e, t, n) {
        var i = n(19623), r = n(90149), o = n.n(r), a = n(10173), l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        t.Z = function () {
            return "0" === (0, a.Z)().theater
        }
    }, 29255: function (e, t, n) {
        n.d(t, {
            p: function () {
                return h
            }
        });
        var i = n(73126), r = n(19623), o = (n(41539), n(54747), n(74916), n(64765), n(90149)), a = n.n(o),
            l = n(62462), s = n.n(l), u = n(92762), c = n.n(u), d = n(67294), f = n(51615), m = function (e) {
                return e && e.Math == Math && e
            },
            p = m("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || m("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || m("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || m("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var v = function () {
            var e = (0, f.TH)(), t = (0, d.useRef)([]).current, n = (0, d.useCallback)((function (e) {
                t.push(e)
            }), [t]), i = (0, d.useCallback)((function (e) {
                if (e) {
                    var n = s()(t).call(t, e);
                    n > -1 && c()(t).call(t, n, 1)
                } else c()(t).call(t, 0, t.length)
            }), [t]);
            return (0, d.useEffect)((function () {
                var e = function () {
                    t.forEach((function (e) {
                        return null == e ? void 0 : e()
                    })), c()(t).call(t, 0, t.length)
                };
                return window.addEventListener("beforeunload", e), window.addEventListener("pagehide", e), function () {
                    e(), window.removeEventListener("pagehide", e), window.removeEventListener("beforeunload", e)
                }
            }), [e.pathname, e.search, t]), {addPageLeaveTask: n, removePageLeaveTask: i}
        }, h = function (e) {
            return function (t) {
                var n = v(), r = n.addPageLeaveTask, o = n.removePageLeaveTask;
                return d.createElement(e, (0, i.Z)({addPageLeaveTask: r, removePageLeaveTask: o}, t))
            }
        };
        t.Z = v
    }, 10173: function (e, t, n) {
        var i = n(19623), r = (n(74916), n(64765), n(90149)), o = n.n(r), a = n(51615), l = n(54998), s = n.n(l),
            u = function (e) {
                return e && e.Math == Math && e
            },
            c = u("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || u("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || u("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || u("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        }, t.Z = function () {
            return new (s())((0, a.TH)().search).query(!0)
        }
    }, 49378: function (e, t, n) {
        var i = n(59056), r = n(19623), o = (n(68309), n(90149)), a = n.n(o), l = n(94614), s = n(51206), u = n.n(s),
            c = n(67294), d = function (e) {
                return e && e.Math == Math && e
            },
            f = d("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || d("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || d("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || d("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        f.globalThis = f, f.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        t.Z = function () {
            var e = (0, l.Z)().userAgent, t = (0, c.useState)((function () {
                var t = u().getParser(e).getOS().name;
                return {isMac: t === u().OS_MAP.MacOS, isWindows: t === u().OS_MAP.Windows}
            }));
            return (0, i.Z)(t, 1)[0]
        }
    }, 73014: function (e, t, n) {
        n.d(t, {
            N: function () {
                return f
            }
        });
        var i = n(59056), r = n(19623), o = n(90149), a = n.n(o), l = n(68572), s = n(71397), u = n(67294),
            c = function (e) {
                return e && e.Math == Math && e
            },
            d = c("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || c("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || c("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || c("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var f = function (e) {
            var t = new s.Z(e);
            return t.get("theater") ? "1" === t.get("theater") : void 0
        };
        t.Z = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, l.Z)(e ? ["theater"] : void 0), n = (0, i.Z)(t, 2), r = n[0], o = n[1],
                a = (0, u.useCallback)((function (e) {
                    o("theater", e ? "1" : "0", {path: "/"})
                }), [o]), s = r.theater ? "1" === r.theater : void 0;
            return {theaterState: s, setTheaterState: a}
        }
    }, 27513: function (e, t, n) {
        var i = n(73126), r = n(19623), o = n(90149), a = n.n(o), l = n(2991), s = n.n(l), u = n(67294), c = n(94184),
            d = n.n(c), f = n(1028), m = n(96453), p = function (e) {
                return e && e.Math == Math && e
            },
            v = p("object" == (void 0 === a() ? "undefined" : (0, r.Z)(a())) && a()) || p("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || p("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || p("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
            left: {points: ["cr", "cl"]},
            right: {points: ["cl", "cr"]},
            top: {points: ["bc", "tc"]},
            bottom: {points: ["tc", "bc"]},
            topLeft: {points: ["bl", "tl"]},
            topRight: {points: ["br", "tr"]},
            bottomRight: {points: ["tr", "br"]},
            bottomLeft: {points: ["tl", "bl"]}
        };
        t.Z = function (e) {
            var t = e.popupPlacement, n = void 0 === t ? "bottom" : t, r = e.action, o = e.className, a = e.offset,
                l = e.getPopupContainer, c = e.popupClassName;
            return u.createElement(f.Z, {
                action: ["hover"],
                popupClassName: d()("dotMoreAction_popup", c),
                builtinPlacements: h,
                getPopupContainer: l,
                popup: u.createElement("div", {className: "dotMoreAction_ul"}, s()(r).call(r, (function (e, t) {
                    return u.createElement(e.type, (0, i.Z)({key: e.key || t}, e.props, {className: d()("dotMoreAction_li", e.props.className)}))
                }))),
                popupAlign: {offset: a || [0, 2]},
                popupPlacement: n,
                destroyPopupOnHide: !0
            }, u.createElement(m.Tkc, {className: d()("dotMoreAction_trigger", o)}))
        }
    }, 95682: function (e, t, n) {
        var i = n(19623), r = n(90149), o = n.n(r), a = n(12011), l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        t.Z = function () {
            var e;
            return null === (e = a.Z.getMyABInfoV2().pcDetailAB) || void 0 === e ? void 0 : e.newStyle
        }
    }, 7071: function (e, t, n) {
        n.d(t, {
            f: function () {
                return c
            }
        });
        var i = n(19623), r = n(90149), o = n.n(r), a = n(67294), l = function (e) {
                return e && e.Math == Math && e
            },
            s = l("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        var u = a.createContext({
            item_id: "0",
            group_id: "0",
            video: {},
            autoPlay: !0,
            setAutoPlay: function () {
            },
            relateVideos: [],
            series: {id: "", videoList: [], seriesInfo: void 0, nextCursor: !1},
            pSeries: {id: "", videoList: [], seriesInfo: void 0, nextCursor: !1},
            pSeriesVideoList: [],
            setPSeriesVideoList: function () {
            },
            changePSeriesCollected: function () {
            },
            userVideoList: [],
            setUserVideoList: function () {
            },
            changeFollow: function () {
            },
            onBufferIsSufficient: function () {
            },
            shouldLoadOthers: !1,
            type: "",
            logInfo: {isAncestor: !0},
            key: "",
            setSeries: function () {
            },
            setShouldLoadOthers: function () {
            },
            nextVideoOfSpecialList: void 0,
            setNextVideoOfSpecialList: function () {
            },
            isFetchFailed: !1,
            playerInstanceRef: {current: null},
            setPlaylistNum: function () {
            },
            isShowDanmaku: !1,
            setIsShowDanmu: function () {
                return null
            },
            isShowDanmakuAfterInteractive: !1,
            setIsShowDanmakuAfterInteractive: function () {
                return null
            },
            isFollowGlobal: !1,
            setIsFollowGlobal: function () {
            },
            isDiggGlobal: !1,
            setIsDiggGlobal: function () {
            },
            isSuperDiggGlobal: !1,
            setIsSuperDiggGlobal: function () {
            },
            superDiggClickCountRef: {current: 0},
            coCreatorList: void 0,
            updateCoCreatorFollowStatus: function () {
            }
        }), c = function () {
            return (0, a.useContext)(u)
        };
        t.Z = u
    }, 62605: function (e, t, n) {
        n.d(t, {
            bv: function () {
                return yu
            }, ZP: function () {
                return wu
            }, oe: function () {
                return hu
            }
        });
        n(54747);
        var i = n(86902), r = n.n(i), o = n(14310), a = n.n(o), l = n(34074), s = n.n(l), u = n(39649), c = n.n(u),
            d = n(33938), f = n(73126), m = n(59056), p = n(44845), v = n(19623), h = n(63109), _ = n.n(h),
            g = (n(69600), n(74916), n(64765), n(29254), n(9653), n(56977), n(66992), n(41539), n(88674), n(78783), n(33948), n(90149)),
            b = n.n(g), y = n(2991), w = n.n(y), x = n(51942), Z = n.n(x), E = n(78580), j = n.n(E), S = n(93476),
            k = n.n(S), P = n(20116), N = n.n(P), T = n(66419), C = n.n(T), I = n(69301), M = n.n(I), F = n(3649),
            L = n.n(F), R = n(67294), O = n(94184), D = n.n(O), A = n(21273), U = n(8306), X = n(68956), V = n(73014),
            H = n(68572), z = function (e) {
                return e && e.Math == Math && e
            },
            B = z("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || z("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || z("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || z("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        B.globalThis = B, B.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var G = function () {
                var e = "svideoAutoplayNext", t = (0, H.Z)([e]), n = (0, m.Z)(t, 2), i = n[0], r = n[1],
                    o = (0, R.useCallback)((function (t) {
                        r(e, t ? "1" : "0", {path: "/"})
                    }), [r]);
                return {shortVideoAutoplayNextState: !i[e] || "1" === i[e], setShortVideoAutoplayNextState: o}
            }, W = n(85521), Y = n(91899), q = n(97052), K = n(25047), J = n(78262), Q = n(44999), $ = n(42004),
            ee = n(1068), te = n.n(ee), ne = n(68420), ie = n(27344), re = n(5281), oe = n(90306), ae = n(3020),
            le = n(3362), se = n(59340), ue = n.n(se), ce = n(78968), de = n(27361), fe = n.n(de), me = n(28607),
            pe = n(29255);

        function ve(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !te()) return !1;
                if (te().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(te()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, le.Z)(e);
                if (t) {
                    var r = (0, le.Z)(this).constructor;
                    n = te()(i, arguments, r)
                } else n = i.apply(this, arguments);
                return (0, ae.Z)(this, n)
            }
        }

        var he = function (e) {
                return e && e.Math == Math && e
            },
            _e = he("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || he("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || he("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || he("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        _e.globalThis = _e, _e.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ge = function (e) {
                (0, oe.Z)(n, e);
                var t = ve(n);

                function n(e) {
                    var i, r;
                    return (0, ne.Z)(this, n), r = t.call(this, e), (0, p.Z)((0, re.Z)(r), "getWatchProgress", (function () {
                        var e = r.props.context.video.history_duration;
                        if (e) return Number(e) / 1e3;
                        var t = (0, me.BP)({group_id: r.props.context.group_id});
                        return null != t ? t : 0
                    })), (0, p.Z)((0, re.Z)(r), "isUserAuthor", (function () {
                        var e, t;
                        return String(null === (e = r.props.context.video) || void 0 === e || null === (t = e.user_info) || void 0 === t ? void 0 : t.user_id) === String(r.props.globalConfig.identity.id)
                    })), r.state = {
                        group_id: (null === (i = r.props.context) || void 0 === i ? void 0 : i.video.group_id) || "",
                        user_bury: void 0,
                        user_digg: r.props.context.isDiggGlobal || !1,
                        user_super_digg: void 0,
                        video_unlike_count: void 0,
                        video_like_count: void 0,
                        videoInfo: void 0,
                        isNextVideosHide: !1,
                        isPlayerLoadedData: !1,
                        playErrorInfo: void 0,
                        lastCurrentTime: r.getWatchProgress(),
                        startPlay: !1,
                        isShowDanmaku: !1
                    }, r
                }

                return (0, ie.Z)(n, [{
                    key: "render", value: function () {
                        var e, t, n, i, r, o = this, a = this.props.context.logInfo,
                            l = this.props.context.video.videoResource,
                            s = null == l || null === (e = l.normal) || void 0 === e || null === (t = e.video_list) || void 0 === t ? void 0 : t.video_1,
                            u = null == l || null === (n = l.normal) || void 0 === n ? void 0 : n.barrage_mask_url,
                            c = !(null === (i = this.props.context.pSeries) || void 0 === i || !i.seriesInfo);
                        return R.createElement(R.Fragment, null, R.createElement(ce.Z, {
                            groupId: this.props.context.video.group_id,
                            itemId: this.props.context.video.item_id,
                            isUserAuthor: this.isUserAuthor(),
                            log_pb: a.logPb ? ue()(a.logPb) : "{}",
                            player: this.props.player,
                            isBan: 1 === this.props.context.video.ban_danmaku,
                            isBanSendInCurrentVideo: 1 === this.props.context.video.ban_danmaku_send,
                            barrageMask: {
                                enable: 1 === this.props.context.video.danmaku_mask,
                                url: u,
                                offset: null == s ? void 0 : s.barrage_mask_offset
                            },
                            onSwitch: function (e) {
                                o.setState({isShowDanmaku: e})
                            },
                            videoRef: this.props.playerWrapper_Ref,
                            authorId: fe()(this.props.context.video, "user_info.user_id") + "",
                            categoryName: (null === (r = a.logPb) || void 0 === r ? void 0 : r.category_name) || (c ? "related" : "xg_pc_related_channel_new")
                        }))
                    }
                }]), n
            }(R.Component), be = (0, pe.p)(ge), ye = (n(68309), n(77766)), we = n.n(ye), xe = n(98926), Ze = n.n(xe),
            Ee = n(78606), je = n(7071), Se = n(92744), ke = n(7130), Pe = n(76523), Ne = n(17032), Te = n(68898),
            Ce = n(57394), Ie = n(12126), Me = n(28169), Fe = function (e) {
                return e && e.Math == Math && e
            },
            Le = Fe("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Fe("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Fe("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Fe("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Le.globalThis = Le, Le.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Re, Oe = function (e) {
                var t, n, i, r = e.video_logo;
                if (r) {
                    if (r.logo_type === Me.nJ.LogoTypeText && r.logo_text) return {authorName: r.logo_text};
                    var o = null === (t = r.logo_image) || void 0 === t || null === (n = t.url_list) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i.url;
                    return o ? {
                        src: globalThis.getFilterXss().filterUrl(o, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        })
                    } : void 0
                }
            }, De = n(88768), Ae = n(27105), Ue = n(63952), Xe = n(44586), Ve = n(44984), He = n(36384), ze = n.n(He),
            Be = n(39392), Ge = n.n(Be), We = n(73935), Ye = n(72169), qe = function (e) {
                return e && e.Math == Math && e
            },
            Ke = qe("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || qe("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || qe("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || qe("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ke.globalThis = Ke, Ke.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, function (e) {
            e[e.FOLLOW = 1] = "FOLLOW", e[e.DIGG = 2] = "DIGG", e[e.XIGUA_PLAY_VOTE = 5] = "XIGUA_PLAY_VOTE", e[e.DANMAKU = 3] = "DANMAKU", e[e.VOTE = 4] = "VOTE", e[e.COUPLET = 6] = "COUPLET"
        }(Re || (Re = {}));
        var Je = n(54871), Qe = n(19742), $e = function (e) {
                return e && e.Math == Math && e
            },
            et = $e("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || $e("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || $e("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || $e("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
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
        var tt = R.createContext({video: {}, player: void 0, logPb: {}, urlPrefix: ""}), nt = tt, it = function () {
            return (0, R.useContext)(tt)
        }, rt = n(8447);

        function ot(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function at(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ot(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : ot(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var lt = function (e) {
                return e && e.Math == Math && e
            },
            st = lt("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || lt("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || lt("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || lt("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function ut(e) {
            return function (t) {
                var n = (0, rt.Z)();
                if (!n) return null;
                var i = at(at({}, t), {}, {lottie: n});
                return R.createElement(e, i)
            }
        }

        st.globalThis = st, st.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ct = n(64138);

        function dt(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ft(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? dt(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : dt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var mt = function (e) {
                return e && e.Math == Math && e
            },
            pt = mt("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || mt("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || mt("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || mt("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
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
        var vt = "follow-sticker", ht = ut((function (e) {
                var t, n, i, r = e.sticker, o = e.show, a = e.base, l = e.onValidAction, s = e.onCancelValidAction,
                    u = e.resourceRef, c = e.lottie, d = e.getStickerCommonParams, f = r.effect, p = a.baseUnit,
                    v = a.mainStyle, h = it(), _ = h.video, g = h.urlPrefix, b = _.user_info, y = r.follow_info,
                    w = String(y.user_id), x = (0, je.f)(), Z = x.isFollowGlobal, E = x.setIsFollowGlobal, j = (0, Je.jY)(),
                    S = String(j.id) === w, k = (0, Q.$x)(w), P = (0, R.useState)((null == y ? void 0 : y.is_follow) || !1),
                    N = (0, m.Z)(P, 2), T = N[0], C = N[1], I = (0, Je._n)(), M = (0, R.useState)(o), F = (0, m.Z)(M, 2),
                    L = F[0], O = F[1], A = (0, R.useState)(!0), U = (0, m.Z)(A, 2), V = U[0], H = U[1],
                    z = (0, R.useRef)(null), B = (0, R.useRef)(), G = (0, R.useState)(!1), W = (0, m.Z)(G, 2), Y = W[0],
                    q = W[1], K = (0, R.useRef)(null), J = (0, R.useRef)();
                (0, R.useLayoutEffect)((function () {
                    o && (T ? l() : s())
                }), [o, T]), (0, R.useLayoutEffect)((function () {
                    o && (O(!0), H(!0), X.Z.sticker.rtFollowGuideShow(ft(ft({}, d()), {}, {sticker_guide_type: r.extra.follow_source})))
                }), [o]);
                var $ = (0, Qe.O)({
                    value: T,
                    uid: w,
                    source_id: r.sticker_id,
                    source: De.w6.Sticker,
                    onChange: function (e, t) {
                        if (!t) {
                            var n, i = ft(ft({}, d()), {}, {
                                to_user_id: w,
                                category_tag: _.tag,
                                digg_action: "one_click",
                                digg_button_status: e ? "nodigg" : "like",
                                sticker_guide_type: null === (n = r.extra) || void 0 === n ? void 0 : n.follow_source
                            });
                            X.Z.sticker[e ? "rtFollow" : "rtUnfollow"](i)
                        }
                    }
                }), ee = $.changeFollow;
                (0, ct.i)((function () {
                    String(null == b ? void 0 : b.user_id) === w && C(Z)
                }), [Z]);
                var te = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = u.current[t];
                    return c.loadAnimation({container: e, animationData: i, loop: n})
                };
                (0, R.useLayoutEffect)((function () {
                    var e;
                    L && (null === (e = B.current) || void 0 === e || e.destroy(), z.current && (B.current = te(z.current, "follow_loop_lottie", !0)));
                    return function () {
                        var e, t;
                        null === (e = B.current) || void 0 === e || e.destroy(), null === (t = J.current) || void 0 === t || t.destroy()
                    }
                }), [L]);
                var ne = function (e) {
                    return p * e
                }, ie = (0, R.useMemo)((function () {
                    return {
                        width: ne(T ? 144 : 130),
                        "--contentHeight": "".concat(ne(48), "px"),
                        "--contentUnfollowWidth": "".concat(ne(130), "px"),
                        "--contentFollowingWidth": "".concat(ne(144), "px")
                    }
                }), [p, T]);
                return L ? R.createElement("div", {style: v}, R.createElement("div", {
                    className: D()(vt, V && "init", Y && "change", !T && "unfollow", !o && "hide"),
                    onAnimationEnd: function (e) {
                        e.animationName === "".concat(vt, "_content-width") || e.animationName === "".concat(vt, "__fade-in") ? H(!1) : e.animationName === "".concat(vt, "__avatar-shake") ? q(!1) : e.animationName === "".concat(vt, "__fade-out") && (O(!1), H(!0), q(!1))
                    },
                    onClick: function () {
                        var e;
                        if (!I) return Ue.ZP.show({source: "follow"});
                        S ? Xe.Z.error("涓嶅彲浠ュ叧娉ㄨ嚜宸卞摝") : (null === (e = J.current) || void 0 === e || e.destroy(), K.current && (J.current = te(K.current, "follow_click_lottie")), l(), T ? X.Z.sticker.clickUnfollowToast({
                            sticker_id: r.sticker_id,
                            effect_id: r.effect.EffectId
                        }) : (C(!0), q(!0), String(null == b ? void 0 : b.user_id) === w && (b.follow = !0, E(!0)), ee()))
                    }
                }, R.createElement("div", {
                    className: D()("".concat(vt, "__content")),
                    style: ie
                }, R.createElement("img", {
                    className: D()("".concat(vt, "__avatar")),
                    src: globalThis.getFilterXss().filterUrl(y.avatar_url, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }),
                    alt: "",
                    onClick: function (e) {
                        e.stopPropagation(), window.open(k)
                    }
                }), R.createElement("div", {
                    className: "".concat(vt, "__content-lottie"),
                    ref: z
                }), R.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(we()(t = "".concat(g)).call(t, f.Extra.follow_common.unfollow_image), null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), className: D()("".concat(vt, "__text")), alt: ""
                }), R.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(we()(n = "".concat(g)).call(n, f.Extra.follow_common.plus_icon_image), null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), className: D()("".concat(vt, "__add")), alt: ""
                }), R.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(we()(i = "".concat(g)).call(i, f.Extra.follow_common.following_image), null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), className: D()("".concat(vt, "__text"), "following"), alt: ""
                })), R.createElement("div", {className: "".concat(vt, "__lottie"), ref: K}))) : null
            })), _t = (n(39714), n(11712)), gt = n(99713), bt = n(94473), yt = n.n(bt), wt = function (e) {
                return e && e.Math == Math && e
            },
            xt = wt("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || wt("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || wt("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || wt("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        xt.globalThis = xt, xt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Zt = function (e) {
            switch (e) {
                case 0:
                    Xe.Z.success("宸插己鐑堟帹鑽�");
                    break;
                case 1:
                    Xe.Z.success("寮虹儓鎺ㄨ崘鍙涓€娆★紝涓嶅彲绱姞鍝�");
                    break;
                case 2:
                    Xe.Z.success("浣滆€呭彧浼氭敹鍒颁竴娆″己鐑堟帹鑽愬摝");
                    break;
                case 3:
                    Xe.Z.success("濂藉惂锛屼綘鎱㈡參鐜╁惂")
            }
        };

        function Et(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function jt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Et(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Et(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var St = function (e) {
                return e && e.Math == Math && e
            },
            kt = St("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || St("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || St("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || St("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        kt.globalThis = kt, kt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Pt = "digg-sticker", Nt = ut((function (e) {
            var t, n = e.sticker, i = e.show, r = e.base, o = e.onValidAction, a = e.onCancelValidAction,
                l = e.resourceRef, s = e.lottie, u = e.getStickerCommonParams, c = r.baseUnit, d = r.mainStyle,
                f = it(), p = f.urlPrefix, v = f.video, h = n.effect, _ = v.group_source, g = (0, R.useState)(i),
                b = (0, m.Z)(g, 2), y = b[0], w = b[1], x = (0, je.f)(), Z = x.isDiggGlobal, E = x.setIsDiggGlobal,
                j = x.item_id, S = x.isSuperDiggGlobal, k = x.setIsSuperDiggGlobal, P = x.superDiggClickCountRef,
                N = (0, Je._n)(), T = h.Extra, C = (0, R.useRef)(), I = (0, R.useRef)(null), M = (0, R.useRef)(),
                F = (0, R.useRef)(null), L = (0, R.useRef)(null), O = (0, R.useRef)(null), A = (0, R.useRef)(null),
                U = (0, R.useState)(!0), V = (0, m.Z)(U, 2), H = V[0], z = V[1], B = (0, R.useState)(!1),
                G = (0, m.Z)(B, 2), W = G[0], Y = G[1], q = (0, R.useRef)(0), K = (0, Se.zh)(Number(_)),
                J = function (e) {
                    return c * e
                };
            (0, R.useLayoutEffect)((function () {
                var e;
                i && (Z ? ("appearance_lotties" === (null === (e = C.current) || void 0 === e ? void 0 : e.name) && C.current.destroy(), o()) : a())
            }), [Z, i]), (0, R.useLayoutEffect)((function () {
                i && (w(!0), X.Z.sticker.rtDiggGuideShow(jt(jt({}, u()), {}, {
                    digg_button_status: S ? "recommend" : Z ? "like" : "nodigg",
                    sticker_guide_type: n.extra.source
                })))
            }), [i]), (0, R.useLayoutEffect)((function () {
                y && (Z || S || re("appearance_lotties"))
            }), [y]), (0, R.useEffect)((function () {
                return function () {
                    var e;
                    null === (e = C.current) || void 0 === e || e.destroy()
                }
            }), []);
            var Q = (0, R.useMemo)((function () {
                var e = function (e, t) {
                    if (!e) return 0;
                    var n = document.createElement("div");
                    n.innerHTML = globalThis.getFilterXss()._filterXSS(window.xss._filterXSS(e), null, {
                        logType: "js.innerHTML",
                        reportOnly: "all"
                    }), n.style.position = "fixed", n.style.fontSize = "".concat(t, "px"), document.body.appendChild(n);
                    var i = n.offsetWidth;
                    return document.body.removeChild(n), i
                };
                return {
                    unDiggWidth: e(T.undigg_state.text, 17),
                    diggedWidth: e(T.digged_state.text, 17),
                    superDiggedWidth: e(T.super_digged_state.text, 17)
                }
            }), []), $ = (0, R.useMemo)((function () {
                var e, t, n,
                    i = 84 + (0 === T.digg_common.text_style ? Q.superDiggedWidth : Number(T.super_digged_state.text_image_width)),
                    r = 84 + (0 === T.digg_common.text_style ? Q.diggedWidth : Number(T.digged_state.text_image_width)),
                    o = 84 + (0 === T.digg_common.text_style ? Q.unDiggWidth : Number(T.undigg_state.text_image_width)),
                    a = S ? i : Z ? r : o, l = q.current || a;
                return q.current = a, {
                    background: we()(e = "url(".concat(p)).call(e, T.digg_common.background_image, ")"),
                    height: J(56),
                    width: J(a),
                    "--width": "".concat(J(a), "px"),
                    "--height": "".concat(J(56), "px"),
                    "--prevWidth": "".concat(J(l), "px"),
                    right: J(100),
                    bottom: J(100),
                    paddingLeft: J(20),
                    borderColor: T.digg_common.border_color,
                    border: we()(t = we()(n = "".concat(J(T.digg_common.border_width), "px solid ")).call(n, T.digg_common.border_color)).call(t, Math.round(255 * T.digg_common.border_opacity).toString(16))
                }
            }), [c, Z, S]);
            (0, R.useLayoutEffect)((function () {
                H || Y(!0)
            }), [Z, S]);
            var ee = (0, R.useMemo)((function () {
                if (0 === T.digg_common.text_style) {
                    return {fontSize: Math.max(J(17), 12), transform: "scale(".concat(Math.min(1, J(17) / 12), ")")}
                }
                var e = Number(S ? T.super_digged_state.text_image_width : Z ? T.digged_state.text_image_width : T.undigg_state.text_image_width);
                return {width: J(e)}
            }), [c, S, Z]), te = (0, R.useMemo)((function () {
                var e;
                return {
                    backgroundImage: we()(e = "url(".concat(p)).call(e, S ? T.super_digged_state.button_icon : Z ? T.digged_state.button_icon : T.undigg_state.button_icon, ")"),
                    height: J(240),
                    width: J(240),
                    right: J(8),
                    bottom: J(8)
                }
            }), [c, Z, S]), ne = (0, R.useMemo)((function () {
                return {height: J(240), width: J(240), right: J(8), bottom: J(8)}
            }), [c]), ie = (0, R.useMemo)((function () {
                return {height: J(240), width: J(240), right: J(8), bottom: J(78)}
            }), [c]), re = function (e) {
                var t, n = l.current[e];
                null === (t = C.current) || void 0 === t || t.destroy(), C.current = s.loadAnimation({
                    container: I.current,
                    animationData: n,
                    autoplay: !0,
                    name: e
                }), C.current.addEventListener("complete", (function () {
                    var t;
                    "appearance_lotties" !== e && o(), null === (t = C.current) || void 0 === t || t.destroy(), C.current = void 0
                }))
            };
            return y ? R.createElement("div", {style: d}, R.createElement("div", {
                className: D()(Pt, !i && "hide", !(Z || S) && "undigg", H && "init"),
                onAnimationEnd: function (e) {
                    e.animationName !== "".concat(Pt, "__wave") && e.animationName !== "".concat(Pt, "__fade-in") || z(!1), i || (z(!0), w(!1))
                },
                ref: A
            }, R.createElement(gt.Z, {
                className: D()("".concat(Pt, "__content"), W && "status-change"),
                onClick: function () {
                    return Z || X.Z.sticker.rtLikeClick(jt(jt({}, u()), {}, {
                        digg_action: "one_click",
                        digg_button_status: S ? "recommend" : Z ? "like" : "nodigg",
                        sticker_guide_type: n.extra.source
                    })), N ? Z ? (Xe.Z.success("浣犲凡缁忕偣璧炶繃杩欎釜瑙嗛浜�"), void X.Z.sticker.clickUnlikeToast({
                        sticker_id: n.sticker_id,
                        effect_id: h.EffectId
                    })) : (E(!Z), o(), X.Z.sticker.rtLike(jt(jt({}, u()), {}, {
                        digg_action: "one_click",
                        digg_button_status: S ? "recommend" : Z ? "like" : "nodigg",
                        sticker_guide_type: n.extra.source
                    })), _t.a1({
                        item_id: j,
                        action: Z ? "undigg" : "digg",
                        source_id: n.sticker_id,
                        source_type: "sticker"
                    }), void re("normal_to_digg_lotties")) : Ue.ZP.show({source: "like"})
                },
                style: $,
                ref: L,
                onLongPress: function () {
                    if (!K) {
                        if (S || X.Z.sticker.rtSuperDiggClick(jt(jt({}, u()), {}, {
                                digg_action: "long_click",
                                digg_button_status: S ? "recommend" : Z ? "like" : "nodigg",
                                sticker_guide_type: n.extra.source
                            })), !N) return Ue.ZP.show({source: "super_digg"});
                        var e, t, i;
                        if (re(Z ? "digg_to_super_lotties" : "normal_to_super_lotties"), e = "super_digg_lotties", i = l.current[e], null === (t = M.current) || void 0 === t || t.destroy(), M.current = s.loadAnimation({
                                container: F.current,
                                animationData: i,
                                autoplay: !0
                            }), M.current.addEventListener("complete", (function () {
                                var e;
                                null === (e = M.current) || void 0 === e || e.destroy(), M.current = void 0
                            })), S) return Zt(P.current), P.current++, void X.Z.sticker.rtSuperDiggRepeatClick(jt(jt({}, u()), {}, {
                            digg_action: "long_click",
                            digg_button_status: "recommend",
                            sticker_guide_type: n.extra.source,
                            repeat_count: P.current
                        }));
                        k(!0), _t.a1({
                            item_id: j,
                            action: "super_digg",
                            source_id: n.sticker_id,
                            source_type: "sticker"
                        }), o(), X.Z.sticker.rtSuperDigg(jt(jt({}, u()), {}, {
                            digg_action: "long_click",
                            digg_button_status: Z ? "like" : "nodigg",
                            sticker_guide_type: n.extra.source
                        })), Z || (X.Z.sticker.rtLike(jt(jt({}, u()), {}, {
                            digg_action: "one_click",
                            digg_button_status: "nodigg",
                            sticker_guide_type: n.extra.source
                        })), E(!0))
                    }
                },
                onAnimationEnd: function (e) {
                    e.animationName === "".concat(Pt, "__content-width-change") && Y(!1)
                }
            }, h && (0 === h.Extra.digg_common.text_style ? R.createElement("span", {style: ee}, S ? h.Extra.super_digged_state.text : Z ? h.Extra.digged_state.text : h.Extra.undigg_state.text) : R.createElement("img", {
                style: ee,
                src: globalThis.getFilterXss().filterUrl(we()(t = "".concat(p)).call(t, S ? h.Extra.super_digged_state.text_image : Z ? h.Extra.digged_state.text_image : h.Extra.undigg_state.text_image), null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                }),
                alt: ""
            }))), R.createElement("div", {
                className: D()("".concat(Pt, "__btn")),
                style: te,
                ref: O
            }), R.createElement("div", {
                className: D()("".concat(Pt, "__lottie")),
                style: ne,
                ref: I
            }), R.createElement("div", {className: D()("".concat(Pt, "__lottie")), style: ie, ref: F}))) : null
        })), Tt = n(85539);

        function Ct(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function It(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ct(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Ct(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Mt, Ft = function (e) {
                return e && e.Math == Math && e
            },
            Lt = Ft("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Ft("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Ft("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Ft("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Lt.globalThis = Lt, Lt.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, function (e) {
            e[e.NO_PART = 0] = "NO_PART", e[e.IN_PLAY = 1] = "IN_PLAY", e[e.DIE_OUT = 2] = "DIE_OUT", e[e.PENDING = 3] = "PENDING", e[e.END = 4] = "END"
        }(Mt || (Mt = {}));
        var Rt = "xigua-play-vote-sticker", Ot = function (e) {
                var t = e.sticker, n = e.show, i = e.base, r = e.onValidAction, o = e.getStickerCommonParams, a = t.effect,
                    l = i.baseUnit, s = i.mainStyle, u = it(), c = u.urlPrefix, d = u.video, f = d.group_id,
                    p = d.user_info, v = (0, R.useState)(n), h = (0, m.Z)(v, 2), _ = h[0], g = h[1],
                    b = (0, R.useState)(!1), y = (0, m.Z)(b, 2), w = y[0], x = y[1], Z = (0, R.useState)("1.66s"),
                    E = (0, m.Z)(Z, 2), j = E[0], S = E[1], k = a.Extra, P = p.user_id, N = (0, R.useState)(!1),
                    T = (0, m.Z)(N, 2), C = T[0], I = T[1], M = (0, Je._n)(), F = (0, R.useState)({
                        author_participants_state: Mt.NO_PART,
                        scheme: "",
                        ticket_num: 0,
                        toast: "",
                        vote_able: !1
                    }), L = (0, m.Z)(F, 2), O = L[0], A = L[1];
                (0, R.useLayoutEffect)((function () {
                    n && r()
                }), [n]), (0, R.useLayoutEffect)((function () {
                    n && C && O.author_participants_state !== Mt.NO_PART && g(!0)
                }), [n, C, O]), (0, R.useLayoutEffect)((function () {
                    _ && X.Z.sticker.xgPlayStickerShow(It(It({}, o()), {}, {sticker_status: Mt.END}))
                }), [_]);
                var U = function (e) {
                    return l * e
                }, V = (0, R.useMemo)((function () {
                    var e;
                    return {
                        width: U(272),
                        height: U(112),
                        top: U(10),
                        left: U(30),
                        backgroundImage: we()(e = "url(".concat(c, "/")).call(e, k.xigplay_common.background_image, ")")
                    }
                }), [l]), H = (0, R.useMemo)((function () {
                    return {
                        width: U(40),
                        height: U(40),
                        top: U(56),
                        left: U(56),
                        backgroundImage: "url(".concat(d.user_info.avatar_url, ")")
                    }
                }), [l]), z = (0, R.useMemo)((function () {
                    var e;
                    return {
                        width: U(48),
                        height: U(48),
                        top: U(52),
                        left: U(52),
                        backgroundImage: we()(e = "url(".concat(c, "/")).call(e, k.xigplay_common.avatar_decorator_image, ")")
                    }
                }), [l]), B = (0, R.useMemo)((function () {
                    return {
                        height: U(21),
                        top: U(56),
                        left: U(108),
                        fontSize: Math.max(U(15), 12),
                        transform: "scale(".concat(Math.min(1, U(15) / 12), ")"),
                        transformOrigin: "left center",
                        lineHeight: "".concat(U(21), "px"),
                        color: k.xigplay_common.title_text_color,
                        opacity: k.xigplay_common.title_text_opacity
                    }
                }), [l]), G = (0, R.useMemo)((function () {
                    return {
                        height: U(16),
                        top: U(79),
                        left: U(108),
                        fontSize: Math.max(U(12), 12),
                        transform: "scale(".concat(Math.min(1, U(12) / 12), ")"),
                        transformOrigin: "left center",
                        lineHeight: "".concat(U(16), "px"),
                        color: k.xigplay_common.sub_title_text_color,
                        opacity: k.xigplay_common.sub_title_text_opacity
                    }
                }), [l]), W = (0, R.useMemo)((function () {
                    var e, t = k.xigplay_common.normal_button_image;
                    return O.vote_able ? 0 === O.ticket_num && (t = k.xigplay_common.zero_vote_button_image) : O.author_participants_state === Mt.DIE_OUT ? t = k.xigplay_common.eliminated_button_image : O.author_participants_state === Mt.PENDING ? t = k.xigplay_common.xigplay_pending_button_image : O.author_participants_state === Mt.END && (t = k.xigplay_common.xigplay_over_button_image), {
                        width: U(70),
                        height: U(40),
                        top: U(56),
                        left: U(210),
                        backgroundImage: we()(e = "url(".concat(c, "/")).call(e, t, ")")
                    }
                }), [l, O]), Y = (0, R.useMemo)((function () {
                    return {
                        height: U(28),
                        top: U(0),
                        right: U(31),
                        fontSize: U(28),
                        lineHeight: "".concat(U(28), "px"),
                        "--toastDelay": j
                    }
                }), [l, j]);
                (0, R.useLayoutEffect)((function () {
                    A({
                        author_participants_state: 4,
                        scheme: "",
                        ticket_num: 0,
                        toast: "鏉ユ櫄浜嗭紝娲诲姩宸茬粡缁撴潫浜�",
                        vote_able: !1
                    }), I(!0)
                }), []);
                return _ ? R.createElement("div", {style: s}, R.createElement("link", {
                    rel: "preload",
                    as: "font",
                    href: globalThis.getFilterXss().filterUrl(Tt, null, {logType: "js.href/src", reportOnly: "all"})
                }), R.createElement("div", {
                    className: D()(Rt, !n && "exit"), onAnimationEnd: function () {
                        n || g(!1)
                    }
                }, R.createElement("div", {style: V}), R.createElement("div", {
                    className: "".concat(Rt, "_avatar"),
                    style: H
                }), R.createElement("div", {
                    className: "".concat(Rt, "_avatarDecorator"),
                    style: z
                }), R.createElement("div", {
                    className: "".concat(Rt, "_title"),
                    style: B
                }, "涓烘垜鎶曠エ鍚э紒"), R.createElement("div", {
                    className: "".concat(Rt, "_subtitle"),
                    style: G
                }, "鍙姇绁ㄦ暟锛�", M ? O.ticket_num : "-"), R.createElement("div", {
                    className: D()("".concat(Rt, "_btn"), ""),
                    style: W,
                    onClick: function () {
                        M ? (X.Z.sticker.xgPlayStickerClick(It(It({}, o()), {}, {sticker_status: Mt.END})), Xe.Z.error(O.toast)) : Ue.ZP.show({
                            source: "xigua_play_vote",
                            afterLogin: function () {
                                X.Z.sticker.xgPlayLoginSuccess({group_id: f || "", author_id: P})
                            }
                        })
                    }
                }), w && R.createElement("div", {
                    className: "".concat(Rt, "_toast"),
                    style: Y,
                    onAnimationEnd: function (e) {
                        "exitOpacity" === e.animationName && (x(!1), S("1.66s"))
                    }
                }, R.createElement("span", {title: "宸叉姇".concat(0, "绁�")}, "宸叉姇", 0, "绁�")))) : null
            }, Dt = n(79349), At = function (e) {
                return e && e.Math == Math && e
            },
            Ut = At("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || At("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || At("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || At("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ut.globalThis = Ut, Ut.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Xt, Vt = R.forwardRef((function (e, t) {
                var n = e.convert, i = e.baseUnit, r = e.rippleImage, o = (0, R.useState)([]), a = (0, m.Z)(o, 2), l = a[0],
                    s = a[1], u = (0, R.useMemo)((function () {
                        return {
                            height: n(240),
                            width: n(240),
                            top: n(42),
                            left: n(62),
                            transform: "scale(0)",
                            opacity: .5,
                            backgroundImage: "url(".concat(r, ")")
                        }
                    }), [i]);
                return (0, R.useImperativeHandle)(t, (function () {
                    return {
                        addRipple: function () {
                            var e, t = {id: Date.now()}, n = we()(e = []).call(e, (0, Dt.Z)(l), [t]);
                            s(n)
                        }
                    }
                }), [l]), R.createElement(R.Fragment, null, l.length > 0 ? w()(l).call(l, (function (e) {
                    return R.createElement("div", {
                        className: "danmaku-sticker__circle-ripple",
                        style: u,
                        key: e.id,
                        onAnimationEnd: function () {
                            var t;
                            t = e.id, s(N()(l).call(l, (function (e) {
                                return e.id !== t
                            })))
                        }
                    })
                })) : null)
            })), Ht = n(64540), zt = function (e) {
                return e && e.Math == Math && e
            },
            Bt = zt("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || zt("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || zt("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || zt("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
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
        }, function (e) {
            e[e.YELLOW = 0] = "YELLOW", e[e.BLUE = 1] = "BLUE", e[e.RED = 2] = "RED"
        }(Xt || (Xt = {}));
        var Gt = R.forwardRef((function (e, t) {
                var n, i, r, o = e.baseUnit, a = e.classPrefix, l = e.danmaku_common, s = (0, R.useState)([]),
                    u = (0, m.Z)(s, 2), c = u[0], d = u[1], f = (0, R.useState)(0), p = (0, m.Z)(f, 2), v = p[0], h = p[1],
                    _ = (0, R.useState)(0), g = (0, m.Z)(_, 2), b = g[0], y = g[1], x = it().urlPrefix;
                (0, R.useImperativeHandle)(t, (function () {
                    return {
                        addEffectFlight: function () {
                            var e, t = {id: Date.now(), type: b, pathNum: v}, n = we()(e = []).call(e, (0, Dt.Z)(c), [t]);
                            d(n), h((function (e) {
                                return (e + 1) % 3
                            })), y((function () {
                                return Math.floor(3 * Math.random())
                            }))
                        }
                    }
                }), [c]);
                var Z = function (e) {
                        return o * e
                    }, E = (0, R.useMemo)((function () {
                        return {height: Z(192), width: Z(258), top: Z(-115), left: Z(182)}
                    }), [o]),
                    j = ["M 0 270 C 0 180 -178.2 -6.3 265.5 67.5", "M 0 270 C 57.6 212.4 -113.4 69.3 198 90.9", "M 0 270 C 126 270.9 -26.1 135.9 171 81"],
                    S = {
                        0: {
                            viewBox: "0 0 248 184",
                            flightImg: we()(n = "".concat(x)).call(n, l.icon_1),
                            title: "yellowFlight"
                        },
                        1: {
                            viewBox: "0 0 248 184",
                            flightImg: we()(i = "".concat(x)).call(i, l.icon_2),
                            title: "blueFlight"
                        },
                        2: {viewBox: "0 0 248 184", flightImg: we()(r = "".concat(x)).call(r, l.icon_3), title: "redFlight"}
                    };
                return R.createElement(R.Fragment, null, w()(c).call(c, (function (e) {
                    var t = S[e.type];
                    return R.createElement("div", {
                        className: "".concat(a, "__flight-effect"),
                        style: E,
                        key: e.id,
                        onAnimationEnd: function () {
                            var t;
                            t = e.id, d(N()(c).call(c, (function (e) {
                                return e.id !== t
                            })))
                        }
                    }, R.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "".concat(a, "__flight-effect-container"),
                        viewBox: t.viewBox
                    }, R.createElement("g", null, R.createElement("image", {
                        x: "-20",
                        y: "-20",
                        xlinkHref: t.flightImg,
                        width: "40",
                        height: "40"
                    }, R.createElement("animateMotion", {
                        dur: "1000ms",
                        calcMode: "spline",
                        keySplines: "0.400, 0.680, 0.930, 0.340",
                        path: j[e.pathNum],
                        keyTimes: "0;1",
                        fill: "freeze",
                        keyPoints: "0;1",
                        rotate: "auto"
                    })))))
                })))
            })), Wt = Gt, Yt = function (e) {
                return e && e.Math == Math && e
            },
            qt = Yt("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Yt("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Yt("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Yt("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
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
        var Kt, Jt = function (e) {
            var t = e.convert, n = e.baseUnit, i = e.classPrefix, r = e.isCountNumberEffect, o = e.countNumberDisappear,
                a = e.countAfterTouchedDisappear, l = e.countNumberDisplay, s = e.handlerAfterAnimationEnd,
                u = e.clickCount, c = (0, R.useMemo)((function () {
                    var e;
                    return {
                        top: t(77),
                        width: t(100),
                        left: t(182) - t(100) / 2,
                        height: t(49),
                        fontSize: Math.max(t(40), 12),
                        transform: "scale(".concat(Math.min(1, t(40) / 12), ")"),
                        transformOrigin: "left center",
                        lineHeight: "".concat(t(49), "px"),
                        webkitTextStroke: "".concat(t(2), "px #000000"),
                        textShadow: we()(e = "".concat(t(1), "px ")).call(e, t(3), "px 0px #010305"),
                        letterSpacing: "".concat(t(.32857))
                    }
                }), [n]), d = (0, R.useMemo)((function () {
                    var e;
                    return {
                        top: t(77),
                        width: t(100),
                        left: t(182) - t(100) / 2,
                        height: t(49),
                        fontSize: Math.max(t(40), 12),
                        transform: "scale(".concat(Math.min(1, t(40) / 12), ")"),
                        transformOrigin: "left center",
                        lineHeight: "".concat(t(49), "px"),
                        webkitTextStroke: "".concat(t(2), "px #ffffff"),
                        textShadow: we()(e = "".concat(t(1), "px ")).call(e, t(4), "px 0px #ffffff"),
                        letterSpacing: "".concat(t(.32857))
                    }
                }), [n]), f = (0, R.useMemo)((function () {
                    return {top: t(3)}
                }), [n]);
            return R.createElement(R.Fragment, null, R.createElement("div", {
                className: D()("".concat(i, "__count-number"), r && "active", o && "disappearAfterAlphaplayer", a && "disappearAfterTouched", l && "display"),
                onAnimationEnd: s,
                style: c
            }, R.createElement("div", {style: f}, R.createElement("span", null, "脳")), R.createElement("div", null, R.createElement("span", null, u))), R.createElement("div", {
                className: D()("".concat(i, "__count-effect-number"), r && "active", o && "disappearAfterAlphaplayer", a && "disappearAfterTouched"),
                style: d
            }, R.createElement("div", {style: f}, "脳"), R.createElement("div", null, R.createElement("span", null, u))))
        };

        function Qt() {
            return Qt = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, Qt.apply(this, arguments)
        }

        var $t = function (e) {
                return R.createElement("svg", Qt({
                    width: 44,
                    height: 44,
                    viewBox: "0 0 44 44",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Kt || (Kt = R.createElement("path", {d: "M22.25 20.936l3.664-3.664a.93.93 0 111.314 1.314l-3.664 3.664 3.664 3.664a.93.93 0 11-1.314 1.314l-3.664-3.664-3.664 3.664a.93.93 0 01-1.314-1.314l3.664-3.664-3.664-3.664a.93.93 0 111.314-1.314l3.664 3.664z"})))
            }, en = n(29828), tn = n.n(en), nn = function (e) {
                return e && e.Math == Math && e
            },
            rn = nn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || nn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || nn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || nn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        rn.globalThis = rn, rn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var on = function (e) {
            for (var t = tn()(e).call(e, "#") ? 1 : 0, n = [0, 0, 0], i = 0; i < 3; i++) for (var r = 0; r < 2; r++) {
                var o = 2 * i + r + t, a = e.charCodeAt(o);
                48 <= a && a < 58 ? a -= 48 : a = (223 & a) - 65 + 10, n[i] += a * Math.pow(16, 1 ^ r)
            }
            return n
        };

        function an(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ln(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? an(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : an(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var sn = function (e) {
                return e && e.Math == Math && e
            },
            un = sn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || sn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || sn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || sn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
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
        var cn = function (e) {
                var t = e.convert, n = e.baseUnit, i = e.classPrefix, r = e.danmakuDefaultTitle, o = e.danmakuDefaultText,
                    a = e.urlPrefix, l = e.danmaku_common, s = e.onManualClose, u = e.getStickerCommonParams,
                    c = (0, R.useMemo)((function () {
                        var e, n, i, r = l.border_width;
                        return {
                            width: t(210),
                            height: t(104),
                            right: t(84),
                            bottom: t(84),
                            backgroundImage: we()(e = "url(".concat(a)).call(e, l.background_image, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            border: we()(n = we()(i = "".concat(t(r), "px solid rgba(")).call(i, on(l.border_color), ", ")).call(n, l.border_opacity, ")"),
                            borderRadius: t(12)
                        }
                    }), [n]), d = (0, R.useMemo)((function () {
                        var e;
                        return {
                            width: t(186),
                            height: t(40),
                            bottom: t(16),
                            right: t(12),
                            backgroundImage: we()(e = "url(".concat(a)).call(e, l.danmaku_container_image, ")")
                        }
                    }), [n]), f = (0, R.useMemo)((function () {
                        var e;
                        return {
                            height: t(24),
                            top: t(8),
                            left: t(16),
                            fontSize: Math.max(t(17), 12),
                            lineHeight: "".concat(t(24), "px"),
                            textShadow: we()(e = "0px ".concat(t(1), "px ")).call(e, t(3), "px rgba(64, 64, 64, 0.17)"),
                            color: l.danmaku_text_color,
                            opacity: l.danmaku_text_opacity,
                            "--opacity": "".concat(l.danmaku_text_opacity),
                            fontWeight: 500
                        }
                    }), [n]), m = (0, R.useMemo)((function () {
                        var e;
                        return {
                            height: t(18),
                            top: t(12),
                            left: t(16),
                            fontSize: Math.max(t(15), 12),
                            lineHeight: "".concat(t(18), "px"),
                            textShadow: we()(e = "0px ".concat(t(1), "px ")).call(e, t(3), "px rgba(64, 64, 64, 0.17)"),
                            color: l.title_text_color,
                            "--opacity": "".concat(l.title_text_opacity),
                            opacity: l.title_text_opacity
                        }
                    }), [n]), p = (0, R.useMemo)((function () {
                        return {width: t(44), height: t(44), top: t(-6), right: t(-6)}
                    }), [n]);
                return R.createElement("div", {
                    className: "".concat(i, "__inner-container"),
                    style: c
                }, R.createElement("div", {
                    className: "".concat(i, "__title"),
                    style: m
                }, R.createElement("span", null, r)), R.createElement($t, {
                    className: "".concat(i, "__btn"),
                    style: p,
                    onClick: function () {
                        s(), X.Z.sticker.xgInteractStickerClose(ln(ln({}, u()), {}, {sticker_type: Re.DANMAKU}))
                    },
                    fill: l.close_icon_color,
                    fillOpacity: l.close_icon_opacity
                }), R.createElement("div", {
                    className: "".concat(i, "__content-text-wrapper"),
                    style: d
                }, R.createElement("div", {
                    className: "".concat(i, "__content-text"),
                    style: f
                }, R.createElement("span", null, o))))
            }, dn = function (e) {
                return e && e.Math == Math && e
            },
            fn = dn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || dn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || dn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || dn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        fn.globalThis = fn, fn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var mn = function (e) {
                var t = e.convert, n = e.baseUnit, i = e.classPrefix, r = e.resourceRef, o = e.stickerShow,
                    a = e.hotspotHide, l = e.longPressStart, s = e.longPressEnd, u = (0, R.useRef)(null),
                    c = (0, R.useRef)(), d = (0, rt.Z)();
                (0, R.useEffect)((function () {
                    if (d && o && u) return p("danmaku_loop_lotties"), function () {
                        var e;
                        null === (e = c.current) || void 0 === e || e.destroy()
                    }
                }), [d, o, u]);
                var f = (0, R.useMemo)((function () {
                    return {width: t(240), height: t(240), top: t(42), left: t(62)}
                }), [n]), m = (0, R.useMemo)((function () {
                    return {height: t(64), width: t(64), top: t(130), left: t(150)}
                }), [n]), p = function (e) {
                    var t = r.current[e];
                    if (t && d) {
                        c.current && c.current.destroy();
                        var n = t.portrait ? t.portrait : t;
                        c.current = d.loadAnimation({
                            container: u.current,
                            animationData: n,
                            autoplay: !0,
                            loop: !0
                        }), c.current.addEventListener("complete", (function () {
                            var e;
                            null === (e = c.current) || void 0 === e || e.destroy()
                        }))
                    }
                };
                return R.createElement(R.Fragment, null, R.createElement("div", {
                    className: "".concat(i, "__lottie"),
                    ref: u,
                    style: f
                }), R.createElement("div", {
                    className: D()("".concat(i, "__lottie-hotspot"), a && "hide"),
                    style: m,
                    onMouseDown: l,
                    onMouseUp: s
                }))
            }, pn = n(31448), vn = function (e) {
                return e && e.Math == Math && e
            },
            hn = vn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || vn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || vn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || vn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        hn.globalThis = hn, hn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var _n = function (e) {
                var t = e.convert, n = e.baseUnit, i = e.classPrefix, r = e.stickerShow, o = e.alphaPlayerEnd,
                    a = e.alphaPlayerPlay, l = e.urlPrefix, s = e.pcAlphaPlayerData, u = (0, R.useRef)(null),
                    c = (0, pn.Z)(), d = (0, R.useState)(), f = (0, m.Z)(d, 2), p = f[0], v = f[1], h = (0, R.useState)(),
                    _ = (0, m.Z)(h, 2), g = _[0], b = _[1];
                (0, R.useEffect)((function () {
                    u.current && r && g && c.then((function (e) {
                        var n;
                        u.current && v(new e({
                            container: u.current,
                            mediaSource: we()(n = "".concat(l)).call(n, s.long_press_alpha_play_MP4_file),
                            mediaConfig: {
                                portrait: {
                                    videoW: g.videoW,
                                    f: g.f,
                                    h: t(558),
                                    w: t(558),
                                    align: g.align,
                                    aFrame: g.aFrame,
                                    rgbFrame: g.rgbFrame,
                                    v: g.v,
                                    path: g.path,
                                    videoH: g.videoH
                                }
                            }
                        }))
                    }))
                }), [u, r, n, g]), (0, R.useEffect)((function () {
                    var e;
                    Ye.Z.video.getStickerResource({url: we()(e = "".concat(l)).call(e, s.long_press_alpha_play_JSON_file)}).then((function (e) {
                        b(e.portrait)
                    })).catch((function (e) {
                        console.error(e)
                    }))
                }), []), (0, R.useEffect)((function () {
                    if (p) return function () {
                        p.destroy()
                    }
                }), [p]), (0, R.useEffect)((function () {
                    if (p) return p.addEventListener("ended", o), function () {
                        p.removeEventListener("ended", o)
                    }
                }), [p, o]), (0, R.useEffect)((function () {
                    p && a && p && p.play()
                }), [a, p]);
                var y = (0, R.useMemo)((function () {
                    return {width: t(558), height: t(558), top: t(-144), left: t(-127)}
                }), [n]);
                return R.createElement("div", {className: "".concat(i, "__alphaplayer-effect"), ref: u, style: y})
            }, gn = n(16289), bn = function (e) {
                return e && e.Math == Math && e
            },
            yn = bn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || bn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || bn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || bn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        yn.globalThis = yn, yn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var wn = "danmaku-sticker", xn = function (e) {
            var t, n, i = e.sticker, r = e.base, o = e.resourceRef, a = e.show, l = e.onValidAction,
                s = e.getStickerCommonParams, u = e.onManualClose, c = e.onCancelValidAction, d = it(), f = d.urlPrefix,
                p = d.player, v = d.video, h = (0, je.f)(), _ = h.isShowDanmaku, g = h.setIsShowDanmakuAfterInteractive,
                b = r.baseUnit, y = r.mainStyle, w = i.effect, x = i.danmaku_info, Z = w.Extra, E = Z.danmaku_common,
                j = w.EffectId, S = Z.pc, k = (0, Je._n)(), P = (0, Je._0)(),
                N = null !== (t = null == P ? void 0 : P.isBanDanmuSend) && void 0 !== t && t, T = (0, R.useRef)(null),
                C = (0, R.useRef)(null), I = (0, R.useState)(!1), M = (0, m.Z)(I, 2), F = M[0], L = M[1],
                O = (0, R.useState)(0), A = (0, m.Z)(O, 2), U = A[0], V = A[1], H = (0, R.useState)(0),
                z = (0, m.Z)(H, 2), B = z[0], G = z[1], W = (0, R.useState)(a), Y = (0, m.Z)(W, 2), q = Y[0], K = Y[1],
                J = (0, R.useState)(!1), Q = (0, m.Z)(J, 2), $ = Q[0], ee = Q[1], te = (0, R.useState)(!1),
                ne = (0, m.Z)(te, 2), ie = ne[0], re = ne[1], oe = (0, R.useState)(), ae = (0, m.Z)(oe, 2), le = ae[0],
                se = ae[1], ue = (0, R.useState)(), ce = (0, m.Z)(ue, 2), de = ce[0], fe = ce[1],
                me = (0, R.useState)(!1), pe = (0, m.Z)(me, 2), ve = pe[0], he = pe[1], _e = (0, R.useState)(!1),
                ge = (0, m.Z)(_e, 2), be = ge[0], ye = ge[1], xe = (0, R.useState)(!1), Ze = (0, m.Z)(xe, 2),
                Ee = Ze[0], Se = Ze[1], ke = (0, R.useState)(!1), Pe = (0, m.Z)(ke, 2), Ne = Pe[0], Te = Pe[1],
                Ce = (0, R.useState)(""), Ie = (0, m.Z)(Ce, 2), Me = Ie[0], Fe = Ie[1], Le = (0, R.useState)(!1),
                Oe = (0, m.Z)(Le, 2), De = Oe[0], Ae = Oe[1], Ve = (0, R.useState)(!0), He = (0, m.Z)(Ve, 2),
                ze = He[0], Be = He[1], Ge = (0, R.useState)(!1), We = (0, m.Z)(Ge, 2), qe = We[0], Ke = We[1],
                Qe = (0, R.useState)(), $e = (0, m.Z)(Qe, 2), et = $e[0], tt = $e[1], nt = (0, R.useState)(!1),
                rt = (0, m.Z)(nt, 2), ot = rt[0], at = rt[1], lt = (0, R.useState)(), st = (0, m.Z)(lt, 2), ut = st[0],
                ct = st[1], dt = (0, R.useState)(_), ft = (0, m.Z)(dt, 2), mt = ft[0], pt = ft[1],
                vt = (0, R.useState)(!1), ht = (0, m.Z)(vt, 2), _t = ht[0], gt = ht[1],
                bt = Boolean((null == S ? void 0 : S.long_press_alpha_play_JSON_file) && S.long_press_alpha_play_MP4_file),
                yt = (0, Je.jY)().id, wt = v.user_info.user_id, xt = String(yt) === String(wt),
                Zt = (null == x ? void 0 : x.content) || E.danmaku_default_text,
                Et = (null == x ? void 0 : x.title) || E.title_default_text;
            (0, R.useEffect)((function () {
                pt(_)
            }), [_]), (0, R.useLayoutEffect)((function () {
                a && (c(), K(!0), ie || re(!0), X.Z.sticker.rtDanmakuGuideShow(s()))
            }), [a]);
            var jt = function (e) {
                return b * e
            }, St = function () {
                var e = U - B;
                if ("" === Me) {
                    !function (t) {
                        X.Z.sticker.stickerDanmakuConfirm({
                            sticker_id: i.sticker_id,
                            is_from_vote: 0,
                            danmaku_cnt: e,
                            effect_id: j
                        });
                        var n = Math.round(1e3 * p.currentTime);
                        Ye.Z.video.sendDanmaku({
                            sticker_id: i.sticker_id,
                            group_id: v.group_id || "",
                            offset_time: n,
                            text: t
                        }).then((function (e) {
                            e.data.danmaku_id && (Fe(e.data.danmaku_id), X.Z.sticker.stickerDanmakuDone({
                                sticker_id: i.sticker_id,
                                sticker_type: Re.DANMAKU,
                                is_from_vote: 0,
                                effect_id: j,
                                danmaku_id: e.data.danmaku_id,
                                danmaku_type: xt ? 6 : 0
                            }))
                        })).catch((function (e) {
                            Xe.Z.error("鏈嶅姟寮傚父锛岃绋嶅悗閲嶈瘯")
                        }))
                    }(Zt)
                }
            };
            (0, R.useEffect)((function () {
                q || q || (ve && (St(), he(!1), ye(!1)), V(0), Fe(""))
            }), [q]), (0, R.useEffect)((function () {
                if (!ve) return le && clearTimeout(le), void(de && clearInterval(de));
                var e, t;
                e = 150, t = setTimeout((function () {
                    if (ve) {
                        ye(!0);
                        var t = setInterval((function () {
                            ve && (Pt(), l())
                        }), e);
                        fe(t)
                    }
                }), 400), se(t)
            }), [ve]), (0, R.useEffect)((function () {
                if (ve && ze && Be(!1), ve || be) et && clearTimeout(et); else if (!ve && 0 !== U) {
                    var e = setTimeout((function () {
                        ve || be || _t || (Ae(!0), Be(!0))
                    }), 200);
                    tt(e)
                }
            }), [ve]), (0, R.useEffect)((function () {
                if (ve || be) return at(!1), void(ut && clearTimeout(ut));
                if (!ve && 0 !== U) {
                    var e = setTimeout((function () {
                        ve || at(!0)
                    }), 1e3);
                    ct(e)
                }
            }), [ve]), (0, R.useEffect)((function () {
                0 === U ? Te(!0) : U % 25 == 0 && Ke(!0), U === E.trigger_ap_number && (ee(!0), he(!1), Se(!0), St(), bt ? gt(!0) : Tt())
            }), [U]);
            var kt = (0, R.useMemo)((function () {
                var e;
                return {
                    height: jt(32),
                    width: jt(32),
                    top: jt(146),
                    left: jt(166),
                    backgroundImage: E.is_need_danmaku_icon ? we()(e = "url(".concat(f)).call(e, E.danmaku_icon, ")") : void 0
                }
            }), [b]), Pt = function () {
                if (V((function (e) {
                        return e + 1
                    })), T.current && (T.current.addRipple(), C.current)) {
                    C.current.addEffectFlight();
                    var e;
                    e = {
                        isAuthor: !0,
                        user_id: yt,
                        id: "stickerFakeDanmaku" + Date.now(),
                        text: Zt
                    }, gn.Z.emit(gn.o.pushDanmaku, e)
                }
            }, Nt = function (e) {
                "stickerDisappearDanmaku" === e.animationName ? (K(!1), ee(!1), V(0), Se(!1), Be(!0), Ae(!0), ye(!1), gt(!1), V(0)) : "interactiveBackgroundPosAndSizeInitDanmaku" === e.animationName ? re(!1) : "contentWrapperDisplayDanmaku" === e.animationName ? L(!1) : "planeIconPositionDisplayDanmaku" === e.animationName ? Ae(!1) : "countNumberDisplayDanmaku" === e.animationName ? Te(!1) : "numberEffectOpacityDanmaku" === e.animationName && Ke(!1)
            }, Tt = function () {
                ee(!1), V(0), Se(!1), Be(!0), Ae(!0), ye(!1), l(), gt(!1)
            };
            return q ? R.createElement(R.Fragment, null, R.createElement("div", {
                style: y,
                className: "".concat(wn, "-container")
            }, R.createElement("div", {
                className: D()("".concat(wn), F && "active", !a && "hide", ie && "firstShow"),
                onAnimationEnd: Nt
            }, R.createElement(cn, {
                convert: jt,
                baseUnit: b,
                classPrefix: wn,
                danmakuDefaultTitle: Et,
                danmakuDefaultText: Zt,
                urlPrefix: f,
                danmaku_common: E,
                onManualClose: function () {
                    u(), K(!1)
                },
                getStickerCommonParams: s
            }), R.createElement(mn, {
                convert: jt,
                baseUnit: b,
                classPrefix: wn,
                resourceRef: o,
                stickerShow: q,
                hotspotHide: $,
                longPressStart: function () {
                    if (!k) return Ue.ZP.show({source: "danmaku"});
                    N ? Xe.Z.error("鏍规嵁瀵规柟璁剧疆锛屼綘鏃犳硶杩涜姝ゆ搷浣�") : (mt || (g(!0), Xe.Z.info("宸蹭负浣犳墦寮€寮瑰箷寮€鍏�")), l(), G(U), Pt(), L(!0), he(!0))
                },
                longPressEnd: function () {
                    if (!k) return Ue.ZP.show({source: "danmaku"});
                    N || (St(), he(!1), ye(!1), l())
                }
            }), R.createElement(Wt, {
                classPrefix: wn,
                danmaku_common: E,
                baseUnit: b,
                ref: C
            }), R.createElement("div", {
                className: D()("".concat(wn, "-plane-normal"), De && "goBack", !ze && "hide"),
                style: kt,
                onAnimationEnd: Nt
            }), R.createElement("link", {
                rel: "preload",
                as: "font",
                href: globalThis.getFilterXss().filterUrl(Ht, null, {logType: "js.href/src", reportOnly: "all"})
            }), U > 0 ? R.createElement(Jt, {
                convert: jt,
                baseUnit: b,
                classPrefix: wn,
                isCountNumberEffect: qe,
                countNumberDisappear: Ee,
                countAfterTouchedDisappear: ot,
                countNumberDisplay: Ne,
                handlerAfterAnimationEnd: Nt,
                clickCount: U
            }) : null, R.createElement(Vt, {
                baseUnit: b,
                convert: jt,
                ref: T,
                rippleImage: we()(n = "".concat(f)).call(n, E.ripple_image)
            }), bt && R.createElement(_n, {
                convert: jt,
                baseUnit: b,
                classPrefix: wn,
                stickerShow: q,
                alphaPlayerEnd: Tt,
                alphaPlayerPlay: _t,
                urlPrefix: f,
                pcAlphaPlayerData: S
            })))) : null
        }, Zn = n(52350), En = n(5101), jn = n(44494), Sn = n.n(jn);

        function kn(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Pn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? kn(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : kn(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Nn = function (e) {
                return e && e.Math == Math && e
            },
            Tn = Nn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Nn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Nn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Nn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Tn.globalThis = Tn, Tn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Cn, In = 200, Mn = "vote-option", Fn = function (e) {
            var t = e.isChoose, n = e.effect, i = e.resourceRef, r = e.convert, o = e.isVoted, a = e.onClickHandler,
                l = e.option, s = e.baseUnit, u = e.total, c = e.index, d = e.rate, f = n.Extra, p = (0, rt.Z)(),
                v = (0, R.useRef)(null), h = it().urlPrefix, _ = (0, R.useRef)(), g = (0, R.useRef)(null),
                b = (0, R.useState)(0), y = (0, m.Z)(b, 2), w = y[0], x = y[1], Z = (0, R.useRef)(o),
                E = (0, R.useState)(!1), j = (0, m.Z)(E, 2), S = j[0], k = j[1];
            (0, R.useEffect)((function () {
                if (t) {
                    var e = i.current.option_selected_lottie;
                    v.current && p && e && p.loadAnimation({
                        container: v.current,
                        animationData: e,
                        autoplay: !0,
                        loop: !0
                    })
                }
            }), [t, o, p]), (0, R.useEffect)((function () {
                if (!o) {
                    var e;
                    null === (e = _.current) || void 0 === e || e.destroy();
                    var t = i.current.option_normal_lottie;
                    g.current && p && t && (_.current = p.loadAnimation({
                        container: g.current,
                        animationData: t,
                        autoplay: !1,
                        loop: !0
                    }), setTimeout((function () {
                        var e;
                        null === (e = _.current) || void 0 === e || e.play()
                    }), 1600 * c))
                }
            }), [o, p]);
            var P = (0, R.useMemo)((function () {
                var e = In * d / 100;
                return u !== (null == l ? void 0 : l.count) && 0 !== (null == l ? void 0 : l.count) && (e > 180 && (e = 180), e < 20 && (e = 20)), {
                    width: r(In),
                    height: r(40),
                    left: r(e - In)
                }
            }), [s, o, d]), N = (0, R.useMemo)((function () {
                var e = o ? t ? f.selected_state : f.un_selected_state : f.normal_state;
                return Pn({}, {width: r(In), height: r(40), color: e.option_text_color})
            }), [s, o]), T = (0, R.useMemo)((function () {
                var e = o ? t ? f.selected_state : f.un_selected_state : f.normal_state;
                return {
                    color: e.option_text_color,
                    opacity: e.option_text_opacity,
                    fontSize: Math.max(r(17), 12),
                    transform: "scale(".concat(Math.min(1, r(17) / 12), ")")
                }
            }), [s, o, t]), C = (0, R.useMemo)((function () {
                var e = o ? t ? f.selected_state : f.un_selected_state : f.normal_state;
                return {
                    color: e.option_rate_color,
                    opacity: e.option_rate_opacity,
                    fontSize: Math.max(r(20), 12),
                    transform: "scale(".concat(Math.min(1, r(20) / 12), ")")
                }
            }), [s, o, t]), I = (0, R.useMemo)((function () {
                var e, t = o ? f.un_selected_state : f.normal_state, n = {
                    width: r(200),
                    height: r(40),
                    borderRadius: r(40),
                    marginLeft: r(14),
                    marginTop: r(12),
                    opacity: t.option_rate_opacity
                };
                return o ? Pn(Pn({}, n), {}, {backgroundImage: we()(e = "url(".concat(h, "/")).call(e, f.vote_common.vote_option_background, ")")}) : Pn({}, n)
            }), [s, o]), M = (0, R.useMemo)((function () {
                return {fontSize: Math.max(r(10), 12), transform: "scale(".concat(Math.min(1, r(10) / 12), ")")}
            }), [s]);
            return (0, R.useLayoutEffect)((function () {
                var e, t = 0;
                return !Z.current && o ? (e = requestAnimationFrame((function e(n) {
                    t || (t = n);
                    var i = n - t, r = Math.round(Math.min(i / 780, 1) * d);
                    x(r), i < 780 && requestAnimationFrame(e)
                })), k(!0)) : x(d), function () {
                    cancelAnimationFrame(e)
                }
            }), [o]), (0, R.useEffect)((function () {
                return function () {
                    var e;
                    null === (e = _.current) || void 0 === e || e.destroy()
                }
            }), []), R.createElement(R.Fragment, null, R.createElement("div", {
                className: D()("".concat(Mn)),
                style: I
            }, R.createElement("div", {
                ref: g,
                className: D()("".concat(Mn, "__lottie-bag"), o && "hide"),
                onAnimationEnd: function () {
                    var e;
                    o && (null === (e = _.current) || void 0 === e || e.destroy())
                }
            }), R.createElement("div", {
                style: N, className: D()("".concat(Mn, "__option")), onClick: function () {
                    return a(l)
                }
            }, o && R.createElement("div", {
                className: D()("".concat(Mn, "__line"), !t && "unCheck", S && "voted-animate"),
                style: P,
                ref: v
            }), R.createElement("div", {className: D()("".concat(Mn, "__text"))}, R.createElement("span", {
                className: D()("".concat(Mn, "__text--left")),
                style: T
            }, l.text), o && R.createElement("div", {
                className: D()("".concat(Mn, "__text--right")),
                style: C
            }, R.createElement("span", null, w), R.createElement("span", {style: M}, "%"))))))
        };

        function Ln() {
            return Ln = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, Ln.apply(this, arguments)
        }

        var Rn = function (e) {
            return R.createElement("svg", Ln({
                width: 44,
                height: 44,
                viewBox: "0 0 44 44",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Cn || (Cn = R.createElement("path", {
                d: "M22.25 20.936l3.664-3.664a.93.93 0 111.314 1.314l-3.664 3.664 3.664 3.664a.93.93 0 11-1.314 1.314l-3.664-3.664-3.664 3.664a.93.93 0 01-1.314-1.314l3.664-3.664-3.664-3.664a.93.93 0 111.314-1.314l3.664 3.664z",
                fill: "#FFF",
                fillOpacity: .4
            })))
        };

        function On(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Dn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? On(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : On(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var An = function (e) {
                return e && e.Math == Math && e
            },
            Un = An("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || An("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || An("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || An("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Un.globalThis = Un, Un.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Xn = "vote-sticker", Vn = function (e) {
            var t = e.sticker, n = e.show, i = e.base, r = e.resourceRef, o = e.getStickerCommonParams,
                a = e.onClickHandler, l = e.isVoted, s = e.optionList, u = e.totalCount, c = e.onManualClose,
                d = i.baseUnit, f = i.mainStyle, p = it().urlPrefix, v = t.effect, h = t.vote_info,
                _ = (0, R.useState)(n), g = (0, m.Z)(_, 2), b = g[0], y = g[1], x = (0, R.useRef)(l), Z = v.Extra,
                E = (0, R.useRef)(null), j = (0, R.useRef)(null);
            (0, R.useLayoutEffect)((function () {
                n && (y(!0), X.Z.sticker.voteStickerShow(Dn(Dn({}, o()), {}, {is_voted: h.is_voted ? 1 : 0})))
            }), [n]);
            var S = function (e) {
                return Math.round(d * e)
            }, k = (0, R.useMemo)((function () {
                var e, t, n, i = Z.vote_common;
                return {
                    width: S(228),
                    top: S(40),
                    left: S(40),
                    paddingTop: S(12),
                    paddingBottom: S(16),
                    borderRadius: S(12),
                    border: we()(e = we()(t = "".concat(i.border_width, "px solid ")).call(t, i.border_color)).call(e, Math.round(255 * i.border_opacity).toString(16)),
                    backgroundImage: we()(n = "url(".concat(p, "/")).call(n, i.background_image, ")")
                }
            }), [d]), P = (0, R.useMemo)((function () {
                var e = Z.vote_common;
                return {
                    fontSize: Math.max(S(15), 12),
                    transform: "scale(".concat(Math.min(1, S(15) / 12), ")"),
                    whiteSpace: "nowrap",
                    transformOrigin: "left center",
                    color: e.vote_title_color,
                    opacity: e.vote_title_opacity,
                    marginLeft: S(16)
                }
            }), [d]), N = (0, R.useMemo)((function () {
                var e;
                if (!s || !u) return [];
                var t = Sn()(e = new Array(s.length)).call(e, 0);
                if (!l) return t;
                for (var n = 100, i = 0, r = 0; r < s.length; r++) {
                    var o;
                    if (s[r].is_chosen) i = r; else t[r] = Math.floor((null !== (o = s[r].count) && void 0 !== o ? o : 0) / u * 100), n -= t[r]
                }
                return t[i] = n, t
            }), [s, u, l]);
            return b ? R.createElement("div", {style: f}, R.createElement("div", {
                className: D()("".concat(Xn), !n && "hide", !l && "not-voted", x.current && "voted"),
                onAnimationEnd: function () {
                    n || y(!1)
                },
                ref: j
            }, R.createElement("div", {
                className: D()("".concat(Xn, "__content")),
                style: k,
                ref: E
            }, R.createElement("div", {
                className: D()("".concat(Xn, "__title")),
                style: P
            }, h.title), s && w()(s).call(s, (function (e, t) {
                return R.createElement(Fn, {
                    key: t,
                    isChoose: e.is_chosen,
                    effect: v,
                    resourceRef: r,
                    convert: S,
                    option: e,
                    isVoted: l,
                    onClickHandler: a,
                    baseUnit: d,
                    total: u,
                    index: t,
                    rate: N[t]
                })
            })), R.createElement(Rn, {
                className: "".concat(Xn, "__close-btn"), onClick: function () {
                    c(), y(!1), X.Z.sticker.xgInteractStickerClose(Dn(Dn({}, o()), {}, {
                        is_voted: h.is_voted ? 1 : 0,
                        sticker_type: Re.VOTE
                    }))
                }
            })))) : null
        };

        function Hn(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function zn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hn(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Hn(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Bn = function (e) {
                return e && e.Math == Math && e
            },
            Gn = Bn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Bn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Bn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Bn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Gn.globalThis = Gn, Gn.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Wn = 264, Yn = "pk-option", qn = function (e) {
            var t = e.isChoose, n = e.effect, i = e.resourceRef, r = e.convert, o = e.isVoted, a = e.onClickHandler,
                l = e.option, s = e.baseUnit, u = e.total, c = e.isLeft, d = n.Extra, f = (0, R.useRef)(),
                p = (0, R.useRef)(null), v = (0, rt.Z)(), h = (0, R.useState)(!1), _ = (0, m.Z)(h, 2), g = _[0],
                b = _[1], y = (0, R.useRef)(o), w = (0, R.useState)(0), x = (0, m.Z)(w, 2), Z = x[0], E = x[1],
                j = (0, R.useState)(0), S = (0, m.Z)(j, 2), k = S[0], P = S[1];
            (0, R.useEffect)((function () {
                if (o && t || !o) {
                    var e, n = c ? i.current.option_pk_left_lottie : i.current.option_pk_right_lottie;
                    null === (e = f.current) || void 0 === e || e.destroy(), p.current && v && n && (f.current = v.loadAnimation({
                        container: p.current,
                        animationData: n,
                        autoplay: !0,
                        loop: !0
                    }))
                } else {
                    var r;
                    null === (r = f.current) || void 0 === r || r.destroy(), p.current && (p.current.style.display = "none")
                }
            }), [o, t, v]);
            var N = (0, R.useMemo)((function () {
                var e = 0;
                l.count && u && (e = Math.round(l.count / u * 100) / 100);
                var t = Math.round(100 * e);
                return E(t), e
            }), [l.count, u]), T = (0, R.useMemo)((function () {
                var e = Wn * N;
                return u !== l.count && 0 !== l.count && (e > 220 && (e = 220), e < 44 && (e = 44)), zn({}, {
                    width: r(o ? e : 130),
                    height: r(44),
                    "--unVoteFontSize": "".concat(Math.max(r(17), 12), "px"),
                    "--unVoteTransform": "scale(".concat(Math.min(1, r(17) / 12), ")"),
                    "--votedFontSize": "".concat(Math.max(r(12), 12), "px"),
                    "--voteTransform": "scale(".concat(Math.min(1, r(12) / 12), ")")
                })
            }), [s, o]), C = (0, R.useMemo)((function () {
                var e = c ? d.pk_left_state : d.pk_right_state, t = o ? 12 : 17, n = r(o ? 26 : 13.5);
                return {
                    color: e.option_text_color,
                    fontSize: Math.max(r(t), 12),
                    transform: "scale(".concat(Math.min(1, r(t) / 12), ")"),
                    top: n
                }
            }), [s, o]), I = (0, R.useMemo)((function () {
                var e = c ? d.pk_left_state : d.pk_right_state;
                return {
                    fontSize: Math.max(r(20), 12),
                    transform: "scale(".concat(Math.min(1, r(20) / 12), ")"),
                    color: e.option_rate_color,
                    top: r(4)
                }
            }), [s]), M = (0, R.useMemo)((function () {
                return {height: r(44)}
            }), [s]), F = (0, R.useMemo)((function () {
                return {fontSize: Math.max(r(10), 12), transform: "scale(".concat(Math.min(1, r(10) / 12), ")")}
            }), [s]), L = (0, R.useMemo)((function () {
                var e = {width: r(Wn), height: r(44), position: "absolute", right: 0};
                return zn(zn({}, e), {}, c ? {right: 0} : {left: 0})
            }), [s]);
            return (0, R.useLayoutEffect)((function () {
                var e, t = 0;
                return !y.current && o ? (e = requestAnimationFrame((function e(n) {
                    t || (t = n);
                    var i = n - t, r = Math.round(Math.min(i / 780, 1) * Z);
                    P(r), i < 780 && requestAnimationFrame(e)
                })), b(!0)) : P(Z), function () {
                    cancelAnimationFrame(e)
                }
            }), [o]), (0, R.useEffect)((function () {
                return function () {
                    var e;
                    null === (e = f.current) || void 0 === e || e.destroy()
                }
            }), []), R.createElement(R.Fragment, null, R.createElement("div", {
                className: D()("".concat(Yn), o ? "voted" : "begin-animate", g && "voted-animate"),
                style: T,
                onClick: function () {
                    return a(l)
                }
            }, R.createElement("div", {
                ref: p,
                style: L
            }), R.createElement("div", {
                className: D()("".concat(Yn, "__text")),
                style: M
            }, o && R.createElement("div", {
                className: D()("".concat(Yn, "__text-rate"), t ? "select" : "not-select"),
                style: I
            }, R.createElement("span", null, k), R.createElement("span", {style: F}, "%")), R.createElement("div", {
                className: D()("".concat(Yn, "__text-title")),
                style: C
            }, l.text))))
        };

        function Kn(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Jn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Kn(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Kn(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Qn = function (e) {
                return e && e.Math == Math && e
            },
            $n = Qn("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Qn("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Qn("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Qn("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        $n.globalThis = $n, $n.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ei, ti, ni, ii, ri, oi, ai, li, si, ui, ci = "pk-sticker", di = function (e) {
                var t = e.sticker, n = e.show, i = e.base, r = e.resourceRef, o = e.getStickerCommonParams,
                    a = e.onClickHandler, l = e.isVoted, s = e.optionList, u = e.totalCount, c = e.onManualClose,
                    d = i.baseUnit, f = i.mainStyle, p = it().urlPrefix, v = t.effect, h = t.vote_info,
                    _ = (0, R.useState)(n), g = (0, m.Z)(_, 2), b = g[0], y = g[1], x = (0, R.useRef)(l), Z = v.Extra,
                    E = (0, R.useRef)(null), j = (0, R.useRef)(null);
                (0, R.useLayoutEffect)((function () {
                    n && (y(!0), X.Z.sticker.voteStickerShow(Jn(Jn({}, o()), {}, {is_voted: h.is_voted ? 1 : 0})))
                }), [n]);
                var S = function (e) {
                    return d * e
                }, k = (0, R.useMemo)((function () {
                    var e, t, n, i = Z.vote_common;
                    return {
                        width: S(292),
                        height: S(108),
                        top: S(40),
                        left: S(40),
                        paddingTop: S(10),
                        borderRadius: S(12),
                        border: we()(e = we()(t = "".concat(i.border_width, "px solid ")).call(t, i.border_color)).call(e, Math.round(255 * i.border_opacity).toString(16)),
                        backgroundImage: we()(n = "url(".concat(p, "/")).call(n, i.background_image, ")")
                    }
                }), [d]), P = (0, R.useMemo)((function () {
                    var e;
                    return {
                        width: Math.round(S(28)),
                        height: Math.round(S(28)),
                        marginLeft: Math.round(S(15)),
                        backgroundImage: we()(e = "url(".concat(p, "/")).call(e, Z.vote_common.vote_logo, ")")
                    }
                }), [d]), N = (0, R.useMemo)((function () {
                    var e = Z.vote_common;
                    return {
                        lineHeight: "".concat(Math.round(S(28)), "px"),
                        fontSize: Math.max(S(15), 12),
                        transform: "scale(".concat(Math.min(1, S(15) / 12), ")"),
                        transformOrigin: "left center",
                        color: e.vote_title_color,
                        opacity: e.vote_title_opacity
                    }
                }), [d]), T = (0, R.useMemo)((function () {
                    var e;
                    return {
                        width: S(264),
                        height: S(44),
                        borderRadius: S(44),
                        top: S(88),
                        left: S(54),
                        backgroundImage: l ? we()(e = "url(".concat(p, "/")).call(e, Z.vote_common.vote_option_background, ")") : ""
                    }
                }), [d, l]), C = (0, R.useMemo)((function () {
                    var e;
                    return {
                        width: S(44),
                        height: S(44),
                        top: S(88),
                        left: S(164),
                        backgroundImage: we()(e = "url(".concat(p, "/")).call(e, Z.vote_common.vote_anim_logo, ")")
                    }
                }), [d]);
                return b ? R.createElement("div", {style: f}, R.createElement("div", {
                    className: D()("".concat(ci), !n && "hide", !l && "not-voted", x.current && "voted"),
                    onAnimationEnd: function () {
                        n || y(!1)
                    },
                    ref: j
                }, R.createElement("div", {
                    className: D()("".concat(ci, "__content")),
                    style: k,
                    ref: E
                }, R.createElement("div", {className: D()("".concat(ci, "__title"))}, R.createElement("span", {
                    style: P,
                    className: D()("".concat(ci, "__title--logo"))
                }), R.createElement("span", {style: N}, h.title)), R.createElement(Rn, {
                    className: "".concat(ci, "__close-btn"),
                    onClick: function () {
                        c(), y(!1), X.Z.sticker.xgInteractStickerClose(Jn(Jn({}, o()), {}, {
                            is_voted: h.is_voted ? 1 : 0,
                            sticker_type: Re.VOTE
                        }))
                    }
                })), R.createElement("div", {
                    className: D()("".concat(ci, "__btn")),
                    style: T
                }, s && w()(s).call(s, (function (e, t) {
                    return R.createElement(qn, {
                        key: t,
                        isChoose: e.is_chosen,
                        effect: v,
                        resourceRef: r,
                        convert: S,
                        option: e,
                        isVoted: l,
                        onClickHandler: a,
                        baseUnit: d,
                        total: u,
                        isLeft: 0 === t
                    })
                }))), R.createElement("div", {className: D()("".concat(ci, "__begin-text")), style: C}))) : null
            }, fi = function (e) {
                return e && e.Math == Math && e
            },
            mi = fi("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || fi("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || fi("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || fi("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function pi(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        mi.globalThis = mi, mi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, function (e) {
            e[e.ParamsError = 1] = "ParamsError", e[e.InternalError = 2] = "InternalError", e[e.VoteExistError = 10] = "VoteExistError", e[e.StickerDataError = 101] = "StickerDataError", e[e.StickerReviewInfoDataError = 102] = "StickerReviewInfoDataError"
        }(ei || (ei = {})), function (e) {
            e[e.Reviewing = 1] = "Reviewing", e[e.Pass = 2] = "Pass", e[e.Fail = 3] = "Fail", e[e.SelfVisible = 4] = "SelfVisible"
        }(ti || (ti = {})), function (e) {
            e[e.Follow = 1] = "Follow", e[e.Digg = 2] = "Digg", e[e.Danmaku = 3] = "Danmaku", e[e.Vote = 4] = "Vote", e[e.XgPlayHitList = 5] = "XgPlayHitList", e[e.Couplet = 6] = "Couplet", e[e.LiveAppointment = 7] = "LiveAppointment"
        }(ni || (ni = {})), function (e) {
            e[e.SelfCustomized = 0] = "SelfCustomized", e[e.Smart = 1] = "Smart", e[e.FirstFive = 2] = "FirstFive", e[e.LastFIve = 3] = "LastFIve"
        }(ii || (ii = {})), function (e) {
            e[e.PK = 1] = "PK", e[e.Normal = 2] = "Normal"
        }(ri || (ri = {})), function (e) {
            e[e.OnlyText = 1] = "OnlyText", e[e.TextPic = 2] = "TextPic"
        }(oi || (oi = {})), function (e) {
            e[e.Video = 0] = "Video", e[e.Comment = 1] = "Comment"
        }(ai || (ai = {})), function (e) {
            e[e.Danmaku = 1] = "Danmaku", e[e.Comment = 2] = "Comment"
        }(li || (li = {})), function (e) {
            e[e.Bad = 0] = "Bad", e[e.Soso = 1] = "Soso", e[e.Good = 2] = "Good"
        }(si || (si = {})), function (e) {
            e[e.Look = 1] = "Look", e[e.Again = 2] = "Again", e[e.SelfSchema = 3] = "SelfSchema"
        }(ui || (ui = {}));
        var vi = function (e) {
                return e && e.Math == Math && e
            },
            hi = vi("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || vi("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || vi("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || vi("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        hi.globalThis = hi, hi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var _i = function (e) {
            var t = e.sticker, n = e.onValidAction, i = e.getStickerCommonParams, r = e.onManualClose, o = e.show,
                a = it(), l = a.player, u = a.video, d = (0, je.f)().isShowDanmaku, v = t.effect, h = t.vote_info,
                _ = v.EffectId, g = (0, R.useState)(h.is_voted), b = (0, m.Z)(g, 2), y = b[0], x = b[1],
                Z = (0, R.useState)(h.options), E = (0, m.Z)(Z, 2), j = E[0], S = E[1],
                k = (0, R.useState)(h.total_count), P = (0, m.Z)(k, 2), N = P[0], T = P[1],
                C = ((0, Zn.Z)({player: l}).duration_Ref, (0, En.Z)().fontSize_Ref, (0, Je.jY)().id), I = (0, Je._n)(),
                M = (0, R.useRef)(!1), F = u.user_info, L = String(F.user_id) === String(C), O = function (e, t) {
                    var n = null == t ? void 0 : w()(t).call(t, (function (t) {
                        var n = function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? pi(Object(n), !0).forEach((function (t) {
                                    (0, p.Z)(e, t, n[t])
                                })) : c() ? Object.defineProperties(e, c()(n)) : pi(Object(n)).forEach((function (t) {
                                    Object.defineProperty(e, t, s()(n, t))
                                }))
                            }
                            return e
                        }({}, t);
                        return e.option_id === n.option_id && (n.is_chosen = !0, n.count = n.count + 1), n
                    }));
                    return n
                }, D = function (e) {
                    I ? (M.current = !1, y ? Xe.Z.success("浣犲凡缁忔姇鍑轰簡涓€绁�") : (n(), S(O(e, j)), T(N + 1), x(!0), d && function (e) {
                        X.Z.sticker.stickerDanmakuConfirm({
                            sticker_id: t.sticker_id,
                            is_from_vote: 1,
                            danmaku_cnt: 1,
                            effect_id: _
                        });
                        var n = Math.round(1e3 * l.currentTime);
                        Ye.Z.video.sendDanmaku({
                            sticker_id: t.sticker_id,
                            group_id: (null == u ? void 0 : u.group_id) || "",
                            offset_time: n,
                            text: e.text
                        }).then((function (n) {
                            if (n.data.danmaku_id) {
                                var i = {isAuthor: !0, user_id: C, id: n.data.danmaku_id, text: e.text};
                                gn.Z.emit(gn.o.pushDanmaku, i), X.Z.sticker.stickerDanmakuDone({
                                    sticker_id: t.sticker_id,
                                    is_from_vote: 1,
                                    effect_id: _,
                                    danmaku_id: n.data.danmaku_id,
                                    danmaku_type: L ? 6 : 0,
                                    sticker_type: Re.VOTE
                                })
                            }
                        })).catch((function (e) {
                            !M.current && Xe.Z.error("鏈嶅姟寮傚父锛岃绋嶅悗閲嶈瘯"), M.current = !0
                        }))
                    }(e), function (e) {
                        Ye.Z.video.addVote({
                            vote_id: h.vote_id,
                            chosen_options: [e.option_id],
                            source: 0
                        }).then((function () {
                            X.Z.sticker.voteStickerSuccess(i())
                        })).catch((function (e) {
                            !M.current && Xe.Z.error("鏈嶅姟寮傚父锛岃绋嶅悗閲嶈瘯"), M.current = !0
                        }))
                    }(e))) : Ue.ZP.show({source: "xigua_play_vote"})
                };
            return (0, R.useLayoutEffect)((function () {
                o && y && n()
            }), [o, y]), t.vote_info.type === ri.Normal ? R.createElement(Vn, (0, f.Z)({}, e, {
                sticker: t,
                onClickHandler: D,
                optionList: j,
                isVoted: y,
                totalCount: N,
                onManualClose: r
            })) : R.createElement(di, (0, f.Z)({}, e, {
                sticker: t,
                onClickHandler: D,
                optionList: j,
                isVoted: y,
                totalCount: N,
                onManualClose: r
            }))
        };

        function gi(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function bi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? gi(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : gi(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var yi = function (e) {
                return e && e.Math == Math && e
            },
            wi = yi("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || yi("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || yi("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || yi("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        wi.globalThis = wi, wi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var xi, Zi = "coupletSticker", Ei = ut((function (e) {
                var t, n, i = e.sticker, r = e.base, o = e.show, a = e.onManualClose, l = e.resourceRef, s = e.lottie,
                    u = e.getStickerCommonParams, c = r.baseUnit, d = r.mainStyle, f = i.effect,
                    p = i.first_couplet_info.first_couplet, v = f.Extra, h = it().urlPrefix, _ = (0, R.useState)(o),
                    g = (0, m.Z)(_, 2), b = g[0], y = g[1], w = (0, R.useRef)(null), x = (0, R.useRef)(null),
                    Z = (0, R.useState)(!1), E = (0, m.Z)(Z, 2), j = E[0], S = E[1], k = (0, R.useState)(!0),
                    P = (0, m.Z)(k, 2), N = P[0], T = P[1], C = (0, Je._n)(), I = function (e) {
                        return c * e
                    };
                (0, R.useLayoutEffect)((function () {
                    o && (y(!0), X.Z.sticker.xgCoupletStickerShow(u()))
                }), [o]), (0, ct.i)((function () {
                    b || (S(!1), T(!0))
                }), [b]), (0, R.useLayoutEffect)((function () {
                    var e = null;
                    return N && b && w.current && (S(!1), (e = s.loadAnimation({
                        animationData: l.current.couplet_show_animation_lottie,
                        container: w.current
                    })).addEventListener("complete", (function () {
                        var t;
                        null === (t = e) || void 0 === t || t.destroy(), S(!0), x.current && (e = s.loadAnimation({
                            animationData: l.current.tiger_lottie,
                            container: x.current,
                            loop: !0
                        }))
                    }))), function () {
                        var t;
                        null === (t = e) || void 0 === t || t.destroy(), e = null
                    }
                }), [b, N]);
                var M = (0, R.useMemo)((function () {
                    return {fontSize: Math.max(I(17), 12), transform: "scale(".concat(Math.min(1, I(17) / 12), ")")}
                }), [c]);
                return b ? R.createElement(R.Fragment, null, R.createElement("div", {
                    className: D()("".concat(Zi, "__point"), !o && "hide"),
                    onAnimationEnd: function (e) {
                        e.animationName === "".concat(Zi, "__op-out") && y(!1)
                    }
                }), N && R.createElement("div", {style: bi(bi({}, d), {}, {pointerEvents: "none"})}, R.createElement("div", {
                    className: D()(Zi, !o && "hide"),
                    style: {backgroundImage: we()(t = "url(".concat(h)).call(t, v.couplet_common.background_image, ")")}
                }, R.createElement("div", {
                    className: D()("".concat(Zi, "__first-line")),
                    style: M
                }, p), R.createElement("div", {
                    className: D()("".concat(Zi, "__second-line")),
                    style: {
                        backgroundImage: we()(n = "url(".concat(h)).call(n, v.couplet_common.show_animation_image, ")"),
                        opacity: j ? 1 : 0
                    }
                }), R.createElement("div", {
                    className: D()("".concat(Zi, "__second-line")),
                    ref: w
                }), R.createElement("div", {
                    className: D()("".concat(Zi, "__icon")),
                    ref: x
                }), R.createElement("div", {
                    className: D()("".concat(Zi, "__click")), onClick: function () {
                        X.Z.sticker.xgCoupletStickerClick(u()), C ? Xe.Z.info("娲诲姩宸茬粡缁撴潫鍟︼綖") : Ue.ZP.show({source: "couplet"})
                    }
                }), R.createElement("div", {
                    className: D()("".concat(Zi, "__close")), onClick: function () {
                        X.Z.sticker.xgCoupletStickerClose(u()), a(), y(!1)
                    }
                })))) : null
            })), ji = n(4260), Si = function (e) {
                return e && e.Math == Math && e
            },
            ki = Si("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Si("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Si("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Si("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ki.globalThis = ki, ki.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Pi = {},
            Ni = (xi = {}, (0, p.Z)(xi, Re.FOLLOW, ["follow_click_lottie", "follow_loop_lottie"]), (0, p.Z)(xi, Re.DIGG, ["normal_to_digg_lotties", "appearance_lotties", "normal_to_super_lotties", "digg_to_super_lotties", "super_digg_lotties"]), (0, p.Z)(xi, Re.DANMAKU, ["danmaku_loop_lotties"]), (0, p.Z)(xi, Re.VOTE, ["option_normal_lottie", "option_selected_lottie", "option_pk_left_lottie", "option_pk_right_lottie"]), (0, p.Z)(xi, Re.COUPLET, ["couplet_show_animation_lottie", "tiger_lottie"]), xi),
            Ti = function (e) {
                var t = e.sticker, n = it(), i = n.urlPrefix, r = n.player, o = n.logPb, a = n.video, l = t.effect,
                    s = t.sticker_effect_id, u = t.stick_type, c = (0, R.useState)(!1), d = (0, m.Z)(c, 2), f = d[0],
                    p = d[1], v = (0, R.useRef)({}), h = (0, R.useState)(!1), _ = (0, m.Z)(h, 2), g = _[0], b = _[1],
                    y = (0, R.useState)(!1), x = (0, m.Z)(y, 2), Z = x[0], E = x[1], j = (0, R.useMemo)((function () {
                        return g && !Z
                    }), [g, Z]), S = (0, R.useRef)(t.start_time + t.duration), P = (0, R.useState)(!1), N = (0, m.Z)(P, 2),
                    T = N[0], C = N[1], I = (0, R.useState)(!1), M = (0, m.Z)(I, 2), F = M[0], L = M[1],
                    O = 1 === a.ban_danmaku, D = (0, je.f)().isFollowGlobal, A = (0, Je._n)(), U = (0, Je.jY)(),
                    X = (0, R.useState)((function () {
                        return (0, $.uu)() || (0, $.Gu)()
                    })), V = (0, m.Z)(X, 2), H = V[0], z = V[1];
                (0, R.useLayoutEffect)((function () {
                    var e, n;
                    s ? (Pi[s] || (Pi[s] = k().all(w()(e = null !== (n = Ni[t.stick_type]) && void 0 !== n ? n : []).call(e, (function (e) {
                        var t;
                        return l.Extra.lotties[e] ? Ye.Z.video.getStickerResource({url: we()(t = "".concat(i)).call(t, l.Extra.lotties[e])}) : k().resolve("")
                    })))), Pi[s].then((function (e) {
                        w()(e).call(e, (function (e, n) {
                            v.current[Ni[t.stick_type][n]] = e
                        })), p(!0)
                    })).catch((function (e) {
                        console.error(e)
                    }))) : p(!0)
                }), []), (0, R.useLayoutEffect)((function () {
                    var e = function () {
                        r.currentTime >= t.start_time && r.currentTime <= S.current ? g || b(!0) : g && b(!1)
                    }, n = e, i = function () {
                        F && r.currentTime < t.start_time + t.duration && r.currentTime >= t.start_time && (S.current = r.currentTime + 3), e()
                    };
                    return r.on("timeupdate", n), r.on("seeking", i), function () {
                        r.off("timeupdate", n), r.off("seeking", i)
                    }
                }), [g, F]), (0, R.useLayoutEffect)((function () {
                    var e = function (e) {
                        C(e)
                    };
                    return r.on("miniscreenChange", e), function () {
                        r.off("miniscreenChange", e)
                    }
                }), [r]), (0, R.useLayoutEffect)((function () {
                    var e = function (e) {
                        return z(e)
                    };
                    return r.on(ji.HW, e), r.on(ji.GS, e), function () {
                        r.off(ji.HW, e), r.off(ji.GS, e)
                    }
                }), [r]);
                var B = (0, R.useCallback)((function () {
                    var e, n, i = r.video, o = i.clientWidth, a = i.clientHeight, l = i.videoWidth, s = i.videoHeight,
                        u = 0, c = t.effect.Extra;
                    t.stick_type === Re.FOLLOW ? u = Number(t.height_ratio) || 36 : c && (u = Number(t.height_ratio)), e = c.standard_width, n = c.standard_height;
                    var d = Math.max(o - l / s * a, 0), f = Math.max(a - s / l * o, 0), m = o - d, p = a - f,
                        v = Math.round(d / 2 + Number(t.margin_left) / 100 * m),
                        h = Math.round(f / 2 + Number(t.margin_top) / 100 * p), _ = Math.round(p * u * .01);
                    t.stick_type === Re.FOLLOW ? _ = Math.min(_, 160) : t.stick_type === Re.DIGG ? _ = Math.min(_, 440) : t.stick_type === Re.DANMAKU ? _ = Math.min(_, 1.45 * n) : (t.stick_type === Re.VOTE || t.stick_type === Re.COUPLET) && (_ = Math.min(_, Math.round(1.45 * n)));
                    var g = e / n, b = _ / n;
                    return {
                        baseUnit: b,
                        clientWidth: o,
                        clientHeight: a,
                        mainStyle: {
                            width: Math.round(_ * g),
                            height: _,
                            top: h,
                            left: v,
                            position: "absolute",
                            transform: "translate(-50%, -50%)",
                            "--baseUnit": "".concat(b, "px"),
                            zIndex: T ? 23 : 11
                        }
                    }
                }), [r.video, t, T]), G = (0, R.useState)(B), W = (0, m.Z)(G, 2), Y = W[0], q = W[1];
                (0, R.useLayoutEffect)((function () {
                    var e = ["enable_theaterMode", "disable_theaterMode", ji.HW, ji.GS, "miniscreenChange"],
                        t = function () {
                            q(B)
                        }, n = function () {
                            t(), setTimeout((function () {
                                t()
                            }), 0)
                        };
                    return window.addEventListener("resize", n), r.once("timeupdate", t), e.forEach((function (e) {
                        return r.on(e, t)
                    })), function () {
                        window.removeEventListener("resize", n), r.off("timeupdate", t), e.forEach((function (e) {
                            return r.off(e, t)
                        }))
                    }
                }), [B]);
                var K = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                    S.current = r.currentTime + e, L(!0)
                }, J = function () {
                    S.current = t.start_time + t.duration, L(!1)
                }, Q = function () {
                    E(!0)
                }, ee = function () {
                    var e = a.group_id, n = a.user_info.user_id, i = String(U.id) === String(n);
                    return {
                        group_id: e || "",
                        author_id: n,
                        is_following: D ? 1 : 0,
                        category_name: "pgc",
                        fullscreen: H ? "fullscreen" : "nofullscreen",
                        is_author_self: i ? 1 : 0,
                        video_pct: Number((r.currentTime / r.duration * 100).toFixed(1)),
                        video_time: Number((1e3 * r.currentTime).toFixed(0)),
                        show_duration: 1e3 * t.duration,
                        sticker_id: t.sticker_id,
                        is_login: A ? 1 : 0,
                        effect_id: t.effect.EffectId,
                        position: "detail",
                        section: "player_guide",
                        log_pb: o
                    }
                };
                return f ? function () {
                    switch (u) {
                        case Re.FOLLOW:
                            return t.follow_info ? R.createElement(ht, {
                                sticker: t,
                                show: j,
                                base: Y,
                                onValidAction: K,
                                onCancelValidAction: J,
                                resourceRef: v,
                                getStickerCommonParams: ee
                            }) : null;
                        case Re.DIGG:
                            return R.createElement(Nt, {
                                sticker: t,
                                show: j,
                                base: Y,
                                onValidAction: K,
                                onCancelValidAction: J,
                                resourceRef: v,
                                getStickerCommonParams: ee
                            });
                        case Re.XIGUA_PLAY_VOTE:
                            return R.createElement(Ot, {
                                sticker: t,
                                show: j,
                                base: Y,
                                onValidAction: K,
                                getStickerCommonParams: ee
                            });
                        case Re.DANMAKU:
                            return O ? null : R.createElement(xn, {
                                sticker: t,
                                show: j,
                                base: Y,
                                resourceRef: v,
                                onValidAction: K,
                                getStickerCommonParams: ee,
                                onCancelValidAction: J,
                                onManualClose: Q
                            });
                        case Re.VOTE:
                            return R.createElement(_i, {
                                sticker: t,
                                show: j,
                                base: Y,
                                onValidAction: K,
                                getStickerCommonParams: ee,
                                resourceRef: v,
                                onManualClose: Q
                            });
                        case Re.COUPLET:
                            return R.createElement(Ei, {
                                sticker: t,
                                show: j,
                                base: Y,
                                getStickerCommonParams: ee,
                                resourceRef: v,
                                onManualClose: Q
                            });
                        default:
                            return null
                    }
                }() : null
            };

        function Ci(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ii(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ci(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Ci(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Mi = function (e) {
                return e && e.Math == Math && e
            },
            Fi = Mi("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Mi("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Mi("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Mi("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Fi.globalThis = Fi, Fi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Li = function (e) {
            var t, n, i, r, o = e.player, a = (0, je.f)(), l = a.video, s = a.logInfo, u = (0, R.useState)(""),
                c = (0, m.Z)(u, 2), d = c[0], f = c[1],
                p = "mp4" === (null == o ? void 0 : o.playerType) && (null === (t = null === (n = o.config) || void 0 === n || null === (i = n.hasEmbedLogo) || void 0 === i ? void 0 : i.mp4) || void 0 === t || t),
                v = (0, R.useState)([]), h = (0, m.Z)(v, 2), _ = h[0], g = h[1], b = (0, R.useState)(!1),
                y = (0, m.Z)(b, 2), x = y[0], Z = y[1], E = (0, R.useState)(!1), j = (0, m.Z)(E, 2), S = j[0], k = j[1];
            return (0, R.useLayoutEffect)((function () {
                var t;
                if (e.stickerList) {
                    var n = e.stickerList, i = C()(new (ze())(N()(t = w()(n).call(n, (function (e) {
                        return e.sticker_effect_id
                    }))).call(t, Boolean)));
                    Ye.Z.video.getStickerByIds({effect_ids: i}).then((function (e) {
                        var t, i, r = e.data.data;
                        if (r.effects.length && r.urlPrefix) {
                            var o = new (Ge())(w()(t = r.effects).call(t, (function (e) {
                                return [e.EffectId, e]
                            })));
                            g(N()(i = w()(n).call(n, (function (e) {
                                var t = o.get(e.sticker_effect_id);
                                if (t) return Ii(Ii({}, e), {}, {effect: t})
                            }))).call(i, Boolean)), f(r.urlPrefix), Z(!0)
                        }
                    })).catch((function (e) {
                        console.log("get_sticker_list_err", e)
                    }))
                }
            }), []), (0, R.useEffect)((function () {
                if (o) {
                    var e = function () {
                        return k(!0)
                    }, t = function () {
                        return k(!1)
                    };
                    return o.on("canplay", e), o.on("play", e), o.on("ended", t), function () {
                        o.on("canplay", e), o.off("play", e), o.off("ended", t)
                    }
                }
            }), [o]), !p && o && null != l && l.user_info && _ && x && S ? R.createElement(nt.Provider, {
                value: {
                    video: l,
                    player: o,
                    logPb: null !== (r = s.logPb) && void 0 !== r ? r : {},
                    urlPrefix: d
                }
            }, w()(_).call(_, (function (e) {
                return Re[e.stick_type] ? We.createPortal(R.createElement(Ti, {sticker: e}), o.root) : null
            }))) : null
        }, Ri = n(90328), Oi = n(54998), Di = n.n(Oi), Ai = n(6639), Ui = n(10995), Xi = n(49970);

        function Vi(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Hi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Vi(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Vi(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        function zi(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !te()) return !1;
                if (te().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(te()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, le.Z)(e);
                if (t) {
                    var r = (0, le.Z)(this).constructor;
                    n = te()(i, arguments, r)
                } else n = i.apply(this, arguments);
                return (0, ae.Z)(this, n)
            }
        }

        var Bi = function (e) {
                return e && e.Math == Math && e
            },
            Gi = Bi("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Bi("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Bi("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Bi("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Gi.globalThis = Gi, Gi.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Wi = n(94529).encryptUtils, Yi = function (e) {
            (0, oe.Z)(n, e);
            var t = zi(n);

            function n(e) {
                var i, r;
                return (0, ne.Z)(this, n), r = t.call(this, e), (0, p.Z)((0, re.Z)(r), "addWatchHistoryHandler_Ref", null), (0, p.Z)((0, re.Z)(r), "context", void 0), (0, p.Z)((0, re.Z)(r), "player", void 0), (0, p.Z)((0, re.Z)(r), "startTimestamp", void 0), (0, p.Z)((0, re.Z)(r), "isSupportMse", void 0), (0, p.Z)((0, re.Z)(r), "goNextHanlder", void 0), (0, p.Z)((0, re.Z)(r), "dataDelegate", (function (e) {
                    var t = function (e) {
                        var t;
                        return void 0 === r.state[e] ? null === (t = r.context.video) || void 0 === t ? void 0 : t[e] : r.state[e]
                    };
                    return Array.isArray(e) ? w()(e).call(e, (function (e) {
                        return t(e)
                    })) : t(e)
                })), (0, p.Z)((0, re.Z)(r), "playerSection_Ref", R.createRef()), (0, p.Z)((0, re.Z)(r), "realSuperDiggHandler", void 0), (0, p.Z)((0, re.Z)(r), "getEventParams", (function () {
                    var e, t, n, i, o;
                    return {
                        log_pb: r.props.context.logInfo.logPb,
                        category_tag: r.props.context.video.tag,
                        item_id: r.props.context.item_id + "",
                        group_id: r.props.context.group_id + "",
                        position: "detail",
                        section: "button",
                        playlist_type: "playlist" === r.context.type ? "general" : void 0,
                        fullscreen: r.props.isFullscreen ? "fullscreen" : "nofullscreen",
                        author_id: null === (e = r.context.video.user_info) || void 0 === e ? void 0 : e.user_id,
                        is_following: r.context.isFollowGlobal ? 1 : 0,
                        category_name: "pgc",
                        is_author_self: r.props.globalConfig.identity.id === String(null === (t = r.context.video.user_info) || void 0 === t ? void 0 : t.user_id) ? 1 : 0,
                        digg_action: "one_click",
                        video_pct: Number(((null === (n = r.player) || void 0 === n ? void 0 : n.currentTime) / (null === (i = r.player) || void 0 === i ? void 0 : i.duration) * 100).toFixed(1)),
                        video_time: Number((1e3 * (null === (o = r.player) || void 0 === o ? void 0 : o.currentTime)).toFixed(1))
                    }
                })), (0, p.Z)((0, re.Z)(r), "getNextVideoSubTitle", (function (e) {
                    var t = e.authorName, n = e.author_id, i = e.video_watch_count;
                    return R.createElement(R.Fragment, null, t ? R.createElement(Ve.Z, {
                        name: t,
                        uid: n ? String(n) : void 0
                    }) : void 0, i ? " 路 ".concat((0, Se.aD)(i), "娆¤鐪�") : "")
                })), (0, p.Z)((0, re.Z)(r), "getNextVideoInfo", (function () {
                    var e, t, n,
                        i = {group_id: "", title: "", subTitle: "", cover: "", logPb: "{}", duration: 0, vid: ""},
                        o = !1, a = !(null === (e = r.context.pSeries) || void 0 === e || !e.seriesInfo),
                        l = a ? De.JG.pSeriesWatch : De.JG.shortvideo, s = (0, Ai.Z)(), u = (0, Xi.Z)(), c = r.props,
                        d = c.isFullscreen, f = c.context, m = c.urlParamsId, p = (f.relateVideos, function (e) {
                            var t = r.props.context.relateVideos && r.props.context.relateVideos.length > 0 && r.props.context.relateVideos[0].data || void 0;
                            if (void 0 !== t) {
                                var n, i, o, a, s, u = t.image_url,
                                    c = null !== (n = null == t || null === (i = t.user_info) || void 0 === i ? void 0 : i.name) && void 0 !== n ? n : "",
                                    d = null !== (o = null == t || null === (a = t.user_info) || void 0 === a ? void 0 : a.user_id) && void 0 !== o ? o : "",
                                    f = t.playNum,
                                    m = r.getNextVideoSubTitle({author_id: d, video_watch_count: f, authorName: c}),
                                    p = t.title, v = t.group_id,
                                    h = null === (s = t.pseries) || void 0 === s ? void 0 : s.id, _ = t.duration, g = t.vid;
                                return e.logPb = (0, Se.WS)({
                                    logPb: t.log_pb,
                                    rewrite: {sourcepage: l}
                                }), e = Hi(Hi({}, e), {}, {
                                    cover: u,
                                    title: p,
                                    subTitle: m,
                                    group_id: v,
                                    pSeriresId: h,
                                    duration: _,
                                    vid: g
                                })
                            }
                        }), v = s && d && a && !m;
                    if ("1" === Di()().query(!0).series_flow && v && (v = !1), u && v && (v = !1), v) return p(i);
                    if (r.context.nextToPlayVideo) {
                        var h = r.context.nextToPlayVideo;
                        return i = {
                            group_id: h.gid,
                            title: h.title,
                            subTitle: "",
                            logPb: h.log_pb || "{}",
                            cover: h.cover,
                            duration: h.duration || 0,
                            vid: "",
                            toPlayItem: h
                        }
                    }
                    if (r.context.nextVideoOfSpecialList || null !== (t = r.context.series) && void 0 !== t && t.seriesInfo || null !== (n = r.context.pSeries) && void 0 !== n && n.seriesInfo) {
                        var _, g, b, y, w, x, Z, E, j, S, k = {}, P = a ? r.context.pSeries : r.context.series,
                            N = P.videoList, T = P.id;
                        r.context.nextVideoOfSpecialList ? ((k = r.context.nextVideoOfSpecialList).pSeriesId && (i.pSeriresId = k.pSeriesId), "playlist" === r.context.type && (i.offset = k.offset, i.rank = k.rank), o = !0) : N && N.some((function (e, t) {
                            return t - 1 >= 0 && N[t - 1].group_id + "" === r.context.group_id && (k = e, a ? i.pSeriresId = T : i.seriresId = T, o = !0, i.vid = e.video_id || "", !0)
                        }));
                        var C, I = "playlist" === r.context.type && void 0 === r.context.nextVideoOfSpecialList,
                            M = r.context.video.rank === (null === (_ = r.context.pSeries.seriesInfo) || void 0 === _ ? void 0 : _.item_num);
                        if ("pSeriesLoop" === r.props.playLoopStatus) if (I) k = null === (C = r.context.playlist) || void 0 === C ? void 0 : C.firstVideo; else M && (k = r.context.pSeries.firstVideo, i.pSeriresId = T); else (M || I) && (i.playNextExplain = "涓轰綘鎺ㄨ崘瑙嗛");
                        var F = fe()(k, "video_detail_info.detail_video_large_image.url") || fe()(k, "middle_image.url"),
                            L = null !== (g = null === (b = k) || void 0 === b || null === (y = b.user_info) || void 0 === y ? void 0 : y.name) && void 0 !== g ? g : "",
                            R = null !== (w = null === (x = k) || void 0 === x || null === (Z = x.user_info) || void 0 === Z ? void 0 : Z.user_id) && void 0 !== w ? w : "",
                            O = null === (E = k) || void 0 === E || null === (j = E.video_detail_info) || void 0 === j ? void 0 : j.video_watch_count,
                            D = r.getNextVideoSubTitle({video_watch_count: O, author_id: R, authorName: L}),
                            A = k.title, U = k.group_id, X = k.video_duration, V = Hi(Hi({}, k.log_pb), {}, {
                                auto: "1",
                                parentLogPb: r.context.logInfo.parentLogPb,
                                from_gid: (null === (S = k.log_pb) || void 0 === S ? void 0 : S.group_id) || r.context.group_id,
                                sourcepage: l
                            });
                        if (i.logPb = Se.QW.stringify(V), a) {
                            var H, z = k.rank || 0, B = {
                                selection_tag: 1 === String(z).length ? "0".concat(String(z)) : String(z),
                                rank_in_block: z - 1,
                                from_gid: r.props.context.group_id,
                                key_name: we()(H = "".concat(r.props.context.group_id, "_")).call(H, k.group_id, "_0")
                            };
                            i.logPb = Se.QW.stringify(Hi(Hi({}, V), B))
                        }
                        if (i = Hi(Hi({}, i), {}, {
                                cover: F,
                                title: A,
                                subTitle: D,
                                group_id: U,
                                duration: X,
                                isPlayDirectly: o,
                                offset: k.offset,
                                rank: k.rank
                            }), U) return i
                    }
                    return p(i)
                })), (0, p.Z)((0, re.Z)(r), "getAlbumInfo", (function () {
                    var e, t, n, i, o;
                    return {
                        userInfo: Hi(Hi({}, null === (e = r.context.video) || void 0 === e ? void 0 : e.user_info), {}, {
                            userId: null === (t = r.context.video) || void 0 === t || null === (n = t.user_info) || void 0 === n ? void 0 : n.user_id,
                            avatarUrl: null === (i = r.context.video) || void 0 === i || null === (o = i.user_info) || void 0 === o ? void 0 : o.avatar_url
                        }), logPb: r.props.LogInfo_Ref.current.logPb
                    }
                })), (0, p.Z)((0, re.Z)(r), "goNext", (function () {
                    r.goNextHanlder && r.goNextHanlder()
                })), (0, p.Z)((0, re.Z)(r), "handlePlayError", (function (e) {
                    r.context.setShouldLoadOthers(!0), r.setState({playErrorInfo: e})
                })), (0, p.Z)((0, re.Z)(r), "isSeriesLike", (function () {
                    var e, t = r.props.context.type;
                    return j()(e = ["playlist", "series", "pSeries"]).call(e, t)
                })), (0, p.Z)((0, re.Z)(r), "endingRender", (function (e) {
                    var t = r.props, n = t.context, i = t.isFullscreen, o = t.urlParamsId, a = n.video, l = n.autoPlay,
                        s = a.title, u = e.diasbleAutoPlay || !l, c = r.getNextVideoInfo(), d = (0, Ai.Z)(),
                        m = Di()().query(!0).series_flow;
                    return !u && i && (u = r.isSeriesLike() && d && (o || "1" === m)), R.createElement(Pe.Z, (0, f.Z)({}, e, {
                        hasInteraction: !1,
                        title: s || "",
                        pauseAutoPlay: r.props.isInputtingComment,
                        nextVideo: c,
                        onGoNext: r.goNext,
                        diasbleAutoPlay: u,
                        log_pb: r.props.context.logInfo.logPb || "{}"
                    }))
                })), (0, p.Z)((0, re.Z)(r), "videoOver", X.Z.projection.createVideoOver()), (0, p.Z)((0, re.Z)(r), "getPipRight", (function () {
                    var e = document.querySelector(".Page_Projection__secondary__left");
                    if (null != e) {
                        var t = e.getBoundingClientRect();
                        return window.innerWidth - (t.x + t.width)
                    }
                    return 310
                })), (0, p.Z)((0, re.Z)(r), "getWatchProgress", (function () {
                    var e = r.props.context.video.history_duration;
                    if (e) return Number(e) / 1e3;
                    var t = (0, me.BP)({group_id: r.props.context.group_id});
                    return null != t ? t : 0
                })), (0, p.Z)((0, re.Z)(r), "getWathcHistoryParams", (function () {
                    var e;
                    return {
                        group_id: r.context.group_id,
                        pSeries_id: r.props.context.pSeries.id,
                        WatchProgress: 1e3 * (null === (e = r.player) || void 0 === e ? void 0 : e.currentTime),
                        subType: Ne.Cr.Video,
                        group_source: r.context.video.group_source ? Number(r.context.video.group_source) : void 0
                    }
                })), (0, p.Z)((0, re.Z)(r), "setWatchProgress", (function () {
                })), (0, p.Z)((0, re.Z)(r), "showReportDialog", (0, d.Z)(_().mark((function e() {
                    var t;
                    return _().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (t = {
                                        author_user_id: fe()(r.props.context, "video.user_info.user_id") + "",
                                        user_id: r.props.globalConfig.identity.id,
                                        group_id: r.context.group_id,
                                        log_pb: r.context.logInfo.logPb
                                    }, X.Z.common.clickTipOff(Hi(Hi({}, t), {}, {
                                        tip_off_type: "video",
                                        is_login: r.props.globalConfig.isLogin ? 1 : 0
                                    })), r.props.globalConfig.isLogin) {
                                    e.next = 5;
                                    break
                                }
                                return Ue.ZP.show({source: "login"}), e.abrupt("return");
                            case 5:
                                return e.next = 7, Ye.Z.user.isLogout();
                            case 7:
                                if (!e.sent) {
                                    e.next = 12;
                                    break
                                }
                                return Xe.Z.error("璐﹀彿鎺堟潈杩囨湡锛岃閲嶆柊鐧诲綍"), Ue.ZP.show({source: "login"}), e.abrupt("return");
                            case 12:
                                Ae.Z.reuse({
                                    type: "video",
                                    params: {
                                        item_id: r.props.context.item_id,
                                        group_id: r.props.context.item_id + "",
                                        video_id: r.props.context.video.vid
                                    },
                                    eventParams: t,
                                    groupId: r.state.group_id
                                });
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))), (0, p.Z)((0, re.Z)(r), "isUserAuthor", (function () {
                    var e, t;
                    return String(null === (e = r.context.video) || void 0 === e || null === (t = e.user_info) || void 0 === t ? void 0 : t.user_id) === String(r.props.globalConfig.identity.id)
                })), (0, p.Z)((0, re.Z)(r), "playerInstanceConfig", (function () {
                    var e, t, n, i = r.props.context.video.videoResource || {}, o = i.dash, a = i.dash_120fps;
                    return ("dash" !== (null === (n = ((null == o || null === (e = o.dynamic_video) || void 0 === e ? void 0 : e.dynamic_video_list) || (null == a || null === (t = a.dynamic_video) || void 0 === t ? void 0 : t.dynamic_video_list) || [])[0]) || void 0 === n ? void 0 : n.vtype) || (0, Ri.L_)()) && r.isSupportMse ? {
                        preset: "mp4Mse",
                        playerId: "mp4-player"
                    } : void 0 !== r.isSupportMse ? {preset: "default", playerId: "player_default"} : {
                        preset: "",
                        playerId: ""
                    }
                })), r.state = {
                    group_id: (null === (i = r.props.context) || void 0 === i ? void 0 : i.video.group_id) || "",
                    user_bury: void 0,
                    user_digg: r.props.context.isDiggGlobal || !1,
                    user_super_digg: void 0,
                    video_unlike_count: void 0,
                    video_like_count: void 0,
                    videoInfo: void 0,
                    isNextVideosHide: !1,
                    isPlayerLoadedData: !1,
                    playErrorInfo: void 0,
                    lastCurrentTime: r.getWatchProgress(),
                    startPlay: !1,
                    isShowDanmaku: !1
                }, r
            }

            return (0, ie.Z)(n, [{
                key: "componentWillUnmount", value: function () {
                    clearTimeout(this.realSuperDiggHandler)
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.isSupportMse = Wi.isSupported();
                    var e = Di()().query(!0), t = e.envoke_tipoff, n = e.envoke_comment_tipoff;
                    if ("1" === t && !this.isUserAuthor()) return this.props.globalConfig.isLogin || Xe.Z.warning("璇风櫥褰曞悗鍐嶈繘琛屾搷浣�", 5e3), void this.showReportDialog();
                    n && n.length > 10 && !isNaN(Number(n)) && Ae.Z.reuse({
                        type: "comment",
                        params: {
                            group_id: this.context.group_id,
                            user_id: String(this.props.globalConfig.identity.id),
                            comment_id: n
                        }
                    })
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    var e, t = null === (e = this.props.context.video) || void 0 === e ? void 0 : e.group_id;
                    if (t && this.state.group_id !== t && (this.videoOver = X.Z.projection.createVideoOver(), this.startTimestamp = void 0, this.setState({
                            lastCurrentTime: this.getWatchProgress(),
                            group_id: t,
                            video_like_count: this.context.video.video_like_count,
                            user_super_digg: !!this.context.video.user_super_digg,
                            playErrorInfo: void 0
                        })), this.context.isDiggGlobal !== this.state.user_digg) {
                        var n = this.dataDelegate(["video_like_count"]), i = (0, m.Z)(n, 1)[0];
                        this.setState({
                            user_digg: this.context.isDiggGlobal,
                            video_like_count: Math.max(this.context.isDiggGlobal ? i + 1 : i - 1, 0)
                        })
                    }
                    this.context.isSuperDiggGlobal !== this.state.user_super_digg && this.setState({user_super_digg: this.context.isSuperDiggGlobal})
                }
            }, {
                key: "render", value: function () {
                    var e, t, n, i = this, r = this.props.handleFullscreenListVisible, o = this.props.context,
                        a = o.logInfo, l = (o.type, o.coCreatorList), s = o.updateCoCreatorFollowStatus,
                        u = o.isFollowGlobal, c = (0, Ai.Z)(), d = this.isSeriesLike() && c,
                        f = this.props.context.video.sticker_list, p = this.props.context.video.video_watch_count,
                        v = void 0 === p ? "0" : p, h = this.dataDelegate(["super_digg_control", "video_like_count"]),
                        _ = (0, m.Z)(h, 1)[0];
                    _ = (0, Se.aD)(_), v = (0, Se.aD)(v);
                    var g = this.getNextVideoInfo(), b = this.getAlbumInfo();
                    this.goNextHanlder = function () {
                        var e = i.props.generatGoNextHanlder(g);
                        e && e()
                    };
                    var y = void 0 === this.state.lastCurrentTime || !this.props.context.video.vid,
                        w = !!this.state.playErrorInfo || this.context.isFetchFailed, x = Oe(this.props.context.video),
                        Z = Di()().query(!0).from_page;
                    return R.createElement(Ie.S, {autoRefresh: !0}, R.createElement("div", {
                        className: "playerSection__left player",
                        ref: this.playerSection_Ref
                    }, R.createElement(Ce.G, {targetElement_Ref: this.playerSection_Ref}), w ? R.createElement(Ee.Z, {
                        preset: this.context.isFetchFailed ? "fetchFailed" : "default",
                        errorInfo: this.state.playErrorInfo
                    }) : R.createElement(R.Fragment, null, R.createElement("div", {
                        className: D()("playerContainer__wrapper", {"full-screen": this.props.isFullscreen}),
                        ref: this.props.playerWrapperRef
                    }, this.playerInstanceConfig().preset ? R.createElement(ke.ZP, {
                        className: "playerContainer",
                        fullscreenContainer: "undefined" == typeof window ? void 0 : document.documentElement,
                        logo: x,
                        getPipRight: this.getPipRight,
                        onBufferIsSufficient: this.props.context.onBufferIsSufficient,
                        videoResource: this.props.context.video.videoResource,
                        extraConfigList: ["pip"],
                        isVr: null === (e = this.props.context.video) || void 0 === e ? void 0 : e.is_vr,
                        onTheaterModeChange: function (e) {
                            i.props.setIsTheater(e)
                        },
                        defaultTheaterMode: this.props.isTheater,
                        defaultFullscreenMode: this.props.isFullscreen,
                        onFullscreenModeChange: function (e) {
                            i.props.setIsFullscreen(e)
                        },
                        showCollectionBtn: d,
                        showFullscreenAuthor: c,
                        showFullscreenTitle: c,
                        handleFullscreenListVisible: r,
                        onClickCollectionBtn: function () {
                            var e;
                            Ui.Z.fullscreen_collection_btn({
                                author_id: null === (e = i.context.video.user_info) || void 0 === e ? void 0 : e.user_id,
                                is_following: i.context.isFollowGlobal ? 1 : 0,
                                category_name: "series" === i.context.type ? "pgc" : "related",
                                group_id: i.props.context.item_id,
                                player_status: i.props.isFullscreen ? "fullscreen " : "noFullscreen",
                                video_type: "series" === i.context.type ? "playlist" : "series"
                            }), r && r(!0)
                        },
                        title: null === (t = this.context.video) || void 0 === t ? void 0 : t.title,
                        albumInfo: b,
                        isLVideo: !1,
                        lastCurrentTime: this.state.lastCurrentTime,
                        vid: y ? "" : null === (n = this.context.video) || void 0 === n ? void 0 : n.vid,
                        duration: this.context.video.video_duration,
                        onLoadedData: function (e) {
                            i.setState({isPlayerLoadedData: !0})
                        },
                        onPlayerInit: function (e, t) {
                            var n, r;
                            i.player = t, null === (n = i.props) || void 0 === n || null === (r = n.onPlayerInit) || void 0 === r || r.call(n, e, t)
                        },
                        onClickNext: g && this.goNext,
                        nextVideoInfo: g,
                        onEnded: function () {
                            i.videoOver.finish(), i.setWatchProgress()
                        },
                        playLoopList: this.props.playLoopList,
                        playLoopStatus: this.props.playLoopStatus,
                        setPlayLoopStatus: this.props.setPlayLoopStatus,
                        isFollowGlobal: u,
                        coCreatorList: l,
                        updateCoCreatorFollowStatus: s,
                        LogInfo_Ref: this.props.LogInfo_Ref,
                        onPlay: function () {
                            if (!i.startTimestamp) {
                                i.startTimestamp = Date.now(), i.setState({startPlay: !0}), Te.Z.videoPlay(a.logPb);
                                var e = "1" === a.auto ? "" : Z;
                                X.Z.projection.videoPlay(Hi(Hi({from_page: e}, i.getEventParams()), {}, {
                                    log_pb: a.logPb,
                                    auto: "1" === a.auto,
                                    parentLogPb: a.isAncestor ? void 0 : a.parentLogPb,
                                    from_gid: a.from_gid,
                                    player_status: i.props.isFullscreen ? "fullscreen " : "noFullscreen"
                                })), i.videoOver.init((function () {
                                    var t = i.player, n = "0.0";
                                    if (t.duration && !isNaN(t.duration)) {
                                        var r = t.currentTime / t.duration * 100;
                                        Ze()(r) || (n = r.toFixed(1))
                                    }
                                    var o, l = "0.0";
                                    if (t.duration && !isNaN(t.duration)) {
                                        var s = i.state.lastCurrentTime;
                                        if (s) {
                                            var u = s / t.duration * 100;
                                            Ze()(u) || (l = u.toFixed(1))
                                        }
                                    }
                                    return Hi(Hi(Hi({}, i.getEventParams()), null == t ? void 0 : t.xgpcInfo), {}, {
                                        auto: "1" === a.auto,
                                        percent: n,
                                        log_pb: a.logPb,
                                        from_gid: a.from_gid,
                                        from_percent: l,
                                        clarity_choose: t.config.clarityChoose,
                                        clarity_actual: t.config.clarityActual,
                                        clarity_num: t.config.clarity_num,
                                        is_support_subtitle: Number(Boolean((0, Ri.WU)(t.config))),
                                        from_page: e
                                    }, (o = document.querySelector(".xgplayer-subtitle li.selected")) ? {
                                        subtitle_id: o.dataset.id,
                                        subtitle_version: o.dataset.source
                                    } : {})
                                })), i.videoOver.start();
                                var t = (0, me.dy)(i.getWathcHistoryParams, i.player),
                                    n = t.unregisterWathcHistoryHeartBeat, r = t.setWatchProgress;
                                i.setWatchProgress = r, i.props.addPageLeaveTask((function () {
                                    n(), i.videoOver.finish()
                                }))
                            }
                        },
                        onError: this.handlePlayError,
                        endingRender: this.endingRender,
                        preset: this.playerInstanceConfig().preset,
                        playerId: this.playerInstanceConfig().playerId
                    }) : R.createElement("div", {className: "empty-player"}), !y && R.createElement(Li, {
                        stickerList: f,
                        player: this.player
                    })))))
                }
            }], [{
                key: "getDerivedStateFromProps", value: function (e, t) {
                    var n;
                    return "" === (null === (n = e.context.video) || void 0 === n ? void 0 : n.vid) && void 0 !== t.lastCurrentTime ? {lastCurrentTime: void 0} : {}
                }
            }]), n
        }(R.Component);
        (0, p.Z)(Yi, "contextType", je.Z);
        var qi = (0, pe.p)(Yi), Ki = n(51615), Ji = n(58581), Qi = n(57119), $i = n(91481), er = n(86309),
            tr = n(10173), nr = n(27351), ir = n(39939), rr = n(31360), or = n(63274);

        function ar(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function lr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ar(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : ar(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var sr = function (e) {
                return e && e.Math == Math && e
            },
            ur = sr("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || sr("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || sr("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || sr("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ur.globalThis = ur, ur.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var cr = [{type: ir.R.PSERIES_LOOP, name: "鍒楄〃寰幆"}, {
                type: ir.R.VIDEO_LOOP,
                name: "鍗曢泦寰幆"
            }, {type: ir.R.NO_LOOP, name: "涓嶅惊鐜�"}], dr = ["pSeries", "playlist"], fr = function (e) {
                var t = e.LogInfo_Ref, n = e.paramGroupId, i = e.showIframeShareRef, r = e.setShowIframeShare, o = e.type,
                    a = e.paramPSeriesId, l = e.paramUserId, s = e.isInputtingComment, u = e.isTheater, c = e.setIsTheater,
                    d = e.isFullscreen, f = e.setIsFullscreen, p = e.globalConfig, v = e.urlParamsId, h = l || a,
                    _ = (0, Ki.UO)().userId, g = (0, tr.Z)(), b = g.order, y = g.filterTS, w = function () {
                        return j()(dr).call(dr, o) && (0, $i.G)("pSeriesLoop") === h ? "pSeriesLoop" : "noLoop"
                    }, x = (0, R.useState)(w()), Z = (0, m.Z)(x, 2), E = Z[0], S = Z[1], k = (0, R.useState)(!1),
                    P = (0, m.Z)(k, 2), T = P[0], C = P[1], I = (0, Ki.k6)(), M = (0, R.useRef)(),
                    F = (0, or.Z)().updateCurrent, L = (0, R.useCallback)((function (e) {
                        if (e) return function () {
                            var t = (0, Q.ZF)({
                                gid: e.group_id,
                                seriresId: e.seriresId,
                                pSeriresId: e.pSeriresId,
                                query: {logPb: e.logPb}
                            }), n = t.href, i = t.query, r = (0, er.G9)({
                                nameSpace: nr.HB,
                                key: nr.VD,
                                data: lr(lr({}, i), {}, {auto: "1"}),
                                capacity: 50
                            }), a = e.rank, l = e.offset;
                            if ("playlist" === o && "number" == typeof a && "number" == typeof l && _ && (n = (0, Se.S4)({
                                    authorId: _,
                                    rank: a,
                                    offset: l,
                                    order: b,
                                    filterTS: y
                                })), "toPlaylist" === o && e.toPlayItem) {
                                var s = e.toPlayItem, u = (0, Q.SM)({gid: s.gid, query: {logPb: s.log_pb}});
                                F(s);
                                var c = (0, rr.L4)(lr({}, u));
                                I.push(c)
                            } else {
                                var d = new (Di())(n).addQuery(r).href();
                                (0, Qi.Z)() ? I.push(d) : window.location.href = globalThis.getFilterXss().filterUrl(d, null, {
                                    logType: "js.window.location",
                                    reportOnly: "all"
                                })
                            }
                        }
                    }), [t.current.parentLogPb, I, n, o]), O = N()(cr).call(cr, (function (e) {
                        return j()(dr).call(dr, o) || "pSeriesLoop" !== e.type
                    }));
                return (0, R.useEffect)((function () {
                    var e = (0, Ji.ZP)();
                    (0, Ji.ZP)((0, $i.RO)((0, $i.an)())) === e && Te.Z.videoRecommendClick()
                }), []), (0, R.useEffect)((function () {
                    "pSeriesLoop" === E ? (0, $i.t_)("pSeriesLoop", h) : (0, $i.VV)("pSeriesLoop")
                }), [E, h]), {
                    playerInstanceRef: M,
                    onQuickShare: function (e) {
                        if ("iframe" === e) {
                            document.body.classList.add("lock-scroll"), r(!0);
                            var t = null == M ? void 0 : M.current;
                            t && (t.config.keyShortcut = "off"), null == t || t.pause()
                        }
                    },
                    generatGoNextHanlder: L,
                    onPlayerInit: function (e, t) {
                        M.current = t, t.once("playing", (function () {
                            i.current && t.pause()
                        }))
                    },
                    playLoopList: O,
                    setPlayLoopStatus: function (e) {
                        S(e)
                    },
                    playLoopStatus: E,
                    LogInfo_Ref: t,
                    initialPlayLoopState: function () {
                        S(w())
                    },
                    isInputtingComment: s,
                    isTheater: u,
                    setIsTheater: c,
                    isFullscreen: d,
                    setIsFullscreen: f,
                    globalConfig: p,
                    showFullscreenList: T,
                    handleFullscreenListVisible: function (e) {
                        C(e)
                    },
                    urlParamsId: v
                }
            }, mr = function (e) {
                return e && e.Math == Math && e
            },
            pr = mr("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || mr("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || mr("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || mr("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        pr.globalThis = pr, pr.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var vr = qi, hr = (n(4723), n(17727), n(59314)), _r = n(30829), gr = n(25392), br = n(79112), yr = n(65050),
            wr = n(829), xr = n(65596);

        function Zr(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Er(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zr(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Zr(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var jr = function (e) {
                return e && e.Math == Math && e
            },
            Sr = jr("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || jr("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || jr("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || jr("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Sr.globalThis = Sr, Sr.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var kr = function (e) {
                var t = e.inView, n = e.onClick, i = e.anchorProps, r = e.data, o = r.img, a = r.tag, l = r.title,
                    s = r.author, u = r.link_page, c = r.id, d = Er(Er({}, i), {}, {
                        href: globalThis.getFilterXss().filterUrl(u, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }), title: l, onClick: n
                    });
                return R.createElement(R.Fragment, {key: c}, R.createElement("div", {className: "HorizontalFeedCard projection_recommentItem projection_recommentItem__activity"}, R.createElement("div", {className: "HorizontalFeedCard__coverContainer"}, R.createElement(xr.Z, (0, f.Z)({}, d, {className: "HorizontalFeedCard__coverWrapper"}), R.createElement(wr.Z, {
                    src: globalThis.getFilterXss().filterUrl(o, null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), inView: t
                }))), R.createElement("div", {className: "HorizontalFeedCard__contentWrapper"}, R.createElement(xr.Z, (0, f.Z)({}, d, {className: "HorizontalFeedCard__title"}), R.createElement("i", {className: "HorizontalFeedCard__activityTag"}, a), l), R.createElement("div", {className: "HorizontalFeedCard__bottomInfo"}, R.createElement(xr.Z, (0, f.Z)({}, d, {
                    title: "",
                    className: "HorizontalFeedCard-accessories-bottomInfo__author"
                }), s)))))
            }, Pr = n(23493), Nr = n.n(Pr), Tr = n(17097), Cr = n(32366), Ir = n.n(Cr), Mr = n(2960), Fr = n(12011),
            Lr = n(56050), Rr = function (e) {
                return e && e.Math == Math && e
            },
            Or = Rr("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Rr("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Rr("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Rr("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Or.globalThis = Or, Or.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Dr = [], Ar = function () {
            var e = (0, d.Z)(_().mark((function e(t) {
                var n, i, r, o, a, l, s, u, c, d, f, m, p, v;
                return _().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (l = Fr.Z.getMyABInfoV2(), s = null !== (n = null === (i = l.preload_list_video) || void 0 === i ? void 0 : i.enable) && void 0 !== n && n, u = null !== (r = null === (o = l.preload_list_video) || void 0 === o ? void 0 : o.maxLoadCount) && void 0 !== r ? r : 0, c = (0, Ri.bk)(), d = t.list, f = t.player, m = t.orderOffset, p = void 0 === m ? 0 : m, s && !c && f && f.addDashPreloaderList) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return");
                        case 7:
                            v = L()(a = Ir()(d).call(d, (function (e, t) {
                                var n, i = t.vid, r = t.resource;
                                if (j()(Dr).call(Dr, i) || !r) return (0, Dt.Z)(e);
                                r = (0, Lr.Z)(r), Dr.push(i);
                                var o = (0, Mr.Z)(), a = {
                                    order: p + e.length,
                                    data: {
                                        vid: i,
                                        duration: r.video_duration,
                                        payload: r.dynamic_video,
                                        defaultDefinition: o,
                                        time: 0,
                                        useAbr: !0,
                                        vtype: "DASH"
                                    }
                                };
                                return we()(n = []).call(n, (0, Dt.Z)(e), [a])
                            }), [])).call(a, 0, u), f.addDashPreloaderList(v), Dr.length > 50 && (Dr = L()(Dr).call(Dr, 50));
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), Ur = Ar, Xr = n(81497), Vr = n(79092);

        function Hr(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function zr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Hr(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Hr(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Br = function (e) {
                return e && e.Math == Math && e
            },
            Gr = Br("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Br("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Br("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Br("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Gr.globalThis = Gr, Gr.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Wr = function (e) {
                var t = (0, je.f)(), n = t.autoPlay, i = t.logInfo, r = t.pSeries, o = t.playerInstanceRef,
                    a = t.shouldLoadOthers, l = (0, R.useState)(!1), s = (0, m.Z)(l, 2), u = s[0], c = s[1], d = e.videos,
                    f = e.autoPlayControl, p = e.onAutoPlayChange, v = e.hasMore, h = e.loadMore, _ = e.loading,
                    g = e.isLoadError, b = e.hasSpiderVideo, y = !!(0, Ki.TH)().pathname.match(/^\/toplay/),
                    x = (0, R.useMemo)((function () {
                        return d ? w()(d).call(d, (function (e, t) {
                            var n = e.data;
                            return zr(zr({}, n), {}, {
                                videoId: n.group_id,
                                tag: n.tag,
                                image_uri: n.image_uri,
                                image_url: n.image_url,
                                videoTitle: n.title,
                                durationText: (0, Se.LU)(n.duration),
                                activityData: n.isActivity ? n : void 0
                            })
                        })) : []
                    }), [d]), Z = (0, R.useRef)(0), E = (0, R.useRef)(null), j = (0, Je.jY)();
                if ((0, R.useEffect)((function () {
                        if (o.current && (null == d ? void 0 : d.length) > 0) {
                            var e, t = w()(e = L()(d).call(d, 0, 10)).call(e, (function (e, t) {
                                var n = e.data;
                                return {vid: n.vid, resource: n.preloadVideoResource}
                            }));
                            Ur({list: t, orderOffset: 30, player: o.current})
                        }
                    }), [d, null == d ? void 0 : d[0], o]), (0, R.useLayoutEffect)((function () {
                        if (!1 === _) {
                            var e = !1, t = Nr()((function () {
                                if (!e) {
                                    var n = Z.current,
                                        i = (document.scrollingElement || document.documentElement).scrollTop;
                                    if (i < n) Z.current = i; else if (Z.current = i, E.current) E.current.getBoundingClientRect().bottom < 636 + (window.innerHeight || document.documentElement.clientHeight) && (e = !0, null == h || h().then(t).finally((function () {
                                        return e = !1
                                    })))
                                }
                            }), 300);
                            return v && (t(), window.addEventListener("scroll", t)), function () {
                                window.removeEventListener("scroll", t)
                            }
                        }
                    }), [a, h, v]), (0, R.useEffect)((function () {
                        a && (null == h || h().finally((function () {
                            return c(!0)
                        })))
                    }), [a, h]), !u && !b) return R.createElement(Xr.F_, {className: "projection_recomment", count: 16});
                return R.createElement("div", {className: "projection_recomment"}, f ? R.createElement("div", {className: D()("auto-play-control")}, R.createElement("div", null, "鎺ヤ笅鏉ユ挱鏀�"), R.createElement("div", null, "鑷姩鎾斁"), R.createElement(hr.Z, {
                    defaultChecked: n,
                    onChange: p
                })) : R.createElement("div", {className: "projection_recomment__title"}, "涓轰綘鎺ㄨ崘"), R.createElement("div", {
                    className: "projection_recomment__list",
                    ref: E
                }, w()(x).call(x, (function (e, t) {
                    var n, o, a, l, s, u, c = e.activityData;
                    if (c) {
                        var d, m = c.id, p = c.title, v = c.tag, h = {rank: t + 1, card_id: m, card_title: p, card_tag: v};
                        try {
                            d = JSON.parse(i.logPb || "{}")
                        } catch (e) {
                            d = i.logPb
                        }
                        return R.createElement(kr, {
                            data: c,
                            inView: function () {
                                return X.Z.recommentActivity.activityShow(h)
                            },
                            onClick: function () {
                                return X.Z.recommentActivity.activityClick(h)
                            },
                            anchorProps: zr(zr({}, (0, Q.ZF)({
                                query: {
                                    logPb: "{}",
                                    from_gid: d.group_id,
                                    recommend_type: "relate_card",
                                    impr_type: "__pc_detail__",
                                    category_name: "related",
                                    card_id: m,
                                    card_title: p,
                                    card_tag: v
                                }
                            })), {}, {target: "_blank"})
                        })
                    }
                    return R.createElement(R.Fragment, {key: e.videoId}, R.createElement(_r.Z, {
                        inView: function () {
                            return X.Z.common.videoShow({log_pb: e.log_pb, rank_in_block: t + 1})
                        },
                        className: "projection_recommentItem",
                        title: e.videoTitle,
                        coverURL: e.image_url,
                        RBTag: e.durationText,
                        anchorProps: zr(zr({}, (0, Q.ZF)({
                            gid: e.videoId,
                            query: {
                                logPb: e.log_pb,
                                sourcepage: r.id ? De.JG.pSeriesWatch : De.JG.shortvideo,
                                from_gid: i.group_id,
                                series_flow: (u = !!r.id, u ? 1 : "")
                            }
                        })), {}, {target: "_self", isRouterLink: (0, Qi.Z)()}),
                        bottomInfo: R.createElement(R.Fragment, null, null !== (n = e.co_creators_video_info) && void 0 !== n && n.creator_list ? R.createElement("div", null, R.createElement(Vr.Z, {
                            fontSize: 13,
                            coCreatorList: e.co_creators_video_info.creator_list
                        })) : R.createElement("div", null, R.createElement(gr.Z, {
                            authorInfo: e.user_info,
                            onAuthorNameClick: function () {
                                return function (e) {
                                    var t, n;
                                    Tr.Z.authorInfoClick({
                                        log_pb: (0, Se.ST)(e.log_pb, ["page_type", "sourcepage"], ["anyVideo", "shortvideo"]),
                                        click_position: "name",
                                        user_status: j.id === String(null === (t = e.user_info) || void 0 === t ? void 0 : t.user_id) ? "author" : "guest",
                                        is_following: null !== (n = e.user_info) && void 0 !== n && n.follow ? 1 : 0,
                                        detail_section: "recommend"
                                    })
                                }(e)
                            }
                        })), R.createElement("div", null, R.createElement(gr.Z, {video_watch_count: e.playNum}))),
                        authorInfo: e.user_info,
                        videoURL: e.preview_url,
                        clientShowParams: {log_pb: e.log_pb},
                        defaultIsCollected: !!e.video_user_like,
                        authorUserId: null === (o = e.user_info) || void 0 === o ? void 0 : o.user_id,
                        authorUserFollow: null === (a = e.user_info) || void 0 === a ? void 0 : a.follow,
                        gid: e.group_id,
                        categoryName: "xg_pc_related_channel_new",
                        isInToPlayDetails: y,
                        disableDefaultAuthorInfo: !0,
                        isCoCreate: null === (l = e.co_creators_video_info) || void 0 === l ? void 0 : l.is_co_creators_video,
                        coCreatorList: null === (s = e.co_creators_video_info) || void 0 === s ? void 0 : s.creator_list
                    }), f && 0 === t && R.createElement("div", {className: "hr"}))
                })), e.loading && v && 0 === x.length ? R.createElement("div", {className: "projection_recomment__loading"}, R.createElement(br.W_, null), "瑙嗛鍔犺浇涓�") : R.createElement(yr.Z, {
                    text: {
                        more: "瑙嗛鍔犺浇涓�",
                        end: g ? "鍔犺浇澶辫触" : "鍏ㄩ儴鍔犺浇瀹屾垚"
                    }, hasMore: v
                })))
            }, Yr = n(17082), qr = n(88973), Kr = n(32089), Jr = n(67209), Qr = function (e) {
                return e && e.Math == Math && e
            },
            $r = Qr("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Qr("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Qr("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Qr("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        $r.globalThis = $r, $r.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var eo = function (e) {
                var t = e.LogInfo_Ref, n = e.group_id, i = e.spiderVideo, r = void 0 === i ? [] : i,
                    o = (0, R.useState)(!0), a = (0, m.Z)(o, 2), l = a[0], s = a[1], u = (0, R.useState)(!1),
                    c = (0, m.Z)(u, 2), d = c[0], f = c[1], p = (0, R.useState)(!1), v = (0, m.Z)(p, 2), h = v[0], _ = v[1],
                    g = (0, Yr.Z)(void 0), b = (0, m.Z)(g, 3), y = b[0], w = b[1], x = b[2], Z = (0, R.useRef)(),
                    E = (0, R.useRef)(!1), j = (0, R.useRef)(1), S = (0, R.useCallback)((function (e) {
                        E.current = e, f(e)
                    }), [f]), P = (0, R.useCallback)((function () {
                        var e;
                        if ((0, Jr.E)(window.navigator.userAgent).result) return k().resolve();
                        var i = x.current;
                        if (E.current || i && (null == i ? void 0 : i.length) >= 60) return k().resolve();
                        S(!0);
                        var r = (null == i || null === (e = i[i.length - 1]) || void 0 === e ? void 0 : e.maxTime) || void 0,
                            o = "string" == typeof t.current.logPb ? JSON.parse(t.current.logPb) : t.current.logPb || {};
                        return k().resolve(Z.current).then((function () {
                            return Ye.Z.feed.getFeedById({
                                channelId: qr.Z.RELATED_RECOMMENT,
                                count: 20,
                                maxTime: r,
                                queryCount: j.current,
                                request_from: Kr.yo.IXIGUA_INFO,
                                related_gid: n,
                                list_entrance: o.list_entrance,
                                author_id: o.author_id,
                                enable_preloadVideo: "1"
                            }).then((function (e) {
                                var t, n = e.data,
                                    r = we()(t = []).call(t, (0, Dt.Z)(i || []), (0, Dt.Z)(n.data.channelFeed.Data));
                                j.current++, w(r), (r.length >= 50 || !1 === n.data.channelFeed.HasMore || 0 === n.data.channelFeed.Data.length || j.current > 5) && s(!1)
                            })).catch((function (e) {
                                s(!1), _(!0)
                            })).finally((function () {
                                return S(!1)
                            }))
                        }))
                    }), [x, S, t, n, w]), N = r.length > 0;
                return {
                    hasMore: l,
                    loadMore: P,
                    isLoadError: h,
                    loading: d,
                    videos: N ? r : y,
                    relateVideos: y,
                    hasSpiderVideo: N,
                    fetchRelated: P,
                    resetRelatedSetting: function () {
                        w([]), s(!0), _(!1), S(!1)
                    }
                }
            }, to = function (e) {
                return e && e.Math == Math && e
            },
            no = to("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || to("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || to("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || to("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        no.globalThis = no, no.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var io = Wr, ro = n(44624), oo = n(75843), ao = n(82955), lo = n(96453), so = function (e) {
                return e && e.Math == Math && e
            },
            uo = so("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || so("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || so("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || so("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        uo.globalThis = uo, uo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var co = (0, oo.bZ)([])((function (e) {
                var t, i, r, o, a = e.subtitleForScrawler, l = e.kvideoData, s = (0, R.useRef)(null),
                    u = (0, R.useContext)(je.Z), c = u.video, d = u.logInfo, f = (0, R.useState)(!0), p = (0, m.Z)(f, 2),
                    v = p[0], h = p[1], _ = (0, R.useState)([]), g = (0, m.Z)(_, 2), b = g[0], y = g[1], x = c.user_info,
                    Z = void 0 === x ? {} : x, E = c.video_abstract, j = void 0 === E ? "" : E, S = c.video_watch_count,
                    k = void 0 === S ? "" : S, P = c.video_publish_time, T = c.video_reprinted_info, C = c.is_original,
                    I = c.danmaku_count, M = void 0 === I ? 0 : I, F = (c.risk_warning, c.xg_video_rich_text),
                    L = c.address, O = (0, R.useState)(!1), A = (0, m.Z)(O, 2), U = A[0], V = A[1],
                    H = (0, R.useMemo)((function () {
                        return [(0, ao.lB)({
                            xg_title_rich_text: null == F ? void 0 : F.xg_abstract_rich_text,
                            at_position: "description",
                            category_name: d.logPb.category_name,
                            isUserCardInViewed: U,
                            userCardInView: function () {
                                return V(!0)
                            }
                        })]
                    }), [null == F ? void 0 : F.xg_abstract_rich_text, U, d.logPb]), z = (0, R.useState)(j),
                    B = (0, m.Z)(z, 2);
                B[0], B[1];
                null === Z && (Z = {});
                N()(t = [R.createElement("span", {key: "watchCount"}, (0, Se.aD)(k), "娆¤鐪�"), M && !c.ban_danmaku ? R.createElement("span", {key: "danmaku_count"}, (0, Se.aD)(M), "鏉″脊骞�") : void 0, R.createElement("span", {
                    className: "videoDesc__publishTime xiguabuddy",
                    key: "videoDesc__publishTime",
                    "data-publish-time": String(P)
                }, "鍙戝竷浜� ", P && (0, Se.YI)(Number(P))), L ? R.createElement("span", {className: "videoDesc__ipAddress xiguabuddy"}, " ", "鍦扮偣鏈煡" === L ? L : "鍙戝竷浜�".concat(L)) : null, !0 === C ? R.createElement("span", {key: "type"}, "鍘熷垱") : null]).call(t, Boolean);
                var G,
                    W = N()(i = [!0 === C ? R.createElement("span", {key: "type"}, "鍘熷垱") : null, R.createElement("span", {key: "watchCount"}, (0, Se.aD)(k), "娆¤鐪�"), M && !c.ban_danmaku ? R.createElement("span", {key: "danmaku_count"}, (0, Se.aD)(M), "鏉″脊骞�") : void 0, R.createElement("span", {
                        className: "videoDesc__publishTime xiguabuddy",
                        key: "videoDesc__publishTime",
                        "data-publish-time": String(P)
                    }, P && (0, Se.YI)(Number(P)), "鍙戝竷")]).call(i, Boolean), Y = (0, R.useRef)(0),
                    q = (0, ro.Z)(void 0, "width", []), K = (0, m.Z)(q, 2), J = K[0], Q = K[1];
                if (T) {
                    var $ = JSON.parse(T) || {};
                    2 === $.content_status && (G = $.show_content)
                }
                (0, ct.i)((function () {
                    Y.current++
                }), [Q.width]), (0, R.useEffect)((function () {
                    var e = c.video_watch_count, t = c.group_id, n = c.log_pb;
                    e || X.Z.projection.watch_count_zero({log_pb: n, group_id: t})
                }), [c]), (0, R.useEffect)((function () {
                    y(W)
                }), []);
                var ee = (null == s || null === (r = s.current) || void 0 === r ? void 0 : r.getBoundingClientRect().height) || 0;
                return R.createElement("div", {
                    className: "videoDesc",
                    ref: J
                }, R.createElement("div", {className: "videoDesc_left"}, b.length > 0 && R.createElement("p", {className: "videoDesc__videoStatics"}, w()(b).call(b, (function (e, t, n) {
                    return R.createElement(R.Fragment, {key: t}, e, t !== n.length - 1 && R.createElement("span", null, " 路 "))
                }))), j ? R.createElement("div", {
                    className: D()("newFold", {unNewfold: !v}), onClick: function () {
                        h(!v)
                    }
                }, R.createElement("span", null, "绠€浠� ", R.createElement(lo.RkZ, null))) : null), c.is_contract_arguement && R.createElement("img", {
                    src: globalThis.getFilterXss().filterUrl(n(44611), null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), alt: "", style: {display: "inline-block", height: "25px", width: "228px", marginLeft: "16px"}
                }), j && R.createElement("div", {
                    className: "videoDesc__contentWrapper",
                    style: {zIndex: v ? -1 : 0}
                }, R.createElement("div", {
                    className: D()("videoDesc__newWrapper", {visible: !v}),
                    ref: s
                }, R.createElement(ao.ZP, {
                    handlers: H,
                    text: j
                }))), G && R.createElement("div", {className: "videoDesc__origin"}, "瑙嗛鏉ユ簮锛�", G), a && R.createElement("p", {className: "videoDesc__subtitle"}, a), l && l.keywords.length > 1 && w()(o = l.keywords).call(o, (function (e) {
                    return R.createElement("span", {key: e, className: "videoDesc__keyword"}, e)
                })), !v && R.createElement("div", {style: {height: "".concat(ee + 16, "px")}}))
            })), fo = n(64239), mo = n(15482), po = function (e) {
                return e && e.Math == Math && e
            },
            vo = po("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || po("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || po("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || po("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        vo.globalThis = vo, vo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ho = function (e) {
            var t, n, i, r, o, a = e.video, l = void 0 === a ? {} : a, s = e.sereisTitle, u = void 0 === s ? "" : s,
                c = l.title, d = l.video_publish_time, f = l.video_abstract, m = l.user_info;
            if (!c || !d) return null;
            var p = (0, Se._3)(d), v = null == m ? void 0 : m.name, h = v ? "锛岀敱".concat(v, "涓婁紶") : "";
            return R.createElement(mo.ql, {
                title: we()(t = "".concat(c, " - ")).call(t, u, " - 瑗跨摐瑙嗛"),
                meta: [{
                    name: "keywords",
                    content: "瑗跨摐瑙嗛,".concat(u, ",鐢靛奖,鐢佃鍓�,娓告垙,缁艰壓,鏂伴椈,缇庨,鎼炵瑧,鍔ㄦ极, NBA,闊充箰,MV,楂樻竻,vlog,灏戝効,鍐涗簨,浣撹偛,鏃呮父")
                }, {
                    name: "description",
                    content: we()(n = we()(i = we()(r = we()(o = "".concat(c, "锛�")).call(o, u, "锛屼簬")).call(r, p, "涓婄嚎")).call(i, h, "銆�")).call(n, f, "銆傝タ鐡滆棰戜负鎮ㄦ彁渚涢珮娓呰棰戯紝鐢婚潰娓呮櫚銆佹挱鏀炬祦鐣咃紝鐪嬩赴瀵屻€侀珮璐ㄩ噺瑙嗛灏变笂瑗跨摐瑙嗛銆�")
                }]
            })
        };

        function _o(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function go(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _o(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : _o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var bo = function (e) {
                return e && e.Math == Math && e
            },
            yo = bo("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || bo("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || bo("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || bo("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        yo.globalThis = yo, yo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var wo = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return w()(e).call(e, (function (e) {
                    var t = {};
                    try {
                        t = Se.QW.parse(e.PackedJson)
                    } catch (e) {
                    }
                    return t
                }))
            }, xo = function () {
                var e = (0, d.Z)(_().mark((function e(t) {
                    var n, i, r = arguments;
                    return _().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.length > 1 && void 0 !== r[1] ? r[1] : Ye.Z.video.getSeriesItems, i = r.length > 2 && void 0 !== r[2] ? r[2] : Ye.Z.video.getSeriesInfo, e.next = 4, k().all([n({
                                    SeriesID: t,
                                    restful: !1
                                }).then((function (e) {
                                    var t = e.data.data, n = t.HasMore, i = t.NextCursor, r = t.ItemList;
                                    return {videoList: wo(r), nextCursor: n && i}
                                })), i({SeriesID: t, restful: !1}).then((function (e) {
                                    return {seriesInfo: e.data.data.seriesInfo}
                                }))]).then((function (e) {
                                    var n = (0, m.Z)(e, 2), i = n[0], r = n[1];
                                    return go(go({id: t}, i), r)
                                }));
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), Zo = function (e) {
                var t, n, i, r = e.focus, o = e.series_id, a = e.pSeriesId, l = e.from_gid, s = e.log_pb, u = e.user_info,
                    c = (0, R.useRef)(null), d = (0, Je.jY)();
                (0, R.useLayoutEffect)((function () {
                    c.current && r && (0, fo.Z)(c.current, {
                        block: "center",
                        scrollMode: "if-needed",
                        boundary: function (e) {
                            return "auto" !== getComputedStyle(e)["overflow-y"]
                        }
                    })
                }), [r]);
                return R.createElement(_r.Z, {
                    ref: c,
                    className: D()("projection_seriesItem", {focus: r}),
                    title: e.title,
                    RBTag: void 0 !== e.video_duration ? (0, Se.LU)(e.video_duration) : void 0,
                    coverURL: (null === (t = e.large_image_list) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.url) || (null === (i = e.middle_image) || void 0 === i ? void 0 : i.url),
                    anchorProps: go(go({}, (0, Q.ZF)({
                        gid: e.item_id || e.group_id,
                        pSeriresId: a,
                        seriresId: o,
                        query: {logPb: Se.QW.stringify(e.log_pb), from_gid: l}
                    })), {}, {isRouterLink: (0, Qi.Z)(), target: "_self"}),
                    bottomInfo: R.createElement(gr.Z, {
                        authorInfo: e.user_info,
                        video_watch_count: e.video_detail_info.video_watch_count,
                        onAuthorNameClick: function () {
                            Tr.Z.authorInfoClick({
                                log_pb: (0, Se.ST)(ue()(s), ["impr_type", "category_name", "page_type", "sourcepage"], ["__pc_detail__", "xg_pc_related_channel_new", "anyVideo", "shortvideo"]),
                                click_position: "name",
                                user_status: d.id === String(u.user_id) ? "author" : "guest",
                                is_following: u.follow ? 1 : 0,
                                detail_section: "player"
                            })
                        }
                    }),
                    videoURL: e.preview_url,
                    clientShowParams: {log_pb: e.log_pb}
                })
            }, Eo = function (e) {
                var t = e.currentGroupId, n = e.seriesId, i = (0, R.useContext)(je.Z), r = i.video, o = i.series,
                    a = i.setSeries, l = o.videoList, s = o.seriesInfo, u = (0, R.useState)(), c = (0, m.Z)(u, 2), d = c[0],
                    p = c[1], v = (0, R.useState)(!1), h = (0, m.Z)(v, 2), _ = h[0], g = h[1];
                (0, R.useEffect)((function () {
                    void 0 !== n && (g(!0), xo(n).then((function (e) {
                        a(e)
                    })).finally((function () {
                        return g(!1)
                    })))
                }), [n]);
                var b = (0, R.useRef)(l && l.length > 0 ? l[0].rank : void 0), y = (0, R.useRef)(null),
                    x = (0, R.useState)(b.current), Z = (0, m.Z)(x, 2), E = Z[0], j = (Z[1], (0, R.useMemo)((function () {
                        var e;
                        if (l) return l.some((function (n, i) {
                            return (String(t) === String(n.group_id) || String(t) === String(n.item_id)) && (e = i, p(n), !0)
                        })), e
                    }), [t, l])), S = (0, R.useRef)(null);
                (0, R.useEffect)((function () {
                    var e = S.current;
                    return null !== e && (e.addEventListener("DOMMouseScroll", Se.AK), e.addEventListener("mousewheel", Se.AK)), function () {
                        null !== e && (e.removeEventListener("DOMMouseScroll", Se.AK), e.removeEventListener("mousewheel", Se.AK))
                    }
                }), [S.current]);
                var k = (0, R.useState)(!1), P = (0, m.Z)(k, 2), N = P[0], T = P[1];
                return R.createElement("div", {className: "projection-series-container"}, d && R.createElement(ho, {
                    video: r,
                    sereisTitle: s && s.title
                }), R.createElement("div", {className: D()("projection-series-header projection-series-header-title-container", {withShadow: N})}, R.createElement("span", {
                    className: "projection-series-header-title",
                    title: s && s.title
                }, s && s.title), (r.rank || void 0 !== j) && R.createElement("span", {className: "projection-series-header-indicator"}, r.rank || (j || 0) + 1, "聽/聽", s && s.item_num + "")), R.createElement("ul", {
                    className: "projection-series-list",
                    ref: S,
                    onScroll: function () {
                        var e = S.current;
                        e && e.scrollTop > 0 ? T(!0) : T(!1)
                    }
                }, _ && R.createElement(yr.Z, {
                    text: {more: "瑙嗛鍔犺浇涓�"},
                    hasMore: _
                }), l && w()(l).call(l, (function (e, i) {
                    return R.createElement("li", {
                        key: i,
                        className: "projection-series-list-item",
                        ref: e.rank === E ? y : null
                    }, R.createElement(Zo, (0, f.Z)({}, e, {
                        user_info: e.user_info,
                        focus: j === i,
                        prefix: j === i ? R.createElement("i", {className: "icon-play"}) : R.createElement("span", {className: "index"}, i + 1),
                        series_id: n,
                        from_gid: t,
                        inx: i,
                        group_id: e.group_id
                    })))
                }))))
            }, jo = n(53311), So = n(62462), ko = n.n(So), Po = n(71308), No = n(7922), To = function (e) {
                return e && e.Math == Math && e
            },
            Co = To("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || To("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || To("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || To("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
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
        n(48233);
        var Io = function (e) {
                var t = e.defaultStatus, n = e.status, i = e.isBlackBg, r = e.gid, o = e.album_id, a = e.episode_id,
                    l = e.pseries_id, s = e.collectText, u = void 0 === s ? "鏀惰棌" : s, c = e.style, d = e.onChange,
                    f = (e.tabIndex, R.useRef(null != n).current), p = (0, R.useState)(f ? n : t), v = (0, m.Z)(p, 2),
                    h = v[0], _ = v[1], g = R.useRef(null), b = "action-collect", y = (0, Se.Ye)((function () {
                        return Ye.Z.video.addFavorite({gid: r, album_id: o, episode_id: a, pseries_id: l}).then((function (e) {
                            var t = e.data;
                            t.data && 0 === t.data.StatusCode && (f || _(!h), d && d(!h))
                        }))
                    }), "favorite"), w = (0, Se.Ye)((function () {
                        var e = Po.zc.Video;
                        o ? e = Po.zc.LongVideo : l && (e = Po.zc.Pseries);
                        var t = r || o || l;
                        Ye.Z.video.deleteFavorite({content_id: t, content_type: e}).then((function (e) {
                            var t = e.data;
                            t.data && 0 === t.data.StatusCode && (f || _(!h), d && d(!h))
                        }))
                    }));
                return (0, R.useEffect)((function () {
                    f || _(t)
                }), [f, t]), (0, R.useEffect)((function () {
                    f && _(n)
                }), [n]), (0, R.useEffect)((function () {
                    var e, t;
                    null === (e = g.current) || void 0 === e || null === (t = e.anim) || void 0 === t || t[h ? "play" : "stop"]()
                }), [h]), R.createElement(No.zx, {
                    "aria-label": h ? "宸叉敹钘�" : u,
                    className: D()(b, h && "".concat(b, "__actived"), {"black-bg": i}),
                    onClick: h ? w : y,
                    type: "ghost-weak",
                    style: c
                }, h ? R.createElement(lo.eyz, {className: "".concat(b, "__lottie")}) : R.createElement(lo.BYG, {className: "".concat(b, "__lottie")}), R.createElement("span", {className: "".concat(b, "__txt")}, h ? "宸叉敹钘�" : u))
            }, Mo = n(36154), Fo = function (e) {
                return e && e.Math == Math && e
            },
            Lo = Fo("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Fo("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Fo("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Fo("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Lo.globalThis = Lo, Lo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ro = function (e, t) {
            var n, i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], o = t.itemHeight,
                a = t.overscan, l = void 0 === a ? 5 : a, s = t.onScroll, u = (0, ro.Z)(), c = (0, m.Z)(u, 2), d = c[0],
                f = c[1], p = (0, R.useState)({start: 0, end: 10}), v = (0, m.Z)(p, 2), h = v[0], _ = v[1];
            o || console.warn("please enter a valid itemHeight"), (0, R.useEffect)((function () {
                j()
            }), [f.width, f.height]);
            var g = (0, R.useCallback)((function () {
                    return "number" == typeof o ? e.length * o : Ir()(e).call(e, (function (e, t, n) {
                        return e + o(t, n)
                    }), 0)
                }), we()(n = [e.length]).call(n, (0, Dt.Z)(r))), b = (0, R.useState)(g), y = (0, m.Z)(b, 2), x = y[0],
                Z = y[1];
            (0, R.useEffect)((function () {
                Z(g())
            }), we()(i = [g]).call(i, (0, Dt.Z)(r))), (0, R.useEffect)((function () {
                var e = function () {
                    return Z(g())
                };
                return window.addEventListener("resize", g), function () {
                    return window.removeEventListener("resize", e)
                }
            }), [g]);
            var E = (0, R.useMemo)((function () {
                var t;
                return w()(t = L()(e).call(e, h.start, h.end)).call(t, (function (e, t) {
                    return {data: e, index: t + h.start}
                }))
            }), [e, h]), j = function () {
                var t = d.current;
                if (t) {
                    var n = S(t.scrollTop), i = n - l, r = n + 30 + l;
                    _({start: i < 0 ? 0 : i, end: r > e.length ? e.length : r})
                }
            }, S = function (t) {
                if ("number" == typeof o) return Math.floor(t / o) + 1;
                for (var n = 0, i = 0, r = 0; r < e.length; r++) {
                    if ((n += o(e[r], r)) >= t) {
                        i = r;
                        break
                    }
                }
                return i + 1
            }, k = function (t) {
                var n;
                return "number" == typeof o ? t * o : Ir()(n = L()(e).call(e, 0, t)).call(n, (function (e, t, n) {
                    return e + o(t, n)
                }), 0)
            }, P = function (e) {
                d.current && (d.current.scrollTo ? d.current.scrollTo({
                    top: k(e),
                    behavior: "smooth"
                }) : d.current.scrollTop = k(e), j())
            }, N = function (t) {
                var n = d.current;
                if (n) {
                    var i = "number" == typeof o ? o : o(e[t], t), r = t * i, a = (t + 1) * i, l = n.clientHeight,
                        s = n.scrollTop;
                    if (r >= s && a <= s + l) return;
                    var u = t - 1;
                    u < 0 && (u = 0), P(u)
                }
            };
            return {
                list: E,
                scrollTo: P,
                scrollIntoview: N,
                scrollerRef: d,
                scrollerProps: {
                    ref: d, onScroll: function (e) {
                        e.preventDefault(), j(), s && s(e)
                    }, style: {overflowY: "auto"}
                },
                totalHeight: x,
                contentProps: {style: {width: "100%", height: x, paddingTop: k(h.start)}}
            }
        }, Oo = n(95682);

        function Do(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ao(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Do(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Do(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Uo = function (e) {
                return e && e.Math == Math && e
            },
            Xo = Uo("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Uo("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Uo("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Uo("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Xo.globalThis = Xo, Xo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Vo = 30, Ho = function (e) {
                return Math.ceil(e / Vo) - 1
            }, zo = function (e) {
                var t = (0, jo.Z)(), n = (0, m.Z)(t, 2), i = n[0], r = n[1];
                return (0, R.useEffect)((function () {
                    r && e.onInView(e.index, !0)
                }), [r]), R.createElement("div", {ref: i, style: {height: e.itemHeight}})
            }, Bo = function (e) {
                var t, n, i, r, o, a = e.series_id, l = e.pSeriesId, s = e.from_gid, u = e.index, c = e.video,
                    d = e.video_user_like, f = e.group_id, p = e.onIsCollectedChanged, v = (0, je.f)(),
                    h = v.isCollectedGlobal, _ = v.setIsCollectedGlobal, g = v.group_id, b = (0, R.useState)(1 === d),
                    y = (0, m.Z)(b, 2), w = y[0], x = y[1];
                (0, R.useEffect)((function () {
                    x(1 === d)
                }), [d]), (0, ct.Z)((function () {
                    g === f && x(h)
                }), [h]);
                var Z = e.rank, E = (0, jo.Z)(), j = (0, m.Z)(E, 2), S = j[0], k = j[1],
                    P = {selection_tag: 1 === String(Z).length ? "0".concat(String(Z)) : String(Z), rank_in_block: u}, N = {
                        from_gid: s,
                        sourcepage: l ? De.JG.pSeriesWatch : De.JG.shortvideo,
                        key_name: we()(t = "".concat(s, "_")).call(t, e.item_id || e.group_id, "_0")
                    };
                return (0, R.useEffect)((function () {
                    k && e.onInView(Z, !1)
                }), [k]), R.createElement(_r.Z, {
                    ref: S,
                    className: D()("projection_seriesItem", {focus: Z === c.rank}),
                    title: e.title,
                    RBTag: void 0 !== e.video_duration ? (0, Se.LU)(e.video_duration) : void 0,
                    coverURL: (null === (n = e.large_image_list) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i.url) || (null === (r = e.middle_image) || void 0 === r ? void 0 : r.url),
                    anchorProps: Ao(Ao({}, (0, Q.ZF)({
                        gid: e.item_id || e.group_id,
                        pSeriresId: l,
                        seriresId: a,
                        query: Ao({logPb: Se.QW.stringify(Ao(Ao({}, e.log_pb), N))}, P)
                    })), {}, {isRouterLink: (0, Qi.Z)(), target: "_self"}),
                    bottomInfo: R.createElement(gr.Z, {video_watch_count: e.video_detail_info.video_watch_count}),
                    videoURL: e.preview_url,
                    clientShowParams: {log_pb: e.log_pb},
                    isCoCreate: null === (o = c.co_creators_video_info) || void 0 === o ? void 0 : o.is_co_creators_video,
                    inView: function () {
                        return X.Z.common.videoShow(Ao({log_pb: Ao(Ao(Ao({}, c.log_pb || {}), e.log_pb || {}), N)}, P))
                    },
                    isCollected: w,
                    onIsCollectedChanged: function (e) {
                        x(e), null == p || p(e), g === f && _(e)
                    },
                    gid: f,
                    hasPlayingMask: !0
                })
            }, Go = function (e) {
                var t = e.total, n = e.activeTabIndex, i = e.onClickTabItem;
                return R.createElement("div", {className: "ProgramGuide"}, R.createElement("div", {className: "playlist__panel"}, R.createElement(Mo.qL, {
                    total: t,
                    moreText: "鏇村",
                    activeTabIndex: n,
                    onClickTabItem: i,
                    limit: 6e3
                })))
            }, Wo = function (e) {
                var t, n = e.currentGroupId, i = e.seriesId, r = e.pSeriesId, o = e.isTheater, a = (0, R.useContext)(je.Z),
                    l = ((0, Je.jY)(), a.video), s = a.shouldLoadOthers,
                    u = (a.changePSeriesCollected, a.setPSeriesVideoList), c = (i ? a.series : a.pSeries).seriesInfo,
                    v = c ? c.item_num : 0, h = (0, R.useRef)(0), g = (0, R.useState)((function () {
                        return Ho(l.rank)
                    })), b = (0, m.Z)(g, 2), y = b[0], x = b[1];
                h.current = y;
                var Z = (0, R.useState)({}), E = (0, m.Z)(Z, 2), j = E[0], S = E[1], P = a.pSeriesVideoList,
                    T = void 0 === P ? C()(M()(t = Array(v)).call(t)) : P, I = (0, R.useState)(0), F = (0, m.Z)(I, 2),
                    O = F[0], A = F[1], U = (0, R.useState)(!1), V = (0, m.Z)(U, 2), H = V[0], z = V[1],
                    B = Math.ceil(v / Vo) - 1, G = j[y], W = (0, Oo.Z)(), Y = (0, R.useRef)({}), q = function (e) {
                        if (!Y.current[e]) {
                            Y.current[e] = !0;
                            var t = e * Vo;
                            if (r) return Ye.Z.video.getPSeriesMore({
                                pSeriesId: r || "",
                                rank: t,
                                tailCount: Vo
                            }).then((function (e) {
                                return e.data.data
                            })).catch((function () {
                                Y.current[e] = !1
                            }))
                        }
                    }, K = function (e) {
                        var t = [];
                        t.push(q(e));
                        for (var n = e - 1, i = e + 1; t.length < 3 && (n >= 0 || i <= B) && (i - e < 5 || e - n < 5);) n >= 0 && !Y.current[n] && t.push(q(n)), n--, i <= B && !Y.current[i] && t.push(q(i)), i++;
                        return k().all(t).then((function (e) {
                            e = N()(e).call(e, (function (e) {
                                return e && e.length
                            })), S((function (t) {
                                var n = t;
                                return e.forEach((function (e) {
                                    var t = Ho(e[0].rank);
                                    n = Ao(Ao({}, n), {}, (0, p.Z)({}, t, {
                                        startRank: e[0].rank,
                                        endRank: e[e.length - 1].rank,
                                        count: e.length
                                    }))
                                })), n
                            })), u((function (t) {
                                var n = (0, Dt.Z)(t);
                                return e.forEach((function (e) {
                                    var t, i = Ho(e[0].rank), r = i * Vo, o = (i + 1) * Vo;
                                    for (e = w()(e).call(e, (function (e) {
                                        return {type: "data", data: e}
                                    })); e.length < 30 && i !== B;) e.push({type: "empty"});
                                    n = we()(t = []).call(t, (0, Dt.Z)(L()(n).call(n, 0, r)), (0, Dt.Z)(e), (0, Dt.Z)(L()(n).call(n, o)))
                                })), n
                            }))
                        }))
                    }, J = (0, R.useRef)(!1), $ = Ro(T, {
                        overscan: 8, itemHeight: function (e) {
                            return "empty" === (null == e ? void 0 : e.type) ? 0 : O
                        }, onScroll: function () {
                            J.current && (le.current = !0)
                        }
                    }, [T, O]), ee = $.list, te = $.scrollerRef, ne = $.scrollerProps, ie = $.contentProps, re = $.scrollTo,
                    oe = $.scrollIntoview, ae = $.totalHeight;
                (0, R.useEffect)((function () {
                    var e, t, n, i, r, o, a;
                    null != T && T.length && te && A(null !== (e = null == te || null === (t = te.current) || void 0 === t || null === (n = t.children) || void 0 === n || null === (i = n[0]) || void 0 === i || null === (r = i.children) || void 0 === r || null === (o = r[0]) || void 0 === o || null === (a = o.getBoundingClientRect) || void 0 === a ? void 0 : a.call(o).height) && void 0 !== e ? e : 0)
                }), [T, te]);
                var le = (0, R.useRef)(!1), se = (0, R.useState)(0), ue = (0, m.Z)(se, 2), ce = ue[0], de = ue[1],
                    me = (0, R.useRef)(null), pe = (0, R.useRef)(!1), ve = (0, R.useCallback)((function (e, t) {
                        if (!pe.current && me.current) {
                            var n, i, r, o, a, l = 0, s = !1, u = ((i = 0 === e.scrollTop) && (l = 1, s = t.deltaY < -10), i),
                                c = (r = e.scrollTop + e.offsetHeight, (o = Math.round(r) >= ae && r >= e.scrollHeight) && (l = -1, s = t.deltaY > 10), o);
                            return (u && t.deltaY < 0 || c && t.deltaY > 0) && t.preventDefault(), (u || c) && s && (a = 20, pe.current = !0, de(l * a), n = setTimeout((function () {
                                de(0)
                            }), 400)), function () {
                                clearTimeout(n)
                            }
                        }
                        t.preventDefault()
                    }), [pe.current, me.current, ae]);
                (0, R.useEffect)((function () {
                    var e;
                    return 0 === ce && (e = setTimeout((function () {
                        pe.current = !1
                    }), 500)), function () {
                        clearTimeout(e)
                    }
                }), [ce]), (0, R.useEffect)((function () {
                    var e = te.current, t = function (t) {
                        ve(e, t)
                    };
                    return e && (e.addEventListener("DOMMouseScroll", t), e.addEventListener("mousewheel", t)), function () {
                        e && (e.removeEventListener("DOMMouseScroll", t), e.removeEventListener("mousewheel", t))
                    }
                }), [te.current]);
                var he = (0, R.useRef)({should: !1, tabIndex: 0});
                (0, R.useLayoutEffect)((function () {
                    if (ee.length) {
                        var e = h.current, t = fe()(j[e], "startRank"), n = 0, i = ee[0].data;
                        "number" == typeof i ? n = i : i.data && (n = i.data.rank);
                        var r = Ho(n);
                        if (Math.abs(r - e) > 3 && t) return re(t - 1), void(he.current.should = !1);
                        var o = he.current, a = o.should, l = o.tabIndex, s = ko()(T).call(T, (function (e) {
                            var n;
                            return (null == e || null === (n = e.data) || void 0 === n ? void 0 : n.rank) === t
                        }));
                        a && G && l === e && s > -1 && (he.current.should = !1, re(s))
                    } else re(0)
                }), [y, T]);
                var _e = (0, R.useRef)(!1);
                (0, R.useEffect)((function () {
                    if (o) _e.current = !1; else {
                        var e = ko()(T).call(T, (function (e) {
                            var t;
                            return (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.rank) === l.rank
                        }));
                        e > -1 && G && !_e.current && (_e.current = !0, re(e))
                    }
                }), [l.rank, T, o]);
                var ge = (0, R.useState)(null), be = (0, m.Z)(ge, 2), ye = (be[0], be[1]);
                (0, R.useEffect)((function () {
                    H && O && oe(l.rank - 1)
                }), [H, O, l.rank]), (0, R.useEffect)((function () {
                    if (s && l.rank) {
                        var e, t = Ho(l.rank);
                        X.Z.projection.enter_series_tab({
                            enter_type: "auto",
                            selection_range: we()(e = "".concat((0, Mo.Ru)(t) + 1, "-")).call(e, (0, Mo.fx)(t, v) + 1)
                        }), x(t), K(t), z(!0)
                    }
                }), [l.rank, s]), (0, R.useEffect)((function () {
                    if (T.length > 0 && void 0 !== l) {
                        var e, t = ko()(T).call(T, (function (e) {
                            if ("number" != typeof e && e.data && e.data.rank === l.rank) return !0;
                            return !1
                        })), n = T[t + 1];
                        "number" != typeof n && void 0 !== (null == n ? void 0 : n.data) && (e = Ao(Ao({}, n.data), {}, {pSeriesId: r})), a.setNextVideoOfSpecialList(e)
                    }
                }), [T, l]);
                var xe = (0, R.useMemo)((function () {
                    if (l.rank) {
                        var e = ko()(T).call(T, (function (e) {
                            if ("number" != typeof e && e.data) {
                                var t = e.data;
                                if (void 0 !== l.rank && l.rank + 1 === t.rank) return !0
                            }
                            return !1
                        }));
                        if (e > -1) return L()(T).call(T, e, e + 10)
                    }
                    return []
                }), [T, l.rank]);
                (0, R.useEffect)((function () {
                    if (xe.length > 0) {
                        var e = Ir()(xe).call(xe, (function (e, t) {
                            if ("number" != typeof t && t.data) {
                                var n, i = t.data, r = i.video_id, o = i.preloadVideoResource;
                                return o && r ? we()(n = []).call(n, (0, Dt.Z)(e), [{vid: r, resource: o}]) : e
                            }
                            return e
                        }), []);
                        Ur({list: e, player: a.playerInstanceRef.current})
                    }
                }), [xe[0], a.playerInstanceRef.current]);
                var Ze, Ee = function () {
                    var e = (0, d.Z)(_().mark((function e(t) {
                        var n;
                        return _().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (h.current !== t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    he.current = {
                                        should: !0,
                                        tabIndex: t
                                    }, X.Z.projection.enter_series_tab({
                                        enter_type: "click",
                                        selection_range: we()(n = "".concat((0, Mo.Ru)(t) + 1, "-")).call(n, (0, Mo.fx)(t, v) + 1)
                                    }), K(t), x(t);
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), Se = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e !== l.rank || J.current || t || setTimeout((function () {
                        J.current = !0
                    }), 100);
                    var n = Ho(e);
                    h.current === n && Y.current[n] || n > -1 && (clearTimeout(Ze), Ze = setTimeout((function () {
                        var e;
                        h.current = n, X.Z.projection.enter_series_tab({
                            enter_type: "slipe",
                            selection_range: we()(e = "".concat((0, Mo.Ru)(n) + 1, "-")).call(e, (0, Mo.fx)(n, v) + 1)
                        }), K(n), x(n)
                    }), 100))
                }, ke = l.user_info, Pe = fe()(c, "title", ""), Ne = (0, R.useCallback)((function (e) {
                    var t, n;
                    return i ? we()(t = "/series/".concat(i, "_")).call(t, e, "/") : we()(n = "/pseries/".concat(r, "_")).call(n, e, "/")
                }), [i]), Te = null == ke ? void 0 : ke.user_id;
                (0, Q.$x)(Te, void 0, {source: "pseries_author"});
                return H ? R.createElement("div", {className: "projection-series-container"}, l.rank ? R.createElement(ho, {
                    video: l,
                    sereisTitle: Pe
                }) : null, R.createElement("div", {className: D()("projection-series-header", {withTab: v > Vo})}, R.createElement("div", null, R.createElement("div", {className: "projection-series-header-title-container"}, R.createElement("span", {
                    className: "projection-series-header-title",
                    title: Pe
                }, Pe.length > 30 ? "".concat(L()(Pe).call(Pe, 0, 30), "...") : Pe), R.createElement("span", {className: "projection-series-header-indicator"}, l.rank, "聽/聽", c && c.item_num + ""))), R.createElement(Io, {
                    defaultStatus: c && c.is_favourite,
                    pseries_id: l.pseries_id,
                    collectText: "鏀惰棌鍚堥泦",
                    onChange: function (e) {
                        e ? X.Z.projection.rtFavorite({
                            log_pb: l.log_pb,
                            section: "pseres_selection"
                        }) : X.Z.projection.rtUnfavorite({log_pb: l.log_pb, section: "pseres_selection"})
                    }
                }), W ? null : R.createElement(Go, {
                    total: v,
                    activeTabIndex: y,
                    onClickTabItem: Ee
                })), R.createElement("div", (0, f.Z)({className: "projection-series-list"}, ne), R.createElement("div", (0, f.Z)({}, ie, {
                    style: Ao(Ao({}, ie.style), {}, {
                        transition: "transform .4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                        transform: "translateY(".concat(ce, "px)")
                    }), ref: me
                }), w()(ee).call(ee, (function (e, t) {
                    if ("number" == typeof e.data) return R.createElement(zo, {
                        key: "".concat(t, "placeholder"),
                        index: e.data,
                        onInView: Se,
                        itemHeight: O
                    });
                    if ("empty" === e.data.type) return R.createElement("div", {
                        key: "".concat(t, "empty"),
                        style: {height: 0}
                    });
                    var o = e.data.data, a = o.rank === l.rank;
                    return R.createElement("div", {
                        ref: function (e) {
                            a && ye(e)
                        }, key: o.rank, className: D()("projection-series-list-item", {focus: a})
                    }, R.createElement(Bo, (0, f.Z)({log_pb: ""}, o, {
                        prefix: o.rank === l.rank ? R.createElement("i", {className: "icon-play"}) : R.createElement("span", {className: "index"}, o.rank),
                        href: globalThis.getFilterXss().filterUrl(Ne(o.group_id), null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }),
                        series_id: i,
                        pSeriesId: r,
                        from_gid: n,
                        index: t,
                        video: l,
                        onInView: Se,
                        onIsCollectedChanged: function (e) {
                            var t = (0, Dt.Z)(T), n = {type: "data", data: Ao(Ao({}, o), {}, {video_user_like: e ? 1 : 0})};
                            t[ko()(T).call(T, (function (e) {
                                return e.data.item_id === o.item_id
                            }))] = n, u(t)
                        }
                    })), a ? null : R.createElement("div", {className: "projection-series-list-item-tag"}, String(o.rank)))
                }))))) : R.createElement(Xr.F_, {
                    className: "projection-series-container",
                    count: l.rank ? l.rank + 7 : 8,
                    theme: "dark"
                })
            }, Yo = function (e) {
                return e && e.Math == Math && e
            },
            qo = Yo("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Yo("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Yo("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Yo("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        qo.globalThis = qo, qo.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ko = function (e) {
            var t = (0, jo.Z)(), n = (0, m.Z)(t, 2), i = n[0], r = n[1];
            return (0, R.useEffect)((function () {
                r && e.onInView(e.index, !0)
            }), [r]), R.createElement("div", {ref: i, style: {height: 75}})
        };

        function Jo(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Qo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Jo(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Jo(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var $o = function (e) {
                return e && e.Math == Math && e
            },
            ea = $o("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || $o("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || $o("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || $o("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ea.globalThis = ea, ea.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ta = function (e) {
            var t, n, i, r, o = e.series_id, a = e.pSeriesId, l = e.from_gid, s = e.index, u = e.video,
                c = e.video_user_like, d = e.group_id, f = e.onIsCollectedChanged, p = e.onClick, v = e.isCoCreate,
                h = (0, je.f)(), _ = h.isCollectedGlobal, g = h.setIsCollectedGlobal, b = h.group_id,
                y = (0, R.useState)(1 === c), w = (0, m.Z)(y, 2), x = w[0], Z = w[1];
            (0, R.useEffect)((function () {
                Z(1 === c)
            }), [c]), (0, ct.Z)((function () {
                b === d && Z(_)
            }), [_]);
            var E = e.rank, j = (0, jo.Z)(), S = (0, m.Z)(j, 2), k = S[0], P = S[1],
                N = {selection_tag: 1 === String(E).length ? "0".concat(String(E)) : String(E), rank_in_block: s}, T = {
                    from_gid: l,
                    sourcepage: a ? De.JG.pSeriesWatch : De.JG.shortvideo,
                    key_name: we()(t = "".concat(l, "_")).call(t, e.item_id || e.group_id, "_0")
                };
            return (0, R.useEffect)((function () {
                P && e.onInView(E, !1)
            }), [P]), R.createElement(_r.Z, {
                ref: k,
                className: D()("projection_seriesItem", {focus: E === u.rank}),
                title: e.title,
                RBTag: void 0 !== e.video_duration ? (0, Se.LU)(e.video_duration) : void 0,
                coverURL: (null === (n = e.large_image_list) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i.url) || (null === (r = e.middle_image) || void 0 === r ? void 0 : r.url),
                anchorProps: Qo(Qo({}, (0, Q.ZF)({
                    gid: e.item_id || e.group_id,
                    pSeriresId: a,
                    seriresId: o,
                    query: Qo({logPb: Se.QW.stringify(Qo(Qo({}, e.log_pb), T))}, N)
                })), {}, {
                    isRouterLink: (0, Qi.Z)(), target: "_self", onClick: function () {
                        p && p()
                    }
                }),
                bottomInfo: R.createElement(gr.Z, {video_watch_count: e.video_detail_info.video_watch_count}),
                isCoCreate: v,
                videoURL: e.preview_url,
                clientShowParams: {log_pb: e.log_pb},
                inView: function () {
                    return X.Z.common.videoShow(Qo({log_pb: Qo(Qo(Qo({}, u.log_pb || {}), e.log_pb || {}), T)}, N))
                },
                isCollected: x,
                onIsCollectedChanged: function (e) {
                    Z(e), null == f || f(e), b === d && g(e)
                },
                gid: d,
                hasPlayingMask: !0
            })
        };

        function na(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ia(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? na(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : na(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var ra = function (e) {
                return e && e.Math == Math && e
            },
            oa = ra("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || ra("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || ra("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || ra("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        oa.globalThis = oa, oa.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var aa = 30, la = function (e) {
            return Math.ceil(e / aa) - 1
        }, sa = function (e) {
            var t, n = e.currentGroupId, i = e.seriesId, r = e.pSeriesId, o = e.isTheater, a = e.onClose,
                l = (0, R.useContext)(je.Z), s = l.video, u = l.shouldLoadOthers, c = l.changePSeriesCollected,
                d = l.setPSeriesVideoList, v = (i ? l.series : l.pSeries).seriesInfo, h = v ? v.item_num : 0,
                _ = (0, R.useRef)(0), g = (0, R.useState)((function () {
                    return la(s.rank)
                })), b = (0, m.Z)(g, 2), y = b[0], x = b[1];
            _.current = y;
            var Z = (0, R.useState)({}), E = (0, m.Z)(Z, 2), j = E[0], S = E[1], P = l.pSeriesVideoList,
                T = void 0 === P ? C()(M()(t = Array(h)).call(t)) : P, I = (0, R.useState)(!1), F = (0, m.Z)(I, 2),
                O = F[0], A = F[1], U = Math.ceil(h / aa) - 1, V = j[y], H = (0, R.useRef)({}), z = function (e) {
                    if (!H.current[e]) {
                        H.current[e] = !0;
                        var t = e * aa;
                        if (r) return Ye.Z.video.getPSeriesMore({
                            pSeriesId: r || "",
                            rank: t,
                            tailCount: aa
                        }).then((function (e) {
                            return e.data.data
                        })).catch((function () {
                            H.current[e] = !1
                        }))
                    }
                }, B = function (e) {
                    var t = [];
                    t.push(z(e));
                    for (var n = e - 1, i = e + 1; t.length < 3 && (n >= 0 || i <= U) && (i - e < 5 || e - n < 5);) n >= 0 && !H.current[n] && t.push(z(n)), n--, i <= U && !H.current[i] && t.push(z(i)), i++;
                    return k().all(t).then((function (e) {
                        e = N()(e).call(e, (function (e) {
                            return e && e.length
                        })), S((function (t) {
                            var n = t;
                            return e.forEach((function (e) {
                                var t = la(e[0].rank);
                                n = ia(ia({}, n), {}, (0, p.Z)({}, t, {
                                    startRank: e[0].rank,
                                    endRank: e[e.length - 1].rank,
                                    count: e.length
                                }))
                            })), n
                        })), d((function (t) {
                            var n = (0, Dt.Z)(t);
                            return e.forEach((function (e) {
                                var t, i = la(e[0].rank), r = i * aa, o = (i + 1) * aa;
                                for (e = w()(e).call(e, (function (e) {
                                    return {type: "data", data: e}
                                })); e.length < 30 && i !== U;) e.push({type: "empty"});
                                n = we()(t = []).call(t, (0, Dt.Z)(L()(n).call(n, 0, r)), (0, Dt.Z)(e), (0, Dt.Z)(L()(n).call(n, o)))
                            })), n
                        }))
                    }))
                }, G = (0, R.useRef)(!1), W = Ro(T, {
                    overscan: 8, itemHeight: function (e) {
                        return "empty" === (null == e ? void 0 : e.type) ? 0 : 75
                    }, onScroll: function () {
                        G.current && (te.current = !0)
                    }
                }, [T]), Y = W.list, q = W.scrollerRef, K = W.scrollerProps, J = W.contentProps, Q = W.scrollTo,
                $ = W.scrollIntoview, ee = W.totalHeight, te = (0, R.useRef)(!1), ne = (0, R.useState)(0),
                ie = (0, m.Z)(ne, 2), re = ie[0], oe = ie[1], ae = (0, R.useRef)(null), le = (0, R.useRef)(!1),
                se = (0, R.useCallback)((function (e, t) {
                    if (!le.current && ae.current) {
                        var n, i, r, o, a, l = 0, s = !1,
                            u = ((i = 0 === e.scrollTop) && (l = 1, s = t.deltaY < -10), i),
                            c = (r = e.scrollTop + e.offsetHeight, (o = Math.round(r) >= ee && r >= e.scrollHeight) && (l = -1, s = t.deltaY > 10), o);
                        return (u && t.deltaY < 0 || c && t.deltaY > 0) && t.preventDefault(), (u || c) && s && (a = 20, le.current = !0, oe(l * a), n = setTimeout((function () {
                            oe(0)
                        }), 400)), function () {
                            clearTimeout(n)
                        }
                    }
                    t.preventDefault()
                }), [le.current, ae.current, ee]);
            (0, R.useEffect)((function () {
                var e;
                return 0 === re && (e = setTimeout((function () {
                    le.current = !1
                }), 500)), function () {
                    clearTimeout(e)
                }
            }), [re]), (0, R.useEffect)((function () {
                var e = q.current, t = function (t) {
                    se(e, t)
                };
                return e && (e.addEventListener("DOMMouseScroll", t), e.addEventListener("mousewheel", t)), function () {
                    e && (e.removeEventListener("DOMMouseScroll", t), e.removeEventListener("mousewheel", t))
                }
            }), [q.current]);
            var ue = (0, R.useRef)({should: !1, tabIndex: 0});
            (0, R.useLayoutEffect)((function () {
                if (Y.length) {
                    var e = _.current, t = fe()(j[e], "startRank"), n = 0, i = Y[0].data;
                    "number" == typeof i ? n = i : i.data && (n = i.data.rank);
                    var r = la(n);
                    if (Math.abs(r - e) > 3 && t) return Q(t - 1), void(ue.current.should = !1);
                    var o = ue.current, a = o.should, l = o.tabIndex, s = ko()(T).call(T, (function (e) {
                        var n;
                        return (null == e || null === (n = e.data) || void 0 === n ? void 0 : n.rank) === t
                    }));
                    a && V && l === e && s > -1 && (ue.current.should = !1, Q(s))
                } else Q(0)
            }), [y, T]);
            var ce = (0, R.useRef)(!1);
            (0, R.useEffect)((function () {
                if (o) ce.current = !1; else {
                    var e = ko()(T).call(T, (function (e) {
                        var t;
                        return (null == e || null === (t = e.data) || void 0 === t ? void 0 : t.rank) === s.rank
                    }));
                    e > -1 && V && !ce.current && (ce.current = !0, Q(e))
                }
            }), [s.rank, T, o]);
            var de = (0, R.useState)(null), me = (0, m.Z)(de, 2), pe = (me[0], me[1]);
            (0, R.useEffect)((function () {
                O && $(s.rank - 1)
            }), [O, s.rank]), (0, R.useEffect)((function () {
                if (u && s.rank) {
                    var e, t = la(s.rank);
                    X.Z.projection.enter_series_tab({
                        enter_type: "auto",
                        selection_range: we()(e = "".concat((0, Mo.Ru)(t) + 1, "-")).call(e, (0, Mo.fx)(t, h) + 1)
                    }), x(t), B(t), A(!0)
                }
            }), [s.rank, u]), (0, R.useEffect)((function () {
                if (T.length > 0 && void 0 !== s) {
                    var e, t = ko()(T).call(T, (function (e) {
                        if ("number" != typeof e && e.data && e.data.rank === s.rank) return !0;
                        return !1
                    })), n = T[t + 1];
                    "number" != typeof n && void 0 !== (null == n ? void 0 : n.data) && (e = ia(ia({}, n.data), {}, {pSeriesId: r})), l.setNextVideoOfSpecialList(e)
                }
            }), [T, s]);
            var ve, he = (0, R.useMemo)((function () {
                if (s.rank) {
                    var e = ko()(T).call(T, (function (e) {
                        if ("number" != typeof e && e.data) {
                            var t = e.data;
                            if (void 0 !== s.rank && s.rank + 1 === t.rank) return !0
                        }
                        return !1
                    }));
                    if (e > -1) return L()(T).call(T, e, e + 10)
                }
                return []
            }), [T, s.rank]);
            (0, R.useEffect)((function () {
                if (he.length > 0) {
                    var e = Ir()(he).call(he, (function (e, t) {
                        if ("number" != typeof t && t.data) {
                            var n, i = t.data, r = i.video_id, o = i.preloadVideoResource;
                            return o && r ? we()(n = []).call(n, (0, Dt.Z)(e), [{vid: r, resource: o}]) : e
                        }
                        return e
                    }), []);
                    Ur({list: e, player: l.playerInstanceRef.current})
                }
            }), [he[0], l.playerInstanceRef.current]);
            var _e = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e !== s.rank || G.current || t || setTimeout((function () {
                    G.current = !0
                }), 100);
                var n = la(e);
                _.current === n && H.current[n] || n > -1 && (clearTimeout(ve), ve = setTimeout((function () {
                    var e;
                    _.current = n, X.Z.projection.enter_series_tab({
                        enter_type: "slipe",
                        selection_range: we()(e = "".concat((0, Mo.Ru)(n) + 1, "-")).call(e, (0, Mo.fx)(n, h) + 1)
                    }), B(n), x(n)
                }), 100))
            }, ge = fe()(v, "title", ""), be = (0, R.useCallback)((function (e) {
                var t, n;
                return i ? we()(t = "/series/".concat(i, "_")).call(t, e, "/") : we()(n = "/pseries/".concat(r, "_")).call(n, e, "/")
            }), [i]);
            return O ? R.createElement("div", {className: "projection-series-container"}, s.rank ? R.createElement(ho, {
                video: s,
                sereisTitle: ge
            }) : null, R.createElement("div", {className: D()("projection-series-header", {withTab: h > aa})}, R.createElement("div", {className: "with-close"}, R.createElement("div", {className: "projection-series-header-title-container"}, R.createElement("span", {
                className: "projection-series-header-title",
                title: ge
            }, ge.length > 30 ? "".concat(L()(ge).call(ge, 0, 30), "...") : ge), R.createElement("span", {className: "projection-series-header-indicator"}, v && v.item_num + "涓棰�")), R.createElement(lo.x8P, {
                className: "projection-series-close",
                width: 22,
                height: 22,
                onClick: function () {
                    a && a()
                }
            })), R.createElement(Io, {
                defaultStatus: v && v.is_favourite,
                pseries_id: s.pseries_id,
                collectText: "鏀惰棌鍚堥泦",
                onChange: function (e) {
                    c && c(e), e ? X.Z.projection.rtFavorite({
                        log_pb: s.log_pb,
                        section: "pseres_selection"
                    }) : X.Z.projection.rtUnfavorite({log_pb: s.log_pb, section: "pseres_selection"})
                }
            })), R.createElement("div", (0, f.Z)({className: "projection-series-list"}, K), R.createElement("div", (0, f.Z)({}, J, {
                style: ia(ia({}, J.style), {}, {
                    transition: "transform .4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    transform: "translateY(".concat(re, "px)")
                }), ref: ae
            }), w()(Y).call(Y, (function (e, t) {
                var o;
                if ("number" == typeof e.data) return R.createElement(Ko, {
                    key: "".concat(t, "placeholder"),
                    index: e.data,
                    onInView: _e
                });
                if ("empty" === e.data.type) return R.createElement("div", {
                    key: "".concat(t, "empty"),
                    style: {height: 0}
                });
                var l = e.data.data, u = l.rank === s.rank;
                return R.createElement("div", {
                    ref: function (e) {
                        u && pe(e)
                    }, key: l.rank, className: D()("projection-series-list-item", {focus: u})
                }, R.createElement(ta, (0, f.Z)({log_pb: ""}, l, {
                    prefix: l.rank === s.rank ? R.createElement("i", {className: "icon-play"}) : R.createElement("span", {className: "index"}, l.rank),
                    href: globalThis.getFilterXss().filterUrl(be(l.group_id), null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }),
                    series_id: i,
                    pSeriesId: r,
                    from_gid: n,
                    index: t,
                    video: s,
                    isCoCreate: null === (o = s.co_creators_video_info) || void 0 === o ? void 0 : o.is_co_creators_video,
                    onInView: _e,
                    onIsCollectedChanged: function (e) {
                        var t = (0, Dt.Z)(T), n = {type: "data", data: ia(ia({}, l), {}, {video_user_like: e ? 1 : 0})};
                        t[ko()(T).call(T, (function (e) {
                            return e.data.item_id === l.item_id
                        }))] = n, d(t)
                    },
                    onClick: a
                })), u ? null : R.createElement("div", {className: "projection-series-list-item-tag"}, String(l.rank)))
            }))))) : R.createElement(Xr.F_, {
                className: "projection-series-container",
                count: s.rank ? s.rank + 7 : 8,
                theme: "dark"
            })
        }, ua = (n(23123), n(44786)), ca = n(75485), da = n(52030);

        function fa(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ma(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? fa(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : fa(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var pa = function (e) {
                return e && e.Math == Math && e
            },
            va = pa("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || pa("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || pa("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || pa("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        va.globalThis = va, va.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ha = function () {
                var e, t, n = (0, R.useContext)(je.Z), i = n.video, r = void 0 === i ? {} : i, o = n.logInfo,
                    a = n.shouldLoadOthers, l = n.isFollowGlobal, s = n.setIsFollowGlobal, u = n.playerInstanceRef,
                    c = (0, Je.jY)(), d = (0, ca.Z)().globalConfig, f = r.user_info, m = void 0 === f ? {} : f,
                    p = r.group_id;
                null == m && (m = {});
                var v = m, h = v.avatar_url, _ = v.name, g = v.user_id, b = v.user_auth_info, y = void 0 === b ? {} : b,
                    x = v.video_total_count, Z = d.identity.id === String(g), E = m.followers_count_str || 0,
                    j = (0, Q.$x)(g),
                    S = (0, Q.$x)(g, void 0, ma({source: "pgc_author_profile"}, r.co_creators_video_info ? {
                        is_co_publish: "1",
                        from_section: "button"
                    } : void 0)), k = (0, Q.$x)(g, void 0, ma({source: "pgc_author_name"}, r.co_creators_video_info ? {
                        is_co_publish: "1",
                        from_section: "button"
                    } : void 0)),
                    P = N()(e = [E ? R.createElement("span", null, E, "绮変笣") : null, x ? R.createElement("span", null, x, "瑙嗛") : null]).call(e, Boolean);
                j = (0, R.useContext)(je.Z).isSSR ? null === (t = j) || void 0 === t ? void 0 : t.split("?")[0] : j;
                var T = function (e) {
                    var t = o.logPb;
                    "string" == typeof t ? t = JSON.parse(t) : void 0 === t && (t = {}), t.page_type = "anyVideo", t.sourcepage = "shortvideo", t.category_name = "xg_pc_related_channel_new", t.recommend_type = "recommend_short", t.impr_type = "__pc_detail__", delete t.is_following, Tr.Z.authorInfoClick({
                        log_pb: ue()(t),
                        click_position: e,
                        user_status: Z ? "author" : "guest",
                        is_following: l ? 1 : 0,
                        detail_section: "author_detail"
                    })
                };
                return R.createElement("div", {className: "author__userinfo"}, a ? R.createElement(ua.Z, {
                    url: h,
                    className: "author__headImg",
                    uid: g,
                    title: _,
                    size: 40,
                    onClick: function (e) {
                        e.preventDefault(), e.stopPropagation(), X.Z.projection.author_profile_click(), T("profile"), (0, da.gQ)() ? window.open(S, "_self") : window.open(S)
                    },
                    "aria-hidden": !0
                }) : R.createElement(Xr.ZP, {
                    className: "author__headImg",
                    width: 40,
                    height: 40,
                    circle: !0
                }), R.createElement("div", null, R.createElement("a", {
                    className: "author__userName",
                    onClick: function (e) {
                        e.preventDefault(), T("name"), (0, da.gQ)() ? window.open(k, "_self") : window.open(k)
                    },
                    href: globalThis.getFilterXss().filterUrl(j, null, {logType: "js.href/src", reportOnly: "all"}),
                    title: _
                }, R.createElement(Ve.Z, {name: _, authInfo: y})), R.createElement("a", {
                    className: "author_statics",
                    href: globalThis.getFilterXss().filterUrl(j, null, {logType: "js.href/src", reportOnly: "all"}),
                    target: "_blank"
                }, w()(P).call(P, (function (e, t, n) {
                    return R.createElement(R.Fragment, {key: t}, e, t !== n.length - 1 && R.createElement("span", null, " 路 "))
                })))), !Z && R.createElement(Qe.Z, {
                    toUserID: g, isFollow: l, onChange: function (e) {
                        var t = {
                            to_user_id: String(r.user_info.user_id),
                            log_pb: o.logPb,
                            section: "button",
                            position: "detail",
                            category_tag: r.tag,
                            author_id: String(r.user_info.user_id),
                            group_id: p,
                            is_following: e ? 1 : 0,
                            fullscreen: (0, $.uu)() ? "fullscreen" : "nofullscreen",
                            category_name: "pgc",
                            is_author_self: c.id === String(r.user_info.user_id) ? 1 : 0,
                            digg_action: "one_click",
                            digg_button_status: e ? "nodigg" : "like",
                            video_pct: Number((u.current.currentTime / u.current.duration * 100).toFixed(1)),
                            video_time: Number((1e3 * u.current.currentTime).toFixed(1)),
                            player_status: u.current.xgpcInfo.player_status
                        };
                        X.Z.projection[e ? "rt_follow" : "rt_unfollow"](t), s(e)
                    }, source: De.w6.ShortDetails, groupId: p
                }))
            }, _a = n(85605), ga = function (e) {
                return e && e.Math == Math && e
            },
            ba = ga("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || ga("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || ga("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || ga("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ba.globalThis = ba, ba.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ya = function (e) {
                var t = e.withKVideo, n = e.children, i = e.className;
                return t ? R.createElement("h2", {className: i}, n) : R.createElement("h1", {className: i}, n)
            }, wa = function (e) {
                var t = e.kvideoData, n = (0, R.useContext)(je.Z), i = n.video, r = void 0 === i ? {} : i, o = n.logInfo,
                    a = r.is_original, l = r.title, s = r.xg_video_rich_text, u = r.is_vr, c = (0, R.useMemo)((function () {
                        return [(0, ao.lB)({
                            xg_title_rich_text: null == s ? void 0 : s.xg_title_rich_text,
                            at_position: "title",
                            category_name: o.logPb.category_name
                        })]
                    }), [null == s ? void 0 : s.xg_title_rich_text, o.logPb]);
                return R.createElement("div", {className: "player__titleLine"}, R.createElement("div", {className: "videoTitle"}, u ? R.createElement(_a.Z, {classNames: "videoVr"}) : null, t && R.createElement("h1", {className: "kvideoTitle"}, t.keyword), R.createElement(ya, {
                    withKVideo: Boolean(t),
                    className: D()({hasSource: a})
                }, l && R.createElement(ao.ZP, {handlers: c, text: l}))))
            }, xa = n(27484), Za = n.n(xa), Ea = n(1646), ja = n.n(Ea), Sa = n(95573), ka = n.n(Sa), Pa = function (e) {
                return e && e.Math == Math && e
            },
            Na = Pa("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Pa("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Pa("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Pa("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Na.globalThis = Na, Na.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }, Za().extend(ja());
        var Ta = (0, Ki.EN)((function (e) {
            var t, n, i = "https://www.ixigua.com", r = e.location, o = e.mp4Url, a = e.kvideoData,
                l = (0, R.useContext)(je.Z), s = l.video, u = l.group_id,
                c = ((0, Y.Z)(), a ? "".concat(i, "/kvideo/").concat(encodeURIComponent(a.keyword)) : "".concat(i).concat(encodeURI(r.pathname))),
                d = s.title, f = (s.video_abstract, s.video_publish_time), m = void 0 === f ? Date.now() : f,
                p = s.video_duration, v = void 0 === p ? 30 : p, h = (s.poster_uri, s.poster_url),
                _ = void 0 === h ? "" : h, g = s.video_watch_count, b = void 0 === g ? 0 : g, y = s.user_info,
                w = ((void 0 === y ? {} : y) || {}).name, x = "".concat(d, " - 瑗跨摐瑙嗛");
            m = Number(m), 10 === String(m).length && (m *= 1e3);
            var Z, E = w ? "锛岀敱".concat(w, "涓婁紶") : "", j = (0, Se._3)(m), S = Za().duration(v, "s").toISOString(),
                k = we()(t = we()(n = "".concat(x, "锛屼簬")).call(n, j, "涓婄嚎")).call(t, E, "銆傝タ鐡滆棰戜负鎮ㄦ彁渚涢珮娓呰棰戯紝鐢婚潰娓呮櫚銆佹挱鏀炬祦鐣咃紝鐪嬩赴瀵屻€侀珮璐ㄩ噺瑙嗛灏变笂瑗跨摐瑙嗛銆�"),
                P = "https://www.ixigua.com/embed?group_id=".concat(u);
            return R.createElement("div", {
                className: "StructuredData",
                style: {display: "none"}
            }, o && R.createElement("video", {
                src: globalThis.getFilterXss().filterUrl(o, null, {
                    logType: "js.href/src",
                    reportOnly: "all"
                })
            }), (Z = {
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: ka()(x),
                description: ka()(k),
                thumbnailUrl: [_],
                author: {"@type": "Person", name: ka()(w)},
                uploadDate: new Date(m).toISOString(),
                duration: S,
                embedUrl: P,
                interactionStatistic: {
                    "@type": "InteractionCounter",
                    interactionType: {"@type": "http://schema.org/WatchAction"},
                    userInteractionCount: b
                }
            }, R.createElement(mo.ql, {
                script: [{
                    type: "application/ld+json",
                    innerHTML: globalThis.getFilterXss()._filterXSS(ue()(Z), null, {
                        logType: "vue.innerHTML",
                        reportOnly: "all"
                    })
                }]
            })), R.createElement(mo.ql, {
                meta: [{name: "og:title", content: x}, {
                    name: "og:type",
                    content: "video"
                }, {name: "og:image", content: _}, {name: "og:url", content: c}, {
                    name: "op:description",
                    content: "瑗跨摐瑙嗛涓烘偍鎻愪緵".concat(x, "楂樻竻瑙嗛锛岀敾闈㈡竻鏅般€佹挱鏀炬祦鐣咃紝鐪嬩赴瀵屻€侀珮璐ㄩ噺瑙嗛灏变笂瑗跨摐瑙嗛銆�")
                }, {name: "op:video:duration", content: String(v)}, {
                    name: "op:video:release_date",
                    content: new Date(m).toISOString()
                }]
            }), R.createElement("div", {
                className: "microData",
                itemProp: "video",
                itemScope: !0,
                itemType: "http://schema.org/VideoObject"
            }, R.createElement("meta", {content: _, itemProp: "Thumbnail"}), R.createElement("meta", {
                content: _,
                itemProp: "thumbnailUrl"
            }), R.createElement("meta", {content: _, itemProp: "thumbnailUrl"}), R.createElement("meta", {
                content: _,
                itemProp: "thumbnailUrl"
            }), R.createElement("meta", {itemProp: "url", content: c}), R.createElement("meta", {
                itemProp: "name",
                content: x
            }), R.createElement("meta", {
                itemProp: "author",
                name: "author",
                content: w
            }), R.createElement("meta", {
                itemProp: "description",
                content: k
            }), u && R.createElement("meta", {
                itemProp: "embedUrl",
                content: P
            }), R.createElement("meta", {
                itemProp: "duration",
                content: S
            }), R.createElement("meta", {
                itemProp: "uploadDate",
                content: new Date(m).toISOString()
            }), R.createElement("meta", {
                itemProp: "datePublished",
                content: new Date(m).toISOString()
            }), R.createElement("meta", {
                itemProp: "inLanguage",
                content: "zh-CN"
            }), R.createElement("meta", {
                itemProp: "contentLocation",
                content: "涓浗"
            }), R.createElement("meta", {itemProp: "interactionCount", content: b + ""})))
        })), Ca = Ta, Ia = n(56118), Ma = n(60837), Fa = n(92133), La = n(31705);

        function Ra(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Oa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ra(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Ra(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Da = function (e) {
                return e && e.Math == Math && e
            },
            Aa = Da("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Da("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Da("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Da("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Aa.globalThis = Aa, Aa.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ua = function (e) {
                var t, n = e.commentForSSR, i = e.teaParams, r = (0, R.useState)(Fa.Sy), o = (0, m.Z)(r, 2), a = o[0],
                    l = o[1], s = (0, R.useContext)(je.Z), u = s.video.group_id, c = s.video.item_id,
                    f = s.video.group_source, p = s.logInfo, v = (0, Je.jY)(), h = function (e) {
                        return (0, Ma.tm)(e, l)
                    };
                return (0, R.useEffect)((function () {
                    (0, d.Z)(_().mark((function e() {
                        var t;
                        return _().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!u) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3, h({group_id: u, item_id: c, group_source: f});
                                case 3:
                                    0 === (t = e.sent).data.length && X.Z.projection.comment_count_zero({
                                        log_pb: {
                                            group_id: u,
                                            impr_id: t._headers["x-tt-logid"]
                                        }
                                    });
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [u, c, f]), R.createElement(Fa.ZP.Provider, {
                    value: Oa(Oa({}, Fa.qx), {}, {
                        comment: n || a,
                        item_id: null !== (t = s.video.item_id) && void 0 !== t ? t : "",
                        group_id: null != u ? u : "",
                        videoAuthorId: fe()(s, ["video", "user_info", "user_id"]),
                        videoDuration: s.video.video_duration,
                        log_pb: p.logPb,
                        resetLoadComment: h,
                        deleteTopComment: function (e) {
                            (0, Ma.Kr)(e, a, l)
                        },
                        changeCommentCount: function (e) {
                            (0, Ma.aH)(e, a, l)
                        },
                        onFirstInView: function () {
                            Ia.Z.enter_comment({log_pb: p.logPb, player_status: null == i ? void 0 : i.playerStatus})
                        },
                        onInputFocus: function () {
                            e.setIsInputtingComment(!0), Ia.Z.focusCommentWrite({log_pb: p.logPb})
                        },
                        onInputBlur: function () {
                            e.setIsInputtingComment(!1)
                        },
                        onReply: function (e) {
                            var t = e.info, n = e.imageList, i = n.length || 0, r = 0;
                            n.forEach((function (e) {
                                e.IsGIF && r++
                            })), Ia.Z.commentReply({
                                log_pb: p.logPb,
                                comment_id: String(t.id),
                                comment_user_id: String(t.user_id),
                                with_pic: String(i),
                                with_gif: String(r)
                            })
                        },
                        onDelete: function (e) {
                            Ia.Z.commentDelete({log_pb: p.logPb, comment_id: e.comment_id})
                        },
                        onCommentReport: function (e) {
                            var t = e.result, n = e.user_id;
                            Ia.Z.commentReport({
                                log_pb: p.logPb,
                                content: t.type,
                                group_id: u + "",
                                user_id_be: n + "",
                                user_id: v.id
                            })
                        },
                        onCommentDiggChange: function (e) {
                            var t = e.info, n = e.isDigg, i = e.comment_id;
                            Ia.Z.commentDiggAction({
                                log_pb: p.logPb,
                                comment_id: i,
                                action: n ? "comment_digg" : "comment_undigg",
                                comment_user_id: String(t.user_id)
                            })
                        },
                        onPostComment: function (e) {
                            Ia.Z.rt_post_comment(Oa({
                                log_pb: p.logPb,
                                player_status: (null == i ? void 0 : i.playerStatus) || ""
                            }, e))
                        },
                        teaParams: i
                    })
                }, R.createElement(La.Z, {
                    key: u,
                    group_source: s.video.group_source ? Number(s.video.group_source) : void 0
                }))
            }, Xa = n(94198), Va = n.n(Xa), Ha = n(20640), za = n.n(Ha), Ba = n(33552), Ga = n(85468), Wa = function (e) {
                return e && e.Math == Math && e
            },
            Ya = Wa("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Wa("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Wa("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Wa("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ya.globalThis = Ya, Ya.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var qa = 0, Ka = function (e) {
                var t, n = e.video, i = e.recommendList, r = e.onClose, o = e.onCopy, a = {
                        page_type: Ba.GV.Inside,
                        author_id: null == n || null === (t = n.user_info) || void 0 === t ? void 0 : t.user_id,
                        group_id: null == n ? void 0 : n.group_id,
                        group_source: null == n ? void 0 : n.group_source
                    }, l = (0, R.useState)(!1), s = (0, m.Z)(l, 2), u = s[0], c = s[1], d = (0, R.useState)(0),
                    f = (0, m.Z)(d, 2), p = f[0], v = f[1], h = (0, R.useState)(0), _ = (0, m.Z)(h, 2), g = _[0], b = _[1],
                    y = (0, R.useState)(0), w = (0, m.Z)(y, 2), x = w[0], Z = w[1], E = (0, R.useState)(0),
                    S = (0, m.Z)(E, 2), k = S[0], P = S[1], N = (0, R.useState)(), T = (0, m.Z)(N, 2), C = T[0], I = T[1],
                    M = (0, R.useState)(!1), F = (0, m.Z)(M, 2), L = F[0], O = F[1], A = (0, R.useState)(!1),
                    U = (0, m.Z)(A, 2), V = U[0], H = U[1];
                (0, R.useEffect)((function () {
                    var e = null == n ? void 0 : n.video_duration, t = 3600 * p + 60 * g + x;
                    P(t), qa = t;
                    var i = e && !isNaN(e) && t > e;
                    if (O(i), C && !i) {
                        var r,
                            o = null === (r = document.querySelector(".preview .iframe-player")) || void 0 === r ? void 0 : r.className;
                        o && j()(o).call(o, "play-ended") || Va()(C.currentTime, 10) === e ? (C.replay(), C.once("playing", (function () {
                            C.currentTime = qa, C.pause()
                        }))) : (C.currentTime = t + (t === e ? 1 : 0), C.pause()), X.Z.iframePlayer.startTimeRevise(a)
                    }
                }), [p, g, x]), (0, R.useEffect)((function () {
                    H(g > 59 || x > 59)
                }), [g, x]);
                var z = function (e, t) {
                    var n,
                        i = Di()(we()(n = "".concat("undefined" != typeof window ? window.location.origin : "https://www.ixigua.com", "/iframe/")).call(n, e)).addQuery({
                            autoplay: "0",
                            startTime: t && t > 0 ? t : void 0
                        });
                    return '<iframe width="720" height="405" frameborder="0" src="'.concat(i, '" referrerpolicy="unsafe-url" allowfullscreen></iframe>')
                }(n.item_id, L || V ? void 0 : k), B = function (e, t) {
                    var n = Number(e.target.value);
                    isNaN(n) || t(Number(n))
                };
                return R.createElement("div", {className: "iframe-share"}, R.createElement("div", {className: "content"}, R.createElement("div", {
                    className: D()({
                        preview: !0,
                        "is-fullscreen": u
                    })
                }, R.createElement(Ga.Z, {
                    autoplay: !1,
                    video: n,
                    isPreview: !0,
                    recommendData: null != i ? i : [],
                    onPlayerInit: function (e) {
                        I(e), e.config.keyShortcut = "on"
                    },
                    onFullscreenModeChange: function (e) {
                        c(e)
                    }
                })), R.createElement("div", {
                    className: D()({
                        setting: !0,
                        error: L || V
                    })
                }, R.createElement("header", null, R.createElement("label", null, "iframe宓屽叆寮忔挱鏀惧櫒锛�"), R.createElement("i", {
                    className: "icon-close",
                    onClick: function () {
                        C && (C.config.keyShortcut = "off", C.currentTime = 0), r && r()
                    }
                })), R.createElement("div", {className: "code"}, z), R.createElement("div", {className: "developers-link"}, R.createElement("a", {
                    href: globalThis.getFilterXss().filterUrl("https://developers.ixigua.com/iframe.html#%E5%BC%80%E6%94%BEapi%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E", null, {
                        logType: "js.href/src",
                        reportOnly: "all"
                    }), target: "_blank"
                }, "寮€鍙戣€呮帴鍏ユ枃妗�")), R.createElement("div", {
                    className: D()({
                        "start-time": !0,
                        "is-default": 0 === g && 0 === x
                    })
                }, R.createElement("label", null, "寮€濮嬫椂闂�"), (null == n ? void 0 : n.video_duration) >= 3600 && R.createElement("div", null, R.createElement("input", {
                    className: "time-input",
                    maxLength: 2,
                    value: p,
                    onChange: function (e) {
                        return B(e, v)
                    }
                }), R.createElement("span", {className: "divider"}, ":")), R.createElement("input", {
                    className: "time-input",
                    maxLength: 2,
                    value: g,
                    onChange: function (e) {
                        return B(e, b)
                    }
                }), R.createElement("span", {className: "divider"}, ":"), R.createElement("input", {
                    className: "time-input",
                    maxLength: 2,
                    value: x,
                    onChange: function (e) {
                        return B(e, Z)
                    }
                })), R.createElement("div", {className: "tip"}, L ? "*瑙嗛鑷畾涔夌殑寮€濮嬫椂闂磋秴杩囪棰戦暱搴︼紝璇蜂慨鏀�" : V ? "*鍒嗛挓鏁版垨绉掓暟涓嶅簲瓒呰繃59锛岃淇敼" : ""), R.createElement("button", {
                    className: "copy",
                    onClick: function (e) {
                        var t;
                        null == e || null === (t = e.target) || void 0 === t || t.blur(), Xe.Z.configContainer((function () {
                            return document.querySelector(".iframe-share .setting") || document.body
                        })), L || V ? Xe.Z.error("璇蜂慨鏀�", 1, (function () {
                            return Xe.Z.destroy()
                        })) : (za()(z), Xe.Z.success("澶嶅埗鎴愬姛", 1, (function () {
                            return Xe.Z.destroy()
                        })), o && o(), X.Z.iframePlayer.shareCodeCopy(a))
                    }
                }, "涓€閿鍒�"))))
            }, Ja = function (e) {
                return e && e.Math == Math && e
            },
            Qa = Ja("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Ja("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Ja("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Ja("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Qa.globalThis = Qa, Qa.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var $a = function (e) {
                var t, n, i = e.projectionData, r = void 0 === i ? {} : i, o = e.groupId, a = void 0 === o ? "" : o,
                    l = e.kvideoData, s = e.subtitleForScrawler, u = void 0 === s ? "" : s,
                    c = (null == r ? void 0 : r.video) || {}, d = c.title, f = c.video_publish_time, m = c.user_info,
                    p = c.IsBanRobot;
                if (!d || !f) return null;
                var v = null == m ? void 0 : m.name, h = (0, Se._3)(f), _ = v ? "锛岀敱".concat(v, "涓婁紶") : "",
                    g = we()(t = we()(n = "".concat(d, "锛屼簬")).call(n, h, "涓婄嚎")).call(t, _, "銆傝タ鐡滆棰戜负鎮ㄦ彁渚涢珮娓呰棰戯紝鐢婚潰娓呮櫚銆佹挱鏀炬祦鐣咃紝鐪嬩赴瀵屻€侀珮璐ㄩ噺瑙嗛灏变笂瑗跨摐瑙嗛銆�"),
                    b = [{
                        name: "keywords",
                        content: "瑗跨摐瑙嗛,鐢靛奖,鐢佃鍓�,娓告垙,缁艰壓,鏂伴椈,缇庨,鎼炵瑧,鍔ㄦ极,NBA,闊充箰,MV,楂樻竻,vlog,灏戝効,鍐涗簨,浣撹偛,鏃呮父"
                    }, {name: "description", content: g}, {name: "applicable-device", content: "pc"}];
                if (p && b.push({name: "robots", content: "noindex"}), l) {
                    var y, w, x, Z = l.keyword, E = l.keywords;
                    return R.createElement(mo.ql, {
                        title: "".concat(Z, " - 瑗跨摐瑙嗛"),
                        meta: [{name: "keywords", content: "".concat(E.join(), ",瑗跨摐瑙嗛")}, {
                            name: "description",
                            content: we()(y = we()(w = we()(x = "".concat(Z, "?")).call(x, d, ":")).call(w, g)).call(y, L()(u).call(u, 0, 80), "-瑗跨摐瑙嗛")
                        }],
                        link: [{
                            rel: "canonical",
                            href: globalThis.getFilterXss().filterUrl("https://www.ixigua.com/kvideo/".concat(encodeURIComponent(Z)), null, {
                                logType: "js.href/src",
                                reportOnly: "all"
                            })
                        }]
                    })
                }
                return R.createElement(mo.ql, {
                    title: "".concat(d, " - 瑗跨摐瑙嗛"),
                    meta: b,
                    link: [{
                        rel: "canonical",
                        href: globalThis.getFilterXss().filterUrl("https://www.ixigua.com/".concat(a), null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        })
                    }]
                })
            }, el = function (e) {
                return e && e.Math == Math && e
            },
            tl = el("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || el("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || el("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || el("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        tl.globalThis = tl, tl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var nl = function (e) {
            var t, n, i, r = e.video, o = void 0 === r ? {} : r, a = o.title, l = o.video_publish_time,
                s = o.video_abstract, u = o.user_info;
            if (!a || !l) return null;
            var c = (0, Se._3)(l), d = null == u ? void 0 : u.name, f = d ? "锛岀敱".concat(d, "涓婁紶") : "";
            return R.createElement(mo.ql, {
                title: "".concat(a, " - 瑗跨摐瑙嗛"),
                meta: [{
                    name: "keywords",
                    content: "瑗跨摐瑙嗛,鐢靛奖,鐢佃鍓�,娓告垙,缁艰壓,鏂伴椈,缇庨,鎼炵瑧,鍔ㄦ极, NBA,闊充箰,MV,楂樻竻,vlog,灏戝効,鍐涗簨,浣撹偛,鏃呮父"
                }, {
                    name: "description",
                    content: we()(t = we()(n = we()(i = "".concat(a, "锛屼簬")).call(i, c, "涓婄嚎")).call(n, f, "銆�")).call(t, s, "銆傝タ鐡滆棰戜负鎮ㄦ彁渚涢珮娓呰棰戯紝鐢婚潰娓呮櫚銆佹挱鏀炬祦鐣咃紝鐪嬩赴瀵屻€侀珮璐ㄩ噺瑙嗛灏变笂瑗跨摐瑙嗛銆�")
                }]
            })
        }, il = n(41266), rl = n(23279), ol = n.n(rl);

        function al(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ll(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? al(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : al(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var sl = function (e) {
                return e && e.Math == Math && e
            },
            ul = sl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || sl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || sl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || sl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ul.globalThis = ul, ul.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var cl = function (e) {
                var t = e.allList, n = e.itemHeight, i = e.overflow, r = void 0 === i ? 10 : i, o = e.minUpdateSpeed,
                    a = void 0 === o ? 10 : o, l = t.length, s = (0, R.useState)([]), u = (0, m.Z)(s, 2), c = u[0],
                    d = u[1], f = (0, ro.Z)(), p = (0, m.Z)(f, 2), v = p[0], h = p[1], _ = (0, R.useRef)(!1),
                    g = (0, R.useRef)((function () {
                        return null
                    })), b = function (e) {
                        for (var i = 0, r = 0; r < e; r++) void 0 !== t[r] && i++;
                        return i * n
                    }, y = function () {
                        for (var e = 0, i = 0; i < l; i++) void 0 !== t[i] && e++;
                        return e * n
                    }, x = (0, R.useState)({height: y(), paddingTop: 0}), Z = (0, m.Z)(x, 2), E = Z[0], j = Z[1];
                g.current = function () {
                    for (var e = v.current.scrollTop, i = Math.max(0, Math.floor(e / n) - r), o = 0, a = 0, s = 0; s < l && o < i; s++) a++, void 0 !== t[s] && o++;
                    for (var u = 2 * r + Math.ceil(h.height / n), c = [], f = a, m = 0; m < u; m++) for (; f < l;) {
                        if (void 0 !== t[f]) {
                            c.push({index: f, data: t[f]}), f++;
                            break
                        }
                        f++
                    }
                    d(c), j(ll(ll({}, E), {}, {height: y(), paddingTop: b(a)}))
                }, (0, R.useLayoutEffect)((function () {
                    if (h.height) {
                        var e = 0, t = 0, n = v.current, i = ol()((function () {
                            g.current()
                        }), 50), r = function (n) {
                            var r = n.timeStamp - e, o = Math.abs(v.current.scrollTop - t);
                            e = n.timeStamp, t = v.current.scrollTop, o / r * 10 < a && g.current(), i()
                        };
                        return _.current ? g.current() : setTimeout((function () {
                            g.current()
                        }), 100), n.addEventListener("scroll", r), _.current = !0, function () {
                            n.removeEventListener("scroll", r)
                        }
                    }
                }), [t, h.height, n]);
                var S = (0, R.useRef)([]), k = (0, R.useRef)([]);
                return (0, R.useEffect)((function () {
                    var e = v.current;
                    if (e) {
                        var t = function () {
                            var t, n = e.scrollTop;
                            if (0 === n) w()(t = S.current).call(t, (function (e) {
                                return e.callback()
                            })); else if (n >= e.scrollHeight - h.height) {
                                var i;
                                w()(i = k.current).call(i, (function (e) {
                                    return e.callback()
                                }))
                            }
                        };
                        return e.addEventListener("scroll", t), function () {
                            e.removeEventListener("scroll", t)
                        }
                    }
                }), [v.current, h.height]), {
                    renderList: c, containerRef: v, scrollTo: function (e) {
                        var t = b(e) + .01;
                        v.current && (v.current.scrollTo ? v.current.scrollTo({top: t}) : v.current.scrollTop = t)
                    }, style: E, onReachTop: function (e) {
                        "function" == typeof e ? S.current.push({callback: e}) : console.error("callback is not a function")
                    }, onReachBottom: function (e) {
                        "function" == typeof e ? k.current.push({callback: e}) : console.error("callback is not a function")
                    }
                }
            }, dl = function (e) {
                return e && e.Math == Math && e
            },
            fl = dl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || dl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || dl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || dl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        fl.globalThis = fl, fl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ml = (0, R.forwardRef)((function (e, t) {
            var n = e.allList, i = e.className, r = e.renderPlaceholder, o = e.renderItem, a = (0, tr.Z)(), l = a.rank,
                s = void 0 === l ? 1 : l, u = a.offset, c = void 0 === u ? 0 : u, d = (0, R.useState)(100),
                f = (0, m.Z)(d, 2), p = f[0], v = f[1], h = (0, R.useState)(!1), _ = (0, m.Z)(h, 2), g = _[0], b = _[1],
                y = (0, R.useRef)(null), x = cl({allList: n, itemHeight: p}), Z = x.renderList, E = x.containerRef,
                j = x.scrollTo, S = x.style;
            return (0, R.useEffect)((function () {
                if (!g && null != y && y.current && null != E && E.current) {
                    var e, t, n, i, r,
                        o = null == E || null === (e = E.current) || void 0 === e || null === (t = e.children) || void 0 === t || null === (n = t[0]) || void 0 === n || null === (i = n.children) || void 0 === i || null === (r = i[0]) || void 0 === r ? void 0 : r.offsetHeight;
                    o && o !== p && (v(o), b(!0))
                }
            }), [null == E ? void 0 : E.current, g, null == y ? void 0 : y.current]), (0, R.useEffect)((function () {
                g && j(Number(c) + Number(s) - 1)
            }), [g]), (0, R.useImperativeHandle)(t, (function () {
                return {scrollTo: j}
            })), (0, R.useEffect)((function () {
                var e = E.current;
                return e && (e.addEventListener("DOMMouseScroll", Se.AK), e.addEventListener("mousewheel", Se.AK)), function () {
                    e && (e.removeEventListener("DOMMouseScroll", Se.AK), e.removeEventListener("mousewheel", Se.AK))
                }
            }), [E.current]), R.createElement("div", {
                ref: E,
                className: i
            }, R.createElement("div", {style: S}, w()(Z).call(Z, (function (e, t) {
                return "number" == typeof e.data ? r ? r(e.index) : R.createElement("div", {
                    key: "empty_".concat(t),
                    style: {height: p}
                }) : o(e.data, e.index)
            })), Z.length ? R.createElement("div", {ref: y}) : null))
        }));

        function pl(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function vl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pl(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : pl(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var hl = function (e) {
                return e && e.Math == Math && e
            },
            _l = hl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || hl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || hl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || hl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        _l.globalThis = _l, _l.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var gl = function (e) {
                var t, n, i, r, o, a = e.from_gid, l = e.video, s = e.isFullscreen, u = e.rank, c = e.offset,
                    d = e.filterTS, f = e.order, p = e.currentPlay, v = e.group_id, h = e.video_user_like,
                    _ = e.onIsCollectedChanged, g = (0, Ki.UO)().userId, b = (0, jo.Z)(), y = (0, m.Z)(b, 2), w = y[0],
                    x = y[1], Z = {rank_in_block: p + 1}, E = {
                        from_gid: a,
                        sourcepage: De.JG.userdetail,
                        list_entrance: "anyVideo",
                        recommend_type: "playlist",
                        page_type: "anyVideo",
                        impr_type: "__pgc__",
                        category_name: "pgc",
                        fullscreen: s ? "fullscreen" : "nofullscreen"
                    }, j = 1 === h;
                (0, R.useEffect)((function () {
                    x && e.onInView(c, !1)
                }), [x]);
                return R.createElement(_r.Z, {
                    ref: w,
                    className: D()("projection_seriesItem"),
                    title: e.title,
                    RBTag: void 0 !== e.video_duration ? (0, Se.LU)(e.video_duration) : void 0,
                    coverURL: (null === (t = e.large_image_list) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.url) || (null === (i = e.middle_image) || void 0 === i ? void 0 : i.url),
                    anchorProps: vl(vl({}, (0, Q.ZF)({
                        gid: e.item_id || e.group_id,
                        query: vl({logPb: Se.QW.stringify(vl(vl({}, e.log_pb), E))}, Z)
                    })), {}, {
                        href: globalThis.getFilterXss().filterUrl((0, Se.S4)({
                            authorId: g,
                            rank: u,
                            offset: c,
                            order: f,
                            filterTS: d
                        }), null, {logType: "js.href/src", reportOnly: "all"}), isRouterLink: (0, Qi.Z)(), target: "_self"
                    }),
                    bottomInfo: R.createElement(gr.Z, {
                        video_watch_count: e.video_detail_info.video_watch_count,
                        pieces: [(0, Se.wl)(e.publish_time)]
                    }),
                    videoURL: e.preview_url,
                    clientShowParams: {log_pb: e.log_pb},
                    inView: function () {
                        return X.Z.common.videoShow(vl({log_pb: vl(vl(vl({}, l.log_pb || {}), e.log_pb || {}), E)}, Z))
                    },
                    isCollected: j,
                    gid: v,
                    onIsCollectedChanged: function (e) {
                        null == _ || _(e)
                    },
                    hasPlayingMask: !0,
                    isCoCreate: null === (r = e.co_creators_video_info) || void 0 === r ? void 0 : r.is_co_creators_video,
                    coCreatorList: null === (o = e.co_creators_video_info) || void 0 === o ? void 0 : o.creator_list
                })
            }, bl = function (e) {
                return e && e.Math == Math && e
            },
            yl = bl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || bl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || bl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || bl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        yl.globalThis = yl, yl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var wl = function (e, t) {
            var n = e.user_info, i = e.co_creators_video_info;
            if (null != i && i.is_co_creators_video) {
                var r, o = null === (r = i.creator_list) || void 0 === r ? void 0 : yt()(r).call(r, (function (e) {
                    return String(e.user_id) === t
                }));
                if (o) return o.user_info.name
            }
            return n.name
        }, xl = ["offset", "onInView", "style"];

        function Zl(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function El(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zl(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Zl(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var jl = function (e) {
                return e && e.Math == Math && e
            },
            Sl = jl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || jl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || jl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || jl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Sl.globalThis = Sl, Sl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var kl = "projection-allvideo", Pl = function (e) {
                var t = e.offset, n = e.onInView, i = e.style, r = (0, il.Z)(e, xl), o = (0, jo.Z)(), a = (0, m.Z)(o, 2),
                    l = a[0], s = a[1];
                return (0, R.useEffect)((function () {
                    s && n(t)
                }), [s]), R.createElement("div", (0, f.Z)({ref: l, style: i}, r))
            }, Nl = function (e) {
                var t, n, i = e.currentGroupId, r = e.isFullscreen, o = e.style, a = e.isTheater, l = (0, je.f)(),
                    s = (0, Ki.UO)().userId, u = l.video, c = l.playlist, p = void 0 === c ? {} : c, v = l.setPlaylistNum,
                    h = l.isCollectedGlobal, g = l.setIsCollectedGlobal, b = l.setUserVideoList, y = p.item_num,
                    x = void 0 === y ? 0 : y, Z = l.userVideoList, E = void 0 === Z ? C()(M()(t = Array(x)).call(t)) : Z,
                    j = u.video_publish_time, S = "string" == typeof j ? Va()(j, 10) : j, k = (0, tr.Z)(), P = k.order,
                    N = k.filterTS, T = k.rank, I = void 0 === T ? 1 : T, F = k.offset, O = void 0 === F ? 0 : F,
                    A = (0, R.useMemo)((function () {
                        return wl(u, s)
                    }), [s, u]), U = we()(n = "".concat(A, "鐨勬渶")).call(n, "hot" === P ? "鐑�" : "鏂�", "瑙嗛"),
                    X = (0, R.useRef)({}), V = (0, R.useState)(!1), H = (0, m.Z)(V, 2), z = H[0], B = H[1],
                    G = (0, R.useRef)(!1), W = (0, R.useState)(!0), Y = (0, m.Z)(W, 2), q = Y[0], K = Y[1],
                    J = function () {
                        return 0 === Number(O) ? Number(I) - 1 : Number(O) + Number(I) - 1 + Number(G.current)
                    }, Q = (0, R.useState)(J), $ = (0, m.Z)(Q, 2), ee = $[0], te = $[1], ne = (0, R.useRef)({}),
                    ie = (0, R.useRef)([]), re = (0, R.useRef)((0, Dt.Z)(E));
                (0, R.useEffect)((function () {
                    re.current = (0, Dt.Z)(E)
                }), [E]);
                var oe = function () {
                    var e = (0, d.Z)(_().mark((function e(t) {
                        return _().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return X.current[t] = !0, e.abrupt("return", Ye.Z.video.getAuthorVideoList({
                                        to_user_id: s,
                                        offset: 30 * t,
                                        limit: 30,
                                        order: P,
                                        filterTS: N,
                                        maxBehotTime: 0 === t ? void 0 : S,
                                        isHome: !1
                                    }).then((function (e) {
                                        var t = e.data.data.videoList;
                                        return void 0 === t ? [] : t
                                    })).catch((function () {
                                        X.current[t] = !1
                                    })));
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), ae = function (e, t) {
                    var n, i = (0, Dt.Z)(E);
                    G.current ? 0 === t ? ie.current = [e] : i[t - 1] = e : i[t] = e, re.current = we()(n = []).call(n, (0, Dt.Z)(ie.current), (0, Dt.Z)(i)), b(i)
                }, le = function () {
                    var e = (0, d.Z)(_().mark((function e(t) {
                        var n;
                        return _().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!X.current[t]) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, oe(t);
                                case 4:
                                    if (n = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    0 === t && n.length && n[0].is_top && (ie.current = [n.shift()], G.current = !0), b((function (e) {
                                        for (var i, r = (0, Dt.Z)(e), o = 0; o < 30; o++) {
                                            var a = 30 * t + o;
                                            if (a >= x) break;
                                            n[o] ? r[a] = n[o] : r[a] = void 0
                                        }
                                        return re.current = we()(i = []).call(i, (0, Dt.Z)(ie.current), (0, Dt.Z)(r)), r
                                    })), !z && B(!0);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), se = function (e) {
                    var t = ue(e);
                    t > -1 && le(t)
                }, ue = function (e) {
                    return e / 30
                };
                return (0, R.useEffect)((function () {
                    if (re.current.length > 0 && void 0 !== u) {
                        for (var e, t = J() + 1; t < re.current.length; t++) {
                            var n = re.current[t];
                            if ("number" == typeof n) {
                                var i = G ? Math.floor((t - 1) / 30) : Math.floor(t / 30);
                                le(i);
                                break
                            }
                            if (void 0 !== n) {
                                e = El({}, n);
                                break
                            }
                        }
                        l.setNextVideoOfSpecialList(e)
                    }
                }), [E, u, I, O]), (0, R.useEffect)((function () {
                    le(ue(O))
                }), []), (0, R.useEffect)((function () {
                    z && K(!0)
                }), [I, O, z]), (0, R.useEffect)((function () {
                    !a && q && z && (ne.current.scrollTo(J()), K(!1))
                }), [q, a, z]), (0, R.useEffect)((function () {
                    !function () {
                        for (var e = re.current, t = 0, n = 0; n < e.length && "number" != typeof e[n]; n++) void 0 !== e[n] && t++;
                        n === e.length && v(t), n = 0, t = 0;
                        for (var i = J(); n < i && "number" != typeof e[n]; n++) void 0 !== e[n] && t++;
                        te(n === i ? t : i)
                    }()
                }), [E, I, O]), (0, ct.Z)((function () {
                    var e;
                    w()(e = re.current).call(e, (function (e, t) {
                        if ("number" != typeof e && void 0 !== e && e.group_id === i) {
                            var n = El(El({}, e), {}, {video_user_like: h ? 1 : 0});
                            ae(n, t)
                        }
                    }))
                }), [h]), z ? R.createElement("div", {
                    className: "".concat(kl, "-container"),
                    style: o
                }, R.createElement("div", {className: "".concat(kl, "-header")}, R.createElement("div", {className: "".concat(kl, "-title-wrapper")}, R.createElement("span", {
                    className: "".concat(kl, "-title"),
                    title: U
                }, U.length > 30 ? "".concat(L()(U).call(U, 0, 30), "...") : U), R.createElement("span", {className: "".concat(kl, "-indicator")}, ee + 1, "聽/聽", x))), R.createElement(ml, {
                    allList: re.current,
                    ref: ne,
                    renderPlaceholder: function (e) {
                        return R.createElement(Pl, {
                            key: "placeholder_".concat(e),
                            style: {height: 94, marginBottom: 16},
                            offset: 30 * Math.floor(e / 30),
                            index: e,
                            onInView: se
                        })
                    },
                    className: "projection-series-list",
                    renderItem: function (e, t) {
                        var n, o = J() === t;
                        return R.createElement("div", {
                            key: we()(n = "".concat(e.item_id, "_")).call(n, e.group_id),
                            className: D()("projection-series-list-item", {focus: o})
                        }, R.createElement(gl, (0, f.Z)({log_pb: ""}, e, {
                            prefix: null,
                            from_gid: i,
                            video: u,
                            onInView: se,
                            isFullscreen: r,
                            filterTS: N,
                            order: P,
                            currentPlay: ee,
                            onIsCollectedChanged: function (n) {
                                i === e.group_id && g(n);
                                var r = El(El({}, e), {}, {video_user_like: n ? 1 : 0});
                                ae(r, t)
                            }
                        })))
                    }
                })) : R.createElement(Xr.F_, {
                    className: "projection-series-container",
                    count: u.rank ? u.rank + 7 : 8,
                    theme: "dark"
                })
            }, Tl = function (e) {
                return e && e.Math == Math && e
            },
            Cl = Tl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Tl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Tl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Tl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Cl.globalThis = Cl, Cl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Il = function (e) {
            var t = e.isTheater, n = e.currentGroupId, i = e.isFullscreen, r = (0, R.useContext)(je.Z).video,
                o = r.rank;
            return R.createElement(R.Fragment, null, o && R.createElement(nl, {video: r}), R.createElement(Nl, {
                isTheater: t,
                currentGroupId: n,
                isFullscreen: i
            }))
        };

        function Ml(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Fl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ml(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Ml(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Ll = function (e) {
                return e && e.Math == Math && e
            },
            Rl = Ll("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Ll("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Ll("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Ll("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Rl.globalThis = Rl, Rl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ol = function (e) {
            var t, n, i, r = e.from_gid, o = e.video, a = e.isFullscreen, l = e.rank, s = e.offset, u = e.filterTS,
                c = e.order, d = e.currentPlay, f = e.group_id, p = e.video_user_like, v = e.onIsCollectedChanged,
                h = e.onClick, _ = (0, Ki.UO)().userId, g = (0, jo.Z)(), b = (0, m.Z)(g, 2), y = b[0], w = b[1],
                x = {rank_in_block: d + 1}, Z = {
                    from_gid: r,
                    sourcepage: De.JG.userdetail,
                    list_entrance: "anyVideo",
                    recommend_type: "playlist",
                    page_type: "anyVideo",
                    impr_type: "__pgc__",
                    category_name: "pgc",
                    fullscreen: a ? "fullscreen" : "nofullscreen"
                }, E = 1 === p;
            (0, R.useEffect)((function () {
                w && e.onInView(s, !1)
            }), [w]);
            return R.createElement(_r.Z, {
                ref: y,
                className: D()("projection_seriesItem"),
                title: e.title,
                RBTag: void 0 !== e.video_duration ? (0, Se.LU)(e.video_duration) : void 0,
                coverURL: (null === (t = e.large_image_list) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.url) || (null === (i = e.middle_image) || void 0 === i ? void 0 : i.url),
                anchorProps: Fl(Fl({}, (0, Q.ZF)({
                    gid: e.item_id || e.group_id,
                    query: Fl({logPb: Se.QW.stringify(Fl(Fl({}, e.log_pb), Z))}, x)
                })), {}, {
                    href: globalThis.getFilterXss().filterUrl((0, Se.S4)({
                        authorId: _,
                        rank: l,
                        offset: s,
                        order: c,
                        filterTS: u
                    }), null, {logType: "js.href/src", reportOnly: "all"}),
                    isRouterLink: (0, Qi.Z)(),
                    target: "_self",
                    onClick: function () {
                        h && h()
                    }
                }),
                bottomInfo: R.createElement(gr.Z, {
                    video_watch_count: e.video_detail_info.video_watch_count,
                    pieces: [(0, Se.wl)(e.publish_time)]
                }),
                videoURL: e.preview_url,
                clientShowParams: {log_pb: e.log_pb},
                inView: function () {
                    return X.Z.common.videoShow(Fl({log_pb: Fl(Fl(Fl({}, o.log_pb || {}), e.log_pb || {}), Z)}, x))
                },
                isCollected: E,
                gid: f,
                onIsCollectedChanged: function (e) {
                    null == v || v(e)
                },
                hasPlayingMask: !0
            })
        }, Dl = ["offset", "onInView", "style"];

        function Al(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ul(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Al(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : Al(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Xl = function (e) {
                return e && e.Math == Math && e
            },
            Vl = Xl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Xl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Xl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Xl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Vl.globalThis = Vl, Vl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Hl = "projection-allvideo", zl = function (e) {
                var t = e.offset, n = e.onInView, i = e.style, r = (0, il.Z)(e, Dl), o = (0, jo.Z)(), a = (0, m.Z)(o, 2),
                    l = a[0], s = a[1];
                return (0, R.useEffect)((function () {
                    s && n(t)
                }), [s]), R.createElement("div", (0, f.Z)({ref: l, style: i}, r))
            }, Bl = function (e) {
                var t, n, i = e.currentGroupId, r = e.isFullscreen, o = e.style, a = e.isTheater,
                    l = (e.showFullScreenList, e.handleFullscreenListVisible), s = (0, je.f)(), u = (0, Ki.UO)().userId,
                    c = s.video, p = s.playlist, v = void 0 === p ? {} : p, h = s.setPlaylistNum, g = s.isCollectedGlobal,
                    b = s.setIsCollectedGlobal, y = s.setUserVideoList, x = v.item_num, Z = void 0 === x ? 0 : x,
                    E = s.userVideoList, j = void 0 === E ? C()(M()(t = Array(Z)).call(t)) : E, S = c.video_publish_time,
                    k = "string" == typeof S ? Va()(S, 10) : S, P = (0, tr.Z)(), N = P.order, T = P.filterTS, I = P.rank,
                    F = void 0 === I ? 1 : I, O = P.offset, A = void 0 === O ? 0 : O, U = (0, R.useMemo)((function () {
                        return wl(c, u)
                    }), [u, c]), X = we()(n = "".concat(U, "鐨勬渶")).call(n, "hot" === N ? "鐑�" : "鏂�", "瑙嗛"),
                    V = (0, R.useRef)({}), H = (0, R.useState)(!1), z = (0, m.Z)(H, 2), B = z[0], G = z[1],
                    W = (0, R.useRef)(!1), Y = (0, R.useState)(!0), q = (0, m.Z)(Y, 2), K = q[0], J = q[1],
                    Q = function () {
                        return 0 === Number(A) ? Number(F) - 1 : Number(A) + Number(F) - 1 + Number(W.current)
                    }, $ = (0, R.useState)(Q), ee = (0, m.Z)($, 2), te = ee[0], ne = ee[1], ie = (0, R.useRef)({}),
                    re = (0, R.useRef)([]), oe = (0, R.useRef)((0, Dt.Z)(j));
                (0, R.useEffect)((function () {
                    oe.current = (0, Dt.Z)(j)
                }), [j]);
                var ae = function () {
                    var e = (0, d.Z)(_().mark((function e(t) {
                        return _().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return V.current[t] = !0, e.abrupt("return", Ye.Z.video.getAuthorVideoList({
                                        to_user_id: u,
                                        offset: 30 * t,
                                        limit: 30,
                                        order: N,
                                        filterTS: T,
                                        maxBehotTime: 0 === t ? void 0 : k,
                                        isHome: !1
                                    }).then((function (e) {
                                        var t = e.data.data.videoList;
                                        return void 0 === t ? [] : t
                                    })).catch((function () {
                                        V.current[t] = !1
                                    })));
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), le = function (e, t) {
                    var n, i = (0, Dt.Z)(j);
                    W.current ? 0 === t ? re.current = [e] : i[t - 1] = e : i[t] = e, oe.current = we()(n = []).call(n, (0, Dt.Z)(re.current), (0, Dt.Z)(i)), y(i)
                }, se = function () {
                    var e = (0, d.Z)(_().mark((function e(t) {
                        var n;
                        return _().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!V.current[t]) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, ae(t);
                                case 4:
                                    if (n = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    0 === t && n.length && n[0].is_top && (re.current = [n.shift()], W.current = !0), y((function (e) {
                                        for (var i, r = (0, Dt.Z)(e), o = 0; o < 30; o++) {
                                            var a = 30 * t + o;
                                            if (a >= Z) break;
                                            n[o] ? r[a] = n[o] : r[a] = void 0
                                        }
                                        return oe.current = we()(i = []).call(i, (0, Dt.Z)(re.current), (0, Dt.Z)(r)), r
                                    })), !B && G(!0);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), ue = function (e) {
                    var t = ce(e);
                    t > -1 && se(t)
                }, ce = function (e) {
                    return e / 30
                };
                return (0, R.useEffect)((function () {
                    if (oe.current.length > 0 && void 0 !== c) {
                        for (var e, t = Q() + 1; t < oe.current.length; t++) {
                            var n = oe.current[t];
                            if ("number" == typeof n) {
                                var i = W ? Math.floor((t - 1) / 30) : Math.floor(t / 30);
                                se(i);
                                break
                            }
                            if (void 0 !== n) {
                                e = Ul({}, n);
                                break
                            }
                        }
                        s.setNextVideoOfSpecialList(e)
                    }
                }), [j, c, F, A]), (0, R.useEffect)((function () {
                    se(ce(A))
                }), []), (0, R.useEffect)((function () {
                    B && J(!0)
                }), [F, A, B]), (0, R.useEffect)((function () {
                    !a && K && B && r && (ie.current.scrollTo(Q()), J(!1))
                }), [K, a, B, r]), (0, R.useEffect)((function () {
                    !function () {
                        for (var e = oe.current, t = 0, n = 0; n < e.length && "number" != typeof e[n]; n++) void 0 !== e[n] && t++;
                        n === e.length && h(t), n = 0, t = 0;
                        for (var i = Q(); n < i && "number" != typeof e[n]; n++) void 0 !== e[n] && t++;
                        ne(n === i ? t : i)
                    }()
                }), [j, F, A]), (0, ct.Z)((function () {
                    var e;
                    w()(e = oe.current).call(e, (function (e, t) {
                        if ("number" != typeof e && void 0 !== e && e.group_id === i) {
                            var n = Ul(Ul({}, e), {}, {video_user_like: g ? 1 : 0});
                            le(n, t)
                        }
                    }))
                }), [g]), B ? R.createElement("div", {
                    className: "".concat(Hl, "-container"),
                    style: o
                }, R.createElement("div", {className: "".concat(Hl, "-header")}, R.createElement("div", {className: "".concat(Hl, "-title-wrapper")}, R.createElement("span", {
                    className: "".concat(Hl, "-title"),
                    title: X
                }, X.length > 30 ? "".concat(L()(X).call(X, 0, 30), "...") : X), R.createElement("span", {className: "".concat(Hl, "-indicator")}, te + 1, "聽/聽", Z)), R.createElement(lo.x8P, {
                    className: "".concat(Hl, "__close__icon"),
                    height: 22,
                    width: 22,
                    onClick: function () {
                        return l && l(!1)
                    }
                })), R.createElement(ml, {
                    allList: oe.current, itemHeight: 75, ref: ie, renderPlaceholder: function (e) {
                        return R.createElement(zl, {
                            key: "placeholder_".concat(e),
                            style: {height: 94, marginBottom: 16},
                            offset: 30 * Math.floor(e / 30),
                            index: e,
                            onInView: ue
                        })
                    }, className: "projection-series-list", renderItem: function (e, t) {
                        var n, o = Q() === t;
                        return R.createElement("div", {
                            key: we()(n = "".concat(e.item_id, "_")).call(n, e.group_id),
                            className: D()("projection-series-list-item", {focus: o})
                        }, R.createElement(Ol, (0, f.Z)({log_pb: ""}, e, {
                            prefix: null,
                            from_gid: i,
                            video: c,
                            onInView: ue,
                            isFullscreen: r,
                            filterTS: T,
                            order: N,
                            currentPlay: te,
                            onIsCollectedChanged: function (n) {
                                i === e.group_id && b(n);
                                var r = Ul(Ul({}, e), {}, {video_user_like: n ? 1 : 0});
                                le(r, t)
                            },
                            onClick: function () {
                                return l && l(!1)
                            }
                        })))
                    }
                })) : R.createElement(Xr.F_, {
                    className: "projection-series-container",
                    count: c.rank ? c.rank + 7 : 8,
                    theme: "dark"
                })
            }, Gl = function (e) {
                return e && e.Math == Math && e
            },
            Wl = Gl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Gl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Gl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Gl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Wl.globalThis = Wl, Wl.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Yl = function (e) {
            var t = e.isTheater, n = e.currentGroupId, i = e.isFullscreen, r = e.showFullScreenList,
                o = e.handleFullscreenListVisible, a = (0, R.useContext)(je.Z).video, l = a.rank;
            return R.createElement(R.Fragment, null, l && R.createElement(nl, {video: a}), R.createElement(Bl, {
                isTheater: t,
                currentGroupId: n,
                isFullscreen: i,
                showFullScreenList: r,
                handleFullscreenListVisible: o
            }))
        };

        function ql(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Kl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ql(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : ql(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var Jl = function (e) {
                return e && e.Math == Math && e
            },
            Ql = Jl("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Jl("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Jl("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Jl("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ql.globalThis = Ql, Ql.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var $l = function () {
                var e = (0, d.Z)(_().mark((function e(t) {
                    var n, i, r, o, a, l;
                    return _().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.group_id, i = t.seriesId, r = t.pSeriesId, o = {
                                        video: {},
                                        series: {},
                                        pSeries: {},
                                        shouldReturn404: !1,
                                        key: hu({group_id: n, pSeriesId: r})
                                    }, !r) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 5, Ye.Z.video.getPSeriesV2({pSeriesId: r, groupId: n}).then((function (e) {
                                    if (200 === e.data.code) return e.data.data
                                }));
                            case 5:
                                void 0 !== (a = e.sent) && (o.video = a.video, o.pSeries = {
                                    id: r,
                                    seriesInfo: a.pSeries.seriesInfo,
                                    videoList: a.pSeries.videoList,
                                    firstVideo: a.pSeries.firstVideo
                                }), e.next = 17;
                                break;
                            case 9:
                                return e.next = 11, Ye.Z.video.getVideo({
                                    group_id: n,
                                    should_redirect: i ? "0" : "1"
                                }).then((function (e) {
                                    var t = e.data;
                                    if (200 === t.code) return t.data.video;
                                    302 === t.code ? window.location.href = globalThis.getFilterXss().filterUrl(t.data + window.location.search, null, {
                                        logType: "js.window.location",
                                        reportOnly: "all"
                                    }) : 404 === t.code && (o.shouldReturn404 = !0)
                                })).catch((function () {
                                    o.shouldReturn404 = !0
                                }));
                            case 11:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 14;
                                    break
                                }
                                e.t0 = {};
                            case 14:
                                if (o.video = e.t0, !o.shouldReturn404) {
                                    e.next = 17;
                                    break
                                }
                                return e.abrupt("return", o);
                            case 17:
                                return l = o.video.item_id, o.item_id = l, e.abrupt("return", o);
                            case 20:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), es = function () {
                var e = (0, d.Z)(_().mark((function e(t) {
                    var n, i, r, o, a, l, s, u;
                    return _().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.userId, i = t.rank, r = t.order, o = t.group_id, a = t.offset, l = t.filterTS, s = {
                                    video: {},
                                    pSeries: {},
                                    playlist: {},
                                    shouldReturn404: !1,
                                    key: hu({group_id: o})
                                }, e.next = 4, Ye.Z.user.getPlayList({
                                    userId: n,
                                    rank: i,
                                    order: r,
                                    offset: a,
                                    filterTS: l
                                }).then((function (e) {
                                    var t, n;
                                    if (200 === e.data.code) return (null === (t = e.data.data) || void 0 === t || null === (n = t.gidInformation) || void 0 === n ? void 0 : n.packerData) || {}
                                }));
                            case 4:
                                return (u = e.sent) && (s.video = u.video, s.playlist = u.playlist, s.key = u.key), e.abrupt("return", s);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), ts = function (e) {
                var t = e.projectionData, n = e.setProjectionData, i = e.pageKey, r = e.initialPlayLoopState,
                    o = e.resetRelatedSetting, a = e.ids, l = e.series, s = e.setLoadingEvent, u = e.LogInfo_Ref,
                    c = e.getLogInfoFromData, f = e.setIsFetchFailed, p = e.type, v = a || {}, h = v.id, g = v.seriesId,
                    b = v.pSeriesId, y = v.userId, w = v.rank, x = v.offset, Z = (0, R.useState)(!1), E = (0, m.Z)(Z, 2),
                    j = E[0], S = E[1], k = (0, R.useRef)(""), P = (0, R.useRef)(X.Z.projection.createStayPage()),
                    N = (0, tr.Z)(), T = N.order, C = void 0 === T ? "new" : T, I = N.filterTS, M = N.from_page,
                    F = (0, $.uu)(), L = function (e) {
                        return e.key
                    }, O = h || t.video.group_id || t.video.item_id || "", D = y ? {
                        page_type: "anyVideo",
                        impr_type: "__pgc__",
                        recommend_type: "playlist",
                        category_name: "pgc",
                        list_entrance: "anyVideo",
                        sourcepage: "userdetail",
                        playlist_type: "general"
                    } : {}, A = function (e) {
                        if (P.current = X.Z.projection.createStayPage(), e.key) {
                            var i, r, o = function (e) {
                                if (e) {
                                    var t = L(e);
                                    return k.current !== t ? (k.current = t, c(e) || {}) : u.current
                                }
                                return {isAncestor: !1}
                            }(e), a = P.current, l = "1" === o.auto ? "" : M;
                            a.init(Kl(Kl({
                                auto: "1" === o.auto,
                                log_pb: o.logPb,
                                category_tag: null == t || null === (i = t.video) || void 0 === i ? void 0 : i.tag,
                                parentLogPb: o.isAncestor ? void 0 : o.parentLogPb,
                                group_id: O,
                                detail_merge: !Boolean(p),
                                from_page: l
                            }, D), {}, {player_status: F ? "fullscreen" : "noFullscreen"})), a.start(), X.Z.projection.goDetail(Kl({
                                auto: "1" === o.auto,
                                log_pb: o.logPb,
                                category_tag: null == t || null === (r = t.video) || void 0 === r ? void 0 : r.tag,
                                parentLogPb: o.isAncestor ? void 0 : o.parentLogPb,
                                from_gid: o.from_gid,
                                group_id: O,
                                player_status: F ? "fullscreen" : "noFullscreen",
                                from_page: l
                            }, D)), u.current = o, e !== t && n(e)
                        }
                    };
                (0, R.useEffect)((function () {
                    if (!y) {
                        var e = !1;
                        return function () {
                            u.apply(this, arguments)
                        }(), function () {
                            var t;
                            e = !0, null === (t = P.current) || void 0 === t || t.finish()
                        }
                    }

                    function u() {
                        return u = (0, d.Z)(_().mark((function u() {
                            var c, m, p;
                            return _().wrap((function (u) {
                                for (; ;) switch (u.prev = u.next) {
                                    case 0:
                                        return m = function () {
                                            return (m = (0, d.Z)(_().mark((function e() {
                                                var r, u, c, d, f, m, p;
                                                return _().wrap((function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (u = i, (r = t) && (u = L(t)), r && u === i) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            return r.video && (r.video.vid = "", r.key = "", null != a && a.id && (m = null == a ? void 0 : a.id, (p = yt()(c = we()(d = []).call(d, (0, Dt.Z)((null == l ? void 0 : l.videoList) || []), (0, Dt.Z)((null === (f = r.pSeries) || void 0 === f ? void 0 : f.videoList) || []))).call(c, (function (e, t) {
                                                                return String(m) === String(e.group_id) || String(m) === String(e.item_id)
                                                            }))) && (r.video.rank = p.rank)), n(r)), o(), e.next = 8, s($l({
                                                                group_id: h,
                                                                seriesId: g,
                                                                pSeriesId: b
                                                            }).then((function (e) {
                                                                r = e
                                                            })));
                                                        case 8:
                                                            return e.abrupt("return", r);
                                                        case 9:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))).apply(this, arguments)
                                        }, c = function () {
                                            return m.apply(this, arguments)
                                        }, r(), f(!1), u.next = 6, c().catch(c).catch((function () {
                                            return f(!0)
                                        }));
                                    case 6:
                                        if (p = u.sent, !e) {
                                            u.next = 9;
                                            break
                                        }
                                        return u.abrupt("return");
                                    case 9:
                                        if (p) {
                                            u.next = 12;
                                            break
                                        }
                                        return f(!0), u.abrupt("return");
                                    case 12:
                                        A(p);
                                    case 13:
                                    case"end":
                                        return u.stop()
                                }
                            }), u)
                        }))), u.apply(this, arguments)
                    }
                }), [i]), (0, R.useEffect)((function () {
                    if (y) {
                        if (!j) return A(t), void S(!0);
                        var e = !1;
                        return function () {
                            i.apply(this, arguments)
                        }(), function () {
                            e = !0
                        }
                    }

                    function i() {
                        return i = (0, d.Z)(_().mark((function i() {
                            var a, l, u;
                            return _().wrap((function (i) {
                                for (; ;) switch (i.prev = i.next) {
                                    case 0:
                                        return l = function () {
                                            return (l = (0, d.Z)(_().mark((function e() {
                                                var i;
                                                return _().wrap((function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return (i = t).video && (i.video.vid = "", i.key = "", n(i)), o(), e.next = 5, s(es({
                                                                group_id: h,
                                                                userId: y,
                                                                rank: w,
                                                                offset: x,
                                                                filterTS: I,
                                                                order: C
                                                            }).then((function (e) {
                                                                i = e
                                                            })));
                                                        case 5:
                                                            return e.abrupt("return", i);
                                                        case 6:
                                                        case"end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))).apply(this, arguments)
                                        }, a = function () {
                                            return l.apply(this, arguments)
                                        }, r(), i.next = 5, a().catch(a).catch((function () {
                                            return f(!0)
                                        }));
                                    case 5:
                                        if (u = i.sent, !e) {
                                            i.next = 8;
                                            break
                                        }
                                        return i.abrupt("return");
                                    case 8:
                                        if (u) {
                                            i.next = 11;
                                            break
                                        }
                                        return f(!0), i.abrupt("return");
                                    case 11:
                                        A(u);
                                    case 12:
                                    case"end":
                                        return i.stop()
                                }
                            }), i)
                        }))), i.apply(this, arguments)
                    }
                }), [w]), (0, R.useEffect)((function () {
                    return function () {
                        var e;
                        null === (e = P.current) || void 0 === e || e.finish()
                    }
                }), [w])
            }, ns = n(59142), is = n(19076), rs = n(24511), os = n(5799), as = n(62470), ls = n(42271), ss = function (e) {
                return e && e.Math == Math && e
            },
            us = ss("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || ss("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || ss("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || ss("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        us.globalThis = us, us.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var cs = (0, R.forwardRef)((function (e, t) {
            var n = e.lottieOptions, i = (0, R.useRef)(null);
            return (0, R.useImperativeHandle)(t, (function () {
                return {
                    play: function () {
                        var e;
                        null != (null === (e = i.current) || void 0 === e ? void 0 : e.anim) && (i.current.anim.setDirection(1), i.current.anim.goToAndPlay(0))
                    }, reverse: function () {
                        var e;
                        null != (null === (e = i.current) || void 0 === e ? void 0 : e.anim) && i.current.anim.setDirection(-1)
                    }
                }
            })), R.createElement("div", {className: D()("super-digg-lottie")}, R.createElement(ls.Z, {
                ref: i,
                options: n,
                onComplete: function () {
                    var e, t;
                    null === (e = i.current) || void 0 === e || null === (t = e.anim) || void 0 === t || t.goToAndStop(0)
                }
            }))
        })), ds = cs, fs = n(27513);

        function ms(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function ps(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ms(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : ms(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        function vs(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !te()) return !1;
                if (te().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(te()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = (0, le.Z)(e);
                if (t) {
                    var r = (0, le.Z)(this).constructor;
                    n = te()(i, arguments, r)
                } else n = i.apply(this, arguments);
                return (0, ae.Z)(this, n)
            }
        }

        var hs = function (e) {
                return e && e.Math == Math && e
            },
            _s = hs("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || hs("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || hs("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || hs("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        _s.globalThis = _s, _s.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var gs = {
                agree: "icon-thumbup2",
                disagree: "icon-share2",
                tipoff: "icon-report",
                collect: "icon-collection2",
                share: "icon-share2",
                superdigg: "icon-superdigg"
            }, bs = {autoplay: !1, path: n(50486), lastFrame: 25}, ys = {autoplay: !1, path: n(33597), lastFrame: 25},
            ws = function (e) {
                (0, oe.Z)(n, e);
                var t = vs(n);

                function n(e) {
                    var i, r;
                    return (0, ne.Z)(this, n), r = t.call(this, e), (0, p.Z)((0, re.Z)(r), "addWatchHistoryHandler_Ref", null), (0, p.Z)((0, re.Z)(r), "context", void 0), (0, p.Z)((0, re.Z)(r), "player", void 0), (0, p.Z)((0, re.Z)(r), "realSuperDiggHandler", void 0), (0, p.Z)((0, re.Z)(r), "getWatchProgress", (function () {
                        var e = r.props.context.video.history_duration;
                        if (e) return Number(e) / 1e3;
                        var t = (0, me.BP)({group_id: r.props.context.group_id});
                        return null != t ? t : 0
                    })), (0, p.Z)((0, re.Z)(r), "isBanAction", 1 === r.props.context.video.ban_action), (0, p.Z)((0, re.Z)(r), "superDiggLottieRef", R.createRef()), (0, p.Z)((0, re.Z)(r), "dataDelegate", (function (e) {
                        var t = function (e) {
                            var t;
                            return void 0 === r.state[e] ? null === (t = r.context.video) || void 0 === t ? void 0 : t[e] : r.state[e]
                        };
                        return Array.isArray(e) ? w()(e).call(e, (function (e) {
                            return t(e)
                        })) : t(e)
                    })), (0, p.Z)((0, re.Z)(r), "clickDiggHandler", (0, Se.Ye)((function () {
                        var e, t = r.dataDelegate(["user_digg", "user_super_digg", "video_like_count"]),
                            n = (0, m.Z)(t, 3), i = n[0], o = n[1], a = n[2];
                        return r.props.globalConfig.isLogin && ((e = i ? a - 1 : a + 1) < 0 && (e = 0), r.setState({
                            user_digg: !i,
                            user_super_digg: !1,
                            video_like_count: e
                        }), r.context.superDiggClickCountRef.current = 0, r.context.setIsDiggGlobal(!i), i && r.context.setIsSuperDiggGlobal(!1)), _t.a1({
                            item_id: r.props.context.item_id,
                            action: i ? "undigg" : "digg"
                        }).then((function (e) {
                            var t = e.data.data;
                            (0, Se.IT)(t) || r.isBanAction || t.Success && (window.Tea("detail_like", {
                                group_id: r.props.context.group_id + "",
                                author_id: fe()(r.props.context, "video.user_info.user_id") + "",
                                like_type: i ? "2" : "1"
                            }), i ? (X.Z.projection.rtUnlike(r.getEventParams()), o && X.Z.projection.rtUnSuperDigg(r.getEventParams())) : X.Z.projection.rtLike(r.getEventParams()))
                        }))
                    }), "like")), (0, p.Z)((0, re.Z)(r), "superDiggHandler", (0, Se.Ye)((function () {
                        var e, t = r.dataDelegate(["user_digg", "video_like_count"]), n = (0, m.Z)(t, 2), i = n[0],
                            o = n[1];
                        return r.props.globalConfig.isLogin && (e = i ? o - 1 : o + 1, i && (e = o), e < 0 && (e = 0), r.setState({
                            user_digg: !0,
                            user_super_digg: !0,
                            video_like_count: e
                        }), r.context.superDiggClickCountRef.current = 0, r.context.setIsDiggGlobal(!0), r.context.setIsSuperDiggGlobal(!0)), _t.a1({
                            item_id: r.props.context.item_id,
                            action: "super_digg"
                        }).then((function (e) {
                            var t = e.data.data;
                            if (!(0, Se.IT)(t) && !r.isBanAction && t.Success) {
                                var n = ps(ps({}, r.getEventParams()), {}, {
                                    digg_button_status: i ? "like" : "nodigg",
                                    digg_action: "long_click"
                                });
                                i || X.Z.projection.rtLike(n), X.Z.projection.rtSuperDigg(n)
                            }
                        })).catch((function (e) {
                            401 === (null == e ? void 0 : e.code) && Ue.ZP.show({source: "super_digg"})
                        }))
                    }), "super_digg")), (0, p.Z)((0, re.Z)(r), "collectHandler", (0, Se.Ye)((function (e) {
                        var t = r.context, n = t.isCollectedGlobal, i = t.setIsCollectedGlobal;
                        return r.props.globalConfig.isLogin && i(!n), _t.Kx({
                            item_id: r.props.context.item_id,
                            action: n ? "delete" : "add"
                        }).then((function (e) {
                            "success" === e.data.data.BaseResp.StatusMessage && (window.Tea("detail_collect", {
                                group_id: r.props.context.group_id + "",
                                author_id: fe()(r.props.context, "video.user_info.user_id") + "",
                                collect_type: n ? "2" : "1"
                            }), n ? X.Z.projection.rtUnfavorite(ps(ps({}, r.getEventParams()), {}, {section: "player"})) : X.Z.projection.rtFavorite(ps(ps({}, r.getEventParams()), {}, {section: "player"})))
                        }))
                    }), "favorite")), (0, p.Z)((0, re.Z)(r), "getEventParams", (function () {
                        var e, t, n, i, o, a, l;
                        return {
                            log_pb: r.props.context.logInfo.logPb,
                            category_tag: r.props.context.video.tag,
                            item_id: r.props.context.item_id + "",
                            group_id: r.props.context.group_id + "",
                            position: "detail",
                            section: "button",
                            playlist_type: "playlist" === r.context.type ? "general" : void 0,
                            fullscreen: r.props.isFullscreen ? "fullscreen" : "nofullscreen",
                            author_id: null === (e = r.context.video.user_info) || void 0 === e ? void 0 : e.user_id,
                            is_following: r.context.isFollowGlobal ? 1 : 0,
                            category_name: "pgc",
                            is_author_self: r.props.globalConfig.identity.id === String(null === (t = r.context.video.user_info) || void 0 === t ? void 0 : t.user_id) ? 1 : 0,
                            digg_action: "one_click",
                            video_pct: Number(((null === (n = r.player) || void 0 === n ? void 0 : n.currentTime) / (null === (i = r.player) || void 0 === i ? void 0 : i.duration) * 100).toFixed(1)),
                            video_time: Number((1e3 * (null === (o = r.player) || void 0 === o ? void 0 : o.currentTime)).toFixed(1)),
                            player_status: null === (a = r.props.context.playerInstanceRef.current) || void 0 === a || null === (l = a.xgpcInfo) || void 0 === l ? void 0 : l.player_status
                        }
                    })), (0, p.Z)((0, re.Z)(r), "showReportDialog", (0, d.Z)(_().mark((function e() {
                        var t;
                        return _().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = {
                                            author_user_id: fe()(r.props.context, "video.user_info.user_id") + "",
                                            user_id: r.props.globalConfig.identity.id,
                                            group_id: r.context.group_id,
                                            log_pb: r.context.logInfo.logPb
                                        }, X.Z.common.clickTipOff(ps(ps({}, t), {}, {
                                            tip_off_type: "video",
                                            is_login: r.props.globalConfig.isLogin ? 1 : 0
                                        })), r.props.globalConfig.isLogin) {
                                        e.next = 5;
                                        break
                                    }
                                    return Ue.ZP.show({source: "login"}), e.abrupt("return");
                                case 5:
                                    return e.next = 7, Ye.Z.user.isLogout();
                                case 7:
                                    if (!e.sent) {
                                        e.next = 12;
                                        break
                                    }
                                    return Xe.Z.error("璐﹀彿鎺堟潈杩囨湡锛岃閲嶆柊鐧诲綍"), Ue.ZP.show({source: "login"}), e.abrupt("return");
                                case 12:
                                    Ae.Z.reuse({
                                        type: "video",
                                        params: {
                                            item_id: r.props.context.item_id,
                                            group_id: r.props.context.item_id + "",
                                            video_id: r.props.context.video.vid
                                        },
                                        eventParams: t,
                                        groupId: r.state.group_id
                                    });
                                case 13:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))), (0, p.Z)((0, re.Z)(r), "isUserAuthor", (function () {
                        var e, t;
                        return String(null === (e = r.context.video) || void 0 === e || null === (t = e.user_info) || void 0 === t ? void 0 : t.user_id) === String(r.props.globalConfig.identity.id)
                    })), r.state = {
                        group_id: (null === (i = r.props.context) || void 0 === i ? void 0 : i.video.group_id) || "",
                        user_bury: void 0,
                        user_digg: r.props.context.isDiggGlobal || !1,
                        user_super_digg: void 0,
                        video_unlike_count: void 0,
                        video_like_count: void 0,
                        videoInfo: void 0,
                        isNextVideosHide: !1,
                        isPlayerLoadedData: !1,
                        playErrorInfo: void 0,
                        lastCurrentTime: r.getWatchProgress(),
                        startPlay: !1,
                        isShowDanmaku: !1
                    }, r
                }

                return (0, ie.Z)(n, [{
                    key: "componentDidUpdate", value: function () {
                        var e, t = null === (e = this.props.context.video) || void 0 === e ? void 0 : e.group_id;
                        if (t && this.state.group_id !== t && this.setState({
                                lastCurrentTime: this.getWatchProgress(),
                                group_id: t,
                                video_like_count: this.context.video.video_like_count,
                                user_super_digg: !!this.context.video.user_super_digg
                            }), this.context.isDiggGlobal !== this.state.user_digg) {
                            var n = this.dataDelegate(["video_like_count"]), i = (0, m.Z)(n, 1)[0];
                            this.setState({
                                user_digg: this.context.isDiggGlobal,
                                video_like_count: Math.max(this.context.isDiggGlobal ? i + 1 : i - 1, 0)
                            })
                        }
                        this.context.isSuperDiggGlobal !== this.state.user_super_digg && this.setState({user_super_digg: this.context.isSuperDiggGlobal})
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.context.isCollectedGlobal, n = this.props.context.video.title,
                            i = this.dataDelegate(["user_digg", "user_super_digg", "super_digg_control", "video_like_count"]),
                            r = (0, m.Z)(i, 4), o = r[0], a = r[1], l = r[2], s = r[3], u = this.props.context.video,
                            c = u.ShareIFrameInfo, d = u.IsExclusive, f = void 0 !== d && d, p = u.IsCopyright,
                            v = void 0 !== p && p, h = (0, Se.zh)(Number(this.props.context.video.group_source)),
                            _ = {autoplay: !1, path: JSON.parse(l || "{}").anime_body_url};
                        return R.createElement("div", {className: "video_action"}, this.isBanAction ? null : R.createElement(R.Fragment, null, R.createElement(rs.Z, {
                            icon: o ? void 0 : R.createElement(lo.mNV, {className: "video_action_item-icon video_action_item-icon-with-lottie"}),
                            actionIconLookup: gs,
                            type: a && o ? "superdigg" : "agree",
                            content: a && o ? "宸叉帹鑽�" : 0 === s ? "璧�" : s,
                            isActived: !!o,
                            onClick: function () {
                                var t = ps(ps({}, e.getEventParams()), {}, {digg_button_status: a ? "recommend" : o ? "like" : "nodigg"});
                                o ? (X.Z.projection.rtUnlikeClick(t), a && X.Z.projection.rtUnSuperDiggClick(t)) : X.Z.projection.rtLikeClick(t), e.clickDiggHandler()
                            },
                            onLongPress: function () {
                                if (!h) {
                                    var t = ps(ps({}, e.getEventParams()), {}, {
                                        digg_button_status: o ? "like" : "nodigg",
                                        digg_action: "long_click"
                                    });
                                    o || X.Z.projection.rtLikeClick(t), X.Z.projection.rtSuperDiggClick(t), e.props.globalConfig.isLogin && e.superDiggLottieRef.current.play(), e.realSuperDiggHandler = setTimeout((function () {
                                        if (e.realSuperDiggHandler = null, a) return Zt(e.context.superDiggClickCountRef.current), e.context.superDiggClickCountRef.current++, void X.Z.projection.rtSuperDiggRepeatClick(ps(ps({}, e.getEventParams()), {}, {
                                            digg_action: "long_click",
                                            digg_button_status: "recommend",
                                            repeat_count: e.context.superDiggClickCountRef.current
                                        }));
                                        e.superDiggHandler()
                                    }), 600)
                                }
                            },
                            onLeave: function () {
                                e.realSuperDiggHandler && e.superDiggLottieRef.current.reverse(), clearTimeout(e.realSuperDiggHandler), e.realSuperDiggHandler = null
                            },
                            className: "video_action_item--like",
                            lottieOptions: o && a ? void 0 : bs,
                            tabIndex: 0,
                            "aria-label": s ? "".concat(s, "涓偣璧�") : "鐐硅禐",
                            role: "radio",
                            "aria-checked": !!o
                        }), R.createElement(ds, {
                            lottieOptions: _,
                            ref: this.superDiggLottieRef
                        })), !h && R.createElement(rs.Z, {
                            icon: t ? void 0 : R.createElement(lo.BYG, {className: "video_action_item-icon video_action_item-icon-with-lottie"}),
                            actionIconLookup: gs,
                            type: "collect",
                            content: t ? "宸叉敹钘�" : "鏀惰棌",
                            isActived: t,
                            onClick: this.collectHandler,
                            className: "video_action_item--collect",
                            lottieOptions: ys,
                            role: "radio",
                            tabIndex: 0,
                            "aria-checked": t
                        }), R.createElement(os.Z, {
                            popupAlign: {points: ["tr", "br"], offset: [0, 5]},
                            title: n || "",
                            showIframeShare: (0, as.q6)({
                                ShareIFrameInfo: c,
                                IsExclusive: f,
                                IsCopyright: v
                            }).shouldIframeShare,
                            onCopy: function () {
                                window.Tea("share_copy", {
                                    group_id: e.props.context.group_id + "",
                                    category_name: e.props.context.video.tag,
                                    author_id: fe()(e.props.context.video, "user_info.user_id") + ""
                                }), X.Z.projection.rtShareToPlatform(ps(ps({}, e.getEventParams()), {}, {share_platform: "copy"}))
                            },
                            onPopupVisibleChange: function (t) {
                                t && X.Z.projection.clickShareButton(e.getEventParams())
                            },
                            onQuickShare: function (t) {
                                var n, i;
                                null === (n = (i = e.props).onQuickShare) || void 0 === n || n.call(i, t), X.Z.projection.rtShareToPlatform(ps(ps({}, e.getEventParams()), {}, {share_platform: t}))
                            }
                        }, R.createElement(rs.Z, {
                            icon: R.createElement(lo.mBz, {className: "video_action_item-icon"}),
                            actionIconLookup: gs,
                            type: "share",
                            content: "鍒嗕韩",
                            triggerAnyWhere: !0,
                            role: "button",
                            tabIndex: 0,
                            "aria-haspopup": !0,
                            "aria-expanded": !1,
                            className: "video_action_item--share"
                        })), !this.isUserAuthor() && R.createElement(fs.Z, {
                            popupClassName: "video_action_item--more-popup",
                            className: "video_action_item--more",
                            action: [R.createElement("div", {key: "1", onClick: this.showReportDialog}, "涓炬姤")],
                            offset: [-60, 8]
                        }))
                    }
                }]), n
            }(R.Component);
        (0, p.Z)(ws, "contextType", je.Z);
        var xs = (0, pe.p)(ws), Zs = n(96251), Es = n(11934), js = n(52733), Ss = n(12547);

        function ks(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        var Ps = function (e) {
                return e && e.Math == Math && e
            },
            Ns = Ps("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Ps("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Ps("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Ps("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ns.globalThis = Ns, Ns.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ts, Cs, Is = "projectionToPlayList", Ms = function () {
            var e = (0, or.Z)(), t = e.state, n = e.updateCurrent, i = e.clearAll, r = (0, js.f)(),
                o = r.currentItemIndex, a = (r.currentItem, (0, Ki.k6)()), l = (0, R.useState)(!1), u = (0, m.Z)(l, 2),
                d = u[0], f = u[1], v = (0, ro.Z)((function () {
                    return document.querySelector(".Page_Projection .playerBlock .playerSection")
                })), h = (0, m.Z)(v, 2), _ = (h[0], h[1]);
            return 0 === t.list.length ? null : R.createElement("div", {
                className: "projectionToPlayList projection-series-container",
                style: {maxHeight: _.height || 400}
            }, R.createElement(No.Vq, {
                visible: d, onCancel: function () {
                    return f(!1)
                }, onOk: function () {
                    Ss.Z.float_player_delete_all_confirm(), i()
                }, title: "纭畾瑕佸叧闂緟鎾垪琛ㄥ悧锛�", content: "鍏抽棴鍚庡皢浼氭竻绌哄垪琛ㄤ腑鐨勬墍鏈夊緟鎾棰�", okText: "鍏抽棴骞舵竻绌哄垪琛�"
            }), R.createElement("div", {className: "".concat(Is, "__header")}, R.createElement("div", {className: "".concat(Is, "__header__title")}, "寰呮挱鍒楄〃"), o > -1 && R.createElement("div", {className: "".concat(Is, "__header__indicator")}, o + 1, "/", t.list.length), R.createElement("div", {
                className: "".concat(Is, "__header__clear"),
                onClick: function () {
                    Ss.Z.float_player_delete_all_click(), f(!0)
                }
            }, "娓呴櫎")), R.createElement(Es.Z, {
                onItemClick: function (e) {
                    n(e);
                    var t = (0, Q.SM)({gid: e.gid, query: {logPb: e.log_pb}}), i = (0, rr.L4)(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ks(Object(n), !0).forEach((function (t) {
                                (0, p.Z)(e, t, n[t])
                            })) : c() ? Object.defineProperties(e, c()(n)) : ks(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, s()(n, t))
                            }))
                        }
                        return e
                    }({}, t));
                    a.push(i)
                }
            }))
        }, Fs = n(65634), Ls = n(28216), Rs = n(94614);

        function Os() {
            return Os = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }, Os.apply(this, arguments)
        }

        var Ds = function (e) {
                return R.createElement("svg", Os({
                    width: 24,
                    height: 24,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), Ts || (Ts = R.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z",
                    fill: "#000",
                    fillOpacity: .08
                })), Cs || (Cs = R.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.332 13.001a1 1 0 110-2 1 1 0 010 2zM11.999 13a1 1 0 110-2 1 1 0 010 2zm-5.334-1a1 1 0 102 0 1 1 0 00-2 0z",
                    fill: "#606266"
                })))
            }, As = n(1028), Us = function (e) {
                return e && e.Math == Math && e
            },
            Xs = Us("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Us("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Us("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Us("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Xs.globalThis = Xs, Xs.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Vs = function (e) {
                (0, R.useEffect)((function () {
                    document.body.style.overflow = e ? "hidden" : ""
                }), [e])
            }, Hs = function (e) {
                return e && e.Math == Math && e
            },
            zs = Hs("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Hs("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Hs("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Hs("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        zs.globalThis = zs, zs.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Bs = "co-create-modal", Gs = function (e) {
                var t = e.coCreatorList, n = e.onCancel, i = e.sendFollowEvent, r = e.showModal,
                    o = (0, je.f)().updateCoCreatorFollowStatus, a = (0, Rs.Z)();
                return Vs(r), R.createElement(No.u_, {
                    size: "middle",
                    visible: r,
                    onCancel: n,
                    title: "".concat(t.length, "浜哄叡鍚屽垱浣�")
                }, R.createElement("div", {className: "".concat(Bs, "__content")}, w()(t).call(t, (function (e) {
                    var t = String(e.user_id), n = t === a.identity.id;
                    return R.createElement("div", {
                        key: t,
                        className: "".concat(Bs, "__item")
                    }, R.createElement(ua.Z, {
                        url: e.user_info.avatar_url,
                        size: 48,
                        className: "".concat(Bs, "__item-avatar"),
                        uid: t,
                        authInfo: e.user_info.user_auth_info,
                        isVip: Boolean(e.user_info.user_auth_info),
                        homePageExplicitQuery: {is_co_publish: "1", from_section: "co_publish_panel"}
                    }), R.createElement("div", {className: "".concat(Bs, "__item-info")}, R.createElement("a", {
                        href: globalThis.getFilterXss().filterUrl((0, Q.$x)(t, void 0, {
                            is_co_publish: "1",
                            from_section: "co_publish_panel"
                        }), null, {logType: "js.href/src", reportOnly: "all"}),
                        target: "_unique",
                        className: "".concat(Bs, "__item-name")
                    }, e.user_info.name), R.createElement("div", {className: "".concat(Bs, "__item-role")}, e.role_name)), !n && R.createElement(Qe.Z, {
                        buttonProps: {
                            size: "small",
                            width: 60
                        },
                        toUserID: t,
                        className: "".concat(Bs, "__item-follow"),
                        isFollow: e.user_info.follow,
                        onChange: function (e, n) {
                            o(t, e), i({toUserId: t, blocked: n, follow: e, section: "co_publish_panel"})
                        }
                    }))
                }))))
            }, Ws = function (e) {
                return e && e.Math == Math && e
            },
            Ys = Ws("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Ws("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Ws("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Ws("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ys.globalThis = Ys, Ys.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var qs = "co-creator-list", Ks = function (e) {
                var t = e.coCreatorList, n = (0, je.f)(), i = n.isSSR, r = n.isFollowGlobal, o = n.logInfo, a = n.video,
                    l = void 0 === a ? {} : a, s = n.updateCoCreatorFollowStatus, u = n.playerInstanceRef, c = (0, Rs.Z)(),
                    d = l.user_info, f = void 0 === d ? {} : d;
                null == f && (f = {});
                var p = (0, R.useRef)(null), v = (0, R.useRef)(null), h = (0, R.useState)(99999), _ = (0, m.Z)(h, 2),
                    g = _[0], b = _[1], y = (0, R.useState)(!1), x = (0, m.Z)(y, 2), Z = x[0], E = x[1],
                    j = (0, R.useState)(!1), S = (0, m.Z)(j, 2), k = S[0], P = S[1], N = (0, Je.jY)();
                (0, R.useLayoutEffect)((function () {
                    var e = function () {
                        if (p.current && v.current) {
                            var e = 99999;
                            if (t.length > 2) {
                                for (var n = Math.min(window.innerWidth > 1680 ? 4 : 3, t.length), i = C()(v.current.children), r = 0, o = 0; o < n; o++) r += i[o].offsetWidth;
                                r += 24 * (n - 1), e = p.current.scrollWidth - 24 - v.current.offsetWidth + r
                            }
                            b(e), E(p.current.scrollWidth > p.current.offsetWidth || p.current.scrollWidth > e)
                        }
                    };
                    return e(), window.addEventListener("resize", e), function () {
                        window.removeEventListener("resize", e)
                    }
                }), [u.current]);
                var T = function (e) {
                    var t, n, i, r, a, s = e.follow, c = e.toUserId, d = e.blocked, f = e.section,
                        m = void 0 === f ? "button" : f;
                    d || Ia.Z[s ? "rt_follow" : "rt_unfollow"]({
                        to_user_id: c,
                        category_name: "pgc",
                        log_pb: o.logPb,
                        section: m,
                        position: "detail",
                        category_tag: l.tag,
                        author_id: String(l.user_info.user_id),
                        group_id: l.group_id || "",
                        is_following: s ? 1 : 0,
                        fullscreen: (0, $.uu)() ? "fullscreen" : "nofullscreen",
                        is_author_self: N.id === String(l.user_info.user_id) ? 1 : 0,
                        digg_action: "one_click",
                        digg_button_status: s ? "nodigg" : "like",
                        video_pct: Number(((null === (t = u.current) || void 0 === t ? void 0 : t.currentTime) / (null === (n = u.current) || void 0 === n ? void 0 : n.duration) * 100).toFixed(1)),
                        video_time: Number((1e3 * (null === (i = u.current) || void 0 === i ? void 0 : i.currentTime)).toFixed(1)),
                        player_status: null === (r = u.current) || void 0 === r || null === (a = r.xgpcInfo) || void 0 === a ? void 0 : a.player_status
                    })
                };
                return R.createElement("div", {
                    className: D()(qs),
                    ref: p,
                    style: {maxWidth: g}
                }, R.createElement("div", {className: D()("".concat(qs, "__inner"))}, R.createElement("div", {className: "".concat(qs, "__header")}, t.length, "浜哄叡鍒涳細"), R.createElement("div", {
                    className: "".concat(qs, "__list"),
                    ref: v
                }, w()(t).call(t, (function (e) {
                    var t, n = String(e.user_id), a = (0, Q.$x)(n), l = n === c.identity.id,
                        u = (0, Q.$x)(n, void 0, {source: "pgc_author_name", is_co_publish: "1", from_section: "button"});
                    return a = i ? null === (t = a) || void 0 === t ? void 0 : t.split("?")[0] : a, R.createElement("div", {
                        key: n,
                        className: D()("".concat(qs, "__item"))
                    }, R.createElement(ua.Z, {
                        url: e.user_info.avatar_url,
                        size: 36,
                        className: "".concat(qs, "__item-avatar"),
                        uid: n,
                        authInfo: e.user_info.user_auth_info,
                        isVip: Boolean(e.user_info.user_auth_info),
                        homePageExplicitQuery: {is_co_publish: "1", from_section: "button"}
                    }), R.createElement("div", null, R.createElement("a", {
                        href: globalThis.getFilterXss().filterUrl(a, null, {
                            logType: "js.href/src",
                            reportOnly: "all"
                        }), onClick: function (e) {
                            e.preventDefault(), function (e, t) {
                                var n = o.logPb;
                                "string" == typeof n ? n = JSON.parse(n) : void 0 === n && (n = {}), n.page_type = "anyVideo", n.sourcepage = "shortvideo", n.category_name = "xg_pc_related_channel_new", n.recommend_type = "recommend_short", n.impr_type = "__pc_detail__", delete n.is_following, Tr.Z.authorInfoClick({
                                    log_pb: ue()(n),
                                    click_position: e,
                                    user_status: t ? "author" : "guest",
                                    is_following: r ? 1 : 0,
                                    detail_section: "author_detail"
                                })
                            }("name", l), (0, da.gQ)() ? window.open(u, "_self") : window.open(u)
                        }, className: "".concat(qs, "__item-name")
                    }, e.user_info.name), R.createElement("div", {className: "".concat(qs, "__item-role")}, e.role_name)), !l && R.createElement(Qe.Z, {
                        buttonProps: {
                            size: "small",
                            width: 48
                        },
                        toUserID: n,
                        className: "".concat(qs, "__item-follow"),
                        isFollow: e.user_info.follow,
                        onChange: function (e, t) {
                            s(n, e), T({toUserId: n, blocked: t, follow: e})
                        }
                    }))
                })))), Z && R.createElement("div", {className: D()("".concat(qs, "__float"))}, R.createElement(As.Z, {
                    popup: R.createElement("div", {className: "".concat(qs, "__float-tip")}, "鏌ョ湅鍏ㄩ儴"),
                    popupAlign: {points: ["tc", "bc"], offset: [0, 12]},
                    action: "hover",
                    destroyPopupOnHide: !0,
                    mouseLeaveDelay: 0
                }, R.createElement(Ds, {
                    onClick: function () {
                        P(!0), Ia.Z.enterCoPublishPanel({
                            log_pb: o.logPb,
                            category_name: "pgc",
                            enter_from: (0, $i.an)(),
                            player_status: u.current.xgpcInfo.player_status
                        })
                    }
                }))), R.createElement(Gs, {
                    coCreatorList: t, onCancel: function () {
                        return P(!1)
                    }, sendFollowEvent: T, showModal: k
                }))
            }, Js = n(71678), Qs = function (e) {
                return e && e.Math == Math && e
            },
            $s = Qs("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || Qs("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || Qs("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || Qs("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        $s.globalThis = $s, $s.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var eu = "CLOSE_Y_BANNER_TIMES";

        function tu(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function nu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? tu(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : tu(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var iu = function (e) {
                return e && e.Math == Math && e
            },
            ru = iu("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || iu("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || iu("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || iu("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ru.globalThis = ru, ru.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var ou = function (e) {
                var t = e.imgUrl, n = e.link, i = e.teaParams;
                return (0, R.useLayoutEffect)((function () {
                    window.innerWidth > 1370 && X.Z.projection.showYBanner(nu(nu({}, i || {}), {}, {
                        banner_name: "y_project",
                        category_name: "xg_pc_related_channel_new",
                        go_url: n
                    }))
                }), []), R.createElement("div", {className: "detail-banner"}, R.createElement("img", {
                    alt: "",
                    src: globalThis.getFilterXss().filterUrl(t, null, {logType: "js.href/src", reportOnly: "all"}),
                    onClick: function () {
                        n && window.open(n), X.Z.projection.clickYBanner(nu(nu({}, i || {}), {}, {
                            banner_name: "y_project",
                            category_name: "xg_pc_related_channel_new",
                            go_url: n
                        }))
                    }
                }), R.createElement(lo.x8P, {
                    className: "banner-close", width: "18", height: "18", onClick: function () {
                        X.Z.projection.closeYBanner(nu(nu({}, i || {}), {}, {
                            banner_name: "y_project",
                            category_name: "xg_pc_related_channel_new",
                            go_url: n
                        }));
                        var t = Number((0, $i.$o)(eu));
                        (0, $i.qQ)(eu, t ? t + 1 : 1), e.onClose && e.onClose()
                    }
                }))
            }, au = function (e) {
                return e && e.Math == Math && e
            },
            lu = au("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || au("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || au("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || au("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        lu.globalThis = lu, lu.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var su = function () {
                var e;
                return null === (e = Fr.Z.getMyABInfoV2().yBanner) || void 0 === e ? void 0 : e.enable
            }, uu = function (e) {
                return e && e.Math == Math && e
            },
            cu = uu("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || uu("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || uu("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || uu("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        cu.globalThis = cu, cu.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var du = function (e) {
            var t = e.isTheater, n = (0, Ls.v9)((function (e) {
                    return e[oo.VD.anyVideo]
                })), i = (0, R.useState)((null == n ? void 0 : n.yBanner) || {}), r = (0, m.Z)(i, 2), o = r[0], a = r[1],
                l = o.maxShowTimes, s = o.startTime, u = o.endTime, c = o.imgUrl, d = (0, R.useState)(!1),
                f = (0, m.Z)(d, 2), p = f[0], v = f[1], h = Number((0, $i.$o)(eu)), _ = su(),
                g = (0, R.useMemo)((function () {
                    return !(!_ || !c) && (!(!l || h >= l) && (!(s && +new Date < +new Date(s)) && !(u && +new Date > +new Date(u))))
                }), [_, c, l, h, s, u]);
            return (0, R.useEffect)((function () {
                if (!t) {
                    v(g);
                    var e = Nr()((function () {
                        g && v(window.innerWidth > 1370)
                    }), 100);
                    return window.addEventListener("resize", e), function () {
                        window.removeEventListener("resize", e)
                    }
                }
                v(!1)
            }), [g, t]), (0, R.useEffect)((function () {
                n || _t.r5().then((function (e) {
                    a(e.data.data)
                }))
            }), [n]), {showYBanner: p, setShowYBanner: v, yBannerInfo: o}
        };

        function fu(e, t) {
            var n = r()(e);
            if (a()) {
                var i = a()(e);
                t && (i = N()(i).call(i, (function (t) {
                    return s()(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function mu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? fu(Object(n), !0).forEach((function (t) {
                    (0, p.Z)(e, t, n[t])
                })) : c() ? Object.defineProperties(e, c()(n)) : fu(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, s()(n, t))
                }))
            }
            return e
        }

        var pu = function (e) {
                return e && e.Math == Math && e
            },
            vu = pu("object" == (void 0 === b() ? "undefined" : (0, v.Z)(b())) && b()) || pu("object" == ("undefined" == typeof window ? "undefined" : (0, v.Z)(window)) && window) || pu("object" == ("undefined" == typeof self ? "undefined" : (0, v.Z)(self)) && self) || pu("object" == (void 0 === n.g ? "undefined" : (0, v.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        vu.globalThis = vu, vu.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        n(84682)({storeAsString: !0});
        var hu = function (e) {
            var t, n = e.group_id, i = e.pSeriesId;
            return w()(t = [n, i]).call(t, (function (e) {
                return e || ""
            })).join("_")
        }, _u = function (e) {
            var t = e.isTheater, n = e.isFullscreen, i = U.MS.Hidden;
            return {
                side: i,
                headerTheme: t ? U.it.Dark : U.it.Default,
                className: D()("projection__layout", {
                    withSideBar: i !== U.MS.Hidden,
                    "projection__layout--fullscreen": n
                })
            }
        }, gu = function (e) {
            var t, n = (0, nr.V6)() || {};
            if (n.logPb) try {
                t = JSON.parse(n.logPb)
            } catch (e) {
                delete n.logPb, t = {}
            }
            var i = !0;
            if (e.key && !e.shouldReturn404) {
                if (t = Z()({}, e.video.log_pb, t, {is_following: e.video.log_pb.is_following}), n.parentLogPb) i = !1; else ;
                n.group_id = t.group_id;
                var r, o = {}, a = e.video, l = a.rank;
                if (l) o = {
                    selection_tag: 1 === String(l).length ? "0".concat(String(l)) : String(l),
                    episode_id: a.group_id,
                    author_id: (null === (r = a.user_info) || void 0 === r ? void 0 : r.user_id) + ""
                };
                var s = {};
                if (e.playlist) {
                    var u = t.list_entrance;
                    u && "404" !== u || (u = "anyVideo"), s = {
                        sourcepage: "userdetail",
                        list_entrance: u,
                        recommend_type: "playlist",
                        page_type: t.page_type || "anyVideo",
                        impr_type: "__pgc__",
                        category_name: "pgc"
                    }
                }
                return mu(mu({}, n), {}, {
                    isAncestor: i,
                    logPb: mu(mu(mu({}, t), o), {}, {
                        position: "detail",
                        detail_type: void 0 !== l ? De.JG.pSeriesWatch : De.JG.shortvideo
                    }, s)
                })
            }
            return {}
        }, bu = function (e) {
            var t, n, i, r, o, a, l, s, u, c, d, p, v, h, _, g, b, y, x = e.defaultData, Z = e.ids, E = e.spiderVideo,
                S = e.commentForSSR, P = e.subtitleForScrawler, T = e.kvideoData, I = e.isToPlayLayout,
                F = e.onVideoNotFound, O = e.nextToPlayVideo, H = e.seoLinks, z = Z || {}, B = z.id, ee = z.seriesId,
                te = z.pSeriesId, ne = z.userId, ie = (0, R.useState)(!1), re = (0, m.Z)(ie, 2), oe = re[0], ae = re[1],
                le = (0, R.useState)(!1), se = (0, m.Z)(le, 2), ue = se[0], ce = se[1], de = (0, Ls.I0)(),
                fe = hu({group_id: B, pSeriesId: te}),
                me = I ? "toPlaylist" : ne ? "playlist" : ee ? "series" : te ? "pSeries" : "",
                pe = j()(t = ["playlist", "series", "pSeries"]).call(t, me), ve = (0, Ki.TH)(),
                he = (0, $i.DP)(ve.search).id, _e = (0, V.Z)(), ge = _e.theaterState, ye = _e.setTheaterState,
                we = (0, q.Z)(), xe = (0, R.useState)((function () {
                    return !0 !== we && (void 0 !== ge && ge)
                })), Ze = (0, m.Z)(xe, 2), Ee = Ze[0], Se = Ze[1],
                ke = (0, R.useState)({videoList: [], seriesInfo: {title: "", author_name: "", item_num: 0}, id: ""}),
                Pe = (0, m.Z)(ke, 2), Ne = Pe[0], Te = Pe[1], Ce = (0, R.useState)(), Ie = (0, m.Z)(Ce, 2), Me = Ie[0],
                Fe = Ie[1], Le = (0, R.useState)((function () {
                    return ne ? x : x.key !== fe ? J.k : x
                })), Re = (0, m.Z)(Le, 2), Oe = Re[0], De = Re[1],
                Ae = (0, R.useState)((null === (n = Oe.playlist) || void 0 === n ? void 0 : n.item_num) || 0),
                Ue = (0, m.Z)(Ae, 2), Xe = Ue[0], Ve = Ue[1], He = (0, R.useState)(!1), ze = (0, m.Z)(He, 2),
                Be = ze[0], Ge = ze[1], We = (0, R.useState)(!1), Ye = (0, m.Z)(We, 2), qe = Ye[0], Ke = Ye[1],
                Qe = (0, R.useState)((0, $.uu)()), $e = (0, m.Z)(Qe, 2), et = $e[0], tt = $e[1],
                nt = (0, R.useMemo)((function () {
                    return _u({isTheater: Ee, isFullscreen: et})
                }), [Ee, et]), it = (0, K.Z)({
                    defaultConfig: nt,
                    config: nt,
                    sideDefaultShortBorder: nt.side === U.MS.Hidden ? void 0 : 1440
                }), rt = it.setLoadingEvent, ot = it.setSideHidden, at = it.setSide, lt = it.globalConfig,
                st = it.setVideoPlayer, ut = du({isTheater: Ee}), dt = ut.showYBanner, ft = ut.setShowYBanner,
                mt = ut.yBannerInfo, pt = mt.imgUrl, vt = mt.link, ht = (0, R.useRef)(gu(Oe)), _t = (0, R.useRef)(),
                gt = (0, R.useRef)(Be), bt = fr({
                    LogInfo_Ref: ht,
                    paramGroupId: B,
                    showIframeShareRef: gt,
                    setShowIframeShare: Ge,
                    type: me,
                    paramPSeriesId: te,
                    paramUserId: ne,
                    isInputtingComment: oe,
                    isTheater: Ee,
                    setIsTheater: function (e) {
                        Se(e), ye(e)
                    },
                    isFullscreen: et,
                    setIsFullscreen: tt,
                    globalConfig: lt,
                    urlParamsId: he
                }), yt = G(), wt = yt.shortVideoAutoplayNextState, xt = yt.setShortVideoAutoplayNextState,
                Zt = ((0, Y.Z)(), B || Oe.video.group_id || Oe.video.item_id || ""),
                Et = eo({LogInfo_Ref: ht, group_id: Zt, spiderVideo: E}), jt = bt.initialPlayLoopState,
                St = bt.playerInstanceRef, kt = bt.showFullscreenList, Pt = bt.handleFullscreenListVisible,
                Nt = Et.resetRelatedSetting, Tt = Et.relateVideos, Ct = (0, Je.jY)(),
                It = (null === (i = Oe.video) || void 0 === i ? void 0 : i.title) || "", Mt = Oe.shouldReturn404,
                Ft = (0, R.useRef)((function () {
                    return null
                })), Lt = (0, R.useCallback)((function () {
                    Ft.current()
                }), []);
            (0, R.useEffect)((function () {
                Mt && (null == F || F())
            }), [Mt]), (0, R.useEffect)((function () {
                return Ee ? ot() : at(nt.side), function () {
                    at()
                }
            }), [Ee]), (0, R.useEffect)((function () {
                document.body.style.overflow = et ? "Hidden" : ""
            }), [et]), (0, R.useEffect)((function () {
                gt.current = Be
            }), [Be]), (0, R.useEffect)((function () {
                k().race([new (k())((function (e) {
                    return setTimeout((function () {
                        e("timeout")
                    }), 12e3)
                })), new (k())((function (e) {
                    Ft.current = e
                }))]).then((function (e) {
                    Ke(!0)
                }))
            }), []), (0, R.useEffect)((function () {
                !qe || "playlist" === me || null != H && H.length || (0, Fs.m)({dispatch: de})
            }), [qe, H, de, me]), (0, R.useEffect)((function () {
                return function () {
                    De(J.k), ht.current = {logPb: {}, isAncestor: !1}
                }
            }), []), ts({
                projectionData: Oe,
                setProjectionData: De,
                pageKey: fe,
                initialPlayLoopState: jt,
                resetRelatedSetting: Nt,
                ids: Z,
                series: Ne,
                setLoadingEvent: rt,
                LogInfo_Ref: ht,
                getLogInfoFromData: gu,
                setIsFetchFailed: ce,
                type: me
            });
            var Rt = (0, R.useState)(!(null === (r = Oe.video) || void 0 === r || null === (o = r.user_info) || void 0 === o || !o.follow)),
                Ot = (0, m.Z)(Rt, 2), Dt = Ot[0], At = Ot[1],
                Ut = (0, R.useState)(Boolean(null === (a = Oe.video) || void 0 === a ? void 0 : a.user_digg)),
                Xt = (0, m.Z)(Ut, 2), Vt = Xt[0], Ht = Xt[1],
                zt = (0, R.useState)(Boolean(null === (l = Oe.video) || void 0 === l ? void 0 : l.user_super_digg)),
                Bt = (0, m.Z)(zt, 2), Gt = Bt[0], Wt = Bt[1], Yt = (0, R.useRef)(0),
                qt = (0, R.useState)(1 === (null === (s = Oe.video) || void 0 === s ? void 0 : s.video_user_like)),
                Kt = (0, m.Z)(qt, 2), Jt = Kt[0], Qt = Kt[1],
                $t = (0, R.useState)(null === (u = Oe.video) || void 0 === u || null === (c = u.co_creators_video_info) || void 0 === c ? void 0 : N()(d = c.creator_list).call(d, (function (e) {
                    return e.status === Js.J.Accept
                }))), en = (0, m.Z)($t, 2), tn = en[0], nn = en[1], rn = (0, R.useCallback)((function (e, t) {
                    var n, i;
                    tn && (nn(w()(tn).call(tn, (function (n) {
                        return String(n.user_id) === e ? mu(mu({}, n), {}, {user_info: mu(mu({}, n.user_info), {}, {follow: t})}) : n
                    }))), e === String(null === (n = Oe.video) || void 0 === n || null === (i = n.user_info) || void 0 === i ? void 0 : i.user_id) && At(t))
                }), [tn]);
            (0, ct.i)((function () {
                var e, t, n;
                null === (e = St.current) || void 0 === e || e.setConfig({isFollowGlobal: Dt}), rn(String(null === (t = Oe.video) || void 0 === t || null === (n = t.user_info) || void 0 === n ? void 0 : n.user_id), Dt)
            }), [Dt]), (0, ct.i)((function () {
                var e;
                null === (e = St.current) || void 0 === e || e.setConfig({
                    coCreatorList: tn,
                    updateCoCreatorFollowStatus: rn
                })
            }), [tn, rn]), (0, R.useEffect)((function () {
                var e, t, n, i, r, o;
                Ht(Boolean(null === (e = Oe.video) || void 0 === e ? void 0 : e.user_digg)), Wt(Boolean(null === (t = Oe.video) || void 0 === t ? void 0 : t.user_super_digg)), Qt(1 === (null === (n = Oe.video) || void 0 === n ? void 0 : n.video_user_like)), nn(null === (i = Oe.video) || void 0 === i || null === (r = i.co_creators_video_info) || void 0 === r ? void 0 : N()(o = r.creator_list).call(o, (function (e) {
                    return e.status === Js.J.Accept
                })))
            }), [Oe.video]), (0, R.useEffect)((function () {
                var e = St.current;
                e && st(e)
            }), [St.current]);
            var on = (0, R.useState)(!1), an = (0, m.Z)(on, 2), ln = an[0], sn = an[1], un = (0, R.useState)(!1),
                cn = (0, m.Z)(un, 2), dn = cn[0], fn = cn[1], mn = Oe.pSeries, pn = void 0 === mn ? {} : mn,
                vn = Oe.playlist, hn = void 0 === vn ? {} : vn, _n = pn.seriesInfo, gn = _n ? _n.item_num : 0,
                bn = (0, R.useState)(C()(M()(p = Array(gn)).call(p))), yn = (0, m.Z)(bn, 2), wn = yn[0], xn = yn[1],
                Zn = hn.item_num, En = void 0 === Zn ? 0 : Zn,
                jn = (0, R.useState)(C()(M()(v = Array(Number(En))).call(v))), Sn = (0, m.Z)(jn, 2), kn = Sn[0],
                Pn = Sn[1],
                Nn = null !== (h = null === (_ = Zs._o.getMyABInfoV2().LargeRecommendVideoCover) || void 0 === _ ? void 0 : _.enable) && void 0 !== h && h,
                Tn = (0, Ai.Z)(), Cn = Tn && pe;
            if (Mt) return I ? null : R.createElement(A.Z, null);
            var In = function () {
                ft(!1)
            }, Mn = mu(mu(mu({}, {pSeries: {}}), Oe), {}, {
                autoPlay: wt,
                setAutoPlay: xt,
                item_id: Oe.video.item_id,
                group_id: Zt,
                changeFollow: function (e, t) {
                    var n = Oe.video;
                    if (n.user_info) {
                        var i = mu(mu({}, n.user_info), {}, {follow: !n.user_info.follow});
                        if (!t) {
                            var r = B || Oe.video.item_id;
                            window.Tea("detail_follow", {
                                group_id: r + "",
                                author_id: n.user_info.user_id + "",
                                follow_type: n.user_info.follow ? "2" : "1"
                            });
                            var o = {
                                to_user_id: String(n.user_info.user_id),
                                log_pb: ht.current.logPb,
                                section: "button",
                                position: "detail",
                                category_tag: n.tag,
                                author_id: String(n.user_info.user_id),
                                group_id: r,
                                is_following: e ? 1 : 0,
                                fullscreen: (0, $.uu)() ? "fullscreen" : "nofullscreen",
                                category_name: "pgc",
                                is_author_self: Ct.id === String(n.user_info.user_id) ? 1 : 0,
                                digg_action: "one_click",
                                digg_button_status: e ? "nodigg" : "like",
                                video_pct: Number((n.currentTime / n.duration * 100).toFixed(1)),
                                video_time: Number((1e3 * n.currentTime).toFixed(1))
                            };
                            e ? X.Z.projection.rt_follow(o) : X.Z.projection.rt_unfollow(o)
                        }
                        De((function (e) {
                            return mu(mu({}, e), {}, {video: mu(mu({}, n), {}, {user_info: i})})
                        }))
                    }
                },
                type: me,
                relateVideos: Tt,
                logInfo: ht.current,
                shouldLoadOthers: qe,
                setShouldLoadOthers: Ke,
                onBufferIsSufficient: Lt,
                series: Ne,
                changePSeriesCollected: function (e) {
                    var t = Oe.pSeries, n = t.seriesInfo;
                    De(mu(mu({}, Oe), {}, {pSeries: mu(mu({}, t), {}, {seriesInfo: mu(mu({}, n), {}, {is_favourite: e})})}))
                },
                setSeries: Te,
                nextVideoOfSpecialList: Me,
                setNextVideoOfSpecialList: Fe,
                isFetchFailed: ue,
                playerInstanceRef: St,
                playlist: mu(mu({}, Oe.playlist), {}, {item_num: Xe}),
                setPlaylistNum: Ve,
                isFollowGlobal: Dt,
                setIsFollowGlobal: At,
                isDiggGlobal: Vt,
                setIsDiggGlobal: Ht,
                isCollectedGlobal: Jt,
                setIsCollectedGlobal: Qt,
                isShowDanmaku: ln,
                setIsShowDanmu: sn,
                isShowDanmakuAfterInteractive: dn,
                setIsShowDanmakuAfterInteractive: fn,
                isSuperDiggGlobal: Gt,
                setIsSuperDiggGlobal: Wt,
                superDiggClickCountRef: Yt,
                nextToPlayVideo: O,
                pSeriesVideoList: wn,
                setPSeriesVideoList: xn,
                userVideoList: kn,
                setUserVideoList: Pn,
                coCreatorList: tn,
                updateCoCreatorFollowStatus: rn
            });
            return R.createElement(je.Z.Provider, {value: Mn}, It ? R.createElement($a, {
                groupId: Zt,
                projectionData: Oe,
                kvideoData: T,
                subtitleForScrawler: P
            }) : null, R.createElement("div", {
                className: D()("Page_Projection", "new-style new-style-1", {
                    series_projection: pe,
                    "Page_Projection--theater": Ee,
                    "large-recommend-video-cover": Nn,
                    "details-full-screen": Cn,
                    "with-top-bar": Tn && et
                })
            }, It ? R.createElement(Ca, {kvideoData: T}) : null, R.createElement(W.Z, {
                className: "xiguaBuddyPub__shortVideo",
                injectData: {seriesId: ee, pSeriesId: te, groupId: Zt}
            }), lt.isElectron ? R.createElement(ns.Z, {title: It}) : null, R.createElement("div", {className: "Page_Projection__layout"}, R.createElement("div", {className: D()("playerBlock", {"with-fullscreen-list": kt})}, R.createElement("div", {className: "playerSection"}, R.createElement(vr, (0, f.Z)({context: Mn}, bt, {playerWrapperRef: _t})), pe ? R.createElement(R.Fragment, null, R.createElement("div", {className: "series__wrapper"}, dt && R.createElement(ou, {
                imgUrl: pt,
                link: vt,
                onClose: In,
                teaParams: {log_pb: ht.current.logPb}
            }), R.createElement("div", {className: D()("playerSection__right", {isTheater: Ee})}, R.createElement("div", {
                className: "Page_Projection__right xiguabuddy xiguabuddy-root",
                style: {position: "absolute", zIndex: 1e3}
            }), function () {
                if (!qe) return null;
                switch (me) {
                    case"series":
                        return R.createElement(Eo, {seriesId: ee, currentGroupId: Zt});
                    case"pSeries":
                        return R.createElement(Wo, {
                            isTheater: Ee,
                            pSeriesId: te,
                            currentGroupId: Zt || Oe.video.group_id
                        });
                    case"playlist":
                        return R.createElement(Il, {
                            isTheater: Ee,
                            currentGroupId: Zt || Oe.video.group_id,
                            isFullscreen: et
                        });
                    default:
                        return null
                }
            }())), R.createElement("div", {
                className: D()("playerSection__right fullscreen", {
                    "fullscreen-menu--slide-in": kt,
                    "fullscreen-menu--slide-out": !kt && et
                })
            }, function () {
                if (!qe) return null;
                switch (me) {
                    case"pSeries":
                        return R.createElement(sa, {
                            isTheater: Ee,
                            pSeriesId: te,
                            currentGroupId: Zt || Oe.video.group_id,
                            onClose: function () {
                                return Pt(!1)
                            }
                        });
                    case"playlist":
                        return R.createElement(Yl, {
                            isTheater: Ee,
                            currentGroupId: Zt || Oe.video.group_id,
                            isFullscreen: et,
                            showFullScreenList: kt,
                            handleFullscreenListVisible: Pt
                        });
                    default:
                        return null
                }
            }())) : null)), Oe.key ? R.createElement("div", {className: "Page_Projection__secondary_author_and_danmu"}, tn ? R.createElement(Ks, {coCreatorList: tn}) : null !== (g = Oe.video) && void 0 !== g && null !== (b = g.user_info) && void 0 !== b && b.user_id ? R.createElement(ha, null) : null, Mn.key ? R.createElement(be, (0, f.Z)({context: Mn}, bt, {
                player: null == St ? void 0 : St.current,
                playerWrapper_Ref: _t
            })) : null) : null, Oe.key ? R.createElement("div", {className: "Page_Projection__secondary__left"}, R.createElement("div", {className: "Page_Projection__title_and_action"}, R.createElement(wa, {kvideoData: T}), R.createElement("div", {className: "Page_Projection__secondary_des_and_action"}, R.createElement("div", {className: "Page_Projection__secondary_des_and_action-container"}, R.createElement(co, {
                subtitleForScrawler: P,
                kvideoData: T
            }), R.createElement("div", {className: "Page_Projection__secondary_action"}, R.createElement(xs, (0, f.Z)({context: Mn}, bt)))))), qe || S ? R.createElement(Ua, {
                setIsInputtingComment: ae,
                commentForSSR: S,
                teaParams: {playerStatus: Ee ? "theater" : "player"}
            }) : R.createElement("div", {className: "Page_Projection--comment_loading"})) : null, R.createElement("div", {className: "projection_recommentWrapper"}, !pe && dt && R.createElement(ou, {
                imgUrl: pt,
                link: vt,
                onClose: In
            }), I ? R.createElement(Ms, null) : null, Oe.key ? R.createElement(io, (0, f.Z)({}, Et, pe ? {} : {
                autoPlayControl: !0,
                onAutoPlayChange: function (e) {
                    xt(e), X.Z.player.videoPlayerSetting({
                        log_pb: ht.current.logPb,
                        player_status: Ee ? "theater" : "player",
                        setting: "autoplay_next",
                        definition: e ? "on" : "off",
                        section: "player"
                    })
                }
            })) : null), kt && R.createElement("div", {
                className: "mask", onClick: function () {
                    Pt(!1)
                }
            }), null != H && H.length ? R.createElement("div", {className: "projection_footer"}, R.createElement(is.Z, {links: H})) : null), Be ? R.createElement(Ka, {
                video: Mn.video,
                recommendList: Tt && w()(y = L()(Tt).call(Tt, 0, 20)).call(y, (function (e) {
                    var t, n = e.data;
                    return {
                        gid: n.group_id,
                        title: n.title,
                        duration: n.duration,
                        image_url: n.image_url,
                        preview_url: n.preview_url,
                        anchorProps: (0, Q.ZF)({
                            gid: n.group_id,
                            pSeriresId: null === (t = n.pseries) || void 0 === t ? void 0 : t.id
                        })
                    }
                })),
                onClose: function () {
                    var e = null == St ? void 0 : St.current;
                    e && (e.config.keyShortcut = "on"), Ge(!1), document.body.classList.remove("lock-scroll")
                }
            }) : null))
        }, yu = function () {
            var e = (0, d.Z)(_().mark((function e(t) {
                var n, i, r, o, a;
                return _().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return i = t.ctx, t.app, r = t.dispatch, o = null !== (n = (0, V.N)(i.header.cookie)) && void 0 !== n && n, a = _u({
                                isTheater: o,
                                isFullscreen: !1
                            }), r("SET_LAYOUT_DEFAULT", a), e.abrupt("return", {status: 200});
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }();
        bu.SSRPoker = [yu];
        var wu = bu
    }, 36154: function (e, t, n) {
        n.d(t, {
            _d: function () {
                return M
            }, Ru: function () {
                return F
            }, fx: function () {
                return L
            }, qL: function () {
                return O
            }
        });
        var i = n(73126), r = n(59056), o = n(19623), a = n(90149), l = n.n(a), s = n(77766), u = n.n(s), c = n(2991),
            d = n.n(c), f = n(66419), m = n.n(f), p = n(67294), v = n(94184), h = n.n(v), _ = n(23279), g = n.n(_),
            b = n(96453), y = n(75290), w = n(44999), x = n(65596), Z = n(29113), E = n(41948), j = n(16534),
            S = n(88768), k = n(57119), P = n(75166), N = n(95682), T = function (e) {
                return e && e.Math == Math && e
            },
            C = T("object" == (void 0 === l() ? "undefined" : (0, o.Z)(l())) && l()) || T("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || T("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || T("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        C.globalThis = C, C.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var I = "playlist", M = 30, F = function (e) {
            return e * M
        }, L = function (e, t) {
            return e === Math.ceil(t / M) - 1 ? t - 1 : F(e) + M - 1
        }, R = function (e) {
            var t = e.total, n = e.currentIndex, i = void 0 === n ? 0 : n, o = e.showFullScreenDigitalPanel,
                a = function (e) {
                    return Math.ceil((e + 1) / M) - 1
                }, l = (0, p.useState)(a(i)), s = (0, r.Z)(l, 2), u = s[0], c = s[1], d = (0, p.useRef)(null),
                f = (0, p.useRef)(null), m = function (e) {
                    var t, n;
                    c(e);
                    var i = (null === (t = f.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) || 0,
                        r = Math.ceil(5 * i * e);
                    null === (n = d.current) || void 0 === n || n.scrollTo({top: r, behavior: "smooth"})
                };
            (0, p.useEffect)((function () {
                m(a(i))
            }), [i]);
            var v = (0, N.Z)();
            return p.createElement("div", {className: "".concat(I, "__panel")}, v ? null : p.createElement(O, {
                total: t,
                activeTabIndex: u,
                onClickTabItem: m
            }), p.createElement(D, {
                currentIndex: i,
                startIndex: 0,
                endIndex: t - 1,
                showFullScreenDigitalPanel: o,
                setActiveTabIndex: function (e) {
                    return c(e)
                },
                scrollContainerRef: d,
                rowRef: f
            }))
        }, O = function (e) {
            var t = e.total, n = e.moreText, i = e.activeTabIndex, o = e.onClickTabItem, a = e.limit,
                l = Math.ceil(t / M), s = (0, p.useState)(!1), c = (0, r.Z)(s, 2), f = c[0], v = c[1], _ = t <= 150,
                g = function (e, n) {
                    var r;
                    if (a && Math.ceil(a / M) < n) return null;
                    var l = F(n), s = L(n, t),
                        c = l === s ? "".concat(l + 1) : u()(r = "".concat(l + 1, "-")).call(r, s + 1),
                        d = a && Math.ceil(a / M) === n, f = a && d && i * M > a;
                    return p.createElement("li", {
                        key: n,
                        onClick: function () {
                            o(n), v(!1)
                        },
                        className: h()("".concat(I, "__panel__tab__item font-h4-regular"), {
                            active: f || i === n,
                            "with-margin": _
                        })
                    }, d ? "浣欎笅鍏ㄩ儴" : c)
                };
            return t > M ? p.createElement(p.Fragment, null, p.createElement("ul", {
                className: "".concat(I, "__panel__tab__container"),
                style: {justifyContent: _ ? "initial" : "space-between"}
            }, function () {
                var e;
                if (_) return d()(e = m()({length: l})).call(e, (function (e, t) {
                    return g(0, t)
                }));
                var r, o, s = n || "鏇村", c = i > 4;
                if (c) {
                    var y, w = F(i) + 1, x = L(i, t) + 1;
                    s = u()(y = "".concat(w, "-")).call(y, x), a && w > a && (s = "浣欎笅鍏ㄩ儴")
                }
                return p.createElement(p.Fragment, null, d()(r = m()({length: 5})).call(r, (function (e, t) {
                    return g(0, t)
                })), t > 150 && p.createElement("li", {
                    key: "more",
                    className: h()("".concat(I, "__panel__tab__more font-h4-regular"), {active: c}),
                    onMouseEnter: function () {
                        return v(!0)
                    },
                    onMouseLeave: function () {
                        return v(!1)
                    }
                }, p.createElement("span", null, s), p.createElement(b.RkZ, {className: h()("icon-arrow", {rotate180: f})}), f && p.createElement("div", {className: "".concat(I, "__panel__tab__external-container")}, p.createElement("ul", {className: "".concat(I, "__panel__tab__external")}, d()(o = m()({length: l - 5})).call(o, (function (e, t) {
                    return g(0, t + 5)
                }))))))
            }())) : null
        }, D = function (e) {
            var t, n = e.startIndex, i = e.endIndex, r = e.currentIndex, o = e.showFullScreenDigitalPanel,
                a = e.setActiveTabIndex, l = e.scrollContainerRef, s = e.rowRef, u = i - n + 1, c = o ? 5 : 6,
                f = Math.ceil(u / c), v = (0, N.Z)(), h = g()((function () {
                    var e, t = l.current, n = (null == t ? void 0 : t.scrollTop) || 0,
                        r = (null === (e = s.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height) || 0,
                        o = Math.floor(n / 5 / r), u = (null == t ? void 0 : t.scrollHeight) || 0;
                    ((null == t ? void 0 : t.getBoundingClientRect().height) || 0) + n + 2 >= u ? a(Math.floor(i / 5 / c)) : a(o)
                }), 200);
            return p.createElement("div", {
                className: "".concat(I, "__panel__selectBoard-container"),
                ref: l,
                onScroll: v ? void 0 : h
            }, p.createElement("div", {className: "".concat(I, "__panel__selectBoard")}, d()(t = m()({length: f})).call(t, (function (e, t) {
                var a;
                return p.createElement("div", {
                    className: "".concat(I, "__panel__selectBoard-row"),
                    ref: 0 === t ? s : void 0
                }, d()(a = m()({length: c})).call(a, (function (e, a) {
                    var l = n + (t * c + a);
                    return l <= i ? p.createElement(A, {
                        active: r === l,
                        key: l,
                        index: l,
                        showFullScreenDigitalPanel: o
                    }) : p.createElement("span", {className: "".concat(I, "__panel__selectBoard-row-placeholder")})
                })))
            }))))
        }, A = function (e) {
            var t, n = (0, p.useContext)(y.Z), r = n.data, o = n.LogInfo_Ref,
                a = (null == r ? void 0 : r.playlist) || [], l = null == r ? void 0 : r.albumInfo, s = e.active,
                c = e.index, d = (e.showFullScreenDigitalPanel, a[c]), f = c + 1, m = o.current, v = m.parent_group_id,
                _ = m.parent_impr_id, g = m.parent_impr_type;
            return d ? p.createElement(x.Z, (0, i.Z)({
                className: h()("".concat(I, "__panel__selectItem"), {active: s}),
                title: u()(t = "".concat((null == l ? void 0 : l.title) || "")).call(t, d.bottomLabel || "")
            }, (0, w.sb)({
                albumId: String(d.albumId),
                episodeId: String(d.episodeId),
                query: {
                    logPb: d.logPb,
                    recommend_type: "select",
                    sourcepage: S.JG.longvideo,
                    impr_type: "__lv_detail__",
                    parent_group_id: v,
                    parent_impr_id: _,
                    parent_impr_type: g,
                    from_gid: String(null == l ? void 0 : l.albumId)
                }
            }), {
                onClick: function () {
                    j.ZP.clickOfficial({
                        log_pb: d.logPb,
                        episode_num: f + "",
                        album_id: String(d.albumId),
                        episode_id: String(d.episodeId)
                    })
                }, isRouterLink: (0, k.Z)(), target: "_self"
            }), d.attribute && p.createElement(E.ZP, {
                mark: String(d.attribute),
                useShortName: !0,
                isForFeed: !0
            }), s ? p.createElement("img", {
                alt: "gif",
                src: globalThis.getFilterXss().filterUrl(P, null, {logType: "js.href/src", reportOnly: "all"})
            }) : f) : null
        };
        t.ZP = function (e) {
            var t = (0, p.useContext)(y.Z).data, n = (null == t ? void 0 : t.playlist) || [], i = (0, Z.Z)(),
                o = (0, p.useState)({height: "auto"}), a = (0, r.Z)(o, 2), l = a[0], s = a[1];
            return (0, p.useEffect)((function () {
                var t = e.containerRef.current.getBoundingClientRect().height,
                    n = e.containerRef.current.parentNode.getBoundingClientRect().height, i = Math.min(t, n);
                s({height: i ? "".concat(i, "px") : "auto"})
            }), [n.length]), p.createElement("div", {
                className: I,
                ref: e.containerRef,
                style: l
            }, n.length > 0 && p.createElement(R, {
                total: n.length,
                currentIndex: i,
                showFullScreenDigitalPanel: e.showFullScreenDigitalPanel
            }))
        }
    }, 29113: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return f
            }
        });
        var i = n(19623), r = n(90149), o = n.n(r), a = n(62462), l = n.n(a), s = n(67294), u = n(75290),
            c = function (e) {
                return e && e.Math == Math && e
            },
            d = c("object" == (void 0 === o() ? "undefined" : (0, i.Z)(o())) && o()) || c("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || c("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || c("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function f() {
            var e = (0, s.useContext)(u.Z), t = e.data, n = e.episodeId, i = e.groupId,
                r = (0, s.useMemo)((function () {
                    var e;
                    return (null == t || null === (e = t.playlist) || void 0 === e ? void 0 : l()(e).call(e, (function (e) {
                        return String(e.episodeId) === n || String(e.episodeId) === i
                    }))) || 0
                }), [t, null == t ? void 0 : t.playlist, n, i]);
            return i ? -1 : (-1 === r && (r = 0), r)
        }

        d.globalThis = d, d.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }
    }, 65634: function (e, t, n) {
        n.d(t, {
            m: function () {
                return Z
            }
        });
        var i = n(59056), r = n(33938), o = n(19623), a = n(63109), l = n.n(a),
            s = (n(66992), n(41539), n(88674), n(78783), n(33948), n(90149)), u = n.n(s), c = n(93476), d = n.n(c),
            f = n(2991), m = n.n(f), p = n(3649), v = n.n(p), h = n(77766), _ = n.n(h), g = n(52726), b = n(38834),
            y = n(68956), w = function (e) {
                return e && e.Math == Math && e
            },
            x = w("object" == (void 0 === u() ? "undefined" : (0, o.Z)(u())) && u()) || w("object" == ("undefined" == typeof window ? "undefined" : (0, o.Z)(window)) && window) || w("object" == ("undefined" == typeof self ? "undefined" : (0, o.Z)(self)) && self) || w("object" == (void 0 === n.g ? "undefined" : (0, o.Z)(n.g)) && n.g) || function () {
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
        var Z = function () {
            var e = (0, r.Z)(l().mark((function e(t) {
                var n, r, o, a, s, u, c, f, p, h, w, x, Z, E, j, S, k, P, N, T, C, I, M, F, L, R;
                return l().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = (n = t || {}).dispatch, o = n.ctx, a = n.app, s = n.controllers, e.prev = 1, E = "undefined" == typeof window, j = Date.now(), S = E ? [null == s ? void 0 : s.getHotWords(o, a), null == s ? void 0 : s.getVoteLinks(o, a, {
                                query: {
                                    count: 5,
                                    type: "",
                                    url: o && o.hostname + o.path
                                }
                            }), null == o ? void 0 : o.servicesV2.datarocks.getHotspotList()] : [b.Z.getHotWords(), g.Z.getVoteLinks({
                                count: 5,
                                type: "",
                                url: window.location.hostname + window.location.pathname
                            }), g.Z.getHotspots()], e.next = 7, d().all(S);
                        case 7:
                            k = e.sent, P = (0, i.Z)(k, 3), N = P[0], T = P[1], C = P[2], E ? null == o || o.servicesV2.tea.common.apiDuration({
                                name: "SSR.fetchSEOLinkData",
                                time: Date.now() - j
                            }) : y.Z.common.apiDuration({
                                name: "CSR.fetchSEOLinkData",
                                time: Date.now() - j
                            }), I = E ? null === (u = N.body) || void 0 === u ? void 0 : u.data : null === (c = N.data) || void 0 === c ? void 0 : c.data, M = null == I ? void 0 : m()(I).call(I, (function (e) {
                                return {text: e, link: "https://www.ixigua.com/search/".concat(encodeURIComponent(e))}
                            })), F = E ? null == T || null === (f = T.body) || void 0 === f ? void 0 : f.data : null === (p = T.data) || void 0 === p ? void 0 : p.data, L = Math.floor(48 * Math.random()), R = E ? v()(C).call(C, L, L + 2) : null === (h = C.data) || void 0 === h ? void 0 : v()(w = h.data).call(w, L, L + 2), E ? r("SET_SEO_LINKS", v()(x = _()(M).call(M, R, F)).call(x, 0, 10)) : r({
                                type: "SET_SEO_LINKS",
                                payload: v()(Z = _()(M).call(M, R, F)).call(Z, 0, 10)
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
    }, 11564: function (e, t, n) {
        e.exports = n.p + "static/media/detail-full-screen-setting.c7fee1c8.png"
    }, 75166: function (e, t, n) {
        e.exports = n.p + "static/media/espo.24fb9f7e.gif"
    }, 29292: function (e, t, n) {
        e.exports = n.p + "static/media/nofilm.4b450815.png"
    }, 44611: function (e, t, n) {
        e.exports = n.p + "static/media/contractArgument.ff01b1e1.svg"
    }, 48233: function (e, t, n) {
        e.exports = n.p + "static/lottie/collect.c8b918b9.json"
    }, 33597: function (e, t, n) {
        e.exports = n.p + "static/lottie/collect_44.0a0f9402.json"
    }, 92535: function (e, t, n) {
        e.exports = n.p + "static/lottie/danmaku_off.208c5e83.json"
    }, 11110: function (e, t, n) {
        e.exports = n.p + "static/lottie/danmaku_off_fullscreen.fe705079.json"
    }, 63903: function (e, t, n) {
        e.exports = n.p + "static/lottie/danmaku_on.8462af21.json"
    }, 56513: function (e, t, n) {
        e.exports = n.p + "static/lottie/danmaku_on_fullscreen.a1494c38.json"
    }, 34880: function (e, t, n) {
        e.exports = n.p + "static/lottie/danmaku_setting.84fc0f4d.json"
    }, 63356: function (e, t, n) {
        e.exports = n.p + "static/lottie/danmaku_setting_fullscreen.c16e06f4.json"
    }, 74556: function (e, t, n) {
        e.exports = n.p + "static/lottie/like.f2945243.json"
    }, 50486: function (e, t, n) {
        e.exports = n.p + "static/lottie/like_44.44f75fc7.json"
    }, 64540: function (e, t, n) {
        e.exports = n.p + "static/media/Montserrat-BlackItalic.f5b90e68.ttf"
    }, 85539: function (e, t, n) {
        e.exports = n.p + "static/media/qi_hei.a539de7f.ttf"
    }
}]);
//# sourceMappingURL=https://sourcemap.ixigua.com/obj/xigua-video-web-pc-sourcemap/xgpc/sourcemap/js/2605.c29e45ae5d.chunk.js.map