(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2842], {
        76489: function(e, t) {
            "use strict";
            t.parse = function(e, t) {
                if ("string" != typeof e) throw TypeError("argument str must be a string");
                var r = {},
                    o = e.length;
                if (o < 2) return r;
                var i = t && t.decode || l,
                    a = 0,
                    s = 0,
                    d = 0;
                do {
                    if (-1 === (s = e.indexOf("=", a))) break;
                    if (-1 === (d = e.indexOf(";", a))) d = o;
                    else if (s > d) {
                        a = e.lastIndexOf(";", s - 1) + 1;
                        continue
                    }
                    var f = c(e, a, s),
                        p = u(e, s, f),
                        h = e.slice(f, p);
                    if (!n.call(r, h)) {
                        var y = c(e, s + 1, d),
                            g = u(e, d, y);
                        34 === e.charCodeAt(y) && 34 === e.charCodeAt(g - 1) && (y++, g--);
                        var m = e.slice(y, g);
                        r[h] = function(e, t) {
                            try {
                                return t(e)
                            } catch (t) {
                                return e
                            }
                        }(m, i)
                    }
                    a = d + 1
                } while (a < o);
                return r
            }, t.serialize = function(e, t, n) {
                var c = n && n.encode || encodeURIComponent;
                if ("function" != typeof c) throw TypeError("option encode is invalid");
                if (!o.test(e)) throw TypeError("argument name is invalid");
                var u = c(t);
                if (!i.test(u)) throw TypeError("argument val is invalid");
                var l = e + "=" + u;
                if (!n) return l;
                if (null != n.maxAge) {
                    var d = Math.floor(n.maxAge);
                    if (!isFinite(d)) throw TypeError("option maxAge is invalid");
                    l += "; Max-Age=" + d
                }
                if (n.domain) {
                    if (!a.test(n.domain)) throw TypeError("option domain is invalid");
                    l += "; Domain=" + n.domain
                }
                if (n.path) {
                    if (!s.test(n.path)) throw TypeError("option path is invalid");
                    l += "; Path=" + n.path
                }
                if (n.expires) {
                    var f = n.expires;
                    if ("[object Date]" !== r.call(f) || isNaN(f.valueOf())) throw TypeError("option expires is invalid");
                    l += "; Expires=" + f.toUTCString()
                }
                if (n.httpOnly && (l += "; HttpOnly"), n.secure && (l += "; Secure"), n.partitioned && (l += "; Partitioned"), n.priority) switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
                    case "low":
                        l += "; Priority=Low";
                        break;
                    case "medium":
                        l += "; Priority=Medium";
                        break;
                    case "high":
                        l += "; Priority=High";
                        break;
                    default:
                        throw TypeError("option priority is invalid")
                }
                if (n.sameSite) switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                    case !0:
                    case "strict":
                        l += "; SameSite=Strict";
                        break;
                    case "lax":
                        l += "; SameSite=Lax";
                        break;
                    case "none":
                        l += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return l
            };
            var r = Object.prototype.toString,
                n = Object.prototype.hasOwnProperty,
                o = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
                i = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
                a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                s = /^[\u0020-\u003A\u003D-\u007E]*$/;

            function c(e, t, r) {
                do {
                    var n = e.charCodeAt(t);
                    if (32 !== n && 9 !== n) return t
                } while (++t < r);
                return r
            }

            function u(e, t, r) {
                for (; t > r;) {
                    var n = e.charCodeAt(--t);
                    if (32 !== n && 9 !== n) return t + 1
                }
                return r
            }

            function l(e) {
                return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
            }
        },
        35149: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AuthHandler = g;
            var o = p(r(26553)),
                i = r(52553),
                a = p(r(43370)),
                s = n(r(79786)),
                c = r(8625),
                u = r(88893),
                l = r(46140),
                d = r(76489);

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (f = function(e) {
                    return e ? r : t
                })(e)
            }

            function p(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = f(t);
                if (r && r.has(e)) return r.get(e);
                var n = {
                        __proto__: null
                    },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && ({}).hasOwnProperty.call(e, i)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                    }
                return n.default = e, r && r.set(e, n), n
            }
            async function h(e) {
                try {
                    return await e.json()
                } catch (e) {}
            }
            async function y(e) {
                var t, r, n, o;
                if (e instanceof Request) {
                    let t = new URL(e.url),
                        a = t.pathname.split("/").slice(3),
                        s = Object.fromEntries(e.headers),
                        c = Object.fromEntries(t.searchParams);
                    return c.nextauth = a, {
                        action: a[0],
                        method: e.method,
                        headers: s,
                        body: await h(e),
                        cookies: (0, d.parse)(null !== (r = e.headers.get("cookie")) && void 0 !== r ? r : ""),
                        providerId: a[1],
                        error: null !== (n = t.searchParams.get("error")) && void 0 !== n ? n : a[1],
                        origin: (0, i.detectOrigin)(null !== (o = s["x-forwarded-host"]) && void 0 !== o ? o : s.host, s["x-forwarded-proto"]),
                        query: c
                    }
                }
                let {
                    headers: a
                } = e, s = null !== (t = null == a ? void 0 : a["x-forwarded-host"]) && void 0 !== t ? t : null == a ? void 0 : a.host;
                return e.origin = (0, i.detectOrigin)(s, null == a ? void 0 : a["x-forwarded-proto"]), e
            }
            async function g(e) {
                var t, r, n, i, d, f, p;
                let {
                    options: h,
                    req: g
                } = e, m = await y(g);
                (0, o.setLogger)(h.logger, h.debug);
                let b = (0, u.assertConfig)({
                    options: h,
                    req: m
                });
                if (Array.isArray(b)) b.forEach(o.default.warn);
                else if (b instanceof Error) {
                    if (o.default.error(b.code, b), !["signin", "signout", "error", "verify-request"].includes(m.action) || "GET" !== m.method) return {
                        status: 500,
                        headers: [{
                            key: "Content-Type",
                            value: "application/json"
                        }],
                        body: {
                            message: "There is a problem with the server configuration. Check the server logs for more information."
                        }
                    };
                    let {
                        pages: e,
                        theme: t
                    } = h, r = (null == e ? void 0 : e.error) && (null === (d = m.query) || void 0 === d || null === (d = d.callbackUrl) || void 0 === d ? void 0 : d.startsWith(e.error));
                    return !(null != e && e.error) || r ? (r && o.default.error("AUTH_ON_ERROR_PAGE_ERROR", Error(`The error page ${null==e?void 0:e.error} should not require authentication`)), (0, s.default)({
                        theme: t
                    }).error({
                        error: "configuration"
                    })) : {
                        redirect: `${e.error}?error=Configuration`
                    }
                }
                let {
                    action: v,
                    providerId: _,
                    error: w,
                    method: S = "GET"
                } = m, {
                    options: E,
                    cookies: A
                } = await (0, c.init)({
                    authOptions: h,
                    action: v,
                    providerId: _,
                    origin: m.origin,
                    callbackUrl: null !== (t = null === (r = m.body) || void 0 === r ? void 0 : r.callbackUrl) && void 0 !== t ? t : null === (n = m.query) || void 0 === n ? void 0 : n.callbackUrl,
                    csrfToken: null === (i = m.body) || void 0 === i ? void 0 : i.csrfToken,
                    cookies: m.cookies,
                    isPost: "POST" === S
                }), k = new l.SessionStore(E.cookies.sessionToken, m, E.logger);
                if ("GET" === S) {
                    let e = (0, s.default)({ ...E,
                            query: m.query,
                            cookies: A
                        }),
                        {
                            pages: t
                        } = E;
                    switch (v) {
                        case "providers":
                            return await a.providers(E.providers);
                        case "session":
                            {
                                let e = await a.session({
                                    options: E,
                                    sessionStore: k
                                });
                                return e.cookies && A.push(...e.cookies),
                                { ...e,
                                    cookies: A
                                }
                            }
                        case "csrf":
                            return {
                                headers: [{
                                    key: "Content-Type",
                                    value: "application/json"
                                }],
                                body: {
                                    csrfToken: E.csrfToken
                                },
                                cookies: A
                            };
                        case "signin":
                            if (t.signIn) {
                                let e = `${t.signIn}${t.signIn.includes("?")?"&":"?"}callbackUrl=${encodeURIComponent(E.callbackUrl)}`;
                                return w && (e = `${e}&error=${encodeURIComponent(w)}`), {
                                    redirect: e,
                                    cookies: A
                                }
                            }
                            return e.signin();
                        case "signout":
                            if (t.signOut) return {
                                redirect: t.signOut,
                                cookies: A
                            };
                            return e.signout();
                        case "callback":
                            if (E.provider) {
                                let e = await a.callback({
                                    body: m.body,
                                    query: m.query,
                                    headers: m.headers,
                                    cookies: m.cookies,
                                    method: S,
                                    options: E,
                                    sessionStore: k
                                });
                                return e.cookies && A.push(...e.cookies), { ...e,
                                    cookies: A
                                }
                            }
                            break;
                        case "verify-request":
                            if (t.verifyRequest) return {
                                redirect: t.verifyRequest,
                                cookies: A
                            };
                            return e.verifyRequest();
                        case "error":
                            if (["Signin", "OAuthSignin", "OAuthCallback", "OAuthCreateAccount", "EmailCreateAccount", "Callback", "OAuthAccountNotLinked", "EmailSignin", "CredentialsSignin", "SessionRequired"].includes(w)) return {
                                redirect: `${E.url}/signin?error=${w}`,
                                cookies: A
                            };
                            if (t.error) return {
                                redirect: `${t.error}${t.error.includes("?")?"&":"?"}error=${w}`,
                                cookies: A
                            };
                            return e.error({
                                error: w
                            })
                    }
                } else if ("POST" === S) switch (v) {
                    case "signin":
                        if (E.csrfTokenVerified && E.provider) {
                            let e = await a.signin({
                                query: m.query,
                                body: m.body,
                                options: E
                            });
                            return e.cookies && A.push(...e.cookies), { ...e,
                                cookies: A
                            }
                        }
                        return {
                            redirect: `${E.url}/signin?csrf=true`,
                            cookies: A
                        };
                    case "signout":
                        if (E.csrfTokenVerified) {
                            let e = await a.signout({
                                options: E,
                                sessionStore: k
                            });
                            return e.cookies && A.push(...e.cookies), { ...e,
                                cookies: A
                            }
                        }
                        return {
                            redirect: `${E.url}/signout?csrf=true`,
                            cookies: A
                        };
                    case "callback":
                        if (E.provider) {
                            if ("credentials" === E.provider.type && !E.csrfTokenVerified) return {
                                redirect: `${E.url}/signin?csrf=true`,
                                cookies: A
                            };
                            let e = await a.callback({
                                body: m.body,
                                query: m.query,
                                headers: m.headers,
                                cookies: m.cookies,
                                method: S,
                                options: E,
                                sessionStore: k
                            });
                            return e.cookies && A.push(...e.cookies), { ...e,
                                cookies: A
                            }
                        }
                        break;
                    case "_log":
                        if (h.logger) try {
                            let {
                                code: e,
                                level: t,
                                ...r
                            } = null !== (f = m.body) && void 0 !== f ? f : {};
                            o.default[t](e, r)
                        } catch (e) {
                            o.default.error("LOGGER_ERROR", e)
                        }
                        return {};
                    case "session":
                        if (E.csrfTokenVerified) {
                            let e = await a.session({
                                options: E,
                                sessionStore: k,
                                newSession: null === (p = m.body) || void 0 === p ? void 0 : p.data,
                                isUpdate: !0
                            });
                            return e.cookies && A.push(...e.cookies), { ...e,
                                cookies: A
                            }
                        }
                        return {
                            status: 400,
                            body: {},
                            cookies: A
                        }
                }
                return {
                    status: 400,
                    body: `Error: This action with HTTP ${S} is not supported by NextAuth.js`
                }
            }
        },
        8625: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.init = m;
            var o = r(42474),
                i = n(r(26553)),
                a = r(36925),
                s = n(r(34443)),
                c = r(15261),
                u = g(r(46140)),
                l = g(r(82260)),
                d = r(8244),
                f = r(53443),
                p = r(75289),
                h = n(r(30762));

            function y(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (y = function(e) {
                    return e ? r : t
                })(e)
            }

            function g(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = y(t);
                if (r && r.has(e)) return r.get(e);
                var n = {
                        __proto__: null
                    },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && ({}).hasOwnProperty.call(e, i)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                    }
                return n.default = e, r && r.set(e, n), n
            }
            async function m({
                authOptions: e,
                providerId: t,
                action: r,
                origin: n,
                cookies: y,
                callbackUrl: g,
                csrfToken: m,
                isPost: b
            }) {
                var v, _;
                let w = (0, h.default)(n),
                    S = (0, c.createSecret)({
                        authOptions: e,
                        url: w
                    }),
                    {
                        providers: E,
                        provider: A
                    } = (0, s.default)({
                        providers: e.providers,
                        url: w,
                        providerId: t
                    }),
                    k = {
                        debug: !1,
                        pages: {},
                        theme: {
                            colorScheme: "auto",
                            logo: "",
                            brandColor: "",
                            buttonText: ""
                        },
                        ...e,
                        url: w,
                        action: r,
                        provider: A,
                        cookies: { ...u.defaultCookies(null !== (v = e.useSecureCookies) && void 0 !== v ? v : w.base.startsWith("https://")),
                            ...e.cookies
                        },
                        secret: S,
                        providers: E,
                        session: {
                            strategy: e.adapter ? "database" : "jwt",
                            maxAge: 2592e3,
                            updateAge: 86400,
                            generateSessionToken: () => {
                                var e;
                                return null !== (e = null === o.randomUUID || void 0 === o.randomUUID ? void 0 : (0, o.randomUUID)()) && void 0 !== e ? e : (0, o.randomBytes)(32).toString("hex")
                            },
                            ...e.session
                        },
                        jwt: {
                            secret: S,
                            maxAge: 2592e3,
                            encode: l.encode,
                            decode: l.decode,
                            ...e.jwt
                        },
                        events: (0, a.eventsErrorHandler)(null !== (_ = e.events) && void 0 !== _ ? _ : {}, i.default),
                        adapter: (0, a.adapterErrorHandler)(e.adapter, i.default),
                        callbacks: { ...d.defaultCallbacks,
                            ...e.callbacks
                        },
                        logger: i.default,
                        callbackUrl: w.origin
                    },
                    O = [],
                    {
                        csrfToken: P,
                        cookie: x,
                        csrfTokenVerified: T
                    } = (0, f.createCSRFToken)({
                        options: k,
                        cookieValue: null == y ? void 0 : y[k.cookies.csrfToken.name],
                        isPost: b,
                        bodyValue: m
                    });
                k.csrfToken = P, k.csrfTokenVerified = T, x && O.push({
                    name: k.cookies.csrfToken.name,
                    value: x,
                    options: k.cookies.csrfToken.options
                });
                let {
                    callbackUrl: j,
                    callbackUrlCookie: R
                } = await (0, p.createCallbackUrl)({
                    options: k,
                    cookieValue: null == y ? void 0 : y[k.cookies.callbackUrl.name],
                    paramValue: g
                });
                return k.callbackUrl = j, R && O.push({
                    name: k.cookies.callbackUrl.name,
                    value: R,
                    options: k.cookies.callbackUrl.options
                }), {
                    options: k,
                    cookies: O
                }
            }
        },
        88893: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assertConfig = function(e) {
                var t, r, n, u, l, d, f;
                let p, h, y;
                let {
                    options: g,
                    req: m
                } = e, b = [];
                if (!s && (m.origin || b.push("NEXTAUTH_URL"), g.secret, g.debug && b.push("DEBUG_ENABLED")), !g.secret) return new o.MissingSecret("Please define a `secret` in production.");
                if (!(null !== (t = m.query) && void 0 !== t && t.nextauth) && !m.action) return new o.MissingAPIRoute("Cannot find [...nextauth].{js,ts} in `/pages/api/auth`. Make sure the filename is written correctly.");
                let v = null === (r = m.query) || void 0 === r ? void 0 : r.callbackUrl,
                    _ = (0, i.default)(m.origin);
                if (v && !c(v, _.base)) return new o.InvalidCallbackUrl(`Invalid callback URL. Received: ${v}`);
                let {
                    callbackUrl: w
                } = (0, a.defaultCookies)(null !== (n = g.useSecureCookies) && void 0 !== n ? n : _.base.startsWith("https://")), S = null === (u = m.cookies) || void 0 === u ? void 0 : u[null !== (l = null === (d = g.cookies) || void 0 === d || null === (d = d.callbackUrl) || void 0 === d ? void 0 : d.name) && void 0 !== l ? l : w.name];
                if (S && !c(S, _.base)) return new o.InvalidCallbackUrl(`Invalid callback URL. Received: ${S}`);
                for (let e of g.providers) "credentials" === e.type ? p = !0 : "email" === e.type ? h = !0 : "twitter" === e.id && "2.0" === e.version && (y = !0);
                if (p) {
                    let e = (null === (f = g.session) || void 0 === f ? void 0 : f.strategy) === "database",
                        t = !g.providers.some(e => "credentials" !== e.type);
                    if (e && t) return new o.UnsupportedStrategy("Signin in with credentials only supported if JWT strategy is enabled");
                    if (g.providers.some(e => "credentials" === e.type && !e.authorize)) return new o.MissingAuthorize("Must define an authorize() handler to use credentials authentication provider")
                }
                if (h) {
                    let {
                        adapter: e
                    } = g;
                    if (!e) return new o.MissingAdapter("E-mail login requires an adapter.");
                    let t = ["createVerificationToken", "useVerificationToken", "getUserByEmail"].filter(t => !e[t]);
                    if (t.length) return new o.MissingAdapterMethods(`Required adapter methods were missing: ${t.join(", ")}`)
                }
                return s || (y && b.push("TWITTER_OAUTH_2_BETA"), s = !0), b
            };
            var o = r(36925),
                i = n(r(30762)),
                a = r(46140);
            let s = !1;

            function c(e, t) {
                try {
                    return /^https?:/.test(new URL(e, e.startsWith("/") ? t : void 0).protocol)
                } catch (e) {
                    return !1
                }
            }
        },
        98385: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i;
            var n = r(36925),
                o = r(15261);
            async function i(e) {
                var t, r, i, a, s, c;
                let {
                    sessionToken: u,
                    profile: l,
                    account: d,
                    options: f
                } = e;
                if (!(null != d && d.providerAccountId) || !d.type) throw Error("Missing or invalid provider account");
                if (!["email", "oauth"].includes(d.type)) throw Error("Provider not supported");
                let {
                    adapter: p,
                    jwt: h,
                    events: y,
                    session: {
                        strategy: g,
                        generateSessionToken: m
                    }
                } = f;
                if (!p) return {
                    user: l,
                    account: d
                };
                let {
                    createUser: b,
                    updateUser: v,
                    getUser: _,
                    getUserByAccount: w,
                    getUserByEmail: S,
                    linkAccount: E,
                    createSession: A,
                    getSessionAndUser: k,
                    deleteSession: O
                } = p, P = null, x = null, T = !1, j = "jwt" === g;
                if (u) {
                    if (j) try {
                        (P = await h.decode({ ...h,
                            token: u
                        })) && "sub" in P && P.sub && (x = await _(P.sub))
                    } catch (e) {} else {
                        let e = await k(u);
                        e && (P = e.session, x = e.user)
                    }
                }
                if ("email" === d.type) {
                    let e = await S(l.email);
                    if (e)(null === (t = x) || void 0 === t ? void 0 : t.id) !== e.id && !j && u && await O(u), x = await v({
                        id: e.id,
                        emailVerified: new Date
                    }), await (null === (r = y.updateUser) || void 0 === r ? void 0 : r.call(y, {
                        user: x
                    }));
                    else {
                        let {
                            id: e,
                            ...t
                        } = { ...l,
                            emailVerified: new Date
                        };
                        x = await b(t), await (null === (i = y.createUser) || void 0 === i ? void 0 : i.call(y, {
                            user: x
                        })), T = !0
                    }
                    return {
                        session: P = j ? {} : await A({
                            sessionToken: await m(),
                            userId: x.id,
                            expires: (0, o.fromDate)(f.session.maxAge)
                        }),
                        user: x,
                        isNewUser: T
                    }
                }
                if ("oauth" === d.type) {
                    let e = await w({
                        providerAccountId: d.providerAccountId,
                        provider: d.provider
                    });
                    if (e) {
                        if (x) {
                            if (e.id === x.id) return {
                                session: P,
                                user: x,
                                isNewUser: T
                            };
                            throw new n.AccountNotLinkedError("The account is already associated with another user")
                        }
                        return {
                            session: P = j ? {} : await A({
                                sessionToken: await m(),
                                userId: e.id,
                                expires: (0, o.fromDate)(f.session.maxAge)
                            }),
                            user: e,
                            isNewUser: T
                        }
                    } {
                        if (x) return await E({ ...d,
                            userId: x.id
                        }), await (null === (c = y.linkAccount) || void 0 === c ? void 0 : c.call(y, {
                            user: x,
                            account: d,
                            profile: l
                        })), {
                            session: P,
                            user: x,
                            isNewUser: T
                        };
                        let e = l.email ? await S(l.email) : null;
                        if (e) {
                            let t = f.provider;
                            if (null != t && t.allowDangerousEmailAccountLinking) x = e;
                            else throw new n.AccountNotLinkedError("Another account already exists with the same e-mail address")
                        } else {
                            let {
                                id: e,
                                ...t
                            } = { ...l,
                                emailVerified: null
                            };
                            x = await b(t)
                        }
                        return await (null === (a = y.createUser) || void 0 === a ? void 0 : a.call(y, {
                            user: x
                        })), await E({ ...d,
                            userId: x.id
                        }), await (null === (s = y.linkAccount) || void 0 === s ? void 0 : s.call(y, {
                            user: x,
                            account: d,
                            profile: l
                        })), {
                            session: P = j ? {} : await A({
                                sessionToken: await m(),
                                userId: x.id,
                                expires: (0, o.fromDate)(f.session.maxAge)
                            }),
                            user: x,
                            isNewUser: !0
                        }
                    }
                }
                throw Error("Unsupported account type")
            }
        },
        75289: function(e, t) {
            "use strict";
            async function r({
                options: e,
                paramValue: t,
                cookieValue: r
            }) {
                let {
                    url: n,
                    callbacks: o
                } = e, i = n.origin;
                return t ? i = await o.redirect({
                    url: t,
                    baseUrl: n.origin
                }) : r && (i = await o.redirect({
                    url: r,
                    baseUrl: n.origin
                })), {
                    callbackUrl: i,
                    callbackUrlCookie: i !== r ? i : void 0
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCallbackUrl = r
        },
        46140: function(e, t) {
            "use strict";

            function r(e, t, r) {
                n(e, t), t.set(e, r)
            }

            function n(e, t) {
                if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
            }

            function o(e, t) {
                return e.get(a(e, t))
            }

            function i(e, t, r) {
                return e.set(a(e, t), r), r
            }

            function a(e, t, r) {
                if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : r;
                throw TypeError("Private element is not present on this object")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SessionStore = void 0, t.defaultCookies = function(e) {
                let t = e ? "__Secure-" : "";
                return {
                    sessionToken: {
                        name: `${t}next-auth.session-token`,
                        options: {
                            httpOnly: !0,
                            sameSite: "lax",
                            path: "/",
                            secure: e
                        }
                    },
                    callbackUrl: {
                        name: `${t}next-auth.callback-url`,
                        options: {
                            httpOnly: !0,
                            sameSite: "lax",
                            path: "/",
                            secure: e
                        }
                    },
                    csrfToken: {
                        name: `${e?"__Host-":""}next-auth.csrf-token`,
                        options: {
                            httpOnly: !0,
                            sameSite: "lax",
                            path: "/",
                            secure: e
                        }
                    },
                    pkceCodeVerifier: {
                        name: `${t}next-auth.pkce.code_verifier`,
                        options: {
                            httpOnly: !0,
                            sameSite: "lax",
                            path: "/",
                            secure: e,
                            maxAge: 900
                        }
                    },
                    state: {
                        name: `${t}next-auth.state`,
                        options: {
                            httpOnly: !0,
                            sameSite: "lax",
                            path: "/",
                            secure: e,
                            maxAge: 900
                        }
                    },
                    nonce: {
                        name: `${t}next-auth.nonce`,
                        options: {
                            httpOnly: !0,
                            sameSite: "lax",
                            path: "/",
                            secure: e
                        }
                    }
                }
            };
            var s = new WeakMap,
                c = new WeakMap,
                u = new WeakMap,
                l = new WeakSet;
            class d {
                constructor(e, t, a) {
                    n(this, l), l.add(this), r(this, s, {}), r(this, c, void 0), r(this, u, void 0), i(u, this, a), i(c, this, e);
                    let {
                        cookies: d
                    } = t, {
                        name: f
                    } = e;
                    if ("function" == typeof(null == d ? void 0 : d.getAll))
                        for (let {
                                name: e,
                                value: t
                            } of d.getAll()) e.startsWith(f) && (o(s, this)[e] = t);
                    else if (d instanceof Map)
                        for (let e of d.keys()) e.startsWith(f) && (o(s, this)[e] = d.get(e));
                    else
                        for (let e in d) e.startsWith(f) && (o(s, this)[e] = d[e])
                }
                get value() {
                    return Object.keys(o(s, this)).sort((e, t) => {
                        var r, n;
                        return parseInt(null !== (r = e.split(".").pop()) && void 0 !== r ? r : "0") - parseInt(null !== (n = t.split(".").pop()) && void 0 !== n ? n : "0")
                    }).map(e => o(s, this)[e]).join("")
                }
                chunk(e, t) {
                    let r = a(l, this, p).call(this);
                    for (let n of a(l, this, f).call(this, {
                            name: o(c, this).name,
                            value: e,
                            options: { ...o(c, this).options,
                                ...t
                            }
                        })) r[n.name] = n;
                    return Object.values(r)
                }
                clean() {
                    return Object.values(a(l, this, p).call(this))
                }
            }

            function f(e) {
                let t = Math.ceil(e.value.length / 3933);
                if (1 === t) return o(s, this)[e.name] = e.value, [e];
                let r = [];
                for (let n = 0; n < t; n++) {
                    let t = `${e.name}.${n}`,
                        i = e.value.substr(3933 * n, 3933);
                    r.push({ ...e,
                        name: t,
                        value: i
                    }), o(s, this)[t] = i
                }
                return o(u, this).debug("CHUNKING_SESSION_COOKIE", {
                    message: "Session cookie exceeds allowed 4096 bytes.",
                    emptyCookieSize: 163,
                    valueSize: e.value.length,
                    chunks: r.map(e => e.value.length + 163)
                }), r
            }

            function p() {
                let e = {};
                for (let r in o(s, this)) {
                    var t;
                    null === (t = o(s, this)) || void 0 === t || delete t[r], e[r] = {
                        name: r,
                        value: "",
                        options: { ...o(c, this).options,
                            maxAge: 0
                        }
                    }
                }
                return e
            }
            t.SessionStore = d
        },
        53443: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createCSRFToken = function({
                options: e,
                cookieValue: t,
                isPost: r,
                bodyValue: o
            }) {
                if (t) {
                    let [i, a] = t.split("|");
                    if (a === (0, n.createHash)("sha256").update(`${i}${e.secret}`).digest("hex")) return {
                        csrfTokenVerified: r && i === o,
                        csrfToken: i
                    }
                }
                let i = (0, n.randomBytes)(32).toString("hex"),
                    a = (0, n.createHash)("sha256").update(`${i}${e.secret}`).digest("hex");
                return {
                    cookie: `${i}|${a}`,
                    csrfToken: i
                }
            };
            var n = r(42474)
        },
        8244: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultCallbacks = void 0, t.defaultCallbacks = {
                signIn: () => !0,
                redirect: ({
                    url: e,
                    baseUrl: t
                }) => e.startsWith("/") ? `${t}${e}` : new URL(e).origin === t ? e : t,
                session: ({
                    session: e
                }) => e,
                jwt: ({
                    token: e
                }) => e
            }
        },
        33442: function(e, t) {
            "use strict";
            async function r({
                email: e,
                adapter: t
            }) {
                let {
                    getUserByEmail: r
                } = t;
                return (e ? await r(e) : null) || {
                    id: e,
                    email: e,
                    emailVerified: null
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r
        },
        49521: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i;
            var n = r(42474),
                o = r(15261);
            async function i(e, t) {
                var r, i, a, s;
                let {
                    url: c,
                    adapter: u,
                    provider: l,
                    callbackUrl: d,
                    theme: f
                } = t, p = null !== (r = await (null === (i = l.generateVerificationToken) || void 0 === i ? void 0 : i.call(l))) && void 0 !== r ? r : (0, n.randomBytes)(32).toString("hex"), h = new Date(Date.now() + (null !== (a = l.maxAge) && void 0 !== a ? a : 86400) * 1e3), y = new URLSearchParams({
                    callbackUrl: d,
                    token: p,
                    email: e
                }), g = `${c}/callback/${l.id}?${y}`;
                return await Promise.all([l.sendVerificationRequest({
                    identifier: e,
                    token: p,
                    expires: h,
                    url: g,
                    provider: l,
                    theme: f
                }), null === (s = u.createVerificationToken) || void 0 === s ? void 0 : s.call(u, {
                    identifier: e,
                    token: (0, o.hashToken)(p, t),
                    expires: h
                })]), `${c}/verify-request?${new URLSearchParams({provider:l.id,type:l.type})}`
            }
        },
        25680: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var n = r(8532),
                o = r(44950),
                i = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = a(void 0);
                    if (r && r.has(e)) return r.get(e);
                    var n = {
                            __proto__: null
                        },
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && ({}).hasOwnProperty.call(e, i)) {
                            var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                        }
                    return n.default = e, r && r.set(e, n), n
                }(r(98977));

            function a(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (a = function(e) {
                    return e ? r : t
                })(e)
            }
            async function s({
                options: e,
                query: t
            }) {
                var r, a, s;
                let {
                    logger: c,
                    provider: u
                } = e, l = {};
                if ("string" == typeof u.authorization) {
                    let e = Object.fromEntries(new URL(u.authorization).searchParams);
                    l = { ...l,
                        ...e
                    }
                } else l = { ...l,
                    ...null === (a = u.authorization) || void 0 === a ? void 0 : a.params
                };
                if (l = { ...l,
                        ...t
                    }, null !== (r = u.version) && void 0 !== r && r.startsWith("1.")) {
                    let t = (0, o.oAuth1Client)(e),
                        r = await t.getOAuthRequestToken(l),
                        n = `${null===(s=u.authorization)||void 0===s?void 0:s.url}?${new URLSearchParams({oauth_token:r.oauth_token,oauth_token_secret:r.oauth_token_secret,...r.params})}`;
                    return o.oAuth1TokenStore.set(r.oauth_token, r.oauth_token_secret), c.debug("GET_AUTHORIZATION_URL", {
                        url: n,
                        provider: u
                    }), {
                        redirect: n
                    }
                }
                let d = await (0, n.openidClient)(e),
                    f = l,
                    p = [];
                await i.state.create(e, p, f), await i.pkce.create(e, p, f), await i.nonce.create(e, p, f);
                let h = d.authorizationUrl(f);
                return c.debug("GET_AUTHORIZATION_URL", {
                    url: h,
                    cookies: p,
                    provider: u
                }), {
                    redirect: h,
                    cookies: p
                }
            }
        },
        97488: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = u;
            var n = r(1831),
                o = r(8532),
                i = r(44950),
                a = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = c(void 0);
                    if (r && r.has(e)) return r.get(e);
                    var n = {
                            __proto__: null
                        },
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && ({}).hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    return n.default = e, r && r.set(e, n), n
                }(r(98977)),
                s = r(36925);

            function c(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (c = function(e) {
                    return e ? r : t
                })(e)
            }
            async function u(e) {
                var t, r, c, u, d, f;
                let {
                    options: p,
                    query: h,
                    body: y,
                    method: g,
                    cookies: m
                } = e, {
                    logger: b,
                    provider: v
                } = p, _ = null !== (t = null == y ? void 0 : y.error) && void 0 !== t ? t : null == h ? void 0 : h.error;
                if (_) {
                    let e = Error(_);
                    throw b.error("OAUTH_CALLBACK_HANDLER_ERROR", {
                        error: e,
                        error_description: null == h ? void 0 : h.error_description,
                        providerId: v.id
                    }), b.debug("OAUTH_CALLBACK_HANDLER_ERROR", {
                        body: y
                    }), e
                }
                if (null !== (r = v.version) && void 0 !== r && r.startsWith("1.")) try {
                    let e = await (0, i.oAuth1Client)(p),
                        {
                            oauth_token: t,
                            oauth_verifier: r
                        } = null != h ? h : {},
                        n = await e.getOAuthAccessToken(t, i.oAuth1TokenStore.get(t), r),
                        o = await e.get(v.profileUrl, n.oauth_token, n.oauth_token_secret);
                    return "string" == typeof o && (o = JSON.parse(o)), { ...await l({
                            profile: o,
                            tokens: n,
                            provider: v,
                            logger: b
                        }),
                        cookies: []
                    }
                } catch (e) {
                    throw b.error("OAUTH_V1_GET_ACCESS_TOKEN_ERROR", e), e
                }
                null != h && h.oauth_token && i.oAuth1TokenStore.delete(h.oauth_token);
                try {
                    let e, t;
                    let r = await (0, o.openidClient)(p),
                        i = {},
                        s = [];
                    await a.state.use(m, s, p, i), await a.pkce.use(m, s, p, i), await a.nonce.use(m, s, p, i);
                    let _ = { ...r.callbackParams({
                            url: `http://n?${new URLSearchParams(h)}`,
                            body: y,
                            method: g
                        }),
                        ...null === (c = v.token) || void 0 === c ? void 0 : c.params
                    };
                    if (null !== (u = v.token) && void 0 !== u && u.request) {
                        let t = await v.token.request({
                            provider: v,
                            params: _,
                            checks: i,
                            client: r
                        });
                        e = new n.TokenSet(t.tokens)
                    } else e = v.idToken ? await r.callback(v.callbackUrl, _, i) : await r.oauthCallback(v.callbackUrl, _, i);
                    return Array.isArray(e.scope) && (e.scope = e.scope.join(" ")), t = null !== (d = v.userinfo) && void 0 !== d && d.request ? await v.userinfo.request({
                        provider: v,
                        tokens: e,
                        client: r
                    }) : v.idToken ? e.claims() : await r.userinfo(e, {
                        params: null === (f = v.userinfo) || void 0 === f ? void 0 : f.params
                    }), { ...await l({
                            profile: t,
                            provider: v,
                            tokens: e,
                            logger: b
                        }),
                        cookies: s
                    }
                } catch (e) {
                    throw new s.OAuthCallbackError(e)
                }
            }
            async function l({
                profile: e,
                tokens: t,
                provider: r,
                logger: n
            }) {
                try {
                    var o;
                    n.debug("PROFILE_DATA", {
                        OAuthProfile: e
                    });
                    let i = await r.profile(e, t);
                    if (i.email = null === (o = i.email) || void 0 === o ? void 0 : o.toLowerCase(), !i.id) throw TypeError(`Profile id is missing in ${r.name} OAuth profile response`);
                    return {
                        profile: i,
                        account: {
                            provider: r.id,
                            type: r.type,
                            providerAccountId: i.id.toString(),
                            ...t
                        },
                        OAuthProfile: e
                    }
                } catch (t) {
                    n.error("OAUTH_PARSE_PROFILE_ERROR", {
                        error: t,
                        OAuthProfile: e
                    })
                }
            }
        },
        98977: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pkce = t.nonce = t.PKCE_CODE_CHALLENGE_METHOD = void 0, t.signCookie = a, t.state = void 0;
            var n = r(1831),
                o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var r = i(void 0);
                    if (r && r.has(e)) return r.get(e);
                    var n = {
                            __proto__: null
                        },
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && ({}).hasOwnProperty.call(e, a)) {
                            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                        }
                    return n.default = e, r && r.set(e, n), n
                }(r(82260));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (i = function(e) {
                    return e ? r : t
                })(e)
            }
            async function a(e, t, r, n) {
                let {
                    cookies: i,
                    logger: a
                } = n;
                a.debug(`CREATE_${e.toUpperCase()}`, {
                    value: t,
                    maxAge: r
                });
                let {
                    name: s
                } = i[e], c = new Date;
                return c.setTime(c.getTime() + 1e3 * r), {
                    name: s,
                    value: await o.encode({ ...n.jwt,
                        maxAge: r,
                        token: {
                            value: t
                        },
                        salt: s
                    }),
                    options: { ...i[e].options,
                        expires: c
                    }
                }
            }
            let s = t.PKCE_CODE_CHALLENGE_METHOD = "S256";
            t.pkce = {
                async create(e, t, r) {
                    var o, i;
                    if (!(null !== (o = e.provider) && void 0 !== o && null !== (o = o.checks) && void 0 !== o && o.includes("pkce"))) return;
                    let c = n.generators.codeVerifier(),
                        u = n.generators.codeChallenge(c);
                    r.code_challenge = u, r.code_challenge_method = s;
                    let l = null !== (i = e.cookies.pkceCodeVerifier.options.maxAge) && void 0 !== i ? i : 900;
                    t.push(await a("pkceCodeVerifier", c, l, e))
                },
                async use(e, t, r, n) {
                    var i;
                    if (!(null !== (i = r.provider) && void 0 !== i && null !== (i = i.checks) && void 0 !== i && i.includes("pkce"))) return;
                    let a = null == e ? void 0 : e[r.cookies.pkceCodeVerifier.name];
                    if (!a) throw TypeError("PKCE code_verifier cookie was missing.");
                    let {
                        name: s
                    } = r.cookies.pkceCodeVerifier, c = await o.decode({ ...r.jwt,
                        token: a,
                        salt: s
                    });
                    if (!(null != c && c.value)) throw TypeError("PKCE code_verifier value could not be parsed.");
                    t.push({
                        name: s,
                        value: "",
                        options: { ...r.cookies.pkceCodeVerifier.options,
                            maxAge: 0
                        }
                    }), n.code_verifier = c.value
                }
            }, t.state = {
                async create(e, t, r) {
                    var o, i;
                    if (!(null !== (o = e.provider.checks) && void 0 !== o && o.includes("state"))) return;
                    let s = n.generators.state();
                    r.state = s;
                    let c = null !== (i = e.cookies.state.options.maxAge) && void 0 !== i ? i : 900;
                    t.push(await a("state", s, c, e))
                },
                async use(e, t, r, n) {
                    var i;
                    if (!(null !== (i = r.provider.checks) && void 0 !== i && i.includes("state"))) return;
                    let a = null == e ? void 0 : e[r.cookies.state.name];
                    if (!a) throw TypeError("State cookie was missing.");
                    let {
                        name: s
                    } = r.cookies.state, c = await o.decode({ ...r.jwt,
                        token: a,
                        salt: s
                    });
                    if (!(null != c && c.value)) throw TypeError("State value could not be parsed.");
                    t.push({
                        name: s,
                        value: "",
                        options: { ...r.cookies.state.options,
                            maxAge: 0
                        }
                    }), n.state = c.value
                }
            }, t.nonce = {
                async create(e, t, r) {
                    var o, i;
                    if (!(null !== (o = e.provider.checks) && void 0 !== o && o.includes("nonce"))) return;
                    let s = n.generators.nonce();
                    r.nonce = s;
                    let c = null !== (i = e.cookies.nonce.options.maxAge) && void 0 !== i ? i : 900;
                    t.push(await a("nonce", s, c, e))
                },
                async use(e, t, r, n) {
                    var i;
                    if (!(null !== (i = r.provider) && void 0 !== i && null !== (i = i.checks) && void 0 !== i && i.includes("nonce"))) return;
                    let a = null == e ? void 0 : e[r.cookies.nonce.name];
                    if (!a) throw TypeError("Nonce cookie was missing.");
                    let {
                        name: s
                    } = r.cookies.nonce, c = await o.decode({ ...r.jwt,
                        token: a,
                        salt: s
                    });
                    if (!(null != c && c.value)) throw TypeError("Nonce value could not be parsed.");
                    t.push({
                        name: s,
                        value: "",
                        options: { ...r.cookies.nonce.options,
                            maxAge: 0
                        }
                    }), n.nonce = c.value
                }
            }
        },
        44950: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.oAuth1Client = function(e) {
                var t, r;
                let o = e.provider,
                    i = new n.OAuth(o.requestTokenUrl, o.accessTokenUrl, o.clientId, o.clientSecret, null !== (t = o.version) && void 0 !== t ? t : "1.0", o.callbackUrl, null !== (r = o.encoding) && void 0 !== r ? r : "HMAC-SHA1"),
                    a = i.get.bind(i);
                i.get = async (...e) => await new Promise((t, r) => {
                    a(...e, (e, n) => {
                        if (e) return r(e);
                        t(n)
                    })
                });
                let s = i.getOAuthAccessToken.bind(i);
                i.getOAuthAccessToken = async (...e) => await new Promise((t, r) => {
                    s(...e, (e, n, o) => {
                        if (e) return r(e);
                        t({
                            oauth_token: n,
                            oauth_token_secret: o
                        })
                    })
                });
                let c = i.getOAuthRequestToken.bind(i);
                return i.getOAuthRequestToken = async (e = {}) => await new Promise((t, r) => {
                    c(e, (e, n, o, i) => {
                        if (e) return r(e);
                        t({
                            oauth_token: n,
                            oauth_token_secret: o,
                            params: i
                        })
                    })
                }), i
            }, t.oAuth1TokenStore = void 0;
            var n = r(79169);
            t.oAuth1TokenStore = new Map
        },
        8532: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.openidClient = o;
            var n = r(1831);
            async function o(e) {
                let t;
                let r = e.provider;
                if (r.httpOptions && n.custom.setHttpOptionsDefaults(r.httpOptions), r.wellKnown) t = await n.Issuer.discover(r.wellKnown);
                else {
                    var o, i, a;
                    t = new n.Issuer({
                        issuer: r.issuer,
                        authorization_endpoint: null === (o = r.authorization) || void 0 === o ? void 0 : o.url,
                        token_endpoint: null === (i = r.token) || void 0 === i ? void 0 : i.url,
                        userinfo_endpoint: null === (a = r.userinfo) || void 0 === a ? void 0 : a.url,
                        jwks_uri: r.jwks_endpoint
                    })
                }
                let s = new t.Client({
                    client_id: r.clientId,
                    client_secret: r.clientSecret,
                    redirect_uris: [r.callbackUrl],
                    ...r.client
                }, r.jwks);
                return s[n.custom.clock_tolerance] = 10, s
            }
        },
        34443: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    url: t,
                    providerId: r
                } = e, i = e.providers.map(({
                    options: e,
                    ...r
                }) => {
                    var i, a;
                    if ("oauth" === r.type) {
                        let i = o(r),
                            s = o(e, !0),
                            c = null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : r.id;
                        return (0, n.merge)(i, { ...s,
                            signinUrl: `${t}/signin/${c}`,
                            callbackUrl: `${t}/callback/${c}`
                        })
                    }
                    let s = null !== (i = null == e ? void 0 : e.id) && void 0 !== i ? i : r.id;
                    return (0, n.merge)(r, { ...e,
                        signinUrl: `${t}/signin/${s}`,
                        callbackUrl: `${t}/callback/${s}`
                    })
                });
                return {
                    providers: i,
                    provider: i.find(({
                        id: e
                    }) => e === r)
                }
            };
            var n = r(94848);

            function o(e, t = !1) {
                var r, n, o, i, a;
                if (!e) return;
                let s = Object.entries(e).reduce((e, [t, r]) => {
                    if (["authorization", "token", "userinfo"].includes(t) && "string" == typeof r) {
                        var n;
                        let o = new URL(r);
                        e[t] = {
                            url: `${o.origin}${o.pathname}`,
                            params: Object.fromEntries(null !== (n = o.searchParams) && void 0 !== n ? n : [])
                        }
                    } else e[t] = r;
                    return e
                }, {});
                return t || null !== (r = s.version) && void 0 !== r && r.startsWith("1.") || (s.idToken = !!(null !== (n = null !== (o = s.idToken) && void 0 !== o ? o : null === (i = s.wellKnown) || void 0 === i ? void 0 : i.includes("openid-configuration")) && void 0 !== n ? n : null === (a = s.authorization) || void 0 === a || null === (a = a.params) || void 0 === a || null === (a = a.scope) || void 0 === a ? void 0 : a.includes("openid")), s.checks || (s.checks = ["state"])), s
            }
        },
        15261: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createSecret = function(e) {
                var t;
                let {
                    authOptions: r,
                    url: o
                } = e;
                return null !== (t = r.secret) && void 0 !== t ? t : (0, n.createHash)("sha256").update(JSON.stringify({ ...o,
                    ...r
                })).digest("hex")
            }, t.fromDate = function(e, t = Date.now()) {
                return new Date(t + 1e3 * e)
            }, t.hashToken = function(e, t) {
                var r;
                let {
                    provider: o,
                    secret: i
                } = t;
                return (0, n.createHash)("sha256").update(`${e}${null!==(r=o.secret)&&void 0!==r?r:i}`).digest("hex")
            };
            var n = r(42474)
        },
        35131: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                let {
                    url: r,
                    error: o = "default",
                    theme: i
                } = e, a = `${r}/signin`, s = {
                    default: {
                        status: 200,
                        heading: "Error",
                        message: (0, n.h)("p", null, (0, n.h)("a", {
                            className: "site",
                            href: null == r ? void 0 : r.origin
                        }, null == r ? void 0 : r.host))
                    },
                    configuration: {
                        status: 500,
                        heading: "Server error",
                        message: (0, n.h)("div", null, (0, n.h)("p", null, "There is a problem with the server configuration."), (0, n.h)("p", null, "Check the server logs for more information."))
                    },
                    accessdenied: {
                        status: 403,
                        heading: "Access Denied",
                        message: (0, n.h)("div", null, (0, n.h)("p", null, "You do not have permission to sign in."), (0, n.h)("p", null, (0, n.h)("a", {
                            className: "button",
                            href: a
                        }, "Sign in")))
                    },
                    verification: {
                        status: 403,
                        heading: "Unable to sign in",
                        message: (0, n.h)("div", null, (0, n.h)("p", null, "The sign in link is no longer valid."), (0, n.h)("p", null, "It may have been used already or it may have expired.")),
                        signin: (0, n.h)("a", {
                            className: "button",
                            href: a
                        }, "Sign in")
                    }
                }, {
                    status: c,
                    heading: u,
                    message: l,
                    signin: d
                } = null !== (t = s[o.toLowerCase()]) && void 0 !== t ? t : s.default;
                return {
                    status: c,
                    html: (0, n.h)("div", {
                        className: "error"
                    }, (null == i ? void 0 : i.brandColor) && (0, n.h)("style", {
                        dangerouslySetInnerHTML: {
                            __html: `
        :root {
          --brand-color: ${null==i?void 0:i.brandColor}
        }
      `
                        }
                    }), (0, n.h)("div", {
                        className: "card"
                    }, (null == i ? void 0 : i.logo) && (0, n.h)("img", {
                        src: i.logo,
                        alt: "Logo",
                        className: "logo"
                    }), (0, n.h)("h1", null, u), (0, n.h)("div", {
                        className: "message"
                    }, l), d))
                }
            };
            var n = r(6400)
        },
        79786: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    url: t,
                    theme: r,
                    query: n,
                    cookies: l
                } = e;

                function d({
                    html: e,
                    title: t,
                    status: n
                }) {
                    var i;
                    return {
                        cookies: l,
                        status: n,
                        headers: [{
                            key: "Content-Type",
                            value: "text/html"
                        }],
                        body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${(0,u.default)()}</style><title>${t}</title></head><body class="__next-auth-theme-${null!==(i=null==r?void 0:r.colorScheme)&&void 0!==i?i:"auto"}"><div class="page">${(0,o.default)(e)}</div></body></html>`
                    }
                }
                return {
                    signin: t => d({
                        html: (0, i.default)({
                            csrfToken: e.csrfToken,
                            providers: e.providers,
                            callbackUrl: e.callbackUrl,
                            theme: r,
                            ...n,
                            ...t
                        }),
                        title: "Sign In"
                    }),
                    signout: n => d({
                        html: (0, a.default)({
                            csrfToken: e.csrfToken,
                            url: t,
                            theme: r,
                            ...n
                        }),
                        title: "Sign Out"
                    }),
                    verifyRequest: e => d({
                        html: (0, s.default)({
                            url: t,
                            theme: r,
                            ...e
                        }),
                        title: "Verify Request"
                    }),
                    error: e => d({ ...(0, c.default)({
                            url: t,
                            theme: r,
                            ...e
                        }),
                        title: "Error"
                    })
                }
            };
            var o = n(r(57649)),
                i = n(r(8209)),
                a = n(r(79422)),
                s = n(r(72189)),
                c = n(r(35131)),
                u = n(r(99394))
        },
        8209: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                let {
                    csrfToken: r,
                    providers: n,
                    callbackUrl: s,
                    theme: c,
                    email: u,
                    error: l
                } = e, d = n.filter(e => "oauth" === e.type || "email" === e.type || "credentials" === e.type && !!e.credentials);
                "undefined" != typeof document && c.buttonText && document.documentElement.style.setProperty("--button-text-color", c.buttonText), "undefined" != typeof document && c.brandColor && document.documentElement.style.setProperty("--brand-color", c.brandColor);
                let f = {
                        Signin: "Try signing in with a different account.",
                        OAuthSignin: "Try signing in with a different account.",
                        OAuthCallback: "Try signing in with a different account.",
                        OAuthCreateAccount: "Try signing in with a different account.",
                        EmailCreateAccount: "Try signing in with a different account.",
                        Callback: "Try signing in with a different account.",
                        OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
                        EmailSignin: "The e-mail could not be sent.",
                        CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
                        SessionRequired: "Please sign in to access this page.",
                        default: "Unable to sign in."
                    },
                    p = l && (null !== (t = f[l]) && void 0 !== t ? t : f.default),
                    h = "https://authjs.dev/img/providers";
                return (0, o.h)("div", {
                    className: "signin"
                }, c.brandColor && (0, o.h)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
        :root {
          --brand-color: ${c.brandColor}
        }
      `
                    }
                }), c.buttonText && (0, o.h)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
        :root {
          --button-text-color: ${c.buttonText}
        }
      `
                    }
                }), (0, o.h)("div", {
                    className: "card"
                }, c.logo && (0, o.h)("img", {
                    src: c.logo,
                    alt: "Logo",
                    className: "logo"
                }), p && (0, o.h)("div", {
                    className: "error"
                }, (0, o.h)("p", null, p)), d.map((e, t) => {
                    let n, c, l, f, p, y;
                    if ("oauth" === e.type) {
                        var g;
                        ({
                            bg: n = "",
                            text: c = "",
                            logo: l = "",
                            bgDark: p = n,
                            textDark: y = c,
                            logoDark: f = ""
                        } = null !== (g = e.style) && void 0 !== g ? g : {}), l = l.startsWith("/") ? `${h}${l}` : l, (f = f.startsWith("/") ? `${h}${f}` : f || l) || (f = l)
                    }
                    return (0, o.h)("div", {
                        key: e.id,
                        className: "provider"
                    }, "oauth" === e.type && (0, o.h)("form", {
                        action: e.signinUrl,
                        method: "POST"
                    }, (0, o.h)("input", {
                        type: "hidden",
                        name: "csrfToken",
                        value: r
                    }), s && (0, o.h)("input", {
                        type: "hidden",
                        name: "callbackUrl",
                        value: s
                    }), (0, o.h)("button", {
                        type: "submit",
                        className: "button",
                        style: {
                            "--provider-bg": n,
                            "--provider-dark-bg": p,
                            "--provider-color": c,
                            "--provider-dark-color": y,
                            "--provider-bg-hover": a(n, .8),
                            "--provider-dark-bg-hover": a(p, .8)
                        }
                    }, l && (0, o.h)("img", {
                        loading: "lazy",
                        height: 24,
                        width: 24,
                        id: "provider-logo",
                        src: `${l.startsWith("/")?h:""}${l}`
                    }), f && (0, o.h)("img", {
                        loading: "lazy",
                        height: 24,
                        width: 24,
                        id: "provider-logo-dark",
                        src: `${l.startsWith("/")?h:""}${f}`
                    }), (0, o.h)("span", null, "Sign in with ", e.name))), ("email" === e.type || "credentials" === e.type) && t > 0 && "email" !== d[t - 1].type && "credentials" !== d[t - 1].type && (0, o.h)("hr", null), "email" === e.type && (0, o.h)("form", {
                        action: e.signinUrl,
                        method: "POST"
                    }, (0, o.h)("input", {
                        type: "hidden",
                        name: "csrfToken",
                        value: r
                    }), (0, o.h)("label", {
                        className: "section-header",
                        htmlFor: `input-email-for-${e.id}-provider`
                    }, "Email"), (0, o.h)("input", {
                        id: `input-email-for-${e.id}-provider`,
                        autoFocus: !0,
                        type: "email",
                        name: "email",
                        value: u,
                        placeholder: "email@example.com",
                        required: !0
                    }), (0, o.h)("button", {
                        id: "submitButton",
                        type: "submit"
                    }, "Sign in with ", e.name)), "credentials" === e.type && (0, o.h)("form", {
                        action: e.callbackUrl,
                        method: "POST"
                    }, (0, o.h)("input", {
                        type: "hidden",
                        name: "csrfToken",
                        value: r
                    }), Object.keys(e.credentials).map(t => {
                        var r, n, a;
                        return (0, o.h)("div", {
                            key: `input-group-${e.id}`
                        }, (0, o.h)("label", {
                            className: "section-header",
                            htmlFor: `input-${t}-for-${e.id}-provider`
                        }, null !== (r = e.credentials[t].label) && void 0 !== r ? r : t), (0, o.h)("input", (0, i.default)({
                            name: t,
                            id: `input-${t}-for-${e.id}-provider`,
                            type: null !== (n = e.credentials[t].type) && void 0 !== n ? n : "text",
                            placeholder: null !== (a = e.credentials[t].placeholder) && void 0 !== a ? a : ""
                        }, e.credentials[t])))
                    }), (0, o.h)("button", {
                        type: "submit"
                    }, "Sign in with ", e.name)), ("email" === e.type || "credentials" === e.type) && t + 1 < d.length && (0, o.h)("hr", null))
                })))
            };
            var o = r(6400),
                i = n(r(10434));

            function a(e, t = 1) {
                if (!e) return;
                3 === (e = e.replace(/^#/, "")).length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                let r = parseInt(e, 16);
                return t = Math.min(Math.max(t, 0), 1), `rgba(${r>>16&255}, ${r>>8&255}, ${255&r}, ${t})`
            }
        },
        79422: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    url: t,
                    csrfToken: r,
                    theme: o
                } = e;
                return (0, n.h)("div", {
                    className: "signout"
                }, o.brandColor && (0, n.h)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
        :root {
          --brand-color: ${o.brandColor}
        }
      `
                    }
                }), o.buttonText && (0, n.h)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
        :root {
          --button-text-color: ${o.buttonText}
        }
      `
                    }
                }), (0, n.h)("div", {
                    className: "card"
                }, o.logo && (0, n.h)("img", {
                    src: o.logo,
                    alt: "Logo",
                    className: "logo"
                }), (0, n.h)("h1", null, "Signout"), (0, n.h)("p", null, "Are you sure you want to sign out?"), (0, n.h)("form", {
                    action: `${t}/signout`,
                    method: "POST"
                }, (0, n.h)("input", {
                    type: "hidden",
                    name: "csrfToken",
                    value: r
                }), (0, n.h)("button", {
                    id: "submitButton",
                    type: "submit"
                }, "Sign out"))))
            };
            var n = r(6400)
        },
        72189: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    url: t,
                    theme: r
                } = e;
                return (0, n.h)("div", {
                    className: "verify-request"
                }, r.brandColor && (0, n.h)("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
        :root {
          --brand-color: ${r.brandColor}
        }
      `
                    }
                }), (0, n.h)("div", {
                    className: "card"
                }, r.logo && (0, n.h)("img", {
                    src: r.logo,
                    alt: "Logo",
                    className: "logo"
                }), (0, n.h)("h1", null, "Check your email"), (0, n.h)("p", null, "A sign in link has been sent to your email address."), (0, n.h)("p", null, (0, n.h)("a", {
                    className: "site",
                    href: t.origin
                }, t.host))))
            };
            var n = r(6400)
        },
        44080: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = c;
            var o = n(r(97488)),
                i = n(r(98385)),
                a = r(15261),
                s = n(r(33442));
            async function c(e) {
                var t, r, n, c, u, l;
                let {
                    options: d,
                    query: f,
                    body: p,
                    method: h,
                    headers: y,
                    sessionStore: g
                } = e, {
                    provider: m,
                    adapter: b,
                    url: v,
                    callbackUrl: _,
                    pages: w,
                    jwt: S,
                    events: E,
                    callbacks: A,
                    session: {
                        strategy: k,
                        maxAge: O
                    },
                    logger: P
                } = d, x = [], T = "jwt" === k;
                if ("oauth" === m.type) try {
                    let {
                        profile: n,
                        account: a,
                        OAuthProfile: s,
                        cookies: c
                    } = await (0, o.default)({
                        query: f,
                        body: p,
                        method: h,
                        options: d,
                        cookies: e.cookies
                    });
                    c.length && x.push(...c);
                    try {
                        if (P.debug("OAUTH_CALLBACK_RESPONSE", {
                                profile: n,
                                account: a,
                                OAuthProfile: s
                            }), !n || !a || !s) return {
                            redirect: `${v}/signin`,
                            cookies: x
                        };
                        let e = n;
                        if (b) {
                            let {
                                getUserByAccount: t
                            } = b, r = await t({
                                providerAccountId: a.providerAccountId,
                                provider: m.id
                            });
                            r && (e = r)
                        }
                        try {
                            let t = await A.signIn({
                                user: e,
                                account: a,
                                profile: s
                            });
                            if (!t) return {
                                redirect: `${v}/error?error=AccessDenied`,
                                cookies: x
                            };
                            if ("string" == typeof t) return {
                                redirect: t,
                                cookies: x
                            }
                        } catch (e) {
                            return {
                                redirect: `${v}/error?error=${encodeURIComponent(e.message)}`,
                                cookies: x
                            }
                        }
                        let {
                            user: o,
                            session: c,
                            isNewUser: u
                        } = await (0, i.default)({
                            sessionToken: g.value,
                            profile: n,
                            account: a,
                            options: d
                        });
                        if (T) {
                            let e = {
                                    name: o.name,
                                    email: o.email,
                                    picture: o.image,
                                    sub: null === (r = o.id) || void 0 === r ? void 0 : r.toString()
                                },
                                t = await A.jwt({
                                    token: e,
                                    user: o,
                                    account: a,
                                    profile: s,
                                    isNewUser: u,
                                    trigger: u ? "signUp" : "signIn"
                                }),
                                n = await S.encode({ ...S,
                                    token: t
                                }),
                                i = new Date;
                            i.setTime(i.getTime() + 1e3 * O);
                            let c = g.chunk(n, {
                                expires: i
                            });
                            x.push(...c)
                        } else x.push({
                            name: d.cookies.sessionToken.name,
                            value: c.sessionToken,
                            options: { ...d.cookies.sessionToken.options,
                                expires: c.expires
                            }
                        });
                        if (await (null === (t = E.signIn) || void 0 === t ? void 0 : t.call(E, {
                                user: o,
                                account: a,
                                profile: n,
                                isNewUser: u
                            })), u && w.newUser) return {
                            redirect: `${w.newUser}${w.newUser.includes("?")?"&":"?"}callbackUrl=${encodeURIComponent(_)}`,
                            cookies: x
                        };
                        return {
                            redirect: _,
                            cookies: x
                        }
                    } catch (e) {
                        if ("AccountNotLinkedError" === e.name) return {
                            redirect: `${v}/error?error=OAuthAccountNotLinked`,
                            cookies: x
                        };
                        if ("CreateUserError" === e.name) return {
                            redirect: `${v}/error?error=OAuthCreateAccount`,
                            cookies: x
                        };
                        return P.error("OAUTH_CALLBACK_HANDLER_ERROR", e), {
                            redirect: `${v}/error?error=Callback`,
                            cookies: x
                        }
                    }
                } catch (e) {
                    if ("OAuthCallbackError" === e.name) return P.error("OAUTH_CALLBACK_ERROR", {
                        error: e,
                        providerId: m.id
                    }), {
                        redirect: `${v}/error?error=OAuthCallback`,
                        cookies: x
                    };
                    return P.error("OAUTH_CALLBACK_ERROR", e), {
                        redirect: `${v}/error?error=Callback`,
                        cookies: x
                    }
                } else if ("email" === m.type) try {
                    let e = null == f ? void 0 : f.token,
                        t = null == f ? void 0 : f.email;
                    if (!e) return {
                        redirect: `${v}/error?error=configuration`,
                        cookies: x
                    };
                    let r = await b.useVerificationToken({
                        identifier: t,
                        token: (0, a.hashToken)(e, d)
                    });
                    if (!r || r.expires.valueOf() < Date.now() || t && r.identifier !== t) return {
                        redirect: `${v}/error?error=Verification`,
                        cookies: x
                    };
                    let o = await (0, s.default)({
                            email: r.identifier,
                            adapter: b
                        }),
                        u = {
                            providerAccountId: o.email,
                            type: "email",
                            provider: m.id
                        };
                    try {
                        let e = await A.signIn({
                            user: o,
                            account: u
                        });
                        if (!e) return {
                            redirect: `${v}/error?error=AccessDenied`,
                            cookies: x
                        };
                        if ("string" == typeof e) return {
                            redirect: e,
                            cookies: x
                        }
                    } catch (e) {
                        return {
                            redirect: `${v}/error?error=${encodeURIComponent(e.message)}`,
                            cookies: x
                        }
                    }
                    let {
                        user: l,
                        session: p,
                        isNewUser: h
                    } = await (0, i.default)({
                        sessionToken: g.value,
                        profile: o,
                        account: u,
                        options: d
                    });
                    if (T) {
                        let e = {
                                name: l.name,
                                email: l.email,
                                picture: l.image,
                                sub: null === (c = l.id) || void 0 === c ? void 0 : c.toString()
                            },
                            t = await A.jwt({
                                token: e,
                                user: l,
                                account: u,
                                isNewUser: h,
                                trigger: h ? "signUp" : "signIn"
                            }),
                            r = await S.encode({ ...S,
                                token: t
                            }),
                            n = new Date;
                        n.setTime(n.getTime() + 1e3 * O);
                        let o = g.chunk(r, {
                            expires: n
                        });
                        x.push(...o)
                    } else x.push({
                        name: d.cookies.sessionToken.name,
                        value: p.sessionToken,
                        options: { ...d.cookies.sessionToken.options,
                            expires: p.expires
                        }
                    });
                    if (await (null === (n = E.signIn) || void 0 === n ? void 0 : n.call(E, {
                            user: l,
                            account: u,
                            isNewUser: h
                        })), h && w.newUser) return {
                        redirect: `${w.newUser}${w.newUser.includes("?")?"&":"?"}callbackUrl=${encodeURIComponent(_)}`,
                        cookies: x
                    };
                    return {
                        redirect: _,
                        cookies: x
                    }
                } catch (e) {
                    if ("CreateUserError" === e.name) return {
                        redirect: `${v}/error?error=EmailCreateAccount`,
                        cookies: x
                    };
                    return P.error("CALLBACK_EMAIL_ERROR", e), {
                        redirect: `${v}/error?error=Callback`,
                        cookies: x
                    }
                } else if ("credentials" === m.type && "POST" === h) {
                    let e;
                    try {
                        if (!(e = await m.authorize(p, {
                                query: f,
                                body: p,
                                headers: y,
                                method: h
                            }))) return {
                            status: 401,
                            redirect: `${v}/error?${new URLSearchParams({error:"CredentialsSignin",provider:m.id})}`,
                            cookies: x
                        }
                    } catch (e) {
                        return {
                            status: 401,
                            redirect: `${v}/error?error=${encodeURIComponent(e.message)}`,
                            cookies: x
                        }
                    }
                    let t = {
                        providerAccountId: e.id,
                        type: "credentials",
                        provider: m.id
                    };
                    try {
                        let r = await A.signIn({
                            user: e,
                            account: t,
                            credentials: p
                        });
                        if (!r) return {
                            status: 403,
                            redirect: `${v}/error?error=AccessDenied`,
                            cookies: x
                        };
                        if ("string" == typeof r) return {
                            redirect: r,
                            cookies: x
                        }
                    } catch (e) {
                        return {
                            redirect: `${v}/error?error=${encodeURIComponent(e.message)}`,
                            cookies: x
                        }
                    }
                    let r = {
                            name: e.name,
                            email: e.email,
                            picture: e.image,
                            sub: null === (u = e.id) || void 0 === u ? void 0 : u.toString()
                        },
                        n = await A.jwt({
                            token: r,
                            user: e,
                            account: t,
                            isNewUser: !1,
                            trigger: "signIn"
                        }),
                        o = await S.encode({ ...S,
                            token: n
                        }),
                        i = new Date;
                    i.setTime(i.getTime() + 1e3 * O);
                    let a = g.chunk(o, {
                        expires: i
                    });
                    return x.push(...a), await (null === (l = E.signIn) || void 0 === l ? void 0 : l.call(E, {
                        user: e,
                        account: t
                    })), {
                        redirect: _,
                        cookies: x
                    }
                }
                return {
                    status: 500,
                    body: `Error: Callback for provider type ${m.type} not supported`,
                    cookies: x
                }
            }
        },
        43370: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "callback", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(t, "providers", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "session", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "signin", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "signout", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            });
            var o = n(r(44080)),
                i = n(r(20907)),
                a = n(r(4654)),
                s = n(r(65814)),
                c = n(r(34405))
        },
        34405: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return {
                    headers: [{
                        key: "Content-Type",
                        value: "application/json"
                    }],
                    body: e.reduce((e, {
                        id: t,
                        name: r,
                        type: n,
                        signinUrl: o,
                        callbackUrl: i
                    }) => (e[t] = {
                        id: t,
                        name: r,
                        type: n,
                        signinUrl: o,
                        callbackUrl: i
                    }, e), {})
                }
            }
        },
        65814: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = o;
            var n = r(15261);
            async function o(e) {
                var t, r, o, i, a, s;
                let {
                    options: c,
                    sessionStore: u,
                    newSession: l,
                    isUpdate: d
                } = e, {
                    adapter: f,
                    jwt: p,
                    events: h,
                    callbacks: y,
                    logger: g,
                    session: {
                        strategy: m,
                        maxAge: b
                    }
                } = c, v = {
                    body: {},
                    headers: [{
                        key: "Content-Type",
                        value: "application/json"
                    }],
                    cookies: []
                }, _ = u.value;
                if (!_) return v;
                if ("jwt" === m) try {
                    let e = await p.decode({ ...p,
                        token: _
                    });
                    if (!e) throw Error("JWT invalid");
                    let o = await y.jwt({
                            token: e,
                            ...d && {
                                trigger: "update"
                            },
                            session: l
                        }),
                        i = (0, n.fromDate)(b),
                        a = await y.session({
                            session: {
                                user: {
                                    name: null == e ? void 0 : e.name,
                                    email: null == e ? void 0 : e.email,
                                    image: null == e ? void 0 : e.picture
                                },
                                expires: i.toISOString()
                            },
                            token: o
                        });
                    v.body = a;
                    let s = await p.encode({ ...p,
                            token: o,
                            maxAge: c.session.maxAge
                        }),
                        f = u.chunk(s, {
                            expires: i
                        });
                    null === (t = v.cookies) || void 0 === t || t.push(...f), await (null === (r = h.session) || void 0 === r ? void 0 : r.call(h, {
                        session: a,
                        token: o
                    }))
                } catch (e) {
                    g.error("JWT_SESSION_ERROR", e), null === (o = v.cookies) || void 0 === o || o.push(...u.clean())
                } else try {
                    let {
                        getSessionAndUser: e,
                        deleteSession: t,
                        updateSession: r
                    } = f, o = await e(_);
                    if (o && o.session.expires.valueOf() < Date.now() && (await t(_), o = null), o) {
                        let {
                            user: e,
                            session: t
                        } = o, s = c.session.updateAge, u = t.expires.valueOf() - 1e3 * b + 1e3 * s, f = (0, n.fromDate)(b);
                        u <= Date.now() && await r({
                            sessionToken: _,
                            expires: f
                        });
                        let p = await y.session({
                            session: {
                                user: {
                                    name: e.name,
                                    email: e.email,
                                    image: e.image
                                },
                                expires: t.expires.toISOString()
                            },
                            user: e,
                            newSession: l,
                            ...d ? {
                                trigger: "update"
                            } : {}
                        });
                        v.body = p, null === (i = v.cookies) || void 0 === i || i.push({
                            name: c.cookies.sessionToken.name,
                            value: _,
                            options: { ...c.cookies.sessionToken.options,
                                expires: f
                            }
                        }), await (null === (a = h.session) || void 0 === a ? void 0 : a.call(h, {
                            session: p
                        }))
                    } else _ && (null === (s = v.cookies) || void 0 === s || s.push(...u.clean()))
                } catch (e) {
                    g.error("SESSION_ERROR", e)
                }
                return v
            }
        },
        20907: function(e, t, r) {
            "use strict";
            var n = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var o = n(r(25680)),
                i = n(r(49521)),
                a = n(r(33442));
            async function s(e) {
                let {
                    options: t,
                    query: r,
                    body: n
                } = e, {
                    url: s,
                    callbacks: c,
                    logger: u,
                    provider: l
                } = t;
                if (!l.type) return {
                    status: 500,
                    text: `Error: Type not specified for ${l.name}`
                };
                if ("oauth" === l.type) try {
                    return await (0, o.default)({
                        options: t,
                        query: r
                    })
                } catch (e) {
                    return u.error("SIGNIN_OAUTH_ERROR", {
                        error: e,
                        providerId: l.id
                    }), {
                        redirect: `${s}/error?error=OAuthSignin`
                    }
                } else if ("email" === l.type) {
                    var d;
                    let e = null == n ? void 0 : n.email;
                    if (!e) return {
                        redirect: `${s}/error?error=EmailSignin`
                    };
                    let r = null !== (d = l.normalizeIdentifier) && void 0 !== d ? d : e => {
                        let [t, r] = e.toLowerCase().trim().split("@");
                        return r = r.split(",")[0], `${t}@${r}`
                    };
                    try {
                        e = r(null == n ? void 0 : n.email)
                    } catch (e) {
                        return u.error("SIGNIN_EMAIL_ERROR", {
                            error: e,
                            providerId: l.id
                        }), {
                            redirect: `${s}/error?error=EmailSignin`
                        }
                    }
                    let o = await (0, a.default)({
                            email: e,
                            adapter: t.adapter
                        }),
                        f = {
                            providerAccountId: e,
                            userId: e,
                            type: "email",
                            provider: l.id
                        };
                    try {
                        let e = await c.signIn({
                            user: o,
                            account: f,
                            email: {
                                verificationRequest: !0
                            }
                        });
                        if (!e) return {
                            redirect: `${s}/error?error=AccessDenied`
                        };
                        if ("string" == typeof e) return {
                            redirect: e
                        }
                    } catch (e) {
                        return {
                            redirect: `${s}/error?${new URLSearchParams({error:e})}`
                        }
                    }
                    try {
                        return {
                            redirect: await (0, i.default)(e, t)
                        }
                    } catch (e) {
                        return u.error("SIGNIN_EMAIL_ERROR", {
                            error: e,
                            providerId: l.id
                        }), {
                            redirect: `${s}/error?error=EmailSignin`
                        }
                    }
                }
                return {
                    redirect: `${s}/signin`
                }
            }
        },
        4654: function(e, t) {
            "use strict";
            async function r(e) {
                var t, r;
                let {
                    options: n,
                    sessionStore: o
                } = e, {
                    adapter: i,
                    events: a,
                    jwt: s,
                    callbackUrl: c,
                    logger: u,
                    session: l
                } = n, d = null == o ? void 0 : o.value;
                if (!d) return {
                    redirect: c
                };
                if ("jwt" === l.strategy) try {
                    let e = await s.decode({ ...s,
                        token: d
                    });
                    await (null === (t = a.signOut) || void 0 === t ? void 0 : t.call(a, {
                        token: e
                    }))
                } catch (e) {
                    u.error("SIGNOUT_ERROR", e)
                } else try {
                    let e = await i.deleteSession(d);
                    await (null === (r = a.signOut) || void 0 === r ? void 0 : r.call(a, {
                        session: e
                    }))
                } catch (e) {
                    u.error("SIGNOUT_ERROR", e)
                }
                return {
                    redirect: c,
                    cookies: o.clean()
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r
        },
        86049: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        99394: function(e) {
            e.exports = function() {
                return ':root{--border-width:1px;--border-radius:0.5rem;--color-error:#c94b4b;--color-info:#157efb;--color-info-hover:#0f6ddb;--color-info-text:#fff}.__next-auth-theme-auto,.__next-auth-theme-light{--color-background:#ececec;--color-background-hover:hsla(0,0%,93%,.8);--color-background-card:#fff;--color-text:#000;--color-primary:#444;--color-control-border:#bbb;--color-button-active-background:#f9f9f9;--color-button-active-border:#aaa;--color-separator:#ccc}.__next-auth-theme-dark{--color-background:#161b22;--color-background-hover:rgba(22,27,34,.8);--color-background-card:#0d1117;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-separator:#444}@media (prefers-color-scheme:dark){.__next-auth-theme-auto{--color-background:#161b22;--color-background-hover:rgba(22,27,34,.8);--color-background-card:#0d1117;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-separator:#444}a.button,button{background-color:var(--provider-dark-bg,var(--color-background));color:var(--provider-dark-color,var(--color-primary))}a.button:hover,button:hover{background-color:var(--provider-dark-bg-hover,var(--color-background-hover))!important}#provider-logo{display:none!important}#provider-logo-dark{display:block!important;width:25px}}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit;margin:0;padding:0}body{background-color:var(--color-background);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;margin:0;padding:0}h1{font-weight:400}h1,p{color:var(--color-text);margin-bottom:1.5rem;padding:0 1rem}form{margin:0;padding:0}label{font-weight:500;margin-bottom:.25rem;text-align:left}input[type],label{color:var(--color-text);display:block}input[type]{background:var(--color-background-card);border:var(--border-width) solid var(--color-control-border);border-radius:var(--border-radius);box-sizing:border-box;font-size:1rem;padding:.5rem 1rem;width:100%}input[type]:focus{box-shadow:none}p{font-size:1.1rem;line-height:2rem}a.button{line-height:1rem;text-decoration:none}a.button:link,a.button:visited{background-color:var(--color-background);color:var(--color-primary)}button span{flex-grow:1}a.button,button{align-items:center;background-color:var(--provider-bg);border-color:rgba(0,0,0,.1);border-radius:var(--border-radius);color:var(--provider-color,var(--color-primary));display:flex;font-size:1.1rem;font-weight:500;justify-content:center;min-height:62px;padding:.75rem 1rem;position:relative;transition:all .1s ease-in-out}a.button:hover,button:hover{background-color:var(--provider-bg-hover,var(--color-background-hover));cursor:pointer}a.button:active,button:active{cursor:pointer}a.button #provider-logo,button #provider-logo{display:block;width:25px}a.button #provider-logo-dark,button #provider-logo-dark{display:none}#submitButton{background-color:var(--brand-color,var(--color-info));color:var(--button-text-color,var(--color-info-text));width:100%}#submitButton:hover{background-color:var(--button-hover-bg,var(--color-info-hover))!important}a.site{color:var(--color-primary);font-size:1rem;line-height:2rem;text-decoration:none}a.site:hover{text-decoration:underline}.page{box-sizing:border-box;display:grid;height:100%;margin:0;padding:0;place-items:center;position:absolute;width:100%}.page>div{text-align:center}.error a.button{margin-top:.5rem;padding-left:2rem;padding-right:2rem}.error .message{margin-bottom:1.5rem}.signin input[type=text]{display:block;margin-left:auto;margin-right:auto}.signin hr{border:0;border-top:1px solid var(--color-separator);display:block;margin:2rem auto 1rem;overflow:visible}.signin hr:before{background:var(--color-background-card);color:#888;content:"or";padding:0 .4rem;position:relative;top:-.7rem}.signin .error{background:#f5f5f5;background:var(--color-error);border-radius:.3rem;font-weight:500}.signin .error p{color:var(--color-info-text);font-size:.9rem;line-height:1.2rem;padding:.5rem 1rem;text-align:left}.signin form,.signin>div{display:block}.signin form input[type],.signin>div input[type]{margin-bottom:.5rem}.signin form button,.signin>div button{width:100%}.signin .provider+.provider{margin-top:1rem}.logo{display:inline-block;margin:1.25rem 0;max-height:70px;max-width:150px}.card{background-color:var(--color-background-card);border-radius:2rem;padding:1.25rem 2rem}.card .header{color:var(--color-primary)}.section-header{color:var(--color-text)}@media screen and (min-width:450px){.card{margin:2rem 0;width:368px}}@media screen and (max-width:450px){.card{margin:1rem 0;width:343px}}'
            }
        },
        62842: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {};
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            });
            var o = r(86049);
            Object.keys(o).forEach(function(e) {
                !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(n, e)) && (e in t && t[e] === o[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return o[e]
                    }
                }))
            });
            var i = function(e, t) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var r = a(void 0);
                if (r && r.has(e)) return r.get(e);
                var n = {
                        __proto__: null
                    },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && ({}).hasOwnProperty.call(e, i)) {
                        var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                    }
                return n.default = e, r && r.set(e, n), n
            }(r(21379));

            function a(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (a = function(e) {
                    return e ? r : t
                })(e)
            }
            Object.keys(i).forEach(function(e) {
                !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(n, e)) && (e in t && t[e] === i[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return i[e]
                    }
                }))
            })
        },
        82260: function(e, t, r) {
            "use strict";
            var n = r(83454),
                o = r(64836);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = {
                encode: !0,
                decode: !0,
                getToken: !0
            };
            t.decode = p, t.encode = f, t.getToken = h;
            var a = r(45595),
                s = o(r(99718)),
                c = r(29264),
                u = r(46140),
                l = r(76444);
            Object.keys(l).forEach(function(e) {
                !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(i, e)) && (e in t && t[e] === l[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return l[e]
                    }
                }))
            });
            let d = () => Date.now() / 1e3 | 0;
            async function f(e) {
                let {
                    token: t = {},
                    secret: r,
                    maxAge: n = 2592e3,
                    salt: o = ""
                } = e, i = await y(r, o);
                return await new a.EncryptJWT(t).setProtectedHeader({
                    alg: "dir",
                    enc: "A256GCM"
                }).setIssuedAt().setExpirationTime(d() + n).setJti((0, c.v4)()).encrypt(i)
            }
            async function p(e) {
                let {
                    token: t,
                    secret: r,
                    salt: n = ""
                } = e;
                if (!t) return null;
                let o = await y(r, n),
                    {
                        payload: i
                    } = await (0, a.jwtDecrypt)(t, o, {
                        clockTolerance: 15
                    });
                return i
            }
            async function h(e) {
                var t, r, o, i;
                let {
                    req: a,
                    secureCookie: s = null !== (t = null === (r = n.env.NEXTAUTH_URL) || void 0 === r ? void 0 : r.startsWith("https://")) && void 0 !== t ? t : !!n.env.VERCEL,
                    cookieName: c = s ? "__Secure-next-auth.session-token" : "next-auth.session-token",
                    raw: l,
                    decode: d = p,
                    logger: f = console,
                    secret: h = null !== (o = n.env.NEXTAUTH_SECRET) && void 0 !== o ? o : n.env.AUTH_SECRET
                } = e;
                if (!a) throw Error("Must pass `req` to JWT getToken()");
                let y = new u.SessionStore({
                        name: c,
                        options: {
                            secure: s
                        }
                    }, {
                        cookies: a.cookies,
                        headers: a.headers
                    }, f).value,
                    g = a.headers instanceof Headers ? a.headers.get("authorization") : null === (i = a.headers) || void 0 === i ? void 0 : i.authorization;
                if (y || (null == g ? void 0 : g.split(" ")[0]) !== "Bearer" || (y = decodeURIComponent(g.split(" ")[1])), !y) return null;
                if (l) return y;
                try {
                    return await d({
                        token: y,
                        secret: h
                    })
                } catch (e) {
                    return null
                }
            }
            async function y(e, t) {
                return await (0, s.default)("sha256", e, t, `NextAuth.js Generated Encryption Key${t?` (${t})`:""}`, 32)
            }
        },
        76444: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        21379: function(e, t, r) {
            "use strict";
            var n = r(83454);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, t.getServerSession = c, t.unstable_getServerSession = u;
            var o = r(35149),
                i = r(23017);
            async function a(e, t, r) {
                var a, s, c, u, l, d, f, p, h;
                let {
                    nextauth: y,
                    ...g
                } = e.query;
                null !== (a = r.secret) && void 0 !== a || (r.secret = null !== (s = null !== (c = null === (u = r.jwt) || void 0 === u ? void 0 : u.secret) && void 0 !== c ? c : n.env.NEXTAUTH_SECRET) && void 0 !== s ? s : n.env.AUTH_SECRET);
                let m = await (0, o.AuthHandler)({
                    req: {
                        body: e.body,
                        query: g,
                        cookies: e.cookies,
                        headers: e.headers,
                        method: e.method,
                        action: null == y ? void 0 : y[0],
                        providerId: null == y ? void 0 : y[1],
                        error: null !== (l = e.query.error) && void 0 !== l ? l : null == y ? void 0 : y[1]
                    },
                    options: r
                });
                if (t.status(null !== (d = m.status) && void 0 !== d ? d : 200), null === (f = m.cookies) || void 0 === f || f.forEach(e => (0, i.setCookie)(t, e)), null === (p = m.headers) || void 0 === p || p.forEach(e => t.setHeader(e.key, e.value)), m.redirect) {
                    if ((null === (h = e.body) || void 0 === h ? void 0 : h.json) !== "true") {
                        t.status(302).setHeader("Location", m.redirect), t.end();
                        return
                    }
                    return t.json({
                        url: m.redirect
                    })
                }
                return t.send(m.body)
            }
            async function s(e, t, a) {
                var s, c, u, l;
                null !== (s = a.secret) && void 0 !== s || (a.secret = null !== (c = n.env.NEXTAUTH_SECRET) && void 0 !== c ? c : n.env.AUTH_SECRET);
                let {
                    headers: d,
                    cookies: f
                } = r(14970), p = null === (u = await t.params) || void 0 === u ? void 0 : u.nextauth, h = Object.fromEntries(e.nextUrl.searchParams), y = await (0, i.getBody)(e), g = await (0, o.AuthHandler)({
                    req: {
                        body: y,
                        query: h,
                        cookies: Object.fromEntries((await f()).getAll().map(e => [e.name, e.value])),
                        headers: Object.fromEntries(await d()),
                        method: e.method,
                        action: null == p ? void 0 : p[0],
                        providerId: null == p ? void 0 : p[1],
                        error: null !== (l = h.error) && void 0 !== l ? l : null == p ? void 0 : p[1]
                    },
                    options: a
                }), m = (0, i.toResponse)(g), b = m.headers.get("Location");
                return (null == y ? void 0 : y.json) === "true" && b ? (m.headers.delete("Location"), m.headers.set("Content-Type", "application/json"), new Response(JSON.stringify({
                    url: b
                }), {
                    status: g.status,
                    headers: m.headers
                })) : m
            }
            async function c(...e) {
                var t, a, s;
                let u, l, d;
                let f = 0 === e.length || 1 === e.length;
                if (f) {
                    d = Object.assign({}, e[0], {
                        providers: []
                    });
                    let {
                        headers: t,
                        cookies: n
                    } = r(14970);
                    u = {
                        headers: Object.fromEntries(await t()),
                        cookies: Object.fromEntries((await n()).getAll().map(e => [e.name, e.value]))
                    }, l = {
                        getHeader() {},
                        setCookie() {},
                        setHeader() {}
                    }
                } else u = e[0], l = e[1], d = Object.assign({}, e[2], {
                    providers: []
                });
                null !== (a = (t = d).secret) && void 0 !== a || (t.secret = null !== (s = n.env.NEXTAUTH_SECRET) && void 0 !== s ? s : n.env.AUTH_SECRET);
                let {
                    body: p,
                    cookies: h,
                    status: y = 200
                } = await (0, o.AuthHandler)({
                    options: d,
                    req: {
                        action: "session",
                        method: "GET",
                        cookies: u.cookies,
                        headers: u.headers
                    }
                });
                if (null == h || h.forEach(e => (0, i.setCookie)(l, e)), p && "string" != typeof p && Object.keys(p).length) {
                    if (200 === y) return f && delete p.expires, p;
                    throw Error(p.message)
                }
                return null
            }
            async function u(...e) {
                return await c(...e)
            }
            t.default = function(...e) {
                var t;
                return 1 === e.length ? async (t, r) => null != r && r.params ? await s(t, r, e[0]) : await a(t, r, e[0]) : null !== (t = e[1]) && void 0 !== t && t.params ? s(...e) : a(...e)
            }
        },
        23017: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getBody = o, t.setCookie = function(e, t) {
                var r;
                let o = null !== (r = e.getHeader("Set-Cookie")) && void 0 !== r ? r : [];
                Array.isArray(o) || (o = [o]);
                let {
                    name: i,
                    value: a,
                    options: s
                } = t, c = (0, n.serialize)(i, a, s);
                o.push(c), e.setHeader("Set-Cookie", o)
            }, t.toResponse = function(e) {
                var t, r, o;
                let i = new Headers(null === (t = e.headers) || void 0 === t ? void 0 : t.reduce((e, {
                    key: t,
                    value: r
                }) => (e[t] = r, e), {}));
                null === (r = e.cookies) || void 0 === r || r.forEach(e => {
                    let {
                        name: t,
                        value: r,
                        options: o
                    } = e, a = (0, n.serialize)(t, r, o);
                    i.has("Set-Cookie") ? i.append("Set-Cookie", a) : i.set("Set-Cookie", a)
                });
                let a = e.body;
                "application/json" === i.get("content-type") ? a = JSON.stringify(e.body) : "application/x-www-form-urlencoded" === i.get("content-type") && (a = new URLSearchParams(e.body).toString());
                let s = new Response(a, {
                    headers: i,
                    status: e.redirect ? 302 : null !== (o = e.status) && void 0 !== o ? o : 200
                });
                return e.redirect && s.headers.set("Location", e.redirect), s
            };
            var n = r(76489);
            async function o(e) {
                if (!("body" in e) || !e.body || "POST" !== e.method) return;
                let t = e.headers.get("content-type");
                return null != t && t.includes("application/json") ? await e.json() : null != t && t.includes("application/x-www-form-urlencoded") ? Object.fromEntries(new URLSearchParams(await e.text())) : void 0
            }
        },
        29264: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                NIL: function() {
                    return T
                },
                parse: function() {
                    return g
                },
                stringify: function() {
                    return f
                },
                v1: function() {
                    return y
                },
                v3: function() {
                    return k
                },
                v4: function() {
                    return O
                },
                v5: function() {
                    return x
                },
                validate: function() {
                    return u
                },
                version: function() {
                    return j
                }
            });
            var n, o, i, a = new Uint8Array(16);

            function s() {
                if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(a)
            }
            for (var c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, u = function(e) {
                    return "string" == typeof e && c.test(e)
                }, l = [], d = 0; d < 256; ++d) l.push((d + 256).toString(16).substr(1));
            var f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = (l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]).toLowerCase();
                    if (!u(r)) throw TypeError("Stringified UUID is invalid");
                    return r
                },
                p = 0,
                h = 0,
                y = function(e, t, r) {
                    var n = t && r || 0,
                        a = t || Array(16),
                        c = (e = e || {}).node || o,
                        u = void 0 !== e.clockseq ? e.clockseq : i;
                    if (null == c || null == u) {
                        var l = e.random || (e.rng || s)();
                        null == c && (c = o = [1 | l[0], l[1], l[2], l[3], l[4], l[5]]), null == u && (u = i = (l[6] << 8 | l[7]) & 16383)
                    }
                    var d = void 0 !== e.msecs ? e.msecs : Date.now(),
                        y = void 0 !== e.nsecs ? e.nsecs : h + 1,
                        g = d - p + (y - h) / 1e4;
                    if (g < 0 && void 0 === e.clockseq && (u = u + 1 & 16383), (g < 0 || d > p) && void 0 === e.nsecs && (y = 0), y >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    p = d, h = y, i = u;
                    var m = ((268435455 & (d += 122192928e5)) * 1e4 + y) % 4294967296;
                    a[n++] = m >>> 24 & 255, a[n++] = m >>> 16 & 255, a[n++] = m >>> 8 & 255, a[n++] = 255 & m;
                    var b = d / 4294967296 * 1e4 & 268435455;
                    a[n++] = b >>> 8 & 255, a[n++] = 255 & b, a[n++] = b >>> 24 & 15 | 16, a[n++] = b >>> 16 & 255, a[n++] = u >>> 8 | 128, a[n++] = 255 & u;
                    for (var v = 0; v < 6; ++v) a[n + v] = c[v];
                    return t || f(a)
                },
                g = function(e) {
                    if (!u(e)) throw TypeError("Invalid UUID");
                    var t, r = new Uint8Array(16);
                    return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = 255 & t, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = 255 & t, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = 255 & t, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = 255 & t, r
                };

            function m(e, t, r) {
                function n(e, n, o, i) {
                    if ("string" == typeof e && (e = function(e) {
                            e = unescape(encodeURIComponent(e));
                            for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
                            return t
                        }(e)), "string" == typeof n && (n = g(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var a = new Uint8Array(16 + e.length);
                    if (a.set(n), a.set(e, n.length), (a = r(a))[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, o) {
                        i = i || 0;
                        for (var s = 0; s < 16; ++s) o[i + s] = a[s];
                        return o
                    }
                    return f(a)
                }
                try {
                    n.name = e
                } catch (e) {}
                return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n
            }

            function b(e) {
                return (e + 64 >>> 9 << 4) + 14 + 1
            }

            function v(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function _(e, t, r, n, o, i) {
                var a;
                return v((a = v(v(t, e), v(n, i))) << o | a >>> 32 - o, r)
            }

            function w(e, t, r, n, o, i, a) {
                return _(t & r | ~t & n, e, t, o, i, a)
            }

            function S(e, t, r, n, o, i, a) {
                return _(t & n | r & ~n, e, t, o, i, a)
            }

            function E(e, t, r, n, o, i, a) {
                return _(t ^ r ^ n, e, t, o, i, a)
            }

            function A(e, t, r, n, o, i, a) {
                return _(r ^ (t | ~n), e, t, o, i, a)
            }
            var k = m("v3", 48, function(e) {
                    if ("string" == typeof e) {
                        var t = unescape(encodeURIComponent(e));
                        e = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r)
                    }
                    return function(e) {
                        for (var t = [], r = 32 * e.length, n = "0123456789abcdef", o = 0; o < r; o += 8) {
                            var i = e[o >> 5] >>> o % 32 & 255,
                                a = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(15 & i), 16);
                            t.push(a)
                        }
                        return t
                    }(function(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[b(t) - 1] = t;
                        for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
                            var s = r,
                                c = n,
                                u = o,
                                l = i;
                            r = w(r, n, o, i, e[a], 7, -680876936), i = w(i, r, n, o, e[a + 1], 12, -389564586), o = w(o, i, r, n, e[a + 2], 17, 606105819), n = w(n, o, i, r, e[a + 3], 22, -1044525330), r = w(r, n, o, i, e[a + 4], 7, -176418897), i = w(i, r, n, o, e[a + 5], 12, 1200080426), o = w(o, i, r, n, e[a + 6], 17, -1473231341), n = w(n, o, i, r, e[a + 7], 22, -45705983), r = w(r, n, o, i, e[a + 8], 7, 1770035416), i = w(i, r, n, o, e[a + 9], 12, -1958414417), o = w(o, i, r, n, e[a + 10], 17, -42063), n = w(n, o, i, r, e[a + 11], 22, -1990404162), r = w(r, n, o, i, e[a + 12], 7, 1804603682), i = w(i, r, n, o, e[a + 13], 12, -40341101), o = w(o, i, r, n, e[a + 14], 17, -1502002290), n = w(n, o, i, r, e[a + 15], 22, 1236535329), r = S(r, n, o, i, e[a + 1], 5, -165796510), i = S(i, r, n, o, e[a + 6], 9, -1069501632), o = S(o, i, r, n, e[a + 11], 14, 643717713), n = S(n, o, i, r, e[a], 20, -373897302), r = S(r, n, o, i, e[a + 5], 5, -701558691), i = S(i, r, n, o, e[a + 10], 9, 38016083), o = S(o, i, r, n, e[a + 15], 14, -660478335), n = S(n, o, i, r, e[a + 4], 20, -405537848), r = S(r, n, o, i, e[a + 9], 5, 568446438), i = S(i, r, n, o, e[a + 14], 9, -1019803690), o = S(o, i, r, n, e[a + 3], 14, -187363961), n = S(n, o, i, r, e[a + 8], 20, 1163531501), r = S(r, n, o, i, e[a + 13], 5, -1444681467), i = S(i, r, n, o, e[a + 2], 9, -51403784), o = S(o, i, r, n, e[a + 7], 14, 1735328473), n = S(n, o, i, r, e[a + 12], 20, -1926607734), r = E(r, n, o, i, e[a + 5], 4, -378558), i = E(i, r, n, o, e[a + 8], 11, -2022574463), o = E(o, i, r, n, e[a + 11], 16, 1839030562), n = E(n, o, i, r, e[a + 14], 23, -35309556), r = E(r, n, o, i, e[a + 1], 4, -1530992060), i = E(i, r, n, o, e[a + 4], 11, 1272893353), o = E(o, i, r, n, e[a + 7], 16, -155497632), n = E(n, o, i, r, e[a + 10], 23, -1094730640), r = E(r, n, o, i, e[a + 13], 4, 681279174), i = E(i, r, n, o, e[a], 11, -358537222), o = E(o, i, r, n, e[a + 3], 16, -722521979), n = E(n, o, i, r, e[a + 6], 23, 76029189), r = E(r, n, o, i, e[a + 9], 4, -640364487), i = E(i, r, n, o, e[a + 12], 11, -421815835), o = E(o, i, r, n, e[a + 15], 16, 530742520), n = E(n, o, i, r, e[a + 2], 23, -995338651), r = A(r, n, o, i, e[a], 6, -198630844), i = A(i, r, n, o, e[a + 7], 10, 1126891415), o = A(o, i, r, n, e[a + 14], 15, -1416354905), n = A(n, o, i, r, e[a + 5], 21, -57434055), r = A(r, n, o, i, e[a + 12], 6, 1700485571), i = A(i, r, n, o, e[a + 3], 10, -1894986606), o = A(o, i, r, n, e[a + 10], 15, -1051523), n = A(n, o, i, r, e[a + 1], 21, -2054922799), r = A(r, n, o, i, e[a + 8], 6, 1873313359), i = A(i, r, n, o, e[a + 15], 10, -30611744), o = A(o, i, r, n, e[a + 6], 15, -1560198380), n = A(n, o, i, r, e[a + 13], 21, 1309151649), r = A(r, n, o, i, e[a + 4], 6, -145523070), i = A(i, r, n, o, e[a + 11], 10, -1120210379), o = A(o, i, r, n, e[a + 2], 15, 718787259), n = A(n, o, i, r, e[a + 9], 21, -343485551), r = v(r, s), n = v(n, c), o = v(o, u), i = v(i, l)
                        }
                        return [r, n, o, i]
                    }(function(e) {
                        if (0 === e.length) return [];
                        for (var t = 8 * e.length, r = new Uint32Array(b(t)), n = 0; n < t; n += 8) r[n >> 5] |= (255 & e[n / 8]) << n % 32;
                        return r
                    }(e), 8 * e.length))
                }),
                O = function(e, t, r) {
                    var n = (e = e || {}).random || (e.rng || s)();
                    if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                        r = r || 0;
                        for (var o = 0; o < 16; ++o) t[r + o] = n[o];
                        return t
                    }
                    return f(n)
                };

            function P(e, t) {
                return e << t | e >>> 32 - t
            }
            var x = m("v5", 80, function(e) {
                    var t = [1518500249, 1859775393, 2400959708, 3395469782],
                        r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" == typeof e) {
                        var n = unescape(encodeURIComponent(e));
                        e = [];
                        for (var o = 0; o < n.length; ++o) e.push(n.charCodeAt(o))
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    for (var i = Math.ceil((e.length / 4 + 2) / 16), a = Array(i), s = 0; s < i; ++s) {
                        for (var c = new Uint32Array(16), u = 0; u < 16; ++u) c[u] = e[64 * s + 4 * u] << 24 | e[64 * s + 4 * u + 1] << 16 | e[64 * s + 4 * u + 2] << 8 | e[64 * s + 4 * u + 3];
                        a[s] = c
                    }
                    a[i - 1][14] = (e.length - 1) * 8 / 4294967296, a[i - 1][14] = Math.floor(a[i - 1][14]), a[i - 1][15] = (e.length - 1) * 8 & 4294967295;
                    for (var l = 0; l < i; ++l) {
                        for (var d = new Uint32Array(80), f = 0; f < 16; ++f) d[f] = a[l][f];
                        for (var p = 16; p < 80; ++p) d[p] = P(d[p - 3] ^ d[p - 8] ^ d[p - 14] ^ d[p - 16], 1);
                        for (var h = r[0], y = r[1], g = r[2], m = r[3], b = r[4], v = 0; v < 80; ++v) {
                            var _ = Math.floor(v / 20),
                                w = P(h, 5) + function(e, t, r, n) {
                                    switch (e) {
                                        case 0:
                                            return t & r ^ ~t & n;
                                        case 1:
                                        case 3:
                                            return t ^ r ^ n;
                                        case 2:
                                            return t & r ^ t & n ^ r & n
                                    }
                                }(_, y, g, m) + b + t[_] + d[v] >>> 0;
                            b = m, m = g, g = P(y, 30) >>> 0, y = h, h = w
                        }
                        r[0] = r[0] + h >>> 0, r[1] = r[1] + y >>> 0, r[2] = r[2] + g >>> 0, r[3] = r[3] + m >>> 0, r[4] = r[4] + b >>> 0
                    }
                    return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]]
                }),
                T = "00000000-0000-0000-0000-000000000000",
                j = function(e) {
                    if (!u(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.substr(14, 1), 16)
                }
        },
        52553: function(e, t, r) {
            "use strict";
            var n = r(83454);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.detectOrigin = function(e, t) {
                var r;
                return (null !== (r = n.env.VERCEL) && void 0 !== r ? r : n.env.AUTH_TRUST_HOST) ? `${"http"===t?"http":"https"}://${e}` : n.env.NEXTAUTH_URL
            }
        },
        94848: function(e, t) {
            "use strict";

            function r(e) {
                return e && "object" == typeof e && !Array.isArray(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.merge = function e(t, ...n) {
                if (!n.length) return t;
                let o = n.shift();
                if (r(t) && r(o))
                    for (let n in o) r(o[n]) ? (t[n] || Object.assign(t, {
                        [n]: {}
                    }), e(t[n], o[n])) : Object.assign(t, {
                        [n]: o[n]
                    });
                return e(t, ...n)
            }
        },
        4818: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(48564),
                o = r(2267);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "DraftMode", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            var i = r(18119),
                a = r(58699),
                s = function() {
                    function e(t) {
                        n._(this, e), this._provider = t
                    }
                    return o._(e, [{
                        key: "isEnabled",
                        get: function() {
                            return this._provider.isEnabled
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            var e = i.staticGenerationAsyncStorage.getStore();
                            return e && (0, a.trackDynamicDataAccessed)(e, "draftMode().enable()"), this._provider.enable()
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            var e = i.staticGenerationAsyncStorage.getStore();
                            return e && (0, a.trackDynamicDataAccessed)(e, "draftMode().disable()"), this._provider.disable()
                        }
                    }]), e
                }();
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        36849: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    cookies: function() {
                        return f
                    },
                    draftMode: function() {
                        return p
                    },
                    headers: function() {
                        return d
                    }
                });
            var n = r(9407),
                o = r(34042),
                i = r(80255),
                a = r(76361),
                s = r(4818),
                c = r(58699),
                u = r(18119),
                l = r(82595);

            function d() {
                var e = "headers",
                    t = u.staticGenerationAsyncStorage.getStore();
                if (t) {
                    if (t.forceStatic) return o.HeadersAdapter.seal(new Headers({}));
                    (0, c.trackDynamicDataAccessed)(t, e)
                }
                return (0, l.getExpectedRequestStore)(e).headers
            }

            function f() {
                var e = "cookies",
                    t = u.staticGenerationAsyncStorage.getStore();
                if (t) {
                    if (t.forceStatic) return n.RequestCookiesAdapter.seal(new i.RequestCookies(new Headers({})));
                    (0, c.trackDynamicDataAccessed)(t, e)
                }
                var r = (0, l.getExpectedRequestStore)(e),
                    o = a.actionAsyncStorage.getStore();
                return (null == o ? void 0 : o.isAction) || (null == o ? void 0 : o.isAppRoute) ? r.mutableCookies : r.cookies
            }

            function p() {
                var e = (0, l.getExpectedRequestStore)("draftMode");
                return new s.DraftMode(e.draftMode)
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1539: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(48564),
                o = r(18007),
                i = r(58894),
                a = r(49633);
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    DynamicServerError: function() {
                        return c
                    },
                    isDynamicServerError: function() {
                        return u
                    }
                });
            var s = "DYNAMIC_SERVER_USAGE",
                c = function(e) {
                    o._(r, e);
                    var t = a._(r);

                    function r(e) {
                        var o;
                        return n._(this, r), (o = t.call(this, "Dynamic server usage: " + e)).description = e, o.digest = s, o
                    }
                    return r
                }(i._(Error));

            function u(e) {
                return "object" == typeof e && null !== e && "digest" in e && "string" == typeof e.digest && e.digest === s
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        25196: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "staticGenerationAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            var n = (0, r(14001).createAsyncLocalStorage)();
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        18119: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "staticGenerationAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return n.staticGenerationAsyncStorage
                }
            });
            var n = r(25196);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        72700: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(48564),
                o = r(18007),
                i = r(248),
                a = r(58894),
                s = r(49633);
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    StaticGenBailoutError: function() {
                        return u
                    },
                    isStaticGenBailoutError: function() {
                        return l
                    }
                });
            var c = "NEXT_STATIC_GEN_BAILOUT",
                u = function(e) {
                    o._(r, e);
                    var t = s._(r);

                    function r() {
                        for (var e, o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return n._(this, r), (e = t.call.apply(t, [this].concat(i._(a)))).code = c, e
                    }
                    return r
                }(a._(Error));

            function l(e) {
                return "object" == typeof e && null !== e && "code" in e && e.code === c
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        89079: function(e) {
            "use strict";
            var t = Object.defineProperty,
                r = Object.getOwnPropertyDescriptor,
                n = Object.getOwnPropertyNames,
                o = Object.prototype.hasOwnProperty,
                i = {};

            function a(e) {
                var t;
                let r = ["path" in e && e.path && `Path=${e.path}`, "expires" in e && (e.expires || 0 === e.expires) && `Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`, "maxAge" in e && "number" == typeof e.maxAge && `Max-Age=${e.maxAge}`, "domain" in e && e.domain && `Domain=${e.domain}`, "secure" in e && e.secure && "Secure", "httpOnly" in e && e.httpOnly && "HttpOnly", "sameSite" in e && e.sameSite && `SameSite=${e.sameSite}`, "partitioned" in e && e.partitioned && "Partitioned", "priority" in e && e.priority && `Priority=${e.priority}`].filter(Boolean),
                    n = `${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}`;
                return 0 === r.length ? n : `${n}; ${r.join("; ")}`
            }

            function s(e) {
                let t = new Map;
                for (let r of e.split(/; */)) {
                    if (!r) continue;
                    let e = r.indexOf("=");
                    if (-1 === e) {
                        t.set(r, "true");
                        continue
                    }
                    let [n, o] = [r.slice(0, e), r.slice(e + 1)];
                    try {
                        t.set(n, decodeURIComponent(null != o ? o : "true"))
                    } catch {}
                }
                return t
            }

            function c(e) {
                var t, r;
                if (!e) return;
                let [
                    [n, o], ...i
                ] = s(e), {
                    domain: a,
                    expires: c,
                    httponly: d,
                    maxage: f,
                    path: p,
                    samesite: h,
                    secure: y,
                    partitioned: g,
                    priority: m
                } = Object.fromEntries(i.map(([e, t]) => [e.toLowerCase(), t]));
                return function(e) {
                    let t = {};
                    for (let r in e) e[r] && (t[r] = e[r]);
                    return t
                }({
                    name: n,
                    value: decodeURIComponent(o),
                    domain: a,
                    ...c && {
                        expires: new Date(c)
                    },
                    ...d && {
                        httpOnly: !0
                    },
                    ..."string" == typeof f && {
                        maxAge: Number(f)
                    },
                    path: p,
                    ...h && {
                        sameSite: u.includes(t = (t = h).toLowerCase()) ? t : void 0
                    },
                    ...y && {
                        secure: !0
                    },
                    ...m && {
                        priority: l.includes(r = (r = m).toLowerCase()) ? r : void 0
                    },
                    ...g && {
                        partitioned: !0
                    }
                })
            }((e, r) => {
                for (var n in r) t(e, n, {
                    get: r[n],
                    enumerable: !0
                })
            })(i, {
                RequestCookies: () => d,
                ResponseCookies: () => f,
                parseCookie: () => s,
                parseSetCookie: () => c,
                stringifyCookie: () => a
            }), e.exports = ((e, i, a, s) => {
                if (i && "object" == typeof i || "function" == typeof i)
                    for (let c of n(i)) o.call(e, c) || c === a || t(e, c, {
                        get: () => i[c],
                        enumerable: !(s = r(i, c)) || s.enumerable
                    });
                return e
            })(t({}, "__esModule", {
                value: !0
            }), i);
            var u = ["strict", "lax", "none"],
                l = ["low", "medium", "high"],
                d = class {
                    constructor(e) {
                        this._parsed = new Map, this._headers = e;
                        let t = e.get("cookie");
                        if (t)
                            for (let [e, r] of s(t)) this._parsed.set(e, {
                                name: e,
                                value: r
                            })
                    }[Symbol.iterator]() {
                        return this._parsed[Symbol.iterator]()
                    }
                    get size() {
                        return this._parsed.size
                    }
                    get(...e) {
                        let t = "string" == typeof e[0] ? e[0] : e[0].name;
                        return this._parsed.get(t)
                    }
                    getAll(...e) {
                        var t;
                        let r = Array.from(this._parsed);
                        if (!e.length) return r.map(([e, t]) => t);
                        let n = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
                        return r.filter(([e]) => e === n).map(([e, t]) => t)
                    }
                    has(e) {
                        return this._parsed.has(e)
                    }
                    set(...e) {
                        let [t, r] = 1 === e.length ? [e[0].name, e[0].value] : e, n = this._parsed;
                        return n.set(t, {
                            name: t,
                            value: r
                        }), this._headers.set("cookie", Array.from(n).map(([e, t]) => a(t)).join("; ")), this
                    }
                    delete(e) {
                        let t = this._parsed,
                            r = Array.isArray(e) ? e.map(e => t.delete(e)) : t.delete(e);
                        return this._headers.set("cookie", Array.from(t).map(([e, t]) => a(t)).join("; ")), r
                    }
                    clear() {
                        return this.delete(Array.from(this._parsed.keys())), this
                    }[Symbol.for("edge-runtime.inspect.custom")]() {
                        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
                    }
                    toString() {
                        return [...this._parsed.values()].map(e => `${e.name}=${encodeURIComponent(e.value)}`).join("; ")
                    }
                },
                f = class {
                    constructor(e) {
                        var t, r, n;
                        this._parsed = new Map, this._headers = e;
                        let o = null != (n = null != (r = null == (t = e.getSetCookie) ? void 0 : t.call(e)) ? r : e.get("set-cookie")) ? n : [];
                        for (let e of Array.isArray(o) ? o : function(e) {
                                if (!e) return [];
                                var t, r, n, o, i, a = [],
                                    s = 0;

                                function c() {
                                    for (; s < e.length && /\s/.test(e.charAt(s));) s += 1;
                                    return s < e.length
                                }
                                for (; s < e.length;) {
                                    for (t = s, i = !1; c();)
                                        if ("," === (r = e.charAt(s))) {
                                            for (n = s, s += 1, c(), o = s; s < e.length && "=" !== (r = e.charAt(s)) && ";" !== r && "," !== r;) s += 1;
                                            s < e.length && "=" === e.charAt(s) ? (i = !0, s = o, a.push(e.substring(t, n)), t = s) : s = n + 1
                                        } else s += 1;
                                    (!i || s >= e.length) && a.push(e.substring(t, e.length))
                                }
                                return a
                            }(o)) {
                            let t = c(e);
                            t && this._parsed.set(t.name, t)
                        }
                    }
                    get(...e) {
                        let t = "string" == typeof e[0] ? e[0] : e[0].name;
                        return this._parsed.get(t)
                    }
                    getAll(...e) {
                        var t;
                        let r = Array.from(this._parsed.values());
                        if (!e.length) return r;
                        let n = "string" == typeof e[0] ? e[0] : null == (t = e[0]) ? void 0 : t.name;
                        return r.filter(e => e.name === n)
                    }
                    has(e) {
                        return this._parsed.has(e)
                    }
                    set(...e) {
                        let [t, r, n] = 1 === e.length ? [e[0].name, e[0].value, e[0]] : e, o = this._parsed;
                        return o.set(t, function(e = {
                                name: "",
                                value: ""
                            }) {
                                return "number" == typeof e.expires && (e.expires = new Date(e.expires)), e.maxAge && (e.expires = new Date(Date.now() + 1e3 * e.maxAge)), (null === e.path || void 0 === e.path) && (e.path = "/"), e
                            }({
                                name: t,
                                value: r,
                                ...n
                            })),
                            function(e, t) {
                                for (let [, r] of (t.delete("set-cookie"), e)) {
                                    let e = a(r);
                                    t.append("set-cookie", e)
                                }
                            }(o, this._headers), this
                    }
                    delete(...e) {
                        let [t, r, n] = "string" == typeof e[0] ? [e[0]] : [e[0].name, e[0].path, e[0].domain];
                        return this.set({
                            name: t,
                            path: r,
                            domain: n,
                            value: "",
                            expires: new Date(0)
                        })
                    }[Symbol.for("edge-runtime.inspect.custom")]() {
                        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`
                    }
                    toString() {
                        return [...this._parsed.values()].map(a).join("; ")
                    }
                }
        },
        27596: function(e, t, r) {
            var n = r(83454),
                o = r(21876).Buffer;
            ! function() {
                var t = {
                        992: function(e) {
                            e.exports = function(e, r, n) {
                                if (e.filter) return e.filter(r, n);
                                if (null == e || "function" != typeof r) throw TypeError();
                                for (var o = [], i = 0; i < e.length; i++)
                                    if (t.call(e, i)) {
                                        var a = e[i];
                                        r.call(n, a, i, e) && o.push(a)
                                    }
                                return o
                            };
                            var t = Object.prototype.hasOwnProperty
                        },
                        167: function(e, t, r) {
                            "use strict";

                            function o(e) {
                                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }
                            var i, a, s = r(23).codes,
                                c = s.ERR_AMBIGUOUS_ARGUMENT,
                                u = s.ERR_INVALID_ARG_TYPE,
                                l = s.ERR_INVALID_ARG_VALUE,
                                d = s.ERR_INVALID_RETURN_VALUE,
                                f = s.ERR_MISSING_ARGS,
                                p = r(545),
                                h = r(177).inspect,
                                y = r(177).types,
                                g = y.isPromise,
                                m = y.isRegExp,
                                b = Object.assign ? Object.assign : r(604).assign,
                                v = Object.is ? Object.is : r(208);

                            function _() {
                                var e = r(176);
                                i = e.isDeepEqual, a = e.isDeepStrictEqual
                            }
                            var w = !1,
                                S = e.exports = O,
                                E = {};

                            function A(e) {
                                if (e.message instanceof Error) throw e.message;
                                throw new p(e)
                            }

                            function k(e, t, r, n) {
                                if (!r) {
                                    var o = !1;
                                    if (0 === t) o = !0, n = "No value argument passed to `assert.ok()`";
                                    else if (n instanceof Error) throw n;
                                    var i = new p({
                                        actual: r,
                                        expected: !0,
                                        message: n,
                                        operator: "==",
                                        stackStartFn: e
                                    });
                                    throw i.generatedMessage = o, i
                                }
                            }

                            function O() {
                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                k.apply(void 0, [O, t.length].concat(t))
                            }
                            S.fail = function e(t, r, o, i, a) {
                                var s, c = arguments.length;
                                if (0 === c ? s = "Failed" : 1 === c ? (o = t, t = void 0) : (!1 === w && (w = !0, (n.emitWarning ? n.emitWarning : console.warn.bind(console))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")), 2 === c && (i = "!=")), o instanceof Error) throw o;
                                var u = {
                                    actual: t,
                                    expected: r,
                                    operator: void 0 === i ? "fail" : i,
                                    stackStartFn: a || e
                                };
                                void 0 !== o && (u.message = o);
                                var l = new p(u);
                                throw s && (l.message = s, l.generatedMessage = !0), l
                            }, S.AssertionError = p, S.ok = O, S.equal = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                t != r && A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "==",
                                    stackStartFn: e
                                })
                            }, S.notEqual = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                t == r && A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "!=",
                                    stackStartFn: e
                                })
                            }, S.deepEqual = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                void 0 === i && _(), i(t, r) || A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "deepEqual",
                                    stackStartFn: e
                                })
                            }, S.notDeepEqual = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                void 0 === i && _(), i(t, r) && A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "notDeepEqual",
                                    stackStartFn: e
                                })
                            }, S.deepStrictEqual = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                void 0 === i && _(), a(t, r) || A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "deepStrictEqual",
                                    stackStartFn: e
                                })
                            }, S.notDeepStrictEqual = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                void 0 === i && _(), a(t, r) && A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "notDeepStrictEqual",
                                    stackStartFn: e
                                })
                            }, S.strictEqual = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                v(t, r) || A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "strictEqual",
                                    stackStartFn: e
                                })
                            }, S.notStrictEqual = function e(t, r, n) {
                                if (arguments.length < 2) throw new f("actual", "expected");
                                v(t, r) && A({
                                    actual: t,
                                    expected: r,
                                    message: n,
                                    operator: "notStrictEqual",
                                    stackStartFn: e
                                })
                            };
                            var P = function e(t, r, n) {
                                var o = this;
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                }(this, e), r.forEach(function(e) {
                                    e in t && (void 0 !== n && "string" == typeof n[e] && m(t[e]) && t[e].test(n[e]) ? o[e] = n[e] : o[e] = t[e])
                                })
                            };

                            function x(e, t, r, n) {
                                if ("function" != typeof t) {
                                    if (m(t)) return t.test(e);
                                    if (2 == arguments.length) throw new u("expected", ["Function", "RegExp"], t);
                                    if ("object" !== o(e) || null === e) {
                                        var s = new p({
                                            actual: e,
                                            expected: t,
                                            message: r,
                                            operator: "deepStrictEqual",
                                            stackStartFn: n
                                        });
                                        throw s.operator = n.name, s
                                    }
                                    var c = Object.keys(t);
                                    if (t instanceof Error) c.push("name", "message");
                                    else if (0 === c.length) throw new l("error", t, "may not be an empty object");
                                    return void 0 === i && _(), c.forEach(function(o) {
                                        "string" == typeof e[o] && m(t[o]) && t[o].test(e[o]) || function(e, t, r, n, o, i) {
                                            if (!(r in e) || !a(e[r], t[r])) {
                                                if (!n) {
                                                    var s = new p({
                                                        actual: new P(e, o),
                                                        expected: new P(t, o, e),
                                                        operator: "deepStrictEqual",
                                                        stackStartFn: i
                                                    });
                                                    throw s.actual = e, s.expected = t, s.operator = i.name, s
                                                }
                                                A({
                                                    actual: e,
                                                    expected: t,
                                                    message: n,
                                                    operator: i.name,
                                                    stackStartFn: i
                                                })
                                            }
                                        }(e, t, o, r, c, n)
                                    }), !0
                                }
                                return void 0 !== t.prototype && e instanceof t || !Error.isPrototypeOf(t) && !0 === t.call({}, e)
                            }

                            function T(e) {
                                if ("function" != typeof e) throw new u("fn", "Function", e);
                                try {
                                    e()
                                } catch (e) {
                                    return e
                                }
                                return E
                            }

                            function j(e) {
                                return g(e) || null !== e && "object" === o(e) && "function" == typeof e.then && "function" == typeof e.catch
                            }

                            function R(e) {
                                return Promise.resolve().then(function() {
                                    var t;
                                    if ("function" == typeof e) {
                                        if (!j(t = e())) throw new d("instance of Promise", "promiseFn", t)
                                    } else if (j(e)) t = e;
                                    else throw new u("promiseFn", ["Function", "Promise"], e);
                                    return Promise.resolve().then(function() {
                                        return t
                                    }).then(function() {
                                        return E
                                    }).catch(function(e) {
                                        return e
                                    })
                                })
                            }

                            function C(e, t, r, n) {
                                if ("string" == typeof r) {
                                    if (4 == arguments.length) throw new u("error", ["Object", "Error", "Function", "RegExp"], r);
                                    if ("object" === o(t) && null !== t) {
                                        if (t.message === r) throw new c("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'))
                                    } else if (t === r) throw new c("error/message", 'The error "'.concat(t, '" is identical to the message.'));
                                    n = r, r = void 0
                                } else if (null != r && "object" !== o(r) && "function" != typeof r) throw new u("error", ["Object", "Error", "Function", "RegExp"], r);
                                if (t === E) {
                                    var i = "";
                                    r && r.name && (i += " (".concat(r.name, ")")), i += n ? ": ".concat(n) : ".";
                                    var a = "rejects" === e.name ? "rejection" : "exception";
                                    A({
                                        actual: void 0,
                                        expected: r,
                                        operator: e.name,
                                        message: "Missing expected ".concat(a).concat(i),
                                        stackStartFn: e
                                    })
                                }
                                if (r && !x(t, r, n, e)) throw t
                            }

                            function I(e, t, r, n) {
                                if (t !== E) {
                                    if ("string" == typeof r && (n = r, r = void 0), !r || x(t, r)) {
                                        var o = n ? ": ".concat(n) : ".",
                                            i = "doesNotReject" === e.name ? "rejection" : "exception";
                                        A({
                                            actual: t,
                                            expected: r,
                                            operator: e.name,
                                            message: "Got unwanted ".concat(i).concat(o, "\n") + 'Actual message: "'.concat(t && t.message, '"'),
                                            stackStartFn: e
                                        })
                                    }
                                    throw t
                                }
                            }
                            S.throws = function e(t) {
                                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                C.apply(void 0, [e, T(t)].concat(n))
                            }, S.rejects = function e(t) {
                                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                return R(t).then(function(t) {
                                    return C.apply(void 0, [e, t].concat(n))
                                })
                            }, S.doesNotThrow = function e(t) {
                                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                I.apply(void 0, [e, T(t)].concat(n))
                            }, S.doesNotReject = function e(t) {
                                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                return R(t).then(function(t) {
                                    return I.apply(void 0, [e, t].concat(n))
                                })
                            }, S.ifError = function e(t) {
                                if (null != t) {
                                    var r = "ifError got unwanted exception: ";
                                    "object" === o(t) && "string" == typeof t.message ? 0 === t.message.length && t.constructor ? r += t.constructor.name : r += t.message : r += h(t);
                                    var n = new p({
                                            actual: t,
                                            expected: null,
                                            operator: "ifError",
                                            message: r,
                                            stackStartFn: e
                                        }),
                                        i = t.stack;
                                    if ("string" == typeof i) {
                                        var a = i.split("\n");
                                        a.shift();
                                        for (var s = n.stack.split("\n"), c = 0; c < a.length; c++) {
                                            var u = s.indexOf(a[c]);
                                            if (-1 !== u) {
                                                s = s.slice(0, u);
                                                break
                                            }
                                        }
                                        n.stack = "".concat(s.join("\n"), "\n").concat(a.join("\n"))
                                    }
                                    throw n
                                }
                            }, S.strict = b(function e() {
                                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                k.apply(void 0, [e, r.length].concat(r))
                            }, S, {
                                equal: S.strictEqual,
                                deepEqual: S.deepStrictEqual,
                                notEqual: S.notStrictEqual,
                                notDeepEqual: S.notDeepStrictEqual
                            }), S.strict.strict = S.strict
                        },
                        545: function(e, t, r) {
                            "use strict";

                            function o(e, t) {
                                return t && ("object" === l(t) || "function" == typeof t) ? t : i(e)
                            }

                            function i(e) {
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }

                            function a(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return (a = function(e) {
                                    if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                                    if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, r)
                                    }

                                    function r() {
                                        return s(e, arguments, u(this).constructor)
                                    }
                                    return r.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: r,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), c(r, e)
                                })(e)
                            }

                            function s(e, t, r) {
                                return (s = ! function() {
                                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                                    } catch (e) {
                                        return !1
                                    }
                                }() ? function(e, t, r) {
                                    var n = [null];
                                    n.push.apply(n, t);
                                    var o = new(Function.bind.apply(e, n));
                                    return r && c(o, r.prototype), o
                                } : Reflect.construct).apply(null, arguments)
                            }

                            function c(e, t) {
                                return (c = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e
                                })(e, t)
                            }

                            function u(e) {
                                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                })(e)
                            }

                            function l(e) {
                                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }
                            var d = r(177).inspect,
                                f = r(23).codes.ERR_INVALID_ARG_TYPE;

                            function p(e, t, r) {
                                return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
                            }
                            var h = "",
                                y = "",
                                g = "",
                                m = "",
                                b = {
                                    deepStrictEqual: "Expected values to be strictly deep-equal:",
                                    strictEqual: "Expected values to be strictly equal:",
                                    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                                    deepEqual: "Expected values to be loosely deep-equal:",
                                    equal: "Expected values to be loosely equal:",
                                    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                                    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                                    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                                    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                                    notEqual: 'Expected "actual" to be loosely unequal to:',
                                    notIdentical: "Values identical but not reference-equal:"
                                };

                            function v(e) {
                                var t = Object.keys(e),
                                    r = Object.create(Object.getPrototypeOf(e));
                                return t.forEach(function(t) {
                                    r[t] = e[t]
                                }), Object.defineProperty(r, "message", {
                                    value: e.message
                                }), r
                            }

                            function _(e) {
                                return d(e, {
                                    compact: !1,
                                    customInspect: !1,
                                    depth: 1e3,
                                    maxArrayLength: 1 / 0,
                                    showHidden: !1,
                                    breakLength: 1 / 0,
                                    showProxy: !1,
                                    sorted: !0,
                                    getters: !0
                                })
                            }
                            var w = function(e) {
                                var t;

                                function r(e) {
                                    if (! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, r), "object" !== l(e) || null === e) throw new f("options", "Object", e);
                                    var t, a = e.message,
                                        s = e.operator,
                                        c = e.stackStartFn,
                                        d = e.actual,
                                        w = e.expected,
                                        S = Error.stackTraceLimit;
                                    if (Error.stackTraceLimit = 0, null != a) t = o(this, u(r).call(this, String(a)));
                                    else if (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? (h = "\x1b[34m", y = "\x1b[32m", m = "\x1b[39m", g = "\x1b[31m") : (h = "", y = "", m = "", g = "")), "object" === l(d) && null !== d && "object" === l(w) && null !== w && "stack" in d && d instanceof Error && "stack" in w && w instanceof Error && (d = v(d), w = v(w)), "deepStrictEqual" === s || "strictEqual" === s) t = o(this, u(r).call(this, function(e, t, r) {
                                        var o = "",
                                            i = "",
                                            a = 0,
                                            s = "",
                                            c = !1,
                                            u = _(e),
                                            d = u.split("\n"),
                                            f = _(t).split("\n"),
                                            v = 0,
                                            w = "";
                                        if ("strictEqual" === r && "object" === l(e) && "object" === l(t) && null !== e && null !== t && (r = "strictEqualObject"), 1 === d.length && 1 === f.length && d[0] !== f[0]) {
                                            var S = d[0].length + f[0].length;
                                            if (S <= 10) {
                                                if (("object" !== l(e) || null === e) && ("object" !== l(t) || null === t) && (0 !== e || 0 !== t)) return "".concat(b[r], "\n\n") + "".concat(d[0], " !== ").concat(f[0], "\n")
                                            } else if ("strictEqualObject" !== r && S < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
                                                for (; d[0][v] === f[0][v];) v++;
                                                v > 2 && (w = "\n  ".concat(function(e, t) {
                                                    if (t = Math.floor(t), 0 == e.length || 0 == t) return "";
                                                    var r = e.length * t;
                                                    for (t = Math.floor(Math.log(t) / Math.log(2)); t;) e += e, t--;
                                                    return e + e.substring(0, r - e.length)
                                                }(" ", v), "^"), v = 0)
                                            }
                                        }
                                        for (var E = d[d.length - 1], A = f[f.length - 1]; E === A && (v++ < 2 ? s = "\n  ".concat(E).concat(s) : o = E, d.pop(), f.pop(), 0 !== d.length && 0 !== f.length);) E = d[d.length - 1], A = f[f.length - 1];
                                        var k = Math.max(d.length, f.length);
                                        if (0 === k) {
                                            var O = u.split("\n");
                                            if (O.length > 30)
                                                for (O[26] = "".concat(h, "...").concat(m); O.length > 27;) O.pop();
                                            return "".concat(b.notIdentical, "\n\n").concat(O.join("\n"), "\n")
                                        }
                                        v > 3 && (s = "\n".concat(h, "...").concat(m).concat(s), c = !0), "" !== o && (s = "\n  ".concat(o).concat(s), o = "");
                                        var P = 0,
                                            x = b[r] + "\n".concat(y, "+ actual").concat(m, " ").concat(g, "- expected").concat(m),
                                            T = " ".concat(h, "...").concat(m, " Lines skipped");
                                        for (v = 0; v < k; v++) {
                                            var j = v - a;
                                            if (d.length < v + 1) j > 1 && v > 2 && (j > 4 ? (i += "\n".concat(h, "...").concat(m), c = !0) : j > 3 && (i += "\n  ".concat(f[v - 2]), P++), i += "\n  ".concat(f[v - 1]), P++), a = v, o += "\n".concat(g, "-").concat(m, " ").concat(f[v]), P++;
                                            else if (f.length < v + 1) j > 1 && v > 2 && (j > 4 ? (i += "\n".concat(h, "...").concat(m), c = !0) : j > 3 && (i += "\n  ".concat(d[v - 2]), P++), i += "\n  ".concat(d[v - 1]), P++), a = v, i += "\n".concat(y, "+").concat(m, " ").concat(d[v]), P++;
                                            else {
                                                var R = f[v],
                                                    C = d[v],
                                                    I = C !== R && (!p(C, ",") || C.slice(0, -1) !== R);
                                                I && p(R, ",") && R.slice(0, -1) === C && (I = !1, C += ","), I ? (j > 1 && v > 2 && (j > 4 ? (i += "\n".concat(h, "...").concat(m), c = !0) : j > 3 && (i += "\n  ".concat(d[v - 2]), P++), i += "\n  ".concat(d[v - 1]), P++), a = v, i += "\n".concat(y, "+").concat(m, " ").concat(C), o += "\n".concat(g, "-").concat(m, " ").concat(R), P += 2) : (i += o, o = "", (1 === j || 0 === v) && (i += "\n  ".concat(C), P++))
                                            }
                                            if (P > 20 && v < k - 2) return "".concat(x).concat(T, "\n").concat(i, "\n").concat(h, "...").concat(m).concat(o, "\n") + "".concat(h, "...").concat(m)
                                        }
                                        return "".concat(x).concat(c ? T : "", "\n").concat(i).concat(o).concat(s).concat(w)
                                    }(d, w, s)));
                                    else if ("notDeepStrictEqual" === s || "notStrictEqual" === s) {
                                        var E = b[s],
                                            A = _(d).split("\n");
                                        if ("notStrictEqual" === s && "object" === l(d) && null !== d && (E = b.notStrictEqualObject), A.length > 30)
                                            for (A[26] = "".concat(h, "...").concat(m); A.length > 27;) A.pop();
                                        t = 1 === A.length ? o(this, u(r).call(this, "".concat(E, " ").concat(A[0]))) : o(this, u(r).call(this, "".concat(E, "\n\n").concat(A.join("\n"), "\n")))
                                    } else {
                                        var k = _(d),
                                            O = "",
                                            P = b[s];
                                        "notDeepEqual" === s || "notEqual" === s ? (k = "".concat(b[s], "\n\n").concat(k)).length > 1024 && (k = "".concat(k.slice(0, 1021), "...")) : (O = "".concat(_(w)), k.length > 512 && (k = "".concat(k.slice(0, 509), "...")), O.length > 512 && (O = "".concat(O.slice(0, 509), "...")), "deepEqual" === s || "equal" === s ? k = "".concat(P, "\n\n").concat(k, "\n\nshould equal\n\n") : O = " ".concat(s, " ").concat(O)), t = o(this, u(r).call(this, "".concat(k).concat(O)))
                                    }
                                    return Error.stackTraceLimit = S, t.generatedMessage = !a, Object.defineProperty(i(t), "name", {
                                        value: "AssertionError [ERR_ASSERTION]",
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }), t.code = "ERR_ASSERTION", t.actual = d, t.expected = w, t.operator = s, Error.captureStackTrace && Error.captureStackTrace(i(t), c), t.stack, t.name = "AssertionError", o(t)
                                }
                                return ! function(e, t) {
                                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                        e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), t && c(e, t)
                                    }(r, e), t = [{
                                        key: "toString",
                                        value: function() {
                                            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                                        }
                                    }, {
                                        key: d.custom,
                                        value: function(e, t) {
                                            return d(this, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                    }))), n.forEach(function(t) {
                                                        var n;
                                                        n = r[t], t in e ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        }) : e[t] = n
                                                    })
                                                }
                                                return e
                                            }({}, t, {
                                                customInspect: !1,
                                                depth: 0
                                            }))
                                        }
                                    }],
                                    function(e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var n = t[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(r.prototype, t), r
                            }(a(Error));
                            e.exports = w
                        },
                        23: function(e, t, r) {
                            "use strict";

                            function n(e) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }

                            function o(e) {
                                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                })(e)
                            }

                            function i(e, t) {
                                return (i = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e
                                })(e, t)
                            }
                            var a, s, c = {};

                            function u(e, t, r) {
                                r || (r = Error);
                                var a = function(r) {
                                    function a(r, i, s) {
                                        var c, u;
                                        return ! function(e, t) {
                                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                        }(this, a), (c = (u = o(a).call(this, "string" == typeof t ? t : t(r, i, s))) && ("object" === n(u) || "function" == typeof u) ? u : function(e) {
                                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return e
                                        }(this)).code = e, c
                                    }
                                    return ! function(e, t) {
                                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                        e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), t && i(e, t)
                                    }(a, r), a
                                }(r);
                                c[e] = a
                            }

                            function l(e, t) {
                                if (!Array.isArray(e)) return "of ".concat(t, " ").concat(String(e));
                                var r = e.length;
                                return (e = e.map(function(e) {
                                    return String(e)
                                }), r > 2) ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                            }
                            u("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), u("ERR_INVALID_ARG_TYPE", function(e, t, o) {
                                if ((void 0 === a && (a = r(167)), a("string" == typeof e, "'name' must be a string"), "string" == typeof t && (i = "not ", t.substr(0, i.length) === i)) ? (d = "must not be", t = t.replace(/^not /, "")) : d = "must be", s = " argument", (void 0 === c || c > e.length) && (c = e.length), e.substring(c - s.length, c) === s) f = "The ".concat(e, " ").concat(d, " ").concat(l(t, "type"));
                                else {
                                    var i, s, c, u, d, f, p = ("number" != typeof u && (u = 0), u + 1 > e.length || -1 === e.indexOf(".", u)) ? "argument" : "property";
                                    f = 'The "'.concat(e, '" ').concat(p, " ").concat(d, " ").concat(l(t, "type"))
                                }
                                return f + ". Received type ".concat(n(o))
                            }, TypeError), u("ERR_INVALID_ARG_VALUE", function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                                void 0 === s && (s = r(177));
                                var o = s.inspect(t);
                                return o.length > 128 && (o = "".concat(o.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(n, ". Received ").concat(o)
                            }, TypeError, RangeError), u("ERR_INVALID_RETURN_VALUE", function(e, t, r) {
                                var o;
                                return o = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r)), "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(o, ".")
                            }, TypeError), u("ERR_MISSING_ARGS", function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                void 0 === a && (a = r(167)), a(t.length > 0, "At least one arg needs to be specified");
                                var o = "The ",
                                    i = t.length;
                                switch (t = t.map(function(e) {
                                    return '"'.concat(e, '"')
                                }), i) {
                                    case 1:
                                        o += "".concat(t[0], " argument");
                                        break;
                                    case 2:
                                        o += "".concat(t[0], " and ").concat(t[1], " arguments");
                                        break;
                                    default:
                                        o += t.slice(0, i - 1).join(", ") + ", and ".concat(t[i - 1], " arguments")
                                }
                                return "".concat(o, " must be specified")
                            }, TypeError), e.exports.codes = c
                        },
                        176: function(e, t, r) {
                            "use strict";

                            function n(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e
                                }(e) || function(e, t) {
                                    var r = [],
                                        n = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                                    } catch (e) {
                                        o = !0, i = e
                                    } finally {
                                        try {
                                            n || null == s.return || s.return()
                                        } finally {
                                            if (o) throw i
                                        }
                                    }
                                    return r
                                }(e, t) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance")
                                }()
                            }

                            function o(e) {
                                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                })(e)
                            }
                            var i = void 0 !== /a/g.flags,
                                a = function(e) {
                                    var t = [];
                                    return e.forEach(function(e) {
                                        return t.push(e)
                                    }), t
                                },
                                s = function(e) {
                                    var t = [];
                                    return e.forEach(function(e, r) {
                                        return t.push([r, e])
                                    }), t
                                },
                                c = Object.is ? Object.is : r(208),
                                u = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                                    return []
                                },
                                l = Number.isNaN ? Number.isNaN : r(718);

                            function d(e) {
                                return e.call.bind(e)
                            }
                            var f = d(Object.prototype.hasOwnProperty),
                                p = d(Object.prototype.propertyIsEnumerable),
                                h = d(Object.prototype.toString),
                                y = r(177).types,
                                g = y.isAnyArrayBuffer,
                                m = y.isArrayBufferView,
                                b = y.isDate,
                                v = y.isMap,
                                _ = y.isRegExp,
                                w = y.isSet,
                                S = y.isNativeError,
                                E = y.isBoxedPrimitive,
                                A = y.isNumberObject,
                                k = y.isStringObject,
                                O = y.isBooleanObject,
                                P = y.isBigIntObject,
                                x = y.isSymbolObject,
                                T = y.isFloat32Array,
                                j = y.isFloat64Array;

                            function R(e) {
                                if (0 === e.length || e.length > 10) return !0;
                                for (var t = 0; t < e.length; t++) {
                                    var r = e.charCodeAt(t);
                                    if (r < 48 || r > 57) return !0
                                }
                                return 10 === e.length && e >= 4294967296
                            }

                            function C(e) {
                                return Object.keys(e).filter(R).concat(u(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))
                            }

                            function I(e, t) {
                                if (e === t) return 0;
                                for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                                    if (e[o] !== t[o]) {
                                        r = e[o], n = t[o];
                                        break
                                    }
                                return r < n ? -1 : n < r ? 1 : 0
                            }
                            var U = void 0;

                            function H(e, t, r, n) {
                                if (e === t) return 0 !== e || !r || c(e, t);
                                if (r) {
                                    if ("object" !== o(e)) return "number" == typeof e && l(e) && l(t);
                                    if ("object" !== o(t) || null === e || null === t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1
                                } else {
                                    if (null === e || "object" !== o(e)) return (null === t || "object" !== o(t)) && e == t;
                                    if (null === t || "object" !== o(t)) return !1
                                }
                                var a = h(e);
                                if (a !== h(t)) return !1;
                                if (Array.isArray(e)) {
                                    if (e.length !== t.length) return !1;
                                    var s = C(e, U),
                                        u = C(t, U);
                                    return s.length === u.length && D(e, t, r, n, 1, s)
                                }
                                if ("[object Object]" === a && (!v(e) && v(t) || !w(e) && w(t))) return !1;
                                if (b(e)) {
                                    if (!b(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) return !1
                                } else if (_(e)) {
                                    if (!_(t) || (i ? e.source !== t.source || e.flags !== t.flags : RegExp.prototype.toString.call(e) !== RegExp.prototype.toString.call(t))) return !1
                                } else if (S(e) || e instanceof Error) {
                                    if (e.message !== t.message || e.name !== t.name) return !1
                                } else if (m(e)) {
                                    if (!r && (T(e) || j(e))) {
                                        if (! function(e, t) {
                                                if (e.byteLength !== t.byteLength) return !1;
                                                for (var r = 0; r < e.byteLength; r++)
                                                    if (e[r] !== t[r]) return !1;
                                                return !0
                                            }(e, t)) return !1
                                    } else if (e.byteLength !== t.byteLength || 0 !== I(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength))) return !1;
                                    var d = C(e, U),
                                        f = C(t, U);
                                    return d.length === f.length && D(e, t, r, n, 0, d)
                                } else if (w(e)) return !!w(t) && e.size === t.size && D(e, t, r, n, 2);
                                else if (v(e)) return !!v(t) && e.size === t.size && D(e, t, r, n, 3);
                                else if (g(e)) {
                                    if (e.byteLength !== t.byteLength || 0 !== I(new Uint8Array(e), new Uint8Array(t))) return !1
                                } else if (E(e) && (A(e) ? !(A(t) && c(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t))) : k(e) ? !k(t) || String.prototype.valueOf.call(e) !== String.prototype.valueOf.call(t) : O(e) ? !O(t) || Boolean.prototype.valueOf.call(e) !== Boolean.prototype.valueOf.call(t) : P(e) ? !P(t) || BigInt.prototype.valueOf.call(e) !== BigInt.prototype.valueOf.call(t) : !x(t) || Symbol.prototype.valueOf.call(e) !== Symbol.prototype.valueOf.call(t))) return !1;
                                return D(e, t, r, n, 0)
                            }

                            function M(e, t) {
                                return t.filter(function(t) {
                                    return p(e, t)
                                })
                            }

                            function D(e, t, r, i, c, l) {
                                if (5 == arguments.length) {
                                    l = Object.keys(e);
                                    var d = Object.keys(t);
                                    if (l.length !== d.length) return !1
                                }
                                for (var h = 0; h < l.length; h++)
                                    if (!f(t, l[h])) return !1;
                                if (r && 5 == arguments.length) {
                                    var y = u(e);
                                    if (0 !== y.length) {
                                        var g = 0;
                                        for (h = 0; h < y.length; h++) {
                                            var m = y[h];
                                            if (p(e, m)) {
                                                if (!p(t, m)) return !1;
                                                l.push(m), g++
                                            } else if (p(t, m)) return !1
                                        }
                                        var b = u(t);
                                        if (y.length !== b.length && M(t, b).length !== g) return !1
                                    } else {
                                        var v = u(t);
                                        if (0 !== v.length && 0 !== M(t, v).length) return !1
                                    }
                                }
                                if (0 === l.length && (0 === c || 1 === c && 0 === e.length || 0 === e.size)) return !0;
                                if (void 0 === i) i = {
                                    val1: new Map,
                                    val2: new Map,
                                    position: 0
                                };
                                else {
                                    var _ = i.val1.get(e);
                                    if (void 0 !== _) {
                                        var w = i.val2.get(t);
                                        if (void 0 !== w) return _ === w
                                    }
                                    i.position++
                                }
                                i.val1.set(e, i.position), i.val2.set(t, i.position);
                                var S = function(e, t, r, i, c, u) {
                                    var l = 0;
                                    if (2 === u) {
                                        if (! function(e, t, r, n) {
                                                for (var i = null, s = a(e), c = 0; c < s.length; c++) {
                                                    var u = s[c];
                                                    if ("object" === o(u) && null !== u) null === i && (i = new Set), i.add(u);
                                                    else if (!t.has(u)) {
                                                        if (r || ! function(e, t, r) {
                                                                var n = W(r);
                                                                return null != n ? n : t.has(n) && !e.has(n)
                                                            }(e, t, u)) return !1;
                                                        null === i && (i = new Set), i.add(u)
                                                    }
                                                }
                                                if (null !== i) {
                                                    for (var l = a(t), d = 0; d < l.length; d++) {
                                                        var f = l[d];
                                                        if ("object" === o(f) && null !== f) {
                                                            if (!N(i, f, r, n)) return !1
                                                        } else if (!r && !e.has(f) && !N(i, f, r, n)) return !1
                                                    }
                                                    return 0 === i.size
                                                }
                                                return !0
                                            }(e, t, r, c)) return !1
                                    } else if (3 === u) {
                                        if (! function(e, t, r, i) {
                                                for (var a = null, c = s(e), u = 0; u < c.length; u++) {
                                                    var l = n(c[u], 2),
                                                        d = l[0],
                                                        f = l[1];
                                                    if ("object" === o(d) && null !== d) null === a && (a = new Set), a.add(d);
                                                    else {
                                                        var p = t.get(d);
                                                        if (void 0 === p && !t.has(d) || !H(f, p, r, i)) {
                                                            if (r || ! function(e, t, r, n, o) {
                                                                    var i = W(r);
                                                                    if (null != i) return i;
                                                                    var a = t.get(i);
                                                                    return !!((void 0 !== a || t.has(i)) && H(n, a, !1, o)) && !e.has(i) && H(n, a, !1, o)
                                                                }(e, t, d, f, i)) return !1;
                                                            null === a && (a = new Set), a.add(d)
                                                        }
                                                    }
                                                }
                                                if (null !== a) {
                                                    for (var h = s(t), y = 0; y < h.length; y++) {
                                                        var g = n(h[y], 2),
                                                            d = g[0],
                                                            m = g[1];
                                                        if ("object" === o(d) && null !== d) {
                                                            if (!$(a, e, d, m, r, i)) return !1
                                                        } else if (!r && (!e.has(d) || !H(e.get(d), m, !1, i)) && !$(a, e, d, m, !1, i)) return !1
                                                    }
                                                    return 0 === a.size
                                                }
                                                return !0
                                            }(e, t, r, c)) return !1
                                    } else if (1 === u)
                                        for (; l < e.length; l++)
                                            if (f(e, l)) {
                                                if (!f(t, l) || !H(e[l], t[l], r, c)) return !1
                                            } else {
                                                if (f(t, l)) return !1;
                                                for (var d = Object.keys(e); l < d.length; l++) {
                                                    var p = d[l];
                                                    if (!f(t, p) || !H(e[p], t[p], r, c)) return !1
                                                }
                                                if (d.length !== Object.keys(t).length) return !1;
                                                return !0
                                            }
                                    for (l = 0; l < i.length; l++) {
                                        var h = i[l];
                                        if (!H(e[h], t[h], r, c)) return !1
                                    }
                                    return !0
                                }(e, t, r, l, i, c);
                                return i.val1.delete(e), i.val2.delete(t), S
                            }

                            function N(e, t, r, n) {
                                for (var o = a(e), i = 0; i < o.length; i++) {
                                    var s = o[i];
                                    if (H(t, s, r, n)) return e.delete(s), !0
                                }
                                return !1
                            }

                            function W(e) {
                                switch (o(e)) {
                                    case "undefined":
                                        return null;
                                    case "object":
                                        return;
                                    case "symbol":
                                        return !1;
                                    case "string":
                                        e = +e;
                                    case "number":
                                        if (l(e)) return !1
                                }
                                return !0
                            }

                            function $(e, t, r, n, o, i) {
                                for (var s = a(e), c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    if (H(r, u, o, i) && H(n, t.get(u), o, i)) return e.delete(u), !0
                                }
                                return !1
                            }
                            e.exports = {
                                isDeepEqual: function(e, t) {
                                    return H(e, t, !1)
                                },
                                isDeepStrictEqual: function(e, t) {
                                    return H(e, t, !0)
                                }
                            }
                        },
                        256: function(e, t, r) {
                            "use strict";
                            var n = r(925),
                                o = r(139),
                                i = o(n("String.prototype.indexOf"));
                            e.exports = function(e, t) {
                                var r = n(e, !!t);
                                return "function" == typeof r && i(e, ".prototype.") > -1 ? o(r) : r
                            }
                        },
                        139: function(e, t, r) {
                            "use strict";
                            var n = r(174),
                                o = r(925),
                                i = o("%Function.prototype.apply%"),
                                a = o("%Function.prototype.call%"),
                                s = o("%Reflect.apply%", !0) || n.call(a, i),
                                c = o("%Object.getOwnPropertyDescriptor%", !0),
                                u = o("%Object.defineProperty%", !0),
                                l = o("%Math.max%");
                            if (u) try {
                                u({}, "a", {
                                    value: 1
                                })
                            } catch (e) {
                                u = null
                            }
                            e.exports = function(e) {
                                var t = s(n, a, arguments);
                                return c && u && c(t, "length").configurable && u(t, "length", {
                                    value: 1 + l(0, e.length - (arguments.length - 1))
                                }), t
                            };
                            var d = function() {
                                return s(n, i, arguments)
                            };
                            u ? u(e.exports, "apply", {
                                value: d
                            }) : e.exports.apply = d
                        },
                        69: function(e, t, r) {
                            "use strict";
                            var n = r(935),
                                o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                                i = Object.prototype.toString,
                                a = Array.prototype.concat,
                                s = Object.defineProperty,
                                c = s && function() {
                                    var e = {};
                                    try {
                                        for (var t in s(e, "x", {
                                                enumerable: !1,
                                                value: e
                                            }), e) return !1;
                                        return e.x === e
                                    } catch (e) {
                                        return !1
                                    }
                                }(),
                                u = function(e, t, r, n) {
                                    (!(t in e) || "function" == typeof n && "[object Function]" === i.call(n) && n()) && (c ? s(e, t, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: r,
                                        writable: !0
                                    }) : e[t] = r)
                                },
                                l = function(e, t) {
                                    var r = arguments.length > 2 ? arguments[2] : {},
                                        i = n(t);
                                    o && (i = a.call(i, Object.getOwnPropertySymbols(t)));
                                    for (var s = 0; s < i.length; s += 1) u(e, i[s], t[i[s]], r[i[s]])
                                };
                            l.supportsDescriptors = !!c, e.exports = l
                        },
                        604: function(e) {
                            "use strict";

                            function t(e, t) {
                                if (null == e) throw TypeError("Cannot convert first argument to object");
                                for (var r = Object(e), n = 1; n < arguments.length; n++) {
                                    var o = arguments[n];
                                    if (null != o)
                                        for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                                            var c = i[a],
                                                u = Object.getOwnPropertyDescriptor(o, c);
                                            void 0 !== u && u.enumerable && (r[c] = o[c])
                                        }
                                }
                                return r
                            }
                            e.exports = {
                                assign: t,
                                polyfill: function() {
                                    Object.assign || Object.defineProperty(Object, "assign", {
                                        enumerable: !1,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            }
                        },
                        144: function(e) {
                            var t = Object.prototype.hasOwnProperty,
                                r = Object.prototype.toString;
                            e.exports = function(e, n, o) {
                                if ("[object Function]" !== r.call(n)) throw TypeError("iterator must be a function");
                                var i = e.length;
                                if (i === +i)
                                    for (var a = 0; a < i; a++) n.call(o, e[a], a, e);
                                else
                                    for (var s in e) t.call(e, s) && n.call(o, e[s], s, e)
                            }
                        },
                        426: function(e) {
                            "use strict";
                            var t = Array.prototype.slice,
                                r = Object.prototype.toString;
                            e.exports = function(e) {
                                var n, o = this;
                                if ("function" != typeof o || "[object Function]" !== r.call(o)) throw TypeError("Function.prototype.bind called on incompatible " + o);
                                for (var i = t.call(arguments, 1), a = Math.max(0, o.length - i.length), s = [], c = 0; c < a; c++) s.push("$" + c);
                                if (n = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                                        if (!(this instanceof n)) return o.apply(e, i.concat(t.call(arguments)));
                                        var r = o.apply(this, i.concat(t.call(arguments)));
                                        return Object(r) === r ? r : this
                                    }), o.prototype) {
                                    var u = function() {};
                                    u.prototype = o.prototype, n.prototype = new u, u.prototype = null
                                }
                                return n
                            }
                        },
                        174: function(e, t, r) {
                            "use strict";
                            var n = r(426);
                            e.exports = Function.prototype.bind || n
                        },
                        500: function(e, t, r) {
                            "use strict";
                            var n, o = SyntaxError,
                                i = Function,
                                a = TypeError,
                                s = function(e) {
                                    try {
                                        return i('"use strict"; return (' + e + ").constructor;")()
                                    } catch (e) {}
                                },
                                c = Object.getOwnPropertyDescriptor;
                            if (c) try {
                                c({}, "")
                            } catch (e) {
                                c = null
                            }
                            var u = function() {
                                    throw new a
                                },
                                l = c ? function() {
                                    try {
                                        return arguments.callee, u
                                    } catch (e) {
                                        try {
                                            return c(arguments, "callee").get
                                        } catch (e) {
                                            return u
                                        }
                                    }
                                }() : u,
                                d = r(115)(),
                                f = Object.getPrototypeOf || function(e) {
                                    return e.__proto__
                                },
                                p = {},
                                h = "undefined" == typeof Uint8Array ? n : f(Uint8Array),
                                y = {
                                    "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
                                    "%Array%": Array,
                                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
                                    "%ArrayIteratorPrototype%": d ? f([][Symbol.iterator]()) : n,
                                    "%AsyncFromSyncIteratorPrototype%": n,
                                    "%AsyncFunction%": p,
                                    "%AsyncGenerator%": p,
                                    "%AsyncGeneratorFunction%": p,
                                    "%AsyncIteratorPrototype%": p,
                                    "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
                                    "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
                                    "%Boolean%": Boolean,
                                    "%DataView%": "undefined" == typeof DataView ? n : DataView,
                                    "%Date%": Date,
                                    "%decodeURI%": decodeURI,
                                    "%decodeURIComponent%": decodeURIComponent,
                                    "%encodeURI%": encodeURI,
                                    "%encodeURIComponent%": encodeURIComponent,
                                    "%Error%": Error,
                                    "%eval%": eval,
                                    "%EvalError%": EvalError,
                                    "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
                                    "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
                                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
                                    "%Function%": i,
                                    "%GeneratorFunction%": p,
                                    "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
                                    "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
                                    "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
                                    "%isFinite%": isFinite,
                                    "%isNaN%": isNaN,
                                    "%IteratorPrototype%": d ? f(f([][Symbol.iterator]())) : n,
                                    "%JSON%": "object" == typeof JSON ? JSON : n,
                                    "%Map%": "undefined" == typeof Map ? n : Map,
                                    "%MapIteratorPrototype%": "undefined" != typeof Map && d ? f((new Map)[Symbol.iterator]()) : n,
                                    "%Math%": Math,
                                    "%Number%": Number,
                                    "%Object%": Object,
                                    "%parseFloat%": parseFloat,
                                    "%parseInt%": parseInt,
                                    "%Promise%": "undefined" == typeof Promise ? n : Promise,
                                    "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
                                    "%RangeError%": RangeError,
                                    "%ReferenceError%": ReferenceError,
                                    "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
                                    "%RegExp%": RegExp,
                                    "%Set%": "undefined" == typeof Set ? n : Set,
                                    "%SetIteratorPrototype%": "undefined" != typeof Set && d ? f((new Set)[Symbol.iterator]()) : n,
                                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                                    "%String%": String,
                                    "%StringIteratorPrototype%": d ? f("" [Symbol.iterator]()) : n,
                                    "%Symbol%": d ? Symbol : n,
                                    "%SyntaxError%": o,
                                    "%ThrowTypeError%": l,
                                    "%TypedArray%": h,
                                    "%TypeError%": a,
                                    "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
                                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                                    "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
                                    "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
                                    "%URIError%": URIError,
                                    "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
                                    "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
                                    "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
                                },
                                g = function e(t) {
                                    var r;
                                    if ("%AsyncFunction%" === t) r = s("async function () {}");
                                    else if ("%GeneratorFunction%" === t) r = s("function* () {}");
                                    else if ("%AsyncGeneratorFunction%" === t) r = s("async function* () {}");
                                    else if ("%AsyncGenerator%" === t) {
                                        var n = e("%AsyncGeneratorFunction%");
                                        n && (r = n.prototype)
                                    } else if ("%AsyncIteratorPrototype%" === t) {
                                        var o = e("%AsyncGenerator%");
                                        o && (r = f(o.prototype))
                                    }
                                    return y[t] = r, r
                                },
                                m = {
                                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                                    "%ArrayPrototype%": ["Array", "prototype"],
                                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                                    "%BooleanPrototype%": ["Boolean", "prototype"],
                                    "%DataViewPrototype%": ["DataView", "prototype"],
                                    "%DatePrototype%": ["Date", "prototype"],
                                    "%ErrorPrototype%": ["Error", "prototype"],
                                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                                    "%FunctionPrototype%": ["Function", "prototype"],
                                    "%Generator%": ["GeneratorFunction", "prototype"],
                                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                                    "%JSONParse%": ["JSON", "parse"],
                                    "%JSONStringify%": ["JSON", "stringify"],
                                    "%MapPrototype%": ["Map", "prototype"],
                                    "%NumberPrototype%": ["Number", "prototype"],
                                    "%ObjectPrototype%": ["Object", "prototype"],
                                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                                    "%PromisePrototype%": ["Promise", "prototype"],
                                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                                    "%Promise_all%": ["Promise", "all"],
                                    "%Promise_reject%": ["Promise", "reject"],
                                    "%Promise_resolve%": ["Promise", "resolve"],
                                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                                    "%RegExpPrototype%": ["RegExp", "prototype"],
                                    "%SetPrototype%": ["Set", "prototype"],
                                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                                    "%StringPrototype%": ["String", "prototype"],
                                    "%SymbolPrototype%": ["Symbol", "prototype"],
                                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                                    "%URIErrorPrototype%": ["URIError", "prototype"],
                                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                                },
                                b = r(174),
                                v = r(101),
                                _ = b.call(Function.call, Array.prototype.concat),
                                w = b.call(Function.apply, Array.prototype.splice),
                                S = b.call(Function.call, String.prototype.replace),
                                E = b.call(Function.call, String.prototype.slice),
                                A = b.call(Function.call, RegExp.prototype.exec),
                                k = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                                O = /\\(\\)?/g,
                                P = function(e) {
                                    var t = E(e, 0, 1),
                                        r = E(e, -1);
                                    if ("%" === t && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
                                    if ("%" === r && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
                                    var n = [];
                                    return S(e, k, function(e, t, r, o) {
                                        n[n.length] = r ? S(o, O, "$1") : t || e
                                    }), n
                                },
                                x = function(e, t) {
                                    var r, n = e;
                                    if (v(m, n) && (n = "%" + (r = m[n])[0] + "%"), v(y, n)) {
                                        var i = y[n];
                                        if (i === p && (i = g(n)), void 0 === i && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                                        return {
                                            alias: r,
                                            name: n,
                                            value: i
                                        }
                                    }
                                    throw new o("intrinsic " + e + " does not exist!")
                                };
                            e.exports = function(e, t) {
                                if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
                                if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
                                if (null === A(/^%?[^%]*%?$/g, e)) throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                                var r = P(e),
                                    n = r.length > 0 ? r[0] : "",
                                    i = x("%" + n + "%", t),
                                    s = i.name,
                                    u = i.value,
                                    l = !1,
                                    d = i.alias;
                                d && (n = d[0], w(r, _([0, 1], d)));
                                for (var f = 1, p = !0; f < r.length; f += 1) {
                                    var h = r[f],
                                        g = E(h, 0, 1),
                                        m = E(h, -1);
                                    if (('"' === g || "'" === g || "`" === g || '"' === m || "'" === m || "`" === m) && g !== m) throw new o("property names with quotes must have matching quotes");
                                    if ("constructor" !== h && p || (l = !0), n += "." + h, v(y, s = "%" + n + "%")) u = y[s];
                                    else if (null != u) {
                                        if (!(h in u)) {
                                            if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                                            return
                                        }
                                        if (c && f + 1 >= r.length) {
                                            var b = c(u, h);
                                            u = (p = !!b) && "get" in b && !("originalValue" in b.get) ? b.get : u[h]
                                        } else p = v(u, h), u = u[h];
                                        p && !l && (y[s] = u)
                                    }
                                }
                                return u
                            }
                        },
                        925: function(e, t, r) {
                            "use strict";
                            var n, o = SyntaxError,
                                i = Function,
                                a = TypeError,
                                s = function(e) {
                                    try {
                                        return i('"use strict"; return (' + e + ").constructor;")()
                                    } catch (e) {}
                                },
                                c = Object.getOwnPropertyDescriptor;
                            if (c) try {
                                c({}, "")
                            } catch (e) {
                                c = null
                            }
                            var u = function() {
                                    throw new a
                                },
                                l = c ? function() {
                                    try {
                                        return arguments.callee, u
                                    } catch (e) {
                                        try {
                                            return c(arguments, "callee").get
                                        } catch (e) {
                                            return u
                                        }
                                    }
                                }() : u,
                                d = r(115)(),
                                f = r(504)(),
                                p = Object.getPrototypeOf || (f ? function(e) {
                                    return e.__proto__
                                } : null),
                                h = {},
                                y = "undefined" != typeof Uint8Array && p ? p(Uint8Array) : n,
                                g = {
                                    "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
                                    "%Array%": Array,
                                    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
                                    "%ArrayIteratorPrototype%": d && p ? p([][Symbol.iterator]()) : n,
                                    "%AsyncFromSyncIteratorPrototype%": n,
                                    "%AsyncFunction%": h,
                                    "%AsyncGenerator%": h,
                                    "%AsyncGeneratorFunction%": h,
                                    "%AsyncIteratorPrototype%": h,
                                    "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
                                    "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
                                    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
                                    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
                                    "%Boolean%": Boolean,
                                    "%DataView%": "undefined" == typeof DataView ? n : DataView,
                                    "%Date%": Date,
                                    "%decodeURI%": decodeURI,
                                    "%decodeURIComponent%": decodeURIComponent,
                                    "%encodeURI%": encodeURI,
                                    "%encodeURIComponent%": encodeURIComponent,
                                    "%Error%": Error,
                                    "%eval%": eval,
                                    "%EvalError%": EvalError,
                                    "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
                                    "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
                                    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
                                    "%Function%": i,
                                    "%GeneratorFunction%": h,
                                    "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
                                    "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
                                    "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
                                    "%isFinite%": isFinite,
                                    "%isNaN%": isNaN,
                                    "%IteratorPrototype%": d && p ? p(p([][Symbol.iterator]())) : n,
                                    "%JSON%": "object" == typeof JSON ? JSON : n,
                                    "%Map%": "undefined" == typeof Map ? n : Map,
                                    "%MapIteratorPrototype%": "undefined" != typeof Map && d && p ? p((new Map)[Symbol.iterator]()) : n,
                                    "%Math%": Math,
                                    "%Number%": Number,
                                    "%Object%": Object,
                                    "%parseFloat%": parseFloat,
                                    "%parseInt%": parseInt,
                                    "%Promise%": "undefined" == typeof Promise ? n : Promise,
                                    "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
                                    "%RangeError%": RangeError,
                                    "%ReferenceError%": ReferenceError,
                                    "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
                                    "%RegExp%": RegExp,
                                    "%Set%": "undefined" == typeof Set ? n : Set,
                                    "%SetIteratorPrototype%": "undefined" != typeof Set && d && p ? p((new Set)[Symbol.iterator]()) : n,
                                    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
                                    "%String%": String,
                                    "%StringIteratorPrototype%": d && p ? p("" [Symbol.iterator]()) : n,
                                    "%Symbol%": d ? Symbol : n,
                                    "%SyntaxError%": o,
                                    "%ThrowTypeError%": l,
                                    "%TypedArray%": y,
                                    "%TypeError%": a,
                                    "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
                                    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
                                    "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
                                    "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
                                    "%URIError%": URIError,
                                    "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
                                    "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
                                    "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
                                };
                            if (p) try {
                                null.error
                            } catch (e) {
                                var m = p(p(e));
                                g["%Error.prototype%"] = m
                            }
                            var b = function e(t) {
                                    var r;
                                    if ("%AsyncFunction%" === t) r = s("async function () {}");
                                    else if ("%GeneratorFunction%" === t) r = s("function* () {}");
                                    else if ("%AsyncGeneratorFunction%" === t) r = s("async function* () {}");
                                    else if ("%AsyncGenerator%" === t) {
                                        var n = e("%AsyncGeneratorFunction%");
                                        n && (r = n.prototype)
                                    } else if ("%AsyncIteratorPrototype%" === t) {
                                        var o = e("%AsyncGenerator%");
                                        o && p && (r = p(o.prototype))
                                    }
                                    return g[t] = r, r
                                },
                                v = {
                                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                                    "%ArrayPrototype%": ["Array", "prototype"],
                                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                                    "%BooleanPrototype%": ["Boolean", "prototype"],
                                    "%DataViewPrototype%": ["DataView", "prototype"],
                                    "%DatePrototype%": ["Date", "prototype"],
                                    "%ErrorPrototype%": ["Error", "prototype"],
                                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                                    "%FunctionPrototype%": ["Function", "prototype"],
                                    "%Generator%": ["GeneratorFunction", "prototype"],
                                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                                    "%JSONParse%": ["JSON", "parse"],
                                    "%JSONStringify%": ["JSON", "stringify"],
                                    "%MapPrototype%": ["Map", "prototype"],
                                    "%NumberPrototype%": ["Number", "prototype"],
                                    "%ObjectPrototype%": ["Object", "prototype"],
                                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                                    "%PromisePrototype%": ["Promise", "prototype"],
                                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                                    "%Promise_all%": ["Promise", "all"],
                                    "%Promise_reject%": ["Promise", "reject"],
                                    "%Promise_resolve%": ["Promise", "resolve"],
                                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                                    "%RegExpPrototype%": ["RegExp", "prototype"],
                                    "%SetPrototype%": ["Set", "prototype"],
                                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                                    "%StringPrototype%": ["String", "prototype"],
                                    "%SymbolPrototype%": ["Symbol", "prototype"],
                                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                                    "%URIErrorPrototype%": ["URIError", "prototype"],
                                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                                },
                                _ = r(174),
                                w = r(101),
                                S = _.call(Function.call, Array.prototype.concat),
                                E = _.call(Function.apply, Array.prototype.splice),
                                A = _.call(Function.call, String.prototype.replace),
                                k = _.call(Function.call, String.prototype.slice),
                                O = _.call(Function.call, RegExp.prototype.exec),
                                P = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                                x = /\\(\\)?/g,
                                T = function(e) {
                                    var t = k(e, 0, 1),
                                        r = k(e, -1);
                                    if ("%" === t && "%" !== r) throw new o("invalid intrinsic syntax, expected closing `%`");
                                    if ("%" === r && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
                                    var n = [];
                                    return A(e, P, function(e, t, r, o) {
                                        n[n.length] = r ? A(o, x, "$1") : t || e
                                    }), n
                                },
                                j = function(e, t) {
                                    var r, n = e;
                                    if (w(v, n) && (n = "%" + (r = v[n])[0] + "%"), w(g, n)) {
                                        var i = g[n];
                                        if (i === h && (i = b(n)), void 0 === i && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                                        return {
                                            alias: r,
                                            name: n,
                                            value: i
                                        }
                                    }
                                    throw new o("intrinsic " + e + " does not exist!")
                                };
                            e.exports = function(e, t) {
                                if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
                                if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
                                if (null === O(/^%?[^%]*%?$/, e)) throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                                var r = T(e),
                                    n = r.length > 0 ? r[0] : "",
                                    i = j("%" + n + "%", t),
                                    s = i.name,
                                    u = i.value,
                                    l = !1,
                                    d = i.alias;
                                d && (n = d[0], E(r, S([0, 1], d)));
                                for (var f = 1, p = !0; f < r.length; f += 1) {
                                    var h = r[f],
                                        y = k(h, 0, 1),
                                        m = k(h, -1);
                                    if (('"' === y || "'" === y || "`" === y || '"' === m || "'" === m || "`" === m) && y !== m) throw new o("property names with quotes must have matching quotes");
                                    if ("constructor" !== h && p || (l = !0), n += "." + h, w(g, s = "%" + n + "%")) u = g[s];
                                    else if (null != u) {
                                        if (!(h in u)) {
                                            if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                                            return
                                        }
                                        if (c && f + 1 >= r.length) {
                                            var b = c(u, h);
                                            u = (p = !!b) && "get" in b && !("originalValue" in b.get) ? b.get : u[h]
                                        } else p = w(u, h), u = u[h];
                                        p && !l && (g[s] = u)
                                    }
                                }
                                return u
                            }
                        },
                        504: function(e) {
                            "use strict";
                            var t = {
                                    foo: {}
                                },
                                r = Object;
                            e.exports = function() {
                                return ({
                                    __proto__: t
                                }).foo === t.foo && !(({
                                    __proto__: null
                                }) instanceof r)
                            }
                        },
                        942: function(e, t, r) {
                            "use strict";
                            var n = "undefined" != typeof Symbol && Symbol,
                                o = r(773);
                            e.exports = function() {
                                return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
                            }
                        },
                        773: function(e) {
                            "use strict";
                            e.exports = function() {
                                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                                if ("symbol" == typeof Symbol.iterator) return !0;
                                var e = {},
                                    t = Symbol("test"),
                                    r = Object(t);
                                if ("string" == typeof t || "[object Symbol]" !== Object.prototype.toString.call(t) || "[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                                for (t in e[t] = 42, e) return !1;
                                if ("function" == typeof Object.keys && 0 !== Object.keys(e).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                                var n = Object.getOwnPropertySymbols(e);
                                if (1 !== n.length || n[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                                    var o = Object.getOwnPropertyDescriptor(e, t);
                                    if (42 !== o.value || !0 !== o.enumerable) return !1
                                }
                                return !0
                            }
                        },
                        115: function(e, t, r) {
                            "use strict";
                            var n = "undefined" != typeof Symbol && Symbol,
                                o = r(832);
                            e.exports = function() {
                                return "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
                            }
                        },
                        832: function(e) {
                            "use strict";
                            e.exports = function() {
                                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                                if ("symbol" == typeof Symbol.iterator) return !0;
                                var e = {},
                                    t = Symbol("test"),
                                    r = Object(t);
                                if ("string" == typeof t || "[object Symbol]" !== Object.prototype.toString.call(t) || "[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                                for (t in e[t] = 42, e) return !1;
                                if ("function" == typeof Object.keys && 0 !== Object.keys(e).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                                var n = Object.getOwnPropertySymbols(e);
                                if (1 !== n.length || n[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                                    var o = Object.getOwnPropertyDescriptor(e, t);
                                    if (42 !== o.value || !0 !== o.enumerable) return !1
                                }
                                return !0
                            }
                        },
                        101: function(e, t, r) {
                            "use strict";
                            var n = r(174);
                            e.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
                        },
                        782: function(e) {
                            "function" == typeof Object.create ? e.exports = function(e, t) {
                                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : e.exports = function(e, t) {
                                if (t) {
                                    e.super_ = t;
                                    var r = function() {};
                                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                                }
                            }
                        },
                        157: function(e) {
                            "use strict";
                            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                                r = Object.prototype.toString,
                                n = function(e) {
                                    return (!t || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === r.call(e)
                                },
                                o = function(e) {
                                    return !!n(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== r.call(e) && "[object Function]" === r.call(e.callee)
                                },
                                i = function() {
                                    return n(arguments)
                                }();
                            n.isLegacyArguments = o, e.exports = i ? n : o
                        },
                        391: function(e) {
                            "use strict";
                            var t = Object.prototype.toString,
                                r = Function.prototype.toString,
                                n = /^\s*(?:function)?\*/,
                                o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                                i = Object.getPrototypeOf,
                                a = function() {
                                    if (!o) return !1;
                                    try {
                                        return Function("return function*() {}")()
                                    } catch (e) {}
                                }(),
                                s = a ? i(a) : {};
                            e.exports = function(e) {
                                return "function" == typeof e && (!!n.test(r.call(e)) || (o ? i(e) === s : "[object GeneratorFunction]" === t.call(e)))
                            }
                        },
                        460: function(e) {
                            "use strict";
                            e.exports = function(e) {
                                return e != e
                            }
                        },
                        718: function(e, t, r) {
                            "use strict";
                            var n = r(139),
                                o = r(69),
                                i = r(460),
                                a = r(625),
                                s = r(171),
                                c = n(a(), Number);
                            o(c, {
                                getPolyfill: a,
                                implementation: i,
                                shim: s
                            }), e.exports = c
                        },
                        625: function(e, t, r) {
                            "use strict";
                            var n = r(460);
                            e.exports = function() {
                                return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n
                            }
                        },
                        171: function(e, t, r) {
                            "use strict";
                            var n = r(69),
                                o = r(625);
                            e.exports = function() {
                                var e = o();
                                return n(Number, {
                                    isNaN: e
                                }, {
                                    isNaN: function() {
                                        return Number.isNaN !== e
                                    }
                                }), e
                            }
                        },
                        994: function(e, t, n) {
                            "use strict";
                            var o = n(144),
                                i = n(349),
                                a = n(256),
                                s = a("Object.prototype.toString"),
                                c = n(942)() && "symbol" == typeof Symbol.toStringTag,
                                u = i(),
                                l = a("Array.prototype.indexOf", !0) || function(e, t) {
                                    for (var r = 0; r < e.length; r += 1)
                                        if (e[r] === t) return r;
                                    return -1
                                },
                                d = a("String.prototype.slice"),
                                f = {},
                                p = n(24),
                                h = Object.getPrototypeOf;
                            c && p && h && o(u, function(e) {
                                var t = new r.g[e];
                                if (!(Symbol.toStringTag in t)) throw EvalError("this engine has support for Symbol.toStringTag, but " + e + " does not have the property! Please report this.");
                                var n = h(t),
                                    o = p(n, Symbol.toStringTag);
                                o || (o = p(h(n), Symbol.toStringTag)), f[e] = o.get
                            });
                            var y = function(e) {
                                var t = !1;
                                return o(f, function(r, n) {
                                    if (!t) try {
                                        t = r.call(e) === n
                                    } catch (e) {}
                                }), t
                            };
                            e.exports = function(e) {
                                return !!e && "object" == typeof e && (c ? !!p && y(e) : l(u, d(s(e), 8, -1)) > -1)
                            }
                        },
                        208: function(e) {
                            "use strict";
                            var t = function(e) {
                                return e != e
                            };
                            e.exports = function(e, r) {
                                return 0 === e && 0 === r ? 1 / e == 1 / r : !!(e === r || t(e) && t(r))
                            }
                        },
                        579: function(e, t, r) {
                            "use strict";
                            var n;
                            if (!Object.keys) {
                                var o = Object.prototype.hasOwnProperty,
                                    i = Object.prototype.toString,
                                    a = r(412),
                                    s = Object.prototype.propertyIsEnumerable,
                                    c = !s.call({
                                        toString: null
                                    }, "toString"),
                                    u = s.call(function() {}, "prototype"),
                                    l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                                    d = function(e) {
                                        var t = e.constructor;
                                        return t && t.prototype === e
                                    },
                                    f = {
                                        $applicationCache: !0,
                                        $console: !0,
                                        $external: !0,
                                        $frame: !0,
                                        $frameElement: !0,
                                        $frames: !0,
                                        $innerHeight: !0,
                                        $innerWidth: !0,
                                        $onmozfullscreenchange: !0,
                                        $onmozfullscreenerror: !0,
                                        $outerHeight: !0,
                                        $outerWidth: !0,
                                        $pageXOffset: !0,
                                        $pageYOffset: !0,
                                        $parent: !0,
                                        $scrollLeft: !0,
                                        $scrollTop: !0,
                                        $scrollX: !0,
                                        $scrollY: !0,
                                        $self: !0,
                                        $webkitIndexedDB: !0,
                                        $webkitStorageInfo: !0,
                                        $window: !0
                                    },
                                    p = function() {
                                        if ("undefined" == typeof window) return !1;
                                        for (var e in window) try {
                                            if (!f["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                                                d(window[e])
                                            } catch (e) {
                                                return !0
                                            }
                                        } catch (e) {
                                            return !0
                                        }
                                        return !1
                                    }(),
                                    h = function(e) {
                                        if ("undefined" == typeof window || !p) return d(e);
                                        try {
                                            return d(e)
                                        } catch (e) {
                                            return !1
                                        }
                                    };
                                n = function(e) {
                                    var t = null !== e && "object" == typeof e,
                                        r = "[object Function]" === i.call(e),
                                        n = a(e),
                                        s = t && "[object String]" === i.call(e),
                                        d = [];
                                    if (!t && !r && !n) throw TypeError("Object.keys called on a non-object");
                                    var f = u && r;
                                    if (s && e.length > 0 && !o.call(e, 0))
                                        for (var p = 0; p < e.length; ++p) d.push(String(p));
                                    if (n && e.length > 0)
                                        for (var y = 0; y < e.length; ++y) d.push(String(y));
                                    else
                                        for (var g in e) !(f && "prototype" === g) && o.call(e, g) && d.push(String(g));
                                    if (c)
                                        for (var m = h(e), b = 0; b < l.length; ++b) !(m && "constructor" === l[b]) && o.call(e, l[b]) && d.push(l[b]);
                                    return d
                                }
                            }
                            e.exports = n
                        },
                        935: function(e, t, r) {
                            "use strict";
                            var n = Array.prototype.slice,
                                o = r(412),
                                i = Object.keys,
                                a = i ? function(e) {
                                    return i(e)
                                } : r(579),
                                s = Object.keys;
                            a.shim = function() {
                                return Object.keys ? ! function() {
                                    var e = Object.keys(arguments);
                                    return e && e.length === arguments.length
                                }(1, 2) && (Object.keys = function(e) {
                                    return o(e) ? s(n.call(e)) : s(e)
                                }) : Object.keys = a, Object.keys || a
                            }, e.exports = a
                        },
                        412: function(e) {
                            "use strict";
                            var t = Object.prototype.toString;
                            e.exports = function(e) {
                                var r = t.call(e),
                                    n = "[object Arguments]" === r;
                                return n || (n = "[object Array]" !== r && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), n
                            }
                        },
                        369: function(e) {
                            e.exports = function(e) {
                                return e instanceof o
                            }
                        },
                        584: function(e, t, r) {
                            "use strict";
                            var n = r(157),
                                o = r(391),
                                i = r(490),
                                a = r(994);

                            function s(e) {
                                return e.call.bind(e)
                            }
                            var c = "undefined" != typeof BigInt,
                                u = "undefined" != typeof Symbol,
                                l = s(Object.prototype.toString),
                                d = s(Number.prototype.valueOf),
                                f = s(String.prototype.valueOf),
                                p = s(Boolean.prototype.valueOf);
                            if (c) var h = s(BigInt.prototype.valueOf);
                            if (u) var y = s(Symbol.prototype.valueOf);

                            function g(e, t) {
                                if ("object" != typeof e) return !1;
                                try {
                                    return t(e), !0
                                } catch (e) {
                                    return !1
                                }
                            }

                            function m(e) {
                                return "[object Map]" === l(e)
                            }

                            function b(e) {
                                return "[object Set]" === l(e)
                            }

                            function v(e) {
                                return "[object WeakMap]" === l(e)
                            }

                            function _(e) {
                                return "[object WeakSet]" === l(e)
                            }

                            function w(e) {
                                return "[object ArrayBuffer]" === l(e)
                            }

                            function S(e) {
                                return "undefined" != typeof ArrayBuffer && (w.working ? w(e) : e instanceof ArrayBuffer)
                            }

                            function E(e) {
                                return "[object DataView]" === l(e)
                            }

                            function A(e) {
                                return "undefined" != typeof DataView && (E.working ? E(e) : e instanceof DataView)
                            }
                            t.isArgumentsObject = n, t.isGeneratorFunction = o, t.isTypedArray = a, t.isPromise = function(e) {
                                return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
                            }, t.isArrayBufferView = function(e) {
                                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || A(e)
                            }, t.isUint8Array = function(e) {
                                return "Uint8Array" === i(e)
                            }, t.isUint8ClampedArray = function(e) {
                                return "Uint8ClampedArray" === i(e)
                            }, t.isUint16Array = function(e) {
                                return "Uint16Array" === i(e)
                            }, t.isUint32Array = function(e) {
                                return "Uint32Array" === i(e)
                            }, t.isInt8Array = function(e) {
                                return "Int8Array" === i(e)
                            }, t.isInt16Array = function(e) {
                                return "Int16Array" === i(e)
                            }, t.isInt32Array = function(e) {
                                return "Int32Array" === i(e)
                            }, t.isFloat32Array = function(e) {
                                return "Float32Array" === i(e)
                            }, t.isFloat64Array = function(e) {
                                return "Float64Array" === i(e)
                            }, t.isBigInt64Array = function(e) {
                                return "BigInt64Array" === i(e)
                            }, t.isBigUint64Array = function(e) {
                                return "BigUint64Array" === i(e)
                            }, m.working = "undefined" != typeof Map && m(new Map), t.isMap = function(e) {
                                return "undefined" != typeof Map && (m.working ? m(e) : e instanceof Map)
                            }, b.working = "undefined" != typeof Set && b(new Set), t.isSet = function(e) {
                                return "undefined" != typeof Set && (b.working ? b(e) : e instanceof Set)
                            }, v.working = "undefined" != typeof WeakMap && v(new WeakMap), t.isWeakMap = function(e) {
                                return "undefined" != typeof WeakMap && (v.working ? v(e) : e instanceof WeakMap)
                            }, _.working = "undefined" != typeof WeakSet && _(new WeakSet), t.isWeakSet = function(e) {
                                return _(e)
                            }, w.working = "undefined" != typeof ArrayBuffer && w(new ArrayBuffer), t.isArrayBuffer = S, E.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && E(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = A;
                            var k = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

                            function O(e) {
                                return "[object SharedArrayBuffer]" === l(e)
                            }

                            function P(e) {
                                return void 0 !== k && (void 0 === O.working && (O.working = O(new k)), O.working ? O(e) : e instanceof k)
                            }

                            function x(e) {
                                return g(e, d)
                            }

                            function T(e) {
                                return g(e, f)
                            }

                            function j(e) {
                                return g(e, p)
                            }

                            function R(e) {
                                return c && g(e, h)
                            }

                            function C(e) {
                                return u && g(e, y)
                            }
                            t.isSharedArrayBuffer = P, t.isAsyncFunction = function(e) {
                                return "[object AsyncFunction]" === l(e)
                            }, t.isMapIterator = function(e) {
                                return "[object Map Iterator]" === l(e)
                            }, t.isSetIterator = function(e) {
                                return "[object Set Iterator]" === l(e)
                            }, t.isGeneratorObject = function(e) {
                                return "[object Generator]" === l(e)
                            }, t.isWebAssemblyCompiledModule = function(e) {
                                return "[object WebAssembly.Module]" === l(e)
                            }, t.isNumberObject = x, t.isStringObject = T, t.isBooleanObject = j, t.isBigIntObject = R, t.isSymbolObject = C, t.isBoxedPrimitive = function(e) {
                                return x(e) || T(e) || j(e) || R(e) || C(e)
                            }, t.isAnyArrayBuffer = function(e) {
                                return "undefined" != typeof Uint8Array && (S(e) || P(e))
                            }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
                                Object.defineProperty(t, e, {
                                    enumerable: !1,
                                    value: function() {
                                        throw Error(e + " is not supported in userland")
                                    }
                                })
                            })
                        },
                        177: function(e, t, r) {
                            var o = Object.getOwnPropertyDescriptors || function(e) {
                                    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                                    return r
                                },
                                i = /%[sdj%]/g;
                            t.format = function(e) {
                                if (!v(e)) {
                                    for (var t = [], r = 0; r < arguments.length; r++) t.push(u(arguments[r]));
                                    return t.join(" ")
                                }
                                for (var r = 1, n = arguments, o = n.length, a = String(e).replace(i, function(e) {
                                        if ("%%" === e) return "%";
                                        if (r >= o) return e;
                                        switch (e) {
                                            case "%s":
                                                return String(n[r++]);
                                            case "%d":
                                                return Number(n[r++]);
                                            case "%j":
                                                try {
                                                    return JSON.stringify(n[r++])
                                                } catch (e) {
                                                    return "[Circular]"
                                                }
                                            default:
                                                return e
                                        }
                                    }), s = n[r]; r < o; s = n[++r]) m(s) || !S(s) ? a += " " + s : a += " " + u(s);
                                return a
                            }, t.deprecate = function(e, r) {
                                if (void 0 !== n && !0 === n.noDeprecation) return e;
                                if (void 0 === n) return function() {
                                    return t.deprecate(e, r).apply(this, arguments)
                                };
                                var o = !1;
                                return function() {
                                    if (!o) {
                                        if (n.throwDeprecation) throw Error(r);
                                        n.traceDeprecation ? console.trace(r) : console.error(r), o = !0
                                    }
                                    return e.apply(this, arguments)
                                }
                            };
                            var a = {},
                                s = /^$/;
                            if (n.env.NODE_DEBUG) {
                                var c = n.env.NODE_DEBUG;
                                s = RegExp("^" + (c = c.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i")
                            }

                            function u(e, r) {
                                var n = {
                                    seen: [],
                                    stylize: d
                                };
                                return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), g(r) ? n.showHidden = r : r && t._extend(n, r), _(n.showHidden) && (n.showHidden = !1), _(n.depth) && (n.depth = 2), _(n.colors) && (n.colors = !1), _(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = l), f(n, e, n.depth)
                            }

                            function l(e, t) {
                                var r = u.styles[t];
                                return r ? "\x1b[" + u.colors[r][0] + "m" + e + "\x1b[" + u.colors[r][1] + "m" : e
                            }

                            function d(e, t) {
                                return e
                            }

                            function f(e, r, n) {
                                if (e.customInspect && r && k(r.inspect) && r.inspect !== t.inspect && !(r.constructor && r.constructor.prototype === r)) {
                                    var o, i, a, s, c, u = r.inspect(n, e);
                                    return v(u) || (u = f(e, u, n)), u
                                }
                                var l = function(e, t) {
                                    if (_(t)) return e.stylize("undefined", "undefined");
                                    if (v(t)) {
                                        var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                        return e.stylize(r, "string")
                                    }
                                    return b(t) ? e.stylize("" + t, "number") : g(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
                                }(e, r);
                                if (l) return l;
                                var d = Object.keys(r),
                                    S = (s = {}, d.forEach(function(e, t) {
                                        s[e] = !0
                                    }), s);
                                if (e.showHidden && (d = Object.getOwnPropertyNames(r)), A(r) && (d.indexOf("message") >= 0 || d.indexOf("description") >= 0)) return p(r);
                                if (0 === d.length) {
                                    if (k(r)) {
                                        var O = r.name ? ": " + r.name : "";
                                        return e.stylize("[Function" + O + "]", "special")
                                    }
                                    if (w(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                                    if (E(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                                    if (A(r)) return p(r)
                                }
                                var P = "",
                                    x = !1,
                                    j = ["{", "}"];
                                return (y(r) && (x = !0, j = ["[", "]"]), k(r) && (P = " [Function" + (r.name ? ": " + r.name : "") + "]"), w(r) && (P = " " + RegExp.prototype.toString.call(r)), E(r) && (P = " " + Date.prototype.toUTCString.call(r)), A(r) && (P = " " + p(r)), 0 !== d.length || x && 0 != r.length) ? n < 0 ? w(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(r), c = x ? function(e, t, r, n, o) {
                                    for (var i = [], a = 0, s = t.length; a < s; ++a) T(t, String(a)) ? i.push(h(e, t, r, n, String(a), !0)) : i.push("");
                                    return o.forEach(function(o) {
                                        o.match(/^\d+$/) || i.push(h(e, t, r, n, o, !0))
                                    }), i
                                }(e, r, n, S, d) : d.map(function(t) {
                                    return h(e, r, n, S, t, x)
                                }), e.seen.pop(), o = P, i = j, a = 0, c.reduce(function(e, t) {
                                    return a++, t.indexOf("\n") >= 0 && a++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                                }, 0) > 60 ? i[0] + ("" === o ? "" : o + "\n ") + " " + c.join(",\n  ") + " " + i[1] : i[0] + o + " " + c.join(", ") + " " + i[1]) : j[0] + P + j[1]
                            }

                            function p(e) {
                                return "[" + Error.prototype.toString.call(e) + "]"
                            }

                            function h(e, t, r, n, o, i) {
                                var a, s, c;
                                if ((c = Object.getOwnPropertyDescriptor(t, o) || {
                                        value: t[o]
                                    }).get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), T(n, o) || (a = "[" + o + "]"), !s && (0 > e.seen.indexOf(c.value) ? (s = m(r) ? f(e, c.value, null) : f(e, c.value, r - 1)).indexOf("\n") > -1 && (s = i ? s.split("\n").map(function(e) {
                                        return "  " + e
                                    }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                                        return "   " + e
                                    }).join("\n")) : s = e.stylize("[Circular]", "special")), _(a)) {
                                    if (i && o.match(/^\d+$/)) return s;
                                    (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
                                }
                                return a + ": " + s
                            }

                            function y(e) {
                                return Array.isArray(e)
                            }

                            function g(e) {
                                return "boolean" == typeof e
                            }

                            function m(e) {
                                return null === e
                            }

                            function b(e) {
                                return "number" == typeof e
                            }

                            function v(e) {
                                return "string" == typeof e
                            }

                            function _(e) {
                                return void 0 === e
                            }

                            function w(e) {
                                return S(e) && "[object RegExp]" === O(e)
                            }

                            function S(e) {
                                return "object" == typeof e && null !== e
                            }

                            function E(e) {
                                return S(e) && "[object Date]" === O(e)
                            }

                            function A(e) {
                                return S(e) && ("[object Error]" === O(e) || e instanceof Error)
                            }

                            function k(e) {
                                return "function" == typeof e
                            }

                            function O(e) {
                                return Object.prototype.toString.call(e)
                            }

                            function P(e) {
                                return e < 10 ? "0" + e.toString(10) : e.toString(10)
                            }
                            t.debuglog = function(e) {
                                if (!a[e = e.toUpperCase()]) {
                                    if (s.test(e)) {
                                        var r = n.pid;
                                        a[e] = function() {
                                            var n = t.format.apply(t, arguments);
                                            console.error("%s %d: %s", e, r, n)
                                        }
                                    } else a[e] = function() {}
                                }
                                return a[e]
                            }, t.inspect = u, u.colors = {
                                bold: [1, 22],
                                italic: [3, 23],
                                underline: [4, 24],
                                inverse: [7, 27],
                                white: [37, 39],
                                grey: [90, 39],
                                black: [30, 39],
                                blue: [34, 39],
                                cyan: [36, 39],
                                green: [32, 39],
                                magenta: [35, 39],
                                red: [31, 39],
                                yellow: [33, 39]
                            }, u.styles = {
                                special: "cyan",
                                number: "yellow",
                                boolean: "yellow",
                                undefined: "grey",
                                null: "bold",
                                string: "green",
                                date: "magenta",
                                regexp: "red"
                            }, t.types = r(584), t.isArray = y, t.isBoolean = g, t.isNull = m, t.isNullOrUndefined = function(e) {
                                return null == e
                            }, t.isNumber = b, t.isString = v, t.isSymbol = function(e) {
                                return "symbol" == typeof e
                            }, t.isUndefined = _, t.isRegExp = w, t.types.isRegExp = w, t.isObject = S, t.isDate = E, t.types.isDate = E, t.isError = A, t.types.isNativeError = A, t.isFunction = k, t.isPrimitive = function(e) {
                                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                            }, t.isBuffer = r(369);
                            var x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                            function T(e, t) {
                                return Object.prototype.hasOwnProperty.call(e, t)
                            }
                            t.log = function() {
                                var e, r;
                                console.log("%s - %s", (r = [P((e = new Date).getHours()), P(e.getMinutes()), P(e.getSeconds())].join(":"), [e.getDate(), x[e.getMonth()], r].join(" ")), t.format.apply(t, arguments))
                            }, t.inherits = r(782), t._extend = function(e, t) {
                                if (!t || !S(t)) return e;
                                for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                                return e
                            };
                            var j = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

                            function R(e, t) {
                                if (!e) {
                                    var r = Error("Promise was rejected with a falsy value");
                                    r.reason = e, e = r
                                }
                                return t(e)
                            }
                            t.promisify = function(e) {
                                if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
                                if (j && e[j]) {
                                    var t = e[j];
                                    if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
                                    return Object.defineProperty(t, j, {
                                        value: t,
                                        enumerable: !1,
                                        writable: !1,
                                        configurable: !0
                                    }), t
                                }

                                function t() {
                                    for (var t, r, n = new Promise(function(e, n) {
                                            t = e, r = n
                                        }), o = [], i = 0; i < arguments.length; i++) o.push(arguments[i]);
                                    o.push(function(e, n) {
                                        e ? r(e) : t(n)
                                    });
                                    try {
                                        e.apply(this, o)
                                    } catch (e) {
                                        r(e)
                                    }
                                    return n
                                }
                                return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), j && Object.defineProperty(t, j, {
                                    value: t,
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                }), Object.defineProperties(t, o(e))
                            }, t.promisify.custom = j, t.callbackify = function(e) {
                                if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');

                                function t() {
                                    for (var t = [], r = 0; r < arguments.length; r++) t.push(arguments[r]);
                                    var o = t.pop();
                                    if ("function" != typeof o) throw TypeError("The last argument must be of type Function");
                                    var i = this,
                                        a = function() {
                                            return o.apply(i, arguments)
                                        };
                                    e.apply(this, t).then(function(e) {
                                        n.nextTick(a.bind(null, null, e))
                                    }, function(e) {
                                        n.nextTick(R.bind(null, e, a))
                                    })
                                }
                                return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, o(e)), t
                            }
                        },
                        490: function(e, t, n) {
                            "use strict";
                            var o = n(144),
                                i = n(349),
                                a = n(256),
                                s = a("Object.prototype.toString"),
                                c = n(942)() && "symbol" == typeof Symbol.toStringTag,
                                u = i(),
                                l = a("String.prototype.slice"),
                                d = {},
                                f = n(24),
                                p = Object.getPrototypeOf;
                            c && f && p && o(u, function(e) {
                                if ("function" == typeof r.g[e]) {
                                    var t = new r.g[e];
                                    if (!(Symbol.toStringTag in t)) throw EvalError("this engine has support for Symbol.toStringTag, but " + e + " does not have the property! Please report this.");
                                    var n = p(t),
                                        o = f(n, Symbol.toStringTag);
                                    o || (o = f(p(n), Symbol.toStringTag)), d[e] = o.get
                                }
                            });
                            var h = function(e) {
                                    var t = !1;
                                    return o(d, function(r, n) {
                                        if (!t) try {
                                            var o = r.call(e);
                                            o === n && (t = o)
                                        } catch (e) {}
                                    }), t
                                },
                                y = n(994);
                            e.exports = function(e) {
                                return !!y(e) && (c ? h(e) : l(s(e), 8, -1))
                            }
                        },
                        349: function(e, t, n) {
                            "use strict";
                            var o = n(992);
                            e.exports = function() {
                                return o(["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], function(e) {
                                    return "function" == typeof r.g[e]
                                })
                            }
                        },
                        24: function(e, t, r) {
                            "use strict";
                            var n = r(500)("%Object.getOwnPropertyDescriptor%", !0);
                            if (n) try {
                                n([], "length")
                            } catch (e) {
                                n = null
                            }
                            e.exports = n
                        }
                    },
                    i = {};

                function a(e) {
                    var r = i[e];
                    if (void 0 !== r) return r.exports;
                    var n = i[e] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        t[e](n, n.exports, a), o = !1
                    } finally {
                        o && delete i[e]
                    }
                    return n.exports
                }
                a.ab = "//";
                var s = a(167);
                e.exports = s
            }()
        },
        78428: function(e, t, r) {
            ! function() {
                var t = {
                        528: function(e, t, r) {
                            var n = r(685),
                                o = r(310),
                                i = e.exports;
                            for (var a in n) n.hasOwnProperty(a) && (i[a] = n[a]);

                            function s(e) {
                                if ("string" == typeof e && (e = o.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
                                return e
                            }
                            i.request = function(e, t) {
                                return e = s(e), n.request.call(this, e, t)
                            }, i.get = function(e, t) {
                                return e = s(e), n.get.call(this, e, t)
                            }
                        },
                        685: function(e) {
                            "use strict";
                            e.exports = r(22321)
                        },
                        310: function(e) {
                            "use strict";
                            e.exports = r(11987)
                        }
                    },
                    n = {};

                function o(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var i = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](i, i.exports, o), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return i.exports
                }
                o.ab = "//";
                var i = o(528);
                e.exports = i
            }()
        },
        11987: function(e, t, r) {
            ! function() {
                var t = {
                        452: function(e) {
                            "use strict";
                            e.exports = r(97334)
                        }
                    },
                    n = {};

                function o(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var i = n[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](i, i.exports, o), a = !1
                    } finally {
                        a && delete n[e]
                    }
                    return i.exports
                }
                o.ab = "//";
                var i = {};
                ! function() {
                    var e, t = (e = o(452)) && "object" == typeof e && "default" in e ? e.default : e,
                        r = /https?|ftp|gopher|file/;

                    function n(e) {
                        "string" == typeof e && (e = m(e));
                        var n, o, i, a, s, c, u, l, d, f = (o = (n = e).auth, i = n.hostname, a = n.protocol || "", s = n.pathname || "", c = n.hash || "", u = n.query || "", l = !1, o = o ? encodeURIComponent(o).replace(/%3A/i, ":") + "@" : "", n.host ? l = o + n.host : i && (l = o + (~i.indexOf(":") ? "[" + i + "]" : i), n.port && (l += ":" + n.port)), u && "object" == typeof u && (u = t.encode(u)), d = n.search || u && "?" + u || "", a && ":" !== a.substr(-1) && (a += ":"), n.slashes || (!a || r.test(a)) && !1 !== l ? (l = "//" + (l || ""), s && "/" !== s[0] && (s = "/" + s)) : l || (l = ""), c && "#" !== c[0] && (c = "#" + c), d && "?" !== d[0] && (d = "?" + d), {
                            protocol: a,
                            host: l,
                            pathname: s = s.replace(/[?#]/g, encodeURIComponent),
                            search: d = d.replace("#", "%23"),
                            hash: c
                        });
                        return "" + f.protocol + f.host + f.pathname + f.search + f.hash
                    }
                    var a = "http://",
                        s = a + "w.w",
                        c = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                        u = /https?|ftp|gopher|file/;

                    function l(e, t) {
                        var r = "string" == typeof e ? m(e) : e;
                        e = "object" == typeof e ? n(e) : e;
                        var o = m(t),
                            i = "";
                        r.protocol && !r.slashes && (i = r.protocol, e = e.replace(r.protocol, ""), i += "/" === t[0] || "/" === e[0] ? "/" : ""), i && o.protocol && (i = "", o.slashes || (i = o.protocol, t = t.replace(o.protocol, "")));
                        var l = e.match(c);
                        l && !o.protocol && (e = e.substr((i = l[1] + (l[2] || "")).length), /^\/\/[^/]/.test(t) && (i = i.slice(0, -1)));
                        var d = new URL(e, s + "/"),
                            f = new URL(t, d).toString().replace(s, ""),
                            p = o.protocol || r.protocol;
                        return p += r.slashes || o.slashes ? "//" : "", !i && p ? f = f.replace(a, p) : i && (f = f.replace(a, "")), u.test(f) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== f.slice(-1) || (f = f.slice(0, -1)), i && (f = i + ("/" === f[0] ? f.substr(1) : f)), f
                    }

                    function d() {}
                    d.prototype.parse = m, d.prototype.format = n, d.prototype.resolve = l, d.prototype.resolveObject = l;
                    var f = /^https?|ftp|gopher|file/,
                        p = /^(.*?)([#?].*)/,
                        h = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                        y = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                        g = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;

                    function m(e, r, o) {
                        if (void 0 === r && (r = !1), void 0 === o && (o = !1), e && "object" == typeof e && e instanceof d) return e;
                        var i = (e = e.trim()).match(p);
                        e = i ? i[1].replace(/\\/g, "/") + i[2] : e.replace(/\\/g, "/"), g.test(e) && "/" !== e.slice(-1) && (e += "/");
                        var a = !/(^javascript)/.test(e) && e.match(h),
                            c = y.test(e),
                            u = "";
                        a && (f.test(a[1]) || (u = a[1].toLowerCase(), e = "" + a[2] + a[3]), a[2] || (c = !1, f.test(a[1]) ? (u = a[1], e = "" + a[3]) : e = "//" + a[3]), 3 !== a[2].length && 1 !== a[2].length || (u = a[1], e = "/" + a[3]));
                        var l, m = (i ? i[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                            b = m && m[1],
                            v = new d,
                            _ = "",
                            w = "";
                        try {
                            l = new URL(e)
                        } catch (t) {
                            _ = t, u || o || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (w = "/", e = e.substr(1));
                            try {
                                l = new URL(e, s)
                            } catch (e) {
                                return v.protocol = u, v.href = u, v
                            }
                        }
                        v.slashes = c && !w, v.host = "w.w" === l.host ? "" : l.host, v.hostname = "w.w" === l.hostname ? "" : l.hostname.replace(/(\[|\])/g, ""), v.protocol = _ ? u || null : l.protocol, v.search = l.search.replace(/\\/g, "%5C"), v.hash = l.hash.replace(/\\/g, "%5C");
                        var S = e.split("#");
                        !v.search && ~S[0].indexOf("?") && (v.search = "?"), v.hash || "" !== S[1] || (v.hash = "#"), v.query = r ? t.decode(l.search.substr(1)) : v.search.substr(1), v.pathname = w + (a ? l.pathname.replace(/['^|`]/g, function(e) {
                            return "%" + e.charCodeAt().toString(16).toUpperCase()
                        }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                            try {
                                return decodeURIComponent(t).split("").map(function(e) {
                                    var t = e.charCodeAt();
                                    return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase()
                                }).join("")
                            } catch (e) {
                                return t
                            }
                        }) : l.pathname), "about:" === v.protocol && "blank" === v.pathname && (v.protocol = "", v.pathname = ""), _ && "/" !== e[0] && (v.pathname = v.pathname.substr(1)), u && !f.test(u) && "/" !== e.slice(-1) && "/" === v.pathname && (v.pathname = ""), v.path = v.pathname + v.search, v.auth = [l.username, l.password].map(decodeURIComponent).filter(Boolean).join(":"), v.port = l.port, b && !v.host.endsWith(b) && (v.host += b, v.port = b.slice(1)), v.href = w ? "" + v.pathname + v.search + v.hash : n(v);
                        var E = /^(file)/.test(v.href) ? ["host", "hostname"] : [];
                        return Object.keys(v).forEach(function(e) {
                            ~E.indexOf(e) || (v[e] = v[e] || null)
                        }), v
                    }
                    i.parse = m, i.format = n, i.resolve = l, i.resolveObject = function(e, t) {
                        return m(l(e, t))
                    }, i.Url = d
                }(), e.exports = i
            }()
        },
        97334: function(e) {
            ! function() {
                "use strict";
                var t = {
                        815: function(e) {
                            e.exports = function(e, r, n, o) {
                                r = r || "&", n = n || "=";
                                var i = {};
                                if ("string" != typeof e || 0 === e.length) return i;
                                var a = /\+/g;
                                e = e.split(r);
                                var s = 1e3;
                                o && "number" == typeof o.maxKeys && (s = o.maxKeys);
                                var c = e.length;
                                s > 0 && c > s && (c = s);
                                for (var u = 0; u < c; ++u) {
                                    var l, d, f, p, h = e[u].replace(a, "%20"),
                                        y = h.indexOf(n);
                                    (y >= 0 ? (l = h.substr(0, y), d = h.substr(y + 1)) : (l = h, d = ""), f = decodeURIComponent(l), p = decodeURIComponent(d), Object.prototype.hasOwnProperty.call(i, f)) ? t(i[f]) ? i[f].push(p) : i[f] = [i[f], p]: i[f] = p
                                }
                                return i
                            };
                            var t = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }
                        },
                        577: function(e) {
                            var t = function(e) {
                                switch (typeof e) {
                                    case "string":
                                        return e;
                                    case "boolean":
                                        return e ? "true" : "false";
                                    case "number":
                                        return isFinite(e) ? e : "";
                                    default:
                                        return ""
                                }
                            };
                            e.exports = function(e, i, a, s) {
                                return (i = i || "&", a = a || "=", null === e && (e = void 0), "object" == typeof e) ? n(o(e), function(o) {
                                    var s = encodeURIComponent(t(o)) + a;
                                    return r(e[o]) ? n(e[o], function(e) {
                                        return s + encodeURIComponent(t(e))
                                    }).join(i) : s + encodeURIComponent(t(e[o]))
                                }).join(i) : s ? encodeURIComponent(t(s)) + a + encodeURIComponent(t(e)) : ""
                            };
                            var r = Array.isArray || function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            };

                            function n(e, t) {
                                if (e.map) return e.map(t);
                                for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
                                return r
                            }
                            var o = Object.keys || function(e) {
                                var t = [];
                                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                                return t
                            }
                        }
                    },
                    r = {};

                function n(e) {
                    var o = r[e];
                    if (void 0 !== o) return o.exports;
                    var i = r[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        t[e](i, i.exports, n), a = !1
                    } finally {
                        a && delete r[e]
                    }
                    return i.exports
                }
                n.ab = "//";
                var o = {};
                o.decode = o.parse = n(815), o.encode = o.stringify = n(577), e.exports = o
            }()
        },
        22321: function(e, t, r) {
            var n = r(83454),
                o = r(21876).Buffer;
            ! function() {
                var t = {
                        523: function(e) {
                            e.exports = {
                                100: "Continue",
                                101: "Switching Protocols",
                                102: "Processing",
                                200: "OK",
                                201: "Created",
                                202: "Accepted",
                                203: "Non-Authoritative Information",
                                204: "No Content",
                                205: "Reset Content",
                                206: "Partial Content",
                                207: "Multi-Status",
                                208: "Already Reported",
                                226: "IM Used",
                                300: "Multiple Choices",
                                301: "Moved Permanently",
                                302: "Found",
                                303: "See Other",
                                304: "Not Modified",
                                305: "Use Proxy",
                                307: "Temporary Redirect",
                                308: "Permanent Redirect",
                                400: "Bad Request",
                                401: "Unauthorized",
                                402: "Payment Required",
                                403: "Forbidden",
                                404: "Not Found",
                                405: "Method Not Allowed",
                                406: "Not Acceptable",
                                407: "Proxy Authentication Required",
                                408: "Request Timeout",
                                409: "Conflict",
                                410: "Gone",
                                411: "Length Required",
                                412: "Precondition Failed",
                                413: "Payload Too Large",
                                414: "URI Too Long",
                                415: "Unsupported Media Type",
                                416: "Range Not Satisfiable",
                                417: "Expectation Failed",
                                418: "I'm a teapot",
                                421: "Misdirected Request",
                                422: "Unprocessable Entity",
                                423: "Locked",
                                424: "Failed Dependency",
                                425: "Unordered Collection",
                                426: "Upgrade Required",
                                428: "Precondition Required",
                                429: "Too Many Requests",
                                431: "Request Header Fields Too Large",
                                451: "Unavailable For Legal Reasons",
                                500: "Internal Server Error",
                                501: "Not Implemented",
                                502: "Bad Gateway",
                                503: "Service Unavailable",
                                504: "Gateway Timeout",
                                505: "HTTP Version Not Supported",
                                506: "Variant Also Negotiates",
                                507: "Insufficient Storage",
                                508: "Loop Detected",
                                509: "Bandwidth Limit Exceeded",
                                510: "Not Extended",
                                511: "Network Authentication Required"
                            }
                        },
                        782: function(e) {
                            "function" == typeof Object.create ? e.exports = function(e, t) {
                                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }))
                            } : e.exports = function(e, t) {
                                if (t) {
                                    e.super_ = t;
                                    var r = function() {};
                                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                                }
                            }
                        },
                        646: function(e) {
                            "use strict";
                            let t = {};

                            function r(e, r, n) {
                                n || (n = Error);
                                class o extends n {
                                    constructor(e, t, n) {
                                        super("string" == typeof r ? r : r(e, t, n))
                                    }
                                }
                                o.prototype.name = n.name, o.prototype.code = e, t[e] = o
                            }

                            function n(e, t) {
                                if (!Array.isArray(e)) return `of ${t} ${String(e)}`; {
                                    let r = e.length;
                                    return (e = e.map(e => String(e)), r > 2) ? `one of ${t} ${e.slice(0,r-1).join(", ")}, or ` + e[r - 1] : 2 === r ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`
                                }
                            }
                            r("ERR_INVALID_OPT_VALUE", function(e, t) {
                                return 'The value "' + t + '" is invalid for option "' + e + '"'
                            }, TypeError), r("ERR_INVALID_ARG_TYPE", function(e, t, r) {
                                var o, i, a, s;
                                let c, u;
                                if ("string" == typeof t && (o = "not ", t.substr(0, o.length) === o) ? (c = "must not be", t = t.replace(/^not /, "")) : c = "must be", i = " argument", (void 0 === a || a > e.length) && (a = e.length), e.substring(a - i.length, a) === i) u = `The ${e} ${c} ${n(t,"type")}`;
                                else {
                                    let r = ("number" != typeof s && (s = 0), s + 1 > e.length || -1 === e.indexOf(".", s)) ? "argument" : "property";
                                    u = `The "${e}" ${r} ${c} ${n(t,"type")}`
                                }
                                return u + `. Received type ${typeof r}`
                            }, TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                                return "The " + e + " method is not implemented"
                            }), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", function(e) {
                                return "Cannot call " + e + " after a stream was destroyed"
                            }), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r("ERR_UNKNOWN_ENCODING", function(e) {
                                return "Unknown encoding: " + e
                            }, TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.q = t
                        },
                        403: function(e, t, r) {
                            "use strict";
                            var o = Object.keys || function(e) {
                                var t = [];
                                for (var r in e) t.push(r);
                                return t
                            };
                            e.exports = l;
                            var i = r(709),
                                a = r(337);
                            r(782)(l, i);
                            for (var s = o(a.prototype), c = 0; c < s.length; c++) {
                                var u = s[c];
                                l.prototype[u] || (l.prototype[u] = a.prototype[u])
                            }

                            function l(e) {
                                if (!(this instanceof l)) return new l(e);
                                i.call(this, e), a.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", d)))
                            }

                            function d() {
                                this._writableState.ended || n.nextTick(f, this)
                            }

                            function f(e) {
                                e.end()
                            }
                            Object.defineProperty(l.prototype, "writableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.highWaterMark
                                }
                            }), Object.defineProperty(l.prototype, "writableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState && this._writableState.getBuffer()
                                }
                            }), Object.defineProperty(l.prototype, "writableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._writableState.length
                                }
                            }), Object.defineProperty(l.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                                },
                                set: function(e) {
                                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                                }
                            })
                        },
                        889: function(e, t, r) {
                            "use strict";
                            e.exports = o;
                            var n = r(170);

                            function o(e) {
                                if (!(this instanceof o)) return new o(e);
                                n.call(this, e)
                            }
                            r(782)(o, n), o.prototype._transform = function(e, t, r) {
                                r(null, e)
                            }
                        },
                        709: function(e, t, o) {
                            "use strict";
                            e.exports = O, O.ReadableState = k, o(361).EventEmitter;
                            var i, a, s, c, u, l = function(e, t) {
                                    return e.listeners(t).length
                                },
                                d = o(678),
                                f = o(300).Buffer,
                                p = r.g.Uint8Array || function() {},
                                h = o(837);
                            a = h && h.debuglog ? h.debuglog("stream") : function() {};
                            var y = o(379),
                                g = o(25),
                                m = o(776).getHighWaterMark,
                                b = o(646).q,
                                v = b.ERR_INVALID_ARG_TYPE,
                                _ = b.ERR_STREAM_PUSH_AFTER_EOF,
                                w = b.ERR_METHOD_NOT_IMPLEMENTED,
                                S = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                            o(782)(O, d);
                            var E = g.errorOrDestroy,
                                A = ["error", "close", "destroy", "pause", "resume"];

                            function k(e, t, r) {
                                i = i || o(403), e = e || {}, "boolean" != typeof r && (r = t instanceof i), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = m(this, e, "readableHighWaterMark", r), this.buffer = new y, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (s || (s = o(704).s), this.decoder = new s(e.encoding), this.encoding = e.encoding)
                            }

                            function O(e) {
                                if (i = i || o(403), !(this instanceof O)) return new O(e);
                                var t = this instanceof i;
                                this._readableState = new k(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), d.call(this)
                            }

                            function P(e, t, r, n, o) {
                                a("readableAddChunk", t);
                                var i, s, c, u, l, d = e._readableState;
                                if (null === t) d.reading = !1,
                                    function(e, t) {
                                        if (a("onEofChunk"), !t.ended) {
                                            if (t.decoder) {
                                                var r = t.decoder.end();
                                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                                            }
                                            t.ended = !0, t.sync ? j(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, R(e)))
                                        }
                                    }(e, d);
                                else {
                                    if (o || (i = d, s = t, f.isBuffer(s) || s instanceof p || "string" == typeof s || void 0 === s || i.objectMode || (c = new v("chunk", ["string", "Buffer", "Uint8Array"], s)), l = c), l) E(e, l);
                                    else if (d.objectMode || t && t.length > 0) {
                                        if ("string" == typeof t || d.objectMode || Object.getPrototypeOf(t) === f.prototype || (u = t, t = f.from(u)), n) d.endEmitted ? E(e, new S) : x(e, d, t, !0);
                                        else if (d.ended) E(e, new _);
                                        else {
                                            if (d.destroyed) return !1;
                                            d.reading = !1, d.decoder && !r ? (t = d.decoder.write(t), d.objectMode || 0 !== t.length ? x(e, d, t, !1) : C(e, d)) : x(e, d, t, !1)
                                        }
                                    } else n || (d.reading = !1, C(e, d))
                                }
                                return !d.ended && (d.length < d.highWaterMark || 0 === d.length)
                            }

                            function x(e, t, r, n) {
                                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && j(e)), C(e, t)
                            }

                            function T(e, t) {
                                if (e <= 0 || 0 === t.length && t.ended) return 0;
                                if (t.objectMode) return 1;
                                if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
                                if (e > t.highWaterMark) {
                                    var r;
                                    t.highWaterMark = ((r = e) >= 1073741824 ? r = 1073741824 : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r)
                                }
                                return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
                            }

                            function j(e) {
                                var t = e._readableState;
                                a("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (a("emitReadable", t.flowing), t.emittedReadable = !0, n.nextTick(R, e))
                            }

                            function R(e) {
                                var t = e._readableState;
                                a("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, D(e)
                            }

                            function C(e, t) {
                                t.readingMore || (t.readingMore = !0, n.nextTick(I, e, t))
                            }

                            function I(e, t) {
                                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                                    var r = t.length;
                                    if (a("maybeReadMore read 0"), e.read(0), r === t.length) break
                                }
                                t.readingMore = !1
                            }

                            function U(e) {
                                var t = e._readableState;
                                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                            }

                            function H(e) {
                                a("readable nexttick read 0"), e.read(0)
                            }

                            function M(e, t) {
                                a("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), D(e), t.flowing && !t.reading && e.read(0)
                            }

                            function D(e) {
                                var t = e._readableState;
                                for (a("flow", t.flowing); t.flowing && null !== e.read(););
                            }

                            function N(e, t) {
                                var r;
                                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r)
                            }

                            function W(e) {
                                var t = e._readableState;
                                a("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick($, t, e))
                            }

                            function $(e, t) {
                                if (a("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                                    var r = t._writableState;
                                    (!r || r.autoDestroy && r.finished) && t.destroy()
                                }
                            }

                            function L(e, t) {
                                for (var r = 0, n = e.length; r < n; r++)
                                    if (e[r] === t) return r;
                                return -1
                            }
                            Object.defineProperty(O.prototype, "destroyed", {
                                enumerable: !1,
                                get: function() {
                                    return void 0 !== this._readableState && this._readableState.destroyed
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.destroyed = e)
                                }
                            }), O.prototype.destroy = g.destroy, O.prototype._undestroy = g.undestroy, O.prototype._destroy = function(e, t) {
                                t(e)
                            }, O.prototype.push = function(e, t) {
                                var r, n = this._readableState;
                                return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = f.from(e, t), t = ""), r = !0), P(this, e, t, !1, r)
                            }, O.prototype.unshift = function(e) {
                                return P(this, e, null, !0, !1)
                            }, O.prototype.isPaused = function() {
                                return !1 === this._readableState.flowing
                            }, O.prototype.setEncoding = function(e) {
                                s || (s = o(704).s);
                                var t = new s(e);
                                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                                for (var r = this._readableState.buffer.head, n = ""; null !== r;) n += t.write(r.data), r = r.next;
                                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
                            }, O.prototype.read = function(e) {
                                a("read", e), e = parseInt(e, 10);
                                var t, r = this._readableState,
                                    n = e;
                                if (0 !== e && (r.emittedReadable = !1), 0 === e && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended)) return a("read: emitReadable", r.length, r.ended), 0 === r.length && r.ended ? W(this) : j(this), null;
                                if (0 === (e = T(e, r)) && r.ended) return 0 === r.length && W(this), null;
                                var o = r.needReadable;
                                return a("need readable", o), (0 === r.length || r.length - e < r.highWaterMark) && a("length less than watermark", o = !0), r.ended || r.reading ? a("reading or ended", o = !1) : o && (a("do read"), r.reading = !0, r.sync = !0, 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), r.sync = !1, r.reading || (e = T(n, r))), null === (t = e > 0 ? N(e, r) : null) ? (r.needReadable = r.length <= r.highWaterMark, e = 0) : (r.length -= e, r.awaitDrain = 0), 0 === r.length && (r.ended || (r.needReadable = !0), n !== e && r.ended && W(this)), null !== t && this.emit("data", t), t
                            }, O.prototype._read = function(e) {
                                E(this, new w("_read()"))
                            }, O.prototype.pipe = function(e, t) {
                                var r = this,
                                    o = this._readableState;
                                switch (o.pipesCount) {
                                    case 0:
                                        o.pipes = e;
                                        break;
                                    case 1:
                                        o.pipes = [o.pipes, e];
                                        break;
                                    default:
                                        o.pipes.push(e)
                                }
                                o.pipesCount += 1, a("pipe count=%d opts=%j", o.pipesCount, t);
                                var i = t && !1 === t.end || e === n.stdout || e === n.stderr ? y : s;

                                function s() {
                                    a("onend"), e.end()
                                }
                                o.endEmitted ? n.nextTick(i) : r.once("end", i), e.on("unpipe", function t(n, i) {
                                    a("onunpipe"), n === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, a("cleanup"), e.removeListener("close", p), e.removeListener("finish", h), e.removeListener("drain", c), e.removeListener("error", f), e.removeListener("unpipe", t), r.removeListener("end", s), r.removeListener("end", y), r.removeListener("data", d), u = !0, o.awaitDrain && (!e._writableState || e._writableState.needDrain) && c())
                                });
                                var c = function() {
                                    var e = r._readableState;
                                    a("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && l(r, "data") && (e.flowing = !0, D(r))
                                };
                                e.on("drain", c);
                                var u = !1;

                                function d(t) {
                                    a("ondata");
                                    var n = e.write(t);
                                    a("dest.write", n), !1 === n && ((1 === o.pipesCount && o.pipes === e || o.pipesCount > 1 && -1 !== L(o.pipes, e)) && !u && (a("false write response, pause", o.awaitDrain), o.awaitDrain++), r.pause())
                                }

                                function f(t) {
                                    a("onerror", t), y(), e.removeListener("error", f), 0 === l(e, "error") && E(e, t)
                                }

                                function p() {
                                    e.removeListener("finish", h), y()
                                }

                                function h() {
                                    a("onfinish"), e.removeListener("close", p), y()
                                }

                                function y() {
                                    a("unpipe"), r.unpipe(e)
                                }
                                return r.on("data", d),
                                    function(e, t, r) {
                                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                                    }(e, "error", f), e.once("close", p), e.once("finish", h), e.emit("pipe", r), o.flowing || (a("pipe resume"), r.resume()), e
                            }, O.prototype.unpipe = function(e) {
                                var t = this._readableState,
                                    r = {
                                        hasUnpiped: !1
                                    };
                                if (0 === t.pipesCount) return this;
                                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                                if (!e) {
                                    var n = t.pipes,
                                        o = t.pipesCount;
                                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                                    for (var i = 0; i < o; i++) n[i].emit("unpipe", this, {
                                        hasUnpiped: !1
                                    });
                                    return this
                                }
                                var a = L(t.pipes, e);
                                return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
                            }, O.prototype.on = function(e, t) {
                                var r = d.prototype.on.call(this, e, t),
                                    o = this._readableState;
                                return "data" === e ? (o.readableListening = this.listenerCount("readable") > 0, !1 !== o.flowing && this.resume()) : "readable" !== e || o.endEmitted || o.readableListening || (o.readableListening = o.needReadable = !0, o.flowing = !1, o.emittedReadable = !1, a("on readable", o.length, o.reading), o.length ? j(this) : o.reading || n.nextTick(H, this)), r
                            }, O.prototype.addListener = O.prototype.on, O.prototype.removeListener = function(e, t) {
                                var r = d.prototype.removeListener.call(this, e, t);
                                return "readable" === e && n.nextTick(U, this), r
                            }, O.prototype.removeAllListeners = function(e) {
                                var t = d.prototype.removeAllListeners.apply(this, arguments);
                                return ("readable" === e || void 0 === e) && n.nextTick(U, this), t
                            }, O.prototype.resume = function() {
                                var e = this._readableState;
                                return e.flowing || (a("resume"), e.flowing = !e.readableListening, e.resumeScheduled || (e.resumeScheduled = !0, n.nextTick(M, this, e))), e.paused = !1, this
                            }, O.prototype.pause = function() {
                                return a("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (a("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                            }, O.prototype.wrap = function(e) {
                                var t = this,
                                    r = this._readableState,
                                    n = !1;
                                for (var o in e.on("end", function() {
                                        if (a("wrapped end"), r.decoder && !r.ended) {
                                            var e = r.decoder.end();
                                            e && e.length && t.push(e)
                                        }
                                        t.push(null)
                                    }), e.on("data", function(o) {
                                        a("wrapped data"), r.decoder && (o = r.decoder.write(o)), (!r.objectMode || null != o) && (r.objectMode || o && o.length) && (t.push(o) || (n = !0, e.pause()))
                                    }), e) void 0 === this[o] && "function" == typeof e[o] && (this[o] = function(t) {
                                    return function() {
                                        return e[t].apply(e, arguments)
                                    }
                                }(o));
                                for (var i = 0; i < A.length; i++) e.on(A[i], this.emit.bind(this, A[i]));
                                return this._read = function(t) {
                                    a("wrapped _read", t), n && (n = !1, e.resume())
                                }, this
                            }, "function" == typeof Symbol && (O.prototype[Symbol.asyncIterator] = function() {
                                return void 0 === c && (c = o(871)), c(this)
                            }), Object.defineProperty(O.prototype, "readableHighWaterMark", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.highWaterMark
                                }
                            }), Object.defineProperty(O.prototype, "readableBuffer", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState && this._readableState.buffer
                                }
                            }), Object.defineProperty(O.prototype, "readableFlowing", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.flowing
                                },
                                set: function(e) {
                                    this._readableState && (this._readableState.flowing = e)
                                }
                            }), O._fromList = N, Object.defineProperty(O.prototype, "readableLength", {
                                enumerable: !1,
                                get: function() {
                                    return this._readableState.length
                                }
                            }), "function" == typeof Symbol && (O.from = function(e, t) {
                                return void 0 === u && (u = o(727)), u(O, e, t)
                            })
                        },
                        170: function(e, t, r) {
                            "use strict";
                            e.exports = l;
                            var n = r(646).q,
                                o = n.ERR_METHOD_NOT_IMPLEMENTED,
                                i = n.ERR_MULTIPLE_CALLBACK,
                                a = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                                s = n.ERR_TRANSFORM_WITH_LENGTH_0,
                                c = r(403);

                            function u(e, t) {
                                var r = this._transformState;
                                r.transforming = !1;
                                var n = r.writecb;
                                if (null === n) return this.emit("error", new i);
                                r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                                var o = this._readableState;
                                o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                            }

                            function l(e) {
                                if (!(this instanceof l)) return new l(e);
                                c.call(this, e), this._transformState = {
                                    afterTransform: u.bind(this),
                                    needTransform: !1,
                                    transforming: !1,
                                    writecb: null,
                                    writechunk: null,
                                    writeencoding: null
                                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", d)
                            }

                            function d() {
                                var e = this;
                                "function" != typeof this._flush || this._readableState.destroyed ? f(this, null, null) : this._flush(function(t, r) {
                                    f(e, t, r)
                                })
                            }

                            function f(e, t, r) {
                                if (t) return e.emit("error", t);
                                if (null != r && e.push(r), e._writableState.length) throw new s;
                                if (e._transformState.transforming) throw new a;
                                return e.push(null)
                            }
                            r(782)(l, c), l.prototype.push = function(e, t) {
                                return this._transformState.needTransform = !1, c.prototype.push.call(this, e, t)
                            }, l.prototype._transform = function(e, t, r) {
                                r(new o("_transform()"))
                            }, l.prototype._write = function(e, t, r) {
                                var n = this._transformState;
                                if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                                    var o = this._readableState;
                                    (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark)
                                }
                            }, l.prototype._read = function(e) {
                                var t = this._transformState;
                                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
                            }, l.prototype._destroy = function(e, t) {
                                c.prototype._destroy.call(this, e, function(e) {
                                    t(e)
                                })
                            }
                        },
                        337: function(e, t, o) {
                            "use strict";

                            function i(e) {
                                var t = this;
                                this.next = null, this.entry = null, this.finish = function() {
                                    (function(e, t, r) {
                                        var n = e.entry;
                                        for (e.entry = null; n;) {
                                            var o = n.callback;
                                            t.pendingcb--, o(void 0), n = n.next
                                        }
                                        t.corkedRequestsFree.next = e
                                    })(t, e)
                                }
                            }
                            e.exports = O, O.WritableState = k;
                            var a, s, c = {
                                    deprecate: o(769)
                                },
                                u = o(678),
                                l = o(300).Buffer,
                                d = r.g.Uint8Array || function() {},
                                f = o(25),
                                p = o(776).getHighWaterMark,
                                h = o(646).q,
                                y = h.ERR_INVALID_ARG_TYPE,
                                g = h.ERR_METHOD_NOT_IMPLEMENTED,
                                m = h.ERR_MULTIPLE_CALLBACK,
                                b = h.ERR_STREAM_CANNOT_PIPE,
                                v = h.ERR_STREAM_DESTROYED,
                                _ = h.ERR_STREAM_NULL_VALUES,
                                w = h.ERR_STREAM_WRITE_AFTER_END,
                                S = h.ERR_UNKNOWN_ENCODING,
                                E = f.errorOrDestroy;

                            function A() {}

                            function k(e, t, r) {
                                a = a || o(403), e = e || {}, "boolean" != typeof r && (r = t instanceof a), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = p(this, e, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                                var s = !1 === e.decodeStrings;
                                this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                                    (function(e, t) {
                                        var r = e._writableState,
                                            o = r.sync,
                                            i = r.writecb;
                                        if ("function" != typeof i) throw new m;
                                        if (r.writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t) --r.pendingcb, o ? (n.nextTick(i, t), n.nextTick(C, e, r), e._writableState.errorEmitted = !0, E(e, t)) : (i(t), e._writableState.errorEmitted = !0, E(e, t), C(e, r));
                                        else {
                                            var a = j(r) || e.destroyed;
                                            a || r.corked || r.bufferProcessing || !r.bufferedRequest || T(e, r), o ? n.nextTick(x, e, r, a, i) : x(e, r, a, i)
                                        }
                                    })(t, e)
                                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this)
                            }

                            function O(e) {
                                var t = this instanceof(a = a || o(403));
                                if (!t && !s.call(O, this)) return new O(e);
                                this._writableState = new k(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), u.call(this)
                            }

                            function P(e, t, r, n, o, i, a) {
                                t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new v("write")) : r ? e._writev(o, t.onwrite) : e._write(o, i, t.onwrite), t.sync = !1
                            }

                            function x(e, t, r, n) {
                                r || 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")), t.pendingcb--, n(), C(e, t)
                            }

                            function T(e, t) {
                                t.bufferProcessing = !0;
                                var r = t.bufferedRequest;
                                if (e._writev && r && r.next) {
                                    var n = Array(t.bufferedRequestCount),
                                        o = t.corkedRequestsFree;
                                    o.entry = r;
                                    for (var a = 0, s = !0; r;) n[a] = r, r.isBuf || (s = !1), r = r.next, a += 1;
                                    n.allBuffers = s, P(e, t, !0, t.length, n, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0
                                } else {
                                    for (; r;) {
                                        var c = r.chunk,
                                            u = r.encoding,
                                            l = r.callback,
                                            d = t.objectMode ? 1 : c.length;
                                        if (P(e, t, !1, d, c, u, l), r = r.next, t.bufferedRequestCount--, t.writing) break
                                    }
                                    null === r && (t.lastBufferedRequest = null)
                                }
                                t.bufferedRequest = r, t.bufferProcessing = !1
                            }

                            function j(e) {
                                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                            }

                            function R(e, t) {
                                e._final(function(r) {
                                    t.pendingcb--, r && E(e, r), t.prefinished = !0, e.emit("prefinish"), C(e, t)
                                })
                            }

                            function C(e, t) {
                                var r = j(t);
                                if (r && (t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, n.nextTick(R, e, t))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                                    var o = e._readableState;
                                    (!o || o.autoDestroy && o.endEmitted) && e.destroy()
                                }
                                return r
                            }
                            o(782)(O, u), k.prototype.getBuffer = function() {
                                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                                    return t
                                },
                                function() {
                                    try {
                                        Object.defineProperty(k.prototype, "buffer", {
                                            get: c.deprecate(function() {
                                                return this.getBuffer()
                                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                                        })
                                    } catch (e) {}
                                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (s = Function.prototype[Symbol.hasInstance], Object.defineProperty(O, Symbol.hasInstance, {
                                    value: function(e) {
                                        return !!s.call(this, e) || this === O && e && e._writableState instanceof k
                                    }
                                })) : s = function(e) {
                                    return e instanceof this
                                }, O.prototype.pipe = function() {
                                    E(this, new b)
                                }, O.prototype.write = function(e, t, r) {
                                    var o, i, a, s, c, u, f, p = this._writableState,
                                        h = !1,
                                        g = !p.objectMode && (o = e, l.isBuffer(o) || o instanceof d);
                                    return g && !l.isBuffer(e) && (i = e, e = l.from(i)), ("function" == typeof t && (r = t, t = null), g ? t = "buffer" : t || (t = p.defaultEncoding), "function" != typeof r && (r = A), p.ending) ? (a = r, E(this, s = new w), n.nextTick(a, s)) : (g || (c = e, u = r, null === c ? f = new _ : "string" == typeof c || p.objectMode || (f = new y("chunk", ["string", "Buffer"], c)), !f || (E(this, f), n.nextTick(u, f), 0))) && (p.pendingcb++, h = function(e, t, r, n, o, i) {
                                        if (!r) {
                                            var a, s, c = (a = n, s = o, t.objectMode || !1 === t.decodeStrings || "string" != typeof a || (a = l.from(a, s)), a);
                                            n !== c && (r = !0, o = "buffer", n = c)
                                        }
                                        var u = t.objectMode ? 1 : n.length;
                                        t.length += u;
                                        var d = t.length < t.highWaterMark;
                                        if (d || (t.needDrain = !0), t.writing || t.corked) {
                                            var f = t.lastBufferedRequest;
                                            t.lastBufferedRequest = {
                                                chunk: n,
                                                encoding: o,
                                                isBuf: r,
                                                callback: i,
                                                next: null
                                            }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                                        } else P(e, t, !1, u, n, o, i);
                                        return d
                                    }(this, p, g, e, t, r)), h
                                }, O.prototype.cork = function() {
                                    this._writableState.corked++
                                }, O.prototype.uncork = function() {
                                    var e = this._writableState;
                                    !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || T(this, e))
                                }, O.prototype.setDefaultEncoding = function(e) {
                                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new S(e);
                                    return this._writableState.defaultEncoding = e, this
                                }, Object.defineProperty(O.prototype, "writableBuffer", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState && this._writableState.getBuffer()
                                    }
                                }), Object.defineProperty(O.prototype, "writableHighWaterMark", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.highWaterMark
                                    }
                                }), O.prototype._write = function(e, t, r) {
                                    r(new g("_write()"))
                                }, O.prototype._writev = null, O.prototype.end = function(e, t, r) {
                                    var o, i = this._writableState;
                                    return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || (o = r, i.ending = !0, C(this, i), o && (i.finished ? n.nextTick(o) : this.once("finish", o)), i.ended = !0, this.writable = !1), this
                                }, Object.defineProperty(O.prototype, "writableLength", {
                                    enumerable: !1,
                                    get: function() {
                                        return this._writableState.length
                                    }
                                }), Object.defineProperty(O.prototype, "destroyed", {
                                    enumerable: !1,
                                    get: function() {
                                        return void 0 !== this._writableState && this._writableState.destroyed
                                    },
                                    set: function(e) {
                                        this._writableState && (this._writableState.destroyed = e)
                                    }
                                }), O.prototype.destroy = f.destroy, O.prototype._undestroy = f.undestroy, O.prototype._destroy = function(e, t) {
                                    t(e)
                                }
                        },
                        871: function(e, t, r) {
                            "use strict";

                            function o(e, t, r) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r, e
                            }
                            var i, a = r(698),
                                s = Symbol("lastResolve"),
                                c = Symbol("lastReject"),
                                u = Symbol("error"),
                                l = Symbol("ended"),
                                d = Symbol("lastPromise"),
                                f = Symbol("handlePromise"),
                                p = Symbol("stream");

                            function h(e, t) {
                                return {
                                    value: e,
                                    done: t
                                }
                            }

                            function y(e) {
                                var t = e[s];
                                if (null !== t) {
                                    var r = e[p].read();
                                    null !== r && (e[d] = null, e[s] = null, e[c] = null, t(h(r, !1)))
                                }
                            }

                            function g(e) {
                                n.nextTick(y, e)
                            }
                            var m = Object.getPrototypeOf(function() {}),
                                b = Object.setPrototypeOf((o(i = {
                                    get stream() {
                                        return this[p]
                                    },
                                    next: function() {
                                        var e, t, r = this,
                                            o = this[u];
                                        if (null !== o) return Promise.reject(o);
                                        if (this[l]) return Promise.resolve(h(void 0, !0));
                                        if (this[p].destroyed) return new Promise(function(e, t) {
                                            n.nextTick(function() {
                                                r[u] ? t(r[u]) : e(h(void 0, !0))
                                            })
                                        });
                                        var i = this[d];
                                        if (i) t = new Promise((e = this, function(t, r) {
                                            i.then(function() {
                                                if (e[l]) {
                                                    t(h(void 0, !0));
                                                    return
                                                }
                                                e[f](t, r)
                                            }, r)
                                        }));
                                        else {
                                            var a = this[p].read();
                                            if (null !== a) return Promise.resolve(h(a, !1));
                                            t = new Promise(this[f])
                                        }
                                        return this[d] = t, t
                                    }
                                }, Symbol.asyncIterator, function() {
                                    return this
                                }), o(i, "return", function() {
                                    var e = this;
                                    return new Promise(function(t, r) {
                                        e[p].destroy(null, function(e) {
                                            if (e) {
                                                r(e);
                                                return
                                            }
                                            t(h(void 0, !0))
                                        })
                                    })
                                }), i), m);
                            e.exports = function(e) {
                                var t, r = Object.create(b, (o(t = {}, p, {
                                    value: e,
                                    writable: !0
                                }), o(t, s, {
                                    value: null,
                                    writable: !0
                                }), o(t, c, {
                                    value: null,
                                    writable: !0
                                }), o(t, u, {
                                    value: null,
                                    writable: !0
                                }), o(t, l, {
                                    value: e._readableState.endEmitted,
                                    writable: !0
                                }), o(t, f, {
                                    value: function(e, t) {
                                        var n = r[p].read();
                                        n ? (r[d] = null, r[s] = null, r[c] = null, e(h(n, !1))) : (r[s] = e, r[c] = t)
                                    },
                                    writable: !0
                                }), t));
                                return r[d] = null, a(e, function(e) {
                                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                                        var t = r[c];
                                        null !== t && (r[d] = null, r[s] = null, r[c] = null, t(e)), r[u] = e;
                                        return
                                    }
                                    var n = r[s];
                                    null !== n && (r[d] = null, r[s] = null, r[c] = null, n(h(void 0, !0))), r[l] = !0
                                }), e.on("readable", g.bind(null, r)), r
                            }
                        },
                        379: function(e, t, r) {
                            "use strict";

                            function n(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    t && (n = n.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)
                                }
                                return r
                            }
                            var o = r(300).Buffer,
                                i = r(837).inspect,
                                a = i && i.custom || "inspect";
                            e.exports = function() {
                                var e;

                                function t() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                    }(this, t), this.head = null, this.tail = null, this.length = 0
                                }
                                return e = [{
                                        key: "push",
                                        value: function(e) {
                                            var t = {
                                                data: e,
                                                next: null
                                            };
                                            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                                        }
                                    }, {
                                        key: "unshift",
                                        value: function(e) {
                                            var t = {
                                                data: e,
                                                next: this.head
                                            };
                                            0 === this.length && (this.tail = t), this.head = t, ++this.length
                                        }
                                    }, {
                                        key: "shift",
                                        value: function() {
                                            if (0 !== this.length) {
                                                var e = this.head.data;
                                                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                                            }
                                        }
                                    }, {
                                        key: "clear",
                                        value: function() {
                                            this.head = this.tail = null, this.length = 0
                                        }
                                    }, {
                                        key: "join",
                                        value: function(e) {
                                            if (0 === this.length) return "";
                                            for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                                            return r
                                        }
                                    }, {
                                        key: "concat",
                                        value: function(e) {
                                            if (0 === this.length) return o.alloc(0);
                                            for (var t, r, n = o.allocUnsafe(e >>> 0), i = this.head, a = 0; i;) t = i.data, r = a, o.prototype.copy.call(t, n, r), a += i.data.length, i = i.next;
                                            return n
                                        }
                                    }, {
                                        key: "consume",
                                        value: function(e, t) {
                                            var r;
                                            return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                                        }
                                    }, {
                                        key: "first",
                                        value: function() {
                                            return this.head.data
                                        }
                                    }, {
                                        key: "_getString",
                                        value: function(e) {
                                            var t = this.head,
                                                r = 1,
                                                n = t.data;
                                            for (e -= n.length; t = t.next;) {
                                                var o = t.data,
                                                    i = e > o.length ? o.length : e;
                                                if (i === o.length ? n += o : n += o.slice(0, e), 0 == (e -= i)) {
                                                    i === o.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = o.slice(i));
                                                    break
                                                }++r
                                            }
                                            return this.length -= r, n
                                        }
                                    }, {
                                        key: "_getBuffer",
                                        value: function(e) {
                                            var t = o.allocUnsafe(e),
                                                r = this.head,
                                                n = 1;
                                            for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                                                var i = r.data,
                                                    a = e > i.length ? i.length : e;
                                                if (i.copy(t, t.length - e, 0, a), 0 == (e -= a)) {
                                                    a === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(a));
                                                    break
                                                }++n
                                            }
                                            return this.length -= n, t
                                        }
                                    }, {
                                        key: a,
                                        value: function(e, t) {
                                            return i(this, function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                                                        var n;
                                                        n = r[t], t in e ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        }) : e[t] = n
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                                    })
                                                }
                                                return e
                                            }({}, t, {
                                                depth: 0,
                                                customInspect: !1
                                            }))
                                        }
                                    }],
                                    function(e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var n = t[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(t.prototype, e), t
                            }()
                        },
                        25: function(e) {
                            "use strict";

                            function t(e, t) {
                                o(e, t), r(e)
                            }

                            function r(e) {
                                (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit("close")
                            }

                            function o(e, t) {
                                e.emit("error", t)
                            }
                            e.exports = {
                                destroy: function(e, i) {
                                    var a = this,
                                        s = this._readableState && this._readableState.destroyed,
                                        c = this._writableState && this._writableState.destroyed;
                                    return s || c ? i ? i(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, n.nextTick(o, this, e)) : n.nextTick(o, this, e)) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                                        !i && e ? a._writableState ? a._writableState.errorEmitted ? n.nextTick(r, a) : (a._writableState.errorEmitted = !0, n.nextTick(t, a, e)) : n.nextTick(t, a, e) : i ? (n.nextTick(r, a), i(e)) : n.nextTick(r, a)
                                    })), this
                                },
                                undestroy: function() {
                                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                                },
                                errorOrDestroy: function(e, t) {
                                    var r = e._readableState,
                                        n = e._writableState;
                                    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                                }
                            }
                        },
                        698: function(e, t, r) {
                            "use strict";
                            var n = r(646).q.ERR_STREAM_PREMATURE_CLOSE;

                            function o() {}
                            e.exports = function e(t, r, i) {
                                if ("function" == typeof r) return e(t, null, r);
                                r || (r = {}), a = i || o, s = !1, i = function() {
                                    if (!s) {
                                        s = !0;
                                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                        a.apply(this, t)
                                    }
                                };
                                var a, s, c = r.readable || !1 !== r.readable && t.readable,
                                    u = r.writable || !1 !== r.writable && t.writable,
                                    l = function() {
                                        t.writable || f()
                                    },
                                    d = t._writableState && t._writableState.finished,
                                    f = function() {
                                        u = !1, d = !0, c || i.call(t)
                                    },
                                    p = t._readableState && t._readableState.endEmitted,
                                    h = function() {
                                        c = !1, p = !0, u || i.call(t)
                                    },
                                    y = function(e) {
                                        i.call(t, e)
                                    },
                                    g = function() {
                                        var e;
                                        return c && !p ? (t._readableState && t._readableState.ended || (e = new n), i.call(t, e)) : u && !d ? (t._writableState && t._writableState.ended || (e = new n), i.call(t, e)) : void 0
                                    },
                                    m = function() {
                                        t.req.on("finish", f)
                                    };
                                return t.setHeader && "function" == typeof t.abort ? (t.on("complete", f), t.on("abort", g), t.req ? m() : t.on("request", m)) : u && !t._writableState && (t.on("end", l), t.on("close", l)), t.on("end", h), t.on("finish", f), !1 !== r.error && t.on("error", y), t.on("close", g),
                                    function() {
                                        t.removeListener("complete", f), t.removeListener("abort", g), t.removeListener("request", m), t.req && t.req.removeListener("finish", f), t.removeListener("end", l), t.removeListener("close", l), t.removeListener("finish", f), t.removeListener("end", h), t.removeListener("error", y), t.removeListener("close", g)
                                    }
                            }
                        },
                        727: function(e, t, r) {
                            "use strict";

                            function n(e, t, r, n, o, i, a) {
                                try {
                                    var s = e[i](a),
                                        c = s.value
                                } catch (e) {
                                    r(e);
                                    return
                                }
                                s.done ? t(c) : Promise.resolve(c).then(n, o)
                            }

                            function o(e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    t && (n = n.filter(function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                                    })), r.push.apply(r, n)
                                }
                                return r
                            }
                            var i = r(646).q.ERR_INVALID_ARG_TYPE;
                            e.exports = function(e, t, r) {
                                if (t && "function" == typeof t.next) a = t;
                                else if (t && t[Symbol.asyncIterator]) a = t[Symbol.asyncIterator]();
                                else if (t && t[Symbol.iterator]) a = t[Symbol.iterator]();
                                else throw new i("iterable", ["Iterable"], t);
                                var a, s = new e(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? o(Object(r), !0).forEach(function(t) {
                                                var n;
                                                n = r[t], t in e ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                }) : e[t] = n
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                            })
                                        }
                                        return e
                                    }({
                                        objectMode: !0
                                    }, r)),
                                    c = !1;

                                function u() {
                                    return l.apply(this, arguments)
                                }

                                function l() {
                                    var e;
                                    return e = function*() {
                                        try {
                                            var e = yield a.next(), t = e.value;
                                            e.done ? s.push(null) : s.push((yield t)) ? u() : c = !1
                                        } catch (e) {
                                            s.destroy(e)
                                        }
                                    }, (l = function() {
                                        var t = this,
                                            r = arguments;
                                        return new Promise(function(o, i) {
                                            var a = e.apply(t, r);

                                            function s(e) {
                                                n(a, o, i, s, c, "next", e)
                                            }

                                            function c(e) {
                                                n(a, o, i, s, c, "throw", e)
                                            }
                                            s(void 0)
                                        })
                                    }).apply(this, arguments)
                                }
                                return s._read = function() {
                                    c || (c = !0, u())
                                }, s
                            }
                        },
                        442: function(e, t, r) {
                            "use strict";
                            var n, o = r(646).q,
                                i = o.ERR_MISSING_ARGS,
                                a = o.ERR_STREAM_DESTROYED;

                            function s(e) {
                                if (e) throw e
                            }

                            function c(e) {
                                e()
                            }

                            function u(e, t) {
                                return e.pipe(t)
                            }
                            e.exports = function() {
                                for (var e, t, o = arguments.length, l = Array(o), d = 0; d < o; d++) l[d] = arguments[d];
                                var f = (e = l).length && "function" == typeof e[e.length - 1] ? e.pop() : s;
                                if (Array.isArray(l[0]) && (l = l[0]), l.length < 2) throw new i("streams");
                                var p = l.map(function(e, o) {
                                    var i, s, u, d, h, y, g = o < l.length - 1;
                                    return i = o > 0, u = s = function(e) {
                                            t || (t = e), e && p.forEach(c), g || (p.forEach(c), f(t))
                                        }, d = !1, s = function() {
                                            d || (d = !0, u.apply(void 0, arguments))
                                        }, h = !1, e.on("close", function() {
                                            h = !0
                                        }), void 0 === n && (n = r(698)), n(e, {
                                            readable: g,
                                            writable: i
                                        }, function(e) {
                                            if (e) return s(e);
                                            h = !0, s()
                                        }), y = !1,
                                        function(t) {
                                            if (!h && !y) {
                                                if (y = !0, e.setHeader && "function" == typeof e.abort) return e.abort();
                                                if ("function" == typeof e.destroy) return e.destroy();
                                                s(t || new a("pipe"))
                                            }
                                        }
                                });
                                return l.reduce(u)
                            }
                        },
                        776: function(e, t, r) {
                            "use strict";
                            var n = r(646).q.ERR_INVALID_OPT_VALUE;
                            e.exports = {
                                getHighWaterMark: function(e, t, r, o) {
                                    var i = null != t.highWaterMark ? t.highWaterMark : o ? t[r] : null;
                                    if (null != i) {
                                        if (!(isFinite(i) && Math.floor(i) === i) || i < 0) throw new n(o ? r : "highWaterMark", i);
                                        return Math.floor(i)
                                    }
                                    return e.objectMode ? 16 : 16384
                                }
                            }
                        },
                        678: function(e, t, r) {
                            e.exports = r(781)
                        },
                        726: function(e, t, r) {
                            var o = r(781);
                            "disable" === n.env.READABLE_STREAM && o ? (e.exports = o.Readable, Object.assign(e.exports, o), e.exports.Stream = o) : ((t = e.exports = r(709)).Stream = o || t, t.Readable = t, t.Writable = r(337), t.Duplex = r(403), t.Transform = r(170), t.PassThrough = r(889), t.finished = r(698), t.pipeline = r(442))
                        },
                        55: function(e, t, r) {
                            var n = r(300),
                                o = n.Buffer;

                            function i(e, t) {
                                for (var r in e) t[r] = e[r]
                            }

                            function a(e, t, r) {
                                return o(e, t, r)
                            }
                            o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = n : (i(n, t), t.Buffer = a), a.prototype = Object.create(o.prototype), i(o, a), a.from = function(e, t, r) {
                                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                                return o(e, t, r)
                            }, a.alloc = function(e, t, r) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                var n = o(e);
                                return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
                            }, a.allocUnsafe = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return o(e)
                            }, a.allocUnsafeSlow = function(e) {
                                if ("number" != typeof e) throw TypeError("Argument must be a number");
                                return n.SlowBuffer(e)
                            }
                        },
                        813: function(e, t, n) {
                            var o = n(450),
                                i = n(254),
                                a = n(911),
                                s = n(523),
                                c = n(310);
                            t.request = function(e, t) {
                                e = "string" == typeof e ? c.parse(e) : a(e);
                                var n = -1 === r.g.location.protocol.search(/^https?:$/) ? "http:" : "",
                                    i = e.protocol || n,
                                    s = e.hostname || e.host,
                                    u = e.port,
                                    l = e.path || "/";
                                s && -1 !== s.indexOf(":") && (s = "[" + s + "]"), e.url = (s ? i + "//" + s : "") + (u ? ":" + u : "") + l, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                                var d = new o(e);
                                return t && d.on("response", t), d
                            }, t.get = function(e, r) {
                                var n = t.request(e, r);
                                return n.end(), n
                            }, t.ClientRequest = o, t.IncomingMessage = i.IncomingMessage, t.Agent = function() {}, t.Agent.defaultMaxSockets = 4, t.globalAgent = new t.Agent, t.STATUS_CODES = s, t.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
                        },
                        301: function(e, t) {
                            var n;

                            function o() {
                                if (void 0 !== n) return n;
                                if (r.g.XMLHttpRequest) {
                                    n = new r.g.XMLHttpRequest;
                                    try {
                                        n.open("GET", r.g.XDomainRequest ? "/" : "https://example.com")
                                    } catch (e) {
                                        n = null
                                    }
                                } else n = null;
                                return n
                            }

                            function i(e) {
                                var t = o();
                                if (!t) return !1;
                                try {
                                    return t.responseType = e, t.responseType === e
                                } catch (e) {}
                                return !1
                            }

                            function a(e) {
                                return "function" == typeof e
                            }
                            t.fetch = a(r.g.fetch) && a(r.g.ReadableStream), t.writableStream = a(r.g.WritableStream), t.abortController = a(r.g.AbortController), t.arraybuffer = t.fetch || i("arraybuffer"), t.msstream = !t.fetch && i("ms-stream"), t.mozchunkedarraybuffer = !t.fetch && i("moz-chunked-arraybuffer"), t.overrideMimeType = t.fetch || !!o() && a(o().overrideMimeType), n = null
                        },
                        450: function(e, t, i) {
                            var a = i(301),
                                s = i(782),
                                c = i(254),
                                u = i(726),
                                l = c.IncomingMessage,
                                d = c.readyStates,
                                f = e.exports = function(e) {
                                    var t, r, n, i = this;
                                    u.Writable.call(i), i._opts = e, i._body = [], i._headers = {}, e.auth && i.setHeader("Authorization", "Basic " + o.from(e.auth).toString("base64")), Object.keys(e.headers).forEach(function(t) {
                                        i.setHeader(t, e.headers[t])
                                    });
                                    var s = !0;
                                    if ("disable-fetch" === e.mode || "requestTimeout" in e && !a.abortController) s = !1, n = !0;
                                    else if ("prefer-streaming" === e.mode) n = !1;
                                    else if ("allow-wrong-content-type" === e.mode) n = !a.overrideMimeType;
                                    else if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw Error("Invalid value for opts.mode");
                                    else n = !0;
                                    i._mode = (t = n, r = s, a.fetch && r ? "fetch" : a.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : a.msstream ? "ms-stream" : a.arraybuffer && t ? "arraybuffer" : "text"), i._fetchTimer = null, i.on("finish", function() {
                                        i._onFinish()
                                    })
                                };
                            s(f, u.Writable), f.prototype.setHeader = function(e, t) {
                                var r = e.toLowerCase(); - 1 === p.indexOf(r) && (this._headers[r] = {
                                    name: e,
                                    value: t
                                })
                            }, f.prototype.getHeader = function(e) {
                                var t = this._headers[e.toLowerCase()];
                                return t ? t.value : null
                            }, f.prototype.removeHeader = function(e) {
                                delete this._headers[e.toLowerCase()]
                            }, f.prototype._onFinish = function() {
                                var e = this;
                                if (!e._destroyed) {
                                    var t = e._opts,
                                        o = e._headers,
                                        i = null;
                                    "GET" !== t.method && "HEAD" !== t.method && (i = new Blob(e._body, {
                                        type: (o["content-type"] || {}).value || ""
                                    }));
                                    var s = [];
                                    if (Object.keys(o).forEach(function(e) {
                                            var t = o[e].name,
                                                r = o[e].value;
                                            Array.isArray(r) ? r.forEach(function(e) {
                                                s.push([t, e])
                                            }) : s.push([t, r])
                                        }), "fetch" === e._mode) {
                                        var c = null;
                                        if (a.abortController) {
                                            var u = new AbortController;
                                            c = u.signal, e._fetchAbortController = u, "requestTimeout" in t && 0 !== t.requestTimeout && (e._fetchTimer = r.g.setTimeout(function() {
                                                e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort()
                                            }, t.requestTimeout))
                                        }
                                        r.g.fetch(e._opts.url, {
                                            method: e._opts.method,
                                            headers: s,
                                            body: i || void 0,
                                            mode: "cors",
                                            credentials: t.withCredentials ? "include" : "same-origin",
                                            signal: c
                                        }).then(function(t) {
                                            e._fetchResponse = t, e._connect()
                                        }, function(t) {
                                            r.g.clearTimeout(e._fetchTimer), e._destroyed || e.emit("error", t)
                                        })
                                    } else {
                                        var l = e._xhr = new r.g.XMLHttpRequest;
                                        try {
                                            l.open(e._opts.method, e._opts.url, !0)
                                        } catch (t) {
                                            n.nextTick(function() {
                                                e.emit("error", t)
                                            });
                                            return
                                        }
                                        "responseType" in l && (l.responseType = e._mode), "withCredentials" in l && (l.withCredentials = !!t.withCredentials), "text" === e._mode && "overrideMimeType" in l && l.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in t && (l.timeout = t.requestTimeout, l.ontimeout = function() {
                                            e.emit("requestTimeout")
                                        }), s.forEach(function(e) {
                                            l.setRequestHeader(e[0], e[1])
                                        }), e._response = null, l.onreadystatechange = function() {
                                            switch (l.readyState) {
                                                case d.LOADING:
                                                case d.DONE:
                                                    e._onXHRProgress()
                                            }
                                        }, "moz-chunked-arraybuffer" === e._mode && (l.onprogress = function() {
                                            e._onXHRProgress()
                                        }), l.onerror = function() {
                                            e._destroyed || e.emit("error", Error("XHR error"))
                                        };
                                        try {
                                            l.send(i)
                                        } catch (t) {
                                            n.nextTick(function() {
                                                e.emit("error", t)
                                            });
                                            return
                                        }
                                    }
                                }
                            }, f.prototype._onXHRProgress = function() {
                                (function(e) {
                                    try {
                                        var t = e.status;
                                        return null !== t && 0 !== t
                                    } catch (e) {
                                        return !1
                                    }
                                })(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress())
                            }, f.prototype._connect = function() {
                                var e = this;
                                e._destroyed || (e._response = new l(e._xhr, e._fetchResponse, e._mode, e._fetchTimer), e._response.on("error", function(t) {
                                    e.emit("error", t)
                                }), e.emit("response", e._response))
                            }, f.prototype._write = function(e, t, r) {
                                this._body.push(e), r()
                            }, f.prototype.abort = f.prototype.destroy = function() {
                                this._destroyed = !0, r.g.clearTimeout(this._fetchTimer), this._response && (this._response._destroyed = !0), this._xhr ? this._xhr.abort() : this._fetchAbortController && this._fetchAbortController.abort()
                            }, f.prototype.end = function(e, t, r) {
                                "function" == typeof e && (r = e, e = void 0), u.Writable.prototype.end.call(this, e, t, r)
                            }, f.prototype.flushHeaders = function() {}, f.prototype.setTimeout = function() {}, f.prototype.setNoDelay = function() {}, f.prototype.setSocketKeepAlive = function() {};
                            var p = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
                        },
                        254: function(e, t, i) {
                            var a = i(301),
                                s = i(782),
                                c = i(726),
                                u = t.readyStates = {
                                    UNSENT: 0,
                                    OPENED: 1,
                                    HEADERS_RECEIVED: 2,
                                    LOADING: 3,
                                    DONE: 4
                                },
                                l = t.IncomingMessage = function(e, t, i, s) {
                                    var u = this;
                                    if (c.Readable.call(u), u._mode = i, u.headers = {}, u.rawHeaders = [], u.trailers = {}, u.rawTrailers = [], u.on("end", function() {
                                            n.nextTick(function() {
                                                u.emit("close")
                                            })
                                        }), "fetch" === i) {
                                        if (u._fetchResponse = t, u.url = t.url, u.statusCode = t.status, u.statusMessage = t.statusText, t.headers.forEach(function(e, t) {
                                                u.headers[t.toLowerCase()] = e, u.rawHeaders.push(t, e)
                                            }), a.writableStream) {
                                            var l = new WritableStream({
                                                write: function(e) {
                                                    return new Promise(function(t, r) {
                                                        u._destroyed ? r() : u.push(o.from(e)) ? t() : u._resumeFetch = t
                                                    })
                                                },
                                                close: function() {
                                                    r.g.clearTimeout(s), u._destroyed || u.push(null)
                                                },
                                                abort: function(e) {
                                                    u._destroyed || u.emit("error", e)
                                                }
                                            });
                                            try {
                                                t.body.pipeTo(l).catch(function(e) {
                                                    r.g.clearTimeout(s), u._destroyed || u.emit("error", e)
                                                });
                                                return
                                            } catch (e) {}
                                        }
                                        var d = t.body.getReader();
                                        ! function e() {
                                            d.read().then(function(t) {
                                                if (!u._destroyed) {
                                                    if (t.done) {
                                                        r.g.clearTimeout(s), u.push(null);
                                                        return
                                                    }
                                                    u.push(o.from(t.value)), e()
                                                }
                                            }).catch(function(e) {
                                                r.g.clearTimeout(s), u._destroyed || u.emit("error", e)
                                            })
                                        }()
                                    } else if (u._xhr = e, u._pos = 0, u.url = e.responseURL, u.statusCode = e.status, u.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e) {
                                            var t = e.match(/^([^:]+):\s*(.*)/);
                                            if (t) {
                                                var r = t[1].toLowerCase();
                                                "set-cookie" === r ? (void 0 === u.headers[r] && (u.headers[r] = []), u.headers[r].push(t[2])) : void 0 !== u.headers[r] ? u.headers[r] += ", " + t[2] : u.headers[r] = t[2], u.rawHeaders.push(t[1], t[2])
                                            }
                                        }), u._charset = "x-user-defined", !a.overrideMimeType) {
                                        var f = u.rawHeaders["mime-type"];
                                        if (f) {
                                            var p = f.match(/;\s*charset=([^;])(;|$)/);
                                            p && (u._charset = p[1].toLowerCase())
                                        }
                                        u._charset || (u._charset = "utf-8")
                                    }
                                };
                            s(l, c.Readable), l.prototype._read = function() {
                                var e = this._resumeFetch;
                                e && (this._resumeFetch = null, e())
                            }, l.prototype._onXHRProgress = function() {
                                var e = this,
                                    t = e._xhr,
                                    n = null;
                                switch (e._mode) {
                                    case "text":
                                        if ((n = t.responseText).length > e._pos) {
                                            var i = n.substr(e._pos);
                                            if ("x-user-defined" === e._charset) {
                                                for (var a = o.alloc(i.length), s = 0; s < i.length; s++) a[s] = 255 & i.charCodeAt(s);
                                                e.push(a)
                                            } else e.push(i, e._charset);
                                            e._pos = n.length
                                        }
                                        break;
                                    case "arraybuffer":
                                        if (t.readyState !== u.DONE || !t.response) break;
                                        n = t.response, e.push(o.from(new Uint8Array(n)));
                                        break;
                                    case "moz-chunked-arraybuffer":
                                        if (n = t.response, t.readyState !== u.LOADING || !n) break;
                                        e.push(o.from(new Uint8Array(n)));
                                        break;
                                    case "ms-stream":
                                        if (n = t.response, t.readyState !== u.LOADING) break;
                                        var c = new r.g.MSStreamReader;
                                        c.onprogress = function() {
                                            c.result.byteLength > e._pos && (e.push(o.from(new Uint8Array(c.result.slice(e._pos)))), e._pos = c.result.byteLength)
                                        }, c.onload = function() {
                                            e.push(null)
                                        }, c.readAsArrayBuffer(n)
                                }
                                e._xhr.readyState === u.DONE && "ms-stream" !== e._mode && e.push(null)
                            }
                        },
                        704: function(e, t, r) {
                            "use strict";
                            var n = r(55).Buffer,
                                o = n.isEncoding || function(e) {
                                    switch ((e = "" + e) && e.toLowerCase()) {
                                        case "hex":
                                        case "utf8":
                                        case "utf-8":
                                        case "ascii":
                                        case "binary":
                                        case "base64":
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                        case "raw":
                                            return !0;
                                        default:
                                            return !1
                                    }
                                };

                            function i(e) {
                                var t;
                                switch (this.encoding = function(e) {
                                    var t = function(e) {
                                        var t;
                                        if (!e) return "utf8";
                                        for (;;) switch (e) {
                                            case "utf8":
                                            case "utf-8":
                                                return "utf8";
                                            case "ucs2":
                                            case "ucs-2":
                                            case "utf16le":
                                            case "utf-16le":
                                                return "utf16le";
                                            case "latin1":
                                            case "binary":
                                                return "latin1";
                                            case "base64":
                                            case "ascii":
                                            case "hex":
                                                return e;
                                            default:
                                                if (t) return;
                                                e = ("" + e).toLowerCase(), t = !0
                                        }
                                    }(e);
                                    if ("string" != typeof t && (n.isEncoding === o || !o(e))) throw Error("Unknown encoding: " + e);
                                    return t || e
                                }(e), this.encoding) {
                                    case "utf16le":
                                        this.text = c, this.end = u, t = 4;
                                        break;
                                    case "utf8":
                                        this.fillLast = s, t = 4;
                                        break;
                                    case "base64":
                                        this.text = l, this.end = d, t = 3;
                                        break;
                                    default:
                                        this.write = f, this.end = p;
                                        return
                                }
                                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
                            }

                            function a(e) {
                                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
                            }

                            function s(e) {
                                var t = this.lastTotal - this.lastNeed,
                                    r = function(e, t, r) {
                                        if ((192 & t[0]) != 128) return e.lastNeed = 0, "�";
                                        if (e.lastNeed > 1 && t.length > 1) {
                                            if ((192 & t[1]) != 128) return e.lastNeed = 1, "�";
                                            if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return e.lastNeed = 2, "�"
                                        }
                                    }(this, e, 0);
                                return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length)
                            }

                            function c(e, t) {
                                if ((e.length - t) % 2 == 0) {
                                    var r = e.toString("utf16le", t);
                                    if (r) {
                                        var n = r.charCodeAt(r.length - 1);
                                        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                                    }
                                    return r
                                }
                                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
                            }

                            function u(e) {
                                var t = e && e.length ? this.write(e) : "";
                                if (this.lastNeed) {
                                    var r = this.lastTotal - this.lastNeed;
                                    return t + this.lastChar.toString("utf16le", 0, r)
                                }
                                return t
                            }

                            function l(e, t) {
                                var r = (e.length - t) % 3;
                                return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
                            }

                            function d(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
                            }

                            function f(e) {
                                return e.toString(this.encoding)
                            }

                            function p(e) {
                                return e && e.length ? this.write(e) : ""
                            }
                            t.s = i, i.prototype.write = function(e) {
                                var t, r;
                                if (0 === e.length) return "";
                                if (this.lastNeed) {
                                    if (void 0 === (t = this.fillLast(e))) return "";
                                    r = this.lastNeed, this.lastNeed = 0
                                } else r = 0;
                                return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
                            }, i.prototype.end = function(e) {
                                var t = e && e.length ? this.write(e) : "";
                                return this.lastNeed ? t + "�" : t
                            }, i.prototype.text = function(e, t) {
                                var r = function(e, t, r) {
                                    var n = t.length - 1;
                                    if (n < r) return 0;
                                    var o = a(t[n]);
                                    return o >= 0 ? (o > 0 && (e.lastNeed = o - 1), o) : --n < r || -2 === o ? 0 : (o = a(t[n])) >= 0 ? (o > 0 && (e.lastNeed = o - 2), o) : --n < r || -2 === o ? 0 : (o = a(t[n])) >= 0 ? (o > 0 && (2 === o ? o = 0 : e.lastNeed = o - 3), o) : 0
                                }(this, e, t);
                                if (!this.lastNeed) return e.toString("utf8", t);
                                this.lastTotal = r;
                                var n = e.length - (r - this.lastNeed);
                                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
                            }, i.prototype.fillLast = function(e) {
                                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                            }
                        },
                        769: function(e) {
                            e.exports = function(e, r) {
                                if (t("noDeprecation")) return e;
                                var n = !1;
                                return function() {
                                    if (!n) {
                                        if (t("throwDeprecation")) throw Error(r);
                                        t("traceDeprecation") ? console.trace(r) : console.warn(r), n = !0
                                    }
                                    return e.apply(this, arguments)
                                }
                            };

                            function t(e) {
                                try {
                                    if (!r.g.localStorage) return !1
                                } catch (e) {
                                    return !1
                                }
                                var t = r.g.localStorage[e];
                                return null != t && "true" === String(t).toLowerCase()
                            }
                        },
                        911: function(e) {
                            e.exports = function() {
                                for (var e = {}, r = 0; r < arguments.length; r++) {
                                    var n = arguments[r];
                                    for (var o in n) t.call(n, o) && (e[o] = n[o])
                                }
                                return e
                            };
                            var t = Object.prototype.hasOwnProperty
                        },
                        300: function(e) {
                            "use strict";
                            e.exports = r(21876)
                        },
                        361: function(e) {
                            "use strict";
                            e.exports = r(17187)
                        },
                        781: function(e) {
                            "use strict";
                            e.exports = r(79681)
                        },
                        310: function(e) {
                            "use strict";
                            e.exports = r(11987)
                        },
                        837: function(e) {
                            "use strict";
                            e.exports = r(79720)
                        }
                    },
                    i = {};

                function a(e) {
                    var r = i[e];
                    if (void 0 !== r) return r.exports;
                    var n = i[e] = {
                            exports: {}
                        },
                        o = !0;
                    try {
                        t[e](n, n.exports, a), o = !1
                    } finally {
                        o && delete i[e]
                    }
                    return n.exports
                }
                a.ab = "//";
                var s = a(813);
                e.exports = s
            }()
        },
        84040: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    getPathname: function() {
                        return n
                    },
                    isFullStringUrl: function() {
                        return o
                    },
                    parseUrl: function() {
                        return i
                    }
                });
            let r = "http://n";

            function n(e) {
                return new URL(e, r).pathname
            }

            function o(e) {
                return /https?:\/\//.test(e)
            }

            function i(e) {
                let t;
                try {
                    t = new URL(e, r)
                } catch {}
                return t
            }
        },
        58699: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    Postpone: function() {
                        return f
                    },
                    createPostponedAbortSignal: function() {
                        return b
                    },
                    createPrerenderState: function() {
                        return u
                    },
                    formatDynamicAPIAccesses: function() {
                        return g
                    },
                    markCurrentScopeAsDynamic: function() {
                        return l
                    },
                    trackDynamicDataAccessed: function() {
                        return d
                    },
                    trackDynamicFetch: function() {
                        return p
                    },
                    usedDynamicAPIs: function() {
                        return y
                    }
                });
            let o = (n = r(67294)) && n.__esModule ? n : {
                    default: n
                },
                i = r(1539),
                a = r(72700),
                s = r(84040),
                c = "function" == typeof o.default.unstable_postpone;

            function u(e) {
                return {
                    isDebugSkeleton: e,
                    dynamicAccesses: []
                }
            }

            function l(e, t) {
                let r = (0, s.getPathname)(e.urlPathname);
                if (!e.isUnstableCacheCallback) {
                    if (e.dynamicShouldError) throw new a.StaticGenBailoutError(`Route ${r} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
                    if (e.prerenderState) h(e.prerenderState, t, r);
                    else if (e.revalidate = 0, e.isStaticGeneration) {
                        let n = new i.DynamicServerError(`Route ${r} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                        throw e.dynamicUsageDescription = t, e.dynamicUsageStack = n.stack, n
                    }
                }
            }

            function d(e, t) {
                let r = (0, s.getPathname)(e.urlPathname);
                if (e.isUnstableCacheCallback) throw Error(`Route ${r} used "${t}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${t}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
                if (e.dynamicShouldError) throw new a.StaticGenBailoutError(`Route ${r} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
                if (e.prerenderState) h(e.prerenderState, t, r);
                else if (e.revalidate = 0, e.isStaticGeneration) {
                    let n = new i.DynamicServerError(`Route ${r} couldn't be rendered statically because it used \`${t}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
                    throw e.dynamicUsageDescription = t, e.dynamicUsageStack = n.stack, n
                }
            }

            function f({
                reason: e,
                prerenderState: t,
                pathname: r
            }) {
                h(t, e, r)
            }

            function p(e, t) {
                e.prerenderState && h(e.prerenderState, t, e.urlPathname)
            }

            function h(e, t, r) {
                m();
                let n = `Route ${r} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
                e.dynamicAccesses.push({
                    stack: e.isDebugSkeleton ? Error().stack : void 0,
                    expression: t
                }), o.default.unstable_postpone(n)
            }

            function y(e) {
                return e.dynamicAccesses.length > 0
            }

            function g(e) {
                return e.dynamicAccesses.filter(e => "string" == typeof e.stack && e.stack.length > 0).map(({
                    expression: e,
                    stack: t
                }) => (t = t.split("\n").slice(4).filter(e => !(e.includes("node_modules/next/") || e.includes(" (<anonymous>)") || e.includes(" (node:"))).join("\n"), `Dynamic API Usage Debug - ${e}:
${t}`))
            }

            function m() {
                if (!c) throw Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js")
            }

            function b(e) {
                m();
                let t = new AbortController;
                try {
                    o.default.unstable_postpone(e)
                } catch (e) {
                    t.abort(e)
                }
                return t.signal
            }
        },
        34042: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    HeadersAdapter: function() {
                        return i
                    },
                    ReadonlyHeadersError: function() {
                        return o
                    }
                });
            let n = r(47246);
            class o extends Error {
                constructor() {
                    super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")
                }
                static callable() {
                    throw new o
                }
            }
            class i extends Headers {
                constructor(e) {
                    super(), this.headers = new Proxy(e, {
                        get(t, r, o) {
                            if ("symbol" == typeof r) return n.ReflectAdapter.get(t, r, o);
                            let i = r.toLowerCase(),
                                a = Object.keys(e).find(e => e.toLowerCase() === i);
                            if (void 0 !== a) return n.ReflectAdapter.get(t, a, o)
                        },
                        set(t, r, o, i) {
                            if ("symbol" == typeof r) return n.ReflectAdapter.set(t, r, o, i);
                            let a = r.toLowerCase(),
                                s = Object.keys(e).find(e => e.toLowerCase() === a);
                            return n.ReflectAdapter.set(t, s ? ? r, o, i)
                        },
                        has(t, r) {
                            if ("symbol" == typeof r) return n.ReflectAdapter.has(t, r);
                            let o = r.toLowerCase(),
                                i = Object.keys(e).find(e => e.toLowerCase() === o);
                            return void 0 !== i && n.ReflectAdapter.has(t, i)
                        },
                        deleteProperty(t, r) {
                            if ("symbol" == typeof r) return n.ReflectAdapter.deleteProperty(t, r);
                            let o = r.toLowerCase(),
                                i = Object.keys(e).find(e => e.toLowerCase() === o);
                            return void 0 === i || n.ReflectAdapter.deleteProperty(t, i)
                        }
                    })
                }
                static seal(e) {
                    return new Proxy(e, {
                        get(e, t, r) {
                            switch (t) {
                                case "append":
                                case "delete":
                                case "set":
                                    return o.callable;
                                default:
                                    return n.ReflectAdapter.get(e, t, r)
                            }
                        }
                    })
                }
                merge(e) {
                    return Array.isArray(e) ? e.join(", ") : e
                }
                static from(e) {
                    return e instanceof Headers ? e : new i(e)
                }
                append(e, t) {
                    let r = this.headers[e];
                    "string" == typeof r ? this.headers[e] = [r, t] : Array.isArray(r) ? r.push(t) : this.headers[e] = t
                }
                delete(e) {
                    delete this.headers[e]
                }
                get(e) {
                    let t = this.headers[e];
                    return void 0 !== t ? this.merge(t) : null
                }
                has(e) {
                    return void 0 !== this.headers[e]
                }
                set(e, t) {
                    this.headers[e] = t
                }
                forEach(e, t) {
                    for (let [r, n] of this.entries()) e.call(t, n, r, this)
                }* entries() {
                    for (let e of Object.keys(this.headers)) {
                        let t = e.toLowerCase(),
                            r = this.get(t);
                        yield [t, r]
                    }
                }* keys() {
                    for (let e of Object.keys(this.headers)) {
                        let t = e.toLowerCase();
                        yield t
                    }
                }* values() {
                    for (let e of Object.keys(this.headers)) {
                        let t = this.get(e);
                        yield t
                    }
                }[Symbol.iterator]() {
                    return this.entries()
                }
            }
        },
        47246: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReflectAdapter", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            class r {
                static get(e, t, r) {
                    let n = Reflect.get(e, t, r);
                    return "function" == typeof n ? n.bind(e) : n
                }
                static set(e, t, r, n) {
                    return Reflect.set(e, t, r, n)
                }
                static has(e, t) {
                    return Reflect.has(e, t)
                }
                static deleteProperty(e, t) {
                    return Reflect.deleteProperty(e, t)
                }
            }
        },
        9407: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    MutableRequestCookiesAdapter: function() {
                        return d
                    },
                    ReadonlyRequestCookiesError: function() {
                        return a
                    },
                    RequestCookiesAdapter: function() {
                        return s
                    },
                    appendMutableCookies: function() {
                        return l
                    },
                    getModifiedCookieValues: function() {
                        return u
                    }
                });
            let n = r(80255),
                o = r(47246),
                i = r(18119);
            class a extends Error {
                constructor() {
                    super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")
                }
                static callable() {
                    throw new a
                }
            }
            class s {
                static seal(e) {
                    return new Proxy(e, {
                        get(e, t, r) {
                            switch (t) {
                                case "clear":
                                case "delete":
                                case "set":
                                    return a.callable;
                                default:
                                    return o.ReflectAdapter.get(e, t, r)
                            }
                        }
                    })
                }
            }
            let c = Symbol.for("next.mutated.cookies");

            function u(e) {
                let t = e[c];
                return t && Array.isArray(t) && 0 !== t.length ? t : []
            }

            function l(e, t) {
                let r = u(t);
                if (0 === r.length) return !1;
                let o = new n.ResponseCookies(e),
                    i = o.getAll();
                for (let e of r) o.set(e);
                for (let e of i) o.set(e);
                return !0
            }
            class d {
                static wrap(e, t) {
                    let r = new n.ResponseCookies(new Headers);
                    for (let t of e.getAll()) r.set(t);
                    let a = [],
                        s = new Set,
                        u = () => {
                            let e = i.staticGenerationAsyncStorage.getStore();
                            if (e && (e.pathWasRevalidated = !0), a = r.getAll().filter(e => s.has(e.name)), t) {
                                let e = [];
                                for (let t of a) {
                                    let r = new n.ResponseCookies(new Headers);
                                    r.set(t), e.push(r.toString())
                                }
                                t(e)
                            }
                        };
                    return new Proxy(r, {
                        get(e, t, r) {
                            switch (t) {
                                case c:
                                    return a;
                                case "delete":
                                    return function(...t) {
                                        s.add("string" == typeof t[0] ? t[0] : t[0].name);
                                        try {
                                            e.delete(...t)
                                        } finally {
                                            u()
                                        }
                                    };
                                case "set":
                                    return function(...t) {
                                        s.add("string" == typeof t[0] ? t[0] : t[0].name);
                                        try {
                                            return e.set(...t)
                                        } finally {
                                            u()
                                        }
                                    };
                                default:
                                    return o.ReflectAdapter.get(e, t, r)
                            }
                        }
                    })
                }
            }
        },
        80255: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    RequestCookies: function() {
                        return n.RequestCookies
                    },
                    ResponseCookies: function() {
                        return n.ResponseCookies
                    },
                    stringifyCookie: function() {
                        return n.stringifyCookie
                    }
                });
            let n = r(89079)
        },
        14970: function(e, t, r) {
            e.exports = r(36849)
        },
        79169: function(e, t, r) {
            t.OAuth = r(33503).OAuth, t.OAuthEcho = r(33503).OAuthEcho, t.OAuth2 = r(72327).OAuth2
        },
        58742: function(e) {
            e.exports.isAnEarlyCloseHost = function(e) {
                return e && e.match(".*google(apis)?.com$")
            }
        },
        33503: function(e, t, r) {
            var n = r(21876).Buffer,
                o = r(42474),
                i = r(80969),
                a = r(22321),
                s = r(78428),
                c = r(11987),
                u = r(97334),
                l = r(58742);
            t.OAuth = function(e, t, r, n, o, i, a, s, c) {
                if (this._isEcho = !1, this._requestUrl = e, this._accessUrl = t, this._consumerKey = r, this._consumerSecret = this._encodeData(n), "RSA-SHA1" == a && (this._privateKey = n), this._version = o, void 0 === i ? this._authorize_callback = "oob" : this._authorize_callback = i, "PLAINTEXT" != a && "HMAC-SHA1" != a && "RSA-SHA1" != a) throw Error("Un-supported signature method: " + a);
                this._signatureMethod = a, this._nonceSize = s || 32, this._headers = c || {
                    Accept: "*/*",
                    Connection: "close",
                    "User-Agent": "Node authentication"
                }, this._clientOptions = this._defaultClientOptions = {
                    requestTokenHttpMethod: "POST",
                    accessTokenHttpMethod: "POST",
                    followRedirects: !0
                }, this._oauthParameterSeperator = ","
            }, t.OAuthEcho = function(e, t, r, n, o, i, a, s) {
                if (this._isEcho = !0, this._realm = e, this._verifyCredentials = t, this._consumerKey = r, this._consumerSecret = this._encodeData(n), "RSA-SHA1" == i && (this._privateKey = n), this._version = o, "PLAINTEXT" != i && "HMAC-SHA1" != i && "RSA-SHA1" != i) throw Error("Un-supported signature method: " + i);
                this._signatureMethod = i, this._nonceSize = a || 32, this._headers = s || {
                    Accept: "*/*",
                    Connection: "close",
                    "User-Agent": "Node authentication"
                }, this._oauthParameterSeperator = ","
            }, t.OAuthEcho.prototype = t.OAuth.prototype, t.OAuth.prototype._getTimestamp = function() {
                return Math.floor(new Date().getTime() / 1e3)
            }, t.OAuth.prototype._encodeData = function(e) {
                return null == e || "" == e ? "" : encodeURIComponent(e).replace(/\!/g, "%21").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A")
            }, t.OAuth.prototype._decodeData = function(e) {
                return null != e && (e = e.replace(/\+/g, " ")), decodeURIComponent(e)
            }, t.OAuth.prototype._getSignature = function(e, t, r, n) {
                var o = this._createSignatureBase(e, t, r);
                return this._createSignature(o, n)
            }, t.OAuth.prototype._normalizeUrl = function(e) {
                var t = c.parse(e, !0),
                    r = "";
                return t.port && ("http:" == t.protocol && "80" != t.port || "https:" == t.protocol && "443" != t.port) && (r = ":" + t.port), t.pathname && "" != t.pathname || (t.pathname = "/"), t.protocol + "//" + t.hostname + r + t.pathname
            }, t.OAuth.prototype._isParameterNameAnOAuthParameter = function(e) {
                var t = e.match("^oauth_");
                return !!t && "oauth_" === t[0]
            }, t.OAuth.prototype._buildAuthorizationHeaders = function(e) {
                var t = "OAuth ";
                this._isEcho && (t += 'realm="' + this._realm + '",');
                for (var r = 0; r < e.length; r++) this._isParameterNameAnOAuthParameter(e[r][0]) && (t += "" + this._encodeData(e[r][0]) + '="' + this._encodeData(e[r][1]) + '"' + this._oauthParameterSeperator);
                return t.substring(0, t.length - this._oauthParameterSeperator.length)
            }, t.OAuth.prototype._makeArrayOfArgumentsHash = function(e) {
                var t = [];
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var n = e[r];
                        if (Array.isArray(n))
                            for (var o = 0; o < n.length; o++) t[t.length] = [r, n[o]];
                        else t[t.length] = [r, n]
                    }
                return t
            }, t.OAuth.prototype._sortRequestParams = function(e) {
                return e.sort(function(e, t) {
                    return e[0] == t[0] ? e[1] < t[1] ? -1 : 1 : e[0] < t[0] ? -1 : 1
                }), e
            }, t.OAuth.prototype._normaliseRequestParams = function(e) {
                for (var t = this._makeArrayOfArgumentsHash(e), r = 0; r < t.length; r++) t[r][0] = this._encodeData(t[r][0]), t[r][1] = this._encodeData(t[r][1]);
                t = this._sortRequestParams(t);
                for (var e = "", r = 0; r < t.length; r++) e += t[r][0] + "=" + t[r][1], r < t.length - 1 && (e += "&");
                return e
            }, t.OAuth.prototype._createSignatureBase = function(e, t, r) {
                return t = this._encodeData(this._normalizeUrl(t)), r = this._encodeData(r), e.toUpperCase() + "&" + t + "&" + r
            }, t.OAuth.prototype._createSignature = function(e, t) {
                if (void 0 === t) var t = "";
                else t = this._encodeData(t);
                var r = this._consumerSecret + "&" + t,
                    n = "";
                return "PLAINTEXT" == this._signatureMethod ? n = r : "RSA-SHA1" == this._signatureMethod ? (r = this._privateKey || "", n = o.createSign("RSA-SHA1").update(e).sign(r, "base64")) : n = o.Hmac ? o.createHmac("sha1", r).update(e).digest("base64") : i.HMACSHA1(r, e), n
            }, t.OAuth.prototype.NONCE_CHARS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], t.OAuth.prototype._getNonce = function(e) {
                for (var t, r = [], n = this.NONCE_CHARS, o = n.length, i = 0; i < e; i++) t = Math.floor(Math.random() * o), r[i] = n[t];
                return r.join("")
            }, t.OAuth.prototype._createClient = function(e, t, r, n, o, i) {
                return (i ? s : a).request({
                    host: t,
                    port: e,
                    path: n,
                    method: r,
                    headers: o
                })
            }, t.OAuth.prototype._prepareParameters = function(e, t, r, n, o) {
                var i = {
                    oauth_timestamp: this._getTimestamp(),
                    oauth_nonce: this._getNonce(this._nonceSize),
                    oauth_version: this._version,
                    oauth_signature_method: this._signatureMethod,
                    oauth_consumer_key: this._consumerKey
                };
                if (e && (i.oauth_token = e), this._isEcho) l = this._getSignature("GET", this._verifyCredentials, this._normaliseRequestParams(i), t);
                else {
                    if (o)
                        for (var a in o) o.hasOwnProperty(a) && (i[a] = o[a]);
                    var s = c.parse(n, !1);
                    if (s.query) {
                        var l, d, f = u.parse(s.query);
                        for (var a in f) {
                            var p = f[a];
                            if ("object" == typeof p)
                                for (d in p) i[a + "[" + d + "]"] = p[d];
                            else i[a] = p
                        }
                    }
                    l = this._getSignature(r, n, this._normaliseRequestParams(i), t)
                }
                var h = this._sortRequestParams(this._makeArrayOfArgumentsHash(i));
                return h[h.length] = ["oauth_signature", l], h
            }, t.OAuth.prototype._performSecureRequest = function(e, t, r, o, i, a, s, d) {
                var f, p, h = this._prepareParameters(e, t, r, o, i);
                s || (s = "application/x-www-form-urlencoded");
                var y = c.parse(o, !1);
                "http:" != y.protocol || y.port || (y.port = 80), "https:" != y.protocol || y.port || (y.port = 443);
                var g = {},
                    m = this._buildAuthorizationHeaders(h);
                for (var b in this._isEcho ? g["X-Verify-Credentials-Authorization"] = m : g.Authorization = m, g.Host = y.host, this._headers) this._headers.hasOwnProperty(b) && (g[b] = this._headers[b]);
                for (var b in i) this._isParameterNameAnOAuthParameter(b) && delete i[b];
                ("POST" == r || "PUT" == r) && null == a && null != i && (a = u.stringify(i).replace(/\!/g, "%21").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A")), a ? n.isBuffer(a) ? g["Content-length"] = a.length : g["Content-length"] = n.byteLength(a) : g["Content-length"] = 0, g["Content-Type"] = s, y.pathname && "" != y.pathname || (y.pathname = "/"), f = y.query ? y.pathname + "?" + y.query : y.pathname, p = "https:" == y.protocol ? this._createClient(y.port, y.hostname, r, f, g, !0) : this._createClient(y.port, y.hostname, r, f, g);
                var v = this._clientOptions;
                if (!d) return ("POST" == r || "PUT" == r) && null != a && "" != a && p.write(a), p;
                var _ = "",
                    w = this,
                    S = l.isAnEarlyCloseHost(y.hostname),
                    E = !1,
                    A = function(n) {
                        E || (E = !0, n.statusCode >= 200 && n.statusCode <= 299 ? d(null, _, n) : (301 == n.statusCode || 302 == n.statusCode) && v.followRedirects && n.headers && n.headers.location ? w._performSecureRequest(e, t, r, n.headers.location, i, a, s, d) : d({
                            statusCode: n.statusCode,
                            data: _
                        }, _, n))
                    };
                p.on("response", function(e) {
                    e.setEncoding("utf8"), e.on("data", function(e) {
                        _ += e
                    }), e.on("end", function() {
                        A(e)
                    }), e.on("close", function() {
                        S && A(e)
                    })
                }), p.on("error", function(e) {
                    E || (E = !0, d(e))
                }), ("POST" == r || "PUT" == r) && null != a && "" != a && p.write(a), p.end()
            }, t.OAuth.prototype.setClientOptions = function(e) {
                var t, r = {},
                    n = Object.prototype.hasOwnProperty;
                for (t in this._defaultClientOptions) n.call(e, t) ? r[t] = e[t] : r[t] = this._defaultClientOptions[t];
                this._clientOptions = r
            }, t.OAuth.prototype.getOAuthAccessToken = function(e, t, r, n) {
                var o = {};
                "function" == typeof r ? n = r : o.oauth_verifier = r, this._performSecureRequest(e, t, this._clientOptions.accessTokenHttpMethod, this._accessUrl, o, null, null, function(e, t, r) {
                    if (e) n(e);
                    else {
                        var o = u.parse(t),
                            i = o.oauth_token;
                        delete o.oauth_token;
                        var a = o.oauth_token_secret;
                        delete o.oauth_token_secret, n(null, i, a, o)
                    }
                })
            }, t.OAuth.prototype.getProtectedResource = function(e, t, r, n, o) {
                this._performSecureRequest(r, n, t, e, null, "", null, o)
            }, t.OAuth.prototype.delete = function(e, t, r, n) {
                return this._performSecureRequest(t, r, "DELETE", e, null, "", null, n)
            }, t.OAuth.prototype.get = function(e, t, r, n) {
                return this._performSecureRequest(t, r, "GET", e, null, "", null, n)
            }, t.OAuth.prototype._putOrPost = function(e, t, r, o, i, a, s) {
                var c = null;
                return "function" == typeof a && (s = a, a = null), "string" == typeof i || n.isBuffer(i) || (a = "application/x-www-form-urlencoded", c = i, i = null), this._performSecureRequest(r, o, e, t, c, i, a, s)
            }, t.OAuth.prototype.put = function(e, t, r, n, o, i) {
                return this._putOrPost("PUT", e, t, r, n, o, i)
            }, t.OAuth.prototype.post = function(e, t, r, n, o, i) {
                return this._putOrPost("POST", e, t, r, n, o, i)
            }, t.OAuth.prototype.getOAuthRequestToken = function(e, t) {
                "function" == typeof e && (t = e, e = {}), this._authorize_callback && (e.oauth_callback = this._authorize_callback), this._performSecureRequest(null, null, this._clientOptions.requestTokenHttpMethod, this._requestUrl, e, null, null, function(e, r, n) {
                    if (e) t(e);
                    else {
                        var o = u.parse(r),
                            i = o.oauth_token,
                            a = o.oauth_token_secret;
                        delete o.oauth_token, delete o.oauth_token_secret, t(null, i, a, o)
                    }
                })
            }, t.OAuth.prototype.signUrl = function(e, t, r, n) {
                if (void 0 === n) var n = "GET";
                for (var o = this._prepareParameters(t, r, n, e, {}), i = c.parse(e, !1), a = "", s = 0; s < o.length; s++) a += o[s][0] + "=" + this._encodeData(o[s][1]) + "&";
                return a = a.substring(0, a.length - 1), i.protocol + "//" + i.host + i.pathname + "?" + a
            }, t.OAuth.prototype.authHeader = function(e, t, r, n) {
                if (void 0 === n) var n = "GET";
                var o = this._prepareParameters(t, r, n, e, {});
                return this._buildAuthorizationHeaders(o)
            }
        },
        72327: function(e, t, r) {
            var n = r(21876).Buffer,
                o = r(97334),
                i = (r(42474), r(78428)),
                a = r(22321),
                s = r(11987),
                c = r(58742);
            t.OAuth2 = function(e, t, r, n, o, i) {
                this._clientId = e, this._clientSecret = t, this._baseSite = r, this._authorizeUrl = n || "/oauth/authorize", this._accessTokenUrl = o || "/oauth/access_token", this._accessTokenName = "access_token", this._authMethod = "Bearer", this._customHeaders = i || {}, this._useAuthorizationHeaderForGET = !1, this._agent = void 0
            }, t.OAuth2.prototype.setAgent = function(e) {
                this._agent = e
            }, t.OAuth2.prototype.setAccessTokenName = function(e) {
                this._accessTokenName = e
            }, t.OAuth2.prototype.setAuthMethod = function(e) {
                this._authMethod = e
            }, t.OAuth2.prototype.useAuthorizationHeaderforGET = function(e) {
                this._useAuthorizationHeaderForGET = e
            }, t.OAuth2.prototype._getAccessTokenUrl = function() {
                return this._baseSite + this._accessTokenUrl
            }, t.OAuth2.prototype.buildAuthHeader = function(e) {
                return this._authMethod + " " + e
            }, t.OAuth2.prototype._chooseHttpLibrary = function(e) {
                var t = i;
                return "https:" != e.protocol && (t = a), t
            }, t.OAuth2.prototype._request = function(e, t, r, i, a, c) {
                var u = s.parse(t, !0);
                "https:" != u.protocol || u.port || (u.port = 443);
                var l = this._chooseHttpLibrary(u),
                    d = {};
                for (var f in this._customHeaders) d[f] = this._customHeaders[f];
                if (r)
                    for (var f in r) d[f] = r[f];
                d.Host = u.host, d["User-Agent"] || (d["User-Agent"] = "Node-oauth"), i ? n.isBuffer(i) ? d["Content-Length"] = i.length : d["Content-Length"] = n.byteLength(i) : d["Content-length"] = 0, !a || "Authorization" in d || (u.query || (u.query = {}), u.query[this._accessTokenName] = a);
                var p = o.stringify(u.query);
                p && (p = "?" + p);
                var h = {
                    host: u.hostname,
                    port: u.port,
                    path: u.pathname + p,
                    method: e,
                    headers: d
                };
                this._executeRequest(l, h, i, c)
            }, t.OAuth2.prototype._executeRequest = function(e, t, r, n) {
                var o = c.isAnEarlyCloseHost(t.host),
                    i = !1;

                function a(e, t) {
                    i || (i = !0, e.statusCode >= 200 && e.statusCode <= 299 || 301 == e.statusCode || 302 == e.statusCode ? n(null, t, e) : n({
                        statusCode: e.statusCode,
                        data: t
                    }))
                }
                var s = "";
                this._agent && (t.agent = this._agent);
                var u = e.request(t);
                u.on("response", function(e) {
                    e.on("data", function(e) {
                        s += e
                    }), e.on("close", function(t) {
                        o && a(e, s)
                    }), e.addListener("end", function() {
                        a(e, s)
                    })
                }), u.on("error", function(e) {
                    i = !0, n(e)
                }), ("POST" == t.method || "PUT" == t.method) && r && u.write(r), u.end()
            }, t.OAuth2.prototype.getAuthorizeUrl = function(e) {
                var e = e || {};
                return e.client_id = this._clientId, this._baseSite + this._authorizeUrl + "?" + o.stringify(e)
            }, t.OAuth2.prototype.getOAuthAccessToken = function(e, t, r) {
                var t = t || {};
                t.client_id = this._clientId, t.client_secret = this._clientSecret;
                var n = "refresh_token" === t.grant_type ? "refresh_token" : "code";
                t[n] = e;
                var i = o.stringify(t);
                this._request("POST", this._getAccessTokenUrl(), {
                    "Content-Type": "application/x-www-form-urlencoded"
                }, i, null, function(e, t, n) {
                    if (e) r(e);
                    else {
                        try {
                            i = JSON.parse(t)
                        } catch (e) {
                            i = o.parse(t)
                        }
                        var i, a = i.access_token,
                            s = i.refresh_token;
                        delete i.refresh_token, r(null, a, s, i)
                    }
                })
            }, t.OAuth2.prototype.getProtectedResource = function(e, t, r) {
                this._request("GET", e, {}, "", t, r)
            }, t.OAuth2.prototype.get = function(e, t, r) {
                if (this._useAuthorizationHeaderForGET) {
                    var n = {
                        Authorization: this.buildAuthHeader(t)
                    };
                    t = null
                } else n = {};
                this._request("GET", e, n, "", t, r)
            }
        },
        80969: function(e, t) {
            function r(e) {
                for (var t, r, n = "", o = -1; ++o < e.length;) t = e.charCodeAt(o), r = o + 1 < e.length ? e.charCodeAt(o + 1) : 0, 55296 <= t && t <= 56319 && 56320 <= r && r <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & r), o++), t <= 127 ? n += String.fromCharCode(t) : t <= 2047 ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
                return n
            }

            function n(e) {
                for (var t = Array(e.length >> 2), r = 0; r < t.length; r++) t[r] = 0;
                for (var r = 0; r < 8 * e.length; r += 8) t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << 24 - r % 32;
                return t
            }

            function o(e, t) {
                e[t >> 5] |= 128 << 24 - t % 32, e[(t + 64 >> 9 << 4) + 15] = t;
                for (var r = Array(80), n = 1732584193, o = -271733879, s = -1732584194, c = 271733878, u = -1009589776, l = 0; l < e.length; l += 16) {
                    for (var d = n, f = o, p = s, h = c, y = u, g = 0; g < 80; g++) {
                        g < 16 ? r[g] = e[l + g] : r[g] = a(r[g - 3] ^ r[g - 8] ^ r[g - 14] ^ r[g - 16], 1);
                        var m, b, v, _, w, S = i(i(a(n, 5), (m = g, b = o, v = s, _ = c, m < 20 ? b & v | ~b & _ : m < 40 ? b ^ v ^ _ : m < 60 ? b & v | b & _ | v & _ : b ^ v ^ _)), i(i(u, r[g]), (w = g) < 20 ? 1518500249 : w < 40 ? 1859775393 : w < 60 ? -1894007588 : -899497514));
                        u = c, c = s, s = a(o, 30), o = n, n = S
                    }
                    n = i(n, d), o = i(o, f), s = i(s, p), c = i(c, h), u = i(u, y)
                }
                return [n, o, s, c, u]
            }

            function i(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
            }

            function a(e, t) {
                return e << t | e >>> 32 - t
            }
            t.HMACSHA1 = function(e, t) {
                return function(e) {
                    for (var t = "", r = e.length, n = 0; n < r; n += 3)
                        for (var o = e.charCodeAt(n) << 16 | (n + 1 < r ? e.charCodeAt(n + 1) << 8 : 0) | (n + 2 < r ? e.charCodeAt(n + 2) : 0), i = 0; i < 4; i++) 8 * n + 6 * i > 8 * e.length ? t += "=" : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - i) & 63);
                    return t
                }(function(e, t) {
                    var r = n(e);
                    r.length > 16 && (r = o(r, 8 * e.length));
                    for (var i = Array(16), a = Array(16), s = 0; s < 16; s++) i[s] = 909522486 ^ r[s], a[s] = 1549556828 ^ r[s];
                    var c = o(i.concat(n(t)), 512 + 8 * t.length);
                    return function(e) {
                        for (var t = "", r = 0; r < 32 * e.length; r += 8) t += String.fromCharCode(e[r >> 5] >>> 24 - r % 32 & 255);
                        return t
                    }(o(a.concat(c), 672))
                }(r(e), r(t)))
            }
        },
        40705: function(e) {
            var t;
            t = function() {
                return (function e(t, r, n) {
                    function o(a, s) {
                        if (!r[a]) {
                            if (!t[a]) {
                                if (i) return i(a, !0);
                                throw Error("Cannot find module '" + a + "'")
                            }
                            var c = r[a] = {
                                exports: {}
                            };
                            t[a][0].call(c.exports, function(e) {
                                return o(t[a][1][e] || e)
                            }, c, c.exports, e, t, r, n)
                        }
                        return r[a].exports
                    }
                    for (var i = void 0, a = 0; a < n.length; a++) o(n[a]);
                    return o
                })({
                    1: [function(e, t, r) {
                        (function(n, o, i, a, s, c, u, l, d) {
                            "use strict";
                            var f = e("crypto");

                            function p(e, t) {
                                return function(e, t) {
                                    if (void 0 === (r = "passthrough" !== t.algorithm ? f.createHash(t.algorithm) : new v).write && (r.write = r.update, r.end = r.update), b(t, r).dispatch(e), r.update || r.end(""), r.digest) return r.digest("buffer" === t.encoding ? void 0 : t.encoding);
                                    var r, n = r.read();
                                    return "buffer" !== t.encoding ? n.toString(t.encoding) : n
                                }(e, t = g(e, t))
                            }(r = t.exports = p).sha1 = function(e) {
                                return p(e)
                            }, r.keys = function(e) {
                                return p(e, {
                                    excludeValues: !0,
                                    algorithm: "sha1",
                                    encoding: "hex"
                                })
                            }, r.MD5 = function(e) {
                                return p(e, {
                                    algorithm: "md5",
                                    encoding: "hex"
                                })
                            }, r.keysMD5 = function(e) {
                                return p(e, {
                                    algorithm: "md5",
                                    encoding: "hex",
                                    excludeValues: !0
                                })
                            };
                            var h = f.getHashes ? f.getHashes().slice() : ["sha1", "md5"];
                            h.push("passthrough");
                            var y = ["buffer", "hex", "binary", "base64"];

                            function g(e, t) {
                                t = t || {};
                                var r = {};
                                if (r.algorithm = t.algorithm || "sha1", r.encoding = t.encoding || "hex", r.excludeValues = !!t.excludeValues, r.algorithm = r.algorithm.toLowerCase(), r.encoding = r.encoding.toLowerCase(), r.ignoreUnknown = !0 === t.ignoreUnknown, r.respectType = !1 !== t.respectType, r.respectFunctionNames = !1 !== t.respectFunctionNames, r.respectFunctionProperties = !1 !== t.respectFunctionProperties, r.unorderedArrays = !0 === t.unorderedArrays, r.unorderedSets = !1 !== t.unorderedSets, r.unorderedObjects = !1 !== t.unorderedObjects, r.replacer = t.replacer || void 0, r.excludeKeys = t.excludeKeys || void 0, void 0 === e) throw Error("Object argument required.");
                                for (var n = 0; n < h.length; ++n) h[n].toLowerCase() === r.algorithm.toLowerCase() && (r.algorithm = h[n]);
                                if (-1 === h.indexOf(r.algorithm)) throw Error('Algorithm "' + r.algorithm + '"  not supported. supported values: ' + h.join(", "));
                                if (-1 === y.indexOf(r.encoding) && "passthrough" !== r.algorithm) throw Error('Encoding "' + r.encoding + '"  not supported. supported values: ' + y.join(", "));
                                return r
                            }

                            function m(e) {
                                if ("function" == typeof e) return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))
                            }

                            function b(e, t, r) {
                                function n(e) {
                                    return t.update ? t.update(e, "utf8") : t.write(e, "utf8")
                                }
                                return r = r || [], {
                                    dispatch: function(t) {
                                        return e.replacer && (t = e.replacer(t)), this["_" + (null === t ? "null" : typeof t)](t)
                                    },
                                    _object: function(t) {
                                        var o, a = Object.prototype.toString.call(t),
                                            s = /\[object (.*)\]/i.exec(a);
                                        if (s = (s = s ? s[1] : "unknown:[" + a + "]").toLowerCase(), 0 <= (o = r.indexOf(t))) return this.dispatch("[CIRCULAR:" + o + "]");
                                        if (r.push(t), void 0 !== i && i.isBuffer && i.isBuffer(t)) return n("buffer:"), n(t);
                                        if ("object" === s || "function" === s || "asyncfunction" === s) {
                                            var c = Object.keys(t);
                                            e.unorderedObjects && (c = c.sort()), !1 === e.respectType || m(t) || c.splice(0, 0, "prototype", "__proto__", "constructor"), e.excludeKeys && (c = c.filter(function(t) {
                                                return !e.excludeKeys(t)
                                            })), n("object:" + c.length + ":");
                                            var u = this;
                                            return c.forEach(function(r) {
                                                u.dispatch(r), n(":"), e.excludeValues || u.dispatch(t[r]), n(",")
                                            })
                                        }
                                        if (!this["_" + s]) {
                                            if (e.ignoreUnknown) return n("[" + s + "]");
                                            throw Error('Unknown object type "' + s + '"')
                                        }
                                        this["_" + s](t)
                                    },
                                    _array: function(t, o) {
                                        o = void 0 !== o ? o : !1 !== e.unorderedArrays;
                                        var i = this;
                                        if (n("array:" + t.length + ":"), !o || t.length <= 1) return t.forEach(function(e) {
                                            return i.dispatch(e)
                                        });
                                        var a = [],
                                            s = t.map(function(t) {
                                                var n = new v,
                                                    o = r.slice();
                                                return b(e, n, o).dispatch(t), a = a.concat(o.slice(r.length)), n.read().toString()
                                            });
                                        return r = r.concat(a), s.sort(), this._array(s, !1)
                                    },
                                    _date: function(e) {
                                        return n("date:" + e.toJSON())
                                    },
                                    _symbol: function(e) {
                                        return n("symbol:" + e.toString())
                                    },
                                    _error: function(e) {
                                        return n("error:" + e.toString())
                                    },
                                    _boolean: function(e) {
                                        return n("bool:" + e.toString())
                                    },
                                    _string: function(e) {
                                        n("string:" + e.length + ":"), n(e.toString())
                                    },
                                    _function: function(t) {
                                        n("fn:"), m(t) ? this.dispatch("[native]") : this.dispatch(t.toString()), !1 !== e.respectFunctionNames && this.dispatch("function-name:" + String(t.name)), e.respectFunctionProperties && this._object(t)
                                    },
                                    _number: function(e) {
                                        return n("number:" + e.toString())
                                    },
                                    _xml: function(e) {
                                        return n("xml:" + e.toString())
                                    },
                                    _null: function() {
                                        return n("Null")
                                    },
                                    _undefined: function() {
                                        return n("Undefined")
                                    },
                                    _regexp: function(e) {
                                        return n("regex:" + e.toString())
                                    },
                                    _uint8array: function(e) {
                                        return n("uint8array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _uint8clampedarray: function(e) {
                                        return n("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _int8array: function(e) {
                                        return n("uint8array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _uint16array: function(e) {
                                        return n("uint16array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _int16array: function(e) {
                                        return n("uint16array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _uint32array: function(e) {
                                        return n("uint32array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _int32array: function(e) {
                                        return n("uint32array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _float32array: function(e) {
                                        return n("float32array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _float64array: function(e) {
                                        return n("float64array:"), this.dispatch(Array.prototype.slice.call(e))
                                    },
                                    _arraybuffer: function(e) {
                                        return n("arraybuffer:"), this.dispatch(new Uint8Array(e))
                                    },
                                    _url: function(e) {
                                        return n("url:" + e.toString())
                                    },
                                    _map: function(t) {
                                        n("map:");
                                        var r = Array.from(t);
                                        return this._array(r, !1 !== e.unorderedSets)
                                    },
                                    _set: function(t) {
                                        n("set:");
                                        var r = Array.from(t);
                                        return this._array(r, !1 !== e.unorderedSets)
                                    },
                                    _file: function(e) {
                                        return n("file:"), this.dispatch([e.name, e.size, e.type, e.lastModfied])
                                    },
                                    _blob: function() {
                                        if (e.ignoreUnknown) return n("[blob]");
                                        throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')
                                    },
                                    _domwindow: function() {
                                        return n("domwindow")
                                    },
                                    _bigint: function(e) {
                                        return n("bigint:" + e.toString())
                                    },
                                    _process: function() {
                                        return n("process")
                                    },
                                    _timer: function() {
                                        return n("timer")
                                    },
                                    _pipe: function() {
                                        return n("pipe")
                                    },
                                    _tcp: function() {
                                        return n("tcp")
                                    },
                                    _udp: function() {
                                        return n("udp")
                                    },
                                    _tty: function() {
                                        return n("tty")
                                    },
                                    _statwatcher: function() {
                                        return n("statwatcher")
                                    },
                                    _securecontext: function() {
                                        return n("securecontext")
                                    },
                                    _connection: function() {
                                        return n("connection")
                                    },
                                    _zlib: function() {
                                        return n("zlib")
                                    },
                                    _context: function() {
                                        return n("context")
                                    },
                                    _nodescript: function() {
                                        return n("nodescript")
                                    },
                                    _httpparser: function() {
                                        return n("httpparser")
                                    },
                                    _dataview: function() {
                                        return n("dataview")
                                    },
                                    _signal: function() {
                                        return n("signal")
                                    },
                                    _fsevent: function() {
                                        return n("fsevent")
                                    },
                                    _tlswrap: function() {
                                        return n("tlswrap")
                                    }
                                }
                            }

                            function v() {
                                return {
                                    buf: "",
                                    write: function(e) {
                                        this.buf += e
                                    },
                                    end: function(e) {
                                        this.buf += e
                                    },
                                    read: function() {
                                        return this.buf
                                    }
                                }
                            }
                            r.writeToStream = function(e, t, r) {
                                return void 0 === r && (r = t, t = {}), b(t = g(e, t), r).dispatch(e)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_7eac155c.js", "/")
                    }, {
                        buffer: 3,
                        crypto: 5,
                        lYpoI2: 10
                    }],
                    2: [function(e, t, r) {
                        (function(e, t, n, o, i, a, s, c, u) {
                            ! function(e) {
                                "use strict";
                                var t = "undefined" != typeof Uint8Array ? Uint8Array : Array;

                                function r(e) {
                                    var t = e.charCodeAt(0);
                                    return 43 === t || 45 === t ? 62 : 47 === t || 95 === t ? 63 : t < 48 ? -1 : t < 58 ? t - 48 + 26 + 26 : t < 91 ? t - 65 : t < 123 ? t - 97 + 26 : void 0
                                }
                                e.toByteArray = function(e) {
                                    if (0 < e.length % 4) throw Error("Invalid string. Length must be a multiple of 4");
                                    var n, o, i = e.length,
                                        a = "=" === e.charAt(i - 2) ? 2 : "=" === e.charAt(i - 1) ? 1 : 0,
                                        s = new t(3 * e.length / 4 - a),
                                        c = 0 < a ? e.length - 4 : e.length,
                                        u = 0;

                                    function l(e) {
                                        s[u++] = e
                                    }
                                    for (n = 0; n < c; n += 4) l((16711680 & (o = r(e.charAt(n)) << 18 | r(e.charAt(n + 1)) << 12 | r(e.charAt(n + 2)) << 6 | r(e.charAt(n + 3)))) >> 16), l((65280 & o) >> 8), l(255 & o);
                                    return 2 == a ? l(255 & (o = r(e.charAt(n)) << 2 | r(e.charAt(n + 1)) >> 4)) : 1 == a && (l((o = r(e.charAt(n)) << 10 | r(e.charAt(n + 1)) << 4 | r(e.charAt(n + 2)) >> 2) >> 8 & 255), l(255 & o)), s
                                }, e.fromByteArray = function(e) {
                                    var t, r, n, o, i = e.length % 3,
                                        a = "";

                                    function s(e) {
                                        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)
                                    }
                                    for (t = 0, n = e.length - i; t < n; t += 3) a += s((o = r = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2]) >> 18 & 63) + s(o >> 12 & 63) + s(o >> 6 & 63) + s(63 & o);
                                    switch (i) {
                                        case 1:
                                            a += s((r = e[e.length - 1]) >> 2) + s(r << 4 & 63) + "==";
                                            break;
                                        case 2:
                                            a += s((r = (e[e.length - 2] << 8) + e[e.length - 1]) >> 10) + s(r >> 4 & 63) + s(r << 2 & 63) + "="
                                    }
                                    return a
                                }
                            }(void 0 === r ? this.base64js = {} : r)
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib")
                    }, {
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    3: [function(e, t, r) {
                        (function(t, n, o, i, a, s, c, u, l) {
                            var d = e("base64-js"),
                                f = e("ieee754");

                            function o(e, t, r) {
                                if (!(this instanceof o)) return new o(e, t, r);
                                var n, i, a, s, c, u = typeof e;
                                if ("base64" === t && "string" == u)
                                    for (e = (n = e).trim ? n.trim() : n.replace(/^\s+|\s+$/g, ""); e.length % 4 != 0;) e += "=";
                                if ("number" == u) i = P(e);
                                else if ("string" == u) i = o.byteLength(e, t);
                                else {
                                    if ("object" != u) throw Error("First argument needs to be a number, array or string.");
                                    i = P(e.length)
                                }
                                if (o._useTypedArrays ? a = o._augment(new Uint8Array(i)) : ((a = this).length = i, a._isBuffer = !0), o._useTypedArrays && "number" == typeof e.byteLength) a._set(e);
                                else if (x(c = e) || o.isBuffer(c) || c && "object" == typeof c && "number" == typeof c.length)
                                    for (s = 0; s < i; s++) o.isBuffer(e) ? a[s] = e.readUInt8(s) : a[s] = e[s];
                                else if ("string" == u) a.write(e, 0, t);
                                else if ("number" == u && !o._useTypedArrays && !r)
                                    for (s = 0; s < i; s++) a[s] = 0;
                                return a
                            }

                            function p(e, t, r, n) {
                                n || (D("boolean" == typeof r, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 1 < e.length, "Trying to read beyond buffer length"));
                                var o, i = e.length;
                                if (!(i <= t)) return r ? (o = e[t], t + 1 < i && (o |= e[t + 1] << 8)) : (o = e[t] << 8, t + 1 < i && (o |= e[t + 1])), o
                            }

                            function h(e, t, r, n) {
                                n || (D("boolean" == typeof r, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 3 < e.length, "Trying to read beyond buffer length"));
                                var o, i = e.length;
                                if (!(i <= t)) return r ? (t + 2 < i && (o = e[t + 2] << 16), t + 1 < i && (o |= e[t + 1] << 8), o |= e[t], t + 3 < i && (o += e[t + 3] << 24 >>> 0)) : (t + 1 < i && (o = e[t + 1] << 16), t + 2 < i && (o |= e[t + 2] << 8), t + 3 < i && (o |= e[t + 3]), o += e[t] << 24 >>> 0), o
                            }

                            function y(e, t, r, n) {
                                if (n || (D("boolean" == typeof r, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 1 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) {
                                    var o = p(e, t, r, !0);
                                    return 32768 & o ? -1 * (65535 - o + 1) : o
                                }
                            }

                            function g(e, t, r, n) {
                                if (n || (D("boolean" == typeof r, "missing or invalid endian"), D(null != t, "missing offset"), D(t + 3 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) {
                                    var o = h(e, t, r, !0);
                                    return 2147483648 & o ? -1 * (4294967295 - o + 1) : o
                                }
                            }

                            function m(e, t, r, n) {
                                return n || (D("boolean" == typeof r, "missing or invalid endian"), D(t + 3 < e.length, "Trying to read beyond buffer length")), f.read(e, t, r, 23, 4)
                            }

                            function b(e, t, r, n) {
                                return n || (D("boolean" == typeof r, "missing or invalid endian"), D(t + 7 < e.length, "Trying to read beyond buffer length")), f.read(e, t, r, 52, 8)
                            }

                            function v(e, t, r, n, o) {
                                o || (D(null != t, "missing value"), D("boolean" == typeof n, "missing or invalid endian"), D(null != r, "missing offset"), D(r + 1 < e.length, "trying to write beyond buffer length"), U(t, 65535));
                                var i = e.length;
                                if (!(i <= r))
                                    for (var a = 0, s = Math.min(i - r, 2); a < s; a++) e[r + a] = (t & 255 << 8 * (n ? a : 1 - a)) >>> 8 * (n ? a : 1 - a)
                            }

                            function _(e, t, r, n, o) {
                                o || (D(null != t, "missing value"), D("boolean" == typeof n, "missing or invalid endian"), D(null != r, "missing offset"), D(r + 3 < e.length, "trying to write beyond buffer length"), U(t, 4294967295));
                                var i = e.length;
                                if (!(i <= r))
                                    for (var a = 0, s = Math.min(i - r, 4); a < s; a++) e[r + a] = t >>> 8 * (n ? a : 3 - a) & 255
                            }

                            function w(e, t, r, n, o) {
                                o || (D(null != t, "missing value"), D("boolean" == typeof n, "missing or invalid endian"), D(null != r, "missing offset"), D(r + 1 < e.length, "Trying to write beyond buffer length"), H(t, 32767, -32768)), e.length <= r || v(e, 0 <= t ? t : 65535 + t + 1, r, n, o)
                            }

                            function S(e, t, r, n, o) {
                                o || (D(null != t, "missing value"), D("boolean" == typeof n, "missing or invalid endian"), D(null != r, "missing offset"), D(r + 3 < e.length, "Trying to write beyond buffer length"), H(t, 2147483647, -2147483648)), e.length <= r || _(e, 0 <= t ? t : 4294967295 + t + 1, r, n, o)
                            }

                            function E(e, t, r, n, o) {
                                o || (D(null != t, "missing value"), D("boolean" == typeof n, "missing or invalid endian"), D(null != r, "missing offset"), D(r + 3 < e.length, "Trying to write beyond buffer length"), M(t, 34028234663852886e22, -34028234663852886e22)), e.length <= r || f.write(e, t, r, n, 23, 4)
                            }

                            function A(e, t, r, n, o) {
                                o || (D(null != t, "missing value"), D("boolean" == typeof n, "missing or invalid endian"), D(null != r, "missing offset"), D(r + 7 < e.length, "Trying to write beyond buffer length"), M(t, 17976931348623157e292, -17976931348623157e292)), e.length <= r || f.write(e, t, r, n, 52, 8)
                            }
                            r.Buffer = o, r.SlowBuffer = o, r.INSPECT_MAX_BYTES = 50, o.poolSize = 8192, o._useTypedArrays = function() {
                                try {
                                    var e = new ArrayBuffer(0),
                                        t = new Uint8Array(e);
                                    return t.foo = function() {
                                        return 42
                                    }, 42 === t.foo() && "function" == typeof t.subarray
                                } catch (e) {
                                    return !1
                                }
                            }(), o.isEncoding = function(e) {
                                switch (String(e).toLowerCase()) {
                                    case "hex":
                                    case "utf8":
                                    case "utf-8":
                                    case "ascii":
                                    case "binary":
                                    case "base64":
                                    case "raw":
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }, o.isBuffer = function(e) {
                                return !(null == e || !e._isBuffer)
                            }, o.byteLength = function(e, t) {
                                var r;
                                switch (e += "", t || "utf8") {
                                    case "hex":
                                        r = e.length / 2;
                                        break;
                                    case "utf8":
                                    case "utf-8":
                                        r = j(e).length;
                                        break;
                                    case "ascii":
                                    case "binary":
                                    case "raw":
                                        r = e.length;
                                        break;
                                    case "base64":
                                        r = R(e).length;
                                        break;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        r = 2 * e.length;
                                        break;
                                    default:
                                        throw Error("Unknown encoding")
                                }
                                return r
                            }, o.concat = function(e, t) {
                                if (D(x(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new o(0);
                                if (1 === e.length) return e[0];
                                if ("number" != typeof t)
                                    for (i = t = 0; i < e.length; i++) t += e[i].length;
                                for (var r = new o(t), n = 0, i = 0; i < e.length; i++) {
                                    var a = e[i];
                                    a.copy(r, n), n += a.length
                                }
                                return r
                            }, o.prototype.write = function(e, t, r, n) {
                                isFinite(t) ? isFinite(r) || (n = r, r = void 0) : (u = n, n = t, t = r, r = u), t = Number(t) || 0;
                                var i, a, s, c, u, l, d, f, p, h, y = this.length - t;
                                switch ((!r || y < (r = Number(r))) && (r = y), n = String(n || "utf8").toLowerCase()) {
                                    case "hex":
                                        l = function(e, t, r, n) {
                                            r = Number(r) || 0;
                                            var i = e.length - r;
                                            (!n || i < (n = Number(n))) && (n = i);
                                            var a = t.length;
                                            D(a % 2 == 0, "Invalid hex string"), a / 2 < n && (n = a / 2);
                                            for (var s = 0; s < n; s++) {
                                                var c = parseInt(t.substr(2 * s, 2), 16);
                                                D(!isNaN(c), "Invalid hex string"), e[r + s] = c
                                            }
                                            return o._charsWritten = 2 * s, s
                                        }(this, e, t, r);
                                        break;
                                    case "utf8":
                                    case "utf-8":
                                        p = t, h = r, l = o._charsWritten = C(j(e), this, p, h);
                                        break;
                                    case "ascii":
                                    case "binary":
                                        i = t, a = r, l = o._charsWritten = C(function(e) {
                                            for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                                            return t
                                        }(e), this, i, a);
                                        break;
                                    case "base64":
                                        d = t, f = r, l = o._charsWritten = C(R(e), this, d, f);
                                        break;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        s = t, c = r, l = o._charsWritten = C(function(e) {
                                            for (var t, r, n = [], o = 0; o < e.length; o++) r = (t = e.charCodeAt(o)) >> 8, n.push(t % 256), n.push(r);
                                            return n
                                        }(e), this, s, c);
                                        break;
                                    default:
                                        throw Error("Unknown encoding")
                                }
                                return l
                            }, o.prototype.toString = function(e, t, r) {
                                var n, o, i;
                                if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, (r = void 0 !== r ? Number(r) : r = this.length) === t) return "";
                                switch (e) {
                                    case "hex":
                                        n = function(e, t, r) {
                                            var n = e.length;
                                            (!t || t < 0) && (t = 0), (!r || r < 0 || n < r) && (r = n);
                                            for (var o = "", i = t; i < r; i++) o += T(e[i]);
                                            return o
                                        }(this, t, r);
                                        break;
                                    case "utf8":
                                    case "utf-8":
                                        n = function(e, t, r) {
                                            var n = "",
                                                o = "";
                                            r = Math.min(e.length, r);
                                            for (var i = t; i < r; i++) e[i] <= 127 ? (n += I(o) + String.fromCharCode(e[i]), o = "") : o += "%" + e[i].toString(16);
                                            return n + I(o)
                                        }(this, t, r);
                                        break;
                                    case "ascii":
                                    case "binary":
                                        n = function(e, t, r) {
                                            var n = "";
                                            r = Math.min(e.length, r);
                                            for (var o = t; o < r; o++) n += String.fromCharCode(e[o]);
                                            return n
                                        }(this, t, r);
                                        break;
                                    case "base64":
                                        i = r, n = 0 === (o = t) && i === this.length ? d.fromByteArray(this) : d.fromByteArray(this.slice(o, i));
                                        break;
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        n = function(e, t, r) {
                                            for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                                            return o
                                        }(this, t, r);
                                        break;
                                    default:
                                        throw Error("Unknown encoding")
                                }
                                return n
                            }, o.prototype.toJSON = function() {
                                return {
                                    type: "Buffer",
                                    data: Array.prototype.slice.call(this._arr || this, 0)
                                }
                            }, o.prototype.copy = function(e, t, r, n) {
                                if (r = r || 0, n || 0 === n || (n = this.length), t = t || 0, n !== r && 0 !== e.length && 0 !== this.length) {
                                    D(r <= n, "sourceEnd < sourceStart"), D(0 <= t && t < e.length, "targetStart out of bounds"), D(0 <= r && r < this.length, "sourceStart out of bounds"), D(0 <= n && n <= this.length, "sourceEnd out of bounds"), n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                                    var i = n - r;
                                    if (i < 100 || !o._useTypedArrays)
                                        for (var a = 0; a < i; a++) e[a + t] = this[a + r];
                                    else e._set(this.subarray(r, r + i), t)
                                }
                            }, o.prototype.slice = function(e, t) {
                                var r = this.length;
                                if (e = O(e, r, 0), t = O(t, r, r), o._useTypedArrays) return o._augment(this.subarray(e, t));
                                for (var n = t - e, i = new o(n, void 0, !0), a = 0; a < n; a++) i[a] = this[a + e];
                                return i
                            }, o.prototype.get = function(e) {
                                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
                            }, o.prototype.set = function(e, t) {
                                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
                            }, o.prototype.readUInt8 = function(e, t) {
                                if (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e]
                            }, o.prototype.readUInt16LE = function(e, t) {
                                return p(this, e, !0, t)
                            }, o.prototype.readUInt16BE = function(e, t) {
                                return p(this, e, !1, t)
                            }, o.prototype.readUInt32LE = function(e, t) {
                                return h(this, e, !0, t)
                            }, o.prototype.readUInt32BE = function(e, t) {
                                return h(this, e, !1, t)
                            }, o.prototype.readInt8 = function(e, t) {
                                if (t || (D(null != e, "missing offset"), D(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                            }, o.prototype.readInt16LE = function(e, t) {
                                return y(this, e, !0, t)
                            }, o.prototype.readInt16BE = function(e, t) {
                                return y(this, e, !1, t)
                            }, o.prototype.readInt32LE = function(e, t) {
                                return g(this, e, !0, t)
                            }, o.prototype.readInt32BE = function(e, t) {
                                return g(this, e, !1, t)
                            }, o.prototype.readFloatLE = function(e, t) {
                                return m(this, e, !0, t)
                            }, o.prototype.readFloatBE = function(e, t) {
                                return m(this, e, !1, t)
                            }, o.prototype.readDoubleLE = function(e, t) {
                                return b(this, e, !0, t)
                            }, o.prototype.readDoubleBE = function(e, t) {
                                return b(this, e, !1, t)
                            }, o.prototype.writeUInt8 = function(e, t, r) {
                                r || (D(null != e, "missing value"), D(null != t, "missing offset"), D(t < this.length, "trying to write beyond buffer length"), U(e, 255)), t >= this.length || (this[t] = e)
                            }, o.prototype.writeUInt16LE = function(e, t, r) {
                                v(this, e, t, !0, r)
                            }, o.prototype.writeUInt16BE = function(e, t, r) {
                                v(this, e, t, !1, r)
                            }, o.prototype.writeUInt32LE = function(e, t, r) {
                                _(this, e, t, !0, r)
                            }, o.prototype.writeUInt32BE = function(e, t, r) {
                                _(this, e, t, !1, r)
                            }, o.prototype.writeInt8 = function(e, t, r) {
                                r || (D(null != e, "missing value"), D(null != t, "missing offset"), D(t < this.length, "Trying to write beyond buffer length"), H(e, 127, -128)), t >= this.length || (0 <= e ? this.writeUInt8(e, t, r) : this.writeUInt8(255 + e + 1, t, r))
                            }, o.prototype.writeInt16LE = function(e, t, r) {
                                w(this, e, t, !0, r)
                            }, o.prototype.writeInt16BE = function(e, t, r) {
                                w(this, e, t, !1, r)
                            }, o.prototype.writeInt32LE = function(e, t, r) {
                                S(this, e, t, !0, r)
                            }, o.prototype.writeInt32BE = function(e, t, r) {
                                S(this, e, t, !1, r)
                            }, o.prototype.writeFloatLE = function(e, t, r) {
                                E(this, e, t, !0, r)
                            }, o.prototype.writeFloatBE = function(e, t, r) {
                                E(this, e, t, !1, r)
                            }, o.prototype.writeDoubleLE = function(e, t, r) {
                                A(this, e, t, !0, r)
                            }, o.prototype.writeDoubleBE = function(e, t, r) {
                                A(this, e, t, !1, r)
                            }, o.prototype.fill = function(e, t, r) {
                                if (e = e || 0, t = t || 0, r = r || this.length, "string" == typeof e && (e = e.charCodeAt(0)), D("number" == typeof e && !isNaN(e), "value is not a number"), D(t <= r, "end < start"), r !== t && 0 !== this.length) {
                                    D(0 <= t && t < this.length, "start out of bounds"), D(0 <= r && r <= this.length, "end out of bounds");
                                    for (var n = t; n < r; n++) this[n] = e
                                }
                            }, o.prototype.inspect = function() {
                                for (var e = [], t = this.length, n = 0; n < t; n++)
                                    if (e[n] = T(this[n]), n === r.INSPECT_MAX_BYTES) {
                                        e[n + 1] = "...";
                                        break
                                    }
                                return "<Buffer " + e.join(" ") + ">"
                            }, o.prototype.toArrayBuffer = function() {
                                if ("undefined" == typeof Uint8Array) throw Error("Buffer.toArrayBuffer not supported in this browser");
                                if (o._useTypedArrays) return new o(this).buffer;
                                for (var e = new Uint8Array(this.length), t = 0, r = e.length; t < r; t += 1) e[t] = this[t];
                                return e.buffer
                            };
                            var k = o.prototype;

                            function O(e, t, r) {
                                return "number" != typeof e ? r : t <= (e = ~~e) ? t : 0 <= e || 0 <= (e += t) ? e : 0
                            }

                            function P(e) {
                                return (e = ~~Math.ceil(+e)) < 0 ? 0 : e
                            }

                            function x(e) {
                                return (Array.isArray || function(e) {
                                    return "[object Array]" === Object.prototype.toString.call(e)
                                })(e)
                            }

                            function T(e) {
                                return e < 16 ? "0" + e.toString(16) : e.toString(16)
                            }

                            function j(e) {
                                for (var t = [], r = 0; r < e.length; r++) {
                                    var n = e.charCodeAt(r);
                                    if (n <= 127) t.push(e.charCodeAt(r));
                                    else {
                                        var o = r;
                                        55296 <= n && n <= 57343 && r++;
                                        for (var i = encodeURIComponent(e.slice(o, r + 1)).substr(1).split("%"), a = 0; a < i.length; a++) t.push(parseInt(i[a], 16))
                                    }
                                }
                                return t
                            }

                            function R(e) {
                                return d.toByteArray(e)
                            }

                            function C(e, t, r, n) {
                                for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); o++) t[o + r] = e[o];
                                return o
                            }

                            function I(e) {
                                try {
                                    return decodeURIComponent(e)
                                } catch (e) {
                                    return String.fromCharCode(65533)
                                }
                            }

                            function U(e, t) {
                                D("number" == typeof e, "cannot write a non-number as a number"), D(0 <= e, "specified a negative value for writing an unsigned value"), D(e <= t, "value is larger than maximum value for type"), D(Math.floor(e) === e, "value has a fractional component")
                            }

                            function H(e, t, r) {
                                D("number" == typeof e, "cannot write a non-number as a number"), D(e <= t, "value larger than maximum allowed value"), D(r <= e, "value smaller than minimum allowed value"), D(Math.floor(e) === e, "value has a fractional component")
                            }

                            function M(e, t, r) {
                                D("number" == typeof e, "cannot write a non-number as a number"), D(e <= t, "value larger than maximum allowed value"), D(r <= e, "value smaller than minimum allowed value")
                            }

                            function D(e, t) {
                                if (!e) throw Error(t || "Failed assertion")
                            }
                            o._augment = function(e) {
                                return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = k.get, e.set = k.set, e.write = k.write, e.toString = k.toString, e.toLocaleString = k.toString, e.toJSON = k.toJSON, e.copy = k.copy, e.slice = k.slice, e.readUInt8 = k.readUInt8, e.readUInt16LE = k.readUInt16LE, e.readUInt16BE = k.readUInt16BE, e.readUInt32LE = k.readUInt32LE, e.readUInt32BE = k.readUInt32BE, e.readInt8 = k.readInt8, e.readInt16LE = k.readInt16LE, e.readInt16BE = k.readInt16BE, e.readInt32LE = k.readInt32LE, e.readInt32BE = k.readInt32BE, e.readFloatLE = k.readFloatLE, e.readFloatBE = k.readFloatBE, e.readDoubleLE = k.readDoubleLE, e.readDoubleBE = k.readDoubleBE, e.writeUInt8 = k.writeUInt8, e.writeUInt16LE = k.writeUInt16LE, e.writeUInt16BE = k.writeUInt16BE, e.writeUInt32LE = k.writeUInt32LE, e.writeUInt32BE = k.writeUInt32BE, e.writeInt8 = k.writeInt8, e.writeInt16LE = k.writeInt16LE, e.writeInt16BE = k.writeInt16BE, e.writeInt32LE = k.writeInt32LE, e.writeInt32BE = k.writeInt32BE, e.writeFloatLE = k.writeFloatLE, e.writeFloatBE = k.writeFloatBE, e.writeDoubleLE = k.writeDoubleLE, e.writeDoubleBE = k.writeDoubleBE, e.fill = k.fill, e.inspect = k.inspect, e.toArrayBuffer = k.toArrayBuffer, e
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer")
                    }, {
                        "base64-js": 2,
                        buffer: 3,
                        ieee754: 11,
                        lYpoI2: 10
                    }],
                    4: [function(e, t, r) {
                        (function(r, n, o, i, a, s, c, u, l) {
                            var o = e("buffer").Buffer,
                                d = new o(4);
                            d.fill(0), t.exports = {
                                hash: function(e, t, r, n) {
                                    return o.isBuffer(e) || (e = new o(e)),
                                        function(e, t, r) {
                                            for (var n = new o(t), i = r ? n.writeInt32BE : n.writeInt32LE, a = 0; a < e.length; a++) i.call(n, e[a], 4 * a, !0);
                                            return n
                                        }(t(function(e, t) {
                                            var r;
                                            e.length % 4 != 0 && (r = e.length + (4 - e.length % 4), e = o.concat([e, d], r));
                                            for (var n = [], i = t ? e.readInt32BE : e.readInt32LE, a = 0; a < e.length; a += 4) n.push(i.call(e, a));
                                            return n
                                        }(e, n), 8 * e.length), r, n)
                                }
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    5: [function(e, t, r) {
                        (function(t, n, o, i, a, s, c, u, l) {
                            var o = e("buffer").Buffer,
                                d = e("./sha"),
                                f = e("./sha256"),
                                p = e("./rng"),
                                h = {
                                    sha1: d,
                                    sha256: f,
                                    md5: e("./md5")
                                },
                                y = new o(64);

                            function g(e, t) {
                                var r = h[e = e || "sha1"],
                                    n = [];
                                return r || m("algorithm:", e, "is not yet supported"), {
                                    update: function(e) {
                                        return o.isBuffer(e) || (e = new o(e)), n.push(e), e.length, this
                                    },
                                    digest: function(e) {
                                        var i = o.concat(n),
                                            a = t ? function(e, t, r) {
                                                o.isBuffer(t) || (t = new o(t)), o.isBuffer(r) || (r = new o(r)), t.length > 64 ? t = e(t) : t.length < 64 && (t = o.concat([t, y], 64));
                                                for (var n = new o(64), i = new o(64), a = 0; a < 64; a++) n[a] = 54 ^ t[a], i[a] = 92 ^ t[a];
                                                var s = e(o.concat([n, r]));
                                                return e(o.concat([i, s]))
                                            }(r, t, i) : r(i);
                                        return n = null, e ? a.toString(e) : a
                                    }
                                }
                            }

                            function m() {
                                var e = [].slice.call(arguments).join(" ");
                                throw Error([e, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"))
                            }
                            y.fill(0), r.createHash = function(e) {
                                    return g(e)
                                }, r.createHmac = g, r.randomBytes = function(e, t) {
                                    if (!t || !t.call) return new o(p(e));
                                    try {
                                        t.call(this, void 0, new o(p(e)))
                                    } catch (e) {
                                        t(e)
                                    }
                                },
                                function(e, t) {
                                    for (var r in e) t(e[r], r)
                                }(["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], function(e) {
                                    r[e] = function() {
                                        m("sorry,", e, "is not implemented yet")
                                    }
                                })
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./md5": 6,
                        "./rng": 7,
                        "./sha": 8,
                        "./sha256": 9,
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    6: [function(e, t, r) {
                        (function(r, n, o, i, a, s, c, u, l) {
                            var d = e("./helpers");

                            function f(e, t) {
                                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                                for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
                                    var s = r,
                                        c = n,
                                        u = o,
                                        l = i,
                                        r = h(r, n, o, i, e[a + 0], 7, -680876936),
                                        i = h(i, r, n, o, e[a + 1], 12, -389564586),
                                        o = h(o, i, r, n, e[a + 2], 17, 606105819),
                                        n = h(n, o, i, r, e[a + 3], 22, -1044525330);
                                    r = h(r, n, o, i, e[a + 4], 7, -176418897), i = h(i, r, n, o, e[a + 5], 12, 1200080426), o = h(o, i, r, n, e[a + 6], 17, -1473231341), n = h(n, o, i, r, e[a + 7], 22, -45705983), r = h(r, n, o, i, e[a + 8], 7, 1770035416), i = h(i, r, n, o, e[a + 9], 12, -1958414417), o = h(o, i, r, n, e[a + 10], 17, -42063), n = h(n, o, i, r, e[a + 11], 22, -1990404162), r = h(r, n, o, i, e[a + 12], 7, 1804603682), i = h(i, r, n, o, e[a + 13], 12, -40341101), o = h(o, i, r, n, e[a + 14], 17, -1502002290), r = y(r, n = h(n, o, i, r, e[a + 15], 22, 1236535329), o, i, e[a + 1], 5, -165796510), i = y(i, r, n, o, e[a + 6], 9, -1069501632), o = y(o, i, r, n, e[a + 11], 14, 643717713), n = y(n, o, i, r, e[a + 0], 20, -373897302), r = y(r, n, o, i, e[a + 5], 5, -701558691), i = y(i, r, n, o, e[a + 10], 9, 38016083), o = y(o, i, r, n, e[a + 15], 14, -660478335), n = y(n, o, i, r, e[a + 4], 20, -405537848), r = y(r, n, o, i, e[a + 9], 5, 568446438), i = y(i, r, n, o, e[a + 14], 9, -1019803690), o = y(o, i, r, n, e[a + 3], 14, -187363961), n = y(n, o, i, r, e[a + 8], 20, 1163531501), r = y(r, n, o, i, e[a + 13], 5, -1444681467), i = y(i, r, n, o, e[a + 2], 9, -51403784), o = y(o, i, r, n, e[a + 7], 14, 1735328473), r = g(r, n = y(n, o, i, r, e[a + 12], 20, -1926607734), o, i, e[a + 5], 4, -378558), i = g(i, r, n, o, e[a + 8], 11, -2022574463), o = g(o, i, r, n, e[a + 11], 16, 1839030562), n = g(n, o, i, r, e[a + 14], 23, -35309556), r = g(r, n, o, i, e[a + 1], 4, -1530992060), i = g(i, r, n, o, e[a + 4], 11, 1272893353), o = g(o, i, r, n, e[a + 7], 16, -155497632), n = g(n, o, i, r, e[a + 10], 23, -1094730640), r = g(r, n, o, i, e[a + 13], 4, 681279174), i = g(i, r, n, o, e[a + 0], 11, -358537222), o = g(o, i, r, n, e[a + 3], 16, -722521979), n = g(n, o, i, r, e[a + 6], 23, 76029189), r = g(r, n, o, i, e[a + 9], 4, -640364487), i = g(i, r, n, o, e[a + 12], 11, -421815835), o = g(o, i, r, n, e[a + 15], 16, 530742520), r = m(r, n = g(n, o, i, r, e[a + 2], 23, -995338651), o, i, e[a + 0], 6, -198630844), i = m(i, r, n, o, e[a + 7], 10, 1126891415), o = m(o, i, r, n, e[a + 14], 15, -1416354905), n = m(n, o, i, r, e[a + 5], 21, -57434055), r = m(r, n, o, i, e[a + 12], 6, 1700485571), i = m(i, r, n, o, e[a + 3], 10, -1894986606), o = m(o, i, r, n, e[a + 10], 15, -1051523), n = m(n, o, i, r, e[a + 1], 21, -2054922799), r = m(r, n, o, i, e[a + 8], 6, 1873313359), i = m(i, r, n, o, e[a + 15], 10, -30611744), o = m(o, i, r, n, e[a + 6], 15, -1560198380), n = m(n, o, i, r, e[a + 13], 21, 1309151649), r = m(r, n, o, i, e[a + 4], 6, -145523070), i = m(i, r, n, o, e[a + 11], 10, -1120210379), o = m(o, i, r, n, e[a + 2], 15, 718787259), n = m(n, o, i, r, e[a + 9], 21, -343485551), r = b(r, s), n = b(n, c), o = b(o, u), i = b(i, l)
                                }
                                return [r, n, o, i]
                            }

                            function p(e, t, r, n, o, i) {
                                var a;
                                return b((a = b(b(t, e), b(n, i))) << o | a >>> 32 - o, r)
                            }

                            function h(e, t, r, n, o, i, a) {
                                return p(t & r | ~t & n, e, t, o, i, a)
                            }

                            function y(e, t, r, n, o, i, a) {
                                return p(t & n | r & ~n, e, t, o, i, a)
                            }

                            function g(e, t, r, n, o, i, a) {
                                return p(t ^ r ^ n, e, t, o, i, a)
                            }

                            function m(e, t, r, n, o, i, a) {
                                return p(r ^ (t | ~n), e, t, o, i, a)
                            }

                            function b(e, t) {
                                var r = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                            }
                            t.exports = function(e) {
                                return d.hash(e, f, 16)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./helpers": 4,
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    7: [function(e, t, r) {
                        (function(e, r, n, o, i, a, s, c, u) {
                            var l, d;
                            d = function(e) {
                                for (var t, r = Array(e), n = 0; n < e; n++) 0 == (3 & n) && (t = 4294967296 * Math.random()), r[n] = t >>> ((3 & n) << 3) & 255;
                                return r
                            }, t.exports = l || d
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    8: [function(e, t, r) {
                        (function(r, n, o, i, a, s, c, u, l) {
                            var d = e("./helpers");

                            function f(e, t) {
                                e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                                for (var r, n, o, i, a, s = Array(80), c = 1732584193, u = -271733879, l = -1732584194, d = 271733878, f = -1009589776, y = 0; y < e.length; y += 16) {
                                    for (var g = c, m = u, b = l, v = d, _ = f, w = 0; w < 80; w++) {
                                        s[w] = w < 16 ? e[y + w] : h(s[w - 3] ^ s[w - 8] ^ s[w - 14] ^ s[w - 16], 1);
                                        var S = p(p(h(c, 5), (o = u, i = l, a = d, (n = w) < 20 ? o & i | ~o & a : !(n < 40) && n < 60 ? o & i | o & a | i & a : o ^ i ^ a)), p(p(f, s[w]), (r = w) < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514)),
                                            f = d,
                                            d = l,
                                            l = h(u, 30),
                                            u = c,
                                            c = S
                                    }
                                    c = p(c, g), u = p(u, m), l = p(l, b), d = p(d, v), f = p(f, _)
                                }
                                return [c, u, l, d, f]
                            }

                            function p(e, t) {
                                var r = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                            }

                            function h(e, t) {
                                return e << t | e >>> 32 - t
                            }
                            t.exports = function(e) {
                                return d.hash(e, f, 20, !0)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./helpers": 4,
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    9: [function(e, t, r) {
                        (function(r, n, o, i, a, s, c, u, l) {
                            function d(e, t) {
                                var r = (65535 & e) + (65535 & t);
                                return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                            }

                            function f(e, t) {
                                return e >>> t | e << 32 - t
                            }

                            function p(e, t) {
                                var r, n, o, i, a, s, c, u, l, p, h = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                                    y = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                                    g = Array(64);
                                e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                                for (var m, b, v, _, w, S, E, A, k = 0; k < e.length; k += 16) {
                                    r = y[0], n = y[1], o = y[2], i = y[3], a = y[4], s = y[5], c = y[6], u = y[7];
                                    for (var O = 0; O < 64; O++) g[O] = O < 16 ? e[O + k] : d(d(d(f(A = g[O - 2], 17) ^ f(A, 19) ^ A >>> 10, g[O - 7]), f(E = g[O - 15], 7) ^ f(E, 18) ^ E >>> 3), g[O - 16]), l = d(d(d(d(u, f(S = a, 6) ^ f(S, 11) ^ f(S, 25)), (w = a) & s ^ ~w & c), h[O]), g[O]), p = d(f(_ = r, 2) ^ f(_, 13) ^ f(_, 22), (m = r) & (b = n) ^ m & (v = o) ^ b & v), u = c, c = s, s = a, a = d(i, l), i = o, o = n, n = r, r = d(l, p);
                                    y[0] = d(r, y[0]), y[1] = d(n, y[1]), y[2] = d(o, y[2]), y[3] = d(i, y[3]), y[4] = d(a, y[4]), y[5] = d(s, y[5]), y[6] = d(c, y[6]), y[7] = d(u, y[7])
                                }
                                return y
                            }
                            var h = e("./helpers");
                            t.exports = function(e) {
                                return h.hash(e, p, 32, !0)
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify")
                    }, {
                        "./helpers": 4,
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    10: [function(e, t, r) {
                        (function(e, r, n, o, i, a, s, c, u) {
                            function l() {}(e = t.exports = {}).nextTick = function() {
                                var e = "undefined" != typeof window && window.setImmediate,
                                    t = "undefined" != typeof window && window.postMessage && window.addEventListener;
                                if (e) return function(e) {
                                    return window.setImmediate(e)
                                };
                                if (t) {
                                    var r = [];
                                    return window.addEventListener("message", function(e) {
                                            var t = e.source;
                                            t !== window && null !== t || "process-tick" !== e.data || (e.stopPropagation(), 0 < r.length && r.shift()())
                                        }, !0),
                                        function(e) {
                                            r.push(e), window.postMessage("process-tick", "*")
                                        }
                                }
                                return function(e) {
                                    setTimeout(e, 0)
                                }
                            }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = l, e.addListener = l, e.once = l, e.off = l, e.removeListener = l, e.removeAllListeners = l, e.emit = l, e.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, e.cwd = function() {
                                return "/"
                            }, e.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process")
                    }, {
                        buffer: 3,
                        lYpoI2: 10
                    }],
                    11: [function(e, t, r) {
                        (function(e, t, n, o, i, a, s, c, u) {
                            r.read = function(e, t, r, n, o) {
                                var i, a, s = 8 * o - n - 1,
                                    c = (1 << s) - 1,
                                    u = c >> 1,
                                    l = -7,
                                    d = r ? o - 1 : 0,
                                    f = r ? -1 : 1,
                                    p = e[t + d];
                                for (d += f, i = p & (1 << -l) - 1, p >>= -l, l += s; 0 < l; i = 256 * i + e[t + d], d += f, l -= 8);
                                for (a = i & (1 << -l) - 1, i >>= -l, l += n; 0 < l; a = 256 * a + e[t + d], d += f, l -= 8);
                                if (0 === i) i = 1 - u;
                                else {
                                    if (i === c) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                                    a += Math.pow(2, n), i -= u
                                }
                                return (p ? -1 : 1) * a * Math.pow(2, i - n)
                            }, r.write = function(e, t, r, n, o, i) {
                                var a, s, c, u = 8 * i - o - 1,
                                    l = (1 << u) - 1,
                                    d = l >> 1,
                                    f = 23 === o ? 5960464477539062e-23 : 0,
                                    p = n ? 0 : i - 1,
                                    h = n ? 1 : -1,
                                    y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                                for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), 2 <= (t += 1 <= a + d ? f / c : f * Math.pow(2, 1 - d)) * c && (a++, c /= 2), l <= a + d ? (s = 0, a = l) : 1 <= a + d ? (s = (t * c - 1) * Math.pow(2, o), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, o), a = 0)); 8 <= o; e[r + p] = 255 & s, p += h, s /= 256, o -= 8);
                                for (a = a << o | s, u += o; 0 < u; e[r + p] = 255 & a, p += h, a /= 256, u -= 8);
                                e[r + p - h] |= 128 * y
                            }
                        }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/ieee754/index.js", "/node_modules/ieee754")
                    }, {
                        buffer: 3,
                        lYpoI2: 10
                    }]
                }, {}, [1])(1)
            }, e.exports = t()
        },
        23567: function(e, t, r) {
            let n;
            var o = r(21876).Buffer;
            let {
                strict: i
            } = r(27596), {
                createHash: a
            } = r(42474), {
                format: s
            } = r(79720);
            if (o.isEncoding("base64url")) n = e => e.toString("base64url");
            else {
                let e = e => e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
                n = t => e(t.toString("base64"))
            }

            function c(e, t, r) {
                let o = (function(e, t) {
                    switch (e) {
                        case "HS256":
                        case "RS256":
                        case "PS256":
                        case "ES256":
                        case "ES256K":
                            return a("sha256");
                        case "HS384":
                        case "RS384":
                        case "PS384":
                        case "ES384":
                            return a("sha384");
                        case "HS512":
                        case "RS512":
                        case "PS512":
                        case "ES512":
                        case "Ed25519":
                            return a("sha512");
                        case "Ed448":
                            return a("shake256", {
                                outputLength: 114
                            });
                        case "EdDSA":
                            switch (t) {
                                case "Ed25519":
                                    return a("sha512");
                                case "Ed448":
                                    return a("shake256", {
                                        outputLength: 114
                                    });
                                default:
                                    throw TypeError("unrecognized or invalid EdDSA curve provided")
                            }
                        default:
                            throw TypeError("unrecognized or invalid JWS algorithm provided")
                    }
                })(t, r).update(e).digest();
                return n(o.slice(0, o.length / 2))
            }
            e.exports = {
                validate: function(e, t, r, n, o) {
                    let a, u;
                    if ("string" != typeof e.claim || !e.claim) throw TypeError("names.claim must be a non-empty string");
                    if ("string" != typeof e.source || !e.source) throw TypeError("names.source must be a non-empty string");
                    i("string" == typeof t && t, `${e.claim} must be a non-empty string`), i("string" == typeof r && r, `${e.source} must be a non-empty string`);
                    try {
                        a = c(r, n, o)
                    } catch (t) {
                        u = s("%s could not be validated (%s)", e.claim, t.message)
                    }
                    u = u || s("%s mismatch, expected %s, got: %s", e.claim, a, t), i.equal(a, t, u)
                },
                generate: c
            }
        },
        62251: function(e, t, r) {
            let n;
            var o = r(83454),
                i = r(21876).Buffer;
            let {
                inspect: a
            } = r(79720), s = r(22321), c = r(42474), {
                strict: u
            } = r(27596), l = r(97334), d = r(11987), {
                URL: f,
                URLSearchParams: p
            } = r(11987), h = r(45595), y = r(23567), g = r(92793), m = r(77749), b = r(42806), v = r(51892), _ = r(88026), {
                assertSigningAlgValuesSupport: w,
                assertIssuerConfiguration: S
            } = r(8867), E = r(76038), A = r(51303), k = r(47787), O = r(81911), {
                OPError: P,
                RPError: x
            } = r(67486), T = r(96891), {
                random: j
            } = r(68767), R = r(3862), {
                CLOCK_TOLERANCE: C
            } = r(78026), {
                keystores: I
            } = r(64385), U = r(42485), H = r(71050), {
                authenticatedPost: M,
                resolveResponseType: D,
                resolveRedirectUri: N
            } = r(4944), {
                queryKeyStore: W
            } = r(17042), $ = r(27649), [L, B] = o.version.slice(1).split(".").map(e => parseInt(e, 10)), K = L >= 17 || 16 === L && B >= 9, J = Symbol(), F = Symbol(), q = Symbol();

            function z(e) {
                return E(e, "access_token", "code", "error_description", "error_uri", "error", "expires_in", "id_token", "iss", "response", "session_state", "state", "token_type")
            }

            function G(e, t = "Bearer") {
                return `${t} ${e}`
            }

            function V(e) {
                let t = d.parse(e);
                return t.search ? l.parse(t.search.substring(1)) : {}
            }

            function Y(e, t, r) {
                if (void 0 === e[r]) throw new x({
                    message: `missing required JWT property ${r}`,
                    jwt: t
                })
            }

            function X(e) {
                let t = {
                    client_id: this.client_id,
                    scope: "openid",
                    response_type: D.call(this),
                    redirect_uri: N.call(this),
                    ...e
                };
                return Object.entries(t).forEach(([e, r]) => {
                    null == r ? delete t[e] : "claims" === e && "object" == typeof r ? t[e] = JSON.stringify(r) : "resource" === e && Array.isArray(r) ? t[e] = r : "string" != typeof r && (t[e] = String(r))
                }), t
            }

            function Z(e) {
                if (!A(e) || !Array.isArray(e.keys) || e.keys.some(e => !A(e) || !("kty" in e))) throw TypeError("jwks must be a JSON Web Key Set formatted object");
                return U.fromJWKS(e, {
                    onlyPrivate: !0
                })
            }
            class Q {#
                e;#
                t;#
                r;#
                n;
                constructor(e, t, r = {}, n, o) {
                    if (this.#e = new Map, this.#t = e, this.#r = t, "string" != typeof r.client_id || !r.client_id) throw TypeError("client_id is required");
                    let i = {
                        grant_types: ["authorization_code"],
                        id_token_signed_response_alg: "RS256",
                        authorization_signed_response_alg: "RS256",
                        response_types: ["code"],
                        token_endpoint_auth_method: "client_secret_basic",
                        ...this.fapi1() ? {
                            grant_types: ["authorization_code", "implicit"],
                            id_token_signed_response_alg: "PS256",
                            authorization_signed_response_alg: "PS256",
                            response_types: ["code id_token"],
                            tls_client_certificate_bound_access_tokens: !0,
                            token_endpoint_auth_method: void 0
                        } : void 0,
                        ...this.fapi2() ? {
                            id_token_signed_response_alg: "PS256",
                            authorization_signed_response_alg: "PS256",
                            token_endpoint_auth_method: void 0
                        } : void 0,
                        ...r
                    };
                    if (this.fapi()) switch (i.token_endpoint_auth_method) {
                        case "self_signed_tls_client_auth":
                        case "tls_client_auth":
                            break;
                        case "private_key_jwt":
                            if (!n) throw TypeError("jwks is required");
                            break;
                        case void 0:
                            throw TypeError("token_endpoint_auth_method is required");
                        default:
                            throw TypeError("invalid or unsupported token_endpoint_auth_method")
                    }
                    if (this.fapi2() && (i.tls_client_certificate_bound_access_tokens && i.dpop_bound_access_tokens || !i.tls_client_certificate_bound_access_tokens && !i.dpop_bound_access_tokens)) throw TypeError("either tls_client_certificate_bound_access_tokens or dpop_bound_access_tokens must be set to true");
                    if (! function(e, t, r) {
                            if (t.token_endpoint_auth_method || function(e, t) {
                                    try {
                                        let r = e.issuer.token_endpoint_auth_methods_supported;
                                        !r.includes(t.token_endpoint_auth_method) && r.includes("client_secret_post") && (t.token_endpoint_auth_method = "client_secret_post")
                                    } catch (e) {}
                                }(e, r), t.redirect_uri) {
                                if (t.redirect_uris) throw TypeError("provide a redirect_uri or redirect_uris, not both");
                                r.redirect_uris = [t.redirect_uri], delete r.redirect_uri
                            }
                            if (t.response_type) {
                                if (t.response_types) throw TypeError("provide a response_type or response_types, not both");
                                r.response_types = [t.response_type], delete r.response_type
                            }
                        }(this, r, i), w("token", this.issuer, i), ["introspection", "revocation"].forEach(e => {
                            (function(e, t, r) {
                                if (!t[`${e}_endpoint`]) return;
                                let n = r.token_endpoint_auth_method,
                                    o = r.token_endpoint_auth_signing_alg,
                                    i = `${e}_endpoint_auth_method`,
                                    a = `${e}_endpoint_auth_signing_alg`;
                                void 0 === r[i] && void 0 === r[a] && (void 0 !== n && (r[i] = n), void 0 !== o && (r[a] = o))
                            })(e, this.issuer, i), w(e, this.issuer, i)
                        }), Object.entries(i).forEach(([e, t]) => {
                            this.#e.set(e, t), this[e] || Object.defineProperty(this, e, {
                                get() {
                                    return this.#e.get(e)
                                },
                                enumerable: !0
                            })
                        }), void 0 !== n) {
                        let e = Z.call(this, n);
                        I.set(this, e)
                    }
                    null != o && o.additionalAuthorizedParties && (this.#n = H(o.additionalAuthorizedParties)), this[C] = 0
                }
                authorizationUrl(e = {}) {
                    if (!A(e)) throw TypeError("params must be a plain object");
                    S(this.issuer, "authorization_endpoint");
                    let t = new f(this.issuer.authorization_endpoint);
                    for (let [r, n] of Object.entries(X.call(this, e)))
                        if (Array.isArray(n))
                            for (let e of (t.searchParams.delete(r), n)) t.searchParams.append(r, e);
                        else t.searchParams.set(r, n);
                    return t.href.replace(/\+/g, "%20")
                }
                authorizationPost(e = {}) {
                    if (!A(e)) throw TypeError("params must be a plain object");
                    let t = X.call(this, e),
                        r = Object.keys(t).map(e => `<input type="hidden" name="${e}" value="${t[e]}"/>`).join("\n");
                    return `<!DOCTYPE html>
<head>
<title>Requesting Authorization</title>
</head>
<body onload="javascript:document.forms[0].submit()">
<form method="post" action="${this.issuer.authorization_endpoint}">
  ${r}
</form>
</body>
</html>`
                }
                endSessionUrl(e = {}) {
                    let t;
                    S(this.issuer, "end_session_endpoint");
                    let {
                        0: r,
                        length: n
                    } = this.post_logout_redirect_uris || [], {
                        post_logout_redirect_uri: o = 1 === n ? r : void 0
                    } = e;
                    if ({
                            id_token_hint: t,
                            ...e
                        } = e, t instanceof O) {
                        if (!t.id_token) throw TypeError("id_token not present in TokenSet");
                        t = t.id_token
                    }
                    let i = d.parse(this.issuer.end_session_endpoint),
                        a = v(V(this.issuer.end_session_endpoint), e, {
                            post_logout_redirect_uri: o,
                            client_id: this.client_id
                        }, {
                            id_token_hint: t
                        });
                    return Object.entries(a).forEach(([e, t]) => {
                        null == t && delete a[e]
                    }), i.search = null, i.query = a, d.format(i)
                }
                callbackParams(e) {
                    let t = e instanceof s.IncomingMessage || e && e.method && e.url;
                    if ("string" != typeof e && !t) throw TypeError("#callbackParams only accepts string urls, http.IncomingMessage or a lookalike");
                    if (!t) return z(V(e));
                    switch (e.method) {
                        case "GET":
                            return z(V(e.url));
                        case "POST":
                            if (void 0 === e.body) throw TypeError("incoming message body missing, include a body parser prior to this method call");
                            switch (typeof e.body) {
                                case "object":
                                case "string":
                                    if (i.isBuffer(e.body)) return z(l.parse(e.body.toString("utf-8")));
                                    if ("string" == typeof e.body) return z(l.parse(e.body));
                                    return z(e.body);
                                default:
                                    throw TypeError("invalid IncomingMessage body object")
                            }
                        default:
                            throw TypeError("invalid IncomingMessage method")
                    }
                }
                async callback(e, t, r = {}, {
                    exchangeBody: n,
                    clientAssertionPayload: o,
                    DPoP: i
                } = {}) {
                    let a = z(t);
                    if (!r.jarm || "response" in t) {
                        if ("response" in t) {
                            let e = await this.decryptJARM(a.response);
                            a = await this.validateJARM(e)
                        }
                    } else throw new x({
                        message: "expected a JARM response",
                        checks: r,
                        params: a
                    });
                    if (this.default_max_age && !r.max_age && (r.max_age = this.default_max_age), a.state && !r.state) throw TypeError("checks.state argument is missing");
                    if (!a.state && r.state) throw new x({
                        message: "state missing from the response",
                        checks: r,
                        params: a
                    });
                    if (r.state !== a.state) throw new x({
                        printf: ["state mismatch, expected %s, got: %s", r.state, a.state],
                        checks: r,
                        params: a
                    });
                    if ("iss" in a) {
                        if (S(this.issuer, "issuer"), a.iss !== this.issuer.issuer) throw new x({
                            printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, a.iss],
                            params: a
                        })
                    } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in a) && !("response" in t)) throw new x({
                        message: "iss missing from the response",
                        params: a
                    });
                    if (a.error) throw new P(a);
                    let s = {
                        code: ["code"],
                        id_token: ["id_token"],
                        token: ["access_token", "token_type"]
                    };
                    if (r.response_type) {
                        for (let e of r.response_type.split(" "))
                            if ("none" === e) {
                                if (a.code || a.id_token || a.access_token) throw new x({
                                    message: 'unexpected params encountered for "none" response',
                                    checks: r,
                                    params: a
                                })
                            } else
                                for (let t of s[e])
                                    if (!a[t]) throw new x({
                                        message: `${t} missing from response`,
                                        checks: r,
                                        params: a
                                    })
                    }
                    if (a.id_token) {
                        let e = new O(a);
                        if (await this.decryptIdToken(e), await this.validateIdToken(e, r.nonce, "authorization", r.max_age, r.state), !a.code) return e
                    }
                    if (a.code) {
                        let t = await this.grant({ ...n,
                            grant_type: "authorization_code",
                            code: a.code,
                            redirect_uri: e,
                            code_verifier: r.code_verifier
                        }, {
                            clientAssertionPayload: o,
                            DPoP: i
                        });
                        return await this.decryptIdToken(t), await this.validateIdToken(t, r.nonce, "token", r.max_age), a.session_state && (t.session_state = a.session_state), t
                    }
                    return new O(a)
                }
                async oauthCallback(e, t, r = {}, {
                    exchangeBody: n,
                    clientAssertionPayload: o,
                    DPoP: i
                } = {}) {
                    let a = z(t);
                    if (!r.jarm || "response" in t) {
                        if ("response" in t) {
                            let e = await this.decryptJARM(a.response);
                            a = await this.validateJARM(e)
                        }
                    } else throw new x({
                        message: "expected a JARM response",
                        checks: r,
                        params: a
                    });
                    if (a.state && !r.state) throw TypeError("checks.state argument is missing");
                    if (!a.state && r.state) throw new x({
                        message: "state missing from the response",
                        checks: r,
                        params: a
                    });
                    if (r.state !== a.state) throw new x({
                        printf: ["state mismatch, expected %s, got: %s", r.state, a.state],
                        checks: r,
                        params: a
                    });
                    if ("iss" in a) {
                        if (S(this.issuer, "issuer"), a.iss !== this.issuer.issuer) throw new x({
                            printf: ["iss mismatch, expected %s, got: %s", this.issuer.issuer, a.iss],
                            params: a
                        })
                    } else if (this.issuer.authorization_response_iss_parameter_supported && !("id_token" in a) && !("response" in t)) throw new x({
                        message: "iss missing from the response",
                        params: a
                    });
                    if (a.error) throw new P(a);
                    if ("string" == typeof a.id_token && a.id_token.length) throw new x({
                        message: "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()",
                        params: a
                    });
                    delete a.id_token;
                    let s = {
                        code: ["code"],
                        token: ["access_token", "token_type"]
                    };
                    if (r.response_type)
                        for (let e of r.response_type.split(" ")) {
                            if ("none" === e && (a.code || a.id_token || a.access_token)) throw new x({
                                message: 'unexpected params encountered for "none" response',
                                checks: r,
                                params: a
                            });
                            if (s[e]) {
                                for (let t of s[e])
                                    if (!a[t]) throw new x({
                                        message: `${t} missing from response`,
                                        checks: r,
                                        params: a
                                    })
                            }
                        }
                    if (a.code) {
                        let t = await this.grant({ ...n,
                            grant_type: "authorization_code",
                            code: a.code,
                            redirect_uri: e,
                            code_verifier: r.code_verifier
                        }, {
                            clientAssertionPayload: o,
                            DPoP: i
                        });
                        if ("string" == typeof t.id_token && t.id_token.length) throw new x({
                            message: "id_token detected in the response, you must use client.callback() instead of client.oauthCallback()",
                            params: a
                        });
                        return delete t.id_token, t
                    }
                    return new O(a)
                }
                async decryptIdToken(e) {
                    if (!this.id_token_encrypted_response_alg) return e;
                    let t = e;
                    if (t instanceof O) {
                        if (!t.id_token) throw TypeError("id_token not present in TokenSet");
                        t = t.id_token
                    }
                    let r = this.id_token_encrypted_response_alg,
                        n = this.id_token_encrypted_response_enc,
                        o = await this.decryptJWE(t, r, n);
                    return e instanceof O ? (e.id_token = o, e) : o
                }
                async validateJWTUserinfo(e) {
                    let t = this.userinfo_signed_response_alg;
                    return this.validateJWT(e, t, [])
                }
                async decryptJARM(e) {
                    if (!this.authorization_encrypted_response_alg) return e;
                    let t = this.authorization_encrypted_response_alg,
                        r = this.authorization_encrypted_response_enc;
                    return this.decryptJWE(e, t, r)
                }
                async decryptJWTUserinfo(e) {
                    if (!this.userinfo_encrypted_response_alg) return e;
                    let t = this.userinfo_encrypted_response_alg,
                        r = this.userinfo_encrypted_response_enc;
                    return this.decryptJWE(e, t, r)
                }
                async decryptJWE(e, t, r = "A128CBC-HS256") {
                    let n;
                    let o = JSON.parse(b.decode(e.split(".")[0]));
                    if (o.alg !== t) throw new x({
                        printf: ["unexpected JWE alg received, expected %s, got: %s", t, o.alg],
                        jwt: e
                    });
                    if (o.enc !== r) throw new x({
                        printf: ["unexpected JWE enc received, expected %s, got: %s", r, o.enc],
                        jwt: e
                    });
                    let i = e => new TextDecoder().decode(e.plaintext);
                    if (t.match(/^(?:RSA|ECDH)/)) {
                        let t = await I.get(this),
                            r = h.decodeProtectedHeader(e);
                        for (let o of t.all({ ...r,
                                use: "enc"
                            }))
                            if (n = await h.compactDecrypt(e, await o.keyObject(r.alg)).then(i, () => {})) break
                    } else n = await h.compactDecrypt(e, this.secretForAlg("dir" === t ? r : t)).then(i, () => {});
                    if (!n) throw new x({
                        message: "failed to decrypt JWE",
                        jwt: e
                    });
                    return n
                }
                async validateIdToken(e, t, r, n, o) {
                    let i = e,
                        a = this.id_token_signed_response_alg;
                    if (i instanceof O) {
                        if (!i.id_token) throw TypeError("id_token not present in TokenSet");
                        i = i.id_token
                    }
                    i = String(i);
                    let s = T(),
                        {
                            protected: c,
                            payload: u,
                            key: l
                        } = await this.validateJWT(i, a);
                    if ("number" == typeof n || n !== q && this.require_auth_time) {
                        if (!u.auth_time) throw new x({
                            message: "missing required JWT property auth_time",
                            jwt: i
                        });
                        if ("number" != typeof u.auth_time) throw new x({
                            message: "JWT auth_time claim must be a JSON numeric value",
                            jwt: i
                        })
                    }
                    if ("number" == typeof n && u.auth_time + n < s - this[C]) throw new x({
                        printf: ["too much time has elapsed since the last End-User authentication, max_age %i, auth_time: %i, now %i", n, u.auth_time, s - this[C]],
                        now: s,
                        tolerance: this[C],
                        auth_time: u.auth_time,
                        jwt: i
                    });
                    if (t !== F && (u.nonce || void 0 !== t) && u.nonce !== t) throw new x({
                        printf: ["nonce mismatch, expected %s, got: %s", t, u.nonce],
                        jwt: i
                    });
                    if ("authorization" === r) {
                        if (!u.at_hash && e.access_token) throw new x({
                            message: "missing required property at_hash",
                            jwt: i
                        });
                        if (!u.c_hash && e.code) throw new x({
                            message: "missing required property c_hash",
                            jwt: i
                        });
                        if (this.fapi1() && !u.s_hash && (e.state || o)) throw new x({
                            message: "missing required property s_hash",
                            jwt: i
                        });
                        if (u.s_hash) {
                            if (!o) throw TypeError('cannot verify s_hash, "checks.state" property not provided');
                            try {
                                y.validate({
                                    claim: "s_hash",
                                    source: "state"
                                }, u.s_hash, o, c.alg, l.jwk && l.jwk.crv)
                            } catch (e) {
                                throw new x({
                                    message: e.message,
                                    jwt: i
                                })
                            }
                        }
                    }
                    if (this.fapi() && u.iat < s - 3600) throw new x({
                        printf: ["JWT issued too far in the past, now %i, iat %i", s, u.iat],
                        now: s,
                        tolerance: this[C],
                        iat: u.iat,
                        jwt: i
                    });
                    if (e.access_token && void 0 !== u.at_hash) try {
                        y.validate({
                            claim: "at_hash",
                            source: "access_token"
                        }, u.at_hash, e.access_token, c.alg, l.jwk && l.jwk.crv)
                    } catch (e) {
                        throw new x({
                            message: e.message,
                            jwt: i
                        })
                    }
                    if (e.code && void 0 !== u.c_hash) try {
                        y.validate({
                            claim: "c_hash",
                            source: "code"
                        }, u.c_hash, e.code, c.alg, l.jwk && l.jwk.crv)
                    } catch (e) {
                        throw new x({
                            message: e.message,
                            jwt: i
                        })
                    }
                    return e
                }
                async validateJWT(e, t, r = ["iss", "sub", "aud", "exp", "iat"]) {
                    let n, o, i;
                    let a = "https://self-issued.me" === this.issuer.issuer,
                        s = T();
                    try {
                        ({
                            header: n,
                            payload: o
                        } = m(e, {
                            complete: !0
                        }))
                    } catch (t) {
                        throw new x({
                            printf: ["failed to decode JWT (%s: %s)", t.name, t.message],
                            jwt: e
                        })
                    }
                    if (n.alg !== t) throw new x({
                        printf: ["unexpected JWT alg received, expected %s, got: %s", t, n.alg],
                        jwt: e
                    });
                    if (a && (r = [...r, "sub_jwk"]), r.forEach(Y.bind(void 0, o, e)), void 0 !== o.iss) {
                        let t = this.issuer.issuer;
                        if (this.#r && (t = this.issuer.issuer.replace("{tenantid}", o.tid)), o.iss !== t) throw new x({
                            printf: ["unexpected iss value, expected %s, got: %s", t, o.iss],
                            jwt: e
                        })
                    }
                    if (void 0 !== o.iat && "number" != typeof o.iat) throw new x({
                        message: "JWT iat claim must be a JSON numeric value",
                        jwt: e
                    });
                    if (void 0 !== o.nbf) {
                        if ("number" != typeof o.nbf) throw new x({
                            message: "JWT nbf claim must be a JSON numeric value",
                            jwt: e
                        });
                        if (o.nbf > s + this[C]) throw new x({
                            printf: ["JWT not active yet, now %i, nbf %i", s + this[C], o.nbf],
                            now: s,
                            tolerance: this[C],
                            nbf: o.nbf,
                            jwt: e
                        })
                    }
                    if (void 0 !== o.exp) {
                        if ("number" != typeof o.exp) throw new x({
                            message: "JWT exp claim must be a JSON numeric value",
                            jwt: e
                        });
                        if (s - this[C] >= o.exp) throw new x({
                            printf: ["JWT expired, now %i, exp %i", s - this[C], o.exp],
                            now: s,
                            tolerance: this[C],
                            exp: o.exp,
                            jwt: e
                        })
                    }
                    if (void 0 !== o.aud) {
                        if (Array.isArray(o.aud)) {
                            if (o.aud.length > 1 && !o.azp) throw new x({
                                message: "missing required JWT property azp",
                                jwt: e
                            });
                            if (!o.aud.includes(this.client_id)) throw new x({
                                printf: ["aud is missing the client_id, expected %s to be included in %j", this.client_id, o.aud],
                                jwt: e
                            })
                        } else if (o.aud !== this.client_id) throw new x({
                            printf: ["aud mismatch, expected %s, got: %s", this.client_id, o.aud],
                            jwt: e
                        })
                    }
                    if (void 0 !== o.azp) {
                        let t = this.#n;
                        if (!(t = "string" == typeof t ? [this.client_id, t] : Array.isArray(t) ? [this.client_id, ...t] : [this.client_id]).includes(o.azp)) throw new x({
                            printf: ["azp mismatch, got: %s", o.azp],
                            jwt: e
                        })
                    }
                    if (a) {
                        try {
                            u(A(o.sub_jwk));
                            let e = await h.importJWK(o.sub_jwk, n.alg);
                            u.equal(e.type, "public"), i = [{
                                keyObject: () => e
                            }]
                        } catch (t) {
                            throw new x({
                                message: "failed to use sub_jwk claim as an asymmetric JSON Web Key",
                                jwt: e
                            })
                        }
                        if (await h.calculateJwkThumbprint(o.sub_jwk) !== o.sub) throw new x({
                            message: "failed to match the subject with sub_jwk",
                            jwt: e
                        })
                    } else n.alg.startsWith("HS") ? i = [this.secretForAlg(n.alg)] : "none" !== n.alg && (i = await W.call(this.issuer, { ...n,
                        use: "sig"
                    }));
                    if (!i && "none" === n.alg) return {
                        protected: n,
                        payload: o
                    };
                    for (let t of i) {
                        let r = await h.compactVerify(e, t instanceof Uint8Array ? t : await t.keyObject(n.alg)).catch(() => {});
                        if (r) return {
                            payload: o,
                            protected: r.protectedHeader,
                            key: t
                        }
                    }
                    throw new x({
                        message: "failed to validate JWT signature",
                        jwt: e
                    })
                }
                async refresh(e, {
                    exchangeBody: t,
                    clientAssertionPayload: r,
                    DPoP: n
                } = {}) {
                    let o = e;
                    if (o instanceof O) {
                        if (!o.refresh_token) throw TypeError("refresh_token not present in TokenSet");
                        o = o.refresh_token
                    }
                    let i = await this.grant({ ...t,
                        grant_type: "refresh_token",
                        refresh_token: String(o)
                    }, {
                        clientAssertionPayload: r,
                        DPoP: n
                    });
                    if (i.id_token && (await this.decryptIdToken(i), await this.validateIdToken(i, F, "token", q), e instanceof O && e.id_token)) {
                        let t = e.claims().sub,
                            r = i.claims().sub;
                        if (r !== t) throw new x({
                            printf: ["sub mismatch, expected %s, got: %s", t, r],
                            jwt: i.id_token
                        })
                    }
                    return i
                }
                async requestResource(e, t, {
                    method: r,
                    headers: n,
                    body: o,
                    DPoP: i,
                    tokenType: a = i ? "DPoP" : t instanceof O ? t.token_type : "Bearer"
                } = {}, s) {
                    if (t instanceof O) {
                        if (!t.access_token) throw TypeError("access_token not present in TokenSet");
                        t = t.access_token
                    }
                    if (t) {
                        if ("string" != typeof t) throw TypeError("invalid access token provided")
                    } else throw TypeError("no access token provided");
                    let c = {
                            headers: {
                                Authorization: G(t, a),
                                ...n
                            },
                            body: o
                        },
                        u = !!this.tls_client_certificate_bound_access_tokens,
                        l = await R.call(this, { ...c,
                            responseType: "buffer",
                            method: r,
                            url: e
                        }, {
                            accessToken: t,
                            mTLS: u,
                            DPoP: i
                        }),
                        d = l.headers["www-authenticate"];
                    return s !== J && d && d.toLowerCase().startsWith("dpop ") && "use_dpop_nonce" === _(d).error ? this.requestResource(e, t, {
                        method: r,
                        headers: n,
                        body: o,
                        DPoP: i,
                        tokenType: a
                    }) : l
                }
                async userinfo(e, {
                    method: t = "GET",
                    via: r = "header",
                    tokenType: n,
                    params: o,
                    DPoP: i
                } = {}) {
                    let a;
                    S(this.issuer, "userinfo_endpoint");
                    let s = {
                        tokenType: n,
                        method: String(t).toUpperCase(),
                        DPoP: i
                    };
                    if ("GET" !== s.method && "POST" !== s.method) throw TypeError("#userinfo() method can only be POST or a GET");
                    if ("body" === r && "POST" !== s.method) throw TypeError("can only send body on POST");
                    let c = !!(this.userinfo_signed_response_alg || this.userinfo_encrypted_response_alg);
                    c ? s.headers = {
                        Accept: "application/jwt"
                    } : s.headers = {
                        Accept: "application/json"
                    }, this.tls_client_certificate_bound_access_tokens && this.issuer.mtls_endpoint_aliases && (a = this.issuer.mtls_endpoint_aliases.userinfo_endpoint), a = new f(a || this.issuer.userinfo_endpoint), "body" === r && (s.headers.Authorization = void 0, s.headers["Content-Type"] = "application/x-www-form-urlencoded", s.body = new p, s.body.append("access_token", e instanceof O ? e.access_token : e)), o && ("GET" === s.method ? Object.entries(o).forEach(([e, t]) => {
                        a.searchParams.append(e, t)
                    }) : s.body ? Object.entries(o).forEach(([e, t]) => {
                        s.body.append(e, t)
                    }) : (s.body = new p, s.headers["Content-Type"] = "application/x-www-form-urlencoded", Object.entries(o).forEach(([e, t]) => {
                        s.body.append(e, t)
                    }))), s.body && (s.body = s.body.toString());
                    let l = await this.requestResource(a, e, s),
                        d = k(l, {
                            bearer: !0
                        });
                    if (c) {
                        if (!/^application\/jwt/.test(l.headers["content-type"])) throw new x({
                            message: "expected application/jwt response from the userinfo_endpoint",
                            response: l
                        });
                        let e = l.body.toString(),
                            t = await this.decryptJWTUserinfo(e);
                        if (this.userinfo_signed_response_alg)({
                            payload: d
                        } = await this.validateJWTUserinfo(t));
                        else try {
                            d = JSON.parse(t), u(A(d))
                        } catch (e) {
                            throw new x({
                                message: "failed to parse userinfo JWE payload as JSON",
                                jwt: t
                            })
                        }
                    } else try {
                        d = JSON.parse(l.body)
                    } catch (e) {
                        throw Object.defineProperty(e, "response", {
                            value: l
                        }), e
                    }
                    if (e instanceof O && e.id_token) {
                        let t = e.claims().sub;
                        if (d.sub !== t) throw new x({
                            printf: ["userinfo sub mismatch, expected %s, got: %s", t, d.sub],
                            body: d,
                            jwt: e.id_token
                        })
                    }
                    return d
                }
                encryptionSecret(e) {
                    let t = e <= 256 ? "sha256" : e <= 384 ? "sha384" : e <= 512 && "sha512";
                    if (!t) throw Error("unsupported symmetric encryption key derivation");
                    return c.createHash(t).update(this.client_secret).digest().slice(0, e / 8)
                }
                secretForAlg(e) {
                    if (!this.client_secret) throw TypeError("client_secret is required");
                    return /^A(\d{3})(?:GCM)?KW$/.test(e) ? this.encryptionSecret(parseInt(RegExp.$1, 10)) : /^A(\d{3})(?:GCM|CBC-HS(\d{3}))$/.test(e) ? this.encryptionSecret(parseInt(RegExp.$2 || RegExp.$1, 10)) : new TextEncoder().encode(this.client_secret)
                }
                async grant(e, {
                    clientAssertionPayload: t,
                    DPoP: r
                } = {}, n) {
                    let o;
                    S(this.issuer, "token_endpoint");
                    let i = await M.call(this, "token", {
                        form: e,
                        responseType: "json"
                    }, {
                        clientAssertionPayload: t,
                        DPoP: r
                    });
                    try {
                        o = k(i)
                    } catch (o) {
                        if (n !== J && o instanceof P && "use_dpop_nonce" === o.error) return this.grant(e, {
                            clientAssertionPayload: t,
                            DPoP: r
                        }, J);
                        throw o
                    }
                    return new O(o)
                }
                async deviceAuthorization(e = {}, {
                    exchangeBody: t,
                    clientAssertionPayload: r,
                    DPoP: n
                } = {}) {
                    S(this.issuer, "device_authorization_endpoint"), S(this.issuer, "token_endpoint");
                    let o = X.call(this, {
                            client_id: this.client_id,
                            redirect_uri: null,
                            response_type: null,
                            ...e
                        }),
                        i = k(await M.call(this, "device_authorization", {
                            responseType: "json",
                            form: o
                        }, {
                            clientAssertionPayload: r,
                            endpointAuthMethod: "token"
                        }));
                    return new $({
                        client: this,
                        exchangeBody: t,
                        clientAssertionPayload: r,
                        response: i,
                        maxAge: e.max_age,
                        DPoP: n
                    })
                }
                async revoke(e, t, {
                    revokeBody: r,
                    clientAssertionPayload: n
                } = {}) {
                    if (S(this.issuer, "revocation_endpoint"), void 0 !== t && "string" != typeof t) throw TypeError("hint must be a string");
                    let o = { ...r,
                        token: e
                    };
                    t && (o.token_type_hint = t), k(await M.call(this, "revocation", {
                        form: o
                    }, {
                        clientAssertionPayload: n
                    }), {
                        body: !1
                    })
                }
                async introspect(e, t, {
                    introspectBody: r,
                    clientAssertionPayload: n
                } = {}) {
                    if (S(this.issuer, "introspection_endpoint"), void 0 !== t && "string" != typeof t) throw TypeError("hint must be a string");
                    let o = { ...r,
                        token: e
                    };
                    return t && (o.token_type_hint = t), k(await M.call(this, "introspection", {
                        form: o,
                        responseType: "json"
                    }, {
                        clientAssertionPayload: n
                    }))
                }
                static async register(e, t = {}) {
                    let {
                        initialAccessToken: r,
                        jwks: n,
                        ...o
                    } = t;
                    if (S(this.issuer, "registration_endpoint"), void 0 !== n && !(e.jwks || e.jwks_uri)) {
                        let t = await Z.call(this, n);
                        e.jwks = t.toJWKS()
                    }
                    return new this(k(await R.call(this, {
                        headers: {
                            Accept: "application/json",
                            ...r ? {
                                Authorization: G(r)
                            } : void 0
                        },
                        responseType: "json",
                        json: e,
                        url: this.issuer.registration_endpoint,
                        method: "POST"
                    }), {
                        statusCode: 201,
                        bearer: !0
                    }), n, o)
                }
                get metadata() {
                    return H(Object.fromEntries(this.#e.entries()))
                }
                static async fromUri(e, t, r, n) {
                    return new this(k(await R.call(this, {
                        method: "GET",
                        url: e,
                        responseType: "json",
                        headers: {
                            Authorization: G(t),
                            Accept: "application/json"
                        }
                    }), {
                        bearer: !0
                    }), r, n)
                }
                async requestObject(e = {}, {
                    sign: t = this.request_object_signing_alg || "none",
                    encrypt: {
                        alg: r = this.request_object_encryption_alg,
                        enc: n = this.request_object_encryption_enc || "A128CBC-HS256"
                    } = {}
                } = {}) {
                    let o, i;
                    if (!A(e)) throw TypeError("requestObject must be a plain object");
                    let a = T(),
                        s = {
                            alg: t,
                            typ: "oauth-authz-req+jwt"
                        },
                        c = JSON.stringify(v({}, e, {
                            iss: this.client_id,
                            aud: this.issuer.issuer,
                            client_id: this.client_id,
                            jti: j(),
                            iat: a,
                            exp: a + 300,
                            ...this.fapi() ? {
                                nbf: a
                            } : void 0
                        }));
                    if ("none" === t) o = [b.encode(JSON.stringify(s)), b.encode(c), ""].join(".");
                    else {
                        let e = t.startsWith("HS");
                        if (e) i = this.secretForAlg(t);
                        else {
                            let e = await I.get(this);
                            if (!e) throw TypeError(`no keystore present for client, cannot sign using alg ${t}`);
                            if (!(i = e.get({
                                    alg: t,
                                    use: "sig"
                                }))) throw TypeError(`no key to sign with found for alg ${t}`)
                        }
                        o = await new h.CompactSign(new TextEncoder().encode(c)).setProtectedHeader({ ...s,
                            kid: e ? void 0 : i.jwk.kid
                        }).sign(e ? i : await i.keyObject(t))
                    }
                    if (!r) return o;
                    let u = {
                        alg: r,
                        enc: n,
                        cty: "oauth-authz-req+jwt"
                    };
                    return u.alg.match(/^(RSA|ECDH)/) ? [i] = await W.call(this.issuer, {
                        alg: u.alg,
                        use: "enc"
                    }, {
                        allowMulti: !0
                    }) : i = this.secretForAlg("dir" === u.alg ? u.enc : u.alg), new h.CompactEncrypt(new TextEncoder().encode(o)).setProtectedHeader({ ...u,
                        kid: i instanceof Uint8Array ? void 0 : i.jwk.kid
                    }).encrypt(i instanceof Uint8Array ? i : await i.keyObject(u.alg))
                }
                async pushedAuthorizationRequest(e = {}, {
                    clientAssertionPayload: t
                } = {}) {
                    S(this.issuer, "pushed_authorization_request_endpoint");
                    let r = { ..."request" in e ? e : X.call(this, e),
                            client_id: this.client_id
                        },
                        n = await M.call(this, "pushed_authorization_request", {
                            responseType: "json",
                            form: r
                        }, {
                            clientAssertionPayload: t,
                            endpointAuthMethod: "token"
                        }),
                        o = k(n, {
                            statusCode: 201
                        });
                    if (!("expires_in" in o)) throw new x({
                        message: "expected expires_in in Pushed Authorization Successful Response",
                        response: n
                    });
                    if ("number" != typeof o.expires_in) throw new x({
                        message: "invalid expires_in value in Pushed Authorization Successful Response",
                        response: n
                    });
                    if (!("request_uri" in o)) throw new x({
                        message: "expected request_uri in Pushed Authorization Successful Response",
                        response: n
                    });
                    if ("string" != typeof o.request_uri) throw new x({
                        message: "invalid request_uri value in Pushed Authorization Successful Response",
                        response: n
                    });
                    return o
                }
                get issuer() {
                    return this.#t
                }[a.custom]() {
                    return `${this.constructor.name} ${a(this.metadata,{depth:1/0,colors:o.stdout.isTTY,compact:!1,sorted:!0})}`
                }
                fapi() {
                    return this.fapi1() || this.fapi2()
                }
                fapi1() {
                    return "FAPI1Client" === this.constructor.name
                }
                fapi2() {
                    return "FAPI2Client" === this.constructor.name
                }
                async validateJARM(e) {
                    let t = this.authorization_signed_response_alg,
                        {
                            payload: r
                        } = await this.validateJWT(e, t, ["iss", "exp", "aud"]);
                    return z(r)
                }
                async dpopProof(e, t, r) {
                    let o;
                    if (!A(e)) throw TypeError("payload must be a plain object");
                    if (g(t)) o = t;
                    else if ("CryptoKey" === t[Symbol.toStringTag]) o = t;
                    else if ("node:crypto" === h.cryptoRuntime) o = c.createPrivateKey(t);
                    else throw TypeError("unrecognized crypto runtime");
                    if ("private" !== o.type) throw TypeError('"DPoP" option must be a private key');
                    let i = n.call(this, o, t);
                    if (!i) throw TypeError("could not determine DPoP JWS Algorithm");
                    return new h.SignJWT({
                        ath: r ? b.encode(c.createHash("sha256").update(r).digest()) : void 0,
                        ...e
                    }).setProtectedHeader({
                        alg: i,
                        typ: "dpop+jwt",
                        jwk: await er(o, t)
                    }).setIssuedAt().setJti(j()).sign(o)
                }
            }

            function ee(e) {
                switch (e.algorithm.name) {
                    case "Ed25519":
                    case "Ed448":
                        return "EdDSA";
                    case "ECDSA":
                        switch (e.algorithm.namedCurve) {
                            case "P-256":
                                return "ES256";
                            case "P-384":
                                return "ES384";
                            case "P-521":
                                return "ES512"
                        }
                        break;
                    case "RSASSA-PKCS1-v1_5":
                        return `RS${e.algorithm.hash.name.slice(4)}`;
                    case "RSA-PSS":
                        return `PS${e.algorithm.hash.name.slice(4)}`;
                    default:
                        throw TypeError("unsupported DPoP private key")
                }
            }
            if ("node:crypto" === h.cryptoRuntime) {
                n = function(n, i) {
                    if ("CryptoKey" === i[Symbol.toStringTag]) return ee(n);
                    switch (n.asymmetricKeyType) {
                        case "ed25519":
                        case "ed448":
                            return "EdDSA";
                        case "ec":
                            return function(e, n) {
                                switch ("object" == typeof n && "object" == typeof n.key && n.key.crv) {
                                    case "P-256":
                                        return "ES256";
                                    case "secp256k1":
                                        return "ES256K";
                                    case "P-384":
                                        return "ES384";
                                    case "P-512":
                                        return "ES512"
                                }
                                let i = e.export({
                                        format: "der",
                                        type: "pkcs8"
                                    }),
                                    s = i[1] < 128 ? 17 : 18,
                                    c = i[s],
                                    u = i.slice(s + 1, s + 1 + c);
                                if (u.equals(t)) return "ES256";
                                if (u.equals(r)) return "ES384";
                                if (u.equals(o)) return "ES512";
                                if (u.equals(a)) return "ES256K";
                                throw TypeError("unsupported DPoP private key curve")
                            }(n, i);
                        case "rsa":
                        case K && "rsa-pss":
                            return function(t, r, n) {
                                if ("object" == typeof r && "jwk" === r.format && r.key && r.key.alg) return r.key.alg;
                                if (Array.isArray(n)) {
                                    let r = n.filter(RegExp.prototype.test.bind(e));
                                    return "rsa-pss" === t.asymmetricKeyType && (r = r.filter(e => e.startsWith("PS"))), ["PS256", "PS384", "PS512", "RS256", "RS384", "RS384"].find(e => r.includes(e))
                                }
                                return "PS256"
                            }(n, i, this.issuer.dpop_signing_alg_values_supported);
                        default:
                            throw TypeError("unsupported DPoP private key")
                    }
                };
                let e = /^(?:RS|PS)(?:256|384|512)$/,
                    t = i.from([42, 134, 72, 206, 61, 3, 1, 7]),
                    r = i.from([43, 129, 4, 0, 34]),
                    o = i.from([43, 129, 4, 0, 35]),
                    a = i.from([43, 129, 4, 0, 10])
            } else n = ee;
            let et = new WeakMap;
            async function er(e, t) {
                if ("node:crypto" === h.cryptoRuntime && "object" == typeof t && "object" == typeof t.key && "jwk" === t.format) return E(t.key, "kty", "crv", "x", "y", "e", "n");
                if (et.has(t)) return et.get(t);
                let r = E(await h.exportJWK(e), "kty", "crv", "x", "y", "e", "n");
                return (g(t) || "WebCryptoAPI" === h.cryptoRuntime) && et.set(t, r), r
            }
            e.exports = (e, t = !1) => class extends Q {
                constructor(...r) {
                    super(e, t, ...r)
                }
                static get issuer() {
                    return e
                }
            }, e.exports.BaseClient = Q
        },
        27649: function(e, t, r) {
            var n = r(83454);
            let {
                inspect: o
            } = r(79720), {
                RPError: i,
                OPError: a
            } = r(67486), s = r(96891);
            class c {#
                o;#
                i;#
                a;#
                s;#
                c;#
                u;#
                l;#
                d;#
                f;
                constructor({
                    client: e,
                    exchangeBody: t,
                    clientAssertionPayload: r,
                    response: n,
                    maxAge: o,
                    DPoP: a
                }) {
                    if (["verification_uri", "user_code", "device_code"].forEach(e => {
                            if ("string" != typeof n[e] || !n[e]) throw new i(`expected ${e} string to be returned by Device Authorization Response, got %j`, n[e])
                        }), !Number.isSafeInteger(n.expires_in)) throw new i("expected expires_in number to be returned by Device Authorization Response, got %j", n.expires_in);
                    this.#u = s() + n.expires_in, this.#i = e, this.#s = a, this.#d = o, this.#c = t, this.#a = r, this.#f = n, this.#l = 1e3 * n.interval || 5e3
                }
                abort() {
                    this.#o = !0
                }
                async poll({
                    signal: e
                } = {}) {
                    let t;
                    if (e && e.aborted || this.#o) throw new i("polling aborted");
                    if (this.expired()) throw new i("the device code %j has expired and the device authorization session has concluded", this.device_code);
                    await new Promise(e => setTimeout(e, this.#l));
                    try {
                        t = await this.#i.grant({ ...this.#c,
                            grant_type: "urn:ietf:params:oauth:grant-type:device_code",
                            device_code: this.device_code
                        }, {
                            clientAssertionPayload: this.#a,
                            DPoP: this.#s
                        })
                    } catch (t) {
                        switch (t instanceof a && t.error) {
                            case "slow_down":
                                this.#l += 5e3;
                            case "authorization_pending":
                                return this.poll({
                                    signal: e
                                });
                            default:
                                throw t
                        }
                    }
                    return "id_token" in t && (await this.#i.decryptIdToken(t), await this.#i.validateIdToken(t, void 0, "token", this.#d)), t
                }
                get device_code() {
                    return this.#f.device_code
                }
                get user_code() {
                    return this.#f.user_code
                }
                get verification_uri() {
                    return this.#f.verification_uri
                }
                get verification_uri_complete() {
                    return this.#f.verification_uri_complete
                }
                get expires_in() {
                    return Math.max.apply(null, [this.#u - s(), 0])
                }
                expired() {
                    return 0 === this.expires_in
                }[o.custom]() {
                    return `${this.constructor.name} ${o(this.#f,{depth:1/0,colors:n.stdout.isTTY,compact:!1,sorted:!0})}`
                }
            }
            e.exports = c
        },
        67486: function(e, t, r) {
            let {
                format: n
            } = r(79720);
            class o extends Error {
                constructor({
                    error_description: e,
                    error: t,
                    error_uri: r,
                    session_state: n,
                    state: o,
                    scope: i
                }, a) {
                    super(e ? `${t} (${e})` : t), Object.assign(this, {
                        error: t
                    }, e && {
                        error_description: e
                    }, r && {
                        error_uri: r
                    }, o && {
                        state: o
                    }, i && {
                        scope: i
                    }, n && {
                        session_state: n
                    }), a && Object.defineProperty(this, "response", {
                        value: a
                    }), this.name = this.constructor.name, Error.captureStackTrace(this, this.constructor)
                }
            }
            class i extends Error {
                constructor(...e) {
                    if ("string" == typeof e[0]) super(n(...e));
                    else {
                        let {
                            message: t,
                            printf: r,
                            response: o,
                            ...i
                        } = e[0];
                        r ? super(n(...r)) : super(t), Object.assign(this, i), o && Object.defineProperty(this, "response", {
                            value: o
                        })
                    }
                    this.name = this.constructor.name, Error.captureStackTrace(this, this.constructor)
                }
            }
            e.exports = {
                OPError: o,
                RPError: i
            }
        },
        8867: function(e) {
            e.exports = {
                assertSigningAlgValuesSupport: function(e, t, r) {
                    if (!t[`${e}_endpoint`]) return;
                    let n = `${e}_endpoint_auth_method`,
                        o = `${e}_endpoint_auth_signing_alg`,
                        i = `${e}_endpoint_auth_signing_alg_values_supported`;
                    if (r[n] && r[n].endsWith("_jwt") && !r[o] && !t[i]) throw TypeError(`${i} must be configured on the issuer if ${o} is not defined on a client`)
                },
                assertIssuerConfiguration: function(e, t) {
                    if (!e[t]) throw TypeError(`${t} must be configured on the issuer`)
                }
            }
        },
        42806: function(e, t, r) {
            let n;
            var o = r(21876).Buffer;
            if (o.isEncoding("base64url")) n = (e, t = "utf8") => o.from(e, t).toString("base64url");
            else {
                let e = e => e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
                n = (t, r = "utf8") => e(o.from(t, r).toString("base64"))
            }
            e.exports.decode = e => o.from(e, "base64"), e.exports.encode = n
        },
        4944: function(e, t, r) {
            var n = r(21876).Buffer;
            let o = r(45595),
                {
                    RPError: i
                } = r(67486),
                {
                    assertIssuerConfiguration: a
                } = r(8867),
                {
                    random: s
                } = r(68767),
                c = r(96891),
                u = r(3862),
                {
                    keystores: l
                } = r(64385),
                d = r(65047),
                f = e => encodeURIComponent(e).replace(/%20/g, "+");
            async function p(e, t) {
                let r = this[`${e}_endpoint_auth_signing_alg`];
                if (r || a(this.issuer, `${e}_endpoint_auth_signing_alg_values_supported`), "client_secret_jwt" === this[`${e}_endpoint_auth_method`]) {
                    if (!r) {
                        let t = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
                        r = Array.isArray(t) && t.find(e => /^HS(?:256|384|512)/.test(e))
                    }
                    if (!r) throw new i(`failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`);
                    return new o.CompactSign(n.from(JSON.stringify(t))).setProtectedHeader({
                        alg: r
                    }).sign(this.secretForAlg(r))
                }
                let s = await l.get(this);
                if (!s) throw TypeError("no client jwks provided for signing a client assertion with");
                if (!r) {
                    let t = this.issuer[`${e}_endpoint_auth_signing_alg_values_supported`];
                    r = Array.isArray(t) && t.find(e => s.get({
                        alg: e,
                        use: "sig"
                    }))
                }
                if (!r) throw new i(`failed to determine a JWS Algorithm to use for ${this[`${e}_endpoint_auth_method`]} Client Assertion`);
                let c = s.get({
                    alg: r,
                    use: "sig"
                });
                if (!c) throw new i(`no key found in client jwks to sign a client assertion with using alg ${r}`);
                return new o.CompactSign(n.from(JSON.stringify(t))).setProtectedHeader({
                    alg: r,
                    kid: c.jwk && c.jwk.kid
                }).sign(await c.keyObject(r))
            }
            async function h(e, {
                clientAssertionPayload: t
            } = {}) {
                switch (this[`${e}_endpoint_auth_method`]) {
                    case "self_signed_tls_client_auth":
                    case "tls_client_auth":
                    case "none":
                        return {
                            form: {
                                client_id: this.client_id
                            }
                        };
                    case "client_secret_post":
                        if ("string" != typeof this.client_secret) throw TypeError("client_secret_post client authentication method requires a client_secret");
                        return {
                            form: {
                                client_id: this.client_id,
                                client_secret: this.client_secret
                            }
                        };
                    case "private_key_jwt":
                    case "client_secret_jwt":
                        {
                            let r = c(),
                                n = await p.call(this, e, {
                                    iat: r,
                                    exp: r + 60,
                                    jti: s(),
                                    iss: this.client_id,
                                    sub: this.client_id,
                                    aud: this.issuer.issuer,
                                    ...t
                                });
                            return {
                                form: {
                                    client_id: this.client_id,
                                    client_assertion: n,
                                    client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
                                }
                            }
                        }
                    case "client_secret_basic":
                        {
                            if ("string" != typeof this.client_secret) throw TypeError("client_secret_basic client authentication method requires a client_secret");
                            let e = `${f(this.client_id)}:${f(this.client_secret)}`,
                                t = n.from(e).toString("base64");
                            return {
                                headers: {
                                    Authorization: `Basic ${t}`
                                }
                            }
                        }
                    default:
                        throw TypeError(`missing, or unsupported, ${e}_endpoint_auth_method`)
                }
            }
            async function y(e, t, {
                clientAssertionPayload: r,
                endpointAuthMethod: n = e,
                DPoP: o
            } = {}) {
                let i;
                let a = d(t, await h.call(this, n, {
                        clientAssertionPayload: r
                    })),
                    s = this[`${n}_endpoint_auth_method`].includes("tls_client_auth") || "token" === e && this.tls_client_certificate_bound_access_tokens;
                if (s && this.issuer.mtls_endpoint_aliases && (i = this.issuer.mtls_endpoint_aliases[`${e}_endpoint`]), i = i || this.issuer[`${e}_endpoint`], "form" in a)
                    for (let [e, t] of Object.entries(a.form)) void 0 === t && delete a.form[e];
                return u.call(this, { ...a,
                    method: "POST",
                    url: i,
                    headers: { ..."revocation" !== e ? {
                            Accept: "application/json"
                        } : void 0,
                        ...a.headers
                    }
                }, {
                    mTLS: s,
                    DPoP: o
                })
            }
            e.exports = {
                resolveResponseType: function() {
                    let {
                        length: e,
                        0: t
                    } = this.response_types;
                    if (1 === e) return t
                },
                resolveRedirectUri: function() {
                    let {
                        length: e,
                        0: t
                    } = this.redirect_uris || [];
                    if (1 === e) return t
                },
                authFor: h,
                authenticatedPost: y
            }
        },
        78026: function(e) {
            let t = Symbol(),
                r = Symbol();
            e.exports = {
                CLOCK_TOLERANCE: r,
                HTTP_OPTIONS: t
            }
        },
        77749: function(e, t, r) {
            let n = r(42806);
            e.exports = e => {
                if ("string" != typeof e || !e) throw TypeError("JWT must be a string");
                let {
                    0: t,
                    1: r,
                    2: o,
                    length: i
                } = e.split(".");
                if (5 === i) throw TypeError("encrypted JWTs cannot be decoded");
                if (3 !== i) throw Error("JWTs must have three components");
                try {
                    return {
                        header: JSON.parse(n.decode(t)),
                        payload: JSON.parse(n.decode(r)),
                        signature: o
                    }
                } catch (e) {
                    throw Error("JWT is malformed")
                }
            }
        },
        71050: function(e) {
            e.exports = globalThis.structuredClone || (e => JSON.parse(JSON.stringify(e)))
        },
        51892: function(e, t, r) {
            let n = r(51303);

            function o(e, t, ...r) {
                for (let i of r)
                    if (n(i))
                        for (let [r, a] of Object.entries(i)) "__proto__" !== r && "constructor" !== r && (void 0 === t[r] && void 0 !== a && (t[r] = a), e && n(t[r]) && n(a) && o(!0, t[r], a));
                return t
            }
            e.exports = o.bind(void 0, !1), e.exports.deep = o.bind(void 0, !0)
        },
        68767: function(e, t, r) {
            let {
                createHash: n,
                randomBytes: o
            } = r(42474), i = r(42806), a = (e = 32) => i.encode(o(e));
            e.exports = {
                random: a,
                state: a,
                nonce: a,
                codeVerifier: a,
                codeChallenge: e => i.encode(n("sha256").update(e).digest())
            }
        },
        92793: function(e, t, r) {
            let n = r(79720),
                o = r(42474);
            e.exports = n.types.isKeyObject || (e => e && e instanceof o.KeyObject)
        },
        51303: function(e) {
            e.exports = e => !!e && e.constructor === Object
        },
        17042: function(e, t, r) {
            let n = r(40705),
                o = r(42097),
                {
                    RPError: i
                } = r(67486),
                {
                    assertIssuerConfiguration: a
                } = r(8867),
                s = r(42485),
                {
                    keystores: c
                } = r(64385),
                u = r(47787),
                l = r(3862),
                d = new WeakMap,
                f = new WeakMap,
                p = e => (f.has(e) || f.set(e, new o({
                    max: 100
                })), f.get(e));
            async function h(e = !1) {
                a(this, "jwks_uri");
                let t = c.get(this),
                    r = p(this);
                return e || !t ? (d.has(this) || (r.reset(), d.set(this, (async () => {
                    let e = u(await l.call(this, {
                            method: "GET",
                            responseType: "json",
                            url: this.jwks_uri,
                            headers: {
                                Accept: "application/json, application/jwk-set+json"
                            }
                        }).finally(() => {
                            d.delete(this)
                        })),
                        t = s.fromJWKS(e, {
                            onlyPublic: !0
                        });
                    return r.set("throttle", !0, 6e4), c.set(this, t), t
                })())), d.get(this)) : t
            }
            async function y({
                kid: e,
                kty: t,
                alg: r,
                use: o
            }, {
                allowMulti: a = !1
            } = {}) {
                let s = p(this),
                    c = {
                        kid: e,
                        kty: t,
                        alg: r,
                        use: o
                    },
                    u = n(c, {
                        algorithm: "sha256",
                        ignoreUnknown: !0,
                        unorderedArrays: !0,
                        unorderedSets: !0,
                        respectType: !1
                    }),
                    l = s.get(u) || s.get("throttle"),
                    d = await h.call(this, !l),
                    f = d.all(c);
                if (delete c.use, 0 === f.length) throw new i({
                    printf: ["no valid key found in issuer's jwks_uri for key parameters %j", c],
                    jwks: d
                });
                if (!a && f.length > 1 && !e) throw new i({
                    printf: ["multiple matching keys found in issuer's jwks_uri for key parameters %j, kid must be provided in this case", c],
                    jwks: d
                });
                return s.set(u, !0), f
            }
            e.exports.queryKeyStore = y, e.exports.keystore = h
        },
        42485: function(e, t, r) {
            let n = r(45595),
                o = r(71050),
                i = r(51303),
                a = Symbol(),
                s = (e, {
                    alg: t,
                    use: r
                }) => {
                    let n = 0;
                    return t && e.alg && n++, r && e.use && n++, n
                };
            e.exports = class {#
                p;
                constructor(e, t) {
                    if (e !== a) throw Error("invalid constructor call");
                    this.#p = t
                }
                toJWKS() {
                    return {
                        keys: this.map(({
                            jwk: {
                                d: e,
                                p: t,
                                q: r,
                                dp: n,
                                dq: o,
                                qi: i,
                                ...a
                            }
                        }) => a)
                    }
                }
                all({
                    alg: e,
                    kid: t,
                    use: r
                } = {}) {
                    if (!r || !e) throw Error();
                    let n = function(e) {
                            switch ("string" == typeof e && e.slice(0, 2)) {
                                case "RS":
                                case "PS":
                                    return "RSA";
                                case "ES":
                                    return "EC";
                                case "Ed":
                                    return "OKP";
                                default:
                                    return
                            }
                        }(e),
                        o = {
                            alg: e,
                            use: r
                        };
                    return this.filter(o => {
                        let i = !0;
                        return void 0 !== n && o.jwk.kty !== n && (i = !1), i && void 0 !== t && o.jwk.kid !== t && (i = !1), i && void 0 !== r && void 0 !== o.jwk.use && o.jwk.use !== r && (i = !1), i && o.jwk.alg && o.jwk.alg !== e ? i = !1 : o.algorithms.has(e) || (i = !1), i
                    }).sort((e, t) => s(t, o) - s(e, o))
                }
                get(...e) {
                    return this.all(...e)[0]
                }
                static async fromJWKS(e, {
                    onlyPublic: t = !1,
                    onlyPrivate: r = !1
                } = {}) {
                    if (!i(e) || !Array.isArray(e.keys) || e.keys.some(e => !i(e) || !("kty" in e))) throw TypeError("jwks must be a JSON Web Key Set formatted object");
                    let s = [];
                    for (let i of e.keys) {
                        let {
                            kty: e,
                            kid: a,
                            crv: c
                        } = i = o(i), {
                            alg: u,
                            use: l
                        } = i;
                        if ("string" == typeof e && e && (void 0 === l || "sig" === l || "enc" === l) && ("string" == typeof u || void 0 === u) && ("string" == typeof a || void 0 === a)) {
                            if ("EC" === e && "sig" === l) switch (c) {
                                case "P-256":
                                    u = "ES256";
                                    break;
                                case "P-384":
                                    u = "ES384";
                                    break;
                                case "P-521":
                                    u = "ES512"
                            }
                            if ("secp256k1" === c && (l = "sig", u = "ES256K"), "OKP" === e) switch (c) {
                                case "Ed25519":
                                case "Ed448":
                                    l = "sig", u = "EdDSA";
                                    break;
                                case "X25519":
                                case "X448":
                                    l = "enc"
                            }
                            if (u && !l) switch (!0) {
                                case u.startsWith("ECDH"):
                                case u.startsWith("RSA"):
                                    l = "enc"
                            }
                            if (r && ("oct" === i.kty || !i.d)) throw Error("jwks must only contain private keys");
                            t && (i.d || i.k) || s.push({
                                jwk: { ...i,
                                    alg: u,
                                    use: l
                                },
                                async keyObject(e) {
                                    if (this[e]) return this[e];
                                    let t = await n.importJWK(this.jwk, e);
                                    return this[e] = t, t
                                },
                                get algorithms() {
                                    return Object.defineProperty(this, "algorithms", {
                                        value: function(e, t, r, o) {
                                            if (t) return new Set([t]);
                                            switch (r) {
                                                case "EC":
                                                    {
                                                        let t = [];
                                                        if (("enc" === e || void 0 === e) && (t = t.concat(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"])), "sig" === e || void 0 === e) switch (o) {
                                                            case "P-256":
                                                            case "P-384":
                                                                t = t.concat([`ES${o.slice(-3)}`]);
                                                                break;
                                                            case "P-521":
                                                                t = t.concat(["ES512"]);
                                                                break;
                                                            case "secp256k1":
                                                                "node:crypto" === n.cryptoRuntime && (t = t.concat(["ES256K"]))
                                                        }
                                                        return new Set(t)
                                                    }
                                                case "OKP":
                                                    return new Set(["ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A192KW", "ECDH-ES+A256KW"]);
                                                case "RSA":
                                                    {
                                                        let t = [];
                                                        return ("enc" === e || void 0 === e) && (t = t.concat(["RSA-OAEP", "RSA-OAEP-256", "RSA-OAEP-384", "RSA-OAEP-512"]), "node:crypto" === n.cryptoRuntime && (t = t.concat(["RSA1_5"]))),
                                                        ("sig" === e || void 0 === e) && (t = t.concat(["PS256", "PS384", "PS512", "RS256", "RS384", "RS512"])),
                                                        new Set(t)
                                                    }
                                                default:
                                                    throw Error("unreachable")
                                            }
                                        }(this.jwk.use, this.jwk.alg, this.jwk.kty, this.jwk.crv),
                                        enumerable: !0,
                                        configurable: !1
                                    }), this.algorithms
                                }
                            })
                        }
                    }
                    return new this(a, s)
                }
                filter(...e) {
                    return this.#p.filter(...e)
                }
                find(...e) {
                    return this.#p.find(...e)
                }
                every(...e) {
                    return this.#p.every(...e)
                }
                some(...e) {
                    return this.#p.some(...e)
                }
                map(...e) {
                    return this.#p.map(...e)
                }
                forEach(...e) {
                    return this.#p.forEach(...e)
                }
                reduce(...e) {
                    return this.#p.reduce(...e)
                }
                sort(...e) {
                    return this.#p.sort(...e)
                }*[Symbol.iterator]() {
                    for (let e of this.#p) yield e
                }
            }
        },
        65047: function(e, t, r) {
            let n = r(51303);
            e.exports = function e(t, ...r) {
                for (let o of r)
                    if (n(o))
                        for (let [r, i] of Object.entries(o)) "__proto__" !== r && "constructor" !== r && (n(t[r]) && n(i) ? t[r] = e(t[r], i) : void 0 !== i && (t[r] = i));
                return t
            }
        },
        76038: function(e) {
            e.exports = function(e, ...t) {
                let r = {};
                for (let n of t) void 0 !== e[n] && (r[n] = e[n]);
                return r
            }
        },
        47787: function(e, t, r) {
            var n = r(21876).Buffer;
            let {
                STATUS_CODES: o
            } = r(22321), {
                format: i
            } = r(79720), {
                OPError: a
            } = r(67486), s = r(88026), c = e => {
                let t = s(e.headers["www-authenticate"]);
                if (t.error) throw new a(t, e)
            }, u = e => {
                let t = !1;
                try {
                    let r;
                    r = "object" != typeof e.body || n.isBuffer(e.body) ? JSON.parse(e.body) : e.body, (t = "string" == typeof r.error && r.error.length) && Object.defineProperty(e, "body", {
                        value: r,
                        configurable: !0
                    })
                } catch (e) {}
                return t
            };
            e.exports = function(e, {
                statusCode: t = 200,
                body: r = !0,
                bearer: n = !1
            } = {}) {
                if (e.statusCode !== t) {
                    if (n && c(e), u(e)) throw new a(e.body, e);
                    throw new a({
                        error: i("expected %i %s, got: %i %s", t, o[t], e.statusCode, o[e.statusCode])
                    }, e)
                }
                if (r && !e.body) throw new a({
                    error: i("expected %i %s with body but no body was returned", t, o[t])
                }, e);
                return e.body
            }
        },
        3862: function(e, t, r) {
            let n;
            var o = r(21876).Buffer;
            let i = r(27596),
                a = r(97334),
                s = r(22321),
                c = r(78428),
                {
                    once: u
                } = r(17187),
                {
                    URL: l
                } = r(11987),
                d = r(42097),
                f = r(82696),
                {
                    RPError: p
                } = r(67486),
                h = r(76038),
                {
                    deep: y
                } = r(51892),
                {
                    HTTP_OPTIONS: g
                } = r(78026),
                m = /^[\x21\x23-\x5B\x5D-\x7E]+$/,
                b = ["agent", "ca", "cert", "crl", "headers", "key", "lookup", "passphrase", "pfx", "timeout"],
                v = (e, t) => {
                    n = y({}, e.length ? h(t, ...e) : t, n)
                };

            function _(e, t, r) {
                r && (e.removeHeader("content-type"), e.setHeader("content-type", r)), t && (e.removeHeader("content-length"), e.setHeader("content-length", o.byteLength(t)), e.write(t)), e.end()
            }
            v([], {
                headers: {
                    "User-Agent": `${f.name}/${f.version} (${f.homepage})`,
                    "Accept-Encoding": "identity"
                },
                timeout: 3500
            });
            let w = new d({
                max: 100
            });
            e.exports = async function(e, {
                accessToken: t,
                mTLS: r = !1,
                DPoP: d
            } = {}) {
                let f, v, S, E, A, k, O;
                try {
                    f = new l(e.url), delete e.url, i(/^(https?:)$/.test(f.protocol))
                } catch (e) {
                    throw TypeError("only valid absolute URLs can be requested")
                }
                let P = this[g],
                    x = e,
                    T = `${f.origin}${f.pathname}`;
                if (d && "dpopProof" in this && (x.headers = x.headers || {}, x.headers.DPoP = await this.dpopProof({
                        htu: `${f.origin}${f.pathname}`,
                        htm: e.method || "GET",
                        nonce: w.get(T)
                    }, d, t)), P && (v = h(P.call(this, f, y({}, x, n)), ...b)), x = y({}, v, x, n), r && !x.pfx && !(x.key && x.cert)) throw TypeError("mutual-TLS certificate and key not set");
                if (x.searchParams)
                    for (let [e, t] of Object.entries(x.searchParams)) f.searchParams.delete(e), f.searchParams.set(e, t);
                for (let [e, t] of ({
                        form: E,
                        responseType: S,
                        json: A,
                        body: k,
                        ...x
                    } = x, Object.entries(x.headers || {}))) void 0 === t && delete x.headers[e];
                let j = ("https:" === f.protocol ? c.request : s.request)(f.href, x);
                return (async () => {
                    if (A ? _(j, JSON.stringify(A), "application/json") : E ? _(j, a.stringify(E), "application/x-www-form-urlencoded") : k ? _(j, k) : _(j), [O] = await Promise.race([u(j, "response"), u(j, "timeout")]), !O) throw j.destroy(), new p(`outgoing request timed out after ${x.timeout}ms`);
                    let e = [];
                    for await (let t of O) e.push(t);
                    if (e.length) switch (S) {
                        case "json":
                            Object.defineProperty(O, "body", {
                                get() {
                                    let t = o.concat(e);
                                    try {
                                        t = JSON.parse(t)
                                    } catch (e) {
                                        throw Object.defineProperty(e, "response", {
                                            value: O
                                        }), e
                                    } finally {
                                        Object.defineProperty(O, "body", {
                                            value: t,
                                            configurable: !0
                                        })
                                    }
                                    return t
                                },
                                configurable: !0
                            });
                            break;
                        case void 0:
                        case "buffer":
                            Object.defineProperty(O, "body", {
                                get() {
                                    let t = o.concat(e);
                                    return Object.defineProperty(O, "body", {
                                        value: t,
                                        configurable: !0
                                    }), t
                                },
                                configurable: !0
                            });
                            break;
                        default:
                            throw TypeError("unsupported responseType request option")
                    }
                    return O
                })().catch(e => {
                    throw O && Object.defineProperty(e, "response", {
                        value: O
                    }), e
                }).finally(() => {
                    let e = O && O.headers["dpop-nonce"];
                    e && m.test(e) && w.set(T, e)
                })
            }, e.exports.setDefaults = v.bind(void 0, b)
        },
        96891: function(e) {
            e.exports = () => Math.floor(Date.now() / 1e3)
        },
        64385: function(e) {
            e.exports.keystores = new WeakMap
        },
        44818: function(e) {
            let t = /^\d+$/;
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("input must be a string");
                return (! function(e) {
                    if (e.includes("://")) return !0;
                    let r = e.replace(/(\/|\?)/g, "#").split("#")[0];
                    if (r.includes(":")) {
                        let e = r.indexOf(":"),
                            n = r.slice(e + 1);
                        if (!t.test(n)) return !0
                    }
                    return !1
                }(e) ? ! function(e) {
                    if (!e.includes("@")) return !1;
                    let t = e.split("@"),
                        r = t[t.length - 1];
                    return !(r.includes(":") || r.includes("/") || r.includes("?"))
                }(e) ? `https://${e}` : `acct:${e}` : e).split("#")[0]
            }
        },
        88026: function(e) {
            let t = /(\w+)=("[^"]*")/g;
            e.exports = e => {
                let r = {};
                try {
                    for (; null !== t.exec(e);) RegExp.$1 && RegExp.$2 && (r[RegExp.$1] = RegExp.$2.slice(1, -1))
                } catch (e) {}
                return r
            }
        },
        1831: function(e, t, r) {
            let n = r(29704),
                {
                    OPError: o,
                    RPError: i
                } = r(67486),
                a = r(29330),
                s = r(81911),
                {
                    CLOCK_TOLERANCE: c,
                    HTTP_OPTIONS: u
                } = r(78026),
                l = r(68767),
                {
                    setDefaults: d
                } = r(3862);
            e.exports = {
                Issuer: n,
                Strategy: a,
                TokenSet: s,
                errors: {
                    OPError: o,
                    RPError: i
                },
                custom: {
                    setHttpOptionsDefaults: d,
                    http_options: u,
                    clock_tolerance: c
                },
                generators: l
            }
        },
        29704: function(e, t, r) {
            var n = r(83454);
            let {
                inspect: o
            } = r(79720), i = r(11987), {
                RPError: a
            } = r(67486), s = r(62251), c = r(30748), u = r(47787), l = r(44818), d = r(3862), f = r(71050), {
                keystore: p
            } = r(17042), h = ["https://login.microsoftonline.com/common/.well-known/openid-configuration", "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration"], y = Symbol(), g = {
                claim_types_supported: ["normal"],
                claims_parameter_supported: !1,
                grant_types_supported: ["authorization_code", "implicit"],
                request_parameter_supported: !1,
                request_uri_parameter_supported: !0,
                require_request_uri_registration: !1,
                response_modes_supported: ["query", "fragment"],
                token_endpoint_auth_methods_supported: ["client_secret_basic"]
            };
            class m {#
                e;
                constructor(e = {}) {
                    let t = e[y];
                    delete e[y], ["introspection", "revocation"].forEach(t => {
                        e[`${t}_endpoint`] && void 0 === e[`${t}_endpoint_auth_methods_supported`] && void 0 === e[`${t}_endpoint_auth_signing_alg_values_supported`] && (e.token_endpoint_auth_methods_supported && (e[`${t}_endpoint_auth_methods_supported`] = e.token_endpoint_auth_methods_supported), e.token_endpoint_auth_signing_alg_values_supported && (e[`${t}_endpoint_auth_signing_alg_values_supported`] = e.token_endpoint_auth_signing_alg_values_supported))
                    }), this.#e = new Map, Object.entries(e).forEach(([e, t]) => {
                        this.#e.set(e, t), this[e] || Object.defineProperty(this, e, {
                            get() {
                                return this.#e.get(e)
                            },
                            enumerable: !0
                        })
                    }), c.set(this.issuer, this);
                    let r = s(this, t);
                    Object.defineProperties(this, {
                        Client: {
                            value: r,
                            enumerable: !0
                        },
                        FAPI1Client: {
                            value: class extends r {},
                            enumerable: !0
                        },
                        FAPI2Client: {
                            value: class extends r {},
                            enumerable: !0
                        }
                    })
                }
                get metadata() {
                    return f(Object.fromEntries(this.#e.entries()))
                }
                static async webfinger(e) {
                    let t = l(e),
                        {
                            host: r
                        } = i.parse(t),
                        n = `https://${r}/.well-known/webfinger`,
                        o = u(await d.call(this, {
                            method: "GET",
                            url: n,
                            responseType: "json",
                            searchParams: {
                                resource: t,
                                rel: "http://openid.net/specs/connect/1.0/issuer"
                            },
                            headers: {
                                Accept: "application/json"
                            }
                        })),
                        s = Array.isArray(o.links) && o.links.find(e => "object" == typeof e && "http://openid.net/specs/connect/1.0/issuer" === e.rel && e.href);
                    if (!s) throw new a({
                        message: "no issuer found in webfinger response",
                        body: o
                    });
                    if ("string" != typeof s.href || !s.href.startsWith("https://")) throw new a({
                        printf: ["invalid issuer location %s", s.href],
                        body: o
                    });
                    let f = s.href;
                    if (c.has(f)) return c.get(f);
                    let p = await this.discover(f);
                    if (p.issuer !== f) throw c.del(p.issuer), new a("discovered issuer mismatch, expected %s, got: %s", f, p.issuer);
                    return p
                }
                static async discover(e) {
                    let t = function(e) {
                            let t = i.parse(e);
                            if (t.pathname.includes("/.well-known/")) return e; {
                                let e;
                                return e = t.pathname.endsWith("/") ? `${t.pathname}.well-known/openid-configuration` : `${t.pathname}/.well-known/openid-configuration`, i.format({ ...t,
                                    pathname: e
                                })
                            }
                        }(e),
                        r = u(await d.call(this, {
                            method: "GET",
                            responseType: "json",
                            url: t,
                            headers: {
                                Accept: "application/json"
                            }
                        }));
                    return new m({ ...g,
                        ...r,
                        [y]: !!h.find(e => t.startsWith(e))
                    })
                }
                async reloadJwksUri() {
                    await p.call(this, !0)
                }[o.custom]() {
                    return `${this.constructor.name} ${o(this.metadata,{depth:1/0,colors:n.stdout.isTTY,compact:!1,sorted:!0})}`
                }
            }
            e.exports = m
        },
        30748: function(e, t, r) {
            let n = r(42097);
            e.exports = new n({
                max: 100
            })
        },
        29330: function(e, t, r) {
            let n = r(11987),
                {
                    format: o
                } = r(79720),
                i = r(71050),
                {
                    RPError: a,
                    OPError: s
                } = r(67486),
                {
                    BaseClient: c
                } = r(62251),
                {
                    random: u,
                    codeChallenge: l
                } = r(68767),
                d = r(76038),
                {
                    resolveResponseType: f,
                    resolveRedirectUri: p
                } = r(4944);

            function h(e, t, r = {}) {
                e ? this.error(e) : t ? this.success(t, r) : this.fail(r)
            }

            function y({
                client: e,
                params: t = {},
                passReqToCallback: r = !1,
                sessionKey: o,
                usePKCE: a = !0,
                extras: s = {}
            } = {}, u) {
                if (!(e instanceof c)) throw TypeError("client must be an instance of openid-client Client");
                if ("function" != typeof u) throw TypeError("verify callback must be a function");
                if (!e.issuer || !e.issuer.issuer) throw TypeError("client must have an issuer with an identifier");
                if (this._client = e, this._issuer = e.issuer, this._verify = u, this._passReqToCallback = r, this._usePKCE = a, this._key = o || `oidc:${n.parse(this._issuer.issuer).hostname}`, this._params = i(t), delete this._params.state, delete this._params.nonce, this._extras = i(s), this._params.response_type || (this._params.response_type = f.call(e)), this._params.redirect_uri || (this._params.redirect_uri = p.call(e)), this._params.scope || (this._params.scope = "openid"), !0 === this._usePKCE) {
                    let e = !!Array.isArray(this._issuer.code_challenge_methods_supported) && this._issuer.code_challenge_methods_supported;
                    if (e && e.includes("S256")) this._usePKCE = "S256";
                    else if (e && e.includes("plain")) this._usePKCE = "plain";
                    else if (e) throw TypeError("neither code_challenge_method supported by the client is supported by the issuer");
                    else this._usePKCE = "S256"
                } else if ("string" == typeof this._usePKCE && !["plain", "S256"].includes(this._usePKCE)) throw TypeError(`${this._usePKCE} is not valid/implemented PKCE code_challenge_method`);
                this.name = n.parse(e.issuer.issuer).hostname
            }
            y.prototype.authenticate = function(e, t) {
                (async () => {
                    let r = this._client;
                    if (!e.session) throw TypeError("authentication requires session support");
                    let n = r.callbackParams(e),
                        i = this._key,
                        {
                            0: s,
                            length: c
                        } = Object.keys(n);
                    if (0 === c || 1 === c && "iss" === s) {
                        let n = {
                            state: u(),
                            ...this._params,
                            ...t
                        };
                        if (!n.nonce && n.response_type.includes("id_token") && (n.nonce = u()), e.session[i] = d(n, "nonce", "state", "max_age", "response_type"), this._usePKCE && n.response_type.includes("code")) {
                            let t = u();
                            switch (e.session[i].code_verifier = t, this._usePKCE) {
                                case "S256":
                                    n.code_challenge = l(t), n.code_challenge_method = "S256";
                                    break;
                                case "plain":
                                    n.code_challenge = t
                            }
                        }
                        this.redirect(r.authorizationUrl(n));
                        return
                    }
                    let f = e.session[i];
                    if (0 === Object.keys(f || {}).length) throw Error(o('did not find expected authorization request details in session, req.session["%s"] is %j', i, f));
                    let {
                        state: p,
                        nonce: y,
                        max_age: g,
                        code_verifier: m,
                        response_type: b
                    } = f;
                    try {
                        delete e.session[i]
                    } catch (e) {}
                    let v = {
                            redirect_uri: this._params.redirect_uri,
                            ...t
                        },
                        _ = await r.callback(v.redirect_uri, n, {
                            state: p,
                            nonce: y,
                            max_age: g,
                            code_verifier: m,
                            response_type: b
                        }, this._extras),
                        w = this._passReqToCallback,
                        S = this._verify.length > (w ? 3 : 2) && r.issuer.userinfo_endpoint,
                        E = [_, h.bind(this)];
                    if (S) {
                        if (!_.access_token) throw new a({
                            message: "expected access_token to be returned when asking for userinfo in verify callback",
                            tokenset: _
                        });
                        let e = await r.userinfo(_);
                        E.splice(1, 0, e)
                    }
                    w && E.unshift(e), this._verify(...E)
                })().catch(e => {
                    e instanceof s && "server_error" !== e.error && !e.error.startsWith("invalid") || e instanceof a ? this.fail(e) : this.error(e)
                })
            }, e.exports = y
        },
        81911: function(e, t, r) {
            let n = r(42806),
                o = r(96891);
            class i {
                constructor(e) {
                    Object.assign(this, e);
                    let {
                        constructor: t,
                        ...r
                    } = Object.getOwnPropertyDescriptors(this.constructor.prototype);
                    Object.defineProperties(this, r)
                }
                set expires_in(e) {
                    this.expires_at = o() + Number(e)
                }
                get expires_in() {
                    return Math.max.apply(null, [this.expires_at - o(), 0])
                }
                expired() {
                    return 0 === this.expires_in
                }
                claims() {
                    if (!this.id_token) throw TypeError("id_token not present in TokenSet");
                    return JSON.parse(n.decode(this.id_token.split(".")[1]))
                }
            }
            e.exports = i
        },
        42097: function(e, t, r) {
            "use strict";
            let n = r(35746),
                o = Symbol("max"),
                i = Symbol("length"),
                a = Symbol("lengthCalculator"),
                s = Symbol("allowStale"),
                c = Symbol("maxAge"),
                u = Symbol("dispose"),
                l = Symbol("noDisposeOnSet"),
                d = Symbol("lruList"),
                f = Symbol("cache"),
                p = Symbol("updateAgeOnGet"),
                h = () => 1;
            class y {
                constructor(e) {
                    if ("number" == typeof e && (e = {
                            max: e
                        }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw TypeError("max must be a non-negative number");
                    this[o] = e.max || 1 / 0;
                    let t = e.length || h;
                    if (this[a] = "function" != typeof t ? h : t, this[s] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw TypeError("maxAge must be a number");
                    this[c] = e.maxAge || 0, this[u] = e.dispose, this[l] = e.noDisposeOnSet || !1, this[p] = e.updateAgeOnGet || !1, this.reset()
                }
                set max(e) {
                    if ("number" != typeof e || e < 0) throw TypeError("max must be a non-negative number");
                    this[o] = e || 1 / 0, b(this)
                }
                get max() {
                    return this[o]
                }
                set allowStale(e) {
                    this[s] = !!e
                }
                get allowStale() {
                    return this[s]
                }
                set maxAge(e) {
                    if ("number" != typeof e) throw TypeError("maxAge must be a non-negative number");
                    this[c] = e, b(this)
                }
                get maxAge() {
                    return this[c]
                }
                set lengthCalculator(e) {
                    "function" != typeof e && (e = h), e !== this[a] && (this[a] = e, this[i] = 0, this[d].forEach(e => {
                        e.length = this[a](e.value, e.key), this[i] += e.length
                    })), b(this)
                }
                get lengthCalculator() {
                    return this[a]
                }
                get length() {
                    return this[i]
                }
                get itemCount() {
                    return this[d].length
                }
                rforEach(e, t) {
                    t = t || this;
                    for (let r = this[d].tail; null !== r;) {
                        let n = r.prev;
                        w(this, e, r, t), r = n
                    }
                }
                forEach(e, t) {
                    t = t || this;
                    for (let r = this[d].head; null !== r;) {
                        let n = r.next;
                        w(this, e, r, t), r = n
                    }
                }
                keys() {
                    return this[d].toArray().map(e => e.key)
                }
                values() {
                    return this[d].toArray().map(e => e.value)
                }
                reset() {
                    this[u] && this[d] && this[d].length && this[d].forEach(e => this[u](e.key, e.value)), this[f] = new Map, this[d] = new n, this[i] = 0
                }
                dump() {
                    return this[d].map(e => !m(this, e) && {
                        k: e.key,
                        v: e.value,
                        e: e.now + (e.maxAge || 0)
                    }).toArray().filter(e => e)
                }
                dumpLru() {
                    return this[d]
                }
                set(e, t, r) {
                    if ((r = r || this[c]) && "number" != typeof r) throw TypeError("maxAge must be a number");
                    let n = r ? Date.now() : 0,
                        s = this[a](t, e);
                    if (this[f].has(e)) {
                        if (s > this[o]) return v(this, this[f].get(e)), !1;
                        let a = this[f].get(e).value;
                        return this[u] && !this[l] && this[u](e, a.value), a.now = n, a.maxAge = r, a.value = t, this[i] += s - a.length, a.length = s, this.get(e), b(this), !0
                    }
                    let p = new _(e, t, s, n, r);
                    return p.length > this[o] ? (this[u] && this[u](e, t), !1) : (this[i] += p.length, this[d].unshift(p), this[f].set(e, this[d].head), b(this), !0)
                }
                has(e) {
                    return !!this[f].has(e) && !m(this, this[f].get(e).value)
                }
                get(e) {
                    return g(this, e, !0)
                }
                peek(e) {
                    return g(this, e, !1)
                }
                pop() {
                    let e = this[d].tail;
                    return e ? (v(this, e), e.value) : null
                }
                del(e) {
                    v(this, this[f].get(e))
                }
                load(e) {
                    this.reset();
                    let t = Date.now();
                    for (let r = e.length - 1; r >= 0; r--) {
                        let n = e[r],
                            o = n.e || 0;
                        if (0 === o) this.set(n.k, n.v);
                        else {
                            let e = o - t;
                            e > 0 && this.set(n.k, n.v, e)
                        }
                    }
                }
                prune() {
                    this[f].forEach((e, t) => g(this, t, !1))
                }
            }
            let g = (e, t, r) => {
                    let n = e[f].get(t);
                    if (n) {
                        let t = n.value;
                        if (m(e, t)) {
                            if (v(e, n), !e[s]) return
                        } else r && (e[p] && (n.value.now = Date.now()), e[d].unshiftNode(n));
                        return t.value
                    }
                },
                m = (e, t) => {
                    if (!t || !t.maxAge && !e[c]) return !1;
                    let r = Date.now() - t.now;
                    return t.maxAge ? r > t.maxAge : e[c] && r > e[c]
                },
                b = e => {
                    if (e[i] > e[o])
                        for (let t = e[d].tail; e[i] > e[o] && null !== t;) {
                            let r = t.prev;
                            v(e, t), t = r
                        }
                },
                v = (e, t) => {
                    if (t) {
                        let r = t.value;
                        e[u] && e[u](r.key, r.value), e[i] -= r.length, e[f].delete(r.key), e[d].removeNode(t)
                    }
                };
            class _ {
                constructor(e, t, r, n, o) {
                    this.key = e, this.value = t, this.length = r, this.now = n, this.maxAge = o || 0
                }
            }
            let w = (e, t, r, n) => {
                let o = r.value;
                m(e, o) && (v(e, r), e[s] || (o = void 0)), o && t.call(n, o.value, o.key, e)
            };
            e.exports = y
        },
        20542: function(e) {
            "use strict";
            e.exports = function(e) {
                e.prototype[Symbol.iterator] = function*() {
                    for (let e = this.head; e; e = e.next) yield e.value
                }
            }
        },
        35746: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = this;
                if (t instanceof n || (t = new n), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach(function(e) {
                    t.push(e)
                });
                else if (arguments.length > 0)
                    for (var r = 0, o = arguments.length; r < o; r++) t.push(arguments[r]);
                return t
            }

            function o(e, t, r, n) {
                if (!(this instanceof o)) return new o(e, t, r, n);
                this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
            }
            e.exports = n, n.Node = o, n.create = n, n.prototype.removeNode = function(e) {
                if (e.list !== this) throw Error("removing node which does not belong to this list");
                var t = e.next,
                    r = e.prev;
                return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
            }, n.prototype.unshiftNode = function(e) {
                if (e !== this.head) {
                    e.list && e.list.removeNode(e);
                    var t = this.head;
                    e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
                }
            }, n.prototype.pushNode = function(e) {
                if (e !== this.tail) {
                    e.list && e.list.removeNode(e);
                    var t = this.tail;
                    e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
                }
            }, n.prototype.push = function() {
                for (var e, t = 0, r = arguments.length; t < r; t++) e = arguments[t], this.tail = new o(e, this.tail, null, this), this.head || (this.head = this.tail), this.length++;
                return this.length
            }, n.prototype.unshift = function() {
                for (var e, t = 0, r = arguments.length; t < r; t++) e = arguments[t], this.head = new o(e, null, this.head, this), this.tail || (this.tail = this.head), this.length++;
                return this.length
            }, n.prototype.pop = function() {
                if (this.tail) {
                    var e = this.tail.value;
                    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
                }
            }, n.prototype.shift = function() {
                if (this.head) {
                    var e = this.head.value;
                    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
                }
            }, n.prototype.forEach = function(e, t) {
                t = t || this;
                for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), r = r.next
            }, n.prototype.forEachReverse = function(e, t) {
                t = t || this;
                for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), r = r.prev
            }, n.prototype.get = function(e) {
                for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
                if (t === e && null !== r) return r.value
            }, n.prototype.getReverse = function(e) {
                for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
                if (t === e && null !== r) return r.value
            }, n.prototype.map = function(e, t) {
                t = t || this;
                for (var r = new n, o = this.head; null !== o;) r.push(e.call(t, o.value, this)), o = o.next;
                return r
            }, n.prototype.mapReverse = function(e, t) {
                t = t || this;
                for (var r = new n, o = this.tail; null !== o;) r.push(e.call(t, o.value, this)), o = o.prev;
                return r
            }, n.prototype.reduce = function(e, t) {
                var r, n = this.head;
                if (arguments.length > 1) r = t;
                else if (this.head) n = this.head.next, r = this.head.value;
                else throw TypeError("Reduce of empty list with no initial value");
                for (var o = 0; null !== n; o++) r = e(r, n.value, o), n = n.next;
                return r
            }, n.prototype.reduceReverse = function(e, t) {
                var r, n = this.tail;
                if (arguments.length > 1) r = t;
                else if (this.tail) n = this.tail.prev, r = this.tail.value;
                else throw TypeError("Reduce of empty list with no initial value");
                for (var o = this.length - 1; null !== n; o--) r = e(r, n.value, o), n = n.prev;
                return r
            }, n.prototype.toArray = function() {
                for (var e = Array(this.length), t = 0, r = this.head; null !== r; t++) e[t] = r.value, r = r.next;
                return e
            }, n.prototype.toArrayReverse = function() {
                for (var e = Array(this.length), t = 0, r = this.tail; null !== r; t++) e[t] = r.value, r = r.prev;
                return e
            }, n.prototype.slice = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0) return r;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var o = 0, i = this.head; null !== i && o < e; o++) i = i.next;
                for (; null !== i && o < t; o++, i = i.next) r.push(i.value);
                return r
            }, n.prototype.sliceReverse = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0) return r;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var o = this.length, i = this.tail; null !== i && o > t; o--) i = i.prev;
                for (; null !== i && o > e; o--, i = i.prev) r.push(i.value);
                return r
            }, n.prototype.splice = function(e, t, ...r) {
                e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
                for (var n = 0, i = this.head; null !== i && n < e; n++) i = i.next;
                for (var a = [], n = 0; i && n < t; n++) a.push(i.value), i = this.removeNode(i);
                null === i && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
                for (var n = 0; n < r.length; n++) i = function(e, t, r) {
                    var n = t === e.head ? new o(r, null, t, e) : new o(r, t, t.next, e);
                    return null === n.next && (e.tail = n), null === n.prev && (e.head = n), e.length++, n
                }(this, i, r[n]);
                return a
            }, n.prototype.reverse = function() {
                for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                    var n = r.prev;
                    r.prev = r.next, r.next = n
                }
                return this.head = t, this.tail = e, this
            };
            try {
                r(20542)(n)
            } catch (e) {}
        },
        57649: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                render: function() {
                    return E
                },
                renderToStaticMarkup: function() {
                    return E
                },
                renderToString: function() {
                    return E
                },
                shallowRender: function() {
                    return w
                }
            });
            var n = r(6400),
                o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
                i = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
                a = /[\s\n\\/='"\0<>]/,
                s = /^xlink:?./,
                c = /["&<]/;

            function u(e) {
                if (!1 === c.test(e += "")) return e;
                for (var t = 0, r = 0, n = "", o = ""; r < e.length; r++) {
                    switch (e.charCodeAt(r)) {
                        case 34:
                            o = "&quot;";
                            break;
                        case 38:
                            o = "&amp;";
                            break;
                        case 60:
                            o = "&lt;";
                            break;
                        default:
                            continue
                    }
                    r !== t && (n += e.slice(t, r)), n += o, t = r + 1
                }
                return r !== t && (n += e.slice(t, r)), n
            }
            var l = function(e, t) {
                    return String(e).replace(/(\n+)/g, "$1" + (t || "	"))
                },
                d = function(e, t, r) {
                    return String(e).length > (t || 40) || !r && -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<")
                },
                f = {},
                p = /([A-Z])/g;

            function h(e) {
                var t = "";
                for (var r in e) {
                    var n = e[r];
                    null != n && "" !== n && (t && (t += " "), t += "-" == r[0] ? r : f[r] || (f[r] = r.replace(p, "-$1").toLowerCase()), t = "number" == typeof n && !1 === o.test(r) ? t + ": " + n + "px;" : t + ": " + n + ";")
                }
                return t || void 0
            }

            function y(e, t) {
                return Array.isArray(t) ? t.reduce(y, e) : null != t && !1 !== t && e.push(t), e
            }

            function g() {
                this.__d = !0
            }

            function m(e, t) {
                return {
                    __v: e,
                    context: t,
                    props: e.props,
                    setState: g,
                    forceUpdate: g,
                    __d: !0,
                    __h: []
                }
            }

            function b(e, t) {
                var r = e.contextType,
                    n = r && t[r.__c];
                return null != r ? n ? n.props.value : r.__ : t
            }
            var v = [],
                _ = {
                    shallow: !0
                };
            E.render = E;
            var w = function(e, t) {
                    return E(e, t, _)
                },
                S = [];

            function E(e, t, r) {
                t = t || {};
                var o = n.options.__s;
                n.options.__s = !0;
                var c, f = (0, n.h)(n.Fragment, null);
                return f.__k = [e], c = r && (r.pretty || r.voidElements || r.sortAttributes || r.shallow || r.allAttributes || r.xml || r.attributeHook) ? function e(t, r, o, c, f, p) {
                    if (null == t || "boolean" == typeof t) return "";
                    if ("object" != typeof t) return "function" == typeof t ? "" : u(t);
                    var g = o.pretty,
                        _ = g && "string" == typeof g ? g : "	";
                    if (Array.isArray(t)) {
                        for (var w = "", S = 0; S < t.length; S++) g && S > 0 && (w += "\n"), w += e(t[S], r, o, c, f, p);
                        return w
                    }
                    if (void 0 !== t.constructor) return "";
                    var E, A = t.type,
                        k = t.props,
                        O = !1;
                    if ("function" == typeof A) {
                        if (O = !0, !o.shallow || !c && !1 !== o.renderRootComponent) {
                            if (A === n.Fragment) {
                                var P = [];
                                return y(P, t.props.children), e(P, r, o, !1 !== o.shallowHighOrder, f, p)
                            }
                            var x, T = t.__c = m(t, r);
                            n.options.__b && n.options.__b(t);
                            var j = n.options.__r;
                            if (A.prototype && "function" == typeof A.prototype.render) {
                                var R = b(A, r);
                                (T = t.__c = new A(k, R)).__v = t, T._dirty = T.__d = !0, T.props = k, null == T.state && (T.state = {}), null == T._nextState && null == T.__s && (T._nextState = T.__s = T.state), T.context = R, A.getDerivedStateFromProps ? T.state = Object.assign({}, T.state, A.getDerivedStateFromProps(T.props, T.state)) : T.componentWillMount && (T.componentWillMount(), T.state = T._nextState !== T.state ? T._nextState : T.__s !== T.state ? T.__s : T.state), j && j(t), x = T.render(T.props, T.state, T.context)
                            } else
                                for (var C = b(A, r), I = 0; T.__d && I++ < 25;) T.__d = !1, j && j(t), x = A.call(t.__c, k, C);
                            return T.getChildContext && (r = Object.assign({}, r, T.getChildContext())), n.options.diffed && n.options.diffed(t), e(x, r, o, !1 !== o.shallowHighOrder, f, p)
                        }
                        A = (E = A).displayName || E !== Function && E.name || function(e) {
                            var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];
                            if (!t) {
                                for (var r = -1, n = v.length; n--;)
                                    if (v[n] === e) {
                                        r = n;
                                        break
                                    }
                                r < 0 && (r = v.push(e) - 1), t = "UnnamedComponent" + r
                            }
                            return t
                        }(E)
                    }
                    var U, H, M = "<" + A;
                    if (k) {
                        var D = Object.keys(k);
                        o && !0 === o.sortAttributes && D.sort();
                        for (var N = 0; N < D.length; N++) {
                            var W = D[N],
                                $ = k[W];
                            if ("children" !== W) {
                                if (!a.test(W) && (o && o.allAttributes || "key" !== W && "ref" !== W && "__self" !== W && "__source" !== W)) {
                                    if ("defaultValue" === W) W = "value";
                                    else if ("defaultChecked" === W) W = "checked";
                                    else if ("defaultSelected" === W) W = "selected";
                                    else if ("className" === W) {
                                        if (void 0 !== k.class) continue;
                                        W = "class"
                                    } else f && s.test(W) && (W = W.toLowerCase().replace(/^xlink:?/, "xlink:"));
                                    if ("htmlFor" === W) {
                                        if (k.for) continue;
                                        W = "for"
                                    }
                                    "style" === W && $ && "object" == typeof $ && ($ = h($)), "a" === W[0] && "r" === W[1] && "boolean" == typeof $ && ($ = String($));
                                    var L = o.attributeHook && o.attributeHook(W, $, r, o, O);
                                    if (L || "" === L) M += L;
                                    else if ("dangerouslySetInnerHTML" === W) H = $ && $.__html;
                                    else if ("textarea" === A && "value" === W) U = $;
                                    else if (($ || 0 === $ || "" === $) && "function" != typeof $) {
                                        if (!(!0 !== $ && "" !== $ || ($ = W, o && o.xml))) {
                                            M = M + " " + W;
                                            continue
                                        }
                                        if ("value" === W) {
                                            if ("select" === A) {
                                                p = $;
                                                continue
                                            }
                                            "option" === A && p == $ && void 0 === k.selected && (M += " selected")
                                        }
                                        M = M + " " + W + '="' + u($) + '"'
                                    }
                                }
                            } else U = $
                        }
                    }
                    if (g) {
                        var B = M.replace(/\n\s*/, " ");
                        B === M || ~B.indexOf("\n") ? g && ~M.indexOf("\n") && (M += "\n") : M = B
                    }
                    if (M += ">", a.test(A)) throw Error(A + " is not a valid HTML tag name in " + M);
                    var K, J = i.test(A) || o.voidElements && o.voidElements.test(A),
                        F = [];
                    if (H) g && d(H) && (H = "\n" + _ + l(H, _)), M += H;
                    else if (null != U && y(K = [], U).length) {
                        for (var q = g && ~M.indexOf("\n"), z = !1, G = 0; G < K.length; G++) {
                            var V = K[G];
                            if (null != V && !1 !== V) {
                                var Y = e(V, r, o, !0, "svg" === A || "foreignObject" !== A && f, p);
                                if (g && !q && d(Y) && (q = !0), Y) {
                                    if (g) {
                                        var X = Y.length > 0 && "<" != Y[0];
                                        z && X ? F[F.length - 1] += Y : F.push(Y), z = X
                                    } else F.push(Y)
                                }
                            }
                        }
                        if (g && q)
                            for (var Z = F.length; Z--;) F[Z] = "\n" + _ + l(F[Z], _)
                    }
                    if (F.length || H) M += F.join("");
                    else if (o && o.xml) return M.substring(0, M.length - 1) + " />";
                    return !J || K || H ? (g && ~M.indexOf("\n") && (M += "\n"), M = M + "</" + A + ">") : M = M.replace(/>$/, " />"), M
                }(e, t, r) : function e(t, r, o, c, l) {
                    if (null == t || !0 === t || !1 === t || "" === t) return "";
                    if ("object" != typeof t) return "function" == typeof t ? "" : u(t);
                    if (k(t)) {
                        var d = "";
                        l.__k = t;
                        for (var f = 0; f < t.length; f++) d += e(t[f], r, o, c, l), t[f] = A(t[f]);
                        return d
                    }
                    if (void 0 !== t.constructor) return "";
                    t.__ = l, n.options.__b && n.options.__b(t);
                    var p = t.type,
                        y = t.props;
                    if ("function" == typeof p) {
                        if (p === n.Fragment) E = y.children;
                        else {
                            E = p.prototype && "function" == typeof p.prototype.render ? (g = r, _ = b(v = t.type, g), w = new v(t.props, _), t.__c = w, w.__v = t, w.__d = !0, w.props = t.props, null == w.state && (w.state = {}), null == w.__s && (w.__s = w.state), w.context = _, v.getDerivedStateFromProps ? w.state = O({}, w.state, v.getDerivedStateFromProps(w.props, w.state)) : w.componentWillMount && (w.componentWillMount(), w.state = w.__s !== w.state ? w.__s : w.state), (S = n.options.__r) && S(t), w.render(w.props, w.state, w.context)) : function(e, t) {
                                var r, o = m(e, t),
                                    i = b(e.type, t);
                                e.__c = o;
                                for (var a = n.options.__r, s = 0; o.__d && s++ < 25;) o.__d = !1, a && a(e), r = e.type.call(o, e.props, i);
                                return r
                            }(t, r);
                            var g, v, _, w, S, E, P = t.__c;
                            P.getChildContext && (r = O({}, r, P.getChildContext()))
                        }
                        var x = e(E = null != E && E.type === n.Fragment && null == E.key ? E.props.children : E, r, o, c, t);
                        return n.options.diffed && n.options.diffed(t), t.__ = void 0, n.options.unmount && n.options.unmount(t), x
                    }
                    var T, j, R = "<";
                    if (R += p, y)
                        for (var C in T = y.children, y) {
                            var I, U, H, M = y[C];
                            if (!("key" === C || "ref" === C || "__self" === C || "__source" === C || "children" === C || "className" === C && "class" in y || "htmlFor" === C && "for" in y || a.test(C))) {
                                if (U = C = "className" === (I = C) ? "class" : "htmlFor" === I ? "for" : "defaultValue" === I ? "value" : "defaultChecked" === I ? "checked" : "defaultSelected" === I ? "selected" : o && s.test(I) ? I.toLowerCase().replace(/^xlink:?/, "xlink:") : I, H = M, M = "style" === U && null != H && "object" == typeof H ? h(H) : "a" === U[0] && "r" === U[1] && "boolean" == typeof H ? String(H) : H, "dangerouslySetInnerHTML" === C) j = M && M.__html;
                                else if ("textarea" === p && "value" === C) T = M;
                                else if ((M || 0 === M || "" === M) && "function" != typeof M) {
                                    if (!0 === M || "" === M) {
                                        M = C, R = R + " " + C;
                                        continue
                                    }
                                    if ("value" === C) {
                                        if ("select" === p) {
                                            c = M;
                                            continue
                                        }
                                        "option" !== p || c != M || "selected" in y || (R += " selected")
                                    }
                                    R = R + " " + C + '="' + u(M) + '"'
                                }
                            }
                        }
                    var D = R;
                    if (R += ">", a.test(p)) throw Error(p + " is not a valid HTML tag name in " + R);
                    var N = "",
                        W = !1;
                    if (j) N += j, W = !0;
                    else if ("string" == typeof T) N += u(T), W = !0;
                    else if (k(T)) {
                        t.__k = T;
                        for (var $ = 0; $ < T.length; $++) {
                            var L = T[$];
                            if (T[$] = A(L), null != L && !1 !== L) {
                                var B = e(L, r, "svg" === p || "foreignObject" !== p && o, c, t);
                                B && (N += B, W = !0)
                            }
                        }
                    } else if (null != T && !1 !== T && !0 !== T) {
                        t.__k = [A(T)];
                        var K = e(T, r, "svg" === p || "foreignObject" !== p && o, c, t);
                        K && (N += K, W = !0)
                    }
                    if (n.options.diffed && n.options.diffed(t), t.__ = void 0, n.options.unmount && n.options.unmount(t), W) R += N;
                    else if (i.test(p)) return D + " />";
                    return R + "</" + p + ">"
                }(e, t, !1, void 0, f), n.options.__c && n.options.__c(e, S), n.options.__s = o, S.length = 0, c
            }

            function A(e) {
                return null == e || "boolean" == typeof e ? null : "string" == typeof e || "number" == typeof e || "bigint" == typeof e ? (0, n.h)(null, null, e) : e
            }
            var k = Array.isArray,
                O = Object.assign;
            E.shallowRender = w, t.default = E
        },
        6400: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Component: function() {
                    return O
                },
                Fragment: function() {
                    return k
                },
                cloneElement: function() {
                    return L
                },
                createContext: function() {
                    return B
                },
                createElement: function() {
                    return S
                },
                createRef: function() {
                    return A
                },
                h: function() {
                    return S
                },
                hydrate: function() {
                    return $
                },
                isValidElement: function() {
                    return a
                },
                options: function() {
                    return o
                },
                render: function() {
                    return W
                },
                toChildArray: function() {
                    return function e(t, r) {
                        return r = r || [], null == t || "boolean" == typeof t || (v(t) ? t.some(function(t) {
                            e(t, r)
                        }) : r.push(t)), r
                    }
                }
            });
            var n, o, i, a, s, c, u, l, d, f, p, h, y, g = {},
                m = [],
                b = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                v = Array.isArray;

            function _(e, t) {
                for (var r in t) e[r] = t[r];
                return e
            }

            function w(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }

            function S(e, t, r) {
                var o, i, a, s = {};
                for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : s[a] = t[a];
                if (arguments.length > 2 && (s.children = arguments.length > 3 ? n.call(arguments, 2) : r), "function" == typeof e && null != e.defaultProps)
                    for (a in e.defaultProps) void 0 === s[a] && (s[a] = e.defaultProps[a]);
                return E(e, s, o, i, null)
            }

            function E(e, t, r, n, a) {
                var s = {
                    type: e,
                    props: t,
                    key: r,
                    ref: n,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __c: null,
                    constructor: void 0,
                    __v: null == a ? ++i : a,
                    __i: -1,
                    __u: 0
                };
                return null == a && null != o.vnode && o.vnode(s), s
            }

            function A() {
                return {
                    current: null
                }
            }

            function k(e) {
                return e.children
            }

            function O(e, t) {
                this.props = e, this.context = t
            }

            function P(e, t) {
                if (null == t) return e.__ ? P(e.__, e.__i + 1) : null;
                for (var r; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
                return "function" == typeof e.type ? P(e) : null
            }

            function x(e) {
                (!e.__d && (e.__d = !0) && s.push(e) && !T.__r++ || c != o.debounceRendering) && ((c = o.debounceRendering) || u)(T)
            }

            function T() {
                for (var e, t, r, n, i, a, c = 1; s.length;) s.length > c && s.sort(l), e = s.shift(), c = s.length, e.__d && (t = void 0, n = (r = e.__v).__e, i = [], a = [], e.__P && ((t = _({}, r)).__v = r.__v + 1, o.vnode && o.vnode(t), U(e.__P, t, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [n] : null, i, null == n ? P(r) : n, !!(32 & r.__u), a), t.__v = r.__v, t.__.__k[t.__i] = t, M(i, t, a), t.__e != n && function e(t) {
                    var r, n;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
                            if (null != (n = t.__k[r]) && null != n.__e) {
                                t.__e = t.__c.base = n.__e;
                                break
                            }
                        return e(t)
                    }
                }(t)));
                T.__r = 0
            }

            function j(e, t, r, n, i, a, s, c, u, l, d) {
                var f, p, h, y, b, _, S = n && n.__k || m,
                    A = t.length;
                for (u = function(e, t, r, n, i) {
                        var a, s, c, u, l, d = r.length,
                            f = d,
                            p = 0;
                        for (e.__k = Array(i), a = 0; a < i; a++) null != (s = t[a]) && "boolean" != typeof s && "function" != typeof s ? (u = a + p, (s = e.__k[a] = "string" == typeof s || "number" == typeof s || "bigint" == typeof s || s.constructor == String ? E(null, s, null, null, null) : v(s) ? E(k, {
                            children: s
                        }, null, null, null) : null == s.constructor && s.__b > 0 ? E(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, c = null, -1 != (l = s.__i = function(e, t, r, n) {
                            var o, i, a, s = e.key,
                                c = e.type,
                                u = t[r],
                                l = null != u && 0 == (2 & u.__u);
                            if (null === u && null == e.key || l && s == u.key && c == u.type) return r;
                            if (n > (l ? 1 : 0)) {
                                for (o = r - 1, i = r + 1; o >= 0 || i < t.length;)
                                    if (null != (u = t[a = o >= 0 ? o-- : i++]) && 0 == (2 & u.__u) && s == u.key && c == u.type) return a
                            }
                            return -1
                        }(s, r, u, f)) && (f--, (c = r[l]) && (c.__u |= 2)), null == c || null == c.__v ? (-1 == l && (i > d ? p-- : i < d && p++), "function" != typeof s.type && (s.__u |= 4)) : l != u && (l == u - 1 ? p-- : l == u + 1 ? p++ : (l > u ? p-- : p++, s.__u |= 4))) : e.__k[a] = null;
                        if (f)
                            for (a = 0; a < d; a++) null != (c = r[a]) && 0 == (2 & c.__u) && (c.__e == n && (n = P(c)), function e(t, r, n) {
                                var i, a;
                                if (o.unmount && o.unmount(t), (i = t.ref) && (i.current && i.current != t.__e || D(i, null, r)), null != (i = t.__c)) {
                                    if (i.componentWillUnmount) try {
                                        i.componentWillUnmount()
                                    } catch (e) {
                                        o.__e(e, r)
                                    }
                                    i.base = i.__P = null
                                }
                                if (i = t.__k)
                                    for (a = 0; a < i.length; a++) i[a] && e(i[a], r, n || "function" != typeof t.type);
                                n || w(t.__e), t.__c = t.__ = t.__e = void 0
                            }(c, c));
                        return n
                    }(r, t, S, u, A), f = 0; f < A; f++) null != (h = r.__k[f]) && (p = -1 == h.__i ? g : S[h.__i] || g, h.__i = f, _ = U(e, h, p, i, a, s, c, u, l, d), y = h.__e, h.ref && p.ref != h.ref && (p.ref && D(p.ref, null, h), d.push(h.ref, h.__c || y, h)), null == b && null != y && (b = y), 4 & h.__u || p.__k === h.__k ? u = function e(t, r, n) {
                    var o, i;
                    if ("function" == typeof t.type) {
                        for (o = t.__k, i = 0; o && i < o.length; i++) o[i] && (o[i].__ = t, r = e(o[i], r, n));
                        return r
                    }
                    t.__e != r && (r && t.type && !n.contains(r) && (r = P(t)), n.insertBefore(t.__e, r || null), r = t.__e);
                    do r = r && r.nextSibling; while (null != r && 8 == r.nodeType);
                    return r
                }(h, u, e) : "function" == typeof h.type && void 0 !== _ ? u = _ : y && (u = y.nextSibling), h.__u &= -7);
                return r.__e = b, u
            }

            function R(e, t, r) {
                "-" == t[0] ? e.setProperty(t, null == r ? "" : r) : e[t] = null == r ? "" : "number" != typeof r || b.test(t) ? r : r + "px"
            }

            function C(e, t, r, n, o) {
                var i, a;
                e: if ("style" == t) {
                    if ("string" == typeof r) e.style.cssText = r;
                    else {
                        if ("string" == typeof n && (e.style.cssText = n = ""), n)
                            for (t in n) r && t in r || R(e.style, t, "");
                        if (r)
                            for (t in r) n && r[t] == n[t] || R(e.style, t, r[t])
                    }
                } else
                if ("o" == t[0] && "n" == t[1]) i = t != (t = t.replace(d, "$1")), t = (a = t.toLowerCase()) in e || "onFocusOut" == t || "onFocusIn" == t ? a.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = r, r ? n ? r.u = n.u : (r.u = f, e.addEventListener(t, i ? h : p, i)) : e.removeEventListener(t, i ? h : p, i);
                else {
                    if ("http://www.w3.org/2000/svg" == o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
                        e[t] = null == r ? "" : r;
                        break e
                    } catch (e) {}
                    "function" == typeof r || (null == r || !1 === r && "-" != t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == r ? "" : r))
                }
            }

            function I(e) {
                return function(t) {
                    if (this.l) {
                        var r = this.l[t.type + e];
                        if (null == t.t) t.t = f++;
                        else if (t.t < r.u) return;
                        return r(o.event ? o.event(t) : t)
                    }
                }
            }

            function U(e, t, r, i, a, s, c, u, l, d) {
                var f, p, h, y, m, b, S, E, A, x, T, R, I, U, M, D, W, $ = t.type;
                if (null != t.constructor) return null;
                128 & r.__u && (l = !!(32 & r.__u), s = [u = t.__e = r.__e]), (f = o.__b) && f(t);
                e: if ("function" == typeof $) try {
                    if (E = t.props, A = "prototype" in $ && $.prototype.render, x = (f = $.contextType) && i[f.__c], T = f ? x ? x.props.value : f.__ : i, r.__c ? S = (p = t.__c = r.__c).__ = p.__E : (A ? t.__c = p = new $(E, T) : (t.__c = p = new O(E, T), p.constructor = $, p.render = N), x && x.sub(p), p.props = E, p.state || (p.state = {}), p.context = T, p.__n = i, h = p.__d = !0, p.__h = [], p._sb = []), A && null == p.__s && (p.__s = p.state), A && null != $.getDerivedStateFromProps && (p.__s == p.state && (p.__s = _({}, p.__s)), _(p.__s, $.getDerivedStateFromProps(E, p.__s))), y = p.props, m = p.state, p.__v = t, h) A && null == $.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), A && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (A && null == $.getDerivedStateFromProps && E !== y && null != p.componentWillReceiveProps && p.componentWillReceiveProps(E, T), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(E, p.__s, T) || t.__v == r.__v) {
                            for (t.__v != r.__v && (p.props = E, p.state = p.__s, p.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(e) {
                                    e && (e.__ = t)
                                }), R = 0; R < p._sb.length; R++) p.__h.push(p._sb[R]);
                            p._sb = [], p.__h.length && c.push(p);
                            break e
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(E, p.__s, T), A && null != p.componentDidUpdate && p.__h.push(function() {
                            p.componentDidUpdate(y, m, b)
                        })
                    }
                    if (p.context = T, p.props = E, p.__P = e, p.__e = !1, I = o.__r, U = 0, A) {
                        for (p.state = p.__s, p.__d = !1, I && I(t), f = p.render(p.props, p.state, p.context), M = 0; M < p._sb.length; M++) p.__h.push(p._sb[M]);
                        p._sb = []
                    } else
                        do p.__d = !1, I && I(t), f = p.render(p.props, p.state, p.context), p.state = p.__s; while (p.__d && ++U < 25);
                    p.state = p.__s, null != p.getChildContext && (i = _(_({}, i), p.getChildContext())), A && !h && null != p.getSnapshotBeforeUpdate && (b = p.getSnapshotBeforeUpdate(y, m)), D = f, null != f && f.type === k && null == f.key && (D = function e(t) {
                        return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : v(t) ? t.map(e) : _({}, t)
                    }(f.props.children)), u = j(e, v(D) ? D : [D], t, r, i, a, s, c, u, l, d), p.base = t.__e, t.__u &= -161, p.__h.length && c.push(p), S && (p.__E = p.__ = null)
                } catch (e) {
                    if (t.__v = null, l || null != s) {
                        if (e.then) {
                            for (t.__u |= l ? 160 : 128; u && 8 == u.nodeType && u.nextSibling;) u = u.nextSibling;
                            s[s.indexOf(u)] = null, t.__e = u
                        } else {
                            for (W = s.length; W--;) w(s[W]);
                            H(t)
                        }
                    } else t.__e = r.__e, t.__k = r.__k, e.then || H(t);
                    o.__e(e, t, r)
                } else null == s && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : u = t.__e = function(e, t, r, i, a, s, c, u, l) {
                    var d, f, p, h, y, m, b, _ = r.props,
                        S = t.props,
                        E = t.type;
                    if ("svg" == E ? a = "http://www.w3.org/2000/svg" : "math" == E ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != s) {
                        for (d = 0; d < s.length; d++)
                            if ((y = s[d]) && "setAttribute" in y == !!E && (E ? y.localName == E : 3 == y.nodeType)) {
                                e = y, s[d] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null == E) return document.createTextNode(S);
                        e = document.createElementNS(a, E, S.is && S), u && (o.__m && o.__m(t, s), u = !1), s = null
                    }
                    if (null == E) _ === S || u && e.data == S || (e.data = S);
                    else {
                        if (s = s && n.call(e.childNodes), _ = r.props || g, !u && null != s)
                            for (_ = {}, d = 0; d < e.attributes.length; d++) _[(y = e.attributes[d]).name] = y.value;
                        for (d in _)
                            if (y = _[d], "children" == d);
                            else if ("dangerouslySetInnerHTML" == d) p = y;
                        else if (!(d in S)) {
                            if ("value" == d && "defaultValue" in S || "checked" == d && "defaultChecked" in S) continue;
                            C(e, d, null, y, a)
                        }
                        for (d in S) y = S[d], "children" == d ? h = y : "dangerouslySetInnerHTML" == d ? f = y : "value" == d ? m = y : "checked" == d ? b = y : u && "function" != typeof y || _[d] === y || C(e, d, y, _[d], a);
                        if (f) u || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
                        else if (p && (e.innerHTML = ""), j("template" == t.type ? e.content : e, v(h) ? h : [h], t, r, i, "foreignObject" == E ? "http://www.w3.org/1999/xhtml" : a, s, c, s ? s[0] : r.__k && P(r, 0), u, l), null != s)
                            for (d = s.length; d--;) w(s[d]);
                        u || (d = "value", "progress" == E && null == m ? e.removeAttribute("value") : null == m || m === e[d] && ("progress" != E || m) && ("option" != E || m == _[d]) || C(e, d, m, _[d], a), d = "checked", null != b && b != e[d] && C(e, d, b, _[d], a))
                    }
                    return e
                }(r.__e, t, r, i, a, s, c, l, d);
                return (f = o.diffed) && f(t), 128 & t.__u ? void 0 : u
            }

            function H(e) {
                e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(H)
            }

            function M(e, t, r) {
                for (var n = 0; n < r.length; n++) D(r[n], r[++n], r[++n]);
                o.__c && o.__c(t, e), e.some(function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some(function(e) {
                            e.call(t)
                        })
                    } catch (e) {
                        o.__e(e, t.__v)
                    }
                })
            }

            function D(e, t, r) {
                try {
                    if ("function" == typeof e) {
                        var n = "function" == typeof e.__u;
                        n && e.__u(), n && null == t || (e.__u = e(t))
                    } else e.current = t
                } catch (e) {
                    o.__e(e, r)
                }
            }

            function N(e, t, r) {
                return this.constructor(e, r)
            }

            function W(e, t, r) {
                var i, a, s, c;
                t == document && (t = document.documentElement), o.__ && o.__(e, t), a = (i = "function" == typeof r) ? null : r && r.__k || t.__k, s = [], c = [], U(t, e = (!i && r || t).__k = S(k, null, [e]), a || g, g, t.namespaceURI, !i && r ? [r] : a ? null : t.firstChild ? n.call(t.childNodes) : null, s, !i && r ? r : a ? a.__e : t.firstChild, i, c), M(s, e, c)
            }

            function $(e, t) {
                W(e, t, $)
            }

            function L(e, t, r) {
                var o, i, a, s, c = _({}, e.props);
                for (a in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : c[a] = void 0 === t[a] && null != s ? s[a] : t[a];
                return arguments.length > 2 && (c.children = arguments.length > 3 ? n.call(arguments, 2) : r), E(e.type, c, o || e.key, i || e.ref, null)
            }

            function B(e) {
                function t(e) {
                    var r, n;
                    return this.getChildContext || (r = new Set, (n = {})[t.__c] = this, this.getChildContext = function() {
                        return n
                    }, this.componentWillUnmount = function() {
                        r = null
                    }, this.shouldComponentUpdate = function(e) {
                        this.props.value != e.value && r.forEach(function(e) {
                            e.__e = !0, x(e)
                        })
                    }, this.sub = function(e) {
                        r.add(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            r && r.delete(e), t && t.call(e)
                        }
                    }), e.children
                }
                return t.__c = "__cC" + y++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(e, t) {
                    return e.children(t)
                }).contextType = t, t
            }
            n = m.slice, o = {
                __e: function(e, t, r, n) {
                    for (var o, i, a; t = t.__;)
                        if ((o = t.__c) && !o.__) try {
                            if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, n || {}), a = o.__d), a) return o.__E = o
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, i = 0, a = function(e) {
                return null != e && null == e.constructor
            }, O.prototype.setState = function(e, t) {
                var r;
                r = null != this.__s && this.__s != this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, r), this.props)), e && _(r, e), null != e && this.__v && (t && this._sb.push(t), x(this))
            }, O.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), x(this))
            }, O.prototype.render = k, s = [], u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, l = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, T.__r = 0, d = /(PointerCapture)$|Capture$/i, f = 0, p = I(!1), h = I(!0), y = 0
        },
        10434: function(e) {
            function t() {
                return e.exports = t = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments)
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        99718: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                },
                hkdf: function() {
                    return a
                }
            });
            let n = () => {
                if ("undefined" != typeof globalThis) return globalThis;
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                throw Error("unable to locate global object")
            };
            var o = async (e, t, r, o, i) => {
                let {
                    crypto: {
                        subtle: a
                    }
                } = n();
                return new Uint8Array(await a.deriveBits({
                    name: "HKDF",
                    hash: `SHA-${e.substr(3)}`,
                    salt: r,
                    info: o
                }, await a.importKey("raw", t, "HKDF", !1, ["deriveBits"]), i << 3))
            };

            function i(e, t) {
                if ("string" == typeof e) return new TextEncoder().encode(e);
                if (!(e instanceof Uint8Array)) throw TypeError(`"${t}"" must be an instance of Uint8Array or a string`);
                return e
            }
            async function a(e, t, r, n, a) {
                return o(function(e) {
                    switch (e) {
                        case "sha256":
                        case "sha384":
                        case "sha512":
                        case "sha1":
                            return e;
                        default:
                            throw TypeError('unsupported "digest" value')
                    }
                }(e), function(e) {
                    let t = i(e, "ikm");
                    if (!t.byteLength) throw TypeError('"ikm" must be at least one byte in length');
                    return t
                }(t), i(r, "salt"), function(e) {
                    let t = i(e, "info");
                    if (t.byteLength > 1024) throw TypeError('"info" must not contain more than 1024 bytes');
                    return t
                }(n), function(e, t) {
                    if ("number" != typeof e || !Number.isInteger(e) || e < 1) throw TypeError('"keylen" must be a positive integer');
                    if (e > 255 * (parseInt(t.substr(3), 10) >> 3 || 20)) throw TypeError('"keylen" too large');
                    return e
                }(a, e))
            }
        },
        45595: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                CompactEncrypt: function() {
                    return tf
                },
                CompactSign: function() {
                    return ty
                },
                EmbeddedJWK: function() {
                    return tA
                },
                EncryptJWT: function() {
                    return t_
                },
                FlattenedEncrypt: function() {
                    return e6
                },
                FlattenedSign: function() {
                    return th
                },
                GeneralEncrypt: function() {
                    return e8
                },
                GeneralSign: function() {
                    return tm
                },
                SignJWT: function() {
                    return tv
                },
                UnsecuredJWT: function() {
                    return tI
                },
                base64url: function() {
                    return o
                },
                calculateJwkThumbprint: function() {
                    return tS
                },
                calculateJwkThumbprintUri: function() {
                    return tE
                },
                compactDecrypt: function() {
                    return eX
                },
                compactVerify: function() {
                    return tr
                },
                createLocalJWKSet: function() {
                    return tT
                },
                createRemoteJWKSet: function() {
                    return tC
                },
                cryptoRuntime: function() {
                    return tK
                },
                decodeJwt: function() {
                    return tD
                },
                decodeProtectedHeader: function() {
                    return tM
                },
                errors: function() {
                    return n
                },
                exportJWK: function() {
                    return e2
                },
                exportPKCS8: function() {
                    return e1
                },
                exportSPKI: function() {
                    return e0
                },
                flattenedDecrypt: function() {
                    return eY
                },
                flattenedVerify: function() {
                    return tt
                },
                generalDecrypt: function() {
                    return eZ
                },
                generalVerify: function() {
                    return tn
                },
                generateKeyPair: function() {
                    return tL
                },
                generateSecret: function() {
                    return tB
                },
                importJWK: function() {
                    return eN
                },
                importPKCS8: function() {
                    return eD
                },
                importSPKI: function() {
                    return eH
                },
                importX509: function() {
                    return eM
                },
                jwtDecrypt: function() {
                    return td
                },
                jwtVerify: function() {
                    return tl
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                JOSEAlgNotAllowed: function() {
                    return E
                },
                JOSEError: function() {
                    return _
                },
                JOSENotSupported: function() {
                    return A
                },
                JWEDecompressionFailed: function() {
                    return O
                },
                JWEDecryptionFailed: function() {
                    return k
                },
                JWEInvalid: function() {
                    return P
                },
                JWKInvalid: function() {
                    return j
                },
                JWKSInvalid: function() {
                    return R
                },
                JWKSMultipleMatchingKeys: function() {
                    return I
                },
                JWKSNoMatchingKey: function() {
                    return C
                },
                JWKSTimeout: function() {
                    return U
                },
                JWSInvalid: function() {
                    return x
                },
                JWSSignatureVerificationFailed: function() {
                    return H
                },
                JWTClaimValidationFailed: function() {
                    return w
                },
                JWTExpired: function() {
                    return S
                },
                JWTInvalid: function() {
                    return T
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                decode: function() {
                    return tH
                },
                encode: function() {
                    return tU
                }
            });
            var i = crypto;
            let a = e => e instanceof CryptoKey,
                s = async (e, t) => {
                    let r = `SHA-${e.slice(-3)}`;
                    return new Uint8Array(await i.subtle.digest(r, t))
                },
                c = new TextEncoder,
                u = new TextDecoder;

            function l(...e) {
                let t = new Uint8Array(e.reduce((e, {
                        length: t
                    }) => e + t, 0)),
                    r = 0;
                return e.forEach(e => {
                    t.set(e, r), r += e.length
                }), t
            }

            function d(e, t, r) {
                if (t < 0 || t >= 4294967296) throw RangeError(`value must be >= 0 and <= ${4294967296-1}. Received ${t}`);
                e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], r)
            }

            function f(e) {
                let t = new Uint8Array(8);
                return d(t, Math.floor(e / 4294967296), 0), d(t, e % 4294967296, 4), t
            }

            function p(e) {
                let t = new Uint8Array(4);
                return d(t, e), t
            }

            function h(e) {
                return l(p(e.length), e)
            }
            async function y(e, t, r) {
                let n = Math.ceil((t >> 3) / 32),
                    o = new Uint8Array(32 * n);
                for (let t = 0; t < n; t++) {
                    let n = new Uint8Array(4 + e.length + r.length);
                    n.set(p(t + 1)), n.set(e, 4), n.set(r, 4 + e.length), o.set(await s("sha256", n), 32 * t)
                }
                return o.slice(0, t >> 3)
            }
            let g = e => {
                    let t = e;
                    "string" == typeof t && (t = c.encode(t));
                    let r = [];
                    for (let e = 0; e < t.length; e += 32768) r.push(String.fromCharCode.apply(null, t.subarray(e, e + 32768)));
                    return btoa(r.join(""))
                },
                m = e => g(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
                b = e => {
                    let t = atob(e),
                        r = new Uint8Array(t.length);
                    for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                    return r
                },
                v = e => {
                    let t = e;
                    t instanceof Uint8Array && (t = u.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                    try {
                        return b(t)
                    } catch (e) {
                        throw TypeError("The input to be decoded is not correctly encoded.")
                    }
                };
            class _ extends Error {
                static get code() {
                    return "ERR_JOSE_GENERIC"
                }
                constructor(e) {
                    var t;
                    super(e), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, this.constructor)
                }
            }
            class w extends _ {
                static get code() {
                    return "ERR_JWT_CLAIM_VALIDATION_FAILED"
                }
                constructor(e, t = "unspecified", r = "unspecified") {
                    super(e), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = t, this.reason = r
                }
            }
            class S extends _ {
                static get code() {
                    return "ERR_JWT_EXPIRED"
                }
                constructor(e, t = "unspecified", r = "unspecified") {
                    super(e), this.code = "ERR_JWT_EXPIRED", this.claim = t, this.reason = r
                }
            }
            class E extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
                }
                static get code() {
                    return "ERR_JOSE_ALG_NOT_ALLOWED"
                }
            }
            class A extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
                }
                static get code() {
                    return "ERR_JOSE_NOT_SUPPORTED"
                }
            }
            class k extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWE_DECRYPTION_FAILED", this.message = "decryption operation failed"
                }
                static get code() {
                    return "ERR_JWE_DECRYPTION_FAILED"
                }
            }
            class O extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWE_DECOMPRESSION_FAILED", this.message = "decompression operation failed"
                }
                static get code() {
                    return "ERR_JWE_DECOMPRESSION_FAILED"
                }
            }
            class P extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWE_INVALID"
                }
                static get code() {
                    return "ERR_JWE_INVALID"
                }
            }
            class x extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWS_INVALID"
                }
                static get code() {
                    return "ERR_JWS_INVALID"
                }
            }
            class T extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWT_INVALID"
                }
                static get code() {
                    return "ERR_JWT_INVALID"
                }
            }
            class j extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWK_INVALID"
                }
                static get code() {
                    return "ERR_JWK_INVALID"
                }
            }
            class R extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_INVALID"
                }
                static get code() {
                    return "ERR_JWKS_INVALID"
                }
            }
            class C extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_NO_MATCHING_KEY", this.message = "no applicable key found in the JSON Web Key Set"
                }
                static get code() {
                    return "ERR_JWKS_NO_MATCHING_KEY"
                }
            }
            class I extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS", this.message = "multiple matching keys found in the JSON Web Key Set"
                }
                static get code() {
                    return "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
                }
            }
            class U extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWKS_TIMEOUT", this.message = "request timed out"
                }
                static get code() {
                    return "ERR_JWKS_TIMEOUT"
                }
            }
            class H extends _ {
                constructor() {
                    super(...arguments), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED", this.message = "signature verification failed"
                }
                static get code() {
                    return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
                }
            }
            var M = i.getRandomValues.bind(i);

            function D(e) {
                switch (e) {
                    case "A128GCM":
                    case "A128GCMKW":
                    case "A192GCM":
                    case "A192GCMKW":
                    case "A256GCM":
                    case "A256GCMKW":
                        return 96;
                    case "A128CBC-HS256":
                    case "A192CBC-HS384":
                    case "A256CBC-HS512":
                        return 128;
                    default:
                        throw new A(`Unsupported JWE Algorithm: ${e}`)
                }
            }
            var N = e => M(new Uint8Array(D(e) >> 3)),
                W = (e, t) => {
                    if (t.length << 3 !== D(e)) throw new P("Invalid Initialization Vector length")
                },
                $ = (e, t) => {
                    let r = e.byteLength << 3;
                    if (r !== t) throw new P(`Invalid Content Encryption Key length. Expected ${t} bits, got ${r} bits`)
                },
                L = (e, t) => {
                    if (!(e instanceof Uint8Array)) throw TypeError("First argument must be a buffer");
                    if (!(t instanceof Uint8Array)) throw TypeError("Second argument must be a buffer");
                    if (e.length !== t.length) throw TypeError("Input buffers must have the same length");
                    let r = e.length,
                        n = 0,
                        o = -1;
                    for (; ++o < r;) n |= e[o] ^ t[o];
                    return 0 === n
                };

            function B(e, t = "algorithm.name") {
                return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)
            }

            function K(e, t) {
                return e.name === t
            }

            function J(e) {
                return parseInt(e.name.slice(4), 10)
            }

            function F(e, t) {
                if (t.length && !t.some(t => e.usages.includes(t))) {
                    let e = "CryptoKey does not support this operation, its usages must include ";
                    if (t.length > 2) {
                        let r = t.pop();
                        e += `one of ${t.join(", ")}, or ${r}.`
                    } else 2 === t.length ? e += `one of ${t[0]} or ${t[1]}.` : e += `${t[0]}.`;
                    throw TypeError(e)
                }
            }

            function q(e, t, ...r) {
                switch (t) {
                    case "A128GCM":
                    case "A192GCM":
                    case "A256GCM":
                        {
                            if (!K(e.algorithm, "AES-GCM")) throw B("AES-GCM");
                            let r = parseInt(t.slice(1, 4), 10);
                            if (e.algorithm.length !== r) throw B(r, "algorithm.length");
                            break
                        }
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        {
                            if (!K(e.algorithm, "AES-KW")) throw B("AES-KW");
                            let r = parseInt(t.slice(1, 4), 10);
                            if (e.algorithm.length !== r) throw B(r, "algorithm.length");
                            break
                        }
                    case "ECDH":
                        switch (e.algorithm.name) {
                            case "ECDH":
                            case "X25519":
                            case "X448":
                                break;
                            default:
                                throw B("ECDH, X25519, or X448")
                        }
                        break;
                    case "PBES2-HS256+A128KW":
                    case "PBES2-HS384+A192KW":
                    case "PBES2-HS512+A256KW":
                        if (!K(e.algorithm, "PBKDF2")) throw B("PBKDF2");
                        break;
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        {
                            if (!K(e.algorithm, "RSA-OAEP")) throw B("RSA-OAEP");
                            let r = parseInt(t.slice(9), 10) || 1;
                            if (J(e.algorithm.hash) !== r) throw B(`SHA-${r}`, "algorithm.hash");
                            break
                        }
                    default:
                        throw TypeError("CryptoKey does not support this operation")
                }
                F(e, r)
            }

            function z(e, t, ...r) {
                if (r.length > 2) {
                    let t = r.pop();
                    e += `one of type ${r.join(", ")}, or ${t}.`
                } else 2 === r.length ? e += `one of type ${r[0]} or ${r[1]}.` : e += `of type ${r[0]}.`;
                return null == t ? e += ` Received ${t}` : "function" == typeof t && t.name ? e += ` Received function ${t.name}` : "object" == typeof t && null != t && t.constructor && t.constructor.name && (e += ` Received an instance of ${t.constructor.name}`), e
            }
            var G = (e, ...t) => z("Key must be ", e, ...t);

            function V(e, t, ...r) {
                return z(`Key for the ${e} algorithm must be `, t, ...r)
            }
            var Y = e => a(e);
            let X = ["CryptoKey"];
            async function Z(e, t, r, n, o, a) {
                let s, c;
                if (!(t instanceof Uint8Array)) throw TypeError(G(t, "Uint8Array"));
                let u = parseInt(e.slice(1, 4), 10),
                    d = await i.subtle.importKey("raw", t.subarray(u >> 3), "AES-CBC", !1, ["decrypt"]),
                    p = await i.subtle.importKey("raw", t.subarray(0, u >> 3), {
                        hash: `SHA-${u<<1}`,
                        name: "HMAC"
                    }, !1, ["sign"]),
                    h = l(a, n, r, f(a.length << 3)),
                    y = new Uint8Array((await i.subtle.sign("HMAC", p, h)).slice(0, u >> 3));
                try {
                    s = L(o, y)
                } catch (e) {}
                if (!s) throw new k;
                try {
                    c = new Uint8Array(await i.subtle.decrypt({
                        iv: n,
                        name: "AES-CBC"
                    }, d, r))
                } catch (e) {}
                if (!c) throw new k;
                return c
            }
            async function Q(e, t, r, n, o, a) {
                let s;
                t instanceof Uint8Array ? s = await i.subtle.importKey("raw", t, "AES-GCM", !1, ["decrypt"]) : (q(t, e, "decrypt"), s = t);
                try {
                    return new Uint8Array(await i.subtle.decrypt({
                        additionalData: a,
                        iv: n,
                        name: "AES-GCM",
                        tagLength: 128
                    }, s, l(r, o)))
                } catch (e) {
                    throw new k
                }
            }
            let ee = async (e, t, r, n, o, i) => {
                    if (!a(t) && !(t instanceof Uint8Array)) throw TypeError(G(t, ...X, "Uint8Array"));
                    switch (W(e, n), e) {
                        case "A128CBC-HS256":
                        case "A192CBC-HS384":
                        case "A256CBC-HS512":
                            return t instanceof Uint8Array && $(t, parseInt(e.slice(-3), 10)), Z(e, t, r, n, o, i);
                        case "A128GCM":
                        case "A192GCM":
                        case "A256GCM":
                            return t instanceof Uint8Array && $(t, parseInt(e.slice(1, 4), 10)), Q(e, t, r, n, o, i);
                        default:
                            throw new A("Unsupported JWE Content Encryption Algorithm")
                    }
                },
                et = async () => {
                    throw new A('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.')
                },
                er = async () => {
                    throw new A('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.')
                };
            var en = (...e) => {
                let t;
                let r = e.filter(Boolean);
                if (0 === r.length || 1 === r.length) return !0;
                for (let e of r) {
                    let r = Object.keys(e);
                    if (!t || 0 === t.size) {
                        t = new Set(r);
                        continue
                    }
                    for (let e of r) {
                        if (t.has(e)) return !1;
                        t.add(e)
                    }
                }
                return !0
            };

            function eo(e) {
                if (!("object" == typeof e && null !== e) || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                if (null === Object.getPrototypeOf(e)) return !0;
                let t = e;
                for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }
            var ei = [{
                hash: "SHA-256",
                name: "HMAC"
            }, !0, ["sign"]];

            function ea(e, t) {
                if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw TypeError(`Invalid key size for alg: ${t}`)
            }

            function es(e, t, r) {
                if (a(e)) return q(e, t, r), e;
                if (e instanceof Uint8Array) return i.subtle.importKey("raw", e, "AES-KW", !0, [r]);
                throw TypeError(G(e, ...X, "Uint8Array"))
            }
            let ec = async (e, t, r) => {
                    let n = await es(t, e, "wrapKey");
                    ea(n, e);
                    let o = await i.subtle.importKey("raw", r, ...ei);
                    return new Uint8Array(await i.subtle.wrapKey("raw", o, n, "AES-KW"))
                },
                eu = async (e, t, r) => {
                    let n = await es(t, e, "unwrapKey");
                    ea(n, e);
                    let o = await i.subtle.unwrapKey("raw", r, n, "AES-KW", ...ei);
                    return new Uint8Array(await i.subtle.exportKey("raw", o))
                };
            async function el(e, t, r, n, o = new Uint8Array(0), s = new Uint8Array(0)) {
                let u;
                if (!a(e)) throw TypeError(G(e, ...X));
                if (q(e, "ECDH"), !a(t)) throw TypeError(G(t, ...X));
                q(t, "ECDH", "deriveBits");
                let d = l(h(c.encode(r)), h(o), h(s), p(n));
                return u = "X25519" === e.algorithm.name ? 256 : "X448" === e.algorithm.name ? 448 : Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3, y(new Uint8Array(await i.subtle.deriveBits({
                    name: e.algorithm.name,
                    public: e
                }, t, u)), n, d)
            }
            async function ed(e) {
                if (!a(e)) throw TypeError(G(e, ...X));
                return i.subtle.generateKey(e.algorithm, !0, ["deriveBits"])
            }

            function ef(e) {
                if (!a(e)) throw TypeError(G(e, ...X));
                return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) || "X25519" === e.algorithm.name || "X448" === e.algorithm.name
            }
            async function ep(e, t, r, n) {
                ! function(e) {
                    if (!(e instanceof Uint8Array) || e.length < 8) throw new P("PBES2 Salt Input must be 8 or more octets")
                }(e);
                let o = l(c.encode(t), new Uint8Array([0]), e),
                    s = parseInt(t.slice(13, 16), 10),
                    u = {
                        hash: `SHA-${t.slice(8,11)}`,
                        iterations: r,
                        name: "PBKDF2",
                        salt: o
                    },
                    d = await
                function(e, t) {
                    if (e instanceof Uint8Array) return i.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveBits"]);
                    if (a(e)) return q(e, t, "deriveBits", "deriveKey"), e;
                    throw TypeError(G(e, ...X, "Uint8Array"))
                }(n, t);
                if (d.usages.includes("deriveBits")) return new Uint8Array(await i.subtle.deriveBits(u, d, s));
                if (d.usages.includes("deriveKey")) return i.subtle.deriveKey(u, d, {
                    length: s,
                    name: "AES-KW"
                }, !1, ["wrapKey", "unwrapKey"]);
                throw TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"')
            }
            let eh = async (e, t, r, n = 2048, o = M(new Uint8Array(16))) => {
                    let i = await ep(o, e, n, t);
                    return {
                        encryptedKey: await ec(e.slice(-6), i, r),
                        p2c: n,
                        p2s: m(o)
                    }
                },
                ey = async (e, t, r, n, o) => {
                    let i = await ep(o, e, n, t);
                    return eu(e.slice(-6), i, r)
                };

            function eg(e) {
                switch (e) {
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        return "RSA-OAEP";
                    default:
                        throw new A(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                }
            }
            var em = (e, t) => {
                if (e.startsWith("RS") || e.startsWith("PS")) {
                    let {
                        modulusLength: r
                    } = t.algorithm;
                    if ("number" != typeof r || r < 2048) throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)
                }
            };
            let eb = async (e, t, r) => {
                    if (!a(t)) throw TypeError(G(t, ...X));
                    if (q(t, e, "encrypt", "wrapKey"), em(e, t), t.usages.includes("encrypt")) return new Uint8Array(await i.subtle.encrypt(eg(e), t, r));
                    if (t.usages.includes("wrapKey")) {
                        let n = await i.subtle.importKey("raw", r, ...ei);
                        return new Uint8Array(await i.subtle.wrapKey("raw", n, t, eg(e)))
                    }
                    throw TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation')
                },
                ev = async (e, t, r) => {
                    if (!a(t)) throw TypeError(G(t, ...X));
                    if (q(t, e, "decrypt", "unwrapKey"), em(e, t), t.usages.includes("decrypt")) return new Uint8Array(await i.subtle.decrypt(eg(e), t, r));
                    if (t.usages.includes("unwrapKey")) {
                        let n = await i.subtle.unwrapKey("raw", r, t, eg(e), ...ei);
                        return new Uint8Array(await i.subtle.exportKey("raw", n))
                    }
                    throw TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation')
                };

            function e_(e) {
                switch (e) {
                    case "A128GCM":
                        return 128;
                    case "A192GCM":
                        return 192;
                    case "A256GCM":
                    case "A128CBC-HS256":
                        return 256;
                    case "A192CBC-HS384":
                        return 384;
                    case "A256CBC-HS512":
                        return 512;
                    default:
                        throw new A(`Unsupported JWE Algorithm: ${e}`)
                }
            }
            var ew = e => M(new Uint8Array(e_(e) >> 3)),
                eS = (e, t) => {
                    let r = (e.match(/.{1,64}/g) || []).join("\n");
                    return `-----BEGIN ${t}-----
${r}
-----END ${t}-----`
                };
            let eE = async (e, t, r) => {
                    if (!a(r)) throw TypeError(G(r, ...X));
                    if (!r.extractable) throw TypeError("CryptoKey is not extractable");
                    if (r.type !== e) throw TypeError(`key is not a ${e} key`);
                    return eS(g(new Uint8Array(await i.subtle.exportKey(t, r))), `${e.toUpperCase()} KEY`)
                },
                eA = e => eE("public", "spki", e),
                ek = e => eE("private", "pkcs8", e),
                eO = (e, t, r = 0) => {
                    0 === r && (t.unshift(t.length), t.unshift(6));
                    let n = e.indexOf(t[0], r);
                    if (-1 === n) return !1;
                    let o = e.subarray(n, n + t.length);
                    return o.length === t.length && (o.every((e, r) => e === t[r]) || eO(e, t, n + 1))
                },
                eP = e => {
                    switch (!0) {
                        case eO(e, [42, 134, 72, 206, 61, 3, 1, 7]):
                            return "P-256";
                        case eO(e, [43, 129, 4, 0, 34]):
                            return "P-384";
                        case eO(e, [43, 129, 4, 0, 35]):
                            return "P-521";
                        case eO(e, [43, 101, 110]):
                            return "X25519";
                        case eO(e, [43, 101, 111]):
                            return "X448";
                        case eO(e, [43, 101, 112]):
                            return "Ed25519";
                        case eO(e, [43, 101, 113]):
                            return "Ed448";
                        default:
                            throw new A("Invalid or unsupported EC Key Curve or OKP Key Sub Type")
                    }
                },
                ex = async (e, t, r, n, o) => {
                    var a;
                    let s, c;
                    let u = new Uint8Array(atob(r.replace(e, "")).split("").map(e => e.charCodeAt(0))),
                        l = "spki" === t;
                    switch (n) {
                        case "PS256":
                        case "PS384":
                        case "PS512":
                            s = {
                                name: "RSA-PSS",
                                hash: `SHA-${n.slice(-3)}`
                            }, c = l ? ["verify"] : ["sign"];
                            break;
                        case "RS256":
                        case "RS384":
                        case "RS512":
                            s = {
                                name: "RSASSA-PKCS1-v1_5",
                                hash: `SHA-${n.slice(-3)}`
                            }, c = l ? ["verify"] : ["sign"];
                            break;
                        case "RSA-OAEP":
                        case "RSA-OAEP-256":
                        case "RSA-OAEP-384":
                        case "RSA-OAEP-512":
                            s = {
                                name: "RSA-OAEP",
                                hash: `SHA-${parseInt(n.slice(-3),10)||1}`
                            }, c = l ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
                            break;
                        case "ES256":
                            s = {
                                name: "ECDSA",
                                namedCurve: "P-256"
                            }, c = l ? ["verify"] : ["sign"];
                            break;
                        case "ES384":
                            s = {
                                name: "ECDSA",
                                namedCurve: "P-384"
                            }, c = l ? ["verify"] : ["sign"];
                            break;
                        case "ES512":
                            s = {
                                name: "ECDSA",
                                namedCurve: "P-521"
                            }, c = l ? ["verify"] : ["sign"];
                            break;
                        case "ECDH-ES":
                        case "ECDH-ES+A128KW":
                        case "ECDH-ES+A192KW":
                        case "ECDH-ES+A256KW":
                            {
                                let e = eP(u);s = e.startsWith("P-") ? {
                                    name: "ECDH",
                                    namedCurve: e
                                } : {
                                    name: e
                                },
                                c = l ? [] : ["deriveBits"];
                                break
                            }
                        case "EdDSA":
                            s = {
                                name: eP(u)
                            }, c = l ? ["verify"] : ["sign"];
                            break;
                        default:
                            throw new A('Invalid or unsupported "alg" (Algorithm) value')
                    }
                    return i.subtle.importKey(t, u, s, null !== (a = null == o ? void 0 : o.extractable) && void 0 !== a && a, c)
                },
                eT = (e, t, r) => ex(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", e, t, r),
                ej = (e, t, r) => ex(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, r);

            function eR(e) {
                let t = [],
                    r = 0;
                for (; r < e.length;) {
                    let n = eC(e.subarray(r));
                    t.push(n), r += n.byteLength
                }
                return t
            }

            function eC(e) {
                let t = 0,
                    r = 31 & e[0];
                if (t++, 31 === r) {
                    for (r = 0; e[t] >= 128;) r = 128 * r + e[t] - 128, t++;
                    r = 128 * r + e[t] - 128, t++
                }
                let n = 0;
                if (e[t] < 128) n = e[t], t++;
                else if (128 === n) {
                    for (n = 0; 0 !== e[t + n] || 0 !== e[t + n + 1];) {
                        if (n > e.byteLength) throw TypeError("invalid indefinite form length");
                        n++
                    }
                    let r = t + n + 2;
                    return {
                        byteLength: r,
                        contents: e.subarray(t, t + n),
                        raw: e.subarray(0, r)
                    }
                } else {
                    let r = 127 & e[t];
                    t++, n = 0;
                    for (let o = 0; o < r; o++) n = 256 * n + e[t], t++
                }
                let o = t + n;
                return {
                    byteLength: o,
                    contents: e.subarray(t, o),
                    raw: e.subarray(0, o)
                }
            }
            let eI = (e, t, r) => {
                    let n;
                    try {
                        n = eS(function(e) {
                            let t = eR(eR(eC(e).contents)[0].contents);
                            return g(t[160 === t[0].raw[0] ? 6 : 5].raw)
                        }(b(e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, ""))), "PUBLIC KEY")
                    } catch (e) {
                        throw TypeError("Failed to parse the X.509 certificate", {
                            cause: e
                        })
                    }
                    return ej(n, t, r)
                },
                eU = async e => {
                    var t, r;
                    if (!e.alg) throw TypeError('"alg" argument is required when "jwk.alg" is not present');
                    let {
                        algorithm: n,
                        keyUsages: o
                    } = function(e) {
                        let t, r;
                        switch (e.kty) {
                            case "oct":
                                switch (e.alg) {
                                    case "HS256":
                                    case "HS384":
                                    case "HS512":
                                        t = {
                                            name: "HMAC",
                                            hash: `SHA-${e.alg.slice(-3)}`
                                        }, r = ["sign", "verify"];
                                        break;
                                    case "A128CBC-HS256":
                                    case "A192CBC-HS384":
                                    case "A256CBC-HS512":
                                        throw new A(`${e.alg} keys cannot be imported as CryptoKey instances`);
                                    case "A128GCM":
                                    case "A192GCM":
                                    case "A256GCM":
                                    case "A128GCMKW":
                                    case "A192GCMKW":
                                    case "A256GCMKW":
                                        t = {
                                            name: "AES-GCM"
                                        }, r = ["encrypt", "decrypt"];
                                        break;
                                    case "A128KW":
                                    case "A192KW":
                                    case "A256KW":
                                        t = {
                                            name: "AES-KW"
                                        }, r = ["wrapKey", "unwrapKey"];
                                        break;
                                    case "PBES2-HS256+A128KW":
                                    case "PBES2-HS384+A192KW":
                                    case "PBES2-HS512+A256KW":
                                        t = {
                                            name: "PBKDF2"
                                        }, r = ["deriveBits"];
                                        break;
                                    default:
                                        throw new A('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "RSA":
                                switch (e.alg) {
                                    case "PS256":
                                    case "PS384":
                                    case "PS512":
                                        t = {
                                            name: "RSA-PSS",
                                            hash: `SHA-${e.alg.slice(-3)}`
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "RS256":
                                    case "RS384":
                                    case "RS512":
                                        t = {
                                            name: "RSASSA-PKCS1-v1_5",
                                            hash: `SHA-${e.alg.slice(-3)}`
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "RSA-OAEP":
                                    case "RSA-OAEP-256":
                                    case "RSA-OAEP-384":
                                    case "RSA-OAEP-512":
                                        t = {
                                            name: "RSA-OAEP",
                                            hash: `SHA-${parseInt(e.alg.slice(-3),10)||1}`
                                        }, r = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                                        break;
                                    default:
                                        throw new A('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "EC":
                                switch (e.alg) {
                                    case "ES256":
                                        t = {
                                            name: "ECDSA",
                                            namedCurve: "P-256"
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ES384":
                                        t = {
                                            name: "ECDSA",
                                            namedCurve: "P-384"
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ES512":
                                        t = {
                                            name: "ECDSA",
                                            namedCurve: "P-521"
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ECDH-ES":
                                    case "ECDH-ES+A128KW":
                                    case "ECDH-ES+A192KW":
                                    case "ECDH-ES+A256KW":
                                        t = {
                                            name: "ECDH",
                                            namedCurve: e.crv
                                        }, r = e.d ? ["deriveBits"] : [];
                                        break;
                                    default:
                                        throw new A('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "OKP":
                                switch (e.alg) {
                                    case "EdDSA":
                                        t = {
                                            name: e.crv
                                        }, r = e.d ? ["sign"] : ["verify"];
                                        break;
                                    case "ECDH-ES":
                                    case "ECDH-ES+A128KW":
                                    case "ECDH-ES+A192KW":
                                    case "ECDH-ES+A256KW":
                                        t = {
                                            name: e.crv
                                        }, r = e.d ? ["deriveBits"] : [];
                                        break;
                                    default:
                                        throw new A('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            default:
                                throw new A('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
                        }
                        return {
                            algorithm: t,
                            keyUsages: r
                        }
                    }(e), a = [n, null !== (t = e.ext) && void 0 !== t && t, null !== (r = e.key_ops) && void 0 !== r ? r : o];
                    if ("PBKDF2" === n.name) return i.subtle.importKey("raw", v(e.k), ...a);
                    let s = { ...e
                    };
                    return delete s.alg, delete s.use, i.subtle.importKey("jwk", s, ...a)
                };
            async function eH(e, t, r) {
                if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PUBLIC KEY-----")) throw TypeError('"spki" must be SPKI formatted string');
                return ej(e, t, r)
            }
            async function eM(e, t, r) {
                if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN CERTIFICATE-----")) throw TypeError('"x509" must be X.509 formatted string');
                return eI(e, t, r)
            }
            async function eD(e, t, r) {
                if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PRIVATE KEY-----")) throw TypeError('"pkcs8" must be PKCS#8 formatted string');
                return eT(e, t, r)
            }
            async function eN(e, t, r) {
                var n;
                if (!eo(e)) throw TypeError("JWK must be an object");
                switch (t || (t = e.alg), e.kty) {
                    case "oct":
                        if ("string" != typeof e.k || !e.k) throw TypeError('missing "k" (Key Value) Parameter value');
                        if (null != r || (r = !0 !== e.ext), r) return eU({ ...e,
                            alg: t,
                            ext: null !== (n = e.ext) && void 0 !== n && n
                        });
                        return v(e.k);
                    case "RSA":
                        if (void 0 !== e.oth) throw new A('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
                    case "EC":
                    case "OKP":
                        return eU({ ...e,
                            alg: t
                        });
                    default:
                        throw new A('Unsupported "kty" (Key Type) Parameter value')
                }
            }
            let eW = (e, t) => {
                    if (!(t instanceof Uint8Array)) {
                        if (!Y(t)) throw TypeError(V(e, t, ...X, "Uint8Array"));
                        if ("secret" !== t.type) throw TypeError(`${X.join(" or ")} instances for symmetric algorithms must be of type "secret"`)
                    }
                },
                e$ = (e, t, r) => {
                    if (!Y(t)) throw TypeError(V(e, t, ...X));
                    if ("secret" === t.type) throw TypeError(`${X.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
                    if ("sign" === r && "public" === t.type) throw TypeError(`${X.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
                    if ("decrypt" === r && "public" === t.type) throw TypeError(`${X.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
                    if (t.algorithm && "verify" === r && "private" === t.type) throw TypeError(`${X.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
                    if (t.algorithm && "encrypt" === r && "private" === t.type) throw TypeError(`${X.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`)
                };
            var eL = (e, t, r) => {
                e.startsWith("HS") || "dir" === e || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e) ? eW(e, t) : e$(e, t, r)
            };
            async function eB(e, t, r, n, o) {
                if (!(r instanceof Uint8Array)) throw TypeError(G(r, "Uint8Array"));
                let a = parseInt(e.slice(1, 4), 10),
                    s = await i.subtle.importKey("raw", r.subarray(a >> 3), "AES-CBC", !1, ["encrypt"]),
                    c = await i.subtle.importKey("raw", r.subarray(0, a >> 3), {
                        hash: `SHA-${a<<1}`,
                        name: "HMAC"
                    }, !1, ["sign"]),
                    u = new Uint8Array(await i.subtle.encrypt({
                        iv: n,
                        name: "AES-CBC"
                    }, s, t)),
                    d = l(o, n, u, f(o.length << 3));
                return {
                    ciphertext: u,
                    tag: new Uint8Array((await i.subtle.sign("HMAC", c, d)).slice(0, a >> 3))
                }
            }
            async function eK(e, t, r, n, o) {
                let a;
                r instanceof Uint8Array ? a = await i.subtle.importKey("raw", r, "AES-GCM", !1, ["encrypt"]) : (q(r, e, "encrypt"), a = r);
                let s = new Uint8Array(await i.subtle.encrypt({
                        additionalData: o,
                        iv: n,
                        name: "AES-GCM",
                        tagLength: 128
                    }, a, t)),
                    c = s.slice(-16);
                return {
                    ciphertext: s.slice(0, -16),
                    tag: c
                }
            }
            let eJ = async (e, t, r, n, o) => {
                if (!a(r) && !(r instanceof Uint8Array)) throw TypeError(G(r, ...X, "Uint8Array"));
                switch (W(e, n), e) {
                    case "A128CBC-HS256":
                    case "A192CBC-HS384":
                    case "A256CBC-HS512":
                        return r instanceof Uint8Array && $(r, parseInt(e.slice(-3), 10)), eB(e, t, r, n, o);
                    case "A128GCM":
                    case "A192GCM":
                    case "A256GCM":
                        return r instanceof Uint8Array && $(r, parseInt(e.slice(1, 4), 10)), eK(e, t, r, n, o);
                    default:
                        throw new A("Unsupported JWE Content Encryption Algorithm")
                }
            };
            async function eF(e, t, r, n) {
                let o = e.slice(0, 7);
                n || (n = N(o));
                let {
                    ciphertext: i,
                    tag: a
                } = await eJ(o, r, t, n, new Uint8Array(0));
                return {
                    encryptedKey: i,
                    iv: m(n),
                    tag: m(a)
                }
            }
            async function eq(e, t, r, n, o) {
                return ee(e.slice(0, 7), t, r, n, o, new Uint8Array(0))
            }
            async function ez(e, t, r, n, o) {
                switch (eL(e, t, "decrypt"), e) {
                    case "dir":
                        if (void 0 !== r) throw new P("Encountered unexpected JWE Encrypted Key");
                        return t;
                    case "ECDH-ES":
                        if (void 0 !== r) throw new P("Encountered unexpected JWE Encrypted Key");
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        {
                            let o, i;
                            if (!eo(n.epk)) throw new P('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
                            if (!ef(t)) throw new A("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                            let a = await eN(n.epk, e);
                            if (void 0 !== n.apu) {
                                if ("string" != typeof n.apu) throw new P('JOSE Header "apu" (Agreement PartyUInfo) invalid');
                                try {
                                    o = v(n.apu)
                                } catch (e) {
                                    throw new P("Failed to base64url decode the apu")
                                }
                            }
                            if (void 0 !== n.apv) {
                                if ("string" != typeof n.apv) throw new P('JOSE Header "apv" (Agreement PartyVInfo) invalid');
                                try {
                                    i = v(n.apv)
                                } catch (e) {
                                    throw new P("Failed to base64url decode the apv")
                                }
                            }
                            let s = await el(a, t, "ECDH-ES" === e ? n.enc : e, "ECDH-ES" === e ? e_(n.enc) : parseInt(e.slice(-5, -2), 10), o, i);
                            if ("ECDH-ES" === e) return s;
                            if (void 0 === r) throw new P("JWE Encrypted Key missing");
                            return eu(e.slice(-6), s, r)
                        }
                    case "RSA1_5":
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        if (void 0 === r) throw new P("JWE Encrypted Key missing");
                        return ev(e, t, r);
                    case "PBES2-HS256+A128KW":
                    case "PBES2-HS384+A192KW":
                    case "PBES2-HS512+A256KW":
                        {
                            let i;
                            if (void 0 === r) throw new P("JWE Encrypted Key missing");
                            if ("number" != typeof n.p2c) throw new P('JOSE Header "p2c" (PBES2 Count) missing or invalid');
                            let a = (null == o ? void 0 : o.maxPBES2Count) || 1e4;
                            if (n.p2c > a) throw new P('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
                            if ("string" != typeof n.p2s) throw new P('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
                            try {
                                i = v(n.p2s)
                            } catch (e) {
                                throw new P("Failed to base64url decode the p2s")
                            }
                            return ey(e, t, r, n.p2c, i)
                        }
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        if (void 0 === r) throw new P("JWE Encrypted Key missing");
                        return eu(e, t, r);
                    case "A128GCMKW":
                    case "A192GCMKW":
                    case "A256GCMKW":
                        {
                            let o, i;
                            if (void 0 === r) throw new P("JWE Encrypted Key missing");
                            if ("string" != typeof n.iv) throw new P('JOSE Header "iv" (Initialization Vector) missing or invalid');
                            if ("string" != typeof n.tag) throw new P('JOSE Header "tag" (Authentication Tag) missing or invalid');
                            try {
                                o = v(n.iv)
                            } catch (e) {
                                throw new P("Failed to base64url decode the iv")
                            }
                            try {
                                i = v(n.tag)
                            } catch (e) {
                                throw new P("Failed to base64url decode the tag")
                            }
                            return eq(e, t, r, o, i)
                        }
                    default:
                        throw new A('Invalid or unsupported "alg" (JWE Algorithm) header value')
                }
            }
            var eG = function(e, t, r, n, o) {
                    let i;
                    if (void 0 !== o.crit && void 0 === n.crit) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
                    if (!n || void 0 === n.crit) return new Set;
                    if (!Array.isArray(n.crit) || 0 === n.crit.length || n.crit.some(e => "string" != typeof e || 0 === e.length)) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
                    for (let a of (i = void 0 !== r ? new Map([...Object.entries(r), ...t.entries()]) : t, n.crit)) {
                        if (!i.has(a)) throw new A(`Extension Header Parameter "${a}" is not recognized`);
                        if (void 0 === o[a]) throw new e(`Extension Header Parameter "${a}" is missing`);
                        if (i.get(a) && void 0 === n[a]) throw new e(`Extension Header Parameter "${a}" MUST be integrity protected`)
                    }
                    return new Set(n.crit)
                },
                eV = (e, t) => {
                    if (void 0 !== t && (!Array.isArray(t) || t.some(e => "string" != typeof e))) throw TypeError(`"${e}" option must be an array of strings`);
                    if (t) return new Set(t)
                };
            async function eY(e, t, r) {
                var n;
                let o, i, a, s, d, f, p;
                if (!eo(e)) throw new P("Flattened JWE must be an object");
                if (void 0 === e.protected && void 0 === e.header && void 0 === e.unprotected) throw new P("JOSE Header missing");
                if ("string" != typeof e.iv) throw new P("JWE Initialization Vector missing or incorrect type");
                if ("string" != typeof e.ciphertext) throw new P("JWE Ciphertext missing or incorrect type");
                if ("string" != typeof e.tag) throw new P("JWE Authentication Tag missing or incorrect type");
                if (void 0 !== e.protected && "string" != typeof e.protected) throw new P("JWE Protected Header incorrect type");
                if (void 0 !== e.encrypted_key && "string" != typeof e.encrypted_key) throw new P("JWE Encrypted Key incorrect type");
                if (void 0 !== e.aad && "string" != typeof e.aad) throw new P("JWE AAD incorrect type");
                if (void 0 !== e.header && !eo(e.header)) throw new P("JWE Shared Unprotected Header incorrect type");
                if (void 0 !== e.unprotected && !eo(e.unprotected)) throw new P("JWE Per-Recipient Unprotected Header incorrect type");
                if (e.protected) try {
                    let t = v(e.protected);
                    o = JSON.parse(u.decode(t))
                } catch (e) {
                    throw new P("JWE Protected Header is invalid")
                }
                if (!en(o, e.header, e.unprotected)) throw new P("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
                let h = { ...o,
                    ...e.header,
                    ...e.unprotected
                };
                if (eG(P, new Map, null == r ? void 0 : r.crit, o, h), void 0 !== h.zip) {
                    if (!o || !o.zip) throw new P('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                    if ("DEF" !== h.zip) throw new A('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
                }
                let {
                    alg: y,
                    enc: g
                } = h;
                if ("string" != typeof y || !y) throw new P("missing JWE Algorithm (alg) in JWE Header");
                if ("string" != typeof g || !g) throw new P("missing JWE Encryption Algorithm (enc) in JWE Header");
                let m = r && eV("keyManagementAlgorithms", r.keyManagementAlgorithms),
                    b = r && eV("contentEncryptionAlgorithms", r.contentEncryptionAlgorithms);
                if (m && !m.has(y)) throw new E('"alg" (Algorithm) Header Parameter not allowed');
                if (b && !b.has(g)) throw new E('"enc" (Encryption Algorithm) Header Parameter not allowed');
                if (void 0 !== e.encrypted_key) try {
                    i = v(e.encrypted_key)
                } catch (e) {
                    throw new P("Failed to base64url decode the encrypted_key")
                }
                let _ = !1;
                "function" == typeof t && (t = await t(o, e), _ = !0);
                try {
                    a = await ez(y, t, i, h, r)
                } catch (e) {
                    if (e instanceof TypeError || e instanceof P || e instanceof A) throw e;
                    a = ew(g)
                }
                try {
                    s = v(e.iv)
                } catch (e) {
                    throw new P("Failed to base64url decode the iv")
                }
                try {
                    d = v(e.tag)
                } catch (e) {
                    throw new P("Failed to base64url decode the tag")
                }
                let w = c.encode(null !== (n = e.protected) && void 0 !== n ? n : "");
                f = void 0 !== e.aad ? l(w, c.encode("."), c.encode(e.aad)) : w;
                try {
                    p = v(e.ciphertext)
                } catch (e) {
                    throw new P("Failed to base64url decode the ciphertext")
                }
                let S = await ee(g, a, p, s, d, f);
                "DEF" === h.zip && (S = await ((null == r ? void 0 : r.inflateRaw) || et)(S));
                let k = {
                    plaintext: S
                };
                if (void 0 !== e.protected && (k.protectedHeader = o), void 0 !== e.aad) try {
                    k.additionalAuthenticatedData = v(e.aad)
                } catch (e) {
                    throw new P("Failed to base64url decode the aad")
                }
                return (void 0 !== e.unprotected && (k.sharedUnprotectedHeader = e.unprotected), void 0 !== e.header && (k.unprotectedHeader = e.header), _) ? { ...k,
                    key: t
                } : k
            }
            async function eX(e, t, r) {
                if (e instanceof Uint8Array && (e = u.decode(e)), "string" != typeof e) throw new P("Compact JWE must be a string or Uint8Array");
                let {
                    0: n,
                    1: o,
                    2: i,
                    3: a,
                    4: s,
                    length: c
                } = e.split(".");
                if (5 !== c) throw new P("Invalid Compact JWE");
                let l = await eY({
                        ciphertext: a,
                        iv: i || void 0,
                        protected: n || void 0,
                        tag: s || void 0,
                        encrypted_key: o || void 0
                    }, t, r),
                    d = {
                        plaintext: l.plaintext,
                        protectedHeader: l.protectedHeader
                    };
                return "function" == typeof t ? { ...d,
                    key: l.key
                } : d
            }
            async function eZ(e, t, r) {
                if (!eo(e)) throw new P("General JWE must be an object");
                if (!Array.isArray(e.recipients) || !e.recipients.every(eo)) throw new P("JWE Recipients missing or incorrect type");
                if (!e.recipients.length) throw new P("JWE Recipients has no members");
                for (let n of e.recipients) try {
                    return await eY({
                        aad: e.aad,
                        ciphertext: e.ciphertext,
                        encrypted_key: n.encrypted_key,
                        header: n.header,
                        iv: e.iv,
                        protected: e.protected,
                        tag: e.tag,
                        unprotected: e.unprotected
                    }, t, r)
                } catch (e) {}
                throw new k
            }
            let eQ = async e => {
                if (e instanceof Uint8Array) return {
                    kty: "oct",
                    k: m(e)
                };
                if (!a(e)) throw TypeError(G(e, ...X, "Uint8Array"));
                if (!e.extractable) throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
                let {
                    ext: t,
                    key_ops: r,
                    alg: n,
                    use: o,
                    ...s
                } = await i.subtle.exportKey("jwk", e);
                return s
            };
            async function e0(e) {
                return eA(e)
            }
            async function e1(e) {
                return ek(e)
            }
            async function e2(e) {
                return eQ(e)
            }
            async function e4(e, t, r, n, o = {}) {
                let i, a, s;
                switch (eL(e, r, "encrypt"), e) {
                    case "dir":
                        s = r;
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        {
                            if (!ef(r)) throw new A("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                            let {
                                apu: c,
                                apv: u
                            } = o,
                            {
                                epk: l
                            } = o;l || (l = (await ed(r)).privateKey);
                            let {
                                x: d,
                                y: f,
                                crv: p,
                                kty: h
                            } = await e2(l),
                            y = await el(r, l, "ECDH-ES" === e ? t : e, "ECDH-ES" === e ? e_(t) : parseInt(e.slice(-5, -2), 10), c, u);
                            if (a = {
                                    epk: {
                                        x: d,
                                        crv: p,
                                        kty: h
                                    }
                                }, "EC" === h && (a.epk.y = f), c && (a.apu = m(c)), u && (a.apv = m(u)), "ECDH-ES" === e) {
                                s = y;
                                break
                            }
                            s = n || ew(t);
                            let g = e.slice(-6);i = await ec(g, y, s);
                            break
                        }
                    case "RSA1_5":
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        s = n || ew(t), i = await eb(e, r, s);
                        break;
                    case "PBES2-HS256+A128KW":
                    case "PBES2-HS384+A192KW":
                    case "PBES2-HS512+A256KW":
                        {
                            s = n || ew(t);
                            let {
                                p2c: c,
                                p2s: u
                            } = o;
                            ({
                                encryptedKey: i,
                                ...a
                            } = await eh(e, r, s, c, u));
                            break
                        }
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        s = n || ew(t), i = await ec(e, r, s);
                        break;
                    case "A128GCMKW":
                    case "A192GCMKW":
                    case "A256GCMKW":
                        {
                            s = n || ew(t);
                            let {
                                iv: c
                            } = o;
                            ({
                                encryptedKey: i,
                                ...a
                            } = await eF(e, r, s, c));
                            break
                        }
                    default:
                        throw new A('Invalid or unsupported "alg" (JWE Algorithm) header value')
                }
                return {
                    cek: s,
                    encryptedKey: i,
                    parameters: a
                }
            }
            let e5 = Symbol();
            class e6 {
                constructor(e) {
                    if (!(e instanceof Uint8Array)) throw TypeError("plaintext must be an instance of Uint8Array");
                    this._plaintext = e
                }
                setKeyManagementParameters(e) {
                    if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
                    return this._keyManagementParameters = e, this
                }
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setSharedUnprotectedHeader(e) {
                    if (this._sharedUnprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
                    return this._sharedUnprotectedHeader = e, this
                }
                setUnprotectedHeader(e) {
                    if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                    return this._unprotectedHeader = e, this
                }
                setAdditionalAuthenticatedData(e) {
                    return this._aad = e, this
                }
                setContentEncryptionKey(e) {
                    if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
                    return this._cek = e, this
                }
                setInitializationVector(e) {
                    if (this._iv) throw TypeError("setInitializationVector can only be called once");
                    return this._iv = e, this
                }
                async encrypt(e, t) {
                    let r, n, o, i, a, s, d;
                    if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) throw new P("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
                    if (!en(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) throw new P("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                    let f = { ...this._protectedHeader,
                        ...this._unprotectedHeader,
                        ...this._sharedUnprotectedHeader
                    };
                    if (eG(P, new Map, null == t ? void 0 : t.crit, this._protectedHeader, f), void 0 !== f.zip) {
                        if (!this._protectedHeader || !this._protectedHeader.zip) throw new P('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                        if ("DEF" !== f.zip) throw new A('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
                    }
                    let {
                        alg: p,
                        enc: h
                    } = f;
                    if ("string" != typeof p || !p) throw new P('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                    if ("string" != typeof h || !h) throw new P('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                    if ("dir" === p) {
                        if (this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Encryption")
                    } else if ("ECDH-ES" === p && this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement"); {
                        let o;
                        ({
                            cek: n,
                            encryptedKey: r,
                            parameters: o
                        } = await e4(p, h, e, this._cek, this._keyManagementParameters)), o && (t && e5 in t ? this._unprotectedHeader ? this._unprotectedHeader = { ...this._unprotectedHeader,
                            ...o
                        } : this.setUnprotectedHeader(o) : this._protectedHeader ? this._protectedHeader = { ...this._protectedHeader,
                            ...o
                        } : this.setProtectedHeader(o))
                    }
                    if (this._iv || (this._iv = N(h)), i = this._protectedHeader ? c.encode(m(JSON.stringify(this._protectedHeader))) : c.encode(""), this._aad ? (a = m(this._aad), o = l(i, c.encode("."), c.encode(a))) : o = i, "DEF" === f.zip) {
                        let e = await ((null == t ? void 0 : t.deflateRaw) || er)(this._plaintext);
                        ({
                            ciphertext: s,
                            tag: d
                        } = await eJ(h, e, n, this._iv, o))
                    } else({
                        ciphertext: s,
                        tag: d
                    } = await eJ(h, this._plaintext, n, this._iv, o));
                    let y = {
                        ciphertext: m(s),
                        iv: m(this._iv),
                        tag: m(d)
                    };
                    return r && (y.encrypted_key = m(r)), a && (y.aad = a), this._protectedHeader && (y.protected = u.decode(i)), this._sharedUnprotectedHeader && (y.unprotected = this._sharedUnprotectedHeader), this._unprotectedHeader && (y.header = this._unprotectedHeader), y
                }
            }
            class e3 {
                constructor(e, t, r) {
                    this.parent = e, this.key = t, this.options = r
                }
                setUnprotectedHeader(e) {
                    if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                    return this.unprotectedHeader = e, this
                }
                addRecipient(...e) {
                    return this.parent.addRecipient(...e)
                }
                encrypt(...e) {
                    return this.parent.encrypt(...e)
                }
                done() {
                    return this.parent
                }
            }
            class e8 {
                constructor(e) {
                    this._recipients = [], this._plaintext = e
                }
                addRecipient(e, t) {
                    let r = new e3(this, e, {
                        crit: null == t ? void 0 : t.crit
                    });
                    return this._recipients.push(r), r
                }
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setSharedUnprotectedHeader(e) {
                    if (this._unprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
                    return this._unprotectedHeader = e, this
                }
                setAdditionalAuthenticatedData(e) {
                    return this._aad = e, this
                }
                async encrypt(e) {
                    var t, r, n;
                    let o;
                    if (!this._recipients.length) throw new P("at least one recipient must be added");
                    if (e = {
                            deflateRaw: null == e ? void 0 : e.deflateRaw
                        }, 1 === this._recipients.length) {
                        let [t] = this._recipients, r = await new e6(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(t.unprotectedHeader).encrypt(t.key, { ...t.options,
                            ...e
                        }), n = {
                            ciphertext: r.ciphertext,
                            iv: r.iv,
                            recipients: [{}],
                            tag: r.tag
                        };
                        return r.aad && (n.aad = r.aad), r.protected && (n.protected = r.protected), r.unprotected && (n.unprotected = r.unprotected), r.encrypted_key && (n.recipients[0].encrypted_key = r.encrypted_key), r.header && (n.recipients[0].header = r.header), n
                    }
                    for (let e = 0; e < this._recipients.length; e++) {
                        let t = this._recipients[e];
                        if (!en(this._protectedHeader, this._unprotectedHeader, t.unprotectedHeader)) throw new P("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                        let r = { ...this._protectedHeader,
                                ...this._unprotectedHeader,
                                ...t.unprotectedHeader
                            },
                            {
                                alg: n
                            } = r;
                        if ("string" != typeof n || !n) throw new P('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                        if ("dir" === n || "ECDH-ES" === n) throw new P('"dir" and "ECDH-ES" alg may only be used with a single recipient');
                        if ("string" != typeof r.enc || !r.enc) throw new P('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                        if (o) {
                            if (o !== r.enc) throw new P('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients')
                        } else o = r.enc;
                        if (eG(P, new Map, t.options.crit, this._protectedHeader, r), void 0 !== r.zip && (!this._protectedHeader || !this._protectedHeader.zip)) throw new P('JWE "zip" (Compression Algorithm) Header MUST be integrity protected')
                    }
                    let i = ew(o),
                        a = {
                            ciphertext: "",
                            iv: "",
                            recipients: [],
                            tag: ""
                        };
                    for (let s = 0; s < this._recipients.length; s++) {
                        let c = this._recipients[s],
                            u = {};
                        a.recipients.push(u);
                        let l = ({ ...this._protectedHeader,
                            ...this._unprotectedHeader,
                            ...c.unprotectedHeader
                        }).alg.startsWith("PBES2") ? 2048 + s : void 0;
                        if (0 === s) {
                            let t = await new e6(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(i).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(c.unprotectedHeader).setKeyManagementParameters({
                                p2c: l
                            }).encrypt(c.key, { ...c.options,
                                ...e,
                                [e5]: !0
                            });
                            a.ciphertext = t.ciphertext, a.iv = t.iv, a.tag = t.tag, t.aad && (a.aad = t.aad), t.protected && (a.protected = t.protected), t.unprotected && (a.unprotected = t.unprotected), u.encrypted_key = t.encrypted_key, t.header && (u.header = t.header);
                            continue
                        }
                        let {
                            encryptedKey: d,
                            parameters: f
                        } = await e4((null === (t = c.unprotectedHeader) || void 0 === t ? void 0 : t.alg) || (null === (r = this._protectedHeader) || void 0 === r ? void 0 : r.alg) || (null === (n = this._unprotectedHeader) || void 0 === n ? void 0 : n.alg), o, c.key, i, {
                            p2c: l
                        });
                        u.encrypted_key = m(d), (c.unprotectedHeader || f) && (u.header = { ...c.unprotectedHeader,
                            ...f
                        })
                    }
                    return a
                }
            }

            function e7(e, t) {
                let r = `SHA-${e.slice(-3)}`;
                switch (e) {
                    case "HS256":
                    case "HS384":
                    case "HS512":
                        return {
                            hash: r,
                            name: "HMAC"
                        };
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        return {
                            hash: r,
                            name: "RSA-PSS",
                            saltLength: e.slice(-3) >> 3
                        };
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        return {
                            hash: r,
                            name: "RSASSA-PKCS1-v1_5"
                        };
                    case "ES256":
                    case "ES384":
                    case "ES512":
                        return {
                            hash: r,
                            name: "ECDSA",
                            namedCurve: t.namedCurve
                        };
                    case "EdDSA":
                        return {
                            name: t.name
                        };
                    default:
                        throw new A(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                }
            }

            function e9(e, t, r) {
                if (a(t)) return ! function(e, t, ...r) {
                    switch (t) {
                        case "HS256":
                        case "HS384":
                        case "HS512":
                            {
                                if (!K(e.algorithm, "HMAC")) throw B("HMAC");
                                let r = parseInt(t.slice(2), 10);
                                if (J(e.algorithm.hash) !== r) throw B(`SHA-${r}`, "algorithm.hash");
                                break
                            }
                        case "RS256":
                        case "RS384":
                        case "RS512":
                            {
                                if (!K(e.algorithm, "RSASSA-PKCS1-v1_5")) throw B("RSASSA-PKCS1-v1_5");
                                let r = parseInt(t.slice(2), 10);
                                if (J(e.algorithm.hash) !== r) throw B(`SHA-${r}`, "algorithm.hash");
                                break
                            }
                        case "PS256":
                        case "PS384":
                        case "PS512":
                            {
                                if (!K(e.algorithm, "RSA-PSS")) throw B("RSA-PSS");
                                let r = parseInt(t.slice(2), 10);
                                if (J(e.algorithm.hash) !== r) throw B(`SHA-${r}`, "algorithm.hash");
                                break
                            }
                        case "EdDSA":
                            if ("Ed25519" !== e.algorithm.name && "Ed448" !== e.algorithm.name) throw B("Ed25519 or Ed448");
                            break;
                        case "ES256":
                        case "ES384":
                        case "ES512":
                            {
                                if (!K(e.algorithm, "ECDSA")) throw B("ECDSA");
                                let r = function(e) {
                                    switch (e) {
                                        case "ES256":
                                            return "P-256";
                                        case "ES384":
                                            return "P-384";
                                        case "ES512":
                                            return "P-521";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(t);
                                if (e.algorithm.namedCurve !== r) throw B(r, "algorithm.namedCurve");
                                break
                            }
                        default:
                            throw TypeError("CryptoKey does not support this operation")
                    }
                    F(e, r)
                }(t, e, r), t;
                if (t instanceof Uint8Array) {
                    if (!e.startsWith("HS")) throw TypeError(G(t, ...X));
                    return i.subtle.importKey("raw", t, {
                        hash: `SHA-${e.slice(-3)}`,
                        name: "HMAC"
                    }, !1, [r])
                }
                throw TypeError(G(t, ...X, "Uint8Array"))
            }
            let te = async (e, t, r, n) => {
                let o = await e9(e, t, "verify");
                em(e, o);
                let a = e7(e, o.algorithm);
                try {
                    return await i.subtle.verify(a, o, r, n)
                } catch (e) {
                    return !1
                }
            };
            async function tt(e, t, r) {
                var n;
                let o, i;
                if (!eo(e)) throw new x("Flattened JWS must be an object");
                if (void 0 === e.protected && void 0 === e.header) throw new x('Flattened JWS must have either of the "protected" or "header" members');
                if (void 0 !== e.protected && "string" != typeof e.protected) throw new x("JWS Protected Header incorrect type");
                if (void 0 === e.payload) throw new x("JWS Payload missing");
                if ("string" != typeof e.signature) throw new x("JWS Signature missing or incorrect type");
                if (void 0 !== e.header && !eo(e.header)) throw new x("JWS Unprotected Header incorrect type");
                let a = {};
                if (e.protected) try {
                    let t = v(e.protected);
                    a = JSON.parse(u.decode(t))
                } catch (e) {
                    throw new x("JWS Protected Header is invalid")
                }
                if (!en(a, e.header)) throw new x("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                let s = { ...a,
                        ...e.header
                    },
                    d = eG(x, new Map([
                        ["b64", !0]
                    ]), null == r ? void 0 : r.crit, a, s),
                    f = !0;
                if (d.has("b64") && "boolean" != typeof(f = a.b64)) throw new x('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                let {
                    alg: p
                } = s;
                if ("string" != typeof p || !p) throw new x('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                let h = r && eV("algorithms", r.algorithms);
                if (h && !h.has(p)) throw new E('"alg" (Algorithm) Header Parameter not allowed');
                if (f) {
                    if ("string" != typeof e.payload) throw new x("JWS Payload must be a string")
                } else if ("string" != typeof e.payload && !(e.payload instanceof Uint8Array)) throw new x("JWS Payload must be a string or an Uint8Array instance");
                let y = !1;
                "function" == typeof t && (t = await t(a, e), y = !0), eL(p, t, "verify");
                let g = l(c.encode(null !== (n = e.protected) && void 0 !== n ? n : ""), c.encode("."), "string" == typeof e.payload ? c.encode(e.payload) : e.payload);
                try {
                    o = v(e.signature)
                } catch (e) {
                    throw new x("Failed to base64url decode the signature")
                }
                if (!await te(p, t, o, g)) throw new H;
                if (f) try {
                    i = v(e.payload)
                } catch (e) {
                    throw new x("Failed to base64url decode the payload")
                } else i = "string" == typeof e.payload ? c.encode(e.payload) : e.payload;
                let m = {
                    payload: i
                };
                return (void 0 !== e.protected && (m.protectedHeader = a), void 0 !== e.header && (m.unprotectedHeader = e.header), y) ? { ...m,
                    key: t
                } : m
            }
            async function tr(e, t, r) {
                if (e instanceof Uint8Array && (e = u.decode(e)), "string" != typeof e) throw new x("Compact JWS must be a string or Uint8Array");
                let {
                    0: n,
                    1: o,
                    2: i,
                    length: a
                } = e.split(".");
                if (3 !== a) throw new x("Invalid Compact JWS");
                let s = await tt({
                        payload: o,
                        protected: n,
                        signature: i
                    }, t, r),
                    c = {
                        payload: s.payload,
                        protectedHeader: s.protectedHeader
                    };
                return "function" == typeof t ? { ...c,
                    key: s.key
                } : c
            }
            async function tn(e, t, r) {
                if (!eo(e)) throw new x("General JWS must be an object");
                if (!Array.isArray(e.signatures) || !e.signatures.every(eo)) throw new x("JWS Signatures missing or incorrect type");
                for (let n of e.signatures) try {
                    return await tt({
                        header: n.header,
                        payload: e.payload,
                        protected: n.protected,
                        signature: n.signature
                    }, t, r)
                } catch (e) {}
                throw new H
            }
            var to = e => Math.floor(e.getTime() / 1e3);
            let ti = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
            var ta = e => {
                let t = ti.exec(e);
                if (!t) throw TypeError("Invalid time period format");
                let r = parseFloat(t[1]);
                switch (t[2].toLowerCase()) {
                    case "sec":
                    case "secs":
                    case "second":
                    case "seconds":
                    case "s":
                        return Math.round(r);
                    case "minute":
                    case "minutes":
                    case "min":
                    case "mins":
                    case "m":
                        return Math.round(60 * r);
                    case "hour":
                    case "hours":
                    case "hr":
                    case "hrs":
                    case "h":
                        return Math.round(3600 * r);
                    case "day":
                    case "days":
                    case "d":
                        return Math.round(86400 * r);
                    case "week":
                    case "weeks":
                    case "w":
                        return Math.round(604800 * r);
                    default:
                        return Math.round(31557600 * r)
                }
            };
            let ts = e => e.toLowerCase().replace(/^application\//, ""),
                tc = (e, t) => "string" == typeof e ? t.includes(e) : !!Array.isArray(e) && t.some(Set.prototype.has.bind(new Set(e)));
            var tu = (e, t, r = {}) => {
                let n, o;
                let {
                    typ: i
                } = r;
                if (i && ("string" != typeof e.typ || ts(e.typ) !== ts(i))) throw new w('unexpected "typ" JWT header value', "typ", "check_failed");
                try {
                    n = JSON.parse(u.decode(t))
                } catch (e) {}
                if (!eo(n)) throw new T("JWT Claims Set must be a top-level JSON object");
                let {
                    requiredClaims: a = [],
                    issuer: s,
                    subject: c,
                    audience: l,
                    maxTokenAge: d
                } = r;
                for (let e of (void 0 !== d && a.push("iat"), void 0 !== l && a.push("aud"), void 0 !== c && a.push("sub"), void 0 !== s && a.push("iss"), new Set(a.reverse())))
                    if (!(e in n)) throw new w(`missing required "${e}" claim`, e, "missing");
                if (s && !(Array.isArray(s) ? s : [s]).includes(n.iss)) throw new w('unexpected "iss" claim value', "iss", "check_failed");
                if (c && n.sub !== c) throw new w('unexpected "sub" claim value', "sub", "check_failed");
                if (l && !tc(n.aud, "string" == typeof l ? [l] : l)) throw new w('unexpected "aud" claim value', "aud", "check_failed");
                switch (typeof r.clockTolerance) {
                    case "string":
                        o = ta(r.clockTolerance);
                        break;
                    case "number":
                        o = r.clockTolerance;
                        break;
                    case "undefined":
                        o = 0;
                        break;
                    default:
                        throw TypeError("Invalid clockTolerance option type")
                }
                let {
                    currentDate: f
                } = r, p = to(f || new Date);
                if ((void 0 !== n.iat || d) && "number" != typeof n.iat) throw new w('"iat" claim must be a number', "iat", "invalid");
                if (void 0 !== n.nbf) {
                    if ("number" != typeof n.nbf) throw new w('"nbf" claim must be a number', "nbf", "invalid");
                    if (n.nbf > p + o) throw new w('"nbf" claim timestamp check failed', "nbf", "check_failed")
                }
                if (void 0 !== n.exp) {
                    if ("number" != typeof n.exp) throw new w('"exp" claim must be a number', "exp", "invalid");
                    if (n.exp <= p - o) throw new S('"exp" claim timestamp check failed', "exp", "check_failed")
                }
                if (d) {
                    let e = p - n.iat;
                    if (e - o > ("number" == typeof d ? d : ta(d))) throw new S('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
                    if (e < 0 - o) throw new w('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed")
                }
                return n
            };
            async function tl(e, t, r) {
                var n;
                let o = await tr(e, t, r);
                if ((null === (n = o.protectedHeader.crit) || void 0 === n ? void 0 : n.includes("b64")) && !1 === o.protectedHeader.b64) throw new T("JWTs MUST NOT use unencoded payload");
                let i = {
                    payload: tu(o.protectedHeader, o.payload, r),
                    protectedHeader: o.protectedHeader
                };
                return "function" == typeof t ? { ...i,
                    key: o.key
                } : i
            }
            async function td(e, t, r) {
                let n = await eX(e, t, r),
                    o = tu(n.protectedHeader, n.plaintext, r),
                    {
                        protectedHeader: i
                    } = n;
                if (void 0 !== i.iss && i.iss !== o.iss) throw new w('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
                if (void 0 !== i.sub && i.sub !== o.sub) throw new w('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
                if (void 0 !== i.aud && JSON.stringify(i.aud) !== JSON.stringify(o.aud)) throw new w('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
                let a = {
                    payload: o,
                    protectedHeader: i
                };
                return "function" == typeof t ? { ...a,
                    key: n.key
                } : a
            }
            class tf {
                constructor(e) {
                    this._flattened = new e6(e)
                }
                setContentEncryptionKey(e) {
                    return this._flattened.setContentEncryptionKey(e), this
                }
                setInitializationVector(e) {
                    return this._flattened.setInitializationVector(e), this
                }
                setProtectedHeader(e) {
                    return this._flattened.setProtectedHeader(e), this
                }
                setKeyManagementParameters(e) {
                    return this._flattened.setKeyManagementParameters(e), this
                }
                async encrypt(e, t) {
                    let r = await this._flattened.encrypt(e, t);
                    return [r.protected, r.encrypted_key, r.iv, r.ciphertext, r.tag].join(".")
                }
            }
            let tp = async (e, t, r) => {
                let n = await e9(e, t, "sign");
                return em(e, n), new Uint8Array(await i.subtle.sign(e7(e, n.algorithm), n, r))
            };
            class th {
                constructor(e) {
                    if (!(e instanceof Uint8Array)) throw TypeError("payload must be an instance of Uint8Array");
                    this._payload = e
                }
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setUnprotectedHeader(e) {
                    if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                    return this._unprotectedHeader = e, this
                }
                async sign(e, t) {
                    let r;
                    if (!this._protectedHeader && !this._unprotectedHeader) throw new x("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
                    if (!en(this._protectedHeader, this._unprotectedHeader)) throw new x("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                    let n = { ...this._protectedHeader,
                            ...this._unprotectedHeader
                        },
                        o = eG(x, new Map([
                            ["b64", !0]
                        ]), null == t ? void 0 : t.crit, this._protectedHeader, n),
                        i = !0;
                    if (o.has("b64") && "boolean" != typeof(i = this._protectedHeader.b64)) throw new x('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                    let {
                        alg: a
                    } = n;
                    if ("string" != typeof a || !a) throw new x('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                    eL(a, e, "sign");
                    let s = this._payload;
                    i && (s = c.encode(m(s)));
                    let d = l(r = this._protectedHeader ? c.encode(m(JSON.stringify(this._protectedHeader))) : c.encode(""), c.encode("."), s),
                        f = {
                            signature: m(await tp(a, e, d)),
                            payload: ""
                        };
                    return i && (f.payload = u.decode(s)), this._unprotectedHeader && (f.header = this._unprotectedHeader), this._protectedHeader && (f.protected = u.decode(r)), f
                }
            }
            class ty {
                constructor(e) {
                    this._flattened = new th(e)
                }
                setProtectedHeader(e) {
                    return this._flattened.setProtectedHeader(e), this
                }
                async sign(e, t) {
                    let r = await this._flattened.sign(e, t);
                    if (void 0 === r.payload) throw TypeError("use the flattened module for creating JWS with b64: false");
                    return `${r.protected}.${r.payload}.${r.signature}`
                }
            }
            class tg {
                constructor(e, t, r) {
                    this.parent = e, this.key = t, this.options = r
                }
                setProtectedHeader(e) {
                    if (this.protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                    return this.protectedHeader = e, this
                }
                setUnprotectedHeader(e) {
                    if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
                    return this.unprotectedHeader = e, this
                }
                addSignature(...e) {
                    return this.parent.addSignature(...e)
                }
                sign(...e) {
                    return this.parent.sign(...e)
                }
                done() {
                    return this.parent
                }
            }
            class tm {
                constructor(e) {
                    this._signatures = [], this._payload = e
                }
                addSignature(e, t) {
                    let r = new tg(this, e, t);
                    return this._signatures.push(r), r
                }
                async sign() {
                    if (!this._signatures.length) throw new x("at least one signature must be added");
                    let e = {
                        signatures: [],
                        payload: ""
                    };
                    for (let t = 0; t < this._signatures.length; t++) {
                        let r = this._signatures[t],
                            n = new th(this._payload);
                        n.setProtectedHeader(r.protectedHeader), n.setUnprotectedHeader(r.unprotectedHeader);
                        let {
                            payload: o,
                            ...i
                        } = await n.sign(r.key, r.options);
                        if (0 === t) e.payload = o;
                        else if (e.payload !== o) throw new x("inconsistent use of JWS Unencoded Payload (RFC7797)");
                        e.signatures.push(i)
                    }
                    return e
                }
            }
            class tb {
                constructor(e) {
                    if (!eo(e)) throw TypeError("JWT Claims Set MUST be an object");
                    this._payload = e
                }
                setIssuer(e) {
                    return this._payload = { ...this._payload,
                        iss: e
                    }, this
                }
                setSubject(e) {
                    return this._payload = { ...this._payload,
                        sub: e
                    }, this
                }
                setAudience(e) {
                    return this._payload = { ...this._payload,
                        aud: e
                    }, this
                }
                setJti(e) {
                    return this._payload = { ...this._payload,
                        jti: e
                    }, this
                }
                setNotBefore(e) {
                    return "number" == typeof e ? this._payload = { ...this._payload,
                        nbf: e
                    } : this._payload = { ...this._payload,
                        nbf: to(new Date) + ta(e)
                    }, this
                }
                setExpirationTime(e) {
                    return "number" == typeof e ? this._payload = { ...this._payload,
                        exp: e
                    } : this._payload = { ...this._payload,
                        exp: to(new Date) + ta(e)
                    }, this
                }
                setIssuedAt(e) {
                    return void 0 === e ? this._payload = { ...this._payload,
                        iat: to(new Date)
                    } : this._payload = { ...this._payload,
                        iat: e
                    }, this
                }
            }
            class tv extends tb {
                setProtectedHeader(e) {
                    return this._protectedHeader = e, this
                }
                async sign(e, t) {
                    var r;
                    let n = new ty(c.encode(JSON.stringify(this._payload)));
                    if (n.setProtectedHeader(this._protectedHeader), Array.isArray(null === (r = this._protectedHeader) || void 0 === r ? void 0 : r.crit) && this._protectedHeader.crit.includes("b64") && !1 === this._protectedHeader.b64) throw new T("JWTs MUST NOT use unencoded payload");
                    return n.sign(e, t)
                }
            }
            class t_ extends tb {
                setProtectedHeader(e) {
                    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
                    return this._protectedHeader = e, this
                }
                setKeyManagementParameters(e) {
                    if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
                    return this._keyManagementParameters = e, this
                }
                setContentEncryptionKey(e) {
                    if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
                    return this._cek = e, this
                }
                setInitializationVector(e) {
                    if (this._iv) throw TypeError("setInitializationVector can only be called once");
                    return this._iv = e, this
                }
                replicateIssuerAsHeader() {
                    return this._replicateIssuerAsHeader = !0, this
                }
                replicateSubjectAsHeader() {
                    return this._replicateSubjectAsHeader = !0, this
                }
                replicateAudienceAsHeader() {
                    return this._replicateAudienceAsHeader = !0, this
                }
                async encrypt(e, t) {
                    let r = new tf(c.encode(JSON.stringify(this._payload)));
                    return this._replicateIssuerAsHeader && (this._protectedHeader = { ...this._protectedHeader,
                        iss: this._payload.iss
                    }), this._replicateSubjectAsHeader && (this._protectedHeader = { ...this._protectedHeader,
                        sub: this._payload.sub
                    }), this._replicateAudienceAsHeader && (this._protectedHeader = { ...this._protectedHeader,
                        aud: this._payload.aud
                    }), r.setProtectedHeader(this._protectedHeader), this._iv && r.setInitializationVector(this._iv), this._cek && r.setContentEncryptionKey(this._cek), this._keyManagementParameters && r.setKeyManagementParameters(this._keyManagementParameters), r.encrypt(e, t)
                }
            }
            let tw = (e, t) => {
                if ("string" != typeof e || !e) throw new j(`${t} missing or invalid`)
            };
            async function tS(e, t) {
                let r;
                if (!eo(e)) throw TypeError("JWK must be an object");
                if (null != t || (t = "sha256"), "sha256" !== t && "sha384" !== t && "sha512" !== t) throw TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
                switch (e.kty) {
                    case "EC":
                        tw(e.crv, '"crv" (Curve) Parameter'), tw(e.x, '"x" (X Coordinate) Parameter'), tw(e.y, '"y" (Y Coordinate) Parameter'), r = {
                            crv: e.crv,
                            kty: e.kty,
                            x: e.x,
                            y: e.y
                        };
                        break;
                    case "OKP":
                        tw(e.crv, '"crv" (Subtype of Key Pair) Parameter'), tw(e.x, '"x" (Public Key) Parameter'), r = {
                            crv: e.crv,
                            kty: e.kty,
                            x: e.x
                        };
                        break;
                    case "RSA":
                        tw(e.e, '"e" (Exponent) Parameter'), tw(e.n, '"n" (Modulus) Parameter'), r = {
                            e: e.e,
                            kty: e.kty,
                            n: e.n
                        };
                        break;
                    case "oct":
                        tw(e.k, '"k" (Key Value) Parameter'), r = {
                            k: e.k,
                            kty: e.kty
                        };
                        break;
                    default:
                        throw new A('"kty" (Key Type) Parameter missing or unsupported')
                }
                let n = c.encode(JSON.stringify(r));
                return m(await s(t, n))
            }
            async function tE(e, t) {
                null != t || (t = "sha256");
                let r = await tS(e, t);
                return `urn:ietf:params:oauth:jwk-thumbprint:sha-${t.slice(-3)}:${r}`
            }
            async function tA(e, t) {
                let r = { ...e,
                    ...null == t ? void 0 : t.header
                };
                if (!eo(r.jwk)) throw new x('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
                let n = await eN({ ...r.jwk,
                    ext: !0
                }, r.alg, !0);
                if (n instanceof Uint8Array || "public" !== n.type) throw new x('"jwk" (JSON Web Key) Header Parameter must be a public key');
                return n
            }

            function tk(e) {
                return e && "object" == typeof e && Array.isArray(e.keys) && e.keys.every(tO)
            }

            function tO(e) {
                return eo(e)
            }
            class tP {
                constructor(e) {
                    if (this._cached = new WeakMap, !tk(e)) throw new R("JSON Web Key Set malformed");
                    this._jwks = "function" == typeof structuredClone ? structuredClone(e) : JSON.parse(JSON.stringify(e))
                }
                async getKey(e, t) {
                    let {
                        alg: r,
                        kid: n
                    } = { ...e,
                        ...null == t ? void 0 : t.header
                    }, o = function(e) {
                        switch ("string" == typeof e && e.slice(0, 2)) {
                            case "RS":
                            case "PS":
                                return "RSA";
                            case "ES":
                                return "EC";
                            case "Ed":
                                return "OKP";
                            default:
                                throw new A('Unsupported "alg" value for a JSON Web Key Set')
                        }
                    }(r), i = this._jwks.keys.filter(e => {
                        let t = o === e.kty;
                        if (t && "string" == typeof n && (t = n === e.kid), t && "string" == typeof e.alg && (t = r === e.alg), t && "string" == typeof e.use && (t = "sig" === e.use), t && Array.isArray(e.key_ops) && (t = e.key_ops.includes("verify")), t && "EdDSA" === r && (t = "Ed25519" === e.crv || "Ed448" === e.crv), t) switch (r) {
                            case "ES256":
                                t = "P-256" === e.crv;
                                break;
                            case "ES256K":
                                t = "secp256k1" === e.crv;
                                break;
                            case "ES384":
                                t = "P-384" === e.crv;
                                break;
                            case "ES512":
                                t = "P-521" === e.crv
                        }
                        return t
                    }), {
                        0: a,
                        length: s
                    } = i;
                    if (0 === s) throw new C;
                    if (1 !== s) {
                        let e = new I,
                            {
                                _cached: t
                            } = this;
                        throw e[Symbol.asyncIterator] = async function*() {
                            for (let e of i) try {
                                yield await tx(t, e, r)
                            } catch (e) {
                                continue
                            }
                        }, e
                    }
                    return tx(this._cached, a, r)
                }
            }
            async function tx(e, t, r) {
                let n = e.get(t) || e.set(t, {}).get(t);
                if (void 0 === n[r]) {
                    let e = await eN({ ...t,
                        ext: !0
                    }, r);
                    if (e instanceof Uint8Array || "public" !== e.type) throw new R("JSON Web Key Set members must be public keys");
                    n[r] = e
                }
                return n[r]
            }

            function tT(e) {
                let t = new tP(e);
                return async function(e, r) {
                    return t.getKey(e, r)
                }
            }
            let tj = async (e, t, r) => {
                let n, o;
                let i = !1;
                "function" == typeof AbortController && (n = new AbortController, o = setTimeout(() => {
                    i = !0, n.abort()
                }, t));
                let a = await fetch(e.href, {
                    signal: n ? n.signal : void 0,
                    redirect: "manual",
                    headers: r.headers
                }).catch(e => {
                    if (i) throw new U;
                    throw e
                });
                if (void 0 !== o && clearTimeout(o), 200 !== a.status) throw new _("Expected 200 OK from the JSON Web Key Set HTTP response");
                try {
                    return await a.json()
                } catch (e) {
                    throw new _("Failed to parse the JSON Web Key Set HTTP response as JSON")
                }
            };
            class tR extends tP {
                constructor(e, t) {
                    if (super({
                            keys: []
                        }), this._jwks = void 0, !(e instanceof URL)) throw TypeError("url must be an instance of URL");
                    this._url = new URL(e.href), this._options = {
                        agent: null == t ? void 0 : t.agent,
                        headers: null == t ? void 0 : t.headers
                    }, this._timeoutDuration = "number" == typeof(null == t ? void 0 : t.timeoutDuration) ? null == t ? void 0 : t.timeoutDuration : 5e3, this._cooldownDuration = "number" == typeof(null == t ? void 0 : t.cooldownDuration) ? null == t ? void 0 : t.cooldownDuration : 3e4, this._cacheMaxAge = "number" == typeof(null == t ? void 0 : t.cacheMaxAge) ? null == t ? void 0 : t.cacheMaxAge : 6e5
                }
                coolingDown() {
                    return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cooldownDuration
                }
                fresh() {
                    return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cacheMaxAge
                }
                async getKey(e, t) {
                    this._jwks && this.fresh() || await this.reload();
                    try {
                        return await super.getKey(e, t)
                    } catch (r) {
                        if (r instanceof C && !1 === this.coolingDown()) return await this.reload(), super.getKey(e, t);
                        throw r
                    }
                }
                async reload() {
                    this._pendingFetch && ("undefined" != typeof WebSocketPair || "undefined" != typeof navigator && "Cloudflare-Workers" === navigator.userAgent || "undefined" != typeof EdgeRuntime && "vercel" === EdgeRuntime) && (this._pendingFetch = void 0), this._pendingFetch || (this._pendingFetch = tj(this._url, this._timeoutDuration, this._options).then(e => {
                        if (!tk(e)) throw new R("JSON Web Key Set malformed");
                        this._jwks = {
                            keys: e.keys
                        }, this._jwksTimestamp = Date.now(), this._pendingFetch = void 0
                    }).catch(e => {
                        throw this._pendingFetch = void 0, e
                    })), await this._pendingFetch
                }
            }

            function tC(e, t) {
                let r = new tR(e, t);
                return async function(e, t) {
                    return r.getKey(e, t)
                }
            }
            class tI extends tb {
                encode() {
                    let e = m(JSON.stringify({
                            alg: "none"
                        })),
                        t = m(JSON.stringify(this._payload));
                    return `${e}.${t}.`
                }
                static decode(e, t) {
                    let r;
                    if ("string" != typeof e) throw new T("Unsecured JWT must be a string");
                    let {
                        0: n,
                        1: o,
                        2: i,
                        length: a
                    } = e.split(".");
                    if (3 !== a || "" !== i) throw new T("Invalid Unsecured JWT");
                    try {
                        if (r = JSON.parse(u.decode(v(n))), "none" !== r.alg) throw Error()
                    } catch (e) {
                        throw new T("Invalid Unsecured JWT")
                    }
                    return {
                        payload: tu(r, v(o), t),
                        header: r
                    }
                }
            }
            let tU = m,
                tH = v;

            function tM(e) {
                let t;
                if ("string" == typeof e) {
                    let r = e.split(".");
                    (3 === r.length || 5 === r.length) && ([t] = r)
                } else if ("object" == typeof e && e) {
                    if ("protected" in e) t = e.protected;
                    else throw TypeError("Token does not contain a Protected Header")
                }
                try {
                    if ("string" != typeof t || !t) throw Error();
                    let e = JSON.parse(u.decode(tH(t)));
                    if (!eo(e)) throw Error();
                    return e
                } catch (e) {
                    throw TypeError("Invalid Token or Protected Header formatting")
                }
            }

            function tD(e) {
                let t, r;
                if ("string" != typeof e) throw new T("JWTs must use Compact JWS serialization, JWT must be a string");
                let {
                    1: n,
                    length: o
                } = e.split(".");
                if (5 === o) throw new T("Only JWTs using Compact JWS serialization can be decoded");
                if (3 !== o) throw new T("Invalid JWT");
                if (!n) throw new T("JWTs must contain a payload");
                try {
                    t = tH(n)
                } catch (e) {
                    throw new T("Failed to base64url decode the payload")
                }
                try {
                    r = JSON.parse(u.decode(t))
                } catch (e) {
                    throw new T("Failed to parse the decoded payload as JSON")
                }
                if (!eo(r)) throw new T("Invalid JWT Claims Set");
                return r
            }
            async function tN(e, t) {
                var r;
                let n, o, a;
                switch (e) {
                    case "HS256":
                    case "HS384":
                    case "HS512":
                        n = parseInt(e.slice(-3), 10), o = {
                            name: "HMAC",
                            hash: `SHA-${n}`,
                            length: n
                        }, a = ["sign", "verify"];
                        break;
                    case "A128CBC-HS256":
                    case "A192CBC-HS384":
                    case "A256CBC-HS512":
                        return M(new Uint8Array((n = parseInt(e.slice(-3), 10)) >> 3));
                    case "A128KW":
                    case "A192KW":
                    case "A256KW":
                        o = {
                            name: "AES-KW",
                            length: n = parseInt(e.slice(1, 4), 10)
                        }, a = ["wrapKey", "unwrapKey"];
                        break;
                    case "A128GCMKW":
                    case "A192GCMKW":
                    case "A256GCMKW":
                    case "A128GCM":
                    case "A192GCM":
                    case "A256GCM":
                        o = {
                            name: "AES-GCM",
                            length: n = parseInt(e.slice(1, 4), 10)
                        }, a = ["encrypt", "decrypt"];
                        break;
                    default:
                        throw new A('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                }
                return i.subtle.generateKey(o, null !== (r = null == t ? void 0 : t.extractable) && void 0 !== r && r, a)
            }

            function tW(e) {
                var t;
                let r = null !== (t = null == e ? void 0 : e.modulusLength) && void 0 !== t ? t : 2048;
                if ("number" != typeof r || r < 2048) throw new A("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
                return r
            }
            async function t$(e, t) {
                var r, n, o;
                let a, s;
                switch (e) {
                    case "PS256":
                    case "PS384":
                    case "PS512":
                        a = {
                            name: "RSA-PSS",
                            hash: `SHA-${e.slice(-3)}`,
                            publicExponent: new Uint8Array([1, 0, 1]),
                            modulusLength: tW(t)
                        }, s = ["sign", "verify"];
                        break;
                    case "RS256":
                    case "RS384":
                    case "RS512":
                        a = {
                            name: "RSASSA-PKCS1-v1_5",
                            hash: `SHA-${e.slice(-3)}`,
                            publicExponent: new Uint8Array([1, 0, 1]),
                            modulusLength: tW(t)
                        }, s = ["sign", "verify"];
                        break;
                    case "RSA-OAEP":
                    case "RSA-OAEP-256":
                    case "RSA-OAEP-384":
                    case "RSA-OAEP-512":
                        a = {
                            name: "RSA-OAEP",
                            hash: `SHA-${parseInt(e.slice(-3),10)||1}`,
                            publicExponent: new Uint8Array([1, 0, 1]),
                            modulusLength: tW(t)
                        }, s = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
                        break;
                    case "ES256":
                        a = {
                            name: "ECDSA",
                            namedCurve: "P-256"
                        }, s = ["sign", "verify"];
                        break;
                    case "ES384":
                        a = {
                            name: "ECDSA",
                            namedCurve: "P-384"
                        }, s = ["sign", "verify"];
                        break;
                    case "ES512":
                        a = {
                            name: "ECDSA",
                            namedCurve: "P-521"
                        }, s = ["sign", "verify"];
                        break;
                    case "EdDSA":
                        s = ["sign", "verify"];
                        let c = null !== (r = null == t ? void 0 : t.crv) && void 0 !== r ? r : "Ed25519";
                        switch (c) {
                            case "Ed25519":
                            case "Ed448":
                                a = {
                                    name: c
                                };
                                break;
                            default:
                                throw new A("Invalid or unsupported crv option provided")
                        }
                        break;
                    case "ECDH-ES":
                    case "ECDH-ES+A128KW":
                    case "ECDH-ES+A192KW":
                    case "ECDH-ES+A256KW":
                        {
                            s = ["deriveKey", "deriveBits"];
                            let e = null !== (n = null == t ? void 0 : t.crv) && void 0 !== n ? n : "P-256";
                            switch (e) {
                                case "P-256":
                                case "P-384":
                                case "P-521":
                                    a = {
                                        name: "ECDH",
                                        namedCurve: e
                                    };
                                    break;
                                case "X25519":
                                case "X448":
                                    a = {
                                        name: e
                                    };
                                    break;
                                default:
                                    throw new A("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448")
                            }
                            break
                        }
                    default:
                        throw new A('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                }
                return i.subtle.generateKey(a, null !== (o = null == t ? void 0 : t.extractable) && void 0 !== o && o, s)
            }
            async function tL(e, t) {
                return t$(e, t)
            }
            async function tB(e, t) {
                return tN(e, t)
            }
            var tK = "WebCryptoAPI"
        },
        82696: function(e) {
            "use strict";
            e.exports = JSON.parse('{"name":"openid-client","version":"5.7.1","description":"OpenID Connect Relying Party (RP, Client) implementation for Node.js runtime, supports passportjs","keywords":["auth","authentication","basic","certified","client","connect","dynamic","electron","hybrid","identity","implicit","oauth","oauth2","oidc","openid","passport","relying party","strategy"],"homepage":"https://github.com/panva/openid-client","repository":"panva/openid-client","funding":{"url":"https://github.com/sponsors/panva"},"license":"MIT","author":"Filip Skokan <panva.ip@gmail.com>","exports":{"types":"./types/index.d.ts","import":"./lib/index.mjs","require":"./lib/index.js"},"main":"./lib/index.js","types":"./types/index.d.ts","files":["lib","types/index.d.ts"],"scripts":{"format":"npx prettier --loglevel silent --write ./lib ./test ./certification ./types","test":"mocha test/**/*.test.js"},"dependencies":{"jose":"^4.15.9","lru-cache":"^6.0.0","object-hash":"^2.2.0","oidc-token-hash":"^5.0.3"},"devDependencies":{"@types/node":"^16.18.106","@types/passport":"^1.0.16","base64url":"^3.0.1","chai":"^4.5.0","mocha":"^10.7.3","nock":"^13.5.5","prettier":"^2.8.8","readable-mock-req":"^0.2.2","sinon":"^9.2.4","timekeeper":"^2.3.1"},"standard-version":{"scripts":{"postchangelog":"sed -i \'\' -e \'s/### \\\\[/## [/g\' CHANGELOG.md"},"types":[{"type":"feat","section":"Features"},{"type":"fix","section":"Fixes"},{"type":"chore","hidden":true},{"type":"docs","hidden":true},{"type":"style","hidden":true},{"type":"refactor","section":"Refactor","hidden":false},{"type":"perf","section":"Performance","hidden":false},{"type":"test","hidden":true}]}}')
        }
    }
]);