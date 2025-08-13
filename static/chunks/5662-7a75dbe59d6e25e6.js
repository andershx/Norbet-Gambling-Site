(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5662], {
        85662: function(e, t, n) {
            "use strict";
            n.d(t, {
                VY: function() {
                    return B
                },
                ZP: function() {
                    return w
                }
            });
            var a = n(20567),
                i = n(14932),
                o = n(24043),
                r = n(85893),
                l = n(25675),
                c = n.n(l),
                s = n(30418),
                d = n.n(s),
                u = n(67294),
                m = n(56900),
                g = n(46415),
                _ = n(6042),
                v = n(83973),
                b = n(39332),
                h = n(67580),
                p = n(4480),
                f = n(41664),
                x = n.n(f),
                j = n(43908),
                C = (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7",
                    height: "9",
                    fill: "none",
                    viewBox: "0 0 7 9",
                    children: (0, r.jsx)("path", {
                        fill: "#E8E5FF",
                        fillOpacity: "0.2",
                        d: "M6.066 4.5a.837.837 0 01-.22.565L2.159 8.778A.757.757 0 011.598 9a.757.757 0 01-.561-.222.768.768 0 01-.22-.565c0-.229.073-.417.22-.565L4.163 4.5 1.037 1.352a.768.768 0 01-.22-.565c0-.229.073-.417.22-.565A.757.757 0 011.597 0c.228 0 .415.074.562.222l3.687 3.713c.08.08.137.168.17.262.034.094.05.195.05.303z"
                    })
                });

            function w(e) {
                var t, n = e.posts,
                    l = e.nometa,
                    s = e.nonav,
                    f = e.wide,
                    w = e.headings,
                    B = void 0 === w ? [] : w,
                    y = (t = (0, m.bU)(), {
                        formatDate: (0, u.useCallback)(function(e) {
                            var n = t;
                            return n = "pt" === t ? "pt-BR" : "en-US", new Date(e).toLocaleDateString(n, {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            })
                        }, [t])
                    }).formatDate,
                    k = (0, g.Z)({
                        breakPointThree: 600
                    }),
                    N = (0, v.ZP)(),
                    E = (0, b.usePathname)(),
                    P = (0, p.Zl)(h.Z),
                    R = (0, o._)((0, u.useState)(!1), 2),
                    M = R[0],
                    S = R[1],
                    Z = null == n ? void 0 : n.content,
                    O = (0, m.bU)(),
                    T = (0, u.useMemo)(function() {
                        return s ? null : (0, j.Wh)(E, O, "Blog").map(function(e, t, n) {
                            return (0, r.jsxs)(x(), {
                                href: e.href,
                                "data-breadcrumb": !0,
                                className: d().anchor,
                                children: [e.title, t < n.length - 1 ? C : ""]
                            }, e.href)
                        })
                    }, [E, O, s]);
                return (0, u.useEffect)(function() {
                    return P(!0),
                        function() {
                            P(!1)
                        }
                }, [P]), (0, r.jsxs)(r.Fragment, {
                    children: [!l && (0, r.jsx)(_.default, {
                        meta: n
                    }), (0, r.jsxs)("div", (0, i._)((0, a._)({}, (0, m.dh)(d(), "blog-page-container", f && "blog-page-container__wide", k)), {
                        children: [!s && (0, r.jsx)("div", {
                            className: d().breadcrumbs,
                            children: T
                        }), n.thumbnail && (0, r.jsx)("div", {
                            className: d()["blog-page-image"],
                            children: (0, r.jsx)("div", {
                                children: (0, r.jsx)(c(), {
                                    src: n.thumbnail,
                                    alt: "thumbnail",
                                    fill: !0,
                                    quality: 90,
                                    sizes: "900px",
                                    style: {
                                        objectFit: "cover"
                                    }
                                })
                            })
                        }), n.title && (0, r.jsxs)("div", {
                            className: d()["blog-page-title"],
                            children: [(0, r.jsx)("h1", {
                                children: n.title
                            }), (0, r.jsxs)("div", {
                                className: d()["meta-info"],
                                children: [(0, r.jsxs)("div", {
                                    className: d().section,
                                    children: [(0, r.jsx)("span", {
                                        className: d()["item-name"],
                                        children: N("by")
                                    }), " ", (0, r.jsx)("span", {
                                        children: "Rainbet"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: d().section,
                                    children: [(0, r.jsx)("span", {
                                        className: d()["item-name"],
                                        children: N("published")
                                    }), " ", (0, r.jsx)("span", {
                                        children: y(n.created_at)
                                    })]
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: d()["main-content-section"],
                            children: [!s && B.length ? (0, r.jsxs)("div", (0, i._)((0, a._)({}, (0, m.dh)(d(), "side-nav-container")), {
                                children: [(0, r.jsxs)("button", (0, i._)((0, a._)({}, (0, m.dh)(d(), "mobile-table-toggle", M && "active")), {
                                    onClick: function() {
                                        return S(!M)
                                    },
                                    children: [(0, r.jsx)("span", {
                                        children: "Table of Contents"
                                    }), (0, r.jsx)("div", {
                                        className: d().arrow,
                                        children: C
                                    })]
                                })), (0, r.jsx)("div", {
                                    className: d()["side-nav"],
                                    children: B.map(function(e) {
                                        return (0, r.jsx)("a", {
                                            onClick: function() {
                                                S(!1)
                                            },
                                            className: d().anchor,
                                            href: "#".concat(e.id),
                                            children: (0, r.jsxs)("span", {
                                                children: [" ", e.text]
                                            })
                                        }, e.id)
                                    })
                                })]
                            })) : null, (0, r.jsx)("div", {
                                className: d()["main-content"],
                                dangerouslySetInnerHTML: {
                                    __html: Z
                                }
                            })]
                        })]
                    }))]
                })
            }
            var B = function(e) {
                var t = e.__html;
                return (0, r.jsx)("div", {
                    className: "".concat(d()["blog-page-container"]),
                    style: {
                        width: "100%",
                        maxWidth: "100%"
                    },
                    children: (0, r.jsx)("div", {
                        className: d()["main-content-section"],
                        style: {
                            width: "100%"
                        },
                        children: (0, r.jsx)("div", {
                            className: d()["main-content"],
                            style: {
                                width: "100%"
                            },
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    })
                })
            }
        },
        83973: function(e, t, n) {
            "use strict";
            n.d(t, {
                M9: function() {
                    return u
                },
                Xo: function() {
                    return m
                },
                gG: function() {
                    return g
                }
            });
            var a = n(20567),
                i = n(47702),
                o = n(85893),
                r = n(63381),
                l = n(67294),
                c = n(86896),
                s = n(50028),
                d = {},
                u = (0, l.memo)(function(e) {
                    var t = e.as,
                        n = void 0 === t ? "p" : t,
                        o = e.name,
                        r = e.replacements,
                        c = void 0 === r ? d : r,
                        s = (0, i._)(e, ["as", "name", "replacements"]),
                        u = _(),
                        m = (0, l.useMemo)(function() {
                            var e = u(o, c);
                            return (0, a._)({}, "string" == typeof e ? {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            } : {
                                children: e
                            }, s)
                        }, [u, o, c, s]);
                    return (0, l.useMemo)(function() {
                        return (0, l.createElement)(n, m)
                    }, [n, m])
                }),
                m = function() {
                    return (0, l.useCallback)(function(e) {
                        return (0, o.jsx)(u, (0, a._)({}, e))
                    }, [])
                },
                g = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = _();
                    return (0, l.useMemo)(function() {
                        return t.reduce(function(e, t) {
                            return e[t] = a(t), e
                        }, {})
                    }, [a, t])
                };

            function _() {
                var e = (0, c.Z)(),
                    t = e.formatMessage,
                    n = e.messages;
                return (0, l.useCallback)(function(e, i, o) {
                    try {
                        var l = (0, a._)({}, s.us, i),
                            c = e.replace(/\./g, "_");
                        if (c in n) return t({
                            id: c
                        }, l, o);
                        return (0, r.ZK)('Could not find id "'.concat(c, '" \n')), c
                    } catch (t) {
                        return (0, r.ZK)(t), e
                    }
                }, [t, n])
            }
            t.ZP = _
        },
        46415: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return l
                }
            });
            var a = n(24043),
                i = n(56900),
                o = n(67294),
                r = n(39396),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.breakPointOne,
                        n = e.breakPointTwo,
                        i = e.breakPointThree,
                        l = void 0 !== i && i,
                        c = e.breakPointFour,
                        s = void 0 === c ? 390 : c,
                        d = r.ZP.state[r.ZP.EVENTS.MOBILE] ? 0 : 1920,
                        u = (0, o.useCallback)(function() {
                            return window.innerWidth
                        }, [d]),
                        m = (0, a._)((0, o.useState)(u()), 2),
                        g = m[0],
                        _ = m[1],
                        v = (0, o.useCallback)(function() {
                            _(u())
                        }, [u]);
                    return ((0, o.useEffect)(function() {
                        return window.addEventListener("resize", v),
                            function() {
                                window.removeEventListener("resize", v)
                            }
                    }, [v]), !1 !== l && g <= l) ? 3 : !1 !== s && g <= s ? 4 : g <= (void 0 === n ? 768 : n) ? 2 : g <= (void 0 === t ? 1100 : t) ? 1 : 0
                };
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.breakPointOne,
                    n = void 0 === t ? 1100 : t,
                    l = e.breakPointTwo,
                    c = void 0 === l ? 768 : l,
                    s = e.breakPointThree,
                    d = void 0 !== s && s,
                    u = e.breakPointFour,
                    m = void 0 !== u && u,
                    g = e.targetElement,
                    _ = void 0 === g ? "mainBody" : g,
                    v = e.deviceCheck,
                    b = void 0 !== v && v,
                    h = e.pixelDensity,
                    p = void 0 !== h && h,
                    f = (0, a._)((0, o.useState)(!!r.ZP.state[r.ZP.EVENTS.MOBILE] && "mobile-three"), 2),
                    x = f[0],
                    j = f[1],
                    C = (0, o.useCallback)(function() {
                        var e = document.getElementById(_);
                        if ("body" === _ && (e = document.body), e) {
                            var t = e.clientWidth + 8;
                            if (p) {
                                var a = (0, i.x_)();
                                t = (e.clientWidth + 8) * a
                            }!1 !== m && t <= m ? j("mobile-four") : !1 !== d && t <= d ? j("mobile-three") : t <= c ? j("mobile-two") : t <= n ? j("mobile-one") : b && (0, i.r3)() ? j("mobile-three") : j(!1)
                        }
                    }, [_, p, m, d, c, n, b]);
                return (0, o.useEffect)(function() {
                    var e = document.getElementById("mainBody");
                    if (e) {
                        C(e.clientWidth);
                        var t = new ResizeObserver(function(e) {
                            var t = !0,
                                n = !1,
                                a = void 0;
                            try {
                                for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var r = i.value;
                                    C(r.contentRect.width)
                                }
                            } catch (e) {
                                n = !0, a = e
                            } finally {
                                try {
                                    t || null == o.return || o.return()
                                } finally {
                                    if (n) throw a
                                }
                            }
                        });
                        return t.observe(e),
                            function() {
                                t.disconnect()
                            }
                    }
                }, [n, c, d, m, _, C]), x
            }
        },
        6042: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(85893),
                i = n(9008),
                o = n.n(i),
                r = n(11163),
                l = n(67294),
                c = "https://cdn.rainbet.com/brand/og-banner.webp";
            t.default = (0, l.memo)(function(e) {
                var t, n, i, l, s, d, u, m, g = e.meta,
                    _ = e.gamesMeta,
                    v = e.gameName,
                    b = e.caseOpenMeta,
                    h = e.caseOpenName,
                    p = e.caseOpenIcon,
                    f = e.slotsMeta,
                    x = e.gamesMetaIcon,
                    j = e.providerMeta,
                    C = e.providerName,
                    w = "Rainbet",
                    B = "",
                    y = "",
                    k = "",
                    N = (0, r.useRouter)(),
                    E = N.asPath,
                    P = N.locale,
                    R = E.split("?")[0],
                    M = "https://rainbet.com" + ("en" === P ? "" : "/".concat(P));
                switch (!0) {
                    case !!g:
                        w = (null == g ? void 0 : null === (t = g.meta) || void 0 === t ? void 0 : t.title) || (null == g ? void 0 : g.title) || "Rainbet", B = (null == g ? void 0 : g.description) || (null == g ? void 0 : null === (n = g.meta) || void 0 === n ? void 0 : n.description) || "", y = (null == g ? void 0 : g.image) || (null == g ? void 0 : null === (i = g.meta) || void 0 === i ? void 0 : i.image) || c, k = g.url ? "".concat(g.url) : "".concat(M).concat(R);
                        break;
                    case !!_:
                        w = _.title, B = _.description ? _.description : "", y = x, k = "".concat(M, "/casino/originals/").concat(v);
                        break;
                    case !!b:
                        w = h ? b.title : h + " Case - Rainbet", B = b.description ? b.description : "", y = p, k = "".concat(null == b ? void 0 : b.url);
                        break;
                    case !!j:
                        w = C + " Casino Games – Rainbet", B = "Experience games by " + C + " at Rainbet, offering the best slots, blackjack, roulette, and other table/live games.", k = "".concat(M);
                        break;
                    case !!f:
                        w = (null == f ? void 0 : null === (l = f.meta) || void 0 === l ? void 0 : l.title) ? null == f ? void 0 : null === (s = f.meta) || void 0 === s ? void 0 : s.title : "Slots – Rainbet", B = (null == f ? void 0 : null === (d = f.meta) || void 0 === d ? void 0 : d.description) ? null == f ? void 0 : null === (u = f.meta) || void 0 === u ? void 0 : u.description : "Rainbet Slots", y = null == f ? void 0 : f.icon, k = "".concat(null == f ? void 0 : null === (m = f.meta) || void 0 === m ? void 0 : m.url);
                        break;
                    default:
                        w = "Rainbet", B = "Play casino game modes such as Slots, Blackjack, Baccarat, Roulette, Game Shows, Live Casino games and original RainBet games.", y = c, k = "".concat(M)
                }
                return (0, a.jsxs)(o(), {
                    children: [(0, a.jsx)("title", {
                        children: w
                    }), B && (0, a.jsx)("meta", {
                        name: "description",
                        content: B
                    }), (0, a.jsx)("meta", {
                        property: "og:title",
                        content: w
                    }), B && (0, a.jsx)("meta", {
                        property: "og:description",
                        content: B
                    }), k && (0, a.jsx)("link", {
                        rel: "canonical",
                        href: k
                    }), (0, a.jsx)("meta", {
                        property: "og:site_name",
                        content: "Rainbet"
                    }), (0, a.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, a.jsx)("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "black-translucent"
                    }), (0, a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
                    }), y === c && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/webp"
                        }), (0, a.jsx)("meta", {
                            property: "og:image:width",
                            content: "1200"
                        }), (0, a.jsx)("meta", {
                            property: "og:image:height",
                            content: "630"
                        })]
                    }), (0, a.jsx)("meta", {
                        property: "og:image",
                        content: y
                    })]
                })
            })
        },
        67580: function(e, t, n) {
            "use strict";
            var a = (0, n(4480).cn)({
                key: "inBlog",
                default: !1
            });
            t.Z = a
        },
        30418: function(e) {
            e.exports = {
                "golden-text": "BlogCard_golden-text__SOfix",
                "blog-card-container": "BlogCard_blog-card-container__RvLZI",
                "blog-card-image-container": "BlogCard_blog-card-image-container__aKC6Z",
                "blog-card-header": "BlogCard_blog-card-header__lWH_W",
                "blog-title": "BlogCard_blog-title__amdCw",
                "blog-preview": "BlogCard_blog-preview__UWIRP",
                "blog-poste-date": "BlogCard_blog-poste-date__PsSzN",
                "blog-page-container": "BlogCard_blog-page-container__yxOav",
                "blog-page-container__wide": "BlogCard_blog-page-container__wide__qCoNc",
                "mobile-three": "BlogCard_mobile-three__5ulZ_",
                "created-time": "BlogCard_created-time__BqXO0",
                letter: "BlogCard_letter__9rFUc",
                promo: "BlogCard_promo__lFeRT",
                "space-items": "BlogCard_space-items__tXnsu",
                heading: "BlogCard_heading__MSJAm",
                "header-nav": "BlogCard_header-nav__1ol4_",
                "blog-page-title": "BlogCard_blog-page-title__6O973",
                "meta-info": "BlogCard_meta-info__QZ5Ma",
                section: "BlogCard_section__AcTk3",
                "item-name": "BlogCard_item-name__ida3W",
                breadcrumbs: "BlogCard_breadcrumbs__v30kF",
                "blog-page-image": "BlogCard_blog-page-image__8FTaU",
                "main-content-section": "BlogCard_main-content-section___cb3a",
                "side-nav-container": "BlogCard_side-nav-container__WWjdo",
                hide: "BlogCard_hide__8HEkR",
                "side-nav": "BlogCard_side-nav__wQSsb",
                "active-anchor": "BlogCard_active-anchor__K5_o_",
                "main-content": "BlogCard_main-content__HLjJy",
                "mobile-table-toggle": "BlogCard_mobile-table-toggle__s3bOh",
                arrow: "BlogCard_arrow__jKORB",
                active: "BlogCard_active__BOwjr",
                show: "BlogCard_show__UUqWb"
            }
        }
    }
]);