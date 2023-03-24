/*!
* @ies/filter-xss v2.0.87
* (c) 2023
*/
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).xss = {})
}(this, (function (t) {
    "use strict";

    function e(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function r(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    var n = r((function (t) {
        function e(r) {
            return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
        }

        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
    })), o = e(n);

    function i() {
        var t = {
            "align-content": !1,
            "align-items": !1,
            "align-self": !1,
            "alignment-adjust": !1,
            "alignment-baseline": !1,
            all: !1,
            "anchor-point": !1,
            animation: !1,
            "animation-delay": !1,
            "animation-direction": !1,
            "animation-duration": !1,
            "animation-fill-mode": !1,
            "animation-iteration-count": !1,
            "animation-name": !1,
            "animation-play-state": !1,
            "animation-timing-function": !1,
            azimuth: !1,
            "backface-visibility": !1,
            background: !0,
            "background-attachment": !0,
            "background-clip": !0,
            "background-color": !0,
            "background-image": !0,
            "background-origin": !0,
            "background-position": !0,
            "background-repeat": !0,
            "background-size": !0,
            "baseline-shift": !1,
            binding: !1,
            bleed: !1,
            "bookmark-label": !1,
            "bookmark-level": !1,
            "bookmark-state": !1,
            border: !0,
            "border-bottom": !0,
            "border-bottom-color": !0,
            "border-bottom-left-radius": !0,
            "border-bottom-right-radius": !0,
            "border-bottom-style": !0,
            "border-bottom-width": !0,
            "border-collapse": !0,
            "border-color": !0,
            "border-image": !0,
            "border-image-outset": !0,
            "border-image-repeat": !0,
            "border-image-slice": !0,
            "border-image-source": !0,
            "border-image-width": !0,
            "border-left": !0,
            "border-left-color": !0,
            "border-left-style": !0,
            "border-left-width": !0,
            "border-radius": !0,
            "border-right": !0,
            "border-right-color": !0,
            "border-right-style": !0,
            "border-right-width": !0,
            "border-spacing": !0,
            "border-style": !0,
            "border-top": !0,
            "border-top-color": !0,
            "border-top-left-radius": !0,
            "border-top-right-radius": !0,
            "border-top-style": !0,
            "border-top-width": !0,
            "border-width": !0,
            bottom: !1,
            "box-decoration-break": !0,
            "box-shadow": !0,
            "box-sizing": !0,
            "box-snap": !0,
            "box-suppress": !0,
            "break-after": !0,
            "break-before": !0,
            "break-inside": !0,
            "caption-side": !1,
            chains: !1,
            clear: !0,
            clip: !1,
            "clip-path": !1,
            "clip-rule": !1,
            color: !0,
            "color-interpolation-filters": !0,
            "column-count": !1,
            "column-fill": !1,
            "column-gap": !1,
            "column-rule": !1,
            "column-rule-color": !1,
            "column-rule-style": !1,
            "column-rule-width": !1,
            "column-span": !1,
            "column-width": !1,
            columns: !1,
            contain: !1,
            content: !1,
            "counter-increment": !1,
            "counter-reset": !1,
            "counter-set": !1,
            crop: !1,
            cue: !1,
            "cue-after": !1,
            "cue-before": !1,
            cursor: !1,
            direction: !1,
            display: !0,
            "display-inside": !0,
            "display-list": !0,
            "display-outside": !0,
            "dominant-baseline": !1,
            elevation: !1,
            "empty-cells": !1,
            filter: !1,
            flex: !1,
            "flex-basis": !1,
            "flex-direction": !1,
            "flex-flow": !1,
            "flex-grow": !1,
            "flex-shrink": !1,
            "flex-wrap": !1,
            float: !1,
            "float-offset": !1,
            "flood-color": !1,
            "flood-opacity": !1,
            "flow-from": !1,
            "flow-into": !1,
            font: !0,
            "font-family": !0,
            "font-feature-settings": !0,
            "font-kerning": !0,
            "font-language-override": !0,
            "font-size": !0,
            "font-size-adjust": !0,
            "font-stretch": !0,
            "font-style": !0,
            "font-synthesis": !0,
            "font-variant": !0,
            "font-variant-alternates": !0,
            "font-variant-caps": !0,
            "font-variant-east-asian": !0,
            "font-variant-ligatures": !0,
            "font-variant-numeric": !0,
            "font-variant-position": !0,
            "font-weight": !0,
            grid: !1,
            "grid-area": !1,
            "grid-auto-columns": !1,
            "grid-auto-flow": !1,
            "grid-auto-rows": !1,
            "grid-column": !1,
            "grid-column-end": !1,
            "grid-column-start": !1,
            "grid-row": !1,
            "grid-row-end": !1,
            "grid-row-start": !1,
            "grid-template": !1,
            "grid-template-areas": !1,
            "grid-template-columns": !1,
            "grid-template-rows": !1,
            "hanging-punctuation": !1,
            height: !0,
            hyphens: !1,
            icon: !1,
            "image-orientation": !1,
            "image-resolution": !1,
            "ime-mode": !1,
            "initial-letters": !1,
            "inline-box-align": !1,
            "justify-content": !1,
            "justify-items": !1,
            "justify-self": !1,
            left: !1,
            "letter-spacing": !0,
            "lighting-color": !0,
            "line-box-contain": !1,
            "line-break": !1,
            "line-grid": !1,
            "line-height": !1,
            "line-snap": !1,
            "line-stacking": !1,
            "line-stacking-ruby": !1,
            "line-stacking-shift": !1,
            "line-stacking-strategy": !1,
            "list-style": !0,
            "list-style-image": !0,
            "list-style-position": !0,
            "list-style-type": !0,
            margin: !0,
            "margin-bottom": !0,
            "margin-left": !0,
            "margin-right": !0,
            "margin-top": !0,
            "marker-offset": !1,
            "marker-side": !1,
            marks: !1,
            mask: !1,
            "mask-box": !1,
            "mask-box-outset": !1,
            "mask-box-repeat": !1,
            "mask-box-slice": !1,
            "mask-box-source": !1,
            "mask-box-width": !1,
            "mask-clip": !1,
            "mask-image": !1,
            "mask-origin": !1,
            "mask-position": !1,
            "mask-repeat": !1,
            "mask-size": !1,
            "mask-source-type": !1,
            "mask-type": !1,
            "max-height": !0,
            "max-lines": !1,
            "max-width": !0,
            "min-height": !0,
            "min-width": !0,
            "move-to": !1,
            "nav-down": !1,
            "nav-index": !1,
            "nav-left": !1,
            "nav-right": !1,
            "nav-up": !1,
            "object-fit": !1,
            "object-position": !1,
            opacity: !1,
            order: !1,
            orphans: !1,
            outline: !1,
            "outline-color": !1,
            "outline-offset": !1,
            "outline-style": !1,
            "outline-width": !1,
            overflow: !1,
            "overflow-wrap": !1,
            "overflow-x": !1,
            "overflow-y": !1,
            padding: !0,
            "padding-bottom": !0,
            "padding-left": !0,
            "padding-right": !0,
            "padding-top": !0,
            page: !1,
            "page-break-after": !1,
            "page-break-before": !1,
            "page-break-inside": !1,
            "page-policy": !1,
            pause: !1,
            "pause-after": !1,
            "pause-before": !1,
            perspective: !1,
            "perspective-origin": !1,
            pitch: !1,
            "pitch-range": !1,
            "play-during": !1,
            position: !1,
            "presentation-level": !1,
            quotes: !1,
            "region-fragment": !1,
            resize: !1,
            rest: !1,
            "rest-after": !1,
            "rest-before": !1,
            richness: !1,
            right: !1,
            rotation: !1,
            "rotation-point": !1,
            "ruby-align": !1,
            "ruby-merge": !1,
            "ruby-position": !1,
            "shape-image-threshold": !1,
            "shape-outside": !1,
            "shape-margin": !1,
            size: !1,
            speak: !1,
            "speak-as": !1,
            "speak-header": !1,
            "speak-numeral": !1,
            "speak-punctuation": !1,
            "speech-rate": !1,
            stress: !1,
            "string-set": !1,
            "tab-size": !1,
            "table-layout": !1,
            "text-align": !0,
            "text-align-last": !0,
            "text-combine-upright": !0,
            "text-decoration": !0,
            "text-decoration-color": !0,
            "text-decoration-line": !0,
            "text-decoration-skip": !0,
            "text-decoration-style": !0,
            "text-emphasis": !0,
            "text-emphasis-color": !0,
            "text-emphasis-position": !0,
            "text-emphasis-style": !0,
            "text-height": !0,
            "text-indent": !0,
            "text-justify": !0,
            "text-orientation": !0,
            "text-overflow": !0,
            "text-shadow": !0,
            "text-space-collapse": !0,
            "text-transform": !0,
            "text-underline-position": !0,
            "text-wrap": !0,
            top: !1,
            transform: !1,
            "transform-origin": !1,
            "transform-style": !1,
            transition: !1,
            "transition-delay": !1,
            "transition-duration": !1,
            "transition-property": !1,
            "transition-timing-function": !1,
            "unicode-bidi": !1,
            "vertical-align": !1,
            visibility: !1,
            "voice-balance": !1,
            "voice-duration": !1,
            "voice-family": !1,
            "voice-pitch": !1,
            "voice-range": !1,
            "voice-rate": !1,
            "voice-stress": !1,
            "voice-volume": !1,
            volume: !1,
            "white-space": !1,
            widows: !1,
            width: !0,
            "will-change": !1,
            "word-break": !0,
            "word-spacing": !0,
            "word-wrap": !0,
            "wrap-flow": !1,
            "wrap-through": !1,
            "writing-mode": !1,
            "z-index": !1
        };
        return t
    }

    var a = /javascript\s*\:/gim;
    var s = {
        whiteList: i(), getDefaultWhiteList: i, onAttr: function (t, e, r) {
        }, onIgnoreAttr: function (t, e, r) {
        }, safeAttrValue: function (t, e) {
            return a.test(e) ? "" : e
        }
    }, l = function (t) {
        return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
    }, u = function (t) {
        return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "")
    };
    var c = function (t, e) {
        ";" !== (t = u(t))[t.length - 1] && (t += ";");
        var r = t.length, n = !1, o = 0, i = 0, a = "";

        function s() {
            if (!n) {
                var r = l(t.slice(o, i)), s = r.indexOf(":");
                if (-1 !== s) {
                    var u = l(r.slice(0, s)), c = l(r.slice(s + 1));
                    if (u) {
                        var f = e(o, a.length, u, c, r);
                        f && (a += f + "; ")
                    }
                }
            }
            o = i + 1
        }

        for (; i < r; i++) {
            var c = t[i];
            if ("/" === c && "*" === t[i + 1]) {
                var f = t.indexOf("*/", i + 2);
                if (-1 === f) break;
                o = (i = f + 1) + 1, n = !1
            } else "(" === c ? n = !0 : ")" === c ? n = !1 : ";" === c ? n || s() : "\n" === c && s()
        }
        return l(a)
    };

    function f(t) {
        return null == t
    }

    function d(t) {
        (t = function (t) {
            var e = {};
            for (var r in t) e[r] = t[r];
            return e
        }(t || {})).whiteList = t.whiteList || s.whiteList, t.onAttr = t.onAttr || s.onAttr, t.onIgnoreAttr = t.onIgnoreAttr || s.onIgnoreAttr, t.safeAttrValue = t.safeAttrValue || s.safeAttrValue, this.options = t
    }

    d.prototype.process = function (t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this.options, r = e.whiteList, n = e.onAttr, o = e.onIgnoreAttr, i = e.safeAttrValue;
        return c(t, (function (t, e, a, s, l) {
            var u = r[a], c = !1;
            if (!0 === u ? c = u : "function" == typeof u ? c = u(s) : u instanceof RegExp && (c = u.test(s)), !0 !== c && (c = !1), s = i(a, s)) {
                var d, p = {position: e, sourcePosition: t, source: l, isWhite: c};
                return c ? f(d = n(a, s, p)) ? a + ":" + s : d : f(d = o(a, s, p)) ? void 0 : d
            }
        }))
    };
    var p = d, g = r((function (t, e) {
        for (var r in (e = t.exports = function (t, e) {
            return new p(e).process(t)
        }).FilterCSS = p, s) e[r] = s[r];
        "undefined" != typeof window && (window.filterCSS = t.exports)
    }));
    g.FilterCSS;
    var h = function (t, e) {
        var r, n;
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
        return -1
    }, b = function (t, e, r) {
        var n, o;
        if (Array.prototype.forEach) return t.forEach(e, r);
        for (n = 0, o = t.length; n < o; n++) e.call(r, t[n], n, t)
    }, m = function (t) {
        return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
    }, v = function (t) {
        var e = /\s|\n|\t/.exec(t);
        return e ? e.index : -1
    }, y = g.FilterCSS, x = g.getDefaultWhiteList;

    function w() {
        return {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
        }
    }

    var A = new y;

    function k(t) {
        return t.replace(S, "&lt;").replace(T, "&gt;")
    }

    var S = /</g, T = />/g, L = /"/g, j = /&quot;/g, C = /&#([a-zA-Z0-9]*);?/gim, _ = /&colon;?/gim,
        I = /&newline;?/gim,
        N = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        W = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, z = /u\s*r\s*l\s*\(.*/gi;

    function F(t) {
        return t.replace(L, "&quot;")
    }

    function M(t) {
        return t.replace(j, '"')
    }

    function X(t) {
        return t.replace(C, (function (t, e) {
            return "x" === e[0] || "X" === e[0] ? String.fromCharCode(parseInt(e.substr(1), 16)) : String.fromCharCode(parseInt(e, 10))
        }))
    }

    function O(t) {
        return t.replace(_, ":").replace(I, " ")
    }

    function E(t) {
        for (var e = "", r = 0, n = t.length; r < n; r++) e += t.charCodeAt(r) < 32 ? " " : t.charAt(r);
        return m(e)
    }

    function P(t) {
        return t = E(t = O(t = X(t = M(t))))
    }

    function Z(t) {
        return t = k(t = F(t))
    }

    var B = {
        whiteList: {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
        },
        getDefaultWhiteList: w,
        onTag: function (t, e, r) {
        },
        onIgnoreTag: function (t, e, r) {
        },
        onTagAttr: function (t, e, r) {
        },
        onIgnoreTagAttr: function (t, e, r) {
        },
        safeAttrValue: function (t, e, r, n) {
            if (r = P(r), "href" === e || "src" === e) {
                if ("#" === (r = m(r))) return "#";
                if ("http://" !== r.substr(0, 7) && "https://" !== r.substr(0, 8) && "mailto:" !== r.substr(0, 7) && "tel:" !== r.substr(0, 4) && "data:image/" !== r.substr(0, 11) && "ftp://" !== r.substr(0, 6) && "./" !== r.substr(0, 2) && "../" !== r.substr(0, 3) && "#" !== r[0] && "/" !== r[0]) return ""
            } else if ("background" === e) {
                if (N.lastIndex = 0, N.test(r)) return ""
            } else if ("style" === e) {
                if (W.lastIndex = 0, W.test(r)) return "";
                if (z.lastIndex = 0, z.test(r) && (N.lastIndex = 0, N.test(r))) return "";
                !1 !== n && (r = (n = n || A).process(r))
            }
            return r = Z(r)
        },
        escapeHtml: k,
        escapeQuote: F,
        unescapeQuote: M,
        escapeHtmlEntities: X,
        escapeDangerHtml5Entities: O,
        clearNonPrintableCharacter: E,
        friendlyAttrValue: P,
        escapeAttrValue: Z,
        onIgnoreTagStripAll: function () {
            return ""
        },
        StripTagBody: function (t, e) {
            "function" != typeof e && (e = function () {
            });
            var r = !Array.isArray(t), n = [], o = !1;
            return {
                onIgnoreTag: function (i, a, s) {
                    if (function (e) {
                        return !!r || -1 !== h(t, e)
                    }(i)) {
                        if (s.isClosing) {
                            var l = "[/removed]", u = s.position + l.length;
                            return n.push([!1 !== o ? o : s.position, u]), o = !1, l
                        }
                        return o || (o = s.position), "[removed]"
                    }
                    return e(i, a, s)
                }, remove: function (t) {
                    var e = "", r = 0;
                    return b(n, (function (n) {
                        e += t.slice(r, n[0]), r = n[1]
                    })), e += t.slice(r)
                }
            }
        },
        stripCommentTag: function (t) {
            for (var e = "", r = 0; r < t.length;) {
                var n = t.indexOf("\x3c!--", r);
                if (-1 === n) {
                    e += t.slice(r);
                    break
                }
                e += t.slice(r, n);
                var o = t.indexOf("--\x3e", n);
                if (-1 === o) break;
                r = o + 3
            }
            return e
        },
        stripBlankChar: function (t) {
            var e = t.split("");
            return (e = e.filter((function (t) {
                var e = t.charCodeAt(0);
                return 127 !== e && (!(e <= 31) || (10 === e || 13 === e))
            }))).join("")
        },
        cssFilter: A,
        getDefaultCSSWhiteList: x
    };

    function D(t) {
        var e, r = v(t);
        return e = -1 === r ? t.slice(1, -1) : t.slice(1, r + 1), "/" === (e = m(e).toLowerCase()).slice(0, 1) && (e = e.slice(1)), "/" === e.slice(-1) && (e = e.slice(0, -1)), e
    }

    function J(t) {
        return "</" === t.slice(0, 2)
    }

    var V = /[^a-zA-Z0-9\\_:.-]/gim;

    function Y(t, e) {
        for (; e < t.length; e++) {
            var r = t[e];
            if (" " !== r) return "=" === r ? e : -1
        }
    }

    function H(t, e) {
        for (; e < t.length; e++) {
            var r = t[e];
            if (" " !== r) return "'" === r || '"' === r ? e : -1
        }
    }

    function R(t, e) {
        for (; e > 0; e--) {
            var r = t[e];
            if (" " !== r) return "=" === r ? e : -1
        }
    }

    function q(t) {
        return function (t) {
            return '"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1]
        }(t) ? t.substr(1, t.length - 2) : t
    }

    var G = {
        parseTag: function (t, e, r) {
            var n = "", o = 0, i = !1, a = !1, s = 0, l = t.length, u = "", c = "";
            t:for (s = 0; s < l; s++) {
                var f = t.charAt(s);
                if (!1 === i) {
                    if ("<" === f) {
                        i = s;
                        continue
                    }
                } else if (!1 === a) {
                    if ("<" === f) {
                        n += r(t.slice(o, s)), i = s, o = s;
                        continue
                    }
                    if (">" === f || s === l - 1) {
                        n += r(t.slice(o, i)), u = D(c = t.slice(i, s + 1)), n += e(i, n.length, u, c, J(c)), o = s + 1, i = !1;
                        continue
                    }
                    if ('"' === f || "'" === f) for (var d = 1, p = t.charAt(s - d); "" === p.trim() || "=" === p;) {
                        if ("=" === p) {
                            a = f;
                            continue t
                        }
                        p = t.charAt(s - ++d)
                    }
                } else if (f === a) {
                    a = !1;
                    continue
                }
            }
            return o < l && (n += r(t.substr(o))), n
        }, parseAttr: function (t, e) {
            var r = 0, n = 0, o = [], i = !1, a = t.length;

            function s(t, r) {
                if (!((t = (t = m(t)).replace(V, "").toLowerCase()).length < 1)) {
                    var n = e(t, r || "");
                    n && o.push(n)
                }
            }

            for (var l = 0; l < a; l++) {
                var u, c = t.charAt(l);
                if (!1 !== i || "=" !== c) if (!1 === i || l !== n) if (/\s|\n|\t/.test(c)) {
                    if (t = t.replace(/\s|\n|\t/g, " "), !1 === i) {
                        if (-1 === (u = Y(t, l))) {
                            s(m(t.slice(r, l))), i = !1, r = l + 1;
                            continue
                        }
                        l = u - 1;
                        continue
                    }
                    if (-1 === (u = R(t, l - 1))) {
                        s(i, q(m(t.slice(r, l)))), i = !1, r = l + 1;
                        continue
                    }
                } else ; else {
                    if (-1 === (u = t.indexOf(c, l + 1))) break;
                    s(i, m(t.slice(n + 1, u))), i = !1, r = (l = u) + 1
                } else i = t.slice(r, l), r = l + 1, n = '"' === t.charAt(r) || "'" === t.charAt(r) ? r : H(t, l + 1)
            }
            return r < t.length && (!1 === i ? s(t.slice(r)) : s(i, q(m(t.slice(r))))), m(o.join(" "))
        }
    }, U = g.FilterCSS, Q = G.parseTag, K = G.parseAttr;

    function $(t) {
        return null == t
    }

    function tt(t) {
        (t = function (t) {
            var e = {};
            for (var r in t) e[r] = t[r];
            return e
        }(t || {})).stripIgnoreTag && (t.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), t.onIgnoreTag = B.onIgnoreTagStripAll), t.whiteList || t.allowList ? t.whiteList = function (t) {
            var e = {};
            for (var r in t) Array.isArray(t[r]) ? e[r.toLowerCase()] = t[r].map((function (t) {
                return t.toLowerCase()
            })) : e[r.toLowerCase()] = t[r];
            return e
        }(t.whiteList || t.allowList) : t.whiteList = B.whiteList, t.onTag = t.onTag || B.onTag, t.onTagAttr = t.onTagAttr || B.onTagAttr, t.onIgnoreTag = t.onIgnoreTag || B.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || B.onIgnoreTagAttr, t.safeAttrValue = t.safeAttrValue || B.safeAttrValue, t.escapeHtml = t.escapeHtml || B.escapeHtml, this.options = t, !1 === t.css ? this.cssFilter = !1 : (t.css = t.css || {}, this.cssFilter = new U(t.css))
    }

    tt.prototype.process = function (t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this.options, r = e.whiteList, n = e.onTag, o = e.onIgnoreTag, i = e.onTagAttr, a = e.onIgnoreTagAttr,
            s = e.safeAttrValue, l = e.escapeHtml, u = this.cssFilter;
        e.stripBlankChar && (t = B.stripBlankChar(t)), e.allowCommentTag || (t = B.stripCommentTag(t));
        var c = !1;
        e.stripIgnoreTagBody && (c = B.StripTagBody(e.stripIgnoreTagBody, o), o = c.onIgnoreTag);
        var f = Q(t, (function (t, e, c, f, d) {
            var p = {sourcePosition: t, position: e, isClosing: d, isWhite: Object.prototype.hasOwnProperty.call(r, c)},
                g = n(c, f, p);
            if (!$(g)) return g;
            if (p.isWhite) {
                if (p.isClosing) return "</" + c + ">";
                var b = function (t) {
                    var e = v(t);
                    if (-1 === e) return {html: "", closing: "/" === t[t.length - 2]};
                    var r = "/" === (t = m(t.slice(e + 1, -1)))[t.length - 1];
                    return r && (t = m(t.slice(0, -1))), {html: t, closing: r}
                }(f), y = r[c], x = K(b.html, (function (t, e) {
                    var r = -1 !== h(y, t), n = i(c, t, e, r);
                    return $(n) ? r ? (e = s(c, t, e, u)) ? t + '="' + e + '"' : t : $(n = a(c, t, e, r)) ? void 0 : n : n
                }));
                return f = "<" + c, x && (f += " " + x), b.closing && (f += " /"), f += ">"
            }
            return $(g = o(c, f, p)) ? l(f) : g
        }), l);
        return c && (f = c.remove(f)), f
    };
    var et = tt, rt = r((function (t, e) {
        function r(t, e) {
            return new et(e).process(t)
        }

        (e = t.exports = r).filterXSS = r, e.FilterXSS = et, function () {
            for (var t in B) e[t] = B[t];
            for (var r in G) e[r] = G[r]
        }(), "undefined" != typeof window && (window.filterXSS = t.exports), "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = t.exports)
    })), nt = rt.filterXSS, ot = rt.FilterXSS, it = r((function (t) {
        t.exports = function (t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(it);
    var at = r((function (t) {
        t.exports = function (t) {
            if (Array.isArray(t)) return it(t)
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(at);
    var st = r((function (t) {
        t.exports = function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(st);
    var lt = r((function (t) {
        t.exports = function (t, e) {
            if (t) {
                if ("string" == typeof t) return it(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? it(t, e) : void 0
            }
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(lt);
    var ut = r((function (t) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(ut);
    var ct = e(r((function (t) {
        t.exports = function (t) {
            return at(t) || st(t) || lt(t) || ut()
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }))), ft = r((function (t) {
        t.exports = function (t) {
            if (Array.isArray(t)) return t
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(ft);
    var dt = r((function (t) {
        t.exports = function (t, e) {
            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != r) {
                var n, o, i, a, s = [], l = !0, u = !1;
                try {
                    if (i = (r = r.call(t)).next, 0 === e) {
                        if (Object(r) !== r) return;
                        l = !1
                    } else for (; !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== e); l = !0) ;
                } catch (c) {
                    u = !0, o = c
                } finally {
                    try {
                        if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                    } finally {
                        if (u) throw o
                    }
                }
                return s
            }
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(dt);
    var pt = r((function (t) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(pt);
    var gt = e(r((function (t) {
        t.exports = function (t, e) {
            return ft(t) || dt(t, e) || lt(t, e) || pt()
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    })));

    function ht(t) {
        var e = t.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/) || [],
            r = gt(e, 8);
        return {url: r[0], scheme: r[1], slash: r[2], host: r[3], port: r[4], path: r[5], query: r[6], hash: r[7]}
    }

    var bt = function (t) {
        return -1 === t.indexOf("&#") ? t.trim().toLowerCase() : t.trim().replace(/&#(?:(x)([0-9a-f]+)|([0-9]+));?/gi, (function (t, e, r, n) {
            return String.fromCharCode(e ? parseInt(r, 16) : parseInt(n))
        })).toLowerCase()
    };

    function mt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if ("string" != typeof t) return !0;
        var e = (t = bt(t)).replace(/(\t|\n|\r)/g, "");
        if (t !== e) return !1;
        if (/^javascript:/i.test(t)) {
            var r = t.slice("javascript:".length).replace(/\s/g, "").trim(),
                n = ["void", "void(0)", "void0", "false", "undefined", ";"];
            return !!n.some((function (t) {
                return t === r
            }))
        }
        return !0
    }

    var vt = function (t) {
        return mt(t) ? t : "#"
    };

    function yt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            r = arguments.length > 2 ? arguments[2] : void 0;
        if ("string" != typeof t) return !0;
        if (!mt(t = bt(t))) return !1;
        var n = ht(t), i = n.scheme, a = n.host;
        return r ? Boolean(r(t)) : !["http", "https", "file"].includes(i) || ("object" === ("undefined" == typeof window ? "undefined" : o(window)) && window && (e = [].concat(ct(e), [location.host])), e.some((function (t) {
            return !!(t instanceof RegExp && t.test(a)) || t === a
        })))
    }

    var xt, wt = "function" == typeof atob, At = "function" == typeof btoa, kt = "function" == typeof Buffer,
        St = "function" == typeof TextDecoder ? new TextDecoder : void 0,
        Tt = "function" == typeof TextEncoder ? new TextEncoder : void 0,
        Lt = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
        jt = (xt = {}, Lt.forEach((function (t, e) {
            return xt[t] = e
        })), xt), Ct = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        _t = String.fromCharCode.bind(String),
        It = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (t) {
            return new Uint8Array(Array.prototype.slice.call(t, 0))
        }, Nt = function (t) {
            return t.replace(/=/g, "").replace(/[+\/]/g, (function (t) {
                return "+" == t ? "-" : "_"
            }))
        }, Wt = function (t) {
            return t.replace(/[^A-Za-z0-9\+\/]/g, "")
        }, zt = At ? function (t) {
            return btoa(t)
        } : kt ? function (t) {
            return Buffer.from(t, "binary").toString("base64")
        } : function (t) {
            for (var e, r, n, o, i = "", a = t.length % 3, s = 0; s < t.length;) {
                if ((r = t.charCodeAt(s++)) > 255 || (n = t.charCodeAt(s++)) > 255 || (o = t.charCodeAt(s++)) > 255) throw new TypeError("invalid character found");
                i += Lt[(e = r << 16 | n << 8 | o) >> 18 & 63] + Lt[e >> 12 & 63] + Lt[e >> 6 & 63] + Lt[63 & e]
            }
            return a ? i.slice(0, a - 3) + "===".substring(a) : i
        }, Ft = kt ? function (t) {
            return Buffer.from(t).toString("base64")
        } : function (t) {
            for (var e = [], r = 0, n = t.length; r < n; r += 4096) e.push(_t.apply(null, t.subarray(r, r + 4096)));
            return zt(e.join(""))
        }, Mt = function (t) {
            if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? _t(192 | e >>> 6) + _t(128 | 63 & e) : _t(224 | e >>> 12 & 15) + _t(128 | e >>> 6 & 63) + _t(128 | 63 & e);
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return _t(240 | e >>> 18 & 7) + _t(128 | e >>> 12 & 63) + _t(128 | e >>> 6 & 63) + _t(128 | 63 & e)
        }, Xt = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Ot = kt ? function (t) {
            return Buffer.from(t, "utf8").toString("base64")
        } : Tt ? function (t) {
            return Ft(Tt.encode(t))
        } : function (t) {
            return zt(t.replace(Xt, Mt))
        }, Et = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return e ? Nt(Ot(t)) : Ot(t)
        }, Pt = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, Zt = function (t) {
            switch (t.length) {
                case 4:
                    var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                    return _t(55296 + (e >>> 10)) + _t(56320 + (1023 & e));
                case 3:
                    return _t((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                default:
                    return _t((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
            }
        }, Bt = wt ? function (t) {
            return atob(Wt(t))
        } : kt ? function (t) {
            return Buffer.from(t, "base64").toString("binary")
        } : function (t) {
            if (t = t.replace(/\s+/g, ""), !Ct.test(t)) throw new TypeError("malformed base64.");
            t += "==".slice(2 - (3 & t.length));
            for (var e, r, n, o = "", i = 0; i < t.length;) e = jt[t.charAt(i++)] << 18 | jt[t.charAt(i++)] << 12 | (r = jt[t.charAt(i++)]) << 6 | (n = jt[t.charAt(i++)]), o += 64 === r ? _t(e >> 16 & 255) : 64 === n ? _t(e >> 16 & 255, e >> 8 & 255) : _t(e >> 16 & 255, e >> 8 & 255, 255 & e);
            return o
        }, Dt = kt ? function (t) {
            return It(Buffer.from(t, "base64"))
        } : function (t) {
            return It(Bt(t).split("").map((function (t) {
                return t.charCodeAt(0)
            })))
        }, Jt = kt ? function (t) {
            return Buffer.from(t, "base64").toString("utf8")
        } : St ? function (t) {
            return St.decode(Dt(t))
        } : function (t) {
            return Bt(t).replace(Pt, Zt)
        }, Vt = function (t) {
            return Jt(function (t) {
                return Wt(t.replace(/[-_]/g, (function (t) {
                    return "-" == t ? "+" : "/"
                })))
            }(t))
        }, Yt = function (t) {
            return t && t.Math == Math && t
        },
        Ht = Yt("object" === ("undefined" == typeof globalThis ? "undefined" : o(globalThis)) && globalThis) || Yt("object" === ("undefined" == typeof window ? "undefined" : o(window)) && window) || Yt("object" === ("undefined" == typeof self ? "undefined" : o(self)) && self) || Yt("object" === ("undefined" == typeof global ? "undefined" : o(global)) && global) || Function("return this")(),
        Rt = {
            onIgnoreTagAttr: function (t, e, r) {
                return t && ["href", "src"].indexOf(e) > -1 ? Rt.domainWhiteList && Array.isArray(Rt.domainWhiteList) && Rt.domainWhiteList.length > 0 && !yt(r, ct(Rt.domainWhiteList)) ? "" : "".concat(e, '="').concat(vt(r), '"') : t && (["style", "class", "id"].indexOf(e) > -1 || e.indexOf("data-") > -1) ? "".concat(e, '="').concat(r, '"') : void (Rt.xssLog && Rt.xssLog({
                    type: "attr",
                    tagName: t,
                    attrName: e,
                    value: r
                }))
            }, onIgnoreTag: function (t, e) {
                if ("style" === t) return e;
                Rt.xssLog && Rt.xssLog({type: "tag", tagName: t, value: e})
            }, whiteList: {
                a: ["target", "title", "spellcheck", "rel"],
                canvas: [],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: ["dir"],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["alt", "title", "width", "height", "decoding"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                delete: [],
                form: [],
                strong: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                wbr: [],
                video: ["autoplay", "controls", "loop", "preload", "height", "width"],
                svg: ["viewBox", "version", "xmlns", "fill", "width", "height", "stroke", "stroke-width", "style"],
                path: ["d", "fill", "opacity", "stroke", "p-id", "fill-rule", "clip-rule", "stroke-width", "stroke-linecap", "stroke-linejoin"],
                rect: ["x", "y", "width", "height", "fill", "stroke", "rx"],
                g: []
            }
        }, qt = function () {
            if (Rt.reportUrl) return Rt.reportUrl;
            var t, e = {
                cn: Vt("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                boe: Vt("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                ttp: Vt("aHR0cHM6Ly9tb24udXMudGlrdG9rdi5jb20vbW9uaXRvcl9icm93c2VyL2NvbGxlY3QvYmF0Y2gvc2VjdXJpdHkvP2JpZD0="),
                va: Vt("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                sg: Vt("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                boei18n: Vt("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9")
            }[Rt.region ? Rt.region : ((null === (t = null == Ht ? void 0 : Ht.gfdatav1) || void 0 === t ? void 0 : t.region) || "cn").toLowerCase()];
            return e ? e + function () {
                var t, e;
                if (Rt.bid) return Rt.bid;
                var r = Ht;
                if (r && r._xssBid) return r._xssBid;
                if (r && r.slardar && "function" == typeof r.slardar.config) {
                    var n = (r.slardar.config() || {}).bid;
                    if (n) return n
                }
                if (r && r.Slardar && "function" == typeof r.Slardar.config) {
                    var o = (r.Slardar.config() || {}).bid;
                    if (o) return o
                }
                return (null === (e = null === (t = null == r ? void 0 : r.Slardar) || void 0 === t ? void 0 : t._baseParams) || void 0 === e ? void 0 : e.bid) || "argus"
            }() : void 0
        };
    var Gt = e(r((function (t) {
        t.exports = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }))), Ut = r((function (t) {
        var e = n.default;
        t.exports = function (t, r) {
            if ("object" !== e(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var o = n.call(t, r || "default");
                if ("object" !== e(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === r ? String : Number)(t)
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(Ut);
    var Qt = r((function (t) {
        var e = n.default;
        t.exports = function (t) {
            var r = Ut(t, "string");
            return "symbol" === e(r) ? r : String(r)
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }));
    e(Qt);
    var Kt, $t = e(r((function (t) {
        function e(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Qt(n.key), n)
            }
        }

        t.exports = function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t
        }, t.exports.__esModule = !0, t.exports.default = t.exports
    }))), te = new (function () {
        function t() {
            Gt(this, t), this.batchData = [], this.uniqKeys = new Set, this.timeout = 2e3, this.lock = !1
        }

        return $t(t, [{
            key: "upload", value: function () {
                var t = this, e = qt();
                !this.lock && e && 0 !== this.batchData.length && "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (this.lock = !0, setTimeout((function () {
                    var r = t.batchData.slice(0, 100);
                    t.batchData = t.batchData.slice(100), window.fetch(e, {
                        method: "post",
                        body: JSON.stringify(r),
                        headers: {"Content-Type": "application/json"}
                    }).catch((function (t) {
                        console.warn("xss defense report error", t)
                    })), t.lock = !1, t.upload()
                }), this.timeout))
            }
        }, {
            key: "generateKey", value: function (t) {
                return ["type", "url", "sourceText"].map((function (e) {
                    return t[e]
                })).join("___")
            }
        }, {
            key: "push", value: function (t) {
                var e = this.generateKey(t);
                this.uniqKeys.has(e) || (this.uniqKeys.add(e), this.batchData.push(t), this.upload())
            }
        }]), t
    }()), ee = function (t) {
        if ("object" === ("undefined" == typeof window ? "undefined" : o(window)) && window.fetch) {
            var e = {age: Math.floor(Date.now()), type: "xss", url: window.location.href, body: t, "user-agent": ""};
            te.push(e)
        }
    }, re = function (t) {
        var e = t.reportOnly, r = void 0 === e || e, n = t.block;
        return r && "all" === r ? "report" : n ? "enforce" : r ? "report" : "enforce"
    }, ne = function (t) {
        return "string" == typeof t ? t.replace(/\'/g, '"').replace('=""', "").replace(/\s+/g, "").toLowerCase() : ""
    }, oe = function (t) {
        return function (e, r, n) {
            if (!e || "string" != typeof e) return e;
            var o = t(e, r);
            if (ne(o) === ne(e)) return e;
            if (!n) return o;
            var i = n.logType, a = re(n);
            return ee({type: i, disposition: a, sourceText: Et(e), filterText: Et(o)}), "enforce" === a ? o : e
        }
    }, ie = oe(nt), ae = oe((function (t) {
        return new ot(Rt).process(t)
    })), se = (Kt = vt, function (t, e, r) {
        var n = Kt(t);
        if (n === t) return t;
        var o = e || r || {};
        if (!o) return n;
        var i = o.logType, a = re(r);
        return ee({type: i, disposition: a, sourceText: Et(t), filterText: Et(n)}), "enforce" === a ? n : t
    }), le = Ht._xssProject || {}, ue = {
        FilterXSS: ot,
        version: "2.0.80",
        filterXSS: ie,
        _filterXSS: ae,
        filterUrl: se,
        Config: Rt,
        project: le,
        setProjectName: function (t) {
            le[t] = this, Ht._xssProjectName = t
        }
    };
    le["2.0.80"] = ue, Ht.globalThis = Ht, Ht.getFilterXss = function () {
        return void 0 !== this._xssProjectName ? this._xssProject[this._xssProjectName] : ue
    }, Ht.xss = ue, Ht.isSafeUrl = yt, Ht._xssProject = le, Ht._xssProjectName && (le[Ht._xssProjectName] = ue);
    var ce = ue.setProjectName.bind(ue);
    t.Config = Rt, t.FilterXSS = ot, t._filterXSS = ae, t.filterUrl = se, t.filterXSS = ie, t.isSafeUrl = yt, t.project = le, t.setProjectName = ce, Object.defineProperty(t, "__esModule", {value: !0})
}));