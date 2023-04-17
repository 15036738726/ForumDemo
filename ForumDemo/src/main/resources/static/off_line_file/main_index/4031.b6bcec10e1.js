"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[4031], {
    84825: function (e, t, n) {
        n.d(t, {
            Lc: function () {
                return $
            }, x: function () {
                return K
            }, PA: function () {
                return H
            }, qH: function () {
                return q
            }, sf: function () {
                return te
            }, WY: function () {
                return J
            }, _x: function () {
                return V
            }, XW: function () {
                return W
            }, Zj: function () {
                return F
            }, l5: function () {
                return U
            }, Ac: function () {
                return B
            }
        });
        var r = n(19623), i = (n(41539), n(54747), n(68309), n(74916), n(9653), n(90149)), o = n.n(i), a = n(86902),
            s = n.n(a), u = n(14310), d = n.n(u), c = n(20116), l = n.n(c), f = n(34074), h = n.n(f), v = n(39649),
            p = n.n(v), g = n(65420), _ = n.n(g), y = n(21611), m = n.n(y), b = n(85507), w = n.n(b), x = n(93476),
            S = n.n(x), T = n(3649), P = n.n(T), j = n(98341), k = n.n(j), E = n(1068), I = n.n(E), L = n(66419),
            C = n.n(L), R = n(19996), A = n.n(R), D = n(28032), Z = n.n(D), M = function (e) {
                return e && e.Math == Math && e
            },
            O = M("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || M("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || M("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || M("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function N(e, t) {
            var n = s()(e);
            if (d()) {
                var r = d()(e);
                t && (r = l()(r).call(r, (function (t) {
                    return h()(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function F(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? N(Object(n), !0).forEach((function (t) {
                    V(e, t, n[t])
                })) : p() ? Object.defineProperties(e, p()(n)) : N(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, h()(n, t))
                }))
            }
            return e
        }

        function U() {
            U = function () {
                return e
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, i = Object.defineProperty || function (e, t, n) {
                    e[t] = n.value
                }, o = "function" == typeof _() ? _() : {}, a = o.iterator || "@@iterator",
                s = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";

            function d(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                d({}, "")
            } catch (e) {
                d = function (e, t, n) {
                    return e[t] = n
                }
            }

            function c(e, t, n, r) {
                var o = t && t.prototype instanceof h ? t : h, a = Object.create(o.prototype), s = new C(r || []);
                return i(a, "_invoke", {value: k(e, n, s)}), a
            }

            function l(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            e.wrap = c;
            var f = {};

            function h() {
            }

            function v() {
            }

            function p() {
            }

            var g = {};
            d(g, a, (function () {
                return this
            }));
            var y = m(), b = y && y(y(R([])));
            b && b !== t && n.call(b, a) && (g = b);
            var x = p.prototype = h.prototype = Object.create(g);

            function T(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    d(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function j(e, t) {
                function o(i, a, s, u) {
                    var d = l(e[i], e, a);
                    if ("throw" !== d.type) {
                        var c = d.arg, f = c.value;
                        return f && "object" == (0, r.Z)(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                            o("next", e, s, u)
                        }), (function (e) {
                            o("throw", e, s, u)
                        })) : t.resolve(f).then((function (e) {
                            c.value = e, s(c)
                        }), (function (e) {
                            return o("throw", e, s, u)
                        }))
                    }
                    u(d.arg)
                }

                var a;
                i(this, "_invoke", {
                    value: function (e, n) {
                        function r() {
                            return new t((function (t, r) {
                                o(e, n, t, r)
                            }))
                        }

                        return a = a ? a.then(r, r) : r()
                    }
                })
            }

            function k(e, t, n) {
                var r = "suspendedStart";
                return function (i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return {value: void 0, done: !0}
                    }
                    for (n.method = i, n.arg = o; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = E(a, n);
                            if (s) {
                                if (s === f) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                            return {value: u.arg, done: n.done}
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                    }
                }
            }

            function E(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
                var i = l(r, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, f;
                var o = i.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
            }

            function I(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function L(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function C(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(I, this), this.reset(!0)
            }

            function R(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, i = function t() {
                            for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return i.next = i
                    }
                }
                return {next: A}
            }

            function A() {
                return {value: void 0, done: !0}
            }

            return v.prototype = p, i(x, "constructor", {value: p, configurable: !0}), i(p, "constructor", {
                value: v,
                configurable: !0
            }), v.displayName = d(p, u, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return w() ? w()(e, p) : (e.__proto__ = p, d(e, u, "GeneratorFunction")), e.prototype = Object.create(x), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, T(j.prototype), d(j.prototype, s, (function () {
                return this
            })), e.AsyncIterator = j, e.async = function (t, n, r, i, o) {
                void 0 === o && (o = S());
                var a = new j(c(t, n, r, i), o);
                return e.isGeneratorFunction(n) ? a : a.next().then((function (e) {
                    return e.done ? e.value : a.next()
                }))
            }, T(x), d(x, u, "Generator"), d(x, a, (function () {
                return this
            })), d(x, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = R, C.prototype = {
                constructor: C, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+P()(t).call(t, 1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i], a = o.completion;
                        if ("root" === o.tryLoc) return r("end");
                        if (o.tryLoc <= this.prev) {
                            var s = n.call(o, "catchLoc"), u = n.call(o, "finallyLoc");
                            if (s && u) {
                                if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), f
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                L(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: R(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), f
                }
            }, e
        }

        function B(e) {
            return (B = "function" == typeof _() && "symbol" == typeof k() ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof _() && e.constructor === _() && e !== _().prototype ? "symbol" : typeof e
            })(e)
        }

        function X(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a), u = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(u) : S().resolve(u).then(r, i)
        }

        function K(e) {
            return function () {
                var t = this, n = arguments;
                return new (S())((function (r, i) {
                    var o = e.apply(t, n);

                    function a(e) {
                        X(o, r, i, a, s, "next", e)
                    }

                    function s(e) {
                        X(o, r, i, a, s, "throw", e)
                    }

                    a(void 0)
                }))
            }
        }

        function H(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function z(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ne(r.key), r)
            }
        }

        function q(e, t, n) {
            return t && z(e.prototype, t), n && z(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function V(e, t, n) {
            return (t = ne(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function W(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && Y(e, t)
        }

        function G(e) {
            return (G = w() ? m().bind() : function (e) {
                return e.__proto__ || m()(e)
            })(e)
        }

        function Y(e, t) {
            return (Y = w() ? w().bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function $(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Q(e, t) {
            if (t && ("object" === (0, r.Z)(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return $(e)
        }

        function J(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !I()) return !1;
                if (I().sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(I()(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = G(e);
                if (t) {
                    var i = G(this).constructor;
                    n = I()(r, arguments, i)
                } else n = r.apply(this, arguments);
                return Q(this, n)
            }
        }

        function ee(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function te(e, t) {
            var n = void 0 !== _() && A()(e) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                    var n;
                    if (e) {
                        if ("string" == typeof e) return ee(e, t);
                        var r = P()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? C()(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ee(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, i = function () {
                    };
                    return {
                        s: i, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function ne(e) {
            var t = function (e, t) {
                if ("object" !== (0, r.Z)(e) || null === e) return e;
                var n = e[Z()];
                if (void 0 !== n) {
                    var i = n.call(e, t || "default");
                    if ("object" !== (0, r.Z)(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === (0, r.Z)(t) ? t : String(t)
        }

        O.globalThis = O, O.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }
    }, 11654: function (e, t, n) {
        n.d(t, {
            $: function () {
                return f
            }, d: function () {
                return l
            }
        });
        var r, i = n(19623), o = n(90149), a = n.n(o), s = n(84825), u = function (e) {
                return e && e.Math == Math && e
            },
            d = u("object" == (void 0 === a() ? "undefined" : (0, i.Z)(a())) && a()) || u("object" == ("undefined" == typeof window ? "undefined" : (0, i.Z)(window)) && window) || u("object" == ("undefined" == typeof self ? "undefined" : (0, i.Z)(self)) && self) || u("object" == (void 0 === n.g ? "undefined" : (0, i.Z)(n.g)) && n.g) || function () {
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
        var c = (0, s.qH)((function e(t, n, r, i, o, a) {
                (0, s.PA)(this, e), this.type = t, this.codecs = n, this.visualEntryBox = r, this.configurationBox = i, this.types = o, this.logCodeType = a
            })), l = {AVC: "avc", AV1: "av1", HEVC: "hevc", H265: "h265", H264: "h264"},
            f = (r = {}, (0, s._x)(r, l.AVC, new c("avc", "avc1.64001E", "avc1", "avcC", ["h264"], "h264")), (0, s._x)(r, l.AV1, new c("av1", "av01.0.08M.08", "av01", "av1C", ["av1"], "av1")), (0, s._x)(r, l.HEVC, new c("hevc", "hev1.1.6.L120.90", "hvc1", "hvcC", ["h265"], "h265")), r)
    }, 32808: function (e, t, n) {
        n.d(t, {
            S7: function () {
                return O
            }, On: function () {
                return N
            }, iS: function () {
                return B
            }, vL: function () {
                return T
            }, LO: function () {
                return l
            }, gD: function () {
                return h
            }, oK: function () {
                return f
            }, sp: function () {
                return U
            }, NS: function () {
                return c
            }, Z6: function () {
                return v
            }, VC: function () {
                return d
            }, vG: function () {
                return u
            }, mD: function () {
                return k
            }, x3: function () {
                return I
            }, Ck: function () {
                return j
            }, wL: function () {
                return E
            }, _6: function () {
                return S
            }, Lc: function () {
                return g
            }, wW: function () {
                return A
            }, vp: function () {
                return _
            }, ne: function () {
                return y
            }, c9: function () {
                return D
            }, yN: function () {
                return F
            }, Y9: function () {
                return C
            }, U2: function () {
                return L
            }, kI: function () {
                return b
            }, Y2: function () {
                return m
            }, Kc: function () {
                return R
            }, OU: function () {
                return p
            }, i4: function () {
                return P
            }, X4: function () {
                return M
            }, uD: function () {
                return Z
            }, WV: function () {
                return X
            }, WX: function () {
                return x
            }, h4: function () {
                return w
            }
        });
        var r = n(19623),
            i = (n(66992), n(41539), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(90149)),
            o = n.n(i), a = function (e) {
                return e && e.Math == Math && e
            },
            s = a("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var u = 1e3, d = 50, c = 10, l = 2e4, f = 6e3, h = 16e3, v = 1, p = "danger_d_speed", g = 5e9, _ = 300,
            y = {"x-cache": "x_cache", "x-response-sinfo": "server_ip"},
            m = {"360p": .45, "480p": .75, "720p": 1.6, "1080p": 5, "2k": 7.5, "4k": 12.5}, b = "player_start",
            w = "wasm_start", x = "wasm_ready", S = "init_finished", T = "core_start", P = "start_play",
            j = "error_handler", k = "error_catching", E = "error_no_mp4opts", I = "error_catch_finished",
            L = "next_start", C = "next_finished", R = {NO_START: 0, GOING: 1, APPEND: 2}, A = "media_exception",
            D = "mp4_source_exception", Z = "task_request_expired", M = "task_request_error", O = "CDM_LICENSE_ERROR",
            N = "CDM_LICENSE_SUCCESS", F = {NORMAL: 0, SEEK: 1, INIT: 2}, U = {MAIN: "0", BACK: "1"},
            B = {INIT: "init", ERR: "error"}, X = "currentDashType";
        new Uint8Array([91, 104, 69, 75, 156, 171, 238, 71, 202, 4, 244, 5]).buffer
    }, 56956: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return v
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = n(2991), s = n.n(a), u = n(86902), d = n.n(u), c = n(84825),
            l = (n(21249), n(47941), function (e) {
                return e && e.Math == Math && e
            }),
            f = l("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var h = {
            data: 1e3,
            runtime: 1002,
            parse: 1004,
            other: 9999,
            notSupport: 1005,
            canplay: 1006,
            bufferbreak: 1007,
            network: 1003,
            pdnetwork: 1008,
            licetwork: 1009,
            media: 1010
        }, v = (0, c.qH)((function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 ? arguments[3] : void 0;
            (0, c.PA)(this, e);
            var o, a = {errorType: t, errorTypeCode: h[t], errorCode: n, playerVersion: "3.2.16"};
            r && "object" === (0, c.Ac)(r) && s()(o = d()(r)).call(o, (function (e) {
                return a[e] = r[e], e
            }));
            return i && (a.currentTime = i.currentTime || 0, a.duration = i.duration || 0, a.ended = i.ended ? 0 : 1, a.vtype = "dash" === i.playerType ? "DASH" : "LOWER_MP4", i.config && (a.vid = i.config.vid), i.error && (a.videoError = i.error)), a
        }));
        v.NETWORK = "network", v.PD_NETWORK = "pdnetwork", v.LIC_NETWORK = "licetwork", v.MSE = "mse", v.PARSE = "parse", v.FORMAT = "format", v.DECODER = "decoder", v.RUNTIME = "runtime", v.CANPLAY = "canplay", v.BUFFERBREAK = "bufferbreak", v.TIMEOUT = "timeout", v.OTHER = "other", v.MEDIA = "media", v.NETEORK_ERROR_CODES = {
            timeout: -499895,
            401: -499898,
            403: -499897,
            404: -499898
        }, v.MPD_PARSE_ERROR = -499970, v.MSE_PARSE_ERROR = -499971, v.DUR_PARSE_ERROR = -499972, v.SEG_PARSE_ERROR = -499973, v.LIC_PARSE_ERROR = -499974, v.SID_PARSE_ERROR = -499975, v.HEADER_PARSE_ERROR = -499976, v.BUF_PARSE_ERROR = -499977, v.BYTE_PARSE_ERROR = -499978, v.BOX_KEY_ERROR = -499983, v.NO_CANPLAY_ERROR = -499985, v.BUFFERBREAK_ERROR = -499986, v.NETWORK_DISCONNECT = -499900, v.CDM_LICENSE_ERROR = -499901, v.MSE_MEDIA_TYPES_NOT_SUPPORTED = -499902, v.INIT_SEGMENT_ERROR = -499903, v.MSE_APPEND_ERROR = -499904
    }, 81152: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return Ie
            }
        });
        var r = n(19623),
            i = (n(74916), n(23123), n(41539), n(54747), n(15306), n(39714), n(18264), n(66992), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(90149)),
            o = n.n(i), a = n(86902), s = n.n(a), u = n(77766), d = n.n(u), c = n(81643), l = n.n(c), f = n(47302),
            h = n.n(f), v = n(31238), p = n.n(v), g = n(94198), _ = n.n(g), y = n(3649), m = n.n(y), b = n(23054),
            w = n.n(b), x = n(20116), S = n.n(x), T = n(93476), P = n.n(T), j = n(84825),
            k = (n(47941), n(92222), n(2707), n(47042), n(57327), n(88674), n(48370)), E = n.n(k), I = n(38354),
            L = n(56956), C = n(32808), R = (n(68309), n(69600), n(15671)), A = n(43144), D = function (e) {
                return e && e.Math == Math && e
            },
            Z = D("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || D("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || D("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || D("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var M = function () {
                function e() {
                    (0, R.Z)(this, e)
                }

                return (0, A.Z)(e, null, [{
                    key: "parse", value: function (t) {
                        var n = e.parseXmlString(t);
                        return null !== n ? e.parseDOMChildren(n) : null
                    }
                }, {
                    key: "parseXmlString", value: function (e) {
                        if (void 0 === e) return null;
                        var t, n = new window.DOMParser;
                        try {
                            (t = n.parseFromString(e, "text/xml")).getElementsByTagNameNS("*", "parsererror").length > 0 && (t = null)
                        } catch (e) {
                            t = null
                        }
                        return t
                    }
                }, {
                    key: "parseDOMChildren", value: function (t, n) {
                        if (t.nodeType === Node.DOCUMENT_NODE) {
                            for (var r = {}, i = t.childNodes, o = 0; o < i.length; o++) {
                                var a = i[o];
                                a.nodeType === Node.ELEMENT_NODE && (r = e.parseDOMChildren(a))
                            }
                            return r
                        }
                        if (t.nodeType === Node.ELEMENT_NODE) {
                            for (var s = {__cnt: 0}, u = [], d = t.childNodes, c = 0; c < d.length; c++) {
                                var l = d[c], f = e.getNodeLocalName(l);
                                if (l.nodeType !== Node.COMMENT_NODE) {
                                    var h = n + "." + f;
                                    if (s.__cnt++, null == s[f]) {
                                        var v = e.parseDOMChildren(l, h);
                                        if ("#text" !== f || /[^\s]/.test(v)) {
                                            var p = {};
                                            p[f] = v, u.push(p)
                                        }
                                        s[f] = v, e.toArrayAccessForm(s, f)
                                    } else {
                                        null != s[f] && (s[f] instanceof Array || (s[f] = [s[f]], e.toArrayAccessForm(s, f, h)));
                                        var g = e.parseDOMChildren(l, h);
                                        if ("#text" !== f || /[^\s]/.test(g)) {
                                            var _ = {};
                                            _[f] = g, u.push(_)
                                        }
                                        s[f][s[f].length] = g
                                    }
                                }
                            }
                            for (var y = 0; y < t.attributes.length; y++) {
                                var m = t.attributes[y];
                                s.__cnt++;
                                var b = m.value;
                                s[m.name] = b
                            }
                            var w = t.prefix;
                            return null != w && "" !== w && (s.__cnt++, s.__prefix = w), null != s["#text"] && (s.__text = s["#text"], s.__text instanceof Array && (s.__text = s.__text.join("\n")), delete s["#text"], delete s["#text_asArray"]), null != s["#cdata-section"] && (s.__cdata = s["#cdata-section"], delete s["#cdata-section"], delete s["#cdata-section_asArray"]), 1 === s.__cnt && null != s.__text ? s = s.__text : 1 === s.__cnt && null != s.__cdata && (s = s.__cdata), delete s.__cnt, s
                        }
                        if (t.nodeType === Node.TEXT_NODE || t.nodeType === Node.CDATA_SECTION_NODE) return t.nodeValue
                    }
                }, {
                    key: "getNodeLocalName", value: function (e) {
                        var t = e.localName;
                        return null == t && (t = e.baseName), null != t && "" !== t || (t = e.nodeName), t
                    }
                }, {
                    key: "toArrayAccessForm", value: function (e, t) {
                        e[t] instanceof Array || (e[t] = [e[t]])
                    }
                }]), e
            }(), O = n(57073), N = n(11654), F = (n(33948), n(92087), n(9653), n(7175)), U = n.n(F), B = n(2991),
            X = n.n(B), K = n(72119), H = n.n(K), z = n(54903), q = n.n(z), V = n(94473), W = n.n(V), G = n(66419),
            Y = n.n(G), $ = n(21809), Q = (n(21249), n(83112), n(65465), n(91038), n(78783), n(54368)),
            J = (n(32366), n(38012), n(37380), n(1118), function (e) {
                return e && e.Math == Math && e
            }),
            ee = J("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || J("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || J("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || J("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ee.globalThis = ee, ee.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var te = Math.pow(2, 32);

        function ne(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return (e[t] << 8) + (e[t + 1] || 0)
        }

        function re(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return (e[t] << 24 >>> 0) + (e[t + 1] << 16) + (e[t + 2] << 8) + (e[t + 3] || 0)
        }

        function ie(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return re(e, t) * te + re(e, t + 4)
        }

        var oe = n(78580), ae = n.n(oe), se = (n(77601), n(26699), n(32023), function (e) {
                return e && e.Math == Math && e
            }),
            ue = se("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || se("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || se("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || se("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ue.globalThis = ue, ue.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var de = "undefined" != typeof window, ce = de && navigator.userAgent.toLocaleLowerCase(),
            le = (de && /^((?!chrome|android).)*safari/.test(ce), de && ae()(ce).call(ce, "firefox")),
            fe = de && ae()(ce).call(ce, "android"), he = function (e) {
                return e && e.Math == Math && e
            },
            ve = he("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || he("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || he("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || he("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var pe = function () {
            function e() {
                (0, $.PA)(this, e)
            }

            return (0, $.qH)(e, null, [{
                key: "getRateIndexByRate", value: function (t) {
                    var n;
                    return l()(n = e.FREQ).call(n, t)
                }
            }, {
                key: "parseADTS", value: function (t, n) {
                    for (var r = t.length, i = 0; i + 2 < r && (255 !== t[i] || 240 != (246 & t[i + 1]));) i++;
                    if (!(i >= r)) {
                        var o = i, a = [], s = (60 & t[i + 2]) >>> 2, u = e.FREQ[s];
                        if (!u) throw new Error("Invalid sampling index: ".concat(s));
                        for (var d, c, l = 1 + ((192 & t[i + 2]) >>> 6), f = (1 & t[i + 2]) << 2 | (192 & t[i + 3]) >>> 6, h = e._getConfig(s, f, l), v = h.config, p = h.codec, g = 0, _ = e.getFrameDuration(u); i + 7 < r;) if (255 === t[i] && 240 == (246 & t[i + 1])) {
                            if (r - i < (c = (3 & t[i + 3]) << 11 | t[i + 4] << 3 | (224 & t[i + 5]) >> 5)) break;
                            d = 2 * (1 & ~t[i + 1]), a.push({
                                pts: n + g * _,
                                data: t.subarray(i + 7 + d, i + c)
                            }), g++, i += c
                        } else i++;
                        return {
                            skip: o,
                            remaining: i >= r ? void 0 : t.subarray(i),
                            frames: a,
                            samplingFrequencyIndex: s,
                            sampleRate: u,
                            objectType: l,
                            channelCount: f,
                            codec: p,
                            config: v,
                            originCodec: "mp4a.40.".concat(l)
                        }
                    }
                }
            }, {
                key: "parseAudioSpecificConfig", value: function (t) {
                    if (t.length) {
                        var n = t[0] >>> 3, r = (7 & t[0]) << 1 | t[1] >>> 7, i = (120 & t[1]) >>> 3, o = e.FREQ[r];
                        if (o) {
                            var a = e._getConfig(r, i, n);
                            return {
                                samplingFrequencyIndex: r,
                                sampleRate: o,
                                objectType: n,
                                channelCount: i,
                                config: a.config,
                                codec: a.codec,
                                originCodec: "mp4a.40.".concat(n)
                            }
                        }
                    }
                }
            }, {
                key: "getFrameDuration", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9e4;
                    return 1024 * t / e
                }
            }, {
                key: "_getConfig", value: function (e, t, n) {
                    var r, i, o = [];
                    return le ? e >= 6 ? (r = 5, i = e - 3) : (r = 2, i = e) : fe ? (r = 2, i = e) : (r = 2 === n || 5 === n ? n : 5, i = e, e >= 6 ? i = e - 3 : 1 === t && (r = 2, i = e)), o[0] = r << 3, o[0] |= (14 & e) >> 1, o[1] = (1 & e) << 7, o[1] |= t << 3, 5 === r && (o[1] |= (14 & i) >> 1, o[2] = (1 & i) << 7, o[2] |= 8, o[3] = 0), {
                        config: o,
                        codec: "mp4a.40.".concat(r)
                    }
                }
            }, {
                key: "getSilentFrame", value: function (e, t) {
                    if ("mp4a.40.2" === e) {
                        if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                        if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                    } else {
                        if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                }
            }]), e
        }();
        (0, $._x)(pe, "FREQ", [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]);
        var ge = function (e) {
                return e && e.Math == Math && e
            },
            _e = ge("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || ge("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || ge("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || ge("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var ye = function () {
            function e() {
                (0, $.PA)(this, e)
            }

            return (0, $.qH)(e, null, [{
                key: "findBox", value: function (t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = [];
                    if (!t) return i;
                    for (var o = 0, a = "", s = 0; t.length > 7;) {
                        if (o = re(t), a = String.fromCharCode.apply(null, t.subarray(4, 8)), s = 8, 1 === o ? (o = ie(t, 8), s += 8) : o || (o = t.length), !n[0] || a === n[0]) {
                            var u = t.subarray(0, o);
                            if (!(n.length < 2)) return e.findBox(u.subarray(s), m()(n).call(n, 1), r + s);
                            i.push({start: r, size: o, headerSize: s, type: a, data: u})
                        }
                        r += o, t = t.subarray(o)
                    }
                    return i
                }
            }, {
                key: "tfhd", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        e.trackId = re(t);
                        var n = 4, r = 1 & U()(e), i = 2 & U()(e), o = 8 & U()(e), a = 16 & U()(e), s = 32 & U()(e);
                        r && (n += 4, e.baseDataOffset = re(t, n), n += 4), i && (e.sampleDescriptionIndex = re(t, n), n += 4), o && (e.defaultSampleDuration = re(t, n), n += 4), a && (e.defaultSampleSize = re(t, n), n += 4), s && (e.defaultSampleFlags = re(t, n))
                    }))
                }
            }, {
                key: "sidx", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        var n = 0;
                        e.reference_ID = re(t, n), n += 4, e.timescale = re(t, n), n += 4, 0 === e.version ? (e.earliest_presentation_time = re(t, n), n += 4, e.first_offset = re(t, n), n += 4) : (e.earliest_presentation_time = ie(t, n), n += 8, e.first_offset = ie(t, n), n += 8), n += 2, e.references = [];
                        var r = ne(t, n);
                        n += 2;
                        for (var i = 0; i < r; i++) {
                            var o = {};
                            e.references.push(o);
                            var a = re(t, n);
                            n += 4, o.reference_type = a >> 31 & 1, o.referenced_size = 2147483647 & a, o.subsegment_duration = re(t, n), a = re(t, n += 4), n += 4, o.starts_with_SAP = a >> 31 & 1, o.SAP_type = a >> 28 & 7, o.SAP_delta_time = 268435455 & a
                        }
                    }))
                }
            }, {
                key: "moov", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        var i;
                        t.mvhd = e.mvhd(e.findBox(n, ["mvhd"], r)[0]), t.trak = X()(i = e.findBox(n, ["trak"], r)).call(i, (function (t) {
                            return e.trak(t)
                        })), t.pssh = e.pssh(e.findBox(n, ["pssh"], r)[0])
                    }))
                }
            }, {
                key: "mvhd", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        var n = 0;
                        1 === e.version ? (e.timescale = re(t, 16), e.duration = ie(t, 20), n += 28) : (e.timescale = re(t, 8), e.duration = re(t, 12), n += 16), e.nextTrackId = re(t, n + 76)
                    }))
                }
            }, {
                key: "trak", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        t.tkhd = e.tkhd(e.findBox(n, ["tkhd"], r)[0]), t.mdia = e.mdia(e.findBox(n, ["mdia"], r)[0])
                    }))
                }
            }, {
                key: "tkhd", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        var n = 0;
                        1 === e.version ? (e.trackId = re(t, 16), e.duration = ie(t, 24), n += 32) : (e.trackId = re(t, 8), e.duration = re(t, 16), n += 20), e.width = re(t, n + 52), e.height = re(t, n + 56)
                    }))
                }
            }, {
                key: "mdia", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        t.mdhd = e.mdhd(e.findBox(n, ["mdhd"], r)[0]), t.hdlr = e.hdlr(e.findBox(n, ["hdlr"], r)[0]), t.minf = e.minf(e.findBox(n, ["minf"], r)[0])
                    }))
                }
            }, {
                key: "mdhd", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        var n = 0;
                        1 === e.version ? (e.timescale = re(t, 16), e.duration = ie(t, 20), n += 28) : (e.timescale = re(t, 8), e.duration = re(t, 12), n += 16);
                        var r = ne(t, n);
                        e.language = String.fromCharCode(96 + (r >> 10 & 31), 96 + (r >> 5 & 31), 96 + (31 & r))
                    }))
                }
            }, {
                key: "hdlr", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        0 === e.version && (e.handlerType = String.fromCharCode.apply(null, t.subarray(4, 8)))
                    }))
                }
            }, {
                key: "minf", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        t.vmhd = e.vmhd(e.findBox(n, ["vmhd"], r)[0]), t.smhd = e.smhd(e.findBox(n, ["smhd"], r)[0]), t.stbl = e.stbl(e.findBox(n, ["stbl"], r)[0])
                    }))
                }
            }, {
                key: "vmhd", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        e.graphicsmode = ne(t), e.opcolor = [ne(t, 2), ne(t, 4), ne(t, 6)]
                    }))
                }
            }, {
                key: "smhd", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        e.balance = ne(t)
                    }))
                }
            }, {
                key: "stbl", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        var i, o, a;
                        t.stsd = e.stsd(e.findBox(n, ["stsd"], r)[0]), t.stts = e.stts(e.findBox(n, ["stts"], r)[0]), t.ctts = e.ctts(e.findBox(n, ["ctts"], r)[0]), t.stsc = e.stsc(e.findBox(n, ["stsc"], r)[0]), t.stsz = e.stsz(e.findBox(n, ["stsz"], r)[0]), t.stco = e.stco(e.findBox(n, ["stco"], r)[0]), t.stco || (t.co64 = e.co64(e.findBox(n, ["co64"], r)[0]), t.stco = t.co64);
                        var s = null === (i = H()(t.stsd)[0]) || void 0 === i || null === (o = i.sinf) || void 0 === o || null === (a = o.schi) || void 0 === a ? void 0 : a.tenc.default_IV_size;
                        t.stss = e.stss(e.findBox(n, ["stss"], r)[0]), t.senc = e.senc(e.findBox(n, ["senc"], r)[0], s)
                    }))
                }
            }, {
                key: "senc", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
                    return xe(e, !0, (function (e, n) {
                        var r = 0, i = re(n, r);
                        r += 4, e.samples = [];
                        for (var o = 0; o < i; o++) {
                            for (var a = {InitializationVector: []}, s = 0; s < t; s++) a.InitializationVector[s] = n[r + s];
                            if (r += t, 2 & U()(e)) {
                                a.subsamples = [];
                                var u = ne(n, r);
                                r += 2;
                                for (var d = 0; d < u; d++) {
                                    var c = {};
                                    c.BytesOfClearData = ne(n, r), r += 2, c.BytesOfProtectedData = re(n, r), r += 4, a.subsamples.push(c)
                                }
                            }
                            e.samples.push(a)
                        }
                    }))
                }
            }, {
                key: "pssh", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        for (var n = [], r = [], i = 0, o = 0; o < 16; o++) r.push(Te(t[i + o]));
                        if (i += 16, e.version > 0) {
                            var a = re(t, i);
                            i += 4;
                            for (var s = 0; s < ("" + a).length; s++) for (var u = 0; u < 16; u++) {
                                var d = t[i];
                                i += 1, n.push(Te(d))
                            }
                        }
                        var c = re(t, i);
                        e.data_size = c, i += 4, e.kid = n, e.system_id = r, e.buffer = t
                    }))
                }
            }, {
                key: "stsd", value: function (t) {
                    return xe(t, !0, (function (t, n, r) {
                        var i, o;
                        t.entryCount = re(n), t.entries = S()(i = X()(o = e.findBox(n.subarray(4), [], r + 4)).call(o, (function (t) {
                            switch (t.type) {
                                case"avc1":
                                case"avc2":
                                case"avc3":
                                case"avc4":
                                    return e.avc1(t);
                                case"hvc1":
                                case"hev1":
                                    return e.hvc1(t);
                                case"mp4a":
                                    return e.mp4a(t);
                                case"alaw":
                                case"ulaw":
                                    return e.alaw(t);
                                case"enca":
                                    return xe(t, !1, (function (t, n, r) {
                                        t.channelCount = ne(n, 16), t.samplesize = ne(n, 18), t.sampleRate = re(n, 24) / 65536, n = n.subarray(28), t.sinf = e.sinf(e.findBox(n, ["sinf"], r)[0]), t.esds = e.esds(e.findBox(n, ["esds"], r)[0])
                                    }));
                                case"encv":
                                    return xe(t, !1, (function (t, n, r) {
                                        t.width = ne(n, 24), t.height = ne(n, 26), t.horizresolution = re(n, 28), t.vertresolution = re(n, 32), n = n.subarray(78), t.sinf = e.sinf(e.findBox(n, ["sinf"], r)[0]), t.avcC = e.avcC(e.findBox(n, ["avcC"], r)[0]), t.hvcC = e.hvcC(e.findBox(n, ["hvcC"], r)[0]), t.pasp = e.pasp(e.findBox(n, ["pasp"], r)[0])
                                    }))
                            }
                        }))).call(i, Boolean)
                    }))
                }
            }, {
                key: "tenc", value: function (e) {
                    return xe(e, !1, (function (e, t) {
                        var n = 6;
                        e.default_IsEncrypted = t[n], n += 1, e.default_IV_size = t[n], n += 1, e.default_KID = [];
                        for (var r = 0; r < 16; r++) e.default_KID.push(Te(t[n])), n += 1
                    }))
                }
            }, {
                key: "schi", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        t.tenc = e.tenc(e.findBox(n, ["tenc"], r)[0])
                    }))
                }
            }, {
                key: "sinf", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        t.schi = e.schi(e.findBox(n, ["schi"], r)[0]), t.frma = e.frma(e.findBox(n, ["frma"], r)[0])
                    }))
                }
            }, {
                key: "frma", value: function (e) {
                    return xe(e, !1, (function (e, t) {
                        e.data_format = "";
                        for (var n = 0; n < 4; n++) e.data_format += String.fromCharCode(t[n])
                    }))
                }
            }, {
                key: "avc1", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        var i = be(t, n), o = n.subarray(i);
                        r += i, t.avcC = e.avcC(e.findBox(o, ["avcC"], r)[0]), t.pasp = e.pasp(e.findBox(o, ["pasp"], r)[0])
                    }))
                }
            }, {
                key: "avcC", value: function (e) {
                    return xe(e, !1, (function (e, t) {
                        e.configurationVersion = t[0], e.AVCProfileIndication = t[1], e.profileCompatibility = t[2], e.AVCLevelIndication = t[3], e.codec = function (e) {
                            for (var t, n = "avc1.", r = 0; r < 3; r++) (t = e[r].toString(16)).length < 2 && (t = "0".concat(t)), n += t;
                            return n
                        }([t[1], t[2], t[3]]), e.lengthSizeMinusOne = 3 & t[4], e.spsLength = 31 & t[5], e.sps = [];
                        for (var n = 6, r = 0; r < e.spsLength; r++) {
                            var i = ne(t, n);
                            n += 2, e.sps.push(t.subarray(n, n + i)), n += i
                        }
                        e.ppsLength = t[n], n += 1, e.pps = [];
                        for (var o = 0; o < e.ppsLength; o++) {
                            var a = ne(t, n);
                            n += 2, e.pps.push(t.subarray(n, n += a)), n += a
                        }
                    }))
                }
            }, {
                key: "hvc1", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        var i = be(t, n), o = n.subarray(i);
                        r += i, t.hvcC = e.hvcC(e.findBox(o, ["hvcC"], r)[0]), t.pasp = e.pasp(e.findBox(o, ["pasp"], r)[0])
                    }))
                }
            }, {
                key: "hvcC", value: function (e) {
                    return xe(e, !1, (function (t, n) {
                        t.data = e.data, t.codec = "hev1.1.6.L93.B0", t.configurationVersion = n[0];
                        var r = n[1];
                        t.generalProfileSpace = r >> 6, t.generalTierFlag = (32 & r) >> 5, t.generalProfileIdc = 31 & r, t.generalProfileCompatibility = re(n, 2), t.generalConstraintIndicatorFlags = n.subarray(6, 12), t.generalLevelIdc = n[12], t.avgFrameRate = ne(n, 19), t.numOfArrays = n[22], t.vps = [], t.sps = [], t.pps = [];
                        for (var i = 23, o = 0, a = 0, s = 0, u = 0; u < t.numOfArrays; u++) {
                            o = 63 & n[i], a = ne(n, i + 1), i += 3;
                            for (var d, c = [], l = 0; l < a; l++) s = ne(n, i), i += 2, c.push(n.subarray(i, i + s)), i += s;
                            if (32 === o) (d = t.vps).push.apply(d, c); else if (33 === o) {
                                var f;
                                (f = t.sps).push.apply(f, c)
                            } else if (34 === o) {
                                var h;
                                (h = t.pps).push.apply(h, c)
                            }
                        }
                    }))
                }
            }, {
                key: "pasp", value: function (e) {
                    return xe(e, !1, (function (e, t) {
                        e.hSpacing = re(t), e.vSpacing = re(t, 4)
                    }))
                }
            }, {
                key: "mp4a", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        var i = we(t, n);
                        t.esds = e.esds(e.findBox(n.subarray(i), ["esds"], r + i)[0])
                    }))
                }
            }, {
                key: "esds", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        e.codec = "mp4a.";
                        for (var n = 0, r = 0, i = 0, o = 0; t.length;) {
                            for (o = t[n = 0], r = t[n + 1], n += 2; 128 & r;) i = (127 & r) << 7, r = t[n], n += 1;
                            if (i += 127 & r, 3 === o) t = t.subarray(n + 3); else {
                                if (4 !== o) {
                                    if (5 === o) {
                                        var a = e.config = t.subarray(n, n + i), s = (248 & a[0]) >> 3;
                                        return 31 === s && a.length >= 2 && (s = 32 + ((7 & a[0]) << 3) + ((224 & a[1]) >> 5)), e.objectType = s, e.codec += s.toString(16), void ("." === e.codec[e.codec.length - 1] && (e.codec = e.codec.substring(0, e.codec.length - 1)))
                                    }
                                    return void ("." === e.codec[e.codec.length - 1] && (e.codec = e.codec.substring(0, e.codec.length - 1)))
                                }
                                var u;
                                e.codec += q()(u = t[n].toString(16) + ".").call(u, 3, "0"), t = t.subarray(n + 13)
                            }
                        }
                    }))
                }
            }, {
                key: "alaw", value: function (e) {
                    return xe(e, !1, (function (e, t) {
                        we(e, t)
                    }))
                }
            }, {
                key: "stts", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        for (var n = re(t), r = [], i = 4, o = 0; o < n; o++) r.push({
                            count: re(t, i),
                            delta: re(t, i + 4)
                        }), i += 8;
                        e.entryCount = n, e.entries = r
                    }))
                }
            }, {
                key: "ctts", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        var n = re(t), r = [], i = 4;
                        if (1 === e.version) for (var o = 0; o < n; o++) r.push({
                            count: re(t, i),
                            offset: re(t, i + 4)
                        }), i += 8; else for (var a = 0; a < n; a++) r.push({
                            count: re(t, i),
                            offset: -(1 + ~re(t, i + 4))
                        }), i += 8;
                        e.entryCount = n, e.entries = r
                    }))
                }
            }, {
                key: "stsc", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        for (var n = re(t), r = [], i = 4, o = 0; o < n; o++) r.push({
                            firstChunk: re(t, i),
                            samplesPerChunk: re(t, i + 4),
                            sampleDescriptionIndex: re(t, i + 8)
                        }), i += 12;
                        e.entryCount = n, e.entries = r
                    }))
                }
            }, {
                key: "stsz", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        var n = re(t), r = re(t, 4), i = [];
                        if (!n) for (var o = 8, a = 0; a < r; a++) i.push(re(t, o)), o += 4;
                        e.sampleSize = n, e.sampleCount = r, e.entrySizes = i
                    }))
                }
            }, {
                key: "stco", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        for (var n = re(t), r = [], i = 4, o = 0; o < n; o++) r.push(re(t, i)), i += 4;
                        e.entryCount = n, e.entries = r
                    }))
                }
            }, {
                key: "co64", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        for (var n = re(t), r = [], i = 4, o = 0; o < n; o++) r.push(ie(t, i)), i += 8;
                        e.entryCount = n, e.entries = r
                    }))
                }
            }, {
                key: "stss", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        for (var n = re(t), r = [], i = 4, o = 0; o < n; o++) r.push(re(t, i)), i += 4;
                        e.entryCount = n, e.entries = r
                    }))
                }
            }, {
                key: "moof", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        var i;
                        t.mfhd = e.mfhd(e.findBox(n, ["mfhd"], r)[0]), t.traf = X()(i = e.findBox(n, ["traf"], r)).call(i, (function (t) {
                            return e.traf(t)
                        }))
                    }))
                }
            }, {
                key: "mfhd", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        e.sequenceNumber = re(t)
                    }))
                }
            }, {
                key: "traf", value: function (t) {
                    return xe(t, !1, (function (t, n, r) {
                        t.tfhd = e.tfhd(e.findBox(n, ["tfhd"], r)[0]), t.tfdt = e.tfdt(e.findBox(n, ["tfdt"], r)[0]), t.trun = e.trun(e.findBox(n, ["trun"], r)[0])
                    }))
                }
            }, {
                key: "trun", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        var n = e.version, r = U()(e), i = t.length, o = e.sampleCount = re(t), a = 4;
                        if (i > a && 1 & r && (e.dataOffset = -(1 + ~re(t, a)), a += 4), i > a && 4 & r && (e.firstSampleFlags = re(t, a), a += 4), e.samples = [], i > a) for (var s, u = 0; u < o; u++) s = {}, 256 & r && (s.duration = re(t, a), a += 4), 512 & r && (s.size = re(t, a), a += 4), 1024 & r && (s.flags = re(t, a), a += 4), 2048 & r && (s.cts = n ? -(1 + ~re(t, a + 4)) : re(t, a), a += 4), e.samples.push(s)
                    }))
                }
            }, {
                key: "tfdt", value: function (e) {
                    return xe(e, !0, (function (e, t) {
                        1 === e.version ? e.baseMediaDecodeTime = ie(t) : e.baseMediaDecodeTime = re(t)
                    }))
                }
            }, {
                key: "probe", value: function (t) {
                    return !!e.findBox(t, ["ftyp"])
                }
            }, {
                key: "parseSampleFlags", value: function (e) {
                    return {
                        isLeading: (12 & e[0]) >>> 2,
                        dependsOn: 3 & e[0],
                        isDependedOn: (192 & e[1]) >>> 6,
                        hasRedundancy: (48 & e[1]) >>> 4,
                        paddingValue: (14 & e[1]) >>> 1,
                        isNonSyncSample: 1 & e[1],
                        degradationPriority: e[2] << 8 | e[3]
                    }
                }
            }, {
                key: "moovToTrack", value: function (e, t, n) {
                    var r, i, o = e.trak;
                    if (o && o.length) {
                        var a = W()(o).call(o, (function (e) {
                            var t, n;
                            return "vide" === (null === (t = e.mdia) || void 0 === t || null === (n = t.hdlr) || void 0 === n ? void 0 : n.handlerType)
                        })), s = W()(o).call(o, (function (e) {
                            var t, n;
                            return "soun" === (null === (t = e.mdia) || void 0 === t || null === (n = t.hdlr) || void 0 === n ? void 0 : n.handlerType)
                        }));
                        if (a && t) {
                            var u, d, c, l, f, h, v, p = t,
                                g = null === (u = a.tkhd) || void 0 === u ? void 0 : u.trackId;
                            null != g && (p.id = a.tkhd.trackId), p.tkhdDuration = a.tkhd.duration, p.mvhdDurtion = e.mvhd.duration, p.mvhdTimecale = e.mvhd.timescale, p.timescale = p.formatTimescale = a.mdia.mdhd.timescale, p.duration = a.mdia.mdhd.duration || p.mvhdDurtion / p.mvhdTimecale * p.timescale;
                            var _, y, m, b, w, x, S, T, P = H()(a.mdia.minf.stbl.stsd)[0];
                            if (p.width = P.width, p.height = P.height, P.pasp && (p.sarRatio = [P.pasp.hSpacing, P.pasp.vSpacing]), P.hvcC) p.codecType = Q._e.HEVC, p.codec = P.hvcC.codec, p.vps = P.hvcC.vps, p.sps = P.hvcC.sps, p.pps = P.hvcC.pps, p.hvcC = P.hvcC.data; else {
                                if (!P.avcC) throw new Error("unknown video stsd entry");
                                p.codec = P.avcC.codec, p.sps = P.avcC.sps, p.pps = P.avcC.pps
                            }
                            if (p.present = !0, p.ext = {}, p.ext.stss = null === (d = a.mdia) || void 0 === d || null === (c = d.minf) || void 0 === c || null === (l = c.stbl) || void 0 === l ? void 0 : l.stss, p.ext.ctts = null === (f = a.mdia) || void 0 === f || null === (h = f.minf) || void 0 === h || null === (v = h.stbl) || void 0 === v ? void 0 : v.ctts, P && "encv" === P.type) p.isVideoEncryption = !0, P.default_KID = null === (_ = P.sinf) || void 0 === _ || null === (y = _.schi) || void 0 === y ? void 0 : y.tenc.default_KID, P.default_IsEncrypted = null === (m = P.sinf) || void 0 === m || null === (b = m.schi) || void 0 === b ? void 0 : b.tenc.default_IsEncrypted, P.default_IV_size = null === (w = P.sinf) || void 0 === w || null === (x = w.schi) || void 0 === x ? void 0 : x.tenc.default_IV_size, p.videoSenc = a.mdia.minf.stbl.senc && a.mdia.minf.stbl.senc.samples, P.data_format = null === (S = P.sinf) || void 0 === S || null === (T = S.frma) || void 0 === T ? void 0 : T.data_format, p.useEME = e.useEME, p.kidValue = e.kidValue, p.pssh = e.pssh, p.encv = P
                        }
                        if (s && n) {
                            var j, k, E, I, L, C, R, A, D, Z = n,
                                M = null === (j = s.tkhd) || void 0 === j ? void 0 : j.trackId;
                            null != M && (Z.id = s.tkhd.trackId), Z.tkhdDuration = s.tkhd.duration, Z.mvhdDurtion = e.mvhd.duration, Z.mvhdTimecale = e.mvhd.timescale, Z.timescale = Z.formatTimescale = s.mdia.mdhd.timescale, Z.duration = s.mdia.mdhd.duration || Z.mvhdDurtion / Z.mvhdTimecale * Z.timescale;
                            var O, N, F, U, B, X, K, z, q = H()(s.mdia.minf.stbl.stsd)[0];
                            switch (Z.sampleSize = q.sampleSize, Z.sampleRate = q.sampleRate, Z.channelCount = q.channelCount, Z.present = !0, q.type) {
                                case"alaw":
                                    Z.codecType = Z.codec = Q.yQ.G711PCMA, Z.sampleRate = 8e3;
                                    break;
                                case"ulaw":
                                    Z.codecType = Z.codec = Q.yQ.G711PCMU, Z.sampleRate = 8e3;
                                    break;
                                default:
                                    Z.sampleDuration = pe.getFrameDuration(Z.sampleRate, Z.timescale), Z.sampleRateIndex = pe.getRateIndexByRate(Z.sampleRate), Z.objectType = (null === (r = q.esds) || void 0 === r ? void 0 : r.objectType) || 2, q.esds && (Z.config = Y()(q.esds.config)), Z.codec = (null === (i = q.esds) || void 0 === i ? void 0 : i.codec) || "mp4a.40.2"
                            }
                            if (Z.sampleDuration = pe.getFrameDuration(Z.sampleRate, Z.timescale), Z.objectType = (null === (k = q.esds) || void 0 === k ? void 0 : k.objectType) || 2, q.esds && (q.esds.config ? Z.config = Y()(q.esds.config) : console.warn("esds config is null")), Z.codec = (null === (E = q.esds) || void 0 === E ? void 0 : E.codec) || "mp4a.40.2", Z.sampleRateIndex = pe.getRateIndexByRate(Z.sampleRate), Z.ext = {}, Z.ext.stss = null === (I = s.mdia) || void 0 === I || null === (L = I.minf) || void 0 === L || null === (C = L.stbl) || void 0 === C ? void 0 : C.stss, Z.ext.ctts = null === (R = s.mdia) || void 0 === R || null === (A = R.minf) || void 0 === A || null === (D = A.stbl) || void 0 === D ? void 0 : D.ctts, Z.present = !0, q && "enca" === q.type) Z.isAudioEncryption = !0, q.data_format = null === (O = q.sinf) || void 0 === O || null === (N = O.frma) || void 0 === N ? void 0 : N.data_format, q.default_KID = null === (F = q.sinf) || void 0 === F || null === (U = F.schi) || void 0 === U ? void 0 : U.tenc.default_KID, q.default_IsEncrypted = null === (B = q.sinf) || void 0 === B || null === (X = B.schi) || void 0 === X ? void 0 : X.tenc.default_IsEncrypted, q.default_IV_size = null === (K = q.sinf) || void 0 === K || null === (z = K.schi) || void 0 === z ? void 0 : z.tenc.default_IV_size, Z.audioSenc = s.mdia.minf.stbl.senc && s.mdia.minf.stbl.senc.samples, Z.useEME = e.useEME, Z.kidValue = e.kidValue, Z.enca = q
                        }
                        if (n && (n.isVideoEncryption = !!t && t.isVideoEncryption), t && (t.isAudioEncryption = !!n && n.isAudioEncryption), null != t && t.encv || null != n && n.enca) {
                            var V, G, $ = null == t || null === (V = t.encv) || void 0 === V ? void 0 : V.default_KID,
                                J = null == n || null === (G = n.enca) || void 0 === G ? void 0 : G.default_KID,
                                ee = $ || J ? ($ || J).join("") : null;
                            t && (t.kid = ee), n && (n.kid = ee)
                        }
                        return t && (t.flags = 3841), n && (n.flags = 1793), {videoTrack: t, audioTrack: n}
                    }
                }
            }, {
                key: "evaluateDefaultDuration", value: function (e, t, n) {
                    var r, i = null == t || null === (r = t.samples) || void 0 === r ? void 0 : r.length;
                    return i ? 1024 * i / t.timescale * e.timescale / n : 1024
                }
            }, {
                key: "moofToSamples", value: function (t, n, r) {
                    var i = {};
                    return t.mfhd && (n && (n.sequenceNumber = t.mfhd.sequenceNumber), r && (r.sequenceNumber = t.mfhd.sequenceNumber)), t.traf.forEach((function (t) {
                        var o = t.tfhd, a = t.tfdt, s = t.trun;
                        if (o && s) {
                            a && (n && n.id === o.trackId && (n.baseMediaDecodeTime = a.baseMediaDecodeTime), r && r.id === o.trackId && (r.baseMediaDecodeTime = a.baseMediaDecodeTime));
                            var u = o.defaultSampleSize || 0,
                                d = o.defaultSampleDuration || e.evaluateDefaultDuration(n, r, s.samples.length || s.sampleCount),
                                c = s.dataOffset || 0, l = 0, f = -1;
                            if (!s.samples.length && s.sampleCount) {
                                i[o.trackId] = [];
                                for (var h = 0; h < s.sampleCount; h++) i[o.trackId].push({
                                    offset: c,
                                    dts: l,
                                    duration: d,
                                    size: u
                                }), l += d, c += u
                            } else {
                                var v;
                                i[o.trackId] = X()(v = s.samples).call(v, (function (e, t) {
                                    return (e = {
                                        offset: c,
                                        dts: l,
                                        pts: l + (e.cts || 0),
                                        duration: e.duration || d,
                                        size: e.size || u,
                                        gopId: f,
                                        keyframe: 0 === t || null !== U()(e) && void 0 !== U()(e) && (65536 & U()(e)) >>> 0 != 65536
                                    }).keyframe && (f++, e.gopId = f), l += e.duration, c += e.size, e
                                }))
                            }
                        }
                    })), i
                }
            }, {
                key: "moovToSamples", value: function (e) {
                    var t = e.trak;
                    if (t && t.length) {
                        var n = W()(t).call(t, (function (e) {
                            var t, n;
                            return "vide" === (null === (t = e.mdia) || void 0 === t || null === (n = t.hdlr) || void 0 === n ? void 0 : n.handlerType)
                        })), r = W()(t).call(t, (function (e) {
                            var t, n;
                            return "soun" === (null === (t = e.mdia) || void 0 === t || null === (n = t.hdlr) || void 0 === n ? void 0 : n.handlerType)
                        }));
                        if (n || r) {
                            var i, o;
                            if (n) {
                                var a, s,
                                    u = null === (a = n.mdia) || void 0 === a || null === (s = a.minf) || void 0 === s ? void 0 : s.stbl;
                                if (!u) return;
                                var d = u.stts, c = u.stsc, l = u.stsz, f = u.stco, h = u.stss, v = u.ctts;
                                if (!(d && c && l && f && h)) return;
                                i = me(d, c, l, f, v, h)
                            }
                            if (r) {
                                var p, g, _,
                                    y = null === (p = r.mdia) || void 0 === p || null === (g = p.minf) || void 0 === g ? void 0 : g.stbl;
                                if (!y) return;
                                var m = null === (_ = r.mdia.mdhd) || void 0 === _ ? void 0 : _.timescale, b = y.stts,
                                    w = y.stsc, x = y.stsz, S = y.stco;
                                if (!(m && b && w && x && S)) return;
                                o = me(b, w, x, S)
                            }
                            return {videoSamples: i, audioSamples: o}
                        }
                    }
                }
            }]), e
        }();

        function me(e, t, n, r, i, o) {
            var a, s, u, d = [], c = null == i ? void 0 : H()(i), l = H()(t), f = H()(r), h = n.entrySizes,
                v = null == o ? void 0 : H()(o);
            v && (a = {}, v.forEach((function (e) {
                a[e - 1] = !0
            }))), c && (s = [], c.forEach((function (e) {
                for (var t = e.count, n = e.offset, r = 0; r < t; r++) s.push(n)
            })));
            var p = -1, g = 0, _ = 0, y = 0, m = 0, b = 0, w = l[0].samplesPerChunk,
                x = l[1] ? l[1].firstChunk - 1 : 1 / 0;
            return H()(e).forEach((function (e) {
                for (var t = e.count, r = e.delta, i = 0; i < t; i++) u = {
                    dts: g,
                    duration: r,
                    size: h[_] || n.sampleSize,
                    offset: f[y] + b,
                    index: _
                }, v && (u.keyframe = a[_], u.keyframe && p++, u.gopId = p), s && _ < s.length && (u.pts = u.dts + s[_]), d.push(u), g += r, ++_ < w ? b += u.size : (y++, b = 0, y >= x && (m++, x = l[m + 1] ? l[m + 1].firstChunk - 1 : 1 / 0), w += l[m].samplesPerChunk)
            })), d
        }

        function be(e, t) {
            return e.dataReferenceIndex = ne(t, 6), e.width = ne(t, 24), e.height = ne(t, 26), e.horizresolution = re(t, 28), e.vertresolution = re(t, 32), e.frameCount = ne(t, 40), e.depth = ne(t, 74), 78
        }

        function we(e, t) {
            return e.dataReferenceIndex = ne(t, 6), e.channelCount = ne(t, 16), e.sampleSize = ne(t, 18), e.sampleRate = re(t, 24) / 65536, 28
        }

        function xe(e, t, n) {
            if (e) {
                if (e.size !== e.data.length) throw new Error("box ".concat(e.type, " size !== data.length"));
                var r = {start: e.start, size: e.size, headerSize: e.headerSize, type: e.type};
                return t && (r.version = e.data[e.headerSize], r.flags = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return (e[t] << 16) + (e[t + 1] << 8) + (e[t + 2] || 0)
                }(e.data, e.headerSize + 1), r.headerSize += 4), n(r, e.data.subarray(r.headerSize), r.start + r.headerSize), r
            }
        }

        var Se = function (e, t, n) {
                for (var r = String(n), i = t >> 0, o = Math.ceil(i / r.length), a = [], s = String(e); o--;) a.push(r);
                return a.join("").substring(0, i - s.length) + s
            }, Te = function () {
                for (var e = [], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n.forEach((function (t) {
                    e.push(Se(Number(t).toString(16), 2, 0))
                })), e[0]
            }, Pe = n(26732), je = function (e) {
                return e && e.Math == Math && e
            },
            ke = je("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || je("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || je("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || je("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function Ee(e, t, n, r) {
            return e[t] ? r ? r(e[t]) : e[t] : n
        }

        ke.globalThis = ke, ke.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Ie = function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 ? arguments[2] : void 0;
                (0, j.PA)(this, e), E()(this), this.url = t, this.options = n, this.dash = r, this.mediaList = {
                    video: [],
                    audio: []
                }, this.retryMax = 10, this.retry = 0, this.type = "live", this.isEnd = !1, this.duration = 0, this.videoCodecType = null, this.videoCodecs = null, this.hasSync = !1
            }

            var t;
            return (0, j.qH)(e, [{
                key: "calcVideoCodeType", value: function (e, t) {
                    if ((e || t) && !this.videoCodecType) {
                        var n = null;
                        t ? n = t.split(".")[0] : e && (n = e.split(".")[0]);
                        for (var r = s()(N.$), i = 0; i < r.length; i++) {
                            var o, a = r[i], u = N.$[a], c = d()(o = u.types).call(o, u.visualEntryBox);
                            if (l()(c).call(c, n) > -1) {
                                this.videoCodecType = a, this.videoCodecs = u.codecs;
                                break
                            }
                        }
                        O.ZP.log("mpd dataType:", e, "codecs:", t, "cal type:", this.videoCodecType, "videoCodecs", this.videoCodecs), this.videoCodecType || (this.videoCodecType = N.d.AVC, this.videoCodecs = N.$[N.d.AVC].codecs, console.warn("calcVideoCodeType default")), this.dash && this.dash._pluginInst && this.dash._pluginInst.setCodeInfo(this.videoCodecType)
                    }
                }
            }, {
                key: "fetch", value: (t = (0, j.x)((0, j.l5)().mark((function t(n) {
                    var r, i, o, a, s, u, d, c, l, f;
                    return (0, j.l5)().wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return r = this, i = {
                                    TYPE: "LIVE",
                                    ENDLIST: ""
                                }, o = [], t.prev = 3, a = new Pe.mf({}), t.next = 7, a.load(n);
                            case 7:
                                if (s = t.sent, !(u = s.data)) {
                                    t.next = 21;
                                    break
                                }
                                if (d = e.parseMPD(u)) {
                                    t.next = 13;
                                    break
                                }
                                throw new Error("parse mpd error");
                            case 13:
                                return this._parseMeta(i, d), this._parseSegments(d, n), ["video", "audio"].forEach((function (e) {
                                    var t;
                                    r.mediaList[e].length > 0 && (r.mediaList[e].selectedIdx = "video" === e && r.dash.selectedIdx || 0, h()(t = r.mediaList[e]).call(t, (function (t, n) {
                                        return "video" === e ? n.height - t.height : n.bandwidth - t.bandwidth
                                    })))
                                })), 0 === r.mediaList.video.length && 0 === r.mediaList.audio.length && setTimeout((function () {
                                    r.dash.player && r.dash.player.emit("NO_MEDIALIST", {dynamic_type: "segment_template"})
                                })), t.abrupt("return", {meta: i, segments: o});
                            case 21:
                                throw r.dash.emit("error", new L.Z(L.Z.PARSE, L.Z.MPD_PARSE_ERROR, {
                                    line: 253,
                                    handle: "[MPD] parse",
                                    msg: "mpd segment template Parse error",
                                    url: n
                                }, r.dash.player)), new Error(L.Z.MPD_PARSE_ERROR);
                            case 23:
                                t.next = 30;
                                break;
                            case 25:
                                throw t.prev = 25, t.t0 = t.catch(3), f = 403 === (null === (c = t.t0.response) || void 0 === c ? void 0 : c.status) ? C.uD : "mpd Request error", r.dash.emit("error", new L.Z(L.Z.PD_NETWORK, L.Z.NETEORK_ERROR_CODES[(null === (l = t.t0.response) || void 0 === l ? void 0 : l.status) || "timeout"], {
                                    line: 258,
                                    handle: "[MPD] xhr",
                                    msg: f,
                                    url: n
                                }, r.dash.player)), new Error(L.Z.PD_NETWORK);
                            case 30:
                            case"end":
                                return t.stop()
                        }
                    }), t, this, [[3, 25]])
                }))), function (e) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "_parseMeta", value: function (e, t) {
                    "static" === t.type && (e.TYPE = "VOD"), t.minBufferTime && (e.minBufferTime = I.Z.durationConvert(t.minBufferTime)), t.maxSegmentDuration && (e.maxSegmentDuration = I.Z.durationConvert(t.maxSegmentDuration)), t.mediaPresentationDuration && (this.duration = I.Z.durationConvert(t.mediaPresentationDuration));
                    var n = t.Period[0];
                    !this.duration && n && n.duration && (this.duration = I.Z.durationConvert(n.duration)), e.duration = this.duration
                }
            }, {
                key: "_parseST", value: function (e, t, n, r, i) {
                    for (var o = p()(e.timescale), a = p()(e.duration), s = Math.round(a / o), u = _()(e.startNumber, 10), d = u + Math.ceil(this.duration / s) - 1, c = u; c <= d; c++) {
                        var l = s * (c - u), f = s * (c - u + 1);
                        c === d && (s = this.duration - s * (d - u), f = this.duration), t.push({
                            idx: c,
                            start: Math.round(l),
                            end: Math.round(f),
                            url: r + e.media.replace("$RepresentationID$", n).replace("$Number%04d$", I.Z.preFixInterge(c, 4)),
                            downloaded: 0,
                            segmentDuration: s,
                            height: i
                        })
                    }
                }
            }, {
                key: "_getVideoSegments", value: function (e) {
                    var t, n, r = e.bandwidth, i = e.id, o = e.baseURL, a = e.initSegment, s = e.mediaSegments,
                        u = e.mimeType, d = e.codecs, c = e.width, l = e.height, f = e.frameRate, h = e.sar,
                        v = e.startWithSAP, p = e.timescale, g = e.duration, _ = e.encrypted;
                    if (this.options.dynamic_video && this.options.dynamic_video.dynamic_video_list) for (var y = 0; y < this.options.dynamic_video.dynamic_video_list.length; y++) {
                        var m = this.options.dynamic_video.dynamic_video_list[y];
                        m.bitrate === r && (t = m.size, n = m.definition)
                    }
                    this.mediaList.video.push({
                        id: i,
                        baseURL: o,
                        initSegment: o + a.replace("$RepresentationID$", i),
                        inited: !1,
                        mediaSegments: s,
                        mimeType: u,
                        codecs: d,
                        width: c,
                        height: l,
                        size: t,
                        frameRate: f,
                        sar: h,
                        startWithSAP: v,
                        bandwidth: r,
                        timescale: p,
                        duration: g,
                        encrypted: _,
                        definition: n
                    })
                }
            }, {
                key: "_getAudioSegments", value: function (e) {
                    var t, n = e.bandwidth, r = e.id, i = e.baseURL, o = e.initSegment, a = e.mediaSegments,
                        s = e.mimeType, u = e.codecs, d = e.startWithSAP, c = e.timescale, l = e.duration,
                        f = e.encrypted;
                    if (this.options.dynamic_video && this.options.dynamic_video.dynamic_audio_list) for (var h = 0; h < this.options.dynamic_video.dynamic_audio_list.length; h++) this.options.dynamic_video.dynamic_audio_list[h].bitrate === n && (t = this.options.dynamic_video.dynamic_audio_list[h].size);
                    this.mediaList.audio.push({
                        id: r,
                        baseURL: i,
                        initSegment: i + o.replace("$RepresentationID$", r),
                        inited: !1,
                        mediaSegments: a,
                        mimeType: s,
                        codecs: u,
                        startWithSAP: d,
                        bandwidth: n,
                        size: t,
                        timescale: c,
                        duration: l,
                        encrypted: f
                    })
                }
            }, {
                key: "_parseSegments", value: function (e, t) {
                    var n = this, r = [], i = "";
                    e.BaseURL && (i = e.BaseURL[0]);
                    var o = e.Period[0];
                    o.AdaptationSet && o.AdaptationSet.length > 1 && o.AdaptationSet.forEach((function (e) {
                        var o = "video/mp4", a = "avc1.64001E", s = "640", u = "360", d = "25", c = "1:1", f = "1",
                            h = "588633";
                        e.mimeType && ("video/mp4" === (o = e.mimeType) ? (a = e.codecs, s = p()(e.width), u = p()(e.height), d = p()(e.frameRate), c = e.sar, f = e.startWithSAP, h = p()(e.bandwidth), n.calcVideoCodeType(null, a)) : "audio/mp4" === o && (a = e.codecs, f = e.startWithSAP, h = p()(e.bandwidth))), e.Representation.forEach((function (v) {
                            l()(r).call(r, v.id) > -1 && (v.id = (_()(r[r.length - 1], 10) + 1).toString()), r.push(v.id);
                            var g, y = "", b = [], x = 0, S = m()(t).call(t, 0, w()(t).call(t, "/") + 1) + i;
                            "video/mp4" === (o = Ee(v, "mimeType", o)) ? (v.codecs && (a = v.codecs, n.calcVideoCodeType(null, a)), s = Ee(v, "width", s, p()), u = Ee(v, "height", u, p()), d = Ee(v, "frameRate", d, p()), c = Ee(v, "sar", c)) : "audio/mp4" === o && (a = Ee(v, "codecs", a)), f = Ee(v, "startWithSAP", f), h = Ee(v, "bandwidth", h, p()), v.BaseURL && v.BaseURL.length > 0 && (S += v.BaseURL[0]), e.SegmentTemplate && e.SegmentTemplate.length > 0 && (g = e.SegmentTemplate[0]), v.SegmentTemplate && v.SegmentTemplate.length > 0 && (g = v.SegmentTemplate[0]);
                            var T = !1;
                            (e.ContentProtection || v.ContentProtection) && (T = !0), g && (y = g.initialization, x = p()(g.duration), n._parseST(g, b, v.id, S, u)), h = _()(h), "video/mp4" === o ? n._getVideoSegments({
                                id: v.id,
                                bandwidth: h,
                                baseURL: S,
                                initSegment: y,
                                mediaSegments: b,
                                mimeType: o,
                                codecs: a,
                                width: s,
                                height: u,
                                frameRate: d,
                                sar: c,
                                startWithSAP: f,
                                timescale: 0,
                                duration: x,
                                encrypted: T
                            }) : "audio/mp4" === o && n._getAudioSegments({
                                id: v.id,
                                baseURL: S,
                                bandwidth: h,
                                initSegment: y,
                                mediaSegments: b,
                                mimeType: o,
                                codecs: a,
                                startWithSAP: f,
                                timescale: 0,
                                duration: x,
                                encrypted: T
                            })
                        }))
                    }))
                }
            }, {
                key: "init", value: function (e) {
                    var t = this, n = t.options;
                    if (n.dynamic_video.dynamic_type && "segment_template" !== n.dynamic_video.dynamic_type) {
                        t.dashType = "segment_base";
                        var r = 0;
                        n.duration;
                        var i = n.dynamic_video;
                        ["dynamic_video_list", "dynamic_audio_list"].forEach((function (e) {
                            var o = "dynamic_audio_list" === e;
                            i[e].forEach((function (i) {
                                var a, s = _()(i.init_range.split("-")[0], 10), u = _()(i.init_range.split("-")[1], 10),
                                    d = _()(i.index_range.split("-")[0], 10), c = _()(i.index_range.split("-")[1], 10);
                                o || t.calcVideoCodeType(i.codec_type), t.mediaList["dynamic_audio_list" === e ? "audio" : "video"].push({
                                    id: ("dynamic_audio_list" === e ? 0 : r++).toString(),
                                    baseURL: i.main_url,
                                    initSegment: i.main_url,
                                    initSegmentRange: [s, u],
                                    sidxRange: [d, c],
                                    inited: !1,
                                    hasSidx: !1,
                                    mediaSegments: [],
                                    mimeType: o ? "audio/mp4" : "video/mp4",
                                    codecs: o ? "mp4a.40.2" : i.codec_type && l()(a = i.codec_type).call(a, "h265") > -1 ? "hev1.1.6.L93.B0" : t.videoCodecs,
                                    width: i.vwidth,
                                    height: i.vheight,
                                    bandwidth: _()(i.bitrate),
                                    size: i.size,
                                    timescale: -1,
                                    duration: n.duration,
                                    encrypted: i.encrypt,
                                    kid: i.kid,
                                    definition: i.definition,
                                    sidxRes: void 0
                                })
                            }))
                        })), t.type = "vod", ["video", "audio"].forEach((function (e) {
                            var n;
                            t.mediaList[e].length > 0 && (t.mediaList[e].selectedIdx = "video" === e && t.dash.selectedIdx || 0, "video" === e && h()(n = t.mediaList[e]).call(n, (function (t, n) {
                                return "video" === e ? n.height - t.height : n.bandwidth - t.bandwidth
                            })))
                        })), 0 === t.mediaList.video.length && 0 === t.mediaList.audio.length && t.dash && t.dash.player && setTimeout((function () {
                            t.dash.player.emit("NO_MEDIALIST", {dynamic_type: "segment_base"})
                        })), t.emit("ready")
                    } else t.dashType = "segment_template", t.fetch(n.dynamic_video.main_url).then((function (e) {
                        t.type = e.meta.TYPE.toLocaleLowerCase(), t.emit("ready")
                    }), (function () {
                        ["video", "audio"].forEach((function (e) {
                            t.mediaList[e] = []
                        })), t.retry++, t.retry, t.retryMax
                    }))
                }
            }, {
                key: "getSidx", value: function (e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 ? arguments[3] : void 0, o = this, a = o.mediaList[n][r],
                        s = a.sidxRange[1];
                    try {
                        var u = e instanceof ArrayBuffer ? e : e.buffer, d = new Uint8Array(u),
                            c = String.fromCharCode.apply(null, d.subarray(4, 8));
                        if ("sidx" !== c) throw O.ZP.log("mpd sdix parse err"), new Error;
                        var l = (t = ye.sidx(ye.findBox(new Uint8Array(u), [])[0])).timescale, f = [], h = 0, v = 0,
                            p = s + 1, g = p - 1;
                        t.references.forEach((function (e, t) {
                            v += e.subsegment_duration, g += e.referenced_size, f.push({
                                idx: t + 1,
                                url: a.initSegment,
                                start: Math.round(h / l),
                                end: Math.round(v / l),
                                startRaw: h / l,
                                endRaw: v / l,
                                range: [p, g],
                                downloaded: 0,
                                segmentDuration: Math.round(e.subsegment_duration / l),
                                reference_type: e.reference_type,
                                starts_with_SAP: e.starts_with_SAP,
                                SAP_type: e.SAP_type,
                                SAP_delta_time: e.SAP_delta_time
                            }), h = v + 1, p = g + 1
                        })), f[0].startTime_ = 0, a.mediaDuration = 0, f.forEach((function (e, t) {
                            a.mediaDuration += e.segmentDuration, t > 0 && (e.startTime_ = f[t - 1].startTime_ + f[t - 1].segmentDuration), t === f.length - 1 && i && (e.end = i)
                        })), a.hasSidx = !0, a.mediaSegments = f, a.timescale = l, a.sidxRes = e
                    } catch (e) {
                        throw new L.Z(L.Z.PARSE, L.Z.SID_PARSE_ERROR, {
                            line: 398,
                            handle: "[MPD] getSidx",
                            msg: "mpd segment base Parse getSidx error"
                        }, o.dash.player)
                    }
                }
            }, {
                key: "checkInBuffered", value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                        i = arguments.length > 4 ? arguments[4] : void 0,
                        o = arguments.length > 5 ? arguments[5] : void 0;
                    if (0 === e.length) return !1;
                    var a = this._inBufferd(t, i, e, r), s = this._inBufferd(n, o, e, r);
                    return !(!a.in || !s.in || a.index !== s.index)
                }
            }, {
                key: "_inBufferd", value: function (e, t, n, r) {
                    for (var i = 0; i < n.length; i++) {
                        var o = I.Z.round(n[i].start), a = I.Z.round(n[i].end);
                        if (o <= e && e <= a) return {index: i, in: !0};
                        if (o <= t && t <= a) return {index: i, in: !0}
                    }
                    return {in: !1}
                }
            }, {
                key: "_doSyncAV", value: function () {
                    var e = this.mediaList;
                    if (!this.hasSync) {
                        var t = !1;
                        if (e.video.length < 1 && (t = !0), e.audio.length < 1 && (t = !0), !t) {
                            var n = this.mediaList.video[this.mediaList.video.selectedIdx].mediaSegments,
                                r = this.mediaList.audio[this.mediaList.audio.selectedIdx].mediaSegments,
                                i = Math.min(n.length, r.length);
                            if (i > 0) {
                                var o = r[i - 1], a = n[i - 1];
                                o && (o.incomplete = !0), a && (a.incomplete = !0)
                            }
                        }
                        this.hasSync = !0
                    }
                }
            }, {
                key: "syncAV", value: function () {
                    this.hasSync = !1
                }
            }, {
                key: "_getBuffered", value: function (e) {
                    var t, n, r, i, o, a = this.dash.mse;
                    if (!a) return [];
                    "[object Function]" === Object.prototype.toString.call(a.buffered) ? t = this.dash.mse.buffered(e) : t = "video" === e ? null === (n = a.timeline) || void 0 === n || null === (r = n.videoRender) || void 0 === r ? void 0 : r.buffered : null === (i = a.timeline) || void 0 === i || null === (o = i.audioRender) || void 0 === o ? void 0 : o.buffered;
                    if (!t || 0 === t.length) return [];
                    for (var s = [], u = 0; u < t.length; u++) s.push({start: t.start(u), end: t.end(u)});
                    return s
                }
            }, {
                key: "seek", value: function (e, t) {
                    var n = this, r = this;
                    this._doSyncAV();
                    var i = {};
                    return new (P())((function (o, a) {
                        "vod" === n.type || void 0 !== e ? (["video", "audio"].forEach((function (n) {
                            if (r.mediaList[n].length < 1) return !0;
                            var o = r._getBuffered(n), a = r.mediaList[n][r.mediaList[n].selectedIdx].mediaSegments;
                            O.ZP.log("seek", n, "idx", r.mediaList[n].selectedIdx), i[n] = S()(a).call(a, (function (i, a) {
                                if (i.downloaded === C.Kc.APPEND) {
                                    if (r.checkInBuffered(o, i.start, i.end, 0, i.startRaw, i.endRaw)) return !1;
                                    var s, u, c;
                                    if (i.incomplete) return !1;
                                    O.ZP.log(d()(s = d()(u = d()(c = "".concat(n, " ")).call(c, a, " start:")).call(u, i.start, " end:")).call(s, i.end, " segment downloaded set false")), i.downloaded = C.Kc.NO_START
                                }
                                var l = i.start <= e && e <= i.end;
                                if (i.downloaded === C.Kc.NO_START) {
                                    if (l) return !0;
                                    if (t > 0 && i.start >= t && i.end <= e) return !r.checkInBuffered(o, i.start, i.end, 0, i.startRaw, i.endRaw)
                                }
                                return !1
                            }))
                        })), o(i)) : a("media error2")
                    }))
                }
            }, {
                key: "clearBuffer", value: function (e, t, n) {
                    var r = this, i = n ? [n] : ["video", "audio"];
                    "vod" === r.type && i.forEach((function (n) {
                        if (r.mediaList[n].length > 0) {
                            var i, o, a, s, u = r.mediaList[n][r.mediaList[n].selectedIdx], c = [];
                            u.mediaSegments.forEach((function (n, r) {
                                n.end < e || n.start > t || (n.downloaded = C.Kc.NO_START, c.push(r))
                            }));
                            var l = c.length > 0 ? c[0] : void 0, f = c.length > 1 ? c[c.length - 1] : l;
                            O.ZP.log(d()(i = d()(o = d()(a = d()(s = "".concat(n, " start:")).call(s, e, " end:")).call(a, t, ", startId:")).call(o, l, " , endId:")).call(i, f, ", segment downloaded set false"))
                        }
                    }))
                }
            }], [{
                key: "parseMPD", value: function (e) {
                    var t;
                    if ("string" == typeof e && (t = e), e instanceof ArrayBuffer) {
                        var n = new Uint8Array(e);
                        t = String.fromCharCode.apply(null, n)
                    }
                    if (!t) return null;
                    var r = performance.now();
                    return t = t.replace(/<(\/)?(\w+:)+(\w+)/g, "<$1$3"), O.ZP.log("MPD cost", performance.now() - r), M.parse(t)
                }
            }]), e
        }()
    }, 89093: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return S
            }
        });
        var r = n(19623),
            i = (n(18264), n(41539), n(74916), n(23123), n(66992), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(90149)),
            o = n.n(i), a = n(77766), s = n.n(a), u = n(59340), d = n.n(u), c = n(32366), l = n.n(c), f = n(84825),
            h = (n(92222), n(4217)), v = n(33125), p = n(26732), g = n(84930), _ = n(38354), y = n(57073),
            m = function (e) {
                return e && e.Math == Math && e
            },
            b = m("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || m("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || m("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || m("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function w(e) {
            if (window.Headers && e instanceof Headers) {
                var t, n = {}, r = (0, f.sf)(e);
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        var i = t.value;
                        n[i[0]] = i[1]
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return n
            }
            return e
        }

        b.globalThis = b, b.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var x = 0, S = function () {
            function e(t, n) {
                var r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                (0, f.PA)(this, e), this._config = (0, f.Zj)({responseType: "arraybuffer"}, t), this._loaderCount = this._config.loaderCount || 1, this._loaderType = this._config.loaderType || h.t.FETCH, this._preloadManager = n, t.openLog && v.Y.enable(), this._videoLoaders = [], this._audioLoaders = [], this._videoIdx = 0, this._audioIdx = 0;
                for (var o = 0; o < this._loaderCount; o++) {
                    var a = new v.Y(i + "VideoLoader_" + o, this._config.vid),
                        s = new v.Y(i + "AudioLoader_" + o, this._config.vid),
                        u = new p.mf((0, f.Zj)((0, f.Zj)({}, this._config), {}, {
                            logger: a,
                            loaderType: this._loaderType
                        })), d = new p.mf((0, f.Zj)((0, f.Zj)({}, this._config), {}, {
                            logger: s,
                            loaderType: this._loaderType
                        }));
                    this._videoLoaders.push(u), this._audioLoaders.push(d), u.on(g.K.REAL_TIME_SPEED, (function (e) {
                        x = e.speed, r._cacheSpeed(e.speed)
                    })), d.on(g.K.REAL_TIME_SPEED, (function (e) {
                        x = e.speed, r._cacheSpeed(e.speed)
                    }))
                }
                this._isSupportUrlRange = "fetch" === this._loaderType
            }

            var t, n, r;
            return (0, f.qH)(e, [{
                key: "isSupportedProgress", value: function () {
                    return 1 === this._loaderCount && "fetch" === this._loaderType
                }
            }, {
                key: "_cacheSpeed", value: function (t) {
                    e.historySpeed.length >= 20 && e.historySpeed.shift(), e.historySpeed.push(t)
                }
            }, {
                key: "load", value: (r = (0, f.x)((0, f.l5)().mark((function e(t, n, r, i) {
                    var o, a, u, c, l, h, v, p, g, m, b, x, S, T, P, j, k, E = arguments;
                    return (0, f.l5)().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (o = E.length > 4 && void 0 !== E[4] && E[4], a = E.length > 5 && void 0 !== E[5] ? E[5] : null, u = E.length > 6 && void 0 !== E[6] ? E[6] : null, c = i.cacheKey || _.Z.generateUniqueKey(i), l = {
                                    start: i.start,
                                    end: i.end,
                                    bandwidth: i.bandwidth || i.bitrate,
                                    sequence: i.idx,
                                    fps: i.fps,
                                    mediaType: t,
                                    selectedIdx: i.selectedIdx,
                                    definition: i.definition
                                }, !this._preloadManager) {
                                    e.next = 12;
                                    break
                                }
                                return e.next = 8, this._preloadManager.getItem(c);
                            case 8:
                                if (!((h = e.sent).res instanceof ArrayBuffer)) {
                                    e.next = 12;
                                    break
                                }
                                return a && a(h.res, !0, {range: r}, null, i), e.abrupt("return", {
                                    res: h.res,
                                    headers: h.headers,
                                    status: h.status,
                                    fromCache: !0,
                                    selectedIdx: i.selectedIdx,
                                    extData: l,
                                    cacheKey: c
                                });
                            case 12:
                                var I;
                                if (v = !a || this._isSupportUrlRange, p = v && (this._config.useUrlRange || i.useUrlRange || !1), g = n, p && r && r.length > 1 && (g = n + (n.split("?")[1] ? "&" : "?") + s()(I = "range=".concat(r[0], "-")).call(I, r[1])), r && 0 !== r.length && !p || (r = void 0), m = performance.now(), y.ZP.log("load res: ", d()(i), "startTime", m), e.prev = 19, b = this._getLoader(t)) {
                                    e.next = 23;
                                    break
                                }
                                return e.abrupt("return");
                            case 23:
                                return e.next = 25, b.load(g, {
                                    range: r,
                                    onProgress: a,
                                    selectedIdx: i.selectedIdx,
                                    sequence: i.idx,
                                    initSegment: i.initSegment,
                                    onProcessMinLen: this._config.onProcessMinLen,
                                    onCancel: u
                                });
                            case 25:
                                if (x = e.sent) {
                                    e.next = 28;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 28:
                                return y.ZP.log("load res: ", i, "cost time", performance.now() - m, "ms"), S = x.data, T = x.response, P = {
                                    res: S instanceof Uint8Array ? S.buffer : S,
                                    headers: w(T.headers),
                                    status: T.status
                                }, o && this._preloadManager.setItem(c, P).catch((function () {
                                })), e.abrupt("return", (0, f.Zj)((0, f.Zj)({}, P), {}, {
                                    extData: l,
                                    selectedIdx: i.selectedIdx,
                                    cacheKey: c
                                }));
                            case 35:
                                return e.prev = 35, e.t0 = e.catch(19), y.ZP.log("loader error", e.t0), e.abrupt("return", {
                                    res: "error",
                                    status: null === (j = e.t0.response) || void 0 === j ? void 0 : j.status,
                                    header: w(null === (k = e.t0.response) || void 0 === k ? void 0 : k.headers),
                                    cacheKey: c,
                                    error: e.t0
                                });
                            case 39:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[19, 35]])
                }))), function (e, t, n, i) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "_getLoader", value: function (e) {
                    if ("video" === e) {
                        var t = this._videoLoaders[this._videoIdx];
                        return this._videoIdx++, this._videoIdx >= this._videoLoaders.length && (this._videoIdx = 0), t
                    }
                    var n = this._audioLoaders[this._audioIdx];
                    return this._audioIdx++, this._audioIdx >= this._audioLoaders.length && (this._audioIdx = 0), n
                }
            }, {
                key: "cancel", value: (n = (0, f.x)((0, f.l5)().mark((function e(t) {
                    var n;
                    return (0, f.l5)().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!t) {
                                    e.next = 6;
                                    break
                                }
                                return n = "video" === t ? this._videoLoaders : this._audioLoaders, e.next = 4, this.cancelLoaders(n);
                            case 4:
                                e.next = 10;
                                break;
                            case 6:
                                return e.next = 8, this.cancelLoaders(this._audioLoaders);
                            case 8:
                                return e.next = 10, this.cancelLoaders(this._videoLoaders);
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function (e) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "cancelLoaders", value: (t = (0, f.x)((0, f.l5)().mark((function e(t) {
                    var n, r, i;
                    return (0, f.l5)().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                n = (0, f.sf)(t), e.prev = 1, n.s();
                            case 3:
                                if ((r = n.n()).done) {
                                    e.next = 9;
                                    break
                                }
                                return i = r.value, e.next = 7, i.cancel();
                            case 7:
                                e.next = 3;
                                break;
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1), n.e(e.t0);
                            case 14:
                                return e.prev = 14, n.f(), e.finish(14);
                            case 17:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[1, 11, 14, 17]])
                }))), function (e) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "destroy", value: function () {
                    this.cancel();
                    for (var e = 0; e < this._videoLoaders.length; e++) {
                        var t = this._videoLoaders[e];
                        t && t.removeAllListeners();
                        var n = this._audioLoaders[e];
                        n && n.removeAllListeners()
                    }
                    this._audioLoaders = [], this._videoLoaders = []
                }
            }], [{
                key: "currentSpeed", get: function () {
                    return x
                }
            }, {
                key: "historyAvspeed", get: function () {
                    var t, n = l()(t = e.historySpeed).call(t, (function (e, t) {
                        return e + t
                    }), 0);
                    return 0 === e.historySpeed.length ? 0 : n / e.historySpeed.length
                }
            }]), e
        }();
        S.historySpeed = []
    }, 14031: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return Qe
            }
        });
        var r = n(19623), i = (n(41539), n(54747), n(66992), n(88674), n(78783), n(33948), n(18264), n(90149)),
            o = n.n(i), a = n(93476), s = n.n(a), u = n(77766), d = n.n(u), c = n(51942), l = n.n(c), f = n(3649),
            h = n.n(f), v = n(84825), p = (n(92222), n(19601), n(47042), n(17727), n(92762)), g = n.n(p), _ = n(65420),
            y = n.n(_), m = n(98341), b = n.n(m), w = function (e) {
                return e && e.Math == Math && e
            },
            x = w("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || w("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || w("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || w("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function S(e) {
            return (S = "function" == typeof y() && "symbol" == typeof b() ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof y() && e.constructor === y() && e !== y().prototype ? "symbol" : typeof e
            })(e)
        }

        function T(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function P(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function j(e, t, n) {
            return t && P(e.prototype, t), n && P(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        x.globalThis = x, x.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        n(40561);
        var k = n(48370), E = n.n(k), I = n(47302), L = n.n(I), C = n(20455), R = n.n(C),
            A = (n(2707), n(26833), n(59941)), D = n(3835), Z = n.n(D), M = n(56644), O = function (e) {
                return e && e.Math == Math && e
            },
            N = O("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || O("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || O("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || O("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var F = function () {
                function e(t, n, r, i, o) {
                    T(this, e), E()(this), this.state = M.PO.PREPARE, this.options = t || {}, this.logger = t.logger || function () {
                    }, this._preloadManager = n, this.player = n.player;
                    var a = r.handlers, s = r.predictInst, u = r.readyPromise;
                    this._predictInst = s, this._handlers = a, this._predictInstReadyPromise = u, this._toLoadList = [], this.retryCount = 0, this._cachedHandler = i, this._cachedDataHanlder = o, this.cnt = 0
                }

                return j(e, [{
                    key: "start", value: function () {
                        var e = this, t = new A.Z;
                        return this._handlers.start(this.options).then((function (n) {
                            n.onObtain().then((function (r) {
                                e._predictInstReadyPromise.then((function () {
                                    e._predictInst.updateMediaInfos(r);
                                    var i = e._predictInst.preloadPredict(e.options), o = e._predictInst.cachedData;
                                    e._cachedDataHanlder(l()({vid: e.options.vid}, {data: o}));
                                    var a = l()(i, e.options);
                                    n.onTransform(a).then((function (n) {
                                        e._toLoadList = n, t.resolve(n)
                                    }))
                                }))
                            }))
                        })).catch((function (e) {
                            t.reject(new Error("preload unit start error"))
                        })), t
                    }
                }, {
                    key: "preloadSeg", value: function () {
                        var e = this;
                        if (0 === this._toLoadList.length) return this.state = M.PO.FINISH, void this.emit(M.LB, !0);
                        this.state = "PRELOADING";
                        var t = this._toLoadList.shift();
                        this._handlers.onRequest(t, (function (n) {
                            var r = l()({}, t.extData, n);
                            e._cachedHandler(r)
                        })).then((function () {
                            e.state = M.PO.IDLE, e.emit(M.LB)
                        })).catch((function (t) {
                            e.requestError(), e.emit(M.LB, !1)
                        }))
                    }
                }, {
                    key: "requestError", value: function () {
                        this.retryCount++, this.state = M.PO.IDLE, this.retryCount >= 10 && (this.state = M.PO.FINISH), this.emit(M.wW), this.logger("preload request error")
                    }
                }, {
                    key: "cancelLoading", value: function () {
                        this._toLoadList = []
                    }
                }, {
                    key: "destroy", value: function () {
                        Z()(this)
                    }
                }]), e
            }(), U = (n(74916), n(23123), n(69600), n(68309), n(39714), n(81643)), B = n.n(U), X = function (e) {
                return e && e.Math == Math && e
            },
            K = X("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || X("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || X("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || X("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        K.globalThis = K, K.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var H = function () {
                try {
                    if ("undefined" != typeof indexedDB) return indexedDB;
                    if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                    if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                    if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                    if ("undefined" != typeof msIndexedDB) return msIndexedDB
                } catch (e) {
                }
            }(), z = function (e) {
                return e && e.Math == Math && e
            },
            q = z("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || z("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || z("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || z("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        q.globalThis = q, q.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var V = function (e) {
                return e && e.Math == Math && e
            },
            W = V("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || V("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || V("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || V("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function G(e, t) {
            t && e.then((function (e) {
                t(null, e)
            }), (function (e) {
                t(e)
            }))
        }

        W.globalThis = W, W.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Y = function (e) {
                return e && e.Math == Math && e
            },
            $ = Y("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || Y("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Y("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Y("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var Q = function (e) {
                return e && e.Math == Math && e
            },
            J = Q("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || Q("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Q("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Q("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function ee(e) {
            return "string" != typeof e && (console.warn("".concat(e, " used as a key, but it is not a string.")), e = String(e)), e
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
        var te = function (e) {
                return e && e.Math == Math && e
            },
            ne = te("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || te("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || te("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || te("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ne.globalThis = ne, ne.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var re = {}, ie = "readonly", oe = "readwrite";

        function ae(e) {
            var t = re[e.name], n = {};
            n.promise = new (s())((function (e, t) {
                n.resolve = e, n.reject = t
            })), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then((function () {
                return n.promise
            })) : t.dbReady = n.promise
        }

        function se(e, t) {
            return new (s())((function (n, r) {
                if (re[e.name] = re[e.name] || {forages: [], db: null, dbReady: null, deferredOperations: []}, e.db) {
                    if (!t) return n(e.db);
                    ae(e), e.db.close()
                }
                var i = [e.name];
                t && i.push(e.version);
                var o = H.open.apply(H, i);
                t && (o.onupgradeneeded = function (t) {
                    var n = o.result;
                    try {
                        n.createObjectStore(e.storeName)
                    } catch (n) {
                        if ("ConstraintError" !== n.name) throw n;
                        console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                    }
                }), o.onerror = function (e) {
                    e.preventDefault(), r(o.error)
                }, o.onsuccess = function () {
                    n(o.result), function (e) {
                        var t = re[e.name].deferredOperations.pop();
                        if (t) t.resolve(), t.promise
                    }(e)
                }
            }))
        }

        function ue(e) {
            return se(e, !1)
        }

        function de(e) {
            return se(e, !0)
        }

        function ce(e, t) {
            if (!e.db) return !0;
            var n = !e.db.objectStoreNames.contains(e.storeName), r = e.version < e.db.version,
                i = e.version > e.db.version;
            if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), i || n) {
                if (n) {
                    var o = e.db.version + 1;
                    o > e.version && (e.version = o)
                }
                return !0
            }
            return !1
        }

        function le(e) {
            ae(e);
            for (var t = re[e.name], n = t.forages, r = 0; r < n.length; r++) {
                var i = n[r];
                i._dbInfo.db && (i._dbInfo.db.close(), i._dbInfo.db = null)
            }
            return e.db = null, ue(e).then((function (t) {
                return e.db = t, ce(e) ? de(e) : t
            })).then((function (r) {
                e.db = t.db = r;
                for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = r
            })).catch((function (t) {
                throw function (e, t) {
                    var n = re[e.name].deferredOperations.pop();
                    if (n) n.reject(t), n.promise
                }(e, t), t
            }))
        }

        function fe(e, t, n, r) {
            void 0 === r && (r = 1);
            try {
                var i = e.db.transaction(e.storeName, t);
                n(null, i)
            } catch (i) {
                if (r > 0 && (!e.db || "InvalidStateError" === i.name || "NotFoundError" === i.name)) return s().resolve().then((function () {
                    if (!e.db || "NotFoundError" === i.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), de(e)
                })).then((function () {
                    return le(e).then((function () {
                        fe(e, t, n, r - 1)
                    }))
                })).catch(n);
                n(i)
            }
        }

        var he = function () {
                function e() {
                    T(this, e)
                }

                return j(e, [{
                    key: "ready", value: function () {
                        return this._ready
                    }
                }, {
                    key: "_initStorage", value: function (e) {
                        var t, n = this;
                        n._defaultConfig = e;
                        var r = {db: null};
                        if (e) for (var i in e) r[i] = e[i];
                        var o = re[r.name];
                        o || (o = {
                            forages: [],
                            db: null,
                            dbReady: null,
                            deferredOperations: []
                        }, re[r.name] = o), o.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = n._fullyReady);
                        var a = [];

                        function u() {
                            return s().resolve()
                        }

                        for (var d = 0; d < o.forages.length; d++) {
                            var c = o.forages[d];
                            c !== n && a.push(c._initReady().catch(u))
                        }
                        var l = h()(t = o.forages).call(t, 0);
                        return n._ready = s().all(a).then((function () {
                            return r.db = o.db, ue(r)
                        })).then((function (e) {
                            return r.db = e, ce(r, n._defaultConfig.version) ? de(r) : e
                        })).then((function (e) {
                            r.db = o.db = e, n._dbInfo = r;
                            for (var t = 0; t < l.length; t++) {
                                var i = l[t];
                                i !== n && (i._dbInfo.db = r.db, i._dbInfo.version = r.version)
                            }
                        })), n._ready
                    }
                }, {
                    key: "probeSupport", get: function () {
                        return function () {
                            try {
                                var e;
                                if (!H || !H.open) return !1;
                                var t = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                    n = "function" == typeof fetch && -1 !== B()(e = fetch.toString()).call(e, "[native code");
                                return (!t || n) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                            } catch (e) {
                                return !1
                            }
                        }()
                    }
                }, {
                    key: "getItem", value: function (e, t) {
                        var n = this;
                        e = ee(e);
                        var r = new (s())((function (t, r) {
                            n.ready().then((function () {
                                fe(n._dbInfo, ie, (function (i, o) {
                                    if (i) return r(i);
                                    try {
                                        var a = o.objectStore(n._dbInfo.storeName).get(e);
                                        a.onsuccess = function () {
                                            var e = a.result;
                                            void 0 === e && (e = null), t(e)
                                        }, a.onerror = function () {
                                            r(a.error)
                                        }
                                    } catch (e) {
                                        r(e)
                                    }
                                }))
                            })).catch(r)
                        }));
                        return G(r, t), r
                    }
                }, {
                    key: "setItem", value: function (e, t, n) {
                        var r = this;
                        e = ee(e);
                        var i = new (s())((function (n, i) {
                            r.ready().then((function () {
                                return r._dbInfo, t
                            })).then((function (t) {
                                fe(r._dbInfo, oe, (function (o, a) {
                                    if (o) return i(o);
                                    try {
                                        var s = a.objectStore(r._dbInfo.storeName);
                                        null === t && (t = void 0);
                                        var u = s.put(t, e);
                                        a.oncomplete = function () {
                                            void 0 === t && (t = null), n(t)
                                        }, a.onabort = a.onerror = function () {
                                            var e = u.error ? u.error : u.transaction.error;
                                            i(e)
                                        }
                                    } catch (e) {
                                        i(e)
                                    }
                                }))
                            })).catch(i)
                        }));
                        return G(i, n), i
                    }
                }, {
                    key: "removeItem", value: function (e, t) {
                        var n = this;
                        e = ee(e);
                        var r = new (s())((function (t, r) {
                            n.ready().then((function () {
                                fe(n._dbInfo, oe, (function (i, o) {
                                    if (i) return r(i);
                                    try {
                                        var a = o.objectStore(n._dbInfo.storeName).delete(e);
                                        o.oncomplete = function () {
                                            t()
                                        }, o.onerror = function () {
                                            r(a.error)
                                        }, o.onabort = function () {
                                            var e = a.error ? a.error : a.transaction.error;
                                            r(e)
                                        }
                                    } catch (e) {
                                        r(e)
                                    }
                                }))
                            })).catch(r)
                        }));
                        return G(r, t), r
                    }
                }, {
                    key: "clear", value: function (e) {
                        var t = this, n = new (s())((function (e, n) {
                            t.ready().then((function () {
                                fe(t._dbInfo, oe, (function (r, i) {
                                    if (r) return n(r);
                                    try {
                                        var o = i.objectStore(t._dbInfo.storeName).clear();
                                        i.oncomplete = function () {
                                            e()
                                        }, i.onabort = i.onerror = function () {
                                            var e = o.error ? o.error : o.transaction.error;
                                            n(e)
                                        }
                                    } catch (e) {
                                        n(e)
                                    }
                                }))
                            })).catch(n)
                        }));
                        return G(n, e), n
                    }
                }, {
                    key: "length", value: function (e) {
                        var t = this, n = new (s())((function (e, n) {
                            t.ready().then((function () {
                                fe(t._dbInfo, ie, (function (r, i) {
                                    if (r) return n(r);
                                    try {
                                        var o = i.objectStore(t._dbInfo.storeName).count();
                                        o.onsuccess = function () {
                                            e(o.result)
                                        }, o.onerror = function () {
                                            n(o.error)
                                        }
                                    } catch (e) {
                                        n(e)
                                    }
                                }))
                            })).catch(n)
                        }));
                        return G(n, e), n
                    }
                }, {
                    key: "all", value: function (e) {
                        var t = this, n = new (s())((function (e, n) {
                            t.ready().then((function () {
                                fe(t._dbInfo, ie, (function (r, i) {
                                    if (r) return n(r);
                                    try {
                                        var o = i.objectStore(t._dbInfo.storeName).openCursor(), a = [];
                                        o.onsuccess = function () {
                                            var t = o.result;
                                            t ? (a.push({key: t.key, value: t.value}), t.continue()) : e(a)
                                        }, o.onerror = function () {
                                            n(o.error)
                                        }
                                    } catch (e) {
                                        n(e)
                                    }
                                }))
                            })).catch(n)
                        }));
                        return G(n, e), n
                    }
                }, {
                    key: "_fullyReady", value: function (e) {
                        var t = this, n = t._initReady().then((function () {
                            var e = re[t._dbInfo.name];
                            if (e && e.dbReady) return e.dbReady
                        }));
                        return function (e, t, n) {
                            "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n)
                        }(n, e, e), n
                    }
                }]), e
            }(), ve = n(86902), pe = n.n(ve), ge = (n(47941), function (e) {
                return e && e.Math == Math && e
            }),
            _e = ge("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || ge("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || ge("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || ge("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var ye = function () {
                function e() {
                    T(this, e)
                }

                return j(e, [{
                    key: "_initStorage", value: function (e) {
                        var t = e.name + "_" + e.storeName;
                        return this.key = t, window[t] && "object" === S(window[t]) || (window[t] = {}), this.store = window[t], s().resolve()
                    }
                }, {
                    key: "getItem", value: function (e, t) {
                        var n = this.store[e];
                        return void 0 === n && (n = null), this._internalPromise(t, n)
                    }
                }, {
                    key: "setItem", value: function (e, t, n) {
                        return this.store[e] = t, this._internalPromise(n)
                    }
                }, {
                    key: "removeItem", value: function (e, t) {
                        return delete this.store[e], this._internalPromise(t)
                    }
                }, {
                    key: "clear", value: function (e) {
                        return this.store = {}, window[this.key] = {}, this._internalPromise(e)
                    }
                }, {
                    key: "length", value: function (e) {
                        var t = pe()(this.store).length;
                        return this._internalPromise(e, t)
                    }
                }, {
                    key: "_internalPromise", value: function (e, t) {
                        var n = t ? s().resolve(t) : s().resolve();
                        return G(n, e), n
                    }
                }, {
                    key: "all", value: function (e) {
                        for (var t = [], n = pe()(this.store), r = 0; r < n.length; r++) {
                            var i = n[r];
                            t.push({key: i, value: this.store[i]})
                        }
                        return this._internalPromise(e, t)
                    }
                }, {
                    key: "probeSupport", value: function () {
                        return !0
                    }
                }]), e
            }(), me = n(94305), be = function (e) {
                return e && e.Math == Math && e
            },
            we = be("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || be("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || be("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || be("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var xe = {description: "", name: "__PRE_CACHE__", storeName: "keyvaluepairs", version: 1},
            Se = "__PRE_CACHE__KEYS", Te = function () {
                function e(t, n) {
                    T(this, e);
                    var r = n === M.Rr.MEMORY ? ye : he;
                    this._driver = new r, this._driver._initStorage(xe).catch((function () {
                    })), this._hasIdbForbidden = !1, this._maxCache = !t || t <= 0 ? 200 : t, this.setMaxCache(this._maxCache), this._allCachedKeys = {}, this._allCachedTimeKeys = {}, this.getCachedKeysFromLocal(), this._readyPromise = new A.Z, this.init()
                }

                return j(e, [{
                    key: "getCachedKeysFromLocal", value: function () {
                        var e = me.Z.getItem(Se);
                        if (e) for (var t = e.split("|"), n = 0; n < t.length; n++) {
                            var r = t[n], i = this._getCacheKeyInfos(r), o = i.time, a = i.cachedKey;
                            this._allCachedKeys[a] = 1, this._allCachedTimeKeys[a] = o
                        }
                    }
                }, {
                    key: "_getCacheKeyInfos", value: function (e) {
                        var t, n = e.split("$");
                        return 2 === n.length && (t = n[0], e = n[1]), {time: t, cachedKey: e}
                    }
                }, {
                    key: "writeCachedKeysToLocal", value: function (e) {
                        var t = [];
                        this._allCachedKeys = {}, this._allCachedTimeKeys = {};
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n].key, i = this._getCacheKeyInfos(r), o = i.time, a = i.cachedKey;
                            this._allCachedKeys[a] = 1, this._allCachedTimeKeys[a] = o, t.push(r)
                        }
                        var s = t.join("|");
                        me.Z.setItem(Se, s)
                    }
                }, {
                    key: "init", value: function () {
                        var e = this;
                        this._driver.setItem("test", "test").then((function () {
                        })).catch((function () {
                            e._hasIdbForbidden = !0
                        })).finally((function () {
                            e._driver.removeItem("test").catch((function () {
                            })), e._hasIdbForbidden && (e._driver = new ye, e._driver._initStorage(xe)), e._getAll(), e._readyPromise.resolve()
                        }))
                    }
                }, {
                    key: "_getAll", value: function () {
                        var e = this;
                        this._driver.all().then((function (t) {
                            e._cachedLength = t.length;
                            var n = t.length - e._maxCache, r = t;
                            if (n > 0) {
                                var i = h()(t).call(t, 0, n);
                                r = h()(t).call(t, n);
                                for (var o = 0; o < i.length; o++) e.removeItem(i[o].key).then((function () {
                                }))
                            }
                            e.writeCachedKeysToLocal(r)
                        })).catch((function () {
                        }))
                    }
                }, {
                    key: "getItem", value: function (e, t) {
                        if (!this.hasItem(e)) return s().resolve(!1);
                        var n = this._getTimeKey(e).timeKey;
                        return this._driver.getItem(n, t)
                    }
                }, {
                    key: "setItem", value: function (e, t, n) {
                        var r = this;
                        this._getTimeKey(e).timeKey && this.removeItem(e);
                        var i = (new Date).getTime();
                        this._allCachedKeys[e] = 1, this._allCachedTimeKeys[e] = i;
                        var o = this._genTimeKey(e, i);
                        return n = n ? function () {
                            r._getAll(), n()
                        } : function () {
                            r._getAll()
                        }, this._driver.setItem(o, t, n)
                    }
                }, {
                    key: "_getTimeKey", value: function (e) {
                        var t = this._allCachedTimeKeys[e], n = e;
                        return t && (n = this._genTimeKey(e, t)), {timeKey: n, time: t}
                    }
                }, {
                    key: "_genTimeKey", value: function (e, t) {
                        var n, r;
                        return d()(n = d()(r = "".concat(t)).call(r, "$")).call(n, e)
                    }
                }, {
                    key: "removeItem", value: function (e, t) {
                        var n = this._getTimeKey(e).timeKey, r = this._driver.removeItem(n, t);
                        return delete this._allCachedKeys[e], delete this._allCachedTimeKeys[e], r
                    }
                }, {
                    key: "hasItem", value: function (e) {
                        return !!this._allCachedKeys[e]
                    }
                }, {
                    key: "clear", value: function (e) {
                        return this._driver.clear(e)
                    }
                }, {
                    key: "length", value: function (e) {
                        return this._driver.length(e)
                    }
                }, {
                    key: "setMaxCache", value: function (e) {
                        "number" == typeof e && e > 0 && (this._maxCache = e)
                    }
                }]), e
            }(), Pe = function (e) {
                return e && e.Math == Math && e
            },
            je = Pe("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || Pe("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Pe("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Pe("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        };
        var ke = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                T(this, e), E()(this), this._preloadDataList = [], this._currentPreloadInst = null, this._dashPreloadList = [], this.autoPreload = t.autoPreload || !1, this._autoCheck = t.autoCheck || {
                    enable: !1,
                    interval: 1e3
                }, this._onPreloadNext = this.onPreloadNextReady.bind(this), this.on(M.CN, this._onPreloadNext), this._preloaderConfigs = {}, this.update(t, n, r), this._cacheInst = new Te(t.preloadMaxCacheCount, t.preloadCacheType), this._preloadCacheProgress = {}, this._ptag_ = !0, this._cachedDatas = {}, this._taskIntervalId = null
            }

            return j(e, [{
                key: "startCheckTask", value: function () {
                    var e = this, t = this._autoCheck, n = this._preloadDataList;
                    (this._taskIntervalId && (window.clearTimeout(this._taskIntervalId), this._taskIntervalId = null), 0 !== n.length) && (this._checkIfCanPreload() && this.onPreloadNext(), this._taskIntervalId = window.setTimeout((function () {
                        e.startCheckTask()
                    }), t.interval || 1e3))
                }
            }, {
                key: "stopCheckTask", value: function () {
                    this._taskIntervalId && (window.clearTimeout(this._taskIntervalId), this._taskIntervalId = null)
                }
            }, {
                key: "_checkIfCanPreload", value: function () {
                    if (null == this._currentPreloadInst && this._preloadDataList.length > 0) {
                        var e = this._preloadDataList[0].data;
                        if (e.payload) {
                            var t = this._getProloaderKey(e), n = this._preloaderConfigs[t];
                            if (n && n.handlers) {
                                var r = n.handlers.checkIfCanPreload;
                                return r ? r(e) : (this.stopCheckTask(), !1)
                            }
                            return console.warn("need to set vtype, no preloader", e), this.stopCheckTask(), !1
                        }
                    }
                    return !1
                }
            }, {
                key: "_getProloaderKey", value: function (e) {
                    return e.vtype ? e.vtype : "DEFAULT"
                }
            }, {
                key: "update", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!n) throw new Error("PreloaderManager predictInst is null");
                    var r = this._getProloaderKey(e);
                    this._preloaderConfigs[r] = {predictInst: n, readyPromise: n.init(e), handlers: t}
                }
            }, {
                key: "cachedDatas", get: function () {
                    return this._cachedDatas
                }
            }, {
                key: "onCacheSegment", value: function (e) {
                    var t = e.vid, n = e.format, r = e.cacheKey, i = e.total, o = e.loaded, a = e.isInitSegment,
                        s = e.mediaType, u = this.getProgressCacheKey(t, n, s), d = this._preloadCacheProgress[u];
                    d || (d = this._preloadCacheProgress[u] = {}), d[r] = {total: i, loaded: o, isInitSegment: a}
                }
            }, {
                key: "onCachePredict", value: function (e) {
                    var t = e.vid, n = e.data;
                    t && n && (this._cachedDatas[t] = n)
                }
            }, {
                key: "getProgressCacheKey", value: function (e, t, n) {
                    var r, i;
                    return d()(r = d()(i = "".concat(e, "-")).call(i, t, "-")).call(r, n)
                }
            }, {
                key: "onPreloadNextReady", value: function () {
                    this.onPreloadNext()
                }
            }, {
                key: "onPreloadSegDone", value: function () {
                    this.autoPreload && this.emit(M.CN)
                }
            }, {
                key: "onPreloadNext", value: function () {
                    var e = this;
                    if (null == this._currentPreloadInst && this._preloadDataList.length > 0) {
                        if (this._preloadDataList.length > 0) {
                            var t = this._preloadDataList.shift().data;
                            if (t.payload) {
                                var n = this._getProloaderKey(t), r = this._preloaderConfigs[n];
                                if (!r) return void console.warn("need to set vtype, no preloader", t);
                                this._currentPreloadInst = new F(t, this, r, (function (t) {
                                    e.onCacheSegment(t)
                                }), (function (t) {
                                    e.onCachePredict(t)
                                })), this._currentPreloadInst.on(M.LB, this.onPreloadSegDone.bind(this)), this._currentPreloadInst.start().then((function () {
                                    e._currentPreloadInst.preloadSeg()
                                })).catch((function () {
                                    e._currentPreloadInst = null
                                }))
                            }
                        }
                    } else null != this._currentPreloadInst && (this._currentPreloadInst.state === M.PO.IDLE ? this._currentPreloadInst.preloadSeg() : this._currentPreloadInst.state === M.PO.FINISH ? (this._currentPreloadInst.destroy(), this._currentPreloadInst = null) : this._currentPreloadInst.state === M.PO.PREPARE && (this._currentPreloadInst.cnt++, this._currentPreloadInst.cnt > 2 && (this._currentPreloadInst.destroy(), this._currentPreloadInst = null)))
                }
            }, {
                key: "addDashPreloader", value: function (e) {
                    e && e.data && (this._preloadDataList.push(e), L()(this).call(this, this._preloadDataList), this.autoPreload && this.emit(M.CN), this._autoCheck.enable && !this._taskIntervalId && this.startCheckTask())
                }
            }, {
                key: "_addDashPreloader", value: function (e) {
                    e && e.data && this._preloadDataList.push(e)
                }
            }, {
                key: "addDashPreloaderList", value: function () {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    L()(e = this).call(e, t);
                    for (var n = 0; n < t.length; n++) this._addDashPreloader(t[n]);
                    this._autoCheck.enable && !this._taskIntervalId && this.startCheckTask()
                }
            }, {
                key: "sort", value: function (e) {
                    L()(e).call(e, (function (e, t) {
                        return void 0 === e.order && void 0 === e.order || e.order < t.order ? -1 : 1
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.off(M.CN, this._onPreloadNext)
                }
            }, {
                key: "cancelLoading", value: function () {
                    this._currentPreloadInst && (this._currentPreloadInst.cancelLoading(), this._currentPreloadInst = null), this._preloadDataList = []
                }
            }, {
                key: "preloadCacheProgress", value: function (e) {
                    var t = e.vid, n = e.format, r = e.mediaType, i = e.prelaodType, o = e.bitrate, a = e.set_duration,
                        s = e.set_size, u = e.media_type, d = e.start_time, c = this.getProgressCacheKey(t, n, r),
                        l = this._preloadCacheProgress[c];
                    if (l) {
                        for (var f = R()(l), h = 0, v = 0, p = 0, g = 0, _ = 0, y = 0; y < f.length; y++) {
                            var m = f[y];
                            m.isInitSegment && (h = m.total, p = m.loaded, g = m.loaded === m.total ? M.x7.SUCCESS : M.x7.DOWNLOADING), v += m.total, _ += m.loaded
                        }
                        return {
                            media_type: u,
                            preload_type: i,
                            stream_bitrate: o,
                            header_size: h,
                            content_total_size: v,
                            start_time: d || -1,
                            state_info: {
                                set_duration: a,
                                set_size: s,
                                current_header_download_size: p,
                                current_content_download_size: _,
                                header_download_state: g,
                                content_download_state: _ === v ? M.x7.SUCCESS : M.x7.DOWNLOADING
                            }
                        }
                    }
                    return null
                }
            }, {
                key: "getPreloadTaskInfos", value: function () {
                }
            }, {
                key: "getItem", value: function (e, t) {
                    return this._cacheInst.getItem(e, t)
                }
            }, {
                key: "setItem", value: function (e, t, n) {
                    return this._cacheInst.setItem(e, t, n)
                }
            }, {
                key: "removeItem", value: function (e, t) {
                    return this.removeItem(e, t)
                }
            }], [{
                key: "getInstance", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        i = e.GLOBAL_KEY + (t.globalKey ? t.globalKey : ""), o = window[i];
                    if (o && o._ptag_) return o.update(t, n, r), o;
                    var a = new e(t, n, r);
                    return window[i] = a, a
                }
            }]), e
        }();
        ke.GLOBAL_KEY = "__preloadcontext__";
        var Ee = function (e) {
                return e && e.Math == Math && e
            },
            Ie = Ee("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || Ee("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ee("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ee("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var Le = function () {
                function e(t) {
                    T(this, e), E()(this), this.options = t, this.promisePolyfill(), this.before(), this.check(), this._preloadManager = ke.getInstance(t, this.handlers, this.predictInst), this.loadingTasks = []
                }

                return j(e, [{
                    key: "promisePolyfill", value: function () {
                        s().prototype.finally || (s().prototype.finally = {
                            finally: function (e) {
                                var t = function (t) {
                                    return s().resolve(e()).then(t)
                                };
                                return this.then((function (e) {
                                    return t((function () {
                                        return e
                                    }))
                                }), (function (e) {
                                    return t((function () {
                                        return s().reject(e)
                                    }))
                                }))
                            }
                        }.finally)
                    }
                }, {
                    key: "before", value: function () {
                        throw new Error("need")
                    }
                }, {
                    key: "check", value: function () {
                        if (!this.handlers) throw new Error("handlers null");
                        if (!this.handlers.start || !this.handlers.onRequest) throw new Error("handlers callback null");
                        if (!this.predictInst) throw new Error("predictInst null");
                        if (!this.predictInst.__p__) throw new Error("predictInst need extends predictbase")
                    }
                }, {
                    key: "preloadNext", value: function () {
                        this._preloadManager.emit(M.CN)
                    }
                }, {
                    key: "preloadManager", get: function () {
                        return this._preloadManager
                    }
                }, {
                    key: "start", value: function (e) {
                        throw new Error("start need implment, return Promise")
                    }
                }, {
                    key: "cancelLoading", value: function () {
                        for (var e = 0; e < this.loadingTasks.length; e++) try {
                            var t = this.loadingTasks[e];
                            "function" == typeof t.cancel && t.cancel()
                        } catch (e) {
                        }
                        this.loadingTasks = [], this._preloadManager.cancelLoading()
                    }
                }, {
                    key: "addTasker", value: function (e) {
                        this.loadingTasks.push(e)
                    }
                }, {
                    key: "removeTasker", value: function (e) {
                        var t = this;
                        setTimeout((function () {
                            for (var n = t.loadingTasks.length - 1; n > -1; n--) if (t.loadingTasks[n] === e) {
                                var r;
                                g()(r = t.loadingTasks).call(r, n, 1);
                                break
                            }
                        }))
                    }
                }, {
                    key: "addDashPreloader", value: function (e) {
                        this._preloadManager.addDashPreloader(e)
                    }
                }, {
                    key: "addDashPreloaderList", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        this._preloadManager.addDashPreloaderList(e)
                    }
                }]), e
            }(), Ce = n(95791), Re = n(81152), Ae = n(89093), De = n(38354), Ze = function (e) {
                return e && e.Math == Math && e
            },
            Me = Ze("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || Ze("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ze("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ze("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var Oe = function () {
                function e() {
                    T(this, e), this.bandwidth2item = {}, this._mediaInfos = null, this.__p__ = !0
                }

                return j(e, [{
                    key: "init", value: function () {
                        throw new Error("init func not implement, return promise")
                    }
                }, {
                    key: "preloadPredict", value: function (e) {
                        throw new Error("preloadPredict error", e)
                    }
                }, {
                    key: "updateMediaInfos", value: function (e) {
                        if (this._mediaInfos = e, this.bandwidth2item = {}, this.dynamic_video = e && e.dynamic_video_list, this.dynamic_video && this.dynamic_video.length > 0) for (var t = 0; t < this.dynamic_video.length; t++) {
                            var n = this.dynamic_video[t];
                            this.bandwidth2item[n.bitrate || n.bandwidth] = n
                        }
                    }
                }, {
                    key: "getIdx", value: function (e, t) {
                        var n = 0;
                        return e.forEach((function (e, r) {
                            e.definition === t && (n = r)
                        })), n
                    }
                }, {
                    key: "cachedData", get: function () {
                        return null
                    }
                }]), e
            }(), Ne = n(63585), Fe = function (e) {
                return e && e.Math == Math && e
            },
            Ue = Fe("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || Fe("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Fe("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Fe("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        Ue.globalThis = Ue, Ue.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var Be = M.w_, Xe = function (e) {
                (0, v.XW)(n, e);
                var t = (0, v.WY)(n);

                function n(e, r, i, o) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        logger: function () {
                        }, openLog: !1
                    };
                    return (0, v.PA)(this, n), t.call(this, e, r, i, o, a)
                }

                return (0, v.qH)(n, [{
                    key: "init", value: function () {
                        return this.onLoadWasm()
                    }
                }, {
                    key: "preloadPredict", value: function () {
                        return this.preload(Be.VIDEO)
                    }
                }]), n
            }(Ne.Z), Ke = n(65046), He = function (e) {
                return e && e.Math == Math && e
            },
            ze = He("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || He("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || He("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || He("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var qe = function (e) {
                (0, v.XW)(n, e);
                var t = (0, v.WY)(n);

                function n(e) {
                    var r;
                    return (0, v.PA)(this, n), (r = t.call(this)).loggerConfig = e, r._isWasmSupport = (0, Ke.checkWebAssemblySupport)(), r
                }

                return (0, v.qH)(n, [{
                    key: "init", value: function (e) {
                        var t = e.autoBitrateOpts || {}, n = t.module;
                        return this.isOpenAbr = t.isOpenAutoDefi, this.isOpenAbr && !n && (console.warn("if open abr, need [module], abr open change to close"), this.isOpenAbr = !1), this._isWasmSupport && n && this.isOpenAbr ? (this._abrPreloadInst = new Xe(e, 0, null, 5, this.loggerConfig), this._abrPreloadInst.init()) : s().resolve()
                    }
                }, {
                    key: "preloadPredict", value: function (e) {
                        var t = this._mediaInfos, n = 0, r = 0;
                        if (this._isWasmSupport && this.isOpenAbr && (e.useAbr || void 0 === e.useAbr)) {
                            this._abrPreloadInst.updateMediaInfos(this._mediaInfos);
                            var i = this._abrPreloadPredict();
                            n = i.videoIdx, r = i.time
                        } else n = this.getIdx(t.dynamic_video_list, e.defaultDefinition), this._cachedData = null;
                        var o = t.dynamic_video_list[n] || t.dynamic_video_list[0];
                        return {bandwidth: o.bitrate || o.bandwidth, executeTime: r}
                    }
                }, {
                    key: "_abrPreloadPredict", value: function () {
                        var e = this._abrPreloadInst.preloadPredict();
                        this._cachedData = e;
                        var t = e.bitrate, n = 0, r = this.bandwidth2item[t];
                        if (r) {
                            var i = r.definition;
                            n = this.getIdx(this._mediaInfos.dynamic_video_list, i)
                        }
                        return {videoIdx: n, time: e.pduration}
                    }
                }, {
                    key: "cachedData", get: function () {
                        return this._cachedData
                    }
                }]), n
            }(Oe), Ve = n(69385), We = n(4217), Ge = function (e) {
                return e && e.Math == Math && e
            },
            Ye = Ge("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || Ge("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || Ge("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || Ge("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var $e = null, Qe = function (e) {
            (0, v.XW)(r, e);
            var t, n = (0, v.WY)(r);

            function r(e, t, i) {
                var o;
                return (0, v.PA)(this, r), t.vtype = Ce.l0.DASH, (o = n.call(this, t)).player = e, o.logger = i || function () {
                }, o.loader = new Ae.Z({loaderCount: 1, loaderType: We.t.XHR}, o.preloadManager, "preloader"), o
            }

            return (0, v.qH)(r, [{
                key: "before", value: function () {
                    var e = this;
                    this.handlers = {
                        start: function (t) {
                            return e.start(t)
                        }, onRequest: function (t, n) {
                            var r = t.url, i = t.range, o = t.extData;
                            return e.getData(r, i, o, n)
                        }
                    }, this.loggerConfig = {
                        logger: function () {
                        }, openLog: !1
                    };
                    try {
                        !!localStorage.getItem("abrdebug") && (this.loggerConfig.logger = console.log, this.loggerConfig.openLog = !0)
                    } catch (e) {
                    }
                    this.predictInst = new qe(this.loggerConfig)
                }
            }, {
                key: "start", value: function (e) {
                    var t = this, n = new A.Z, i = e.payload;
                    if ("TOP" === e.playInfoType) {
                        var o = {dashOpts: e.payload};
                        (0, Ve.N)(o), i = o.dashOpts.dynamic_video
                    }
                    i.dynamic_video_list && i.dynamic_video_list.forEach((function (e) {
                        e.bitrate = e.real_bitrate || e.bitrate
                    })), i.dynamic_audio_list && i.dynamic_audio_list.forEach((function (e) {
                        e.bitrate = e.real_bitrate || e.bitrate
                    }));
                    var a = {dynamic_video: i}, u = new Re.Z("anytext", a, this), d = {
                        mediaInfos: {dynamic_video_list: [], dynamic_audio_list: []}, onObtain: function (e) {
                            var t = new A.Z;
                            return t.resolve(d.mediaInfos), t
                        }, onTransform: function (n) {
                            var o = new A.Z;
                            if (r.BitRateAdapter) {
                                var a = t.getUserSelectDefinition(), d = De.Z.getSelectorList(i, e.duration),
                                    c = r.BitRateAdapter.getSuitableBitrate(d, a);
                                t.logger("[xgplayer-encrypt] preloader getSuitableBitrate", c, "userSelectDefinition", a), c && (n.bandwidth = c.bitrate)
                            }
                            var l = u.mediaList.video || [], f = u.mediaList.audio || [], h = e.vid;
                            if ("segment_template" === u.dashType) t._calRequests(u, n, o, e, !0); else {
                                var v = [];
                                if (f && f.length > 0) {
                                    var p = t.makeInitBaseSegemntRequest(u, e.duration, "audio", 0, void 0, h);
                                    v.push(p)
                                }
                                if (l && l.length > 0) {
                                    var g = t._calVideoItemIdx(l, n.bandwidth) || 0, _ = l[g].definition,
                                        y = t.makeInitBaseSegemntRequest(u, e.duration, "video", g, _, h);
                                    v.push(y)
                                }
                                s().all(v).then((function () {
                                    t._calRequests(u, n, o, e)
                                })).catch((function (e) {
                                    console.warn && console.warn("catch no reqeuset", e), o.resolve([])
                                }))
                            }
                            return o
                        }
                    };
                    return u.once("ready", (function () {
                        d.type = u.type, d.mediaInfos.dynamic_video_list = u.mediaList.video || [], d.mediaInfos.dynamic_audio_list = u.mediaList.audio || [], n.resolve(d)
                    })), u.init(), n
                }
            }, {
                key: "_calRequests", value: function (e, t, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = [], a = t.bandwidth,
                        s = t.time, u = t.executeTime, c = e.mediaList.video || [], l = e.mediaList.audio || [],
                        f = r.vid;
                    if (l && l.length > 0) {
                        var h = this._calUrls(l[0], s, u, "audio", f, null, i);
                        o = d()(o).call(o, h)
                    }
                    if (c && c.length > 0) {
                        var v = this._calVideoItemIdx(c, a) || 0, p = c[v],
                            g = this._calUrls(p, s, u, "video", f, p.definition, i);
                        o = d()(o).call(o, g)
                    }
                    0 === o.length && console.warn && console.warn("no reqeusts from preloader"), n.resolve(o)
                }
            }, {
                key: "_calUrls", value: function (e, t, n, r, i, o) {
                    var a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6], s = [];
                    if (e) {
                        var u = e;
                        a && s.push({
                            url: u.initSegment,
                            range: u.initSegmentRange || [],
                            extData: {
                                cacheKey: De.Z.generateUniqueKey({
                                    vid: i,
                                    mediaType: r,
                                    codecType: u.codec_type,
                                    format: "dash",
                                    bitrate: u.bandwidth || u.bitrate
                                }),
                                vid: i,
                                format: "dash",
                                isInitSegment: !0,
                                mediaType: r,
                                useUrlRange: De.Z.validateUrlRange(this.options.url_range_domains, u.initSegment)
                            }
                        });
                        var d = e.mediaSegments, c = this._calStartEnd(d, t, n), l = d[c];
                        s.push({
                            url: l.url,
                            range: l.range || [],
                            extData: {
                                cacheKey: De.Z.generateUniqueKey({
                                    vid: i,
                                    mediaType: r,
                                    codecType: u.codec_type,
                                    format: "dash",
                                    start: l.start,
                                    end: l.end,
                                    definition: o,
                                    bitrate: u.bandwidth || u.bitrate
                                }),
                                vid: i,
                                format: "dash",
                                isInitSegment: !1,
                                mediaType: r,
                                useUrlRange: De.Z.validateUrlRange(this.options.url_range_domains, l.url)
                            }
                        })
                    }
                    return s
                }
            }, {
                key: "_calStartEnd", value: function (e, t, n) {
                    for (var r = -1, i = 0; i < e.length; i++) {
                        var o = e[i], a = t || 0;
                        if (o.start >= a && a < o.end) {
                            r = i;
                            break
                        }
                    }
                    return -1 === r && (r = 0), r
                }
            }, {
                key: "_calVideoItemIdx", value: function (e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r && r.bandwidth === t) return n
                    }
                    return null
                }
            }, {
                key: "getData", value: (t = (0, v.x)((0, v.l5)().mark((function e(t) {
                    var n, r, i, o, a, s, u, d = arguments;
                    return (0, v.l5)().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = d.length > 1 && void 0 !== d[1] ? d[1] : [], r = d.length > 2 && void 0 !== d[2] ? d[2] : {}, i = d.length > 3 ? d[3] : void 0, e.prev = 3, e.next = 6, this.loader.load(r.mediaType, t, n, r, !0);
                            case 6:
                                return o = e.sent, a = o.res, s = o.headers, u = o.cacheKey, i && i({
                                    total: a.byteLength,
                                    loaded: a.byteLength,
                                    cacheKey: u || r.cacheKey
                                }), e.abrupt("return", {res: a, headers: s});
                            case 14:
                                return e.prev = 14, e.t0 = e.catch(3), console.log("preload get data error", e.t0), e.abrupt("return", {res: null});
                            case 18:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[3, 14]])
                }))), function (e) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "makeInitBaseSegemntRequest", value: function (e, t, n, r, i, o) {
                    var a = this, s = new A.Z, u = e.mediaList[n][r], d = [u.initSegmentRange[0], u.sidxRange[1]],
                        c = u.initSegment, f = {
                            mediaType: n,
                            vid: o,
                            definition: i,
                            useUrlRange: De.Z.validateUrlRange(this.options.url_range_domains, c),
                            timeout: -1,
                            isInitSegment: !0,
                            bitrate: u.bandwidth || u.bitrate
                        };
                    return this.getData(c, d, f, (function (e) {
                        var t = l()({}, e, {vid: o, mediaType: n, isInitSegment: !0, format: "dash"});
                        a._preloadManager.onCacheSegment(t)
                    }), -1).then((function (i) {
                        var o = i.res;
                        o && "error" !== o ? a.handleInitData(o, d, u.sidxRange).then((function (i) {
                            i.sidxSegmentRes && e.getSidx(i.sidxSegmentRes, n, r, t), De.Z.validateFragment(i.initSegmentRes, d) ? s.resolve(i.initSegmentRes) : (s.reject({
                                mediaType: n,
                                index: r,
                                initSegmentRange: d,
                                url: c,
                                rejected: !0
                            }), a.logger("initSegmentRequest åˆ†ç‰‡æ ¡éªŒå¤±è´¥"))
                        })).catch((function (e) {
                            s.reject({
                                mediaType: n,
                                index: r,
                                initSegmentRange: d,
                                url: c,
                                rejected: !0
                            }), a.logger("initSegmentRequest error", e)
                        })) : s.reject({mediaType: n, index: r, initSegmentRange: d, url: c, rejected: !0})
                    })).catch((function (e) {
                        s.reject({
                            mediaType: n,
                            index: r,
                            initSegmentRange: d,
                            url: c,
                            rejected: !0
                        }), a.logger("initSegmentRequest error", e)
                    })), s
                }
            }, {
                key: "handleInitData", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, r = new A.Z,
                        i = e instanceof ArrayBuffer;
                    if (i) {
                        var o = 0 === t.length ? e : h()(e).call(e, t[0], t[1] + 1),
                            a = null === n ? null : h()(e).call(e, n[0], n[1] + 1);
                        r.resolve({initSegmentRes: o, sidxSegmentRes: a})
                    } else ;
                    return r
                }
            }, {
                key: "checkIfExistInList", value: function (e) {
                    for (var t = this._preloadManager._preloadDataList, n = 0; n < t.length; n++) if (e === t[n].data.vid) return !0;
                    return !1
                }
            }, {
                key: "addPreloader", value: function (e, t) {
                    if (e.data) {
                        e.data.vtype || (e.data.vtype = Ce.l0.DASH);
                        var n = e.data.vid, r = this.checkIfExistInList(n);
                        this.logger("[Preloader-Dash] addPreloader checkIfExistInList", n, r), t && n === t || r || this.addDashPreloader(e)
                    }
                }
            }, {
                key: "addPreloaderList", value: function () {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0, n = 0; n < e.length; n++) this.addPreloader(e[n], t)
                }
            }, {
                key: "setUserSelectDefinition", value: function (e) {
                    this._preloadManager && (this._preloadManager.userDefinition = e)
                }
            }, {
                key: "getUserSelectDefinition", value: function () {
                    return this._preloadManager.userDefinition || null
                }
            }], [{
                key: "BitRateAdapter", get: function () {
                    return $e
                }, set: function (e) {
                    $e = e
                }
            }]), r
        }(Le);
        Qe.encryptUtils = Ke
    }, 38354: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return j
            }
        });
        var r = n(19623),
            i = (n(66992), n(41539), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(18264), n(74916), n(15306), n(39714), n(69600), n(54747), n(9653), n(56977), n(88674), n(17727), n(23123), n(90149)),
            o = n.n(i), a = n(94198), s = n.n(a), u = n(3649), d = n.n(u), c = n(81643), l = n.n(c), f = n(31238),
            h = n.n(f), v = n(54903), p = n.n(v), g = n(93476), _ = n.n(g), y = n(51942), m = n.n(y), b = n(86902),
            w = n.n(b), x = n(77766), S = n.n(x), T = (n(47042), n(19601), n(47941), n(92222), function (e) {
                return e && e.Math == Math && e
            }),
            P = T("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || T("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || T("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || T("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var j = {
            ArrayBufferToString: function (e) {
                for (var t = "", n = new Uint8Array(e), r = 0; r < n.length; r++) t += String.fromCharCode(n[r]);
                return t
            }, StringToArrayBuffer: function (e) {
                for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
                return t
            }, Base64ToHex: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = window.atob(e.replace(/-/g, "+").replace(/_/g, "/"));
                if (t) {
                    for (var r = [], i = 0; i < n.length; i++) r.push(n.charCodeAt(i));
                    return new Uint8Array(r).buffer
                }
                for (var o = "", a = 0; a < n.length; a++) o += ("0" + n.charCodeAt(a).toString(16)).substr(-2);
                return o
            }, HexToBase64: function (e) {
                for (var t = "", n = 0; n < e.length; n += 2) t += String.fromCharCode(s()(e.substr(n, 2), 16));
                return window.btoa(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }, padStart: function (e, t, n) {
                for (var r = String(n), i = t >> 0, o = Math.ceil(i / r.length), a = [], s = String(e); o--;) a.push(r);
                return a.join("").substring(0, i - s.length) + s
            }, durationConvert: function (e) {
                var t = 0, n = 0, r = 0;
                return e = d()(e).call(e, l()(e).call(e, "PT") + 2), l()(e).call(e, "H") > -1 && l()(e).call(e, "M") > -1 && l()(e).call(e, "S") > -1 ? (t = h()(d()(e).call(e, 0, l()(e).call(e, "H"))), n = h()(d()(e).call(e, l()(e).call(e, "H") + 1, l()(e).call(e, "M"))), r = h()(d()(e).call(e, l()(e).call(e, "M") + 1, l()(e).call(e, "S")))) : l()(e).call(e, "H") > -1 && l()(e).call(e, "M") > -1 && l()(e).call(e, "S") < 0 ? (t = h()(d()(e).call(e, 0, l()(e).call(e, "H"))), n = h()(d()(e).call(e, l()(e).call(e, "H") + 1, l()(e).call(e, "M")))) : l()(e).call(e, "H") < 0 && l()(e).call(e, "M") > -1 && l()(e).call(e, "S") > -1 ? (n = h()(d()(e).call(e, 0, l()(e).call(e, "M"))), r = h()(d()(e).call(e, l()(e).call(e, "M") + 1, l()(e).call(e, "S")))) : l()(e).call(e, "H") > -1 && l()(e).call(e, "M") < 0 && l()(e).call(e, "S") > -1 ? (t = h()(d()(e).call(e, 0, l()(e).call(e, "H"))), r = h()(d()(e).call(e, l()(e).call(e, "H") + 1, l()(e).call(e, "S")))) : l()(e).call(e, "H") < 0 && l()(e).call(e, "M") < 0 && l()(e).call(e, "S") > -1 ? r = h()(d()(e).call(e, 0, l()(e).call(e, "S"))) : l()(e).call(e, "H") < 0 && l()(e).call(e, "M") > -1 && l()(e).call(e, "S") < 0 && (n = h()(d()(e).call(e, 0, l()(e).call(e, "M")))), 3600 * t + 60 * n + r
            }, preFixInterge: function (e, t) {
                var n;
                return d()(n = Array(t).join(0) + e).call(n, -t)
            }, toHex: function () {
                for (var e = [], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n.forEach((function (t) {
                    e.push(p()(j).call(j, Number(t).toString(16), 2, 0))
                })), e
            }, sum: function () {
                for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return n.forEach((function (t) {
                    e += t
                })), e
            }, toUTF8: function (e) {
                for (var t = encodeURIComponent(e), n = unescape(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
                return r.buffer
            }, fromHex: function (e) {
                for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2) t[n / 2] = s()(e.substr(n, 2), 16);
                return t
            }, fromCharCode: function (e) {
                for (var t = "", n = 0; n < e.length; n += 16e3) {
                    var r = e.subarray(n, n + 16e3);
                    t += String.fromCharCode.apply(null, r)
                }
                return t
            }, toBase64: function (e, t) {
                var n = j.fromCharCode(e);
                t = void 0 === t || t;
                var r = window.btoa(n).replace(/\+/g, "-").replace(/\//g, "_");
                return t ? r : r.replace(/=*$/, "")
            }, str2hex: function (e) {
                if ("" === e) return "";
                for (var t = [], n = 0; n < e.length; n++) t.push(e.charCodeAt(n));
                return t
            }, bufferToString: function (e) {
                var t;
                return d()(t = "0" + Number(e).toString(16)).call(t, -2).toUpperCase()
            }, stringToBuffer: function (e) {
                for (var t = [], n = 0; n < e.length; n += 2) t.push(s()(e[n] + e[n + 1], 16));
                return new Uint8Array(t)
            }, round: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return Number(e.toFixed(t))
            }, isSogou: function () {
                var e, t = window.navigator.userAgent;
                return l()(e = t.toLowerCase()).call(e, "metasr") > -1
            }, isEdge: function () {
                var e = window.navigator.userAgent.toLowerCase();
                return l()(e).call(e, "edge") > -1 || l()(e).call(e, "edg/") > -1
            }, offInDestroy: function (e, t, n, r) {
                e.once(r, (function i() {
                    e.off(t, n), e.off(r, i)
                }))
            }, on: function (e, t, n, r) {
                if (r) e.on(t, n), j.offInDestroy(e, t, n, r); else {
                    e.on(t, (function r(i) {
                        n(i), e.off(t, r)
                    }))
                }
            }, once: function (e, t, n, r) {
                if (r) e.once(t, n), j.offInDestroy(e, t, n, r); else {
                    e.once(t, (function r(i) {
                        n(i), e.off(t, r)
                    }))
                }
            }, promisePolyfill: function () {
                _().prototype.finally || (_().prototype.finally = {
                    finally: function (e) {
                        var t = function (t) {
                            return _().resolve(e()).then(t)
                        };
                        return this.then((function (e) {
                            return t((function () {
                                return e
                            }))
                        }), (function (e) {
                            return t((function () {
                                return _().reject(e)
                            }))
                        }))
                    }
                }.finally)
            }, transformHeaders: function (e, t) {
                var n = m()({}, e);
                return w()(t).forEach((function (r) {
                    var i = t[r];
                    e && e[r] && (n[i] = e[r], delete n[r])
                })), n
            }, generateUniqueKey: function (e) {
                var t, n, r, i, o, a, s, u, d, c, l, f = e.vid, h = e.start, v = e.end, p = e.mediaType,
                    g = e.definition, _ = e.codecType, y = e.format;
                return h = h || 0, v = v || 0, _ = _ || "h264", y = y || "dash", f && p ? g ? S()(t = S()(n = S()(r = S()(i = S()(o = S()(a = "".concat(f, "#")).call(a, p, "#")).call(o, g, "#")).call(i, h, "#")).call(r, v, "#")).call(n, _, "#")).call(t, y) : S()(s = S()(u = S()(d = S()(c = S()(l = "".concat(f, "#")).call(l, p, "#")).call(c, h, "#")).call(d, v, "#")).call(u, _, "#")).call(s, y) : null
            }, getDefinition: function (e) {
                if (!e) return null;
                var t = e.split("#");
                return t.length > 2 ? t[2] : null
            }, exchangeListUrl: function (e) {
                if (e && 0 !== e.length) for (var t = 0; t < e.length; t++) j.exchangeUrl(e[t])
            }, exchangeUrl: function (e) {
                if (e && e.main_url && e.backup_url_1) {
                    var t = e.main_url, n = e.backup_url_1, r = t.split("?");
                    2 === r.length && -1 === l()(n).call(n, "?") ? (e.main_url = n + "?" + r[1], e.backup_url_1 = r[0]) : (e.main_url = n, e.backup_url_1 = t)
                }
            }, validateFragment: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (e instanceof ArrayBuffer) {
                    try {
                        var n = new Uint8Array(e, 4, 4), r = String.fromCharCode.apply(null, n);
                        if (2 === t.length) {
                            var i = t[1] - t[0] + 1;
                            if (!(e.byteLength === i)) return
                        }
                        if ("moof" !== r && "styp" !== r && "ftyp" !== r) return !1
                    } catch (e) {
                        return !1
                    }
                    return !0
                }
                return !1
            }, validateUrlRange: function (e, t) {
                var n = e || [];
                if (n.length > 0 && t) for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (/([0-9.\-A-Za-z]+)/.test(i) && l()(t).call(t, i) > -1) return !0
                }
                return !1
            }, nowTime: function () {
                try {
                    return s()(performance.now(), 10)
                } catch (e) {
                    return (new Date).getTime()
                }
            }, getBitrateItem: function (e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i = t,
                    o = j.getSelectorList(e, n),
                    a = i.getSuitableBitrate ? i.getSuitableBitrate(o, r) : i.bitRateAdapter.select(o);
                return a
            }, getSelectorList: function (e, t) {
                for (var n = e.dynamic_video_list, r = [], i = 0; i < n.length; i++) {
                    var o = n[i];
                    r.push({bitrate: o.bitrate, definition: o.definition, duration: t})
                }
                return r
            }
        }
    }, 65046: function (e, t, n) {
        n.r(t), n.d(t, {
            AV1MimeTypes: function () {
                return w
            }, checkWebAssemblySupport: function () {
                return m
            }, getDrmServerUrl: function () {
                return k
            }, isAV1Supported: function () {
                return S
            }, isCodecSupported: function () {
                return x
            }, isEMESupported: function () {
                return T
            }, isEncryptSupported: function () {
                return j
            }, isSupported: function () {
                return P
            }
        });
        var r = n(19623),
            i = (n(74916), n(64765), n(95206), n(66992), n(41539), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(90149)),
            o = n.n(i), a = n(81643), s = n.n(a), u = n(93476), d = n.n(u), c = n(84825), l = (n(88674), n(94305)),
            f = function (e) {
                return e && e.Math == Math && e
            },
            h = f("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || f("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || f("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || f("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function v() {
            var e = window.navigator.userAgent, t = s()(e).call(e, "MSIE "), n = s()(e).call(e, "Trident/");
            return t > 0 || n > 0
        }

        function p() {
            var e, t = window.navigator.userAgent;
            return s()(e = t.toLowerCase()).call(e, "qqbrowser") > -1
        }

        function g() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }

        function _() {
            var e;
            return s()(e = navigator.userAgent).call(e, "Edge") > 0
        }

        function y() {
            var e, t, n, r = g(), i = v(),
                o = (n = window.navigator.userAgent, !(s()(e = window.location.search).call(e, "firefox_dash=true") > -1 || l.Z.getItem("firefox_dash")) && s()(t = n.toLowerCase()).call(t, "firefox") > -1),
                a = _();
            return r || i || o || a
        }

        function m() {
            try {
                if ("object" === ("undefined" == typeof WebAssembly ? "undefined" : (0, c.Ac)(WebAssembly)) && "function" == typeof WebAssembly.instantiate) {
                    var e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                    if (e instanceof WebAssembly.Module) return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
                }
            } catch (e) {
                console.log(e)
            }
            return !1
        }

        function b() {
            var e = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
            return e && "function" == typeof e.isTypeSupported
        }

        h.globalThis = h, h.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var w = ['video/mp4; codecs="av01.0.01M.08,mp4a.40.5"'];

        function x(e) {
            if (!b()) return !1;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (MediaSource.isTypeSupported(n)) return !0
            }
            return !1
        }

        function S() {
            return x(w)
        }

        function T() {
            return !!navigator.requestMediaKeySystemAccess && !y()
        }

        function P() {
            return m() && b() && !v()
        }

        function j() {
            return m() && b() && !v() && !p()
        }

        function k(e) {
            return new (d())((function (t, n) {
                m() && b() && navigator.requestMediaKeySystemAccess || t(void 0);
                g();
                var r, i = s()(r = navigator.userAgent.toLowerCase()).call(r, "chrome") > -1, o = _();
                i && !p() ? navigator.requestMediaKeySystemAccess("com.widevine.alpha", [{
                    initDataTypes: ["keyids", "webm"],
                    audioCapabilities: [{contentType: 'audio/mp4; codecs="mp4a.40.2"'}],
                    videoCapabilities: [{contentType: 'video/mp4; codecs="avc1.42c01e"'}]
                }]).then((function (n) {
                    t("https://".concat(e, "/video/drm/v1/widevine?aid=32&kid="))
                }), (function () {
                    t(void 0)
                })) : t(o ? "https://".concat(e, "/video/drm/v1/playready?aid=32&kid=") : void 0)
            }))
        }
    }, 57073: function (e, t, n) {
        n.d(t, {
            qu: function () {
                return _
            }, ZP: function () {
                return m
            }, jl: function () {
                return S
            }
        });
        var r = n(19623), i = (n(74916), n(64765), n(90149)), o = n.n(i), a = n(81643), s = n.n(a), u = n(78580),
            d = n.n(u), c = n(77766), l = n.n(c), f = (n(26699), n(92222), n(94305)), h = n(33125), v = function (e) {
                return e && e.Math == Math && e
            },
            p = v("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || v("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || v("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || v("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var g,
            _ = "undefined" != typeof window && (s()(g = window.location.search).call(g, "log=true") > -1 || !!f.Z.getItem("abrdebug") || !!f.Z.getItem("playerlog"));
        var y = new h.Y("Logger", {logCacheLevel: h._.DEBUG, disabled: !_}), m = {}, b = ["abr"], w = function (e) {
            d()(b).call(b, e) ? m[e] = _ ? function () {
                for (var t, n, r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                (n = console).log.apply(n, l()(t = ["[".concat(e, "]"), (new Date).toLocaleString()]).call(t, i))
            } : function () {
            } : m[e] = function () {
                for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                y.log.apply(y, l()(t = ["[".concat(e, "]")]).call(t, r))
            }
        };
        for (var x in {
            log: "log",
            network: "network",
            abr: "abr",
            encrypt: "encrypt",
            segment: "segment",
            definition: "definition",
            content: "content",
            mse: "mse",
            media: "media",
            time: "time",
            preload: "preload",
            gap: "gap"
        }) w(x);

        function S() {
            return y
        }
    }, 69385: function (e, t, n) {
        n.d(t, {
            N: function () {
                return u
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = function (e) {
                return e && e.Math == Math && e
            },
            s = a("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function u(e) {
            e.duration = e.dashOpts.Data.Duration, e.dashOpts.dynamic_video = e.dashOpts.Data, e.dashOpts.dynamic_video.dynamic_video_list = [], e.dashOpts.dynamic_video.dynamic_audio_list = [], e.dashOpts.dynamic_video.dynamic_type = e.dashOpts.Data.AdaptiveInfo.AdaptiveType, e.dashOpts.dynamic_video.main_url = e.dashOpts.Data.AdaptiveInfo.MainPlayUrl;
            for (var t = 0; t < e.dashOpts.Data.PlayInfoList.length; t++) {
                var n = e.dashOpts.Data.PlayInfoList[t], r = {
                    backup_url_1: n.BackupPlayUrl,
                    bitrate: e.dashOpts.Data.VideoID ? n.Bitrate : 1e3 * n.Bitrate,
                    check_info: n.CheckInfo,
                    codec_type: n.Codec,
                    definition: n.Definition,
                    encrypt: !(!n.PlayAuth || !n.PlayAuthID && !n.PlayAuthId),
                    file_hash: n.FileHash || n.Md5,
                    file_id: n.FileID,
                    index_range: n.IndexRange,
                    init_range: n.InitRange,
                    kid: n.PlayAuthID || n.PlayAuthId,
                    logo_type: n.Logo || n.LogoType,
                    main_url: n.MainPlayUrl,
                    preload_interval: n.PreloadInterval,
                    preload_max_step: n.PreloadMaxStep,
                    preload_min_step: n.PreloadMinStep,
                    preload_size: n.PreloadSize,
                    quality: n.Quality,
                    size: n.Size,
                    spade_a: n.PlayAuth,
                    vheight: n.Height,
                    vtype: n.Format,
                    vwidth: n.Width
                };
                "video" === n.MediaType || "video" === n.FileType ? e.dashOpts.dynamic_video.dynamic_video_list.push(r) : "audio" !== n.MediaType && "audio" !== n.FileType || e.dashOpts.dynamic_video.dynamic_audio_list.push(r)
            }
        }

        s.globalThis = s, s.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }
    }, 95791: function (e, t, n) {
        n.d(t, {
            l0: function () {
                return d
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = n(56644), s = function (e) {
                return e && e.Math == Math && e
            },
            u = s("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || s("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || s("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || s("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var d = a.l0
    }, 56644: function (e, t, n) {
        n.d(t, {
            Rr: function () {
                return h
            }, x7: function () {
                return v
            }, w_: function () {
                return f
            }, wW: function () {
                return l
            }, CN: function () {
                return u
            }, LB: function () {
                return d
            }, PO: function () {
                return c
            }, l0: function () {
                return p
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = function (e) {
                return e && e.Math == Math && e
            },
            s = a("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var u = "PRELOAD_NEXT", d = "PRELOAD_SEG_DONE",
            c = {PREPARE: "PREPARE", IDLE: "IDLE", PRELOADING: "PRELOADING", FINISH: "FINISH"}, l = "ONE_STEP_DONE",
            f = {VIDEO: 0, AUDIO: 1, MIXED: 2}, h = {INDEXDB: 0, MEMORY: 1}, v = {FAIL: -1, SUCCESS: 0, DOWNLOADING: 1},
            p = {MP4: "MP4", DASH: "DASH", HLS: "HLS"}
    }, 94305: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return f
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = n(81643), s = n.n(a), u = (n(82772), function (e) {
                return e && e.Math == Math && e
            }),
            d = u("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || u("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || u("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || u("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var c = l && !function () {
            var e = "_localstorage_support_test";
            try {
                return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
            } catch (e) {
                return !0
            }
        }();

        function l() {
            try {
                return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
            } catch (e) {
                return !1
            }
        }

        var f = {
            length: c ? localStorage.length : 0, clear: function (e) {
                try {
                    for (var t = localStorage.length - 1; t >= 0; t--) {
                        var n = localStorage.key(t);
                        0 === s()(n).call(n, e) && localStorage.removeItem(n)
                    }
                } catch (e) {
                }
            }, getItem: function (e) {
                try {
                    return localStorage.getItem(e)
                } catch (e) {
                    return null
                }
            }, key: function (e) {
                try {
                    return localStorage.key(e)
                } catch (e) {
                    return null
                }
            }, setItem: function (e, t) {
                try {
                    localStorage.setItem(e, t)
                } catch (e) {
                }
            }, removeItem: function (e) {
                try {
                    localStorage.removeItem(e)
                } catch (e) {
                }
            }, isSupport: c
        }
    }, 59941: function (e, t, n) {
        n.d(t, {
            Z: function () {
                return f
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = n(93476), s = n.n(a), u = n(15671), d = n(43144),
            c = (n(41539), n(88674), function (e) {
                return e && e.Math == Math && e
            }),
            l = c("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || c("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || c("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || c("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        l.globalThis = l, l.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var f = function () {
            function e() {
                var t, n;
                (0, u.Z)(this, e);
                var r = new (s())((function (e, r) {
                    t = e, n = r
                }));
                return r.resolve = t, r.reject = n, r
            }

            return (0, d.Z)(e, [{
                key: "resolve", value: function (e) {
                }
            }, {
                key: "reject", value: function (e) {
                }
            }]), e
        }()
    }, 21737: function (e, t, n) {
        n.d(t, {
            Lc: function () {
                return se
            }, x: function () {
                return G
            }, PA: function () {
                return Y
            }, qH: function () {
                return Q
            }, sf: function () {
                return he
            }, WY: function () {
                return de
            }, _x: function () {
                return J
            }, U2: function () {
                return le
            }, IP: function () {
                return te
            }, XW: function () {
                return ee
            }, Zj: function () {
                return z
            }, Kd: function () {
                return ae
            }, l5: function () {
                return q
            }, Ac: function () {
                return V
            }, wm: function () {
                return oe
            }
        });
        var r = n(19623), i = (n(41539), n(54747), n(68309), n(39714), n(74916), n(9653), n(90149)), o = n.n(i),
            a = n(86902), s = n.n(a), u = n(14310), d = n.n(u), c = n(20116), l = n.n(c), f = n(34074), h = n.n(f),
            v = n(39649), p = n.n(v), g = n(65420), _ = n.n(g), y = n(21611), m = n.n(y), b = n(85507), w = n.n(b),
            x = n(93476), S = n.n(x), T = n(3649), P = n.n(T), j = n(98341), k = n.n(j), E = n(1068), I = n.n(E),
            L = n(81643), C = n.n(L), R = n(39392), A = n.n(R), D = n(62734), Z = n.n(D), M = n(66419), O = n.n(M),
            N = n(19996), F = n.n(N), U = n(28032), B = n.n(U), X = function (e) {
                return e && e.Math == Math && e
            },
            K = X("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || X("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || X("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || X("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function H(e, t) {
            var n = s()(e);
            if (d()) {
                var r = d()(e);
                t && (r = l()(r).call(r, (function (t) {
                    return h()(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach((function (t) {
                    J(e, t, n[t])
                })) : p() ? Object.defineProperties(e, p()(n)) : H(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, h()(n, t))
                }))
            }
            return e
        }

        function q() {
            q = function () {
                return e
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, i = Object.defineProperty || function (e, t, n) {
                    e[t] = n.value
                }, o = "function" == typeof _() ? _() : {}, a = o.iterator || "@@iterator",
                s = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";

            function d(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                d({}, "")
            } catch (e) {
                d = function (e, t, n) {
                    return e[t] = n
                }
            }

            function c(e, t, n, r) {
                var o = t && t.prototype instanceof h ? t : h, a = Object.create(o.prototype), s = new C(r || []);
                return i(a, "_invoke", {value: k(e, n, s)}), a
            }

            function l(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            e.wrap = c;
            var f = {};

            function h() {
            }

            function v() {
            }

            function p() {
            }

            var g = {};
            d(g, a, (function () {
                return this
            }));
            var y = m(), b = y && y(y(R([])));
            b && b !== t && n.call(b, a) && (g = b);
            var x = p.prototype = h.prototype = Object.create(g);

            function T(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    d(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function j(e, t) {
                function o(i, a, s, u) {
                    var d = l(e[i], e, a);
                    if ("throw" !== d.type) {
                        var c = d.arg, f = c.value;
                        return f && "object" == (0, r.Z)(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                            o("next", e, s, u)
                        }), (function (e) {
                            o("throw", e, s, u)
                        })) : t.resolve(f).then((function (e) {
                            c.value = e, s(c)
                        }), (function (e) {
                            return o("throw", e, s, u)
                        }))
                    }
                    u(d.arg)
                }

                var a;
                i(this, "_invoke", {
                    value: function (e, n) {
                        function r() {
                            return new t((function (t, r) {
                                o(e, n, t, r)
                            }))
                        }

                        return a = a ? a.then(r, r) : r()
                    }
                })
            }

            function k(e, t, n) {
                var r = "suspendedStart";
                return function (i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return {value: void 0, done: !0}
                    }
                    for (n.method = i, n.arg = o; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = E(a, n);
                            if (s) {
                                if (s === f) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                            return {value: u.arg, done: n.done}
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                    }
                }
            }

            function E(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
                var i = l(r, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, f;
                var o = i.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
            }

            function I(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function L(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function C(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(I, this), this.reset(!0)
            }

            function R(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, i = function t() {
                            for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return i.next = i
                    }
                }
                return {next: A}
            }

            function A() {
                return {value: void 0, done: !0}
            }

            return v.prototype = p, i(x, "constructor", {value: p, configurable: !0}), i(p, "constructor", {
                value: v,
                configurable: !0
            }), v.displayName = d(p, u, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return w() ? w()(e, p) : (e.__proto__ = p, d(e, u, "GeneratorFunction")), e.prototype = Object.create(x), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, T(j.prototype), d(j.prototype, s, (function () {
                return this
            })), e.AsyncIterator = j, e.async = function (t, n, r, i, o) {
                void 0 === o && (o = S());
                var a = new j(c(t, n, r, i), o);
                return e.isGeneratorFunction(n) ? a : a.next().then((function (e) {
                    return e.done ? e.value : a.next()
                }))
            }, T(x), d(x, u, "Generator"), d(x, a, (function () {
                return this
            })), d(x, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = R, C.prototype = {
                constructor: C, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(L), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+P()(t).call(t, 1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i], a = o.completion;
                        if ("root" === o.tryLoc) return r("end");
                        if (o.tryLoc <= this.prev) {
                            var s = n.call(o, "catchLoc"), u = n.call(o, "finallyLoc");
                            if (s && u) {
                                if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), f
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                L(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: R(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), f
                }
            }, e
        }

        function V(e) {
            return (V = "function" == typeof _() && "symbol" == typeof k() ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof _() && e.constructor === _() && e !== _().prototype ? "symbol" : typeof e
            })(e)
        }

        function W(e, t, n, r, i, o, a) {
            try {
                var s = e[o](a), u = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(u) : S().resolve(u).then(r, i)
        }

        function G(e) {
            return function () {
                var t = this, n = arguments;
                return new (S())((function (r, i) {
                    var o = e.apply(t, n);

                    function a(e) {
                        W(o, r, i, a, s, "next", e)
                    }

                    function s(e) {
                        W(o, r, i, a, s, "throw", e)
                    }

                    a(void 0)
                }))
            }
        }

        function Y(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function $(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ve(r.key), r)
            }
        }

        function Q(e, t, n) {
            return t && $(e.prototype, t), n && $(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function J(e, t, n) {
            return (t = ve(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function ee(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && ne(e, t)
        }

        function te(e) {
            return (te = w() ? m().bind() : function (e) {
                return e.__proto__ || m()(e)
            })(e)
        }

        function ne(e, t) {
            return (ne = w() ? w().bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function re() {
            if ("undefined" == typeof Reflect || !I()) return !1;
            if (I().sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(I()(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }

        function ie(e, t, n) {
            return (ie = re() ? I().bind() : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r));
                return n && ne(i, n.prototype), i
            }).apply(null, arguments)
        }

        function oe(e) {
            var t = "function" == typeof A() ? new (A()) : void 0;
            return oe = function (e) {
                if (null === e || (n = e, -1 === C()(r = Function.toString.call(n)).call(r, "[native code]"))) return e;
                var n, r;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, i)
                }

                function i() {
                    return ie(e, arguments, te(this).constructor)
                }

                return i.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), ne(i, e)
            }, oe(e)
        }

        function ae(e, t) {
            if (null == e) return {};
            var n, r, i = function (e, t) {
                if (null == e) return {};
                var n, r, i = {}, o = s()(e);
                for (r = 0; r < o.length; r++) n = o[r], C()(t).call(t, n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (d()) {
                var o = d()(e);
                for (r = 0; r < o.length; r++) n = o[r], C()(t).call(t, n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function se(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function ue(e, t) {
            if (t && ("object" === (0, r.Z)(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return se(e)
        }

        function de(e) {
            var t = re();
            return function () {
                var n, r = te(e);
                if (t) {
                    var i = te(this).constructor;
                    n = I()(r, arguments, i)
                } else n = r.apply(this, arguments);
                return ue(this, n)
            }
        }

        function ce(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = te(e));) ;
            return e
        }

        function le() {
            return le = "undefined" != typeof Reflect && Z() ? Z().bind() : function (e, t, n) {
                var r = ce(e, t);
                if (r) {
                    var i = h()(r, t);
                    return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                }
            }, le.apply(this, arguments)
        }

        function fe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function he(e, t) {
            var n = void 0 !== _() && F()(e) || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                    var n;
                    if (e) {
                        if ("string" == typeof e) return fe(e, t);
                        var r = P()(n = Object.prototype.toString.call(e)).call(n, 8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? O()(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? fe(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, i = function () {
                    };
                    return {
                        s: i, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function ve(e) {
            var t = function (e, t) {
                if ("object" !== (0, r.Z)(e) || null === e) return e;
                var n = e[B()];
                if (void 0 !== n) {
                    var i = n.call(e, t || "default");
                    if ("object" !== (0, r.Z)(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === (0, r.Z)(t) ? t : String(t)
        }

        K.globalThis = K, K.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }
    }, 84930: function (e, t, n) {
        n.d(t, {
            K: function () {
                return u
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = function (e) {
                return e && e.Math == Math && e
            },
            s = a("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var u = {
            ERROR: "error",
            TTFB: "core.ttfb",
            LOAD_START: "core.loadstart",
            LOAD_RESPONSE_HEADERS: "core.loadresponseheaders",
            LOAD_COMPLETE: "core.loadcomplete",
            LOAD_RETRY: "core.loadretry",
            SOURCEBUFFER_CREATED: "core.sourcebuffercreated",
            ANALYZE_DURATION_EXCEEDED: "core.analyzedurationexceeded",
            REMOVE_BUFFER: "core.removebuffer",
            BUFFEREOS: "core.buffereos",
            KEYFRAME: "core.keyframe",
            METADATA_PARSED: "core.metadataparsed",
            SEI: "core.sei",
            SEI_IN_TIME: "core.seiintime",
            FLV_SCRIPT_DATA: "core.flvscriptdata",
            LOWDECODE: "core.lowdecode",
            SWITCH_URL_SUCCESS: "core.switchurlsuccess",
            SWITCH_URL_FAILED: "core.switchurlfailed",
            SPEED: "core.speed",
            HLS_MANIFEST_LOADED: "core.hlsmanifestloaded",
            HLS_LEVEL_LOADED: "core.hlslevelloaded",
            DEMUXED_TRACK: "demuxedtrack",
            STREAM_EXCEPTION: "core.streamexception",
            LARGE_AV_FIRST_FRAME_GAP_DETECT: "LARGE_AV_FIRST_FRAME_GAP_DETECT",
            LARGE_VIDEO_DTS_GAP_DETECT: "LARGE_VIDEO_DTS_GAP_DETECT",
            LARGE_AUDIO_DTS_GAP_DETECT: "LARGE_AUDIO_DTS_GAP_DETECT",
            AUDIO_GAP_DETECT: "AUDIO_GAP_DETECT",
            AUDIO_OVERLAP_DETECT: "AUDIO_OVERLAP_DETECT",
            MAX_DTS_DELTA_WITH_NEXT_SEGMENT_DETECT: "MAX_DTS_DELTA_WITH_NEXT_SEGMENT_DETECT",
            REAL_TIME_SPEED: "real_time_speed"
        }
    }, 33125: function (e, t, n) {
        n.d(t, {
            _: function () {
                return h
            }, Y: function () {
                return v
            }
        });
        var r = n(19623), i = (n(68309), n(69600), n(90149)), o = n.n(i), a = n(77766), s = n.n(a), u = n(59340),
            d = n.n(u), c = n(21737), l = (n(92222), n(38862), function (e) {
                return e && e.Math == Math && e
            }),
            f = l("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || l("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || l("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || l("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var h = {DEBUG: 1, LOG: 2, WARN: 3, ERROR: 4}, v = function () {
            function e(t, n) {
                (0, c.PA)(this, e), this.name = t || "", this._prefix = "[".concat(this.name, "]"), e.disabled = (null == n ? void 0 : n.disabled) || !0, this.logCacheLevel = (null == n ? void 0 : n.logCacheLevel) || 0, this.logMaxSize = (null == n ? void 0 : n.logMaxSize) || 204800, this.logSize = 0, this.logTextArray = []
            }

            return (0, c.qH)(e, [{
                key: "debug", value: function () {
                    for (var t, n, r, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    this.logCache.apply(this, s()(t = [h.DEBUG]).call(t, o)), e.disabled || (r = console).debug.apply(r, s()(n = [this._prefix, p()]).call(n, o))
                }
            }, {
                key: "log", value: function () {
                    for (var t, n, r, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    this.logCache.apply(this, s()(t = [h.LOG]).call(t, o)), e.disabled || (r = console).log.apply(r, s()(n = [this._prefix, p()]).call(n, o))
                }
            }, {
                key: "warn", value: function () {
                    for (var t, n, r, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    this.logCache.apply(this, s()(t = [h.WARN]).call(t, o)), e.disabled || (r = console).warn.apply(r, s()(n = [this._prefix, p()]).call(n, o))
                }
            }, {
                key: "error", value: function () {
                    for (var t, n, r, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    this.logCache.apply(this, s()(t = [h.ERROR]).call(t, o)), e.disabled || (r = console).error.apply(r, s()(n = [this._prefix, p()]).call(n, o))
                }
            }, {
                key: "logCache", value: function (e) {
                    if (!(e < this.logCacheLevel)) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        var i = this._prefix + p() + d()(n);
                        if (e >= this.logCacheLevel && (this.logSize += i.length, this.logTextArray.push(i)), this.logSize > this.logMaxSize) {
                            var o = this.logTextArray.shift();
                            this.logSize -= o.length
                        }
                    }
                }
            }, {
                key: "getLogCache", value: function () {
                    var e = this.logTextArray.join("\n");
                    return this.logTextArray = [], e
                }
            }, {
                key: "table", value: function () {
                    var t;
                    e.disabled || (console.group(this._prefix), (t = console).table.apply(t, arguments), console.groupEnd())
                }
            }, {
                key: "setLogLevel", value: function (e) {
                    this.logCacheLevel = e
                }
            }], [{
                key: "enable", value: function () {
                    e.disabled = !1
                }
            }, {
                key: "disable", value: function () {
                    e.disabled = !0
                }
            }]), e
        }();

        function p() {
            return (new Date).toLocaleString()
        }

        (0, c._x)(v, "disabled", !0)
    }, 26732: function (e, t, n) {
        n.d(t, {
            mf: function () {
                return me
            }
        });
        var r = n(19623), i = (n(66992), n(41539), n(88674), n(78783), n(33948), n(17727), n(74916), n(90149)),
            o = n.n(i), a = n(51942), s = n.n(a), u = n(77766), d = n.n(u), c = n(2991), l = n.n(c), f = n(93476),
            h = n.n(f), v = n(20116), p = n.n(v), g = n(21737),
            _ = (n(19601), n(92222), n(21249), n(57327), n(82472), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(3649)),
            y = n.n(_), m = (n(38012), n(37380), n(1118), n(47042), n(4217)), b = function (e) {
                return e && e.Math == Math && e
            },
            w = b("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || b("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || b("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || b("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var x = function (e) {
                (0, g.XW)(n, e);
                var t = (0, g.WY)(n);

                function n(e, r, i, o) {
                    var a;
                    return (0, g.PA)(this, n), a = t.call(this, o), (0, g._x)((0, g.Lc)(a), "retryCount", 0), (0, g._x)((0, g.Lc)(a), "isTimeout", !1), (0, g._x)((0, g.Lc)(a), "loaderType", m.t.FETCH), (0, g._x)((0, g.Lc)(a), "startTime", 0), (0, g._x)((0, g.Lc)(a), "endTime", 0), (0, g._x)((0, g.Lc)(a), "options", {}), a.url = e, a.request = r, a.response = i, a
                }

                return (0, g.qH)(n)
            }((0, g.wm)(Error)), S = (n(15306), n(69600), n(86902)), T = n.n(S), P = n(59340), j = n.n(P), k = n(81643),
            E = n.n(k), I = n(31238), L = n.n(I), C = n(94198), R = n.n(C), A = n(98926), D = n.n(A),
            Z = (n(47941), n(38862), n(44048), n(9653), n(21611)), M = n.n(Z), O = (n(30489), function (e) {
                return e && e.Math == Math && e
            }),
            N = O("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || O("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || O("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || O("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var F = Object.prototype.toString;

        function U(e) {
            if ("[object Object]" !== F.call(e)) return !1;
            var t = M()(e);
            return null === t || t === Object.prototype
        }

        var B = function (e) {
                return e && e.Math == Math && e
            },
            X = B("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || B("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || B("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || B("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function K(e) {
            if (e && null !== e[0] && void 0 !== e[0] && (0 !== e[0] || null !== e[1] && void 0 !== e[1])) {
                var t = "bytes=" + e[0] + "-";
                return e[1] && (t += e[1]), t
            }
        }

        function H(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        function z(e, t) {
            var n, r;
            if (e) {
                if (!t) return e;
                var i, o = p()(n = l()(r = T()(t)).call(r, (function (e) {
                    if (null != (i = t[e])) return Array.isArray(i) ? e += "[]" : i = [i], l()(i).call(i, (function (t) {
                        var n, r;
                        return r = t, "[object Date]" === F.call(r) ? t = t.toISOString() : function (e) {
                            return null !== e && "object" === (0, g.Ac)(e)
                        }(t) && (t = j()(t)), d()(n = "".concat(H(e), "=")).call(n, H(t))
                    })).join("&")
                }))).call(n, Boolean).join("&");
                if (o) {
                    var a = E()(e).call(e, "#");
                    -1 !== a && (e = y()(e).call(e, 0, a)), e += (-1 === E()(e).call(e, "?") ? "?" : "&") + o
                }
                return e
            }
        }

        function q(e, t, n, r, i, o, a, s, u, d, c) {
            return i = null != i ? L()(i) : null, r = R()(r || "0", 10), D()(r) && (r = 0), {
                data: e,
                done: t,
                option: {
                    range: u,
                    vid: d,
                    index: s,
                    contentLength: r,
                    age: i,
                    startTime: o,
                    firstByteTime: a,
                    endTime: Date.now(),
                    priOptions: c
                },
                response: n
            }
        }

        function V(e, t) {
            return Math.round(8 * e * 1e3 / t / 1024)
        }

        X.globalThis = X, X.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var W = n(84930), G = n(26729), Y = n.n(G), $ = function (e) {
                return e && e.Math == Math && e
            },
            Q = $("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || $("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || $("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || $("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var J = 2097152, ee = function (e) {
                (0, g.XW)(r, e);
                var t, n = (0, g.WY)(r);

                function r() {
                    var e;
                    return (0, g.PA)(this, r), e = n.call(this), (0, g._x)((0, g.Lc)(e), "_abortController", null), (0, g._x)((0, g.Lc)(e), "_timeoutTimer", null), (0, g._x)((0, g.Lc)(e), "_reader", null), (0, g._x)((0, g.Lc)(e), "_response", null), (0, g._x)((0, g.Lc)(e), "_aborted", !1), (0, g._x)((0, g.Lc)(e), "_index", -1), (0, g._x)((0, g.Lc)(e), "_range", null), (0, g._x)((0, g.Lc)(e), "_receivedLength", 0), (0, g._x)((0, g.Lc)(e), "_running", !1), (0, g._x)((0, g.Lc)(e), "_logger", null), (0, g._x)((0, g.Lc)(e), "_vid", ""), (0, g._x)((0, g.Lc)(e), "_onProcessMinLen", 0), (0, g._x)((0, g.Lc)(e), "_onCancel", null), (0, g._x)((0, g.Lc)(e), "_priOptions", null), e
                }

                return (0, g.qH)(r, [{
                    key: "load", value: function (e) {
                        var t, n = this, r = e.url, i = e.vid, o = e.timeout, a = e.responseType, s = e.onProgress,
                            u = e.index, d = e.onTimeout, c = e.onCancel, l = e.range, f = e.transformResponse,
                            v = e.request, p = e.params, _ = e.logger, y = e.method, b = e.headers, w = e.body, S = e.mode,
                            T = e.credentials, P = e.cache, j = e.redirect, k = e.referrer, E = e.referrerPolicy,
                            I = e.onProcessMinLen, L = e.priOptions;
                        this._logger = _, this._aborted = !1, this._onProcessMinLen = I, this._onCancel = c, this._abortController = "undefined" != typeof AbortController && new AbortController, this._running = !0, this._index = u, this._range = l || [0, 0], this._vid = i || r, this._priOptions = L || {};
                        var C = {
                            method: y,
                            headers: b,
                            body: w,
                            mode: S,
                            credentials: T,
                            cache: P,
                            redirect: j,
                            referrer: k,
                            referrerPolicy: E,
                            signal: null === (t = this._abortController) || void 0 === t ? void 0 : t.signal
                        }, R = !1;
                        clearTimeout(this._timeoutTimer), r = z(r, p);
                        var A = K(l);
                        A && (b = v ? v.headers : C.headers = C.headers || (Headers ? new Headers : {}), Headers && b instanceof Headers ? b.append("Range", A) : b.Range = A), o && (this._timeoutTimer = setTimeout((function () {
                            if (R = !0, n.cancel(), d) {
                                var e = new x(r, C, null, "timeout");
                                e.isTimeout = !0, d(e, {
                                    index: n._index,
                                    range: n._range,
                                    vid: n._vid,
                                    priOptions: n._priOptions
                                })
                            }
                        }), o));
                        var D = Date.now();
                        return this._logger.debug("[fetch load start], index,", u, ",range,", l), new (h())((function (e, t) {
                            fetch(v || r, v ? void 0 : C).then(function () {
                                var i = (0, g.x)((0, g.l5)().mark((function i(o) {
                                    var d, c, h, v;
                                    return (0, g.l5)().wrap((function (i) {
                                        for (; ;) switch (i.prev = i.next) {
                                            case 0:
                                                if (clearTimeout(n._timeoutTimer), n._response = o, !n._aborted && n._running) {
                                                    i.next = 4;
                                                    break
                                                }
                                                return i.abrupt("return");
                                            case 4:
                                                if (f && (o = f(o, r) || o), o.ok) {
                                                    i.next = 7;
                                                    break
                                                }
                                                throw new x(r, C, o, "bad network response");
                                            case 7:
                                                if (d = Date.now(), a !== m.U.TEXT) {
                                                    i.next = 15;
                                                    break
                                                }
                                                return i.next = 11, o.text();
                                            case 11:
                                                c = i.sent, n._running = !1, i.next = 37;
                                                break;
                                            case 15:
                                                if (a !== m.U.JSON) {
                                                    i.next = 22;
                                                    break
                                                }
                                                return i.next = 18, o.json();
                                            case 18:
                                                c = i.sent, n._running = !1, i.next = 37;
                                                break;
                                            case 22:
                                                if (!s) {
                                                    i.next = 29;
                                                    break
                                                }
                                                return n.resolve = e, n.reject = t, n._loadChunk(o, s, D, d), i.abrupt("return");
                                            case 29:
                                                return i.next = 31, o.arrayBuffer();
                                            case 31:
                                                c = i.sent, c = new Uint8Array(c), n._running = !1, h = Date.now() - D, v = V(c.byteLength, h), n.emit(W.K.REAL_TIME_SPEED, {
                                                    speed: v,
                                                    len: c.byteLength,
                                                    time: h,
                                                    vid: n._vid,
                                                    index: n._index,
                                                    range: n._range,
                                                    priOptions: n._priOptions
                                                });
                                            case 37:
                                                n._logger.debug("[fetch load end], index,", u, ",range,", l), e(q(c, !0, o, o.headers.get("Content-Length"), o.headers.get("age"), D, d, u, l, n._vid, n._priOptions));
                                            case 39:
                                            case"end":
                                                return i.stop()
                                        }
                                    }), i)
                                })));
                                return function (e) {
                                    return i.apply(this, arguments)
                                }
                            }()).catch((function (e) {
                                var i;
                                clearTimeout(n._timeoutTimer), n._running = !1, n._aborted && !R || ((e = e instanceof x ? e : new x(r, C, null, null === (i = e) || void 0 === i ? void 0 : i.message)).startTime = D, e.endTime = Date.now(), e.isTimeout = R, e.options = {
                                    index: n._index,
                                    range: n._range,
                                    vid: n._vid,
                                    priOptions: n._priOptions
                                }, t(e))
                            }))
                        }))
                    }
                }, {
                    key: "cancel", value: (t = (0, g.x)((0, g.l5)().mark((function e() {
                        return (0, g.l5)().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this._aborted) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this._aborted = !0, this._running = !1, !this._response) {
                                        e.next = 14;
                                        break
                                    }
                                    if (e.prev = 5, !this._reader) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 9, this._reader.cancel();
                                case 9:
                                    e.next = 13;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(5);
                                case 13:
                                    this._response = this._reader = null;
                                case 14:
                                    if (this._abortController) {
                                        try {
                                            this._abortController.abort()
                                        } catch (e) {
                                        }
                                        this._abortController = null
                                    }
                                    this._onCancel && this._onCancel({
                                        index: this._index,
                                        range: this._range,
                                        vid: this._vid,
                                        priOptions: this._priOptions
                                    });
                                case 16:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[5, 11]])
                    }))), function () {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "_loadChunk", value: function (e, t, n, r) {
                        var i = this;
                        if (!e.body || !e.body.getReader) {
                            this._running = !1;
                            var o = new x(e.url, "", e, "onProgress of bad response.body.getReader");
                            return o.options = {
                                index: this._index,
                                range: this._range,
                                vid: this._vid,
                                priOptions: this._priOptions
                            }, void this.reject(o)
                        }
                        this._onProcessMinLen > 0 && (this._cache = new Uint8Array(J), this._writeIdx = 0);
                        var a, s, u, d = this._reader = e.body.getReader(), c = function () {
                            var o = (0, g.x)((0, g.l5)().mark((function o() {
                                var l, f, h, v, p, _, m, b;
                                return (0, g.l5)().wrap((function (o) {
                                    for (; ;) switch (o.prev = o.next) {
                                        case 0:
                                            return s = Date.now(), o.prev = 1, o.next = 4, d.read();
                                        case 4:
                                            a = o.sent, u = Date.now(), o.next = 13;
                                            break;
                                        case 8:
                                            return o.prev = 8, o.t0 = o.catch(1), u = Date.now(), i._aborted || (i._running = !1, o.t0.options = {
                                                index: i._index,
                                                range: i._range,
                                                vid: i._vid,
                                                priOptions: i._priOptions
                                            }, i.reject(o.t0)), o.abrupt("return");
                                        case 13:
                                            if (f = (null === (l = i._range) || void 0 === l ? void 0 : l.length) > 0 ? i._range[0] : 0, h = f + i._receivedLength, !i._aborted) {
                                                o.next = 19;
                                                break
                                            }
                                            return i._running = !1, t(void 0, !1, {
                                                range: [h, h],
                                                vid: i._vid,
                                                index: i._index,
                                                startTime: s,
                                                endTime: u,
                                                st: n,
                                                firstByteTime: r,
                                                priOptions: i._priOptions
                                            }, e), o.abrupt("return");
                                        case 19:
                                            var g;
                                            if (v = a.value ? a.value.byteLength : 0, i._receivedLength += v, i._logger.debug("ã€fetchLoader,onProgress callã€‘,task,", i._range, ", start,", h, ", end,", f + i._receivedLength, ", done,", a.done), i._onProcessMinLen > 0) {
                                                if (i._writeIdx + v >= i._onProcessMinLen || a.done) (p = new Uint8Array(i._writeIdx + v)).set(y()(g = i._cache).call(g, 0, i._writeIdx), 0), v > 0 && p.set(a.value, i._writeIdx), i._writeIdx = 0, i._logger.debug("ã€fetchLoader,onProgress enoughã€‘,done,", a.done, ",len,", p.byteLength, ", writeIdx,", i._writeIdx); else if (v > 0 && i._writeIdx + v < J) i._cache.set(a.value, i._writeIdx), i._writeIdx += v, i._logger.debug("ã€fetchLoader,onProgress cacheã€‘,len,", v, ", writeIdx,", i._writeIdx); else if (v > 0) {
                                                    var w;
                                                    _ = new Uint8Array(i._writeIdx + v + 2048), i._logger.debug("ã€fetchLoader,onProgress extra startã€‘,size,", i._writeIdx + v + 2048, ", datalen,", v, ", writeIdx,", i._writeIdx), _.set(y()(w = i._cache).call(w, 0, i._writeIdx), 0), v > 0 && _.set(a.value, i._writeIdx), i._writeIdx += v, delete i._cache, i._cache = _, i._logger.debug("ã€fetchLoader,onProgress extra endã€‘,len,", v, ", writeIdx,", i._writeIdx)
                                                }
                                            } else p = a.value;
                                            (p && p.byteLength > 0 || a.done) && t(p, a.done, {
                                                range: [i._range[0] + i._receivedLength - (p ? p.byteLength : 0), i._range[0] + i._receivedLength],
                                                vid: i._vid,
                                                index: i._index,
                                                startTime: s,
                                                endTime: u,
                                                st: n,
                                                firstByteTime: r,
                                                priOptions: i._priOptions
                                            }, e), a.done ? (m = Date.now() - n, b = V(i._receivedLength, m), i.emit(W.K.REAL_TIME_SPEED, {
                                                speed: b,
                                                len: i._receivedLength,
                                                time: m,
                                                vid: i._vid,
                                                index: i._index,
                                                range: i._range,
                                                priOptions: i._priOptions
                                            }), i._running = !1, i._logger.debug("[fetchLoader onProgress end],task,", i._range, ",done,", a.done), i.resolve(q(a, !0, e, e.headers.get("Content-Length"), e.headers.get("age"), n, r, i._index, i._range, i._vid, i._priOptions))) : c();
                                        case 25:
                                        case"end":
                                            return o.stop()
                                    }
                                }), o, null, [[1, 8]])
                            })));
                            return function () {
                                return o.apply(this, arguments)
                            }
                        }();
                        c()
                    }
                }, {
                    key: "receiveLen", get: function () {
                        return this._receivedLength
                    }
                }, {
                    key: "running", get: function () {
                        return this._running
                    }, set: function (e) {
                        this._running = e
                    }
                }], [{
                    key: "isSupported", value: function () {
                        return !("undefined" == typeof fetch)
                    }
                }]), r
            }(Y()), te = function (e) {
                return e && e.Math == Math && e
            },
            ne = te("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || te("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || te("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || te("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ne.globalThis = ne, ne.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        n(54747), n(23123);
        var re = n(25843), ie = n.n(re), oe = (n(73210), function (e) {
                return e && e.Math == Math && e
            }),
            ae = oe("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || oe("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || oe("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || oe("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ae.globalThis = ae, ae.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var se = function (e) {
                (0, g.XW)(n, e);
                var t = (0, g.WY)(n);

                function n() {
                    var e;
                    return (0, g.PA)(this, n), e = t.call(this), (0, g._x)((0, g.Lc)(e), "_xhr", null), (0, g._x)((0, g.Lc)(e), "_aborted", !1), (0, g._x)((0, g.Lc)(e), "_timeoutTimer", null), (0, g._x)((0, g.Lc)(e), "_range", null), (0, g._x)((0, g.Lc)(e), "_receivedLength", 0), (0, g._x)((0, g.Lc)(e), "_url", null), (0, g._x)((0, g.Lc)(e), "_onProgress", null), (0, g._x)((0, g.Lc)(e), "_index", -1), (0, g._x)((0, g.Lc)(e), "_headers", null), (0, g._x)((0, g.Lc)(e), "_currentChunkSizeKB", 384), (0, g._x)((0, g.Lc)(e), "_timeout", null), (0, g._x)((0, g.Lc)(e), "_xhr", null), (0, g._x)((0, g.Lc)(e), "_withCredentials", null), (0, g._x)((0, g.Lc)(e), "_startTime", -1), (0, g._x)((0, g.Lc)(e), "_loadCompleteResolve", null), (0, g._x)((0, g.Lc)(e), "_loadCompleteReject", null), (0, g._x)((0, g.Lc)(e), "_runing", !1), (0, g._x)((0, g.Lc)(e), "_logger", !1), (0, g._x)((0, g.Lc)(e), "_vid", ""), (0, g._x)((0, g.Lc)(e), "_responseType", void 0), (0, g._x)((0, g.Lc)(e), "_credentials", void 0), (0, g._x)((0, g.Lc)(e), "_method", void 0), (0, g._x)((0, g.Lc)(e), "_transformResponse", void 0), (0, g._x)((0, g.Lc)(e), "_firstRtt", void 0), (0, g._x)((0, g.Lc)(e), "_onCancel", null), (0, g._x)((0, g.Lc)(e), "_priOptions", null), e
                }

                return (0, g.qH)(n, [{
                    key: "load", value: function (e) {
                        var t = this;
                        clearTimeout(this._timeoutTimer), this._logger = e.logger, this._range = e.range, this._onProgress = e.onProgress, this._index = e.index, this._headers = e.headers, this._withCredentials = "include" === e.credentials || "same-origin" === e.credentials, this._body = e.body || null, e.method && (this._method = e.method), this._timeout = e.timeout || null, this._runing = !0, this._vid = e.vid || e.url, this._responseType = e.responseType, this._firstRtt = -1, this._onTimeout = e.onTimeout, this._onCancel = e.onCancel, this._request = e.request, this._priOptions = e.priOptions || {}, this._logger.debug("ã€xhrLoader taskã€‘, range", this._range), this._url = z(e.url, e.params);
                        var n = Date.now();
                        return new (h())((function (e, n) {
                            t._loadCompleteResolve = e, t._loadCompleteReject = n, t._startLoad()
                        })).catch((function (e) {
                            if (clearTimeout(t._timeoutTimer), t._runing = !1, !t._aborted) throw(e = e instanceof x ? e : new x(t._url, t._request)).startTime = n, e.endTime = Date.now(), e.options = {
                                index: t._index,
                                vid: t._vid,
                                priOptions: t._priOptions
                            }, e
                        }))
                    }
                }, {
                    key: "_startLoad", value: function () {
                        var e = null;
                        if (this._responseType === m.U.ARRAY_BUFFER && this._range && this._range.length > 1) if (this._onProgress) {
                            this._firstRtt = -1;
                            var t = 1024 * this._currentChunkSizeKB, n = this._range[0] + this._receivedLength,
                                r = this._range[1];
                            t < this._range[1] - n && (r = n + t), e = [n, r], this._logger.debug("[xhr_loader->],tast :", this._range, ", SubRange, ", e)
                        } else e = this._range, this._logger.debug("[xhr_loader->],tast :", this._range, ", allRange, ", e);
                        this._internalOpen(e)
                    }
                }, {
                    key: "_internalOpen", value: function (e) {
                        var t = this;
                        try {
                            this._startTime = Date.now();
                            var n = this._xhr = new XMLHttpRequest;
                            n.open(this._method || "GET", this._url, !0), n.responseType = this._responseType, this._timeout && (n.timeout = this._timeout), n.withCredentials = this._withCredentials, n.onload = this._onLoad.bind(this), n.onreadystatechange = this._onReadyStatechange.bind(this), n.onerror = function (e) {
                                var n, r, i;
                                t._running = !1;
                                var o = new x(t._url, t._request, null == e || null === (n = e.currentTarget) || void 0 === n ? void 0 : n.response, "xhr.onerror.status:" + (null == e || null === (r = e.currentTarget) || void 0 === r ? void 0 : r.status) + ",statusText," + (null == e || null === (i = e.currentTarget) || void 0 === i ? void 0 : i.statusText));
                                o.options = {
                                    index: t._index,
                                    range: t._range,
                                    vid: t._vid,
                                    priOptions: t._priOptions
                                }, t._loadCompleteReject(o)
                            }, n.ontimeout = function (e) {
                                t.cancel();
                                var n = new x(t._url, t._request, {status: 408}, "timeout");
                                t._onTimeout && (n.isTimeout = !0, t._onTimeout(n, {
                                    index: t._index,
                                    range: t._range,
                                    vid: t._vid,
                                    priOptions: t._priOptions
                                })), n.options = {
                                    index: t._index,
                                    range: t._range,
                                    vid: t._vid,
                                    priOptions: t._priOptions
                                }, t._loadCompleteReject(n)
                            };
                            var r = this._headers || {}, i = K(e);
                            i && (r.Range = i), r && T()(r).forEach((function (e) {
                                n.setRequestHeader(e, r[e])
                            })), this._logger.debug("[xhr.send->] tast,", this._range, ",load sub range, ", e), n.send(this._body)
                        } catch (t) {
                            t.options = {
                                index: this._index,
                                range: e,
                                vid: this._vid,
                                priOptions: this._priOptions
                            }, this._loadCompleteReject(t)
                        }
                    }
                }, {
                    key: "_onReadyStatechange", value: function (e) {
                        2 === e.target.readyState && this._firstRtt < 0 && (this._firstRtt = Date.now())
                    }
                }, {
                    key: "_onLoad", value: function (e) {
                        var t, n = e.target.status;
                        if (n < 200 || n > 299) {
                            var r = new x(this._url, null, (0, g.Zj)((0, g.Zj)({}, e.target.response), {}, {status: n}), "bad response,status:" + n);
                            return r.options = {
                                index: this._index,
                                range: this._range,
                                vid: this._vid,
                                priOptions: this._priOptions
                            }, this._loadCompleteReject(r)
                        }
                        var i, o = null, a = !1,
                            s = (null === (t = this._range) || void 0 === t ? void 0 : t.length) > 0 ? this._range[0] : 0;
                        if (this._responseType === m.U.ARRAY_BUFFER) {
                            var u, d = new Uint8Array(e.target.response);
                            if (i = s + this._receivedLength, d && d.byteLength > 0) {
                                this._receivedLength += d.byteLength;
                                var c = Date.now() - this._startTime, l = V(this._receivedLength, c);
                                this.emit(W.K.REAL_TIME_SPEED, {
                                    speed: l,
                                    len: this._receivedLength,
                                    time: c,
                                    vid: this._vid,
                                    index: this._index,
                                    range: [i, s + this._receivedLength],
                                    priOptions: this._priOptions
                                })
                            }
                            o = d, a = !((null === (u = this._range) || void 0 === u ? void 0 : u.length) > 1 && this._range[1] && this._receivedLength < this._range[1] - this._range[0]), this._logger.debug("[xhr load done->], tast :", this._range, ", start", i, "end ", s + this._receivedLength, ",dataLen,", d ? d.byteLength : 0, ",receivedLength", this._receivedLength, ",index,", this._index, ", done,", a)
                        } else a = !0, o = e.target.response;
                        var f = {
                            ok: n >= 200 && n < 300,
                            status: n,
                            statusText: this._xhr.statusText,
                            url: this._xhr.responseURL,
                            headers: this._getHeaders(this._xhr),
                            body: this._xhr.response
                        };
                        this._transformResponse && (f = this._transformResponse(f, this._url) || f), this._onProgress && this._onProgress(o, a, {
                            index: this._index,
                            vid: this._vid,
                            range: [i, s + this._receivedLength],
                            startTime: this._startTime,
                            endTime: Date.now(),
                            priOptions: this._priOptions
                        }, f), a ? (this._runing = !1, this._loadCompleteResolve && this._loadCompleteResolve(q(this._onProgress ? null : o, a, f, f.headers["content-length"], f.headers.age, this._startTime, this._firstRtt, this._index, this._range, this._vid, this._priOptions))) : this._startLoad()
                    }
                }, {
                    key: "cancel", value: function () {
                        if (!this._aborted) return this._aborted = !0, this._runing = !1, (0, g.U2)((0, g.IP)(n.prototype), "removeAllListeners", this).call(this), this._onCancel && this._onCancel({
                            index: this._index,
                            range: this._range,
                            vid: this._vid,
                            priOptions: this._priOptions
                        }), this._xhr ? this._xhr.abort() : void 0
                    }
                }, {
                    key: "receiveLen", get: function () {
                        return this._receivedLength
                    }
                }, {
                    key: "running", get: function () {
                        return this._running
                    }, set: function (e) {
                        this._running = e
                    }
                }, {
                    key: "_getHeaders", value: function (e) {
                        var t, n, r = ie()(t = e.getAllResponseHeaders()).call(t).split("\r\n"), i = {}, o = (0, g.sf)(r);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var a = n.value.split(": ");
                                i[a[0].toLowerCase()] = y()(a).call(a, 1).join(": ")
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return i
                    }
                }], [{
                    key: "isSupported", value: function () {
                        return "undefined" != typeof XMLHttpRequest
                    }
                }]), n
            }(Y()), ue = n(72280), de = n(33125), ce = function (e) {
                return e && e.Math == Math && e
            },
            le = ce("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || ce("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || ce("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || ce("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var fe = ["retry", "retryDelay", "onRetryError", "transformError"], he = function () {
                function e(t, n) {
                    (0, g.PA)(this, e), this.promise = (0, ue.Q)(), this.alive = !!n.onProgress, !n.logger && (n.logger = new de.Y("Loader")), this._loaderType = t, this._loader = t === m.t.FETCH && window.fetch ? new ee : new se, this._config = n, this._retryCount = 0, this._retryTimer = null, this._canceled = !1, this._retryCheckFunc = n.retryCheckFunc, this._logger = n.logger
                }

                var t;
                return (0, g.qH)(e, [{
                    key: "exec", value: function () {
                        var e = this, t = this._config, n = t.retry, r = t.retryDelay, i = t.onRetryError,
                            o = t.transformError, a = (0, g.Kd)(t, fe), s = function () {
                                var t = (0, g.x)((0, g.l5)().mark((function t() {
                                    var u, d, c;
                                    return (0, g.l5)().wrap((function (t) {
                                        for (; ;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e._loader.load(a);
                                            case 3:
                                                u = t.sent, e.promise.resolve(u), t.next = 27;
                                                break;
                                            case 7:
                                                if (t.prev = 7, t.t0 = t.catch(0), e._loader.running = !1, e._logger.debug("[task request catch err]", t.t0), !e._canceled) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 13:
                                                if (t.t0.loaderType = e._loaderType, t.t0.retryCount = e._retryCount, d = t.t0, o && (d = o(d) || d), i && e._retryCount > 0 && i(d, e._retryCount, {
                                                    index: a.index,
                                                    vid: a.vid,
                                                    range: a.range,
                                                    priOptions: a.priOptions
                                                }), e._retryCount++, c = !0, e._retryCheckFunc && (c = e._retryCheckFunc(t.t0)), !(c && e._retryCount <= n)) {
                                                    t.next = 26;
                                                    break
                                                }
                                                return clearTimeout(e._retryTimer), e._logger.debug("[task request setTimeout],retry", e._retryCount, ",retry range,", a.range), e._retryTimer = setTimeout(s, r), t.abrupt("return");
                                            case 26:
                                                e.promise.reject(d);
                                            case 27:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t, null, [[0, 7]])
                                })));
                                return function () {
                                    return t.apply(this, arguments)
                                }
                            }();
                        return s(), this.promise
                    }
                }, {
                    key: "cancel", value: (t = (0, g.x)((0, g.l5)().mark((function e() {
                        return (0, g.l5)().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return clearTimeout(this._retryTimer), this._canceled = !0, this._loader.running = !1, e.abrupt("return", this._loader.cancel());
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function () {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "running", get: function () {
                        return this._loader && this._loader.running
                    }
                }, {
                    key: "loader", get: function () {
                        return this._loader
                    }
                }]), e
            }(), ve = (n(32366), function (e) {
                return e && e.Math == Math && e
            }),
            pe = ve("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || ve("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || ve("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || ve("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function ge() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return new (h())((function (t) {
                return setTimeout(t, e)
            }))
        }

        pe.globalThis = pe, pe.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var _e = function (e) {
                return e && e.Math == Math && e
            },
            ye = _e("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || _e("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || _e("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || _e("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        ye.globalThis = ye, ye.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var me = function (e) {
            (0, g.XW)(r, e);
            var t, n = (0, g.WY)(r);

            function r(e) {
                var t;
                return (0, g.PA)(this, r), t = n.call(this, e), (0, g._x)((0, g.Lc)(t), "type", m.t.FETCH), (0, g._x)((0, g.Lc)(t), "_queue", []), (0, g._x)((0, g.Lc)(t), "_alive", []), (0, g._x)((0, g.Lc)(t), "_currentTask", null), (0, g._x)((0, g.Lc)(t), "_config", void 0), t._config = function (e) {
                    return (0, g.Zj)({
                        loaderType: m.t.FETCH,
                        retry: 0,
                        retryDelay: 0,
                        timeout: 0,
                        request: null,
                        onTimeout: void 0,
                        onProgress: void 0,
                        onRetryError: void 0,
                        transformRequest: void 0,
                        transformResponse: void 0,
                        transformError: void 0,
                        responseType: m.U.TEXT,
                        range: void 0,
                        url: "",
                        params: void 0,
                        method: "GET",
                        headers: {},
                        body: void 0,
                        mode: void 0,
                        credentials: void 0,
                        cache: void 0,
                        redirect: void 0,
                        referrer: void 0,
                        referrerPolicy: void 0,
                        integrity: void 0,
                        onProcessMinLen: 0
                    }, e)
                }(e), t._config.loaderType !== m.t.XHR && ee.isSupported() || (t.type = m.t.XHR), t.log = e.logger, t
            }

            return (0, g.qH)(r, [{
                key: "isFetch", value: function () {
                    return this.type === m.t.FETCH
                }
            }, {
                key: "load", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    "string" != typeof e && e ? n = e : n.url = e || n.url || this._config.url, (n = s()({}, this._config, n)).params && (n.params = s()({}, n.params)), n.headers && U(n.headers) && (n.headers = s()({}, n.headers)), n.body && U(n.body) && (n.body = s()({}, n.body)), n.transformRequest && (n = n.transformRequest(n) || n), n.logger = this.log;
                    var r = new he(this.type, n);
                    return r.loader.on(W.K.REAL_TIME_SPEED, (function (e) {
                        t.emit(W.K.REAL_TIME_SPEED, e)
                    })), this._queue.push(r), 1 !== this._queue.length || this._currentTask && this._currentTask.running || this._processTask(), r.promise
                }
            }, {
                key: "cancel", value: (t = (0, g.x)((0, g.l5)().mark((function e() {
                    var t;
                    return (0, g.l5)().wrap((function (e) {
                        for (var n, r, i; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = d()(n = l()(r = this._queue).call(r, (function (e) {
                                    return e.cancel()
                                }))).call(n, l()(i = this._alive).call(i, (function (e) {
                                    return e.cancel()
                                }))), this._currentTask && t.push(this._currentTask.cancel()), this._queue = [], this._alive = [], e.next = 6, h().all(t);
                            case 6:
                                return e.next = 8, ge();
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return t.apply(this, arguments)
                })
            }, {
                key: "_processTask", value: function () {
                    var e = this;
                    this._currentTask = this._queue.shift(), this._currentTask && (this._currentTask.alive && this._alive.push(this._currentTask), this._currentTask.exec().catch((function (e) {
                    })).finally((function () {
                        var t, n, r;
                        null !== (t = e._currentTask) && void 0 !== t && t.alive && (null === (n = e._alive) || void 0 === n ? void 0 : n.length) > 0 && (e._alive = p()(r = e._alive).call(r, (function (t) {
                            return t && t !== e._currentTask
                        })));
                        e._processTask()
                    })))
                }
            }], [{
                key: "isFetchSupport", value: function () {
                    return ee.isSupported()
                }
            }]), r
        }(Y())
    }, 4217: function (e, t, n) {
        n.d(t, {
            t: function () {
                return u
            }, U: function () {
                return d
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = function (e) {
                return e && e.Math == Math && e
            },
            s = a("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var u = {FETCH: "fetch", XHR: "xhr"}, d = {ARRAY_BUFFER: "arraybuffer", TEXT: "text", JSON: "json"}
    }, 72280: function (e, t, n) {
        n.d(t, {
            Q: function () {
                return f
            }, j: function () {
                return h
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = n(93476), s = n.n(a), u = n(94198), d = n.n(u),
            c = (n(41539), n(88674), function (e) {
                return e && e.Math == Math && e
            }),
            l = c("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || c("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || c("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || c("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function f() {
            var e, t, n = new (s())((function (n, r) {
                e = n, t = r
            }));
            return n.used = !1, n.resolve = function () {
                return n.used = !0, e.apply(void 0, arguments)
            }, n.reject = function () {
                return n.used = !0, t.apply(void 0, arguments)
            }, n
        }

        function h() {
            try {
                return d()(performance.now(), 10)
            } catch (e) {
                return (new Date).getTime()
            }
        }

        l.globalThis = l, l.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }
    }, 21809: function (e, t, n) {
        n.d(t, {
            PA: function () {
                return u
            }, qH: function () {
                return c
            }, _x: function () {
                return l
            }
        });
        var r = n(19623), i = (n(41539), n(68309), n(74916), n(90149)), o = n.n(i),
            a = (n(85507), n(21611), n(1068), n(65420), n(19996), n(66419), n(3649), function (e) {
                return e && e.Math == Math && e
            }),
            s = a("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            return t && d(e.prototype, t), n && d(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        s.globalThis = s, s.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        }
    }, 54368: function (e, t, n) {
        n.d(t, {
            yQ: function () {
                return c
            }, Vc: function () {
                return u
            }, _e: function () {
                return d
            }
        });
        var r = n(19623), i = n(90149), o = n.n(i), a = function (e) {
                return e && e.Math == Math && e
            },
            s = a("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || a("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || a("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || a("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var u = {VIDEO: "video", AUDIO: "audio", METADATA: "metadata"}, d = {AVC: "avc", HEVC: "hevc"},
            c = {AAC: "aac", G711PCMA: "g7110a", G711PCMU: "g7110m"}
    }, 63585: function (e, t, n) {
        n.d(t, {
            C: function () {
                return C
            }, Z: function () {
                return R
            }
        });
        var r = n(19623),
            i = (n(41539), n(39714), n(54747), n(9653), n(66992), n(65125), n(92990), n(18927), n(33105), n(35035), n(74345), n(7174), n(32846), n(44731), n(77209), n(96319), n(58867), n(37789), n(33739), n(29368), n(14483), n(12056), n(3462), n(30678), n(27462), n(33824), n(55021), n(12974), n(15016), n(90149)),
            o = n.n(i), a = n(94198), s = n.n(a), u = n(39392), d = n.n(u), c = n(59340), l = n.n(c), f = n(31238),
            h = n.n(f), v = n(15671), p = n(43144),
            g = (n(83710), n(91058), n(51532), n(78783), n(33948), n(89554), n(54678), n(39575), n(93476)), _ = n.n(g),
            y = (n(88674), function (e) {
                return e && e.Math == Math && e
            }),
            m = y("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || y("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || y("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || y("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
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
        var b = function () {
                function e() {
                    var t, n;
                    (0, v.Z)(this, e);
                    var r = new (_())((function (e, r) {
                        t = e, n = r
                    }));
                    return r.resolve = t, r.reject = n, r
                }

                return (0, p.Z)(e, [{
                    key: "resolve", value: function (e) {
                    }
                }, {
                    key: "reject", value: function (e) {
                    }
                }]), e
            }(), w = n(81643), x = n.n(w), S = (n(82772), function (e) {
                return e && e.Math == Math && e
            }),
            T = S("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || S("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || S("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || S("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        T.globalThis = T, T.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var P = j && !function () {
            var e = "_localstorage_support_test";
            try {
                return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
            } catch (e) {
                return !0
            }
        }();

        function j() {
            try {
                return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
            } catch (e) {
                return !1
            }
        }

        var k = {
                length: P ? localStorage.length : 0, clear: function (e) {
                    try {
                        for (var t = localStorage.length - 1; t >= 0; t--) {
                            var n = localStorage.key(t);
                            0 === x()(n).call(n, e) && localStorage.removeItem(n)
                        }
                    } catch (e) {
                    }
                }, getItem: function (e) {
                    try {
                        return localStorage.getItem(e)
                    } catch (e) {
                        return null
                    }
                }, key: function (e) {
                    try {
                        return localStorage.key(e)
                    } catch (e) {
                        return null
                    }
                }, setItem: function (e, t) {
                    try {
                        localStorage.setItem(e, t)
                    } catch (e) {
                    }
                }, removeItem: function (e) {
                    try {
                        localStorage.removeItem(e)
                    } catch (e) {
                    }
                }, isSupport: P
            }, E = function (e) {
                return e && e.Math == Math && e
            },
            I = E("object" == (void 0 === o() ? "undefined" : (0, r.Z)(o())) && o()) || E("object" == ("undefined" == typeof window ? "undefined" : (0, r.Z)(window)) && window) || E("object" == ("undefined" == typeof self ? "undefined" : (0, r.Z)(self)) && self) || E("object" == (void 0 === n.g ? "undefined" : (0, r.Z)(n.g)) && n.g) || function () {
                return this
            }() || Function("return this")();
        I.globalThis = I, I.globalThis.getFilterXss = function () {
            return void 0 === this.xss ? (console.warn("@ies/babel-plugin-filter-xss: @ies/filter-xss is not defined"), {
                filterUrl: function (e) {
                    return e
                }, _filterXSS: function (e) {
                    return e
                }
            }) : void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : this.xss
        };
        var L = "danger_d_speed";

        function C(e) {
            var t = e.toString(16);
            return t.length <= 8 ? {high: 0, low: e} : {
                high: s()(t.substr(0, t.length - 8), 16),
                low: s()(t.substr(t.length - 8), 16)
            }
        }

        var R = function () {
            function e(t, n, r, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    logger: function () {
                    }, openLog: !1
                };
                (0, v.Z)(this, e), this.bitrate = n, this.segment_duration = i || 5e3, this.logger = o.logger, this.openLog = o.openLog, this.cdnHost = t.cdnHost, this._loadedPromise = new b, this._wasmPromise = new b, this.config = t, this.autoBitrateOpts = t.autoBitrateOpts || {}, this.stall_penalty = this.autoBitrateOpts.stall_penalty || 11, this.switch_penalty = this.autoBitrateOpts.switch_penalty || 4, this.interval = this.autoBitrateOpts.interval || 1e3;
                var a = t.progressTimer || 1e3, s = this.autoBitrateOpts.startInterval || a;
                this.initInterval = .8 * s, this._prealodMethod = t.preloadmethod || 0, this._videoWidth = 0, this._videoHeight = 0, this._hasDeviceInfoChanged = !0, this.updateMediaInfos(r, !1)
            }

            return (0, p.Z)(e, [{
                key: "onLoadWasm", value: function () {
                    var e = this, t = this.module = {
                        onRuntimeInitialized: function () {
                            e._wasmPromise.resolve()
                        }
                    };
                    return (0, this.autoBitrateOpts.module)(t), this._wasmPromise
                }
            }, {
                key: "updateMediaInfos", value: function (e) {
                    var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._heightToDefitionConfig = new (d()), this._bitrateToDefitionConfig = new (d()), e ? (this.mediaInfos = e, this.mediaInfos.dynamic_video_list.forEach((function (e) {
                        t._heightToDefitionConfig.set(e.vheight, e), t._bitrateToDefitionConfig.set(e.bitrate, e)
                    }))) : n && console.error("baseAbr mediaInfos null")
                }
            }, {
                key: "parseMPD", value: function () {
                    if (this.setDebugModel(this.openLog), this.mediaInfos) {
                        this.logger("mediaInfos", this.mediaInfos);
                        try {
                            for (var e = [], t = this.mediaInfos.dynamic_video_list, n = 0; n < t.length; n++) {
                                var r = t[n];
                                e.push({
                                    stream_id: "s".concat(n),
                                    bandwidth: r.bitrate || r.bandwidth,
                                    width: r.vwidth || r.width,
                                    height: r.vheight || r.height,
                                    codec: r.codecs || r.codec_type || "h264",
                                    frame_rate: Number(r.fps) || -1,
                                    segment_duration: this.segment_duration
                                })
                            }
                            var i = {v_adaptation: e}, o = l()(i);
                            this.module.ccall("parseMPD", "null", ["string"], [o])
                        } catch (e) {
                        }
                    } else console.warn("mediaInfos is null")
                }
            }, {
                key: "_getDefautSpeed", value: function (e) {
                    var t = 0, n = window.navigator.connection;
                    if (n && n.downlink) t = 1024 * navigator.connection.downlink / 8, this.logger("initSpeed connect", t); else try {
                        t = h()(k.getItem(L)) || 0, this.logger("initSpeed connect", t)
                    } catch (e) {
                    }
                    return 0 === t && (t = e && e.historyAvspeed || 0, this.logger("initSpeed history", t)), t
                }
            }, {
                key: "setDebugModel", value: function (e) {
                    this.module._setDebugModel(e)
                }
            }, {
                key: "updateBitrate", value: function (e) {
                    this.bitrate = e
                }
            }, {
                key: "_updatePreloadSupplier", value: function (e, t) {
                    this.module._updatePreloadSupplier(e, t)
                }
            }, {
                key: "updatePreloadSupplier", value: function (e) {
                    var t = this._getDefautSpeed();
                    this._updatePreloadSupplier(t, e)
                }
            }, {
                key: "getPreloadBitrate", value: function () {
                    var e, t = null, n = [];
                    try {
                        this.logger("preloadMethod", this._prealodMethod), e = this.module._getPreloadBitrate(this._prealodMethod);
                        for (var r = 0; r < 5; r++) n.push(this.module.HEAP32[e / Int32Array.BYTES_PER_ELEMENT + r]);
                        var i = {bitrate: n[0], pduration: n[1], preloadType: n[2], size: n[3], mediaType: n[4]};
                        return this.logger("getPreloadBitrate", i), i
                    } catch (e) {
                        t = null, console.log("getPreloadBitrate", e)
                    } finally {
                        this.module._free(e)
                    }
                    return t
                }
            }, {
                key: "_updateDeviceInfo", value: function (e) {
                    try {
                        if (this._hasDeviceInfoChanged) {
                            var t = window.devicePixelRatio || 1;
                            this.module._updateDeviceInfo(this._videoWidth || Number(this.config.width), this._videoHeight || Number(this.config.height), t, e || -1)
                        }
                        this._hasDeviceInfoChanged = !1
                    } catch (e) {
                        console.log("_updateDeviceInfo")
                    }
                }
            }, {
                key: "preload", value: function (e) {
                    this.parseMPD(), this.updatePreloadSupplier(e), this._updateDeviceInfo(-1);
                    var t = window.devicePixelRatio || 1;
                    return this.logger("baseAbr updateDeviceInfo width", this._videoWidth || Number(this.config.width), "height", this._videoHeight || Number(this.config.height), "dpr", t), this.getPreloadBitrate()
                }
            }]), e
        }();
        R.SPPED_CACHE = L
    }
}]);
/*
连接错误注释
//# sourceMappingURL=https://sourcemap.ixigua.com/obj/xigua-video-web-pc-sourcemap/xgpc/sourcemap/js/4031.b6bcec10e1.js.map
 */