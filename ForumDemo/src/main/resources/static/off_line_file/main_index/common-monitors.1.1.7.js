!function () {
    "use strict";
    var l = function () {
        return (l = Object.assign || function (n) {
            for (var t, e = 1, r = arguments.length; e < r; e++) for (var o in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
            return n
        }).apply(this, arguments)
    };

    function p(n, t) {
        var e = "function" == typeof Symbol && n[Symbol.iterator];
        if (!e) return n;
        var r, o, i = e.call(n), u = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(r = i.next()).done;) u.push(r.value)
        } catch (n) {
            o = {error: n}
        } finally {
            try {
                r && !r.done && (e = i.return) && e.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return u
    }

    function u(n, t, e) {
        if (e || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return n.concat(r || Array.prototype.slice.call(t))
    }

    var a = function () {
        return {}
    };

    function n(n) {
        return n
    }

    function o(n) {
        return "object" == typeof n && null !== n
    }

    var i = Object.prototype;

    function v(n) {
        return "[object Array]" === i.toString.call(n)
    }

    function c(n) {
        return "function" == typeof n
    }

    function f(n) {
        return "string" == typeof n
    }

    function s(n) {
        return "undefined" != typeof Event && function (n, t) {
            try {
                return n instanceof t
            } catch (n) {
                return
            }
        }(n, Event)
    }

    function m(n) {
        return v(n) && n.length ? function (n) {
            for (var t = [], e = n.length, r = 0; r < e; r++) {
                var o = n[r];
                f(o) ? t.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")) : o && o.source && t.push(o.source)
            }
            return new RegExp(t.join("|"), "i")
        }(n) : null
    }

    function d(e, r, o) {
        return function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            e[r] = o.apply(void 0, u([e[r]], p(n), !1))
        }
    }

    function h() {
        if ("object" == typeof window && o(window)) return window
    }

    function y() {
        if ("object" == typeof document && o(document)) return document
    }

    function t() {
        if (h() && o(window.performance)) return window.performance
    }

    function e() {
        if (h() && c(window.PerformanceObserver)) return window.PerformanceObserver
    }

    function g(n) {
        if (n) return n.__SLARDAR_REGISTRY__ || (n.__SLARDAR_REGISTRY__ = {
            Slardar: {
                plugins: [],
                errors: []
            }
        }), n.__SLARDAR_REGISTRY__.Slardar
    }

    var E = function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        var e = g(h());
        e && (e.errors || (e.errors = []), e.errors.push(n))
    }, b = function (e) {
        var n = e && e.timing || void 0;
        return [n, function () {
            return e && e.now ? e.now() : (Date.now ? Date.now() : +new Date) - (n && n.navigationStart || 0)
        }, function (n) {
            var t = (e || {}).getEntriesByType;
            return c(t) && t.call(e, n) || []
        }, function () {
            var n = (e || {}).clearResourceTimings;
            c(n) && n.call(e)
        }, function (n) {
            var t = (e || {}).getEntriesByName;
            return c(t) && t.call(e, n) || []
        }]
    }, w = function (e, o, t, i) {
        var r = e && new e(function (n, r) {
            n.getEntries ? n.getEntries().forEach(function (n, t, e) {
                return o(n, t, e, r)
            }) : i && i(), t && r.disconnect()
        });
        return [function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            if (!e || !r) return i && i();
            try {
                t.forEach(function (n) {
                    -1 < e.supportedEntryTypes.indexOf(n) && r.observe({type: n, buffered: !1})
                })
            } catch (n) {
                try {
                    r.observe({entryTypes: t})
                } catch (n) {
                    return i && i()
                }
            }
        }, function () {
            return r && r.disconnect()
        }]
    }, T = function (n, t, e, r) {
        void 0 === t && (t = {}), void 0 === r && (r = []);
        try {
            var o = n.apply(void 0, u([], p(r), !1));
            return o && o(t, e) || []
        } catch (n) {
            return E(n), []
        }
    };

    function _() {
        var n = h() && h() && window.location;
        return null == n ? void 0 : n.href
    }

    var S = "<unknown>";

    function r(n) {
        try {
            for (var t, e = n, r = [], o = 0, i = 0, u = " > ".length; e && o++ < 5 && !("html" === (t = function (n) {
                var t, e, r, o, i = n, u = [];
                if (!i || !i.tagName) return "";
                u.push(i.tagName.toLowerCase()), i.id && u.push("#" + i.id);
                n = i.className;
                if (n && f(n)) for (t = n.split(/\s+/), o = 0; o < t.length; o++) u.push("." + t[o]);
                var c = ["type", "name", "title", "alt"];
                for (o = 0; o < c.length; o++) e = c[o], (r = i.getAttribute(e)) && u.push("[" + e + '="' + r + '"]');
                return u.join("")
            }(e)) || 1 < o && 80 <= i + r.length * u + t.length);) r.push(t), i += t.length, e = e.parentNode;
            return r.reverse().join(" > ")
        } catch (n) {
            return S
        }
    }

    var j = function (o) {
        function i(t, e) {
            var r;
            return function (n) {
                u = void 0, n && r !== n && e({event: r = n, name: t})
            }
        }

        var u;
        return [i, function (r) {
            return function (n) {
                var t;
                try {
                    t = n.target
                } catch (n) {
                    return
                }
                var e = t && t.tagName;
                e && ("INPUT" === e || "TEXTAREA" === e || t.isContentEditable) && (u || i("input", r)(n), clearTimeout(u), u = window.setTimeout(function () {
                    u = void 0
                }, o))
            }
        }]
    }, L = function (t, e) {
        return function (n) {
            if (e) try {
                t(n)
            } catch (n) {
            }
        }
    }, R = function (e) {
        return function (n) {
            var t;
            try {
                t = n.event.target ? r(n.event.target) : r(n.event)
            } catch (n) {
                t = "<unknown>"
            }
            0 !== t.length && e({type: "dom", category: "ui." + n.name, message: t})
        }
    };

    function k(n) {
        var t = h(), e = y();
        t && e && ("complete" !== e.readyState ? t.addEventListener("load", function () {
            setTimeout(function () {
                n()
            }, 0)
        }, !1) : n())
    }

    var D = function (t) {
        var e = !1;
        return [function (n) {
            e || (e = !0, t && t(n))
        }]
    }, N = function (n) {
        var t = p(D(n), 1)[0];
        ["unload", "beforeunload", "pagehide"].forEach(function (n) {
            addEventListener(n, t)
        })
    }, A = function (n, t) {
        var e;
        void 0 === t && (t = !0), "hidden" !== document.visibilityState ? (e = function () {
            "hidden" === document.visibilityState && (n(), t && removeEventListener("visibilitychange", e, !0))
        }, addEventListener("visibilitychange", e, !0)) : n()
    }, x = function (n, t) {
        return o(n) ? l(l({}, t), n) : !!n && t
    };

    function I(n, t, e) {
        t = null === (n = n.config()) || void 0 === n ? void 0 : n.plugins[t];
        return x(t, e)
    }

    function O(a) {
        if (a = void 0 === a ? y() : a) return function (n, t) {
            var e = n.maxBreadcrumbs, r = n.onAddBreadcrumb, o = n.onMaxBreadcrumbs, i = n.dom, u = p(j(100), 2),
                n = u[0], u = u[1], e = p(B(e, r, o), 2), r = e[0], o = e[1], e = R(o), c = [];
            i && (c.push(n("click", L(e, "dom"))), c.push(u(L(e, "dom"))), a.addEventListener("click", c[0]), a.addEventListener("keypress", c[1]));
            return [r, o, function () {
                a.removeEventListener("click", c[0]), a.removeEventListener("keypress", c[1])
            }]
        }
    }

    var B = function (t, e, r) {
        void 0 === t && (t = 20), void 0 === e && (e = n), void 0 === r && (r = function (n, t) {
            return n.slice(-t)
        });
        var o = [];
        return [function () {
            return o
        }, function (n) {
            e(n) && (n = l(l({}, n), {timestamp: n.timestamp || Date.now()}), o = 0 <= t && o.length + 1 > t ? r(u(u([], p(o), !1), [n], !1), t) : u(u([], p(o), !1), [n], !1))
        }]
    }, C = "breadcrumb", q = {maxBreadcrumbs: 20, dom: !0};

    function M(n) {
        var t, e, r;
        return !function (n) {
            switch (Object.prototype.toString.call(n)) {
                case"[object Error]":
                case"[object Exception]":
                case"[object DOMError]":
                case"[object DOMException]":
                    return 1;
                default:
                    return n instanceof Error
            }
        }(n) ? (function (n) {
            if (o(n)) {
                if ("function" != typeof Object.getPrototypeOf) return "[object Object]" === i.toString.call(n);
                n = Object.getPrototypeOf(n);
                return n === i || null === n
            }
        }(n) || s(n) || f(n)) && (t = {
            message: function (n) {
                try {
                    return f(n) ? n : JSON.stringify(n)
                } catch (n) {
                    return "[FAILED_TO_STRINGIFY]:" + String(n)
                }
            }(n)
        }) : (r = G, t = (e = n) && o(e) ? r.reduce(function (n, t) {
            return n[t] = e[t], n
        }, {}) : e), t
    }

    function P(n, t) {
        return n && t && n === t
    }

    function U(v) {
        if (v = void 0 === v ? h() : v) return function (n, r) {
            var t, e, o = n.ignoreErrors, i = n.onerror, u = n.onunhandledrejection, c = n.dedupe,
                n = n.captureGlobalAsync, a = m(o), f = [], s = z(), l = function (n, t, e) {
                    n = c ? s(n) : n;
                    r && n && (a && a.test(n.message) || r({
                        ev_type: K,
                        payload: {error: n, breadcrumbs: [], extra: t, react: e}
                    }))
                };
            i && (v.addEventListener("error", t = function (n) {
                return l(H(n))
            }), f.push(function () {
                return v.removeEventListener("error", t)
            })), u && (v.addEventListener("unhandledrejection", e = function (n) {
                return l(X(n))
            }), f.push(function () {
                return v.removeEventListener("unhandledrejection", e)
            })), n && f.push(V(l));
            return [function (n, t, e) {
                return l(F(n), t, e)
            }, function () {
                f.forEach(function (n) {
                    return n()
                })
            }]
        }
    }

    var G = ["name", "message", "stack", "filename", "lineno", "colno"], H = function (n) {
            return M(n.error)
        }, X = function (n) {
            var t;
            try {
                var e = void 0;
                if ("reason" in n ? e = n.reason : "detail" in n && "reason" in n.detail && (e = n.detail.reason), e) {
                    var r = M(e);
                    return l(l({}, r), {name: null !== (t = r && r.name) && void 0 !== t ? t : "UnhandledRejection"})
                }
            } catch (n) {
            }
        }, F = function (n) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(n) ? H(n) : ("[object PromiseRejectionEvent]" === Object.prototype.toString.call(n) ? X : M)(n)
        },
        Y = ["EventTarget", "Window", "Node", "ApplicationCache", "ChannelMergerNode", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "MessagePort", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        W = ["setTimeout", "setInterval", "requestAnimationFrame", "requestIdleCallback"],
        $ = ["onload", "onerror", "onprogress", "onreadystatechange"], J = "addEventListener", V = function (t) {
            function i(n) {
                return c(n) ? n._w_ || (n._w_ = function () {
                    try {
                        return (n.handleEvent || n).apply(this, [].map.call(arguments, i))
                    } catch (n) {
                        throw e && t(M(n)), n
                    }
                }) : n
            }

            var e = !0;
            return W.forEach(function (n) {
                return window[n] && d(window, n, function (r) {
                    return function (n) {
                        for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                        return r && r.call.apply(r, u([this, i(n)], p(t), !1))
                    }
                })()
            }), d(XMLHttpRequest.prototype, "send", function (r) {
                return function () {
                    for (var t = this, n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    return $.forEach(function (n) {
                        return t[n] && d(t, n, i)()
                    }), r.apply(this, n)
                }
            })(), Y.forEach(function (n) {
                n = window[n] && window[n].prototype;
                n && n[J] && (d(n, J, function (o) {
                    return function (n, t, e) {
                        try {
                            var r = t.handleEvent;
                            c(r) && (t.handleEvent = i(r))
                        } catch (n) {
                        }
                        return o && o.call(this, n, i(t), e)
                    }
                })(), d(n, "removeEventListener", function (r) {
                    return function (n, t, e) {
                        return null != t && t._w_ && r.call(this, n, t._w_, e), r.call(this, n, t, e)
                    }
                })())
            }), function () {
                return e = !1
            }
        }, z = function () {
            var r;
            return function (n) {
                try {
                    if (e = r, !(!(t = n) || !e) && !(!P(t.message, e.message) || !P(t.stack, e.stack))) return void (r = n)
                } catch (n) {
                    E(n)
                }
                var t, e;
                return r = n
            }
        }, K = "js_error", Q = "jsError",
        Z = {ignoreErrors: [], onerror: !0, onunhandledrejection: !0, captureGlobalAsync: !1, dedupe: !0};

    function nn(f, s, l) {
        if (void 0 === f && (f = t()), void 0 === s && (s = e()), void 0 === l && (l = function () {
            var n = t();
            if (n && o(n.timing)) return n.timing
        }()), f) return function (n, e) {
            var t = n.ignoreUrls, r = n.slowSessionThreshold, o = n.ignoreTypes, i = m(t), u = [], c = function (n, t) {
                void 0 === t && (t = !1), n = n.filter(function (n) {
                    return !(function (n, t) {
                        if (v(n) && 0 !== n.length) for (var e = 0; e < n.length;) {
                            if (n[e] === t) return 1;
                            e++
                        }
                    }(null != o ? o : rn, n.initiatorType) || null != i && i.test(n.name))
                }), e && n.length && n.forEach(function (n) {
                    e([{ev_type: tn, payload: n}, t])
                })
            }, a = p(b(f), 3)[2];
            k(function () {
                var n, t;
                c(a(en), function () {
                    if (!l) return !1;
                    var n = l.loadEventEnd - l.navigationStart;
                    return r < n
                }()), n = p(w(s, function (n, t, e) {
                    return 0 === t && c(e)
                }), 2), t = n[0], n = n[1], t(en), u.push(n)
            });
            return [function () {
                u.forEach(function (n) {
                    return n()
                })
            }]
        }
    }

    var tn = "resource", en = "resource", rn = ["xmlhttprequest", "fetch", "beacon"], on = "resource",
        un = {ignoreUrls: [], slowSessionThreshold: 4e3};

    function cn(n) {
        return n = "link" === (t = n).tagName.toLowerCase() ? "href" : "src", c(t.getAttribute) ? t.getAttribute(n) || "" : t[n] || "";
        var t
    }

    function an(l, v, d) {
        if (void 0 === l && (l = h()), void 0 === v && (v = t()), void 0 === d && (d = null === location || void 0 === location ? void 0 : location.href), l) return function (n, t) {
            var e = n.ignoreUrls, r = n.includeUrls, o = n.dedupe, i = m(r), u = m(e), c = p(b(v), 5)[4], a = void 0,
                f = function (n) {
                    d && n.url === d || i && !i.test(n.url) || u && u.test(n.url) || (n.url || n.xpath && n.xpath !== S) && (o && n.url === a || (a = n.url, (n = sn(n, c)) && t && t({
                        ev_type: ln,
                        payload: n
                    })))
                }, s = function (n) {
                    n = n || l.event;
                    !n || (n = fn(n)) && f(n)
                };
            l.addEventListener("error", s, !0);
            return [f, function () {
                l.removeEventListener("error", s, !0)
            }]
        }
    }

    var fn = function (n) {
        var t = n.target || n.srcElement;
        if (t) {
            var e = t.tagName;
            if (e && f(e)) {
                n = cn(t);
                return {url: n, tagName: e, xpath: n ? void 0 : r(t)}
            }
        }
    }, sn = function (n, t) {
        var e = n.url, r = n.tagName, o = n.xpath,
            e = (n = e, (e = y()) && n ? ((e = e.createElement("a")).href = n, e.href) : ""), t = t(e)[0];
        return {type: r.toLowerCase(), url: e, xpath: o, timing: t}
    }, ln = "resource_error", vn = "resourceError", dn = {includeUrls: [], ignoreUrls: [], dedupe: !0};

    function pn(v) {
        return void 0 === v && (v = t()), function (n, r) {
            var t, o, e, i = n.precollect, u = n.fp, c = n.fcp, a = n.lcp, f = n.fid, s = n.mpfid, l = n.timing,
                n = function (n) {
                    r && r({ev_type: "performance", payload: n})
                };
            u && T(Nn, {metricName: "fp", entryName: Dn}, n), c && T(Nn, {
                metricName: "fcp",
                entryName: kn
            }, n), a && T(Rn, {precollect: i}, n), f && T(Sn, 0, n), s && (t = p(T(xn, {precollect: i}, n), 1)[0], k(function () {
                return setTimeout(t, 200)
            })), l && (o = p(b(v), 3)[2], e = p(D(function (n) {
                var t = v && v.timing || void 0, e = o("navigation")[0];
                r && r({ev_type: "performance_timing", payload: {isBounced: n, timing: t, navigation_timing: e}})
            }), 1)[0], k(function () {
                e(!1)
            }), N(function () {
                e(!0)
            }))
        }
    }

    function mn(u) {
        return void 0 === u && (u = e()), function (n, t) {
            var e = p(n, 1)[0], r = Tn(In, 0);
            if (!u) return r.isSupport = !1, [function () {
                return t && t(r)
            }, a];
            var n = p(Bn(), 2), o = n[0], i = n[1].bind(null, function (n) {
                n > r.value && (r.value = n)
            });
            (e.entries || []).forEach(function (n) {
                n.entryType === On && i(n)
            });
            n = p(w(u, i), 2), e = n[0], n = n[1];
            return e(On), A(function () {
                o()
            }, !1), [function () {
                t && t(r), o(), r = Tn(In, 0)
            }, n]
        }
    }

    function hn(o) {
        return void 0 === o && (o = e()), function (n, t) {
            function e(n) {
                t && t({longtasks: n, type: "pref"})
            }

            var r = (n.precollect || {}).entries, n = (void 0 === r ? [] : r).filter(function (n) {
                return n.entryType === Cn
            });
            if (n.length && e(n), !o) return [a];
            r = p(w(o, function (n) {
                return e([n])
            }, !1), 2), n = r[0], r = r[1];
            return n(Cn), [r]
        }
    }

    function yn() {
        return function (n, t) {
            var e = 0, r = Tn(qn, 0), o = function (n) {
                r.value = n, t && t(r)
            }, i = function () {
                o(Date.now() - e), e = 0
            };
            return N(function () {
                e && (r.isBounced = !0, i())
            }), [function () {
                e = Date.now()
            }, i]
        }
    }

    var gn, En, bn, wn = {isSupport: !0, isPolyfill: !1, isBounced: !1, isCustom: !1, type: "perf"},
        Tn = function (n, t) {
            return l({name: n, value: t}, wn)
        }, _n = "first-input", Sn = function (i, u) {
            return void 0 === i && (i = e()), void 0 === u && (u = t()), function (n, t) {
                var e = Tn("fid", 0), r = p(D(t), 1)[0];
                if (!u || !i) return e.isSupport = !1, void r(e);

                function o(n) {
                    var t = n.processingStart, n = n.startTime;
                    e.value = t - n, r(e)
                }

                t = (0, p(b(u), 3)[2])(_n)[0];
                t ? o(t) : (0, p(w(i, o, !0), 1)[0])(_n)
            }
        }, jn = "largest-contentful-paint", Ln = ["keydown", "click"], Rn = function (c) {
            return void 0 === c && (c = e()), function (n, t) {
                var n = n.precollect, e = Tn("lcp", 0), r = p(D(t), 1)[0];
                if (!c) return e.isSupport = !1, void r(e);
                (n.entries || []).forEach(function (n) {
                    var t = n.entryType, n = n.startTime;
                    t === jn && (e.value = n)
                });
                var t = p(w(c, function (n) {
                    n = n.startTime;
                    e.value = n
                }), 2), n = t[0], o = t[1];
                n(jn);
                var i = function () {
                    o(), Ln.forEach(function (n) {
                        window.removeEventListener(n, u, !0)
                    })
                }, u = function () {
                    r(e), i()
                };
                Ln.forEach(function (n) {
                    window.addEventListener(n, u, !0)
                });
                A(function () {
                    e.isSupport = !1, u()
                });
                N(function () {
                    e.isBounced = !0, u()
                })
            }
        }, kn = "first-contentful-paint", Dn = "first-paint", Nn = function (a, f) {
            return void 0 === a && (a = e()), void 0 === f && (f = t()), function (n, t) {
                var e = n.metricName, r = n.entryName, o = Tn(e, 0), i = p(D(t), 1)[0];
                if (!f || !a) return o.isSupport = !1, void i(o);
                var u, c = function (n) {
                    n = n.startTime;
                    o.value = n, i(o)
                }, e = (0, p(b(f), 5)[4])(r)[0];
                e ? c(e) : (e = (t = p(w(a, function (n) {
                    n.name === r && (c(n), u())
                }), 2))[0], u = t[1], e("paint"), A(function () {
                    o.isSupport = !1, i(o), u()
                }), N(function () {
                    o.isBounced = !0, i(o), u()
                }))
            }
        }, An = "longtask", xn = function (r, c) {
            return void 0 === r && (r = e()), void 0 === c && (c = t()), function (n, t) {
                var e = Tn("mpfid", 0), o = p(D(t), 1)[0];
                if (!r) return e.isSupport = !1, o(e), [a];
                var i = [], t = n.precollect;
                t && (t.entries || []).forEach(function (n) {
                    n.entryType === An && i.push(n)
                });
                var n = p(w(r, function (n) {
                    return i.push(n)
                }), 2), t = n[0], u = n[1];
                t(An);
                return [function () {
                    u();
                    var n = (0, p(b(c), 5)[4])(kn)[0], r = n && n.startTime || 0;
                    e.value = i.reduce(function (n, t) {
                        var e = t.duration, t = t.startTime;
                        return n < e && r < t ? e : n
                    }, 0), o(e)
                }]
            }
        }, In = "cls", On = "layout-shift", Bn = function () {
            var o = 0, i = [];
            return [function () {
                o = 0
            }, function (n, t) {
                var e, r;
                t.hadRecentInput || (e = i[0], r = i[i.length - 1], o && t.startTime - r < 1e3 && t.startTime - e < 5e3 ? (o += t.value, i.push(t.startTime)) : (o = t.value, i = [t.startTime]), n(o))
            }]
        }, Cn = "longtask", qn = "spa_load", Mn = "performance", Pn = {entries: [], observer: void 0},
        Un = {fp: !0, fcp: !0, fid: !0, mpfid: !0, lcp: !0, cls: !0, timing: !0, longtask: !0};
    En = (null === (gn = null === document || void 0 === document ? void 0 : document.currentScript) || void 0 === gn ? void 0 : gn.getAttribute("src")) || "", (bn = y()) && En && ((bn = bn.createElement("a")).href = En, "/" !== (En = bn.pathname || "/")[0] && (En = "/" + En), bn.href, bn.protocol.slice(0, -1), bn.hostname, bn.search.substring(1), bn.hash);
    var Gn = "1.1.7";

    function Hn(n, t, e) {
        var r;
        (e = void 0 === e ? g(h()) : e) && e.plugins && (r = n, e.plugins.filter(function (n) {
            return n.name === r && n.version === Gn
        })[0] || e.plugins.push({name: n, version: Gn, apply: t}))
    }

    Hn(C, function (r) {
        r.on("init", function () {
            var t, n, e = I(r, C, q);
            e && (e = (n = p(T(O, e, a), 3))[0], t = n[1], n = n[2], r.on("report", function (n) {
                return "http" === n.ev_type && t({
                    type: "http",
                    category: n.payload.api,
                    message: "",
                    data: {
                        method: n.payload.request.method,
                        url: n.payload.request.url,
                        status_code: String(n.payload.response.status)
                    },
                    timestamp: n.payload.request.timestamp
                }), n
            }), r.on("beforeDestroy", n), r.provide("getBreadcrumbs", e), r.provide("addBreadcrumb", t))
        })
    }), Hn(Q, function (e) {
        e.on("init", function () {
            window.removeEventListener("error", e.pcErr, !0), window.removeEventListener("unhandledrejection", e.pcRej, !0);
            var n, t = I(e, Q, Z);
            t && (t = (n = p(T(U, t, function (n) {
                e.getBreadcrumbs && (n.payload.breadcrumbs = e.getBreadcrumbs()), e.report(n)
            }), 2))[0], n = n[1], e.on("beforeDestroy", n), e.provide("captureException", t))
        })
    }), Hn(Mn, function (s) {
        s.on("init", function () {
            var n = s.pp || Pn;
            null !== (u = n.observer) && void 0 !== u && u.disconnect();
            var t, e, r, o, i, u, c, a, f = I(s, Mn, Un);
            f && (T(pn, l(l({}, f), {precollect: n}), (i = (t = s).config(), r = {
                url: _(),
                pid: i.pid,
                view_id: i.viewId
            }, function (n) {
                t.report(l(l({}, n), {overrides: l(l({}, r), e && e(n) || {})}))
            })), i = (u = p(T(yn, 0, o = function (n) {
                s.report({ev_type: "performance", payload: n})
            }), 2))[0], u = u[1], s.provide("performanceInit", i), s.provide("performanceSend", u), f.longtask && (u = p(T(hn, {precollect: n}, function (n) {
                s.report({ev_type: "performance_longtask", payload: n})
            }), 1)[0], s.on("beforeDestroy", u)), f.cls && (c = _(), f = p(T(mn, [n], function (n) {
                s.report({ev_type: "performance", payload: n, overrides: {url: c}})
            }), 2), a = f[0], f = f[1], s.on("beforeConfig", function (n) {
                n.viewId && n.viewId !== (null === (n = s.config()) || void 0 === n ? void 0 : n.viewId) && (a(), c = _())
            }), s.on("beforeDestroy", f), N(a)), n.entries.length = 0, s.provide("sendCustomPerfMetric", function (n) {
                n = l(l(l({}, wn), n), {isCustom: !0});
                o(n)
            }))
        })
    }), Hn(vn, function (e) {
        e.on("init", function () {
            var n, t = I(e, vn, dn);
            t && (t = (n = p(T(an, t, e.report.bind(e)), 2))[0], n = n[1], e.on("beforeDestroy", n), e.provide("reportResourceError", t))
        })
    }), Hn(on, function (e) {
        e.on("init", function () {
            var n = I(e, on, un);
            n && (n = p(T(nn, n, function (n) {
                var t = p(n, 2), n = t[0], t = t[1];
                e.report(t ? l(l({}, n), {extra: {sample_rate: 1}}) : n)
            }), 1)[0], e.on("beforeDestroy", n))
        })
    })
}();