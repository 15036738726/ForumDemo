!function () {
    "use strict";
    var T = function () {
        return (T = Object.assign || function (t) {
            for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }).apply(this, arguments)
    };

    function S(t, n) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var e, o, i = r.call(t), a = [];
        try {
            for (; (void 0 === n || 0 < n--) && !(e = i.next()).done;) a.push(e.value)
        } catch (t) {
            o = {error: t}
        } finally {
            try {
                e && !e.done && (r = i.return) && r.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function A(t, n, r) {
        if (r || 2 === arguments.length) for (var e, o = 0, i = n.length; o < i; o++) !e && o in n || ((e = e || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
        return t.concat(e || Array.prototype.slice.call(n))
    }

    function r(t) {
        return "object" == typeof t && null !== t
    }

    var e = Object.prototype;

    function o(t) {
        return "function" == typeof t
    }

    function j(t, n) {
        if ("[object Array]" === e.toString.call(t) && 0 !== t.length) for (var r = 0; r < t.length;) {
            if (t[r] === n) return 1;
            r++
        }
    }

    function u(r, e, o) {
        return function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            r[e] = o.apply(void 0, A([r[e]], S(t), !1))
        }
    }

    function E() {
        var t = function () {
            for (var t = new Array(16), n = 0, r = 0; r < 16; r++) 0 == (3 & r) && (n = 4294967296 * Math.random()), t[r] = n >>> ((3 & r) << 3) & 255;
            return t
        }();
        return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, function (t) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            var e = 0, o = n;
            return [o[t[e++]], o[t[e++]], o[t[e++]], o[t[e++]], "-", o[t[e++]], o[t[e++]], "-", o[t[e++]], o[t[e++]], "-", o[t[e++]], o[t[e++]], "-", o[t[e++]], o[t[e++]], o[t[e++]], o[t[e++]], o[t[+e]], o[t[15]]].join("")
        }(t)
    }

    function i() {
        if ("object" == typeof window && r(window)) return window
    }

    function t() {
        if ("object" == typeof document && r(document)) return document
    }

    function a(t) {
        if (t) return t.__SLARDAR_REGISTRY__ || (t.__SLARDAR_REGISTRY__ = {
            Slardar: {
                plugins: [],
                errors: []
            }
        }), t.__SLARDAR_REGISTRY__.Slardar
    }

    var c = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = a(i());
        r && (r.errors || (r.errors = []), r.errors.push(t))
    }, N = function (t, n) {
        var r = t && new t(n);
        return [function (t, n) {
            r && t && r.observe(t, n)
        }, function () {
            return r && r.disconnect()
        }]
    }, M = function (r) {
        var t = r && r.timing || void 0;
        return [t, function () {
            return r && r.now ? r.now() : (Date.now ? Date.now() : +new Date) - (t && t.navigationStart || 0)
        }, function (t) {
            var n = (r || {}).getEntriesByType;
            return o(n) && n.call(r, t) || []
        }, function () {
            var t = (r || {}).clearResourceTimings;
            o(t) && t.call(r)
        }, function (t) {
            var n = (r || {}).getEntriesByName;
            return o(n) && n.call(r, t) || []
        }]
    };
    var f = function (t, n) {
        return r(t) ? T(T({}, n), t) : !!t && n
    };

    function l(r, o, i) {
        var a = 0;
        return function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var e = a += 2;
            return o(e, Date.now()), u(this, "onreadystatechange", function (r) {
                return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return 4 === this.readyState && i(e), r && r.apply(this, t)
                }
            })(), r.apply(this, t)
        }
    }

    function s(o, i, a) {
        var u = 1;
        return function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var r = o.apply(void 0, A([], S(t), !1)), e = u += 2;
            i(e, Date.now());
            return r.then(function () {
                a(e)
            }, function () {
                a(e)
            }), r
        }
    }

    function p(g, _, w, b, R) {
        if (void 0 === g && (g = i()), void 0 === _ && (_ = t()), void 0 === w && (w = function () {
            if ("function" == typeof XMLHttpRequest && o(XMLHttpRequest)) return XMLHttpRequest
        }()), void 0 === b && (b = function () {
            if (i() && o(window.MutationObserver)) return window.MutationObserver
        }()), void 0 === R && (R = function () {
            if (i() && r(window.performance)) return window.performance
        }()), _ && g) return function (t, r) {
            var n = t.types, e = [], o = null, i = [], a = 0, u = S(M(R), 2)[1], c = S(D(g, w), 1)[0], f = function () {
                var t, n;
                o && Object.keys(o.metrics).length && !Object.keys(c).length && (o.metrics[q] && (o.metrics[q].duration = a), t = 0 < i.length ? Math.max.apply(Math, A([], S(i), !1)) - Math.min.apply(Math, A([], S(i), !1)) : 0, o.metrics[x] && (o.metrics[x].duration = t), n = u() - o.start_time, r && r({
                    ev_type: O,
                    payload: T(T({}, o), {duration: n, frontend_time: n - t})
                }), l())
            }, l = function () {
                d(), o = null, i = [], a = 0
            }, s = S(L(f, l, g), 3), p = s[0], v = s[1], d = s[2], t = S(N(b, v), 2), s = t[0], y = t[1];
            s();

            function h(t) {
                var n;
                f(), l(), t.target instanceof HTMLElement && ((n = t.target.innerText) && (m({
                    name: n,
                    path: k(t.target)
                }, t.type), p()))
            }

            var m = function (t, n) {
                var r = E(), e = S(M(R), 2)[1];
                o = {start_time: e(), id: r, type: n, target: t, metrics: {}}
            };
            n && n.forEach(function (t) {
                j(I, t) && (_.addEventListener(t, h, X), e.push(function () {
                    return _.removeEventListener(t, h, X)
                }))
            });
            return [function () {
                e.forEach(function (t) {
                    return t()
                }), y()
            }, function (t) {
                if (o && j(G, t.ev_type)) {
                    if (v(), t.ev_type === x) {
                        if (!t.payload.response.timing) return;
                        var n = t.payload.response.timing, r = n.startTime, n = n.duration;
                        if (r < o.start_time) return;
                        i.push(r, r + n)
                    } else if (t.ev_type === q) {
                        if (!t.payload.longtasks.length || t.payload.longtasks[0].startTime < o.start_time) return;
                        t.payload.longtasks.forEach(function (t) {
                            a += t.duration
                        })
                    } else if (t.ev_type === H && t.payload.startTime < o.start_time) return;
                    return o.metrics[t.ev_type] = {count: (null !== (t = null === (t = o.metrics[t.ev_type]) || void 0 === t ? void 0 : t.count) && void 0 !== t ? t : 0) + 1}, o.id
                }
            }, function (t, n) {
                f(), l(), m({name: t}, n), p()
            }]
        }
    }

    var n, v, d, D = function (t, n) {
            var r, e = S([r = {}, function (t, n) {
                return r[t] = n
            }, function (t) {
                return delete r[t]
            }], 3), o = e[0], i = e[1], e = e[2];
            return n && u(n.prototype, "send", l)(i, e), t && u(t, "fetch", s)(i, e), [o]
        }, L = function (t, n, r) {
            var e, o;
            return [function () {
                r.clearTimeout(o), o = r.setTimeout(function () {
                    t(), n()
                }, 1e4)
            }, function () {
                r.clearTimeout(e), e = r.setTimeout(function () {
                    t()
                }, 100)
            }, function () {
                r.clearTimeout(e), r.clearTimeout(o)
            }]
        }, k = function (t) {
            var n = t, r = [];
            try {
                for (; null !== n.parentNode;) {
                    for (var e = 0, o = 0, i = 0; i < n.parentNode.childNodes.length; i++) {
                        var a = n.parentNode.childNodes[i];
                        a.nodeName === n.nodeName && (a === n && (o = e), e++)
                    }
                    n.hasAttribute("id") && "" !== n.id ? r.unshift(n.nodeName + "#" + n.id) : 1 < e ? r.unshift(n.nodeName + ":eq(" + o + ")") : r.unshift(n.nodeName), n = n.parentNode
                }
                return r.slice(1).join(">")
            } catch (t) {
                return
            }
        }, O = "action", x = "http", q = "performance_longtask", H = "resource", G = [q, x, "js_error", H], I = ["click"],
        X = {capture: !0}, y = "action", h = {types: ["click"]};
    v = (null === (n = null === document || void 0 === document ? void 0 : document.currentScript) || void 0 === n ? void 0 : n.getAttribute("src")) || "", (d = t()) && v && ((d = d.createElement("a")).href = v, "/" !== (v = d.pathname || "/")[0] && (v = "/" + v), d.href, d.protocol.slice(0, -1), d.hostname, d.search.substring(1), d.hash);
    var m, g, _, w, b = "1.1.7";
    m = y, g = function (a) {
        a.on("init", function () {
            var t, n, r, e, o, i,
                o = (n = y, o = h, n = null === (t = (t = a).config()) || void 0 === t ? void 0 : t.plugins[n], f(n, o));
            o && (o = S(function (t, n, r, e) {
                void 0 === n && (n = {}), void 0 === e && (e = []);
                try {
                    var o = t.apply(void 0, A([], S(e), !1));
                    return o && o(n, r) || []
                } catch (t) {
                    return c(t), []
                }
            }(p, o, a.report.bind(a)), 3), r = o[0], e = o[1], o = o[2], a.on("report", i = function (t) {
                var n = e(t);
                return n && t.extra && (t.extra.action_id = n), t
            }), a.provide("startAction", o), a.on("beforeDestroy", function () {
                r(), a.off("report", i)
            }))
        })
    }, (_ = void 0 === _ ? a(i()) : _) && _.plugins && (w = m, _.plugins.filter(function (t) {
        return t.name === w && t.version === b
    })[0] || _.plugins.push({name: m, version: b, apply: g}))
}();