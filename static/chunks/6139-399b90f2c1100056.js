(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6139], {
        63228: function(r) {
            r.exports = function r(t, e) {
                "use strict";
                var n, i, u = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                    o = /(^[ ]*|[ ]*$)/g,
                    a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                    s = /^0x[0-9a-f]+$/i,
                    f = /^0/,
                    c = function(t) {
                        return r.insensitive && ("" + t).toLowerCase() || "" + t
                    },
                    l = c(t).replace(o, "") || "",
                    h = c(e).replace(o, "") || "",
                    p = l.replace(u, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    m = h.replace(u, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    D = parseInt(l.match(s), 16) || 1 !== p.length && l.match(a) && Date.parse(l),
                    d = parseInt(h.match(s), 16) || D && h.match(a) && Date.parse(h) || null;
                if (d) {
                    if (D < d) return -1;
                    if (D > d) return 1
                }
                for (var v = 0, g = Math.max(p.length, m.length); v < g; v++) {
                    if (n = !(p[v] || "").match(f) && parseFloat(p[v]) || p[v] || 0, i = !(m[v] || "").match(f) && parseFloat(m[v]) || m[v] || 0, isNaN(n) !== isNaN(i)) return isNaN(n) ? 1 : -1;
                    if (typeof n != typeof i && (n += "", i += ""), n < i) return -1;
                    if (n > i) return 1
                }
                return 0
            }
        },
        36377: function(r, t, e) {
            var n = e(84832),
                i = e(68652),
                u = e(90801),
                o = e(92030),
                a = e(3618),
                s = e(89049),
                f = e(51971);
            f.alea = n, f.xor128 = i, f.xorwow = u, f.xorshift7 = o, f.xor4096 = a, f.tychei = s, r.exports = f
        },
        84832: function(r, t, e) {
            var n;
            ! function(r, i, u) {
                function o(r) {
                    var t, e = this,
                        n = (t = 4022871197, function(r) {
                            r = String(r);
                            for (var e = 0; e < r.length; e++) {
                                var n = .02519603282416938 * (t += r.charCodeAt(e));
                                t = n >>> 0, n -= t, n *= t, t = n >>> 0, n -= t, t += 4294967296 * n
                            }
                            return (t >>> 0) * 23283064365386963e-26
                        });
                    e.next = function() {
                        var r = 2091639 * e.s0 + 23283064365386963e-26 * e.c;
                        return e.s0 = e.s1, e.s1 = e.s2, e.s2 = r - (e.c = 0 | r)
                    }, e.c = 1, e.s0 = n(" "), e.s1 = n(" "), e.s2 = n(" "), e.s0 -= n(r), e.s0 < 0 && (e.s0 += 1), e.s1 -= n(r), e.s1 < 0 && (e.s1 += 1), e.s2 -= n(r), e.s2 < 0 && (e.s2 += 1)
                }

                function a(r, t) {
                    return t.c = r.c, t.s0 = r.s0, t.s1 = r.s1, t.s2 = r.s2, t
                }

                function s(r, t) {
                    var e = new o(r),
                        n = t && t.state,
                        i = e.next;
                    return i.int32 = function() {
                        return 4294967296 * e.next() | 0
                    }, i.double = function() {
                        return i() + (2097152 * i() | 0) * 11102230246251565e-32
                    }, i.quick = i, n && ("object" == typeof n && a(n, e), i.state = function() {
                        return a(e, {})
                    }), i
                }
                i && i.exports ? i.exports = s : e.amdD && e.amdO ? void 0 !== (n = (function() {
                    return s
                }).call(t, e, t, i)) && (i.exports = n) : this.alea = s
            }(0, r = e.nmd(r), e.amdD)
        },
        89049: function(r, t, e) {
            var n;
            ! function(r, i, u) {
                function o(r) {
                    var t = this,
                        e = "";
                    t.next = function() {
                        var r = t.b,
                            e = t.c,
                            n = t.d,
                            i = t.a;
                        return r = r << 25 ^ r >>> 7 ^ e, e = e - n | 0, n = n << 24 ^ n >>> 8 ^ i, i = i - r | 0, t.b = r = r << 20 ^ r >>> 12 ^ e, t.c = e = e - n | 0, t.d = n << 16 ^ e >>> 16 ^ i, t.a = i - r | 0
                    }, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, r === Math.floor(r) ? (t.a = r / 4294967296 | 0, t.b = 0 | r) : e += r;
                    for (var n = 0; n < e.length + 20; n++) t.b ^= 0 | e.charCodeAt(n), t.next()
                }

                function a(r, t) {
                    return t.a = r.a, t.b = r.b, t.c = r.c, t.d = r.d, t
                }

                function s(r, t) {
                    var e = new o(r),
                        n = t && t.state,
                        i = function() {
                            return (e.next() >>> 0) / 4294967296
                        };
                    return i.double = function() {
                        do var r = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / 2097152; while (0 === r);
                        return r
                    }, i.int32 = e.next, i.quick = i, n && ("object" == typeof n && a(n, e), i.state = function() {
                        return a(e, {})
                    }), i
                }
                i && i.exports ? i.exports = s : e.amdD && e.amdO ? void 0 !== (n = (function() {
                    return s
                }).call(t, e, t, i)) && (i.exports = n) : this.tychei = s
            }(0, r = e.nmd(r), e.amdD)
        },
        68652: function(r, t, e) {
            var n;
            ! function(r, i, u) {
                function o(r) {
                    var t = this,
                        e = "";
                    t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function() {
                        var r = t.x ^ t.x << 11;
                        return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ r ^ r >>> 8
                    }, r === (0 | r) ? t.x = r : e += r;
                    for (var n = 0; n < e.length + 64; n++) t.x ^= 0 | e.charCodeAt(n), t.next()
                }

                function a(r, t) {
                    return t.x = r.x, t.y = r.y, t.z = r.z, t.w = r.w, t
                }

                function s(r, t) {
                    var e = new o(r),
                        n = t && t.state,
                        i = function() {
                            return (e.next() >>> 0) / 4294967296
                        };
                    return i.double = function() {
                        do var r = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / 2097152; while (0 === r);
                        return r
                    }, i.int32 = e.next, i.quick = i, n && ("object" == typeof n && a(n, e), i.state = function() {
                        return a(e, {})
                    }), i
                }
                i && i.exports ? i.exports = s : e.amdD && e.amdO ? void 0 !== (n = (function() {
                    return s
                }).call(t, e, t, i)) && (i.exports = n) : this.xor128 = s
            }(0, r = e.nmd(r), e.amdD)
        },
        3618: function(r, t, e) {
            var n;
            ! function(r, i, u) {
                function o(r) {
                    var t = this;
                    t.next = function() {
                            var r, e, n = t.w,
                                i = t.X,
                                u = t.i;
                            return t.w = n = n + 1640531527 | 0, e = i[u + 34 & 127], r = i[u = u + 1 & 127], e ^= e << 13, r ^= r << 17, e ^= e >>> 15, r ^= r >>> 12, e = i[u] = e ^ r, t.i = u, e + (n ^ n >>> 16) | 0
                        },
                        function(r, t) {
                            var e, n, i, u, o, a = [],
                                s = 128;
                            for (t === (0 | t) ? (n = t, t = null) : (t += "\0", n = 0, s = Math.max(s, t.length)), i = 0, u = -32; u < s; ++u) t && (n ^= t.charCodeAt((u + 32) % t.length)), 0 === u && (o = n), n ^= n << 10, n ^= n >>> 15, n ^= n << 4, n ^= n >>> 13, u >= 0 && (o = o + 1640531527 | 0, i = 0 == (e = a[127 & u] ^= n + o) ? i + 1 : 0);
                            for (i >= 128 && (a[127 & (t && t.length || 0)] = -1), i = 127, u = 512; u > 0; --u) n = a[i + 34 & 127], e = a[i = i + 1 & 127], n ^= n << 13, e ^= e << 17, n ^= n >>> 15, e ^= e >>> 12, a[i] = n ^ e;
                            r.w = o, r.X = a, r.i = i
                        }(t, r)
                }

                function a(r, t) {
                    return t.i = r.i, t.w = r.w, t.X = r.X.slice(), t
                }

                function s(r, t) {
                    null == r && (r = +new Date);
                    var e = new o(r),
                        n = t && t.state,
                        i = function() {
                            return (e.next() >>> 0) / 4294967296
                        };
                    return i.double = function() {
                        do var r = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / 2097152; while (0 === r);
                        return r
                    }, i.int32 = e.next, i.quick = i, n && (n.X && a(n, e), i.state = function() {
                        return a(e, {})
                    }), i
                }
                i && i.exports ? i.exports = s : e.amdD && e.amdO ? void 0 !== (n = (function() {
                    return s
                }).call(t, e, t, i)) && (i.exports = n) : this.xor4096 = s
            }(0, r = e.nmd(r), e.amdD)
        },
        92030: function(r, t, e) {
            var n;
            ! function(r, i, u) {
                function o(r) {
                    var t = this;
                    t.next = function() {
                            var r, e, n = t.x,
                                i = t.i;
                            return r = n[i], r ^= r >>> 7, e = r ^ r << 24 ^ ((r = n[i + 1 & 7]) ^ r >>> 10) ^ ((r = n[i + 3 & 7]) ^ r >>> 3) ^ ((r = n[i + 4 & 7]) ^ r << 7), r = n[i + 7 & 7], r ^= r << 13, e ^= r ^ r << 9, n[i] = e, t.i = i + 1 & 7, e
                        },
                        function(r, t) {
                            var e, n = [];
                            if (t === (0 | t)) n[0] = t;
                            else
                                for (e = 0, t = "" + t; e < t.length; ++e) n[7 & e] = n[7 & e] << 15 ^ t.charCodeAt(e) + n[e + 1 & 7] << 13;
                            for (; n.length < 8;) n.push(0);
                            for (e = 0; e < 8 && 0 === n[e]; ++e);
                            for (8 == e ? n[7] = -1 : n[e], r.x = n, r.i = 0, e = 256; e > 0; --e) r.next()
                        }(t, r)
                }

                function a(r, t) {
                    return t.x = r.x.slice(), t.i = r.i, t
                }

                function s(r, t) {
                    null == r && (r = +new Date);
                    var e = new o(r),
                        n = t && t.state,
                        i = function() {
                            return (e.next() >>> 0) / 4294967296
                        };
                    return i.double = function() {
                        do var r = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / 2097152; while (0 === r);
                        return r
                    }, i.int32 = e.next, i.quick = i, n && (n.x && a(n, e), i.state = function() {
                        return a(e, {})
                    }), i
                }
                i && i.exports ? i.exports = s : e.amdD && e.amdO ? void 0 !== (n = (function() {
                    return s
                }).call(t, e, t, i)) && (i.exports = n) : this.xorshift7 = s
            }(0, r = e.nmd(r), e.amdD)
        },
        90801: function(r, t, e) {
            var n;
            ! function(r, i, u) {
                function o(r) {
                    var t = this,
                        e = "";
                    t.next = function() {
                        var r = t.x ^ t.x >>> 2;
                        return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ (r ^ r << 1)) | 0
                    }, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, r === (0 | r) ? t.x = r : e += r;
                    for (var n = 0; n < e.length + 64; n++) t.x ^= 0 | e.charCodeAt(n), n == e.length && (t.d = t.x << 10 ^ t.x >>> 4), t.next()
                }

                function a(r, t) {
                    return t.x = r.x, t.y = r.y, t.z = r.z, t.w = r.w, t.v = r.v, t.d = r.d, t
                }

                function s(r, t) {
                    var e = new o(r),
                        n = t && t.state,
                        i = function() {
                            return (e.next() >>> 0) / 4294967296
                        };
                    return i.double = function() {
                        do var r = ((e.next() >>> 11) + (e.next() >>> 0) / 4294967296) / 2097152; while (0 === r);
                        return r
                    }, i.int32 = e.next, i.quick = i, n && ("object" == typeof n && a(n, e), i.state = function() {
                        return a(e, {})
                    }), i
                }
                i && i.exports ? i.exports = s : e.amdD && e.amdO ? void 0 !== (n = (function() {
                    return s
                }).call(t, e, t, i)) && (i.exports = n) : this.xorwow = s
            }(0, r = e.nmd(r), e.amdD)
        },
        51971: function(r, t, e) {
            var n;
            ! function(i, u, o) {
                var a, s = o.pow(256, 6),
                    f = o.pow(2, 52),
                    c = 2 * f;

                function l(r, t, e) {
                    var n = [],
                        l = m(function r(t, e) {
                            var n, i = [],
                                u = typeof t;
                            if (e && "object" == u)
                                for (n in t) try {
                                    i.push(r(t[n], e - 1))
                                } catch (r) {}
                            return i.length ? i : "string" == u ? t : t + "\0"
                        }((t = !0 == t ? {
                            entropy: !0
                        } : t || {}).entropy ? [r, D(u)] : null == r ? function() {
                            try {
                                var r;
                                return a && (r = a.randomBytes) ? r = r(256) : (r = new Uint8Array(256), (i.crypto || i.msCrypto).getRandomValues(r)), D(r)
                            } catch (r) {
                                var t = i.navigator,
                                    e = t && t.plugins;
                                return [+new Date, i, e, i.screen, D(u)]
                            }
                        }() : r, 3), n),
                        d = new h(n),
                        v = function() {
                            for (var r = d.g(6), t = s, e = 0; r < f;) r = (r + e) * 256, t *= 256, e = d.g(1);
                            for (; r >= c;) r /= 2, t /= 2, e >>>= 1;
                            return (r + e) / t
                        };
                    return v.int32 = function() {
                        return 0 | d.g(4)
                    }, v.quick = function() {
                        return d.g(4) / 4294967296
                    }, v.double = v, m(D(d.S), u), (t.pass || e || function(r, t, e, n) {
                        return (n && (n.S && p(n, d), r.state = function() {
                            return p(d, {})
                        }), e) ? (o.random = r, t) : r
                    })(v, l, "global" in t ? t.global : this == o, t.state)
                }

                function h(r) {
                    var t, e = r.length,
                        n = this,
                        i = 0,
                        u = n.i = n.j = 0,
                        o = n.S = [];
                    for (e || (r = [e++]); i < 256;) o[i] = i++;
                    for (i = 0; i < 256; i++) o[i] = o[u = 255 & u + r[i % e] + (t = o[i])], o[u] = t;
                    (n.g = function(r) {
                        for (var t, e = 0, i = n.i, u = n.j, o = n.S; r--;) t = o[i = 255 & i + 1], e = 256 * e + o[255 & (o[i] = o[u = 255 & u + t]) + (o[u] = t)];
                        return n.i = i, n.j = u, e
                    })(256)
                }

                function p(r, t) {
                    return t.i = r.i, t.j = r.j, t.S = r.S.slice(), t
                }

                function m(r, t) {
                    for (var e, n = r + "", i = 0; i < n.length;) t[255 & i] = 255 & (e ^= 19 * t[255 & i]) + n.charCodeAt(i++);
                    return D(t)
                }

                function D(r) {
                    return String.fromCharCode.apply(0, r)
                }
                if (m(o.random(), u), r.exports) {
                    r.exports = l;
                    try {
                        a = e(75042)
                    } catch (r) {}
                } else void 0 !== (n = (function() {
                    return l
                }).call(t, e, t, r)) && (r.exports = n)
            }("undefined" != typeof self ? self : this, [], Math)
        },
        44814: function(r) {
            var t;
            t = function() {
                "use strict";

                function r() {
                    return !0
                }

                function t() {
                    return !1
                }

                function e() {}
                let n = "Argument is not a typed-function.";
                return function i() {
                    let u, o;

                    function a(r) {
                        return "object" == typeof r && null !== r && r.constructor === Object
                    }
                    let s = [{
                            name: "number",
                            test: function(r) {
                                return "number" == typeof r
                            }
                        }, {
                            name: "string",
                            test: function(r) {
                                return "string" == typeof r
                            }
                        }, {
                            name: "boolean",
                            test: function(r) {
                                return "boolean" == typeof r
                            }
                        }, {
                            name: "Function",
                            test: function(r) {
                                return "function" == typeof r
                            }
                        }, {
                            name: "Array",
                            test: Array.isArray
                        }, {
                            name: "Date",
                            test: function(r) {
                                return r instanceof Date
                            }
                        }, {
                            name: "RegExp",
                            test: function(r) {
                                return r instanceof RegExp
                            }
                        }, {
                            name: "Object",
                            test: a
                        }, {
                            name: "null",
                            test: function(r) {
                                return null === r
                            }
                        }, {
                            name: "undefined",
                            test: function(r) {
                                return void 0 === r
                            }
                        }],
                        f = {
                            name: "any",
                            test: r,
                            isAny: !0
                        },
                        c = 0,
                        l = {
                            createCount: 0
                        };

                    function h(r) {
                        let t;
                        let e = u.get(r);
                        if (e) return e;
                        let n = 'Unknown type "' + r + '"',
                            i = r.toLowerCase();
                        for (t of o)
                            if (t.toLowerCase() === i) {
                                n += '. Did you mean "' + t + '" ?';
                                break
                            }
                        throw TypeError(n)
                    }

                    function p(r) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "any",
                            e = t ? h(t).index : o.length,
                            n = [];
                        for (let t = 0; t < r.length; ++t) {
                            if (!r[t] || "string" != typeof r[t].name || "function" != typeof r[t].test) throw TypeError("Object with properties {name: string, test: function} expected");
                            let i = r[t].name;
                            if (u.has(i)) throw TypeError('Duplicate type name "' + i + '"');
                            n.push(i), u.set(i, {
                                name: i,
                                test: r[t].test,
                                isAny: r[t].isAny,
                                index: e + t,
                                conversionsTo: []
                            })
                        }
                        let i = o.slice(e);
                        o = o.slice(0, e).concat(n).concat(i);
                        for (let r = e + n.length; r < o.length; ++r) u.get(o[r]).index = r
                    }

                    function m() {
                        u = new Map, o = [], c = 0, p([f], !1)
                    }

                    function D(r) {
                        let t = o.filter(t => {
                            let e = u.get(t);
                            return !e.isAny && e.test(r)
                        });
                        return t.length ? t : ["any"]
                    }

                    function d(r) {
                        return r && "function" == typeof r && "_typedFunctionData" in r
                    }

                    function v(r, t, e) {
                        let i, u;
                        if (!d(r)) throw TypeError(n);
                        let o = e && e.exact,
                            a = x(Array.isArray(t) ? t.join(",") : t),
                            s = g(a);
                        if (!o || s in r.signatures) {
                            let t = r._typedFunctionData.signatureMap.get(s);
                            if (t) return t
                        }
                        let f = a.length;
                        if (o) {
                            let t;
                            for (t in i = [], r.signatures) i.push(r._typedFunctionData.signatureMap.get(t))
                        } else i = r._typedFunctionData.signatures;
                        for (let r = 0; r < f; ++r) {
                            let t;
                            let e = a[r],
                                n = [];
                            for (t of i) {
                                let i = E(t.params, r);
                                if (i && (!e.restParam || i.restParam)) {
                                    if (!i.hasAny) {
                                        let r = b(i);
                                        if (e.types.some(t => !r.has(t.name))) continue
                                    }
                                    n.push(t)
                                }
                            }
                            if (0 === (i = n).length) break
                        }
                        for (u of i)
                            if (u.params.length <= f) return u;
                        throw TypeError("Signature not found (signature: " + (r.name || "unnamed") + "(" + g(a, ", ") + "))")
                    }

                    function g(r) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
                        return r.map(r => r.name).join(t)
                    }

                    function y(r) {
                        let t = function(r) {
                                if (0 === r.length) return [];
                                let t = r.map(h);
                                r.length > 1 && t.sort((r, t) => r.index - t.index);
                                let e = t[0].conversionsTo;
                                if (1 === r.length) return e;
                                e = e.concat([]);
                                let n = new Set(r);
                                for (let r = 1; r < t.length; ++r) {
                                    let i;
                                    for (i of t[r].conversionsTo) n.has(i.from) || (e.push(i), n.add(i.from))
                                }
                                return e
                            }(r.types.map(r => r.name)),
                            e = r.hasAny,
                            n = r.name,
                            i = t.map(function(r) {
                                let t = h(r.from);
                                return e = t.isAny || e, n += "|" + r.from, {
                                    name: r.from,
                                    typeIndex: t.index,
                                    test: t.test,
                                    isAny: t.isAny,
                                    conversion: r,
                                    conversionIndex: r.index
                                }
                            });
                        return {
                            types: r.types.concat(i),
                            name: n,
                            hasAny: e,
                            hasConversion: i.length > 0,
                            restParam: r.restParam
                        }
                    }

                    function b(r) {
                        return r.typeSet || (r.typeSet = new Set, r.types.forEach(t => r.typeSet.add(t.name))), r.typeSet
                    }

                    function x(r) {
                        let t = [];
                        if ("string" != typeof r) throw TypeError("Signatures must be strings");
                        let e = r.trim();
                        if ("" === e) return t;
                        let n = e.split(",");
                        for (let r = 0; r < n.length; ++r) {
                            let e = function(r) {
                                let t = 0 === r.indexOf("..."),
                                    e = (t ? r.length > 3 ? r.slice(3) : "any" : r).split("|").map(r => h(r.trim())),
                                    n = !1,
                                    i = t ? "..." : "";
                                return {
                                    types: e.map(function(r) {
                                        return n = r.isAny || n, i += r.name + "|", {
                                            name: r.name,
                                            typeIndex: r.index,
                                            test: r.test,
                                            isAny: r.isAny,
                                            conversion: null,
                                            conversionIndex: -1
                                        }
                                    }),
                                    name: i.slice(0, -1),
                                    hasAny: n,
                                    hasConversion: !1,
                                    restParam: t
                                }
                            }(n[r].trim());
                            if (e.restParam && r !== n.length - 1) throw SyntaxError('Unexpected rest parameter "' + n[r] + '": only allowed for the last parameter');
                            if (0 === e.types.length) return null;
                            t.push(e)
                        }
                        return t
                    }

                    function w(r) {
                        let t = I(r);
                        return !!t && t.restParam
                    }

                    function A(t) {
                        if (!t || 0 === t.types.length) return r;
                        if (1 === t.types.length) return h(t.types[0].name).test;
                        if (2 === t.types.length) {
                            let r = h(t.types[0].name).test,
                                e = h(t.types[1].name).test;
                            return function(t) {
                                return r(t) || e(t)
                            }
                        } {
                            let r = t.types.map(function(r) {
                                return h(r.name).test
                            });
                            return function(t) {
                                for (let e = 0; e < r.length; e++)
                                    if (r[e](t)) return !0;
                                return !1
                            }
                        }
                    }

                    function E(r, t) {
                        return t < r.length ? r[t] : w(r) ? I(r) : null
                    }

                    function F(r, t) {
                        let e = E(r, t);
                        return e ? b(e) : new Set
                    }

                    function C(r) {
                        return null === r.conversion || void 0 === r.conversion
                    }

                    function _(r, t) {
                        let e = new Set;
                        return r.forEach(r => {
                            let n;
                            for (n of F(r.params, t)) e.add(n)
                        }), e.has("any") ? ["any"] : Array.from(e)
                    }

                    function M(r, t, e) {
                        let n, i, u;
                        let o = r || "unnamed",
                            a = e;
                        for (u = 0; u < t.length; u++) {
                            let r = [];
                            if (a.forEach(e => {
                                    let n = A(E(e.params, u));
                                    (u < e.params.length || w(e.params)) && n(t[u]) && r.push(e)
                                }), 0 === r.length) {
                                if ((i = _(a, u)).length > 0) {
                                    let r = D(t[u]);
                                    return (n = TypeError("Unexpected type of argument in function " + o + " (expected: " + i.join(" or ") + ", actual: " + r.join(" | ") + ", index: " + u + ")")).data = {
                                        category: "wrongType",
                                        fn: o,
                                        index: u,
                                        actual: r,
                                        expected: i
                                    }, n
                                }
                            } else a = r
                        }
                        let s = a.map(function(r) {
                            return w(r.params) ? 1 / 0 : r.params.length
                        });
                        if (t.length < Math.min.apply(null, s)) return (n = TypeError("Too few arguments in function " + o + " (expected: " + (i = _(a, u)).join(" or ") + ", index: " + t.length + ")")).data = {
                            category: "tooFewArgs",
                            fn: o,
                            index: t.length,
                            expected: i
                        }, n;
                        let f = Math.max.apply(null, s);
                        if (t.length > f) return (n = TypeError("Too many arguments in function " + o + " (expected: " + f + ", actual: " + t.length + ")")).data = {
                            category: "tooManyArgs",
                            fn: o,
                            index: t.length,
                            expectedLength: f
                        }, n;
                        let c = [];
                        for (let r = 0; r < t.length; ++r) c.push(D(t[r]).join("|"));
                        return (n = TypeError('Arguments of type "' + c.join(", ") + '" do not match any of the defined signatures of function ' + o + ".")).data = {
                            category: "mismatch",
                            actual: c
                        }, n
                    }

                    function N(r) {
                        let t = o.length + 1;
                        for (let e = 0; e < r.types.length; e++) C(r.types[e]) && (t = Math.min(t, r.types[e].typeIndex));
                        return t
                    }

                    function B(r) {
                        let t = c + 1;
                        for (let e = 0; e < r.types.length; e++) C(r.types[e]) || (t = Math.min(t, r.types[e].conversionIndex));
                        return t
                    }

                    function S(r, t) {
                        let e, n;
                        let i = r.params,
                            u = t.params,
                            o = I(i),
                            a = I(u),
                            s = w(i),
                            f = w(u);
                        if (s && o.hasAny) {
                            if (!f || !a.hasAny) return 1
                        } else if (f && a.hasAny) return -1;
                        let c = 0,
                            l = 0;
                        for (e of i) e.hasAny && ++c, e.hasConversion && ++l;
                        let h = 0,
                            p = 0;
                        for (e of u) e.hasAny && ++h, e.hasConversion && ++p;
                        if (c !== h) return c - h;
                        if (s && o.hasConversion) {
                            if (!f || !a.hasConversion) return 1
                        } else if (f && a.hasConversion) return -1;
                        if (l !== p) return l - p;
                        if (s) {
                            if (!f) return 1
                        } else if (f) return -1;
                        let m = (i.length - u.length) * (s ? -1 : 1);
                        if (0 !== m) return m;
                        let D = [],
                            d = 0;
                        for (let r = 0; r < i.length; ++r) {
                            let t = function(r, t) {
                                if (r.hasAny) {
                                    if (!t.hasAny) return 1
                                } else if (t.hasAny) return -1;
                                if (r.restParam) {
                                    if (!t.restParam) return 1
                                } else if (t.restParam) return -1;
                                if (r.hasConversion) {
                                    if (!t.hasConversion) return 1
                                } else if (t.hasConversion) return -1;
                                let e = N(r) - N(t);
                                if (e < 0) return -1;
                                if (e > 0) return 1;
                                let n = B(r) - B(t);
                                return n < 0 ? -1 : n > 0 ? 1 : 0
                            }(i[r], u[r]);
                            D.push(t), d += t
                        }
                        if (0 !== d) return d;
                        for (n of D)
                            if (0 !== n) return n;
                        return 0
                    }

                    function T(r) {
                        let t, e, n, i;
                        let u = [],
                            o = [];
                        switch (r.types.forEach(function(r) {
                            r.conversion && (u.push(h(r.conversion.from).test), o.push(r.conversion.convert))
                        }), o.length) {
                            case 0:
                                return function(r) {
                                    return r
                                };
                            case 1:
                                return t = u[0], n = o[0],
                                    function(r) {
                                        return t(r) ? n(r) : r
                                    };
                            case 2:
                                return t = u[0], e = u[1], n = o[0], i = o[1],
                                    function(r) {
                                        return t(r) ? n(r) : e(r) ? i(r) : r
                                    };
                            default:
                                return function(r) {
                                    for (let t = 0; t < o.length; t++)
                                        if (u[t](r)) return o[t](r);
                                    return r
                                }
                        }
                    }

                    function z(r, t, e) {
                        throw M(r, t, e)
                    }

                    function O(r) {
                        return j(r, 0, r.length - 1)
                    }

                    function I(r) {
                        return r[r.length - 1]
                    }

                    function j(r, t, e) {
                        return Array.prototype.slice.call(r, t, e)
                    }

                    function k(r, t) {
                        return {
                            referTo: {
                                references: r,
                                callback: t
                            }
                        }
                    }

                    function P(r) {
                        if ("function" != typeof r) throw TypeError("Callback function expected as first argument");
                        return {
                            referToSelf: {
                                callback: r
                            }
                        }
                    }

                    function q(r) {
                        return r && "object" == typeof r.referTo && Array.isArray(r.referTo.references) && "function" == typeof r.referTo.callback
                    }

                    function U(r) {
                        return r && "object" == typeof r.referToSelf && "function" == typeof r.referToSelf.callback
                    }

                    function R(r, t) {
                        if (!r) return t;
                        if (t && t !== r) {
                            let e = Error("Function names do not match (expected: " + r + ", actual: " + t + ")");
                            throw e.data = {
                                actual: t,
                                expected: r
                            }, e
                        }
                        return r
                    }
                    m(), p(s);
                    let L = l;

                    function Z(r) {
                        if (!r || "string" != typeof r.from || "string" != typeof r.to || "function" != typeof r.convert) throw TypeError("Object with properties {from: string, to: string, convert: function} expected");
                        if (r.to === r.from) throw SyntaxError('Illegal to define conversion from "' + r.from + '" to itself.')
                    }
                    return (l = function(r) {
                        let n = "string" == typeof r,
                            i = n ? 1 : 0,
                            u = n ? r : "",
                            o = {};
                        for (let r = i; r < arguments.length; ++r) {
                            let t;
                            let e = arguments[r],
                                i = {};
                            if ("function" == typeof e ? (t = e.name, "string" == typeof e.signature ? i[e.signature] = e : d(e) && (i = e.signatures)) : a(e) && (i = e, n || (t = function(r) {
                                    let t;
                                    for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (d(r[e]) || "string" == typeof r[e].signature) && (t = R(t, r[e].name));
                                    return t
                                }(e))), 0 === Object.keys(i).length) {
                                let t = TypeError("Argument to 'typed' at index " + r + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
                                throw t.data = {
                                    index: r,
                                    argument: e
                                }, t
                            }
                            n || (u = R(u, t)),
                                function(r, t) {
                                    let e;
                                    for (e in t)
                                        if (Object.prototype.hasOwnProperty.call(t, e)) {
                                            if (e in r && t[e] !== r[e]) {
                                                let n = Error('Signature "' + e + '" is defined twice');
                                                throw n.data = {
                                                    signature: e,
                                                    sourceFunction: t[e],
                                                    destFunction: r[e]
                                                }, n
                                            }
                                            r[e] = t[e]
                                        }
                                }(o, i)
                        }
                        return function(r, n) {
                            let i, u;
                            if (l.createCount++, 0 === Object.keys(n).length) throw SyntaxError("No signatures provided");
                            l.warnAgainstDeprecatedThis && function(r) {
                                let t = /\bthis(\(|\.signatures\b)/;
                                Object.keys(r).forEach(e => {
                                    let n = r[e];
                                    if (t.test(n.toString())) throw SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")
                                })
                            }(n);
                            let o = [],
                                a = [],
                                s = {},
                                f = [];
                            for (i in n) {
                                let r;
                                if (!Object.prototype.hasOwnProperty.call(n, i)) continue;
                                let t = x(i);
                                if (!t) continue;
                                o.forEach(function(r) {
                                    if (function(r, t) {
                                            let e = Math.max(r.length, t.length);
                                            for (let n = 0; n < e; n++) {
                                                let e;
                                                let i = F(r, n),
                                                    u = F(t, n),
                                                    o = !1;
                                                for (e of u)
                                                    if (i.has(e)) {
                                                        o = !0;
                                                        break
                                                    }
                                                if (!o) return !1
                                            }
                                            let n = r.length,
                                                i = t.length,
                                                u = w(r),
                                                o = w(t);
                                            return u ? o ? n === i : i >= n : o ? n >= i : n === i
                                        }(r, t)) throw TypeError('Conflicting signatures "' + g(r) + '" and "' + g(t) + '".')
                                }), o.push(t);
                                let e = a.length;
                                for (r of (a.push(n[i]), function r(t, e, n) {
                                        if (!(e < t.length)) return [n]; {
                                            var i, u;
                                            let o = t[e],
                                                a = [];
                                            if (o.restParam) {
                                                let r = o.types.filter(C);
                                                r.length < o.types.length && a.push({
                                                    types: r,
                                                    name: "..." + r.map(r => r.name).join("|"),
                                                    hasAny: r.some(r => r.isAny),
                                                    hasConversion: !1,
                                                    restParam: !0
                                                }), a.push(o)
                                            } else a = o.types.map(function(r) {
                                                return {
                                                    types: [r],
                                                    name: r.name,
                                                    hasAny: r.isAny,
                                                    hasConversion: r.conversion,
                                                    restParam: !1
                                                }
                                            });
                                            return i = a, u = function(i) {
                                                return r(t, e + 1, n.concat([i]))
                                            }, Array.prototype.concat.apply([], i.map(u))
                                        }
                                    }(t.map(y), 0, []))) {
                                    let t = g(r);
                                    f.push({
                                        params: r,
                                        name: t,
                                        fn: e
                                    }), r.every(r => !r.hasConversion) && (s[t] = e)
                                }
                            }
                            f.sort(S);
                            let c = function(r, t, e) {
                                let n = r.map(r => U(r) ? P(r.referToSelf.callback) : q(r) ? k(r.referTo.references, r.referTo.callback) : r),
                                    i = Array(n.length).fill(!1),
                                    u = !0;
                                for (; u;) {
                                    u = !1;
                                    let r = !0;
                                    for (let o = 0; o < n.length; ++o) {
                                        if (i[o]) continue;
                                        let a = n[o];
                                        if (U(a)) n[o] = a.referToSelf.callback(e), n[o].referToSelf = a.referToSelf, i[o] = !0, r = !1;
                                        else if (q(a)) {
                                            let e = function(r, t, e) {
                                                let n;
                                                let i = [];
                                                for (n of r) {
                                                    let r = e[n];
                                                    if ("number" != typeof r) throw TypeError('No definition for referenced signature "' + n + '"');
                                                    if ("function" != typeof(r = t[r])) return !1;
                                                    i.push(r)
                                                }
                                                return i
                                            }(a.referTo.references, n, t);
                                            e ? (n[o] = a.referTo.callback.apply(this, e), n[o].referTo = a.referTo, i[o] = !0, r = !1) : u = !0
                                        }
                                    }
                                    if (r && u) throw SyntaxError("Circular reference detected in resolving typed.referTo")
                                }
                                return n
                            }(a, s, rl);
                            for (u in s) Object.prototype.hasOwnProperty.call(s, u) && (s[u] = c[s[u]]);
                            let h = [],
                                p = new Map;
                            for (u of f) p.has(u.name) || (u.fn = c[u.fn], h.push(u), p.set(u.name, u));
                            let m = h[0] && h[0].params.length <= 2 && !w(h[0].params),
                                D = h[1] && h[1].params.length <= 2 && !w(h[1].params),
                                d = h[2] && h[2].params.length <= 2 && !w(h[2].params),
                                v = h[3] && h[3].params.length <= 2 && !w(h[3].params),
                                b = h[4] && h[4].params.length <= 2 && !w(h[4].params),
                                E = h[5] && h[5].params.length <= 2 && !w(h[5].params);
                            for (let r = 0; r < h.length; ++r) h[r].test = function(r) {
                                let t, e, n;
                                if (w(r)) {
                                    let e = (t = O(r).map(A)).length,
                                        n = A(I(r)),
                                        i = function(r) {
                                            for (let t = e; t < r.length; t++)
                                                if (!n(r[t])) return !1;
                                            return !0
                                        };
                                    return function(r) {
                                        for (let e = 0; e < t.length; e++)
                                            if (!t[e](r[e])) return !1;
                                        return i(r) && r.length >= e + 1
                                    }
                                }
                                return 0 === r.length ? function(r) {
                                    return 0 === r.length
                                } : 1 === r.length ? (e = A(r[0]), function(r) {
                                    return e(r[0]) && 1 === r.length
                                }) : 2 === r.length ? (e = A(r[0]), n = A(r[1]), function(r) {
                                    return e(r[0]) && n(r[1]) && 2 === r.length
                                }) : (t = r.map(A), function(r) {
                                    for (let e = 0; e < t.length; e++)
                                        if (!t[e](r[e])) return !1;
                                    return r.length === t.length
                                })
                            }(h[r].params);
                            let _ = m ? A(h[0].params[0]) : t,
                                M = D ? A(h[1].params[0]) : t,
                                N = d ? A(h[2].params[0]) : t,
                                B = v ? A(h[3].params[0]) : t,
                                z = b ? A(h[4].params[0]) : t,
                                R = E ? A(h[5].params[0]) : t,
                                L = m ? A(h[0].params[1]) : t,
                                Z = D ? A(h[1].params[1]) : t,
                                V = d ? A(h[2].params[1]) : t,
                                J = v ? A(h[3].params[1]) : t,
                                $ = b ? A(h[4].params[1]) : t,
                                H = E ? A(h[5].params[1]) : t;
                            for (let r = 0; r < h.length; ++r) h[r].implementation = function(r, t) {
                                let e = t;
                                if (r.some(r => r.hasConversion)) {
                                    let n = w(r),
                                        i = r.map(T);
                                    e = function() {
                                        let r = [],
                                            e = n ? arguments.length - 1 : arguments.length;
                                        for (let t = 0; t < e; t++) r[t] = i[t](arguments[t]);
                                        return n && (r[e] = arguments[e].map(i[e])), t.apply(this, r)
                                    }
                                }
                                let n = e;
                                if (w(r)) {
                                    let t = r.length - 1;
                                    n = function() {
                                        return e.apply(this, j(arguments, 0, t).concat([j(arguments, t)]))
                                    }
                                }
                                return n
                            }(h[r].params, h[r].fn);
                            let Y = m ? h[0].implementation : e,
                                W = D ? h[1].implementation : e,
                                X = d ? h[2].implementation : e,
                                Q = v ? h[3].implementation : e,
                                G = b ? h[4].implementation : e,
                                K = E ? h[5].implementation : e,
                                rr = m ? h[0].params.length : -1,
                                rt = D ? h[1].params.length : -1,
                                re = d ? h[2].params.length : -1,
                                rn = v ? h[3].params.length : -1,
                                ri = b ? h[4].params.length : -1,
                                ru = E ? h[5].params.length : -1,
                                ro = m && D && d && v && b && E ? 6 : 0,
                                ra = h.length,
                                rs = h.map(r => r.test),
                                rf = h.map(r => r.implementation),
                                rc = function() {
                                    for (let r = ro; r < ra; r++)
                                        if (rs[r](arguments)) return rf[r].apply(this, arguments);
                                    return l.onMismatch(r, arguments, h)
                                };

                            function rl(r, t) {
                                return arguments.length === rr && _(r) && L(t) ? Y.apply(this, arguments) : arguments.length === rt && M(r) && Z(t) ? W.apply(this, arguments) : arguments.length === re && N(r) && V(t) ? X.apply(this, arguments) : arguments.length === rn && B(r) && J(t) ? Q.apply(this, arguments) : arguments.length === ri && z(r) && $(t) ? G.apply(this, arguments) : arguments.length === ru && R(r) && H(t) ? K.apply(this, arguments) : rc.apply(this, arguments)
                            }
                            try {
                                Object.defineProperty(rl, "name", {
                                    value: r
                                })
                            } catch (r) {}
                            return rl.signatures = s, rl._typedFunctionData = {
                                signatures: h,
                                signatureMap: p
                            }, rl
                        }(u || "", o)
                    }).create = i, l.createCount = L.createCount, l.onMismatch = z, l.throwMismatchError = z, l.createError = M, l.clear = m, l.clearConversions = function() {
                        let r;
                        for (r of o) u.get(r).conversionsTo = [];
                        c = 0
                    }, l.addTypes = p, l._findType = h, l.referTo = function() {
                        let r = O(arguments).map(r => g(x(r))),
                            t = I(arguments);
                        if ("function" != typeof t) throw TypeError("Callback function expected as last argument");
                        return k(r, t)
                    }, l.referToSelf = P, l.convert = function(r, t) {
                        let e = h(t);
                        if (e.test(r)) return r;
                        let n = e.conversionsTo;
                        if (0 === n.length) throw Error("There are no conversions to " + t + " defined.");
                        for (let t = 0; t < n.length; t++)
                            if (h(n[t].from).test(r)) return n[t].convert(r);
                        throw Error("Cannot convert " + r + " to " + t)
                    }, l.findSignature = v, l.find = function(r, t, e) {
                        return v(r, t, e).implementation
                    }, l.isTypedFunction = d, l.warnAgainstDeprecatedThis = !0, l.addType = function(r, t) {
                        let e = "any";
                        !1 !== t && u.has("Object") && (e = "Object"), l.addTypes([r], e)
                    }, l.addConversion = function(r) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            override: !1
                        };
                        Z(r);
                        let e = h(r.to),
                            n = e.conversionsTo.find(t => t.from === r.from);
                        if (n) {
                            if (t && t.override) l.removeConversion({
                                from: n.from,
                                to: r.to,
                                convert: n.convert
                            });
                            else throw Error('There is already a conversion from "' + r.from + '" to "' + e.name + '"')
                        }
                        e.conversionsTo.push({
                            from: r.from,
                            convert: r.convert,
                            index: c++
                        })
                    }, l.addConversions = function(r, t) {
                        r.forEach(r => l.addConversion(r, t))
                    }, l.removeConversion = function(r) {
                        Z(r);
                        let t = h(r.to),
                            e = function(r, t) {
                                for (let e = 0; e < r.length; e++)
                                    if (t(r[e])) return r[e]
                            }(t.conversionsTo, t => t.from === r.from);
                        if (!e) throw Error("Attempt to remove nonexistent conversion from " + r.from + " to " + r.to);
                        if (e.convert !== r.convert) throw Error("Conversion to remove does not match existing conversion");
                        let n = t.conversionsTo.indexOf(e);
                        t.conversionsTo.splice(n, 1)
                    }, l.resolve = function(r, t) {
                        if (!d(r)) throw TypeError(n);
                        let e = r._typedFunctionData.signatures;
                        for (let r = 0; r < e.length; ++r)
                            if (e[r].test(t)) return e[r];
                        return null
                    }, l
                }()
            }, r.exports = t()
        },
        86139: function(r, t, e) {
            "use strict";

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(r) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var n in e)({}).hasOwnProperty.call(e, n) && (r[n] = e[n])
                    }
                    return r
                }).apply(null, arguments)
            }
            e.d(t, {
                IHx: function() {
                    return ai
                },
                JpY: function() {
                    return af
                },
                Smz: function() {
                    return ac
                }
            });
            var i = {
                    relTol: 1e-12,
                    absTol: 1e-15,
                    matrix: "Matrix",
                    number: "number",
                    numberFallback: "number",
                    precision: 64,
                    predictable: !1,
                    randomSeed: null
                },
                u = function(r) {
                    if (r) throw Error("The global config is readonly. \nPlease create a mathjs instance if you want to change the default configuration. \nExample:\n\n  import { create, all } from 'mathjs';\n  const mathjs = create(all);\n  mathjs.config({ number: 'BigNumber' });\n");
                    return Object.freeze(i)
                };
            n(u, i, {
                MATRIX_OPTIONS: ["Matrix", "Array"],
                NUMBER_OPTIONS: ["number", "BigNumber", "Fraction"]
            });
            var o, a, s = "0123456789abcdef",
                f = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                c = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                l = {
                    precision: 20,
                    rounding: 4,
                    modulo: 1,
                    toExpNeg: -7,
                    toExpPos: 21,
                    minE: -9e15,
                    maxE: 9e15,
                    crypto: !1
                },
                h = !0,
                p = "[DecimalError] ",
                m = p + "Invalid argument: ",
                D = p + "Precision limit exceeded",
                d = p + "crypto unavailable",
                v = "[object Decimal]",
                g = Math.floor,
                y = Math.pow,
                b = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                x = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                w = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                A = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                E = f.length - 1,
                F = c.length - 1,
                C = {
                    toStringTag: v
                };

            function _(r) {
                var t, e, n, i = r.length - 1,
                    u = "",
                    o = r[0];
                if (i > 0) {
                    for (u += o, t = 1; t < i; t++)(e = 7 - (n = r[t] + "").length) && (u += P(e)), u += n;
                    (e = 7 - (n = (o = r[t]) + "").length) && (u += P(e))
                } else if (0 === o) return "0";
                for (; o % 10 == 0;) o /= 10;
                return u + o
            }

            function M(r, t, e) {
                if (r !== ~~r || r < t || r > e) throw Error(m + r)
            }

            function N(r, t, e, n) {
                var i, u, o, a;
                for (u = r[0]; u >= 10; u /= 10) --t;
                return --t < 0 ? (t += 7, i = 0) : (i = Math.ceil((t + 1) / 7), t %= 7), u = y(10, 7 - t), a = r[i] % u | 0, null == n ? t < 3 ? (0 == t ? a = a / 100 | 0 : 1 == t && (a = a / 10 | 0), o = e < 4 && 99999 == a || e > 3 && 49999 == a || 5e4 == a || 0 == a) : o = (e < 4 && a + 1 == u || e > 3 && a + 1 == u / 2) && (r[i + 1] / u / 100 | 0) == y(10, t - 2) - 1 || (a == u / 2 || 0 == a) && (r[i + 1] / u / 100 | 0) == 0 : t < 4 ? (0 == t ? a = a / 1e3 | 0 : 1 == t ? a = a / 100 | 0 : 2 == t && (a = a / 10 | 0), o = (n || e < 4) && 9999 == a || !n && e > 3 && 4999 == a) : o = ((n || e < 4) && a + 1 == u || !n && e > 3 && a + 1 == u / 2) && (r[i + 1] / u / 1e3 | 0) == y(10, t - 3) - 1, o
            }

            function B(r, t, e) {
                for (var n, i, u = [0], o = 0, a = r.length; o < a;) {
                    for (i = u.length; i--;) u[i] *= t;
                    for (u[0] += s.indexOf(r.charAt(o++)), n = 0; n < u.length; n++) u[n] > e - 1 && (void 0 === u[n + 1] && (u[n + 1] = 0), u[n + 1] += u[n] / e | 0, u[n] %= e)
                }
                return u.reverse()
            }
            C.absoluteValue = C.abs = function() {
                var r = new this.constructor(this);
                return r.s < 0 && (r.s = 1), T(r)
            }, C.ceil = function() {
                return T(new this.constructor(this), this.e + 1, 2)
            }, C.clampedTo = C.clamp = function(r, t) {
                var e = this.constructor;
                if (r = new e(r), t = new e(t), !r.s || !t.s) return new e(NaN);
                if (r.gt(t)) throw Error(m + t);
                return 0 > this.cmp(r) ? r : this.cmp(t) > 0 ? t : new e(this)
            }, C.comparedTo = C.cmp = function(r) {
                var t, e, n, i, u = this.d,
                    o = (r = new this.constructor(r)).d,
                    a = this.s,
                    s = r.s;
                if (!u || !o) return a && s ? a !== s ? a : u === o ? 0 : !u ^ a < 0 ? 1 : -1 : NaN;
                if (!u[0] || !o[0]) return u[0] ? a : o[0] ? -s : 0;
                if (a !== s) return a;
                if (this.e !== r.e) return this.e > r.e ^ a < 0 ? 1 : -1;
                for (t = 0, e = (n = u.length) < (i = o.length) ? n : i; t < e; ++t)
                    if (u[t] !== o[t]) return u[t] > o[t] ^ a < 0 ? 1 : -1;
                return n === i ? 0 : n > i ^ a < 0 ? 1 : -1
            }, C.cosine = C.cos = function() {
                var r, t, e = this,
                    n = e.constructor;
                return e.d ? e.d[0] ? (r = n.precision, t = n.rounding, n.precision = r + Math.max(e.e, e.sd()) + 7, n.rounding = 1, e = function(r, t) {
                    var e, n, i;
                    if (t.isZero()) return t;
                    (n = t.d.length) < 32 ? i = (1 / H(4, e = Math.ceil(n / 3))).toString() : (e = 16, i = "2.3283064365386962890625e-10"), r.precision += e, t = $(r, 1, t.times(i), new r(1));
                    for (var u = e; u--;) {
                        var o = t.times(t);
                        t = o.times(o).minus(o).times(8).plus(1)
                    }
                    return r.precision -= e, t
                }(n, Y(n, e)), n.precision = r, n.rounding = t, T(2 == a || 3 == a ? e.neg() : e, r, t, !0)) : new n(1) : new n(NaN)
            }, C.cubeRoot = C.cbrt = function() {
                var r, t, e, n, i, u, o, a, s, f, c = this.constructor;
                if (!this.isFinite() || this.isZero()) return new c(this);
                for (h = !1, (u = this.s * y(this.s * this, 1 / 3)) && Math.abs(u) != 1 / 0 ? n = new c(u.toString()) : (e = _(this.d), (u = ((r = this.e) - e.length + 1) % 3) && (e += 1 == u || -2 == u ? "0" : "00"), u = y(e, 1 / 3), r = g((r + 1) / 3) - (r % 3 == (r < 0 ? -1 : 2)), (n = new c(e = u == 1 / 0 ? "5e" + r : (e = u.toExponential()).slice(0, e.indexOf("e") + 1) + r)).s = this.s), o = (r = c.precision) + 3;;)
                    if (n = S((f = (s = (a = n).times(a).times(a)).plus(this)).plus(this).times(a), f.plus(s), o + 2, 1), _(a.d).slice(0, o) === (e = _(n.d)).slice(0, o)) {
                        if ("9999" != (e = e.slice(o - 3, o + 1)) && (i || "4999" != e)) {
                            +e && (+e.slice(1) || "5" != e.charAt(0)) || (T(n, r + 1, 1), t = !n.times(n).times(n).eq(this));
                            break
                        }
                        if (!i && (T(a, r + 1, 0), a.times(a).times(a).eq(this))) {
                            n = a;
                            break
                        }
                        o += 4, i = 1
                    }
                return h = !0, T(n, r, c.rounding, t)
            }, C.decimalPlaces = C.dp = function() {
                var r, t = this.d,
                    e = NaN;
                if (t) {
                    if (e = ((r = t.length - 1) - g(this.e / 7)) * 7, r = t[r])
                        for (; r % 10 == 0; r /= 10) e--;
                    e < 0 && (e = 0)
                }
                return e
            }, C.dividedBy = C.div = function(r) {
                return S(this, new this.constructor(r))
            }, C.dividedToIntegerBy = C.divToInt = function(r) {
                var t = this.constructor;
                return T(S(this, new t(r), 0, 1, 1), t.precision, t.rounding)
            }, C.equals = C.eq = function(r) {
                return 0 === this.cmp(r)
            }, C.floor = function() {
                return T(new this.constructor(this), this.e + 1, 3)
            }, C.greaterThan = C.gt = function(r) {
                return this.cmp(r) > 0
            }, C.greaterThanOrEqualTo = C.gte = function(r) {
                var t = this.cmp(r);
                return 1 == t || 0 === t
            }, C.hyperbolicCosine = C.cosh = function() {
                var r, t, e, n, i, u = this,
                    o = u.constructor,
                    a = new o(1);
                if (!u.isFinite()) return new o(u.s ? 1 / 0 : NaN);
                if (u.isZero()) return a;
                e = o.precision, n = o.rounding, o.precision = e + Math.max(u.e, u.sd()) + 4, o.rounding = 1, (i = u.d.length) < 32 ? t = (1 / H(4, r = Math.ceil(i / 3))).toString() : (r = 16, t = "2.3283064365386962890625e-10"), u = $(o, 1, u.times(t), new o(1), !0);
                for (var s, f = r, c = new o(8); f--;) s = u.times(u), u = a.minus(s.times(c.minus(s.times(c))));
                return T(u, o.precision = e, o.rounding = n, !0)
            }, C.hyperbolicSine = C.sinh = function() {
                var r, t, e, n, i = this,
                    u = i.constructor;
                if (!i.isFinite() || i.isZero()) return new u(i);
                if (t = u.precision, e = u.rounding, u.precision = t + Math.max(i.e, i.sd()) + 4, u.rounding = 1, (n = i.d.length) < 3) i = $(u, 2, i, i, !0);
                else {
                    r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r, i = $(u, 2, i = i.times(1 / H(5, r)), i, !0);
                    for (var o, a = new u(5), s = new u(16), f = new u(20); r--;) o = i.times(i), i = i.times(a.plus(o.times(s.times(o).plus(f))))
                }
                return u.precision = t, u.rounding = e, T(i, t, e, !0)
            }, C.hyperbolicTangent = C.tanh = function() {
                var r, t, e = this.constructor;
                return this.isFinite() ? this.isZero() ? new e(this) : (r = e.precision, t = e.rounding, e.precision = r + 7, e.rounding = 1, S(this.sinh(), this.cosh(), e.precision = r, e.rounding = t)) : new e(this.s)
            }, C.inverseCosine = C.acos = function() {
                var r = this,
                    t = r.constructor,
                    e = r.abs().cmp(1),
                    n = t.precision,
                    i = t.rounding;
                return -1 !== e ? 0 === e ? r.isNeg() ? j(t, n, i) : new t(0) : new t(NaN) : r.isZero() ? j(t, n + 4, i).times(.5) : (t.precision = n + 6, t.rounding = 1, r = new t(1).minus(r).div(r.plus(1)).sqrt().atan(), t.precision = n, t.rounding = i, r.times(2))
            }, C.inverseHyperbolicCosine = C.acosh = function() {
                var r, t, e = this,
                    n = e.constructor;
                return e.lte(1) ? new n(e.eq(1) ? 0 : NaN) : e.isFinite() ? (r = n.precision, t = n.rounding, n.precision = r + Math.max(Math.abs(e.e), e.sd()) + 4, n.rounding = 1, h = !1, e = e.times(e).minus(1).sqrt().plus(e), h = !0, n.precision = r, n.rounding = t, e.ln()) : new n(e)
            }, C.inverseHyperbolicSine = C.asinh = function() {
                var r, t, e = this,
                    n = e.constructor;
                return !e.isFinite() || e.isZero() ? new n(e) : (r = n.precision, t = n.rounding, n.precision = r + 2 * Math.max(Math.abs(e.e), e.sd()) + 6, n.rounding = 1, h = !1, e = e.times(e).plus(1).sqrt().plus(e), h = !0, n.precision = r, n.rounding = t, e.ln())
            }, C.inverseHyperbolicTangent = C.atanh = function() {
                var r, t, e, n, i = this,
                    u = i.constructor;
                return i.isFinite() ? i.e >= 0 ? new u(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (r = u.precision, t = u.rounding, Math.max(n = i.sd(), r) < -(2 * i.e) - 1) ? T(new u(i), r, t, !0) : (u.precision = e = n - i.e, i = S(i.plus(1), new u(1).minus(i), e + r, 1), u.precision = r + 4, u.rounding = 1, i = i.ln(), u.precision = r, u.rounding = t, i.times(.5)) : new u(NaN)
            }, C.inverseSine = C.asin = function() {
                var r, t, e, n, i = this,
                    u = i.constructor;
                return i.isZero() ? new u(i) : (t = i.abs().cmp(1), e = u.precision, n = u.rounding, -1 !== t) ? 0 === t ? ((r = j(u, e + 4, n).times(.5)).s = i.s, r) : new u(NaN) : (u.precision = e + 6, u.rounding = 1, i = i.div(new u(1).minus(i.times(i)).sqrt().plus(1)).atan(), u.precision = e, u.rounding = n, i.times(2))
            }, C.inverseTangent = C.atan = function() {
                var r, t, e, n, i, u, o, a, s, f = this,
                    c = f.constructor,
                    l = c.precision,
                    p = c.rounding;
                if (f.isFinite()) {
                    if (f.isZero()) return new c(f);
                    if (f.abs().eq(1) && l + 4 <= F) return (o = j(c, l + 4, p).times(.25)).s = f.s, o
                } else {
                    if (!f.s) return new c(NaN);
                    if (l + 4 <= F) return (o = j(c, l + 4, p).times(.5)).s = f.s, o
                }
                for (c.precision = a = l + 10, c.rounding = 1, r = e = Math.min(28, a / 7 + 2 | 0); r; --r) f = f.div(f.times(f).plus(1).sqrt().plus(1));
                for (h = !1, t = Math.ceil(a / 7), n = 1, s = f.times(f), o = new c(f), i = f; - 1 !== r;)
                    if (i = i.times(s), u = o.minus(i.div(n += 2)), i = i.times(s), void 0 !== (o = u.plus(i.div(n += 2))).d[t])
                        for (r = t; o.d[r] === u.d[r] && r--;);
                return e && (o = o.times(2 << e - 1)), h = !0, T(o, c.precision = l, c.rounding = p, !0)
            }, C.isFinite = function() {
                return !!this.d
            }, C.isInteger = C.isInt = function() {
                return !!this.d && g(this.e / 7) > this.d.length - 2
            }, C.isNaN = function() {
                return !this.s
            }, C.isNegative = C.isNeg = function() {
                return this.s < 0
            }, C.isPositive = C.isPos = function() {
                return this.s > 0
            }, C.isZero = function() {
                return !!this.d && 0 === this.d[0]
            }, C.lessThan = C.lt = function(r) {
                return 0 > this.cmp(r)
            }, C.lessThanOrEqualTo = C.lte = function(r) {
                return 1 > this.cmp(r)
            }, C.logarithm = C.log = function(r) {
                var t, e, n, i, u, o, a, s = this.constructor,
                    f = s.precision,
                    c = s.rounding;
                if (null == r) r = new s(10), t = !0;
                else {
                    if (e = (r = new s(r)).d, r.s < 0 || !e || !e[0] || r.eq(1)) return new s(NaN);
                    t = r.eq(10)
                }
                if (e = this.d, this.s < 0 || !e || !e[0] || this.eq(1)) return new s(e && !e[0] ? -1 / 0 : 1 != this.s ? NaN : e ? 0 : 1 / 0);
                if (t) {
                    if (e.length > 1) i = !0;
                    else {
                        for (n = e[0]; n % 10 == 0;) n /= 10;
                        i = 1 !== n
                    }
                }
                if (h = !1, N((a = S(Z(this, o = f + 5), t ? I(s, o + 10) : Z(r, o), o, 1)).d, n = f, c))
                    do
                        if (o += 10, a = S(Z(this, o), t ? I(s, o + 10) : Z(r, o), o, 1), !i) {
                            +_(a.d).slice(n + 1, n + 15) + 1 == 1e14 && (a = T(a, f + 1, 0));
                            break
                        }
                while (N(a.d, n += 10, c));
                return h = !0, T(a, f, c)
            }, C.minus = C.sub = function(r) {
                var t, e, n, i, u, o, a, s, f, c, l, p, m = this.constructor;
                if (r = new m(r), !this.d || !r.d) return this.s && r.s ? this.d ? r.s = -r.s : r = new m(r.d || this.s !== r.s ? this : NaN) : r = new m(NaN), r;
                if (this.s != r.s) return r.s = -r.s, this.plus(r);
                if (f = this.d, p = r.d, a = m.precision, s = m.rounding, !f[0] || !p[0]) {
                    if (p[0]) r.s = -r.s;
                    else {
                        if (!f[0]) return new m(3 === s ? -0 : 0);
                        r = new m(this)
                    }
                    return h ? T(r, a, s) : r
                }
                if (e = g(r.e / 7), c = g(this.e / 7), f = f.slice(), u = c - e) {
                    for ((l = u < 0) ? (t = f, u = -u, o = p.length) : (t = p, e = c, o = f.length), u > (n = Math.max(Math.ceil(a / 7), o) + 2) && (u = n, t.length = 1), t.reverse(), n = u; n--;) t.push(0);
                    t.reverse()
                } else {
                    for ((l = (n = f.length) < (o = p.length)) && (o = n), n = 0; n < o; n++)
                        if (f[n] != p[n]) {
                            l = f[n] < p[n];
                            break
                        }
                    u = 0
                }
                for (l && (t = f, f = p, p = t, r.s = -r.s), o = f.length, n = p.length - o; n > 0; --n) f[o++] = 0;
                for (n = p.length; n > u;) {
                    if (f[--n] < p[n]) {
                        for (i = n; i && 0 === f[--i];) f[i] = 1e7 - 1;
                        --f[i], f[n] += 1e7
                    }
                    f[n] -= p[n]
                }
                for (; 0 === f[--o];) f.pop();
                for (; 0 === f[0]; f.shift()) --e;
                return f[0] ? (r.d = f, r.e = O(f, e), h ? T(r, a, s) : r) : new m(3 === s ? -0 : 0)
            }, C.modulo = C.mod = function(r) {
                var t, e = this.constructor;
                return (r = new e(r), this.d && r.s && (!r.d || r.d[0])) ? r.d && (!this.d || this.d[0]) ? (h = !1, 9 == e.modulo ? (t = S(this, r.abs(), 0, 3, 1), t.s *= r.s) : t = S(this, r, 0, e.modulo, 1), t = t.times(r), h = !0, this.minus(t)) : T(new e(this), e.precision, e.rounding) : new e(NaN)
            }, C.naturalExponential = C.exp = function() {
                return L(this)
            }, C.naturalLogarithm = C.ln = function() {
                return Z(this)
            }, C.negated = C.neg = function() {
                var r = new this.constructor(this);
                return r.s = -r.s, T(r)
            }, C.plus = C.add = function(r) {
                var t, e, n, i, u, o, a, s, f, c, l = this.constructor;
                if (r = new l(r), !this.d || !r.d) return this.s && r.s ? this.d || (r = new l(r.d || this.s === r.s ? this : NaN)) : r = new l(NaN), r;
                if (this.s != r.s) return r.s = -r.s, this.minus(r);
                if (f = this.d, c = r.d, a = l.precision, s = l.rounding, !f[0] || !c[0]) return c[0] || (r = new l(this)), h ? T(r, a, s) : r;
                if (u = g(this.e / 7), n = g(r.e / 7), f = f.slice(), i = u - n) {
                    for (i < 0 ? (e = f, i = -i, o = c.length) : (e = c, n = u, o = f.length), i > (o = (u = Math.ceil(a / 7)) > o ? u + 1 : o + 1) && (i = o, e.length = 1), e.reverse(); i--;) e.push(0);
                    e.reverse()
                }
                for ((o = f.length) - (i = c.length) < 0 && (i = o, e = c, c = f, f = e), t = 0; i;) t = (f[--i] = f[i] + c[i] + t) / 1e7 | 0, f[i] %= 1e7;
                for (t && (f.unshift(t), ++n), o = f.length; 0 == f[--o];) f.pop();
                return r.d = f, r.e = O(f, n), h ? T(r, a, s) : r
            }, C.precision = C.sd = function(r) {
                var t;
                if (void 0 !== r && !!r !== r && 1 !== r && 0 !== r) throw Error(m + r);
                return this.d ? (t = k(this.d), r && this.e + 1 > t && (t = this.e + 1)) : t = NaN, t
            }, C.round = function() {
                var r = this.constructor;
                return T(new r(this), this.e + 1, r.rounding)
            }, C.sine = C.sin = function() {
                var r, t, e = this,
                    n = e.constructor;
                return e.isFinite() ? e.isZero() ? new n(e) : (r = n.precision, t = n.rounding, n.precision = r + Math.max(e.e, e.sd()) + 7, n.rounding = 1, e = function(r, t) {
                    var e, n = t.d.length;
                    if (n < 3) return t.isZero() ? t : $(r, 2, t, t);
                    e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e, t = $(r, 2, t = t.times(1 / H(5, e)), t);
                    for (var i, u = new r(5), o = new r(16), a = new r(20); e--;) i = t.times(t), t = t.times(u.plus(i.times(o.times(i).minus(a))));
                    return t
                }(n, Y(n, e)), n.precision = r, n.rounding = t, T(a > 2 ? e.neg() : e, r, t, !0)) : new n(NaN)
            }, C.squareRoot = C.sqrt = function() {
                var r, t, e, n, i, u, o = this.d,
                    a = this.e,
                    s = this.s,
                    f = this.constructor;
                if (1 !== s || !o || !o[0]) return new f(!s || s < 0 && (!o || o[0]) ? NaN : o ? this : 1 / 0);
                for (h = !1, 0 == (s = Math.sqrt(+this)) || s == 1 / 0 ? (((t = _(o)).length + a) % 2 == 0 && (t += "0"), s = Math.sqrt(t), a = g((a + 1) / 2) - (a < 0 || a % 2), n = new f(t = s == 1 / 0 ? "5e" + a : (t = s.toExponential()).slice(0, t.indexOf("e") + 1) + a)) : n = new f(s.toString()), e = (a = f.precision) + 3;;)
                    if (n = (u = n).plus(S(this, u, e + 2, 1)).times(.5), _(u.d).slice(0, e) === (t = _(n.d)).slice(0, e)) {
                        if ("9999" != (t = t.slice(e - 3, e + 1)) && (i || "4999" != t)) {
                            +t && (+t.slice(1) || "5" != t.charAt(0)) || (T(n, a + 1, 1), r = !n.times(n).eq(this));
                            break
                        }
                        if (!i && (T(u, a + 1, 0), u.times(u).eq(this))) {
                            n = u;
                            break
                        }
                        e += 4, i = 1
                    }
                return h = !0, T(n, a, f.rounding, r)
            }, C.tangent = C.tan = function() {
                var r, t, e = this,
                    n = e.constructor;
                return e.isFinite() ? e.isZero() ? new n(e) : (r = n.precision, t = n.rounding, n.precision = r + 10, n.rounding = 1, (e = e.sin()).s = 1, e = S(e, new n(1).minus(e.times(e)).sqrt(), r + 10, 0), n.precision = r, n.rounding = t, T(2 == a || 4 == a ? e.neg() : e, r, t, !0)) : new n(NaN)
            }, C.times = C.mul = function(r) {
                var t, e, n, i, u, o, a, s, f, c = this.constructor,
                    l = this.d,
                    p = (r = new c(r)).d;
                if (r.s *= this.s, !l || !l[0] || !p || !p[0]) return new c(r.s && (!l || l[0] || p) && (!p || p[0] || l) ? l && p ? 0 * r.s : r.s / 0 : NaN);
                for (e = g(this.e / 7) + g(r.e / 7), (s = l.length) < (f = p.length) && (u = l, l = p, p = u, o = s, s = f, f = o), u = [], n = o = s + f; n--;) u.push(0);
                for (n = f; --n >= 0;) {
                    for (t = 0, i = s + n; i > n;) a = u[i] + p[n] * l[i - n - 1] + t, u[i--] = a % 1e7 | 0, t = a / 1e7 | 0;
                    u[i] = (u[i] + t) % 1e7 | 0
                }
                for (; !u[--o];) u.pop();
                return t ? ++e : u.shift(), r.d = u, r.e = O(u, e), h ? T(r, c.precision, c.rounding) : r
            }, C.toBinary = function(r, t) {
                return W(this, 2, r, t)
            }, C.toDecimalPlaces = C.toDP = function(r, t) {
                var e = this,
                    n = e.constructor;
                return (e = new n(e), void 0 === r) ? e : (M(r, 0, 1e9), void 0 === t ? t = n.rounding : M(t, 0, 8), T(e, r + e.e + 1, t))
            }, C.toExponential = function(r, t) {
                var e, n = this,
                    i = n.constructor;
                return void 0 === r ? e = z(n, !0) : (M(r, 0, 1e9), void 0 === t ? t = i.rounding : M(t, 0, 8), e = z(n = T(new i(n), r + 1, t), !0, r + 1)), n.isNeg() && !n.isZero() ? "-" + e : e
            }, C.toFixed = function(r, t) {
                var e, n, i = this.constructor;
                return void 0 === r ? e = z(this) : (M(r, 0, 1e9), void 0 === t ? t = i.rounding : M(t, 0, 8), e = z(n = T(new i(this), r + this.e + 1, t), !1, r + n.e + 1)), this.isNeg() && !this.isZero() ? "-" + e : e
            }, C.toFraction = function(r) {
                var t, e, n, i, u, o, a, s, f, c, l, p, D = this.d,
                    d = this.constructor;
                if (!D) return new d(this);
                if (f = e = new d(1), n = s = new d(0), o = (u = (t = new d(n)).e = k(D) - this.e - 1) % 7, t.d[0] = y(10, o < 0 ? 7 + o : o), null == r) r = u > 0 ? t : f;
                else {
                    if (!(a = new d(r)).isInt() || a.lt(f)) throw Error(m + a);
                    r = a.gt(t) ? u > 0 ? t : f : a
                }
                for (h = !1, a = new d(_(D)), c = d.precision, d.precision = u = 14 * D.length; l = S(a, t, 0, 1, 1), 1 != (i = e.plus(l.times(n))).cmp(r);) e = n, n = i, i = f, f = s.plus(l.times(i)), s = i, i = t, t = a.minus(l.times(i)), a = i;
                return i = S(r.minus(e), n, 0, 1, 1), s = s.plus(i.times(f)), e = e.plus(i.times(n)), s.s = f.s = this.s, p = 1 > S(f, n, u, 1).minus(this).abs().cmp(S(s, e, u, 1).minus(this).abs()) ? [f, n] : [s, e], d.precision = c, h = !0, p
            }, C.toHexadecimal = C.toHex = function(r, t) {
                return W(this, 16, r, t)
            }, C.toNearest = function(r, t) {
                var e = this,
                    n = e.constructor;
                if (e = new n(e), null == r) {
                    if (!e.d) return e;
                    r = new n(1), t = n.rounding
                } else {
                    if (r = new n(r), void 0 === t ? t = n.rounding : M(t, 0, 8), !e.d) return r.s ? e : r;
                    if (!r.d) return r.s && (r.s = e.s), r
                }
                return r.d[0] ? (h = !1, e = S(e, r, 0, t, 1).times(r), h = !0, T(e)) : (r.s = e.s, e = r), e
            }, C.toNumber = function() {
                return +this
            }, C.toOctal = function(r, t) {
                return W(this, 8, r, t)
            }, C.toPower = C.pow = function(r) {
                var t, e, n, i, u, o, a = this,
                    s = a.constructor,
                    f = +(r = new s(r));
                if (!a.d || !r.d || !a.d[0] || !r.d[0]) return new s(y(+a, f));
                if ((a = new s(a)).eq(1)) return a;
                if (n = s.precision, u = s.rounding, r.eq(1)) return T(a, n, u);
                if ((t = g(r.e / 7)) >= r.d.length - 1 && (e = f < 0 ? -f : f) <= 9007199254740991) return i = q(s, a, e, n), r.s < 0 ? new s(1).div(i) : T(i, n, u);
                if ((o = a.s) < 0) {
                    if (t < r.d.length - 1) return new s(NaN);
                    if ((1 & r.d[t]) == 0 && (o = 1), 0 == a.e && 1 == a.d[0] && 1 == a.d.length) return a.s = o, a
                }
                return (t = 0 != (e = y(+a, f)) && isFinite(e) ? new s(e + "").e : g(f * (Math.log("0." + _(a.d)) / Math.LN10 + a.e + 1))) > s.maxE + 1 || t < s.minE - 1 ? new s(t > 0 ? o / 0 : 0) : (h = !1, s.rounding = a.s = 1, e = Math.min(12, (t + "").length), (i = L(r.times(Z(a, n + e)), n)).d && N((i = T(i, n + 5, 1)).d, n, u) && (t = n + 10, +_((i = T(L(r.times(Z(a, t + e)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 == 1e14 && (i = T(i, n + 1, 0))), i.s = o, h = !0, s.rounding = u, T(i, n, u))
            }, C.toPrecision = function(r, t) {
                var e, n = this,
                    i = n.constructor;
                return void 0 === r ? e = z(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (M(r, 1, 1e9), void 0 === t ? t = i.rounding : M(t, 0, 8), e = z(n = T(new i(n), r, t), r <= n.e || n.e <= i.toExpNeg, r)), n.isNeg() && !n.isZero() ? "-" + e : e
            }, C.toSignificantDigits = C.toSD = function(r, t) {
                var e = this.constructor;
                return void 0 === r ? (r = e.precision, t = e.rounding) : (M(r, 1, 1e9), void 0 === t ? t = e.rounding : M(t, 0, 8)), T(new e(this), r, t)
            }, C.toString = function() {
                var r = this.constructor,
                    t = z(this, this.e <= r.toExpNeg || this.e >= r.toExpPos);
                return this.isNeg() && !this.isZero() ? "-" + t : t
            }, C.truncated = C.trunc = function() {
                return T(new this.constructor(this), this.e + 1, 1)
            }, C.valueOf = C.toJSON = function() {
                var r = this.constructor,
                    t = z(this, this.e <= r.toExpNeg || this.e >= r.toExpPos);
                return this.isNeg() ? "-" + t : t
            };
            var S = function() {
                function r(r, t, e) {
                    var n, i = 0,
                        u = r.length;
                    for (r = r.slice(); u--;) n = r[u] * t + i, r[u] = n % e | 0, i = n / e | 0;
                    return i && r.unshift(i), r
                }

                function t(r, t, e, n) {
                    var i, u;
                    if (e != n) u = e > n ? 1 : -1;
                    else
                        for (i = u = 0; i < e; i++)
                            if (r[i] != t[i]) {
                                u = r[i] > t[i] ? 1 : -1;
                                break
                            } return u
                }

                function e(r, t, e, n) {
                    for (var i = 0; e--;) r[e] -= i, i = r[e] < t[e] ? 1 : 0, r[e] = i * n + r[e] - t[e];
                    for (; !r[0] && r.length > 1;) r.shift()
                }
                return function(n, i, u, a, s, f) {
                    var c, l, h, p, m, D, d, v, y, b, x, w, A, E, F, C, _, M, N, B, S = n.constructor,
                        z = n.s == i.s ? 1 : -1,
                        O = n.d,
                        I = i.d;
                    if (!O || !O[0] || !I || !I[0]) return new S(n.s && i.s && (O ? !I || O[0] != I[0] : I) ? O && 0 == O[0] || !I ? 0 * z : z / 0 : NaN);
                    for (f ? (m = 1, l = n.e - i.e) : (f = 1e7, m = 7, l = g(n.e / m) - g(i.e / m)), N = I.length, _ = O.length, b = (y = new S(z)).d = [], h = 0; I[h] == (O[h] || 0); h++);
                    if (I[h] > (O[h] || 0) && l--, null == u ? (E = u = S.precision, a = S.rounding) : E = s ? u + (n.e - i.e) + 1 : u, E < 0) b.push(1), D = !0;
                    else {
                        if (E = E / m + 2 | 0, h = 0, 1 == N) {
                            for (p = 0, I = I[0], E++;
                                (h < _ || p) && E--; h++) F = p * f + (O[h] || 0), b[h] = F / I | 0, p = F % I | 0;
                            D = p || h < _
                        } else {
                            for ((p = f / (I[0] + 1) | 0) > 1 && (I = r(I, p, f), O = r(O, p, f), N = I.length, _ = O.length), C = N, w = (x = O.slice(0, N)).length; w < N;) x[w++] = 0;
                            (B = I.slice()).unshift(0), M = I[0], I[1] >= f / 2 && ++M;
                            do p = 0, (c = t(I, x, N, w)) < 0 ? (A = x[0], N != w && (A = A * f + (x[1] || 0)), (p = A / M | 0) > 1 ? (p >= f && (p = f - 1), v = (d = r(I, p, f)).length, w = x.length, 1 == (c = t(d, x, v, w)) && (p--, e(d, N < v ? B : I, v, f))) : (0 == p && (c = p = 1), d = I.slice()), (v = d.length) < w && d.unshift(0), e(x, d, w, f), -1 == c && (w = x.length, (c = t(I, x, N, w)) < 1 && (p++, e(x, N < w ? B : I, w, f))), w = x.length) : 0 === c && (p++, x = [0]), b[h++] = p, c && x[0] ? x[w++] = O[C] || 0 : (x = [O[C]], w = 1); while ((C++ < _ || void 0 !== x[0]) && E--);
                            D = void 0 !== x[0]
                        }
                        b[0] || b.shift()
                    }
                    if (1 == m) y.e = l, o = D;
                    else {
                        for (h = 1, p = b[0]; p >= 10; p /= 10) h++;
                        y.e = h + l * m - 1, T(y, s ? u + y.e + 1 : u, a, D)
                    }
                    return y
                }
            }();

            function T(r, t, e, n) {
                var i, u, o, a, s, f, c, l, p, m = r.constructor;
                r: if (null != t) {
                    if (!(l = r.d)) return r;
                    for (i = 1, a = l[0]; a >= 10; a /= 10) i++;
                    if ((u = t - i) < 0) u += 7, o = t, s = (c = l[p = 0]) / y(10, i - o - 1) % 10 | 0;
                    else if ((p = Math.ceil((u + 1) / 7)) >= (a = l.length)) {
                        if (n) {
                            for (; a++ <= p;) l.push(0);
                            c = s = 0, i = 1, u %= 7, o = u - 7 + 1
                        } else break r
                    } else {
                        for (i = 1, c = a = l[p]; a >= 10; a /= 10) i++;
                        u %= 7, s = (o = u - 7 + i) < 0 ? 0 : c / y(10, i - o - 1) % 10 | 0
                    }
                    if (n = n || t < 0 || void 0 !== l[p + 1] || (o < 0 ? c : c % y(10, i - o - 1)), f = e < 4 ? (s || n) && (0 == e || e == (r.s < 0 ? 3 : 2)) : s > 5 || 5 == s && (4 == e || n || 6 == e && (u > 0 ? o > 0 ? c / y(10, i - o) : 0 : l[p - 1]) % 10 & 1 || e == (r.s < 0 ? 8 : 7)), t < 1 || !l[0]) return l.length = 0, f ? (t -= r.e + 1, l[0] = y(10, (7 - t % 7) % 7), r.e = -t || 0) : l[0] = r.e = 0, r;
                    if (0 == u ? (l.length = p, a = 1, p--) : (l.length = p + 1, a = y(10, 7 - u), l[p] = o > 0 ? (c / y(10, i - o) % y(10, o) | 0) * a : 0), f)
                        for (;;) {
                            if (0 == p) {
                                for (u = 1, o = l[0]; o >= 10; o /= 10) u++;
                                for (o = l[0] += a, a = 1; o >= 10; o /= 10) a++;
                                u != a && (r.e++, 1e7 == l[0] && (l[0] = 1));
                                break
                            }
                            if (l[p] += a, 1e7 != l[p]) break;
                            l[p--] = 0, a = 1
                        }
                    for (u = l.length; 0 === l[--u];) l.pop()
                }
                return h && (r.e > m.maxE ? (r.d = null, r.e = NaN) : r.e < m.minE && (r.e = 0, r.d = [0])), r
            }

            function z(r, t, e) {
                if (!r.isFinite()) return V(r);
                var n, i = r.e,
                    u = _(r.d),
                    o = u.length;
                return t ? (e && (n = e - o) > 0 ? u = u.charAt(0) + "." + u.slice(1) + P(n) : o > 1 && (u = u.charAt(0) + "." + u.slice(1)), u = u + (r.e < 0 ? "e" : "e+") + r.e) : i < 0 ? (u = "0." + P(-i - 1) + u, e && (n = e - o) > 0 && (u += P(n))) : i >= o ? (u += P(i + 1 - o), e && (n = e - i - 1) > 0 && (u = u + "." + P(n))) : ((n = i + 1) < o && (u = u.slice(0, n) + "." + u.slice(n)), e && (n = e - o) > 0 && (i + 1 === o && (u += "."), u += P(n))), u
            }

            function O(r, t) {
                var e = r[0];
                for (t *= 7; e >= 10; e /= 10) t++;
                return t
            }

            function I(r, t, e) {
                if (t > E) throw h = !0, e && (r.precision = e), Error(D);
                return T(new r(f), t, 1, !0)
            }

            function j(r, t, e) {
                if (t > F) throw Error(D);
                return T(new r(c), t, e, !0)
            }

            function k(r) {
                var t = r.length - 1,
                    e = 7 * t + 1;
                if (t = r[t]) {
                    for (; t % 10 == 0; t /= 10) e--;
                    for (t = r[0]; t >= 10; t /= 10) e++
                }
                return e
            }

            function P(r) {
                for (var t = ""; r--;) t += "0";
                return t
            }

            function q(r, t, e, n) {
                var i, u = new r(1),
                    o = Math.ceil(n / 7 + 4);
                for (h = !1;;) {
                    if (e % 2 && X((u = u.times(t)).d, o) && (i = !0), 0 === (e = g(e / 2))) {
                        e = u.d.length - 1, i && 0 === u.d[e] && ++u.d[e];
                        break
                    }
                    X((t = t.times(t)).d, o)
                }
                return h = !0, u
            }

            function U(r) {
                return 1 & r.d[r.d.length - 1]
            }

            function R(r, t, e) {
                for (var n, i, u = new r(t[0]), o = 0; ++o < t.length;) {
                    if (!(i = new r(t[o])).s) {
                        u = i;
                        break
                    }((n = u.cmp(i)) === e || 0 === n && u.s === e) && (u = i)
                }
                return u
            }

            function L(r, t) {
                var e, n, i, u, o, a, s, f = 0,
                    c = 0,
                    l = 0,
                    p = r.constructor,
                    m = p.rounding,
                    D = p.precision;
                if (!r.d || !r.d[0] || r.e > 17) return new p(r.d ? r.d[0] ? r.s < 0 ? 0 : 1 / 0 : 1 : r.s ? r.s < 0 ? 0 : r : 0 / 0);
                for (null == t ? (h = !1, s = D) : s = t, a = new p(.03125); r.e > -2;) r = r.times(a), l += 5;
                for (s += n = Math.log(y(2, l)) / Math.LN10 * 2 + 5 | 0, e = u = o = new p(1), p.precision = s;;) {
                    if (u = T(u.times(r), s, 1), e = e.times(++c), _((a = o.plus(S(u, e, s, 1))).d).slice(0, s) === _(o.d).slice(0, s)) {
                        for (i = l; i--;) o = T(o.times(o), s, 1);
                        if (null != t) return p.precision = D, o;
                        if (!(f < 3 && N(o.d, s - n, m, f))) return T(o, p.precision = D, m, h = !0);
                        p.precision = s += 10, e = u = a = new p(1), c = 0, f++
                    }
                    o = a
                }
            }

            function Z(r, t) {
                var e, n, i, u, o, a, s, f, c, l, p, m = 1,
                    D = r,
                    d = D.d,
                    v = D.constructor,
                    g = v.rounding,
                    y = v.precision;
                if (D.s < 0 || !d || !d[0] || !D.e && 1 == d[0] && 1 == d.length) return new v(d && !d[0] ? -1 / 0 : 1 != D.s ? NaN : d ? 0 : D);
                if (null == t ? (h = !1, c = y) : c = t, v.precision = c += 10, n = (e = _(d)).charAt(0), !(15e14 > Math.abs(u = D.e))) return f = I(v, c + 2, y).times(u + ""), D = Z(new v(n + "." + e.slice(1)), c - 10).plus(f), v.precision = y, null == t ? T(D, y, g, h = !0) : D;
                for (; n < 7 && 1 != n || 1 == n && e.charAt(1) > 3;) n = (e = _((D = D.times(r)).d)).charAt(0), m++;
                for (u = D.e, n > 1 ? (D = new v("0." + e), u++) : D = new v(n + "." + e.slice(1)), l = D, s = o = D = S(D.minus(1), D.plus(1), c, 1), p = T(D.times(D), c, 1), i = 3;;) {
                    if (o = T(o.times(p), c, 1), _((f = s.plus(S(o, new v(i), c, 1))).d).slice(0, c) === _(s.d).slice(0, c)) {
                        if (s = s.times(2), 0 !== u && (s = s.plus(I(v, c + 2, y).times(u + ""))), s = S(s, new v(m), c, 1), null != t) return v.precision = y, s;
                        if (!N(s.d, c - 10, g, a)) return T(s, v.precision = y, g, h = !0);
                        v.precision = c += 10, f = o = D = S(l.minus(1), l.plus(1), c, 1), p = T(D.times(D), c, 1), i = a = 1
                    }
                    s = f, i += 2
                }
            }

            function V(r) {
                return String(r.s * r.s / 0)
            }

            function J(r, t) {
                var e, n, i;
                for ((e = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (e < 0 && (e = n), e += +t.slice(n + 1), t = t.substring(0, n)) : e < 0 && (e = t.length), n = 0; 48 === t.charCodeAt(n); n++);
                for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
                if (t = t.slice(n, i)) {
                    if (i -= n, r.e = e = e - n - 1, r.d = [], n = (e + 1) % 7, e < 0 && (n += 7), n < i) {
                        for (n && r.d.push(+t.slice(0, n)), i -= 7; n < i;) r.d.push(+t.slice(n, n += 7));
                        n = 7 - (t = t.slice(n)).length
                    } else n -= i;
                    for (; n--;) t += "0";
                    r.d.push(+t), h && (r.e > r.constructor.maxE ? (r.d = null, r.e = NaN) : r.e < r.constructor.minE && (r.e = 0, r.d = [0]))
                } else r.e = 0, r.d = [0];
                return r
            }

            function $(r, t, e, n, i) {
                var u, o, a, s, f = r.precision,
                    c = Math.ceil(f / 7);
                for (h = !1, s = e.times(e), a = new r(n);;) {
                    if (o = S(a.times(s), new r(t++ * t++), f, 1), a = i ? n.plus(o) : n.minus(o), n = S(o.times(s), new r(t++ * t++), f, 1), void 0 !== (o = a.plus(n)).d[c]) {
                        for (u = c; o.d[u] === a.d[u] && u--;);
                        if (-1 == u) break
                    }
                    u = a, a = n, n = o, o = u
                }
                return h = !0, o.d.length = c + 1, o
            }

            function H(r, t) {
                for (var e = r; --t;) e *= r;
                return e
            }

            function Y(r, t) {
                var e, n = t.s < 0,
                    i = j(r, r.precision, 1),
                    u = i.times(.5);
                if ((t = t.abs()).lte(u)) return a = n ? 4 : 1, t;
                if ((e = t.divToInt(i)).isZero()) a = n ? 3 : 2;
                else {
                    if ((t = t.minus(e.times(i))).lte(u)) return a = U(e) ? n ? 2 : 3 : n ? 4 : 1, t;
                    a = U(e) ? n ? 1 : 4 : n ? 3 : 2
                }
                return t.minus(i).abs()
            }

            function W(r, t, e, n) {
                var i, u, a, f, c, l, h, p, m, D = r.constructor,
                    d = void 0 !== e;
                if (d ? (M(e, 1, 1e9), void 0 === n ? n = D.rounding : M(n, 0, 8)) : (e = D.precision, n = D.rounding), r.isFinite()) {
                    for (a = (h = z(r)).indexOf("."), d ? (i = 2, 16 == t ? e = 4 * e - 3 : 8 == t && (e = 3 * e - 2)) : i = t, a >= 0 && (h = h.replace(".", ""), (m = new D(1)).e = h.length - a, m.d = B(z(m), 10, i), m.e = m.d.length), u = c = (p = B(h, 10, i)).length; 0 == p[--c];) p.pop();
                    if (p[0]) {
                        if (a < 0 ? u-- : ((r = new D(r)).d = p, r.e = u, p = (r = S(r, m, e, n, 0, i)).d, u = r.e, l = o), a = p[e], f = i / 2, l = l || void 0 !== p[e + 1], l = n < 4 ? (void 0 !== a || l) && (0 === n || n === (r.s < 0 ? 3 : 2)) : a > f || a === f && (4 === n || l || 6 === n && 1 & p[e - 1] || n === (r.s < 0 ? 8 : 7)), p.length = e, l)
                            for (; ++p[--e] > i - 1;) p[e] = 0, e || (++u, p.unshift(1));
                        for (c = p.length; !p[c - 1]; --c);
                        for (a = 0, h = ""; a < c; a++) h += s.charAt(p[a]);
                        if (d) {
                            if (c > 1) {
                                if (16 == t || 8 == t) {
                                    for (a = 16 == t ? 4 : 3, --c; c % a; c++) h += "0";
                                    for (c = (p = B(h, i, t)).length; !p[c - 1]; --c);
                                    for (a = 1, h = "1."; a < c; a++) h += s.charAt(p[a])
                                } else h = h.charAt(0) + "." + h.slice(1)
                            }
                            h = h + (u < 0 ? "p" : "p+") + u
                        } else if (u < 0) {
                            for (; ++u;) h = "0" + h;
                            h = "0." + h
                        } else if (++u > c)
                            for (u -= c; u--;) h += "0";
                        else u < c && (h = h.slice(0, u) + "." + h.slice(u))
                    } else h = d ? "0p+0" : "0";
                    h = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + h
                } else h = V(r);
                return r.s < 0 ? "-" + h : h
            }

            function X(r, t) {
                if (r.length > t) return r.length = t, !0
            }

            function Q(r) {
                return new this(r).abs()
            }

            function G(r) {
                return new this(r).acos()
            }

            function K(r) {
                return new this(r).acosh()
            }

            function rr(r, t) {
                return new this(r).plus(t)
            }

            function rt(r) {
                return new this(r).asin()
            }

            function re(r) {
                return new this(r).asinh()
            }

            function rn(r) {
                return new this(r).atan()
            }

            function ri(r) {
                return new this(r).atanh()
            }

            function ru(r, t) {
                r = new this(r), t = new this(t);
                var e, n = this.precision,
                    i = this.rounding,
                    u = n + 4;
                return r.s && t.s ? r.d || t.d ? !t.d || r.isZero() ? (e = t.s < 0 ? j(this, n, i) : new this(0)).s = r.s : !r.d || t.isZero() ? (e = j(this, u, 1).times(.5)).s = r.s : t.s < 0 ? (this.precision = u, this.rounding = 1, e = this.atan(S(r, t, u, 1)), t = j(this, u, 1), this.precision = n, this.rounding = i, e = r.s < 0 ? e.minus(t) : e.plus(t)) : e = this.atan(S(r, t, u, 1)) : (e = j(this, u, 1).times(t.s > 0 ? .25 : .75)).s = r.s : e = new this(NaN), e
            }

            function ro(r) {
                return new this(r).cbrt()
            }

            function ra(r) {
                return T(r = new this(r), r.e + 1, 2)
            }

            function rs(r, t, e) {
                return new this(r).clamp(t, e)
            }

            function rf(r) {
                if (!r || "object" != typeof r) throw Error(p + "Object expected");
                var t, e, n, i = !0 === r.defaults,
                    u = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -9e15, 0, "toExpPos", 0, 9e15, "maxE", 0, 9e15, "minE", -9e15, 0, "modulo", 0, 9];
                for (t = 0; t < u.length; t += 3)
                    if (e = u[t], i && (this[e] = l[e]), void 0 !== (n = r[e])) {
                        if (g(n) === n && n >= u[t + 1] && n <= u[t + 2]) this[e] = n;
                        else throw Error(m + e + ": " + n)
                    }
                if (e = "crypto", i && (this[e] = l[e]), void 0 !== (n = r[e])) {
                    if (!0 === n || !1 === n || 0 === n || 1 === n) {
                        if (n) {
                            if ("undefined" != typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[e] = !0;
                            else throw Error(d)
                        } else this[e] = !1
                    } else throw Error(m + e + ": " + n)
                }
                return this
            }

            function rc(r) {
                return new this(r).cos()
            }

            function rl(r) {
                return new this(r).cosh()
            }

            function rh(r, t) {
                return new this(r).div(t)
            }

            function rp(r) {
                return new this(r).exp()
            }

            function rm(r) {
                return T(r = new this(r), r.e + 1, 3)
            }

            function rD() {
                var r, t, e = new this(0);
                for (r = 0, h = !1; r < arguments.length;)
                    if (t = new this(arguments[r++]), t.d) e.d && (e = e.plus(t.times(t)));
                    else {
                        if (t.s) return h = !0, new this(1 / 0);
                        e = t
                    }
                return h = !0, e.sqrt()
            }

            function rd(r) {
                return r instanceof rk || r && r.toStringTag === v || !1
            }

            function rv(r) {
                return new this(r).ln()
            }

            function rg(r, t) {
                return new this(r).log(t)
            }

            function ry(r) {
                return new this(r).log(2)
            }

            function rb(r) {
                return new this(r).log(10)
            }

            function rx() {
                return R(this, arguments, -1)
            }

            function rw() {
                return R(this, arguments, 1)
            }

            function rA(r, t) {
                return new this(r).mod(t)
            }

            function rE(r, t) {
                return new this(r).mul(t)
            }

            function rF(r, t) {
                return new this(r).pow(t)
            }

            function rC(r) {
                var t, e, n, i, u = 0,
                    o = new this(1),
                    a = [];
                if (void 0 === r ? r = this.precision : M(r, 1, 1e9), n = Math.ceil(r / 7), this.crypto) {
                    if (crypto.getRandomValues)
                        for (t = crypto.getRandomValues(new Uint32Array(n)); u < n;)(i = t[u]) >= 429e7 ? t[u] = crypto.getRandomValues(new Uint32Array(1))[0] : a[u++] = i % 1e7;
                    else if (crypto.randomBytes) {
                        for (t = crypto.randomBytes(n *= 4); u < n;)(i = t[u] + (t[u + 1] << 8) + (t[u + 2] << 16) + ((127 & t[u + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, u) : (a.push(i % 1e7), u += 4);
                        u = n / 4
                    } else throw Error(d)
                } else
                    for (; u < n;) a[u++] = 1e7 * Math.random() | 0;
                for (n = a[--u], r %= 7, n && r && (i = y(10, 7 - r), a[u] = (n / i | 0) * i); 0 === a[u]; u--) a.pop();
                if (u < 0) e = 0, a = [0];
                else {
                    for (e = -1; 0 === a[0]; e -= 7) a.shift();
                    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
                    n < 7 && (e -= 7 - n)
                }
                return o.e = e, o.d = a, o
            }

            function r_(r) {
                return T(r = new this(r), r.e + 1, this.rounding)
            }

            function rM(r) {
                return (r = new this(r)).d ? r.d[0] ? r.s : 0 * r.s : r.s || NaN
            }

            function rN(r) {
                return new this(r).sin()
            }

            function rB(r) {
                return new this(r).sinh()
            }

            function rS(r) {
                return new this(r).sqrt()
            }

            function rT(r, t) {
                return new this(r).sub(t)
            }

            function rz() {
                var r = 0,
                    t = arguments,
                    e = new this(t[0]);
                for (h = !1; e.s && ++r < t.length;) e = e.plus(t[r]);
                return h = !0, T(e, this.precision, this.rounding)
            }

            function rO(r) {
                return new this(r).tan()
            }

            function rI(r) {
                return new this(r).tanh()
            }

            function rj(r) {
                return T(r = new this(r), r.e + 1, 1)
            }
            C[Symbol.for("nodejs.util.inspect.custom")] = C.toString, C[Symbol.toStringTag] = "Decimal";
            var rk = C.constructor = function r(t) {
                var e, n, i;

                function u(r) {
                    var t, e, n;
                    if (!(this instanceof u)) return new u(r);
                    if (this.constructor = u, rd(r)) {
                        this.s = r.s, h ? !r.d || r.e > u.maxE ? (this.e = NaN, this.d = null) : r.e < u.minE ? (this.e = 0, this.d = [0]) : (this.e = r.e, this.d = r.d.slice()) : (this.e = r.e, this.d = r.d ? r.d.slice() : r.d);
                        return
                    }
                    if ("number" == (n = typeof r)) {
                        if (0 === r) {
                            this.s = 1 / r < 0 ? -1 : 1, this.e = 0, this.d = [0];
                            return
                        }
                        if (r < 0 ? (r = -r, this.s = -1) : this.s = 1, r === ~~r && r < 1e7) {
                            for (t = 0, e = r; e >= 10; e /= 10) t++;
                            h ? t > u.maxE ? (this.e = NaN, this.d = null) : t < u.minE ? (this.e = 0, this.d = [0]) : (this.e = t, this.d = [r]) : (this.e = t, this.d = [r]);
                            return
                        }
                        if (0 * r != 0) {
                            r || (this.s = NaN), this.e = NaN, this.d = null;
                            return
                        }
                        return J(this, r.toString())
                    }
                    if ("string" === n) return 45 === (e = r.charCodeAt(0)) ? (r = r.slice(1), this.s = -1) : (43 === e && (r = r.slice(1)), this.s = 1), A.test(r) ? J(this, r) : function(r, t) {
                        var e, n, i, u, o, a, s, f, c;
                        if (t.indexOf("_") > -1) {
                            if (t = t.replace(/(\d)_(?=\d)/g, "$1"), A.test(t)) return J(r, t)
                        } else if ("Infinity" === t || "NaN" === t) return +t || (r.s = NaN), r.e = NaN, r.d = null, r;
                        if (x.test(t)) e = 16, t = t.toLowerCase();
                        else if (b.test(t)) e = 2;
                        else if (w.test(t)) e = 8;
                        else throw Error(m + t);
                        for ((u = t.search(/p/i)) > 0 ? (s = +t.slice(u + 1), t = t.substring(2, u)) : t = t.slice(2), o = (u = t.indexOf(".")) >= 0, n = r.constructor, o && (u = (a = (t = t.replace(".", "")).length) - u, i = q(n, new n(e), u, 2 * u)), u = c = (f = B(t, e, 1e7)).length - 1; 0 === f[u]; --u) f.pop();
                        return u < 0 ? new n(0 * r.s) : (r.e = O(f, c), r.d = f, h = !1, o && (r = S(r, i, 4 * a)), s && (r = r.times(54 > Math.abs(s) ? y(2, s) : rk.pow(2, s))), h = !0, r)
                    }(this, r);
                    if ("bigint" === n) return r < 0 ? (r = -r, this.s = -1) : this.s = 1, J(this, r.toString());
                    throw Error(m + r)
                }
                if (u.prototype = C, u.ROUND_UP = 0, u.ROUND_DOWN = 1, u.ROUND_CEIL = 2, u.ROUND_FLOOR = 3, u.ROUND_HALF_UP = 4, u.ROUND_HALF_DOWN = 5, u.ROUND_HALF_EVEN = 6, u.ROUND_HALF_CEIL = 7, u.ROUND_HALF_FLOOR = 8, u.EUCLID = 9, u.config = u.set = rf, u.clone = r, u.isDecimal = rd, u.abs = Q, u.acos = G, u.acosh = K, u.add = rr, u.asin = rt, u.asinh = re, u.atan = rn, u.atanh = ri, u.atan2 = ru, u.cbrt = ro, u.ceil = ra, u.clamp = rs, u.cos = rc, u.cosh = rl, u.div = rh, u.exp = rp, u.floor = rm, u.hypot = rD, u.ln = rv, u.log = rg, u.log10 = rb, u.log2 = ry, u.max = rx, u.min = rw, u.mod = rA, u.mul = rE, u.pow = rF, u.random = rC, u.round = r_, u.sign = rM, u.sin = rN, u.sinh = rB, u.sqrt = rS, u.sub = rT, u.sum = rz, u.tan = rO, u.tanh = rI, u.trunc = rj, void 0 === t && (t = {}), t && !0 !== t.defaults)
                    for (e = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"]; e < i.length;) t.hasOwnProperty(n = i[e++]) || (t[n] = this[n]);
                return u.config(t), u
            }(l);

            function rP(r, t) {
                if (rU(r, t)) return r[t];
                if ("function" == typeof r[t] && !(null == r || "function" != typeof r[t] || tF(r, t) && Object.getPrototypeOf && t in Object.getPrototypeOf(r)) && (tF(rL, t) || !(t in Object.prototype) && !(t in Function.prototype))) throw Error('Cannot access method "' + t + '" as a property');
                throw Error('No access to property "' + t + '"')
            }

            function rq(r, t, e) {
                if (rU(r, t)) return r[t] = e, e;
                throw Error('No access to property "' + t + '"')
            }

            function rU(r, t) {
                return !!("object" == typeof r && r && r.constructor === Object || Array.isArray(r)) && (!!tF(rR, t) || !(t in Object.prototype) && !(t in Function.prototype))
            }
            f = new rk(f), c = new rk(c);
            var rR = {
                    length: !0,
                    name: !0
                },
                rL = {
                    toString: !0,
                    valueOf: !0,
                    toLocaleString: !0
                };
            class rZ {
                constructor(r) {
                    this.wrappedObject = r, this[Symbol.iterator] = this.entries
                }
                keys() {
                    return Object.keys(this.wrappedObject).filter(r => this.has(r)).values()
                }
                get(r) {
                    return rP(this.wrappedObject, r)
                }
                set(r, t) {
                    return rq(this.wrappedObject, r, t), this
                }
                has(r) {
                    return rU(this.wrappedObject, r) && r in this.wrappedObject
                }
                entries() {
                    var r, t;
                    return r = this.keys(), t = r => [r, this.get(r)], {
                        next: () => {
                            var e = r.next();
                            return e.done ? e : {
                                value: t(e.value),
                                done: !1
                            }
                        }
                    }
                }
                forEach(r) {
                    for (var t of this.keys()) r(this.get(t), t, this)
                }
                delete(r) {
                    rU(this.wrappedObject, r) && delete this.wrappedObject[r]
                }
                clear() {
                    for (var r of this.keys()) this.delete(r)
                }
                get size() {
                    return Object.keys(this.wrappedObject).length
                }
            }

            function rV(r) {
                return "number" == typeof r
            }

            function rJ(r) {
                return !!r && "object" == typeof r && "function" == typeof r.constructor && (!0 === r.isBigNumber && "object" == typeof r.constructor.prototype && !0 === r.constructor.prototype.isBigNumber || "function" == typeof r.constructor.isDecimal && !0 === r.constructor.isDecimal(r))
            }

            function r$(r) {
                return "bigint" == typeof r
            }

            function rH(r) {
                return r && "object" == typeof r && !0 === Object.getPrototypeOf(r).isComplex || !1
            }

            function rY(r) {
                return r && "object" == typeof r && !0 === Object.getPrototypeOf(r).isFraction || !1
            }

            function rW(r) {
                return r && !0 === r.constructor.prototype.isUnit || !1
            }

            function rX(r) {
                return "string" == typeof r
            }
            var rQ = Array.isArray;

            function rG(r) {
                return r && !0 === r.constructor.prototype.isMatrix || !1
            }

            function rK(r) {
                return Array.isArray(r) || rG(r)
            }

            function r0(r) {
                return r && r.isDenseMatrix && !0 === r.constructor.prototype.isMatrix || !1
            }

            function r1(r) {
                return r && r.isSparseMatrix && !0 === r.constructor.prototype.isMatrix || !1
            }

            function r2(r) {
                return r && !0 === r.constructor.prototype.isRange || !1
            }

            function r8(r) {
                return r && !0 === r.constructor.prototype.isIndex || !1
            }

            function r3(r) {
                return "boolean" == typeof r
            }

            function r9(r) {
                return r && !0 === r.constructor.prototype.isResultSet || !1
            }

            function r5(r) {
                return r && !0 === r.constructor.prototype.isHelp || !1
            }

            function r7(r) {
                return "function" == typeof r
            }

            function r4(r) {
                return r instanceof Date
            }

            function r6(r) {
                return r instanceof RegExp
            }

            function tr(r) {
                return !!(r && "object" == typeof r && r.constructor === Object && !rH(r) && !rY(r))
            }

            function tt(r) {
                return !!r && (r instanceof Map || r instanceof rZ || "function" == typeof r.set && "function" == typeof r.get && "function" == typeof r.keys && "function" == typeof r.has)
            }

            function te(r) {
                return null === r
            }

            function tn(r) {
                return void 0 === r
            }

            function ti(r) {
                return r && !0 === r.isAccessorNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tu(r) {
                return r && !0 === r.isArrayNode && !0 === r.constructor.prototype.isNode || !1
            }

            function to(r) {
                return r && !0 === r.isAssignmentNode && !0 === r.constructor.prototype.isNode || !1
            }

            function ta(r) {
                return r && !0 === r.isBlockNode && !0 === r.constructor.prototype.isNode || !1
            }

            function ts(r) {
                return r && !0 === r.isConditionalNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tf(r) {
                return r && !0 === r.isConstantNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tc(r) {
                return r && !0 === r.isFunctionAssignmentNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tl(r) {
                return r && !0 === r.isFunctionNode && !0 === r.constructor.prototype.isNode || !1
            }

            function th(r) {
                return r && !0 === r.isIndexNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tp(r) {
                return r && !0 === r.isNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tm(r) {
                return r && !0 === r.isObjectNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tD(r) {
                return r && !0 === r.isOperatorNode && !0 === r.constructor.prototype.isNode || !1
            }

            function td(r) {
                return r && !0 === r.isParenthesisNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tv(r) {
                return r && !0 === r.isRangeNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tg(r) {
                return r && !0 === r.isRelationalNode && !0 === r.constructor.prototype.isNode || !1
            }

            function ty(r) {
                return r && !0 === r.isSymbolNode && !0 === r.constructor.prototype.isNode || !1
            }

            function tb(r) {
                return r && !0 === r.constructor.prototype.isChain || !1
            }

            function tx(r) {
                var t = typeof r;
                return "object" === t ? null === r ? "null" : rJ(r) ? "BigNumber" : r.constructor && r.constructor.name ? r.constructor.name : "Object" : t
            }

            function tw(r) {
                var t = typeof r;
                if ("number" === t || "bigint" === t || "string" === t || "boolean" === t || null == r) return r;
                if ("function" == typeof r.clone) return r.clone();
                if (Array.isArray(r)) return r.map(function(r) {
                    return tw(r)
                });
                if (r instanceof Date) return new Date(r.valueOf());
                if (rJ(r)) return r;
                if (tr(r)) return function(r, t) {
                    var e = {};
                    for (var n in r) tF(r, n) && (e[n] = t(r[n]));
                    return e
                }(r, tw);
                if ("function" === t) return r;
                throw TypeError("Cannot clone: unknown type of value (value: ".concat(r, ")"))
            }

            function tA(r, t) {
                for (var e in t) tF(t, e) && (r[e] = t[e]);
                return r
            }

            function tE(r, t) {
                var e, n, i;
                if (Array.isArray(r)) {
                    if (!Array.isArray(t) || r.length !== t.length) return !1;
                    for (n = 0, i = r.length; n < i; n++)
                        if (!tE(r[n], t[n])) return !1;
                    return !0
                }
                if ("function" == typeof r || !(r instanceof Object)) return r === t;
                if (Array.isArray(t) || !(t instanceof Object)) return !1;
                for (e in r)
                    if (!(e in t) || !tE(r[e], t[e])) return !1;
                for (e in t)
                    if (!(e in r)) return !1;
                return !0
            }

            function tF(r, t) {
                return r && Object.hasOwnProperty.call(r, t)
            }

            function tC(r, t, e, n) {
                function i(n) {
                    var i = function(r, t) {
                        for (var e = {}, n = 0; n < t.length; n++) {
                            var i = t[n],
                                u = r[i];
                            void 0 !== u && (e[i] = u)
                        }
                        return e
                    }(n, t.map(t_));
                    return function(r, t, e) {
                        if (!t.filter(r => !(r && "?" === r[0])).every(r => void 0 !== e[r])) {
                            var n = t.filter(r => void 0 === e[r]);
                            throw Error('Cannot create function "'.concat(r, '", ') + "some dependencies are missing: ".concat(n.map(r => '"'.concat(r, '"')).join(", "), "."))
                        }
                    }(r, t, n), e(i)
                }
                return i.isFactory = !0, i.fn = r, i.dependencies = t.slice().sort(), n && (i.meta = n), i
            }

            function t_(r) {
                return r && "?" === r[0] ? r.slice(1) : r
            }
            var tM = tC("BigNumber", ["?on", "config"], r => {
                var {
                    on: t,
                    config: e
                } = r, n = rk.clone({
                    precision: e.precision,
                    modulo: rk.EUCLID
                });
                return n.prototype = Object.create(n.prototype), n.prototype.type = "BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON = function() {
                    return {
                        mathjs: "BigNumber",
                        value: this.toString()
                    }
                }, n.fromJSON = function(r) {
                    return new n(r.value)
                }, t && t("config", function(r, t) {
                    r.precision !== t.precision && n.config({
                        precision: r.precision
                    })
                }), n
            }, {
                isClass: !0
            });
            let tN = Math.cosh || function(r) {
                    return 1e-9 > Math.abs(r) ? 1 - r : (Math.exp(r) + Math.exp(-r)) * .5
                },
                tB = Math.sinh || function(r) {
                    return 1e-9 > Math.abs(r) ? r : (Math.exp(r) - Math.exp(-r)) * .5
                },
                tS = function(r) {
                    let t = Math.PI / 4;
                    if (-t > r || r > t) return Math.cos(r) - 1;
                    let e = r * r;
                    return e * (e * (e * (e * (e * (e * (e * (e / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - .5)
                },
                tT = function(r, t) {
                    return ((r = Math.abs(r)) < (t = Math.abs(t)) && ([r, t] = [t, r]), r < 1e8) ? Math.sqrt(r * r + t * t) : (t /= r, r * Math.sqrt(1 + t * t))
                },
                tz = function() {
                    throw SyntaxError("Invalid Param")
                };

            function tO(r, t) {
                let e = Math.abs(r),
                    n = Math.abs(t);
                return 0 === r ? Math.log(n) : 0 === t ? Math.log(e) : e < 3e3 && n < 3e3 ? .5 * Math.log(r * r + t * t) : .5 * Math.log((r *= .5) * r + (t *= .5) * t) + Math.LN2
            }
            let tI = {
                    re: 0,
                    im: 0
                },
                tj = function(r, t) {
                    if (null == r) tI.re = tI.im = 0;
                    else if (void 0 !== t) tI.re = r, tI.im = t;
                    else switch (typeof r) {
                        case "object":
                            if ("im" in r && "re" in r) tI.re = r.re, tI.im = r.im;
                            else if ("abs" in r && "arg" in r) {
                                if (!isFinite(r.abs) && isFinite(r.arg)) return tk.INFINITY;
                                tI.re = r.abs * Math.cos(r.arg), tI.im = r.abs * Math.sin(r.arg)
                            } else if ("r" in r && "phi" in r) {
                                if (!isFinite(r.r) && isFinite(r.phi)) return tk.INFINITY;
                                tI.re = r.r * Math.cos(r.phi), tI.im = r.r * Math.sin(r.phi)
                            } else 2 === r.length ? (tI.re = r[0], tI.im = r[1]) : tz();
                            break;
                        case "string":
                            tI.im = tI.re = 0;
                            let e = r.replace(/_/g, "").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),
                                n = 1,
                                i = 0;
                            null === e && tz();
                            for (let r = 0; r < e.length; r++) {
                                let t = e[r];
                                " " === t || "	" === t || "\n" === t || ("+" === t ? n++ : "-" === t ? i++ : ("i" === t || "I" === t ? (n + i === 0 && tz(), " " === e[r + 1] || isNaN(e[r + 1]) ? tI.im += parseFloat((i % 2 ? "-" : "") + "1") : (tI.im += parseFloat((i % 2 ? "-" : "") + e[r + 1]), r++)) : ((n + i === 0 || isNaN(t)) && tz(), "i" === e[r + 1] || "I" === e[r + 1] ? (tI.im += parseFloat((i % 2 ? "-" : "") + t), r++) : tI.re += parseFloat((i % 2 ? "-" : "") + t)), n = i = 0))
                            }
                            n + i > 0 && tz();
                            break;
                        case "number":
                            tI.im = 0, tI.re = r;
                            break;
                        default:
                            tz()
                    }
                    return isNaN(tI.re) || isNaN(tI.im), tI
                };

            function tk(r, t) {
                if (!(this instanceof tk)) return new tk(r, t);
                let e = tj(r, t);
                this.re = e.re, this.im = e.im
            }

            function tP(r) {
                return "boolean" == typeof r || !!isFinite(r) && r === Math.round(r)
            }

            function tq(r, t) {
                return "bigint" !== t.number || /^-?\d+$/.test(r) ? t.number : t.numberFallback
            }
            tk.prototype = {
                re: 0,
                im: 0,
                sign: function() {
                    let r = tT(this.re, this.im);
                    return new tk(this.re / r, this.im / r)
                },
                add: function(r, t) {
                    let e = tj(r, t),
                        n = this.isInfinite(),
                        i = !(isFinite(e.re) && isFinite(e.im));
                    return n || i ? n && i ? tk.NAN : tk.INFINITY : new tk(this.re + e.re, this.im + e.im)
                },
                sub: function(r, t) {
                    let e = tj(r, t),
                        n = this.isInfinite(),
                        i = !(isFinite(e.re) && isFinite(e.im));
                    return n || i ? n && i ? tk.NAN : tk.INFINITY : new tk(this.re - e.re, this.im - e.im)
                },
                mul: function(r, t) {
                    let e = tj(r, t),
                        n = this.isInfinite(),
                        i = !(isFinite(e.re) && isFinite(e.im)),
                        u = 0 === this.re && 0 === this.im,
                        o = 0 === e.re && 0 === e.im;
                    return n && o || i && u ? tk.NAN : n || i ? tk.INFINITY : 0 === e.im && 0 === this.im ? new tk(this.re * e.re, 0) : new tk(this.re * e.re - this.im * e.im, this.re * e.im + this.im * e.re)
                },
                div: function(r, t) {
                    let e = tj(r, t),
                        n = this.isInfinite(),
                        i = !(isFinite(e.re) && isFinite(e.im)),
                        u = 0 === this.re && 0 === this.im,
                        o = 0 === e.re && 0 === e.im;
                    if (u && o || n && i) return tk.NAN;
                    if (o || n) return tk.INFINITY;
                    if (u || i) return tk.ZERO;
                    if (0 === e.im) return new tk(this.re / e.re, this.im / e.re);
                    if (Math.abs(e.re) < Math.abs(e.im)) {
                        let r = e.re / e.im,
                            t = e.re * r + e.im;
                        return new tk((this.re * r + this.im) / t, (this.im * r - this.re) / t)
                    } {
                        let r = e.im / e.re,
                            t = e.im * r + e.re;
                        return new tk((this.re + this.im * r) / t, (this.im - this.re * r) / t)
                    }
                },
                pow: function(r, t) {
                    let e = tj(r, t),
                        n = 0 === this.re && 0 === this.im;
                    if (0 === e.re && 0 === e.im) return tk.ONE;
                    if (0 === e.im) {
                        if (0 === this.im && this.re > 0) return new tk(Math.pow(this.re, e.re), 0);
                        if (0 === this.re) switch ((e.re % 4 + 4) % 4) {
                            case 0:
                                return new tk(Math.pow(this.im, e.re), 0);
                            case 1:
                                return new tk(0, Math.pow(this.im, e.re));
                            case 2:
                                return new tk(-Math.pow(this.im, e.re), 0);
                            case 3:
                                return new tk(0, -Math.pow(this.im, e.re))
                        }
                    }
                    if (n && e.re > 0) return tk.ZERO;
                    let i = Math.atan2(this.im, this.re),
                        u = tO(this.re, this.im),
                        o = Math.exp(e.re * u - e.im * i),
                        a = e.im * u + e.re * i;
                    return new tk(o * Math.cos(a), o * Math.sin(a))
                },
                sqrt: function() {
                    let r = this.re,
                        t = this.im;
                    if (0 === t) return r >= 0 ? new tk(Math.sqrt(r), 0) : new tk(0, Math.sqrt(-r));
                    let e = Math.sqrt(.5 * (tT(r, t) + Math.abs(r))),
                        n = Math.abs(t) / (2 * e);
                    return r >= 0 ? new tk(e, t < 0 ? -n : n) : new tk(n, t < 0 ? -e : e)
                },
                exp: function() {
                    let r = Math.exp(this.re);
                    return 0 === this.im ? new tk(r, 0) : new tk(r * Math.cos(this.im), r * Math.sin(this.im))
                },
                expm1: function() {
                    let r = this.re,
                        t = this.im;
                    return new tk(Math.expm1(r) * Math.cos(t) + tS(t), Math.exp(r) * Math.sin(t))
                },
                log: function() {
                    let r = this.re,
                        t = this.im;
                    return 0 === t && r > 0 ? new tk(Math.log(r), 0) : new tk(tO(r, t), Math.atan2(t, r))
                },
                abs: function() {
                    return tT(this.re, this.im)
                },
                arg: function() {
                    return Math.atan2(this.im, this.re)
                },
                sin: function() {
                    let r = this.re,
                        t = this.im;
                    return new tk(Math.sin(r) * tN(t), Math.cos(r) * tB(t))
                },
                cos: function() {
                    let r = this.re,
                        t = this.im;
                    return new tk(Math.cos(r) * tN(t), -Math.sin(r) * tB(t))
                },
                tan: function() {
                    let r = 2 * this.re,
                        t = 2 * this.im,
                        e = Math.cos(r) + tN(t);
                    return new tk(Math.sin(r) / e, tB(t) / e)
                },
                cot: function() {
                    let r = 2 * this.re,
                        t = 2 * this.im,
                        e = Math.cos(r) - tN(t);
                    return new tk(-Math.sin(r) / e, tB(t) / e)
                },
                sec: function() {
                    let r = this.re,
                        t = this.im,
                        e = .5 * tN(2 * t) + .5 * Math.cos(2 * r);
                    return new tk(Math.cos(r) * tN(t) / e, Math.sin(r) * tB(t) / e)
                },
                csc: function() {
                    let r = this.re,
                        t = this.im,
                        e = .5 * tN(2 * t) - .5 * Math.cos(2 * r);
                    return new tk(Math.sin(r) * tN(t) / e, -Math.cos(r) * tB(t) / e)
                },
                asin: function() {
                    let r = this.re,
                        t = this.im,
                        e = new tk(t * t - r * r + 1, -2 * r * t).sqrt(),
                        n = new tk(e.re - t, e.im + r).log();
                    return new tk(n.im, -n.re)
                },
                acos: function() {
                    let r = this.re,
                        t = this.im,
                        e = new tk(t * t - r * r + 1, -2 * r * t).sqrt(),
                        n = new tk(e.re - t, e.im + r).log();
                    return new tk(Math.PI / 2 - n.im, n.re)
                },
                atan: function() {
                    let r = this.re,
                        t = this.im;
                    if (0 === r) {
                        if (1 === t) return new tk(0, 1 / 0);
                        if (-1 === t) return new tk(0, -1 / 0)
                    }
                    let e = r * r + (1 - t) * (1 - t),
                        n = new tk((1 - t * t - r * r) / e, -2 * r / e).log();
                    return new tk(-.5 * n.im, .5 * n.re)
                },
                acot: function() {
                    let r = this.re,
                        t = this.im;
                    if (0 === t) return new tk(Math.atan2(1, r), 0);
                    let e = r * r + t * t;
                    return 0 !== e ? new tk(r / e, -t / e).atan() : new tk(0 !== r ? r / 0 : 0, 0 !== t ? -t / 0 : 0).atan()
                },
                asec: function() {
                    let r = this.re,
                        t = this.im;
                    if (0 === r && 0 === t) return new tk(0, 1 / 0);
                    let e = r * r + t * t;
                    return 0 !== e ? new tk(r / e, -t / e).acos() : new tk(0 !== r ? r / 0 : 0, 0 !== t ? -t / 0 : 0).acos()
                },
                acsc: function() {
                    let r = this.re,
                        t = this.im;
                    if (0 === r && 0 === t) return new tk(Math.PI / 2, 1 / 0);
                    let e = r * r + t * t;
                    return 0 !== e ? new tk(r / e, -t / e).asin() : new tk(0 !== r ? r / 0 : 0, 0 !== t ? -t / 0 : 0).asin()
                },
                sinh: function() {
                    let r = this.re,
                        t = this.im;
                    return new tk(tB(r) * Math.cos(t), tN(r) * Math.sin(t))
                },
                cosh: function() {
                    let r = this.re,
                        t = this.im;
                    return new tk(tN(r) * Math.cos(t), tB(r) * Math.sin(t))
                },
                tanh: function() {
                    let r = 2 * this.re,
                        t = 2 * this.im,
                        e = tN(r) + Math.cos(t);
                    return new tk(tB(r) / e, Math.sin(t) / e)
                },
                coth: function() {
                    let r = 2 * this.re,
                        t = 2 * this.im,
                        e = tN(r) - Math.cos(t);
                    return new tk(tB(r) / e, -Math.sin(t) / e)
                },
                csch: function() {
                    let r = this.re,
                        t = this.im,
                        e = Math.cos(2 * t) - tN(2 * r);
                    return new tk(-2 * tB(r) * Math.cos(t) / e, 2 * tN(r) * Math.sin(t) / e)
                },
                sech: function() {
                    let r = this.re,
                        t = this.im,
                        e = Math.cos(2 * t) + tN(2 * r);
                    return new tk(2 * tN(r) * Math.cos(t) / e, -2 * tB(r) * Math.sin(t) / e)
                },
                asinh: function() {
                    let r = this.im;
                    this.im = -this.re, this.re = r;
                    let t = this.asin();
                    return this.re = -this.im, this.im = r, r = t.re, t.re = -t.im, t.im = r, t
                },
                acosh: function() {
                    let r = this.acos();
                    if (r.im <= 0) {
                        let t = r.re;
                        r.re = -r.im, r.im = t
                    } else {
                        let t = r.im;
                        r.im = -r.re, r.re = t
                    }
                    return r
                },
                atanh: function() {
                    let r = this.re,
                        t = this.im,
                        e = 1 - r,
                        n = 1 + r,
                        i = e * e + t * t,
                        u = 0 !== i ? new tk((n * e - t * t) / i, (t * e + n * t) / i) : new tk(-1 !== r ? r / 0 : 0, 0 !== t ? t / 0 : 0),
                        o = u.re;
                    return u.re = tO(u.re, u.im) / 2, u.im = Math.atan2(u.im, o) / 2, r > 1 && 0 === t && (u.im = -u.im), u
                },
                acoth: function() {
                    let r = this.re,
                        t = this.im;
                    if (0 === r && 0 === t) return new tk(0, Math.PI / 2);
                    let e = r * r + t * t;
                    return 0 !== e ? new tk(r / e, -t / e).atanh() : new tk(0 !== r ? r / 0 : 0, 0 !== t ? -t / 0 : 0).atanh()
                },
                acsch: function() {
                    let r = this.re,
                        t = this.im;
                    if (0 === t) return new tk(0 !== r ? Math.log(r + Math.sqrt(r * r + 1)) : 1 / 0, 0);
                    let e = r * r + t * t;
                    return 0 !== e ? new tk(r / e, -t / e).asinh() : new tk(0 !== r ? r / 0 : 0, 0 !== t ? -t / 0 : 0).asinh()
                },
                asech: function() {
                    let r = this.re,
                        t = this.im;
                    if (this.isZero()) return tk.INFINITY;
                    let e = r * r + t * t;
                    return 0 !== e ? new tk(r / e, -t / e).acosh() : new tk(0 !== r ? r / 0 : 0, 0 !== t ? -t / 0 : 0).acosh()
                },
                inverse: function() {
                    if (this.isZero()) return tk.INFINITY;
                    if (this.isInfinite()) return tk.ZERO;
                    let r = this.re,
                        t = this.im,
                        e = r * r + t * t;
                    return new tk(r / e, -t / e)
                },
                conjugate: function() {
                    return new tk(this.re, -this.im)
                },
                neg: function() {
                    return new tk(-this.re, -this.im)
                },
                ceil: function(r) {
                    return r = Math.pow(10, r || 0), new tk(Math.ceil(this.re * r) / r, Math.ceil(this.im * r) / r)
                },
                floor: function(r) {
                    return r = Math.pow(10, r || 0), new tk(Math.floor(this.re * r) / r, Math.floor(this.im * r) / r)
                },
                round: function(r) {
                    return r = Math.pow(10, r || 0), new tk(Math.round(this.re * r) / r, Math.round(this.im * r) / r)
                },
                equals: function(r, t) {
                    let e = tj(r, t);
                    return Math.abs(e.re - this.re) <= tk.EPSILON && Math.abs(e.im - this.im) <= tk.EPSILON
                },
                clone: function() {
                    return new tk(this.re, this.im)
                },
                toString: function() {
                    let r = this.re,
                        t = this.im,
                        e = "";
                    return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(r) < tk.EPSILON && (r = 0), Math.abs(t) < tk.EPSILON && (t = 0), 0 === t) ? e + r : (0 !== r ? (e += r + " ", t < 0 ? (t = -t, e += "-") : e += "+", e += " ") : t < 0 && (t = -t, e += "-"), 1 !== t && (e += t), e + "i")
                },
                toVector: function() {
                    return [this.re, this.im]
                },
                valueOf: function() {
                    return 0 === this.im ? this.re : null
                },
                isNaN: function() {
                    return isNaN(this.re) || isNaN(this.im)
                },
                isZero: function() {
                    return 0 === this.im && 0 === this.re
                },
                isFinite: function() {
                    return isFinite(this.re) && isFinite(this.im)
                },
                isInfinite: function() {
                    return !this.isFinite()
                }
            }, tk.ZERO = new tk(0, 0), tk.ONE = new tk(1, 0), tk.I = new tk(0, 1), tk.PI = new tk(Math.PI, 0), tk.E = new tk(Math.E, 0), tk.INFINITY = new tk(1 / 0, 1 / 0), tk.NAN = new tk(NaN, NaN), tk.EPSILON = 1e-15;
            var tU = Math.sign || function(r) {
                    return r > 0 ? 1 : r < 0 ? -1 : 0
                },
                tR = Math.log2 || function(r) {
                    return Math.log(r) / Math.LN2
                },
                tL = Math.cbrt || function(r) {
                    if (0 === r) return r;
                    var t, e = r < 0;
                    return e && (r = -r), isFinite(r) ? (t = Math.exp(Math.log(r) / 3), t = (r / (t * t) + 2 * t) / 3) : t = r, e ? -t : t
                },
                tZ = Math.expm1 || function(r) {
                    return r >= 2e-4 || r <= -.0002 ? Math.exp(r) - 1 : r + r * r / 2 + r * r * r / 6
                };

            function tV(r, t, e) {
                var n = "";
                if (e) {
                    if (e < 1) throw Error("size must be in greater than 0");
                    if (!tP(e)) throw Error("size must be an integer");
                    if (r > 2 ** (e - 1) - 1 || r < -(2 ** (e - 1))) throw Error("Value must be in range [-2^".concat(e - 1, ", 2^").concat(e - 1, "-1]"));
                    if (!tP(r)) throw Error("Value must be an integer");
                    r < 0 && (r += 2 ** e), n = "i".concat(e)
                }
                var i = "";
                return r < 0 && (r = -r, i = "-"), "".concat(i).concat({
                    2: "0b",
                    8: "0o",
                    16: "0x"
                }[t]).concat(r.toString(t)).concat(n)
            }

            function tJ(r, t) {
                if ("function" == typeof t) return t(r);
                if (r === 1 / 0) return "Infinity";
                if (r === -1 / 0) return "-Infinity";
                if (isNaN(r)) return "NaN";
                var {
                    notation: e,
                    precision: n,
                    wordSize: i
                } = t$(t);
                switch (e) {
                    case "fixed":
                        return tY(r, n);
                    case "exponential":
                        return tW(r, n);
                    case "engineering":
                        return function(r, t) {
                            if (isNaN(r) || !isFinite(r)) return String(r);
                            var e = tX(tH(r), t),
                                n = e.exponent,
                                i = e.coefficients,
                                u = n % 3 == 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3;
                            if (rV(t))
                                for (; t > i.length || n - u + 1 > i.length;) i.push(0);
                            else
                                for (var o = Math.abs(n - u) - (i.length - 1), a = 0; a < o; a++) i.push(0);
                            for (var s = Math.abs(n - u), f = 1; s > 0;) f++, s--;
                            var c = i.slice(f).join(""),
                                l = rV(t) && c.length || c.match(/[1-9]/) ? "." + c : "",
                                h = i.slice(0, f).join("") + l + "e" + (n >= 0 ? "+" : "") + u.toString();
                            return e.sign + h
                        }(r, n);
                    case "bin":
                        return tV(r, 2, i);
                    case "oct":
                        return tV(r, 8, i);
                    case "hex":
                        return tV(r, 16, i);
                    case "auto":
                        return (function(r, t, e) {
                            if (isNaN(r) || !isFinite(r)) return String(r);
                            var n = t2(null == e ? void 0 : e.lowerExp, -3),
                                i = t2(null == e ? void 0 : e.upperExp, 5),
                                u = tH(r),
                                o = t ? tX(u, t) : u;
                            if (o.exponent < n || o.exponent >= i) return tW(r, t);
                            var a = o.coefficients,
                                s = o.exponent;
                            a.length < t && (a = a.concat(tQ(t - a.length))), a = a.concat(tQ(s - a.length + 1 + (a.length < t ? t - a.length : 0))), a = tQ(-s).concat(a);
                            var f = s > 0 ? s : 0;
                            return f < a.length - 1 && a.splice(f + 1, 0, "."), o.sign + a.join("")
                        })(r, n, t).replace(/((\.\d*?)(0+))($|e)/, function() {
                            var r = arguments[2],
                                t = arguments[4];
                            return "." !== r ? r + t : t
                        });
                    default:
                        throw Error('Unknown notation "' + e + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
                }
            }

            function t$(r) {
                var t, e, n = "auto";
                if (void 0 !== r) {
                    if (rV(r)) t = r;
                    else if (rJ(r)) t = r.toNumber();
                    else if (tr(r)) void 0 !== r.precision && (t = t1(r.precision, () => {
                        throw Error('Option "precision" must be a number or BigNumber')
                    })), void 0 !== r.wordSize && (e = t1(r.wordSize, () => {
                        throw Error('Option "wordSize" must be a number or BigNumber')
                    })), r.notation && (n = r.notation);
                    else throw Error("Unsupported type of options, number, BigNumber, or object expected")
                }
                return {
                    notation: n,
                    precision: t,
                    wordSize: e
                }
            }

            function tH(r) {
                var t = String(r).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
                if (!t) throw SyntaxError("Invalid number " + r);
                var e = t[1],
                    n = t[2],
                    i = parseFloat(t[4] || "0"),
                    u = n.indexOf(".");
                i += -1 !== u ? u - 1 : n.length - 1;
                var o = n.replace(".", "").replace(/^0*/, function(r) {
                    return i -= r.length, ""
                }).replace(/0*$/, "").split("").map(function(r) {
                    return parseInt(r)
                });
                return 0 === o.length && (o.push(0), i++), {
                    sign: e,
                    coefficients: o,
                    exponent: i
                }
            }

            function tY(r, t) {
                if (isNaN(r) || !isFinite(r)) return String(r);
                var e = tH(r),
                    n = "number" == typeof t ? tX(e, e.exponent + 1 + t) : e,
                    i = n.coefficients,
                    u = n.exponent + 1,
                    o = u + (t || 0);
                return i.length < o && (i = i.concat(tQ(o - i.length))), u < 0 && (i = tQ(-u + 1).concat(i), u = 1), u < i.length && i.splice(u, 0, 0 === u ? "0." : "."), n.sign + i.join("")
            }

            function tW(r, t) {
                if (isNaN(r) || !isFinite(r)) return String(r);
                var e = tH(r),
                    n = t ? tX(e, t) : e,
                    i = n.coefficients,
                    u = n.exponent;
                i.length < t && (i = i.concat(tQ(t - i.length)));
                var o = i.shift();
                return n.sign + o + (i.length > 0 ? "." + i.join("") : "") + "e" + (u >= 0 ? "+" : "") + u
            }

            function tX(r, t) {
                for (var e = {
                        sign: r.sign,
                        coefficients: r.coefficients,
                        exponent: r.exponent
                    }, n = e.coefficients; t <= 0;) n.unshift(0), e.exponent++, t++;
                if (n.length > t && n.splice(t, n.length - t)[0] >= 5) {
                    var i = t - 1;
                    for (n[i]++; 10 === n[i];) n.pop(), 0 === i && (n.unshift(0), e.exponent++, i++), i--, n[i]++
                }
                return e
            }

            function tQ(r) {
                for (var t = [], e = 0; e < r; e++) t.push(0);
                return t
            }

            function tG(r, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-8,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (e <= 0) throw Error("Relative tolerance must be greater than 0");
                if (n < 0) throw Error("Absolute tolerance must be at least 0");
                return !(isNaN(r) || isNaN(t)) && (isFinite(r) && isFinite(t) ? r === t || Math.abs(r - t) <= Math.max(e * Math.max(Math.abs(r), Math.abs(t)), n) : r === t)
            }
            var tK = Math.asinh || function(r) {
                    return Math.log(Math.sqrt(r * r + 1) + r)
                },
                t0 = Math.sinh || function(r) {
                    return (Math.exp(r) - Math.exp(-r)) / 2
                };

            function t1(r, t) {
                return rV(r) ? r : rJ(r) ? r.toNumber() : void t()
            }

            function t2(r, t) {
                return rV(r) ? r : rJ(r) ? r.toNumber() : t
            }
            var t8 = tC("Complex", [], () => (Object.defineProperty(tk, "name", {
                value: "Complex"
            }), tk.prototype.constructor = tk, tk.prototype.type = "Complex", tk.prototype.isComplex = !0, tk.prototype.toJSON = function() {
                return {
                    mathjs: "Complex",
                    re: this.re,
                    im: this.im
                }
            }, tk.prototype.toPolar = function() {
                return {
                    r: this.abs(),
                    phi: this.arg()
                }
            }, tk.prototype.format = function(r) {
                var t = this.im,
                    e = this.re,
                    n = tJ(this.re, r),
                    i = tJ(this.im, r),
                    u = rV(r) ? r : r ? r.precision : null;
                if (null !== u) {
                    var o = Math.pow(10, -u);
                    Math.abs(e / t) < o && (e = 0), Math.abs(t / e) < o && (t = 0)
                }
                return 0 === t ? n : 0 === e ? 1 === t ? "i" : -1 === t ? "-i" : i + "i" : t < 0 ? -1 === t ? n + " - i" : n + " - " + i.substring(1) + "i" : 1 === t ? n + " + i" : n + " + " + i + "i"
            }, tk.fromPolar = function(r) {
                switch (arguments.length) {
                    case 1:
                        var t = arguments[0];
                        if ("object" == typeof t) return tk(t);
                        throw TypeError("Input has to be an object with r and phi keys.");
                    case 2:
                        var e = arguments[0],
                            n = arguments[1];
                        if (rV(e)) {
                            if (rW(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), rV(n)) return new tk({
                                r: e,
                                phi: n
                            });
                            throw TypeError("Phi is not a number nor an angle unit.")
                        }
                        throw TypeError("Radius r is not a number.");
                    default:
                        throw SyntaxError("Wrong number of arguments in function fromPolar")
                }
            }, tk.prototype.valueOf = tk.prototype.toString, tk.fromJSON = function(r) {
                return new tk(r)
            }, tk.compare = function(r, t) {
                return r.re > t.re ? 1 : r.re < t.re ? -1 : r.im > t.im ? 1 : r.im < t.im ? -1 : 0
            }, tk), {
                isClass: !0
            });

            function t3(r) {
                var {
                    hasher: t,
                    limit: e
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e = null == e ? Number.POSITIVE_INFINITY : e, t = null == t ? JSON.stringify : t,
                    function n() {
                        if ("object" != typeof n.cache) {
                            var i, u, o, a, s, f, c;
                            n.cache = {
                                values: new Map,
                                lru: (i = e || Number.POSITIVE_INFINITY, u = 0, o = 1, a = Object.create(null), s = Object.create(null), f = 0, c = function(r) {
                                    var t = s[r];
                                    if (t && (delete a[t], delete s[r], --u, o === t)) {
                                        if (!u) {
                                            f = 0, o = 1;
                                            return
                                        }
                                        for (; !Object.prototype.hasOwnProperty.call(a, ++o););
                                    }
                                }, i = Math.abs(i), {
                                    hit: function(r) {
                                        var t = s[r],
                                            e = ++f;
                                        if (a[e] = r, s[r] = e, !t) {
                                            if (++u <= i) return;
                                            return c(r = a[o]), r
                                        }
                                        if (delete a[t], o === t)
                                            for (; !Object.prototype.hasOwnProperty.call(a, ++o););
                                    },
                                    delete: c,
                                    clear: function() {
                                        u = f = 0, o = 1, a = Object.create(null), s = Object.create(null)
                                    }
                                })
                            }
                        }
                        for (var l = [], h = 0; h < arguments.length; h++) l[h] = arguments[h];
                        var p = t(l);
                        if (n.cache.values.has(p)) return n.cache.lru.hit(p), n.cache.values.get(p);
                        var m = r.apply(r, l);
                        return n.cache.values.set(p, m), n.cache.values.delete(n.cache.lru.hit(p)), m
                    }
            }
            t3(function(r) {
                return new r(1).exp()
            }, {
                hasher: t7
            }), t3(function(r) {
                return new r(1).plus(new r(5).sqrt()).div(2)
            }, {
                hasher: t7
            });
            var t9 = t3(function(r) {
                    return r.acos(-1)
                }, {
                    hasher: t7
                }),
                t5 = t3(function(r) {
                    return t9(r).times(2)
                }, {
                    hasher: t7
                });

            function t7(r) {
                return r[0].precision
            }
            var t4 = Math.PI,
                t6 = 2 * Math.PI;

            function er(r, t, e) {
                return tC(r, t, e, {
                    recreateOnConfigChange: !0
                })
            }

            function et(r, t) {
                return tC(r, ["config", "BigNumber"], r => {
                    var {
                        config: e,
                        BigNumber: n
                    } = r;
                    return "BigNumber" === e.number ? new n(t) : t
                })
            }
            et("fineStructure", .0072973525693), et("weakMixingAngle", .2229), et("efimovFactor", 22.7), et("sackurTetrode", -1.16487052358);
            var ee = {
                s: 1,
                n: 0,
                d: 1
            };

            function en(r, t) {
                if (isNaN(r = parseInt(r, 10))) throw ec();
                return r * t
            }

            function ei(r, t) {
                if (0 === t) throw ef();
                var e = Object.create(es.prototype);
                e.s = r < 0 ? -1 : 1;
                var n = ea(r = r < 0 ? -r : r, t);
                return e.n = r / n, e.d = t / n, e
            }

            function eu(r) {
                for (var t = {}, e = r, n = 2, i = 4; i <= e;) {
                    for (; e % n == 0;) e /= n, t[n] = (t[n] || 0) + 1;
                    i += 1 + 2 * n++
                }
                return e !== r ? e > 1 && (t[e] = (t[e] || 0) + 1) : t[r] = (t[r] || 0) + 1, t
            }
            var eo = function(r, t) {
                var e, n = 0,
                    i = 1,
                    u = 1,
                    o = 0,
                    a = 0,
                    s = 0,
                    f = 1,
                    c = 1,
                    l = 0,
                    h = 1,
                    p = 1,
                    m = 1;
                if (null == r);
                else if (void 0 !== t) {
                    if (u = (n = r) * (i = t), n % 1 != 0 || i % 1 != 0) throw el()
                } else switch (typeof r) {
                    case "object":
                        if ("d" in r && "n" in r) n = r.n, i = r.d, "s" in r && (n *= r.s);
                        else if (0 in r) n = r[0], 1 in r && (i = r[1]);
                        else throw ec();
                        u = n * i;
                        break;
                    case "number":
                        if (r < 0 && (u = r, r = -r), r % 1 == 0) n = r;
                        else if (r > 0) {
                            for (r >= 1 && (c = Math.pow(10, Math.floor(1 + Math.log(r) / Math.LN10)), r /= c); h <= 1e7 && m <= 1e7;) {
                                if (r === (e = (l + p) / (h + m))) {
                                    h + m <= 1e7 ? (n = l + p, i = h + m) : m > h ? (n = p, i = m) : (n = l, i = h);
                                    break
                                }
                                r > e ? (l += p, h += m) : (p += l, m += h), h > 1e7 ? (n = p, i = m) : (n = l, i = h)
                            }
                            n *= c
                        } else(isNaN(r) || isNaN(t)) && (i = n = NaN);
                        break;
                    case "string":
                        if (null === (h = r.match(/\d+|./g))) throw ec();
                        if ("-" === h[l] ? (u = -1, l++) : "+" === h[l] && l++, h.length === l + 1 ? a = en(h[l++], u) : "." === h[l + 1] || "." === h[l] ? ("." !== h[l] && (o = en(h[l++], u)), (++l + 1 === h.length || "(" === h[l + 1] && ")" === h[l + 3] || "'" === h[l + 1] && "'" === h[l + 3]) && (a = en(h[l], u), f = Math.pow(10, h[l].length), l++), ("(" === h[l] && ")" === h[l + 2] || "'" === h[l] && "'" === h[l + 2]) && (s = en(h[l + 1], u), c = Math.pow(10, h[l + 1].length) - 1, l += 3)) : "/" === h[l + 1] || ":" === h[l + 1] ? (a = en(h[l], u), f = en(h[l + 2], 1), l += 3) : "/" === h[l + 3] && " " === h[l + 1] && (o = en(h[l], u), a = en(h[l + 2], u), f = en(h[l + 4], 1), l += 5), h.length <= l) {
                            u = n = s + (i = f * c) * o + c * a;
                            break
                        }
                    default:
                        throw ec()
                }
                if (0 === i) throw ef();
                ee.s = u < 0 ? -1 : 1, ee.n = Math.abs(n), ee.d = Math.abs(i)
            };

            function ea(r, t) {
                if (!r) return t;
                if (!t) return r;
                for (;;) {
                    if (!(r %= t)) return t;
                    if (!(t %= r)) return r
                }
            }

            function es(r, t) {
                if (eo(r, t), !(this instanceof es)) return ei(ee.s * ee.n, ee.d);
                r = ea(ee.d, ee.n), this.s = ee.s, this.n = ee.n / r, this.d = ee.d / r
            }
            var ef = function() {
                    return Error("Division by Zero")
                },
                ec = function() {
                    return Error("Invalid argument")
                },
                el = function() {
                    return Error("Parameters must be integer")
                };
            es.prototype = {
                s: 1,
                n: 0,
                d: 1,
                abs: function() {
                    return ei(this.n, this.d)
                },
                neg: function() {
                    return ei(-this.s * this.n, this.d)
                },
                add: function(r, t) {
                    return eo(r, t), ei(this.s * this.n * ee.d + ee.s * this.d * ee.n, this.d * ee.d)
                },
                sub: function(r, t) {
                    return eo(r, t), ei(this.s * this.n * ee.d - ee.s * this.d * ee.n, this.d * ee.d)
                },
                mul: function(r, t) {
                    return eo(r, t), ei(this.s * ee.s * this.n * ee.n, this.d * ee.d)
                },
                div: function(r, t) {
                    return eo(r, t), ei(this.s * ee.s * this.n * ee.d, this.d * ee.n)
                },
                clone: function() {
                    return ei(this.s * this.n, this.d)
                },
                mod: function(r, t) {
                    if (isNaN(this.n) || isNaN(this.d)) return new es(NaN);
                    if (void 0 === r) return ei(this.s * this.n % this.d, 1);
                    if (eo(r, t), 0 === ee.n && 0 === this.d) throw ef();
                    return ei(this.s * (ee.d * this.n) % (ee.n * this.d), ee.d * this.d)
                },
                gcd: function(r, t) {
                    return eo(r, t), ei(ea(ee.n, this.n) * ea(ee.d, this.d), ee.d * this.d)
                },
                lcm: function(r, t) {
                    return (eo(r, t), 0 === ee.n && 0 === this.n) ? ei(0, 1) : ei(ee.n * this.n, ea(ee.n, this.n) * ea(ee.d, this.d))
                },
                ceil: function(r) {
                    return (r = Math.pow(10, r || 0), isNaN(this.n) || isNaN(this.d)) ? new es(NaN) : ei(Math.ceil(r * this.s * this.n / this.d), r)
                },
                floor: function(r) {
                    return (r = Math.pow(10, r || 0), isNaN(this.n) || isNaN(this.d)) ? new es(NaN) : ei(Math.floor(r * this.s * this.n / this.d), r)
                },
                round: function(r) {
                    return (r = Math.pow(10, r || 0), isNaN(this.n) || isNaN(this.d)) ? new es(NaN) : ei(Math.round(r * this.s * this.n / this.d), r)
                },
                roundTo: function(r, t) {
                    return eo(r, t), ei(this.s * Math.round(this.n * ee.d / (this.d * ee.n)) * ee.n, ee.d)
                },
                inverse: function() {
                    return ei(this.s * this.d, this.n)
                },
                pow: function(r, t) {
                    if (eo(r, t), 1 === ee.d) return ee.s < 0 ? ei(Math.pow(this.s * this.d, ee.n), Math.pow(this.n, ee.n)) : ei(Math.pow(this.s * this.n, ee.n), Math.pow(this.d, ee.n));
                    if (this.s < 0) return null;
                    var e = eu(this.n),
                        n = eu(this.d),
                        i = 1,
                        u = 1;
                    for (var o in e)
                        if ("1" !== o) {
                            if ("0" === o) {
                                i = 0;
                                break
                            }
                            if (e[o] *= ee.n, e[o] % ee.d != 0) return null;
                            e[o] /= ee.d, i *= Math.pow(o, e[o])
                        }
                    for (var o in n)
                        if ("1" !== o) {
                            if (n[o] *= ee.n, n[o] % ee.d != 0) return null;
                            n[o] /= ee.d, u *= Math.pow(o, n[o])
                        }
                    return ee.s < 0 ? ei(u, i) : ei(i, u)
                },
                equals: function(r, t) {
                    return eo(r, t), this.s * this.n * ee.d == ee.s * ee.n * this.d
                },
                compare: function(r, t) {
                    eo(r, t);
                    var e = this.s * this.n * ee.d - ee.s * ee.n * this.d;
                    return (0 < e) - (e < 0)
                },
                simplify: function(r) {
                    if (isNaN(this.n) || isNaN(this.d)) return this;
                    r = r || .001;
                    for (var t = this.abs(), e = t.toContinued(), n = 1; n < e.length; n++) {
                        for (var i = ei(e[n - 1], 1), u = n - 2; u >= 0; u--) i = i.inverse().add(e[u]);
                        if (Math.abs(i.sub(t).valueOf()) < r) return i.mul(this.s)
                    }
                    return this
                },
                divisible: function(r, t) {
                    return eo(r, t), !(!(ee.n * this.d) || this.n * ee.d % (ee.n * this.d))
                },
                valueOf: function() {
                    return this.s * this.n / this.d
                },
                toFraction: function(r) {
                    var t, e = "",
                        n = this.n,
                        i = this.d;
                    return this.s < 0 && (e += "-"), 1 === i ? e += n : (r && (t = Math.floor(n / i)) > 0 && (e += t + " ", n %= i), e += n + "/" + i), e
                },
                toLatex: function(r) {
                    var t, e = "",
                        n = this.n,
                        i = this.d;
                    return this.s < 0 && (e += "-"), 1 === i ? e += n : (r && (t = Math.floor(n / i)) > 0 && (e += t, n %= i), e += "\\frac{" + n + "}{" + i + "}"), e
                },
                toContinued: function() {
                    var r, t = this.n,
                        e = this.d,
                        n = [];
                    if (isNaN(t) || isNaN(e)) return n;
                    do n.push(Math.floor(t / e)), r = t % e, t = e, e = r; while (1 !== t);
                    return n
                },
                toString: function(r) {
                    var t = this.n,
                        e = this.d;
                    if (isNaN(t) || isNaN(e)) return "NaN";
                    r = r || 15;
                    var n = function(r, t) {
                            for (; t % 2 == 0; t /= 2);
                            for (; t % 5 == 0; t /= 5);
                            if (1 === t) return 0;
                            for (var e = 10 % t, n = 1; 1 !== e; n++)
                                if (e = 10 * e % t, n > 2e3) return 0;
                            return n
                        }(0, e),
                        i = function(r, t, e) {
                            for (var n = 1, i = function(r, t, e) {
                                    for (var n = 1; t > 0; r = r * r % e, t >>= 1) 1 & t && (n = n * r % e);
                                    return n
                                }(10, e, t), u = 0; u < 300; u++) {
                                if (n === i) return u;
                                n = 10 * n % t, i = 10 * i % t
                            }
                            return 0
                        }(0, e, n),
                        u = this.s < 0 ? "-" : "";
                    if (u += t / e | 0, t %= e, (t *= 10) && (u += "."), n) {
                        for (var o = i; o--;) u += t / e | 0, t %= e, t *= 10;
                        u += "(";
                        for (var o = n; o--;) u += t / e | 0, t %= e, t *= 10;
                        u += ")"
                    } else
                        for (var o = r; t && o--;) u += t / e | 0, t %= e, t *= 10;
                    return u
                }
            };
            var eh = tC("Fraction", [], () => (Object.defineProperty(es, "name", {
                    value: "Fraction"
                }), es.prototype.constructor = es, es.prototype.type = "Fraction", es.prototype.isFraction = !0, es.prototype.toJSON = function() {
                    return {
                        mathjs: "Fraction",
                        n: this.s * this.n,
                        d: this.d
                    }
                }, es.fromJSON = function(r) {
                    return new es(r)
                }, es), {
                    isClass: !0
                }),
                ep = tC("Matrix", [], () => {
                    function r() {
                        if (!(this instanceof r)) throw SyntaxError("Constructor must be called with the new operator")
                    }
                    return r.prototype.type = "Matrix", r.prototype.isMatrix = !0, r.prototype.storage = function() {
                        throw Error("Cannot invoke storage on a Matrix interface")
                    }, r.prototype.datatype = function() {
                        throw Error("Cannot invoke datatype on a Matrix interface")
                    }, r.prototype.create = function(r, t) {
                        throw Error("Cannot invoke create on a Matrix interface")
                    }, r.prototype.subset = function(r, t, e) {
                        throw Error("Cannot invoke subset on a Matrix interface")
                    }, r.prototype.get = function(r) {
                        throw Error("Cannot invoke get on a Matrix interface")
                    }, r.prototype.set = function(r, t, e) {
                        throw Error("Cannot invoke set on a Matrix interface")
                    }, r.prototype.resize = function(r, t) {
                        throw Error("Cannot invoke resize on a Matrix interface")
                    }, r.prototype.reshape = function(r, t) {
                        throw Error("Cannot invoke reshape on a Matrix interface")
                    }, r.prototype.clone = function() {
                        throw Error("Cannot invoke clone on a Matrix interface")
                    }, r.prototype.size = function() {
                        throw Error("Cannot invoke size on a Matrix interface")
                    }, r.prototype.map = function(r, t) {
                        throw Error("Cannot invoke map on a Matrix interface")
                    }, r.prototype.forEach = function(r) {
                        throw Error("Cannot invoke forEach on a Matrix interface")
                    }, r.prototype[Symbol.iterator] = function() {
                        throw Error("Cannot iterate a Matrix interface")
                    }, r.prototype.toArray = function() {
                        throw Error("Cannot invoke toArray on a Matrix interface")
                    }, r.prototype.valueOf = function() {
                        throw Error("Cannot invoke valueOf on a Matrix interface")
                    }, r.prototype.format = function(r) {
                        throw Error("Cannot invoke format on a Matrix interface")
                    }, r.prototype.toString = function() {
                        throw Error("Cannot invoke toString on a Matrix interface")
                    }, r
                }, {
                    isClass: !0
                });

            function em(r, t, e) {
                var n = new r.constructor(2),
                    i = "";
                if (e) {
                    if (e < 1) throw Error("size must be in greater than 0");
                    if (!tP(e)) throw Error("size must be an integer");
                    if (r.greaterThan(n.pow(e - 1).sub(1)) || r.lessThan(n.pow(e - 1).mul(-1))) throw Error("Value must be in range [-2^".concat(e - 1, ", 2^").concat(e - 1, "-1]"));
                    if (!r.isInteger()) throw Error("Value must be an integer");
                    r.lessThan(0) && (r = r.add(n.pow(e))), i = "i".concat(e)
                }
                switch (t) {
                    case 2:
                        return "".concat(r.toBinary()).concat(i);
                    case 8:
                        return "".concat(r.toOctal()).concat(i);
                    case 16:
                        return "".concat(r.toHexadecimal()).concat(i);
                    default:
                        throw Error("Base ".concat(t, " not supported "))
                }
            }

            function eD(r, t) {
                return void 0 !== t ? r.toExponential(t - 1) : r.toExponential()
            }

            function ed(r, t) {
                return rV(r) ? r : rJ(r) ? r.toNumber() : t
            }

            function ev(r, t) {
                var e = function(r, t) {
                    return "number" == typeof r ? tJ(r, t) : rJ(r) ? function(r, t) {
                        if ("function" == typeof t) return t(r);
                        if (!r.isFinite()) return r.isNaN() ? "NaN" : r.gt(0) ? "Infinity" : "-Infinity";
                        var {
                            notation: e,
                            precision: n,
                            wordSize: i
                        } = t$(t);
                        switch (e) {
                            case "fixed":
                                return r.toFixed(n);
                            case "exponential":
                                return eD(r, n);
                            case "engineering":
                                return o = (u = r.e) % 3 == 0 ? u : u < 0 ? u - 3 - u % 3 : u - u % 3, (a = r.mul(Math.pow(10, -o)).toPrecision(n)).includes("e") && (a = new r.constructor(a).toFixed()), a + "e" + (u >= 0 ? "+" : "") + o.toString();
                            case "bin":
                                return em(r, 2, i);
                            case "oct":
                                return em(r, 8, i);
                            case "hex":
                                return em(r, 16, i);
                            case "auto":
                                var u, o, a, s = ed(null == t ? void 0 : t.lowerExp, -3),
                                    f = ed(null == t ? void 0 : t.upperExp, 5);
                                if (r.isZero()) return "0";
                                var c = r.toSignificantDigits(n),
                                    l = c.e;
                                return (l >= s && l < f ? c.toFixed() : eD(r, n)).replace(/((\.\d*?)(0+))($|e)/, function() {
                                    var r = arguments[2],
                                        t = arguments[4];
                                    return "." !== r ? r + t : t
                                });
                            default:
                                throw Error('Unknown notation "' + e + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
                        }
                    }(r, t) : r && "object" == typeof r && "number" == typeof r.s && "number" == typeof r.n && "number" == typeof r.d ? t && "decimal" === t.fraction ? r.toString() : r.s * r.n + "/" + r.d : Array.isArray(r) ? function r(t, e) {
                        if (!Array.isArray(t)) return ev(t, e);
                        for (var n = "[", i = t.length, u = 0; u < i; u++) 0 !== u && (n += ", "), n += r(t[u], e);
                        return n + "]"
                    }(r, t) : rX(r) ? eg(r) : "function" == typeof r ? r.syntax ? String(r.syntax) : "function" : r && "object" == typeof r ? "function" == typeof r.format ? r.format(t) : r && r.toString(t) !== ({}).toString() ? r.toString(t) : "{" + Object.keys(r).map(e => eg(e) + ": " + ev(r[e], t)).join(", ") + "}" : String(r)
                }(r, t);
                return t && "object" == typeof t && "truncate" in t && e.length > t.truncate ? e.substring(0, t.truncate - 3) + "..." : e
            }

            function eg(r) {
                for (var t = String(r), e = "", n = 0; n < t.length;) {
                    var i = t.charAt(n);
                    e += i in ey ? ey[i] : i, n++
                }
                return '"' + e + '"'
            }
            var ey = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "	": "\\t"
            };

            function eb(r, t) {
                if (!rX(r)) throw TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + tx(r) + ", index: 0)");
                if (!rX(t)) throw TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + tx(t) + ", index: 1)");
                return r === t ? 0 : r > t ? 1 : -1
            }

            function ex(r, t, e) {
                if (!(this instanceof ex)) throw SyntaxError("Constructor must be called with the new operator");
                this.actual = r, this.expected = t, this.relation = e, this.message = "Dimension mismatch (" + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = Error().stack
            }

            function ew(r, t, e) {
                if (!(this instanceof ew)) throw SyntaxError("Constructor must be called with the new operator");
                this.index = r, arguments.length < 3 ? (this.min = 0, this.max = t) : (this.min = t, this.max = e), void 0 !== this.min && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = Error().stack
            }

            function eA(r) {
                for (var t = []; Array.isArray(r);) t.push(r.length), r = r[0];
                return t
            }

            function eE(r, t) {
                if (0 === t.length) {
                    if (Array.isArray(r)) throw new ex(r.length, 0)
                } else ! function r(t, e, n) {
                    var i, u = t.length;
                    if (u !== e[n]) throw new ex(u, e[n]);
                    if (n < e.length - 1) {
                        var o = n + 1;
                        for (i = 0; i < u; i++) {
                            if (!Array.isArray(t[i])) throw new ex(e.length - 1, e.length, "<");
                            r(t[i], e, o)
                        }
                    } else
                        for (i = 0; i < u; i++)
                            if (Array.isArray(t[i])) throw new ex(e.length + 1, e.length, ">")
                }(r, t, 0)
            }

            function eF(r, t) {
                var e = r.isMatrix ? r._size : eA(r);
                t._sourceSize.forEach((r, t) => {
                    if (null !== r && r !== e[t]) throw new ex(r, e[t])
                })
            }

            function eC(r, t) {
                if (void 0 !== r) {
                    if (!rV(r) || !tP(r)) throw TypeError("Index must be an integer (value: " + r + ")");
                    if (r < 0 || "number" == typeof t && r >= t) throw new ew(r, t)
                }
            }

            function e_(r) {
                for (var t = 0; t < r._dimensions.length; ++t) {
                    var e = r._dimensions[t];
                    if (e._data && rQ(e._data)) {
                        if (0 === e._size[0]) return !0
                    } else if (e.isRange) {
                        if (e.start === e.end) return !0
                    } else if (rX(e) && 0 === e.length) return !0
                }
                return !1
            }

            function eM(r, t, e) {
                if (!Array.isArray(t)) throw TypeError("Array expected");
                if (0 === t.length) throw Error("Resizing to scalar is not supported");
                return t.forEach(function(r) {
                        if (!rV(r) || !tP(r) || r < 0) throw TypeError("Invalid size, must contain positive integers (size: " + ev(t) + ")")
                    }), (rV(r) || rJ(r)) && (r = [r]),
                    function r(t, e, n, i) {
                        var u, o, a = t.length,
                            s = e[n],
                            f = Math.min(a, s);
                        if (t.length = s, n < e.length - 1) {
                            var c = n + 1;
                            for (u = 0; u < f; u++) Array.isArray(o = t[u]) || (o = [o], t[u] = o), r(o, e, c, i);
                            for (u = f; u < s; u++) o = [], t[u] = o, r(o, e, c, i)
                        } else {
                            for (u = 0; u < f; u++)
                                for (; Array.isArray(t[u]);) t[u] = t[u][0];
                            for (u = f; u < s; u++) t[u] = i
                        }
                    }(r, t, 0, void 0 !== e ? e : 0), r
            }

            function eN(r, t) {
                var e = ez(r),
                    n = e.length;
                if (!Array.isArray(r) || !Array.isArray(t)) throw TypeError("Array expected");
                if (0 === t.length) throw new ex(0, n, "!=");
                var i = eS(t = eB(t, n));
                if (n !== i) throw new ex(i, n, "!=");
                try {
                    return function(r, t) {
                        for (var e, n = r, i = t.length - 1; i > 0; i--) {
                            var u = t[i];
                            e = [];
                            for (var o = n.length / u, a = 0; a < o; a++) e.push(n.slice(a * u, (a + 1) * u));
                            n = e
                        }
                        return n
                    }(e, t)
                } catch (r) {
                    if (r instanceof ex) throw new ex(i, n, "!=");
                    throw r
                }
            }

            function eB(r, t) {
                var e = eS(r),
                    n = r.slice(),
                    i = r.indexOf(-1);
                if (r.indexOf(-1, i + 1) >= 0) throw Error("More than one wildcard in sizes");
                if (i >= 0) {
                    if (t % e == 0) n[i] = -t / e;
                    else throw Error("Could not replace wildcard, since " + t + " is no multiple of " + -e)
                }
                return n
            }

            function eS(r) {
                return r.reduce((r, t) => r * t, 1)
            }

            function eT(r, t, e, n) {
                var i = n || eA(r);
                if (e)
                    for (var u = 0; u < e; u++) r = [r], i.unshift(1);
                for (r = function r(t, e, n) {
                        var i, u;
                        if (Array.isArray(t)) {
                            var o = n + 1;
                            for (i = 0, u = t.length; i < u; i++) t[i] = r(t[i], e, o)
                        } else
                            for (var a = n; a < e; a++) t = [t];
                        return t
                    }(r, t, 0); i.length < t;) i.push(1);
                return r
            }

            function ez(r) {
                if (!Array.isArray(r)) return r;
                var t = [];
                return r.forEach(function r(e) {
                    Array.isArray(e) ? e.forEach(r) : t.push(e)
                }), t
            }

            function eO(r) {
                if (!Array.isArray(r)) throw TypeError("Array input expected");
                if (0 === r.length) return r;
                var t = [],
                    e = 0;
                t[0] = {
                    value: r[0],
                    identifier: 0
                };
                for (var n = 1; n < r.length; n++) r[n] === r[n - 1] ? e++ : e = 0, t.push({
                    value: r[n],
                    identifier: e
                });
                return t
            }

            function eI(r) {
                if (!Array.isArray(r)) throw TypeError("Array input expected");
                if (0 === r.length) return r;
                for (var t = [], e = 0; e < r.length; e++) t.push(r[e].value);
                return t
            }

            function ej(r, t) {
                for (var e, n = 0, i = 0; i < r.length; i++) {
                    var u = r[i],
                        o = Array.isArray(u);
                    if (0 === i && o && (n = u.length), o && u.length !== n) return;
                    var a = o ? ej(u, t) : t(u);
                    if (void 0 === e) e = a;
                    else if (e !== a) return "mixed"
                }
                return e
            }

            function ek() {
                var r = Array.prototype.slice.call(arguments, 0, -1),
                    t = Array.prototype.slice.call(arguments, -1);
                if (1 === r.length) return r[0];
                if (r.length > 1) return r.slice(1).reduce(function(r, e) {
                    return function r(t, e, n, i) {
                        if (!(i < n)) return t.concat(e);
                        if (t.length !== e.length) throw new ex(t.length, e.length);
                        for (var u = [], o = 0; o < t.length; o++) u[o] = r(t[o], e[o], n, i + 1);
                        return u
                    }(r, e, t, 0)
                }, r[0]);
                throw Error("Wrong number of arguments in function concat")
            }

            function eP() {
                for (var r = arguments.length, t = Array(r), e = 0; e < r; e++) t[e] = arguments[e];
                for (var n = t.map(r => r.length), i = Math.max(...n), u = Array(i).fill(null), o = 0; o < t.length; o++)
                    for (var a = t[o], s = n[o], f = 0; f < s; f++) {
                        var c = i - s + f;
                        a[f] > u[c] && (u[c] = a[f])
                    }
                for (var l = 0; l < t.length; l++) eq(t[l], u);
                return u
            }

            function eq(r, t) {
                for (var e = t.length, n = r.length, i = 0; i < n; i++) {
                    var u = e - n + i;
                    if (r[i] < t[u] && r[i] > 1 || r[i] > t[u]) throw Error("shape missmatch: missmatch is found in arg with shape (".concat(r, ") not possible to broadcast dimension ").concat(n, " with size ").concat(r[i], " to size ").concat(t[u]))
                }
            }

            function eU(r, t) {
                var e, i, u, o = eA(r);
                if (tE(o, t)) return r;
                eq(o, t);
                var a = eP(o, t),
                    s = a.length,
                    f = [...Array(s - o.length).fill(1), ...o],
                    c = n([], r);
                o.length < s && (o = eA(c = eN(c, f)));
                for (var l = 0; l < s; l++) o[l] < a[l] && (o = eA((e = c, i = a[l], u = l, c = ek(...Array(i).fill(e), u))));
                return c
            }

            function eR(r, t) {
                if (!Array.isArray(r)) throw Error("Array expected");
                var e = eA(r);
                if (t.length !== e.length) throw new ex(t.length, e.length);
                for (var n = 0; n < t.length; n++) eC(t[n], e[n]);
                return t.reduce((r, t) => r[t], r)
            }

            function eL(r, t, e, n) {
                return Array.isArray(r) ? r.map(function(r, i) {
                    return eL(r, t.concat(i), e, n)
                }) : n(r, t, e)
            }
            ex.prototype = RangeError(), ex.prototype.constructor = RangeError, ex.prototype.name = "DimensionError", ex.prototype.isDimensionError = !0, ew.prototype = RangeError(), ew.prototype.constructor = RangeError, ew.prototype.name = "IndexError", ew.prototype.isIndexError = !0;
            var eZ = e(44814);

            function eV(r, t, e) {
                if (eZ.isTypedFunction(r)) {
                    var n = (t.isMatrix ? t.size() : eA(t)).map(() => 0),
                        i = t.isMatrix ? t.get(n) : eR(t, n),
                        u = 1 === Object.keys(r.signatures).length,
                        o = function(r, t, e, n) {
                            for (var i = [t, e, n], u = 3; u > 0; u--) {
                                var o = i.slice(0, u);
                                if (null !== eZ.resolve(r, o)) return u
                            }
                        }(r, i, n, t),
                        a = u ? Object.values(r.signatures)[0] : r;
                    return o >= 1 && o <= 3 ? function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return eJ(a, n.slice(0, o), e, r.name)
                    } : function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return eJ(a, n, e, r.name)
                    }
                }
                return r
            }

            function eJ(r, t, e, n) {
                try {
                    return r(...t)
                } catch (r) {
                    ! function(r, t, e, n) {
                        var i;
                        if (r instanceof TypeError && (null === (i = r.data) || void 0 === i ? void 0 : i.category) === "wrongType") {
                            var u = [];
                            throw u.push("value: ".concat(tx(t[0]))), t.length >= 2 && u.push("index: ".concat(tx(t[1]))), t.length >= 3 && u.push("array: ".concat(tx(t[2]))), TypeError("Function ".concat(e, " cannot apply callback arguments ") + "".concat(n, "(").concat(u.join(", "), ") at index ").concat(JSON.stringify(t[1])))
                        }
                        throw TypeError("Function ".concat(e, " cannot apply callback arguments ") + "to function ".concat(n, ": ").concat(r.message))
                    }(r, t, e, n)
                }
            }
            var e$ = tC("DenseMatrix", ["Matrix"], r => {
                    var {
                        Matrix: t
                    } = r;

                    function e(r, t) {
                        if (!(this instanceof e)) throw SyntaxError("Constructor must be called with the new operator");
                        if (t && !rX(t)) throw Error("Invalid datatype: " + t);
                        if (rG(r)) "DenseMatrix" === r.type ? (this._data = tw(r._data), this._size = tw(r._size)) : (this._data = r.toArray(), this._size = r.size()), this._datatype = t || r._datatype;
                        else if (r && rQ(r.data) && rQ(r.size)) this._data = r.data, this._size = r.size, eE(this._data, this._size), this._datatype = t || r.datatype;
                        else if (rQ(r)) this._data = function r(t) {
                            return rG(t) ? r(t.valueOf()) : rQ(t) ? t.map(r) : t
                        }(r), this._size = eA(this._data), eE(this._data, this._size), this._datatype = t;
                        else if (r) throw TypeError("Unsupported type of data (" + tx(r) + ")");
                        else this._data = [], this._size = [0], this._datatype = t
                    }

                    function n(r, t, e) {
                        if (0 === t.length) {
                            for (var n = r._data; rQ(n);) n = n[0];
                            return n
                        }
                        return r._size = t.slice(0), r._data = eM(r._data, r._size, e), r
                    }

                    function i(r, t, e) {
                        for (var i = r._size.slice(0), u = !1; i.length < t.length;) i.push(0), u = !0;
                        for (var o = 0, a = t.length; o < a; o++) t[o] > i[o] && (i[o] = t[o], u = !0);
                        u && n(r, i, e)
                    }
                    return e.prototype = new t, e.prototype.createDenseMatrix = function(r, t) {
                        return new e(r, t)
                    }, Object.defineProperty(e, "name", {
                        value: "DenseMatrix"
                    }), e.prototype.constructor = e, e.prototype.type = "DenseMatrix", e.prototype.isDenseMatrix = !0, e.prototype.getDataType = function() {
                        return ej(this._data, tx)
                    }, e.prototype.storage = function() {
                        return "dense"
                    }, e.prototype.datatype = function() {
                        return this._datatype
                    }, e.prototype.create = function(r, t) {
                        return new e(r, t)
                    }, e.prototype.subset = function(r, t, n) {
                        switch (arguments.length) {
                            case 1:
                                return function(r, t) {
                                    if (!r8(t)) throw TypeError("Invalid index");
                                    if (t.isScalar()) return r.get(t.min());
                                    var n = t.size();
                                    if (n.length !== r._size.length) throw new ex(n.length, r._size.length);
                                    for (var i = t.min(), u = t.max(), o = 0, a = r._size.length; o < a; o++) eC(i[o], r._size[o]), eC(u[o], r._size[o]);
                                    return new e(function r(t, e, n, i) {
                                        var u = i === n - 1,
                                            o = e.dimension(i);
                                        return u ? o.map(function(r) {
                                            return eC(r, t.length), t[r]
                                        }).valueOf() : o.map(function(u) {
                                            return eC(u, t.length), r(t[u], e, n, i + 1)
                                        }).valueOf()
                                    }(r._data, t, n.length, 0), r._datatype)
                                }(this, r);
                            case 2:
                            case 3:
                                return function(r, t, e, n) {
                                    if (!t || !0 !== t.isIndex) throw TypeError("Invalid index");
                                    var u, o = t.size(),
                                        a = t.isScalar();
                                    if (rG(e) ? (u = e.size(), e = e.valueOf()) : u = eA(e), a) {
                                        if (0 !== u.length) throw TypeError("Scalar expected");
                                        r.set(t.min(), e, n)
                                    } else {
                                        if (!tE(u, o)) try {
                                            e = 0 === u.length ? eU([e], o) : eU(e, o), u = eA(e)
                                        } catch (r) {}
                                        if (o.length < r._size.length) throw new ex(o.length, r._size.length, "<");
                                        if (u.length < o.length) {
                                            for (var s = 0, f = 0; 1 === o[s] && 1 === u[s];) s++;
                                            for (; 1 === o[s];) f++, s++;
                                            e = eT(e, o.length, f, u)
                                        }
                                        if (!tE(o, u)) throw new ex(o, u, ">");
                                        i(r, t.max().map(function(r) {
                                            return r + 1
                                        }), n);
                                        var c = o.length;
                                        (function r(t, e, n, i, u) {
                                            var o = u === i - 1,
                                                a = e.dimension(u);
                                            o ? a.forEach(function(r, e) {
                                                eC(r), t[r] = n[e[0]]
                                            }) : a.forEach(function(o, a) {
                                                eC(o), r(t[o], e, n[a[0]], i, u + 1)
                                            })
                                        })(r._data, t, e, c, 0)
                                    }
                                    return r
                                }(this, r, t, n);
                            default:
                                throw SyntaxError("Wrong number of arguments")
                        }
                    }, e.prototype.get = function(r) {
                        return eR(this._data, r)
                    }, e.prototype.set = function(r, t, e) {
                        if (!rQ(r)) throw TypeError("Array expected");
                        if (r.length < this._size.length) throw new ex(r.length, this._size.length, "<");
                        i(this, r.map(function(r) {
                            return r + 1
                        }), e);
                        var n, u, o, a = this._data;
                        for (n = 0, u = r.length - 1; n < u; n++) eC(o = r[n], a.length), a = a[o];
                        return eC(o = r[r.length - 1], a.length), a[o] = t, this
                    }, e.prototype.resize = function(r, t, e) {
                        if (!rK(r)) throw TypeError("Array or Matrix expected");
                        var i = r.valueOf().map(r => Array.isArray(r) && 1 === r.length ? r[0] : r);
                        return n(e ? this.clone() : this, i, t)
                    }, e.prototype.reshape = function(r, t) {
                        var e = t ? this.clone() : this;
                        e._data = eN(e._data, r);
                        var n = e._size.reduce((r, t) => r * t);
                        return e._size = eB(r, n), e
                    }, e.prototype.clone = function() {
                        return new e({
                            data: tw(this._data),
                            size: tw(this._size),
                            datatype: this._datatype
                        })
                    }, e.prototype.size = function() {
                        return this._size.slice(0)
                    }, e.prototype._forEach = function(r) {
                        var t = this.size();
                        if (1 === t.length) {
                            for (var e = 0; e < t[0]; e++) r(this._data, e, [e]);
                            return
                        }
                        var n = Array(t.length).fill(0),
                            i = Array(t.length - 1),
                            u = i.length - 1;
                        i[0] = this._data[0];
                        for (var o = 0; o < u; o++) i[o + 1] = i[o][0];
                        for (n[u] = -1;;) {
                            var a = void 0;
                            for (a = u; a >= 0; a--) {
                                if (n[a]++, n[a] === t[a]) {
                                    n[a] = 0;
                                    continue
                                }
                                i[a] = 0 === a ? this._data[n[a]] : i[a - 1][n[a]];
                                for (var s = a; s < u; s++) i[s + 1] = i[s][0];
                                for (var f = 0; f < t[i.length]; f++) n[i.length] = f, r(i[u], f, n.slice(0));
                                break
                            }
                            if (-1 === a) break
                        }
                    }, e.prototype.map = function(r) {
                        var t = this,
                            n = new e(t),
                            i = eV(r, t._data, "map");
                        return n._forEach(function(r, e, n) {
                            r[e] = i(r[e], n, t)
                        }), n
                    }, e.prototype.forEach = function(r) {
                        var t = this,
                            e = eV(r, t._data, "map");
                        t._forEach(function(r, n, i) {
                            e(r[n], i, t)
                        })
                    }, e.prototype[Symbol.iterator] = function*() {
                        var r = function*(t, e) {
                            if (rQ(t))
                                for (var n = 0; n < t.length; n++) yield* r(t[n], e.concat(n));
                            else yield {
                                value: t,
                                index: e
                            }
                        };
                        yield* r(this._data, [])
                    }, e.prototype.rows = function() {
                        var r = [];
                        if (2 !== this.size().length) throw TypeError("Rows can only be returned for a 2D matrix.");
                        for (var t of this._data) r.push(new e([t], this._datatype));
                        return r
                    }, e.prototype.columns = function() {
                        var r = this,
                            t = [],
                            n = this.size();
                        if (2 !== n.length) throw TypeError("Rows can only be returned for a 2D matrix.");
                        for (var i = this._data, u = function(n) {
                                var u = i.map(r => [r[n]]);
                                t.push(new e(u, r._datatype))
                            }, o = 0; o < n[1]; o++) u(o);
                        return t
                    }, e.prototype.toArray = function() {
                        return tw(this._data)
                    }, e.prototype.valueOf = function() {
                        return this._data
                    }, e.prototype.format = function(r) {
                        return ev(this._data, r)
                    }, e.prototype.toString = function() {
                        return ev(this._data)
                    }, e.prototype.toJSON = function() {
                        return {
                            mathjs: "DenseMatrix",
                            data: this._data,
                            size: this._size,
                            datatype: this._datatype
                        }
                    }, e.prototype.diagonal = function(r) {
                        if (r) {
                            if (rJ(r) && (r = r.toNumber()), !rV(r) || !tP(r)) throw TypeError("The parameter k must be an integer number")
                        } else r = 0;
                        for (var t = r > 0 ? r : 0, n = r < 0 ? -r : 0, i = Math.min(this._size[0] - n, this._size[1] - t), u = [], o = 0; o < i; o++) u[o] = this._data[o + n][o + t];
                        return new e({
                            data: u,
                            size: [i],
                            datatype: this._datatype
                        })
                    }, e.diagonal = function(r, t, n, i) {
                        if (!rQ(r)) throw TypeError("Array expected, size parameter");
                        if (2 !== r.length) throw Error("Only two dimensions matrix are supported");
                        if (r = r.map(function(r) {
                                if (rJ(r) && (r = r.toNumber()), !rV(r) || !tP(r) || r < 1) throw Error("Size values must be positive integers");
                                return r
                            }), n) {
                            if (rJ(n) && (n = n.toNumber()), !rV(n) || !tP(n)) throw TypeError("The parameter k must be an integer number")
                        } else n = 0;
                        var u, o = n > 0 ? n : 0,
                            a = n < 0 ? -n : 0,
                            s = r[0],
                            f = r[1],
                            c = Math.min(s - a, f - o);
                        if (rQ(t)) {
                            if (t.length !== c) throw Error("Invalid value array length");
                            u = function(r) {
                                return t[r]
                            }
                        } else if (rG(t)) {
                            var l = t.size();
                            if (1 !== l.length || l[0] !== c) throw Error("Invalid matrix length");
                            u = function(r) {
                                return t.get([r])
                            }
                        } else u = function() {
                            return t
                        };
                        i || (i = rJ(u(0)) ? u(0).mul(0) : 0);
                        var h = [];
                        if (r.length > 0) {
                            h = eM(h, r, i);
                            for (var p = 0; p < c; p++) h[p + a][p + o] = u(p)
                        }
                        return new e({
                            data: h,
                            size: [s, f]
                        })
                    }, e.fromJSON = function(r) {
                        return new e(r)
                    }, e.prototype.swapRows = function(r, t) {
                        if (!rV(r) || !tP(r) || !rV(t) || !tP(t)) throw Error("Row index must be positive integers");
                        if (2 !== this._size.length) throw Error("Only two dimensional matrix is supported");
                        return eC(r, this._size[0]), eC(t, this._size[0]), e._swapRows(r, t, this._data), this
                    }, e._swapRows = function(r, t, e) {
                        var n = e[r];
                        e[r] = e[t], e[t] = n
                    }, e
                }, {
                    isClass: !0
                }),
                eH = function() {
                    return eH = eZ.create, eZ
                },
                eY = tC("typed", ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], function(r) {
                    var {
                        BigNumber: t,
                        Complex: e,
                        DenseMatrix: n,
                        Fraction: i
                    } = r, u = eH();
                    return u.clear(), u.addTypes([{
                        name: "number",
                        test: rV
                    }, {
                        name: "Complex",
                        test: rH
                    }, {
                        name: "BigNumber",
                        test: rJ
                    }, {
                        name: "bigint",
                        test: r$
                    }, {
                        name: "Fraction",
                        test: rY
                    }, {
                        name: "Unit",
                        test: rW
                    }, {
                        name: "identifier",
                        test: r => rX && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(r)
                    }, {
                        name: "string",
                        test: rX
                    }, {
                        name: "Chain",
                        test: tb
                    }, {
                        name: "Array",
                        test: rQ
                    }, {
                        name: "Matrix",
                        test: rG
                    }, {
                        name: "DenseMatrix",
                        test: r0
                    }, {
                        name: "SparseMatrix",
                        test: r1
                    }, {
                        name: "Range",
                        test: r2
                    }, {
                        name: "Index",
                        test: r8
                    }, {
                        name: "boolean",
                        test: r3
                    }, {
                        name: "ResultSet",
                        test: r9
                    }, {
                        name: "Help",
                        test: r5
                    }, {
                        name: "function",
                        test: r7
                    }, {
                        name: "Date",
                        test: r4
                    }, {
                        name: "RegExp",
                        test: r6
                    }, {
                        name: "null",
                        test: te
                    }, {
                        name: "undefined",
                        test: tn
                    }, {
                        name: "AccessorNode",
                        test: ti
                    }, {
                        name: "ArrayNode",
                        test: tu
                    }, {
                        name: "AssignmentNode",
                        test: to
                    }, {
                        name: "BlockNode",
                        test: ta
                    }, {
                        name: "ConditionalNode",
                        test: ts
                    }, {
                        name: "ConstantNode",
                        test: tf
                    }, {
                        name: "FunctionNode",
                        test: tl
                    }, {
                        name: "FunctionAssignmentNode",
                        test: tc
                    }, {
                        name: "IndexNode",
                        test: th
                    }, {
                        name: "Node",
                        test: tp
                    }, {
                        name: "ObjectNode",
                        test: tm
                    }, {
                        name: "OperatorNode",
                        test: tD
                    }, {
                        name: "ParenthesisNode",
                        test: td
                    }, {
                        name: "RangeNode",
                        test: tv
                    }, {
                        name: "RelationalNode",
                        test: tg
                    }, {
                        name: "SymbolNode",
                        test: ty
                    }, {
                        name: "Map",
                        test: tt
                    }, {
                        name: "Object",
                        test: tr
                    }]), u.addConversions([{
                        from: "number",
                        to: "BigNumber",
                        convert: function(r) {
                            if (t || eW(r), r.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length > 15) throw TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + r + "). Use function bignumber(x) to convert to BigNumber.");
                            return new t(r)
                        }
                    }, {
                        from: "number",
                        to: "Complex",
                        convert: function(r) {
                            return e || eX(r), new e(r, 0)
                        }
                    }, {
                        from: "BigNumber",
                        to: "Complex",
                        convert: function(r) {
                            return e || eX(r), new e(r.toNumber(), 0)
                        }
                    }, {
                        from: "bigint",
                        to: "number",
                        convert: function(r) {
                            if (r > Number.MAX_SAFE_INTEGER) throw TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: " + r + ")");
                            return Number(r)
                        }
                    }, {
                        from: "bigint",
                        to: "BigNumber",
                        convert: function(r) {
                            return t || eW(r), new t(r.toString())
                        }
                    }, {
                        from: "bigint",
                        to: "Fraction",
                        convert: function(r) {
                            return i || eQ(r), new i(r.toString())
                        }
                    }, {
                        from: "Fraction",
                        to: "BigNumber",
                        convert: function(r) {
                            throw TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")
                        }
                    }, {
                        from: "Fraction",
                        to: "Complex",
                        convert: function(r) {
                            return e || eX(r), new e(r.valueOf(), 0)
                        }
                    }, {
                        from: "number",
                        to: "Fraction",
                        convert: function(r) {
                            i || eQ(r);
                            var t = new i(r);
                            if (t.valueOf() !== r) throw TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + r + "). Use function fraction(x) to convert to Fraction.");
                            return t
                        }
                    }, {
                        from: "string",
                        to: "number",
                        convert: function(r) {
                            var t = Number(r);
                            if (isNaN(t)) throw Error('Cannot convert "' + r + '" to a number');
                            return t
                        }
                    }, {
                        from: "string",
                        to: "BigNumber",
                        convert: function(r) {
                            t || eW(r);
                            try {
                                return new t(r)
                            } catch (t) {
                                throw Error('Cannot convert "' + r + '" to BigNumber')
                            }
                        }
                    }, {
                        from: "string",
                        to: "bigint",
                        convert: function(r) {
                            try {
                                return BigInt(r)
                            } catch (t) {
                                throw Error('Cannot convert "' + r + '" to BigInt')
                            }
                        }
                    }, {
                        from: "string",
                        to: "Fraction",
                        convert: function(r) {
                            i || eQ(r);
                            try {
                                return new i(r)
                            } catch (t) {
                                throw Error('Cannot convert "' + r + '" to Fraction')
                            }
                        }
                    }, {
                        from: "string",
                        to: "Complex",
                        convert: function(r) {
                            e || eX(r);
                            try {
                                return new e(r)
                            } catch (t) {
                                throw Error('Cannot convert "' + r + '" to Complex')
                            }
                        }
                    }, {
                        from: "boolean",
                        to: "number",
                        convert: function(r) {
                            return +r
                        }
                    }, {
                        from: "boolean",
                        to: "BigNumber",
                        convert: function(r) {
                            return t || eW(r), new t(+r)
                        }
                    }, {
                        from: "boolean",
                        to: "bigint",
                        convert: function(r) {
                            return BigInt(+r)
                        }
                    }, {
                        from: "boolean",
                        to: "Fraction",
                        convert: function(r) {
                            return i || eQ(r), new i(+r)
                        }
                    }, {
                        from: "boolean",
                        to: "string",
                        convert: function(r) {
                            return String(r)
                        }
                    }, {
                        from: "Array",
                        to: "Matrix",
                        convert: function(r) {
                            return n || function() {
                                throw Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")
                            }(), new n(r)
                        }
                    }, {
                        from: "Matrix",
                        to: "Array",
                        convert: function(r) {
                            return r.valueOf()
                        }
                    }]), u.onMismatch = (r, t, e) => {
                        var n = u.createError(r, t, e);
                        if (["wrongType", "mismatch"].includes(n.data.category) && 1 === t.length && rK(t[0]) && e.some(r => !r.params.includes(","))) {
                            var i = TypeError("Function '".concat(r, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(r, ")'."));
                            throw i.data = n.data, i
                        }
                        throw n
                    }, u.onMismatch = (r, t, e) => {
                        var n = u.createError(r, t, e);
                        if (["wrongType", "mismatch"].includes(n.data.category) && 1 === t.length && rK(t[0]) && e.some(r => !r.params.includes(","))) {
                            var i = TypeError("Function '".concat(r, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(r, ")'."));
                            throw i.data = n.data, i
                        }
                        throw n
                    }, u
                });

            function eW(r) {
                throw Error("Cannot convert value ".concat(r, " into a BigNumber: no class 'BigNumber' provided"))
            }

            function eX(r) {
                throw Error("Cannot convert value ".concat(r, " into a Complex number: no class 'Complex' provided"))
            }

            function eQ(r) {
                throw Error("Cannot convert value ".concat(r, " into a Fraction, no class 'Fraction' provided."))
            }

            function eG(r) {
                for (var t = 0; t < r.length; t++)
                    if (rK(r[t])) return !0;
                return !1
            }

            function eK(r, t) {
                rG(r) && (r = r.valueOf());
                for (var e = 0, n = r.length; e < n; e++) {
                    var i = r[e];
                    Array.isArray(i) ? eK(i, t) : t(i)
                }
            }

            function e0(r, t, e) {
                return r && "function" == typeof r.map ? r.map(function(r) {
                    return e0(r, t, e)
                }) : t(r)
            }

            function e1(r, t, e) {
                var n = Array.isArray(r) ? eA(r) : r.size();
                if (t < 0 || t >= n.length) throw new ew(t, n.length);
                return rG(r) ? r.create(e2(r.valueOf(), t, e), r.datatype()) : e2(r, t, e)
            }

            function e2(r, t, e) {
                var n, i, u, o;
                if (t <= 0) {
                    if (Array.isArray(r[0])) {
                        for (n = 0, o = function(r) {
                                var t, e, n = r.length,
                                    i = r[0].length,
                                    u = [];
                                for (e = 0; e < i; e++) {
                                    var o = [];
                                    for (t = 0; t < n; t++) o.push(r[t][e]);
                                    u.push(o)
                                }
                                return u
                            }(r), i = []; n < o.length; n++) i[n] = e2(o[n], t - 1, e);
                        return i
                    }
                    for (n = 1, u = r[0]; n < r.length; n++) u = e(u, r[n]);
                    return u
                }
                for (n = 0, i = []; n < r.length; n++) i[n] = e2(r[n], t - 1, e);
                return i
            }

            function e8(r, t, e, n, i, u, o, a, s, f, c) {
                var l, h, p, m, D = r._values,
                    d = r._index,
                    v = r._ptr;
                if (n)
                    for (h = v[t], p = v[t + 1], l = h; l < p; l++) e[m = d[l]] !== u ? (e[m] = u, o.push(m), f ? (n[m] = s ? a(D[l], c) : a(c, D[l]), i[m] = u) : n[m] = D[l]) : (n[m] = s ? a(D[l], n[m]) : a(n[m], D[l]), i[m] = u);
                else
                    for (h = v[t], p = v[t + 1], l = h; l < p; l++) e[m = d[l]] !== u ? (e[m] = u, o.push(m)) : i[m] = u
            }
            var e3 = "number",
                e9 = "number, number";

            function e5(r) {
                return Math.abs(r)
            }

            function e7(r, t) {
                return r + t
            }

            function e4(r, t) {
                return r - t
            }

            function e6(r, t) {
                return r * t
            }

            function nr(r) {
                return -r
            }

            function nt(r) {
                return r
            }

            function ne(r) {
                return tL(r)
            }

            function nn(r) {
                return Math.exp(r)
            }
            e5.signature = e3, e7.signature = e9, e4.signature = e9, e6.signature = e9, nr.signature = e3, nt.signature = e3, ne.signature = e3, nn.signature = e3;

            function ni(r) {
                return tU(r)
            }

            function nu(r, t) {
                var e, n, i, u = 0,
                    o = 1,
                    a = 1,
                    s = 0;
                if (!tP(r) || !tP(t)) throw Error("Parameters in function xgcd must be integer numbers");
                for (; t;) n = Math.floor(r / t), i = r - n * t, e = u, u = o - n * u, o = e, e = a, a = s - n * a, s = e, r = t, t = i;
                return r < 0 ? [-r, -o, -s] : [r, r ? o : 0, s]
            }

            function no(r, t) {
                return r * r < 1 && t === 1 / 0 || r * r > 1 && t === -1 / 0 ? 0 : Math.pow(r, t)
            }

            function na(r) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!tP(t) || t < 0 || t > 15) throw Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");
                return parseFloat(tY(r, t))
            }
            ni.signature = e3, nu.signature = e9, no.signature = e9;
            var ns = tC("abs", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t("abs", {
                        number: e5,
                        "Complex | BigNumber | Fraction | Unit": r => r.abs(),
                        bigint: r => r < 0 n ? -r : r,
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0))
                    })
                }),
                nf = "number",
                nc = "addScalar",
                nl = tC(nc, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(nc, {
                        "number, number": e7,
                        "Complex, Complex": function(r, t) {
                            return r.add(t)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return r.plus(t)
                        },
                        "bigint, bigint": function(r, t) {
                            return r + t
                        },
                        "Fraction, Fraction": function(r, t) {
                            return r.add(t)
                        },
                        "Unit, Unit": t.referToSelf(r => (e, n) => {
                            if (null === e.value || void 0 === e.value) throw Error("Parameter x contains a unit with undefined value");
                            if (null === n.value || void 0 === n.value) throw Error("Parameter y contains a unit with undefined value");
                            if (!e.equalBase(n)) throw Error("Units do not match");
                            var i = e.clone();
                            return i.value = t.find(r, [i.valueType(), n.valueType()])(i.value, n.value), i.fixPrefix = !1, i
                        })
                    })
                }),
                nh = tC("atan", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t("atan", {
                        number: function(r) {
                            return Math.atan(r)
                        },
                        Complex: function(r) {
                            return r.atan()
                        },
                        BigNumber: function(r) {
                            return r.atan()
                        }
                    })
                });

            function np(r) {
                if (r.isFinite() && !r.isInteger()) throw Error("Integer expected in function bitNot");
                var t = r.constructor,
                    e = t.precision;
                t.config({
                    precision: 1e9
                });
                var n = r.plus(new t(1));
                return n.s = -n.s || null, t.config({
                    precision: e
                }), n
            }

            function nm(r, t, e) {
                var n, i, u, o, a, s = r.constructor,
                    f = +(r.s < 0),
                    c = +(t.s < 0);
                if (f) {
                    n = nD(np(r));
                    for (var l = 0; l < n.length; ++l) n[l] ^= 1
                } else n = nD(r);
                if (c) {
                    i = nD(np(t));
                    for (var h = 0; h < i.length; ++h) i[h] ^= 1
                } else i = nD(t);
                n.length <= i.length ? (u = n, o = i, a = f) : (u = i, o = n, a = c);
                var p = u.length,
                    m = o.length,
                    D = 1 ^ e(f, c),
                    d = new s(1 ^ D),
                    v = new s(1),
                    g = new s(2),
                    y = s.precision;
                for (s.config({
                        precision: 1e9
                    }); p > 0;) e(u[--p], o[--m]) === D && (d = d.plus(v)), v = v.times(g);
                for (; m > 0;) e(a, o[--m]) === D && (d = d.plus(v)), v = v.times(g);
                return s.config({
                    precision: y
                }), 0 === D && (d.s = -d.s), d
            }

            function nD(r) {
                for (var t = r.d, e = t[0] + "", n = 1; n < t.length; ++n) {
                    for (var i = t[n] + "", u = 7 - i.length; u--;) i = "0" + i;
                    e += i
                }
                for (var o = e.length;
                    "0" === e.charAt(o);) o--;
                var a = r.e,
                    s = e.slice(0, o + 1 || 1),
                    f = s.length;
                if (a > 0) {
                    if (++a > f)
                        for (a -= f; a--;) s += "0";
                    else a < f && (s = s.slice(0, a) + "." + s.slice(a))
                }
                for (var c = [0], l = 0; l < s.length;) {
                    for (var h = c.length; h--;) c[h] *= 10;
                    c[0] += parseInt(s.charAt(l++));
                    for (var p = 0; p < c.length; ++p) c[p] > 1 && ((null === c[p + 1] || void 0 === c[p + 1]) && (c[p + 1] = 0), c[p + 1] += c[p] >> 1, c[p] &= 1)
                }
                return c.reverse()
            }
            var nd = "number, number";

            function nv(r, t) {
                if (t < r) return 1;
                if (t === r) return t;
                var e = t + r >> 1;
                return nv(r, e) * nv(e + 1, t)
            }

            function ng(r, t) {
                if (!tP(r) || r < 0 || !tP(t) || t < 0) throw TypeError("Positive integer value expected in function combinations");
                if (t > r) throw TypeError("k must be less than or equal to n");
                for (var e = r - t, n = 1, i = t < e ? e + 1 : t + 1, u = 2, o = t < e ? t : e, a = i; a <= r; ++a)
                    for (n *= a; u <= o && n % u == 0;) n /= u, ++u;
                return u <= o && (n /= nv(u, o)), n
            }
            r => {
                var {
                    typed: t
                } = r;
                return t("clone", {
                    any: tw
                })
            }, ng.signature = "number, number";
            var ny = "combinations";

            function nb(r) {
                return r.isInteger() && r.gte(0)
            }
            r => {
                var {
                    typed: t
                } = r;
                return t(ny, {
                    "number, number": ng,
                    "BigNumber, BigNumber": function(r, t) {
                        var e, n, i = r.constructor,
                            u = r.minus(t),
                            o = new i(1);
                        if (!nb(r) || !nb(t)) throw TypeError("Positive integer value expected in function combinations");
                        if (t.gt(r)) throw TypeError("k must be less than n in function combinations");
                        if (e = o, t.lt(u))
                            for (n = o; n.lte(u); n = n.plus(o)) e = e.times(t.plus(n)).dividedBy(n);
                        else
                            for (n = o; n.lte(t); n = n.plus(o)) e = e.times(u.plus(n)).dividedBy(n);
                        return e
                    }
                })
            };
            var nx = tC("complex", ["typed", "Complex"], r => {
                    var {
                        typed: t,
                        Complex: e
                    } = r;
                    return t("complex", {
                        "": function() {
                            return e.ZERO
                        },
                        number: function(r) {
                            return new e(r, 0)
                        },
                        "number, number": function(r, t) {
                            return new e(r, t)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return new e(r.toNumber(), t.toNumber())
                        },
                        Fraction: function(r) {
                            return new e(r.valueOf(), 0)
                        },
                        Complex: function(r) {
                            return r.clone()
                        },
                        string: function(r) {
                            return e(r)
                        },
                        null: function(r) {
                            return e(0)
                        },
                        Object: function(r) {
                            if ("re" in r && "im" in r) return new e(r.re, r.im);
                            if ("r" in r && "phi" in r || "abs" in r && "arg" in r) return new e(r);
                            throw Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                nw = "conj",
                nA = tC(nw, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(nw, {
                        "number | BigNumber | Fraction": r => r,
                        Complex: r => r.conjugate(),
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                nE = tC("trigUnit", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return {
                        Unit: t.referToSelf(r => e => {
                            if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw TypeError("Unit in function cot is no angle");
                            return t.find(r, e.valueType())(e.value)
                        })
                    }
                }),
                nF = tC("cos", ["typed"], r => {
                    var {
                        typed: t
                    } = r, e = nE({
                        typed: t
                    });
                    return t("cos", {
                        number: Math.cos,
                        "Complex | BigNumber": r => r.cos()
                    }, e)
                });

            function nC(r, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-9,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (e <= 0) throw Error("Relative tolerance must be greater than 0");
                if (n < 0) throw Error("Absolute tolerance must be at least 0");
                return !(r.isNaN() || t.isNaN()) && (r.isFinite() && t.isFinite() ? !!r.eq(t) || r.minus(t).abs().lte(r.constructor.max(r.constructor.max(r.abs(), t.abs()).mul(e), n)) : r.eq(t))
            }
            var n_ = tC("compareUnits", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return {
                        "Unit, Unit": t.referToSelf(r => (e, n) => {
                            if (!e.equalBase(n)) throw Error("Cannot compare units with different base");
                            return t.find(r, [e.valueType(), n.valueType()])(e.value, n.value)
                        })
                    }
                }),
                nM = "equalScalar",
                nN = tC(nM, ["typed", "config"], r => {
                    var {
                        typed: t,
                        config: e
                    } = r, n = n_({
                        typed: t
                    });
                    return t(nM, {
                        "boolean, boolean": function(r, t) {
                            return r === t
                        },
                        "number, number": function(r, t) {
                            return tG(r, t, e.relTol, e.absTol)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return r.eq(t) || nC(r, t, e.relTol, e.absTol)
                        },
                        "bigint, bigint": function(r, t) {
                            return r === t
                        },
                        "Fraction, Fraction": function(r, t) {
                            return r.equals(t)
                        },
                        "Complex, Complex": function(r, t) {
                            var n, i;
                            return n = e.relTol, i = e.absTol, tG(r.re, t.re, n, i) && tG(r.im, t.im, n, i)
                        }
                    }, n)
                });
            tC(nM, ["typed", "config"], r => {
                var {
                    typed: t,
                    config: e
                } = r;
                return t(nM, {
                    "number, number": function(r, t) {
                        return tG(r, t, e.relTol, e.absTol)
                    }
                })
            }), r => {
                var {
                    typed: t
                } = r;
                return t("exp", {
                    number: nn,
                    Complex: function(r) {
                        return r.exp()
                    },
                    BigNumber: function(r) {
                        return r.exp()
                    }
                })
            };
            var nB = "flatten",
                nS = tC(nB, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(nB, {
                        Array: function(r) {
                            return ez(r)
                        },
                        Matrix: function(r) {
                            return r.create(ez(r.toArray()), r.datatype())
                        }
                    })
                }),
                nT = "format",
                nz = (r => {
                    var {
                        typed: t
                    } = r;
                    return t(nT, {
                        any: ev,
                        "any, Object | function | number | BigNumber": ev
                    })
                }, "getMatrixDataType"),
                nO = tC(nz, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(nz, {
                        Array: function(r) {
                            return ej(r, tx)
                        },
                        Matrix: function(r) {
                            return r.getDataType()
                        }
                    })
                });
            tC("hex", ["typed", "format"], r => {
                var {
                    typed: t,
                    format: e
                } = r;
                return t("hex", {
                    "number | BigNumber": function(r) {
                        return e(r, {
                            notation: "hex"
                        })
                    },
                    "number | BigNumber, number | BigNumber": function(r, t) {
                        return e(r, {
                            notation: "hex",
                            wordSize: t
                        })
                    }
                })
            });
            var nI = tC("im", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t("im", {
                        number: () => 0,
                        "BigNumber | Fraction": r => r.mul(0),
                        Complex: r => r.im,
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                nj = "isInteger",
                nk = tC(nj, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(nj, {
                        number: tP,
                        BigNumber: function(r) {
                            return r.isInt()
                        },
                        bigint: function(r) {
                            return !0
                        },
                        Fraction: function(r) {
                            return 1 === r.d && isFinite(r.n)
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                });

            function nP(r) {
                return Number.isNaN(r)
            }
            nP.signature = "number";
            var nq = "isNegative",
                nU = (r => {
                    var {
                        typed: t,
                        config: e
                    } = r;
                    return t(nq, {
                        number: r => !tG(r, 0, e.relTol, e.absTol) && r < 0,
                        BigNumber: r => !nC(r, new r.constructor(0), e.relTol, e.absTol) && r.isNeg() && !r.isZero() && !r.isNaN(),
                        bigint: r => r < 0 n,
                        Fraction: r => r.s < 0,
                        Unit: t.referToSelf(r => e => t.find(r, e.valueType())(e.value)),
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }, "isPositive"),
                nR = tC(nU, ["typed", "config"], r => {
                    var {
                        typed: t,
                        config: e
                    } = r;
                    return t(nU, {
                        number: r => !tG(r, 0, e.relTol, e.absTol) && r > 0,
                        BigNumber: r => !nC(r, new r.constructor(0), e.relTol, e.absTol) && !r.isNeg() && !r.isZero() && !r.isNaN(),
                        bigint: r => r > 0 n,
                        Fraction: r => r.s > 0 && r.n > 0,
                        Unit: t.referToSelf(r => e => t.find(r, e.valueType())(e.value)),
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                nL = "isZero",
                nZ = tC(nL, ["typed", "equalScalar"], r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return t(nL, {
                        "number | BigNumber | Complex | Fraction": r => e(r, 0),
                        bigint: r => 0 n === r,
                        Unit: t.referToSelf(r => e => t.find(r, e.valueType())(e.value)),
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                });

            function nV(r) {
                if (tP(r)) return r <= 0 ? isFinite(r) ? 1 / 0 : NaN : r > 171 ? 1 / 0 : nv(1, r - 1);
                if (r < .5) return Math.PI / (Math.sin(Math.PI * r) * nV(1 - r));
                if (r >= 171.35) return 1 / 0;
                if (r > 85) {
                    var t, e = r * r,
                        n = e * r,
                        i = n * r,
                        u = i * r;
                    return Math.sqrt(2 * Math.PI / r) * Math.pow(r / Math.E, r) * (1 + 1 / (12 * r) + 1 / (288 * e) - 139 / (51840 * n) - 571 / (2488320 * i) + 163879 / (209018880 * u) + 5246819 / (75246796800 * u * r))
                }--r, t = n$[0];
                for (var o = 1; o < n$.length; ++o) t += n$[o] / (r + o);
                var a = r + nJ + .5;
                return Math.sqrt(2 * Math.PI) * Math.pow(a, r + .5) * Math.exp(-a) * t
            }
            nV.signature = "number";
            var nJ = 4.7421875,
                n$ = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -.00009837447530487956, 1580887032249125e-19, -.00021026444172410488, 21743961811521265e-20, -.0001643181065367639, 8441822398385275e-20, -.000026190838401581408, 36899182659531625e-22],
                nH = [1.000000000190015, 76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, .001208650973866179, -.000005395239384953],
                nY = "log2",
                nW = (r => {
                    var {
                        typed: t,
                        config: e,
                        Complex: n
                    } = r;
                    return t(nY, {
                        number: function(r) {
                            return r >= 0 || e.predictable ? tR(r) : i(new n(r, 0))
                        },
                        Complex: i,
                        BigNumber: function(r) {
                            return !r.isNegative() || e.predictable ? r.log(2) : i(new n(r.toNumber(), 0))
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    });

                    function i(r) {
                        var t = Math.sqrt(r.re * r.re + r.im * r.im);
                        return new n(Math.log2 ? Math.log2(t) : Math.log(t) / Math.LN2, Math.atan2(r.im, r.re) / Math.LN2)
                    }
                }, tC("multiplyScalar", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t("multiplyScalar", {
                        "number, number": e6,
                        "Complex, Complex": function(r, t) {
                            return r.mul(t)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return r.times(t)
                        },
                        "bigint, bigint": function(r, t) {
                            return r * t
                        },
                        "Fraction, Fraction": function(r, t) {
                            return r.mul(t)
                        },
                        "number | Fraction | BigNumber | Complex, Unit": (r, t) => t.multiply(r),
                        "Unit, number | Fraction | BigNumber | Complex | Unit": (r, t) => r.multiply(t)
                    })
                })),
                nX = "number, number";

            function nQ(r) {
                return !r
            }
            nQ.signature = "number", r => {
                var {
                    typed: t
                } = r;
                return t("not", {
                    "null | undefined": () => !0,
                    number: nQ,
                    Complex: function(r) {
                        return 0 === r.re && 0 === r.im
                    },
                    BigNumber: function(r) {
                        return r.isZero() || r.isNaN()
                    },
                    bigint: r => !r,
                    Unit: t.referToSelf(r => e => t.find(r, e.valueType())(e.value)),
                    "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                })
            };
            var nG = tC("number", ["typed"], r => {
                var {
                    typed: t
                } = r, e = t("number", {
                    "": function() {
                        return 0
                    },
                    number: function(r) {
                        return r
                    },
                    string: function(r) {
                        if ("NaN" === r) return NaN;
                        var t, e, n = (e = (t = r).match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/)) ? {
                            input: t,
                            radix: ({
                                "0b": 2,
                                "0o": 8,
                                "0x": 16
                            })[e[1]],
                            integerPart: e[2],
                            fractionalPart: e[3]
                        } : null;
                        if (n) return function(r) {
                            for (var t = parseInt(r.integerPart, r.radix), e = 0, n = 0; n < r.fractionalPart.length; n++) e += parseInt(r.fractionalPart[n], r.radix) / Math.pow(r.radix, n + 1);
                            var i = t + e;
                            if (isNaN(i)) throw SyntaxError('String "' + r.input + '" is not a valid number');
                            return i
                        }(n);
                        var i = 0,
                            u = r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
                        u && (i = Number(u[2]), r = u[1]);
                        var o = Number(r);
                        if (isNaN(o)) throw SyntaxError('String "' + r + '" is not a valid number');
                        if (u) {
                            if (o > 2 ** i - 1) throw SyntaxError('String "'.concat(r, '" is out of range'));
                            o >= 2 ** (i - 1) && (o -= 2 ** i)
                        }
                        return o
                    },
                    BigNumber: function(r) {
                        return r.toNumber()
                    },
                    bigint: function(r) {
                        return Number(r)
                    },
                    Fraction: function(r) {
                        return r.valueOf()
                    },
                    Unit: t.referToSelf(r => t => {
                        var e = t.clone();
                        return e.value = r(t.value), e
                    }),
                    null: function(r) {
                        return 0
                    },
                    "Unit, string | Unit": function(r, t) {
                        return r.toNumber(t)
                    },
                    "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                });
                return e.fromJSON = function(r) {
                    return parseFloat(r.value)
                }, e
            });
            tC("oct", ["typed", "format"], r => {
                var {
                    typed: t,
                    format: e
                } = r;
                return t("oct", {
                    "number | BigNumber": function(r) {
                        return e(r, {
                            notation: "oct"
                        })
                    },
                    "number | BigNumber, number | BigNumber": function(r, t) {
                        return e(r, {
                            notation: "oct",
                            wordSize: t
                        })
                    }
                })
            });
            var nK = e(36377),
                n0 = nK(Date.now()),
                n1 = /\$([\w.]+)/g,
                n2 = tC("re", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t("re", {
                        "number | BigNumber | Fraction": r => r,
                        Complex: r => r.re,
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                n8 = "sign",
                n3 = tC(n8, ["typed", "BigNumber", "Fraction", "complex"], r => {
                    var {
                        typed: t,
                        BigNumber: e,
                        complex: n,
                        Fraction: i
                    } = r;
                    return t(n8, {
                        number: ni,
                        Complex: function(r) {
                            return 0 === r.im ? n(ni(r.re)) : r.sign()
                        },
                        BigNumber: function(r) {
                            return new e(r.cmp(0))
                        },
                        bigint: function(r) {
                            return r > 0 n ? 1 n : r < 0 n ? -1 n : 0 n
                        },
                        Fraction: function(r) {
                            return new i(r.s, 1)
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0)),
                        Unit: t.referToSelf(r => e => {
                            if (!e._isDerived() && 0 !== e.units[0].unit.offset) throw TypeError("sign is ambiguous for units with offset");
                            return t.find(r, e.valueType())(e.value)
                        })
                    })
                }),
                n9 = tC("sin", ["typed"], r => {
                    var {
                        typed: t
                    } = r, e = nE({
                        typed: t
                    });
                    return t("sin", {
                        number: Math.sin,
                        "Complex | BigNumber": r => r.sin()
                    }, e)
                }),
                n5 = tC("SparseMatrix", ["typed", "equalScalar", "Matrix"], r => {
                    var {
                        typed: t,
                        equalScalar: e,
                        Matrix: n
                    } = r;

                    function i(r, t) {
                        if (!(this instanceof i)) throw SyntaxError("Constructor must be called with the new operator");
                        if (t && !rX(t)) throw Error("Invalid datatype: " + t);
                        if (rG(r)) "SparseMatrix" === r.type ? (this._values = r._values ? tw(r._values) : void 0, this._index = tw(r._index), this._ptr = tw(r._ptr), this._size = tw(r._size), this._datatype = t || r._datatype) : u(this, r.valueOf(), t || r._datatype);
                        else if (r && rQ(r.index) && rQ(r.ptr) && rQ(r.size)) this._values = r.values, this._index = r.index, this._ptr = r.ptr, this._size = r.size, this._datatype = t || r.datatype;
                        else if (rQ(r)) u(this, r, t);
                        else if (r) throw TypeError("Unsupported type of data (" + tx(r) + ")");
                        else this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = t
                    }

                    function u(r, n, i) {
                        r._values = [], r._index = [], r._ptr = [], r._datatype = i;
                        var u = n.length,
                            o = 0,
                            a = e,
                            s = 0;
                        if (rX(i) && (a = t.find(e, [i, i]) || e, s = t.convert(0, i)), u > 0) {
                            var f = 0;
                            do {
                                r._ptr.push(r._index.length);
                                for (var c = 0; c < u; c++) {
                                    var l = n[c];
                                    if (rQ(l)) {
                                        if (0 === f && o < l.length && (o = l.length), f < l.length) {
                                            var h = l[f];
                                            a(h, s) || (r._values.push(h), r._index.push(c))
                                        }
                                    } else 0 === f && o < 1 && (o = 1), a(l, s) || (r._values.push(l), r._index.push(c))
                                }
                                f++
                            } while (f < o)
                        }
                        r._ptr.push(r._index.length), r._size = [u, o]
                    }

                    function o(r, t, e, n) {
                        if (e - t == 0) return e;
                        for (var i = t; i < e; i++)
                            if (n[i] === r) return i;
                        return t
                    }

                    function a(r, t, e, n, i, u, o) {
                        i.splice(r, 0, n), u.splice(r, 0, t);
                        for (var a = e + 1; a < o.length; a++) o[a]++
                    }

                    function s(r, n, i, u) {
                        var o, a, s, f = u || 0,
                            c = e,
                            l = 0;
                        rX(r._datatype) && (c = t.find(e, [r._datatype, r._datatype]) || e, l = t.convert(0, r._datatype), f = t.convert(f, r._datatype));
                        var h = !c(f, l),
                            p = r._size[0],
                            m = r._size[1];
                        if (i > m) {
                            for (a = m; a < i; a++)
                                if (r._ptr[a] = r._values.length, h)
                                    for (o = 0; o < p; o++) r._values.push(f), r._index.push(o);
                            r._ptr[i] = r._values.length
                        } else i < m && (r._ptr.splice(i + 1, m - i), r._values.splice(r._ptr[i], r._values.length), r._index.splice(r._ptr[i], r._index.length));
                        if (m = i, n > p) {
                            if (h) {
                                var D = 0;
                                for (a = 0; a < m; a++) {
                                    r._ptr[a] = r._ptr[a] + D, s = r._ptr[a + 1] + D;
                                    var d = 0;
                                    for (o = p; o < n; o++, d++) r._values.splice(s + d, 0, f), r._index.splice(s + d, 0, o), D++
                                }
                                r._ptr[m] = r._values.length
                            }
                        } else if (n < p) {
                            var v = 0;
                            for (a = 0; a < m; a++) {
                                r._ptr[a] = r._ptr[a] - v;
                                var g = r._ptr[a],
                                    y = r._ptr[a + 1] - v;
                                for (s = g; s < y; s++)(o = r._index[s]) > n - 1 && (r._values.splice(s, 1), r._index.splice(s, 1), v++)
                            }
                            r._ptr[a] = r._values.length
                        }
                        return r._size[0] = n, r._size[1] = i, r
                    }

                    function f(r, t, e, n, i) {
                        var u, o, a = n[0],
                            s = n[1],
                            f = [];
                        for (u = 0; u < a; u++)
                            for (o = 0, f[u] = []; o < s; o++) f[u][o] = 0;
                        for (o = 0; o < s; o++)
                            for (var c = e[o], l = e[o + 1], h = c; h < l; h++) f[u = t[h]][o] = r ? i ? tw(r[h]) : r[h] : 1;
                        return f
                    }
                    return i.prototype = new n, i.prototype.createSparseMatrix = function(r, t) {
                        return new i(r, t)
                    }, Object.defineProperty(i, "name", {
                        value: "SparseMatrix"
                    }), i.prototype.constructor = i, i.prototype.type = "SparseMatrix", i.prototype.isSparseMatrix = !0, i.prototype.getDataType = function() {
                        return ej(this._values, tx)
                    }, i.prototype.storage = function() {
                        return "sparse"
                    }, i.prototype.datatype = function() {
                        return this._datatype
                    }, i.prototype.create = function(r, t) {
                        return new i(r, t)
                    }, i.prototype.density = function() {
                        var r = this._size[0],
                            t = this._size[1];
                        return 0 !== r && 0 !== t ? this._index.length / (r * t) : 0
                    }, i.prototype.subset = function(r, t, e) {
                        if (!this._values) throw Error("Cannot invoke subset on a Pattern only matrix");
                        switch (arguments.length) {
                            case 1:
                                return function(r, t) {
                                    if (!r8(t)) throw TypeError("Invalid index");
                                    if (t.isScalar()) return r.get(t.min());
                                    var e, n, u, o, a = t.size();
                                    if (a.length !== r._size.length) throw new ex(a.length, r._size.length);
                                    var s = t.min(),
                                        f = t.max();
                                    for (e = 0, n = r._size.length; e < n; e++) eC(s[e], r._size[e]), eC(f[e], r._size[e]);
                                    var c = r._values,
                                        l = r._index,
                                        h = r._ptr,
                                        p = t.dimension(0),
                                        m = t.dimension(1),
                                        D = [],
                                        d = [];
                                    p.forEach(function(r, t) {
                                        d[r] = t[0], D[r] = !0
                                    });
                                    var v = c ? [] : void 0,
                                        g = [],
                                        y = [];
                                    return m.forEach(function(r) {
                                        for (y.push(g.length), u = h[r], o = h[r + 1]; u < o; u++) !0 === D[e = l[u]] && (g.push(d[e]), v && v.push(c[u]))
                                    }), y.push(g.length), new i({
                                        values: v,
                                        index: g,
                                        ptr: y,
                                        size: a,
                                        datatype: r._datatype
                                    })
                                }(this, r);
                            case 2:
                            case 3:
                                return function(r, t, e, n) {
                                    if (!t || !0 !== t.isIndex) throw TypeError("Invalid index");
                                    var i, u = t.size(),
                                        o = t.isScalar();
                                    if (rG(e) ? (i = e.size(), e = e.toArray()) : i = eA(e), o) {
                                        if (0 !== i.length) throw TypeError("Scalar expected");
                                        r.set(t.min(), e, n)
                                    } else {
                                        if (1 !== u.length && 2 !== u.length) throw new ex(u.length, r._size.length, "<");
                                        if (i.length < u.length) {
                                            for (var a = 0, s = 0; 1 === u[a] && 1 === i[a];) a++;
                                            for (; 1 === u[a];) s++, a++;
                                            e = eT(e, u.length, s, i)
                                        }
                                        if (!tE(u, i)) throw new ex(u, i, ">");
                                        if (1 === u.length) t.dimension(0).forEach(function(t, i) {
                                            eC(t), r.set([t, 0], e[i[0]], n)
                                        });
                                        else {
                                            var f = t.dimension(0),
                                                c = t.dimension(1);
                                            f.forEach(function(t, i) {
                                                eC(t), c.forEach(function(u, o) {
                                                    eC(u), r.set([t, u], e[i[0]][o[0]], n)
                                                })
                                            })
                                        }
                                    }
                                    return r
                                }(this, r, t, e);
                            default:
                                throw SyntaxError("Wrong number of arguments")
                        }
                    }, i.prototype.get = function(r) {
                        if (!rQ(r)) throw TypeError("Array expected");
                        if (r.length !== this._size.length) throw new ex(r.length, this._size.length);
                        if (!this._values) throw Error("Cannot invoke get on a Pattern only matrix");
                        var t = r[0],
                            e = r[1];
                        eC(t, this._size[0]), eC(e, this._size[1]);
                        var n = o(t, this._ptr[e], this._ptr[e + 1], this._index);
                        return n < this._ptr[e + 1] && this._index[n] === t ? this._values[n] : 0
                    }, i.prototype.set = function(r, n, i) {
                        if (!rQ(r)) throw TypeError("Array expected");
                        if (r.length !== this._size.length) throw new ex(r.length, this._size.length);
                        if (!this._values) throw Error("Cannot invoke set on a Pattern only matrix");
                        var u = r[0],
                            f = r[1],
                            c = this._size[0],
                            l = this._size[1],
                            h = e,
                            p = 0;
                        rX(this._datatype) && (h = t.find(e, [this._datatype, this._datatype]) || e, p = t.convert(0, this._datatype)), (u > c - 1 || f > l - 1) && (s(this, Math.max(u + 1, c), Math.max(f + 1, l), i), c = this._size[0], l = this._size[1]), eC(u, c), eC(f, l);
                        var m = o(u, this._ptr[f], this._ptr[f + 1], this._index);
                        return m < this._ptr[f + 1] && this._index[m] === u ? h(n, p) ? function(r, t, e, n, i) {
                            e.splice(r, 1), n.splice(r, 1);
                            for (var u = t + 1; u < i.length; u++) i[u]--
                        }(m, f, this._values, this._index, this._ptr) : this._values[m] = n : h(n, p) || a(m, u, f, n, this._values, this._index, this._ptr), this
                    }, i.prototype.resize = function(r, t, e) {
                        if (!rK(r)) throw TypeError("Array or Matrix expected");
                        var n = r.valueOf().map(r => Array.isArray(r) && 1 === r.length ? r[0] : r);
                        if (2 !== n.length) throw Error("Only two dimensions matrix are supported");
                        return n.forEach(function(r) {
                            if (!rV(r) || !tP(r) || r < 0) throw TypeError("Invalid size, must contain positive integers (size: " + ev(n) + ")")
                        }), s(e ? this.clone() : this, n[0], n[1], t)
                    }, i.prototype.reshape = function(r, t) {
                        if (!rQ(r)) throw TypeError("Array expected");
                        if (2 !== r.length) throw Error("Sparse matrices can only be reshaped in two dimensions");
                        r.forEach(function(t) {
                            if (!rV(t) || !tP(t) || t <= -2 || 0 === t) throw TypeError("Invalid size, must contain positive integers or -1 (size: " + ev(r) + ")")
                        });
                        var e = this._size[0] * this._size[1],
                            n = (r = eB(r, e))[0] * r[1];
                        if (e !== n) throw Error("Reshaping sparse matrix will result in the wrong number of elements");
                        var i = t ? this.clone() : this;
                        if (this._size[0] === r[0] && this._size[1] === r[1]) return i;
                        for (var u = [], s = 0; s < i._ptr.length; s++)
                            for (var f = 0; f < i._ptr[s + 1] - i._ptr[s]; f++) u.push(s);
                        for (var c = i._values.slice(), l = i._index.slice(), h = 0; h < i._index.length; h++) {
                            var p = l[h],
                                m = u[h],
                                D = p * i._size[1] + m;
                            u[h] = D % r[1], l[h] = Math.floor(D / r[1])
                        }
                        i._values.length = 0, i._index.length = 0, i._ptr.length = r[1] + 1, i._size = r.slice();
                        for (var d = 0; d < i._ptr.length; d++) i._ptr[d] = 0;
                        for (var v = 0; v < c.length; v++) {
                            var g = l[v],
                                y = u[v],
                                b = c[v];
                            a(o(g, i._ptr[y], i._ptr[y + 1], i._index), g, y, b, i._values, i._index, i._ptr)
                        }
                        return i
                    }, i.prototype.clone = function() {
                        return new i({
                            values: this._values ? tw(this._values) : void 0,
                            index: tw(this._index),
                            ptr: tw(this._ptr),
                            size: tw(this._size),
                            datatype: this._datatype
                        })
                    }, i.prototype.size = function() {
                        return this._size.slice(0)
                    }, i.prototype.map = function(r, n) {
                        if (!this._values) throw Error("Cannot invoke map on a Pattern only matrix");
                        var u = this,
                            o = this._size[0],
                            a = this._size[1],
                            s = eV(r, u, "map");
                        return function(r, n, u, o, a, s, f) {
                            var c = [],
                                l = [],
                                h = [],
                                p = e,
                                m = 0;
                            rX(r._datatype) && (p = t.find(e, [r._datatype, r._datatype]) || e, m = t.convert(0, r._datatype));
                            for (var D = function(r, t, e) {
                                    var n = s(r, t, e);
                                    p(n, m) || (c.push(n), l.push(t))
                                }, d = 0; d <= a; d++) {
                                h.push(c.length);
                                var v = r._ptr[d],
                                    g = r._ptr[d + 1];
                                if (f)
                                    for (var y = v; y < g; y++) {
                                        var b = r._index[y];
                                        b >= 0 && b <= u && D(r._values[y], b - 0, d - 0)
                                    } else {
                                        for (var x = {}, w = v; w < g; w++) x[r._index[w]] = r._values[w];
                                        for (var A = n; A <= u; A++) D(A in x ? x[A] : 0, A - n, d - o)
                                    }
                            }
                            return h.push(c.length), new i({
                                values: c,
                                index: l,
                                ptr: h,
                                size: [u - n + 1, a - o + 1]
                            })
                        }(this, 0, o - 1, 0, a - 1, function(r, t, e) {
                            return s(r, [t, e], u)
                        }, n)
                    }, i.prototype.forEach = function(r, t) {
                        if (!this._values) throw Error("Cannot invoke forEach on a Pattern only matrix");
                        for (var e = this._size[0], n = this._size[1], i = eV(r, this, "forEach"), u = 0; u < n; u++) {
                            var o = this._ptr[u],
                                a = this._ptr[u + 1];
                            if (t)
                                for (var s = o; s < a; s++) {
                                    var f = this._index[s];
                                    i(this._values[s], [f, u], this)
                                } else {
                                    for (var c = {}, l = o; l < a; l++) c[this._index[l]] = this._values[l];
                                    for (var h = 0; h < e; h++) i(h in c ? c[h] : 0, [h, u], this)
                                }
                        }
                    }, i.prototype[Symbol.iterator] = function*() {
                        if (!this._values) throw Error("Cannot iterate a Pattern only matrix");
                        for (var r = this._size[1], t = 0; t < r; t++)
                            for (var e = this._ptr[t], n = this._ptr[t + 1], i = e; i < n; i++) {
                                var u = this._index[i];
                                yield {
                                    value: this._values[i],
                                    index: [u, t]
                                }
                            }
                    }, i.prototype.toArray = function() {
                        return f(this._values, this._index, this._ptr, this._size, !0)
                    }, i.prototype.valueOf = function() {
                        return f(this._values, this._index, this._ptr, this._size, !1)
                    }, i.prototype.format = function(r) {
                        for (var t = this._size[0], e = this._size[1], n = this.density(), i = "Sparse Matrix [" + ev(t, r) + " x " + ev(e, r) + "] density: " + ev(n, r) + "\n", u = 0; u < e; u++)
                            for (var o = this._ptr[u], a = this._ptr[u + 1], s = o; s < a; s++) i += "\n    (" + ev(this._index[s], r) + ", " + ev(u, r) + ") ==> " + (this._values ? ev(this._values[s], r) : "X");
                        return i
                    }, i.prototype.toString = function() {
                        return ev(this.toArray())
                    }, i.prototype.toJSON = function() {
                        return {
                            mathjs: "SparseMatrix",
                            values: this._values,
                            index: this._index,
                            ptr: this._ptr,
                            size: this._size,
                            datatype: this._datatype
                        }
                    }, i.prototype.diagonal = function(r) {
                        if (r) {
                            if (rJ(r) && (r = r.toNumber()), !rV(r) || !tP(r)) throw TypeError("The parameter k must be an integer number")
                        } else r = 0;
                        var t = r > 0 ? r : 0,
                            e = r < 0 ? -r : 0,
                            n = this._size[0],
                            u = this._size[1],
                            o = Math.min(n - e, u - t),
                            a = [],
                            s = [],
                            f = [];
                        f[0] = 0;
                        for (var c = t; c < u && a.length < o; c++)
                            for (var l = this._ptr[c], h = this._ptr[c + 1], p = l; p < h; p++) {
                                var m = this._index[p];
                                if (m === c - t + e) {
                                    a.push(this._values[p]), s[a.length - 1] = m - e;
                                    break
                                }
                            }
                        return f.push(a.length), new i({
                            values: a,
                            index: s,
                            ptr: f,
                            size: [o, 1]
                        })
                    }, i.fromJSON = function(r) {
                        return new i(r)
                    }, i.diagonal = function(r, n, u, o, a) {
                        if (!rQ(r)) throw TypeError("Array expected, size parameter");
                        if (2 !== r.length) throw Error("Only two dimensions matrix are supported");
                        if (r = r.map(function(r) {
                                if (rJ(r) && (r = r.toNumber()), !rV(r) || !tP(r) || r < 1) throw Error("Size values must be positive integers");
                                return r
                            }), u) {
                            if (rJ(u) && (u = u.toNumber()), !rV(u) || !tP(u)) throw TypeError("The parameter k must be an integer number")
                        } else u = 0;
                        var s, f = e,
                            c = 0;
                        rX(a) && (f = t.find(e, [a, a]) || e, c = t.convert(0, a));
                        var l = u > 0 ? u : 0,
                            h = u < 0 ? -u : 0,
                            p = r[0],
                            m = r[1],
                            D = Math.min(p - h, m - l);
                        if (rQ(n)) {
                            if (n.length !== D) throw Error("Invalid value array length");
                            s = function(r) {
                                return n[r]
                            }
                        } else if (rG(n)) {
                            var d = n.size();
                            if (1 !== d.length || d[0] !== D) throw Error("Invalid matrix length");
                            s = function(r) {
                                return n.get([r])
                            }
                        } else s = function() {
                            return n
                        };
                        for (var v = [], g = [], y = [], b = 0; b < m; b++) {
                            y.push(v.length);
                            var x = b - l;
                            if (x >= 0 && x < D) {
                                var w = s(x);
                                f(w, c) || (g.push(x + h), v.push(w))
                            }
                        }
                        return y.push(v.length), new i({
                            values: v,
                            index: g,
                            ptr: y,
                            size: [p, m]
                        })
                    }, i.prototype.swapRows = function(r, t) {
                        if (!rV(r) || !tP(r) || !rV(t) || !tP(t)) throw Error("Row index must be positive integers");
                        if (2 !== this._size.length) throw Error("Only two dimensional matrix is supported");
                        return eC(r, this._size[0]), eC(t, this._size[0]), i._swapRows(r, t, this._size[1], this._values, this._index, this._ptr), this
                    }, i._forEachRow = function(r, t, e, n, i) {
                        for (var u = n[r], o = n[r + 1], a = u; a < o; a++) i(e[a], t[a])
                    }, i._swapRows = function(r, t, e, n, i, u) {
                        for (var a = 0; a < e; a++) {
                            var s = u[a],
                                f = u[a + 1],
                                c = o(r, s, f, i),
                                l = o(t, s, f, i);
                            if (c < f && l < f && i[c] === r && i[l] === t) {
                                if (n) {
                                    var h = n[c];
                                    n[c] = n[l], n[l] = h
                                }
                                continue
                            }
                            if (c < f && i[c] === r && (l >= f || i[l] !== t)) {
                                var p = n ? n[c] : void 0;
                                i.splice(l, 0, t), n && n.splice(l, 0, p), i.splice(l <= c ? c + 1 : c, 1), n && n.splice(l <= c ? c + 1 : c, 1);
                                continue
                            }
                            if (l < f && i[l] === t && (c >= f || i[c] !== r)) {
                                var m = n ? n[l] : void 0;
                                i.splice(c, 0, r), n && n.splice(c, 0, m), i.splice(c <= l ? l + 1 : l, 1), n && n.splice(c <= l ? l + 1 : l, 1)
                            }
                        }
                    }, i
                }, {
                    isClass: !0
                }),
                n7 = "subtractScalar",
                n4 = tC(n7, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(n7, {
                        "number, number": e4,
                        "Complex, Complex": function(r, t) {
                            return r.sub(t)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return r.minus(t)
                        },
                        "bigint, bigint": function(r, t) {
                            return r - t
                        },
                        "Fraction, Fraction": function(r, t) {
                            return r.sub(t)
                        },
                        "Unit, Unit": t.referToSelf(r => (e, n) => {
                            if (null === e.value || void 0 === e.value) throw Error("Parameter x contains a unit with undefined value");
                            if (null === n.value || void 0 === n.value) throw Error("Parameter y contains a unit with undefined value");
                            if (!e.equalBase(n)) throw Error("Units do not match");
                            var i = e.clone();
                            return i.value = t.find(r, [i.valueType(), n.valueType()])(i.value, n.value), i.fixPrefix = !1, i
                        })
                    })
                }),
                n6 = "apply";

            function ir(r, t, e) {
                var n, i, u;
                if (t <= 0) {
                    if (!Array.isArray(r[0])) return e(r);
                    for (n = 0, u = function(r) {
                            var t, e, n = r.length,
                                i = r[0].length,
                                u = [];
                            for (e = 0; e < i; e++) {
                                var o = [];
                                for (t = 0; t < n; t++) o.push(r[t][e]);
                                u.push(o)
                            }
                            return u
                        }(r), i = []; n < u.length; n++) i[n] = ir(u[n], t - 1, e);
                    return i
                }
                for (n = 0, i = []; n < r.length; n++) i[n] = ir(r[n], t - 1, e);
                return i
            }
            r => {
                var {
                    typed: t,
                    isInteger: e
                } = r;
                return t(n6, {
                    "Array | Matrix, number | BigNumber, function": function(r, t, n) {
                        if (!e(t)) throw TypeError("Integer number expected for dimension");
                        var i = Array.isArray(r) ? eA(r) : r.size();
                        if (t < 0 || t >= i.length) throw new ew(t, i.length);
                        return rG(r) ? r.create(ir(r.valueOf(), t, n), r.datatype()) : ir(r, t, n)
                    }
                })
            };
            var it = tC("bignumber", ["typed", "BigNumber"], r => {
                    var {
                        typed: t,
                        BigNumber: e
                    } = r;
                    return t("bignumber", {
                        "": function() {
                            return new e(0)
                        },
                        number: function(r) {
                            return new e(r + "")
                        },
                        string: function(r) {
                            var t = r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
                            if (t) {
                                var n = t[2],
                                    i = e(t[1]),
                                    u = new e(2).pow(Number(n));
                                if (i.gt(u.sub(1))) throw SyntaxError('String "'.concat(r, '" is out of range'));
                                var o = new e(2).pow(Number(n) - 1);
                                return i.gte(o) ? i.sub(u) : i
                            }
                            return new e(r)
                        },
                        BigNumber: function(r) {
                            return r
                        },
                        bigint: function(r) {
                            return new e(r.toString())
                        },
                        Unit: t.referToSelf(r => t => {
                            var e = t.clone();
                            return e.value = r(t.value), e
                        }),
                        Fraction: function(r) {
                            return new e(r.n).div(r.d).times(r.s)
                        },
                        null: function(r) {
                            return new e(0)
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                ie = "isNaN",
                ii = tC(ie, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(ie, {
                        number: nP,
                        BigNumber: function(r) {
                            return r.isNaN()
                        },
                        bigint: function(r) {
                            return !1
                        },
                        Fraction: function(r) {
                            return !1
                        },
                        Complex: function(r) {
                            return r.isNaN()
                        },
                        Unit: function(r) {
                            return Number.isNaN(r.value)
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                iu = tC("sqrt", ["config", "typed", "Complex"], r => {
                    var {
                        config: t,
                        typed: e,
                        Complex: n
                    } = r;
                    return e("sqrt", {
                        number: i,
                        Complex: function(r) {
                            return r.sqrt()
                        },
                        BigNumber: function(r) {
                            return !r.isNegative() || t.predictable ? r.sqrt() : i(r.toNumber())
                        },
                        Unit: function(r) {
                            return r.pow(.5)
                        }
                    });

                    function i(r) {
                        return isNaN(r) ? NaN : r >= 0 || t.predictable ? Math.sqrt(r) : new n(r, 0).sqrt()
                    }
                }),
                io = "unaryMinus",
                ia = tC(io, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(io, {
                        number: nr,
                        "Complex | BigNumber | Fraction": r => r.neg(),
                        bigint: r => -r,
                        Unit: t.referToSelf(r => e => {
                            var n = e.clone();
                            return n.value = t.find(r, n.valueType())(e.value), n
                        }),
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0))
                    })
                });
            tC("bin", ["typed", "format"], r => {
                var {
                    typed: t,
                    format: e
                } = r;
                return t("bin", {
                    "number | BigNumber": function(r) {
                        return e(r, {
                            notation: "bin"
                        })
                    },
                    "number | BigNumber, number | BigNumber": function(r, t) {
                        return e(r, {
                            notation: "bin",
                            wordSize: t
                        })
                    }
                })
            });
            var is = tC("fraction", ["typed", "Fraction"], r => {
                    var {
                        typed: t,
                        Fraction: e
                    } = r;
                    return t("fraction", {
                        number: function(r) {
                            if (!isFinite(r) || isNaN(r)) throw Error(r + " cannot be represented as a fraction");
                            return new e(r)
                        },
                        string: function(r) {
                            return new e(r)
                        },
                        "number, number": function(r, t) {
                            return new e(r, t)
                        },
                        null: function(r) {
                            return new e(0)
                        },
                        BigNumber: function(r) {
                            return new e(r.toString())
                        },
                        bigint: function(r) {
                            return new e(r.toString())
                        },
                        Fraction: function(r) {
                            return r
                        },
                        Unit: t.referToSelf(r => t => {
                            var e = t.clone();
                            return e.value = r(t.value), e
                        }),
                        Object: function(r) {
                            return new e(r)
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                ic = "isNumeric",
                il = tC(ic, ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return t(ic, {
                        "number | BigNumber | bigint | Fraction | boolean": () => !0,
                        "Complex | Unit | string | null | undefined | Node": () => !1,
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                    })
                }),
                ih = "matrix",
                ip = tC(ih, ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], r => {
                    var {
                        typed: t,
                        Matrix: e,
                        DenseMatrix: n,
                        SparseMatrix: i
                    } = r;
                    return t(ih, {
                        "": function() {
                            return u([])
                        },
                        string: function(r) {
                            return u([], r)
                        },
                        "string, string": function(r, t) {
                            return u([], r, t)
                        },
                        Array: function(r) {
                            return u(r)
                        },
                        Matrix: function(r) {
                            return u(r, r.storage())
                        },
                        "Array | Matrix, string": u,
                        "Array | Matrix, string, string": u
                    });

                    function u(r, t, e) {
                        if ("dense" === t || "default" === t || void 0 === t) return new n(r, e);
                        if ("sparse" === t) return new i(r, e);
                        throw TypeError("Unknown matrix type " + JSON.stringify(t) + ".")
                    }
                });

            function im() {
                throw Error('No "bignumber" implementation available')
            }

            function iD() {
                throw Error('No "fraction" implementation available')
            }

            function id() {
                throw Error('No "matrix" implementation available')
            }
            var iv = tC("numeric", ["number", "?bignumber", "?fraction"], r => {
                var {
                    number: t,
                    bignumber: e,
                    fraction: n
                } = r, i = {
                    string: !0,
                    number: !0,
                    BigNumber: !0,
                    Fraction: !0
                }, u = {
                    number: r => t(r),
                    BigNumber: e ? r => e(r) : im,
                    bigint: r => BigInt(r),
                    Fraction: n ? r => n(r) : iD
                };
                return function(r) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "number",
                        e = arguments.length > 2 ? arguments[2] : void 0;
                    if (void 0 !== e) throw SyntaxError("numeric() takes one or two arguments");
                    var n = tx(r);
                    if (!(n in i)) throw TypeError("Cannot convert " + r + ' of type "' + n + '"; valid input types are ' + Object.keys(i).join(", "));
                    if (!(t in u)) throw TypeError("Cannot convert " + r + ' to type "' + t + '"; valid output types are ' + Object.keys(u).join(", "));
                    return t === n ? r : u[t](r)
                }
            });

            function ig(r, t, e) {
                var n;
                return String(r).includes("Unexpected type") ? (n = arguments.length > 2 ? " (type: " + tx(e) + ", value: " + JSON.stringify(e) + ")" : " (type: " + r.data.actual + ")", TypeError("Cannot calculate " + t + ", unexpected type of argument" + n)) : String(r).includes("complex numbers") ? (n = arguments.length > 2 ? " (type: " + tx(e) + ", value: " + JSON.stringify(e) + ")" : "", TypeError("Cannot calculate " + t + ", no ordering relation is defined for complex numbers" + n)) : r
            }
            var iy = (r => {
                    var {
                        typed: t,
                        config: e,
                        multiplyScalar: n,
                        numeric: i
                    } = r;
                    return t("prod", {
                        "Array | Matrix": u,
                        "Array | Matrix, number | BigNumber": function(r, t) {
                            throw Error("prod(A, dim) is not yet supported")
                        },
                        "...": function(r) {
                            return u(r)
                        }
                    });

                    function u(r) {
                        var t;
                        if (eK(r, function(r) {
                                try {
                                    t = void 0 === t ? r : n(t, r)
                                } catch (t) {
                                    throw ig(t, "prod", r)
                                }
                            }), "string" == typeof t && (t = i(t, tq(t, e))), void 0 === t) throw Error("Cannot calculate prod of an empty array");
                        return t
                    }
                }, "reshape"),
                ib = tC(iy, ["typed", "isInteger", "matrix"], r => {
                    var {
                        typed: t,
                        isInteger: e
                    } = r;
                    return t(iy, {
                        "Matrix, Array": function(r, t) {
                            return r.reshape(t, !0)
                        },
                        "Array, Array": function(r, t) {
                            return t.forEach(function(r) {
                                if (!e(r)) throw TypeError("Invalid size for dimension: " + r)
                            }), eN(r, t)
                        }
                    })
                }),
                ix = "size",
                iw = tC(ix, ["typed", "config", "?matrix"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n
                    } = r;
                    return t(ix, {
                        Matrix: function(r) {
                            return r.create(r.size(), "number")
                        },
                        Array: eA,
                        string: function(r) {
                            return "Array" === e.matrix ? [r.length] : n([r.length], "dense", "number")
                        },
                        "number | Complex | BigNumber | Unit | boolean | null": function(r) {
                            return "Array" === e.matrix ? [] : n ? n([], "dense", "number") : id()
                        }
                    })
                }),
                iA = "transpose",
                iE = tC(iA, ["typed", "matrix"], r => {
                    var {
                        typed: t,
                        matrix: e
                    } = r;
                    return t(iA, {
                        Array: r => n(e(r)).valueOf(),
                        Matrix: n,
                        any: tw
                    });

                    function n(r) {
                        var t, e = r.size();
                        switch (e.length) {
                            case 1:
                                t = r.clone();
                                break;
                            case 2:
                                var n = e[0],
                                    i = e[1];
                                if (0 === i) throw RangeError("Cannot transpose a 2D matrix with no columns (size: " + ev(e) + ")");
                                switch (r.storage()) {
                                    case "dense":
                                        t = function(r, t, e) {
                                            for (var n, i = r._data, u = [], o = 0; o < e; o++) {
                                                n = u[o] = [];
                                                for (var a = 0; a < t; a++) n[a] = tw(i[a][o])
                                            }
                                            return r.createDenseMatrix({
                                                data: u,
                                                size: [e, t],
                                                datatype: r._datatype
                                            })
                                        }(r, n, i);
                                        break;
                                    case "sparse":
                                        t = function(r, t, e) {
                                            for (var n, i, u, o = r._values, a = r._index, s = r._ptr, f = o ? [] : void 0, c = [], l = [], h = [], p = 0; p < t; p++) h[p] = 0;
                                            for (n = 0, i = a.length; n < i; n++) h[a[n]]++;
                                            for (var m = 0, D = 0; D < t; D++) l.push(m), m += h[D], h[D] = l[D];
                                            for (l.push(m), u = 0; u < e; u++)
                                                for (var d = s[u], v = s[u + 1], g = d; g < v; g++) {
                                                    var y = h[a[g]]++;
                                                    c[y] = u, o && (f[y] = tw(o[g]))
                                                }
                                            return r.createSparseMatrix({
                                                values: f,
                                                index: c,
                                                ptr: l,
                                                size: [e, t],
                                                datatype: r._datatype
                                            })
                                        }(r, n, i)
                                }
                                break;
                            default:
                                throw RangeError("Matrix must be a vector or two dimensional (size: " + ev(e) + ")")
                        }
                        return t
                    }
                }),
                iF = (r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        BigNumber: i
                    } = r;
                    return t("xgcd", {
                        "number, number": function(r, t) {
                            var i = nu(r, t);
                            return "Array" === e.matrix ? i : n(i)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            var u, o, a, s, f = new i(0),
                                c = new i(1),
                                l = f,
                                h = c,
                                p = c,
                                m = f;
                            if (!r.isInt() || !t.isInt()) throw Error("Parameters in function xgcd must be integer numbers");
                            for (; !t.isZero();) o = r.div(t).floor(), a = r.mod(t), u = l, l = h.minus(o.times(l)), h = u, u = p, p = m.minus(o.times(p)), m = u, r = t, t = a;
                            return s = r.lt(f) ? [r.neg(), h.neg(), m.neg()] : [r, r.isZero() ? 0 : h, m], "Array" === e.matrix ? s : n(s)
                        }
                    })
                }, "zeros"),
                iC = tC(iF, ["typed", "config", "matrix", "BigNumber"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        BigNumber: i
                    } = r;
                    return t(iF, {
                        "": function() {
                            return "Array" === e.matrix ? u([]) : u([], "default")
                        },
                        "...number | BigNumber | string": function(r) {
                            if ("string" == typeof r[r.length - 1]) {
                                var t = r.pop();
                                return u(r, t)
                            }
                            return "Array" === e.matrix ? u(r) : u(r, "default")
                        },
                        Array: u,
                        Matrix: function(r) {
                            var t = r.storage();
                            return u(r.valueOf(), t)
                        },
                        "Array | Matrix, string": function(r, t) {
                            return u(r.valueOf(), t)
                        }
                    });

                    function u(r, t) {
                        var e, u = (e = !1, r.forEach(function(r, t, n) {
                            rJ(r) && (e = !0, n[t] = r.toNumber())
                        }), e) ? new i(0) : 0;
                        if (function(r) {
                                r.forEach(function(r) {
                                    if ("number" != typeof r || !tP(r) || r < 0) throw Error("Parameters in function zeros must be positive integers")
                                })
                            }(r), t) {
                            var o = n(t);
                            return r.length > 0 ? o.resize(r, u) : o
                        }
                        var a = [];
                        return r.length > 0 ? eM(a, r, u) : a
                    }
                }),
                i_ = (r => {
                    var {
                        config: t,
                        typed: e,
                        isNegative: n,
                        unaryMinus: i,
                        matrix: u,
                        Complex: o,
                        BigNumber: a,
                        Fraction: s
                    } = r;
                    return e("cbrt", {
                        number: ne,
                        Complex: f,
                        "Complex, boolean": f,
                        BigNumber: function(r) {
                            return r.cbrt()
                        },
                        Unit: function(r) {
                            if (r.value && rH(r.value)) {
                                var t = r.clone();
                                return t.value = 1, (t = t.pow(1 / 3)).value = f(r.value), t
                            }
                            var e, u = n(r.value);
                            u && (r.value = i(r.value)), e = rJ(r.value) ? new a(1).div(3) : rY(r.value) ? new s(1, 3) : 1 / 3;
                            var o = r.pow(e);
                            return u && (o.value = i(o.value)), o
                        }
                    });

                    function f(r, e) {
                        var n = r.arg() / 3,
                            i = r.abs(),
                            a = new o(ne(i), 0).mul(new o(0, n).exp());
                        if (!e) return a;
                        var s = [a, new o(ne(i), 0).mul(new o(0, n + 2 * Math.PI / 3).exp()), new o(ne(i), 0).mul(new o(0, n - 2 * Math.PI / 3).exp())];
                        return "Array" === t.matrix ? s : u(s)
                    }
                }, "concat"),
                iM = tC(i_, ["typed", "matrix", "isInteger"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        isInteger: n
                    } = r;
                    return t(i_, {
                        "...Array | Matrix | number | BigNumber": function(r) {
                            var t, i, u = r.length,
                                o = -1,
                                a = !1,
                                s = [];
                            for (t = 0; t < u; t++) {
                                var f = r[t];
                                if (rG(f) && (a = !0), rV(f) || rJ(f)) {
                                    if (t !== u - 1) throw Error("Dimension must be specified as last argument");
                                    if (i = o, !n(o = f.valueOf())) throw TypeError("Integer number expected for dimension");
                                    if (o < 0 || t > 0 && o > i) throw new ew(o, i + 1)
                                } else {
                                    var c = tw(f).valueOf(),
                                        l = eA(c);
                                    if (s[t] = c, i = o, o = l.length - 1, t > 0 && o !== i) throw new ex(i + 1, o + 1)
                                }
                            }
                            if (0 === s.length) throw SyntaxError("At least one matrix expected");
                            for (var h = s.shift(); s.length;) h = ek(h, s.shift(), o);
                            return a ? e(h) : h
                        },
                        "...string": function(r) {
                            return r.join("")
                        }
                    })
                }),
                iN = "ctranspose",
                iB = tC(iN, ["typed", "transpose", "conj"], r => {
                    var {
                        typed: t,
                        transpose: e,
                        conj: n
                    } = r;
                    return t(iN, {
                        any: function(r) {
                            return n(e(r))
                        }
                    })
                }),
                iS = "diag",
                iT = tC(iS, ["typed", "matrix", "DenseMatrix", "SparseMatrix"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        DenseMatrix: n,
                        SparseMatrix: i
                    } = r;
                    return t(iS, {
                        Array: function(r) {
                            return u(r, 0, eA(r), null)
                        },
                        "Array, number": function(r, t) {
                            return u(r, t, eA(r), null)
                        },
                        "Array, BigNumber": function(r, t) {
                            return u(r, t.toNumber(), eA(r), null)
                        },
                        "Array, string": function(r, t) {
                            return u(r, 0, eA(r), t)
                        },
                        "Array, number, string": function(r, t, e) {
                            return u(r, t, eA(r), e)
                        },
                        "Array, BigNumber, string": function(r, t, e) {
                            return u(r, t.toNumber(), eA(r), e)
                        },
                        Matrix: function(r) {
                            return u(r, 0, r.size(), r.storage())
                        },
                        "Matrix, number": function(r, t) {
                            return u(r, t, r.size(), r.storage())
                        },
                        "Matrix, BigNumber": function(r, t) {
                            return u(r, t.toNumber(), r.size(), r.storage())
                        },
                        "Matrix, string": function(r, t) {
                            return u(r, 0, r.size(), t)
                        },
                        "Matrix, number, string": function(r, t, e) {
                            return u(r, t, r.size(), e)
                        },
                        "Matrix, BigNumber, string": function(r, t, e) {
                            return u(r, t.toNumber(), r.size(), e)
                        }
                    });

                    function u(r, t, u, o) {
                        if (!tP(t)) throw TypeError("Second parameter in function diag must be an integer");
                        var a = t > 0 ? t : 0,
                            s = t < 0 ? -t : 0;
                        switch (u.length) {
                            case 1:
                                return function(r, t, e, u, o, a) {
                                    var s = [u + o, u + a];
                                    if (e && "sparse" !== e && "dense" !== e) throw TypeError("Unknown matrix type ".concat(e, '"'));
                                    var f = "sparse" === e ? i.diagonal(s, r, t) : n.diagonal(s, r, t);
                                    return null !== e ? f : f.valueOf()
                                }(r, t, o, u[0], s, a);
                            case 2:
                                return function(r, t, n, i, u, o) {
                                    if (rG(r)) {
                                        var a = r.diagonal(t);
                                        return null !== n ? n !== a.storage() ? e(a, n) : a : a.valueOf()
                                    }
                                    for (var s = Math.min(i[0] - u, i[1] - o), f = [], c = 0; c < s; c++) f[c] = r[c + u][c + o];
                                    return null !== n ? e(f) : f
                                }(r, t, o, u, s, a)
                        }
                        throw RangeError("Matrix for function diag must be 2 dimensional")
                    }
                }),
                iz = "divideScalar",
                iO = tC(iz, ["typed", "numeric"], r => {
                    var {
                        typed: t,
                        numeric: e
                    } = r;
                    return t(iz, {
                        "number, number": function(r, t) {
                            return r / t
                        },
                        "Complex, Complex": function(r, t) {
                            return r.div(t)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return r.div(t)
                        },
                        "bigint, bigint": function(r, t) {
                            return r / t
                        },
                        "Fraction, Fraction": function(r, t) {
                            return r.div(t)
                        },
                        "Unit, number | Complex | Fraction | BigNumber | Unit": (r, t) => r.divide(t),
                        "number | Fraction | Complex | BigNumber, Unit": (r, t) => t.divideInto(r)
                    })
                }),
                iI = tC("matAlgo02xDS0", ["typed", "equalScalar"], r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return function(r, n, i, u) {
                        var o, a = r._data,
                            s = r._size,
                            f = r._datatype || r.getDataType(),
                            c = n._values,
                            l = n._index,
                            h = n._ptr,
                            p = n._size,
                            m = n._datatype || void 0 === n._data ? n._datatype : n.getDataType();
                        if (s.length !== p.length) throw new ex(s.length, p.length);
                        if (s[0] !== p[0] || s[1] !== p[1]) throw RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
                        if (!c) throw Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                        var D = s[0],
                            d = s[1],
                            v = e,
                            g = 0,
                            y = i;
                        "string" == typeof f && f === m && "mixed" !== f && (o = f, v = t.find(e, [o, o]), g = t.convert(0, o), y = t.find(i, [o, o]));
                        for (var b = [], x = [], w = [], A = 0; A < d; A++) {
                            w[A] = x.length;
                            for (var E = h[A], F = h[A + 1], C = E; C < F; C++) {
                                var _ = l[C],
                                    M = u ? y(c[C], a[_][A]) : y(a[_][A], c[C]);
                                v(M, g) || (x.push(_), b.push(M))
                            }
                        }
                        return w[d] = x.length, n.createSparseMatrix({
                            values: b,
                            index: x,
                            ptr: w,
                            size: [D, d],
                            datatype: f === r._datatype && m === n._datatype ? o : void 0
                        })
                    }
                }),
                ij = tC("matAlgo03xDSf", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return function(r, e, n, i) {
                        var u, o = r._data,
                            a = r._size,
                            s = r._datatype || r.getDataType(),
                            f = e._values,
                            c = e._index,
                            l = e._ptr,
                            h = e._size,
                            p = e._datatype || void 0 === e._data ? e._datatype : e.getDataType();
                        if (a.length !== h.length) throw new ex(a.length, h.length);
                        if (a[0] !== h[0] || a[1] !== h[1]) throw RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + h + ")");
                        if (!f) throw Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                        var m = a[0],
                            D = a[1],
                            d = 0,
                            v = n;
                        "string" == typeof s && s === p && "mixed" !== s && (u = s, d = t.convert(0, u), v = t.find(n, [u, u]));
                        for (var g = [], y = 0; y < m; y++) g[y] = [];
                        for (var b = [], x = [], w = 0; w < D; w++) {
                            for (var A = w + 1, E = l[w], F = l[w + 1], C = E; C < F; C++) {
                                var _ = c[C];
                                b[_] = i ? v(f[C], o[_][w]) : v(o[_][w], f[C]), x[_] = A
                            }
                            for (var M = 0; M < m; M++) x[M] === A ? g[M][w] = b[M] : g[M][w] = i ? v(d, o[M][w]) : v(o[M][w], d)
                        }
                        return r.createDenseMatrix({
                            data: g,
                            size: [m, D],
                            datatype: s === r._datatype && p === e._datatype ? u : void 0
                        })
                    }
                }),
                ik = tC("matAlgo07xSSf", ["typed", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        DenseMatrix: e
                    } = r;
                    return function(r, i, u) {
                        var o, a, s, f = r._size,
                            c = r._datatype || void 0 === r._data ? r._datatype : r.getDataType(),
                            l = i._size,
                            h = i._datatype || void 0 === i._data ? i._datatype : i.getDataType();
                        if (f.length !== l.length) throw new ex(f.length, l.length);
                        if (f[0] !== l[0] || f[1] !== l[1]) throw RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + l + ")");
                        var p = f[0],
                            m = f[1],
                            D = 0,
                            d = u;
                        "string" == typeof c && c === h && "mixed" !== c && (o = c, D = t.convert(0, o), d = t.find(u, [o, o]));
                        var v = [];
                        for (a = 0; a < p; a++) v[a] = [];
                        var g = [],
                            y = [],
                            b = [],
                            x = [];
                        for (s = 0; s < m; s++) {
                            var w = s + 1;
                            for (n(r, s, b, g, w), n(i, s, x, y, w), a = 0; a < p; a++) {
                                var A = b[a] === w ? g[a] : D,
                                    E = x[a] === w ? y[a] : D;
                                v[a][s] = d(A, E)
                            }
                        }
                        return new e({
                            data: v,
                            size: [p, m],
                            datatype: c === r._datatype && h === i._datatype ? o : void 0
                        })
                    };

                    function n(r, t, e, n, i) {
                        for (var u = r._values, o = r._index, a = r._ptr, s = a[t], f = a[t + 1]; s < f; s++) {
                            var c = o[s];
                            e[c] = i, n[c] = u[s]
                        }
                    }
                }),
                iP = tC("matAlgo11xS0s", ["typed", "equalScalar"], r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return function(r, n, i, u) {
                        var o, a = r._values,
                            s = r._index,
                            f = r._ptr,
                            c = r._size,
                            l = r._datatype;
                        if (!a) throw Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                        var h = c[0],
                            p = c[1],
                            m = e,
                            D = 0,
                            d = i;
                        "string" == typeof l && (o = l, m = t.find(e, [o, o]), D = t.convert(0, o), n = t.convert(n, o), d = t.find(i, [o, o]));
                        for (var v = [], g = [], y = [], b = 0; b < p; b++) {
                            y[b] = g.length;
                            for (var x = f[b], w = f[b + 1], A = x; A < w; A++) {
                                var E = s[A],
                                    F = u ? d(n, a[A]) : d(a[A], n);
                                m(F, D) || (g.push(E), v.push(F))
                            }
                        }
                        return y[p] = g.length, r.createSparseMatrix({
                            values: v,
                            index: g,
                            ptr: y,
                            size: [h, p],
                            datatype: o
                        })
                    }
                }),
                iq = tC("matAlgo12xSfs", ["typed", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        DenseMatrix: e
                    } = r;
                    return function(r, n, i, u) {
                        var o, a = r._values,
                            s = r._index,
                            f = r._ptr,
                            c = r._size,
                            l = r._datatype;
                        if (!a) throw Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                        var h = c[0],
                            p = c[1],
                            m = i;
                        "string" == typeof l && (o = l, n = t.convert(n, o), m = t.find(i, [o, o]));
                        for (var D = [], d = [], v = [], g = 0; g < p; g++) {
                            for (var y = g + 1, b = f[g], x = f[g + 1], w = b; w < x; w++) {
                                var A = s[w];
                                d[A] = a[w], v[A] = y
                            }
                            for (var E = 0; E < h; E++) 0 === g && (D[E] = []), v[E] === y ? D[E][g] = u ? m(n, d[E]) : m(d[E], n) : D[E][g] = u ? m(n, 0) : m(0, n)
                        }
                        return new e({
                            data: D,
                            size: [h, p],
                            datatype: o
                        })
                    }
                }),
                iU = tC("matAlgo13xDD", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return function(r, e, n) {
                        var i, u = r._data,
                            o = r._size,
                            a = r._datatype,
                            s = e._data,
                            f = e._size,
                            c = e._datatype,
                            l = [];
                        if (o.length !== f.length) throw new ex(o.length, f.length);
                        for (var h = 0; h < o.length; h++) {
                            if (o[h] !== f[h]) throw RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + f + ")");
                            l[h] = o[h]
                        }
                        var p = n;
                        "string" == typeof a && a === c && (i = a, p = t.find(n, [i, i]));
                        var m = l.length > 0 ? function r(t, e, n, i, u, o) {
                            var a = [];
                            if (e === n.length - 1)
                                for (var s = 0; s < i; s++) a[s] = t(u[s], o[s]);
                            else
                                for (var f = 0; f < i; f++) a[f] = r(t, e + 1, n, n[e + 1], u[f], o[f]);
                            return a
                        }(p, 0, l, l[0], u, s) : [];
                        return r.createDenseMatrix({
                            data: m,
                            size: l,
                            datatype: i
                        })
                    }
                }),
                iR = tC("matAlgo14xDs", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return function(r, e, n, i) {
                        var u, o = r._data,
                            a = r._size,
                            s = r._datatype,
                            f = n;
                        "string" == typeof s && (u = s, e = t.convert(e, u), f = t.find(n, [u, u]));
                        var c = a.length > 0 ? function r(t, e, n, i, u, o, a) {
                            var s = [];
                            if (e === n.length - 1)
                                for (var f = 0; f < i; f++) s[f] = a ? t(o, u[f]) : t(u[f], o);
                            else
                                for (var c = 0; c < i; c++) s[c] = r(t, e + 1, n, n[e + 1], u[c], o, a);
                            return s
                        }(f, 0, a, a[0], o, e, i) : [];
                        return r.createDenseMatrix({
                            data: c,
                            size: tw(a),
                            datatype: u
                        })
                    }
                });

            function iL(r, t) {
                if (tE(r.size(), t.size())) return [r, t];
                var e = eP(r.size(), t.size());
                return [r, t].map(r => tE(r.size(), e) ? r : r.create(eU(r.valueOf(), e), r.datatype()))
            }
            var iZ = tC("matrixAlgorithmSuite", ["typed", "matrix"], r => {
                    var {
                        typed: t,
                        matrix: e
                    } = r, n = iU({
                        typed: t
                    }), i = iR({
                        typed: t
                    });
                    return function(r) {
                        var u, o = r.elop,
                            a = r.SD || r.DS;
                        o ? (u = {
                            "DenseMatrix, DenseMatrix": (r, t) => n(...iL(r, t), o),
                            "Array, Array": (r, t) => n(...iL(e(r), e(t)), o).valueOf(),
                            "Array, DenseMatrix": (r, t) => n(...iL(e(r), t), o),
                            "DenseMatrix, Array": (r, t) => n(...iL(r, e(t)), o)
                        }, r.SS && (u["SparseMatrix, SparseMatrix"] = (t, e) => r.SS(...iL(t, e), o, !1)), r.DS && (u["DenseMatrix, SparseMatrix"] = (t, e) => r.DS(...iL(t, e), o, !1), u["Array, SparseMatrix"] = (t, n) => r.DS(...iL(e(t), n), o, !1)), a && (u["SparseMatrix, DenseMatrix"] = (r, t) => a(...iL(t, r), o, !0), u["SparseMatrix, Array"] = (r, t) => a(...iL(e(t), r), o, !0))) : (u = {
                            "DenseMatrix, DenseMatrix": t.referToSelf(r => (t, e) => n(...iL(t, e), r)),
                            "Array, Array": t.referToSelf(r => (t, i) => n(...iL(e(t), e(i)), r).valueOf()),
                            "Array, DenseMatrix": t.referToSelf(r => (t, i) => n(...iL(e(t), i), r)),
                            "DenseMatrix, Array": t.referToSelf(r => (t, i) => n(...iL(t, e(i)), r))
                        }, r.SS && (u["SparseMatrix, SparseMatrix"] = t.referToSelf(t => (e, n) => r.SS(...iL(e, n), t, !1))), r.DS && (u["DenseMatrix, SparseMatrix"] = t.referToSelf(t => (e, n) => r.DS(...iL(e, n), t, !1)), u["Array, SparseMatrix"] = t.referToSelf(t => (n, i) => r.DS(...iL(e(n), i), t, !1))), a && (u["SparseMatrix, DenseMatrix"] = t.referToSelf(r => (t, e) => a(...iL(e, t), r, !0)), u["SparseMatrix, Array"] = t.referToSelf(r => (t, n) => a(...iL(e(n), t), r, !0))));
                        var s = r.scalar || "any";
                        (r.Ds || r.Ss) && (o ? (u["DenseMatrix," + s] = (r, t) => i(r, t, o, !1), u[s + ", DenseMatrix"] = (r, t) => i(t, r, o, !0), u["Array," + s] = (r, t) => i(e(r), t, o, !1).valueOf(), u[s + ", Array"] = (r, t) => i(e(t), r, o, !0).valueOf()) : (u["DenseMatrix," + s] = t.referToSelf(r => (t, e) => i(t, e, r, !1)), u[s + ", DenseMatrix"] = t.referToSelf(r => (t, e) => i(e, t, r, !0)), u["Array," + s] = t.referToSelf(r => (t, n) => i(e(t), n, r, !1).valueOf()), u[s + ", Array"] = t.referToSelf(r => (t, n) => i(e(n), t, r, !0).valueOf())));
                        var f = void 0 !== r.sS ? r.sS : r.Ss;
                        return o ? (r.Ss && (u["SparseMatrix," + s] = (t, e) => r.Ss(t, e, o, !1)), f && (u[s + ", SparseMatrix"] = (r, t) => f(t, r, o, !0))) : (r.Ss && (u["SparseMatrix," + s] = t.referToSelf(t => (e, n) => r.Ss(e, n, t, !1))), f && (u[s + ", SparseMatrix"] = t.referToSelf(r => (t, e) => f(e, t, r, !0)))), o && o.signatures && tA(u, o.signatures), u
                    }
                }),
                iV = "dotDivide",
                iJ = (r => {
                    var {
                        typed: t,
                        matrix: e,
                        equalScalar: n,
                        divideScalar: i,
                        DenseMatrix: u,
                        concat: o
                    } = r, a = iI({
                        typed: t,
                        equalScalar: n
                    }), s = ij({
                        typed: t
                    }), f = ik({
                        typed: t,
                        DenseMatrix: u
                    }), c = iP({
                        typed: t,
                        equalScalar: n
                    }), l = iq({
                        typed: t,
                        DenseMatrix: u
                    }), h = iZ({
                        typed: t,
                        matrix: e,
                        concat: o
                    });
                    return t(iV, h({
                        elop: i,
                        SS: f,
                        DS: s,
                        SD: a,
                        Ss: c,
                        sS: l
                    }))
                }, "equal"),
                i$ = tC(iJ, ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        equalScalar: n,
                        DenseMatrix: i,
                        concat: u
                    } = r, o = ij({
                        typed: t
                    }), a = ik({
                        typed: t,
                        DenseMatrix: i
                    }), s = iq({
                        typed: t,
                        DenseMatrix: i
                    }), f = iZ({
                        typed: t,
                        matrix: e,
                        concat: u
                    });
                    return t(iJ, iH({
                        typed: t,
                        equalScalar: n
                    }), f({
                        elop: n,
                        SS: a,
                        DS: o,
                        Ss: s
                    }))
                }),
                iH = tC(iJ, ["typed", "equalScalar"], r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return t(iJ, {
                        "any, any": function(r, t) {
                            return null === r ? null === t : null === t ? null === r : void 0 === r ? void 0 === t : void 0 === t ? void 0 === r : e(r, t)
                        }
                    })
                }),
                iY = "identity",
                iW = tC(iY, ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        BigNumber: i,
                        DenseMatrix: u,
                        SparseMatrix: o
                    } = r;
                    return t(iY, {
                        "": function() {
                            return "Matrix" === e.matrix ? n([]) : []
                        },
                        string: function(r) {
                            return n(r)
                        },
                        "number | BigNumber": function(r) {
                            return s(r, r, "Matrix" === e.matrix ? "dense" : void 0)
                        },
                        "number | BigNumber, string": function(r, t) {
                            return s(r, r, t)
                        },
                        "number | BigNumber, number | BigNumber": function(r, t) {
                            return s(r, t, "Matrix" === e.matrix ? "dense" : void 0)
                        },
                        "number | BigNumber, number | BigNumber, string": function(r, t, e) {
                            return s(r, t, e)
                        },
                        Array: function(r) {
                            return a(r)
                        },
                        "Array, string": function(r, t) {
                            return a(r, t)
                        },
                        Matrix: function(r) {
                            return a(r.valueOf(), r.storage())
                        },
                        "Matrix, string": function(r, t) {
                            return a(r.valueOf(), t)
                        }
                    });

                    function a(r, t) {
                        switch (r.length) {
                            case 0:
                                return t ? n(t) : [];
                            case 1:
                                return s(r[0], r[0], t);
                            case 2:
                                return s(r[0], r[1], t);
                            default:
                                throw Error("Vector containing two values expected")
                        }
                    }

                    function s(r, t, e) {
                        var n = rJ(r) || rJ(t) ? i : null;
                        if (rJ(r) && (r = r.toNumber()), rJ(t) && (t = t.toNumber()), !tP(r) || r < 1 || !tP(t) || t < 1) throw Error("Parameters in function identity must be positive integers");
                        var a = n ? new i(1) : 1,
                            s = n ? new n(0) : 0,
                            f = [r, t];
                        if (e) {
                            if ("sparse" === e) return o.diagonal(f, a, 0, s);
                            if ("dense" === e) return u.diagonal(f, a, 0, s);
                            throw TypeError('Unknown matrix type "'.concat(e, '"'))
                        }
                        for (var c = eM([], f, s), l = r < t ? r : t, h = 0; h < l; h++) c[h][h] = a;
                        return c
                    }
                }),
                iX = "largerEq",
                iQ = tC(iX, ["typed", "config", "matrix", "DenseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        DenseMatrix: i,
                        concat: u
                    } = r, o = ij({
                        typed: t
                    }), a = ik({
                        typed: t,
                        DenseMatrix: i
                    }), s = iq({
                        typed: t,
                        DenseMatrix: i
                    }), f = iZ({
                        typed: t,
                        matrix: n,
                        concat: u
                    }), c = n_({
                        typed: t
                    });
                    return t(iX, iG({
                        typed: t,
                        config: e
                    }), {
                        "boolean, boolean": (r, t) => r >= t,
                        "BigNumber, BigNumber": function(r, t) {
                            return r.gte(t) || nC(r, t, e.relTol, e.absTol)
                        },
                        "bigint, bigint": function(r, t) {
                            return r >= t
                        },
                        "Fraction, Fraction": (r, t) => -1 !== r.compare(t),
                        "Complex, Complex": function() {
                            throw TypeError("No ordering relation is defined for complex numbers")
                        }
                    }, c, f({
                        SS: a,
                        DS: o,
                        Ss: s
                    }))
                }),
                iG = tC(iX, ["typed", "config"], r => {
                    var {
                        typed: t,
                        config: e
                    } = r;
                    return t(iX, {
                        "number, number": function(r, t) {
                            return r >= t || tG(r, t, e.relTol, e.absTol)
                        }
                    })
                }),
                iK = tC("matAlgo01xDSid", ["typed"], r => {
                    var {
                        typed: t
                    } = r;
                    return function(r, e, n, i) {
                        var u, o, a = r._data,
                            s = r._size,
                            f = r._datatype || r.getDataType(),
                            c = e._values,
                            l = e._index,
                            h = e._ptr,
                            p = e._size,
                            m = e._datatype || void 0 === e._data ? e._datatype : e.getDataType();
                        if (s.length !== p.length) throw new ex(s.length, p.length);
                        if (s[0] !== p[0] || s[1] !== p[1]) throw RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + p + ")");
                        if (!c) throw Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                        var D = s[0],
                            d = s[1],
                            v = "string" == typeof f && "mixed" !== f && f === m ? f : void 0,
                            g = v ? t.find(n, [v, v]) : n,
                            y = [];
                        for (u = 0; u < D; u++) y[u] = [];
                        var b = [],
                            x = [];
                        for (o = 0; o < d; o++) {
                            for (var w = o + 1, A = h[o], E = h[o + 1], F = A; F < E; F++) b[u = l[F]] = i ? g(c[F], a[u][o]) : g(a[u][o], c[F]), x[u] = w;
                            for (u = 0; u < D; u++) x[u] === w ? y[u][o] = b[u] : y[u][o] = a[u][o]
                        }
                        return r.createDenseMatrix({
                            data: y,
                            size: [D, d],
                            datatype: f === r._datatype && m === e._datatype ? v : void 0
                        })
                    }
                }),
                i0 = tC("matAlgo10xSids", ["typed", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        DenseMatrix: e
                    } = r;
                    return function(r, n, i, u) {
                        var o, a = r._values,
                            s = r._index,
                            f = r._ptr,
                            c = r._size,
                            l = r._datatype;
                        if (!a) throw Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                        var h = c[0],
                            p = c[1],
                            m = i;
                        "string" == typeof l && (o = l, n = t.convert(n, o), m = t.find(i, [o, o]));
                        for (var D = [], d = [], v = [], g = 0; g < p; g++) {
                            for (var y = g + 1, b = f[g], x = f[g + 1], w = b; w < x; w++) {
                                var A = s[w];
                                d[A] = a[w], v[A] = y
                            }
                            for (var E = 0; E < h; E++) 0 === g && (D[E] = []), v[E] === y ? D[E][g] = u ? m(n, d[E]) : m(d[E], n) : D[E][g] = n
                        }
                        return new e({
                            data: D,
                            size: [h, p],
                            datatype: o
                        })
                    }
                });

            function i1(r) {
                var {
                    DenseMatrix: t
                } = r;
                return function(r, e, n) {
                    var i = r.size();
                    if (2 !== i.length) throw RangeError("Matrix must be two dimensional (size: " + ev(i) + ")");
                    var u = i[0];
                    if (u !== i[1]) throw RangeError("Matrix must be square (size: " + ev(i) + ")");
                    var o = [];
                    if (rG(e)) {
                        var a = e.size(),
                            s = e._data;
                        if (1 === a.length) {
                            if (a[0] !== u) throw RangeError("Dimension mismatch. Matrix columns must match vector length.");
                            for (var f = 0; f < u; f++) o[f] = [s[f]];
                            return new t({
                                data: o,
                                size: [u, 1],
                                datatype: e._datatype
                            })
                        }
                        if (2 === a.length) {
                            if (a[0] !== u || 1 !== a[1]) throw RangeError("Dimension mismatch. Matrix columns must match vector length.");
                            if (r0(e)) {
                                if (n) {
                                    o = [];
                                    for (var c = 0; c < u; c++) o[c] = [s[c][0]];
                                    return new t({
                                        data: o,
                                        size: [u, 1],
                                        datatype: e._datatype
                                    })
                                }
                                return e
                            }
                            if (r1(e)) {
                                for (var l = 0; l < u; l++) o[l] = [0];
                                for (var h = e._values, p = e._index, m = e._ptr, D = m[1], d = m[0]; d < D; d++) o[p[d]][0] = h[d];
                                return new t({
                                    data: o,
                                    size: [u, 1],
                                    datatype: e._datatype
                                })
                            }
                        }
                        throw RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")
                    }
                    if (rQ(e)) {
                        var v = eA(e);
                        if (1 === v.length) {
                            if (v[0] !== u) throw RangeError("Dimension mismatch. Matrix columns must match vector length.");
                            for (var g = 0; g < u; g++) o[g] = [e[g]];
                            return new t({
                                data: o,
                                size: [u, 1]
                            })
                        }
                        if (2 === v.length) {
                            if (v[0] !== u || 1 !== v[1]) throw RangeError("Dimension mismatch. Matrix columns must match vector length.");
                            for (var y = 0; y < u; y++) o[y] = [e[y][0]];
                            return new t({
                                data: o,
                                size: [u, 1]
                            })
                        }
                        throw RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")
                    }
                }
            }
            r => {
                var {
                    typed: t,
                    equalScalar: e
                } = r;
                return function(r, n, i) {
                    var u, o, a, s, f, c = r._values,
                        l = r._index,
                        h = r._ptr,
                        p = r._size,
                        m = r._datatype || void 0 === r._data ? r._datatype : r.getDataType(),
                        D = n._values,
                        d = n._index,
                        v = n._ptr,
                        g = n._size,
                        y = n._datatype || void 0 === n._data ? n._datatype : n.getDataType();
                    if (p.length !== g.length) throw new ex(p.length, g.length);
                    if (p[0] !== g[0] || p[1] !== g[1]) throw RangeError("Dimension mismatch. Matrix A (" + p + ") must match Matrix B (" + g + ")");
                    if (!c || !D) throw Error("Cannot perform operation on Pattern Sparse Matrices");
                    var b = p[0],
                        x = p[1],
                        w = e,
                        A = 0,
                        E = i;
                    "string" == typeof m && m === y && "mixed" !== m && (u = m, w = t.find(e, [u, u]), A = t.convert(0, u), E = t.find(i, [u, u]));
                    for (var F = [], C = [], _ = [], M = [], N = [], B = 0; B < x; B++) {
                        _[B] = C.length;
                        var S = B + 1;
                        for (a = h[B], s = h[B + 1], o = a; o < s; o++) N[f = l[o]] = S, M[f] = c[o], C.push(f);
                        for (a = v[B], s = v[B + 1], o = a; o < s; o++) N[f = d[o]] === S && (M[f] = E(M[f], D[o]));
                        for (o = _[B]; o < C.length;) {
                            var T = M[f = C[o]];
                            w(T, A) ? C.splice(o, 1) : (F.push(T), o++)
                        }
                    }
                    return _[x] = C.length, r.createSparseMatrix({
                        values: F,
                        index: C,
                        ptr: _,
                        size: [b, x],
                        datatype: m === r._datatype && y === n._datatype ? u : void 0
                    })
                }
            }, r => {
                var {
                    typed: t,
                    matrix: e
                } = r;
                return {
                    "Array, number": t.referTo("DenseMatrix, number", r => (t, n) => r(e(t), n).valueOf()),
                    "Array, BigNumber": t.referTo("DenseMatrix, BigNumber", r => (t, n) => r(e(t), n).valueOf()),
                    "number, Array": t.referTo("number, DenseMatrix", r => (t, n) => r(t, e(n)).valueOf()),
                    "BigNumber, Array": t.referTo("BigNumber, DenseMatrix", r => (t, n) => r(t, e(n)).valueOf())
                }
            };
            var i2 = "lsolve",
                i8 = tC(i2, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        divideScalar: n,
                        multiplyScalar: i,
                        subtractScalar: u,
                        equalScalar: o,
                        DenseMatrix: a
                    } = r, s = i1({
                        DenseMatrix: a
                    });
                    return t(i2, {
                        "SparseMatrix, Array | Matrix": function(r, t) {
                            return function(r, t) {
                                for (var e = (t = s(r, t, !0))._data, f = r._size[0], c = r._size[1], l = r._values, h = r._index, p = r._ptr, m = [], D = 0; D < c; D++) {
                                    var d = e[D][0] || 0;
                                    if (o(d, 0)) m[D] = [0];
                                    else {
                                        for (var v = 0, g = [], y = [], b = p[D], x = p[D + 1], w = b; w < x; w++) {
                                            var A = h[w];
                                            A === D ? v = l[w] : A > D && (g.push(l[w]), y.push(A))
                                        }
                                        if (o(v, 0)) throw Error("Linear system cannot be solved since matrix is singular");
                                        for (var E = n(d, v), F = 0, C = y.length; F < C; F++) {
                                            var _ = y[F];
                                            e[_] = [u(e[_][0] || 0, i(E, g[F]))]
                                        }
                                        m[D] = [E]
                                    }
                                }
                                return new a({
                                    data: m,
                                    size: [f, 1]
                                })
                            }(r, t)
                        },
                        "DenseMatrix, Array | Matrix": function(r, t) {
                            return f(r, t)
                        },
                        "Array, Array | Matrix": function(r, t) {
                            return f(e(r), t).valueOf()
                        }
                    });

                    function f(r, t) {
                        for (var e = (t = s(r, t, !0))._data, f = r._size[0], c = r._size[1], l = [], h = r._data, p = 0; p < c; p++) {
                            var m = e[p][0] || 0,
                                D = void 0;
                            if (o(m, 0)) D = 0;
                            else {
                                var d = h[p][p];
                                if (o(d, 0)) throw Error("Linear system cannot be solved since matrix is singular");
                                D = n(m, d);
                                for (var v = p + 1; v < f; v++) e[v] = [u(e[v][0] || 0, i(D, h[v][p]))]
                            }
                            l[p] = [D]
                        }
                        return new a({
                            data: l,
                            size: [f, 1]
                        })
                    }
                }),
                i3 = "matrixFromColumns",
                i9 = tC(i3, ["typed", "matrix", "flatten", "size"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        flatten: n,
                        size: i
                    } = r;
                    return t(i3, {
                        "...Array": function(r) {
                            return u(r)
                        },
                        "...Matrix": function(r) {
                            return e(u(r.map(r => r.toArray())))
                        }
                    });

                    function u(r) {
                        if (0 === r.length) throw TypeError("At least one column is needed to construct a matrix.");
                        for (var t = o(r[0]), e = [], i = 0; i < t; i++) e[i] = [];
                        for (var u of r) {
                            var a = o(u);
                            if (a !== t) throw TypeError("The vectors had different length: " + (0 | t) + " ≠ " + (0 | a));
                            for (var s = n(u), f = 0; f < t; f++) e[f].push(s[f])
                        }
                        return e
                    }

                    function o(r) {
                        var t = i(r);
                        if (1 === t.length) return t[0];
                        if (2 === t.length) {
                            if (1 === t[0]) return t[1];
                            if (1 === t[1]) return t[0];
                            throw TypeError("At least one of the arguments is not a vector.")
                        }
                        throw TypeError("Only one- or two-dimensional vectors are supported.")
                    }
                }),
                i5 = (r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return function(r, n, i) {
                        var u, o = r._values,
                            a = r._size,
                            s = r._datatype || void 0 === r._data ? r._datatype : r.getDataType(),
                            f = n._values,
                            c = n._size,
                            l = n._datatype || void 0 === n._data ? n._datatype : n.getDataType();
                        if (a.length !== c.length) throw new ex(a.length, c.length);
                        if (a[0] !== c[0] || a[1] !== c[1]) throw RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + c + ")");
                        var h = a[0],
                            p = a[1],
                            m = e,
                            D = 0,
                            d = i;
                        "string" == typeof s && s === l && "mixed" !== s && (u = s, m = t.find(e, [u, u]), D = t.convert(0, u), d = t.find(i, [u, u]));
                        for (var v = o && f ? [] : void 0, g = [], y = [], b = v ? [] : void 0, x = [], w = [], A = 0; A < p; A++) {
                            y[A] = g.length;
                            var E = A + 1;
                            if (e8(r, A, x, b, w, E, g, d), e8(n, A, x, b, w, E, g, d), b)
                                for (var F = y[A]; F < g.length;) {
                                    var C = g[F];
                                    if (w[C] === E) {
                                        var _ = b[C];
                                        m(_, D) ? g.splice(F, 1) : (v.push(_), F++)
                                    } else g.splice(F, 1)
                                } else
                                    for (var M = y[A]; M < g.length;) w[g[M]] !== E ? g.splice(M, 1) : M++
                        }
                        return y[p] = g.length, r.createSparseMatrix({
                            values: v,
                            index: g,
                            ptr: y,
                            size: [h, p],
                            datatype: s === r._datatype && l === n._datatype ? u : void 0
                        })
                    }
                }, tC("qr", ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        zeros: i,
                        identity: u,
                        isZero: o,
                        equal: a,
                        sign: s,
                        sqrt: f,
                        conj: c,
                        unaryMinus: l,
                        addScalar: h,
                        divideScalar: p,
                        multiplyScalar: m,
                        subtractScalar: D,
                        complex: d
                    } = r;
                    return n(t("qr", {
                        DenseMatrix: function(r) {
                            return g(r)
                        },
                        SparseMatrix: function(r) {
                            return function(r) {
                                throw Error("qr not implemented for sparse matrices yet")
                            }(0)
                        },
                        Array: function(r) {
                            var t = g(e(r));
                            return {
                                Q: t.Q.valueOf(),
                                R: t.R.valueOf()
                            }
                        }
                    }), {
                        _denseQRimpl: v
                    });

                    function v(r) {
                        var t, e, n, d = r._size[0],
                            v = r._size[1],
                            g = u([d], "dense"),
                            y = g._data,
                            b = r.clone(),
                            x = b._data,
                            w = i([d], "");
                        for (n = 0; n < Math.min(v, d); ++n) {
                            var A = x[n][n],
                                E = l(a(A, 0) ? 1 : s(A)),
                                F = c(E),
                                C = 0;
                            for (t = n; t < d; t++) C = h(C, m(x[t][n], c(x[t][n])));
                            var _ = m(E, f(C));
                            if (!o(_)) {
                                var M = D(A, _);
                                for (w[n] = 1, t = n + 1; t < d; t++) w[t] = p(x[t][n], M);
                                var N = l(c(p(M, _))),
                                    B = void 0;
                                for (e = n; e < v; e++) {
                                    for (B = 0, t = n; t < d; t++) B = h(B, m(c(w[t]), x[t][e]));
                                    for (B = m(B, N), t = n; t < d; t++) x[t][e] = m(D(x[t][e], m(w[t], B)), F)
                                }
                                for (t = 0; t < d; t++) {
                                    for (B = 0, e = n; e < d; e++) B = h(B, m(y[t][e], w[e]));
                                    for (B = m(B, N), e = n; e < d; ++e) y[t][e] = p(D(y[t][e], m(B, c(w[e]))), F)
                                }
                            }
                        }
                        return {
                            Q: g,
                            R: b,
                            toString: function() {
                                return "Q: " + this.Q.toString() + "\nR: " + this.R.toString()
                            }
                        }
                    }

                    function g(r) {
                        var t = v(r),
                            e = t.R._data;
                        if (r._data.length > 0)
                            for (var n = "Complex" === e[0][0].type ? d(0) : 0, i = 0; i < e.length; ++i)
                                for (var u = 0; u < i && u < (e[0] || []).length; ++u) e[i][u] = n;
                        return t
                    }
                }));

            function i7(r, t, e, n) {
                if (!(this instanceof i7)) throw SyntaxError("Constructor must be called with the new operator");
                this.fn = r, this.count = t, this.min = e, this.max = n, this.message = "Wrong number of arguments in function " + r + " (" + t + " provided, " + e + (null != n ? "-" + n : "") + " expected)", this.stack = Error().stack
            }
            i7.prototype = Error(), i7.prototype.constructor = Error, i7.prototype.name = "ArgumentsError", i7.prototype.isArgumentsError = !0;
            var i4 = "Number of decimals in function round must be an integer",
                i6 = "round",
                ur = tC(i6, ["typed", "config", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        equalScalar: i,
                        zeros: u,
                        BigNumber: o,
                        DenseMatrix: a
                    } = r, s = iP({
                        typed: t,
                        equalScalar: i
                    }), f = iq({
                        typed: t,
                        DenseMatrix: a
                    }), c = iR({
                        typed: t
                    });

                    function l(r) {
                        return Math.abs(tH(r).exponent)
                    }
                    return t(i6, {
                        number: function(r) {
                            var t = na(r, l(e.relTol));
                            return na(tG(r, t, e.relTol, e.absTol) ? t : r)
                        },
                        "number, number": function(r, t) {
                            var n = l(e.relTol);
                            if (t >= n) return na(r, t);
                            var i = na(r, n);
                            return na(tG(r, i, e.relTol, e.absTol) ? i : r, t)
                        },
                        "number, BigNumber": function(r, t) {
                            if (!t.isInteger()) throw TypeError(i4);
                            return new o(r).toDecimalPlaces(t.toNumber())
                        },
                        Complex: function(r) {
                            return r.round()
                        },
                        "Complex, number": function(r, t) {
                            if (t % 1) throw TypeError(i4);
                            return r.round(t)
                        },
                        "Complex, BigNumber": function(r, t) {
                            if (!t.isInteger()) throw TypeError(i4);
                            var e = t.toNumber();
                            return r.round(e)
                        },
                        BigNumber: function(r) {
                            var t = new o(r).toDecimalPlaces(l(e.relTol));
                            return (nC(r, t, e.relTol, e.absTol) ? t : r).toDecimalPlaces(0)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            if (!t.isInteger()) throw TypeError(i4);
                            var n = l(e.relTol);
                            if (t >= n) return r.toDecimalPlaces(t.toNumber());
                            var i = r.toDecimalPlaces(n);
                            return (nC(r, i, e.relTol, e.absTol) ? i : r).toDecimalPlaces(t.toNumber())
                        },
                        Fraction: function(r) {
                            return r.round()
                        },
                        "Fraction, number": function(r, t) {
                            if (t % 1) throw TypeError(i4);
                            return r.round(t)
                        },
                        "Fraction, BigNumber": function(r, t) {
                            if (!t.isInteger()) throw TypeError(i4);
                            return r.round(t.toNumber())
                        },
                        "Unit, number, Unit": t.referToSelf(r => function(t, e, n) {
                            var i = t.toNumeric(n);
                            return n.multiply(r(i, e))
                        }),
                        "Unit, BigNumber, Unit": t.referToSelf(r => (t, e, n) => r(t, e.toNumber(), n)),
                        "Unit, Unit": t.referToSelf(r => (t, e) => r(t, 0, e)),
                        "Array | Matrix, number, Unit": t.referToSelf(r => (t, e, n) => e0(t, t => r(t, e, n), !0)),
                        "Array | Matrix, BigNumber, Unit": t.referToSelf(r => (t, e, n) => r(t, e.toNumber(), n)),
                        "Array | Matrix, Unit": t.referToSelf(r => (t, e) => r(t, 0, e)),
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0)),
                        "SparseMatrix, number | BigNumber": t.referToSelf(r => (t, e) => s(t, e, r, !1)),
                        "DenseMatrix, number | BigNumber": t.referToSelf(r => (t, e) => c(t, e, r, !1)),
                        "Array, number | BigNumber": t.referToSelf(r => (t, e) => c(n(t), e, r, !1).valueOf()),
                        "number | Complex | BigNumber | Fraction, SparseMatrix": t.referToSelf(r => (t, e) => i(t, 0) ? u(e.size(), e.storage()) : f(e, t, r, !0)),
                        "number | Complex | BigNumber | Fraction, DenseMatrix": t.referToSelf(r => (t, e) => i(t, 0) ? u(e.size(), e.storage()) : c(e, t, r, !0)),
                        "number | Complex | BigNumber | Fraction, Array": t.referToSelf(r => (t, e) => c(n(e), t, r, !0).valueOf())
                    })
                }),
                ut = "smaller",
                ue = tC(ut, ["typed", "config", "matrix", "DenseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        DenseMatrix: i,
                        concat: u
                    } = r, o = ij({
                        typed: t
                    }), a = ik({
                        typed: t,
                        DenseMatrix: i
                    }), s = iq({
                        typed: t,
                        DenseMatrix: i
                    }), f = iZ({
                        typed: t,
                        matrix: n,
                        concat: u
                    }), c = n_({
                        typed: t
                    });
                    return t(ut, un({
                        typed: t,
                        config: e
                    }), {
                        "boolean, boolean": (r, t) => r < t,
                        "BigNumber, BigNumber": function(r, t) {
                            return r.lt(t) && !nC(r, t, e.relTol, e.absTol)
                        },
                        "bigint, bigint": (r, t) => r < t,
                        "Fraction, Fraction": (r, t) => -1 === r.compare(t),
                        "Complex, Complex": function(r, t) {
                            throw TypeError("No ordering relation is defined for complex numbers")
                        }
                    }, c, f({
                        SS: a,
                        DS: o,
                        Ss: s
                    }))
                }),
                un = tC(ut, ["typed", "config"], r => {
                    var {
                        typed: t,
                        config: e
                    } = r;
                    return t(ut, {
                        "number, number": function(r, t) {
                            return r < t && !tG(r, t, e.relTol, e.absTol)
                        }
                    })
                }),
                ui = tC("matAlgo05xSfSf", ["typed", "equalScalar"], r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return function(r, n, i) {
                        var u, o, a, s, f, c = r._values,
                            l = r._index,
                            h = r._ptr,
                            p = r._size,
                            m = r._datatype || void 0 === r._data ? r._datatype : r.getDataType(),
                            D = n._values,
                            d = n._index,
                            v = n._ptr,
                            g = n._size,
                            y = n._datatype || void 0 === n._data ? n._datatype : n.getDataType();
                        if (p.length !== g.length) throw new ex(p.length, g.length);
                        if (p[0] !== g[0] || p[1] !== g[1]) throw RangeError("Dimension mismatch. Matrix A (" + p + ") must match Matrix B (" + g + ")");
                        var b = p[0],
                            x = p[1],
                            w = e,
                            A = 0,
                            E = i;
                        "string" == typeof m && m === y && "mixed" !== m && (u = m, w = t.find(e, [u, u]), A = t.convert(0, u), E = t.find(i, [u, u]));
                        var F = c && D ? [] : void 0,
                            C = [],
                            _ = [],
                            M = F ? [] : void 0,
                            N = F ? [] : void 0,
                            B = [],
                            S = [];
                        for (a = 0; a < x; a++) {
                            _[a] = C.length;
                            var T = a + 1;
                            for (s = h[a], f = h[a + 1]; s < f; s++) o = l[s], C.push(o), B[o] = T, M && (M[o] = c[s]);
                            for (s = v[a], f = v[a + 1]; s < f; s++) B[o = d[s]] !== T && C.push(o), S[o] = T, N && (N[o] = D[s]);
                            if (F)
                                for (s = _[a]; s < C.length;) {
                                    var z = B[o = C[s]],
                                        O = S[o];
                                    if (z === T || O === T) {
                                        var I = E(z === T ? M[o] : A, O === T ? N[o] : A);
                                        w(I, A) ? C.splice(s, 1) : (F.push(I), s++)
                                    }
                                }
                        }
                        return _[x] = C.length, r.createSparseMatrix({
                            values: F,
                            index: C,
                            ptr: _,
                            size: [b, x],
                            datatype: m === r._datatype && y === n._datatype ? u : void 0
                        })
                    }
                }),
                uu = "subtract",
                uo = tC(uu, ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        equalScalar: n,
                        subtractScalar: i,
                        unaryMinus: u,
                        DenseMatrix: o,
                        concat: a
                    } = r, s = iK({
                        typed: t
                    }), f = ij({
                        typed: t
                    }), c = ui({
                        typed: t,
                        equalScalar: n
                    }), l = i0({
                        typed: t,
                        DenseMatrix: o
                    }), h = iq({
                        typed: t,
                        DenseMatrix: o
                    }), p = iZ({
                        typed: t,
                        matrix: e,
                        concat: a
                    });
                    return t(uu, {
                        "any, any": i
                    }, p({
                        elop: i,
                        SS: c,
                        DS: s,
                        SD: f,
                        Ss: h,
                        sS: l
                    }))
                }),
                ua = (r => {
                    var {
                        typed: t,
                        config: e,
                        numeric: n
                    } = r;
                    return t("unaryPlus", {
                        number: nt,
                        Complex: function(r) {
                            return r
                        },
                        BigNumber: function(r) {
                            return r
                        },
                        bigint: function(r) {
                            return r
                        },
                        Fraction: function(r) {
                            return r
                        },
                        Unit: function(r) {
                            return r.clone()
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0)),
                        boolean: function(r) {
                            return n(r ? 1 : 0, e.number)
                        },
                        string: function(r) {
                            return n(r, tq(r, e))
                        }
                    })
                }, "usolve"),
                us = tC(ua, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        divideScalar: n,
                        multiplyScalar: i,
                        subtractScalar: u,
                        equalScalar: o,
                        DenseMatrix: a
                    } = r, s = i1({
                        DenseMatrix: a
                    });
                    return t(ua, {
                        "SparseMatrix, Array | Matrix": function(r, t) {
                            return function(r, t) {
                                for (var e = (t = s(r, t, !0))._data, f = r._size[0], c = r._size[1], l = r._values, h = r._index, p = r._ptr, m = [], D = c - 1; D >= 0; D--) {
                                    var d = e[D][0] || 0;
                                    if (o(d, 0)) m[D] = [0];
                                    else {
                                        for (var v = 0, g = [], y = [], b = p[D], x = p[D + 1], w = x - 1; w >= b; w--) {
                                            var A = h[w];
                                            A === D ? v = l[w] : A < D && (g.push(l[w]), y.push(A))
                                        }
                                        if (o(v, 0)) throw Error("Linear system cannot be solved since matrix is singular");
                                        for (var E = n(d, v), F = 0, C = y.length; F < C; F++) {
                                            var _ = y[F];
                                            e[_] = [u(e[_][0], i(E, g[F]))]
                                        }
                                        m[D] = [E]
                                    }
                                }
                                return new a({
                                    data: m,
                                    size: [f, 1]
                                })
                            }(r, t)
                        },
                        "DenseMatrix, Array | Matrix": function(r, t) {
                            return f(r, t)
                        },
                        "Array, Array | Matrix": function(r, t) {
                            return f(e(r), t).valueOf()
                        }
                    });

                    function f(r, t) {
                        for (var e = (t = s(r, t, !0))._data, f = r._size[0], c = r._size[1], l = [], h = r._data, p = c - 1; p >= 0; p--) {
                            var m = e[p][0] || 0,
                                D = void 0;
                            if (o(m, 0)) D = 0;
                            else {
                                var d = h[p][p];
                                if (o(d, 0)) throw Error("Linear system cannot be solved since matrix is singular");
                                D = n(m, d);
                                for (var v = p - 1; v >= 0; v--) e[v] = [u(e[v][0] || 0, i(D, h[v][p]))]
                            }
                            l[p] = [D]
                        }
                        return new a({
                            data: l,
                            size: [f, 1]
                        })
                    }
                }),
                uf = tC("matAlgo04xSidSid", ["typed", "equalScalar"], r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return function(r, n, i) {
                        var u, o, a, s, f, c, l = r._values,
                            h = r._index,
                            p = r._ptr,
                            m = r._size,
                            D = r._datatype || void 0 === r._data ? r._datatype : r.getDataType(),
                            d = n._values,
                            v = n._index,
                            g = n._ptr,
                            y = n._size,
                            b = n._datatype || void 0 === n._data ? n._datatype : n.getDataType();
                        if (m.length !== y.length) throw new ex(m.length, y.length);
                        if (m[0] !== y[0] || m[1] !== y[1]) throw RangeError("Dimension mismatch. Matrix A (" + m + ") must match Matrix B (" + y + ")");
                        var x = m[0],
                            w = m[1],
                            A = e,
                            E = 0,
                            F = i;
                        "string" == typeof D && D === b && "mixed" !== D && (u = D, A = t.find(e, [u, u]), E = t.convert(0, u), F = t.find(i, [u, u]));
                        var C = l && d ? [] : void 0,
                            _ = [],
                            M = [],
                            N = l && d ? [] : void 0,
                            B = l && d ? [] : void 0,
                            S = [],
                            T = [];
                        for (a = 0; a < w; a++) {
                            M[a] = _.length;
                            var z = a + 1;
                            for (f = p[a], c = p[a + 1], s = f; s < c; s++) o = h[s], _.push(o), S[o] = z, N && (N[o] = l[s]);
                            for (f = g[a], c = g[a + 1], s = f; s < c; s++)
                                if (S[o = v[s]] === z) {
                                    if (N) {
                                        var O = F(N[o], d[s]);
                                        A(O, E) ? S[o] = null : N[o] = O
                                    }
                                } else _.push(o), T[o] = z, B && (B[o] = d[s]);
                            if (N && B)
                                for (s = M[a]; s < _.length;) S[o = _[s]] === z ? (C[s] = N[o], s++) : T[o] === z ? (C[s] = B[o], s++) : _.splice(s, 1)
                        }
                        return M[w] = _.length, r.createSparseMatrix({
                            values: C,
                            index: _,
                            ptr: M,
                            size: [x, w],
                            datatype: D === r._datatype && b === n._datatype ? u : void 0
                        })
                    }
                }),
                uc = tC("add", ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        addScalar: n,
                        equalScalar: i,
                        DenseMatrix: u,
                        SparseMatrix: o,
                        concat: a
                    } = r, s = iK({
                        typed: t
                    }), f = uf({
                        typed: t,
                        equalScalar: i
                    }), c = i0({
                        typed: t,
                        DenseMatrix: u
                    }), l = iZ({
                        typed: t,
                        matrix: e,
                        concat: a
                    });
                    return t("add", {
                        "any, any": n,
                        "any, any, ...any": t.referToSelf(r => (t, e, n) => {
                            for (var i = r(t, e), u = 0; u < n.length; u++) i = r(i, n[u]);
                            return i
                        })
                    }, l({
                        elop: n,
                        DS: s,
                        SS: f,
                        Ss: c
                    }))
                }),
                ul = (r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return function(r, n, i) {
                        var u, o, a, s, f, c, l = r._values,
                            h = r._index,
                            p = r._ptr,
                            m = r._size,
                            D = r._datatype || void 0 === r._data ? r._datatype : r.getDataType(),
                            d = n._values,
                            v = n._index,
                            g = n._ptr,
                            y = n._size,
                            b = n._datatype || void 0 === n._data ? n._datatype : n.getDataType();
                        if (m.length !== y.length) throw new ex(m.length, y.length);
                        if (m[0] !== y[0] || m[1] !== y[1]) throw RangeError("Dimension mismatch. Matrix A (" + m + ") must match Matrix B (" + y + ")");
                        var x = m[0],
                            w = m[1],
                            A = e,
                            E = 0,
                            F = i;
                        "string" == typeof D && D === b && "mixed" !== D && (u = D, A = t.find(e, [u, u]), E = t.convert(0, u), F = t.find(i, [u, u]));
                        var C = l && d ? [] : void 0,
                            _ = [],
                            M = [],
                            N = C ? [] : void 0,
                            B = [];
                        for (a = 0; a < w; a++) {
                            M[a] = _.length;
                            var S = a + 1;
                            if (N)
                                for (f = g[a], c = g[a + 1], s = f; s < c; s++) B[o = v[s]] = S, N[o] = d[s];
                            for (f = p[a], c = p[a + 1], s = f; s < c; s++)
                                if (o = h[s], N) {
                                    var T = B[o] === S ? N[o] : E,
                                        z = F(l[s], T);
                                    A(z, E) || (_.push(o), C.push(z))
                                } else _.push(o)
                        }
                        return M[w] = _.length, r.createSparseMatrix({
                            values: C,
                            index: _,
                            ptr: M,
                            size: [x, w],
                            datatype: D === r._datatype && b === n._datatype ? u : void 0
                        })
                    }
                }, "compare"),
                uh = tC(ul, ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        config: e,
                        equalScalar: n,
                        matrix: i,
                        BigNumber: u,
                        Fraction: o,
                        DenseMatrix: a,
                        concat: s
                    } = r, f = ij({
                        typed: t
                    }), c = ui({
                        typed: t,
                        equalScalar: n
                    }), l = iq({
                        typed: t,
                        DenseMatrix: a
                    }), h = iZ({
                        typed: t,
                        matrix: i,
                        concat: s
                    }), p = n_({
                        typed: t
                    });
                    return t(ul, up({
                        typed: t,
                        config: e
                    }), {
                        "boolean, boolean": function(r, t) {
                            return r === t ? 0 : r > t ? 1 : -1
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return new u(nC(r, t, e.relTol, e.absTol) ? 0 : r.cmp(t))
                        },
                        "bigint, bigint": function(r, t) {
                            return r === t ? 0 n : r > t ? 1 n : -1 n
                        },
                        "Fraction, Fraction": function(r, t) {
                            return new o(r.compare(t))
                        },
                        "Complex, Complex": function() {
                            throw TypeError("No ordering relation is defined for complex numbers")
                        }
                    }, p, h({
                        SS: c,
                        DS: f,
                        Ss: l
                    }))
                }),
                up = tC(ul, ["typed", "config"], r => {
                    var {
                        typed: t,
                        config: e
                    } = r;
                    return t(ul, {
                        "number, number": function(r, t) {
                            return tG(r, t, e.relTol, e.absTol) ? 0 : r > t ? 1 : -1
                        }
                    })
                });
            eb.signature = "any, any", r => {
                var {
                    typed: t,
                    matrix: e,
                    concat: n
                } = r, i = iZ({
                    typed: t,
                    matrix: e,
                    concat: n
                });
                return t("compareText", eb, i({
                    elop: eb,
                    Ds: !0
                }))
            };
            var um = tC("dot", ["typed", "addScalar", "multiplyScalar", "conj", "size"], r => {
                    var {
                        typed: t,
                        addScalar: e,
                        multiplyScalar: n,
                        conj: i,
                        size: u
                    } = r;
                    return t("dot", {
                        "Array | DenseMatrix, Array | DenseMatrix": function(r, u) {
                            var s = o(r, u),
                                f = rG(r) ? r._data : r,
                                c = rG(r) ? r._datatype || r.getDataType() : void 0,
                                l = rG(u) ? u._data : u,
                                h = rG(u) ? u._datatype || u.getDataType() : void 0,
                                p = 2 === a(r).length,
                                m = 2 === a(u).length,
                                D = e,
                                d = n;
                            if (c && h && c === h && "string" == typeof c && "mixed" !== c && (D = t.find(e, [c, c]), d = t.find(n, [c, c])), !p && !m) {
                                for (var v = d(i(f[0]), l[0]), g = 1; g < s; g++) v = D(v, d(i(f[g]), l[g]));
                                return v
                            }
                            if (!p && m) {
                                for (var y = d(i(f[0]), l[0][0]), b = 1; b < s; b++) y = D(y, d(i(f[b]), l[b][0]));
                                return y
                            }
                            if (p && !m) {
                                for (var x = d(i(f[0][0]), l[0]), w = 1; w < s; w++) x = D(x, d(i(f[w][0]), l[w]));
                                return x
                            }
                            if (p && m) {
                                for (var A = d(i(f[0][0]), l[0][0]), E = 1; E < s; E++) A = D(A, d(i(f[E][0]), l[E][0]));
                                return A
                            }
                        },
                        "SparseMatrix, SparseMatrix": function(r, t) {
                            o(r, t);
                            for (var i = r._index, u = r._values, a = t._index, s = t._values, f = 0, c = 0, l = 0; c < i.length && l < a.length;) {
                                var h = i[c],
                                    p = a[l];
                                if (h < p) {
                                    c++;
                                    continue
                                }
                                if (h > p) {
                                    l++;
                                    continue
                                }
                                h === p && (f = e(f, n(u[c], s[l])), c++, l++)
                            }
                            return f
                        }
                    });

                    function o(r, t) {
                        var e, n, i = a(r),
                            u = a(t);
                        if (1 === i.length) e = i[0];
                        else if (2 === i.length && 1 === i[1]) e = i[0];
                        else throw RangeError("Expected a column vector, instead got a matrix of size (" + i.join(", ") + ")");
                        if (1 === u.length) n = u[0];
                        else if (2 === u.length && 1 === u[1]) n = u[0];
                        else throw RangeError("Expected a column vector, instead got a matrix of size (" + u.join(", ") + ")");
                        if (e !== n) throw RangeError("Vectors must have equal length (" + e + " != " + n + ")");
                        if (0 === e) throw RangeError("Cannot calculate the dot product of empty vectors");
                        return e
                    }

                    function a(r) {
                        return rG(r) ? r.size() : u(r)
                    }
                }),
                uD = "floor",
                ud = tC(uD, ["typed", "config", "round"], r => {
                    var {
                        typed: t,
                        config: e,
                        round: n
                    } = r;
                    return t(uD, {
                        number: function(r) {
                            return tG(r, n(r), e.relTol, e.absTol) ? n(r) : Math.floor(r)
                        },
                        "number, number": function(r, t) {
                            if (tG(r, n(r, t), e.relTol, e.absTol)) return n(r, t);
                            var [i, u] = "".concat(r, "e").split("e"), o = Math.floor(Number("".concat(i, "e").concat(Number(u) + t)));
                            return [i, u] = "".concat(o, "e").split("e"), Number("".concat(i, "e").concat(Number(u) - t))
                        }
                    })
                }),
                uv = tC(uD, ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        config: e,
                        round: n,
                        matrix: i,
                        equalScalar: u,
                        zeros: o,
                        DenseMatrix: a
                    } = r, s = iP({
                        typed: t,
                        equalScalar: u
                    }), f = iq({
                        typed: t,
                        DenseMatrix: a
                    }), c = iR({
                        typed: t
                    }), l = ud({
                        typed: t,
                        config: e,
                        round: n
                    });
                    return t("floor", {
                        number: l.signatures.number,
                        "number,number": l.signatures["number,number"],
                        Complex: function(r) {
                            return r.floor()
                        },
                        "Complex, number": function(r, t) {
                            return r.floor(t)
                        },
                        "Complex, BigNumber": function(r, t) {
                            return r.floor(t.toNumber())
                        },
                        BigNumber: function(r) {
                            return nC(r, n(r), e.relTol, e.absTol) ? n(r) : r.floor()
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return nC(r, n(r, t), e.relTol, e.absTol) ? n(r, t) : r.toDecimalPlaces(t.toNumber(), rk.ROUND_FLOOR)
                        },
                        Fraction: function(r) {
                            return r.floor()
                        },
                        "Fraction, number": function(r, t) {
                            return r.floor(t)
                        },
                        "Fraction, BigNumber": function(r, t) {
                            return r.floor(t.toNumber())
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0)),
                        "Array, number | BigNumber": t.referToSelf(r => (t, e) => e0(t, t => r(t, e), !0)),
                        "SparseMatrix, number | BigNumber": t.referToSelf(r => (t, e) => s(t, e, r, !1)),
                        "DenseMatrix, number | BigNumber": t.referToSelf(r => (t, e) => c(t, e, r, !1)),
                        "number | Complex | Fraction | BigNumber, Array": t.referToSelf(r => (t, e) => c(i(e), t, r, !0).valueOf()),
                        "number | Complex | Fraction | BigNumber, Matrix": t.referToSelf(r => (t, e) => u(t, 0) ? o(e.size(), e.storage()) : "dense" === e.storage() ? c(e, t, r, !0) : f(e, t, r, !0))
                    })
                }),
                ug = (r => {
                    var {
                        typed: t,
                        config: e,
                        round: n,
                        matrix: i,
                        equalScalar: u,
                        zeros: o,
                        DenseMatrix: a,
                        concat: s
                    } = r, f = uv({
                        typed: t,
                        config: e,
                        round: n,
                        matrix: i,
                        equalScalar: u,
                        zeros: o,
                        DenseMatrix: a
                    }), c = iI({
                        typed: t,
                        equalScalar: u
                    }), l = ij({
                        typed: t
                    }), h = ui({
                        typed: t,
                        equalScalar: u
                    }), p = iP({
                        typed: t,
                        equalScalar: u
                    }), m = iq({
                        typed: t,
                        DenseMatrix: a
                    }), D = iZ({
                        typed: t,
                        matrix: i,
                        concat: s
                    });
                    return t("mod", {
                        "number, number": function(r, t) {
                            return 0 === t ? r : r - t * f(r / t)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return t.isZero() ? r : r.sub(t.mul(f(r.div(t))))
                        },
                        "bigint, bigint": function(r, t) {
                            if (0 n === t) return r;
                            if (r < 0) {
                                var e = r % t;
                                return 0 n === e ? e : e + t
                            }
                            return r % t
                        },
                        "Fraction, Fraction": function(r, t) {
                            return t.equals(0) ? r : r.sub(t.mul(f(r.div(t))))
                        }
                    }, D({
                        SS: h,
                        DS: l,
                        SD: c,
                        Ss: p,
                        sS: m
                    }))
                }, "number | BigNumber | Fraction | Matrix | Array");
            "".concat(ug, ", ").concat(ug, ", ...").concat(ug);
            var uy = tC("ImmutableDenseMatrix", ["smaller", "DenseMatrix"], r => {
                    var {
                        smaller: t,
                        DenseMatrix: e
                    } = r;

                    function n(r, t) {
                        if (!(this instanceof n)) throw SyntaxError("Constructor must be called with the new operator");
                        if (t && !rX(t)) throw Error("Invalid datatype: " + t);
                        if (rG(r) || rQ(r)) {
                            var i = new e(r, t);
                            this._data = i._data, this._size = i._size, this._datatype = i._datatype, this._min = null, this._max = null
                        } else if (r && rQ(r.data) && rQ(r.size)) this._data = r.data, this._size = r.size, this._datatype = r.datatype, this._min = void 0 !== r.min ? r.min : null, this._max = void 0 !== r.max ? r.max : null;
                        else if (r) throw TypeError("Unsupported type of data (" + tx(r) + ")");
                        else this._data = [], this._size = [0], this._datatype = t, this._min = null, this._max = null
                    }
                    return n.prototype = new e, n.prototype.type = "ImmutableDenseMatrix", n.prototype.isImmutableDenseMatrix = !0, n.prototype.subset = function(r) {
                        switch (arguments.length) {
                            case 1:
                                var t = e.prototype.subset.call(this, r);
                                if (rG(t)) return new n({
                                    data: t._data,
                                    size: t._size,
                                    datatype: t._datatype
                                });
                                return t;
                            case 2:
                            case 3:
                                throw Error("Cannot invoke set subset on an Immutable Matrix instance");
                            default:
                                throw SyntaxError("Wrong number of arguments")
                        }
                    }, n.prototype.set = function() {
                        throw Error("Cannot invoke set on an Immutable Matrix instance")
                    }, n.prototype.resize = function() {
                        throw Error("Cannot invoke resize on an Immutable Matrix instance")
                    }, n.prototype.reshape = function() {
                        throw Error("Cannot invoke reshape on an Immutable Matrix instance")
                    }, n.prototype.clone = function() {
                        return new n({
                            data: tw(this._data),
                            size: tw(this._size),
                            datatype: this._datatype
                        })
                    }, n.prototype.toJSON = function() {
                        return {
                            mathjs: "ImmutableDenseMatrix",
                            data: this._data,
                            size: this._size,
                            datatype: this._datatype
                        }
                    }, n.fromJSON = function(r) {
                        return new n(r)
                    }, n.prototype.swapRows = function() {
                        throw Error("Cannot invoke swapRows on an Immutable Matrix instance")
                    }, n.prototype.min = function() {
                        if (null === this._min) {
                            var r = null;
                            this.forEach(function(e) {
                                (null === r || t(e, r)) && (r = e)
                            }), this._min = null !== r ? r : void 0
                        }
                        return this._min
                    }, n.prototype.max = function() {
                        if (null === this._max) {
                            var r = null;
                            this.forEach(function(e) {
                                (null === r || t(r, e)) && (r = e)
                            }), this._max = null !== r ? r : void 0
                        }
                        return this._max
                    }, n
                }, {
                    isClass: !0
                }),
                ub = tC("Index", ["ImmutableDenseMatrix", "getMatrixDataType"], r => {
                    var {
                        ImmutableDenseMatrix: t,
                        getMatrixDataType: e
                    } = r;

                    function n(r) {
                        if (!(this instanceof n)) throw SyntaxError("Constructor must be called with the new operator");
                        this._dimensions = [], this._sourceSize = [], this._isScalar = !0;
                        for (var t = 0, u = arguments.length; t < u; t++) {
                            var o = arguments[t],
                                a = rQ(o),
                                s = rG(o),
                                f = null;
                            if (r2(o)) this._dimensions.push(o), this._isScalar = !1;
                            else if (a || s) {
                                var c = void 0;
                                "boolean" === e(o) ? (a && (c = i(ux(o).valueOf())), s && (c = i(ux(o._data).valueOf())), f = o.valueOf().length) : c = i(o.valueOf()), this._dimensions.push(c);
                                var l = c.size();
                                (1 !== l.length || 1 !== l[0] || null !== f) && (this._isScalar = !1)
                            } else if ("number" == typeof o) this._dimensions.push(i([o]));
                            else if ("string" == typeof o) this._dimensions.push(o);
                            else throw TypeError("Dimension must be an Array, Matrix, number, string, or Range");
                            this._sourceSize.push(f)
                        }
                    }

                    function i(r) {
                        for (var e = 0, n = r.length; e < n; e++)
                            if ("number" != typeof r[e] || !tP(r[e])) throw TypeError("Index parameters must be positive integer numbers");
                        return new t(r)
                    }
                    return n.prototype.type = "Index", n.prototype.isIndex = !0, n.prototype.clone = function() {
                        var r = new n;
                        return r._dimensions = tw(this._dimensions), r._isScalar = this._isScalar, r._sourceSize = this._sourceSize, r
                    }, n.create = function(r) {
                        var t = new n;
                        return n.apply(t, r), t
                    }, n.prototype.size = function() {
                        for (var r = [], t = 0, e = this._dimensions.length; t < e; t++) {
                            var n = this._dimensions[t];
                            r[t] = "string" == typeof n ? 1 : n.size()[0]
                        }
                        return r
                    }, n.prototype.max = function() {
                        for (var r = [], t = 0, e = this._dimensions.length; t < e; t++) {
                            var n = this._dimensions[t];
                            r[t] = "string" == typeof n ? n : n.max()
                        }
                        return r
                    }, n.prototype.min = function() {
                        for (var r = [], t = 0, e = this._dimensions.length; t < e; t++) {
                            var n = this._dimensions[t];
                            r[t] = "string" == typeof n ? n : n.min()
                        }
                        return r
                    }, n.prototype.forEach = function(r) {
                        for (var t = 0, e = this._dimensions.length; t < e; t++) r(this._dimensions[t], t, this)
                    }, n.prototype.dimension = function(r) {
                        return "number" != typeof r ? null : this._dimensions[r] || null
                    }, n.prototype.isObjectProperty = function() {
                        return 1 === this._dimensions.length && "string" == typeof this._dimensions[0]
                    }, n.prototype.getObjectProperty = function() {
                        return this.isObjectProperty() ? this._dimensions[0] : null
                    }, n.prototype.isScalar = function() {
                        return this._isScalar
                    }, n.prototype.toArray = function() {
                        for (var r = [], t = 0, e = this._dimensions.length; t < e; t++) {
                            var n = this._dimensions[t];
                            r.push("string" == typeof n ? n : n.toArray())
                        }
                        return r
                    }, n.prototype.valueOf = n.prototype.toArray, n.prototype.toString = function() {
                        for (var r = [], t = 0, e = this._dimensions.length; t < e; t++) {
                            var n = this._dimensions[t];
                            "string" == typeof n ? r.push(JSON.stringify(n)) : r.push(n.toString())
                        }
                        return "[" + r.join(", ") + "]"
                    }, n.prototype.toJSON = function() {
                        return {
                            mathjs: "Index",
                            dimensions: this._dimensions
                        }
                    }, n.fromJSON = function(r) {
                        return n.create(r.dimensions)
                    }, n
                }, {
                    isClass: !0
                });

            function ux(r) {
                var t = [];
                return r.forEach((r, e) => {
                    r && t.push(e)
                }), t
            }
            var uw = "larger",
                uA = tC(uw, ["typed", "config", "matrix", "DenseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        DenseMatrix: i,
                        concat: u
                    } = r, o = ij({
                        typed: t
                    }), a = ik({
                        typed: t,
                        DenseMatrix: i
                    }), s = iq({
                        typed: t,
                        DenseMatrix: i
                    }), f = iZ({
                        typed: t,
                        matrix: n,
                        concat: u
                    }), c = n_({
                        typed: t
                    });
                    return t(uw, uE({
                        typed: t,
                        config: e
                    }), {
                        "boolean, boolean": (r, t) => r > t,
                        "BigNumber, BigNumber": function(r, t) {
                            return r.gt(t) && !nC(r, t, e.relTol, e.absTol)
                        },
                        "bigint, bigint": (r, t) => r > t,
                        "Fraction, Fraction": (r, t) => 1 === r.compare(t),
                        "Complex, Complex": function() {
                            throw TypeError("No ordering relation is defined for complex numbers")
                        }
                    }, c, f({
                        SS: a,
                        DS: o,
                        Ss: s
                    }))
                }),
                uE = tC(uw, ["typed", "config"], r => {
                    var {
                        typed: t,
                        config: e
                    } = r;
                    return t(uw, {
                        "number, number": function(r, t) {
                            return r > t && !tG(r, t, e.relTol, e.absTol)
                        }
                    })
                }),
                uF = "multiply",
                uC = tC(uF, ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        addScalar: n,
                        multiplyScalar: i,
                        equalScalar: u,
                        dot: o
                    } = r, a = iP({
                        typed: t,
                        equalScalar: u
                    }), s = iR({
                        typed: t
                    });

                    function f(r, t) {
                        switch (r.length) {
                            case 1:
                                switch (t.length) {
                                    case 1:
                                        if (r[0] !== t[0]) throw RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
                                        break;
                                    case 2:
                                        if (r[0] !== t[0]) throw RangeError("Dimension mismatch in multiplication. Vector length (" + r[0] + ") must match Matrix rows (" + t[0] + ")");
                                        break;
                                    default:
                                        throw Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
                                }
                                break;
                            case 2:
                                switch (t.length) {
                                    case 1:
                                        if (r[1] !== t[0]) throw RangeError("Dimension mismatch in multiplication. Matrix columns (" + r[1] + ") must match Vector length (" + t[0] + ")");
                                        break;
                                    case 2:
                                        if (r[1] !== t[0]) throw RangeError("Dimension mismatch in multiplication. Matrix A columns (" + r[1] + ") must match Matrix B rows (" + t[0] + ")");
                                        break;
                                    default:
                                        throw Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
                                }
                                break;
                            default:
                                throw Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + r.length + " dimensions)")
                        }
                    }
                    var c = t("_multiplyMatrixVector", {
                            "DenseMatrix, any": function(r, e) {
                                var u, o = r._data,
                                    a = r._size,
                                    s = r._datatype || r.getDataType(),
                                    f = e._data,
                                    c = e._datatype || e.getDataType(),
                                    l = a[0],
                                    h = a[1],
                                    p = n,
                                    m = i;
                                s && c && s === c && "string" == typeof s && "mixed" !== s && (u = s, p = t.find(n, [u, u]), m = t.find(i, [u, u]));
                                for (var D = [], d = 0; d < l; d++) {
                                    for (var v = o[d], g = m(v[0], f[0]), y = 1; y < h; y++) g = p(g, m(v[y], f[y]));
                                    D[d] = g
                                }
                                return r.createDenseMatrix({
                                    data: D,
                                    size: [l],
                                    datatype: s === r._datatype && c === e._datatype ? u : void 0
                                })
                            },
                            "SparseMatrix, any": function(r, e) {
                                var o, a = r._values,
                                    s = r._index,
                                    f = r._ptr,
                                    c = r._datatype || void 0 === r._data ? r._datatype : r.getDataType();
                                if (!a) throw Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                                var l = e._data,
                                    h = e._datatype || e.getDataType(),
                                    p = r._size[0],
                                    m = e._size[0],
                                    D = [],
                                    d = [],
                                    v = [],
                                    g = n,
                                    y = i,
                                    b = u,
                                    x = 0;
                                c && h && c === h && "string" == typeof c && "mixed" !== c && (o = c, g = t.find(n, [o, o]), y = t.find(i, [o, o]), b = t.find(u, [o, o]), x = t.convert(0, o));
                                var w = [],
                                    A = [];
                                v[0] = 0;
                                for (var E = 0; E < m; E++) {
                                    var F = l[E];
                                    if (!b(F, x))
                                        for (var C = f[E], _ = f[E + 1], M = C; M < _; M++) {
                                            var N = s[M];
                                            A[N] ? w[N] = g(w[N], y(F, a[M])) : (A[N] = !0, d.push(N), w[N] = y(F, a[M]))
                                        }
                                }
                                for (var B = d.length, S = 0; S < B; S++) {
                                    var T = d[S];
                                    D[S] = w[T]
                                }
                                return v[1] = d.length, r.createSparseMatrix({
                                    values: D,
                                    index: d,
                                    ptr: v,
                                    size: [p, 1],
                                    datatype: c === r._datatype && h === e._datatype ? o : void 0
                                })
                            }
                        }),
                        l = t("_multiplyMatrixMatrix", {
                            "DenseMatrix, DenseMatrix": function(r, e) {
                                var u, o = r._data,
                                    a = r._size,
                                    s = r._datatype || r.getDataType(),
                                    f = e._data,
                                    c = e._size,
                                    l = e._datatype || e.getDataType(),
                                    h = a[0],
                                    p = a[1],
                                    m = c[1],
                                    D = n,
                                    d = i;
                                s && l && s === l && "string" == typeof s && "mixed" !== s && "mixed" !== s && (u = s, D = t.find(n, [u, u]), d = t.find(i, [u, u]));
                                for (var v = [], g = 0; g < h; g++) {
                                    var y = o[g];
                                    v[g] = [];
                                    for (var b = 0; b < m; b++) {
                                        for (var x = d(y[0], f[0][b]), w = 1; w < p; w++) x = D(x, d(y[w], f[w][b]));
                                        v[g][b] = x
                                    }
                                }
                                return r.createDenseMatrix({
                                    data: v,
                                    size: [h, m],
                                    datatype: s === r._datatype && l === e._datatype ? u : void 0
                                })
                            },
                            "DenseMatrix, SparseMatrix": function(r, e) {
                                var o, a = r._data,
                                    s = r._size,
                                    f = r._datatype || r.getDataType(),
                                    c = e._values,
                                    l = e._index,
                                    h = e._ptr,
                                    p = e._size,
                                    m = e._datatype || void 0 === e._data ? e._datatype : e.getDataType();
                                if (!c) throw Error("Cannot multiply Dense Matrix times Pattern only Matrix");
                                var D = s[0],
                                    d = p[1],
                                    v = n,
                                    g = i,
                                    y = u,
                                    b = 0;
                                f && m && f === m && "string" == typeof f && "mixed" !== f && (o = f, v = t.find(n, [o, o]), g = t.find(i, [o, o]), y = t.find(u, [o, o]), b = t.convert(0, o));
                                for (var x = [], w = [], A = [], E = e.createSparseMatrix({
                                        values: x,
                                        index: w,
                                        ptr: A,
                                        size: [D, d],
                                        datatype: f === r._datatype && m === e._datatype ? o : void 0
                                    }), F = 0; F < d; F++) {
                                    A[F] = w.length;
                                    var C = h[F],
                                        _ = h[F + 1];
                                    if (_ > C)
                                        for (var M = 0, N = 0; N < D; N++) {
                                            for (var B = N + 1, S = void 0, T = C; T < _; T++) {
                                                var z = l[T];
                                                M !== B ? (S = g(a[N][z], c[T]), M = B) : S = v(S, g(a[N][z], c[T]))
                                            }
                                            M !== B || y(S, b) || (w.push(N), x.push(S))
                                        }
                                }
                                return A[d] = w.length, E
                            },
                            "SparseMatrix, DenseMatrix": function(r, e) {
                                var o, a = r._values,
                                    s = r._index,
                                    f = r._ptr,
                                    c = r._datatype || void 0 === r._data ? r._datatype : r.getDataType();
                                if (!a) throw Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                                var l = e._data,
                                    h = e._datatype || e.getDataType(),
                                    p = r._size[0],
                                    m = e._size[0],
                                    D = e._size[1],
                                    d = n,
                                    v = i,
                                    g = u,
                                    y = 0;
                                c && h && c === h && "string" == typeof c && "mixed" !== c && (o = c, d = t.find(n, [o, o]), v = t.find(i, [o, o]), g = t.find(u, [o, o]), y = t.convert(0, o));
                                for (var b = [], x = [], w = [], A = r.createSparseMatrix({
                                        values: b,
                                        index: x,
                                        ptr: w,
                                        size: [p, D],
                                        datatype: c === r._datatype && h === e._datatype ? o : void 0
                                    }), E = [], F = [], C = 0; C < D; C++) {
                                    w[C] = x.length;
                                    for (var _ = C + 1, M = 0; M < m; M++) {
                                        var N = l[M][C];
                                        if (!g(N, y))
                                            for (var B = f[M], S = f[M + 1], T = B; T < S; T++) {
                                                var z = s[T];
                                                F[z] !== _ ? (F[z] = _, x.push(z), E[z] = v(N, a[T])) : E[z] = d(E[z], v(N, a[T]))
                                            }
                                    }
                                    for (var O = w[C], I = x.length, j = O; j < I; j++) {
                                        var k = x[j];
                                        b[j] = E[k]
                                    }
                                }
                                return w[D] = x.length, A
                            },
                            "SparseMatrix, SparseMatrix": function(r, e) {
                                var u, o, a, s, f, c, l, h, p, m = r._values,
                                    D = r._index,
                                    d = r._ptr,
                                    v = r._datatype || void 0 === r._data ? r._datatype : r.getDataType(),
                                    g = e._values,
                                    y = e._index,
                                    b = e._ptr,
                                    x = e._datatype || void 0 === e._data ? e._datatype : e.getDataType(),
                                    w = r._size[0],
                                    A = e._size[1],
                                    E = m && g,
                                    F = n,
                                    C = i;
                                v && x && v === x && "string" == typeof v && "mixed" !== v && (u = v, F = t.find(n, [u, u]), C = t.find(i, [u, u]));
                                for (var _ = E ? [] : void 0, M = [], N = [], B = r.createSparseMatrix({
                                        values: _,
                                        index: M,
                                        ptr: N,
                                        size: [w, A],
                                        datatype: v === r._datatype && x === e._datatype ? u : void 0
                                    }), S = E ? [] : void 0, T = [], z = 0; z < A; z++) {
                                    N[z] = M.length;
                                    var O = z + 1;
                                    for (c = b[z], l = b[z + 1], f = c; f < l; f++)
                                        if (p = y[f], E)
                                            for (a = d[p], s = d[p + 1], o = a; o < s; o++) T[h = D[o]] !== O ? (T[h] = O, M.push(h), S[h] = C(g[f], m[o])) : S[h] = F(S[h], C(g[f], m[o]));
                                        else
                                            for (a = d[p], s = d[p + 1], o = a; o < s; o++) T[h = D[o]] !== O && (T[h] = O, M.push(h));
                                    if (E)
                                        for (var I = N[z], j = M.length, k = I; k < j; k++) {
                                            var P = M[k];
                                            _[k] = S[P]
                                        }
                                }
                                return N[A] = M.length, B
                            }
                        });
                    return t(uF, i, {
                        "Array, Array": t.referTo("Matrix, Matrix", r => (t, n) => {
                            f(eA(t), eA(n));
                            var i = r(e(t), e(n));
                            return rG(i) ? i.valueOf() : i
                        }),
                        "Matrix, Matrix": function(r, e) {
                            var u = r.size(),
                                a = e.size();
                            return (f(u, a), 1 === u.length) ? 1 === a.length ? function(r, t, e) {
                                if (0 === e) throw Error("Cannot multiply two empty vectors");
                                return o(r, t)
                            }(r, e, u[0]) : function(r, e) {
                                if ("dense" !== e.storage()) throw Error("Support for SparseMatrix not implemented");
                                return function(r, e) {
                                    var u, o = r._data,
                                        a = r._size,
                                        s = r._datatype || r.getDataType(),
                                        f = e._data,
                                        c = e._size,
                                        l = e._datatype || e.getDataType(),
                                        h = a[0],
                                        p = c[1],
                                        m = n,
                                        D = i;
                                    s && l && s === l && "string" == typeof s && "mixed" !== s && (u = s, m = t.find(n, [u, u]), D = t.find(i, [u, u]));
                                    for (var d = [], v = 0; v < p; v++) {
                                        for (var g = D(o[0], f[0][v]), y = 1; y < h; y++) g = m(g, D(o[y], f[y][v]));
                                        d[v] = g
                                    }
                                    return r.createDenseMatrix({
                                        data: d,
                                        size: [p],
                                        datatype: s === r._datatype && l === e._datatype ? u : void 0
                                    })
                                }(r, e)
                            }(r, e) : 1 === a.length ? c(r, e) : l(r, e)
                        },
                        "Matrix, Array": t.referTo("Matrix,Matrix", r => (t, n) => r(t, e(n))),
                        "Array, Matrix": t.referToSelf(r => (t, n) => r(e(t, n.storage()), n)),
                        "SparseMatrix, any": function(r, t) {
                            return a(r, t, i, !1)
                        },
                        "DenseMatrix, any": function(r, t) {
                            return s(r, t, i, !1)
                        },
                        "any, SparseMatrix": function(r, t) {
                            return a(t, r, i, !0)
                        },
                        "any, DenseMatrix": function(r, t) {
                            return s(t, r, i, !0)
                        },
                        "Array, any": function(r, t) {
                            return s(e(r), t, i, !1).valueOf()
                        },
                        "any, Array": function(r, t) {
                            return s(e(t), r, i, !0).valueOf()
                        },
                        "any, any": i,
                        "any, any, ...any": t.referToSelf(r => (t, e, n) => {
                            for (var i = r(t, e), u = 0; u < n.length; u++) i = r(i, n[u]);
                            return i
                        })
                    })
                }),
                u_ = "partitionSelect";

            function uM(r, t, e, n, i, u, o) {
                var a = 0;
                for (e[o] = r; a >= 0;) {
                    var s = e[o + a],
                        f = e[n + s]; - 1 === f ? (a--, u[t++] = s) : (e[n + s] = e[i + f], e[o + ++a] = f)
                }
                return t
            }
            r => {
                var {
                    typed: t,
                    isNumeric: e,
                    isNaN: n,
                    compare: i
                } = r, u = (r, t) => -i(r, t);
                return t(u_, {
                    "Array | Matrix, number": function(r, t) {
                        return o(r, t, i)
                    },
                    "Array | Matrix, number, string": function(r, t, e) {
                        if ("asc" === e) return o(r, t, i);
                        if ("desc" === e) return o(r, t, u);
                        throw Error('Compare string must be "asc" or "desc"')
                    },
                    "Array | Matrix, number, function": o
                });

                function o(r, t, e) {
                    if (!tP(t) || t < 0) throw Error("k must be a non-negative integer");
                    if (rG(r)) {
                        if (r.size().length > 1) throw Error("Only one dimensional matrices supported");
                        return a(r.valueOf(), t, e)
                    }
                    if (Array.isArray(r)) return a(r, t, e)
                }

                function a(r, t, i) {
                    if (t >= r.length) throw Error("k out of bounds");
                    for (var u = 0; u < r.length; u++)
                        if (e(r[u]) && n(r[u])) return r[u];
                    for (var o = 0, a = r.length - 1; o < a;) {
                        for (var s = o, f = a, c = r[Math.floor(Math.random() * (a - o + 1)) + o]; s < f;)
                            if (i(r[s], c) >= 0) {
                                var l = r[f];
                                r[f] = r[s], r[s] = l, --f
                            } else ++s;
                        i(r[s], c) > 0 && --s, t <= s ? a = s : o = s + 1
                    }
                    return r[t]
                }
            };
            var uN = tC("csAmd", ["add", "multiply", "transpose"], r => {
                    var {
                        add: t,
                        multiply: e,
                        transpose: n
                    } = r;
                    return function(r, o) {
                        if (!o || r <= 0 || r > 3) return null;
                        var a, s, f, c, l, h, p, m, D, d, v, g, y, b, x, w, A = o._size,
                            E = A[0],
                            F = A[1],
                            C = 0,
                            _ = Math.max(16, 10 * Math.sqrt(F));
                        _ = Math.min(F - 2, _);
                        var M = function(r, i, u, o, a) {
                            var s = n(i);
                            if (1 === r && o === u) return t(i, s);
                            if (2 === r) {
                                for (var f = s._index, c = s._ptr, l = 0, h = 0; h < u; h++) {
                                    var p = c[h];
                                    if (c[h] = l, !(c[h + 1] - p > a))
                                        for (var m = c[h + 1]; p < m; p++) f[l++] = f[p]
                                }
                                c[u] = l, i = n(s)
                            }
                            return e(s, i)
                        }(r, o, E, F, _);
                        ! function(r, t, e) {
                            for (var n = r._values, i = r._index, u = r._ptr, o = r._size[1], a = 0, s = 0; s < o; s++) {
                                var f = u[s];
                                for (u[s] = a; f < u[s + 1]; f++) t(i[f], s, n ? n[f] : 1, null) && (i[a] = i[f], n && (n[a] = n[f]), a++)
                            }
                            u[o] = a, i.splice(a, i.length - a), n && n.splice(a, n.length - a)
                        }(M, u, 0);
                        for (var N = M._index, B = M._ptr, S = B[F], T = [], z = [], O = F + 1, I = 2 * (F + 1), j = 3 * (F + 1), k = 4 * (F + 1), P = 5 * (F + 1), q = 6 * (F + 1), U = 7 * (F + 1), R = function(r, t, e, n, u, o, a, s, f, c, l, h) {
                                for (var p = 0; p < r; p++) e[0 + p] = t[p + 1] - t[p];
                                e[0 + r] = 0;
                                for (var m = 0; m <= r; m++) e[u + m] = -1, o[m] = -1, e[a + m] = -1, e[s + m] = -1, e[f + m] = 1, e[c + m] = 1, e[l + m] = 0, e[h + m] = e[n + m];
                                var D = i(0, 0, e, c, r);
                                return e[l + r] = -2, t[r] = -1, e[c + r] = 0, D
                            }(F, B, z, 0, j, T, I, U, O, q, k, P), L = function(r, t, e, n, i, u, o, a, s, f, c) {
                                for (var l = 0, h = 0; h < r; h++) {
                                    var p = e[n + h];
                                    if (0 === p) e[i + h] = -2, l++, t[h] = -1, e[u + h] = 0;
                                    else if (p > o) e[a + h] = 0, e[i + h] = -1, l++, t[h] = -r - 2, e[a + r]++;
                                    else {
                                        var m = e[s + p]; - 1 !== m && (f[m] = h), e[c + h] = e[s + p], e[s + p] = h
                                    }
                                }
                                return l
                            }(F, B, z, P, k, q, _, O, j, T, I), Z = 0; L < F;) {
                            for (f = -1; Z < F && -1 === (f = z[j + Z]); Z++); - 1 !== z[I + f] && (T[z[I + f]] = -1), z[j + Z] = z[I + f];
                            var V = z[k + f],
                                J = z[O + f];
                            L += J;
                            var $ = 0;
                            z[O + f] = -J;
                            var H = B[f],
                                Y = 0 === V ? H : S,
                                W = Y;
                            for (c = 1; c <= V + 1; c++) {
                                for (c > V ? (h = f, p = H, m = z[0 + f] - V) : (p = B[h = N[H++]], m = z[0 + h]), l = 1; l <= m; l++)(D = z[O + (a = N[p++])]) <= 0 || ($ += D, z[O + a] = -D, N[W++] = a, -1 !== z[I + a] && (T[z[I + a]] = T[a]), -1 !== T[a] ? z[I + T[a]] = z[I + a] : z[j + z[P + a]] = z[I + a]);
                                h !== f && (B[h] = -f - 2, z[q + h] = 0)
                            }
                            for (0 !== V && (S = W), z[P + f] = $, B[f] = Y, z[0 + f] = W - Y, z[k + f] = -2, R = i(R, C, z, q, F), d = Y; d < W; d++)
                                if (!((v = z[k + (a = N[d])]) <= 0)) {
                                    var X = R - (D = -z[O + a]);
                                    for (H = B[a], g = B[a] + v - 1; H <= g; H++) z[q + (h = N[H])] >= R ? z[q + h] -= D : 0 !== z[q + h] && (z[q + h] = z[P + h] + X)
                                }
                            for (d = Y; d < W; d++) {
                                for (x = 0, y = (g = B[a = N[d]]) + z[k + a] - 1, b = g, w = 0, H = g; H <= y; H++)
                                    if (0 !== z[q + (h = N[H])]) {
                                        var Q = z[q + h] - R;
                                        Q > 0 ? (w += Q, N[b++] = h, x += h) : (B[h] = -f - 2, z[q + h] = 0)
                                    }
                                z[k + a] = b - g + 1;
                                var G = b,
                                    K = g + z[0 + a];
                                for (H = y + 1; H < K; H++) {
                                    var rr = z[O + (s = N[H])];
                                    rr <= 0 || (w += rr, N[b++] = s, x += s)
                                }
                                0 === w ? (B[a] = -f - 2, $ -= D = -z[O + a], J += D, L += D, z[O + a] = 0, z[k + a] = -1) : (z[P + a] = Math.min(z[P + a], w), N[b] = N[G], N[G] = N[g], N[g] = f, z[0 + a] = b - g + 1, x = (x < 0 ? -x : x) % F, z[I + a] = z[U + x], z[U + x] = a, T[a] = x)
                            }
                            for (z[P + f] = $, R = i(R + (C = Math.max(C, $)), C, z, q, F), d = Y; d < W; d++)
                                if (!(z[O + (a = N[d])] >= 0))
                                    for (a = z[U + (x = T[a])], z[U + x] = -1; - 1 !== a && -1 !== z[I + a]; a = z[I + a], R++) {
                                        for (m = z[0 + a], v = z[k + a], H = B[a] + 1; H <= B[a] + m - 1; H++) z[q + N[H]] = R;
                                        var rt = a;
                                        for (s = z[I + a]; - 1 !== s;) {
                                            var re = z[0 + s] === m && z[k + s] === v;
                                            for (H = B[s] + 1; re && H <= B[s] + m - 1; H++) z[q + N[H]] !== R && (re = 0);
                                            re ? (B[s] = -a - 2, z[O + a] += z[O + s], z[O + s] = 0, z[k + s] = -1, s = z[I + s], z[I + rt] = s) : (rt = s, s = z[I + s])
                                        }
                                    }
                            for (H = Y, d = Y; d < W; d++)(D = -z[O + (a = N[d])]) <= 0 || (z[O + a] = D, w = Math.min(w = z[P + a] + $ - D, F - L - D), -1 !== z[j + w] && (T[z[j + w]] = a), z[I + a] = z[j + w], T[a] = -1, z[j + w] = a, Z = Math.min(Z, w), z[P + a] = w, N[H++] = a);
                            z[O + f] = J, 0 == (z[0 + f] = H - Y) && (B[f] = -1, z[q + f] = 0), 0 !== V && (S = H)
                        }
                        for (a = 0; a < F; a++) B[a] = -B[a] - 2;
                        for (s = 0; s <= F; s++) z[j + s] = -1;
                        for (s = F; s >= 0; s--) z[O + s] > 0 || (z[I + s] = z[j + B[s]], z[j + B[s]] = s);
                        for (h = F; h >= 0; h--) z[O + h] <= 0 || -1 === B[h] || (z[I + h] = z[j + B[h]], z[j + B[h]] = h);
                        for (f = 0, a = 0; a <= F; a++) - 1 === B[a] && (f = uM(a, f, z, j, I, T, q));
                        return T.splice(T.length - 1, 1), T
                    };

                    function i(r, t, e, n, i) {
                        if (r < 2 || r + t < 0) {
                            for (var u = 0; u < i; u++) 0 !== e[n + u] && (e[n + u] = 1);
                            r = 2
                        }
                        return r
                    }

                    function u(r, t) {
                        return r !== t
                    }
                }),
                uB = tC("csCounts", ["transpose"], r => {
                    var {
                        transpose: t
                    } = r;
                    return function(r, e, n, i) {
                        if (!r || !e || !n) return null;
                        var u, o, a, s, f, c, l, h = r._size,
                            p = h[0],
                            m = h[1],
                            D = 4 * m + (i ? m + p + 1 : 0),
                            d = [],
                            v = 2 * m,
                            g = 3 * m,
                            y = 4 * m,
                            b = 5 * m + 1;
                        for (a = 0; a < D; a++) d[a] = -1;
                        var x = [],
                            w = t(r),
                            A = w._index,
                            E = w._ptr;
                        for (a = 0; a < m; a++)
                            for (x[o = n[a]] = -1 === d[g + o] ? 1 : 0; - 1 !== o && -1 === d[g + o]; o = e[o]) d[g + o] = a;
                        if (i) {
                            for (a = 0; a < m; a++) d[n[a]] = a;
                            for (u = 0; u < p; u++) {
                                for (a = m, c = E[u], l = E[u + 1], f = c; f < l; f++) a = Math.min(a, d[A[f]]);
                                d[b + u] = d[y + a], d[y + a] = u
                            }
                        }
                        for (u = 0; u < m; u++) d[0 + u] = u;
                        for (a = 0; a < m; a++) {
                            for (-1 !== e[o = n[a]] && x[e[o]]--, s = i ? d[y + a] : o; - 1 !== s; s = i ? d[b + s] : -1)
                                for (f = E[s]; f < E[s + 1]; f++) {
                                    var F = function(r, t, e, n, i, u, o) {
                                        var a, s, f, c = 0;
                                        if (r <= t || e[n + t] <= e[i + r]) return -1;
                                        e[i + r] = e[n + t];
                                        var l = e[u + r];
                                        if (e[u + r] = t, -1 === l) c = 1, f = r;
                                        else {
                                            for (c = 2, f = l; f !== e[0 + f]; f = e[0 + f]);
                                            for (a = l; a !== f; a = s) s = e[0 + a], e[o + a] = f
                                        }
                                        return {
                                            jleaf: c,
                                            q: f
                                        }
                                    }(u = A[f], o, d, g, m, v, 0);
                                    F.jleaf >= 1 && x[o]++, 2 === F.jleaf && x[F.q]--
                                } - 1 !== e[o] && (d[0 + o] = e[o])
                        }
                        for (o = 0; o < m; o++) - 1 !== e[o] && (x[e[o]] += x[o]);
                        return x
                    }
                }),
                uS = tC("csSqr", ["add", "multiply", "transpose"], r => {
                    var {
                        add: t,
                        multiply: e,
                        transpose: n
                    } = r, i = uN({
                        add: t,
                        multiply: e,
                        transpose: n
                    }), u = uB({
                        transpose: n
                    });
                    return function(r, t, e) {
                        var n, o = t._ptr,
                            a = t._size[1],
                            s = {};
                        if (s.q = i(r, t), r && !s.q) return null;
                        if (e) {
                            var f = r ? function(r, t, e, n) {
                                r._values;
                                for (var i = r._index, u = r._ptr, o = r._size, a = r._datatype, s = o[0], f = o[1], c = [], l = [], h = 0, p = 0; p < f; p++) {
                                    l[p] = h;
                                    for (var m = e ? e[p] : p, D = u[m], d = u[m + 1], v = D; v < d; v++) {
                                        var g = i[v];
                                        c[h] = g, h++
                                    }
                                }
                                return l[f] = h, r.createSparseMatrix({
                                    values: null,
                                    index: c,
                                    ptr: l,
                                    size: [s, f],
                                    datatype: a
                                })
                            }(t, 0, s.q, 0) : t;
                            s.parent = function(r, t) {
                                if (!r) return null;
                                var e, n, i = r._index,
                                    u = r._ptr,
                                    o = r._size,
                                    a = o[0],
                                    s = o[1],
                                    f = [],
                                    c = [];
                                for (e = 0; e < a; e++) c[s + e] = -1;
                                for (var l = 0; l < s; l++) {
                                    f[l] = -1, c[0 + l] = -1;
                                    for (var h = u[l], p = u[l + 1], m = h; m < p; m++) {
                                        var D = i[m];
                                        for (e = c[s + D]; - 1 !== e && e < l; e = n) n = c[0 + e], c[0 + e] = l, -1 === n && (f[e] = l);
                                        c[s + D] = l
                                    }
                                }
                                return f
                            }(f, 1);
                            var c = function(r, t) {
                                if (!r) return null;
                                var e, n = 0,
                                    i = [],
                                    u = [],
                                    o = 2 * t;
                                for (e = 0; e < t; e++) u[0 + e] = -1;
                                for (e = t - 1; e >= 0; e--) - 1 !== r[e] && (u[t + e] = u[0 + r[e]], u[0 + r[e]] = e);
                                for (e = 0; e < t; e++) - 1 === r[e] && (n = uM(e, n, u, 0, t, i, o));
                                return i
                            }(s.parent, a);
                            if (s.cp = u(f, s.parent, c, 1), f && s.parent && s.cp && function(r, t) {
                                    var e, n, i, u, o, a = r._ptr,
                                        s = r._index,
                                        f = r._size,
                                        c = f[0],
                                        l = f[1];
                                    t.pinv = [], t.leftmost = [];
                                    var h = t.parent,
                                        p = t.pinv,
                                        m = t.leftmost,
                                        D = [],
                                        d = c + l,
                                        v = c + 2 * l;
                                    for (n = 0; n < l; n++) D[c + n] = -1, D[d + n] = -1, D[v + n] = 0;
                                    for (e = 0; e < c; e++) m[e] = -1;
                                    for (n = l - 1; n >= 0; n--)
                                        for (u = a[n], o = a[n + 1], i = u; i < o; i++) m[s[i]] = n;
                                    for (e = c - 1; e >= 0; e--) p[e] = -1, -1 !== (n = m[e]) && (0 == D[v + n]++ && (D[d + n] = e), D[0 + e] = D[c + n], D[c + n] = e);
                                    for (n = 0, t.lnz = 0, t.m2 = c; n < l; n++)
                                        if (e = D[c + n], t.lnz++, e < 0 && (e = t.m2++), p[e] = n, !(--v[n] <= 0)) {
                                            t.lnz += D[v + n];
                                            var g = h[n]; - 1 !== g && (0 === D[v + g] && (D[d + g] = D[d + n]), D[0 + D[d + n]] = D[c + g], D[c + g] = D[0 + e], D[v + g] += D[v + n])
                                        }
                                    for (e = 0; e < c; e++) p[e] < 0 && (p[e] = n++);
                                    return !0
                                }(f, s))
                                for (s.unz = 0, n = 0; n < a; n++) s.unz += s.cp[n]
                        } else s.unz = 4 * o[a] + a, s.lnz = s.unz;
                        return s
                    }
                });

            function uT(r, t) {
                r[t] = -r[t] - 2
            }

            function uz(r) {
                return r < 0 ? -r - 2 : r
            }
            var uO = tC("csSpsolve", ["divideScalar", "multiply", "subtract"], r => {
                    var {
                        divideScalar: t,
                        multiply: e,
                        subtract: n
                    } = r;
                    return function(r, i, u, o, a, s, f) {
                        var c, l, h, p, m = r._values,
                            D = r._index,
                            d = r._ptr,
                            v = r._size[1],
                            g = i._values,
                            y = i._index,
                            b = i._ptr,
                            x = function(r, t, e, n, i) {
                                var u, o, a, s = r._ptr,
                                    f = r._size,
                                    c = t._index,
                                    l = t._ptr,
                                    h = f[1],
                                    p = h;
                                for (o = l[e], a = l[e + 1], u = o; u < a; u++) {
                                    var m = c[u];
                                    s[m] < 0 || (p = function(r, t, e, n, i) {
                                        var u, o, a, s = t._index,
                                            f = t._ptr,
                                            c = t._size[1],
                                            l = 0;
                                        for (n[0] = r; l >= 0;) {
                                            r = n[l];
                                            var h = i ? i[r] : r;
                                            f[r] < 0 || (uT(f, r), n[c + l] = h < 0 ? 0 : uz(f[h]));
                                            var p = 1;
                                            for (o = n[c + l], a = h < 0 ? 0 : uz(f[h + 1]); o < a; o++)
                                                if (!(f[u = s[o]] < 0)) {
                                                    n[c + l] = o, n[++l] = u, p = 0;
                                                    break
                                                }
                                            p && (l--, n[--e] = r)
                                        }
                                        return e
                                    }(m, r, p, n, i))
                                }
                                for (u = p; u < h; u++) uT(s, n[u]);
                                return p
                            }(r, i, u, o, s);
                        for (c = x; c < v; c++) a[o[c]] = 0;
                        for (l = b[u], h = b[u + 1], c = l; c < h; c++) a[y[c]] = g[c];
                        for (var w = x; w < v; w++) {
                            var A = o[w],
                                E = s ? s[A] : A;
                            if (!(E < 0))
                                for (l = d[E], h = d[E + 1], a[A] = t(a[A], m[f ? l : h - 1]), c = f ? l + 1 : l, p = f ? h : h - 1; c < p; c++) {
                                    var F = D[c];
                                    a[F] = n(a[F], e(m[c], a[A]))
                                }
                        }
                        return x
                    }
                }),
                uI = tC("csLu", ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"], r => {
                    var {
                        abs: t,
                        divideScalar: e,
                        multiply: n,
                        subtract: i,
                        larger: u,
                        largerEq: o,
                        SparseMatrix: a
                    } = r, s = uO({
                        divideScalar: e,
                        multiply: n,
                        subtract: i
                    });
                    return function(r, i, f) {
                        if (!r) return null;
                        var c, l, h, p = r._size[1],
                            m = 100,
                            D = 100;
                        i && (c = i.q, m = i.lnz || m, D = i.unz || D);
                        var d = [],
                            v = [],
                            g = [],
                            y = new a({
                                values: d,
                                index: v,
                                ptr: g,
                                size: [p, p]
                            }),
                            b = [],
                            x = [],
                            w = [],
                            A = new a({
                                values: b,
                                index: x,
                                ptr: w,
                                size: [p, p]
                            }),
                            E = [],
                            F = [],
                            C = [];
                        for (l = 0; l < p; l++) F[l] = 0, E[l] = -1, g[l + 1] = 0;
                        m = 0, D = 0;
                        for (var _ = 0; _ < p; _++) {
                            g[_] = m, w[_] = D;
                            var M = c ? c[_] : _,
                                N = s(y, r, M, C, F, E, 1),
                                B = -1,
                                S = -1;
                            for (h = N; h < p; h++)
                                if (E[l = C[h]] < 0) {
                                    var T = t(F[l]);
                                    u(T, S) && (S = T, B = l)
                                } else x[D] = E[l], b[D++] = F[l];
                            if (-1 === B || S <= 0) return null;
                            E[M] < 0 && o(t(F[M]), n(S, f)) && (B = M);
                            var z = F[B];
                            for (x[D] = _, b[D++] = z, E[B] = _, v[m] = B, d[m++] = 1, h = N; h < p; h++) E[l = C[h]] < 0 && (v[m] = l, d[m++] = e(F[l], z)), F[l] = 0
                        }
                        for (h = 0, g[p] = m, w[p] = D; h < m; h++) v[h] = E[v[h]];
                        return d.splice(m, d.length - m), v.splice(m, v.length - m), b.splice(D, b.length - D), x.splice(D, x.length - D), {
                            L: y,
                            U: A,
                            pinv: E
                        }
                    }
                }),
                uj = tC("slu", ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"], r => {
                    var {
                        typed: t,
                        abs: e,
                        add: n,
                        multiply: i,
                        transpose: u,
                        divideScalar: o,
                        subtract: a,
                        larger: s,
                        largerEq: f,
                        SparseMatrix: c
                    } = r, l = uS({
                        add: n,
                        multiply: i,
                        transpose: u
                    }), h = uI({
                        abs: e,
                        divideScalar: o,
                        multiply: i,
                        subtract: a,
                        larger: s,
                        largerEq: f,
                        SparseMatrix: c
                    });
                    return t("slu", {
                        "SparseMatrix, number, number": function(r, t, e) {
                            if (!tP(t) || t < 0 || t > 3) throw Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
                            if (e < 0 || e > 1) throw Error("Partial pivoting threshold must be a number from 0 to 1");
                            var n = l(t, r, !1),
                                i = h(r, n, e);
                            return {
                                L: i.L,
                                U: i.U,
                                p: i.pinv,
                                q: n.q,
                                toString: function() {
                                    return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\np: " + this.p.toString() + (this.q ? "\nq: " + this.q.toString() : "") + "\n"
                                }
                            }
                        }
                    })
                }),
                uk = "subset",
                uP = tC(uk, ["typed", "matrix", "zeros", "add"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        zeros: n,
                        add: i
                    } = r;
                    return t(uk, {
                        "Matrix, Index": function(r, t) {
                            return e_(t) ? e() : (eF(r, t), r.subset(t))
                        },
                        "Array, Index": t.referTo("Matrix, Index", function(r) {
                            return function(t, n) {
                                var i = r(e(t), n);
                                return n.isScalar() ? i : i.valueOf()
                            }
                        }),
                        "Object, Index": uR,
                        "string, Index": uq,
                        "Matrix, Index, any, any": function(r, t, e, u) {
                            return e_(t) ? r : (eF(r, t), r.clone().subset(t, function(r, t) {
                                if ("string" == typeof r) throw Error("can't boradcast a string");
                                if (t._isScalar) return r;
                                var e = t.size();
                                if (!e.every(r => r > 0)) return r;
                                try {
                                    return i(r, n(e))
                                } catch (t) {
                                    return r
                                }
                            }(e, t), u))
                        },
                        "Array, Index, any, any": t.referTo("Matrix, Index, any, any", function(r) {
                            return function(t, n, i, u) {
                                var o = r(e(t), n, i, u);
                                return o.isMatrix ? o.valueOf() : o
                            }
                        }),
                        "Array, Index, any": t.referTo("Matrix, Index, any, any", function(r) {
                            return function(t, n, i) {
                                return r(e(t), n, i, void 0).valueOf()
                            }
                        }),
                        "Matrix, Index, any": t.referTo("Matrix, Index, any, any", function(r) {
                            return function(t, e, n) {
                                return r(t, e, n, void 0)
                            }
                        }),
                        "string, Index, string": uU,
                        "string, Index, string, string": uU,
                        "Object, Index, any": uL
                    })
                });

            function uq(r, t) {
                if (!r8(t)) throw TypeError("Index expected");
                if (e_(t)) return "";
                if (eF(Array.from(r), t), 1 !== t.size().length) throw new ex(t.size().length, 1);
                var e = r.length;
                eC(t.min()[0], e), eC(t.max()[0], e);
                var n = t.dimension(0),
                    i = "";
                return n.forEach(function(t) {
                    i += r.charAt(t)
                }), i
            }

            function uU(r, t, e, n) {
                if (!t || !0 !== t.isIndex) throw TypeError("Index expected");
                if (e_(t)) return r;
                if (eF(Array.from(r), t), 1 !== t.size().length) throw new ex(t.size().length, 1);
                if (void 0 !== n) {
                    if ("string" != typeof n || 1 !== n.length) throw TypeError("Single character expected as defaultValue")
                } else n = " ";
                var i = t.dimension(0);
                if (i.size()[0] !== e.length) throw new ex(i.size()[0], e.length);
                var u = r.length;
                eC(t.min()[0]), eC(t.max()[0]);
                for (var o = [], a = 0; a < u; a++) o[a] = r.charAt(a);
                if (i.forEach(function(r, t) {
                        o[r] = e.charAt(t[0])
                    }), o.length > u)
                    for (var s = u - 1, f = o.length; s < f; s++) o[s] || (o[s] = n);
                return o.join("")
            }

            function uR(r, t) {
                if (!e_(t)) {
                    if (1 !== t.size().length) throw new ex(t.size(), 1);
                    var e = t.dimension(0);
                    if ("string" != typeof e) throw TypeError("String expected as index to retrieve an object property");
                    return rP(r, e)
                }
            }

            function uL(r, t, e) {
                if (e_(t)) return r;
                if (1 !== t.size().length) throw new ex(t.size(), 1);
                var n = t.dimension(0);
                if ("string" != typeof n) throw TypeError("String expected as index to retrieve an object property");
                var i = tw(r);
                return rq(i, n, e), i
            }
            var uZ = tC("sum", ["typed", "config", "add", "numeric"], r => {
                    var {
                        typed: t,
                        config: e,
                        add: n,
                        numeric: i
                    } = r;
                    return t("sum", {
                        "Array | Matrix": u,
                        "Array | Matrix, number | BigNumber": function(r, t) {
                            try {
                                return e1(r, t, n)
                            } catch (r) {
                                throw ig(r, "sum")
                            }
                        },
                        "...": function(r) {
                            if (eG(r)) throw TypeError("Scalar values expected in function sum");
                            return u(r)
                        }
                    });

                    function u(r) {
                        var t;
                        return eK(r, function(r) {
                            try {
                                t = void 0 === t ? r : n(t, r)
                            } catch (t) {
                                throw ig(t, "sum", r)
                            }
                        }), void 0 === t && (t = i(0, e.number)), "string" == typeof t && (t = i(t, tq(t, e))), t
                    }
                }),
                uV = "usolveAll",
                uJ = tC(uV, ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        divideScalar: n,
                        multiplyScalar: i,
                        subtractScalar: u,
                        equalScalar: o,
                        DenseMatrix: a
                    } = r, s = i1({
                        DenseMatrix: a
                    });
                    return t(uV, {
                        "SparseMatrix, Array | Matrix": function(r, t) {
                            return function(r, t) {
                                for (var e = [s(r, t, !0)._data.map(r => r[0])], f = r._size[0], c = r._size[1], l = r._values, h = r._index, p = r._ptr, m = c - 1; m >= 0; m--)
                                    for (var D = e.length, d = 0; d < D; d++) {
                                        for (var v = e[d], g = [], y = [], b = p[m], x = p[m + 1], w = 0, A = x - 1; A >= b; A--) {
                                            var E = h[A];
                                            E === m ? w = l[A] : E < m && (g.push(l[A]), y.push(E))
                                        }
                                        if (o(w, 0)) {
                                            if (o(v[m], 0)) {
                                                if (0 === d) {
                                                    var F = [...v];
                                                    F[m] = 1;
                                                    for (var C = 0, _ = y.length; C < _; C++) {
                                                        var M = y[C];
                                                        F[M] = u(F[M], g[C])
                                                    }
                                                    e.push(F)
                                                }
                                            } else {
                                                if (0 === d) return [];
                                                e.splice(d, 1), d -= 1, D -= 1
                                            }
                                        } else {
                                            v[m] = n(v[m], w);
                                            for (var N = 0, B = y.length; N < B; N++) {
                                                var S = y[N];
                                                v[S] = u(v[S], i(v[m], g[N]))
                                            }
                                        }
                                    }
                                return e.map(r => new a({
                                    data: r.map(r => [r]),
                                    size: [f, 1]
                                }))
                            }(r, t)
                        },
                        "DenseMatrix, Array | Matrix": function(r, t) {
                            return f(r, t)
                        },
                        "Array, Array | Matrix": function(r, t) {
                            return f(e(r), t).map(r => r.valueOf())
                        }
                    });

                    function f(r, t) {
                        for (var e = [s(r, t, !0)._data.map(r => r[0])], f = r._data, c = r._size[0], l = r._size[1], h = l - 1; h >= 0; h--)
                            for (var p = e.length, m = 0; m < p; m++) {
                                var D = e[m];
                                if (o(f[h][h], 0)) {
                                    if (o(D[h], 0)) {
                                        if (0 === m) {
                                            var d = [...D];
                                            d[h] = 1;
                                            for (var v = h - 1; v >= 0; v--) d[v] = u(d[v], f[v][h]);
                                            e.push(d)
                                        }
                                    } else {
                                        if (0 === m) return [];
                                        e.splice(m, 1), m -= 1, p -= 1
                                    }
                                } else {
                                    D[h] = n(D[h], f[h][h]);
                                    for (var g = h - 1; g >= 0; g--) D[g] = u(D[g], i(D[h], f[g][h]))
                                }
                            }
                        return e.map(r => new a({
                            data: r.map(r => [r]),
                            size: [c, 1]
                        }))
                    }
                }),
                u$ = "ceil",
                uH = tC(u$, ["typed", "config", "round"], r => {
                    var {
                        typed: t,
                        config: e,
                        round: n
                    } = r;
                    return t(u$, {
                        number: function(r) {
                            return tG(r, n(r), e.relTol, e.absTol) ? n(r) : Math.ceil(r)
                        },
                        "number, number": function(r, t) {
                            if (tG(r, n(r, t), e.relTol, e.absTol)) return n(r, t);
                            var [i, u] = "".concat(r, "e").split("e"), o = Math.ceil(Number("".concat(i, "e").concat(Number(u) + t)));
                            return [i, u] = "".concat(o, "e").split("e"), Number("".concat(i, "e").concat(Number(u) - t))
                        }
                    })
                }),
                uY = tC(u$, ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"], r => {
                    var {
                        typed: t,
                        config: e,
                        round: n,
                        matrix: i,
                        equalScalar: u,
                        zeros: o,
                        DenseMatrix: a
                    } = r, s = iP({
                        typed: t,
                        equalScalar: u
                    }), f = iq({
                        typed: t,
                        DenseMatrix: a
                    }), c = iR({
                        typed: t
                    }), l = uH({
                        typed: t,
                        config: e,
                        round: n
                    });
                    return t("ceil", {
                        number: l.signatures.number,
                        "number,number": l.signatures["number,number"],
                        Complex: function(r) {
                            return r.ceil()
                        },
                        "Complex, number": function(r, t) {
                            return r.ceil(t)
                        },
                        "Complex, BigNumber": function(r, t) {
                            return r.ceil(t.toNumber())
                        },
                        BigNumber: function(r) {
                            return nC(r, n(r), e.relTol, e.absTol) ? n(r) : r.ceil()
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return nC(r, n(r, t), e.relTol, e.absTol) ? n(r, t) : r.toDecimalPlaces(t.toNumber(), rk.ROUND_CEIL)
                        },
                        Fraction: function(r) {
                            return r.ceil()
                        },
                        "Fraction, number": function(r, t) {
                            return r.ceil(t)
                        },
                        "Fraction, BigNumber": function(r, t) {
                            return r.ceil(t.toNumber())
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0)),
                        "Array, number | BigNumber": t.referToSelf(r => (t, e) => e0(t, t => r(t, e), !0)),
                        "SparseMatrix, number | BigNumber": t.referToSelf(r => (t, e) => s(t, e, r, !1)),
                        "DenseMatrix, number | BigNumber": t.referToSelf(r => (t, e) => c(t, e, r, !1)),
                        "number | Complex | Fraction | BigNumber, Array": t.referToSelf(r => (t, e) => c(i(e), t, r, !0).valueOf()),
                        "number | Complex | Fraction | BigNumber, Matrix": t.referToSelf(r => (t, e) => u(t, 0) ? o(e.size(), e.storage()) : "dense" === e.storage() ? c(e, t, r, !0) : f(e, t, r, !0))
                    })
                }),
                uW = e(63228),
                uX = "compareNatural",
                uQ = tC(uX, ["typed", "compare"], r => {
                    var {
                        typed: t,
                        compare: e
                    } = r, n = e.signatures["boolean,boolean"];
                    return t(uX, {
                        "any, any": function r(t, u) {
                            var o, a = tx(t),
                                s = tx(u);
                            if (("number" === a || "BigNumber" === a || "Fraction" === a) && ("number" === s || "BigNumber" === s || "Fraction" === s)) return "0" !== (o = e(t, u)).toString() ? o > 0 ? 1 : -1 : uW(a, s);
                            var f = ["Array", "DenseMatrix", "SparseMatrix"];
                            if (f.includes(a) || f.includes(s)) return 0 !== (o = function r(t, e, n) {
                                return r1(e) && r1(n) ? i(t, e.toJSON().values, n.toJSON().values) : r1(e) ? r(t, e.toArray(), n) : r1(n) ? r(t, e, n.toArray()) : r0(e) ? r(t, e.toJSON().data, n) : r0(n) ? r(t, e, n.toJSON().data) : Array.isArray(e) ? Array.isArray(n) ? i(t, e, n) : r(t, e, [n]) : r(t, [e], n)
                            }(r, t, u)) ? o : uW(a, s);
                            if (a !== s) return uW(a, s);
                            if ("Complex" === a) return t.re > u.re ? 1 : t.re < u.re ? -1 : t.im > u.im ? 1 : t.im < u.im ? -1 : 0;
                            if ("Unit" === a) return t.equalBase(u) ? r(t.value, u.value) : i(r, t.formatUnits(), u.formatUnits());
                            if ("boolean" === a) return n(t, u);
                            if ("string" === a) return uW(t, u);
                            if ("Object" === a) return function(r, t, e) {
                                var n = Object.keys(t),
                                    u = Object.keys(e);
                                n.sort(uW), u.sort(uW);
                                var o = i(r, n, u);
                                if (0 !== o) return o;
                                for (var a = 0; a < n.length; a++) {
                                    var s = r(t[n[a]], e[u[a]]);
                                    if (0 !== s) return s
                                }
                                return 0
                            }(r, t, u);
                            if ("null" === a || "undefined" === a) return 0;
                            throw TypeError('Unsupported type of value "' + a + '"')
                        }
                    });

                    function i(r, t, e) {
                        for (var n = 0, i = Math.min(t.length, e.length); n < i; n++) {
                            var u = r(t[n], e[n]);
                            if (0 !== u) return u
                        }
                        return t.length > e.length ? 1 : t.length < e.length ? -1 : 0
                    }
                }),
                uG = tC("det", ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        subtractScalar: n,
                        multiply: i,
                        divideScalar: u,
                        isZero: o,
                        unaryMinus: a
                    } = r;
                    return t("det", {
                        any: function(r) {
                            return tw(r)
                        },
                        "Array | Matrix": function(r) {
                            var t;
                            switch ((t = rG(r) ? r.size() : Array.isArray(r) ? (r = e(r)).size() : []).length) {
                                case 0:
                                    return tw(r);
                                case 1:
                                    if (1 === t[0]) return tw(r.valueOf()[0]);
                                    if (0 === t[0]) return 1;
                                    throw RangeError("Matrix must be square (size: " + ev(t) + ")");
                                case 2:
                                    var s = t[0],
                                        f = t[1];
                                    if (s === f) return function(r, t, e) {
                                        if (1 === t) return tw(r[0][0]);
                                        if (2 === t) return n(i(r[0][0], r[1][1]), i(r[1][0], r[0][1]));
                                        for (var s = !1, f = Array(t).fill(0).map((r, t) => t), c = 0; c < t; c++) {
                                            var l = f[c];
                                            if (o(r[l][c])) {
                                                var h = void 0;
                                                for (h = c + 1; h < t; h++)
                                                    if (!o(r[f[h]][c])) {
                                                        l = f[h], f[h] = f[c], f[c] = l, s = !s;
                                                        break
                                                    }
                                                if (h === t) return r[l][c]
                                            }
                                            for (var p = r[l][c], m = 0 === c ? 1 : r[f[c - 1]][c - 1], D = c + 1; D < t; D++)
                                                for (var d = f[D], v = c + 1; v < t; v++) r[d][v] = u(n(i(r[d][v], p), i(r[d][c], r[l][v])), m)
                                        }
                                        var g = r[f[t - 1]][t - 1];
                                        return s ? a(g) : g
                                    }(r.clone().valueOf(), s, 0);
                                    if (0 === f) return 1;
                                    throw RangeError("Matrix must be square (size: " + ev(t) + ")");
                                default:
                                    throw RangeError("Matrix must be two dimensional (size: " + ev(t) + ")")
                            }
                        }
                    })
                }),
                uK = tC("FibonacciHeap", ["smaller", "larger"], r => {
                    var {
                        smaller: t,
                        larger: e
                    } = r, n = 1 / Math.log((1 + Math.sqrt(5)) / 2);

                    function i() {
                        if (!(this instanceof i)) throw SyntaxError("Constructor must be called with the new operator");
                        this._minimum = null, this._size = 0
                    }

                    function u(r, t, e) {
                        t.left.right = t.right, t.right.left = t.left, e.degree--, e.child === t && (e.child = t.right), 0 === e.degree && (e.child = null), t.left = r, t.right = r.right, r.right = t, t.right.left = t, t.parent = null, t.mark = !1
                    }
                    i.prototype.type = "FibonacciHeap", i.prototype.isFibonacciHeap = !0, i.prototype.insert = function(r, e) {
                        var n = {
                            key: r,
                            value: e,
                            degree: 0
                        };
                        if (this._minimum) {
                            var i = this._minimum;
                            n.left = i, n.right = i.right, i.right = n, n.right.left = n, t(r, i.key) && (this._minimum = n)
                        } else n.left = n, n.right = n, this._minimum = n;
                        return this._size++, n
                    }, i.prototype.size = function() {
                        return this._size
                    }, i.prototype.clear = function() {
                        this._minimum = null, this._size = 0
                    }, i.prototype.isEmpty = function() {
                        return 0 === this._size
                    }, i.prototype.extractMinimum = function() {
                        var r = this._minimum;
                        if (null === r) return r;
                        for (var i = this._minimum, u = r.degree, a = r.child; u > 0;) {
                            var s = a.right;
                            a.left.right = a.right, a.right.left = a.left, a.left = i, a.right = i.right, i.right = a, a.right.left = a, a.parent = null, a = s, u--
                        }
                        return r.left.right = r.right, r.right.left = r.left, i = r === r.right ? null : function(r, i) {
                            var u, a = Math.floor(Math.log(i) * n) + 1,
                                s = Array(a),
                                f = 0,
                                c = r;
                            if (c)
                                for (f++, c = c.right; c !== r;) f++, c = c.right;
                            for (; f > 0;) {
                                for (var l = c.degree, h = c.right; u = s[l];) {
                                    if (e(c.key, u.key)) {
                                        var p = u;
                                        u = c, c = p
                                    }
                                    o(u, c), s[l] = null, l++
                                }
                                s[l] = c, c = h, f--
                            }
                            r = null;
                            for (var m = 0; m < a; m++)(u = s[m]) && (r ? (u.left.right = u.right, u.right.left = u.left, u.left = r, u.right = r.right, r.right = u, u.right.left = u, t(u.key, r.key) && (r = u)) : r = u);
                            return r
                        }(i = r.right, this._size), this._size--, this._minimum = i, r
                    }, i.prototype.remove = function(r) {
                        var e, n;
                        this._minimum = (e = this._minimum, r.key = -1, (n = r.parent) && t(r.key, n.key) && (u(e, r, n), function r(t, e) {
                            var n = e.parent;
                            n && (e.mark ? (u(t, e, n), r(n)) : e.mark = !0)
                        }(e, n)), t(r.key, e.key) && (e = r), e), this.extractMinimum()
                    };
                    var o = function(r, t) {
                        r.left.right = r.right, r.right.left = r.left, r.parent = t, t.child ? (r.left = t.child, r.right = t.child.right, t.child.right = r, r.right.left = r) : (t.child = r, r.right = r, r.left = r), t.degree++, r.mark = !1
                    };
                    return i
                }, {
                    isClass: !0
                }),
                u0 = tC("fix", ["typed", "ceil", "floor"], r => {
                    var {
                        typed: t,
                        ceil: e,
                        floor: n
                    } = r;
                    return t("fix", {
                        number: function(r) {
                            return r > 0 ? n(r) : e(r)
                        },
                        "number, number": function(r, t) {
                            return r > 0 ? n(r, t) : e(r, t)
                        }
                    })
                }),
                u1 = (r => {
                    var {
                        typed: t,
                        Complex: e,
                        matrix: n,
                        ceil: i,
                        floor: u,
                        equalScalar: o,
                        zeros: a,
                        DenseMatrix: s
                    } = r, f = iq({
                        typed: t,
                        DenseMatrix: s
                    }), c = iR({
                        typed: t
                    }), l = u0({
                        typed: t,
                        ceil: i,
                        floor: u
                    });
                    return t("fix", {
                        number: l.signatures.number,
                        "number, number | BigNumber": l.signatures["number,number"],
                        Complex: function(r) {
                            return new e(r.re > 0 ? Math.floor(r.re) : Math.ceil(r.re), r.im > 0 ? Math.floor(r.im) : Math.ceil(r.im))
                        },
                        "Complex, number": function(r, t) {
                            return new e(r.re > 0 ? u(r.re, t) : i(r.re, t), r.im > 0 ? u(r.im, t) : i(r.im, t))
                        },
                        "Complex, BigNumber": function(r, t) {
                            var n = t.toNumber();
                            return new e(r.re > 0 ? u(r.re, n) : i(r.re, n), r.im > 0 ? u(r.im, n) : i(r.im, n))
                        },
                        BigNumber: function(r) {
                            return r.isNegative() ? i(r) : u(r)
                        },
                        "BigNumber, number | BigNumber": function(r, t) {
                            return r.isNegative() ? i(r, t) : u(r, t)
                        },
                        Fraction: function(r) {
                            return r.s < 0 ? r.ceil() : r.floor()
                        },
                        "Fraction, number | BigNumber": function(r, t) {
                            return r.s < 0 ? i(r, t) : u(r, t)
                        },
                        "Array | Matrix": t.referToSelf(r => t => e0(t, r, !0)),
                        "Array | Matrix, number | BigNumber": t.referToSelf(r => (t, e) => e0(t, t => r(t, e), !0)),
                        "number | Complex | Fraction | BigNumber, Array": t.referToSelf(r => (t, e) => c(n(e), t, r, !0).valueOf()),
                        "number | Complex | Fraction | BigNumber, Matrix": t.referToSelf(r => (t, e) => o(t, 0) ? a(e.size(), e.storage()) : "dense" === e.storage() ? c(e, t, r, !0) : f(e, t, r, !0))
                    })
                }, "index");
            r => {
                var {
                    typed: t,
                    Index: e
                } = r;
                return t(u1, {
                    "...number | string | BigNumber | Range | Array | Matrix": function(r) {
                        var t = r.map(function(r) {
                                return rJ(r) ? r.toNumber() : rQ(r) || rG(r) ? r.map(function(r) {
                                    return rJ(r) ? r.toNumber() : r
                                }) : r
                            }),
                            n = new e;
                        return e.apply(n, t), n
                    }
                })
            };
            var u2 = "smallerEq",
                u8 = tC(u2, ["typed", "config", "matrix", "DenseMatrix", "concat"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        DenseMatrix: i,
                        concat: u
                    } = r, o = ij({
                        typed: t
                    }), a = ik({
                        typed: t,
                        DenseMatrix: i
                    }), s = iq({
                        typed: t,
                        DenseMatrix: i
                    }), f = iZ({
                        typed: t,
                        matrix: n,
                        concat: u
                    }), c = n_({
                        typed: t
                    });
                    return t(u2, u3({
                        typed: t,
                        config: e
                    }), {
                        "boolean, boolean": (r, t) => r <= t,
                        "BigNumber, BigNumber": function(r, t) {
                            return r.lte(t) || nC(r, t, e.relTol, e.absTol)
                        },
                        "bigint, bigint": (r, t) => r <= t,
                        "Fraction, Fraction": (r, t) => 1 !== r.compare(t),
                        "Complex, Complex": function() {
                            throw TypeError("No ordering relation is defined for complex numbers")
                        }
                    }, c, f({
                        SS: a,
                        DS: o,
                        Ss: s
                    }))
                }),
                u3 = tC(u2, ["typed", "config"], r => {
                    var {
                        typed: t,
                        config: e
                    } = r;
                    return t(u2, {
                        "number, number": function(r, t) {
                            return r <= t || tG(r, t, e.relTol, e.absTol)
                        }
                    })
                }),
                u9 = "unequal",
                u5 = (tC(u9, ["typed", "equalScalar"], r => {
                    var {
                        typed: t,
                        equalScalar: e
                    } = r;
                    return t(u9, {
                        "any, any": function(r, t) {
                            return null === r ? null !== t : null === t ? null !== r : void 0 === r ? void 0 !== t : void 0 === t ? void 0 !== r : !e(r, t)
                        }
                    })
                }), "range"),
                u7 = tC(u5, ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], r => {
                    var {
                        typed: t,
                        config: e,
                        matrix: n,
                        bignumber: i,
                        smaller: u,
                        smallerEq: o,
                        larger: a,
                        largerEq: s,
                        add: f,
                        isPositive: c
                    } = r;
                    return t(u5, {
                        string: h,
                        "string, boolean": h,
                        "number, number": function(r, t) {
                            return l(p(r, t, 1, !1))
                        },
                        "number, number, number": function(r, t, e) {
                            return l(p(r, t, e, !1))
                        },
                        "number, number, boolean": function(r, t, e) {
                            return l(p(r, t, 1, e))
                        },
                        "number, number, number, boolean": function(r, t, e, n) {
                            return l(p(r, t, e, n))
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            var e = r.constructor;
                            return l(p(r, t, new e(1), !1))
                        },
                        "BigNumber, BigNumber, BigNumber": function(r, t, e) {
                            return l(p(r, t, e, !1))
                        },
                        "BigNumber, BigNumber, boolean": function(r, t, e) {
                            var n = r.constructor;
                            return l(p(r, t, new n(1), e))
                        },
                        "BigNumber, BigNumber, BigNumber, boolean": function(r, t, e, n) {
                            return l(p(r, t, e, n))
                        },
                        "Unit, Unit, Unit": function(r, t, e) {
                            return l(p(r, t, e, !1))
                        },
                        "Unit, Unit, Unit, boolean": function(r, t, e, n) {
                            return l(p(r, t, e, n))
                        }
                    });

                    function l(r) {
                        return "Matrix" === e.matrix ? n ? n(r) : id() : r
                    }

                    function h(r, t) {
                        var n = function(r) {
                            var t = r.split(":").map(function(r) {
                                return Number(r)
                            });
                            if (t.some(function(r) {
                                    return isNaN(r)
                                })) return null;
                            switch (t.length) {
                                case 2:
                                    return {
                                        start: t[0],
                                        end: t[1],
                                        step: 1
                                    };
                                case 3:
                                    return {
                                        start: t[0],
                                        end: t[2],
                                        step: t[1]
                                    };
                                default:
                                    return null
                            }
                        }(r);
                        if (!n) throw SyntaxError('String "' + r + '" is no valid range');
                        return "BigNumber" === e.number ? (void 0 === i && im(), l(p(i(n.start), i(n.end), i(n.step)), t)) : l(p(n.start, n.end, n.step, t))
                    }

                    function p(r, t, e, n) {
                        for (var i = [], l = c(e) ? n ? o : u : n ? s : a, h = r; l(h, t);) i.push(h), h = f(h, e);
                        return i
                    }
                }),
                u4 = "setDifference",
                u6 = (r => {
                    var {
                        typed: t,
                        size: e,
                        subset: n,
                        compareNatural: i,
                        Index: u,
                        DenseMatrix: o
                    } = r;
                    return t(u4, {
                        "Array | Matrix, Array | Matrix": function(r, t) {
                            var a;
                            if (0 === n(e(r), new u(0))) a = [];
                            else {
                                if (0 === n(e(t), new u(0))) return ez(r.toArray());
                                var s, f = eO(ez(Array.isArray(r) ? r : r.toArray()).sort(i)),
                                    c = eO(ez(Array.isArray(t) ? t : t.toArray()).sort(i));
                                a = [];
                                for (var l = 0; l < f.length; l++) {
                                    s = !1;
                                    for (var h = 0; h < c.length; h++)
                                        if (0 === i(f[l].value, c[h].value) && f[l].identifier === c[h].identifier) {
                                            s = !0;
                                            break
                                        }
                                    s || a.push(f[l])
                                }
                            }
                            return Array.isArray(r) && Array.isArray(t) ? eI(a) : new o(eI(a))
                        }
                    })
                }, tC("Spa", ["addScalar", "equalScalar", "FibonacciHeap"], r => {
                    var {
                        addScalar: t,
                        equalScalar: e,
                        FibonacciHeap: n
                    } = r;

                    function i() {
                        if (!(this instanceof i)) throw SyntaxError("Constructor must be called with the new operator");
                        this._values = [], this._heap = new n
                    }
                    return i.prototype.type = "Spa", i.prototype.isSpa = !0, i.prototype.set = function(r, t) {
                        if (this._values[r]) this._values[r].value = t;
                        else {
                            var e = this._heap.insert(r, t);
                            this._values[r] = e
                        }
                    }, i.prototype.get = function(r) {
                        var t = this._values[r];
                        return t ? t.value : 0
                    }, i.prototype.accumulate = function(r, e) {
                        var n = this._values[r];
                        n ? n.value = t(n.value, e) : (n = this._heap.insert(r, e), this._values[r] = n)
                    }, i.prototype.forEach = function(r, t, n) {
                        var i = this._heap,
                            u = this._values,
                            o = [],
                            a = i.extractMinimum();
                        for (a && o.push(a); a && a.key <= t;) a.key >= r && !e(a.value, 0) && n(a.key, a.value, this), (a = i.extractMinimum()) && o.push(a);
                        for (var s = 0; s < o.length; s++) {
                            var f = o[s];
                            u[(a = i.insert(f.key, f.value)).key] = a
                        }
                    }, i.prototype.swap = function(r, t) {
                        var e = this._values[r],
                            n = this._values[t];
                        if (!e && n) e = this._heap.insert(r, n.value), this._heap.remove(n), this._values[r] = e, this._values[t] = void 0;
                        else if (e && !n) n = this._heap.insert(t, e.value), this._heap.remove(e), this._values[t] = n, this._values[r] = void 0;
                        else if (e && n) {
                            var i = e.value;
                            e.value = n.value, n.value = i
                        }
                    }, i
                }, {
                    isClass: !0
                })),
                or = "column",
                ot = tC(or, ["typed", "Index", "matrix", "range"], r => {
                    var {
                        typed: t,
                        Index: e,
                        matrix: n,
                        range: i
                    } = r;
                    return t(or, {
                        "Matrix, number": u,
                        "Array, number": function(r, t) {
                            return u(n(tw(r)), t).valueOf()
                        }
                    });

                    function u(r, t) {
                        if (2 !== r.size().length) throw Error("Only two dimensional matrix is supported");
                        eC(t, r.size()[1]);
                        var u = new e(i(0, r.size()[0]), t),
                            o = r.subset(u);
                        return rG(o) ? o : n([
                            [o]
                        ])
                    }
                }),
                oe = tC("inv", ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        divideScalar: n,
                        addScalar: i,
                        multiply: u,
                        unaryMinus: o,
                        det: a,
                        identity: s,
                        abs: f
                    } = r;
                    return t("inv", {
                        "Array | Matrix": function(r) {
                            var t = rG(r) ? r.size() : eA(r);
                            switch (t.length) {
                                case 1:
                                    if (1 === t[0]) {
                                        if (rG(r)) return e([n(1, r.valueOf()[0])]);
                                        return [n(1, r[0])]
                                    }
                                    throw RangeError("Matrix must be square (size: " + ev(t) + ")");
                                case 2:
                                    var i = t[0],
                                        u = t[1];
                                    if (i === u) {
                                        if (rG(r)) return e(c(r.valueOf(), i, u), r.storage());
                                        return c(r, i, u)
                                    }
                                    throw RangeError("Matrix must be square (size: " + ev(t) + ")");
                                default:
                                    throw RangeError("Matrix must be two dimensional (size: " + ev(t) + ")")
                            }
                        },
                        any: function(r) {
                            return n(1, r)
                        }
                    });

                    function c(r, t, e) {
                        if (1 === t) {
                            if (0 === (p = r[0][0])) throw Error("Cannot calculate inverse, determinant is zero");
                            return [
                                [n(1, p)]
                            ]
                        }
                        if (2 === t) {
                            var c, l, h, p, m, D = a(r);
                            if (0 === D) throw Error("Cannot calculate inverse, determinant is zero");
                            return [
                                [n(r[1][1], D), n(o(r[0][1]), D)],
                                [n(o(r[1][0]), D), n(r[0][0], D)]
                            ]
                        }
                        var d = r.concat();
                        for (c = 0; c < t; c++) d[c] = d[c].concat();
                        for (var v = s(t).valueOf(), g = 0; g < e; g++) {
                            var y = f(d[g][g]),
                                b = g;
                            for (c = g + 1; c < t;) f(d[c][g]) > y && (y = f(d[c][g]), b = c), c++;
                            if (0 === y) throw Error("Cannot calculate inverse, determinant is zero");
                            (c = b) !== g && (m = d[g], d[g] = d[c], d[c] = m, m = v[g], v[g] = v[c], v[c] = m);
                            var x = d[g],
                                w = v[g];
                            for (c = 0; c < t; c++) {
                                var A = d[c],
                                    E = v[c];
                                if (c !== g) {
                                    if (0 !== A[g]) {
                                        for (h = n(o(A[g]), x[g]), l = g; l < e; l++) A[l] = i(A[l], u(h, x[l]));
                                        for (l = 0; l < e; l++) E[l] = i(E[l], u(h, w[l]))
                                    }
                                } else {
                                    for (h = x[g], l = g; l < e; l++) A[l] = n(A[l], h);
                                    for (l = 0; l < e; l++) E[l] = n(E[l], h)
                                }
                            }
                        }
                        return v
                    }
                }),
                on = tC("lup", ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"], r => {
                    var {
                        typed: t,
                        matrix: e,
                        abs: n,
                        addScalar: i,
                        divideScalar: u,
                        multiplyScalar: o,
                        subtractScalar: a,
                        larger: s,
                        equalScalar: f,
                        unaryMinus: c,
                        DenseMatrix: l,
                        SparseMatrix: h,
                        Spa: p
                    } = r;
                    return t("lup", {
                        DenseMatrix: function(r) {
                            return m(r)
                        },
                        SparseMatrix: function(r) {
                            return function(r) {
                                var t, e, i, a = r._size[0],
                                    l = r._size[1],
                                    m = Math.min(a, l),
                                    D = r._values,
                                    d = r._index,
                                    v = r._ptr,
                                    g = [],
                                    y = [],
                                    b = [],
                                    x = [a, m],
                                    w = [],
                                    A = [],
                                    E = [],
                                    F = [m, l],
                                    C = [],
                                    _ = [];
                                for (t = 0; t < a; t++) C[t] = t, _[t] = t;
                                var M = function(r, t) {
                                    var e = _[r],
                                        n = _[t];
                                    C[e] = t, C[n] = r, _[r] = n, _[t] = e
                                };
                                for (e = 0; e < l; e++) ! function() {
                                    var r = new p;
                                    e < a && (b.push(g.length), g.push(1), y.push(e)), E.push(w.length);
                                    var l = v[e],
                                        m = v[e + 1];
                                    for (i = l; i < m; i++) t = d[i], r.set(C[t], D[i]);
                                    e > 0 && r.forEach(0, e - 1, function(t, e) {
                                        h._forEachRow(t, g, y, b, function(n, i) {
                                            n > t && r.accumulate(n, c(o(i, e)))
                                        })
                                    });
                                    var _ = e,
                                        N = r.get(e),
                                        B = n(N);
                                    r.forEach(e + 1, a - 1, function(r, t) {
                                        var e = n(t);
                                        s(e, B) && (_ = r, B = e, N = t)
                                    }), e !== _ && (h._swapRows(e, _, x[1], g, y, b), h._swapRows(e, _, F[1], w, A, E), r.swap(e, _), M(e, _)), r.forEach(0, a - 1, function(r, t) {
                                        r <= e ? (w.push(t), A.push(r)) : f(t = u(t, N), 0) || (g.push(t), y.push(r))
                                    })
                                }();
                                return E.push(w.length), b.push(g.length), {
                                    L: new h({
                                        values: g,
                                        index: y,
                                        ptr: b,
                                        size: x
                                    }),
                                    U: new h({
                                        values: w,
                                        index: A,
                                        ptr: E,
                                        size: F
                                    }),
                                    p: C,
                                    toString: function() {
                                        return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
                                    }
                                }
                            }(r)
                        },
                        Array: function(r) {
                            var t = m(e(r));
                            return {
                                L: t.L.valueOf(),
                                U: t.U.valueOf(),
                                p: t.p
                            }
                        }
                    });

                    function m(r) {
                        var t, e, c, h = r._size[0],
                            p = r._size[1],
                            m = Math.min(h, p),
                            D = tw(r._data),
                            d = [],
                            v = [h, m],
                            g = [],
                            y = [m, p],
                            b = [];
                        for (t = 0; t < h; t++) b[t] = t;
                        for (e = 0; e < p; e++) {
                            if (e > 0)
                                for (t = 0; t < h; t++) {
                                    var x = Math.min(t, e),
                                        w = 0;
                                    for (c = 0; c < x; c++) w = i(w, o(D[t][c], D[c][e]));
                                    D[t][e] = a(D[t][e], w)
                                }
                            var A = e,
                                E = 0,
                                F = 0;
                            for (t = e; t < h; t++) {
                                var C = D[t][e],
                                    _ = n(C);
                                s(_, E) && (A = t, E = _, F = C)
                            }
                            if (e !== A && (b[e] = [b[A], b[A] = b[e]][0], l._swapRows(e, A, D)), e < h)
                                for (t = e + 1; t < h; t++) f(D[t][e], 0) || (D[t][e] = u(D[t][e], F))
                        }
                        for (e = 0; e < p; e++)
                            for (t = 0; t < h; t++) {
                                if (0 === e && (t < p && (g[t] = []), d[t] = []), t < e) {
                                    t < p && (g[t][e] = D[t][e]), e < h && (d[t][e] = 0);
                                    continue
                                }
                                if (t === e) {
                                    t < p && (g[t][e] = D[t][e]), e < h && (d[t][e] = 1);
                                    continue
                                }
                                t < p && (g[t][e] = 0), e < h && (d[t][e] = D[t][e])
                            }
                        var M = new l({
                                data: d,
                                size: v
                            }),
                            N = new l({
                                data: g,
                                size: y
                            }),
                            B = [];
                        for (t = 0, m = b.length; t < m; t++) B[b[t]] = t;
                        return {
                            L: M,
                            U: N,
                            p: B,
                            toString: function() {
                                return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
                            }
                        }
                    }
                }),
                oi = tC("pow", ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], r => {
                    var {
                        typed: t,
                        config: e,
                        identity: n,
                        multiply: i,
                        matrix: u,
                        inv: o,
                        number: a,
                        fraction: s,
                        Complex: f
                    } = r;
                    return t("pow", {
                        "number, number": c,
                        "Complex, Complex": function(r, t) {
                            return r.pow(t)
                        },
                        "BigNumber, BigNumber": function(r, t) {
                            return t.isInteger() || r >= 0 || e.predictable ? r.pow(t) : new f(r.toNumber(), 0).pow(t.toNumber(), 0)
                        },
                        "bigint, bigint": (r, t) => r ** t,
                        "Fraction, Fraction": function(r, t) {
                            var n = r.pow(t);
                            if (null != n) return n;
                            if (!e.predictable) return c(r.valueOf(), t.valueOf());
                            throw Error("Result of pow is non-rational and cannot be expressed as a fraction")
                        },
                        "Array, number": l,
                        "Array, BigNumber": function(r, t) {
                            return l(r, t.toNumber())
                        },
                        "Matrix, number": h,
                        "Matrix, BigNumber": function(r, t) {
                            return h(r, t.toNumber())
                        },
                        "Unit, number | BigNumber": function(r, t) {
                            return r.pow(t)
                        }
                    });

                    function c(r, t) {
                        if (e.predictable && !tP(t) && r < 0) try {
                            var n = s(t),
                                i = a(n);
                            if ((t === i || 1e-14 > Math.abs((t - i) / t)) && n.d % 2 == 1) return (n.n % 2 == 0 ? 1 : -1) * Math.pow(-r, t)
                        } catch (r) {}
                        return e.predictable && (r < -1 && t === 1 / 0 || r > -1 && r < 0 && t === -1 / 0) ? NaN : tP(t) || r >= 0 || e.predictable ? no(r, t) : r * r < 1 && t === 1 / 0 || r * r > 1 && t === -1 / 0 ? 0 : new f(r, 0).pow(t, 0)
                    }

                    function l(r, t) {
                        if (!tP(t)) throw TypeError("For A^b, b must be an integer (value is " + t + ")");
                        var e = eA(r);
                        if (2 !== e.length) throw Error("For A^b, A must be 2 dimensional (A has " + e.length + " dimensions)");
                        if (e[0] !== e[1]) throw Error("For A^b, A must be square (size is " + e[0] + "x" + e[1] + ")");
                        if (t < 0) try {
                            return l(o(r), -t)
                        } catch (r) {
                            if ("Cannot calculate inverse, determinant is zero" === r.message) throw TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + t + ")");
                            throw r
                        }
                        for (var u = n(e[0]).valueOf(), a = r; t >= 1;)(1 & t) == 1 && (u = i(a, u)), t >>= 1, a = i(a, a);
                        return u
                    }

                    function h(r, t) {
                        return u(l(r.valueOf(), t))
                    }
                });

            function ou(r) {
                return (ou = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                    return typeof r
                } : function(r) {
                    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
                })(r)
            }

            function oo(r, t) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(r);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })), e.push.apply(e, n)
                }
                return e
            }

            function oa(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oo(Object(e), !0).forEach(function(t) {
                        ! function(r, t, e) {
                            var n;
                            (n = function(r, t) {
                                if ("object" != ou(r) || !r) return r;
                                var e = r[Symbol.toPrimitive];
                                if (void 0 !== e) {
                                    var n = e.call(r, t || "default");
                                    if ("object" != ou(n)) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(r)
                            }(t, "string"), (t = "symbol" == ou(n) ? n : n + "") in r) ? Object.defineProperty(r, t, {
                                value: e,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }): r[t] = e
                        }(r, t, e[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : oo(Object(e)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                    })
                }
                return r
            }
            var os = "gamma",
                of = tC(os, ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"], r => {
                    var {
                        typed: t,
                        config: e,
                        multiplyScalar: n,
                        pow: i,
                        BigNumber: u,
                        Complex: o
                    } = r;
                    return t(os, {
                        number: nV,
                        Complex: function r(t) {
                            if (0 === t.im) return nV(t.re);
                            if (t.re < .5) {
                                var e = new o(1 - t.re, -t.im),
                                    n = new o(Math.PI * t.re, Math.PI * t.im);
                                return new o(Math.PI).div(n.sin()).div(r(e))
                            }
                            t = new o(t.re - 1, t.im);
                            for (var i = new o(n$[0], 0), u = 1; u < n$.length; ++u) {
                                var a = new o(n$[u], 0);
                                i = i.add(a.div(t.add(u)))
                            }
                            var s = new o(t.re + nJ + .5, t.im),
                                f = s.pow(t.add(.5)),
                                c = s.neg().exp();
                            return i.mul(Math.sqrt(2 * Math.PI)).mul(f).mul(c)
                        },
                        BigNumber: function(r) {
                            if (r.isInteger()) return r.isNegative() || r.isZero() ? new u(1 / 0) : function r(t) {
                                if (t < 8) return new u([1, 1, 2, 6, 24, 120, 720, 5040][t]);
                                var n = e.precision + (0 | Math.log(t.toNumber())),
                                    i = u.clone({
                                        precision: n
                                    });
                                if (t % 2 == 1) return t.times(r(new u(t - 1)));
                                for (var o = t, a = new i(t), s = t.toNumber(); o > 2;) o -= 2, s += o, a = a.times(s);
                                return new u(a.toPrecision(u.precision))
                            }(r.minus(1));
                            if (!r.isFinite()) return new u(r.isNegative() ? NaN : 1 / 0);
                            throw Error("Integer BigNumber expected")
                        }
                    })
                }),
                oc = (r => {
                    var {
                        typed: t,
                        matrix: e,
                        multiply: n,
                        equalScalar: i,
                        divideScalar: u,
                        inv: o
                    } = r, a = iP({
                        typed: t,
                        equalScalar: i
                    }), s = iR({
                        typed: t
                    });
                    return t("divide", tA({
                        "Array | Matrix, Array | Matrix": function(r, t) {
                            return n(r, o(t))
                        },
                        "DenseMatrix, any": function(r, t) {
                            return s(r, t, u, !1)
                        },
                        "SparseMatrix, any": function(r, t) {
                            return a(r, t, u, !1)
                        },
                        "Array, any": function(r, t) {
                            return s(e(r), t, u, !1).valueOf()
                        },
                        "any, Array | Matrix": function(r, t) {
                            return n(r, o(t))
                        }
                    }, u.signatures))
                }, "factorial");

            function ol(r, t) {
                var e, n = t.length,
                    i = [];
                if (r)
                    for (e = 0; e < n; e++) i[r[e]] = t[e];
                else
                    for (e = 0; e < n; e++) i[e] = t[e];
                return i
            }
            r => {
                var {
                    typed: t,
                    gamma: e
                } = r;
                return t(oc, {
                    number: function(r) {
                        if (r < 0) throw Error("Value must be non-negative");
                        return e(r + 1)
                    },
                    BigNumber: function(r) {
                        if (r.isNegative()) throw Error("Value must be non-negative");
                        return e(r.plus(1))
                    },
                    "Array | Matrix": t.referToSelf(r => t => e0(t, r))
                })
            };
            var oh = "lusolve";
            r => {
                var {
                    typed: t,
                    matrix: e,
                    lup: n,
                    slu: i,
                    usolve: u,
                    lsolve: o,
                    DenseMatrix: a
                } = r, s = i1({
                    DenseMatrix: a
                });
                return t(oh, {
                    "Array, Array | Matrix": function(r, t) {
                        var i = n(r = e(r));
                        return c(i.L, i.U, i.p, null, t).valueOf()
                    },
                    "DenseMatrix, Array | Matrix": function(r, t) {
                        var e = n(r);
                        return c(e.L, e.U, e.p, null, t)
                    },
                    "SparseMatrix, Array | Matrix": function(r, t) {
                        var e = n(r);
                        return c(e.L, e.U, e.p, null, t)
                    },
                    "SparseMatrix, Array | Matrix, number, number": function(r, t, e, n) {
                        var u = i(r, e, n);
                        return c(u.L, u.U, u.p, u.q, t)
                    },
                    "Object, Array | Matrix": function(r, t) {
                        return c(r.L, r.U, r.p, r.q, t)
                    }
                });

                function f(r) {
                    if (rG(r)) return r;
                    if (rQ(r)) return e(r);
                    throw TypeError("Invalid Matrix LU decomposition")
                }

                function c(r, t, e, n, i) {
                    r = f(r), t = f(t), e && ((i = s(r, i, !0))._data = ol(e, i._data));
                    var a = u(t, o(r, i));
                    return n && (a._data = ol(n, a._data)), a
                }
            };
            var op = tC("eigs", ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], r => {
                    var {
                        config: t,
                        typed: e,
                        matrix: i,
                        addScalar: u,
                        subtract: o,
                        equal: a,
                        abs: s,
                        atan: f,
                        cos: c,
                        sin: l,
                        multiplyScalar: h,
                        divideScalar: p,
                        inv: m,
                        bignumber: D,
                        multiply: d,
                        add: v,
                        larger: g,
                        column: y,
                        flatten: b,
                        number: x,
                        complex: w,
                        sqrt: A,
                        diag: E,
                        size: F,
                        reshape: C,
                        qr: _,
                        usolve: M,
                        usolveAll: N,
                        im: B,
                        re: S,
                        smaller: T,
                        matrixFromColumns: z,
                        dot: O
                    } = r, I = function(r) {
                        var {
                            config: t,
                            addScalar: e,
                            subtract: n,
                            abs: i,
                            atan: u,
                            cos: o,
                            sin: a,
                            multiplyScalar: s,
                            inv: f,
                            bignumber: c,
                            multiply: l,
                            add: h
                        } = r;

                        function p(r) {
                            for (var t = r.length, e = 0, n = [0, 1], i = 0; i < t; i++)
                                for (var u = i + 1; u < t; u++) Math.abs(e) < Math.abs(r[i][u]) && (e = Math.abs(r[i][u]), n = [i, u]);
                            return [n, e]
                        }

                        function m(r) {
                            for (var t = r.length, e = 0, n = [0, 1], u = 0; u < t; u++)
                                for (var o = u + 1; o < t; o++) i(e) < i(r[u][o]) && (e = i(r[u][o]), n = [u, o]);
                            return [n, e]
                        }

                        function D(r, t, e) {
                            var n, u = r.length,
                                o = Array(u);
                            if (e) {
                                n = Array(u);
                                for (var a = 0; a < u; a++) n[a] = Array(u)
                            }
                            for (var s = 0; s < u; s++) {
                                for (var f = 0, c = r[0], l = 0; l < r.length; l++) i(r[l]) < i(c) && (c = r[f = l]);
                                if (o[s] = r.splice(f, 1)[0], e)
                                    for (var h = 0; h < u; h++) n[s][h] = t[h][f], t[h].splice(f, 1)
                            }
                            if (!e) return {
                                values: o
                            };
                            var p = n.map((r, t) => ({
                                value: o[t],
                                vector: r
                            }));
                            return {
                                values: o,
                                eigenvectors: p
                            }
                        }
                        return function(r, d) {
                            var v = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.relTol,
                                g = arguments.length > 3 ? arguments[3] : void 0,
                                y = arguments.length > 4 ? arguments[4] : void 0;
                            if ("number" === g) return function(r, e, n) {
                                var i, u, o = r.length,
                                    a = Math.abs(e / o);
                                if (n) {
                                    u = Array(o);
                                    for (var s = 0; s < o; s++) u[s] = Array(o).fill(0), u[s][s] = 1
                                }
                                for (var f = p(r); Math.abs(f[1]) >= Math.abs(a);) {
                                    var c, l, h, m = f[0][0],
                                        d = f[0][1];
                                    c = r[m][m], l = r[d][d], h = r[m][d], r = function(r, t, e, n) {
                                        for (var i = r.length, u = Math.cos(t), o = Math.sin(t), a = u * u, s = o * o, f = Array(i).fill(0), c = Array(i).fill(0), l = a * r[e][e] - 2 * u * o * r[e][n] + s * r[n][n], h = s * r[e][e] + 2 * u * o * r[e][n] + a * r[n][n], p = 0; p < i; p++) f[p] = u * r[e][p] - o * r[n][p], c[p] = o * r[e][p] + u * r[n][p];
                                        r[e][e] = l, r[n][n] = h, r[e][n] = 0, r[n][e] = 0;
                                        for (var m = 0; m < i; m++) m !== e && m !== n && (r[e][m] = f[m], r[m][e] = f[m], r[n][m] = c[m], r[m][n] = c[m]);
                                        return r
                                    }(r, i = Math.abs(l - c) <= t.relTol ? Math.PI / 4 : .5 * Math.atan(2 * h / (l - c)), m, d), n && (u = function(r, t, e, n) {
                                        for (var i = r.length, u = Math.cos(t), o = Math.sin(t), a = Array(i).fill(0), s = Array(i).fill(0), f = 0; f < i; f++) a[f] = u * r[f][e] - o * r[f][n], s[f] = o * r[f][e] + u * r[f][n];
                                        for (var c = 0; c < i; c++) r[c][e] = a[c], r[c][n] = s[c];
                                        return r
                                    }(u, i, m, d)), f = p(r)
                                }
                                for (var v = Array(o).fill(0), g = 0; g < o; g++) v[g] = r[g][g];
                                return D(tw(v), u, n)
                            }(r, v, y);
                            if ("BigNumber" === g) return function(r, p, d) {
                                var v, g, y = r.length,
                                    b = i(p / y);
                                if (d) {
                                    g = Array(y);
                                    for (var x = 0; x < y; x++) g[x] = Array(y).fill(0), g[x][x] = 1
                                }
                                for (var w = m(r); i(w[1]) >= i(b);) {
                                    var A = w[0][0],
                                        E = w[0][1];
                                    v = function(r, e, o) {
                                        var a = n(e, r);
                                        return i(a) <= t.relTol ? c(-1).acos().div(4) : s(.5, u(l(2, o, f(a))))
                                    }(r[A][A], r[E][E], r[A][E]), r = function(r, t, i, u) {
                                        for (var f = r.length, p = c(o(t)), m = c(a(t)), D = s(p, p), d = s(m, m), v = Array(f).fill(c(0)), g = Array(f).fill(c(0)), y = l(c(2), p, m, r[i][u]), b = e(n(s(D, r[i][i]), y), s(d, r[u][u])), x = h(s(d, r[i][i]), y, s(D, r[u][u])), w = 0; w < f; w++) v[w] = n(s(p, r[i][w]), s(m, r[u][w])), g[w] = e(s(m, r[i][w]), s(p, r[u][w]));
                                        r[i][i] = b, r[u][u] = x, r[i][u] = c(0), r[u][i] = c(0);
                                        for (var A = 0; A < f; A++) A !== i && A !== u && (r[i][A] = v[A], r[A][i] = v[A], r[u][A] = g[A], r[A][u] = g[A]);
                                        return r
                                    }(r, v, A, E), d && (g = function(r, t, i, u) {
                                        for (var f = r.length, l = o(t), h = a(t), p = Array(f).fill(c(0)), m = Array(f).fill(c(0)), D = 0; D < f; D++) p[D] = n(s(l, r[D][i]), s(h, r[D][u])), m[D] = e(s(h, r[D][i]), s(l, r[D][u]));
                                        for (var d = 0; d < f; d++) r[d][i] = p[d], r[d][u] = m[d];
                                        return r
                                    }(g, v, A, E)), w = m(r)
                                }
                                for (var F = Array(y).fill(0), C = 0; C < y; C++) F[C] = r[C][C];
                                return D(tw(F), g, d)
                            }(r, v, y);
                            throw TypeError("Unsupported data type: " + g)
                        }
                    }({
                        config: t,
                        addScalar: u,
                        subtract: o,
                        column: y,
                        flatten: b,
                        equal: a,
                        abs: s,
                        atan: f,
                        cos: c,
                        sin: l,
                        multiplyScalar: h,
                        inv: m,
                        bignumber: D,
                        complex: w,
                        multiply: d,
                        add: v
                    }), j = function(r) {
                        var {
                            addScalar: t,
                            subtract: e,
                            flatten: n,
                            multiply: i,
                            multiplyScalar: u,
                            divideScalar: o,
                            sqrt: a,
                            abs: s,
                            bignumber: f,
                            diag: c,
                            size: l,
                            reshape: h,
                            inv: p,
                            qr: m,
                            usolve: D,
                            usolveAll: d,
                            equal: v,
                            complex: g,
                            larger: y,
                            smaller: b,
                            matrixFromColumns: x,
                            dot: w
                        } = r;

                        function A(r, t) {
                            for (var e = 0; e < r.length; e++) r[e].push(...Array(t - r[e].length).fill(0));
                            for (var n = r.length; n < t; n++) r.push(Array(t).fill(0)), r[n][n] = 1;
                            return r
                        }

                        function E(r, t) {
                            var n = l(r);
                            for (var u of t) r = e(r, i(o(w(u = h(u, n), r), w(u, u)), u));
                            return r
                        }

                        function F(r) {
                            return s(a(w(r, r)))
                        }

                        function C(r, t) {
                            return i(o("BigNumber" === t ? f(1) : "Complex" === t ? g(1) : 1, F(r)), r)
                        }
                        return function(r, l, h, x) {
                            var w = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                                _ = function(r, e, n, i, a) {
                                    var l, h = "BigNumber" === i,
                                        p = h ? f(0) : 0,
                                        m = h ? f(1) : "Complex" === i ? g(1) : 1,
                                        D = h ? f(1) : 1,
                                        d = h ? f(10) : 2,
                                        x = u(d, d);
                                    a && (l = Array(e).fill(m));
                                    for (var w = !1; !w;) {
                                        w = !0;
                                        for (var A = 0; A < e; A++) {
                                            for (var E = p, F = p, C = 0; C < e; C++) A !== C && (E = t(E, s(r[C][A])), F = t(F, s(r[A][C])));
                                            if (!v(E, 0) && !v(F, 0)) {
                                                for (var _ = D, M = E, N = o(F, d), B = u(F, d); b(M, N);) M = u(M, x), _ = u(_, d);
                                                for (; y(M, B);) M = o(M, x), _ = o(_, d);
                                                if (b(o(t(M, F), _), u(t(E, F), .95))) {
                                                    w = !1;
                                                    for (var S = o(1, _), T = 0; T < e; T++) A !== T && (r[A][T] = u(r[A][T], S), r[T][A] = u(r[T][A], _));
                                                    a && (l[A] = u(l[A], S))
                                                }
                                            }
                                        }
                                    }
                                    return a ? c(l) : null
                                }(r, l, 0, x, w);
                            ! function(r, n, i, a, c, l) {
                                var h = "BigNumber" === a,
                                    p = h ? f(0) : "Complex" === a ? g(0) : 0;
                                h && (i = f(i));
                                for (var m = 0; m < n - 2; m++) {
                                    for (var D = 0, d = p, v = m + 1; v < n; v++) {
                                        var y = r[v][m];
                                        b(s(d), s(y)) && (d = y, D = v)
                                    }
                                    if (!b(s(d), i)) {
                                        if (D !== m + 1) {
                                            var x = r[D];
                                            r[D] = r[m + 1], r[m + 1] = x;
                                            for (var w = 0; w < n; w++) {
                                                var A = r[w][D];
                                                r[w][D] = r[w][m + 1], r[w][m + 1] = A
                                            }
                                            if (c) {
                                                var E = l[D];
                                                l[D] = l[m + 1], l[m + 1] = E
                                            }
                                        }
                                        for (var F = m + 2; F < n; F++) {
                                            var C = o(r[F][m], d);
                                            if (0 !== C) {
                                                for (var _ = 0; _ < n; _++) r[F][_] = e(r[F][_], u(C, r[m + 1][_]));
                                                for (var M = 0; M < n; M++) r[M][m + 1] = t(r[M][m + 1], u(C, r[M][F]));
                                                if (c)
                                                    for (var N = 0; N < n; N++) l[F][N] = e(l[F][N], u(C, l[m + 1][N]))
                                            }
                                        }
                                    }
                                }
                            }(r, l, h, x, w, _);
                            var {
                                values: M,
                                C: N
                            } = function(r, n, o, l, h) {
                                var p = "BigNumber" === l,
                                    D = "Complex" === l,
                                    d = p ? f(1) : D ? g(1) : 1;
                                p && (o = f(o));
                                for (var v = tw(r), x = [], w = n, E = [], F = h ? c(Array(n).fill(d)) : void 0, C = h ? c(Array(w).fill(d)) : void 0, _ = 0; _ <= 100;) {
                                    _ += 1;
                                    for (var M = v[w - 1][w - 1], N = 0; N < w; N++) v[N][N] = e(v[N][N], M);
                                    var {
                                        Q: B,
                                        R: S
                                    } = m(v);
                                    v = i(S, B);
                                    for (var T = 0; T < w; T++) v[T][T] = t(v[T][T], M);
                                    if (h && (C = i(C, B)), 1 === w || b(s(v[w - 1][w - 2]), o)) {
                                        _ = 0, x.push(v[w - 1][w - 1]), h && (E.unshift([
                                            [1]
                                        ]), A(C, n), F = i(F, C), w > 1 && (C = c(Array(w - 1).fill(d)))), w -= 1, v.pop();
                                        for (var z = 0; z < w; z++) v[z].pop()
                                    } else if (2 === w || b(s(v[w - 2][w - 3]), o)) {
                                        _ = 0;
                                        var O = function(r, n, i, o) {
                                            var s = t(r, o),
                                                f = e(u(r, o), u(n, i)),
                                                c = u(s, .5),
                                                l = u(a(e(u(s, s), u(4, f))), .5);
                                            return [t(c, l), e(c, l)]
                                        }(v[w - 2][w - 2], v[w - 2][w - 1], v[w - 1][w - 2], v[w - 1][w - 1]);
                                        x.push(...O), h && (E.unshift(function(r, t, n, i, u, o, a, c) {
                                            var l = "BigNumber" === c,
                                                h = "Complex" === c,
                                                p = l ? f(0) : h ? g(0) : 0,
                                                m = l ? f(1) : h ? g(1) : 1;
                                            if (b(s(n), a)) return [
                                                [m, p],
                                                [p, m]
                                            ];
                                            if (y(s(e(u, o)), a)) return [
                                                [e(u, i), e(o, i)],
                                                [n, n]
                                            ];
                                            var D = e(r, u),
                                                d = e(i, u);
                                            return b(s(t), a) && b(s(d), a) ? [
                                                [D, m],
                                                [n, p]
                                            ] : [
                                                [t, p],
                                                [d, m]
                                            ]
                                        }(v[w - 2][w - 2], v[w - 2][w - 1], v[w - 1][w - 2], v[w - 1][w - 1], O[0], O[1], o, l)), A(C, n), F = i(F, C), w > 2 && (C = c(Array(w - 2).fill(d)))), w -= 2, v.pop(), v.pop();
                                        for (var I = 0; I < w; I++) v[I].pop(), v[I].pop()
                                    }
                                    if (0 === w) break
                                }
                                if (x.sort((r, t) => +e(s(r), s(t))), _ > 100) {
                                    var j = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + x.join(", "));
                                    throw j.values = x, j.vectors = [], j
                                }
                                return {
                                    values: x,
                                    C: h ? i(F, function(r, t) {
                                        for (var e = [], n = 0; n < t; n++) e[n] = Array(t).fill(0);
                                        var i = 0;
                                        for (var u of r) {
                                            for (var o = u.length, a = 0; a < o; a++)
                                                for (var s = 0; s < o; s++) e[i + a][i + s] = u[a][s];
                                            i += o
                                        }
                                        return e
                                    }(E, n)) : void 0
                                }
                            }(r, l, h, x, w);
                            if (w) {
                                var B = function(r, t, u, o, a, s, l) {
                                    var h = i(p(u), r, u),
                                        m = "BigNumber" === l,
                                        x = "Complex" === l,
                                        w = m ? f(0) : x ? g(0) : 0,
                                        A = m ? f(1) : x ? g(1) : 1,
                                        _ = [],
                                        M = [];
                                    for (var N of a) {
                                        var B = function(r, t, e) {
                                            for (var n = 0; n < r.length; n++)
                                                if (e(r[n], t)) return n;
                                            return -1
                                        }(_, N, v); - 1 === B ? (_.push(N), M.push(1)) : M[B] += 1
                                    }
                                    for (var S = [], T = _.length, z = Array(t).fill(w), O = c(Array(t).fill(A)), I = 0; I < T; I++) ! function() {
                                        var r = _[I],
                                            a = e(h, i(r, O)),
                                            c = d(a, z);
                                        for (c.shift(); c.length < M[I];) {
                                            var m = function(r, t, e, n, i) {
                                                for (var u, o = "BigNumber" === i ? f(1e3) : 1e3, a = 0; a < 5; ++a) {
                                                    u = function(r, t, e) {
                                                        var n = "BigNumber" === e,
                                                            i = "Complex" === e,
                                                            u = Array(r).fill(0).map(r => 2 * Math.random() - 1);
                                                        return n && (u = u.map(r => f(r))), i && (u = u.map(r => g(r))), C(u = E(u, t), e)
                                                    }(t, e, i);
                                                    try {
                                                        u = D(r, u)
                                                    } catch (r) {
                                                        continue
                                                    }
                                                    if (y(F(u), o)) break
                                                }
                                                if (a >= 5) return null;
                                                for (a = 0;;) {
                                                    var s = D(r, u);
                                                    if (b(F(E(u, [s])), n)) break;
                                                    if (++a >= 10) return null;
                                                    u = C(s)
                                                }
                                                return u
                                            }(a, t, c, s, l);
                                            if (null === m) break;
                                            c.push(m)
                                        }
                                        var v = i(p(o), u);
                                        c = c.map(r => i(v, r)), S.push(...c.map(t => ({
                                            value: r,
                                            vector: n(t)
                                        })))
                                    }();
                                    return S
                                }(r, l, N, _, M, h, x);
                                return {
                                    values: M,
                                    eigenvectors: B
                                }
                            }
                            return {
                                values: M
                            }
                        }
                    }({
                        config: t,
                        addScalar: u,
                        subtract: o,
                        multiply: d,
                        multiplyScalar: h,
                        flatten: b,
                        divideScalar: p,
                        sqrt: A,
                        abs: s,
                        bignumber: D,
                        diag: E,
                        size: F,
                        reshape: C,
                        qr: _,
                        inv: m,
                        usolve: M,
                        usolveAll: N,
                        equal: a,
                        complex: w,
                        larger: g,
                        smaller: T,
                        matrixFromColumns: z,
                        dot: O
                    });
                    return e("eigs", {
                        Array: function(r) {
                            return k(i(r))
                        },
                        "Array, number|BigNumber": function(r, t) {
                            return k(i(r), {
                                precision: t
                            })
                        },
                        "Array, Object": (r, t) => k(i(r), t),
                        Matrix: function(r) {
                            return k(r, {
                                matricize: !0
                            })
                        },
                        "Matrix, number|BigNumber": function(r, t) {
                            return k(r, {
                                precision: t,
                                matricize: !0
                            })
                        },
                        "Matrix, Object": function(r, t) {
                            var e = {
                                matricize: !0
                            };
                            return n(e, t), k(r, e)
                        }
                    });

                    function k(r) {
                        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            u = !("eigenvectors" in n) || n.eigenvectors,
                            a = function(r, t, e) {
                                var n = r.toArray(),
                                    i = r.size();
                                if (2 !== i.length || i[0] !== i[1]) throw RangeError("Matrix must be square (size: ".concat(ev(i), ")"));
                                var u = i[0];
                                if (function(r, t, e) {
                                        for (var n = 0; n < t; n++)
                                            for (var i = 0; i < t; i++)
                                                if (g(D(s(B(r[n][i]))), e)) return !1;
                                        return !0
                                    }(n, u, t) && (function(r, t) {
                                        for (var e = 0; e < t; e++)
                                            for (var n = 0; n < t; n++) r[e][n] = S(r[e][n])
                                    }(n, u), function(r, t, e) {
                                        for (var n = 0; n < t; n++)
                                            for (var i = n; i < t; i++)
                                                if (g(D(s(o(r[n][i], r[i][n]))), e)) return !1;
                                        return !0
                                    }(n, u, t))) {
                                    var a = P(r, n, u);
                                    return I(n, u, t, a, e)
                                }
                                var f = P(r, n, u);
                                return j(n, u, t, f, e)
                            }(r, null !== (e = n.precision) && void 0 !== e ? e : t.relTol, u);
                        return n.matricize && (a.values = i(a.values), u && (a.eigenvectors = a.eigenvectors.map(r => {
                            var {
                                value: t,
                                vector: e
                            } = r;
                            return {
                                value: t,
                                vector: i(e)
                            }
                        }))), u && Object.defineProperty(a, "vectors", {
                            enumerable: !1,
                            get: () => {
                                throw Error("eigs(M).vectors replaced with eigs(M).eigenvectors")
                            }
                        }), a
                    }

                    function P(r, t, e) {
                        var n = r.datatype();
                        if ("number" === n || "BigNumber" === n || "Complex" === n) return n;
                        for (var i = !1, u = !1, o = !1, a = 0; a < e; a++)
                            for (var s = 0; s < e; s++) {
                                var f = t[a][s];
                                if (rV(f) || rY(f)) i = !0;
                                else if (rJ(f)) u = !0;
                                else if (rH(f)) o = !0;
                                else throw TypeError("Unsupported type in Matrix: " + tx(f))
                            }
                        if (u && o && console.warn("Complex BigNumbers not supported, this operation will lose precission."), o) {
                            for (var c = 0; c < e; c++)
                                for (var l = 0; l < e; l++) t[c][l] = w(t[c][l]);
                            return "Complex"
                        }
                        if (u) {
                            for (var h = 0; h < e; h++)
                                for (var p = 0; p < e; p++) t[h][p] = D(t[h][p]);
                            return "BigNumber"
                        }
                        if (i) {
                            for (var m = 0; m < e; m++)
                                for (var d = 0; d < e; d++) t[m][d] = x(t[m][d]);
                            return "number"
                        }
                        throw TypeError("Matrix contains unsupported types only.")
                    }
                }),
                om = "unbiased",
                oD = (r => {
                    var {
                        typed: t,
                        add: e,
                        subtract: n,
                        multiply: i,
                        divide: u,
                        apply: o,
                        isNaN: a
                    } = r;
                    return t("variance", {
                        "Array | Matrix": function(r) {
                            return s(r, om)
                        },
                        "Array | Matrix, string": s,
                        "Array | Matrix, number | BigNumber": function(r, t) {
                            return f(r, t, om)
                        },
                        "Array | Matrix, number | BigNumber, string": f,
                        "...": function(r) {
                            return s(r, om)
                        }
                    });

                    function s(r, t) {
                        var o, s = 0;
                        if (0 === r.length) throw SyntaxError("Function variance requires one or more parameters (0 provided)");
                        if (eK(r, function(r) {
                                try {
                                    o = void 0 === o ? r : e(o, r), s++
                                } catch (t) {
                                    throw ig(t, "variance", r)
                                }
                            }), 0 === s) throw Error("Cannot calculate variance of an empty array");
                        var f = u(o, s);
                        if (o = void 0, eK(r, function(r) {
                                var t = n(r, f);
                                o = void 0 === o ? i(t, t) : e(o, i(t, t))
                            }), a(o)) return o;
                        switch (t) {
                            case "uncorrected":
                                return u(o, s);
                            case "biased":
                                return u(o, s + 1);
                            case "unbiased":
                                var c = rJ(o) ? o.mul(0) : 0;
                                return 1 === s ? c : u(o, s - 1);
                            default:
                                throw Error('Unknown normalization "' + t + '". Choose "unbiased" (default), "uncorrected", or "biased".')
                        }
                    }

                    function f(r, t, e) {
                        try {
                            if (0 === r.length) throw SyntaxError("Function variance requires one or more parameters (0 provided)");
                            return o(r, t, r => s(r, e))
                        } catch (r) {
                            throw ig(r, "variance")
                        }
                    }
                }, "median"),
                od = "norm",
                ov = tC(od, ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], r => {
                    var {
                        typed: t,
                        abs: e,
                        add: n,
                        pow: i,
                        conj: u,
                        sqrt: o,
                        multiply: a,
                        equalScalar: s,
                        larger: f,
                        smaller: c,
                        matrix: l,
                        ctranspose: h,
                        eigs: p
                    } = r;
                    return t(od, {
                        number: Math.abs,
                        Complex: function(r) {
                            return r.abs()
                        },
                        BigNumber: function(r) {
                            return r.abs()
                        },
                        boolean: function(r) {
                            return Math.abs(r)
                        },
                        Array: function(r) {
                            return m(l(r), 2)
                        },
                        Matrix: function(r) {
                            return m(r, 2)
                        },
                        "Array, number | BigNumber | string": function(r, t) {
                            return m(l(r), t)
                        },
                        "Matrix, number | BigNumber | string": function(r, t) {
                            return m(r, t)
                        }
                    });

                    function m(r, t) {
                        var l = r.size();
                        if (1 === l.length) return function(r, t) {
                            if (t === Number.POSITIVE_INFINITY || "inf" === t) return u = 0, r.forEach(function(r) {
                                var t = e(r);
                                f(t, u) && (u = t)
                            }, !0), u;
                            if (t === Number.NEGATIVE_INFINITY || "-inf" === t) return r.forEach(function(r) {
                                var t = e(r);
                                (!o || c(t, o)) && (o = t)
                            }, !0), o || 0;
                            if ("fro" === t) return m(r, 2);
                            if ("number" == typeof t && !isNaN(t)) {
                                if (!s(t, 0)) {
                                    var u, o, a = 0;
                                    return r.forEach(function(r) {
                                        a = n(i(e(r), t), a)
                                    }, !0), i(a, 1 / t)
                                }
                                return Number.POSITIVE_INFINITY
                            }
                            throw Error("Unsupported parameter value")
                        }(r, t);
                        if (2 === l.length) {
                            if (l[0] && l[1]) return function(r, t) {
                                var i, s, c, l, m;
                                if (1 === t) return i = [], s = 0, r.forEach(function(r, t) {
                                    var u = t[1],
                                        o = n(i[u] || 0, e(r));
                                    f(o, s) && (s = o), i[u] = o
                                }, !0), s;
                                if (t === Number.POSITIVE_INFINITY || "inf" === t) return c = [], l = 0, r.forEach(function(r, t) {
                                    var i = t[0],
                                        u = n(c[i] || 0, e(r));
                                    f(u, l) && (l = u), c[i] = u
                                }, !0), l;
                                if ("fro" === t) return m = 0, r.forEach(function(r, t) {
                                    m = n(m, a(r, u(r)))
                                }), e(o(m));
                                if (2 === t) return function(r) {
                                    var t = r.size();
                                    if (t[0] !== t[1]) throw RangeError("Invalid matrix dimensions");
                                    var n = p(a(h(r), r)).values.toArray();
                                    return e(o(n[n.length - 1]))
                                }(r);
                                throw Error("Unsupported parameter value " + t)
                            }(r, t);
                            throw RangeError("Invalid matrix dimensions")
                        }
                    }
                }),
                og = (r => {
                    var {
                        typed: t,
                        config: e,
                        multiplyScalar: n,
                        addScalar: i,
                        unaryMinus: u,
                        norm: o,
                        BigNumber: a,
                        matrix: s,
                        DenseMatrix: f,
                        SparseMatrix: c,
                        cos: l,
                        sin: h
                    } = r;
                    return t("rotationMatrix", {
                        "": function() {
                            return "Matrix" === e.matrix ? s([]) : []
                        },
                        string: function(r) {
                            return s(r)
                        },
                        "number | BigNumber | Complex | Unit": function(r) {
                            return p(r, "Matrix" === e.matrix ? "dense" : void 0)
                        },
                        "number | BigNumber | Complex | Unit, string": function(r, t) {
                            return p(r, t)
                        },
                        "number | BigNumber | Complex | Unit, Array": function(r, t) {
                            var e = s(t);
                            return m(e), v(r, e, void 0)
                        },
                        "number | BigNumber | Complex | Unit, Matrix": function(r, t) {
                            m(t);
                            var n = t.storage() || ("Matrix" === e.matrix ? "dense" : void 0);
                            return v(r, t, n)
                        },
                        "number | BigNumber | Complex | Unit, Array, string": function(r, t, e) {
                            var n = s(t);
                            return m(n), v(r, n, e)
                        },
                        "number | BigNumber | Complex | Unit, Matrix, string": function(r, t, e) {
                            return m(t), v(r, t, e)
                        }
                    });

                    function p(r, t) {
                        var e = rJ(r) ? new a(-1) : -1,
                            i = l(r),
                            u = h(r);
                        return d([
                            [i, n(e, u)],
                            [u, i]
                        ], t)
                    }

                    function m(r) {
                        var t = r.size();
                        if (t.length < 1 || 3 !== t[0]) throw RangeError("Vector must be of dimensions 1x3")
                    }

                    function D(r) {
                        return r.reduce((r, t) => n(r, t))
                    }

                    function d(r, t) {
                        if (t) {
                            if ("sparse" === t) return new c(r);
                            if ("dense" === t) return new f(r);
                            throw TypeError('Unknown matrix type "'.concat(t, '"'))
                        }
                        return r
                    }

                    function v(r, t, e) {
                        var n = o(t);
                        if (0 === n) throw RangeError("Rotation around zero vector");
                        var s = rJ(r) ? a : null,
                            f = s ? new s(1) : 1,
                            c = s ? new s(-1) : -1,
                            p = s ? new s(t.get([0]) / n) : t.get([0]) / n,
                            m = s ? new s(t.get([1]) / n) : t.get([1]) / n,
                            v = s ? new s(t.get([2]) / n) : t.get([2]) / n,
                            g = l(r),
                            y = i(f, u(g)),
                            b = h(r);
                        return d([
                            [i(g, D([p, p, y])), i(D([p, m, y]), D([c, v, b])), i(D([p, v, y]), D([m, b]))],
                            [i(D([p, m, y]), D([v, b])), i(g, D([m, m, y])), i(D([m, v, y]), D([c, p, b]))],
                            [i(D([p, v, y]), D([c, m, b])), i(D([m, v, y]), D([p, b])), i(g, D([v, v, y]))]
                        ], e)
                    }
                }, "schur");
            r => {
                var {
                    typed: t,
                    matrix: e,
                    identity: n,
                    multiply: i,
                    qr: u,
                    norm: o,
                    subtract: a
                } = r;
                return t(og, {
                    Array: function(r) {
                        var t = s(e(r));
                        return {
                            U: t.U.valueOf(),
                            T: t.T.valueOf()
                        }
                    },
                    Matrix: function(r) {
                        return s(r)
                    }
                });

                function s(r) {
                    var t, e = r.size()[0],
                        s = r,
                        f = n(e),
                        c = 0;
                    do {
                        t = s;
                        var l = u(s),
                            h = l.Q;
                        if (s = i(l.R, h), f = i(f, h), c++ > 100) break
                    } while (o(a(s, t)) > 1e-4);
                    return {
                        U: f,
                        T: s
                    }
                }
            };
            var oy = tM({
                    config: u
                }),
                ob = t8({}),
                ox = eh({}),
                ow = ep({}),
                oA = e$({
                    Matrix: ow
                }),
                oE = eY({
                    BigNumber: oy,
                    Complex: ob,
                    DenseMatrix: oA,
                    Fraction: ox
                }),
                oF = ns({
                    typed: oE
                }),
                oC = nl({
                    typed: oE
                }),
                o_ = nh({
                    typed: oE
                }),
                oM = nx({
                    Complex: ob,
                    typed: oE
                }),
                oN = nA({
                    typed: oE
                }),
                oB = nF({
                    typed: oE
                }),
                oS = nN({
                    config: u,
                    typed: oE
                }),
                oT = nS({
                    typed: oE
                }),
                oz = nO({
                    typed: oE
                }),
                oO = nI({
                    typed: oE
                }),
                oI = nk({
                    typed: oE
                }),
                oj = nR({
                    config: u,
                    typed: oE
                }),
                ok = nZ({
                    equalScalar: oS,
                    typed: oE
                }),
                oP = nW({
                    typed: oE
                }),
                oq = nG({
                    typed: oE
                }),
                oU = n2({
                    typed: oE
                }),
                oR = n3({
                    BigNumber: oy,
                    Fraction: ox,
                    complex: oM,
                    typed: oE
                }),
                oL = n9({
                    typed: oE
                }),
                oZ = n5({
                    Matrix: ow,
                    equalScalar: oS,
                    typed: oE
                }),
                oV = n4({
                    typed: oE
                }),
                oJ = it({
                    BigNumber: oy,
                    typed: oE
                }),
                o$ = iu({
                    Complex: ob,
                    config: u,
                    typed: oE
                }),
                oH = ia({
                    typed: oE
                }),
                oY = is({
                    Fraction: ox,
                    typed: oE
                }),
                oW = ip({
                    DenseMatrix: oA,
                    Matrix: ow,
                    SparseMatrix: oZ,
                    typed: oE
                }),
                oX = iv({
                    bignumber: oJ,
                    fraction: oY,
                    number: oq
                }),
                oQ = ib({
                    isInteger: oI,
                    matrix: oW,
                    typed: oE
                }),
                oG = iw({
                    matrix: oW,
                    config: u,
                    typed: oE
                }),
                oK = iE({
                    matrix: oW,
                    typed: oE
                }),
                o0 = iC({
                    BigNumber: oy,
                    config: u,
                    matrix: oW,
                    typed: oE
                }),
                o1 = iM({
                    isInteger: oI,
                    matrix: oW,
                    typed: oE
                }),
                o2 = iB({
                    conj: oN,
                    transpose: oK,
                    typed: oE
                }),
                o8 = iT({
                    DenseMatrix: oA,
                    SparseMatrix: oZ,
                    matrix: oW,
                    typed: oE
                }),
                o3 = iO({
                    numeric: oX,
                    typed: oE
                }),
                o9 = i$({
                    DenseMatrix: oA,
                    concat: o1,
                    equalScalar: oS,
                    matrix: oW,
                    typed: oE
                }),
                o5 = iW({
                    BigNumber: oy,
                    DenseMatrix: oA,
                    SparseMatrix: oZ,
                    config: u,
                    matrix: oW,
                    typed: oE
                }),
                o7 = iQ({
                    DenseMatrix: oA,
                    concat: o1,
                    config: u,
                    matrix: oW,
                    typed: oE
                }),
                o4 = i9({
                    flatten: oT,
                    matrix: oW,
                    size: oG,
                    typed: oE
                }),
                o6 = i5({
                    addScalar: oC,
                    complex: oM,
                    conj: oN,
                    divideScalar: o3,
                    equal: o9,
                    identity: o5,
                    isZero: ok,
                    matrix: oW,
                    multiplyScalar: oP,
                    sign: oR,
                    sqrt: o$,
                    subtractScalar: oV,
                    typed: oE,
                    unaryMinus: oH,
                    zeros: o0
                }),
                ar = ur({
                    BigNumber: oy,
                    DenseMatrix: oA,
                    config: u,
                    equalScalar: oS,
                    matrix: oW,
                    typed: oE,
                    zeros: o0
                }),
                at = ue({
                    DenseMatrix: oA,
                    concat: o1,
                    config: u,
                    matrix: oW,
                    typed: oE
                }),
                ae = uo({
                    DenseMatrix: oA,
                    concat: o1,
                    equalScalar: oS,
                    matrix: oW,
                    subtractScalar: oV,
                    typed: oE,
                    unaryMinus: oH
                }),
                an = us({
                    DenseMatrix: oA,
                    divideScalar: o3,
                    equalScalar: oS,
                    matrix: oW,
                    multiplyScalar: oP,
                    subtractScalar: oV,
                    typed: oE
                }),
                ai = uc({
                    DenseMatrix: oA,
                    SparseMatrix: oZ,
                    addScalar: oC,
                    concat: o1,
                    equalScalar: oS,
                    matrix: oW,
                    typed: oE
                }),
                au = uh({
                    BigNumber: oy,
                    DenseMatrix: oA,
                    Fraction: ox,
                    concat: o1,
                    config: u,
                    equalScalar: oS,
                    matrix: oW,
                    typed: oE
                }),
                ao = um({
                    addScalar: oC,
                    conj: oN,
                    multiplyScalar: oP,
                    size: oG,
                    typed: oE
                }),
                aa = ub({
                    ImmutableDenseMatrix: uy({
                        DenseMatrix: oA,
                        smaller: at
                    }),
                    getMatrixDataType: oz
                }),
                as = uA({
                    DenseMatrix: oA,
                    concat: o1,
                    config: u,
                    matrix: oW,
                    typed: oE
                }),
                af = uC({
                    addScalar: oC,
                    dot: ao,
                    equalScalar: oS,
                    matrix: oW,
                    multiplyScalar: oP,
                    typed: oE
                }),
                ac = uZ({
                    add: ai,
                    config: u,
                    numeric: oX,
                    typed: oE
                }),
                al = uJ({
                    DenseMatrix: oA,
                    divideScalar: o3,
                    equalScalar: oS,
                    matrix: oW,
                    multiplyScalar: oP,
                    subtractScalar: oV,
                    typed: oE
                }),
                ah = uG({
                    divideScalar: o3,
                    isZero: ok,
                    matrix: oW,
                    multiply: af,
                    subtractScalar: oV,
                    typed: oE,
                    unaryMinus: oH
                }),
                ap = uK({
                    larger: as,
                    smaller: at
                }),
                am = u8({
                    DenseMatrix: oA,
                    concat: o1,
                    config: u,
                    matrix: oW,
                    typed: oE
                }),
                aD = u7({
                    bignumber: oJ,
                    matrix: oW,
                    add: ai,
                    config: u,
                    isPositive: oj,
                    larger: as,
                    largerEq: o7,
                    smaller: at,
                    smallerEq: am,
                    typed: oE
                }),
                ad = u6({
                    FibonacciHeap: ap,
                    addScalar: oC,
                    equalScalar: oS
                }),
                av = ot({
                    Index: aa,
                    matrix: oW,
                    range: aD,
                    typed: oE
                }),
                ag = oe({
                    abs: oF,
                    addScalar: oC,
                    det: ah,
                    divideScalar: o3,
                    identity: o5,
                    matrix: oW,
                    multiply: af,
                    typed: oE,
                    unaryMinus: oH
                }),
                ay = oi({
                    Complex: ob,
                    config: u,
                    fraction: oY,
                    identity: o5,
                    inv: ag,
                    matrix: oW,
                    multiply: af,
                    number: oq,
                    typed: oE
                }),
                ab = op({
                    abs: oF,
                    add: ai,
                    addScalar: oC,
                    atan: o_,
                    bignumber: oJ,
                    column: av,
                    complex: oM,
                    config: u,
                    cos: oB,
                    diag: o8,
                    divideScalar: o3,
                    dot: ao,
                    equal: o9,
                    flatten: oT,
                    im: oO,
                    inv: ag,
                    larger: as,
                    matrix: oW,
                    matrixFromColumns: o4,
                    multiply: af,
                    multiplyScalar: oP,
                    number: oq,
                    qr: o6,
                    re: oU,
                    reshape: oQ,
                    sin: oL,
                    size: oG,
                    smaller: at,
                    sqrt: o$,
                    subtract: ae,
                    typed: oE,
                    usolve: an,
                    usolveAll: al
                })
        }
    }
]);