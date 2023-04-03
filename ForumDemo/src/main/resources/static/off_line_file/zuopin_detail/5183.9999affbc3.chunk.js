(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5183], {
    68892: function (t, e, n) {
        var r;
        t.exports = (r = n(67294), function () {
            var t = {
                94184: function (t, e) {
                    var n;
                    /*!
              Copyright (c) 2018 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
                    !function () {
                        "use strict";
                        var r = {}.hasOwnProperty;

                        function i() {
                            for (var t = [], e = 0; e < arguments.length; e++) {
                                var n = arguments[e];
                                if (n) {
                                    var o = typeof n;
                                    if ("string" === o || "number" === o) t.push(n); else if (Array.isArray(n)) {
                                        if (n.length) {
                                            var s = i.apply(null, n);
                                            s && t.push(s)
                                        }
                                    } else if ("object" === o) if (n.toString === Object.prototype.toString) for (var u in n) r.call(n, u) && n[u] && t.push(u); else t.push(n.toString())
                                }
                            }
                            return t.join(" ")
                        }

                        t.exports ? (i.default = i, t.exports = i) : void 0 === (n = function () {
                            return i
                        }.apply(e, [])) || (t.exports = n)
                    }()
                }, 24698: function (t) {
                    "use strict";
                    t.exports = r
                }
            }, e = {};

            function n(r) {
                var i = e[r];
                if (void 0 !== i) return i.exports;
                var o = e[r] = {exports: {}};
                return t[r](o, o.exports, n), o.exports
            }

            n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, {a: e}), e
            }, n.d = function (t, e) {
                for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
            };
            var i = {};
            return function () {
                "use strict";
                n.r(i), n.d(i, {
                    default: function () {
                        return l
                    }
                });
                var t = n(94184), e = n.n(t), r = n(24698), o = n.n(r), s = function (t) {
                    var e = t.fillColor, n = void 0 === e ? "#0C0D0F" : e, r = t.className, i = void 0 === r ? "" : r;
                    return o().createElement("svg", {
                        className: i,
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o().createElement("path", {
                        d: "M5.36866 4.89947C5.27783 5.07773 5.27783 5.31108 5.27783 5.77779V14.2222C5.27783 14.6889 5.27783 14.9223 5.36866 15.1006C5.44855 15.2574 5.57604 15.3848 5.73284 15.4647C5.9111 15.5556 6.14445 15.5556 6.61117 15.5556H6.72228C7.18899 15.5556 7.42234 15.5556 7.6006 15.4647C7.7574 15.3848 7.88489 15.2574 7.96478 15.1006C8.05561 14.9223 8.05561 14.6889 8.05561 14.2222V5.77779C8.05561 5.31108 8.05561 5.07773 7.96478 4.89947C7.88489 4.74266 7.7574 4.61518 7.6006 4.53529C7.42234 4.44446 7.18899 4.44446 6.72228 4.44446H6.61117C6.14445 4.44446 5.9111 4.44446 5.73284 4.53529C5.57604 4.61518 5.44855 4.74266 5.36866 4.89947Z",
                        fill: n
                    }), o().createElement("path", {
                        d: "M12.0353 4.89947C11.9445 5.07773 11.9445 5.31108 11.9445 5.77779V14.2222C11.9445 14.6889 11.9445 14.9223 12.0353 15.1006C12.1152 15.2574 12.2427 15.3848 12.3995 15.4647C12.5778 15.5556 12.8111 15.5556 13.2778 15.5556H13.3889C13.8557 15.5556 14.089 15.5556 14.2673 15.4647C14.4241 15.3848 14.5516 15.2574 14.6314 15.1006C14.7223 14.9223 14.7223 14.6889 14.7223 14.2222V5.77779C14.7223 5.31108 14.7223 5.07773 14.6314 4.89947C14.5516 4.74266 14.4241 4.61518 14.2673 4.53529C14.089 4.44446 13.8557 4.44446 13.3889 4.44446H13.2778C12.8111 4.44446 12.5778 4.44446 12.3995 4.53529C12.2427 4.61518 12.1152 4.74266 12.0353 4.89947Z",
                        fill: n
                    }))
                }, u = function (t) {
                    var e = t.fillColor, n = void 0 === e ? "#0C0D0F" : e, r = t.className, i = void 0 === r ? "" : r;
                    return o().createElement("svg", {
                        className: i,
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o().createElement("path", {
                        d: "M14.3504 8.342C15.2928 8.88611 15.764 9.15816 15.9222 9.51334C16.0601 9.82314 16.0601 10.1769 15.9222 10.4867C15.764 10.8419 15.2928 11.114 14.3504 11.6581L8.42734 15.0778C7.48492 15.6219 7.01371 15.8939 6.62705 15.8533C6.28978 15.8178 5.9834 15.6409 5.78407 15.3666C5.55554 15.052 5.55554 14.5079 5.55554 13.4197V6.58034C5.55554 5.49213 5.55554 4.94803 5.78407 4.63349C5.9834 4.35913 6.28978 4.18224 6.62705 4.14679C7.01371 4.10615 7.48492 4.37821 8.42734 4.92231L14.3504 8.342Z",
                        fill: n
                    }))
                }, a = "xg-audio-comment", c = function (t) {
                    return "".concat(a, "-").concat(t)
                }, l = function (t) {
                    var n = t.className, i = t.playUrl, l = t.onStoped, f = t.onPlaying, d = t.player, h = t.duration,
                        m = t.onSeek, v = t.onTogglePlay, p = t.curPlayTime, g = t.isPlaying, y = t.iconColor,
                        b = (0, r.useRef)(null), $ = (0, r.useRef)(!1), C = function () {
                            d.src = i, d.currentTime = p >= h ? 0 : null != p ? p : d.currentTime, d.play()
                        }, w = (0, r.useCallback)((function (t) {
                            return t > h ? 100 : t / h * 100
                        }), [h]), x = (0, r.useCallback)((function (t) {
                            if (!b.current) return 0;
                            var e = b.current.getBoundingClientRect(), n = e.width, r = t - e.left;
                            return h ? Math.max(r / n * h, 0) : 0
                        }), [h, b]), M = function (t) {
                            g && (d.currentTime = t)
                        }, E = (0, r.useMemo)((function () {
                            return !p && g ? {left: 0} : b.current ? b.current.getBoundingClientRect().width * w(p) / 100 < 6 ? {left: 0} : {left: "calc(".concat(w(p), "% - 6px)")} : {left: 0}
                        }), [p, w]), S = (0, r.useMemo)((function () {
                            return b.current ? {width: "".concat(w(p), "%")} : {width: 0}
                        }), [p, w]);
                    return o().createElement(o().Fragment, null, o().createElement("div", {
                        className: e()(a, n),
                        style: {width: "".concat(1 === h ? 132 : 60 === h ? 320 : Math.round(188 / 59 * (h - 1) + 132), "px")}
                    }, o().createElement("div", {
                        className: c("play-pause"), onClick: function () {
                            d && (v && v(), d.paused ? C() : g && d.pause(), g ? l && l() : (f && f(), d.src !== i && C()))
                        }
                    }, g ? o().createElement(s, {fillColor: y}) : o().createElement(u, {fillColor: y})), o().createElement("div", {
                        ref: b,
                        className: c("progress-container"),
                        onClick: function (t) {
                            var e = x(t.clientX);
                            m && m(e), M(e)
                        },
                        onMouseDown: function () {
                            var t = 0, e = function (e) {
                                var n = x(e.clientX);
                                t = n, m && m(n), $.current = !0
                            };
                            document.addEventListener("mousemove", e), document.addEventListener("mouseup", (function n() {
                                $.current && (m && m(t), M(t), $.current = !1), document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", n)
                            }))
                        }
                    }, o().createElement("div", {className: c("progress")}, o().createElement("div", {
                        className: c("progress-played"),
                        style: S
                    }), o().createElement("div", {
                        className: c("progress-point"),
                        style: E
                    }))), h ? o().createElement("div", {className: c("duration")}, h, '"') : null))
                }
            }(), i
        }())
    }, 76264: function (t, e, n) {
        var r;
        t.exports = (r = n(67294), function () {
            "use strict";
            var t = {
                24698: function (t) {
                    t.exports = r
                }
            }, e = {};

            function n(r) {
                var i = e[r];
                if (void 0 !== i) return i.exports;
                var o = e[r] = {exports: {}};
                return t[r](o, o.exports, n), o.exports
            }

            n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, {a: e}), e
            }, n.d = function (t, e) {
                for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
            };
            var i = {};
            return function () {
                n.r(i);
                var t = n(24698), e = n.n(t), r = function (n, r) {
                    var i = n.url, o = n.onError, s = n.onEnded, u = (0, t.useRef)(null), a = function (t, e) {
                        var n = u.current;
                        null == n || n.addEventListener(t, e)
                    }, c = function (t, e) {
                        var n = u.current;
                        null == n || n.removeEventListener(t, e)
                    };
                    (0, t.useImperativeHandle)(r, (function () {
                        return {on: a, off: c, player: u.current}
                    }));
                    var l = function (t) {
                        u.current.pause(), o && o(t)
                    }, f = function () {
                        s && s()
                    };
                    return (0, t.useEffect)((function () {
                        return a("error", l), a("ended", f), function () {
                            c("error", l), c("ended", f)
                        }
                    }), []), e().createElement(e().Fragment, null, e().createElement("audio", {ref: u, src: i}))
                };
                i.default = (0, t.forwardRef)(r)
            }(), i
        }())
    }, 29254: function (t, e, n) {
        "use strict";
        var r = n(82109), i = n(14230);
        r({target: "String", proto: !0, forced: n(43429)("link")}, {
            link: function (t) {
                return i(this, "a", "href", t)
            }
        })
    }, 1646: function (t) {
        t.exports = function () {
            "use strict";
            var t, e, n = 1e3, r = 6e4, i = 36e5, o = 864e5,
                s = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6,
                a = 2592e6,
                c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
                l = {years: u, months: a, days: o, hours: i, minutes: r, seconds: n, milliseconds: 1, weeks: 6048e5},
                f = function (t) {
                    return t instanceof y
                }, d = function (t, e, n) {
                    return new y(t, n, e.$l)
                }, h = function (t) {
                    return e.p(t) + "s"
                }, m = function (t) {
                    return t < 0
                }, v = function (t) {
                    return m(t) ? Math.ceil(t) : Math.floor(t)
                }, p = function (t) {
                    return Math.abs(t)
                }, g = function (t, e) {
                    return t ? m(t) ? {negative: !0, format: "" + p(t) + e} : {
                        negative: !1,
                        format: "" + t + e
                    } : {negative: !1, format: ""}
                }, y = function () {
                    function m(t, e, n) {
                        var r = this;
                        if (this.$d = {}, this.$l = n, void 0 === t && (this.$ms = 0, this.parseFromMilliseconds()), e) return d(t * l[h(e)], this);
                        if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
                        if ("object" == typeof t) return Object.keys(t).forEach((function (e) {
                            r.$d[h(e)] = t[e]
                        })), this.calMilliseconds(), this;
                        if ("string" == typeof t) {
                            var i = t.match(c);
                            if (i) {
                                var o = i.slice(2).map((function (t) {
                                    return null != t ? Number(t) : 0
                                }));
                                return this.$d.years = o[0], this.$d.months = o[1], this.$d.weeks = o[2], this.$d.days = o[3], this.$d.hours = o[4], this.$d.minutes = o[5], this.$d.seconds = o[6], this.calMilliseconds(), this
                            }
                        }
                        return this
                    }

                    var p = m.prototype;
                    return p.calMilliseconds = function () {
                        var t = this;
                        this.$ms = Object.keys(this.$d).reduce((function (e, n) {
                            return e + (t.$d[n] || 0) * l[n]
                        }), 0)
                    }, p.parseFromMilliseconds = function () {
                        var t = this.$ms;
                        this.$d.years = v(t / u), t %= u, this.$d.months = v(t / a), t %= a, this.$d.days = v(t / o), t %= o, this.$d.hours = v(t / i), t %= i, this.$d.minutes = v(t / r), t %= r, this.$d.seconds = v(t / n), t %= n, this.$d.milliseconds = t
                    }, p.toISOString = function () {
                        var t = g(this.$d.years, "Y"), e = g(this.$d.months, "M"), n = +this.$d.days || 0;
                        this.$d.weeks && (n += 7 * this.$d.weeks);
                        var r = g(n, "D"), i = g(this.$d.hours, "H"), o = g(this.$d.minutes, "M"), s = this.$d.seconds || 0;
                        this.$d.milliseconds && (s += this.$d.milliseconds / 1e3);
                        var u = g(s, "S"),
                            a = t.negative || e.negative || r.negative || i.negative || o.negative || u.negative,
                            c = i.format || o.format || u.format ? "T" : "",
                            l = (a ? "-" : "") + "P" + t.format + e.format + r.format + c + i.format + o.format + u.format;
                        return "P" === l || "-P" === l ? "P0D" : l
                    }, p.toJSON = function () {
                        return this.toISOString()
                    }, p.format = function (t) {
                        var n = t || "YYYY-MM-DDTHH:mm:ss", r = {
                            Y: this.$d.years,
                            YY: e.s(this.$d.years, 2, "0"),
                            YYYY: e.s(this.$d.years, 4, "0"),
                            M: this.$d.months,
                            MM: e.s(this.$d.months, 2, "0"),
                            D: this.$d.days,
                            DD: e.s(this.$d.days, 2, "0"),
                            H: this.$d.hours,
                            HH: e.s(this.$d.hours, 2, "0"),
                            m: this.$d.minutes,
                            mm: e.s(this.$d.minutes, 2, "0"),
                            s: this.$d.seconds,
                            ss: e.s(this.$d.seconds, 2, "0"),
                            SSS: e.s(this.$d.milliseconds, 3, "0")
                        };
                        return n.replace(s, (function (t, e) {
                            return e || String(r[t])
                        }))
                    }, p.as = function (t) {
                        return this.$ms / l[h(t)]
                    }, p.get = function (t) {
                        var e = this.$ms, n = h(t);
                        return "milliseconds" === n ? e %= 1e3 : e = "weeks" === n ? v(e / l[n]) : this.$d[n], 0 === e ? 0 : e
                    }, p.add = function (t, e, n) {
                        var r;
                        return r = e ? t * l[h(e)] : f(t) ? t.$ms : d(t, this).$ms, d(this.$ms + r * (n ? -1 : 1), this)
                    }, p.subtract = function (t, e) {
                        return this.add(t, e, !0)
                    }, p.locale = function (t) {
                        var e = this.clone();
                        return e.$l = t, e
                    }, p.clone = function () {
                        return d(this.$ms, this)
                    }, p.humanize = function (e) {
                        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
                    }, p.milliseconds = function () {
                        return this.get("milliseconds")
                    }, p.asMilliseconds = function () {
                        return this.as("milliseconds")
                    }, p.seconds = function () {
                        return this.get("seconds")
                    }, p.asSeconds = function () {
                        return this.as("seconds")
                    }, p.minutes = function () {
                        return this.get("minutes")
                    }, p.asMinutes = function () {
                        return this.as("minutes")
                    }, p.hours = function () {
                        return this.get("hours")
                    }, p.asHours = function () {
                        return this.as("hours")
                    }, p.days = function () {
                        return this.get("days")
                    }, p.asDays = function () {
                        return this.as("days")
                    }, p.weeks = function () {
                        return this.get("weeks")
                    }, p.asWeeks = function () {
                        return this.as("weeks")
                    }, p.months = function () {
                        return this.get("months")
                    }, p.asMonths = function () {
                        return this.as("months")
                    }, p.years = function () {
                        return this.get("years")
                    }, p.asYears = function () {
                        return this.as("years")
                    }, m
                }();
            return function (n, r, i) {
                t = i, e = i().$utils(), i.duration = function (t, e) {
                    var n = i.locale();
                    return d(t, {$l: n}, e)
                }, i.isDuration = f;
                var o = r.prototype.add, s = r.prototype.subtract;
                r.prototype.add = function (t, e) {
                    return f(t) && (t = t.asMilliseconds()), o.bind(this)(t, e)
                }, r.prototype.subtract = function (t, e) {
                    return f(t) && (t = t.asMilliseconds()), s.bind(this)(t, e)
                }
            }
        }()
    }, 95573: function (t) {
        "use strict";
        /*!
         * escape-html
         * Copyright(c) 2012-2013 TJ Holowaychuk
         * Copyright(c) 2015 Andreas Lubbe
         * Copyright(c) 2015 Tiancheng "Timothy" Gu
         * MIT Licensed
         */
        var e = /["'&<>]/;
        t.exports = function (t) {
            var n, r = "" + t, i = e.exec(r);
            if (!i) return r;
            var o = "", s = 0, u = 0;
            for (s = i.index; s < r.length; s++) {
                switch (r.charCodeAt(s)) {
                    case 34:
                        n = "&quot;";
                        break;
                    case 38:
                        n = "&amp;";
                        break;
                    case 39:
                        n = "&#39;";
                        break;
                    case 60:
                        n = "&lt;";
                        break;
                    case 62:
                        n = "&gt;";
                        break;
                    default:
                        continue
                }
                u !== s && (o += r.substring(u, s)), u = s + 1, o += n
            }
            return u !== s ? o + r.substring(u, s) : o
        }
    }, 30323: function (t) {
        t.exports && (t.exports = function () {
            var t = 3, e = 4, n = 12, r = 13, i = 16, o = 17;

            function s(t, e) {
                void 0 === e && (e = 0);
                var n = t.charCodeAt(e);
                if (55296 <= n && n <= 56319 && e < t.length - 1) {
                    var r = n;
                    return 56320 <= (i = t.charCodeAt(e + 1)) && i <= 57343 ? 1024 * (r - 55296) + (i - 56320) + 65536 : r
                }
                if (56320 <= n && n <= 57343 && e >= 1) {
                    var i = n;
                    return 55296 <= (r = t.charCodeAt(e - 1)) && r <= 56319 ? 1024 * (r - 55296) + (i - 56320) + 65536 : i
                }
                return n
            }

            function u(s, u, a) {
                var c = [s].concat(u).concat([a]), l = c[c.length - 2], f = a, d = c.lastIndexOf(14);
                if (d > 1 && c.slice(1, d).every((function (e) {
                        return e == t
                    })) && -1 == [t, r, o].indexOf(s)) return 2;
                var h = c.lastIndexOf(e);
                if (h > 0 && c.slice(1, h).every((function (t) {
                        return t == e
                    })) && -1 == [n, e].indexOf(l)) return c.filter((function (t) {
                    return t == e
                })).length % 2 == 1 ? 3 : 4;
                if (0 == l && 1 == f) return 0;
                if (2 == l || 0 == l || 1 == l) return 14 == f && u.every((function (e) {
                    return e == t
                })) ? 2 : 1;
                if (2 == f || 0 == f || 1 == f) return 1;
                if (6 == l && (6 == f || 7 == f || 9 == f || 10 == f)) return 0;
                if (!(9 != l && 7 != l || 7 != f && 8 != f)) return 0;
                if ((10 == l || 8 == l) && 8 == f) return 0;
                if (f == t || 15 == f) return 0;
                if (5 == f) return 0;
                if (l == n) return 0;
                var m = -1 != c.indexOf(t) ? c.lastIndexOf(t) - 1 : c.length - 2;
                return -1 != [r, o].indexOf(c[m]) && c.slice(m + 1, -1).every((function (e) {
                    return e == t
                })) && 14 == f || 15 == l && -1 != [i, o].indexOf(f) ? 0 : -1 != u.indexOf(e) ? 2 : l == e && f == e ? 0 : 1
            }

            function a(s) {
                return 1536 <= s && s <= 1541 || 1757 == s || 1807 == s || 2274 == s || 3406 == s || 69821 == s || 70082 <= s && s <= 70083 || 72250 == s || 72326 <= s && s <= 72329 || 73030 == s ? n : 13 == s ? 0 : 10 == s ? 1 : 0 <= s && s <= 9 || 11 <= s && s <= 12 || 14 <= s && s <= 31 || 127 <= s && s <= 159 || 173 == s || 1564 == s || 6158 == s || 8203 == s || 8206 <= s && s <= 8207 || 8232 == s || 8233 == s || 8234 <= s && s <= 8238 || 8288 <= s && s <= 8292 || 8293 == s || 8294 <= s && s <= 8303 || 55296 <= s && s <= 57343 || 65279 == s || 65520 <= s && s <= 65528 || 65529 <= s && s <= 65531 || 113824 <= s && s <= 113827 || 119155 <= s && s <= 119162 || 917504 == s || 917505 == s || 917506 <= s && s <= 917535 || 917632 <= s && s <= 917759 || 918e3 <= s && s <= 921599 ? 2 : 768 <= s && s <= 879 || 1155 <= s && s <= 1159 || 1160 <= s && s <= 1161 || 1425 <= s && s <= 1469 || 1471 == s || 1473 <= s && s <= 1474 || 1476 <= s && s <= 1477 || 1479 == s || 1552 <= s && s <= 1562 || 1611 <= s && s <= 1631 || 1648 == s || 1750 <= s && s <= 1756 || 1759 <= s && s <= 1764 || 1767 <= s && s <= 1768 || 1770 <= s && s <= 1773 || 1809 == s || 1840 <= s && s <= 1866 || 1958 <= s && s <= 1968 || 2027 <= s && s <= 2035 || 2070 <= s && s <= 2073 || 2075 <= s && s <= 2083 || 2085 <= s && s <= 2087 || 2089 <= s && s <= 2093 || 2137 <= s && s <= 2139 || 2260 <= s && s <= 2273 || 2275 <= s && s <= 2306 || 2362 == s || 2364 == s || 2369 <= s && s <= 2376 || 2381 == s || 2385 <= s && s <= 2391 || 2402 <= s && s <= 2403 || 2433 == s || 2492 == s || 2494 == s || 2497 <= s && s <= 2500 || 2509 == s || 2519 == s || 2530 <= s && s <= 2531 || 2561 <= s && s <= 2562 || 2620 == s || 2625 <= s && s <= 2626 || 2631 <= s && s <= 2632 || 2635 <= s && s <= 2637 || 2641 == s || 2672 <= s && s <= 2673 || 2677 == s || 2689 <= s && s <= 2690 || 2748 == s || 2753 <= s && s <= 2757 || 2759 <= s && s <= 2760 || 2765 == s || 2786 <= s && s <= 2787 || 2810 <= s && s <= 2815 || 2817 == s || 2876 == s || 2878 == s || 2879 == s || 2881 <= s && s <= 2884 || 2893 == s || 2902 == s || 2903 == s || 2914 <= s && s <= 2915 || 2946 == s || 3006 == s || 3008 == s || 3021 == s || 3031 == s || 3072 == s || 3134 <= s && s <= 3136 || 3142 <= s && s <= 3144 || 3146 <= s && s <= 3149 || 3157 <= s && s <= 3158 || 3170 <= s && s <= 3171 || 3201 == s || 3260 == s || 3263 == s || 3266 == s || 3270 == s || 3276 <= s && s <= 3277 || 3285 <= s && s <= 3286 || 3298 <= s && s <= 3299 || 3328 <= s && s <= 3329 || 3387 <= s && s <= 3388 || 3390 == s || 3393 <= s && s <= 3396 || 3405 == s || 3415 == s || 3426 <= s && s <= 3427 || 3530 == s || 3535 == s || 3538 <= s && s <= 3540 || 3542 == s || 3551 == s || 3633 == s || 3636 <= s && s <= 3642 || 3655 <= s && s <= 3662 || 3761 == s || 3764 <= s && s <= 3769 || 3771 <= s && s <= 3772 || 3784 <= s && s <= 3789 || 3864 <= s && s <= 3865 || 3893 == s || 3895 == s || 3897 == s || 3953 <= s && s <= 3966 || 3968 <= s && s <= 3972 || 3974 <= s && s <= 3975 || 3981 <= s && s <= 3991 || 3993 <= s && s <= 4028 || 4038 == s || 4141 <= s && s <= 4144 || 4146 <= s && s <= 4151 || 4153 <= s && s <= 4154 || 4157 <= s && s <= 4158 || 4184 <= s && s <= 4185 || 4190 <= s && s <= 4192 || 4209 <= s && s <= 4212 || 4226 == s || 4229 <= s && s <= 4230 || 4237 == s || 4253 == s || 4957 <= s && s <= 4959 || 5906 <= s && s <= 5908 || 5938 <= s && s <= 5940 || 5970 <= s && s <= 5971 || 6002 <= s && s <= 6003 || 6068 <= s && s <= 6069 || 6071 <= s && s <= 6077 || 6086 == s || 6089 <= s && s <= 6099 || 6109 == s || 6155 <= s && s <= 6157 || 6277 <= s && s <= 6278 || 6313 == s || 6432 <= s && s <= 6434 || 6439 <= s && s <= 6440 || 6450 == s || 6457 <= s && s <= 6459 || 6679 <= s && s <= 6680 || 6683 == s || 6742 == s || 6744 <= s && s <= 6750 || 6752 == s || 6754 == s || 6757 <= s && s <= 6764 || 6771 <= s && s <= 6780 || 6783 == s || 6832 <= s && s <= 6845 || 6846 == s || 6912 <= s && s <= 6915 || 6964 == s || 6966 <= s && s <= 6970 || 6972 == s || 6978 == s || 7019 <= s && s <= 7027 || 7040 <= s && s <= 7041 || 7074 <= s && s <= 7077 || 7080 <= s && s <= 7081 || 7083 <= s && s <= 7085 || 7142 == s || 7144 <= s && s <= 7145 || 7149 == s || 7151 <= s && s <= 7153 || 7212 <= s && s <= 7219 || 7222 <= s && s <= 7223 || 7376 <= s && s <= 7378 || 7380 <= s && s <= 7392 || 7394 <= s && s <= 7400 || 7405 == s || 7412 == s || 7416 <= s && s <= 7417 || 7616 <= s && s <= 7673 || 7675 <= s && s <= 7679 || 8204 == s || 8400 <= s && s <= 8412 || 8413 <= s && s <= 8416 || 8417 == s || 8418 <= s && s <= 8420 || 8421 <= s && s <= 8432 || 11503 <= s && s <= 11505 || 11647 == s || 11744 <= s && s <= 11775 || 12330 <= s && s <= 12333 || 12334 <= s && s <= 12335 || 12441 <= s && s <= 12442 || 42607 == s || 42608 <= s && s <= 42610 || 42612 <= s && s <= 42621 || 42654 <= s && s <= 42655 || 42736 <= s && s <= 42737 || 43010 == s || 43014 == s || 43019 == s || 43045 <= s && s <= 43046 || 43204 <= s && s <= 43205 || 43232 <= s && s <= 43249 || 43302 <= s && s <= 43309 || 43335 <= s && s <= 43345 || 43392 <= s && s <= 43394 || 43443 == s || 43446 <= s && s <= 43449 || 43452 == s || 43493 == s || 43561 <= s && s <= 43566 || 43569 <= s && s <= 43570 || 43573 <= s && s <= 43574 || 43587 == s || 43596 == s || 43644 == s || 43696 == s || 43698 <= s && s <= 43700 || 43703 <= s && s <= 43704 || 43710 <= s && s <= 43711 || 43713 == s || 43756 <= s && s <= 43757 || 43766 == s || 44005 == s || 44008 == s || 44013 == s || 64286 == s || 65024 <= s && s <= 65039 || 65056 <= s && s <= 65071 || 65438 <= s && s <= 65439 || 66045 == s || 66272 == s || 66422 <= s && s <= 66426 || 68097 <= s && s <= 68099 || 68101 <= s && s <= 68102 || 68108 <= s && s <= 68111 || 68152 <= s && s <= 68154 || 68159 == s || 68325 <= s && s <= 68326 || 69633 == s || 69688 <= s && s <= 69702 || 69759 <= s && s <= 69761 || 69811 <= s && s <= 69814 || 69817 <= s && s <= 69818 || 69888 <= s && s <= 69890 || 69927 <= s && s <= 69931 || 69933 <= s && s <= 69940 || 70003 == s || 70016 <= s && s <= 70017 || 70070 <= s && s <= 70078 || 70090 <= s && s <= 70092 || 70191 <= s && s <= 70193 || 70196 == s || 70198 <= s && s <= 70199 || 70206 == s || 70367 == s || 70371 <= s && s <= 70378 || 70400 <= s && s <= 70401 || 70460 == s || 70462 == s || 70464 == s || 70487 == s || 70502 <= s && s <= 70508 || 70512 <= s && s <= 70516 || 70712 <= s && s <= 70719 || 70722 <= s && s <= 70724 || 70726 == s || 70832 == s || 70835 <= s && s <= 70840 || 70842 == s || 70845 == s || 70847 <= s && s <= 70848 || 70850 <= s && s <= 70851 || 71087 == s || 71090 <= s && s <= 71093 || 71100 <= s && s <= 71101 || 71103 <= s && s <= 71104 || 71132 <= s && s <= 71133 || 71219 <= s && s <= 71226 || 71229 == s || 71231 <= s && s <= 71232 || 71339 == s || 71341 == s || 71344 <= s && s <= 71349 || 71351 == s || 71453 <= s && s <= 71455 || 71458 <= s && s <= 71461 || 71463 <= s && s <= 71467 || 72193 <= s && s <= 72198 || 72201 <= s && s <= 72202 || 72243 <= s && s <= 72248 || 72251 <= s && s <= 72254 || 72263 == s || 72273 <= s && s <= 72278 || 72281 <= s && s <= 72283 || 72330 <= s && s <= 72342 || 72344 <= s && s <= 72345 || 72752 <= s && s <= 72758 || 72760 <= s && s <= 72765 || 72767 == s || 72850 <= s && s <= 72871 || 72874 <= s && s <= 72880 || 72882 <= s && s <= 72883 || 72885 <= s && s <= 72886 || 73009 <= s && s <= 73014 || 73018 == s || 73020 <= s && s <= 73021 || 73023 <= s && s <= 73029 || 73031 == s || 92912 <= s && s <= 92916 || 92976 <= s && s <= 92982 || 94095 <= s && s <= 94098 || 113821 <= s && s <= 113822 || 119141 == s || 119143 <= s && s <= 119145 || 119150 <= s && s <= 119154 || 119163 <= s && s <= 119170 || 119173 <= s && s <= 119179 || 119210 <= s && s <= 119213 || 119362 <= s && s <= 119364 || 121344 <= s && s <= 121398 || 121403 <= s && s <= 121452 || 121461 == s || 121476 == s || 121499 <= s && s <= 121503 || 121505 <= s && s <= 121519 || 122880 <= s && s <= 122886 || 122888 <= s && s <= 122904 || 122907 <= s && s <= 122913 || 122915 <= s && s <= 122916 || 122918 <= s && s <= 122922 || 125136 <= s && s <= 125142 || 125252 <= s && s <= 125258 || 917536 <= s && s <= 917631 || 917760 <= s && s <= 917999 ? t : 127462 <= s && s <= 127487 ? e : 2307 == s || 2363 == s || 2366 <= s && s <= 2368 || 2377 <= s && s <= 2380 || 2382 <= s && s <= 2383 || 2434 <= s && s <= 2435 || 2495 <= s && s <= 2496 || 2503 <= s && s <= 2504 || 2507 <= s && s <= 2508 || 2563 == s || 2622 <= s && s <= 2624 || 2691 == s || 2750 <= s && s <= 2752 || 2761 == s || 2763 <= s && s <= 2764 || 2818 <= s && s <= 2819 || 2880 == s || 2887 <= s && s <= 2888 || 2891 <= s && s <= 2892 || 3007 == s || 3009 <= s && s <= 3010 || 3014 <= s && s <= 3016 || 3018 <= s && s <= 3020 || 3073 <= s && s <= 3075 || 3137 <= s && s <= 3140 || 3202 <= s && s <= 3203 || 3262 == s || 3264 <= s && s <= 3265 || 3267 <= s && s <= 3268 || 3271 <= s && s <= 3272 || 3274 <= s && s <= 3275 || 3330 <= s && s <= 3331 || 3391 <= s && s <= 3392 || 3398 <= s && s <= 3400 || 3402 <= s && s <= 3404 || 3458 <= s && s <= 3459 || 3536 <= s && s <= 3537 || 3544 <= s && s <= 3550 || 3570 <= s && s <= 3571 || 3635 == s || 3763 == s || 3902 <= s && s <= 3903 || 3967 == s || 4145 == s || 4155 <= s && s <= 4156 || 4182 <= s && s <= 4183 || 4228 == s || 6070 == s || 6078 <= s && s <= 6085 || 6087 <= s && s <= 6088 || 6435 <= s && s <= 6438 || 6441 <= s && s <= 6443 || 6448 <= s && s <= 6449 || 6451 <= s && s <= 6456 || 6681 <= s && s <= 6682 || 6741 == s || 6743 == s || 6765 <= s && s <= 6770 || 6916 == s || 6965 == s || 6971 == s || 6973 <= s && s <= 6977 || 6979 <= s && s <= 6980 || 7042 == s || 7073 == s || 7078 <= s && s <= 7079 || 7082 == s || 7143 == s || 7146 <= s && s <= 7148 || 7150 == s || 7154 <= s && s <= 7155 || 7204 <= s && s <= 7211 || 7220 <= s && s <= 7221 || 7393 == s || 7410 <= s && s <= 7411 || 7415 == s || 43043 <= s && s <= 43044 || 43047 == s || 43136 <= s && s <= 43137 || 43188 <= s && s <= 43203 || 43346 <= s && s <= 43347 || 43395 == s || 43444 <= s && s <= 43445 || 43450 <= s && s <= 43451 || 43453 <= s && s <= 43456 || 43567 <= s && s <= 43568 || 43571 <= s && s <= 43572 || 43597 == s || 43755 == s || 43758 <= s && s <= 43759 || 43765 == s || 44003 <= s && s <= 44004 || 44006 <= s && s <= 44007 || 44009 <= s && s <= 44010 || 44012 == s || 69632 == s || 69634 == s || 69762 == s || 69808 <= s && s <= 69810 || 69815 <= s && s <= 69816 || 69932 == s || 70018 == s || 70067 <= s && s <= 70069 || 70079 <= s && s <= 70080 || 70188 <= s && s <= 70190 || 70194 <= s && s <= 70195 || 70197 == s || 70368 <= s && s <= 70370 || 70402 <= s && s <= 70403 || 70463 == s || 70465 <= s && s <= 70468 || 70471 <= s && s <= 70472 || 70475 <= s && s <= 70477 || 70498 <= s && s <= 70499 || 70709 <= s && s <= 70711 || 70720 <= s && s <= 70721 || 70725 == s || 70833 <= s && s <= 70834 || 70841 == s || 70843 <= s && s <= 70844 || 70846 == s || 70849 == s || 71088 <= s && s <= 71089 || 71096 <= s && s <= 71099 || 71102 == s || 71216 <= s && s <= 71218 || 71227 <= s && s <= 71228 || 71230 == s || 71340 == s || 71342 <= s && s <= 71343 || 71350 == s || 71456 <= s && s <= 71457 || 71462 == s || 72199 <= s && s <= 72200 || 72249 == s || 72279 <= s && s <= 72280 || 72343 == s || 72751 == s || 72766 == s || 72873 == s || 72881 == s || 72884 == s || 94033 <= s && s <= 94078 || 119142 == s || 119149 == s ? 5 : 4352 <= s && s <= 4447 || 43360 <= s && s <= 43388 ? 6 : 4448 <= s && s <= 4519 || 55216 <= s && s <= 55238 ? 7 : 4520 <= s && s <= 4607 || 55243 <= s && s <= 55291 ? 8 : 44032 == s || 44060 == s || 44088 == s || 44116 == s || 44144 == s || 44172 == s || 44200 == s || 44228 == s || 44256 == s || 44284 == s || 44312 == s || 44340 == s || 44368 == s || 44396 == s || 44424 == s || 44452 == s || 44480 == s || 44508 == s || 44536 == s || 44564 == s || 44592 == s || 44620 == s || 44648 == s || 44676 == s || 44704 == s || 44732 == s || 44760 == s || 44788 == s || 44816 == s || 44844 == s || 44872 == s || 44900 == s || 44928 == s || 44956 == s || 44984 == s || 45012 == s || 45040 == s || 45068 == s || 45096 == s || 45124 == s || 45152 == s || 45180 == s || 45208 == s || 45236 == s || 45264 == s || 45292 == s || 45320 == s || 45348 == s || 45376 == s || 45404 == s || 45432 == s || 45460 == s || 45488 == s || 45516 == s || 45544 == s || 45572 == s || 45600 == s || 45628 == s || 45656 == s || 45684 == s || 45712 == s || 45740 == s || 45768 == s || 45796 == s || 45824 == s || 45852 == s || 45880 == s || 45908 == s || 45936 == s || 45964 == s || 45992 == s || 46020 == s || 46048 == s || 46076 == s || 46104 == s || 46132 == s || 46160 == s || 46188 == s || 46216 == s || 46244 == s || 46272 == s || 46300 == s || 46328 == s || 46356 == s || 46384 == s || 46412 == s || 46440 == s || 46468 == s || 46496 == s || 46524 == s || 46552 == s || 46580 == s || 46608 == s || 46636 == s || 46664 == s || 46692 == s || 46720 == s || 46748 == s || 46776 == s || 46804 == s || 46832 == s || 46860 == s || 46888 == s || 46916 == s || 46944 == s || 46972 == s || 47e3 == s || 47028 == s || 47056 == s || 47084 == s || 47112 == s || 47140 == s || 47168 == s || 47196 == s || 47224 == s || 47252 == s || 47280 == s || 47308 == s || 47336 == s || 47364 == s || 47392 == s || 47420 == s || 47448 == s || 47476 == s || 47504 == s || 47532 == s || 47560 == s || 47588 == s || 47616 == s || 47644 == s || 47672 == s || 47700 == s || 47728 == s || 47756 == s || 47784 == s || 47812 == s || 47840 == s || 47868 == s || 47896 == s || 47924 == s || 47952 == s || 47980 == s || 48008 == s || 48036 == s || 48064 == s || 48092 == s || 48120 == s || 48148 == s || 48176 == s || 48204 == s || 48232 == s || 48260 == s || 48288 == s || 48316 == s || 48344 == s || 48372 == s || 48400 == s || 48428 == s || 48456 == s || 48484 == s || 48512 == s || 48540 == s || 48568 == s || 48596 == s || 48624 == s || 48652 == s || 48680 == s || 48708 == s || 48736 == s || 48764 == s || 48792 == s || 48820 == s || 48848 == s || 48876 == s || 48904 == s || 48932 == s || 48960 == s || 48988 == s || 49016 == s || 49044 == s || 49072 == s || 49100 == s || 49128 == s || 49156 == s || 49184 == s || 49212 == s || 49240 == s || 49268 == s || 49296 == s || 49324 == s || 49352 == s || 49380 == s || 49408 == s || 49436 == s || 49464 == s || 49492 == s || 49520 == s || 49548 == s || 49576 == s || 49604 == s || 49632 == s || 49660 == s || 49688 == s || 49716 == s || 49744 == s || 49772 == s || 49800 == s || 49828 == s || 49856 == s || 49884 == s || 49912 == s || 49940 == s || 49968 == s || 49996 == s || 50024 == s || 50052 == s || 50080 == s || 50108 == s || 50136 == s || 50164 == s || 50192 == s || 50220 == s || 50248 == s || 50276 == s || 50304 == s || 50332 == s || 50360 == s || 50388 == s || 50416 == s || 50444 == s || 50472 == s || 50500 == s || 50528 == s || 50556 == s || 50584 == s || 50612 == s || 50640 == s || 50668 == s || 50696 == s || 50724 == s || 50752 == s || 50780 == s || 50808 == s || 50836 == s || 50864 == s || 50892 == s || 50920 == s || 50948 == s || 50976 == s || 51004 == s || 51032 == s || 51060 == s || 51088 == s || 51116 == s || 51144 == s || 51172 == s || 51200 == s || 51228 == s || 51256 == s || 51284 == s || 51312 == s || 51340 == s || 51368 == s || 51396 == s || 51424 == s || 51452 == s || 51480 == s || 51508 == s || 51536 == s || 51564 == s || 51592 == s || 51620 == s || 51648 == s || 51676 == s || 51704 == s || 51732 == s || 51760 == s || 51788 == s || 51816 == s || 51844 == s || 51872 == s || 51900 == s || 51928 == s || 51956 == s || 51984 == s || 52012 == s || 52040 == s || 52068 == s || 52096 == s || 52124 == s || 52152 == s || 52180 == s || 52208 == s || 52236 == s || 52264 == s || 52292 == s || 52320 == s || 52348 == s || 52376 == s || 52404 == s || 52432 == s || 52460 == s || 52488 == s || 52516 == s || 52544 == s || 52572 == s || 52600 == s || 52628 == s || 52656 == s || 52684 == s || 52712 == s || 52740 == s || 52768 == s || 52796 == s || 52824 == s || 52852 == s || 52880 == s || 52908 == s || 52936 == s || 52964 == s || 52992 == s || 53020 == s || 53048 == s || 53076 == s || 53104 == s || 53132 == s || 53160 == s || 53188 == s || 53216 == s || 53244 == s || 53272 == s || 53300 == s || 53328 == s || 53356 == s || 53384 == s || 53412 == s || 53440 == s || 53468 == s || 53496 == s || 53524 == s || 53552 == s || 53580 == s || 53608 == s || 53636 == s || 53664 == s || 53692 == s || 53720 == s || 53748 == s || 53776 == s || 53804 == s || 53832 == s || 53860 == s || 53888 == s || 53916 == s || 53944 == s || 53972 == s || 54e3 == s || 54028 == s || 54056 == s || 54084 == s || 54112 == s || 54140 == s || 54168 == s || 54196 == s || 54224 == s || 54252 == s || 54280 == s || 54308 == s || 54336 == s || 54364 == s || 54392 == s || 54420 == s || 54448 == s || 54476 == s || 54504 == s || 54532 == s || 54560 == s || 54588 == s || 54616 == s || 54644 == s || 54672 == s || 54700 == s || 54728 == s || 54756 == s || 54784 == s || 54812 == s || 54840 == s || 54868 == s || 54896 == s || 54924 == s || 54952 == s || 54980 == s || 55008 == s || 55036 == s || 55064 == s || 55092 == s || 55120 == s || 55148 == s || 55176 == s ? 9 : 44033 <= s && s <= 44059 || 44061 <= s && s <= 44087 || 44089 <= s && s <= 44115 || 44117 <= s && s <= 44143 || 44145 <= s && s <= 44171 || 44173 <= s && s <= 44199 || 44201 <= s && s <= 44227 || 44229 <= s && s <= 44255 || 44257 <= s && s <= 44283 || 44285 <= s && s <= 44311 || 44313 <= s && s <= 44339 || 44341 <= s && s <= 44367 || 44369 <= s && s <= 44395 || 44397 <= s && s <= 44423 || 44425 <= s && s <= 44451 || 44453 <= s && s <= 44479 || 44481 <= s && s <= 44507 || 44509 <= s && s <= 44535 || 44537 <= s && s <= 44563 || 44565 <= s && s <= 44591 || 44593 <= s && s <= 44619 || 44621 <= s && s <= 44647 || 44649 <= s && s <= 44675 || 44677 <= s && s <= 44703 || 44705 <= s && s <= 44731 || 44733 <= s && s <= 44759 || 44761 <= s && s <= 44787 || 44789 <= s && s <= 44815 || 44817 <= s && s <= 44843 || 44845 <= s && s <= 44871 || 44873 <= s && s <= 44899 || 44901 <= s && s <= 44927 || 44929 <= s && s <= 44955 || 44957 <= s && s <= 44983 || 44985 <= s && s <= 45011 || 45013 <= s && s <= 45039 || 45041 <= s && s <= 45067 || 45069 <= s && s <= 45095 || 45097 <= s && s <= 45123 || 45125 <= s && s <= 45151 || 45153 <= s && s <= 45179 || 45181 <= s && s <= 45207 || 45209 <= s && s <= 45235 || 45237 <= s && s <= 45263 || 45265 <= s && s <= 45291 || 45293 <= s && s <= 45319 || 45321 <= s && s <= 45347 || 45349 <= s && s <= 45375 || 45377 <= s && s <= 45403 || 45405 <= s && s <= 45431 || 45433 <= s && s <= 45459 || 45461 <= s && s <= 45487 || 45489 <= s && s <= 45515 || 45517 <= s && s <= 45543 || 45545 <= s && s <= 45571 || 45573 <= s && s <= 45599 || 45601 <= s && s <= 45627 || 45629 <= s && s <= 45655 || 45657 <= s && s <= 45683 || 45685 <= s && s <= 45711 || 45713 <= s && s <= 45739 || 45741 <= s && s <= 45767 || 45769 <= s && s <= 45795 || 45797 <= s && s <= 45823 || 45825 <= s && s <= 45851 || 45853 <= s && s <= 45879 || 45881 <= s && s <= 45907 || 45909 <= s && s <= 45935 || 45937 <= s && s <= 45963 || 45965 <= s && s <= 45991 || 45993 <= s && s <= 46019 || 46021 <= s && s <= 46047 || 46049 <= s && s <= 46075 || 46077 <= s && s <= 46103 || 46105 <= s && s <= 46131 || 46133 <= s && s <= 46159 || 46161 <= s && s <= 46187 || 46189 <= s && s <= 46215 || 46217 <= s && s <= 46243 || 46245 <= s && s <= 46271 || 46273 <= s && s <= 46299 || 46301 <= s && s <= 46327 || 46329 <= s && s <= 46355 || 46357 <= s && s <= 46383 || 46385 <= s && s <= 46411 || 46413 <= s && s <= 46439 || 46441 <= s && s <= 46467 || 46469 <= s && s <= 46495 || 46497 <= s && s <= 46523 || 46525 <= s && s <= 46551 || 46553 <= s && s <= 46579 || 46581 <= s && s <= 46607 || 46609 <= s && s <= 46635 || 46637 <= s && s <= 46663 || 46665 <= s && s <= 46691 || 46693 <= s && s <= 46719 || 46721 <= s && s <= 46747 || 46749 <= s && s <= 46775 || 46777 <= s && s <= 46803 || 46805 <= s && s <= 46831 || 46833 <= s && s <= 46859 || 46861 <= s && s <= 46887 || 46889 <= s && s <= 46915 || 46917 <= s && s <= 46943 || 46945 <= s && s <= 46971 || 46973 <= s && s <= 46999 || 47001 <= s && s <= 47027 || 47029 <= s && s <= 47055 || 47057 <= s && s <= 47083 || 47085 <= s && s <= 47111 || 47113 <= s && s <= 47139 || 47141 <= s && s <= 47167 || 47169 <= s && s <= 47195 || 47197 <= s && s <= 47223 || 47225 <= s && s <= 47251 || 47253 <= s && s <= 47279 || 47281 <= s && s <= 47307 || 47309 <= s && s <= 47335 || 47337 <= s && s <= 47363 || 47365 <= s && s <= 47391 || 47393 <= s && s <= 47419 || 47421 <= s && s <= 47447 || 47449 <= s && s <= 47475 || 47477 <= s && s <= 47503 || 47505 <= s && s <= 47531 || 47533 <= s && s <= 47559 || 47561 <= s && s <= 47587 || 47589 <= s && s <= 47615 || 47617 <= s && s <= 47643 || 47645 <= s && s <= 47671 || 47673 <= s && s <= 47699 || 47701 <= s && s <= 47727 || 47729 <= s && s <= 47755 || 47757 <= s && s <= 47783 || 47785 <= s && s <= 47811 || 47813 <= s && s <= 47839 || 47841 <= s && s <= 47867 || 47869 <= s && s <= 47895 || 47897 <= s && s <= 47923 || 47925 <= s && s <= 47951 || 47953 <= s && s <= 47979 || 47981 <= s && s <= 48007 || 48009 <= s && s <= 48035 || 48037 <= s && s <= 48063 || 48065 <= s && s <= 48091 || 48093 <= s && s <= 48119 || 48121 <= s && s <= 48147 || 48149 <= s && s <= 48175 || 48177 <= s && s <= 48203 || 48205 <= s && s <= 48231 || 48233 <= s && s <= 48259 || 48261 <= s && s <= 48287 || 48289 <= s && s <= 48315 || 48317 <= s && s <= 48343 || 48345 <= s && s <= 48371 || 48373 <= s && s <= 48399 || 48401 <= s && s <= 48427 || 48429 <= s && s <= 48455 || 48457 <= s && s <= 48483 || 48485 <= s && s <= 48511 || 48513 <= s && s <= 48539 || 48541 <= s && s <= 48567 || 48569 <= s && s <= 48595 || 48597 <= s && s <= 48623 || 48625 <= s && s <= 48651 || 48653 <= s && s <= 48679 || 48681 <= s && s <= 48707 || 48709 <= s && s <= 48735 || 48737 <= s && s <= 48763 || 48765 <= s && s <= 48791 || 48793 <= s && s <= 48819 || 48821 <= s && s <= 48847 || 48849 <= s && s <= 48875 || 48877 <= s && s <= 48903 || 48905 <= s && s <= 48931 || 48933 <= s && s <= 48959 || 48961 <= s && s <= 48987 || 48989 <= s && s <= 49015 || 49017 <= s && s <= 49043 || 49045 <= s && s <= 49071 || 49073 <= s && s <= 49099 || 49101 <= s && s <= 49127 || 49129 <= s && s <= 49155 || 49157 <= s && s <= 49183 || 49185 <= s && s <= 49211 || 49213 <= s && s <= 49239 || 49241 <= s && s <= 49267 || 49269 <= s && s <= 49295 || 49297 <= s && s <= 49323 || 49325 <= s && s <= 49351 || 49353 <= s && s <= 49379 || 49381 <= s && s <= 49407 || 49409 <= s && s <= 49435 || 49437 <= s && s <= 49463 || 49465 <= s && s <= 49491 || 49493 <= s && s <= 49519 || 49521 <= s && s <= 49547 || 49549 <= s && s <= 49575 || 49577 <= s && s <= 49603 || 49605 <= s && s <= 49631 || 49633 <= s && s <= 49659 || 49661 <= s && s <= 49687 || 49689 <= s && s <= 49715 || 49717 <= s && s <= 49743 || 49745 <= s && s <= 49771 || 49773 <= s && s <= 49799 || 49801 <= s && s <= 49827 || 49829 <= s && s <= 49855 || 49857 <= s && s <= 49883 || 49885 <= s && s <= 49911 || 49913 <= s && s <= 49939 || 49941 <= s && s <= 49967 || 49969 <= s && s <= 49995 || 49997 <= s && s <= 50023 || 50025 <= s && s <= 50051 || 50053 <= s && s <= 50079 || 50081 <= s && s <= 50107 || 50109 <= s && s <= 50135 || 50137 <= s && s <= 50163 || 50165 <= s && s <= 50191 || 50193 <= s && s <= 50219 || 50221 <= s && s <= 50247 || 50249 <= s && s <= 50275 || 50277 <= s && s <= 50303 || 50305 <= s && s <= 50331 || 50333 <= s && s <= 50359 || 50361 <= s && s <= 50387 || 50389 <= s && s <= 50415 || 50417 <= s && s <= 50443 || 50445 <= s && s <= 50471 || 50473 <= s && s <= 50499 || 50501 <= s && s <= 50527 || 50529 <= s && s <= 50555 || 50557 <= s && s <= 50583 || 50585 <= s && s <= 50611 || 50613 <= s && s <= 50639 || 50641 <= s && s <= 50667 || 50669 <= s && s <= 50695 || 50697 <= s && s <= 50723 || 50725 <= s && s <= 50751 || 50753 <= s && s <= 50779 || 50781 <= s && s <= 50807 || 50809 <= s && s <= 50835 || 50837 <= s && s <= 50863 || 50865 <= s && s <= 50891 || 50893 <= s && s <= 50919 || 50921 <= s && s <= 50947 || 50949 <= s && s <= 50975 || 50977 <= s && s <= 51003 || 51005 <= s && s <= 51031 || 51033 <= s && s <= 51059 || 51061 <= s && s <= 51087 || 51089 <= s && s <= 51115 || 51117 <= s && s <= 51143 || 51145 <= s && s <= 51171 || 51173 <= s && s <= 51199 || 51201 <= s && s <= 51227 || 51229 <= s && s <= 51255 || 51257 <= s && s <= 51283 || 51285 <= s && s <= 51311 || 51313 <= s && s <= 51339 || 51341 <= s && s <= 51367 || 51369 <= s && s <= 51395 || 51397 <= s && s <= 51423 || 51425 <= s && s <= 51451 || 51453 <= s && s <= 51479 || 51481 <= s && s <= 51507 || 51509 <= s && s <= 51535 || 51537 <= s && s <= 51563 || 51565 <= s && s <= 51591 || 51593 <= s && s <= 51619 || 51621 <= s && s <= 51647 || 51649 <= s && s <= 51675 || 51677 <= s && s <= 51703 || 51705 <= s && s <= 51731 || 51733 <= s && s <= 51759 || 51761 <= s && s <= 51787 || 51789 <= s && s <= 51815 || 51817 <= s && s <= 51843 || 51845 <= s && s <= 51871 || 51873 <= s && s <= 51899 || 51901 <= s && s <= 51927 || 51929 <= s && s <= 51955 || 51957 <= s && s <= 51983 || 51985 <= s && s <= 52011 || 52013 <= s && s <= 52039 || 52041 <= s && s <= 52067 || 52069 <= s && s <= 52095 || 52097 <= s && s <= 52123 || 52125 <= s && s <= 52151 || 52153 <= s && s <= 52179 || 52181 <= s && s <= 52207 || 52209 <= s && s <= 52235 || 52237 <= s && s <= 52263 || 52265 <= s && s <= 52291 || 52293 <= s && s <= 52319 || 52321 <= s && s <= 52347 || 52349 <= s && s <= 52375 || 52377 <= s && s <= 52403 || 52405 <= s && s <= 52431 || 52433 <= s && s <= 52459 || 52461 <= s && s <= 52487 || 52489 <= s && s <= 52515 || 52517 <= s && s <= 52543 || 52545 <= s && s <= 52571 || 52573 <= s && s <= 52599 || 52601 <= s && s <= 52627 || 52629 <= s && s <= 52655 || 52657 <= s && s <= 52683 || 52685 <= s && s <= 52711 || 52713 <= s && s <= 52739 || 52741 <= s && s <= 52767 || 52769 <= s && s <= 52795 || 52797 <= s && s <= 52823 || 52825 <= s && s <= 52851 || 52853 <= s && s <= 52879 || 52881 <= s && s <= 52907 || 52909 <= s && s <= 52935 || 52937 <= s && s <= 52963 || 52965 <= s && s <= 52991 || 52993 <= s && s <= 53019 || 53021 <= s && s <= 53047 || 53049 <= s && s <= 53075 || 53077 <= s && s <= 53103 || 53105 <= s && s <= 53131 || 53133 <= s && s <= 53159 || 53161 <= s && s <= 53187 || 53189 <= s && s <= 53215 || 53217 <= s && s <= 53243 || 53245 <= s && s <= 53271 || 53273 <= s && s <= 53299 || 53301 <= s && s <= 53327 || 53329 <= s && s <= 53355 || 53357 <= s && s <= 53383 || 53385 <= s && s <= 53411 || 53413 <= s && s <= 53439 || 53441 <= s && s <= 53467 || 53469 <= s && s <= 53495 || 53497 <= s && s <= 53523 || 53525 <= s && s <= 53551 || 53553 <= s && s <= 53579 || 53581 <= s && s <= 53607 || 53609 <= s && s <= 53635 || 53637 <= s && s <= 53663 || 53665 <= s && s <= 53691 || 53693 <= s && s <= 53719 || 53721 <= s && s <= 53747 || 53749 <= s && s <= 53775 || 53777 <= s && s <= 53803 || 53805 <= s && s <= 53831 || 53833 <= s && s <= 53859 || 53861 <= s && s <= 53887 || 53889 <= s && s <= 53915 || 53917 <= s && s <= 53943 || 53945 <= s && s <= 53971 || 53973 <= s && s <= 53999 || 54001 <= s && s <= 54027 || 54029 <= s && s <= 54055 || 54057 <= s && s <= 54083 || 54085 <= s && s <= 54111 || 54113 <= s && s <= 54139 || 54141 <= s && s <= 54167 || 54169 <= s && s <= 54195 || 54197 <= s && s <= 54223 || 54225 <= s && s <= 54251 || 54253 <= s && s <= 54279 || 54281 <= s && s <= 54307 || 54309 <= s && s <= 54335 || 54337 <= s && s <= 54363 || 54365 <= s && s <= 54391 || 54393 <= s && s <= 54419 || 54421 <= s && s <= 54447 || 54449 <= s && s <= 54475 || 54477 <= s && s <= 54503 || 54505 <= s && s <= 54531 || 54533 <= s && s <= 54559 || 54561 <= s && s <= 54587 || 54589 <= s && s <= 54615 || 54617 <= s && s <= 54643 || 54645 <= s && s <= 54671 || 54673 <= s && s <= 54699 || 54701 <= s && s <= 54727 || 54729 <= s && s <= 54755 || 54757 <= s && s <= 54783 || 54785 <= s && s <= 54811 || 54813 <= s && s <= 54839 || 54841 <= s && s <= 54867 || 54869 <= s && s <= 54895 || 54897 <= s && s <= 54923 || 54925 <= s && s <= 54951 || 54953 <= s && s <= 54979 || 54981 <= s && s <= 55007 || 55009 <= s && s <= 55035 || 55037 <= s && s <= 55063 || 55065 <= s && s <= 55091 || 55093 <= s && s <= 55119 || 55121 <= s && s <= 55147 || 55149 <= s && s <= 55175 || 55177 <= s && s <= 55203 ? 10 : 9757 == s || 9977 == s || 9994 <= s && s <= 9997 || 127877 == s || 127938 <= s && s <= 127940 || 127943 == s || 127946 <= s && s <= 127948 || 128066 <= s && s <= 128067 || 128070 <= s && s <= 128080 || 128110 == s || 128112 <= s && s <= 128120 || 128124 == s || 128129 <= s && s <= 128131 || 128133 <= s && s <= 128135 || 128170 == s || 128372 <= s && s <= 128373 || 128378 == s || 128400 == s || 128405 <= s && s <= 128406 || 128581 <= s && s <= 128583 || 128587 <= s && s <= 128591 || 128675 == s || 128692 <= s && s <= 128694 || 128704 == s || 128716 == s || 129304 <= s && s <= 129308 || 129310 <= s && s <= 129311 || 129318 == s || 129328 <= s && s <= 129337 || 129341 <= s && s <= 129342 || 129489 <= s && s <= 129501 ? r : 127995 <= s && s <= 127999 ? 14 : 8205 == s ? 15 : 9792 == s || 9794 == s || 9877 <= s && s <= 9878 || 9992 == s || 10084 == s || 127752 == s || 127806 == s || 127859 == s || 127891 == s || 127908 == s || 127912 == s || 127979 == s || 127981 == s || 128139 == s || 128187 <= s && s <= 128188 || 128295 == s || 128300 == s || 128488 == s || 128640 == s || 128658 == s ? i : 128102 <= s && s <= 128105 ? o : 11
            }

            return this.nextBreak = function (t, e) {
                if (void 0 === e && (e = 0), e < 0) return 0;
                if (e >= t.length - 1) return t.length;
                for (var n, r, i = a(s(t, e)), o = [], c = e + 1; c < t.length; c++) if (r = c - 1, !(55296 <= (n = t).charCodeAt(r) && n.charCodeAt(r) <= 56319 && 56320 <= n.charCodeAt(r + 1) && n.charCodeAt(r + 1) <= 57343)) {
                    var l = a(s(t, c));
                    if (u(i, o, l)) return c;
                    o.push(l)
                }
                return t.length
            }, this.splitGraphemes = function (t) {
                for (var e, n = [], r = 0; (e = this.nextBreak(t, r)) < t.length;) n.push(t.slice(r, e)), r = e;
                return r < t.length && n.push(t.slice(r)), n
            }, this.iterateGraphemes = function (t) {
                var e = 0, n = {
                    next: function () {
                        var n, r;
                        return (r = this.nextBreak(t, e)) < t.length ? (n = t.slice(e, r), e = r, {
                            value: n,
                            done: !1
                        }) : e < t.length ? (n = t.slice(e), e = t.length, {value: n, done: !1}) : {
                            value: void 0,
                            done: !0
                        }
                    }.bind(this)
                };
                return "undefined" != typeof Symbol && Symbol.iterator && (n[Symbol.iterator] = function () {
                    return n
                }), n
            }, this.countGraphemes = function (t) {
                for (var e, n = 0, r = 0; (e = this.nextBreak(t, r)) < t.length;) r = e, n++;
                return r < t.length && n++, n
            }, this
        })
    }, 64239: function (t, e, n) {
        "use strict";

        function r(t) {
            return "object" == typeof t && null != t && 1 === t.nodeType
        }

        function i(t, e) {
            return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t
        }

        function o(t, e) {
            if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
                var n = getComputedStyle(t, null);
                return i(n.overflowY, e) || i(n.overflowX, e) || function (t) {
                    var e = function (t) {
                        if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                        try {
                            return t.ownerDocument.defaultView.frameElement
                        } catch (t) {
                            return null
                        }
                    }(t);
                    return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth)
                }(t)
            }
            return !1
        }

        function s(t, e, n, r, i, o, s, u) {
            return o < t && s > e || o > t && s < e ? 0 : o <= t && u <= n || s >= e && u >= n ? o - t - r : s > e && u < n || o < t && u > n ? s - e + i : 0
        }

        function u(t, e) {
            var n = window, i = e.scrollMode, u = e.block, a = e.inline, c = e.boundary,
                l = e.skipOverflowHiddenElements, f = "function" == typeof c ? c : function (t) {
                    return t !== c
                };
            if (!r(t)) throw new TypeError("Invalid target");
            for (var d = document.scrollingElement || document.documentElement, h = [], m = t; r(m) && f(m);) {
                if ((m = m.parentElement) === d) {
                    h.push(m);
                    break
                }
                null != m && m === document.body && o(m) && !o(document.documentElement) || null != m && o(m, l) && h.push(m)
            }
            for (var v = n.visualViewport ? n.visualViewport.width : innerWidth, p = n.visualViewport ? n.visualViewport.height : innerHeight, g = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, b = t.getBoundingClientRect(), $ = b.height, C = b.width, w = b.top, x = b.right, M = b.bottom, E = b.left, S = "start" === u || "nearest" === u ? w : "end" === u ? M : w + $ / 2, O = "center" === a ? E + C / 2 : "end" === a ? x : E, k = [], H = 0; H < h.length; H++) {
                var D = h[H], _ = D.getBoundingClientRect(), P = _.height, Y = _.width, j = _.top, A = _.right,
                    L = _.bottom, N = _.left;
                if ("if-needed" === i && w >= 0 && E >= 0 && M <= p && x <= v && w >= j && M <= L && E >= N && x <= A) return k;
                var T = getComputedStyle(D), W = parseInt(T.borderLeftWidth, 10), B = parseInt(T.borderTopWidth, 10),
                    I = parseInt(T.borderRightWidth, 10), V = parseInt(T.borderBottomWidth, 10), R = 0, F = 0,
                    X = "offsetWidth" in D ? D.offsetWidth - D.clientWidth - W - I : 0,
                    Z = "offsetHeight" in D ? D.offsetHeight - D.clientHeight - B - V : 0;
                if (d === D) R = "start" === u ? S : "end" === u ? S - p : "nearest" === u ? s(y, y + p, p, B, V, y + S, y + S + $, $) : S - p / 2, F = "start" === a ? O : "center" === a ? O - v / 2 : "end" === a ? O - v : s(g, g + v, v, W, I, g + O, g + O + C, C), R = Math.max(0, R + y), F = Math.max(0, F + g); else {
                    R = "start" === u ? S - j - B : "end" === u ? S - L + V + Z : "nearest" === u ? s(j, L, P, B, V + Z, S, S + $, $) : S - (j + P / 2) + Z / 2, F = "start" === a ? O - N - W : "center" === a ? O - (N + Y / 2) + X / 2 : "end" === a ? O - A + I + X : s(N, A, Y, W, I + X, O, O + C, C);
                    var G = D.scrollLeft, U = D.scrollTop;
                    S += U - (R = Math.max(0, Math.min(U + R, D.scrollHeight - P + Z))), O += G - (F = Math.max(0, Math.min(G + F, D.scrollWidth - Y + X)))
                }
                k.push({el: D, top: R, left: F})
            }
            return k
        }

        function a(t) {
            return t === Object(t) && 0 !== Object.keys(t).length
        }

        n.d(e, {
            Z: function () {
                return c
            }
        });
        var c = function (t, e) {
            var n = !t.ownerDocument.documentElement.contains(t);
            if (a(e) && "function" == typeof e.behavior) return e.behavior(n ? [] : u(t, e));
            if (!n) {
                var r = function (t) {
                    return !1 === t ? {block: "end", inline: "nearest"} : a(t) ? t : {block: "start", inline: "nearest"}
                }(e);
                return function (t, e) {
                    void 0 === e && (e = "auto");
                    var n = "scrollBehavior" in document.body.style;
                    t.forEach((function (t) {
                        var r = t.el, i = t.top, o = t.left;
                        r.scroll && n ? r.scroll({top: i, left: o, behavior: e}) : (r.scrollTop = i, r.scrollLeft = o)
                    }))
                }(u(t, r), r.behavior)
            }
        }
    }
}]);
//# sourceMappingURL=https://sourcemap.ixigua.com/obj/xigua-video-web-pc-sourcemap/xgpc/sourcemap/js/5183.9999affbc3.chunk.js.map