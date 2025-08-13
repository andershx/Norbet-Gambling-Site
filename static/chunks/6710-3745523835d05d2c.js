(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6710], {
        5239: function(e) {
            "use strict";
            let {
                entries: t,
                setPrototypeOf: n,
                isFrozen: r,
                getPrototypeOf: i,
                getOwnPropertyDescriptor: s
            } = Object, {
                freeze: l,
                seal: o,
                create: a
            } = Object, {
                apply: c,
                construct: p
            } = "undefined" != typeof Reflect && Reflect;
            l || (l = function(e) {
                return e
            }), o || (o = function(e) {
                return e
            }), c || (c = function(e, t, n) {
                return e.apply(t, n)
            }), p || (p = function(e, t) {
                return new e(...t)
            });
            let u = A(Array.prototype.forEach),
                h = A(Array.prototype.lastIndexOf),
                f = A(Array.prototype.pop),
                d = A(Array.prototype.push),
                g = A(Array.prototype.splice),
                m = A(String.prototype.toLowerCase),
                k = A(String.prototype.toString),
                x = A(String.prototype.match),
                b = A(String.prototype.replace),
                y = A(String.prototype.indexOf),
                w = A(String.prototype.trim),
                T = A(Object.prototype.hasOwnProperty),
                _ = A(RegExp.prototype.test),
                E = (Q = TypeError, function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return p(Q, t)
                });

            function A(e) {
                return function(t) {
                    t instanceof RegExp && (t.lastIndex = 0);
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    return c(e, t, r)
                }
            }

            function S(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
                n && n(e, null);
                let s = t.length;
                for (; s--;) {
                    let n = t[s];
                    if ("string" == typeof n) {
                        let e = i(n);
                        e !== n && (r(t) || (t[s] = e), n = e)
                    }
                    e[n] = !0
                }
                return e
            }

            function R(e) {
                let n = a(null);
                for (let [r, i] of t(e)) T(e, r) && (Array.isArray(i) ? n[r] = function(e) {
                    for (let t = 0; t < e.length; t++) T(e, t) || (e[t] = null);
                    return e
                }(i) : i && "object" == typeof i && i.constructor === Object ? n[r] = R(i) : n[r] = i);
                return n
            }

            function N(e, t) {
                for (; null !== e;) {
                    let n = s(e, t);
                    if (n) {
                        if (n.get) return A(n.get);
                        if ("function" == typeof n.value) return A(n.value)
                    }
                    e = i(e)
                }
                return function() {
                    return null
                }
            }
            let z = l(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                $ = l(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                v = l(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                I = l(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                L = l(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                O = l(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                C = l(["#text"]),
                D = l(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
                M = l(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                P = l(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                U = l(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                H = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                F = o(/<%[\w\W]*|[\w\W]*%>/gm),
                B = o(/\$\{[\w\W]*/gm),
                q = o(/^data-[\-\w.\u00B7-\uFFFF]+$/),
                W = o(/^aria-[\-\w]+$/),
                Z = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                j = o(/^(?:\w+script|data):/i),
                G = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                Y = o(/^html$/i);
            var Q, X = Object.freeze({
                __proto__: null,
                ARIA_ATTR: W,
                ATTR_WHITESPACE: G,
                CUSTOM_ELEMENT: o(/^[a-z][.\w]*(-[.\w]+)+$/i),
                DATA_ATTR: q,
                DOCTYPE_NAME: Y,
                ERB_EXPR: F,
                IS_ALLOWED_URI: Z,
                IS_SCRIPT_OR_DATA: j,
                MUSTACHE_EXPR: H,
                TMPLIT_EXPR: B
            });
            let K = {
                    element: 1,
                    text: 3,
                    progressingInstruction: 7,
                    comment: 8,
                    document: 9
                },
                V = function(e, t) {
                    if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                    let n = null,
                        r = "data-tt-policy-suffix";
                    t && t.hasAttribute(r) && (n = t.getAttribute(r));
                    let i = "dompurify" + (n ? "#" + n : "");
                    try {
                        return e.createPolicy(i, {
                            createHTML: e => e,
                            createScriptURL: e => e
                        })
                    } catch (e) {
                        return console.warn("TrustedTypes policy " + i + " could not be created."), null
                    }
                },
                J = function() {
                    return {
                        afterSanitizeAttributes: [],
                        afterSanitizeElements: [],
                        afterSanitizeShadowDOM: [],
                        beforeSanitizeAttributes: [],
                        beforeSanitizeElements: [],
                        beforeSanitizeShadowDOM: [],
                        uponSanitizeAttribute: [],
                        uponSanitizeElement: [],
                        uponSanitizeShadowNode: []
                    }
                };
            var ee = function e() {
                let n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "undefined" == typeof window ? null : window,
                    i = t => e(t);
                if (i.version = "3.2.6", i.removed = [], !r || !r.document || r.document.nodeType !== K.document || !r.Element) return i.isSupported = !1, i;
                let {
                    document: s
                } = r, o = s, c = o.currentScript, {
                    DocumentFragment: p,
                    HTMLTemplateElement: A,
                    Node: H,
                    Element: F,
                    NodeFilter: B,
                    NamedNodeMap: q = r.NamedNodeMap || r.MozNamedAttrMap,
                    HTMLFormElement: W,
                    DOMParser: j,
                    trustedTypes: G
                } = r, Q = F.prototype, ee = N(Q, "cloneNode"), et = N(Q, "remove"), en = N(Q, "nextSibling"), er = N(Q, "childNodes"), ei = N(Q, "parentNode");
                if ("function" == typeof A) {
                    let e = s.createElement("template");
                    e.content && e.content.ownerDocument && (s = e.content.ownerDocument)
                }
                let es = "",
                    {
                        implementation: el,
                        createNodeIterator: eo,
                        createDocumentFragment: ea,
                        getElementsByTagName: ec
                    } = s,
                    {
                        importNode: ep
                    } = o,
                    eu = J();
                i.isSupported = "function" == typeof t && "function" == typeof ei && el && void 0 !== el.createHTMLDocument;
                let {
                    MUSTACHE_EXPR: eh,
                    ERB_EXPR: ef,
                    TMPLIT_EXPR: ed,
                    DATA_ATTR: eg,
                    ARIA_ATTR: em,
                    IS_SCRIPT_OR_DATA: ek,
                    ATTR_WHITESPACE: ex,
                    CUSTOM_ELEMENT: eb
                } = X, {
                    IS_ALLOWED_URI: ey
                } = X, ew = null, eT = S({}, [...z, ...$, ...v, ...L, ...C]), e_ = null, eE = S({}, [...D, ...M, ...P, ...U]), eA = Object.seal(a(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    allowCustomizedBuiltInElements: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: !1
                    }
                })), eS = null, eR = null, eN = !0, ez = !0, e$ = !1, ev = !0, eI = !1, eL = !0, eO = !1, eC = !1, eD = !1, eM = !1, eP = !1, eU = !1, eH = !0, eF = !1, eB = !0, eq = !1, eW = {}, eZ = null, ej = S({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), eG = null, eY = S({}, ["audio", "video", "img", "source", "image", "track"]), eQ = null, eX = S({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), eK = "http://www.w3.org/1998/Math/MathML", eV = "http://www.w3.org/2000/svg", eJ = "http://www.w3.org/1999/xhtml", e0 = eJ, e1 = !1, e3 = null, e2 = S({}, [eK, eV, eJ], k), e9 = S({}, ["mi", "mo", "mn", "ms", "mtext"]), e6 = S({}, ["annotation-xml"]), e4 = S({}, ["title", "style", "font", "a", "script"]), e5 = null, e7 = ["application/xhtml+xml", "text/html"], e8 = null, te = null, tt = s.createElement("form"), tn = function(e) {
                    return e instanceof RegExp || e instanceof Function
                }, tr = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!te || te !== e) {
                        if (e && "object" == typeof e || (e = {}), e = R(e), e8 = "application/xhtml+xml" === (e5 = -1 === e7.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE) ? k : m, ew = T(e, "ALLOWED_TAGS") ? S({}, e.ALLOWED_TAGS, e8) : eT, e_ = T(e, "ALLOWED_ATTR") ? S({}, e.ALLOWED_ATTR, e8) : eE, e3 = T(e, "ALLOWED_NAMESPACES") ? S({}, e.ALLOWED_NAMESPACES, k) : e2, eQ = T(e, "ADD_URI_SAFE_ATTR") ? S(R(eX), e.ADD_URI_SAFE_ATTR, e8) : eX, eG = T(e, "ADD_DATA_URI_TAGS") ? S(R(eY), e.ADD_DATA_URI_TAGS, e8) : eY, eZ = T(e, "FORBID_CONTENTS") ? S({}, e.FORBID_CONTENTS, e8) : ej, eS = T(e, "FORBID_TAGS") ? S({}, e.FORBID_TAGS, e8) : R({}), eR = T(e, "FORBID_ATTR") ? S({}, e.FORBID_ATTR, e8) : R({}), eW = !!T(e, "USE_PROFILES") && e.USE_PROFILES, eN = !1 !== e.ALLOW_ARIA_ATTR, ez = !1 !== e.ALLOW_DATA_ATTR, e$ = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ev = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, eI = e.SAFE_FOR_TEMPLATES || !1, eL = !1 !== e.SAFE_FOR_XML, eO = e.WHOLE_DOCUMENT || !1, eM = e.RETURN_DOM || !1, eP = e.RETURN_DOM_FRAGMENT || !1, eU = e.RETURN_TRUSTED_TYPE || !1, eD = e.FORCE_BODY || !1, eH = !1 !== e.SANITIZE_DOM, eF = e.SANITIZE_NAMED_PROPS || !1, eB = !1 !== e.KEEP_CONTENT, eq = e.IN_PLACE || !1, ey = e.ALLOWED_URI_REGEXP || Z, e0 = e.NAMESPACE || eJ, e9 = e.MATHML_TEXT_INTEGRATION_POINTS || e9, e6 = e.HTML_INTEGRATION_POINTS || e6, eA = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (eA.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (eA.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (eA.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), eI && (ez = !1), eP && (eM = !0), eW && (ew = S({}, C), e_ = [], !0 === eW.html && (S(ew, z), S(e_, D)), !0 === eW.svg && (S(ew, $), S(e_, M), S(e_, U)), !0 === eW.svgFilters && (S(ew, v), S(e_, M), S(e_, U)), !0 === eW.mathMl && (S(ew, L), S(e_, P), S(e_, U))), e.ADD_TAGS && (ew === eT && (ew = R(ew)), S(ew, e.ADD_TAGS, e8)), e.ADD_ATTR && (e_ === eE && (e_ = R(e_)), S(e_, e.ADD_ATTR, e8)), e.ADD_URI_SAFE_ATTR && S(eQ, e.ADD_URI_SAFE_ATTR, e8), e.FORBID_CONTENTS && (eZ === ej && (eZ = R(eZ)), S(eZ, e.FORBID_CONTENTS, e8)), eB && (ew["#text"] = !0), eO && S(ew, ["html", "head", "body"]), ew.table && (S(ew, ["tbody"]), delete eS.tbody), e.TRUSTED_TYPES_POLICY) {
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw E('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                            es = (n = e.TRUSTED_TYPES_POLICY).createHTML("")
                        } else void 0 === n && (n = V(G, c)), null !== n && "string" == typeof es && (es = n.createHTML(""));
                        l && l(e), te = e
                    }
                }, ti = S({}, [...$, ...v, ...I]), ts = S({}, [...L, ...O]), tl = function(e) {
                    let t = ei(e);
                    t && t.tagName || (t = {
                        namespaceURI: e0,
                        tagName: "template"
                    });
                    let n = m(e.tagName),
                        r = m(t.tagName);
                    return !!e3[e.namespaceURI] && (e.namespaceURI === eV ? t.namespaceURI === eJ ? "svg" === n : t.namespaceURI === eK ? "svg" === n && ("annotation-xml" === r || e9[r]) : !!ti[n] : e.namespaceURI === eK ? t.namespaceURI === eJ ? "math" === n : t.namespaceURI === eV ? "math" === n && e6[r] : !!ts[n] : e.namespaceURI === eJ ? (t.namespaceURI !== eV || !!e6[r]) && (t.namespaceURI !== eK || !!e9[r]) && !ts[n] && (e4[n] || !ti[n]) : "application/xhtml+xml" === e5 && !!e3[e.namespaceURI])
                }, to = function(e) {
                    d(i.removed, {
                        element: e
                    });
                    try {
                        ei(e).removeChild(e)
                    } catch (t) {
                        et(e)
                    }
                }, ta = function(e, t) {
                    try {
                        d(i.removed, {
                            attribute: t.getAttributeNode(e),
                            from: t
                        })
                    } catch (e) {
                        d(i.removed, {
                            attribute: null,
                            from: t
                        })
                    }
                    if (t.removeAttribute(e), "is" === e) {
                        if (eM || eP) try {
                            to(t)
                        } catch (e) {} else try {
                            t.setAttribute(e, "")
                        } catch (e) {}
                    }
                }, tc = function(e) {
                    let t = null,
                        r = null;
                    if (eD) e = "<remove></remove>" + e;
                    else {
                        let t = x(e, /^[\r\n\t ]+/);
                        r = t && t[0]
                    }
                    "application/xhtml+xml" === e5 && e0 === eJ && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                    let i = n ? n.createHTML(e) : e;
                    if (e0 === eJ) try {
                        t = new j().parseFromString(i, e5)
                    } catch (e) {}
                    if (!t || !t.documentElement) {
                        t = el.createDocument(e0, "template", null);
                        try {
                            t.documentElement.innerHTML = e1 ? es : i
                        } catch (e) {}
                    }
                    let l = t.body || t.documentElement;
                    return (e && r && l.insertBefore(s.createTextNode(r), l.childNodes[0] || null), e0 === eJ) ? ec.call(t, eO ? "html" : "body")[0] : eO ? t.documentElement : l
                }, tp = function(e) {
                    return eo.call(e.ownerDocument || e, e, B.SHOW_ELEMENT | B.SHOW_COMMENT | B.SHOW_TEXT | B.SHOW_PROCESSING_INSTRUCTION | B.SHOW_CDATA_SECTION, null)
                }, tu = function(e) {
                    return e instanceof W && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof q) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                }, th = function(e) {
                    return "function" == typeof H && e instanceof H
                };

                function tf(e, t, n) {
                    u(e, e => {
                        e.call(i, t, n, te)
                    })
                }
                let td = function(e) {
                        let t = null;
                        if (tf(eu.beforeSanitizeElements, e, null), tu(e)) return to(e), !0;
                        let n = e8(e.nodeName);
                        if (tf(eu.uponSanitizeElement, e, {
                                tagName: n,
                                allowedTags: ew
                            }), eL && e.hasChildNodes() && !th(e.firstElementChild) && _(/<[/\w!]/g, e.innerHTML) && _(/<[/\w!]/g, e.textContent) || e.nodeType === K.progressingInstruction || eL && e.nodeType === K.comment && _(/<[/\w]/g, e.data)) return to(e), !0;
                        if (!ew[n] || eS[n]) {
                            if (!eS[n] && tm(n) && (eA.tagNameCheck instanceof RegExp && _(eA.tagNameCheck, n) || eA.tagNameCheck instanceof Function && eA.tagNameCheck(n))) return !1;
                            if (eB && !eZ[n]) {
                                let t = ei(e) || e.parentNode,
                                    n = er(e) || e.childNodes;
                                if (n && t) {
                                    let r = n.length;
                                    for (let i = r - 1; i >= 0; --i) {
                                        let r = ee(n[i], !0);
                                        r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, en(e))
                                    }
                                }
                            }
                            return to(e), !0
                        }
                        return e instanceof F && !tl(e) || ("noscript" === n || "noembed" === n || "noframes" === n) && _(/<\/no(script|embed|frames)/i, e.innerHTML) ? (to(e), !0) : (eI && e.nodeType === K.text && (t = e.textContent, u([eh, ef, ed], e => {
                            t = b(t, e, " ")
                        }), e.textContent !== t && (d(i.removed, {
                            element: e.cloneNode()
                        }), e.textContent = t)), tf(eu.afterSanitizeElements, e, null), !1)
                    },
                    tg = function(e, t, n) {
                        if (eH && ("id" === t || "name" === t) && (n in s || n in tt)) return !1;
                        if (ez && !eR[t] && _(eg, t));
                        else if (eN && _(em, t));
                        else if (!e_[t] || eR[t]) {
                            if (!(tm(e) && (eA.tagNameCheck instanceof RegExp && _(eA.tagNameCheck, e) || eA.tagNameCheck instanceof Function && eA.tagNameCheck(e)) && (eA.attributeNameCheck instanceof RegExp && _(eA.attributeNameCheck, t) || eA.attributeNameCheck instanceof Function && eA.attributeNameCheck(t)) || "is" === t && eA.allowCustomizedBuiltInElements && (eA.tagNameCheck instanceof RegExp && _(eA.tagNameCheck, n) || eA.tagNameCheck instanceof Function && eA.tagNameCheck(n)))) return !1
                        } else if (eQ[t]);
                        else if (_(ey, b(n, ex, "")));
                        else if (("src" === t || "xlink:href" === t || "href" === t) && "script" !== e && 0 === y(n, "data:") && eG[e]);
                        else if (e$ && !_(ek, b(n, ex, "")));
                        else if (n) return !1;
                        return !0
                    },
                    tm = function(e) {
                        return "annotation-xml" !== e && x(e, eb)
                    },
                    tk = function(e) {
                        tf(eu.beforeSanitizeAttributes, e, null);
                        let {
                            attributes: t
                        } = e;
                        if (!t || tu(e)) return;
                        let r = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: e_,
                                forceKeepAttr: void 0
                            },
                            s = t.length;
                        for (; s--;) {
                            let {
                                name: l,
                                namespaceURI: o,
                                value: a
                            } = t[s], c = e8(l), p = "value" === l ? a : w(a);
                            if (r.attrName = c, r.attrValue = p, r.keepAttr = !0, r.forceKeepAttr = void 0, tf(eu.uponSanitizeAttribute, e, r), p = r.attrValue, eF && ("id" === c || "name" === c) && (ta(l, e), p = "user-content-" + p), eL && _(/((--!?|])>)|<\/(style|title)/i, p)) {
                                ta(l, e);
                                continue
                            }
                            if (r.forceKeepAttr) continue;
                            if (!r.keepAttr || !ev && _(/\/>/i, p)) {
                                ta(l, e);
                                continue
                            }
                            eI && u([eh, ef, ed], e => {
                                p = b(p, e, " ")
                            });
                            let h = e8(e.nodeName);
                            if (!tg(h, c, p)) {
                                ta(l, e);
                                continue
                            }
                            if (n && "object" == typeof G && "function" == typeof G.getAttributeType) {
                                if (o);
                                else switch (G.getAttributeType(h, c)) {
                                    case "TrustedHTML":
                                        p = n.createHTML(p);
                                        break;
                                    case "TrustedScriptURL":
                                        p = n.createScriptURL(p)
                                }
                            }
                            if (p !== a) try {
                                o ? e.setAttributeNS(o, l, p) : e.setAttribute(l, p), tu(e) ? to(e) : f(i.removed)
                            } catch (t) {
                                ta(l, e)
                            }
                        }
                        tf(eu.afterSanitizeAttributes, e, null)
                    },
                    tx = function e(t) {
                        let n = null,
                            r = tp(t);
                        for (tf(eu.beforeSanitizeShadowDOM, t, null); n = r.nextNode();) tf(eu.uponSanitizeShadowNode, n, null), td(n), tk(n), n.content instanceof p && e(n.content);
                        tf(eu.afterSanitizeShadowDOM, t, null)
                    };
                return i.sanitize = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = null,
                        s = null,
                        l = null,
                        a = null;
                    if ((e1 = !e) && (e = "<!-->"), "string" != typeof e && !th(e)) {
                        if ("function" == typeof e.toString) {
                            if ("string" != typeof(e = e.toString())) throw E("dirty is not a string, aborting")
                        } else throw E("toString is not a function")
                    }
                    if (!i.isSupported) return e;
                    if (eC || tr(t), i.removed = [], "string" == typeof e && (eq = !1), eq) {
                        if (e.nodeName) {
                            let t = e8(e.nodeName);
                            if (!ew[t] || eS[t]) throw E("root node is forbidden and cannot be sanitized in-place")
                        }
                    } else if (e instanceof H)(s = (r = tc("<!---->")).ownerDocument.importNode(e, !0)).nodeType === K.element && "BODY" === s.nodeName ? r = s : "HTML" === s.nodeName ? r = s : r.appendChild(s);
                    else {
                        if (!eM && !eI && !eO && -1 === e.indexOf("<")) return n && eU ? n.createHTML(e) : e;
                        if (!(r = tc(e))) return eM ? null : eU ? es : ""
                    }
                    r && eD && to(r.firstChild);
                    let c = tp(eq ? e : r);
                    for (; l = c.nextNode();) td(l), tk(l), l.content instanceof p && tx(l.content);
                    if (eq) return e;
                    if (eM) {
                        if (eP)
                            for (a = ea.call(r.ownerDocument); r.firstChild;) a.appendChild(r.firstChild);
                        else a = r;
                        return (e_.shadowroot || e_.shadowrootmode) && (a = ep.call(o, a, !0)), a
                    }
                    let h = eO ? r.outerHTML : r.innerHTML;
                    return eO && ew["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && _(Y, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h), eI && u([eh, ef, ed], e => {
                        h = b(h, e, " ")
                    }), n && eU ? n.createHTML(h) : h
                }, i.setConfig = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    tr(e), eC = !0
                }, i.clearConfig = function() {
                    te = null, eC = !1
                }, i.isValidAttribute = function(e, t, n) {
                    return te || tr({}), tg(e8(e), e8(t), n)
                }, i.addHook = function(e, t) {
                    "function" == typeof t && d(eu[e], t)
                }, i.removeHook = function(e, t) {
                    if (void 0 !== t) {
                        let n = h(eu[e], t);
                        return -1 === n ? void 0 : g(eu[e], n, 1)[0]
                    }
                    return f(eu[e])
                }, i.removeHooks = function(e) {
                    eu[e] = []
                }, i.removeAllHooks = function() {
                    eu = J()
                }, i
            }();
            e.exports = ee
        },
        6623: function(e, t, n) {
            e.exports = window.DOMPurify || (window.DOMPurify = n(5239).default || n(5239))
        },
        87441: function(e, t, n) {
            "use strict";

            function r() {
                return {
                    async: !1,
                    breaks: !1,
                    extensions: null,
                    gfm: !0,
                    hooks: null,
                    pedantic: !1,
                    renderer: null,
                    silent: !1,
                    tokenizer: null,
                    walkTokens: null
                }
            }
            n.d(t, {
                TU: function() {
                    return ep
                }
            });
            let i = r(),
                s = /[&<>"']/,
                l = RegExp(s.source, "g"),
                o = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
                a = RegExp(o.source, "g"),
                c = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                p = e => c[e];

            function u(e, t) {
                if (t) {
                    if (s.test(e)) return e.replace(l, p)
                } else if (o.test(e)) return e.replace(a, p);
                return e
            }
            let h = /(^|[^\[])\^/g;

            function f(e, t) {
                let n = "string" == typeof e ? e : e.source;
                t = t || "";
                let r = {
                    replace: (e, t) => {
                        let i = "string" == typeof t ? t : t.source;
                        return i = i.replace(h, "$1"), n = n.replace(e, i), r
                    },
                    getRegex: () => new RegExp(n, t)
                };
                return r
            }

            function d(e) {
                try {
                    e = encodeURI(e).replace(/%25/g, "%")
                } catch {
                    return null
                }
                return e
            }
            let g = {
                exec: () => null
            };

            function m(e, t) {
                let n = e.replace(/\|/g, (e, t, n) => {
                        let r = !1,
                            i = t;
                        for (; --i >= 0 && "\\" === n[i];) r = !r;
                        return r ? "|" : " |"
                    }).split(/ \|/),
                    r = 0;
                if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), t) {
                    if (n.length > t) n.splice(t);
                    else
                        for (; n.length < t;) n.push("")
                }
                for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
                return n
            }

            function k(e, t, n) {
                let r = e.length;
                if (0 === r) return "";
                let i = 0;
                for (; i < r;) {
                    let s = e.charAt(r - i - 1);
                    if (s !== t || n) {
                        if (s !== t && n) i++;
                        else break
                    } else i++
                }
                return e.slice(0, r - i)
            }

            function x(e, t, n, r) {
                let i = t.href,
                    s = t.title ? u(t.title) : null,
                    l = e[1].replace(/\\([\[\]])/g, "$1");
                if ("!" !== e[0].charAt(0)) {
                    r.state.inLink = !0;
                    let e = {
                        type: "link",
                        raw: n,
                        href: i,
                        title: s,
                        text: l,
                        tokens: r.inlineTokens(l)
                    };
                    return r.state.inLink = !1, e
                }
                return {
                    type: "image",
                    raw: n,
                    href: i,
                    title: s,
                    text: u(l)
                }
            }
            class b {
                options;
                rules;
                lexer;
                constructor(e) {
                    this.options = e || i
                }
                space(e) {
                    let t = this.rules.block.newline.exec(e);
                    if (t && t[0].length > 0) return {
                        type: "space",
                        raw: t[0]
                    }
                }
                code(e) {
                    let t = this.rules.block.code.exec(e);
                    if (t) {
                        let e = t[0].replace(/^(?: {1,4}| {0,3}\t)/gm, "");
                        return {
                            type: "code",
                            raw: t[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? e : k(e, "\n")
                        }
                    }
                }
                fences(e) {
                    let t = this.rules.block.fences.exec(e);
                    if (t) {
                        let e = t[0],
                            n = function(e, t) {
                                let n = e.match(/^(\s+)(?:```)/);
                                if (null === n) return t;
                                let r = n[1];
                                return t.split("\n").map(e => {
                                    let t = e.match(/^\s+/);
                                    if (null === t) return e;
                                    let [n] = t;
                                    return n.length >= r.length ? e.slice(r.length) : e
                                }).join("\n")
                            }(e, t[3] || "");
                        return {
                            type: "code",
                            raw: e,
                            lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                            text: n
                        }
                    }
                }
                heading(e) {
                    let t = this.rules.block.heading.exec(e);
                    if (t) {
                        let e = t[2].trim();
                        if (/#$/.test(e)) {
                            let t = k(e, "#");
                            this.options.pedantic ? e = t.trim() : (!t || / $/.test(t)) && (e = t.trim())
                        }
                        return {
                            type: "heading",
                            raw: t[0],
                            depth: t[1].length,
                            text: e,
                            tokens: this.lexer.inline(e)
                        }
                    }
                }
                hr(e) {
                    let t = this.rules.block.hr.exec(e);
                    if (t) return {
                        type: "hr",
                        raw: k(t[0], "\n")
                    }
                }
                blockquote(e) {
                    let t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        let e = k(t[0], "\n").split("\n"),
                            n = "",
                            r = "",
                            i = [];
                        for (; e.length > 0;) {
                            let t, s = !1,
                                l = [];
                            for (t = 0; t < e.length; t++)
                                if (/^ {0,3}>/.test(e[t])) l.push(e[t]), s = !0;
                                else if (s) break;
                            else l.push(e[t]);
                            e = e.slice(t);
                            let o = l.join("\n"),
                                a = o.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
                            n = n ? `${n}
${o}` : o, r = r ? `${r}
${a}` : a;
                            let c = this.lexer.state.top;
                            if (this.lexer.state.top = !0, this.lexer.blockTokens(a, i, !0), this.lexer.state.top = c, 0 === e.length) break;
                            let p = i[i.length - 1];
                            if (p ? .type === "code") break;
                            if (p ? .type === "blockquote") {
                                let t = p.raw + "\n" + e.join("\n"),
                                    s = this.blockquote(t);
                                i[i.length - 1] = s, n = n.substring(0, n.length - p.raw.length) + s.raw, r = r.substring(0, r.length - p.text.length) + s.text;
                                break
                            }
                            if (p ? .type === "list") {
                                let t = p.raw + "\n" + e.join("\n"),
                                    s = this.list(t);
                                i[i.length - 1] = s, n = n.substring(0, n.length - p.raw.length) + s.raw, r = r.substring(0, r.length - p.raw.length) + s.raw, e = t.substring(i[i.length - 1].raw.length).split("\n");
                                continue
                            }
                        }
                        return {
                            type: "blockquote",
                            raw: n,
                            tokens: i,
                            text: r
                        }
                    }
                }
                list(e) {
                    let t = this.rules.block.list.exec(e);
                    if (t) {
                        let n = t[1].trim(),
                            r = n.length > 1,
                            i = {
                                type: "list",
                                raw: "",
                                ordered: r,
                                start: r ? +n.slice(0, -1) : "",
                                loose: !1,
                                items: []
                            };
                        n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
                        let s = RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),
                            l = !1;
                        for (; e;) {
                            let n, r = !1,
                                o = "",
                                a = "";
                            if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
                            o = t[0], e = e.substring(o.length);
                            let c = t[2].split("\n", 1)[0].replace(/^\t+/, e => " ".repeat(3 * e.length)),
                                p = e.split("\n", 1)[0],
                                u = !c.trim(),
                                h = 0;
                            if (this.options.pedantic ? (h = 2, a = c.trimStart()) : u ? h = t[1].length + 1 : (h = (h = t[2].search(/[^ ]/)) > 4 ? 1 : h, a = c.slice(h), h += t[1].length), u && /^[ \t]*$/.test(p) && (o += p + "\n", e = e.substring(p.length + 1), r = !0), !r) {
                                let t = RegExp(`^ {0,${Math.min(3,h-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
                                    n = RegExp(`^ {0,${Math.min(3,h-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
                                    r = RegExp(`^ {0,${Math.min(3,h-1)}}(?:\`\`\`|~~~)`),
                                    i = RegExp(`^ {0,${Math.min(3,h-1)}}#`),
                                    s = RegExp(`^ {0,${Math.min(3,h-1)}}<(?:[a-z].*>|!--)`, "i");
                                for (; e;) {
                                    let l;
                                    let f = e.split("\n", 1)[0];
                                    if (p = f, l = this.options.pedantic ? p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ") : p.replace(/\t/g, "    "), r.test(p) || i.test(p) || s.test(p) || t.test(p) || n.test(p)) break;
                                    if (l.search(/[^ ]/) >= h || !p.trim()) a += "\n" + l.slice(h);
                                    else {
                                        if (u || c.replace(/\t/g, "    ").search(/[^ ]/) >= 4 || r.test(c) || i.test(c) || n.test(c)) break;
                                        a += "\n" + p
                                    }
                                    u || p.trim() || (u = !0), o += f + "\n", e = e.substring(f.length + 1), c = l.slice(h)
                                }
                            }!i.loose && (l ? i.loose = !0 : /\n[ \t]*\n[ \t]*$/.test(o) && (l = !0));
                            let f = null;
                            this.options.gfm && (f = /^\[[ xX]\] /.exec(a)) && (n = "[ ] " !== f[0], a = a.replace(/^\[[ xX]\] +/, "")), i.items.push({
                                type: "list_item",
                                raw: o,
                                task: !!f,
                                checked: n,
                                loose: !1,
                                text: a,
                                tokens: []
                            }), i.raw += o
                        }
                        i.items[i.items.length - 1].raw = i.items[i.items.length - 1].raw.trimEnd(), i.items[i.items.length - 1].text = i.items[i.items.length - 1].text.trimEnd(), i.raw = i.raw.trimEnd();
                        for (let e = 0; e < i.items.length; e++)
                            if (this.lexer.state.top = !1, i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, []), !i.loose) {
                                let t = i.items[e].tokens.filter(e => "space" === e.type),
                                    n = t.length > 0 && t.some(e => /\n.*\n/.test(e.raw));
                                i.loose = n
                            }
                        if (i.loose)
                            for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
                        return i
                    }
                }
                html(e) {
                    let t = this.rules.block.html.exec(e);
                    if (t) return {
                        type: "html",
                        block: !0,
                        raw: t[0],
                        pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                        text: t[0]
                    }
                }
                def(e) {
                    let t = this.rules.block.def.exec(e);
                    if (t) {
                        let e = t[1].toLowerCase().replace(/\s+/g, " "),
                            n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                            r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
                        return {
                            type: "def",
                            tag: e,
                            raw: t[0],
                            href: n,
                            title: r
                        }
                    }
                }
                table(e) {
                    let t = this.rules.block.table.exec(e);
                    if (!t || !/[:|]/.test(t[2])) return;
                    let n = m(t[1]),
                        r = t[2].replace(/^\||\| *$/g, "").split("|"),
                        i = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : [],
                        s = {
                            type: "table",
                            raw: t[0],
                            header: [],
                            align: [],
                            rows: []
                        };
                    if (n.length === r.length) {
                        for (let e of r) /^ *-+: *$/.test(e) ? s.align.push("right") : /^ *:-+: *$/.test(e) ? s.align.push("center") : /^ *:-+ *$/.test(e) ? s.align.push("left") : s.align.push(null);
                        for (let e = 0; e < n.length; e++) s.header.push({
                            text: n[e],
                            tokens: this.lexer.inline(n[e]),
                            header: !0,
                            align: s.align[e]
                        });
                        for (let e of i) s.rows.push(m(e, s.header.length).map((e, t) => ({
                            text: e,
                            tokens: this.lexer.inline(e),
                            header: !1,
                            align: s.align[t]
                        })));
                        return s
                    }
                }
                lheading(e) {
                    let t = this.rules.block.lheading.exec(e);
                    if (t) return {
                        type: "heading",
                        raw: t[0],
                        depth: "=" === t[2].charAt(0) ? 1 : 2,
                        text: t[1],
                        tokens: this.lexer.inline(t[1])
                    }
                }
                paragraph(e) {
                    let t = this.rules.block.paragraph.exec(e);
                    if (t) {
                        let e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                        return {
                            type: "paragraph",
                            raw: t[0],
                            text: e,
                            tokens: this.lexer.inline(e)
                        }
                    }
                }
                text(e) {
                    let t = this.rules.block.text.exec(e);
                    if (t) return {
                        type: "text",
                        raw: t[0],
                        text: t[0],
                        tokens: this.lexer.inline(t[0])
                    }
                }
                escape(e) {
                    let t = this.rules.inline.escape.exec(e);
                    if (t) return {
                        type: "escape",
                        raw: t[0],
                        text: u(t[1])
                    }
                }
                tag(e) {
                    let t = this.rules.inline.tag.exec(e);
                    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                        type: "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: t[0]
                    }
                }
                link(e) {
                    let t = this.rules.inline.link.exec(e);
                    if (t) {
                        let e = t[2].trim();
                        if (!this.options.pedantic && /^</.test(e)) {
                            if (!/>$/.test(e)) return;
                            let t = k(e.slice(0, -1), "\\");
                            if ((e.length - t.length) % 2 == 0) return
                        } else {
                            let e = function(e, t) {
                                if (-1 === e.indexOf(")")) return -1;
                                let n = 0;
                                for (let t = 0; t < e.length; t++)
                                    if ("\\" === e[t]) t++;
                                    else if ("(" === e[t]) n++;
                                else if (")" === e[t] && --n < 0) return t;
                                return -1
                            }(t[2], "()");
                            if (e > -1) {
                                let n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                                t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = ""
                            }
                        }
                        let n = t[2],
                            r = "";
                        if (this.options.pedantic) {
                            let e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                            e && (n = e[1], r = e[3])
                        } else r = t[3] ? t[3].slice(1, -1) : "";
                        return n = n.trim(), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)), x(t, {
                            href: n ? n.replace(this.rules.inline.anyPunctuation, "$1") : n,
                            title: r ? r.replace(this.rules.inline.anyPunctuation, "$1") : r
                        }, t[0], this.lexer)
                    }
                }
                reflink(e, t) {
                    let n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        let e = t[(n[2] || n[1]).replace(/\s+/g, " ").toLowerCase()];
                        if (!e) {
                            let e = n[0].charAt(0);
                            return {
                                type: "text",
                                raw: e,
                                text: e
                            }
                        }
                        return x(n, e, n[0], this.lexer)
                    }
                }
                emStrong(e, t, n = "") {
                    let r = this.rules.inline.emStrongLDelim.exec(e);
                    if (!(!r || r[3] && n.match(/[\p{L}\p{N}]/u)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
                        let n = [...r[0]].length - 1,
                            i, s, l = n,
                            o = 0,
                            a = "*" === r[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                        for (a.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = a.exec(t));) {
                            if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) continue;
                            if (s = [...i].length, r[3] || r[4]) {
                                l += s;
                                continue
                            }
                            if ((r[5] || r[6]) && n % 3 && !((n + s) % 3)) {
                                o += s;
                                continue
                            }
                            if ((l -= s) > 0) continue;
                            s = Math.min(s, s + l + o);
                            let t = [...r[0]][0].length,
                                a = e.slice(0, n + r.index + t + s);
                            if (Math.min(n, s) % 2) {
                                let e = a.slice(1, -1);
                                return {
                                    type: "em",
                                    raw: a,
                                    text: e,
                                    tokens: this.lexer.inlineTokens(e)
                                }
                            }
                            let c = a.slice(2, -2);
                            return {
                                type: "strong",
                                raw: a,
                                text: c,
                                tokens: this.lexer.inlineTokens(c)
                            }
                        }
                    }
                }
                codespan(e) {
                    let t = this.rules.inline.code.exec(e);
                    if (t) {
                        let e = t[2].replace(/\n/g, " "),
                            n = /[^ ]/.test(e),
                            r = /^ /.test(e) && / $/.test(e);
                        return n && r && (e = e.substring(1, e.length - 1)), e = u(e, !0), {
                            type: "codespan",
                            raw: t[0],
                            text: e
                        }
                    }
                }
                br(e) {
                    let t = this.rules.inline.br.exec(e);
                    if (t) return {
                        type: "br",
                        raw: t[0]
                    }
                }
                del(e) {
                    let t = this.rules.inline.del.exec(e);
                    if (t) return {
                        type: "del",
                        raw: t[0],
                        text: t[2],
                        tokens: this.lexer.inlineTokens(t[2])
                    }
                }
                autolink(e) {
                    let t = this.rules.inline.autolink.exec(e);
                    if (t) {
                        let e, n;
                        return n = "@" === t[2] ? "mailto:" + (e = u(t[1])) : e = u(t[1]), {
                            type: "link",
                            raw: t[0],
                            text: e,
                            href: n,
                            tokens: [{
                                type: "text",
                                raw: e,
                                text: e
                            }]
                        }
                    }
                }
                url(e) {
                    let t;
                    if (t = this.rules.inline.url.exec(e)) {
                        let e, n;
                        if ("@" === t[2]) n = "mailto:" + (e = u(t[0]));
                        else {
                            let r;
                            do r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0]) ? .[0] ? ? ""; while (r !== t[0]);
                            e = u(t[0]), n = "www." === t[1] ? "http://" + t[0] : t[0]
                        }
                        return {
                            type: "link",
                            raw: t[0],
                            text: e,
                            href: n,
                            tokens: [{
                                type: "text",
                                raw: e,
                                text: e
                            }]
                        }
                    }
                }
                inlineText(e) {
                    let t = this.rules.inline.text.exec(e);
                    if (t) {
                        let e;
                        return e = this.lexer.state.inRawBlock ? t[0] : u(t[0]), {
                            type: "text",
                            raw: t[0],
                            text: e
                        }
                    }
                }
            }
            let y = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
                w = /(?:[*+-]|\d{1,9}[.)])/,
                T = f(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, w).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(),
                _ = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
                E = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
                A = f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", E).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
                S = f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, w).getRegex(),
                R = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
                N = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
                z = f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", N).replace("tag", R).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
                $ = f(_).replace("hr", y).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R).getRegex(),
                v = {
                    blockquote: f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", $).getRegex(),
                    code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
                    def: A,
                    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                    hr: y,
                    html: z,
                    lheading: T,
                    list: S,
                    newline: /^(?:[ \t]*(?:\n|$))+/,
                    paragraph: $,
                    table: g,
                    text: /^[^\n]+/
                },
                I = f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", y).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R).getRegex(),
                L = { ...v,
                    table: I,
                    paragraph: f(_).replace("hr", y).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", I).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R).getRegex()
                },
                O = { ...v,
                    html: f("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", N).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                    heading: /^(#{1,6})(.*)(?:\n+|$)/,
                    fences: g,
                    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                    paragraph: f(_).replace("hr", y).replace("heading", " *#{1,6} *[^\n]").replace("lheading", T).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
                },
                C = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                D = /^( {2,}|\\)\n(?!\s*$)/,
                M = "\\p{P}\\p{S}",
                P = f(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, M).getRegex(),
                U = f(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, M).getRegex(),
                H = f("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, M).getRegex(),
                F = f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, M).getRegex(),
                B = f(/\\([punct])/, "gu").replace(/punct/g, M).getRegex(),
                q = f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
                W = f(N).replace("(?:-->|$)", "-->").getRegex(),
                Z = f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", W).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
                j = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
                G = f(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", j).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
                Y = f(/^!?\[(label)\]\[(ref)\]/).replace("label", j).replace("ref", E).getRegex(),
                Q = f(/^!?\[(ref)\](?:\[\])?/).replace("ref", E).getRegex(),
                X = f("reflink|nolink(?!\\()", "g").replace("reflink", Y).replace("nolink", Q).getRegex(),
                K = {
                    _backpedal: g,
                    anyPunctuation: B,
                    autolink: q,
                    blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
                    br: D,
                    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                    del: g,
                    emStrongLDelim: U,
                    emStrongRDelimAst: H,
                    emStrongRDelimUnd: F,
                    escape: C,
                    link: G,
                    nolink: Q,
                    punctuation: P,
                    reflink: Y,
                    reflinkSearch: X,
                    tag: Z,
                    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                    url: g
                },
                V = { ...K,
                    link: f(/^!?\[(label)\]\((.*?)\)/).replace("label", j).getRegex(),
                    reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", j).getRegex()
                },
                J = { ...K,
                    escape: f(C).replace("])", "~|])").getRegex(),
                    url: f(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
                    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
                    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
                },
                ee = { ...J,
                    br: f(D).replace("{2,}", "*").getRegex(),
                    text: f(J.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
                },
                et = {
                    normal: v,
                    gfm: L,
                    pedantic: O
                },
                en = {
                    normal: K,
                    gfm: J,
                    breaks: ee,
                    pedantic: V
                };
            class er {
                tokens;
                options;
                state;
                tokenizer;
                inlineQueue;
                constructor(e) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || i, this.options.tokenizer = this.options.tokenizer || new b, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                        inLink: !1,
                        inRawBlock: !1,
                        top: !0
                    };
                    let t = {
                        block: et.normal,
                        inline: en.normal
                    };
                    this.options.pedantic ? (t.block = et.pedantic, t.inline = en.pedantic) : this.options.gfm && (t.block = et.gfm, this.options.breaks ? t.inline = en.breaks : t.inline = en.gfm), this.tokenizer.rules = t
                }
                static get rules() {
                    return {
                        block: et,
                        inline: en
                    }
                }
                static lex(e, t) {
                    return new er(t).lex(e)
                }
                static lexInline(e, t) {
                    return new er(t).inlineTokens(e)
                }
                lex(e) {
                    e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens);
                    for (let e = 0; e < this.inlineQueue.length; e++) {
                        let t = this.inlineQueue[e];
                        this.inlineTokens(t.src, t.tokens)
                    }
                    return this.inlineQueue = [], this.tokens
                }
                blockTokens(e, t = [], n = !1) {
                    let r, i, s;
                    for (this.options.pedantic && (e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "")); e;)
                        if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(n => !!(r = n.call({
                                lexer: this
                            }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) {
                            if (r = this.tokenizer.space(e)) {
                                e = e.substring(r.raw.length), 1 === r.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(r);
                                continue
                            }
                            if (r = this.tokenizer.code(e)) {
                                e = e.substring(r.raw.length), (i = t[t.length - 1]) && ("paragraph" === i.type || "text" === i.type) ? (i.raw += "\n" + r.raw, i.text += "\n" + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r);
                                continue
                            }
                            if ((r = this.tokenizer.fences(e)) || (r = this.tokenizer.heading(e)) || (r = this.tokenizer.hr(e)) || (r = this.tokenizer.blockquote(e)) || (r = this.tokenizer.list(e)) || (r = this.tokenizer.html(e))) {
                                e = e.substring(r.raw.length), t.push(r);
                                continue
                            }
                            if (r = this.tokenizer.def(e)) {
                                e = e.substring(r.raw.length), (i = t[t.length - 1]) && ("paragraph" === i.type || "text" === i.type) ? (i.raw += "\n" + r.raw, i.text += "\n" + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                                    href: r.href,
                                    title: r.title
                                });
                                continue
                            }
                            if ((r = this.tokenizer.table(e)) || (r = this.tokenizer.lheading(e))) {
                                e = e.substring(r.raw.length), t.push(r);
                                continue
                            }
                            if (s = e, this.options.extensions && this.options.extensions.startBlock) {
                                let t, n = 1 / 0,
                                    r = e.slice(1);
                                this.options.extensions.startBlock.forEach(e => {
                                    "number" == typeof(t = e.call({
                                        lexer: this
                                    }, r)) && t >= 0 && (n = Math.min(n, t))
                                }), n < 1 / 0 && n >= 0 && (s = e.substring(0, n + 1))
                            }
                            if (this.state.top && (r = this.tokenizer.paragraph(s))) {
                                i = t[t.length - 1], n && i ? .type === "paragraph" ? (i.raw += "\n" + r.raw, i.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r), n = s.length !== e.length, e = e.substring(r.raw.length);
                                continue
                            }
                            if (r = this.tokenizer.text(e)) {
                                e = e.substring(r.raw.length), (i = t[t.length - 1]) && "text" === i.type ? (i.raw += "\n" + r.raw, i.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r);
                                continue
                            }
                            if (e) {
                                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw Error(t)
                            }
                        }
                    return this.state.top = !0, t
                }
                inline(e, t = []) {
                    return this.inlineQueue.push({
                        src: e,
                        tokens: t
                    }), t
                }
                inlineTokens(e, t = []) {
                    let n, r, i, s, l, o;
                    let a = e;
                    if (this.tokens.links) {
                        let e = Object.keys(this.tokens.links);
                        if (e.length > 0)
                            for (; null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(a));) e.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                    }
                    for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(a));) a = a.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (; null != (s = this.tokenizer.rules.inline.anyPunctuation.exec(a));) a = a.slice(0, s.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                    for (; e;)
                        if (l || (o = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(r => !!(n = r.call({
                                lexer: this
                            }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) {
                            if (n = this.tokenizer.escape(e)) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.tag(e)) {
                                e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.link(e)) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (n = this.tokenizer.reflink(e, this.tokens.links)) {
                                e = e.substring(n.raw.length), (r = t[t.length - 1]) && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                                continue
                            }
                            if ((n = this.tokenizer.emStrong(e, a, o)) || (n = this.tokenizer.codespan(e)) || (n = this.tokenizer.br(e)) || (n = this.tokenizer.del(e)) || (n = this.tokenizer.autolink(e)) || !this.state.inLink && (n = this.tokenizer.url(e))) {
                                e = e.substring(n.raw.length), t.push(n);
                                continue
                            }
                            if (i = e, this.options.extensions && this.options.extensions.startInline) {
                                let t, n = 1 / 0,
                                    r = e.slice(1);
                                this.options.extensions.startInline.forEach(e => {
                                    "number" == typeof(t = e.call({
                                        lexer: this
                                    }, r)) && t >= 0 && (n = Math.min(n, t))
                                }), n < 1 / 0 && n >= 0 && (i = e.substring(0, n + 1))
                            }
                            if (n = this.tokenizer.inlineText(i)) {
                                e = e.substring(n.raw.length), "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)), l = !0, (r = t[t.length - 1]) && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
                                continue
                            }
                            if (e) {
                                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(t);
                                    break
                                }
                                throw Error(t)
                            }
                        }
                    return t
                }
            }
            class ei {
                options;
                parser;
                constructor(e) {
                    this.options = e || i
                }
                space(e) {
                    return ""
                }
                code({
                    text: e,
                    lang: t,
                    escaped: n
                }) {
                    let r = (t || "").match(/^\S*/) ? .[0],
                        i = e.replace(/\n$/, "") + "\n";
                    return r ? '<pre><code class="language-' + u(r) + '">' + (n ? i : u(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : u(i, !0)) + "</code></pre>\n"
                }
                blockquote({
                    tokens: e
                }) {
                    let t = this.parser.parse(e);
                    return `<blockquote>
${t}</blockquote>
`
                }
                html({
                    text: e
                }) {
                    return e
                }
                heading({
                    tokens: e,
                    depth: t
                }) {
                    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`
                }
                hr(e) {
                    return "<hr>\n"
                }
                list(e) {
                    let t = e.ordered,
                        n = e.start,
                        r = "";
                    for (let t = 0; t < e.items.length; t++) {
                        let n = e.items[t];
                        r += this.listitem(n)
                    }
                    let i = t ? "ol" : "ul";
                    return "<" + i + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + r + "</" + i + ">\n"
                }
                listitem(e) {
                    let t = "";
                    if (e.task) {
                        let n = this.checkbox({
                            checked: !!e.checked
                        });
                        e.loose ? e.tokens.length > 0 && "paragraph" === e.tokens[0].type ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && "text" === e.tokens[0].tokens[0].type && (e.tokens[0].tokens[0].text = n + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({
                            type: "text",
                            raw: n + " ",
                            text: n + " "
                        }) : t += n + " "
                    }
                    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`
                }
                checkbox({
                    checked: e
                }) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
                }
                paragraph({
                    tokens: e
                }) {
                    return `<p>${this.parser.parseInline(e)}</p>
`
                }
                table(e) {
                    let t = "",
                        n = "";
                    for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
                    t += this.tablerow({
                        text: n
                    });
                    let r = "";
                    for (let t = 0; t < e.rows.length; t++) {
                        let i = e.rows[t];
                        n = "";
                        for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
                        r += this.tablerow({
                            text: n
                        })
                    }
                    return r && (r = `<tbody>${r}</tbody>`), "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n"
                }
                tablerow({
                    text: e
                }) {
                    return `<tr>
${e}</tr>
`
                }
                tablecell(e) {
                    let t = this.parser.parseInline(e.tokens),
                        n = e.header ? "th" : "td";
                    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`
                }
                strong({
                    tokens: e
                }) {
                    return `<strong>${this.parser.parseInline(e)}</strong>`
                }
                em({
                    tokens: e
                }) {
                    return `<em>${this.parser.parseInline(e)}</em>`
                }
                codespan({
                    text: e
                }) {
                    return `<code>${e}</code>`
                }
                br(e) {
                    return "<br>"
                }
                del({
                    tokens: e
                }) {
                    return `<del>${this.parser.parseInline(e)}</del>`
                }
                link({
                    href: e,
                    title: t,
                    tokens: n
                }) {
                    let r = this.parser.parseInline(n),
                        i = d(e);
                    if (null === i) return r;
                    let s = '<a href="' + (e = i) + '"';
                    return t && (s += ' title="' + t + '"'), s += ">" + r + "</a>"
                }
                image({
                    href: e,
                    title: t,
                    text: n
                }) {
                    let r = d(e);
                    if (null === r) return n;
                    e = r;
                    let i = `<img src="${e}" alt="${n}"`;
                    return t && (i += ` title="${t}"`), i += ">"
                }
                text(e) {
                    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text
                }
            }
            class es {
                strong({
                    text: e
                }) {
                    return e
                }
                em({
                    text: e
                }) {
                    return e
                }
                codespan({
                    text: e
                }) {
                    return e
                }
                del({
                    text: e
                }) {
                    return e
                }
                html({
                    text: e
                }) {
                    return e
                }
                text({
                    text: e
                }) {
                    return e
                }
                link({
                    text: e
                }) {
                    return "" + e
                }
                image({
                    text: e
                }) {
                    return "" + e
                }
                br() {
                    return ""
                }
            }
            class el {
                options;
                renderer;
                textRenderer;
                constructor(e) {
                    this.options = e || i, this.options.renderer = this.options.renderer || new ei, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new es
                }
                static parse(e, t) {
                    return new el(t).parse(e)
                }
                static parseInline(e, t) {
                    return new el(t).parseInline(e)
                }
                parse(e, t = !0) {
                    let n = "";
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
                            let e = this.options.extensions.renderers[i.type].call({
                                parser: this
                            }, i);
                            if (!1 !== e || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
                                n += e || "";
                                continue
                            }
                        }
                        switch (i.type) {
                            case "space":
                                n += this.renderer.space(i);
                                continue;
                            case "hr":
                                n += this.renderer.hr(i);
                                continue;
                            case "heading":
                                n += this.renderer.heading(i);
                                continue;
                            case "code":
                                n += this.renderer.code(i);
                                continue;
                            case "table":
                                n += this.renderer.table(i);
                                continue;
                            case "blockquote":
                                n += this.renderer.blockquote(i);
                                continue;
                            case "list":
                                n += this.renderer.list(i);
                                continue;
                            case "html":
                                n += this.renderer.html(i);
                                continue;
                            case "paragraph":
                                n += this.renderer.paragraph(i);
                                continue;
                            case "text":
                                {
                                    let s = i,
                                        l = this.renderer.text(s);
                                    for (; r + 1 < e.length && "text" === e[r + 1].type;) s = e[++r],
                                    l += "\n" + this.renderer.text(s);t ? n += this.renderer.paragraph({
                                        type: "paragraph",
                                        raw: l,
                                        text: l,
                                        tokens: [{
                                            type: "text",
                                            raw: l,
                                            text: l
                                        }]
                                    }) : n += l;
                                    continue
                                }
                            default:
                                {
                                    let e = 'Token with "' + i.type + '" type was not found.';
                                    if (this.options.silent) return console.error(e), "";
                                    throw Error(e)
                                }
                        }
                    }
                    return n
                }
                parseInline(e, t) {
                    t = t || this.renderer;
                    let n = "";
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type]) {
                            let e = this.options.extensions.renderers[i.type].call({
                                parser: this
                            }, i);
                            if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
                                n += e || "";
                                continue
                            }
                        }
                        switch (i.type) {
                            case "escape":
                            case "text":
                                n += t.text(i);
                                break;
                            case "html":
                                n += t.html(i);
                                break;
                            case "link":
                                n += t.link(i);
                                break;
                            case "image":
                                n += t.image(i);
                                break;
                            case "strong":
                                n += t.strong(i);
                                break;
                            case "em":
                                n += t.em(i);
                                break;
                            case "codespan":
                                n += t.codespan(i);
                                break;
                            case "br":
                                n += t.br(i);
                                break;
                            case "del":
                                n += t.del(i);
                                break;
                            default:
                                {
                                    let e = 'Token with "' + i.type + '" type was not found.';
                                    if (this.options.silent) return console.error(e), "";
                                    throw Error(e)
                                }
                        }
                    }
                    return n
                }
            }
            class eo {
                options;
                block;
                constructor(e) {
                    this.options = e || i
                }
                static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
                preprocess(e) {
                    return e
                }
                postprocess(e) {
                    return e
                }
                processAllTokens(e) {
                    return e
                }
                provideLexer() {
                    return this.block ? er.lex : er.lexInline
                }
                provideParser() {
                    return this.block ? el.parse : el.parseInline
                }
            }
            class ea {
                defaults = r();
                options = this.setOptions;
                parse = this.parseMarkdown(!0);
                parseInline = this.parseMarkdown(!1);
                Parser = el;
                Renderer = ei;
                TextRenderer = es;
                Lexer = er;
                Tokenizer = b;
                Hooks = eo;
                constructor(...e) {
                    this.use(...e)
                }
                walkTokens(e, t) {
                    let n = [];
                    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
                        case "table":
                            for (let e of r.header) n = n.concat(this.walkTokens(e.tokens, t));
                            for (let e of r.rows)
                                for (let r of e) n = n.concat(this.walkTokens(r.tokens, t));
                            break;
                        case "list":
                            n = n.concat(this.walkTokens(r.items, t));
                            break;
                        default:
                            {
                                let e = r;this.defaults.extensions ? .childTokens ? .[e.type] ? this.defaults.extensions.childTokens[e.type].forEach(r => {
                                    let i = e[r].flat(1 / 0);
                                    n = n.concat(this.walkTokens(i, t))
                                }) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)))
                            }
                    }
                    return n
                }
                use(...e) {
                    let t = this.defaults.extensions || {
                        renderers: {},
                        childTokens: {}
                    };
                    return e.forEach(e => {
                        let n = { ...e
                        };
                        if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach(e => {
                                if (!e.name) throw Error("extension name required");
                                if ("renderer" in e) {
                                    let n = t.renderers[e.name];
                                    n ? t.renderers[e.name] = function(...t) {
                                        let r = e.renderer.apply(this, t);
                                        return !1 === r && (r = n.apply(this, t)), r
                                    } : t.renderers[e.name] = e.renderer
                                }
                                if ("tokenizer" in e) {
                                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw Error("extension level must be 'block' or 'inline'");
                                    let n = t[e.level];
                                    n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                                }
                                "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
                            }), n.extensions = t), e.renderer) {
                            let t = this.defaults.renderer || new ei(this.defaults);
                            for (let n in e.renderer) {
                                if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
                                if (["options", "parser"].includes(n)) continue;
                                let r = e.renderer[n],
                                    i = t[n];
                                t[n] = (...e) => {
                                    let n = r.apply(t, e);
                                    return !1 === n && (n = i.apply(t, e)), n || ""
                                }
                            }
                            n.renderer = t
                        }
                        if (e.tokenizer) {
                            let t = this.defaults.tokenizer || new b(this.defaults);
                            for (let n in e.tokenizer) {
                                if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
                                if (["options", "rules", "lexer"].includes(n)) continue;
                                let r = e.tokenizer[n],
                                    i = t[n];
                                t[n] = (...e) => {
                                    let n = r.apply(t, e);
                                    return !1 === n && (n = i.apply(t, e)), n
                                }
                            }
                            n.tokenizer = t
                        }
                        if (e.hooks) {
                            let t = this.defaults.hooks || new eo;
                            for (let n in e.hooks) {
                                if (!(n in t)) throw Error(`hook '${n}' does not exist`);
                                if (["options", "block"].includes(n)) continue;
                                let r = e.hooks[n],
                                    i = t[n];
                                eo.passThroughHooks.has(n) ? t[n] = e => {
                                    if (this.defaults.async) return Promise.resolve(r.call(t, e)).then(e => i.call(t, e));
                                    let n = r.call(t, e);
                                    return i.call(t, n)
                                } : t[n] = (...e) => {
                                    let n = r.apply(t, e);
                                    return !1 === n && (n = i.apply(t, e)), n
                                }
                            }
                            n.hooks = t
                        }
                        if (e.walkTokens) {
                            let t = this.defaults.walkTokens,
                                r = e.walkTokens;
                            n.walkTokens = function(e) {
                                let n = [];
                                return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n
                            }
                        }
                        this.defaults = { ...this.defaults,
                            ...n
                        }
                    }), this
                }
                setOptions(e) {
                    return this.defaults = { ...this.defaults,
                        ...e
                    }, this
                }
                lexer(e, t) {
                    return er.lex(e, t ? ? this.defaults)
                }
                parser(e, t) {
                    return el.parse(e, t ? ? this.defaults)
                }
                parseMarkdown(e) {
                    return (t, n) => {
                        let r = { ...n
                            },
                            i = { ...this.defaults,
                                ...r
                            },
                            s = this.onError(!!i.silent, !!i.async);
                        if (!0 === this.defaults.async && !1 === r.async) return s(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
                        if (null == t) return s(Error("marked(): input parameter is undefined or null"));
                        if ("string" != typeof t) return s(Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
                        i.hooks && (i.hooks.options = i, i.hooks.block = e);
                        let l = i.hooks ? i.hooks.provideLexer() : e ? er.lex : er.lexInline,
                            o = i.hooks ? i.hooks.provideParser() : e ? el.parse : el.parseInline;
                        if (i.async) return Promise.resolve(i.hooks ? i.hooks.preprocess(t) : t).then(e => l(e, i)).then(e => i.hooks ? i.hooks.processAllTokens(e) : e).then(e => i.walkTokens ? Promise.all(this.walkTokens(e, i.walkTokens)).then(() => e) : e).then(e => o(e, i)).then(e => i.hooks ? i.hooks.postprocess(e) : e).catch(s);
                        try {
                            i.hooks && (t = i.hooks.preprocess(t));
                            let e = l(t, i);
                            i.hooks && (e = i.hooks.processAllTokens(e)), i.walkTokens && this.walkTokens(e, i.walkTokens);
                            let n = o(e, i);
                            return i.hooks && (n = i.hooks.postprocess(n)), n
                        } catch (e) {
                            return s(e)
                        }
                    }
                }
                onError(e, t) {
                    return n => {
                        if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
                            let e = "<p>An error occurred:</p><pre>" + u(n.message + "", !0) + "</pre>";
                            return t ? Promise.resolve(e) : e
                        }
                        if (t) return Promise.reject(n);
                        throw n
                    }
                }
            }
            let ec = new ea;

            function ep(e, t) {
                return ec.parse(e, t)
            }
            ep.options = ep.setOptions = function(e) {
                return ec.setOptions(e), ep.defaults = ec.defaults, i = ep.defaults, ep
            }, ep.getDefaults = r, ep.defaults = i, ep.use = function(...e) {
                return ec.use(...e), ep.defaults = ec.defaults, i = ep.defaults, ep
            }, ep.walkTokens = function(e, t) {
                return ec.walkTokens(e, t)
            }, ep.parseInline = ec.parseInline, ep.Parser = el, ep.parser = el.parse, ep.Renderer = ei, ep.TextRenderer = es, ep.Lexer = er, ep.lexer = er.lex, ep.Tokenizer = b, ep.Hooks = eo, ep.parse = ep, ep.options, ep.setOptions, ep.use, ep.walkTokens, ep.parseInline, el.parse, er.lex
        }
    }
]);